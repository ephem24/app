import { useEffect, useState, useRef } from 'react';
import { io, Socket } from 'socket.io-client';

const WS_URL = process.env.NEXT_PUBLIC_WS_URL || 'http://localhost:5000';

export enum WebSocketStatus {
  Connecting,
  Connected,
  Disconnected,
  Error,
}

interface UseWebSocketOptions {
  sessionId: string;
  onTranscript?: (data: any) => void;
  onAiResponse?: (data: any) => void;
}

export const useWebSocket = ({ sessionId, onTranscript, onAiResponse }: UseWebSocketOptions) => {
  const [status, setStatus] = useState<WebSocketStatus>(WebSocketStatus.Connecting);
  const socketRef = useRef<Socket | null>(null);

  useEffect(() => {
    if (!sessionId) return;

    // For demonstration, we'll simulate a WebSocket connection
    console.log(`Simulating WebSocket connection for session: ${sessionId}`);
    setStatus(WebSocketStatus.Connected);

    const transcriptInterval = setInterval(() => {
      const mockTranscript = {
        speaker: Math.random() > 0.5 ? 'Student' : 'Tutor',
        text: 'This is a simulated transcript line.',
        timestamp: Date.now(),
      };
      console.log('Simulating transcript:', mockTranscript);
      onTranscript?.(mockTranscript);
    }, 5000);

    const aiResponseInterval = setInterval(() => {
      const mockAiResponse = 'This is a simulated AI response.';
      console.log('Simulating AI response:', mockAiResponse);
      onAiResponse?.(mockAiResponse);
    }, 8000);

    return () => {
      console.log('Simulating WebSocket disconnection.');
      clearInterval(transcriptInterval);
      clearInterval(aiResponseInterval);
      setStatus(WebSocketStatus.Disconnected);
    };

    /*
    // REAL IMPLEMENTATION:
    const socket = io(`${WS_URL}/session/${sessionId}`);
    socketRef.current = socket;

    setStatus(WebSocketStatus.Connecting);

    socket.on('connect', () => {
      console.log('WebSocket connected');
      setStatus(WebSocketStatus.Connected);
    });

    socket.on('disconnect', () => {
      console.log('WebSocket disconnected');
      setStatus(WebSocketStatus.Disconnected);
    });

    socket.on('connect_error', (error) => {
      console.error('WebSocket connection error:', error);
      setStatus(WebSocketStatus.Error);
    });

    if (onTranscript) {
      socket.on('transcript', onTranscript);
    }

    if (onAiResponse) {
      socket.on('ai_response', onAiResponse);
    }

    return () => {
      socket.disconnect();
    };
    */
  }, [sessionId, onTranscript, onAiResponse]);

  const sendMessage = (event: string, data: any) => {
    // This is a placeholder for sending messages to the server
    console.log(`Simulating sending message - Event: ${event}, Data:`, data);
    // socketRef.current?.emit(event, data);
  };

  return { status, sendMessage };
};
