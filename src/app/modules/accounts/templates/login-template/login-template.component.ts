import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  UntypedFormControl,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ROUTES_NAMES } from '../../../../core/routes/routes.enum';
import { AccountsService } from '../../accounts.service';
import { Subject, takeUntil } from 'rxjs';
import { IApiRespose } from '../../../../core/Common-Interfaces/common-interfaces';
import { MatSnackBar } from '@angular/material/snack-bar';
import { getSnackBarConfig } from '../../../../core/common-functions/common-functions';

@Component({
  selector: 'app-login-template',
  templateUrl: './login-template.component.html',
  styleUrl: './login-template.component.scss',
})
export class LoginTemplateComponent implements OnInit {
  loginForm!: FormGroup;
  hide = true;
  showLoader = true;
  destroyNotifier$ = new Subject();

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private accountsService: AccountsService,
    private snackBar: MatSnackBar
  ) {
    this.formInIt();
  }

  formInIt() {
    this.loginForm = this.fb.group({
      email: new UntypedFormControl('', Validators.required),
      password: new UntypedFormControl('', Validators.required),
    });
  }

  login() {
    const payload = this.prepareRequest(this.loginForm.value);

    let onSuccess = (data: IApiRespose) => {
      if (data._isSucceed) {
        this.router.navigateByUrl(ROUTES_NAMES.APP);
      } else {
        this.snackBar.open(data._messege, 'Close', getSnackBarConfig());
      }
    };
    const observer = {
      next: (data: any) => onSuccess(data),
      error: (error: any) => {
        console.error('Login error:', error);
      },
    };
    this.accountsService
      .login(payload)
      .pipe(takeUntil(this.destroyNotifier$))
      .subscribe(observer);
  }

  prepareRequest(form: any) {
    return {
      Email: form.email,
      Password: form.password,
    };
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.showLoader = false;
    }, 2000);
  }

  ngOnDestroy(): void {
    this.destroyNotifier$.next(true);
    this.destroyNotifier$.complete();
  }
}
