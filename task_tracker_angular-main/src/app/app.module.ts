/* eslint-disable @typescript-eslint/comma-dangle */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/semi */
import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { WelComePageComponent } from './components/welcome-page/welcome-page.component'
// import { LoginPageComponent } from './components/login-page/login-page.component';
import { DashBoardComponent } from './components/dash-board/dash-board.component'
import { CreateUserComponent } from './components/create-user/create-user.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatTooltipModule } from '@angular/material/tooltip'
import { MatButtonModule } from '@angular/material/button'
import { MatSortModule } from '@angular/material/sort'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatCardModule } from '@angular/material/card'
import { MatDialogModule } from '@angular/material/dialog'
import { guardGuard } from './services/auth/guard.guard'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import { MatTableModule } from '@angular/material/table'
import { MatIconModule } from '@angular/material/icon'
import { MatPaginatorModule } from '@angular/material/paginator'
import { MatGridListModule } from '@angular/material/grid-list'
import { UserPageComponent } from './components/user-page/user-page.component'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { TableComponent } from './reusable/table/table.component'
import { APP_BASE_HREF } from '@angular/common'
import { MainDashboardComponent } from './components/main-dashboard/main-dashboard.component'
import { ChatBoxComponent } from './components/chat-box/chat-box.component'
import { TicketsComponent } from './components/tickets/tickets.component'
import { MatSelectModule } from '@angular/material/select'
import { ClientTicketsComponent } from './components/client-tickets/client-tickets.component'
import { ViewRequestPageComponent } from './components/view-request-page/view-request-page.component'
import { NgxSpinnerModule } from 'ngx-spinner'
import { NavBarComponent } from './components/nav-bar/nav-bar.component'
import { UserViewComponent } from './components/user-view/user-view.component'
import { FileRenderComponent } from './reusable/file-render/file-render.component'
import { CreateGroupComponent } from './components/create-group/create-group.component'
import { adminGuard } from './services/admin/admin.guard'
import { UserlistComponent } from './components/userlist/userlist.component'
import { TicketdescriptionComponent } from './components/ticket-description/ticket-description.component'
import { DialogModelComponent } from './reusable/dialog-model/dialog-model.component'
import { StoreModule } from '@ngrx/store'
import { EffectsModule } from '@ngrx/effects'
import { ticketsRuducer } from './chat-store/table.reducer'
import { TicketsEffect } from './chat-store/table.effect'
import { FeedBackComponent } from './components/feed-back/feed-back.component'
import { DialogInfoComponent } from './reusable/dialog-info/dialog-info.component'
import { PieChartComponent } from './reusable/pie-chart/pie-chart.component'
import { ForgotpasswordComponent } from './components/forgotpassword/forgotpassword.component'
import { MatStepperModule } from '@angular/material/stepper'
import { MatInputModule } from '@angular/material/input'
import { MatListModule } from '@angular/material/list'
import { MatMenuModule } from '@angular/material/menu'
import { HeaderComponent } from './components/header/header.component'
// import { ServiceWorkerModule } from '@angular/service-worker';
import { ModelCloseDirective } from './directives/model-close.directive'
import { UserListEffects } from './chat-store/user-list.effect'
import { LoginPageComponent } from './components/login-page/login-page.component'
@NgModule({
  declarations: [
    AppComponent,
    WelComePageComponent,
    LoginPageComponent,
    DashBoardComponent,
    CreateUserComponent,
    UserPageComponent,
    TableComponent,
    MainDashboardComponent,
    ChatBoxComponent,
    TicketsComponent,
    ClientTicketsComponent,
    ViewRequestPageComponent,
    NavBarComponent,
    UserViewComponent,
    FileRenderComponent,
    CreateGroupComponent,
    UserlistComponent,
    TicketdescriptionComponent,
    DialogModelComponent,
    FeedBackComponent,
    DialogInfoComponent,
    PieChartComponent,
    ForgotpasswordComponent,
    HeaderComponent,
    ModelCloseDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatButtonModule,
    MatPaginatorModule,
    MatSortModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatSelectModule,
    MatIconModule,
    MatCardModule,
    MatDialogModule,
    MatStepperModule,
    MatInputModule,
    MatListModule,
    NgbModule,
    MatGridListModule,
    MatSelectModule,
    NgxSpinnerModule,
    MatMenuModule,
    StoreModule.forRoot({ tickets: ticketsRuducer }),
    EffectsModule.forRoot([TicketsEffect, UserListEffects]),
  ],

  providers: [
    guardGuard,
    adminGuard,
    { provide: APP_BASE_HREF, useValue: '/task_tracker_angular/' },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
