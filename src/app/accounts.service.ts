import { EventEmitter, inject, Injectable } from '@angular/core';
import { LoggingService } from './logging.service';

@Injectable({
  providedIn: 'root',
})
export class AccountsService {
  statusUpdated = new EventEmitter<string>();
  accounts = [
    {
      name: 'Master Account',
      status: 'active',
    },
    {
      name: 'Test Account',
      status: 'inactive',
    },
    {
      name: 'Hidden Account',
      status: 'unknown',
    },
  ];
  loggingService = inject(LoggingService);

  constructor() {}

  addAccount(name: string, status: string) {
    this.accounts.push({ name, status });
    this.loggingService.onstatusChanged(status);
  }

  updateStatus(index: number, status: string) {
    this.accounts[index].status = status;
    this.loggingService.onstatusChanged(status);
  }
}
