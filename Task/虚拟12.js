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
const COOKIE ={"id":"shuqi","name":"书旗小说APP","keys":["shuqiuserurl","shuqisyurl","shuqisybody","shuqispbody","shuqiscbody","shuqiydbody","shuqiqdbody","shuqirwbody","shuqifxbody","shuqisprwurl","shuqijlbody","shuqisqjlbody","shuqicjyurl","shuqicjcsbody","shuqicjbody","shuqijsspbody","shuqijsydurl","shuqijsydbody","shuqijsqdbody","shuqijsqdspyurl","shuqijsqdspbody","shuqijsrwbody","shuqijsfxbody","shuqijsbookurl","shuqijsbookbody","shuqijssprwurl","shuqiuserurl2","shuqisyurl2","shuqisybody2","shuqispbody2","shuqiscbody2","shuqiydbody2","shuqiqdbody2","shuqirwbody2","shuqifxbody2","shuqisprwurl2","shuqijlbody2","shuqisqjlbody2","shuqicjyurl2","shuqicjcsbody2","shuqicjbody2","shuqijsspbody2","shuqijsydurl2","shuqijsydbody2","shuqijsqdbody2","shuqijsqdspyurl2","shuqijsqdspbody2","shuqijsrwbody2","shuqijsfxbody2","shuqijsbookurl2","shuqijsbookbody2","shuqijssprwurl2","shuqiuserurl3","shuqisyurl3","shuqisybody3","shuqispbody3","shuqiscbody3","shuqiydbody3","shuqiqdbody3","shuqirwbody3","shuqifxbody3","shuqisprwurl3","shuqijlbody3","shuqisqjlbody3","shuqicjyurl3","shuqicjcsbody3","shuqicjbody3","shuqijsspbody3","shuqijsydurl3","shuqijsydbody3","shuqijsqdbody3","shuqijsqdspyurl3","shuqijsqdspbody3","shuqijsrwbody3","shuqijsfxbody3","shuqijsbookurl3","shuqijsbookbody3","shuqijssprwurl3","shuqiuserurl4","shuqisyurl4","shuqisybody4","shuqispbody4","shuqiscbody4","shuqiydbody4","shuqiqdbody4","shuqirwbody4","shuqifxbody4","shuqisprwurl4","shuqijlbody4","shuqisqjlbody4","shuqicjyurl4","shuqicjcsbody4","shuqicjbody4","shuqijsspbody4","shuqijsydurl4","shuqijsydbody4","shuqijsqdbody4","shuqijsqdspyurl4","shuqijsqdspbody4","shuqijsrwbody4","shuqijsfxbody4","shuqijsbookurl4","shuqijsbookbody4","shuqijssprwurl4","shuqiuserurl5","shuqisyurl5","shuqisybody5","shuqispbody5","shuqiscbody5","shuqiydbody5","shuqiqdbody5","shuqirwbody5","shuqifxbody5","shuqisprwurl5","shuqijlbody5","shuqisqjlbody5","shuqicjyurl5","shuqicjcsbody5","shuqicjbody5","shuqijsspbody5","shuqijsydurl5","shuqijsydbody5","shuqijsqdbody5","shuqijsqdspyurl5","shuqijsqdspbody5","shuqijsrwbody5","shuqijsfxbody5","shuqijsbookurl5","shuqijsbookbody5","shuqijssprwurl5","shuqiuserurl6","shuqisyurl6","shuqisybody6","shuqispbody6","shuqiscbody6","shuqiydbody6","shuqiqdbody6","shuqirwbody6","shuqifxbody6","shuqisprwurl6","shuqijlbody6","shuqisqjlbody6","shuqicjyurl6","shuqicjcsbody6","shuqicjbody6","shuqijsspbody6","shuqijsydurl6","shuqijsydbody6","shuqijsqdbody6","shuqijsqdspyurl6","shuqijsqdspbody6","shuqijsrwbody6","shuqijsfxbody6","shuqijsbookurl6","shuqijsbookbody6","shuqijssprwurl6","shuqiuserurl7","shuqisyurl7","shuqisybody7","shuqispbody7","shuqiscbody7","shuqiydbody7","shuqiqdbody7","shuqirwbody7","shuqifxbody7","shuqisprwurl7","shuqijlbody7","shuqisqjlbody7","shuqicjyurl7","shuqicjcsbody7","shuqicjbody7","shuqijsspbody7","shuqijsydurl7","shuqijsydbody7","shuqijsqdbody7","shuqijsqdspyurl7","shuqijsqdspbody7","shuqijsrwbody7","shuqijsfxbody7","shuqijsbookurl7","shuqijsbookbody7","shuqijssprwurl7","shuqiuserurl8","shuqisyurl8","shuqisybody8","shuqispbody8","shuqiscbody8","shuqiydbody8","shuqiqdbody8","shuqirwbody8","shuqifxbody8","shuqisprwurl8","shuqijlbody8","shuqisqjlbody8","shuqicjyurl8","shuqicjcsbody8","shuqicjbody8","shuqijsspbody8","shuqijsydurl8","shuqijsydbody8","shuqijsqdbody8","shuqijsqdspyurl8","shuqijsqdspbody8","shuqijsrwbody8","shuqijsfxbody8","shuqijsbookurl8","shuqijsbookbody8","shuqijssprwurl8","shuqiuserurl9","shuqisyurl9","shuqisybody9","shuqispbody9","shuqiscbody9","shuqiydbody9","shuqiqdbody9","shuqirwbody9","shuqifxbody9","shuqisprwurl9","shuqijlbody9","shuqisqjlbody9","shuqicjyurl9","shuqicjcsbody9","shuqicjbody9","shuqijsspbody9","shuqijsydurl9","shuqijsydbody9","shuqijsqdbody9","shuqijsqdspyurl9","shuqijsqdspbody9","shuqijsrwbody9","shuqijsfxbody9","shuqijsbookurl9","shuqijsbookbody9","shuqijssprwurl9","shuqiuserurl10","shuqisyurl10","shuqisybody10","shuqispbody10","shuqiscbody10","shuqiydbody10","shuqiqdbody10","shuqirwbody10","shuqifxbody10","shuqisprwurl10","shuqijlbody10","shuqisqjlbody10","shuqicjyurl10","shuqicjcsbody10","shuqicjbody10","shuqijsspbody10","shuqijsydurl10","shuqijsydbody10","shuqijsqdbody10","shuqijsqdspyurl10","shuqijsqdspbody10","shuqijsrwbody10","shuqijsfxbody10","shuqijsbookurl10","shuqijsbookbody10","shuqijssprwurl10","shuqiuserurl11","shuqisyurl11","shuqisybody11","shuqispbody11","shuqiscbody11","shuqiydbody11","shuqiqdbody11","shuqirwbody11","shuqifxbody11","shuqisprwurl11","shuqijlbody11","shuqisqjlbody11","shuqicjyurl11","shuqicjcsbody11","shuqicjbody11","shuqijsspbody11","shuqijsydurl11","shuqijsydbody11","shuqijsqdbody11","shuqijsqdspyurl11","shuqijsqdspbody11","shuqijsrwbody11","shuqijsfxbody11","shuqijsbookurl11","shuqijsbookbody11","shuqijssprwurl11","shuqiuserurl12","shuqisyurl12","shuqisybody12","shuqispbody12","shuqiscbody12","shuqiydbody12","shuqiqdbody12","shuqirwbody12","shuqifxbody12","shuqisprwurl12","shuqijlbody12","shuqisqjlbody12","shuqicjyurl12","shuqicjcsbody12","shuqicjbody12","shuqijsspbody12","shuqijsydurl12","shuqijsydbody12","shuqijsqdbody12","shuqijsqdspyurl12","shuqijsqdspbody12","shuqijsrwbody12","shuqijsfxbody12","shuqijsbookurl12","shuqijsbookbody12","shuqijssprwurl12","shuqiuserurl13","shuqisyurl13","shuqisybody13","shuqispbody13","shuqiscbody13","shuqiydbody13","shuqiqdbody13","shuqirwbody13","shuqifxbody13","shuqisprwurl13","shuqijlbody13","shuqisqjlbody13","shuqicjyurl13","shuqicjcsbody13","shuqicjbody13","shuqijsspbody13","shuqijsydurl13","shuqijsydbody13","shuqijsqdbody13","shuqijsqdspyurl13","shuqijsqdspbody13","shuqijsrwbody13","shuqijsfxbody13","shuqijsbookurl13","shuqijsbookbody13","shuqijssprwurl13","shuqiuserurl14","shuqisyurl14","shuqisybody14","shuqispbody14","shuqiscbody14","shuqiydbody14","shuqiqdbody14","shuqirwbody14","shuqifxbody14","shuqisprwurl14","shuqijlbody14","shuqisqjlbody14","shuqicjyurl14","shuqicjcsbody14","shuqicjbody14","shuqijsspbody14","shuqijsydurl14","shuqijsydbody14","shuqijsqdbody14","shuqijsqdspyurl14","shuqijsqdspbody14","shuqijsrwbody14","shuqijsfxbody14","shuqijsbookurl14","shuqijsbookbody14","shuqijssprwurl14","shuqiuserurl15","shuqisyurl15","shuqisybody15","shuqispbody15","shuqiscbody15","shuqiydbody15","shuqiqdbody15","shuqirwbody15","shuqifxbody15","shuqisprwurl15","shuqijlbody15","shuqisqjlbody15","shuqicjyurl15","shuqicjcsbody15","shuqicjbody15","shuqijsspbody15","shuqijsydurl15","shuqijsydbody15","shuqijsqdbody15","shuqijsqdspyurl15","shuqijsqdspbody15","shuqijsrwbody15","shuqijsfxbody15","shuqijsbookurl15","shuqijsbookbody15","shuqijssprwurl15","shuqiuserurl16","shuqisyurl16","shuqisybody16","shuqispbody16","shuqiscbody16","shuqiydbody16","shuqiqdbody16","shuqirwbody16","shuqifxbody16","shuqisprwurl16","shuqijlbody16","shuqisqjlbody16","shuqicjyurl16","shuqicjcsbody16","shuqicjbody16","shuqijsspbody16","shuqijsydurl16","shuqijsydbody16","shuqijsqdbody16","shuqijsqdspyurl16","shuqijsqdspbody16","shuqijsrwbody16","shuqijsfxbody16","shuqijsbookurl16","shuqijsbookbody16","shuqijssprwurl16","shuqiuserurl17","shuqisyurl17","shuqisybody17","shuqispbody17","shuqiscbody17","shuqiydbody17","shuqiqdbody17","shuqirwbody17","shuqifxbody17","shuqisprwurl17","shuqijlbody17","shuqisqjlbody17","shuqicjyurl17","shuqicjcsbody17","shuqicjbody17","shuqijsspbody17","shuqijsydurl17","shuqijsydbody17","shuqijsqdbody17","shuqijsqdspyurl17","shuqijsqdspbody17","shuqijsrwbody17","shuqijsfxbody17","shuqijsbookurl17","shuqijsbookbody17","shuqijssprwurl17","shuqiuserurl18","shuqisyurl18","shuqisybody18","shuqispbody18","shuqiscbody18","shuqiydbody18","shuqiqdbody18","shuqirwbody18","shuqifxbody18","shuqisprwurl18","shuqijlbody18","shuqisqjlbody18","shuqicjyurl18","shuqicjcsbody18","shuqicjbody18","shuqijsspbody18","shuqijsydurl18","shuqijsydbody18","shuqijsqdbody18","shuqijsqdspyurl18","shuqijsqdspbody18","shuqijsrwbody18","shuqijsfxbody18","shuqijsbookurl18","shuqijsbookbody18","shuqijssprwurl18","shuqiuserurl19","shuqisyurl19","shuqisybody19","shuqispbody19","shuqiscbody19","shuqiydbody19","shuqiqdbody19","shuqirwbody19","shuqifxbody19","shuqisprwurl19","shuqijlbody19","shuqisqjlbody19","shuqicjyurl19","shuqicjcsbody19","shuqicjbody19","shuqijsspbody19","shuqijsydurl19","shuqijsydbody19","shuqijsqdbody19","shuqijsqdspyurl19","shuqijsqdspbody19","shuqijsrwbody19","shuqijsfxbody19","shuqijsbookurl19","shuqijsbookbody19","shuqijssprwurl19","shuqiuserurl20","shuqisyurl20","shuqisybody20","shuqispbody20","shuqiscbody20","shuqiydbody20","shuqiqdbody20","shuqirwbody20","shuqifxbody20","shuqisprwurl20","shuqijlbody20","shuqisqjlbody20","shuqicjyurl20","shuqicjcsbody20","shuqicjbody20","shuqijsspbody20","shuqijsydurl20","shuqijsydbody20","shuqijsqdbody20","shuqijsqdspyurl20","shuqijsqdspbody20","shuqijsrwbody20","shuqijsfxbody20","shuqijsbookurl20","shuqijsbookbody20","shuqijssprwurl20"],"author":"@ziye","settings":[{"id":"shuqiSuffix","name":"当前账号","val":"1","type":"number","desc":"当前抓取ck记录的账号序号，如：1、2、3、"},{"id":"shuqiCount","name":"账号个数","val":"15","type":"number","desc":"指定任务最多跑几个账号，根据抓取的账号数据个数来设值"},{"id":"shuqiXH","name":"循环获取CK","val":"1","type":"number","desc":"0关闭 1开启,默认关闭"},{"id":"shuqiSC","name":"单刷时长控制","val":"0","type":"number","desc":"0关闭 1开启,默认关闭"},{"id":"shuqiTXTX","name":"提现提醒","val":"10","type":"number","desc":"0关闭 设置余额大于多少提醒"},{"id":"shuqinotifyttt","name":"推送控制","val":"1","type":"number","desc":"0关闭，1推送,默认12点以及23点推送"},{"id":"shuqinotifyInterval","name":"通知控制","val":"2","type":"number","desc":"0关闭，1为 所有通知，2为 12，23 点通知，3为 6，12，18，23 点通知 "},{"id":"shuqiMinutes","name":"推送-通知 分钟控制","val":"59","type":"number","desc":"推送以及通知控制在什么分钟段，可设置0-59,默认0到10"}],"repo":"https://cdn.jsdelivr.net/gh/ziye888/JavaScript@main/Task/shuqi.js","icons":["https://cdn.jsdelivr.net/gh/ziye888/JavaScript@main/Task/shuqi.png","https://cdn.jsdelivr.net/gh/ziye888/JavaScript@main/Task/shuqi.png"],"script":"https://cdn.jsdelivr.net/gh/ziye888/JavaScript@main/Task/shuqi.js","icon":"https://cdn.jsdelivr.net/gh/ziye888/JavaScript@main/Task/shuqi.png","favIcon":"mdi-star","favIconColor":"primary","datas":[{"key":"shuqiuserurl","val":"https://ocean.shuqireader.com/api/jaccount/accountapi/v1/sapi/account/getBindinfo?userId=2126731969&sqSv=1.0&timestamp=1623937132&sign=f6fa2037e36b3e7fb3a6c5d4dba3a382&key=sq_h5_gateway"},{"key":"shuqisyurl","val":"https://render.shuqireader.com/load/resource?sdk=13.1&utdid=YMc3CBuROTsDAKhAyCYxY8kR&ustatus=0&first_placeid=111111&net_env=wifi&placeid=111111&user_id=2126731969&sn=A4E1529ADCE733EE94171B8DB3FE790506C73D71&umidtoken=YMc3CBuROTsDAKhAyCYxY8kR&msv=8.0.0&brand=Apple&imei=AF9FDC4E4A3E4D35FECD3971E0CB926F6C813F2B&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=iOS&ver=210301&mod=iPhoneSE&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=D2EF6EC2-00BD-4D00-B85C-E459A4588E2F"},{"key":"shuqisybody","val":"appVer=4.3.6.0&imei=AF9FDC4E4A3E4D35FECD3971E0CB926F6C813F2B&isNewUser=1&params=%7B%22resources%22%3A%7B%22ShuqiVipEntry%22%3A%7B%7D%2C%22personalCardConfig%22%3A%7B%7D%7D%7D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=3c13fb12456f47121bddf58386619e79&sn=A4E1529ADCE733EE94171B8DB3FE790506C73D71&soft_id=21&timestamp=1623937416&user_id=2126731969&ver=210301"},{"key":"shuqispbody","val":"_public=skinId%3D999%26idfa%3DD2EF6EC2-00BD-4D00-B85C-E459A4588E2F%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26umidtoken%3DYMc3CBuROTsDAKhAyCYxY8kR%26user_id%3D2126731969%26sn%3DA4E1529ADCE733EE94171B8DB3FE790506C73D71%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3DAF9FDC4E4A3E4D35FECD3971E0CB926F6C813F2B%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhoneSE%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYMc3CBuROTsDAKhAyCYxY8kR%26utype%3Dpre_vip%26sdk%3D13.1&deliveryId=525&key=sq_app_ad&miniWua=HHnB_6FPJVQaFnf8DFLvYE/cUAghIyqxF5%2BSburrHtYZqCQo%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=626&sign=55AFC96D7DCCB13E96C560286F712D8C&timestamp=1623936970&userId=2126731969&user_id=2126731969&wua=HIVW_51TKz5JFBaDx0j9oSnyIMCmWFPNxugz23RjMYXIrToEN/GMt07rqkCq26r%2BXM/TmLa/ERATT5CiEGCOYOe8zRGBotBGGad/lm1zmoLSP1II22sI2wmBsZUvNjbbg23iRk%2Btf36Nz0dyvdLrEQyb/li9B844EhAA5pWM51JmUXC3%2Br8YL4EcYMwkCC1kzPWR1IULH9xnKf095qfJ6rsVXEzDYaG2hMkNVDAj/SrN6inY%3D"},{"key":"shuqiscbody","val":"_public=utype%253Dpre_vip%2526idfa%253DD2EF6EC2-00BD-4D00-B85C-E459A4588E2F%2526ustatus%253D0%2526first_placeid%253D111111%2526net_env%253Dwifi%2526umidtoken%253DYMc3CBuROTsDAKhAyCYxY8kR%2526user_id%253D2126731969%2526sn%253DA4E1529ADCE733EE94171B8DB3FE790506C73D71%2526placeid%253D111111%2526msv%253D8.0.0%2526brand%253DApple%2526imei%253DAF9FDC4E4A3E4D35FECD3971E0CB926F6C813F2B%2526skinVersionPrefix%253D1%2526appVer%253D4.3.6.0%2526skinActiveColor%253D0F9970%2526manufacturer%253DApple%2526statusBarHeight%253D44.000000%2526skinColor%253D23B383%2526platform%253DiOS%2526ver%253D210301%2526mod%253DiPhoneSE%2526skinVersion%253D1%2526wh%253D1242x2688%2526skinId%253D999%2526utdid%253DYMc3CBuROTsDAKhAyCYxY8kR%2526soft_id%253D21%2526sdk%253D13.1&key=and_log&readingList=%5B%7B%22startTime%22%3A1623936921%2C%22readObjType%22%3A1%2C%22attr%22%3A2%2C%22readObjId%22%3A%227711938%22%2C%22readChapterId%22%3A1058788%2C%22readingLen%22%3A33%7D%5D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=24A2F0B16D934322BCEB9C3EB9A1905E&timestamp=1623936954&user_id=2126731969"},{"key":"shuqiydbody","val":"_public=utype%3Dpre_vip%26idfa%3DD2EF6EC2-00BD-4D00-B85C-E459A4588E2F%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26umidtoken%3DYMc3CBuROTsDAKhAyCYxY8kR%26user_id%3D2126731969%26sn%3DA4E1529ADCE733EE94171B8DB3FE790506C73D71%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3DAF9FDC4E4A3E4D35FECD3971E0CB926F6C813F2B%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhoneSE%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26utdid%3DYMc3CBuROTsDAKhAyCYxY8kR%26soft_id%3D21%26sdk%3D13.1&deliveryId=707&key=sq_app_ad&miniWua=HHnB_IJkWDvql2R%2Bj42%2BcY%2ByruBa84kfxBLSJRvGZoGL%2Bdqw%3D&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=678&sign=53F8E938EE1E555F83866F6B2AD302F4&timestamp=1623936951&userId=2126731969&wua=HIVW_VEyC%2BIFSeAOh2JM2QQfUA1plvNYSQ2CSmz8aoW9zMGfKNWfk%2ByMBx5Nvtly8%2Bl5CDeSS4BWXCB2WT9UCOQwumddVA65y8rZfqa9I3ZULJVAyGwaVGDCOuCYhBys8SJYZLaANNEffSHXg1tMTWyyAaf1HWcz5uiwvkeIVcoaIjBvQpvzHeSiX2ta2SRuT/jnUljd0WcdC6tCLwvqxACkGhEe3FOWTYAQhHdQygRlW69k%3D"},{"key":"shuqiqdbody","val":"clientTimestamp=1623937110&position=501&userId=2126731969&signInType=1&wua=HIVW_MA33Tuhgaz8Gf3r7Gn15T2FNGPgutGSsCmPswY9uJqpnnzToWRNB%2FTWCnqFr%2BZIGWy8URoXEGoJVqN5ctfwBvFo489e%2FwmmIvdEpWDeZhUx1YdOKwcRaazU0VqJXMFF1skzcSfzVi0E0EJOtGvzAUBVjQ6NOCRlPg7ZYbAy66xr0E90dnToZ0VQmyMm7a20WBRHfxl%2BAhbQUvkB9YX4OmyPDuTwBtpTXPb%2FBX0t5mWM%3D&ua=&miniWua=HHnB_c6oodvp3IZFAz10cDoooUCFgry14Jvq1Zufw3NXKpY8%3D&umidtoken=YMc3CBuROTsDAKhAyCYxY8kR&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&sign=01fff80dd8a9ef281f79cd02ba50a98b&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.1%26utdid%3DYMc3CBuROTsDAKhAyCYxY8kR%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2126731969%26sn%3DA4E1529ADCE733EE94171B8DB3FE790506C73D71%26umidtoken%3DYMc3CBuROTsDAKhAyCYxY8kR%26msv%3D8.0.0%26brand%3DApple%26imei%3DAF9FDC4E4A3E4D35FECD3971E0CB926F6C813F2B%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhoneSE%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DD2EF6EC2-00BD-4D00-B85C-E459A4588E2F"},{"key":"shuqirwbody","val":""},{"key":"shuqifxbody","val":""},{"key":"shuqisprwurl","val":"https://ocean.shuqireader.com/api/ad/adserver/v1/api/getAdInfo?appVer=4.3.6.0&placeId=111111&platform=iOS&requestSrc=h5&resourceId=626&timestamp=1623937130&user_id=2126731969&sqSv=1.0&sign=e13aa91d9bcbaf244b483384a622e9f0&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.1%26utdid%3DYMc3CBuROTsDAKhAyCYxY8kR%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2126731969%26sn%3DA4E1529ADCE733EE94171B8DB3FE790506C73D71%26umidtoken%3DYMc3CBuROTsDAKhAyCYxY8kR%26msv%3D8.0.0%26brand%3DApple%26imei%3DAF9FDC4E4A3E4D35FECD3971E0CB926F6C813F2B%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhoneSE%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DD2EF6EC2-00BD-4D00-B85C-E459A4588E2F"},{"key":"shuqijlbody","val":"requestSrc=h5&userId=2126731969&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1623937418&sqSv=1.0&sign=f4f4e7d3440f7b16b9aadeb4eb82f737&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.1%26utdid%3DYMc3CBuROTsDAKhAyCYxY8kR%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2126731969%26sn%3DA4E1529ADCE733EE94171B8DB3FE790506C73D71%26umidtoken%3DYMc3CBuROTsDAKhAyCYxY8kR%26msv%3D8.0.0%26brand%3DApple%26imei%3DAF9FDC4E4A3E4D35FECD3971E0CB926F6C813F2B%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhoneSE%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DD2EF6EC2-00BD-4D00-B85C-E459A4588E2F"},{"key":"shuqisqjlbody","val":"src=&userId=2126731969&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1623937216&sqSv=1.0&sign=60026832467cbb4815c76ae75153af41&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.1%26utdid%3DYMc3CBuROTsDAKhAyCYxY8kR%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2126731969%26sn%3DA4E1529ADCE733EE94171B8DB3FE790506C73D71%26umidtoken%3DYMc3CBuROTsDAKhAyCYxY8kR%26msv%3D8.0.0%26brand%3DApple%26imei%3DAF9FDC4E4A3E4D35FECD3971E0CB926F6C813F2B%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhoneSE%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DD2EF6EC2-00BD-4D00-B85C-E459A4588E2F"},{"key":"shuqicjyurl","val":"https://ocean.shuqireader.com/api/activity/activity/v1/lottery/info?timestamp=1623937133&userId=2126731969&activityId=311&sqSv=1.0&sign=8f086993a2249bca508bcfee757962b6&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.1%26utdid%3DYMc3CBuROTsDAKhAyCYxY8kR%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2126731969%26sn%3DA4E1529ADCE733EE94171B8DB3FE790506C73D71%26umidtoken%3DYMc3CBuROTsDAKhAyCYxY8kR%26msv%3D8.0.0%26brand%3DApple%26imei%3DAF9FDC4E4A3E4D35FECD3971E0CB926F6C813F2B%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhoneSE%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DD2EF6EC2-00BD-4D00-B85C-E459A4588E2F"},{"key":"shuqicjcsbody","val":"_public=skinId%3D999%26idfa%3DD2EF6EC2-00BD-4D00-B85C-E459A4588E2F%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26umidtoken%3DYMc3CBuROTsDAKhAyCYxY8kR%26user_id%3D2126731969%26sn%3DA4E1529ADCE733EE94171B8DB3FE790506C73D71%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3DAF9FDC4E4A3E4D35FECD3971E0CB926F6C813F2B%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhoneSE%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYMc3CBuROTsDAKhAyCYxY8kR%26utype%3Dpre_vip%26sdk%3D13.1&deliveryId=711&key=sq_app_ad&miniWua=HHnB_n4iBdCIDnq9OY8jrm/dlW8QSKm9pAk8kafa5mteDVKA%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=703&sign=2BA8288988DE22CDC3A8791CD6A32248&timestamp=1623936977&userId=2126731969&user_id=2126731969&wua=HIVW_wsWRURlL7zTrHMh9BHuyHoD5WgyIYLSnWW95ii6/a7%2BkhgY838ScER9N/hWvGXWOPPCB04U8MY8hZMcoQ8aLFHqhSWvA0vujMjbEEOKIKeujIKrR2aBBiJM4t0%2B6sk9sf30SYdVVd97ZXymQQgpTbAgUy4ZddvN8k/UnNvvPja8XsGDmvu1LFvfmpzd%2BmmmrTWigBCZvZquDRKjOiNl9yOzooC8NYpURjkPW52E1ZdI%3D"},{"key":"shuqicjbody","val":"wua=HIVW_gvfnEQDXwqLKdkNljWB7jrFMjv5XW1GxC4k4cYDevqf8rsC64Xn2tanxzZGG1bb3hmZa%2Bbd7i%2FDJuJh%2FROLIHKk61WxxSF3f%2FgKOGXM%2F2Q%2FxI8blwn54H3jxc%2FZ0GpXoDsVrI5Pgs3JmK9Jb1Y3Iy3HJY9r0UENbgmxehkC8OHf5oTvwQubND000u8p%2FBsaG4gyJuyQVaUeaKXhYe9OpZNcNQwsrwK%2BHZbXZlMtefmY%3D&ua=&userId=2126731969&umidtoken=YMc3CBuROTsDAKhAyCYxY8kR&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&asac=2A20C07RJ9F51AOEFSNHDR&timestamp=1623936983&activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&sqSv=1.0&sign=020245f330ac4c2ee04ad56414a9999c&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.1%26utdid%3DYMc3CBuROTsDAKhAyCYxY8kR%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2126731969%26sn%3DA4E1529ADCE733EE94171B8DB3FE790506C73D71%26umidtoken%3DYMc3CBuROTsDAKhAyCYxY8kR%26msv%3D8.0.0%26brand%3DApple%26imei%3DAF9FDC4E4A3E4D35FECD3971E0CB926F6C813F2B%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhoneSE%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DD2EF6EC2-00BD-4D00-B85C-E459A4588E2F"},{"key":"shuqijsspbody","val":""},{"key":"shuqijsydurl","val":""},{"key":"shuqijsydbody","val":""},{"key":"shuqijsqdbody","val":""},{"key":"shuqijsqdspyurl","val":""},{"key":"shuqijsqdspbody","val":""},{"key":"shuqijsrwbody","val":""},{"key":"shuqijsfxbody","val":""},{"key":"shuqijsbookurl","val":""},{"key":"shuqijsbookbody","val":""},{"key":"shuqijssprwurl","val":""},{"key":"shuqiuserurl2","val":"https://ocean.shuqireader.com/api/jaccount/accountapi/v1/sapi/account/getBindinfo?userId=2125157834&sqSv=1.0&timestamp=1623937540&sign=6a52adf0a0c5228fc98784ea2c3b1384&key=sq_h5_gateway"},{"key":"shuqisyurl2","val":"https://render.shuqireader.com/load/resource?sdk=13.3.1&utdid=YMYNFJzbw9gDAM%2FPda4SRU5u&ustatus=0&first_placeid=111111&net_env=wifi&placeid=111111&user_id=2125157834&sn=CC5D4175B8DB14D159CE86A7B1940626B0C94F8E&umidtoken=YMYNFJzbw9gDAM%2FPda4SRU5u&msv=8.0.0&brand=Apple&imei=014E0572E7BAC266CF107B12277C214B4D245E59&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=iOS&ver=210301&mod=UnknowniPad&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=60AFDD1B-12BC-412A-9D19-B63454FFEBE6"},{"key":"shuqisybody2","val":"appVer=4.3.6.0&imei=014E0572E7BAC266CF107B12277C214B4D245E59&isNewUser=1&params=%7B%22resources%22%3A%7B%22ShuqiVipEntry%22%3A%7B%7D%2C%22personalCardConfig%22%3A%7B%7D%7D%7D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=23331f96811ffc7fbac774c04d65a793&sn=CC5D4175B8DB14D159CE86A7B1940626B0C94F8E&soft_id=21&timestamp=1623937483&user_id=2125157834&ver=210301"},{"key":"shuqispbody2","val":"_public=skinId%3D999%26idfa%3D60AFDD1B-12BC-412A-9D19-B63454FFEBE6%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26umidtoken%3DYMYNFJzbw9gDAM/Pda4SRU5u%26user_id%3D2125157834%26sn%3DCC5D4175B8DB14D159CE86A7B1940626B0C94F8E%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D014E0572E7BAC266CF107B12277C214B4D245E59%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYMYNFJzbw9gDAM/Pda4SRU5u%26utype%3Dpre_vip%26sdk%3D13.3.1&deliveryId=525&key=sq_app_ad&miniWua=HHnB_yl2POJzP29c6VOLMPENRnRUJpTXfWMBuxITP96JhCMA%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=626&sign=EFBC60C6340F89B7742210B05FAE06FC&timestamp=1623937498&userId=2125157834&user_id=2125157834&wua=HIVW_1k6zN0E6BfQ3ekGOqkN1Nk8SjPVeAKoMcVRx6q9Ra40hIGjVTtSPqvYPOaAEA5r604u0oePB01RZ6VWwqSUfCIh6VWxcKo%2B2cJumRVefx676Lk3eh%2BrM/t8rSSB7BRdujXi8LtqIOmRd1/MygkTN1Gy3tz1OYBivLZdreI/MfEXMPvtV3fUsT1O4sxuG9iNr6PFsK2F3mvfpa0p6C%2BMH0RvuONp3eO1Br/i5c0o0Bfc%3D"},{"key":"shuqiscbody2","val":"_public=utype%253Dpre_vip%2526idfa%253D60AFDD1B-12BC-412A-9D19-B63454FFEBE6%2526ustatus%253D0%2526first_placeid%253D111111%2526net_env%253Dwifi%2526umidtoken%253DYMYNFJzbw9gDAM%252FPda4SRU5u%2526user_id%253D2125157834%2526sn%253DCC5D4175B8DB14D159CE86A7B1940626B0C94F8E%2526placeid%253D111111%2526msv%253D8.0.0%2526brand%253DApple%2526imei%253D014E0572E7BAC266CF107B12277C214B4D245E59%2526skinVersionPrefix%253D1%2526appVer%253D4.3.6.0%2526skinActiveColor%253D0F9970%2526manufacturer%253DApple%2526statusBarHeight%253D44.000000%2526skinColor%253D23B383%2526platform%253DiOS%2526ver%253D210301%2526mod%253DUnknowniPad%2526skinVersion%253D1%2526wh%253D1242x2688%2526skinId%253D999%2526utdid%253DYMYNFJzbw9gDAM%252FPda4SRU5u%2526soft_id%253D21%2526sdk%253D13.3.1&key=and_log&readingList=%5B%7B%22startTime%22%3A1623937443%2C%22readObjType%22%3A1%2C%22attr%22%3A2%2C%22readObjId%22%3A%228169448%22%2C%22readChapterId%22%3A1320374%2C%22readingLen%22%3A34%7D%5D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=5507C3014688865C0C415A6AC326D4D5&timestamp=1623937477&user_id=2125157834"},{"key":"shuqiydbody2","val":"_public=utype%3Dpre_vip%26idfa%3D60AFDD1B-12BC-412A-9D19-B63454FFEBE6%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26umidtoken%3DYMYNFJzbw9gDAM/Pda4SRU5u%26user_id%3D2125157834%26sn%3DCC5D4175B8DB14D159CE86A7B1940626B0C94F8E%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D014E0572E7BAC266CF107B12277C214B4D245E59%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DUnknowniPad%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26utdid%3DYMYNFJzbw9gDAM/Pda4SRU5u%26soft_id%3D21%26sdk%3D13.3.1&deliveryId=707&key=sq_app_ad&miniWua=HHnB_1oQJV%2Ba2L8ZNY9ZF722eeC9NsSHZ8H0zc8mQfK1WRPs%3D&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=678&sign=45B2F5B42C3D108506E4D6F62201C3DF&timestamp=1623937473&userId=2125157834&wua=HIVW_jW7mhwq%2B5z8AP6Ndc3d%2Bhey5GoJmXWdyb2sUdMYcSQGgz456r8Exga38BZfNVX2Q8uzycXscyT7tbexov6pXSPyA4VH7XkW3XJL95RHLX0ZWmw4bsS4cL%2BBkByqxbkRHiNpu0//9b/2xS/9NSxW/oO31/89KWkos4%2B4NcqTbCfFBFFyruhm/4fKyuAu6XLrmIzkEkNXuzvTiDhJfGIXhcUWbVXQ2sZH22qBrrtFuG08%3D"},{"key":"shuqiqdbody2","val":"clientTimestamp=1623937489&position=501&userId=2125157834&signInType=1&wua=HIVW_icPRcf%2FOtc7qPEqDI3ejYi8isXGKSwWHc5IQzF5VO8%2FACmBfK1CgDMpHj7OLReSGJIG58Bs5VpZNf5k5NIx4ppr77JlOwZn44Ofg%2Bge1QoHNNlImIBgDr8dQqNkc7cSnvnC5mnmHyYNY1jUBBQRJLdj0UrULHy%2F4yD9VVhK09mvqo%2F4oBRDQ%2F%2BEmp%2BH0NR5FtwuhhFPqv8v6i9c8EXpsNaS1qRH%2Bp%2F1KOSwBe9yognc%3D&ua=&miniWua=HHnB_YaMEEvaVsf1q3L6IWk%2BTwb%2F8xJ5w7nbJ%2BNHHwYYzcbg%3D&umidtoken=YMYNFJzbw9gDAM%2FPda4SRU5u&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&sign=f8197f1049659b4e2db0cdfba7463c33&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26sdk%3D13.3.1%26utdid%3DYMYNFJzbw9gDAM%252FPda4SRU5u%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2125157834%26sn%3DCC5D4175B8DB14D159CE86A7B1940626B0C94F8E%26umidtoken%3DYMYNFJzbw9gDAM%252FPda4SRU5u%26msv%3D8.0.0%26brand%3DApple%26imei%3D014E0572E7BAC266CF107B12277C214B4D245E59%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D60AFDD1B-12BC-412A-9D19-B63454FFEBE6"},{"key":"shuqirwbody2","val":""},{"key":"shuqifxbody2","val":""},{"key":"shuqisprwurl2","val":"https://ocean.shuqireader.com/api/ad/adserver/v1/api/getAdInfo?appVer=4.3.6.0&placeId=111111&platform=iOS&requestSrc=h5&resourceId=626&timestamp=1623937540&user_id=2125157834&sqSv=1.0&sign=79f028adc039049c8e1663f7b635f6d2&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26sdk%3D13.3.1%26utdid%3DYMYNFJzbw9gDAM%252FPda4SRU5u%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2125157834%26sn%3DCC5D4175B8DB14D159CE86A7B1940626B0C94F8E%26umidtoken%3DYMYNFJzbw9gDAM%252FPda4SRU5u%26msv%3D8.0.0%26brand%3DApple%26imei%3D014E0572E7BAC266CF107B12277C214B4D245E59%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D60AFDD1B-12BC-412A-9D19-B63454FFEBE6"},{"key":"shuqijlbody2","val":"requestSrc=h5&userId=2125157834&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1623937504&sqSv=1.0&sign=e50369c330c6bdb3259c74d546bfc5f6&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26sdk%3D13.3.1%26utdid%3DYMYNFJzbw9gDAM%252FPda4SRU5u%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2125157834%26sn%3DCC5D4175B8DB14D159CE86A7B1940626B0C94F8E%26umidtoken%3DYMYNFJzbw9gDAM%252FPda4SRU5u%26msv%3D8.0.0%26brand%3DApple%26imei%3D014E0572E7BAC266CF107B12277C214B4D245E59%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D60AFDD1B-12BC-412A-9D19-B63454FFEBE6"},{"key":"shuqisqjlbody2","val":"src=&userId=2125157834&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1623937495&sqSv=1.0&sign=d9db482535bee9a91d0b888f0534fe26&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26sdk%3D13.3.1%26utdid%3DYMYNFJzbw9gDAM%252FPda4SRU5u%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2125157834%26sn%3DCC5D4175B8DB14D159CE86A7B1940626B0C94F8E%26umidtoken%3DYMYNFJzbw9gDAM%252FPda4SRU5u%26msv%3D8.0.0%26brand%3DApple%26imei%3D014E0572E7BAC266CF107B12277C214B4D245E59%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D60AFDD1B-12BC-412A-9D19-B63454FFEBE6"},{"key":"shuqicjyurl2","val":"https://ocean.shuqireader.com/api/activity/activity/v1/lottery/info?timestamp=1623937541&userId=2125157834&activityId=311&sqSv=1.0&sign=02c90367f5c1de2d2725e2199b356f39&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.3.1%26utdid%3DYMYNFJzbw9gDAM%252FPda4SRU5u%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2125157834%26sn%3DCC5D4175B8DB14D159CE86A7B1940626B0C94F8E%26umidtoken%3DYMYNFJzbw9gDAM%252FPda4SRU5u%26msv%3D8.0.0%26brand%3DApple%26imei%3D014E0572E7BAC266CF107B12277C214B4D245E59%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D60AFDD1B-12BC-412A-9D19-B63454FFEBE6"},{"key":"shuqicjcsbody2","val":"_public=skinId%3D999%26idfa%3D60AFDD1B-12BC-412A-9D19-B63454FFEBE6%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26umidtoken%3DYMYNFJzbw9gDAM/Pda4SRU5u%26user_id%3D2125157834%26sn%3DCC5D4175B8DB14D159CE86A7B1940626B0C94F8E%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D014E0572E7BAC266CF107B12277C214B4D245E59%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYMYNFJzbw9gDAM/Pda4SRU5u%26utype%3Dpre_vip%26sdk%3D13.3.1&deliveryId=711&key=sq_app_ad&miniWua=HHnB_KHR7ckicgUKKqdEi%2B8Odp1vMKYRtd7MxVIcqOaFvwZY%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=703&sign=AC9CA850860349FF8F2510815F1BF5F5&timestamp=1623937509&userId=2125157834&user_id=2125157834&wua=HIVW_HFIWCbKlidQGH8cl/RPDuO5aRm/HhOyHn1eK12YJguQq/LakF2DrM%2BYRk52KbioX3B4PQWMR%2B%2BA/euj6hma3Mvq7SwK6n4gFkacAwd/2bI6htxaLOeJdW3vdYWQChDiFDHq/v7wkIp0GGiadIRNFxL7QuunM2eQOZqK2oin3RyqwctCapUXGbdl9%2By6LPY5TzAWf6MR4DUBBssIgLqRsdPvf/RmafdLQycGWZ4ABLrQ%3D"},{"key":"shuqicjbody2","val":"wua=HIVW_qPrAs0XAOC%2BMrY2Wb3q%2F%2B99DGnDncfH6%2Fb6oQUPOSR0MSgtUWCF4yyY2fEIy2QcOMqUNTc4Lu2OgPp2KitGjawS4Cgl1ZLH7Gjtiltg3qJ9b1%2FqlHKAaxxXJDFKqaPDXVuE72p%2Fznv0FUQ%2BNXREb4lJpomZACPWURZcLdmEYjzAESi0zsnG5Z1se02opyBysPQcRSseh3Jq6LPlrp8SYXIrMzTJVcrKjc8T2yVk3yLk%3D&ua=&userId=2125157834&umidtoken=YMYNFJzbw9gDAM%2FPda4SRU5u&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&asac=2A20C07RJ9F51AOEFSNHDR&timestamp=1623937518&activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&sqSv=1.0&sign=e0a11ef173b728d3a32f3ceef0a4e97a&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.3.1%26utdid%3DYMYNFJzbw9gDAM%252FPda4SRU5u%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2125157834%26sn%3DCC5D4175B8DB14D159CE86A7B1940626B0C94F8E%26umidtoken%3DYMYNFJzbw9gDAM%252FPda4SRU5u%26msv%3D8.0.0%26brand%3DApple%26imei%3D014E0572E7BAC266CF107B12277C214B4D245E59%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D60AFDD1B-12BC-412A-9D19-B63454FFEBE6"},{"key":"shuqijsspbody2","val":""},{"key":"shuqijsydurl2","val":""},{"key":"shuqijsydbody2","val":""},{"key":"shuqijsqdbody2","val":""},{"key":"shuqijsqdspyurl2","val":""},{"key":"shuqijsqdspbody2","val":""},{"key":"shuqijsrwbody2","val":""},{"key":"shuqijsfxbody2","val":""},{"key":"shuqijsbookurl2","val":""},{"key":"shuqijsbookbody2","val":""},{"key":"shuqijssprwurl2","val":""},{"key":"shuqiuserurl3","val":"https://ocean.shuqireader.com/api/jaccount/accountapi/v1/sapi/account/getBindinfo?userId=2126732391&sqSv=1.0&timestamp=1623937736&sign=1dbc34d6d661812d29810ae82a406238&key=sq_h5_gateway"},{"key":"shuqisyurl3","val":"https://render.shuqireader.com/load/resource?sdk=13.1.2&utdid=YMYNFJzbw9gDAM%2FPda4SRU5u&ustatus=0&first_placeid=111111&net_env=wifi&placeid=111111&user_id=2126732391&sn=6F712C69081686161C925D3659D96F5D098D5185&umidtoken=YMYNFJzbw9gDAM%2FPda4SRU5u&msv=8.0.0&brand=Apple&imei=610F9DCF317A560FCE881E7ADCD9353AC7D37D35&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=iOS&ver=210301&mod=iPhone8P&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=FBF7B25C-3757-4E2F-BA99-3118A86D4A15"},{"key":"shuqisybody3","val":"appVer=4.3.6.0&imei=610F9DCF317A560FCE881E7ADCD9353AC7D37D35&isNewUser=1&params=%7B%22resources%22%3A%7B%22ShuqiVipEntry%22%3A%7B%7D%2C%22personalCardConfig%22%3A%7B%7D%7D%7D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=59119a079ce644a8bca10fb1402f2254&sn=6F712C69081686161C925D3659D96F5D098D5185&soft_id=21&timestamp=1623937664&user_id=2126732391&ver=210301"},{"key":"shuqispbody3","val":"_public=skinId%3D999%26idfa%3DFBF7B25C-3757-4E2F-BA99-3118A86D4A15%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26umidtoken%3DYMYNFJzbw9gDAM/Pda4SRU5u%26user_id%3D2126732391%26sn%3D6F712C69081686161C925D3659D96F5D098D5185%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D610F9DCF317A560FCE881E7ADCD9353AC7D37D35%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhone8P%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYMYNFJzbw9gDAM/Pda4SRU5u%26utype%3Dpre_vip%26sdk%3D13.1.2&deliveryId=525&key=sq_app_ad&miniWua=HHnB_ee7k1frwpja1mxD6TrV5DDW83pU7aGe4VBkGIYd%2B3ck%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=626&sign=B711E5D5845F7D2B96934948F781FCEE&timestamp=1623937612&userId=2126732391&user_id=2126732391&wua=HIVW_lFd6cLbpFCDeFvbpQf9LT8Il/tqI44SuqzswooHHUrwQrSvHtx7vDcMqbcrmIbVFpkuU8skp7WNy9n45rhnbuwfEDZlG6bdE3yZdLDb0f0TikVDHpuymJbpUXKdXCKHJAsXpFJkZ1uUBPm5y9VrrsidF5JuKN/uadaNuyqY1maoDTe5I9D2FNkhivAjx4%2BZMZMBO%2BU8Bqv4ZVWloybg0LBj/phRXxnEHpVo5WFQgEAI%3D"},{"key":"shuqiscbody3","val":"_public=utype%253Dpre_vip%2526idfa%253DFBF7B25C-3757-4E2F-BA99-3118A86D4A15%2526ustatus%253D0%2526first_placeid%253D111111%2526net_env%253Dwifi%2526umidtoken%253DYMYNFJzbw9gDAM%252FPda4SRU5u%2526user_id%253D2126732391%2526sn%253D6F712C69081686161C925D3659D96F5D098D5185%2526placeid%253D111111%2526msv%253D8.0.0%2526brand%253DApple%2526imei%253D610F9DCF317A560FCE881E7ADCD9353AC7D37D35%2526skinVersionPrefix%253D1%2526appVer%253D4.3.6.0%2526skinActiveColor%253D0F9970%2526manufacturer%253DApple%2526statusBarHeight%253D44.000000%2526skinColor%253D23B383%2526platform%253DiOS%2526ver%253D210301%2526mod%253DiPhone8P%2526skinVersion%253D1%2526wh%253D1242x2688%2526skinId%253D999%2526utdid%253DYMYNFJzbw9gDAM%252FPda4SRU5u%2526soft_id%253D21%2526sdk%253D13.1.2&key=and_log&readingList=%5B%7B%22startTime%22%3A1623937565%2C%22readObjType%22%3A1%2C%22attr%22%3A2%2C%22readObjId%22%3A%228245492%22%2C%22readChapterId%22%3A1384209%2C%22readingLen%22%3A32%7D%5D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=26933693CE4AE30C3350F0594D51155C&timestamp=1623937597&user_id=2126732391"},{"key":"shuqiydbody3","val":"_public=utype%3Dpre_vip%26idfa%3DFBF7B25C-3757-4E2F-BA99-3118A86D4A15%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26umidtoken%3DYMYNFJzbw9gDAM/Pda4SRU5u%26user_id%3D2126732391%26sn%3D6F712C69081686161C925D3659D96F5D098D5185%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D610F9DCF317A560FCE881E7ADCD9353AC7D37D35%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhone8P%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26utdid%3DYMYNFJzbw9gDAM/Pda4SRU5u%26soft_id%3D21%26sdk%3D13.1.2&deliveryId=707&key=sq_app_ad&miniWua=HHnB_OEfe6DETg2WV1/jW4NRy2kQ2vYHuATgTWw2DDG45iME%3D&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=678&sign=852E4DCF6C2C7BE2EBCDC8A8916B7A9B&timestamp=1623937595&userId=2126732391&wua=HIVW_PTRz2SN%2BQ5GOUCf%2B8cmtLslCNxllwfXwHKNFS4RHpbCZ3jpAisqVqMgQ7WotZ2U7HZLL4VyrmjAnbVVbFXIJuKVa/h/xUYv6eWJstvhm6G5KOu4DYBnkaUZQz09PA2MohiZr2/Tx2ogCGRIczjwLXXGe9/HPS9iaOQiWuYFxMHXIPGQyMdbw%2BgL%2BA97%2BJGosJ7Amjzs6Sa35lrSpSakgqw%3D%3D"},{"key":"shuqiqdbody3","val":"clientTimestamp=1623937605&position=501&userId=2126732391&signInType=1&wua=HIVW_Ru5BXLjXrJb5M0aDmW42DUDGXMEsO6oarvURXuvtobGCQIuyGoqh0AbMxwrqa1%2Bfq%2B4%2BqA1CwGhiIt2%2BfdwsV5TUcldKgheyCuy61qcvqA4N%2B028CE%2FrBrRc%2BOlM5n4dfYHUee71rYMd4OgaC5RlJU5psuDqbWXnhoHXRAXYseGMXrW0I7YvAaugTidHCkq7jyJhCPt0vKpp66cyOA%2FbUQ%3D%3D&ua=&miniWua=HHnB_wkDNyuIdvQ6pwZECeN7ol2E%2BUGhMpcikI9%2BfeIZiBzs%3D&umidtoken=YMYNFJzbw9gDAM%2FPda4SRU5u&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&sign=15d108d90dd2b34a7db5ea33ba63131b&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.1.2%26utdid%3DYMYNFJzbw9gDAM%252FPda4SRU5u%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2126732391%26sn%3D6F712C69081686161C925D3659D96F5D098D5185%26umidtoken%3DYMYNFJzbw9gDAM%252FPda4SRU5u%26msv%3D8.0.0%26brand%3DApple%26imei%3D610F9DCF317A560FCE881E7ADCD9353AC7D37D35%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone8P%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DFBF7B25C-3757-4E2F-BA99-3118A86D4A15"},{"key":"shuqirwbody3","val":""},{"key":"shuqifxbody3","val":""},{"key":"shuqisprwurl3","val":"https://ocean.shuqireader.com/api/ad/adserver/v1/api/getAdInfo?appVer=4.3.6.0&placeId=111111&platform=iOS&requestSrc=h5&resourceId=626&timestamp=1623937733&user_id=2126732391&sqSv=1.0&sign=829711f1065e24df74487242885caee1&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.1.2%26utdid%3DYMYNFJzbw9gDAM%252FPda4SRU5u%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2126732391%26sn%3D6F712C69081686161C925D3659D96F5D098D5185%26umidtoken%3DYMYNFJzbw9gDAM%252FPda4SRU5u%26msv%3D8.0.0%26brand%3DApple%26imei%3D610F9DCF317A560FCE881E7ADCD9353AC7D37D35%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone8P%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DFBF7B25C-3757-4E2F-BA99-3118A86D4A15"},{"key":"shuqijlbody3","val":"requestSrc=h5&userId=2126732391&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1623937669&sqSv=1.0&sign=ea769c5f5f86ba79829e88bac81aca62&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.1.2%26utdid%3DYMYNFJzbw9gDAM%252FPda4SRU5u%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2126732391%26sn%3D6F712C69081686161C925D3659D96F5D098D5185%26umidtoken%3DYMYNFJzbw9gDAM%252FPda4SRU5u%26msv%3D8.0.0%26brand%3DApple%26imei%3D610F9DCF317A560FCE881E7ADCD9353AC7D37D35%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone8P%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DFBF7B25C-3757-4E2F-BA99-3118A86D4A15"},{"key":"shuqisqjlbody3","val":"src=&userId=2126732391&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1623937609&sqSv=1.0&sign=803c78c7a4f9fd1994043cf939737222&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.1.2%26utdid%3DYMYNFJzbw9gDAM%252FPda4SRU5u%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2126732391%26sn%3D6F712C69081686161C925D3659D96F5D098D5185%26umidtoken%3DYMYNFJzbw9gDAM%252FPda4SRU5u%26msv%3D8.0.0%26brand%3DApple%26imei%3D610F9DCF317A560FCE881E7ADCD9353AC7D37D35%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone8P%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DFBF7B25C-3757-4E2F-BA99-3118A86D4A15"},{"key":"shuqicjyurl3","val":"https://ocean.shuqireader.com/api/activity/activity/v1/lottery/info?timestamp=1623937737&userId=2126732391&activityId=311&sqSv=1.0&sign=da9172f3b115ee323048b31b3695f5b0&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%2525E6%25258B%25259B%2525E8%2525B4%2525A2%2525E7%25258C%2525AB.turntable_in_0%26sdk%3D13.1.2%26utdid%3DYMYNFJzbw9gDAM%25252FPda4SRU5u%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2126732391%26sn%3D6F712C69081686161C925D3659D96F5D098D5185%26umidtoken%3DYMYNFJzbw9gDAM%25252FPda4SRU5u%26msv%3D8.0.0%26brand%3DApple%26imei%3D610F9DCF317A560FCE881E7ADCD9353AC7D37D35%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D2%26ver%3D210301%26mod%3DiPhone8P%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DFBF7B25C-3757-4E2F-BA99-3118A86D4A15%26page%3D1%26pageSize%3D100000%26hideNavBar%3D1%26degrade%3D1"},{"key":"shuqicjcsbody3","val":"_public=skinId%3D999%26idfa%3DFBF7B25C-3757-4E2F-BA99-3118A86D4A15%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26umidtoken%3DYMYNFJzbw9gDAM/Pda4SRU5u%26user_id%3D2126732391%26sn%3D6F712C69081686161C925D3659D96F5D098D5185%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D610F9DCF317A560FCE881E7ADCD9353AC7D37D35%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhone8P%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYMYNFJzbw9gDAM/Pda4SRU5u%26utype%3Dpre_vip%26sdk%3D13.1.2&deliveryId=711&key=sq_app_ad&miniWua=HHnB_D5hi7o3ZKp9tRLhvs7cNB7LQ/BhmXqJxVjCq7E5pomw%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=703&sign=D438E66313F62A3C4F76452316F97368&timestamp=1623937680&userId=2126732391&user_id=2126732391&wua=HIVW_%2Bxbcmw9/nKuUUpliK5MY577SeuDlcgA3U7R6TtIQCdvORuwM4bSPsxGjnBiKZOGr2Q8J/IvhT0o1qK0no4sbtSWiNU8hwIh7Ft20MPjzv7CKfyfjJt5mAp1XxmuUYMRcqo%2BHba5oqvaCPeTUjV/UXXTqjPkQb35obrDwBx/n9IBF//heBDjI1iItgZyiY5VcrbQIMoC3phRy9uqKHilkZFdtIy8SObh5SzSGc/SvAUQ%3D"},{"key":"shuqicjbody3","val":"wua=HIVW_i5gMN5l8R9BmJg43vs4iabD%2Frhh6WZNrIZKN4AufWlhrhe2k1Aj7u8ql%2BLI5kxsgID2mgH5R8k4OQWQtswaOoWynjcldACZqXPwVlYRyGtGV7dTy43j3AJL9lEUc2JlyDN9psKUBArzP1nAeWz39A5MtxmxVfJywoohiEMnQc3b2nXVkEiVORJoxbrTs30Wwf8u8CU8NK3xxf41gZz%2BeggXDFDRDerul3Cdn1I%2FNswg%3D&ua=&userId=2126732391&umidtoken=YMYNFJzbw9gDAM%2FPda4SRU5u&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&asac=2A20C07RJ9F51AOEFSNHDR&timestamp=1623937683&activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&sqSv=1.0&sign=bf05bd85f9666dada5240717b33cf7c2&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.1.2%26utdid%3DYMYNFJzbw9gDAM%252FPda4SRU5u%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2126732391%26sn%3D6F712C69081686161C925D3659D96F5D098D5185%26umidtoken%3DYMYNFJzbw9gDAM%252FPda4SRU5u%26msv%3D8.0.0%26brand%3DApple%26imei%3D610F9DCF317A560FCE881E7ADCD9353AC7D37D35%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone8P%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DFBF7B25C-3757-4E2F-BA99-3118A86D4A15"},{"key":"shuqijsspbody3","val":""},{"key":"shuqijsydurl3","val":""},{"key":"shuqijsydbody3","val":""},{"key":"shuqijsqdbody3","val":""},{"key":"shuqijsqdspyurl3","val":""},{"key":"shuqijsqdspbody3","val":""},{"key":"shuqijsrwbody3","val":""},{"key":"shuqijsfxbody3","val":""},{"key":"shuqijsbookurl3","val":""},{"key":"shuqijsbookbody3","val":""},{"key":"shuqijssprwurl3","val":""},{"key":"shuqiuserurl4","val":"https://ocean.shuqireader.com/api/jaccount/accountapi/v1/sapi/account/getBindinfo?userId=2126682680&sqSv=1.0&timestamp=1623937831&sign=7a0d03c923a4f6e819d0816f88ee53d4&key=sq_h5_gateway"},{"key":"shuqisyurl4","val":"https://render.shuqireader.com/load/resource?sdk=13.2.3&utdid=YMYNFJzbw9gDAM%2FPda4SRU5u&ustatus=0&first_placeid=111111&net_env=wifi&placeid=111111&user_id=2126682680&sn=CF36D963D3065C945040BF9E5C8D9B53160CB182&umidtoken=YMYNFJzbw9gDAM%2FPda4SRU5u&msv=8.0.0&brand=Apple&imei=B57A0D88C894F351A001B792128C6DED0117C2BE&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=iOS&ver=210301&mod=iPodtouch3G&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=EEC7CD1B-CEB5-48C1-A43C-1AC8013A942D"},{"key":"shuqisybody4","val":"appVer=4.3.6.0&imei=B57A0D88C894F351A001B792128C6DED0117C2BE&isNewUser=1&params=%7B%22resources%22%3A%7B%22ShuqiVipEntry%22%3A%7B%7D%2C%22personalCardConfig%22%3A%7B%7D%7D%7D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=1c98dad1953936406babdb399f8a9911&sn=CF36D963D3065C945040BF9E5C8D9B53160CB182&soft_id=21&timestamp=1623937748&user_id=2126682680&ver=210301"},{"key":"shuqispbody4","val":"_public=skinId%3D999%26idfa%3DEEC7CD1B-CEB5-48C1-A43C-1AC8013A942D%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26umidtoken%3DYMYNFJzbw9gDAM/Pda4SRU5u%26user_id%3D2126682680%26sn%3DCF36D963D3065C945040BF9E5C8D9B53160CB182%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3DB57A0D88C894F351A001B792128C6DED0117C2BE%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPodtouch3G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYMYNFJzbw9gDAM/Pda4SRU5u%26utype%3Dpre_vip%26sdk%3D13.2.3&deliveryId=525&key=sq_app_ad&miniWua=HHnB_ET9VhgDFbiSu/bYMKuuyEftBMH8PfBG5D5W0513WPjU%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=626&sign=C534D6D0D88EBD13277C61BEEF2F4D08&timestamp=1623937799&userId=2126682680&user_id=2126682680&wua=HIVW_2Jd%2BLCN2TwV%2BzOnFQyR9fjekLqBOC1VHVq1X9S6twgXNaLeu3Um7uIVeNOVjyZvs%2BjIMs6jq8mQ7zozJffh1COaf%2BFL64e9MpV9TpDoZa2oJGvvzuWNAp3W/GUPBX%2BxSzPYG2fQfUiGxu3WLrbnWuRASX%2BxDnrD9EZqfqdS%2B0Ikk4fic56XxquDuchK1BGQ5PngHntN2aQokkVRoKWozZsloWkQGDfbhOm2ICBrzr10%3D"},{"key":"shuqiscbody4","val":"_public=skinId%253D999%2526idfa%253DEEC7CD1B-CEB5-48C1-A43C-1AC8013A942D%2526ustatus%253D0%2526first_placeid%253D111111%2526net_env%253Dwifi%2526umidtoken%253DYMYNFJzbw9gDAM%252FPda4SRU5u%2526user_id%253D2126682680%2526sn%253DCF36D963D3065C945040BF9E5C8D9B53160CB182%2526placeid%253D111111%2526msv%253D8.0.0%2526brand%253DApple%2526imei%253DB57A0D88C894F351A001B792128C6DED0117C2BE%2526skinVersionPrefix%253D1%2526appVer%253D4.3.6.0%2526skinActiveColor%253D0F9970%2526manufacturer%253DApple%2526skinColor%253D23B383%2526platform%253DiOS%2526ver%253D210301%2526mod%253DiPodtouch3G%2526statusBarHeight%253D44.000000%2526skinVersion%253D1%2526wh%253D1242x2688%2526soft_id%253D21%2526utdid%253DYMYNFJzbw9gDAM%252FPda4SRU5u%2526utype%253Dpre_vip%2526sdk%253D13.2.3&key=and_log&readingList=%5B%7B%22startTime%22%3A1623937751%2C%22readObjType%22%3A1%2C%22attr%22%3A2%2C%22readObjId%22%3A%228374136%22%2C%22readChapterId%22%3A1476228%2C%22readingLen%22%3A24%7D%5D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=5FBE989341A55258CA12CE6A8D45C591&timestamp=1623937775&user_id=2126682680"},{"key":"shuqiydbody4","val":"_public=skinId%3D999%26idfa%3DEEC7CD1B-CEB5-48C1-A43C-1AC8013A942D%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26umidtoken%3DYMYNFJzbw9gDAM/Pda4SRU5u%26user_id%3D2126682680%26sn%3DCF36D963D3065C945040BF9E5C8D9B53160CB182%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3DB57A0D88C894F351A001B792128C6DED0117C2BE%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPodtouch3G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYMYNFJzbw9gDAM/Pda4SRU5u%26utype%3Dpre_vip%26sdk%3D13.2.3&deliveryId=707&key=sq_app_ad&miniWua=HHnB_KIjQ8E96wzBjzKgQPJBUJt%2B7jxhOzyylDVM9uQlacvI%3D&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=678&sign=D3EA240EC6E98326D2802163A48EC1C5&timestamp=1623937781&userId=2126682680&wua=HIVW_WGoTgDaiaBfR0fOQzXEfOnd%2BDVWQTnoLu8fIC3DB8c%2B/B68RLsVc79D4ne82ZFIOSzKIhDbTXSEfJ0a0sGNFP%2BUARD4FJSOWqXDYOlmfNQBZ/2xGdibptdJFwNLcgCmRXpYbKmvwc3uu/ZBscMtXFfdVlX6%2B6NkP3GGtqnClVJk6VHBpam6eZT1kPDIxL2oBV0w7JnZpmHg2BNpb0WGQSD%2BtggvBwEwBaaT8kXPh2tA%3D"},{"key":"shuqiqdbody4","val":"clientTimestamp=1623937794&position=501&userId=2126682680&signInType=1&wua=HIVW_4SPlaNMwnfH4f3BMM5HhLLj8sq0PXF297KDDUPuUVLyXcAkkGzQ%2FW8Pzt0ifpNT3uuuijh%2BkI4fsMQ1a8rp8UYSb%2FwIHv23JW8TQDK3etekED%2FaD32eQ3jlcxG7CPBhhGHvyjeKAKYlwWVk%2F7nHO%2BHK0U5geOT1KZorM8xiCPATBfUzgs%2B%2B6saI2bX1e%2BnPw8QGrQBrj4Y%2B%2BotSlU8InCU4QxZQHDM7ps8o%2FJvWtD4s%3D&ua=&miniWua=HHnB_NfgM5F7ByuE0%2F9SaWCNXxIFQnDoptiRAblmNPoZvg30%3D&umidtoken=YMYNFJzbw9gDAM%2FPda4SRU5u&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&sign=cf30605e89c1a070822580dbc8e41478&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.2.3%26utdid%3DYMYNFJzbw9gDAM%252FPda4SRU5u%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2126682680%26sn%3DCF36D963D3065C945040BF9E5C8D9B53160CB182%26umidtoken%3DYMYNFJzbw9gDAM%252FPda4SRU5u%26msv%3D8.0.0%26brand%3DApple%26imei%3DB57A0D88C894F351A001B792128C6DED0117C2BE%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPodtouch3G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DEEC7CD1B-CEB5-48C1-A43C-1AC8013A942D"},{"key":"shuqirwbody4","val":""},{"key":"shuqifxbody4","val":""},{"key":"shuqisprwurl4","val":"https://ocean.shuqireader.com/api/ad/adserver/v1/api/getAdInfo?appVer=4.3.6.0&placeId=111111&platform=iOS&requestSrc=h5&resourceId=626&timestamp=1623937832&user_id=2126682680&sqSv=1.0&sign=c6f4ce49862db654b6b545dce87b6dab&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.2.3%26utdid%3DYMYNFJzbw9gDAM%252FPda4SRU5u%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2126682680%26sn%3DCF36D963D3065C945040BF9E5C8D9B53160CB182%26umidtoken%3DYMYNFJzbw9gDAM%252FPda4SRU5u%26msv%3D8.0.0%26brand%3DApple%26imei%3DB57A0D88C894F351A001B792128C6DED0117C2BE%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPodtouch3G%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DEEC7CD1B-CEB5-48C1-A43C-1AC8013A942D"},{"key":"shuqijlbody4","val":"requestSrc=h5&userId=2126682680&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1623937803&sqSv=1.0&sign=d88493b7fae2ad3b8622ebb7442e4333&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.2.3%26utdid%3DYMYNFJzbw9gDAM%252FPda4SRU5u%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2126682680%26sn%3DCF36D963D3065C945040BF9E5C8D9B53160CB182%26umidtoken%3DYMYNFJzbw9gDAM%252FPda4SRU5u%26msv%3D8.0.0%26brand%3DApple%26imei%3DB57A0D88C894F351A001B792128C6DED0117C2BE%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPodtouch3G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DEEC7CD1B-CEB5-48C1-A43C-1AC8013A942D"},{"key":"shuqisqjlbody4","val":"src=&userId=2126682680&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1623937791&sqSv=1.0&sign=f00dbec92550f1ffc0ff4fec0d95e880&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.2.3%26utdid%3DYMYNFJzbw9gDAM%252FPda4SRU5u%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2126682680%26sn%3DCF36D963D3065C945040BF9E5C8D9B53160CB182%26umidtoken%3DYMYNFJzbw9gDAM%252FPda4SRU5u%26msv%3D8.0.0%26brand%3DApple%26imei%3DB57A0D88C894F351A001B792128C6DED0117C2BE%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPodtouch3G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DEEC7CD1B-CEB5-48C1-A43C-1AC8013A942D"},{"key":"shuqicjyurl4","val":"https://ocean.shuqireader.com/api/activity/activity/v1/lottery/info?timestamp=1623937834&userId=2126682680&activityId=311&sqSv=1.0&sign=73dcd57325ac030b854e0e9c45005aaa&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.2.3%26utdid%3DYMYNFJzbw9gDAM%252FPda4SRU5u%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2126682680%26sn%3DCF36D963D3065C945040BF9E5C8D9B53160CB182%26umidtoken%3DYMYNFJzbw9gDAM%252FPda4SRU5u%26msv%3D8.0.0%26brand%3DApple%26imei%3DB57A0D88C894F351A001B792128C6DED0117C2BE%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPodtouch3G%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DEEC7CD1B-CEB5-48C1-A43C-1AC8013A942D"},{"key":"shuqicjcsbody4","val":"_public=skinId%3D999%26idfa%3DEEC7CD1B-CEB5-48C1-A43C-1AC8013A942D%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26umidtoken%3DYMYNFJzbw9gDAM/Pda4SRU5u%26user_id%3D2126682680%26sn%3DCF36D963D3065C945040BF9E5C8D9B53160CB182%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3DB57A0D88C894F351A001B792128C6DED0117C2BE%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPodtouch3G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYMYNFJzbw9gDAM/Pda4SRU5u%26utype%3Dpre_vip%26sdk%3D13.2.3&deliveryId=711&key=sq_app_ad&miniWua=HHnB_M1hQ6o3613Zh7uLt7I6qYsZrnlK0WAquqGdbFaA5410%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=703&sign=69876BFBD63F5D3FFF9AB8E03BA736B1&timestamp=1623937808&userId=2126682680&user_id=2126682680&wua=HIVW_UxR6EUKWJkb85XYz8r4BdytdbWftdDHAUgB3bP8tEL5eX0qKVVbrX3u8lTbcufhPhAF5PGcS3CER7vuD4nUFqiSWbVW//8LO7H9JiAOHfmCORuknA7frSo8jakNrJWlBD0OuxVq3L6yslzpT/lB3maLJyyNlZo/5D1K76znRMvoFDXYnuEm9aO5G/5dEroBFlqb2B/SSTNf5z4EzzYjjigyLBNTidIk09EEk3hqPteU%3D"},{"key":"shuqicjbody4","val":"wua=HIVW_os52%2FFtPCjTc8u3B8fg5MDlCQgJgY9X6tiF7cMNojIAi15h%2B%2FYz%2FerLq4%2Bwspn6tSzsVq2JbPfaaUnRNfllj4PwnfF1QkOCB6yRQeDrw3cGVPPDeMRJcnTAw1i6ew%2FF5SdiM7exz1%2B45PdJzIdPnwb73%2FoBDA7vQg4k2hZOkJTm%2F6aQMUCqQcL0jLm6X6VI0TGVE%2B4Pc5goCB2oaptWIdqcO%2Be%2FlvNn5oO3OQL1K0hA%3D&ua=&userId=2126682680&umidtoken=YMYNFJzbw9gDAM%2FPda4SRU5u&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&asac=2A20C07RJ9F51AOEFSNHDR&timestamp=1623937811&activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&sqSv=1.0&sign=b96e65822dfcd54f22484eed073007ab&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.2.3%26utdid%3DYMYNFJzbw9gDAM%252FPda4SRU5u%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2126682680%26sn%3DCF36D963D3065C945040BF9E5C8D9B53160CB182%26umidtoken%3DYMYNFJzbw9gDAM%252FPda4SRU5u%26msv%3D8.0.0%26brand%3DApple%26imei%3DB57A0D88C894F351A001B792128C6DED0117C2BE%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPodtouch3G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DEEC7CD1B-CEB5-48C1-A43C-1AC8013A942D"},{"key":"shuqijsspbody4","val":""},{"key":"shuqijsydurl4","val":""},{"key":"shuqijsydbody4","val":""},{"key":"shuqijsqdbody4","val":""},{"key":"shuqijsqdspyurl4","val":""},{"key":"shuqijsqdspbody4","val":""},{"key":"shuqijsrwbody4","val":""},{"key":"shuqijsfxbody4","val":""},{"key":"shuqijsbookurl4","val":""},{"key":"shuqijsbookbody4","val":""},{"key":"shuqijssprwurl4","val":""},{"key":"shuqiuserurl5","val":"https://ocean.shuqireader.com/api/jaccount/accountapi/v1/sapi/account/getBindinfo?userId=2128273334&sqSv=1.0&timestamp=1623937917&sign=d4116cfaa63a1438b99692fa2bedd875&key=sq_h5_gateway"},{"key":"shuqisyurl5","val":"https://render.shuqireader.com/load/resource?sdk=13.1.3&utdid=YMc0osYacGkDAPwQxHj1ZH1f&ustatus=0&first_placeid=111111&net_env=wifi&placeid=111111&user_id=2128273334&sn=683B7C086DF686C7A6A292B293F654AE5D672ABB&umidtoken=YMc0osYacGkDAPwQxHj1ZH1f&msv=8.0.0&brand=Apple&imei=47B2E43A4DC4E5AAE7F9D4A8E6E4EC53DF83EC3D&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=iOS&ver=210301&mod=UnknowniPad&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=64E7B731-8F1F-49CD-A355-1579C49C74C6"},{"key":"shuqisybody5","val":"appVer=4.3.6.0&imei=47B2E43A4DC4E5AAE7F9D4A8E6E4EC53DF83EC3D&isNewUser=1&params=%7B%22resources%22%3A%7B%22ShuqiVipEntry%22%3A%7B%7D%2C%22personalCardConfig%22%3A%7B%7D%7D%7D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=7b4252bf1fe06586644c4d5317010c4e&sn=683B7C086DF686C7A6A292B293F654AE5D672ABB&soft_id=21&timestamp=1623937879&user_id=2128273334&ver=210301"},{"key":"shuqispbody5","val":"_public=skinId%3D999%26idfa%3D64E7B731-8F1F-49CD-A355-1579C49C74C6%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26umidtoken%3DYMc0osYacGkDAPwQxHj1ZH1f%26user_id%3D2128273334%26sn%3D683B7C086DF686C7A6A292B293F654AE5D672ABB%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D47B2E43A4DC4E5AAE7F9D4A8E6E4EC53DF83EC3D%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYMc0osYacGkDAPwQxHj1ZH1f%26utype%3Dpre_vip%26sdk%3D13.1.3&deliveryId=525&key=sq_app_ad&miniWua=HHnB_zWgjMwFbkIgV5K6Zv1Ts97fHHxZwI0JbMLj6JOfMk6E%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=626&sign=C5F72BAE2CCCF4A869FED3F347712F44&timestamp=1623937892&userId=2128273334&user_id=2128273334&wua=HIVW_FRizsqLEsPKViGPbPE5RyKMc1rq%2BpfGB/QUWWa/tBEDUdCNMuE4aiEplwMxKuAc5xLdLY5kvLyl5DX6/AIByr4yvyJa/Homs11StV2MEx40CkvymY0X5h0S9Iy8pUeM3xM4FUCtAVH5LtjKgSctXu09xplZHfq8dn08eAB/8CA95P7qR8huJiTyRvxOBOvRBsGvHAArd78/8pS3i7Wn4IQSJJJKAcZRiBpnvrUCSd8g%3D"},{"key":"shuqiscbody5","val":"_public=utype%253Dpre_vip%2526idfa%253D64E7B731-8F1F-49CD-A355-1579C49C74C6%2526ustatus%253D0%2526first_placeid%253D111111%2526net_env%253Dwifi%2526umidtoken%253DYMc0osYacGkDAPwQxHj1ZH1f%2526user_id%253D2128273334%2526sn%253D683B7C086DF686C7A6A292B293F654AE5D672ABB%2526placeid%253D111111%2526msv%253D8.0.0%2526brand%253DApple%2526imei%253D47B2E43A4DC4E5AAE7F9D4A8E6E4EC53DF83EC3D%2526skinVersionPrefix%253D1%2526appVer%253D4.3.6.0%2526skinActiveColor%253D0F9970%2526manufacturer%253DApple%2526statusBarHeight%253D44.000000%2526skinColor%253D23B383%2526platform%253DiOS%2526ver%253D210301%2526mod%253DUnknowniPad%2526skinVersion%253D1%2526wh%253D1242x2688%2526skinId%253D999%2526utdid%253DYMc0osYacGkDAPwQxHj1ZH1f%2526soft_id%253D21%2526sdk%253D13.1.3&key=and_log&readingList=%5B%7B%22startTime%22%3A1623937846%2C%22readObjType%22%3A1%2C%22attr%22%3A2%2C%22readObjId%22%3A%228374136%22%2C%22readChapterId%22%3A1476228%2C%22readingLen%22%3A32%7D%5D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=495B1AABDEC6BEA0B7210FCA97C9F89F&timestamp=1623937879&user_id=2128273334"},{"key":"shuqiydbody5","val":"_public=utype%3Dpre_vip%26idfa%3D64E7B731-8F1F-49CD-A355-1579C49C74C6%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26umidtoken%3DYMc0osYacGkDAPwQxHj1ZH1f%26user_id%3D2128273334%26sn%3D683B7C086DF686C7A6A292B293F654AE5D672ABB%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D47B2E43A4DC4E5AAE7F9D4A8E6E4EC53DF83EC3D%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DUnknowniPad%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26utdid%3DYMc0osYacGkDAPwQxHj1ZH1f%26soft_id%3D21%26sdk%3D13.1.3&deliveryId=707&key=sq_app_ad&miniWua=HHnB_lDKHrbsv7ErsOxFPkHGlJHU7Pvv8YrS6JHwrUI%2BOmhs%3D&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=678&sign=334B05A1E7B21C54F1B8DFBF35A40310&timestamp=1623937876&userId=2128273334&wua=HIVW_D0Q5eal%2BFK7M4izjRxlSpiXoLE4inKo1z/4VxSBc6zEXYZWzAcG2ZPZGny8grcH3BoiHSllvrEId5TNjeqO/XrJ5to0U3fUkZA6Bim7b65ujJ70rsPKHIzewmkJflvFwlRLnCf0SUr99NWV4esdbrkcii8l1ZOavBhYgvMUPwbemo6R/fnJvXfJ/cWDQ%2BrvOAIA15XXxtLXb11vvjqNtHdHeS/zsil3oE%2BC9OLDvf8I%3D"},{"key":"shuqiqdbody5","val":"clientTimestamp=1623937884&position=501&userId=2128273334&signInType=1&wua=HIVW_O6xprM2WYB3TOCuX0IeEenWPA9rkvVBGJjNxlgbfhaYK2ozCYqoTn%2FTRwVGjhUWKLTUPAllByFBE%2BQhEeCibh5L%2FK%2FlxQ9JtKluFIpq5euaOKMwg3zEOtGVtDeaIjfY5oJLSnkAgsr62Sc2Fl4pJ5kkU264vf2X1DI9AfFId2QvhxcBjtwhrDCTxrSlPWQ2t9GbnZ7l4veWNLFwg5dPDYRZDXhQQfj3ej51ePP%2BCuCk%3D&ua=&miniWua=HHnB_FqJ7yT3p%2BTUZGkMGyLD3oZNv80SysCPBvfChZ%2BKRUVU%3D&umidtoken=YMc0osYacGkDAPwQxHj1ZH1f&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&sign=875560bbcbe074c6f8ab85cdc11d43f0&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.1.3%26utdid%3DYMc0osYacGkDAPwQxHj1ZH1f%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2128273334%26sn%3D683B7C086DF686C7A6A292B293F654AE5D672ABB%26umidtoken%3DYMc0osYacGkDAPwQxHj1ZH1f%26msv%3D8.0.0%26brand%3DApple%26imei%3D47B2E43A4DC4E5AAE7F9D4A8E6E4EC53DF83EC3D%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D64E7B731-8F1F-49CD-A355-1579C49C74C6"},{"key":"shuqirwbody5","val":""},{"key":"shuqifxbody5","val":""},{"key":"shuqisprwurl5","val":"https://ocean.shuqireader.com/api/ad/adserver/v1/api/getAdInfo?appVer=4.3.6.0&placeId=111111&platform=iOS&requestSrc=h5&resourceId=626&timestamp=1623937917&user_id=2128273334&sqSv=1.0&sign=426c44010397f04ab0f289e57c148fd2&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.1.3%26utdid%3DYMc0osYacGkDAPwQxHj1ZH1f%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2128273334%26sn%3D683B7C086DF686C7A6A292B293F654AE5D672ABB%26umidtoken%3DYMc0osYacGkDAPwQxHj1ZH1f%26msv%3D8.0.0%26brand%3DApple%26imei%3D47B2E43A4DC4E5AAE7F9D4A8E6E4EC53DF83EC3D%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D64E7B731-8F1F-49CD-A355-1579C49C74C6"},{"key":"shuqijlbody5","val":"requestSrc=h5&userId=2128273334&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1623937898&sqSv=1.0&sign=71940fc35e55390d8c70d14fb3c08674&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.1.3%26utdid%3DYMc0osYacGkDAPwQxHj1ZH1f%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2128273334%26sn%3D683B7C086DF686C7A6A292B293F654AE5D672ABB%26umidtoken%3DYMc0osYacGkDAPwQxHj1ZH1f%26msv%3D8.0.0%26brand%3DApple%26imei%3D47B2E43A4DC4E5AAE7F9D4A8E6E4EC53DF83EC3D%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D64E7B731-8F1F-49CD-A355-1579C49C74C6"},{"key":"shuqisqjlbody5","val":"src=&userId=2128273334&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1623937887&sqSv=1.0&sign=8124c6b27a1344f086ab6a79226c3d98&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.1.3%26utdid%3DYMc0osYacGkDAPwQxHj1ZH1f%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2128273334%26sn%3D683B7C086DF686C7A6A292B293F654AE5D672ABB%26umidtoken%3DYMc0osYacGkDAPwQxHj1ZH1f%26msv%3D8.0.0%26brand%3DApple%26imei%3D47B2E43A4DC4E5AAE7F9D4A8E6E4EC53DF83EC3D%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D64E7B731-8F1F-49CD-A355-1579C49C74C6"},{"key":"shuqicjyurl5","val":"https://ocean.shuqireader.com/api/activity/activity/v1/lottery/info?timestamp=1623937919&userId=2128273334&activityId=311&sqSv=1.0&sign=82dae30a891f3a7ab87be85cce9377dc&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.1.3%26utdid%3DYMc0osYacGkDAPwQxHj1ZH1f%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2128273334%26sn%3D683B7C086DF686C7A6A292B293F654AE5D672ABB%26umidtoken%3DYMc0osYacGkDAPwQxHj1ZH1f%26msv%3D8.0.0%26brand%3DApple%26imei%3D47B2E43A4DC4E5AAE7F9D4A8E6E4EC53DF83EC3D%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D64E7B731-8F1F-49CD-A355-1579C49C74C6"},{"key":"shuqicjcsbody5","val":"_public=skinId%3D999%26idfa%3D64E7B731-8F1F-49CD-A355-1579C49C74C6%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26umidtoken%3DYMc0osYacGkDAPwQxHj1ZH1f%26user_id%3D2128273334%26sn%3D683B7C086DF686C7A6A292B293F654AE5D672ABB%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D47B2E43A4DC4E5AAE7F9D4A8E6E4EC53DF83EC3D%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYMc0osYacGkDAPwQxHj1ZH1f%26utype%3Dpre_vip%26sdk%3D13.1.3&deliveryId=711&key=sq_app_ad&miniWua=HHnB_oncqIXTdgs64MLOOcMx4cjm1wt1o1ryD7jAp9g1Kukc%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=703&sign=70DBBC60F2172B6EFE1B9CE3F305CBAF&timestamp=1623937905&userId=2128273334&user_id=2128273334&wua=HIVW_kCoZAygn5ZsG0ykNPfaLjW9ZbpZMGBLUbe8s0/5TZe5l7Z/NBOcZggVLRyCwnYC5zLD%2BKNbXr/DSvnHvuXqo3BIZeOGdb25dyGag6KuP%2BTK3HKLd9W2vG47a5dLa0PzQN74w1AYj1/irdsutTvk6fIRUZ3M8rJy7rD1cXUM6N03jcXQVfziKXEcwth9mj%2BoLugYDvetomeZL69CCTJoH9hfrYq0N%2B9qrDQi2NAHdZMY%3D"},{"key":"shuqicjbody5","val":"wua=HIVW_xxa4dUjMxG5l9FrOI%2BNH0NTNgYNBsCEwE9VlpoM4o%2F7%2FOtK8hzHNoqInhnauEcwaItCyMCRCEMm1ggy7d70EiWO3ALFbHTDHFddybiJL77oUTCcF%2B9NI21pE08KV4L5yOqugxwu7AZs5yRF77xKrus2ZS2k198WFiTGcXFJzisbakWbWnzzN1M0%2FiOfMANp6wmb7u%2FbSjMwNopvsJYzvt48tRdYcA2r%2FBuVqTAc2heM%3D&ua=&userId=2128273334&umidtoken=YMc0osYacGkDAPwQxHj1ZH1f&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&asac=2A20C07RJ9F51AOEFSNHDR&timestamp=1623937908&activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&sqSv=1.0&sign=6b001fe5d864858cf22b885d208e719f&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.1.3%26utdid%3DYMc0osYacGkDAPwQxHj1ZH1f%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2128273334%26sn%3D683B7C086DF686C7A6A292B293F654AE5D672ABB%26umidtoken%3DYMc0osYacGkDAPwQxHj1ZH1f%26msv%3D8.0.0%26brand%3DApple%26imei%3D47B2E43A4DC4E5AAE7F9D4A8E6E4EC53DF83EC3D%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D64E7B731-8F1F-49CD-A355-1579C49C74C6"},{"key":"shuqijsspbody5","val":""},{"key":"shuqijsydurl5","val":""},{"key":"shuqijsydbody5","val":""},{"key":"shuqijsqdbody5","val":""},{"key":"shuqijsqdspyurl5","val":""},{"key":"shuqijsqdspbody5","val":""},{"key":"shuqijsrwbody5","val":""},{"key":"shuqijsfxbody5","val":""},{"key":"shuqijsbookurl5","val":""},{"key":"shuqijsbookbody5","val":""},{"key":"shuqijssprwurl5","val":""},{"key":"shuqiuserurl6","val":"https://ocean.shuqireader.com/api/jaccount/accountapi/v1/sapi/account/getBindinfo?userId=2127725925&sqSv=1.0&timestamp=1623938008&sign=651ced4ba918ac81cba7fb0b7409ca1f&key=sq_h5_gateway"},{"key":"shuqisyurl6","val":"https://render.shuqireader.com/load/resource?sdk=13.0&utdid=YMc0rQGipVEDAGkyBlWP5xla&ustatus=0&first_placeid=111111&net_env=wifi&placeid=111111&user_id=2127725925&sn=5CEBD86D99AF251A043183E640A566CB68154BDA&umidtoken=YMc0rQGipVEDAGkyBlWP5xla&msv=8.0.0&brand=Apple&imei=6749B6EF98ED26FB25D1FFBFAAD4920AAF689007&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=iOS&ver=210301&mod=iPad4G&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=7D3302A8-4F59-42C7-A8F9-A030D376077B"},{"key":"shuqisybody6","val":"appVer=4.3.6.0&imei=6749B6EF98ED26FB25D1FFBFAAD4920AAF689007&isNewUser=1&params=%7B%22resources%22%3A%7B%22ShuqiVipEntry%22%3A%7B%7D%2C%22personalCardConfig%22%3A%7B%7D%7D%7D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=12c9671fd2587af0f39d0346b310fd3e&sn=5CEBD86D99AF251A043183E640A566CB68154BDA&soft_id=21&timestamp=1623937933&user_id=2127725925&ver=210301"},{"key":"shuqispbody6","val":"_public=skinId%3D999%26idfa%3D7D3302A8-4F59-42C7-A8F9-A030D376077B%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26umidtoken%3DYMc0rQGipVEDAGkyBlWP5xla%26user_id%3D2127725925%26sn%3D5CEBD86D99AF251A043183E640A566CB68154BDA%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D6749B6EF98ED26FB25D1FFBFAAD4920AAF689007%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPad4G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYMc0rQGipVEDAGkyBlWP5xla%26utype%3Dpre_vip%26sdk%3D13.0&deliveryId=525&key=sq_app_ad&miniWua=HHnB_1fksKKwXGgzet0ZNxqBaogoCy/fjX1mg25cgZNo/q6Q%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=626&sign=BFD7E40C3DA8985192654BA995A8ED10&timestamp=1623937980&userId=2127725925&user_id=2127725925&wua=HIVW_8I%2BBr4/cy8N4SEMwD%2ByVxzDk2egEDVhDF5GkfiD9E8g4liiLIjbN4xBftoRdgfCa30T5UQ2rJlsEhF/L6ce92Vad16wL%2BDfvtQ0dHzA0qeloyQqjBcjwAwJQoim/DYMQOWR6R9V/qZ/UPhvbqfsVaYVOJ51omR6oeWncq1iavgmNV4JGqrEti%2BLk6tbCksTNFbGY9YBb548OLCbUtOR%2BWvvTfRPtrzfIB4s6ZWFBTLk%3D"},{"key":"shuqiscbody6","val":"_public=skinId%253D999%2526idfa%253D7D3302A8-4F59-42C7-A8F9-A030D376077B%2526ustatus%253D0%2526first_placeid%253D111111%2526net_env%253Dwifi%2526umidtoken%253DYMc0rQGipVEDAGkyBlWP5xla%2526user_id%253D2127725925%2526sn%253D5CEBD86D99AF251A043183E640A566CB68154BDA%2526placeid%253D111111%2526msv%253D8.0.0%2526brand%253DApple%2526imei%253D6749B6EF98ED26FB25D1FFBFAAD4920AAF689007%2526skinVersionPrefix%253D1%2526appVer%253D4.3.6.0%2526skinActiveColor%253D0F9970%2526manufacturer%253DApple%2526skinColor%253D23B383%2526platform%253DiOS%2526ver%253D210301%2526mod%253DiPad4G%2526statusBarHeight%253D44.000000%2526skinVersion%253D1%2526wh%253D1242x2688%2526soft_id%253D21%2526utdid%253DYMc0rQGipVEDAGkyBlWP5xla%2526utype%253Dpre_vip%2526sdk%253D13.0&key=and_log&readingList=%5B%7B%22startTime%22%3A1623937937%2C%22readObjType%22%3A1%2C%22attr%22%3A2%2C%22readObjId%22%3A%228299741%22%2C%22readChapterId%22%3A1362292%2C%22readingLen%22%3A32%7D%5D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=625CC1EBA84212282E278287D6D80B7D&timestamp=1623937969&user_id=2127725925"},{"key":"shuqiydbody6","val":"_public=skinId%3D999%26idfa%3D7D3302A8-4F59-42C7-A8F9-A030D376077B%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26umidtoken%3DYMc0rQGipVEDAGkyBlWP5xla%26user_id%3D2127725925%26sn%3D5CEBD86D99AF251A043183E640A566CB68154BDA%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D6749B6EF98ED26FB25D1FFBFAAD4920AAF689007%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPad4G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYMc0rQGipVEDAGkyBlWP5xla%26utype%3Dpre_vip%26sdk%3D13.0&deliveryId=707&key=sq_app_ad&miniWua=HHnB_nNGNkwYBjJhMIpZqw2p9SwiI2YQJttppifS4As50H4s%3D&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=678&sign=61B7F28BAB011C561E8982FE25CC1440&timestamp=1623937966&userId=2127725925&wua=HIVW_45o4G0ZsClt3ZanVc7xI0x7uG6ucxPJwCY5TgaWSDl7DAk5B5e8JVv4QSHaBd06/adhtc06%2BLLdK65bnnd0Ruicklse5JGpYEPy5mqaB4Ul%2BfvsknWJQm7t0R%2BNr/YT9EmqseN8PL9mDWUOoloZe7944bOHjWGzUbGM3yz6uzcYzcr4s1P1z8D6wKBQ%2BUHoLNsnLDAKsPUdqEMkTHHQjFjj0UG6nY1WRuefCADkfsYg%3D"},{"key":"shuqiqdbody6","val":"clientTimestamp=1623937989&position=501&userId=2127725925&signInType=1&wua=HIVW_kOyAkp2J%2BKgZGAuKU45DPNFqK9EV7gDvjVy%2Fialn0dsyKLRBk5uHHWPi0IgfKG62FqapHCIHf2WyPIanso7J2mg6ivNgMK2n%2BIcS7ROl4gySIuDFpjmrrNDYa5dcEwFwPtMdzHzqD0KWibqFsHsm4gWZ3SW9q9OUpkXsW%2BUMkRPC5fl7J6E%2Fg2DX4A0I6m6BXh79CubkRRQ8qi5dCY3Y0cgPYn03XhX%2FKWtQANvr2hU%3D&ua=&miniWua=HHnB_fKhq8l2vdfRPvZmdiHY0OTUepkyHeB0UlLBPJzboCcE%3D&umidtoken=YMc0rQGipVEDAGkyBlWP5xla&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&sign=28005f30ffed47656979ba1288248454&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.0%26utdid%3DYMc0rQGipVEDAGkyBlWP5xla%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2127725925%26sn%3D5CEBD86D99AF251A043183E640A566CB68154BDA%26umidtoken%3DYMc0rQGipVEDAGkyBlWP5xla%26msv%3D8.0.0%26brand%3DApple%26imei%3D6749B6EF98ED26FB25D1FFBFAAD4920AAF689007%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad4G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D7D3302A8-4F59-42C7-A8F9-A030D376077B"},{"key":"shuqirwbody6","val":""},{"key":"shuqifxbody6","val":""},{"key":"shuqisprwurl6","val":"https://ocean.shuqireader.com/api/ad/adserver/v1/api/getAdInfo?appVer=4.3.6.0&placeId=111111&platform=iOS&requestSrc=h5&resourceId=626&timestamp=1623938008&user_id=2127725925&sqSv=1.0&sign=0410072e3a95595e4736392b8334aaf8&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.0%26utdid%3DYMc0rQGipVEDAGkyBlWP5xla%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2127725925%26sn%3D5CEBD86D99AF251A043183E640A566CB68154BDA%26umidtoken%3DYMc0rQGipVEDAGkyBlWP5xla%26msv%3D8.0.0%26brand%3DApple%26imei%3D6749B6EF98ED26FB25D1FFBFAAD4920AAF689007%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad4G%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D7D3302A8-4F59-42C7-A8F9-A030D376077B"},{"key":"shuqijlbody6","val":"requestSrc=h5&userId=2127725925&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1623937990&sqSv=1.0&sign=d60ac90cb5aa72cc299861ea63c5625d&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.0%26utdid%3DYMc0rQGipVEDAGkyBlWP5xla%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2127725925%26sn%3D5CEBD86D99AF251A043183E640A566CB68154BDA%26umidtoken%3DYMc0rQGipVEDAGkyBlWP5xla%26msv%3D8.0.0%26brand%3DApple%26imei%3D6749B6EF98ED26FB25D1FFBFAAD4920AAF689007%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad4G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D7D3302A8-4F59-42C7-A8F9-A030D376077B"},{"key":"shuqisqjlbody6","val":"src=&userId=2127725925&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1623937976&sqSv=1.0&sign=6fe840abe701a6007b9cb37f4a4fa458&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.0%26utdid%3DYMc0rQGipVEDAGkyBlWP5xla%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2127725925%26sn%3D5CEBD86D99AF251A043183E640A566CB68154BDA%26umidtoken%3DYMc0rQGipVEDAGkyBlWP5xla%26msv%3D8.0.0%26brand%3DApple%26imei%3D6749B6EF98ED26FB25D1FFBFAAD4920AAF689007%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad4G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D7D3302A8-4F59-42C7-A8F9-A030D376077B"},{"key":"shuqicjyurl6","val":"https://ocean.shuqireader.com/api/activity/activity/v1/lottery/info?timestamp=1623938009&userId=2127725925&activityId=311&sqSv=1.0&sign=2c7f15a9c70151ac3ea09f21658a5968&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.0%26utdid%3DYMc0rQGipVEDAGkyBlWP5xla%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2127725925%26sn%3D5CEBD86D99AF251A043183E640A566CB68154BDA%26umidtoken%3DYMc0rQGipVEDAGkyBlWP5xla%26msv%3D8.0.0%26brand%3DApple%26imei%3D6749B6EF98ED26FB25D1FFBFAAD4920AAF689007%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad4G%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D7D3302A8-4F59-42C7-A8F9-A030D376077B"},{"key":"shuqicjcsbody6","val":"_public=skinId%3D999%26idfa%3D7D3302A8-4F59-42C7-A8F9-A030D376077B%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26umidtoken%3DYMc0rQGipVEDAGkyBlWP5xla%26user_id%3D2127725925%26sn%3D5CEBD86D99AF251A043183E640A566CB68154BDA%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D6749B6EF98ED26FB25D1FFBFAAD4920AAF689007%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPad4G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYMc0rQGipVEDAGkyBlWP5xla%26utype%3Dpre_vip%26sdk%3D13.0&deliveryId=711&key=sq_app_ad&miniWua=HHnB_%2BlzuKG1UkbKFSLmct2GzSNY58sfnSww7aLs8wuZMTqk%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=703&sign=2115ACA40E19E34027A330A3B68531E1&timestamp=1623937995&userId=2127725925&user_id=2127725925&wua=HIVW_v07VSlzXvJIZwedjcjceD9OTYocGH5WH/pFntLfpVUSytQ6ys8MHFHF%2BApI/soE9yT9%2BfXGEHb1wpt/GpLnWB2D2Ra8yVAawPRg51rvD1nuOQlIx1wGc5fVTbc3KZFbAZxN0fHI1kuD0HAwLwW1gh4PK7Y0wEG6FLFde5UwMs0LaaXnd6WbDeSOU%2BjLIpE%2BMKMoa1oVqzccUs4ZRB0DinQ4vbpXemAzHVOeGR9AlED4%3D"},{"key":"shuqicjbody6","val":"wua=HIVW_xW5pdJjIXWVWxptY3WKS3fvTmx1RZwGQC0YerMO7dUtgQ0b9sxXeLgqhinPHE%2FITkjif4k9Qdcv%2BOsPt2QCbt%2BeCzvVgck0KPI0psqt68stlqW7ixcSxUoxMnLfjBbLsYKj4yM3ZYRTcgLnADWqfGiHIMoLIL0IGgjGLEd0BF5uC5l6%2BS28sAMi3X8P5JykBt8VU%2FLenK9sn5mhKUOVEINJwGQ3e%2F6%2BF15SEWm5eiws%3D&ua=&userId=2127725925&umidtoken=YMc0rQGipVEDAGkyBlWP5xla&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&asac=2A20C07RJ9F51AOEFSNHDR&timestamp=1623937997&activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&sqSv=1.0&sign=51b14da4313424905597ca41430445d3&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.0%26utdid%3DYMc0rQGipVEDAGkyBlWP5xla%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2127725925%26sn%3D5CEBD86D99AF251A043183E640A566CB68154BDA%26umidtoken%3DYMc0rQGipVEDAGkyBlWP5xla%26msv%3D8.0.0%26brand%3DApple%26imei%3D6749B6EF98ED26FB25D1FFBFAAD4920AAF689007%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad4G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D7D3302A8-4F59-42C7-A8F9-A030D376077B"},{"key":"shuqijsspbody6","val":""},{"key":"shuqijsydurl6","val":""},{"key":"shuqijsydbody6","val":""},{"key":"shuqijsqdbody6","val":""},{"key":"shuqijsqdspyurl6","val":""},{"key":"shuqijsqdspbody6","val":""},{"key":"shuqijsrwbody6","val":""},{"key":"shuqijsfxbody6","val":""},{"key":"shuqijsbookurl6","val":""},{"key":"shuqijsbookbody6","val":""},{"key":"shuqijssprwurl6","val":""},{"key":"shuqiuserurl7","val":"https://ocean.shuqireader.com/api/jaccount/accountapi/v1/sapi/account/getBindinfo?userId=2124869252&sqSv=1.0&timestamp=1623938112&sign=b04ec176c6929e9bb9158b92dacd29a3&key=sq_h5_gateway"},{"key":"shuqisyurl7","val":"https://render.shuqireader.com/load/resource?sdk=13.5.1&utdid=YMc0uByBxNgDAPgwbaSTGNJ5&ustatus=0&first_placeid=111111&net_env=4g&placeid=111111&user_id=2124869252&sn=1896E2575FBF99CBF1D04FE86350318C18A972F7&umidtoken=YMc0uByBxNgDAPgwbaSTGNJ5&msv=8.0.0&brand=Apple&imei=5908FF86347C435101D6CD9651AC9B5B0A2130CD&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&session=&skinColor=23B383&platform=iOS&ver=210301&mod=iPad3G&statusBarHeight=44.000000&skinVersion=1&wh=1242x2688&soft_id=21&utype=pre_vip&skinId=999&idfa=FD881D9C-4AE8-4C56-B32C-75A3AC1D4111"},{"key":"shuqisybody7","val":"appVer=4.3.6.0&imei=5908FF86347C435101D6CD9651AC9B5B0A2130CD&isNewUser=1&params=%7B%22resources%22%3A%7B%22ShuqiVipEntry%22%3A%7B%7D%2C%22personalCardConfig%22%3A%7B%7D%7D%7D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=e99a315d360cd78d90022284c9e24b6b&sn=1896E2575FBF99CBF1D04FE86350318C18A972F7&soft_id=21&timestamp=1623938067&user_id=2124869252&ver=210301"},{"key":"shuqispbody7","val":"_public=skinId%3D999%26idfa%3DFD881D9C-4AE8-4C56-B32C-75A3AC1D4111%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26umidtoken%3DYMc0uByBxNgDAPgwbaSTGNJ5%26user_id%3D2124869252%26sn%3D1896E2575FBF99CBF1D04FE86350318C18A972F7%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D5908FF86347C435101D6CD9651AC9B5B0A2130CD%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPad3G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYMc0uByBxNgDAPgwbaSTGNJ5%26utype%3Dpre_vip%26sdk%3D13.5.1&deliveryId=525&key=sq_app_ad&miniWua=HHnB_HQ%2BqQngFUEpW7ksTTHvbUQysJiQnsi8Q%2BtjxfEV/3g8%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=626&sign=A616ACE252A26CFEE34CA35DD177C6DF&timestamp=1623938090&userId=2124869252&user_id=2124869252&wua=HIVW_xW5pdJjIXWVWxptY3WKS3XCm9I65mNeWE2VN8es9Vdn2dcoy7l7KWrFRt9IE8gzFY4twQDVcSrdKn%2BGBf/PQCTD6CmJW%2BIowhEx7IjkgVPjgQyXMTd41sp4J0xoGnQWXUYWRE30JZEgfKJSk2jamwGV7PNLzPQc3D9FwPEArHtdu%2BmPYa7UhSJIVvlQm35JvnJ/gLXeZ4BnJm9ObDKEupU3%2B39%2BTrYdUVRzM9UKPanE%3D"},{"key":"shuqiscbody7","val":"_public=skinId%253D999%2526idfa%253DFD881D9C-4AE8-4C56-B32C-75A3AC1D4111%2526ustatus%253D0%2526first_placeid%253D111111%2526net_env%253D4g%2526umidtoken%253DYMc0uByBxNgDAPgwbaSTGNJ5%2526user_id%253D2124869252%2526sn%253D1896E2575FBF99CBF1D04FE86350318C18A972F7%2526placeid%253D111111%2526msv%253D8.0.0%2526brand%253DApple%2526imei%253D5908FF86347C435101D6CD9651AC9B5B0A2130CD%2526skinVersionPrefix%253D1%2526appVer%253D4.3.6.0%2526skinActiveColor%253D0F9970%2526manufacturer%253DApple%2526skinColor%253D23B383%2526platform%253DiOS%2526ver%253D210301%2526mod%253DiPad3G%2526statusBarHeight%253D44.000000%2526skinVersion%253D1%2526wh%253D1242x2688%2526soft_id%253D21%2526utdid%253DYMc0uByBxNgDAPgwbaSTGNJ5%2526utype%253Dpre_vip%2526sdk%253D13.5.1&key=and_log&readingList=%5B%7B%22startTime%22%3A1623938029%2C%22readObjType%22%3A1%2C%22attr%22%3A2%2C%22readObjId%22%3A%228299741%22%2C%22readChapterId%22%3A1362294%2C%22readingLen%22%3A37%7D%5D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=9F22C68FFA9F7EFD591DE10E8175351F&timestamp=1623938067&user_id=2124869252"},{"key":"shuqiydbody7","val":"_public=skinId%3D999%26idfa%3DFD881D9C-4AE8-4C56-B32C-75A3AC1D4111%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26umidtoken%3DYMc0uByBxNgDAPgwbaSTGNJ5%26user_id%3D2124869252%26sn%3D1896E2575FBF99CBF1D04FE86350318C18A972F7%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D5908FF86347C435101D6CD9651AC9B5B0A2130CD%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPad3G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYMc0uByBxNgDAPgwbaSTGNJ5%26utype%3Dpre_vip%26sdk%3D13.5.1&deliveryId=707&key=sq_app_ad&miniWua=HHnB_LmcC34OCMdsLrJ%2B6AReWE2Cj46Sva0RtasjOZZ8LbFk%3D&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=678&sign=87E215816A2372E0C90ED21C32B8E98D&timestamp=1623938061&userId=2124869252&wua=HIVW_yeK0/74asdHYaqEdH2GhuD59Zz8MH9%2Bav2LQUChM19aZC0EXofdHYpLdpne5CnNfxilUqePbcZcLB8i0BV9MWPIBqQDafxncE%2BuBVIkKFtWFt3d/vTlVZzOH%2Bq4hEhofkqh0dsRzUdqvZuxqiOH90thQdIYtNS/YTeouglYqz52WIe83H4ogcm67NZTBhCJwyaeDF9YnPl6J6HgrXLrWMS7g5BXMdIjC0tbPJJbj5vw%3D"},{"key":"shuqiqdbody7","val":"clientTimestamp=1623938071&position=501&userId=2124869252&signInType=1&wua=HIVW_v07VSlzXvJIZwedjcjceDzeB5W23czeY3LfPo7jWQGinTrkPxGUpGYr9AfLibN7oSTQVbYJvK%2B5bHqfkKUZ3y7CJ%2BIQTfjONfpdQXljlvAps95cB8jd2VogqFWaCeZVuS7TpwcscOutEKhw7erUojXu2mIVk%2BHWVHNMPKVi02vuK0QGZ5m%2FZYtTWwJ6d7iUuNegWo6pdD2UIqa%2BtP8N%2FetBjHYQ3tNf%2Bv5NVDnyfZo4%3D&ua=&miniWua=HHnB_gJdCFvE1GxYntBVGvyGu18PHZTfZnAYZSa96xHYaU2E%3D&umidtoken=YMc0uByBxNgDAPgwbaSTGNJ5&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&sign=254d1cc8130321152aabc763e69140c1&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26sdk%3D13.5.1%26utdid%3DYMc0uByBxNgDAPgwbaSTGNJ5%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2124869252%26sn%3D1896E2575FBF99CBF1D04FE86350318C18A972F7%26umidtoken%3DYMc0uByBxNgDAPgwbaSTGNJ5%26msv%3D8.0.0%26brand%3DApple%26imei%3D5908FF86347C435101D6CD9651AC9B5B0A2130CD%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad3G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DFD881D9C-4AE8-4C56-B32C-75A3AC1D4111"},{"key":"shuqirwbody7","val":""},{"key":"shuqifxbody7","val":""},{"key":"shuqisprwurl7","val":"https://ocean.shuqireader.com/api/ad/adserver/v1/api/getAdInfo?appVer=4.3.6.0&placeId=111111&platform=iOS&requestSrc=h5&resourceId=626&timestamp=1623938111&user_id=2124869252&sqSv=1.0&sign=c41db36bae4d4a92ca234ed20c602221&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.5.1%26utdid%3DYMc0uByBxNgDAPgwbaSTGNJ5%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2124869252%26sn%3D1896E2575FBF99CBF1D04FE86350318C18A972F7%26umidtoken%3DYMc0uByBxNgDAPgwbaSTGNJ5%26msv%3D8.0.0%26brand%3DApple%26imei%3D5908FF86347C435101D6CD9651AC9B5B0A2130CD%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad3G%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DFD881D9C-4AE8-4C56-B32C-75A3AC1D4111"},{"key":"shuqijlbody7","val":"requestSrc=h5&userId=2124869252&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1623938093&sqSv=1.0&sign=265af60ed688a947d93372f89ae18dac&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26sdk%3D13.5.1%26utdid%3DYMc0uByBxNgDAPgwbaSTGNJ5%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2124869252%26sn%3D1896E2575FBF99CBF1D04FE86350318C18A972F7%26umidtoken%3DYMc0uByBxNgDAPgwbaSTGNJ5%26msv%3D8.0.0%26brand%3DApple%26imei%3D5908FF86347C435101D6CD9651AC9B5B0A2130CD%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad3G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DFD881D9C-4AE8-4C56-B32C-75A3AC1D4111"},{"key":"shuqisqjlbody7","val":"src=&userId=2124869252&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1623938076&sqSv=1.0&sign=39dc08e76b52e248d91187d38ca24ed8&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26sdk%3D13.5.1%26utdid%3DYMc0uByBxNgDAPgwbaSTGNJ5%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2124869252%26sn%3D1896E2575FBF99CBF1D04FE86350318C18A972F7%26umidtoken%3DYMc0uByBxNgDAPgwbaSTGNJ5%26msv%3D8.0.0%26brand%3DApple%26imei%3D5908FF86347C435101D6CD9651AC9B5B0A2130CD%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad3G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DFD881D9C-4AE8-4C56-B32C-75A3AC1D4111"},{"key":"shuqicjyurl7","val":"https://ocean.shuqireader.com/api/activity/activity/v1/lottery/info?timestamp=1623938113&userId=2124869252&activityId=311&sqSv=1.0&sign=4f0ea02b09b12f50d3e4b947d77ac172&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.5.1%26utdid%3DYMc0uByBxNgDAPgwbaSTGNJ5%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2124869252%26sn%3D1896E2575FBF99CBF1D04FE86350318C18A972F7%26umidtoken%3DYMc0uByBxNgDAPgwbaSTGNJ5%26msv%3D8.0.0%26brand%3DApple%26imei%3D5908FF86347C435101D6CD9651AC9B5B0A2130CD%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad3G%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DFD881D9C-4AE8-4C56-B32C-75A3AC1D4111"},{"key":"shuqicjcsbody7","val":"_public=skinId%3D999%26idfa%3DFD881D9C-4AE8-4C56-B32C-75A3AC1D4111%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26umidtoken%3DYMc0uByBxNgDAPgwbaSTGNJ5%26user_id%3D2124869252%26sn%3D1896E2575FBF99CBF1D04FE86350318C18A972F7%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D5908FF86347C435101D6CD9651AC9B5B0A2130CD%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPad3G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYMc0uByBxNgDAPgwbaSTGNJ5%26utype%3Dpre_vip%26sdk%3D13.5.1&deliveryId=711&key=sq_app_ad&miniWua=HHnB_JeVcvnpuRYuH/fMfYVpuWvj8L3bsew5WvaldgmAhdUg%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=703&sign=A0C907BF132190221369A008B3649263&timestamp=1623938099&userId=2124869252&user_id=2124869252&wua=HIVW_b7tsOUYLAdzQAoHQJjphtoZmmsX8w/g3djFEtLZCUraq7UcSt2XfepFmKASM5DGBPjJQCQf7DKdshgQ233XTBsnO1lktohNcg74dbw7vprvsgnbFCtqWs0j/Gy%2B9XLlPL84Svrz/mKncxcvrnl8mTV9RJ2zzTiBUmGh7K1XtpI46e5JARaGto%2BGSGhebm05jb5S15xKLpVH8xYSH1EKSnRXEyhh0tRpBw9LSp9%2B6IO0%3D"},{"key":"shuqicjbody7","val":"wua=HIVW_UQgZDKX8p0B2nuLsABW0cjlYG273ThGyXuKYOS3UFLZIF%2FCfIX%2BjPfasfvwYH5gT%2FvennvcD2hYRm6GUYq%2F1uyLAeHgyg7TrGTW1EXEg5dRoU8%2BmIIcd6Zzz3DYgU0Vwop45%2BXU%2Fs4IIi5uzOGEGeb9wHPukXc7CxImsZRwNA3DquFTSZLNIsVTt9hTOgwgdNyeVbJEaloZ3KfwDXsZVG2Ng%2BrG79TTLwk%2FAtd3%2F7HE%3D&ua=&userId=2124869252&umidtoken=YMc0uByBxNgDAPgwbaSTGNJ5&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&asac=2A20C07RJ9F51AOEFSNHDR&timestamp=1623938102&activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&sqSv=1.0&sign=d0d33753cc3150a055673c7f32962fef&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.5.1%26utdid%3DYMc0uByBxNgDAPgwbaSTGNJ5%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2124869252%26sn%3D1896E2575FBF99CBF1D04FE86350318C18A972F7%26umidtoken%3DYMc0uByBxNgDAPgwbaSTGNJ5%26msv%3D8.0.0%26brand%3DApple%26imei%3D5908FF86347C435101D6CD9651AC9B5B0A2130CD%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad3G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DFD881D9C-4AE8-4C56-B32C-75A3AC1D4111"},{"key":"shuqijsspbody7","val":""},{"key":"shuqijsydurl7","val":""},{"key":"shuqijsydbody7","val":""},{"key":"shuqijsqdbody7","val":""},{"key":"shuqijsqdspyurl7","val":""},{"key":"shuqijsqdspbody7","val":""},{"key":"shuqijsrwbody7","val":""},{"key":"shuqijsfxbody7","val":""},{"key":"shuqijsbookurl7","val":""},{"key":"shuqijsbookbody7","val":""},{"key":"shuqijssprwurl7","val":""},{"key":"shuqiuserurl8","val":"https://ocean.shuqireader.com/api/jaccount/accountapi/v1/sapi/account/getBindinfo?userId=2125563754&sqSv=1.0&timestamp=1623938279&sign=793786d1d9a8abc0562f5d67dea70d56&key=sq_h5_gateway"},{"key":"shuqisyurl8","val":"https://render.shuqireader.com/load/resource?sdk=13.2.2&utdid=YMc0wvOG%2BMYDAOspIG1%2FtRUh&ustatus=0&first_placeid=111111&net_env=3g&placeid=111111&user_id=2125563754&sn=9E163F8E83AFD98B66D1DF9282DF8AA22E618425&umidtoken=YMc0wvOG%2BMYDAOspIG1%2FtRUh&msv=8.0.0&brand=Apple&imei=1622FBE4FEAE247D34B384269AF2E3490D378C63&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=iOS&ver=210301&mod=iPhone11ProMax&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=2BE55D42-7D45-4017-BE59-FFB2D2E4CAD9"},{"key":"shuqisybody8","val":"appVer=4.3.6.0&imei=1622FBE4FEAE247D34B384269AF2E3490D378C63&isNewUser=1&params=%7B%22resources%22%3A%7B%22ShuqiVipEntry%22%3A%7B%7D%2C%22personalCardConfig%22%3A%7B%7D%7D%7D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=64c15f9cc68b1e87e3505023af0a9ed1&sn=9E163F8E83AFD98B66D1DF9282DF8AA22E618425&soft_id=21&timestamp=1623938128&user_id=2125563754&ver=210301"},{"key":"shuqispbody8","val":"_public=utype%3Dpre_vip%26idfa%3D2BE55D42-7D45-4017-BE59-FFB2D2E4CAD9%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26umidtoken%3DYMc0wvOG%2BMYDAOspIG1/tRUh%26user_id%3D2125563754%26sn%3D9E163F8E83AFD98B66D1DF9282DF8AA22E618425%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D1622FBE4FEAE247D34B384269AF2E3490D378C63%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhone11ProMax%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26utdid%3DYMc0wvOG%2BMYDAOspIG1/tRUh%26soft_id%3D21%26sdk%3D13.2.2&deliveryId=525&key=sq_app_ad&miniWua=HHnB_5yy9qHVda45cBePPGVVUIleiXiKJWmKFikGpUN2nSMI%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=626&sign=D42711B08F310CD9FFC8FBA1B76C80FE&timestamp=1623938229&userId=2125563754&user_id=2125563754&wua=HIVW_CoGpSQu9LqOgmUAnIKS03rNpqZjXXiBdcKwucTOIS0U9jWnhmyLCKFHh5OxsKUznoR76R01/uwOb9gXzwW9639t7mzsQkGNCUQ5ToLzg%2BKEINwmp5T42PAKpGb5jZwqYVYCxflMBWQMD8sTxMsLtRr6opeZwEod7XL5u0inTo4asPOn%2B7wC/wWErtTUddfRiqAm/4ltpTkNg6oz73nFDiT7rz%2BNUSrhwTNhHT6K4R80%3D"},{"key":"shuqiscbody8","val":"_public=skinId%253D999%2526idfa%253D2BE55D42-7D45-4017-BE59-FFB2D2E4CAD9%2526ustatus%253D0%2526first_placeid%253D111111%2526net_env%253D3g%2526umidtoken%253DYMc0wvOG%252BMYDAOspIG1%252FtRUh%2526user_id%253D2125563754%2526sn%253D9E163F8E83AFD98B66D1DF9282DF8AA22E618425%2526placeid%253D111111%2526msv%253D8.0.0%2526brand%253DApple%2526imei%253D1622FBE4FEAE247D34B384269AF2E3490D378C63%2526skinVersionPrefix%253D1%2526appVer%253D4.3.6.0%2526skinActiveColor%253D0F9970%2526manufacturer%253DApple%2526skinColor%253D23B383%2526platform%253DiOS%2526ver%253D210301%2526mod%253DiPhone11ProMax%2526statusBarHeight%253D44.000000%2526skinVersion%253D1%2526wh%253D1242x2688%2526soft_id%253D21%2526utdid%253DYMc0wvOG%252BMYDAOspIG1%252FtRUh%2526utype%253Dpre_vip%2526sdk%253D13.2.2&key=and_log&readingList=%5B%7B%22startTime%22%3A1623938151%2C%22readObjType%22%3A1%2C%22attr%22%3A2%2C%22readObjId%22%3A%228310081%22%2C%22readChapterId%22%3A1404891%2C%22readingLen%22%3A17%7D%5D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=50E48A58EE9EE31B09E638C8557C9407&timestamp=1623938168&user_id=2125563754"},{"key":"shuqiydbody8","val":"_public=skinId%3D999%26idfa%3D2BE55D42-7D45-4017-BE59-FFB2D2E4CAD9%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26umidtoken%3DYMc0wvOG%2BMYDAOspIG1/tRUh%26user_id%3D2125563754%26sn%3D9E163F8E83AFD98B66D1DF9282DF8AA22E618425%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D1622FBE4FEAE247D34B384269AF2E3490D378C63%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhone11ProMax%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYMc0wvOG%2BMYDAOspIG1/tRUh%26utype%3Dpre_vip%26sdk%3D13.2.2&deliveryId=707&key=sq_app_ad&miniWua=HHnB_TOo5Hfbuk3zBqQ9u16ML2a23Weh9G13QCfW7dUtcoNY%3D&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=678&sign=DC8701FAE1AABFE582B98D4D97B38C2B&timestamp=1623938162&userId=2125563754&wua=HIVW_28iub3oDAoS8FkjZppCpNpSkg%2B/2U9f%2BIhfGcTK5g/9fEdtwGax%2BoblanRtZ%2Bi4j/DTVoT4GdJBtcs7i3rL8nMn12jPPGyQ69vT4t3FdT6Cq6LaWFE7Xceg5LqzTluz5AV8UMq8eZrF8mmPkO2ik/cV7z8msCXXvWqAwxPuNUQsBYGmuUo2BRrTAXhLaDyTydYcMUij31L2lzP/gC2h6StCWLCkitAy3eRSAMpezhy0%3D"},{"key":"shuqiqdbody8","val":"clientTimestamp=1623938173&position=501&userId=2125563754&signInType=1&wua=HIVW_xyBnjFAIr5KI6Y15u6RV2yhgUe5QjmWQnrv%2BqAsgRMESHNiXb9VhFpiOU1fy4oJ3hqxiclv2bcUBd%2BJeDDPwoAWQyRz7b66il%2F4YvF%2F%2BOqFNVl4%2FZ2Q8sbiaQY%2Bu73Q%2FR5E6SLJa68vwxvZtJgBGYhI8m0h47HosK8IbmpmnbvI6eF7yQyY3PSXpOzmNq29weWCJ%2BqNi2mZoCAkgQn%2Bz0JcKmw3P%2FL1TBwHNzFIEXvU%3D&ua=&miniWua=HHnB_i9s0LpE%2Bn2xTqnqdfhuEyRsWvVbIYcdJAgwmCqYfmFg%3D&umidtoken=YMc0wvOG%2BMYDAOspIG1%2FtRUh&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&sign=c4a2188d683c96dab079a34851eaa6f7&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26sdk%3D13.2.2%26utdid%3DYMc0wvOG%252BMYDAOspIG1%252FtRUh%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2125563754%26sn%3D9E163F8E83AFD98B66D1DF9282DF8AA22E618425%26umidtoken%3DYMc0wvOG%252BMYDAOspIG1%252FtRUh%26msv%3D8.0.0%26brand%3DApple%26imei%3D1622FBE4FEAE247D34B384269AF2E3490D378C63%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone11ProMax%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D2BE55D42-7D45-4017-BE59-FFB2D2E4CAD9"},{"key":"shuqirwbody8","val":""},{"key":"shuqifxbody8","val":""},{"key":"shuqisprwurl8","val":"https://ocean.shuqireader.com/api/ad/adserver/v1/api/getAdInfo?appVer=4.3.6.0&placeId=111111&platform=iOS&requestSrc=h5&resourceId=626&timestamp=1623938277&user_id=2125563754&sqSv=1.0&sign=db0901f2920f6d1004b5dcdab7e6e5fc&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26sdk%3D13.2.2%26utdid%3DYMc0wvOG%252BMYDAOspIG1%252FtRUh%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2125563754%26sn%3D9E163F8E83AFD98B66D1DF9282DF8AA22E618425%26umidtoken%3DYMc0wvOG%252BMYDAOspIG1%252FtRUh%26msv%3D8.0.0%26brand%3DApple%26imei%3D1622FBE4FEAE247D34B384269AF2E3490D378C63%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone11ProMax%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D2BE55D42-7D45-4017-BE59-FFB2D2E4CAD9"},{"key":"shuqijlbody8","val":"requestSrc=h5&userId=2125563754&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1623938258&sqSv=1.0&sign=bb1d6eac8161c749e0228c6e58b616b1&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26sdk%3D13.2.2%26utdid%3DYMc0wvOG%252BMYDAOspIG1%252FtRUh%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2125563754%26sn%3D9E163F8E83AFD98B66D1DF9282DF8AA22E618425%26umidtoken%3DYMc0wvOG%252BMYDAOspIG1%252FtRUh%26msv%3D8.0.0%26brand%3DApple%26imei%3D1622FBE4FEAE247D34B384269AF2E3490D378C63%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone11ProMax%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D2BE55D42-7D45-4017-BE59-FFB2D2E4CAD9"},{"key":"shuqisqjlbody8","val":"src=&userId=2125563754&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1623938177&sqSv=1.0&sign=d0b29b9fc9252b915788d7669014e37a&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26sdk%3D13.2.2%26utdid%3DYMc0wvOG%252BMYDAOspIG1%252FtRUh%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2125563754%26sn%3D9E163F8E83AFD98B66D1DF9282DF8AA22E618425%26umidtoken%3DYMc0wvOG%252BMYDAOspIG1%252FtRUh%26msv%3D8.0.0%26brand%3DApple%26imei%3D1622FBE4FEAE247D34B384269AF2E3490D378C63%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone11ProMax%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D2BE55D42-7D45-4017-BE59-FFB2D2E4CAD9"},{"key":"shuqicjyurl8","val":"https://ocean.shuqireader.com/api/activity/activity/v1/lottery/info?timestamp=1623938280&userId=2125563754&activityId=311&sqSv=1.0&sign=80c1fa7419a3b5bde4228f4336550a75&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.2.2%26utdid%3DYMc0wvOG%252BMYDAOspIG1%252FtRUh%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2125563754%26sn%3D9E163F8E83AFD98B66D1DF9282DF8AA22E618425%26umidtoken%3DYMc0wvOG%252BMYDAOspIG1%252FtRUh%26msv%3D8.0.0%26brand%3DApple%26imei%3D1622FBE4FEAE247D34B384269AF2E3490D378C63%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone11ProMax%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D2BE55D42-7D45-4017-BE59-FFB2D2E4CAD9"},{"key":"shuqicjcsbody8","val":"_public=utype%3Dpre_vip%26idfa%3D2BE55D42-7D45-4017-BE59-FFB2D2E4CAD9%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26umidtoken%3DYMc0wvOG%2BMYDAOspIG1/tRUh%26user_id%3D2125563754%26sn%3D9E163F8E83AFD98B66D1DF9282DF8AA22E618425%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D1622FBE4FEAE247D34B384269AF2E3490D378C63%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhone11ProMax%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26utdid%3DYMc0wvOG%2BMYDAOspIG1/tRUh%26soft_id%3D21%26sdk%3D13.2.2&deliveryId=711&key=sq_app_ad&miniWua=HHnB_C/2hjD1Sktj59kkrR0oY93A4rbgshHAPIkpAfnJF9tk%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=703&sign=7A4A98655ECBD4C6E11BFD06835CB2B1&timestamp=1623938240&userId=2125563754&user_id=2125563754&wua=HIVW_zEbQBtAtpYHxXQpMzezV/T4f4Dlr7zXUkfVD/1kvdnZ0M4MKhKi0K4WawIf4Bsb3vfW8OzCHKDLntKni6oZ70pk0JXSh5qHgM0d47Z/BH13MWwb04SwRWhrFeLvzzozUo82zSoYkuIj6kau5IF09DpkpN/sEOMyv2xOkWNOi2Bw/YtUjoREZ5EAFLLWQy4eVn3e7n18UnCvsG/rHymXB1VnUxsDOq7nUz8mUxDFBTKY%3D"},{"key":"shuqicjbody8","val":"wua=HIVW_kixh8%2FTVqEa%2BxzdyVmELuLBvwx2X3yTRM8eobMUVBh9YrWOz7gR5MKsjNwmmI9yZWj%2FWiSA9vp52jpns9wwfN291kHhNCp02rSP9RchRDi0jDSDqGIjprB86UZaTVzPudzV687hvHvTTXWMRJEnKBLa2j0pBGBFjU0lMKHDaKm6PaiRtHrHksudZ8HHwf1BnbqGSMYSz4AwAoCK8nDZQT2vz649QgMsBSCEcti%2F1Rsw%3D&ua=&userId=2125563754&umidtoken=YMc0wvOG%2BMYDAOspIG1%2FtRUh&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&asac=2A20C07RJ9F51AOEFSNHDR&timestamp=1623938246&activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&sqSv=1.0&sign=ea81387feaa9ed746e14b5ed108c7e71&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.2.2%26utdid%3DYMc0wvOG%252BMYDAOspIG1%252FtRUh%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2125563754%26sn%3D9E163F8E83AFD98B66D1DF9282DF8AA22E618425%26umidtoken%3DYMc0wvOG%252BMYDAOspIG1%252FtRUh%26msv%3D8.0.0%26brand%3DApple%26imei%3D1622FBE4FEAE247D34B384269AF2E3490D378C63%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone11ProMax%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D2BE55D42-7D45-4017-BE59-FFB2D2E4CAD9"},{"key":"shuqijsspbody8","val":""},{"key":"shuqijsydurl8","val":""},{"key":"shuqijsydbody8","val":""},{"key":"shuqijsqdbody8","val":""},{"key":"shuqijsqdspyurl8","val":""},{"key":"shuqijsqdspbody8","val":""},{"key":"shuqijsrwbody8","val":""},{"key":"shuqijsfxbody8","val":""},{"key":"shuqijsbookurl8","val":""},{"key":"shuqijsbookbody8","val":""},{"key":"shuqijssprwurl8","val":""},{"key":"shuqiuserurl9","val":"https://ocean.shuqireader.com/api/jaccount/accountapi/v1/sapi/account/getBindinfo?userId=2124421169&sqSv=1.0&timestamp=1623938387&sign=033d8b167d86f8d53ee37fb76687abfe&key=sq_h5_gateway"},{"key":"shuqisyurl9","val":"https://render.shuqireader.com/load/resource?sdk=13.5.1&utdid=YMc0zDavyY0DAN6Y182QsKAJ&ustatus=0&first_placeid=111111&net_env=4g&placeid=111111&user_id=2124421169&sn=0DFA536E0BA36EF5C69967D127801E2FB0E9F708&umidtoken=YMc0zDavyY0DAN6Y182QsKAJ&msv=8.0.0&brand=Apple&imei=F782274172505F0ECB993DBB8147B4F6F10D4199&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=iOS&ver=210301&mod=iPhone6&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=36C65B56-9FBA-422B-A241-B7E4B898E0C1"},{"key":"shuqisybody9","val":"appVer=4.3.6.0&imei=F782274172505F0ECB993DBB8147B4F6F10D4199&isNewUser=1&params=%7B%22resources%22%3A%7B%22ShuqiVipEntry%22%3A%7B%7D%2C%22personalCardConfig%22%3A%7B%7D%7D%7D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=f1172f6559537d5e1aff30d524559d17&sn=0DFA536E0BA36EF5C69967D127801E2FB0E9F708&soft_id=21&timestamp=1623938334&user_id=2124421169&ver=210301"},{"key":"shuqispbody9","val":"_public=skinId%3D999%26idfa%3D36C65B56-9FBA-422B-A241-B7E4B898E0C1%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26umidtoken%3DYMc0zDavyY0DAN6Y182QsKAJ%26user_id%3D2124421169%26sn%3D0DFA536E0BA36EF5C69967D127801E2FB0E9F708%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3DF782274172505F0ECB993DBB8147B4F6F10D4199%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhone6%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYMc0zDavyY0DAN6Y182QsKAJ%26utype%3Dpre_vip%26sdk%3D13.5.1&deliveryId=525&key=sq_app_ad&miniWua=HHnB_wU4jLY3rt0/mJU3F0DV%2BHqqaUB/p7IRNy%2BkV8KBP8UE%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=626&sign=9A5E8DC2660FB870D1859E46CBFD92C4&timestamp=1623938354&userId=2124421169&user_id=2124421169&wua=HIVW_1GtorDpkiSvy1A05Bpe/5vnBIE4so%2BW/3d%2Bhuoni4/jD5x8fFO4ob33JRlUJPgUf1qNOwkTxdTMDKL0cM59pD7DnQnGKceFvNfhYulAzoC/29bBkojxMuyUcXMEk95/PqKKPxQXBNatsR9T%2B%2BsFoO6JILRlDPSyx4dWCc3ZP9Y9fh20%2BBGT87AUGnbw2K%2BwpY4WZXcQJ7Y6zGzgOAlarm7r51MjE9DvCnTb6eH3VyqY%3D"},{"key":"shuqiscbody9","val":"_public=utype%253Dpre_vip%2526idfa%253D36C65B56-9FBA-422B-A241-B7E4B898E0C1%2526ustatus%253D0%2526first_placeid%253D111111%2526net_env%253D4g%2526umidtoken%253DYMc0zDavyY0DAN6Y182QsKAJ%2526user_id%253D2124421169%2526sn%253D0DFA536E0BA36EF5C69967D127801E2FB0E9F708%2526placeid%253D111111%2526msv%253D8.0.0%2526brand%253DApple%2526imei%253DF782274172505F0ECB993DBB8147B4F6F10D4199%2526skinVersionPrefix%253D1%2526appVer%253D4.3.6.0%2526skinActiveColor%253D0F9970%2526manufacturer%253DApple%2526statusBarHeight%253D44.000000%2526skinColor%253D23B383%2526platform%253DiOS%2526ver%253D210301%2526mod%253DiPhone6%2526skinVersion%253D1%2526wh%253D1242x2688%2526skinId%253D999%2526utdid%253DYMc0zDavyY0DAN6Y182QsKAJ%2526soft_id%253D21%2526sdk%253D13.5.1&key=and_log&readingList=%5B%7B%22startTime%22%3A1623938300%2C%22readObjType%22%3A1%2C%22attr%22%3A2%2C%22readObjId%22%3A%228291851%22%2C%22readChapterId%22%3A1395426%2C%22readingLen%22%3A32%7D%5D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=E68FCF03CAF0567EB3E1464AD8DAF828&timestamp=1623938332&user_id=2124421169"},{"key":"shuqiydbody9","val":"_public=utype%3Dpre_vip%26idfa%3D36C65B56-9FBA-422B-A241-B7E4B898E0C1%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26umidtoken%3DYMc0zDavyY0DAN6Y182QsKAJ%26user_id%3D2124421169%26sn%3D0DFA536E0BA36EF5C69967D127801E2FB0E9F708%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3DF782274172505F0ECB993DBB8147B4F6F10D4199%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhone6%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26utdid%3DYMc0zDavyY0DAN6Y182QsKAJ%26soft_id%3D21%26sdk%3D13.5.1&deliveryId=707&key=sq_app_ad&miniWua=HHnB_O6tUkwr2aE0D6ZWK2C5inSEcBsGmHdTiae37Aha%2BEmY%3D&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=678&sign=018B91B408553123995A0AAD0460135A&timestamp=1623938329&userId=2124421169&wua=HIVW_LbOLwiQ9TArD044vXJN4Zau9qgW2F344cMWzmAZlA9jmi9rfsiSHQ4lBc4F2IAVU69X35xXI31tzGwQ31cyNwIQKyzFKaNa1pjUw82tN0KVxii46yHY0evAC9d3xxGXAPhdh0i3P8RIEOtfIOYnXdxRbLQnuI4nR/gjDDN7M43GTRpoXnM3uaUCe4ZbOzfsPowu7OPcCSd1KVzVECf/oIhImUU%2BJZiTLWH/6rIcqIVA%3D"},{"key":"shuqiqdbody9","val":"clientTimestamp=1623938339&position=501&userId=2124421169&signInType=1&wua=HIVW_fjZxLYWSpjC0FkPU4lOMqGnzQQ0OKmEke67C8AUT7zg5IhmeXkB9%2FibeLOT%2BY%2FE7zwJ5uj4q1hIxp%2BSTrkDhE1n%2Fpnip2AXLWSfi02xoCvWZpEAo4PPNa0q3LbtrrImsL3RpTyK1a%2FAzQuMQxBfdwJ7fw87s6P%2FWRwsdD37BGTPO29LRdSkeYF3Km2uUeICZDBff10mMLGGXifh4GU6Gkc8FfxArsJu18mFcpz3WUtQ%3D&ua=&miniWua=HHnB_IgODb9Tv9ne7Q3rBZBIg%2F6qx8qEQhxr1ifCjidbUE0o%3D&umidtoken=YMc0zDavyY0DAN6Y182QsKAJ&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&sign=f768b49375714bd6eeee1ee53c8e4464&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26sdk%3D13.5.1%26utdid%3DYMc0zDavyY0DAN6Y182QsKAJ%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2124421169%26sn%3D0DFA536E0BA36EF5C69967D127801E2FB0E9F708%26umidtoken%3DYMc0zDavyY0DAN6Y182QsKAJ%26msv%3D8.0.0%26brand%3DApple%26imei%3DF782274172505F0ECB993DBB8147B4F6F10D4199%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone6%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D36C65B56-9FBA-422B-A241-B7E4B898E0C1"},{"key":"shuqirwbody9","val":""},{"key":"shuqifxbody9","val":""},{"key":"shuqisprwurl9","val":"https://ocean.shuqireader.com/api/ad/adserver/v1/api/getAdInfo?appVer=4.3.6.0&placeId=111111&platform=iOS&requestSrc=h5&resourceId=626&timestamp=1623938388&user_id=2124421169&sqSv=1.0&sign=87985cf87b7db62272c5074e3bbac5a2&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26sdk%3D13.5.1%26utdid%3DYMc0zDavyY0DAN6Y182QsKAJ%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2124421169%26sn%3D0DFA536E0BA36EF5C69967D127801E2FB0E9F708%26umidtoken%3DYMc0zDavyY0DAN6Y182QsKAJ%26msv%3D8.0.0%26brand%3DApple%26imei%3DF782274172505F0ECB993DBB8147B4F6F10D4199%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone6%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D36C65B56-9FBA-422B-A241-B7E4B898E0C1"},{"key":"shuqijlbody9","val":"requestSrc=h5&userId=2124421169&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1623938366&sqSv=1.0&sign=65d44b7fb2e82a440175fc06326db689&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26sdk%3D13.5.1%26utdid%3DYMc0zDavyY0DAN6Y182QsKAJ%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2124421169%26sn%3D0DFA536E0BA36EF5C69967D127801E2FB0E9F708%26umidtoken%3DYMc0zDavyY0DAN6Y182QsKAJ%26msv%3D8.0.0%26brand%3DApple%26imei%3DF782274172505F0ECB993DBB8147B4F6F10D4199%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone6%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D36C65B56-9FBA-422B-A241-B7E4B898E0C1"},{"key":"shuqisqjlbody9","val":"src=&userId=2124421169&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1623938343&sqSv=1.0&sign=fa58b1e4fed0f146223fb275c222645c&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26sdk%3D13.5.1%26utdid%3DYMc0zDavyY0DAN6Y182QsKAJ%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2124421169%26sn%3D0DFA536E0BA36EF5C69967D127801E2FB0E9F708%26umidtoken%3DYMc0zDavyY0DAN6Y182QsKAJ%26msv%3D8.0.0%26brand%3DApple%26imei%3DF782274172505F0ECB993DBB8147B4F6F10D4199%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone6%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D36C65B56-9FBA-422B-A241-B7E4B898E0C1"},{"key":"shuqicjyurl9","val":"https://ocean.shuqireader.com/api/activity/activity/v1/lottery/info?timestamp=1623938390&userId=2124421169&activityId=311&sqSv=1.0&sign=c4e0752466a5b4aa78d2aefeed499501&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.5.1%26utdid%3DYMc0zDavyY0DAN6Y182QsKAJ%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2124421169%26sn%3D0DFA536E0BA36EF5C69967D127801E2FB0E9F708%26umidtoken%3DYMc0zDavyY0DAN6Y182QsKAJ%26msv%3D8.0.0%26brand%3DApple%26imei%3DF782274172505F0ECB993DBB8147B4F6F10D4199%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone6%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D36C65B56-9FBA-422B-A241-B7E4B898E0C1"},{"key":"shuqicjcsbody9","val":"_public=skinId%3D999%26idfa%3D36C65B56-9FBA-422B-A241-B7E4B898E0C1%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26umidtoken%3DYMc0zDavyY0DAN6Y182QsKAJ%26user_id%3D2124421169%26sn%3D0DFA536E0BA36EF5C69967D127801E2FB0E9F708%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3DF782274172505F0ECB993DBB8147B4F6F10D4199%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhone6%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYMc0zDavyY0DAN6Y182QsKAJ%26utype%3Dpre_vip%26sdk%3D13.5.1&deliveryId=711&key=sq_app_ad&miniWua=HHnB_pQNRuOUH5sd4NklRLn7G2J7TXYlIUEZ1Z%2BcgD62dHUw%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=703&sign=A35E874B9E602F4CF84A64D434D610F6&timestamp=1623938371&userId=2124421169&user_id=2124421169&wua=HIVW_hl99932f5bxT6oRIj9HE1Fv8d8mqfoAM77JGfx/Wl1TQUsngGMnGPw7jTmL2VuSqdrvMLSBZTBWXCD1UoOgzrTN2dX/KYfTBG5ECp5/ldry4f6WzBJzoOQCTHjUS3ZCPnCrMtwUYc2jTBXNmjYv/WiW1QqoPP6m%2BBnDgkwSQ%2BqrwsfJCpDwBiHUFocXpsm/voZOxtpQYyIVeQxNSqtqZriP3DkMrjXsa/rkPQ6zZKU8%3D"},{"key":"shuqicjbody9","val":"wua=HIVW_t%2BVdn6e9%2Bmv%2Btf60P2zTHnsM0afqxtVQa0qj1z5sVeCV4%2FLadsr%2FhVZZ%2BqaYXe7d3DXRG3A6Fc3C%2BNeqkSV2MEINsr7dKqWr2slxMNch1jmLrYs7o9rhKiNaUGYZByjd%2F9bE5040gvlnYUJCI3yxppOMPONg9DAV84IW9yd%2BNMrckkaNAlfz9q7U47Drm0GDAxIHJkt9Td5sxgD5bfSlycfx4fggD82g7qXJav%2Fx1RQ%3D&ua=&userId=2124421169&umidtoken=YMc0zDavyY0DAN6Y182QsKAJ&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&asac=2A20C07RJ9F51AOEFSNHDR&timestamp=1623938377&activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&sqSv=1.0&sign=2fe39a293cdda6c3d2fa7dfb1cbc04b4&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.5.1%26utdid%3DYMc0zDavyY0DAN6Y182QsKAJ%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2124421169%26sn%3D0DFA536E0BA36EF5C69967D127801E2FB0E9F708%26umidtoken%3DYMc0zDavyY0DAN6Y182QsKAJ%26msv%3D8.0.0%26brand%3DApple%26imei%3DF782274172505F0ECB993DBB8147B4F6F10D4199%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone6%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D36C65B56-9FBA-422B-A241-B7E4B898E0C1"},{"key":"shuqijsspbody9","val":""},{"key":"shuqijsydurl9","val":""},{"key":"shuqijsydbody9","val":""},{"key":"shuqijsqdbody9","val":""},{"key":"shuqijsqdspyurl9","val":""},{"key":"shuqijsqdspbody9","val":""},{"key":"shuqijsrwbody9","val":""},{"key":"shuqijsfxbody9","val":""},{"key":"shuqijsbookurl9","val":""},{"key":"shuqijsbookbody9","val":""},{"key":"shuqijssprwurl9","val":""},{"key":"shuqiuserurl10","val":"https://ocean.shuqireader.com/api/jaccount/accountapi/v1/sapi/account/getBindinfo?userId=2126345900&sqSv=1.0&timestamp=1623938486&sign=19b2610caf9cfa70ed5e66c8d3d72c3e&key=sq_h5_gateway"},{"key":"shuqisyurl10","val":"https://render.shuqireader.com/load/resource?sdk=13.1.3&utdid=YMc0zDavyY0DAN6Y182QsKAJ&ustatus=0&first_placeid=111111&net_env=3g&placeid=111111&user_id=2126345900&sn=620C6998D9CD2861F9570A29F9D7E5E55978B050&umidtoken=YMc0zDavyY0DAN6Y182QsKAJ&msv=8.0.0&brand=Apple&imei=47CDC78F941F90D86A17FEF024935D59D674C30D&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=iOS&ver=210301&mod=iPhoneXS&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=0D07CCA6-5CB0-4667-9FC4-CBACC37EECF5"},{"key":"shuqisybody10","val":"appVer=4.3.6.0&imei=47CDC78F941F90D86A17FEF024935D59D674C30D&isNewUser=1&params=%7B%22resources%22%3A%7B%22ShuqiVipEntry%22%3A%7B%7D%2C%22personalCardConfig%22%3A%7B%7D%7D%7D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=7eda2b0fe254949659b2bd8be91f9742&sn=620C6998D9CD2861F9570A29F9D7E5E55978B050&soft_id=21&timestamp=1623938440&user_id=2126345900&ver=210301"},{"key":"shuqispbody10","val":"_public=skinId%3D999%26idfa%3D0D07CCA6-5CB0-4667-9FC4-CBACC37EECF5%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26umidtoken%3DYMc0zDavyY0DAN6Y182QsKAJ%26user_id%3D2126345900%26sn%3D620C6998D9CD2861F9570A29F9D7E5E55978B050%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D47CDC78F941F90D86A17FEF024935D59D674C30D%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhoneXS%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYMc0zDavyY0DAN6Y182QsKAJ%26utype%3Dpre_vip%26sdk%3D13.1.3&deliveryId=525&key=sq_app_ad&miniWua=HHnB_/L1DAKu2m43iZzSzkPrulUsenrH8HJ1nFoonGNspWvk%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=626&sign=CFB01BDDDCAA26ED1910D6E680902A9F&timestamp=1623938452&userId=2126345900&user_id=2126345900&wua=HIVW_jPA/pgU13M2pD0RqAS/%2B7h6JdqERoqzVS1Rmab5xXsgJXSi15KLaKs15y3mWkqF9fR1aWtYHDH6svKQFtvYrOPxYNUHD0BvlJ6teR%2BXso6nCA755B3S3jftECCLxpOPqdAURGJ9RW%2By7Fk2VFik%2B8amCoVRl7UqclI3dq7sXggxzS8vEENHc8n5W802TpvsuSpFfABDEYpILeb4eY0xSbJGlrpdYBfAyv3mEUbbmmnY%3D"},{"key":"shuqiscbody10","val":"_public=utype%253Dpre_vip%2526idfa%253D0D07CCA6-5CB0-4667-9FC4-CBACC37EECF5%2526ustatus%253D0%2526first_placeid%253D111111%2526net_env%253D3g%2526umidtoken%253DYMc0zDavyY0DAN6Y182QsKAJ%2526user_id%253D2126345900%2526sn%253D620C6998D9CD2861F9570A29F9D7E5E55978B050%2526placeid%253D111111%2526msv%253D8.0.0%2526brand%253DApple%2526imei%253D47CDC78F941F90D86A17FEF024935D59D674C30D%2526skinVersionPrefix%253D1%2526appVer%253D4.3.6.0%2526skinActiveColor%253D0F9970%2526manufacturer%253DApple%2526statusBarHeight%253D44.000000%2526skinColor%253D23B383%2526platform%253DiOS%2526ver%253D210301%2526mod%253DiPhoneXS%2526skinVersion%253D1%2526wh%253D1242x2688%2526skinId%253D999%2526utdid%253DYMc0zDavyY0DAN6Y182QsKAJ%2526soft_id%253D21%2526sdk%253D13.1.3&key=and_log&readingList=%5B%7B%22startTime%22%3A1623938429%2C%22readObjType%22%3A1%2C%22attr%22%3A2%2C%22readObjId%22%3A%228291851%22%2C%22readChapterId%22%3A-1%2C%22readingLen%22%3A10%7D%5D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=BC644359D3490A511982D09F60232F7C&timestamp=1623938439&user_id=2126345900"},{"key":"shuqiydbody10","val":"_public=utype%3Dpre_vip%26idfa%3D0D07CCA6-5CB0-4667-9FC4-CBACC37EECF5%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26umidtoken%3DYMc0zDavyY0DAN6Y182QsKAJ%26user_id%3D2126345900%26sn%3D620C6998D9CD2861F9570A29F9D7E5E55978B050%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D47CDC78F941F90D86A17FEF024935D59D674C30D%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhoneXS%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26utdid%3DYMc0zDavyY0DAN6Y182QsKAJ%26soft_id%3D21%26sdk%3D13.1.3&deliveryId=707&key=sq_app_ad&miniWua=HHnB_FyaIPF6D8v9iF47U9jPwnwYhnr8l4ET%2BbU2Plr01YtY%3D&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=678&sign=BA9EEE759BAC1267C714D207C7279DFA&timestamp=1623938435&userId=2126345900&wua=HIVW_FO7lrzioOluEp1Gy8COtt9fNfsn16y9U5yqyRguQnBKuMd2LnQMVYtP9bjrv2swY0JzEhK/esL7O5UEZMnY7m4SmchhCZtNCK2yemgn%2BlvuY6MrPdlaJ0UkwqLO9aFRbZIrx4EnQacphCnIRqsj/ww2xeZ/Ymo5rXY3oIN2pDlUUDRbnb3JHCbMEyJP%2BcLhFJG4w3lYZ8a0YxWfUyjWXWYuhprKd5D0rI02iSgsxsIM%3D"},{"key":"shuqiqdbody10","val":"clientTimestamp=1623938447&position=501&userId=2126345900&signInType=1&wua=HIVW_oF6J2EES0IL2dH8kq23Z%2F1w9VPEs3q3p9VCbJViNM5hWmr95nEPOZtuQSeXFNZSMu70KkEROmqZ3o0Bw%2F22awSsMb9fTgKCwLO%2FKcYo6ixtQLd4gmhT3K9EiRgSV8lQ0bLFouP7y9%2BuWFh8wCG701nIzdpqpMaW%2BIexDVwMhhAADs06rtf3A%2BOwSdM1aV2lMgb4GKiIQS9euqzj%2FG8YinZf5SUPFKt7lQvQre3gFhQM%3D&ua=&miniWua=HHnB_k2NvxsCg6QN5ECVFmwi6lHrLxTJ9mFBtTH62%2FgvqahU%3D&umidtoken=YMc0zDavyY0DAN6Y182QsKAJ&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&sign=0be34f8b28d370b07e2a266314130e45&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26sdk%3D13.1.3%26utdid%3DYMc0zDavyY0DAN6Y182QsKAJ%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2126345900%26sn%3D620C6998D9CD2861F9570A29F9D7E5E55978B050%26umidtoken%3DYMc0zDavyY0DAN6Y182QsKAJ%26msv%3D8.0.0%26brand%3DApple%26imei%3D47CDC78F941F90D86A17FEF024935D59D674C30D%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhoneXS%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D0D07CCA6-5CB0-4667-9FC4-CBACC37EECF5"},{"key":"shuqirwbody10","val":""},{"key":"shuqifxbody10","val":""},{"key":"shuqisprwurl10","val":"https://ocean.shuqireader.com/api/ad/adserver/v1/api/getAdInfo?appVer=4.3.6.0&placeId=111111&platform=iOS&requestSrc=h5&resourceId=626&timestamp=1623938493&user_id=2126345900&sqSv=1.0&sign=cd2724f2c1691f4d7f284596ce20b859&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26sdk%3D13.1.3%26utdid%3DYMc0zDavyY0DAN6Y182QsKAJ%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2126345900%26sn%3D620C6998D9CD2861F9570A29F9D7E5E55978B050%26umidtoken%3DYMc0zDavyY0DAN6Y182QsKAJ%26msv%3D8.0.0%26brand%3DApple%26imei%3D47CDC78F941F90D86A17FEF024935D59D674C30D%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhoneXS%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D0D07CCA6-5CB0-4667-9FC4-CBACC37EECF5"},{"key":"shuqijlbody10","val":"requestSrc=h5&userId=2126345900&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1623938460&sqSv=1.0&sign=ce387d71cdb7198b288e77b84e14ae2d&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26sdk%3D13.1.3%26utdid%3DYMc0zDavyY0DAN6Y182QsKAJ%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2126345900%26sn%3D620C6998D9CD2861F9570A29F9D7E5E55978B050%26umidtoken%3DYMc0zDavyY0DAN6Y182QsKAJ%26msv%3D8.0.0%26brand%3DApple%26imei%3D47CDC78F941F90D86A17FEF024935D59D674C30D%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhoneXS%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D0D07CCA6-5CB0-4667-9FC4-CBACC37EECF5"},{"key":"shuqisqjlbody10","val":"src=&userId=2126345900&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1623938450&sqSv=1.0&sign=01f6b44a3c07bba0c0aaa4b47cea7b6c&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26sdk%3D13.1.3%26utdid%3DYMc0zDavyY0DAN6Y182QsKAJ%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2126345900%26sn%3D620C6998D9CD2861F9570A29F9D7E5E55978B050%26umidtoken%3DYMc0zDavyY0DAN6Y182QsKAJ%26msv%3D8.0.0%26brand%3DApple%26imei%3D47CDC78F941F90D86A17FEF024935D59D674C30D%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhoneXS%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D0D07CCA6-5CB0-4667-9FC4-CBACC37EECF5"},{"key":"shuqicjyurl10","val":"https://ocean.shuqireader.com/api/activity/activity/v1/lottery/info?timestamp=1623938494&userId=2126345900&activityId=311&sqSv=1.0&sign=26922184ee4d49841a90233f2b7c37e9&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.1.3%26utdid%3DYMc0zDavyY0DAN6Y182QsKAJ%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2126345900%26sn%3D620C6998D9CD2861F9570A29F9D7E5E55978B050%26umidtoken%3DYMc0zDavyY0DAN6Y182QsKAJ%26msv%3D8.0.0%26brand%3DApple%26imei%3D47CDC78F941F90D86A17FEF024935D59D674C30D%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhoneXS%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D0D07CCA6-5CB0-4667-9FC4-CBACC37EECF5"},{"key":"shuqicjcsbody10","val":"_public=skinId%3D999%26idfa%3D0D07CCA6-5CB0-4667-9FC4-CBACC37EECF5%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26umidtoken%3DYMc0zDavyY0DAN6Y182QsKAJ%26user_id%3D2126345900%26sn%3D620C6998D9CD2861F9570A29F9D7E5E55978B050%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D47CDC78F941F90D86A17FEF024935D59D674C30D%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhoneXS%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYMc0zDavyY0DAN6Y182QsKAJ%26utype%3Dpre_vip%26sdk%3D13.1.3&deliveryId=711&key=sq_app_ad&miniWua=HHnB_NcGIDqWX2CmnS0MqvYjDh1FIwtfceC8nXvtVfSpCqro%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=703&sign=3ED288FDD934A33A74420A3E9BAB2C1A&timestamp=1623938468&userId=2126345900&user_id=2126345900&wua=HIVW_cFe9Q2MzmW9UXk4cb0aTIjG4uTxmU5jANViFi/Wj9JTtaoKjaErLeVaTOq%2BpkzfAOGkf/ITlqvknLWiGDFVjdQBf%2B0ao/ZoBnBFG1tIxNy%2B/NFmBZHePVtOHbRXo7UrHeuI3nh/2eOJwEfZ67Qmkh97hM1so10CYn0zFsrSVEFzdQj3pmafibiZtq6l1Wm257ZqG0aQhEO0w3rnICzKPIyEmBzWsWssr35evV113P2s%3D"},{"key":"shuqicjbody10","val":"wua=HIVW_X1an%2FTyaeWCTJaQ9%2FPow3oy4XQdAbm%2Bfx4fOEl6P2zlB4a%2Bvv5wLiU78KkTtbCzvaWSm80a1gbkGDRdEXjahzzlIKo0kTzvKuj6OQeNCbZSiKzo8CZ4xV5kjXnox%2Fd7WxwHBRjqOFNpwfl7e9c8rdXSY6RvafNyxSSIECZWCB3yFOk4tVL7U9okzWKh6S1UOLW1SSiHZS6rHh75ZN%2F6xx8ZV251zw4Qw%2Fl84w7gK7%2FU%3D&ua=&userId=2126345900&umidtoken=YMc0zDavyY0DAN6Y182QsKAJ&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&asac=2A20C07RJ9F51AOEFSNHDR&timestamp=1623938474&activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&sqSv=1.0&sign=d1b43f760633debddc52f034e7d8a760&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.1.3%26utdid%3DYMc0zDavyY0DAN6Y182QsKAJ%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2126345900%26sn%3D620C6998D9CD2861F9570A29F9D7E5E55978B050%26umidtoken%3DYMc0zDavyY0DAN6Y182QsKAJ%26msv%3D8.0.0%26brand%3DApple%26imei%3D47CDC78F941F90D86A17FEF024935D59D674C30D%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhoneXS%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D0D07CCA6-5CB0-4667-9FC4-CBACC37EECF5"},{"key":"shuqijsspbody10","val":""},{"key":"shuqijsydurl10","val":""},{"key":"shuqijsydbody10","val":""},{"key":"shuqijsqdbody10","val":""},{"key":"shuqijsqdspyurl10","val":""},{"key":"shuqijsqdspbody10","val":""},{"key":"shuqijsrwbody10","val":""},{"key":"shuqijsfxbody10","val":""},{"key":"shuqijsbookurl10","val":""},{"key":"shuqijsbookbody10","val":""},{"key":"shuqijssprwurl10","val":""},{"key":"shuqiuserurl11","val":"https://ocean.shuqireader.com/api/jaccount/accountapi/v1/sapi/account/getBindinfo?userId=2124519080&sqSv=1.0&timestamp=1623938596&sign=372ec3897592b322676b7985a0f2773e&key=sq_h5_gateway"},{"key":"shuqisyurl11","val":"https://render.shuqireader.com/load/resource?sdk=13.5.1&utdid=YMc0zDavyY0DAN6Y182QsKAJ&ustatus=0&first_placeid=111111&net_env=3g&placeid=111111&user_id=2124519080&sn=579032A4633196EDCF2B6017E3BBFB04B0963D53&umidtoken=YMc0zDavyY0DAN6Y182QsKAJ&msv=8.0.0&brand=Apple&imei=4C2E6D479FBC6A9A357162B9985055AED372C5CF&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&session=&skinColor=23B383&platform=iOS&ver=210301&mod=iPhoneXR&statusBarHeight=44.000000&skinVersion=1&wh=1242x2688&soft_id=21&utype=pre_vip&skinId=999&idfa=B9ACC586-8E8B-42C1-A562-4E6F8DE6A68F"},{"key":"shuqisybody11","val":"appVer=4.3.6.0&imei=4C2E6D479FBC6A9A357162B9985055AED372C5CF&isNewUser=1&params=%7B%22resources%22%3A%7B%22ShuqiVipEntry%22%3A%7B%7D%2C%22personalCardConfig%22%3A%7B%7D%7D%7D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=6fb154a3e90212e87293fd526238e18d&sn=579032A4633196EDCF2B6017E3BBFB04B0963D53&soft_id=21&timestamp=1623938507&user_id=2124519080&ver=210301"},{"key":"shuqispbody11","val":"_public=skinId%3D999%26idfa%3DB9ACC586-8E8B-42C1-A562-4E6F8DE6A68F%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26umidtoken%3DYMc0zDavyY0DAN6Y182QsKAJ%26user_id%3D2124519080%26sn%3D579032A4633196EDCF2B6017E3BBFB04B0963D53%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D4C2E6D479FBC6A9A357162B9985055AED372C5CF%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhoneXR%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYMc0zDavyY0DAN6Y182QsKAJ%26utype%3Dpre_vip%26sdk%3D13.5.1&deliveryId=525&key=sq_app_ad&miniWua=HHnB_jM6ePOwDsntlu8If%2Bmfo0iwbn%2BgUAQ0k3FF0EJoAdQY%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=626&sign=9ADD94BC5778948710B2B9875D7684E4&timestamp=1623938563&userId=2124519080&user_id=2124519080&wua=HIVW_7l/z/fNyLI1KVCUvzFjnOqWS0k7VjDkbFvgHeWcvBXiDvUhTPM9ajtOPIaM/O3goCuDvWG2NW3A9A0rlLBmXIbHxXW86QhYOHq4zlyfZC1anM6zg1IsJTim/7X0fYqRjFUx0iqZcc1Vquew7zvSYczMKlYbW3dRiMgQlQllqWgBgcuBSXTWOGx4LVX9LlIMyXCYS9xQKPCKzRMl1gyq2rJhAk8QbIleG5dtRxpKaFkU%3D"},{"key":"shuqiscbody11","val":"_public=skinId%253D999%2526idfa%253DB9ACC586-8E8B-42C1-A562-4E6F8DE6A68F%2526ustatus%253D0%2526first_placeid%253D111111%2526net_env%253D3g%2526umidtoken%253DYMc0zDavyY0DAN6Y182QsKAJ%2526user_id%253D2124519080%2526sn%253D579032A4633196EDCF2B6017E3BBFB04B0963D53%2526placeid%253D111111%2526msv%253D8.0.0%2526brand%253DApple%2526imei%253D4C2E6D479FBC6A9A357162B9985055AED372C5CF%2526skinVersionPrefix%253D1%2526appVer%253D4.3.6.0%2526skinActiveColor%253D0F9970%2526manufacturer%253DApple%2526skinColor%253D23B383%2526platform%253DiOS%2526ver%253D210301%2526mod%253DiPhoneXR%2526statusBarHeight%253D44.000000%2526skinVersion%253D1%2526wh%253D1242x2688%2526soft_id%253D21%2526utdid%253DYMc0zDavyY0DAN6Y182QsKAJ%2526utype%253Dpre_vip%2526sdk%253D13.5.1&key=and_log&readingList=%5B%7B%22startTime%22%3A1623938510%2C%22readObjType%22%3A1%2C%22attr%22%3A2%2C%22readObjId%22%3A%228316008%22%2C%22readChapterId%22%3A1424317%2C%22readingLen%22%3A42%7D%5D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=929D2B15082B7519E0FCF2A757764DA5&timestamp=1623938552&user_id=2124519080"},{"key":"shuqiydbody11","val":"_public=skinId%3D999%26idfa%3DB9ACC586-8E8B-42C1-A562-4E6F8DE6A68F%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26umidtoken%3DYMc0zDavyY0DAN6Y182QsKAJ%26user_id%3D2124519080%26sn%3D579032A4633196EDCF2B6017E3BBFB04B0963D53%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D4C2E6D479FBC6A9A357162B9985055AED372C5CF%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhoneXR%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYMc0zDavyY0DAN6Y182QsKAJ%26utype%3Dpre_vip%26sdk%3D13.5.1&deliveryId=707&key=sq_app_ad&miniWua=HHnB_A8ElkrNWYT9RIqc1NPxk4qykaLuyGSTjLJTJT4ldq5w%3D&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=678&sign=FD9A17BCA440632C753B43CCCEAB7D7E&timestamp=1623938548&userId=2124519080&wua=HIVW_HFr3JFC0pLg%2BqK7xz6%2BUu8Zn3TYVsP8dXYTzv2D46Ahts3h3Geb9fuv31SXHjt7dM87VhL9zzP%2BTmV0I8UUcqftxEWOj9ik%2BKo9SMu80sslkjoDmGLDApZYm2mjW088DsM%2BucRYHqBN0CB9p%2BZ5qYW2EBNjRR0ABbfw3V6mWKlPD56%2BGjPJ8vXMx4mT%2BERx/P3nM5oIpW2Za24OAgmveOeSrmvMkstPyb5aAeDg69TE%3D"},{"key":"shuqiqdbody11","val":"clientTimestamp=1623938557&position=501&userId=2124519080&signInType=1&wua=HIVW_lyG%2FuZSX6awrJEesxYQy2wAHxiDQ4XgADT6pZaM0hkqyE3vRbeqippB6abHS7XZmlCt09L5K3o%2F49LTrtBOQmJhCWf3Xgy2hOwzNw9GFgRiERm0agJPtGVbzLdtJV63cUDiTbBC6Ul4ODvJTF8ZXS5idVRphPjWtAKKYxW8%2FVZyKt3X7aQAYA99QjyPXoI5tn7XLj9IdHder6OLQjh%2BBYQWxPoRNWKfE4WNQf%2FtSimU%3D&ua=&miniWua=HHnB_3QGXUkKyKcnM3yGE7cBMAsgspviXTysco1N5z0GpphI%3D&umidtoken=YMc0zDavyY0DAN6Y182QsKAJ&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&sign=db9525cb59ada4206bc0404baebb2e40&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26sdk%3D13.5.1%26utdid%3DYMc0zDavyY0DAN6Y182QsKAJ%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2124519080%26sn%3D579032A4633196EDCF2B6017E3BBFB04B0963D53%26umidtoken%3DYMc0zDavyY0DAN6Y182QsKAJ%26msv%3D8.0.0%26brand%3DApple%26imei%3D4C2E6D479FBC6A9A357162B9985055AED372C5CF%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhoneXR%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DB9ACC586-8E8B-42C1-A562-4E6F8DE6A68F"},{"key":"shuqirwbody11","val":""},{"key":"shuqifxbody11","val":""},{"key":"shuqisprwurl11","val":"https://ocean.shuqireader.com/api/ad/adserver/v1/api/getAdInfo?appVer=4.3.6.0&placeId=111111&platform=iOS&requestSrc=h5&resourceId=626&timestamp=1623938597&user_id=2124519080&sqSv=1.0&sign=b0dd0fbedb57f479bd6e288a02a5e00b&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26sdk%3D13.5.1%26utdid%3DYMc0zDavyY0DAN6Y182QsKAJ%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2124519080%26sn%3D579032A4633196EDCF2B6017E3BBFB04B0963D53%26umidtoken%3DYMc0zDavyY0DAN6Y182QsKAJ%26msv%3D8.0.0%26brand%3DApple%26imei%3D4C2E6D479FBC6A9A357162B9985055AED372C5CF%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhoneXR%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DB9ACC586-8E8B-42C1-A562-4E6F8DE6A68F"},{"key":"shuqijlbody11","val":"requestSrc=h5&userId=2124519080&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1623938571&sqSv=1.0&sign=3a3f554e57cd7f7ec0aa951d362b18f0&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26sdk%3D13.5.1%26utdid%3DYMc0zDavyY0DAN6Y182QsKAJ%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2124519080%26sn%3D579032A4633196EDCF2B6017E3BBFB04B0963D53%26umidtoken%3DYMc0zDavyY0DAN6Y182QsKAJ%26msv%3D8.0.0%26brand%3DApple%26imei%3D4C2E6D479FBC6A9A357162B9985055AED372C5CF%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhoneXR%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DB9ACC586-8E8B-42C1-A562-4E6F8DE6A68F"},{"key":"shuqisqjlbody11","val":"src=&userId=2124519080&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1623938560&sqSv=1.0&sign=fa184df8eb60af7f8e3f4428aa7ab28e&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26sdk%3D13.5.1%26utdid%3DYMc0zDavyY0DAN6Y182QsKAJ%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2124519080%26sn%3D579032A4633196EDCF2B6017E3BBFB04B0963D53%26umidtoken%3DYMc0zDavyY0DAN6Y182QsKAJ%26msv%3D8.0.0%26brand%3DApple%26imei%3D4C2E6D479FBC6A9A357162B9985055AED372C5CF%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhoneXR%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DB9ACC586-8E8B-42C1-A562-4E6F8DE6A68F"},{"key":"shuqicjyurl11","val":"https://ocean.shuqireader.com/api/activity/activity/v1/lottery/info?timestamp=1623938598&userId=2124519080&activityId=311&sqSv=1.0&sign=5dcc867648735a73691bfa7a12a6c718&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.5.1%26utdid%3DYMc0zDavyY0DAN6Y182QsKAJ%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2124519080%26sn%3D579032A4633196EDCF2B6017E3BBFB04B0963D53%26umidtoken%3DYMc0zDavyY0DAN6Y182QsKAJ%26msv%3D8.0.0%26brand%3DApple%26imei%3D4C2E6D479FBC6A9A357162B9985055AED372C5CF%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhoneXR%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DB9ACC586-8E8B-42C1-A562-4E6F8DE6A68F"},{"key":"shuqicjcsbody11","val":"_public=skinId%3D999%26idfa%3DB9ACC586-8E8B-42C1-A562-4E6F8DE6A68F%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26umidtoken%3DYMc0zDavyY0DAN6Y182QsKAJ%26user_id%3D2124519080%26sn%3D579032A4633196EDCF2B6017E3BBFB04B0963D53%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D4C2E6D479FBC6A9A357162B9985055AED372C5CF%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhoneXR%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYMc0zDavyY0DAN6Y182QsKAJ%26utype%3Dpre_vip%26sdk%3D13.5.1&deliveryId=711&key=sq_app_ad&miniWua=HHnB_MYYtXJTv8IPIybvfsYFt%2BMVEhENVzFtsImq0QGHF/EI%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=703&sign=282409EDA60A73728B185073716299B0&timestamp=1623938579&userId=2124519080&user_id=2124519080&wua=HIVW_LA%2BtL51rbqgZb8nS9PIgkP%2Bpm9WE84BlcWAwBOjGtJ90P4svOJHCzxC8xc1G8/O3GuHTQMkMycSeaqZK5O2rUOtHsX%2Bp%2BFmfCSq879ZJ/8lfoxhg10cdfgWuHPFV9zb/obJpcqx8O25XGjWr25IZGxkYJsIESJvUy4Sy7Qc2SLVpWxcabyXrrvF/ozVyh4gub/U/NoUr5cNgN%2B8MAFgRCKanGXnL/9YKc0hE8CWsMTI%3D"},{"key":"shuqicjbody11","val":"wua=HIVW_czcns2vTTqAp0P9Cqb53aTpa1gWlNlf6slCvyHgVFFMyGiUAateLyyZqjVonsSVpUEQbSeYiSrxrX%2F3LCvJdMTKYdVlgOaK8K3X4N0pktUYO%2BkrG8NelBW2jW34oV7QcwvJYmA%2BwGR9JAQYuYhtdZibL5hPX7C2c5b8VffnxBYt9FDt5w4gQ9AqUCQHolWX68n2M%2FhLmFk8MWFMKbsqzLUoL%2BdTs%2BAjwO1AXp825m34%3D&ua=&userId=2124519080&umidtoken=YMc0zDavyY0DAN6Y182QsKAJ&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&asac=2A20C07RJ9F51AOEFSNHDR&timestamp=1623938584&activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&sqSv=1.0&sign=e0c43eef9d971f09c2d31b17d6928c3d&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.5.1%26utdid%3DYMc0zDavyY0DAN6Y182QsKAJ%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2124519080%26sn%3D579032A4633196EDCF2B6017E3BBFB04B0963D53%26umidtoken%3DYMc0zDavyY0DAN6Y182QsKAJ%26msv%3D8.0.0%26brand%3DApple%26imei%3D4C2E6D479FBC6A9A357162B9985055AED372C5CF%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhoneXR%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DB9ACC586-8E8B-42C1-A562-4E6F8DE6A68F"},{"key":"shuqijsspbody11","val":""},{"key":"shuqijsydurl11","val":""},{"key":"shuqijsydbody11","val":""},{"key":"shuqijsqdbody11","val":""},{"key":"shuqijsqdspyurl11","val":""},{"key":"shuqijsqdspbody11","val":""},{"key":"shuqijsrwbody11","val":""},{"key":"shuqijsfxbody11","val":""},{"key":"shuqijsbookurl11","val":""},{"key":"shuqijsbookbody11","val":""},{"key":"shuqijssprwurl11","val":""},{"key":"shuqiuserurl12","val":"https://ocean.shuqireader.com/api/jaccount/accountapi/v1/sapi/account/getBindinfo?userId=2124470690&sqSv=1.0&timestamp=1623938720&sign=8b2abe50c95e302c17c8c10a2e93287d&key=sq_h5_gateway"},{"key":"shuqisyurl12","val":"https://render.shuqireader.com/load/resource?sdk=13.1.1&utdid=YMqjs7gsZOQDAG12f5YGYF2K&ustatus=0&first_placeid=111111&net_env=4g&placeid=111111&user_id=2124470690&sn=68183AD64129950FEC73CA47BD40E8737CE998F2&umidtoken=YMqjs7gsZOQDAG12f5YGYF2K&msv=8.0.0&brand=Apple&imei=DEA4F7FCAACC3EBE6675690B493416164B5D6E48&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=iOS&ver=210301&mod=iPhone7plus&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=903667D2-73C3-4C80-AC77-DC446FC31911"},{"key":"shuqisybody12","val":"appVer=4.3.6.0&imei=DEA4F7FCAACC3EBE6675690B493416164B5D6E48&isNewUser=1&params=%7B%22resources%22%3A%7B%22ShuqiVipEntry%22%3A%7B%7D%2C%22personalCardConfig%22%3A%7B%7D%7D%7D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=025b2515c4cd828a1a8f88e02ecdbb42&sn=68183AD64129950FEC73CA47BD40E8737CE998F2&soft_id=21&timestamp=1623938620&user_id=2124470690&ver=210301"},{"key":"shuqispbody12","val":"_public=skinId%3D999%26idfa%3D903667D2-73C3-4C80-AC77-DC446FC31911%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26umidtoken%3DYMqjs7gsZOQDAG12f5YGYF2K%26user_id%3D2124470690%26sn%3D68183AD64129950FEC73CA47BD40E8737CE998F2%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3DDEA4F7FCAACC3EBE6675690B493416164B5D6E48%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhone7plus%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYMqjs7gsZOQDAG12f5YGYF2K%26utype%3Dpre_vip%26sdk%3D13.1.1&deliveryId=525&key=sq_app_ad&miniWua=HHnB_wEoBp4j17YUxgdHug/5yXNmaG/yQWkatt0KeRVUdcEY%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=626&sign=482F65B041ACCD2759F08C5BCCC13A64&timestamp=1623938689&userId=2124470690&user_id=2124470690&wua=HIVW_6m9QBuuGZGu6/aqkiuYK1k0xLM82RLmk39OylUPkWN13gx6Pny4UA/XwPelXiG2X0FQkeupIMXdmEunly1ynL3sYL8lNMs6Y3IJELmBEpTs5zNAho8HrT1CQVAdDW17MRs9ZGXg2%2BQyicXOurlo9desyBMi9MtCfgnGV9kCG6ZUGF017vwKT4kRPQoiNRchqegBmVnas1crnZWQe8pHbjCan06%2BBfigPBsgSR3kp0Ms%3D"},{"key":"shuqiscbody12","val":"_public=skinId%253D999%2526idfa%253D903667D2-73C3-4C80-AC77-DC446FC31911%2526ustatus%253D0%2526first_placeid%253D111111%2526net_env%253D4g%2526umidtoken%253DYMqjs7gsZOQDAG12f5YGYF2K%2526user_id%253D2124470690%2526sn%253D68183AD64129950FEC73CA47BD40E8737CE998F2%2526placeid%253D111111%2526msv%253D8.0.0%2526brand%253DApple%2526imei%253DDEA4F7FCAACC3EBE6675690B493416164B5D6E48%2526skinVersionPrefix%253D1%2526appVer%253D4.3.6.0%2526skinActiveColor%253D0F9970%2526manufacturer%253DApple%2526skinColor%253D23B383%2526platform%253DiOS%2526ver%253D210301%2526mod%253DiPhone7plus%2526statusBarHeight%253D44.000000%2526skinVersion%253D1%2526wh%253D1242x2688%2526soft_id%253D21%2526utdid%253DYMqjs7gsZOQDAG12f5YGYF2K%2526utype%253Dpre_vip%2526sdk%253D13.1.1&key=and_log&readingList=%5B%7B%22startTime%22%3A1623938641%2C%22readObjType%22%3A1%2C%22attr%22%3A2%2C%22readObjId%22%3A%228255483%22%2C%22readChapterId%22%3A1372346%2C%22readingLen%22%3A31%7D%5D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=881FC9BA858BF0A07D58079D3D33E6E7&timestamp=1623938672&user_id=2124470690"},{"key":"shuqiydbody12","val":"_public=skinId%3D999%26idfa%3D903667D2-73C3-4C80-AC77-DC446FC31911%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26umidtoken%3DYMqjs7gsZOQDAG12f5YGYF2K%26user_id%3D2124470690%26sn%3D68183AD64129950FEC73CA47BD40E8737CE998F2%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3DDEA4F7FCAACC3EBE6675690B493416164B5D6E48%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhone7plus%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYMqjs7gsZOQDAG12f5YGYF2K%26utype%3Dpre_vip%26sdk%3D13.1.1&deliveryId=707&key=sq_app_ad&miniWua=HHnB_1yN7oVlFChSELenTrQz1jomQCB9pj5dDoFZVtXKjbhc%3D&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=678&sign=208A020C5CB24ADB450B34C19A54F0CC&timestamp=1623938670&userId=2124470690&wua=HIVW_jV6OZ1Hsl78nEm8mPOpqwB79Ev4vR3TkCYyAaZB%2B%2BMnv7CRYhH1hl%2BVYV8bKPTQp4dt0w397kHdwCAQID47QXfd036scqIj1fMWP6nvAosPOggLjDjq0FZVorjbjelRMteaRI02F1NXtXpY2msA2AJYkoyKEQcZp4ovcdgrSm4eyxvfNOO%2Bw4mTyOsOL6vVWZm%2Bhf6JyGOJTAsjivh8B4Xm28YF0gU72Jif9Cv0zVyo%3D"},{"key":"shuqiqdbody12","val":"clientTimestamp=1623938683&position=501&userId=2124470690&signInType=1&wua=HIVW_ypn7eKHmrDZiOAoHtpQp5jDjuAuktK%2F3mm3zPs0718dNS2dvLN1nbuRS15F58yf76BwRaxm%2FoIXiPXHEgbzGH%2BioTXQqATjFTAfZbOa38%2BBccZcsx%2Fj5fO8qxaLkTf1O6IuX91Gz1OV6m5g9vh%2F3%2BnOPZiTd22s6C7guIw5qISrbIO3PMuL95LgtnAeUbAgoDe5fx7Y%2B75S%2F7C9fq2OI6Tcoxy4XizFNgdt7bgYbYDY%3D&ua=&miniWua=HHnB_A2jvu6GEv9ri2zRA6JAzXmZxUXOJWdQVBWp1DUn7JCw%3D&umidtoken=YMqjs7gsZOQDAG12f5YGYF2K&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&sign=5e33f4a794873bfc3d5b2e1c25c7510f&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26sdk%3D13.1.1%26utdid%3DYMqjs7gsZOQDAG12f5YGYF2K%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2124470690%26sn%3D68183AD64129950FEC73CA47BD40E8737CE998F2%26umidtoken%3DYMqjs7gsZOQDAG12f5YGYF2K%26msv%3D8.0.0%26brand%3DApple%26imei%3DDEA4F7FCAACC3EBE6675690B493416164B5D6E48%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone7plus%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D903667D2-73C3-4C80-AC77-DC446FC31911"},{"key":"shuqirwbody12","val":""},{"key":"shuqifxbody12","val":""},{"key":"shuqisprwurl12","val":"https://ocean.shuqireader.com/api/ad/adserver/v1/api/getAdInfo?appVer=4.3.6.0&placeId=111111&platform=iOS&requestSrc=h5&resourceId=626&timestamp=1623938720&user_id=2124470690&sqSv=1.0&sign=fa7366fb749df1deafcce495e2af2010&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26sdk%3D13.1.1%26utdid%3DYMqjs7gsZOQDAG12f5YGYF2K%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2124470690%26sn%3D68183AD64129950FEC73CA47BD40E8737CE998F2%26umidtoken%3DYMqjs7gsZOQDAG12f5YGYF2K%26msv%3D8.0.0%26brand%3DApple%26imei%3DDEA4F7FCAACC3EBE6675690B493416164B5D6E48%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone7plus%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D903667D2-73C3-4C80-AC77-DC446FC31911"},{"key":"shuqijlbody12","val":"requestSrc=h5&userId=2124470690&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1623938695&sqSv=1.0&sign=13e0150d68fafc9743f630031210d4d8&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26sdk%3D13.1.1%26utdid%3DYMqjs7gsZOQDAG12f5YGYF2K%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2124470690%26sn%3D68183AD64129950FEC73CA47BD40E8737CE998F2%26umidtoken%3DYMqjs7gsZOQDAG12f5YGYF2K%26msv%3D8.0.0%26brand%3DApple%26imei%3DDEA4F7FCAACC3EBE6675690B493416164B5D6E48%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone7plus%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D903667D2-73C3-4C80-AC77-DC446FC31911"},{"key":"shuqisqjlbody12","val":"src=&userId=2124470690&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1623938682&sqSv=1.0&sign=16d0138f3f4cfacf2562ee876dcca404&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26sdk%3D13.1.1%26utdid%3DYMqjs7gsZOQDAG12f5YGYF2K%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2124470690%26sn%3D68183AD64129950FEC73CA47BD40E8737CE998F2%26umidtoken%3DYMqjs7gsZOQDAG12f5YGYF2K%26msv%3D8.0.0%26brand%3DApple%26imei%3DDEA4F7FCAACC3EBE6675690B493416164B5D6E48%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone7plus%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D903667D2-73C3-4C80-AC77-DC446FC31911"},{"key":"shuqicjyurl12","val":"https://ocean.shuqireader.com/api/activity/activity/v1/lottery/info?timestamp=1623938723&userId=2124470690&activityId=311&sqSv=1.0&sign=49b8c565802ebbcc979387912d434757&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.1.1%26utdid%3DYMqjs7gsZOQDAG12f5YGYF2K%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2124470690%26sn%3D68183AD64129950FEC73CA47BD40E8737CE998F2%26umidtoken%3DYMqjs7gsZOQDAG12f5YGYF2K%26msv%3D8.0.0%26brand%3DApple%26imei%3DDEA4F7FCAACC3EBE6675690B493416164B5D6E48%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone7plus%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D903667D2-73C3-4C80-AC77-DC446FC31911"},{"key":"shuqicjcsbody12","val":"_public=skinId%3D999%26idfa%3D903667D2-73C3-4C80-AC77-DC446FC31911%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26umidtoken%3DYMqjs7gsZOQDAG12f5YGYF2K%26user_id%3D2124470690%26sn%3D68183AD64129950FEC73CA47BD40E8737CE998F2%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3DDEA4F7FCAACC3EBE6675690B493416164B5D6E48%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhone7plus%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYMqjs7gsZOQDAG12f5YGYF2K%26utype%3Dpre_vip%26sdk%3D13.1.1&deliveryId=711&key=sq_app_ad&miniWua=HHnB_NvjS3kNjAGWgtprqvdv4P0BdB3/vhvDVli7Lzn%2BF%2BvM%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=703&sign=220A6CE42217671FAA8DE10516AC4AB2&timestamp=1623938702&userId=2124470690&user_id=2124470690&wua=HIVW_16Wfk7hFBoUPies3vXBKwgzNhdPJjArNVVMBLx/q68rNc99K3uA3Xkv3RMEZEE5OYGW43fdYF3Afll%2BW%2B7nrYzrfM4wEQibTa9YYntFqODy/VoZfpMK7dYM1/ilb6Squ18GOplfdqoG10llYv9GdD8WsqL9elqr9VOlEBLId2yeAG8Gna2pp49zMuIwXSWrijNYFJ%2BDtg6LGFi%2BfHmi3MX15o90hmQuuNXuiTNmmvUw%3D"},{"key":"shuqicjbody12","val":"wua=HIVW_x2VMH%2Brojv8sl2icfWec2EakXbheYejESMCi5Po5MX%2B%2B2JOb1pG70Q0t2ubWcMzQRhNLANngdPSvK464xRsh4ziczEvHDYZc%2B6LrnwXTvx0R0shBo%2BvgpAWzgrfvJg8ra3oU8H6qTNvcmQNdBOCg4r6Yqy2cTLKKBU7C8tLJSEJkFAeYyW8fIKEwmCwp61mpz1iMS%2F4lHlUC9WnYxtgiVJc0I0e%2FI6TCwdOnLf6Zcf4%3D&ua=&userId=2124470690&umidtoken=YMqjs7gsZOQDAG12f5YGYF2K&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&asac=2A20C07RJ9F51AOEFSNHDR&timestamp=1623938707&activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&sqSv=1.0&sign=7a0ac215e115e5204eea393fac306a49&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.1.1%26utdid%3DYMqjs7gsZOQDAG12f5YGYF2K%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2124470690%26sn%3D68183AD64129950FEC73CA47BD40E8737CE998F2%26umidtoken%3DYMqjs7gsZOQDAG12f5YGYF2K%26msv%3D8.0.0%26brand%3DApple%26imei%3DDEA4F7FCAACC3EBE6675690B493416164B5D6E48%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone7plus%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D903667D2-73C3-4C80-AC77-DC446FC31911"},{"key":"shuqijsspbody12","val":""},{"key":"shuqijsydurl12","val":""},{"key":"shuqijsydbody12","val":""},{"key":"shuqijsqdbody12","val":""},{"key":"shuqijsqdspyurl12","val":""},{"key":"shuqijsqdspbody12","val":""},{"key":"shuqijsrwbody12","val":""},{"key":"shuqijsfxbody12","val":""},{"key":"shuqijsbookurl12","val":""},{"key":"shuqijsbookbody12","val":""},{"key":"shuqijssprwurl12","val":""},{"key":"shuqiuserurl13","val":"https://ocean.shuqireader.com/api/jaccount/accountapi/v1/sapi/account/getBindinfo?userId=2125216893&sqSv=1.0&timestamp=1623938834&sign=c607a5fff7f9c3a780afc343eae24fb0&key=sq_h5_gateway"},{"key":"shuqisyurl13","val":"https://render.shuqireader.com/load/resource?sdk=13.3&utdid=YMqjs7gsZOQDAG12f5YGYF2K&ustatus=0&first_placeid=111111&net_env=wifi&placeid=111111&user_id=2125216893&sn=1DF679EED0D70529C008C7438E1575FAF1CA817F&umidtoken=YMqjs7gsZOQDAG12f5YGYF2K&msv=8.0.0&brand=Apple&imei=3DD96D8D277C8329479AD7221220C9D2C1261089&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&session=&skinColor=23B383&platform=iOS&ver=210301&mod=UnknowniPad&statusBarHeight=44.000000&skinVersion=1&wh=1242x2688&soft_id=21&utype=pre_vip&skinId=999&idfa=C51D5EB5-DB5F-47DB-8123-6DB0BA59F109"},{"key":"shuqisybody13","val":"appVer=4.3.6.0&imei=3DD96D8D277C8329479AD7221220C9D2C1261089&isNewUser=1&params=%7B%22resources%22%3A%7B%22ShuqiVipEntry%22%3A%7B%7D%2C%22personalCardConfig%22%3A%7B%7D%7D%7D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=e0fe3922e543f96fdc78b6cc0ab7d438&sn=1DF679EED0D70529C008C7438E1575FAF1CA817F&soft_id=21&timestamp=1623938747&user_id=2125216893&ver=210301"},{"key":"shuqispbody13","val":"_public=skinId%3D999%26idfa%3DC51D5EB5-DB5F-47DB-8123-6DB0BA59F109%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26umidtoken%3DYMqjs7gsZOQDAG12f5YGYF2K%26user_id%3D2125216893%26sn%3D1DF679EED0D70529C008C7438E1575FAF1CA817F%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D3DD96D8D277C8329479AD7221220C9D2C1261089%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYMqjs7gsZOQDAG12f5YGYF2K%26utype%3Dpre_vip%26sdk%3D13.3&deliveryId=525&key=sq_app_ad&miniWua=HHnB_osPhuvDdRRE3nfhObOzII2eYXCMt83xSwdpwFi29FPA%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=626&sign=C8C695D0A2879915019A0EBA2B76CB5B&timestamp=1623938800&userId=2125216893&user_id=2125216893&wua=HIVW_yXjkHvMF%2BQGPHYBBS41MNo6bMPPDFMqxuxYAKd/nLWzAD/emumN6id018jM7j0C1TyCFTg6www3ktvDyYxXec9AKBL8lSGi26DpXMFnsq4nNtTTtl0bHV1Fq/6aPqs/%2Bp/%2BmTMPFQEWA4I8zPo8CDjY867HtVK60SjSswHyOoTc3hLFNOY%2BtXv0dANtov1AG8y8lWFXVRVJu/uqsVGU3u8EvlXMjd1s%2BRnmOK07gbdQ%3D"},{"key":"shuqiscbody13","val":"_public=skinId%253D999%2526idfa%253DC51D5EB5-DB5F-47DB-8123-6DB0BA59F109%2526ustatus%253D0%2526first_placeid%253D111111%2526net_env%253Dwifi%2526umidtoken%253DYMqjs7gsZOQDAG12f5YGYF2K%2526user_id%253D2125216893%2526sn%253D1DF679EED0D70529C008C7438E1575FAF1CA817F%2526placeid%253D111111%2526msv%253D8.0.0%2526brand%253DApple%2526imei%253D3DD96D8D277C8329479AD7221220C9D2C1261089%2526skinVersionPrefix%253D1%2526appVer%253D4.3.6.0%2526skinActiveColor%253D0F9970%2526manufacturer%253DApple%2526skinColor%253D23B383%2526platform%253DiOS%2526ver%253D210301%2526mod%253DUnknowniPad%2526statusBarHeight%253D44.000000%2526skinVersion%253D1%2526wh%253D1242x2688%2526soft_id%253D21%2526utdid%253DYMqjs7gsZOQDAG12f5YGYF2K%2526utype%253Dpre_vip%2526sdk%253D13.3&key=and_log&readingList=%5B%7B%22startTime%22%3A1623938749%2C%22readObjType%22%3A1%2C%22attr%22%3A2%2C%22readObjId%22%3A%227659050%22%2C%22readChapterId%22%3A1427286%2C%22readingLen%22%3A41%7D%5D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=D3E42925B6E36864F9701CCB3679FF3F&timestamp=1623938791&user_id=2125216893"},{"key":"shuqiydbody13","val":"_public=skinId%3D999%26idfa%3DC51D5EB5-DB5F-47DB-8123-6DB0BA59F109%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26umidtoken%3DYMqjs7gsZOQDAG12f5YGYF2K%26user_id%3D2125216893%26sn%3D1DF679EED0D70529C008C7438E1575FAF1CA817F%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D3DD96D8D277C8329479AD7221220C9D2C1261089%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYMqjs7gsZOQDAG12f5YGYF2K%26utype%3Dpre_vip%26sdk%3D13.3&deliveryId=707&key=sq_app_ad&miniWua=HHnB_36Gn0yBx/jnRO%2BVXy7u3/SoTqKNMqtCmerYJ7QCrVyE%3D&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=678&sign=E6D3B6E8897B906701E8B852955F5B88&timestamp=1623938786&userId=2125216893&wua=HIVW_i5gMN5l8R9BmJg43vs4iacH187PnBPNBr8Ce2y98Za%2B0C/zGhvemBW2SIGpPyXJ7%2B0uNmmXiNi/qn%2ByfYMxu%2BjTjiZEfIKRb5qiJZi/l5gkk%2Bbnqu/SVBlZ3Wzos%2BpVD1XW3iLtvxnMlbGChGJs8rq9tTqo5CGPFGoh9zBcmaeMSlqttswl9IDTjiAzD6KLODxtjqSYZl9aED5/Zvb7AcF0gjYCvCX0aXhvumRoR8lE%3D"},{"key":"shuqiqdbody13","val":"clientTimestamp=1623938796&position=501&userId=2125216893&signInType=1&wua=HIVW_vzVNLUQmNt5LvoJZM%2Borgogpmp%2BXEllRQvv4cmqg1VPl48b7bYbipZFtsisn44iroRDPiOJ6wFweDuBVhgWs7dZP7Re47XI1NeE2%2BOcPdnCtye7XqWok12vMxAtfCb5ZB%2B%2BsjcZIxeaOq0QPprL70fCS7YR5Zm%2BduHi9WWIqdl7Ew4SdNPevfM6ISZ57nBXpz3a5AgCH8%2FlYp%2FkwKgR%2FwHE2lDHyVk3R1UNXkX0fO3w%3D&ua=&miniWua=HHnB_cIVxbiLYQiwL%2FXdyPkhPFPbwyaZUJhS%2FJgZtPRBSVrg%3D&umidtoken=YMqjs7gsZOQDAG12f5YGYF2K&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&sign=4a1f8a0dbaee6a3d379b6bb01186be46&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26sdk%3D13.3%26utdid%3DYMqjs7gsZOQDAG12f5YGYF2K%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2125216893%26sn%3D1DF679EED0D70529C008C7438E1575FAF1CA817F%26umidtoken%3DYMqjs7gsZOQDAG12f5YGYF2K%26msv%3D8.0.0%26brand%3DApple%26imei%3D3DD96D8D277C8329479AD7221220C9D2C1261089%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DC51D5EB5-DB5F-47DB-8123-6DB0BA59F109"},{"key":"shuqirwbody13","val":""},{"key":"shuqifxbody13","val":""},{"key":"shuqisprwurl13","val":"https://ocean.shuqireader.com/api/ad/adserver/v1/api/getAdInfo?appVer=4.3.6.0&placeId=111111&platform=iOS&requestSrc=h5&resourceId=626&timestamp=1623938835&user_id=2125216893&sqSv=1.0&sign=626ac2c37639864bce2e9b2db88105cb&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26sdk%3D13.3%26utdid%3DYMqjs7gsZOQDAG12f5YGYF2K%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2125216893%26sn%3D1DF679EED0D70529C008C7438E1575FAF1CA817F%26umidtoken%3DYMqjs7gsZOQDAG12f5YGYF2K%26msv%3D8.0.0%26brand%3DApple%26imei%3D3DD96D8D277C8329479AD7221220C9D2C1261089%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DC51D5EB5-DB5F-47DB-8123-6DB0BA59F109"},{"key":"shuqijlbody13","val":"requestSrc=h5&userId=2125216893&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1623938807&sqSv=1.0&sign=3372f9ec9d1833862a40070994642901&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26sdk%3D13.3%26utdid%3DYMqjs7gsZOQDAG12f5YGYF2K%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2125216893%26sn%3D1DF679EED0D70529C008C7438E1575FAF1CA817F%26umidtoken%3DYMqjs7gsZOQDAG12f5YGYF2K%26msv%3D8.0.0%26brand%3DApple%26imei%3D3DD96D8D277C8329479AD7221220C9D2C1261089%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DC51D5EB5-DB5F-47DB-8123-6DB0BA59F109"},{"key":"shuqisqjlbody13","val":"src=&userId=2125216893&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1623938798&sqSv=1.0&sign=859b3d943a7511117c22962d6bd288ca&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26sdk%3D13.3%26utdid%3DYMqjs7gsZOQDAG12f5YGYF2K%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2125216893%26sn%3D1DF679EED0D70529C008C7438E1575FAF1CA817F%26umidtoken%3DYMqjs7gsZOQDAG12f5YGYF2K%26msv%3D8.0.0%26brand%3DApple%26imei%3D3DD96D8D277C8329479AD7221220C9D2C1261089%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DC51D5EB5-DB5F-47DB-8123-6DB0BA59F109"},{"key":"shuqicjyurl13","val":"https://ocean.shuqireader.com/api/activity/activity/v1/lottery/info?timestamp=1623938840&userId=2125216893&activityId=311&sqSv=1.0&sign=06f72514ca2ebbf148806701f3e8eb43&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.3%26utdid%3DYMqjs7gsZOQDAG12f5YGYF2K%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2125216893%26sn%3D1DF679EED0D70529C008C7438E1575FAF1CA817F%26umidtoken%3DYMqjs7gsZOQDAG12f5YGYF2K%26msv%3D8.0.0%26brand%3DApple%26imei%3D3DD96D8D277C8329479AD7221220C9D2C1261089%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DC51D5EB5-DB5F-47DB-8123-6DB0BA59F109"},{"key":"shuqicjcsbody13","val":"_public=skinId%3D999%26idfa%3DC51D5EB5-DB5F-47DB-8123-6DB0BA59F109%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26umidtoken%3DYMqjs7gsZOQDAG12f5YGYF2K%26user_id%3D2125216893%26sn%3D1DF679EED0D70529C008C7438E1575FAF1CA817F%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D3DD96D8D277C8329479AD7221220C9D2C1261089%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYMqjs7gsZOQDAG12f5YGYF2K%26utype%3Dpre_vip%26sdk%3D13.3&deliveryId=711&key=sq_app_ad&miniWua=HHnB_/mkPed3In4XThfwSzEfX3SGGdpHHJ908V13/Ups8UKc%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=703&sign=2CA12DC7DF27F8F8EBFDFCD1132979C2&timestamp=1623938817&userId=2125216893&user_id=2125216893&wua=HIVW_Gd9w8V7rYqoVEeaSnyREQFdH71kgkMFCkIlgxRKkhWHBBF3A%2Bu5JADlrASzIgLhWbIVtzCiYMRtcPZQ7o8D8heb60wGOeS5l1Vtq03P0314tod2zFMCl2TvJmR7eenCFl%2B3osdsIT7X0jZFdNOjO2lty2rrIpmm%2BR//0N7hnf3hciPbF21sfZb8GUy4JqZQzTTh33tNC6sKSqkt%2ByAWFZtCPr3%2BONprtxsRXHTLPgpo%3D"},{"key":"shuqicjbody13","val":"wua=HIVW_4lijD1zmm4HMB5tKWp0eptcuaRk0SkSFF509p1l%2Bckt4gwaq4YD%2Ftul3V6Nh%2BWGNIJwiAnlgXTdO6n98mpnRWrST41hUZFs5n3arH8iomSHaymrNK%2Fh4arhtMGLllvjgvnd60a2ZLJrTyWYxTD8WHJUrJtNHxbumJuIxMEzj%2FNCJWZT2D6wp927GUJ%2BfWxFAvXAOzjYwDJUv%2B%2BKG7qo1n%2BzQqocBwRa6hXXnh%2FL%2FNZo%3D&ua=&userId=2125216893&umidtoken=YMqjs7gsZOQDAG12f5YGYF2K&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&asac=2A20C07RJ9F51AOEFSNHDR&timestamp=1623938823&activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&sqSv=1.0&sign=401bd94be331281df872723b9f479c24&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.3%26utdid%3DYMqjs7gsZOQDAG12f5YGYF2K%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2125216893%26sn%3D1DF679EED0D70529C008C7438E1575FAF1CA817F%26umidtoken%3DYMqjs7gsZOQDAG12f5YGYF2K%26msv%3D8.0.0%26brand%3DApple%26imei%3D3DD96D8D277C8329479AD7221220C9D2C1261089%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DC51D5EB5-DB5F-47DB-8123-6DB0BA59F109"},{"key":"shuqijsspbody13","val":""},{"key":"shuqijsydurl13","val":""},{"key":"shuqijsydbody13","val":""},{"key":"shuqijsqdbody13","val":""},{"key":"shuqijsqdspyurl13","val":""},{"key":"shuqijsqdspbody13","val":""},{"key":"shuqijsrwbody13","val":""},{"key":"shuqijsfxbody13","val":""},{"key":"shuqijsbookurl13","val":""},{"key":"shuqijsbookbody13","val":""},{"key":"shuqijssprwurl13","val":""},{"key":"shuqiuserurl14","val":"https://ocean.shuqireader.com/api/jaccount/accountapi/v1/sapi/account/getBindinfo?userId=2127576919&sqSv=1.0&timestamp=1623938948&sign=214c028b5e2c041b4dcc4160277ee5bf&key=sq_h5_gateway"},{"key":"shuqisyurl14","val":"https://render.shuqireader.com/load/resource?sdk=13.0&utdid=YMc1LTzoCRkDAMbSxwXjss%2FT&ustatus=0&first_placeid=111111&net_env=3g&placeid=111111&user_id=2127576919&sn=AB905D346A56A5DB8E9A5078F68EA3A6625C8B1A&umidtoken=YMc1LTzoCRkDAMbSxwXjss%2FT&msv=8.0.0&brand=Apple&imei=06BD12FCACE70A9DFEF380F89E1C88B4F421EC39&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=iOS&ver=210301&mod=iPhoneXR&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=C6560BB9-9A93-48A4-ACBF-0C219AB6F924"},{"key":"shuqisybody14","val":"appVer=4.3.6.0&imei=06BD12FCACE70A9DFEF380F89E1C88B4F421EC39&isNewUser=1&params=%7B%22resources%22%3A%7B%22ShuqiVipEntry%22%3A%7B%7D%2C%22personalCardConfig%22%3A%7B%7D%7D%7D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=5e3840bf95ec418fe77cbaaee57ec55d&sn=AB905D346A56A5DB8E9A5078F68EA3A6625C8B1A&soft_id=21&timestamp=1623938854&user_id=2127576919&ver=210301"},{"key":"shuqispbody14","val":"_public=skinId%3D999%26idfa%3DC6560BB9-9A93-48A4-ACBF-0C219AB6F924%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26umidtoken%3DYMc1LTzoCRkDAMbSxwXjss/T%26user_id%3D2127576919%26sn%3DAB905D346A56A5DB8E9A5078F68EA3A6625C8B1A%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D06BD12FCACE70A9DFEF380F89E1C88B4F421EC39%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhoneXR%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYMc1LTzoCRkDAMbSxwXjss/T%26utype%3Dpre_vip%26sdk%3D13.0&deliveryId=525&key=sq_app_ad&miniWua=HHnB_nC%2BhdRIjIcOXSsCrJqYP%2BODZ9NSZmY7a6zLBURkzuJs%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=626&sign=85922DDF314AC02E8B528D821CF4D2B6&timestamp=1623938917&userId=2127576919&user_id=2127576919&wua=HIVW_WLmHz3BSi6S5fWbyyXHsgmp3wSB3T6mTjnzUZrZLt/1TCH6EfsWMWvBQA5MiKjALX5igrTOXZxsWZDyvrZ2Zbsle03EPRHH17kTbmtKUJM1Zjr0p0TcBIJKnkh80mNK0YLRj9mf7w07gIr4O1hiC4krKApXac3IeRlSwmFm3DTKv8jCRlJTaPS1TA9gFa/Tsfa1VGfSqxHU0PykYL4FGC%2BXGTENQL4LbZCo7G9LpxBI%3D"},{"key":"shuqiscbody14","val":"_public=skinId%253D999%2526idfa%253DC6560BB9-9A93-48A4-ACBF-0C219AB6F924%2526ustatus%253D0%2526first_placeid%253D111111%2526net_env%253D3g%2526umidtoken%253DYMc1LTzoCRkDAMbSxwXjss%252FT%2526user_id%253D2127576919%2526sn%253DAB905D346A56A5DB8E9A5078F68EA3A6625C8B1A%2526placeid%253D111111%2526msv%253D8.0.0%2526brand%253DApple%2526imei%253D06BD12FCACE70A9DFEF380F89E1C88B4F421EC39%2526skinVersionPrefix%253D1%2526appVer%253D4.3.6.0%2526skinActiveColor%253D0F9970%2526manufacturer%253DApple%2526skinColor%253D23B383%2526platform%253DiOS%2526ver%253D210301%2526mod%253DiPhoneXR%2526statusBarHeight%253D44.000000%2526skinVersion%253D1%2526wh%253D1242x2688%2526soft_id%253D21%2526utdid%253DYMc1LTzoCRkDAMbSxwXjss%252FT%2526utype%253Dpre_vip%2526sdk%253D13.0&key=and_log&readingList=%5B%7B%22startTime%22%3A1623938861%2C%22readObjType%22%3A1%2C%22attr%22%3A2%2C%22readObjId%22%3A%227733933%22%2C%22readChapterId%22%3A1162192%2C%22readingLen%22%3A39%7D%5D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=8B3EB7780A2C9D40B31641C669C77EEA&timestamp=1623938901&user_id=2127576919"},{"key":"shuqiydbody14","val":"_public=skinId%3D999%26idfa%3DC6560BB9-9A93-48A4-ACBF-0C219AB6F924%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26umidtoken%3DYMc1LTzoCRkDAMbSxwXjss/T%26user_id%3D2127576919%26sn%3DAB905D346A56A5DB8E9A5078F68EA3A6625C8B1A%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D06BD12FCACE70A9DFEF380F89E1C88B4F421EC39%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhoneXR%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYMc1LTzoCRkDAMbSxwXjss/T%26utype%3Dpre_vip%26sdk%3D13.0&deliveryId=707&key=sq_app_ad&miniWua=HHnB_wO7C1zLRxWsJjPYqTwd1/ttF3Rk%2BBpw0vSrYyfRXx5k%3D&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=678&sign=3CA7EC06881C986DA9B24E7320143BD1&timestamp=1623938894&userId=2127576919&wua=HIVW_UgtC0UKh/bmIitrbWagQmbEBR16zM/DVfd1chUatZR3mxC35MYfjFuyBqOuQSeErUeRz5ZkmolVt75tyof6GmQiVf8xoT810NPJBlduxJpgI7N9wrJofS77TajYmLiZw%2BLOxmK96OZZWxfm9rPrgJ/aEd6zGiesaIg6wliOiZeydeTjbv46XyA56PJG1DA9g9bgAYp/amwrvKlDu8EcNTHAfinbhl7ZvFFmqIAPfPaU%3D"},{"key":"shuqiqdbody14","val":"clientTimestamp=1623938909&position=501&userId=2127576919&signInType=1&wua=HIVW_rb3My68%2Fk9vRKTZrJkOJ35LKaM%2FPrnCvYxkR2BFeNXeLwrVioKL7ZFZhQ7aQ8bs73jeLh3znnGbwRaJLZ7vBT%2FpoINpWo0I54FpEM729kbRuBdBazkvGwkpg9F%2BJdPpyvJyTdc%2Frk%2BPtaQTK4dxrfQrkloARep%2Fa%2Fmzo37PLz6xDJkpdMw%2FRHV0QmfWDkkTGgmpel8hc9JSfIIxJSmAWN6npLsZ4XEihKa8a83VRGeY%3D&ua=&miniWua=HHnB_SmVwmKR7QGY7wVf4OFzuAhRz6qbfxvSQqmw9eWrg3kA%3D&umidtoken=YMc1LTzoCRkDAMbSxwXjss%2FT&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&sign=7e5acd854d27d36a1abec95e35c58934&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26sdk%3D13.0%26utdid%3DYMc1LTzoCRkDAMbSxwXjss%252FT%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2127576919%26sn%3DAB905D346A56A5DB8E9A5078F68EA3A6625C8B1A%26umidtoken%3DYMc1LTzoCRkDAMbSxwXjss%252FT%26msv%3D8.0.0%26brand%3DApple%26imei%3D06BD12FCACE70A9DFEF380F89E1C88B4F421EC39%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhoneXR%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DC6560BB9-9A93-48A4-ACBF-0C219AB6F924"},{"key":"shuqirwbody14","val":""},{"key":"shuqifxbody14","val":""},{"key":"shuqisprwurl14","val":"https://ocean.shuqireader.com/api/ad/adserver/v1/api/getAdInfo?appVer=4.3.6.0&placeId=111111&platform=iOS&requestSrc=h5&resourceId=626&timestamp=1623938949&user_id=2127576919&sqSv=1.0&sign=eb46b1b24b2251cc4580707f1be4fffb&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.0%26utdid%3DYMc1LTzoCRkDAMbSxwXjss%252FT%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2127576919%26sn%3DAB905D346A56A5DB8E9A5078F68EA3A6625C8B1A%26umidtoken%3DYMc1LTzoCRkDAMbSxwXjss%252FT%26msv%3D8.0.0%26brand%3DApple%26imei%3D06BD12FCACE70A9DFEF380F89E1C88B4F421EC39%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhoneXR%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DC6560BB9-9A93-48A4-ACBF-0C219AB6F924"},{"key":"shuqijlbody14","val":"requestSrc=h5&userId=2127576919&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1623938924&sqSv=1.0&sign=96e40575f3217647526f7b8083c548bb&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26sdk%3D13.0%26utdid%3DYMc1LTzoCRkDAMbSxwXjss%252FT%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2127576919%26sn%3DAB905D346A56A5DB8E9A5078F68EA3A6625C8B1A%26umidtoken%3DYMc1LTzoCRkDAMbSxwXjss%252FT%26msv%3D8.0.0%26brand%3DApple%26imei%3D06BD12FCACE70A9DFEF380F89E1C88B4F421EC39%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhoneXR%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DC6560BB9-9A93-48A4-ACBF-0C219AB6F924"},{"key":"shuqisqjlbody14","val":"src=&userId=2127576919&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1623938908&sqSv=1.0&sign=33d89efd4fa43322e0cf755cfcb38f2f&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26sdk%3D13.0%26utdid%3DYMc1LTzoCRkDAMbSxwXjss%252FT%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2127576919%26sn%3DAB905D346A56A5DB8E9A5078F68EA3A6625C8B1A%26umidtoken%3DYMc1LTzoCRkDAMbSxwXjss%252FT%26msv%3D8.0.0%26brand%3DApple%26imei%3D06BD12FCACE70A9DFEF380F89E1C88B4F421EC39%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhoneXR%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DC6560BB9-9A93-48A4-ACBF-0C219AB6F924"},{"key":"shuqicjyurl14","val":"https://ocean.shuqireader.com/api/activity/activity/v1/lottery/info?timestamp=1623938954&userId=2127576919&activityId=311&sqSv=1.0&sign=ea0b0453cf676f77d8dda83f52325863&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%2525E6%25258B%25259B%2525E8%2525B4%2525A2%2525E7%25258C%2525AB.turntable_in_0%26sdk%3D13.0%26utdid%3DYMc1LTzoCRkDAMbSxwXjss%25252FT%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2127576919%26sn%3DAB905D346A56A5DB8E9A5078F68EA3A6625C8B1A%26umidtoken%3DYMc1LTzoCRkDAMbSxwXjss%25252FT%26msv%3D8.0.0%26brand%3DApple%26imei%3D06BD12FCACE70A9DFEF380F89E1C88B4F421EC39%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D2%26ver%3D210301%26mod%3DiPhoneXR%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DC6560BB9-9A93-48A4-ACBF-0C219AB6F924%26page%3D1%26pageSize%3D100000%26hideNavBar%3D1%26degrade%3D1"},{"key":"shuqicjcsbody14","val":"_public=skinId%3D999%26idfa%3DC6560BB9-9A93-48A4-ACBF-0C219AB6F924%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26umidtoken%3DYMc1LTzoCRkDAMbSxwXjss/T%26user_id%3D2127576919%26sn%3DAB905D346A56A5DB8E9A5078F68EA3A6625C8B1A%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D06BD12FCACE70A9DFEF380F89E1C88B4F421EC39%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhoneXR%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYMc1LTzoCRkDAMbSxwXjss/T%26utype%3Dpre_vip%26sdk%3D13.0&deliveryId=711&key=sq_app_ad&miniWua=HHnB_dpAgrZWvp8koRpXfi2Fk/ZZu5vsgJyE9xgv0K7kDD6A%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=703&sign=18ED0B31FEA9EABCDD70ECE8BA11BE19&timestamp=1623938931&userId=2127576919&user_id=2127576919&wua=HIVW_IBZ5S77qbNpVPTc3RRoq6q%2BCLBoyh8mTnUGOfjgyEBJa38h2QJjZg8xfUXgHXVoe6OFxk0cS8gbty3pI0D7uG1JZDHN1CAkKiKFSJRL7pyT/aRFBywL/ZlQ4QQ7vaD5wvKetZkh5hmqagddGOXH9ECjf%2BBD9xF4zEedLxtSSfxztr3eKUDD0yYgwbCuMVxs0hCswZ80u6%2BhPI5GQBfzgfovS6fhvOPRMvP0BsO%2BVuRk%3D"},{"key":"shuqicjbody14","val":"wua=HIVW_FoLwTpvH%2FKgORhAVVkTlmr9YN%2F21L4b2k1ok%2BoAvHgCfzlrM0scfaxBb%2FHypnOY4v%2FXc7xAJZuGqz1wm067NlYnO3q3U7dWjtUud6EL02mm1hknL3Muw3dTcyI9Do62yrP5IuA0m4RQ5Adf8NpnX2om3MaZoRFnMvktsNoVFUFniRQt93ECoYFw4VDO6KsJ2J4J5fnT4R8QY9rypABDyM0oB%2BZh77KQ2zGdcARDGb1Q%3D&ua=&userId=2127576919&umidtoken=YMc1LTzoCRkDAMbSxwXjss%2FT&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&asac=2A20C07RJ9F51AOEFSNHDR&timestamp=1623938938&activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&sqSv=1.0&sign=f270799102b137e95a338c43bcaaeb66&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.0%26utdid%3DYMc1LTzoCRkDAMbSxwXjss%252FT%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2127576919%26sn%3DAB905D346A56A5DB8E9A5078F68EA3A6625C8B1A%26umidtoken%3DYMc1LTzoCRkDAMbSxwXjss%252FT%26msv%3D8.0.0%26brand%3DApple%26imei%3D06BD12FCACE70A9DFEF380F89E1C88B4F421EC39%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhoneXR%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DC6560BB9-9A93-48A4-ACBF-0C219AB6F924"},{"key":"shuqijsspbody14","val":""},{"key":"shuqijsydurl14","val":""},{"key":"shuqijsydbody14","val":""},{"key":"shuqijsqdbody14","val":""},{"key":"shuqijsqdspyurl14","val":""},{"key":"shuqijsqdspbody14","val":""},{"key":"shuqijsrwbody14","val":""},{"key":"shuqijsfxbody14","val":""},{"key":"shuqijsbookurl14","val":""},{"key":"shuqijsbookbody14","val":""},{"key":"shuqijssprwurl14","val":""},{"key":"shuqiuserurl15","val":"https://ocean.shuqireader.com/api/jaccount/accountapi/v1/sapi/account/getBindinfo?userId=2125615004&sqSv=1.0&timestamp=1623939079&sign=4ab891055d207f9bae526ef3dc947159&key=sq_h5_gateway"},{"key":"shuqisyurl15","val":"https://render.shuqireader.com/load/resource?sdk=13.1.1&utdid=YMc1QpWqWvEDAFqjZYUZ1mZM&ustatus=0&first_placeid=111111&net_env=3g&placeid=111111&user_id=2125615004&sn=4A51DDB5B4E9720627D44DDBB9FEDEB4D7D072EF&umidtoken=YMc1QpWqWvEDAFqjZYUZ1mZM&msv=8.0.0&brand=Apple&imei=8102A3B2451032D354603AD00EFF61FDE850B9E2&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&session=&skinColor=23B383&platform=iOS&ver=210301&mod=UnknowniPad&statusBarHeight=44.000000&skinVersion=1&wh=1242x2688&soft_id=21&utype=pre_vip&skinId=999&idfa=1B4D2CB9-E8D2-4AB4-A62C-FE7294104DF5"},{"key":"shuqisybody15","val":"appVer=4.3.6.0&imei=8102A3B2451032D354603AD00EFF61FDE850B9E2&isNewUser=1&params=%7B%22resources%22%3A%7B%22ShuqiVipEntry%22%3A%7B%7D%2C%22personalCardConfig%22%3A%7B%7D%7D%7D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=8274c7539c3974c4c2a40cdc5fb3ec2a&sn=4A51DDB5B4E9720627D44DDBB9FEDEB4D7D072EF&soft_id=21&timestamp=1623938968&user_id=2125615004&ver=210301"},{"key":"shuqispbody15","val":"_public=skinId%3D999%26idfa%3D1B4D2CB9-E8D2-4AB4-A62C-FE7294104DF5%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26umidtoken%3DYMc1QpWqWvEDAFqjZYUZ1mZM%26user_id%3D2125615004%26sn%3D4A51DDB5B4E9720627D44DDBB9FEDEB4D7D072EF%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D8102A3B2451032D354603AD00EFF61FDE850B9E2%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYMc1QpWqWvEDAFqjZYUZ1mZM%26utype%3Dpre_vip%26sdk%3D13.1.1&deliveryId=525&key=sq_app_ad&miniWua=HHnB_qBcuAV80EbbtmdSSP6qTSk29egON%2BwNc9WTuFLDBu6I%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=626&sign=C7E79AF1BFEE6C0911C357028E0B627D&timestamp=1623939024&userId=2125615004&user_id=2125615004&wua=HIVW_xAP9FNNJI/X/EK4JbkbfZaQhuyyANGz5ItRlcNp2e47XJxbkbIVweFX9saWoKERz%2BmDH80sTdr5mAPvH58sZOwor6hd4wWmljqaoMDBEtGEqRSrp2J%2BXjrV5MnYSv0VAwTOt/lZ6whTsdVyEjyZ6/tfNr9HM0/QH7NdijtKLi/H9cu0N24Ufx0NiCryaKUL4JvaS2BORSPjYybFKu5ejbxKn2DxOQobGbWgcM2pldGg%3D"},{"key":"shuqiscbody15","val":"_public=skinId%253D999%2526idfa%253D1B4D2CB9-E8D2-4AB4-A62C-FE7294104DF5%2526ustatus%253D0%2526first_placeid%253D111111%2526net_env%253D3g%2526umidtoken%253DYMc1QpWqWvEDAFqjZYUZ1mZM%2526user_id%253D2125615004%2526sn%253D4A51DDB5B4E9720627D44DDBB9FEDEB4D7D072EF%2526placeid%253D111111%2526msv%253D8.0.0%2526brand%253DApple%2526imei%253D8102A3B2451032D354603AD00EFF61FDE850B9E2%2526skinVersionPrefix%253D1%2526appVer%253D4.3.6.0%2526skinActiveColor%253D0F9970%2526manufacturer%253DApple%2526skinColor%253D23B383%2526platform%253DiOS%2526ver%253D210301%2526mod%253DUnknowniPad%2526statusBarHeight%253D44.000000%2526skinVersion%253D1%2526wh%253D1242x2688%2526soft_id%253D21%2526utdid%253DYMc1QpWqWvEDAFqjZYUZ1mZM%2526utype%253Dpre_vip%2526sdk%253D13.1.1&key=and_log&readingList=%5B%7B%22startTime%22%3A1623938972%2C%22readObjType%22%3A1%2C%22attr%22%3A2%2C%22readObjId%22%3A%227979379%22%2C%22readChapterId%22%3A1226271%2C%22readingLen%22%3A35%7D%5D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=E33B892B54D2B6EFC394EB5EC06C1ED2&timestamp=1623939008&user_id=2125615004"},{"key":"shuqiydbody15","val":"_public=skinId%3D999%26idfa%3D1B4D2CB9-E8D2-4AB4-A62C-FE7294104DF5%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26umidtoken%3DYMc1QpWqWvEDAFqjZYUZ1mZM%26user_id%3D2125615004%26sn%3D4A51DDB5B4E9720627D44DDBB9FEDEB4D7D072EF%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D8102A3B2451032D354603AD00EFF61FDE850B9E2%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYMc1QpWqWvEDAFqjZYUZ1mZM%26utype%3Dpre_vip%26sdk%3D13.1.1&deliveryId=707&key=sq_app_ad&miniWua=HHnB_lEENWBZNB4ESRO9ykXE0Gjd5%2BP/PFeDTf7YFviLsNck%3D&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=678&sign=84E101DB88F0B47DA0D9649968389252&timestamp=1623939004&userId=2125615004&wua=HIVW_qYdBbiEVHDBBfnZPoIQsGgkKav%2BR3keA/LbqFg4xQVcROPgyk4xpxz6s3Gmn%2BbLVLpk7uxBJBxolpqte2Kn3EuoF29kyr7lGG1g3UEgY3%2B%2BWbLrZ%2BKx0u6pfjOFXFLCqMGCjJnCYpkeAHSYhRQBKRrRtoJkio8QUtRYyqFtyxtYRLfZpHJmXTT4KtNl9y6Gcss/OZVhr7kpA7eWBioiHHCYdQkhZ%2BaSX1IciRHoq3n8%3D"},{"key":"shuqiqdbody15","val":"clientTimestamp=1623939018&position=501&userId=2125615004&signInType=1&wua=HIVW_dgd0NhSa8EgM741%2BvP3QwqgHhVJWH81d2rLUvhjACv%2BvU6u2051bT3G2OxCQpFCe2ulqa5N69gfP3rqVCCC7Nq7XkcV7TTKVzRxZlKXWmQ%2BMaDPi07SBL5CwbCBhtPo%2B%2BUGOIglqlkEZXOJ2pvRmAhNuz0cBK0WE9HkSJtEjc94BTq8fvT%2BVQJm568nJ7rLlLSNrG3%2BtjBE%2BfdJXMN1kLQ%3D%3D&ua=&miniWua=HHnB_ck8C7uJyipDUtT7PzjXnmGTEo3QBkvO36DAoaNADcQs%3D&umidtoken=YMc1QpWqWvEDAFqjZYUZ1mZM&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&sign=237c34effbc9ed4e76f168524b2def56&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26sdk%3D13.1.1%26utdid%3DYMc1QpWqWvEDAFqjZYUZ1mZM%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2125615004%26sn%3D4A51DDB5B4E9720627D44DDBB9FEDEB4D7D072EF%26umidtoken%3DYMc1QpWqWvEDAFqjZYUZ1mZM%26msv%3D8.0.0%26brand%3DApple%26imei%3D8102A3B2451032D354603AD00EFF61FDE850B9E2%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D1B4D2CB9-E8D2-4AB4-A62C-FE7294104DF5"},{"key":"shuqirwbody15","val":""},{"key":"shuqifxbody15","val":""},{"key":"shuqisprwurl15","val":"https://ocean.shuqireader.com/api/ad/adserver/v1/api/getAdInfo?appVer=4.3.6.0&placeId=111111&platform=iOS&requestSrc=h5&resourceId=626&timestamp=1623939080&user_id=2125615004&sqSv=1.0&sign=220546bc9ce7492e88c78afc2d8054c4&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.1.1%26utdid%3DYMc1QpWqWvEDAFqjZYUZ1mZM%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2125615004%26sn%3D4A51DDB5B4E9720627D44DDBB9FEDEB4D7D072EF%26umidtoken%3DYMc1QpWqWvEDAFqjZYUZ1mZM%26msv%3D8.0.0%26brand%3DApple%26imei%3D8102A3B2451032D354603AD00EFF61FDE850B9E2%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D1B4D2CB9-E8D2-4AB4-A62C-FE7294104DF5"},{"key":"shuqijlbody15","val":"requestSrc=h5&userId=2125615004&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1623939047&sqSv=1.0&sign=2e89011c2b940a6270dd3befb1085ae6&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26sdk%3D13.1.1%26utdid%3DYMc1QpWqWvEDAFqjZYUZ1mZM%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2125615004%26sn%3D4A51DDB5B4E9720627D44DDBB9FEDEB4D7D072EF%26umidtoken%3DYMc1QpWqWvEDAFqjZYUZ1mZM%26msv%3D8.0.0%26brand%3DApple%26imei%3D8102A3B2451032D354603AD00EFF61FDE850B9E2%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D1B4D2CB9-E8D2-4AB4-A62C-FE7294104DF5"},{"key":"shuqisqjlbody15","val":"src=&userId=2125615004&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1623939021&sqSv=1.0&sign=99c443fdb521fbebc1c30cd4d1883d88&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26sdk%3D13.1.1%26utdid%3DYMc1QpWqWvEDAFqjZYUZ1mZM%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2125615004%26sn%3D4A51DDB5B4E9720627D44DDBB9FEDEB4D7D072EF%26umidtoken%3DYMc1QpWqWvEDAFqjZYUZ1mZM%26msv%3D8.0.0%26brand%3DApple%26imei%3D8102A3B2451032D354603AD00EFF61FDE850B9E2%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D1B4D2CB9-E8D2-4AB4-A62C-FE7294104DF5"},{"key":"shuqicjyurl15","val":"https://ocean.shuqireader.com/api/activity/activity/v1/lottery/info?timestamp=1623939084&userId=2125615004&activityId=311&sqSv=1.0&sign=6e803c4b7a53e1ecbb7736f760924259&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.1.1%26utdid%3DYMc1QpWqWvEDAFqjZYUZ1mZM%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2125615004%26sn%3D4A51DDB5B4E9720627D44DDBB9FEDEB4D7D072EF%26umidtoken%3DYMc1QpWqWvEDAFqjZYUZ1mZM%26msv%3D8.0.0%26brand%3DApple%26imei%3D8102A3B2451032D354603AD00EFF61FDE850B9E2%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D1B4D2CB9-E8D2-4AB4-A62C-FE7294104DF5"},{"key":"shuqicjcsbody15","val":"_public=skinId%3D999%26idfa%3D1B4D2CB9-E8D2-4AB4-A62C-FE7294104DF5%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26umidtoken%3DYMc1QpWqWvEDAFqjZYUZ1mZM%26user_id%3D2125615004%26sn%3D4A51DDB5B4E9720627D44DDBB9FEDEB4D7D072EF%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D8102A3B2451032D354603AD00EFF61FDE850B9E2%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYMc1QpWqWvEDAFqjZYUZ1mZM%26utype%3Dpre_vip%26sdk%3D13.1.1&deliveryId=711&key=sq_app_ad&miniWua=HHnB_LR%2BksCDDltuv/gtu4Os1C4P/s%2B%2BGAEt8Msquam/A8XQ%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=703&sign=C3F0928A0516BB6E4E48A371635D98F5&timestamp=1623939052&userId=2125615004&user_id=2125615004&wua=HIVW_VRhMHb5B%2Bey23UvqH52kkwhBReRy6QWCmM9jHQPMkmPbIRyt0Y3U2Dxr2wagdyjIEloIFwmM/jyJDpoupuLVZcJVr0vIxB2jMYyVfAARh0jnN6uHVkJSwn/gR6N2US6e5GwuKLMGMdYaxPJglS6vowAaUVS8dg4r2nskARIbY6a%2BibdzOMLj1wxuu0yHtwepMlGtUUShJoMbFaCr5Tbbf45aRUTJFX5DtFUiW9mEvsw%3D"},{"key":"shuqicjbody15","val":"wua=HIVW_jZkg9liLcJ10aQuLLel2qiv6I%2Bt9TZr4BStp2mvlJa4eRC92FiB4HS5IG3y5vVRy2xNqoSEeUKAmzeOq2wgxmdawODDXuKYObssFmrqmdZjmM1QeUQ7ZZanQpEP0Cx0n2DPTUnDPxBdKQSM4yOoD5EV583O5M7oPST2P5eK9ES64EodJgcbLEbR%2BcUbjLyr120Pva8Y%2BuOFDyA1jzeNiI1zN927d8fnX6rUWyVMAz14%3D&ua=&userId=2125615004&umidtoken=YMc1QpWqWvEDAFqjZYUZ1mZM&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&asac=2A20C07RJ9F51AOEFSNHDR&timestamp=1623939057&activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&sqSv=1.0&sign=f475ca7da979227310c948080c263c58&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.1.1%26utdid%3DYMc1QpWqWvEDAFqjZYUZ1mZM%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2125615004%26sn%3D4A51DDB5B4E9720627D44DDBB9FEDEB4D7D072EF%26umidtoken%3DYMc1QpWqWvEDAFqjZYUZ1mZM%26msv%3D8.0.0%26brand%3DApple%26imei%3D8102A3B2451032D354603AD00EFF61FDE850B9E2%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D1B4D2CB9-E8D2-4AB4-A62C-FE7294104DF5"},{"key":"shuqijsspbody15","val":""},{"key":"shuqijsydurl15","val":""},{"key":"shuqijsydbody15","val":""},{"key":"shuqijsqdbody15","val":""},{"key":"shuqijsqdspyurl15","val":""},{"key":"shuqijsqdspbody15","val":""},{"key":"shuqijsrwbody15","val":""},{"key":"shuqijsfxbody15","val":""},{"key":"shuqijsbookurl15","val":""},{"key":"shuqijsbookbody15","val":""},{"key":"shuqijssprwurl15","val":""},{"key":"shuqiuserurl16","val":""},{"key":"shuqisyurl16","val":""},{"key":"shuqisybody16","val":""},{"key":"shuqispbody16","val":""},{"key":"shuqiscbody16","val":""},{"key":"shuqiydbody16","val":""},{"key":"shuqiqdbody16","val":""},{"key":"shuqirwbody16","val":""},{"key":"shuqifxbody16","val":""},{"key":"shuqisprwurl16","val":""},{"key":"shuqijlbody16","val":""},{"key":"shuqisqjlbody16","val":""},{"key":"shuqicjyurl16","val":""},{"key":"shuqicjcsbody16","val":""},{"key":"shuqicjbody16","val":""},{"key":"shuqijsspbody16","val":""},{"key":"shuqijsydurl16","val":""},{"key":"shuqijsydbody16","val":""},{"key":"shuqijsqdbody16","val":""},{"key":"shuqijsqdspyurl16","val":""},{"key":"shuqijsqdspbody16","val":""},{"key":"shuqijsrwbody16","val":""},{"key":"shuqijsfxbody16","val":""},{"key":"shuqijsbookurl16","val":""},{"key":"shuqijsbookbody16","val":""},{"key":"shuqijssprwurl16","val":""},{"key":"shuqiuserurl17","val":""},{"key":"shuqisyurl17","val":""},{"key":"shuqisybody17","val":""},{"key":"shuqispbody17","val":""},{"key":"shuqiscbody17","val":""},{"key":"shuqiydbody17","val":""},{"key":"shuqiqdbody17","val":""},{"key":"shuqirwbody17","val":""},{"key":"shuqifxbody17","val":""},{"key":"shuqisprwurl17","val":""},{"key":"shuqijlbody17","val":""},{"key":"shuqisqjlbody17","val":""},{"key":"shuqicjyurl17","val":""},{"key":"shuqicjcsbody17","val":""},{"key":"shuqicjbody17","val":""},{"key":"shuqijsspbody17","val":""},{"key":"shuqijsydurl17","val":""},{"key":"shuqijsydbody17","val":""},{"key":"shuqijsqdbody17","val":""},{"key":"shuqijsqdspyurl17","val":""},{"key":"shuqijsqdspbody17","val":""},{"key":"shuqijsrwbody17","val":""},{"key":"shuqijsfxbody17","val":""},{"key":"shuqijsbookurl17","val":""},{"key":"shuqijsbookbody17","val":""},{"key":"shuqijssprwurl17","val":""},{"key":"shuqiuserurl18","val":""},{"key":"shuqisyurl18","val":""},{"key":"shuqisybody18","val":""},{"key":"shuqispbody18","val":""},{"key":"shuqiscbody18","val":""},{"key":"shuqiydbody18","val":""},{"key":"shuqiqdbody18","val":""},{"key":"shuqirwbody18","val":""},{"key":"shuqifxbody18","val":""},{"key":"shuqisprwurl18","val":""},{"key":"shuqijlbody18","val":""},{"key":"shuqisqjlbody18","val":""},{"key":"shuqicjyurl18","val":""},{"key":"shuqicjcsbody18","val":""},{"key":"shuqicjbody18","val":""},{"key":"shuqijsspbody18","val":""},{"key":"shuqijsydurl18","val":""},{"key":"shuqijsydbody18","val":""},{"key":"shuqijsqdbody18","val":""},{"key":"shuqijsqdspyurl18","val":""},{"key":"shuqijsqdspbody18","val":""},{"key":"shuqijsrwbody18","val":""},{"key":"shuqijsfxbody18","val":""},{"key":"shuqijsbookurl18","val":""},{"key":"shuqijsbookbody18","val":""},{"key":"shuqijssprwurl18","val":""},{"key":"shuqiuserurl19","val":""},{"key":"shuqisyurl19","val":""},{"key":"shuqisybody19","val":""},{"key":"shuqispbody19","val":""},{"key":"shuqiscbody19","val":""},{"key":"shuqiydbody19","val":""},{"key":"shuqiqdbody19","val":""},{"key":"shuqirwbody19","val":""},{"key":"shuqifxbody19","val":""},{"key":"shuqisprwurl19","val":""},{"key":"shuqijlbody19","val":""},{"key":"shuqisqjlbody19","val":""},{"key":"shuqicjyurl19","val":""},{"key":"shuqicjcsbody19","val":""},{"key":"shuqicjbody19","val":""},{"key":"shuqijsspbody19","val":""},{"key":"shuqijsydurl19","val":""},{"key":"shuqijsydbody19","val":""},{"key":"shuqijsqdbody19","val":""},{"key":"shuqijsqdspyurl19","val":""},{"key":"shuqijsqdspbody19","val":""},{"key":"shuqijsrwbody19","val":""},{"key":"shuqijsfxbody19","val":""},{"key":"shuqijsbookurl19","val":""},{"key":"shuqijsbookbody19","val":""},{"key":"shuqijssprwurl19","val":""},{"key":"shuqiuserurl20","val":""},{"key":"shuqisyurl20","val":""},{"key":"shuqisybody20","val":""},{"key":"shuqispbody20","val":""},{"key":"shuqiscbody20","val":""},{"key":"shuqiydbody20","val":""},{"key":"shuqiqdbody20","val":""},{"key":"shuqirwbody20","val":""},{"key":"shuqifxbody20","val":""},{"key":"shuqisprwurl20","val":""},{"key":"shuqijlbody20","val":""},{"key":"shuqisqjlbody20","val":""},{"key":"shuqicjyurl20","val":""},{"key":"shuqicjcsbody20","val":""},{"key":"shuqicjbody20","val":""},{"key":"shuqijsspbody20","val":""},{"key":"shuqijsydurl20","val":""},{"key":"shuqijsydbody20","val":""},{"key":"shuqijsqdbody20","val":""},{"key":"shuqijsqdspyurl20","val":""},{"key":"shuqijsqdspbody20","val":""},{"key":"shuqijsrwbody20","val":""},{"key":"shuqijsfxbody20","val":""},{"key":"shuqijsbookurl20","val":""},{"key":"shuqijsbookbody20","val":""},{"key":"shuqijssprwurl20","val":""}],"sessions":[],"isLoaded":true};
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
