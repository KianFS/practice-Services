import { Component, Output, EventEmitter, inject, OnInit } from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-new-account',
  imports: [],
  templateUrl: './new-account.component.html',
  styleUrl: './new-account.component.css',
})
export class NewAccountComponent implements OnInit {
  accountsService = inject(AccountsService);
  para: string = '';

  ngOnInit(): void {
    this.accountsService.statusUpdated.subscribe(
      (data: string) => (this.para = data)
    );
  }
  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountsService.addAccount(accountName, accountStatus);
  }
}
