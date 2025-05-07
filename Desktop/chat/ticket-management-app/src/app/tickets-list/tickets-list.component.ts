import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TicketsService } from '../services/tickets.service';
import { Ticket } from '../models/ticket.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tickets-list',
  templateUrl: './tickets-list.component.html',
  styleUrls: ['./tickets-list.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class TicketsListComponent implements OnInit {
  tickets: Ticket[] = [];

  constructor(
    private ticketsService: TicketsService,
    private router: Router
  ) {}

  ngOnInit() {
    this.ticketsService.getAllTickets().subscribe(
      (tickets) => (this.tickets = tickets)
    );
  }

  openTicketChat(ticket: Ticket) {
    this.router.navigate(['/ticket-chat', ticket.id]);
  }
}
