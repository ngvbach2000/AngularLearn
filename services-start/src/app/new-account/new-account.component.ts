import { Component, EventEmitter, Output, Input } from '@angular/core';
import { AccountService } from '../account/account.service';
import { LoggingService } from '../logging/logging.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent {
  @Output() accountAdded = new EventEmitter<{name: string, status: string}>();
  @Input() id: number;

  constructor(private loggingService: LoggingService,
              private accountService: AccountService)
            {

            }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountService.addAccount(accountName, accountStatus);
    this.loggingService.logStatusChange(accountStatus);
  }
}
