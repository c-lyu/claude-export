import React, { useState } from 'react';
import { JsonInput } from './components/JsonInput';
import { MarkdownOutput } from './components/MarkdownOutput';
import { ChatData } from './types/chat';
import { FileText } from 'lucide-react';

function App() {
  const [parsedData, setParsedData] = useState<ChatData | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleJsonSubmit = (jsonText: string) => {
    try {
      const data = JSON.parse(jsonText);
      setParsedData(data);
      setError(null);
    } catch (err) {
      setError('Invalid JSON format');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto p-6">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-2">
            <FileText className="w-8 h-8 text-blue-500" />
            <h1 className="text-3xl font-bold text-gray-900">Claude to Markdown</h1>
          </div>
          <p className="text-gray-600">Convert your Claude chat exports into beautifully formatted Markdown</p>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-4">Paste response in JSON format</h2>
            <JsonInput onJsonSubmit={handleJsonSubmit} />
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-red-600">
              {error}
            </div>
          )}

          {parsedData && (
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-semibold mb-4">Markdown Output</h2>
              <MarkdownOutput chatData={parsedData} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;