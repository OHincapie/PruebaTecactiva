"use strict";(self.webpackChunkTecactiva=self.webpackChunkTecactiva||[]).push([[351],{3351:(G,C,l)=>{l.r(C),l.d(C,{LogModule:()=>z});var c=l(9808),r=l(3075),d=l(4035),T=l(5226),f=l.n(T),t=l(5e3),x=l(7465),m=l(9224),_=l(7322),v=l(7531),Z=l(7423);function b(e,i){1&e&&(t.TgZ(0,"div",14),t._uU(1," Debe ser un correo valido. "),t.qZA())}function w(e,i){1&e&&(t.TgZ(0,"div",14),t._uU(1," Contrase\xf1a minimo de 8 caracteres. "),t.qZA())}function A(e,i){1&e&&(t.TgZ(0,"div",6)(1,"div",7)(2,"div",14),t._uU(3,"Las credenciales no coinciden"),t.qZA()()())}let q=(()=>{class e{constructor(n,o,a){this.formBuilder=n,this.router=o,this.globalService=a,this.form=this.formBuilder.group({email:["",[r.kI.required,r.kI.email]],password:["",[r.kI.required,r.kI.minLength(8)]]}),this.loginAlert=!1}ngOnInit(){}login(n){n.preventDefault(),console.log(this.form.value);const o=JSON.stringify(this.form.value),a=localStorage.getItem("Registro");console.log(JSON.parse(a||"{}")),o==a?(this.globalService.login=!0,console.log(this.globalService.login),this.loginAlert=!1,f().fire("Iniciaste sesi\xf3n!","Iniciaste sesi\xf3n con exito!","success"),this.router.navigateByUrl("/")):this.loginAlert=!0}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(r.qu),t.Y36(d.F0),t.Y36(x.U))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-login"]],decls:27,vars:5,consts:[[1,"full-container"],[1,"imagen--log"],["loading","lazy","src","assets/img/analytics.png","alt","Analytics"],[1,"container--form"],[3,"formGroup","ngSubmit"],[1,"card"],[1,"row"],[1,"col-xs"],["placeholder","Email","formControlName","email","matInput","","type","email","required",""],["class","error",4,"ngIf"],["placeholder","password","formControlName","password","matInput","","type","password"],["class","row",4,"ngIf"],["mat-raised-button","","type","submit",3,"disabled"],["routerLink","/user/password"],[1,"error"]],template:function(n,o){if(1&n&&(t.TgZ(0,"div",0)(1,"div",1),t._UZ(2,"img",2),t.qZA(),t.TgZ(3,"div",3)(4,"form",4),t.NdJ("ngSubmit",function(s){return o.login(s)}),t.TgZ(5,"mat-card",5)(6,"mat-card-header")(7,"mat-card-title"),t._uU(8,"Login"),t.qZA()(),t.TgZ(9,"mat-card-content")(10,"div",6)(11,"div",7)(12,"mat-form-field"),t._UZ(13,"input",8),t.qZA(),t.YNc(14,b,2,0,"div",9),t.qZA()(),t.TgZ(15,"div",6)(16,"div",7)(17,"mat-form-field"),t._UZ(18,"input",10),t.qZA(),t.YNc(19,w,2,0,"div",9),t.qZA()(),t.YNc(20,A,4,0,"div",11),t.qZA(),t.TgZ(21,"mat-card-actions")(22,"button",12),t._uU(23,"Entrar"),t.qZA()(),t.TgZ(24,"span")(25,"a",13),t._uU(26,"\xbfNo recuerdas tu contrase\xf1a?"),t.qZA()()()()()()),2&n){let a,s;t.xp6(4),t.Q6J("formGroup",o.form),t.xp6(10),t.Q6J("ngIf",(null==(a=o.form.get("email"))?null:a.errors)&&(null==(a=o.form.get("email"))?null:a.touched)),t.xp6(5),t.Q6J("ngIf",(null==(s=o.form.get("password"))?null:s.errors)&&(null==(s=o.form.get("password"))?null:s.touched)),t.xp6(1),t.Q6J("ngIf",o.loginAlert),t.xp6(2),t.Q6J("disabled",o.form.invalid)}},directives:[r._Y,r.JL,r.sg,m.a8,m.dk,m.n5,m.dn,_.KE,r.Fj,v.Nt,r.JJ,r.u,r.Q7,c.O5,m.hq,Z.lW,d.yS],styles:[".full-container[_ngcontent-%COMP%]{margin-top:40px;display:grid;grid-template-columns:repeat(2,1fr)}.imagen--log[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:auto;height:100%;margin-left:30px;object-fit:cover}.container--form[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;margin-top:50px}.card[_ngcontent-%COMP%]{margin:0 auto;padding:30px 100px 100px}.mat-card-header[_ngcontent-%COMP%]   .mat-card-title[_ngcontent-%COMP%]{font-size:25px;text-align:center}.mat-card-header[_ngcontent-%COMP%]{display:block;margin-bottom:10px}mat-form-field[_ngcontent-%COMP%]{width:300px}.error[_ngcontent-%COMP%]{background-color:#ff6961}@media (max-width: 768px){.full-container[_ngcontent-%COMP%]{margin-top:40px;display:block}.imagen--log[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:100%;height:auto;object-fit:cover;margin-left:0}.container--form[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;margin-top:50px}.card[_ngcontent-%COMP%]{margin:0 auto;padding:30px 100px 100px}.mat-card-header[_ngcontent-%COMP%]   .mat-card-title[_ngcontent-%COMP%]{font-size:25px;text-align:center}.mat-card-header[_ngcontent-%COMP%]{display:block;margin-bottom:10px}mat-form-field[_ngcontent-%COMP%]{width:300px}.error[_ngcontent-%COMP%]{background-color:#ff6961}}"]}),e})();var h=l(2081);function P(e,i){1&e&&(t.TgZ(0,"div",22),t._uU(1," Debe ser un correo valido. "),t.qZA())}function I(e,i){1&e&&(t.TgZ(0,"div",22),t._uU(1," Contrase\xf1a minimo de 8 caracteres. "),t.qZA())}function O(e,i){1&e&&(t.TgZ(0,"div",22),t._uU(1," Debes ingresar tu nombre. "),t.qZA())}function J(e,i){1&e&&(t.TgZ(0,"div",22),t._uU(1," Debes ingresar tu apellido. "),t.qZA())}function y(e,i){1&e&&(t.TgZ(0,"div",22),t._uU(1," Debes ingresar tu edad. "),t.qZA())}function M(e,i){1&e&&(t.TgZ(0,"div",8),t._uU(1," Debe ser un correo valido. "),t.qZA())}function N(e,i){1&e&&(t.TgZ(0,"div",4)(1,"div",5)(2,"div",8),t._uU(3,"El correo no es el registrado."),t.qZA()()())}function k(e,i){if(1&e&&(t.TgZ(0,"div",4)(1,"div",5)(2,"mat-form-field"),t._UZ(3,"input",6),t.qZA(),t.YNc(4,M,2,0,"div",7),t.YNc(5,N,4,0,"div",2),t.qZA()()),2&e){const n=t.oxw();let o,a;t.xp6(4),t.Q6J("ngIf",(null==(o=n.form.get("email"))?null:o.errors)&&(null==(o=n.form.get("email"))?null:o.touched)),t.xp6(1),t.Q6J("ngIf",(null==(a=n.form.get("email"))?null:a.touched)&&!n.correoOk)}}function Q(e,i){if(1&e){const n=t.EpF();t.TgZ(0,"mat-card-actions")(1,"button",9),t.NdJ("click",function(){return t.CHM(n),t.oxw().validar()}),t._uU(2,"Validar"),t.qZA()()}if(2&e){const n=t.oxw();let o;t.xp6(1),t.Q6J("disabled",null==(o=n.form.get("email"))?null:o.errors)}}function S(e,i){1&e&&(t.TgZ(0,"div",8),t._uU(1," Contrase\xf1a minimo de 8 caracteres. "),t.qZA())}function Y(e,i){1&e&&(t.TgZ(0,"div",8),t._uU(1," Confirma tu clave. "),t.qZA())}function L(e,i){1&e&&(t.TgZ(0,"div",8),t._uU(1," Las claves no coinciden. "),t.qZA())}function R(e,i){if(1&e&&(t.TgZ(0,"mat-card-content")(1,"div",4)(2,"mat-form-field"),t._UZ(3,"input",10),t.qZA(),t.YNc(4,S,2,0,"div",7),t.qZA(),t.TgZ(5,"div",4)(6,"mat-form-field"),t._UZ(7,"input",11),t.qZA(),t.YNc(8,Y,2,0,"div",7),t.YNc(9,L,2,0,"div",7),t.qZA()()),2&e){const n=t.oxw();let o,a,s;t.xp6(4),t.Q6J("ngIf",(null==(o=n.form.get("password"))?null:o.errors)&&(null==(o=n.form.get("password"))?null:o.touched)),t.xp6(4),t.Q6J("ngIf",(null==(a=n.form.get("confirmPwd"))?null:a.errors)&&(null==(a=n.form.get("confirmPwd"))?null:a.touched)),t.xp6(1),t.Q6J("ngIf",(null==(s=n.form.get("confirmPwd"))?null:s.touched)&&n.alertValidadorPwd)}}function F(e,i){if(1&e&&(t.TgZ(0,"mat-card-actions")(1,"button",12),t._uU(2,"Cambiar"),t.qZA()()),2&e){const n=t.oxw();let o;t.xp6(1),t.Q6J("disabled",null==(o=n.form.get("password"))?null:o.errors)}}const D=[{path:"",children:[{path:"login",component:q},{path:"register",component:(()=>{class e{constructor(n,o){this.formBuilder=n,this.router=o,this.isLinear=!1,this.isOptional=!1,this.form=this.formBuilder.group({email:["",[r.kI.required,r.kI.email]],password:["",[r.kI.required,r.kI.minLength(8)]]}),this.formDatos=n.group({nombre:["",[r.kI.required]],apellido:["",[r.kI.required]],edad:["",[r.kI.required]]})}ngOnInit(){}confirmar(){console.log(this.form.value),console.log(this.formDatos.value),localStorage.setItem("Registro",JSON.stringify(this.form.value)),localStorage.setItem("Datos",JSON.stringify(this.formDatos.value)),f().fire("Registrado!","Te has registrado con exito!","success"),this.router.navigateByUrl("/user/login")}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(r.qu),t.Y36(d.F0))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-register"]],decls:77,vars:16,consts:[["linear","",1,"all"],["stepper",""],["label","Ingresa usuario y clave",3,"stepControl"],[1,"container--form"],[3,"formGroup"],[1,"card"],[1,"row"],[1,"col-xs"],["placeholder","Email","formControlName","email","matInput","","type","email","required",""],["class","error",4,"ngIf"],["placeholder","password","formControlName","password","matInput","","type","password"],["mat-raised-button","","matStepperNext","",3,"disabled"],["label","Datos personales",3,"stepControl","optional"],["placeholder","Nombre","formControlName","nombre","matInput","","type","text","required",""],["placeholder","Apellido","formControlName","apellido","matInput","","type","text"],["placeholder","Edad","formControlName","edad","matInput","","type","number"],["label","Confirmar"],[2,"margin-top","5px"],[1,"resumen"],[1,"campo"],[1,"subtitulo"],["mat-raised-button","","matStepperNext","",1,"boton",3,"click"],[1,"error"]],template:function(n,o){if(1&n&&(t.TgZ(0,"mat-stepper",0,1)(2,"mat-step",2)(3,"div",3)(4,"form",4)(5,"mat-card",5)(6,"mat-card-header")(7,"mat-card-title"),t._uU(8,"Registro"),t.qZA()(),t.TgZ(9,"mat-card-content")(10,"div",6)(11,"div",7)(12,"mat-form-field"),t._UZ(13,"input",8),t.qZA(),t.YNc(14,P,2,0,"div",9),t.qZA()(),t.TgZ(15,"div",6)(16,"div",7)(17,"mat-form-field"),t._UZ(18,"input",10),t.qZA(),t.YNc(19,I,2,0,"div",9),t.qZA()()(),t.TgZ(20,"mat-card-actions")(21,"button",11),t._uU(22,"Registro"),t.qZA()()()()()(),t.TgZ(23,"mat-step",12)(24,"div",3)(25,"form",4)(26,"mat-card",5)(27,"mat-card-header")(28,"mat-card-title"),t._uU(29,"Tus datos."),t.qZA()(),t.TgZ(30,"mat-card-content")(31,"div",6)(32,"div",7)(33,"mat-form-field"),t._UZ(34,"input",13),t.qZA(),t.YNc(35,O,2,0,"div",9),t.qZA()(),t.TgZ(36,"div",6)(37,"div",7)(38,"mat-form-field"),t._UZ(39,"input",14),t.qZA(),t.YNc(40,J,2,0,"div",9),t.qZA()(),t.TgZ(41,"div",6)(42,"div",7)(43,"mat-form-field"),t._UZ(44,"input",15),t.qZA(),t.YNc(45,y,2,0,"div",9),t.qZA()()(),t.TgZ(46,"mat-card-actions")(47,"button",11),t._uU(48,"Siguiente"),t.qZA()()()()()(),t.TgZ(49,"mat-step",16)(50,"div",3)(51,"mat-card",5)(52,"mat-card-header")(53,"mat-card-title"),t._uU(54,"Tu registro."),t.qZA()(),t.TgZ(55,"mat-card-content",17)(56,"div",18)(57,"div",19)(58,"p")(59,"strong",20),t._uU(60,"Nombre: "),t.qZA(),t._uU(61),t.qZA()(),t.TgZ(62,"div",19)(63,"p")(64,"strong",20),t._uU(65,"Edad: "),t.qZA(),t._uU(66),t.qZA()(),t.TgZ(67,"div",19)(68,"p")(69,"strong",20),t._uU(70,"Email: "),t.qZA(),t._uU(71),t.qZA()()(),t.TgZ(72,"div",6),t._UZ(73,"div",7),t.qZA()(),t.TgZ(74,"mat-card-actions")(75,"button",21),t.NdJ("click",function(){return o.confirmar()}),t._uU(76,"Confirmar e iniciar sesi\xf3n"),t.qZA()()()()()()),2&n){let a,s,u,p,g;t.xp6(2),t.Q6J("stepControl",o.form),t.xp6(2),t.Q6J("formGroup",o.form),t.xp6(10),t.Q6J("ngIf",(null==(a=o.form.get("email"))?null:a.errors)&&(null==(a=o.form.get("email"))?null:a.touched)),t.xp6(5),t.Q6J("ngIf",(null==(s=o.form.get("password"))?null:s.errors)&&(null==(s=o.form.get("password"))?null:s.touched)),t.xp6(2),t.Q6J("disabled",o.form.invalid),t.xp6(2),t.Q6J("stepControl",o.formDatos)("optional",o.isOptional),t.xp6(2),t.Q6J("formGroup",o.formDatos),t.xp6(10),t.Q6J("ngIf",(null==(u=o.form.get("nombre"))?null:u.errors)&&(null==(u=o.form.get("nombre"))?null:u.touched)),t.xp6(5),t.Q6J("ngIf",(null==(p=o.form.get("apellido"))?null:p.errors)&&(null==(p=o.form.get("apellido"))?null:p.touched)),t.xp6(5),t.Q6J("ngIf",(null==(g=o.form.get("apellido"))?null:g.errors)&&(null==(g=o.form.get("apellido"))?null:g.touched)),t.xp6(2),t.Q6J("disabled",o.formDatos.invalid),t.xp6(14),t.AsE("",o.formDatos.value.nombre," ",o.formDatos.value.apellido,""),t.xp6(5),t.Oqu(o.formDatos.value.edad),t.xp6(5),t.Oqu(o.form.value.email)}},directives:[h.Vq,h.C0,r._Y,r.JL,r.sg,m.a8,m.dk,m.n5,m.dn,_.KE,r.Fj,v.Nt,r.JJ,r.u,r.Q7,c.O5,m.hq,Z.lW,h.Ic,r.wV],styles:[".container--form[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;margin-top:50px}.card[_ngcontent-%COMP%]{padding:30px 100px 100px}.mat-card-header[_ngcontent-%COMP%]   .mat-card-title[_ngcontent-%COMP%]{font-size:25px;text-align:center}.mat-card-header[_ngcontent-%COMP%]{display:block;margin-bottom:10px}mat-form-field[_ngcontent-%COMP%]{width:300px}.resumen[_ngcontent-%COMP%]{font-size:18px;padding-top:20px}.subtitulo[_ngcontent-%COMP%]{font-size:22px;color:#4a24af;font-weight:700}.campo[_ngcontent-%COMP%]{padding:10px 0}.error[_ngcontent-%COMP%]{background-color:#ff6961}button[_ngcontent-%COMP%]{background-color:#4a24af;color:#fff}"]}),e})()},{path:"password",component:(()=>{class e{constructor(n,o,a){this.formBuilder=n,this.router=o,this.globalService=a,this.alertValidadorPwd=!1,this.correoOk=!1,this.form=this.formBuilder.group({email:["",[r.kI.required,r.kI.email]],password:["",[r.kI.required,r.kI.minLength(8)]],confirmPwd:["",r.kI.required]})}ngOnInit(){}validar(){const n=localStorage.getItem("Registro"),o=JSON.parse(n||"{}");console.log(o),this.form.value.email==o.email&&(this.correoOk=!0)}cambiar(n){if(n.preventDefault(),this.form.value.password!==this.form.value.confirmPwd)this.alertValidadorPwd=!0;else{this.alertValidadorPwd=!1,f().fire("Cambiaste tu clave!","Ahora inicia sesi\xf3n!","success");const a=JSON.stringify({email:this.form.value.email,password:this.form.value.password});localStorage.setItem("Registro",a),console.log(localStorage.getItem("Registro")),this.router.navigateByUrl("/user/login")}}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(r.qu),t.Y36(d.F0),t.Y36(x.U))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-password"]],decls:10,vars:5,consts:[[3,"formGroup","ngSubmit"],[1,"card"],["class","row",4,"ngIf"],[4,"ngIf"],[1,"row"],[1,"col-xs"],["placeholder","Email","formControlName","email","matInput","","type","email","required",""],["class","error",4,"ngIf"],[1,"error"],["mat-raised-button","",3,"disabled","click"],["placeholder","Password","formControlName","password","matInput","","type","password"],["placeholder","Confirm password","formControlName","confirmPwd","matInput","","type","password"],["mat-raised-button","","type","submit",3,"disabled"]],template:function(n,o){1&n&&(t.TgZ(0,"form",0),t.NdJ("ngSubmit",function(s){return o.cambiar(s)}),t.TgZ(1,"mat-card",1)(2,"mat-card-header")(3,"mat-card-title"),t._uU(4,"Cambio de contrase\xf1a"),t.qZA()(),t.TgZ(5,"mat-card-content"),t.YNc(6,k,6,2,"div",2),t.qZA(),t.YNc(7,Q,3,1,"mat-card-actions",3),t.YNc(8,R,10,3,"mat-card-content",3),t.YNc(9,F,3,1,"mat-card-actions",3),t.qZA()()),2&n&&(t.Q6J("formGroup",o.form),t.xp6(6),t.Q6J("ngIf",!o.correoOk),t.xp6(1),t.Q6J("ngIf",!o.correoOk),t.xp6(1),t.Q6J("ngIf",o.correoOk),t.xp6(1),t.Q6J("ngIf",o.correoOk))},directives:[r._Y,r.JL,r.sg,m.a8,m.dk,m.n5,m.dn,c.O5,_.KE,r.Fj,v.Nt,r.JJ,r.u,r.Q7,m.hq,Z.lW],styles:[".card[_ngcontent-%COMP%]{text-align:center}.mat-card-header[_ngcontent-%COMP%]   .mat-card-title[_ngcontent-%COMP%]{font-size:25px;text-align:center}.mat-card-header[_ngcontent-%COMP%]{display:block;margin-bottom:10px}mat-form-field[_ngcontent-%COMP%]{width:300px}.error[_ngcontent-%COMP%]{background-color:#ff6961}"]}),e})()}]}];let B=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[d.Bz.forChild(D)],d.Bz]}),e})();var E=l(8170),j=l(520);let z=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[c.ez,B,r.u5,r.UX,E.q,j.JF]]}),e})()}}]);