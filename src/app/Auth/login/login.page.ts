import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonicModule, MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
import { messages } from 'src/app/provider/message-list';
import { Device } from '@capacitor/device';
import { ApiService } from 'src/app/services/api.service';
import { config } from 'src/app/provider/config';
import { CommonService } from 'src/app/services/common.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ReactiveFormsModule],
  providers: [ApiService]
})
export class LoginPage implements OnInit {
  notificationForm!: FormGroup;
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private menuCtrl: MenuController,
    private api: ApiService,
    private common: CommonService
  ) { }

  ngOnInit() {
    this.formBuild();
  }

  formBuild(){
    this.notificationForm = this.fb.group({
      email: ['',[Validators.required]],
      password: ['',[Validators.required,Validators.pattern(messages.validation.password)]]
    }) 
  }
  
  async submit(){ 
    if(this.notificationForm.valid){
      this.common.showLoading(messages.showloading);
      const info = await Device.getId();
      // let payload = {
      //   email: this.notificationForm.value['email'],
      //   password: this.notificationForm.value['password'],
      //   user_uuid: info.uuid
      // };

      const formdata = new FormData(); 
      formdata.append('username', this.notificationForm.value['email']);
      formdata.append('password', this.notificationForm.value['password']); 
      formdata.append('latitude','09');
      formdata.append('longitude','09');
      formdata.append('token','808B31E22610AF6077468B9E975521D6');
      this.api.post(config.auth.login,formdata).subscribe({
        next: (resp:any)=>{
          this.common.hideLoading();
          console.log(resp);
          
          if(resp?.status){
            localStorage.setItem("notificationToken",resp?.loginsession); 
            localStorage.setItem("notificationUserType",resp);
            this.common.showToast(resp?.message);
            this.menuCtrl.enable(true);
            this.router.navigateByUrl('/dashboard');
          }
        },
        error: (err:any)=>{
          this.common.hideLoading();
          this.common.showAlert(err?.error?.message ?? err?.message );
        }
      })
    }
  }

  forgotPassword(){
    this.router.navigateByUrl('/forgot-pwd');
  }
  register(){
    this.router.navigateByUrl('/register');
  }

}
