//声明服务
const express = require("express");
//引入解析Gzip格式
const compression = require('compression');
//商品分类的JSON
// import { CategoryResults } from './apk'
const CategoryResults = require('./model/apk')
//商品
 const allGoods = require('./model/categoryModel')
//文件操作
// const  fs = requier('fs')
//文件上传模块
// const multer = require('multer');
const app = express();

//解析Gzip
// app.use(compression());

app.use(compression({filter: shouldCompress}))
 
function shouldCompress (req, res) {
 if (req.headers['x-no-compression']) {
  // 这里就过滤掉了请求头包含'x-no-compression'
  return false
 }
 return compression.filter(req, res)
}

//解析json
var bodyParser = require("body-parser");
//解析www-form-urlencoded格式的extended:false
// var urlencodeparser = bodyParser.urlencoded({extended:true})
app.use(bodyParser.json({ limit: '1mb' })) //指定json格式
app.use(bodyParser.urlencoded({ extended: true }))
//创建静态文件夹
app.use(express.static('public'))
//创建端口
app.listen(3002);

// 服务起来控制台通知
const program = require("commander");
const colors = require('colors');

// program.version('1.0.1').description('PonyZhang Server')
// program.command('PonyZhang').description('PonyZhang').action(_ => {
   
// })

// program.parse(process.argv);
const text = `
____                   ______                       
|  _ \ ___  _ __  _   _|__  / |__   __ _ _ __   __ _ 
| |_) / _ \| '_ \| | | | / /| '_ \ / _ | '_ \ / _ |
|  __/ (_) | | | | |_| |/ /_| | | | (_| | | | | (_| |
|_|   \___/|_| |_|\__, /____|_| |_|\__,_|_| |_|\__, |     V1.0.1
                  |___/                        |___/ 
`;
console.log(colors.rainbow(text));

// 通知结束




