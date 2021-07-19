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
const COOKIE ={"id":"shuqi","name":"书旗小说APP","keys":["shuqiuserurl","shuqisyurl","shuqisybody","shuqispbody","shuqiscbody","shuqiydbody","shuqiqdbody","shuqirwbody","shuqifxbody","shuqisprwurl","shuqijlbody","shuqisqjlbody","shuqicjyurl","shuqicjcsbody","shuqicjbody","shuqijsspbody","shuqijsydurl","shuqijsydbody","shuqijsqdbody","shuqijsqdspyurl","shuqijsqdspbody","shuqijsrwbody","shuqijsfxbody","shuqijsbookurl","shuqijsbookbody","shuqijssprwurl","shuqiuserurl2","shuqisyurl2","shuqisybody2","shuqispbody2","shuqiscbody2","shuqiydbody2","shuqiqdbody2","shuqirwbody2","shuqifxbody2","shuqisprwurl2","shuqijlbody2","shuqisqjlbody2","shuqicjyurl2","shuqicjcsbody2","shuqicjbody2","shuqijsspbody2","shuqijsydurl2","shuqijsydbody2","shuqijsqdbody2","shuqijsqdspyurl2","shuqijsqdspbody2","shuqijsrwbody2","shuqijsfxbody2","shuqijsbookurl2","shuqijsbookbody2","shuqijssprwurl2","shuqiuserurl3","shuqisyurl3","shuqisybody3","shuqispbody3","shuqiscbody3","shuqiydbody3","shuqiqdbody3","shuqirwbody3","shuqifxbody3","shuqisprwurl3","shuqijlbody3","shuqisqjlbody3","shuqicjyurl3","shuqicjcsbody3","shuqicjbody3","shuqijsspbody3","shuqijsydurl3","shuqijsydbody3","shuqijsqdbody3","shuqijsqdspyurl3","shuqijsqdspbody3","shuqijsrwbody3","shuqijsfxbody3","shuqijsbookurl3","shuqijsbookbody3","shuqijssprwurl3","shuqiuserurl4","shuqisyurl4","shuqisybody4","shuqispbody4","shuqiscbody4","shuqiydbody4","shuqiqdbody4","shuqirwbody4","shuqifxbody4","shuqisprwurl4","shuqijlbody4","shuqisqjlbody4","shuqicjyurl4","shuqicjcsbody4","shuqicjbody4","shuqijsspbody4","shuqijsydurl4","shuqijsydbody4","shuqijsqdbody4","shuqijsqdspyurl4","shuqijsqdspbody4","shuqijsrwbody4","shuqijsfxbody4","shuqijsbookurl4","shuqijsbookbody4","shuqijssprwurl4","shuqiuserurl5","shuqisyurl5","shuqisybody5","shuqispbody5","shuqiscbody5","shuqiydbody5","shuqiqdbody5","shuqirwbody5","shuqifxbody5","shuqisprwurl5","shuqijlbody5","shuqisqjlbody5","shuqicjyurl5","shuqicjcsbody5","shuqicjbody5","shuqijsspbody5","shuqijsydurl5","shuqijsydbody5","shuqijsqdbody5","shuqijsqdspyurl5","shuqijsqdspbody5","shuqijsrwbody5","shuqijsfxbody5","shuqijsbookurl5","shuqijsbookbody5","shuqijssprwurl5","shuqiuserurl6","shuqisyurl6","shuqisybody6","shuqispbody6","shuqiscbody6","shuqiydbody6","shuqiqdbody6","shuqirwbody6","shuqifxbody6","shuqisprwurl6","shuqijlbody6","shuqisqjlbody6","shuqicjyurl6","shuqicjcsbody6","shuqicjbody6","shuqijsspbody6","shuqijsydurl6","shuqijsydbody6","shuqijsqdbody6","shuqijsqdspyurl6","shuqijsqdspbody6","shuqijsrwbody6","shuqijsfxbody6","shuqijsbookurl6","shuqijsbookbody6","shuqijssprwurl6","shuqiuserurl7","shuqisyurl7","shuqisybody7","shuqispbody7","shuqiscbody7","shuqiydbody7","shuqiqdbody7","shuqirwbody7","shuqifxbody7","shuqisprwurl7","shuqijlbody7","shuqisqjlbody7","shuqicjyurl7","shuqicjcsbody7","shuqicjbody7","shuqijsspbody7","shuqijsydurl7","shuqijsydbody7","shuqijsqdbody7","shuqijsqdspyurl7","shuqijsqdspbody7","shuqijsrwbody7","shuqijsfxbody7","shuqijsbookurl7","shuqijsbookbody7","shuqijssprwurl7","shuqiuserurl8","shuqisyurl8","shuqisybody8","shuqispbody8","shuqiscbody8","shuqiydbody8","shuqiqdbody8","shuqirwbody8","shuqifxbody8","shuqisprwurl8","shuqijlbody8","shuqisqjlbody8","shuqicjyurl8","shuqicjcsbody8","shuqicjbody8","shuqijsspbody8","shuqijsydurl8","shuqijsydbody8","shuqijsqdbody8","shuqijsqdspyurl8","shuqijsqdspbody8","shuqijsrwbody8","shuqijsfxbody8","shuqijsbookurl8","shuqijsbookbody8","shuqijssprwurl8","shuqiuserurl9","shuqisyurl9","shuqisybody9","shuqispbody9","shuqiscbody9","shuqiydbody9","shuqiqdbody9","shuqirwbody9","shuqifxbody9","shuqisprwurl9","shuqijlbody9","shuqisqjlbody9","shuqicjyurl9","shuqicjcsbody9","shuqicjbody9","shuqijsspbody9","shuqijsydurl9","shuqijsydbody9","shuqijsqdbody9","shuqijsqdspyurl9","shuqijsqdspbody9","shuqijsrwbody9","shuqijsfxbody9","shuqijsbookurl9","shuqijsbookbody9","shuqijssprwurl9","shuqiuserurl10","shuqisyurl10","shuqisybody10","shuqispbody10","shuqiscbody10","shuqiydbody10","shuqiqdbody10","shuqirwbody10","shuqifxbody10","shuqisprwurl10","shuqijlbody10","shuqisqjlbody10","shuqicjyurl10","shuqicjcsbody10","shuqicjbody10","shuqijsspbody10","shuqijsydurl10","shuqijsydbody10","shuqijsqdbody10","shuqijsqdspyurl10","shuqijsqdspbody10","shuqijsrwbody10","shuqijsfxbody10","shuqijsbookurl10","shuqijsbookbody10","shuqijssprwurl10","shuqiuserurl11","shuqisyurl11","shuqisybody11","shuqispbody11","shuqiscbody11","shuqiydbody11","shuqiqdbody11","shuqirwbody11","shuqifxbody11","shuqisprwurl11","shuqijlbody11","shuqisqjlbody11","shuqicjyurl11","shuqicjcsbody11","shuqicjbody11","shuqijsspbody11","shuqijsydurl11","shuqijsydbody11","shuqijsqdbody11","shuqijsqdspyurl11","shuqijsqdspbody11","shuqijsrwbody11","shuqijsfxbody11","shuqijsbookurl11","shuqijsbookbody11","shuqijssprwurl11","shuqiuserurl12","shuqisyurl12","shuqisybody12","shuqispbody12","shuqiscbody12","shuqiydbody12","shuqiqdbody12","shuqirwbody12","shuqifxbody12","shuqisprwurl12","shuqijlbody12","shuqisqjlbody12","shuqicjyurl12","shuqicjcsbody12","shuqicjbody12","shuqijsspbody12","shuqijsydurl12","shuqijsydbody12","shuqijsqdbody12","shuqijsqdspyurl12","shuqijsqdspbody12","shuqijsrwbody12","shuqijsfxbody12","shuqijsbookurl12","shuqijsbookbody12","shuqijssprwurl12","shuqiuserurl13","shuqisyurl13","shuqisybody13","shuqispbody13","shuqiscbody13","shuqiydbody13","shuqiqdbody13","shuqirwbody13","shuqifxbody13","shuqisprwurl13","shuqijlbody13","shuqisqjlbody13","shuqicjyurl13","shuqicjcsbody13","shuqicjbody13","shuqijsspbody13","shuqijsydurl13","shuqijsydbody13","shuqijsqdbody13","shuqijsqdspyurl13","shuqijsqdspbody13","shuqijsrwbody13","shuqijsfxbody13","shuqijsbookurl13","shuqijsbookbody13","shuqijssprwurl13","shuqiuserurl14","shuqisyurl14","shuqisybody14","shuqispbody14","shuqiscbody14","shuqiydbody14","shuqiqdbody14","shuqirwbody14","shuqifxbody14","shuqisprwurl14","shuqijlbody14","shuqisqjlbody14","shuqicjyurl14","shuqicjcsbody14","shuqicjbody14","shuqijsspbody14","shuqijsydurl14","shuqijsydbody14","shuqijsqdbody14","shuqijsqdspyurl14","shuqijsqdspbody14","shuqijsrwbody14","shuqijsfxbody14","shuqijsbookurl14","shuqijsbookbody14","shuqijssprwurl14","shuqiuserurl15","shuqisyurl15","shuqisybody15","shuqispbody15","shuqiscbody15","shuqiydbody15","shuqiqdbody15","shuqirwbody15","shuqifxbody15","shuqisprwurl15","shuqijlbody15","shuqisqjlbody15","shuqicjyurl15","shuqicjcsbody15","shuqicjbody15","shuqijsspbody15","shuqijsydurl15","shuqijsydbody15","shuqijsqdbody15","shuqijsqdspyurl15","shuqijsqdspbody15","shuqijsrwbody15","shuqijsfxbody15","shuqijsbookurl15","shuqijsbookbody15","shuqijssprwurl15","shuqiuserurl16","shuqisyurl16","shuqisybody16","shuqispbody16","shuqiscbody16","shuqiydbody16","shuqiqdbody16","shuqirwbody16","shuqifxbody16","shuqisprwurl16","shuqijlbody16","shuqisqjlbody16","shuqicjyurl16","shuqicjcsbody16","shuqicjbody16","shuqijsspbody16","shuqijsydurl16","shuqijsydbody16","shuqijsqdbody16","shuqijsqdspyurl16","shuqijsqdspbody16","shuqijsrwbody16","shuqijsfxbody16","shuqijsbookurl16","shuqijsbookbody16","shuqijssprwurl16","shuqiuserurl17","shuqisyurl17","shuqisybody17","shuqispbody17","shuqiscbody17","shuqiydbody17","shuqiqdbody17","shuqirwbody17","shuqifxbody17","shuqisprwurl17","shuqijlbody17","shuqisqjlbody17","shuqicjyurl17","shuqicjcsbody17","shuqicjbody17","shuqijsspbody17","shuqijsydurl17","shuqijsydbody17","shuqijsqdbody17","shuqijsqdspyurl17","shuqijsqdspbody17","shuqijsrwbody17","shuqijsfxbody17","shuqijsbookurl17","shuqijsbookbody17","shuqijssprwurl17","shuqiuserurl18","shuqisyurl18","shuqisybody18","shuqispbody18","shuqiscbody18","shuqiydbody18","shuqiqdbody18","shuqirwbody18","shuqifxbody18","shuqisprwurl18","shuqijlbody18","shuqisqjlbody18","shuqicjyurl18","shuqicjcsbody18","shuqicjbody18","shuqijsspbody18","shuqijsydurl18","shuqijsydbody18","shuqijsqdbody18","shuqijsqdspyurl18","shuqijsqdspbody18","shuqijsrwbody18","shuqijsfxbody18","shuqijsbookurl18","shuqijsbookbody18","shuqijssprwurl18","shuqiuserurl19","shuqisyurl19","shuqisybody19","shuqispbody19","shuqiscbody19","shuqiydbody19","shuqiqdbody19","shuqirwbody19","shuqifxbody19","shuqisprwurl19","shuqijlbody19","shuqisqjlbody19","shuqicjyurl19","shuqicjcsbody19","shuqicjbody19","shuqijsspbody19","shuqijsydurl19","shuqijsydbody19","shuqijsqdbody19","shuqijsqdspyurl19","shuqijsqdspbody19","shuqijsrwbody19","shuqijsfxbody19","shuqijsbookurl19","shuqijsbookbody19","shuqijssprwurl19","shuqiuserurl20","shuqisyurl20","shuqisybody20","shuqispbody20","shuqiscbody20","shuqiydbody20","shuqiqdbody20","shuqirwbody20","shuqifxbody20","shuqisprwurl20","shuqijlbody20","shuqisqjlbody20","shuqicjyurl20","shuqicjcsbody20","shuqicjbody20","shuqijsspbody20","shuqijsydurl20","shuqijsydbody20","shuqijsqdbody20","shuqijsqdspyurl20","shuqijsqdspbody20","shuqijsrwbody20","shuqijsfxbody20","shuqijsbookurl20","shuqijsbookbody20","shuqijssprwurl20"],"author":"@ziye","settings":[{"id":"shuqiSuffix","name":"当前账号","val":"1","type":"number","desc":"当前抓取ck记录的账号序号，如：1、2、3、"},{"id":"shuqiCount","name":"账号个数","val":"15","type":"number","desc":"指定任务最多跑几个账号，根据抓取的账号数据个数来设值"},{"id":"shuqiXH","name":"循环获取CK","val":"1","type":"number","desc":"0关闭 1开启,默认关闭"},{"id":"shuqiSC","name":"单刷时长控制","val":"0","type":"number","desc":"0关闭 1开启,默认关闭"},{"id":"shuqiTXTX","name":"提现提醒","val":"10","type":"number","desc":"0关闭 设置余额大于多少提醒"},{"id":"shuqinotifyttt","name":"推送控制","val":"1","type":"number","desc":"0关闭，1推送,默认12点以及23点推送"},{"id":"shuqinotifyInterval","name":"通知控制","val":"2","type":"number","desc":"0关闭，1为 所有通知，2为 12，23 点通知，3为 6，12，18，23 点通知 "},{"id":"shuqiMinutes","name":"推送-通知 分钟控制","val":"59","type":"number","desc":"推送以及通知控制在什么分钟段，可设置0-59,默认0到10"}],"repo":"https://cdn.jsdelivr.net/gh/ziye888/JavaScript@main/Task/shuqi.js","icons":["https://cdn.jsdelivr.net/gh/ziye888/JavaScript@main/Task/shuqi.png","https://cdn.jsdelivr.net/gh/ziye888/JavaScript@main/Task/shuqi.png"],"script":"https://cdn.jsdelivr.net/gh/ziye888/JavaScript@main/Task/shuqi.js","icon":"https://cdn.jsdelivr.net/gh/ziye888/JavaScript@main/Task/shuqi.png","favIcon":"mdi-star","favIconColor":"primary","datas":[{"key":"shuqiuserurl","val":"https://ocean.shuqireader.com/api/jaccount/accountapi/v1/sapi/account/getBindinfo?userId=2129913539&sqSv=1.0&timestamp=1624091975&sign=79b338f83d32b7045ba0675397a1946f&key=sq_h5_gateway"},{"key":"shuqisyurl","val":"https://render.shuqireader.com/load/resource?sdk=13.2.3&utdid=YM2ouhjiTb4DAAzm%2B%2F2JM%2FZO&ustatus=0&first_placeid=111111&net_env=3g&placeid=111111&user_id=2129913539&sn=F9AC38AFC9DCEA45C00C754778A263FFB7F9AEA7&umidtoken=YM2ouhjiTb4DAAzm%2B%2F2JM%2FZO&msv=8.0.0&brand=Apple&imei=BC80F73BDE18171AE5B9FAC018EC22E50CCC407C&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=iOS&ver=210301&mod=UnknowniPad&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=464F2D16-C2F0-4832-B06C-DE9F6EDA2399"},{"key":"shuqisybody","val":"appVer=4.3.6.0&imei=BC80F73BDE18171AE5B9FAC018EC22E50CCC407C&isNewUser=1&params=%7B%22resources%22%3A%7B%22ShuqiVipEntry%22%3A%7B%7D%2C%22personalCardConfig%22%3A%7B%7D%7D%7D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=46640c431bedee0d6c3e30a318597247&sn=F9AC38AFC9DCEA45C00C754778A263FFB7F9AEA7&soft_id=21&timestamp=1624091931&user_id=2129913539&ver=210301"},{"key":"shuqispbody","val":"_public=skinId%3D999%26idfa%3D464F2D16-C2F0-4832-B06C-DE9F6EDA2399%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26umidtoken%3DYM2ouhjiTb4DAAzm%2B/2JM/ZO%26user_id%3D2129913539%26sn%3DF9AC38AFC9DCEA45C00C754778A263FFB7F9AEA7%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3DBC80F73BDE18171AE5B9FAC018EC22E50CCC407C%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYM2ouhjiTb4DAAzm%2B/2JM/ZO%26utype%3Dpre_vip%26sdk%3D13.2.3&deliveryId=525&key=sq_app_ad&miniWua=HHnB_ckCnDtxW8tHCQXIofZOh251/M3z/EIbkzIHKv5/zmmw%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=626&sign=79E7B08659A377B89EEB6459A213B81B&timestamp=1624091952&userId=2129913539&user_id=2129913539&wua=HIVW_gibgTO%2BN%2BmIOHih8LEuta5qy3ThhD1HOfV5piEPI%2BaNU6lNHQSfZcSB5/P5cxFf%2BIM6AL2/TfmSkQTBU4yoAG8le1JIL5QczU3qSnNjhG/0e7sulsJH%2BqGLU0dsQft7uNgQzVCOWLP6FO%2BEt8oNyq0BVHnMjBLMS9IkudZrl470V15DdQY8oo/NSJ155sha3uXjfJpBhtiPhYmJvU3itJ%2B6HMnxdFOX5pTMrsGPIkdM%3D"},{"key":"shuqiscbody","val":""},{"key":"shuqiydbody","val":""},{"key":"shuqiqdbody","val":"clientTimestamp=1624091944&position=501&userId=2129913539&signInType=1&wua=HIVW_FO7lrzioOluEp1Gy8COttyc2950kTAl3cHL92tlbN8GCkwGxJNH8joXvS%2BqsGygkW4g4lkTHW94cDJMKhz1shV20Zlk3YZD%2BidglTSaU0WkSxf0ypytJpQEmk0Y890eUxW4vxksa11Dd46t3%2BmkYtk7jdE%2FLw3KQiHeUJy%2BFH8K6vEURY%2FnnWXambFa04dWQs3dru13oe4VhLX7FbE1QQuRbhaQ6LMKLfqDbD%2BEgNVE%3D&ua=&miniWua=HHnB_RNYdex%2FhPqNLw6UnotHXCQuTseyJNr7UkNruT1vxUaM%3D&umidtoken=YM2ouhjiTb4DAAzm%2B%2F2JM%2FZO&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&sign=d6504872c15cffbb45639138168df74e&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.2.3%26utdid%3DYM2ouhjiTb4DAAzm%252B%252F2JM%252FZO%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2129913539%26sn%3DF9AC38AFC9DCEA45C00C754778A263FFB7F9AEA7%26umidtoken%3DYM2ouhjiTb4DAAzm%252B%252F2JM%252FZO%26msv%3D8.0.0%26brand%3DApple%26imei%3DBC80F73BDE18171AE5B9FAC018EC22E50CCC407C%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D464F2D16-C2F0-4832-B06C-DE9F6EDA2399"},{"key":"shuqirwbody","val":"serviceWorkerOn=1&stopPullRefresh=1&from=ShuqiTab&upf=20368&sdk=13.2.3&utdid=YM2ouhjiTb4DAAzm%2B%2F2JM%2FZO&ustatus=0&first_placeid=111111&net_env=3g&placeid=111111&user_id=2129913539&sn=F9AC38AFC9DCEA45C00C754778A263FFB7F9AEA7&umidtoken=YM2ouhjiTb4DAAzm%2B%2F2JM%2FZO&msv=8.0.0&brand=Apple&imei=BC80F73BDE18171AE5B9FAC018EC22E50CCC407C&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&session=&skinColor=23B383&platform=1&ver=210301&mod=UnknowniPad&statusBarHeight=44.000000&skinVersion=1&wh=1242x2688&soft_id=21&utype=pre_vip&skinId=999&idfa=464F2D16-C2F0-4832-B06C-DE9F6EDA2399&params=%7B%22resources%22%3A%7B%22ShuqiBsDailyTask%22%3A%7B%7D%7D%7D&userId=2129913539&placeId=111111&timestamp=1624091955&sqSv=1.0&sign=c27bafbfec76a62e828c08aa8e24f4a4&key=sq_h5_gateway&_public="},{"key":"shuqifxbody","val":""},{"key":"shuqisprwurl","val":"https://ocean.shuqireader.com/api/ad/adserver/v1/api/getAdInfo?appVer=4.3.6.0&placeId=111111&platform=iOS&requestSrc=h5&resourceId=626&timestamp=1624091973&user_id=2129913539&sqSv=1.0&sign=2fd89a722657a7a70e1743b61348a3f7&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.2.3%26utdid%3DYM2ouhjiTb4DAAzm%252B%252F2JM%252FZO%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2129913539%26sn%3DF9AC38AFC9DCEA45C00C754778A263FFB7F9AEA7%26umidtoken%3DYM2ouhjiTb4DAAzm%252B%252F2JM%252FZO%26msv%3D8.0.0%26brand%3DApple%26imei%3DBC80F73BDE18171AE5B9FAC018EC22E50CCC407C%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D464F2D16-C2F0-4832-B06C-DE9F6EDA2399"},{"key":"shuqijlbody","val":"requestSrc=h5&userId=2129913539&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624091955&sqSv=1.0&sign=476a74fc3abfb7d75eb717ba6d519e74&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.2.3%26utdid%3DYM2ouhjiTb4DAAzm%252B%252F2JM%252FZO%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2129913539%26sn%3DF9AC38AFC9DCEA45C00C754778A263FFB7F9AEA7%26umidtoken%3DYM2ouhjiTb4DAAzm%252B%252F2JM%252FZO%26msv%3D8.0.0%26brand%3DApple%26imei%3DBC80F73BDE18171AE5B9FAC018EC22E50CCC407C%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D464F2D16-C2F0-4832-B06C-DE9F6EDA2399"},{"key":"shuqisqjlbody","val":"src=&userId=2129913539&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624091948&sqSv=1.0&sign=d74dd656721ea6756593f70f54594071&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.2.3%26utdid%3DYM2ouhjiTb4DAAzm%252B%252F2JM%252FZO%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2129913539%26sn%3DF9AC38AFC9DCEA45C00C754778A263FFB7F9AEA7%26umidtoken%3DYM2ouhjiTb4DAAzm%252B%252F2JM%252FZO%26msv%3D8.0.0%26brand%3DApple%26imei%3DBC80F73BDE18171AE5B9FAC018EC22E50CCC407C%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D464F2D16-C2F0-4832-B06C-DE9F6EDA2399"},{"key":"shuqicjyurl","val":"https://ocean.shuqireader.com/api/activity/activity/v1/lottery/info?timestamp=1624091975&userId=2129913539&activityId=311&sqSv=1.0&sign=cad20a93144a4aa0566e0560ed46c0fc&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.2.3%26utdid%3DYM2ouhjiTb4DAAzm%252B%252F2JM%252FZO%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2129913539%26sn%3DF9AC38AFC9DCEA45C00C754778A263FFB7F9AEA7%26umidtoken%3DYM2ouhjiTb4DAAzm%252B%252F2JM%252FZO%26msv%3D8.0.0%26brand%3DApple%26imei%3DBC80F73BDE18171AE5B9FAC018EC22E50CCC407C%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D464F2D16-C2F0-4832-B06C-DE9F6EDA2399"},{"key":"shuqicjcsbody","val":"_public=skinId%3D999%26idfa%3D464F2D16-C2F0-4832-B06C-DE9F6EDA2399%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26umidtoken%3DYM2ouhjiTb4DAAzm%2B/2JM/ZO%26user_id%3D2129913539%26sn%3DF9AC38AFC9DCEA45C00C754778A263FFB7F9AEA7%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3DBC80F73BDE18171AE5B9FAC018EC22E50CCC407C%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYM2ouhjiTb4DAAzm%2B/2JM/ZO%26utype%3Dpre_vip%26sdk%3D13.2.3&deliveryId=711&key=sq_app_ad&miniWua=HHnB_G5SZ523d0B/6GhIPmu1/Hc8yMBebVwfKaU1NNe9P890%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=703&sign=8F0D3C7F5D0369F049DE4A3E058190A3&timestamp=1624091960&userId=2129913539&user_id=2129913539&wua=HIVW_6tonDLZj8OWV/Fmlae83viW06JV8Ef2HBRbVcv%2BOik7Koz3dOuzGxmFeaqfhND3EiRBzprvwKvO0jxDUi27X6A0AUi1%2Bp8MRiAA6WNKntWGBQig/ezVXKFiHzb/PBul1s5jLcqvxvC67HzIsKnXdZesK%2Bj8OX70GKA1THNVYfVZIwttv3JWQqgbqZTmMbqIPCCtyqjA2770rvKe8G91%2BaM%2BWJL9OtgrNnPQHJx%2BY1vk%3D"},{"key":"shuqicjbody","val":"wua=HIVW_iDNWKnrwmqjdpnTAX9IsMRMemq4GxNHkRJnZ5hsfWHL7O9PSghU1sDDsp1vEiuD1314Po0oEX0NGgZ1FnWL1W2arXoOV9Blv3Yzzhmc3MeHNwklDVPVmMUDxFsB%2BOJT52Z4JAuaZfBY6CIKCIcNzryOhsum3cQ7WU4dYeEC02yATNLo1PISaIk6nccRyeawL66EZDHBXJDXyTHudntQ0kCluVIpym0hwWqx69rVMD78%3D&ua=&userId=2129913539&umidtoken=YM2ouhjiTb4DAAzm%2B%2F2JM%2FZO&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&asac=2A20C07RJ9F51AOEFSNHDR&timestamp=1624091965&activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&sqSv=1.0&sign=0bed129b0dd2b419dcc0924ea7d110a9&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.2.3%26utdid%3DYM2ouhjiTb4DAAzm%252B%252F2JM%252FZO%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2129913539%26sn%3DF9AC38AFC9DCEA45C00C754778A263FFB7F9AEA7%26umidtoken%3DYM2ouhjiTb4DAAzm%252B%252F2JM%252FZO%26msv%3D8.0.0%26brand%3DApple%26imei%3DBC80F73BDE18171AE5B9FAC018EC22E50CCC407C%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D464F2D16-C2F0-4832-B06C-DE9F6EDA2399"},{"key":"shuqijsspbody","val":""},{"key":"shuqijsydurl","val":""},{"key":"shuqijsydbody","val":""},{"key":"shuqijsqdbody","val":""},{"key":"shuqijsqdspyurl","val":""},{"key":"shuqijsqdspbody","val":""},{"key":"shuqijsrwbody","val":""},{"key":"shuqijsfxbody","val":""},{"key":"shuqijsbookurl","val":""},{"key":"shuqijsbookbody","val":""},{"key":"shuqijssprwurl","val":""},{"key":"shuqiuserurl2","val":"https://ocean.shuqireader.com/api/jaccount/accountapi/v1/sapi/account/getBindinfo?userId=2130460843&sqSv=1.0&timestamp=1624092042&sign=fb01281f88e15c392ecdc5782dc9ad6f&key=sq_h5_gateway"},{"key":"shuqisyurl2","val":"https://render.shuqireader.com/load/resource?sdk=13.3&utdid=YM2ouhjiTb4DAAzm%2B%2F2JM%2FZO&ustatus=0&first_placeid=111111&net_env=3g&placeid=111111&user_id=2130460843&sn=08C00BA4D9A790608D2C5DA4A981C444A565427D&umidtoken=YM2ouhjiTb4DAAzm%2B%2F2JM%2FZO&msv=8.0.0&brand=Apple&imei=B91F6DDD08688DEBC40698514EF99E6051DDF91A&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=iOS&ver=210301&mod=iPhoneX&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=9C04C434-8839-4C24-A659-A68CB914A6FB"},{"key":"shuqisybody2","val":"appVer=4.3.6.0&imei=B91F6DDD08688DEBC40698514EF99E6051DDF91A&isNewUser=1&params=%7B%22resources%22%3A%7B%22ShuqiVipEntry%22%3A%7B%7D%2C%22personalCardConfig%22%3A%7B%7D%7D%7D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=156f63e63c29734e959b77a3a35589b7&sn=08C00BA4D9A790608D2C5DA4A981C444A565427D&soft_id=21&timestamp=1624091997&user_id=2130460843&ver=210301"},{"key":"shuqispbody2","val":"_public=skinId%3D999%26idfa%3D9C04C434-8839-4C24-A659-A68CB914A6FB%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26umidtoken%3DYM2ouhjiTb4DAAzm%2B/2JM/ZO%26user_id%3D2130460843%26sn%3D08C00BA4D9A790608D2C5DA4A981C444A565427D%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3DB91F6DDD08688DEBC40698514EF99E6051DDF91A%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhoneX%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYM2ouhjiTb4DAAzm%2B/2JM/ZO%26utype%3Dpre_vip%26sdk%3D13.3&deliveryId=525&key=sq_app_ad&miniWua=HHnB_0Xuniz4J5kWSX7cIZsRYBwJ4JXOR%2B%2BRGXZ66r/U62Ns%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=626&sign=FC516E6893EB510897A8FC9991581D43&timestamp=1624092019&userId=2130460843&user_id=2130460843&wua=HIVW_G636aitUevehgH/uYx%2B9dZY7pQUAtnJSldK9Ui3E5oInszpN5wYpV/C6UHQSzdaldBz7ChBEq13O909JlQnYQmxJ44LoYT507aQdC3NmeYvre3hPjBpOYOSJZJWBzzjuWHmXz9OP7YJlRiCAM459TGrue3K5VrtYqd0wb9M3ENvMdp1pl8lezP9I48yrqHHui/7j1QOAvXYQOmUZZSrYQwpV0iAlG32MnLeJtH0cpu0%3D"},{"key":"shuqiscbody2","val":""},{"key":"shuqiydbody2","val":""},{"key":"shuqiqdbody2","val":"clientTimestamp=1624092012&position=501&userId=2130460843&signInType=1&wua=HIVW_vM72EgG9S%2Bnfi1P6RbOCd3yx6wZvks91Hi0GDq0jc4BgobD2WiluYdzfvZd4hzEF5ubuO2q2ekudVfoZkiQn2CSSYbEqD2kBhihWatfsmM9xYTyRS0gY02JjIA0uJyRW8INrorUiBVs0fYx2CldO3rbU6eyD5AIZNwElqDHs1UGkMPrAwzM8qt6Ituo2EkCm3CbJePBORofaX7TMur3eVruCBTuZOoy3OW7egQ%2FfBAM%3D&ua=&miniWua=HHnB_H2mykvpdviVYCuf%2FVeHlRw4KB4ibngK7wEOH3YHwHUI%3D&umidtoken=YM2ouhjiTb4DAAzm%2B%2F2JM%2FZO&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&sign=e8171e7e9bde4cdd5596ed37a236ed29&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.3%26utdid%3DYM2ouhjiTb4DAAzm%252B%252F2JM%252FZO%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2130460843%26sn%3D08C00BA4D9A790608D2C5DA4A981C444A565427D%26umidtoken%3DYM2ouhjiTb4DAAzm%252B%252F2JM%252FZO%26msv%3D8.0.0%26brand%3DApple%26imei%3DB91F6DDD08688DEBC40698514EF99E6051DDF91A%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhoneX%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D9C04C434-8839-4C24-A659-A68CB914A6FB"},{"key":"shuqirwbody2","val":"serviceWorkerOn=1&stopPullRefresh=1&from=ShuqiTab&upf=20368&sdk=13.3&utdid=YM2ouhjiTb4DAAzm%2B%2F2JM%2FZO&ustatus=0&first_placeid=111111&net_env=3g&placeid=111111&user_id=2130460843&sn=08C00BA4D9A790608D2C5DA4A981C444A565427D&umidtoken=YM2ouhjiTb4DAAzm%2B%2F2JM%2FZO&msv=8.0.0&brand=Apple&imei=B91F6DDD08688DEBC40698514EF99E6051DDF91A&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=1&ver=210301&mod=iPhoneX&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=9C04C434-8839-4C24-A659-A68CB914A6FB&params=%7B%22resources%22%3A%7B%22ShuqiBsDailyTask%22%3A%7B%7D%7D%7D&userId=2130460843&placeId=111111&timestamp=1624092023&sqSv=1.0&sign=2352e4a37afa8ed4d2533e41fdbfc50e&key=sq_h5_gateway&_public="},{"key":"shuqifxbody2","val":""},{"key":"shuqisprwurl2","val":"https://ocean.shuqireader.com/api/ad/adserver/v1/api/getAdInfo?appVer=4.3.6.0&placeId=111111&platform=iOS&requestSrc=h5&resourceId=626&timestamp=1624092040&user_id=2130460843&sqSv=1.0&sign=e9451aadd2adc53d9d7b8f93e421df87&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.3%26utdid%3DYM2ouhjiTb4DAAzm%252B%252F2JM%252FZO%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2130460843%26sn%3D08C00BA4D9A790608D2C5DA4A981C444A565427D%26umidtoken%3DYM2ouhjiTb4DAAzm%252B%252F2JM%252FZO%26msv%3D8.0.0%26brand%3DApple%26imei%3DB91F6DDD08688DEBC40698514EF99E6051DDF91A%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhoneX%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D9C04C434-8839-4C24-A659-A68CB914A6FB"},{"key":"shuqijlbody2","val":"requestSrc=h5&userId=2130460843&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624092023&sqSv=1.0&sign=9f03afe3214303400399fad7dfd2320f&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.3%26utdid%3DYM2ouhjiTb4DAAzm%252B%252F2JM%252FZO%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2130460843%26sn%3D08C00BA4D9A790608D2C5DA4A981C444A565427D%26umidtoken%3DYM2ouhjiTb4DAAzm%252B%252F2JM%252FZO%26msv%3D8.0.0%26brand%3DApple%26imei%3DB91F6DDD08688DEBC40698514EF99E6051DDF91A%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhoneX%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D9C04C434-8839-4C24-A659-A68CB914A6FB"},{"key":"shuqisqjlbody2","val":"src=&userId=2130460843&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624092016&sqSv=1.0&sign=847b05056e92cb02751309abca68ad99&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.3%26utdid%3DYM2ouhjiTb4DAAzm%252B%252F2JM%252FZO%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2130460843%26sn%3D08C00BA4D9A790608D2C5DA4A981C444A565427D%26umidtoken%3DYM2ouhjiTb4DAAzm%252B%252F2JM%252FZO%26msv%3D8.0.0%26brand%3DApple%26imei%3DB91F6DDD08688DEBC40698514EF99E6051DDF91A%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhoneX%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D9C04C434-8839-4C24-A659-A68CB914A6FB"},{"key":"shuqicjyurl2","val":"https://ocean.shuqireader.com/api/activity/activity/v1/lottery/info?timestamp=1624092043&userId=2130460843&activityId=311&sqSv=1.0&sign=1f77586095d61fb9d15f91a733a81465&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.3%26utdid%3DYM2ouhjiTb4DAAzm%252B%252F2JM%252FZO%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2130460843%26sn%3D08C00BA4D9A790608D2C5DA4A981C444A565427D%26umidtoken%3DYM2ouhjiTb4DAAzm%252B%252F2JM%252FZO%26msv%3D8.0.0%26brand%3DApple%26imei%3DB91F6DDD08688DEBC40698514EF99E6051DDF91A%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhoneX%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D9C04C434-8839-4C24-A659-A68CB914A6FB"},{"key":"shuqicjcsbody2","val":"_public=skinId%3D999%26idfa%3D9C04C434-8839-4C24-A659-A68CB914A6FB%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26umidtoken%3DYM2ouhjiTb4DAAzm%2B/2JM/ZO%26user_id%3D2130460843%26sn%3D08C00BA4D9A790608D2C5DA4A981C444A565427D%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3DB91F6DDD08688DEBC40698514EF99E6051DDF91A%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhoneX%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYM2ouhjiTb4DAAzm%2B/2JM/ZO%26utype%3Dpre_vip%26sdk%3D13.3&deliveryId=711&key=sq_app_ad&miniWua=HHnB_ggIK9yv45qYsirFt0GEdI%2BrPZ%2BZZ86fjIFIh61od4IQ%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=703&sign=F2D062AC13F82480DEEC101C2CC5D0DD&timestamp=1624092027&userId=2130460843&user_id=2130460843&wua=HIVW_U1eZiIhp42JxerLqj2cCoi2i5h/33ox7StLWRUupoIl3DOP7S70iD4VMFnWsPVNcugvIn7pQRGH8KLgJqnkYsWw5WgRLnky2SN8p84WOha1svJRzezBERTdFubTsMRAJ%2BhLewsqCx7tcnz2IiEamIZMVRI6qanzrafbH6ExHNctUJVq%2BMsJXPXYPM1YeR0hsDBa1pAkkcBSoUi0EEIuXNC52aiKR7bV4FDR4PFp02ZQ%3D"},{"key":"shuqicjbody2","val":"wua=HIVW_%2FCyJF7DVDMqlPK%2B2DPEzusbQ8Wi%2B9rqwNRq8aAB4d160%2F6VTmkFi6O4NGLaH7Y98tTXJsGL%2FaWdVFtgD3H%2BrDrLfxitqkTEEjoa1rPGMKGuGXlEGiys2QX%2FtnDQBYAbMOuBNZ%2FNRyMmUpZqaAoYWjsFo11WOqimWMFWthv0l6NV6vzC06nAY8K1I4TsjGl8HLpN5MUFnoIALe0tJe8gY04yAtow6CsdatzjGdPZVkmA%3D&ua=&userId=2130460843&umidtoken=YM2ouhjiTb4DAAzm%2B%2F2JM%2FZO&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&asac=2A20C07RJ9F51AOEFSNHDR&timestamp=1624092030&activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&sqSv=1.0&sign=1ed495702e48bcf260028338ddd6c0b1&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.3%26utdid%3DYM2ouhjiTb4DAAzm%252B%252F2JM%252FZO%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2130460843%26sn%3D08C00BA4D9A790608D2C5DA4A981C444A565427D%26umidtoken%3DYM2ouhjiTb4DAAzm%252B%252F2JM%252FZO%26msv%3D8.0.0%26brand%3DApple%26imei%3DB91F6DDD08688DEBC40698514EF99E6051DDF91A%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhoneX%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D9C04C434-8839-4C24-A659-A68CB914A6FB"},{"key":"shuqijsspbody2","val":""},{"key":"shuqijsydurl2","val":""},{"key":"shuqijsydbody2","val":""},{"key":"shuqijsqdbody2","val":""},{"key":"shuqijsqdspyurl2","val":""},{"key":"shuqijsqdspbody2","val":""},{"key":"shuqijsrwbody2","val":""},{"key":"shuqijsfxbody2","val":""},{"key":"shuqijsbookurl2","val":""},{"key":"shuqijsbookbody2","val":""},{"key":"shuqijssprwurl2","val":""},{"key":"shuqiuserurl3","val":"https://ocean.shuqireader.com/api/jaccount/accountapi/v1/sapi/account/getBindinfo?userId=2129614295&sqSv=1.0&timestamp=1624092187&sign=57eaf78f740f95ed8f548e4bd6de542d&key=sq_h5_gateway"},{"key":"shuqisyurl3","val":"https://render.shuqireader.com/load/resource?sdk=13.1&utdid=YM1UFmqVN7UDAE%2BMp3t5FvBR&ustatus=0&first_placeid=111111&net_env=wifi&placeid=111111&user_id=2129614295&sn=E4DED0712361F6733DA38023DB6F382C8337D939&umidtoken=YM1UFmqVN7UDAE%2BMp3t5FvBR&msv=8.0.0&brand=Apple&imei=16C869645B6AE4AEFFB856BEC0B5725274B89530&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=iOS&ver=210301&mod=iPad3G&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=D420C797-CAE1-4EA2-A46A-349BCF46356E"},{"key":"shuqisybody3","val":"appVer=4.3.6.0&imei=16C869645B6AE4AEFFB856BEC0B5725274B89530&isNewUser=1&params=%7B%22resources%22%3A%7B%22ShuqiVipEntry%22%3A%7B%7D%2C%22personalCardConfig%22%3A%7B%7D%7D%7D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=f24f0069c5bfef71bb24967562d82253&sn=E4DED0712361F6733DA38023DB6F382C8337D939&soft_id=21&timestamp=1624092059&user_id=2129614295&ver=210301"},{"key":"shuqispbody3","val":"_public=skinId%3D999%26idfa%3DD420C797-CAE1-4EA2-A46A-349BCF46356E%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26umidtoken%3DYM1UFmqVN7UDAE%2BMp3t5FvBR%26user_id%3D2129614295%26sn%3DE4DED0712361F6733DA38023DB6F382C8337D939%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D16C869645B6AE4AEFFB856BEC0B5725274B89530%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPad3G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYM1UFmqVN7UDAE%2BMp3t5FvBR%26utype%3Dpre_vip%26sdk%3D13.1&deliveryId=525&key=sq_app_ad&miniWua=HHnB_UNLgaU5wu%2BsFHmXfOk8e803tNHaDa40zyfCp4ohbPMk%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=626&sign=034CB1F3F26BAE6997155256748704B7&timestamp=1624092079&userId=2129614295&user_id=2129614295&wua=HIVW_MZYhnZPB/pvOsvDMuk684Gi%2BdnGriQH4nlVum3cmAKHk2Avz0%2BDcEDhpAWVgrS3JXO1jBGTKKp8681i4vgSAj2at5xzYtkeievYXSoPIv6thXk1gC1yzG2Fy2mD9AVuwqsjSAE/dpD0JPf6Hwi2uOAlr1TZKhongt0YGdwLt/SxvV1OIX6HloeQD1sssAc9k9vgKkGAzuvsusp2lcvFzSCO20NeWIdMCT9LdqCFs9%2B4%3D"},{"key":"shuqiscbody3","val":""},{"key":"shuqiydbody3","val":""},{"key":"shuqiqdbody3","val":"clientTimestamp=1624092072&position=501&userId=2129614295&signInType=1&wua=HIVW_uGsn2wZEcRhttqfgqRcaixl6XdAbZOlFBUy3g46Oj6UBwBgkryjCvdLyQnX28wjB3UI36b3iJddV3mQ6vffAR1Uqb8c07ayHeccahrjyGhNOsmBTXxw0zciOYGr9R6QIxnRAP%2F77oEvEgmm4pHAtyJkFkkhGHDZ94G%2Fz%2FdDGc7eEa1p0LW8yzD7j423Vu%2FwX4VCbQU96WfDgAr1M2TqKUoq50Jyj6XSikTiohCQwMDk%3D&ua=&miniWua=HHnB_96AepardTldPigW1bfSlu7SSCm%2BuEPtIBOZA5uuUjWU%3D&umidtoken=YM1UFmqVN7UDAE%2BMp3t5FvBR&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&sign=06b0e3356b03007c7e77a1ba0115606a&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.1%26utdid%3DYM1UFmqVN7UDAE%252BMp3t5FvBR%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2129614295%26sn%3DE4DED0712361F6733DA38023DB6F382C8337D939%26umidtoken%3DYM1UFmqVN7UDAE%252BMp3t5FvBR%26msv%3D8.0.0%26brand%3DApple%26imei%3D16C869645B6AE4AEFFB856BEC0B5725274B89530%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad3G%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DD420C797-CAE1-4EA2-A46A-349BCF46356E"},{"key":"shuqirwbody3","val":"serviceWorkerOn=1&stopPullRefresh=1&from=ShuqiTab&upf=20368&sdk=13.1&utdid=YM1UFmqVN7UDAE%2BMp3t5FvBR&ustatus=0&first_placeid=111111&net_env=wifi&placeid=111111&user_id=2129614295&sn=E4DED0712361F6733DA38023DB6F382C8337D939&umidtoken=YM1UFmqVN7UDAE%2BMp3t5FvBR&msv=8.0.0&brand=Apple&imei=16C869645B6AE4AEFFB856BEC0B5725274B89530&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=1&ver=210301&mod=iPad3G&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=D420C797-CAE1-4EA2-A46A-349BCF46356E&params=%7B%22resources%22%3A%7B%22ShuqiBsDailyTask%22%3A%7B%7D%7D%7D&userId=2129614295&placeId=111111&timestamp=1624092085&sqSv=1.0&sign=e6b8435057d7b41cb46211c07fed9a14&key=sq_h5_gateway&_public="},{"key":"shuqifxbody3","val":""},{"key":"shuqisprwurl3","val":"https://ocean.shuqireader.com/api/ad/adserver/v1/api/getAdInfo?appVer=4.3.6.0&placeId=111111&platform=iOS&requestSrc=h5&resourceId=626&timestamp=1624092187&user_id=2129614295&sqSv=1.0&sign=df20122fa10551970c827fb3f8b20a1f&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.1%26utdid%3DYM1UFmqVN7UDAE%252BMp3t5FvBR%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2129614295%26sn%3DE4DED0712361F6733DA38023DB6F382C8337D939%26umidtoken%3DYM1UFmqVN7UDAE%252BMp3t5FvBR%26msv%3D8.0.0%26brand%3DApple%26imei%3D16C869645B6AE4AEFFB856BEC0B5725274B89530%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad3G%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DD420C797-CAE1-4EA2-A46A-349BCF46356E"},{"key":"shuqijlbody3","val":"requestSrc=h5&userId=2129614295&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624092085&sqSv=1.0&sign=78ba8c1875c05e963f5ddfee8772b11b&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.1%26utdid%3DYM1UFmqVN7UDAE%252BMp3t5FvBR%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2129614295%26sn%3DE4DED0712361F6733DA38023DB6F382C8337D939%26umidtoken%3DYM1UFmqVN7UDAE%252BMp3t5FvBR%26msv%3D8.0.0%26brand%3DApple%26imei%3D16C869645B6AE4AEFFB856BEC0B5725274B89530%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad3G%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DD420C797-CAE1-4EA2-A46A-349BCF46356E"},{"key":"shuqisqjlbody3","val":"src=&userId=2129614295&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624092076&sqSv=1.0&sign=0c52e75fc5664f5105198b7e99c87b02&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.1%26utdid%3DYM1UFmqVN7UDAE%252BMp3t5FvBR%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2129614295%26sn%3DE4DED0712361F6733DA38023DB6F382C8337D939%26umidtoken%3DYM1UFmqVN7UDAE%252BMp3t5FvBR%26msv%3D8.0.0%26brand%3DApple%26imei%3D16C869645B6AE4AEFFB856BEC0B5725274B89530%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad3G%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DD420C797-CAE1-4EA2-A46A-349BCF46356E"},{"key":"shuqicjyurl3","val":"https://ocean.shuqireader.com/api/activity/activity/v1/lottery/info?timestamp=1624092190&userId=2129614295&activityId=311&sqSv=1.0&sign=a367d7ea15ace46773ad2c1fd8bee6cc&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.1%26utdid%3DYM1UFmqVN7UDAE%252BMp3t5FvBR%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2129614295%26sn%3DE4DED0712361F6733DA38023DB6F382C8337D939%26umidtoken%3DYM1UFmqVN7UDAE%252BMp3t5FvBR%26msv%3D8.0.0%26brand%3DApple%26imei%3D16C869645B6AE4AEFFB856BEC0B5725274B89530%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad3G%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DD420C797-CAE1-4EA2-A46A-349BCF46356E"},{"key":"shuqicjcsbody3","val":"_public=skinId%3D999%26idfa%3DD420C797-CAE1-4EA2-A46A-349BCF46356E%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26umidtoken%3DYM1UFmqVN7UDAE%2BMp3t5FvBR%26user_id%3D2129614295%26sn%3DE4DED0712361F6733DA38023DB6F382C8337D939%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D16C869645B6AE4AEFFB856BEC0B5725274B89530%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPad3G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYM1UFmqVN7UDAE%2BMp3t5FvBR%26utype%3Dpre_vip%26sdk%3D13.1&deliveryId=711&key=sq_app_ad&miniWua=HHnB_U%2B%2B1AnaQzmBY2P10TRu8qu/TEzoczyDoTNZ1SfRMaO8%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=703&sign=F49F7A82FABB4451196CC60C000ACB68&timestamp=1624092089&userId=2129614295&user_id=2129614295&wua=HIVW_Re4XotKihjnFDMgYsvYoHK3TdcBAX2sXs7/S%2Bkffn/8sG01HdxOP0kl506z0MCzP3be0hiMloJGXx7%2BnsWfmBGOi8rZb1IVzPbVYMX71VhPvNLnRX3hXEdK4zc9CJjf13mFZrARIeztCNM0pfYtpmvL584SfAYep5huHgygiR5v51eiCyaMIvkUCfjBCUW5wFSemQGQu009bALVArCyq2XSX2s1CA/Ia2CtytbdVtGc%3D"},{"key":"shuqicjbody3","val":"wua=HIVW_SseBvMalJoZBTQLzzicj%2BHpuQJNlsWo2hquOF9q2J52Q38yixA4NhCbJjhPN8xH6C1hyah6t29KSW9Pv%2FUJdJLV6KWVXaP1eslxdUOBBsPwue673kCGmdD48ebWnhDZr3DHFlqByo6EW130S2f8fWQFQbDZR12Xu%2Bo2Vzq7sMfnNvBp%2Fcf3OoCT5Z5plPlpuNSL4GgItNaAG5wTQS7s6k%2B0z0GOb4MAaaQyqUCCId%2BA%3D&ua=&userId=2129614295&umidtoken=YM1UFmqVN7UDAE%2BMp3t5FvBR&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&asac=2A20C07RJ9F51AOEFSNHDR&timestamp=1624092106&activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&sqSv=1.0&sign=99fafc2d6c2049c3631af97886d0be14&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.1%26utdid%3DYM1UFmqVN7UDAE%252BMp3t5FvBR%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2129614295%26sn%3DE4DED0712361F6733DA38023DB6F382C8337D939%26umidtoken%3DYM1UFmqVN7UDAE%252BMp3t5FvBR%26msv%3D8.0.0%26brand%3DApple%26imei%3D16C869645B6AE4AEFFB856BEC0B5725274B89530%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad3G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DD420C797-CAE1-4EA2-A46A-349BCF46356E"},{"key":"shuqijsspbody3","val":""},{"key":"shuqijsydurl3","val":""},{"key":"shuqijsydbody3","val":""},{"key":"shuqijsqdbody3","val":""},{"key":"shuqijsqdspyurl3","val":""},{"key":"shuqijsqdspbody3","val":""},{"key":"shuqijsrwbody3","val":""},{"key":"shuqijsfxbody3","val":""},{"key":"shuqijsbookurl3","val":""},{"key":"shuqijsbookbody3","val":""},{"key":"shuqijssprwurl3","val":""},{"key":"shuqiuserurl4","val":"https://ocean.shuqireader.com/api/jaccount/accountapi/v1/sapi/account/getBindinfo?userId=2129514214&sqSv=1.0&timestamp=1624092245&sign=ef9ebf34d98dc371b60c4b24081d7755&key=sq_h5_gateway"},{"key":"shuqisyurl4","val":"https://render.shuqireader.com/load/resource?sdk=13.1.1&utdid=YM1UHxBfADoDAAsHbCfZhmfJ&ustatus=0&first_placeid=111111&net_env=4g&placeid=111111&user_id=2129514214&sn=08C1FB5824FA51F45FF056F81A31426CCCFC5553&umidtoken=YM1UHxBfADoDAAsHbCfZhmfJ&msv=8.0.0&brand=Apple&imei=D8435374E7B56D16F87BAF722CBDC7C6F1A05670&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=iOS&ver=210301&mod=iPad2G&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=AABEDA8D-647B-4AB6-B5A4-3465E80831D2"},{"key":"shuqisybody4","val":"appVer=4.3.6.0&imei=D8435374E7B56D16F87BAF722CBDC7C6F1A05670&isNewUser=1&params=%7B%22resources%22%3A%7B%22ShuqiVipEntry%22%3A%7B%7D%2C%22personalCardConfig%22%3A%7B%7D%7D%7D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=be2161e3b10821e33d3d86d4742805b1&sn=08C1FB5824FA51F45FF056F81A31426CCCFC5553&soft_id=21&timestamp=1624092200&user_id=2129514214&ver=210301"},{"key":"shuqispbody4","val":"_public=skinId%3D999%26idfa%3DAABEDA8D-647B-4AB6-B5A4-3465E80831D2%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26umidtoken%3DYM1UHxBfADoDAAsHbCfZhmfJ%26user_id%3D2129514214%26sn%3D08C1FB5824FA51F45FF056F81A31426CCCFC5553%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3DD8435374E7B56D16F87BAF722CBDC7C6F1A05670%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPad2G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYM1UHxBfADoDAAsHbCfZhmfJ%26utype%3Dpre_vip%26sdk%3D13.1.1&deliveryId=525&key=sq_app_ad&miniWua=HHnB_JsZwgXzqHuTz6FkbaWlAmsMPsytGFsHOB2pbDe790Nw%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=626&sign=9706D7882E1134D4BC676AD50F6C653A&timestamp=1624092220&userId=2129514214&user_id=2129514214&wua=HIVW_VOSEMVnbmBl/P3wCI23n0FtFXdA0bCtsWQ%2BCaYExxhWXb6ZECZVuloaZolQysvXn1ykZ6I6nKV5PqueOY%2B4JyiPkFADkuxWKPEWAanMqczzfVPt2EtQcb7vL%2BqxjJXoD8rHRWPRN0bN/fvOeGB2DNnF52Ws4AZ3iPr2Ulmod%2BzCM2WpBXQ58S7wdNpcPN9R2dBE3TZAVVYpmiOJSan1hkvoS2/QK%2BEBtEV2IG7ma0lA%3D"},{"key":"shuqiscbody4","val":""},{"key":"shuqiydbody4","val":""},{"key":"shuqiqdbody4","val":"clientTimestamp=1624092213&position=501&userId=2129514214&signInType=1&wua=HIVW_v07VSlzXvJIZwedjcjceD71aSlw2IP%2BZr%2BftbxBgdovrCLxtDLgK47y8de4qbQWBC%2FtqaccBxtHyJxHG7lTu2GNeZgNxuAeggIev52qfo8J%2BMq0DXJyGayTD%2FqwEEml8vHmCrrJBF7BYTg9%2FYGwjBXokNnXG0Kngy5nU8Z2RSLRJJ1g1KAN5u5t3h%2FnN1vBwM0yIRKiUt5Wyu0Sx7PiNQo1RE2mN%2Fa4lrXZaqZ1MxIw%3D&ua=&miniWua=HHnB_agZQtn%2BaDOb7Rzv1VJt%2FTxn5Bcz0hsIWjaCU1WEXlg8%3D&umidtoken=YM1UHxBfADoDAAsHbCfZhmfJ&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&sign=d839bc2fa4cd2f5e6446b3d4ae4dfd2f&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.1.1%26utdid%3DYM1UHxBfADoDAAsHbCfZhmfJ%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2129514214%26sn%3D08C1FB5824FA51F45FF056F81A31426CCCFC5553%26umidtoken%3DYM1UHxBfADoDAAsHbCfZhmfJ%26msv%3D8.0.0%26brand%3DApple%26imei%3DD8435374E7B56D16F87BAF722CBDC7C6F1A05670%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad2G%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DAABEDA8D-647B-4AB6-B5A4-3465E80831D2"},{"key":"shuqirwbody4","val":"serviceWorkerOn=1&stopPullRefresh=1&from=ShuqiTab&upf=20368&sdk=13.1.1&utdid=YM1UHxBfADoDAAsHbCfZhmfJ&ustatus=0&first_placeid=111111&net_env=4g&placeid=111111&user_id=2129514214&sn=08C1FB5824FA51F45FF056F81A31426CCCFC5553&umidtoken=YM1UHxBfADoDAAsHbCfZhmfJ&msv=8.0.0&brand=Apple&imei=D8435374E7B56D16F87BAF722CBDC7C6F1A05670&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=1&ver=210301&mod=iPad2G&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=AABEDA8D-647B-4AB6-B5A4-3465E80831D2&params=%7B%22resources%22%3A%7B%22ShuqiBsDailyTask%22%3A%7B%7D%7D%7D&userId=2129514214&placeId=111111&timestamp=1624092224&sqSv=1.0&sign=3e85743a00d7ee09cb62fa75463d8e6f&key=sq_h5_gateway&_public="},{"key":"shuqifxbody4","val":""},{"key":"shuqisprwurl4","val":"https://ocean.shuqireader.com/api/ad/adserver/v1/api/getAdInfo?appVer=4.3.6.0&placeId=111111&platform=iOS&requestSrc=h5&resourceId=626&timestamp=1624092245&user_id=2129514214&sqSv=1.0&sign=362c9bb595ae77370fbd611d69a518f0&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.1.1%26utdid%3DYM1UHxBfADoDAAsHbCfZhmfJ%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2129514214%26sn%3D08C1FB5824FA51F45FF056F81A31426CCCFC5553%26umidtoken%3DYM1UHxBfADoDAAsHbCfZhmfJ%26msv%3D8.0.0%26brand%3DApple%26imei%3DD8435374E7B56D16F87BAF722CBDC7C6F1A05670%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad2G%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DAABEDA8D-647B-4AB6-B5A4-3465E80831D2"},{"key":"shuqijlbody4","val":"requestSrc=h5&userId=2129514214&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624092224&sqSv=1.0&sign=ea7b641b3190c7aa63df69f62e25a68f&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.1.1%26utdid%3DYM1UHxBfADoDAAsHbCfZhmfJ%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2129514214%26sn%3D08C1FB5824FA51F45FF056F81A31426CCCFC5553%26umidtoken%3DYM1UHxBfADoDAAsHbCfZhmfJ%26msv%3D8.0.0%26brand%3DApple%26imei%3DD8435374E7B56D16F87BAF722CBDC7C6F1A05670%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad2G%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DAABEDA8D-647B-4AB6-B5A4-3465E80831D2"},{"key":"shuqisqjlbody4","val":"src=&userId=2129514214&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624092217&sqSv=1.0&sign=895678fa731dac24307a3bed4abd6ed8&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.1.1%26utdid%3DYM1UHxBfADoDAAsHbCfZhmfJ%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2129514214%26sn%3D08C1FB5824FA51F45FF056F81A31426CCCFC5553%26umidtoken%3DYM1UHxBfADoDAAsHbCfZhmfJ%26msv%3D8.0.0%26brand%3DApple%26imei%3DD8435374E7B56D16F87BAF722CBDC7C6F1A05670%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad2G%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DAABEDA8D-647B-4AB6-B5A4-3465E80831D2"},{"key":"shuqicjyurl4","val":"https://ocean.shuqireader.com/api/activity/activity/v1/lottery/info?timestamp=1624092248&userId=2129514214&activityId=311&sqSv=1.0&sign=3f3a09664173433e6136c4c476411bd2&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.1.1%26utdid%3DYM1UHxBfADoDAAsHbCfZhmfJ%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2129514214%26sn%3D08C1FB5824FA51F45FF056F81A31426CCCFC5553%26umidtoken%3DYM1UHxBfADoDAAsHbCfZhmfJ%26msv%3D8.0.0%26brand%3DApple%26imei%3DD8435374E7B56D16F87BAF722CBDC7C6F1A05670%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad2G%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DAABEDA8D-647B-4AB6-B5A4-3465E80831D2"},{"key":"shuqicjcsbody4","val":"_public=skinId%3D999%26idfa%3DAABEDA8D-647B-4AB6-B5A4-3465E80831D2%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26umidtoken%3DYM1UHxBfADoDAAsHbCfZhmfJ%26user_id%3D2129514214%26sn%3D08C1FB5824FA51F45FF056F81A31426CCCFC5553%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3DD8435374E7B56D16F87BAF722CBDC7C6F1A05670%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPad2G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYM1UHxBfADoDAAsHbCfZhmfJ%26utype%3Dpre_vip%26sdk%3D13.1.1&deliveryId=711&key=sq_app_ad&miniWua=HHnB_r44Xj2SEt3uJDDR/DkDwPHOccmHyDZPNDyHC8bTiEfM%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=703&sign=F67E534DBF6A1BF984B320D62A0CAF4D&timestamp=1624092230&userId=2129514214&user_id=2129514214&wua=HIVW_1pVwVWjVjbNlwNm1EG1htD18gs4whNSfyOHgQdN0KkdUwCvp86HwLMqSbWp7nbWL17igpDg9/V6xbkK5HHfZmOKcZuK6fmI9o9f52hOR%2BEwXinc%2BDrn05WnVMzW4C76nY4bTa46wOc6PWPAMahsCaD0dor3D%2BbRjTQ6R9kR7rdWLpNQDzzC0qAczg6QgtYQNF52s%2Bssqy21gBHYdx9ZphGYAP7yPQYTkSJqEz%2BHjYlw%3D"},{"key":"shuqicjbody4","val":"wua=HIVW_Rb8xZ0QibscV7ns1VEYJD%2BTA2GYSdQAlXyWCvbvi7Gx2h3OrTnO7XDgaGkYRWyWqKMqiQQP8ztZU%2BrmOW53VFrT0mTsF1YujE2atVHSuO1Jjdkt0mjg3sGQ6HBF9JHl2tfF8xvF4UobqqJt8%2FSAirF%2BPTWgXB2LJFpz7%2Ba4U3J%2FFoyn3zGH1GpJD%2FlUGznTagNa8odQFzO94hhUS3BbpHxazZP3wWofO7wAF4xJuGHo%3D&ua=&userId=2129514214&umidtoken=YM1UHxBfADoDAAsHbCfZhmfJ&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&asac=2A20C07RJ9F51AOEFSNHDR&timestamp=1624092235&activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&sqSv=1.0&sign=d541ad9a24a88bee66dbe376ca0a4798&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.1.1%26utdid%3DYM1UHxBfADoDAAsHbCfZhmfJ%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2129514214%26sn%3D08C1FB5824FA51F45FF056F81A31426CCCFC5553%26umidtoken%3DYM1UHxBfADoDAAsHbCfZhmfJ%26msv%3D8.0.0%26brand%3DApple%26imei%3DD8435374E7B56D16F87BAF722CBDC7C6F1A05670%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad2G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DAABEDA8D-647B-4AB6-B5A4-3465E80831D2"},{"key":"shuqijsspbody4","val":""},{"key":"shuqijsydurl4","val":""},{"key":"shuqijsydbody4","val":""},{"key":"shuqijsqdbody4","val":""},{"key":"shuqijsqdspyurl4","val":""},{"key":"shuqijsqdspbody4","val":""},{"key":"shuqijsrwbody4","val":""},{"key":"shuqijsfxbody4","val":""},{"key":"shuqijsbookurl4","val":""},{"key":"shuqijsbookbody4","val":""},{"key":"shuqijssprwurl4","val":""},{"key":"shuqiuserurl5","val":"https://ocean.shuqireader.com/api/jaccount/accountapi/v1/sapi/account/getBindinfo?userId=2129065377&sqSv=1.0&timestamp=1624092313&sign=0f2c16a82666b0fe2c945ad7c817b795&key=sq_h5_gateway"},{"key":"shuqisyurl5","val":"https://render.shuqireader.com/load/resource?sdk=13.4&utdid=YM1UHxBfADoDAAsHbCfZhmfJ&ustatus=0&first_placeid=111111&net_env=3g&placeid=111111&user_id=2129065377&sn=A1B569D6C5F66C3EFCBC695F00102AAAA0D987E0&umidtoken=YM1UHxBfADoDAAsHbCfZhmfJ&msv=8.0.0&brand=Apple&imei=3165EB8ADD46D505DFD4A6DC28891825E365E1E9&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=iOS&ver=210301&mod=UnknowniPad&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=74E2E0D4-623B-4FAE-A5FD-2F5645D9461F"},{"key":"shuqisybody5","val":"appVer=4.3.6.0&imei=3165EB8ADD46D505DFD4A6DC28891825E365E1E9&isNewUser=1&params=%7B%22resources%22%3A%7B%22ShuqiVipEntry%22%3A%7B%7D%2C%22personalCardConfig%22%3A%7B%7D%7D%7D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=88f44305d0fc00f069d2c2232ed0375a&sn=A1B569D6C5F66C3EFCBC695F00102AAAA0D987E0&soft_id=21&timestamp=1624092260&user_id=2129065377&ver=210301"},{"key":"shuqispbody5","val":"_public=skinId%3D999%26idfa%3D74E2E0D4-623B-4FAE-A5FD-2F5645D9461F%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26umidtoken%3DYM1UHxBfADoDAAsHbCfZhmfJ%26user_id%3D2129065377%26sn%3DA1B569D6C5F66C3EFCBC695F00102AAAA0D987E0%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D3165EB8ADD46D505DFD4A6DC28891825E365E1E9%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYM1UHxBfADoDAAsHbCfZhmfJ%26utype%3Dpre_vip%26sdk%3D13.4&deliveryId=525&key=sq_app_ad&miniWua=HHnB_DzwrJB%2BXlWRSeRkNJOLZddTc7uWUk0vFAeK/HiOzGgQ%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=626&sign=BD9144DE760C900B2F6813685ABEC151&timestamp=1624092278&userId=2129065377&user_id=2129065377&wua=HIVW_30YAbnxpdbmgdw6E54F2A4EHezRSYhd/0CpyFjDn8%2BgNKXxcqapFzfPSEKQeKTBnTezcNupJY%2BAHx8ZnATqbXHM0SVlWGxxGl/nubl5oO6M%2BrCPQ/TCB%2B30XW41zMpMBAloWkDorFVCgUmWUPD9mLEBn0JmEWDoXxrbpEmIfUEo3hWz8/9ScOoNRWC46tkP/7qUuZsFpgYl7xxjHJ2FQiFNUycUoX0yCjEL0a4B9Pbw%3D"},{"key":"shuqiscbody5","val":""},{"key":"shuqiydbody5","val":""},{"key":"shuqiqdbody5","val":"clientTimestamp=1624092270&position=501&userId=2129065377&signInType=1&wua=HIVW_ZgHju8ppVxxb8S%2FB%2BAI6rrTx0UaETLCi3SHzfWuWteIyS%2BIKHiR7xmjL%2B9V3KpLu%2Bi7LkpLOe1qBKY4vsdAneYsPJeu4aGlbuLQKzYQR9Fxiysv6aVSaNdx7EvCFEwfqdcwYZSiI40AoLJSfJxqJtg5DO7H8a8AwRhMbeoHSZOhKIByt%2BXoWmqhrkRB%2Bg5LLYRKclI5M5lSNTuzCxCrce2I1Q2ttKYniaFgpEz4k%2Bks%3D&ua=&miniWua=HHnB_hRc%2F5cMJ%2FrqrM9Qg%2FHXbLvIdntQM%2B%2FREnlP9gO1QAr0%3D&umidtoken=YM1UHxBfADoDAAsHbCfZhmfJ&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&sign=e6b88b56aa74d04d10fe678493f3cc0b&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.4%26utdid%3DYM1UHxBfADoDAAsHbCfZhmfJ%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2129065377%26sn%3DA1B569D6C5F66C3EFCBC695F00102AAAA0D987E0%26umidtoken%3DYM1UHxBfADoDAAsHbCfZhmfJ%26msv%3D8.0.0%26brand%3DApple%26imei%3D3165EB8ADD46D505DFD4A6DC28891825E365E1E9%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D74E2E0D4-623B-4FAE-A5FD-2F5645D9461F"},{"key":"shuqirwbody5","val":"serviceWorkerOn=1&stopPullRefresh=1&from=ShuqiTab&upf=20368&sdk=13.4&utdid=YM1UHxBfADoDAAsHbCfZhmfJ&ustatus=0&first_placeid=111111&net_env=3g&placeid=111111&user_id=2129065377&sn=A1B569D6C5F66C3EFCBC695F00102AAAA0D987E0&umidtoken=YM1UHxBfADoDAAsHbCfZhmfJ&msv=8.0.0&brand=Apple&imei=3165EB8ADD46D505DFD4A6DC28891825E365E1E9&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=1&ver=210301&mod=UnknowniPad&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=74E2E0D4-623B-4FAE-A5FD-2F5645D9461F&params=%7B%22resources%22%3A%7B%22ShuqiBsDailyTask%22%3A%7B%7D%7D%7D&userId=2129065377&placeId=111111&timestamp=1624092284&sqSv=1.0&sign=e987343d87b6e39ce7ea22dd68b51fda&key=sq_h5_gateway&_public="},{"key":"shuqifxbody5","val":""},{"key":"shuqisprwurl5","val":"https://ocean.shuqireader.com/api/ad/adserver/v1/api/getAdInfo?appVer=4.3.6.0&placeId=111111&platform=iOS&requestSrc=h5&resourceId=626&timestamp=1624092314&user_id=2129065377&sqSv=1.0&sign=eb18e27a8dc407292b9d00e221249ba5&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.4%26utdid%3DYM1UHxBfADoDAAsHbCfZhmfJ%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2129065377%26sn%3DA1B569D6C5F66C3EFCBC695F00102AAAA0D987E0%26umidtoken%3DYM1UHxBfADoDAAsHbCfZhmfJ%26msv%3D8.0.0%26brand%3DApple%26imei%3D3165EB8ADD46D505DFD4A6DC28891825E365E1E9%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D74E2E0D4-623B-4FAE-A5FD-2F5645D9461F"},{"key":"shuqijlbody5","val":"requestSrc=h5&userId=2129065377&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624092284&sqSv=1.0&sign=256fc8551ea2b0765e3977e8fcc87f8f&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.4%26utdid%3DYM1UHxBfADoDAAsHbCfZhmfJ%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2129065377%26sn%3DA1B569D6C5F66C3EFCBC695F00102AAAA0D987E0%26umidtoken%3DYM1UHxBfADoDAAsHbCfZhmfJ%26msv%3D8.0.0%26brand%3DApple%26imei%3D3165EB8ADD46D505DFD4A6DC28891825E365E1E9%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D74E2E0D4-623B-4FAE-A5FD-2F5645D9461F"},{"key":"shuqisqjlbody5","val":"src=&userId=2129065377&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624092277&sqSv=1.0&sign=e43efbdc6c261d4ea9f9c091451801ad&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.4%26utdid%3DYM1UHxBfADoDAAsHbCfZhmfJ%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2129065377%26sn%3DA1B569D6C5F66C3EFCBC695F00102AAAA0D987E0%26umidtoken%3DYM1UHxBfADoDAAsHbCfZhmfJ%26msv%3D8.0.0%26brand%3DApple%26imei%3D3165EB8ADD46D505DFD4A6DC28891825E365E1E9%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D74E2E0D4-623B-4FAE-A5FD-2F5645D9461F"},{"key":"shuqicjyurl5","val":"https://ocean.shuqireader.com/api/activity/activity/v1/lottery/info?timestamp=1624092315&userId=2129065377&activityId=311&sqSv=1.0&sign=a2228329706ea609951c42cbb78293f9&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.4%26utdid%3DYM1UHxBfADoDAAsHbCfZhmfJ%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2129065377%26sn%3DA1B569D6C5F66C3EFCBC695F00102AAAA0D987E0%26umidtoken%3DYM1UHxBfADoDAAsHbCfZhmfJ%26msv%3D8.0.0%26brand%3DApple%26imei%3D3165EB8ADD46D505DFD4A6DC28891825E365E1E9%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D74E2E0D4-623B-4FAE-A5FD-2F5645D9461F"},{"key":"shuqicjcsbody5","val":"_public=skinId%3D999%26idfa%3D74E2E0D4-623B-4FAE-A5FD-2F5645D9461F%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26umidtoken%3DYM1UHxBfADoDAAsHbCfZhmfJ%26user_id%3D2129065377%26sn%3DA1B569D6C5F66C3EFCBC695F00102AAAA0D987E0%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D3165EB8ADD46D505DFD4A6DC28891825E365E1E9%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYM1UHxBfADoDAAsHbCfZhmfJ%26utype%3Dpre_vip%26sdk%3D13.4&deliveryId=711&key=sq_app_ad&miniWua=HHnB_IiVdMHMrjSOqvaJKteoQl8bmRZsGDbrl1K/jx5nlxFU%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=703&sign=C28CF9A56EE9E0B60938586CA39C6326&timestamp=1624092289&userId=2129065377&user_id=2129065377&wua=HIVW_xW5pdJjIXWVWxptY3WKS3SP7lHyU4hgQ6ACYEuBc6Tl/kQaa3DccI7Vb3ML63Gp5EwDZdHDtq9rMQN%2BDp9QI6r6E1X/eaBaaaHCUsZS5GyIfkxA/BWqpKk2XTFokU9dvFs8SZUjNHgvJAjFqfa1Wn0PvmNSTfEts7P7572Ql9UZYvmJXWLGmzFv591U5PwoynMUZkYkRsU7qLqr2RUDMJAvewheTLajjkRiq0e2aJQI%3D"},{"key":"shuqicjbody5","val":"wua=HIVW_EsxxQ0FaAAaScCOr2MP0iz5pFY9YQFz5I8dzQrzei9Pp7K3WOfa7Qp27mGVwb4YL4dEa0h7yXO%2FL6s6bK5XABNyGD73S%2BeZjtLi%2FlKIpXhuzADMsJHXLW7eVyiMJQV9heWBsf26zHQ1R%2FdxYjNbgyDWWaxcAEuOt0cpxXjsL0zx1L%2FJTMLVCFUYlFqLqohkDLdaCxEQ9AcIl7YsQEk2sx%2FvyCR0lm1pknXHpFwlTdE8%3D&ua=&userId=2129065377&umidtoken=YM1UHxBfADoDAAsHbCfZhmfJ&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&asac=2A20C07RJ9F51AOEFSNHDR&timestamp=1624092295&activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&sqSv=1.0&sign=89529ee9fb11db1fea9acd2e41746596&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.4%26utdid%3DYM1UHxBfADoDAAsHbCfZhmfJ%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2129065377%26sn%3DA1B569D6C5F66C3EFCBC695F00102AAAA0D987E0%26umidtoken%3DYM1UHxBfADoDAAsHbCfZhmfJ%26msv%3D8.0.0%26brand%3DApple%26imei%3D3165EB8ADD46D505DFD4A6DC28891825E365E1E9%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D74E2E0D4-623B-4FAE-A5FD-2F5645D9461F"},{"key":"shuqijsspbody5","val":""},{"key":"shuqijsydurl5","val":""},{"key":"shuqijsydbody5","val":""},{"key":"shuqijsqdbody5","val":""},{"key":"shuqijsqdspyurl5","val":""},{"key":"shuqijsqdspbody5","val":""},{"key":"shuqijsrwbody5","val":""},{"key":"shuqijsfxbody5","val":""},{"key":"shuqijsbookurl5","val":""},{"key":"shuqijsbookbody5","val":""},{"key":"shuqijssprwurl5","val":""},{"key":"shuqiuserurl6","val":"https://ocean.shuqireader.com/api/jaccount/accountapi/v1/sapi/account/getBindinfo?userId=2127720910&sqSv=1.0&timestamp=1624092382&sign=5f963bd28ad92ace5e27e1d9e771e7c2&key=sq_h5_gateway"},{"key":"shuqisyurl6","val":"https://render.shuqireader.com/load/resource?sdk=13.4.1&utdid=YM1UL5Mvl64DACofY3SbHDOK&ustatus=0&first_placeid=111111&net_env=wifi&placeid=111111&user_id=2127720910&sn=FE94A2CD91175DA02F0DF9A3EFC692C4DE98A110&umidtoken=YM1UL5Mvl64DACofY3SbHDOK&msv=8.0.0&brand=Apple&imei=D218DBA89CFCDECC6176D236A10CE251914B7E73&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=iOS&ver=210301&mod=UnknowniPad&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=18486CC1-8597-4A8D-9698-5218E294A580"},{"key":"shuqisybody6","val":"appVer=4.3.6.0&imei=D218DBA89CFCDECC6176D236A10CE251914B7E73&isNewUser=1&params=%7B%22resources%22%3A%7B%22ShuqiVipEntry%22%3A%7B%7D%2C%22personalCardConfig%22%3A%7B%7D%7D%7D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=8b2d0473cf65a9bbabbc3af1594af84a&sn=FE94A2CD91175DA02F0DF9A3EFC692C4DE98A110&soft_id=21&timestamp=1624092330&user_id=2127720910&ver=210301"},{"key":"shuqispbody6","val":"_public=skinId%3D999%26idfa%3D18486CC1-8597-4A8D-9698-5218E294A580%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26umidtoken%3DYM1UL5Mvl64DACofY3SbHDOK%26user_id%3D2127720910%26sn%3DFE94A2CD91175DA02F0DF9A3EFC692C4DE98A110%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3DD218DBA89CFCDECC6176D236A10CE251914B7E73%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYM1UL5Mvl64DACofY3SbHDOK%26utype%3Dpre_vip%26sdk%3D13.4.1&deliveryId=525&key=sq_app_ad&miniWua=HHnB_2zIe9CkmL0ZJNVZGRmO/tUa4ffFny1IHChb/LD0K%2B3w%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=626&sign=3E8AB0CFA0A0ECF51D890187B09890FB&timestamp=1624092351&userId=2127720910&user_id=2127720910&wua=HIVW_z1YsFj2vAepns9phGR112%2BLOfEjO0Pz0xe0eBVnLTyNUHF5W8ztrC/BIEmHqWDbhrudwWcL9i/i%2BdYnSHcb%2B/kfPCfYVXCU3TUi62u8CCq0BmAmmncDiNCGmQVDOOA9o380eZD/QLK4BK4vG/1F/69SQ2GLM/ahoQWOc7G3ZCK7q4KRR9d3IGK4358iVgor0tyY84tPdN5JGjqSkt6eKAw%3D%3D"},{"key":"shuqiscbody6","val":""},{"key":"shuqiydbody6","val":""},{"key":"shuqiqdbody6","val":"clientTimestamp=1624092343&position=501&userId=2127720910&signInType=1&wua=HIVW_23PqGv%2BNy63eiPndgYomwyj3oudRwFb%2FWLVy5O1u9vqXWLcUd9s5AhB7vGeubMkEwnp8U0ZVTeUs13IebR7dXus4EvOLNMMYqNFnNZvOfj3HrNVyEju5R05NLnjC66UmIsGi8otJLdNIJPkV%2B458KRf9fPWmL%2BUTm7WU7zpIfLAGySg9zALu130xZE9esDOOyg4ntCtFjOYQ5DFHNgeN9TL765N%2BovIkktfd6NQ1Jxs%3D&ua=&miniWua=HHnB_lDdS91Lqiq02aYLtEUXS9DoPyZCqCYkavf6N5Cl9L2k%3D&umidtoken=YM1UL5Mvl64DACofY3SbHDOK&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&sign=cbe7d4adfd2cf01d97db7f98dae382ca&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.4.1%26utdid%3DYM1UL5Mvl64DACofY3SbHDOK%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2127720910%26sn%3DFE94A2CD91175DA02F0DF9A3EFC692C4DE98A110%26umidtoken%3DYM1UL5Mvl64DACofY3SbHDOK%26msv%3D8.0.0%26brand%3DApple%26imei%3DD218DBA89CFCDECC6176D236A10CE251914B7E73%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D18486CC1-8597-4A8D-9698-5218E294A580"},{"key":"shuqirwbody6","val":"serviceWorkerOn=1&stopPullRefresh=1&from=ShuqiTab&upf=20368&sdk=13.4.1&utdid=YM1UL5Mvl64DACofY3SbHDOK&ustatus=0&first_placeid=111111&net_env=wifi&placeid=111111&user_id=2127720910&sn=FE94A2CD91175DA02F0DF9A3EFC692C4DE98A110&umidtoken=YM1UL5Mvl64DACofY3SbHDOK&msv=8.0.0&brand=Apple&imei=D218DBA89CFCDECC6176D236A10CE251914B7E73&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=1&ver=210301&mod=UnknowniPad&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=18486CC1-8597-4A8D-9698-5218E294A580&params=%7B%22resources%22%3A%7B%22ShuqiBsDailyTask%22%3A%7B%7D%7D%7D&userId=2127720910&placeId=111111&timestamp=1624092357&sqSv=1.0&sign=2d2507c6915facd920355a1f0e40cd78&key=sq_h5_gateway&_public="},{"key":"shuqifxbody6","val":""},{"key":"shuqisprwurl6","val":"https://ocean.shuqireader.com/api/ad/adserver/v1/api/getAdInfo?appVer=4.3.6.0&placeId=111111&platform=iOS&requestSrc=h5&resourceId=626&timestamp=1624092379&user_id=2127720910&sqSv=1.0&sign=604b9567a2f1c8c971f1e0d4751d4c22&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.4.1%26utdid%3DYM1UL5Mvl64DACofY3SbHDOK%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2127720910%26sn%3DFE94A2CD91175DA02F0DF9A3EFC692C4DE98A110%26umidtoken%3DYM1UL5Mvl64DACofY3SbHDOK%26msv%3D8.0.0%26brand%3DApple%26imei%3DD218DBA89CFCDECC6176D236A10CE251914B7E73%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D18486CC1-8597-4A8D-9698-5218E294A580"},{"key":"shuqijlbody6","val":"requestSrc=h5&userId=2127720910&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624092357&sqSv=1.0&sign=64032ae3dfe9888b0cb20850ea4e389a&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.4.1%26utdid%3DYM1UL5Mvl64DACofY3SbHDOK%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2127720910%26sn%3DFE94A2CD91175DA02F0DF9A3EFC692C4DE98A110%26umidtoken%3DYM1UL5Mvl64DACofY3SbHDOK%26msv%3D8.0.0%26brand%3DApple%26imei%3DD218DBA89CFCDECC6176D236A10CE251914B7E73%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D18486CC1-8597-4A8D-9698-5218E294A580"},{"key":"shuqisqjlbody6","val":"src=&userId=2127720910&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624092348&sqSv=1.0&sign=82f35b0eae42391da4ff1d5e9197613f&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.4.1%26utdid%3DYM1UL5Mvl64DACofY3SbHDOK%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2127720910%26sn%3DFE94A2CD91175DA02F0DF9A3EFC692C4DE98A110%26umidtoken%3DYM1UL5Mvl64DACofY3SbHDOK%26msv%3D8.0.0%26brand%3DApple%26imei%3DD218DBA89CFCDECC6176D236A10CE251914B7E73%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D18486CC1-8597-4A8D-9698-5218E294A580"},{"key":"shuqicjyurl6","val":"https://ocean.shuqireader.com/api/activity/activity/v1/lottery/info?timestamp=1624092383&userId=2127720910&activityId=311&sqSv=1.0&sign=f0154c6e50f78ba376cc305caaece978&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.4.1%26utdid%3DYM1UL5Mvl64DACofY3SbHDOK%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2127720910%26sn%3DFE94A2CD91175DA02F0DF9A3EFC692C4DE98A110%26umidtoken%3DYM1UL5Mvl64DACofY3SbHDOK%26msv%3D8.0.0%26brand%3DApple%26imei%3DD218DBA89CFCDECC6176D236A10CE251914B7E73%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D18486CC1-8597-4A8D-9698-5218E294A580"},{"key":"shuqicjcsbody6","val":"_public=skinId%3D999%26idfa%3D18486CC1-8597-4A8D-9698-5218E294A580%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26umidtoken%3DYM1UL5Mvl64DACofY3SbHDOK%26user_id%3D2127720910%26sn%3DFE94A2CD91175DA02F0DF9A3EFC692C4DE98A110%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3DD218DBA89CFCDECC6176D236A10CE251914B7E73%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYM1UL5Mvl64DACofY3SbHDOK%26utype%3Dpre_vip%26sdk%3D13.4.1&deliveryId=711&key=sq_app_ad&miniWua=HHnB_aUO3xzLblgjsONmCloM0yYlAwjCP6jtQFEQffVYXXUs%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=703&sign=EADE2C58C17DE5C1FEFC90CE3277DCC2&timestamp=1624092362&userId=2127720910&user_id=2127720910&wua=HIVW_lyG/uZSX6awrJEesxYQy25a8dlzcPHAL04xie77QwiEZ3L6a5gYMxxIMrzwAHlawBdUvZE2LHCNMSLy0jrcrE2NOMGWKx9ZovyPN8SOhV2n0vEOFVwk19MNDVIam0DX2hzmS9bnFDHOQgcNztAxshY21GFwsqn/SH%2Bo1HO%2Br2GEAI8jrB%2Bg6nom6VvHH8WpNJxN5UdgPXFpkKRugmDTA%2B9r37MAWwflynElyaO3EjHs%3D"},{"key":"shuqicjbody6","val":"wua=HIVW_UHAnBNhBrjUrEGuix9cEFOXDDb6AuzBE3w2WQGoTmYDMUJFUIvFJagNXpG0zcX%2BNR9vDKQcRWmxRE%2B639AE%2Fn%2B9z9F1DflO5soevbuCZ%2FRIvuUr0L5IggrxI1w1iA%2FMoZZSj5HrB9CLHZN4qWwu%2FM4Fi1S5iaBW1ObH72vmDe638ZRjIiHLSotibXkCA8R5EAttw02BoLgQO2JjwC5iJmoxyvMDrlAhyaSgBMyDz0Ss%3D&ua=&userId=2127720910&umidtoken=YM1UL5Mvl64DACofY3SbHDOK&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&asac=2A20C07RJ9F51AOEFSNHDR&timestamp=1624092368&activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&sqSv=1.0&sign=fb14d55646625b2f8108ba5589f92c94&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.4.1%26utdid%3DYM1UL5Mvl64DACofY3SbHDOK%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2127720910%26sn%3DFE94A2CD91175DA02F0DF9A3EFC692C4DE98A110%26umidtoken%3DYM1UL5Mvl64DACofY3SbHDOK%26msv%3D8.0.0%26brand%3DApple%26imei%3DD218DBA89CFCDECC6176D236A10CE251914B7E73%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D18486CC1-8597-4A8D-9698-5218E294A580"},{"key":"shuqijsspbody6","val":""},{"key":"shuqijsydurl6","val":""},{"key":"shuqijsydbody6","val":""},{"key":"shuqijsqdbody6","val":""},{"key":"shuqijsqdspyurl6","val":""},{"key":"shuqijsqdspbody6","val":""},{"key":"shuqijsrwbody6","val":""},{"key":"shuqijsfxbody6","val":""},{"key":"shuqijsbookurl6","val":""},{"key":"shuqijsbookbody6","val":""},{"key":"shuqijssprwurl6","val":""},{"key":"shuqiuserurl7","val":"https://ocean.shuqireader.com/api/jaccount/accountapi/v1/sapi/account/getBindinfo?userId=2128516599&sqSv=1.0&timestamp=1624092441&sign=f1584add4d5aa34a3fed7ba891e67104&key=sq_h5_gateway"},{"key":"shuqisyurl7","val":"https://render.shuqireader.com/load/resource?sdk=13.1&utdid=YM1UL5Mvl64DACofY3SbHDOK&ustatus=0&first_placeid=111111&net_env=3g&placeid=111111&user_id=2128516599&sn=B3482CE9D0FC169126E138D218251A54477B84E5&umidtoken=YM1UL5Mvl64DACofY3SbHDOK&msv=8.0.0&brand=Apple&imei=840B0BE12CD01F43999CEBF997BDADC2E6B4D51B&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=iOS&ver=210301&mod=UnknowniPad&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=49B9C9B6-6703-4A7B-866D-AA218C3B175B"},{"key":"shuqisybody7","val":"appVer=4.3.6.0&imei=840B0BE12CD01F43999CEBF997BDADC2E6B4D51B&isNewUser=1&params=%7B%22resources%22%3A%7B%22ShuqiVipEntry%22%3A%7B%7D%2C%22personalCardConfig%22%3A%7B%7D%7D%7D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=a9e498b2625ec663e8ca4b165c6c3f7e&sn=B3482CE9D0FC169126E138D218251A54477B84E5&soft_id=21&timestamp=1624092398&user_id=2128516599&ver=210301"},{"key":"shuqispbody7","val":"_public=skinId%3D999%26idfa%3D49B9C9B6-6703-4A7B-866D-AA218C3B175B%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26umidtoken%3DYM1UL5Mvl64DACofY3SbHDOK%26user_id%3D2128516599%26sn%3DB3482CE9D0FC169126E138D218251A54477B84E5%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D840B0BE12CD01F43999CEBF997BDADC2E6B4D51B%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYM1UL5Mvl64DACofY3SbHDOK%26utype%3Dpre_vip%26sdk%3D13.1&deliveryId=525&key=sq_app_ad&miniWua=HHnB_rINzDQAd3H3d66Kyhp5akIWdjAdt0EJEkncUvK%2BStwQ%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=626&sign=0E0285427A8C0E4723F4791804217B2D&timestamp=1624092420&userId=2128516599&user_id=2128516599&wua=HIVW_b5Vxb2CSV5rK2jdPbeTOWMjCppxqllV94qTrT7NWVBEFULZcmNL7zK6fE/VSA2zKj6V8bWzFFF00jmQfMalTfaNv0SGB2EuqAGU0DrwDKHOJVt043sKyurkD8GYpEwLXevEquUrN9g8Pp%2BqPWTxvZf8EX8zrrk1MwLEWlovoAaqo3cuG1ribo3n3MoF/bDynZo0qHEerDPNunJE8E/lRoXoR29Obtwyg%2Bpkain6X708%3D"},{"key":"shuqiscbody7","val":""},{"key":"shuqiydbody7","val":""},{"key":"shuqiqdbody7","val":"clientTimestamp=1624092411&position=501&userId=2128516599&signInType=1&wua=HIVW_MYt4pnRI4Gjwklm0ZdoynwSzzSvvzod%2B%2FJWFHuKoPPmjQ%2B%2BH26GgdHLM4P5oAn5dPrdWWN7IPAYivzydRat4EWSITqI1%2FMb0rzO8S3Nu1BIt0oVXnfGC44TDe0nguN%2BxIaCmjVgelGaC6mSP1ufEcwYh8Uhi%2FiYa8DVQLchr2VTSVd526DxN8WuIC7T3SFydzF3%2BTyMSUwLEGC%2FhRYnn8Q%3D%3D&ua=&miniWua=HHnB_yMcP%2BOaHTpeODT8qeyHeOILvk0Ll1c2kuv5QmBp%2Fmjs%3D&umidtoken=YM1UL5Mvl64DACofY3SbHDOK&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&sign=5c18b8bdcc2fd0a36938368e145f41c9&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.1%26utdid%3DYM1UL5Mvl64DACofY3SbHDOK%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2128516599%26sn%3DB3482CE9D0FC169126E138D218251A54477B84E5%26umidtoken%3DYM1UL5Mvl64DACofY3SbHDOK%26msv%3D8.0.0%26brand%3DApple%26imei%3D840B0BE12CD01F43999CEBF997BDADC2E6B4D51B%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D49B9C9B6-6703-4A7B-866D-AA218C3B175B"},{"key":"shuqirwbody7","val":"serviceWorkerOn=1&stopPullRefresh=1&from=ShuqiTab&upf=20368&sdk=13.1&utdid=YM1UL5Mvl64DACofY3SbHDOK&ustatus=0&first_placeid=111111&net_env=3g&placeid=111111&user_id=2128516599&sn=B3482CE9D0FC169126E138D218251A54477B84E5&umidtoken=YM1UL5Mvl64DACofY3SbHDOK&msv=8.0.0&brand=Apple&imei=840B0BE12CD01F43999CEBF997BDADC2E6B4D51B&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&session=&skinColor=23B383&platform=1&ver=210301&mod=UnknowniPad&statusBarHeight=44.000000&skinVersion=1&wh=1242x2688&soft_id=21&utype=pre_vip&skinId=999&idfa=49B9C9B6-6703-4A7B-866D-AA218C3B175B&params=%7B%22resources%22%3A%7B%22ShuqiBsDailyTask%22%3A%7B%7D%7D%7D&userId=2128516599&placeId=111111&timestamp=1624092423&sqSv=1.0&sign=5bf6912a4696c559bc4a9ad391cbe15a&key=sq_h5_gateway&_public="},{"key":"shuqifxbody7","val":""},{"key":"shuqisprwurl7","val":"https://ocean.shuqireader.com/api/ad/adserver/v1/api/getAdInfo?appVer=4.3.6.0&placeId=111111&platform=iOS&requestSrc=h5&resourceId=626&timestamp=1624092441&user_id=2128516599&sqSv=1.0&sign=8c6ba5578827cd9b541ad9da982745bd&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.1%26utdid%3DYM1UL5Mvl64DACofY3SbHDOK%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2128516599%26sn%3DB3482CE9D0FC169126E138D218251A54477B84E5%26umidtoken%3DYM1UL5Mvl64DACofY3SbHDOK%26msv%3D8.0.0%26brand%3DApple%26imei%3D840B0BE12CD01F43999CEBF997BDADC2E6B4D51B%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D49B9C9B6-6703-4A7B-866D-AA218C3B175B"},{"key":"shuqijlbody7","val":"requestSrc=h5&userId=2128516599&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624092423&sqSv=1.0&sign=02a194f0ffba103ea1da06cd75e6d332&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.1%26utdid%3DYM1UL5Mvl64DACofY3SbHDOK%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2128516599%26sn%3DB3482CE9D0FC169126E138D218251A54477B84E5%26umidtoken%3DYM1UL5Mvl64DACofY3SbHDOK%26msv%3D8.0.0%26brand%3DApple%26imei%3D840B0BE12CD01F43999CEBF997BDADC2E6B4D51B%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D49B9C9B6-6703-4A7B-866D-AA218C3B175B"},{"key":"shuqisqjlbody7","val":"src=&userId=2128516599&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624092416&sqSv=1.0&sign=9e8df1b13e0af6eacb9fdc496f6b734f&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.1%26utdid%3DYM1UL5Mvl64DACofY3SbHDOK%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2128516599%26sn%3DB3482CE9D0FC169126E138D218251A54477B84E5%26umidtoken%3DYM1UL5Mvl64DACofY3SbHDOK%26msv%3D8.0.0%26brand%3DApple%26imei%3D840B0BE12CD01F43999CEBF997BDADC2E6B4D51B%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D49B9C9B6-6703-4A7B-866D-AA218C3B175B"},{"key":"shuqicjyurl7","val":"https://ocean.shuqireader.com/api/activity/activity/v1/lottery/info?timestamp=1624092443&userId=2128516599&activityId=311&sqSv=1.0&sign=5e725c5894c106f03a75ef36a3d1e870&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.1%26utdid%3DYM1UL5Mvl64DACofY3SbHDOK%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2128516599%26sn%3DB3482CE9D0FC169126E138D218251A54477B84E5%26umidtoken%3DYM1UL5Mvl64DACofY3SbHDOK%26msv%3D8.0.0%26brand%3DApple%26imei%3D840B0BE12CD01F43999CEBF997BDADC2E6B4D51B%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D49B9C9B6-6703-4A7B-866D-AA218C3B175B"},{"key":"shuqicjcsbody7","val":"_public=skinId%3D999%26idfa%3D49B9C9B6-6703-4A7B-866D-AA218C3B175B%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26umidtoken%3DYM1UL5Mvl64DACofY3SbHDOK%26user_id%3D2128516599%26sn%3DB3482CE9D0FC169126E138D218251A54477B84E5%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D840B0BE12CD01F43999CEBF997BDADC2E6B4D51B%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYM1UL5Mvl64DACofY3SbHDOK%26utype%3Dpre_vip%26sdk%3D13.1&deliveryId=711&key=sq_app_ad&miniWua=HHnB_MF2VlVQvNvjFsSf%2B0D8redB8hDLUQNfX5rMJsiHdu%2Bs%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=703&sign=0A1872E2B62CB8585069B5C2FC536049&timestamp=1624092428&userId=2128516599&user_id=2128516599&wua=HIVW_vzVNLUQmNt5LvoJZM%2BorgktyH1VMEMYfG%2BPcd4bnKb8m2Jo2vGyxOYfhDl2smG4OiojyiLVHoW9t/9H3UQpigK9h6N%2BjaRdJan4XsHz8%2BUngdHLafK134PBLsTElq%2B2sy88/od2DCPKe3HiZT0c/Hto4Hq8IGsYzqm0TLBFw%2BMJByEdTxEpXx/%2BIOyo%2BO0ts6YF1xQZFMUh/GWT3vysG9HHMh%2BlY7t58hf1Jembl0bM%3D"},{"key":"shuqicjbody7","val":"wua=HIVW_2J9zfT%2FLx46k9VdyjP1T%2BTZNIJsFdZH38GD7rP5gAAg0aS1Qv1U1yUIPu5Pr4KtSitdRZE7Z%2BZq5ztdk9ofDQfGvSAF7DBIhMJZRGuJjq1Sh8ASAJCGoxmLx6tZIEM7C5wByeNfVC%2FqfPL%2FXUxNU8ggwBK4CmLzAdY%2F7Fw0xHbxPJ1g5pthMLv28So5wTtQYAI9MfZq0lQu3JxRFRhi0dYc93HUZKV6GNEEUlJRK3%2FU%3D&ua=&userId=2128516599&umidtoken=YM1UL5Mvl64DACofY3SbHDOK&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&asac=2A20C07RJ9F51AOEFSNHDR&timestamp=1624092431&activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&sqSv=1.0&sign=b73c7e90a64096f8e68f0f9467c6fb57&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.1%26utdid%3DYM1UL5Mvl64DACofY3SbHDOK%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2128516599%26sn%3DB3482CE9D0FC169126E138D218251A54477B84E5%26umidtoken%3DYM1UL5Mvl64DACofY3SbHDOK%26msv%3D8.0.0%26brand%3DApple%26imei%3D840B0BE12CD01F43999CEBF997BDADC2E6B4D51B%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D49B9C9B6-6703-4A7B-866D-AA218C3B175B"},{"key":"shuqijsspbody7","val":""},{"key":"shuqijsydurl7","val":""},{"key":"shuqijsydbody7","val":""},{"key":"shuqijsqdbody7","val":""},{"key":"shuqijsqdspyurl7","val":""},{"key":"shuqijsqdspbody7","val":""},{"key":"shuqijsrwbody7","val":""},{"key":"shuqijsfxbody7","val":""},{"key":"shuqijsbookurl7","val":""},{"key":"shuqijsbookbody7","val":""},{"key":"shuqijssprwurl7","val":""},{"key":"shuqiuserurl8","val":"https://ocean.shuqireader.com/api/jaccount/accountapi/v1/sapi/account/getBindinfo?userId=2127968549&sqSv=1.0&timestamp=1624092507&sign=176ef39629b595a129d43cdcfd81c664&key=sq_h5_gateway"},{"key":"shuqisyurl8","val":"https://render.shuqireader.com/load/resource?sdk=13.1.1&utdid=YM1UL5Mvl64DACofY3SbHDOK&ustatus=0&first_placeid=111111&net_env=3g&placeid=111111&user_id=2127968549&sn=BF4C9A59B4A42C9EB35C139A6BD39D413BA8E792&umidtoken=YM1UL5Mvl64DACofY3SbHDOK&msv=8.0.0&brand=Apple&imei=426F3023E84E9D50B41EE52EBA14A49F1B5E3289&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=iOS&ver=210301&mod=iPhoneSE&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=EA6ADD13-9CE8-4E32-B389-C0ACD50A7452"},{"key":"shuqisybody8","val":"appVer=4.3.6.0&imei=426F3023E84E9D50B41EE52EBA14A49F1B5E3289&isNewUser=1&params=%7B%22resources%22%3A%7B%22ShuqiVipEntry%22%3A%7B%7D%2C%22personalCardConfig%22%3A%7B%7D%7D%7D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=0f1df521666b9f4c08dd74b28f25100f&sn=BF4C9A59B4A42C9EB35C139A6BD39D413BA8E792&soft_id=21&timestamp=1624092459&user_id=2127968549&ver=210301"},{"key":"shuqispbody8","val":"_public=skinId%3D999%26idfa%3DEA6ADD13-9CE8-4E32-B389-C0ACD50A7452%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26umidtoken%3DYM1UL5Mvl64DACofY3SbHDOK%26user_id%3D2127968549%26sn%3DBF4C9A59B4A42C9EB35C139A6BD39D413BA8E792%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D426F3023E84E9D50B41EE52EBA14A49F1B5E3289%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhoneSE%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYM1UL5Mvl64DACofY3SbHDOK%26utype%3Dpre_vip%26sdk%3D13.1.1&deliveryId=525&key=sq_app_ad&miniWua=HHnB_ACu3Z0MOmLNAK2JtO6HZO2d12ZrqlH2IfmXablNAnbM%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=626&sign=D8B3746B5F5DFE30D80611BAD2F2458D&timestamp=1624092473&userId=2127968549&user_id=2127968549&wua=HIVW_eUZuQ%2BUYcE5NyVZGFZV/%2BHNUHxuhOAcWi0ZmehWuQqd8JE%2BXs60ZpZheJWJ9D0iRl3ouFeI9czmvdsysqG5ZB%2B9q5oP8/p%2BwscnZBJDaqTVNxvTG1gCY6WUtjVCHBRVVsWa5vtuvfEBTJLgDQgC33LOjFv65O3lyCQnaPIX62vTHVoRCuXaGDu830s56bfTacOoj2fqiemuETuUvtlufC%2BVf3uI1qLmLwrKwVfMFugU%3D"},{"key":"shuqiscbody8","val":""},{"key":"shuqiydbody8","val":""},{"key":"shuqiqdbody8","val":"clientTimestamp=1624092481&position=501&userId=2127968549&signInType=1&wua=HIVW_mevGi%2B9njAf%2F%2BipyUrtSA3ZY4mlaw8%2FVxQSUfmXbawfPUGu0tX2PRJHggORh6Bs8YU7KsbQVjlPDDmiNU0kDuKdxIb%2BzOYANLBLEidCrkKjoNsDbXWHei1yEX7aGZMcGh2ctbRMWFFy0S0RwaEA3F40SNTgiLiYyZxtuAiRKgdBaMD%2BYMpqYanyvI%2BtPAKAFGBMQ%2BdRcMI7J2DhOsDLyzOH%2Bo1JpeaNwthYipUIEgxA%3D&ua=&miniWua=HHnB_7o3yUFwd4omW3xBQwwWQ4JbKCFJ3Iuzhaet8FPSmO5k%3D&umidtoken=YM1UL5Mvl64DACofY3SbHDOK&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&sign=98e7db0b2518c61de2202d739a42e082&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.1.1%26utdid%3DYM1UL5Mvl64DACofY3SbHDOK%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2127968549%26sn%3DBF4C9A59B4A42C9EB35C139A6BD39D413BA8E792%26umidtoken%3DYM1UL5Mvl64DACofY3SbHDOK%26msv%3D8.0.0%26brand%3DApple%26imei%3D426F3023E84E9D50B41EE52EBA14A49F1B5E3289%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhoneSE%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DEA6ADD13-9CE8-4E32-B389-C0ACD50A7452"},{"key":"shuqirwbody8","val":"serviceWorkerOn=1&stopPullRefresh=1&from=ShuqiTab&upf=20368&sdk=13.1.1&utdid=YM1UL5Mvl64DACofY3SbHDOK&ustatus=0&first_placeid=111111&net_env=3g&placeid=111111&user_id=2127968549&sn=BF4C9A59B4A42C9EB35C139A6BD39D413BA8E792&umidtoken=YM1UL5Mvl64DACofY3SbHDOK&msv=8.0.0&brand=Apple&imei=426F3023E84E9D50B41EE52EBA14A49F1B5E3289&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=1&ver=210301&mod=iPhoneSE&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=EA6ADD13-9CE8-4E32-B389-C0ACD50A7452&params=%7B%22resources%22%3A%7B%22ShuqiBsDailyTask%22%3A%7B%7D%7D%7D&userId=2127968549&placeId=111111&timestamp=1624092487&sqSv=1.0&sign=3bec171f9429142b2e91b1a1b82bde9d&key=sq_h5_gateway&_public="},{"key":"shuqifxbody8","val":""},{"key":"shuqisprwurl8","val":"https://ocean.shuqireader.com/api/ad/adserver/v1/api/getAdInfo?appVer=4.3.6.0&placeId=111111&platform=iOS&requestSrc=h5&resourceId=626&timestamp=1624092508&user_id=2127968549&sqSv=1.0&sign=6cdb03f674fa9257177d1e8782b6f996&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.1.1%26utdid%3DYM1UL5Mvl64DACofY3SbHDOK%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2127968549%26sn%3DBF4C9A59B4A42C9EB35C139A6BD39D413BA8E792%26umidtoken%3DYM1UL5Mvl64DACofY3SbHDOK%26msv%3D8.0.0%26brand%3DApple%26imei%3D426F3023E84E9D50B41EE52EBA14A49F1B5E3289%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhoneSE%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DEA6ADD13-9CE8-4E32-B389-C0ACD50A7452"},{"key":"shuqijlbody8","val":"requestSrc=h5&userId=2127968549&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624092487&sqSv=1.0&sign=c6292295544b3f7b74a3c6ec36eaca0f&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.1.1%26utdid%3DYM1UL5Mvl64DACofY3SbHDOK%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2127968549%26sn%3DBF4C9A59B4A42C9EB35C139A6BD39D413BA8E792%26umidtoken%3DYM1UL5Mvl64DACofY3SbHDOK%26msv%3D8.0.0%26brand%3DApple%26imei%3D426F3023E84E9D50B41EE52EBA14A49F1B5E3289%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhoneSE%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DEA6ADD13-9CE8-4E32-B389-C0ACD50A7452"},{"key":"shuqisqjlbody8","val":"src=&userId=2127968549&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624092485&sqSv=1.0&sign=6bd807d38dda581ee6e6fde47d2ce5f6&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.1.1%26utdid%3DYM1UL5Mvl64DACofY3SbHDOK%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2127968549%26sn%3DBF4C9A59B4A42C9EB35C139A6BD39D413BA8E792%26umidtoken%3DYM1UL5Mvl64DACofY3SbHDOK%26msv%3D8.0.0%26brand%3DApple%26imei%3D426F3023E84E9D50B41EE52EBA14A49F1B5E3289%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhoneSE%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DEA6ADD13-9CE8-4E32-B389-C0ACD50A7452"},{"key":"shuqicjyurl8","val":"https://ocean.shuqireader.com/api/activity/activity/v1/lottery/info?timestamp=1624092510&userId=2127968549&activityId=311&sqSv=1.0&sign=a7217098aa32b482ea75fb67956c5e37&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.1.1%26utdid%3DYM1UL5Mvl64DACofY3SbHDOK%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2127968549%26sn%3DBF4C9A59B4A42C9EB35C139A6BD39D413BA8E792%26umidtoken%3DYM1UL5Mvl64DACofY3SbHDOK%26msv%3D8.0.0%26brand%3DApple%26imei%3D426F3023E84E9D50B41EE52EBA14A49F1B5E3289%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhoneSE%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DEA6ADD13-9CE8-4E32-B389-C0ACD50A7452"},{"key":"shuqicjcsbody8","val":"_public=skinId%3D999%26idfa%3DEA6ADD13-9CE8-4E32-B389-C0ACD50A7452%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26umidtoken%3DYM1UL5Mvl64DACofY3SbHDOK%26user_id%3D2127968549%26sn%3DBF4C9A59B4A42C9EB35C139A6BD39D413BA8E792%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D426F3023E84E9D50B41EE52EBA14A49F1B5E3289%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhoneSE%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYM1UL5Mvl64DACofY3SbHDOK%26utype%3Dpre_vip%26sdk%3D13.1.1&deliveryId=711&key=sq_app_ad&miniWua=HHnB_KmI3%2BHEyqdZx9jHiZ1k%2BN8ypV6CYBbQzEYlJ1OmGKaQ%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=703&sign=F9756C03351CBCCEF5FE8DB8C1D23B80&timestamp=1624092492&userId=2127968549&user_id=2127968549&wua=HIVW_%2BVbFEo0J%2BmYkWrvEfPHfSqv53R2gD5BG0TT/uyhhp2Phi8MqI%2Bpb2EAXpIYHYvHOBphJyL3mcmCaOgYVrAA0FyLy5qFrK/BSvOz3CqENZ9XYNpGInnbmQqMN/rmlHowd8KzkuVebJXtYRwhWRZsB6OqtBslA1%2B/Ii6tQapYZfg9SyWkpRZG%2BtH7WYQEeFRABDlqGIFB6QTqksv4jCnD0JFZEpFmMQEldaI2CvADSiSg%3D"},{"key":"shuqicjbody8","val":"wua=HIVW_XwSPrxFZsfASB2vJYMTDuY%2FE5octpPQ3l4wSCfA9nhWxp69kuiv0NID4HtD0dECBo4LgytlGJF5c2t%2Fk%2FJcuRDYIjNI8P13C8vNTki5ybcU3HnwT6sLSW4vt6WfJx5I1x77uhPvJ3u4VgzDu2vwY6vYqD8zCEYE6kQd67h61GJbP9LA4rdrl2bk%2Ffu0UK%2F4GRorzoGIQUbmRfxBE1qgmDxD1y2vivPaEuBQCANEsdnk%3D&ua=&userId=2127968549&umidtoken=YM1UL5Mvl64DACofY3SbHDOK&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&asac=2A20C07RJ9F51AOEFSNHDR&timestamp=1624092498&activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&sqSv=1.0&sign=fb00ff73ab21f6b6e2ef5fb5a1b6d8c1&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.1.1%26utdid%3DYM1UL5Mvl64DACofY3SbHDOK%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2127968549%26sn%3DBF4C9A59B4A42C9EB35C139A6BD39D413BA8E792%26umidtoken%3DYM1UL5Mvl64DACofY3SbHDOK%26msv%3D8.0.0%26brand%3DApple%26imei%3D426F3023E84E9D50B41EE52EBA14A49F1B5E3289%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhoneSE%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DEA6ADD13-9CE8-4E32-B389-C0ACD50A7452"},{"key":"shuqijsspbody8","val":""},{"key":"shuqijsydurl8","val":""},{"key":"shuqijsydbody8","val":""},{"key":"shuqijsqdbody8","val":""},{"key":"shuqijsqdspyurl8","val":""},{"key":"shuqijsqdspbody8","val":""},{"key":"shuqijsrwbody8","val":""},{"key":"shuqijsfxbody8","val":""},{"key":"shuqijsbookurl8","val":""},{"key":"shuqijsbookbody8","val":""},{"key":"shuqijssprwurl8","val":""},{"key":"shuqiuserurl9","val":"https://ocean.shuqireader.com/api/jaccount/accountapi/v1/sapi/account/getBindinfo?userId=2131687350&sqSv=1.0&timestamp=1624092578&sign=2c47898c2e46ca7b1ee29449a367b154&key=sq_h5_gateway"},{"key":"shuqisyurl9","val":"https://render.shuqireader.com/load/resource?sdk=13.5&utdid=YM1USirJo3UDAM2ecrCjs4ge&ustatus=0&first_placeid=111111&net_env=wifi&placeid=111111&user_id=2131687350&sn=06CF8B0E6BDA2CD614D77C9F2F75879E96FCD482&umidtoken=YM1USirJo3UDAM2ecrCjs4ge&msv=8.0.0&brand=Apple&imei=16101CC929919FC4063ADA2F99BCB1DD0CCF2314&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=iOS&ver=210301&mod=UnknowniPad&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=29042EDE-F510-4129-8FFB-12517C22FBF2"},{"key":"shuqisybody9","val":"appVer=4.3.6.0&imei=16101CC929919FC4063ADA2F99BCB1DD0CCF2314&isNewUser=1&params=%7B%22resources%22%3A%7B%22ShuqiVipEntry%22%3A%7B%7D%2C%22personalCardConfig%22%3A%7B%7D%7D%7D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=7c4182436b40c785e25dbbc59df3afa6&sn=06CF8B0E6BDA2CD614D77C9F2F75879E96FCD482&soft_id=21&timestamp=1624092530&user_id=2131687350&ver=210301"},{"key":"shuqispbody9","val":"_public=skinId%3D999%26idfa%3D29042EDE-F510-4129-8FFB-12517C22FBF2%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26umidtoken%3DYM1USirJo3UDAM2ecrCjs4ge%26user_id%3D2131687350%26sn%3D06CF8B0E6BDA2CD614D77C9F2F75879E96FCD482%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D16101CC929919FC4063ADA2F99BCB1DD0CCF2314%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYM1USirJo3UDAM2ecrCjs4ge%26utype%3Dpre_vip%26sdk%3D13.5&deliveryId=525&key=sq_app_ad&miniWua=HHnB_Gq2wX9CVup3d8%2BbKtFelnivRZaBIGp1HmjLrfV3xujE%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=626&sign=00C22B9A9063E589C1553D1247902581&timestamp=1624092555&userId=2131687350&user_id=2131687350&wua=HIVW_KXVeApNUINSHzmA/ptDN1WPm5IZHE7sr%2BguouhEbL2qdAiQC4quM%2B3GrF2UAVzx3hRidC%2BCUh0mqVgArNxBpoeDfi7TYRczJKK0RmH5cIrQkbfl6HjLn1ym9u1M3X7wTV1ayqbpeFGCs7oPM5vGP%2BDojlLFMASLdtp9guC1I42DAYdtXsCLuF2H%2BPXqRoedk7k34kNlk8R4YnTZshoX/U%2BkshLOq2Atk7dPO1nzOvaA%3D"},{"key":"shuqiscbody9","val":""},{"key":"shuqiydbody9","val":""},{"key":"shuqiqdbody9","val":"clientTimestamp=1624092547&position=501&userId=2131687350&signInType=1&wua=HIVW_UxvHDl5jdXHICeTQu%2FCOMRl1Q%2BHieQ7o4wpJN8ovphbUiDXO2D4wttRA2I1ob4XcJJtcXxR5%2BDd8PlF%2FOlbfHTCsYcYkuaeg25yhbdPXo%2FynuWxHgAoTMK91MdyVRK7x21sfYrTYS2tigyDjP20SIC8I%2BD0P%2BGW2Skb7Qd4uAJXxsT8uZPETYfwu1bbD97S4MfI%2FtmXHGLu0LUNJ25fBq8fVMjFofpYG%2BUdewM%2Blh7A%3D&ua=&miniWua=HHnB_dkgbIIfjpR%2BSRUk4PbpUaoFwlSkOLl2gqXxlqOsV5NU%3D&umidtoken=YM1USirJo3UDAM2ecrCjs4ge&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&sign=74a21a1fe86499ac138645ee19562cf8&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.5%26utdid%3DYM1USirJo3UDAM2ecrCjs4ge%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2131687350%26sn%3D06CF8B0E6BDA2CD614D77C9F2F75879E96FCD482%26umidtoken%3DYM1USirJo3UDAM2ecrCjs4ge%26msv%3D8.0.0%26brand%3DApple%26imei%3D16101CC929919FC4063ADA2F99BCB1DD0CCF2314%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D29042EDE-F510-4129-8FFB-12517C22FBF2"},{"key":"shuqirwbody9","val":"serviceWorkerOn=1&stopPullRefresh=1&from=ShuqiTab&upf=20368&sdk=13.5&utdid=YM1USirJo3UDAM2ecrCjs4ge&ustatus=0&first_placeid=111111&net_env=wifi&placeid=111111&user_id=2131687350&sn=06CF8B0E6BDA2CD614D77C9F2F75879E96FCD482&umidtoken=YM1USirJo3UDAM2ecrCjs4ge&msv=8.0.0&brand=Apple&imei=16101CC929919FC4063ADA2F99BCB1DD0CCF2314&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&session=&skinColor=23B383&platform=1&ver=210301&mod=UnknowniPad&statusBarHeight=44.000000&skinVersion=1&wh=1242x2688&soft_id=21&utype=pre_vip&skinId=999&idfa=29042EDE-F510-4129-8FFB-12517C22FBF2&params=%7B%22resources%22%3A%7B%22ShuqiBsDailyTask%22%3A%7B%7D%7D%7D&userId=2131687350&placeId=111111&timestamp=1624092559&sqSv=1.0&sign=c0003e97cb6d90bba1fb9fa80d2b6d59&key=sq_h5_gateway&_public="},{"key":"shuqifxbody9","val":""},{"key":"shuqisprwurl9","val":"https://ocean.shuqireader.com/api/ad/adserver/v1/api/getAdInfo?appVer=4.3.6.0&placeId=111111&platform=iOS&requestSrc=h5&resourceId=626&timestamp=1624092578&user_id=2131687350&sqSv=1.0&sign=4eb1809ed2d29310506ba439a286a99b&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.5%26utdid%3DYM1USirJo3UDAM2ecrCjs4ge%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2131687350%26sn%3D06CF8B0E6BDA2CD614D77C9F2F75879E96FCD482%26umidtoken%3DYM1USirJo3UDAM2ecrCjs4ge%26msv%3D8.0.0%26brand%3DApple%26imei%3D16101CC929919FC4063ADA2F99BCB1DD0CCF2314%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D29042EDE-F510-4129-8FFB-12517C22FBF2"},{"key":"shuqijlbody9","val":"requestSrc=h5&userId=2131687350&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624092559&sqSv=1.0&sign=1bb3cf72639700bafbe824681875fc32&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.5%26utdid%3DYM1USirJo3UDAM2ecrCjs4ge%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2131687350%26sn%3D06CF8B0E6BDA2CD614D77C9F2F75879E96FCD482%26umidtoken%3DYM1USirJo3UDAM2ecrCjs4ge%26msv%3D8.0.0%26brand%3DApple%26imei%3D16101CC929919FC4063ADA2F99BCB1DD0CCF2314%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D29042EDE-F510-4129-8FFB-12517C22FBF2"},{"key":"shuqisqjlbody9","val":"src=&userId=2131687350&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624092552&sqSv=1.0&sign=c86f6246792be60f278e408c24d43331&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.5%26utdid%3DYM1USirJo3UDAM2ecrCjs4ge%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2131687350%26sn%3D06CF8B0E6BDA2CD614D77C9F2F75879E96FCD482%26umidtoken%3DYM1USirJo3UDAM2ecrCjs4ge%26msv%3D8.0.0%26brand%3DApple%26imei%3D16101CC929919FC4063ADA2F99BCB1DD0CCF2314%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D29042EDE-F510-4129-8FFB-12517C22FBF2"},{"key":"shuqicjyurl9","val":"https://ocean.shuqireader.com/api/activity/activity/v1/lottery/info?timestamp=1624092584&userId=2131687350&activityId=311&sqSv=1.0&sign=498811b48fd947ce19093995397ba7ce&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.5%26utdid%3DYM1USirJo3UDAM2ecrCjs4ge%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2131687350%26sn%3D06CF8B0E6BDA2CD614D77C9F2F75879E96FCD482%26umidtoken%3DYM1USirJo3UDAM2ecrCjs4ge%26msv%3D8.0.0%26brand%3DApple%26imei%3D16101CC929919FC4063ADA2F99BCB1DD0CCF2314%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D29042EDE-F510-4129-8FFB-12517C22FBF2"},{"key":"shuqicjcsbody9","val":"_public=skinId%3D999%26idfa%3D29042EDE-F510-4129-8FFB-12517C22FBF2%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26umidtoken%3DYM1USirJo3UDAM2ecrCjs4ge%26user_id%3D2131687350%26sn%3D06CF8B0E6BDA2CD614D77C9F2F75879E96FCD482%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D16101CC929919FC4063ADA2F99BCB1DD0CCF2314%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYM1USirJo3UDAM2ecrCjs4ge%26utype%3Dpre_vip%26sdk%3D13.5&deliveryId=711&key=sq_app_ad&miniWua=HHnB_otK7JqB1uFsYCXT%2B4qduKOUUrnb012dhyhqT3VbEY74%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=703&sign=6EBAEC36FD0A387B74824D255A7CC80C&timestamp=1624092563&userId=2131687350&user_id=2131687350&wua=HIVW_4lYrLvEr/6xJM7DP8n%2B1jD2nYV6W/Qyk6d6DT1ruX3ADxoKaarl4r5sjyqJXl/vrQrm7K3QRL2lHCU85qNUub5AZRgjIiLdAQEa496rMN3kvAQYJQkGgghp0YG%2B5ZoD6j47q3RL6wyemEYPYO9T%2BheGBiur6re6tgsdnZQeX0CLbZ5gPmjmGyc5eJa/1MLbCQuOJeWtKEcZxCJVleTnDqL%2BBbr7tHPmLLHYLl6GUbF8%3D"},{"key":"shuqicjbody9","val":"wua=HIVW_0vazbhUf%2FB9zdCiZ9vwMJ8MvbGd%2BZkxPvNA7O%2BL6MxNmPler4zJAfgKyAwK6VfEE4v%2BxZXQVD5bL8JHQajmRIJoIvUUPUNDEBnSmSPAJnprefKm1GIDs0CjldLIcdjai8FVgLVU6oQqmav35cczkWm%2BK9SY1fPfmL%2FZArQK%2BFoE8YtpwYE%2BuTsjVHfDKuqi1zSxjIX3bZcZimPrrH5LwPmA92boj0CSRXq9tZoTzLko%3D&ua=&userId=2131687350&umidtoken=YM1USirJo3UDAM2ecrCjs4ge&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&asac=2A20C07RJ9F51AOEFSNHDR&timestamp=1624092569&activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&sqSv=1.0&sign=53c0ca7001e684075d1a60ad853436ed&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.5%26utdid%3DYM1USirJo3UDAM2ecrCjs4ge%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2131687350%26sn%3D06CF8B0E6BDA2CD614D77C9F2F75879E96FCD482%26umidtoken%3DYM1USirJo3UDAM2ecrCjs4ge%26msv%3D8.0.0%26brand%3DApple%26imei%3D16101CC929919FC4063ADA2F99BCB1DD0CCF2314%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D29042EDE-F510-4129-8FFB-12517C22FBF2"},{"key":"shuqijsspbody9","val":""},{"key":"shuqijsydurl9","val":""},{"key":"shuqijsydbody9","val":""},{"key":"shuqijsqdbody9","val":""},{"key":"shuqijsqdspyurl9","val":""},{"key":"shuqijsqdspbody9","val":""},{"key":"shuqijsrwbody9","val":""},{"key":"shuqijsfxbody9","val":""},{"key":"shuqijsbookurl9","val":""},{"key":"shuqijsbookbody9","val":""},{"key":"shuqijssprwurl9","val":""},{"key":"shuqiuserurl10","val":"https://ocean.shuqireader.com/api/jaccount/accountapi/v1/sapi/account/getBindinfo?userId=2127917259&sqSv=1.0&timestamp=1624092692&sign=3b8c9ced666160fde280ec21fb734b50&key=sq_h5_gateway"},{"key":"shuqisyurl10","val":"https://render.shuqireader.com/load/resource?sdk=13.0&utdid=YM1UL5Mvl64DACofY3SbHDOK&ustatus=0&first_placeid=111111&net_env=4g&placeid=111111&user_id=2127917259&sn=D1D913565A87A6DD3AD3583DA86E019794755944&umidtoken=YM1UL5Mvl64DACofY3SbHDOK&msv=8.0.0&brand=Apple&imei=CB181E2BA833341BEDF45A8365C188CBD317FB7E&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=iOS&ver=210301&mod=iPhone6splus&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=FD0710C1-AD7C-4E99-B113-60DA343B96E4"},{"key":"shuqisybody10","val":"appVer=4.3.6.0&imei=CB181E2BA833341BEDF45A8365C188CBD317FB7E&isNewUser=1&params=%7B%22resources%22%3A%7B%22ShuqiVipEntry%22%3A%7B%7D%2C%22personalCardConfig%22%3A%7B%7D%7D%7D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=62caf9563dd5c930a5eb0f251836b0ee&sn=D1D913565A87A6DD3AD3583DA86E019794755944&soft_id=21&timestamp=1624092596&user_id=2127917259&ver=210301"},{"key":"shuqispbody10","val":"_public=skinId%3D999%26idfa%3DFD0710C1-AD7C-4E99-B113-60DA343B96E4%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26umidtoken%3DYM1UL5Mvl64DACofY3SbHDOK%26user_id%3D2127917259%26sn%3DD1D913565A87A6DD3AD3583DA86E019794755944%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3DCB181E2BA833341BEDF45A8365C188CBD317FB7E%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhone6splus%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYM1UL5Mvl64DACofY3SbHDOK%26utype%3Dpre_vip%26sdk%3D13.0&deliveryId=525&key=sq_app_ad&miniWua=HHnB_AM5Nw/GfPbcX0RMBfKelk2YNrNF6pe8JZQN3CnKuWKQ%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=626&sign=A1CAC5AD505604D8CE4CBF94DF9B50E8&timestamp=1624092643&userId=2127917259&user_id=2127917259&wua=HIVW_15n4DBfFQHrRyaQG4uCNwe%2BeewJSS%2Bat2aMM0wVjZQL%2BpPIkZ7xDGXHDXnDYBldXlGUBxsa/vkTmHjbZqlB0CalIBNDdxA1jYkOKdT0kWr0UybXpAqHdaFctTvyLtpUgrwmdPhcNU6vgHjy/LrBAVZEd6FuBYMX7k4Md4zEiABI3Cr92HyRUoue%2BOt/shX7syQVR37SqNR3ZQJdpLJcMkQ%3D%3D"},{"key":"shuqiscbody10","val":""},{"key":"shuqiydbody10","val":""},{"key":"shuqiqdbody10","val":"clientTimestamp=1624092611&position=501&userId=2127917259&signInType=1&wua=HIVW_oAqMoitBqa%2BnCYU6kHQ9z%2FYebmA3G4zQAd6SsL53yTmFySvqBn26BLpeGInHJuRkdKF12CrF6lW2aQ6Hkhp1mymzFZexeskohE9nom4cAGNKeHGfA%2FvTrXLtlsjc%2BA8Mq7QrxkXNYANMjcmSxOXzxLOL5B8AMfHfbTQt0o02jlFg6itTojeoeHD%2Bx79aucZcgTG%2FRoiQW%2BOskdaY%2B2v5bPnTV%2Bb4VMt1arDUAQStQUE%3D&ua=&miniWua=HHnB_wmvDVjNW%2BkASz3gyHNNr5CoJwHRfs2edvWWt%2FmE88tw%3D&umidtoken=YM1UL5Mvl64DACofY3SbHDOK&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&sign=1970d9d964ee9c874253862d1b25bb21&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.0%26utdid%3DYM1UL5Mvl64DACofY3SbHDOK%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2127917259%26sn%3DD1D913565A87A6DD3AD3583DA86E019794755944%26umidtoken%3DYM1UL5Mvl64DACofY3SbHDOK%26msv%3D8.0.0%26brand%3DApple%26imei%3DCB181E2BA833341BEDF45A8365C188CBD317FB7E%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone6splus%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DFD0710C1-AD7C-4E99-B113-60DA343B96E4"},{"key":"shuqirwbody10","val":"serviceWorkerOn=1&stopPullRefresh=1&from=ShuqiTab&upf=20368&sdk=13.0&utdid=YM1UL5Mvl64DACofY3SbHDOK&ustatus=0&first_placeid=111111&net_env=4g&placeid=111111&user_id=2127917259&sn=D1D913565A87A6DD3AD3583DA86E019794755944&umidtoken=YM1UL5Mvl64DACofY3SbHDOK&msv=8.0.0&brand=Apple&imei=CB181E2BA833341BEDF45A8365C188CBD317FB7E&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=1&ver=210301&mod=iPhone6splus&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=FD0710C1-AD7C-4E99-B113-60DA343B96E4&params=%7B%22resources%22%3A%7B%22ShuqiBsDailyTask%22%3A%7B%7D%7D%7D&userId=2127917259&placeId=111111&timestamp=1624092646&sqSv=1.0&sign=23c99afabcb7b0b96f362aa4ee196fd0&key=sq_h5_gateway&_public="},{"key":"shuqifxbody10","val":""},{"key":"shuqisprwurl10","val":"https://ocean.shuqireader.com/api/ad/adserver/v1/api/getAdInfo?appVer=4.3.6.0&placeId=111111&platform=iOS&requestSrc=h5&resourceId=626&timestamp=1624092692&user_id=2127917259&sqSv=1.0&sign=c791a78d86a084fb335915fab3f5d705&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.0%26utdid%3DYM1UL5Mvl64DACofY3SbHDOK%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2127917259%26sn%3DD1D913565A87A6DD3AD3583DA86E019794755944%26umidtoken%3DYM1UL5Mvl64DACofY3SbHDOK%26msv%3D8.0.0%26brand%3DApple%26imei%3DCB181E2BA833341BEDF45A8365C188CBD317FB7E%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone6splus%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DFD0710C1-AD7C-4E99-B113-60DA343B96E4"},{"key":"shuqijlbody10","val":"requestSrc=h5&userId=2127917259&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624092646&sqSv=1.0&sign=7ea576338c75432fc0187785ed63a70f&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.0%26utdid%3DYM1UL5Mvl64DACofY3SbHDOK%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2127917259%26sn%3DD1D913565A87A6DD3AD3583DA86E019794755944%26umidtoken%3DYM1UL5Mvl64DACofY3SbHDOK%26msv%3D8.0.0%26brand%3DApple%26imei%3DCB181E2BA833341BEDF45A8365C188CBD317FB7E%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone6splus%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DFD0710C1-AD7C-4E99-B113-60DA343B96E4"},{"key":"shuqisqjlbody10","val":"src=&userId=2127917259&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624092619&sqSv=1.0&sign=29828ed51a41833c800b3be8e32547dd&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.0%26utdid%3DYM1UL5Mvl64DACofY3SbHDOK%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2127917259%26sn%3DD1D913565A87A6DD3AD3583DA86E019794755944%26umidtoken%3DYM1UL5Mvl64DACofY3SbHDOK%26msv%3D8.0.0%26brand%3DApple%26imei%3DCB181E2BA833341BEDF45A8365C188CBD317FB7E%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone6splus%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DFD0710C1-AD7C-4E99-B113-60DA343B96E4"},{"key":"shuqicjyurl10","val":"https://ocean.shuqireader.com/api/activity/activity/v1/lottery/info?timestamp=1624092695&userId=2127917259&activityId=311&sqSv=1.0&sign=a921cf61b5bf75b8a42bddf784b2f11b&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.0%26utdid%3DYM1UL5Mvl64DACofY3SbHDOK%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2127917259%26sn%3DD1D913565A87A6DD3AD3583DA86E019794755944%26umidtoken%3DYM1UL5Mvl64DACofY3SbHDOK%26msv%3D8.0.0%26brand%3DApple%26imei%3DCB181E2BA833341BEDF45A8365C188CBD317FB7E%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone6splus%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DFD0710C1-AD7C-4E99-B113-60DA343B96E4"},{"key":"shuqicjcsbody10","val":"_public=skinId%3D999%26idfa%3DFD0710C1-AD7C-4E99-B113-60DA343B96E4%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26umidtoken%3DYM1UL5Mvl64DACofY3SbHDOK%26user_id%3D2127917259%26sn%3DD1D913565A87A6DD3AD3583DA86E019794755944%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3DCB181E2BA833341BEDF45A8365C188CBD317FB7E%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhone6splus%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYM1UL5Mvl64DACofY3SbHDOK%26utype%3Dpre_vip%26sdk%3D13.0&deliveryId=711&key=sq_app_ad&miniWua=HHnB_HAFTXu%2BPhCOCXcSJbdNLOKE2w7CD0XvJIIXnUOnNpe8%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=703&sign=62D2B34943C3921EF114FE1092B64515&timestamp=1624092675&userId=2127917259&user_id=2127917259&wua=HIVW_RSlpa%2BIzdT5UygVEHlOgVQ7xcydQI/zwSVQPGbyvTAtjtK2GXJTV38C77vg52FHR1s%2BLNg4oIjiw8yN2R42R8hoBWpnfjALcXW6/WGsH1Xfra/q3VKeU/lChF6ZqBY8vqXMZMcE4dv1t/hk0A9r80qTMKqR5KXqyCptLvIkBNlyqcYUYSHVRJohKW97pifoyROqBFczS6a%2BYCqnDlhCC6kNkaKGVkEff6cQ06Qz9JA0%3D"},{"key":"shuqicjbody10","val":"wua=HIVW_cSAFdUfGpmaBFGeh4UNZRiB%2B%2B9JFx4cQMQkc6u2GuGUyUuox4wSEgeeZG6%2BpxPaVv0QXrpSZ3ige0pN6Zl654zh5cQlHlcGvrSy7AJ3ffqiW0l7F8qkaOamPzlkNXpwbRBg9TPmU3RfgiKQA%2B70qV4MMZP97k%2FOGNJEaWllAKWeehH%2FSCpojJwq%2FPvqGJTnGmUv7xf7RJbsWEs9MtZ5M3BE3eXAqDx3H%2BokTODN4PPI%3D&ua=&userId=2127917259&umidtoken=YM1UL5Mvl64DACofY3SbHDOK&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&asac=2A20C07RJ9F51AOEFSNHDR&timestamp=1624092678&activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&sqSv=1.0&sign=ae93d9043dfa64e1b7869c0e5fc43bc2&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.0%26utdid%3DYM1UL5Mvl64DACofY3SbHDOK%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2127917259%26sn%3DD1D913565A87A6DD3AD3583DA86E019794755944%26umidtoken%3DYM1UL5Mvl64DACofY3SbHDOK%26msv%3D8.0.0%26brand%3DApple%26imei%3DCB181E2BA833341BEDF45A8365C188CBD317FB7E%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone6splus%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DFD0710C1-AD7C-4E99-B113-60DA343B96E4"},{"key":"shuqijsspbody10","val":""},{"key":"shuqijsydurl10","val":""},{"key":"shuqijsydbody10","val":""},{"key":"shuqijsqdbody10","val":""},{"key":"shuqijsqdspyurl10","val":""},{"key":"shuqijsqdspbody10","val":""},{"key":"shuqijsrwbody10","val":""},{"key":"shuqijsfxbody10","val":""},{"key":"shuqijsbookurl10","val":""},{"key":"shuqijsbookbody10","val":""},{"key":"shuqijssprwurl10","val":""},{"key":"shuqiuserurl11","val":"https://ocean.shuqireader.com/api/jaccount/accountapi/v1/sapi/account/getBindinfo?userId=2131786939&sqSv=1.0&timestamp=1624092756&sign=851307377d59134dd8374af12e2e0890&key=sq_h5_gateway"},{"key":"shuqisyurl11","val":"https://render.shuqireader.com/load/resource?sdk=13.3.1&utdid=YM1UL5Mvl64DACofY3SbHDOK&ustatus=0&first_placeid=111111&net_env=wifi&placeid=111111&user_id=2131786939&sn=8B9E3CE98DA67F1600AF0ED2F4D20501E67E756C&umidtoken=YM1UL5Mvl64DACofY3SbHDOK&msv=8.0.0&brand=Apple&imei=D431A028C6A0C4C7A94408027BE0C69054DBB7BA&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&session=&skinColor=23B383&platform=iOS&ver=210301&mod=iPodtouch3G&statusBarHeight=44.000000&skinVersion=1&wh=1242x2688&soft_id=21&utype=pre_vip&skinId=999&idfa=F08CB133-F2B2-4C25-AAFA-8DA843D33E8B"},{"key":"shuqisybody11","val":"appVer=4.3.6.0&imei=D431A028C6A0C4C7A94408027BE0C69054DBB7BA&isNewUser=1&params=%7B%22resources%22%3A%7B%22ShuqiVipEntry%22%3A%7B%7D%2C%22personalCardConfig%22%3A%7B%7D%7D%7D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=3b347bb4eed32e69dba3291f6507a82f&sn=8B9E3CE98DA67F1600AF0ED2F4D20501E67E756C&soft_id=21&timestamp=1624092709&user_id=2131786939&ver=210301"},{"key":"shuqispbody11","val":"_public=skinId%3D999%26idfa%3DF08CB133-F2B2-4C25-AAFA-8DA843D33E8B%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26umidtoken%3DYM1UL5Mvl64DACofY3SbHDOK%26user_id%3D2131786939%26sn%3D8B9E3CE98DA67F1600AF0ED2F4D20501E67E756C%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3DD431A028C6A0C4C7A94408027BE0C69054DBB7BA%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPodtouch3G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYM1UL5Mvl64DACofY3SbHDOK%26utype%3Dpre_vip%26sdk%3D13.3.1&deliveryId=525&key=sq_app_ad&miniWua=HHnB_Y0acyeM%2Btcx4s5LdXpISnQt5z0QZJTBty894jidScWg%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=626&sign=2C4D90CC4DC573D8CC72F04F4D2CA765&timestamp=1624092731&userId=2131786939&user_id=2131786939&wua=HIVW_Xps/RPmclyt/43SP8sftX%2BeCbz1r6HAve4qfz%2BskCO91KHP3Bi8oyX48MUYRFkXed6ucIO7cFrnUVmWtsBTwortC9o1FWbFU/aL48jVmT5E7D%2BKdu1pw/CzfHDJFyuFWy4i7UosPJMPV6NXLljWf2xOJVqS%2BY3CVT4GgSuwjQpk0JWcGe71cFX/YeY2RNPKziVq6gOV8woOusnWAu2vQvWKl6Jv36QOh5ENs%2BfQnxJ8%3D"},{"key":"shuqiscbody11","val":""},{"key":"shuqiydbody11","val":""},{"key":"shuqiqdbody11","val":"clientTimestamp=1624092722&position=501&userId=2131786939&signInType=1&wua=HIVW_gvfnEQDXwqLKdkNljWB7jjjab9jIL73ZzfI%2Bu8dIqCa5ExqOwalA7RF%2Bk5Mr00Lc2GHRbcnZ37VzNGs3Z0kwv5YIhGjArAisN5%2F0Rx9a9g0thstZ2LykQRgYU8pkcyWXKrBz5SJZuV1IzywF0Emk%2BOFiRA%2Frdde8%2F2hbptt%2BB6EgdOKU6uOE5XIAn3%2F2OiPTv82p8vab0NadqFIZUfXtwaaAtPtISZEH9zExSpgcWGc%3D&ua=&miniWua=HHnB_za5Vaxnmee2teCNgkimYgk5%2BC9253J41OtMvdRG7Ev8%3D&umidtoken=YM1UL5Mvl64DACofY3SbHDOK&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&sign=d0405ba45659dc6c2f2651260097abb4&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.3.1%26utdid%3DYM1UL5Mvl64DACofY3SbHDOK%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2131786939%26sn%3D8B9E3CE98DA67F1600AF0ED2F4D20501E67E756C%26umidtoken%3DYM1UL5Mvl64DACofY3SbHDOK%26msv%3D8.0.0%26brand%3DApple%26imei%3DD431A028C6A0C4C7A94408027BE0C69054DBB7BA%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPodtouch3G%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DF08CB133-F2B2-4C25-AAFA-8DA843D33E8B"},{"key":"shuqirwbody11","val":"serviceWorkerOn=1&stopPullRefresh=1&from=ShuqiTab&upf=20368&sdk=13.3.1&utdid=YM1UL5Mvl64DACofY3SbHDOK&ustatus=0&first_placeid=111111&net_env=wifi&placeid=111111&user_id=2131786939&sn=8B9E3CE98DA67F1600AF0ED2F4D20501E67E756C&umidtoken=YM1UL5Mvl64DACofY3SbHDOK&msv=8.0.0&brand=Apple&imei=D431A028C6A0C4C7A94408027BE0C69054DBB7BA&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=1&ver=210301&mod=iPodtouch3G&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=F08CB133-F2B2-4C25-AAFA-8DA843D33E8B&params=%7B%22resources%22%3A%7B%22ShuqiBsDailyTask%22%3A%7B%7D%7D%7D&userId=2131786939&placeId=111111&timestamp=1624092734&sqSv=1.0&sign=8151c347dd13e6dfa7e197bffd3aed94&key=sq_h5_gateway&_public="},{"key":"shuqifxbody11","val":""},{"key":"shuqisprwurl11","val":"https://ocean.shuqireader.com/api/ad/adserver/v1/api/getAdInfo?appVer=4.3.6.0&placeId=111111&platform=iOS&requestSrc=h5&resourceId=626&timestamp=1624092756&user_id=2131786939&sqSv=1.0&sign=fdfbf44e50e74f5e92819d907ff5336d&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.3.1%26utdid%3DYM1UL5Mvl64DACofY3SbHDOK%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2131786939%26sn%3D8B9E3CE98DA67F1600AF0ED2F4D20501E67E756C%26umidtoken%3DYM1UL5Mvl64DACofY3SbHDOK%26msv%3D8.0.0%26brand%3DApple%26imei%3DD431A028C6A0C4C7A94408027BE0C69054DBB7BA%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPodtouch3G%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DF08CB133-F2B2-4C25-AAFA-8DA843D33E8B"},{"key":"shuqijlbody11","val":"requestSrc=h5&userId=2131786939&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624092734&sqSv=1.0&sign=4814b658612ee276c3788f21e703b226&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.3.1%26utdid%3DYM1UL5Mvl64DACofY3SbHDOK%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2131786939%26sn%3D8B9E3CE98DA67F1600AF0ED2F4D20501E67E756C%26umidtoken%3DYM1UL5Mvl64DACofY3SbHDOK%26msv%3D8.0.0%26brand%3DApple%26imei%3DD431A028C6A0C4C7A94408027BE0C69054DBB7BA%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPodtouch3G%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DF08CB133-F2B2-4C25-AAFA-8DA843D33E8B"},{"key":"shuqisqjlbody11","val":"src=&userId=2131786939&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624092728&sqSv=1.0&sign=9d96003e03a5265112581bd1368cecc8&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.3.1%26utdid%3DYM1UL5Mvl64DACofY3SbHDOK%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2131786939%26sn%3D8B9E3CE98DA67F1600AF0ED2F4D20501E67E756C%26umidtoken%3DYM1UL5Mvl64DACofY3SbHDOK%26msv%3D8.0.0%26brand%3DApple%26imei%3DD431A028C6A0C4C7A94408027BE0C69054DBB7BA%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPodtouch3G%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DF08CB133-F2B2-4C25-AAFA-8DA843D33E8B"},{"key":"shuqicjyurl11","val":"https://ocean.shuqireader.com/api/activity/activity/v1/lottery/info?timestamp=1624092758&userId=2131786939&activityId=311&sqSv=1.0&sign=b7f82404c7bfcb9544358549681dfc39&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.3.1%26utdid%3DYM1UL5Mvl64DACofY3SbHDOK%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2131786939%26sn%3D8B9E3CE98DA67F1600AF0ED2F4D20501E67E756C%26umidtoken%3DYM1UL5Mvl64DACofY3SbHDOK%26msv%3D8.0.0%26brand%3DApple%26imei%3DD431A028C6A0C4C7A94408027BE0C69054DBB7BA%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPodtouch3G%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DF08CB133-F2B2-4C25-AAFA-8DA843D33E8B"},{"key":"shuqicjcsbody11","val":"_public=skinId%3D999%26idfa%3DF08CB133-F2B2-4C25-AAFA-8DA843D33E8B%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26umidtoken%3DYM1UL5Mvl64DACofY3SbHDOK%26user_id%3D2131786939%26sn%3D8B9E3CE98DA67F1600AF0ED2F4D20501E67E756C%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3DD431A028C6A0C4C7A94408027BE0C69054DBB7BA%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPodtouch3G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYM1UL5Mvl64DACofY3SbHDOK%26utype%3Dpre_vip%26sdk%3D13.3.1&deliveryId=711&key=sq_app_ad&miniWua=HHnB_wRD%2B0pORDFxMqsphcbBx%2BQ58XufLnIFf%2B7rq5EXmC0M%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=703&sign=977EAE9F69755EDE5EA8E64652FBD8BE&timestamp=1624092741&userId=2131786939&user_id=2131786939&wua=HIVW_ScIoXrYuNc3CaGYpEVwMp9VSsTD9w%2BxixOVBrITXA7zeEckfgfG1NboJmrSr5sNwlwAWAANUAqaS5KlI0YnmzcCzDdwpb2GDvBIthS0%2BF7MFeGhPvNJXyODZ5EZwiKVO/aQ3E7XQof1LqNtLS5M72a7191yKVCxsgyENkrEqargt56/hlabwFaVHrbCiLIBPpM79p5eIj6oKzqH88yBWCeExuCR%2BrGO0mrFC5CZl1Ws%3D"},{"key":"shuqicjbody11","val":"wua=HIVW_gvfnEQDXwqLKdkNljWB7jr8%2Bw839FECIHU0GXsoNS7TQv1b6CVTyATZj6bnwtwaVPSJk4Eq%2Bjc73yic31IPg41NWvMSKfXoLsRcgLaId%2FsOtH4tXpHw6hTRfzTZOzVEFMwUCrV9B6E%2BpJRJQdsPQDdy9RREhfnieKEM5f9zgxDDUDPwcfMg7tTF58LAKif8ctomSWFLItp4ctEhDQzeCJmz5VSD1BNbvhixmeEtvQoU%3D&ua=&userId=2131786939&umidtoken=YM1UL5Mvl64DACofY3SbHDOK&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&asac=2A20C07RJ9F51AOEFSNHDR&timestamp=1624092744&activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&sqSv=1.0&sign=052403277c85ef888cc6f4e713a87d35&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.3.1%26utdid%3DYM1UL5Mvl64DACofY3SbHDOK%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2131786939%26sn%3D8B9E3CE98DA67F1600AF0ED2F4D20501E67E756C%26umidtoken%3DYM1UL5Mvl64DACofY3SbHDOK%26msv%3D8.0.0%26brand%3DApple%26imei%3DD431A028C6A0C4C7A94408027BE0C69054DBB7BA%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPodtouch3G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DF08CB133-F2B2-4C25-AAFA-8DA843D33E8B"},{"key":"shuqijsspbody11","val":""},{"key":"shuqijsydurl11","val":""},{"key":"shuqijsydbody11","val":""},{"key":"shuqijsqdbody11","val":""},{"key":"shuqijsqdspyurl11","val":""},{"key":"shuqijsqdspbody11","val":""},{"key":"shuqijsrwbody11","val":""},{"key":"shuqijsfxbody11","val":""},{"key":"shuqijsbookurl11","val":""},{"key":"shuqijsbookbody11","val":""},{"key":"shuqijssprwurl11","val":""},{"key":"shuqiuserurl12","val":"https://ocean.shuqireader.com/api/jaccount/accountapi/v1/sapi/account/getBindinfo?userId=2132034826&sqSv=1.0&timestamp=1624092830&sign=f08e68a77d54025ccf0f748c22a55830&key=sq_h5_gateway"},{"key":"shuqisyurl12","val":"https://render.shuqireader.com/load/resource?sdk=13.5.1&utdid=YM1UL5Mvl64DACofY3SbHDOK&ustatus=0&first_placeid=111111&net_env=3g&placeid=111111&user_id=2132034826&sn=1CBE02FE30D4282A94BEB0DA4DB19138505CFF7C&umidtoken=YM1UL5Mvl64DACofY3SbHDOK&msv=8.0.0&brand=Apple&imei=0445B143D5685FE6005D79BD80F3B92E0284C841&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=iOS&ver=210301&mod=iPhone6splus&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=2583DD6D-E875-4EDE-8048-AEB0C70F433A"},{"key":"shuqisybody12","val":"appVer=4.3.6.0&imei=0445B143D5685FE6005D79BD80F3B92E0284C841&isNewUser=1&params=%7B%22resources%22%3A%7B%22ShuqiVipEntry%22%3A%7B%7D%2C%22personalCardConfig%22%3A%7B%7D%7D%7D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=af8e40eccfde89f65e980df3871ead01&sn=1CBE02FE30D4282A94BEB0DA4DB19138505CFF7C&soft_id=21&timestamp=1624092776&user_id=2132034826&ver=210301"},{"key":"shuqispbody12","val":"_public=skinId%3D999%26idfa%3D2583DD6D-E875-4EDE-8048-AEB0C70F433A%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26umidtoken%3DYM1UL5Mvl64DACofY3SbHDOK%26user_id%3D2132034826%26sn%3D1CBE02FE30D4282A94BEB0DA4DB19138505CFF7C%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D0445B143D5685FE6005D79BD80F3B92E0284C841%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhone6splus%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYM1UL5Mvl64DACofY3SbHDOK%26utype%3Dpre_vip%26sdk%3D13.5.1&deliveryId=525&key=sq_app_ad&miniWua=HHnB_50FOFlxSTjjaFEJSI1kyl8jQcWVttvpBIKjNZTYgXVQ%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=626&sign=BBCAFEC6A55C314CF2974B660732BE3A&timestamp=1624092801&userId=2132034826&user_id=2132034826&wua=HIVW_nsGAgXnOJjfNKgwxsLeyj9283mBDR0CvrysvrSeA0SdBWRB3vdntBzn2hkHAAF5g0xql1t0K6zQ4kGSPWvmx9lTktFKVSjX8sUl6REjKs2H/fD4Hq68OKDNFGHObNDf1zznAbqm0bEGPlQxRwtdwddrQCo/%2B4kA9YyvXvY01n%2BPp8AWcLPAGBvhLOp4GSMfW5XVqie12zUCInbv3Fak0IXVpJPcYL1RDmkb6l4VNyn4%3D"},{"key":"shuqiscbody12","val":""},{"key":"shuqiydbody12","val":""},{"key":"shuqiqdbody12","val":"clientTimestamp=1624092793&position=501&userId=2132034826&signInType=1&wua=HIVW_Zk%2BaTR4FqB5Vc2ApWVLFI%2FOF%2B%2BW9MnKWgYu0Ygwa%2FroNvPvEOf3qbr5vOM2ozya%2BISx%2FKX8VAyEr0HOmtsTP9%2BF4xBdUyOa5hWYftxNv3lJAAWlwH7E207wJyXLybunX3TSB0Mq2x36b8%2Bf8Cyf6aBnsAINTApdPNM%2Bj%2FqyZbHQWfrvSsFEO1e4QsvUtpnTkqwFJrtMhmMXQSxf3pj%2BVurrt5%2FMBAmgJ%2Fun1bra71z4%3D&ua=&miniWua=HHnB_Z8jQx8gLjbCxtQjwwvU54nic0pNpvT6bza7UBN3TpC0%3D&umidtoken=YM1UL5Mvl64DACofY3SbHDOK&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&sign=00b71340a4efce5eaef4ad2a29108c4f&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.5.1%26utdid%3DYM1UL5Mvl64DACofY3SbHDOK%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2132034826%26sn%3D1CBE02FE30D4282A94BEB0DA4DB19138505CFF7C%26umidtoken%3DYM1UL5Mvl64DACofY3SbHDOK%26msv%3D8.0.0%26brand%3DApple%26imei%3D0445B143D5685FE6005D79BD80F3B92E0284C841%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone6splus%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D2583DD6D-E875-4EDE-8048-AEB0C70F433A"},{"key":"shuqirwbody12","val":"serviceWorkerOn=1&stopPullRefresh=1&from=ShuqiTab&upf=20368&sdk=13.5.1&utdid=YM1UL5Mvl64DACofY3SbHDOK&ustatus=0&first_placeid=111111&net_env=3g&placeid=111111&user_id=2132034826&sn=1CBE02FE30D4282A94BEB0DA4DB19138505CFF7C&umidtoken=YM1UL5Mvl64DACofY3SbHDOK&msv=8.0.0&brand=Apple&imei=0445B143D5685FE6005D79BD80F3B92E0284C841&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=1&ver=210301&mod=iPhone6splus&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=2583DD6D-E875-4EDE-8048-AEB0C70F433A&params=%7B%22resources%22%3A%7B%22ShuqiBsDailyTask%22%3A%7B%7D%7D%7D&userId=2132034826&placeId=111111&timestamp=1624092807&sqSv=1.0&sign=ff0371264de41cbb475e5a287eb10434&key=sq_h5_gateway&_public="},{"key":"shuqifxbody12","val":""},{"key":"shuqisprwurl12","val":"https://ocean.shuqireader.com/api/ad/adserver/v1/api/getAdInfo?appVer=4.3.6.0&placeId=111111&platform=iOS&requestSrc=h5&resourceId=626&timestamp=1624092831&user_id=2132034826&sqSv=1.0&sign=5909e0ab592a16610c4e1767c55cb6ae&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.5.1%26utdid%3DYM1UL5Mvl64DACofY3SbHDOK%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2132034826%26sn%3D1CBE02FE30D4282A94BEB0DA4DB19138505CFF7C%26umidtoken%3DYM1UL5Mvl64DACofY3SbHDOK%26msv%3D8.0.0%26brand%3DApple%26imei%3D0445B143D5685FE6005D79BD80F3B92E0284C841%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone6splus%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D2583DD6D-E875-4EDE-8048-AEB0C70F433A"},{"key":"shuqijlbody12","val":"requestSrc=h5&userId=2132034826&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624092807&sqSv=1.0&sign=c79a124c0c079a90daab3ef4bb86e125&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.5.1%26utdid%3DYM1UL5Mvl64DACofY3SbHDOK%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2132034826%26sn%3D1CBE02FE30D4282A94BEB0DA4DB19138505CFF7C%26umidtoken%3DYM1UL5Mvl64DACofY3SbHDOK%26msv%3D8.0.0%26brand%3DApple%26imei%3D0445B143D5685FE6005D79BD80F3B92E0284C841%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone6splus%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D2583DD6D-E875-4EDE-8048-AEB0C70F433A"},{"key":"shuqisqjlbody12","val":"src=&userId=2132034826&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624092797&sqSv=1.0&sign=33866bd4b9461dcb505bff5ccccf9567&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.5.1%26utdid%3DYM1UL5Mvl64DACofY3SbHDOK%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2132034826%26sn%3D1CBE02FE30D4282A94BEB0DA4DB19138505CFF7C%26umidtoken%3DYM1UL5Mvl64DACofY3SbHDOK%26msv%3D8.0.0%26brand%3DApple%26imei%3D0445B143D5685FE6005D79BD80F3B92E0284C841%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone6splus%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D2583DD6D-E875-4EDE-8048-AEB0C70F433A"},{"key":"shuqicjyurl12","val":"https://ocean.shuqireader.com/api/activity/activity/v1/lottery/info?timestamp=1624092835&userId=2132034826&activityId=311&sqSv=1.0&sign=57c0c610ec8744bfeb7a5ee8520c278a&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.5.1%26utdid%3DYM1UL5Mvl64DACofY3SbHDOK%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2132034826%26sn%3D1CBE02FE30D4282A94BEB0DA4DB19138505CFF7C%26umidtoken%3DYM1UL5Mvl64DACofY3SbHDOK%26msv%3D8.0.0%26brand%3DApple%26imei%3D0445B143D5685FE6005D79BD80F3B92E0284C841%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone6splus%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D2583DD6D-E875-4EDE-8048-AEB0C70F433A"},{"key":"shuqicjcsbody12","val":"_public=skinId%3D999%26idfa%3D2583DD6D-E875-4EDE-8048-AEB0C70F433A%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26umidtoken%3DYM1UL5Mvl64DACofY3SbHDOK%26user_id%3D2132034826%26sn%3D1CBE02FE30D4282A94BEB0DA4DB19138505CFF7C%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D0445B143D5685FE6005D79BD80F3B92E0284C841%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhone6splus%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYM1UL5Mvl64DACofY3SbHDOK%26utype%3Dpre_vip%26sdk%3D13.5.1&deliveryId=711&key=sq_app_ad&miniWua=HHnB_NwO5kg2bp9tnZ%2BdDw31SLYuSvmPfxIvyK8kXrAl%2BoPc%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=703&sign=370C2A00DE3EDDFCB3B891C0E739B5A3&timestamp=1624092815&userId=2132034826&user_id=2132034826&wua=HIVW_HF5KGb/tb5najSZe3vnp2NfVcy4759pQwVBpy3Zhdnz6KT/2xBGAoJEscNuVdb/YryOaApXTAXYKDogEQl/R%2Bnr2EiYrb4AaDXDX3VEJVpUSnuWuDm0VbYWf95lz66Jw0mvdX/DsWpaSz5WyzAzno%2BAfhtxd1w3dWa9PatLZ4VECDob6wMRcvCGGILIKCD2121US0MTqPR23sXnTKYkfIeG81e8yRzPAQHKZp28CWtQ%3D"},{"key":"shuqicjbody12","val":"wua=HIVW_KtkEn7jO%2B6rsBupMAaYw%2FaWgGze3Rya%2Brr8fNjdR8ndOf1%2F48rsoI1AXI3Kx31dQPxzCYp9uRdki9zkmpXqBXjsi1CZG9YvN2IJHoXyKoBe8t2Ct7nRxYAHshgJ4T%2BMiyqBJDZDcXyVnaZQRUCAH9uULDVxmMxFL1ksNTXxyDdLzjGJXmwqgcG4xHhMi44OUNK8OJduX4mLGd%2BfeHc29C%2BsT%2FfYV1QU%2Fs5lD%2FKdV8Lo%3D&ua=&userId=2132034826&umidtoken=YM1UL5Mvl64DACofY3SbHDOK&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&asac=2A20C07RJ9F51AOEFSNHDR&timestamp=1624092821&activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&sqSv=1.0&sign=c2a968b79e9e387ce1f7800766469f3c&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.5.1%26utdid%3DYM1UL5Mvl64DACofY3SbHDOK%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2132034826%26sn%3D1CBE02FE30D4282A94BEB0DA4DB19138505CFF7C%26umidtoken%3DYM1UL5Mvl64DACofY3SbHDOK%26msv%3D8.0.0%26brand%3DApple%26imei%3D0445B143D5685FE6005D79BD80F3B92E0284C841%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone6splus%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D2583DD6D-E875-4EDE-8048-AEB0C70F433A"},{"key":"shuqijsspbody12","val":""},{"key":"shuqijsydurl12","val":""},{"key":"shuqijsydbody12","val":""},{"key":"shuqijsqdbody12","val":""},{"key":"shuqijsqdspyurl12","val":""},{"key":"shuqijsqdspbody12","val":""},{"key":"shuqijsrwbody12","val":""},{"key":"shuqijsfxbody12","val":""},{"key":"shuqijsbookurl12","val":""},{"key":"shuqijsbookbody12","val":""},{"key":"shuqijssprwurl12","val":""},{"key":"shuqiuserurl13","val":"https://ocean.shuqireader.com/api/jaccount/accountapi/v1/sapi/account/getBindinfo?userId=2128766639&sqSv=1.0&timestamp=1624092909&sign=d7e0e2b2f924801a89d9d448a97b3056&key=sq_h5_gateway"},{"key":"shuqisyurl13","val":"https://render.shuqireader.com/load/resource?sdk=13.3&utdid=YM1UsJpVcq4DALecoRktSXhk&ustatus=0&first_placeid=111111&net_env=wifi&placeid=111111&user_id=2128766639&sn=FEB9984AE00A15987A0409F9250167C7A4826C1F&umidtoken=YM1UsJpVcq4DALecoRktSXhk&msv=8.0.0&brand=Apple&imei=9324FCDF2F9DD575D0E8224719B8CAD15FD19913&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&session=&skinColor=23B383&platform=iOS&ver=210301&mod=iPhone8P&statusBarHeight=44.000000&skinVersion=1&wh=1242x2688&soft_id=21&utype=pre_vip&skinId=999&idfa=40A56DE9-C48B-408A-9AD5-43DD4ADBBAF5"},{"key":"shuqisybody13","val":"appVer=4.3.6.0&imei=9324FCDF2F9DD575D0E8224719B8CAD15FD19913&isNewUser=1&params=%7B%22resources%22%3A%7B%22ShuqiVipEntry%22%3A%7B%7D%2C%22personalCardConfig%22%3A%7B%7D%7D%7D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=e2c85121805b90812822cd6480dabc89&sn=FEB9984AE00A15987A0409F9250167C7A4826C1F&soft_id=21&timestamp=1624092852&user_id=2128766639&ver=210301"},{"key":"shuqispbody13","val":"_public=skinId%3D999%26idfa%3D40A56DE9-C48B-408A-9AD5-43DD4ADBBAF5%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26umidtoken%3DYM1UsJpVcq4DALecoRktSXhk%26user_id%3D2128766639%26sn%3DFEB9984AE00A15987A0409F9250167C7A4826C1F%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D9324FCDF2F9DD575D0E8224719B8CAD15FD19913%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhone8P%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYM1UsJpVcq4DALecoRktSXhk%26utype%3Dpre_vip%26sdk%3D13.3&deliveryId=525&key=sq_app_ad&miniWua=HHnB_g3nOFFepJFpVCkj0nHZpON9lOPr57cFEfz/yY/BCiq4%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=626&sign=D4D61F8AAD0FA3D20838AB93A3C8667C&timestamp=1624092878&userId=2128766639&user_id=2128766639&wua=HIVW_xW5pdJjIXWVWxptY3WKS3RB7C28%2BZ3I2A2zPZwjzKz4ECChyo6BV1Q1jqxnq5M073AIINDbXSrRlQY/gcMd6aZVePZRQgoJd3h7fehj%2Bub0mF9i0Vote/T1weocf3EUqdRpWvq9zyhLWR/kCPyJniEkgnLkjdRu0ldsiQk0zusmNcF42ZDBce8xTcIohVNN4NpDFrsrnG7z5ANRNxFVQKXjXw0H54cF6VzghVBkIfq4%3D"},{"key":"shuqiscbody13","val":""},{"key":"shuqiydbody13","val":""},{"key":"shuqiqdbody13","val":"clientTimestamp=1624092869&position=501&userId=2128766639&signInType=1&wua=HIVW_ynyX55O%2BSsi59qL9H02bx3igSHs6AWR%2BNK%2Fwxg48oh%2FDwunFIFPSd8CXkHn%2BBIjswkp%2Bsc%2Bl6vNMTeuWtYgb8DIe1FXErRYx1kbb6epqe3AVV%2FVvfer1NbL33GUSfcysStvAKRoJKwJFcoyy80NMVDWU2Ke0b4McA5ivmH%2FmfJZSvTn47cawVu80jCIOWovmln3hXYCvpPNPHWn7TCEvft4AgItBAzwQTyy8YwLFzcY%3D&ua=&miniWua=HHnB_rwKjd%2B56xasQHnJcVvmNcn%2BOD%2Fb4pLD%2BaY1aRISkHJw%3D&umidtoken=YM1UsJpVcq4DALecoRktSXhk&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&sign=0b87d04251e5bc444f249c8a353d28d3&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.3%26utdid%3DYM1UsJpVcq4DALecoRktSXhk%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2128766639%26sn%3DFEB9984AE00A15987A0409F9250167C7A4826C1F%26umidtoken%3DYM1UsJpVcq4DALecoRktSXhk%26msv%3D8.0.0%26brand%3DApple%26imei%3D9324FCDF2F9DD575D0E8224719B8CAD15FD19913%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone8P%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D40A56DE9-C48B-408A-9AD5-43DD4ADBBAF5"},{"key":"shuqirwbody13","val":"serviceWorkerOn=1&stopPullRefresh=1&from=ShuqiTab&upf=20368&sdk=13.3&utdid=YM1UsJpVcq4DALecoRktSXhk&ustatus=0&first_placeid=111111&net_env=wifi&placeid=111111&user_id=2128766639&sn=FEB9984AE00A15987A0409F9250167C7A4826C1F&umidtoken=YM1UsJpVcq4DALecoRktSXhk&msv=8.0.0&brand=Apple&imei=9324FCDF2F9DD575D0E8224719B8CAD15FD19913&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=1&ver=210301&mod=iPhone8P&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=40A56DE9-C48B-408A-9AD5-43DD4ADBBAF5&params=%7B%22resources%22%3A%7B%22ShuqiBsDailyTask%22%3A%7B%7D%7D%7D&userId=2128766639&placeId=111111&timestamp=1624092884&sqSv=1.0&sign=4c905f81f3e9b0fba1e0898ed1542f94&key=sq_h5_gateway&_public="},{"key":"shuqifxbody13","val":""},{"key":"shuqisprwurl13","val":"https://ocean.shuqireader.com/api/ad/adserver/v1/api/getAdInfo?appVer=4.3.6.0&placeId=111111&platform=iOS&requestSrc=h5&resourceId=626&timestamp=1624092910&user_id=2128766639&sqSv=1.0&sign=1f06212348447ba0d823af3531177679&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.3%26utdid%3DYM1UsJpVcq4DALecoRktSXhk%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2128766639%26sn%3DFEB9984AE00A15987A0409F9250167C7A4826C1F%26umidtoken%3DYM1UsJpVcq4DALecoRktSXhk%26msv%3D8.0.0%26brand%3DApple%26imei%3D9324FCDF2F9DD575D0E8224719B8CAD15FD19913%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone8P%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D40A56DE9-C48B-408A-9AD5-43DD4ADBBAF5"},{"key":"shuqijlbody13","val":"requestSrc=h5&userId=2128766639&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624092884&sqSv=1.0&sign=1f85fe67006c45072f46146c2cddc4c1&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.3%26utdid%3DYM1UsJpVcq4DALecoRktSXhk%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2128766639%26sn%3DFEB9984AE00A15987A0409F9250167C7A4826C1F%26umidtoken%3DYM1UsJpVcq4DALecoRktSXhk%26msv%3D8.0.0%26brand%3DApple%26imei%3D9324FCDF2F9DD575D0E8224719B8CAD15FD19913%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone8P%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D40A56DE9-C48B-408A-9AD5-43DD4ADBBAF5"},{"key":"shuqisqjlbody13","val":"src=&userId=2128766639&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624092875&sqSv=1.0&sign=006daa2b01319693b091f1c1eeab64d4&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.3%26utdid%3DYM1UsJpVcq4DALecoRktSXhk%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2128766639%26sn%3DFEB9984AE00A15987A0409F9250167C7A4826C1F%26umidtoken%3DYM1UsJpVcq4DALecoRktSXhk%26msv%3D8.0.0%26brand%3DApple%26imei%3D9324FCDF2F9DD575D0E8224719B8CAD15FD19913%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone8P%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D40A56DE9-C48B-408A-9AD5-43DD4ADBBAF5"},{"key":"shuqicjyurl13","val":"https://ocean.shuqireader.com/api/activity/activity/v1/lottery/info?timestamp=1624092913&userId=2128766639&activityId=311&sqSv=1.0&sign=461d6c6ee0f41c77938872f76699e6e7&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.3%26utdid%3DYM1UsJpVcq4DALecoRktSXhk%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2128766639%26sn%3DFEB9984AE00A15987A0409F9250167C7A4826C1F%26umidtoken%3DYM1UsJpVcq4DALecoRktSXhk%26msv%3D8.0.0%26brand%3DApple%26imei%3D9324FCDF2F9DD575D0E8224719B8CAD15FD19913%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone8P%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D40A56DE9-C48B-408A-9AD5-43DD4ADBBAF5"},{"key":"shuqicjcsbody13","val":"_public=skinId%3D999%26idfa%3D40A56DE9-C48B-408A-9AD5-43DD4ADBBAF5%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26umidtoken%3DYM1UsJpVcq4DALecoRktSXhk%26user_id%3D2128766639%26sn%3DFEB9984AE00A15987A0409F9250167C7A4826C1F%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D9324FCDF2F9DD575D0E8224719B8CAD15FD19913%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhone8P%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYM1UsJpVcq4DALecoRktSXhk%26utype%3Dpre_vip%26sdk%3D13.3&deliveryId=711&key=sq_app_ad&miniWua=HHnB_QQGipde%2BYBLCS4OzgGF8LKn2RugDhMMj0ZiVOE9iDpg%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=703&sign=3E9215105969B929594778CABA17BE5C&timestamp=1624092891&userId=2128766639&user_id=2128766639&wua=HIVW_i5gMN5l8R9BmJg43vs4iadlxKGEs0Ns5CB9z47i2M2LlWPPMlc/MHZTXX3M1WS%2BE3mk72EXpRxqy3a1IoxHxRcpwPjE3hZtI0XHr5m8CNHyXAbwA/YeAYGitWIkPOklaj7hJR7aFZMEfy9gYvgzpgKkBgn14PYs7E7GKXr5J%2B89y774IouUurPogLG/1e5vgpHea0cC1oEzAAIBf87LPY/ExpPQD81GIVx11i3hxDng%3D"},{"key":"shuqicjbody13","val":"wua=HIVW_taXJO7e1bn%2BBjx2we0wAHbBJ4JLFHObLKsCmq%2BXUen0QlWqgoLUd0PbxI2gXlxGd%2F6YUqcrIwzM%2FLdhRS%2B%2Bl3P7E6eZcCHSzHCJAsRL8GP%2By5lyl92slcUQ7BzdsahU%2BU2%2FB8TwFUlk9KQC78eRCoFtaekvpLn1zK5a20j646wgSKAZUtS7cm%2BQsmDSOXYbrMf966rdATmexgRZvYnP6nJe2fGdm5Hr0AyLM%2Fosg%2BVU%3D&ua=&userId=2128766639&umidtoken=YM1UsJpVcq4DALecoRktSXhk&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&asac=2A20C07RJ9F51AOEFSNHDR&timestamp=1624092897&activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&sqSv=1.0&sign=57141dad13d011ea2532b6f66df39641&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.3%26utdid%3DYM1UsJpVcq4DALecoRktSXhk%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2128766639%26sn%3DFEB9984AE00A15987A0409F9250167C7A4826C1F%26umidtoken%3DYM1UsJpVcq4DALecoRktSXhk%26msv%3D8.0.0%26brand%3DApple%26imei%3D9324FCDF2F9DD575D0E8224719B8CAD15FD19913%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone8P%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D40A56DE9-C48B-408A-9AD5-43DD4ADBBAF5"},{"key":"shuqijsspbody13","val":""},{"key":"shuqijsydurl13","val":""},{"key":"shuqijsydbody13","val":""},{"key":"shuqijsqdbody13","val":""},{"key":"shuqijsqdspyurl13","val":""},{"key":"shuqijsqdspbody13","val":""},{"key":"shuqijsrwbody13","val":""},{"key":"shuqijsfxbody13","val":""},{"key":"shuqijsbookurl13","val":""},{"key":"shuqijsbookbody13","val":""},{"key":"shuqijssprwurl13","val":""},{"key":"shuqiuserurl14","val":"https://ocean.shuqireader.com/api/jaccount/accountapi/v1/sapi/account/getBindinfo?userId=2127472049&sqSv=1.0&timestamp=1624092989&sign=602b55d5254f24260549a3e7cbc8a8ef&key=sq_h5_gateway"},{"key":"shuqisyurl14","val":"https://render.shuqireader.com/load/resource?sdk=13.2&utdid=YM1UsJpVcq4DALecoRktSXhk&ustatus=0&first_placeid=111111&net_env=3g&placeid=111111&user_id=2127472049&sn=6CD718D9E4E5E2C881B402B4EDE49F37A0282C99&umidtoken=YM1UsJpVcq4DALecoRktSXhk&msv=8.0.0&brand=Apple&imei=74B3EA179A07161BA46AC5FF14203B5C3EBE8469&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=iOS&ver=210301&mod=iPhoneX&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=DB423DF7-262A-4055-9C11-440BCD4CB0CF"},{"key":"shuqisybody14","val":"appVer=4.3.6.0&imei=74B3EA179A07161BA46AC5FF14203B5C3EBE8469&isNewUser=1&params=%7B%22resources%22%3A%7B%22ShuqiVipEntry%22%3A%7B%7D%2C%22personalCardConfig%22%3A%7B%7D%7D%7D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=b121d053eb8844819f02db2a70d455a7&sn=6CD718D9E4E5E2C881B402B4EDE49F37A0282C99&soft_id=21&timestamp=1624092929&user_id=2127472049&ver=210301"},{"key":"shuqispbody14","val":"_public=skinId%3D999%26idfa%3DDB423DF7-262A-4055-9C11-440BCD4CB0CF%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26umidtoken%3DYM1UsJpVcq4DALecoRktSXhk%26user_id%3D2127472049%26sn%3D6CD718D9E4E5E2C881B402B4EDE49F37A0282C99%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D74B3EA179A07161BA46AC5FF14203B5C3EBE8469%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhoneX%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYM1UsJpVcq4DALecoRktSXhk%26utype%3Dpre_vip%26sdk%3D13.2&deliveryId=525&key=sq_app_ad&miniWua=HHnB_KD4wx4lo3AXqb2ov6GWK4WLTzwlmkiqJ7dHIdDh9MCA%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=626&sign=7A18E213EC57089BF72C8782AFF4A9BD&timestamp=1624092955&userId=2127472049&user_id=2127472049&wua=HIVW_j99O%2B1ZdBZuYUub/KKcX5VVXwgq7KW/l5hNIFXk%2BNq11uJ9JygEXvgRvP%2BbffQ4NI1yhP29T5n7WBuKnFjyld5V%2BlLMLS9L7x2JHRTm4QMSUL5VaxWVwZYD1BaOnQ3upvBeCJYgP%2BLK3DiyHqARMteEP9rgp2Pf1pEZb3H%2BHpO5jADSDyej8KUHOEjjw32G0aAgOGuElYEtgOEYHh4GK1K%2B1Xd%2Bs0bgI02ZJdE/6%2BeQ%3D"},{"key":"shuqiscbody14","val":""},{"key":"shuqiydbody14","val":""},{"key":"shuqiqdbody14","val":"clientTimestamp=1624092946&position=501&userId=2127472049&signInType=1&wua=HIVW_BTw5SJYnfbssUi%2FpFvYKXJUxUVS%2FtLpTItg2dDgO4kALeKTvmLqarJ9484YBkMLR5CkUJgbPL4uafyu1wm9yfs5F7yZNWmcOfrOuL70bq6AMbLMHFmj3VqLjldXDQnRpV1nziUA74ijYppfZjbhIZiB0EBuIi1Xj9kT3c4ldBxPeSwNtz%2FJ8y7G7fiEJxHpC8WXMMqf2dIoF%2FceU24QbzOfiZ4xo4sNo%2Fmh%2Fb4PdvKg%3D&ua=&miniWua=HHnB_tWdiC8EeEH5B%2Bk444Xt%2Fhlzb3CazIrVZRtaInZbXuHw%3D&umidtoken=YM1UsJpVcq4DALecoRktSXhk&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&sign=266a8eab954ff82446d5faf1e146e69b&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.2%26utdid%3DYM1UsJpVcq4DALecoRktSXhk%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2127472049%26sn%3D6CD718D9E4E5E2C881B402B4EDE49F37A0282C99%26umidtoken%3DYM1UsJpVcq4DALecoRktSXhk%26msv%3D8.0.0%26brand%3DApple%26imei%3D74B3EA179A07161BA46AC5FF14203B5C3EBE8469%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhoneX%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DDB423DF7-262A-4055-9C11-440BCD4CB0CF"},{"key":"shuqirwbody14","val":"serviceWorkerOn=1&stopPullRefresh=1&from=ShuqiTab&upf=20368&sdk=13.2&utdid=YM1UsJpVcq4DALecoRktSXhk&ustatus=0&first_placeid=111111&net_env=3g&placeid=111111&user_id=2127472049&sn=6CD718D9E4E5E2C881B402B4EDE49F37A0282C99&umidtoken=YM1UsJpVcq4DALecoRktSXhk&msv=8.0.0&brand=Apple&imei=74B3EA179A07161BA46AC5FF14203B5C3EBE8469&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=1&ver=210301&mod=iPhoneX&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=DB423DF7-262A-4055-9C11-440BCD4CB0CF&params=%7B%22resources%22%3A%7B%22ShuqiBsDailyTask%22%3A%7B%7D%7D%7D&userId=2127472049&placeId=111111&timestamp=1624092961&sqSv=1.0&sign=94b155dc1f67524ad6e742981ab90393&key=sq_h5_gateway&_public="},{"key":"shuqifxbody14","val":""},{"key":"shuqisprwurl14","val":"https://ocean.shuqireader.com/api/ad/adserver/v1/api/getAdInfo?appVer=4.3.6.0&placeId=111111&platform=iOS&requestSrc=h5&resourceId=626&timestamp=1624092989&user_id=2127472049&sqSv=1.0&sign=af4d6b075b91da422e4577fba1afdfe3&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.2%26utdid%3DYM1UsJpVcq4DALecoRktSXhk%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2127472049%26sn%3D6CD718D9E4E5E2C881B402B4EDE49F37A0282C99%26umidtoken%3DYM1UsJpVcq4DALecoRktSXhk%26msv%3D8.0.0%26brand%3DApple%26imei%3D74B3EA179A07161BA46AC5FF14203B5C3EBE8469%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhoneX%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DDB423DF7-262A-4055-9C11-440BCD4CB0CF"},{"key":"shuqijlbody14","val":"requestSrc=h5&userId=2127472049&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624092961&sqSv=1.0&sign=d62ed6b50da37905954da75189518248&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.2%26utdid%3DYM1UsJpVcq4DALecoRktSXhk%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2127472049%26sn%3D6CD718D9E4E5E2C881B402B4EDE49F37A0282C99%26umidtoken%3DYM1UsJpVcq4DALecoRktSXhk%26msv%3D8.0.0%26brand%3DApple%26imei%3D74B3EA179A07161BA46AC5FF14203B5C3EBE8469%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhoneX%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DDB423DF7-262A-4055-9C11-440BCD4CB0CF"},{"key":"shuqisqjlbody14","val":"src=&userId=2127472049&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624092952&sqSv=1.0&sign=81b4337747598eff718a2e9d6440bc73&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.2%26utdid%3DYM1UsJpVcq4DALecoRktSXhk%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2127472049%26sn%3D6CD718D9E4E5E2C881B402B4EDE49F37A0282C99%26umidtoken%3DYM1UsJpVcq4DALecoRktSXhk%26msv%3D8.0.0%26brand%3DApple%26imei%3D74B3EA179A07161BA46AC5FF14203B5C3EBE8469%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhoneX%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DDB423DF7-262A-4055-9C11-440BCD4CB0CF"},{"key":"shuqicjyurl14","val":"https://ocean.shuqireader.com/api/activity/activity/v1/lottery/info?timestamp=1624092991&userId=2127472049&activityId=311&sqSv=1.0&sign=98b0a296729017dffdcf35cee8109031&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.2%26utdid%3DYM1UsJpVcq4DALecoRktSXhk%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2127472049%26sn%3D6CD718D9E4E5E2C881B402B4EDE49F37A0282C99%26umidtoken%3DYM1UsJpVcq4DALecoRktSXhk%26msv%3D8.0.0%26brand%3DApple%26imei%3D74B3EA179A07161BA46AC5FF14203B5C3EBE8469%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhoneX%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DDB423DF7-262A-4055-9C11-440BCD4CB0CF"},{"key":"shuqicjcsbody14","val":"_public=skinId%3D999%26idfa%3DDB423DF7-262A-4055-9C11-440BCD4CB0CF%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26umidtoken%3DYM1UsJpVcq4DALecoRktSXhk%26user_id%3D2127472049%26sn%3D6CD718D9E4E5E2C881B402B4EDE49F37A0282C99%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D74B3EA179A07161BA46AC5FF14203B5C3EBE8469%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhoneX%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYM1UsJpVcq4DALecoRktSXhk%26utype%3Dpre_vip%26sdk%3D13.2&deliveryId=711&key=sq_app_ad&miniWua=HHnB_E29bHf/zEJNu/rvuaTrVhr6dDIDzFFKlKmjJ79Br%2BzU%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=703&sign=E96700A8BB9CC5B6EBB48907A674A58C&timestamp=1624092969&userId=2127472049&user_id=2127472049&wua=HIVW_drEiFKN9PQuYEfYmQWlbZZsAe6d2QNX3jAYGVTJgvIZWsE/ZYeVx%2BynD6OVNTaHGnDWQ65LcRZ%2BkDA2m4vajrsxPMJbUJJFGsoFDiJqr1FuDE9jT%2BqbvQXZHhv640zsiByticeErWUEXBSwZ29ln9hl35WF6Ecil9np68gGBEt6NokPRLrIQhwSXfAVqw6PgFfqKsHdfztcq15BQnvN1QztnG%2BZ0w%2BWdT7rLbDdxK/I%3D"},{"key":"shuqicjbody14","val":"wua=HIVW_qmaLX1KCPyHF0Idw0xKGWbeNiKfH4pIaot3EwqzhTsffEl1Up4WG4uRnute%2Fv0ewd0%2F6dniqXIfJKI%2BfUNnB43CniWyp2fUkPMydi5QwyWpn9NQXrezGFXgRQEOl0KWv7%2BU0xtMIZ77Cb8wyMgVAReAPHLTUfdpc0y%2F7KK5njZvk%2BkuTd9UO%2BRQ5JVMue1DkyNaigVXwIQjy4fwwuiVHz7wgAsegNpNdk9%2FpmBgIQlA%3D&ua=&userId=2127472049&umidtoken=YM1UsJpVcq4DALecoRktSXhk&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&asac=2A20C07RJ9F51AOEFSNHDR&timestamp=1624092975&activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&sqSv=1.0&sign=44cd3686e5bf4ecff837c76920b58a69&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.2%26utdid%3DYM1UsJpVcq4DALecoRktSXhk%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2127472049%26sn%3D6CD718D9E4E5E2C881B402B4EDE49F37A0282C99%26umidtoken%3DYM1UsJpVcq4DALecoRktSXhk%26msv%3D8.0.0%26brand%3DApple%26imei%3D74B3EA179A07161BA46AC5FF14203B5C3EBE8469%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhoneX%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DDB423DF7-262A-4055-9C11-440BCD4CB0CF"},{"key":"shuqijsspbody14","val":""},{"key":"shuqijsydurl14","val":""},{"key":"shuqijsydbody14","val":""},{"key":"shuqijsqdbody14","val":""},{"key":"shuqijsqdspyurl14","val":""},{"key":"shuqijsqdspbody14","val":""},{"key":"shuqijsrwbody14","val":""},{"key":"shuqijsfxbody14","val":""},{"key":"shuqijsbookurl14","val":""},{"key":"shuqijsbookbody14","val":""},{"key":"shuqijssprwurl14","val":""},{"key":"shuqiuserurl15","val":"https://ocean.shuqireader.com/api/jaccount/accountapi/v1/sapi/account/getBindinfo?userId=2129115713&sqSv=1.0&timestamp=1624093061&sign=e9d7b69fd7a2d557e3b84a8115e8901b&key=sq_h5_gateway"},{"key":"shuqisyurl15","val":"https://render.shuqireader.com/load/resource?sdk=13.2.3&utdid=YM1UwdUzTdYDADlW7vHK%2Bw%2Fm&ustatus=0&first_placeid=111111&net_env=3g&placeid=111111&user_id=2129115713&sn=916E3C0F5FEC5539B83FFF03F6F7AA0C5BA08399&umidtoken=YM1UwdUzTdYDADlW7vHK%2Bw%2Fm&msv=8.0.0&brand=Apple&imei=276E72FD8D3F464C154ADEA200986CE62F3927F1&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&session=&skinColor=23B383&platform=iOS&ver=210301&mod=iPad4G&statusBarHeight=44.000000&skinVersion=1&wh=1242x2688&soft_id=21&utype=pre_vip&skinId=999&idfa=E4749B8C-901E-498B-886D-659401B53988"},{"key":"shuqisybody15","val":"appVer=4.3.6.0&imei=276E72FD8D3F464C154ADEA200986CE62F3927F1&isNewUser=1&params=%7B%22resources%22%3A%7B%22ShuqiVipEntry%22%3A%7B%7D%2C%22personalCardConfig%22%3A%7B%7D%7D%7D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=8adf3cba71c940fe06da98a300260b8e&sn=916E3C0F5FEC5539B83FFF03F6F7AA0C5BA08399&soft_id=21&timestamp=1624093007&user_id=2129115713&ver=210301"},{"key":"shuqispbody15","val":"_public=skinId%3D999%26idfa%3DE4749B8C-901E-498B-886D-659401B53988%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26umidtoken%3DYM1UwdUzTdYDADlW7vHK%2Bw/m%26user_id%3D2129115713%26sn%3D916E3C0F5FEC5539B83FFF03F6F7AA0C5BA08399%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D276E72FD8D3F464C154ADEA200986CE62F3927F1%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPad4G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYM1UwdUzTdYDADlW7vHK%2Bw/m%26utype%3Dpre_vip%26sdk%3D13.2.3&deliveryId=525&key=sq_app_ad&miniWua=HHnB_WFK6HTW%2BlvQLTsp%2BSzCDWIgD4ZiU94xUo2yxzXf3qPM%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=626&sign=BE95988A06E1833521AD67021714011E&timestamp=1624093037&userId=2129115713&user_id=2129115713&wua=HIVW_H2IYiiIyvVz7a3jJ8Xs6Md7WgK1hTDDkfz5TijMR1bqjV5nAuwE7LcxFmPXDnV6P8gKwr%2BMq0201xwYotd8eG%2B31N5TPiNwBuXb8tKttBfLgZ4jOz7kmZBVPqBSffnVM6TVDh7A2DGOVX7i17Ns2ruFFtKh0pcbWehP2sxlKNdR5anX9MVnxp17eU38B69Zy4dfkMtKHf/zg%2Bkj5xvQZtyHkYnUvUZGh1U9Ldvwk1fA%3D"},{"key":"shuqiscbody15","val":""},{"key":"shuqiydbody15","val":""},{"key":"shuqiqdbody15","val":"clientTimestamp=1624093029&position=501&userId=2129115713&signInType=1&wua=HIVW_5QWxODC9PTwfh4afaDyoYTz3r7Efk7WJNZbPPK2qAdbQVWmQh4onH3dVnIO%2FbwMrWO7hJSqzkKKVcgAsNtBIzcR4858%2BvDG8wKVoPs%2BOjnezWXzeSyfWE5Ovj3hKgobdPVxPjq2RntqvToupX2TEvmvdOtO4CTh83SiZqSu%2FAGqzAeE9m1kUM%2BQxm%2FB%2Bu1Z1gDFVe%2FYQhJFSbJDoMLAmpaPj%2FgWiZrewirf60mKlwb4%3D&ua=&miniWua=HHnB_qzcL7I5Lu5KC0yobY6tGf2kMU3TiCOQWJPj6Ivndb4w%3D&umidtoken=YM1UwdUzTdYDADlW7vHK%2Bw%2Fm&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&sign=53f02aaabb5992b7d0dee9b8c2049e73&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.2.3%26utdid%3DYM1UwdUzTdYDADlW7vHK%252Bw%252Fm%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2129115713%26sn%3D916E3C0F5FEC5539B83FFF03F6F7AA0C5BA08399%26umidtoken%3DYM1UwdUzTdYDADlW7vHK%252Bw%252Fm%26msv%3D8.0.0%26brand%3DApple%26imei%3D276E72FD8D3F464C154ADEA200986CE62F3927F1%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad4G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DE4749B8C-901E-498B-886D-659401B53988"},{"key":"shuqirwbody15","val":"serviceWorkerOn=1&stopPullRefresh=1&from=ShuqiTab&upf=20368&sdk=13.2.3&utdid=YM1UwdUzTdYDADlW7vHK%2Bw%2Fm&ustatus=0&first_placeid=111111&net_env=3g&placeid=111111&user_id=2129115713&sn=916E3C0F5FEC5539B83FFF03F6F7AA0C5BA08399&umidtoken=YM1UwdUzTdYDADlW7vHK%2Bw%2Fm&msv=8.0.0&brand=Apple&imei=276E72FD8D3F464C154ADEA200986CE62F3927F1&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&session=&skinColor=23B383&platform=1&ver=210301&mod=iPad4G&statusBarHeight=44.000000&skinVersion=1&wh=1242x2688&soft_id=21&utype=pre_vip&skinId=999&idfa=E4749B8C-901E-498B-886D-659401B53988&params=%7B%22resources%22%3A%7B%22ShuqiBsDailyTask%22%3A%7B%7D%7D%7D&userId=2129115713&placeId=111111&timestamp=1624093041&sqSv=1.0&sign=462a1d12b448adb165887593dc26c5c6&key=sq_h5_gateway&_public="},{"key":"shuqifxbody15","val":""},{"key":"shuqisprwurl15","val":"https://ocean.shuqireader.com/api/ad/adserver/v1/api/getAdInfo?appVer=4.3.6.0&placeId=111111&platform=iOS&requestSrc=h5&resourceId=626&timestamp=1624093061&user_id=2129115713&sqSv=1.0&sign=8bc1b822da73027694ae62278dde5189&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.2.3%26utdid%3DYM1UwdUzTdYDADlW7vHK%252Bw%252Fm%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2129115713%26sn%3D916E3C0F5FEC5539B83FFF03F6F7AA0C5BA08399%26umidtoken%3DYM1UwdUzTdYDADlW7vHK%252Bw%252Fm%26msv%3D8.0.0%26brand%3DApple%26imei%3D276E72FD8D3F464C154ADEA200986CE62F3927F1%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad4G%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DE4749B8C-901E-498B-886D-659401B53988"},{"key":"shuqijlbody15","val":"requestSrc=h5&userId=2129115713&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624093041&sqSv=1.0&sign=74041cec51bd4715ad2f07af478a4419&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.2.3%26utdid%3DYM1UwdUzTdYDADlW7vHK%252Bw%252Fm%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2129115713%26sn%3D916E3C0F5FEC5539B83FFF03F6F7AA0C5BA08399%26umidtoken%3DYM1UwdUzTdYDADlW7vHK%252Bw%252Fm%26msv%3D8.0.0%26brand%3DApple%26imei%3D276E72FD8D3F464C154ADEA200986CE62F3927F1%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad4G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DE4749B8C-901E-498B-886D-659401B53988"},{"key":"shuqisqjlbody15","val":"src=&userId=2129115713&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624093034&sqSv=1.0&sign=18811dab372194e691ac5455e8e5f41f&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.2.3%26utdid%3DYM1UwdUzTdYDADlW7vHK%252Bw%252Fm%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2129115713%26sn%3D916E3C0F5FEC5539B83FFF03F6F7AA0C5BA08399%26umidtoken%3DYM1UwdUzTdYDADlW7vHK%252Bw%252Fm%26msv%3D8.0.0%26brand%3DApple%26imei%3D276E72FD8D3F464C154ADEA200986CE62F3927F1%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad4G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DE4749B8C-901E-498B-886D-659401B53988"},{"key":"shuqicjyurl15","val":"https://ocean.shuqireader.com/api/activity/activity/v1/lottery/info?timestamp=1624093063&userId=2129115713&activityId=311&sqSv=1.0&sign=ccd9300fcd4299f7e1815dee4f833695&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.2.3%26utdid%3DYM1UwdUzTdYDADlW7vHK%252Bw%252Fm%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2129115713%26sn%3D916E3C0F5FEC5539B83FFF03F6F7AA0C5BA08399%26umidtoken%3DYM1UwdUzTdYDADlW7vHK%252Bw%252Fm%26msv%3D8.0.0%26brand%3DApple%26imei%3D276E72FD8D3F464C154ADEA200986CE62F3927F1%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad4G%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DE4749B8C-901E-498B-886D-659401B53988"},{"key":"shuqicjcsbody15","val":"_public=skinId%3D999%26idfa%3DE4749B8C-901E-498B-886D-659401B53988%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26umidtoken%3DYM1UwdUzTdYDADlW7vHK%2Bw/m%26user_id%3D2129115713%26sn%3D916E3C0F5FEC5539B83FFF03F6F7AA0C5BA08399%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D276E72FD8D3F464C154ADEA200986CE62F3927F1%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPad4G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYM1UwdUzTdYDADlW7vHK%2Bw/m%26utype%3Dpre_vip%26sdk%3D13.2.3&deliveryId=711&key=sq_app_ad&miniWua=HHnB_tCCb%2BzVpLmAeVP5lhnNx8wteDjtGoFXHwmVxeubXX4c%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=703&sign=DCF33DFB82F3F327DC8E84E36E267152&timestamp=1624093047&userId=2129115713&user_id=2129115713&wua=HIVW_UaatTafildAwlwZ0x3NFP1%2BzpO5pNo85qGk8Pl5jb9r2aXFtTVYGSyi/LLKr3RuKSUSwJYqB7thuqh5mwsn/w9EbvJbT9GMPlma67ILx%2BoQ8QWSzqBTquycAgKp4CSdc3dx5P%2B2bsfYPYkdNFJT9ng%2B%2BF3mD3uIi49K67shMR1slezIJeuerEnyOFAnVmXG%2BDiLVlWf2q3Ua/1bAipR1vZ6B2qRHnpwJUGxhHVbQ2zs%3D"},{"key":"shuqicjbody15","val":"wua=HIVW_0n2mVSwJA1ZOU7RUmgfvGoDpZPlQX%2BtjQJmnAT3xGTshn4DCfO35l8Imz%2FGk2vndLluMM8vg87A6LBJr91OQLgDA%2FW62jGyB%2BjK2KaDIjSnLAo5x%2FGItCV4hIFx9iUn087lP1bTc3QeKyJ3YACbjezcUOtD64r8AEJBeqkC%2B1E9yj54ptywjUZgdO5UszTdbxO8tRgw0JT4UgyoY5bYJrBBQJzKZp4OuudTJBkhCr%2FA%3D&ua=&userId=2129115713&umidtoken=YM1UwdUzTdYDADlW7vHK%2Bw%2Fm&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&asac=2A20C07RJ9F51AOEFSNHDR&timestamp=1624093050&activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&sqSv=1.0&sign=71033051f9c3c8a1f4a6fded043221ca&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.2.3%26utdid%3DYM1UwdUzTdYDADlW7vHK%252Bw%252Fm%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2129115713%26sn%3D916E3C0F5FEC5539B83FFF03F6F7AA0C5BA08399%26umidtoken%3DYM1UwdUzTdYDADlW7vHK%252Bw%252Fm%26msv%3D8.0.0%26brand%3DApple%26imei%3D276E72FD8D3F464C154ADEA200986CE62F3927F1%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad4G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DE4749B8C-901E-498B-886D-659401B53988"},{"key":"shuqijsspbody15","val":""},{"key":"shuqijsydurl15","val":""},{"key":"shuqijsydbody15","val":""},{"key":"shuqijsqdbody15","val":""},{"key":"shuqijsqdspyurl15","val":""},{"key":"shuqijsqdspbody15","val":""},{"key":"shuqijsrwbody15","val":""},{"key":"shuqijsfxbody15","val":""},{"key":"shuqijsbookurl15","val":""},{"key":"shuqijsbookbody15","val":""},{"key":"shuqijssprwurl15","val":""},{"key":"shuqiuserurl16","val":""},{"key":"shuqisyurl16","val":""},{"key":"shuqisybody16","val":""},{"key":"shuqispbody16","val":""},{"key":"shuqiscbody16","val":""},{"key":"shuqiydbody16","val":""},{"key":"shuqiqdbody16","val":""},{"key":"shuqirwbody16","val":""},{"key":"shuqifxbody16","val":""},{"key":"shuqisprwurl16","val":""},{"key":"shuqijlbody16","val":""},{"key":"shuqisqjlbody16","val":""},{"key":"shuqicjyurl16","val":""},{"key":"shuqicjcsbody16","val":""},{"key":"shuqicjbody16","val":""},{"key":"shuqijsspbody16","val":""},{"key":"shuqijsydurl16","val":""},{"key":"shuqijsydbody16","val":""},{"key":"shuqijsqdbody16","val":""},{"key":"shuqijsqdspyurl16","val":""},{"key":"shuqijsqdspbody16","val":""},{"key":"shuqijsrwbody16","val":""},{"key":"shuqijsfxbody16","val":""},{"key":"shuqijsbookurl16","val":""},{"key":"shuqijsbookbody16","val":""},{"key":"shuqijssprwurl16","val":""},{"key":"shuqiuserurl17","val":""},{"key":"shuqisyurl17","val":""},{"key":"shuqisybody17","val":""},{"key":"shuqispbody17","val":""},{"key":"shuqiscbody17","val":""},{"key":"shuqiydbody17","val":""},{"key":"shuqiqdbody17","val":""},{"key":"shuqirwbody17","val":""},{"key":"shuqifxbody17","val":""},{"key":"shuqisprwurl17","val":""},{"key":"shuqijlbody17","val":""},{"key":"shuqisqjlbody17","val":""},{"key":"shuqicjyurl17","val":""},{"key":"shuqicjcsbody17","val":""},{"key":"shuqicjbody17","val":""},{"key":"shuqijsspbody17","val":""},{"key":"shuqijsydurl17","val":""},{"key":"shuqijsydbody17","val":""},{"key":"shuqijsqdbody17","val":""},{"key":"shuqijsqdspyurl17","val":""},{"key":"shuqijsqdspbody17","val":""},{"key":"shuqijsrwbody17","val":""},{"key":"shuqijsfxbody17","val":""},{"key":"shuqijsbookurl17","val":""},{"key":"shuqijsbookbody17","val":""},{"key":"shuqijssprwurl17","val":""},{"key":"shuqiuserurl18","val":""},{"key":"shuqisyurl18","val":""},{"key":"shuqisybody18","val":""},{"key":"shuqispbody18","val":""},{"key":"shuqiscbody18","val":""},{"key":"shuqiydbody18","val":""},{"key":"shuqiqdbody18","val":""},{"key":"shuqirwbody18","val":""},{"key":"shuqifxbody18","val":""},{"key":"shuqisprwurl18","val":""},{"key":"shuqijlbody18","val":""},{"key":"shuqisqjlbody18","val":""},{"key":"shuqicjyurl18","val":""},{"key":"shuqicjcsbody18","val":""},{"key":"shuqicjbody18","val":""},{"key":"shuqijsspbody18","val":""},{"key":"shuqijsydurl18","val":""},{"key":"shuqijsydbody18","val":""},{"key":"shuqijsqdbody18","val":""},{"key":"shuqijsqdspyurl18","val":""},{"key":"shuqijsqdspbody18","val":""},{"key":"shuqijsrwbody18","val":""},{"key":"shuqijsfxbody18","val":""},{"key":"shuqijsbookurl18","val":""},{"key":"shuqijsbookbody18","val":""},{"key":"shuqijssprwurl18","val":""},{"key":"shuqiuserurl19","val":""},{"key":"shuqisyurl19","val":""},{"key":"shuqisybody19","val":""},{"key":"shuqispbody19","val":""},{"key":"shuqiscbody19","val":""},{"key":"shuqiydbody19","val":""},{"key":"shuqiqdbody19","val":""},{"key":"shuqirwbody19","val":""},{"key":"shuqifxbody19","val":""},{"key":"shuqisprwurl19","val":""},{"key":"shuqijlbody19","val":""},{"key":"shuqisqjlbody19","val":""},{"key":"shuqicjyurl19","val":""},{"key":"shuqicjcsbody19","val":""},{"key":"shuqicjbody19","val":""},{"key":"shuqijsspbody19","val":""},{"key":"shuqijsydurl19","val":""},{"key":"shuqijsydbody19","val":""},{"key":"shuqijsqdbody19","val":""},{"key":"shuqijsqdspyurl19","val":""},{"key":"shuqijsqdspbody19","val":""},{"key":"shuqijsrwbody19","val":""},{"key":"shuqijsfxbody19","val":""},{"key":"shuqijsbookurl19","val":""},{"key":"shuqijsbookbody19","val":""},{"key":"shuqijssprwurl19","val":""},{"key":"shuqiuserurl20","val":""},{"key":"shuqisyurl20","val":""},{"key":"shuqisybody20","val":""},{"key":"shuqispbody20","val":""},{"key":"shuqiscbody20","val":""},{"key":"shuqiydbody20","val":""},{"key":"shuqiqdbody20","val":""},{"key":"shuqirwbody20","val":""},{"key":"shuqifxbody20","val":""},{"key":"shuqisprwurl20","val":""},{"key":"shuqijlbody20","val":""},{"key":"shuqisqjlbody20","val":""},{"key":"shuqicjyurl20","val":""},{"key":"shuqicjcsbody20","val":""},{"key":"shuqicjbody20","val":""},{"key":"shuqijsspbody20","val":""},{"key":"shuqijsydurl20","val":""},{"key":"shuqijsydbody20","val":""},{"key":"shuqijsqdbody20","val":""},{"key":"shuqijsqdspyurl20","val":""},{"key":"shuqijsqdspbody20","val":""},{"key":"shuqijsrwbody20","val":""},{"key":"shuqijsfxbody20","val":""},{"key":"shuqijsbookurl20","val":""},{"key":"shuqijsbookbody20","val":""},{"key":"shuqijssprwurl20","val":""}],"sessions":[],"isLoaded":true};
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
