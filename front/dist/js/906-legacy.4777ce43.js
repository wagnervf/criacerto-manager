"use strict";(self["webpackChunkCriarCertoManager"]=self["webpackChunkCriarCertoManager"]||[]).push([[906],{27852:function(t,i,e){var r=e(82109),a=e(1702),s=e(31236).f,n=e(17466),o=e(41340),c=e(3929),d=e(84488),l=e(84964),h=e(31913),u=a("".endsWith),g=a("".slice),m=Math.min,v=l("endsWith"),p=!h&&!v&&!!function(){var t=s(String.prototype,"endsWith");return t&&!t.writable}();r({target:"String",proto:!0,forced:!p&&!v},{endsWith:function(t){var i=o(d(this));c(t);var e=arguments.length>1?arguments[1]:void 0,r=i.length,a=void 0===e?r:m(n(e),r),s=o(t);return u?u(i,s,a):g(i,a-s.length,a)===s}})},54886:function(t,i,e){e.d(i,{EB:function(){return c},Qq:function(){return n},ZB:function(){return o},h7:function(){return s}});var r=e(34145),a=e(75352),s=(0,a.Ji)("v-card__actions"),n=(0,a.Ji)("v-card__subtitle"),o=(0,a.Ji)("v-card__text"),c=(0,a.Ji)("v-card__title");r.Z},99223:function(t,i,e){e.d(i,{Z:function(){return s}});var r=e(95082),a=e(96669),s=a.Z.extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render:function(t){var i;return this.$attrs.role&&"separator"!==this.$attrs.role||(i=this.vertical?"vertical":"horizontal"),t("hr",{class:(0,r.Z)({"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical},this.themeClasses),attrs:(0,r.Z)({role:"separator","aria-orientation":i},this.$attrs),on:this.$listeners})}})},82118:function(t,i,e){e.d(i,{Z:function(){return n}});e(57327),e(41539),e(47941),e(23157),e(92222),e(19027),e(1884),e(73210),e(69600);var r=e(20144);function a(t){return r["default"].extend({name:"v-".concat(t),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(i,e){var r=e.props,a=e.data,s=e.children;a.staticClass="".concat(t," ").concat(a.staticClass||"").trim();var n=a.attrs;if(n){a.attrs={};var o=Object.keys(n).filter((function(t){if("slot"===t)return!1;var i=n[t];return t.startsWith("data-")?(a.attrs[t]=i,!1):i||"string"===typeof i}));o.length&&(a.staticClass+=" ".concat(o.join(" ")))}return r.id&&(a.domProps=a.domProps||{},a.domProps.id=r.id),i(r.tag,a,s)}})}var s=e(51767),n=a("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,i){var e,r=i.props,a=i.data,n=i.children,o=a.attrs;return o&&(a.attrs={},e=Object.keys(o).filter((function(t){if("slot"===t)return!1;var i=o[t];return t.startsWith("data-")?(a.attrs[t]=i,!1):i||"string"===typeof i}))),r.id&&(a.domProps=a.domProps||{},a.domProps.id=r.id),t(r.tag,(0,s.ZP)(a,{staticClass:"container",class:Array({"container--fluid":r.fluid}).concat(e||[])}),n)}})},91625:function(t,i,e){e.d(i,{Z:function(){return g}});var r=e(3336),a=(e(9653),e(69600),e(27852),e(23157),e(26750)),s=e(39422),n=s.Z,o=e(96669),c=e(67678),d=e(51767),l=e(74101),h=e(75352),u="undefined"!==typeof window&&"IntersectionObserver"in window,g=(0,c.Z)(n,o.Z).extend({name:"v-img",directives:{intersect:a.Z},props:{alt:String,contain:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:function(){return{root:void 0,rootMargin:void 0,threshold:void 0}}},position:{type:String,default:"center center"},sizes:String,src:{type:[String,Object],default:""},srcset:String,transition:{type:[Boolean,String],default:"fade-transition"}},data:function(){return{currentSrc:"",image:null,isLoading:!0,calculatedAspectRatio:void 0,naturalWidth:void 0,hasError:!1}},computed:{computedAspectRatio:function(){return Number(this.normalisedSrc.aspect||this.calculatedAspectRatio)},normalisedSrc:function(){return this.src&&"object"===(0,r.Z)(this.src)?{src:this.src.src,srcset:this.srcset||this.src.srcset,lazySrc:this.lazySrc||this.src.lazySrc,aspect:Number(this.aspectRatio||this.src.aspect)}:{src:this.src,srcset:this.srcset,lazySrc:this.lazySrc,aspect:Number(this.aspectRatio||0)}},__cachedImage:function(){if(!(this.normalisedSrc.src||this.normalisedSrc.lazySrc||this.gradient))return[];var t=[],i=this.isLoading?this.normalisedSrc.lazySrc:this.currentSrc;this.gradient&&t.push("linear-gradient(".concat(this.gradient,")")),i&&t.push('url("'.concat(i,'")'));var e=this.$createElement("div",{staticClass:"v-image__image",class:{"v-image__image--preload":this.isLoading,"v-image__image--contain":this.contain,"v-image__image--cover":!this.contain},style:{backgroundImage:t.join(", "),backgroundPosition:this.position},key:+this.isLoading});return this.transition?this.$createElement("transition",{attrs:{name:this.transition,mode:"in-out"}},[e]):e}},watch:{src:function(){this.isLoading?this.loadImage():this.init(void 0,void 0,!0)},"$vuetify.breakpoint.width":"getSrc"},mounted:function(){this.init()},methods:{init:function(t,i,e){if(!u||e||this.eager){if(this.normalisedSrc.lazySrc){var r=new Image;r.src=this.normalisedSrc.lazySrc,this.pollForSize(r,null)}this.normalisedSrc.src&&this.loadImage()}},onLoad:function(){this.getSrc(),this.isLoading=!1,this.$emit("load",this.src),this.image&&(this.normalisedSrc.src.endsWith(".svg")||this.normalisedSrc.src.startsWith("data:image/svg+xml"))&&(this.image.naturalHeight&&this.image.naturalWidth?(this.naturalWidth=this.image.naturalWidth,this.calculatedAspectRatio=this.image.naturalWidth/this.image.naturalHeight):this.calculatedAspectRatio=1)},onError:function(){this.hasError=!0,this.$emit("error",this.src)},getSrc:function(){this.image&&(this.currentSrc=this.image.currentSrc||this.image.src)},loadImage:function(){var t=this,i=new Image;this.image=i,i.onload=function(){i.decode?i.decode().catch((function(i){(0,l.Kd)("Failed to decode image, trying to render anyway\n\n"+"src: ".concat(t.normalisedSrc.src)+(i.message?"\nOriginal error: ".concat(i.message):""),t)})).then(t.onLoad):t.onLoad()},i.onerror=this.onError,this.hasError=!1,this.sizes&&(i.sizes=this.sizes),this.normalisedSrc.srcset&&(i.srcset=this.normalisedSrc.srcset),i.src=this.normalisedSrc.src,this.$emit("loadstart",this.normalisedSrc.src),this.aspectRatio||this.pollForSize(i),this.getSrc()},pollForSize:function(t){var i=this,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,r=function r(){var a=t.naturalHeight,s=t.naturalWidth;a||s?(i.naturalWidth=s,i.calculatedAspectRatio=s/a):t.complete||!i.isLoading||i.hasError||null==e||setTimeout(r,e)};r()},genContent:function(){var t=n.options.methods.genContent.call(this);return this.naturalWidth&&this._b(t.data,"div",{style:{width:"".concat(this.naturalWidth,"px")}}),t},__genPlaceholder:function(){var t=(0,h.z9)(this,"placeholder");if(t){var i=this.isLoading?[this.$createElement("div",{staticClass:"v-image__placeholder"},t)]:[];return this.transition?this.$createElement("transition",{props:{appear:!0,name:this.transition}},i):i[0]}}},render:function(t){var i=n.options.render.call(this,t),e=(0,d.ZP)(i.data,{staticClass:"v-image",attrs:{"aria-label":this.alt,role:this.alt?"img":void 0},class:this.themeClasses,directives:u?[{name:"intersect",modifiers:{once:!0},value:{handler:this.init,options:this.options}}]:void 0});return i.children=[this.__cachedSizer,this.__cachedImage,this.__genPlaceholder(),this.genContent()],t(i.tag,e,i.children)}})},39422:function(t,i,e){e.d(i,{Z:function(){return n}});e(9653);var r=e(48846),a=e(67678),s=e(75352),n=(0,a.Z)(r.Z).extend({name:"v-responsive",props:{aspectRatio:[String,Number],contentClass:String},computed:{computedAspectRatio:function(){return Number(this.aspectRatio)},aspectStyle:function(){return this.computedAspectRatio?{paddingBottom:1/this.computedAspectRatio*100+"%"}:void 0},__cachedSizer:function(){return this.aspectStyle?this.$createElement("div",{style:this.aspectStyle,staticClass:"v-responsive__sizer"}):[]}},methods:{genContent:function(){return this.$createElement("div",{staticClass:"v-responsive__content",class:this.contentClass},(0,s.z9)(this))}},render:function(t){return t("div",{staticClass:"v-responsive",style:this.measurableStyles,on:this.$listeners},[this.__cachedSizer,this.genContent()])}})},24906:function(t,i,e){e.r(i),e.d(i,{default:function(){return S}});var r=function(){var t=this,i=t.$createElement,r=t._self._c||i;return r("v-container",{staticClass:"down-top-padding white elevation-2",attrs:{fluid:""}},[r("v-row",[r("v-col",{attrs:{cols:"12",lg:"12"}},[r("v-card",{staticClass:"text-center",attrs:{flat:"",tile:""}},[r("v-card-text",[r("p",{staticClass:"text-h4"},[t._v(" Seja bem-vindo! ")]),r("p",{staticClass:"text-center text-subtitle2"},[t._v(" ao ")]),r("v-divider"),r("p",{staticClass:"text-h6 my-3"},[t._v(" Cria Certo Manager ")]),r("p",{staticClass:"ma-6"},[t._v(" O Cria Certo Manager é um sistema que permite a visualização de indicadores e métricas dos principais métodos de reprodução bovina , além de, um sistema de controle de conteúdo (CMS), que possibilite o gerenciamento dos parâmetros do Aplicativo Cria Certo. ")])],1),r("v-row",[r("v-col",[r("v-card-text",{staticClass:"mx-6"},[r("v-img",{staticStyle:{margin:"auto"},attrs:{height:"100",width:"200",alt:"Logo Cria Certo Manager",src:e(41079)}})],1)],1),r("v-col",[r("v-card-text",{staticClass:"mx-6"},[r("v-img",{staticStyle:{margin:"auto"},attrs:{height:"100",width:"100",alt:"Logo Cria Certo",src:e(49331)}})],1)],1)],1),r("v-divider"),r("v-row",[r("v-col",{staticClass:"text-center grey--text mt-4",attrs:{cols:"12"}},[r("span",[t._v("© "+t._s((new Date).getFullYear())+" — Cria Certo Manager")])])],1)],1)],1)],1)],1)},a=[],s={name:"ViewSobre",data:function(){return{}}},n=s,o=e(43736),c=e(43453),d=e.n(c),l=e(34145),h=e(54886),u=e(60266),g=e(82118),m=e(99223),v=e(91625),p=e(11713),f=(0,o.Z)(n,r,a,!1,null,null,null),S=f.exports;d()(f,{VCard:l.Z,VCardText:h.ZB,VCol:u.Z,VContainer:g.Z,VDivider:m.Z,VImg:v.Z,VRow:p.Z})},41079:function(t,i,e){t.exports=e.p+"img/cria-certo-manager2.8043f05e.png"},49331:function(t,i,e){t.exports=e.p+"img/criacerto.c0a26e6b.png"}}]);
//# sourceMappingURL=906-legacy.4777ce43.js.map