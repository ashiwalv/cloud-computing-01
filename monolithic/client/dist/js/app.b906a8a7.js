(function(t){function e(e){for(var n,s,a=e[0],c=e[1],l=e[2],d=0,m=[];d<a.length;d++)s=a[d],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&m.push(o[s][0]),o[s]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(m.length)m.shift()();return i.push.apply(i,l||[]),r()}function r(){for(var t,e=0;e<i.length;e++){for(var r=i[e],n=!0,a=1;a<r.length;a++){var c=r[a];0!==o[c]&&(n=!1)}n&&(i.splice(e--,1),t=s(s.s=r[0]))}return t}var n={},o={app:0},i=[];function s(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=t,s.c=n,s.d=function(t,e,r){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(r,n,function(e){return t[e]}.bind(null,n));return r},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],c=a.push.bind(a);a.push=e,a=a.slice();for(var l=0;l<a.length;l++)e(a[l]);var u=c;i.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"0104":function(t,e,r){},"025e":function(t,e){e.formatDate=t=>{if(!t)return"";var e=new Date(t);return e.toLocaleDateString()+" "+e.toLocaleTimeString()}},"1b30":function(t,e,r){t.exports=r.p+"img/cola.323935d2.jpg"},"2b25":function(t,e,r){},"30e2":function(t,e,r){},"32e8":function(t,e,r){},3915:function(t,e,r){"use strict";var n=r("2b25"),o=r.n(n);o.a},"3ce9":function(t,e,r){t.exports=r.p+"img/orange.633bb4de.jpg"},"4b72":function(t,e,r){"use strict";var n=r("8b29"),o=r.n(n);o.a},"4d43":function(t,e,r){const n=r("bc3a");let o=r("65c1").webserver;o.startsWith("http")||(o="http://"+o),o.endsWith("/")||(o+="/");let i,s=null,a={};e.initialize=function(t,e=null,r=null){s?(i=!0,e||(e=o),n.get(e).then(()=>{e=`${e}subscribe`,r&&(e+="?count="+r),console.log("initializing connection to:",e),s.SSE(e,{format:"json"}).then(t=>{console.log("initialized connection to:",e),t.onError(t=>{console.log("connection interrupted")}),this.connection=t,i=!1})}).catch(()=>{setTimeout(()=>{console.log(`cannot connect to webserver: ${o}, retrying...`),this.initialize(t,e,r)},3e3)})):s=t},e.subscribe=function(t,e,r){if(!this.connection)return i||this.initialize(),void setTimeout(()=>{this.subscribe(t,e,r)},10);this.connection.subscribe(t,n=>{a[t]=n.value.value,r(e,n.value.value)}),a[t]&&r(e,a[t])},e.subscribePerformance=function(t,e,r,n){this.close(),this.initialize(null,o+"performance/",r),setTimeout(()=>{this.subscribe(t,e,n)},10)},e.write=function(t,e,r){n.post(`${o}write`,{node:t,property:e,value:r})},e.call=function(t,e){n.post(`${o}call`,{node:t,method:e})},e.close=function(){this.connection&&(console.log("closing connection"),this.connection.close(),this.connection=null)},e.createOrder=function(t){n.post(`${o}createOrder`,{order:t})},e.getOrders=function(t,e){n.get(`${o}getOrders?name=${t}`).then(t=>{e(t.data)})},e.cancelOrder=function(t,e){n.post(`${o}cancelOrder`,{id:t.id}).then(()=>{e()})},e.abortOrder=function(t,e){n.post(`${o}abortOrder`,{id:t.id}).then(()=>{e()})},e.holdOrder=function(t,e){n.post(`${o}holdOrder`,{id:t.id}).then(()=>{e()})}},"4f14":function(t,e,r){},"4f51":function(t,e,r){t.exports=r.p+"img/warning.b11a1cbf.svg"},"545e":function(t,e,r){t.exports=r.p+"img/raspberry.99c473a3.jpg"},"56d7":function(t,e,r){"use strict";r.r(e);var n=r("a026"),o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("nav",{staticClass:"navbar navbar-expand-lg"},[r("router-link",{staticClass:"nav-link",attrs:{to:"/customer/createorder"}},[t._v("Create order")]),r("router-link",{staticClass:"nav-link",attrs:{to:"/customer/vieworders"}},[t._v("View orders")]),r("router-link",{staticClass:"nav-link",attrs:{to:"/pm/vieworders"}},[t._v("Production manager")]),r("router-link",{staticClass:"nav-link",attrs:{to:"/hmi"}},[t._v("HMI")]),r("router-link",{staticClass:"nav-link",attrs:{to:"/performance"}},[t._v("Performance")])],1),r("router-view")],1)},i=[],s={mounted(){}},a=s,c=r("2877"),l=Object(c["a"])(a,o,i,!1,null,null,null),u=l.exports,d=r("8c4f"),m=r("37b6"),p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v(" Factory view "),n("button",{staticClass:"btn btn-default",attrs:{title:"Start/Stop"},on:{click:t.startStop}},[n("img",{attrs:{src:r("a5d2"),width:"35"}})]),"STARTED"!==t.state?n("label",{staticClass:"warning"},[t._v("STOPPED")]):t._e()]),n("div",[n("div",{staticClass:"grid-container"},[n("div",{staticClass:"supply"},[n("Conveyor",{attrs:{conv:"Supply"}})],1),n("div",{staticClass:"sorting"},[n("Robot",{attrs:{title:"Sorting robot",flipped:!0}})],1),n("div",{staticClass:"picking"},[n("Robot",{attrs:{title:"Picking robot"}})],1),n("div",{staticClass:"rack"},[n("Rack")],1)])])])},f=[],h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"factory-item",on:{click:t.showDetail}},[n("h2",{staticClass:"container"},[n("label",[t._v(t._s(t.conv))]),n("div",{staticClass:"sensor",style:t.sensorBlocked?"background-color:black":"",on:{click:function(e){e.stopPropagation(),t.sensorBlocked=!t.sensorBlocked}}}),n("div",{staticClass:"sensor",style:t.sensorColor?"background-color:yellow":"",attrs:{title:"Color sensor"},on:{click:function(e){e.stopPropagation(),t.sensorColor=!t.sensorColor}}}),"online"!==t.status?n("img",{attrs:{src:r("4f51"),title:"node is offline"}}):t._e()]),n("div",{staticClass:"container"},[n("label",[t._v(t._s(t.speed)+": "+t._s(t.unit))]),"FORWARD"===t.direction?n("button",{staticClass:"image-button",attrs:{title:"Direction"},on:{click:function(e){return e.stopPropagation(),t.changeDirection(e)}}},[n("img",{attrs:{src:r("ef3f"),width:"35"}})]):t._e(),"FORWARD"!==t.direction?n("button",{staticClass:"image-button",attrs:{title:"Direction"},on:{click:function(e){return e.stopPropagation(),t.changeDirection(e)}}},[n("img",{attrs:{src:r("9f78"),width:"35"}})]):t._e(),n("div",[n("input",{directives:[{name:"model",rawName:"v-model.number",value:t.setpoint,expression:"setpoint",modifiers:{number:!0}}],staticClass:"setpoint-input",attrs:{placeholder:"Setpoint",type:"number",id:"inputName",min:"0",max:"100"},domProps:{value:t.setpoint},on:{click:function(t){t.stopPropagation()},input:function(e){e.target.composing||(t.setpoint=t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}}),n("button",{on:{click:function(e){return e.stopPropagation(),t.setSetPoint(e)}}},[t._v("Set")])])]),n("div",{staticClass:"container"},[n("label",[t._v(t._s(t.speed)+": "+t._s(t.unit))]),"FORWARD"!==t.direction?n("button",{staticClass:"image-button",attrs:{title:"Direction"},on:{click:function(e){return e.stopPropagation(),t.changeDirection(e)}}},[n("img",{attrs:{src:r("ef3f"),width:"35"}})]):t._e(),"FORWARD"===t.direction?n("button",{staticClass:"image-button",attrs:{title:"Direction"},on:{click:function(e){return e.stopPropagation(),t.changeDirection(e)}}},[n("img",{attrs:{src:r("9f78"),width:"35"}})]):t._e(),n("div",[n("input",{directives:[{name:"model",rawName:"v-model.number",value:t.setpoint,expression:"setpoint",modifiers:{number:!0}}],staticClass:"setpoint-input",attrs:{placeholder:"Setpoint",type:"number",id:"inputName",min:"0",max:"100"},domProps:{value:t.setpoint},on:{click:function(t){t.stopPropagation()},input:function(e){e.target.composing||(t.setpoint=t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}}),n("button",{on:{click:function(e){return e.stopPropagation(),t.setSetPoint(e)}}},[t._v("Set")])])])])},v=[];const g=r("4d43");let b=r("65c1").doubleClickDelay,_=0;var y={data:function(){return{speed:0,unit:"RPM",status:null,setpoint:null,direction:null,sensorBlocked:!1,sensorColor:!1,manager:g}},components:{speedometer:r("cd12").default},props:["conv"],methods:{showDetail:function(){let t=Date.now();t-_>=b?_=t:(Ut.conv=this.conv,this.$dialog.alert(this.conv,{view:"conveyor-detail",html:!0}).then((function(t){console.log("closed")})).catch((function(){console.log("canceled")})))},setSetPoint:function(t){this.manager.write(this.conv,"setpoint",this.setpoint)},startStop:function(t){this.manager.call(this.conv,"start_stop")},changeDirection:function(t){this.manager.call(this.conv,"fwd_rev")}},mounted(){this.manager.subscribe(`${this.conv}._status`,this,(function(t,e){t.status=e})),this.manager.subscribe(`${this.conv}.unit`,this,(function(t,e){t.unit=e})),this.manager.subscribe(`${this.conv}.speed`,this,(function(t,e){t.speed=e})),this.manager.subscribe(`${this.conv}.direction`,this,(function(t,e){t.direction=e}))}},C=y,w=(r("6a5a"),Object(c["a"])(C,h,v,!1,null,"06b5c991",null)),k=w.exports,x=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{ref:"cont",staticClass:"factory-item",on:{click:t.showRobotDetail}},[r("h2",[t._v(" "+t._s(t.title)+" "),r("input",{directives:[{name:"model",rawName:"v-model.number",value:t.varposition,expression:"varposition",modifiers:{number:!0}}],attrs:{type:"range",min:"0",max:"950",value:"0"},domProps:{value:t.varposition},on:{click:function(t){t.stopPropagation()},change:function(e){return t.moveSlider()},__r:function(e){t.varposition=t._n(e.target.value)},blur:function(e){return t.$forceUpdate()}}})]),r("svg",{class:t.flipped?"flipped":"",staticStyle:{width:"100%",height:"100%","max-height":"400px"},attrs:{viewBox:"0 0 400 1000"}},[r("rect",{staticStyle:{fill:"gray"},attrs:{id:"item",x:"0",width:"100%",y:t.varposition,height:"50"}},[t._v("hello")]),r("line",{staticStyle:{stroke:"gray","stroke-width":"20"},attrs:{x1:"0",y1:"0",x2:"0",y2:"1000","stroke-dasharray":"5"}})])])},$=[];const O=r("4d43");let S=r("65c1").doubleClickDelay,P=0;var D={data:function(){return{varposition:100,xmax:0,manager:O}},props:{title:String,flipped:Boolean},methods:{showRobotDetail:function(){let t=Date.now();t-P>=S?P=t:(Ut.title=this.title,this.$dialog.alert(this.title,{view:"robot-detail",html:!0}).then((function(t){console.log("closed")})).catch((function(){console.log("canceled")})))},moveSlider:function(t){},recalibrate:function(t){console.log("recalibrating"),t.stopPropagation()},manualMode:function(t){console.log("manual mode"),t.stopPropagation()}},components:{speedometer:r("cd12").default},computed:{color:function(){return"online"!==this.status?"red":"STARTED"===this.state?"lightgreen":"orange"}},mounted(){}},R=D,N=(r("ab00"),Object(c["a"])(R,x,$,!1,null,"184532ec",null)),A=N.exports,j=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"factory-item",staticStyle:{height:"100%"}},[n("h2",[t._v("Rack")]),n("ul",{staticClass:"list-group list-group-flush"},[n("li",{staticClass:"list-group-item"},[n("img",{staticClass:"maom-image",attrs:{src:r("1b30")}}),n("font",{staticStyle:{"margin-left":"5px"},attrs:{size:"5"}},[t._v(t._s(t.cola))])],1),n("li",{staticClass:"list-group-item"},[n("img",{staticClass:"maom-image",attrs:{src:r("545e")}}),n("font",{staticStyle:{"margin-left":"5px"},attrs:{size:"5"}},[t._v(t._s(t.raspberry))])],1),n("li",{staticClass:"list-group-item"},[n("img",{staticClass:"maom-image",attrs:{src:r("8a55")}}),n("font",{staticStyle:{"margin-left":"5px"},attrs:{size:"5"}},[t._v(t._s(t.lemon))])],1),n("li",{staticClass:"list-group-item"},[n("img",{staticClass:"maom-image",attrs:{src:r("8868")}}),n("font",{staticStyle:{"margin-left":"5px"},attrs:{size:"5"}},[t._v(t._s(t.strawberry))])],1),n("li",{staticClass:"list-group-item"},[n("img",{staticClass:"maom-image",attrs:{src:r("3ce9")}}),n("font",{staticStyle:{"margin-left":"5px"},attrs:{size:"5"}},[t._v(t._s(t.orange))])],1)])])},E=[],T={data:function(){return{cola:1,raspberry:3,lemon:5,strawberry:10,orange:78}}},M=T,B=Object(c["a"])(M,j,E,!1,null,null,null),V=B.exports;const z=r("4d43");var U={data:function(){return{state:null,manager:z}},components:{Conveyor:k,Robot:A,Rack:V},mounted(){this.manager.subscribe("Supply.state",this,(function(t,e){t.state=e}))},beforeDestroy(){this.manager.close()},methods:{startStop:function(t){this.manager.call("Supply","start_stop")}}},F=U,W=(r("6398"),Object(c["a"])(F,p,f,!1,null,"0e072244",null)),I=W.exports,L=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h1",[t._v("Create order")]),r("form",[r("div",{staticClass:"form-group"},[r("label",{staticClass:"col-3 col-form-label",attrs:{for:"inputName"}},[t._v("Name")]),r("div",{staticClass:"col-3"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.order.name,expression:"order.name"}],staticClass:"form-control",attrs:{id:"inputName"},domProps:{value:t.order.name},on:{change:t.changeUserName,input:function(e){e.target.composing||t.$set(t.order,"name",e.target.value)}}})])]),r("div",{staticClass:"form-group"},[r("label",{staticClass:"col-3 col-form-label",attrs:{for:"inputCola"}},[t._v("Cola")]),r("div",{staticClass:"col-3"},[r("input",{directives:[{name:"model",rawName:"v-model.number",value:t.order.cola,expression:"order.cola",modifiers:{number:!0}}],staticClass:"form-control",attrs:{type:"number",min:"0",max:4,id:"inputCola"},domProps:{value:t.order.cola},on:{input:function(e){e.target.composing||t.$set(t.order,"cola",t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}})])]),r("div",{staticClass:"form-group"},[r("label",{staticClass:"col-3 col-form-label",attrs:{for:"inputRaspberry"}},[t._v("Raspberry")]),r("div",{staticClass:"col-3"},[r("input",{directives:[{name:"model",rawName:"v-model.number",value:t.order.raspberry,expression:"order.raspberry",modifiers:{number:!0}}],staticClass:"form-control",attrs:{type:"number",min:"0",max:4,id:"inputRaspberry"},domProps:{value:t.order.raspberry},on:{input:function(e){e.target.composing||t.$set(t.order,"raspberry",t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}})])]),r("div",{staticClass:"form-group"},[r("label",{staticClass:"col-3 col-form-label",attrs:{for:"inputLemon"}},[t._v("Lemon")]),r("div",{staticClass:"col-3"},[r("input",{directives:[{name:"model",rawName:"v-model.number",value:t.order.lemon,expression:"order.lemon",modifiers:{number:!0}}],staticClass:"form-control",attrs:{type:"number",min:"0",max:4,id:"inputLemon"},domProps:{value:t.order.lemon},on:{input:function(e){e.target.composing||t.$set(t.order,"lemon",t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}})])]),r("div",{staticClass:"form-group"},[r("label",{staticClass:"col-3 col-form-label",attrs:{for:"inputStrawberry"}},[t._v("Strawberry")]),r("div",{staticClass:"col-3"},[r("input",{directives:[{name:"model",rawName:"v-model.number",value:t.order.strawberry,expression:"order.strawberry",modifiers:{number:!0}}],staticClass:"form-control",attrs:{type:"number",min:"0",max:4,id:"inputStrawberry"},domProps:{value:t.order.strawberry},on:{input:function(e){e.target.composing||t.$set(t.order,"strawberry",t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}})])]),r("div",{staticClass:"form-group"},[r("label",{staticClass:"col-3 col-form-label",attrs:{for:"inputOrange"}},[t._v("Orange")]),r("div",{staticClass:"col-3"},[r("input",{directives:[{name:"model",rawName:"v-model.number",value:t.order.orange,expression:"order.orange",modifiers:{number:!0}}],staticClass:"form-control",attrs:{type:"number",min:"0",max:4,id:"inputOrange"},domProps:{value:t.order.orange},on:{input:function(e){e.target.composing||t.$set(t.order,"orange",t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}})])]),r("div",{staticClass:"form-group"},[r("div",{staticClass:"col-3"},[r("button",{staticClass:"btn btn-primary float-right",attrs:{disabled:!t.orderValid},on:{click:t.createOrder}},[t._v("Create order")])])])])])},Q=[];const H=r("4d43");var J={data:function(){return{order:{name:null,cola:0,raspberry:0,lemon:0,strawberry:0,orange:0}}},mounted(){this.order.name=this.$root.userName},computed:{orderQuantity:function(){return parseInt(this.order.cola)+parseInt(this.order.raspberry)+parseInt(this.order.lemon)+parseInt(this.order.strawberry)+parseInt(this.order.orange)},orderValid:function(){return this.order.name&&this.orderQuantity>0&&this.orderQuantity<=4}},methods:{createOrder:function(t){console.log("creating order"),H.createOrder(this.order)},changeUserName:function(t){this.$root.userName=this.order.name}}},q=J,G=Object(c["a"])(q,L,Q,!1,null,null,null),K=G.exports,X=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h1",[t._v("View orders for "+t._s(t.name))]),r("table",{staticClass:"table table-striped table-bordered"},[r("thead",[r("tr",[r("th",{attrs:{scope:"row"}}),r("th",{attrs:{scope:"row"},on:{click:function(e){return t.sortBy("waitingTime")}}},[t._v("Created")]),t._l(t.columns,(function(e){return r("th",{key:e,attrs:{scope:"row"},on:{click:function(r){return t.sortBy(e)}}},[t._v(t._s(t._f("capitalize")(e)))])}))],2)]),r("tbody",t._l(t.orders,(function(e){return r("tr",{key:e.id},[r("td",[r("button",{staticClass:"btn btn-primary",attrs:{disabled:"waiting"!=e.state},on:{click:function(r){return t.cancelOrder(e)}}},[t._v("Cancel")])]),r("td",[t._v(t._s(t._f("formatDate")(e.waitingTime)))]),t._l(t.columns,(function(n){return r("td",{key:n},[t._v(t._s(e[n]))])}))],2)})),0)])])},Y=[];const Z=r("4d43"),tt=r("025e");var et={data:function(){return{name:null,orders:[],columns:["state","cola","raspberry","lemon","strawberry","orange"],sortOrders:{}}},methods:{getOrders:function(){Z.getOrders(this.name,t=>{console.log("received orders:",t),this.orders=t})},sortBy:function(t){let e=this.sortOrders[t]||1;this.sortOrders[t]=-1*e,this.orders=this.orders.sort((r,n)=>(r=r[t],n=n[t],console.log(r,n,t),(r===n?0:r>n?1:-1)*e))},cancelOrder:function(t){Z.cancelOrder(t,()=>{this.getOrders()})}},filters:{capitalize:t=>t.charAt(0).toUpperCase()+t.slice(1),formatDate:t=>tt.formatDate(t)},mounted(){this.name=this.$root.userName,this.getOrders()}},rt=et,nt=Object(c["a"])(rt,X,Y,!1,null,null,null),ot=nt.exports,it=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h1",[t._v("Production manager: "+t._s(t.name))]),r("table",{staticClass:"table table-striped table-bordered"},[r("thead",[r("tr",[r("th",{attrs:{scope:"row"}}),r("th",{attrs:{scope:"row"},on:{click:function(e){return t.sortBy("waitingTime")}}},[t._v("Created")]),t._l(t.columns,(function(e){return r("th",{key:e,attrs:{scope:"row"},on:{click:function(r){return t.sortBy(e)}}},[t._v(t._s(t._f("capitalize")(e)))])}))],2)]),r("tbody",t._l(t.orders,(function(e){return r("tr",{key:e.id},[r("td",[r("button",{staticClass:"btn btn-primary",attrs:{disabled:"waiting"!=e.state},on:{click:function(r){return t.cancelOrder(e)}}},[t._v("Cancel")]),r("button",{staticClass:"btn btn-primary ml-1",attrs:{disabled:"in process"!=e.state},on:{click:function(r){return t.abortOrder(e)}}},[t._v("Abort")]),r("button",{staticClass:"btn btn-primary ml-1",attrs:{disabled:"in process"!=e.state},on:{click:function(r){return t.holdOrder(e)}}},[t._v("Hold")])]),r("td",[t._v(t._s(t._f("formatDate")(e.waitingTime)))]),t._l(t.columns,(function(n){return r("td",{key:n},[t._v(t._s(e[n]))])}))],2)})),0)])])},st=[];const at=r("4d43"),ct=r("025e");var lt={data:function(){return{name:null,orders:[],columns:["id","name","state","cola","raspberry","lemon","strawberry","orange"],sortOrders:{}}},methods:{getOrders:function(){at.getOrders("",t=>{console.log("received orders:",t),this.orders=t})},sortBy:function(t){let e=this.sortOrders[t]||1;this.sortOrders[t]=-1*e,this.orders=this.orders.sort((r,n)=>(r=r[t],n=n[t],(r===n?0:r>n?1:-1)*e))},cancelOrder:function(t){at.cancelOrder(t,()=>{this.getOrders()})},abortOrder:function(t){at.abortOrder(t,()=>{this.getOrders()})},holdOrder:function(t){at.holdOrder(t,()=>{this.getOrders()})}},filters:{capitalize:t=>t.charAt(0).toUpperCase()+t.slice(1),formatDate:t=>ct.formatDate(t)},mounted(){this.name=this.$root.userName,this.getOrders(this.name)}},ut=lt,dt=Object(c["a"])(ut,it,st,!1,null,null,null),mt=dt.exports,pt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticStyle:{margin:"10px"}},[r("div",{staticStyle:{"margin-bottom":"10px"}},[t._v(" Number of messages: "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.count,expression:"count"}],attrs:{type:"text",placeholder:"Number of messages",disabled:t.disabled},domProps:{value:t.count},on:{input:function(e){e.target.composing||(t.count=e.target.value)}}}),t._v(" Number of test runs: "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.runs,expression:"runs"}],attrs:{type:"text",placeholder:"Number of test runs",disabled:t.disabled},domProps:{value:t.runs},on:{input:function(e){e.target.composing||(t.runs=e.target.value)}}}),r("button",{attrs:{disabled:t.disabled},on:{click:t.getSSE}},[t._v("Get Server Sent Events")])]),t.results?r("table",{staticClass:"table table-striped table-bordered"},[t._m(0),r("tbody",t._l(t.results,(function(e){return r("tr",{key:e.id},[r("td",[t._v(t._s(e.messages))]),r("td",[t._v(t._s(e.run))]),r("td",[t._v(t._s(e.received))]),r("td",[t._v(t._s(Math.min.apply(Math,e.values)))]),r("td",[t._v(t._s(Math.max.apply(Math,e.values)))]),r("td",[t._v(t._s(t.calculateStandardDeviation(e.values).toFixed(2)))]),r("td",[t._v(t._s(e.values?(e.values.reduce((function(t,e){return t+e}),0)/e.values.length).toFixed(2):0))])])})),0)]):t._e()])},ft=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("thead",[r("tr",[r("th",[t._v("Messages")]),r("th",[t._v("Run")]),r("th",[t._v("Received")]),r("th",[t._v("Minimum delay (ms)")]),r("th",[t._v("Maximum delay (ms)")]),r("th",[t._v("Standard deviation (ms)")]),r("th",[t._v("Average delay (ms)")])])])}];const ht=r("4d43");var vt={mounted(){},data:function(){return{count:10,runs:10,disabled:!1,results:[]}},computed:{averageDelay:function(){return this.receivedCount>0?parseInt(this.packetDelay/this.receivedCount):0}},methods:{calculateStandardDeviation(t){const e=t.length;if(0==e)return 0;const r=t.reduce((t,e)=>t+e)/e;return Math.sqrt(t.map(t=>Math.pow(t-r,2)).reduce((t,e)=>t+e)/e)},getSSE:async function(){this.disabled=!0,this.results=[];let t=1,e=1;while(t<this.count){let r=t;t=e,e+=r;let n={id:t,messages:t,values:[]};this.results.push(n);for(let t=0;t<this.runs;t++)n.run=t+1,n.received=0,await this.startRun(n)}this.disabled=!1},startRun:function(t){return new Promise(e=>{let r=!1;ht.subscribePerformance("performance",this,t.messages,(n,o)=>{"start"===o?r=!0:r&&(t.received++,t.received>=t.messages&&(t.values.push((new Date).getTime()-o),ht.close(),r=!1,e()))})})}}},gt=vt,bt=(r("7602"),Object(c["a"])(gt,pt,ft,!1,null,"6f115ad8",null)),_t=bt.exports;const yt=[{path:"/",component:I},{path:"/hmi",component:I},{path:"/performance",component:_t},{path:"/customer/createorder",component:K},{path:"/customer/vieworders",component:ot},{path:"/pm/vieworders",component:mt}];var Ct=yt,wt=r("5f5b"),kt=(r("f9e3"),r("2dd8"),r("03a5")),xt=r.n(kt),$t=(r("0fa0"),r("c5c5"),function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"factory-item"},[r("h2",{staticClass:"container"},[r("label",[t._v(t._s(t.title))]),r("div",{staticClass:"sensor",style:t.clampClosed?"background-color:black":"",attrs:{title:"clamp  closed"},on:{click:function(e){e.stopPropagation(),t.clampClosed=!t.clampClosed}}})]),r("input",{directives:[{name:"model",rawName:"v-model.number",value:t.firstAngle,expression:"firstAngle",modifiers:{number:!0}}],attrs:{type:"range",min:"-90",max:"90"},domProps:{value:t.firstAngle},on:{click:function(t){t.stopPropagation()},__r:function(e){t.firstAngle=t._n(e.target.value)},blur:function(e){return t.$forceUpdate()}}}),r("input",{directives:[{name:"model",rawName:"v-model.number",value:t.secondAngle,expression:"secondAngle",modifiers:{number:!0}}],attrs:{type:"range",min:"-90",max:"90"},domProps:{value:t.secondAngle},on:{click:function(t){t.stopPropagation()},__r:function(e){t.secondAngle=t._n(e.target.value)},blur:function(e){return t.$forceUpdate()}}}),r("div",{},[r("svg",{attrs:{width:"100%",height:"300",viewBox:t.calculateViewBox}},[r("line",{staticStyle:{stroke:"black","stroke-width":"0.2"},attrs:{x1:"2",x2:"2",y1:"-150",y2:"150"}}),r("line",{staticStyle:{stroke:"black","stroke-width":"0.2"},attrs:{x1:"-150",x2:"150",y1:t.height,y2:t.height}}),r("rect",{staticClass:"arm",attrs:{id:"item",width:t.width,height:t.height,transform:t.rotateFirst}}),r("circle",{attrs:{cx:t.width/2,cy:t.height,r:"4"}}),r("g",{attrs:{transform:t.translateSecond}},[r("rect",{staticClass:"arm",attrs:{width:t.height/3,height:t.width/2,transform:t.transformLeftClaw}}),r("rect",{staticClass:"arm",attrs:{width:t.height/3,height:t.width/2,transform:t.transformRightClaw}}),r("rect",{staticClass:"arm",attrs:{width:t.height,height:t.width}}),r("circle",{attrs:{cy:"2",r:"4"}})]),r("line",{staticStyle:{stroke:"black","stroke-width":"1"},attrs:{x1:"50",x2:"50",y1:"-50",y2:"50"}})])])])}),Ot=[];const St=r("4d43");var Pt={data:function(){return{firstAngle:0,secondAngle:0,xtranslate:0,width:4,height:30,title:null,clampClosed:!1,manager:St}},computed:{calculateViewBox:function(){return`${-this.height} ${1.5*-this.height} ${3*this.height} ${4*this.height}`},rotateFirst:function(){return`rotate(${this.firstAngle} ${this.width/2} ${this.height})`},translateSecond:function(){let t=`rotate(${this.secondAngle} 0 ${this.width/2})`,e=this.width/2+this.height*Math.cos((90-this.firstAngle)/360*2*Math.PI),r=-this.width/2+this.height-this.height*Math.sin((90-this.firstAngle)/360*2*Math.PI);return`translate(${e} ${r}) ${t}`},transformLeftClaw:function(){let t=this.width/4,e=this.clampClosed?"":` rotate(30 0 ${t/2})`;return`translate(${this.height-this.width/2},${t})${e}`},transformRightClaw:function(){let t=this.width/4,e=this.clampClosed?"":` rotate(-30 0 ${t/2})`;return`translate(${this.height-this.width/2},${t})${e}`}},methods:{recalibrate:function(t){console.log("recalibrating")},manualMode:function(t){console.log("manual mode")}},mounted(){this.title=Ut.title}},Dt=Pt,Rt=(r("3915"),Object(c["a"])(Dt,$t,Ot,!1,null,"08e41e59",null)),Nt=Rt.exports,At=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h2",{staticClass:"container"},[n("label",[t._v(t._s(t.conv))]),n("div",{staticClass:"sensor",style:t.sensorBlocked?"background-color:black":"",on:{click:function(e){e.stopPropagation(),t.sensorBlocked=!t.sensorBlocked}}}),n("div",{staticClass:"sensor",style:t.sensorColor?"background-color:yellow":"",attrs:{title:"Color sensor"},on:{click:function(e){e.stopPropagation(),t.sensorColor=!t.sensorColor}}}),"online"!==t.status?n("img",{attrs:{src:r("4f51"),title:"node is offline"}}):t._e()]),n("div",{staticClass:"wrapper"},[n("div",{staticClass:"speedo1"},[n("speedometer",{attrs:{maxValue:100,value:t.speed}})],1),n("div",{staticClass:"direction1"},["FORWARD"===t.direction?n("button",{staticClass:"image-button",attrs:{title:"Direction"},on:{click:function(e){return e.stopPropagation(),t.changeDirection(e)}}},[n("img",{attrs:{src:r("ef3f"),width:"35"}})]):t._e(),"FORWARD"!==t.direction?n("button",{staticClass:"image-button",attrs:{title:"Direction"},on:{click:function(e){return e.stopPropagation(),t.changeDirection(e)}}},[n("img",{attrs:{src:r("9f78"),width:"35"}})]):t._e()]),n("div",{staticClass:"setpoint1"},[n("input",{directives:[{name:"model",rawName:"v-model.number",value:t.setpoint,expression:"setpoint",modifiers:{number:!0}}],staticClass:"setpoint-input",attrs:{placeholder:"Setpoint",type:"number",id:"inputName",min:"0",max:"100"},domProps:{value:t.setpoint},on:{click:function(t){t.stopPropagation()},input:function(e){e.target.composing||(t.setpoint=t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}}),n("button",{on:{click:function(e){return e.stopPropagation(),t.setSetPoint(e)}}},[t._v("Set")])]),n("div",{staticClass:"speedo2"},[n("speedometer",{attrs:{maxValue:100,value:t.speed}})],1),n("div",{staticClass:"direction2"},["FORWARD"!==t.direction?n("button",{staticClass:"image-button",attrs:{title:"Direction"},on:{click:function(e){return e.stopPropagation(),t.changeDirection(e)}}},[n("img",{attrs:{src:r("ef3f"),width:"35"}})]):t._e(),"FORWARD"===t.direction?n("button",{staticClass:"image-button",attrs:{title:"Direction"},on:{click:function(e){return e.stopPropagation(),t.changeDirection(e)}}},[n("img",{attrs:{src:r("9f78"),width:"35"}})]):t._e()]),n("div",{staticClass:"setpoint2"},[n("input",{directives:[{name:"model",rawName:"v-model.number",value:t.setpoint,expression:"setpoint",modifiers:{number:!0}}],staticClass:"setpoint-input",attrs:{placeholder:"Setpoint",type:"number",id:"inputName",min:"0",max:"100"},domProps:{value:t.setpoint},on:{click:function(t){t.stopPropagation()},input:function(e){e.target.composing||(t.setpoint=t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}}),n("button",{on:{click:function(e){return e.stopPropagation(),t.setSetPoint(e)}}},[t._v("Set")])])])])},jt=[];const Et=r("4d43");var Tt={data:function(){return{speed:null,unit:null,state:null,status:null,setpoint:null,direction:null,sensorBlocked:!1,sensorColor:!1,conv:null,manager:Et}},components:{speedometer:r("cd12").default},props:["param"],methods:{setSetPoint:function(t){this.manager.write(this.conv,"setpoint",this.setpoint)},startStop:function(t){this.manager.call(this.conv,"start_stop")},changeDirection:function(t){this.manager.call(this.conv,"fwd_rev")}},mounted(){this.param?this.conv=this.param:this.conv=Ut.conv,console.log("conv:",this.conv),this.manager.subscribe(`${this.conv}._status`,this,(function(t,e){t.status=e})),this.manager.subscribe(`${this.conv}.state`,this,(function(t,e){t.state=e})),this.manager.subscribe(`${this.conv}.unit`,this,(function(t,e){t.unit=e})),this.manager.subscribe(`${this.conv}.speed`,this,(function(t,e){t.speed=e})),this.manager.subscribe(`${this.conv}.direction`,this,(function(t,e){t.direction=e}))}},Mt=Tt,Bt=(r("4b72"),Object(c["a"])(Mt,At,jt,!1,null,"fb94ece0",null)),Vt=Bt.exports;r("0104");r.d(e,"dialogParameter",(function(){return Ut})),n["default"].config.productionTip=!1,n["default"].use(wt["a"]),n["default"].use(d["a"]),n["default"].use(m["a"]),n["default"].use(xt.a,{backdropClose:!0}),n["default"].dialog.registerComponent("robot-detail",Nt),n["default"].dialog.registerComponent("conveyor-detail",Vt);const zt=new d["a"]({routes:Ct});r("4d43").initialize(n["default"]);const Ut={};console.log("initializing app"),new n["default"]({router:zt,render:t=>t(u),data:function(){return{userName:"abc"}}}).$mount("#app")},6398:function(t,e,r){"use strict";var n=r("4f14"),o=r.n(n);o.a},"65c1":function(t,e){t.exports={webserver:"localhost:3000",doubleClickDelay:500}},"6a5a":function(t,e,r){"use strict";var n=r("32e8"),o=r.n(n);o.a},7602:function(t,e,r){"use strict";var n=r("7c19"),o=r.n(n);o.a},"7c19":function(t,e,r){},8868:function(t,e,r){t.exports=r.p+"img/strawberry.eb487ee3.jpg"},"8a55":function(t,e,r){t.exports=r.p+"img/lemon.b097d1b5.jpg"},"8b29":function(t,e,r){},"9f78":function(t,e,r){t.exports=r.p+"img/double-arrow-left.527498a4.svg"},a5d2:function(t,e,r){t.exports=r.p+"img/power.495d3d80.svg"},ab00:function(t,e,r){"use strict";var n=r("30e2"),o=r.n(n);o.a},cd12:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("vue-speedometer",{attrs:{minValue:0,maxValue:t.limit,value:t.computedValue,needleTransition:"easeElastic",needleTransitionDuration:1e3,segmentColors:["gray","darkgray","lightgray"],height:200,currentValueText:t.currentValueText}})},o=[],i=r("7840"),s=r.n(i),a={components:{VueSpeedometer:s.a},props:{maxValue:Number,value:Number},computed:{limit:function(){return this.maxValue?this.maxValue:100},computedValue:function(){return 0==this.value?.001:this.value},currentValueText:function(){return this.value>.001?"${value}":"0"}}},c=a,l=r("2877"),u=Object(l["a"])(c,n,o,!1,null,null,null);e["default"]=u.exports},ef3f:function(t,e,r){t.exports=r.p+"img/double-arrow-right.33ac8a1a.svg"}});
//# sourceMappingURL=app.b906a8a7.js.map