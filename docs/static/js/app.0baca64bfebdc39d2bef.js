webpackJsonp([1],{"7zck":function(t,n){},NHnr:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=e("7+uW"),o={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",{attrs:{id:"app"}},[n("v-app",{attrs:{dark:""}},[n("router-view")],1)],1)},staticRenderFns:[]};var s=e("VU/8")({name:"App"},o,!1,function(t){e("ktuF")},null,null).exports,r=e("/ocq"),c={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"landing"},[e("div",{attrs:{id:"main-content"}},[e("v-container",{attrs:{fluid:"","fill-height":""}},[e("v-layout",{attrs:{"align-center":"","justify-center":""}},[e("v-flex",{attrs:{xs12:"",sm8:"",md10:""}},[e("v-toolbar",{attrs:{color:"blue darken-3"}},[e("v-toolbar-items",[e("v-layout",{attrs:{"align-center":"true","justify-center":"true"}},[t._l(t.fitlerZeroCounts(),function(n){return e("v-chip",{key:n.type,staticClass:"elevation-16 uk-animation-slide-left-small",attrs:{color:"secondary",small:"","text-color":"white"}},[e("v-avatar",{staticClass:"teal"},[t._v(t._s(n.count))]),t._v("\n                "+t._s(n.type)+"\n              ")],1)}),t._v(" "),0==t.inputText.length?e("v-chip",{staticClass:"elevation-3 title uk-animation-slide-right-small",attrs:{"align-center":"true",color:"secondary","text-color":"white"}},[t._v("\n                Start typing or pasting in the box below\n                "),e("v-icon",{attrs:{right:""}},[t._v("arrow_downward")])],1):t._e()],2)],1)],1),t._v(" "),e("v-snackbar",{attrs:{timeout:2e3,bottom:!0,top:!1,left:!1,right:!1},model:{value:t.snackbar,callback:function(n){t.snackbar=n},expression:"snackbar"}},[t._v("\n          "+t._s(t.snackbarText)+"\n          "),e("v-btn",{attrs:{flat:"",color:"green"},on:{click:function(n){t.toggleSnackbar()}}},[t._v("Close")])],1),t._v(" "),e("v-card",{attrs:{"my-auto":""}},[e("v-layout",{attrs:{row:""}},[e("v-flex",{attrs:{md12:"","offset-xs0":""}},[e("v-card",{staticClass:"card--flex-toolbar elevation-16",attrs:{height:"fit-content"}},[e("v-toolbar",{attrs:{color:"darken-3",card:"",prominent:""}},[e("v-toolbar-title",{staticClass:"body-2 grey--text"}),t._v(" "),e("v-spacer"),t._v(" "),e("v-btn",{attrs:{icon:""}},[e("v-icon",{attrs:{color:"blue darken1"}},[t._v("search")])],1),t._v(" "),e("v-btn",{attrs:{icon:""},on:{click:function(n){t.deleteCode()}},nativeOn:{click:function(n){t.snackbar=!0}}},[e("v-tooltip",{attrs:{bottom:""}},[e("v-icon",{attrs:{slot:"activator",color:"blue darken1"},slot:"activator"},[t._v("delete")]),t._v(" "),e("span",[t._v("Clean text")])],1)],1)],1),t._v(" "),e("v-card-text",{staticStyle:{height:"max-content"}},[e("v-text-field",{attrs:{id:"chars-input",name:"input-1",label:"Paste your characters here","multi-line":"",rows:"20",counter:1e10},on:{keyup:function(n){t.formatCode()}},model:{value:t.inputText,callback:function(n){t.inputText=n},expression:"inputText"}})],1)],1)],1)],1)],1)],1)],1)],1)],1)])},staticRenderFns:[]};var i=e("VU/8")({name:"Landing",data:function(){return{imgUrl:"static/BingWallpaper-2018-05-10.jpg",inputText:"",snacksTimeout:2e3,snackbarText:"Nothing",snackbar:!1,vowASCII:[65,97,69,101,73,105,79,111,85,117],counts:[{type:"Vowels",count:0},{type:"Consonents",count:0},{type:"Spaces",count:0},{type:"Special Chars",count:0},{type:"Total",count:0},{type:"Numbers",count:0},{type:"Alphabets",count:0},{type:"lower case",count:0},{type:"ALL CAPS",count:0}]}},methods:{toggleSnackbar:function(t){t?(this.snackbarText=t,this.snackbar=!this.snackbar):this.snackbar=!1},fitlerZeroCounts:function(){for(var t=[],n=0;n<this.counts.length;n++)this.counts[n].count>0&&t.push(this.counts[n]);return t},formatCode:function(){this.countChars(this.inputText)},deleteCode:function(){this.inputText="",this.toggleSnackbar("Text cleared"),this.countChars(this.inputText)},countChars:function(t){this.counts[4].count=t.length;for(var n=0,e=0,a=0,o=0,s=0,r=0,c=0,i=0,l=0;l<t.length;l++){var u=t.charCodeAt(l);32===u?n++:u>=33&&u<=47||u>=58&&u<=64||u>=91&&u<=96||u>=123&&u<=126||u>=128&&u<=140||142===u||u>=145&&u<=156||u>=158?r++:u>=65&&u<=90||u>=97&&u<=122?(i++,this.vowASCII.includes(u)?e++:a++,u>=97&&u<=122?o++:s++):u>=48&&u<=57&&c++}this.counts[0].count=e,this.counts[1].count=a,this.counts[2].count=n,this.counts[3].count=r,this.counts[5].count=c,this.counts[6].count=i,this.counts[7].count=o,this.counts[8].count=s}}},c,!1,function(t){e("lhJr")},"data-v-060a3fd6",null).exports;a.a.use(r.a);var l=new r.a({routes:[{path:"/",name:"Landing",component:i}]}),u=e("3EgV"),v=e.n(u);e("7zck");a.a.use(v.a),a.a.config.productionTip=!1,new a.a({el:"#app",router:l,components:{App:s},template:"<App/>"})},ktuF:function(t,n){},lhJr:function(t,n){}},["NHnr"]);
//# sourceMappingURL=app.0baca64bfebdc39d2bef.js.map