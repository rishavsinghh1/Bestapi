"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[1947],{1947:(h,p,a)=>{a.r(p),a.d(p,{ProjectDetailPage:()=>m});var l=a(6895),_=a(433),r=a(6114),t=a(8256),c=a(1407),g=a(5620);function e(i,u){if(1&i&&(t.TgZ(0,"ion-item",8)(1,"a",11),t._uU(2),t.qZA()()),2&i){const n=t.oxw(2);t.xp6(1),t.Q6J("href",n.projectList.project_url,t.LSH),t.xp6(1),t.Oqu(n.projectList.project_url)}}function o(i,u){if(1&i&&(t.TgZ(0,"ion-item",8)(1,"small",12),t._uU(2),t.qZA()()),2&i){const n=t.oxw(2);t.xp6(2),t.Oqu(n.projectList.project_description)}}function s(i,u){if(1&i&&(t.TgZ(0,"div")(1,"ion-card",6)(2,"div",7),t._uU(3),t.qZA(),t.TgZ(4,"ion-item",8)(5,"ion-label",9),t._uU(6),t.qZA()(),t.YNc(7,e,3,2,"ion-item",10),t.YNc(8,o,3,1,"ion-item",10),t.qZA()()),2&i){const n=t.oxw();t.xp6(3),t.Oqu(n.projectList.project_title),t.xp6(3),t.Oqu(n.projectList.unique_code),t.xp6(1),t.Q6J("ngIf",n.projectList.project_url),t.xp6(1),t.Q6J("ngIf",n.projectList.project_description)}}let m=(()=>{class i{constructor(n,d){this.router=n,this.common=d,this.projectList=[]}ngOnInit(){this.getProjectDetail()}getProjectDetail(){history?.state?this.projectList=history?.state?.productDetail??[]:(this.common.showAlert("Something went wrong pls try again later"),this.router.navigateByUrl("/dashboard"))}}return i.\u0275fac=function(n){return new(n||i)(t.Y36(c.F0),t.Y36(g.v))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-project-detail"]],standalone:!0,features:[t.jDz],decls:9,vars:3,consts:[[3,"translucent"],["color","primary"],["slot","start"],["defaultHref","dashboard"],[3,"fullscreen"],[4,"ngIf"],[1,"ion-padding"],[2,"margin-top","4%","margin-left","4%","font-size","20px","color","#4c4c4c","font-weight","600","text-transform","capitalize"],["lines","none"],[2,"font-size","18px","color","gray"],["lines","none",4,"ngIf"],[3,"href"],[2,"color","gray"]],template:function(n,d){1&n&&(t.TgZ(0,"ion-header",0)(1,"ion-toolbar",1)(2,"ion-title"),t._uU(3,"Project Detail"),t.qZA(),t.TgZ(4,"ion-buttons",2),t._UZ(5,"ion-back-button",3),t.qZA()()(),t.TgZ(6,"ion-content",4)(7,"div"),t.YNc(8,s,9,4,"div",5),t.qZA()()),2&n&&(t.Q6J("translucent",!0),t.xp6(6),t.Q6J("fullscreen",!0),t.xp6(2),t.Q6J("ngIf",d.projectList))},dependencies:[r.Pc,r.oU,r.Sm,r.PM,r.W2,r.Gu,r.Ie,r.Q$,r.wd,r.sr,r.cs,l.ez,l.O5,_.u5]}),i})()},5620:(h,p,a)=>{a.d(p,{v:()=>t});var l=a(5861),_=a(8256),r=a(6114);let t=(()=>{class c{constructor(e,o,s){this.loadingCtrl=e,this.toastCtrl=o,this.alertCtrl=s}showLoading(e){var o=this;return(0,l.Z)(function*(){o.loading=yield o.loadingCtrl.create({message:e,spinner:"circles"}),o.loading.present()})()}hideLoading(){var e=this;return(0,l.Z)(function*(){e.loading.dismiss()})()}showToast(e){var o=this;return(0,l.Z)(function*(){yield(yield o.toastCtrl.create({message:e,duration:1500,position:"bottom"})).present()})()}showAlert(e){var o=this;return(0,l.Z)(function*(){yield(yield o.alertCtrl.create({message:e,buttons:[{text:"OK",role:"confirm",handler:()=>{}}]})).present()})()}getMonthName(e){return["Jan","Feb","Mar","Apr","May","June","July","Aug","Sept","Oct","Nov","Dec"][e]}changeDateFormate(e){let o=e.split("-"),s=o[1].toString();return s=s.replace(/^0+/,""),this.getMonthName(parseInt(s)-1)+" "+o[2]+", "+o[0]}}return c.\u0275fac=function(e){return new(e||c)(_.LFG(r.HT),_.LFG(r.yF),_.LFG(r.Br))},c.\u0275prov=_.Yz7({token:c,factory:c.\u0275fac,providedIn:"root"}),c})()}}]);