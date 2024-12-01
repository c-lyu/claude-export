export interface ChatMessage {
  uuid: string;
  content: Array<{ type: string; text: string }>;
  sender: 'human' | 'assistant';
  created_at: string;
}

export interface ChatData {
  uuid: string;
  name: string;
  chat_messages: ChatMessage[];
}