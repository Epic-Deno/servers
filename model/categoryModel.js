/*
 * @Description: KEEP CALM AND MAKE EPIC SHIT - PONY ZHANG
 * @Version: 2.0
 * @Autor: PONY ZHANG
 * @Date: 2020-11-19 22:52:29
 * @LastEditors: PONY ZHANG
 * @LastEditTime: 2020-11-20 10:36:40
 */

 const allGoods = [
     // 白酒 名酒
     {
        CategoryId: '4',
        CategorySubId: '2c9f6c94621970a801626a35cb4d0175',
        image:'https://img10.360buyimg.com/n2/s240x240_jfs/t30031/123/1375679204/360537/7404369/5cde10bbN19c7bb67.jpg!q70.jpg',
        oriPrice: 1238.1,
        presentPrice: 1330.1,
        goodsName: "水井坊高度高端白酒浓香型井台珍藏53度 1000ml",
        goodsId: "BM-01",
     },
     {
        CategoryId: '4',
        CategorySubId: '2c9f6c94621970a801626a35cb4d0175',
        image:'https://img12.360buyimg.com/n2/s240x240_jfs/t1/33654/36/3801/99708/5cb5dbe9Ec7f1adf5/b81cee95b9358614.jpg!q70.jpg',
        oriPrice: 238.1,
        presentPrice: 260.1,
        goodsName: "五粮液股份 富贵吉祥牡丹 浓香型白酒礼盒装 52度500ml",
        goodsId: "BM-02",
     },
     {
        CategoryId: '4',
        CategorySubId: '2c9f6c94621970a801626a35cb4d0175',
        image:'https://img13.360buyimg.com/mobilecms/s316x316_jfs/t17647/313/431115413/422681/ce9d9db0/5a75a32bNcda4af58.jpg!q70.dpg.webp',
        oriPrice: 1699.2,
        presentPrice: 1700.3,
        goodsName: "水井坊 高度高端白酒 浓香型 菁翠 52度500ml",
        goodsId: "BM-03",
     },
     {
        CategoryId: '4',
        CategorySubId: '2c9f6c94621970a801626a35cb4d0175',
        image:'https://img13.360buyimg.com/mobilecms/s316x316_jfs/t1/128170/34/9686/98573/5f363799E02c3026c/129445330f179756.jpg!q70.dpg.webp',
        oriPrice: 258.2,
        presentPrice: 260.6,
        goodsName: "五粮液股份 五湖液醇品 浓香型白酒礼盒装 52度500ml",
        goodsId: "BM-04",
     },
     {
        CategoryId: '4',
        CategorySubId: '2c9f6c94621970a801626a35cb4d0175',
        image:'https://img10.360buyimg.com/mobilecms/s316x316_jfs/t1/123431/1/18079/131672/5fa8d4f4E38070f8d/189a0ffc231668fa.jpg!q70.dpg.webp',
        oriPrice: 108.2,
        presentPrice: 120.4,
        goodsName: "西凤酒 白酒 凤香型 防伪墨瓶 55度 500ml",
        goodsId: "BM-05",
     },
     {
        CategoryId: '4',
        CategorySubId: '2c9f6c94621970a801626a35cb4d0175',
        image:'https://img14.360buyimg.com/mobilecms/s316x316_jfs/t1/154909/27/2115/168443/5f853c34E49010590/51d622c8d382d51f.jpg!q70.dpg.webp',
        oriPrice: 529.5,
        presentPrice: 530.5,
        goodsName: "郎酒 郎牌郎酒  53度 酱香型 超市高度白酒名酒 普郎 500ml",
        goodsId: "BM-06",
     },
     {
        CategoryId: '4',
        CategorySubId: '2c9f6c94621970a801626a35cb4d0175',
        image:'https://img10.360buyimg.com/mobilecms/s316x316_jfs/t1/92437/11/9978/143010/5e13d6f1E8776518b/5265452838ae5cc9.jpg!q70.dpg.webp',
        oriPrice: 480.3,
        presentPrice: 500.3,
        goodsName: "52度新百年兰陵王450ml山东名酒五粮型白酒高档酒",
        goodsId: "BM-07",
     },
     {
        CategoryId: '4',
        CategorySubId: '2c9f6c94621970a801626a35cb4d0175',
        image:'https://img13.360buyimg.com/mobilecms/s316x316_jfs/t1/114049/38/18690/119523/5f6ebb93Edcd0906c/6ef98dbe9445bcc3.jpg!q70.dpg.webp',
        oriPrice: 238.4,
        presentPrice: 240.7,
        goodsName: "平坝窖酒60版 浓酱兼香型52度高度白酒纯粮食  传承古法工艺 12年基酒 白酒礼盒单瓶500ml",
        goodsId: "BM-08",
     },
     {
        CategoryId: '4',
        CategorySubId: '2c9f6c94621970a801626a35cb4d0175',
        image:'https://img12.360buyimg.com/n2/s240x240_jfs/t1/95107/38/9362/315281/5e0eb51fE08ce1de6/db8d7d4fab9fd2e0.jpg!q70.jpg',
        oriPrice: 299.4,
        presentPrice: 300.6,
        goodsName: "洋河蓝色经典 海之蓝 42度 礼盒装 480ml",
        goodsId: "BM-09",
     },
     {
        CategoryId: '4',
        CategorySubId: '2c9f6c94621970a801626a35cb4d0175',
        image:'https://img14.360buyimg.com/n2/s240x240_jfs/t18208/345/940681838/85989/1459cb81/5ab4cb24Na8d53090.jpg!q70.jpg',
        oriPrice: 1198.4,
        presentPrice: 1230.6,
        goodsName: "洋河蓝色经典 梦之蓝M3 52度 礼盒装 500ml",
        goodsId: "BM-11",
     },
     {
        CategoryId: '4',
        CategorySubId: '2c9f6c94621970a801626a35cb4d0175',
        image:'https://img14.360buyimg.com/mobilecms/s316x316_jfs/t1/99296/24/10363/62146/5e1842e7Ef26638fe/f13dcf3f802c54b3.jpg!q70.dpg.webp',
        oriPrice: 788.4,
        presentPrice: 860.4,
        goodsName: "洋河蓝色经典 天之蓝 52度 礼盒装 480ml",
        goodsId: "BM-12",
     },
     // 白酒 宝丰
     {
        CategoryId: '4',
        CategorySubId: '2c9f6c94621970a801626a363e5a0176',
        image:'https://img10.360buyimg.com/n2/s240x240_jfs/t1/57635/39/15692/361708/5dca1f60Efacabc29/3a32da9876b12183.jpg!q70.jpg',
        oriPrice: 218.4,
        presentPrice: 230.4,
        goodsName: "【酒厂】河南白酒宝丰复古大曲 50度清香型白酒 高度白酒整箱 50度500ml",
        goodsId: "BF-01",
     },
     {
        CategoryId: '4',
        CategorySubId: '2c9f6c94621970a801626a363e5a0176',
        image:'https://img12.360buyimg.com/mobilecms/s316x316_jfs/t1/113520/16/7668/113987/5ec4d5baE0e09ec69/aaac4198026138e8.jpg!q70.dpg.webp',
        oriPrice: 138.6,
        presentPrice: 140.7,
        goodsName: "【酒厂直销】河南酒宝丰酒54度清香型白酒献礼版坛装白酒 整箱高度粮食酒 荣耀青坛54度1000ml",
        goodsId: "BF-02",
     },
     //白酒二锅头头 
     {
        CategoryId: '4',
        CategorySubId: '2c9f6c94621970a801626a3770620177',
        image:'https://img13.360buyimg.com/n2/s240x240_jfs/t1/142312/9/11959/157082/5f953270E71ec2af1/90a51ad3be06612b.jpg!q70.jpg',
        oriPrice: 138.5,
        presentPrice: 140.5,
        goodsName: "永丰牌北京二锅头清香型白酒（出口小方瓶）永丰二锅头三色42度纯粮酒（礼盒装）500ml",
        goodsId: "BG-01",
     },
     //白酒 大明
     {
        CategoryId: '4',
        CategorySubId: '2c9f6c94679b4fb10167f7cc035c15a8',
        image:'https://img11.360buyimg.com/n2/s240x240_jfs/t1/122310/38/5415/174249/5ef00fe3E4cfc1c90/be9583b33342441a.jpg!q70.jpg',
        oriPrice: 218.5,
        presentPrice: 230.5,
        goodsName: "大明星白酒光瓶42高度浓香型白酒纯粮食白酒试饮小酒品鉴 小瓶 248ml*2瓶",
        goodsId: "BD-01",
     },
     //白酒 杜康
     {
        CategoryId: '4',
        CategorySubId: '2c9f6c94679b4fb10167f7cc035c15a8',
        image:'https://img10.360buyimg.com/n2/s240x240_jfs/t1/125619/34/16749/107402/5f9a6ea5Ec7c7c465/4526c0f6372abac1.jpg!q70.jpg',
        oriPrice: 568.5,
        presentPrice: 590.2,
        goodsName: "杜康1号 52度浓香型高度白酒京剧脸谱500ml*2瓶 礼盒送礼",
        goodsId: "BDD-01",
     },
 ];
 
 module.exports = allGoods;