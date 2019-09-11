import {Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

import {AuthService} from '../auth.service';
import {ModalService} from '../../../ui/modal/modal.service';

@Component({
  selector: 'rnb-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private authService: AuthService,
              private fb: FormBuilder,
              private router: Router,
              private modal: ModalService) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      user: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login() {
    this.authService
      .login(this.loginForm.value.user, this.loginForm.value.password)
      .subscribe((val) => {
          if (val) {
            this.router.navigate([this.authService.redirectUrl]);
          }
        },
        (error) => this.modal.open('Не верно задано имя или пароль')
    );
  }
}
