(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{501:function(s,a,t){"use strict";t.r(a);var n=t(4),r=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[s._v("        今天遇到一个SQL耗时的问题,在解决的过程中发现别人写的不错的东西,进行整理学习学习.")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://img-blog.csdnimg.cn/img_convert/db163319e059f5779038400bd0945864.png",alt:"图片"}})]),s._v(" "),t("blockquote",[t("p",[s._v("参考: https://blog.csdn.net/qq_17231297/article/details/128510044?spm=1001.2014.3001.5502")])]),s._v(" "),t("h1",{attrs:{id:"避免全部查询"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#避免全部查询"}},[s._v("#")]),s._v(" 避免全部查询")]),s._v(" "),t("h2",{attrs:{id:"分页查询导致查询性能慢"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#分页查询导致查询性能慢"}},[s._v("#")]),s._v(" 分页查询导致查询性能慢")]),s._v(" "),t("p",[s._v("表的数据量很大的话,加了索引也会导致查询耗时,如下")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v("   operation\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("type")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'SQLStats'")]),s._v("\n       "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("AND")]),s._v(" name "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'SlowLog'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ORDER")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BY")]),s._v(" create_time\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("LIMIT")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10000")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("p",[t("em",[s._v("原因分析")]),s._v("：\n分页查询时数据库并不知道10000条数据在哪里,即使有索引也要从头开始计算一次。")]),s._v(" "),t("p",[t("em",[s._v("优化")]),s._v("：\n可以采用分批查询，可以将上页最大的值当做查询条件进行查询。")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v("   "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v("     operation\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v("    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("type")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'SQLStats'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("AND")]),s._v("      name "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'SlowLog'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("AND")]),s._v("      create_time "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'2017-03-16 14:00:00'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ORDER")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BY")]),s._v(" create_time "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("limit")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("h2",{attrs:{id:"混合排序"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#混合排序"}},[s._v("#")]),s._v(" 混合排序")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v("   my_order o\n       "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INNER")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("JOIN")]),s._v(" my_appraise a "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ON")]),s._v(" a"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("orderid "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" o"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("id\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ORDER")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BY")]),s._v(" a"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("is_reply "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ASC")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n          a"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("appraise_time "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DESC")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("LIMIT")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("p",[t("em",[s._v("原因分析")]),s._v("：\nmy_appraise会进行全表扫描")]),s._v(" "),t("p",[t("em",[s._v("优化")]),s._v("：\n先根据状态查询筛选对应数据然后再进行排序分页。")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v("   "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("\n         "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v("   my_order o\n                "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INNER")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("JOIN")]),s._v(" my_appraise a\n                        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ON")]),s._v(" a"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("orderid "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" o"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("id\n                           "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("AND")]),s._v(" is_reply "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n         "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ORDER")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BY")]),s._v(" appraise_time "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DESC")]),s._v("\n         "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("LIMIT")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("UNION")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ALL")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("\n         "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v("   my_order o\n                "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INNER")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("JOIN")]),s._v(" my_appraise a\n                        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ON")]),s._v(" a"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("orderid "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" o"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("id\n                           "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("AND")]),s._v(" is_reply "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n         "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ORDER")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BY")]),s._v(" appraise_time "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DESC")]),s._v("\n         "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("LIMIT")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" t\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ORDER")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BY")]),s._v("  is_reply "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ASC")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n          appraisetime "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DESC")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("LIMIT")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br")])]),t("h2",{attrs:{id:"exists语句"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#exists语句"}},[s._v("#")]),s._v(" EXISTS语句")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v("   my_neighbor n\n       "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("LEFT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("JOIN")]),s._v(" my_neighbor_apply sra\n              "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ON")]),s._v(" n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("id "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" sra"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("neighbor_id\n                 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("AND")]),s._v(" sra"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("user_id "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'xxx'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v("  n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("topic_status "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v("\n       "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("AND")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("EXISTS")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n                  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v("   message_info m\n                  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v("  n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("id "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" m"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("neighbor_id\n                         "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("AND")]),s._v(" m"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("inuser "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'xxx'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n       "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("AND")]),s._v(" n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("topic_type "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br")])]),t("p",[t("em",[s._v("原因分析")]),s._v("：\n嵌套子查询导致效率慢.")]),s._v(" "),t("p",[t("em",[s._v("优化")]),s._v("：\n去除Exists,改为join能够避免嵌套子查询。")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v("   my_neighbor n\n       "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INNER")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("JOIN")]),s._v(" message_info m\n               "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ON")]),s._v(" n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("id "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" m"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("neighbor_id\n                  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("AND")]),s._v(" m"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("inuser "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'xxx'")]),s._v("\n       "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("LEFT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("JOIN")]),s._v(" my_neighbor_apply sra\n              "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ON")]),s._v(" n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("id "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" sra"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("neighbor_id\n                 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("AND")]),s._v(" sra"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("user_id "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'xxx'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v("  n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("topic_status "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v("\n       "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("AND")]),s._v(" n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("topic_type "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br")])]),t("h2",{attrs:{id:"条件下推"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#条件下推"}},[s._v("#")]),s._v(" 条件下推")]),s._v(" "),t("p",[s._v("条件作用于聚合子查询之后,需要下推.")]),s._v(" "),t("ul",[t("li",[s._v("聚合子查询；")]),s._v(" "),t("li",[s._v("含有 LIMIT 的子查询；")]),s._v(" "),t("li",[s._v("UNION 或 UNION ALL 子查询；")]),s._v(" "),t("li",[s._v("输出字段中的子查询；")])]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v("   "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" target"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n               "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("Count")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v("   operation\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("GROUP")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BY")]),s._v(" target"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" t\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v("  target "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'rm-xxxx'")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("p",[s._v("优化为")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" target"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n       "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("Count")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v("   operation\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v("  target "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'rm-xxxx'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("GROUP")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BY")]),s._v(" target\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("h2",{attrs:{id:"提前缩小范围"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#提前缩小范围"}},[s._v("#")]),s._v(" 提前缩小范围")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v("   my_order o\n       "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("LEFT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("JOIN")]),s._v(" my_userinfo u\n              "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ON")]),s._v(" o"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("uid "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" u"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("uid\n       "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("LEFT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("JOIN")]),s._v(" my_productinfo p\n              "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ON")]),s._v(" o"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("pid "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" p"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("pid\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" o"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("display "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n       "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("AND")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" o"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("ostaus "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ORDER")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BY")]),s._v(" o"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("selltime "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DESC")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("LIMIT")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("15")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br")])]),t("p",[s._v("优化为: 先查询主结果,然后再进行join补全字段")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v("   my_order o\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" o"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("display "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("AND")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" o"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("ostaus "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ORDER")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BY")]),s._v(" o"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("selltime "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DESC")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("LIMIT")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("15")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" o\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("LEFT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("JOIN")]),s._v(" my_userinfo u\n            "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ON")]),s._v(" o"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("uid "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" u"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("uid\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("LEFT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("JOIN")]),s._v(" my_productinfo p\n            "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ON")]),s._v(" o"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("pid "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" p"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("pid\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ORDER")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BY")]),s._v("  o"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("selltime "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DESC")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("limit")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("15")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br")])]),t("h1",{attrs:{id:"索引失效的情况"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#索引失效的情况"}},[s._v("#")]),s._v(" 索引失效的情况")]),s._v(" "),t("h2",{attrs:{id:"隐式转换"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#隐式转换"}},[s._v("#")]),s._v(" 隐式转换")]),s._v(" "),t("p",[s._v("查询变量和字段定义类型不匹配")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" \n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v("  operation\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" build_no "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10002101")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("and")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("type")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("is")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("null")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[t("em",[s._v("原因分析")]),s._v("：\nbuild_no 是 varchar(20), Mysql会把build_no列转为数值后再进行比较,导致索引失效。")]),s._v(" "),t("p",[t("em",[s._v("优化")]),s._v("：\n注意查询类型要和数据库字段类型一直。")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" \n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v("  operation\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" build_no "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'10002101'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("and")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("type")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("is")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("null")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])])])}),[],!1,null,null,null);a.default=r.exports}}]);