(this.webpackJsonpfindify_task=this.webpackJsonpfindify_task||[]).push([[0],{14:function(e,a,t){},15:function(e,a,t){},16:function(e,a,t){},18:function(e,a,t){},19:function(e,a,t){"use strict";t.r(a);var s=t(1),n=t.n(s),c=t(4),r=t.n(c),l=(t(14),t(5)),i=t(6),u=t(2),d=t(9),j=t(8),h=(t(15),t(16),t(0)),o=function(){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("div",{className:"graph-wrapper",children:[Object(h.jsx)("span",{className:"part1"}),Object(h.jsx)("span",{className:"part2"}),Object(h.jsx)("span",{className:"part3"}),Object(h.jsx)("span",{className:"part4"})]}),Object(h.jsxs)("div",{className:"dollars-wrapper",children:[Object(h.jsx)("span",{children:"$0 -$30,000"}),Object(h.jsx)("span",{children:"$30,000 - $200,000"}),Object(h.jsx)("span",{children:"$200,000 -$1million"}),Object(h.jsx)("span",{children:"$1million & up"})]})]})},p=function(e){Object(d.a)(t,e);var a=Object(j.a)(t);function t(e){var s;return Object(l.a)(this,t),(s=a.call(this,e)).handleSliderValue=function(e){s.setState({sliderValue:e.target.value});var a=Number(100*(e.target.value-e.target.min)/(e.target.max-e.target.min));s.bubleRef.current.style.left="calc(".concat(a,"% + (").concat(8-.25*a,"px) - 5px)")},s.state={sliderValue:1,maxSliderValue:100},s.inputRef=n.a.createRef(),s.bubleRef=n.a.createRef(),s.handleSliderValue=s.handleSliderValue.bind(Object(u.a)(s)),s}return Object(i.a)(t,[{key:"formatNumber",value:function(e){return e<26?1200*e:e>=26&&e<51?4e3*e:e>=51&&e<76?Math.ceil(e*(1e6/75)):e>=76&&e<101?Math.ceil(2e4*e):e.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1,")}},{key:"render",value:function(){return Object(h.jsxs)("div",{className:"slider",children:[Object(h.jsx)("span",{htmlFor:"range",ref:this.bubleRef,className:"bubble",children:Object(h.jsx)("section",{children:Object(h.jsx)("span",{children:"$ ".concat(this.formatNumber(this.state.sliderValue))})})}),Object(h.jsx)("input",{onChange:this.handleSliderValue,ref:this.inputRef,type:"range",min:"1",max:this.state.maxSliderValue,defaultValue:this.state.sliderValue}),Object(h.jsx)(o,{})]})}}]),t}(n.a.Component),v=t(7),b=(t(18),function(){var e=n.a.useState(!1),a=Object(v.a)(e,2),t=a[0],s=a[1],c=n.a.createRef(),r=n.a.createRef();return Object(h.jsx)("div",{className:"switch-container",children:Object(h.jsxs)("div",{className:"switch-wrapper",children:[Object(h.jsx)("img",{src:"data:image/png;base64,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",alt:"logo icon"}),Object(h.jsx)("h2",{children:"YOTPO"}),Object(h.jsxs)("label",{className:"switch-box",children:[Object(h.jsx)("input",{checked:t,onChange:function(e){!0===t?(s(!1),r.current.style.background="#9c9c9c"):(s(!0),r.current.style.background="#3eb281")},ref:c,type:"checkbox"}),Object(h.jsx)("span",{ref:r,className:"switch round"})]})]})})}),O=function(){return Object(h.jsxs)("div",{className:"container",children:[Object(h.jsxs)("div",{className:"wrapper",children:[Object(h.jsx)("h1",{children:"What are your monthly online sales?"}),Object(h.jsx)("span",{className:"title",children:"(approximately)"}),Object(h.jsx)(p,{})]}),Object(h.jsx)(b,{})]})};r.a.render(Object(h.jsx)(n.a.StrictMode,{children:Object(h.jsx)(O,{})}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.82d7b93b.chunk.js.map