/* ziye 
github地址 https://github.com/ziye888
TG频道地址  https://t.me/ziyescript
TG交流群   https://t.me/joinchat/AAAAAE7XHm-q1-7Np-tF3g
boxjs链接  https://cdn.jsdelivr.net/gh/ziye888/JavaScript@main/Task/ziye.boxjs.json
转载请备注个名字，谢谢

⚠️书旗小说     手机号账号数据共通， 部分任务可叠加，此脚本包含2个app的所有任务（无阅读挑战赛）共0.8-1元
书旗普通版 支持多平台账号以及手机号登录     
点击  https://apps.apple.com/cn/app/id733689509 下载APP 或者Appstore 搜索书旗小说 

书旗极速版 支持手机号登录     
点击  https://apps.apple.com/cn/app/id1540723488 下载APP 或者Appstore 搜索书旗小说极速版

3.8  制作
3.12 完成
3.12-2 增加循环获取ck开关，默认关闭，调整阅读次数为20次
3.12-3 修复ck获取问题，修复ck方式一，可boxjs复制数据黏贴
3.12 - 4 修复ck获取问题
3.12-5 去除无用任务，精简ck至26条
3.14 修复极速版书城报错
3.15 修复收益获取ck显示
3.18 独立COOKIE增加boxjs复制会话模式
3.193.19 修复ac报错
4.6.11 单刷时长请设置SC为1，增加通知以及推送控制
4.6.19 精确时长ck判定，10秒以上才获取
5.5.21 修复循环获取ck，优化重写
5.6.21 优化循环获取ck，增加账号数显示且自动修改
5.7.16 适配新版本收益ck获取，新版本收益只需要body即可
5.8.22 增加提现提醒，默认关闭，自行打开
5.9.15 增加适配新版本时长

⚠️ 时间设置    7 0-23 * * *    每小时 1次就行 
⚠️一共2个软件  普通版15条 极速版11条  共      26个ck  👉 26条 Secrets 
有多少ck就运行多少任务   shuqiuserurlVal 用户名url 👉 这个ck必须获取
多账号换行

⚠️极速版视频 极速版阅读 极速版签到视频 极速版书城  大概率出现网络错误或者奖励下发失败，无解

第一步 添加 对应主机名

第二步 ⚠️添加header重写 获取header 

    shuqiuserurlVal👉 用户名url    点击福利
    shuqisprwurlVal👉  视频任务url  点击福利
    shuqicjyurlVal👉  获取抽奖页url  点击福利转转转
   
   
    shuqijsqdspyurlVal👉极速版签到视频页url  极速版点击福利 赚金币 每日签到  
    shuqijssprwurlVal👉  极速版视频任务url   极速版点击福利 赚金币
    shuqijsbookurlVal👉 极速版书城url        极速版点击福利 赚金币 浏览书城
    shuqijsbookbodyVal👉 极速版书城bodyy     极速版点击福利 赚金币 浏览书城
       
       
第三步 ⚠️注释header重写   添加body重写  获取body
  
    shuqisyurlVal👉  收益url       点击我的
    shuqisybodyVal👉 收益body      点击我的
    shuqispbodyVal👉 视频body      点击福利 看视频
    shuqiscbodyVal👉 时长body      点进一本书， 看个30秒，时长有效期一天，提现再获取
    shuqiydbodyVal👉 阅读body      点进一本书，右上角转一圈，如没有圈圈，建议放弃，或者用4.31版本
    shuqiqdbodyVal👉 签到body      点击福利 每日签到并成功签到
    shuqirwbodyVal👉 任务body      点击福利 
    shuqifxbodyVal👉  分享body     点击福利 邀请书友，分享或者假分享
    shuqijlbodyVal👉  获取奖励body   点击福利
    shuqisqjlbodyVal👉 收取奖励body  点击福利 收取奖励
    shuqicjcsbodyVal👉抽奖次数body   点击福利转转转 点击看视频抽奖
    shuqicjbodyVal👉  获取抽奖body   点击福利转转转 点击看视频抽奖
    
   
    shuqijsspbodyVal👉 极速版视频body   极速版点击福利 赚金币 看视频
    shuqijsydurlVal👉  极速版阅读url    极速版点进一本书 右上角转一圈，如没有圈圈，建议放弃，
    shuqijsydbodyVal👉 极速版阅读body   极速版点进一本书 右上角转一圈，如没有圈圈，建议放弃，
    shuqijsqdbodyVal👉 极速版签到body    极速版点击福利 赚金币 每日签到  成功签到
    shuqijsqdspbodyVal👉极速版签到视频body    极速版点击福利 赚金币 每日签到 成功第二次签到 
    shuqijsrwbodyVal👉 极速版任务body        极速版点击福利 赚金币
    shuqijsfxbodyVal👉  极速版分享body       极速版点击福利 赚金币 邀请书友，分享或者假分享
    
   
	
⚠️主机名以及header重写👇     header重写 和 body重写不可同时启用

############## 圈x 
hostname =ocean.shuqireader.com,activity-center-web.shuqireader.com,
#书旗小说获取header
#用户名  视频任务 抽奖页面 极速版签到视频页   极速版视频任务 极速版书城
https:\/\/.+\.shuqireader\.com\/* url script-request-header https://cdn.jsdelivr.net/gh/ziye888/JavaScript@main/Task/shuqi.js

hostname =*.shuqireader.com,
#书旗小说获取body
#阅读 签到  分享 奖励 收取奖励  抽奖次数 抽奖 视频 收益 任务 时长 极速版任务 极速版视频 极速版签到视频 极速版阅读 极速版签到 极速版分享 极速版书城
https:\/\/.+\.shuqireader\.com\/* url script-request-body https://cdn.jsdelivr.net/gh/ziye888/JavaScript@main/Task/shuqi.js

############## loon
hostname =ocean.shuqireader.com,activity-center-web.shuqireader.com,
#书旗小说获取header
#用户名  视频任务 抽奖页面 极速版签到视频页   极速版视频任务 极速版书城
http-request https:\/\/.+\.shuqireader\.com\/* url script-request-header script-path=https://cdn.jsdelivr.net/gh/ziye888/JavaScript@main/Task/shuqi.js, requires-header=true, tag=书旗小说获取header

hostname =*.shuqireader.com,
#书旗小说获取body
#阅读 签到  分享 奖励 收取奖励  抽奖次数 抽奖 视频 收益 任务 时长 极速版任务 极速版视频 极速版签到视频 极速版阅读 极速版签到 极速版分享 极速版书城
http-request https:\/\/.+\.shuqireader\.com\/* url script-request-body https://cdn.jsdelivr.net/gh/ziye888/JavaScript@main/Task/shuqi.js,requires-body=1,max-size=0, tag=书旗小说获取body

############## surge
hostname =ocean.shuqireader.com,activity-center-web.shuqireader.com,
#书旗小说获取header
#用户名  视频任务 抽奖页面 极速版签到视频页   极速版视频任务 极速版书城
书旗小说获取header = type=https:\/\/.+\.shuqireader\.com\/*,script-path=https://cdn.jsdelivr.net/gh/ziye888/JavaScript@main/Task/shuqi.js

hostname =*.shuqireader.com,
#书旗小说获取body
#阅读 签到  分享 奖励 收取奖励  抽奖次数 抽奖 视频 收益 任务 时长 极速版任务 极速版视频 极速版签到视频 极速版阅读 极速版签到 极速版分享 极速版书城
书旗小说获取header = type=https:\/\/.+\.shuqireader\.com\/*,requires-body=1,max-size=0,script-path=https://cdn.jsdelivr.net/gh/ziye888/JavaScript@main/Task/shuqi.js

*/
GXRZ = '5.9.15 增加适配新版本时长'
const $ = Env("书旗小说");
$.idx = ($.idx = ($.getval('shuqiSuffix') || '1') - 1) > 0 ? ($.idx + 1 + '') : ''; // 账号扩展字符
const notify = $.isNode() ? require("./sendNotify") : ``;
const COOKIE ={"id":"shuqi","name":"书旗小说APP","keys":["shuqiuserurl","shuqisyurl","shuqisybody","shuqispbody","shuqiscbody","shuqiydbody","shuqiqdbody","shuqirwbody","shuqifxbody","shuqisprwurl","shuqijlbody","shuqisqjlbody","shuqicjyurl","shuqicjcsbody","shuqicjbody","shuqijsspbody","shuqijsydurl","shuqijsydbody","shuqijsqdbody","shuqijsqdspyurl","shuqijsqdspbody","shuqijsrwbody","shuqijsfxbody","shuqijsbookurl","shuqijsbookbody","shuqijssprwurl","shuqiuserurl2","shuqisyurl2","shuqisybody2","shuqispbody2","shuqiscbody2","shuqiydbody2","shuqiqdbody2","shuqirwbody2","shuqifxbody2","shuqisprwurl2","shuqijlbody2","shuqisqjlbody2","shuqicjyurl2","shuqicjcsbody2","shuqicjbody2","shuqijsspbody2","shuqijsydurl2","shuqijsydbody2","shuqijsqdbody2","shuqijsqdspyurl2","shuqijsqdspbody2","shuqijsrwbody2","shuqijsfxbody2","shuqijsbookurl2","shuqijsbookbody2","shuqijssprwurl2","shuqiuserurl3","shuqisyurl3","shuqisybody3","shuqispbody3","shuqiscbody3","shuqiydbody3","shuqiqdbody3","shuqirwbody3","shuqifxbody3","shuqisprwurl3","shuqijlbody3","shuqisqjlbody3","shuqicjyurl3","shuqicjcsbody3","shuqicjbody3","shuqijsspbody3","shuqijsydurl3","shuqijsydbody3","shuqijsqdbody3","shuqijsqdspyurl3","shuqijsqdspbody3","shuqijsrwbody3","shuqijsfxbody3","shuqijsbookurl3","shuqijsbookbody3","shuqijssprwurl3","shuqiuserurl4","shuqisyurl4","shuqisybody4","shuqispbody4","shuqiscbody4","shuqiydbody4","shuqiqdbody4","shuqirwbody4","shuqifxbody4","shuqisprwurl4","shuqijlbody4","shuqisqjlbody4","shuqicjyurl4","shuqicjcsbody4","shuqicjbody4","shuqijsspbody4","shuqijsydurl4","shuqijsydbody4","shuqijsqdbody4","shuqijsqdspyurl4","shuqijsqdspbody4","shuqijsrwbody4","shuqijsfxbody4","shuqijsbookurl4","shuqijsbookbody4","shuqijssprwurl4","shuqiuserurl5","shuqisyurl5","shuqisybody5","shuqispbody5","shuqiscbody5","shuqiydbody5","shuqiqdbody5","shuqirwbody5","shuqifxbody5","shuqisprwurl5","shuqijlbody5","shuqisqjlbody5","shuqicjyurl5","shuqicjcsbody5","shuqicjbody5","shuqijsspbody5","shuqijsydurl5","shuqijsydbody5","shuqijsqdbody5","shuqijsqdspyurl5","shuqijsqdspbody5","shuqijsrwbody5","shuqijsfxbody5","shuqijsbookurl5","shuqijsbookbody5","shuqijssprwurl5","shuqiuserurl6","shuqisyurl6","shuqisybody6","shuqispbody6","shuqiscbody6","shuqiydbody6","shuqiqdbody6","shuqirwbody6","shuqifxbody6","shuqisprwurl6","shuqijlbody6","shuqisqjlbody6","shuqicjyurl6","shuqicjcsbody6","shuqicjbody6","shuqijsspbody6","shuqijsydurl6","shuqijsydbody6","shuqijsqdbody6","shuqijsqdspyurl6","shuqijsqdspbody6","shuqijsrwbody6","shuqijsfxbody6","shuqijsbookurl6","shuqijsbookbody6","shuqijssprwurl6","shuqiuserurl7","shuqisyurl7","shuqisybody7","shuqispbody7","shuqiscbody7","shuqiydbody7","shuqiqdbody7","shuqirwbody7","shuqifxbody7","shuqisprwurl7","shuqijlbody7","shuqisqjlbody7","shuqicjyurl7","shuqicjcsbody7","shuqicjbody7","shuqijsspbody7","shuqijsydurl7","shuqijsydbody7","shuqijsqdbody7","shuqijsqdspyurl7","shuqijsqdspbody7","shuqijsrwbody7","shuqijsfxbody7","shuqijsbookurl7","shuqijsbookbody7","shuqijssprwurl7","shuqiuserurl8","shuqisyurl8","shuqisybody8","shuqispbody8","shuqiscbody8","shuqiydbody8","shuqiqdbody8","shuqirwbody8","shuqifxbody8","shuqisprwurl8","shuqijlbody8","shuqisqjlbody8","shuqicjyurl8","shuqicjcsbody8","shuqicjbody8","shuqijsspbody8","shuqijsydurl8","shuqijsydbody8","shuqijsqdbody8","shuqijsqdspyurl8","shuqijsqdspbody8","shuqijsrwbody8","shuqijsfxbody8","shuqijsbookurl8","shuqijsbookbody8","shuqijssprwurl8","shuqiuserurl9","shuqisyurl9","shuqisybody9","shuqispbody9","shuqiscbody9","shuqiydbody9","shuqiqdbody9","shuqirwbody9","shuqifxbody9","shuqisprwurl9","shuqijlbody9","shuqisqjlbody9","shuqicjyurl9","shuqicjcsbody9","shuqicjbody9","shuqijsspbody9","shuqijsydurl9","shuqijsydbody9","shuqijsqdbody9","shuqijsqdspyurl9","shuqijsqdspbody9","shuqijsrwbody9","shuqijsfxbody9","shuqijsbookurl9","shuqijsbookbody9","shuqijssprwurl9","shuqiuserurl10","shuqisyurl10","shuqisybody10","shuqispbody10","shuqiscbody10","shuqiydbody10","shuqiqdbody10","shuqirwbody10","shuqifxbody10","shuqisprwurl10","shuqijlbody10","shuqisqjlbody10","shuqicjyurl10","shuqicjcsbody10","shuqicjbody10","shuqijsspbody10","shuqijsydurl10","shuqijsydbody10","shuqijsqdbody10","shuqijsqdspyurl10","shuqijsqdspbody10","shuqijsrwbody10","shuqijsfxbody10","shuqijsbookurl10","shuqijsbookbody10","shuqijssprwurl10","shuqiuserurl11","shuqisyurl11","shuqisybody11","shuqispbody11","shuqiscbody11","shuqiydbody11","shuqiqdbody11","shuqirwbody11","shuqifxbody11","shuqisprwurl11","shuqijlbody11","shuqisqjlbody11","shuqicjyurl11","shuqicjcsbody11","shuqicjbody11","shuqijsspbody11","shuqijsydurl11","shuqijsydbody11","shuqijsqdbody11","shuqijsqdspyurl11","shuqijsqdspbody11","shuqijsrwbody11","shuqijsfxbody11","shuqijsbookurl11","shuqijsbookbody11","shuqijssprwurl11","shuqiuserurl12","shuqisyurl12","shuqisybody12","shuqispbody12","shuqiscbody12","shuqiydbody12","shuqiqdbody12","shuqirwbody12","shuqifxbody12","shuqisprwurl12","shuqijlbody12","shuqisqjlbody12","shuqicjyurl12","shuqicjcsbody12","shuqicjbody12","shuqijsspbody12","shuqijsydurl12","shuqijsydbody12","shuqijsqdbody12","shuqijsqdspyurl12","shuqijsqdspbody12","shuqijsrwbody12","shuqijsfxbody12","shuqijsbookurl12","shuqijsbookbody12","shuqijssprwurl12","shuqiuserurl13","shuqisyurl13","shuqisybody13","shuqispbody13","shuqiscbody13","shuqiydbody13","shuqiqdbody13","shuqirwbody13","shuqifxbody13","shuqisprwurl13","shuqijlbody13","shuqisqjlbody13","shuqicjyurl13","shuqicjcsbody13","shuqicjbody13","shuqijsspbody13","shuqijsydurl13","shuqijsydbody13","shuqijsqdbody13","shuqijsqdspyurl13","shuqijsqdspbody13","shuqijsrwbody13","shuqijsfxbody13","shuqijsbookurl13","shuqijsbookbody13","shuqijssprwurl13","shuqiuserurl14","shuqisyurl14","shuqisybody14","shuqispbody14","shuqiscbody14","shuqiydbody14","shuqiqdbody14","shuqirwbody14","shuqifxbody14","shuqisprwurl14","shuqijlbody14","shuqisqjlbody14","shuqicjyurl14","shuqicjcsbody14","shuqicjbody14","shuqijsspbody14","shuqijsydurl14","shuqijsydbody14","shuqijsqdbody14","shuqijsqdspyurl14","shuqijsqdspbody14","shuqijsrwbody14","shuqijsfxbody14","shuqijsbookurl14","shuqijsbookbody14","shuqijssprwurl14","shuqiuserurl15","shuqisyurl15","shuqisybody15","shuqispbody15","shuqiscbody15","shuqiydbody15","shuqiqdbody15","shuqirwbody15","shuqifxbody15","shuqisprwurl15","shuqijlbody15","shuqisqjlbody15","shuqicjyurl15","shuqicjcsbody15","shuqicjbody15","shuqijsspbody15","shuqijsydurl15","shuqijsydbody15","shuqijsqdbody15","shuqijsqdspyurl15","shuqijsqdspbody15","shuqijsrwbody15","shuqijsfxbody15","shuqijsbookurl15","shuqijsbookbody15","shuqijssprwurl15","shuqiuserurl16","shuqisyurl16","shuqisybody16","shuqispbody16","shuqiscbody16","shuqiydbody16","shuqiqdbody16","shuqirwbody16","shuqifxbody16","shuqisprwurl16","shuqijlbody16","shuqisqjlbody16","shuqicjyurl16","shuqicjcsbody16","shuqicjbody16","shuqijsspbody16","shuqijsydurl16","shuqijsydbody16","shuqijsqdbody16","shuqijsqdspyurl16","shuqijsqdspbody16","shuqijsrwbody16","shuqijsfxbody16","shuqijsbookurl16","shuqijsbookbody16","shuqijssprwurl16","shuqiuserurl17","shuqisyurl17","shuqisybody17","shuqispbody17","shuqiscbody17","shuqiydbody17","shuqiqdbody17","shuqirwbody17","shuqifxbody17","shuqisprwurl17","shuqijlbody17","shuqisqjlbody17","shuqicjyurl17","shuqicjcsbody17","shuqicjbody17","shuqijsspbody17","shuqijsydurl17","shuqijsydbody17","shuqijsqdbody17","shuqijsqdspyurl17","shuqijsqdspbody17","shuqijsrwbody17","shuqijsfxbody17","shuqijsbookurl17","shuqijsbookbody17","shuqijssprwurl17","shuqiuserurl18","shuqisyurl18","shuqisybody18","shuqispbody18","shuqiscbody18","shuqiydbody18","shuqiqdbody18","shuqirwbody18","shuqifxbody18","shuqisprwurl18","shuqijlbody18","shuqisqjlbody18","shuqicjyurl18","shuqicjcsbody18","shuqicjbody18","shuqijsspbody18","shuqijsydurl18","shuqijsydbody18","shuqijsqdbody18","shuqijsqdspyurl18","shuqijsqdspbody18","shuqijsrwbody18","shuqijsfxbody18","shuqijsbookurl18","shuqijsbookbody18","shuqijssprwurl18","shuqiuserurl19","shuqisyurl19","shuqisybody19","shuqispbody19","shuqiscbody19","shuqiydbody19","shuqiqdbody19","shuqirwbody19","shuqifxbody19","shuqisprwurl19","shuqijlbody19","shuqisqjlbody19","shuqicjyurl19","shuqicjcsbody19","shuqicjbody19","shuqijsspbody19","shuqijsydurl19","shuqijsydbody19","shuqijsqdbody19","shuqijsqdspyurl19","shuqijsqdspbody19","shuqijsrwbody19","shuqijsfxbody19","shuqijsbookurl19","shuqijsbookbody19","shuqijssprwurl19","shuqiuserurl20","shuqisyurl20","shuqisybody20","shuqispbody20","shuqiscbody20","shuqiydbody20","shuqiqdbody20","shuqirwbody20","shuqifxbody20","shuqisprwurl20","shuqijlbody20","shuqisqjlbody20","shuqicjyurl20","shuqicjcsbody20","shuqicjbody20","shuqijsspbody20","shuqijsydurl20","shuqijsydbody20","shuqijsqdbody20","shuqijsqdspyurl20","shuqijsqdspbody20","shuqijsrwbody20","shuqijsfxbody20","shuqijsbookurl20","shuqijsbookbody20","shuqijssprwurl20"],"author":"@ziye","settings":[{"id":"shuqiSuffix","name":"当前账号","val":"14","type":"number","desc":"当前抓取ck记录的账号序号，如：1、2、3、"},{"id":"shuqiCount","name":"账号个数","val":"15","type":"number","desc":"指定任务最多跑几个账号，根据抓取的账号数据个数来设值"},{"id":"shuqiXH","name":"循环获取CK","val":"1","type":"number","desc":"0关闭 1开启,默认关闭"},{"id":"shuqiSC","name":"单刷时长控制","val":"0","type":"number","desc":"0关闭 1开启,默认关闭"},{"id":"shuqiTXTX","name":"提现提醒","val":"10","type":"number","desc":"0关闭 设置余额大于多少提醒"},{"id":"shuqinotifyttt","name":"推送控制","val":"1","type":"number","desc":"0关闭，1推送,默认12点以及23点推送"},{"id":"shuqinotifyInterval","name":"通知控制","val":"2","type":"number","desc":"0关闭，1为 所有通知，2为 12，23 点通知，3为 6，12，18，23 点通知 "},{"id":"shuqiMinutes","name":"推送-通知 分钟控制","val":"59","type":"number","desc":"推送以及通知控制在什么分钟段，可设置0-59,默认0到10"}],"repo":"https://cdn.jsdelivr.net/gh/ziye888/JavaScript@main/Task/shuqi.js","icons":["https://cdn.jsdelivr.net/gh/ziye888/JavaScript@main/Task/shuqi.png","https://cdn.jsdelivr.net/gh/ziye888/JavaScript@main/Task/shuqi.png"],"script":"https://cdn.jsdelivr.net/gh/ziye888/JavaScript@main/Task/shuqi.js","icon":"https://cdn.jsdelivr.net/gh/ziye888/JavaScript@main/Task/shuqi.png","favIcon":"mdi-star","favIconColor":"primary","datas":[{"key":"shuqiuserurl","val":"https://ocean.shuqireader.com/api/jaccount/accountapi/v1/sapi/account/getBindinfo?userId=2129115117&sqSv=1.0&timestamp=1624074946&sign=1cf6c41b4d2486767f630bc353263298&key=sq_h5_gateway"},{"key":"shuqisyurl","val":"https://render.shuqireader.com/load/resource?sdk=13.2&utdid=YM1Qt0mfcJUDAH9pRkEixVl1&ustatus=0&first_placeid=111111&net_env=3g&placeid=111111&user_id=2129115117&sn=379785A119E848FE315DB94C23905F5DB639641E&umidtoken=YM1Qt0mfcJUDAH9pRkEixVl1&msv=8.0.0&brand=Apple&imei=8305A13A58301B21D41BC532A5C4159B17A47B46&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=iOS&ver=210301&mod=iPhone11&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=3FC5A6AE-474D-4389-8486-B9FAFD4FED6A"},{"key":"shuqisybody","val":"appVer=4.3.6.0&imei=8305A13A58301B21D41BC532A5C4159B17A47B46&isNewUser=1&params=%7B%22resources%22%3A%7B%22ShuqiVipEntry%22%3A%7B%7D%2C%22personalCardConfig%22%3A%7B%7D%7D%7D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=fc98f79fa56681e362a3dd214ab9365f&sn=379785A119E848FE315DB94C23905F5DB639641E&soft_id=21&timestamp=1624074904&user_id=2129115117&ver=210301"},{"key":"shuqispbody","val":"_public=skinId%3D999%26idfa%3D3FC5A6AE-474D-4389-8486-B9FAFD4FED6A%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26umidtoken%3DYM1Qt0mfcJUDAH9pRkEixVl1%26user_id%3D2129115117%26sn%3D379785A119E848FE315DB94C23905F5DB639641E%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D8305A13A58301B21D41BC532A5C4159B17A47B46%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhone11%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYM1Qt0mfcJUDAH9pRkEixVl1%26utype%3Dpre_vip%26sdk%3D13.2&deliveryId=525&key=sq_app_ad&miniWua=HHnB_ygTnoqS41BOVJ1G3ZucC%2BucW3p97l%2BW41T4pPdVzdFQ%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=626&sign=D5FCE62988C62CBEC42742CEB8A3FA92&timestamp=1624074922&userId=2129115117&user_id=2129115117&wua=HIVW_lyG/uZSX6awrJEesxYQy26BrIqlMb9TWQWZid1IpENZpzMR/sBQY2RGXzqDkQYy3PBhDvzV2xwOQVKzb2wMk3jDH/p35JFFlKo9KkkDgVEChD06UhzG0/AD7E9tga/m/4g%2B%2B3Hfpr8cgsK1uSqCZyWC%2B88cU0VIgbIhetnpOAX4REFF%2B4Znd8b%2Bke0r8%2BtZvZhfiwUjnfZdBjtYEFOS3ixPmCJHld4z0mmje%2B%2BbO%2B1I%3D"},{"key":"shuqiscbody","val":""},{"key":"shuqiydbody","val":""},{"key":"shuqiqdbody","val":"clientTimestamp=1624074914&position=501&userId=2129115117&signInType=1&wua=HIVW_ER%2BIUOMraCm%2BmEj9nIapich7AvPFMNaBMvTDRiC%2BCWZTdfiYa5bCyxXves%2B3tURWZ5L8FGB18Bn3dwdGnEDVEJMS0MpxFXenovckxC7oMLT1vIpAVdvHZuwvLT%2BH2Q%2FYauu8GJNE2DCQcxRgGcco4JQOuryVoB52Fy5MVjuJxj21pLK%2FTBjBssVsZ20e7vMYthitfZj6fquk1kcivhOUhbvfCOLi3wVbLEnPpMXOSog%3D&ua=&miniWua=HHnB_yqABaXdh2I1%2BWk%2F3KSbBqPq03S6JDKXcg4peAwZo%2FQg%3D&umidtoken=YM1Qt0mfcJUDAH9pRkEixVl1&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&sign=692ac68e819953f80ed835d082ce245d&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.2%26utdid%3DYM1Qt0mfcJUDAH9pRkEixVl1%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2129115117%26sn%3D379785A119E848FE315DB94C23905F5DB639641E%26umidtoken%3DYM1Qt0mfcJUDAH9pRkEixVl1%26msv%3D8.0.0%26brand%3DApple%26imei%3D8305A13A58301B21D41BC532A5C4159B17A47B46%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone11%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D3FC5A6AE-474D-4389-8486-B9FAFD4FED6A"},{"key":"shuqirwbody","val":"serviceWorkerOn=1&stopPullRefresh=1&from=ShuqiTab&upf=20368&sdk=13.2&utdid=YM1Qt0mfcJUDAH9pRkEixVl1&ustatus=0&first_placeid=111111&net_env=3g&placeid=111111&user_id=2129115117&sn=379785A119E848FE315DB94C23905F5DB639641E&umidtoken=YM1Qt0mfcJUDAH9pRkEixVl1&msv=8.0.0&brand=Apple&imei=8305A13A58301B21D41BC532A5C4159B17A47B46&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=1&ver=210301&mod=iPhone11&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=3FC5A6AE-474D-4389-8486-B9FAFD4FED6A&params=%7B%22resources%22%3A%7B%22ShuqiBsDailyTask%22%3A%7B%7D%7D%7D&userId=2129115117&placeId=111111&timestamp=1624074926&sqSv=1.0&sign=70649990613b148b58b1d943ea094230&key=sq_h5_gateway&_public="},{"key":"shuqifxbody","val":""},{"key":"shuqisprwurl","val":"https://ocean.shuqireader.com/api/ad/adserver/v1/api/getAdInfo?appVer=4.3.6.0&placeId=111111&platform=iOS&requestSrc=h5&resourceId=626&timestamp=1624074944&user_id=2129115117&sqSv=1.0&sign=befc7a1a0cfa479aa162343a4a307363&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.2%26utdid%3DYM1Qt0mfcJUDAH9pRkEixVl1%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2129115117%26sn%3D379785A119E848FE315DB94C23905F5DB639641E%26umidtoken%3DYM1Qt0mfcJUDAH9pRkEixVl1%26msv%3D8.0.0%26brand%3DApple%26imei%3D8305A13A58301B21D41BC532A5C4159B17A47B46%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone11%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D3FC5A6AE-474D-4389-8486-B9FAFD4FED6A"},{"key":"shuqijlbody","val":"requestSrc=h5&userId=2129115117&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624074926&sqSv=1.0&sign=fa25585c1d3ba97bd50d50d96e0a527d&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.2%26utdid%3DYM1Qt0mfcJUDAH9pRkEixVl1%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2129115117%26sn%3D379785A119E848FE315DB94C23905F5DB639641E%26umidtoken%3DYM1Qt0mfcJUDAH9pRkEixVl1%26msv%3D8.0.0%26brand%3DApple%26imei%3D8305A13A58301B21D41BC532A5C4159B17A47B46%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone11%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D3FC5A6AE-474D-4389-8486-B9FAFD4FED6A"},{"key":"shuqisqjlbody","val":"src=&userId=2129115117&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624074918&sqSv=1.0&sign=05dcfd31082ff8f633e86a82cc8ec8b6&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.2%26utdid%3DYM1Qt0mfcJUDAH9pRkEixVl1%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2129115117%26sn%3D379785A119E848FE315DB94C23905F5DB639641E%26umidtoken%3DYM1Qt0mfcJUDAH9pRkEixVl1%26msv%3D8.0.0%26brand%3DApple%26imei%3D8305A13A58301B21D41BC532A5C4159B17A47B46%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone11%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D3FC5A6AE-474D-4389-8486-B9FAFD4FED6A"},{"key":"shuqicjyurl","val":"https://ocean.shuqireader.com/api/activity/activity/v1/lottery/info?timestamp=1624074947&userId=2129115117&activityId=311&sqSv=1.0&sign=fb28081ad298684857136c0aa8ebcc9f&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.2%26utdid%3DYM1Qt0mfcJUDAH9pRkEixVl1%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2129115117%26sn%3D379785A119E848FE315DB94C23905F5DB639641E%26umidtoken%3DYM1Qt0mfcJUDAH9pRkEixVl1%26msv%3D8.0.0%26brand%3DApple%26imei%3D8305A13A58301B21D41BC532A5C4159B17A47B46%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone11%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D3FC5A6AE-474D-4389-8486-B9FAFD4FED6A"},{"key":"shuqicjcsbody","val":"_public=skinId%3D999%26idfa%3D3FC5A6AE-474D-4389-8486-B9FAFD4FED6A%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26umidtoken%3DYM1Qt0mfcJUDAH9pRkEixVl1%26user_id%3D2129115117%26sn%3D379785A119E848FE315DB94C23905F5DB639641E%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D8305A13A58301B21D41BC532A5C4159B17A47B46%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhone11%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYM1Qt0mfcJUDAH9pRkEixVl1%26utype%3Dpre_vip%26sdk%3D13.2&deliveryId=711&key=sq_app_ad&miniWua=HHnB_htsnnExNxldSJKFh0kt3KgdGqGb1t/jAvP0D%2Bx6d3UU%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=703&sign=6407E8BD3C7F53F21487D7A07A292164&timestamp=1624074930&userId=2129115117&user_id=2129115117&wua=HIVW_RyURxVo09OqxHzDWnuTvEaIPkRllOjCu8n8wooHNU1vpP0NC6X4jpECfhoOE4UdsZOvBK8CTJtY9t0uPEKCS4CywPUc9LIT5q/DLkuz8Hflfq5YlM6Cvxqov/AP9KQQUzDEFluTM4BXsp3reCdM19kJ4loDvmuCne42j9PCfA676dVhn/HUewPtmdF0uA7xNFTkcpgEce2%2BtOP82hr2a3T3uStA7Us9jpj5sv3ULjA0%3D"},{"key":"shuqicjbody","val":"wua=HIVW_G8SgOed94nTc2Ok7bab2GM1n2L2McOz4SRuSVPd5eqTuvorjY2YlztdD%2BL%2F%2Bimh%2Fo%2FfP%2FIFv6g121Zwo3hdz%2B%2BWmhGBiYE5libsYUuK1Hshgg7mfqoDJq2M47v0IiKbE7HcBycRjQK21bjFrBUwfZ8VfJHhBkvwaN6j0%2BiRJ0nL%2FcGaepqWdYMjZd%2B08LGMz6ZLIUsBKC91E8BceOP7eytPXSIMMV%2Bm2VGCvyQpqq3Q%3D&ua=&userId=2129115117&umidtoken=YM1Qt0mfcJUDAH9pRkEixVl1&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&asac=2A20C07RJ9F51AOEFSNHDR&timestamp=1624074934&activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&sqSv=1.0&sign=617c5d990cfcbd781a0df7052e3e534a&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.2%26utdid%3DYM1Qt0mfcJUDAH9pRkEixVl1%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2129115117%26sn%3D379785A119E848FE315DB94C23905F5DB639641E%26umidtoken%3DYM1Qt0mfcJUDAH9pRkEixVl1%26msv%3D8.0.0%26brand%3DApple%26imei%3D8305A13A58301B21D41BC532A5C4159B17A47B46%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone11%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D3FC5A6AE-474D-4389-8486-B9FAFD4FED6A"},{"key":"shuqijsspbody","val":""},{"key":"shuqijsydurl","val":""},{"key":"shuqijsydbody","val":""},{"key":"shuqijsqdbody","val":""},{"key":"shuqijsqdspyurl","val":""},{"key":"shuqijsqdspbody","val":""},{"key":"shuqijsrwbody","val":""},{"key":"shuqijsfxbody","val":""},{"key":"shuqijsbookurl","val":""},{"key":"shuqijsbookbody","val":""},{"key":"shuqijssprwurl","val":""},{"key":"shuqiuserurl2","val":"https://ocean.shuqireader.com/api/jaccount/accountapi/v1/sapi/account/getBindinfo?userId=2128866775&sqSv=1.0&timestamp=1624075014&sign=a71f9a1c7fe94272cc60609daa52aa5d&key=sq_h5_gateway"},{"key":"shuqisyurl2","val":"https://render.shuqireader.com/load/resource?sdk=13.5&utdid=YM1Qv8KpRu8DACZp2GlvLqWP&ustatus=0&first_placeid=111111&net_env=wifi&placeid=111111&user_id=2128866775&sn=229BC51B1172D0B50C817D115F63B678DEE4210B&umidtoken=YM1Qv8KpRu8DACZp2GlvLqWP&msv=8.0.0&brand=Apple&imei=C67A4881AD39F240F22E4472D8CDBF6E8CAEB05E&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=iOS&ver=210301&mod=UnknowniPad&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=808FC4A8-9886-41AA-BAE8-5B617DE96265"},{"key":"shuqisybody2","val":"appVer=4.3.6.0&imei=C67A4881AD39F240F22E4472D8CDBF6E8CAEB05E&isNewUser=1&params=%7B%22resources%22%3A%7B%22ShuqiVipEntry%22%3A%7B%7D%2C%22personalCardConfig%22%3A%7B%7D%7D%7D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=aa82129ee676b7acc835f917e3a0812a&sn=229BC51B1172D0B50C817D115F63B678DEE4210B&soft_id=21&timestamp=1624074961&user_id=2128866775&ver=210301"},{"key":"shuqispbody2","val":"_public=skinId%3D999%26idfa%3D808FC4A8-9886-41AA-BAE8-5B617DE96265%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26umidtoken%3DYM1Qv8KpRu8DACZp2GlvLqWP%26user_id%3D2128866775%26sn%3D229BC51B1172D0B50C817D115F63B678DEE4210B%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3DC67A4881AD39F240F22E4472D8CDBF6E8CAEB05E%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYM1Qv8KpRu8DACZp2GlvLqWP%26utype%3Dpre_vip%26sdk%3D13.5&deliveryId=525&key=sq_app_ad&miniWua=HHnB_v9%2B1VGfOdkmDr3BHCLBsoM9jxTGWRKs6s3HrNaTE5Qs%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=626&sign=6077F1E0C694490926700D3F7B4788AA&timestamp=1624074978&userId=2128866775&user_id=2128866775&wua=HIVW_x8wb%2BpFhADgKblUhQn0uLWKDifMpoR2g7b4cqgB67bdm1Vd8biFmfZeJ5lhEOU4JeFyLv75NV8gxuBxzi83wV5bYnVeTk%2BlZRx%2Bo9TV5nNQKjT09hvRTZ1uUp%2B%2BU7LrkV4arzwI0aSOQ10w0KHeR%2Bgms/0WPZqjecj3S3glTOQ7K2u6KHvLYO24JTkcfQp2XX0m6501GTLnXH2n5h/vi%2BMlCSoeqEXcobtPXfqFV9Nk%3D"},{"key":"shuqiscbody2","val":""},{"key":"shuqiydbody2","val":""},{"key":"shuqiqdbody2","val":"clientTimestamp=1624074971&position=501&userId=2128866775&signInType=1&wua=HIVW_KbQl0jClU9w%2FcXGIMGRpwIF4%2Fagb9zsFjp38Rh6Vd%2BCHgvpvpOOpos3%2BNHK%2BxQD3k96xbgDkMOeDTxyQhXERJiC4f6enEoaQXoJlDFdb0TdMFaSHWKwpr0TdF4PUc4w7LgjG7fBd%2FV%2B%2FTCmfUMJ5vEcEGK1W88n8gi%2FX3E%2FESELpc891lfC5wE9IOQdgPXHMOYBH%2FQtA%2Br5g6cl5C7qJgHQnmOAZa90ppP1Pah5lMe8%3D&ua=&miniWua=HHnB_mCwcryLyac9sulR4yPflUG4wHCE%2FwUhXGhX2lZ4bnbY%3D&umidtoken=YM1Qv8KpRu8DACZp2GlvLqWP&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&sign=059fc908712df1294c71fb7f3ae5c5b2&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.5%26utdid%3DYM1Qv8KpRu8DACZp2GlvLqWP%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2128866775%26sn%3D229BC51B1172D0B50C817D115F63B678DEE4210B%26umidtoken%3DYM1Qv8KpRu8DACZp2GlvLqWP%26msv%3D8.0.0%26brand%3DApple%26imei%3DC67A4881AD39F240F22E4472D8CDBF6E8CAEB05E%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D808FC4A8-9886-41AA-BAE8-5B617DE96265"},{"key":"shuqirwbody2","val":"serviceWorkerOn=1&stopPullRefresh=1&from=ShuqiTab&upf=20368&sdk=13.5&utdid=YM1Qv8KpRu8DACZp2GlvLqWP&ustatus=0&first_placeid=111111&net_env=wifi&placeid=111111&user_id=2128866775&sn=229BC51B1172D0B50C817D115F63B678DEE4210B&umidtoken=YM1Qv8KpRu8DACZp2GlvLqWP&msv=8.0.0&brand=Apple&imei=C67A4881AD39F240F22E4472D8CDBF6E8CAEB05E&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=1&ver=210301&mod=UnknowniPad&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=808FC4A8-9886-41AA-BAE8-5B617DE96265&params=%7B%22resources%22%3A%7B%22ShuqiBsDailyTask%22%3A%7B%7D%7D%7D&userId=2128866775&placeId=111111&timestamp=1624074983&sqSv=1.0&sign=70bb8ece0d1d12c67e830d3819a8d357&key=sq_h5_gateway&_public="},{"key":"shuqifxbody2","val":""},{"key":"shuqisprwurl2","val":"https://ocean.shuqireader.com/api/ad/adserver/v1/api/getAdInfo?appVer=4.3.6.0&placeId=111111&platform=iOS&requestSrc=h5&resourceId=626&timestamp=1624075012&user_id=2128866775&sqSv=1.0&sign=b1899769e0049ee9ef5f3326c8ff85e4&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.5%26utdid%3DYM1Qv8KpRu8DACZp2GlvLqWP%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2128866775%26sn%3D229BC51B1172D0B50C817D115F63B678DEE4210B%26umidtoken%3DYM1Qv8KpRu8DACZp2GlvLqWP%26msv%3D8.0.0%26brand%3DApple%26imei%3DC67A4881AD39F240F22E4472D8CDBF6E8CAEB05E%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D808FC4A8-9886-41AA-BAE8-5B617DE96265"},{"key":"shuqijlbody2","val":"requestSrc=h5&userId=2128866775&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624074983&sqSv=1.0&sign=a64c246d075f38ab6165d5de31fbf2a4&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.5%26utdid%3DYM1Qv8KpRu8DACZp2GlvLqWP%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2128866775%26sn%3D229BC51B1172D0B50C817D115F63B678DEE4210B%26umidtoken%3DYM1Qv8KpRu8DACZp2GlvLqWP%26msv%3D8.0.0%26brand%3DApple%26imei%3DC67A4881AD39F240F22E4472D8CDBF6E8CAEB05E%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D808FC4A8-9886-41AA-BAE8-5B617DE96265"},{"key":"shuqisqjlbody2","val":"src=&userId=2128866775&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624074977&sqSv=1.0&sign=55d9fd2d17c6193b00b7e75f52f8dccc&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.5%26utdid%3DYM1Qv8KpRu8DACZp2GlvLqWP%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2128866775%26sn%3D229BC51B1172D0B50C817D115F63B678DEE4210B%26umidtoken%3DYM1Qv8KpRu8DACZp2GlvLqWP%26msv%3D8.0.0%26brand%3DApple%26imei%3DC67A4881AD39F240F22E4472D8CDBF6E8CAEB05E%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D808FC4A8-9886-41AA-BAE8-5B617DE96265"},{"key":"shuqicjyurl2","val":"https://ocean.shuqireader.com/api/activity/activity/v1/lottery/info?timestamp=1624075015&userId=2128866775&activityId=311&sqSv=1.0&sign=7ac203bb6327c73151292e49405bdc6c&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.5%26utdid%3DYM1Qv8KpRu8DACZp2GlvLqWP%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2128866775%26sn%3D229BC51B1172D0B50C817D115F63B678DEE4210B%26umidtoken%3DYM1Qv8KpRu8DACZp2GlvLqWP%26msv%3D8.0.0%26brand%3DApple%26imei%3DC67A4881AD39F240F22E4472D8CDBF6E8CAEB05E%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D808FC4A8-9886-41AA-BAE8-5B617DE96265"},{"key":"shuqicjcsbody2","val":"_public=skinId%3D999%26idfa%3D808FC4A8-9886-41AA-BAE8-5B617DE96265%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26umidtoken%3DYM1Qv8KpRu8DACZp2GlvLqWP%26user_id%3D2128866775%26sn%3D229BC51B1172D0B50C817D115F63B678DEE4210B%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3DC67A4881AD39F240F22E4472D8CDBF6E8CAEB05E%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYM1Qv8KpRu8DACZp2GlvLqWP%26utype%3Dpre_vip%26sdk%3D13.5&deliveryId=711&key=sq_app_ad&miniWua=HHnB_Hwv2MVEIg5mmTNj/Ln78vSib6VL/2B/U7IVRJwEhaFs%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=703&sign=58E23800A1ECBF344BAE81290B75415F&timestamp=1624074997&userId=2128866775&user_id=2128866775&wua=HIVW_2qnMb4LIXjk0B6XFHUha2BG%2BnfmfRFBPdwPAvOUUK2Vv%2BvRF8YgHEekUja5XE/7UUt139QcGbEMw1kobCGmgUywNRqh1UC%2B3wenuqXM3vugXk4qs18rs7qpHKrerus59SZvEUoLl%2BIuHI%2BlB7vDMNPrRiomCbzJ0sN5%2BDJ0Os%2Bd%2B7Z4iywFnlWqh1D66A6OyH3mPuLXJOcqxVtDNH1SJh6f2JfnZYLkDaNhOpF1k9Bk%3D"},{"key":"shuqicjbody2","val":"wua=HIVW_D9Y67uDW8hu3plCVVcHHfYWzQEouOTWq5P5km9CBL0VVnlQI35fU7pfOzkEO4H7V9iV5bslnNEgS7Fk%2FZuBPtOSgkFueFzXq2OhkL2yd6YTWBxM9sFeOz7eRWO84T06kPE4VqRDP1XFivuai2vW23UErZ79bsxScL%2FkzftjMKfjZgk2xvSPHNDTG9SLZlaS2W7METelmzpJ0bUqqWIw8FVIr%2FXm3Y0z1dwzm%2F%2Bz6Hos%3D&ua=&userId=2128866775&umidtoken=YM1Qv8KpRu8DACZp2GlvLqWP&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&asac=2A20C07RJ9F51AOEFSNHDR&timestamp=1624075002&activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&sqSv=1.0&sign=45d9681c6cf007ecacfbf632b218b47c&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.5%26utdid%3DYM1Qv8KpRu8DACZp2GlvLqWP%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2128866775%26sn%3D229BC51B1172D0B50C817D115F63B678DEE4210B%26umidtoken%3DYM1Qv8KpRu8DACZp2GlvLqWP%26msv%3D8.0.0%26brand%3DApple%26imei%3DC67A4881AD39F240F22E4472D8CDBF6E8CAEB05E%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D808FC4A8-9886-41AA-BAE8-5B617DE96265"},{"key":"shuqijsspbody2","val":""},{"key":"shuqijsydurl2","val":""},{"key":"shuqijsydbody2","val":""},{"key":"shuqijsqdbody2","val":""},{"key":"shuqijsqdspyurl2","val":""},{"key":"shuqijsqdspbody2","val":""},{"key":"shuqijsrwbody2","val":""},{"key":"shuqijsfxbody2","val":""},{"key":"shuqijsbookurl2","val":""},{"key":"shuqijsbookbody2","val":""},{"key":"shuqijssprwurl2","val":""},{"key":"shuqiuserurl3","val":"https://ocean.shuqireader.com/api/jaccount/accountapi/v1/sapi/account/getBindinfo?userId=2127472107&sqSv=1.0&timestamp=1624075095&sign=61463618922921fc16ca900b98731fb4&key=sq_h5_gateway"},{"key":"shuqisyurl3","val":"https://render.shuqireader.com/load/resource?sdk=13.2.2&utdid=YM1Qv8KpRu8DACZp2GlvLqWP&ustatus=0&first_placeid=111111&net_env=3g&placeid=111111&user_id=2127472107&sn=B8AD2BEC908FC88B5539B9A4319174C371953381&umidtoken=YM1Qv8KpRu8DACZp2GlvLqWP&msv=8.0.0&brand=Apple&imei=A9D560CBF62C3D90F22E36C3D4EC60CF2FDD8C71&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=iOS&ver=210301&mod=iPhoneSE&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=D779B18D-5E9A-4240-B43E-746B78D5A3EC"},{"key":"shuqisybody3","val":"appVer=4.3.6.0&imei=A9D560CBF62C3D90F22E36C3D4EC60CF2FDD8C71&isNewUser=1&params=%7B%22resources%22%3A%7B%22ShuqiVipEntry%22%3A%7B%7D%2C%22personalCardConfig%22%3A%7B%7D%7D%7D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=f405c0dda3e679b6517a412f12f9fe10&sn=B8AD2BEC908FC88B5539B9A4319174C371953381&soft_id=21&timestamp=1624075027&user_id=2127472107&ver=210301"},{"key":"shuqispbody3","val":"_public=skinId%3D999%26idfa%3DD779B18D-5E9A-4240-B43E-746B78D5A3EC%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26umidtoken%3DYM1Qv8KpRu8DACZp2GlvLqWP%26user_id%3D2127472107%26sn%3DB8AD2BEC908FC88B5539B9A4319174C371953381%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3DA9D560CBF62C3D90F22E36C3D4EC60CF2FDD8C71%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhoneSE%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYM1Qv8KpRu8DACZp2GlvLqWP%26utype%3Dpre_vip%26sdk%3D13.2.2&deliveryId=525&key=sq_app_ad&miniWua=HHnB_YAbxoJwLDx5vQ9LXLXUKrJtzQZfZWpOt8o5X5IMjT8o%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=626&sign=1F4DF60601B244FB611A49E13B1E4272&timestamp=1624075046&userId=2127472107&user_id=2127472107&wua=HIVW_VUe%2BWw3UEqXUvdS69Fs7S7V6gmXGP/94syhekLzyk1K/98VXYJV73RUgnRAlwT/Wl0m3e/CkViknrrxEs93xKJd/d7GGTLSCg7mlMgjV4wH3o/2kYBclJgNgWKhrxAUOpcIxLzxvFhVErXYXCwsryJ7vijXunfpvHOfMSaR1gzkIvQNdJPbl63Xj8xwXOzld3hhqndTRJkeFn4BDkf6h/MW0gKnkrD/8UfdvzE3j06I%3D"},{"key":"shuqiscbody3","val":""},{"key":"shuqiydbody3","val":""},{"key":"shuqiqdbody3","val":"clientTimestamp=1624075038&position=501&userId=2127472107&signInType=1&wua=HIVW_zf4PPw3Hzc56mMVc3F5ZwJ%2FpMsR2N80LE9BHmXyti026LDT3PSWHszv4ZinggoQFeTPcS66qFCPB4k9t4Q%2FadT8stJrPNL3aQyeVqeHGblAzBUhWmXf2E5A4zwBHDLZlDlBl66tkU%2BkyCuX9sgheyRAvEu7RNuFIJBBm2lSuMI%2BEGDVoqL0RBdhZen%2Bipq%2FaQT85LEQhQ4G9UdgbRuxfjvfsWNsXQuMmVrTqeTEFIKM%3D&ua=&miniWua=HHnB_X4stsc3bTo%2FGqZ3M80jVNfSzV9tr7TlT%2BCR8DGzCVHo%3D&umidtoken=YM1Qv8KpRu8DACZp2GlvLqWP&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&sign=1da21934b3d15369ca4cefa88468e6e3&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.2.2%26utdid%3DYM1Qv8KpRu8DACZp2GlvLqWP%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2127472107%26sn%3DB8AD2BEC908FC88B5539B9A4319174C371953381%26umidtoken%3DYM1Qv8KpRu8DACZp2GlvLqWP%26msv%3D8.0.0%26brand%3DApple%26imei%3DA9D560CBF62C3D90F22E36C3D4EC60CF2FDD8C71%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhoneSE%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DD779B18D-5E9A-4240-B43E-746B78D5A3EC"},{"key":"shuqirwbody3","val":"serviceWorkerOn=1&stopPullRefresh=1&from=ShuqiTab&upf=20368&sdk=13.2.2&utdid=YM1Qv8KpRu8DACZp2GlvLqWP&ustatus=0&first_placeid=111111&net_env=3g&placeid=111111&user_id=2127472107&sn=B8AD2BEC908FC88B5539B9A4319174C371953381&umidtoken=YM1Qv8KpRu8DACZp2GlvLqWP&msv=8.0.0&brand=Apple&imei=A9D560CBF62C3D90F22E36C3D4EC60CF2FDD8C71&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&session=&skinColor=23B383&platform=1&ver=210301&mod=iPhoneSE&statusBarHeight=44.000000&skinVersion=1&wh=1242x2688&soft_id=21&utype=pre_vip&skinId=999&idfa=D779B18D-5E9A-4240-B43E-746B78D5A3EC&params=%7B%22resources%22%3A%7B%22ShuqiBsDailyTask%22%3A%7B%7D%7D%7D&userId=2127472107&placeId=111111&timestamp=1624075049&sqSv=1.0&sign=ea11f5360c11974955a4b89e8943f416&key=sq_h5_gateway&_public="},{"key":"shuqifxbody3","val":""},{"key":"shuqisprwurl3","val":"https://ocean.shuqireader.com/api/ad/adserver/v1/api/getAdInfo?appVer=4.3.6.0&placeId=111111&platform=iOS&requestSrc=h5&resourceId=626&timestamp=1624075096&user_id=2127472107&sqSv=1.0&sign=8cdce1e0c78392036a5fb606ecee1888&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.2.2%26utdid%3DYM1Qv8KpRu8DACZp2GlvLqWP%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2127472107%26sn%3DB8AD2BEC908FC88B5539B9A4319174C371953381%26umidtoken%3DYM1Qv8KpRu8DACZp2GlvLqWP%26msv%3D8.0.0%26brand%3DApple%26imei%3DA9D560CBF62C3D90F22E36C3D4EC60CF2FDD8C71%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhoneSE%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DD779B18D-5E9A-4240-B43E-746B78D5A3EC"},{"key":"shuqijlbody3","val":"requestSrc=h5&userId=2127472107&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624075049&sqSv=1.0&sign=d2e8f487879ce1700a5b2b6170f94c63&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.2.2%26utdid%3DYM1Qv8KpRu8DACZp2GlvLqWP%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2127472107%26sn%3DB8AD2BEC908FC88B5539B9A4319174C371953381%26umidtoken%3DYM1Qv8KpRu8DACZp2GlvLqWP%26msv%3D8.0.0%26brand%3DApple%26imei%3DA9D560CBF62C3D90F22E36C3D4EC60CF2FDD8C71%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhoneSE%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DD779B18D-5E9A-4240-B43E-746B78D5A3EC"},{"key":"shuqisqjlbody3","val":"src=&userId=2127472107&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624075043&sqSv=1.0&sign=debe1bbd73592fc75bdab6fb5850ad30&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.2.2%26utdid%3DYM1Qv8KpRu8DACZp2GlvLqWP%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2127472107%26sn%3DB8AD2BEC908FC88B5539B9A4319174C371953381%26umidtoken%3DYM1Qv8KpRu8DACZp2GlvLqWP%26msv%3D8.0.0%26brand%3DApple%26imei%3DA9D560CBF62C3D90F22E36C3D4EC60CF2FDD8C71%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhoneSE%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DD779B18D-5E9A-4240-B43E-746B78D5A3EC"},{"key":"shuqicjyurl3","val":"https://ocean.shuqireader.com/api/activity/activity/v1/lottery/info?timestamp=1624075098&userId=2127472107&activityId=311&sqSv=1.0&sign=cf6429943372306ce241563d9d90b8d8&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.2.2%26utdid%3DYM1Qv8KpRu8DACZp2GlvLqWP%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2127472107%26sn%3DB8AD2BEC908FC88B5539B9A4319174C371953381%26umidtoken%3DYM1Qv8KpRu8DACZp2GlvLqWP%26msv%3D8.0.0%26brand%3DApple%26imei%3DA9D560CBF62C3D90F22E36C3D4EC60CF2FDD8C71%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhoneSE%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DD779B18D-5E9A-4240-B43E-746B78D5A3EC"},{"key":"shuqicjcsbody3","val":"_public=skinId%3D999%26idfa%3DD779B18D-5E9A-4240-B43E-746B78D5A3EC%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26umidtoken%3DYM1Qv8KpRu8DACZp2GlvLqWP%26user_id%3D2127472107%26sn%3DB8AD2BEC908FC88B5539B9A4319174C371953381%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3DA9D560CBF62C3D90F22E36C3D4EC60CF2FDD8C71%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhoneSE%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYM1Qv8KpRu8DACZp2GlvLqWP%26utype%3Dpre_vip%26sdk%3D13.2.2&deliveryId=711&key=sq_app_ad&miniWua=HHnB_Be%2BK6XTg3DtIlNMt6Jd9AiCKENwV0gUGJ3MJi1tu8WU%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=703&sign=6289F3485EF53058B173201BB08E3977&timestamp=1624075054&userId=2127472107&user_id=2127472107&wua=HIVW_hYIN97N2txlgeZv1g4tRnKb57Hn4u4mdEPiU4dsuQLo8lX%2BspW%2B/i6gPcL4GCkPsfe9fg4ibuZDt341EwlJMRpi5TgHMWNOSSOoYKKQ0gBxCPf8gLyCJ7L0VX7rifpNNZETaWAKScjGrQdyHx5NVbWo7F1%2BsVyKPad8UE6oQiWhRQ5tMx8hdBgwPDC4NSOcF7hznEILj96K8ZrWH0owJXxU%2BYvmI17xq30TQv1AC320%3D"},{"key":"shuqicjbody3","val":"wua=HIVW_SseBvMalJoZBTQLzzicj%2BByJq4%2BeIBCG7BMueA8RhpKn%2B7xyETQvhrhtzt2OqyjGw6RL7LqgTW2tOtN4j4sUqf8XF1u0RWhMsveqbNOhStIKrndtQm%2FB8QDu4PaJcmnRQlFnkunHGG7HAnGx%2FfOwEnXa2ljLs1uHX89yq5LpO73BlN4VEzaQqnkb%2Bzc790tz9uSTg%2BHzd%2F0yLe2DwEmioCOmL0Wo9OCpll%2B5gUzTlz0%3D&ua=&userId=2127472107&umidtoken=YM1Qv8KpRu8DACZp2GlvLqWP&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&asac=2A20C07RJ9F51AOEFSNHDR&timestamp=1624075059&activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&sqSv=1.0&sign=e6a2e5693d603796bf4e49a52c07446f&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.2.2%26utdid%3DYM1Qv8KpRu8DACZp2GlvLqWP%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2127472107%26sn%3DB8AD2BEC908FC88B5539B9A4319174C371953381%26umidtoken%3DYM1Qv8KpRu8DACZp2GlvLqWP%26msv%3D8.0.0%26brand%3DApple%26imei%3DA9D560CBF62C3D90F22E36C3D4EC60CF2FDD8C71%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhoneSE%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DD779B18D-5E9A-4240-B43E-746B78D5A3EC"},{"key":"shuqijsspbody3","val":""},{"key":"shuqijsydurl3","val":""},{"key":"shuqijsydbody3","val":""},{"key":"shuqijsqdbody3","val":""},{"key":"shuqijsqdspyurl3","val":""},{"key":"shuqijsqdspbody3","val":""},{"key":"shuqijsrwbody3","val":""},{"key":"shuqijsfxbody3","val":""},{"key":"shuqijsbookurl3","val":""},{"key":"shuqijsbookbody3","val":""},{"key":"shuqijssprwurl3","val":""},{"key":"shuqiuserurl4","val":"https://ocean.shuqireader.com/api/jaccount/accountapi/v1/sapi/account/getBindinfo?userId=2129514257&sqSv=1.0&timestamp=1624075190&sign=26214790ae424d8d44f38d4092c2d309&key=sq_h5_gateway"},{"key":"shuqisyurl4","val":"https://render.shuqireader.com/load/resource?sdk=13.2.2&utdid=YM1Qv8KpRu8DACZp2GlvLqWP&ustatus=0&first_placeid=111111&net_env=wifi&placeid=111111&user_id=2129514257&sn=62D7B1BFABF875AC8B0EABE80988D9313EB062F3&umidtoken=YM1Qv8KpRu8DACZp2GlvLqWP&msv=8.0.0&brand=Apple&imei=09C0261292867451ECDBF9861EA2CCCBCEBCBBB1&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=iOS&ver=210301&mod=iPad2G&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=E7E4EF3D-D127-483E-881E-3DE11A9B9E3E"},{"key":"shuqisybody4","val":"appVer=4.3.6.0&imei=09C0261292867451ECDBF9861EA2CCCBCEBCBBB1&isNewUser=1&params=%7B%22resources%22%3A%7B%22ShuqiVipEntry%22%3A%7B%7D%2C%22personalCardConfig%22%3A%7B%7D%7D%7D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=76e27a3faa2d7b31c29792e22e040603&sn=62D7B1BFABF875AC8B0EABE80988D9313EB062F3&soft_id=21&timestamp=1624075114&user_id=2129514257&ver=210301"},{"key":"shuqispbody4","val":"_public=skinId%3D999%26idfa%3DE7E4EF3D-D127-483E-881E-3DE11A9B9E3E%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26umidtoken%3DYM1Qv8KpRu8DACZp2GlvLqWP%26user_id%3D2129514257%26sn%3D62D7B1BFABF875AC8B0EABE80988D9313EB062F3%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D09C0261292867451ECDBF9861EA2CCCBCEBCBBB1%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPad2G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYM1Qv8KpRu8DACZp2GlvLqWP%26utype%3Dpre_vip%26sdk%3D13.2.2&deliveryId=525&key=sq_app_ad&miniWua=HHnB_fa6ivaIieSLXVaWt4mKXqoylaCTz%2BDXLRM8Nb5dhH9s%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=626&sign=97962D2F3474618CFD47AED52870AECD&timestamp=1624075164&userId=2129514257&user_id=2129514257&wua=HIVW_vzVNLUQmNt5LvoJZM%2BorgpkHoWx6BRwPo5eUSWgxDsPsxvxgTT8uU8t3Zk6rW34KRHuS3aPkmWYMXFsd2AGw%2BCWv1zmPqfY%2BVDfnxbvSj2cHJ58ROAOfvnIR3Svbj1whUY/F8BPWVpc0qdPjJkkzoLFtM6PmrKjHRhgJ/J7e1gcoCjBqs5h5SNbXHwCQW3SYOy6uK1LmmB%2Bm3LD7sjA5tekkivTWuXpWPK/5spRkTL4%3D"},{"key":"shuqiscbody4","val":""},{"key":"shuqiydbody4","val":""},{"key":"shuqiqdbody4","val":"clientTimestamp=1624075150&position=501&userId=2129514257&signInType=1&wua=HIVW_GsJUCytCxBgwnuvfwEu73%2BkWqE8IrpVfHsrEPtXs4HB4F9eqo7Hj6nEaLLR2tV461Bm0uO7hYE4R%2FokiGqfzuHZS%2FE%2FpDI0jrqTWtn%2FsZfvJ1eRcJM%2Baq3aoPOk7BsRyTB8i2uM8LkVgCXt5NKKZT%2FRYriAR1SB0%2FXjlw60Ft%2Baj6Mw8LyDhKgsNzkSNbo3NMeORtavE1sHIBZS65kkslWC5H1MPXjIg2jEQgn2sNnM%3D&ua=&miniWua=HHnB_kLVGc%2BrkO7zFRbx0XMbMAHWQP9Srjpz1AQ5eHr%2F%2BszU%3D&umidtoken=YM1Qv8KpRu8DACZp2GlvLqWP&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&sign=c8f988bd600eff787684ad1cd35b973f&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.2.2%26utdid%3DYM1Qv8KpRu8DACZp2GlvLqWP%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2129514257%26sn%3D62D7B1BFABF875AC8B0EABE80988D9313EB062F3%26umidtoken%3DYM1Qv8KpRu8DACZp2GlvLqWP%26msv%3D8.0.0%26brand%3DApple%26imei%3D09C0261292867451ECDBF9861EA2CCCBCEBCBBB1%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad2G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DE7E4EF3D-D127-483E-881E-3DE11A9B9E3E"},{"key":"shuqirwbody4","val":"serviceWorkerOn=1&stopPullRefresh=1&from=ShuqiTab&upf=20368&sdk=13.2.2&utdid=YM1Qv8KpRu8DACZp2GlvLqWP&ustatus=0&first_placeid=111111&net_env=wifi&placeid=111111&user_id=2129514257&sn=62D7B1BFABF875AC8B0EABE80988D9313EB062F3&umidtoken=YM1Qv8KpRu8DACZp2GlvLqWP&msv=8.0.0&brand=Apple&imei=09C0261292867451ECDBF9861EA2CCCBCEBCBBB1&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&session=&skinColor=23B383&platform=1&ver=210301&mod=iPad2G&statusBarHeight=44.000000&skinVersion=1&wh=1242x2688&soft_id=21&utype=pre_vip&skinId=999&idfa=E7E4EF3D-D127-483E-881E-3DE11A9B9E3E&params=%7B%22resources%22%3A%7B%22ShuqiBsDailyTask%22%3A%7B%7D%7D%7D&userId=2129514257&placeId=111111&timestamp=1624075170&sqSv=1.0&sign=7b8ecdabba7fc05e31045bd83a9136df&key=sq_h5_gateway&_public="},{"key":"shuqifxbody4","val":""},{"key":"shuqisprwurl4","val":"https://ocean.shuqireader.com/api/ad/adserver/v1/api/getAdInfo?appVer=4.3.6.0&placeId=111111&platform=iOS&requestSrc=h5&resourceId=626&timestamp=1624075190&user_id=2129514257&sqSv=1.0&sign=32bd8edefacacf6b0694ae2339ed8e4a&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.2.2%26utdid%3DYM1Qv8KpRu8DACZp2GlvLqWP%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2129514257%26sn%3D62D7B1BFABF875AC8B0EABE80988D9313EB062F3%26umidtoken%3DYM1Qv8KpRu8DACZp2GlvLqWP%26msv%3D8.0.0%26brand%3DApple%26imei%3D09C0261292867451ECDBF9861EA2CCCBCEBCBBB1%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad2G%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DE7E4EF3D-D127-483E-881E-3DE11A9B9E3E"},{"key":"shuqijlbody4","val":"requestSrc=h5&userId=2129514257&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624075170&sqSv=1.0&sign=4db290c4ed6228138a710a14472e1550&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.2.2%26utdid%3DYM1Qv8KpRu8DACZp2GlvLqWP%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2129514257%26sn%3D62D7B1BFABF875AC8B0EABE80988D9313EB062F3%26umidtoken%3DYM1Qv8KpRu8DACZp2GlvLqWP%26msv%3D8.0.0%26brand%3DApple%26imei%3D09C0261292867451ECDBF9861EA2CCCBCEBCBBB1%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad2G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DE7E4EF3D-D127-483E-881E-3DE11A9B9E3E"},{"key":"shuqisqjlbody4","val":"src=&userId=2129514257&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624075160&sqSv=1.0&sign=dc60aeb6e6a120c4336a92f2ccd47b28&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.2.2%26utdid%3DYM1Qv8KpRu8DACZp2GlvLqWP%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2129514257%26sn%3D62D7B1BFABF875AC8B0EABE80988D9313EB062F3%26umidtoken%3DYM1Qv8KpRu8DACZp2GlvLqWP%26msv%3D8.0.0%26brand%3DApple%26imei%3D09C0261292867451ECDBF9861EA2CCCBCEBCBBB1%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad2G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DE7E4EF3D-D127-483E-881E-3DE11A9B9E3E"},{"key":"shuqicjyurl4","val":"https://ocean.shuqireader.com/api/activity/activity/v1/lottery/info?timestamp=1624075193&userId=2129514257&activityId=311&sqSv=1.0&sign=df8683f6ce896a96344550b5e11cd743&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.2.2%26utdid%3DYM1Qv8KpRu8DACZp2GlvLqWP%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2129514257%26sn%3D62D7B1BFABF875AC8B0EABE80988D9313EB062F3%26umidtoken%3DYM1Qv8KpRu8DACZp2GlvLqWP%26msv%3D8.0.0%26brand%3DApple%26imei%3D09C0261292867451ECDBF9861EA2CCCBCEBCBBB1%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad2G%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DE7E4EF3D-D127-483E-881E-3DE11A9B9E3E"},{"key":"shuqicjcsbody4","val":"_public=skinId%3D999%26idfa%3DE7E4EF3D-D127-483E-881E-3DE11A9B9E3E%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26umidtoken%3DYM1Qv8KpRu8DACZp2GlvLqWP%26user_id%3D2129514257%26sn%3D62D7B1BFABF875AC8B0EABE80988D9313EB062F3%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D09C0261292867451ECDBF9861EA2CCCBCEBCBBB1%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPad2G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYM1Qv8KpRu8DACZp2GlvLqWP%26utype%3Dpre_vip%26sdk%3D13.2.2&deliveryId=711&key=sq_app_ad&miniWua=HHnB_UCTq30MIsQBZGAUexnTWJ%2BVZf951gGwOPc2Y5jidpMQ%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=703&sign=5009381F8643A4DDBDF22DE7EC8E03FF&timestamp=1624075175&userId=2129514257&user_id=2129514257&wua=HIVW_snNlpW4CrsOhnKBE8Y0nlAj3f83z9RY5KMir1BoBWmmlE3OSVVbyQFUpxEO6IetCc/R67UUtBp4zVTglnQ8k%2B9NrGCE9WFSIj1kRuvyf5O9GEwCGccPbcyAPY597xHN%2BSKx4LSjTzIOHwAaWBzW6hlWM1KFKsH36Y0wN83Z2FcZuo7MNAMkflKzgk4F7NDs5gyaYsjBDHBbMbyxkU0wdARPwe9snJWDQhM5el0My9tw%3D"},{"key":"shuqicjbody4","val":"wua=HIVW_kWfW9WZ8Lcm1y6QYiU%2FkhQTismJhbsONXSvuVJ8mhAPt5luxfyz5bMHffWLoIR2WYLFjYJANGxNJ3i729AB6P5IVyZ%2F6vohlRUP3zzuAjLCG%2FmnslgojxBmrDeR%2Fsqm8V5fra1jfivtJPw3XMg7nrVSVM%2FMSHSLTnOPDFp1GdwnyjIdeytBuPpFeeqrRbyWAZC96NaZ5NOKPWWnQzpAwbgmIpFGAGKqwBREszwjVz9s%3D&ua=&userId=2129514257&umidtoken=YM1Qv8KpRu8DACZp2GlvLqWP&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&asac=2A20C07RJ9F51AOEFSNHDR&timestamp=1624075177&activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&sqSv=1.0&sign=89cbe8b1c7fafc99760a3b18a29e9be1&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.2.2%26utdid%3DYM1Qv8KpRu8DACZp2GlvLqWP%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2129514257%26sn%3D62D7B1BFABF875AC8B0EABE80988D9313EB062F3%26umidtoken%3DYM1Qv8KpRu8DACZp2GlvLqWP%26msv%3D8.0.0%26brand%3DApple%26imei%3D09C0261292867451ECDBF9861EA2CCCBCEBCBBB1%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad2G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DE7E4EF3D-D127-483E-881E-3DE11A9B9E3E"},{"key":"shuqijsspbody4","val":""},{"key":"shuqijsydurl4","val":""},{"key":"shuqijsydbody4","val":""},{"key":"shuqijsqdbody4","val":""},{"key":"shuqijsqdspyurl4","val":""},{"key":"shuqijsqdspbody4","val":""},{"key":"shuqijsrwbody4","val":""},{"key":"shuqijsfxbody4","val":""},{"key":"shuqijsbookurl4","val":""},{"key":"shuqijsbookbody4","val":""},{"key":"shuqijssprwurl4","val":""},{"key":"shuqiuserurl5","val":"https://ocean.shuqireader.com/api/jaccount/accountapi/v1/sapi/account/getBindinfo?userId=2130757537&sqSv=1.0&timestamp=1624075260&sign=d12925b59384d6357ecc44fa139c1fe8&key=sq_h5_gateway"},{"key":"shuqisyurl5","val":"https://render.shuqireader.com/load/resource?sdk=13.4.1&utdid=YM1Q2tbIPEADADuKAxLZht5v&ustatus=0&first_placeid=111111&net_env=wifi&placeid=111111&user_id=2130757537&sn=8004577A885D3F9681DBEF5555D666330118E8CE&umidtoken=YM1Q2tbIPEADADuKAxLZht5v&msv=8.0.0&brand=Apple&imei=4B4B4B7E6C2D1E400EF3B9D5825186B5BB68EA4B&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=iOS&ver=210301&mod=iPhone7&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=7B9F82E0-43E4-4B67-8AB8-19698E2C679D"},{"key":"shuqisybody5","val":"appVer=4.3.6.0&imei=4B4B4B7E6C2D1E400EF3B9D5825186B5BB68EA4B&isNewUser=1&params=%7B%22resources%22%3A%7B%22ShuqiVipEntry%22%3A%7B%7D%2C%22personalCardConfig%22%3A%7B%7D%7D%7D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=cd12a1502f5061867b86ccb699cb54ce&sn=8004577A885D3F9681DBEF5555D666330118E8CE&soft_id=21&timestamp=1624075205&user_id=2130757537&ver=210301"},{"key":"shuqispbody5","val":"_public=skinId%3D999%26idfa%3D7B9F82E0-43E4-4B67-8AB8-19698E2C679D%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26umidtoken%3DYM1Q2tbIPEADADuKAxLZht5v%26user_id%3D2130757537%26sn%3D8004577A885D3F9681DBEF5555D666330118E8CE%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D4B4B4B7E6C2D1E400EF3B9D5825186B5BB68EA4B%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhone7%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYM1Q2tbIPEADADuKAxLZht5v%26utype%3Dpre_vip%26sdk%3D13.4.1&deliveryId=525&key=sq_app_ad&miniWua=HHnB_ljBheUL/YqaoBPvIJEBmo0/OfDS9oSdIK3%2B/nXv2kbU%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=626&sign=3A6D3975602E0D35210D85A2AD1061B5&timestamp=1624075234&userId=2130757537&user_id=2130757537&wua=HIVW_y7krMmG/as64P1AayKuggBuU9E34Kajn%2BDnsTibF7H5JUn6H/BEZsteTqi4ZqBirHU9F2THTlELmI%2BpIaXWN8OjNV5uVwnCUXwPLyQcljEt33LIUOgrMX5GMdoRvwlFjzcHJadqr7FtdoJ8Hoy4O3PymgJdY0CPlwvn5BHs6IvYojpMF4Bfz59R/K%2BcAgrGkt7Y8uZkEt9Jcd9y5bt1L%2BFvTrwebdza/NjWp3DzP3D4%3D"},{"key":"shuqiscbody5","val":""},{"key":"shuqiydbody5","val":""},{"key":"shuqiqdbody5","val":"clientTimestamp=1624075215&position=501&userId=2130757537&signInType=1&wua=HIVW_qw5hr1p98z0IITqQWLfgn3VarXV15SAZOevjbrB78w7g3NNCbPRc2ZhCP0ZmNgwC5DGciipYfKk%2BLQDr0LvpHLW17uknij6V4Pyi5tpNN26MQ9zheNYXNAoVk3vnONxVUPJ%2F%2FGj5qYGuiaEpsw%2FzFm0HKvqk5QFGgt2ULkbAMPn%2FoNCZN%2F6PnzBlg9TJie8pnQ2mcVDMIShQfYKhAZpfrzoWSzec4FsD28KpGS%2BUzPs%3D&ua=&miniWua=HHnB_N6YOpL4Pgf2TyxjVJjp%2F5UtY8YSrNLCuM681bYikhsA%3D&umidtoken=YM1Q2tbIPEADADuKAxLZht5v&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&sign=bdfe5a2672f494711ca743fafd3ec3aa&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.4.1%26utdid%3DYM1Q2tbIPEADADuKAxLZht5v%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2130757537%26sn%3D8004577A885D3F9681DBEF5555D666330118E8CE%26umidtoken%3DYM1Q2tbIPEADADuKAxLZht5v%26msv%3D8.0.0%26brand%3DApple%26imei%3D4B4B4B7E6C2D1E400EF3B9D5825186B5BB68EA4B%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone7%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D7B9F82E0-43E4-4B67-8AB8-19698E2C679D"},{"key":"shuqirwbody5","val":"serviceWorkerOn=1&stopPullRefresh=1&from=ShuqiTab&upf=20368&sdk=13.4.1&utdid=YM1Q2tbIPEADADuKAxLZht5v&ustatus=0&first_placeid=111111&net_env=wifi&placeid=111111&user_id=2130757537&sn=8004577A885D3F9681DBEF5555D666330118E8CE&umidtoken=YM1Q2tbIPEADADuKAxLZht5v&msv=8.0.0&brand=Apple&imei=4B4B4B7E6C2D1E400EF3B9D5825186B5BB68EA4B&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&session=&skinColor=23B383&platform=1&ver=210301&mod=iPhone7&statusBarHeight=44.000000&skinVersion=1&wh=1242x2688&soft_id=21&utype=pre_vip&skinId=999&idfa=7B9F82E0-43E4-4B67-8AB8-19698E2C679D&params=%7B%22resources%22%3A%7B%22ShuqiBsDailyTask%22%3A%7B%7D%7D%7D&userId=2130757537&placeId=111111&timestamp=1624075237&sqSv=1.0&sign=1adc4297324b15cebc177dd06a6eb262&key=sq_h5_gateway&_public="},{"key":"shuqifxbody5","val":""},{"key":"shuqisprwurl5","val":"https://ocean.shuqireader.com/api/ad/adserver/v1/api/getAdInfo?appVer=4.3.6.0&placeId=111111&platform=iOS&requestSrc=h5&resourceId=626&timestamp=1624075257&user_id=2130757537&sqSv=1.0&sign=fd0a4dcf663dedd46649726acb2632b0&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.4.1%26utdid%3DYM1Q2tbIPEADADuKAxLZht5v%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2130757537%26sn%3D8004577A885D3F9681DBEF5555D666330118E8CE%26umidtoken%3DYM1Q2tbIPEADADuKAxLZht5v%26msv%3D8.0.0%26brand%3DApple%26imei%3D4B4B4B7E6C2D1E400EF3B9D5825186B5BB68EA4B%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone7%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D7B9F82E0-43E4-4B67-8AB8-19698E2C679D"},{"key":"shuqijlbody5","val":"requestSrc=h5&userId=2130757537&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624075237&sqSv=1.0&sign=9763ae8569d2870a6d0680beaaefb439&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.4.1%26utdid%3DYM1Q2tbIPEADADuKAxLZht5v%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2130757537%26sn%3D8004577A885D3F9681DBEF5555D666330118E8CE%26umidtoken%3DYM1Q2tbIPEADADuKAxLZht5v%26msv%3D8.0.0%26brand%3DApple%26imei%3D4B4B4B7E6C2D1E400EF3B9D5825186B5BB68EA4B%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone7%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D7B9F82E0-43E4-4B67-8AB8-19698E2C679D"},{"key":"shuqisqjlbody5","val":"src=&userId=2130757537&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624075227&sqSv=1.0&sign=bc427f1e1b87f09e462869007f11f638&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.4.1%26utdid%3DYM1Q2tbIPEADADuKAxLZht5v%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2130757537%26sn%3D8004577A885D3F9681DBEF5555D666330118E8CE%26umidtoken%3DYM1Q2tbIPEADADuKAxLZht5v%26msv%3D8.0.0%26brand%3DApple%26imei%3D4B4B4B7E6C2D1E400EF3B9D5825186B5BB68EA4B%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone7%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D7B9F82E0-43E4-4B67-8AB8-19698E2C679D"},{"key":"shuqicjyurl5","val":"https://ocean.shuqireader.com/api/activity/activity/v1/lottery/info?timestamp=1624075260&userId=2130757537&activityId=311&sqSv=1.0&sign=cbf550560e21373cf61c49158262ce7d&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.4.1%26utdid%3DYM1Q2tbIPEADADuKAxLZht5v%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2130757537%26sn%3D8004577A885D3F9681DBEF5555D666330118E8CE%26umidtoken%3DYM1Q2tbIPEADADuKAxLZht5v%26msv%3D8.0.0%26brand%3DApple%26imei%3D4B4B4B7E6C2D1E400EF3B9D5825186B5BB68EA4B%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone7%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D7B9F82E0-43E4-4B67-8AB8-19698E2C679D"},{"key":"shuqicjcsbody5","val":"_public=skinId%3D999%26idfa%3D7B9F82E0-43E4-4B67-8AB8-19698E2C679D%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26umidtoken%3DYM1Q2tbIPEADADuKAxLZht5v%26user_id%3D2130757537%26sn%3D8004577A885D3F9681DBEF5555D666330118E8CE%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D4B4B4B7E6C2D1E400EF3B9D5825186B5BB68EA4B%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhone7%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYM1Q2tbIPEADADuKAxLZht5v%26utype%3Dpre_vip%26sdk%3D13.4.1&deliveryId=711&key=sq_app_ad&miniWua=HHnB_QIOYKlBFw8rPcf2RdPUyMdORD0Z8f9uD6UkfB6TtSnc%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=703&sign=F0BF3688884A236F63EA3289C1F0317A&timestamp=1624075243&userId=2130757537&user_id=2130757537&wua=HIVW_ynyX55O%2BSsi59qL9H02bx0z5%2BwRuzC/CmiKhmfWIdxrxV0D1YihrG9CojTGWR5rwJ99mM8dRgEl5V3CkCsaJT0jevluaa6V1yIhCafVWeE7FTgEtm8VMNS5ppokUjxlu36S9%2BBTqfil%2B1wWpYsi1G9mUBcu4L9g0ypnFbiyvK81IJNP36k9eMh79jEWAM7iY5QMETLWbknKE%2BBjUeROI6gGajgqp3vH%2BmdCuc6oUTGg%3D"},{"key":"shuqicjbody5","val":"wua=HIVW_GsJUCytCxBgwnuvfwEu739JuUNG9RydbxDdaeYvxBCYoQDRzh%2FUjXoJB4RqH3xxNi6BrA%2FPe%2FutS78hUOhvSLbp1thiZY8zw3Ir3QOe57FxnqhwWZ6fYq%2FIZhljBphv88bJc3sGu5tWnhT9sJKGxsR5Z3xtWWAdj2zRV%2BEYRc0q6XyCcaOtl9xEmStSVJxote4ZmykncTxr%2F0%2FqQNwZKg3dAef2FFrx3JXDDPv2r28o%3D&ua=&userId=2130757537&umidtoken=YM1Q2tbIPEADADuKAxLZht5v&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&asac=2A20C07RJ9F51AOEFSNHDR&timestamp=1624075245&activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&sqSv=1.0&sign=512d7a3e331564d2b5469bdfa48a6b37&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.4.1%26utdid%3DYM1Q2tbIPEADADuKAxLZht5v%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2130757537%26sn%3D8004577A885D3F9681DBEF5555D666330118E8CE%26umidtoken%3DYM1Q2tbIPEADADuKAxLZht5v%26msv%3D8.0.0%26brand%3DApple%26imei%3D4B4B4B7E6C2D1E400EF3B9D5825186B5BB68EA4B%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone7%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D7B9F82E0-43E4-4B67-8AB8-19698E2C679D"},{"key":"shuqijsspbody5","val":""},{"key":"shuqijsydurl5","val":""},{"key":"shuqijsydbody5","val":""},{"key":"shuqijsqdbody5","val":""},{"key":"shuqijsqdspyurl5","val":""},{"key":"shuqijsqdspbody5","val":""},{"key":"shuqijsrwbody5","val":""},{"key":"shuqijsfxbody5","val":""},{"key":"shuqijsbookurl5","val":""},{"key":"shuqijsbookbody5","val":""},{"key":"shuqijssprwurl5","val":""},{"key":"shuqiuserurl6","val":"https://ocean.shuqireader.com/api/jaccount/accountapi/v1/sapi/account/getBindinfo?userId=2132283106&sqSv=1.0&timestamp=1624075331&sign=0b5fafa91caeed567a0869fa20c28ea6&key=sq_h5_gateway"},{"key":"shuqisyurl6","val":"https://render.shuqireader.com/load/resource?sdk=13.0&utdid=YM1Q4X%2BBclADAEKa%2BoFo45PF&ustatus=0&first_placeid=111111&net_env=wifi&placeid=111111&user_id=2132283106&sn=A9D18F87BE36503968EAE6E2F26E45D725B48858&umidtoken=YM1Q4X%2BBclADAEKa%2BoFo45PF&msv=8.0.0&brand=Apple&imei=0A835D15C8A5C72F13BB74FCC0B7AC9ED7B81CAB&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=iOS&ver=210301&mod=iPhone7&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=20F4E03C-18D0-4A9B-940A-195E35A091FA"},{"key":"shuqisybody6","val":"appVer=4.3.6.0&imei=0A835D15C8A5C72F13BB74FCC0B7AC9ED7B81CAB&isNewUser=1&params=%7B%22resources%22%3A%7B%22ShuqiVipEntry%22%3A%7B%7D%2C%22personalCardConfig%22%3A%7B%7D%7D%7D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=2435a149a4984f5959fab552d8548880&sn=A9D18F87BE36503968EAE6E2F26E45D725B48858&soft_id=21&timestamp=1624075281&user_id=2132283106&ver=210301"},{"key":"shuqispbody6","val":"_public=skinId%3D999%26idfa%3D20F4E03C-18D0-4A9B-940A-195E35A091FA%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26umidtoken%3DYM1Q4X%2BBclADAEKa%2BoFo45PF%26user_id%3D2132283106%26sn%3DA9D18F87BE36503968EAE6E2F26E45D725B48858%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D0A835D15C8A5C72F13BB74FCC0B7AC9ED7B81CAB%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhone7%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYM1Q4X%2BBclADAEKa%2BoFo45PF%26utype%3Dpre_vip%26sdk%3D13.0&deliveryId=525&key=sq_app_ad&miniWua=HHnB_OU%2Bvu05PMhEZRIJ4gV9erANUY/XaX6oBTpNipDF0iq8%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=626&sign=D4EE222A6FA0C9FEDBCDBE8A57F2F5F0&timestamp=1624075303&userId=2132283106&user_id=2132283106&wua=HIVW_xyr1iBV6F%2BrqtrfujoV7ALTE2N%2B3YgZBGnwnOWmEKKV03kL8M70j7mWKW8JKOcHn9mqmESod/VFuf37kK9MXW%2B9mjBuF%2BuaQ5udG/8Zq4VWQfzzl/MyvyqMxJzNPKF8RrGjr661sch0BmHGm3ZuAmyyEi8hmS2LpzstZcWMQ98g3VrcrtL79dwoo3243ftsMj4aubGpluOJ2nClo%2BUqhkvwa86LdIfd9Q9sIgrpZK6c%3D"},{"key":"shuqiscbody6","val":""},{"key":"shuqiydbody6","val":""},{"key":"shuqiqdbody6","val":"clientTimestamp=1624075294&position=501&userId=2132283106&signInType=1&wua=HIVW_vzVNLUQmNt5LvoJZM%2BorgiXn15jORfMDHdz34RDGvrDP8qnzPS5OWNJgaSExchSj%2FplevWLkS9l%2FTcXZ8BXZIwy1%2BjR08Z0nOVddtmuuQl6qvIngx52ntI%2Bt%2BlfxCAn35g6t5PnYhgpDaO8L3QJNPWk3elYS7HaObtloyEaKUYhEI%2FXebr6ywkZiu2KjhnW9iz9e0HX2%2FSFyhJsGryJNt8BvijzQRTRGaHFprkey8Jg%3D&ua=&miniWua=HHnB_Qn%2F1ZJ7c1KPgjfj1MxUi1F8ewNFSi9fNjaHySt9Ozyc%3D&umidtoken=YM1Q4X%2BBclADAEKa%2BoFo45PF&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&sign=cf536f3d113c7a96c2584e4b78a2b46a&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.0%26utdid%3DYM1Q4X%252BBclADAEKa%252BoFo45PF%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2132283106%26sn%3DA9D18F87BE36503968EAE6E2F26E45D725B48858%26umidtoken%3DYM1Q4X%252BBclADAEKa%252BoFo45PF%26msv%3D8.0.0%26brand%3DApple%26imei%3D0A835D15C8A5C72F13BB74FCC0B7AC9ED7B81CAB%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone7%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D20F4E03C-18D0-4A9B-940A-195E35A091FA"},{"key":"shuqirwbody6","val":"serviceWorkerOn=1&stopPullRefresh=1&from=ShuqiTab&upf=20368&sdk=13.0&utdid=YM1Q4X%2BBclADAEKa%2BoFo45PF&ustatus=0&first_placeid=111111&net_env=wifi&placeid=111111&user_id=2132283106&sn=A9D18F87BE36503968EAE6E2F26E45D725B48858&umidtoken=YM1Q4X%2BBclADAEKa%2BoFo45PF&msv=8.0.0&brand=Apple&imei=0A835D15C8A5C72F13BB74FCC0B7AC9ED7B81CAB&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&session=&skinColor=23B383&platform=1&ver=210301&mod=iPhone7&statusBarHeight=44.000000&skinVersion=1&wh=1242x2688&soft_id=21&utype=pre_vip&skinId=999&idfa=20F4E03C-18D0-4A9B-940A-195E35A091FA&params=%7B%22resources%22%3A%7B%22ShuqiBsDailyTask%22%3A%7B%7D%7D%7D&userId=2132283106&placeId=111111&timestamp=1624075309&sqSv=1.0&sign=91833ff57736416c66d0a1a7aa372900&key=sq_h5_gateway&_public="},{"key":"shuqifxbody6","val":""},{"key":"shuqisprwurl6","val":"https://ocean.shuqireader.com/api/ad/adserver/v1/api/getAdInfo?appVer=4.3.6.0&placeId=111111&platform=iOS&requestSrc=h5&resourceId=626&timestamp=1624075332&user_id=2132283106&sqSv=1.0&sign=bb780aa26731ac401a13e79f2c17b4a1&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.0%26utdid%3DYM1Q4X%252BBclADAEKa%252BoFo45PF%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2132283106%26sn%3DA9D18F87BE36503968EAE6E2F26E45D725B48858%26umidtoken%3DYM1Q4X%252BBclADAEKa%252BoFo45PF%26msv%3D8.0.0%26brand%3DApple%26imei%3D0A835D15C8A5C72F13BB74FCC0B7AC9ED7B81CAB%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone7%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D20F4E03C-18D0-4A9B-940A-195E35A091FA"},{"key":"shuqijlbody6","val":"requestSrc=h5&userId=2132283106&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624075309&sqSv=1.0&sign=9e8acf2915867787eaf01bcc52a085f4&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.0%26utdid%3DYM1Q4X%252BBclADAEKa%252BoFo45PF%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2132283106%26sn%3DA9D18F87BE36503968EAE6E2F26E45D725B48858%26umidtoken%3DYM1Q4X%252BBclADAEKa%252BoFo45PF%26msv%3D8.0.0%26brand%3DApple%26imei%3D0A835D15C8A5C72F13BB74FCC0B7AC9ED7B81CAB%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone7%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D20F4E03C-18D0-4A9B-940A-195E35A091FA"},{"key":"shuqisqjlbody6","val":"src=&userId=2132283106&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624075301&sqSv=1.0&sign=5eb0a01a99eb0eb663ba13150f756d9b&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.0%26utdid%3DYM1Q4X%252BBclADAEKa%252BoFo45PF%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2132283106%26sn%3DA9D18F87BE36503968EAE6E2F26E45D725B48858%26umidtoken%3DYM1Q4X%252BBclADAEKa%252BoFo45PF%26msv%3D8.0.0%26brand%3DApple%26imei%3D0A835D15C8A5C72F13BB74FCC0B7AC9ED7B81CAB%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone7%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D20F4E03C-18D0-4A9B-940A-195E35A091FA"},{"key":"shuqicjyurl6","val":"https://ocean.shuqireader.com/api/activity/activity/v1/lottery/info?timestamp=1624075334&userId=2132283106&activityId=311&sqSv=1.0&sign=7e9b784cede97b6103c31a44cc47df66&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.0%26utdid%3DYM1Q4X%252BBclADAEKa%252BoFo45PF%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2132283106%26sn%3DA9D18F87BE36503968EAE6E2F26E45D725B48858%26umidtoken%3DYM1Q4X%252BBclADAEKa%252BoFo45PF%26msv%3D8.0.0%26brand%3DApple%26imei%3D0A835D15C8A5C72F13BB74FCC0B7AC9ED7B81CAB%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone7%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D20F4E03C-18D0-4A9B-940A-195E35A091FA"},{"key":"shuqicjcsbody6","val":"_public=skinId%3D999%26idfa%3D20F4E03C-18D0-4A9B-940A-195E35A091FA%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26umidtoken%3DYM1Q4X%2BBclADAEKa%2BoFo45PF%26user_id%3D2132283106%26sn%3DA9D18F87BE36503968EAE6E2F26E45D725B48858%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D0A835D15C8A5C72F13BB74FCC0B7AC9ED7B81CAB%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhone7%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYM1Q4X%2BBclADAEKa%2BoFo45PF%26utype%3Dpre_vip%26sdk%3D13.0&deliveryId=711&key=sq_app_ad&miniWua=HHnB_aq%2BGZXgh98od7fbxGjKdV2YwUdpYHbNfpxvvIed4ny8%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=703&sign=43DC76A9B9BBE6AEA4D548DF1D21F5C0&timestamp=1624075318&userId=2132283106&user_id=2132283106&wua=HIVW_i5gMN5l8R9BmJg43vs4iaS0R0f5v0XAKNmnJiYW%2BVzGKfHx/HOS7FE2E5i4vSxO37YMWfHfs%2BDnMepAvT%2Buy8Us8R87DA4t%2BBHT7nJEp0XQntFQfL5sZUDbHLVuWjluqP8PoTCgkTMszzz8dvUdD/u5Vkse51Nu6/lLRm1pr49Dg4sGnDXTjyey5OttH//rEhmKOttxu%2BA/qGkx4bkeLJw%3D%3D"},{"key":"shuqicjbody6","val":"wua=HIVW_jE%2F3Zbf0JedSG62M6FMfxX%2FP1UBBuiK%2Byv%2ByEzTmmPl%2BVWF3uH%2FKLYSQfKKAj5mHtJJaY1XzYA3WiWZ%2BDX9LCWs6W2PCg2dYjU1NKnVWDzAeCA308AVbTwbmNgbl1Lf3q4JPV1lP5NG2uy%2Fsb97kNj%2BhwO6l3olEaFYi%2FTjn1EFhF1WVWEIYwTSn1jJPq9kqzl8H8qKFXaNjCgcal029p9YAadV5MgYY%2F0pZtSmlefI%3D&ua=&userId=2132283106&umidtoken=YM1Q4X%2BBclADAEKa%2BoFo45PF&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&asac=2A20C07RJ9F51AOEFSNHDR&timestamp=1624075322&activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&sqSv=1.0&sign=e1006dbc7c5a7f326695c2d17fbc4ef1&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.0%26utdid%3DYM1Q4X%252BBclADAEKa%252BoFo45PF%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2132283106%26sn%3DA9D18F87BE36503968EAE6E2F26E45D725B48858%26umidtoken%3DYM1Q4X%252BBclADAEKa%252BoFo45PF%26msv%3D8.0.0%26brand%3DApple%26imei%3D0A835D15C8A5C72F13BB74FCC0B7AC9ED7B81CAB%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone7%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D20F4E03C-18D0-4A9B-940A-195E35A091FA"},{"key":"shuqijsspbody6","val":""},{"key":"shuqijsydurl6","val":""},{"key":"shuqijsydbody6","val":""},{"key":"shuqijsqdbody6","val":""},{"key":"shuqijsqdspyurl6","val":""},{"key":"shuqijsqdspbody6","val":""},{"key":"shuqijsrwbody6","val":""},{"key":"shuqijsfxbody6","val":""},{"key":"shuqijsbookurl6","val":""},{"key":"shuqijsbookbody6","val":""},{"key":"shuqijssprwurl6","val":""},{"key":"shuqiuserurl7","val":"https://ocean.shuqireader.com/api/jaccount/accountapi/v1/sapi/account/getBindinfo?userId=2127868317&sqSv=1.0&timestamp=1624075453&sign=700d171648852e73b745deb3a6685601&key=sq_h5_gateway"},{"key":"shuqisyurl7","val":"https://render.shuqireader.com/load/resource?sdk=13.5.1&utdid=YM1Q6t8Iy6QDAHMQrarob7kg&ustatus=0&first_placeid=111111&net_env=3g&placeid=111111&user_id=2127868317&sn=6CE857A4BFE5DF542695C1D98739FD32D6F02441&umidtoken=YM1Q6t8Iy6QDAHMQrarob7kg&msv=8.0.0&brand=Apple&imei=1C1E38A745E5E7250BD7EB205578E1C0535C3815&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=iOS&ver=210301&mod=iPhone11ProMax&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=8A9E574B-7374-4C36-92FE-AC60E7A858B6"},{"key":"shuqisybody7","val":"appVer=4.3.6.0&imei=1C1E38A745E5E7250BD7EB205578E1C0535C3815&isNewUser=1&params=%7B%22resources%22%3A%7B%22ShuqiVipEntry%22%3A%7B%7D%2C%22personalCardConfig%22%3A%7B%7D%7D%7D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=bab0ab529af135689a5e20e7eb4b106a&sn=6CE857A4BFE5DF542695C1D98739FD32D6F02441&soft_id=21&timestamp=1624075349&user_id=2127868317&ver=210301"},{"key":"shuqispbody7","val":"_public=skinId%3D999%26idfa%3D8A9E574B-7374-4C36-92FE-AC60E7A858B6%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26umidtoken%3DYM1Q6t8Iy6QDAHMQrarob7kg%26user_id%3D2127868317%26sn%3D6CE857A4BFE5DF542695C1D98739FD32D6F02441%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D1C1E38A745E5E7250BD7EB205578E1C0535C3815%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhone11ProMax%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYM1Q6t8Iy6QDAHMQrarob7kg%26utype%3Dpre_vip%26sdk%3D13.5.1&deliveryId=525&key=sq_app_ad&miniWua=HHnB_D2yIKrsnZmAlOxUV7tux91nYz9a1pzYtuvmTguaL8ec%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=626&sign=C2E6C0AB7A3704EE556EFD7A08164E4F&timestamp=1624075392&userId=2127868317&user_id=2127868317&wua=HIVW_yS60I9hhXP25BttK9Dmd1uwksfwswuAKiN/tb3V7OgWZqkIqlfxP8qaL6g2ug9%2BfknpM7tNo8bbyM2JMKLKDlD4IoX0U21vG0vK45QAO46Z5uqn2Xnf%2BMCQKwVZZTeGQpBXZ30pHS9NgcCy5lk/1Ox5JgsVMl5EB1x5jV7uhjyEuZtQyuzU/CpqIT8R%2B1M3sSmOr%2BPgBByru4XLmIFb80G3nL9gBJnNtP68AKvW411g%3D"},{"key":"shuqiscbody7","val":""},{"key":"shuqiydbody7","val":""},{"key":"shuqiqdbody7","val":"clientTimestamp=1624075375&position=501&userId=2127868317&signInType=1&wua=HIVW_lyG%2FuZSX6awrJEesxYQy29nRlIoe7T%2BbNsXlS8nQREZin%2BUSEz9EAuzcH4A4sjzv2YjndbPFrcXdRSGnmY5zMQlPxkiwtE5DoRIGivjZiGPa%2BvmDuiReyGiV5TOduB8V0g2n6tnocipllYyVeMFHSXNtAxKG2H0d6yi2odZ%2BJBaYDADnbxdslCeZZtJtUMN94Qw8%2F%2FaiyrLq5ClrYAKVmwhaWi%2BfoXEfGyMPauq92Q4%3D&ua=&miniWua=HHnB_MnnnKkgB9tgflznQmLnXGv80EGGcx80dyLQZ3J6SnN8%3D&umidtoken=YM1Q6t8Iy6QDAHMQrarob7kg&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&sign=16bec2d8f4005f68fda35c8213269313&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.5.1%26utdid%3DYM1Q6t8Iy6QDAHMQrarob7kg%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2127868317%26sn%3D6CE857A4BFE5DF542695C1D98739FD32D6F02441%26umidtoken%3DYM1Q6t8Iy6QDAHMQrarob7kg%26msv%3D8.0.0%26brand%3DApple%26imei%3D1C1E38A745E5E7250BD7EB205578E1C0535C3815%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone11ProMax%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D8A9E574B-7374-4C36-92FE-AC60E7A858B6"},{"key":"shuqirwbody7","val":"serviceWorkerOn=1&stopPullRefresh=1&from=ShuqiTab&upf=20368&sdk=13.5.1&utdid=YM1Q6t8Iy6QDAHMQrarob7kg&ustatus=0&first_placeid=111111&net_env=3g&placeid=111111&user_id=2127868317&sn=6CE857A4BFE5DF542695C1D98739FD32D6F02441&umidtoken=YM1Q6t8Iy6QDAHMQrarob7kg&msv=8.0.0&brand=Apple&imei=1C1E38A745E5E7250BD7EB205578E1C0535C3815&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&session=&skinColor=23B383&platform=1&ver=210301&mod=iPhone11ProMax&statusBarHeight=44.000000&skinVersion=1&wh=1242x2688&soft_id=21&utype=pre_vip&skinId=999&idfa=8A9E574B-7374-4C36-92FE-AC60E7A858B6&params=%7B%22resources%22%3A%7B%22ShuqiBsDailyTask%22%3A%7B%7D%7D%7D&userId=2127868317&placeId=111111&timestamp=1624075398&sqSv=1.0&sign=00b9599870071fb85ac8ca2dda956e69&key=sq_h5_gateway&_public="},{"key":"shuqifxbody7","val":""},{"key":"shuqisprwurl7","val":"https://ocean.shuqireader.com/api/ad/adserver/v1/api/getAdInfo?appVer=4.3.6.0&placeId=111111&platform=iOS&requestSrc=h5&resourceId=626&timestamp=1624075453&user_id=2127868317&sqSv=1.0&sign=c836227f212953f559bada5d48503a45&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.5.1%26utdid%3DYM1Q6t8Iy6QDAHMQrarob7kg%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2127868317%26sn%3D6CE857A4BFE5DF542695C1D98739FD32D6F02441%26umidtoken%3DYM1Q6t8Iy6QDAHMQrarob7kg%26msv%3D8.0.0%26brand%3DApple%26imei%3D1C1E38A745E5E7250BD7EB205578E1C0535C3815%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone11ProMax%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D8A9E574B-7374-4C36-92FE-AC60E7A858B6"},{"key":"shuqijlbody7","val":"requestSrc=h5&userId=2127868317&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624075398&sqSv=1.0&sign=82cfd24ac29b31e4bc25f7a723625de1&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.5.1%26utdid%3DYM1Q6t8Iy6QDAHMQrarob7kg%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2127868317%26sn%3D6CE857A4BFE5DF542695C1D98739FD32D6F02441%26umidtoken%3DYM1Q6t8Iy6QDAHMQrarob7kg%26msv%3D8.0.0%26brand%3DApple%26imei%3D1C1E38A745E5E7250BD7EB205578E1C0535C3815%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone11ProMax%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D8A9E574B-7374-4C36-92FE-AC60E7A858B6"},{"key":"shuqisqjlbody7","val":"src=&userId=2127868317&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624075380&sqSv=1.0&sign=93a46a62201d2d8766df9385bed2e571&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.5.1%26utdid%3DYM1Q6t8Iy6QDAHMQrarob7kg%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2127868317%26sn%3D6CE857A4BFE5DF542695C1D98739FD32D6F02441%26umidtoken%3DYM1Q6t8Iy6QDAHMQrarob7kg%26msv%3D8.0.0%26brand%3DApple%26imei%3D1C1E38A745E5E7250BD7EB205578E1C0535C3815%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone11ProMax%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D8A9E574B-7374-4C36-92FE-AC60E7A858B6"},{"key":"shuqicjyurl7","val":"https://ocean.shuqireader.com/api/activity/activity/v1/lottery/info?timestamp=1624075456&userId=2127868317&activityId=311&sqSv=1.0&sign=99e91b1b14915dafcf0fb141e824bbca&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.5.1%26utdid%3DYM1Q6t8Iy6QDAHMQrarob7kg%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2127868317%26sn%3D6CE857A4BFE5DF542695C1D98739FD32D6F02441%26umidtoken%3DYM1Q6t8Iy6QDAHMQrarob7kg%26msv%3D8.0.0%26brand%3DApple%26imei%3D1C1E38A745E5E7250BD7EB205578E1C0535C3815%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone11ProMax%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D8A9E574B-7374-4C36-92FE-AC60E7A858B6"},{"key":"shuqicjcsbody7","val":"_public=skinId%3D999%26idfa%3D8A9E574B-7374-4C36-92FE-AC60E7A858B6%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26umidtoken%3DYM1Q6t8Iy6QDAHMQrarob7kg%26user_id%3D2127868317%26sn%3D6CE857A4BFE5DF542695C1D98739FD32D6F02441%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D1C1E38A745E5E7250BD7EB205578E1C0535C3815%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhone11ProMax%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYM1Q6t8Iy6QDAHMQrarob7kg%26utype%3Dpre_vip%26sdk%3D13.5.1&deliveryId=711&key=sq_app_ad&miniWua=HHnB_iBIw/XTBOxb0QHpdRUzIyI7COc6ePW2SiAnpdYMru7A%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=703&sign=3E03464F3EF1C9D9E7B0B24D9B94830E&timestamp=1624075405&userId=2127868317&user_id=2127868317&wua=HIVW_2sTJtyMUe9n9H2Wh7aORLhY1YQeVOLi7kYjOADW5KJXOVgCq3JEetTu8Q90ykzApT7CAn8CmgAvpWemvAKiVqXwBoZeHpSRJola/8Y%2BNs1dSAylWIlR0sEpGXQCNb5%2BP6Ex%2BXX2PYqeh9nfmZ%2B3iOBKaQXGxJuF0oPUNZIQ6oe5/bpUJNdNOAQi7hK4EsPDhhCi/NIMW5%2BhQi7eEx52cZUwIJRlhI1MKvCvaEtNv2/E%3D"},{"key":"shuqicjbody7","val":"wua=HIVW_bj7Qyes9TL2PVQ%2BuWh9J14yhgABTmRiJa68IGdiC2CGR7PqcXn8JjiYUA6Ah8obnpCiQPlh7oCa851w1f3I1%2Fh0T9%2FemalyRSWKp6epNSl0sNG1SLy5KVpVQR%2FwPywLluP%2FXu2fzdxOfdmjPHZoluMZOLKMi5yGiGABspvmddUQIbN9JzG%2FUabRi1otaOrlH5fC6oBWpwDzTBNy7YHCgXxknIjIZaPr07GNkZ9n8BHQ%3D&ua=&userId=2127868317&umidtoken=YM1Q6t8Iy6QDAHMQrarob7kg&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&asac=2A20C07RJ9F51AOEFSNHDR&timestamp=1624075409&activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&sqSv=1.0&sign=06363169182bd795960ff073e86604e0&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.5.1%26utdid%3DYM1Q6t8Iy6QDAHMQrarob7kg%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2127868317%26sn%3D6CE857A4BFE5DF542695C1D98739FD32D6F02441%26umidtoken%3DYM1Q6t8Iy6QDAHMQrarob7kg%26msv%3D8.0.0%26brand%3DApple%26imei%3D1C1E38A745E5E7250BD7EB205578E1C0535C3815%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone11ProMax%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D8A9E574B-7374-4C36-92FE-AC60E7A858B6"},{"key":"shuqijsspbody7","val":""},{"key":"shuqijsydurl7","val":""},{"key":"shuqijsydbody7","val":""},{"key":"shuqijsqdbody7","val":""},{"key":"shuqijsqdspyurl7","val":""},{"key":"shuqijsqdspbody7","val":""},{"key":"shuqijsrwbody7","val":""},{"key":"shuqijsfxbody7","val":""},{"key":"shuqijsbookurl7","val":""},{"key":"shuqijsbookbody7","val":""},{"key":"shuqijssprwurl7","val":""},{"key":"shuqiuserurl8","val":"https://ocean.shuqireader.com/api/jaccount/accountapi/v1/sapi/account/getBindinfo?userId=2127769542&sqSv=1.0&timestamp=1624075531&sign=cfc651763f874fd7bba07ae6e9730669&key=sq_h5_gateway"},{"key":"shuqisyurl8","val":"https://render.shuqireader.com/load/resource?sdk=13.1.2&utdid=YM1Q82jxA90DAAL8J3FtHKTv&ustatus=0&first_placeid=111111&net_env=wifi&placeid=111111&user_id=2127769542&sn=6454AD223E0786FDEB53F6E2905B0BE0725F5F6A&umidtoken=YM1Q82jxA90DAAL8J3FtHKTv&msv=8.0.0&brand=Apple&imei=0E8CB69B1E1A3F2CECC0FDB53DE80ABD82CA998D&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=iOS&ver=210301&mod=iPad4G&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=72EC079A-18F8-4735-82BE-03F1DCB5A4EE"},{"key":"shuqisybody8","val":"appVer=4.3.6.0&imei=0E8CB69B1E1A3F2CECC0FDB53DE80ABD82CA998D&isNewUser=1&params=%7B%22resources%22%3A%7B%22ShuqiVipEntry%22%3A%7B%7D%2C%22personalCardConfig%22%3A%7B%7D%7D%7D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=18562dd467c9c5762d284b79daa33573&sn=6454AD223E0786FDEB53F6E2905B0BE0725F5F6A&soft_id=21&timestamp=1624075472&user_id=2127769542&ver=210301"},{"key":"shuqispbody8","val":"_public=skinId%3D999%26idfa%3D72EC079A-18F8-4735-82BE-03F1DCB5A4EE%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26umidtoken%3DYM1Q82jxA90DAAL8J3FtHKTv%26user_id%3D2127769542%26sn%3D6454AD223E0786FDEB53F6E2905B0BE0725F5F6A%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D0E8CB69B1E1A3F2CECC0FDB53DE80ABD82CA998D%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPad4G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYM1Q82jxA90DAAL8J3FtHKTv%26utype%3Dpre_vip%26sdk%3D13.1.2&deliveryId=525&key=sq_app_ad&miniWua=HHnB_R%2Bt4s7V7CTceYnsXK9RTCDNMBBuXR8oxOjT68aSuO1o%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=626&sign=2D409F3760D29B173574B922FAB1F25A&timestamp=1624075497&userId=2127769542&user_id=2127769542&wua=HIVW_xzm8k6fkJ0M5omMhEoV7Koc91CBCgm%2ByNXAlwuRVKNRH7OFHNP/KL8Ngi1tjm6npSVBxrEwWJfHynEQnwkKWFF6OgA/YIKg/Lk6I%2BGnOhCa7Lv5MEgfBGktUjzLjjy/XYaI5CIiaRSXIl61hUG/CbO9s9zGbF0%2BpLIeB19S%2BNmRbnqam0UjtojAY5aP1wUtiRY0mWmdgGKIJi5ZzfGn/1UJrtf/0nZR0mF/8f2noyII%3D"},{"key":"shuqiscbody8","val":""},{"key":"shuqiydbody8","val":""},{"key":"shuqiqdbody8","val":"clientTimestamp=1624075485&position=501&userId=2127769542&signInType=1&wua=HIVW_WRJSOpNTVvnYCs0s1%2BvaJsOMwNUk4bSqa8iAkY48oCD2NPbAZtyZYjZerU6NeRiZiRYoLeklgnwHsx1XWbjrExtiqIQET7j2qz1exZiId%2BOShsz0yPXdItv8DHATkzJZA2hCWABEU%2BsO1p%2FCGLZyHShK2DTfombZi5RVgtQmp%2B6n3slOCTTQz9VLtJdv3UDCGV%2FlNDk7rDLzreYTueoqEqwXYGJEuzah1x%2BvQJNxRmc%3D&ua=&miniWua=HHnB_owe0ugFgPb2r3Fg3xsu6Tgwg666udIvc6049whjkvNo%3D&umidtoken=YM1Q82jxA90DAAL8J3FtHKTv&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&sign=0ad3f9cc2dafc2478fd0123b4d8147e8&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.1.2%26utdid%3DYM1Q82jxA90DAAL8J3FtHKTv%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2127769542%26sn%3D6454AD223E0786FDEB53F6E2905B0BE0725F5F6A%26umidtoken%3DYM1Q82jxA90DAAL8J3FtHKTv%26msv%3D8.0.0%26brand%3DApple%26imei%3D0E8CB69B1E1A3F2CECC0FDB53DE80ABD82CA998D%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad4G%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D72EC079A-18F8-4735-82BE-03F1DCB5A4EE"},{"key":"shuqirwbody8","val":"serviceWorkerOn=1&stopPullRefresh=1&from=ShuqiTab&upf=20368&sdk=13.1.2&utdid=YM1Q82jxA90DAAL8J3FtHKTv&ustatus=0&first_placeid=111111&net_env=wifi&placeid=111111&user_id=2127769542&sn=6454AD223E0786FDEB53F6E2905B0BE0725F5F6A&umidtoken=YM1Q82jxA90DAAL8J3FtHKTv&msv=8.0.0&brand=Apple&imei=0E8CB69B1E1A3F2CECC0FDB53DE80ABD82CA998D&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=1&ver=210301&mod=iPad4G&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=72EC079A-18F8-4735-82BE-03F1DCB5A4EE&params=%7B%22resources%22%3A%7B%22ShuqiBsDailyTask%22%3A%7B%7D%7D%7D&userId=2127769542&placeId=111111&timestamp=1624075506&sqSv=1.0&sign=ef8a64b476ecedba28a8ea8e4cdbe7d4&key=sq_h5_gateway&_public="},{"key":"shuqifxbody8","val":""},{"key":"shuqisprwurl8","val":"https://ocean.shuqireader.com/api/ad/adserver/v1/api/getAdInfo?appVer=4.3.6.0&placeId=111111&platform=iOS&requestSrc=h5&resourceId=626&timestamp=1624075532&user_id=2127769542&sqSv=1.0&sign=58e15508507ff37268c5e657d56ad834&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.1.2%26utdid%3DYM1Q82jxA90DAAL8J3FtHKTv%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2127769542%26sn%3D6454AD223E0786FDEB53F6E2905B0BE0725F5F6A%26umidtoken%3DYM1Q82jxA90DAAL8J3FtHKTv%26msv%3D8.0.0%26brand%3DApple%26imei%3D0E8CB69B1E1A3F2CECC0FDB53DE80ABD82CA998D%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad4G%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D72EC079A-18F8-4735-82BE-03F1DCB5A4EE"},{"key":"shuqijlbody8","val":"requestSrc=h5&userId=2127769542&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624075506&sqSv=1.0&sign=cbccd379064bdd76ccdf758d3b6e6b61&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.1.2%26utdid%3DYM1Q82jxA90DAAL8J3FtHKTv%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2127769542%26sn%3D6454AD223E0786FDEB53F6E2905B0BE0725F5F6A%26umidtoken%3DYM1Q82jxA90DAAL8J3FtHKTv%26msv%3D8.0.0%26brand%3DApple%26imei%3D0E8CB69B1E1A3F2CECC0FDB53DE80ABD82CA998D%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad4G%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D72EC079A-18F8-4735-82BE-03F1DCB5A4EE"},{"key":"shuqisqjlbody8","val":"src=&userId=2127769542&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624075493&sqSv=1.0&sign=d38c6ee2d6d26a6956a568bf224347c0&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.1.2%26utdid%3DYM1Q82jxA90DAAL8J3FtHKTv%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2127769542%26sn%3D6454AD223E0786FDEB53F6E2905B0BE0725F5F6A%26umidtoken%3DYM1Q82jxA90DAAL8J3FtHKTv%26msv%3D8.0.0%26brand%3DApple%26imei%3D0E8CB69B1E1A3F2CECC0FDB53DE80ABD82CA998D%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad4G%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D72EC079A-18F8-4735-82BE-03F1DCB5A4EE"},{"key":"shuqicjyurl8","val":"https://ocean.shuqireader.com/api/activity/activity/v1/lottery/info?timestamp=1624075534&userId=2127769542&activityId=311&sqSv=1.0&sign=4b78e002d0dfbb14cca68aa35a6a0985&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.1.2%26utdid%3DYM1Q82jxA90DAAL8J3FtHKTv%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2127769542%26sn%3D6454AD223E0786FDEB53F6E2905B0BE0725F5F6A%26umidtoken%3DYM1Q82jxA90DAAL8J3FtHKTv%26msv%3D8.0.0%26brand%3DApple%26imei%3D0E8CB69B1E1A3F2CECC0FDB53DE80ABD82CA998D%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad4G%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D72EC079A-18F8-4735-82BE-03F1DCB5A4EE"},{"key":"shuqicjcsbody8","val":"_public=skinId%3D999%26idfa%3D72EC079A-18F8-4735-82BE-03F1DCB5A4EE%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26umidtoken%3DYM1Q82jxA90DAAL8J3FtHKTv%26user_id%3D2127769542%26sn%3D6454AD223E0786FDEB53F6E2905B0BE0725F5F6A%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D0E8CB69B1E1A3F2CECC0FDB53DE80ABD82CA998D%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPad4G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYM1Q82jxA90DAAL8J3FtHKTv%26utype%3Dpre_vip%26sdk%3D13.1.2&deliveryId=711&key=sq_app_ad&miniWua=HHnB_CE5vcrguX3UOqanhXFbsnrpM3zUMvcH2s/H1xh0KTnc%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=703&sign=EEFB1CE6F4ECACCD894116BD694C450A&timestamp=1624075514&userId=2127769542&user_id=2127769542&wua=HIVW_QDchk2caQPJutdP/TUj8KWVWDJ1nda4DysF17RMMuk6MzpxG6OJ3xrg9FKog/4WxdHG8E%2BkQyFXElxUwkekn1li%2BlqiLBAYmOK/yVslxAc/Kc7dWxYHuUHTGvpbj5oNik5ly1bpsKGYgl4GZn2lLxAaPWkiDeIXw8eftUQBITBRvZ3Ua4UWMd6piJHgPY3uSXTnRir5z97HdiLA8PcHIdPgTqCu7EO93tDXv3I5PXJs%3D"},{"key":"shuqicjbody8","val":"wua=HIVW_lwZ2FiT%2FtqwQgTV5Wbxv%2Fp41HfZMsXCVXSz%2BthZr64S6w7fcQ256IbJoFaXW6xt426mpGL8WfDzEAJf9nG7ZLU1iFFFmGHcKSrq%2BOfCdvhGW4q19pb7FJlElZtx4MgKM9TJRSfiri%2F0OxLA%2FTQev1%2B6Btw8fqYF8dwnY3nxEyp1JSwfwc9ImpGbPqhU%2F%2Fnw1eM71wcf3K6IMQO2WZ%2B1kSxR6xIgSwX2I2lsulhMHtYU%3D&ua=&userId=2127769542&umidtoken=YM1Q82jxA90DAAL8J3FtHKTv&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&asac=2A20C07RJ9F51AOEFSNHDR&timestamp=1624075519&activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&sqSv=1.0&sign=6486270d6d5fc7f5bfb4eab07ec1b1c3&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.1.2%26utdid%3DYM1Q82jxA90DAAL8J3FtHKTv%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2127769542%26sn%3D6454AD223E0786FDEB53F6E2905B0BE0725F5F6A%26umidtoken%3DYM1Q82jxA90DAAL8J3FtHKTv%26msv%3D8.0.0%26brand%3DApple%26imei%3D0E8CB69B1E1A3F2CECC0FDB53DE80ABD82CA998D%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad4G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D72EC079A-18F8-4735-82BE-03F1DCB5A4EE"},{"key":"shuqijsspbody8","val":""},{"key":"shuqijsydurl8","val":""},{"key":"shuqijsydbody8","val":""},{"key":"shuqijsqdbody8","val":""},{"key":"shuqijsqdspyurl8","val":""},{"key":"shuqijsqdspbody8","val":""},{"key":"shuqijsrwbody8","val":""},{"key":"shuqijsfxbody8","val":""},{"key":"shuqijsbookurl8","val":""},{"key":"shuqijsbookbody8","val":""},{"key":"shuqijssprwurl8","val":""},{"key":"shuqiuserurl9","val":"https://ocean.shuqireader.com/api/jaccount/accountapi/v1/sapi/account/getBindinfo?userId=2129913534&sqSv=1.0&timestamp=1624075601&sign=399e1246b9b7f01ed4419e804527bd27&key=sq_h5_gateway"},{"key":"shuqisyurl9","val":"https://render.shuqireader.com/load/resource?sdk=13.2&utdid=YM1Q%2FHjUW3cDAJMP3GrfBGpI&ustatus=0&first_placeid=111111&net_env=wifi&placeid=111111&user_id=2129913534&sn=1D5EB73954E39AFA424B1590B16939A775513124&umidtoken=YM1Q%2FHjUW3cDAJMP3GrfBGpI&msv=8.0.0&brand=Apple&imei=755601E344584F3499BB9DA723591FEA8433D1EB&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=iOS&ver=210301&mod=iPhone11Pro&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=7CCD7A6D-DFD2-4391-9ABB-0DCD0CFCA01C"},{"key":"shuqisybody9","val":"appVer=4.3.6.0&imei=755601E344584F3499BB9DA723591FEA8433D1EB&isNewUser=1&params=%7B%22resources%22%3A%7B%22ShuqiVipEntry%22%3A%7B%7D%2C%22personalCardConfig%22%3A%7B%7D%7D%7D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=0a675cdda755796f6c4589c0cd801b7c&sn=1D5EB73954E39AFA424B1590B16939A775513124&soft_id=21&timestamp=1624075549&user_id=2129913534&ver=210301"},{"key":"shuqispbody9","val":"_public=skinId%3D999%26idfa%3D7CCD7A6D-DFD2-4391-9ABB-0DCD0CFCA01C%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26umidtoken%3DYM1Q/HjUW3cDAJMP3GrfBGpI%26user_id%3D2129913534%26sn%3D1D5EB73954E39AFA424B1590B16939A775513124%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D755601E344584F3499BB9DA723591FEA8433D1EB%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhone11Pro%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYM1Q/HjUW3cDAJMP3GrfBGpI%26utype%3Dpre_vip%26sdk%3D13.2&deliveryId=525&key=sq_app_ad&miniWua=HHnB_YXiwP5gIrqC7Q3mdntF8dfJv1YDLplFE0zm6fcmoO/g%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=626&sign=A199E83416B4A44FCB51A2F5D885B661&timestamp=1624075573&userId=2129913534&user_id=2129913534&wua=HIVW_vzVNLUQmNt5LvoJZM%2Borgi9/lynZ2l/rTvun4iDxsxDVGrCJ7zpaJGRxsxJXzdTkHGfcpz570a0/hZ%2B9WDXQMGMMDBrr057QcFw7LZor/UpN/dwD26a0IedLIuimEVMW923VpOgYOPxz0Ke/50MNRxLPrDo73G9BV0g7%2BglbBWvXf3aR5EUEVAODcOaDjS6tVXSwiysvuyQUQfuBJiMVNPnWCn4UkP2kfJCVLd4mwaw%3D"},{"key":"shuqiscbody9","val":""},{"key":"shuqiydbody9","val":""},{"key":"shuqiqdbody9","val":"clientTimestamp=1624075564&position=501&userId=2129913534&signInType=1&wua=HIVW_H7rY7M0r3OcJRdt6kxsJj%2ByVKNtUw7HKan6HxxHMa8pLtLPdfijOE9qLMTR9%2F9NhoSkF23NY21w9SA81zP4NjLHQUMwNzpjVg2GC09qviiUIdJm4H%2FCpuX7n706eR%2BTVqRBsNJdUpZIcCMnbFGrGK5r8XJrMnlz7g%2F3kolM3zCI5XjRMadfGCjOjnJGXx%2BUGYK%2B1xjn39OcbLnOP3Cjw20SKmAmbZi6rL9Gp9E86eCU%3D&ua=&miniWua=HHnB_lgGdCLsmdCN1KfyHP9QGMiaPlLeZuZOSJkTg7uyYS7k%3D&umidtoken=YM1Q%2FHjUW3cDAJMP3GrfBGpI&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&sign=c37916a84dcd20fc23aab398821cb9fe&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.2%26utdid%3DYM1Q%252FHjUW3cDAJMP3GrfBGpI%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2129913534%26sn%3D1D5EB73954E39AFA424B1590B16939A775513124%26umidtoken%3DYM1Q%252FHjUW3cDAJMP3GrfBGpI%26msv%3D8.0.0%26brand%3DApple%26imei%3D755601E344584F3499BB9DA723591FEA8433D1EB%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone11Pro%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D7CCD7A6D-DFD2-4391-9ABB-0DCD0CFCA01C"},{"key":"shuqirwbody9","val":"serviceWorkerOn=1&stopPullRefresh=1&from=ShuqiTab&upf=20368&sdk=13.2&utdid=YM1Q%2FHjUW3cDAJMP3GrfBGpI&ustatus=0&first_placeid=111111&net_env=wifi&placeid=111111&user_id=2129913534&sn=1D5EB73954E39AFA424B1590B16939A775513124&umidtoken=YM1Q%2FHjUW3cDAJMP3GrfBGpI&msv=8.0.0&brand=Apple&imei=755601E344584F3499BB9DA723591FEA8433D1EB&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&session=&skinColor=23B383&platform=1&ver=210301&mod=iPhone11Pro&statusBarHeight=44.000000&skinVersion=1&wh=1242x2688&soft_id=21&utype=pre_vip&skinId=999&idfa=7CCD7A6D-DFD2-4391-9ABB-0DCD0CFCA01C&params=%7B%22resources%22%3A%7B%22ShuqiBsDailyTask%22%3A%7B%7D%7D%7D&userId=2129913534&placeId=111111&timestamp=1624075579&sqSv=1.0&sign=011cc1273fa6553e4bde3505fe382990&key=sq_h5_gateway&_public="},{"key":"shuqifxbody9","val":""},{"key":"shuqisprwurl9","val":"https://ocean.shuqireader.com/api/ad/adserver/v1/api/getAdInfo?appVer=4.3.6.0&placeId=111111&platform=iOS&requestSrc=h5&resourceId=626&timestamp=1624075601&user_id=2129913534&sqSv=1.0&sign=502fb60aa06274e81da5c1bd23a214cb&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.2%26utdid%3DYM1Q%252FHjUW3cDAJMP3GrfBGpI%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2129913534%26sn%3D1D5EB73954E39AFA424B1590B16939A775513124%26umidtoken%3DYM1Q%252FHjUW3cDAJMP3GrfBGpI%26msv%3D8.0.0%26brand%3DApple%26imei%3D755601E344584F3499BB9DA723591FEA8433D1EB%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone11Pro%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D7CCD7A6D-DFD2-4391-9ABB-0DCD0CFCA01C"},{"key":"shuqijlbody9","val":"requestSrc=h5&userId=2129913534&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624075579&sqSv=1.0&sign=0ab2e3fcf7cf2afa73e75b664be52372&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.2%26utdid%3DYM1Q%252FHjUW3cDAJMP3GrfBGpI%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2129913534%26sn%3D1D5EB73954E39AFA424B1590B16939A775513124%26umidtoken%3DYM1Q%252FHjUW3cDAJMP3GrfBGpI%26msv%3D8.0.0%26brand%3DApple%26imei%3D755601E344584F3499BB9DA723591FEA8433D1EB%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone11Pro%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D7CCD7A6D-DFD2-4391-9ABB-0DCD0CFCA01C"},{"key":"shuqisqjlbody9","val":"src=&userId=2129913534&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624075569&sqSv=1.0&sign=7d731ac43d6d405332a88e0b238b85c9&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.2%26utdid%3DYM1Q%252FHjUW3cDAJMP3GrfBGpI%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2129913534%26sn%3D1D5EB73954E39AFA424B1590B16939A775513124%26umidtoken%3DYM1Q%252FHjUW3cDAJMP3GrfBGpI%26msv%3D8.0.0%26brand%3DApple%26imei%3D755601E344584F3499BB9DA723591FEA8433D1EB%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone11Pro%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D7CCD7A6D-DFD2-4391-9ABB-0DCD0CFCA01C"},{"key":"shuqicjyurl9","val":"https://ocean.shuqireader.com/api/activity/activity/v1/lottery/info?timestamp=1624075605&userId=2129913534&activityId=311&sqSv=1.0&sign=e5bdd470e3449b7b68d34d4889b80114&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.2%26utdid%3DYM1Q%252FHjUW3cDAJMP3GrfBGpI%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2129913534%26sn%3D1D5EB73954E39AFA424B1590B16939A775513124%26umidtoken%3DYM1Q%252FHjUW3cDAJMP3GrfBGpI%26msv%3D8.0.0%26brand%3DApple%26imei%3D755601E344584F3499BB9DA723591FEA8433D1EB%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone11Pro%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D7CCD7A6D-DFD2-4391-9ABB-0DCD0CFCA01C"},{"key":"shuqicjcsbody9","val":"_public=skinId%3D999%26idfa%3D7CCD7A6D-DFD2-4391-9ABB-0DCD0CFCA01C%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26umidtoken%3DYM1Q/HjUW3cDAJMP3GrfBGpI%26user_id%3D2129913534%26sn%3D1D5EB73954E39AFA424B1590B16939A775513124%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D755601E344584F3499BB9DA723591FEA8433D1EB%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhone11Pro%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYM1Q/HjUW3cDAJMP3GrfBGpI%26utype%3Dpre_vip%26sdk%3D13.2&deliveryId=711&key=sq_app_ad&miniWua=HHnB_GXZ6oxSDHHYbtGPa8iPHo3BwJU1cT4Ui/bvi8Q0lijo%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=703&sign=FAB646B3EAE89392BC345B2852AB766F&timestamp=1624075585&userId=2129913534&user_id=2129913534&wua=HIVW_0BnwDyBWN7A2Nhffp69pUvFff0hi%2BddlFkm49dInBZ%2BkkBcf28GoT8FiDtOh3Q2Gjb/ehakiRNcES//kDGrck2lsdOV9auEfiRIQKAdJHfVO4XgH%2BtkwxCd77kHfLGSKWK82emL4jzpUebbQNlUhdA10jGVt6uCAtcOFGYSU8CMtJqf5dsmirtsl2hZVEahid1cOxzMJykGVA1qtIRFb6yjR0ICHiaxe2GymHgJzZQw%3D"},{"key":"shuqicjbody9","val":"wua=HIVW_uBtMMXeElmhF8Qrh1UzjSDR%2F6cugyJSxs8OVaXlgVErdgmYV8phgeu27AyBrj%2F1z4Kv8YwtKFKEy7IBlVeGcM8Q3hmgMHWbrYZy2DNeLCmdLfBVgoAN1RiCW9IkewLKjiGfxM9DV3t%2BHOees6M0M9MWsRq1CU2A7O9jh443GzW%2FxrDPvwyLpNnK3VhJXQcwR08snMvFjjCIooEhXoDO9ew%3D%3D&ua=&userId=2129913534&umidtoken=YM1Q%2FHjUW3cDAJMP3GrfBGpI&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&asac=2A20C07RJ9F51AOEFSNHDR&timestamp=1624075591&activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&sqSv=1.0&sign=66573dc2d147d398005f1f7fa2c655d7&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.2%26utdid%3DYM1Q%252FHjUW3cDAJMP3GrfBGpI%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2129913534%26sn%3D1D5EB73954E39AFA424B1590B16939A775513124%26umidtoken%3DYM1Q%252FHjUW3cDAJMP3GrfBGpI%26msv%3D8.0.0%26brand%3DApple%26imei%3D755601E344584F3499BB9DA723591FEA8433D1EB%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone11Pro%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D7CCD7A6D-DFD2-4391-9ABB-0DCD0CFCA01C"},{"key":"shuqijsspbody9","val":""},{"key":"shuqijsydurl9","val":""},{"key":"shuqijsydbody9","val":""},{"key":"shuqijsqdbody9","val":""},{"key":"shuqijsqdspyurl9","val":""},{"key":"shuqijsqdspbody9","val":""},{"key":"shuqijsrwbody9","val":""},{"key":"shuqijsfxbody9","val":""},{"key":"shuqijsbookurl9","val":""},{"key":"shuqijsbookbody9","val":""},{"key":"shuqijssprwurl9","val":""},{"key":"shuqiuserurl10","val":"https://ocean.shuqireader.com/api/jaccount/accountapi/v1/sapi/account/getBindinfo?userId=2128715644&sqSv=1.0&timestamp=1624075669&sign=d10b169be9ac2f871bda45700f905449&key=sq_h5_gateway"},{"key":"shuqisyurl10","val":"https://render.shuqireader.com/load/resource?sdk=13.2.2&utdid=YM1RFuIQOQ8DAJr39vUGkPvt&ustatus=0&first_placeid=111111&net_env=4g&placeid=111111&user_id=2128715644&sn=BB616F6A37AE35504E3409772CE0D36B5C404494&umidtoken=YM1RFuIQOQ8DAJr39vUGkPvt&msv=8.0.0&brand=Apple&imei=97E8AC44C32891B01F57679985E014CC929E3D9E&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=iOS&ver=210301&mod=iPhone8P&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=C0812C49-C332-4B98-85EC-DBF2DD9D34E6"},{"key":"shuqisybody10","val":"appVer=4.3.6.0&imei=97E8AC44C32891B01F57679985E014CC929E3D9E&isNewUser=1&params=%7B%22resources%22%3A%7B%22ShuqiVipEntry%22%3A%7B%7D%2C%22personalCardConfig%22%3A%7B%7D%7D%7D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=9085597f603f4031db0798a201c33f4f&sn=BB616F6A37AE35504E3409772CE0D36B5C404494&soft_id=21&timestamp=1624075619&user_id=2128715644&ver=210301"},{"key":"shuqispbody10","val":"_public=skinId%3D999%26idfa%3DC0812C49-C332-4B98-85EC-DBF2DD9D34E6%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26umidtoken%3DYM1RFuIQOQ8DAJr39vUGkPvt%26user_id%3D2128715644%26sn%3DBB616F6A37AE35504E3409772CE0D36B5C404494%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D97E8AC44C32891B01F57679985E014CC929E3D9E%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhone8P%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYM1RFuIQOQ8DAJr39vUGkPvt%26utype%3Dpre_vip%26sdk%3D13.2.2&deliveryId=525&key=sq_app_ad&miniWua=HHnB_mbnNXr/N8EKscNR%2BNqWYV7wAFoAWPM/KlEifzsJRBYg%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=626&sign=7C397915E6CADB058781A15B85C78814&timestamp=1624075641&userId=2128715644&user_id=2128715644&wua=HIVW_4pXT2ha7pSBWsL08JmpLCk/ftyXTOQ0LDexBCMUifeVIB2BhTP0RhlwU1M2oIgixDHuwTiCTOpKSB0vX3vpHXTn1VgHMP6MCIeOMppSAneik13V9Vecc2RK1CuTYU8oDwu4eDqEsq7LI3VnBJQLStWwB4E0EqgRBjSXPai8txV02ThH6Q%2BKHiYTuOZGQNnT6F6mgGdkgUbJow8t5fr%2BPL6pRUy26Md3KPobice7KGEA%3D"},{"key":"shuqiscbody10","val":""},{"key":"shuqiydbody10","val":""},{"key":"shuqiqdbody10","val":"clientTimestamp=1624075633&position=501&userId=2128715644&signInType=1&wua=HIVW_yN9EdlVMZzx43vEKNjDIvpWS0XHsC%2FYY8sD3NPbaO78uuAh%2FbGufu8bTeAM0YwjO9SPR%2FzL5Lacn8p%2Bc%2FSnu3idv1DR5ihdNKcTNwGPrwYhS0IsPhkY%2FJX01VonyupgdCN9XUQ2EybhqGygwEbryT1uD70mnhwDMLErIyFVrXeN40RP5q6qfw9NUBjYcN5v0IPhlLUnb5KBtokPvYxuFysbgMbz0Q08MLABSUtPvK%2Bc%3D&ua=&miniWua=HHnB_pWW9lNSVkFM9qrLZJ2hijmC%2FDVyzscGJZzTnHAS353s%3D&umidtoken=YM1RFuIQOQ8DAJr39vUGkPvt&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&sign=21b341fb97048ac4195fc25ad4425cea&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.2.2%26utdid%3DYM1RFuIQOQ8DAJr39vUGkPvt%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2128715644%26sn%3DBB616F6A37AE35504E3409772CE0D36B5C404494%26umidtoken%3DYM1RFuIQOQ8DAJr39vUGkPvt%26msv%3D8.0.0%26brand%3DApple%26imei%3D97E8AC44C32891B01F57679985E014CC929E3D9E%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone8P%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DC0812C49-C332-4B98-85EC-DBF2DD9D34E6"},{"key":"shuqirwbody10","val":"serviceWorkerOn=1&stopPullRefresh=1&from=ShuqiTab&upf=20368&sdk=13.2.2&utdid=YM1RFuIQOQ8DAJr39vUGkPvt&ustatus=0&first_placeid=111111&net_env=4g&placeid=111111&user_id=2128715644&sn=BB616F6A37AE35504E3409772CE0D36B5C404494&umidtoken=YM1RFuIQOQ8DAJr39vUGkPvt&msv=8.0.0&brand=Apple&imei=97E8AC44C32891B01F57679985E014CC929E3D9E&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=1&ver=210301&mod=iPhone8P&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=C0812C49-C332-4B98-85EC-DBF2DD9D34E6&params=%7B%22resources%22%3A%7B%22ShuqiBsDailyTask%22%3A%7B%7D%7D%7D&userId=2128715644&placeId=111111&timestamp=1624075647&sqSv=1.0&sign=6cf962f44e6c4fd31a8f9dd38d5ef35b&key=sq_h5_gateway&_public="},{"key":"shuqifxbody10","val":""},{"key":"shuqisprwurl10","val":"https://ocean.shuqireader.com/api/ad/adserver/v1/api/getAdInfo?appVer=4.3.6.0&placeId=111111&platform=iOS&requestSrc=h5&resourceId=626&timestamp=1624075670&user_id=2128715644&sqSv=1.0&sign=64c85b6b2e59c01fe6470529862dd098&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.2.2%26utdid%3DYM1RFuIQOQ8DAJr39vUGkPvt%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2128715644%26sn%3DBB616F6A37AE35504E3409772CE0D36B5C404494%26umidtoken%3DYM1RFuIQOQ8DAJr39vUGkPvt%26msv%3D8.0.0%26brand%3DApple%26imei%3D97E8AC44C32891B01F57679985E014CC929E3D9E%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone8P%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DC0812C49-C332-4B98-85EC-DBF2DD9D34E6"},{"key":"shuqijlbody10","val":"requestSrc=h5&userId=2128715644&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624075647&sqSv=1.0&sign=a96e00922a9ba1da2befb017f4fa6c68&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.2.2%26utdid%3DYM1RFuIQOQ8DAJr39vUGkPvt%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2128715644%26sn%3DBB616F6A37AE35504E3409772CE0D36B5C404494%26umidtoken%3DYM1RFuIQOQ8DAJr39vUGkPvt%26msv%3D8.0.0%26brand%3DApple%26imei%3D97E8AC44C32891B01F57679985E014CC929E3D9E%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone8P%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DC0812C49-C332-4B98-85EC-DBF2DD9D34E6"},{"key":"shuqisqjlbody10","val":"src=&userId=2128715644&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624075638&sqSv=1.0&sign=6c5ec6f2978a507ce71d9dcd6912bf00&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.2.2%26utdid%3DYM1RFuIQOQ8DAJr39vUGkPvt%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2128715644%26sn%3DBB616F6A37AE35504E3409772CE0D36B5C404494%26umidtoken%3DYM1RFuIQOQ8DAJr39vUGkPvt%26msv%3D8.0.0%26brand%3DApple%26imei%3D97E8AC44C32891B01F57679985E014CC929E3D9E%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone8P%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DC0812C49-C332-4B98-85EC-DBF2DD9D34E6"},{"key":"shuqicjyurl10","val":"https://ocean.shuqireader.com/api/activity/activity/v1/lottery/info?timestamp=1624075672&userId=2128715644&activityId=311&sqSv=1.0&sign=6a2a93ca36ed3a292b2482d62587e17f&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.2.2%26utdid%3DYM1RFuIQOQ8DAJr39vUGkPvt%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2128715644%26sn%3DBB616F6A37AE35504E3409772CE0D36B5C404494%26umidtoken%3DYM1RFuIQOQ8DAJr39vUGkPvt%26msv%3D8.0.0%26brand%3DApple%26imei%3D97E8AC44C32891B01F57679985E014CC929E3D9E%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone8P%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DC0812C49-C332-4B98-85EC-DBF2DD9D34E6"},{"key":"shuqicjcsbody10","val":"_public=skinId%3D999%26idfa%3DC0812C49-C332-4B98-85EC-DBF2DD9D34E6%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26umidtoken%3DYM1RFuIQOQ8DAJr39vUGkPvt%26user_id%3D2128715644%26sn%3DBB616F6A37AE35504E3409772CE0D36B5C404494%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D97E8AC44C32891B01F57679985E014CC929E3D9E%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhone8P%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYM1RFuIQOQ8DAJr39vUGkPvt%26utype%3Dpre_vip%26sdk%3D13.2.2&deliveryId=711&key=sq_app_ad&miniWua=HHnB_dCoqqxVbt5nszL9Griyg4rD95kQq/nEG%2BGPbh0BWkeA%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=703&sign=B114DF53A30B9AC01B11929D905564EE&timestamp=1624075654&userId=2128715644&user_id=2128715644&wua=HIVW_f4o1aaP1L2MUzeUM6TSuXgiQ7aK10o0y3Q9zI/nu95VtgE94C69gKB5JAeEx2C7F6/9dR4pdllJC%2BemqkmgqbN5aKHbtSf3F5dZJ7u5ARg0JcMNTlABGOvGz0RQIuzoF0CFvtEVb6rKPt50aVqA4KR4zBt47lCKaFuvpy9H1dSwyDIH4OWsPAGNxQZcXWPjeUaJK2Dk7GPMFZkq2pJFMRFIx/ufIY2F%2BgmSSDuQBs1c%3D"},{"key":"shuqicjbody10","val":"wua=HIVW_9uPSaefitgLqj93kKODktalMJL778siztPLR74evuhMUbd9tmzcPdmZJlzAQNCbCseaHHjFOGu3IJFoiNk0zKj928EUhVxY6lSmmt0i%2B4MNvvK%2F3c7Z7q0lziF30%2Fakw11e44U7NXtwT%2B6Qse5uMMBRpKzHiIQBtVBouT9vydCmmM0I%2FzUNbY7pve21o07%2FvrT2xpFfez6Q5CgRM3ftZmRznyeqgHvjj1kEhibnogro%3D&ua=&userId=2128715644&umidtoken=YM1RFuIQOQ8DAJr39vUGkPvt&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&asac=2A20C07RJ9F51AOEFSNHDR&timestamp=1624075659&activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&sqSv=1.0&sign=f1b20dc107adac6f426bae81c4eadef3&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.2.2%26utdid%3DYM1RFuIQOQ8DAJr39vUGkPvt%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2128715644%26sn%3DBB616F6A37AE35504E3409772CE0D36B5C404494%26umidtoken%3DYM1RFuIQOQ8DAJr39vUGkPvt%26msv%3D8.0.0%26brand%3DApple%26imei%3D97E8AC44C32891B01F57679985E014CC929E3D9E%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone8P%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DC0812C49-C332-4B98-85EC-DBF2DD9D34E6"},{"key":"shuqijsspbody10","val":""},{"key":"shuqijsydurl10","val":""},{"key":"shuqijsydbody10","val":""},{"key":"shuqijsqdbody10","val":""},{"key":"shuqijsqdspyurl10","val":""},{"key":"shuqijsqdspbody10","val":""},{"key":"shuqijsrwbody10","val":""},{"key":"shuqijsfxbody10","val":""},{"key":"shuqijsbookurl10","val":""},{"key":"shuqijsbookbody10","val":""},{"key":"shuqijssprwurl10","val":""},{"key":"shuqiuserurl11","val":"https://ocean.shuqireader.com/api/jaccount/accountapi/v1/sapi/account/getBindinfo?userId=2130011757&sqSv=1.0&timestamp=1624075761&sign=eab07bba0f55b7315c455888a6eb7eaf&key=sq_h5_gateway"},{"key":"shuqisyurl11","val":"https://render.shuqireader.com/load/resource?sdk=13.1&utdid=YM1RIKmCH1wDAFr8ZXElqBZT&ustatus=0&first_placeid=111111&net_env=wifi&placeid=111111&user_id=2130011757&sn=E6F496EE8081329CDA9310BF00A8641237E417B3&umidtoken=YM1RIKmCH1wDAFr8ZXElqBZT&msv=8.0.0&brand=Apple&imei=CD68CE8D27BCD560699C894A0A96910E4C02F400&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=iOS&ver=210301&mod=iPad4G&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=FB819D77-A5AF-4A3D-A2EC-87A40B24C7C7"},{"key":"shuqisybody11","val":"appVer=4.3.6.0&imei=CD68CE8D27BCD560699C894A0A96910E4C02F400&isNewUser=1&params=%7B%22resources%22%3A%7B%22ShuqiVipEntry%22%3A%7B%7D%2C%22personalCardConfig%22%3A%7B%7D%7D%7D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=c0ff7ab16cbeda2b10548ba41eebcc63&sn=E6F496EE8081329CDA9310BF00A8641237E417B3&soft_id=21&timestamp=1624075693&user_id=2130011757&ver=210301"},{"key":"shuqispbody11","val":"_public=skinId%3D999%26idfa%3DFB819D77-A5AF-4A3D-A2EC-87A40B24C7C7%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26umidtoken%3DYM1RIKmCH1wDAFr8ZXElqBZT%26user_id%3D2130011757%26sn%3DE6F496EE8081329CDA9310BF00A8641237E417B3%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3DCD68CE8D27BCD560699C894A0A96910E4C02F400%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPad4G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYM1RIKmCH1wDAFr8ZXElqBZT%26utype%3Dpre_vip%26sdk%3D13.1&deliveryId=525&key=sq_app_ad&miniWua=HHnB_2b8SzgV2f4gjBRAEIQk0%2BOufJZuXMX2SrJdGTCEv10Q%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=626&sign=39D46A31A9F3900B63A6163B66FD002E&timestamp=1624075726&userId=2130011757&user_id=2130011757&wua=HIVW_UaatTafildAwlwZ0x3NFP4xJmWy9wwt7LAdUzDsjWWY%2BlyxguecXL1eblUR5zgzVzVy1aDDoB9h4hkZED6j9b9pLaXOeSZ1Eb7%2BtWKpE88u/%2BVxh8SiHMoEEy/dDHnxZ0y%2BL75Vj/G4JKAFs6Kb97Fp4uUDZnYgtCalj3rl3ZYed/jS0FYTQcHUztF2kXbOvfZ1UFvzBVldZJ24YD/nwc%2B/QqQmYOfxygpUxNtqx%2Bz0%3D"},{"key":"shuqiscbody11","val":""},{"key":"shuqiydbody11","val":""},{"key":"shuqiqdbody11","val":"clientTimestamp=1624075714&position=501&userId=2130011757&signInType=1&wua=HIVW_Fj1uvg6zNKmMj8boHF%2FLBOBN2e8c%2FrOcqeEVIVFB06IvaUogVkasUaC8nzj%2FAF4r8Z%2F2YN10llgeDfPHkFQuVnZ%2FO%2B9cbOlJvmtf%2BYKHOZQKY60Xe88cmhmKcAVEEQ%2B%2FRgM5BrMCaAz9jsatv5XzV91QAnIiZ7TLWWZ6mlRCSsK5HSEK7JTe9VNtOqKh5AzYWL0pBIQF1TSbxxy9WtsYhrvZ8CHTkdM9sJrV2Avlnmw%3D&ua=&miniWua=HHnB_OEFR1yaIJ9F%2BLiRF1Bu%2F5WKGauZbse5oXIItSCgb0hs%3D&umidtoken=YM1RIKmCH1wDAFr8ZXElqBZT&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&sign=8e78bff84a23155238dd060b986a63aa&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.1%26utdid%3DYM1RIKmCH1wDAFr8ZXElqBZT%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2130011757%26sn%3DE6F496EE8081329CDA9310BF00A8641237E417B3%26umidtoken%3DYM1RIKmCH1wDAFr8ZXElqBZT%26msv%3D8.0.0%26brand%3DApple%26imei%3DCD68CE8D27BCD560699C894A0A96910E4C02F400%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad4G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DFB819D77-A5AF-4A3D-A2EC-87A40B24C7C7"},{"key":"shuqirwbody11","val":"serviceWorkerOn=1&stopPullRefresh=1&from=ShuqiTab&upf=20368&sdk=13.1&utdid=YM1RIKmCH1wDAFr8ZXElqBZT&ustatus=0&first_placeid=111111&net_env=wifi&placeid=111111&user_id=2130011757&sn=E6F496EE8081329CDA9310BF00A8641237E417B3&umidtoken=YM1RIKmCH1wDAFr8ZXElqBZT&msv=8.0.0&brand=Apple&imei=CD68CE8D27BCD560699C894A0A96910E4C02F400&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&session=&skinColor=23B383&platform=1&ver=210301&mod=iPad4G&statusBarHeight=44.000000&skinVersion=1&wh=1242x2688&soft_id=21&utype=pre_vip&skinId=999&idfa=FB819D77-A5AF-4A3D-A2EC-87A40B24C7C7&params=%7B%22resources%22%3A%7B%22ShuqiBsDailyTask%22%3A%7B%7D%7D%7D&userId=2130011757&placeId=111111&timestamp=1624075732&sqSv=1.0&sign=88f85f8ab63b740bebb3c8a67903aad0&key=sq_h5_gateway&_public="},{"key":"shuqifxbody11","val":""},{"key":"shuqisprwurl11","val":"https://ocean.shuqireader.com/api/ad/adserver/v1/api/getAdInfo?appVer=4.3.6.0&placeId=111111&platform=iOS&requestSrc=h5&resourceId=626&timestamp=1624075756&user_id=2130011757&sqSv=1.0&sign=b500c51742bb06ef859ff04e0ccacf44&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.1%26utdid%3DYM1RIKmCH1wDAFr8ZXElqBZT%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2130011757%26sn%3DE6F496EE8081329CDA9310BF00A8641237E417B3%26umidtoken%3DYM1RIKmCH1wDAFr8ZXElqBZT%26msv%3D8.0.0%26brand%3DApple%26imei%3DCD68CE8D27BCD560699C894A0A96910E4C02F400%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad4G%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DFB819D77-A5AF-4A3D-A2EC-87A40B24C7C7"},{"key":"shuqijlbody11","val":"requestSrc=h5&userId=2130011757&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624075732&sqSv=1.0&sign=37dd380226e69708bf793863a644baa6&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.1%26utdid%3DYM1RIKmCH1wDAFr8ZXElqBZT%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2130011757%26sn%3DE6F496EE8081329CDA9310BF00A8641237E417B3%26umidtoken%3DYM1RIKmCH1wDAFr8ZXElqBZT%26msv%3D8.0.0%26brand%3DApple%26imei%3DCD68CE8D27BCD560699C894A0A96910E4C02F400%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad4G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DFB819D77-A5AF-4A3D-A2EC-87A40B24C7C7"},{"key":"shuqisqjlbody11","val":"src=&userId=2130011757&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624075721&sqSv=1.0&sign=76eb6324a3bc5fc15cc07c0f43c018f9&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.1%26utdid%3DYM1RIKmCH1wDAFr8ZXElqBZT%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2130011757%26sn%3DE6F496EE8081329CDA9310BF00A8641237E417B3%26umidtoken%3DYM1RIKmCH1wDAFr8ZXElqBZT%26msv%3D8.0.0%26brand%3DApple%26imei%3DCD68CE8D27BCD560699C894A0A96910E4C02F400%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad4G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DFB819D77-A5AF-4A3D-A2EC-87A40B24C7C7"},{"key":"shuqicjyurl11","val":"https://ocean.shuqireader.com/api/activity/activity/v1/lottery/info?timestamp=1624075761&userId=2130011757&activityId=311&sqSv=1.0&sign=533e3e783492a5e6506043e3d20cc4dc&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.1%26utdid%3DYM1RIKmCH1wDAFr8ZXElqBZT%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2130011757%26sn%3DE6F496EE8081329CDA9310BF00A8641237E417B3%26umidtoken%3DYM1RIKmCH1wDAFr8ZXElqBZT%26msv%3D8.0.0%26brand%3DApple%26imei%3DCD68CE8D27BCD560699C894A0A96910E4C02F400%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad4G%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DFB819D77-A5AF-4A3D-A2EC-87A40B24C7C7"},{"key":"shuqicjcsbody11","val":"_public=skinId%3D999%26idfa%3DFB819D77-A5AF-4A3D-A2EC-87A40B24C7C7%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26umidtoken%3DYM1RIKmCH1wDAFr8ZXElqBZT%26user_id%3D2130011757%26sn%3DE6F496EE8081329CDA9310BF00A8641237E417B3%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3DCD68CE8D27BCD560699C894A0A96910E4C02F400%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPad4G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYM1RIKmCH1wDAFr8ZXElqBZT%26utype%3Dpre_vip%26sdk%3D13.1&deliveryId=711&key=sq_app_ad&miniWua=HHnB_rcqR5H%2BuQRBdVJDTWwd3It9%2B77ZC4sEe8S/OY4REny4%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=703&sign=1475559790F4706E3CDF3F9A9CDB45AE&timestamp=1624075738&userId=2130011757&user_id=2130011757&wua=HIVW_Uu51B4A%2BSjrUvglVJBqLuQRel1IMkTkgofszq9Ecoq9ySoE2Z/YmjcIcfw6hpaHkkfS2Vk8%2BBsCfMcyBrxPmb0SIb5lg5zj7RibvAdKHWHliCXcyiiD2lwA6bwrSIvPO33ruwo12v%2BYDuErquelqdUcTleD4CSuKoSfdfQthjAmGPY/VJ1WpS%2BfnGAFGIbghKmM7pgCYq1Ff1sYtwVIEZWZcaan0go70JTl5aWAjaMQ%3D"},{"key":"shuqicjbody11","val":"wua=HIVW_2AYLrUv8uACQeuWVSuWmcRs2d0gK0ggrh2Vlk7bDIF1pJkvW%2BDW8BrOf1GRfmXVEkTY9soc5LiZBUANJODiItuATiQpUmsw2ZxQkfObsZX1KP7yxY39CCqF2AshuuuuMq7GRtEesVBXVpVwQc7PDy%2BOoV33SpOpV0ngGkR5WYVZQSf%2B0uyBsdQ9tcmTqfYxPv6LSIpVLPc%2BgmULZWvf5VjEK3yXdS%2FCrW2nSdes%2Fgwk%3D&ua=&userId=2130011757&umidtoken=YM1RIKmCH1wDAFr8ZXElqBZT&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&asac=2A20C07RJ9F51AOEFSNHDR&timestamp=1624075744&activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&sqSv=1.0&sign=266934b674aeb5001e7014b534594149&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.1%26utdid%3DYM1RIKmCH1wDAFr8ZXElqBZT%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2130011757%26sn%3DE6F496EE8081329CDA9310BF00A8641237E417B3%26umidtoken%3DYM1RIKmCH1wDAFr8ZXElqBZT%26msv%3D8.0.0%26brand%3DApple%26imei%3DCD68CE8D27BCD560699C894A0A96910E4C02F400%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad4G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DFB819D77-A5AF-4A3D-A2EC-87A40B24C7C7"},{"key":"shuqijsspbody11","val":""},{"key":"shuqijsydurl11","val":""},{"key":"shuqijsydbody11","val":""},{"key":"shuqijsqdbody11","val":""},{"key":"shuqijsqdspyurl11","val":""},{"key":"shuqijsqdspbody11","val":""},{"key":"shuqijsrwbody11","val":""},{"key":"shuqijsfxbody11","val":""},{"key":"shuqijsbookurl11","val":""},{"key":"shuqijsbookbody11","val":""},{"key":"shuqijssprwurl11","val":""},{"key":"shuqiuserurl12","val":"https://ocean.shuqireader.com/api/jaccount/accountapi/v1/sapi/account/getBindinfo?userId=2129862846&sqSv=1.0&timestamp=1624075835&sign=e90f88ba570a144d0da3bc0fd1829e91&key=sq_h5_gateway"},{"key":"shuqisyurl12","val":"https://render.shuqireader.com/load/resource?sdk=13.2.2&utdid=YM1uAMs0zGUDAPPrEV2%2BzD%2FO&ustatus=0&first_placeid=111111&net_env=wifi&placeid=111111&user_id=2129862846&sn=9C736147F0A6A0E3F9BACD51BDDD9A449A160342&umidtoken=YM1uAMs0zGUDAPPrEV2%2BzD%2FO&msv=8.0.0&brand=Apple&imei=19E6ED9604A0770B0BD8B25EF7C7BBC58CDA4383&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=iOS&ver=210301&mod=iPhoneXMAX&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=46A498AF-1278-4205-871D-348526D7170C"},{"key":"shuqisybody12","val":"appVer=4.3.6.0&imei=19E6ED9604A0770B0BD8B25EF7C7BBC58CDA4383&isNewUser=1&params=%7B%22resources%22%3A%7B%22ShuqiVipEntry%22%3A%7B%7D%2C%22personalCardConfig%22%3A%7B%7D%7D%7D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=2f643e8c62d8888382dba3684d8904ab&sn=9C736147F0A6A0E3F9BACD51BDDD9A449A160342&soft_id=21&timestamp=1624075778&user_id=2129862846&ver=210301"},{"key":"shuqispbody12","val":"_public=skinId%3D999%26idfa%3D46A498AF-1278-4205-871D-348526D7170C%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26umidtoken%3DYM1uAMs0zGUDAPPrEV2%2BzD/O%26user_id%3D2129862846%26sn%3D9C736147F0A6A0E3F9BACD51BDDD9A449A160342%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D19E6ED9604A0770B0BD8B25EF7C7BBC58CDA4383%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhoneXMAX%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYM1uAMs0zGUDAPPrEV2%2BzD/O%26utype%3Dpre_vip%26sdk%3D13.2.2&deliveryId=525&key=sq_app_ad&miniWua=HHnB_PtNTfHTGeELWqaXwnFCAucoqkri02KhcfTXv2fGVGJ4%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=626&sign=9A1426A1A751DB9056404336E3EB3872&timestamp=1624075800&userId=2129862846&user_id=2129862846&wua=HIVW_RB7fi0wVPk59%2By0rgma0BV%2BodcfnT24mklO8F4sIS2IM97oRihgGzieAKMb5f71GlZODQUvWUHk0wE0Xw3mgspncqNN0yz9TUeqKFlLRAOB%2BFBtoje/ff72jSnZ2dg3b9nKc7HU%2BXghtjRTTBF0uyysTgmmqrCT3vkq9sQGHdBHYcX3SiliXwPWpv7tXAZ5CARJIooGKYOpjSO2LZH3GVXw7cfLCPhKWDnBuB/2k0Xo%3D"},{"key":"shuqiscbody12","val":""},{"key":"shuqiydbody12","val":""},{"key":"shuqiqdbody12","val":"clientTimestamp=1624075793&position=501&userId=2129862846&signInType=1&wua=HIVW_eqh9me3NElk2SigxcShQlqDRP5kHlSGxFlSAMuoxvzIp6yM190AgIV%2FNS8VgIZDQ2ue%2B%2Bywr3QcgZB6%2Fk3j83sn2socMB%2BPYI2vHipdbaByrMCm%2BOQ3TV%2Byz2zpBqcTCfaQjRDutokNFWks9vwBZZHfTa9ujsLIlKYjUbq6GMLmmc7vfeE%2FMNX5W9ClbOziF2WSlIvDBP7ECBfYSku1c6XNrZCg2bb85%2BmT2hky9eXE%3D&ua=&miniWua=HHnB_x6Lplh6ZcAx47nxE%2FUmVX7N0nd4QSuoA0juix557sJM%3D&umidtoken=YM1uAMs0zGUDAPPrEV2%2BzD%2FO&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&sign=a3498548e4688862d0aafee97a797845&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.2.2%26utdid%3DYM1uAMs0zGUDAPPrEV2%252BzD%252FO%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2129862846%26sn%3D9C736147F0A6A0E3F9BACD51BDDD9A449A160342%26umidtoken%3DYM1uAMs0zGUDAPPrEV2%252BzD%252FO%26msv%3D8.0.0%26brand%3DApple%26imei%3D19E6ED9604A0770B0BD8B25EF7C7BBC58CDA4383%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhoneXMAX%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D46A498AF-1278-4205-871D-348526D7170C"},{"key":"shuqirwbody12","val":"serviceWorkerOn=1&stopPullRefresh=1&from=ShuqiTab&upf=20368&sdk=13.2.2&utdid=YM1uAMs0zGUDAPPrEV2%2BzD%2FO&ustatus=0&first_placeid=111111&net_env=wifi&placeid=111111&user_id=2129862846&sn=9C736147F0A6A0E3F9BACD51BDDD9A449A160342&umidtoken=YM1uAMs0zGUDAPPrEV2%2BzD%2FO&msv=8.0.0&brand=Apple&imei=19E6ED9604A0770B0BD8B25EF7C7BBC58CDA4383&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&session=&skinColor=23B383&platform=1&ver=210301&mod=iPhoneXMAX&statusBarHeight=44.000000&skinVersion=1&wh=1242x2688&soft_id=21&utype=pre_vip&skinId=999&idfa=46A498AF-1278-4205-871D-348526D7170C&params=%7B%22resources%22%3A%7B%22ShuqiBsDailyTask%22%3A%7B%7D%7D%7D&userId=2129862846&placeId=111111&timestamp=1624075807&sqSv=1.0&sign=b507987cf6d22dcf5790578cc006e52e&key=sq_h5_gateway&_public="},{"key":"shuqifxbody12","val":""},{"key":"shuqisprwurl12","val":"https://ocean.shuqireader.com/api/ad/adserver/v1/api/getAdInfo?appVer=4.3.6.0&placeId=111111&platform=iOS&requestSrc=h5&resourceId=626&timestamp=1624075836&user_id=2129862846&sqSv=1.0&sign=fb5d77eaeae5da4396f0dc07bf60191d&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.2.2%26utdid%3DYM1uAMs0zGUDAPPrEV2%252BzD%252FO%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2129862846%26sn%3D9C736147F0A6A0E3F9BACD51BDDD9A449A160342%26umidtoken%3DYM1uAMs0zGUDAPPrEV2%252BzD%252FO%26msv%3D8.0.0%26brand%3DApple%26imei%3D19E6ED9604A0770B0BD8B25EF7C7BBC58CDA4383%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhoneXMAX%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D46A498AF-1278-4205-871D-348526D7170C"},{"key":"shuqijlbody12","val":"requestSrc=h5&userId=2129862846&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624075807&sqSv=1.0&sign=22efdefbe052cd5dcb294344c9dae3c7&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.2.2%26utdid%3DYM1uAMs0zGUDAPPrEV2%252BzD%252FO%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2129862846%26sn%3D9C736147F0A6A0E3F9BACD51BDDD9A449A160342%26umidtoken%3DYM1uAMs0zGUDAPPrEV2%252BzD%252FO%26msv%3D8.0.0%26brand%3DApple%26imei%3D19E6ED9604A0770B0BD8B25EF7C7BBC58CDA4383%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhoneXMAX%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D46A498AF-1278-4205-871D-348526D7170C"},{"key":"shuqisqjlbody12","val":"src=&userId=2129862846&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624075797&sqSv=1.0&sign=7ecfea4f73627db41fddea749cf251fb&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.2.2%26utdid%3DYM1uAMs0zGUDAPPrEV2%252BzD%252FO%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2129862846%26sn%3D9C736147F0A6A0E3F9BACD51BDDD9A449A160342%26umidtoken%3DYM1uAMs0zGUDAPPrEV2%252BzD%252FO%26msv%3D8.0.0%26brand%3DApple%26imei%3D19E6ED9604A0770B0BD8B25EF7C7BBC58CDA4383%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhoneXMAX%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D46A498AF-1278-4205-871D-348526D7170C"},{"key":"shuqicjyurl12","val":"https://ocean.shuqireader.com/api/activity/activity/v1/lottery/info?timestamp=1624075838&userId=2129862846&activityId=311&sqSv=1.0&sign=3b94b7d1ff9d5de30a0351c0dd91e812&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.2.2%26utdid%3DYM1uAMs0zGUDAPPrEV2%252BzD%252FO%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2129862846%26sn%3D9C736147F0A6A0E3F9BACD51BDDD9A449A160342%26umidtoken%3DYM1uAMs0zGUDAPPrEV2%252BzD%252FO%26msv%3D8.0.0%26brand%3DApple%26imei%3D19E6ED9604A0770B0BD8B25EF7C7BBC58CDA4383%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhoneXMAX%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D46A498AF-1278-4205-871D-348526D7170C"},{"key":"shuqicjcsbody12","val":"_public=skinId%3D999%26idfa%3D46A498AF-1278-4205-871D-348526D7170C%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26umidtoken%3DYM1uAMs0zGUDAPPrEV2%2BzD/O%26user_id%3D2129862846%26sn%3D9C736147F0A6A0E3F9BACD51BDDD9A449A160342%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D19E6ED9604A0770B0BD8B25EF7C7BBC58CDA4383%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhoneXMAX%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYM1uAMs0zGUDAPPrEV2%2BzD/O%26utype%3Dpre_vip%26sdk%3D13.2.2&deliveryId=711&key=sq_app_ad&miniWua=HHnB_VCUhoWDSrer4rzYUULd3hNaXklT/O0UcZTyXtRGyFqY%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=703&sign=DD35028FDC481432EA009CE5E39C0EE0&timestamp=1624075814&userId=2129862846&user_id=2129862846&wua=HIVW_are/75xqV/WAC4XQSDN7xcywc/E0%2BfT5R6oeupHU1f7ZDqaI/hxHI7dXuOpKH1wE667aYGCoAyKeCYrDx24rL4r%2BRfyOf7Piw35BQPGZjice/a8UAd1p49j5W3P2nUrkiOtph3XI51zZjyxCeaRCf53rayZb1ChEt5DX2BljuwzL8mhpHbkLTdy6Q3xfh8%2BlOyJd5WDDkSAaCquM7z6ao2i0tWV2j5Z%2B7uxGgXqVx2Y%3D"},{"key":"shuqicjbody12","val":"wua=HIVW_A20t%2BCCxKiWvo4kaDp9MyAjdRaqk3%2B3kwZQPVBvH7qGN56XaZVdH7XkxI8bWKRBR6wsLM5Jb%2BWK49L3ZCK8aclbytMNpeL8HF2egE0JdVEI91Kg%2F7hMsa2WN%2B60DhY7CuPOTOjeJFiSs67mI7nrUhX7ySJxqCTg9F4Xd2%2BbQ1%2Fig0lyfPMM3McogYPewsFfj3v4MgFGdToQSAYdYIfvZdBiDZzkK3FCW23gu47yYBbU%3D&ua=&userId=2129862846&umidtoken=YM1uAMs0zGUDAPPrEV2%2BzD%2FO&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&asac=2A20C07RJ9F51AOEFSNHDR&timestamp=1624075825&activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&sqSv=1.0&sign=a99311a786cf4f44ad69668018c5d156&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.2.2%26utdid%3DYM1uAMs0zGUDAPPrEV2%252BzD%252FO%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2129862846%26sn%3D9C736147F0A6A0E3F9BACD51BDDD9A449A160342%26umidtoken%3DYM1uAMs0zGUDAPPrEV2%252BzD%252FO%26msv%3D8.0.0%26brand%3DApple%26imei%3D19E6ED9604A0770B0BD8B25EF7C7BBC58CDA4383%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhoneXMAX%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D46A498AF-1278-4205-871D-348526D7170C"},{"key":"shuqijsspbody12","val":""},{"key":"shuqijsydurl12","val":""},{"key":"shuqijsydbody12","val":""},{"key":"shuqijsqdbody12","val":""},{"key":"shuqijsqdspyurl12","val":""},{"key":"shuqijsqdspbody12","val":""},{"key":"shuqijsrwbody12","val":""},{"key":"shuqijsfxbody12","val":""},{"key":"shuqijsbookurl12","val":""},{"key":"shuqijsbookbody12","val":""},{"key":"shuqijssprwurl12","val":""},{"key":"shuqiuserurl13","val":"https://ocean.shuqireader.com/api/jaccount/accountapi/v1/sapi/account/getBindinfo?userId=2128265722&sqSv=1.0&timestamp=1624075915&sign=985eadb310abc229c58d6cfde79bba64&key=sq_h5_gateway"},{"key":"shuqisyurl13","val":"https://render.shuqireader.com/load/resource?sdk=13.1.3&utdid=YM1uUMvkSQ8DAOp2BKpjNk9d&ustatus=0&first_placeid=111111&net_env=4g&placeid=111111&user_id=2128265722&sn=C82786D096236DAAC93F68CF02BB9129DC24B6A7&umidtoken=YM1uUMvkSQ8DAOp2BKpjNk9d&msv=8.0.0&brand=Apple&imei=D95AB76B7C99E026BC3460A247B44EB855212F0C&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=iOS&ver=210301&mod=UnknowniPad&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=86F8C97C-833F-486B-829C-E547E2B61226"},{"key":"shuqisybody13","val":"appVer=4.3.6.0&imei=D95AB76B7C99E026BC3460A247B44EB855212F0C&isNewUser=1&params=%7B%22resources%22%3A%7B%22ShuqiVipEntry%22%3A%7B%7D%2C%22personalCardConfig%22%3A%7B%7D%7D%7D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=65d52b4dd3a4378a8dd83822c3bccf65&sn=C82786D096236DAAC93F68CF02BB9129DC24B6A7&soft_id=21&timestamp=1624075858&user_id=2128265722&ver=210301"},{"key":"shuqispbody13","val":"_public=skinId%3D999%26idfa%3D86F8C97C-833F-486B-829C-E547E2B61226%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26umidtoken%3DYM1uUMvkSQ8DAOp2BKpjNk9d%26user_id%3D2128265722%26sn%3DC82786D096236DAAC93F68CF02BB9129DC24B6A7%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3DD95AB76B7C99E026BC3460A247B44EB855212F0C%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYM1uUMvkSQ8DAOp2BKpjNk9d%26utype%3Dpre_vip%26sdk%3D13.1.3&deliveryId=525&key=sq_app_ad&miniWua=HHnB_IL0%2BKRyOp8SsimpCCiSrOkKCU1Cs5QVB1v4KWpX94ms%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=626&sign=44CEBC828111DC525C0790BADFCF2193&timestamp=1624075888&userId=2128265722&user_id=2128265722&wua=HIVW_GQdn/AA8Q0%2BqpQKhuWJ8gDnR1l1aLlHP9W6yMmfSkTzQmy0sCLVHrx/pSGqBlDBbxTPHYnNBPeVYd/%2BNTqC8ycQf/NqfY/jJfA%2B90ip7h5cZSneDYmYEICBHER64HmSjmNqeTG7ZSSMRk1v0eie9S0J7ZnSMY2MnhRojZEjWd7ICrsDuw%2B/ZRuPyj%2BWj5kjxjMatLmXuP1Cq6zeb5U6v4NFKYHJoioCUvOgSqHbJuNU%3D"},{"key":"shuqiscbody13","val":""},{"key":"shuqiydbody13","val":""},{"key":"shuqiqdbody13","val":"clientTimestamp=1624075876&position=501&userId=2128265722&signInType=1&wua=HIVW_wxrQfcJfr9QeRXfrIfa51lnS0hS52YBRphRpeekc9%2BfG5gzs62ysDANFlGuPMNnm0nYxJ2Kzce71b45UF287qeAdIPb8iTULkcR8KK11upxLWOHcPSSfKEp1m9ntP07wtKN5BfTiGNNcewD4iNhlp2ppYoDBG6byPRXXDNKMVFpRSqHxNvqA2vWYZmbw9IT6VAAkvNRYOS8%2Fs6IBczBeqXt2ych3Vvz8Vvm6361qygU%3D&ua=&miniWua=HHnB_inGVaUZZl9exHSEWp0RqciZLgVV%2FdxBi4XeQof1oKaE%3D&umidtoken=YM1uUMvkSQ8DAOp2BKpjNk9d&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&sign=de48398282eb344588cb27e2859eaf40&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.1.3%26utdid%3DYM1uUMvkSQ8DAOp2BKpjNk9d%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2128265722%26sn%3DC82786D096236DAAC93F68CF02BB9129DC24B6A7%26umidtoken%3DYM1uUMvkSQ8DAOp2BKpjNk9d%26msv%3D8.0.0%26brand%3DApple%26imei%3DD95AB76B7C99E026BC3460A247B44EB855212F0C%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D86F8C97C-833F-486B-829C-E547E2B61226"},{"key":"shuqirwbody13","val":"serviceWorkerOn=1&stopPullRefresh=1&from=ShuqiTab&upf=20368&sdk=13.1.3&utdid=YM1uUMvkSQ8DAOp2BKpjNk9d&ustatus=0&first_placeid=111111&net_env=4g&placeid=111111&user_id=2128265722&sn=C82786D096236DAAC93F68CF02BB9129DC24B6A7&umidtoken=YM1uUMvkSQ8DAOp2BKpjNk9d&msv=8.0.0&brand=Apple&imei=D95AB76B7C99E026BC3460A247B44EB855212F0C&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&session=&skinColor=23B383&platform=1&ver=210301&mod=UnknowniPad&statusBarHeight=44.000000&skinVersion=1&wh=1242x2688&soft_id=21&utype=pre_vip&skinId=999&idfa=86F8C97C-833F-486B-829C-E547E2B61226&params=%7B%22resources%22%3A%7B%22ShuqiBsDailyTask%22%3A%7B%7D%7D%7D&userId=2128265722&placeId=111111&timestamp=1624075894&sqSv=1.0&sign=f44e8aa046a2a72a27f29df5b620b5b0&key=sq_h5_gateway&_public="},{"key":"shuqifxbody13","val":""},{"key":"shuqisprwurl13","val":"https://ocean.shuqireader.com/api/ad/adserver/v1/api/getAdInfo?appVer=4.3.6.0&placeId=111111&platform=iOS&requestSrc=h5&resourceId=626&timestamp=1624075915&user_id=2128265722&sqSv=1.0&sign=f937a940832f2d95400c9f06f4ac06cb&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.1.3%26utdid%3DYM1uUMvkSQ8DAOp2BKpjNk9d%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2128265722%26sn%3DC82786D096236DAAC93F68CF02BB9129DC24B6A7%26umidtoken%3DYM1uUMvkSQ8DAOp2BKpjNk9d%26msv%3D8.0.0%26brand%3DApple%26imei%3DD95AB76B7C99E026BC3460A247B44EB855212F0C%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D86F8C97C-833F-486B-829C-E547E2B61226"},{"key":"shuqijlbody13","val":"requestSrc=h5&userId=2128265722&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624075894&sqSv=1.0&sign=406e9ee23924c83294f2a3cca40b5e9a&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.1.3%26utdid%3DYM1uUMvkSQ8DAOp2BKpjNk9d%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2128265722%26sn%3DC82786D096236DAAC93F68CF02BB9129DC24B6A7%26umidtoken%3DYM1uUMvkSQ8DAOp2BKpjNk9d%26msv%3D8.0.0%26brand%3DApple%26imei%3DD95AB76B7C99E026BC3460A247B44EB855212F0C%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D86F8C97C-833F-486B-829C-E547E2B61226"},{"key":"shuqisqjlbody13","val":"src=&userId=2128265722&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624075882&sqSv=1.0&sign=d250d87fd599409aee606fcb751539f6&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.1.3%26utdid%3DYM1uUMvkSQ8DAOp2BKpjNk9d%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2128265722%26sn%3DC82786D096236DAAC93F68CF02BB9129DC24B6A7%26umidtoken%3DYM1uUMvkSQ8DAOp2BKpjNk9d%26msv%3D8.0.0%26brand%3DApple%26imei%3DD95AB76B7C99E026BC3460A247B44EB855212F0C%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D86F8C97C-833F-486B-829C-E547E2B61226"},{"key":"shuqicjyurl13","val":"https://ocean.shuqireader.com/api/activity/activity/v1/lottery/info?timestamp=1624075919&userId=2128265722&activityId=311&sqSv=1.0&sign=962efb6d8ac332874eb0fafc933ae607&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.1.3%26utdid%3DYM1uUMvkSQ8DAOp2BKpjNk9d%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2128265722%26sn%3DC82786D096236DAAC93F68CF02BB9129DC24B6A7%26umidtoken%3DYM1uUMvkSQ8DAOp2BKpjNk9d%26msv%3D8.0.0%26brand%3DApple%26imei%3DD95AB76B7C99E026BC3460A247B44EB855212F0C%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D86F8C97C-833F-486B-829C-E547E2B61226"},{"key":"shuqicjcsbody13","val":"_public=skinId%3D999%26idfa%3D86F8C97C-833F-486B-829C-E547E2B61226%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26umidtoken%3DYM1uUMvkSQ8DAOp2BKpjNk9d%26user_id%3D2128265722%26sn%3DC82786D096236DAAC93F68CF02BB9129DC24B6A7%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3DD95AB76B7C99E026BC3460A247B44EB855212F0C%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYM1uUMvkSQ8DAOp2BKpjNk9d%26utype%3Dpre_vip%26sdk%3D13.1.3&deliveryId=711&key=sq_app_ad&miniWua=HHnB_Kgmk8%2Bg%2BTGxlofwKvdVu0LrpMXk9wBb3o5owtBYktA8%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=703&sign=0903CC5754F797405391367474F0E79A&timestamp=1624075900&userId=2128265722&user_id=2128265722&wua=HIVW_px3gobnC1ZMHEEtY26cHtn4fp3W6lqfyosFY1hO1bO4kJTRq4LwLRRc8cmHiYAAZbXvGNug9I1VbSp3DxTS1piyRO8o4hDroBa4FFemSyQGmtZ03yDh4AwQwMmBD%2BJD%2BoD4OT8ktn%2B/dcxYBqHQ7nRrCvqCgoAS0R0BjOpuQGNDbn34Fx9aIjv/ImD6dNM9KHMzL1tqRBhJOLthJkx7QLDn6A47agd1xqcgS7OOoxp4%3D"},{"key":"shuqicjbody13","val":"wua=HIVW_BmFXibotFRaQWOT71cvcDnDXMu%2BZylUSfcFkmHK1%2BJqxzH4BbZiiJk0MmgvyDi4KnWD%2BF%2Fazhlmooiwi6GDxyfGIKLhe7l7ovbLcQfEKICpi0R6LimGFL3iW6uS1gBCZ6H82%2FUFA%2BnO6h8RIpCehNUSAggWSMfDpCSfKsk6WRvnWT%2BFkx1nyD4QGofIX9pyL9ihTAj5HKrVFOQmQGn%2BbuTfZWrIx4DTMFNa6ZrgagBE%3D&ua=&userId=2128265722&umidtoken=YM1uUMvkSQ8DAOp2BKpjNk9d&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&asac=2A20C07RJ9F51AOEFSNHDR&timestamp=1624075905&activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&sqSv=1.0&sign=a4bd739e5b8466cec350a2e4f2bf5d0f&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.1.3%26utdid%3DYM1uUMvkSQ8DAOp2BKpjNk9d%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2128265722%26sn%3DC82786D096236DAAC93F68CF02BB9129DC24B6A7%26umidtoken%3DYM1uUMvkSQ8DAOp2BKpjNk9d%26msv%3D8.0.0%26brand%3DApple%26imei%3DD95AB76B7C99E026BC3460A247B44EB855212F0C%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D86F8C97C-833F-486B-829C-E547E2B61226"},{"key":"shuqijsspbody13","val":""},{"key":"shuqijsydurl13","val":""},{"key":"shuqijsydbody13","val":""},{"key":"shuqijsqdbody13","val":""},{"key":"shuqijsqdspyurl13","val":""},{"key":"shuqijsqdspbody13","val":""},{"key":"shuqijsrwbody13","val":""},{"key":"shuqijsfxbody13","val":""},{"key":"shuqijsbookurl13","val":""},{"key":"shuqijsbookbody13","val":""},{"key":"shuqijssprwurl13","val":""},{"key":"shuqiuserurl14","val":"https://ocean.shuqireader.com/api/jaccount/accountapi/v1/sapi/account/getBindinfo?userId=2132332832&sqSv=1.0&timestamp=1624076004&sign=962d5c434058a9f5541856e2f98055e8&key=sq_h5_gateway"},{"key":"shuqisyurl14","val":"https://render.shuqireader.com/load/resource?sdk=13.3&utdid=YM1Rs%2FH2ur4DANfoBkOXRaOJ&ustatus=0&first_placeid=111111&net_env=wifi&placeid=111111&user_id=2132332832&sn=4F82992BA34B75AB3A576595DF71814238FB4D71&umidtoken=YM1Rs%2FH2ur4DANfoBkOXRaOJ&msv=8.0.0&brand=Apple&imei=A4132ED040624D45547129A4D3A2B0DE80560F91&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=iOS&ver=210301&mod=iPad3G&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=01CFAC26-95E4-4536-8D96-2F75DC36A53E"},{"key":"shuqisybody14","val":"appVer=4.3.6.0&imei=A4132ED040624D45547129A4D3A2B0DE80560F91&isNewUser=1&params=%7B%22resources%22%3A%7B%22ShuqiVipEntry%22%3A%7B%7D%2C%22personalCardConfig%22%3A%7B%7D%7D%7D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=83b58f1dcacd4a8788f3b56cdfd12fe5&sn=4F82992BA34B75AB3A576595DF71814238FB4D71&soft_id=21&timestamp=1624075938&user_id=2132332832&ver=210301"},{"key":"shuqispbody14","val":"_public=skinId%3D999%26idfa%3D01CFAC26-95E4-4536-8D96-2F75DC36A53E%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26umidtoken%3DYM1Rs/H2ur4DANfoBkOXRaOJ%26user_id%3D2132332832%26sn%3D4F82992BA34B75AB3A576595DF71814238FB4D71%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3DA4132ED040624D45547129A4D3A2B0DE80560F91%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPad3G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYM1Rs/H2ur4DANfoBkOXRaOJ%26utype%3Dpre_vip%26sdk%3D13.3&deliveryId=525&key=sq_app_ad&miniWua=HHnB_8vSLXtZMYDvexcd5e3MQBdvVFmTTGiU1mjSKp%2BwjjXU%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=626&sign=B2D413679CBF7D9C404191089900AC59&timestamp=1624075976&userId=2132332832&user_id=2132332832&wua=HIVW_zGia2N8CTtLax11kcs8tAdSbfBxTkHLpKRmUh3c3bAF1S/EA8fDhFupyRjbKdEsKcdlBxok%2BbL4YjvSBmZcCanZj5BXfwOsrJnTQWATfo7SXMLDpH4fBFs6H8RFEibugT9psXesKXywbAppC7kTtItZfdbbcOvs%2B4Y4vgCWwbWoe1QRkkXdvEjI5USPttTt4sSFvTR/jdi39Ha%2BrITjcbfYwpJptnxQssDW0sKX5CL8%3D"},{"key":"shuqiscbody14","val":""},{"key":"shuqiydbody14","val":""},{"key":"shuqiqdbody14","val":"clientTimestamp=1624075965&position=501&userId=2132332832&signInType=1&wua=HIVW_%2F0vB2ykwe96oagRhwmZi4ZFV10n2ijmyQFNIbHtQrsG%2FKSrkAJE0GGWsC%2BO1d9LFAzMHvo%2BEfmskFytDsnYG1OgH9gibR9ZpeXyMjaX6CnOmBRfDfbk8%2BaFf14lfo17aIJS%2Bfq8cn4Qz5DLGIaXvQfwcY7Pew9gPe4DwrOQg0ZcPGfMD3Ns2VaG2bUnJ1v9jLlGDmT8UTbKbh7ji5Ip%2Fx%2F%2FkViZZNQ4BU8%2B2WbOdXfY%3D&ua=&miniWua=HHnB_rTO0p54i30ti4zhMMa2k%2FlpquBJOUoB%2FLT2dEuCzxdk%3D&umidtoken=YM1Rs%2FH2ur4DANfoBkOXRaOJ&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&sign=7b907069f2efad73ca246168a40fc800&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26sdk%3D13.3%26utdid%3DYM1Rs%252FH2ur4DANfoBkOXRaOJ%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2132332832%26sn%3D4F82992BA34B75AB3A576595DF71814238FB4D71%26umidtoken%3DYM1Rs%252FH2ur4DANfoBkOXRaOJ%26msv%3D8.0.0%26brand%3DApple%26imei%3DA4132ED040624D45547129A4D3A2B0DE80560F91%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad3G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D01CFAC26-95E4-4536-8D96-2F75DC36A53E"},{"key":"shuqirwbody14","val":"serviceWorkerOn=1&sdk=13.3&utdid=YM1Rs%2FH2ur4DANfoBkOXRaOJ&ustatus=0&first_placeid=111111&net_env=wifi&placeid=111111&user_id=2132332832&sn=4F82992BA34B75AB3A576595DF71814238FB4D71&umidtoken=YM1Rs%2FH2ur4DANfoBkOXRaOJ&msv=8.0.0&brand=Apple&imei=A4132ED040624D45547129A4D3A2B0DE80560F91&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&session=&skinColor=23B383&platform=1&ver=210301&mod=iPad3G&statusBarHeight=44.000000&skinVersion=1&wh=1242x2688&soft_id=21&utype=pre_vip&skinId=999&idfa=01CFAC26-95E4-4536-8D96-2F75DC36A53E&params=%7B%22resources%22%3A%7B%22ShuqiBsDailyTask%22%3A%7B%7D%7D%7D&userId=2132332832&placeId=111111&timestamp=1624075982&sqSv=1.0&sign=1a4f031c6b95a907d6e2c3ee69d31173&key=sq_h5_gateway&_public="},{"key":"shuqifxbody14","val":""},{"key":"shuqisprwurl14","val":"https://ocean.shuqireader.com/api/ad/adserver/v1/api/getAdInfo?appVer=4.3.6.0&placeId=111111&platform=iOS&requestSrc=h5&resourceId=626&timestamp=1624076005&user_id=2132332832&sqSv=1.0&sign=09b9d06dc17a64c93100719981a931de&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.3%26utdid%3DYM1Rs%252FH2ur4DANfoBkOXRaOJ%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2132332832%26sn%3D4F82992BA34B75AB3A576595DF71814238FB4D71%26umidtoken%3DYM1Rs%252FH2ur4DANfoBkOXRaOJ%26msv%3D8.0.0%26brand%3DApple%26imei%3DA4132ED040624D45547129A4D3A2B0DE80560F91%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad3G%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D01CFAC26-95E4-4536-8D96-2F75DC36A53E"},{"key":"shuqijlbody14","val":"requestSrc=h5&userId=2132332832&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624075982&sqSv=1.0&sign=27e397a77316b9740ad5b44a59cb1985&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26sdk%3D13.3%26utdid%3DYM1Rs%252FH2ur4DANfoBkOXRaOJ%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2132332832%26sn%3D4F82992BA34B75AB3A576595DF71814238FB4D71%26umidtoken%3DYM1Rs%252FH2ur4DANfoBkOXRaOJ%26msv%3D8.0.0%26brand%3DApple%26imei%3DA4132ED040624D45547129A4D3A2B0DE80560F91%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad3G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D01CFAC26-95E4-4536-8D96-2F75DC36A53E"},{"key":"shuqisqjlbody14","val":"src=&userId=2132332832&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624075969&sqSv=1.0&sign=30f120c7b452470e23899cdfd2944b5c&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26sdk%3D13.3%26utdid%3DYM1Rs%252FH2ur4DANfoBkOXRaOJ%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2132332832%26sn%3D4F82992BA34B75AB3A576595DF71814238FB4D71%26umidtoken%3DYM1Rs%252FH2ur4DANfoBkOXRaOJ%26msv%3D8.0.0%26brand%3DApple%26imei%3DA4132ED040624D45547129A4D3A2B0DE80560F91%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad3G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D01CFAC26-95E4-4536-8D96-2F75DC36A53E"},{"key":"shuqicjyurl14","val":"https://ocean.shuqireader.com/api/activity/activity/v1/lottery/info?timestamp=1624076009&userId=2132332832&activityId=311&sqSv=1.0&sign=9a6eb078a091cec70407f8e7a368107a&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.3%26utdid%3DYM1Rs%252FH2ur4DANfoBkOXRaOJ%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2132332832%26sn%3D4F82992BA34B75AB3A576595DF71814238FB4D71%26umidtoken%3DYM1Rs%252FH2ur4DANfoBkOXRaOJ%26msv%3D8.0.0%26brand%3DApple%26imei%3DA4132ED040624D45547129A4D3A2B0DE80560F91%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad3G%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D01CFAC26-95E4-4536-8D96-2F75DC36A53E"},{"key":"shuqicjcsbody14","val":"_public=skinId%3D999%26idfa%3D01CFAC26-95E4-4536-8D96-2F75DC36A53E%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26umidtoken%3DYM1Rs/H2ur4DANfoBkOXRaOJ%26user_id%3D2132332832%26sn%3D4F82992BA34B75AB3A576595DF71814238FB4D71%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3DA4132ED040624D45547129A4D3A2B0DE80560F91%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPad3G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYM1Rs/H2ur4DANfoBkOXRaOJ%26utype%3Dpre_vip%26sdk%3D13.3&deliveryId=711&key=sq_app_ad&miniWua=HHnB_tgKvewea8MWfKcn72ky6GJnosOU1xR0ZGBOd1CV%2BLD8%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=703&sign=0F09A56F69B53EC45D789FB8CB501E61&timestamp=1624075988&userId=2132332832&user_id=2132332832&wua=HIVW_lsw9%2Bxa3d7F5Gp1lcDTRB7hYIsvcVA1Y%2B3N0nr9QDy2cOMzj249HZN7edDrTieKmPuAGXeG2xjHbbHLtILi9GY%2B0qu%2BkD9%2BY0L%2BWOFN9XS2nc0aiqNBv0rzG%2BqY/U0xjcx/yiQQ0MFka0R491U0IBWjqVMC4g7%2BS4QXs159nJUKa9IAPw9df0wVathayvB9m3AepUPi2oewIj/V/Xizhm0unnpQCjLhTdYxYQHdZfN4%3D"},{"key":"shuqicjbody14","val":"wua=HIVW_lVCVgUanzfZPRrOzV4OfqwMnZBi7r6cbH9GOr00GD9GIPDH8n%2Fhh%2BSgu%2BmygjWf%2BJr34GVH3B5zl155t935MGNMeJbjfI9Nz3EzOkGHfLfDJiitIIloWxTJKqPXfXjY9NwRw71lsBOigz3l6AZBGuDFlNLQC5gy2s%2FU5h0OK7Yw0ISv6F58joMuI1sIeKgQ6ywQto0eFiq5nq13SpnmLsyqzmmzafK1PKkZvX7QK%2FxE%3D&ua=&userId=2132332832&umidtoken=YM1Rs%2FH2ur4DANfoBkOXRaOJ&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&asac=2A20C07RJ9F51AOEFSNHDR&timestamp=1624075994&activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&sqSv=1.0&sign=fcfe5ec972869cfe8f2a1e2cddff406e&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.3%26utdid%3DYM1Rs%252FH2ur4DANfoBkOXRaOJ%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2132332832%26sn%3D4F82992BA34B75AB3A576595DF71814238FB4D71%26umidtoken%3DYM1Rs%252FH2ur4DANfoBkOXRaOJ%26msv%3D8.0.0%26brand%3DApple%26imei%3DA4132ED040624D45547129A4D3A2B0DE80560F91%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad3G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D01CFAC26-95E4-4536-8D96-2F75DC36A53E"},{"key":"shuqijsspbody14","val":""},{"key":"shuqijsydurl14","val":""},{"key":"shuqijsydbody14","val":""},{"key":"shuqijsqdbody14","val":""},{"key":"shuqijsqdspyurl14","val":""},{"key":"shuqijsqdspbody14","val":""},{"key":"shuqijsrwbody14","val":""},{"key":"shuqijsfxbody14","val":""},{"key":"shuqijsbookurl14","val":""},{"key":"shuqijsbookbody14","val":""},{"key":"shuqijssprwurl14","val":""},{"key":"shuqiuserurl15","val":"https://ocean.shuqireader.com/api/jaccount/accountapi/v1/sapi/account/getBindinfo?userId=2131488156&sqSv=1.0&timestamp=1624076150&sign=b12d987468ac1cf12c0c9fd45e26e847&key=sq_h5_gateway"},{"key":"shuqisyurl15","val":"https://render.shuqireader.com/load/resource?sdk=13.4&utdid=YM1Rw3C6NNADAJH4g6csGxOZ&ustatus=0&first_placeid=111111&net_env=3g&placeid=111111&user_id=2131488156&sn=A0CE4FE668CC37B335A779F3B8781C98D8FF85E6&umidtoken=YM1Rw3C6NNADAJH4g6csGxOZ&msv=8.0.0&brand=Apple&imei=FE4D00A3C7419FA2FC1FF4BCF7B47E803E4BD98E&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=iOS&ver=210301&mod=iPhone11ProMax&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=B4B955FD-B190-41E8-AAF2-C15D314A7673"},{"key":"shuqisybody15","val":"appVer=4.3.6.0&imei=FE4D00A3C7419FA2FC1FF4BCF7B47E803E4BD98E&isNewUser=1&params=%7B%22resources%22%3A%7B%22ShuqiVipEntry%22%3A%7B%7D%2C%22personalCardConfig%22%3A%7B%7D%7D%7D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=eda50f6d3199883d8b9101733e38d1d6&sn=A0CE4FE668CC37B335A779F3B8781C98D8FF85E6&soft_id=21&timestamp=1624076023&user_id=2131488156&ver=210301"},{"key":"shuqispbody15","val":"_public=skinId%3D999%26idfa%3DB4B955FD-B190-41E8-AAF2-C15D314A7673%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26umidtoken%3DYM1Rw3C6NNADAJH4g6csGxOZ%26user_id%3D2131488156%26sn%3DA0CE4FE668CC37B335A779F3B8781C98D8FF85E6%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3DFE4D00A3C7419FA2FC1FF4BCF7B47E803E4BD98E%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhone11ProMax%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYM1Rw3C6NNADAJH4g6csGxOZ%26utype%3Dpre_vip%26sdk%3D13.4&deliveryId=525&key=sq_app_ad&miniWua=HHnB_LhiFYvkogxqoUkNk1sJVRVhBGa9Wi5ZQhekSAvR71XM%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=626&sign=A7688A817E58B4D81999E3E3727A74FA&timestamp=1624076052&userId=2131488156&user_id=2131488156&wua=HIVW_S5%2Bfa0E5Vh1GKJMLsGndZpVAnWPy7l3CuuyO4abZ/mBK6lP5NrkTOSOAzu0Rk%2BbROKNLEsBoHou%2BXOjTDl8qXNEuS/Ki0n5qIkqir8BoRa/Vu%2BpFZ0cqkB3w2d1MAtu6iDAklgh/WV%2BwfwaEGbX28UXL5ucvTzJBew8RZoGmld%2BzEUYQXPZsPzT4W/W0z9LKCvfele4HFm1n0AaL8On0o6yGv63LWUmCkbIFVvf/dQg%3D"},{"key":"shuqiscbody15","val":""},{"key":"shuqiydbody15","val":""},{"key":"shuqiqdbody15","val":"clientTimestamp=1624076043&position=501&userId=2131488156&signInType=1&wua=HIVW_V9SFfdtzgbDtT6p8pPB4qfWtHm4zI9v3qtj%2BXBOdZZ9%2FU6G8GriLa5mqo8Q7%2FCveVZEHh1nhqfUCMPEU%2BI7HunhHIBaeNFa3rc2MahW5cCFhf2P80gocDdtyxKd0EDJuDvLPjqRTEvJlyEUoyJPSkvW%2FA0%2Be1%2FkhGFdXxSbnQgoJ6G0XyI07doJGvI%2FADGFEfaUEIFqBTLPDyA40TheRojwTjl1Q92zt696zzs6g5qE%3D&ua=&miniWua=HHnB_iUpu0oXHT9IQQoWSo4gr7gRaGqVFrZAqKCmEb78uGJ4%3D&umidtoken=YM1Rw3C6NNADAJH4g6csGxOZ&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&sign=c0bc935540652a708b2e4541de2fa1d7&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.4%26utdid%3DYM1Rw3C6NNADAJH4g6csGxOZ%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2131488156%26sn%3DA0CE4FE668CC37B335A779F3B8781C98D8FF85E6%26umidtoken%3DYM1Rw3C6NNADAJH4g6csGxOZ%26msv%3D8.0.0%26brand%3DApple%26imei%3DFE4D00A3C7419FA2FC1FF4BCF7B47E803E4BD98E%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone11ProMax%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DB4B955FD-B190-41E8-AAF2-C15D314A7673"},{"key":"shuqirwbody15","val":"serviceWorkerOn=1&stopPullRefresh=1&from=ShuqiTab&upf=20368&sdk=13.4&utdid=YM1Rw3C6NNADAJH4g6csGxOZ&ustatus=0&first_placeid=111111&net_env=3g&placeid=111111&user_id=2131488156&sn=A0CE4FE668CC37B335A779F3B8781C98D8FF85E6&umidtoken=YM1Rw3C6NNADAJH4g6csGxOZ&msv=8.0.0&brand=Apple&imei=FE4D00A3C7419FA2FC1FF4BCF7B47E803E4BD98E&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&session=&skinColor=23B383&platform=1&ver=210301&mod=iPhone11ProMax&statusBarHeight=44.000000&skinVersion=1&wh=1242x2688&soft_id=21&utype=pre_vip&skinId=999&idfa=B4B955FD-B190-41E8-AAF2-C15D314A7673&params=%7B%22resources%22%3A%7B%22ShuqiBsDailyTask%22%3A%7B%7D%7D%7D&userId=2131488156&placeId=111111&timestamp=1624076125&sqSv=1.0&sign=4a1668c52c6fcc2d444210711d98776c&key=sq_h5_gateway&_public="},{"key":"shuqifxbody15","val":""},{"key":"shuqisprwurl15","val":"https://ocean.shuqireader.com/api/ad/adserver/v1/api/getAdInfo?appVer=4.3.6.0&placeId=111111&platform=iOS&requestSrc=h5&resourceId=626&timestamp=1624076151&user_id=2131488156&sqSv=1.0&sign=8ad18a485cfce647b5848ac880caeafd&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.4%26utdid%3DYM1Rw3C6NNADAJH4g6csGxOZ%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2131488156%26sn%3DA0CE4FE668CC37B335A779F3B8781C98D8FF85E6%26umidtoken%3DYM1Rw3C6NNADAJH4g6csGxOZ%26msv%3D8.0.0%26brand%3DApple%26imei%3DFE4D00A3C7419FA2FC1FF4BCF7B47E803E4BD98E%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone11ProMax%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DB4B955FD-B190-41E8-AAF2-C15D314A7673"},{"key":"shuqijlbody15","val":"requestSrc=h5&userId=2131488156&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624076125&sqSv=1.0&sign=5d2b5039e09ae80667404a23837919b5&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.4%26utdid%3DYM1Rw3C6NNADAJH4g6csGxOZ%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2131488156%26sn%3DA0CE4FE668CC37B335A779F3B8781C98D8FF85E6%26umidtoken%3DYM1Rw3C6NNADAJH4g6csGxOZ%26msv%3D8.0.0%26brand%3DApple%26imei%3DFE4D00A3C7419FA2FC1FF4BCF7B47E803E4BD98E%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone11ProMax%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DB4B955FD-B190-41E8-AAF2-C15D314A7673"},{"key":"shuqisqjlbody15","val":"src=&userId=2131488156&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624076049&sqSv=1.0&sign=58d125d365679cdf16ca4361c7f3f662&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.4%26utdid%3DYM1Rw3C6NNADAJH4g6csGxOZ%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2131488156%26sn%3DA0CE4FE668CC37B335A779F3B8781C98D8FF85E6%26umidtoken%3DYM1Rw3C6NNADAJH4g6csGxOZ%26msv%3D8.0.0%26brand%3DApple%26imei%3DFE4D00A3C7419FA2FC1FF4BCF7B47E803E4BD98E%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone11ProMax%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DB4B955FD-B190-41E8-AAF2-C15D314A7673"},{"key":"shuqicjyurl15","val":"https://ocean.shuqireader.com/api/activity/activity/v1/lottery/info?timestamp=1624076154&userId=2131488156&activityId=311&sqSv=1.0&sign=f49ad6a6d2150dbc10b4e8d4fc95196f&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.4%26utdid%3DYM1Rw3C6NNADAJH4g6csGxOZ%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2131488156%26sn%3DA0CE4FE668CC37B335A779F3B8781C98D8FF85E6%26umidtoken%3DYM1Rw3C6NNADAJH4g6csGxOZ%26msv%3D8.0.0%26brand%3DApple%26imei%3DFE4D00A3C7419FA2FC1FF4BCF7B47E803E4BD98E%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone11ProMax%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DB4B955FD-B190-41E8-AAF2-C15D314A7673"},{"key":"shuqicjcsbody15","val":"_public=skinId%3D999%26idfa%3DB4B955FD-B190-41E8-AAF2-C15D314A7673%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26umidtoken%3DYM1Rw3C6NNADAJH4g6csGxOZ%26user_id%3D2131488156%26sn%3DA0CE4FE668CC37B335A779F3B8781C98D8FF85E6%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3DFE4D00A3C7419FA2FC1FF4BCF7B47E803E4BD98E%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhone11ProMax%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYM1Rw3C6NNADAJH4g6csGxOZ%26utype%3Dpre_vip%26sdk%3D13.4&deliveryId=711&key=sq_app_ad&miniWua=HHnB_x5zgQEfHVKrkYWyFmwtkP5BQE%2BWEzUG23QqKaRKEFxM%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=703&sign=F3616C0E5E8578AFA40126F179766EB1&timestamp=1624076133&userId=2131488156&user_id=2131488156&wua=HIVW_DZoLYHljVW7U7gp1aZpAz6AjrYiV0G1n7lPlcFNN8lEzjbEyRyI5xFPXxDWvzjVIQ%2BMbaztHLXzK6P3LIRChNwiW45nOCV5UdRHUCVwifecIhIXQyZt9I1JhfXh4fvgTrun33rcZAQlS%2B4q83D/DdeaIw408wwCgjfVZxwWS18gg0mGynSUtIIOfw%2BEbZRr%2B7yYbtE6V%2BlfclK4lOvgHr9IechRIJM1Z9LuSY9hM8Zg%3D"},{"key":"shuqicjbody15","val":"wua=HIVW_sGHkeC%2FynA9SPhbGjIjR7hFhK0HwHc4Mhd6y8ayyyY1d9eKh7gjUcS3eLduUxc77OgUgmwK7SLOTkCZQNIW0ZEaEDOOIPbOjM3gRIUG4sLUlBMEUpMf7OMBsb3jR2eE%2BvXBCpqSpHxAFX%2FCXq9ijUs8E5SoaD6sXYXsE%2BAFTbT7B%2Ba7KFj9aSmCDmj1GoUDZ31MV0mAfrUWYjUU%2BJm%2FS%2FSntH0AHmnud4y79Aiy%2FpLY%3D&ua=&userId=2131488156&umidtoken=YM1Rw3C6NNADAJH4g6csGxOZ&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&asac=2A20C07RJ9F51AOEFSNHDR&timestamp=1624076139&activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&sqSv=1.0&sign=3bf4aea5a05be9aee26484ca290d92b3&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.4%26utdid%3DYM1Rw3C6NNADAJH4g6csGxOZ%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2131488156%26sn%3DA0CE4FE668CC37B335A779F3B8781C98D8FF85E6%26umidtoken%3DYM1Rw3C6NNADAJH4g6csGxOZ%26msv%3D8.0.0%26brand%3DApple%26imei%3DFE4D00A3C7419FA2FC1FF4BCF7B47E803E4BD98E%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone11ProMax%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DB4B955FD-B190-41E8-AAF2-C15D314A7673"},{"key":"shuqijsspbody15","val":""},{"key":"shuqijsydurl15","val":""},{"key":"shuqijsydbody15","val":""},{"key":"shuqijsqdbody15","val":""},{"key":"shuqijsqdspyurl15","val":""},{"key":"shuqijsqdspbody15","val":""},{"key":"shuqijsrwbody15","val":""},{"key":"shuqijsfxbody15","val":""},{"key":"shuqijsbookurl15","val":""},{"key":"shuqijsbookbody15","val":""},{"key":"shuqijssprwurl15","val":""},{"key":"shuqiuserurl16","val":""},{"key":"shuqisyurl16","val":""},{"key":"shuqisybody16","val":""},{"key":"shuqispbody16","val":""},{"key":"shuqiscbody16","val":""},{"key":"shuqiydbody16","val":""},{"key":"shuqiqdbody16","val":""},{"key":"shuqirwbody16","val":""},{"key":"shuqifxbody16","val":""},{"key":"shuqisprwurl16","val":""},{"key":"shuqijlbody16","val":""},{"key":"shuqisqjlbody16","val":""},{"key":"shuqicjyurl16","val":""},{"key":"shuqicjcsbody16","val":""},{"key":"shuqicjbody16","val":""},{"key":"shuqijsspbody16","val":""},{"key":"shuqijsydurl16","val":""},{"key":"shuqijsydbody16","val":""},{"key":"shuqijsqdbody16","val":""},{"key":"shuqijsqdspyurl16","val":""},{"key":"shuqijsqdspbody16","val":""},{"key":"shuqijsrwbody16","val":""},{"key":"shuqijsfxbody16","val":""},{"key":"shuqijsbookurl16","val":""},{"key":"shuqijsbookbody16","val":""},{"key":"shuqijssprwurl16","val":""},{"key":"shuqiuserurl17","val":""},{"key":"shuqisyurl17","val":""},{"key":"shuqisybody17","val":""},{"key":"shuqispbody17","val":""},{"key":"shuqiscbody17","val":""},{"key":"shuqiydbody17","val":""},{"key":"shuqiqdbody17","val":""},{"key":"shuqirwbody17","val":""},{"key":"shuqifxbody17","val":""},{"key":"shuqisprwurl17","val":""},{"key":"shuqijlbody17","val":""},{"key":"shuqisqjlbody17","val":""},{"key":"shuqicjyurl17","val":""},{"key":"shuqicjcsbody17","val":""},{"key":"shuqicjbody17","val":""},{"key":"shuqijsspbody17","val":""},{"key":"shuqijsydurl17","val":""},{"key":"shuqijsydbody17","val":""},{"key":"shuqijsqdbody17","val":""},{"key":"shuqijsqdspyurl17","val":""},{"key":"shuqijsqdspbody17","val":""},{"key":"shuqijsrwbody17","val":""},{"key":"shuqijsfxbody17","val":""},{"key":"shuqijsbookurl17","val":""},{"key":"shuqijsbookbody17","val":""},{"key":"shuqijssprwurl17","val":""},{"key":"shuqiuserurl18","val":""},{"key":"shuqisyurl18","val":""},{"key":"shuqisybody18","val":""},{"key":"shuqispbody18","val":""},{"key":"shuqiscbody18","val":""},{"key":"shuqiydbody18","val":""},{"key":"shuqiqdbody18","val":""},{"key":"shuqirwbody18","val":""},{"key":"shuqifxbody18","val":""},{"key":"shuqisprwurl18","val":""},{"key":"shuqijlbody18","val":""},{"key":"shuqisqjlbody18","val":""},{"key":"shuqicjyurl18","val":""},{"key":"shuqicjcsbody18","val":""},{"key":"shuqicjbody18","val":""},{"key":"shuqijsspbody18","val":""},{"key":"shuqijsydurl18","val":""},{"key":"shuqijsydbody18","val":""},{"key":"shuqijsqdbody18","val":""},{"key":"shuqijsqdspyurl18","val":""},{"key":"shuqijsqdspbody18","val":""},{"key":"shuqijsrwbody18","val":""},{"key":"shuqijsfxbody18","val":""},{"key":"shuqijsbookurl18","val":""},{"key":"shuqijsbookbody18","val":""},{"key":"shuqijssprwurl18","val":""},{"key":"shuqiuserurl19","val":""},{"key":"shuqisyurl19","val":""},{"key":"shuqisybody19","val":""},{"key":"shuqispbody19","val":""},{"key":"shuqiscbody19","val":""},{"key":"shuqiydbody19","val":""},{"key":"shuqiqdbody19","val":""},{"key":"shuqirwbody19","val":""},{"key":"shuqifxbody19","val":""},{"key":"shuqisprwurl19","val":""},{"key":"shuqijlbody19","val":""},{"key":"shuqisqjlbody19","val":""},{"key":"shuqicjyurl19","val":""},{"key":"shuqicjcsbody19","val":""},{"key":"shuqicjbody19","val":""},{"key":"shuqijsspbody19","val":""},{"key":"shuqijsydurl19","val":""},{"key":"shuqijsydbody19","val":""},{"key":"shuqijsqdbody19","val":""},{"key":"shuqijsqdspyurl19","val":""},{"key":"shuqijsqdspbody19","val":""},{"key":"shuqijsrwbody19","val":""},{"key":"shuqijsfxbody19","val":""},{"key":"shuqijsbookurl19","val":""},{"key":"shuqijsbookbody19","val":""},{"key":"shuqijssprwurl19","val":""},{"key":"shuqiuserurl20","val":""},{"key":"shuqisyurl20","val":""},{"key":"shuqisybody20","val":""},{"key":"shuqispbody20","val":""},{"key":"shuqiscbody20","val":""},{"key":"shuqiydbody20","val":""},{"key":"shuqiqdbody20","val":""},{"key":"shuqirwbody20","val":""},{"key":"shuqifxbody20","val":""},{"key":"shuqisprwurl20","val":""},{"key":"shuqijlbody20","val":""},{"key":"shuqisqjlbody20","val":""},{"key":"shuqicjyurl20","val":""},{"key":"shuqicjcsbody20","val":""},{"key":"shuqicjbody20","val":""},{"key":"shuqijsspbody20","val":""},{"key":"shuqijsydurl20","val":""},{"key":"shuqijsydbody20","val":""},{"key":"shuqijsqdbody20","val":""},{"key":"shuqijsqdspyurl20","val":""},{"key":"shuqijsqdspbody20","val":""},{"key":"shuqijsrwbody20","val":""},{"key":"shuqijsfxbody20","val":""},{"key":"shuqijsbookurl20","val":""},{"key":"shuqijsbookbody20","val":""},{"key":"shuqijssprwurl20","val":""}],"sessions":[],"isLoaded":true};
const logs = 0; // 0为关闭日志，1为开启
notifyttt = 1; // 0为关闭外部推送，1为12 23 点外部推送
notifyInterval = 2; // 0为关闭通知，1为所有通知，2为12 23 点通知  ， 3为 6 12 18 23 点通知 
Minutes = 59; // 通知 默认控制在0-10分内
$.message = '', COOKIES_SPLIT = '', CASH = '', XH = 0, TXTX = 0, SC = 0, ddtime = '';
CZ = 10
Length = 0
let shuqiuserurlArr = [];
let shuqisyurlArr = [];
let shuqisybodyArr = [];
let shuqispbodyArr = [];
let shuqiscbodyArr = [];
let shuqiydbodyArr = [];
let shuqiqdbodyArr = [];
let shuqirwbodyArr = [];
let shuqifxbodyArr = [];
let shuqisprwurlArr = [];
let shuqijlbodyArr = [];
let shuqisqjlbodyArr = [];
let shuqicjyurlArr = [];
let shuqicjcsbodyArr = [];
let shuqicjbodyArr = [];
let shuqijsspbodyArr = [];
let shuqijsydurlArr = [];
let shuqijsydbodyArr = [];
let shuqijsqdbodyArr = [];
let shuqijsqdspyurlArr = [];
let shuqijsqdspbodyArr = [];
let shuqijsrwbodyArr = [];
let shuqijsfxbodyArr = [];
let shuqijsbookurlArr = [];
let shuqijsbookbodyArr = [];
let shuqijssprwurlArr = [];
let shuqiuserurlVal = ``;
let shuqisyurlVal = ``;
let shuqisybodyVal = ``;
let shuqispbodyVal = ``;
let shuqiscbodyVal = ``;
let shuqiydbodyVal = ``;
let shuqiqdbodyVal = ``;
let shuqirwbodyVal = ``;
let shuqifxbodyVal = ``;
let shuqisprwurlVal = ``;
let shuqijlbodyVal = ``;
let shuqisqjlbodyVal = ``;
let shuqicjyurlVal = ``;
let shuqicjcsbodyVal = ``;
let shuqicjbodyVal = ``;
let shuqijsspbodyVal = ``;
let shuqijsydurlVal = ``;
let shuqijsydbodyVal = ``;
let shuqijsqdbodyVal = ``;
let shuqijsqdspyurlVal = ``;
let shuqijsqdspbodyVal = ``;
let shuqijsrwbodyVal = ``;
let shuqijsfxbodyVal = ``;
let shuqijsbookurlVal = ``;
let shuqijsbookbodyVal = ``;
let shuqijssprwurlVal = ``;
let middleshuqiuserURL = [];
let middleshuqisyURL = [];
let middleshuqisyBODY = [];
let middleshuqispBODY = [];
let middleshuqiscBODY = [];
let middleshuqiydBODY = [];
let middleshuqiqdBODY = [];
let middleshuqirwBODY = [];
let middleshuqifxBODY = [];
let middleshuqisprwURL = [];
let middleshuqijlBODY = [];
let middleshuqisqjlBODY = [];
let middleshuqicjyURL = [];
let middleshuqicjcsBODY = [];
let middleshuqicjBODY = [];
let middleshuqijsspBODY = [];
let middleshuqijsydURL = [];
let middleshuqijsydBODY = [];
let middleshuqijsqdBODY = [];
let middleshuqijsqdspyURL = [];
let middleshuqijsqdspBODY = [];
let middleshuqijsrwBODY = [];
let middleshuqijsfxBODY = [];
let middleshuqijsbookURL = [];
let middleshuqijsbookBODY = [];
let middleshuqijssprwURL = [];
if ($.isNode() && COOKIE.datas && COOKIE.datas[0].val != '') {
    console.log(
        `============ cookie方式为：方式一 boxjs复制会话 =============\n`
    );
}
if ($.isNode() && COOKIE.shuqiuserurl && COOKIE.shuqiuserurl != '') {
    console.log(
        `============ cookie方式为：方式二 boxjs复制数据 =============\n`
    );
}
if ($.isNode() && COOKIE.shuqiuserurlVal && COOKIE.shuqiuserurlVal != '') {
    console.log(
        `============ cookie方式为：方式三 直接填写 =============\n`
    );
}

if ($.isNode() && process.env.SQ_shuqiuserURL) {
    TXTX = process.env.SQ_TXTX || "0";
    SC = process.env.SQ_SC || "0";
    notifyttt = process.env.SQ_notifyttt || "1";
    notifyInterval = process.env.SQ_notifyInterval || "2";
    Minutes = process.env.SQ_Minutes || "10";

    COOKIES_SPLIT = process.env.COOKIES_SPLIT || "\n";
    console.log(
        `============ cookies分隔符为：${JSON.stringify(
      COOKIES_SPLIT
    )} =============\n`
    );;
    if (
        process.env.SQ_shuqiuserURL &&
        process.env.SQ_shuqiuserURL.indexOf(COOKIES_SPLIT) > -1
    ) {
        middleshuqiuserURL = process.env.SQ_shuqiuserURL.split(COOKIES_SPLIT);
    } else {
        middleshuqiuserURL = process.env.SQ_shuqiuserURL.split();
    }
    if (
        process.env.SQ_shuqisyURL &&
        process.env.SQ_shuqisyURL.indexOf(COOKIES_SPLIT) > -1
    ) {
        middleshuqisyURL = process.env.SQ_shuqisyURL.split(COOKIES_SPLIT);
    } else {
        middleshuqisyURL = process.env.SQ_shuqisyURL.split();
    }
    if (
        process.env.SQ_shuqisyBODY &&
        process.env.SQ_shuqisyBODY.indexOf(COOKIES_SPLIT) > -1
    ) {
        middleshuqisyBODY = process.env.SQ_shuqisyBODY.split(COOKIES_SPLIT);
    } else {
        middleshuqisyBODY = process.env.SQ_shuqisyBODY.split();
    }
    if (
        process.env.SQ_shuqispBODY &&
        process.env.SQ_shuqispBODY.indexOf(COOKIES_SPLIT) > -1
    ) {
        middleshuqispBODY = process.env.SQ_shuqispBODY.split(COOKIES_SPLIT);
    } else {
        middleshuqispBODY = process.env.SQ_shuqispBODY.split();
    }
    if (
        process.env.SQ_shuqiscBODY &&
        process.env.SQ_shuqiscBODY.indexOf(COOKIES_SPLIT) > -1
    ) {
        middleshuqiscBODY = process.env.SQ_shuqiscBODY.split(COOKIES_SPLIT);
    } else {
        middleshuqiscBODY = process.env.SQ_shuqiscBODY.split();
    }
    if (
        process.env.SQ_shuqiydBODY &&
        process.env.SQ_shuqiydBODY.indexOf(COOKIES_SPLIT) > -1
    ) {
        middleshuqiydBODY = process.env.SQ_shuqiydBODY.split(COOKIES_SPLIT);
    } else {
        middleshuqiydBODY = process.env.SQ_shuqiydBODY.split();
    }
    if (
        process.env.SQ_shuqiqdBODY &&
        process.env.SQ_shuqiqdBODY.indexOf(COOKIES_SPLIT) > -1
    ) {
        middleshuqiqdBODY = process.env.SQ_shuqiqdBODY.split(COOKIES_SPLIT);
    } else {
        middleshuqiqdBODY = process.env.SQ_shuqiqdBODY.split();
    }
    if (
        process.env.SQ_shuqirwBODY &&
        process.env.SQ_shuqirwBODY.indexOf(COOKIES_SPLIT) > -1
    ) {
        middleshuqirwBODY = process.env.SQ_shuqirwBODY.split(COOKIES_SPLIT);
    } else {
        middleshuqirwBODY = process.env.SQ_shuqirwBODY.split();
    }
    if (
        process.env.SQ_shuqifxBODY &&
        process.env.SQ_shuqifxBODY.indexOf(COOKIES_SPLIT) > -1
    ) {
        middleshuqifxBODY = process.env.SQ_shuqifxBODY.split(COOKIES_SPLIT);
    } else {
        middleshuqifxBODY = process.env.SQ_shuqifxBODY.split();
    }
    if (
        process.env.SQ_shuqisprwURL &&
        process.env.SQ_shuqisprwURL.indexOf(COOKIES_SPLIT) > -1
    ) {
        middleshuqisprwURL = process.env.SQ_shuqisprwURL.split(COOKIES_SPLIT);
    } else {
        middleshuqisprwURL = process.env.SQ_shuqisprwURL.split();
    }
    if (
        process.env.SQ_shuqijlBODY &&
        process.env.SQ_shuqijlBODY.indexOf(COOKIES_SPLIT) > -1
    ) {
        middleshuqijlBODY = process.env.SQ_shuqijlBODY.split(COOKIES_SPLIT);
    } else {
        middleshuqijlBODY = process.env.SQ_shuqijlBODY.split();
    }
    if (
        process.env.SQ_shuqisqjlBODY &&
        process.env.SQ_shuqisqjlBODY.indexOf(COOKIES_SPLIT) > -1
    ) {
        middleshuqisqjlBODY = process.env.SQ_shuqisqjlBODY.split(COOKIES_SPLIT);
    } else {
        middleshuqisqjlBODY = process.env.SQ_shuqisqjlBODY.split();
    }
    if (
        process.env.SQ_shuqicjyURL &&
        process.env.SQ_shuqicjyURL.indexOf(COOKIES_SPLIT) > -1
    ) {
        middleshuqicjyURL = process.env.SQ_shuqicjyURL.split(COOKIES_SPLIT);
    } else {
        middleshuqicjyURL = process.env.SQ_shuqicjyURL.split();
    }
    if (
        process.env.SQ_shuqicjcsBODY &&
        process.env.SQ_shuqicjcsBODY.indexOf(COOKIES_SPLIT) > -1
    ) {
        middleshuqicjcsBODY = process.env.SQ_shuqicjcsBODY.split(COOKIES_SPLIT);
    } else {
        middleshuqicjcsBODY = process.env.SQ_shuqicjcsBODY.split();
    }
    if (
        process.env.SQ_shuqicjBODY &&
        process.env.SQ_shuqicjBODY.indexOf(COOKIES_SPLIT) > -1
    ) {
        middleshuqicjBODY = process.env.SQ_shuqicjBODY.split(COOKIES_SPLIT);
    } else {
        middleshuqicjBODY = process.env.SQ_shuqicjBODY.split();
    }

    if (process.env.SQ_shuqijsspBODY) {


        if (
            process.env.SQ_shuqijsspBODY &&
            process.env.SQ_shuqijsspBODY.indexOf(COOKIES_SPLIT) > -1
        ) {
            middleshuqijsspBODY = process.env.SQ_shuqijsspBODY.split(COOKIES_SPLIT);
        } else {
            middleshuqijsspBODY = process.env.SQ_shuqijsspBODY.split();
        }
        if (
            process.env.SQ_shuqijsydURL &&
            process.env.SQ_shuqijsydURL.indexOf(COOKIES_SPLIT) > -1
        ) {
            middleshuqijsydURL = process.env.SQ_shuqijsydURL.split(COOKIES_SPLIT);
        } else {
            middleshuqijsydURL = process.env.SQ_shuqijsydURL.split();
        }
        if (
            process.env.SQ_shuqijsydBODY &&
            process.env.SQ_shuqijsydBODY.indexOf(COOKIES_SPLIT) > -1
        ) {
            middleshuqijsydBODY = process.env.SQ_shuqijsydBODY.split(COOKIES_SPLIT);
        } else {
            middleshuqijsydBODY = process.env.SQ_shuqijsydBODY.split();
        }
        if (
            process.env.SQ_shuqijsqdBODY &&
            process.env.SQ_shuqijsqdBODY.indexOf(COOKIES_SPLIT) > -1
        ) {
            middleshuqijsqdBODY = process.env.SQ_shuqijsqdBODY.split(COOKIES_SPLIT);
        } else {
            middleshuqijsqdBODY = process.env.SQ_shuqijsqdBODY.split();
        }
        if (
            process.env.SQ_shuqijsqdspyURL &&
            process.env.SQ_shuqijsqdspyURL.indexOf(COOKIES_SPLIT) > -1
        ) {
            middleshuqijsqdspyURL = process.env.SQ_shuqijsqdspyURL.split(COOKIES_SPLIT);
        } else {
            middleshuqijsqdspyURL = process.env.SQ_shuqijsqdspyURL.split();
        }
        if (
            process.env.SQ_shuqijsqdspBODY &&
            process.env.SQ_shuqijsqdspBODY.indexOf(COOKIES_SPLIT) > -1
        ) {
            middleshuqijsqdspBODY = process.env.SQ_shuqijsqdspBODY.split(COOKIES_SPLIT);
        } else {
            middleshuqijsqdspBODY = process.env.SQ_shuqijsqdspBODY.split();
        }
        if (
            process.env.SQ_shuqijsrwBODY &&
            process.env.SQ_shuqijsrwBODY.indexOf(COOKIES_SPLIT) > -1
        ) {
            middleshuqijsrwBODY = process.env.SQ_shuqijsrwBODY.split(COOKIES_SPLIT);
        } else {
            middleshuqijsrwBODY = process.env.SQ_shuqijsrwBODY.split();
        }
        if (
            process.env.SQ_shuqijsfxBODY &&
            process.env.SQ_shuqijsfxBODY.indexOf(COOKIES_SPLIT) > -1
        ) {
            middleshuqijsfxBODY = process.env.SQ_shuqijsfxBODY.split(COOKIES_SPLIT);
        } else {
            middleshuqijsfxBODY = process.env.SQ_shuqijsfxBODY.split();
        }
        if (
            process.env.SQ_shuqijsbookURL &&
            process.env.SQ_shuqijsbookURL.indexOf(COOKIES_SPLIT) > -1
        ) {
            middleshuqijsbookURL = process.env.SQ_shuqijsbookURL.split(COOKIES_SPLIT);
        } else {
            middleshuqijsbookURL = process.env.SQ_shuqijsbookURL.split();
        }
        if (
            process.env.SQ_shuqijsbookBODY &&
            process.env.SQ_shuqijsbookBODY.indexOf(COOKIES_SPLIT) > -1
        ) {
            middleshuqijsbookBODY = process.env.SQ_shuqijsbookBODY.split(COOKIES_SPLIT);
        } else {
            middleshuqijsbookBODY = process.env.SQ_shuqijsbookBODY.split();
        }
        if (
            process.env.SQ_shuqijssprwURL &&
            process.env.SQ_shuqijssprwURL.indexOf(COOKIES_SPLIT) > -1
        ) {
            middleshuqijssprwURL = process.env.SQ_shuqijssprwURL.split(COOKIES_SPLIT);
        } else {
            middleshuqijssprwURL = process.env.SQ_shuqijssprwURL.split();
        }

    }
}
if (COOKIE && COOKIE.shuqiuserurlVal) {
    if (!COOKIE.shuqijsspbodyVal || COOKIE.shuqijsspbodyVal == '') {
        SQ_COOKIES = {
            "shuqiuserurlVal": COOKIE.shuqiuserurlVal.split('\n'),
            "shuqisyurlVal": COOKIE.shuqisyurlVal.split('\n'),
            "shuqisybodyVal": COOKIE.shuqisybodyVal.split('\n'),
            "shuqispbodyVal": COOKIE.shuqispbodyVal.split('\n'),
            "shuqiscbodyVal": COOKIE.shuqiscbodyVal.split('\n'),
            "shuqiydbodyVal": COOKIE.shuqiydbodyVal.split('\n'),
            "shuqiqdbodyVal": COOKIE.shuqiqdbodyVal.split('\n'),
            "shuqirwbodyVal": COOKIE.shuqirwbodyVal.split('\n'),
            "shuqifxbodyVal": COOKIE.shuqifxbodyVal.split('\n'),
            "shuqisprwurlVal": COOKIE.shuqisprwurlVal.split('\n'),
            "shuqijlbodyVal": COOKIE.shuqijlbodyVal.split('\n'),
            "shuqisqjlbodyVal": COOKIE.shuqisqjlbodyVal.split('\n'),
            "shuqicjyurlVal": COOKIE.shuqicjyurlVal.split('\n'),
            "shuqicjcsbodyVal": COOKIE.shuqicjcsbodyVal.split('\n'),
            "shuqicjbodyVal": COOKIE.shuqicjbodyVal.split('\n'),
        }
    } else {
        SQ_COOKIES = {
            "shuqiuserurlVal": COOKIE.shuqiuserurlVal.split('\n'),
            "shuqisyurlVal": COOKIE.shuqisyurlVal.split('\n'),
            "shuqisybodyVal": COOKIE.shuqisybodyVal.split('\n'),
            "shuqispbodyVal": COOKIE.shuqispbodyVal.split('\n'),
            "shuqiscbodyVal": COOKIE.shuqiscbodyVal.split('\n'),
            "shuqiydbodyVal": COOKIE.shuqiydbodyVal.split('\n'),
            "shuqiqdbodyVal": COOKIE.shuqiqdbodyVal.split('\n'),
            "shuqirwbodyVal": COOKIE.shuqirwbodyVal.split('\n'),
            "shuqifxbodyVal": COOKIE.shuqifxbodyVal.split('\n'),
            "shuqisprwurlVal": COOKIE.shuqisprwurlVal.split('\n'),
            "shuqijlbodyVal": COOKIE.shuqijlbodyVal.split('\n'),
            "shuqisqjlbodyVal": COOKIE.shuqisqjlbodyVal.split('\n'),
            "shuqicjyurlVal": COOKIE.shuqicjyurlVal.split('\n'),
            "shuqicjcsbodyVal": COOKIE.shuqicjcsbodyVal.split('\n'),
            "shuqicjbodyVal": COOKIE.shuqicjbodyVal.split('\n'),
            "shuqijsspbodyVal": COOKIE.shuqijsspbodyVal.split('\n'),
            "shuqijsydurlVal": COOKIE.shuqijsydurlVal.split('\n'),
            "shuqijsydbodyVal": COOKIE.shuqijsydbodyVal.split('\n'),
            "shuqijsqdbodyVal": COOKIE.shuqijsqdbodyVal.split('\n'),
            "shuqijsqdspyurlVal": COOKIE.shuqijsqdspyurlVal.split('\n'),
            "shuqijsqdspbodyVal": COOKIE.shuqijsqdspbodyVal.split('\n'),
            "shuqijsrwbodyVal": COOKIE.shuqijsrwbodyVal.split('\n'),
            "shuqijsfxbodyVal": COOKIE.shuqijsfxbodyVal.split('\n'),
            "shuqijsbookurlVal": COOKIE.shuqijsbookurlVal.split('\n'),
            "shuqijsbookbodyVal": COOKIE.shuqijsbookbodyVal.split('\n'),
            "shuqijssprwurlVal": COOKIE.shuqijssprwurlVal.split('\n'),
        }
    }
    Length = SQ_COOKIES.shuqiuserurlVal.length;
}
if (COOKIE.datas && COOKIE.datas[0].val != '') {

    TXTX = (COOKIE.settings.find(item => item.id === `shuqiTXTX`)).val || '0';
    notifyttt = (COOKIE.settings.find(item => item.id === `shuqinotifyttt`)).val || '1';
    notifyInterval = (COOKIE.settings.find(item => item.id === `shuqinotifyInterval`)).val || '2';
    Minutes = (COOKIE.settings.find(item => item.id === `shuqiMinutes`)).val || '10';
    SC = (COOKIE.settings.find(item => item.id === `shuqiSC`)).val || '0';

    shuqiCount = COOKIE.settings.find(item => item.id === `shuqiCount`);
    Length = shuqiCount.val
}
if (COOKIE.shuqiuserurl) {
    cks = 26 //ck数量
    COOKIEstringify = JSON.stringify(COOKIE);
    Length = COOKIEstringify.match(/getBindinfo/g).length
}
if (!COOKIE.datas && !COOKIE.shuqiuserurlVal && !COOKIE.shuqiuserurl) {
    if ($.isNode()) {
        Object.keys(middleshuqiuserURL).forEach((item) => {
            if (middleshuqiuserURL[item]) {
                shuqiuserurlArr.push(middleshuqiuserURL[item]);
            }
        });
        Object.keys(middleshuqisyURL).forEach((item) => {
            if (middleshuqisyURL[item]) {
                shuqisyurlArr.push(middleshuqisyURL[item]);
            }
        });
        Object.keys(middleshuqisyBODY).forEach((item) => {
            if (middleshuqisyBODY[item]) {
                shuqisybodyArr.push(middleshuqisyBODY[item]);
            }
        });
        Object.keys(middleshuqispBODY).forEach((item) => {
            if (middleshuqispBODY[item]) {
                shuqispbodyArr.push(middleshuqispBODY[item]);
            }
        });
        Object.keys(middleshuqiscBODY).forEach((item) => {
            if (middleshuqiscBODY[item]) {
                shuqiscbodyArr.push(middleshuqiscBODY[item]);
            }
        });
        Object.keys(middleshuqiydBODY).forEach((item) => {
            if (middleshuqiydBODY[item]) {
                shuqiydbodyArr.push(middleshuqiydBODY[item]);
            }
        });
        Object.keys(middleshuqiqdBODY).forEach((item) => {
            if (middleshuqiqdBODY[item]) {
                shuqiqdbodyArr.push(middleshuqiqdBODY[item]);
            }
        });
        Object.keys(middleshuqirwBODY).forEach((item) => {
            if (middleshuqirwBODY[item]) {
                shuqirwbodyArr.push(middleshuqirwBODY[item]);
            }
        });
        Object.keys(middleshuqifxBODY).forEach((item) => {
            if (middleshuqifxBODY[item]) {
                shuqifxbodyArr.push(middleshuqifxBODY[item]);
            }
        });
        Object.keys(middleshuqisprwURL).forEach((item) => {
            if (middleshuqisprwURL[item]) {
                shuqisprwurlArr.push(middleshuqisprwURL[item]);
            }
        });
        Object.keys(middleshuqijlBODY).forEach((item) => {
            if (middleshuqijlBODY[item]) {
                shuqijlbodyArr.push(middleshuqijlBODY[item]);
            }
        });
        Object.keys(middleshuqisqjlBODY).forEach((item) => {
            if (middleshuqisqjlBODY[item]) {
                shuqisqjlbodyArr.push(middleshuqisqjlBODY[item]);
            }
        });
        Object.keys(middleshuqicjyURL).forEach((item) => {
            if (middleshuqicjyURL[item]) {
                shuqicjyurlArr.push(middleshuqicjyURL[item]);
            }
        });
        Object.keys(middleshuqicjcsBODY).forEach((item) => {
            if (middleshuqicjcsBODY[item]) {
                shuqicjcsbodyArr.push(middleshuqicjcsBODY[item]);
            }
        });
        Object.keys(middleshuqicjBODY).forEach((item) => {
            if (middleshuqicjBODY[item]) {
                shuqicjbodyArr.push(middleshuqicjBODY[item]);
            }
        });
        Object.keys(middleshuqijsspBODY).forEach((item) => {
            if (middleshuqijsspBODY[item]) {
                shuqijsspbodyArr.push(middleshuqijsspBODY[item]);
            }
        });
        Object.keys(middleshuqijsydURL).forEach((item) => {
            if (middleshuqijsydURL[item]) {
                shuqijsydurlArr.push(middleshuqijsydURL[item]);
            }
        });
        Object.keys(middleshuqijsydBODY).forEach((item) => {
            if (middleshuqijsydBODY[item]) {
                shuqijsydbodyArr.push(middleshuqijsydBODY[item]);
            }
        });
        Object.keys(middleshuqijsqdBODY).forEach((item) => {
            if (middleshuqijsqdBODY[item]) {
                shuqijsqdbodyArr.push(middleshuqijsqdBODY[item]);
            }
        });
        Object.keys(middleshuqijsqdspyURL).forEach((item) => {
            if (middleshuqijsqdspyURL[item]) {
                shuqijsqdspyurlArr.push(middleshuqijsqdspyURL[item]);
            }
        });
        Object.keys(middleshuqijsqdspBODY).forEach((item) => {
            if (middleshuqijsqdspBODY[item]) {
                shuqijsqdspbodyArr.push(middleshuqijsqdspBODY[item]);
            }
        });
        Object.keys(middleshuqijsrwBODY).forEach((item) => {
            if (middleshuqijsrwBODY[item]) {
                shuqijsrwbodyArr.push(middleshuqijsrwBODY[item]);
            }
        });
        Object.keys(middleshuqijsfxBODY).forEach((item) => {
            if (middleshuqijsfxBODY[item]) {
                shuqijsfxbodyArr.push(middleshuqijsfxBODY[item]);
            }
        });
        Object.keys(middleshuqijsbookURL).forEach((item) => {
            if (middleshuqijsbookURL[item]) {
                shuqijsbookurlArr.push(middleshuqijsbookURL[item]);
            }
        });
        Object.keys(middleshuqijsbookBODY).forEach((item) => {
            if (middleshuqijsbookBODY[item]) {
                shuqijsbookbodyArr.push(middleshuqijsbookBODY[item]);
            }
        });
        Object.keys(middleshuqijssprwURL).forEach((item) => {
            if (middleshuqijssprwURL[item]) {
                shuqijssprwurlArr.push(middleshuqijssprwURL[item]);
            }
        });
    } else {
        shuqiuserurlArr.push($.getdata("shuqiuserurl"));
        shuqisyurlArr.push($.getdata("shuqisyurl"));
        shuqisybodyArr.push($.getdata("shuqisybody"));
        shuqispbodyArr.push($.getdata("shuqispbody"));
        shuqiscbodyArr.push($.getdata("shuqiscbody"));
        shuqiydbodyArr.push($.getdata("shuqiydbody"));
        shuqiqdbodyArr.push($.getdata("shuqiqdbody"));
        shuqirwbodyArr.push($.getdata("shuqirwbody"));
        shuqifxbodyArr.push($.getdata("shuqifxbody"));
        shuqisprwurlArr.push($.getdata("shuqisprwurl"));
        shuqijlbodyArr.push($.getdata("shuqijlbody"));
        shuqisqjlbodyArr.push($.getdata("shuqisqjlbody"));
        shuqicjyurlArr.push($.getdata("shuqicjyurl"));
        shuqicjcsbodyArr.push($.getdata("shuqicjcsbody"));
        shuqicjbodyArr.push($.getdata("shuqicjbody"));
        shuqijsspbodyArr.push($.getdata("shuqijsspbody"));
        shuqijsydurlArr.push($.getdata("shuqijsydurl"));
        shuqijsydbodyArr.push($.getdata("shuqijsydbody"));
        shuqijsqdbodyArr.push($.getdata("shuqijsqdbody"));
        shuqijsqdspyurlArr.push($.getdata("shuqijsqdspyurl"));
        shuqijsqdspbodyArr.push($.getdata("shuqijsqdspbody"));
        shuqijsrwbodyArr.push($.getdata("shuqijsrwbody"));
        shuqijsfxbodyArr.push($.getdata("shuqijsfxbody"));
        shuqijsbookurlArr.push($.getdata("shuqijsbookurl"));
        shuqijsbookbodyArr.push($.getdata("shuqijsbookbody"));
        shuqijssprwurlArr.push($.getdata("shuqijssprwurl"));
        // 根据boxjs中设置的额外账号数，添加存在的账号数据进行任务处理
        if ("shuqiXH") {
            XH = $.getval("shuqiXH") || '0';
        }
        if ("shuqinotifyttt") {
            notifyttt = $.getval("shuqinotifyttt") || '1';
        }
        if ("shuqinotifyInterval") {
            notifyInterval = $.getval("shuqinotifyInterval") || '2';
        }
        if ("shuqiMinutes") {
            Minutes = $.getval("shuqiMinutes") || '10';
        }
        if ("shuqiSC") {
            SC = $.getval("shuqiSC") || '0';
        }
        if ("shuqiTXTX") {
            TXTX = $.getval("shuqiTXTX") || '0';
        }
        let shuqiCount = ($.getval('shuqiCount') || '1') - 0;
        for (let i = 2; i <= shuqiCount; i++) {
            if ($.getdata(`shuqiuserurl${i}`)) {
                shuqiuserurlArr.push($.getdata(`shuqiuserurl${i}`));
                shuqisyurlArr.push($.getdata(`shuqisyurl${i}`));
                shuqisybodyArr.push($.getdata(`shuqisybody${i}`));
                shuqispbodyArr.push($.getdata(`shuqispbody${i}`));
                shuqiscbodyArr.push($.getdata(`shuqiscbody${i}`));
                shuqiydbodyArr.push($.getdata(`shuqiydbody${i}`));
                shuqiqdbodyArr.push($.getdata(`shuqiqdbody${i}`));
                shuqirwbodyArr.push($.getdata(`shuqirwbody${i}`));
                shuqifxbodyArr.push($.getdata(`shuqifxbody${i}`));
                shuqisprwurlArr.push($.getdata(`shuqisprwurl${i}`));
                shuqijlbodyArr.push($.getdata(`shuqijlbody${i}`));
                shuqisqjlbodyArr.push($.getdata(`shuqisqjlbody${i}`));
                shuqicjyurlArr.push($.getdata(`shuqicjyurl${i}`));
                shuqicjcsbodyArr.push($.getdata(`shuqicjcsbody${i}`));
                shuqicjbodyArr.push($.getdata(`shuqicjbody${i}`));
                shuqijsspbodyArr.push($.getdata(`shuqijsspbody${i}`));
                shuqijsydurlArr.push($.getdata(`shuqijsydurl${i}`));
                shuqijsydbodyArr.push($.getdata(`shuqijsydbody${i}`));
                shuqijsqdbodyArr.push($.getdata(`shuqijsqdbody${i}`));
                shuqijsqdspyurlArr.push($.getdata(`shuqijsqdspyurl${i}`));
                shuqijsqdspbodyArr.push($.getdata(`shuqijsqdspbody${i}`));
                shuqijsrwbodyArr.push($.getdata(`shuqijsrwbody${i}`));
                shuqijsfxbodyArr.push($.getdata(`shuqijsfxbody${i}`));
                shuqijsbookurlArr.push($.getdata(`shuqijsbookurl${i}`));
                shuqijsbookbodyArr.push($.getdata(`shuqijsbookbody${i}`));
                shuqijssprwurlArr.push($.getdata(`shuqijssprwurl${i}`));
            }
        }
    }
    if (!shuqiuserurlArr || shuqiuserurlArr == '') {
        Length = 0
    } else Length = shuqiuserurlArr.length
}


function RedCookie() {

    if (XH == 1 && $request && $request.url.indexOf("config") >= 0) {
        op = 1
        while (true) {
            op++;
            if ($.getdata(`shuqiuserurl${op}`) == '') {
                $.setdata(`${op-1}`, `shuqiSuffix`);

                $.idx = ($.idx = ($.getval('shuqiSuffix') || '1') - 1) > 0 ? ($.idx + 1 + '') : '';

                $.log(
                    `[${$.name + $.idx}] 当前书旗账号数量为${op-1}✅: 成功🎉`
                );
                $.msg($.name + $.idx, `当前书旗账号数量为${op-1}: 成功🎉`, ``);
                break;
            }
        }
    }
}

function GetCookie() {



    //获取极速版书城
    if ($request && $request.url.indexOf("activity-center-web") >= 0 && $request.url.indexOf("reward") >= 0) {
        const shuqijsbookurlVal = $request.url;
        userid = shuqijsbookurlVal.split('user_id=')[1].split('&')[0]
        if (shuqijsbookurlVal) {
            if (XH == 1) {
                cookie()

                function cookie() {
                    bodys = $.getdata('shuqijsbookurl' + $.idx);

                    if (bodys) {
                        userids = bodys.split('user_id=')[1].split('&')[0]
                        if (userids != userid) {
                            if ($.idx == '') {
                                $.idx = 2
                                cookie()
                            } else {
                                $.idx = Number($.idx) + 1
                                cookie()
                            }
                        } else {
                            $.setdata(shuqijsbookurlVal, "shuqijsbookurl" + $.idx);
                            $.log(
                                `[${$.name + $.idx}] 获取极速版书城shuqijsbookurlVal✅: 成功,shuqijsbookurlVal: ${shuqijsbookurlVal}`
                            );
                            $.msg($.name + $.idx, `获取极速版书城shuqijsbookurlVal: 成功🎉`, ``);
                            $.done();
                        };
                    } else {
                        $.setdata(shuqijsbookurlVal, "shuqijsbookurl" + $.idx);
                        $.log(
                            `[${$.name + $.idx}] 获取极速版书城shuqijsbookurlVal✅: 成功,shuqijsbookurlVal: ${shuqijsbookurlVal}`
                        );
                        $.msg($.name + $.idx, `获取极速版书城shuqijsbookurlVal: 成功🎉`, ``);
                        $.done();
                    };
                }
            } else {
                $.setdata(shuqijsbookurlVal, "shuqijsbookurl" + $.idx);
                $.log(
                    `[${$.name + $.idx}] 获取极速版书城shuqijsbookurlVal✅: 成功,shuqijsbookurlVal: ${shuqijsbookurlVal}`
                );
                $.msg($.name + $.idx, `获取极速版书城shuqijsbookurlVal: 成功🎉`, ``);
                $.done();
            }
        }
    }
    //获取极速版视频任务
    if ($request && $request.url.indexOf("getAdInfo") >= 0 && $request.url.indexOf("resourceId=719") >= 0 && $request.url.indexOf("appVer=1") >= 0) {
        const shuqijssprwurlVal = $request.url;
        userid = shuqijssprwurlVal.split('user_id=')[1].split('&')[0]
        if (shuqijssprwurlVal) {
            if (XH == 1) {
                cookie()

                function cookie() {
                    bodys = $.getdata('shuqijssprwurl' + $.idx);
                    if (bodys) {
                        userids = bodys.split('user_id=')[1].split('&')[0]
                        if (userids != userid) {

                            if ($.idx == '') {
                                $.idx = 2
                                cookie()
                            } else {
                                $.idx = Number($.idx) + 1
                                cookie()
                            }
                        } else {
                            $.setdata(shuqijssprwurlVal, "shuqijssprwurl" + $.idx);
                            $.log(
                                `[${$.name + $.idx}] 获取极速版视频任务shuqijssprwurlVal✅: 成功,shuqijssprwurlVal: ${shuqijssprwurlVal}`
                            );
                            $.msg($.name + $.idx, `获取极速版视频任务shuqijssprwurlVal: 成功🎉`, ``);
                            $.done();
                        };
                    } else {
                        $.setdata(shuqijssprwurlVal, "shuqijssprwurl" + $.idx);
                        $.log(
                            `[${$.name + $.idx}] 获取极速版视频任务shuqijssprwurlVal✅: 成功,shuqijssprwurlVal: ${shuqijssprwurlVal}`
                        );
                        $.msg($.name + $.idx, `获取极速版视频任务shuqijssprwurlVal: 成功🎉`, ``);
                        $.done();
                    };
                }
            } else {
                $.setdata(shuqijssprwurlVal, "shuqijssprwurl" + $.idx);
                $.log(
                    `[${$.name + $.idx}] 获取极速版视频任务shuqijssprwurlVal✅: 成功,shuqijssprwurlVal: ${shuqijssprwurlVal}`
                );
                $.msg($.name + $.idx, `获取极速版视频任务shuqijssprwurlVal: 成功🎉`, ``);
                $.done();
            }
        }
    }
    //获取抽奖页面
    if ($request && $request.url.indexOf("lottery") >= 0 && $request.url.indexOf("info") >= 0) {
        const shuqicjyurlVal = $request.url;
        userid = shuqicjyurlVal.split('userId=')[1].split('&')[0]
        if (shuqicjyurlVal) {
            if (XH == 1) {
                cookie()

                function cookie() {
                    bodys = $.getdata('shuqicjyurl' + $.idx);

                    if (bodys) {
                        userids = bodys.split('userId=')[1].split('&')[0]
                        if (userids != userid) {
                            if ($.idx == '') {
                                $.idx = 2
                                cookie()
                            } else {
                                $.idx = Number($.idx) + 1
                                cookie()
                            }
                        } else {
                            $.setdata(shuqicjyurlVal, "shuqicjyurl" + $.idx);
                            $.log(
                                `[${$.name + $.idx}] 获取抽奖页面shuqicjyurlVal✅: 成功,shuqicjyurlVal: ${shuqicjyurlVal}`
                            );
                            $.msg($.name + $.idx, `获取抽奖页面shuqicjyurlVal: 成功🎉`, ``);
                            $.done();
                        };
                    } else {
                        $.setdata(shuqicjyurlVal, "shuqicjyurl" + $.idx);
                        $.log(
                            `[${$.name + $.idx}] 获取抽奖页面shuqicjyurlVal✅: 成功,shuqicjyurlVal: ${shuqicjyurlVal}`
                        );
                        $.msg($.name + $.idx, `获取抽奖页面shuqicjyurlVal: 成功🎉`, ``);
                        $.done();
                    };
                }
            } else {
                $.setdata(shuqicjyurlVal, "shuqicjyurl" + $.idx);
                $.log(
                    `[${$.name + $.idx}] 获取抽奖页面shuqicjyurlVal✅: 成功,shuqicjyurlVal: ${shuqicjyurlVal}`
                );
                $.msg($.name + $.idx, `获取抽奖页面shuqicjyurlVal: 成功🎉`, ``);
                $.done();
            };
        }
    }
    //获取极速版签到视频页
    if ($request && $request.url.indexOf("adserver") >= 0 && $request.url.indexOf("getAdInfo") >= 0 && $request.url.indexOf("resourceId=717") >= 0) {
        const shuqijsqdspyurlVal = $request.url;
        userid = shuqijsqdspyurlVal.split('user_id=')[1].split('&')[0]
        if (shuqijsqdspyurlVal) {
            if (XH == 1) {
                cookie()

                function cookie() {
                    bodys = $.getdata('shuqijsqdspyurl' + $.idx);

                    if (bodys) {
                        userids = bodys.split('user_id=')[1].split('&')[0]
                        if (userids != userid) {
                            if ($.idx == '') {
                                $.idx = 2
                                cookie()
                            } else {
                                $.idx = Number($.idx) + 1
                                cookie()
                            }
                        } else {
                            $.setdata(shuqijsqdspyurlVal, "shuqijsqdspyurl" + $.idx);
                            $.log(
                                `[${$.name + $.idx}] 获取极速版签到视频页shuqijsqdspyurlVal✅: 成功,shuqijsqdspyurlVal: ${shuqijsqdspyurlVal}`
                            );
                            $.msg($.name + $.idx, `获取极速版签到视频页shuqijsqdspyurlVal: 成功🎉`, ``);
                            $.done();
                        };
                    } else {
                        $.setdata(shuqijsqdspyurlVal, "shuqijsqdspyurl" + $.idx);
                        $.log(
                            `[${$.name + $.idx}] 获取极速版签到视频页shuqijsqdspyurlVal✅: 成功,shuqijsqdspyurlVal: ${shuqijsqdspyurlVal}`
                        );
                        $.msg($.name + $.idx, `获取极速版签到视频页shuqijsqdspyurlVal: 成功🎉`, ``);
                        $.done();
                    };
                }
            } else {
                $.setdata(shuqijsqdspyurlVal, "shuqijsqdspyurl" + $.idx);
                $.log(
                    `[${$.name + $.idx}] 获取极速版签到视频页shuqijsqdspyurlVal✅: 成功,shuqijsqdspyurlVal: ${shuqijsqdspyurlVal}`
                );
                $.msg($.name + $.idx, `获取极速版签到视频页shuqijsqdspyurlVal: 成功🎉`, ``);
                $.done();
            };
        }
    }
    //获取视频任务
    if ($request && $request.url.indexOf("adserver") >= 0 && $request.url.indexOf("getAdInfo") >= 0 && $request.url.indexOf("resourceId=626") >= 0) {
        const shuqisprwurlVal = $request.url;
        userid = shuqisprwurlVal.split('user_id=')[1].split('&')[0]
        if (shuqisprwurlVal) {
            if (XH == 1) {
                cookie()

                function cookie() {
                    bodys = $.getdata('shuqisprwurl' + $.idx);

                    if (bodys) {
                        userids = bodys.split('user_id=')[1].split('&')[0]
                        if (userids != userid) {
                            if ($.idx == '') {
                                $.idx = 2
                                cookie()
                            } else {
                                $.idx = Number($.idx) + 1
                                cookie()
                            }
                        } else {
                            $.setdata(shuqisprwurlVal, "shuqisprwurl" + $.idx);
                            $.log(
                                `[${$.name + $.idx}] 获取视频任务shuqisprwurlVal✅: 成功,shuqisprwurlVal: ${shuqisprwurlVal}`
                            );
                            $.msg($.name + $.idx, `获取视频任务shuqisprwurlVal: 成功🎉`, ``);
                            $.done();
                        };
                    } else {
                        $.setdata(shuqisprwurlVal, "shuqisprwurl" + $.idx);
                        $.log(
                            `[${$.name + $.idx}] 获取视频任务shuqisprwurlVal✅: 成功,shuqisprwurlVal: ${shuqisprwurlVal}`
                        );
                        $.msg($.name + $.idx, `获取视频任务shuqisprwurlVal: 成功🎉`, ``);
                        $.done();
                    };
                }
            } else {
                $.setdata(shuqisprwurlVal, "shuqisprwurl" + $.idx);
                $.log(
                    `[${$.name + $.idx}] 获取视频任务shuqisprwurlVal✅: 成功,shuqisprwurlVal: ${shuqisprwurlVal}`
                );
                $.msg($.name + $.idx, `获取视频任务shuqisprwurlVal: 成功🎉`, ``);
                $.done();
            };
        }
    }
    //获取用户名
    if ($request && $request.url.indexOf("getBindinfo") >= 0) {
        const shuqiuserurlVal = $request.url;
        userid = shuqiuserurlVal.split('userId=')[1].split('&')[0]
        if (shuqiuserurlVal) {
            if (XH == 1) {
                cookie()

                function cookie() {
                    bodys = $.getdata('shuqiuserurl' + $.idx);

                    if (bodys) {
                        userids = bodys.split('userId=')[1].split('&')[0]
                        if (userids != userid) {
                            if ($.idx == '') {
                                $.idx = 2
                                cookie()
                            } else {
                                $.idx = Number($.idx) + 1
                                cookie()
                            }
                        } else {
                            $.setdata(shuqiuserurlVal, "shuqiuserurl" + $.idx);
                            $.log(
                                `[${$.name + $.idx}] 获取用户名shuqiuserurlVal✅: 成功,shuqiuserurlVal: ${shuqiuserurlVal}`
                            );
                            $.msg($.name + $.idx, `获取用户名shuqiuserurlVal: 成功🎉`, ``);
                            $.done();
                        };
                    } else {
                        $.setdata(shuqiuserurlVal, "shuqiuserurl" + $.idx);
                        $.log(
                            `[${$.name + $.idx}] 获取用户名shuqiuserurlVal✅: 成功,shuqiuserurlVal: ${shuqiuserurlVal}`
                        );
                        $.msg($.name + $.idx, `获取用户名shuqiuserurlVal: 成功🎉`, ``);
                        $.done();
                    };
                }
            } else {
                $.setdata(shuqiuserurlVal, "shuqiuserurl" + $.idx);
                $.log(
                    `[${$.name + $.idx}] 获取用户名shuqiuserurlVal✅: 成功,shuqiuserurlVal: ${shuqiuserurlVal}`
                );
                $.msg($.name + $.idx, `获取用户名shuqiuserurlVal: 成功🎉`, ``);
                $.done();
            };
        }
    }
    //获取收益
    if ($request && $request.url.indexOf("load") >= 0 && $request.url.indexOf("resource") >= 0 && $request.url.indexOf("skinColor=") >= 0 && $request.url.indexOf("appVer=4") >= 0 && $request.body.indexOf("isNewUser") >= 0 && $request.body.indexOf("ShuqiVipEntry") >= 0 && $request.body.indexOf("ShuqiTab") < 0 && $request.body.indexOf("caid=") < 0 && $request.body.indexOf("ShuqiShelfCard") < 0 && $request.body.indexOf("ShuqiIOSUpdateInfo") < 0) {
        const shuqisyurlVal = $request.url
        const shuqisybodyVal = $request.body
        userid = shuqisyurlVal.split('user_id=')[1].split('&')[0]
        if (shuqisyurlVal) {
            if (XH == 1) {
                cookie()

                function cookie() {
                    bodys = $.getdata('shuqisyurl' + $.idx);

                    if (bodys) {
                        userids = bodys.split('user_id=')[1].split('&')[0]
                        if (userids != userid) {
                            if ($.idx == '') {
                                $.idx = 2
                                cookie()
                            } else {
                                $.idx = Number($.idx) + 1
                                cookie()
                            }
                        } else {
                            $.setdata(shuqisyurlVal, "shuqisyurl" + $.idx);
                            $.log(
                                `[${$.name + $.idx}] 获取收益shuqisyurlVal✅: 成功,shuqisyurlVal: ${shuqisyurlVal}`
                            );
                            $.msg($.name + $.idx, `获取收益shuqisyurlVal: 成功🎉`, ``);
                            $.setdata(shuqisybodyVal, "shuqisybody" + $.idx);
                            $.log(
                                `[${$.name + $.idx}] 获取收益shuqisybodyVal✅: 成功,shuqisybodyVal: ${shuqisybodyVal}`
                            );
                            $.msg($.name + $.idx, `获取收益shuqisybodyVal: 成功🎉`, ``);
                            $.done();
                        };
                    } else {
                        $.setdata(shuqisyurlVal, "shuqisyurl" + $.idx);
                        $.log(
                            `[${$.name + $.idx}] 获取收益shuqisyurlVal✅: 成功,shuqisyurlVal: ${shuqisyurlVal}`
                        );
                        $.msg($.name + $.idx, `获取收益shuqisyurlVal: 成功🎉`, ``);
                        $.setdata(shuqisybodyVal, "shuqisybody" + $.idx);
                        $.log(
                            `[${$.name + $.idx}] 获取收益shuqisybodyVal✅: 成功,shuqisybodyVal: ${shuqisybodyVal}`
                        );
                        $.msg($.name + $.idx, `获取收益shuqisybodyVal: 成功🎉`, ``);
                        $.done();
                    };
                }
            } else {
                $.setdata(shuqisyurlVal, "shuqisyurl" + $.idx);
                $.log(
                    `[${$.name + $.idx}] 获取收益shuqisyurlVal✅: 成功,shuqisyurlVal: ${shuqisyurlVal}`
                );
                $.msg($.name + $.idx, `获取收益shuqisyurlVal: 成功🎉`, ``);
                $.setdata(shuqisybodyVal, "shuqisybody" + $.idx);
                $.log(
                    `[${$.name + $.idx}] 获取收益shuqisybodyVal✅: 成功,shuqisybodyVal: ${shuqisybodyVal}`
                );
                $.msg($.name + $.idx, `获取收益shuqisybodyVal: 成功🎉`, ``);
                $.done();
            };
        }
    }

    //获取收益
    if ($request && $request.url.indexOf("load") >= 0 && $request.url.indexOf("resource") >= 0 && $request.body.indexOf("skinColor=") >= 0 && $request.body.indexOf("appVer=4") >= 0 && $request.body.indexOf("isNewUser") >= 0 && $request.body.indexOf("ShuqiVipEntry") >= 0 && $request.body.indexOf("ShuqiTab") < 0 && $request.body.indexOf("caid=") < 0 && $request.body.indexOf("ShuqiShelfCard") < 0 && $request.body.indexOf("ShuqiIOSUpdateInfo") < 0) {
        const shuqisybodyVal = $request.body
        userid = shuqisybodyVal.split('user_id=')[1].split('&')[0]
        if (shuqisybodyVal) {
            if (XH == 1) {
                cookie()

                function cookie() {
                    bodys = $.getdata('shuqisybody' + $.idx);

                    if (bodys) {
                        userids = bodys.split('user_id=')[1].split('&')[0]
                        if (userids != userid) {
                            if ($.idx == '') {
                                $.idx = 2
                                cookie()
                            } else {
                                $.idx = Number($.idx) + 1
                                cookie()
                            }
                        } else {
                            $.setdata(shuqisybodyVal, "shuqisybody" + $.idx);
                            $.log(
                                `[${$.name + $.idx}] 获取收益shuqisybodyVal✅: 成功,shuqisybodyVal: ${shuqisybodyVal}`
                            );
                            $.msg($.name + $.idx, `获取收益shuqisybodyVal: 成功🎉`, ``);
                            $.done();
                        };
                    } else {
                        $.setdata(shuqisybodyVal, "shuqisybody" + $.idx);
                        $.log(
                            `[${$.name + $.idx}] 获取收益shuqisybodyVal✅: 成功,shuqisybodyVal: ${shuqisybodyVal}`
                        );
                        $.msg($.name + $.idx, `获取收益shuqisybodyVal: 成功🎉`, ``);
                        $.done();
                    };
                }
            } else {
                $.setdata(shuqisybodyVal, "shuqisybody" + $.idx);
                $.log(
                    `[${$.name + $.idx}] 获取收益shuqisybodyVal✅: 成功,shuqisybodyVal: ${shuqisybodyVal}`
                );
                $.msg($.name + $.idx, `获取收益shuqisybodyVal: 成功🎉`, ``);
                $.done();
            };
        }
    }

    //获取极速版书城
    if ($request && $request.url.indexOf("convert") >= 0 && $request.body.indexOf("actTaskId=344") >= 0 && $request.body.indexOf("appVer=1") >= 0) {
        const shuqijsbookbodyVal = $request.body;
        userid = shuqijsbookbodyVal.split('userId=')[1].split('&')[0]
        if (shuqijsbookbodyVal) {
            if (XH == 1) {
                cookie()

                function cookie() {
                    bodys = $.getdata('shuqijsbookbody' + $.idx);

                    if (bodys) {
                        userids = bodys.split('userId=')[1].split('&')[0]
                        if (userids != userid) {
                            if ($.idx == '') {
                                $.idx = 2
                                cookie()
                            } else {
                                $.idx = Number($.idx) + 1
                                cookie()
                            }
                        } else {
                            $.setdata(shuqijsbookbodyVal, "shuqijsbookbody" + $.idx);
                            $.log(
                                `[${$.name + $.idx}] 获取极速版书城shuqijsbookbodyVal✅: 成功,shuqijsbookbodyVal: ${shuqijsbookbodyVal}`
                            );
                            $.msg($.name + $.idx, `获取极速版书城shuqijsbookbodyVal: 成功🎉`, ``);
                            $.done();
                        };
                    } else {
                        $.setdata(shuqijsbookbodyVal, "shuqijsbookbody" + $.idx);
                        $.log(
                            `[${$.name + $.idx}] 获取极速版书城shuqijsbookbodyVal✅: 成功,shuqijsbookbodyVal: ${shuqijsbookbodyVal}`
                        );
                        $.msg($.name + $.idx, `获取极速版书城shuqijsbookbodyVal: 成功🎉`, ``);
                        $.done();
                    };
                }
            } else {
                $.setdata(shuqijsbookbodyVal, "shuqijsbookbody" + $.idx);
                $.log(
                    `[${$.name + $.idx}] 获取极速版书城shuqijsbookbodyVal✅: 成功,shuqijsbookbodyVal: ${shuqijsbookbodyVal}`
                );
                $.msg($.name + $.idx, `获取极速版书城shuqijsbookbodyVal: 成功🎉`, ``);
                $.done();
            };
        }
    }
    //获取视频
    if ($request && $request.url.indexOf("prize") >= 0 && $request.url.indexOf("lottery") >= 0 && $request.body.indexOf("deliveryId=525") >= 0) {
        const shuqispbodyVal = $request.body;
        userid = shuqispbodyVal.split('userId=')[1].split('&')[0]
        if (shuqispbodyVal) {
            if (XH == 1) {
                cookie()

                function cookie() {
                    bodys = $.getdata('shuqispbody' + $.idx);

                    if (bodys) {
                        userids = bodys.split('userId=')[1].split('&')[0]
                        if (userids != userid) {
                            if ($.idx == '') {
                                $.idx = 2
                                cookie()
                            } else {
                                $.idx = Number($.idx) + 1
                                cookie()
                            }
                        } else {
                            $.setdata(shuqispbodyVal, "shuqispbody" + $.idx);
                            $.log(
                                `[${$.name + $.idx}] 获取视频shuqispbodyVal✅: 成功,shuqispbodyVal: ${shuqispbodyVal}`
                            );
                            $.msg($.name + $.idx, `获取视频shuqispbodyVal: 成功🎉`, ``);
                            $.done();
                        };
                    } else {
                        $.setdata(shuqispbodyVal, "shuqispbody" + $.idx);
                        $.log(
                            `[${$.name + $.idx}] 获取视频shuqispbodyVal✅: 成功,shuqispbodyVal: ${shuqispbodyVal}`
                        );
                        $.msg($.name + $.idx, `获取视频shuqispbodyVal: 成功🎉`, ``);
                        $.done();
                    };
                }
            } else {
                $.setdata(shuqispbodyVal, "shuqispbody" + $.idx);
                $.log(
                    `[${$.name + $.idx}] 获取视频shuqispbodyVal✅: 成功,shuqispbodyVal: ${shuqispbodyVal}`
                );
                $.msg($.name + $.idx, `获取视频shuqispbodyVal: 成功🎉`, ``);
                $.done();
            };
        }
    }
    //获取时长
    if ($request && $request.url.indexOf("jcollection") >= 0 && $request.url.indexOf("reading") >= 0 && $request.url.indexOf("upload") >= 0) {
        const shuqiscbodyVal = $request.body;
        sqsc = shuqiscbodyVal.split('readingLen%22%3A')[1].split('%7D')[0]
        userid = shuqiscbodyVal.split('user_id=')[1]

        if (shuqiscbodyVal && sqsc >= 10) {
            if (XH == 1) {
                cookie()

                function cookie() {
                    bodys = $.getdata('shuqiscbody' + $.idx);

                    if (bodys) {
                        userids = bodys.split('user_id=')[1]
                        if (userids != userid) {
                            if ($.idx == '') {
                                $.idx = 2
                                cookie()
                            } else {
                                $.idx = Number($.idx) + 1
                                cookie()
                            }
                        } else {
                            $.setdata(shuqiscbodyVal, "shuqiscbody" + $.idx);
                            $.log(
                                `[${$.name + $.idx}] 获取${sqsc}秒时长shuqiscbodyVal✅: 成功,shuqiscbodyVal: ${shuqiscbodyVal}`
                            );
                            $.msg($.name + $.idx, `获取${sqsc}秒时长shuqiscbodyVal: 成功🎉`, ``);
                            $.done();
                        };
                    } else {
                        $.setdata(shuqiscbodyVal, "shuqiscbody" + $.idx);
                        $.log(
                            `[${$.name + $.idx}] 获取${sqsc}秒时长shuqiscbodyVal✅: 成功,shuqiscbodyVal: ${shuqiscbodyVal}`
                        );
                        $.msg($.name + $.idx, `获取${sqsc}秒时长shuqiscbodyVal: 成功🎉`, ``);
                        $.done();
                    };
                }
            } else {
                $.setdata(shuqiscbodyVal, "shuqiscbody" + $.idx);
                $.log(
                    `[${$.name + $.idx}] 获取${sqsc}秒时长shuqiscbodyVal✅: 成功,shuqiscbodyVal: ${shuqiscbodyVal}`
                );
                $.msg($.name + $.idx, `获取${sqsc}秒时长shuqiscbodyVal: 成功🎉`, ``);
                $.done();
            };
        }
    }
    //获取阅读
    if ($request && $request.url.indexOf("pendant") >= 0 && $request.url.indexOf("lottery") >= 0 && $request.body.indexOf("deliveryId=707") >= 0) {
        const shuqiydbodyVal = $request.body;
        userid = shuqiydbodyVal.split('userId=')[1].split('&')[0]
        if (shuqiydbodyVal) {
            if (XH == 1) {
                cookie()

                function cookie() {
                    bodys = $.getdata('shuqiydbody' + $.idx);

                    if (bodys) {
                        userids = bodys.split('userId=')[1].split('&')[0]
                        if (userids != userid) {
                            if ($.idx == '') {
                                $.idx = 2
                                cookie()
                            } else {
                                $.idx = Number($.idx) + 1
                                cookie()
                            }
                        } else {
                            $.setdata(shuqiydbodyVal, "shuqiydbody" + $.idx);
                            $.log(
                                `[${$.name + $.idx}] 获取阅读shuqiydbodyVal✅: 成功,shuqiydbodyVal: ${shuqiydbodyVal}`
                            );
                            $.msg($.name + $.idx, `获取阅读shuqiydbodyVal: 成功🎉`, ``);
                            $.done();
                        };
                    } else {
                        $.setdata(shuqiydbodyVal, "shuqiydbody" + $.idx);
                        $.log(
                            `[${$.name + $.idx}] 获取阅读shuqiydbodyVal✅: 成功,shuqiydbodyVal: ${shuqiydbodyVal}`
                        );
                        $.msg($.name + $.idx, `获取阅读shuqiydbodyVal: 成功🎉`, ``);
                        $.done();
                    };
                }
            } else {
                $.setdata(shuqiydbodyVal, "shuqiydbody" + $.idx);
                $.log(
                    `[${$.name + $.idx}] 获取阅读shuqiydbodyVal✅: 成功,shuqiydbodyVal: ${shuqiydbodyVal}`
                );
                $.msg($.name + $.idx, `获取阅读shuqiydbodyVal: 成功🎉`, ``);
                $.done();
            };
        }
    }
    //获取签到
    if ($request && $request.url.indexOf("signInAction") >= 0 && $request.body.indexOf("position=501") >= 0 && $request.body.indexOf("signInType=1") >= 0) {
        const shuqiqdbodyVal = $request.body;
        userid = shuqiqdbodyVal.split('userId=')[1].split('&')[0]
        if (shuqiqdbodyVal) {
            if (XH == 1) {
                cookie()

                function cookie() {
                    bodys = $.getdata('shuqiqdbody' + $.idx);

                    if (bodys) {
                        userids = bodys.split('userId=')[1].split('&')[0]
                        if (userids != userid) {
                            if ($.idx == '') {
                                $.idx = 2
                                cookie()
                            } else {
                                $.idx = Number($.idx) + 1
                                cookie()
                            }
                        } else {
                            $.setdata(shuqiqdbodyVal, "shuqiqdbody" + $.idx);
                            $.log(
                                `[${$.name + $.idx}] 获取签到shuqiqdbodyVal✅: 成功,shuqiqdbodyVal: ${shuqiqdbodyVal}`
                            );
                            $.msg($.name + $.idx, `获取签到shuqiqdbodyVal: 成功🎉`, ``);
                            $.done();
                        };
                    } else {
                        $.setdata(shuqiqdbodyVal, "shuqiqdbody" + $.idx);
                        $.log(
                            `[${$.name + $.idx}] 获取签到shuqiqdbodyVal✅: 成功,shuqiqdbodyVal: ${shuqiqdbodyVal}`
                        );
                        $.msg($.name + $.idx, `获取签到shuqiqdbodyVal: 成功🎉`, ``);
                        $.done();
                    };
                }
            } else {
                $.setdata(shuqiqdbodyVal, "shuqiqdbody" + $.idx);
                $.log(
                    `[${$.name + $.idx}] 获取签到shuqiqdbodyVal✅: 成功,shuqiqdbodyVal: ${shuqiqdbodyVal}`
                );
                $.msg($.name + $.idx, `获取签到shuqiqdbodyVal: 成功🎉`, ``);
                $.done();
            };
        }
    }
    //获取任务
    if ($request && $request.url.indexOf("resource") >= 0 && $request.body.indexOf("resources") >= 0 && $request.body.indexOf("params=") >= 0 && $request.body.indexOf("appVer=4") >= 0 && $request.body.indexOf("skinVersionPrefix=") >= 0 && $request.body.indexOf("isNewUser=") < 0 && $request.body.indexOf("reqEncryptType=") < 0) {
        const shuqirwbodyVal = $request.body;
        userid = shuqirwbodyVal.split('userId=')[1].split('&')[0]
        if (shuqirwbodyVal) {
            if (XH == 1) {
                cookie()

                function cookie() {
                    bodys = $.getdata('shuqirwbody' + $.idx);

                    if (bodys) {
                        userids = bodys.split('userId=')[1].split('&')[0]
                        if (userids != userid) {
                            if ($.idx == '') {
                                $.idx = 2
                                cookie()
                            } else {
                                $.idx = Number($.idx) + 1
                                cookie()
                            }
                        } else {
                            $.setdata(shuqirwbodyVal, "shuqirwbody" + $.idx);
                            $.log(
                                `[${$.name + $.idx}] 获取任务shuqirwbodyVal✅: 成功,shuqirwbodyVal: ${shuqirwbodyVal}`
                            );
                            $.msg($.name + $.idx, `获取任务shuqirwbodyVal: 成功🎉`, ``);
                            $.done();
                        };
                    } else {
                        $.setdata(shuqirwbodyVal, "shuqirwbody" + $.idx);
                        $.log(
                            `[${$.name + $.idx}] 获取任务shuqirwbodyVal✅: 成功,shuqirwbodyVal: ${shuqirwbodyVal}`
                        );
                        $.msg($.name + $.idx, `获取任务shuqirwbodyVal: 成功🎉`, ``);
                        $.done();
                    };
                }
            } else {
                $.setdata(shuqirwbodyVal, "shuqirwbody" + $.idx);
                $.log(
                    `[${$.name + $.idx}] 获取任务shuqirwbodyVal✅: 成功,shuqirwbodyVal: ${shuqirwbodyVal}`
                );
                $.msg($.name + $.idx, `获取任务shuqirwbodyVal: 成功🎉`, ``);
                $.done();
            };
        }
    }
    //获取分享
    if ($request && $request.url.indexOf("activity") >= 0 && $request.body.indexOf("appVer=4") >= 0 && $request.body.indexOf("actTaskId=357") >= 0) {
        const shuqifxbodyVal = $request.body;
        userid = shuqifxbodyVal.split('userId=')[1].split('&')[0]
        if (shuqifxbodyVal) {
            if (XH == 1) {
                cookie()

                function cookie() {
                    bodys = $.getdata('shuqifxbody' + $.idx);

                    if (bodysd) {
                        userids = bodys.split('userId=')[1].split('&')[0]
                        if (userids != userid) {
                            if ($.idx == '') {
                                $.idx = 2
                                cookie()
                            } else {
                                $.idx = Number($.idx) + 1
                                cookie()
                            }
                        } else {
                            $.setdata(shuqifxbodyVal, "shuqifxbody" + $.idx);
                            $.log(
                                `[${$.name + $.idx}] 获取分享shuqifxbodyVal✅: 成功,shuqifxbodyVal: ${shuqifxbodyVal}`
                            );
                            $.msg($.name + $.idx, `获取分享shuqifxbodyVal: 成功🎉`, ``);
                            $.done();
                        };
                    } else {
                        $.setdata(shuqifxbodyVal, "shuqifxbody" + $.idx);
                        $.log(
                            `[${$.name + $.idx}] 获取分享shuqifxbodyVal✅: 成功,shuqifxbodyVal: ${shuqifxbodyVal}`
                        );
                        $.msg($.name + $.idx, `获取分享shuqifxbodyVal: 成功🎉`, ``);
                        $.done();
                    };
                }
            } else {
                $.setdata(shuqifxbodyVal, "shuqifxbody" + $.idx);
                $.log(
                    `[${$.name + $.idx}] 获取分享shuqifxbodyVal✅: 成功,shuqifxbodyVal: ${shuqifxbodyVal}`
                );
                $.msg($.name + $.idx, `获取分享shuqifxbodyVal: 成功🎉`, ``);
                $.done();
            };
        }
    }
    //获取奖励
    if ($request && $request.url.indexOf("bubble") >= 0 && $request.url.indexOf("info") >= 0 && $request.body.indexOf("requestSrc=h5") >= 0) {
        const shuqijlbodyVal = $request.body;
        userid = shuqijlbodyVal.split('userId=')[1].split('&')[0]
        if (shuqijlbodyVal) {
            if (XH == 1) {
                cookie()

                function cookie() {
                    bodys = $.getdata('shuqijlbody' + $.idx);

                    if (bodys) {
                        userids = bodys.split('userId=')[1].split('&')[0]
                        if (userids != userid) {
                            if ($.idx == '') {
                                $.idx = 2
                                cookie()
                            } else {
                                $.idx = Number($.idx) + 1
                                cookie()
                            }
                        } else {
                            $.setdata(shuqijlbodyVal, "shuqijlbody" + $.idx);
                            $.log(
                                `[${$.name + $.idx}] 获取奖励shuqijlbodyVal✅: 成功,shuqijlbodyVal: ${shuqijlbodyVal}`
                            );
                            $.msg($.name + $.idx, `获取奖励shuqijlbodyVal: 成功🎉`, ``);
                            $.done();
                        };
                    } else {
                        $.setdata(shuqijlbodyVal, "shuqijlbody" + $.idx);
                        $.log(
                            `[${$.name + $.idx}] 获取奖励shuqijlbodyVal✅: 成功,shuqijlbodyVal: ${shuqijlbodyVal}`
                        );
                        $.msg($.name + $.idx, `获取奖励shuqijlbodyVal: 成功🎉`, ``);
                        $.done();
                    };
                }
            } else {
                $.setdata(shuqijlbodyVal, "shuqijlbody" + $.idx);
                $.log(
                    `[${$.name + $.idx}] 获取奖励shuqijlbodyVal✅: 成功,shuqijlbodyVal: ${shuqijlbodyVal}`
                );
                $.msg($.name + $.idx, `获取奖励shuqijlbodyVal: 成功🎉`, ``);
                $.done();
            };
        }
    }
    //获取收取奖励
    if ($request && $request.url.indexOf("manual") >= 0 && $request.url.indexOf("receive") >= 0 && $request.body.indexOf("appVer=4") >= 0) {
        const shuqisqjlbodyVal = $request.body;
        userid = shuqisqjlbodyVal.split('userId=')[1].split('&')[0]
        if (shuqisqjlbodyVal) {
            if (XH == 1) {
                cookie()

                function cookie() {
                    bodys = $.getdata('shuqisqjlbody' + $.idx);

                    if (bodys) {
                        userids = bodys.split('userId=')[1].split('&')[0]
                        if (userids != userid) {
                            if ($.idx == '') {
                                $.idx = 2
                                cookie()
                            } else {
                                $.idx = Number($.idx) + 1
                                cookie()
                            }
                        } else {
                            $.setdata(shuqisqjlbodyVal, "shuqisqjlbody" + $.idx);
                            $.log(
                                `[${$.name + $.idx}] 获取收取奖励shuqisqjlbodyVal✅: 成功,shuqisqjlbodyVal: ${shuqisqjlbodyVal}`
                            );
                            $.msg($.name + $.idx, `获取收取奖励shuqisqjlbodyVal: 成功🎉`, ``);
                            $.done();
                        };
                    } else {
                        $.setdata(shuqisqjlbodyVal, "shuqisqjlbody" + $.idx);
                        $.log(
                            `[${$.name + $.idx}] 获取收取奖励shuqisqjlbodyVal✅: 成功,shuqisqjlbodyVal: ${shuqisqjlbodyVal}`
                        );
                        $.msg($.name + $.idx, `获取收取奖励shuqisqjlbodyVal: 成功🎉`, ``);
                        $.done();
                    };
                }
            } else {
                $.setdata(shuqisqjlbodyVal, "shuqisqjlbody" + $.idx);
                $.log(
                    `[${$.name + $.idx}] 获取收取奖励shuqisqjlbodyVal✅: 成功,shuqisqjlbodyVal: ${shuqisqjlbodyVal}`
                );
                $.msg($.name + $.idx, `获取收取奖励shuqisqjlbodyVal: 成功🎉`, ``);
                $.done();
            };
        }
    }
    //获取抽奖次数
    if ($request && $request.url.indexOf("prize") >= 0 && $request.url.indexOf("lottery") >= 0 && $request.body.indexOf("resourceId=703") >= 0) {
        const shuqicjcsbodyVal = $request.body;
        userid = shuqicjcsbodyVal.split('userId=')[1].split('&')[0]
        if (shuqicjcsbodyVal) {
            if (XH == 1) {
                cookie()

                function cookie() {
                    bodys = $.getdata('shuqicjcsbody' + $.idx);

                    if (bodys) {
                        userids = bodys.split('userId=')[1].split('&')[0]
                        if (userids != userid) {
                            if ($.idx == '') {
                                $.idx = 2
                                cookie()
                            } else {
                                $.idx = Number($.idx) + 1
                                cookie()
                            }
                        } else {
                            $.setdata(shuqicjcsbodyVal, "shuqicjcsbody" + $.idx);
                            $.log(
                                `[${$.name + $.idx}] 获取抽奖次数shuqicjcsbodyVal✅: 成功,shuqicjcsbodyVal: ${shuqicjcsbodyVal}`
                            );
                            $.msg($.name + $.idx, `获取抽奖次数shuqicjcsbodyVal: 成功🎉`, ``);
                            $.done();
                        };
                    } else {
                        $.setdata(shuqicjcsbodyVal, "shuqicjcsbody" + $.idx);
                        $.log(
                            `[${$.name + $.idx}] 获取抽奖次数shuqicjcsbodyVal✅: 成功,shuqicjcsbodyVal: ${shuqicjcsbodyVal}`
                        );
                        $.msg($.name + $.idx, `获取抽奖次数shuqicjcsbodyVal: 成功🎉`, ``);
                        $.done();
                    };
                }
            } else {
                $.setdata(shuqicjcsbodyVal, "shuqicjcsbody" + $.idx);
                $.log(
                    `[${$.name + $.idx}] 获取抽奖次数shuqicjcsbodyVal✅: 成功,shuqicjcsbodyVal: ${shuqicjcsbodyVal}`
                );
                $.msg($.name + $.idx, `获取抽奖次数shuqicjcsbodyVal: 成功🎉`, ``);
                $.done();
            };
        }
    }
    //获取抽奖
    if ($request && $request.url.indexOf("lottery") >= 0 && $request.url.indexOf("draw") >= 0 && $request.body.indexOf("activityId=311") >= 0) {
        const shuqicjbodyVal = $request.body;
        userid = shuqicjbodyVal.split('userId=')[1].split('&')[0]
        if (shuqicjbodyVal) {
            if (XH == 1) {
                cookie()

                function cookie() {
                    bodys = $.getdata('shuqicjbody' + $.idx);

                    if (bodys) {
                        userids = bodys.split('userId=')[1].split('&')[0]
                        if (userids != userid) {
                            if ($.idx == '') {
                                $.idx = 2
                                cookie()
                            } else {
                                $.idx = Number($.idx) + 1
                                cookie()
                            }
                        } else {
                            $.setdata(shuqicjbodyVal, "shuqicjbody" + $.idx);
                            $.log(
                                `[${$.name + $.idx}] 获取抽奖shuqicjbodyVal✅: 成功,shuqicjbodyVal: ${shuqicjbodyVal}`
                            );
                            $.msg($.name + $.idx, `获取抽奖shuqicjbodyVal: 成功🎉`, ``);
                            $.done();
                        };
                    } else {
                        $.setdata(shuqicjbodyVal, "shuqicjbody" + $.idx);
                        $.log(
                            `[${$.name + $.idx}] 获取抽奖shuqicjbodyVal✅: 成功,shuqicjbodyVal: ${shuqicjbodyVal}`
                        );
                        $.msg($.name + $.idx, `获取抽奖shuqicjbodyVal: 成功🎉`, ``);
                        $.done();
                    };
                }
            } else {
                $.setdata(shuqicjbodyVal, "shuqicjbody" + $.idx);
                $.log(
                    `[${$.name + $.idx}] 获取抽奖shuqicjbodyVal✅: 成功,shuqicjbodyVal: ${shuqicjbodyVal}`
                );
                $.msg($.name + $.idx, `获取抽奖shuqicjbodyVal: 成功🎉`, ``);
                $.done();
            };
        }
    }
    //获取极速版视频
    if ($request && $request.url.indexOf("prize") >= 0 && $request.url.indexOf("lottery") >= 0 && $request.body.indexOf("resourceId=719") >= 0) {
        const shuqijsspbodyVal = $request.body;
        userid = shuqijsspbodyVal.split('userId=')[1].split('&')[0]
        if (shuqijsspbodyVal) {
            if (XH == 1) {
                cookie()

                function cookie() {
                    bodys = $.getdata('shuqijsspbody' + $.idx);

                    if (bodys) {
                        userids = bodys.split('userId=')[1].split('&')[0]
                        if (userids != userid) {
                            if ($.idx == '') {
                                $.idx = 2
                                cookie()
                            } else {
                                $.idx = Number($.idx) + 1
                                cookie()
                            }
                        } else {
                            $.setdata(shuqijsspbodyVal, "shuqijsspbody" + $.idx);
                            $.log(
                                `[${$.name + $.idx}] 获取极速版视频shuqijsspbodyVal✅: 成功,shuqijsspbodyVal: ${shuqijsspbodyVal}`
                            );
                            $.msg($.name + $.idx, `获取极速版视频shuqijsspbodyVal: 成功🎉`, ``);
                            $.done();
                        };
                    } else {
                        $.setdata(shuqijsspbodyVal, "shuqijsspbody" + $.idx);
                        $.log(
                            `[${$.name + $.idx}] 获取极速版视频shuqijsspbodyVal✅: 成功,shuqijsspbodyVal: ${shuqijsspbodyVal}`
                        );
                        $.msg($.name + $.idx, `获取极速版视频shuqijsspbodyVal: 成功🎉`, ``);
                        $.done();
                    };
                }
            } else {
                $.setdata(shuqijsspbodyVal, "shuqijsspbody" + $.idx);
                $.log(
                    `[${$.name + $.idx}] 获取极速版视频shuqijsspbodyVal✅: 成功,shuqijsspbodyVal: ${shuqijsspbodyVal}`
                );
                $.msg($.name + $.idx, `获取极速版视频shuqijsspbodyVal: 成功🎉`, ``);
                $.done();
            };
        }
    }
    //获取极速版签到视频
    if ($request && $request.url.indexOf("prize") >= 0 && $request.url.indexOf("lottery") >= 0 && $request.body.indexOf("deliveryId=894") >= 0) {
        const shuqijsqdspbodyVal = $request.body;
        userid = shuqijsqdspbodyVal.split('userId=')[1].split('&')[0]
        if (shuqijsqdspbodyVal) {
            if (XH == 1) {
                cookie()

                function cookie() {
                    bodys = $.getdata('shuqijsqdspbody' + $.idx);

                    if (bodys) {
                        userids = bodys.split('userId=')[1].split('&')[0]
                        if (userids != userid) {
                            if ($.idx == '') {
                                $.idx = 2
                                cookie()
                            } else {
                                $.idx = Number($.idx) + 1
                                cookie()
                            }
                        } else {
                            $.setdata(shuqijsqdspbodyVal, "shuqijsqdspbody" + $.idx);
                            $.log(
                                `[${$.name + $.idx}] 获取极速版签到视频shuqijsqdspbodyVal✅: 成功,shuqijsqdspbodyVal: ${shuqijsqdspbodyVal}`
                            );
                            $.msg($.name + $.idx, `获取极速版签到视频shuqijsqdspbodyVal: 成功🎉`, ``);
                            $.done();
                        };
                    } else {
                        $.setdata(shuqijsqdspbodyVal, "shuqijsqdspbody" + $.idx);
                        $.log(
                            `[${$.name + $.idx}] 获取极速版签到视频shuqijsqdspbodyVal✅: 成功,shuqijsqdspbodyVal: ${shuqijsqdspbodyVal}`
                        );
                        $.msg($.name + $.idx, `获取极速版签到视频shuqijsqdspbodyVal: 成功🎉`, ``);
                        $.done();
                    };
                }
            } else {
                $.setdata(shuqijsqdspbodyVal, "shuqijsqdspbody" + $.idx);
                $.log(
                    `[${$.name + $.idx}] 获取极速版签到视频shuqijsqdspbodyVal✅: 成功,shuqijsqdspbodyVal: ${shuqijsqdspbodyVal}`
                );
                $.msg($.name + $.idx, `获取极速版签到视频shuqijsqdspbodyVal: 成功🎉`, ``);
                $.done();
            }
        }
    }
    //获取极速版阅读
    if ($request && $request.url.indexOf("activity") >= 0 && $request.url.indexOf("pendant") >= 0 && $request.url.indexOf("lottery") >= 0) {
        const shuqijsydurlVal = $request.url;
        const shuqijsydbodyVal = $request.body;
        userid = shuqijsydurlVal.split('user_id=')[1].split('&')[0]
        if (shuqijsydurlVal) {
            if (XH == 1) {
                cookie()

                function cookie() {
                    bodys = $.getdata('shuqijsydurl' + $.idx);

                    if (bodys) {
                        userids = bodys.split('user_id=')[1].split('&')[0]
                        if (userids != userid) {
                            if ($.idx == '') {
                                $.idx = 2
                                cookie()
                            } else {
                                $.idx = Number($.idx) + 1
                                cookie()
                            }
                        } else {
                            $.setdata(shuqijsydurlVal, "shuqijsydurl" + $.idx);
                            $.log(
                                `[${$.name + $.idx}] 获取极速版阅读shuqijsydurlVal✅: 成功,shuqijsydurlVal: ${shuqijsydurlVal}`
                            );
                            $.msg($.name + $.idx, `获取极速版阅读shuqijsydurlVal: 成功🎉`, ``);
                            $.setdata(shuqijsydbodyVal, "shuqijsydbody" + $.idx);
                            $.log(
                                `[${$.name + $.idx}] 获取极速版阅读shuqijsydbodyVal✅: 成功,shuqijsydbodyVal: ${shuqijsydbodyVal}`
                            );
                            $.msg($.name + $.idx, `获取极速版阅读shuqijsydbodyVal: 成功🎉`, ``);
                            $.done();
                        };
                    } else {
                        $.setdata(shuqijsydurlVal, "shuqijsydurl" + $.idx);
                        $.log(
                            `[${$.name + $.idx}] 获取极速版阅读shuqijsydurlVal✅: 成功,shuqijsydurlVal: ${shuqijsydurlVal}`
                        );
                        $.msg($.name + $.idx, `获取极速版阅读shuqijsydurlVal: 成功🎉`, ``);
                        $.setdata(shuqijsydbodyVal, "shuqijsydbody" + $.idx);
                        $.log(
                            `[${$.name + $.idx}] 获取极速版阅读shuqijsydbodyVal✅: 成功,shuqijsydbodyVal: ${shuqijsydbodyVal}`
                        );
                        $.msg($.name + $.idx, `获取极速版阅读shuqijsydbodyVal: 成功🎉`, ``);
                        $.done();
                    };
                }
            } else {
                $.setdata(shuqijsydurlVal, "shuqijsydurl" + $.idx);
                $.log(
                    `[${$.name + $.idx}] 获取极速版阅读shuqijsydurlVal✅: 成功,shuqijsydurlVal: ${shuqijsydurlVal}`
                );
                $.msg($.name + $.idx, `获取极速版阅读shuqijsydurlVal: 成功🎉`, ``);
                $.setdata(shuqijsydbodyVal, "shuqijsydbody" + $.idx);
                $.log(
                    `[${$.name + $.idx}] 获取极速版阅读shuqijsydbodyVal✅: 成功,shuqijsydbodyVal: ${shuqijsydbodyVal}`
                );
                $.msg($.name + $.idx, `获取极速版阅读shuqijsydbodyVal: 成功🎉`, ``);
                $.done();
            };
        }
    }
    //获取极速版签到
    if ($request && $request.url.indexOf("signInAction") >= 0 && $request.body.indexOf("position=601") >= 0 && $request.body.indexOf("signInType=1") >= 0) {
        const shuqijsqdbodyVal = $request.body;
        userid = shuqijsqdbodyVal.split('userId=')[1].split('&')[0]
        if (shuqijsqdbodyVal) {
            if (XH == 1) {
                cookie()

                function cookie() {
                    bodys = $.getdata('shuqijsqdbody' + $.idx);

                    if (bodys) {
                        userids = bodys.split('userId=')[1].split('&')[0]
                        if (userids != userid) {
                            if ($.idx == '') {
                                $.idx = 2
                                cookie()
                            } else {
                                $.idx = Number($.idx) + 1
                                cookie()
                            }
                        } else {
                            $.setdata(shuqijsqdbodyVal, "shuqijsqdbody" + $.idx);
                            $.log(
                                `[${$.name + $.idx}] 获取极速版签到shuqijsqdbodyVal✅: 成功,shuqijsqdbodyVal: ${shuqijsqdbodyVal}`
                            );
                            $.msg($.name + $.idx, `获取极速版签到shuqijsqdbodyVal: 成功🎉`, ``);
                            $.done();
                        };
                    } else {
                        $.setdata(shuqijsqdbodyVal, "shuqijsqdbody" + $.idx);
                        $.log(
                            `[${$.name + $.idx}] 获取极速版签到shuqijsqdbodyVal✅: 成功,shuqijsqdbodyVal: ${shuqijsqdbodyVal}`
                        );
                        $.msg($.name + $.idx, `获取极速版签到shuqijsqdbodyVal: 成功🎉`, ``);
                        $.done();
                    };
                }
            } else {
                $.setdata(shuqijsqdbodyVal, "shuqijsqdbody" + $.idx);
                $.log(
                    `[${$.name + $.idx}] 获取极速版签到shuqijsqdbodyVal✅: 成功,shuqijsqdbodyVal: ${shuqijsqdbodyVal}`
                );
                $.msg($.name + $.idx, `获取极速版签到shuqijsqdbodyVal: 成功🎉`, ``);
                $.done();
            };
        }
    }
    //获取极速版任务
    if ($request && $request.url.indexOf("resource") >= 0 && $request.body.indexOf("resources") >= 0 && $request.body.indexOf("params=") >= 0 && $request.body.indexOf("appVer=1") >= 0 && $request.body.indexOf("skinVersionPrefix=") < 0 && $request.body.indexOf("isNewUser=") < 0 && $request.body.indexOf("reqEncryptType=") < 0) {
        const shuqijsrwbodyVal = $request.body;
        userid = shuqijsrwbodyVal.split('userId=')[1].split('&')[0]
        if (shuqijsrwbodyVal) {
            if (XH == 1) {
                cookie()

                function cookie() {
                    bodys = $.getdata('shuqijsrwbody' + $.idx);
                    if (bodys) {
                        userids = bodys.split('userId=')[1].split('&')[0]
                        if (userids != userid) {

                            if ($.idx == '') {
                                $.idx = 2
                                cookie()
                            } else {
                                $.idx = Number($.idx) + 1
                                cookie()
                            }
                        } else {
                            $.setdata(shuqijsrwbodyVal, "shuqijsrwbody" + $.idx);
                            $.log(
                                `[${$.name + $.idx}] 获取极速版任务shuqijsrwbodyVal✅: 成功,shuqijsrwbodyVal: ${shuqijsrwbodyVal}`
                            );
                            $.msg($.name + $.idx, `获取极速版任务shuqijsrwbodyVal: 成功🎉`, ``);
                            $.done();
                        };
                    } else {
                        $.setdata(shuqijsrwbodyVal, "shuqijsrwbody" + $.idx);
                        $.log(
                            `[${$.name + $.idx}] 获取极速版任务shuqijsrwbodyVal✅: 成功,shuqijsrwbodyVal: ${shuqijsrwbodyVal}`
                        );
                        $.msg($.name + $.idx, `获取极速版任务shuqijsrwbodyVal: 成功🎉`, ``);
                        $.done();
                    };
                }
            } else {
                $.setdata(shuqijsrwbodyVal, "shuqijsrwbody" + $.idx);
                $.log(
                    `[${$.name + $.idx}] 获取极速版任务shuqijsrwbodyVal✅: 成功,shuqijsrwbodyVal: ${shuqijsrwbodyVal}`
                );
                $.msg($.name + $.idx, `获取极速版任务shuqijsrwbodyVal: 成功🎉`, ``);
                $.done();
            };
        }
    }
    //获取极速版分享
    if ($request && $request.body.indexOf("actTaskId=327") >= 0 && $request.body.indexOf("appVer=1") >= 0) {
        const shuqijsfxbodyVal = $request.body;
        userid = shuqijsfxbodyVal.split('userId=')[1].split('&')[0]
        if (shuqijsfxbodyVal) {
            if (XH == 1) {
                cookie()

                function cookie() {
                    bodys = $.getdata('shuqijsfxbody' + $.idx);

                    if (bodys) {
                        userids = bodys.split('userId=')[1].split('&')[0]
                        if (userids != userid) {
                            if ($.idx == '') {
                                $.idx = 2
                                cookie()
                            } else {
                                $.idx = Number($.idx) + 1
                                cookie()
                            }
                        } else {
                            $.setdata(shuqijsfxbodyVal, "shuqijsfxbody" + $.idx);
                            $.log(
                                `[${$.name + $.idx}] 获取极速版分享shuqijsfxbodyVal✅: 成功,shuqijsfxbodyVal: ${shuqijsfxbodyVal}`
                            );
                            $.msg($.name + $.idx, `获取极速版分享shuqijsfxbodyVal: 成功🎉`, ``);
                            $.done();
                        };
                    } else {
                        $.setdata(shuqijsfxbodyVal, "shuqijsfxbody" + $.idx);
                        $.log(
                            `[${$.name + $.idx}] 获取极速版分享shuqijsfxbodyVal✅: 成功,shuqijsfxbodyVal: ${shuqijsfxbodyVal}`
                        );
                        $.msg($.name + $.idx, `获取极速版分享shuqijsfxbodyVal: 成功🎉`, ``);
                        $.done();
                    };
                }
            } else {
                $.setdata(shuqijsfxbodyVal, "shuqijsfxbody" + $.idx);
                $.log(
                    `[${$.name + $.idx}] 获取极速版分享shuqijsfxbodyVal✅: 成功,shuqijsfxbodyVal: ${shuqijsfxbodyVal}`
                );
                $.msg($.name + $.idx, `获取极速版分享shuqijsfxbodyVal: 成功🎉`, ``);
                $.done();
            };
        }
    }

}
console.log(
    `================== 脚本执行 - 北京时间(UTC+8)：${new Date(
    new Date().getTime() +
    new Date().getTimezoneOffset() * 60 * 1000 +
    8 * 60 * 60 * 1000
  ).toLocaleString()} =====================\n`
);
console.log(
    `============ 共 ${Length} 个${$.name}账号=============\n`
);
//时间
nowTimes = new Date(
    new Date().getTime() +
    new Date().getTimezoneOffset() * 60 * 1000 +
    8 * 60 * 60 * 1000
);
//今天
Y = nowTimes.getFullYear() + '-';
M = (nowTimes.getMonth() + 1 < 10 ? '0' + (nowTimes.getMonth() + 1) : nowTimes.getMonth() + 1) + '-';
D = (nowTimes.getDate() < 10 ? '0' + (nowTimes.getDate()) : nowTimes.getDate());
ddtime = Y + M + D;
console.log(ddtime)
//当前时间戳
function tts(inputTime) {
    if ($.isNode()) {
        TTS = Math.round(new Date().getTime() +
            new Date().getTimezoneOffset() * 60 * 1000).toString();
    } else TTS = Math.round(new Date().getTime() +
        new Date().getTimezoneOffset() * 60 * 1000 + 8 * 60 * 60 * 1000).toString();
    return TTS;
};
//当前10位时间戳
function ts(inputTime) {
    if ($.isNode()) {
        TS = Math.round((new Date().getTime() +
            new Date().getTimezoneOffset() * 60 * 1000) / 1000).toString();
    } else TS = Math.round((new Date().getTime() +
        new Date().getTimezoneOffset() * 60 * 1000 +
        8 * 60 * 60 * 1000) / 1000).toString();
    return TS;
};
//今天0点时间戳时间戳
function daytime(inputTime) {
    if ($.isNode()) {
        DAYTIME =
            new Date(new Date().toLocaleDateString()).getTime() - 8 * 60 * 60 * 1000;
    } else DAYTIME = new Date(new Date().toLocaleDateString()).getTime();
    return DAYTIME;
};
//时间戳格式化日期
function time(inputTime) {
    if ($.isNode()) {
        var date = new Date(inputTime + 8 * 60 * 60 * 1000);
    } else var date = new Date(inputTime);
    Y = date.getFullYear() + '-';
    M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
    D = date.getDate() + ' ';
    h = date.getHours() + ':';
    m = date.getMinutes() + ':';
    s = date.getSeconds();
    return Y + M + D + h + m + s;
};
//日期格式化时间戳
function timecs() {
    if ($.isNode()) {
        var date = new Date(newtime).getTime() - 8 * 60 * 60 * 1000
    } else var date = new Date(newtime).getTime()
    return date;
};
//随机udid 大写
function udid() {
    var s = [];
    var hexDigits = "0123456789ABCDEF";
    for (var i = 0; i < 36; i++) {
        s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
    }
    s[14] = "4"; // bits 12-15 of the time_hi_and_version field to 0010
    s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1); // bits 6-7 of the clock_seq_hi_and_reserved to 01
    s[8] = s[13] = s[18] = s[23] = "-";
    var uuid = s.join("");
    return uuid;
}
//随机udid 小写
function udid2() {
    function S4() {
        return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    }
    return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
}
//编码
function encodeUnicode(str) {
    var res = [];
    for (var i = 0; i < str.length; i++) {
        res[i] = ("00" + str.charCodeAt(i).toString(16)).slice(-4);
    }
    return "\\u" + res.join("\\u");
}
//解码
function decodeUnicode(str) {
    str = str.replace(/\\/g, "%");
    return unescape(str);
}
//随机延迟
function RT(X, Y) {
    do rt = Math.floor(Math.random() * Y);
    while (rt < X)
    return rt;
}
let isGetCookie = typeof $request !== 'undefined'
if (isGetCookie) {
    RedCookie()
    GetCookie()
    $.done();
} else {
    !(async () => {
        await all();
        await msgShow();
    })()
    .catch((e) => {
            $.log('', `❌ ${$.name}, 失败! 原因: ${e}!`, '')
        })
        .finally(() => {
            $.done();
        })
}
async function all() {
    if (!Length || Length == 0) {
        $.msg(
            $.name,
            '提示：⚠️请点击前往获取 https://apps.apple.com/cn/app/id733689509\n',
            ' https://apps.apple.com/cn/app/id733689509', {
                "open-url": "https://apps.apple.com/cn/app/id733689509"
            }
        );
        return;
    }
    for (let i = 0; i < Length; i++) {

        if (COOKIE.datas && COOKIE.datas[0].val != '') {


            if (i == 0) {
                op = ``
            } else {
                op = i + 1
            }

            shuqiuserurl = COOKIE.datas.find(item => item.key === `shuqiuserurl${op}`);
            shuqisyurl = COOKIE.datas.find(item => item.key === `shuqisyurl${op}`);
            shuqisybody = COOKIE.datas.find(item => item.key === `shuqisybody${op}`);
            shuqispbody = COOKIE.datas.find(item => item.key === `shuqispbody${op}`);
            shuqiscbody = COOKIE.datas.find(item => item.key === `shuqiscbody${op}`);
            shuqiydbody = COOKIE.datas.find(item => item.key === `shuqiydbody${op}`);
            shuqiqdbody = COOKIE.datas.find(item => item.key === `shuqiqdbody${op}`);
            shuqirwbody = COOKIE.datas.find(item => item.key === `shuqirwbody${op}`);
            shuqifxbody = COOKIE.datas.find(item => item.key === `shuqifxbody${op}`);
            shuqisprwurl = COOKIE.datas.find(item => item.key === `shuqisprwurl${op}`);
            shuqijlbody = COOKIE.datas.find(item => item.key === `shuqijlbody${op}`);
            shuqisqjlbody = COOKIE.datas.find(item => item.key === `shuqisqjlbody${op}`);
            shuqicjyurl = COOKIE.datas.find(item => item.key === `shuqicjyurl${op}`);
            shuqicjcsbody = COOKIE.datas.find(item => item.key === `shuqicjcsbody${op}`);
            shuqicjbody = COOKIE.datas.find(item => item.key === `shuqicjbody${op}`);
            shuqijsspbody = COOKIE.datas.find(item => item.key === `shuqijsspbody${op}`);
            shuqijsydurl = COOKIE.datas.find(item => item.key === `shuqijsydurl${op}`);
            shuqijsydbody = COOKIE.datas.find(item => item.key === `shuqijsydbody${op}`);
            shuqijsqdbody = COOKIE.datas.find(item => item.key === `shuqijsqdbody${op}`);
            shuqijsqdspyurl = COOKIE.datas.find(item => item.key === `shuqijsqdspyurl${op}`);
            shuqijsqdspbody = COOKIE.datas.find(item => item.key === `shuqijsqdspbody${op}`);
            shuqijsrwbody = COOKIE.datas.find(item => item.key === `shuqijsrwbody${op}`);
            shuqijsfxbody = COOKIE.datas.find(item => item.key === `shuqijsfxbody${op}`);
            shuqijsbookurl = COOKIE.datas.find(item => item.key === `shuqijsbookurl${op}`);
            shuqijsbookbody = COOKIE.datas.find(item => item.key === `shuqijsbookbody${op}`);
            shuqijssprwurl = COOKIE.datas.find(item => item.key === `shuqijssprwurl${op}`);


            shuqiuserurlVal = shuqiuserurl.val;
            shuqisyurlVal = shuqisyurl.val;
            shuqisybodyVal = shuqisybody.val;
            shuqispbodyVal = shuqispbody.val;
            shuqiscbodyVal = shuqiscbody.val;
            shuqiydbodyVal = shuqiydbody.val;
            shuqiqdbodyVal = shuqiqdbody.val;
            shuqirwbodyVal = shuqirwbody.val;
            shuqifxbodyVal = shuqifxbody.val;
            shuqisprwurlVal = shuqisprwurl.val;
            shuqijlbodyVal = shuqijlbody.val;
            shuqisqjlbodyVal = shuqisqjlbody.val;
            shuqicjyurlVal = shuqicjyurl.val;
            shuqicjcsbodyVal = shuqicjcsbody.val;
            shuqicjbodyVal = shuqicjbody.val;
            shuqijsspbodyVal = shuqijsspbody.val;
            shuqijsydurlVal = shuqijsydurl.val;
            shuqijsydbodyVal = shuqijsydbody.val;
            shuqijsqdbodyVal = shuqijsqdbody.val;
            shuqijsqdspyurlVal = shuqijsqdspyurl.val;
            shuqijsqdspbodyVal = shuqijsqdspbody.val;
            shuqijsrwbodyVal = shuqijsrwbody.val;
            shuqijsfxbodyVal = shuqijsfxbody.val;
            shuqijsbookurlVal = shuqijsbookurl.val;
            shuqijsbookbodyVal = shuqijsbookbody.val;
            shuqijssprwurlVal = shuqijssprwurl.val;

        }
        if (COOKIE && COOKIE.shuqiuserurlVal) {
            shuqiuserurlVal = SQ_COOKIES.shuqiuserurlVal[i];
            shuqisyurlVal = SQ_COOKIES.shuqisyurlVal[i];
            shuqisybodyVal = SQ_COOKIES.shuqisybodyVal[i];
            shuqispbodyVal = SQ_COOKIES.shuqispbodyVal[i];
            shuqiscbodyVal = SQ_COOKIES.shuqiscbodyVal[i];
            shuqiydbodyVal = SQ_COOKIES.shuqiydbodyVal[i];
            shuqiqdbodyVal = SQ_COOKIES.shuqiqdbodyVal[i];
            shuqirwbodyVal = SQ_COOKIES.shuqirwbodyVal[i];
            shuqifxbodyVal = SQ_COOKIES.shuqifxbodyVal[i];
            shuqisprwurlVal = SQ_COOKIES.shuqisprwurlVal[i];
            shuqijlbodyVal = SQ_COOKIES.shuqijlbodyVal[i];
            shuqisqjlbodyVal = SQ_COOKIES.shuqisqjlbodyVal[i];
            shuqicjyurlVal = SQ_COOKIES.shuqicjyurlVal[i];
            shuqicjcsbodyVal = SQ_COOKIES.shuqicjcsbodyVal[i];
            shuqicjbodyVal = SQ_COOKIES.shuqicjbodyVal[i];
        }
        if (COOKIE && COOKIE.shuqijsspbodyVal) {
            shuqijsspbodyVal = SQ_COOKIES.shuqijsspbodyVal[i];
            shuqijsydurlVal = SQ_COOKIES.shuqijsydurlVal[i];
            shuqijsydbodyVal = SQ_COOKIES.shuqijsydbodyVal[i];
            shuqijsqdbodyVal = SQ_COOKIES.shuqijsqdbodyVal[i];
            shuqijsqdspyurlVal = SQ_COOKIES.shuqijsqdspyurlVal[i];
            shuqijsqdspbodyVal = SQ_COOKIES.shuqijsqdspbodyVal[i];
            shuqijsrwbodyVal = SQ_COOKIES.shuqijsrwbodyVal[i];
            shuqijsfxbodyVal = SQ_COOKIES.shuqijsfxbodyVal[i];
            shuqijsbookurlVal = SQ_COOKIES.shuqijsbookurlVal[i];
            shuqijsbookbodyVal = SQ_COOKIES.shuqijsbookbodyVal[i];
            shuqijssprwurlVal = SQ_COOKIES.shuqijssprwurlVal[i];
        }
        if (COOKIE && COOKIE.shuqiuserurl) {
            iv = cks * i - 1 //定位
            shuqiuserurlVal = COOKIE[Object.keys(COOKIE)[iv + 1]];
            shuqisyurlVal = COOKIE[Object.keys(COOKIE)[iv + 2]];
            shuqisybodyVal = COOKIE[Object.keys(COOKIE)[iv + 3]];
            shuqispbodyVal = COOKIE[Object.keys(COOKIE)[iv + 4]];
            shuqiscbodyVal = COOKIE[Object.keys(COOKIE)[iv + 5]];
            shuqiydbodyVal = COOKIE[Object.keys(COOKIE)[iv + 6]];
            shuqiqdbodyVal = COOKIE[Object.keys(COOKIE)[iv + 7]];
            shuqirwbodyVal = COOKIE[Object.keys(COOKIE)[iv + 8]];
            shuqifxbodyVal = COOKIE[Object.keys(COOKIE)[iv + 9]];
            shuqisprwurlVal = COOKIE[Object.keys(COOKIE)[iv + 10]];
            shuqijlbodyVal = COOKIE[Object.keys(COOKIE)[iv + 11]];
            shuqisqjlbodyVal = COOKIE[Object.keys(COOKIE)[iv + 12]];
            shuqicjyurlVal = COOKIE[Object.keys(COOKIE)[iv + 13]];
            shuqicjcsbodyVal = COOKIE[Object.keys(COOKIE)[iv + 14]];
            shuqicjbodyVal = COOKIE[Object.keys(COOKIE)[iv + 15]];
        }
        if (COOKIE && COOKIE.shuqijsspbody) {
            iv = cks * i - 1 //定位
            shuqijsspbodyVal = COOKIE[Object.keys(COOKIE)[iv + 16]];
            shuqijsydurlVal = COOKIE[Object.keys(COOKIE)[iv + 17]];
            shuqijsydbodyVal = COOKIE[Object.keys(COOKIE)[iv + 18]];
            shuqijsqdbodyVal = COOKIE[Object.keys(COOKIE)[iv + 19]];
            shuqijsqdspyurlVal = COOKIE[Object.keys(COOKIE)[iv + 20]];
            shuqijsqdspbodyVal = COOKIE[Object.keys(COOKIE)[iv + 21]];
            shuqijsrwbodyVal = COOKIE[Object.keys(COOKIE)[iv + 22]];
            shuqijsfxbodyVal = COOKIE[Object.keys(COOKIE)[iv + 23]];
            shuqijsbookurlVal = COOKIE[Object.keys(COOKIE)[iv + 24]];
            shuqijsbookbodyVal = COOKIE[Object.keys(COOKIE)[iv + 25]];
            shuqijssprwurlVal = COOKIE[Object.keys(COOKIE)[iv + 26]];
        }
        if (!COOKIE.datas && !COOKIE.shuqiuserurlVal && !COOKIE.shuqiuserurl) {
            shuqiuserurlVal = shuqiuserurlArr[i];
            shuqisyurlVal = shuqisyurlArr[i];
            shuqisybodyVal = shuqisybodyArr[i];
            shuqispbodyVal = shuqispbodyArr[i];
            shuqiscbodyVal = shuqiscbodyArr[i];
            shuqiydbodyVal = shuqiydbodyArr[i];
            shuqiqdbodyVal = shuqiqdbodyArr[i];
            shuqirwbodyVal = shuqirwbodyArr[i];
            shuqifxbodyVal = shuqifxbodyArr[i];
            shuqisprwurlVal = shuqisprwurlArr[i];
            shuqijlbodyVal = shuqijlbodyArr[i];
            shuqisqjlbodyVal = shuqisqjlbodyArr[i];
            shuqicjyurlVal = shuqicjyurlArr[i];
            shuqicjcsbodyVal = shuqicjcsbodyArr[i];
            shuqicjbodyVal = shuqicjbodyArr[i];
            shuqijsspbodyVal = shuqijsspbodyArr[i];
            shuqijsydurlVal = shuqijsydurlArr[i];
            shuqijsydbodyVal = shuqijsydbodyArr[i];
            shuqijsqdbodyVal = shuqijsqdbodyArr[i];
            shuqijsqdspyurlVal = shuqijsqdspyurlArr[i];
            shuqijsqdspbodyVal = shuqijsqdspbodyArr[i];
            shuqijsrwbodyVal = shuqijsrwbodyArr[i];
            shuqijsfxbodyVal = shuqijsfxbodyArr[i];
            shuqijsbookurlVal = shuqijsbookurlArr[i];
            shuqijsbookbodyVal = shuqijsbookbodyArr[i];
            shuqijssprwurlVal = shuqijssprwurlArr[i];
        }
        O = (`${$.name + (i + 1)}🔔`);


        if (shuqiuserurlVal && shuqiuserurlVal != '') {
            await console.log(`-------------------------\n\n🔔开始运行【${$.name+(i+1)}】`)
            let cookie_is_live = await user(); //用户名
            if (!cookie_is_live) {
                continue;
            }
        }
        //await $.wait(1000)



        if (shuqisybodyVal && shuqisybodyVal != '') {

            if (shuqisybodyVal.indexOf("appVer=4.4") >= 0) {
                shuqisyurlVal=`https://ocean.shuqireader.com/api/render/load/resource`
                shuqisyhost=`ocean.shuqireader.com`
            } else {
               
                shuqisyhost = `render.shuqireader.com`
            }
            await coin() //用户收益

        }

        if (TXTX > 0 && nowTimes.getHours() >= 8 && $.coin && DQYE >= TXTX) {

            console.log(O, `\n========== ${$.user.data.nickname} ==========\n当前余额为${DQYE}元，速度提现，否则清0`)
            $.msg(O, `========== 【${$.user.data.nickname}】 ==========\n当前余额为${DQYE}元，速度提现，否则清0`);


            if ($.isNode()) {
                notify.sendNotify(O, `========== 【${$.user.data.nickname}】 ==========\n当前余额为${DQYE}元，速度提现，否则清0`);

            }

        }


        await readlist(); //阅读时长

        if (SC == 0) {
            if (shuqirwbodyVal && shuqirwbodyVal != '') {
                await resource() //任务列表
            }
            if (shuqisprwurlVal && shuqisprwurlVal != '') {
                await videolist(); //视频任务
            }
            if (shuqicjyurlVal && shuqicjyurlVal != '') {
                await lotteryinfo(); //抽奖页面
            }
            if (shuqijsrwbodyVal && shuqijsrwbodyVal != '') {
                await jsresource() //极速版任务列表
            }
            if (shuqijssprwurlVal && shuqijssprwurlVal != '') {
                await jsvideolist() //极速版视频任务
            }
            if (shuqijsqdspyurlVal && shuqijsqdspyurlVal != '') {
                await jsqdvideolist(); //极速版签到视频任务
            }
            if (shuqijlbodyVal && shuqijlbodyVal != '') {
                await bubble(); //奖励页面
            }

        }
        console.log(`${GXRZ}\n`);
        $.message += `${GXRZ}\n`
    }
}
//通知
function msgShow() {
    return new Promise(async resolve => {


        if (notifyInterval != 1) {
            console.log($.name + '\n' + $.message);
        }
        if (notifyInterval == 1) {
            $.msg($.name, ``, $.message);
        }
        if (notifyInterval == 2 && (nowTimes.getHours() === 12 || nowTimes.getHours() === 23) && (nowTimes.getMinutes() >= 0 && nowTimes.getMinutes() <= 10)) {
            $.msg($.name, ``, $.message);
        }
        if (notifyInterval == 3 && (nowTimes.getHours() === 6 || nowTimes.getHours() === 12 || nowTimes.getHours() === 18 || nowTimes.getHours() === 23) && (nowTimes.getMinutes() >= 0 && nowTimes.getMinutes() <= 10)) {
            $.msg($.name, ``, $.message);
        }
        if (notifyttt == 1 && $.isNode() && (nowTimes.getHours() === 12 || nowTimes.getHours() === 23) && (nowTimes.getMinutes() >= 0 && nowTimes.getMinutes() <= 10))
            await notify.sendNotify($.name, $.message);
        resolve()
    })
}
//用户名
function user(timeout = 0) {
    return new Promise((resolve) => {
        setTimeout(() => {
            let url = {
                url: shuqiuserurlVal,
                headers: {
                    'Content-Type': `application/x-www-form-urlencoded`,
                    'Host': `ocean.shuqireader.com`,
                },
            }
            $.get(url, async (err, resp, data) => {
                try {
                    if (logs) $.log(`${O}, 用户名🚩: ${decodeUnicode(data)}`);
                    $.user = JSON.parse(data);
                    if ($.user.data.userid) {
                        userid = $.user.data.userid
                        console.log(`\n${O}\n========== ${$.user.data.nickname} ==========\n注册时间：${$.user.data.registerTime}\n`)
                        $.message += `\n${O}\n========== 【${$.user.data.nickname}】 ==========\n【注册时间】：${$.user.data.registerTime}\n`;
                        resolve(true);
                    }
                    if (!$.user.data.userid) {
                        $.msg(O, time(Number(tts())) + "❌❌❌COOKIE失效");
                        if ($.isNode()) {
                            notify.sendNotify(O, time(Number(tts())) + "❌❌❌COOKIE失效");
                        }
                        resolve(false);
                    }
                } catch (e) {
                    $.logErr(e, resp);
                } finally {
                    resolve()
                }
            })
        }, timeout)
    })
}
//视频奖励
function video(timeout = 0) {
    return new Promise((resolve) => {
        setTimeout(() => {
            let url = {
                url: `https://ocean.shuqireader.com/api/ad/v1/api/prize/lottery`,
                headers: {
                    'Content-Type': `application/x-www-form-urlencoded`,
                    'Host': `ocean.shuqireader.com`,
                },
                body: shuqispbodyVal,
            }
            $.post(url, async (err, resp, data) => {
                try {
                    if (logs) $.log(`${O}, 视频奖励🚩: ${decodeUnicode(data)}`);
                    $.video = JSON.parse(data);
                    if ($.video.status == 200) {
                        console.log(`视频奖励：获得${$.video.data.prizeName}\n`);
                        $.message += `【视频奖励】：获得${$.video.data.prizeName}\n`;
                    }
                } catch (e) {
                    $.logErr(e, resp);
                } finally {
                    resolve()
                }
            })
        }, timeout)
    })
}
//用户收益
function coin(timeout = 0) {
    return new Promise((resolve) => {
        setTimeout(() => {
            let url = {
                url: shuqisyurlVal,
                headers: {
                    'Content-Type': `application/x-www-form-urlencoded`,
                    'Host': shuqisyhost,
                },
                body: shuqisybodyVal,
            }
            $.post(url, async (err, resp, data) => {
                try {
                    if (logs) $.log(`${O}, 用户收益🚩: ${decodeUnicode(data)}`);
                    $.coin = JSON.parse(data);
                    if ($.coin.status == 200) {
                        DQYE = $.coin.data.ShuqiVipEntry.userinfo.coinInfo.balanceWorthMoney
                        console.log(`用户收益：今日${$.coin.data.ShuqiVipEntry.userinfo.coinInfo.todayWorthMoney}元，余额${$.coin.data.ShuqiVipEntry.userinfo.coinInfo.balanceWorthMoney}元\n`);
                        $.message += `【用户收益】：今日${$.coin.data.ShuqiVipEntry.userinfo.coinInfo.todayWorthMoney}元，余额${$.coin.data.ShuqiVipEntry.userinfo.coinInfo.balanceWorthMoney}元\n`;
                    }
                } catch (e) {
                    $.logErr(e, resp);
                } finally {
                    resolve()
                }
            })
        }, timeout)
    })
}

//上传时长
function upload(timeout = 0) {
    return new Promise((resolve) => {
        setTimeout(() => {
            let url = {
                url: shuqiscurl,
                headers: {
                    'Content-Type': `application/x-www-form-urlencoded`,
                    'Host': shuqischost,
                },
                body: shuqiscbodyVal,
            }
            $.post(url, async (err, resp, data) => {
                try {
                    if (logs) $.log(`${O}, 上传时长🚩: ${decodeUnicode(data)}`);
                    $.upload = JSON.parse(data);
                    if ($.upload.state == 200) {
                        console.log(`上传时长：成功上传${sqsc}秒\n`);
                        $.message += `【上传时长】：成功上传${sqsc}秒\n`;
                    }
                } catch (e) {
                    $.logErr(e, resp);
                } finally {
                    resolve()
                }
            })
        }, timeout)
    })
}




//阅读奖励
function reads(timeout = 0) {
    return new Promise((resolve) => {
        setTimeout(() => {
            for (let i = 0; i < 20; i++) {
                setTimeout(() => {
                    let url = {
                        url: `https://ocean.shuqireader.com/api/ad/v1/api/prize/readpage/pendant/lottery`,
                        headers: {
                            'Content-Type': `application/x-www-form-urlencoded`,
                            'Host': `ocean.shuqireader.com`,
                        },
                        body: shuqiydbodyVal,
                    }
                    $.post(url, async (err, resp, data) => {
                        try {
                            if (logs) $.log(`${O}, 阅读奖励🚩: ${decodeUnicode(data)}`);
                            $.reads = JSON.parse(data);
                            if ($.reads.status == 200) {
                                console.log(`阅读奖励${i+1}：获得${$.reads.data.prizeResult.prizeDesc}\n`);
                            }
                        } catch (e) {
                            $.logErr(e, resp);
                        } finally {
                            resolve()
                        }
                    })
                }, i * 5000);
            }
            setTimeout(() => {
                if ($.reads.status == 200) {
                    console.log(`阅读奖励：获得20次奖励,今日已得${$.reads.data.todayBizCoinAmount}金币\n`);
                    $.message += `【阅读奖励】：获得20次奖励,今日已得${$.reads.data.todayBizCoinAmount}金币\n`;
                }
            }, 96000)
        }, timeout)
    })
}
//每日签到
function sign(timeout = 0) {
    return new Promise((resolve) => {
        setTimeout(() => {
            let url = {
                url: `https://ocean.shuqireader.com/api/activity/xapi/signin/v5/signInAction`,
                headers: {
                    'Content-Type': `application/x-www-form-urlencoded`,
                    'Host': `ocean.shuqireader.com`,
                },
                body: shuqiqdbodyVal,
            }
            $.post(url, async (err, resp, data) => {
                try {
                    if (logs) $.log(`${O}, 每日签到🚩: ${decodeUnicode(data)}`);
                    $.sign = JSON.parse(data);
                    if ($.sign.status == 200) {
                        console.log(`每日签到：获得${$.sign.data.todayPrizeInfo.prizeName},${$.sign.data.copyWriting}\n`);
                        $.message += `【每日签到】：获得${$.sign.data.todayPrizeInfo.prizeName},${$.sign.data.copyWriting}\n`;
                    } else {
                        console.log(`每日签到：${$.sign.message}\n`);
                        $.message += `【每日签到】：${$.sign.message}\n`;
                    }
                } catch (e) {
                    $.logErr(e, resp);
                } finally {
                    resolve()
                }
            })
        }, timeout)
    })
}
//任务列表
function resource(timeout = 0) {
    return new Promise((resolve) => {
        setTimeout(() => {
            let url = {
                url: `https://render.shuqireader.com/load/resource`,
                headers: {
                    'Content-Type': `application/x-www-form-urlencoded`,
                    'Host': `render.shuqireader.com`,
                },
                body: shuqirwbodyVal,
            }
            $.post(url, async (err, resp, data) => {
                try {
                    if (logs) $.log(`${O}, 任务列表🚩: ${decodeUnicode(data)}`);
                    $.resource = JSON.parse(data);
                    if ($.resource.status == 200) {
                        readss = $.resource.data.ShuqiBsDailyTask.list.find(item => item.actionType === 101);
                        signss = $.resource.data.ShuqiBsDailyTask.list.find(item => item.actionType === 102);
                        sharess = $.resource.data.ShuqiBsDailyTask.list.find(item => item.actionType === 18);
                    }
                    if (shuqiydbodyVal && shuqiydbodyVal != '') {
                        if (readss.status == 0) {
                            await reads(); //阅读奖励
                            await $.wait(96000)
                        } else {
                            console.log(`${readss.taskTitle}：${readss.rewards[0].desc},已完成\n`);
                            $.message += `【${readss.taskTitle}】：${readss.rewards[0].desc},已完成\n`;
                        }
                    }
                    if (shuqiqdbodyVal && shuqiqdbodyVal != '') {
                        if (signss.status == 0) {
                            await sign(); //每日签到
                        } else {
                            console.log(`${signss.taskTitle}：${signss.rewards[0].desc},已完成\n`);
                            $.message += `【${signss.taskTitle}】：${signss.rewards[0].desc},已完成\n`;
                        }
                    }
                    if (shuqifxbodyVal && shuqifxbodyVal != '') {
                        if (sharess.status == 0) {
                            taskfx = `reward`
                            await share(); //每日分享
                        }
                    }
                    if (shuqifxbodyVal && shuqifxbodyVal != '') {
                        if (sharess.status == 2 && sharess.prizeStatus == 4) {
                            taskfx = `convert`
                            await share(); //分享领奖
                        } else if (sharess.status == 2 && sharess.prizeStatus == 2) {
                            console.log(`${sharess.taskTitle}：${sharess.rewards[0].desc},已完成\n`);
                            $.message += `【${sharess.taskTitle}】：${sharess.rewards[0].desc},已完成\n`;
                        }
                    }
                } catch (e) {
                    $.logErr(e, resp);
                } finally {
                    resolve()
                }
            })
        }, timeout)
    })
}
//每日分享
function share(timeout = 0) {
    return new Promise((resolve) => {
        setTimeout(() => {
            let url = {
                url: `https://ocean.shuqireader.com/api/activity/v1/task/${taskfx}`,
                headers: {
                    'Content-Type': `application/x-www-form-urlencoded`,
                    'Host': `ocean.shuqireader.com`,
                },
                body: shuqifxbodyVal,
            }
            $.post(url, async (err, resp, data) => {
                try {
                    if (logs) $.log(`${O}, 每日分享🚩: ${decodeUnicode(data)}`);
                    $.share = JSON.parse(data);
                    if ($.share.status == 200) {
                        console.log(`每日分享：成功\n`);
                        $.message += `【每日分享】：成功\n`;
                    } else {
                        console.log(`每日分享：${$.share.message}\n`);
                        $.message += `【每日分享】：${$.share.message}\n`;
                    }
                } catch (e) {
                    $.logErr(e, resp);
                } finally {
                    resolve()
                }
            })
        }, timeout)
    })
}
//视频任务
function videolist(timeout = 0) {
    return new Promise((resolve) => {
        setTimeout(() => {
            let url = {
                url: shuqisprwurlVal,
                headers: {
                    'Content-Type': `application/x-www-form-urlencoded`,
                    'Host': `ocean.shuqireader.com`,
                },
            }
            $.get(url, async (err, resp, data) => {
                try {
                    if (logs) $.log(`${O}, 视频任务🚩: ${decodeUnicode(data)}`);
                    $.videolist = JSON.parse(data);
                    if ($.videolist.status == 200) {
                        console.log(`视频任务：${$.videolist.data.extInfo.chanceCurrentCnt}/${$.videolist.data.extInfo.chanceMaxCnt}\n`);
                        $.message += `【视频任务】：${$.videolist.data.extInfo.chanceCurrentCnt}/${$.videolist.data.extInfo.chanceMaxCnt}\n`;
                        if (shuqispbodyVal && shuqispbodyVal != '' && $.videolist.data.extInfo.chanceCurrentCnt < $.videolist.data.extInfo.chanceMaxCnt) {
                            await video(); //视频奖励
                        }
                    }
                } catch (e) {
                    $.logErr(e, resp);
                } finally {
                    resolve()
                }
            })
        }, timeout)
    })
}
//奖励页面
function bubble(timeout = 0) {
    return new Promise((resolve) => {
        setTimeout(() => {
            let url = {
                url: `https://ocean.shuqireader.com/api/prizecenter/xapi/prize/bubble/info`,
                headers: {
                    'Content-Type': `application/x-www-form-urlencoded`,
                    'Host': `ocean.shuqireader.com`,
                },
                body: shuqijlbodyVal,
            }
            $.post(url, async (err, resp, data) => {
                try {
                    if (logs) $.log(`${O}, 奖励页面🚩: ${decodeUnicode(data)}`);
                    $.bubble = JSON.parse(data);
                    if ($.bubble.status == 200) {
                        console.log(`奖励页面：当前${$.bubble.data.totalGold}金币\n`);
                        $.message += `【奖励页面】：当前${$.bubble.data.totalGold}金币\n`;
                        if (shuqisqjlbodyVal && shuqisqjlbodyVal != '' && $.bubble.data.totalGold > 0) {
                            await manual() //收取奖励
                        }
                    }
                } catch (e) {
                    $.logErr(e, resp);
                } finally {
                    resolve()
                }
            })
        }, timeout)
    })
}
//收取奖励
function manual(timeout = 0) {
    return new Promise((resolve) => {
        setTimeout(() => {
            let url = {
                url: `https://ocean.shuqireader.com/api/prizecenter/xapi/prize/manual/receive`,
                headers: {
                    'Content-Type': `application/x-www-form-urlencoded`,
                    'Host': `ocean.shuqireader.com`,
                },
                body: shuqisqjlbodyVal,
            }
            $.post(url, async (err, resp, data) => {
                try {
                    if (logs) $.log(`${O}, 收取奖励🚩: ${decodeUnicode(data)}`);
                    $.manual = JSON.parse(data);
                    if ($.manual.status == 200) {
                        console.log(`收取奖励：${$.manual.message}\n`);
                        $.message += `【收取奖励】：${$.manual.message}\n`;
                    }
                } catch (e) {
                    $.logErr(e, resp);
                } finally {
                    resolve()
                }
            })
        }, timeout)
    })
}
//阅读时长
function readlist(timeout = 0) {
    return new Promise((resolve) => {
        setTimeout(() => {
            let url = {
                url: `https://ocean.shuqireader.com/api/activity/v1/activity/boxTask?activityId=309&appVer=4.3.6.0&placeId=111111&ver=210301&platform=1&userId=${userid}`,
                headers: {
                    'Content-Type': `application/x-www-form-urlencoded`,
                    'Host': `ocean.shuqireader.com`,
                },
            }
            $.get(url, async (err, resp, data) => {
                try {
                    if (logs) $.log(`${O}, 阅读时长🚩: ${decodeUnicode(data)}`);
                    $.readlist = JSON.parse(data);
                    if ($.readlist.status == 200) {
                        is_ok = $.readlist.data.tasks.find(item => item.prizeStatus === 4);
                        console.log(`阅读时长：今日阅读${$.readlist.data.readTime}分钟\n`);
                        $.message += `【阅读时长】：今日阅读${$.readlist.data.readTime}分钟\n`;
                        if (shuqiscbodyVal && shuqiscbodyVal != '') {
                            timestamp = shuqiscbodyVal.split('timestamp=')[1].split('&user_id')[0] * 1000
                            sqsc = shuqiscbodyVal.split('readingLen%22%3A')[1].split('%7D')[0]
                            if (timestamp >= daytime() && $.readlist.data.readTime < 10) {
                                if (shuqiscbodyVal.indexOf("appVer%253D4.3") >= 0) {
                                    shuqiscurl = `https://jcollection.shuqireader.com/collection/iosapi/reading/upload`
                                    shuqischost = `jcollection.shuqireader.com`

                                } else {
                                    shuqiscurl = `https://ocean.shuqireader.com/api/jcollection/collection/iosapi/reading/upload`
                                    shuqischost = `ocean.shuqireader.com`

                                }

                                DD = RT(1000, 10000)
                                console.log(`随机延迟${DD/1000}秒`)
                                await $.wait(DD)
                                await upload() //上传时长
                                DD = RT(1000, 10000)
                                console.log(`随机延迟${DD/1000}秒`)
                                await $.wait(DD)
                                await upload() //上传时长
                                DD = RT(1000, 10000)
                                console.log(`随机延迟${DD/1000}秒`)
                                await $.wait(DD)
                                await upload() //上传时长
                            } else if (timestamp >= daytime()) {
                                console.log(`上传时长：今日时长已达到10分钟\n`);
                                $.message += `【上传时长】：今日时长已达到10分钟\n`;
                            } else {
                                console.log(`上传时长：请获取今日时长CK\n`);
                                $.message += `【上传时长】：请获取今日时长CK\n`;
                            }
                        }
                    }
                } catch (e) {
                    $.logErr(e, resp);
                } finally {
                    resolve()
                }
            })
        }, timeout)
    })
}
//抽奖页面
function lotteryinfo(timeout = 0) {
    return new Promise((resolve) => {
        setTimeout(() => {
            let url = {
                url: shuqicjyurlVal,
                headers: {
                    'Content-Type': `application/x-www-form-urlencoded`,
                    'Host': `ocean.shuqireader.com`,
                },
            }
            $.get(url, async (err, resp, data) => {
                try {
                    if (logs) $.log(`${O}, 抽奖页面🚩: ${decodeUnicode(data)}`);
                    $.lotteryinfo = JSON.parse(data);
                    if ($.lotteryinfo.status == 200) {
                        console.log(`抽奖页面：${$.lotteryinfo.data.actInfo.totalNum}/${$.lotteryinfo.data.actInfo.dailyLotteryLimit}\n`);
                        $.message += `【抽奖页面】：${$.lotteryinfo.data.actInfo.totalNum}/${$.lotteryinfo.data.actInfo.dailyLotteryLimit}\n`;
                        if (shuqicjcsbodyVal && shuqicjcsbodyVal != '' && $.lotteryinfo.data.actInfo.totalNum < $.lotteryinfo.data.actInfo.dailyLotteryLimit) {
                            await prizelottery(); //抽奖次数
                        }
                    }
                } catch (e) {
                    $.logErr(e, resp);
                } finally {
                    resolve()
                }
            })
        }, timeout)
    })
}
//抽奖次数
function prizelottery(timeout = 0) {
    return new Promise((resolve) => {
        setTimeout(() => {
            let url = {
                url: `https://ocean.shuqireader.com/api/ad/v1/api/prize/lottery`,
                headers: {
                    'Content-Type': `application/x-www-form-urlencoded`,
                    'Host': `ocean.shuqireader.com`,
                },
                body: shuqicjcsbodyVal,
            }
            $.post(url, async (err, resp, data) => {
                try {
                    if (logs) $.log(`${O}, 抽奖次数🚩: ${decodeUnicode(data)}`);
                    $.prizelottery = JSON.parse(data);
                    if ($.prizelottery.status == 200) {
                        console.log(`抽奖次数：${$.prizelottery.data.awardMessage}\n`);
                        $.message += `【抽奖次数】：${$.prizelottery.data.awardMessage}\n`;
                        if (shuqicjbodyVal && shuqicjbodyVal != '') {
                            await lotterydraw(); //转盘抽奖
                        }
                    }
                } catch (e) {
                    $.logErr(e, resp);
                } finally {
                    resolve()
                }
            })
        }, timeout)
    })
}
//转盘抽奖
function lotterydraw(timeout = 0) {
    return new Promise((resolve) => {
        setTimeout(() => {
            let url = {
                url: `https://ocean.shuqireader.com/api/activity/activity/v1/lottery/draw?asac=2A20C07RJ9F51AOEFSNHDR`,
                headers: {
                    'Content-Type': `application/x-www-form-urlencoded`,
                    'Host': `ocean.shuqireader.com`,
                },
                body: shuqicjbodyVal,
            }
            $.post(url, async (err, resp, data) => {
                try {
                    if (logs) $.log(`${O}, 转盘抽奖🚩: ${decodeUnicode(data)}`);
                    $.lotterydraw = JSON.parse(data);
                    if ($.lotterydraw.status == 200) {
                        console.log(`转盘抽奖：抽中${$.lotterydraw.data.prizeList[0].prizeName}\n`);
                        $.message += `【转盘抽奖】：抽中${$.lotterydraw.data.prizeList[0].prizeName}\n`;
                    }
                } catch (e) {
                    $.logErr(e, resp);
                } finally {
                    resolve()
                }
            })
        }, timeout)
    })
}
//极速版视频奖励
function jsvideo(timeout = 0) {
    return new Promise((resolve) => {
        setTimeout(() => {
            let url = {
                url: `https://ocean.shuqireader.com/api/ad/v1/api/prize/lottery`,
                headers: {
                    'Content-Type': `application/x-www-form-urlencoded`,
                    'Host': `ocean.shuqireader.com`,
                },
                body: shuqijsspbodyVal,
            }
            $.post(url, async (err, resp, data) => {
                try {
                    if (logs) $.log(`${O}, 极速版视频奖励🚩: ${decodeUnicode(data)}`);
                    $.jsvideo = JSON.parse(data);
                    if ($.jsvideo.status == 200) {
                        console.log(`极速版视频奖励：获得${$.jsvideo.data.prizeName}\n`);
                        $.message += `【极速版视频奖励】：获得${$.jsvideo.data.prizeName}\n`;
                    }
                } catch (e) {
                    $.logErr(e, resp);
                } finally {
                    resolve()
                }
            })
        }, timeout)
    })
}
//极速版阅读奖励
function jsreads(timeout = 0) {
    return new Promise((resolve) => {
        setTimeout(() => {
            for (let i = 0; i < 20; i++) {
                setTimeout(() => {
                    let url = {
                        url: shuqijsydurlVal,
                        headers: {
                            'Content-Type': `application/x-www-form-urlencoded`,
                            'Host': `ocean.shuqireader.com`,
                        },
                        body: shuqijsydbodyVal,
                    }
                    $.post(url, async (err, resp, data) => {
                        try {
                            if (logs) $.log(`${O}, 极速版阅读奖励🚩: ${decodeUnicode(data)}`);
                            $.jsreads = JSON.parse(data);
                            if ($.jsreads.status == 200) {
                                console.log(`极速版阅读奖励${i+1}：获得${$.jsreads.data.prizeInfo.prizeDesc}\n`);
                            }
                        } catch (e) {
                            $.logErr(e, resp);
                        } finally {
                            resolve()
                        }
                    })
                }, i * 5000);
            }
            setTimeout(() => {
                if ($.jsreads.status == 200) {
                    console.log(`极速版阅读奖励：获得20次奖励,今日已得${$.jsreads.data.todayBizCoinAmount}\n`);
                    $.message += `【极速版阅读奖励】：获得20次奖励,今日已得${$.jsreads.data.todayBizCoinAmount}金币\n`;
                } else {
                    console.log(`极速版阅读奖励：${$.jsreads.message}\n`);
                    $.message += `【极速版阅读奖励】：${$.jsreads.message}\n`;
                }
            }, 96000)
        }, timeout)
    })
}
//极速版每日签到
function jssign(timeout = 0) {
    return new Promise((resolve) => {
        setTimeout(() => {
            let url = {
                url: `https://ocean.shuqireader.com/api/activity/xapi/signin/v5/signInAction`,
                headers: {
                    'Content-Type': `application/x-www-form-urlencoded`,
                    'Host': `ocean.shuqireader.com`,
                },
                body: shuqijsqdbodyVal,
            }
            $.post(url, async (err, resp, data) => {
                try {
                    if (logs) $.log(`${O}, 极速版每日签到🚩: ${decodeUnicode(data)}`);
                    $.jssign = JSON.parse(data);
                    if ($.jssign.status == 200) {
                        console.log(`极速版每日签到：获得${$.jssign.data.todayPrizeInfo.prizeName},${$.jssign.data.copyWriting}\n`);
                        $.message += `【极速版每日签到】：获得${$.jssign.data.todayPrizeInfo.prizeName},${$.jssign.data.copyWriting}\n`;
                    } else {
                        console.log(`极速版每日签到：${$.jssign.message}\n`);
                        $.message += `【极速版每日签到】：${$.jssign.message}\n`;
                    }
                } catch (e) {
                    $.logErr(e, resp);
                } finally {
                    resolve()
                }
            })
        }, timeout)
    })
}
//极速版签到视频任务
function jsqdvideolist(timeout = 0) {
    return new Promise((resolve) => {
        setTimeout(() => {
            let url = {
                url: shuqijsqdspyurlVal,
                headers: {
                    'Content-Type': `application/x-www-form-urlencoded`,
                    'Host': `ocean.shuqireader.com`,
                },
            }
            $.get(url, async (err, resp, data) => {
                try {
                    if (logs) $.log(`${O}, 极速版签到视频任务🚩: ${decodeUnicode(data)}`);
                    $.jsqdvideolist = JSON.parse(data);
                    if ($.jsqdvideolist.status == 200) {
                        console.log(`极速版签到视频任务：${$.jsqdvideolist.data.extInfo.chanceCurrentCnt}/${$.jsqdvideolist.data.extInfo.chanceMaxCnt}\n`);
                        $.message += `【极速版签到视频任务】：${$.jsqdvideolist.data.extInfo.chanceCurrentCnt}/${$.jsqdvideolist.data.extInfo.chanceMaxCnt}\n`;
                        if (shuqijsqdspbodyVal && shuqijsqdspbodyVal != '' && $.jsqdvideolist.data.extInfo.chanceCurrentCnt < $.jsqdvideolist.data.extInfo.chanceMaxCnt) {
                            await jsqdvideo(); //签到视频奖励
                        }
                    }
                } catch (e) {
                    $.logErr(e, resp);
                } finally {
                    resolve()
                }
            })
        }, timeout)
    })
}
//极速版签到视频奖励
function jsqdvideo(timeout = 0) {
    return new Promise((resolve) => {
        setTimeout(() => {
            let url = {
                url: `https://ocean.shuqireader.com/api/ad/v1/api/prize/lottery`,
                headers: {
                    'Content-Type': `application/x-www-form-urlencoded`,
                    'Host': `ocean.shuqireader.com`,
                },
                body: shuqijsqdspbodyVal,
            }
            $.post(url, async (err, resp, data) => {
                try {
                    if (logs) $.log(`${O}, 极速版签到视频奖励🚩: ${decodeUnicode(data)}`);
                    $.jsqdvideo = JSON.parse(data);
                    if ($.jsqdvideo.status == 200) {
                        console.log(`极速版签到视频奖励：获得${$.jsqdvideo.data.prizeName}\n`);
                        $.message += `【极速版签到视频奖励】：获得${$.jsqdvideo.data.prizeName}\n`;
                    }
                } catch (e) {
                    $.logErr(e, resp);
                } finally {
                    resolve()
                }
            })
        }, timeout)
    })
}
//极速版任务列表
function jsresource(timeout = 0) {
    return new Promise((resolve) => {
        setTimeout(() => {
            let url = {
                url: `https://render.shuqireader.com/load/resource`,
                headers: {
                    'Content-Type': `application/x-www-form-urlencoded`,
                    'Host': `render.shuqireader.com`,
                },
                body: shuqijsrwbodyVal,
            }
            $.post(url, async (err, resp, data) => {
                try {
                    if (logs) $.log(`${O}, 极速版任务列表🚩: ${decodeUnicode(data)}`);
                    $.jsresource = JSON.parse(data);
                    if ($.jsresource.status == 200) {
                        jsreadss = $.jsresource.data.ShuqiBsDailyTask.list.find(item => item.actionType === 101);
                        jssignss = $.jsresource.data.ShuqiBsDailyTask.list.find(item => item.actionType === 102);
                        jsbookss = $.jsresource.data.ShuqiBsDailyTask.list.find(item => item.actionType === 23);
                        jssharess = $.jsresource.data.ShuqiBsDailyTask.list.find(item => item.actionType === 18);
                    }
                    if (shuqijsydbodyVal && shuqijsydbodyVal != '') {
                        if (jsreadss.status == 0) {
                            await jsreads(); //阅读奖励
                            await $.wait(96000)
                        } else {
                            console.log(`${jsreadss.taskTitle}：${jsreadss.rewards[0].desc},已完成\n`);
                            $.message += `【${jsreadss.taskTitle}】：${jsreadss.rewards[0].desc},已完成\n`;
                        }
                    }
                    if (shuqijsqdbodyVal && shuqijsqdbodyVal != '') {
                        if (jssignss.status == 0) {
                            await jssign(); //每日签到
                        } else {
                            console.log(`${jssignss.taskTitle}：${jssignss.rewards[0].desc},已完成\n`);
                            $.message += `【${jssignss.taskTitle}】：${jssignss.rewards[0].desc},已完成\n`;
                        }
                    }
                    if (shuqijsfxbodyVal && shuqijsfxbodyVal != '') {
                        if (jssharess.status == 0) {
                            taskfx = `reward`
                            await jsshare(); //每日分享
                        }
                    }
                    if (shuqijsfxbodyVal && shuqijsfxbodyVal != '') {
                        if (jssharess.status == 2 && jssharess.prizeStatus == 4) {
                            taskfx = `convert`
                            await jsshare(); //分享领奖
                        } else if (jssharess.status == 2 && jssharess.prizeStatus == 2) {
                            console.log(`${jssharess.taskTitle}：${jssharess.rewards[0].desc},已完成\n`);
                            $.message += `【${jssharess.taskTitle}】：${jssharess.rewards[0].desc},已完成\n`;
                        }
                    }
                    if (shuqijsbookurlVal && shuqijsbookurlVal != '') {
                        if (jsbookss.status == 0) {
                            taskbook = `reward`
                            await jsbooklist(); //每日书城
                        }
                    }
                    if (shuqijsbookbodyVal && shuqijsbookbodyVal != '') {
                        if (jsbookss.status == 2 && jsbookss.prizeStatus == 4) {
                            taskbook = `convert`
                            await jsbooklj; //书城领奖
                        } else if (jsbookss.status == 2 && jsbookss.prizeStatus == 2) {
                            console.log(`${jsbookss.taskTitle}：${jsbookss.rewards[0].desc},已完成\n`);
                            $.message += `【${jsbookss.taskTitle}】：${jsbookss.rewards[0].desc},已完成\n`;
                        }
                    }
                } catch (e) {
                    $.logErr(e, resp);
                } finally {
                    resolve()
                }
            })
        }, timeout)
    })
}
//极速版每日分享
function jsshare(timeout = 0) {
    return new Promise((resolve) => {
        setTimeout(() => {
            let url = {
                url: `https://ocean.shuqireader.com/api/activity/v1/task/${taskfx}`,
                headers: {
                    'Content-Type': `application/x-www-form-urlencoded`,
                    'Host': `ocean.shuqireader.com`,
                },
                body: shuqijsfxbodyVal,
            }
            $.post(url, async (err, resp, data) => {
                try {
                    if (logs) $.log(`${O}, 极速版每日分享🚩: ${decodeUnicode(data)}`);
                    $.jsshare = JSON.parse(data);
                    if ($.jsshare.status == 200) {
                        console.log(`极速版每日分享：成功\n`);
                        $.message += `【极速版每日分享】：成功\n`;
                    } else {
                        console.log(`极速版每日分享：${$.jsshare.message}\n`);
                        $.message += `【极速版每日分享】：${$.jsshare.message}\n`;
                    }
                } catch (e) {
                    $.logErr(e, resp);
                } finally {
                    resolve()
                }
            })
        }, timeout)
    })
}
//极速版每日书城
function jsbooklist(timeout = 0) {
    return new Promise((resolve) => {
        setTimeout(() => {
            let url = {
                url: shuqijsbookurlVal,
                headers: {
                    'Content-Type': `application/x-www-form-urlencoded`,
                    'Host': `ocean.shuqireader.com`,
                },
                body: `actTaskId=344&platform=116&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&userId=${userid}`,
            }
            $.post(url, async (err, resp, data) => {
                try {
                    if (logs) $.log(`${O}, 极速版每日书城🚩: ${decodeUnicode(data)}`);
                    $.jsbooklist = JSON.parse(data);
                    if ($.jsbooklist.status == 200) {
                        console.log(`极速版每日书城：执行成功\n`);
                        $.message += `【极速版每日书城】：执行成功\n`;
                    } else {
                        console.log(`极速版每日书城：${$.jsbooklist.message}\n`);
                        $.message += `【极速版每日书城】：${$.jsbooklist.message}\n`;
                    }
                } catch (e) {
                    $.logErr(e, resp);
                } finally {
                    resolve()
                }
            })
        }, timeout)
    })
}
//极速版每日书城领奖
function jsbooklj(timeout = 0) {
    return new Promise((resolve) => {
        setTimeout(() => {
            let url = {
                url: `https://ocean.shuqireader.com/api/activity/v1/task/convert`,
                headers: {
                    'Content-Type': `application/x-www-form-urlencoded`,
                    'Host': `ocean.shuqireader.com`,
                },
                body: shuqiuserurlVal,
            }
            $.post(url, async (err, resp, data) => {
                try {
                    if (logs) $.log(`${O}, 极速版每日书城领奖🚩: ${decodeUnicode(data)}`);
                    $.jsbooklj = JSON.parse(data);
                    if ($.jsbooklj.status == 200) {
                        console.log(`极速版每日书城领奖：成功获得${$.jsbooklj.data.rewards[0].desc}\n`);
                        $.message += `【极速版每日书城领奖】：成功获得${$.jsbooklj.data.rewards[0].desc}\n`;
                    } else {
                        console.log(`极速版每日书城领奖：${$.jsbooklj.message}\n`);
                        $.message += `【极速版每日书城领奖】：${$.jsbooklj.message}\n`;
                    }
                } catch (e) {
                    $.logErr(e, resp);
                } finally {
                    resolve()
                }
            })
        }, timeout)
    })
}
//极速版视频任务
function jsvideolist(timeout = 0) {
    return new Promise((resolve) => {
        setTimeout(() => {
            let url = {
                url: shuqijssprwurlVal,
                headers: {
                    'Content-Type': `application/x-www-form-urlencoded`,
                    'Host': `ocean.shuqireader.com`,
                },
            }
            $.get(url, async (err, resp, data) => {
                try {
                    if (logs) $.log(`${O}, 极速版视频任务🚩: ${decodeUnicode(data)}`);
                    $.jsvideolist = JSON.parse(data);
                    if ($.jsvideolist.status == 200) {
                        console.log(`极速版视频任务：${$.jsvideolist.data.extInfo.chanceCurrentCnt}/${$.jsvideolist.data.extInfo.chanceMaxCnt}\n`);
                        $.message += `【极速版视频任务】：${$.jsvideolist.data.extInfo.chanceCurrentCnt}/${$.jsvideolist.data.extInfo.chanceMaxCnt}\n`;
                        if (shuqijsspbodyVal && shuqijsspbodyVal != '' && $.jsvideolist.data.extInfo.chanceCurrentCnt < $.jsvideolist.data.extInfo.chanceMaxCnt) {
                            await jsvideo(); //视频奖励
                        }
                    }
                } catch (e) {
                    $.logErr(e, resp);
                } finally {
                    resolve()
                }
            })
        }, timeout)
    })
}
// prettier-ignore
function Env(t, e) {
    class s {
        constructor(t) {
            this.env = t
        }
        send(t, e = "GET") {
            t = "string" == typeof t ? {
                url: t
            } : t;
            let s = this.get;
            return "POST" === e && (s = this.post), new Promise((e, i) => {
                s.call(this, t, (t, s, r) => {
                    t ? i(t) : e(s)
                })
            })
        }
        get(t) {
            return this.send.call(this.env, t)
        }
        post(t) {
            return this.send.call(this.env, t, "POST")
        }
    }
    return new class {
        constructor(t, e) {
            this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log(``, `\ud83d\udd14${this.name}, \u5f00\u59cb!`)
        }
        isNode() {
            return "undefined" != typeof module && !!module.exports
        }
        isQuanX() {
            return "undefined" != typeof $task
        }
        isSurge() {
            return "undefined" != typeof $httpClient && "undefined" == typeof $loon
        }
        isLoon() {
            return "undefined" != typeof $loon
        }
        toObj(t, e = null) {
            try {
                return JSON.parse(t)
            } catch {
                return e
            }
        }
        toStr(t, e = null) {
            try {
                return JSON.stringify(t)
            } catch {
                return e
            }
        }
        getjson(t, e) {
            let s = e;
            const i = this.getdata(t);
            if (i) try {
                s = JSON.parse(this.getdata(t))
            } catch {}
            return s
        }
        setjson(t, e) {
            try {
                return this.setdata(JSON.stringify(t), e)
            } catch {
                return !1
            }
        }
        getScript(t) {
            return new Promise(e => {
                this.get({
                    url: t
                }, (t, s, i) => e(i))
            })
        }
        runScript(t, e) {
            return new Promise(s => {
                let i = this.getdata("@chavy_boxjs_userCfgs.httpapi");
                i = i ? i.replace(/\n/g, ``).trim() : i;
                let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
                r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r;
                const [o, h] = i.split("@"), a = {
                    url: `http://${h}/v1/scripting/evaluate`,
                    body: {
                        script_text: t,
                        mock_type: "cron",
                        timeout: r
                    },
                    headers: {
                        "X-Key": o,
                        Accept: "*/*"
                    }
                };
                this.post(a, (t, e, i) => s(i))
            }).catch(t => this.logErr(t))
        }
        loaddata() {
            if (!this.isNode()) return {}; {
                this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
                const t = this.path.resolve(this.dataFile),
                    e = this.path.resolve(process.cwd(), this.dataFile),
                    s = this.fs.existsSync(t),
                    i = !s && this.fs.existsSync(e);
                if (!s && !i) return {}; {
                    const i = s ? t : e;
                    try {
                        return JSON.parse(this.fs.readFileSync(i))
                    } catch (t) {
                        return {}
                    }
                }
            }
        }
        writedata() {
            if (this.isNode()) {
                this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
                const t = this.path.resolve(this.dataFile),
                    e = this.path.resolve(process.cwd(), this.dataFile),
                    s = this.fs.existsSync(t),
                    i = !s && this.fs.existsSync(e),
                    r = JSON.stringify(this.data);
                s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r)
            }
        }
        lodash_get(t, e, s) {
            const i = e.replace(/\[(\d+)\]/g, ".$1").split(".");
            let r = t;
            for (const t of i)
                if (r = Object(r)[t], void 0 === r) return s;
            return r
        }
        lodash_set(t, e, s) {
            return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t)
        }
        getdata(t) {
            let e = this.getval(t);
            if (/^@/.test(t)) {
                const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : ``;
                if (r) try {
                    const t = JSON.parse(r);
                    e = t ? this.lodash_get(t, i, ``) : e
                } catch (t) {
                    e = ``
                }
            }
            return e
        }
        setdata(t, e) {
            let s = !1;
            if (/^@/.test(e)) {
                const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i), h = i ? "null" === o ? null : o || "{}" : "{}";
                try {
                    const e = JSON.parse(h);
                    this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i)
                } catch (e) {
                    const o = {};
                    this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i)
                }
            } else s = this.setval(t, e);
            return s
        }
        getval(t) {
            return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null
        }
        setval(t, e) {
            return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null
        }
        initGotEnv(t) {
            this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar))
        }
        get(t, e = (() => {})) {
            t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
                "X-Surge-Skip-Scripting": !1
            })), $httpClient.get(t, (t, s, i) => {
                !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i)
            })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
                hints: !1
            })), $task.fetch(t).then(t => {
                const {
                    statusCode: s,
                    statusCode: i,
                    headers: r,
                    body: o
                } = t;
                e(null, {
                    status: s,
                    statusCode: i,
                    headers: r,
                    body: o
                }, o)
            }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => {
                try {
                    if (t.headers["set-cookie"]) {
                        const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
                        this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar
                    }
                } catch (t) {
                    this.logErr(t)
                }
            }).then(t => {
                const {
                    statusCode: s,
                    statusCode: i,
                    headers: r,
                    body: o
                } = t;
                e(null, {
                    status: s,
                    statusCode: i,
                    headers: r,
                    body: o
                }, o)
            }, t => {
                const {
                    message: s,
                    response: i
                } = t;
                e(s, i, i && i.body)
            }))
        }
        post(t, e = (() => {})) {
            if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
                "X-Surge-Skip-Scripting": !1
            })), $httpClient.post(t, (t, s, i) => {
                !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i)
            });
            else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
                hints: !1
            })), $task.fetch(t).then(t => {
                const {
                    statusCode: s,
                    statusCode: i,
                    headers: r,
                    body: o
                } = t;
                e(null, {
                    status: s,
                    statusCode: i,
                    headers: r,
                    body: o
                }, o)
            }, t => e(t));
            else if (this.isNode()) {
                this.initGotEnv(t);
                const {
                    url: s,
                    ...i
                } = t;
                this.got.post(s, i).then(t => {
                    const {
                        statusCode: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    } = t;
                    e(null, {
                        status: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    }, o)
                }, t => {
                    const {
                        message: s,
                        response: i
                    } = t;
                    e(s, i, i && i.body)
                })
            }
        }
        time(t) {
            let e = {
                "M+": (new Date).getMonth() + 1,
                "d+": (new Date).getDate(),
                "H+": (new Date).getHours(),
                "m+": (new Date).getMinutes(),
                "s+": (new Date).getSeconds(),
                "q+": Math.floor(((new Date).getMonth() + 3) / 3),
                S: (new Date).getMilliseconds()
            };
            /(y+)/.test(t) && (t = t.replace(RegExp.$1, ((new Date).getFullYear() + ``).substr(4 - RegExp.$1.length)));
            for (let s in e) new RegExp("(" + s + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? e[s] : ("00" + e[s]).substr((`` + e[s]).length)));
            return t
        }
        msg(e = t, s = ``, i = ``, r) {
            const o = t => {
                if (!t) return t;
                if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? {
                    "open-url": t
                } : this.isSurge() ? {
                    url: t
                } : void 0;
                if ("object" == typeof t) {
                    if (this.isLoon()) {
                        let e = t.openUrl || t.url || t["open-url"],
                            s = t.mediaUrl || t["media-url"];
                        return {
                            openUrl: e,
                            mediaUrl: s
                        }
                    }
                    if (this.isQuanX()) {
                        let e = t["open-url"] || t.url || t.openUrl,
                            s = t["media-url"] || t.mediaUrl;
                        return {
                            "open-url": e,
                            "media-url": s
                        }
                    }
                    if (this.isSurge()) {
                        let e = t.url || t.openUrl || t["open-url"];
                        return {
                            url: e
                        }
                    }
                }
            };
            this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r)));
            let h = [``, "==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="];
            h.push(e), s && h.push(s), i && h.push(i), console.log(h.join("\n")), this.logs = this.logs.concat(h)
        }
        log(...t) {
            t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator))
        }
        logErr(t, e) {
            const s = !this.isSurge() && !this.isQuanX() && !this.isLoon();
            s ? this.log(``, `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t.stack) : this.log(``, `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t)
        }
        wait(t) {
            return new Promise(e => setTimeout(e, t))
        }
        done(t = {}) {
            const e = (new Date).getTime(),
                s = (e - this.startTime) / 1e3;
            this.log(``, `\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${s} \u79d2`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t)
        }
    }(t, e)
}