// var storage = multer.diskStorage({
//     //设置上传后文件路径，uploads文件夹需要手动创建！！！
//     destination: function (req, file, cb) {
//         console.log(file)
//         cb(null, './public/uploads')
//     },
//     //给上传文件重命名，获取添加后缀名
//     filename: function (req, file, cb) {
//         console.log(req)
//         var fileFormat = (file.originalname).split(".");
//         cb(null, file.fieldname + '-' + Date.now() + "." + fileFormat[fileFormat.length - 1]);
//     }
// });
//添加配置文件到muler对象。
// var upload = multer({
//     storage: storage
// });
// var upload = multer({dest:'upload/'});
const pool = require('./pool/pool.js');
//设置跨域访问  
app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});
// //上传文件接口
// app.post('/upload', upload.single('myfile'), (req, res, next) => {
//     var file =req.file;
//     console.log('文件类型：%s', file.mimetype);
//     console.log('原始文件名：%s', file.originalname);
//     console.log('文件大小：%s', file.size);
//     console.log('文件保存路径：%s', file.path);
//     res.send({ resultCode: '000000' })
// })
app.get('/getInter', (res, req) => {
    console.log('触发接口')
})
app.get('/text', (req, res) => {
    res.send(
        {
            "上海宝钢": {
                "1号机": {
                    "4GZA": {
                        "2": 1,
                        "3": 1,
                        "4": 2
                    },
                    "C3000417": {
                        "2": 1,
                        "4": 1
                    }
                },
                "3号机": {
                    "C3000417": {
                        "3": 2
                    }
                },
                "4号机": {
                    "4GZA": {
                        "2": 1,
                        "3": 1,
                        "4": 1
                    }
                },
                "totalSize": 4
            },
            "上海商桥供应链服务有限公司": {
                "1号机": {
                    "4GZA": {
                        "3": 1
                    }
                },
                "totalSize": 1
            },
            "天一外协有限公司": {
                "7号机": {
                    "4GZA": {
                        "3": 1
                    }
                },
                "8号机": {
                    "4GZA": {
                        "3": 1
                    },
                    "C3000417": {
                        "2": 1,
                        "4": 1
                    }
                },
                "totalSize": 3
            }
        }
    )
})
//获取列表
app.get('/goodsList', (req, res) => {
    res.send({
        resultCode: '000000',
        success: true,
        foodList: [
            [
                {
                    goodsId: 1,
                    goodsImg: "http://localhost:3002/img/type1-1.jpeg",
                    goodsName: '香辣鸡腿堡',
                    price: 18
                }, {
                    goodsId: 2,
                    goodsImg: "http://localhost:3002/img/type1-2.jpeg",
                    goodsName: '田园鸡腿堡',
                    price: 15
                }, {
                    goodsId: 3,
                    goodsImg: "http://localhost:3002/img/type1-3.jpeg",
                    goodsName: '和风汉堡',
                    price: 15
                }
            ], [
                {
                    goodsId: 5,
                    goodsImg: "http://localhost:3002/img/type2-1.jpg",
                    goodsName: '脆皮炸鸡腿',
                    price: 10
                }, {
                    goodsId: 6,
                    goodsImg: "http://localhost:3002/img/type2-2.jpeg",
                    goodsName: '魔法鸡块',
                    price: 20
                }, {
                    goodsId: 9,
                    goodsImg: "http://localhost:3002/img/type2-3.jpg",
                    goodsName: '大块鸡米花',
                    price: 15
                }, {
                    goodsId: 20,
                    goodsImg: "http://localhost:3002/img/type2-4.jpeg",
                    goodsName: '香脆鸡柳',
                    price: 17
                }
            ], [
                {
                    goodsId: 7,
                    goodsImg: "http://localhost:3002/img/type3-1.jpeg",
                    goodsName: '可乐大杯',
                    price: 10
                }, {
                    goodsId: 8,
                    goodsImg: "http://localhost:3002/img/type3-2.jpeg",
                    goodsName: '雪顶咖啡',
                    price: 18
                }
            ], [
                {
                    goodsId: 4,
                    goodsImg: "http://localhost:3002/img/type4-1.jpg",
                    goodsName: '快乐全家桶',
                    price: 80
                },
            ],

        ],
        useGoods: [
            {
                goodsId: 1,
                goodsName: '香辣鸡腿堡',
                price: 18
            }, {
                goodsId: 2,
                goodsName: '田园鸡腿堡',
                price: 15
            }, {
                goodsId: 3,
                goodsName: '和风汉堡',
                price: 15
            }, {
                goodsId: 4,
                goodsName: '快乐全家桶',
                price: 80
            }, {
                goodsId: 5,
                goodsName: '脆皮炸鸡腿',
                price: 10
            }

        ]
    })
})
//验证登陆
app.get('/login', (req, res) => {
    // var name = req.query.name;
    // var pwd = req.query.pwd;
    // console.log(name)
    // if (name == 123) {
    res.send({
        resultCode: '000000', success: true, data: {
            name: '小姐姐啊'
        }
    })
    // } else {
    //     res.send({ resultCode: '-1', success: false, result: 'error' })
    // }
});
//验证登陆
app.get('/getTables', (req, res) => {
    var pageNo = req.query.pageNo;
    if (pageNo == 1) {
        let rows = [];
        for (var i = 1; i < 11; i++) {
            rows.push(
                {
                    productType_dictText: '消耗品' + i,
                    equipName: '扇形段' + i + '2333ddhshhdbbbbbbbsssssswwacbcbbddbjffnfnjhssvvxznahbb',
                    managementCode: 'TX-00-01' + i,
                    id: 'xyz-01-' + i,
                }
            )
        }
        res.send({
            resultCode: '000000', success: true, result: rows, total: 30
        })
    } else if (pageNo == 2) {
        let rows = [];
        for (var i = 11; i < 21; i++) {
            rows.push(
                {
                    productType_dictText: '消耗品' + i,
                    equipName: '扇形段' + i,
                    managementCode: 'TX-00-01' + i,
                    id: 'xyz-01-' + i,
                }
            )
        }
        res.send({
            resultCode: '000000', success: true, result: rows, total: 30
        })
    } else {
        let rows = [];
        for (var i = 21; i < 31; i++) {
            rows.push(
                {
                    productType_dictText: '消耗品' + i,
                    equipName: '扇形段' + i,
                    managementCode: 'TX-00-01' + i,
                    id: 'xyz-01-' + i,
                }
            )
        }
        res.send({
            resultCode: '000000', success: true, result: rows, total: 30
        })
    }


});
//获取微信授权信息
app.get('/getList', (req, res) => {
    // var userInfos = JSON.parse(req.query.infos);
    res.send({
        result: '000000',
        success: true,
        list: [
            '张朕是个前端程序员',
            '张朕是逍遥子',
            '逍遥子是张朕的花名',
        ],
        list2: [
            '阿里达摩院掌门人',
            '花名行癫',
            '淘宝网底层架构师'
        ]
    })
})
app.get('/lists', (req, res) => {
    res.send({
        resultCode: '000000',
        success: true,
        result: {
            "INVOICE_SELLER_NAME": "深圳艾科瑞特科技有限公司",
            "INVOICE_SELLER_BANK": "招静银行股份有限公司深圳....",
            "INVOICE_SELLER_ADDRESS": "深圳市商山区商山街道南....",
            "INVOICE_SELLER_REGISTER_ID": "91440300326535080A",
            "INVOICE_TOTAL_AMOUNT": "1877.26",
            "INVOICE_SELLER_TAX_RATE": "6%",
            "INVOICE_TOTAL_TAX": "112.64",
            "INVOICE_TIME": "2019年05月27日",
            "INVOICE_PURCHASER_NAME": "深圳市安印科技有限公司",
            "INVOICE_PURCHASER_BANK": "招商银行深圳分行科苑支行75592..",
            "INVOICE_PURCHASER_ADDRESS": "深圳市南山区馨海街...",
            "INVOICE_PURCHASER_REGISTER_ID": "91440300326535080A",
            "INVOICE_ID": "10710670",
            "INVOICE_CODE": "4403181130",
            "INVOICE_TYPE": "专用发票",
            "INVOICE_DETAIL": [
                {
                    "ITEM_ROW_NUMBER": "1",
                    "ITEM_PRODUCT_NAME": "*信息技术服务*软件开发服务",
                    "ITEM_PRODUCT_TYPE": "次",
                    "ITEM_PRODUCT_UNIT": "次",
                    "ITEM_PRODUCT_AMOUNT": "1",
                    "ITEM_PRODUCT_PRICE": "1877.2641509",
                    "ITEM_PRODUCT_SUM_MONEY": "1877.26",
                    "ITEM_PRODUCT_TAX_RATE": "6%",
                    "ITEM_PRODUCT_SUM_TAX": "112.64"
                }
            ]
        }
    })
})
app.get('/getUserStart/prograsess', (req, res) => {
    let mesg = req.query.Message;
    console.log(mesg)
    res.send({
        success: true,
        message: '回调成功',
        result: null
    })
})
app.get('/getArams', (req, res) => {
    let Nows = new Date();
    let years = Nows.getFullYear();
    let months = Nows.getMonth();
    let Dates = Nows.getDate();
    let Hours = nows.getHours();
    let mins = Nows.getMinutes();
    let sec = Nows.getSeconds();
    let NowTime = `${years}-${months + 1 < 10 ? '0' + months + 1 : months}-${Dates}  ${Hours < 10 ? '0' + Hours : Hours}:${mins}:${sec}`
    res.send({
        success: true,
        result: [
            {
                productLine: '4号机器-5流-MD',
                type: 1,
                creatTime: NowTime
            }
        ], totals: 5
    })
})
//分页查询数据
// app.get('/getUseinfos', (req, res) => {
//     var pageNO = req.query.pageNO;
//     var pageSize = req.pageSize;
//     //用户没有传入分页的时候
//     if (!pageNO) {
//         pageNO = 1;
//     }
//     if (!pageSize) {
//         pageSize = 10;
//     }
//     //验证当前页码是否正确
//     var reg = /^[0-9]{1,}$/;
//     if (!reg.test(pageNO)) {
//         res.send({ resultCode: '-1', success: false, result: '传入的页码不对' })
//         return
//     }
//     if (!reg.test(pageSize)) {
//         res.send({ resultCode: '-1', success: false, result: '传入的页大不对' })
//         return
//     }
//     //创建sql
//     var sql = "SELECT count(RowAutoID) as totals FROM ios_visitor";
//     //sql执行的进度
//     var prograss = 0;
//     var objs = { resultCode: '000000' };
//     pool.query(sql, (err, result) => {
//         if (err) throw err;
//         console.log(result)
//         var PNo = Math.ceil(result[0].totals / pageSize);
//         objs.pageTotals = PNo;
//         prograss += 50;
//         if (prograss == 100) {
//             res.send(objs)
//         }
//     });
//     // 查询当前页面的内容
//     var sqls = "SELECT visitorCompany,certificateType,certificateNum,visitorName,visitorAddress FROM ios_visitor LIMIT ?,?"
//     // sqls+="";
//     // sqls+="";
//     var offset = parseInt(pageNO - 1) * pageSize;
//     pageSize = parseInt(pageSize);
//     console.log(offset, pageSize)
//     pool.query(sqls, [offset, pageSize], (err, result) => {
//         if (err) throw err;
//         objs.data = result;
//         prograss += 50;
//         if (prograss == 100) {
//             res.send(objs);
//         }
//     })
// })
app.get('/userName', (req, res) => {
    let username = req.query.username || '';
    console.log(username);
    console.log(111);
    pool.query(' select * from  user where name= ?', [username], (err, result) => {
        console.log(result, '数据返回');
        let obj = new Object();
        if (result) {
            obj.result = result;
            obj.success = true;
        } else {
            obj.success = false;
            obj.result = null
        }
        res.send(obj)

    })
})
//果壳箱传感器 告警数据
app.post('/smart/sendParams', (req, res) => {
    console.log(res.body)
    const { seriNo, positionName, warningNum, creatDate } = req.body

    let result = `编号${seriNo}位置${positionName}已满,当前储存量${warningNum}`
    //找到果壳箱表 找到关联的工人ID 
    //发起推送
    //发送请结果
    res.send({ success: true, code: 0, message: 'ok', result: result })
})

