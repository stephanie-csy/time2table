(this.webpackJsonptime2table=this.webpackJsonptime2table||[]).push([[0],{134:function(e,t,n){e.exports={box:"Box_box__2nHJZ"}},250:function(e,t,n){},251:function(e,t,n){"use strict";n.r(t);var a=n(99),r=n(0),i=n(13),s=n.n(i),c=n(310),o=n(37),l=n(8),d=(n(116),n(117),{apiKey:"AIzaSyA0662SOxbjhFXKn6grgenniWR2reEzPbU",authDomain:"time2table-8114c.firebaseapp.com",projectId:"time2table-8114c",storageBucket:"time2table-8114c.appspot.com",messagingSenderId:"959920136596",appId:"1:959920136596:web:a65cc566d5c845b958af81"});l.a.initializeApp(d);l.a.auth(),l.a.firestore();var u=n(57),j=n(309),h=n(311),b=n(86),m=n(318),p=n(142),x=n(304),O=n(253),f=n(134),g=n.n(f),v=n(4);var y=function(e){var t=e.children;return Object(v.jsx)(O.a,{className:g.a.box,elevation:3,children:t})},S=n(294);var N=function(){return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsxs)(y,{children:[Object(v.jsx)("h1",{children:"Getting Started"}),Object(v.jsx)("body",{children:"Add a friend to start time2tabling together!"}),Object(v.jsx)(S.a,{variant:"contained",color:"primary",children:"Add friend"})]}),Object(v.jsxs)(y,{children:[Object(v.jsx)("h1",{children:"Activity"}),Object(v.jsx)("body",{children:"You have a pending friend request from Jason."}),Object(v.jsx)(S.a,{variant:"contained",color:"primary",children:"Accept"})]}),Object(v.jsxs)(y,{children:[Object(v.jsx)("h1",{children:"Upcoming Meet Ups"}),Object(v.jsx)("body",{children:"Tuesday, 25 May 2021 13:00 - 15:00 with Besties"})]})]})},w=n(79),P=n(80),C=n(85),T=n(84),k=n(46),G=n(300),A=n(81),E=n.n(A),F=n(314),I=n(313),D=n(297),L=n(299),R=n(298),q=n(295),B=n(296),Q=n(139),M=n.n(Q),_=function(e){var t=e.data,n=e.header,a=e.handleRemove,r=(e.startEditing,e.editIdx),i=(e.handleSave,e.stopEditing,e.handleSort);e.sortDirection,e.columnToSort;return Object(v.jsxs)(D.a,{children:[Object(v.jsx)(R.a,{children:Object(v.jsxs)(q.a,{children:[n.map((function(e,t){return Object(v.jsx)(B.a,{children:Object(v.jsx)("div",{style:{display:"flex",alignItems:"center"},onClick:function(){return i(e.prop)},children:Object(v.jsx)("span",{children:e.name})})},"thc-".concat(t))})),Object(v.jsx)(B.a,{})]})}),Object(v.jsx)(L.a,{children:t.map((function(e,t){return function(e,t,n,a,r,i,s,c){return i===t?Object(v.jsx)(q.a,{selectable:!1},"inline-form-".concat(t)):Object(v.jsxs)(q.a,{selectable:!1,children:[n.map((function(t,n){return Object(v.jsx)(B.a,{children:e[t.prop]},"trc-".concat(n))})),Object(v.jsx)(B.a,{children:Object(v.jsx)(M.a,{onClick:function(){return a(t)}})})]},"tr-".concat(t))}(e,t,n,a,0,r)}))})]})},J={asc:"desc",desc:"asc"},U=function(e){Object(C.a)(n,e);var t=Object(T.a)(n);function n(){var e;Object(w.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={data:[{firstName:"Tann",lastName:"Gounin",username:"tgounin0",email:"tgounin0@wordpress.com",passsword:"yJG2MuL5piY"},{firstName:"Elana",lastName:"Ricioppo",username:"ericioppo1",email:"ericioppo1@timesonline.co.uk",passsword:"S7p9ReUoQe"},{firstName:"Bentlee",lastName:"Decourt",username:"bdecourt2",email:"bdecourt2@about.me",passsword:"MWU9hc"},{firstName:"Hyacintha",lastName:"Choudhury",username:"hchoudhury3",email:"hchoudhury3@va.gov",passsword:"kRtWP1"},{firstName:"Ari",lastName:"Spedroni",username:"aspedroni4",email:"aspedroni4@sun.com",passsword:"o78ibUPPmDlZ"},{firstName:"Abelard",lastName:"Rodriguez",username:"arodriguez5",email:"arodriguez5@shutterfly.com",passsword:"g2jd4AwfpA"},{firstName:"Ikey",lastName:"Latek",username:"ilatek6",email:"ilatek6@berkeley.edu",passsword:"GAsgPpKvJx"},{firstName:"Justis",lastName:"Habbeshaw",username:"jhabbeshaw7",email:"jhabbeshaw7@simplemachines.org",passsword:"GN2aQt3ZPq"},{firstName:"Maddie",lastName:"Bayne",username:"mbayne8",email:"mbayne8@constantcontact.com",passsword:"H1GmQcyG6"},{firstName:"Gerrie",lastName:"Rulton",username:"grulton9",email:"grulton9@reverbnation.com",passsword:"tcwp6oONe"}],editIdx:-1,columnToSort:"",sortDirection:"desc",query:"",columnToQuery:"firstName"},e.handleRemove=function(t){e.setState((function(e){return{data:e.data.filter((function(e,n){return n!==t}))}}))},e.startEditing=function(t){e.setState({editIdx:t})},e.stopEditing=function(){e.setState({editIdx:-1})},e.handleSave=function(t,n){e.setState((function(e){return{data:e.data.map((function(e,a){return a===t?n:e}))}})),e.stopEditing()},e.handleSort=function(t){e.setState((function(e){return{columnToSort:t,sortDirection:e.columnToSort===t?J[e.sortDirection]:"asc"}}))},e}return Object(P.a)(n,[{key:"render",value:function(){var e=this,t=this.state.query.toLowerCase();return Object(v.jsx)(G.a,{children:Object(v.jsxs)("div",{className:"FriendsPage",children:[Object(v.jsx)(S.a,{display:"flex",alignItems:"flex-start",variant:"contained",color:"primary",style:{height:50},children:Object(v.jsx)(k.b,{to:"/AddFriendsPage",children:"Add Friend"})}),Object(v.jsx)("h1",{children:"Current Friends:"}),Object(v.jsx)("div",{style:{display:"flex"},children:Object(v.jsxs)("div",{style:{display:"flex",margin:"auto"},children:[Object(v.jsx)(I.a,{id:"outlined-basic",label:"Current Friend",variant:"outlined",value:this.state.query,onChange:function(t){return e.setState({query:t.target.value})},floatingLabelFixed:!0}),Object(v.jsx)(F.a,{style:{marginLeft:"1em"},floatingLabelText:"Select a column",value:this.state.columnToQuery,onChange:function(t,n,a){return e.setState({columnToQuery:a})},children:Object(v.jsx)(x.a,{value:"firstName",children:"First Name"})})]})}),Object(v.jsx)(_,{handleSort:this.handleSort,handleRemove:this.handleRemove,startEditing:this.startEditing,editIdx:this.state.editIdx,stopEditing:this.stopEditing,handleSave:this.handleSave,columnToSort:this.state.columnToSort,sortDirection:this.state.sortDirection,data:E()(this.state.query?this.state.data.filter((function(n){return n[e.state.columnToQuery].toLowerCase().includes(t)})):this.state.data,this.state.columnToSort,this.state.sortDirection),header:[{name:Object(v.jsx)("b",{children:"First Name"}),prop:"firstName"},{name:Object(v.jsx)("b",{children:"Last Name"}),prop:"lastName"},{name:Object(v.jsx)("b",{children:"Email"}),prop:"email"}]})]})})}}]),n}(r.Component),z={asc:"desc",desc:"asc"},H=function(e){Object(C.a)(n,e);var t=Object(T.a)(n);function n(){var e;Object(w.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={data:[{groupName:"BFFs 4ever!",lastName:"Gounin",members:"Person 1, Person 2, Person 3"},{groupName:"secondary school friends",lastName:"Ricioppo",members:"Person 4, Person 5"},{groupName:"JC friends",lastName:"Decourt",members:"Person 6, Person 7, Person 8"},{groupName:"uni friends",lastName:"Choudhury",members:"Person 9, Person 10, Person 11, Person 12"}],editIdx:-1,columnToSort:"",sortDirection:"desc",query:"",columnToQuery:"groupName"},e.handleRemove=function(t){e.setState((function(e){return{data:e.data.filter((function(e,n){return n!==t}))}}))},e.startEditing=function(t){e.setState({editIdx:t})},e.stopEditing=function(){e.setState({editIdx:-1})},e.handleSave=function(t,n){e.setState((function(e){return{data:e.data.map((function(e,a){return a===t?n:e}))}})),e.stopEditing()},e.handleSort=function(t){e.setState((function(e){return{columnToSort:t,sortDirection:e.columnToSort===t?z[e.sortDirection]:"asc"}}))},e}return Object(P.a)(n,[{key:"render",value:function(){var e=this,t=this.state.query.toLowerCase();return Object(v.jsx)(G.a,{children:Object(v.jsxs)("div",{className:"FriendsPage",children:[Object(v.jsx)(S.a,{display:"flex",alignItems:"flex-start",variant:"contained",color:"primary",style:{height:50},children:Object(v.jsx)(k.b,{to:"/CreateGroupPage",children:"Create New Group"})}),Object(v.jsx)("h1",{children:"Current Friend Groups:"}),Object(v.jsx)("div",{style:{display:"flex"},children:Object(v.jsxs)("div",{style:{display:"flex",margin:"auto"},children:[Object(v.jsx)(I.a,{id:"outlined-basic",label:"Current Friend Groups",variant:"outlined",value:this.state.query,onChange:function(t){return e.setState({query:t.target.value})},floatingLabelFixed:!0}),Object(v.jsx)(F.a,{style:{marginLeft:"1em"},floatingLabelText:"Select a column",value:this.state.columnToQuery,onChange:function(t,n,a){return e.setState({columnToQuery:a})},children:Object(v.jsx)(x.a,{value:"groupName",children:"Group Name"})})]})}),Object(v.jsx)(_,{handleSort:this.handleSort,handleRemove:this.handleRemove,startEditing:this.startEditing,editIdx:this.state.editIdx,stopEditing:this.stopEditing,handleSave:this.handleSave,columnToSort:this.state.columnToSort,sortDirection:this.state.sortDirection,data:E()(this.state.query?this.state.data.filter((function(n){return n[e.state.columnToQuery].toLowerCase().includes(t)})):this.state.data,this.state.columnToSort,this.state.sortDirection),header:[{name:Object(v.jsx)("b",{children:"Group Name"}),prop:"groupName"},{name:Object(v.jsx)("b",{children:"Members"}),prop:"members"}]})]})})}}]),n}(r.Component),W=n(141);n.p;function Y(){var e=Object(r.useState)(new Date),t=Object(u.a)(e,2),n=t[0],a=t[1];return Object(v.jsxs)("div",{className:"Sample",children:[Object(v.jsx)("header",{children:Object(v.jsx)("h1",{children:"Your Timetable"})}),Object(v.jsx)("div",{className:"Sample__container",children:Object(v.jsx)("main",{className:"Sample__container__content",children:Object(v.jsx)(W.a,{onChange:a,showWeekNumbers:!0,value:n})})})]})}var K=function(){return Object(v.jsxs)("div",{children:[Object(v.jsx)(Y,{}),Object(v.jsxs)(y,{children:[Object(v.jsx)("h1",{children:"Your Profile"}),Object(v.jsx)("body",{children:"Edit your profile!"})]})]})};var Z=function(){return Object(v.jsxs)(y,{children:[Object(v.jsx)("h1",{children:"Settings"}),Object(v.jsx)("body",{children:"Change your settings!"})]})};var X=function(){return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("h1",{children:"Login"}),Object(v.jsx)(o.a,{children:function(e){var t=e.firebase;return Object(v.jsx)(S.a,{variant:"contained",color:"primary",onClick:function(){return function(e){var t=new e.auth.GoogleAuthProvider;e.auth().signInWithPopup(t)}(t)},children:"Sign in with Google"})}})]})};var V=function(){return Object(v.jsxs)(y,{children:[Object(v.jsx)("h1",{children:"Add Friends"}),Object(v.jsx)("body",{children:"Add a friend to start time2tabling together!"})]})};var $=function(){return Object(v.jsxs)(y,{children:[Object(v.jsx)("h1",{children:"Create Group"}),Object(v.jsx)("body",{children:"Create a group with your friends to start time2tabling together!"})]})},ee=(n(250),n(58)),te=n(15),ne=n(305),ae=n(19),re=n(306),ie=n(303),se=n(254),ce=n(307),oe=n(308),le=n(315),de=n(316),ue=n(140),je=n.n(ue),he=180,be=Object(ne.a)((function(e){return{root:{display:"flex"},drawer:Object(ee.a)({},e.breakpoints.up("sm"),{width:he,flexShrink:0}),appBar:Object(ee.a)({marginLeft:he},e.breakpoints.up("sm"),{width:"calc(100% - ".concat(he,"px)")}),menuButton:Object(ee.a)({marginRight:e.spacing(2)},e.breakpoints.up("sm"),{display:"none"}),toolbar:e.mixins.toolbar,drawerPaper:{width:he},content:{flexGrow:1,padding:e.spacing(3)}}}));var me=function(e){var t=e.container,n=be(),a=Object(ae.a)(),i=Object(r.useState)(!1),s=Object(u.a)(i,2),c=s[0],o=s[1],l=function(){o(!c)},d=Object(v.jsxs)("div",{children:[Object(v.jsx)("div",{className:n.toolbar}),Object(v.jsx)(re.a,{}),Object(v.jsx)(ie.a,{children:["Home","Friends","Groups","Profile","Settings"].map((function(e,t){return Object(v.jsx)(se.a,{component:k.b,to:"/"+e+"Page",children:Object(v.jsx)(ce.a,{primary:e})},e)}))})]});return Object(v.jsxs)("div",{children:[Object(v.jsx)(oe.a,{color:"inherit","aria-label":"open drawer",edge:"start",onClick:l,className:n.menuButton,children:Object(v.jsx)(je.a,{})}),Object(v.jsxs)(k.a,{children:[Object(v.jsxs)("nav",{className:n.drawer,"aria-label":"mailbox folders",children:[Object(v.jsx)(le.a,{smUp:!0,implementation:"css",children:Object(v.jsx)(de.a,{container:t,variant:"temporary",anchor:"rtl"===a.direction?"right":"left",open:c,onClose:l,classes:{paper:n.drawerPaper},ModalProps:{keepMounted:!0},children:d})}),Object(v.jsx)(le.a,{xsDown:!0,implementation:"css",children:Object(v.jsx)(de.a,{classes:{paper:n.drawerPaper},variant:"permanent",open:!0,children:d})})]}),Object(v.jsxs)("main",{className:n.content,children:[Object(v.jsx)("div",{className:n.toolbar}),Object(v.jsxs)(te.c,{children:[Object(v.jsx)(te.a,{path:"/HomePage",exact:!0,component:function(){return Object(v.jsx)(N,{})}}),Object(v.jsx)(te.a,{path:"/FriendsPage",exact:!0,component:function(){return Object(v.jsx)(U,{})}}),Object(v.jsx)(te.a,{path:"/GroupsPage",exact:!0,component:function(){return Object(v.jsx)(H,{})}}),Object(v.jsx)(te.a,{path:"/ProfilePage",exact:!0,component:function(){return Object(v.jsx)(K,{})}}),Object(v.jsx)(te.a,{path:"/SettingsPage",exact:!0,component:function(){return Object(v.jsx)(Z,{})}}),Object(v.jsx)(te.a,{path:"/AddFriendsPage",exact:!0,component:function(){return Object(v.jsx)(V,{})}}),Object(v.jsx)(te.a,{path:"/CreateGroupPage",exact:!0,component:function(){return Object(v.jsx)($,{})}})]})]})]})]})};function pe(){return Object(v.jsxs)("div",{className:"App",children:[Object(v.jsx)(xe,{}),Object(v.jsx)("div",{style:{maxWidth:"64rem",margin:"0 auto"},children:Object(v.jsxs)(o.a,{children:[Object(v.jsx)(o.c,{children:Object(v.jsx)(me,{})}),Object(v.jsx)(o.d,{children:Object(v.jsx)(X,{})})]})})]})}function xe(){var e=Object(r.useState)(null),t=Object(u.a)(e,2),n=t[0],a=t[1],i=function(e){a(e.currentTarget)},s=function(){a(null)};return Object(v.jsxs)(j.a,{position:"static",children:[Object(v.jsx)(c.a,{}),Object(v.jsxs)(h.a,{children:[Object(v.jsx)(b.a,{variant:"h6",style:{flexGrow:1,textAlign:"left",position:"relative",left:180},children:"Time2Table"}),Object(v.jsx)(o.c,{children:function(e){var t=e.user,a=e.firebase;return Object(v.jsxs)("div",{children:[Object(v.jsx)(m.a,{alt:t.displayName,src:t.photoURL,"aria-controls":"simple-menu","aria-haspopup":"true",onClick:i}),Object(v.jsx)(p.a,{id:"simple-menu",anchorEl:n,keepMounted:!0,open:Boolean(n),onClose:s,children:Object(v.jsx)(x.a,{onClick:function(){return function(e){s(),e.auth().signOut()}(a)},children:"Logout"})})]})}})]})]})}var Oe=document.getElementById("root");s.a.render(Object(v.jsxs)(r.StrictMode,{children:[Object(v.jsx)(c.a,{}),Object(v.jsx)(o.b,Object(a.a)(Object(a.a)({},d),{},{firebase:l.b,children:Object(v.jsx)(pe,{})}))]}),Oe)}},[[251,1,2]]]);
//# sourceMappingURL=main.8d7d95e6.chunk.js.map