'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { SessionState, SessionContextType } from '@/types/session.d';

const SessionContext = createContext<SessionContextType | undefined>(undefined);

export const SessionProvider = ({ children }: { children: ReactNode }) => {
  const [session, setSession] = useState<SessionState>({
    sessionId: null,
    meetUrl: null,
    topic: null,
    gradeLevel: null,
    isActive: false,
  });

  return (
    <SessionContext.Provider value={{ session, setSession }}>
      {children}
    </SessionContext.Provider>
  );
};

export const useSession = (): SessionContextType => {
  const context = useContext(SessionContext);
  if (context === undefined) {
    throw new Error('useSession must be used within a SessionProvider');
  }
  return context;
};
