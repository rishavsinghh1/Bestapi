import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AlertController, IonicModule, MenuController } from '@ionic/angular';
import {
  ActionPerformed,
  PushNotificationSchema,
  PushNotifications,
  Token,
} from '@capacitor/push-notifications';
import { Platform } from '@ionic/angular';
import { Capacitor } from '@capacitor/core';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [IonicModule, RouterLink, RouterLinkActive, CommonModule, HttpClientModule],
  providers: [HttpClientModule]
})
export class AppComponent {
  public userType:any;
  public appPages:any = [
        { title: 'Dashboard', url: '/dashboard', icon: 'home' },
        { title: 'My Profile', url: '/my-profile', icon: 'person' },
        { title: 'Member List', url: '/member-list', icon: 'people' },
        { title: 'Change Password', url: '/change-password', icon: 'key' },
        { title: 'Logout', url: 'logout', icon: 'log-out' },
  ];

  constructor(
    private alertCtrl: AlertController,
    private router: Router,
    private platform: Platform,
    private menuCtrl: MenuController
  ) {
    this.getUserType();
    this.platform.ready().then((res)=>{
      //console.log(res);
     // if(this.platform.is('ios') || this.platform.is('android')){
        //this.getFcmInfo();
        //this.menuCtrl.enable(false);
        const isPushNotificationsAvailable = Capacitor.isPluginAvailable('PushNotifications');
        if (isPushNotificationsAvailable) {
          this.getFcmInfo();
        }
      //}
      
      
    });

   // this.backHandler();
    
  }

  backHandler(){
    this.platform.backButton.subscribe((res)=>{
     // alert(JSON.stringify(res))
     // this.platform.exitapp()
    })
  }

  getUserType(){
    //console.log("innnnn");

    this.userType = localStorage.getItem("notificationUserType");
    console.log("userType",this.userType);
    
    // if(this.userType == 1){
    //   this.appPages = [
    //     { title: 'Dashboard', url: '/dashboard', icon: 'home' },
    //     { title: 'My Profile', url: '/my-profile', icon: 'person' },
    //     { title: 'Member List', url: '/member-list', icon: 'people' },
    //     { title: 'Change Password', url: '/change-password', icon: 'key' },
    //     { title: 'Logout', url: 'logout', icon: 'log-out' },
    //   ]
    // }

    // if(this.userType == 0){
    //   this.appPages = [
    //     { title: 'Dashboard', url: '/dashboard', icon: 'home' },
    //     { title: 'My Profile', url: '/my-profile', icon: 'person' },
    //     { title: 'Change Password', url: '/change-password', icon: 'key' },
    //     { title: 'Logout', url: 'logout', icon: 'log-out' },
    //   ]
    // }
  }
  
  getFcmInfo(){
    

    PushNotifications.requestPermissions().then(result => {
      if (result.receive === 'granted') {
        // Register with Apple / Google to receive push via APNS/FCM
        PushNotifications.register();
      } else {
        // Show some error
      }
    });

    PushNotifications.addListener('registration', (token: Token) => {
     // alert('Push registration success, token: ' + token.value);
    });
  }

  async logout(){
    let alert = await this.alertCtrl.create({
      header: 'Log Out',
      message: 'Are you sure?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Yes',
          handler: () => {
            this.menuCtrl.enable(false);
            this.clearStorage();
          }
        }
      ]
    });
    alert.present();
  }

  clearStorage(){
    localStorage.removeItem("notificationToken");
    localStorage.removeItem("notificationUserId");
    localStorage.removeItem("notificationUserType");
    this.menuCtrl.enable(false);
    this.router.navigateByUrl('/login');
  }
}
