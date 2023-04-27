import { Injectable } from '@angular/core';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  public loading:any;
  constructor(
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private alertCtrl: AlertController
  ) { }

  async showLoading(msg:string){
    this.loading = await this.loadingCtrl.create({
      message: msg,
     // duration: 1000,
      spinner: 'circles',
    });

    this.loading.present();
  }

  async hideLoading(){
    this.loading.dismiss();
  }

  async showToast(msg:string){
    const toast = await this.toastCtrl.create({
      message: msg,
      duration: 1500,
      position: 'bottom'
    });

    await toast.present();
  }

  async showAlert(msg:any){
    const alert = await this.alertCtrl.create({
      message: msg,
      buttons: [
        {
          text: 'OK',
          role: 'confirm',
          handler: () => {
            
          },
        },
      ],
    });

    await alert.present();
  }
  
  getMonthName(index:number){
    const allName = ["Jan","Feb","Mar","Apr","May","June","July","Aug","Sept","Oct","Nov","Dec"];
    return allName[index];
  }

  changeDateFormate(date:any){
    let splitDate = date.split("-");
    let monthIndex: any = (splitDate[1]).toString(); // convert number to string
    monthIndex = monthIndex.replace(/^0+/, '');

    let finaldate = this.getMonthName(parseInt(monthIndex)-1)+' '+splitDate[2]+', '+splitDate[0];
    return finaldate;
  }
  
}
