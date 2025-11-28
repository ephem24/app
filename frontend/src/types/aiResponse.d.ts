export interface AIResponse {
  type: 'suggestion' | 'question' | 'clarification';
  text: string;
}
