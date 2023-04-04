"use strict";(self["webpackChunkCriarCertoManager"]=self["webpackChunkCriarCertoManager"]||[]).push([[687],{27852:function(t,e,i){var s=i(82109),n=i(1702),r=i(31236).f,a=i(17466),o=i(41340),c=i(3929),l=i(84488),u=i(84964),d=i(31913),h=n("".endsWith),v=n("".slice),m=Math.min,p=u("endsWith"),g=!d&&!p&&!!function(){var t=r(String.prototype,"endsWith");return t&&!t.writable}();s({target:"String",proto:!0,forced:!g&&!p},{endsWith:function(t){var e=o(l(this));c(t);var i=arguments.length>1?arguments[1]:void 0,s=e.length,n=void 0===i?s:m(a(i),s),r=o(t);return h?h(e,r,n):v(e,n-r.length,n)===r}})},19027:function(){},64562:function(t,e,i){i.d(e,{Z:function(){return b}});var s=i(3336),n=i(56084),r=i(95082),a=(i(29253),i(9653),i(41539),i(26699),i(38862),i(83434)),o=i(3305),c=o.Z,l=i(13037),u=i(91444),d=i(34390),h=i(14263),v=i(58860),m=i(74338),p=i(67678),g=i(74101),f=(0,p.Z)(a.Z,v.Z,h.Z,m.Z,(0,l.d)("btnToggle"),(0,u.d)("inputValue")),b=f.extend().extend({name:"v-btn",props:{activeClass:{type:String,default:function(){return this.btnToggle?this.btnToggle.activeClass:""}},block:Boolean,depressed:Boolean,fab:Boolean,icon:Boolean,loading:Boolean,outlined:Boolean,plain:Boolean,retainFocusOnClick:Boolean,rounded:Boolean,tag:{type:String,default:"button"},text:Boolean,tile:Boolean,type:{type:String,default:"button"},value:null},data:function(){return{proxyClass:"v-btn--active"}},computed:{classes:function(){return(0,r.Z)((0,r.Z)((0,r.Z)((0,r.Z)((0,r.Z)({"v-btn":!0},v.Z.options.computed.classes.call(this)),{},{"v-btn--absolute":this.absolute,"v-btn--block":this.block,"v-btn--bottom":this.bottom,"v-btn--disabled":this.disabled,"v-btn--is-elevated":this.isElevated,"v-btn--fab":this.fab,"v-btn--fixed":this.fixed,"v-btn--has-bg":this.hasBg,"v-btn--icon":this.icon,"v-btn--left":this.left,"v-btn--loading":this.loading,"v-btn--outlined":this.outlined,"v-btn--plain":this.plain,"v-btn--right":this.right,"v-btn--round":this.isRound,"v-btn--rounded":this.rounded,"v-btn--router":this.to,"v-btn--text":this.text,"v-btn--tile":this.tile,"v-btn--top":this.top},this.themeClasses),this.groupClasses),this.elevationClasses),this.sizeableClasses)},computedElevation:function(){if(!this.disabled)return d.Z.options.computed.computedElevation.call(this)},computedRipple:function(){var t,e=!this.icon&&!this.fab||{circle:!0};return!this.disabled&&(null!=(t=this.ripple)?t:e)},hasBg:function(){return!this.text&&!this.plain&&!this.outlined&&!this.icon},isElevated:function(){return Boolean(!this.icon&&!this.text&&!this.outlined&&!this.depressed&&!this.disabled&&!this.plain&&(null==this.elevation||Number(this.elevation)>0))},isRound:function(){return Boolean(this.icon||this.fab)},styles:function(){return(0,r.Z)({},this.measurableStyles)}},created:function(){var t=this,e=[["flat","text"],["outline","outlined"],["round","rounded"]];e.forEach((function(e){var i=(0,n.Z)(e,2),s=i[0],r=i[1];t.$attrs.hasOwnProperty(s)&&(0,g.fK)(s,r,t)}))},methods:{click:function(t){!this.retainFocusOnClick&&!this.fab&&t.detail&&this.$el.blur(),this.$emit("click",t),this.btnToggle&&this.toggle()},genContent:function(){return this.$createElement("span",{staticClass:"v-btn__content"},this.$slots.default)},genLoader:function(){return this.$createElement("span",{class:"v-btn__loader"},this.$slots.loader||[this.$createElement(c,{props:{indeterminate:!0,size:23,width:2}})])}},render:function(t){var e=[this.genContent(),this.loading&&this.genLoader()],i=this.generateRouteLink(),n=i.tag,r=i.data,a=this.hasBg?this.setBackgroundColor:this.setTextColor;return"button"===n&&(r.attrs.type=this.type,r.attrs.disabled=this.disabled),r.attrs.value=["string","number"].includes((0,s.Z)(this.value))?this.value:JSON.stringify(this.value),t(n,this.disabled?r:a(this.color,r),e)}})},54886:function(t,e,i){i.d(e,{EB:function(){return c},Qq:function(){return a},ZB:function(){return o},h7:function(){return r}});var s=i(34145),n=i(75352),r=(0,n.Ji)("v-card__actions"),a=(0,n.Ji)("v-card__subtitle"),o=(0,n.Ji)("v-card__text"),c=(0,n.Ji)("v-card__title");s.Z},99223:function(t,e,i){i.d(e,{Z:function(){return r}});var s=i(95082),n=i(96669),r=n.Z.extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render:function(t){var e;return this.$attrs.role&&"separator"!==this.$attrs.role||(e=this.vertical?"vertical":"horizontal"),t("hr",{class:(0,s.Z)({"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical},this.themeClasses),attrs:(0,s.Z)({role:"separator","aria-orientation":e},this.$attrs),on:this.$listeners})}})},82118:function(t,e,i){i.d(e,{Z:function(){return a}});i(57327),i(41539),i(47941),i(23157),i(92222),i(19027),i(1884),i(73210),i(69600);var s=i(20144);function n(t){return s["default"].extend({name:"v-".concat(t),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(e,i){var s=i.props,n=i.data,r=i.children;n.staticClass="".concat(t," ").concat(n.staticClass||"").trim();var a=n.attrs;if(a){n.attrs={};var o=Object.keys(a).filter((function(t){if("slot"===t)return!1;var e=a[t];return t.startsWith("data-")?(n.attrs[t]=e,!1):e||"string"===typeof e}));o.length&&(n.staticClass+=" ".concat(o.join(" ")))}return s.id&&(n.domProps=n.domProps||{},n.domProps.id=s.id),e(s.tag,n,r)}})}var r=i(51767),a=n("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,e){var i,s=e.props,n=e.data,a=e.children,o=n.attrs;return o&&(n.attrs={},i=Object.keys(o).filter((function(t){if("slot"===t)return!1;var e=o[t];return t.startsWith("data-")?(n.attrs[t]=e,!1):e||"string"===typeof e}))),s.id&&(n.domProps=n.domProps||{},n.domProps.id=s.id),t(s.tag,(0,r.ZP)(n,{staticClass:"container",class:Array({"container--fluid":s.fluid}).concat(i||[])}),a)}})},91625:function(t,e,i){i.d(e,{Z:function(){return v}});var s=i(3336),n=(i(9653),i(69600),i(27852),i(23157),i(26750)),r=i(39422),a=r.Z,o=i(96669),c=i(67678),l=i(51767),u=i(74101),d=i(75352),h="undefined"!==typeof window&&"IntersectionObserver"in window,v=(0,c.Z)(a,o.Z).extend({name:"v-img",directives:{intersect:n.Z},props:{alt:String,contain:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:function(){return{root:void 0,rootMargin:void 0,threshold:void 0}}},position:{type:String,default:"center center"},sizes:String,src:{type:[String,Object],default:""},srcset:String,transition:{type:[Boolean,String],default:"fade-transition"}},data:function(){return{currentSrc:"",image:null,isLoading:!0,calculatedAspectRatio:void 0,naturalWidth:void 0,hasError:!1}},computed:{computedAspectRatio:function(){return Number(this.normalisedSrc.aspect||this.calculatedAspectRatio)},normalisedSrc:function(){return this.src&&"object"===(0,s.Z)(this.src)?{src:this.src.src,srcset:this.srcset||this.src.srcset,lazySrc:this.lazySrc||this.src.lazySrc,aspect:Number(this.aspectRatio||this.src.aspect)}:{src:this.src,srcset:this.srcset,lazySrc:this.lazySrc,aspect:Number(this.aspectRatio||0)}},__cachedImage:function(){if(!(this.normalisedSrc.src||this.normalisedSrc.lazySrc||this.gradient))return[];var t=[],e=this.isLoading?this.normalisedSrc.lazySrc:this.currentSrc;this.gradient&&t.push("linear-gradient(".concat(this.gradient,")")),e&&t.push('url("'.concat(e,'")'));var i=this.$createElement("div",{staticClass:"v-image__image",class:{"v-image__image--preload":this.isLoading,"v-image__image--contain":this.contain,"v-image__image--cover":!this.contain},style:{backgroundImage:t.join(", "),backgroundPosition:this.position},key:+this.isLoading});return this.transition?this.$createElement("transition",{attrs:{name:this.transition,mode:"in-out"}},[i]):i}},watch:{src:function(){this.isLoading?this.loadImage():this.init(void 0,void 0,!0)},"$vuetify.breakpoint.width":"getSrc"},mounted:function(){this.init()},methods:{init:function(t,e,i){if(!h||i||this.eager){if(this.normalisedSrc.lazySrc){var s=new Image;s.src=this.normalisedSrc.lazySrc,this.pollForSize(s,null)}this.normalisedSrc.src&&this.loadImage()}},onLoad:function(){this.getSrc(),this.isLoading=!1,this.$emit("load",this.src),this.image&&(this.normalisedSrc.src.endsWith(".svg")||this.normalisedSrc.src.startsWith("data:image/svg+xml"))&&(this.image.naturalHeight&&this.image.naturalWidth?(this.naturalWidth=this.image.naturalWidth,this.calculatedAspectRatio=this.image.naturalWidth/this.image.naturalHeight):this.calculatedAspectRatio=1)},onError:function(){this.hasError=!0,this.$emit("error",this.src)},getSrc:function(){this.image&&(this.currentSrc=this.image.currentSrc||this.image.src)},loadImage:function(){var t=this,e=new Image;this.image=e,e.onload=function(){e.decode?e.decode().catch((function(e){(0,u.Kd)("Failed to decode image, trying to render anyway\n\n"+"src: ".concat(t.normalisedSrc.src)+(e.message?"\nOriginal error: ".concat(e.message):""),t)})).then(t.onLoad):t.onLoad()},e.onerror=this.onError,this.hasError=!1,this.sizes&&(e.sizes=this.sizes),this.normalisedSrc.srcset&&(e.srcset=this.normalisedSrc.srcset),e.src=this.normalisedSrc.src,this.$emit("loadstart",this.normalisedSrc.src),this.aspectRatio||this.pollForSize(e),this.getSrc()},pollForSize:function(t){var e=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,s=function s(){var n=t.naturalHeight,r=t.naturalWidth;n||r?(e.naturalWidth=r,e.calculatedAspectRatio=r/n):t.complete||!e.isLoading||e.hasError||null==i||setTimeout(s,i)};s()},genContent:function(){var t=a.options.methods.genContent.call(this);return this.naturalWidth&&this._b(t.data,"div",{style:{width:"".concat(this.naturalWidth,"px")}}),t},__genPlaceholder:function(){var t=(0,d.z9)(this,"placeholder");if(t){var e=this.isLoading?[this.$createElement("div",{staticClass:"v-image__placeholder"},t)]:[];return this.transition?this.$createElement("transition",{props:{appear:!0,name:this.transition}},e):e[0]}}},render:function(t){var e=a.options.render.call(this,t),i=(0,l.ZP)(e.data,{staticClass:"v-image",attrs:{"aria-label":this.alt,role:this.alt?"img":void 0},class:this.themeClasses,directives:h?[{name:"intersect",modifiers:{once:!0},value:{handler:this.init,options:this.options}}]:void 0});return e.children=[this.__cachedSizer,this.__cachedImage,this.__genPlaceholder(),this.genContent()],t(e.tag,i,e.children)}})},3305:function(t,e,i){i.d(e,{Z:function(){return a}});i(9653),i(92222);var s=i(26750),n=i(16878),r=i(75352),a=n.Z.extend({name:"v-progress-circular",directives:{intersect:s.Z},props:{button:Boolean,indeterminate:Boolean,rotate:{type:[Number,String],default:0},size:{type:[Number,String],default:32},width:{type:[Number,String],default:4},value:{type:[Number,String],default:0}},data:function(){return{radius:20,isVisible:!0}},computed:{calculatedSize:function(){return Number(this.size)+(this.button?8:0)},circumference:function(){return 2*Math.PI*this.radius},classes:function(){return{"v-progress-circular--visible":this.isVisible,"v-progress-circular--indeterminate":this.indeterminate,"v-progress-circular--button":this.button}},normalizedValue:function(){return this.value<0?0:this.value>100?100:parseFloat(this.value)},strokeDashArray:function(){return Math.round(1e3*this.circumference)/1e3},strokeDashOffset:function(){return(100-this.normalizedValue)/100*this.circumference+"px"},strokeWidth:function(){return Number(this.width)/+this.size*this.viewBoxSize*2},styles:function(){return{height:(0,r.kb)(this.calculatedSize),width:(0,r.kb)(this.calculatedSize)}},svgStyles:function(){return{transform:"rotate(".concat(Number(this.rotate),"deg)")}},viewBoxSize:function(){return this.radius/(1-Number(this.width)/+this.size)}},methods:{genCircle:function(t,e){return this.$createElement("circle",{class:"v-progress-circular__".concat(t),attrs:{fill:"transparent",cx:2*this.viewBoxSize,cy:2*this.viewBoxSize,r:this.radius,"stroke-width":this.strokeWidth,"stroke-dasharray":this.strokeDashArray,"stroke-dashoffset":e}})},genSvg:function(){var t=[this.indeterminate||this.genCircle("underlay",0),this.genCircle("overlay",this.strokeDashOffset)];return this.$createElement("svg",{style:this.svgStyles,attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"".concat(this.viewBoxSize," ").concat(this.viewBoxSize," ").concat(2*this.viewBoxSize," ").concat(2*this.viewBoxSize)}},t)},genInfo:function(){return this.$createElement("div",{staticClass:"v-progress-circular__info"},this.$slots.default)},onObserve:function(t,e,i){this.isVisible=i}},render:function(t){return t("div",this.setTextColor(this.color,{staticClass:"v-progress-circular",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,directives:[{name:"intersect",value:this.onObserve}],style:this.styles,on:this.$listeners}),[this.genSvg(),this.genInfo()])}})},39422:function(t,e,i){i.d(e,{Z:function(){return a}});i(9653);var s=i(48846),n=i(67678),r=i(75352),a=(0,n.Z)(s.Z).extend({name:"v-responsive",props:{aspectRatio:[String,Number],contentClass:String},computed:{computedAspectRatio:function(){return Number(this.aspectRatio)},aspectStyle:function(){return this.computedAspectRatio?{paddingBottom:1/this.computedAspectRatio*100+"%"}:void 0},__cachedSizer:function(){return this.aspectStyle?this.$createElement("div",{style:this.aspectStyle,staticClass:"v-responsive__sizer"}):[]}},methods:{genContent:function(){return this.$createElement("div",{staticClass:"v-responsive__content",class:this.contentClass},(0,r.z9)(this))}},render:function(t){return t("div",{staticClass:"v-responsive",style:this.measurableStyles,on:this.$listeners},[this.__cachedSizer,this.genContent()])}})},47072:function(t,e,i){i.d(e,{Z:function(){return f}});var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("v-list-item",{staticClass:"white pa-4 my-2",attrs:{link:"",router:"",rounded:""},on:{click:function(e){return t.goTo(t.rota)}}},[i("v-list-item-avatar",{staticClass:"d-none d-sm-flex",attrs:{color:"teal",size:"56"}},[i("v-icon",{attrs:{color:"white"}},[t._v(" "+t._s(t.icon)+" ")])],1),i("v-list-item-content",[i("v-list-item-title",{staticClass:"teal--text text-wrap"},[t._v(" "+t._s(t.title)+" ")]),i("v-list-item-subtitle",{staticClass:"text-wrap"},[t._v(" "+t._s(t.subtitle)+" ")])],1),i("v-list-item-action",[i("v-btn",{attrs:{icon:""}},[i("v-icon",{attrs:{color:"primary"}},[t._v(" "+t._s(t.iconExpand)+" ")])],1)],1)],1)],1)},n=[],r={name:"HeaderList",props:{icon:{type:String,default:function(){return""}},title:{type:String,default:function(){return""}},subtitle:{type:String,default:function(){return""}},iconExpand:{type:String,default:function(){return"mdi-chevron-down"}},rota:{type:String,default:function(){return""}}},methods:{goTo:function(t){this.$router.push({name:t})}}},a=r,o=i(43736),c=i(43453),l=i.n(c),u=i(64562),d=i(4324),h=i(54525),v=i(45187),m=i(66900),p=i(68627),g=(0,o.Z)(a,s,n,!1,null,null,null),f=g.exports;l()(g,{VBtn:u.Z,VIcon:d.Z,VListItem:h.Z,VListItemAction:v.Z,VListItemAvatar:m.Z,VListItemContent:p.km,VListItemSubtitle:p.oZ,VListItemTitle:p.V9})},35687:function(t,e,i){i.r(e),i.d(e,{default:function(){return f}});var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",{staticClass:"pa-0",attrs:{fluid:""}},[s("v-card",{staticClass:"mx-auto"},[s("headerList",{attrs:{title:t.title,icon:t.icon,subtitle:t.subtitle,"icon-expand":t.icon,rota:t.dash}}),s("v-divider"),s("v-card-text",[s("p",[t._v(" Nesta tela de gerenciamento dos usuários, os administradores concedem permissões a outros usuários. ")]),s("v-img",{staticClass:"my-2 ma-auto",attrs:{"max-height":"700","max-width":"800",src:i(24346)}}),s("v-divider"),s("br"),s("li",[t._v(" A categoria padrão é atribuído, automaticamente, a todos os usuários que acessarem o sistema pela primeira vez, nela só será possível ter o acesso de leitura dos parâmetros. ")]),s("br"),s("li",[t._v(" O segunda modalidade de permissão é o nível administrador, que poderá gerenciar os parâmetros que serão utilizados pelo Cria Certo e modificar outros usuários. ")]),s("br"),s("li",[t._v(" Além disso, é possível conceder ou não permissão de acessar o Manager. ")]),s("br"),s("li",[s("strong",[t._v(" Apenas o usuário administrador pode escolher um usuário da listagem e alterar o perfil dele para o papel de administrador. ")])])],1)],1)],1)},n=[],r=i(47072),a={components:{headerList:r.Z},name:"ParametrosAjuda",data:function(){return{title:"Gerenciar Usuários",icon:"mdi-account-cog",subtitle:"Ajuda da Tela de Gerenciar Usuários",dashDocUser:""}}},o=a,c=i(43736),l=i(43453),u=i.n(l),d=i(34145),h=i(54886),v=i(82118),m=i(99223),p=i(91625),g=(0,c.Z)(o,s,n,!1,null,null,null),f=g.exports;u()(g,{VCard:d.Z,VCardText:h.ZB,VContainer:v.Z,VDivider:m.Z,VImg:p.Z})},24346:function(t,e,i){t.exports=i.p+"img/gerenciarUser.f7875625.png"}}]);
//# sourceMappingURL=687-legacy.ea01e9ea.js.map