app.post('/cbopms/i/user.do', (req, res) => {
    console.log('进来来了')
    //找到果壳箱表 找到关联的工人ID 
    //发起推送
    //发送请结果
    res.send({ success: true, code: 0, message: 'ok' })
})

app.get('/getGirls', (req, res) => {
    const girls = [
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1603819246195&di=5cfe2f6f8d4a51e220e881b22d2b1bca&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201610%2F05%2F20161005110436_cMNxW.jpeg',
        'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2160079489,748090067&fm=26&gp=0.jpg',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1603819246192&di=25f801c119deb166faed5c272fb6cc36&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201601%2F20%2F20160120182215_2r4YF.jpeg',
        'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2423321859,2979330058&fm=26&gp=0.jpg',
    ];
    // 0 -3 随机
    let index = Math.floor(Math.random() * (3 - 0 + 1) + 0);
    res.send({
        imgUrl: girls[index]
    })
})
app.get('/getUsers', (req, res) => {
    let name = req.query.name
    const users = [
        'zhangzhen',
        'pony',
        'xiaoyaozi'
    ];
    let index = Math.floor(Math.random() * (3 - 0 + 1) + 0);
    res.send({
        data: {
            name: `${name}-${users[index]}`
        }
    })
})

//百姓生活
app.post('/wxmini/homePageContent', (req, res) => {
    console.log(req.body, res.query, '进来来了')
    //找到果壳箱表 找到关联的工人ID 
    //发起推送
    //发送请结果
    res.send({ success: true, code: 0, message: 'ok'})
})

