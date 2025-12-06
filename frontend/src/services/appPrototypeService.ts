import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export interface StartSessionPayload {
  meet_url: string;
  topic: string;
  grade_level: string;
}

export interface StartSessionResponse {
  session_id: string;
  message: string;
}

/**
 * Starts a new tutoring session.
 * @param payload - The data required to start a session.
 * @returns The session ID and a confirmation message.
 */
export const startSession = async (payload: StartSessionPayload): Promise<StartSessionResponse> => {
  try {
    const response = await apiClient.post('/session/start', payload);
    return response.data;
  } catch (error) {
    console.error('Failed to start session:', error);
    throw new Error('Failed to start session. Please try again.');
  }
};

/**
 * Ends a tutoring session.
 * @param sessionId - The ID of the session to end.
 */
export const endSession = async (sessionId: string): Promise<void> => {
  try {
    // In a real application, you would make an API call:
    // await apiClient.post(`/session/${sessionId}/stop`);

    // Simulate the API call
    console.log(`Ending session ${sessionId}`);
    await new Promise(resolve => setTimeout(resolve, 500));
  } catch (error) {
    console.error(`Failed to end session ${sessionId}:`, error);
    throw new Error('Failed to end session.');
  }
};
