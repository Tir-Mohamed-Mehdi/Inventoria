import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { LoginAuthService } from 'src/app/services/authorization/login-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class LoginComponent {
  constructor(
    private formBuilder: FormBuilder,
    private authService: LoginAuthService
  ) {}

  @ViewChild('formDirective') private formDirective!: NgForm;

  loading = this.authService._ifLoading$;

  logInForm = this.formBuilder.group({
    identifier: ['', Validators.required],
    password: ['', [Validators.required, Validators.minLength(5)]],
  });

  onSubmitForm() {
    if (this.logInForm.valid) {
      this.authService.loginFunc({
        identifier: this.logInForm.value.identifier,
        password: this.logInForm.value.password,
      });

      this.formDirective.resetForm();
    }
  }
}