//获取首页的banner
app.get('/bx/bannerList', (req, res) => {
    res.send({
        slides: [
            {
                image: 'https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/122573/4/16925/350821/5f9da595E5a3d0b2c/5ee31f2841588bb0.jpg!cr_1125x445_0_171!q70.jpg.dpg',
            },
            {
                image: 'https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/71091/13/3029/112815/5d134b92E202e51d9/4558e37904df98d4.jpg!cr_1125x445_0_171!q70.jpg.dpg',
            },
            {
                image: 'https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/129536/40/16616/130547/5f9be1e2Efc8f5b42/78007213970701ce.jpg!q70.jpg.dpg',
            },
            {
                image: 'https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/141366/30/11715/108036/5f918149E82bb33c5/cf30dc875d3f3180.jpg!q70.jpg.dpg'
            }
        ],
        category: [
            {
                image: 'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/125678/35/5947/4868/5efbf28cEbf04a25a/e2bcc411170524f0.png.webp',
                mallCategoryName: '京东超市',
            },
            {
                image: 'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/135931/4/3281/5598/5efbf2c0Edbdc82c7/ed9861b4ddfb9f30.png.webp',
                mallCategoryName: '数码电器',
            },
            {
                image: 'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/140012/8/1804/3641/5efbf318E38bd5dad/0db99d859ab16ce9.png.webp',
                mallCategoryName: '京东服饰',
            },
            {
                image: 'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/129215/21/5978/3618/5efbf344Ebec23ae8/59712d986b10bb0a.png.webp',
                mallCategoryName: '京东生鲜',
            },
            {
                image: 'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/116602/7/11200/3796/5efbf375Ebba41029/f07cc166f368fa05.png.webp',
                mallCategoryName: '京东到家',
            },
            {
                image: 'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/146390/3/1846/4909/5efbf39aEe5f5f797/300071558a9ab078.png.webp',
                mallCategoryName: '充值缴费',
            },
            {
                image: 'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/113589/24/11332/4897/5efbf3feE705d87db/e5c12d5e943266b9.png.webp',
                mallCategoryName: '9.9元拼',
            },
            {
                image: 'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/113589/24/11332/4897/5efbf3feE705d87db/e5c12d5e943266b9.png.webp',
                mallCategoryName: '领劵',
            },
            {
                image: 'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/131663/33/3380/3674/5efbf50fEf79cf314/af4b57d2383e605d.png.webp',
                mallCategoryName: '领金贴',
            },
            {
                image: 'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/123730/37/5924/4189/5efbf567E0a226121/d04df7c74c87cf68.png.webp',
                mallCategoryName: 'PlUS会员',
            },
        ],
        shopInfo: {
            leaderImage: 'https://imgcps.jd.com/ling4/100008348530/5byA5a2m5LyY6YCJ/5a2m55Sf55qE5LiN5LqM5LmL6YCJ/p-5d91a4f642dd5b7c7d52cbe1/41e6acb2/cr/s1125x690/q70.jpg',
            leaderPhone: '17512527994'
        },
        advertisePicture: 'https://m.360buyimg.com/mobilecms/s750x100_jfs/t1/111655/4/10853/142323/5ef22455Eb86abfc1/2bf122bb2e87d6e3.png.webp',
        recommend: [
            {
                image:'https://img11.360buyimg.com/n7/s150x150_jfs/t1/121037/30/18209/170419/5facd119E03a0b22d/af241a53f2fa525e.png.webp',
                mallPrice: '88',
                price: '99',
            },
            {
                image:'https://img11.360buyimg.com/n7/s150x150_jfs/t1/143406/3/12883/36132/5f9e6cb2E6107769f/a65d34fead7d0b68.jpg.dpg',
                mallPrice: '499',
                price: '549'
            },
            {
                image: 'https://img11.360buyimg.com/n7/s150x150_jfs/t1/129245/30/18378/144355/5fae1e92E15937648/ed0fd006f779980e.jpg.dpg',
                mallPrice: '1099',
                price: '1999'
            }
        ],
        floor1Title: {
            PICTURE_ADDRESS:'https://m.360buyimg.com/babel/jfs/t1/121393/12/8193/13791/5f21803fEf15a0ed8/97af271f0e157110.png'
        },
        floor2Title: {
            PICTURE_ADDRESS:'https://m.360buyimg.com/babel/jfs/t1/129362/26/8372/14137/5f21803fE7820f39b/c1e4fa0ff0db83fc.png'
        },
        floor3Title: {
            PICTURE_ADDRESS:'https://m.360buyimg.com/babel/jfs/t1/124369/1/8257/15618/5f21803fE8a8411c1/73433e3d8d06e226.png'
        },
        floor1: [
            {
                image:'https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/127631/6/18917/179019/5fb14e9aE2bb3da6e/58183430361b4832.jpg!q80.dpg.webp',
            },
            {
                image:'https://img12.360buyimg.com/cms/s276x276_jfs/t1/136980/34/15815/218786/5fb00070Eceacae5c/50980f3f3cf783d3.jpg!q70',
            },
            {
                image:'https://img12.360buyimg.com/cms/s276x276_jfs/t1/143954/15/8033/143767/5f5b473eE6dfb2a91/aa87963788b2dfba.jpg!q70',
            },
            {
                image:'https://img12.360buyimg.com/cms/s276x276_jfs/t1/116685/35/17829/163096/5f5d809bE08d84b0b/01c391a2497eea67.jpg!q70',
            },
            {
                image:'https://img12.360buyimg.com/cms/s276x276_jfs/t1/131754/2/6935/126498/5f350241E26d9b38f/ee8443e6bb0c5f21.jpg!q70',
            },
        ],
        floor2: [
            {
                image:'https://m.360buyimg.com/babel/s333x333_jfs/t1/120051/13/18788/196639/5fb07685E7323f2db/d4b7cd27e26e18dd.jpg!q70.dpg',
            },
            {
                image:'https://m.360buyimg.com/babel/s333x333_jfs/t1/102756/37/465/212869/5daeaeffEeaa7a2ec/d86517c7a5328314.jpg!q70.dpg',
            },
            {
                image:'https://m.360buyimg.com/babel/s333x333_jfs/t1/46777/13/13934/448759/5daeb029Ea352ba9b/c257f4fee6f87822.jpg!q70.dpg',
            },
            {
                image:'https://m.360buyimg.com/babel/s333x333_jfs/t1/120107/21/3102/82710/5eccd850E5e4e753e/2ffe7df85137191d.jpg!q70.dpg',
            },
            {
                image:'https://m.360buyimg.com/babel/s333x333_jfs/t1/144909/19/5884/231512/5f3ca540Efe8254b8/58751c6ac9f9ef6e.jpg!q70.dpg',
            },
        ],
        floor3: [
            {
                image:'https://m.360buyimg.com/babel/s333x333_jfs/t1/150831/19/4581/141253/5f97de45E5fdf8df7/d9f2a84055b03999.jpg!q70.dpg',
            },
            {
                image:'https://m.360buyimg.com/babel/s333x333_jfs/t1/123667/22/8624/280212/5f2776f1Ecf16079a/da1df19442d2d8fe.png',
            },
            {
                image:'https://img12.360buyimg.com/cms/s276x276_jfs/t1/127242/23/10750/136359/5f44d0fcE5f72ac61/0340cba914020d95.jpg',
            },
            {
                image:'https://img12.360buyimg.com/cms/s276x276_jfs/t1/127242/23/10750/136359/5f44d0fcE5f72ac61/0340cba914020d95.jpg',
            },
            {
                image:'https://img12.360buyimg.com/cms/s276x276_jfs/t1/140655/35/7720/116360/5f54a54aE612b36a5/c8718c60eb1a6f49.jpg',
            },
        ],
    })
})

