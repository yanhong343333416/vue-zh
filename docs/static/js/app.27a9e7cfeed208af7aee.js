webpackJsonp([0],[,,function(e,t,a){function n(e){a(17)}var i=a(0)(a(7),a(29),n,null,null);e.exports=i.exports},function(e,t,a){"use strict";var n=a(1),i=a(32),s=a(22),r=a.n(s),l=a(23),o=a.n(l),c=a(24),u=a.n(c);n.a.use(i.a),t.a=new i.a({routes:[{path:"/",name:"hello",component:r.a},{path:"/structure",name:"structure",component:o.a},{path:"/table",name:"table",component:u.a}]})},function(e,t,a){function n(e){a(18)}var i=a(0)(a(6),a(30),n,null,null);e.exports=i.exports},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(1),i=a(4),s=a.n(i),r=a(3);n.a.config.productionTip=!1,new n.a({el:"#app",router:r.a,template:"<App/>",components:{App:s.a}})},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"app"}},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"form-organization",props:{organization:{type:Array,default:function(){return[]}},value:{required:!1},search:{type:Boolean,default:!1},placeholder:{type:String,default:"按拼音或汉字搜索"}},data:function(){return{organizationNavs:[],currOrganization:[],currParent:null,content:[],visible:!1,cur:"",searchVal:"",result:[],position:!1}},created:function(){this.currOrganization=this.organization,this.initValue()},computed:{filterSearch:function(){var e=this.searchVal;return e?this.currOrganization.filter(function(t){return-1!==t.value.indexOf(e)||-1!==t.label.indexOf(e)}):this.currOrganization.slice(0)},classes:function(){return{"ms-organization-body-top":this.position,"ms-organization-body-with-search":this.search}}},filters:{filterContent:function(e){return e.length?e.map(function(e){return e.label}).join("/"):""}},mounted:function(){this.$nextTick(function(){})},methods:{toggleChild:function(){this.visible?this.hide():this.show()},show:function(){this.visible=!0,document.addEventListener("click",this.closeOnDocumentClick,!1)},hide:function(){this.visible=!1,document.removeEventListener("click",this.closeOnDocumentClick,!1)},closeOnDocumentClick:function(e){this.$el.contains(e.target)||this.hide()},showChild:function(e){this.result=[];var t=this.organizationNavs,a=this.currOrganization;this.searchVal="",e.children&&e.children.length?(t.push({value:e.value,label:e.label,children:e.children,parentNode:a}),this.content.push({value:e.value,label:e.label}),this.organizationNavs=t,this.currOrganization=e.children,this.$emit("input",[])):-1===this.content.indexOf(e)&&(this.cur&&this.content.pop(),this.content.push({value:e.value,label:e.label}),this.cur=e.value,this.visible=!1,this.result=this.content,this.$emit("input",this.content.map(function(e){return e.value})))},changeNav:function(e,t){this.result=[];var a=this.organizationNavs,n=this.content;this.currOrganization=e.parentNode,0===t?(this.content=[],this.organizationNavs=[]):(this.organizationNavs=a.splice(0,t),this.content=n.splice(0,t)),this.cur="",this.$emit("input",[])},initValue:function(){function e(a,n){for(var i=0;i<a.length;i++){var s=a[i];if(s&&s.value){if(s.value===n){t={parentNode:a,node:a[i]};break}s.children&&s.children.length&&e(s.children,n)}}return t}this.content=[],this.result=[];var t={},a=this.organization,n=this.value;if(n&&n.length){for(var i=0;i<n.length;i++){var s=e(a,n[i]),r=s.node;r&&(r.children&&r.children.length?(this.organizationNavs.push({value:r.value,label:r.label,children:r.children,parentNode:s.parentNode}),a=r.children):(this.currOrganization=s.parentNode,this.cur=r.value),this.content.push({value:r.value,label:r.label}))}this.result=this.content}}},beforeDestroy:function(){this.hide()}}},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"ms-subheader"}},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"ms-table",props:{height:{type:Number},columns:{type:[Array],default:function(){return[]}},data:{type:[Array],default:function(){return[]}}},data:function(){return{style:null,styleBody:null,filterKey:"",filterMethod:""}},computed:{sortData:function(){var e=this.filterKey,t=this.filterMethod,a=this.data.slice();return a.sort(function(a,n){return"asc"===t?a[e]>n[e]?1:-1:"desc"===t?a[e]<n[e]?1:-1:void 0}),a}},mounted:function(){this.$nextTick(function(){this.computedStyle()})},methods:{handleSort:function(e,t){this.filterKey=e.key,this.filterMethod=t,e.sortType=t},computedStyle:function(){var e=this.$refs.tableWrap,t=this.$refs.tableHead,a=this.$refs.tableBody,n=window.getComputedStyle(e,null).width,i=window.getComputedStyle(t,null).width,s=window.getComputedStyle(a,null).width,r=[n,i,s];r=r.map(function(e){return Number(e.replace("px",""))}),r.sort(function(e,t){return t-e});var l=r[0]+"px";if(this.style={width:l},this.height){var o=this.height;"number"==typeof this.height&&(o=this.height+"px"),this.styleBody={width:l,height:o}}else this.styleBody={width:l}}}}},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(2),i=a.n(n);t.default={name:"hello",data:function(){return{msg:"Welcome to Your Vue.js App",seleted:[],seleted2:[],seleted3:[],organization:[],organization2:[],organization3:[]}},created:function(){this.init()},methods:{init:function(){this.genOrganization(),this.genOrganization2(),this.genOrganization3()},genOrganization:function(){var e=this;setTimeout(function(){[{value:"beijing",label:"北京"},{value:"shanghai",label:"上海"},{value:"shenzhen",label:"深圳"},{value:"hangzhou",label:"杭州"},{value:"zhengzhou",label:"郑州"},{value:"guangzhou",label:"广州"},{value:"xiamen",label:"厦门"}].forEach(function(t){e.organization.push(t)})},1e3)},genOrganization2:function(){var e=this;setTimeout(function(){[{value:"beijing",label:"北京",children:[{value:"chaoyang",label:"朝阳"},{value:"haidian",label:"海淀"},{value:"changping",label:"昌平"},{value:"shunyi",label:"顺义"}]},{value:"shanghai",label:"上海",children:[{value:"baoshan",label:"宝山"},{value:"jiading",label:"嘉定"},{value:"songjiang",label:"松江"},{value:"pudong",label:"浦东"}]}].forEach(function(t){e.organization2.push(t)})},1e3)},genOrganization3:function(){var e=this;setTimeout(function(){[{value:"beijing",label:"北京",children:[{value:"chaoyang",label:"朝阳",children:[{value:"wangjing",label:"望京"}]},{value:"haidian",label:"海淀",children:[{value:"zhongguancun",label:"中关村"}]},{value:"changping",label:"昌平",children:[{value:"huoying",label:"霍营"}]},{value:"shunyi",label:"顺义"}]},{value:"shanghai",label:"上海",children:[{value:"baoshan",label:"宝山"},{value:"jiading",label:"嘉定"},{value:"songjiang",label:"松江"},{value:"pudong",label:"浦东"}]}].forEach(function(t){e.organization3.push(t)})},1e3)}},components:{FormOrganization:i.a}}},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(2),i=a.n(n);t.default={name:"structure",data:function(){return{structure:[],seleted:[],seleted2:[],currStructure:[]}},computed:{},created:function(){for(var e=[{code:42e4,name:"湖北省",parentCode:0},{code:420100,name:"武汉市",parentCode:42e4},{code:420101,name:"市辖区",parentCode:420100},{code:420102,name:"江岸区",parentCode:420100},{code:420103,name:"江汉区",parentCode:420100},{code:420104,name:"硚口区",parentCode:420100},{code:420105,name:"汉阳区",parentCode:420100},{code:421e3,name:"荆州市",parentCode:42e4},{code:421001,name:"市辖区",parentCode:421e3},{code:421002,name:"沙市区",parentCode:421e3},{code:421003,name:"荆州区",parentCode:421e3},{code:43e4,name:"湖南省",parentCode:0},{code:430100,name:"长沙市",parentCode:43e4},{code:430101,name:"市辖区",parentCode:430100},{code:430102,name:"芙蓉区",parentCode:430100},{code:430103,name:"天心区",parentCode:430100},{code:430104,name:"岳麓区",parentCode:430100}],t=0;t<e.length;t++)this.structure.push({value:e[t].code,parentValue:e[t].parentCode,label:e[t].name,nodeData:e[t]});this.currStructure=this.buildTree2(this.structure)},methods:{buildTree:function(e){if("[object Array]"!==Object.prototype.toString.call(e)||0===e.length)return null;var t=void 0,a=void 0,n=void 0,i=e.length,s=[];if(1===i)return e[0];for(var r=0;r<i;r++)if(t=e[r],n=!1,t.parentValue){console.log(t);for(var l=0;l<i;l++)if(a=e[l],a.value===t.parentValue){a.children||(a.children=[]),a.children.push(t),a.leaf=!1,n=!0;break}n||s.push(t)}else s.push(t);return 1===s.length?s[0]:s},buildTree2:function(e){var t=e.length;return 1===t?e[0]:e.filter(function(t){return t.parentValue&&e.find(function(e){if(e.value===t.parentValue)return e.children||(e.children=[]),e.children.push(t),e.leaf=!1,e})?void 0:t})}},components:{FormOrganization:i.a}}},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(21),i=a.n(n),s=a(20),r=a.n(s);t.default={data:function(){return{columns:[{title:"日期",key:"date"},{title:"姓名",key:"name",sortable:!0,sortType:"asc"},{title:"年龄",key:"age"},{title:"地址",key:"address"},{title:"年龄",key:"age",sortable:!0},{title:"地址",key:"address"},{title:"年龄",key:"age",sortable:!0},{title:"地址",key:"address"}],data:[{name:"王小明",age:18,address:"北京市朝阳区芍药居",date:"2016-10-03",address1:"北京市朝阳区芍药居",date1:"2016-10-03",address2:"北京市朝阳区芍药居",date2:"2016-10-03"},{name:"张小刚",age:25,address:"北京市海淀区西二旗",date:"2016-10-01",address1:"北京市朝阳区芍药居",date1:"2016-10-03",address2:"北京市朝阳区芍药居",date2:"2016-10-03"},{name:"李小红",age:30,address:"上海市浦东新区世纪大道",date:"2016-10-02",address1:"北京市朝阳区芍药居",date1:"2016-10-03",address2:"北京市朝阳区芍药居",date2:"2016-10-03"},{name:"周小伟",age:26,address:"深圳市南山区深南大道",date:"2016-10-04",address1:"北京市朝阳区芍药居",date1:"2016-10-03",address2:"北京市朝阳区芍药居",date2:"2016-10-03"},{name:"李小红",age:30,address:"上海市浦东新区世纪大道",date:"2016-10-02",address1:"北京市朝阳区芍药居",date1:"2016-10-03",address2:"北京市朝阳区芍药居",date2:"2016-10-03"},{name:"周小伟",age:26,address:"深圳市南山区深南大道",date:"2016-10-04",address1:"北京市朝阳区芍药居",date1:"2016-10-03",address2:"北京市朝阳区芍药居",date2:"2016-10-03"},{name:"李小红",age:30,address:"上海市浦东新区世纪大道",date:"2016-10-02",address1:"北京市朝阳区芍药居",date1:"2016-10-03",address2:"北京市朝阳区芍药居",date2:"2016-10-03"},{name:"周小伟",age:26,address:"深圳市南山区深南大道",date:"2016-10-04",address1:"北京市朝阳区芍药居",date1:"2016-10-03",address2:"北京市朝阳区芍药居",date2:"2016-10-03"},{name:"李小红",age:30,address:"上海市浦东新区世纪大道",date:"2016-10-02",address1:"北京市朝阳区芍药居",date1:"2016-10-03",address2:"北京市朝阳区芍药居",date2:"2016-10-03"},{name:"周小伟",age:26,address:"深圳市南山区深南大道",date:"2016-10-04",address1:"北京市朝阳区芍药居",date1:"2016-10-03",address2:"北京市朝阳区芍药居",date2:"2016-10-03"}]}},components:{MsTable:i.a,MsSubheader:r.a}}},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t,a){function n(e){a(13)}var i=a(0)(a(8),a(25),n,null,null);e.exports=i.exports},function(e,t,a){function n(e){a(14)}var i=a(0)(a(9),a(26),n,null,null);e.exports=i.exports},function(e,t,a){function n(e){a(15)}var i=a(0)(a(10),a(27),n,null,null);e.exports=i.exports},function(e,t,a){function n(e){a(16)}var i=a(0)(a(11),a(28),n,null,null);e.exports=i.exports},function(e,t,a){function n(e){a(19)}var i=a(0)(a(12),a(31),n,null,null);e.exports=i.exports},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:"subheader"},[e._t("default")],2)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{ref:"tableWrap",staticClass:"table-wrap"},[e.columns.length?a("div",{staticClass:"ms-table-header"},[a("table",{ref:"tableHead",style:e.style,attrs:{cellspacing:"0"}},[a("thead",{staticClass:"table_thead"},[a("tr",e._l(e.columns,function(t,n){return a("th",{staticClass:"table_cell"},[a("div",[a("span",[e._v(e._s(t.title))]),e._v(" "),t.sortable?a("span",{staticClass:"ms-table-sort"},[a("i",{staticClass:"ms-sort-arrow-up",class:{cur:"asc"===t.sortType},on:{click:function(a){e.handleSort(t,"asc")}}}),e._v(" "),a("i",{staticClass:"ms-sort-arrow-down",class:{cur:"desc"===t.sortType},on:{click:function(a){e.handleSort(t,"desc")}}})]):e._e()])])}))])])]):e._e(),e._v(" "),a("div",{staticClass:"ms-table-body",style:e.styleBody},[a("table",{ref:"tableBody",style:e.style,attrs:{cellspacing:"0"}},[e.sortData.length?a("tbody",{staticClass:"table_body"},e._l(e.sortData,function(t){return a("tr",e._l(t,function(t){return a("td",{staticClass:"table_cell"},[e._v(e._s(t))])}))})):e._e()])]),e._v(" "),a("div",{staticClass:"ms-table-body"},[e.sortData.length?e._e():a("div",{staticClass:"empty_data"},[e._v("暂无数据")])])])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"hello"},[e._m(0),e._v(" "),a("div",{staticClass:"ms-form"},[a("div",{staticClass:"ms-form-item"},[a("label",{staticClass:"ms-form-label"},[e._v("一级级联:")]),e._v(" "),a("div",{staticClass:"ms-form-input-block"},[a("form-organization",{attrs:{organization:e.organization},model:{value:e.seleted,callback:function(t){e.seleted=t},expression:"seleted"}})],1)]),e._v(" "),a("div",{staticClass:"ms-form-item"},[a("label",{staticClass:"ms-form-label"},[e._v("二级级联:")]),e._v(" "),a("div",{staticClass:"ms-form-input-block"},[a("form-organization",{attrs:{organization:e.organization2},model:{value:e.seleted2,callback:function(t){e.seleted2=t},expression:"seleted2"}})],1)]),e._v(" "),a("div",{staticClass:"ms-form-item"},[a("label",{staticClass:"ms-form-label"},[e._v("三级级联:")]),e._v(" "),a("div",{staticClass:"ms-form-input-block"},[a("form-organization",{attrs:{organization:e.organization3},model:{value:e.seleted3,callback:function(t){e.seleted3=t},expression:"seleted3"}})],1)])]),e._v(" "),a("div",{staticClass:"router-links"},[a("router-link",{attrs:{to:{path:"/structure"}}},[e._v("查看前端处理数据的情况")])],1)])},staticRenderFns:[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"title"},[a("h4",[e._v("后端处理数据的情况")])])}]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"structure-wrap hello"},[e._m(0),e._v(" "),a("div",{staticClass:"ms-form"},[a("div",{staticClass:"ms-form-item"},[a("label",{staticClass:"ms-form-label"},[e._v("组织架构:")]),e._v(" "),a("div",{staticClass:"ms-form-input-block"},[a("form-organization",{attrs:{organization:e.currStructure},model:{value:e.seleted,callback:function(t){e.seleted=t},expression:"seleted"}})],1)]),e._v(" "),a("div",{staticClass:"ms-form-item"},[a("label",{staticClass:"ms-form-label"},[e._v("组织架构:")]),e._v(" "),a("div",{staticClass:"ms-form-input-block"},[a("form-organization",{attrs:{organization:e.currStructure},model:{value:e.seleted2,callback:function(t){e.seleted2=t},expression:"seleted2"}})],1)])]),e._v(" "),a("div",{staticClass:"router-links"},[a("router-link",{attrs:{to:{path:"/"}}},[e._v("查看后端处理数据情况")])],1)])},staticRenderFns:[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"title"},[a("h4",[e._v("前端处理数据的情况")])])}]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"ms-organization-wrap"},[a("div",{staticClass:"ms-organization-title",on:{click:e.toggleChild}},[e.result.length?e._e():a("span",[e._v("请选择")]),e._v("\n      "+e._s(e._f("filterContent")(e.result))+"\n    ")]),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:e.visible,expression:"visible"}],staticClass:"ms-organization-body",class:e.classes},[a("div",{staticClass:"ms-organization-body-header"},[e.search?a("div",{staticClass:"ms-organization-search"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.searchVal,expression:"searchVal"}],attrs:{type:"text",placeholder:e.placeholder},domProps:{value:e.searchVal},on:{input:function(t){t.target.composing||(e.searchVal=t.target.value)}}})]):e._e(),e._v(" "),e.organizationNavs.length?a("div",{staticClass:"ms-organization-router"},[a("span",[e._v("已选择:")]),e._v(" "),e._l(e.organizationNavs,function(t,n){return a("a",{key:t.value,on:{click:function(a){a.preventDefault(),a.stopPropagation(),e.changeNav(t,n)}}},[e._v(e._s(t.label)),e.organizationNavs.length-1!==n?a("span",[e._v(">")]):e._e()])})],2):e._e()]),e._v(" "),a("div",{staticClass:"ms-organization-content"},[e.filterSearch.length?a("ul",{staticClass:"ms-organization-options"},e._l(e.filterSearch,function(t,n){return a("li",{key:t.value,class:{active:t.value===e.cur},on:{click:function(a){a.stopPropagation(),e.showChild(t)}}},[a("div",[e._v(e._s(t.label))])])})):a("ul",{staticClass:"ms-organization-options"},[a("li",[a("div",[e._v("没有匹配项")])])])])])])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"table-demo"},[a("ms-subheader",[e._v("1 图表左右滚动")]),e._v(" "),a("ms-table",{attrs:{columns:e.columns,data:e.data}}),e._v(" "),a("ms-subheader",[e._v("2 设置tbody高度，thead固定，tbody超出滚动")]),e._v(" "),a("ms-table",{attrs:{columns:e.columns,data:e.data,height:300}})],1)},staticRenderFns:[]}}],[5]);
//# sourceMappingURL=app.27a9e7cfeed208af7aee.js.map