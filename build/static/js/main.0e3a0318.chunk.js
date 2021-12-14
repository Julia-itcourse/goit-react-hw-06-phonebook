(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{15:function(t,e,n){t.exports={form__group:"PhonebookForm_form__group__ntmeT",form__label:"PhonebookForm_form__label__3yZnm",form__input:"PhonebookForm_form__input__1-esy",button:"PhonebookForm_button__1yYP6",notification:"PhonebookForm_notification__1pZYs"}},17:function(t,e,n){t.exports={text:"ContactItem_text__JyVYo",item:"ContactItem_item__rdGND",button:"ContactItem_button__sAFeE"}},23:function(t,e,n){t.exports={filter__wrap:"Filter_filter__wrap__Jjrpz",form__input:"Filter_form__input__3a4E7"}},32:function(t,e,n){},33:function(t,e,n){},39:function(t,e){},40:function(t,e,n){},41:function(t,e,n){},42:function(t,e,n){"use strict";n.r(e);var o=n(1),a=n(0),c=n(7),r=n.n(c),i=(n(32),n(9)),s=n(10),u=n(13),l=n(12),m=n(17),b=n.n(m),j=function(t){var e=t.contact,n=t.onRemoveContact;return Object(o.jsxs)("li",{className:b.a.item,children:[Object(o.jsxs)("span",{className:b.a.text,children:[e.name,": ",e.number]}),Object(o.jsx)("button",{className:b.a.button,type:"button",onClick:n,children:"Remove"})]})},p=n(46),f=n(44),h=(n(33),n(5)),d=n(6),O=(n(39),{onAddContact:Object(d.b)("contact/add",(function(t){return{payload:{newContact:{name:t.name,number:t.number,id:t.id}}}})),onRemoveContact:Object(d.b)("contact/remove"),onChangeFilter:Object(d.b)("contact/filter"),onSaveContact:Object(d.b)("contacts/save")}),_=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){return Object(i.a)(this,n),e.apply(this,arguments)}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.props.onSaveContact()}},{key:"componentDidUpdate",value:function(t,e){return this.props.contacts?localStorage.setItem("contacts",JSON.stringify(this.props.contacts)):[]}},{key:"render",value:function(){var t=this;return Object(o.jsx)(p.a,{component:"ul",className:"ContactList",children:this.props.contacts.map((function(e){return Object(o.jsx)(f.a,{timeout:250,classNames:"ContactList-item-slide",children:Object(o.jsx)(j,{contact:e,onRemoveContact:function(){return t.props.onRemoveContact(e.id)}})},e.id)}))})}}]),n}(a.Component),v={onRemoveContact:O.onRemoveContact,onSaveContact:O.onSaveContact},C=Object(h.b)((function(t){var e=t.contacts,n=e.items,o=e.filter;return{contacts:n.filter((function(t){return t.name.toLowerCase().includes(o.toLowerCase())}))}}),v)(_),x=n(8),g=n(15),y=n.n(g),N=n(45),S=(n(40),function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(i.a)(this,n);for(var o=arguments.length,a=new Array(o),c=0;c<o;c++)a[c]=arguments[c];return(t=e.call.apply(e,[this].concat(a))).state={name:"",number:"",showNotification:!1},t.handleChange=function(e){var n=e.target,o=n.value,a=n.name;t.setState(Object(x.a)({},a,o))},t.handleSubmit=function(e){e.preventDefault();var n={id:Object(N.a)(),name:t.state.name,number:t.state.number};console.log("PhonebookForm.handleSubmit"),console.dir(t.props.contacts),t.props.contacts.items.find((function(t){return t.name===n.name}))?(console.log("same contact exists"),t.setState({showNotification:!0}),setTimeout((function(){t.setState({showNotification:!1})}),1500)):(t.props.onAddContact(n),t.setState({name:"",number:""}))},t}return Object(s.a)(n,[{key:"render",value:function(){return Object(o.jsxs)("form",{onSubmit:this.handleSubmit,className:y.a.form__group,children:[Object(o.jsx)("input",{className:y.a.form__input,name:"name",type:"text",value:this.state.name,onChange:this.handleChange,placeholder:"Name",required:!0}),Object(o.jsx)("input",{className:y.a.form__input,name:"number",type:"text",value:this.state.number,onChange:this.handleChange,placeholder:"Phone number",required:!0}),Object(o.jsx)("button",{className:y.a.button,type:"submit",children:"Add contact"}),Object(o.jsx)(f.a,{in:this.state.showNotification,classNames:"notification",timeout:250,unmountOnExit:!0,children:Object(o.jsx)("div",{className:y.a.notification,children:"Contact already exists!"})})]})}}]),n}(a.Component)),w={onAddContact:O.onAddContact},k=Object(h.b)((function(t){return{contacts:t.contacts}}),w)(S),F=n(23),P=n.n(F),A=function(t){var e=t.value,n=t.onChangeFilter;return Object(o.jsxs)("div",{className:P.a.filter__wrap,children:[Object(o.jsx)("h2",{children:"Filter the contact list"}),Object(o.jsx)("label",{children:Object(o.jsx)("input",{className:P.a.form__input,type:"text",name:"filter",value:e,onChange:function(t){return n(t.target.value)}})})]})};A.defaultProps={value:""};var I,R={onChangeFilter:O.onChangeFilter},J=Object(h.b)((function(t){return{value:t.contacts.filter}}),R)(A),L=(n(41),function(){return Object(o.jsx)("h1",{className:"Logo",children:"Phonebook"})}),E=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(i.a)(this,n);for(var o=arguments.length,a=new Array(o),c=0;c<o;c++)a[c]=arguments[c];return(t=e.call.apply(e,[this].concat(a))).state={showNotification:!1},t}return Object(s.a)(n,[{key:"render",value:function(){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(f.a,{in:!0,appear:!0,timeout:500,classNames:"Logo-slideIn",children:Object(o.jsx)(L,{})}),Object(o.jsx)(k,{}),Object(o.jsx)(f.a,{in:this.props.contacts.items.length>1,timeout:500,classNames:"filter",unmountOnExit:!0,children:Object(o.jsx)(J,{})}),Object(o.jsx)(C,{})]})}}]),n}(a.Component),D=Object(h.b)((function(t){return console.log("App.mapStateToProps"),{contacts:t.contacts}}))(E),T=n(25),Y=n(4),q=Object(d.c)([],(I={},Object(x.a)(I,O.onAddContact,(function(t,e){return[].concat(Object(T.a)(t),[e.payload.newContact])})),Object(x.a)(I,O.onRemoveContact,(function(t,e){return t.filter((function(t){return t.id!==e.payload}))})),Object(x.a)(I,O.onSaveContact,(function(t,e){return localStorage.getItem("contacts")?JSON.parse(localStorage.getItem("contacts")):t})),I)),Z=Object(d.c)("",Object(x.a)({},O.onChangeFilter,(function(t,e){return e.payload}))),z=Object(Y.c)({items:q,filter:Z}),B=Object(d.a)({reducer:{contacts:z}});r.a.render(Object(o.jsx)(h.a,{store:B,children:Object(o.jsx)(D,{})}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.0e3a0318.chunk.js.map