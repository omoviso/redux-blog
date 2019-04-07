(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{259:function(e,t,a){e.exports=a(501)},264:function(e,t,a){},501:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(255),c=a.n(l),i=(a(264),a(17)),o=a(18),s=a(21),u=a(19),m=a(20),h=a(4),d=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(h.b,{to:"/"},"My Blog"))},p=a(6),E=Object(p.b)(function(e){return{initial:e.firebase.profile.initial?e.firebase.profile.initial:"Anon"}},function(e){return{signOut:function(){return e(function(e,t,a){(0,a.getFirebase)().auth().signOut().then(function(){return e({type:"SIGNOUT_SUCCESS"})})})}}})(function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(h.c,{to:"/create"},"Create New Article")),r.a.createElement("li",null,r.a.createElement("a",{onClick:e.signOut},"Log Out")),r.a.createElement("li",null,r.a.createElement("div",{className:"profileInitial"},r.a.createElement(h.c,{to:"/profile"},e.initial)))))}),f=Object(p.b)(function(e){return{resetError:function(){return e(function(e){e({type:"RESET_ERROR"})})}}})(function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(h.b,{to:"/signin",onClick:e.resetError},"Log In")),r.a.createElement("li",null,r.a.createElement(h.b,{to:"/signup",onClick:e.resetError},"Sign Up")),r.a.createElement("li",null,r.a.createElement("div",{className:"transparent"},"Create New ArtiCle"))))}),b=Object(p.b)(function(e){return{auth:e.firebase.auth}})(function(e){var t=e.auth.uid?r.a.createElement(E,null):r.a.createElement(f,null);return r.a.createElement("div",{className:"header"},r.a.createElement("div",{className:"logo"},r.a.createElement(d,null)),r.a.createElement("div",{className:"navBar"},t))}),g=a(48),N=a(57),O=a.n(N),v=function(e){var t=e.articles,a=[],n=e.match.params.id||1;if(t&&t.length>0){var l=4*(n-1),c=l+4;a=(t=t.slice(l,c)).map(function(e){return r.a.createElement("div",{className:"card spaceBottom",key:e.id},r.a.createElement("h1",null,r.a.createElement(h.b,{to:"/article/".concat(e.id)},e.title)),r.a.createElement("h4",null,"By: ",e.authorFirstName," ",e.authorLastName),r.a.createElement("p",{className:"timeStamp"},O()(e.createdAt.toDate()).calendar()))})}else a=r.a.createElement("h1",{className:"titleCenter"}," No Article At The Moment!");return r.a.createElement("div",{className:"summary"},a)},j=function(e){var t=e.notifications,a=null;return a=t&&t.length>0?t.map(function(e){return r.a.createElement("div",{className:"card spaceBottom",key:e.id},r.a.createElement("p",null,r.a.createElement("b",null,e.user)," ",e.content,r.a.createElement("span",{className:"timeStamp"},r.a.createElement("br",null),O()(e.time.toDate()).calendar())))}):r.a.createElement("h1",{className:"titleCenter"}," No News At The Moment!"),r.a.createElement("div",{className:"notifications"},a)},C=a(13),y=a(23),S=function(e){var t=e.articles,a=e.pageId,n=[];if(t&&t.length>4){var l=0;for(l=0;l<Math.ceil(t.length)/4;l++)n.push(r.a.createElement(h.c,{key:Math.random(),to:"/page/".concat(l+1)},r.a.createElement("button",null,l+1)));var c=Number(a.params.id)===l?l:Number(a.params.id)+1;n.push(r.a.createElement(h.c,{key:Math.random(),to:"/page/".concat(Number(c))},r.a.createElement("button",null,">>")))}return n},w=Object(C.d)(Object(p.b)(function(e){return{auth:e.firebase.auth,articles:e.firestore.ordered.projects,notifications:e.firestore.ordered.notifications}}),Object(y.firestoreConnect)([{collection:"projects",orderBy:["createdAt","desc"]},{collection:"notifications",limit:4,orderBy:["time","desc"]}]))(function(e){var t=e.auth,a=e.articles,n=e.notifications,l=e.match;return t.uid?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container"},r.a.createElement(v,{articles:a,match:l}),r.a.createElement(j,{notifications:n})),r.a.createElement("div",{className:"pagination"},r.a.createElement(S,{articles:a,pageId:l}))):r.a.createElement(g.a,{to:"/signin"})}),R=a(35),A=a(36),F=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).handleChange=function(e){var t=e.target.id,n=e.target.value;a.setState(Object(R.a)({},t,n))},a.handleSubmit=function(e){e.preventDefault(),a.props.addArticle(a.state),a.props.history.push("/")},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return this.props.auth.uid?r.a.createElement("form",{className:"card form",onSubmit:this.handleSubmit},r.a.createElement("label",{htmlFor:"title"},"Title:"),r.a.createElement("input",{type:"text",className:"full-width input",id:"title",name:"title",placeholder:"Title",required:!0,onChange:this.handleChange}),r.a.createElement("label",{htmlFor:"articleContent"},"Content:"),r.a.createElement("textarea",{id:"articleContent",required:!0,className:"full-width",placeholder:"Content",rows:"20",onChange:this.handleChange}),r.a.createElement("button",{className:"submit button"},"Submit")):r.a.createElement(g.a,{to:"/signin"})}}]),t}(n.Component),I=Object(p.b)(function(e){return{auth:e.firebase.auth}},function(e){return{addArticle:function(t){e(function(e){return function(t,a,n){n.getFirebase;var r=(0,n.getFirestore)(),l=a().firebase.profile;console.log(l);var c=a().firebase.auth.uid;console.log(c),r.collection("projects").add(Object(A.a)({},e,{authorFirstName:l.firstName,authorLastName:l.lastName,authorId:c,createdAt:new Date})).then(function(){t({type:"ADD_ARTICLE",article:e})}).catch(function(e){t({type:"ADD_ARTICLE_ERROR",err:e})})}}(t))}}})(F),k=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.auth,a=e.article;return console.log(a),t.uid?a?r.a.createElement("div",{className:"card"},r.a.createElement("h1",null,a.title),r.a.createElement("h4",null,"By"," ",r.a.createElement("i",null,a.authorFirstName," ",a.authorLastName)),r.a.createElement("p",null,r.a.createElement("i",{className:"timeStamp"},O()(a.createdAt.toDate()).calendar())),r.a.createElement("br",null),r.a.createElement("p",null,a.articleContent)):r.a.createElement("div",{className:"titleCenter"},r.a.createElement("strong",null,"Loading article...")):r.a.createElement(g.a,{to:"/signin"})}}]),t}(n.Component),L=Object(C.d)(Object(p.b)(function(e,t){var a=t.match.params.id;return{article:e.firestore.data.projects?e.firestore.data.projects[a]:null,auth:e.firebase.auth}}),Object(y.firestoreConnect)([{collection:"projects"}]))(k),_=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={email:"",password:""},a.handleSubmit=function(e){e.preventDefault(),a.props.signIn(a.state)},a.handleChange=function(e){var t=e.target.id;a.setState(Object(R.a)({},t,e.target.value))},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.auth,a=e.authError;return t.uid?r.a.createElement(g.a,{to:"/"}):r.a.createElement("div",{className:"card small form"},r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement("br",null),r.a.createElement("input",{className:"full-width",type:"text",id:"email",placeholder:"email",onChange:this.handleChange}),r.a.createElement("br",null),r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("br",null),r.a.createElement("input",{className:"full-width",type:"password",id:"password",placeholder:"password",onChange:this.handleChange}),r.a.createElement("button",null,"Login")),r.a.createElement("div",{className:"red-text"},a?r.a.createElement("p",null,a):null),r.a.createElement(h.b,{to:"/signup",className:"linkColor"},"Need an account? Click here!"))}}]),t}(n.Component),D=Object(p.b)(function(e){return{authError:e.auth.authError,auth:e.firebase.auth}},function(e){return{signIn:function(t){return e((a=t,function(e,t,n){(0,n.getFirebase)().auth().signInWithEmailAndPassword(a.email,a.password).then(function(){e({type:"LOGIN_SUCCESS"})}).catch(function(t){e({type:"LOGIN_ERROR",err:t})})}));var a}}})(_),U=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={email:"",password:"",firstName:"",lastName:""},a.handleChange=function(e){a.setState(Object(R.a)({},e.target.id,e.target.value))},a.handleSubmit=function(e){e.preventDefault(),console.log(a.state),a.props.signUp(a.state)},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.auth,a=e.authError;return t.uid?r.a.createElement(g.a,{to:"/"}):r.a.createElement("div",{className:"card small form"},r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("label",{htmlFor:"firstName"},"First Name"),r.a.createElement("input",{className:"full-width",type:"text",id:"firstName",placeholder:"First Name",onChange:this.handleChange}),r.a.createElement("label",{htmlFor:"lastName"},"Last Name"),r.a.createElement("input",{className:"full-width",type:"text",id:"lastName",placeholder:"Last Name",onChange:this.handleChange}),r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement("input",{className:"full-width",type:"email",id:"email",placeholder:"Email",onChange:this.handleChange}),r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{className:"full-width",type:"password",id:"password",placeholder:"Password",onChange:this.handleChange}),r.a.createElement("div",{className:"red-text"},a?r.a.createElement("p",null,a):null),r.a.createElement("button",null,"Sign Up")))}}]),t}(n.Component),x=Object(p.b)(function(e){return{auth:e.firebase.auth,authError:e.auth.authError}},function(e){return{signUp:function(t){return e(function(e){return function(t,a,n){var r=n.getFirebase,l=n.getFirestore,c=r(),i=l();c.auth().createUserWithEmailAndPassword(e.email,e.password).then(function(t){return console.log(t.user),i.collection("users").doc(t.user.uid).set({firstName:e.firstName,lastName:e.lastName,initial:e.firstName[0]+e.lastName[0]})}).then(function(){return t({type:"SIGNUP_SUCCESS"})}).catch(function(e){return t({type:"SIGNUP_ERROR",err:e})})}}(t))}}})(U),P=Object(C.d)(Object(p.b)(function(e){return console.log(e),{personalInfo:e.firebase}}),Object(y.firestoreConnect)([{collection:"users"}]))(function(e){var t=e.personalInfo,a=t.profile,n=t.auth;if(!e.personalInfo.auth.uid)return r.a.createElement(g.a,{to:"/signin"});var l=new Date(Number(n.createdAt)).toDateString();return r.a.createElement("div",{className:"card"},r.a.createElement("h1",null,"First Name: ",a.firstName),r.a.createElement("h1",null,"Last Name: ",a.lastName),r.a.createElement("h1",null,"Joined date: ",l))}),T=function(){return r.a.createElement("h1",{className:"titleCenter"},"No Contents Available at this address!")},G=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"body"},r.a.createElement(g.d,null,r.a.createElement(g.b,{exact:!0,path:"/",component:w}),r.a.createElement(g.b,{exact:!0,path:"/page/:id",component:w}),r.a.createElement(g.b,{path:"/create",component:I}),r.a.createElement(g.b,{path:"/article/:id",component:L}),r.a.createElement(g.b,{path:"/profile",component:P}),r.a.createElement(g.b,{path:"/signin",component:D}),r.a.createElement(g.b,{path:"/signup",component:x}),r.a.createElement(g.b,{path:"/",component:T})))}}]),t}(n.Component),B=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(h.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(b,null),r.a.createElement(G,null)))}}]),t}(n.Component),M={authError:null},z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN_ERROR":return console.log("login fail"),Object(A.a)({},e,{authError:"Login failed"});case"LOGIN_SUCCESS":return console.log("login success"),Object(A.a)({},e,{authError:null});case"SIGNOUT_SUCCESS":return console.log("Signout success"),e;case"SIGNUP_SUCCESS":return console.log("Signup success"),Object(A.a)({},e,{authError:null});case"SIGNUP_ERROR":return console.log("Signup error"),Object(A.a)({},e,{authError:t.err.message});case"RESET_ERROR":return Object(A.a)({},e,{authError:null});default:return e}},W={},J=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_ARTICLE":return console.log("Add article",t.article),e;case"ADD_ARTICLE_ERROR":return console.log("Error ",t.err),e;default:return e}},q=a(78),K=Object(C.c)({auth:z,project:J,firestore:q.firestoreReducer,firebase:y.firebaseReducer}),X=a(258),Z=a(168),$=a.n(Z);a(495),a(499);$.a.initializeApp({apiKey:"AIzaSyCE1a2Zr4e55zvPXERz5l_prltbGsT6GP8",authDomain:"my-blog-78a33.firebaseapp.com",databaseURL:"https://my-blog-78a33.firebaseio.com",projectId:"my-blog-78a33",storageBucket:"my-blog-78a33.appspot.com",messagingSenderId:"463560316487"});var H=$.a;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Q=Object(C.e)(K,Object(C.d)(Object(C.a)(X.a.withExtraArgument({getFirestore:q.getFirestore,getFirebase:y.getFirebase})),Object(q.reduxFirestore)(H),Object(y.reactReduxFirebase)(H,{useFirestoreForProfile:!0,userProfile:"users",attachAuthIsReady:!0})));Q.firebaseAuthIsReady.then(function(){c.a.render(r.a.createElement(p.a,{store:Q},r.a.createElement(B,null)),document.getElementById("root"))}),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[259,1,2]]]);
//# sourceMappingURL=main.5c99d7d6.chunk.js.map