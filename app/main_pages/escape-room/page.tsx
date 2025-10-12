'use client'; 

import React, { useState, useEffect } from 'react';
import { ESCAPE_STAGES, EscapeStage } from '@/app/lib/data/escape-room-stages'; 
// Use '@/app/lib/data/escape-room-stages' if you are using a 'src' folder or path aliases

export default function EscapeRoomPage() {
  const [currentStageId, setCurrentStageId] = useState(1);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [remainingTime, setRemainingTime] = useState(600); // Default 10 minutes
  const [userCode, setUserCode] = useState(ESCAPE_STAGES[0].starterCode || '');
  const [feedback, setFeedback] = useState('');
  const [isGameWon, setIsGameWon] = useState(false); // NEW STATE for win screen
  const [isSubmitting, setIsSubmitting] = useState(false); // STATE for checking server status
  
  const currentStageData: EscapeStage | undefined = ESCAPE_STAGES.find(s => s.id === currentStageId);

  // --- Utility Functions ---

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const advanceToNextStage = () => {
    if (currentStageId < ESCAPE_STAGES.length) {
      const nextStageId = currentStageId + 1;
      const nextStage = ESCAPE_STAGES.find(s => s.id === nextStageId);
      
      setCurrentStageId(nextStageId);
      setUserCode(nextStage?.starterCode || '');
      setFeedback('🔐 SUCCESS! Lock opened. Proceed to the next stage...');
    } else {
      // Final Win Logic
      setIsTimerRunning(false); // Stops the clock
      setIsGameWon(true); // Trigger the win screen
      setFeedback(''); // Clear feedback
    }
  };


  // --- Dynamic Hint Logic for Stage 1 ---
  const analyzeStage1Code = (code: string): string | null => {
    // 1. Normalize the code: Replace all non-standard whitespace (tabs, non-breaking spaces) with a standard space,
    //    and remove carriage returns. We rely on the newline character \n for indentation check.
    const normalizedCode = code.replace(/[\u00A0\t]/g, ' ').replace(/\r/g, ''); 
    const trimmedCode = normalizedCode.trim();

    // The core line we are looking for, including required spaces and quotes
    const targetReturnLine = `  return key === 'masterkey';`;

    // --- 1. SUCCESS CHECK (More Forgiving) ---
    // If the required indented line exists AND the function wrapper exists, we pass.
    if (normalizedCode.includes(targetReturnLine) && trimmedCode.startsWith('function checkLock(key)') && trimmedCode.includes('}')) {
        return null; 
    }
    
    // --- 2. FAILED CHECK (Detailed Hints) ---

    // Check 1: Function Structure
    if (!trimmedCode.startsWith('function checkLock(key)')) {
      return 'Hint: Ensure your function signature starts correctly: `function checkLock(key) {`';
    }

    // Check 2: Indentation (Must have exactly `\n  return`)
    const returnLineIndex = normalizedCode.indexOf('return key');
    const lineBeforeReturn = normalizedCode.substring(0, returnLineIndex);
    const startsWithCorrectIndentation = normalizedCode.includes('\n  return');
    
    if (!startsWithCorrectIndentation) {
      return 'Hint: Check your indentation! The `return` line requires exactly two spaces.';
    }

    // Check 3: Quotes (Must use single quotes, ' )
    const hasSingleQuotes = !trimmedCode.includes('"') && trimmedCode.includes("'masterkey'");
    if (!hasSingleQuotes) {
        return 'Hint: You must use single quotes (`\'`) around the string "masterkey", not double quotes.';
    }
    
    // Check 4: Operator Spacing (Must have ' === ')
    const hasOperatorSpacing = trimmedCode.includes(' === ');
    if (!hasOperatorSpacing) {
        return 'Hint: You are missing a required space! Ensure there is a single space on BOTH sides of the comparison operator (`===`).';
    }

    // Final Fallback: Catches minor deviations like extra newlines or spaces outside the checked structure
    return 'Hint: Your code looks extremely close! Check for any extra/missing characters, especially extraneous spaces on blank lines.';
  };

  // --- Dynamic Hint Logic for Stage 4 (NEW PRE-CHECK) ---
  const analyzeStage4Code = (code: string): string | null => {
      // Check 1: Case-Sensitive Function Name
      if (!code.includes('function jsonToCsv(')) {
          return 'Hint: The server requires the function to be named `jsonToCsv` (lowercase "c" in Csv). Check your capitalization!';
      }
      // Check 2: Essential logic pieces (optional, main logic check is on server)
      if (!code.includes('JSON.parse') || !code.includes('Object.keys')) {
          return 'Hint: Remember to parse the JSON string and extract the keys/values.';
      }
      return null;
  };


  // --- Timer Implementation ---
  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;
    if (isTimerRunning && remainingTime > 0) {
      timer = setInterval(() => {
        setRemainingTime((prevTime) => prevTime - 1);
      }, 1000);
    } else if (remainingTime === 0 && isTimerRunning) {
      setFeedback('⏰ Time is up! You failed to escape. Game Over.');
      setIsTimerRunning(false);
    }
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [isTimerRunning, remainingTime]);

  const handleStartGame = (initialTime: number) => {
    setRemainingTime(initialTime); 
    setIsTimerRunning(true);
    setCurrentStageId(1);
    setIsGameWon(false); 
    setFeedback('');
    setUserCode(ESCAPE_STAGES[0].starterCode || '');
  };

  // --- Logic Handlers ---

  const handleImageClick = () => {
    if (currentStageData?.id === 2 && currentStageData.type === 'click') {
      // Clue revealed logic
      console.log('DEBUG_CLUE: The next key component is found: 1000!');
      alert('🔍 Debug message logged to console! Check console for the clue to Stage 3.');
      
      advanceToNextStage();
    }
  }

  const handleCodeSubmit = async () => {
    // Prevent multiple submissions while API call is pending
    if (!currentStageData || currentStageData.type !== 'code' || isSubmitting) return;
    
    // --- 1. Client-Side Validation (Stage 1) ---
    if (currentStageId === 1) {
        const hint = analyzeStage1Code(userCode);
        
        if (hint === null) {
            // Success
            advanceToNextStage();
        } else {
            // Failure with specific hint
            setFeedback(`❌ Formatting Error. ${hint}`); 
        }
        return;
    }

    // --- 1.5. Client-Side Pre-Check (Stage 4 Name Check) ---
    if (currentStageId === 4) {
        const hint = analyzeStage4Code(userCode);
        if (hint !== null) {
            setFeedback(`❌ Function Name Error. ${hint}`); 
            return;
        }
    }
    
    // --- 2. Server-Side Validation (Stages 3 & 4) ---
    setIsSubmitting(true); // START SUBMISSION
    setFeedback('⚙️ Submitting code for secure server execution...');

    try {
      const response = await fetch('/api/escape-room', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          stageId: currentStageId, 
          userCode: userCode 
        }),
      });
      
      if (!response.ok) {
        const errorText = await response.text();
        setFeedback(`🔴 API Error: Could not connect or server failed (Status ${response.status}). Check server console.`);
        console.error('API Response Error:', errorText);
        return; 
      }

      const result = await response.json();

      if (result.success) {
        advanceToNextStage();
      } else {
        setFeedback(`❌ Code Rejected: ${result.message || 'The function did not produce the correct output.'}`);
      }
    } catch (error) {
      console.error(error);
      setFeedback('🔴 Network Error: Could not connect to the API. Check Next.js server status.');
    } finally {
      setIsSubmitting(false); // END SUBMISSION
    }
  };

  // --- Post-Win Component ---
  const renderWinScreen = () => {
    const totalTime = 600;
    const timeSpent = totalTime - remainingTime;
    const formattedTimeSpent = formatTime(timeSpent);
    
    return (
      <div className="flex flex-col items-center justify-center text-center p-10">
        <div className="text-8xl mb-6 animate-pulse">
            🔓 
        </div>
        <h2 className="text-5xl font-extrabold text-green-400 mb-4">
          ESCAPE SUCCESSFUL!
        </h2>
        <p className="text-2xl text-white mb-8">
          You solved all the coding puzzles and found the exit key.
        </p>
        
        <div className="p-6 bg-gray-700/50 rounded-xl shadow-inner mb-8">
          <p className="text-xl font-bold text-gray-300">Total Time Elapsed:</p>
          <p className="text-5xl font-mono text-yellow-300">{formattedTimeSpent}</p>
        </div>

        <button
          onClick={() => handleStartGame(600)}
          className="px-8 py-3 text-lg bg-blue-600 text-white font-bold rounded-lg shadow-lg hover:bg-blue-700 transition duration-300"
        >
          Play Again
        </button>
      </div>
    );
  }

  // --- Render Stage Content (pre-win) ---
  const renderStagePuzzle = () => {
    
    if (currentStageData?.type === 'code') {
      return (
        <div className="mt-4">
          <p className="mb-4 text-sm text-gray-300">{currentStageData.description}</p>
          {/* Code Input Area */}
          <textarea
            value={userCode}
            onChange={(e) => setUserCode(e.target.value)}
            className="w-full p-4 font-mono text-sm border border-gray-500 bg-gray-900 text-green-400 rounded-lg h-64 resize-none focus:ring-blue-500 focus:border-blue-500"
            placeholder="// Start coding here..."
            spellCheck="false"
          />
          <button
            onClick={handleCodeSubmit} 
            disabled={isSubmitting} // Disable when submitting
            className={`mt-4 px-6 py-3 font-semibold rounded-md shadow-lg transition duration-150 ${isSubmitting 
                ? 'bg-gray-500 cursor-not-allowed' 
                : 'bg-indigo-600 hover:bg-indigo-700 text-white'}`}
          >
            {isSubmitting ? 'Checking...' : 'Check Code & Unlock'}
          </button>
        </div>
      );
    } 
    
    if (currentStageData?.type === 'click') {
      return (
        <div className="mt-4 flex flex-col items-center">
          <p className="mb-6 text-base text-gray-300">{currentStageData.description}</p>
          {/* Image for Click-to-Debug */}
          <img
            src="/images/suspicious_artifact.png" 
            alt="A suspicious artifact on a desk"
            onClick={handleImageClick}
            className="cursor-pointer w-72 h-72 mx-auto border-4 border-yellow-500 rounded-xl shadow-2xl hover:border-yellow-400 transition transform hover:scale-[1.05]"
          />
          <p className="mt-4 text-xs text-yellow-400">Click the object to interact and debug!</p>
        </div>
      );
    }
    return null;
  };


  // --- Game Start Screen ---
  if (!isTimerRunning && !isGameWon) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[80vh] bg-gray-900 text-white transition-colors duration-300">
        <h1 className="text-5xl font-extrabold mb-4 text-blue-400">The Coding Escape Room 🔑</h1>
        <p className="text-xl mb-8 text-gray-400">Solve all four coding locks before time runs out to escape the room!</p>
        <button
          onClick={() => handleStartGame(600)} // 10 minutes
          className="px-10 py-4 text-xl bg-blue-600 text-white font-bold rounded-lg shadow-xl hover:bg-blue-700 transform hover:scale-[1.05] transition duration-300"
        >
          Start 10-Minute Challenge
        </button>
        <div className="mt-4 text-sm text-gray-500">
            <button onClick={() => handleStartGame(300)} className="mx-2 underline">
                Expert Mode: Start with 5 Minutes
            </button>
        </div>
      </div>
    );
  }

  // --- Main Escape Room UI ---
  return (
    <div 
      className="relative min-h-screen p-8" 
      style={{ 
        backgroundImage: 'url(/images/escape-room-bg.jpg)', 
        backgroundSize: 'cover', 
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Student Number in top left (as required by Assignment 1) */}
      <div className="absolute top-4 left-4 text-xl font-bold text-white/90">
        StudentID: 21930306
      </div>
      
      <div className="max-w-5xl mx-auto p-8 bg-black/80 backdrop-blur-sm rounded-2xl shadow-2xl border border-gray-700">
        
        {/* Timer and Status Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-6 pb-4 border-b border-gray-600">
          <h1 className="text-3xl font-bold text-white mb-2 md:mb-0">
            {isGameWon ? 'VICTORY' : currentStageData?.title || 'Game State Error'}
          </h1>
          {!isGameWon && (
             <div className={`text-4xl font-mono p-3 rounded-xl shadow-inner ${remainingTime < 60 ? 'bg-red-800 text-yellow-300 animate-pulse' : 'bg-gray-800 text-green-400'}`}>
                ⏰ {formatTime(remainingTime)}
            </div>
          )}
        </div>

        {/* Puzzle Content or Win Screen */}
        {isGameWon ? renderWinScreen() : currentStageData && renderStagePuzzle()}
        {/* Render game over or no-stage message if game is not won and timer stopped */}
        {!isGameWon && !isTimerRunning && remainingTime === 0 && (
            <div className="text-center text-red-500 text-2xl font-bold">GAME OVER - TIME EXPIRED!</div>
        )}

        {/* Feedback Message (only during active game) */}
        {feedback && (
          <div className={`mt-6 p-4 rounded-lg font-semibold border-2 ${feedback.includes('SUCCESS') || feedback.includes('CONGRATULATIONS') ? 'bg-green-900/50 text-green-300 border-green-500' : 'bg-red-900/50 text-red-300 border-red-500'}`}>
            {feedback}
          </div>
        )}
      </div>
    </div>
  );
}
