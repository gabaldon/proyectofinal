(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1011:function(e,t,a){"use strict";a.r(t);var n=a(5),o=a.n(n),r=a(922),s=a.n(r),i=(a(931),a(134)),c=a(74),l=a(92),u=a(94),d=a(93),m=a(95),h=a(119),p=a(290),v=a.n(p),g=function e(){var t=this;Object(c.a)(this,e),this.signup=function(e,a){return t.service.post("signup",{username:e,password:a}).then(function(e){return e.data})},this.login=function(e,a){return t.service.post("login",{username:e,password:a}).then(function(e){return e.data})},this.logout=function(){return t.service.post("logout",{}).then(function(e){return e.data})},this.loggedin=function(){return t.service.get("loggedin").then(function(e){return e.data})},this.service=v.a.create({baseURL:"https://u-voice.herokuapp.com/api/",withCredentials:!0})},f=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).logout=function(){a.service.logout().then(function(e){return a.props.setTheUser(null)})},a.service=new g,a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return this.props.userInSession?o.a.createElement("div",{className:"navBar"},o.a.createElement("h1",null,"Voice"),o.a.createElement("div",{className:"waves"},o.a.createElement("svg",{id:"wave","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 50 38.05"},o.a.createElement("title",null,"Audio Wave"),o.a.createElement("path",{id:"Line_1","data-name":"Line 1",d:"M0.91,15L0.78,15A1,1,0,0,0,0,16v6a1,1,0,1,0,2,0s0,0,0,0V16a1,1,0,0,0-1-1H0.91Z"}),o.a.createElement("path",{id:"Line_2","data-name":"Line 2",d:"M6.91,9L6.78,9A1,1,0,0,0,6,10V28a1,1,0,1,0,2,0s0,0,0,0V10A1,1,0,0,0,7,9H6.91Z"}),o.a.createElement("path",{id:"Line_3","data-name":"Line 3",d:"M12.91,0L12.78,0A1,1,0,0,0,12,1V37a1,1,0,1,0,2,0s0,0,0,0V1a1,1,0,0,0-1-1H12.91Z"}),o.a.createElement("path",{id:"Line_4","data-name":"Line 4",d:"M18.91,10l-0.12,0A1,1,0,0,0,18,11V27a1,1,0,1,0,2,0s0,0,0,0V11a1,1,0,0,0-1-1H18.91Z"}),o.a.createElement("path",{id:"Line_5","data-name":"Line 5",d:"M24.91,15l-0.12,0A1,1,0,0,0,24,16v6a1,1,0,0,0,2,0s0,0,0,0V16a1,1,0,0,0-1-1H24.91Z"}),o.a.createElement("path",{id:"Line_6","data-name":"Line 6",d:"M30.91,10l-0.12,0A1,1,0,0,0,30,11V27a1,1,0,1,0,2,0s0,0,0,0V11a1,1,0,0,0-1-1H30.91Z"}),o.a.createElement("path",{id:"Line_7","data-name":"Line 7",d:"M36.91,0L36.78,0A1,1,0,0,0,36,1V37a1,1,0,1,0,2,0s0,0,0,0V1a1,1,0,0,0-1-1H36.91Z"}),o.a.createElement("path",{id:"Line_8","data-name":"Line 8",d:"M42.91,9L42.78,9A1,1,0,0,0,42,10V28a1,1,0,1,0,2,0s0,0,0,0V10a1,1,0,0,0-1-1H42.91Z"}),o.a.createElement("path",{id:"Line_9","data-name":"Line 9",d:"M48.91,15l-0.12,0A1,1,0,0,0,48,16v6a1,1,0,1,0,2,0s0,0,0,0V16a1,1,0,0,0-1-1H48.91Z"}))),o.a.createElement("div",null,o.a.createElement(h.b,{to:"/post"},"Post")),o.a.createElement("div",{className:"logout-btn",onClick:this.logout},"Cerrar sesi\xf3n")):o.a.createElement("div",{className:"navBar"},o.a.createElement("h1",null,"Voice"),o.a.createElement("div",{className:"waves"},o.a.createElement("svg",{id:"wave","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 50 38.05"},o.a.createElement("title",null,"Audio Wave"),o.a.createElement("path",{id:"Line_1","data-name":"Line 1",d:"M0.91,15L0.78,15A1,1,0,0,0,0,16v6a1,1,0,1,0,2,0s0,0,0,0V16a1,1,0,0,0-1-1H0.91Z"}),o.a.createElement("path",{id:"Line_2","data-name":"Line 2",d:"M6.91,9L6.78,9A1,1,0,0,0,6,10V28a1,1,0,1,0,2,0s0,0,0,0V10A1,1,0,0,0,7,9H6.91Z"}),o.a.createElement("path",{id:"Line_3","data-name":"Line 3",d:"M12.91,0L12.78,0A1,1,0,0,0,12,1V37a1,1,0,1,0,2,0s0,0,0,0V1a1,1,0,0,0-1-1H12.91Z"}),o.a.createElement("path",{id:"Line_4","data-name":"Line 4",d:"M18.91,10l-0.12,0A1,1,0,0,0,18,11V27a1,1,0,1,0,2,0s0,0,0,0V11a1,1,0,0,0-1-1H18.91Z"}),o.a.createElement("path",{id:"Line_5","data-name":"Line 5",d:"M24.91,15l-0.12,0A1,1,0,0,0,24,16v6a1,1,0,0,0,2,0s0,0,0,0V16a1,1,0,0,0-1-1H24.91Z"}),o.a.createElement("path",{id:"Line_6","data-name":"Line 6",d:"M30.91,10l-0.12,0A1,1,0,0,0,30,11V27a1,1,0,1,0,2,0s0,0,0,0V11a1,1,0,0,0-1-1H30.91Z"}),o.a.createElement("path",{id:"Line_7","data-name":"Line 7",d:"M36.91,0L36.78,0A1,1,0,0,0,36,1V37a1,1,0,1,0,2,0s0,0,0,0V1a1,1,0,0,0-1-1H36.91Z"}),o.a.createElement("path",{id:"Line_8","data-name":"Line 8",d:"M42.91,9L42.78,9A1,1,0,0,0,42,10V28a1,1,0,1,0,2,0s0,0,0,0V10a1,1,0,0,0-1-1H42.91Z"}),o.a.createElement("path",{id:"Line_9","data-name":"Line 9",d:"M48.91,15l-0.12,0A1,1,0,0,0,48,16v6a1,1,0,1,0,2,0s0,0,0,0V16a1,1,0,0,0-1-1H48.91Z"}))),o.a.createElement("div",null,o.a.createElement(h.b,{to:"/login"},"Log In")))}}]),t}(n.Component),E=a(135),b=a(158),w=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).handleChange=function(e){var t=e.target,n=t.name,o=t.value;a.setState(Object(i.a)({},n,o))},a.handleClose=function(){return a.setState({show:!1,redirect:!0})},a.handleSubmit=function(e){e.preventDefault();var t=a.state,n=t.username,o=t.password;a.services.signup(n,o).then(function(e){a.setState({redirect:!0},function(){a.props.setTheUser(e)})}).catch(function(e){a.setState({error:e.response.data.message}),console.log("Este es el error",e.response.data.message)})},a.validation=function(){if(a.state.error)return o.a.createElement("p",{className:"error"},a.state.error)},a.state={username:"",password:"",error:!1,redirect:!1,movein:!1},a.services=new g,a.handleClose=a.handleClose.bind(Object(E.a)(a)),a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;setInterval(function(){return e.setState({movein:!e.state.loading})},100)}},{key:"render",value:function(){return o.a.createElement("div",{className:"loginContainer"},this.state.redirect?o.a.createElement(b.a,{to:"/"}):null,o.a.createElement("div",{className:"loginForm ".concat(this.state.movein?"move-in-right":""," col")},o.a.createElement("button",{className:"btn-close",onClick:this.handleClose},"Close"),o.a.createElement("form",{onSubmit:this.handleSubmit,className:"login"},o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"username"}),o.a.createElement("input",{onChange:this.handleChange,value:this.state.username,type:"text",className:"form-control",id:"username",name:"username",placeholder:"Username"})),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"password"}),o.a.createElement("input",{onChange:this.handleChange,value:this.state.password,type:"password",className:"form-control",id:"password",name:"password",placeholder:"Password"})),this.validation(),o.a.createElement("button",{type:"submit",className:"form-group row btn-access"}),o.a.createElement(h.b,{to:"/login",className:"form-group SignupLink row"},"Back to Log in"))))}}]),t}(n.Component),L=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).handleChange=function(e){console.log(e);var t=e.target,n=t.name,o=t.value;a.setState(Object(i.a)({},n,o))},a.handleClose=function(){return a.setState({show:!1,redirect:!0})},a.handleSubmit=function(e){e.preventDefault();var t=a.state,n=t.username,o=t.password;a.services.login(n,o).then(function(e){a.setState({redirect:!0},function(){a.props.setTheUser(e)})}).catch(function(e){console.log(e),a.setState({error:e.response.data.message})})},a.validation=function(){if(a.state.error)return o.a.createElement("p",{className:"error"},a.state.error)},a.state={username:"",password:"",movein:!1,error:!1},a.services=new g,a.handleClose=a.handleClose.bind(Object(E.a)(a)),a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;setInterval(function(){return e.setState({movein:!e.state.loading})},100)}},{key:"render",value:function(){return o.a.createElement("div",{className:"loginContainer"},this.state.redirect?o.a.createElement(b.a,{to:"/"}):null,o.a.createElement("div",{className:"loginForm ".concat(this.state.movein?"move-in-right":""," col")},o.a.createElement("button",{className:"btn-close",onClick:this.handleClose},"Close"),o.a.createElement("form",{onSubmit:this.handleSubmit,className:"login"},o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"username"}),o.a.createElement("input",{onChange:this.handleChange,value:this.state.username,type:"text",className:"form-control",id:"username",name:"username",placeholder:"Username"})),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"password"}),o.a.createElement("input",{onChange:this.handleChange,value:this.state.password,type:"password",className:"form-control",id:"password",name:"password",placeholder:"Password"})),this.validation(),o.a.createElement("button",{type:"submit",className:"form-group row btn-access"}),o.a.createElement(h.b,{to:"/signup",className:"form-group SignupLink row"},"If you don\xb4t have an account Sign Up"))))}}]),t}(n.Component),y=a(925),C=a(195),O=a(159),S={stiffness:60,damping:15},j=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).handleMouseMove=function(e){var t=e.pageX,n=e.pageY;a.setState(function(){return{mouse:[t-25,n-25],now:"t"+Date.now()}})},a.handleTouchMove=function(e){e.preventDefault(),a.handleMouseMove(e.touches[0])},a.willLeave=function(e){return Object(C.a)({},e.style,{opacity:Object(O.spring)(0,S),scale:Object(O.spring)(2,S)})},a.state={mouse:[],now:"t0"},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=Object(y.a)(t.mouse,2),n=a[0],r=a[1],s=t.now,i=null==n?[]:[{key:s,style:{opacity:Object(O.spring)(1),scale:Object(O.spring)(0),x:Object(O.spring)(n),y:Object(O.spring)(r)}}];return o.a.createElement("header",{className:"intro-bg col"},o.a.createElement(O.TransitionMotion,{willLeave:this.willLeave,styles:i},function(t){return o.a.createElement("div",{onMouseMove:e.handleMouseMove,onTouchMove:e.handleTouchMove,className:"demo7"},t.map(function(e){var t=e.key,a=e.style,n=a.opacity,r=a.scale,s=a.x,i=a.y;return o.a.createElement("div",{key:t,className:"demo7-ball",style:{opacity:n,scale:r,transform:"translate3d(".concat(s,"px, ").concat(i,"px, 0) scale(").concat(r,")"),WebkitTransform:"translate3d(".concat(s,"px, ").concat(i,"px, 0) scale(").concat(r,")")}})}))}),o.a.createElement("h1",{id:"intro-h1"},"Voice"),o.a.createElement("p",null,"Record and share your voice to the world"),o.a.createElement("div",null,o.a.createElement("svg",{id:"wave","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 50 38.05"},o.a.createElement("title",null,"Audio Wave"),o.a.createElement("path",{id:"Line_1","data-name":"Line 1",d:"M0.91,15L0.78,15A1,1,0,0,0,0,16v6a1,1,0,1,0,2,0s0,0,0,0V16a1,1,0,0,0-1-1H0.91Z"}),o.a.createElement("path",{id:"Line_2","data-name":"Line 2",d:"M6.91,9L6.78,9A1,1,0,0,0,6,10V28a1,1,0,1,0,2,0s0,0,0,0V10A1,1,0,0,0,7,9H6.91Z"}),o.a.createElement("path",{id:"Line_3","data-name":"Line 3",d:"M12.91,0L12.78,0A1,1,0,0,0,12,1V37a1,1,0,1,0,2,0s0,0,0,0V1a1,1,0,0,0-1-1H12.91Z"}),o.a.createElement("path",{id:"Line_4","data-name":"Line 4",d:"M18.91,10l-0.12,0A1,1,0,0,0,18,11V27a1,1,0,1,0,2,0s0,0,0,0V11a1,1,0,0,0-1-1H18.91Z"}),o.a.createElement("path",{id:"Line_5","data-name":"Line 5",d:"M24.91,15l-0.12,0A1,1,0,0,0,24,16v6a1,1,0,0,0,2,0s0,0,0,0V16a1,1,0,0,0-1-1H24.91Z"}),o.a.createElement("path",{id:"Line_6","data-name":"Line 6",d:"M30.91,10l-0.12,0A1,1,0,0,0,30,11V27a1,1,0,1,0,2,0s0,0,0,0V11a1,1,0,0,0-1-1H30.91Z"}),o.a.createElement("path",{id:"Line_7","data-name":"Line 7",d:"M36.91,0L36.78,0A1,1,0,0,0,36,1V37a1,1,0,1,0,2,0s0,0,0,0V1a1,1,0,0,0-1-1H36.91Z"}),o.a.createElement("path",{id:"Line_8","data-name":"Line 8",d:"M42.91,9L42.78,9A1,1,0,0,0,42,10V28a1,1,0,1,0,2,0s0,0,0,0V10a1,1,0,0,0-1-1H42.91Z"}),o.a.createElement("path",{id:"Line_9","data-name":"Line 9",d:"M48.91,15l-0.12,0A1,1,0,0,0,48,16v6a1,1,0,1,0,2,0s0,0,0,0V16a1,1,0,0,0-1-1H48.91Z"}))))}}]),t}(n.Component),N=function e(){var t=this;Object(c.a)(this,e),this.postPost=function(e){return t.service.post("post",e,{withCredentials:!0}).then(function(e){return e.data}).catch(function(e){return console.log(e)})},this.getAllPosts=function(){return t.service.get("getAllPosts",{withCredentials:!0}).then(function(e){return e.data}).catch(function(e){return console.log("Error",e)})},this.handleUpload=function(e){return t.service.post("upload",e,{headers:{"Content-Type":"multipart/form-data"},withCredentials:!0}).then(function(e){return console.log("AUDIO FILE UPLOADED"),console.log(e),e.data}).catch(function(e){return console.log(e)})},this.service=v.a.create({baseURL:"https://u-voice.herokuapp.com/api/"})},A=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).handlerFunction=function(e){a.setState({rec:new MediaRecorder(e)}),a.state.rec.ondataavailable=function(e){if(a.state.audioChunks.push(e.data),"inactive"==a.state.rec.state){var t=new Blob(a.state.audioChunks,{type:"audio/mpeg-3"}),n=document.getElementById("recordedAudio");n.src=URL.createObjectURL(t),n.controls=!0,n.autoplay=!0,a.sendFileToCloudinary(t)}}},a.rec=function(e){e.preventDefault();var t=document.getElementById("record");document.getElementById("stopRecord");console.log("I was clicked"),t.style.backgroundColor="blue",a.state.rec.start()},a.stop=function(e){e.preventDefault();var t=document.getElementById("record");document.getElementById("stopRecord");console.log("I was clicked"),t.style.backgroundColor="red",a.state.rec.stop()},a.sendFileToCloudinary=function(e){console.log(e),console.log("se envia ahora a cloudi"),a.setState({url:e}),a.props.handleFileUpload(e)},a.state={audioChunks:[],rec:void 0,recordedAudio:void 0,record:void 0,stop:void 0,url:""},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;navigator.mediaDevices.getUserMedia({audio:!0}).then(function(t){e.handlerFunction(t)})}},{key:"render",value:function(){return o.a.createElement("div",{className:"mic-container"},o.a.createElement("p",null,o.a.createElement("button",{id:"record",onClick:this.rec},"Record"),o.a.createElement("button",{id:"stopRecord",onClick:this.stop},"Stop")),o.a.createElement("p",null,o.a.createElement("audio",{controls:!0,id:"recordedAudio"})))}}]),t}(n.Component),M=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).handleFileUpload=function(e){console.log("This is the Blob ",e);var t=new FormData;t.append("blob",e),a.services.handleUpload(t).then(function(e){console.log(e.secure_url),a.setState({postform:Object(C.a)({},a.state.postform,{audio:e.secure_url})}),console.log(a.state.postform)}).catch(function(e){return console.log(e)})},a.handleClose=function(){return a.setState({show:!1,redirect:!0})},a.handleShow=function(){return a.setState({show:!0})},a.handlechange=function(e){var t=e.target,n=t.name,o=t.value;a.setState({postform:Object(C.a)({},a.state.postform,Object(i.a)({},n,o))})},a.setPost=function(e){return a.setState({postform:e})},a.handleSubmit=function(e){e.preventDefault(),a.services.postPost(a.state.postform).then(function(e){a.props.loadPointsFromSon(),a.setState({redirect:!0},function(){a.setPost(e),console.log("Post Submited!")})}).catch(function(e){return console.log(e)})},a.state={postform:{type:"Point",longitude:0,latitude:0,description:"",audio:"",color:""},show:!0,movein:!1,error:!1},a.services=new N,a.handleShow=a.handleShow.bind(Object(E.a)(a)),a.handleClose=a.handleClose.bind(Object(E.a)(a)),a.getMyLocation=a.getMyLocation.bind(Object(E.a)(a)),a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;setInterval(function(){return e.setState({movein:!e.state.loading})},100)}},{key:"getMyLocation",value:function(){var e=this,t=window.navigator&&window.navigator.geolocation;t&&t.getCurrentPosition(function(t){e.setState({postform:Object(C.a)({},e.state.postform,{latitude:t.coords.latitude,longitude:t.coords.longitude})})},function(e){console.log(e)})}},{key:"render",value:function(){var e=this;return o.a.createElement("div",null,this.state.redirect?o.a.createElement(b.a,{to:"/"}):null,o.a.createElement("div",{className:"post-container col ".concat(this.state.movein?"move-in-right":"")},o.a.createElement("form",{className:"col",onSubmit:this.handleSubmit},o.a.createElement("div",{className:"post-form-it description"},o.a.createElement("label",{className:"description-title",htmlFor:"description"}),o.a.createElement("input",{onChange:function(t){return e.handlechange(t)},value:this.state.postform.description,type:"text",className:"row",id:"description",name:"description",placeholder:"Write a description"})),o.a.createElement("button",{className:"post-form-it geolocation-btn  row",type:"button",onClick:this.getMyLocation}),o.a.createElement(A,{className:"post-form-it mic-container  row",handleFileUpload:function(t){return e.handleFileUpload(t)}}),this.state.postform.audio&&o.a.createElement("div",{className:"row"},o.a.createElement("audio",{className:"post-form-it audio-controls  row",controls:!0,src:this.state.postform.audio}),o.a.createElement("button",{type:"submit",className:"btn-post post-form-it row"}))),o.a.createElement("button",{className:"btn-close",onClick:this.handleClose},"Close")))}}]),t}(n.Component),k=a(4),V=a.n(k),I=a(156),U=a.n(I),x=a(196),Z=a.n(x),_=a(9),D=a.n(_),P=a(431),H=a.n(P),T=a(289),B=a.n(T);Z.a.Ion.defaultAccessToken="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJmODFhMmExZS1jZDAwLTRlNjctYmY1MS04OWIzNzZmOTA4ZmIiLCJpZCI6MTE4OTgsInNjb3BlcyI6WyJhc3IiLCJnYyJdLCJpYXQiOjE1NTk5MTgwODJ9.jtqbFIAPLfshQhRKW5VKU5qOSs682b446jPKo5ca2MA";var F=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).setUser=function(e){return a.setState({loggedInUser:e})},a.fetchUser=function(){null===a.state.loggedInUser&&a.servicesAuth.loggedin().then(function(e){a.setState({loggedInUser:e})}).catch(function(e){return a.setState({loggedInUser:!1})})},a.loadPointsFromSon=function(){a.services.getAllPosts().then(function(e){a.setState({data:e}),console.log(a.state.data[a.state.data.length-1]),a.viewer.entities.removeAll(),a.loadPoints(a.state.data)}).catch(function(e){return console.log(e)})},a.loadPoints=function(e){e.forEach(function(e){var t=e.longitude,n=e.latitude,o=a.viewer.entities.add({position:V.a.fromDegrees(t,n),point:{show:!0,color:D.a.SPRINGGREEN,pixelSize:5,outlineColor:D.a.SPRINGGREEN,outlineWidth:3},polyline:{positions:Z.a.Cartesian3.fromDegreesArray([t,n,t,n]),width:2},description:"<h3 style='max-height: 648px; height: 60px;color: grey; text-align: center'>".concat(e.description,"</h3>")});a.viewer.scene.pickTranslucentDepth=!0,new U.a(a.viewer.scene.canvas).setInputAction(function(t){var n=a.viewer.scene.pick(t.position);if(Z.a.defined(n)&&n.id===o){o.point.pixelSize=10,console.log(n),console.log(e.audio),console.log(e.description);var r=new Audio;r.src=e.audio,r.muted=!0,console.log(r),r.play(),new Audio(e.audio).play();r.play().then(function(e){return console.log("Se ha reproducido")}).catch(function(e){console.log(e),console.log(r),r.play()})}else o.point.pixelSize=5;a.viewer.scene.requestRender()},Z.a.ScreenSpaceEventType.LEFT_CLICK)})},a.state={appear:!0,loggedInUser:null,viewerLoaded:!1,query:"",data:[]},a.servicesAuth=new g,a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.state.appear&&setTimeout(function(){return e.setState({appear:!1})},6e3),this.setState({viewerLoaded:!0}),this.viewer=new H.a(this.cesiumContainer,{animation:!1,baseLayerPicker:!1,fullscreenButton:!1,useDepthPicking:!0,geocoder:!1,homeButton:!1,infoBox:!0,sceneModePicker:!1,requestRenderMode:!0,selectionIndicator:!1,timeline:!1,navigationHelpButton:!1,scene3DOnly:!0,skyBox:new B.a({show:!1})}),this.viewer.scene.highDynamicRange=!1,this.viewer.scene.backgroundColor=Z.a.Color.BLANCHEDALMOND,this.viewer.scene.skyAtmosphere.show=!1,this.viewer.scene.globe.showGroundAtmosphere=!0,this.viewer.scene.moon.show=!1,this.viewer.scene.sun.show=!1,this.services=new N,this.services.getAllPosts().then(function(t){e.setState({data:t}),e.loadPoints(e.state.data),e.handleChange=function(t){var a=t.target,n=a.name,o=a.value;e.setState(Object(i.a)({},n,o));var r=e.state.data.filter(function(e){return e.description.toLowerCase().includes(t.target.value.toLowerCase())});e.viewer.entities.removeAll(),console.log(t.target.value),console.log("Data filtered: ",r),t.target.value.length>0?e.loadPoints(r):e.loadPoints(e.state.data),e.viewer.scene.requestRender()}}).catch(function(e){return console.log(e)})}},{key:"render",value:function(){var e=this,t={width:"100%",height:"100%",top:0,left:0,bottom:0,right:0,position:"fixed",display:"flex",alignItems:"stretch"},a={flexGrow:2};return this.fetchUser(),this.state.loggedInUser?o.a.createElement("main",null,!this.state.appear,o.a.createElement("div",{className:"cesiumGlobeWrapper",style:t},o.a.createElement("div",{className:"cesiumWidget",ref:function(t){return e.cesiumContainer=t},style:a}),o.a.createElement("form",{className:"SearchBar"},o.a.createElement("input",{className:"SearchBarInput",type:"text",name:"query",value:this.state.query,onChange:function(t){return e.handleChange(t)},placeholder:"Search.."}))),o.a.createElement(f,{userInSession:this.state.loggedInUser,setTheUser:this.setUser}),o.a.createElement(b.d,null,o.a.createElement(b.b,{path:"/post",render:function(){return o.a.createElement(M,{loadPointsFromSon:e.loadPointsFromSon,setTheUser:e.setUser})}}))):o.a.createElement("main",null,this.state.appear&&o.a.createElement(j,null),o.a.createElement("div",{className:"cesiumGlobeWrapper",style:t},o.a.createElement("div",{className:"cesiumWidget",ref:function(t){return e.cesiumContainer=t},style:a},o.a.createElement("form",{className:"SearchBar"},o.a.createElement("input",{className:"SearchBarInput",type:"text",name:"query",value:this.state.query,onChange:function(t){return e.handleChange(t)},placeholder:"Search..."})))),o.a.createElement(f,{userInSession:this.state.loggedInUser}),o.a.createElement("div",{className:"footer"}),o.a.createElement(b.d,null,o.a.createElement(b.b,{path:"/signup",render:function(){return o.a.createElement(w,{setTheUser:e.setUser})}}),o.a.createElement(b.b,{path:"/login",render:function(){return o.a.createElement(L,{setTheUser:e.setUser})}})))}}]),t}(n.Component);s.a.render(o.a.createElement(h.a,null,o.a.createElement(F,null)),document.getElementById("root"))},307:function(e,t){function a(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}a.keys=function(){return[]},a.resolve=a,e.exports=a,a.id=307},926:function(e,t,a){e.exports=a(1011)},931:function(e,t,a){}},[[926,1,2]]]);
//# sourceMappingURL=main.e36c2a75.chunk.js.map