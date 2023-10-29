"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[592],{9384:(x,f,s)=>{s.d(f,{b:()=>m});var t=s(4769),u=s(2704),l=s(6814),g=s(2999);function v(n,r){1&n&&(t.TgZ(0,"th")(1,"div",4),t._uU(2,"Remove"),t.qZA()())}function a(n,r){if(1&n){const e=t.EpF();t.TgZ(0,"i",19),t.NdJ("click",function(){t.CHM(e);const p=t.oxw().$implicit,T=t.oxw(2);return t.KtG(T.removeBasketItem(p.id,1))}),t.qZA()}}function d(n,r){if(1&n){const e=t.EpF();t.TgZ(0,"i",20),t.NdJ("click",function(){t.CHM(e);const p=t.oxw().$implicit,T=t.oxw(2);return t.KtG(T.addBasketItem(p))}),t.qZA()}}function c(n,r){if(1&n){const e=t.EpF();t.TgZ(0,"td",13)(1,"a",21)(2,"i",22),t.NdJ("click",function(){t.CHM(e);const p=t.oxw().$implicit,T=t.oxw(2);return t.KtG(T.removeBasketItem(p.id,p.quantity))}),t.qZA()()()}}function _(n,r){if(1&n&&(t.TgZ(0,"tr")(1,"th")(2,"div",7),t._UZ(3,"img",8),t.TgZ(4,"div",9)(5,"h5",10)(6,"a",11),t._uU(7),t.qZA()(),t.TgZ(8,"span",12),t._uU(9),t.qZA()()()(),t.TgZ(10,"td",13)(11,"strong"),t._uU(12),t.ALo(13,"currency"),t.qZA()(),t.TgZ(14,"td",13)(15,"div",14),t.YNc(16,a,1,0,"i",15),t.TgZ(17,"strong",16),t._uU(18),t.qZA(),t.YNc(19,d,1,0,"i",17),t.qZA()(),t.TgZ(20,"td",13)(21,"strong"),t._uU(22),t.ALo(23,"currency"),t.qZA()(),t.YNc(24,c,3,0,"td",18),t.qZA()),2&n){const e=r.$implicit,o=t.oxw(2);t.xp6(3),t.s9C("src",e.pictureUrl,t.LSH),t.s9C("alt",e.productName),t.xp6(3),t.MGl("routerLink","/shop/",e.id,""),t.xp6(1),t.hij(" ",e.productName," "),t.xp6(2),t.hij(" Type: ",e.type," "),t.xp6(3),t.Oqu(t.lcZ(13,13,e.price)),t.xp6(3),t.ekj("justify-content-center",!o.isBasket),t.xp6(1),t.Q6J("ngIf",o.isBasket),t.xp6(2),t.Oqu(e.quantity),t.xp6(1),t.Q6J("ngIf",o.isBasket),t.xp6(3),t.Oqu(t.lcZ(23,15,e.price*e.quantity)),t.xp6(2),t.Q6J("ngIf",o.isBasket)}}function i(n,r){if(1&n&&(t.TgZ(0,"div",1)(1,"table",2)(2,"thead",3)(3,"tr")(4,"th")(5,"div",4),t._uU(6,"Product"),t.qZA()(),t.TgZ(7,"th")(8,"div",4),t._uU(9,"Price"),t.qZA()(),t.TgZ(10,"th")(11,"div",4),t._uU(12,"Quantity"),t.qZA()(),t.TgZ(13,"th")(14,"div",4),t._uU(15,"Total"),t.qZA()(),t.YNc(16,v,3,0,"th",5),t.qZA()(),t.TgZ(17,"tbody"),t.YNc(18,_,25,17,"tr",6),t.qZA()()()),2&n){const e=r.ngIf,o=t.oxw();t.xp6(1),t.ekj("table-light",o.isBasket),t.xp6(1),t.ekj("table-dark",o.isBasket),t.xp6(8),t.ekj("text-center",!o.isBasket),t.xp6(6),t.Q6J("ngIf",o.isBasket),t.xp6(2),t.Q6J("ngForOf",e.items)}}let m=(()=>{var n;class r{constructor(o){this.basketService=o,this.addItem=new t.vpe,this.removeItem=new t.vpe,this.isBasket=!0}addBasketItem(o){this.addItem.emit(o)}removeBasketItem(o,p=1){this.removeItem.emit({id:o,quantity:p})}}return(n=r).\u0275fac=function(o){return new(o||n)(t.Y36(u.v))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-basket-summary"]],inputs:{isBasket:"isBasket"},outputs:{addItem:"addItem",removeItem:"removeItem"},decls:2,vars:3,consts:[["class","table-responsive",4,"ngIf"],[1,"table-responsive"],[1,"table"],[1,"text-uppercase"],[1,"py-2"],[4,"ngIf"],[4,"ngFor","ngForOf"],[1,"p-2","d-inline-block"],[1,"img-fluid",2,"max-height","50px",3,"src","alt"],[1,"ms-3","d-inline-block","align-middle"],[1,"mb-0"],[1,"text-dark","text-decoration-none",3,"routerLink"],[1,"text-muted","fst-italic"],[1,"align-middle"],[1,"d-flex","align-items-center"],["class","fa fa-minus-circle text-warning me-2","style","cursor: pointer; font-size: 2em;",3,"click",4,"ngIf"],[2,"font-size","1.2em"],["class","fa fa-plus-circle text-warning mx-2","style","cursor: pointer; font-size: 2em;",3,"click",4,"ngIf"],["class","align-middle",4,"ngIf"],[1,"fa","fa-minus-circle","text-warning","me-2",2,"cursor","pointer","font-size","2em",3,"click"],[1,"fa","fa-plus-circle","text-warning","mx-2",2,"cursor","pointer","font-size","2em",3,"click"],[1,"text-danger"],[1,"fa","fa-trash",2,"font-size","2em","cursor","pointer",3,"click"]],template:function(o,p){1&o&&(t.YNc(0,i,19,8,"div",0),t.ALo(1,"async")),2&o&&t.Q6J("ngIf",t.lcZ(1,1,p.basketService.basketSource$))},dependencies:[l.sg,l.O5,g.rH,l.Ov,l.H9]}),r})()},9947:(x,f,s)=>{s.d(f,{t:()=>_});var t=s(4769),u=s(95),l=s(6814);function g(i,m){1&i&&t._UZ(0,"div",5)}function v(i,m){if(1&i&&(t.TgZ(0,"div",6),t._uU(1),t.qZA()),2&i){const n=t.oxw();t.xp6(1),t.hij("Please enter your ",n.label,"")}}function a(i,m){1&i&&(t.TgZ(0,"div",6),t._uU(1,"Invalid email address"),t.qZA())}function d(i,m){1&i&&(t.TgZ(0,"div",6),t._uU(1,"Password not complex enough"),t.qZA())}function c(i,m){1&i&&(t.TgZ(0,"div",6),t._uU(1,"Email address is taken"),t.qZA())}let _=(()=>{var i;class m{constructor(r){this.controlDir=r,this.type="text",this.label="",this.controlDir.valueAccessor=this}get control(){return this.controlDir.control}writeValue(r){}registerOnChange(r){}registerOnTouched(r){}}return(i=m).\u0275fac=function(r){return new(r||i)(t.Y36(u.a5,2))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-text-input"]],inputs:{type:"type",label:"label"},decls:9,vars:10,consts:[[1,"form-floating","mb-3"],[1,"form-control",3,"type","formControl","placeholder","ngClass"],["class","fa fa-spinner fa-spin loader",4,"ngIf"],["for","floatingInput"],["class","invalid-feedback",4,"ngIf"],[1,"fa","fa-spinner","fa-spin","loader"],[1,"invalid-feedback"]],template:function(r,e){1&r&&(t.TgZ(0,"div",0),t._UZ(1,"input",1),t.YNc(2,g,1,0,"div",2),t.TgZ(3,"label",3),t._uU(4),t.qZA(),t.YNc(5,v,2,1,"div",4),t.YNc(6,a,2,0,"div",4),t.YNc(7,d,2,0,"div",4),t.YNc(8,c,2,0,"div",4),t.qZA()),2&r&&(t.xp6(1),t.s9C("type",e.type),t.s9C("placeholder",e.label),t.Q6J("formControl",e.control)("ngClass",e.control.touched?e.control.invalid?"is-invalid":"is-valid":null),t.xp6(1),t.Q6J("ngIf","PENDING"===e.control.status),t.xp6(2),t.Oqu(e.label),t.xp6(1),t.Q6J("ngIf",null==e.control.errors?null:e.control.errors.required),t.xp6(1),t.Q6J("ngIf",null==e.control.errors?null:e.control.errors.email),t.xp6(1),t.Q6J("ngIf",null==e.control.errors?null:e.control.errors.pattern),t.xp6(1),t.Q6J("ngIf",null==e.control.errors?null:e.control.errors.emailExists))},dependencies:[l.mk,l.O5,u.Fj,u.JJ,u.oH],styles:[".loader[_ngcontent-%COMP%]{position:absolute;width:auto;top:20px;right:40px;margin-top:0}"]}),m})()},7533:(x,f,s)=>{s.d(f,{S:()=>v});var t=s(4769),u=s(2704),l=s(6814);function g(a,d){if(1&a&&(t.TgZ(0,"ul",4)(1,"li",5)(2,"strong",6),t._uU(3," Order subtotal"),t.qZA(),t.TgZ(4,"strong"),t._uU(5),t.ALo(6,"currency"),t.qZA()(),t.TgZ(7,"li",5)(8,"strong",6),t._uU(9," Shipping and Handling"),t.qZA(),t.TgZ(10,"strong"),t._uU(11),t.ALo(12,"currency"),t.qZA()(),t.TgZ(13,"li",5)(14,"strong",6),t._uU(15," Total"),t.qZA(),t.TgZ(16,"strong"),t._uU(17),t.ALo(18,"currency"),t.qZA()()()),2&a){const c=d.ngIf;t.xp6(5),t.hij(" ",t.lcZ(6,3,c.subtotal),""),t.xp6(6),t.hij(" ",t.lcZ(12,5,c.shipping),""),t.xp6(6),t.hij(" ",t.lcZ(18,7,c.total),"")}}let v=(()=>{var a;class d{constructor(_){this.basketService=_}}return(a=d).\u0275fac=function(_){return new(_||a)(t.Y36(u.v))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-order-totals"]],decls:7,vars:3,consts:[[1,"bg-dark","text-light","px-4","py-3","text-uppercase","fw-bold"],[1,"p-4","bg-light"],[1,"fst-italic","mb-4"],["class","list-unstyled mb-4",4,"ngIf"],[1,"list-unstyled","mb-4"],[1,"d-flex","justify-content-between","py-3","border-bottom"],[1,"text-muted"]],template:function(_,i){1&_&&(t.TgZ(0,"div",0),t._uU(1,"Order Summary"),t.qZA(),t.TgZ(2,"div",1)(3,"p",2),t._uU(4," Shipping costs will be calculated based on the choices made during checkout process. "),t.qZA(),t.YNc(5,g,19,9,"ul",3),t.ALo(6,"async"),t.qZA()),2&_&&(t.xp6(5),t.Q6J("ngIf",t.lcZ(6,1,i.basketService.basketTotalSource$)))},dependencies:[l.O5,l.Ov,l.H9]}),d})()}}]);