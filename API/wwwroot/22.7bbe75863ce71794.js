"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[22],{2022:(T,p,i)=>{i.r(p),i.d(p,{AccountModule:()=>A});var u=i(6814),a=i(2999),o=i(95),t=i(4769),c=i(6448),d=i(9947);let g=(()=>{var e;class s{constructor(r,n,m){this.accountService=r,this.router=n,this.activatedRoute=m,this.regComplexPassword="(?=^.{6,10}$)(?=.*d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&amp;*()_+}{&quot;:;'?/&gt;.&lt;,])(?!.*s).*$",this.loginForm=new o.cw({email:new o.NI("",[o.kI.required,o.kI.email]),password:new o.NI("",[o.kI.required,o.kI.pattern(this.regComplexPassword)])}),this.returnUrl=this.activatedRoute.snapshot.queryParams.returnUrl||"/shop"}onSubmit(){console.log(this.loginForm.value),this.accountService.login(this.loginForm.value).subscribe({next:()=>this.router.navigateByUrl(this.returnUrl)})}}return(e=s).\u0275fac=function(r){return new(r||e)(t.Y36(c.B),t.Y36(a.F0),t.Y36(a.gz))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-login"]],decls:11,vars:7,consts:[[1,"d-flex","justify-content-center","mt-5"],[1,"col-3"],[3,"formGroup","ngSubmit"],[1,"text-center","mb-4"],[1,"mb-3"],[3,"formControl","label"],[3,"formControl","label","type"],[1,"d-grid"],["type","submit",1,"btn","btn-lg","btn-primary","mt-3",3,"disabled"]],template:function(r,n){1&r&&(t.TgZ(0,"div",0)(1,"div",1)(2,"form",2),t.NdJ("ngSubmit",function(){return n.onSubmit()}),t.TgZ(3,"div",3)(4,"h1",4),t._uU(5,"Sign In"),t.qZA()(),t._UZ(6,"app-text-input",5)(7,"app-text-input",6),t.TgZ(8,"div",7)(9,"button",8),t._uU(10,"Sign In"),t.qZA()()()()()),2&r&&(t.xp6(2),t.Q6J("formGroup",n.loginForm),t.xp6(4),t.Q6J("formControl",n.loginForm.controls.email)("label","Email Address"),t.xp6(1),t.Q6J("formControl",n.loginForm.controls.password)("label","Password")("type","password"),t.xp6(2),t.Q6J("disabled",n.loginForm.invalid))},dependencies:[o._Y,o.JJ,o.JL,o.oH,o.sg,d.t]}),s})();var f=i(3620),v=i(8180),h=i(4664),b=i(7398),C=i(4716);function y(e,s){if(1&e&&(t.TgZ(0,"li"),t._uU(1),t.qZA()),2&e){const l=s.$implicit;t.xp6(1),t.hij(" ",l," ")}}function x(e,s){if(1&e&&(t.TgZ(0,"ul",10),t.YNc(1,y,2,1,"li",11),t.qZA()),2&e){const l=t.oxw();t.xp6(1),t.Q6J("ngForOf",l.errors)}}const F=[{path:"login",component:g},{path:"register",component:(()=>{var e;class s{constructor(r,n,m){this.fb=r,this.accountService=n,this.router=m,this.errors=null,this.complexPassword="(?=^.{6,10}$)(?=.*d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&amp;*()_+}{&quot;:;'?/&gt;.&lt;,])(?!.*s).*$",this.registerForm=this.fb.group({displayName:["",o.kI.required],email:["",[o.kI.required,o.kI.email],[this.validateEmailNotTaken()]],password:["",[o.kI.required,o.kI.pattern(this.complexPassword)]]})}onSubmit(){this.accountService.register(this.registerForm.value).subscribe({next:()=>this.router.navigateByUrl("/shop"),error:r=>this.errors=r.errors})}validateEmailNotTaken(){return r=>r.valueChanges.pipe((0,f.b)(1e3),(0,v.q)(1),(0,h.w)(()=>this.accountService.checkEmailExists(r.value).pipe((0,b.U)(n=>n?{emailExists:!0}:null),(0,C.x)(()=>r.markAsTouched()))))}}return(e=s).\u0275fac=function(r){return new(r||e)(t.Y36(o.qu),t.Y36(c.B),t.Y36(a.F0))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-register"]],decls:13,vars:10,consts:[[1,"d-flex","justify-content-center","mt-5"],[1,"col-3"],[3,"formGroup","ngSubmit"],[1,"text-center","mb-4"],[1,"mb-3"],[3,"formControl","label"],[3,"formControl","label","type"],["class","text-danger list-unstyled",4,"ngIf"],[1,"d-grid"],["type","submit",1,"btn","btn-lg","btn-primary","mt-3",3,"disabled"],[1,"text-danger","list-unstyled"],[4,"ngFor","ngForOf"]],template:function(r,n){1&r&&(t.TgZ(0,"div",0)(1,"div",1)(2,"form",2),t.NdJ("ngSubmit",function(){return n.onSubmit()}),t.TgZ(3,"div",3)(4,"h1",4),t._uU(5,"Sign Up"),t.qZA()(),t._UZ(6,"app-text-input",5)(7,"app-text-input",5)(8,"app-text-input",6),t.YNc(9,x,2,1,"ul",7),t.TgZ(10,"div",8)(11,"button",9),t._uU(12,"Sign up"),t.qZA()()()()()),2&r&&(t.xp6(2),t.Q6J("formGroup",n.registerForm),t.xp6(4),t.Q6J("formControl",n.registerForm.controls.displayName)("label","Display Name"),t.xp6(1),t.Q6J("formControl",n.registerForm.controls.email)("label","Email Address"),t.xp6(1),t.Q6J("formControl",n.registerForm.controls.password)("label","Password")("type","password"),t.xp6(1),t.Q6J("ngIf",n.errors),t.xp6(2),t.Q6J("disabled",n.registerForm.invalid))},dependencies:[u.sg,u.O5,o._Y,o.JJ,o.JL,o.oH,o.sg,d.t]}),s})()}];let J=(()=>{var e;class s{}return(e=s).\u0275fac=function(r){return new(r||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[a.Bz.forChild(F),a.Bz]}),s})();var S=i(6208);let A=(()=>{var e;class s{}return(e=s).\u0275fac=function(r){return new(r||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[u.ez,J,S.m]}),s})()}}]);