webpackJsonp([1],{"4imc":function(t,e){},"7XNL":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("link",{attrs:{rel:"shortcut icon",type:"image/png",href:"./assets/twitch-logo.png"}}),t._v(" "),a("router-view")],1)},s=[],c={render:n,staticRenderFns:s};e.a=c},Aitl:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"chat"},[a("iframe",{attrs:{frameborder:"0",scrolling:"no",id:"chat_embed",src:this.id,width:"350"}})])},s=[],c={render:n,staticRenderFns:s};e.a=c},HOKU:function(t,e){},M93x:function(t,e,a){"use strict";function n(t){a("TUez")}var s=a("xJD8"),c=a("7XNL"),r=a("VU/8"),i=n,o=r(s.a,c.a,i,null,null);e.a=o.exports},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("7+uW"),s=a("M93x"),c=a("YaEn"),r=a("wmV6");n.a.use(r.a),n.a.config.productionTip=!1,new n.a({el:"#app",router:c.a,template:"<App/>",components:{App:s.a}})},NTRZ:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"player"},[a("iframe",{attrs:{src:this.id,frameborder:"0",allowfullscreen:"true",scrolling:"no"}})])},s=[],c={render:n,staticRenderFns:s};e.a=c},OAU2:function(t,e,a){"use strict";function n(t){a("dVnp")}var s=a("u2OY"),c=a("NTRZ"),r=a("VU/8"),i=n,o=r(s.a,c.a,i,"data-v-d7ebd0ac",null);e.a=o.exports},QXW3:function(t,e,a){"use strict";function n(t){a("HOKU")}var s=a("wcVw"),c=a("Aitl"),r=a("VU/8"),i=n,o=r(s.a,c.a,i,"data-v-d7ba8db8",null);e.a=o.exports},SVgy:function(t,e,a){"use strict";var n=a("mtWM"),s=a.n(n),c=a("OAU2"),r=a("QXW3");e.a={name:"streamList",props:{id:String},data:function(){return{games:[],streams:[],errors:[],changeStreamOne:"",changeStreamTwo:"",changeChatOne:"",changeChatTwo:"",changeVideoOne:"",changeVideoTwo:"",search:""}},computed:{searchStream:function(){if(this.id){var t=this;return this.id.filter(function(e){return e.channel.name.toLowerCase().indexOf(t.search.toLowerCase())>=0})}}},methods:{selectStream:function(t,e){var a=this,n="https://player.twitch.tv/?channel=",c=t.channel.name;"inputOne"==e?(this.changeStreamOne=n+t.channel.name,this.changeChatOne="http://www.twitch.tv/"+t.channel.name+"/chat",s.a.get("http://localhost:3000/videos/"+c+"/videos").then(function(t){console.log(t),a.changeVideoOne=c}).catch(function(t){a.errors.push(t)})):"inputTwo"==e&&(this.changeStreamTwo=n+t.channel.name,this.changeChatTwo="http://www.twitch.tv/"+t.channel.name+"/chat")},closeListStream:function(){document.getElementById("stream-list").style.display="none"}},components:{streamOne:c.a,chat:r.a}}},TUez:function(t,e){},TeQQ:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"cont-stream"},[a("ul",{staticClass:"list-stream scrollbar",attrs:{id:"stream-list"}},[a("div",{staticClass:"cont-search",attrs:{id:"search-cont"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],attrs:{type:"text",placeholder:"search stream"},domProps:{value:t.search},on:{input:function(e){e.target.composing||(t.search=e.target.value)}}}),t._v(" "),a("div",{staticClass:"cont-close",on:{click:t.closeListStream}})]),t._v(" "),t._l(t.searchStream,function(e){return a("li",{key:"item.id"},[a("div",{staticClass:"cont-info-stream"},[a("img",{attrs:{src:e.channel.logo}}),t._v(" "),a("div",{staticClass:"info-stream"},[a("p",[t._v(t._s(e.channel.display_name))]),t._v(" "),a("div",{staticClass:"cont-views"},[a("div",{staticClass:"circle"}),t._v(" "),a("p",[t._v(t._s(e.viewers))])])])]),t._v(" "),a("div",{staticClass:"cont-button"},[a("button",{staticClass:"btn-stream",attrs:{type:"button"},on:{click:function(a){t.selectStream(e,"inputOne")}}},[t._v("Stream 1")]),t._v(" "),a("button",{staticClass:"btn-stream",attrs:{type:"button"},on:{click:function(a){t.selectStream(e,"inputTwo")}}},[t._v("Stream 2")])]),t._v(" "),a("div",{staticClass:"line"})])})],2),t._v(" "),a("div",{staticClass:"cont-iframe"},[a("div",[a("streamOne",{attrs:{id:t.changeStreamOne}}),t._v(" "),a("chat",{attrs:{id:t.changeChatOne}})],1),t._v(" "),a("div",[a("streamOne",{attrs:{id:t.changeStreamTwo}}),t._v(" "),a("chat",{attrs:{id:t.changeChatTwo}})],1)])])},s=[],c={render:n,staticRenderFns:s};e.a=c},YaEn:function(t,e,a){"use strict";var n=a("7+uW"),s=a("/ocq"),c=a("zIkb");n.a.use(s.a),e.a=new s.a({routes:[{path:"/",name:"menu",component:c.a}]})},ctpP:function(t,e,a){"use strict";var n=a("mtWM"),s=a.n(n),c=a("OAU2"),r=a("wsJ1"),i=a("QXW3");e.a={name:"menu",data:function(){return{games:[],streams:[],errors:[],changeStreamOne:"",changeStreamTwo:"",showStreamList:""}},created:function(){var t=this;s.a.get("http://localhost:3000/games").then(function(e){t.games=e.data.top}).catch(function(e){t.errors.push(e)})},methods:{selectStreamList:function(t){var e=this;document.getElementById("stream-list").style.display="block",document.getElementById("search-cont").style.display="flex";var a=t.game.name;s.a.get("http://localhost:3000/streams/"+a).then(function(t){e.showStreamList=t.data.streams}).catch(function(t){e.errors.push(t)})}},components:{streamOne:c.a,streamList:r.a,chat:i.a}}},dVnp:function(t,e){},tJM6:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main-cont"},[a("div",{staticClass:"main-cont-menu"},[a("div",{staticClass:"cont-menu scrollbar",attrs:{id:"scroll-style"}},[t._m(0),t._v(" "),a("ul",t._l(t.games,function(e){return a("li",[a("img",{attrs:{src:e.game.box.large},on:{click:function(a){t.selectStreamList(e)}}}),t._v(" "),a("button",{attrs:{type:"button"},on:{click:function(a){t.selectStreamList(e)}}},[t._v(t._s(e.game.name))])])}))]),t._v(" "),a("streamList",{attrs:{id:t.showStreamList}})],1)])},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"game"},[a("div",{staticClass:"game-img"}),t._v(" "),a("p",[t._v("Twitch Screens")]),t._v(" "),a("div",{staticClass:"game-img"})])}],c={render:n,staticRenderFns:s};e.a=c},u2OY:function(t,e,a){"use strict";e.a={name:"streamOne",props:{id:String},data:function(){return{}}}},wcVw:function(t,e,a){"use strict";e.a={name:"chat",props:{id:String},data:function(){return{}}}},wsJ1:function(t,e,a){"use strict";function n(t){a("yN9/")}var s=a("SVgy"),c=a("TeQQ"),r=a("VU/8"),i=n,o=r(s.a,c.a,i,"data-v-6e987fec",null);e.a=o.exports},xJD8:function(t,e,a){"use strict";e.a={name:"app"}},"yN9/":function(t,e){},zIkb:function(t,e,a){"use strict";function n(t){a("4imc")}var s=a("ctpP"),c=a("tJM6"),r=a("VU/8"),i=n,o=r(s.a,c.a,i,"data-v-1a78dfab",null);e.a=o.exports}},["NHnr"]);