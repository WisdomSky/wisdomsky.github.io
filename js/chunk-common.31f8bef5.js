(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[1],{3548:function(t,e,n){},8:function(t,e,n){t.exports=n("Vtdi")},"8m3A":function(t,e,n){"use strict";var o=n("U1HW"),i=n.n(o);i.a},"EG/1":function(t,e,n){},MD2U:function(t,e,n){},PAXp:function(t,e,n){"use strict";var o=n("MD2U"),i=n.n(o);i.a},U1HW:function(t,e,n){},Vtdi:function(t,e,n){"use strict";n.r(e);n("yt8O"),n("VRzm"),n("sykF");var o=n("Kw5r"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},a=[],s={beforeCreate:function(){document.addEventListener("touchmove",function(t){1!==t.scale&&t.preventDefault()},!1)}},r=s,c=(n("XAuw"),n("KHd+")),l=Object(c["a"])(r,i,a,!1,null,null,null),d=l.exports,u=n("jE9Z"),h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("swiper",{ref:"swiper",staticClass:"gallery",attrs:{options:t.options},on:{setTranslate:t.onTranslate}},[n("swiper-slide",{staticClass:"cover",class:{standing:t.windowHeight>t.windowWidth},style:{height:t.windowHeight+"px",width:Math.floor(.8*t.windowWidth)+"px",boxShadow:t.boxShadow}},[n("back"),n("div",{staticClass:"attention-seeker"},[t._v("\n              Photography\n          ")]),n("div",{staticClass:"im-lazy"},[t._v("\n              Is my other hobby...\n          ")]),n("div",{staticClass:"swipe-me"},[t._v("<<< Just drag to left")])],1),t._l(t.photos,function(e,o){return n("swiper-slide",{key:e.id,staticClass:"gallery-item",class:{loaded:e.loaded},style:{height:t.windowHeight+"px",width:t.relativeWidth(e)+"px"}},[e.loaded?t._e():n("spinner",{staticClass:"spinner"}),n("div",{staticClass:"gallery-item-wrapper"},[n("lazy-image",{style:{height:t.windowHeight+"px",width:t.relativeWidth(e)+"px"},attrs:{src:e.urls.full,"data-gallery-item-index":o},on:{loading:function(e){t.loadExif(o)}},nativeOn:{load:function(e){t.load(e.target.src,o)}}})],1),n("transition",{attrs:{name:"slide"}},[e.loaded&&e.info?n("div",{staticClass:"gallery-item-info"},[n("div",{staticClass:"exif"},[t._v("\n                      "+t._s(e.info.exif.model)+" •\n                      ƒ"+t._s(e.info.exif.aperture)+" •\n                      "+t._s(e.info.exif.exposure_time)+" sec •\n                      "+t._s(e.info.exif.focal_length)+"mm •\n                      "+t._s(e.info.exif.iso)+" ISO\n                  ")])]):t._e()])],1)})],2)},p=[],f=n("xmWZ"),m=n("3Aqn"),g=n("qpph"),v=n("0yhX"),b=n("EdlT"),w=n("F/XL"),y=n("0/uQ"),x=n("psW0"),_=n("67Y/"),k=n("vDqi"),z=n.n(k),O="09f59a5b506a27d612abc700a46f52e59d5e8eabfa47320c098a77827c9fc36d",j="https://api.unsplash.com",C=function(){function t(){Object(f["a"])(this,t)}return Object(g["a"])(t,[{key:"endpoint",value:function(t){return"".concat(j,"/").concat(t,"?client_id=").concat(O)}},{key:"get",value:function(t){return Object(w["a"])(this.endpoint(t)).pipe(Object(x["a"])(function(t){return Object(y["a"])(z.a.get(t))}),Object(_["a"])(function(t){var e=t.data;return e}))}}]),t}(),S=new(function(t){function e(){return Object(f["a"])(this,e),Object(v["a"])(this,Object(b["a"])(e).apply(this,arguments))}return Object(g["a"])(e,[{key:"getPhotos",value:function(){return this.get("users/wisdomsky/photos")}},{key:"getPhoto",value:function(t){return this.get("photos/".concat(t))}}]),Object(m["a"])(e,t),e}(C)),$=n("LvDl"),W=n.n($),H={data:function(){return{boxShadowSpread:0,options:{freeMode:!0,spaceBetween:3,slidesPerView:"auto",setWrapperSize:!0,freeModeMomentumBounce:!1,preloadImages:!1,mousewheel:!0},photos:[]}},computed:{windowHeight:function(){return window.innerHeight},windowWidth:function(){return window.innerWidth},boxShadow:function(){var t=.0024671052631578946,e=t*(this.windowWidth-320)+2;return"20px 0 ".concat(100+this.boxShadowSpread/20,"px ").concat(100+this.boxShadowSpread/e,"px rgba(23,23,23,1)")}},created:function(){var t=this;S.getPhotos().subscribe(function(e){t.photos=e})},mounted:function(){this.$Lazyload.$on("loading",function(t,e){console.log(t)})},methods:{load:function(t,e){if(!/^data:.*/.test(t)){var n=this.photos[e];n.loaded=1,this.$set(this.photos,e,n)}},loading:function(t){console.log(t)},relativeWidth:function(t){return Math.floor(this.windowHeight/t.height*t.width)},loadExif:function(t){var e=this,n=this.photos[t];void 0===n.getInfo&&(n.getInfo=W.a.debounce(function(t){var n=e.photos[t];S.getPhoto(n.id).subscribe(function(o){n.info=o,e.$set(e.photos,t,n)})},100),this.$set(this.photos,t,n)),n.getInfo(t)},onTranslate:function(t){this.boxShadowSpread=t}}},L=H,A=(n("WT0A"),Object(c["a"])(L,h,p,!1,null,null,null)),E=A.exports,I=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[t._m(0),n("div",{staticClass:"attention-seeker"},[t._v("\n        Hello, I'm Julian!\n    ")]),n("div",{staticClass:"im-lazy"},[n("router-link",{attrs:{to:"/about"}},[t._v("About Me")]),t._v(" •\n        "),n("router-link",{attrs:{to:"/photography"}},[t._v("Photography")])],1)])},P=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"social-links"},[n("a",{attrs:{href:"https://facebook.com/WisdomSky"}},[n("i",{staticClass:"fab fa-facebook fa-2x"})]),n("a",{attrs:{href:"http://github.com/WisdomSky"}},[n("i",{staticClass:"fab fa-github fa-2x"})])])}],M={},V=M,D=(n("ypze"),Object(c["a"])(V,I,P,!1,null,null,null)),T=D.exports,X=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"about"},[n("back"),n("div",{staticClass:"about-content"},[t._v("Not yet pls I'm still not ready :S")])],1)},B=[],F={},R=F,U=(n("8m3A"),Object(c["a"])(R,X,B,!1,null,null,null)),J=U.exports;o["a"].use(u["a"]);var K=new u["a"]({mode:"history",routes:[{path:"/",name:"index",component:T},{path:"/photography",name:"photography",component:E},{path:"/about",name:"about",component:J}]}),q=n("L2JU");o["a"].use(q["a"]);var N=new q["a"].Store({state:{},mutations:{},actions:{}}),Z=n("lIOY");Object(Z["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},cached:function(){console.log("Content has been cached for offline use.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});n("KKXr");var G=n("/Rx4"),Q=n("DvLQ"),Y=n("8Mgg"),tt=n("iCx9"),et=function(t){return{props:{src:[String,Object],tag:{type:String,default:"img"}},render:function(t){return t(this.tag,{attrs:{src:this.renderSrc}},this.$slots.default)},data:function(){return{el:null,options:{src:"",error:"",loading:"",attempt:t.options.attempt},state:{loaded:!1,error:!1,attempt:0},rect:{},renderSrc:""}},watch:{src:function(){this.init(),t.addLazyBox(this),t.lazyLoadHandler()}},created:function(){this.init(),this.renderSrc=this.options.loading},mounted:function(){this.el=this.$el,t.addLazyBox(this),t.lazyLoadHandler()},beforeDestroy:function(){t.removeComponent(this)},methods:{init:function(){var e=t._valueFormatter(this.src),n=e.src,o=e.loading,i=e.error;this.state.loaded=!1,this.options.src=n,this.options.error=i,this.options.loading=o,this.renderSrc=this.options.loading},getRect:function(){this.rect=this.$el.getBoundingClientRect()},checkInView:function(){return this.getRect(),tt["j"]&&this.rect.top<window.innerHeight*t.options.preLoad&&this.rect.bottom>0&&this.rect.left<window.innerWidth*t.options.preLoad&&this.rect.right>0},load:function(){var e=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:tt["n"];if(this.state.attempt>this.options.attempt-1&&this.state.error)return t.options.silent||console.log("VueLazyload log: ".concat(this.options.src," tried too more than ").concat(this.options.attempt," times")),void n();var o=this.options.src;this.$emit("loading",{src:o}),Object(tt["l"])({src:o},function(t){var n=t.src;e.renderSrc=n,e.state.loaded=!0,e.$emit("loaded",{src:n})},function(t){e.state.attempt++,e.renderSrc=e.options.error,e.state.error=!0,e.$emit("error",{src:o,error:t})})}}}},nt={install:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=Object(G["a"])(t),o=new n(e),i=new Y["a"]({lazy:o}),a="2"===t.version.split(".")[0];t.prototype.$Lazyload=o,e.lazyComponent&&t.component("lazy-component",Object(Q["a"])(o)),e.lazyImage&&t.component("lazy-image",et(o)),a?(t.directive("lazy",{bind:o.add.bind(o),update:o.update.bind(o),componentUpdated:o.lazyLoadHandler.bind(o),unbind:o.remove.bind(o)}),t.directive("lazy-container",{bind:i.bind.bind(i),update:i.update.bind(i),unbind:i.unbind.bind(i)})):(t.directive("lazy",{bind:o.lazyLoadHandler.bind(o),update:function(t,e){Object(tt["e"])(this.vm.$refs,this.vm.$els),o.add(this.el,{modifiers:this.modifiers||{},arg:this.arg,value:t,oldValue:e},{context:this.vm})},unbind:function(){o.remove(this.el)}}),t.directive("lazy-container",{update:function(t,e){i.update(this.el,{modifiers:this.modifiers||{},arg:this.arg,value:t,oldValue:e},{context:this.vm})},unbind:function(){i.unbind(this.el)}}))}},ot=n("chKg"),it=n.n(ot),at=(n("36R9"),n("ANP9")),st=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("router-link",{staticClass:"go-back",attrs:{to:"/"}},[t._v("< Go back")])},rt=[],ct=(n("PAXp"),{}),lt=Object(c["a"])(ct,st,rt,!1,null,null,null),dt=lt.exports;o["a"].config.productionTip=!1,o["a"].use(nt,{lazyImage:!0}),o["a"].use(it.a),o["a"].component("spinner",at["a"]),o["a"].component("back",dt),new o["a"]({router:K,store:N,render:function(t){return t(d)}}).$mount("#app")},WT0A:function(t,e,n){"use strict";var o=n("gZWw"),i=n.n(o);i.a},XAuw:function(t,e,n){"use strict";var o=n("EG/1"),i=n.n(o);i.a},gZWw:function(t,e,n){},sykF:function(t,e,n){},ypze:function(t,e,n){"use strict";var o=n("3548"),i=n.n(o);i.a}}]);
//# sourceMappingURL=chunk-common.31f8bef5.js.map