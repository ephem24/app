import React from 'react';

interface TranscriptDisplayProps {
  transcripts: { speaker: string; text: string }[];
}

const TranscriptDisplay = ({ transcripts }: TranscriptDisplayProps) => {
  return (
    <div className="flex h-full flex-col rounded-lg border bg-white p-4">
      <h2 className="mb-4 text-lg font-semibold">Live Transcript</h2>
      <div className="flex-1 space-y-4 overflow-y-auto">
        {transcripts.map((item, index) => (
          <div key={index}>
            <span className="font-bold">{item.speaker}: </span>
            <span>{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TranscriptDisplay;
