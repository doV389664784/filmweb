const movies = [
    {
        id: 1,
        title: "杀人回忆",
        year: "2003",
        doubanLink: "https://movie.douban.com/subject/1300299/",
        imdbLink: "https://www.imdb.com/title/tt0353969/",
        director: {
            name: "奉俊昊",
            image: "images/奉俊昊.webp"
        },
        description: "1986年，韩国京畿道华城郡。一起连环杀人案震惊了整个社会，两名警探展开了艰难的破案之旅。",
        image: "images/杀人回忆.avif",
        genre: ["犯罪", "悬疑", "剧情"],
        trailer: "videos/杀人回忆.mp4",
        panLink: "https://pan.quark.cn/s/f6d99567bee2",
        cast: [
            {
                name: "宋康昊",
                role: "朴斗满",
                image: "images/宋康昊.webp"
            },
            {
                name: "金相庆",
                role: "徐泰允",
                image: "images/金相庆.webp"
            }
        ]
    },
    {
        id: 2,
        title: "寄生虫",
        year: "2019",
        doubanLink: "https://movie.douban.com/subject/27010768/",
        imdbLink: "https://www.imdb.com/title/tt6751668/",
        director: {
            name: "奉俊昊",
            image: "images/奉俊昊.webp"
        },
        description: "基宇一家人生活在贫民区的地下室里，直到一天他获得了一份高薪家教工作，由此展开了一系列意想不到的事件。",
        image: "images/寄生虫.avif",
        genre: ["剧情", "惊悚"],
        trailer: "videos/寄生虫.mp4",
        panLink:"https://pan.quark.cn/s/7f307d722994",
        cast: [
            {
                name: "宋康昊",
                role: "金基泽",
                image: "images/宋康昊.webp"
            },
            {
                name: "曹汝贞",
                role: "朴多美",
                image: "images/曹汝贞.jpg"
            },
            {
                name: "崔宇植",
                role: "金基宇",
                image: "images/崔宇植.jpg"
            }
        ]
    },
    {
        id: 3,
        title: "共同警备区",
        year: "2000",
        doubanLink: "https://movie.douban.com/subject/1306664/",
        imdbLink: "https://www.imdb.com/title/tt0260991/",
        director: {
            name: "朴赞郁",
            image: "images/朴赞郁.webp"
        },
        description: "在南北韩非军事区发生的一起神秘枪击案，两名调查员必须共同合作查明真相。",
        image: "images/共同警备区.avif",
        genre: ["动作", "剧情", "悬疑"],
        trailer: "videos/共同警备区.mp4",
        panLink:"https://pan.quark.cn/s/be390276829a",
        cast: [
            {
                name: "李英爱",
                role: "金善英",
                image: "images/李英爱.webp"
            },
            {
                name: "李秉宪",
                role: "李秀赫",
                image: "images/李炳宪.jpg"
            },
            {
                name: "宋康昊",
                role: "吴京必",
                image: "images/宋康昊.webp"
            },
            {
                name: "申河均",
                role: "郑宇真",
                image: "images/申河均.webp"
            },
            {
                name: "金泰佑",
                role: "朴太锡",
                image: "images/金泰佑.webp"
            }
        ]
    },
    {
        id: 4,
        title: "星际穿越",
        year: "2014",
        doubanLink: "https://movie.douban.com/subject/1889243/",
        imdbLink: "https://www.imdb.com/title/tt0816692/",
        director: {
            name: "克里斯托弗·诺兰",
            image: "images/诺兰.webp"
        },
        description: "在地球即将无法居住的未来，一组探险家通过一个虫洞展开了一场跨越时空的旅程。",
        image: "images/星际穿越.avif",
        genre: ["科幻", "冒险", "剧情"],
        trailer: "videos/星际穿越.mp4",
        panLink:"https://pan.quark.cn/s/c0d1a81306cc",
        cast: [
            {
                name: "马修·麦康纳",
                role: "库珀",
                image: "images/马修麦康纳.jpg"
            },
            {
                name: "安妮·海瑟薇",
                role: "艾米莉亚·布兰德",
                image: "images/安妮海瑟薇.webp"
            }
        ]
    },
    {
        id: 5,
        title: "情书",
        year: "1995",
        doubanLink: "https://movie.douban.com/subject/1292220/",
        imdbLink: "https://www.imdb.com/title/tt0113703/",
        director: {
            name: "岩井俊二",
            image: "images/岩井俊二.jpg"
        },
        description: "渡边博子收到了一封寄给已故未婚夫的回信，开启了一段跨越时空的情书故事。",
        image: "images/情书.avif",
        genre: ["爱情", "剧情"],
        trailer: "videos/情书.mp4",
        panLink:"https://pan.quark.cn/s/ff1d4463b964",
        cast: [
            {
                name: "中山美穗",
                role: "渡边博子/藤井树",
                image: "images/中山美穗.webp"
            },
            {
                name: "丰川悦司",
                role: "藤井树",
                image: "images/丰川悦司.webp"
            }
        ]
    },
    {
        id: 6,
        title: "环太平洋",
        year: "2013",
        doubanLink: "https://movie.douban.com/subject/5323968/",
        imdbLink: "https://www.imdb.com/title/tt1663662/",
        director: {
            name: "吉尔莫·德尔·托罗",
            image: "images/托罗.jpg"
        },
        description: "为了对抗来自深海的巨型怪兽，人类建造了巨大的机甲战士，展开了一场保卫地球的战争。",
        image: "images/环太平洋.avif",
        genre: ["科幻", "动作", "冒险"],
        trailer: "videos/环太平洋.mp4",
        panLink:"https://pan.quark.cn/s/876757a276b3",
        cast: [
            {
                name: "查理·汉纳姆",
                role: "罗利·贝克特",
                image: "images/查理汉纳姆.jpg"
            },
            {
                name: "菊地凛子",
                role: "森真子",
                image: "images/菊地凛子.webp"
            }
        ]
    }
];

