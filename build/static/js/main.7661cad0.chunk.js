(this["webpackJsonptask-tracker"]=this["webpackJsonptask-tracker"]||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),o=n(8),a=n.n(o),s=(n(14),n(9)),l=n(5),i=n(2),d=n(0),u=function(e){var t=e.color,n=e.text,c=e.onClick;return Object(d.jsx)("button",{onClick:c,className:"btn",style:{backgroundColor:t},children:n})};u.defaultProps={color:"steelblue"};var j=u,b=function(e){var t=e.title,n=e.onAdd,c=e.colorIndicator,r=e.showAdd;return Object(d.jsxs)("header",{className:"header",children:[Object(d.jsxs)("h1",{children:["Welcome to ",t]}),Object(d.jsx)(j,{color:c,text:r?"Add":"Close",onClick:n})]})};b.defaultProps={title:"Task Tracker"};var h=b,O=n(7),m=function(e){var t=e.task,n=e.onDelete,c=e.onToggle;return Object(d.jsxs)("div",{className:"task ".concat(t.reminder?"reminder":""),onDoubleClick:function(){return c(t.id)},children:[Object(d.jsxs)("h3",{children:[t.text," ",Object(d.jsx)(O.a,{style:{color:"red",cursor:"pointer"},onClick:function(){return n(t.id)}})]}),Object(d.jsx)("p",{children:t.day})]})},x=function(e){var t=e.tasks,n=e.onDelete,c=e.onToggle;return Object(d.jsx)(d.Fragment,{children:t.map((function(e){return Object(d.jsx)(m,{task:e,onDelete:n,onToggle:c},e.id)}))})},f=function(e){var t=e.onAdd,n=Object(c.useState)(""),r=Object(i.a)(n,2),o=r[0],a=r[1],s=Object(c.useState)(""),l=Object(i.a)(s,2),u=l[0],j=l[1],b=Object(c.useState)(!1),h=Object(i.a)(b,2),O=h[0],m=h[1];return Object(d.jsxs)("form",{className:"add-form",onSubmit:function(e){e.preventDefault(),o?(t({text:o,day:u,reminder:O}),a(""),j(""),m(!1)):alert("Please add a task")},children:[Object(d.jsxs)("div",{className:"form-control",children:[Object(d.jsx)("label",{children:"Task"}),Object(d.jsx)("input",{type:"text",placeholder:"Add Task",value:o,onChange:function(e){return a(e.target.value)}})]}),Object(d.jsxs)("div",{className:"form-control",children:[Object(d.jsx)("label",{children:"Day & Time"}),Object(d.jsx)("input",{type:"text",placeholder:"Add Day & Time",value:u,onChange:function(e){return j(e.target.value)}})]}),Object(d.jsxs)("div",{className:"form-control form=control-check",children:[Object(d.jsx)("label",{children:"Set Reminder"}),Object(d.jsx)("input",{type:"checkbox",checked:O,value:O,onClick:function(e){return m(e.currentTarget.checked)}})]}),Object(d.jsx)("input",{type:"submit",value:"Save Task",className:"btn btn-block"})]})},k=function(e){e.title;var t=Object(c.useState)(!1),n=Object(i.a)(t,2),r=n[0],o=n[1],a=Object(c.useState)([{id:1,text:"Work at CSIT",day:"Feb 5th at 2:30pm",reminder:!1},{id:2,text:"Buy groceries",day:"Feb 5th at 2:30pm",reminder:!0}]),u=Object(i.a)(a,2),j=u[0],b=u[1];return Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)(h,{title:"Add",onAdd:function(){return o(!r)},colorIndicator:r?"red":"blue",showAdd:r}),r&&Object(d.jsx)(f,{onAdd:function(e){var t=Math.floor(1e4*Math.random())+1,n=Object(l.a)({id:t},e);b([].concat(Object(s.a)(j),[n]))}}),j.length>0?Object(d.jsx)(x,{tasks:j,onDelete:function(e){console.log("delete",e),b(j.filter((function(t){return t.id!==e})))},onToggle:function(e){console.log("Toggled: ",e),b(j.map((function(t){return t.id===e?Object(l.a)(Object(l.a)({},t),{},{reminder:!t.reminder}):t})))}}):"No Tasks To Show"]})},g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,o=t.getLCP,a=t.getTTFB;n(e),c(e),r(e),o(e),a(e)}))};a.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(k,{})}),document.getElementById("root")),g()}},[[16,1,2]]]);
//# sourceMappingURL=main.7661cad0.chunk.js.map