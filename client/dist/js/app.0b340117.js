(function(e){function t(t){for(var r,c,i=t[0],u=t[1],l=t[2],s=0,d=[];s<i.length;s++)c=i[s],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&d.push(a[c][0]),a[c]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);b&&b(t);while(d.length)d.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,c=1;c<n.length;c++){var i=n[c];0!==a[i]&&(r=!1)}r&&(o.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},c={app:0},a={app:0},o=[];function i(e){return u.p+"js/"+({about:"about"}[e]||e)+"."+{about:"19339201","chunk-1fcb664c":"3328e54d","chunk-2446ee9b":"d587195f","chunk-2d0a4246":"23e1e6b7","chunk-2d0bd246":"468d65fb","chunk-2d0f1193":"e4a3bf73","chunk-2d207fb4":"5480a409","chunk-5c0cf62e":"dd406341","chunk-afdfd584":"28b53592","chunk-b5ec7f7a":"b2840bdb","chunk-2d0bac97":"0972b8f3","chunk-2d0cedd0":"62ce481c"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={"chunk-1fcb664c":1,"chunk-2446ee9b":1,"chunk-5c0cf62e":1,"chunk-afdfd584":1,"chunk-b5ec7f7a":1};c[e]?t.push(c[e]):0!==c[e]&&n[e]&&t.push(c[e]=new Promise((function(t,n){for(var r="css/"+({about:"about"}[e]||e)+"."+{about:"31d6cfe0","chunk-1fcb664c":"88fe666d","chunk-2446ee9b":"e1304d90","chunk-2d0a4246":"31d6cfe0","chunk-2d0bd246":"31d6cfe0","chunk-2d0f1193":"31d6cfe0","chunk-2d207fb4":"31d6cfe0","chunk-5c0cf62e":"7ed08d4e","chunk-afdfd584":"b53be8f6","chunk-b5ec7f7a":"8e0edc32","chunk-2d0bac97":"31d6cfe0","chunk-2d0cedd0":"31d6cfe0"}[e]+".css",a=u.p+r,o=document.getElementsByTagName("link"),i=0;i<o.length;i++){var l=o[i],s=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(s===r||s===a))return t()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){l=d[i],s=l.getAttribute("data-href");if(s===r||s===a)return t()}var b=document.createElement("link");b.rel="stylesheet",b.type="text/css",b.onload=t,b.onerror=function(t){var r=t&&t.target&&t.target.src||a,o=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=r,delete c[e],b.parentNode.removeChild(b),n(o)},b.href=a;var f=document.getElementsByTagName("head")[0];f.appendChild(b)})).then((function(){c[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var o=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=o);var l,s=document.createElement("script");s.charset="utf-8",s.timeout=120,u.nc&&s.setAttribute("nonce",u.nc),s.src=i(e);var d=new Error;l=function(t){s.onerror=s.onload=null,clearTimeout(b);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+c+")",d.name="ChunkLoadError",d.type=r,d.request=c,n[1](d)}a[e]=void 0}};var b=setTimeout((function(){l({type:"timeout",target:s})}),12e4);s.onerror=s.onload=l,document.head.appendChild(s)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/",u.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var b=s;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"380f":function(e,t,n){"use strict";n("555c")},"555c":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("d3b7");var r=n("7a23"),c=Object(r["G"])("data-v-5c774ea5"),a=c((function(e,t,n,c,a,o){var i=Object(r["x"])("Header"),u=Object(r["x"])("router-view");return Object(r["q"])(),Object(r["d"])("div",null,[Object(r["h"])(i),Object(r["h"])(u)])})),o={class:"navbar navbar-expand-lg navbar-light bg-light "},i={class:"container-fluid ml-4"},u=Object(r["h"])("img",{class:"",src:"/techarticlelogo.png",alt:"",width:"170",height:"50"},null,-1),l=Object(r["h"])("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarTogglerDemo01","aria-controls":"navbarTogglerDemo01","aria-expanded":"false","aria-label":"Toggle navigation"},[Object(r["h"])("span",{class:"navbar-toggler-icon"})],-1),s={key:0,class:"collapse  navbar-collapse",id:"navbarTogglerDemo01"},d={class:"navbar-nav me-auto mb-2 mb-lg-0"},b={class:"nav-item"},f=Object(r["g"])(" Home "),m={class:"navbar-nav mb-2 mb-lg-0"},p={class:"nav-item"},h=Object(r["h"])("i",{class:"ion-compose"},null,-1),g=Object(r["g"])("Sign in "),j={class:"nav-item"},O=Object(r["h"])("i",{class:"ion-compose"},null,-1),v=Object(r["g"])("Signup "),w={key:1,class:"collapse  navbar-collapse ml-4",id:"navbarTogglerDemo01"},y={class:"navbar-nav me-auto mb-2 mb-lg-0"},k={class:"nav-item"},x=Object(r["g"])(" Home "),A={class:"navbar-nav mb-2 mb-lg-0"},E={class:"nav-item"},S=Object(r["g"])(" New Article "),_={class:"nav-item"},L={class:"navbar-nav ml-4 pl-4 mb-2 mb-lg-0"},q={class:"nav-item dropdown "},T={class:"nav-link dropdown-toggle",href:"#",id:"navbarDropdownMenuLink",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false"},R={class:"mr-2 d-none d-lg-inline text-gray-600 small"},C={class:"dropdown-menu dropdown-menu-end","aria-labelledby":"navbarDropdownMenuLink"},P={class:"dropdown-item"},U=Object(r["g"])(" Settings "),D={class:"dropdown-item"};function I(e,t,n,c,a,I){var N=Object(r["x"])("router-link");return Object(r["q"])(),Object(r["d"])("div",null,[Object(r["h"])("nav",o,[Object(r["h"])("div",i,[Object(r["h"])(N,{class:"navbar-brand",to:"/"},{default:Object(r["D"])((function(){return[u]})),_:1}),l,e.loggedIn?(Object(r["q"])(),Object(r["d"])("div",w,[Object(r["h"])("ul",y,[Object(r["h"])("li",k,[Object(r["h"])(N,{class:"nav-link","active-class":"active",exact:"",to:"/"},{default:Object(r["D"])((function(){return[x]})),_:1})])]),Object(r["h"])("ul",A,[Object(r["h"])("li",E,[Object(r["h"])(N,{class:"nav-link","active-class":"active",to:"/article-create"},{default:Object(r["D"])((function(){return[S]})),_:1})]),Object(r["h"])("li",_,[Object(r["h"])("ul",L,[Object(r["h"])("li",q,[Object(r["h"])("a",T,[Object(r["h"])("span",R,Object(r["z"])(e.userName),1)]),Object(r["h"])("ul",C,[Object(r["h"])("li",null,[Object(r["h"])("a",P,[Object(r["h"])(N,{class:"nav-link","active-class":"active",exact:"",to:"/settings"},{default:Object(r["D"])((function(){return[U]})),_:1})])]),Object(r["h"])("li",null,[Object(r["h"])("a",D,[Object(r["h"])(N,{to:{name:"profile",params:{username:e.userName}},class:"nav-link link-list","active-class":"active"},{default:Object(r["D"])((function(){return[Object(r["g"])(Object(r["z"])(e.userName),1)]})),_:1},8,["to"])])]),Object(r["h"])("li",null,[Object(r["h"])("a",{class:"dropdown-item pl-2",onClick:t[1]||(t[1]=function(){return I.logout&&I.logout.apply(I,arguments)})}," Logout ")])])])])])])])):(Object(r["q"])(),Object(r["d"])("div",s,[Object(r["h"])("ul",d,[Object(r["h"])("li",b,[Object(r["h"])(N,{class:"nav-link","active-class":"active",exact:"",to:"/"},{default:Object(r["D"])((function(){return[f]})),_:1})])]),Object(r["h"])("ul",m,[Object(r["h"])("li",p,[Object(r["h"])(N,{class:"nav-link","active-class":"active",exact:"",to:"/login"},{default:Object(r["D"])((function(){return[h,g]})),_:1})]),Object(r["h"])("li",j,[Object(r["h"])(N,{class:"nav-link","active-class":"active",exact:"",to:"/register"},{default:Object(r["D"])((function(){return[O,v]})),_:1})])])]))])])])}var N=n("5530"),B=n("d634"),V={name:"Header",data:function(){return{name:null}},computed:Object(N["a"])(Object(N["a"])({},B["d"]),B["i"]),methods:{logout:function(){this.$store.dispatch("logout"),this.$router.push({name:"Home"}),this.$forceUpdate()},check:function(){console.log("UserName: ".concat(this.userName))}}};V.render=I;var H=V,$={name:"App",components:{Header:H}};$.render=a,$.__scopeId="data-v-5c774ea5";var F=$,M=(n("3ca3"),n("ddb0"),n("6c02")),z=(n("b0c0"),Object(r["G"])("data-v-6fc82ec0"));Object(r["t"])("data-v-6fc82ec0");var G={class:"form-signin"},J=Object(r["h"])("img",{class:"mb-4",src:"/techarticlelogo.png",alt:"",width:"170",height:"57"},null,-1),W=Object(r["h"])("h1",{class:"h3 mb-3 fw-normal"},"Sign Up",-1),K=Object(r["g"])("Already have an account? "),Q=Object(r["g"])(" Sign in "),X={key:0},Y={class:"form-floating pb-2"},Z=Object(r["h"])("label",{for:"floatingInput"},"Name",-1),ee={class:"form-floating pb-2"},te=Object(r["h"])("label",{for:"floatingInput"},"User Name",-1),ne={class:"form-floating pb-2"},re=Object(r["h"])("label",{for:"floatingInput"},"Email address",-1),ce={class:"form-floating pb-2"},ae=Object(r["h"])("label",{for:"floatingPassword"},"Password",-1),oe=Object(r["h"])("div",{class:"checkbox mb-3"},[Object(r["h"])("label",null,[Object(r["h"])("input",{type:"checkbox",value:"remember-me"}),Object(r["g"])(" Remember me ")])],-1),ie=Object(r["h"])("button",{class:"w-100 btn btn-lg btn-primary",type:"submit"},"Sign Up",-1);Object(r["r"])();var ue=z((function(e,t,n,c,a,o){var i=Object(r["x"])("router-link");return Object(r["q"])(),Object(r["d"])("main",G,[Object(r["h"])("form",{onSubmit:t[5]||(t[5]=Object(r["F"])((function(){return o.register&&o.register.apply(o,arguments)}),["prevent"]))},[J,W,Object(r["h"])("p",null,[K,Object(r["h"])(i,{to:"/login"},{default:z((function(){return[Q]})),_:1})]),a.errors&&a.errors.length?(Object(r["q"])(),Object(r["d"])("div",X,[(Object(r["q"])(!0),Object(r["d"])(r["a"],null,Object(r["w"])(a.errors,(function(e,t){return Object(r["q"])(),Object(r["d"])("div",{class:"alert alert-warning",role:"alert",key:t},Object(r["z"])(e),1)})),128))])):Object(r["e"])("",!0),Object(r["h"])("div",Y,[Object(r["E"])(Object(r["h"])("input",{type:"text","onUpdate:modelValue":t[1]||(t[1]=function(e){return a.user.name=e}),class:"form-control",id:"name",name:"name",placeholder:"name"},null,512),[[r["B"],a.user.name]]),Z]),Object(r["h"])("div",ee,[Object(r["E"])(Object(r["h"])("input",{type:"text","onUpdate:modelValue":t[2]||(t[2]=function(e){return a.user.username=e}),class:"form-control",id:"username",name:"username",placeholder:"UserName"},null,512),[[r["B"],a.user.username]]),te]),Object(r["h"])("div",ne,[Object(r["E"])(Object(r["h"])("input",{type:"email","onUpdate:modelValue":t[3]||(t[3]=function(e){return a.user.email=e}),class:"form-control",id:"email",name:"email",placeholder:"name@example.com"},null,512),[[r["B"],a.user.email]]),re]),Object(r["h"])("div",ce,[Object(r["E"])(Object(r["h"])("input",{type:"password","onUpdate:modelValue":t[4]||(t[4]=function(e){return a.user.password=e}),class:"form-control",id:"password",name:"password",placeholder:"Password"},null,512),[[r["B"],a.user.password]]),ae]),oe,ie],32)])})),le={data:function(){return{user:{email:void 0,username:null,password:null,name:null},repns:null,errors:[]}},methods:{register:function(){var e=this;this.$store.dispatch("register",{email:this.user.email,password:this.user.password,name:this.user.name,username:this.user.username}).then((function(t){e.repns=t,e.$router.push({name:"Home"})})).catch((function(t){console.log("Etyrror: ".concat(t)),e.errors.push(t.response)}))}}};n("9155");le.render=ue,le.__scopeId="data-v-6fc82ec0";var se=le,de=Object(r["G"])("data-v-14c05c0a");Object(r["t"])("data-v-14c05c0a");var be={class:"form-signin"},fe=Object(r["h"])("img",{class:"mb-4",src:"/techarticlelogo.png",alt:"",width:"170",height:"57"},null,-1),me=Object(r["h"])("h1",{class:"h3 mb-3 fw-normal"},"Please sign in",-1),pe={key:0},he={class:"form-floating pb-2"},ge=Object(r["h"])("label",{for:"floatingInput"},"Email address",-1),je={class:"form-floating pb-2"},Oe=Object(r["h"])("label",{for:"floatingPassword"},"Password",-1),ve=Object(r["h"])("div",{class:"checkbox mb-3"},[Object(r["h"])("label",null,[Object(r["h"])("input",{type:"checkbox",value:"remember-me"}),Object(r["g"])(" Remember me ")])],-1),we=Object(r["h"])("button",{class:"w-100 btn btn-lg btn-primary",type:"submit"},"Sign in",-1);Object(r["r"])();var ye=de((function(e,t,n,c,a,o){return Object(r["q"])(),Object(r["d"])("main",be,[Object(r["h"])("form",{onSubmit:t[3]||(t[3]=Object(r["F"])((function(){return o.Login&&o.Login.apply(o,arguments)}),["prevent"]))},[fe,me,a.errors&&a.errors.length?(Object(r["q"])(),Object(r["d"])("div",pe,[(Object(r["q"])(!0),Object(r["d"])(r["a"],null,Object(r["w"])(a.errors,(function(e,t){return Object(r["q"])(),Object(r["d"])("div",{class:"alert alert-warning",role:"alert",key:t},Object(r["z"])(e),1)})),128))])):Object(r["e"])("",!0),Object(r["h"])("div",he,[Object(r["E"])(Object(r["h"])("input",{type:"email","onUpdate:modelValue":t[1]||(t[1]=function(e){return a.user.email=e}),class:"form-control",id:"email",name:"email",placeholder:"email"},null,512),[[r["B"],a.user.email]]),ge]),Object(r["h"])("div",je,[Object(r["E"])(Object(r["h"])("input",{type:"password","onUpdate:modelValue":t[2]||(t[2]=function(e){return a.user.password=e}),class:"form-control",id:"password",name:"password",placeholder:"Password"},null,512),[[r["B"],a.user.password]]),Oe]),ve,we],32)])})),ke={data:function(){return{user:{email:void 0,password:null},repns:null,errors:[]}},methods:{Login:function(){var e=this;this.$store.dispatch("login",{email:this.user.email,password:this.user.password}).then((function(){console.log("success"),e.$router.push({name:"Home"})})).catch((function(t){console.log("Etyrror: ".concat(t.response.data)),e.errors=[],e.errors.push(t.response.data)}))}}};n("380f");ke.render=ye,ke.__scopeId="data-v-14c05c0a";var xe=ke,Ae=(n("a4d3"),n("e01a"),Object(r["G"])("data-v-0df87aa4"));Object(r["t"])("data-v-0df87aa4");var Ee={class:"container pt-4"},Se={class:"create-article  container"},_e=Object(r["h"])("h1",null,"Create Article",-1),Le={key:0},qe={class:"form-floating pb-2"},Te=Object(r["h"])("label",{for:"floatingInput"},"Title",-1),Re={class:"form-floating pb-2"},Ce=Object(r["h"])("label",{for:"floatingInput"},"Description",-1),Pe={class:" pb-2"},Ue={class:"form-floating pb-2"},De=Object(r["h"])("label",{for:"floatingInput"},"tagList",-1),Ie=Object(r["h"])("button",{class:"btn btn-lg pull-xs-right btn-primary",type:"submit"}," Create Article ",-1);Object(r["r"])();var Ne=Ae((function(e,t,n,c,a,o){return Object(r["q"])(),Object(r["d"])("div",null,[Object(r["h"])("div",Ee,[Object(r["h"])("div",Se,[_e,Object(r["h"])("form",{onSubmit:t[5]||(t[5]=Object(r["F"])((function(){return o.createArticle&&o.createArticle.apply(o,arguments)}),["prevent"])),class:"form-floating"},[a.errors&&a.errors.length?(Object(r["q"])(),Object(r["d"])("div",Le,[(Object(r["q"])(!0),Object(r["d"])(r["a"],null,Object(r["w"])(a.errors,(function(e,t){return Object(r["q"])(),Object(r["d"])("div",{class:"alert alert-warning",role:"alert",key:t},Object(r["z"])(e),1)})),128))])):Object(r["e"])("",!0),Object(r["h"])("div",qe,[Object(r["E"])(Object(r["h"])("input",{type:"text","onUpdate:modelValue":t[1]||(t[1]=function(e){return a.article.title=e}),class:"form-control",id:"title",name:"title",placeholder:"title"},null,512),[[r["B"],a.article.title]]),Te]),Object(r["h"])("div",Re,[Object(r["E"])(Object(r["h"])("input",{type:"text","onUpdate:modelValue":t[2]||(t[2]=function(e){return a.article.description=e}),class:"form-control",id:"description",name:"description",placeholder:"description"},null,512),[[r["B"],a.article.description]]),Ce]),Object(r["h"])("div",Pe,[Object(r["E"])(Object(r["h"])("textarea",{class:"form-control",rows:"8","onUpdate:modelValue":t[3]||(t[3]=function(e){return a.article.body=e}),placeholder:"Write your article here"},"\r\n                       ",512),[[r["B"],a.article.body]])]),Object(r["h"])("div",Ue,[Object(r["E"])(Object(r["h"])("input",{type:"text","onUpdate:modelValue":t[4]||(t[4]=function(e){return a.article.tagList=e}),class:"form-control",id:"tagList",name:"tagList",placeholder:"tagList"},null,512),[[r["B"],a.article.tagList]]),De]),Ie],32)])])])})),Be={data:function(){return{article:{title:null,body:null,description:null,tagList:null},repns:null,errors:[]}},methods:{createArticle:function(){var e=this;this.$store.dispatch("createArticle",{title:this.article.title,body:this.article.body,description:this.article.description,tagList:this.article.tagList}).then((function(t){e.repns=t,console.log("Response---".concat(t)),e.$router.push({name:"Home"})})).catch((function(t){console.log("erros: - ".concat(t)),e.errors=[],e.errors.push(t.response.data)}))}}};n("5f78");Be.render=Ne,Be.__scopeId="data-v-0df87aa4";var Ve,He,$e,Fe=Be,Me=[{path:"/",component:function(){return n.e("chunk-afdfd584").then(n.bind(null,"bb51"))},children:[{path:"",name:"Home",component:function(){return Promise.all([n.e("chunk-b5ec7f7a"),n.e("chunk-2d0bac97")]).then(n.bind(null,"3961"))}},{path:"my-feed",name:"home-my-feed",component:function(){return n.e("chunk-2d207fb4").then(n.bind(null,"a39e"))}},{path:"tag/:tag",name:"home-tag",component:function(){return Promise.all([n.e("chunk-b5ec7f7a"),n.e("chunk-2d0cedd0")]).then(n.bind(null,"60ee"))}}]},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/login",name:"login",component:xe},{name:"settings",path:"/settings",component:function(){return n.e("chunk-1fcb664c").then(n.bind(null,"26d3"))}},{path:"/profile/:username",component:function(){return n.e("chunk-2446ee9b").then(n.bind(null,"c66d"))},children:[{path:"",name:"profile",component:function(){return n.e("chunk-2d0f1193").then(n.bind(null,"9ed5"))}},{name:"profile-favorites",path:"favorites",component:function(){return n.e("chunk-2d0bd246").then(n.bind(null,"2b77"))}}]},{path:"/register",name:"register",component:se},{path:"/articles",name:"articles",component:Fe},{path:"/article-create",name:"article-create",component:Fe},{path:"/article/:slug",name:"article-show",component:function(){return n.e("chunk-5c0cf62e").then(n.bind(null,"1c6c"))},props:!0},{path:"/editor/:slug?",name:"article-edit",props:!0,component:function(){return n.e("chunk-2d0a4246").then(n.bind(null,"04d0"))}}],ze=Object(M["a"])({history:Object(M["b"])(),routes:Me}),Ge=ze,Je=n("5502"),We=n("bc3a"),Ke=n.n(We),Qe={state:{user:null},mutations:{SET_USER_DATA:function(e,t){e.user=t,localStorage.setItem("user",JSON.stringify(t)),Ke.a.defaults.headers.common["Authorization"]="Bearer ".concat(t.token)},CLEAR_USER_DATA:function(){localStorage.removeItem("user"),location.reload()}},actions:{register:function(e,t){var n=e.commit;return Ke.a.post("/api/auth/register",t).then((function(e){var t=e.data;console.log("".concat(t)),n("SET_USER_DATA",t)}))},login:function(e,t){var n=e.commit;return Ke.a.post("/api/auth/login",t).then((function(e){var t=e.data;n("SET_USER_DATA",t)}))},logout:function(e){var t=e.commit;t("CLEAR_USER_DATA")},createArticle:function(e,t){var n=e.commit;return Ke.a.post("/api/article/create",t).then((function(e){var t=e.data;console.log("".concat(t)),console.log(n)}))}},getters:{loggedIn:function(e){return e.user},userName:function(e){return e.user.username}}},Xe=n("ade3"),Ye=n("1da1"),Ze=(n("99af"),n("4de4"),n("d81d"),n("96cf"),{query:function(e,t){return Ke.a.get(e,t).catch((function(e){throw console.log("error is here8989--\x3e ".concat(e)),new Error("[RWV] ApiService ".concat(e))}))},get:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return Ke.a.get("".concat(e,"/").concat(t)).catch((function(e){throw new Error("[RWV] ApiService ".concat(e))}))},post:function(e,t){return Ke.a.post("".concat(e),t)},update:function(e,t,n){return Ke.a.put("".concat(e,"/").concat(t),n)},put:function(e,t){return Ke.a.put("".concat(e),t)},delete:function(e){return Ke.a.delete(e).catch((function(e){throw new Error("[RWV] ApiService ".concat(e))}))}}),et=Ze,tt={get:function(){return Ze.get("/api/tags")}},nt={query:function(e,t){return console.log("error is here-000-> ".concat(t)),console.dir(t),Ze.query("/api/article/articles",{params:t})},queryByglobal:function(e,t){return console.log("error is here-123-> ".concat(t)),Ze.query("/api/articles",{params:t})},queryByfavorite:function(e,t){return Ze.query("/api/articles"+("feed"===e?"/feed":""),{params:t})},get:function(e){return Ze.get("/api/article",e)},create:function(e){return Ze.post("/api/articles",{article:e})},update:function(e,t){return Ze.update("/api/articles",e,{article:t})},destroy:function(e){return Ze.delete("/api/articles/".concat(e))}},rt={get:function(e){if("string"!==typeof e)throw new Error("article slug required to fetch comments");return Ze.get("/api/article/articles/".concat(e,"/comments"))},post:function(e,t){return Ze.post("/api/article/articles/".concat(e,"/comments"),{comment:{body:t}})},destroy:function(e,t){return Ze.delete("/api/articles/".concat(e,"/comments/").concat(t))}},ct={add:function(e){return Ze.post("/api/article/articles/".concat(e,"/favorite"))},remove:function(e){return Ze.delete("/api/article/articles/".concat(e,"/favorite"))}},at=n("6c33"),ot="setArticles",it="setLoading",ut="setArticle",lt="setComments",st="setProfile",dt="setTags",bt="addTag",ft="removeTag",mt="updateArticleInList",pt="resetModuleState",ht={state:function(){return{article:{author:{},title:"",description:"",body:"",tagList:[]},tags:[],articles:[],isLoading:!0,articlesCount:0,comments:[]}},actions:(Ve={},Object(Xe["a"])(Ve,at["k"],(function(e,t,n){return Object(Ye["a"])(regeneratorRuntime.mark((function r(){var c,a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(void 0===n){r.next=2;break}return r.abrupt("return",e.commit(ut,n));case 2:return r.next=4,nt.get(t);case 4:return c=r.sent,a=c.data,e.commit(ut,a.article),console.dir(a),console.log("data:--- ".concat(a.article.title)),r.abrupt("return",a);case 10:case"end":return r.stop()}}),r)})))()})),Object(Xe["a"])(Ve,at["m"],(function(e,t){return Object(Ye["a"])(regeneratorRuntime.mark((function n(){var r,c;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,rt.get(t);case 2:return r=n.sent,c=r.data,e.commit(lt,c.comments),n.abrupt("return",c.comments);case 6:case"end":return n.stop()}}),n)})))()})),Object(Xe["a"])(Ve,at["g"],(function(e,t){return Object(Ye["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,rt.post(t.slug,t.comment);case 2:e.dispatch(at["m"],t.slug);case 3:case"end":return n.stop()}}),n)})))()})),Object(Xe["a"])(Ve,at["h"],(function(e,t){return Object(Ye["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,rt.destroy(t.slug,t.commentId);case 2:e.dispatch(at["m"],t.slug);case 3:case"end":return n.stop()}}),n)})))()})),Object(Xe["a"])(Ve,at["i"],(function(e,t){return Object(Ye["a"])(regeneratorRuntime.mark((function n(){var r,c;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,ct.add(t);case 2:r=n.sent,c=r.data,e.commit(mt,c.article,{root:!0}),e.commit(ut,c.article);case 6:case"end":return n.stop()}}),n)})))()})),Object(Xe["a"])(Ve,at["j"],(function(e,t){return Object(Ye["a"])(regeneratorRuntime.mark((function n(){var r,c;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,ct.remove(t);case 2:r=n.sent,c=r.data,e.commit(mt,c.article,{root:!0}),e.commit(ut,c.article);case 6:case"end":return n.stop()}}),n)})))()})),Object(Xe["a"])(Ve,at["e"],(function(e){var t=e.state;return nt.create(t.article)})),Object(Xe["a"])(Ve,at["a"],(function(e,t){return nt.destroy(t)})),Object(Xe["a"])(Ve,at["b"],(function(e){var t=e.state;return nt.update(t.article.slug,t.article)})),Object(Xe["a"])(Ve,at["c"],(function(e,t){e.commit(bt,t)})),Object(Xe["a"])(Ve,at["d"],(function(e,t){e.commit(ft,t)})),Object(Xe["a"])(Ve,at["f"],(function(e){var t=e.commit;t(pt)})),Object(Xe["a"])(Ve,at["l"],(function(e,t){var n=e.commit;return n(it),t.filters.author?nt.query(t.type,t.filters).then((function(e){var t=e.data;n(ot,t)})).catch((function(e){throw new Error(e)})):t.filters.tag?nt.query(t.type,t.filters).then((function(e){var t=e.data;n(ot,t)})).catch((function(e){throw new Error(e)})):t.filters.favorited?nt.queryByfavorited(t.type,t.filters).then((function(e){var t=e.data;n(ot,t)})).catch((function(e){throw new Error(e)})):nt.query(t.type,t.filters).then((function(e){var t=e.data;n(ot,t)})).catch((function(e){throw new Error(e)}))})),Object(Xe["a"])(Ve,at["q"],(function(e){var t=e.commit;return tt.get().then((function(e){var n=e.data;t(dt,n.tags)})).catch((function(e){throw new Error(e)}))})),Ve),mutations:(He={},Object(Xe["a"])(He,ut,(function(e,t){e.article=t})),Object(Xe["a"])(He,lt,(function(e,t){e.comments=t})),Object(Xe["a"])(He,bt,(function(e,t){e.article.tagList=e.article.tagList.concat([t])})),Object(Xe["a"])(He,ft,(function(e,t){e.article.tagList=e.article.tagList.filter((function(e){return e!==t}))})),Object(Xe["a"])(He,pt,(function(e){for(var t in e)t.article=null})),Object(Xe["a"])(He,it,(function(e){e.isLoading=!0})),Object(Xe["a"])(He,ot,(function(e,t){var n=t.articles,r=t.articlesCount;e.articles=n,e.articlesCount=r,e.isLoading=!1})),Object(Xe["a"])(He,dt,(function(e,t){e.tags=t})),Object(Xe["a"])(He,mt,(function(e,t){e.articles=e.articles.map((function(e){return e.slug!==t.slug||(e.favorited=t.favorited,e.favoritesCount=t.favoritesCount),e}))})),He),getters:{article:function(e){return e.article},comments:function(e){return e.comments},articlesCount:function(e){return e.articlesCount},articles:function(e){return e.articles},isLoading:function(e){return e.isLoading},tags:function(e){return e.tags}}},gt={state:{errors:{},profile:{}},getters:{profile:function(e){return e.profile}},actions:($e={},Object(Xe["a"])($e,at["n"],(function(e,t){return et.get("/api/profile",t).then((function(t){var n=t.data;return e.commit(st,n),n})).catch((function(e){console.log(e)}))})),Object(Xe["a"])($e,at["o"],(function(e,t){var n=t.username;return et.post("/api/profile/".concat(n,"/follow")).then((function(t){var n=t.data;return e.commit(st,n.profile),n})).catch((function(){}))})),Object(Xe["a"])($e,at["p"],(function(e,t){var n=t.username;return et.delete("/api/profile/".concat(n,"/follow")).then((function(t){var n=t.data;return e.commit(st,n.profile),n})).catch((function(){}))})),$e),mutations:Object(Xe["a"])({},st,(function(e,t){e.profile=t,e.errors={}}))},jt=Object(Je["a"])({modules:{a:Qe,b:ht,profile:gt}});n("ab8b"),n("7b17"),n("7884");Object(r["c"])({created:function(){var e=this,t=localStorage.getItem("user");if(t){var n=JSON.parse(t);this.$store.commit("SET_USER_DATA",n)}Ke.a.interceptors.response.use((function(e){return e}),(function(t){return 401===t.response.status&&e.$store.dispatch("logout"),Promise.reject(t)}))},render:function(){return Object(r["k"])(F)}}).use(jt).use(Ge).mount("#app")},"5f78":function(e,t,n){"use strict";n("9dea")},"6c33":function(e,t,n){"use strict";n.d(t,"e",(function(){return r})),n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return o})),n.d(t,"d",(function(){return i})),n.d(t,"f",(function(){return u})),n.d(t,"g",(function(){return l})),n.d(t,"h",(function(){return s})),n.d(t,"i",(function(){return d})),n.d(t,"j",(function(){return b})),n.d(t,"k",(function(){return f})),n.d(t,"l",(function(){return m})),n.d(t,"m",(function(){return p})),n.d(t,"n",(function(){return h})),n.d(t,"o",(function(){return g})),n.d(t,"p",(function(){return j})),n.d(t,"q",(function(){return O}));var r="publishArticle",c="deleteArticle",a="editArticle",o="addTagToArticle",i="removeTagFromArticle",u="resetArticleState",l="createComment",s="destroyComment",d="addFavorite",b="removeFavorite",f="fetchArticle",m="fetchArticles",p="fetchComments",h="fetchProfile",g="fetchProfileFollow",j="fetchProfileUnfollow",O="fetchTags"},7884:function(e,t,n){},9155:function(e,t,n){"use strict";n("ac1d")},"9dea":function(e,t,n){},ac1d:function(e,t,n){},d634:function(e,t,n){"use strict";n.d(t,"d",(function(){return a})),n.d(t,"i",(function(){return o})),n.d(t,"a",(function(){return i})),n.d(t,"c",(function(){return u})),n.d(t,"b",(function(){return l})),n.d(t,"h",(function(){return s})),n.d(t,"f",(function(){return d})),n.d(t,"g",(function(){return b})),n.d(t,"e",(function(){return f}));var r=n("5530"),c=n("5502"),a=Object(r["a"])({},Object(c["b"])(["loggedIn"])),o=Object(r["a"])({},Object(c["b"])(["userName"])),i=Object(r["a"])({},Object(c["b"])(["article"])),u=Object(r["a"])({},Object(c["b"])(["articlesCount"])),l=Object(r["a"])({},Object(c["b"])(["articles"])),s=Object(r["a"])({},Object(c["b"])(["tags"])),d=Object(r["a"])({},Object(c["b"])(["isLoading"])),b=Object(r["a"])({},Object(c["b"])(["profile"])),f=Object(r["a"])({},Object(c["b"])(["comments"]))}});
//# sourceMappingURL=app.0b340117.js.map