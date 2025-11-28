import React from 'react';
import { Button } from '@/components/ui/Button';

interface SessionControlsProps {
  onEndSession: () => void;
  isSessionActive: boolean;
}

const SessionControls = ({ onEndSession, isSessionActive }: SessionControlsProps) => {
  return (
    <div className="flex items-center justify-end space-x-4 rounded-lg border bg-white p-4">
      <Button
        onClick={onEndSession}
        disabled={!isSessionActive}
        variant="destructive"
      >
        End Session
      </Button>
    </div>
  );
};

export default SessionControls;
