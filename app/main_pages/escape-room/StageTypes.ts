// app/main_pages/escape-room/StageTypes.ts

// Defines the fixed challenge types an instructor can select
export type ChallengeType = "format-code" | "debug-code" | "generate-numbers" | "port-data" | "click-debug" | "custom";

// Defines the data structure for a single puzzle stage defined by the instructor
export interface Stage {
  id: string;
  title: string;
  description: string;
  type: ChallengeType;
  question: string; // The text prompt for the student
  answer: string; // The expected output or solution string (case/space normalized)
  hints: string[]; // Hints, one per line
  code?: string; // Optional starter code snippet
  clueImage?: string; // Optional image URL for that specific stage (used for click-debug)
}

// Defines the overall configuration of the room
export interface RoomConfig {
  title: string;
  description: string;
  timerMinutes: number;
  backgroundImage: string; // The URL for the primary background
}

// Ensure this file is treated as a module
export {};