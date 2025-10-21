// app/main_pages/escape-room/EscapeRoomPlayer.tsx
'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Clock, CheckCircle2, XCircle, Lightbulb, Trophy, Code, Hash, FileCode, MousePointerClick, AlertTriangle, Bug } from 'lucide-react';
import { RoomConfig, Stage, ChallengeType } from './StageTypes';
// NOTE: Assuming these UI components exist in your project path
import { Button } from '@/app/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/app/components/ui/card';
import { Textarea } from '@/app/components/ui/textarea';
import { Progress } from '@/app/components/ui/progress';
import { Alert } from '@/app/components/ui/alert';

// ====== ADDED: API helper (API routes now in same app) ======
const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL || '';

async function postJSON<T>(url: string, body: unknown): Promise<T> {
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(body),
  });
  if (!res.ok) throw new Error(await res.text());
  return res.json() as Promise<T>;
}

async function saveProgress(payload: {
  userId: string;
  stageKey: string;
  status: 'passed' | 'failed' | 'in-progress';
  score?: number | null;
}) {
  // POST /api/progress (Prisma route in your API app)
  return postJSON(`${API_BASE}/api/progress`, payload);
}

// ====== /ADDED ======

interface EscapeRoomPlayerProps {
  roomConfig: RoomConfig;
  stages: Stage[];
  // ====== ADDED: current user ID to associate progress with ======
  currentUserId: string; // e.g., from a simple "Choose Player" screen
}

// Map the challenge type to a Lucide Icon for the UI
const challengeIcons: Record<ChallengeType, React.ComponentType<{ className?: string }>> = {
  "format-code": Code,
  "debug-code": Bug, 
  "generate-numbers": Hash,
  "port-data": FileCode,
  "click-debug": MousePointerClick,
  "custom": Code,
};

// --- Helper Functions (Mimicking the Generator's JS Validation Logic) ---

const checkStageAnswer = (stage: Stage, input: string): { success: boolean, message: string } => {
  // 1. Normalize both inputs (The simple answer check)
  // In the generated HTML, we remove all whitespace for coding challenges.
  const normalize = (str: string) => str.trim().toLowerCase().replace(/\s+/g, '');

  const normalizedInput = normalize(input);
  const normalizedSolution = normalize(stage.answer);

  if (normalizedInput === normalizedSolution) {
      return { success: true, message: 'SUCCESS! Lock Opened.' };
  }
  
  // 2. Advanced Code Execution Simulation (for preview only)
  if (stage.type === 'generate-numbers' || stage.type === 'port-data') {
      try {
          const funcName = stage.type === 'generate-numbers' ? 'generateSequence' : 'jsonToCsv';
          
          // Create an IIFE within the function constructor to execute the user's code locally
          const executionWrapper = new Function('testInput', `
              // Execute user submitted code and define the function
              ${input}; 
              
              if (typeof ${funcName} !== 'function') {
                  throw new Error('Function "${funcName}" not found in your code. Check name and syntax.');
              }
              
              let executionResult;

              if (testInput === 'generate-numbers') {
                  // Test case: should return array 0-1000
                  executionResult = ${funcName}();
                  
                  const isCorrect = Array.isArray(executionResult) && 
                                    executionResult.length === 1001 && 
                                    executionResult[0] === 0 && 
                                    executionResult[1000] === 1000;
                                    
                  return { success: isCorrect, message: isCorrect ? 'Code Verified!' : 'Output Array is incorrect or malformed.' };

              } else if (testInput === 'port-data') {
                  // Test case: '{"user": "exit_key"}' -> 'user,exit_key'
                  const inputStr = '{"user": "exit_key"}';
                  const expectedOutput = 'user,exit_key';
                  
                  executionResult = ${funcName}(inputStr);

                  const isCorrect = String(executionResult).trim().toLowerCase() === expectedOutput.toLowerCase();
                  return { success: isCorrect, message: isCorrect ? 'Data Porting Successful!' : 'Output string is incorrect.' };
              }

              return { success: false, message: 'Logic error in the puzzle type.' };
          `);

          const testCase = stage.type;
          const result = executionWrapper(testCase);
          
          if (result && result.success !== undefined) {
              return result;
          }
          
          return { success: false, message: 'Code execution failed to return a structured result.' };

      } catch (e) {
          const error = e as Error;
          return { success: false, message: `CODE EXECUTION ERROR: ${error.message}` };
      }
  }

  return { success: false, message: 'INCORRECT. Please check your logic or answer.' };
}

