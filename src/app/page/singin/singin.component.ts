import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Login, User } from 'src/app/interface/user';
import { UserService } from 'src/app/seviceuser/user.service';

@Component({
  selector: 'app-singin',
  templateUrl: './singin.component.html',
  styleUrls: ['./singin.component.scss']
})
export class SinginComponent {
  submitted: boolean = false;
  formSignin = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.minLength(6)]]
  });

  constructor(private fb: FormBuilder, private router: Router, private auth: UserService) {

  }

  onHandleSubmit() {
    this.submitted = true;
    const user: Login = {
      email: this.formSignin.value.email || "",
      password: this.formSignin.value.password || ""
    }
    if (this.formSignin.valid) {
      this.auth.login(user).subscribe(data => {
        localStorage.setItem('user', JSON.stringify(data));

        // Kiểm tra role sau khi đăng nhập
        if (data.user.role === 'admin') {
          // Nếu role là 'admin', chuyển hướng đến trang admin
          this.router.navigate(['/admin']);
        } else {
          // Nếu không phải 'admin', quay lại trang home
          this.router.navigate(['/']);
        }
      });
    }
  }

}