//商城商品
app.get('/bx/homeBelowContent',(req,res) => {
    console.log(req.query);
    // 分页的参数
    let pageNo = req.query.pageNo;//页码
    let pageSize = req.query.pageSize; //每页显示的数量
    //由于我现在没有数据库 就用静态数据代替
    let MallData = [
        {
            id: 'JDX-001',
            image:'https://img14.360buyimg.com/mobilecms/s372x372_jfs/t1/87859/5/2187/114724/5dcbbbdfE8becb989/398eda0183ca4f9b.jpg!q70.dpg.webp',
            price:279,
            mallPrice: 260,
            name: '欧乐B电动牙刷 学生挚爱声波震动（含刷头*1）清纯白D100博朗精工 ',
        },
        {
            id: 'JDX-002',
            image:'https://img14.360buyimg.com/mobilecms/s372x372_jfs/t1/42861/7/6297/158480/5cfdfee5E955db185/05da0a05aaae41b4.jpg!q70.dpg.webp',
            price:75,
            mallPrice: 69,
            name: '罗技（Logitech）M185(M186) 鼠标 无线鼠标 办公鼠标 对称鼠标 黑色灰边 带无线2.4G接收器',
        },
        {
            id: 'JDX-003',
            image:'https://img13.360buyimg.com/mobilecms/s372x372_jfs/t29668/21/1258450502/135946/4842e125/5cdb8011N8e5342ed.jpg!q70.dpg.webp',
            price:2399,
            mallPrice: 2099,
            name: '欧乐B电动牙刷 3D声波礼品成人礼盒 情侣 iBrush9000Plus白色',
        },
        {
            id: 'JDX-004',
            image:'https://img12.360buyimg.com/mobilecms/s372x372_jfs/t1/89869/4/14748/150472/5e68dc33Eb639d837/67764a9af12905b6.jpg!q70.dpg.webp',
            price:720,
            mallPrice: 699,
            name: '小米 米家照片打印机 特惠套装',
        },
        {
            id: 'JDX-005',
            image:'https://img12.360buyimg.com/mobilecms/s372x372_jfs/t1/127970/17/2534/165886/5ec6781aEa11ab9aa/b71fd8e1c964af8a.jpg!q70.dpg.webp',
            price:3088,
            mallPrice: 2999,
            name: 'Insta360 ONE R摩托车专享礼盒（全景版）防抖360全景运动相机旅行Vlog口袋摄像机 数码 骑行摩托车行车记录 ',
        },
        {
            id: 'JDX-006',
            image:'https://img14.360buyimg.com/mobilecms/s372x372_jfs/t1/142719/12/444/104550/5ee1988cEd952bf51/74860b136a001168.jpg!q70.dpg.webp',
            price:240,
            mallPrice: 219,
            name: '小米手环5 NFC版 石墨黑 动态彩屏  智能运动监测 内置小爱同学语音遥控手机 伸手即可刷卡磁吸式充电',
        },
        {
            id: 'JDX-007',
            image:'https://img13.360buyimg.com/mobilecms/s372x372_jfs/t1/149262/10/14612/364373/5fb20fa6Ecebce832/5ca50135ac532cee.jpg!q70.dpg.webp',
            price:1448,
            mallPrice: 1299,
            name: '东方双狮(ORIENT)手表男全自动机械男表 日本原装进口防水男士腕表时尚商务夜光日历机械表礼盒 AB0002S0BD-旗舰专享【加购享一表两带】',
        },
        {
            id: 'JDX-008',
            image:'https://img30.360buyimg.com/mobilecms/s372x372_jfs/t1/152588/32/5663/106188/5fadee2bEb2dd6307/330e7679a36d0be0.jpg!q70.dpg.webp',
            price:2200,
            mallPrice: 1999,
            name: '欧乐B电动牙刷 充电式 iO云感刷卓越清洁版  iO微震科技非声波  成人情侣（黑色）',
        },
        {
            id: 'JDX-009',
            image:'https://img14.360buyimg.com/mobilecms/s372x372_jfs/t1/139297/24/8136/156569/5f5b5d09Efca0da2f/9ddbf309537ccce8.jpg!q70.dpg.webp',
            price:429,
            mallPrice: 399,
            name: '唱吧 精灵Q3无线麦克风蓝牙连接话筒音响一体家庭KTV全民K歌唱歌儿童娱乐无线话筒变声器  撫子花粉色 ',
        },
        {
            id: 'JDX-010',
            image:'https://img12.360buyimg.com/mobilecms/s372x372_jfs/t1/115444/13/10027/178696/5ee5b93aEf699c0de/a26ef2fbfcb1c764.jpg!q70.dpg.webp',
            price:25,
            mallPrice: 16.8,
            name: '小米手环4腕带小米手环5腕带三四代手环配件智能运动3nfc版表带硅胶个性卡通个性创意贴片腕带 墨绿配橙米奇 小米手环3/4NFC通用',
        },
    ];
    //每页的第一项
    let starts = pageNo*pageSize - pageSize;
    let finalResult = MallData.splice(starts, pageSize);
    console.log('输出结果：',finalResult);
    res.send({
        code: '0',
        message: 'suceess',
        data: finalResult,
        total: 10,
    })
})

