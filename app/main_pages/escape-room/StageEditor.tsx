// app/main_pages/escape-room/StageEditor.tsx
'use client';

import React from 'react';
import { Trash2, ChevronUp, ChevronDown, Code, Bug, Hash, FileCode, MousePointerClick } from 'lucide-react';
import { Stage, ChallengeType } from './StageTypes';
// NOTE: Assuming these UI components exist in your project path: '@/app/components/ui/'
import { Input } from '@/app/components/ui/input'; 
import { Textarea } from '@/app/components/ui/textarea';
import { Button } from '@/app/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';

interface StageEditorProps {
  stage: Stage;
  index: number;
  onUpdate: (updatedStage: Stage) => void;
  onDelete: () => void;
}

const challengeTypes: { value: ChallengeType; label: string; description: string }[] = [
  { value: 'format-code', label: 'Format Code', description: 'Validate exact code style (string match).' },
  { value: 'debug-code', label: 'Debug Code', description: 'Student must fix syntax or logic errors.' },
  { value: 'generate-numbers', label: 'Generate Numbers (0-1000)', description: 'Student must write a function to generate a numeric array (0-1000).' },
  { value: 'port-data', label: 'Port Data (JSON to CSV)', description: 'Student must convert JSON to CSV format.' },
  { value: 'click-debug', label: 'Click to Debug (Image Clue)', description: 'Clickable image logs hint to console and advances.' },
  { value: 'custom', label: 'Custom Answer/Key', description: 'Simple text match for a non-coding answer/key.' },
];

const challengeTypeMap = new Map(challengeTypes.map(t => [t.value, t]));

