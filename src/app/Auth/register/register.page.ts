import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { messages } from 'src/app/provider/message-list';
import { MustMatch } from 'src/app/helper/must.match.validator';
import { ApiService } from 'src/app/services/api.service';
import { config } from 'src/app/provider/config';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ReactiveFormsModule],
  providers: [ApiService]
})
export class RegisterPage implements OnInit {

  notificationForm!: FormGroup;
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private api: ApiService,
    private common: CommonService,
  ) { }

  ngOnInit() {
    this.formBuild();
  }

  formBuild(){
    this.notificationForm = this.fb.group({
      name: ['',[Validators.required,Validators.pattern(messages.validation.nameRegex)]],
      email: ['',[Validators.required,Validators.pattern(messages.validation.emailRegx)]],
      mobile: ['',[Validators.required,Validators.pattern(messages.validation.mobileRegx)]],
      reference: ['',[Validators.minLength(6),Validators.maxLength(6)]],
      password: ['',[Validators.required,Validators.pattern(messages.validation.password)]],
      cpassword: ['',[Validators.required,Validators.pattern(messages.validation.password)]]
    }) ;
    this.notificationForm.addValidators(
      MustMatch('password','cpassword')
    ) 
  }

  submit(){
    if(this.notificationForm.valid){
      this.common.showLoading('wait a moment..');
      let data = this.notificationForm.value;
      let payload = {
        name: data['name'],
        email: data['email'],
        phone: data['mobile'],
        password: data['password'],
        confirm_password: data['cpassword'],
        reference_code: data['reference']
      };

      this.api.post(config.auth.registration,payload).subscribe({
        next: (resp:any)=>{
          this.common.hideLoading();
          if(resp.success){
            this.common.showToast(resp.message);
            this.router.navigateByUrl('/login');
          }else{
            this.common.showToast(resp.message);
          }
        },
        error: (err:any)=>{
          this.common.hideLoading();
          this.common.showAlert(err?.error?.message ?? err?.message);
        }
      })
    }
    
  }

  login(){
    this.router.navigateByUrl('/login');
  }

}
