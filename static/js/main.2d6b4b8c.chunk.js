(this.webpackJsonpgithub_card_app=this.webpackJsonpgithub_card_app||[]).push([[0],{20:function(e,t,a){e.exports=a(45)},25:function(e,t,a){},26:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(16),o=a.n(c),i=(a(25),a(19)),u=a(2),s=a(3),l=a(5),m=a(4),p=(a(26),function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props;return r.a.createElement("div",{className:"github-profile"},r.a.createElement("img",{src:e.avatar_url,alt:"Placeholder"}),r.a.createElement("div",{className:"info"},r.a.createElement("div",{className:"name"},e.name),r.a.createElement("div",{className:"company"},e.company)))}}]),a}(n.Component));var f=function(e){return r.a.createElement("div",null,e.profiles.map((function(e){return r.a.createElement(p,Object.assign({key:e.id},e))})))},h=a(6),d=a.n(h),v=a(17),b=a(18),E=a.n(b),g=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={userName:""},e.handleSubmit=function(){var t=Object(v.a)(d.a.mark((function t(a){var n;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),t.next=3,E.a.get("https://api.github.com/users/".concat(e.state.userName));case 3:n=t.sent,e.props.onSubmit(n.data),e.setState({userName:""});case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(s.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("input",{type:"text",value:this.state.userName,onChange:function(t){return e.setState({userName:t.target.value})},placeholder:"GitHub username",required:!0}),r.a.createElement("button",null,"Add card"))}}]),a}(n.Component),j=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={profiles:[]},e.addNewProfile=function(t){e.setState((function(e){return{profiles:[].concat(Object(i.a)(e.profiles),[t])}}))},e}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"The Github Cards App"),r.a.createElement(g,{onSubmit:this.addNewProfile}),r.a.createElement(f,{profiles:this.state.profiles}))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[20,1,2]]]);
//# sourceMappingURL=main.2d6b4b8c.chunk.js.map