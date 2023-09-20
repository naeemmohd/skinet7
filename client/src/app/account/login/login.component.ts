import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AccountService } from '../account.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  returnUrl: string;

  constructor(private accountService: AccountService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { 
      this.returnUrl = this.activatedRoute.snapshot.queryParams['returnUrl'] || "/shop";
    }

  regComplexPassword = "(?=^.{6,10}$)(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&amp;*()_+}{&quot;:;'?/&gt;.&lt;,])(?!.*\s).*$"
  
  //create a new Reactive form
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.pattern(this.regComplexPassword)])
  });

  //on Submit
  onSubmit() {
    console.log(this.loginForm.value);
    this.accountService.login(this.loginForm.value).subscribe({
      next: () => this.router.navigateByUrl(this.returnUrl)
    });
  }
}
