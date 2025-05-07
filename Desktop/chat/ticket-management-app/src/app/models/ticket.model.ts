// src/app/models/ticket.model.ts
export interface Ticket {
  id: number;
  title: string;
  status: 'open' | 'closed'| 'in-progress';
  lastMessage: string;
  timestamp: string;
  unreadCount?: number;
  userAvatar?: string;
}
