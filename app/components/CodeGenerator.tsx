'use client';

import { useState, useEffect } from 'react';

interface TabConfig {
  id: string;
  title: string;
  content: string;
}

export default function CodeGenerator() {
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
<body style="font-family: 'Segoe UI', -apple-system, BlinkMacSystemFont, sans-serif; margin: 0; padding: 24px; background-color: #f8fafc; min-height: 100vh;">
    <div style="max-width: 1000px; margin: 0 auto; background-color: white; border-radius: 12px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06); overflow: hidden; border: 1px solid #e2e8f0;">
        <!-- Tab Navigation -->
        <div style="display: flex; background-color: #f8fafc; border-bottom: 1px solid #e2e8f0;">
            ${tabs.map((tab, index) => `
            <button 
                id="btn-${tab.id}" 
                onclick="showTab('${tab.id}')" 
                style="
                    flex: 1; 
                    padding: 16px 24px; 
                    border: none; 
                    background-color: ${activeTab === tab.id ? '#3b82f6' : 'transparent'}; 
                    color: ${activeTab === tab.id ? 'white' : '#64748b'}; 
                    cursor: pointer; 
                    font-size: 14px; 
                    font-weight: ${activeTab === tab.id ? '600' : '500'}; 
                    transition: all 0.2s ease;
                    position: relative;
                    font-family: 'Segoe UI', -apple-system, BlinkMacSystemFont, sans-serif;
                "
                onmouseover="this.style.backgroundColor='${activeTab === tab.id ? '#2563eb' : '#f1f5f9'}'"
                onmouseout="this.style.backgroundColor='${activeTab === tab.id ? '#3b82f6' : 'transparent'}'"
            >
                ${tab.title}
                ${activeTab === tab.id ? '<div style="position: absolute; bottom: 0; left: 0; right: 0; height: 2px; background-color: #1d4ed8;"></div>' : ''}
            </button>`).join('')}
        </div>
        
        <!-- Tab Content -->
        ${tabs.map(tab => `
        <div 
            id="content-${tab.id}" 
            style="
                display: ${activeTab === tab.id ? 'block' : 'none'}; 
                padding: 32px; 
                min-height: 300px;
                line-height: 1.7;
                color: #334155;
                background-color: white;
                font-family: 'Segoe UI', -apple-system, BlinkMacSystemFont, sans-serif;
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
                btn.style.color = '#64748b';
                btn.style.fontWeight = '500';
                btn.innerHTML = btn.innerHTML.replace('<div style="position: absolute; bottom: 0; left: 0; right: 0; height: 2px; background-color: #1d4ed8;"></div>', '');
            });
            
            // Show selected tab content
            const selectedContent = document.getElementById('content-' + tabId);
            if (selectedContent) {
                selectedContent.style.display = 'block';
            }
            
            // Add active class to selected button
            const selectedButton = document.getElementById('btn-' + tabId);
            if (selectedButton) {
                selectedButton.style.backgroundColor = '#3b82f6';
                selectedButton.style.color = 'white';
                selectedButton.style.fontWeight = '600';
                selectedButton.innerHTML += '<div style="position: absolute; bottom: 0; left: 0; right: 0; height: 2px; background-color: #1d4ed8;"></div>';
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
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-6 py-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Professional Tabs Generator
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Create clean, professional tabbed interfaces with inline CSS and JavaScript. 
              Perfect for enterprise applications and MOODLE LMS deployment.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Tabs Headers Section */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-900 flex items-center">
                  <svg className="w-5 h-5 mr-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Tab Headers
                </h2>
                <button
                  onClick={addTab}
                  disabled={tabs.length >= 15}
                  className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 disabled:cursor-not-allowed"
                >
                  + Add Tab
                </button>
              </div>
              
              <div className="space-y-3">
                {tabs.map((tab, index) => (
                  <div key={tab.id} className="flex items-center space-x-3">
                    <button
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex-1 text-left px-4 py-3 rounded-md border transition-all duration-200 font-medium ${
                        activeTab === tab.id 
                          ? 'bg-blue-600 text-white border-blue-600 shadow-sm' 
                          : 'bg-gray-50 text-gray-700 border-gray-200 hover:border-blue-300 hover:bg-blue-50'
                      }`}
                    >
                      {tab.title}
                    </button>
                    {tabs.length > 1 && (
                      <button
                        onClick={() => removeTab(index)}
                        className="bg-red-600 hover:bg-red-700 text-white px-3 py-3 rounded-md text-sm font-medium transition-colors duration-200"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Tabs Content Section */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                <svg className="w-5 h-5 mr-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
                Tab Content
              </h2>
              
              {tabs.map((tab, index) => (
                <div key={tab.id} className={`${activeTab === tab.id ? 'block' : 'hidden'}`}>
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Tab Title
                    </label>
                    <input
                      type="text"
                      value={tab.title}
                      onChange={(e) => updateTab(index, 'title', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 text-gray-900"
                      placeholder="Enter tab title..."
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Tab Content
                    </label>
                    <textarea
                      value={tab.content}
                      onChange={(e) => updateTab(index, 'content', e.target.value)}
                      rows={10}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 text-gray-900 resize-vertical"
                      placeholder="Enter tab content..."
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Output Section */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold text-gray-900 flex items-center">
                  <svg className="w-5 h-5 mr-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                  Output
                </h2>
                <button
                  onClick={generateHTMLCode}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-medium transition-colors duration-200"
                >
                  Generate Code
                </button>
              </div>
              
              {generatedCode && (
                <div className="space-y-4">
                  <button
                    onClick={copyToClipboard}
                    className="w-full bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md font-medium transition-colors duration-200"
                  >
                    Copy to Clipboard
                  </button>
                  
                  <div className="border border-gray-200 rounded-md overflow-hidden">
                    <div className="bg-gray-800 text-white px-4 py-2 text-sm font-medium">
                      Generated HTML5 Code
                    </div>
                    <pre className="bg-gray-900 p-4 text-sm overflow-auto max-h-96 text-green-400">
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
