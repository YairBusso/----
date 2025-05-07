import { Routes } from '@angular/router';
import { TicketsListComponent } from './tickets-list/tickets-list.component';
import { TicketChatComponent } from './ticket-chat/ticket-chat.component';

export const routes: Routes = [
  { path: 'tickets', component: TicketsListComponent },
  { path: 'ticket-chat/:id', component: TicketChatComponent },
  { path: '', redirectTo: '/tickets', pathMatch: 'full' }
];

