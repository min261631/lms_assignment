// app/main_pages/escape-room/page.tsx
'use client';

import React, { useState, useCallback, useMemo } from 'react';
import { Code2, Save, Plus, Play } from 'lucide-react';
import { generateEscapeRoomHtml } from './Generator';
import { RoomConfig, Stage } from './StageTypes';
import StageEditor from './StageEditor';
// NOTE: Assuming these components are available in your structure:
import { Input } from '@/app/components/ui/input';
import { Textarea } from '@/app/components/ui/textarea';
import { Button } from '@/app/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/app/components/ui/card';
import EscapeRoomPlayer from './EscapeRoomPlayer';

// --- Component: Display and Copy Generated Code ---
const CodeOutput = ({ htmlCode }: { htmlCode: string }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    // Standard clipboard API implementation for copying output
    navigator.clipboard.writeText(htmlCode).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    }).catch(err => {
        console.error('Failed to copy code: ', err);
        // Fallback for iFrame environments (Canvas requirement)
        const textarea = document.createElement('textarea');
        textarea.value = htmlCode;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="bg-gray-800 rounded-xl p-6 shadow-2xl mt-8">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-semibold text-yellow-400">Generated Moodle HTML</h3>
        <Button
          onClick={handleCopy}
          size="sm"
          className={`transition ${copied ? 'bg-green-600 text-white' : 'bg-indigo-600 hover:bg-indigo-700 text-white'}`}
          aria-label="Copy generated HTML to clipboard"
        >
          {copied ? 'Copied! ✅' : 'Copy Code'}
        </Button>
      </div>
      {/* Code Display Area */}
      <pre className="whitespace-pre-wrap overflow-auto max-h-[500px] text-green-300 p-4 border border-gray-700 bg-black rounded-lg text-xs md:text-sm leading-relaxed">
        <code>{htmlCode}</code>
      </pre>
      <p className="text-xs text-gray-400 mt-3">Paste this entire block into a blank .html file or directly into your LMS/Moodle HTML block.</p>
    </div>
  );
};


