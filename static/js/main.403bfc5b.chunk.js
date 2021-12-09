(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(7),i=n.n(c),s=(n(15),n(9)),o=n(2),l=n(3),u=n(5),d=n(4),b=n(10),h=n(8),j=n(0),m=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={name:"",number:""},e.handleChange=function(t){var n=t.target,a=n.name,r=n.value;e.setState(Object(h.a)({},a,r))},e.handleSubmit=function(t){t.preventDefault();var n=e.state,a=n.name,r=n.number;e.props.onSubmit(a,r),e.resetState()},e.resetState=function(){e.setState({name:"",number:""})},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this.state,t=e.name,n=e.number;return Object(j.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(j.jsxs)("label",{children:["Name",Object(j.jsx)("input",{type:"text",name:"name",value:t,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,onChange:this.handleChange})]}),Object(j.jsxs)("label",{htmlFor:"",children:["Number",Object(j.jsx)("input",{type:"tel",name:"number",value:n,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,onChange:this.handleChange})]}),Object(j.jsx)("button",{type:"submit",children:"Add contact"})]})}}]),n}(a.Component),f=m,p=function(e){var t=e.filter,n=e.onChange;return Object(j.jsx)("div",{children:Object(j.jsxs)("label",{children:["Find contacts by name",Object(j.jsx)("input",{type:"text",name:"filter",value:t,onChange:n})]})})},O=function(e){var t=e.contacts,n=e.onClick,a=function(e){var t=e.target.name;n(t)};return Object(j.jsx)("ul",{children:t.map((function(e){var t=e.id,n=e.name,r=e.number;return Object(j.jsxs)("li",{children:[Object(j.jsxs)("p",{children:[" ",n]}),Object(j.jsxs)("p",{children:[" ",r]}),Object(j.jsx)("button",{type:"button",name:t,onClick:a,children:"Delete"})]},t)}))})},v=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},e.addNewContact=function(t,n){var a={name:t,number:n,id:Object(b.a)()},r=t.toLowerCase();e.state.contacts.find((function(e){return e.name.toLowerCase()===r}))?alert("".concat(t," is already in contacts.")):""===t?alert("Please type your info in the field. It is empty."):e.setState((function(e){var t=e.contacts;return{contacts:[].concat(Object(s.a)(t),[a])}}))},e.deleteContact=function(t){e.setState((function(e){return{contacts:e.contacts.filter((function(e){return e.id!==t}))}}))},e.filterContacts=function(){var t=e.state,n=t.filter;return t.contacts.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}))},e.updateFilter=function(t){var n=t.target.value;e.setState({filter:n})},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this.state.filter,t=this.filterContacts();return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{children:"Phonebook"}),Object(j.jsx)(f,{onSubmit:this.addNewContact}),Object(j.jsx)("h2",{children:"Contacts"}),Object(j.jsx)(p,{filter:e,onChange:this.updateFilter}),Object(j.jsx)(O,{contacts:t,onClick:this.deleteContact})]})})}}]),n}(a.Component),C=v;i.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(C,{})}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.403bfc5b.chunk.js.map