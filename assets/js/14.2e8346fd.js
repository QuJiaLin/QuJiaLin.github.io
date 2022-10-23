(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{336:function(s,t,a){"use strict";a.r(t);var n=a(3),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"一、程序、进程和线程、单核-cpu-和多核-cpu、并行与并发"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一、程序、进程和线程、单核-cpu-和多核-cpu、并行与并发"}},[s._v("#")]),s._v(" 一、程序、进程和线程、单核 CPU 和多核 CPU、并行与并发")]),s._v(" "),t("ol",[t("li",[s._v("什么是程序？")])]),s._v(" "),t("p",[s._v("​ 程序是为完成特定任务、用某种语言编写的一组指令的集合。即指一段静态的代码。")]),s._v(" "),t("ol",{attrs:{start:"2"}},[t("li",[s._v("什么是进程？")])]),s._v(" "),t("p",[s._v("​ 进程是指程序的一次执行过程，或是正在运行的一个程序。当然，"),t("strong",[s._v("进程也是资源分配的单位")]),s._v("，系统在运行时会为每个进程分配不同的内存区域。")]),s._v(" "),t("ol",{attrs:{start:"3"}},[t("li",[s._v("什么是线程？")])]),s._v(" "),t("p",[s._v("​ 线程是进程的进一步细化，是一个程序内部的一条执行路径。"),t("strong",[s._v("线程是调度和执行的单位")]),s._v("，每个线程拥独立的运行栈和程序计数器，线程切换的开销比进程切换的开销小得多。")]),s._v(" "),t("p",[s._v("​ 在 Java 的内存结构中，每个线程，拥有自己独立的栈、程序计数器；而多个线程，共享同一个进程中的方法区、堆。")]),s._v(" "),t("ol",{attrs:{start:"4"}},[t("li",[s._v("什么是单核 CPU？")])]),s._v(" "),t("p",[s._v("​ 单核 CPU 其实是一种假的多线程，因为在一个时间单元内，也只能执行一个线程的任务。例如：虽然有多车道，但是收费站只有一个工作人员在收费，只有收了费才能通过，那么 CPU 就好比收费人员。如果某个人不想交钱，那么收费人员可以把他“挂起”（晾着他，等他想通了，准备好了钱，再去收费。）但是因为 CPU 时间单元特别短，因此感觉不出来。")]),s._v(" "),t("ol",{attrs:{start:"5"}},[t("li",[s._v("什么是多核 CPU？")])]),s._v(" "),t("p",[s._v("​ 多核 CPU 才能更好的发挥多线程的效率。（现在的服务器都是多核的）。例如：一个 Java 应用程序 java.exe，其实至少三个线程：main()主线程，gc()垃圾回收线程，异常处理线程。当然，如果发生异常，会影响主线程。")]),s._v(" "),t("ol",{attrs:{start:"6"}},[t("li",[s._v("并行与并发的理解")])]),s._v(" "),t("ul",[t("li",[s._v("并行：多个 CPU 同时执行多个任务。比如：多个人同时做不同的事。")]),s._v(" "),t("li",[s._v("并发：一个 CPU(采用时间片)同时执行多个任务。比如：秒杀、多个人做同一件事。")])]),s._v(" "),t("h1",{attrs:{id:"二、-创建多线程的四种方式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二、-创建多线程的四种方式"}},[s._v("#")]),s._v(" 二、 创建多线程的四种方式")]),s._v(" "),t("h2",{attrs:{id:"方式一-继承-thread-类的方式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#方式一-继承-thread-类的方式"}},[s._v("#")]),s._v(" 方式一：继承 Thread 类的方式：")]),s._v(" "),t("ol",[t("li",[s._v("创建一个继承于 Thread 类的子类")]),s._v(" "),t("li",[s._v("重写 Thread 类的 run() --\x3e 将此线程执行的操作声明在 run()中")]),s._v(" "),t("li",[s._v("创建 Thread 类的子类的对象")]),s._v(" "),t("li",[s._v("通过此对象调用 start()：① 启动当前线程 ② 调用当前线程的 run()")])]),s._v(" "),t("p",[s._v("在此，我们需要注意的是：")]),s._v(" "),t("ol",[t("li",[t("p",[s._v("我们启动一个线程，必须调用 start()，不能调用 run()的方式启动线程。")])]),s._v(" "),t("li",[t("p",[s._v("如果再启动一个线程，必须重新创建一个 Thread 子类的对象，调用此对象的 start().")])])]),s._v(" "),t("h2",{attrs:{id:"方式二-实现-runnable-接口的方式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#方式二-实现-runnable-接口的方式"}},[s._v("#")]),s._v(" 方式二：实现 Runnable 接口的方式：")]),s._v(" "),t("ol",[t("li",[s._v("创建一个实现了 Runnable 接口的类")]),s._v(" "),t("li",[s._v("实现类去实现 Runnable 中的抽象方法：run()")]),s._v(" "),t("li",[s._v("创建实现类的对象")]),s._v(" "),t("li",[s._v("将此对象作为参数传递到 Thread 类的构造器中，创建 Thread 类的对象")]),s._v(" "),t("li",[s._v("通过 Thread 类的对象调用 start()")])]),s._v(" "),t("h2",{attrs:{id:"方式一和方式二的对比"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#方式一和方式二的对比"}},[s._v("#")]),s._v(" 方式一和方式二的对比：")]),s._v(" "),t("p",[s._v("首先声明一点：在开发中，我们优先选择实现 Runnable 接口的方式。")]),s._v(" "),t("p",[s._v("主要有两点原因：")]),s._v(" "),t("ol",[t("li",[t("p",[s._v("使用实现 Runnable 接口的方式没有类的单继承性的局限性")])]),s._v(" "),t("li",[t("p",[s._v("实现的方式更适合来处理多个线程共享数据的情况。")])])]),s._v(" "),t("p",[s._v("两种实现方式的联系： Thread 类本质也是实现了 Runnable 接口")]),s._v(" "),t("p",[s._v("相同点：两种方式都需要重写 run(),将线程要执行的逻辑声明在 run()中。")]),s._v(" "),t("h2",{attrs:{id:"方式三-实现-callable-接口。"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#方式三-实现-callable-接口。"}},[s._v("#")]),s._v(" 方式三：实现 Callable 接口。")]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//1.创建一个实现Callable的实现类")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("NumThread")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("implements")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Callable")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//2.实现call方法，将此线程需要执行的操作声明在call()中")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@Override")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Object")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("call")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("throws")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Exception")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" sum "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" i "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" i "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" i"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("++")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("i "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("System")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("out"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("println")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("i"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n                sum "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+=")]),s._v(" i"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" sum"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ThreadNew")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("main")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" args"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//3.创建Callable接口实现类的对象")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("NumThread")]),s._v(" numThread "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("NumThread")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//4.将此Callable接口实现类的对象作为传递到FutureTask构造器中，创建FutureTask的对象")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("FutureTask")]),s._v(" futureTask "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("FutureTask")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("numThread"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//5.将FutureTask的对象作为参数传递到Thread类的构造器中，创建Thread对象，并调用start()")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Thread")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("futureTask"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("start")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("try")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//6.获取Callable中call方法的返回值")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//get()返回值即为FutureTask构造器参数Callable实现类重写的call()的返回值。")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Object")]),s._v(" sum "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" futureTask"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("get")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("System")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("out"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("println")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"总和为："')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" sum"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("catch")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("InterruptedException")]),s._v(" e"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            e"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("printStackTrace")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("catch")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ExecutionException")]),s._v(" e"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            e"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("printStackTrace")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br"),t("span",{staticClass:"line-number"},[s._v("36")]),t("br"),t("span",{staticClass:"line-number"},[s._v("37")]),t("br"),t("span",{staticClass:"line-number"},[s._v("38")]),t("br"),t("span",{staticClass:"line-number"},[s._v("39")]),t("br")])]),t("p",[s._v("如何理解实现 Callable 接口的方式创建多线程比实现 Runnable 接口创建多线程方式强大？")]),s._v(" "),t("ol",[t("li",[s._v("call()可以返回值的。")]),s._v(" "),t("li",[s._v("call()可以抛出异常，被外面的操作捕获，获取异常的信息")]),s._v(" "),t("li",[s._v("Callable 是支持泛型的")])]),s._v(" "),t("h2",{attrs:{id:"方式四-使用线程池"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#方式四-使用线程池"}},[s._v("#")]),s._v(" 方式四：使用线程池")]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("NumberThread")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("implements")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Runnable")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@Override")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("run")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" i "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("i "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("i"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("++")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("i "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("System")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("out"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("println")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Thread")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("currentThread")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("getName")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('": "')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" i"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("NumberThread1")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("implements")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Runnable")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@Override")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("run")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" i "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("i "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("i"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("++")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("i "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("System")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("out"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("println")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Thread")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("currentThread")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("getName")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('": "')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" i"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ThreadPool")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("main")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" args"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//1. 提供指定线程数量的线程池")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ExecutorService")]),s._v(" service "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Executors")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("newFixedThreadPool")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ThreadPoolExecutor")]),s._v(" service1 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ThreadPoolExecutor")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" service"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//设置线程池的属性")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//        System.out.println(service.getClass());")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//        service1.setCorePoolSize(15);")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//        service1.setKeepAliveTime();")]),s._v("\n\n\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//2.执行指定的线程的操作。需要提供实现Runnable接口或Callable接口实现类的对象")]),s._v("\n        service"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("execute")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("NumberThread")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//适合适用于Runnable")]),s._v("\n        service"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("execute")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("NumberThread1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//适合适用于Runnable")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//        service.submit(Callable callable);//适合使用于Callable")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//3.关闭连接池")]),s._v("\n        service"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("shutdown")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br"),t("span",{staticClass:"line-number"},[s._v("36")]),t("br"),t("span",{staticClass:"line-number"},[s._v("37")]),t("br"),t("span",{staticClass:"line-number"},[s._v("38")]),t("br"),t("span",{staticClass:"line-number"},[s._v("39")]),t("br"),t("span",{staticClass:"line-number"},[s._v("40")]),t("br"),t("span",{staticClass:"line-number"},[s._v("41")]),t("br"),t("span",{staticClass:"line-number"},[s._v("42")]),t("br"),t("span",{staticClass:"line-number"},[s._v("43")]),t("br"),t("span",{staticClass:"line-number"},[s._v("44")]),t("br"),t("span",{staticClass:"line-number"},[s._v("45")]),t("br"),t("span",{staticClass:"line-number"},[s._v("46")]),t("br")])]),t("p",[s._v("使用线程池的优点：")]),s._v(" "),t("ol",[t("li",[s._v("提高响应速度（减少了创建新线程的时间）")]),s._v(" "),t("li",[s._v("降低资源消耗（重复利用线程池中线程，不需要每次都创建）")]),s._v(" "),t("li",[s._v("便于线程管理\ncorePoolSize：核心池的大小\nmaximumPoolSize：最大线程数\nkeepAliveTime：线程没任务时最多保持多长时间后会终止")])]),s._v(" "),t("h1",{attrs:{id:"三、thread-类"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#三、thread-类"}},[s._v("#")]),s._v(" 三、Thread 类")]),s._v(" "),t("h2",{attrs:{id:"thread-类中的常用的方法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#thread-类中的常用的方法"}},[s._v("#")]),s._v(" Thread 类中的常用的方法:")]),s._v(" "),t("ul",[t("li",[s._v("start():启动当前线程；调用当前线程的 run()")]),s._v(" "),t("li",[s._v("run(): 通常需要重写 Thread 类中的此方法，将创建的线程要执行的操作声明在此方法中")]),s._v(" "),t("li",[s._v("currentThread():静态方法，返回执行当前代码的线程")]),s._v(" "),t("li",[s._v("getName():获取当前线程的名字")]),s._v(" "),t("li",[s._v("setName():设置当前线程的名字")]),s._v(" "),t("li",[s._v("yield():释放当前 cpu 的执行权")]),s._v(" "),t("li",[s._v("join():在线程 a 中调用线程 b 的 join(),此时线程 a 就进入阻塞状态，直到线程 b 完全执行完以后，线程 a 才结束阻塞状态。")]),s._v(" "),t("li",[s._v("stop():已过时。当执行此方法时，强制结束当前线程。")]),s._v(" "),t("li",[s._v("sleep(long millitime):让当前线程“睡眠”指定的 millitime 毫秒。在指定的 millitime 毫秒时间内，当前线程是阻塞状态。")]),s._v(" "),t("li",[s._v("isAlive():判断当前线程是否存活")])]),s._v(" "),t("h2",{attrs:{id:"线程的优先级"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#线程的优先级"}},[s._v("#")]),s._v(" 线程的优先级：")]),s._v(" "),t("ol",[t("li",[t("p",[s._v("MAX_PRIORITY：10")])]),s._v(" "),t("li",[t("p",[s._v("MIN _PRIORITY：1")])]),s._v(" "),t("li",[t("p",[s._v("NORM_PRIORITY：5 --\x3e默认优先级")])])]),s._v(" "),t("h2",{attrs:{id:"如何获取和设置当前线程的优先级"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#如何获取和设置当前线程的优先级"}},[s._v("#")]),s._v(" 如何获取和设置当前线程的优先级：")]),s._v(" "),t("ul",[t("li",[s._v("getPriority():获取线程的优先级")]),s._v(" "),t("li",[s._v("setPriority(int p):设置线程的优先级")]),s._v(" "),t("li",[s._v("说明：高优先级的线程要抢占低优先级线程 cpu 的执行权。但是只是从概率上讲，高优先级的线程高概率的情况下被执行。并不意味着只当高优先级的线程执行完以后，低优先级的线程才执行。")])]),s._v(" "),t("h2",{attrs:{id:"线程通信"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#线程通信"}},[s._v("#")]),s._v(" 线程通信")]),s._v(" "),t("p",[s._v("wait() 、 notify() 、 notifyAll() :此三个方法定义在 Object 类中的。")]),s._v(" "),t("h2",{attrs:{id:"线程的分类"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#线程的分类"}},[s._v("#")]),s._v(" 线程的分类")]),s._v(" "),t("p",[s._v("一种是守护线程，一种是用户线程。")]),s._v(" "),t("h1",{attrs:{id:"四、线程的生命周期"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#四、线程的生命周期"}},[s._v("#")]),s._v(" 四、线程的生命周期")]),s._v(" "),t("p",[s._v("说明：")]),s._v(" "),t("ol",[t("li",[s._v("生命周期关注两个概念：状态、相应的方法")]),s._v(" "),t("li",[s._v("关注：状态 a--\x3e状态 b:哪些方法执行了（回调方法）\n某个方法主动调用：状态 a--\x3e状态 b")]),s._v(" "),t("li",[s._v("阻塞：临时状态，不可以作为最终状态\n死亡：最终状态。")])]),s._v(" "),t("h1",{attrs:{id:"五、线程安全问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#五、线程安全问题"}},[s._v("#")]),s._v(" 五、线程安全问题")]),s._v(" "),t("h2",{attrs:{id:"问题背景"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#问题背景"}},[s._v("#")]),s._v(" 问题背景")]),s._v(" "),t("p",[s._v("例子：创建个窗口卖票，总票数为 100 张.使用实现 Runnable 接口的方式")]),s._v(" "),t("ol",[t("li",[s._v("问题：卖票过程中，出现了重票、错票 --\x3e出现了线程的安全问题")]),s._v(" "),t("li",[s._v("问题出现的原因：当某个线程操作车票的过程中，尚未操作完成时，其他线程参与进来，也操作车票。")]),s._v(" "),t("li",[s._v("如何解决：当一个线程 a 在操作 ticket 的时候，其他线程不能参与进来。直到线程 a 操作完 ticket 时，其他线程才可以开始操作 ticket。这种情况即使线程 a 出现了阻塞，也不能被改变。")])]),s._v(" "),t("h2",{attrs:{id:"java-解决方案-同步机制"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#java-解决方案-同步机制"}},[s._v("#")]),s._v(" Java 解决方案：同步机制")]),s._v(" "),t("p",[s._v("在 Java 中，我们通过同步机制，来解决线程的安全问题。")]),s._v(" "),t("h3",{attrs:{id:"方式一-同步代码块"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#方式一-同步代码块"}},[s._v("#")]),s._v(" 方式一：同步代码块")]),s._v(" "),t("p",[s._v("synchronized(同步监视器){\n//需要被同步的代码")]),s._v(" "),t("p",[s._v("}\n说明：")]),s._v(" "),t("ol",[t("li",[s._v("操作共享数据的代码，即为需要被同步的代码。 --\x3e不能包含代码多了，也不能包含代码少了。")]),s._v(" "),t("li",[s._v("共享数据：多个线程共同操作的变量。比如：ticket 就是共享数据。")]),s._v(" "),t("li",[s._v("同步监视器，俗称：锁。任何一个类的对象，都可以充当锁。\n要求：多个线程必须要共用"),t("strong",[s._v("同一把锁")]),s._v("。")])]),s._v(" "),t("p",[s._v("补充：")]),s._v(" "),t("ul",[t("li",[s._v("在实现 Runnable 接口创建多线程的方式中，我们可以考虑使用 this 充当同步监视器。")]),s._v(" "),t("li",[s._v("在继承 Thread 类创建多线程的方式中，慎用 this 充当同步监视器，考虑使用当前类充当同步监视器。")])]),s._v(" "),t("h3",{attrs:{id:"方式二-同步方法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#方式二-同步方法"}},[s._v("#")]),s._v(" 方式二：同步方法")]),s._v(" "),t("p",[s._v("​ 如果操作共享数据的代码完整的声明在一个方法中，我们不妨将此方法声明同步的。")]),s._v(" "),t("p",[s._v("关于同步方法的总结：")]),s._v(" "),t("ol",[t("li",[s._v("同步方法仍然涉及到同步监视器，只是不需要我们显式的声明。")]),s._v(" "),t("li",[s._v("非静态的同步方法，同步监视器是：this\n静态的同步方法，同步监视器是：当前类本身")])]),s._v(" "),t("h3",{attrs:{id:"方式三-lock-锁-jdk5-0-新增"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#方式三-lock-锁-jdk5-0-新增"}},[s._v("#")]),s._v(" 方式三：Lock 锁 --- JDK5.0 新增")]),s._v(" "),t("ol",[t("li",[s._v("面试题：synchronized 与 Lock 的异同？\n"),t("ul",[t("li",[s._v("相同：二者都可以解决线程安全问题")])])])]),s._v(" "),t("ul",[t("li",[s._v("不同：synchronized 机制在执行完相应的同步代码以后，自动的释放同步监视器；而 Lock 需要手动的启动同步 lock()，同时结束同步也需要手动的调用 unlock()")])]),s._v(" "),t("ol",{attrs:{start:"2"}},[t("li",[s._v("使用的优先顺序：\nLock ---\x3e 同步代码块（已经进入了方法体，分配了相应资源 ) ---\x3e 同步方法（在方法体之外)")]),s._v(" "),t("li",[s._v("利弊\n同步的方式，解决了线程的安全问题。---好处\n操作同步代码时，只能一个线程参与，其他线程等待。相当于是一个单线程的过程，效率低。")])]),s._v(" "),t("h1",{attrs:{id:"六、线程通信"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#六、线程通信"}},[s._v("#")]),s._v(" 六、线程通信")]),s._v(" "),t("h2",{attrs:{id:"线程通信涉及到的三个方法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#线程通信涉及到的三个方法"}},[s._v("#")]),s._v(" 线程通信涉及到的三个方法：")]),s._v(" "),t("p",[s._v("wait():一旦执行此方法，当前线程就进入阻塞状态，并释放同步监视器。\nnotify():一旦执行此方法，就会唤醒被 wait 的一个线程。如果有多个线程被 wait，就唤醒优先级高的那个。\nnotifyAll():一旦执行此方法，就会唤醒所有被 wait 的线程。")]),s._v(" "),t("p",[t("strong",[s._v("注意：")])]),s._v(" "),t("ol",[t("li",[s._v("wait()，notify()，notifyAll()三个方法必须使用在同步代码块或同步方法中。")]),s._v(" "),t("li",[s._v("wait()，notify()，notifyAll()三个方法的调用者必须是同步代码块或同步方法中的同步监视器。\n否则，会出现 IllegalMonitorStateException 异常")]),s._v(" "),t("li",[s._v("wait()，notify()，notifyAll()三个方法是定义在 java.lang.Object 类中。")])]),s._v(" "),t("h2",{attrs:{id:"sleep-和-wait-的异同"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sleep-和-wait-的异同"}},[s._v("#")]),s._v(" sleep() 和 wait()的异同？")]),s._v(" "),t("ol",[t("li",[t("p",[s._v("相同点：一旦执行方法，都可以使得当前的线程进入阻塞状态。")])]),s._v(" "),t("li",[t("p",[s._v("不同点：")]),s._v(" "),t("p",[s._v("1）两个方法声明的位置不同：Thread 类中声明 sleep() , Object 类中声明 wait()\n2）调用的要求不同：sleep()可以在任何需要的场景下调用。 wait()必须使用在同步代码块或同步方法中\n3）关于是否释放同步监视器：如果两个方法都使用在同步代码块或同步方法中，sleep()不会释放锁，wait()会释放锁。")])])])])}),[],!1,null,null,null);t.default=e.exports}}]);