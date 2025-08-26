'use client';

import { useState, useEffect } from 'react';
import { useTheme } from '../contexts/ThemeContext';

interface TabConfig {
  id: string;
  title: string;
  content: string;
}

export default function CodeGenerator() {
  const { resolvedTheme } = useTheme();
  const [tabs, setTabs] = useState<TabConfig[]>([
    { id: 'tab1', title: 'Step 1', content: 'This is the content for Step 1.' },
    { id: 'tab2', title: 'Step 2', content: 'This is the content for Step 2.' },
    { id: 'tab3', title: 'Step 3', content: 'This is the content for Step 3.' }
  ]);
  const [activeTab, setActiveTab] = useState('tab1');
  const [generatedCode, setGeneratedCode] = useState('');

  // Load tabs from localStorage on component mount
  useEffect(() => {
    const savedTabs = localStorage.getItem('tabs');
    if (savedTabs) {
      const parsedTabs = JSON.parse(savedTabs);
      setTabs(parsedTabs);
      if (parsedTabs.length > 0) {
        setActiveTab(parsedTabs[0].id);
      }
    }
  }, []);

  // Save tabs to localStorage whenever tabs change
  useEffect(() => {
    localStorage.setItem('tabs', JSON.stringify(tabs));
  }, [tabs]);

  const generateHTMLCode = () => {
    const htmlCode = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Professional Tabs Component</title>
</head>
<body style="font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; margin: 0; padding: 32px; background-color: #f8fafc; min-height: 100vh; line-height: 1.6;">
    <div style="max-width: 1200px; margin: 0 auto; background-color: white; border-radius: 16px; box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05); overflow: hidden; border: 1px solid #e2e8f0;">
        <!-- Tab Navigation -->
        <div style="display: flex; background: linear-gradient(135deg, #1e293b 0%, #334155 100%); border-bottom: 1px solid #e2e8f0;">
            ${tabs.map((tab, index) => `
            <button 
                id="btn-${tab.id}" 
                onclick="showTab('${tab.id}')" 
                style="
                    flex: 1; 
                    padding: 20px 24px; 
                    border: none; 
                    background-color: ${activeTab === tab.id ? 'rgba(255,255,255,0.15)' : 'transparent'}; 
                    color: ${activeTab === tab.id ? 'white' : 'rgba(255,255,255,0.8)'}; 
                    cursor: pointer; 
                    font-size: 15px; 
                    font-weight: ${activeTab === tab.id ? '600' : '500'}; 
                    transition: all 0.3s ease;
                    position: relative;
                    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
                    letter-spacing: 0.025em;
                "
                onmouseover="this.style.backgroundColor='${activeTab === tab.id ? 'rgba(255,255,255,0.2)' : 'rgba(255,255,255,0.1)'}'"
                onmouseout="this.style.backgroundColor='${activeTab === tab.id ? 'rgba(255,255,255,0.15)' : 'transparent'}'"
            >
                ${tab.title}
                ${activeTab === tab.id ? '<div style="position: absolute; bottom: 0; left: 0; right: 0; height: 3px; background: linear-gradient(90deg, #3b82f6 0%, #1d4ed8 100%);"></div>' : ''}
            </button>`).join('')}
        </div>
        
        <!-- Tab Content -->
        ${tabs.map(tab => `
        <div 
            id="content-${tab.id}" 
            style="
                display: ${activeTab === tab.id ? 'block' : 'none'}; 
                padding: 48px; 
                min-height: 400px;
                line-height: 1.8;
                color: #374151;
                background-color: white;
                font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
                font-size: 16px;
            "
        >
            ${tab.content}
        </div>`).join('')}
    </div>

    <script>
        function showTab(tabId) {
            // Hide all tab contents
            const tabContents = document.querySelectorAll('[id^="content-"]');
            tabContents.forEach(content => {
                content.style.display = 'none';
            });
            
            // Remove active class from all buttons
            const tabButtons = document.querySelectorAll('[id^="btn-"]');
            tabButtons.forEach(btn => {
                btn.style.backgroundColor = 'transparent';
                btn.style.color = 'rgba(255,255,255,0.8)';
                btn.style.fontWeight = '500';
                btn.innerHTML = btn.innerHTML.replace('<div style="position: absolute; bottom: 0; left: 0; right: 0; height: 3px; background: linear-gradient(90deg, #3b82f6 0%, #1d4ed8 100%);"></div>', '');
            });
            
            // Show selected tab content
            const selectedContent = document.getElementById('content-' + tabId);
            if (selectedContent) {
                selectedContent.style.display = 'block';
            }
            
            // Add active class to selected button
            const selectedButton = document.getElementById('btn-' + tabId);
            if (selectedButton) {
                selectedButton.style.backgroundColor = 'rgba(255,255,255,0.15)';
                selectedButton.style.color = 'white';
                selectedButton.style.fontWeight = '600';
                selectedButton.innerHTML += '<div style="position: absolute; bottom: 0; left: 0; right: 0; height: 3px; background: linear-gradient(90deg, #3b82f6 0%, #1d4ed8 100%);"></div>';
            }
        }
        
        // Initialize with first tab active
        document.addEventListener('DOMContentLoaded', function() {
            showTab('${activeTab}');
        });
    </script>
</body>
</html>`;

    setGeneratedCode(htmlCode);
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(generatedCode);
      alert('Code copied to clipboard!');
    } catch (err) {
      console.error('Failed to copy code: ', err);
    }
  };

  const updateTab = (index: number, field: keyof TabConfig, value: string) => {
    const newTabs = [...tabs];
    newTabs[index] = { ...newTabs[index], [field]: value };
    setTabs(newTabs);
  };

  const addTab = () => {
    if (tabs.length >= 15) {
      alert('Maximum of 15 tabs allowed!');
      return;
    }
    const newTab: TabConfig = {
      id: `tab${tabs.length + 1}`,
      title: `Step ${tabs.length + 1}`,
      content: `This is the content for Step ${tabs.length + 1}.`
    };
    setTabs([...tabs, newTab]);
  };

  const removeTab = (index: number) => {
    if (tabs.length > 1) {
      const newTabs = tabs.filter((_, i) => i !== index);
      setTabs(newTabs);
      if (activeTab === tabs[index].id) {
        setActiveTab(newTabs[0].id);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-200">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl shadow-lg mb-8">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h1 className="text-5xl font-bold text-gray-900 dark:bg-gradient-to-r dark:from-white dark:via-blue-200 dark:to-indigo-200 dark:bg-clip-text dark:text-transparent mb-6">
              Professional Tabs Generator
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Create enterprise-grade tabbed interfaces with inline CSS and JavaScript. 
              Perfect for professional applications and seamless MOODLE LMS integration.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Tabs Headers Section */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 p-8 hover:shadow-2xl transition-shadow duration-300">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Tab Headers
                  </h2>
                </div>
                <button
                  onClick={addTab}
                  disabled={tabs.length >= 15}
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 disabled:from-gray-300 disabled:to-gray-400 text-white px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-200 shadow-lg hover:shadow-xl disabled:shadow-none disabled:cursor-not-allowed"
                >
                  + Add Tab
                </button>
              </div>
              
              <div className="space-y-4">
                {tabs.map((tab, index) => (
                  <div key={tab.id} className="flex items-center space-x-3">
                    <button
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex-1 text-left px-6 py-4 rounded-xl border-2 transition-all duration-200 font-semibold ${
                        activeTab === tab.id 
                          ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white border-blue-600 shadow-lg transform scale-105' 
                          : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 border-gray-200 dark:border-gray-600 hover:border-blue-300 dark:hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:shadow-md'
                      }`}
                    >
                      {tab.title}
                    </button>
                    {tabs.length > 1 && (
                      <button
                        onClick={() => removeTab(index)}
                        className="bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white px-4 py-4 rounded-xl text-sm font-semibold transition-all duration-200 shadow-lg hover:shadow-xl"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Tabs Content Section */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 p-8 hover:shadow-2xl transition-shadow duration-300">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Tab Content
                </h2>
              </div>
              
              {tabs.map((tab, index) => (
                <div key={tab.id} className={`${activeTab === tab.id ? 'block' : 'hidden'}`}>
                  <div className="mb-8">
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-3">
                      Tab Title
                    </label>
                    <input
                      type="text"
                      value={tab.title}
                      onChange={(e) => updateTab(index, 'title', e.target.value)}
                      className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 text-gray-900 dark:text-white bg-white dark:bg-gray-700 font-medium shadow-sm"
                      placeholder="Enter tab title..."
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-3">
                      Tab Content
                    </label>
                    <textarea
                      value={tab.content}
                      onChange={(e) => updateTab(index, 'content', e.target.value)}
                      rows={12}
                      className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 text-gray-900 dark:text-white bg-white dark:bg-gray-700 resize-vertical shadow-sm"
                      placeholder="Enter tab content..."
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Output Section */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 p-8 hover:shadow-2xl transition-shadow duration-300">
              <div className="flex justify-between items-center mb-8">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Output
                  </h2>
                </div>
                <button
                  onClick={generateHTMLCode}
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  Generate Code
                </button>
              </div>
              
              {generatedCode && (
                <div className="space-y-6">
                  <button
                    onClick={copyToClipboard}
                    className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white px-6 py-4 rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-xl"
                  >
                    Copy to Clipboard
                  </button>
                  
                  <div className="border-2 border-gray-200 dark:border-gray-600 rounded-xl overflow-hidden shadow-lg">
                    <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white px-6 py-4 text-sm font-semibold">
                      Generated HTML5 Code
                    </div>
                    <pre className="bg-gray-900 p-6 text-sm overflow-auto max-h-96 text-green-400 font-mono">
                      <code>{generatedCode}</code>
                    </pre>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
