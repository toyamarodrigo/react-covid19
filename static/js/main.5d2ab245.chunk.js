(this["webpackJsonpreact-covid19"]=this["webpackJsonpreact-covid19"]||[]).push([[0],{24:function(e,t,a){},25:function(e,t,a){e.exports={container:"App_container__1MQN3",source:"App_source__3y_01"}},48:function(e,t,a){e.exports=a(77)},77:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(36),o=a.n(c),s=a(8),i=a.n(s),u=a(12),l=a(37),d=a(38),m=a(45),p=a(43),f=a(95),v=a(96),h=a(99),E=a(97),_=a(14),y=a.n(_),b=a(21),C=a.n(b),w=a(9),x=a.n(w),N=function(e){var t=e.data,a=t.TotalConfirmed,n=t.TotalDeaths,c=t.TotalRecovered,o=t.NewConfirmed,s=t.NewDeaths,i=t.NewRecovered,u=t.lastUpdate;return a?r.a.createElement("div",{className:x.a.container},r.a.createElement(f.a,{variant:"h3",className:x.a.subtitle},"COVID-19"),r.a.createElement(v.a,{container:!0,spacing:5,justify:"center"},r.a.createElement(v.a,{item:!0,component:h.a,xs:12,md:3,className:C()(x.a.card,x.a.infected)},r.a.createElement(E.a,null,r.a.createElement(f.a,{color:"textSecondary",gutterBottom:!0},"Infected"),r.a.createElement(f.a,{variant:"h5"},r.a.createElement(y.a,{start:0,end:a,duration:2.5,separator:","})),r.a.createElement(f.a,{variant:"body2"},"Today",r.a.createElement(y.a,{start:0,end:o,duration:2.5,separator:",",prefix:" +",className:x.a.new_infected})),r.a.createElement(f.a,{variant:"body2"},"Active cases of COVID-19"))),r.a.createElement(v.a,{item:!0,component:h.a,xs:12,md:3,className:C()(x.a.card,x.a.recovered)},r.a.createElement(E.a,null,r.a.createElement(f.a,{color:"textSecondary",gutterBottom:!0},"Recovered"),r.a.createElement(f.a,{variant:"h5"},r.a.createElement(y.a,{start:0,end:c,duration:2.5,separator:","})),r.a.createElement(f.a,{variant:"body2"},"Today",r.a.createElement(y.a,{start:0,end:i,duration:2.5,separator:",",prefix:" +",className:x.a.new_infected})),r.a.createElement(f.a,{variant:"body2"},"Recoveries from COVID-19"))),r.a.createElement(v.a,{item:!0,component:h.a,xs:12,md:3,className:C()(x.a.card,x.a.deaths)},r.a.createElement(E.a,null,r.a.createElement(f.a,{color:"textSecondary",gutterBottom:!0},"Deaths"),r.a.createElement(f.a,{variant:"h5"},r.a.createElement(y.a,{start:0,end:n,duration:2.5,separator:","})),r.a.createElement(f.a,{variant:"body2"},"Today",r.a.createElement(y.a,{start:0,end:s,duration:2.5,separator:",",prefix:" +",className:x.a.new_infected})),r.a.createElement(f.a,{variant:"body2"},"Deaths caused by COVID-19"))),r.a.createElement(v.a,{item:!0,xs:12,md:3},r.a.createElement(f.a,{color:"textSecondary",className:x.a.lastUpdate},"Last Update: ",new Date(u).toDateString())))):"Loading..."},g=a(44),O=a(100),D=a(101),j=a(98),k=a(24),T=a.n(k),S=a(26),U=a(22),R=a.n(U),I="https://api.covid19api.com/summary",M=function(){var e=Object(u.a)(i.a.mark((function e(t){var a,n,r,c,o,s,u,l,d,m,p,f,v,h,E,_,y,b;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!t){e.next=15;break}return a=t,e.next=5,R.a.get(I);case 5:return n=e.sent,r=n.data,c=r.Countries,o=r.Date,(s=c.filter((function(e){return e.Country===a}))).push({lastUpdate:o}),u=s.reduce((function(e,t){return Object(S.a)(Object(S.a)({},e),t)}),{}),e.abrupt("return",u);case 15:return e.next=17,R.a.get(I);case 17:return l=e.sent,d=l.data,m=d.Global,p=m.NewConfirmed,f=m.NewDeaths,v=m.NewRecovered,h=m.TotalConfirmed,E=m.TotalDeaths,_=m.TotalRecovered,y=d.Date,b={NewConfirmed:p,NewDeaths:f,NewRecovered:v,TotalConfirmed:h,TotalDeaths:E,TotalRecovered:_,lastUpdate:y},console.log("global"+b),e.abrupt("return",b);case 30:e.next=35;break;case 32:e.prev=32,e.t0=e.catch(0),console.log(e.t0);case 35:case"end":return e.stop()}}),e,null,[[0,32]])})));return function(t){return e.apply(this,arguments)}}(),V=function(){var e=Object(u.a)(i.a.mark((function e(){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,R.a.get(I);case 3:return t=e.sent,a=t.data.Countries,e.abrupt("return",a.map((function(e){return e.Country})));case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),A=function(e){var t=e.handleCountryChange,a=Object(n.useState)([]),c=Object(g.a)(a,2),o=c[0],s=c[1];return Object(n.useEffect)((function(){(function(){var e=Object(u.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=s,e.next=3,V();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[s]),r.a.createElement(O.a,{className:T.a.formControl},r.a.createElement(D.a,{htmlFor:"select"}),r.a.createElement(j.a,{defaultValue:"",onChange:function(e){return t(e.target.value)},className:T.a.formNativeSelect},r.a.createElement("option",{value:""},"Global"),o.map((function(e,t){return r.a.createElement("option",{value:e,key:t},e)}))))},B=a(25),G=a.n(B),q=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r)))._isMount=!1,e.state={data:{},country:""},e.handleCountryChange=function(){var t=Object(u.a)(i.a.mark((function t(a){var n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,M(a);case 2:n=t.sent,console.log(n),e.setState({data:n,country:a});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=Object(u.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this._isMount=!0,!this._isMount){e.next=7;break}return e.next=4,M();case 4:t=e.sent,console.log(t),this.setState({data:t});case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){this._isMount=!1}},{key:"render",value:function(){var e=this.state.data;return r.a.createElement("div",{className:G.a.container},r.a.createElement(N,{data:e}),r.a.createElement(A,{handleCountryChange:this.handleCountryChange}),r.a.createElement("div",{className:G.a.source},"Source: ",r.a.createElement("a",{href:"https://covid19api.com/"},"https://covid19api.com/")))}}]),a}(n.Component);o.a.render(r.a.createElement(q,null),document.getElementById("root"))},9:function(e,t,a){e.exports={container:"Cards_container__3bjn6",subtitle:"Cards_subtitle__3O0KO",card:"Cards_card__eGUfZ",lastUpdate:"Cards_lastUpdate__32tr2",infected:"Cards_infected__-adYp",new_infected:"Cards_new_infected__1qUG0",recovered:"Cards_recovered__1aizD",deaths:"Cards_deaths__Qdjzq"}}},[[48,1,2]]]);
//# sourceMappingURL=main.5d2ab245.chunk.js.map