import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
 import { BehaviorSubject, Observable, throwError } from 'rxjs';
 import * as _ from 'lodash';   
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private loanData: BehaviorSubject<any> = new BehaviorSubject<any>('');
  TokenData:string = "";
  constructor(
    private http: HttpClient
  ) {
  }

  post(path:any,payload:any){
    const header = new HttpHeaders({
      authkey: "MWQyMmUzNWY4YjhlNjY2NWJjM2EzZjY0NjNhZWM0ZTk=",
    });
    const options = {
      headers: header,
    };
    return this.http.post(environment.apiUrl+path,payload,options);
  }
  get(path:any){
    return this.http.get(environment.apiUrl+path);
  }

  getToken(): Promise<any> {
      return new Promise((resolve, reject) =>{
        const local = localStorage.getItem("notificationToken");
        resolve(local);
      })
  }
  postAuth(path: any, payload: any):Promise<any> {
    return new Promise((resolve,reject) =>{
      this.getToken().then((res: any) => {
        const header = new HttpHeaders({
          Authorization: "Bearer "+res,
        });
        const options = {
          headers: header,
        };

        this.hitApi(path,payload,options).subscribe({
          next: (resp:any)=>{
            resolve(resp);
            return true;
          },
          error: (error:any)=>{
            reject(error);
          }
        })
        
      });
    })
  }

  hitApi(path:string,payload:any,options:any){
    return this.http.post(environment.apiUrl + path, payload, options);
  }

  get behaviourData(): Observable<any>{
    return this.loanData.asObservable();
  }

  set behaviourData(data:any){
    const oldValue = this.loanData.getValue();
    const newValue = _.merge(oldValue, data);
    this.loanData.next(newValue);
  }

}
