/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/space-before-function-paren */
/* eslint-disable @typescript-eslint/comma-dangle */
/* eslint-disable @typescript-eslint/consistent-type-imports */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/semi */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/prefer-readonly */
import { Component, EventEmitter, Output } from '@angular/core';
import { ChatService } from '../../services/chat.service';
import { HttpHeaders } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { IdleTimeService } from 'src/app/services/idle/idle-time.service';
import { ActivatedRoute } from '@angular/router';
import { DashBoardComponent } from '../dash-board/dash-board.component';
import { UserPageComponent } from '../user-page/user-page.component';
import { Store } from '@ngrx/store';
import { DialogInfoComponent } from 'src/app/reusable/dialog-info/dialog-info.component';
import { MatDialog } from '@angular/material/dialog';
import { openDialog } from 'src/app/chat-store/table.actions';

@Component({
  selector: 'app-main-dashboard',
  templateUrl: './main-dashboard.component.html',
  styleUrls: ['./main-dashboard.component.scss'],
})
export class MainDashboardComponent {
  // eslint-disable-next-line @typescript-eslint/semi
  data: any;
  'userData$': Observable<any>;
  isAdmin: boolean = false;
  isCollapsed: boolean = false;
  constructor(
    private chatservice: ChatService,
    private idleSerive: IdleTimeService,
    private route: ActivatedRoute,
    private store: Store,
    private dialog: MatDialog,
  ) {}
  // eslint-disable-next-line @typescript-eslint/lines-between-class-members
  ngOnInit() {
    this.chatservice.getSocketData('error').subscribe((res) => {
      this.store.dispatch(openDialog({ message: res, title: 'Socket Error' }));
    });
    this.userData$ = this.chatservice.UserLoginData.pipe(
      map((res: any) => {
        this.isAdmin = res.isAdmin;
        if (!res.isAdmin && res.status === 'Available') {
          this.idleSerive.startIdleMonitoring();
        }
        return res;
      }),
    );
    this.chatservice.getSocketData('adminMessageToAll').subscribe((res) => {
      if (!this.isAdmin) {
        const message = `Send By AdminName: ${res.sender.name} ,    Admin message  : ${res.content}`;
        this.store.dispatch(openDialog({ message, title: 'Admin Message' }));
      }
    });
  }

  // hamburger click data form header component
  HamburgerClick(isToggle: boolean) {
    this.isCollapsed = !this.isCollapsed;
  }
}
