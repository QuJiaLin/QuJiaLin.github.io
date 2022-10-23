(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{358:function(t,e,r){"use strict";r.r(e);var s=r(3),_=Object(s.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"一、fiddler-简介"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一、fiddler-简介"}},[t._v("#")]),t._v(" 一、Fiddler 简介")]),t._v(" "),e("p",[t._v("Fiddler 是最强大最好用的 Web 调试工具之一， 它能记录所有客户端和服务器的 http 和 https 请求。允许你监视、设置断点、甚至修改输入输出数据。Fiddler 包含了一个强大的基于事件脚本的子系统，并且能使用.net 语言进行扩展。换言之，你对 HTTP 协议越了解，你就能越掌握 Fiddler 的使用方法。你越使用 Fiddler，就越能帮助你了解 HTTP 协议。Fiddler 无论对开发人员或者测试人员来说，都是非常有用的工具。")]),t._v(" "),e("h2",{attrs:{id:"二、fiddler-的工作原理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#二、fiddler-的工作原理"}},[t._v("#")]),t._v(" 二、Fiddler 的工作原理")]),t._v(" "),e("p",[t._v("Fiddler 是以代理 web 服务器的形式工作的，它使用代理地址:127.0.0.1，端口:8888。 当 Fiddler 退出的时候它会自动注销， 这样就不会影响别的程序。不过如果 Fiddler 非正常退出，这时候因为 Fiddler 没有自动注销，会造成网页无法访问。 解决的办法是重新启动下 Fiddler。")]),t._v(" "),e("p",[t._v("个人理解：fiddler 是一个抓包工具，当浏览器访问服务器会形成一个请求，此时，fiddler 就处于请求之间，当浏览器发送请求，会先经过 fiddler，然后在到服务器；当服务器有返回数据给浏览器显示时，也会先经过 fiddler，然后数据才到浏览器中显示，这样一个过程，fiddler 就抓取到了请求和响应的整个过程。")]),t._v(" "),e("p",[t._v("正常退出方式：")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://images2017.cnblogs.com/blog/1242227/201709/1242227-20170923210954759-1901618191.png",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://images2017.cnblogs.com/blog/1242227/201709/1242227-20170923210954759-1901618191.png",alt:"img"}}),e("OutboundLink")],1)]),t._v(" "),e("h3",{attrs:{id:"fiddler-界面"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#fiddler-界面"}},[t._v("#")]),t._v(" Fiddler 界面")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://images2017.cnblogs.com/blog/1242227/201709/1242227-20170923211930353-1584573947.png",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://images2017.cnblogs.com/blog/1242227/201709/1242227-20170923211930353-1584573947.png",alt:"img"}}),e("OutboundLink")],1)]),t._v(" "),e("h2",{attrs:{id:"三、http-协议介绍"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#三、http-协议介绍"}},[t._v("#")]),t._v(" 三、http 协议介绍")]),t._v(" "),e("p",[t._v("协议是指计算机通信网络中两台计算机之间进行通信所必须共同遵守的规定或规则，超文本传输协议(HTTP)是一种通信协议，它允许将超文本标记语言(HTML)文档从 Web 服务器传送到客户端的浏览器。")]),t._v(" "),e("h3",{attrs:{id:"http-协议的主要特点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#http-协议的主要特点"}},[t._v("#")]),t._v(" HTTP 协议的主要特点")]),t._v(" "),e("p",[e("strong",[t._v("1.支持客户/服务器模式")]),t._v(" "),e("strong",[t._v("2.简单快速")]),t._v("：客户向服务器请求服务时，只需传送请求方法和路径。 请求方法常用的有 GET、HEAD、POST。 每种方法规定了客户与服务器联系的类型不同。由于 HTTP 协议简单， 使得 HTTP 服务器的程序规模小，因而通信速度很快。\n"),e("strong",[t._v("3.灵活")]),t._v("：HTTP 允许传输任意类型的数据对象。正在传输的类型由 Content-Type 加以标记。\n"),e("strong",[t._v("4.无连接")]),t._v("： 无连接的含义是限制每次连接只处理一个请求。 服务器处理完客户的请求， 并收到客户的应答后， 即断开连接。 采用这种方式可以节省传输时间。\n"),e("strong",[t._v("5.无状态")]),t._v("：HTTP 协议是无状态协议。无状态是指协议对于事务处理没有记忆能力。缺少状态意味着如果后续处理需要前面的信息，则它必须重传，这样可能导致每次连接传送的数据量增大。另一方面，在服务器不需要先前信息时它的应答就较快。")]),t._v(" "),e("h3",{attrs:{id:"http-协议之请求"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#http-协议之请求"}},[t._v("#")]),t._v(" HTTP 协议之请求")]),t._v(" "),e("p",[t._v("http 请求由三部分组成，分别是："),e("strong",[t._v("请求行、消息报头、请求正文")])]),t._v(" "),e("p",[t._v("请求方法有多种， 各个方法的解释如下：")]),t._v(" "),e("p",[e("strong",[t._v("GET")]),t._v("请求获取 Request-URI 所标识的资源")]),t._v(" "),e("p",[e("strong",[t._v("POST")]),t._v("在 Request-URI 所标识的资源后附加新的数据")]),t._v(" "),e("p",[e("strong",[t._v("HEAD")]),t._v("请求获取由 Request-URI 所标识的资源的响应消息报头")]),t._v(" "),e("p",[e("strong",[t._v("PUT")]),t._v("请求服务器存储一个资源， 并用 Request-URI 作为其标识")]),t._v(" "),e("p",[e("strong",[t._v("DELETE")]),t._v("请求服务器删除 Request-URI 所标识的资源")]),t._v(" "),e("p",[e("strong",[t._v("TRACE")]),t._v("请求服务器回送收到的请求信息，主要用于测试或诊断")]),t._v(" "),e("p",[e("strong",[t._v("CONNECT")]),t._v("保留将来使用")]),t._v(" "),e("p",[e("strong",[t._v("OPTIONS")]),t._v("请求查询服务器的性能，或者查询与资源相关的选项和需求")]),t._v(" "),e("p",[t._v("应用举例：")]),t._v(" "),e("p",[e("strong",[t._v("GET 方法")]),t._v("在浏览器的地址栏中输入网址的方式访问网页时， 浏览器采用 GET 方法向服务器获取资源，eg:GET /form.html HTTP/1.1 (CRLF)")]),t._v(" "),e("p",[e("strong",[t._v("POST 方法")]),t._v("要求被请求服务器接受附在请求后面的数据， 常用于提交表单。")]),t._v(" "),e("h3",{attrs:{id:"http-协议之响应"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#http-协议之响应"}},[t._v("#")]),t._v(" HTTP 协议之响应")]),t._v(" "),e("p",[t._v("在接收和解释请求消息后，服务器返回一个 HTTP 响应消息。")]),t._v(" "),e("p",[t._v("HTTP 响应也是由三个部分组成，分别是："),e("strong",[t._v("状态行、消息报头、响应正文")])]),t._v(" "),e("p",[t._v("状态代码有三位数字组成，第一个数字定义了响应的类别，且有五种可能取值：")]),t._v(" "),e("p",[t._v("1xx：指示信息--表示请求已接收，继续处理")]),t._v(" "),e("p",[t._v("2xx：成功--表示请求已被成功接收、理解、接受")]),t._v(" "),e("p",[t._v("3xx：重定向--要完成请求必须进行更进一步的操作")]),t._v(" "),e("p",[t._v("4xx：客户端错误--请求有语法错误或请求无法实现")]),t._v(" "),e("p",[t._v("5xx：服务器端错误--服务器未能实现合法的请求")]),t._v(" "),e("p",[t._v("常见状态代码、状态描述、说明：")]),t._v(" "),e("p",[t._v("200 OK //客户端请求成功")]),t._v(" "),e("p",[t._v("400 Bad Request //客户端请求有语法错误， 不能被服务器所理解")]),t._v(" "),e("p",[t._v("401 Unauthorized //请求未经授权，这个状态代码必须和 WWW-Authenticate 报头域一起使用")]),t._v(" "),e("p",[t._v("403 Forbidden //服务器收到请求，但是拒绝提供服务")]),t._v(" "),e("p",[t._v("404 Not Found //请求资源不存在，eg： 输入了错误的 URL")]),t._v(" "),e("p",[t._v("500 Internal Server Error //服务器发生不可预期的错误")]),t._v(" "),e("p",[t._v("503 Server Unavailable //服务器当前不能处理客户端的请求，一段时间后可能恢复正常")]),t._v(" "),e("h2",{attrs:{id:"四、fiddler-抓包解析"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#四、fiddler-抓包解析"}},[t._v("#")]),t._v(" 四、Fiddler 抓包解析")]),t._v(" "),e("h3",{attrs:{id:"_1-左侧面板"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-左侧面板"}},[t._v("#")]),t._v(" 1.左侧面板")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://images2017.cnblogs.com/blog/1242227/201709/1242227-20170923213118337-1719287350.png",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://images2017.cnblogs.com/blog/1242227/201709/1242227-20170923213118337-1719287350.png",alt:"img"}}),e("OutboundLink")],1)]),t._v(" "),e("p",[e("strong",[t._v("抓包工具面板功能")])]),t._v(" "),e("p",[e("strong",[t._v("#")]),t._v(" :HTTP Request 的顺序，从 1 开始，按照页面加载请求的顺序递增。")]),t._v(" "),e("p",[e("strong",[t._v("Result")]),t._v(" : HTTP 响应的状态 Protocol：请求使用的协议（如 HTTP/HTTPS）")]),t._v(" "),e("p",[e("strong",[t._v("HOST")]),t._v("：请求地址的域名 URL：请求的服务器路径和文件名，也包含 GET 参数")]),t._v(" "),e("p",[e("strong",[t._v("BODY")]),t._v("：请求的大小，以 byte 为单位")]),t._v(" "),e("p",[e("strong",[t._v("Content-Type")]),t._v("：请求响应的类型")]),t._v(" "),e("p",[e("strong",[t._v("Caching")]),t._v("：请求的缓存过期时间或缓存控制 header 的值")]),t._v(" "),e("p",[e("strong",[t._v("Process")]),t._v("：发出此请求的 Windows 进程及进程 ID")]),t._v(" "),e("p",[e("strong",[t._v("Comments")]),t._v(" ：用户通过脚本或者菜单给此 session 增加的备注")]),t._v(" "),e("p",[e("strong",[t._v("custom")]),t._v("：用户可以通过脚本设置的自定义值")]),t._v(" "),e("h3",{attrs:{id:"_2-右侧面板"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-右侧面板"}},[t._v("#")]),t._v(" 2.右侧面板")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://images2017.cnblogs.com/blog/1242227/201709/1242227-20170923213552556-1540264809.png",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://images2017.cnblogs.com/blog/1242227/201709/1242227-20170923213552556-1540264809.png",alt:"img"}}),e("OutboundLink")],1)]),t._v(" "),e("p",[e("strong",[t._v("Statistics 统计页签")])]),t._v(" "),e("p",[t._v("通过该页签， 用户可以通过选择多个会话来得来这几个会话的总的信息统计，比如多个请求和传输的字节数。选择第一个请求和最后一个请求， 可获得整个页面加载所消耗的总体时间。从条形图表中还可以分别出哪些请求耗时最多， 从而对页面的访问进行访问速度优化")]),t._v(" "),e("p",[e("strong",[t._v("inspectors 检查页签")])]),t._v(" "),e("p",[t._v("它提供 headers、textview、hexview,Raw 等多种方式查看单条 http 请求的请求报文的信息，它分为上下两部分：上部分为 HTTP Request（请求）展示，下部分为 HTTPResponse（响应）展示")]),t._v(" "),e("p",[e("strong",[t._v("AutoResponse 自动响应页签")])]),t._v(" "),e("p",[t._v("Fiddler 最实用的功能， 它可以抓取在线页面保存到本地进行调试， 大大减少了在线调试的困难， 可以让我们修改服务器端返回的数据， 例如让返回都是 HTTP404 或者读取本地文件作为返回内容。")]),t._v(" "),e("p",[t._v("可设置打开某网页显示自己想要的内容，比如抓取百度链接，点击 add rule，设置如下所示：")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://images2017.cnblogs.com/blog/1242227/201710/1242227-20171001121439059-694664172.png",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://images2017.cnblogs.com/blog/1242227/201710/1242227-20171001121439059-694664172.png",alt:"img"}}),e("OutboundLink")],1)]),t._v(" "),e("p",[e("a",{attrs:{href:"https://images2017.cnblogs.com/blog/1242227/201710/1242227-20171001122207106-1320400732.png",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://images2017.cnblogs.com/blog/1242227/201710/1242227-20171001122207106-1320400732.png",alt:"img"}}),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("到百度页面刷新即可显示该图片")]),t._v(" "),e("p",[e("strong",[t._v("composer 构建页签")])]),t._v(" "),e("p",[t._v("支持手动构建和发送 HTTP， HTTPS 和 FTP 请求， 我们还可以从 web session 列表中拖曳 session， 把它放到 composer 选项卡中， 当我们点击 Execute 按钮， 把请求发送到服务器端。操作如下图所示：")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://images2017.cnblogs.com/blog/1242227/201710/1242227-20171001122408372-1438722917.png",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://images2017.cnblogs.com/blog/1242227/201710/1242227-20171001122408372-1438722917.png",alt:"img"}}),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("这样设置发送的请求，就不是浏览器发出的了，而是 fiddler 发出的，查看 inspectors 里面的信息便可看出")]),t._v(" "),e("p",[e("strong",[t._v("log 日志页签")]),t._v("： 打印日志")]),t._v(" "),e("p",[e("strong",[t._v("Filters 过滤页签")])]),t._v(" "),e("p",[t._v("过滤器可以对左侧的数据流列表进行过滤， 我们可以标记、 修改或隐藏某些特征的数据流。")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://images2017.cnblogs.com/blog/1242227/201710/1242227-20171001122950403-1965507111.png",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://images2017.cnblogs.com/blog/1242227/201710/1242227-20171001122950403-1965507111.png",alt:"img"}}),e("OutboundLink")],1)]),t._v(" "),e("p",[e("strong",[t._v("Timeline 时间轴页签")])]),t._v(" "),e("p",[t._v("时间轴，也称为 Fiddler 的瀑布图，展示网络请求时间的功能。 每个网络请求都会经历域名解析、建立连接、发送请求、接受数据等阶段。把多个请求以时间作为 X 轴， 用图表的形式展现出来， 就形成了瀑布图。 在左侧会话窗口点击一个或多个（同时按下 Ctrl 键），Timeline 便会显示指定内容从服务端传输到客户端的时间")]),t._v(" "),e("h2",{attrs:{id:"五、fiddler-命令行工具"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#五、fiddler-命令行工具"}},[t._v("#")]),t._v(" 五、Fiddler 命令行工具")]),t._v(" "),e("p",[t._v("Fiddler 的左下角有一个命令行工具叫做 QuickExec,允许你直接输入命令。")]),t._v(" "),e("p",[t._v("常见得命令有：")]),t._v(" "),e("p",[e("strong",[t._v("help")]),t._v(" ： 打开官方的使用页面介绍， 所有的命令都会列出来")]),t._v(" "),e("p",[e("strong",[t._v("cls")]),t._v(" ： 清屏 (Ctrl+x 也可以清屏)")]),t._v(" "),e("p",[e("strong",[t._v("select")]),t._v(" ： 选择会话的命令， 选择所有相应类型 select image、select css、select html")]),t._v(" "),e("p",[e("strong",[t._v("?sometext")]),t._v(" ： 查找字符串并高亮显示查找到的会话列表的条目，？qq.com")]),t._v(" "),e("p",[e("strong",[t._v(">size")]),t._v(" : 选择请求响应大小小于 size 字节的会话")]),t._v(" "),e("p",[e("strong",[t._v("=status/=method/@host")]),t._v(":查找状态、方法、主机相对应的 session 会话，=504，=get，@www.qq.com")]),t._v(" "),e("p",[e("strong",[t._v("quit")]),t._v("：退出 fiddler")]),t._v(" "),e("p",[t._v("Bpafter，Bps, bpv, bpm, bpu 这几个命令主要用于批量设置断点")]),t._v(" "),e("p",[t._v("Bpafter xxx: 中断 URL 包含指定字符的全部 session 响应")]),t._v(" "),e("p",[t._v("Bps xxx:中断 HTTP 响应状态为指定字符的全部 session 响应。")]),t._v(" "),e("p",[t._v("Bpv xxx:中断指定请求方式的全部 session 响应")]),t._v(" "),e("p",[t._v("Bpm xxx:中断指定请求方式的全部 session 响应，等同于 bpv xxx")]),t._v(" "),e("p",[t._v("Bpu xxx:与 bpafter 类似。")]),t._v(" "),e("h2",{attrs:{id:"六、fiddler-应用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#六、fiddler-应用"}},[t._v("#")]),t._v(" "),e("strong",[t._v("六、Fiddler 应用")])]),t._v(" "),e("h3",{attrs:{id:"_1-手机抓包"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-手机抓包"}},[t._v("#")]),t._v(" 1.手机抓包")]),t._v(" "),e("p",[t._v("① 启动 Fiddler， 打开菜单栏中的 Tools > Fiddler Options， 打开“FiddlerOptions” 对话框")]),t._v(" "),e("p",[t._v("② 在“Fiddler Options”对话框切换到“Connections” 选项卡， 然后勾选“Allowromote computers to connect” 后面的复选框， 然后点击“OK” 按钮")]),t._v(" "),e("p",[t._v("③ 在本机命令行输入： ipconfig， 找到本机的 ip 地址。")]),t._v(" "),e("p",[t._v("④ 打开 android 设备的“设置” ->“WLAN”，找到你要连接的网络，在上面长按，然后选择“修改网络”，弹出网络设置对话框，然后勾选“显示高级选项”（不同的手机，设置方法有所不同）")]),t._v(" "),e("p",[t._v("⑤ 在“代理” 后面的输入框选择“手动”，在“代理服务器主机名”后面的输入框输入电脑的 ip 地址，在“代理服务器端口”后面的输入框输入 8888， 然后点击“保存” 按钮")]),t._v(" "),e("p",[t._v("⑥ 然后启动 android 设备中的浏览器，访问百度的首页，在 fiddler 中可以看到完成的请求和响应数据")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://images2017.cnblogs.com/blog/1242227/201710/1242227-20171001124822731-571080558.png",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://images2017.cnblogs.com/blog/1242227/201710/1242227-20171001124822731-571080558.png",alt:"img"}}),e("OutboundLink")],1)]),t._v(" "),e("p",[e("strong",[t._v("备注")]),t._v("： 如果是 Android 模拟器中 ip 要填写 10.0.2.2，genymotion 模拟器中 ip 要填写:10.0.3.2，手机实机中 ip 填电脑的 ip，端口就是 burp 或者 fiddler 监听的端口 ，要处于同一网络下")]),t._v(" "),e("h3",{attrs:{id:"_2-过滤功能"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-过滤功能"}},[t._v("#")]),t._v(" 2.过滤功能")]),t._v(" "),e("p",[t._v("① 选择 Filters 页签，勾选 use Filters 勾选 Request Headers 中的 Hide if url contains 过滤项")]),t._v(" "),e("p",[t._v("② 在里面输入：REGEX:(?insx)/[^?/]"),e("em",[t._v(".(css|ico|jpg|png|gif|bmp|wav)(?.")]),t._v(")?$")]),t._v(" "),e("p",[t._v("REGEX: 表示启用正则表达式(?insx) 设置正则解释的规则，忽略大小写等。")]),t._v(" "),e("p",[t._v("此表达式表示过滤掉 url 中包括 css、ico、jpg 等后缀的请求")]),t._v(" "),e("p",[t._v("③ 勾选 Request Headers 中的 show only if URL contains，在里面输入")]),t._v(" "),e("p",[t._v("REGEX:(?insx)."),e("em",[t._v(".?baidu.com/home.")]),t._v(" 只显示： baidu.com/Home")]),t._v(" "),e("p",[t._v("Fiddler 过滤指定域名")]),t._v(" "),e("p",[t._v("第二个选项是只监控以下网址，如只监控百度，在下面的输入框里填上www.baidu.com")]),t._v(" "),e("p",[t._v("“No Host Filter”不设置 hosts 过滤")]),t._v(" "),e("p",[t._v("“Hide The Following Hosts”隐藏过滤到的域名")]),t._v(" "),e("p",[t._v("“Show Only The Following Hosts”只显示过滤到的域名")]),t._v(" "),e("p",[t._v("“Flag The Following Hosts”标记过滤到的域名")])])}),[],!1,null,null,null);e.default=_.exports}}]);