// ====== ADDED: small scoring helper (optional) ======
function computeScore(totalStages: number, currentIndex: number, hintsUsed: number, timeRemaining: number) {
  // Simple example: base 10, minus hints used (min 0), small time bonus every 60s left.
  const base = 10;
  const hintPenalty = Math.min(hintsUsed, 10);
  const timeBonus = Math.floor(timeRemaining / 60); // +1 per remaining minute
  return Math.max(0, base - hintPenalty) + timeBonus;
}
// ====== /ADDED ======

// --- Main Player Component ---
const EscapeRoomPlayer: React.FC<EscapeRoomPlayerProps> = ({ roomConfig, stages, currentUserId }) => {
  const [currentStageIndex, setCurrentStageIndex] = useState(0);
  const [completedStages, setCompletedStages] = useState<Set<number>>(new Set());
  const [timeRemaining, setTimeRemaining] = useState(roomConfig.timerMinutes * 60);
  const [isRunning, setIsRunning] = useState(true); 
  const [studentAnswer, setStudentAnswer] = useState(stages[0]?.code || ''); 
  const [feedback, setFeedback] = useState<{ type: "success" | "error" | "info"; message: string } | null>(null);
  const [hintsRevealed, setHintsRevealed] = useState<number>(0);
  const [isComplete, setIsComplete] = useState(false);

  // ====== ADDED: guard to avoid duplicate "timeout fail" persistence ======
  const timeoutPersistedRef = useRef(false);

  const currentStage = stages[currentStageIndex];
  const progress = (completedStages.size / stages.length) * 100;
  const Icon = currentStage ? challengeIcons[currentStage.type] : Code;

  // Timer effect
  useEffect(() => {
    if (!isRunning || timeRemaining <= 0) return;

    const interval = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev <= 1) {
          setIsRunning(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning, timeRemaining]);

  // ====== ADDED: on timer expiration, persist a "failed" for the current stage (once) ======
  useEffect(() => {
    if (timeRemaining === 0 && currentStage && !timeoutPersistedRef.current) {
      timeoutPersistedRef.current = true;
      const stageKey = `stage-${currentStageIndex + 1}`;
      saveProgress({
        userId: currentUserId,
        stageKey,
        status: 'failed',
        score: 0
      }).catch(() => {/* swallow to avoid UI break */});
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timeRemaining, currentStageIndex, currentStage, currentUserId]);
  // ====== /ADDED ======

  // Reset answer input when stage changes
  useEffect(() => {
    if (currentStage) {
      setStudentAnswer(currentStage.code || currentStage.answer || '');
      setHintsRevealed(0);
      setFeedback(null);
    }
  }, [currentStage]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };
  
  // Early return checks after all hooks
  if (!stages || stages.length === 0 || !stages[0]) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
        <Card className="p-8 text-center bg-red-900/20 border-red-500">
          <AlertTriangle className="w-10 h-10 mx-auto text-red-500 mb-4" />
          <CardTitle>Error</CardTitle>
          <CardDescription className="text-red-300">Cannot start preview: No puzzle stages defined.</CardDescription>
        </Card>
      </div>
    );
  }

  // ====== ADDED: persist on advance (pass/fail) ======
  const handleAdvanceStage = (result: { success: boolean, message: string }) => {
    setFeedback({ type: result.success ? "success" : "error", message: result.message });
    
    // Persist progress immediately
    const stageKey = `stage-${currentStageIndex + 1}`;
    const score = result.success ? computeScore(stages.length, currentStageIndex, hintsRevealed, timeRemaining) : 0;

    saveProgress({
      userId: currentUserId,
      stageKey,
      status: result.success ? 'passed' : 'failed',
      score
    }).catch(() => {/* ignore network error here to avoid blocking UX */});

    if (result.success) {
      setCompletedStages(new Set([...completedStages, currentStageIndex]));

      setTimeout(() => {
        if (currentStageIndex < stages.length - 1) {
          setCurrentStageIndex(currentStageIndex + 1);
          setFeedback(null);
        } else {
          setIsComplete(true);
          setIsRunning(false);
        }
      }, 1000); 
    }
  };
  // ====== /ADDED ======
  
  // Logic for submitting a code/text answer
  const handleSubmitAnswer = () => {
    if (currentStage.type === 'click-debug') return; 
    if (!studentAnswer.trim()) {
      setFeedback({ type: "error", message: "Please enter your answer before submitting." });
      return;
    }

    const result = checkStageAnswer(currentStage, studentAnswer);
    handleAdvanceStage(result);
  };

  // Logic for the click-debug puzzle
  const handleImageClick = () => {
    if (currentStage.type !== 'click-debug') return;
    
    // 1. Log the hint to the console (the "debug" part)
    const hint = currentStage.hints[0] || "No specific hint was set by the instructor.";
    console.log("DEBUG HINT:", hint);
    
    // 2. Automatically advance the stage (because clicking is the solution)
    handleAdvanceStage({ success: true, message: '🔍 Clue found! Check the console (F12) for the hint. Advancing to the next lock.' });
  };

  const revealHint = () => {
    if (currentStage && hintsRevealed < currentStage.hints.length) {
      setHintsRevealed(hintsRevealed + 1);
      setFeedback({ type: "info", message: currentStage.hints[hintsRevealed] });
    }
  };

  // ====== ADDED: optional – mark skip as "in-progress" (no score), don’t auto-advance server state ======
  const skipStage = () => {
    if (currentStageIndex < stages.length - 1) {
      // Persist "in-progress" so instructors can see attempts
      const stageKey = `stage-${currentStageIndex + 1}`;
      saveProgress({
        userId: currentUserId,
        stageKey,
        status: 'in-progress',
        score: null
      }).catch(() => {});
      setCurrentStageIndex(currentStageIndex + 1);
      setFeedback(null);
    }
  };
  // ====== /ADDED ======

  if (isComplete) {
    const timeUsed = roomConfig.timerMinutes * 60 - timeRemaining;
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
        <Card className="max-w-2xl w-full dark:bg-gray-800">
          <CardHeader className="text-center">
            <Trophy className="w-12 h-12 mx-auto text-yellow-500 mb-4" />
            <CardTitle className="text-3xl text-yellow-500">CONGRATULATIONS!</CardTitle>
            <CardDescription className="text-base dark:text-gray-300">You successfully completed the room!</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-center p-4 bg-gray-700/50 rounded-lg">
              <p className="text-xl font-bold dark:text-gray-300">Time Used:</p>
              <p className="text-3xl font-mono text-green-400">{formatTime(timeUsed)}</p>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (timeRemaining === 0) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
        <Card className="max-w-2xl w-full dark:bg-gray-800">
          <CardHeader className="text-center">
            <XCircle className="w-12 h-12 mx-auto text-red-500 mb-4" />
            <CardTitle className="text-3xl text-red-500">TIME EXPIRED!</CardTitle>
            <CardDescription className="text-base dark:text-gray-300">You ran out of time before completing all stages.</CardDescription>
          </CardHeader>
        </Card>
      </div>
    );
  }
  
  // --- Active Game Render ---
  return (
    <div 
      className="min-h-screen bg-gray-900" 
      style={roomConfig.backgroundImage ? {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.85)), url(${roomConfig.backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: 'fixed',
      } : undefined}
    >
      <div className="container mx-auto px-4 py-6 max-w-5xl">
        {/* Header with Timer and Progress */}
        <div className="mb-6 space-y-4 p-4 rounded-lg bg-black/50 shadow-lg border border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-white">{roomConfig.title}</h1>
              <p className="text-sm text-gray-400">Stage {currentStageIndex + 1} of {stages.length}</p>
            </div>
            <div className="text-right">
              <div className="flex items-center gap-2 text-2xl font-mono font-bold text-green-400">
                <Clock className="w-6 h-6" />
                {formatTime(timeRemaining)}
              </div>
              <p className="text-sm text-gray-400">Time Remaining</p>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm text-gray-400">
              <span>Progress</span>
              <span className="font-medium">{completedStages.size} / {stages.length} completed</span>
            </div>
            <Progress value={progress} className="h-2 bg-gray-700" />
          </div>
        </div>

        {/* Stage Content */}
        {currentStage && (
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Challenge Card */}
            <Card className="dark:bg-gray-800 border-yellow-500/50">
              <CardHeader>
                <div className="flex items-start gap-3">
                  <Icon className="w-6 h-6 text-yellow-500" />
                  <div className="flex-1">
                    <CardTitle className="text-xl">{currentStage.title}</CardTitle>
                    <CardDescription className="dark:text-gray-400">{currentStage.description}</CardDescription>
                  </div>
                  {completedStages.has(currentStageIndex) && (
                    <div className="text-green-500 font-bold flex items-center">
                      <CheckCircle2 className="w-4 h-4 mr-1" />
                      Solved
                    </div>
                  )}
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2 dark:text-white">Task:</h3>
                  <p className="text-sm text-gray-400 whitespace-pre-wrap">{currentStage.question}</p>
                </div>

                {currentStage.type === 'click-debug' ? (
                  <div className="text-center p-4">
                    <img
                      src={currentStage.clueImage || roomConfig.backgroundImage || 'https://placehold.co/300x300/4b5563/e5e7eb?text=Clue+Image'}
                      alt="Clue Image"
                      className="w-full max-w-sm h-auto object-cover mx-auto cursor-pointer border-4 border-yellow-400 rounded-lg hover:opacity-80 transition"
                      onClick={handleImageClick}
                      onError={(e) => e.currentTarget.src = 'https://placehold.co/300x300/4b5563/e5e7eb?text=Click+Me'}
                    />
                    <p className="text-xs text-yellow-400 mt-2">Click to interact!</p>
                  </div>
                ) : (
                  currentStage.code && (
                    <div>
                      <h3 className="font-semibold mb-2 dark:text-white">Starter Code:</h3>
                      <pre className="p-4 rounded-lg bg-black text-green-400 text-sm font-mono overflow-x-auto border border-gray-700">
                        <code>{currentStage.code}</code>
                      </pre>
                    </div>
                  )
                )}

                {/* Hints Section */}
                {currentStage.hints.length > 0 && (
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold dark:text-white">Hints:</h3>
                      {hintsRevealed < currentStage.hints.length && (
                        <Button variant="outline" size="sm" onClick={revealHint} className="text-yellow-500 border-yellow-500/50 hover:bg-yellow-500/10">
                          <Lightbulb className="w-4 h-4 mr-2" />
                          Reveal Hint ({hintsRevealed}/{currentStage.hints.length})
                        </Button>
                      )}
                    </div>
                    {currentStage.hints.slice(0, hintsRevealed).map((hint, index) => (
                      <Alert key={index} className="mt-2 bg-yellow-500/10 border-yellow-500/30 text-yellow-300">
                        <Lightbulb className="w-4 h-4 text-yellow-500" />
                        {hint}
                      </Alert>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Answer Card */}
            <Card className="dark:bg-gray-800">
              <CardHeader>
                <CardTitle className="text-xl">Your Solution</CardTitle>
                <CardDescription className="dark:text-gray-400">Enter your function or final key below.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Textarea
                  placeholder="Type your answer here..."
                  rows={currentStage.type === 'click-debug' ? 4 : 12}
                  className="font-mono text-sm dark:bg-gray-900 dark:border-gray-700 text-green-400"
                  value={studentAnswer}
                  onChange={(e) => setStudentAnswer(e.target.value)}
                  disabled={currentStage.type === 'click-debug' || completedStages.has(currentStageIndex)} // Disable input for click puzzle
                />

                {feedback && (
                  <Alert className={
                    feedback.type === "success" 
                      ? "border-green-500/30 bg-green-500/10 text-green-300"
                      : feedback.type === "error"
                        ? "border-red-500/30 bg-red-500/10 text-red-300"
                        : "border-blue-500/30 bg-blue-500/10 text-blue-300"
                  }>
                    {feedback.type === "success" ? <CheckCircle2 className="w-4 h-4 text-green-500" /> : <XCircle className="w-4 h-4 text-red-500" />}
                    {feedback.message}
                  </Alert>
                )}

                <div className="flex gap-2">
                  <Button 
                    onClick={handleSubmitAnswer} 
                    className="flex-1" 
                    disabled={!studentAnswer.trim() || currentStage.type === 'click-debug' || completedStages.has(currentStageIndex)}
                  >
                    <CheckCircle2 className="w-4 h-4 mr-2" />
                    Submit Answer
                  </Button>
                  <Button variant="outline" onClick={skipStage}>Skip</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};

export default EscapeRoomPlayer;
