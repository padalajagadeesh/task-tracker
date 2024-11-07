/* eslint-disable @typescript-eslint/semi */
/* eslint-disable @typescript-eslint/consistent-type-imports */
/* eslint-disable @typescript-eslint/comma-dangle */
/* eslint-disable @typescript-eslint/no-confusing-void-expression */
/* eslint-disable @typescript-eslint/space-before-function-paren */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/unbound-method */
/* eslint-disable prettier/prettier */
import { ChangeDetectorRef, Component } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { ChatService } from '../../services/chat.service'

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {
  UserData: any
  UserDataa: boolean = false
  LoginBoolean: boolean = true
  RoleDetails = 'Admin'
  submitted: boolean = false
  ErrorMsg: any
  navigateData: any
  ErrorHandling: boolean = true
  password: any
  show = true
  showpassword: boolean = false
  fieldTextType: any = { isTrue: false }
  constructor(
    private readonly route: Router,
    private readonly fb: FormBuilder,
    private readonly chatservice: ChatService,
    private readonly cd: ChangeDetectorRef,
  ) {}

  'loginForm': FormGroup
  ngOnInit () {
    this.loginForm = this.fb.group({
      userId: ['', [Validators.required]],
      password: ['', [Validators.required]],
    })
    this.loginForm.valueChanges.subscribe((res: any) => {
      this.UserDataa = false
    })
    this.chatservice.RoleData.subscribe((res: any) => {
      if (res) {
        this.RoleDetails = res
      }
      if (this.RoleDetails === 'Admin') {
        this.navigateData = 'User'
      } else {
        this.navigateData = 'Admin'
      }
    })
    this.password = 'password'
  }

  togglePassword() {
    this.showpassword = !this.showpassword
    this.cd.detectChanges()
  }

  AdminLogin() {
    console.log('inner')
    // this.UserDataa = true
    // this.submitted = true
    // const isAdmin = this.RoleDetails === 'Admin'
    // this.LoginBoolean = false;
    this.route.navigate(['dashboard'])
    // if (this.loginForm.valid) {
    //   this.chatservice
    //     .currentTaskUser({ ...this.loginForm.value, isAdmin })
    //     .subscribe(
    //       (res: any) => {
    //         localStorage.setItem('token', res.token);
    //         localStorage.setItem('refreshToken', res.refreshToken);
    //         this.chatservice.UserLogin(res);
    //       },
    //       (err: any) => {
    //         this.LoginBoolean = true;
    //         this.ErrorMsg = err.error.error;
    //       },
    //     )
    // }
  }

  get login() {
    return this.loginForm.controls
  }

  get userId() {
    return this.login['userId']
  }

  get pwd() {
    return this.login['password']
  }

  getNavigate() {
    const data = this.chatservice.getRoleData(this.navigateData)
    this.loginForm.reset()
    this.ErrorMsg = ''
  }

  toggleFieldTextType() {
    this.fieldTextType.isTrue = !this.fieldTextType.isTrue
    this.cd.detectChanges()
  }

  forgotPassword() {
    this.route.navigate(['forgot-password'])
  }
}
