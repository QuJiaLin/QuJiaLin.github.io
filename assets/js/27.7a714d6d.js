(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{351:function(t,n,a){"use strict";a.r(n);var s=a(3),e=Object(s.a)({},(function(){var t=this,n=t._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"canvas中的变换"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#canvas中的变换"}},[t._v("#")]),t._v(" canvas中的变换")]),t._v(" "),n("p",[t._v("​\ttranslate(x, y)\n​\t\t我们先介绍 translate 方法，它用来移动 canvas的原点到一个不同的位置。\n​\t\ttranslate 方法接受两个参数。x 是左右偏移量，y 是上下偏移量，\n​")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v("\t在canvas中translate是累加的\n\nrotate(angle)\n\t这个方法只接受一个参数：旋转的角度(angle)，它是顺时针方向的，以弧度为单位的值。\n\t旋转的中心点始终是 canvas 的原点，如果要改变它，我们需要用到 translate 方法\n\t\n\t在canvas中rotate是累加的\n\t\nscale(x, y)\n\tscale 方法接受两个参数。x,y 分别是横轴和纵轴的缩放因子，它们都必须是正值。\n\t值比 1.0 小表示缩小，比 1.0 大则表示放大，值为 1.0 时什么效果都没有。\n\t缩放一般我们用它来增减图形在 canvas 中的像素数目，对形状，位图进行缩小或者放大。\n\t\n\t在canvas中scale是累称的\n")])])]),n("h2",{attrs:{id:"表盘"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#表盘"}},[t._v("#")]),t._v(" 表盘")]),t._v(" "),n("p",[t._v('​\t1.初始化\n​\t\t将圆心调整到画布的中间\n​\t\t由于canvas中画圆与旋转所参照的坐标系于正常坐标系有出入\n​\t\t\t将整个画布逆时针旋转90度\n​\t\t初始化一些样式数据\n​\t\t\tctx.lineWidth = 8;\n​\t\t  \tctx.strokeStyle = "black";\n​\t\t  \tctx.lineCap = "round";\n​')]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v("2.外层空心圆盘\n\t圆盘颜色:#325FA2\n\t圆盘宽度:14\n\t圆盘半径:140\n\t\n3.时针刻度\n\t长度为20\n\t宽度为8\n\t外层空心圆盘与时针刻度之间的距离也为20\n\t\n4.分针刻度\n\t宽度为4\n\t长度为3\n\t\n5.时针\n\t宽度为14\n\t圆心外溢出80 收20\n\t\n6.分针\n\t宽度为10\n\t圆心外溢出112 收28\n\t\n7.秒针\n\t颜色:D40000\n\t宽度为6\n\t圆心外溢出83 收30\n\t\n\t----\x3e中心实心圆盘\n\t\t半径为10\n\t----\x3e秒针头\n\t\t96码开外半径为10的空心圆\n\t\t宽度为6\n")])])]),n("p",[t._v("​\t\t\n​")])])}),[],!1,null,null,null);n.default=e.exports}}]);