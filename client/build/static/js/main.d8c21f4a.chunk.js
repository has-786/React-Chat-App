(this["webpackJsonpreact-project"]=this["webpackJsonpreact-project"]||[]).push([[0],{215:function(e,t,a){},216:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(12),i=a.n(c),o=a(19),s=a(8),l=a(13),j=a.n(l),u="",d=a(262),b=a(264),m=a(2),h=Object(d.a)((function(e){return{root:{marginTop:"50vh"}}}));function p(){var e=h();return Object(m.jsx)("div",{className:e.root,children:Object(m.jsx)("center",{children:Object(m.jsx)(b.a,{})})})}var O=a(14);function x(e){var t=e.redirect;return Object(m.jsx)(O.a,{to:"/"+t})}var g=a(74),f=a.n(g),v=a(290),y=a(280),w=a(282),S=a(287),C=a(274),k=a(288),I=a(53),N=a(281),W=a(266),E=a(267),R=a(268),D=a(270),T=a(285),A=a(284),F=a(275),P=a(279),L=a(277),B=a(278),U=a(276),q=a(283),z=a(273),G=a(86),H=a.n(G),M=a(133),Y=a.n(M),V=a(134),J=a.n(V),K=a(96),Q=a.n(K),X=a(52),Z=a.n(X),$=(f()(),a(62)),_=a(128),ee=a.n(_),te=a(132),ae=a.n(te),ne=a(272),re=a(291),ce=a(289),ie=a(16),oe=a(269),se=a(271),le=a(129),je=a.n(le),ue=a(130),de=a.n(ue),be=a(131),me=a.n(be),he=240,pe=Object(d.a)((function(e){return{root:{display:"flex"},drawer:Object($.a)({},e.breakpoints.up("sm"),{width:he,flexShrink:0}),appBar:Object($.a)({},e.breakpoints.up("sm"),{width:"calc(100% - ".concat(he,"px)"),marginLeft:he}),menuButton:Object($.a)({marginRight:e.spacing(2)},e.breakpoints.up("sm"),{display:"none"}),toolbar:e.mixins.toolbar,drawerPaper:{width:he},content:{flexGrow:1,padding:e.spacing(3)}}}));function Oe(e){var t=e.window,a=void 0!==t?function(){return t().document.body}:void 0,c=pe(),i=Object(ie.a)(),o=r.a.useState(!1),l=Object(s.a)(o,2),d=l[0],b=l[1],h=function(){b(!d)},p=Object(n.useState)([]),O=Object(s.a)(p,2),x=(O[0],O[1]),g=localStorage.getItem("token"),f=localStorage.getItem("name"),v=[["Home","/",ee.a],["Enter group","/enterroom",je.a],["Create group","/newroom",H.a],["Sign out","/signin",de.a]],y=j.a.create({baseURL:u,headers:{Authorization:"bearer ".concat(g)}});Object(n.useEffect)((function(){y.get("getRooms").then((function(e){var t=e.data;x(t.latest)})).catch((function(t){e.history.push("/signin")}))}),[]);var w=Object(m.jsxs)("div",{children:[Object(m.jsx)("center",{children:Object(m.jsx)(me.a,{style:{color:"blue",width:"70px",height:"70px"}})}),Object(m.jsx)("center",{children:Object(m.jsx)("p",{children:f})}),Object(m.jsx)("div",{className:c.toolbar,style:{marginTop:"-60px"}}),Object(m.jsx)(W.a,{}),Object(m.jsx)(E.a,{children:v.map((function(t,a){return Object(m.jsxs)(R.a,{button:!0,onClick:function(){var a;"Sign out"===t[0]?(a=e.history.push,localStorage.removeItem("token"),a("/signin")):e.history.push(t[1])},children:[Object(m.jsx)(oe.a,{children:Object(n.createElement)(t[2],{})}),Object(m.jsx)(D.a,{primary:t[0]})]},t[0])}))})]});return Object(m.jsxs)("div",{style:{marginBottom:"5px"},children:[Object(m.jsx)(se.a,{position:"static",className:c.appBar,children:Object(m.jsxs)(ne.a,{children:[Object(m.jsx)(z.a,{color:"inherit","aria-label":"open drawer",edge:"start",onClick:h,className:c.menuButton,children:Object(m.jsx)(ae.a,{})}),Object(m.jsx)(I.a,{variant:"h6",noWrap:!0,children:e.name})]})}),Object(m.jsxs)("nav",{className:c.drawer,"aria-label":"mailbox folders",children:[Object(m.jsx)(ce.a,{smUp:!0,implementation:"css",children:Object(m.jsx)(re.a,{container:a,variant:"temporary",anchor:"rtl"===i.direction?"right":"left",open:d,onClose:h,classes:{paper:c.drawerPaper},ModalProps:{keepMounted:!0},children:w})}),Object(m.jsx)(ce.a,{xsDown:!0,implementation:"css",children:Object(m.jsx)(re.a,{classes:{paper:c.drawerPaper},variant:"permanent",open:!0,children:w})})]})]})}var xe=Object(d.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));function ge(){return Object(m.jsxs)(I.a,{variant:"body2",color:"textSecondary",align:"center",children:["Copyright \xa9 ",Object(m.jsx)(C.a,{color:"inherit",href:"https://material-ui.com/",children:"Your Website"})," ",(new Date).getFullYear(),"."]})}var fe=a(99),ve=a.n(fe),ye=a(135),we=a(138),Se=a(140),Ce=a(136),ke=a(137),Ie=a.n(ke),Ne=(a(215),void 0),We=Object(d.a)({root:{minWidth:275},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},title:{fontSize:14},pos:{marginBottom:12},heading:{textAlign:"justifyContent"},footer:{float:"right"},messageBox:{display:"flex",flexWrap:"wrap"},main:{backgroundColor:"beige",paddingTop:"70px"},container:{width:"300px",margin:"auto",minHeight:"70vh",padding:"2px",backgroundColor:"beige",borderRadius:"10px",border:"2px solid pink"},msgs:{width:"250px",marginBottom:"10px"},sendbox:{width:"300px"}}),Ee=function(e){var t=localStorage.getItem("email"),a=localStorage.getItem("name"),r=new Audio("../incoming.mp3"),c=We(),i=Object(n.useState)([]),l=Object(s.a)(i,2),d=l[0],b=l[1],h=Object(n.useState)(e.match.params.room),p=Object(s.a)(h,2),O=p[0],x=(p[1],Object(n.useState)("")),g=Object(s.a)(x,2),v=g[0],y=g[1],w=Object(n.useState)(!1),S=Object(s.a)(w,2),C=(S[0],S[1],f()());Object(n.useEffect)((function(){return C.emit("create",O),C.emit("new-user-joined",a,O),function(e){var t=localStorage.getItem("token");j.a.create({baseURL:u,headers:{Authorization:"bearer ".concat(t)}}).post("getMessages",{room:e}).then((function(e){var t=e.data;1==t.status&&b(t.msgs),window.scrollTo({top:document.getElementById("messages").scrollHeight,behaviour:"smooth"})})).catch((function(e){}))}(O),C.on("user-joined",(function(e){})),C.on("user-left",(function(e){alert("".concat(e," left from group ").concat(O))})),C.on("receive",(function(e){b((function(t){return[].concat(Object(we.a)(t),[e])})),t!==e.email&&r.play(),window.scrollTo({top:document.getElementById("messages").scrollHeight,behaviour:"smooth"})})),function(){C.disconnect()}}),[]);function k(){return(k=Object(ye.a)(ve.a.mark((function e(){var n,r,c,i,o,s,l;return ve.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=(new Date).getHours(),r=(new Date).getMinutes(),n=0==parseInt(n/10)?"0"+n:n,r=0==parseInt(r/10)?"0"+r:r,c=n+":"+r,i=document.getElementById("file-input").files[0]){e.next=8;break}return e.abrupt("return");case 8:if(o=2,(i.name.toLowerCase().includes(".jpg")||i.name.toLowerCase().includes(".png"))&&(o=1),1!=o){e.next=15;break}s={maxSizeMB:1,maxWidthOrHeight:1920,useWebWorker:!0},Object(Ce.a)(i,s).then((function(e){C.emit("send",{flag:o,email:t,room:O,name:a,path:i.name,img:e,time:c})})).catch((function(e){alert(e.message),console.log(e.message)})),e.next=20;break;case 15:return(l=new FileReader).readAsDataURL(i),e.next=19,function(){var e=l.result.replace(/^data:.+;base64,/,"");C.emit("send",{flag:o,email:t,room:O,name:a,path:i.name,img:e,time:c})};case 19:l.onloadend=e.sent;case 20:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var I={backgroundColor:"blue",color:"white",marginLeft:"auto"};return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("div",{style:{position:"fixed",width:"100%"},children:Object(m.jsx)(Oe,Object(o.a)({name:O},e))}),Object(m.jsxs)("div",{class:c.main,children:[Object(m.jsx)("div",{class:c.container,children:Object(m.jsx)("div",{id:"messages",class:c.messageBox,children:d.map((function(e){var a=t===e.email?I:{};return Object(m.jsx)(Se.a,{elevation:3,className:c.msgs,style:a,children:0==e.flag?Object(m.jsxs)("div",{style:{padding:"10px"},children:[Object(m.jsx)("b",{children:e.name}),Object(m.jsx)("br",{}),Object(m.jsx)("span",{children:e.message}),Object(m.jsx)("br",{}),Object(m.jsx)("span",{style:{float:"right"},children:e.time})]}):1==e.flag?Object(m.jsxs)("div",{style:{padding:"10px"},children:[Object(m.jsx)("b",{children:e.name}),Object(m.jsx)("br",{}),Object(m.jsx)("span",{children:Object(m.jsx)("img",{src:"/uploads/"+e.path,height:"100%",width:"100%"})}),Object(m.jsx)("span",{style:{float:"right"},children:e.time})]}):Object(m.jsxs)("div",{style:{padding:"10px"},children:[Object(m.jsx)("b",{children:e.name}),Object(m.jsx)("br",{}),Object(m.jsxs)("video",{width:"100%",height:"100%",controls:!0,children:[Object(m.jsx)("source",{src:"/uploads/"+e.path,type:"video/mp4"}),Object(m.jsx)("source",{src:"/uploads/"+e.path,type:"video/ogg"})]}),Object(m.jsx)("span",{style:{float:"right"},children:e.time})]})})}))})}),Object(m.jsxs)("center",{children:[Object(m.jsxs)("div",{class:c.sendbox,children:[Object(m.jsx)("input",{type:"text",placeholder:"Type your message here",value:v,onChange:function(e){return y(e.target.value)}}),Object(m.jsx)("button",{className:"btn btn-primary",onClick:function(e,a,n){var r=(new Date).getHours(),c=(new Date).getMinutes(),i=(r=0==parseInt(r/10)?"0"+r:r)+":"+(c=0==parseInt(c/10)?"0"+c:c);C.emit("send",{flag:0,email:t,room:a,name:e,msg:n,time:i}),y("")}.bind(Ne,a,O,v),children:"Send"})]}),Object(m.jsx)("br",{}),Object(m.jsxs)("div",{class:c.sendbox,children:[Object(m.jsx)("label",{for:"file-input",children:Object(m.jsx)(Ie.a,{style:{color:"blue",width:"80px",cursor:"pointer"}})}),Object(m.jsx)("input",{id:"file-input",type:"file",style:{display:"none"}}),Object(m.jsx)("button",{className:"btn btn-sm btn-danger",onClick:function(){return k.apply(this,arguments)}.bind(Ne),children:"Send"})]})]})]})]})},Re=a(21),De=a(286),Te=a(60),Ae=a.n(Te);function Fe(){return Object(m.jsxs)(I.a,{variant:"body2",color:"textSecondary",align:"center",children:["Copyright \xa9 ",Object(m.jsx)(Re.b,{color:"inherit",href:"https://material-ui.com/",children:"Your Website"})," ",(new Date).getFullYear(),"."]})}var Pe=Object(d.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},tabLink:{display:"flex",alignItems:"center",justifyContent:"center"},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));function Le(){return Object(m.jsxs)(I.a,{variant:"body2",color:"textSecondary",align:"center",children:["Copyright \xa9 ",Object(m.jsx)(Re.b,{color:"inherit",href:"https://material-ui.com/",children:"Your Website"})," ",(new Date).getFullYear(),"."]})}var Be=Object(d.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));var Ue=Object(d.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.primary.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)}}}));var qe,ze,Ge=Object(d.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.primary.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)}}}));i.a.render(Object(m.jsx)(Re.a,{children:Object(m.jsxs)(O.d,{children:[Object(m.jsx)(O.b,{exact:!0,path:"/",component:(qe=function(e){var t=this,a=xe(),c=Object(n.useState)([]),i=Object(s.a)(c,2),l=i[0],d=i[1],b=Object(n.useState)([]),h=Object(s.a)(b,2),p=h[0],O=h[1],x=r.a.useState(!1),g=Object(s.a)(x,2),f=g[0],C=g[1],I=r.a.useState(!1),G=Object(s.a)(I,2),M=G[0],V=G[1],K=r.a.useState(null),X=Object(s.a)(K,2),$=X[0],_=X[1],ee=r.a.useState(""),te=Object(s.a)(ee,2),ae=te[0],ne=te[1],re=function(){_(null),C(!1)},ce=function(){_(null),V(!1)},ie=localStorage.getItem("token"),oe=j.a.create({baseURL:u,headers:{Authorization:"bearer ".concat(ie)}});Object(n.useEffect)((function(){oe.get("getRooms").then((function(e){var t=e.data;d(t.rooms),O(t.latest)})).catch((function(t){alert(t),e.history.push("/signin")}))}),[]);var se=function(t){oe.post("exitRoom",{room:t}).then((function(e){1==e.data.status?O(p.filter((function(e){return e!=t}))):alert("Something went wrong")})).catch((function(t){alert(t),e.history.push("/signin")}))};return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(Oe,Object(o.a)({name:"Home"},e)),Object(m.jsxs)(F.a,{open:f,onClose:re,"aria-labelledby":"form-dialog-title",children:[Object(m.jsxs)(U.a,{id:"form-dialog-title",children:["Edit password for group ",$]}),Object(m.jsxs)(L.a,{children:[Object(m.jsx)(B.a,{children:"Enter new password below"}),Object(m.jsx)(S.a,{autoFocus:!0,margin:"dense",id:"name",label:"Password",value:ae,onChange:function(e){return ne(e.target.value)},type:"password",fullWidth:!0})]}),Object(m.jsxs)(P.a,{children:[Object(m.jsx)(y.a,{onClick:re,color:"primary",children:"Cancel"}),Object(m.jsx)(y.a,{onClick:function(){var t;t=$,oe.post("editRoom",{room:t,newPassword:ae}).then((function(e){1==e.data.status?alert("Password updated successfully for room ".concat(t)):alert("Something went wrong")})).catch((function(t){alert(t),e.history.push("/signin")})),re()},color:"primary",children:"Confirm"})]})]}),Object(m.jsxs)(F.a,{open:M,onClose:ce,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[Object(m.jsx)(U.a,{id:"alert-dialog-title",children:"Delete group"}),Object(m.jsx)(L.a,{children:Object(m.jsxs)(B.a,{id:"alert-dialog-description",children:["Are you sure want to delete group ",$]})}),Object(m.jsxs)(P.a,{children:[Object(m.jsx)(y.a,{onClick:ce,color:"primary",children:"No"}),Object(m.jsx)(y.a,{onClick:function(){var t;t=$,oe.post("deleteRoom",{room:t}).then((function(e){1==e.data.status?(O(p.filter((function(e){return e!=t}))),d(l.filter((function(e){return e!=t})))):alert("Something went wrong")})).catch((function(t){alert(t),e.history.push("/signin")})),ce()},color:"primary",autoFocus:!0,children:"Yes"})]})]}),Object(m.jsxs)(N.a,{component:"main",maxWidth:"xs",children:[Object(m.jsx)(w.a,{}),Object(m.jsx)(q.a,{color:"primary",style:{height:"50px",width:"50px",float:"right"},"aria-label":"New Room",onClick:function(){return e.history.push("/newroom")},children:Object(m.jsx)(H.a,{})}),Object(m.jsx)(W.a,{}),Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsxs)("div",{children:[Object(m.jsx)("h6",{children:"My Groups"}),Object(m.jsx)(W.a,{}),Object(m.jsx)(E.a,{children:l.sort((function(e,t){return e<t?-1:1})).map((function(t,a){return Object(m.jsxs)(R.a,{button:!0,onClick:function(){return e.history.push("/chat/".concat(t))},children:[Object(m.jsx)(A.a,{children:Object(m.jsx)(v.a,{children:Object(m.jsx)(Z.a,{color:"primary"})})}),Object(m.jsx)(D.a,{primary:t}),Object(m.jsxs)(T.a,{children:[Object(m.jsx)(z.a,{edge:"end","aria-label":"delete",children:Object(m.jsx)(Y.a,{color:"primary",onClick:function(){_(t),C(!0)}})}),Object(m.jsx)(z.a,{edge:"end","aria-label":"delete",children:Object(m.jsx)(J.a,{color:"secondary",onClick:function(){_(t),V(!0)}})})]})]},t)}))}),Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsx)("h6",{children:"All Groups"}),Object(m.jsx)(W.a,{}),Object(m.jsx)(E.a,{children:p.sort((function(e,t){return e<t?-1:1})).map((function(a,n){return Object(m.jsxs)(R.a,{button:!0,onClick:function(){return e.history.push("/chat/".concat(a))},children:[Object(m.jsx)(A.a,{children:Object(m.jsx)(v.a,{children:Object(m.jsx)(Z.a,{color:"primary"})})}),Object(m.jsx)(D.a,{primary:a}),Object(m.jsx)(T.a,{children:Object(m.jsx)(z.a,{edge:"end","aria-label":"delete",onClick:se.bind(t,a),children:Object(m.jsx)(Q.a,{color:"secondary"})})})]},a)}))})]}),Object(m.jsx)(k.a,{mt:8,className:a.footer,children:Object(m.jsx)(ge,{})})]})]})},ze=x,function(e){var t=Object(n.useState)(0),a=Object(s.a)(t,2),r=a[0],c=a[1];return Object(n.useEffect)((function(){var e=localStorage.getItem("token");j.a.create({baseURL:u,headers:{Authorization:"bearer ".concat(e)}}).get("getRooms").then((function(e){e.data,c(1)})).catch((function(e){c(2)}))})),0==r?Object(m.jsx)(p,{}):1==r?Object(m.jsx)(qe,Object(o.a)({},e)):Object(m.jsx)(ze,{redirect:"signin"})})}),Object(m.jsx)(O.b,{path:"/signin",component:function(e){var t=Pe(),a=(localStorage.getItem("token"),Object(n.useState)("")),r=Object(s.a)(a,2),c=r[0],i=r[1],o=Object(n.useState)(""),l=Object(s.a)(o,2),u=l[0],d=l[1];return Object(m.jsxs)(N.a,{component:"main",maxWidth:"xs",children:[Object(m.jsx)(w.a,{}),Object(m.jsxs)("div",{className:t.paper,children:[Object(m.jsx)(v.a,{className:t.avatar,children:Object(m.jsx)(Ae.a,{})}),Object(m.jsx)(I.a,{component:"h1",variant:"h5",children:"Sign in"}),Object(m.jsxs)("form",{className:t.form,noValidate:!0,children:[Object(m.jsx)(S.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",value:c,onChange:function(e){return i(e.target.value)},autoFocus:!0}),Object(m.jsx)(S.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",value:u,onChange:function(e){return d(e.target.value)},autoComplete:"current-password"}),Object(m.jsx)(y.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",onClick:function(t){t.preventDefault();var a={email:c,pass:u};j.a.post("/localSignin",a).then((function(t){var a=t.data,n=null,r=null,c=null;alert(a.msg),1==a.status&&(n=a.email,r=a.name,c=a.token,localStorage.setItem("name",r),localStorage.setItem("email",n),localStorage.setItem("token",c),e.history.push("/"))})).catch((function(e){return console.log(e)}))},className:t.submit,children:"Sign In"}),Object(m.jsxs)(De.a,{container:!0,children:[Object(m.jsx)(De.a,{item:!0,xs:!0,children:Object(m.jsx)(Re.b,{href:"#",children:"Forgot password?"})}),Object(m.jsx)(De.a,{item:!0,children:Object(m.jsx)(Re.b,{to:"/signup",variant:"body2",children:"Don't have an account?"})})]})]})]}),Object(m.jsx)(k.a,{mt:8,children:Object(m.jsx)(Fe,{})})]})}}),Object(m.jsx)(O.b,{path:"/signup",component:function(e){var t=Be(),a=(localStorage.getItem("token"),Object(n.useState)("")),r=Object(s.a)(a,2),c=r[0],i=r[1],o=Object(n.useState)(""),l=Object(s.a)(o,2),u=l[0],d=l[1],b=Object(n.useState)(""),h=Object(s.a)(b,2),p=h[0],O=h[1],x=Object(n.useState)(""),g=Object(s.a)(x,2),f=g[0],C=g[1],W=Object(n.useState)(""),E=Object(s.a)(W,2),R=E[0],D=E[1],T=Object(n.useState)(""),A=Object(s.a)(T,2),F=A[0],P=A[1];return Object(m.jsxs)(N.a,{component:"main",maxWidth:"xs",children:[Object(m.jsx)(w.a,{}),Object(m.jsxs)("div",{className:t.paper,children:[Object(m.jsx)(v.a,{className:t.avatar,children:Object(m.jsx)(Ae.a,{})}),Object(m.jsx)(I.a,{component:"h1",variant:"h5",children:"Sign up"}),Object(m.jsxs)("form",{className:t.form,noValidate:!0,children:[Object(m.jsx)(S.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Name",name:"name",value:c,onChange:function(e){return i(e.target.value)},autoFocus:!0}),Object(m.jsx)(S.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",value:u,onChange:function(e){return d(e.target.value)},autoFocus:!0}),Object(m.jsx)(y.a,{type:"submit",fullWidth:!0,variant:"contained",color:"secondary",className:t.submit,onClick:function(e){e.preventDefault();var t={email:u};j.a.post("/emailverify",t).then((function(e){var t=e.data;alert(t.msg),1==t.status&&P(t.otp)})).catch((function(e){return console.log(e)}))},children:"Send OTP"}),Object(m.jsx)(S.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"otp",label:"Enter OTP",name:"otp",value:R,onChange:function(e){return D(e.target.value)},autoFocus:!0}),Object(m.jsx)(S.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",value:p,onChange:function(e){return O(e.target.value)},autoComplete:"current-password"}),Object(m.jsx)(S.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",value:f,onChange:function(e){return C(e.target.value)},autoComplete:"current-password"}),Object(m.jsx)(y.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",onClick:function(t){if(t.preventDefault(),R==F){f!=p&&alert("Password and Confirm password don't match");var a={name:c,email:u,pass:p};j.a.post("/localSignup",a).then((function(t){var a=t.data,n=null,r=null,c=null;alert(a.msg),1==a.status&&(n=a.email,r=a.name,c=a.token,localStorage.setItem("name",r),localStorage.setItem("email",n),localStorage.setItem("token",c),e.history.push("/"))})).catch((function(e){return console.log(e)}))}else alert("Incorrect OTP")},className:t.submit,children:"Sign Up"}),Object(m.jsxs)(De.a,{container:!0,children:[Object(m.jsx)(De.a,{item:!0,xs:!0,children:Object(m.jsx)(Re.b,{href:"#",variant:"body2",children:"Forgot password?"})}),Object(m.jsx)(De.a,{item:!0,children:Object(m.jsx)(Re.b,{to:"/signin",variant:"body2",children:"Already have an account?"})})]})]})]}),Object(m.jsx)(k.a,{mt:8,children:Object(m.jsx)(Le,{})})]})}}),Object(m.jsx)(O.b,{path:"/enterroom",component:function(e,t){return function(a){var r=Object(n.useState)(0),c=Object(s.a)(r,2),i=c[0],l=c[1];return Object(n.useEffect)((function(){var e=localStorage.getItem("token");j.a.create({baseURL:u,headers:{Authorization:"bearer ".concat(e)}}).get("getRooms").then((function(e){e.data;l(1)})).catch((function(e){l(2)}))})),0==i?Object(m.jsx)(p,{}):1==i?Object(m.jsx)(e,Object(o.a)({},a)):Object(m.jsx)(t,{redirect:"signin"})}}((function(e){var t=Ge(),a=Object(n.useState)(""),r=Object(s.a)(a,2),c=r[0],i=r[1],l=Object(n.useState)(""),d=Object(s.a)(l,2),b=d[0],h=d[1];return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(Oe,Object(o.a)({name:"Enter Group"},e)),Object(m.jsxs)(N.a,{component:"main",maxWidth:"xs",children:[Object(m.jsx)(w.a,{}),Object(m.jsxs)("div",{className:t.paper,children:[Object(m.jsx)(v.a,{className:t.avatar,children:Object(m.jsx)(Z.a,{})}),Object(m.jsx)(I.a,{component:"h1",variant:"h5",children:"Enter Group"}),Object(m.jsxs)("form",{className:t.form,noValidate:!0,children:[Object(m.jsxs)(De.a,{container:!0,spacing:2,children:[Object(m.jsx)(De.a,{item:!0,xs:12,children:Object(m.jsx)(S.a,{variant:"outlined",required:!0,fullWidth:!0,id:"email",label:"Group Name",name:"email",autoComplete:"email",value:c,onChange:function(e){return i(e.target.value)}})}),Object(m.jsx)(De.a,{item:!0,xs:12,children:Object(m.jsx)(S.a,{variant:"outlined",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",value:b,onChange:function(e){return h(e.target.value)},autoComplete:"current-password"})})]}),Object(m.jsx)(y.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:t.submit,onClick:function(t){t.preventDefault();var a=localStorage.getItem("token"),n=j.a.create({baseURL:u,headers:{Authorization:"bearer ".concat(a)}}),r={name:c,pass:b};n.post("enterroom",r).then((function(t){var a=t.data;1==a.status?e.history.push("/chat/".concat(c)):alert(a.msg)})).catch((function(t){alert(t),e.history.push("/signin")}))},children:"Enter"}),Object(m.jsx)(De.a,{container:!0,children:Object(m.jsx)(De.a,{item:!0,xs:!0,children:Object(m.jsx)(Re.b,{to:"/newroom",variant:"body2",children:"Create New Group"})})})]})]})]})]})}),x)}),Object(m.jsx)(O.b,{path:"/newroom",component:function(e,t){return function(a){var r=Object(n.useState)(0),c=Object(s.a)(r,2),i=c[0],l=c[1];return Object(n.useEffect)((function(){var e=localStorage.getItem("token");j.a.create({baseURL:u,headers:{Authorization:"bearer ".concat(e)}}).get("getRooms").then((function(e){e.data;l(1)})).catch((function(e){l(2)}))})),0==i?Object(m.jsx)(p,{}):1==i?Object(m.jsx)(e,Object(o.a)({},a)):Object(m.jsx)(t,{redirect:"signin"})}}((function(e){var t=Ue(),a=Object(n.useState)(""),r=Object(s.a)(a,2),c=r[0],i=r[1],l=Object(n.useState)(""),d=Object(s.a)(l,2),b=d[0],h=d[1];return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(Oe,Object(o.a)({name:"Create Group"},e)),Object(m.jsxs)(N.a,{component:"main",maxWidth:"xs",children:[Object(m.jsx)(w.a,{}),Object(m.jsxs)("div",{className:t.paper,children:[Object(m.jsx)(v.a,{className:t.avatar,children:Object(m.jsx)(Z.a,{})}),Object(m.jsx)(I.a,{component:"h1",variant:"h5",children:"Create Group"}),Object(m.jsxs)("form",{className:t.form,noValidate:!0,children:[Object(m.jsxs)(De.a,{container:!0,spacing:2,children:[Object(m.jsx)(De.a,{item:!0,xs:12,children:Object(m.jsx)(S.a,{variant:"outlined",required:!0,fullWidth:!0,id:"email",label:"Group Name",name:"email",value:c,onChange:function(e){return i(e.target.value)},autoComplete:"email"})}),Object(m.jsx)(De.a,{item:!0,xs:12,children:Object(m.jsx)(S.a,{variant:"outlined",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",value:b,onChange:function(e){return h(e.target.value)},autoComplete:"current-password"})})]}),Object(m.jsx)(y.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:t.submit,onClick:function(t){t.preventDefault();var a=localStorage.getItem("token"),n=j.a.create({baseURL:u,headers:{Authorization:"bearer ".concat(a)}}),r={name:c,pass:b};n.post("newroom",r).then((function(t){var a=t.data;alert(a.msg),1==a.status&&e.history.push("/")})).catch((function(t){alert(t),e.history.push("/signin")}))},children:"Create"}),Object(m.jsx)(De.a,{container:!0,children:Object(m.jsx)(De.a,{item:!0,xs:!0,children:Object(m.jsx)(Re.b,{to:"/enterroom",variant:"body2",children:"Enter Already Existing Group"})})})]})]})]})]})}),x)}),Object(m.jsx)(O.b,{path:"/chat/:room",component:function(e,t){return function(a){var r=Object(n.useState)(0),c=Object(s.a)(r,2),i=c[0],l=c[1],d=Object(n.useState)("signin"),b=Object(s.a)(d,2),h=b[0],O=b[1],x=a.match.params.room;return Object(n.useEffect)((function(){var e=localStorage.getItem("token");j.a.create({baseURL:u,headers:{Authorization:"bearer ".concat(e)}}).get("getRooms").then((function(e){e.data.latest.includes(x)?l(1):(O("enterroom"),l(2))})).catch((function(e){l(2)}))})),0==i?Object(m.jsx)(p,{}):1==i?Object(m.jsx)(e,Object(o.a)({},a)):Object(m.jsx)(t,{redirect:h})}}(Ee,x)})]})}),document.getElementById("root"))}},[[216,1,2]]]);
//# sourceMappingURL=main.d8c21f4a.chunk.js.map