//分类数据
app.get('/bx/getCategory',(req,res) =>{
  console.log('开始请求分类数据')
    res.send(CategoryResults)
})
//获取商品分类的id
app.get('/bx/getMallGoods',(req,res) => {
    console.log(req.query);
    //查询参数
    let CategoryId = req.query.CategoryId;
    let CategorySubId = req.query.CategorySubId;
    let page = req.query.page;
    let privateData = JSON.parse(JSON.stringify(allGoods));
    
    //过滤数据
    let targetArr = privateData.filter(item => item.CategoryId == CategoryId);
    
    //有分类ID时候二次分类查询
    if(CategorySubId && CategorySubId != '00') {
        targetArr = targetArr.filter(item => item.CategorySubId  == CategorySubId);
    }
    targetArr.map(ret => {
        delete ret.CategoryId
        delete ret.CategorySubId
    })
    // console.log(targetArr)
    res.send({
        code: '0',
        message: 'success',
        data: targetArr
    })
}) 

app.get('/user/getusers',(req,res) => {
    res.send({ name: 'pony',age: 27, hobby: 'coding' })
})
let a = 1;
//小车轨迹
app.post('/getCartPosition', (req, res) => {
  
    const { longitude, latitude  } = req.body;
    console.log(`当前小车的位置纬度：${longitude}经度：${latitude},次数：${a}`)
    a++;
    res.send({ message: 'success'})
})

