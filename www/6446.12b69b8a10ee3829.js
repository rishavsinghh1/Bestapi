"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[6446],{6446:(C,d,a)=>{a.r(d),a.d(d,{DashboardPage:()=>T});var s=a(6895),u=a(433),n=a(6114),l=a(5830),b=a(4642),p=a(2142),t=a(8256),m=a(1407),h=a(5620);function f(e,r){if(1&e){const o=t.EpF();t.TgZ(0,"ion-item-options")(1,"ion-item-option",20),t.NdJ("click",function(){t.CHM(o);const c=t.oxw().$implicit,_=t.oxw(2);return t.KtG(_.deleteProject(c.id))}),t._uU(2,"Delete"),t.qZA()()}}function P(e,r){if(1&e){const o=t.EpF();t.TgZ(0,"ion-card")(1,"ion-item-sliding")(2,"div",18),t.NdJ("click",function(){const _=t.CHM(o).$implicit,g=t.oxw(2);return t.KtG(g.goToDetail(_))}),t._uU(3),t.qZA(),t.TgZ(4,"ion-item")(5,"ion-label",19),t.NdJ("click",function(){const _=t.CHM(o).$implicit,g=t.oxw(2);return t.KtG(g.goToDetail(_))}),t._uU(6),t.qZA()(),t.YNc(7,f,3,0,"ion-item-options",6),t.qZA()()}if(2&e){const o=r.$implicit,i=t.oxw(2);t.xp6(3),t.Oqu(o.project_title),t.xp6(3),t.Oqu(o.unique_code),t.xp6(1),t.Q6J("ngIf",1==i.userType)}}function v(e,r){if(1&e&&(t.TgZ(0,"div")(1,"div",16),t._uU(2,"Project List"),t.qZA(),t.YNc(3,P,8,3,"ion-card",17),t.qZA()),2&e){const o=t.oxw();t.xp6(3),t.Q6J("ngForOf",o.projectList)}}function O(e,r){1&e&&(t.TgZ(0,"div")(1,"h3",21),t._uU(2,"No Data found"),t.qZA()())}function M(e,r){if(1&e){const o=t.EpF();t.TgZ(0,"ion-footer")(1,"div")(2,"ion-fab",22)(3,"ion-fab-button",23),t.NdJ("click",function(){t.CHM(o);const c=t.oxw();return t.KtG(c.goToPage("add-project"))}),t._UZ(4,"ion-icon",24),t.qZA()(),t.TgZ(5,"ion-tab-bar",25),t._UZ(6,"ion-tab-button",26)(7,"ion-tab-button",27),t.O4$(),t.TgZ(8,"svg",28),t._UZ(9,"path",29),t.qZA(),t.kcU(),t._UZ(10,"ion-tab-button",30)(11,"ion-tab-button",31),t.qZA()()()}}let T=(()=>{class e{constructor(o,i,c){this.router=o,this.api=i,this.common=c,this.projectList=[]}ngOnInit(){}ionViewWillEnter(){}getUserType(){this.userType=localStorage.getItem("notificationUserType")}getProjectList(){this.common.showLoading(p.s.showloading),this.api.postAuth(1==this.userType?b.v.project.getProjectList:b.v.project.getAssignedProjectList,{}).then(i=>{this.common.hideLoading(),i?.success&&(this.projectList=i?.data)}).catch(i=>{this.common.hideLoading(),this.common.showAlert(i?.error?.message??i?.message)})}goToPage(o){this.router.navigateByUrl("/"+o)}goToDetail(o){this.router.navigateByUrl("/project-detail",{state:{productDetail:o}})}deleteProject(o){this.common.showAlert("Coming soon..")}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(m.F0),t.Y36(l.s),t.Y36(h.v))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-dashboard"]],standalone:!0,features:[t._Bn([l.s]),t.jDz],decls:26,vars:5,consts:[[3,"translucent"],["color","primary"],["slot","start"],["color","light"],["color","light","slot","end","name","notifications-outline",2,"font-size","28px",3,"click"],[3,"fullscreen"],[4,"ngIf"],["slot","bottom"],["tab","home"],["name","play-circle"],["tab","radio"],["name","radio"],["tab","library"],["name","library"],["tab","search"],["name","search"],[1,"mainHeading","ion-padding-bottom",2,"text-decoration","underline"],[4,"ngFor","ngForOf"],[2,"margin-top","4%","margin-left","4%","font-size","16px","color","#4c4c4c","font-weight","600","text-transform","capitalize",3,"click"],[2,"font-size","14px","color","gray",3,"click"],["color","danger",3,"click"],[1,"ion-text-center","nodatafound"],["vertical","bottom","horizontal","center","translucent","true"],[3,"click"],["name","add"],["slot","bottom",1,"ion-no-border"],["tab","tab-encounters"],["tab","tab-conversations",1,"comments"],["height","50","viewBox","0 0 100 50","width","100","xmlns","http://www.w3.org/2000/svg"],["d","M100 0v50H0V0c.543 27.153 22.72 49 50 49S99.457 27.153 99.99 0h.01z","fill","red","fill-rule","evenodd"],["tab","tab-notifications",1,"notifs"],["tab","tab-profile"]],template:function(o,i){1&o&&(t.TgZ(0,"ion-header",0)(1,"ion-toolbar",1)(2,"ion-title"),t._uU(3,"Dashboard"),t.qZA(),t.TgZ(4,"ion-buttons",2),t._UZ(5,"ion-menu-button",3),t.qZA(),t.TgZ(6,"ion-icon",4),t.NdJ("click",function(){return i.goToPage("notification")}),t.qZA()()(),t.TgZ(7,"ion-content",5)(8,"div"),t.YNc(9,v,4,1,"div",6),t.YNc(10,O,3,0,"div",6),t.qZA()(),t.TgZ(11,"ion-tabs")(12,"ion-tab-bar",7)(13,"ion-tab-button",8),t._UZ(14,"ion-icon",9),t._uU(15," Listen Now "),t.qZA(),t.TgZ(16,"ion-tab-button",10),t._UZ(17,"ion-icon",11),t._uU(18," Radio "),t.qZA(),t.TgZ(19,"ion-tab-button",12),t._UZ(20,"ion-icon",13),t._uU(21," Library "),t.qZA(),t.TgZ(22,"ion-tab-button",14),t._UZ(23,"ion-icon",15),t._uU(24," Search "),t.qZA()()(),t.YNc(25,M,12,0,"ion-footer",6)),2&o&&(t.Q6J("translucent",!0),t.xp6(7),t.Q6J("fullscreen",!0),t.xp6(2),t.Q6J("ngIf",i.projectList.length>0),t.xp6(1),t.Q6J("ngIf",0==i.projectList.length),t.xp6(15),t.Q6J("ngIf",1==i.userType))},dependencies:[n.Pc,n.Sm,n.PM,n.W2,n.IJ,n.W4,n.fr,n.Gu,n.gu,n.Ie,n.u8,n.IK,n.td,n.Q$,n.fG,n.yq,n.ZU,n.wd,n.sr,n.UN,s.ez,s.sg,s.O5,u.u5],styles:['.mainDiv[_ngcontent-%COMP%]{margin:5%}div[_ngcontent-%COMP%]   ion-fab[_ngcontent-%COMP%]{margin-bottom:env(safe-area-inset-bottom)}div[_ngcontent-%COMP%]   ion-fab[_ngcontent-%COMP%]   ion-fab-button[_ngcontent-%COMP%]{--box-shadow: none}div[_ngcontent-%COMP%]   ion-tab-bar[_ngcontent-%COMP%]{--border: 0;--background: transparent;position:absolute;bottom:0;left:0;right:0;width:100%}div[_ngcontent-%COMP%]   ion-tab-bar[_ngcontent-%COMP%]:after{content:" ";width:100%;bottom:0;background:var(--ion-color-gray);height:env(safe-area-inset-bottom);position:absolute}div[_ngcontent-%COMP%]   ion-tab-bar[_ngcontent-%COMP%]   ion-tab-button[_ngcontent-%COMP%]{--background: var(--ion-color-gray)}div[_ngcontent-%COMP%]   ion-tab-bar[_ngcontent-%COMP%]   ion-tab-button.comments[_ngcontent-%COMP%]{margin-right:0;border-top-right-radius:18px}div[_ngcontent-%COMP%]   ion-tab-bar[_ngcontent-%COMP%]   ion-tab-button.notifs[_ngcontent-%COMP%]{margin-left:0;border-top-left-radius:18px}div[_ngcontent-%COMP%]   ion-tab-bar[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{width:72px;margin-top:19px}div[_ngcontent-%COMP%]   ion-tab-bar[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]{fill:var(--ion-color-gray)}']}),e})()}}]);