const series = [
    {
        id: 1,
        title: "暗黑 第一季",
        year: "2017",
        doubanLink: "https://movie.douban.com/subject/26992330/",
        imdbLink: "https://www.imdb.com/title/tt5753856/?ref_=nv_sr_srsg_0_tt_8_nm_0_in_0_q_dark",
        director: {
            name: "巴伦·博·欧达尔",
            image: "images/巴伦.webp"
        },
        description: "德国小镇文登，一个孩子神秘失踪。四个家庭在寻找真相的过程中，发现这个小镇有着可怕的秘密，而这一切似乎与33年的时间循环有关。",
        image: "images/暗黑_第一季.avif",
        genre: ["科幻", "悬疑", "剧情"],
        season: 1,
        episodes: 10,
        trailer: "videos/暗黑_第一季.mp4",
        panLink:"https://pan.quark.cn/s/495a0d40f0dd",
        cast: [
            {
                name: "路易斯·霍夫曼",
                role: "乔纳斯·卡恩瓦尔德",
                image: "images/路易斯霍夫曼.webp"
            },
            {
                name: "丽莎·维卡里",
                role: "玛莎·尼尔森",
                image: "images/丽莎维卡里.webp"
            },
            {
                name: "奥利弗·马苏奇",
                role: "乌尔里希·尼尔森",
                image: "images/奥利弗马苏奇.webp"
            }
        ]
    },
    {
        id: 2,
        title: "暗黑 第二季",
        year: "2019",
        doubanLink: "https://movie.douban.com/subject/27611018/",
        imdbLink: "https://www.imdb.com/title/tt5753856/?ref_=nv_sr_srsg_0_tt_8_nm_0_in_0_q_dark",
        director: {
            name: "巴伦·博·欧达尔",
            image: "images/巴伦.webp"
        },
        description: "随着更多时间线的揭示，文登镇的谜团变得更加复杂。乔纳斯发现自己处于2053年的末日废墟中，而过去和未来的命运正在交织。",
        image: "images/暗黑_第二季.avif",
        genre: ["科幻", "悬疑", "剧情"],
        season: 2,
        episodes: 8,
        trailer: "videos/暗黑_第二季.mp4",
        panLink:"https://pan.quark.cn/s/4f4c2465217f",
        cast: [
            {
                name: "路易斯·霍夫曼",
                role: "乔纳斯·卡恩瓦尔德",
                image: "images/路易斯霍夫曼.webp"
            },
            {
                name: "丽莎·维卡里",
                role: "玛莎·尼尔森",
                image: "images/丽莎维卡里.webp"
            },
            {
                name: "安德烈亚斯·皮特施曼",
                role: "老乌尔里希",
                image: "images/安德烈亚斯.webp"
            }
        ]
    },
    {
        id: 3,
        title: "暗黑 第三季",
        year: "2020",
        doubanLink: "https://movie.douban.com/subject/34442364/",
        imdbLink: "https://www.imdb.com/title/tt5753856/?ref_=nv_sr_srsg_0_tt_8_nm_0_in_0_q_dark",
        director: {
            name: "巴伦·博·欧达尔",
            image: "images/巴伦.webp"
        },
        description: "最终季揭示了平行世界的存在，乔纳斯和玛莎必须合作打破无休止的循环，拯救两个世界中的亲人。一切都将回到起点。",
        image: "images/暗黑_第三季.avif",
        genre: ["科幻", "悬疑", "剧情"],
        season: 3,
        episodes: 8,
        trailer: "videos/暗黑_第三季.mp4",
        panLink:"https://pan.quark.cn/s/80485b3b12ba",
        cast: [
            {
                name: "路易斯·霍夫曼",
                role: "乔纳斯·卡恩瓦尔德",
                image: "images/路易斯霍夫曼.webp"
            },
            {
                name: "丽莎·维卡里",
                role: "玛莎·尼尔森",
                image: "images/丽莎维卡里.webp"
            },
            {
                name: "克劳迪娅·米歇尔森",
                role: "克劳迪娅·提德曼",
                image: "images/克劳迪亚.jpg"
            }
        ]
    },

];