// --- Main Builder Component ---
export default function EscapeRoomBuilder() {
  // Define initial state for a default 30-minute room
  const initialConfig: RoomConfig = {
    title: "The Logic Lock Challenge",
    description: "Solve these coding puzzles to prove your skills and escape the room before time runs out!",
    timerMinutes: 30, 
    backgroundImage: "/images/escape-room-bg.jpg", // Uses your uploaded image
  };
  
  // Define one default stage (Format Code) as an example
  const initialStages: Stage[] = useMemo(() => [{
      id: `stage-${Date.now()}`,
      title: "Format Code Correctly",
      description: "Apply standard 2-space indentation and ensure correct spacing around operators to unlock.",
      type: "format-code",
      question: "Format the following code:\nfunction check(key){return key==='masterkey';}",
      answer: "function check(key) {\n  return key === 'masterkey';\n}", // Exact formatted target
      hints: ["Ensure two spaces of indentation.", "Use single quotes.", "Space out the '===' operator."],
      code: "function check(key){return key==='masterkey';}",
      clueImage: "",
  }], []);

  const [roomConfig, setRoomConfig] = useState<RoomConfig>(initialConfig);
  const [stages, setStages] = useState<Stage[]>(initialStages);
  const [generatedHtml, setGeneratedHtml] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPreview, setShowPreview] = useState(false);


  // --- UI Handlers ---
  
  const updateRoomConfig = (field: keyof RoomConfig, value: string | number) => {
    setRoomConfig(prev => ({ ...prev, [field]: value }));
  };
  
  const addStage = () => {
    const newStage: Stage = {
      id: `stage-${Date.now()}`,
      title: `New Puzzle ${stages.length + 1}`,
      description: "Define your challenge here.",
      type: "custom",
      question: "Paste your challenge text here.",
      answer: "The correct final answer or output",
      hints: [],
      code: "",
      clueImage: "",
    };
    setStages([...stages, newStage]);
  };

  const updateStage = (id: string, updatedStage: Stage) => {
    setStages(stages.map((stage) => (stage.id === id ? updatedStage : stage)));
  };

  const deleteStage = (id: string) => {
    if (stages.length > 1) {
        setStages(stages.filter((stage) => stage.id !== id));
    } else {
        alert('You must have at least one puzzle stage.');
    }
  };
  
  const handleGenerate = useCallback(() => {
    if (stages.length === 0) {
        alert('Please add at least one stage before generating code.');
        return;
    }
    const html = generateEscapeRoomHtml(roomConfig, stages);
    setGeneratedHtml(html);
  }, [roomConfig, stages]);

  // --- Database Save Handler (Assignment 2 Requirement) ---
  const handleSave = async () => {
    if (isSubmitting || stages.length === 0) return;

    setIsSubmitting(true);
    setGeneratedHtml(''); 

    try {
      // 1. Generate the final HTML code
      const htmlOutput = generateEscapeRoomHtml(roomConfig, stages);

      const response = await fetch('/api/output', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          feature: 'EscapeRoom',
          metadata: { config: roomConfig, stages: stages }, 
          html_code: htmlOutput,
        }),
      });

      if (response.ok) {
        alert('Room configuration and HTML output saved successfully!');
      } else {
        const errorData = await response.json();
        alert(`Error saving: ${errorData.message || response.statusText}. Check server console.`);
      }
    } catch (error) {
      console.error('Save error:', error);
      alert('Network error: Could not connect to the database API. Check your backend server.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // --- Render Preview or Builder ---
  if (showPreview) {
    return (
        <div className="relative min-h-screen">
            <div className="fixed top-4 right-4 z-50">
                <Button variant="outline" onClick={() => setShowPreview(false)} className="bg-white dark:bg-gray-700 text-red-500 hover:bg-red-500 hover:text-white border-red-500">
                    Exit Preview
                </Button>
            </div>
            {/* Pass current state directly to the Player component */}
            <EscapeRoomPlayer 
                roomConfig={roomConfig} 
                stages={stages} 
            />
        </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        
        {/* Title and Actions */}
        <div className="flex justify-between items-center mb-8 border-b pb-4 dark:border-gray-700">
            <div>
                <h1 className="text-3xl font-extrabold text-indigo-600 dark:text-indigo-400">
                    Escape Room Builder
                </h1>
                <p className="text-gray-600 dark:text-gray-400 mt-1">
                    Design Moodle-deployable coding challenges for students.
                </p>
            </div>
            <div className="flex gap-3">
                <Button 
                    onClick={() => setShowPreview(true)} 
                    disabled={stages.length === 0}
                    className="bg-blue-600 hover:bg-blue-700 text-white"
                >
                    <Play className="w-4 h-4 mr-2" />
                    Preview
                </Button>
                <Button 
                    onClick={handleSave} 
                    disabled={isSubmitting || stages.length === 0}
                    className="bg-purple-600 hover:bg-purple-700 text-white"
                >
                    <Save className="w-4 h-4 mr-2" />
                    {isSubmitting ? 'Saving...' : 'Save Room'}
                </Button>
                <Button 
                    onClick={handleGenerate} 
                    disabled={stages.length === 0}
                    className="bg-green-600 hover:bg-green-700 text-white"
                >
                    <Code2 className="w-4 h-4 mr-2" />
                    Generate HTML
                </Button>
            </div>
        </div>

        {/* Configuration Card */}
        <Card className="bg-white dark:bg-gray-800 mb-8 border-indigo-500 border-l-4">
          <CardHeader>
            <CardTitle className="text-xl font-bold dark:text-white">Room Configuration</CardTitle>
            <CardDescription className="dark:text-gray-400">Set the global parameters for the escape challenge.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
                {/* Title */}
                <div className="space-y-1">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Room Title</label>
                    <Input id="room-title-input" value={roomConfig.title} onChange={(e) => updateRoomConfig('title', e.target.value)} placeholder="e.g., Python Debugging Challenge" />
                </div>
                {/* Timer */}
                <div className="space-y-1">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Time Limit (minutes)</label>
                    <Input id="timer-input" type="number" min={1} value={roomConfig.timerMinutes} onChange={(e) => updateRoomConfig('timerMinutes', parseInt(e.target.value) || 1)} />
                </div>
            </div>
            {/* Description */}
            <div className="space-y-1">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Room Description</label>
                <Textarea id="desc-input" value={roomConfig.description} onChange={(e) => updateRoomConfig('description', e.target.value)} rows={3} placeholder="Explain the scenario..." />
            </div>
             {/* Background Image URL */}
            <div className="space-y-1">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Background Image URL (e.g., /images/escape-room-bg.jpg)</label>
                <Input id="bg-img-input" value={roomConfig.backgroundImage} onChange={(e) => updateRoomConfig('backgroundImage', e.target.value)} placeholder="Enter a URL for the background image" />
                {roomConfig.backgroundImage && (
                    <img src={roomConfig.backgroundImage} alt="Background Preview" className="mt-2 w-full h-32 object-cover rounded-lg" onError={(e) => e.currentTarget.style.display = 'none'} />
                )}
            </div>
          </CardContent>
        </Card>

        {/* Stages Editor */}
        <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold dark:text-white">
                    Puzzle Stages ({stages.length})
                </h2>
                <Button onClick={addStage} size="sm">
                    <Plus className="w-4 h-4 mr-2" />
                    Add Stage
                </Button>
            </div>
            
            <div className="space-y-4">
                {stages.map((stage, index) => (
                    <StageEditor 
                        key={stage.id}
                        stage={stage}
                        index={index}
                        onUpdate={(updatedStage) => updateStage(stage.id, updatedStage)}
                        onDelete={() => deleteStage(stage.id)}
                    />
                ))}
            </div>
        </div>

        {/* Code Output */}
        {generatedHtml && <CodeOutput htmlCode={generatedHtml} />}
      </div>
    </div>
  );
}