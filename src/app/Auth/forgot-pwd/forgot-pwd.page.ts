import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { messages } from 'src/app/provider/message-list';

@Component({
  selector: 'app-forgot-pwd',
  templateUrl: './forgot-pwd.page.html',
  styleUrls: ['./forgot-pwd.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ReactiveFormsModule]
})
export class ForgotPwdPage implements OnInit {

  notificationForm!: FormGroup;
  constructor(
    private router: Router,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.formBuild();
  }

  forgotPassword(){
    
  }

  formBuild(){
    this.notificationForm = this.fb.group({
      email: ['',[Validators.required,Validators.pattern(messages.validation.emailRegx)]],
    }) 
  }

  submit(){
    console.log(this.notificationForm);
    
  }

}
