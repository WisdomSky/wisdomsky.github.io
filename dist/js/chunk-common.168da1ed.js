(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[1],{3548:function(t,e,n){},8:function(t,e,n){t.exports=n("Vtdi")},"8m3A":function(t,e,n){"use strict";var i=n("U1HW"),o=n.n(i);o.a},"EG/1":function(t,e,n){},MD2U:function(t,e,n){},PAXp:function(t,e,n){"use strict";var i=n("MD2U"),o=n.n(i);o.a},U1HW:function(t,e,n){},Vtdi:function(t,e,n){"use strict";n.r(e);n("yt8O"),n("VRzm"),n("sykF");var i=n("Kw5r"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("transition",{attrs:{name:"page"}},[n("router-view",{staticClass:"page"})],1)],1)},a=[],s={beforeCreate:function(){document.addEventListener("touchmove",function(t){1!==t.scale&&t.preventDefault()},!1)}},r=s,c=(n("XAuw"),n("KHd+")),d=Object(c["a"])(r,o,a,!1,null,null,null),l=d.exports,u=n("jE9Z"),h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("swiper",{ref:"swiper",staticClass:"gallery",attrs:{options:t.options},on:{setTranslate:t.onTranslate}},[n("swiper-slide",{staticClass:"cover",class:{standing:t.windowHeight>t.windowWidth},style:{height:t.windowHeight+"px",width:Math.floor(.8*t.windowWidth)+"px",boxShadow:t.boxShadow}},[n("back"),n("div",{staticClass:"attention-seeker"},[t._v("\n              Photography\n          ")]),n("div",{staticClass:"im-lazy"},[t._v("\n              Is my other hobby...\n          ")]),n("div",{staticClass:"swipe-me"},[t._v("<<< Just drag to the left")]),n("div",{staticClass:"powered-by"},[t._v("\n              Powered by "),n("a",{attrs:{href:"https://unsplash.com/",target:"_blank"}},[t._v("Unsplash.com")])])],1),t._l(t.photos,function(e,i){return n("swiper-slide",{key:e.id,staticClass:"gallery-item",class:{loaded:e.loaded},style:{height:t.windowHeight+"px",width:t.relativeWidth(e)+"px"}},[e.loaded?t._e():n("spinner",{staticClass:"spinner"}),n("div",{staticClass:"gallery-item-wrapper"},[n("lazy-image",{style:{height:t.windowHeight+"px",width:t.relativeWidth(e)+"px"},attrs:{src:e.urls.regular,"data-gallery-item-index":i},on:{loading:function(e){t.loadExif(i)}},nativeOn:{load:function(e){t.load(e.target.src,i)}}})],1),n("transition",{attrs:{name:"slide"}},[e.loaded&&e.info?n("div",{staticClass:"gallery-item-info"},[n("div",{staticClass:"exif"},[t._v("\n                      "+t._s(e.info.exif.model)+" •\n                      ƒ"+t._s(e.info.exif.aperture)+" •\n                      "+t._s(e.info.exif.exposure_time)+" sec •\n                      "+t._s(e.info.exif.focal_length)+"mm •\n                      "+t._s(e.info.exif.iso)+" ISO\n                  ")])]):t._e()])],1)})],2)},p=[],f=n("iv4g"),g=n("xmWZ"),m=n("3Aqn"),v=n("qpph"),b=n("0yhX"),w=n("EdlT"),y=n("F/XL"),x=n("0/uQ"),_=n("psW0"),k=n("67Y/"),O=n("vDqi"),S=n.n(O),z="09f59a5b506a27d612abc700a46f52e59d5e8eabfa47320c098a77827c9fc36d",C="https://api.unsplash.com",j=function(){function t(){Object(g["a"])(this,t)}return Object(v["a"])(t,[{key:"endpoint",value:function(t){return"".concat(C,"/").concat(t,"?client_id=").concat(z)}},{key:"get",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n="";for(var i in e)e.hasOwnProperty(i)&&(n+="&".concat(i,"=").concat(e[i]));return Object(y["a"])(this.endpoint(t)).pipe(Object(_["a"])(function(t){return Object(x["a"])(S.a.get(t+n))}),Object(k["a"])(function(t){var e=t.data;return e}))}}]),t}(),W=new(function(t){function e(){return Object(g["a"])(this,e),Object(b["a"])(this,Object(w["a"])(e).apply(this,arguments))}return Object(v["a"])(e,[{key:"getPhotos",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return this.get("users/wisdomsky/photos",{per_page:5,page:t})}},{key:"getPhoto",value:function(t){return this.get("photos/".concat(t))}}]),Object(m["a"])(e,t),e}(j)),$=n("LvDl"),L=n.n($),P={data:function(){return{boxShadowSpread:0,options:{freeMode:!0,spaceBetween:3,slidesPerView:"auto",setWrapperSize:!0,freeModeMomentumBounce:!1,preloadImages:!1,mousewheel:!0},photos:[],currentPage:1}},computed:{windowHeight:function(){return window.innerHeight},windowWidth:function(){return window.innerWidth},boxShadow:function(){var t=.0024671052631578946,e=t*(this.windowWidth-320)+2;return"0 0 ".concat(100+this.boxShadowSpread/e,"px ").concat(100+this.boxShadowSpread/e,"px rgba(23,23,23,1)")},allIsLoaded:function(){return this.photos.reduce(function(t,e){return e.loaded?++t:t},0)===this.photos.length}},watch:{allIsLoaded:function(t){t&&this.getPhotos(++this.currentPage)}},created:function(){this.getPhotos(this.currentPage)},mounted:function(){this.$Lazyload.$on("loading",function(t,e){console.log(t)})},methods:{getPhotos:function(t){var e=this;W.getPhotos(t).subscribe(function(t){var n;(n=e.photos).push.apply(n,Object(f["a"])(t))})},load:function(t,e){if(!/^data:.*/.test(t)){var n=this.photos[e];n.loaded=1,this.$set(this.photos,e,n)}},loading:function(t){console.log(t)},relativeWidth:function(t){return Math.floor(this.windowHeight/t.height*t.width)},loadExif:function(t){var e=this,n=this.photos[t];void 0===n.getInfo&&(n.getInfo=L.a.debounce(function(t){var n=e.photos[t];W.getPhoto(n.id).subscribe(function(i){n.info=i,e.$set(e.photos,t,n)})},100),this.$set(this.photos,t,n)),n.getInfo(t)},onTranslate:function(t){this.boxShadowSpread=t}}},H=P,E=(n("WT0A"),Object(c["a"])(H,h,p,!1,null,null,null)),I=E.exports,A=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[t._m(0),n("div",{staticClass:"attention-seeker"},[t._v("\n        Hello, I'm Julian!\n    ")]),n("div",{staticClass:"im-lazy"},[n("router-link",{attrs:{to:"/about"}},[t._v("About Me")]),t._v(" •\n        "),n("router-link",{attrs:{to:"/photography"}},[t._v("Programmertography")])],1)])},M=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"social-links"},[n("a",{attrs:{href:"https://facebook.com/WisdomSky"}},[n("i",{staticClass:"fab fa-facebook fa-2x"})]),n("a",{attrs:{href:"http://github.com/WisdomSky"}},[n("i",{staticClass:"fab fa-github fa-2x"})])])}],V={},D=V,R=(n("ypze"),Object(c["a"])(D,A,M,!1,null,null,null)),T=R.exports,U=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"about"},[n("back"),n("div",{staticClass:"about-content"},[t._v("Not yet pls I'm still not ready :S")])],1)},X=[],B={},J=B,K=(n("8m3A"),Object(c["a"])(J,U,X,!1,null,null,null)),F=K.exports;i["a"].use(u["a"]);var Z=new u["a"]({mode:"history",routes:[{path:"/",name:"index",component:T},{path:"/photography",name:"photography",component:I},{path:"/about",name:"about",component:F}]}),q=n("L2JU");i["a"].use(q["a"]);var G=new q["a"].Store({state:{},mutations:{},actions:{}}),N=(n("KKXr"),n("/Rx4")),Q=n("DvLQ"),Y=n("8Mgg"),tt=n("iCx9"),et=function(t){return{props:{src:[String,Object],tag:{type:String,default:"img"}},render:function(t){return t(this.tag,{attrs:{src:this.renderSrc}},this.$slots.default)},data:function(){return{el:null,options:{src:"",error:"",loading:"",attempt:t.options.attempt},state:{loaded:!1,error:!1,attempt:0},rect:{},renderSrc:""}},watch:{src:function(){this.init(),t.addLazyBox(this),t.lazyLoadHandler()}},created:function(){this.init(),this.renderSrc=this.options.loading},mounted:function(){this.el=this.$el,t.addLazyBox(this),t.lazyLoadHandler()},beforeDestroy:function(){t.removeComponent(this)},methods:{init:function(){var e=t._valueFormatter(this.src),n=e.src,i=e.loading,o=e.error;this.state.loaded=!1,this.options.src=n,this.options.error=o,this.options.loading=i,this.renderSrc=this.options.loading},getRect:function(){this.rect=this.$el.getBoundingClientRect()},checkInView:function(){return this.getRect(),tt["j"]&&this.rect.top<window.innerHeight*t.options.preLoad&&this.rect.bottom>0&&this.rect.left<window.innerWidth*t.options.preLoad&&this.rect.right>0},load:function(){var e=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:tt["n"];if(this.state.attempt>this.options.attempt-1&&this.state.error)return t.options.silent||console.log("VueLazyload log: ".concat(this.options.src," tried too more than ").concat(this.options.attempt," times")),void n();var i=this.options.src;this.$emit("loading",{src:i}),Object(tt["l"])({src:i},function(t){var n=t.src;e.renderSrc=n,e.state.loaded=!0,e.$emit("loaded",{src:n})},function(t){e.state.attempt++,e.renderSrc=e.options.error,e.state.error=!0,e.$emit("error",{src:i,error:t})})}}}},nt={install:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=Object(N["a"])(t),i=new n(e),o=new Y["a"]({lazy:i}),a="2"===t.version.split(".")[0];t.prototype.$Lazyload=i,e.lazyComponent&&t.component("lazy-component",Object(Q["a"])(i)),e.lazyImage&&t.component("lazy-image",et(i)),a?(t.directive("lazy",{bind:i.add.bind(i),update:i.update.bind(i),componentUpdated:i.lazyLoadHandler.bind(i),unbind:i.remove.bind(i)}),t.directive("lazy-container",{bind:o.bind.bind(o),update:o.update.bind(o),unbind:o.unbind.bind(o)})):(t.directive("lazy",{bind:i.lazyLoadHandler.bind(i),update:function(t,e){Object(tt["e"])(this.vm.$refs,this.vm.$els),i.add(this.el,{modifiers:this.modifiers||{},arg:this.arg,value:t,oldValue:e},{context:this.vm})},unbind:function(){i.remove(this.el)}}),t.directive("lazy-container",{update:function(t,e){o.update(this.el,{modifiers:this.modifiers||{},arg:this.arg,value:t,oldValue:e},{context:this.vm})},unbind:function(){o.unbind(this.el)}}))}},it=n("chKg"),ot=n.n(it),at=(n("36R9"),n("ANP9")),st=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("router-link",{staticClass:"go-back",attrs:{to:"/"}},[t._v("< Go back")])},rt=[],ct=(n("PAXp"),{}),dt=Object(c["a"])(ct,st,rt,!1,null,null,null),lt=dt.exports;i["a"].config.productionTip=!1,i["a"].use(nt,{lazyImage:!0}),i["a"].use(ot.a),i["a"].component("spinner",at["a"]),i["a"].component("back",lt),new i["a"]({router:Z,store:G,render:function(t){return t(l)}}).$mount("#app"),window.WS_VERSION="1.0.0"},WT0A:function(t,e,n){"use strict";var i=n("gZWw"),o=n.n(i);o.a},XAuw:function(t,e,n){"use strict";var i=n("EG/1"),o=n.n(i);o.a},gZWw:function(t,e,n){},sykF:function(t,e,n){},ypze:function(t,e,n){"use strict";var i=n("3548"),o=n.n(i);o.a}}]);
//# sourceMappingURL=chunk-common.168da1ed.js.map