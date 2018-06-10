import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { MessageService } from '../messages/message.service';

@Component({
    template: `
        <div class="row">
            <h4 class="col-md-10">Message Log</h4>
            <span class="col-md-2">
                <a class="btn btn-default"
                    (click)="close()">
                    x
                </a>
            </span>
        </div>
        <div *ngFor="let message of messageService.messages; let i=index">
            <div *ngIf="i<10" class="message-row">
                {{ message }}
            </div>
        </div>
    `,
    styles: [
        '.message-row { margin-bottom: 10px }'
    ]
})
export class MessageComponent {
    
    // Note : Anything declared here is available in the template (.html) and that is why messageService is also
    //        available.
    constructor(private messageService: MessageService, private router: Router) { }

    close(): void {
        // ---------- If you specify null as the path then the named router-outlet will not display anything -----------
        this.router.navigate([{ outlets: { popup: null } }]);
        this.messageService.isDisplayed = false;
    }
}
