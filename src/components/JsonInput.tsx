import React from 'react';

interface JsonInputProps {
  onJsonSubmit: (jsonData: string) => void;
}

export function JsonInput({ onJsonSubmit }: JsonInputProps) {
  const [jsonText, setJsonText] = React.useState('');
  const [error, setError] = React.useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      JSON.parse(jsonText); // Validate JSON
      onJsonSubmit(jsonText);
      setError('');
    } catch (err) {
      setError('Invalid JSON format');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <textarea
          className="w-full h-64 p-4 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          value={jsonText}
          onChange={(e) => setJsonText(e.target.value)}
          placeholder="Paste your JSON here..."
        />
      </div>
      {error && <p className="text-red-500">{error}</p>}
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
      >
        Parse to Markdown
      </button>
    </form>
  );
}