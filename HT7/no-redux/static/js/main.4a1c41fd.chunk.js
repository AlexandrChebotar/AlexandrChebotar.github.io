(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){e.exports=a(18)},16:function(e,t,a){},17:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),o=a(8),r=a.n(o),c=(a(16),a(1)),d=a(2),s=a(4),l=a(3),u=a(5),m=a(6),h=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(i)))).onClick=function(e){e.preventDefault();var t=a.props,n=t.name;(0,t.onClick)(n)},a}return Object(u.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.props.name;return i.a.createElement("button",{className:"btn"+e,onClick:this.onClick}," ",e," ")}}]),t}(n.Component),p=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(i)))).state={summary:a.props.data.summary,details:a.props.data.details},a.onSummaryChange=function(e){a.setState({summary:e.currentTarget.value})},a.onDetailsChange=function(e){a.setState({details:e.currentTarget.value})},a.onSave=function(){var e=a.props.data,t=e.id,n=e.made,i=e.detailedView,o=a.state,r={id:t,made:n,edited:!1,detailedView:i,summary:o.summary,details:o.details};a.props.onTodoPointChange("Save",r)},a.onCancel=function(){var e=a.props.data,t={id:e.id,made:e.made,edited:!1,detailedView:e.detailedView,summary:e.summary,details:e.details};a.props.onTodoPointChange("Cancel",t)},a}return Object(u.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.state,t=e.summary,a=e.details;return i.a.createElement("form",{className:"editor"},i.a.createElement("input",{type:"text",value:t,className:"summary",onChange:this.onSummaryChange}),i.a.createElement("textarea",{rows:"3",value:a,className:"details",onChange:this.onDetailsChange}),i.a.createElement(h,{name:"Save",onClick:this.onSave}),i.a.createElement(h,{name:"Cancel",onClick:this.onCancel}))}}]),t}(n.Component),f=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(i)))).onCheck=function(){a.props.onTodoPointChange("Made",a.props.data)},a.onClick=function(e){a.props.onTodoPointChange(e,a.props.data)},a}return Object(u.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.props.data,t=e.summary,a=e.details,n=e.made,o=e.edited,r=e.detailedView;return o?i.a.createElement(p,{data:this.props.data,onTodoPointChange:this.props.onTodoPointChange}):i.a.createElement("div",{className:n?"todoPoint made":"todoPoint"},i.a.createElement("div",{className:"summary"},i.a.createElement("input",{type:"checkbox",checked:n,onChange:this.onCheck}),t),r&&i.a.createElement("div",{className:"details"}," ",a," "),i.a.createElement(h,{name:"Details",onClick:this.onClick}),i.a.createElement(h,{name:"Edit",onClick:this.onClick}),i.a.createElement(h,{name:"Delete",onClick:this.onClick}))}}]),t}(n.Component),C=a(9),v=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(i)))).state={todoList:C},a.onTodoPointChange=function(e,t){var n,i=a.state.todoList;switch(e){case"Add":n=[{id:Math.max.apply(Math,Object(m.a)(i.map(function(e){return e.id})))+1,made:!1,edited:!0,detailedView:!1,summary:"",details:""}].concat(Object(m.a)(i));break;case"Details":n=i.map(function(e){return e.id===t.id&&(e.detailedView=!e.detailedView),e});break;case"Made":n=i.map(function(e){return e.id===t.id&&(e.made=!e.made),e});break;case"Edit":n=i.map(function(e){return e.id===t.id&&(e.edited=!0),e});break;case"Save":n=""===t.summary?i:i.map(function(e){return e.id===t.id?t:e});break;case"Cancel":if(""!==t.summary){n=i.map(function(e){return e.id===t.id?t:e});break}case"Delete":n=i.filter(function(e){return e.id!==t.id});break;default:throw new Error("Unexpected action type")}a.setState({todoList:n})},a}return Object(u.a)(t,e),Object(d.a)(t,[{key:"renderList",value:function(){var e=this,t=this.state.todoList,a=[];return t.length&&(a=t.map(function(t){return i.a.createElement(f,{key:t.id,data:t,onTodoPointChange:e.onTodoPointChange})})),a}},{key:"render",value:function(){var e=this;return i.a.createElement(i.a.Fragment,null,i.a.createElement("h1",null," TODO-list: "),i.a.createElement(h,{name:"Add",onClick:function(){return e.onTodoPointChange("Add")}}),this.renderList())}}]),t}(n.Component),y=(a(17),function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"app"},i.a.createElement(v,null))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e){e.exports=[{id:1,summary:"\u0418\u0437\u0443\u0447\u0438\u0442\u044c React",details:"\u041f\u0440\u043e\u0447\u0438\u0442\u0430\u0442\u044c \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u044e. \u041f\u0435\u0440\u0435\u0439\u0442\u0438 \u043a \u043f\u0440\u0430\u043a\u0442\u0438\u043a\u0435.",made:!1,edited:!1,detailedView:!0},{id:2,summary:"\u0421\u0445\u043e\u0434\u0438\u0442\u044c \u0432 \u043c\u0430\u0433\u0430\u0437\u0438\u043d",details:"\u041a\u0443\u043f\u0438\u0442\u044c \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u044b.",made:!1,edited:!1,detailedView:!1},{id:3,summary:"\u0421\u0434\u0435\u043b\u0430\u0442\u044c TODO-\u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435",details:"C \u043f\u043e\u043c\u043e\u0449\u044c\u044e React \u0438 Redux \u0441\u0434\u0435\u043b\u0430\u0442\u044c TODO-\u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435.",made:!0,edited:!1,detailedView:!0}]}},[[10,1,2]]]);
//# sourceMappingURL=main.4a1c41fd.chunk.js.map