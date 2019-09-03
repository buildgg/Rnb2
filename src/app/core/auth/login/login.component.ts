import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import {AuthService} from '../auth.service';
import {ModalMessageComponent} from '../../../ui/modal-message/modal-message.component';
import {Router} from '@angular/router';

@Component({
  selector: 'rnb-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  @ViewChild(ModalMessageComponent)
  private modalMessage: ModalMessageComponent;

  constructor(private authService: AuthService,
              private fb: FormBuilder,
              private router: Router
              ) { }
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
            this.authService.currentUser = this.loginForm.value.user;
            this.authService.authorized = true;
            this.router.navigate([this.authService.redirectUrl]);
          }
        },
        (error) => {
      this.modalMessage.setMessage('Не верно задано имя или пароль');
      this.modalMessage.open();
    }

      );

   /* const text = 'Не верно задано имя или пароль';
    this.modalMessage.setMessage(text);
    this.modalMessage.open();*/
  }
}
