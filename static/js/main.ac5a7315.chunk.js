(this["webpackJsonpemployee-directory"]=this["webpackJsonpemployee-directory"]||[]).push([[0],{23:function(e,t,s){},24:function(e,t,s){},25:function(e,t,s){},44:function(e,t,s){},45:function(e,t,s){},46:function(e,t,s){},47:function(e,t,s){},49:function(e,t,s){"use strict";s.r(t);var n=s(0),r=s(1),a=s(12),c=s.n(a);s(23),s(24),s(25);var i=function(){return Object(n.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark",id:"appName",children:Object(n.jsx)("a",{className:"navbar-brand brand display-4 lead",href:"/",children:"React Employee"})})},l=s(13),o=s(14),j=s(17),d=s(16);var h=function(e){return Object(n.jsx)("div",{className:"container-lg",style:e.style,children:e.children})};var u=function(e){return Object(n.jsx)("div",{className:"row","data-masonry":'{"percentPosition": true }',children:e.children})};var m=function(e){var t=e.size.split(" ").map((function(e){return"col-"+e})).join(" ");return Object(n.jsx)("div",{className:t,children:e.children})},b=s(15),O=s.n(b),x=function(){return O.a.get("https://randomuser.me/api/?results=20")};s(44);var p=function(e){return Object(n.jsx)("form",{className:"search",children:Object(n.jsx)("div",{className:"form-group",children:Object(n.jsxs)(u,{children:[Object(n.jsxs)(m,{size:"md-9",children:[Object(n.jsx)("label",{htmlFor:"employee",children:"Search by Employee Name:"}),Object(n.jsx)("input",{value:e.search,onChange:e.handleInputChange,name:"employee",type:"text",className:"form-control",placeholder:"Enter Name to Search",id:"employee"})]}),Object(n.jsx)(m,{size:"md-3",children:Object(n.jsxs)("div",{className:"sort",children:[Object(n.jsx)("label",{htmlFor:"sortby",children:"Sort by:"}),Object(n.jsxs)("select",{id:"sortOptions",onChange:e.sortBy,className:"form-control",children:[Object(n.jsx)("option",{value:"First Name",children:"First Name"}),Object(n.jsx)("option",{value:"Last Name",children:"Last Name"}),Object(n.jsx)("option",{value:"city",children:"City"}),Object(n.jsx)("option",{value:"Years",children:"years"})]})]})})]})})})};s(45),s(46);var f=function(e){return Object(n.jsxs)("div",{className:"card",style:{width:"100%",height:"auto"},children:[Object(n.jsx)("div",{className:"card-header",children:Object(n.jsxs)("h3",{children:[e.firstname," ",e.lastname]})}),Object(n.jsx)("div",{className:"card-body",children:Object(n.jsxs)(u,{children:[Object(n.jsx)(m,{size:"md-4",children:Object(n.jsx)("img",{alt:"employee-photo",src:e.image,className:"img-fluid"})}),Object(n.jsxs)(m,{size:"md-4",children:[Object(n.jsxs)("span",{children:[Object(n.jsx)("h5",{children:"Address: "})," ",e.housenumber," ",e.streetname,", ",e.city,", ",e.state]}),Object(n.jsxs)("span",{children:[Object(n.jsx)("h5",{children:"ZipCode: "})," ",e.zipcode]}),Object(n.jsxs)("span",{children:[Object(n.jsx)("h5",{children:"State: "}),e.state]}),Object(n.jsxs)("span",{children:[Object(n.jsx)("h5",{children:"Country: "}),e.country]})]}),Object(n.jsxs)(m,{size:"md-4",children:[Object(n.jsxs)("span",{children:[Object(n.jsx)("h5",{children:"Email: "}),e.email]}),Object(n.jsxs)("span",{children:[Object(n.jsx)("h5",{children:"Phone: "}),e.phone]}),Object(n.jsxs)("span",{children:[Object(n.jsx)("h5",{children:"Nationality: "}),e.nat]}),Object(n.jsxs)("span",{children:[Object(n.jsx)("h5",{children:"Time with Company: "}),e.age," years"]})]})]})})]})};var v=function(e){return Object(n.jsx)("div",{className:"card",children:e.results.map((function(e){return Object(n.jsx)("div",{className:"list-group-item",children:Object(n.jsx)(f,{firstname:e.name.first,lastname:e.name.last,phone:e.phone,email:e.email,image:e.picture.large,age:e.registered.age,housenumber:e.location.street.number,streetname:e.location.street.name,city:e.location.city,zipcode:e.location.postcode,state:e.location.state,nat:e.nat,country:e.location.country})},e.email)}))})};s(47);var y=function(e){return Object(n.jsx)("h1",{className:"title display-4",children:e.children})},g=function(e){Object(j.a)(s,e);var t=Object(d.a)(s);function s(){var e;Object(l.a)(this,s);for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).state={search:"",sortby:"",results:[],filterResults:[],error:""},e.handleInputChange=function(t){console.log(e.state.results);var s=e.state.results.filter((function(e){return(e.name.first.toLowerCase()+" "+e.name.last.toLowerCase()).indexOf(t.target.value.toLowerCase())>=0}));e.setState({filterResults:s})},e.sortBy=function(t){console.log(t.target.value.toLowerCase());var s=t.target.value.toLowerCase();if("first name"===s){var n=e.state.results.sort((function(e,t){return e.name.first>t.name.first?1:-1}));console.log(n),e.setState({filterResults:n})}if("last name"===s){var r=e.state.results.sort((function(e,t){return e.name.last>t.name.last?1:-1}));console.log(r),e.setState({filterResults:r})}if("years"===s){var a=e.state.results.sort((function(e,t){return e.registered.age>t.registered.age?1:-1}));console.log(a),e.setState({filterResults:a})}if("city"===s){var c=e.state.results.sort((function(e,t){return e.registered.age>t.registered.age?1:-1}));console.log(c),e.setState({filterResults:c})}},e}return Object(o.a)(s,[{key:"componentDidMount",value:function(){var e=this;x().then((function(t){console.log(t.data.results),e.setState({results:t.data.results}),e.setState({filterResults:t.data.results}),console.log(e.state.results)})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)(y,{children:Object(n.jsx)("h1",{children:"Easy Employee Lookup"})}),Object(n.jsx)(h,{style:{marginTop:30},children:Object(n.jsx)(u,{children:Object(n.jsx)(m,{size:"md-12",children:Object(n.jsx)("div",{children:Object(n.jsxs)(h,{children:[Object(n.jsx)(p,{handleInputChange:this.handleInputChange,sortBy:this.sortBy}),Object(n.jsx)(v,{results:this.state.filterResults})]})})})})})]})}}]),s}(r.Component);var N=function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)(i,{}),Object(n.jsx)(g,{})]})};s(48);c.a.render(Object(n.jsx)(N,{}),document.getElementById("root"))}},[[49,1,2]]]);
//# sourceMappingURL=main.ac5a7315.chunk.js.map