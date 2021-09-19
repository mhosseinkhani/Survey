import { getAttrsForDirectiveMatching } from '@angular/compiler/src/render3/view/util';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { UserService } from 'src/app/core/services/user.service';
import {
  LoginModel,
  LoginResponse,
} from 'src/app/core/_models/auth/login.model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [UserService],
})
export class LoginComponent implements OnInit {
  defaultAuth: LoginModel = {
    userName: 'admin',
    password: '123456',
  };

  loginForm: FormGroup = new FormGroup({});
  hasError: boolean = false;
  returnUrl: string = 'survey';
  isLoading$: boolean = false;

  // private fields

  constructor(
    private fb: FormBuilder,
    private authService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    // this.isLoading$ = this.authService.isLoading$;
    // redirect to home if already logged in
    // if (this.authService.currentUserValue) {
    //   this.router.navigate(['/']);
    // }
  }

  ngOnInit(): void {
    this.initForm();
    // get return url from route parameters or default to '/'
    this.returnUrl =
      this.route.snapshot.queryParams['returnUrl'.toString()] || '/';
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.loginForm.controls;
  }

  initForm() {
    this.loginForm = this.fb.group({
      userName: [
        this.defaultAuth.userName,
        Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(320), // https://stackoverflow.com/questions/386294/what-is-the-maximum-length-of-a-valid-email-address
        ]),
      ],
      password: [
        this.defaultAuth.password,
        Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(100),
        ]),
      ],
    });
  }

  submit() {
    this.isLoading$ = true;
    this.hasError = false;
    const loginSubscr = this.authService
      .login(this.f.userName.value, this.f.password.value)
      .subscribe((user: LoginResponse) => {
        if (user) {
          window.localStorage.setItem(environment.AuthKey, user.accessToken);
          this.router.navigate([this.returnUrl]);
        } else {
          this.hasError = true;
        }
        this.isLoading$ = false;
      });
  }

  ngOnDestroy() {}
}
