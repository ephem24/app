import React from 'react';

interface AIChatWindowProps {
  responses: string[];
}

const AIChatWindow = ({ responses }: AIChatWindowProps) => {
  return (
    <div className="flex h-full flex-col rounded-lg border bg-white p-4">
      <h2 className="mb-4 text-lg font-semibold">AI Tutor</h2>
      <div className="flex-1 space-y-4 overflow-y-auto">
        {responses.map((response, index) => (
          <div key={index} className="rounded-lg bg-gray-100 p-3">
            <p>{response}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AIChatWindow;
