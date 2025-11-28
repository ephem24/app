'use client';

import React, { useState } from 'react';
import TranscriptDisplay from '@/components/session/TranscriptDisplay';
import AIChatWindow from '@/components/session/AIChatWindow';
import SessionControls from '@/components/session/SessionControls';
import Header from '@/components/common/Header';

// Mock data for demonstration
const MOCK_TRANSCRIPTS = [
  { speaker: 'Student', text: "I'm having trouble understanding photosynthesis." },
  { speaker: 'Tutor', text: 'Of course. Photosynthesis is the process plants use to convert light energy into chemical energy.' },
  { speaker: 'Student', text: "So it's how they eat?" },
];

const MOCK_AI_RESPONSES = [
  'Suggestion: Ask the student to explain the role of chlorophyll.',
  'Question: What are the inputs and outputs of photosynthesis?',
];

export default function SessionPage({ params }: { params: { id: string } }) {
  const [transcripts, setTranscripts] = useState(MOCK_TRANSCRIPTS);
  const [aiResponses, setAiResponses] = useState(MOCK_AI_RESPONSES);
  const [isSessionActive, setIsSessionActive] = useState(true);

  const handleEndSession = () => {
    // TODO: Implement session termination logic
    console.log('Session ended');
    setIsSessionActive(false);
  };

  return (
    <>
      <Header />
      <main className="grid h-[calc(100vh-4rem)] grid-cols-1 gap-4 bg-gray-50 p-4 md:grid-cols-3">
        <div className="md:col-span-2">
          <TranscriptDisplay transcripts={transcripts} />
        </div>
        <div className="flex flex-col gap-4">
          <AIChatWindow responses={aiResponses} />
          <SessionControls onEndSession={handleEndSession} isSessionActive={isSessionActive} />
        </div>
      </main>
    </>
  );
}
