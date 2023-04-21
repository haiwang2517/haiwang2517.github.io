(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{502:function(s,t,a){"use strict";a.r(t);var n=a(4),r=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("div",{staticClass:"custom-block tip"},[a("p",[s._v("一个多年的程序员表示墙内查资料特别麻烦，还影响效率，那自己搭建一个科学上网的工具。")])]),s._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#准备"}},[s._v("准备")])]),a("li",[a("a",{attrs:{href:"#配置"}},[s._v("配置")])])])]),a("p"),s._v(" "),a("h3",{attrs:{id:"准备"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#准备"}},[s._v("#")]),s._v(" "),a("strong",[s._v("准备")])]),s._v(" "),a("h4",{attrs:{id:"_1-域名"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-域名"}},[s._v("#")]),s._v(" 1. 域名")]),s._v(" "),a("p",[s._v("         可以在阿里、腾讯或者其他可以购买域名的厂商挑选一个自己比较喜欢的域名。这里顺便解释下"),a("strong",[s._v("域名和备案没有关系")]),s._v("，我选择的就是.cn的域名。")]),s._v(" "),a("h4",{attrs:{id:"_2-服务器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-服务器"}},[s._v("#")]),s._v(" 2. 服务器")]),s._v(" "),a("p",[s._v("         因为我们需要科学上网，所以要选择一个没有限制地区的服务器即可；服务配置什么的根据自己的需求进行选择，我选择的是2核CPU、4G内存、50硬盘（因为不能再小啦）。 切记要选择"),a("strong",[s._v("没有限制的地区")]),s._v("。")]),s._v(" "),a("h3",{attrs:{id:"配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[s._v("#")]),s._v(" "),a("strong",[s._v("配置")])]),s._v(" "),a("h4",{attrs:{id:"_1-域名解析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-域名解析"}},[s._v("#")]),s._v(" 1. 域名解析")]),s._v(" "),a("p",[s._v("         打开"),a("a",{attrs:{href:"https://console.cloud.tencent.com/domain",title:"域名服务",target:"_blank",rel:"noopener noreferrer"}},[s._v("域名服务"),a("OutboundLink")],1),s._v("，做域名解析，解析上面准备的公网服务器IP地址。\n这里演示的是腾讯云：选择自己的"),a("strong",[s._v("域名地址")]),s._v("，点击"),a("strong",[s._v("解析")]),s._v("，选择"),a("strong",[s._v("快速添加网站/邮箱解析")]),s._v("，选择"),a("strong",[s._v("网站解析")]),s._v("，输入"),a("strong",[s._v("上面准备的公网服务器IP地址")]),s._v(",等待半个小时即可（根据域名厂商的不同时间可能也不一样）。")]),s._v(" "),a("p",[a("img",{attrs:{src:"/images/2020/003TrojanVpn/1.png",alt:"demo"}})]),s._v(" "),a("h4",{attrs:{id:"_2-安装软件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-安装软件"}},[s._v("#")]),s._v(" 2. 安装软件")]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("ul",[a("li",[s._v("abc.cn 修改为 自己的域名地址")]),s._v(" "),a("li",[s._v("执行 Trojan.sh 文件后选择1，再输入自己的域名地址")]),s._v(" "),a("li",[s._v("执行完 Trojan.sh 会生成 "),a("strong",[s._v("客户端操作步骤")]),s._v(" 记不住的最好保存起来")])])]),s._v(" "),a("blockquote",[a("p",[s._v("======================================================================")]),s._v(" "),a("p",[s._v("Trojan已安装完成，请使用以下链接下载trojan客户端，此客户端已配置好所有参数"),a("br"),s._v("\n1、复制下面的链接，在浏览器打开，下载客户端 （里面有配置文件 config.json）"),a("br"),s._v("\nhttp://abc.cn/3b76008585863612/trojan-cli.zip"),a("br"),s._v("\n请记录下面规则网址"),a("br"),s._v("\nhttp://abc.cn/trojan.txt"),a("br"),s._v("\n2、将下载的压缩包解压，打开文件夹，打开start.bat即打开并运行Trojan客户端"),a("br"),s._v("\n3、打开stop.bat即关闭Trojan客户端"),a("br"),s._v("\n4、Trojan客户端需要搭配浏览器插件使用，例如switchyomega等"),a("br"),s._v("\n访问  https://www.v2rayssr.com/trojan-1.html ‎ 下载 浏览器插件 及教程"),a("br"),s._v("\n======================================================================")])]),s._v(" "),a("p",[a("strong",[s._v("ssh登录到服务器，执行以下命令：")])]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" pubilc "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ip")]),s._v(" -"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" abc.cn\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("su")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" -O https://raw.githubusercontent.com/V2RaySSR/Trojan/master/Trojan.sh\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" a+x Trojan.sh\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("su")]),s._v("\n./Trojan.sh\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#select 1")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# abc.cn")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("blockquote",[a("p",[s._v("在浏览器中打开 abc.cn 可以正常显示界面即可，如果没有显示有可能是域名解析的问题。")])]),s._v(" "),a("h4",{attrs:{id:"_3-本地配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-本地配置"}},[s._v("#")]),s._v(" 3. 本地配置")]),s._v(" "),a("h5",{attrs:{id:"下载客户端配置文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#下载客户端配置文件"}},[s._v("#")]),s._v(" "),a("strong",[s._v("下载客户端配置文件")])]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("下载上面步骤生成的客户端步骤中的文件,内容如下：\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("、复制下面的链接，在浏览器打开，下载客户端 （里面有配置文件 config.json）\nhttp://abc.cn/xxxxxxxxxxxxx/trojan-cli.zip\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h5",{attrs:{id:"下载链接客户端"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#下载链接客户端"}},[s._v("#")]),s._v(" "),a("strong",[s._v("下载链接客户端")])]),s._v(" "),a("p",[s._v("提供一个"),a("a",{attrs:{href:"/images/2020/003TrojanVpn/Trojan-Qt5-Linux.AppImage",title:"Linux客户端下载地址"}},[s._v("Linux客户端下载地址")]),s._v("，其他客户端链接也是可以的。")]),s._v(" "),a("h5",{attrs:{id:"本地配置链接"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#本地配置链接"}},[s._v("#")]),s._v(" "),a("strong",[s._v("本地配置链接")])]),s._v(" "),a("p",[s._v("打开客户端，导入zip包中的config.json文件，链接即可。"),a("br"),s._v("\n对了Trojan客户端需要搭配浏览器插件使用，例如switchyomega等，这个配置具体的baidu一下，很简单。")]),s._v(" "),a("p",[a("img",{attrs:{src:"/images/2020/003TrojanVpn/2.png",alt:"config"}})])])}),[],!1,null,null,null);t.default=r.exports}}]);