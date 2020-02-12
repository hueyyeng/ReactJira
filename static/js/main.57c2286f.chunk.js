(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,,,,,,,,,function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=function(e){return r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:e.name,className:"form-label"},e.title),r.a.createElement("input",Object.assign({className:"form-control",id:e.name,name:e.name,type:e.inputtype,value:e.value,onChange:e.onChange,placeholder:e.placeholder},e)))}},function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=function(e){return r.a.createElement("button",{style:e.style,className:"primary"===e.type?"btn btn-primary":"btn btn-secondary",onClick:e.action,disabled:e.disabled},e.title)}},,,function(e,t,a){"use strict";(function(e){var n=a(9),r=a.n(n),s=a(6),l=a(2),i=a(3),o=a(4),u=a(7),c=a(5),h=a(1),d=a(8),m=a(0),p=a.n(m),b=a(10),f=a(11),y="https://cors-anywhere.herokuapp.com/",v={maxWidth:500},w=function(t){function a(e){var t;return Object(i.a)(this,a),(t=Object(u.a)(this,Object(c.a)(a).call(this,e))).state={currentUser:{email:"",password:""},disabledButton:!0,userTasks:"List of tasks will be display here...",sprintGoal:"Active sprint goal goes here..."},t.handleEmail=t.handleEmail.bind(Object(h.a)(t)),t.handlePassword=t.handlePassword.bind(Object(h.a)(t)),t.handleTasks=t.handleTasks.bind(Object(h.a)(t)),t.handleSprintGoal=t.handleSprintGoal.bind(Object(h.a)(t)),t.handleFormSubmit=t.handleFormSubmit.bind(Object(h.a)(t)),t.handleClearForm=t.handleClearForm.bind(Object(h.a)(t)),t.handleInput=t.handleInput.bind(Object(h.a)(t)),t}return Object(d.a)(a,t),Object(o.a)(a,[{key:"handleEmail",value:function(e){var t=e.target.value;this.setState((function(e){return{currentUser:Object(l.a)({},e.currentUser,{name:t})}}))}},{key:"handlePassword",value:function(e){var t=e.target.value;this.setState((function(e){return{currentUser:Object(l.a)({},e.currentUser,{name:t})}}))}},{key:"handleTasks",value:function(e){return p.a.createElement("ol",null,e.map((function(e){return p.a.createElement("li",{key:e.key},e.key," : ",e.fields.summary)})))}},{key:"handleSprintGoal",value:function(e){var t=e.target.value;this.setState((function(e){return{sprintGoal:Object(l.a)({},e.sprintGoal,{name:t})}}))}},{key:"handleInput",value:function(e){var t=this,a=e.target.value,n=e.target.name;a?this.setState((function(e){return{currentUser:Object(l.a)({},e.currentUser,Object(s.a)({},n,a)),disabledButton:""===t.state.currentUser.email||""===t.state.currentUser.password}})):(console.log(this.state.disabledButton),this.setState({disabledButton:!0}))}},{key:"handleFormSubmit",value:function(t){var a,n,s,l,i,o=this;return r.a.async((function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,r.a.awrap(this.handleJiraAuth(t));case 2:if(a=u.sent,this.setState({sprintGoal:a.values[0].goal}),null===(n=a.values[0].id)){u.next=14;break}return s="https://jewelpaymentech.atlassian.net/rest/agile/1.0/sprint/".concat(n,"/issue?jql=assignee=currentuser()&fields=summary"),l=this.state.currentUser,(i=new Headers).set("Authorization","Basic "+e.from(l.email+":"+l.password).toString("base64")),i.append("Content-Type","application/json"),u.abrupt("return",fetch(y+s,{method:"GET",headers:i}).then((function(e){return e.json()})).then((function(e){var t=e.issues;o.setState({userTasks:o.handleTasks(t)})})).catch((function(e){return console.warn(e)})));case 14:this.setState({userTasks:"Something went wrong... please try again later."});case 15:case"end":return u.stop()}}),null,this)}},{key:"handleJiraAuth",value:function(t){t.preventDefault();var a=this.state.currentUser,n=new Headers;return n.set("Authorization","Basic "+e.from(a.email+":"+a.password).toString("base64")),n.append("Content-Type","application/json"),fetch(y+"https://jewelpaymentech.atlassian.net/rest/agile/1.0/board/45/sprint?state=active",{method:"GET",headers:n}).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){return console.warn(e)}))}},{key:"handleClearForm",value:function(e){e.preventDefault(),this.setState({currentUser:{email:"",password:""},disabledButton:!0})}},{key:"render",value:function(){return p.a.createElement("form",{className:"container-fluid",onSubmit:this.handleFormSubmit},p.a.createElement(b.a,{inputtype:"text",title:"Username (Email Address): ",name:"email",value:this.state.currentUser.email,placeholder:"Enter your email",onChange:this.handleInput})," ",p.a.createElement(b.a,{inputtype:"text",type:"password",title:"Password (JIRA Auth Token): ",name:"password",value:this.state.currentUser.password,placeholder:"Enter your password",onChange:this.handleInput})," ",p.a.createElement(f.a,{action:this.handleFormSubmit,type:"primary",title:"Submit",style:E,disabled:this.state.disabledButton})," ",p.a.createElement(f.a,{action:this.handleClearForm,type:"secondary",title:"Clear",style:E})," ",p.a.createElement("div",null,p.a.createElement("h3",null,"Sprint Goal:")),p.a.createElement("div",null,p.a.createElement("div",{style:v},this.state.sprintGoal)),p.a.createElement("div",null,p.a.createElement("h3",null,"Tasks:")),p.a.createElement("div",null,this.state.userTasks))}}]),a}(m.Component),E={margin:"10px 10px 10px 10px"};t.a=w}).call(this,a(22).Buffer)},function(e,t,a){e.exports=a.p+"static/media/jpt_logo2.4a4f9823.png"},function(e,t,a){e.exports=a(17)},function(e,t,a){"use strict";a.r(t);var n=a(3),r=a(4),s=a(7),l=a(5),i=a(8),o=a(0),u=a.n(o),c=a(13),h=a(14),d=a(15),m=a.n(d),p="Get Tasks from JPT JIRA Current Active Sprint",b={position:"absolute",bottom:0,width:"100%",height:"60px"},f={maxWidth:"100%",maxHeight:"100%"},y=function(e){function t(){return Object(n.a)(this,t),Object(s.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){document.title=p}},{key:"render",value:function(){return u.a.createElement("div",{className:"test"},u.a.createElement("img",{src:m.a,style:f,width:"500",alt:"logo"}),u.a.createElement("h2",null,p),u.a.createElement(h.a,null),u.a.createElement("div",{style:b},"Author: Huey Yeng | Artwork: ",u.a.createElement("a",{href:"https://www.irasutoya.com/"},"https://www.irasutoya.com/")))}}]),t}(o.Component);Object(c.render)(u.a.createElement(y,null),document.getElementById("root"))}],[[16,1,2]]]);
//# sourceMappingURL=main.57c2286f.chunk.js.map