export interface SessionState {
  sessionId: string | null;
  meetUrl: string | null;
  topic: string | null;
  gradeLevel: string | null;
  isActive: boolean;
}

export interface SessionContextType {
  session: SessionState;
  setSession: React.Dispatch<React.SetStateAction<SessionState>>;
}
