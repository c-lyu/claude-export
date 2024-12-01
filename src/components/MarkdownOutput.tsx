import React from 'react';
import { ChatData } from '../types/chat';
import { formatDate } from '../utils/dateFormatter';

interface MarkdownOutputProps {
  chatData: ChatData | null;
}

export function MarkdownOutput({ chatData }: MarkdownOutputProps) {
  if (!chatData) return null;

  const markdownText = `# ${chatData.name}

${chatData.chat_messages.map(message => `
## ${message.sender.charAt(0).toUpperCase() + message.sender.slice(1)}
*${formatDate(message.created_at)}*

${message.content.map(c => c.text).join('\n')}
`).join('\n')}`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(markdownText);
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-end">
        <button
          onClick={copyToClipboard}
          className="px-3 py-1 text-sm bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
        >
          Copy to Clipboard
        </button>
      </div>
      <pre className="bg-gray-50 p-4 rounded-lg overflow-auto whitespace-pre-wrap">
        {markdownText}
      </pre>
    </div>
  );
}