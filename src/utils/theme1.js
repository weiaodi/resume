import corner from "../icons/weiaodi.png";
export const THEME_COLOR = "rgb(70,140,212)";

const LAYOUT = [
  {
    w: 4,
    h: 6,
    x: 20,
    y: 0,
    i: "item_0",
    moved: false,
    static: false,
    value:
      `![avatar](${corner})`,
    origin:
      `<section><p><img src="${corner}" alt="avatar"></p>\n</section>`
  },
  {
    "w": 20,
    "h": 3,
    "x": 0,
    "y": 0,
    "i": "item_2",
    "moved": false,
    "static": false,
    "value": "联系方式",
    "origin": "<section><h1><p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;魏奥迪</p>\n</h1></section>"
  },
  {
    "w": 20,
    "h": 1,
    "x": 0,
    "y": 5,
    "i": "item_13",
    "moved": false,
    "static": false,
    "value": "电子邮件",
    "origin": "<section><p>&nbsp;求职意向:&nbsp;前端开发工程师 | 期望城市：深圳/大连</p>\n</section>"
  },
  {
    "w": 24,
    "h": 1,
    "x": 0,
    "y": 6,
    "i": "item_20",
    "moved": false,
    "static": false,
    "value": "**`---`**[+C]",
    "origin": "<section class=\"vCenter\"><strong><code><ins><hr></ins></code></strong></section>"
  },
  {
    "w": 11,
    "h": 1,
    "x": 0,
    "y": 27,
    "i": "item_23",
    "moved": false,
    "static": false,
    "value": "**DRG 采集系统和数据分析系统**",
    "origin": "<section><p><strong>洛阳欧辰科技有限公司</strong><br></p>\n</section>"
  },
  {
    "w": 14,
    "h": 1,
    "x": 10,
    "y": 8,
    "i": "item_24",
    "moved": false,
    "static": false,
    "value": "**前端负责人**[-E]",
    "origin": "<section class=\"hEnd\"><p>前端开发工程师&nbsp; &nbsp;2024.04 - 2024.09<br></p>\n</section>"
  },
  {
    "w": 24,
    "h": 4,
    "x": 0,
    "y": 19,
    "i": "item_25",
    "moved": false,
    "static": false,
    "value": "- 相关技术：Spring / Vue.js / DevOps",
    "origin": "<section><ul>\n<li><strong>物料平台（面向产品使用，投放给用户）升级:&nbsp;</strong>用内部自研框架(ui-core)来实现低代码引擎的开发，基于自研引擎来实现：组件商店搭建、自定义组件开发、流水线发布、页面编辑以及打包构建静态页面产物(脱离引擎的runtime。基于该方案来实现物料平台自定义配置、定向用户群体投放、自定义组件开发、审批和流水线发布等功能。大幅度减少开发人员维护成本，提高产品同学的产品发布效率和使用体验。</li>\n</ul>\n</section>"
  },
  {
    "w": 24,
    "h": 2,
    "x": 0,
    "y": 14,
    "i": "item_26",
    "moved": false,
    "static": false,
    "value": "- 实验室横向课题，采集医疗数据，通过数据分析为国家医保投入做技术支持和追溯",
    "origin": "<section><ul>\n<li><strong>项目需求开发、迭代更新:&nbsp;</strong>跨境游、跨境汇款、fps转账、WePoints积分、生活缴费、优惠专区、慈善项目日常需求开发和迭代更新。</li>\n</ul>\n</section>"
  },
  {
    "w": 19,
    "h": 1,
    "x": 5,
    "y": 50,
    "i": "item_27",
    "moved": false,
    "static": false,
    "value": "- 大连理工大学软件学院学生会副主席，负责活动组织相关工作",
    "origin": "<section><ul>\n<li>大连理工大学软件学院学生会副主席，负责活动组织相关工作</li>\n</ul>\n</section>"
  },
  {
    "w": 13,
    "h": 1,
    "x": 5,
    "y": 37,
    "i": "item_28",
    "moved": false,
    "static": false,
    "value": "**IBM 中国研究院(CRL) - 认知医疗部**",
    "origin": "<section><p><strong>IBM 中国研究院(CRL) - 认知医疗部</strong></p>\n</section>"
  },
  {
    "w": 6,
    "h": 1,
    "x": 18,
    "y": 37,
    "i": "item_29",
    "moved": false,
    "static": false,
    "value": "**区块链医疗平台研发**[-E]",
    "origin": "<section class=\"hEnd\"><p><strong>区块链医疗平台研发</strong></p>\n</section>"
  },
  {
    "w": 24,
    "h": 1,
    "x": 0,
    "y": 34,
    "i": "item_30",
    "moved": false,
    "static": false,
    "value": "- 相关技术：Hyperleger Fabric / Node.js / Golang",
    "origin": "<section><ul>\n<li>迁移jquery操作的页面dom部分到vue框架中,提高项目可维护性</li>\n</ul>\n</section>"
  },
  {
    "w": 24,
    "h": 3,
    "x": 0,
    "y": 29,
    "i": "item_31",
    "moved": false,
    "static": false,
    "value": "- IBM 认知医疗数据共享平台，共享实验数据和机器学习模型，辅助诊断与学术研究",
    "origin": "<section>点立方文库是一个C2C文档分享网站,包含有文档、标书、党会报告等多种文档代写服务,其中项目包含点立方网站、微信公众号服务、微信小程序服务&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;前端采用jquery、vue2(cdn方式)混合开发、bootstrap做响应式框架基础;后端采用thinkphp6框架开发&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</section>"
  },
  {
    "w": 24,
    "h": 1,
    "x": 0,
    "y": 33,
    "i": "item_32",
    "moved": false,
    "static": false,
    "value": "- 完成 2 个区块链网络平台搭建，包括 SDK 和 Chaincode 开发，RESTful API 封装",
    "origin": "<section><ul>\n<li>负责网页端在线文库书写、页面seo优化.</li>\n</ul>\n</section>"
  },
  {
    "w": 24,
    "h": 1,
    "x": 0,
    "y": 36,
    "i": "item_34",
    "moved": false,
    "static": false,
    "value": "> ## `项目经历`",
    "origin": "<section><blockquote>\n<h2><code>项目经历</code></h2>\n</blockquote>\n</section>"
  },
  {
    "w": 24,
    "h": 1,
    "x": 0,
    "y": 35,
    "i": "item_35",
    "moved": false,
    "static": false,
    "value": "- 完成 DRG 采集系统设计，完成 DRG 数据分析系统设计和其前端开发与部署工作",
    "origin": "<section><ul>\n<li>前端项目以及后端服务的线上运维部署</li>\n</ul>\n</section>"
  },
  {
    "w": 5,
    "h": 4,
    "x": 0,
    "y": 37,
    "i": "item_37",
    "moved": false,
    "static": false,
    "value": "2017.10 - 2017.12",
    "origin": "<section><p>2017.10 - 2017.12</p>\n</section>"
  },
  {
    "w": 10,
    "h": 1,
    "x": 0,
    "y": 8,
    "i": "item_38",
    "moved": false,
    "static": false,
    "value": "**施工团队协作系统 Plate**",
    "origin": "<section><p>腾讯科技（深圳）有限公司<br></p>\n</section>"
  },
  {
    "w": 12,
    "h": 1,
    "x": 12,
    "y": 27,
    "i": "item_39",
    "moved": false,
    "static": false,
    "value": "**项目负责人**[-E]",
    "origin": "<section class=\"hEnd\"><p>&nbsp;前端开发工程师/运维工程师&nbsp; &nbsp;2020.07 - 2021.02<br></p>\n</section>"
  },
  {
    "w": 24,
    "h": 3,
    "x": 0,
    "y": 16,
    "i": "item_40",
    "moved": false,
    "static": false,
    "value": "- 土木工程管理平台，用来帮助施工人员进行现场照片采集，任务发布和工程管理",
    "origin": "<section><ul>\n<li><strong>旧项目的框架迁移工作:&nbsp;</strong>将vue2.6前项目和微信小程序项目逐步迁移到vue3版本，同时建立组件库的多端适配和迭代规范以及对应的打包构建工具，确立采用内部自研框架(liteapp)逐步替代原生微信小程序和旧有h5项目。<br></li>\n</ul>\n</section>"
  },
  {
    "w": 19,
    "h": 1,
    "x": 5,
    "y": 38,
    "i": "item_41",
    "moved": false,
    "static": false,
    "value": "- 完成原型设计，数据库设计，网站脚手架搭建，响应式布局实现和网站部署等工作",
    "origin": "<section><ul>\n<li>完成原型设计，数据库设计，网站脚手架搭建，响应式布局实现和网站部署等工作</li>\n</ul>\n</section>"
  },
  {
    "w": 19,
    "h": 1,
    "x": 5,
    "y": 39,
    "i": "item_42",
    "moved": false,
    "static": false,
    "value": "- 相关技术：Node.js / Git / MySQL",
    "origin": "<section><ul>\n<li>相关技术：Node.js / Git / MySQL</li>\n</ul>\n</section>"
  },
  {
    "w": 5,
    "h": 4,
    "x": 0,
    "y": 41,
    "i": "item_44",
    "moved": false,
    "static": false,
    "value": "2017.07 - 2017.10",
    "origin": "<section><p>2017.07 - 2017.10</p>\n</section>"
  },
  {
    "w": 13,
    "h": 1,
    "x": 5,
    "y": 40,
    "i": "item_45",
    "moved": false,
    "static": false,
    "value": "**国家互联网应急中心云平台管理系统**",
    "origin": "<section><p><strong>国家互联网应急中心云平台管理系统</strong></p>\n</section>"
  },
  {
    "w": 6,
    "h": 1,
    "x": 18,
    "y": 40,
    "i": "item_46",
    "moved": false,
    "static": false,
    "value": "**模块负责人**[-E]",
    "origin": "<section class=\"hEnd\"><p><strong>模块负责人</strong></p>\n</section>"
  },
  {
    "w": 19,
    "h": 1,
    "x": 5,
    "y": 41,
    "i": "item_47",
    "moved": false,
    "static": false,
    "value": "- 平台负责管理服务器设备中的虚拟机、数据库和容器等资源，还包括计费和预警",
    "origin": "<section><ul>\n<li>平台负责管理服务器设备中的虚拟机、数据库和容器等资源，还包括计费和预警</li>\n</ul>\n</section>"
  },
  {
    "w": 19,
    "h": 1,
    "x": 5,
    "y": 42,
    "i": "item_48",
    "moved": false,
    "static": false,
    "value": "- 完成 OpenStack 弹性伸缩模块，搭建 SaltStack 完成自动化运维模块和集群部署",
    "origin": "<section><ul>\n<li>完成 OpenStack 弹性伸缩模块，搭建 SaltStack 完成自动化运维模块和集群部署</li>\n</ul>\n</section>"
  },
  {
    "w": 19,
    "h": 1,
    "x": 5,
    "y": 43,
    "i": "item_49",
    "moved": false,
    "static": false,
    "value": "- 相关技术: Smarty / SVN / SaltStack",
    "origin": "<section><ul>\n<li>相关技术: Smarty / SVN / SaltStack</li>\n</ul>\n</section>"
  },
  {
    "w": 24,
    "h": 1,
    "x": 0,
    "y": 7,
    "i": "item_50",
    "moved": false,
    "static": false,
    "value": "> ## `专业技能`",
    "origin": "<section><blockquote>\n<h2><font color=\"#468cd4\">工作经历</font></h2>\n</blockquote>\n</section>"
  },
  {
    "w": 19,
    "h": 1,
    "x": 5,
    "y": 44,
    "i": "item_51",
    "moved": false,
    "static": false,
    "value": "- 熟练使用 Java / JavaScript，熟悉高并发、JVM、Spring、ES6 等基础知识",
    "origin": "<section><ul>\n<li>熟练使用 Java / JavaScript，熟悉高并发、JVM、Spring、ES6 等基础知识</li>\n</ul>\n</section>"
  },
  {
    "w": 19,
    "h": 1,
    "x": 5,
    "y": 45,
    "i": "item_52",
    "moved": false,
    "static": false,
    "value": "- 熟练使用 Git，熟悉团队协作流程，有开源社区交流、Linux 运维和部署经验",
    "origin": "<section><ul>\n<li>熟练使用 Git，熟悉团队协作流程，有开源社区交流、Linux 运维和部署经验</li>\n</ul>\n</section>"
  },
  {
    "w": 19,
    "h": 1,
    "x": 5,
    "y": 46,
    "i": "item_53",
    "moved": false,
    "static": false,
    "value": "- 熟悉计算机网络，算法与数据结构等基础，英语四六级和日语 N2 通过",
    "origin": "<section><ul>\n<li>熟悉计算机网络，算法与数据结构等基础，英语四六级和日语 N2 通过</li>\n</ul>\n</section>"
  },
  {
    "w": 24,
    "h": 1,
    "x": 0,
    "y": 47,
    "i": "item_54",
    "moved": false,
    "static": false,
    "value": "> ## `在校活动`",
    "origin": "<section><blockquote>\n<h2><code>在校活动</code></h2>\n</blockquote>\n</section>"
  },
  {
    "w": 19,
    "h": 1,
    "x": 5,
    "y": 48,
    "i": "item_55",
    "moved": false,
    "static": false,
    "value": "- 国科大开源软件协会负责人，组织企业沙龙活动和开源项目",
    "origin": "<section><ul>\n<li>国科大开源软件协会负责人，组织企业沙龙活动和开源项目</li>\n</ul>\n</section>"
  },
  {
    "w": 19,
    "h": 1,
    "x": 5,
    "y": 49,
    "i": "item_56",
    "moved": false,
    "static": false,
    "value": "- 中国科学院大学党委宣传部官微技术部负责人，负责设计和排版相关工作",
    "origin": "<section><ul>\n<li>中国科学院大学党委宣传部官微技术部负责人，负责设计和排版相关工作</li>\n</ul>\n</section>"
  },
  {
    "w": 24,
    "h": 1,
    "x": 0,
    "y": 51,
    "i": "item_57",
    "moved": false,
    "static": false,
    "value": "> ## `荣誉奖励`",
    "origin": "<section><blockquote>\n<h2><code>教育经历</code></h2>\n</blockquote>\n</section>"
  },
  {
    "i": "item_64",
    "x": 0,
    "y": 3,
    "w": 20,
    "h": 2,
    "value": "",
    "origin": "<section>&nbsp;男|21岁 本科 邮箱: 1635654853@qq.com 电话: (+86)130-9253-1498</section>"
  },
  {
    "i": "item_65",
    "x": 0,
    "y": 32,
    "w": 24,
    "h": 1,
    "value": "",
    "origin": "<section><strong>工作内容:</strong></section>"
  },
  {
    "i": "item_66",
    "x": 0,
    "y": 10,
    "w": 24,
    "h": 3,
    "value": "",
    "origin": "<section>微信支付（WeChat Pay）是腾讯公司推出的一种便捷的电子支付解决方案，广泛应用于线上和线下支付、账单管\n理和转账服务。WeChat Pay HK 是微信支付在香港的本地化版本，专门为香港用户设计，支持各种支付场景，提供安全高效\n的支付体验。&nbsp; </section>"
  },
  {
    "i": "item_67",
    "x": 0,
    "y": 9,
    "w": 24,
    "h": 1,
    "value": "",
    "origin": "<section><strong>项目介绍:</strong></section>"
  },
  {
    "i": "item_69",
    "x": 0,
    "y": 28,
    "w": 24,
    "h": 1,
    "value": "",
    "origin": "<section><strong>项目介绍<span style=\"font-size: 3.8mm; font-family: &quot;Times New Roman&quot;, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, Oxygen, Ubuntu, Cantarell, &quot;Fira Sans&quot;, &quot;Droid Sans&quot;, &quot;Helvetica Neue&quot;, sans-serif;\">:&nbsp;</span></strong></section>"
  },
  {
    "i": "item_70",
    "x": 0,
    "y": 13,
    "w": 24,
    "h": 1,
    "value": "",
    "origin": "<section><strong>工作内容:</strong></section>"
  },
  {
    "i": "item_71",
    "x": 0,
    "y": 26,
    "w": 24,
    "h": 1,
    "value": "",
    "origin": "<section><strong><ins><hr></ins></strong></section>"
  },
  {
    "i": "item_73",
    "x": 0,
    "y": 52,
    "w": 7,
    "h": 1,
    "value": "",
    "origin": "<section>大连交通大学</section>"
  },
  {
    "i": "item_74",
    "x": 17,
    "y": 52,
    "w": 7,
    "h": 1,
    "value": "",
    "origin": "<section>2021.9-2026.6</section>"
  },
  {
    "i": "item_75",
    "x": 7,
    "y": 52,
    "w": 10,
    "h": 1,
    "value": "",
    "origin": "<section>软件工程-日语专业</section>"
  },
  {
    "i": "item_76",
    "x": 0,
    "y": 25,
    "w": 24,
    "h": 1,
    "value": "",
    "origin": "<section><ul><li> </li></ul></section>"
  },
  {
    "i": "item_77",
    "x": 0,
    "y": 23,
    "w": 24,
    "h": 1,
    "value": "",
    "origin": "<section><ul><li> </li></ul></section>"
  },
  {
    "i": "item_78",
    "x": 0,
    "y": 24,
    "w": 24,
    "h": 1,
    "value": "",
    "origin": "<section><ul><li> </li></ul></section>"
  },
];

export default LAYOUT;
