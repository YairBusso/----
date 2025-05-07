import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TicketsService } from '../services/tickets.service';

interface Message {
  sender: 'user' | 'support';
  content: string;
  timestamp?: string;
}

@Component({
  selector: 'app-ticket-chat',
  standalone: true,
  templateUrl: './ticket-chat.component.html',
  styleUrls: ['./ticket-chat.component.css'],
  imports: [CommonModule, FormsModule]
})
export class TicketChatComponent implements OnInit {
  @Input() isFullScreen: boolean = false;

  ticketId!: number;
  ticketTitle: string = '';
  messages: Message[] = [];
  newMessage: string = '';

  constructor(private ticketsService: TicketsService) {}

  ngOnInit() {
    this.loadTicketDetails();
  }

  loadTicketDetails() {
    // Assuming you'll replace this with actual service call
    this.ticketId = 1; // Example ticket ID
    this.ticketTitle = 'נושא הפניה';
    this.messages = [
      {
        sender: 'support',
        content: 'שלום, איך אוכל לעזור לך היום?',
        timestamp: new Date().toLocaleString()
      },
      {
        sender: 'user',
        content: 'יש לי שאלה לגבי השירות',
        timestamp: new Date().toLocaleString()
      }
    ];
  }

  sendMessage() {
    if (this.newMessage.trim()) {
      this.messages.push({
        sender: 'user',
        content: this.newMessage,
        timestamp: new Date().toLocaleString()
      });

      // Clear input after sending
      this.newMessage = '';

      // Simulate support response (you'd typically handle this via service)
      setTimeout(() => {
        this.messages.push({
          sender: 'support',
          content: 'תודה על הפנייה, נטפל בהקדם',
          timestamp: new Date().toLocaleString()
        });
      }, 1000);
    }
  }

  goBack() {
    // Implement navigation logic
    window.history.back();
  }
}
