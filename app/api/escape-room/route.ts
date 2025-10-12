// app/api/escape-room/route.ts

import { NextResponse } from 'next/server';
import vm from 'vm';
import { ESCAPE_STAGES } from '@/app/lib/data/escape-room-stages'; 

/**
 * Executes a function string in a sandboxed Node.js environment.
 * @param code A string containing the JavaScript function definition.
 * @param functionName The name of the function to call (e.g., 'generateSequence').
 * @returns The result of the function execution or an error object.
 */
function safelyExecuteCode(code: string, functionName: string): any {
  // Use a minimal sandbox context
  const sandbox = { 
    // Console output is safely suppressed in the sandbox
    console: { log: () => {}, error: () => {} }, 
    JSON: JSON, // Allow JSON parsing/stringify for Stage 4
  };
  
  const context = vm.createContext(sandbox);

  try {
    // 1. Define the user's function in the sandbox
    new vm.Script(code).runInContext(context);
    
    // 2. Call the user's function and capture the return value
    const executionScript = `${functionName}('${JSON.stringify({"user": "exit_key"})}');`; // Stage 4 needs this argument
    
    // For Stage 3, the argument is ignored as the function should be parameterless
    const result = new vm.Script(executionScript).runInContext(context);

    return { success: true, output: result };
    
  } catch (error: any) {
    // If the function is not defined or runtime error occurs
    return { success: false, error: error.message };
  }
}

// Handler for POST requests to /api/escape-room
export async function POST(request: Request) {
  try {
    const { stageId, userCode } = await request.json();

    const stage = ESCAPE_STAGES.find(s => s.id === stageId);

    if (!stage || stage.type !== 'code') {
      return NextResponse.json({ success: false, message: 'Invalid stage ID or type.' }, { status: 400 });
    }
    
    // Stage 1 (Formatting) remains client-side for quick feedback
    if (stage.id === 1 || stage.id === 2) {
      // Stage 1 check is simple string comparison
      return NextResponse.json({ success: stage.answerValidator(userCode) });
    }

    // --- Server-Side Execution & Validation (Stages 3 & 4) ---
    
    const functionName = stage.id === 3 ? 'generateSequence' : 'jsonToCsv';
    const executionResult = safelyExecuteCode(userCode, functionName);

    if (!executionResult.success) {
      return NextResponse.json({ success: false, message: `Code failed to execute: ${executionResult.error}` });
    }

    let isCorrect = false;

    if (stage.id === 3) {
      // Validation for "Generate 0-1000"
      const output = executionResult.output;
      
      // Robust check: Is it an array, does it have 1001 elements (0 to 1000), 
      // and does every element equal its index?
      isCorrect = Array.isArray(output) && 
                  output.length === 1001 && 
                  output.every((val, index) => val === index);
    } 
    else if (stage.id === 4) {
      // Validation for "JSON to CSV" - Expected result: 'user,exit_key'
      const output = executionResult.output;
      isCorrect = typeof output === 'string' && output.trim() === 'user,exit_key';
    }

    return NextResponse.json({ 
      success: isCorrect, 
      message: isCorrect ? 'Code Accepted!' : 'Output is incorrect.' 
    });

  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json({ success: false, message: 'Internal Server Error during execution.' }, { status: 500 });
  }
}
