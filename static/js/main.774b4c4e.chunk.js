(this.webpackJsonpskyblockflips=this.webpackJsonpskyblockflips||[]).push([[0],{134:function(e,t,a){"use strict";a.r(t);var s=a(0),c=a.n(s),i=a(10),n=a.n(i),r=(a(90),a(18)),l=a(19),o=a(21),d=a(20),j=(a(34),a(79)),b=a(12),h=a(8),m=a(173),p=a(6),O=a(80),g=Object(O.a)({palette:{primary:{main:"#aaaaaa",light:"#dddddd"},secondary:{light:"#0066ff",main:"#0044ff"}},spreadIt:{button:{backgroundColor:"#4CAFFF",textAlign:"center",fontSize:"25px",padding:"10px 5px",color:"white",outlineStyle:"none",border:"none",cursor:"pointer",marginTop:"25px",minWidth:"10%"},error:{color:"red"},inputField:{backgroundColor:"white"},link:{textDecoration:"none",color:"white",textAlign:"none"},table:{backgroundColor:"#424242",border:"thin solid #515151"},tableItem:{color:"white",borderBottom:"thin solid #515151"}}}),x=a(2),u=Object(h.a)({},g.spreadIt),f=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props.classes;return Object(x.jsx)("div",{className:"App",children:Object(x.jsxs)("header",{className:"App-header",children:[Object(x.jsx)("h1",{children:"Skyblock Flips"}),Object(x.jsx)("p",{children:"Check the best items to flip at the click of a button."}),Object(x.jsx)("a",{href:"./#/bazaar",className:e.link,children:Object(x.jsx)(m.a,{className:e.button,children:"Bazaar Flips"})}),Object(x.jsx)("a",{href:".",className:e.link,children:Object(x.jsx)(m.a,{className:e.button,children:"Auction Items (Coming Soon)"})})]})})}}]),a}(s.Component),v=Object(p.a)(u)(f),y=a(165),N=a(169),k=a(168),I=a(164),S=a(166),w=a(167),B=a(136),A=a(24),F=a.n(A),z=Object(h.a)(Object(h.a)({},g.spreadIt),{},{wrapper:{width:"98%",overflow:"hidden",paddingTop:"2%",paddingLeft:"2%",paddingBottom:"2%"},cardHolder:{float:"left",width:"49%",fontSize:"25px",display:"inline-block"},notes:{width:"48%",paddingLeft:"1%",fontSize:"20px",display:"inline-block",overflow:"hidden"}}),C=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(r.a)(this,a);for(var s=arguments.length,c=new Array(s),i=0;i<s;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).state={order:[],items:{},names:{}},e.interval=setInterval((function(){F.a.get("https://skyblockflips-api.asra.repl.co/bazaar/margins").then((function(t){e.setState(Object(h.a)(Object(h.a)({},e.state),{},{order:t.data.sorted,items:t.data.items}))}))}),5e3),e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;F.a.get("https://skyblockflips-api.asra.repl.co/bazaar/margins").then((function(t){e.setState(Object(h.a)(Object(h.a)({},e.state),{},{order:t.data.sorted,items:t.data.items}))})),F.a.get("https://skyblockflips-api.asra.repl.co/bazaar/names").then((function(t){e.setState(Object(h.a)(Object(h.a)({},e.state),{},{names:t.data}))}))}},{key:"render",value:function(){var e=this,t=this.props.classes;return Object(x.jsx)("div",{className:"App",children:Object(x.jsx)("header",{className:"App-header",children:Object(x.jsxs)("div",{className:t.wrapper,children:[Object(x.jsx)("div",{className:t.cardHolder,children:Object(x.jsx)(I.a,{component:B.a,children:Object(x.jsxs)(y.a,{className:t.table,size:"small","aria-label":"a dense table",children:[Object(x.jsx)(S.a,{children:Object(x.jsxs)(w.a,{children:[Object(x.jsx)(k.a,{className:t.tableItem,children:Object(x.jsx)("b",{children:"Item Name"})}),Object(x.jsx)(k.a,{align:"right",className:t.tableItem,children:Object(x.jsx)("b",{children:"Margin"})}),Object(x.jsx)(k.a,{align:"right",className:t.tableItem,children:Object(x.jsx)("b",{children:"Buy Price"})}),Object(x.jsx)(k.a,{align:"right",className:t.tableItem,children:Object(x.jsx)("b",{children:"Sell Price"})})]})}),Object(x.jsx)(N.a,{children:this.state.order.map((function(a,s){return Object(x.jsxs)(w.a,{hover:!0,children:[Object(x.jsx)(k.a,{component:"th",scope:"row",className:t.tableItem,children:Object(x.jsx)("a",{href:"/#/itemview/"+a,className:t.link,children:void 0===e.state.names[a]?Object(x.jsx)("span",{style:{color:"orange"},children:a.replace(/_/g," ").replace(/\S*/g,(function(e){return e.charAt(0)+e.slice(1).toLowerCase()}))}):e.state.names[a]})}),Object(x.jsx)(k.a,{align:"right",className:t.tableItem,children:Object(x.jsx)("span",{style:{color:e.state.items[a].margin>0?"#00ff00":0===e.state.items[a].margin?"grey":"#ff0000"},children:(e.state.items[a].margin>=0?"+":"")+(Math.round(1e4*e.state.items[a].margin)/100).toFixed(1).toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")+"%"})}),Object(x.jsx)(k.a,{align:"right",className:t.tableItem,children:e.state.items[a].buyOffer.toFixed(1).toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}),Object(x.jsx)(k.a,{align:"right",className:t.tableItem,children:e.state.items[a].sellOffer.toFixed(1).toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")})]},s+1)}))})]})})}),Object(x.jsxs)("div",{className:t.notes,children:[Object(x.jsx)("h1",{children:"Bazaar Flips"}),Object(x.jsxs)("p",{style:{textAlign:"left"},children:["Bazaar flipping is when you purchase an item from the bazaar using a buy order then sell it with a sell order to make a profit, this calculates and displays margins for all of the items in the bazaar and ranks them to make it easier to flip them. ",Object(x.jsx)("br",{})," ",Object(x.jsx)("br",{}),"Please note that the margins are adjusted to add 0.1 coins to the buy price and subtract 0.1 coins from the sell price before calculating as this is how most of the sell and buy offers are made. ",Object(x.jsx)("br",{})," ",Object(x.jsx)("br",{}),"This also only updates every 5 seconds to not max out the hypixel api. ",Object(x.jsx)("br",{})," ",Object(x.jsx)("br",{}),"Click on an item name to see more info about it!"]})]})]})})})}}]),a}(s.Component),P=Object(p.a)(z)(C),L=a(170),M=Object(h.a)(Object(h.a)({},g.spreadIt),{},{card:{width:"75%",backgroundColor:"#424242",color:"#ffffff",margin:"12.5%",height:"50%"}}),T=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(r.a)(this,a);for(var s=arguments.length,c=new Array(s),i=0;i<s;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).state={items:{},names:{}},e.interval=setInterval((function(){F.a.get("https://skyblockflips-api.asra.repl.co/bazaar/data").then((function(t){e.setState(Object(h.a)(Object(h.a)({},e.state),{},{items:t.data}))}))}),5e3),e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;F.a.get("https://skyblockflips-api.asra.repl.co/bazaar/data").then((function(t){e.setState(Object(h.a)(Object(h.a)({},e.state),{},{items:t.data}))})),F.a.get("https://skyblockflips-api.asra.repl.co/bazaar/names").then((function(t){e.setState(Object(h.a)(Object(h.a)({},e.state),{},{names:t.data}))}))}},{key:"render",value:function(){var e=this.props.classes,t=this.props.match.params.item;return Object(x.jsx)("div",{className:"App",children:Object(x.jsx)("header",{className:"App-header",children:Object(x.jsxs)(L.a,{className:e.card,children:[Object(x.jsx)("h1",{children:void 0===this.state.items.margins?"Loading...":void 0===this.state.names[t]?Object(x.jsx)("span",{style:{color:"orange"},children:t.replace(/_/g," ").replace(/\S*/g,(function(e){return e.charAt(0)+e.slice(1).toLowerCase()}))}):this.state.names[t]}),void 0===this.state.items.margins?null:Object(x.jsx)(I.a,{component:B.a,children:Object(x.jsxs)(y.a,{className:e.table,size:"small","aria-label":"a dense table",children:[Object(x.jsx)(S.a,{children:Object(x.jsxs)(w.a,{children:[Object(x.jsx)(k.a,{align:"center",className:e.tableItem,children:Object(x.jsx)("b",{children:"Margin"})}),Object(x.jsx)(k.a,{align:"center",className:e.tableItem,children:Object(x.jsx)("b",{children:"Pure Margin"})}),Object(x.jsx)(k.a,{align:"center",className:e.tableItem,children:Object(x.jsx)("b",{children:"Buy Price"})}),Object(x.jsx)(k.a,{align:"center",className:e.tableItem,children:Object(x.jsx)("b",{children:"# of Buy Orders"})}),Object(x.jsx)(k.a,{align:"center",className:e.tableItem,children:Object(x.jsx)("b",{children:"Sell Price"})}),Object(x.jsx)(k.a,{align:"center",className:e.tableItem,children:Object(x.jsx)("b",{children:"# of Sell Orders"})})]})}),Object(x.jsx)(N.a,{children:Object(x.jsxs)(w.a,{hover:!0,children:[Object(x.jsx)(k.a,{align:"center",className:e.tableItem,children:Object(x.jsx)("span",{style:{color:this.state.items.margins.items[t].margin>0?"#00ff00":0===this.state.items.margins.items[t].margin?"grey":"#ff0000"},children:(this.state.items.margins.items[t].margin>=0?"+":"")+(Math.round(1e4*this.state.items.margins.items[t].margin)/100).toFixed(1).toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")+"%"})}),Object(x.jsx)(k.a,{align:"center",className:e.tableItem,children:Object(x.jsx)("span",{style:{color:this.state.items.margins.items[t].margin>0?"#00ff00":0===this.state.items.margins.items[t].margin?"grey":"#ff0000"},children:(this.state.items.margins.items[t].margin>=0?"+":"")+this.state.items.margins.items[t].pureMargin.toFixed(1).toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")})}),Object(x.jsx)(k.a,{align:"center",className:e.tableItem,children:this.state.items.margins.items[t].buyOffer.toFixed(1).toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}),Object(x.jsx)(k.a,{align:"center",className:e.tableItem,children:this.state.items.data[t].quick_status.buyOrders.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}),Object(x.jsx)(k.a,{align:"center",className:e.tableItem,children:this.state.items.margins.items[t].sellOffer.toFixed(1).toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}),Object(x.jsx)(k.a,{align:"center",className:e.tableItem,children:this.state.items.data[t].quick_status.sellOrders.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")})]},1)})]})})]})})})}}]),a}(s.Component),H=Object(p.a)(M)(T),D=a(172),_=Object(h.a)(Object(h.a)({},g.spreadIt),{},{wrapper:{width:"98%",overflow:"hidden",paddingTop:"2%",paddingLeft:"2%",paddingBottom:"2%"},cardHolder:{float:"left",width:"49%",fontSize:"25px",display:"inline-block"},notes:{width:"48%",paddingLeft:"1%",fontSize:"20px",display:"inline-block",overflow:"hidden"},search:{color:"white",marginBottom:"1%"}}),q=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(r.a)(this,a);for(var s=arguments.length,c=new Array(s),i=0;i<s;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).state={items:{},search:""},e.interval=setInterval((function(){F.a.get("https://skyblockflips-api.asra.repl.co/auction/items").then((function(t){e.setState(Object(h.a)(Object(h.a)({},e.state),{},{items:t.data}))}))}),2e4),e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;F.a.get("https://skyblockflips-api.asra.repl.co/auction/items").then((function(t){e.setState(Object(h.a)(Object(h.a)({},e.state),{},{items:t.data}))}))}},{key:"render",value:function(){var e=this,t=this.props.classes;return Object(x.jsx)("div",{className:"App",children:Object(x.jsx)("header",{className:"App-header",children:Object(x.jsxs)("div",{className:t.wrapper,children:[Object(x.jsxs)("div",{className:t.cardHolder,children:[Object(x.jsx)(D.a,{id:"outlined-basic",label:"Search",variant:"outlined",className:t.search,onChange:function(t){e.setState(Object(h.a)(Object(h.a)({},e.state),{},{search:null===t?"":t}))},fullWidth:!0}),Object(x.jsx)(I.a,{component:B.a,children:Object(x.jsxs)(y.a,{className:t.table,size:"small","aria-label":"a dense table",children:[Object(x.jsx)(S.a,{children:Object(x.jsxs)(w.a,{children:[Object(x.jsx)(k.a,{className:t.tableItem,children:Object(x.jsx)("b",{children:"Item Name"})}),Object(x.jsx)(k.a,{align:"right",className:t.tableItem,children:Object(x.jsx)("b",{children:"Average Price"})}),Object(x.jsx)(k.a,{align:"right",className:t.tableItem,children:Object(x.jsx)("b",{children:"Highest Price"})}),Object(x.jsx)(k.a,{align:"right",className:t.tableItem,children:Object(x.jsx)("b",{children:"Lowest Price"})}),Object(x.jsx)(k.a,{align:"right",className:t.tableItem,children:Object(x.jsx)("b",{children:"# of Auctions"})})]})}),Object(x.jsx)(N.a,{children:Object.keys(this.state.items).map((function(a,s){return a.includes(e.state.search)?Object(x.jsxs)(w.a,{hover:!0,children:[Object(x.jsx)(k.a,{component:"th",scope:"row",className:t.tableItem,children:a}),Object(x.jsx)(k.a,{align:"right",className:t.tableItem,children:e.state.items[a].value.toFixed(1).toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}),Object(x.jsx)(k.a,{align:"right",className:t.tableItem,children:e.state.items[a].prices[0].toFixed(1).toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}),Object(x.jsx)(k.a,{align:"right",className:t.tableItem,children:e.state.items[a].prices[e.state.items[a].prices.length-1].toFixed(1).toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}),Object(x.jsx)(k.a,{align:"right",className:t.tableItem,children:e.state.items[a].prices.length.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")})]},s+1):null}))})]})})]}),Object(x.jsxs)("div",{className:t.notes,children:[Object(x.jsx)("h1",{children:"Auction Items"}),Object(x.jsx)("p",{style:{textAlign:"left"},children:"This just shows the auction data for items, the auction flips page is coming soon."})]})]})})})}}]),a}(s.Component),J=(Object(p.a)(_)(q),Object(h.a)({},g.spreadIt)),W=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props.classes;return Object(x.jsx)("div",{className:"App",children:Object(x.jsxs)("header",{className:"App-header",children:[Object(x.jsx)("h1",{children:"404"}),Object(x.jsx)("p",{children:"Page Not Found"}),Object(x.jsx)(m.a,{className:e.button,href:"/",children:"Return Home"})]})})}}]),a}(s.Component),E=Object(p.a)(J)(W),R=a(171),G=a(78),K=a.n(G)()(g),Q=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(x.jsx)("div",{className:"main-background",style:{backgroundColor:"#282c34"},children:Object(x.jsx)(R.a,{theme:K,children:Object(x.jsx)(j.a,{children:Object(x.jsxs)(b.c,{children:[Object(x.jsx)(b.a,{exact:!0,path:"/",component:v}),Object(x.jsx)(b.a,{exact:!0,path:"/bazaar",component:P}),Object(x.jsx)(b.a,{exact:!0,path:"/itemview/:item",component:H}),Object(x.jsx)(b.a,{path:"/*",component:E})]})})})})}}]),a}(s.Component),U=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,174)).then((function(t){var a=t.getCLS,s=t.getFID,c=t.getFCP,i=t.getLCP,n=t.getTTFB;a(e),s(e),c(e),i(e),n(e)}))};n.a.render(Object(x.jsx)(c.a.StrictMode,{children:Object(x.jsx)(Q,{})}),document.getElementById("root")),U()},34:function(e,t,a){},90:function(e,t,a){}},[[134,1,2]]]);
//# sourceMappingURL=main.774b4c4e.chunk.js.map