"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[434],{6434:(K,g,r)=>{r.r(g),r.d(g,{ShopModule:()=>D});var p=r(6814),C=r(6208);class _{constructor(){this.brandId=0,this.typeId=0,this.sort="name",this.pageNumber=1,this.pageSize=6,this.search=""}}var t=r(4769),f=r(9862),u=r(2096),l=r(7398),P=r(553);let v=(()=>{var o;class a{constructor(e){this.http=e,this.baseUrl=P.N.apiUrl,this.products=[],this.brands=[],this.types=[],this.shopParams=new _,this.productCache=new Map}getProducts(e=!0){if(e||(this.productCache=new Map),this.productCache.size>0&&e&&this.productCache.has(Object.values(this.shopParams).join("-"))&&(this.pagination=this.productCache.get(Object.values(this.shopParams).join("-")),this.pagination))return(0,u.of)(this.pagination);let s=new f.LE;return this.shopParams.brandId>0&&(s=s.append("brandId",this.shopParams.brandId)),this.shopParams.typeId&&(s=s.append("typeId",this.shopParams.typeId)),s=s.append("sort",this.shopParams.sort),s=s.append("pageIndex",this.shopParams.pageNumber),s=s.append("pageSize",this.shopParams.pageSize),this.shopParams.search&&(s=s.append("search",this.shopParams.search)),this.http.get(this.baseUrl+"products",{params:s}).pipe((0,l.U)(i=>(this.productCache.set(Object.values(this.shopParams).join("-"),i),this.pagination=i,i)))}setShopParams(e){this.shopParams=e}getShopParams(){return this.shopParams}getProduct(e){const s=[...this.productCache.values()].reduce((i,c)=>({...i,...c.data.find(m=>m.id===e)}),{});return 0!==Object.keys(s).length?(0,u.of)(s):this.http.get(this.baseUrl+"products/"+e)}getBrands(){return this.brands.length>0?(0,u.of)(this.brands):this.http.get(this.baseUrl+"products/brands").pipe((0,l.U)(e=>this.brands=e))}getTypes(){return this.types.length>0?(0,u.of)(this.types):this.http.get(this.baseUrl+"products/types").pipe((0,l.U)(e=>this.types=e))}}return(o=a).\u0275fac=function(e){return new(e||o)(t.LFG(f.eN))},o.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),a})();function b(o,a){if(1&o&&(t.TgZ(0,"span"),t._uU(1," Showing "),t.TgZ(2,"strong"),t._uU(3),t.qZA(),t._uU(4," of "),t.TgZ(5,"strong"),t._uU(6),t.qZA(),t._uU(7," results "),t.qZA()),2&o){const n=t.oxw(2);t.xp6(3),t.AsE(" ",(n.pageNumber-1)*n.pageSize+1," - ",n.pageNumber*n.pageSize>n.totalCount?n.totalCount:n.pageNumber*n.pageSize," "),t.xp6(3),t.hij(" ",n.totalCount," ")}}function S(o,a){if(1&o&&(t.TgZ(0,"header"),t.YNc(1,b,8,3,"span",0),t.qZA()),2&o){const n=t.oxw();t.xp6(1),t.Q6J("ngIf",n.totalCount)}}function y(o,a){1&o&&(t.TgZ(0,"span"),t._uU(1," There are "),t.TgZ(2,"strong"),t._uU(3,"0"),t.qZA(),t._uU(4," results for this filter/search\n"),t.qZA())}let T=(()=>{var o;class a{}return(o=a).\u0275fac=function(e){return new(e||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-paging-header"]],inputs:{pageNumber:"pageNumber",pageSize:"pageSize",totalCount:"totalCount"},decls:2,vars:2,consts:[[4,"ngIf"]],template:function(e,s){1&e&&(t.YNc(0,S,2,1,"header",0),t.YNc(1,y,5,0,"span",0)),2&e&&(t.Q6J("ngIf",s.totalCount&&s.pageNumber&&s.pageSize),t.xp6(1),t.Q6J("ngIf",!s.totalCount))},dependencies:[p.O5]}),a})();var Z=r(7012),h=r(95);function k(o,a){if(1&o){const n=t.EpF();t.TgZ(0,"pagination",1),t.NdJ("pageChanged",function(s){t.CHM(n);const i=t.oxw();return t.KtG(i.onPagerChanged(s))}),t.qZA()}if(2&o){const n=t.oxw();t.Q6J("boundaryLinks",!0)("totalItems",n.totalCount)("itemsPerPage",n.pageSize)("maxSize",10)("ngModel",n.pageNumber)}}let I=(()=>{var o;class a{constructor(){this.pageChanged=new t.vpe}onPagerChanged(e){this.pageChanged.emit(e.page)}}return(o=a).\u0275fac=function(e){return new(e||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-pager"]],inputs:{totalCount:"totalCount",pageSize:"pageSize",pageNumber:"pageNumber"},outputs:{pageChanged:"pageChanged"},decls:1,vars:1,consts:[["previousText","\u2039","nextText","\u203a","firstText","\xab","lastText","\xbb",3,"boundaryLinks","totalItems","itemsPerPage","maxSize","ngModel","pageChanged",4,"ngIf"],["previousText","\u2039","nextText","\u203a","firstText","\xab","lastText","\xbb",3,"boundaryLinks","totalItems","itemsPerPage","maxSize","ngModel","pageChanged"]],template:function(e,s){1&e&&t.YNc(0,k,1,5,"pagination",0),2&e&&t.Q6J("ngIf",s.totalCount&&s.pageSize)},dependencies:[p.O5,Z.Qt,h.JJ,h.On]}),a})();var x=r(2704),d=r(2999);function A(o,a){if(1&o){const n=t.EpF();t.TgZ(0,"div",1)(1,"div",2),t._UZ(2,"img",3),t.TgZ(3,"div",4)(4,"button",5),t.NdJ("click",function(){t.CHM(n);const s=t.oxw();return t.KtG(s.AddItemToBasket())}),t.qZA(),t.TgZ(5,"button",6),t._uU(6,"View"),t.qZA()()(),t.TgZ(7,"div",7)(8,"a",8)(9,"h6",9),t._uU(10),t.qZA()(),t.TgZ(11,"span",10),t._uU(12),t.ALo(13,"currency"),t.qZA()()()}if(2&o){const n=t.oxw();t.xp6(2),t.s9C("src",n.product.pictureUrl,t.LSH),t.s9C("alt",n.product.name),t.xp6(3),t.MGl("routerLink","/shop/",n.product.id,""),t.xp6(5),t.hij(" ",n.product.name," "),t.xp6(2),t.hij(" ",t.lcZ(13,5,n.product.price)," ")}}let q=(()=>{var o;class a{constructor(e){this.basketService=e}AddItemToBasket(){this.product&&this.basketService.addItemToBasket(this.product)}}return(o=a).\u0275fac=function(e){return new(e||o)(t.Y36(x.v))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-product-item"]],inputs:{product:"product"},decls:1,vars:1,consts:[["class","card h-100 shadow-sm",4,"ngIf"],[1,"card","h-100","shadow-sm"],[1,"image","postion-relative",2,"cursor","pointer"],[1,"img-fluid","bg-info",3,"src","alt"],[1,"d-flex","align-items-center","justify-content-center","hover-overlay"],[1,"btn","btn-primary","fa","fa-shopping-cart","me-2",3,"click"],[1,"btn","btn-primary",3,"routerLink"],[1,"card-body","d-flex","flex-column"],["href","",1,"text-decoration-none"],[1,"text-uppercase"],[1,"mb-2"]],template:function(e,s){1&e&&t.YNc(0,A,14,7,"div",0),2&e&&t.Q6J("ngIf",s.product)},dependencies:[p.O5,d.rH,p.H9],styles:[".btn[_ngcontent-%COMP%]{width:30%;height:40px}.image[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover{opacity:1}.image[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover   button[_ngcontent-%COMP%]{transform:none;opacity:1}.hover-overlay[_ngcontent-%COMP%]{position:absolute;width:100%;height:100%;top:0;left:0;background:rgba(255,255,255,.5);opacity:0;transition:all .5s}.hover-overlay[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{z-index:1000;transition:all .5s}.hover-overlay[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:first-of-type{transform:translate(-20px)}.hover-overlay[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:last-of-type{transform:translate(20px)}"]}),a})();const N=["search"];function w(o,a){if(1&o&&(t.TgZ(0,"option",20),t._uU(1),t.qZA()),2&o){const n=a.$implicit,e=t.oxw(2);t.Q6J("selected",e.shopParams.sort===n.value)("value",n.value),t.xp6(1),t.hij(" ",n.name," ")}}function M(o,a){if(1&o){const n=t.EpF();t.TgZ(0,"li",21),t.NdJ("click",function(){const i=t.CHM(n).$implicit,c=t.oxw(2);return t.KtG(c.onBrandSelected(i.id))}),t._uU(1),t.qZA()}if(2&o){const n=a.$implicit,e=t.oxw(2);t.ekj("active",n.id===e.shopParams.brandId),t.Q6J("value",n.id),t.xp6(1),t.Oqu(n.name)}}function O(o,a){if(1&o){const n=t.EpF();t.TgZ(0,"li",21),t.NdJ("click",function(){const i=t.CHM(n).$implicit,c=t.oxw(2);return t.KtG(c.onTypeSelected(i.id))}),t._uU(1),t.qZA()}if(2&o){const n=a.$implicit,e=t.oxw(2);t.ekj("active",n.id===e.shopParams.typeId),t.Q6J("value",n.id),t.xp6(1),t.Oqu(n.name)}}function U(o,a){if(1&o&&(t.TgZ(0,"div",22),t._UZ(1,"app-product-item",23),t.qZA()),2&o){const n=a.$implicit;t.xp6(1),t.Q6J("product",n)}}function B(o,a){if(1&o){const n=t.EpF();t.TgZ(0,"div",24)(1,"app-pager",25),t.NdJ("pageChanged",function(s){t.CHM(n);const i=t.oxw(2);return t.KtG(i.onPageChanged(s))}),t.qZA()()}if(2&o){const n=t.oxw(2);t.xp6(1),t.Q6J("totalCount",n.totalCount)("pageSize",n.shopParams.pageSize)("pageNumber",n.shopParams.pageNumber)}}function J(o,a){if(1&o){const n=t.EpF();t.TgZ(0,"div",2)(1,"section",3)(2,"h5",4),t._uU(3,"Sort"),t.qZA(),t.TgZ(4,"select",5),t.NdJ("change",function(s){t.CHM(n);const i=t.oxw();return t.KtG(i.onSortSelected(s))}),t.YNc(5,w,2,3,"option",6),t.qZA(),t.TgZ(6,"h5",4),t._uU(7,"Brands"),t.qZA(),t.TgZ(8,"ul",7),t.YNc(9,M,2,4,"li",8),t.qZA(),t.TgZ(10,"h5",4),t._uU(11,"Types"),t.qZA(),t.TgZ(12,"ul",7),t.YNc(13,O,2,4,"li",8),t.qZA()(),t.TgZ(14,"section",9)(15,"div",10),t._UZ(16,"app-paging-header",11),t.TgZ(17,"div",12)(18,"input",13,14),t.NdJ("keyup.enter",function(){t.CHM(n);const s=t.oxw();return t.KtG(s.onSearch())}),t.qZA(),t.TgZ(20,"button",15),t.NdJ("click",function(){t.CHM(n);const s=t.oxw();return t.KtG(s.onSearch())}),t._uU(21,"Search"),t.qZA(),t.TgZ(22,"button",16),t.NdJ("click",function(){t.CHM(n);const s=t.oxw();return t.KtG(s.onReset())}),t._uU(23,"Reset"),t.qZA()()(),t.TgZ(24,"div",17),t.YNc(25,U,2,1,"div",18),t.qZA(),t.YNc(26,B,2,3,"div",19),t.qZA()()}if(2&o){const n=t.oxw();t.xp6(5),t.Q6J("ngForOf",n.sortOptions),t.xp6(4),t.Q6J("ngForOf",n.brands),t.xp6(4),t.Q6J("ngForOf",n.types),t.xp6(3),t.Q6J("totalCount",n.totalCount)("pageNumber",n.shopParams.pageNumber)("pageSize",n.shopParams.pageSize),t.xp6(9),t.Q6J("ngForOf",n.products),t.xp6(1),t.Q6J("ngIf",n.totalCount>0)}}let z=(()=>{var o;class a{constructor(e){this.shopService=e,this.products=[],this.brands=[],this.types=[],this.sortOptions=[{name:"Alphabetical",value:"name"},{name:"Price: Low to high",value:"priceAsc"},{name:"Price: High to low",value:"priceDesc"}],this.totalCount=0,this.shopParams=e.getShopParams()}ngOnInit(){this.getProducts(),this.getBrands(),this.getTypes()}getProducts(){this.shopService.getProducts().subscribe({next:e=>{this.products=e.data,this.totalCount=e.count},error:e=>console.log(e)})}getBrands(){this.shopService.getBrands().subscribe({next:e=>this.brands=[{id:0,name:"All"},...e],error:e=>console.log(e)})}getTypes(){this.shopService.getTypes().subscribe({next:e=>this.types=[{id:0,name:"All"},...e],error:e=>console.log(e)})}onBrandSelected(e){const s=this.shopService.getShopParams();s.brandId=e,s.pageNumber=1,this.shopService.setShopParams(s),this.shopParams=s,this.getProducts()}onTypeSelected(e){const s=this.shopService.getShopParams();s.typeId=e,s.pageNumber=1,this.shopService.setShopParams(s),this.shopParams=s,this.getProducts()}onSortSelected(e){const s=this.shopService.getShopParams();s.sort=e.target.value,this.shopService.setShopParams(s),this.shopParams=s,this.getProducts()}onPageChanged(e){const s=this.shopService.getShopParams();s.pageNumber!==e&&(s.pageNumber=e,this.shopService.setShopParams(s),this.shopParams=s,this.getProducts())}onSearch(){const e=this.shopService.getShopParams();e.search=this.searchTerm?.nativeElement.value,e.pageNumber=1,this.shopService.setShopParams(e),this.shopParams=e,this.getProducts()}onReset(){this.searchTerm&&(this.searchTerm.nativeElement.value=""),this.shopParams=new _,this.shopService.setShopParams(this.shopParams),this.getProducts()}}return(o=a).\u0275fac=function(e){return new(e||o)(t.Y36(v))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-shop"]],viewQuery:function(e,s){if(1&e&&t.Gf(N,5),2&e){let i;t.iGM(i=t.CRH())&&(s.searchTerm=i.first)}},decls:2,vars:1,consts:[[1,"container"],["class","row",4,"ngIf"],[1,"row"],[1,"col-3"],[1,"text-warning","ms-3"],[1,"form-select","mb-4",3,"change"],[3,"selected","value",4,"ngFor","ngForOf"],[1,"list-group","my-3"],["class","list-group-item",3,"active","value","click",4,"ngFor","ngForOf"],[1,"col-9"],[1,"d-flex","justify-content-between","align-items-center","pb-2"],[3,"totalCount","pageNumber","pageSize"],[1,"d-flex","mt-2"],["type","text","placeholder","Search",1,"form-control","me-2",3,"keyup.enter"],["search",""],[1,"btn","btn-outline-primary","mx-2",3,"click"],[1,"btn","btn-outline-success",3,"click"],[1,"row","row-cols-3","g-3","mb-4"],["class","col",4,"ngFor","ngForOf"],["class","d-flex justify-content-center",4,"ngIf"],[3,"selected","value"],[1,"list-group-item",3,"value","click"],[1,"col"],[3,"product"],[1,"d-flex","justify-content-center"],[3,"totalCount","pageSize","pageNumber","pageChanged"]],template:function(e,s){1&e&&(t.TgZ(0,"div",0),t.YNc(1,J,27,8,"div",1),t.qZA()),2&e&&(t.xp6(1),t.Q6J("ngIf",s.types.length>0&&s.brands.length>0))},dependencies:[p.sg,p.O5,T,I,h.YN,h.Kr,q],styles:[".list-group-item[_ngcontent-%COMP%]{cursor:pointer;border:none;padding:10px 20px;font-size:1.1em}.list-group-item.active[_ngcontent-%COMP%]{border-radius:10px}.list-group-item[_ngcontent-%COMP%]:not(.active):hover{color:#fff;background-color:#b1f4bcb3;border-radius:10px}"]}),a})();var Q=r(8180),F=r(8066);function H(o,a){if(1&o&&(t.TgZ(0,"h5",14),t._uU(1),t.qZA()),2&o){const n=t.oxw(2);t.xp6(1),t.hij(" You have ",n.quantityInBasket," of this item in your basket ")}}function j(o,a){if(1&o){const n=t.EpF();t.TgZ(0,"div",2)(1,"div",3),t._UZ(2,"img",4),t.qZA(),t.TgZ(3,"div",5)(4,"h2"),t._uU(5),t.qZA(),t.TgZ(6,"p",6),t._uU(7),t.ALo(8,"currency"),t.qZA(),t.YNc(9,H,2,1,"h5",7),t.TgZ(10,"div",8)(11,"i",9),t.NdJ("click",function(){t.CHM(n);const s=t.oxw();return t.KtG(s.decrementQuantity())}),t.qZA(),t.TgZ(12,"span",10),t._uU(13),t.qZA(),t.TgZ(14,"i",11),t.NdJ("click",function(){t.CHM(n);const s=t.oxw();return t.KtG(s.incrementQuantity())}),t.qZA(),t.TgZ(15,"button",12),t.NdJ("click",function(){t.CHM(n);const s=t.oxw();return t.KtG(s.updateBasket())}),t._uU(16),t.qZA()(),t.TgZ(17,"div",13)(18,"h4"),t._uU(19,"Description"),t.qZA(),t.TgZ(20,"p"),t._uU(21),t.qZA()()()()}if(2&o){const n=t.oxw();t.xp6(2),t.s9C("src",n.product.pictureUrl,t.LSH),t.s9C("alt",n.product.name),t.xp6(3),t.Oqu(n.product.name),t.xp6(2),t.Oqu(t.lcZ(8,9,n.product.price)),t.xp6(2),t.Q6J("ngIf",n.quantityInBasket>0),t.xp6(4),t.hij(" ",n.quantity," "),t.xp6(2),t.Q6J("disabled",n.quantity===n.quantityInBasket),t.xp6(1),t.Oqu(n.buttonText),t.xp6(5),t.Oqu(n.product.description)}}const Y=[{path:"",component:z},{path:":id",component:(()=>{var o;class a{constructor(e,s,i,c){this.shopService=e,this.activatedRoute=s,this.bcService=i,this.basketService=c,this.quantity=1,this.quantityInBasket=0,this.bcService.set("@productDetails"," ")}ngOnInit(){this.loadProduct()}loadProduct(){const e=this.activatedRoute.snapshot.paramMap.get("id");e&&this.shopService.getProduct(+e).subscribe({next:s=>{this.product=s,this.bcService.set("@productDetails",s.name),this.basketService.basketSource$.pipe((0,Q.q)(1)).subscribe({next:i=>{const c=i?.items.find(m=>m.id===+e);c&&(this.quantity=c.quantity,this.quantityInBasket=c.quantity)}})},error:s=>console.log(s)})}incrementQuantity(){this.quantity++}decrementQuantity(){this.quantity--}updateBasket(){if(this.product)if(this.quantity>this.quantityInBasket){const e=this.quantity-this.quantityInBasket;this.quantityInBasket+=e,this.basketService.addItemToBasket(this.product,e)}else{const e=this.quantityInBasket-this.quantity;this.quantityInBasket-=e,this.basketService.removeItemFromBasket(this.product.id,e)}}get buttonText(){return 0===this.quantityInBasket?"Add to Basket":"Update Basket"}}return(o=a).\u0275fac=function(e){return new(e||o)(t.Y36(v),t.Y36(d.gz),t.Y36(F.pm),t.Y36(x.v))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-product-details"]],decls:2,vars:1,consts:[[1,"container"],["class","row",4,"ngIf"],[1,"row"],[1,"col-6"],[1,"w-100",3,"src","alt"],[1,"col-6","mt-5"],[2,"font-size","2em"],["class","text-primary mb-3",4,"ngIf"],[1,"d-flex","justify-content-start","align-items-center"],[1,"fa","fa-minus-circle","text-warning","me-2",2,"cursor","pointer","font-size","2em",3,"click"],[1,"font-weight-bold",2,"font-size","1.5em"],[1,"fa","fa-plus-circle","text-warning","ms-2",2,"cursor","pointer","font-size","2em",3,"click"],[1,"btn","btn-outline-primary","ms-4",3,"disabled","click"],[1,"row","mt-4"],[1,"text-primary","mb-3"]],template:function(e,s){1&e&&(t.TgZ(0,"div",0),t.YNc(1,j,22,11,"div",1),t.qZA()),2&e&&(t.xp6(1),t.Q6J("ngIf",s.product))},dependencies:[p.O5,p.H9]}),a})(),data:{breadcrumb:{alias:"productDetails"}}}];let G=(()=>{var o;class a{}return(o=a).\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[d.Bz.forChild(Y),d.Bz]}),a})(),D=(()=>{var o;class a{}return(o=a).\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[p.ez,C.m,G]}),a})()}}]);