export default function StageEditor({ stage, index, onUpdate, onDelete }: StageEditorProps) {
  const [isExpanded, setIsExpanded] = React.useState(index === 0);
  const [showDeleteConfirm, setShowDeleteConfirm] = React.useState(false);

  const updateField = (field: keyof Stage, value: string | string[]) => {
    onUpdate({ ...stage, [field]: value });
  };
  
  const handleTypeChange = (value: ChallengeType) => {
    const updatedStage: Stage = { ...stage, type: value };

    if (value === 'click-debug') {
        onUpdate({ ...updatedStage, code: '', answer: 'DEBUG_SUCCESS' });
        return;
    } else {
         if (!updatedStage.code) {
             onUpdate({ ...updatedStage, code: '// function solution() {\\n  return "";\\n}', clueImage: undefined });
             return;
         }
         onUpdate({ ...updatedStage, clueImage: undefined });
         return;
    }
  };
  
  const selectedTypeInfo = challengeTypeMap.get(stage.type);
  let Icon;
  switch (stage.type) {
    case 'format-code': Icon = Code; break;
    case 'debug-code': Icon = Bug; break;
    case 'generate-numbers': Icon = Hash; break;
    case 'port-data': Icon = FileCode; break;
    case 'click-debug': Icon = MousePointerClick; break;
    default: Icon = Code;
  }
  
  const isCodeChallenge = stage.type !== 'click-debug';

  return (
    <Card className="bg-white dark:bg-gray-800 border-l-4 border-indigo-500">
      <CardHeader 
        className="cursor-pointer" 
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            {/* Expand/Collapse Button */}
            <Button
              size="sm"
              variant="outline"
              className="bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600"
              onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                e.stopPropagation();
                setIsExpanded(!isExpanded);
              }}
            >
              {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </Button>
            
            {/* Stage Title and Type */}
            <div className="flex items-center gap-2">
                <Icon className="w-5 h-5 text-indigo-500" />
                <div>
                  <CardTitle className="text-lg dark:text-white">
                    Stage {index + 1}: {stage.title}
                  </CardTitle>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    {selectedTypeInfo?.label || 'Custom'}
                  </p>
                </div>
            </div>
          </div>
          
          {/* Delete Button */}
          <Button
            size="sm"
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
              e.stopPropagation();
              setShowDeleteConfirm(true);
            }}
            className="bg-red-600 hover:bg-red-700 text-white"
          >
            <Trash2 className="w-4 h-4" />
          </Button>
        </div>
      </CardHeader>

      {isExpanded && (
        <CardContent className="space-y-4">
          
          {/* Challenge Type Select */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Challenge Type</label>
            <select
              value={stage.type}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) => handleTypeChange(e.target.value as ChallengeType)}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white"
            >
              {challengeTypes.map(type => (
                <option key={type.value} value={type.value}>
                  {type.label} - {type.description}
                </option>
              ))}
            </select>
          </div>

          {/* Title and Question */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Stage Title</label>
            <Input
              value={stage.title}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => updateField('title', e.target.value)}
              placeholder="e.g., Fix the Syntax Errors"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Question/Prompt</label>
            <Textarea
              value={stage.question}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => updateField('question', e.target.value)}
              rows={3}
              placeholder="What should the student do?"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Description (Internal Notes)</label>
            <Textarea
              value={stage.description}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => updateField('description', e.target.value)}
              rows={2}
              placeholder="Internal notes about this stage"
            />
          </div>


          {/* Starter Code (For Code Challenges) */}
          {isCodeChallenge && (
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Starter Code (Optional)</label>
              <Textarea
                value={stage.code || ''}
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => updateField('code', e.target.value)}
                rows={4}
                placeholder="// Pre-filled code for students"
                className="font-mono text-sm dark:bg-gray-900 dark:border-gray-700 text-green-400"
              />
            </div>
          )}

          {/* Clickable Image URL (For Click Debug) */}
          {stage.type === 'click-debug' && (
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Image URL for Clickable Clue</label>
              <Input
                value={stage.clueImage || ''}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => updateField('clueImage', e.target.value)}
                placeholder="/images/suspicious_artifact.png"
              />
              {stage.clueImage && (
                <img
                  src={stage.clueImage}
                  alt="Preview"
                  className="mt-2 w-40 h-40 object-cover rounded-lg border border-gray-300 dark:border-gray-600"
                  onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              )}
            </div>
          )}
          
          {/* Expected Answer/Output (For Code Challenges and Custom) */}
          {isCodeChallenge && (
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Expected Answer/Output</label>
              <Textarea
                value={stage.answer}
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => updateField('answer', e.target.value)}
                rows={3}
                placeholder="The exact code output or required solution string"
                className="font-mono text-sm"
              />
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                Note: Answers are compared with whitespace normalization. For loop/port types, this is the expected function result.
              </p>
            </div>
          )}

          {/* Hints */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Hints (One per line)</label>
            <Textarea
              value={(stage.hints || []).join('\n')}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => 
                updateField('hints', e.target.value.split('\n').filter(h => h.trim()))
              }
              rows={3}
              placeholder="Hint 1\nHint 2"
            />
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              For click-debug stages, the first hint will be logged to console upon clicking.
            </p>
          </div>
        </CardContent>
      )}
      
      {/* --- Delete Confirmation Modal (Replaces confirm()) --- */}
      {showDeleteConfirm && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
          <Card className="bg-white dark:bg-gray-800 p-6 shadow-2xl max-w-sm w-full">
            <CardTitle className="text-xl text-red-500">Confirm Deletion</CardTitle>
            <CardContent className="mt-4 p-0">
              <p className="dark:text-gray-300 mb-6">Are you sure you want to delete Stage {index + 1}: &quot;{stage.title}&quot;?</p>
              <div className="flex justify-end gap-3">
                <Button variant="outline" onClick={() => setShowDeleteConfirm(false)}>
                  Cancel
                </Button>
                <Button 
                  className="bg-red-600 hover:bg-red-700 text-white" 
                  onClick={() => {
                    onDelete();
                    setShowDeleteConfirm(false);
                  }}
                >
                  Delete Stage
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </Card>
  );
}