'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import Header from '@/components/common/Header';

export default function Home() {
  const [meetUrl, setMeetUrl] = useState('');
  const [topic, setTopic] = useState('');
  const [gradeLevel, setGradeLevel] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Connect to backend service
    console.log({ meetUrl, topic, gradeLevel });
    // For now, redirect to a mock session page
    // In the future, the backend will return a session ID
    const mockSessionId = '12345';
    window.location.href = `/session/${mockSessionId}`;
  };

  return (
    <>
      <Header />
      <main className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center bg-gray-50 p-8">
        <div className="w-full max-w-md rounded-lg border bg-white p-8 shadow-md">
          <h1 className="mb-6 text-center text-2xl font-bold">Start a New Tutoring Session</h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="meetUrl" className="mb-2 block text-sm font-medium text-gray-700">
                Google Meet URL
              </label>
              <Input
                id="meetUrl"
                type="url"
                placeholder="https://meet.google.com/xxx-xxxx-xxx"
                value={meetUrl}
                onChange={(e) => setMeetUrl(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="topic" className="mb-2 block text-sm font-medium text-gray-700">
                Topic
              </label>
              <Input
                id="topic"
                type="text"
                placeholder="e.g., Algebra 1"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="gradeLevel" className="mb-2 block text-sm font-medium text-gray-700">
                Grade Level
              </label>
              <Input
                id="gradeLevel"
                type="text"
                placeholder="e.g., 9th Grade"
                value={gradeLevel}
                onChange={(e) => setGradeLevel(e.target.value)}
                required
              />
            </div>
            <Button type="submit" className="w-full">
              Start Session
            </Button>
          </form>
        </div>
      </main>
    </>
  );
}