//  var sqls = "SELECT visitorCompany,certificateType,certificateNum,visitorName,visitorAddress FROM ios_visitor LIMIT ?,?"
app.get('/api/getUserList', (req, res) => {
    //  WHERE name = 'pony'
    var sqls = "SELECT * FROM user";
    pool.query(sqls,[], (error, result) => {
        if (error) throw error;

        console.log(result);
        res.send({
            message: 'success',
            result: result,
            status: 'ok'
        })
    })
})
app.get('/data/getBoxOffice', (req, res) => {
    const data = [
        {
          "name": "你好，李焕英",
          "boxOffice": 3570.68
        },
        {
          "name": "唐人街探案3",
          "boxOffice": 1228.29
        },
        {
          "name": "刺杀小说家",
          "boxOffice": 690.94
        },
        {
          "name": "人潮汹涌",
          "boxOffice": 644.34
        },
        {
          "name": "熊出没·狂野大陆",
          "boxOffice": 409.9
        },
        {
          "name": "新神榜：哪吒重生",
          "boxOffice": 368.5
        },
        {
          "name": "侍神令",
          "boxOffice": 98.75
        }
      ];
      res.send(data)
})
/*测试navigator.sendBeacon()Api*/
app.post('/loginOut',(req, res) => {
    console.log(req)
})

/*尝试提取json*/
app.post('/getJsonData',(req, res) => {
    console.log(req.body)
    res.send({
        message: 'ok',
        success: true,
        result: req.body
    })
})