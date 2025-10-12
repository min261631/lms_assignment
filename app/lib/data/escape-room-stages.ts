// app/lib/data/escape-room-stages.ts

// Define the structure for a single puzzle stage
export interface EscapeStage {
  id: number;
  title: string;
  type: 'code' | 'click';
  description: string;
  starterCode?: string;
  // Note: answerValidator is only used client-side for Stage 1 now.
  answerValidator: (input: string | boolean) => boolean; 
}

export const ESCAPE_STAGES: EscapeStage[] = [
  { 
    id: 1, 
    title: 'Stage 1: Format Code Correctly', 
    type: 'code', 
    description: 'The first lock requires code cleanliness. Format the code block below to use 2-space indentation and single quotes.',
    starterCode: `function checkLock(key) {  return key ==="masterkey";}`,
    // Client-side validation for speed
    answerValidator: (code: string | boolean) => {
      if (typeof code !== 'string') return false;
      return code.trim() === `function checkLock(key) {\n  return key === 'masterkey';\n}`;
    }
  },
  { 
    id: 2, 
    title: 'Stage 2: Debugging The Clue', 
    type: 'click', 
    description: 'A suspicious artifact holds the next clue. Click the image to initiate a "debug" sequence and reveal the key in the console.',
    answerValidator: (clicked: string | boolean) => !!clicked 
  },
  { 
    id: 3, 
    title: 'Stage 3: Generate Sequence (0-1000)', 
    type: 'code', 
    description: 'Write a JS function named `generateSequence` that returns an array containing every number from 0 up to 1000 (inclusive).',
    starterCode: `function generateSequence() {\n  // Write your code here using a loop\n  let numbers = [];\n  //...\n  return numbers;\n}`,
    // Client-side validation is irrelevant here, server validation is used.
    answerValidator: () => true 
  },
  { 
    id: 4, 
    title: 'Stage 4: Data Porting Challenge', 
    type: 'code', 
    description: 'Write a JS function named `jsonToCsv` that converts the JSON string `{"user": "exit_key"}` into a single CSV string: `user,exit_key`.',
    starterCode: `function jsonToCsv(jsonString) {\n  // Implement conversion logic\n  const data = JSON.parse(jsonString);\n  //...\n  return csvString;\n}`,
    // Client-side validation is irrelevant here, server validation is used.
    answerValidator: () => true
  }
];
