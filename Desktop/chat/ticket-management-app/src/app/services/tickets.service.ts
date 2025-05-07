// src/app/services/tickets.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Ticket } from '../models/ticket.model';

@Injectable({
  providedIn: 'root'
})
export class TicketsService {
  constructor(private http: HttpClient) {}

  getAllTickets(): Observable<Ticket[]> {
    // Mock data - replace with actual API call
    return of([
      {
        id: 1,
        title: 'תקלה בהזמנה',
        status: 'open',
        lastMessage: 'האם ניתן לעדכן את סטטוס המשלוח?',
        timestamp: '15:58',
        unreadCount: 2,
        userAvatar: 'assets/default-avatar.png'
      },
      {
        id: 2,
        title: 'בקשת תמיכה',
        status: 'closed',
        lastMessage: 'תודה על העזרה!',
        timestamp: '14:32',
        userAvatar: 'assets/default-avatar.png'
      },
      {
        id: 3,
        title: 'בקשת תמיכה',
        status: 'open',
        lastMessage: 'האם ניתן לעזרה בנושא הזה?',
        timestamp: '12:45',
        unreadCount: 1,
        userAvatar: 'assets/default-avatar.png'
      }
    ]);
  }

  getTicketInfo(ticketId: number): Observable<any> {
    // Mock data - replace with actual API call
    return of({
      title: 'תקלה בהזמנה',
      messages: [
        { sender: 'user', content: 'שלום, יש לי שאלה על ההזמנה' },
        { sender: 'support', content: 'היי, איך אוכל לעזור?' },
        { sender: 'user', content: 'האם ניתן לעדכן את סטטוס המשלוח?' },
        { sender: 'support', content: 'כן, אנא תן לי את מספר ההזמנה' },
        { sender: 'user', content: '123456' }
      ]
    });
  }
}
