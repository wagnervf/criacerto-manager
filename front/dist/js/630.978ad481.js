"use strict";(self["webpackChunkCriarCertoManager"]=self["webpackChunkCriarCertoManager"]||[]).push([[630],{9027:function(){},4562:function(t,e,i){i.d(e,{Z:function(){return v}});i(6699);var s=i(3434),a=i(3305),r=a.Z,n=i(3037),o=i(1444),l=i(4390),c=i(4263),d=i(8860),h=i(4338),u=i(7678),m=i(4101);const p=(0,u.Z)(s.Z,d.Z,c.Z,h.Z,(0,n.d)("btnToggle"),(0,o.d)("inputValue"));var v=p.extend().extend({name:"v-btn",props:{activeClass:{type:String,default(){return this.btnToggle?this.btnToggle.activeClass:""}},block:Boolean,depressed:Boolean,fab:Boolean,icon:Boolean,loading:Boolean,outlined:Boolean,plain:Boolean,retainFocusOnClick:Boolean,rounded:Boolean,tag:{type:String,default:"button"},text:Boolean,tile:Boolean,type:{type:String,default:"button"},value:null},data:()=>({proxyClass:"v-btn--active"}),computed:{classes(){return{"v-btn":!0,...d.Z.options.computed.classes.call(this),"v-btn--absolute":this.absolute,"v-btn--block":this.block,"v-btn--bottom":this.bottom,"v-btn--disabled":this.disabled,"v-btn--is-elevated":this.isElevated,"v-btn--fab":this.fab,"v-btn--fixed":this.fixed,"v-btn--has-bg":this.hasBg,"v-btn--icon":this.icon,"v-btn--left":this.left,"v-btn--loading":this.loading,"v-btn--outlined":this.outlined,"v-btn--plain":this.plain,"v-btn--right":this.right,"v-btn--round":this.isRound,"v-btn--rounded":this.rounded,"v-btn--router":this.to,"v-btn--text":this.text,"v-btn--tile":this.tile,"v-btn--top":this.top,...this.themeClasses,...this.groupClasses,...this.elevationClasses,...this.sizeableClasses}},computedElevation(){if(!this.disabled)return l.Z.options.computed.computedElevation.call(this)},computedRipple(){var t;const e=!this.icon&&!this.fab||{circle:!0};return!this.disabled&&(null!=(t=this.ripple)?t:e)},hasBg(){return!this.text&&!this.plain&&!this.outlined&&!this.icon},isElevated(){return Boolean(!this.icon&&!this.text&&!this.outlined&&!this.depressed&&!this.disabled&&!this.plain&&(null==this.elevation||Number(this.elevation)>0))},isRound(){return Boolean(this.icon||this.fab)},styles(){return{...this.measurableStyles}}},created(){const t=[["flat","text"],["outline","outlined"],["round","rounded"]];t.forEach((([t,e])=>{this.$attrs.hasOwnProperty(t)&&(0,m.fK)(t,e,this)}))},methods:{click(t){!this.retainFocusOnClick&&!this.fab&&t.detail&&this.$el.blur(),this.$emit("click",t),this.btnToggle&&this.toggle()},genContent(){return this.$createElement("span",{staticClass:"v-btn__content"},this.$slots.default)},genLoader(){return this.$createElement("span",{class:"v-btn__loader"},this.$slots.loader||[this.$createElement(r,{props:{indeterminate:!0,size:23,width:2}})])}},render(t){const e=[this.genContent(),this.loading&&this.genLoader()],{tag:i,data:s}=this.generateRouteLink(),a=this.hasBg?this.setBackgroundColor:this.setTextColor;return"button"===i&&(s.attrs.type=this.type,s.attrs.disabled=this.disabled),s.attrs.value=["string","number"].includes(typeof this.value)?this.value:JSON.stringify(this.value),t(i,this.disabled?s:a(this.color,s),e)}})},4886:function(t,e,i){i.d(e,{EB:function(){return l},Qq:function(){return n},ZB:function(){return o},h7:function(){return r}});var s=i(4145),a=i(5352);const r=(0,a.Ji)("v-card__actions"),n=(0,a.Ji)("v-card__subtitle"),o=(0,a.Ji)("v-card__text"),l=(0,a.Ji)("v-card__title");s.Z},9223:function(t,e,i){i.d(e,{Z:function(){return a}});var s=i(6669),a=s.Z.extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render(t){let e;return this.$attrs.role&&"separator"!==this.$attrs.role||(e=this.vertical?"vertical":"horizontal"),t("hr",{class:{"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical,...this.themeClasses},attrs:{role:"separator","aria-orientation":e,...this.$attrs},on:this.$listeners})}})},2118:function(t,e,i){i.d(e,{Z:function(){return n}});i(9027),i(1884);var s=i(144);function a(t){return s["default"].extend({name:`v-${t}`,functional:!0,props:{id:String,tag:{type:String,default:"div"}},render(e,{props:i,data:s,children:a}){s.staticClass=`${t} ${s.staticClass||""}`.trim();const{attrs:r}=s;if(r){s.attrs={};const t=Object.keys(r).filter((t=>{if("slot"===t)return!1;const e=r[t];return t.startsWith("data-")?(s.attrs[t]=e,!1):e||"string"===typeof e}));t.length&&(s.staticClass+=` ${t.join(" ")}`)}return i.id&&(s.domProps=s.domProps||{},s.domProps.id=i.id),e(i.tag,s,a)}})}var r=i(1767),n=a("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render(t,{props:e,data:i,children:s}){let a;const{attrs:n}=i;return n&&(i.attrs={},a=Object.keys(n).filter((t=>{if("slot"===t)return!1;const e=n[t];return t.startsWith("data-")?(i.attrs[t]=e,!1):e||"string"===typeof e}))),e.id&&(i.domProps=i.domProps||{},i.domProps.id=e.id),t(e.tag,(0,r.ZP)(i,{staticClass:"container",class:Array({"container--fluid":e.fluid}).concat(a||[])}),s)}})},1625:function(t,e,i){i.d(e,{Z:function(){return u}});var s=i(6750),a=i(9422),r=a.Z,n=i(6669),o=i(7678),l=i(1767),c=i(4101),d=i(5352);const h="undefined"!==typeof window&&"IntersectionObserver"in window;var u=(0,o.Z)(r,n.Z).extend({name:"v-img",directives:{intersect:s.Z},props:{alt:String,contain:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},position:{type:String,default:"center center"},sizes:String,src:{type:[String,Object],default:""},srcset:String,transition:{type:[Boolean,String],default:"fade-transition"}},data(){return{currentSrc:"",image:null,isLoading:!0,calculatedAspectRatio:void 0,naturalWidth:void 0,hasError:!1}},computed:{computedAspectRatio(){return Number(this.normalisedSrc.aspect||this.calculatedAspectRatio)},normalisedSrc(){return this.src&&"object"===typeof this.src?{src:this.src.src,srcset:this.srcset||this.src.srcset,lazySrc:this.lazySrc||this.src.lazySrc,aspect:Number(this.aspectRatio||this.src.aspect)}:{src:this.src,srcset:this.srcset,lazySrc:this.lazySrc,aspect:Number(this.aspectRatio||0)}},__cachedImage(){if(!(this.normalisedSrc.src||this.normalisedSrc.lazySrc||this.gradient))return[];const t=[],e=this.isLoading?this.normalisedSrc.lazySrc:this.currentSrc;this.gradient&&t.push(`linear-gradient(${this.gradient})`),e&&t.push(`url("${e}")`);const i=this.$createElement("div",{staticClass:"v-image__image",class:{"v-image__image--preload":this.isLoading,"v-image__image--contain":this.contain,"v-image__image--cover":!this.contain},style:{backgroundImage:t.join(", "),backgroundPosition:this.position},key:+this.isLoading});return this.transition?this.$createElement("transition",{attrs:{name:this.transition,mode:"in-out"}},[i]):i}},watch:{src(){this.isLoading?this.loadImage():this.init(void 0,void 0,!0)},"$vuetify.breakpoint.width":"getSrc"},mounted(){this.init()},methods:{init(t,e,i){if(!h||i||this.eager){if(this.normalisedSrc.lazySrc){const t=new Image;t.src=this.normalisedSrc.lazySrc,this.pollForSize(t,null)}this.normalisedSrc.src&&this.loadImage()}},onLoad(){this.getSrc(),this.isLoading=!1,this.$emit("load",this.src),this.image&&(this.normalisedSrc.src.endsWith(".svg")||this.normalisedSrc.src.startsWith("data:image/svg+xml"))&&(this.image.naturalHeight&&this.image.naturalWidth?(this.naturalWidth=this.image.naturalWidth,this.calculatedAspectRatio=this.image.naturalWidth/this.image.naturalHeight):this.calculatedAspectRatio=1)},onError(){this.hasError=!0,this.$emit("error",this.src)},getSrc(){this.image&&(this.currentSrc=this.image.currentSrc||this.image.src)},loadImage(){const t=new Image;this.image=t,t.onload=()=>{t.decode?t.decode().catch((t=>{(0,c.Kd)(`Failed to decode image, trying to render anyway\n\nsrc: ${this.normalisedSrc.src}`+(t.message?`\nOriginal error: ${t.message}`:""),this)})).then(this.onLoad):this.onLoad()},t.onerror=this.onError,this.hasError=!1,this.sizes&&(t.sizes=this.sizes),this.normalisedSrc.srcset&&(t.srcset=this.normalisedSrc.srcset),t.src=this.normalisedSrc.src,this.$emit("loadstart",this.normalisedSrc.src),this.aspectRatio||this.pollForSize(t),this.getSrc()},pollForSize(t,e=100){const i=()=>{const{naturalHeight:s,naturalWidth:a}=t;s||a?(this.naturalWidth=a,this.calculatedAspectRatio=a/s):t.complete||!this.isLoading||this.hasError||null==e||setTimeout(i,e)};i()},genContent(){const t=r.options.methods.genContent.call(this);return this.naturalWidth&&this._b(t.data,"div",{style:{width:`${this.naturalWidth}px`}}),t},__genPlaceholder(){const t=(0,d.z9)(this,"placeholder");if(t){const e=this.isLoading?[this.$createElement("div",{staticClass:"v-image__placeholder"},t)]:[];return this.transition?this.$createElement("transition",{props:{appear:!0,name:this.transition}},e):e[0]}}},render(t){const e=r.options.render.call(this,t),i=(0,l.ZP)(e.data,{staticClass:"v-image",attrs:{"aria-label":this.alt,role:this.alt?"img":void 0},class:this.themeClasses,directives:h?[{name:"intersect",modifiers:{once:!0},value:{handler:this.init,options:this.options}}]:void 0});return e.children=[this.__cachedSizer,this.__cachedImage,this.__genPlaceholder(),this.genContent()],t(e.tag,i,e.children)}})},3305:function(t,e,i){i.d(e,{Z:function(){return n}});var s=i(6750),a=i(6878),r=i(5352),n=a.Z.extend({name:"v-progress-circular",directives:{intersect:s.Z},props:{button:Boolean,indeterminate:Boolean,rotate:{type:[Number,String],default:0},size:{type:[Number,String],default:32},width:{type:[Number,String],default:4},value:{type:[Number,String],default:0}},data:()=>({radius:20,isVisible:!0}),computed:{calculatedSize(){return Number(this.size)+(this.button?8:0)},circumference(){return 2*Math.PI*this.radius},classes(){return{"v-progress-circular--visible":this.isVisible,"v-progress-circular--indeterminate":this.indeterminate,"v-progress-circular--button":this.button}},normalizedValue(){return this.value<0?0:this.value>100?100:parseFloat(this.value)},strokeDashArray(){return Math.round(1e3*this.circumference)/1e3},strokeDashOffset(){return(100-this.normalizedValue)/100*this.circumference+"px"},strokeWidth(){return Number(this.width)/+this.size*this.viewBoxSize*2},styles(){return{height:(0,r.kb)(this.calculatedSize),width:(0,r.kb)(this.calculatedSize)}},svgStyles(){return{transform:`rotate(${Number(this.rotate)}deg)`}},viewBoxSize(){return this.radius/(1-Number(this.width)/+this.size)}},methods:{genCircle(t,e){return this.$createElement("circle",{class:`v-progress-circular__${t}`,attrs:{fill:"transparent",cx:2*this.viewBoxSize,cy:2*this.viewBoxSize,r:this.radius,"stroke-width":this.strokeWidth,"stroke-dasharray":this.strokeDashArray,"stroke-dashoffset":e}})},genSvg(){const t=[this.indeterminate||this.genCircle("underlay",0),this.genCircle("overlay",this.strokeDashOffset)];return this.$createElement("svg",{style:this.svgStyles,attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:`${this.viewBoxSize} ${this.viewBoxSize} ${2*this.viewBoxSize} ${2*this.viewBoxSize}`}},t)},genInfo(){return this.$createElement("div",{staticClass:"v-progress-circular__info"},this.$slots.default)},onObserve(t,e,i){this.isVisible=i}},render(t){return t("div",this.setTextColor(this.color,{staticClass:"v-progress-circular",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,directives:[{name:"intersect",value:this.onObserve}],style:this.styles,on:this.$listeners}),[this.genSvg(),this.genInfo()])}})},9422:function(t,e,i){i.d(e,{Z:function(){return n}});var s=i(8846),a=i(7678),r=i(5352),n=(0,a.Z)(s.Z).extend({name:"v-responsive",props:{aspectRatio:[String,Number],contentClass:String},computed:{computedAspectRatio(){return Number(this.aspectRatio)},aspectStyle(){return this.computedAspectRatio?{paddingBottom:1/this.computedAspectRatio*100+"%"}:void 0},__cachedSizer(){return this.aspectStyle?this.$createElement("div",{style:this.aspectStyle,staticClass:"v-responsive__sizer"}):[]}},methods:{genContent(){return this.$createElement("div",{staticClass:"v-responsive__content",class:this.contentClass},(0,r.z9)(this))}},render(t){return t("div",{staticClass:"v-responsive",style:this.measurableStyles,on:this.$listeners},[this.__cachedSizer,this.genContent()])}})},7072:function(t,e,i){i.d(e,{Z:function(){return b}});var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("v-list-item",{staticClass:"white pa-4 my-2",attrs:{link:"",router:"",rounded:""},on:{click:function(e){return t.goTo(t.rota)}}},[i("v-list-item-avatar",{staticClass:"d-none d-sm-flex",attrs:{color:"teal",size:"56"}},[i("v-icon",{attrs:{color:"white"}},[t._v(" "+t._s(t.icon)+" ")])],1),i("v-list-item-content",[i("v-list-item-title",{staticClass:"teal--text text-wrap"},[t._v(" "+t._s(t.title)+" ")]),i("v-list-item-subtitle",{staticClass:"text-wrap"},[t._v(" "+t._s(t.subtitle)+" ")])],1),i("v-list-item-action",[i("v-btn",{attrs:{icon:""}},[i("v-icon",{attrs:{color:"primary"}},[t._v(" "+t._s(t.iconExpand)+" ")])],1)],1)],1)],1)},a=[],r={name:"HeaderList",props:{icon:{type:String,default(){return""}},title:{type:String,default(){return""}},subtitle:{type:String,default(){return""}},iconExpand:{type:String,default(){return"mdi-chevron-down"}},rota:{type:String,default(){return""}}},methods:{goTo(t){this.$router.push({name:t})}}},n=r,o=i(3736),l=i(3453),c=i.n(l),d=i(4562),h=i(4324),u=i(4525),m=i(5187),p=i(6900),v=i(8627),g=(0,o.Z)(n,s,a,!1,null,null,null),b=g.exports;c()(g,{VBtn:d.Z,VIcon:h.Z,VListItem:u.Z,VListItemAction:m.Z,VListItemAvatar:p.Z,VListItemContent:v.km,VListItemSubtitle:v.oZ,VListItemTitle:v.V9})},1630:function(t,e,i){i.r(e),i.d(e,{default:function(){return b}});var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",{staticClass:"pa-0",attrs:{fluid:""}},[s("v-card",{staticClass:"mx-auto"},[s("headerList",{attrs:{title:t.title,icon:t.icon,subtitle:t.subtitle,"icon-expand":t.icon,rota:t.dash}}),s("v-divider"),s("v-card-text",[s("p",[t._v(" A tela das simulações desempenha uma importante finalidade no Cria Certo Manager, é nesta tela que serão gerenciados os parâmetros que serão utilizados no aplicativo Cria Certo. ")]),s("v-img",{staticClass:"my-2 ma-auto",attrs:{"max-height":"600","max-width":"800",src:i(4288)}}),s("v-divider"),s("p",[t._v(" A Figura acima apresenta a tela do Cria Certo Manager que lista todas as simulações atualmente existentes no aplicativo Cria Certo e uma breve descrição de cada item. ")]),s("p",[t._v(" A partir dessa tela o usuário terá acesso aos parâmetros das simulações, além disso, é apresentada uma opção para acesso aos Dados Básicos das Simulações, são parâmetros comuns às todas as simulações como, por exemplo, raça de touros e preço do aluguel do pasto. ")]),s("p",[t._v(" Ao clicar no primeiro item da listagem da Figura Monta Natural, o usuário terá a possibilidade de editar os parâmetros do tipo de simulação Monta Natural, separado por etapas, assim como no aplicativo, essa simulação apresenta três etapas, são elas: dados técnicos do rebanho, aquisição de touro e manutenção anual do touro. ")]),s("p",[t._v(" E cada uma das etapas possui diversos parâmetros, utilizados como referência durante as simulações do aplicativo Cria Certo. ")]),s("v-img",{staticClass:"my-2 ma-auto",attrs:{"max-height":"600","max-width":"800",src:i(746)}}),s("ul",[s("strong",[s("li",[t._v(' Editando os valores da fase "Aquisição de Touro" da simulação Monta Natural ')])])]),s("br"),s("p",[s("strong",[t._v("Ao alterar um valor o usuário deve clicar em Salvar.")])]),s("p",[t._v(" Logo, todo valor alterado e salvo nesta tela, atualizará a base de dados do aplicativo Cria Certo, que terá os valores disponíveis para serem requisitados do aplicativo. ")]),s("p",[t._v(" Na Figura acima é possível observar os parâmetros da fase Aquisição de Touro do Aplicativo Cria Certo, com na tela fase 3 da Simulação Monta Natural do aplicativo Cria Certo, que ela foi projetada. ")])],1)],1)],1)},a=[],r=i(7072),n={components:{headerList:r.Z},name:"ParametrosAjuda",data:()=>({title:"Ajuda Parâmetros do Cria Certo",icon:"mdi-database",subtitle:"Tela de Gerenciamento e Visualização dos Parâmetros do Cria Certo",dash:""})},o=n,l=i(3736),c=i(3453),d=i.n(c),h=i(4145),u=i(4886),m=i(2118),p=i(9223),v=i(1625),g=(0,l.Z)(o,s,a,!1,null,null,null),b=g.exports;d()(g,{VCard:h.Z,VCardText:u.ZB,VContainer:m.Z,VDivider:p.Z,VImg:v.Z})},4288:function(t,e,i){t.exports=i.p+"img/lista_simulacoes.cb454375.png"},746:function(t,e,i){t.exports=i.p+"img/monta_natural_aquis_touro.8cefe054.png"}}]);
//# sourceMappingURL=630.978ad481.js.map