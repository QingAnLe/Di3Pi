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
const COOKIE ={"id":"shuqi","name":"书旗小说APP","keys":["shuqiuserurl","shuqisyurl","shuqisybody","shuqispbody","shuqiscbody","shuqiydbody","shuqiqdbody","shuqirwbody","shuqifxbody","shuqisprwurl","shuqijlbody","shuqisqjlbody","shuqicjyurl","shuqicjcsbody","shuqicjbody","shuqijsspbody","shuqijsydurl","shuqijsydbody","shuqijsqdbody","shuqijsqdspyurl","shuqijsqdspbody","shuqijsrwbody","shuqijsfxbody","shuqijsbookurl","shuqijsbookbody","shuqijssprwurl","shuqiuserurl2","shuqisyurl2","shuqisybody2","shuqispbody2","shuqiscbody2","shuqiydbody2","shuqiqdbody2","shuqirwbody2","shuqifxbody2","shuqisprwurl2","shuqijlbody2","shuqisqjlbody2","shuqicjyurl2","shuqicjcsbody2","shuqicjbody2","shuqijsspbody2","shuqijsydurl2","shuqijsydbody2","shuqijsqdbody2","shuqijsqdspyurl2","shuqijsqdspbody2","shuqijsrwbody2","shuqijsfxbody2","shuqijsbookurl2","shuqijsbookbody2","shuqijssprwurl2","shuqiuserurl3","shuqisyurl3","shuqisybody3","shuqispbody3","shuqiscbody3","shuqiydbody3","shuqiqdbody3","shuqirwbody3","shuqifxbody3","shuqisprwurl3","shuqijlbody3","shuqisqjlbody3","shuqicjyurl3","shuqicjcsbody3","shuqicjbody3","shuqijsspbody3","shuqijsydurl3","shuqijsydbody3","shuqijsqdbody3","shuqijsqdspyurl3","shuqijsqdspbody3","shuqijsrwbody3","shuqijsfxbody3","shuqijsbookurl3","shuqijsbookbody3","shuqijssprwurl3","shuqiuserurl4","shuqisyurl4","shuqisybody4","shuqispbody4","shuqiscbody4","shuqiydbody4","shuqiqdbody4","shuqirwbody4","shuqifxbody4","shuqisprwurl4","shuqijlbody4","shuqisqjlbody4","shuqicjyurl4","shuqicjcsbody4","shuqicjbody4","shuqijsspbody4","shuqijsydurl4","shuqijsydbody4","shuqijsqdbody4","shuqijsqdspyurl4","shuqijsqdspbody4","shuqijsrwbody4","shuqijsfxbody4","shuqijsbookurl4","shuqijsbookbody4","shuqijssprwurl4","shuqiuserurl5","shuqisyurl5","shuqisybody5","shuqispbody5","shuqiscbody5","shuqiydbody5","shuqiqdbody5","shuqirwbody5","shuqifxbody5","shuqisprwurl5","shuqijlbody5","shuqisqjlbody5","shuqicjyurl5","shuqicjcsbody5","shuqicjbody5","shuqijsspbody5","shuqijsydurl5","shuqijsydbody5","shuqijsqdbody5","shuqijsqdspyurl5","shuqijsqdspbody5","shuqijsrwbody5","shuqijsfxbody5","shuqijsbookurl5","shuqijsbookbody5","shuqijssprwurl5","shuqiuserurl6","shuqisyurl6","shuqisybody6","shuqispbody6","shuqiscbody6","shuqiydbody6","shuqiqdbody6","shuqirwbody6","shuqifxbody6","shuqisprwurl6","shuqijlbody6","shuqisqjlbody6","shuqicjyurl6","shuqicjcsbody6","shuqicjbody6","shuqijsspbody6","shuqijsydurl6","shuqijsydbody6","shuqijsqdbody6","shuqijsqdspyurl6","shuqijsqdspbody6","shuqijsrwbody6","shuqijsfxbody6","shuqijsbookurl6","shuqijsbookbody6","shuqijssprwurl6","shuqiuserurl7","shuqisyurl7","shuqisybody7","shuqispbody7","shuqiscbody7","shuqiydbody7","shuqiqdbody7","shuqirwbody7","shuqifxbody7","shuqisprwurl7","shuqijlbody7","shuqisqjlbody7","shuqicjyurl7","shuqicjcsbody7","shuqicjbody7","shuqijsspbody7","shuqijsydurl7","shuqijsydbody7","shuqijsqdbody7","shuqijsqdspyurl7","shuqijsqdspbody7","shuqijsrwbody7","shuqijsfxbody7","shuqijsbookurl7","shuqijsbookbody7","shuqijssprwurl7","shuqiuserurl8","shuqisyurl8","shuqisybody8","shuqispbody8","shuqiscbody8","shuqiydbody8","shuqiqdbody8","shuqirwbody8","shuqifxbody8","shuqisprwurl8","shuqijlbody8","shuqisqjlbody8","shuqicjyurl8","shuqicjcsbody8","shuqicjbody8","shuqijsspbody8","shuqijsydurl8","shuqijsydbody8","shuqijsqdbody8","shuqijsqdspyurl8","shuqijsqdspbody8","shuqijsrwbody8","shuqijsfxbody8","shuqijsbookurl8","shuqijsbookbody8","shuqijssprwurl8","shuqiuserurl9","shuqisyurl9","shuqisybody9","shuqispbody9","shuqiscbody9","shuqiydbody9","shuqiqdbody9","shuqirwbody9","shuqifxbody9","shuqisprwurl9","shuqijlbody9","shuqisqjlbody9","shuqicjyurl9","shuqicjcsbody9","shuqicjbody9","shuqijsspbody9","shuqijsydurl9","shuqijsydbody9","shuqijsqdbody9","shuqijsqdspyurl9","shuqijsqdspbody9","shuqijsrwbody9","shuqijsfxbody9","shuqijsbookurl9","shuqijsbookbody9","shuqijssprwurl9","shuqiuserurl10","shuqisyurl10","shuqisybody10","shuqispbody10","shuqiscbody10","shuqiydbody10","shuqiqdbody10","shuqirwbody10","shuqifxbody10","shuqisprwurl10","shuqijlbody10","shuqisqjlbody10","shuqicjyurl10","shuqicjcsbody10","shuqicjbody10","shuqijsspbody10","shuqijsydurl10","shuqijsydbody10","shuqijsqdbody10","shuqijsqdspyurl10","shuqijsqdspbody10","shuqijsrwbody10","shuqijsfxbody10","shuqijsbookurl10","shuqijsbookbody10","shuqijssprwurl10","shuqiuserurl11","shuqisyurl11","shuqisybody11","shuqispbody11","shuqiscbody11","shuqiydbody11","shuqiqdbody11","shuqirwbody11","shuqifxbody11","shuqisprwurl11","shuqijlbody11","shuqisqjlbody11","shuqicjyurl11","shuqicjcsbody11","shuqicjbody11","shuqijsspbody11","shuqijsydurl11","shuqijsydbody11","shuqijsqdbody11","shuqijsqdspyurl11","shuqijsqdspbody11","shuqijsrwbody11","shuqijsfxbody11","shuqijsbookurl11","shuqijsbookbody11","shuqijssprwurl11","shuqiuserurl12","shuqisyurl12","shuqisybody12","shuqispbody12","shuqiscbody12","shuqiydbody12","shuqiqdbody12","shuqirwbody12","shuqifxbody12","shuqisprwurl12","shuqijlbody12","shuqisqjlbody12","shuqicjyurl12","shuqicjcsbody12","shuqicjbody12","shuqijsspbody12","shuqijsydurl12","shuqijsydbody12","shuqijsqdbody12","shuqijsqdspyurl12","shuqijsqdspbody12","shuqijsrwbody12","shuqijsfxbody12","shuqijsbookurl12","shuqijsbookbody12","shuqijssprwurl12","shuqiuserurl13","shuqisyurl13","shuqisybody13","shuqispbody13","shuqiscbody13","shuqiydbody13","shuqiqdbody13","shuqirwbody13","shuqifxbody13","shuqisprwurl13","shuqijlbody13","shuqisqjlbody13","shuqicjyurl13","shuqicjcsbody13","shuqicjbody13","shuqijsspbody13","shuqijsydurl13","shuqijsydbody13","shuqijsqdbody13","shuqijsqdspyurl13","shuqijsqdspbody13","shuqijsrwbody13","shuqijsfxbody13","shuqijsbookurl13","shuqijsbookbody13","shuqijssprwurl13","shuqiuserurl14","shuqisyurl14","shuqisybody14","shuqispbody14","shuqiscbody14","shuqiydbody14","shuqiqdbody14","shuqirwbody14","shuqifxbody14","shuqisprwurl14","shuqijlbody14","shuqisqjlbody14","shuqicjyurl14","shuqicjcsbody14","shuqicjbody14","shuqijsspbody14","shuqijsydurl14","shuqijsydbody14","shuqijsqdbody14","shuqijsqdspyurl14","shuqijsqdspbody14","shuqijsrwbody14","shuqijsfxbody14","shuqijsbookurl14","shuqijsbookbody14","shuqijssprwurl14","shuqiuserurl15","shuqisyurl15","shuqisybody15","shuqispbody15","shuqiscbody15","shuqiydbody15","shuqiqdbody15","shuqirwbody15","shuqifxbody15","shuqisprwurl15","shuqijlbody15","shuqisqjlbody15","shuqicjyurl15","shuqicjcsbody15","shuqicjbody15","shuqijsspbody15","shuqijsydurl15","shuqijsydbody15","shuqijsqdbody15","shuqijsqdspyurl15","shuqijsqdspbody15","shuqijsrwbody15","shuqijsfxbody15","shuqijsbookurl15","shuqijsbookbody15","shuqijssprwurl15","shuqiuserurl16","shuqisyurl16","shuqisybody16","shuqispbody16","shuqiscbody16","shuqiydbody16","shuqiqdbody16","shuqirwbody16","shuqifxbody16","shuqisprwurl16","shuqijlbody16","shuqisqjlbody16","shuqicjyurl16","shuqicjcsbody16","shuqicjbody16","shuqijsspbody16","shuqijsydurl16","shuqijsydbody16","shuqijsqdbody16","shuqijsqdspyurl16","shuqijsqdspbody16","shuqijsrwbody16","shuqijsfxbody16","shuqijsbookurl16","shuqijsbookbody16","shuqijssprwurl16","shuqiuserurl17","shuqisyurl17","shuqisybody17","shuqispbody17","shuqiscbody17","shuqiydbody17","shuqiqdbody17","shuqirwbody17","shuqifxbody17","shuqisprwurl17","shuqijlbody17","shuqisqjlbody17","shuqicjyurl17","shuqicjcsbody17","shuqicjbody17","shuqijsspbody17","shuqijsydurl17","shuqijsydbody17","shuqijsqdbody17","shuqijsqdspyurl17","shuqijsqdspbody17","shuqijsrwbody17","shuqijsfxbody17","shuqijsbookurl17","shuqijsbookbody17","shuqijssprwurl17","shuqiuserurl18","shuqisyurl18","shuqisybody18","shuqispbody18","shuqiscbody18","shuqiydbody18","shuqiqdbody18","shuqirwbody18","shuqifxbody18","shuqisprwurl18","shuqijlbody18","shuqisqjlbody18","shuqicjyurl18","shuqicjcsbody18","shuqicjbody18","shuqijsspbody18","shuqijsydurl18","shuqijsydbody18","shuqijsqdbody18","shuqijsqdspyurl18","shuqijsqdspbody18","shuqijsrwbody18","shuqijsfxbody18","shuqijsbookurl18","shuqijsbookbody18","shuqijssprwurl18","shuqiuserurl19","shuqisyurl19","shuqisybody19","shuqispbody19","shuqiscbody19","shuqiydbody19","shuqiqdbody19","shuqirwbody19","shuqifxbody19","shuqisprwurl19","shuqijlbody19","shuqisqjlbody19","shuqicjyurl19","shuqicjcsbody19","shuqicjbody19","shuqijsspbody19","shuqijsydurl19","shuqijsydbody19","shuqijsqdbody19","shuqijsqdspyurl19","shuqijsqdspbody19","shuqijsrwbody19","shuqijsfxbody19","shuqijsbookurl19","shuqijsbookbody19","shuqijssprwurl19","shuqiuserurl20","shuqisyurl20","shuqisybody20","shuqispbody20","shuqiscbody20","shuqiydbody20","shuqiqdbody20","shuqirwbody20","shuqifxbody20","shuqisprwurl20","shuqijlbody20","shuqisqjlbody20","shuqicjyurl20","shuqicjcsbody20","shuqicjbody20","shuqijsspbody20","shuqijsydurl20","shuqijsydbody20","shuqijsqdbody20","shuqijsqdspyurl20","shuqijsqdspbody20","shuqijsrwbody20","shuqijsfxbody20","shuqijsbookurl20","shuqijsbookbody20","shuqijssprwurl20"],"author":"@ziye","settings":[{"id":"shuqiSuffix","name":"当前账号","val":"1","type":"number","desc":"当前抓取ck记录的账号序号，如：1、2、3、"},{"id":"shuqiCount","name":"账号个数","val":"15","type":"number","desc":"指定任务最多跑几个账号，根据抓取的账号数据个数来设值"},{"id":"shuqiXH","name":"循环获取CK","val":"1","type":"number","desc":"0关闭 1开启,默认关闭"},{"id":"shuqiSC","name":"单刷时长控制","val":"0","type":"number","desc":"0关闭 1开启,默认关闭"},{"id":"shuqiTXTX","name":"提现提醒","val":"10","type":"number","desc":"0关闭 设置余额大于多少提醒"},{"id":"shuqinotifyttt","name":"推送控制","val":"1","type":"number","desc":"0关闭，1推送,默认12点以及23点推送"},{"id":"shuqinotifyInterval","name":"通知控制","val":"2","type":"number","desc":"0关闭，1为 所有通知，2为 12，23 点通知，3为 6，12，18，23 点通知 "},{"id":"shuqiMinutes","name":"推送-通知 分钟控制","val":"59","type":"number","desc":"推送以及通知控制在什么分钟段，可设置0-59,默认0到10"}],"repo":"https://cdn.jsdelivr.net/gh/ziye888/JavaScript@main/Task/shuqi.js","icons":["https://cdn.jsdelivr.net/gh/ziye888/JavaScript@main/Task/shuqi.png","https://cdn.jsdelivr.net/gh/ziye888/JavaScript@main/Task/shuqi.png"],"script":"https://cdn.jsdelivr.net/gh/ziye888/JavaScript@main/Task/shuqi.js","icon":"https://cdn.jsdelivr.net/gh/ziye888/JavaScript@main/Task/shuqi.png","favIcon":"mdi-star","favIconColor":"primary","datas":[{"key":"shuqiuserurl","val":"https://ocean.shuqireader.com/api/jaccount/accountapi/v1/sapi/account/getBindinfo?userId=2130757127&sqSv=1.0&timestamp=1624093243&sign=cfcfb08d6049201d39e41d1df8887df3&key=sq_h5_gateway"},{"key":"shuqisyurl","val":"https://render.shuqireader.com/load/resource?sdk=13.4.1&utdid=YM1UsJpVcq4DALecoRktSXhk&ustatus=0&first_placeid=111111&net_env=4g&placeid=111111&user_id=2130757127&sn=91E65814E95FEBA045C803359A65A2509574199F&umidtoken=YM1UsJpVcq4DALecoRktSXhk&msv=8.0.0&brand=Apple&imei=57632835E31D1159BE0A0855280BADD722AEC5A5&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=iOS&ver=210301&mod=iPhone7&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=99BD94EC-E296-486D-98E6-6AB1B281E211"},{"key":"shuqisybody","val":"appVer=4.3.6.0&imei=57632835E31D1159BE0A0855280BADD722AEC5A5&isNewUser=1&params=%7B%22resources%22%3A%7B%22ShuqiVipEntry%22%3A%7B%7D%2C%22personalCardConfig%22%3A%7B%7D%7D%7D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=71bd55f1aae3eda1bcb7512ba61a81af&sn=91E65814E95FEBA045C803359A65A2509574199F&soft_id=21&timestamp=1624093194&user_id=2130757127&ver=210301"},{"key":"shuqispbody","val":"_public=skinId%3D999%26idfa%3D99BD94EC-E296-486D-98E6-6AB1B281E211%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26umidtoken%3DYM1UsJpVcq4DALecoRktSXhk%26user_id%3D2130757127%26sn%3D91E65814E95FEBA045C803359A65A2509574199F%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D57632835E31D1159BE0A0855280BADD722AEC5A5%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhone7%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYM1UsJpVcq4DALecoRktSXhk%26utype%3Dpre_vip%26sdk%3D13.4.1&deliveryId=525&key=sq_app_ad&miniWua=HHnB_kM25LdJGTGjf4emSk4Y4ZSgI28Ln762x06lGZtgVPGw%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=626&sign=E20DD5AB09B47A8DE0171C028CDAD65A&timestamp=1624093214&userId=2130757127&user_id=2130757127&wua=HIVW_WRJSOpNTVvnYCs0s1%2BvaJl74d43d42snUF7Vh8Aq59yBLvrYzbBU7OgeScJA0oj/we94I8ZcrOC2Zo2%2BD%2BLIUeSTPzsdT6/DR/Im9uwfE7xbQivGLDP2wfx/x/WKfd8iY0Z6k5TQJ3AGbGs0ttrw5hzwi2jhPWrstUOndz33Por5B5lMWrN9bG14xTBtBs6OJo518bQaBbzL918ifqJR0obJzsZRSgL4s8HYkvWNWaI%3D"},{"key":"shuqiscbody","val":""},{"key":"shuqiydbody","val":""},{"key":"shuqiqdbody","val":"clientTimestamp=1624093203&position=501&userId=2130757127&signInType=1&wua=HIVW_5opFIiDVeplTYTYbg3CaG63lc7AGwYXTfpiJqg67BziVv2kU9SRVhuhI6K%2BwdcWfCFTW7lRDeOJGuYuy2zf1%2F1HhDq9e7QBuzyLOUDLUbvjMZz0zapMYrnr%2FWL9a%2BlfiZzKEaq5VjzkiHn4ckEb8SnTbaF6IM0fcJQmu5M24OrXofJsxaoZ1s0RRJmSjoNnDR0yWEjDiCmehlO91DdYUHGFJlqP1VWyYdQ2SNTv0i6Q%3D&ua=&miniWua=HHnB_KjWdomIuHIy4h1PdW5IenjZqJg5j2T6rfUf4HPJ3PPM%3D&umidtoken=YM1UsJpVcq4DALecoRktSXhk&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&sign=de1988b75aa58bbba175779e5ad9046d&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.4.1%26utdid%3DYM1UsJpVcq4DALecoRktSXhk%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2130757127%26sn%3D91E65814E95FEBA045C803359A65A2509574199F%26umidtoken%3DYM1UsJpVcq4DALecoRktSXhk%26msv%3D8.0.0%26brand%3DApple%26imei%3D57632835E31D1159BE0A0855280BADD722AEC5A5%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone7%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D99BD94EC-E296-486D-98E6-6AB1B281E211"},{"key":"shuqirwbody","val":"serviceWorkerOn=1&stopPullRefresh=1&from=ShuqiTab&upf=20368&sdk=13.4.1&utdid=YM1UsJpVcq4DALecoRktSXhk&ustatus=0&first_placeid=111111&net_env=4g&placeid=111111&user_id=2130757127&sn=91E65814E95FEBA045C803359A65A2509574199F&umidtoken=YM1UsJpVcq4DALecoRktSXhk&msv=8.0.0&brand=Apple&imei=57632835E31D1159BE0A0855280BADD722AEC5A5&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&session=&skinColor=23B383&platform=1&ver=210301&mod=iPhone7&statusBarHeight=44.000000&skinVersion=1&wh=1242x2688&soft_id=21&utype=pre_vip&skinId=999&idfa=99BD94EC-E296-486D-98E6-6AB1B281E211&params=%7B%22resources%22%3A%7B%22ShuqiBsDailyTask%22%3A%7B%7D%7D%7D&userId=2130757127&placeId=111111&timestamp=1624093217&sqSv=1.0&sign=025e1340c618a906e110071fe5a33cdf&key=sq_h5_gateway&_public="},{"key":"shuqifxbody","val":""},{"key":"shuqisprwurl","val":"https://ocean.shuqireader.com/api/ad/adserver/v1/api/getAdInfo?appVer=4.3.6.0&placeId=111111&platform=iOS&requestSrc=h5&resourceId=626&timestamp=1624093242&user_id=2130757127&sqSv=1.0&sign=8a2758d98f6b7e3461c486c0603b2263&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.4.1%26utdid%3DYM1UsJpVcq4DALecoRktSXhk%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2130757127%26sn%3D91E65814E95FEBA045C803359A65A2509574199F%26umidtoken%3DYM1UsJpVcq4DALecoRktSXhk%26msv%3D8.0.0%26brand%3DApple%26imei%3D57632835E31D1159BE0A0855280BADD722AEC5A5%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone7%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D99BD94EC-E296-486D-98E6-6AB1B281E211"},{"key":"shuqijlbody","val":"requestSrc=h5&userId=2130757127&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624093217&sqSv=1.0&sign=3e6220996c4cc50a57f72b45776bf5ce&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.4.1%26utdid%3DYM1UsJpVcq4DALecoRktSXhk%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2130757127%26sn%3D91E65814E95FEBA045C803359A65A2509574199F%26umidtoken%3DYM1UsJpVcq4DALecoRktSXhk%26msv%3D8.0.0%26brand%3DApple%26imei%3D57632835E31D1159BE0A0855280BADD722AEC5A5%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone7%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D99BD94EC-E296-486D-98E6-6AB1B281E211"},{"key":"shuqisqjlbody","val":"src=&userId=2130757127&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624093208&sqSv=1.0&sign=e979f68bffa58827da981494bb988dd5&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.4.1%26utdid%3DYM1UsJpVcq4DALecoRktSXhk%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2130757127%26sn%3D91E65814E95FEBA045C803359A65A2509574199F%26umidtoken%3DYM1UsJpVcq4DALecoRktSXhk%26msv%3D8.0.0%26brand%3DApple%26imei%3D57632835E31D1159BE0A0855280BADD722AEC5A5%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone7%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D99BD94EC-E296-486D-98E6-6AB1B281E211"},{"key":"shuqicjyurl","val":"https://ocean.shuqireader.com/api/activity/activity/v1/lottery/info?timestamp=1624093244&userId=2130757127&activityId=311&sqSv=1.0&sign=77263378ad3e0dfeebccb6798eddc283&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.4.1%26utdid%3DYM1UsJpVcq4DALecoRktSXhk%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2130757127%26sn%3D91E65814E95FEBA045C803359A65A2509574199F%26umidtoken%3DYM1UsJpVcq4DALecoRktSXhk%26msv%3D8.0.0%26brand%3DApple%26imei%3D57632835E31D1159BE0A0855280BADD722AEC5A5%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone7%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D99BD94EC-E296-486D-98E6-6AB1B281E211"},{"key":"shuqicjcsbody","val":"_public=skinId%3D999%26idfa%3D99BD94EC-E296-486D-98E6-6AB1B281E211%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26umidtoken%3DYM1UsJpVcq4DALecoRktSXhk%26user_id%3D2130757127%26sn%3D91E65814E95FEBA045C803359A65A2509574199F%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D57632835E31D1159BE0A0855280BADD722AEC5A5%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhone7%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYM1UsJpVcq4DALecoRktSXhk%26utype%3Dpre_vip%26sdk%3D13.4.1&deliveryId=711&key=sq_app_ad&miniWua=HHnB_4JqCTvu%2BEZe1BStn6iUazzlYeQblbJDrR0vxaGEpjDs%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=703&sign=AD3E93124448B1532205B5BF9C366ADA&timestamp=1624093227&userId=2130757127&user_id=2130757127&wua=HIVW_/v9y7cxgHpB/2iEZZjE4joREy4Lp%2B71asFI7m0z5v0KJ9TGgRwKoE1C7bONbwcmsOY2wxNwUdVYsE9O1IjwZ2d/oWmx08Pv6ZfyYQ2d6h5ZLdhSgINweN9q96mvLn0oDyMN6sjyU91G1Uj7dTlnJRNZlBlK7m0ODmMOmQoFB%2Bfkiqh8DIplAKqetwb3D4QssBkag3zD/CmMVDMVp5JNDS45/ltf2a9ekm65BAG6v/JU%3D"},{"key":"shuqicjbody","val":"wua=HIVW_K3qwZa3oeENsyipEMcKXBzdqbxqa4wn7v6h%2Ba6uPdczDdSvVEw3jc8maYYZxUdf%2Fq63IFtR5pqFmAGBm%2BOV63woXMsI%2Bkba5evfnG42uTktaC%2BMKbN0QtsygY5co7Rt2KTQbCJLzk6Jn64iVxK1GUHQt2YVC2Q6iH%2FUjoyIY5lzIXvE4frfE1xy870n6pKBGsO0x9pIGv6afMbydGC%2Bh%2F%2FxV3CFKG3lbZ4BK5JsQh%2F4%3D&ua=&userId=2130757127&umidtoken=YM1UsJpVcq4DALecoRktSXhk&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&asac=2A20C07RJ9F51AOEFSNHDR&timestamp=1624093232&activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&sqSv=1.0&sign=485f7b706cb17ee152cb246d3c0b0135&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.4.1%26utdid%3DYM1UsJpVcq4DALecoRktSXhk%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2130757127%26sn%3D91E65814E95FEBA045C803359A65A2509574199F%26umidtoken%3DYM1UsJpVcq4DALecoRktSXhk%26msv%3D8.0.0%26brand%3DApple%26imei%3D57632835E31D1159BE0A0855280BADD722AEC5A5%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone7%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D99BD94EC-E296-486D-98E6-6AB1B281E211"},{"key":"shuqijsspbody","val":""},{"key":"shuqijsydurl","val":""},{"key":"shuqijsydbody","val":""},{"key":"shuqijsqdbody","val":""},{"key":"shuqijsqdspyurl","val":""},{"key":"shuqijsqdspbody","val":""},{"key":"shuqijsrwbody","val":""},{"key":"shuqijsfxbody","val":""},{"key":"shuqijsbookurl","val":""},{"key":"shuqijsbookbody","val":""},{"key":"shuqijssprwurl","val":""},{"key":"shuqiuserurl2","val":"https://ocean.shuqireader.com/api/jaccount/accountapi/v1/sapi/account/getBindinfo?userId=2130260673&sqSv=1.0&timestamp=1624093328&sign=b8bafa91d43ac4f11d76ef4e98a0ee6c&key=sq_h5_gateway"},{"key":"shuqisyurl2","val":"https://render.shuqireader.com/load/resource?sdk=13.3.1&utdid=YM2yTU2LKKADAEAFIohnj0xS&ustatus=0&first_placeid=111111&net_env=3g&placeid=111111&user_id=2130260673&sn=ED7FBEFDD7D627052F22B0EBCC146460C2B873EA&umidtoken=YM2yTU2LKKADAEAFIohnj0xS&msv=8.0.0&brand=Apple&imei=22A1D7B44B9260F0B098CA415966C965553E6FE4&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=iOS&ver=210301&mod=iPhoneXS&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=D76D7D70-5FA1-46ED-9A17-A45FB66B2AB1"},{"key":"shuqisybody2","val":"appVer=4.3.6.0&imei=22A1D7B44B9260F0B098CA415966C965553E6FE4&isNewUser=1&params=%7B%22resources%22%3A%7B%22ShuqiVipEntry%22%3A%7B%7D%2C%22personalCardConfig%22%3A%7B%7D%7D%7D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=f710f54d778a22660544b1e0c23fd6c4&sn=ED7FBEFDD7D627052F22B0EBCC146460C2B873EA&soft_id=21&timestamp=1624093266&user_id=2130260673&ver=210301"},{"key":"shuqispbody2","val":"_public=skinId%3D999%26idfa%3DD76D7D70-5FA1-46ED-9A17-A45FB66B2AB1%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26umidtoken%3DYM2yTU2LKKADAEAFIohnj0xS%26user_id%3D2130260673%26sn%3DED7FBEFDD7D627052F22B0EBCC146460C2B873EA%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D22A1D7B44B9260F0B098CA415966C965553E6FE4%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhoneXS%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYM2yTU2LKKADAEAFIohnj0xS%26utype%3Dpre_vip%26sdk%3D13.3.1&deliveryId=525&key=sq_app_ad&miniWua=HHnB_/4LBVsFkUMimip29ixGKNZSi7EDvzvOcgjbH5L/q3hI%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=626&sign=B4B4ADF4DA4E5D920FF14F6F95136488&timestamp=1624093281&userId=2130260673&user_id=2130260673&wua=HIVW_0Apbilwsre8HGsqvAraEDaSiWURNPQHCzFR/Z7PUGTGVGRioUGo3d07x1hDRFZpAMsKsHkpRPsiSQ28m8iNb/imnpvBnf6Kmov3WPrHlx9kfQKIVL/TGGJKQ0TcaaaalWP7eKt68T9JYw07SPQcUhUbpiyhpMKLJU%2BTDH8bwxOKxkv7dcTflpKpQRj418WZla3XY87mDlCGWbhATnm/3LJASV/QVXa4X%2BJvGG1kkK/A%3D"},{"key":"shuqiscbody2","val":""},{"key":"shuqiydbody2","val":""},{"key":"shuqiqdbody2","val":"clientTimestamp=1624093275&position=501&userId=2130260673&signInType=1&wua=HIVW_nsgKem7Mgjs96UKpUm2cHVDzEe4yVV9%2BdQTeyyN6z8EkDaPB5yT6KbDlVbJpXjDyxHY4tQXCuu4wlWQ%2Fwh9pRRI%2BAk5U8yvPBDTG5OT3Q43L5MgHuqtNfB6SWJ2lJ5MhHTD6s%2FkA5pIrkTECnLHBsLa9KYavq%2BvT5o0gP09wt6iJg3oYMazaBrT35221%2BSMtiQJGdfkqNFAmITAJuV70Vo%2FYaDeRO8f9NXy%2BJDptjuQ%3D&ua=&miniWua=HHnB_rQueetPS89SdX6qmpZ3%2FP1XFtxcaxjTm6%2FmXeLzv%2F%2BY%3D&umidtoken=YM2yTU2LKKADAEAFIohnj0xS&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&sign=dc9f7fa7e42a28eae22d2ffdfdee4f3d&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.3.1%26utdid%3DYM2yTU2LKKADAEAFIohnj0xS%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2130260673%26sn%3DED7FBEFDD7D627052F22B0EBCC146460C2B873EA%26umidtoken%3DYM2yTU2LKKADAEAFIohnj0xS%26msv%3D8.0.0%26brand%3DApple%26imei%3D22A1D7B44B9260F0B098CA415966C965553E6FE4%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhoneXS%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DD76D7D70-5FA1-46ED-9A17-A45FB66B2AB1"},{"key":"shuqirwbody2","val":"serviceWorkerOn=1&stopPullRefresh=1&from=ShuqiTab&upf=20368&sdk=13.3.1&utdid=YM2yTU2LKKADAEAFIohnj0xS&ustatus=0&first_placeid=111111&net_env=3g&placeid=111111&user_id=2130260673&sn=ED7FBEFDD7D627052F22B0EBCC146460C2B873EA&umidtoken=YM2yTU2LKKADAEAFIohnj0xS&msv=8.0.0&brand=Apple&imei=22A1D7B44B9260F0B098CA415966C965553E6FE4&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&session=&skinColor=23B383&platform=1&ver=210301&mod=iPhoneXS&statusBarHeight=44.000000&skinVersion=1&wh=1242x2688&soft_id=21&utype=pre_vip&skinId=999&idfa=D76D7D70-5FA1-46ED-9A17-A45FB66B2AB1&params=%7B%22resources%22%3A%7B%22ShuqiBsDailyTask%22%3A%7B%7D%7D%7D&userId=2130260673&placeId=111111&timestamp=1624093287&sqSv=1.0&sign=f7be8acdae9827a1a67a91b5629a64d5&key=sq_h5_gateway&_public="},{"key":"shuqifxbody2","val":""},{"key":"shuqisprwurl2","val":"https://ocean.shuqireader.com/api/ad/adserver/v1/api/getAdInfo?appVer=4.3.6.0&placeId=111111&platform=iOS&requestSrc=h5&resourceId=626&timestamp=1624093327&user_id=2130260673&sqSv=1.0&sign=8c2d1b9993afb8b4940f9eedf716c869&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.3.1%26utdid%3DYM2yTU2LKKADAEAFIohnj0xS%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2130260673%26sn%3DED7FBEFDD7D627052F22B0EBCC146460C2B873EA%26umidtoken%3DYM2yTU2LKKADAEAFIohnj0xS%26msv%3D8.0.0%26brand%3DApple%26imei%3D22A1D7B44B9260F0B098CA415966C965553E6FE4%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhoneXS%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DD76D7D70-5FA1-46ED-9A17-A45FB66B2AB1"},{"key":"shuqijlbody2","val":"requestSrc=h5&userId=2130260673&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624093287&sqSv=1.0&sign=22739e8e8b4c12e7fc218c013e825615&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.3.1%26utdid%3DYM2yTU2LKKADAEAFIohnj0xS%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2130260673%26sn%3DED7FBEFDD7D627052F22B0EBCC146460C2B873EA%26umidtoken%3DYM2yTU2LKKADAEAFIohnj0xS%26msv%3D8.0.0%26brand%3DApple%26imei%3D22A1D7B44B9260F0B098CA415966C965553E6FE4%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhoneXS%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DD76D7D70-5FA1-46ED-9A17-A45FB66B2AB1"},{"key":"shuqisqjlbody2","val":"src=&userId=2130260673&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624093279&sqSv=1.0&sign=91ce7594c3fb868e2703b211f388efd7&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.3.1%26utdid%3DYM2yTU2LKKADAEAFIohnj0xS%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2130260673%26sn%3DED7FBEFDD7D627052F22B0EBCC146460C2B873EA%26umidtoken%3DYM2yTU2LKKADAEAFIohnj0xS%26msv%3D8.0.0%26brand%3DApple%26imei%3D22A1D7B44B9260F0B098CA415966C965553E6FE4%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhoneXS%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DD76D7D70-5FA1-46ED-9A17-A45FB66B2AB1"},{"key":"shuqicjyurl2","val":"https://ocean.shuqireader.com/api/activity/activity/v1/lottery/info?timestamp=1624093329&userId=2130260673&activityId=311&sqSv=1.0&sign=a479e83e12fe93bdcbedfc2ae8cf0347&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.3.1%26utdid%3DYM2yTU2LKKADAEAFIohnj0xS%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2130260673%26sn%3DED7FBEFDD7D627052F22B0EBCC146460C2B873EA%26umidtoken%3DYM2yTU2LKKADAEAFIohnj0xS%26msv%3D8.0.0%26brand%3DApple%26imei%3D22A1D7B44B9260F0B098CA415966C965553E6FE4%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhoneXS%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DD76D7D70-5FA1-46ED-9A17-A45FB66B2AB1"},{"key":"shuqicjcsbody2","val":"_public=skinId%3D999%26idfa%3DD76D7D70-5FA1-46ED-9A17-A45FB66B2AB1%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26umidtoken%3DYM2yTU2LKKADAEAFIohnj0xS%26user_id%3D2130260673%26sn%3DED7FBEFDD7D627052F22B0EBCC146460C2B873EA%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D22A1D7B44B9260F0B098CA415966C965553E6FE4%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhoneXS%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYM2yTU2LKKADAEAFIohnj0xS%26utype%3Dpre_vip%26sdk%3D13.3.1&deliveryId=711&key=sq_app_ad&miniWua=HHnB_R73Yh%2BfE90gvlc5vPSZj/8/NVzwoo/euGD0GrMsVuSA%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=703&sign=2AC55E0665C3F679027C7DB2403CE449&timestamp=1624093292&userId=2130260673&user_id=2130260673&wua=HIVW_KreiW%2BdZqwjL1tvaHbto8BeqfnUaEWKuJC2SCEQJOkA3PAno1bWOqS%2BmtjproHTSAxLJsY/qXmz/B0i0wCL1oAGhvZj%2BJ788LkLsfZbJqd9K/LNldQSWOxuTFrNJZe%2BPQn83u%2BuPB8llVndCvTPxEOvW6IP3eDI39niWOjnFfbVukTPMu2UeqDwAQh18BFPu9gGqJPrssCCUrewOf0rNXLScZj%2BgbBqlDQA0ZdWkMX0%3D"},{"key":"shuqicjbody2","val":"wua=HIVW_SseBvMalJoZBTQLzzicj%2BNZZzijAxCvy0oxCIGYB8dALpRT00IFzxrYrRCz%2BQ6xFga7GzctGpQ9blGgdRXLCs48G72KsHDCatbabAv0PxWlqb%2BTDTjwNasD8RvHidCuyHJxeJa9dHDUz%2Fjdir%2Fnuz5GSTebXXaFkl4UeFwk6CMDtwavEcD%2Bi4VZsCcV4hs7g%2Fi4P8b%2FjQxwzs2oGOs4boH2qNZye%2FFmducd02JmVouc%3D&ua=&userId=2130260673&umidtoken=YM2yTU2LKKADAEAFIohnj0xS&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&asac=2A20C07RJ9F51AOEFSNHDR&timestamp=1624093300&activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&sqSv=1.0&sign=bf17f04155fffa11ae929be0448a975e&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.3.1%26utdid%3DYM2yTU2LKKADAEAFIohnj0xS%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2130260673%26sn%3DED7FBEFDD7D627052F22B0EBCC146460C2B873EA%26umidtoken%3DYM2yTU2LKKADAEAFIohnj0xS%26msv%3D8.0.0%26brand%3DApple%26imei%3D22A1D7B44B9260F0B098CA415966C965553E6FE4%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhoneXS%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DD76D7D70-5FA1-46ED-9A17-A45FB66B2AB1"},{"key":"shuqijsspbody2","val":""},{"key":"shuqijsydurl2","val":""},{"key":"shuqijsydbody2","val":""},{"key":"shuqijsqdbody2","val":""},{"key":"shuqijsqdspyurl2","val":""},{"key":"shuqijsqdspbody2","val":""},{"key":"shuqijsrwbody2","val":""},{"key":"shuqijsfxbody2","val":""},{"key":"shuqijsbookurl2","val":""},{"key":"shuqijsbookbody2","val":""},{"key":"shuqijssprwurl2","val":""},{"key":"shuqiuserurl3","val":"https://ocean.shuqireader.com/api/jaccount/accountapi/v1/sapi/account/getBindinfo?userId=2129165599&sqSv=1.0&timestamp=1624093398&sign=eb4a7c3399b608b49116c28adb500d20&key=sq_h5_gateway"},{"key":"shuqisyurl3","val":"https://render.shuqireader.com/load/resource?sdk=13.5.1&utdid=YM1U6WdyZDwDAHAzL5PZs%2FDX&ustatus=0&first_placeid=111111&net_env=4g&placeid=111111&user_id=2129165599&sn=3A1A04F9925F007BD8FDDAD5F4C9881DA5D0D89D&umidtoken=YM1U6WdyZDwDAHAzL5PZs%2FDX&msv=8.0.0&brand=Apple&imei=F9339A2F2D72F1E831EE1F162FBA97DB0177E0AE&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=iOS&ver=210301&mod=iPad4G&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=3DAE8871-04C3-47BD-9616-D4DDAF49340A"},{"key":"shuqisybody3","val":"appVer=4.3.6.0&imei=F9339A2F2D72F1E831EE1F162FBA97DB0177E0AE&isNewUser=1&params=%7B%22resources%22%3A%7B%22ShuqiVipEntry%22%3A%7B%7D%2C%22personalCardConfig%22%3A%7B%7D%7D%7D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=bc330d48d62c9112fb7ac31f8c7dd0a3&sn=3A1A04F9925F007BD8FDDAD5F4C9881DA5D0D89D&soft_id=21&timestamp=1624093344&user_id=2129165599&ver=210301"},{"key":"shuqispbody3","val":"_public=skinId%3D999%26idfa%3D3DAE8871-04C3-47BD-9616-D4DDAF49340A%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26umidtoken%3DYM1U6WdyZDwDAHAzL5PZs/DX%26user_id%3D2129165599%26sn%3D3A1A04F9925F007BD8FDDAD5F4C9881DA5D0D89D%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3DF9339A2F2D72F1E831EE1F162FBA97DB0177E0AE%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPad4G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYM1U6WdyZDwDAHAzL5PZs/DX%26utype%3Dpre_vip%26sdk%3D13.5.1&deliveryId=525&key=sq_app_ad&miniWua=HHnB_RB%2BGLSuPLsCDv5WU39hGCVrA/GnmdvA/qY%2ByCHHO3ps%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=626&sign=F6042F2334230B827E6E25FD2B8C2140&timestamp=1624093367&userId=2129165599&user_id=2129165599&wua=HIVW_vzVNLUQmNt5LvoJZM%2BorgnQUGXAgQcZNKkcOyp2tV21kSrH1VWKw5WAo3LwnBXJ7jUVoMOACINTgxp2vjLfIkIq5PWm8JaMX9UcAMib2S8P6BtzTa%2BsHCKPI7eXszr%2B3qrIf66yOZTH5rajmHp9aLq9d%2Be6d9MlrXm6FkYfW1cebOARF96b5EclCZaw0bkGhBqlqBN1FyF%2BODNiQEe4uz9jQkBUUWNZbxpbKb6l%2BAU8%3D"},{"key":"shuqiscbody3","val":""},{"key":"shuqiydbody3","val":""},{"key":"shuqiqdbody3","val":"clientTimestamp=1624093359&position=501&userId=2129165599&signInType=1&wua=HIVW_kzLO8W%2BBVS5U8tJEKFPo9M1kklKnMZXtRKpfB3YdE1dIXahf55cdJaMFL9i4hQbKa%2FHC3fqzYbKnblgV9H1cwFOyS9AJATacMEyznHabducrriCc6oAbHULRUTF8ANBvLu2aCyXpIU4B4G%2B8ZgSKSYcnZOg4FF3wtw7KlLTa%2BpMYq8%2FdnOFeQ%2BDkVSIw2gkJVFr1cLKA%2BwaLxP%2FGz%2FuURZmjOHTY5Smh0J39pyFbGmE%3D&ua=&miniWua=HHnB_lLOm%2Bwj7uTOHoou6yiUfOWpDQOv2%2FfT6BnAspbK%2F83Y%3D&umidtoken=YM1U6WdyZDwDAHAzL5PZs%2FDX&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&sign=7d745d6aae38eb8e123f807dcaf11710&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.5.1%26utdid%3DYM1U6WdyZDwDAHAzL5PZs%252FDX%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2129165599%26sn%3D3A1A04F9925F007BD8FDDAD5F4C9881DA5D0D89D%26umidtoken%3DYM1U6WdyZDwDAHAzL5PZs%252FDX%26msv%3D8.0.0%26brand%3DApple%26imei%3DF9339A2F2D72F1E831EE1F162FBA97DB0177E0AE%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad4G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D3DAE8871-04C3-47BD-9616-D4DDAF49340A"},{"key":"shuqirwbody3","val":"serviceWorkerOn=1&stopPullRefresh=1&from=ShuqiTab&upf=20368&sdk=13.5.1&utdid=YM1U6WdyZDwDAHAzL5PZs%2FDX&ustatus=0&first_placeid=111111&net_env=4g&placeid=111111&user_id=2129165599&sn=3A1A04F9925F007BD8FDDAD5F4C9881DA5D0D89D&umidtoken=YM1U6WdyZDwDAHAzL5PZs%2FDX&msv=8.0.0&brand=Apple&imei=F9339A2F2D72F1E831EE1F162FBA97DB0177E0AE&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&session=&skinColor=23B383&platform=1&ver=210301&mod=iPad4G&statusBarHeight=44.000000&skinVersion=1&wh=1242x2688&soft_id=21&utype=pre_vip&skinId=999&idfa=3DAE8871-04C3-47BD-9616-D4DDAF49340A&params=%7B%22resources%22%3A%7B%22ShuqiBsDailyTask%22%3A%7B%7D%7D%7D&userId=2129165599&placeId=111111&timestamp=1624093374&sqSv=1.0&sign=6fb7d56d252931ed9a05ac9820a4d23a&key=sq_h5_gateway&_public="},{"key":"shuqifxbody3","val":""},{"key":"shuqisprwurl3","val":"https://ocean.shuqireader.com/api/ad/adserver/v1/api/getAdInfo?appVer=4.3.6.0&placeId=111111&platform=iOS&requestSrc=h5&resourceId=626&timestamp=1624093396&user_id=2129165599&sqSv=1.0&sign=046f51dc550df55304fc5c6f334628a8&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.5.1%26utdid%3DYM1U6WdyZDwDAHAzL5PZs%252FDX%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2129165599%26sn%3D3A1A04F9925F007BD8FDDAD5F4C9881DA5D0D89D%26umidtoken%3DYM1U6WdyZDwDAHAzL5PZs%252FDX%26msv%3D8.0.0%26brand%3DApple%26imei%3DF9339A2F2D72F1E831EE1F162FBA97DB0177E0AE%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad4G%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D3DAE8871-04C3-47BD-9616-D4DDAF49340A"},{"key":"shuqijlbody3","val":"requestSrc=h5&userId=2129165599&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624093374&sqSv=1.0&sign=b81d48df504faca11ab6938631b479fe&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.5.1%26utdid%3DYM1U6WdyZDwDAHAzL5PZs%252FDX%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2129165599%26sn%3D3A1A04F9925F007BD8FDDAD5F4C9881DA5D0D89D%26umidtoken%3DYM1U6WdyZDwDAHAzL5PZs%252FDX%26msv%3D8.0.0%26brand%3DApple%26imei%3DF9339A2F2D72F1E831EE1F162FBA97DB0177E0AE%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad4G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D3DAE8871-04C3-47BD-9616-D4DDAF49340A"},{"key":"shuqisqjlbody3","val":"src=&userId=2129165599&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624093363&sqSv=1.0&sign=0b23de28b0784ba5d57f2ae40af094f6&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.5.1%26utdid%3DYM1U6WdyZDwDAHAzL5PZs%252FDX%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2129165599%26sn%3D3A1A04F9925F007BD8FDDAD5F4C9881DA5D0D89D%26umidtoken%3DYM1U6WdyZDwDAHAzL5PZs%252FDX%26msv%3D8.0.0%26brand%3DApple%26imei%3DF9339A2F2D72F1E831EE1F162FBA97DB0177E0AE%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad4G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D3DAE8871-04C3-47BD-9616-D4DDAF49340A"},{"key":"shuqicjyurl3","val":"https://ocean.shuqireader.com/api/activity/activity/v1/lottery/info?timestamp=1624093399&userId=2129165599&activityId=311&sqSv=1.0&sign=bcd55c12174f8ec8f4cb4d0cf6e7793a&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.5.1%26utdid%3DYM1U6WdyZDwDAHAzL5PZs%252FDX%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2129165599%26sn%3D3A1A04F9925F007BD8FDDAD5F4C9881DA5D0D89D%26umidtoken%3DYM1U6WdyZDwDAHAzL5PZs%252FDX%26msv%3D8.0.0%26brand%3DApple%26imei%3DF9339A2F2D72F1E831EE1F162FBA97DB0177E0AE%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad4G%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D3DAE8871-04C3-47BD-9616-D4DDAF49340A"},{"key":"shuqicjcsbody3","val":"_public=skinId%3D999%26idfa%3D3DAE8871-04C3-47BD-9616-D4DDAF49340A%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26umidtoken%3DYM1U6WdyZDwDAHAzL5PZs/DX%26user_id%3D2129165599%26sn%3D3A1A04F9925F007BD8FDDAD5F4C9881DA5D0D89D%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3DF9339A2F2D72F1E831EE1F162FBA97DB0177E0AE%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPad4G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYM1U6WdyZDwDAHAzL5PZs/DX%26utype%3Dpre_vip%26sdk%3D13.5.1&deliveryId=711&key=sq_app_ad&miniWua=HHnB_WrTyJziJMWg/c7bK/JTH5gabv0NdPbTklpvF3K9GOuE%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=703&sign=37C932A3937740A7B80DC9C580830300&timestamp=1624093378&userId=2129165599&user_id=2129165599&wua=HIVW_sHt6tQf8Y%2BWAvks3p4OW9bFU2cTqiELVMzHDRErS6iRaT9BCKIPk8qR7TLluoKKYfQzMzhB%2Bkoyd%2BZBoBJX//y12YRGtsSFYw5eRCbHf/RhVIzxvPcz/v665sSm3cuvwkbzF9jNURgqoOFcQ7T3G9KTW6sUGMfatsX9QYzULRZDf0LqGdbXvUzl9MxeCG5Gj0mD0fnfB51T541/82AzEUSrsyT%2BPPlMgGhQsZV6FdtI%3D"},{"key":"shuqicjbody3","val":"wua=HIVW_L5PzLKBhqbnefnBw1FDWKZ%2BxWtEHXOxcf2V344pzKg8tVxhZTBuTLyZrEWjA6XmJLuG9%2B6VZ9nC4LB0Z%2F0Iy0zvgzEaMGP4MGYd%2F7IeRP7qTcw4ZEUpuxzk7Izg5xAUQKVmFvwb%2B3%2B7WWpvNkYxAWxTOVjFieWHiPWG6QwUbdshbPYbt3gMIRKNsXy3KzxgnpU9CTrafz%2B68y15z9WauSV%2FykqK4Npi%2BCNu1FX9U%2Bjo%3D&ua=&userId=2129165599&umidtoken=YM1U6WdyZDwDAHAzL5PZs%2FDX&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&asac=2A20C07RJ9F51AOEFSNHDR&timestamp=1624093385&activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&sqSv=1.0&sign=8a5406c5dbcbf89c52e6a4b8571ff51d&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.5.1%26utdid%3DYM1U6WdyZDwDAHAzL5PZs%252FDX%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2129165599%26sn%3D3A1A04F9925F007BD8FDDAD5F4C9881DA5D0D89D%26umidtoken%3DYM1U6WdyZDwDAHAzL5PZs%252FDX%26msv%3D8.0.0%26brand%3DApple%26imei%3DF9339A2F2D72F1E831EE1F162FBA97DB0177E0AE%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad4G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D3DAE8871-04C3-47BD-9616-D4DDAF49340A"},{"key":"shuqijsspbody3","val":""},{"key":"shuqijsydurl3","val":""},{"key":"shuqijsydbody3","val":""},{"key":"shuqijsqdbody3","val":""},{"key":"shuqijsqdspyurl3","val":""},{"key":"shuqijsqdspbody3","val":""},{"key":"shuqijsrwbody3","val":""},{"key":"shuqijsfxbody3","val":""},{"key":"shuqijsbookurl3","val":""},{"key":"shuqijsbookbody3","val":""},{"key":"shuqijssprwurl3","val":""},{"key":"shuqiuserurl4","val":"https://ocean.shuqireader.com/api/jaccount/accountapi/v1/sapi/account/getBindinfo?userId=2129115006&sqSv=1.0&timestamp=1624093511&sign=71ab9fc171d679038cf7bdd83b349c5c&key=sq_h5_gateway"},{"key":"shuqisyurl4","val":"https://render.shuqireader.com/load/resource?sdk=13.2&utdid=YM1U8jh9L10DAAmbKjfEefCd&ustatus=0&first_placeid=111111&net_env=3g&placeid=111111&user_id=2129115006&sn=7E3BD7A48F26134CDA2BE88F7A1DF944FB427BEE&umidtoken=YM1U8jh9L10DAAmbKjfEefCd&msv=8.0.0&brand=Apple&imei=FA1E6CFF369FF89C9A86A0833CCBD65377BFF3C6&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=iOS&ver=210301&mod=UnknowniPad&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=B822F607-40E2-4476-8258-87D97B2F41D6"},{"key":"shuqisybody4","val":"appVer=4.3.6.0&imei=FA1E6CFF369FF89C9A86A0833CCBD65377BFF3C6&isNewUser=1&params=%7B%22resources%22%3A%7B%22ShuqiVipEntry%22%3A%7B%7D%2C%22personalCardConfig%22%3A%7B%7D%7D%7D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=9ac53d0f00cd6ac21e07f77d55d6e252&sn=7E3BD7A48F26134CDA2BE88F7A1DF944FB427BEE&soft_id=21&timestamp=1624093456&user_id=2129115006&ver=210301"},{"key":"shuqispbody4","val":"_public=skinId%3D999%26idfa%3DB822F607-40E2-4476-8258-87D97B2F41D6%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26umidtoken%3DYM1U8jh9L10DAAmbKjfEefCd%26user_id%3D2129115006%26sn%3D7E3BD7A48F26134CDA2BE88F7A1DF944FB427BEE%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3DFA1E6CFF369FF89C9A86A0833CCBD65377BFF3C6%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYM1U8jh9L10DAAmbKjfEefCd%26utype%3Dpre_vip%26sdk%3D13.2&deliveryId=525&key=sq_app_ad&miniWua=HHnB_L04gRRn9k1ynx663iv9xpp9YGu0RsKrEO7aNvCNyMHI%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=626&sign=984019D4416693D3FE5A73059417BFCC&timestamp=1624093475&userId=2129115006&user_id=2129115006&wua=HIVW_xW5pdJjIXWVWxptY3WKS3bq4O3ZC83NAZX4xFx61T8Ym/zXqnnGuC/zNQw6%2BPnopYrNALCt3tbP0tSLL4nlSYXVvO4uiOkxWzpyy4f8IlyJJaU4MlGy03HWiDjYBzcbDFAoYiiwyVAcMjGDQS4%2Bw0ZT/fQNHcp0kZ9YzhJ2vC8L2ypS//57kPdrjypjK6/r4LV6Q7qo8Azd78IZJ0o/Jmrcr/fsFtJy5793ShVg2LIE%3D"},{"key":"shuqiscbody4","val":""},{"key":"shuqiydbody4","val":""},{"key":"shuqiqdbody4","val":"clientTimestamp=1624093466&position=501&userId=2129115006&signInType=1&wua=HIVW_LuPCaokoTKoy5eIclMeiQqEQyZjO%2FeMmDjL0zGHoFH1h1rWN2dqjWKm3gEhu3VXVxldi5cZbT%2BERXV3K%2BTDr%2BOfDPPSujhW6UDHo%2FqR%2FXgcoizloFR0NyuHGPxPcMubtA6IRht9611EGlp%2B%2Bx0htJN92PqO05LAyL%2BIcJ5Mi2DMmQoM8ZKUSTc5yk42lELjo93UoO62F%2BusPYkQPLnH52UTIV6MziJ7lk36hk3Ks2Lk%3D&ua=&miniWua=HHnB_5T%2F1P1S29LrFNUSxRqqDYY5Zx%2FkBYOFkXq0RO8RhagE%3D&umidtoken=YM1U8jh9L10DAAmbKjfEefCd&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&sign=186e9b1fa9fe2963b8277d676e4c38b7&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.2%26utdid%3DYM1U8jh9L10DAAmbKjfEefCd%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2129115006%26sn%3D7E3BD7A48F26134CDA2BE88F7A1DF944FB427BEE%26umidtoken%3DYM1U8jh9L10DAAmbKjfEefCd%26msv%3D8.0.0%26brand%3DApple%26imei%3DFA1E6CFF369FF89C9A86A0833CCBD65377BFF3C6%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DB822F607-40E2-4476-8258-87D97B2F41D6"},{"key":"shuqirwbody4","val":"serviceWorkerOn=1&stopPullRefresh=1&from=ShuqiTab&upf=20368&sdk=13.2&utdid=YM1U8jh9L10DAAmbKjfEefCd&ustatus=0&first_placeid=111111&net_env=3g&placeid=111111&user_id=2129115006&sn=7E3BD7A48F26134CDA2BE88F7A1DF944FB427BEE&umidtoken=YM1U8jh9L10DAAmbKjfEefCd&msv=8.0.0&brand=Apple&imei=FA1E6CFF369FF89C9A86A0833CCBD65377BFF3C6&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=1&ver=210301&mod=UnknowniPad&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=B822F607-40E2-4476-8258-87D97B2F41D6&params=%7B%22resources%22%3A%7B%22ShuqiBsDailyTask%22%3A%7B%7D%7D%7D&userId=2129115006&placeId=111111&timestamp=1624093481&sqSv=1.0&sign=38681fbfbd8405d1a5fc0fc76dc53550&key=sq_h5_gateway&_public="},{"key":"shuqifxbody4","val":""},{"key":"shuqisprwurl4","val":"https://ocean.shuqireader.com/api/ad/adserver/v1/api/getAdInfo?appVer=4.3.6.0&placeId=111111&platform=iOS&requestSrc=h5&resourceId=626&timestamp=1624093509&user_id=2129115006&sqSv=1.0&sign=df939c9d8fa475547b9d0b0788d18fbb&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.2%26utdid%3DYM1U8jh9L10DAAmbKjfEefCd%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2129115006%26sn%3D7E3BD7A48F26134CDA2BE88F7A1DF944FB427BEE%26umidtoken%3DYM1U8jh9L10DAAmbKjfEefCd%26msv%3D8.0.0%26brand%3DApple%26imei%3DFA1E6CFF369FF89C9A86A0833CCBD65377BFF3C6%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DB822F607-40E2-4476-8258-87D97B2F41D6"},{"key":"shuqijlbody4","val":"requestSrc=h5&userId=2129115006&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624093481&sqSv=1.0&sign=b09f12485dcd30e7d41d246745e3306b&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.2%26utdid%3DYM1U8jh9L10DAAmbKjfEefCd%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2129115006%26sn%3D7E3BD7A48F26134CDA2BE88F7A1DF944FB427BEE%26umidtoken%3DYM1U8jh9L10DAAmbKjfEefCd%26msv%3D8.0.0%26brand%3DApple%26imei%3DFA1E6CFF369FF89C9A86A0833CCBD65377BFF3C6%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DB822F607-40E2-4476-8258-87D97B2F41D6"},{"key":"shuqisqjlbody4","val":"src=&userId=2129115006&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624093471&sqSv=1.0&sign=3a41260d7755345b74aef5a18b123ba8&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.2%26utdid%3DYM1U8jh9L10DAAmbKjfEefCd%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2129115006%26sn%3D7E3BD7A48F26134CDA2BE88F7A1DF944FB427BEE%26umidtoken%3DYM1U8jh9L10DAAmbKjfEefCd%26msv%3D8.0.0%26brand%3DApple%26imei%3DFA1E6CFF369FF89C9A86A0833CCBD65377BFF3C6%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DB822F607-40E2-4476-8258-87D97B2F41D6"},{"key":"shuqicjyurl4","val":"https://ocean.shuqireader.com/api/activity/activity/v1/lottery/info?timestamp=1624093511&userId=2129115006&activityId=311&sqSv=1.0&sign=1a3e2ab4b2fd553cf567bb697062a4b4&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.2%26utdid%3DYM1U8jh9L10DAAmbKjfEefCd%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2129115006%26sn%3D7E3BD7A48F26134CDA2BE88F7A1DF944FB427BEE%26umidtoken%3DYM1U8jh9L10DAAmbKjfEefCd%26msv%3D8.0.0%26brand%3DApple%26imei%3DFA1E6CFF369FF89C9A86A0833CCBD65377BFF3C6%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DB822F607-40E2-4476-8258-87D97B2F41D6"},{"key":"shuqicjcsbody4","val":"_public=skinId%3D999%26idfa%3DB822F607-40E2-4476-8258-87D97B2F41D6%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26umidtoken%3DYM1U8jh9L10DAAmbKjfEefCd%26user_id%3D2129115006%26sn%3D7E3BD7A48F26134CDA2BE88F7A1DF944FB427BEE%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3DFA1E6CFF369FF89C9A86A0833CCBD65377BFF3C6%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYM1U8jh9L10DAAmbKjfEefCd%26utype%3Dpre_vip%26sdk%3D13.2&deliveryId=711&key=sq_app_ad&miniWua=HHnB_S/LJ/efERkas3HUgf1/77H1XSP6ulxNJ3pnRRmohf1w%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=703&sign=BC365A4F38069BA448EDF16488E86E0B&timestamp=1624093486&userId=2129115006&user_id=2129115006&wua=HIVW_IKPXrN04KJRsOGx71q6SxB0szSFFC8v3u8pzdpoHNYmR2gfxBs0hPdmfFY3EQgkIyMcfO0qW2N7R98rN%2BOLl26K0AyE%2B3RZS%2B76m6UmuQvyoFq7YgZwnjXeUCpOC/j0n/73/fk0AxSPbfuYfQEi1K0URq7yo7BolFyu7gjepy98V%2BjBSuR6wkH2EPITZzBG4ngNuhpaaM5bQYzO/UEEkDzjUuoSmq6Vpirm95Vhva0s%3D"},{"key":"shuqicjbody4","val":"wua=HIVW_FO7lrzioOluEp1Gy8COtt8Mob77i%2FXSR9mIHQLEVpE4m6NszW6rUCBw1lkSqum8m7UyCGeK0qwPngx9X%2B0OcbdGlF0RJdE74oRuCLdwRzZxAFRa%2FacgeEp3aowHEPmmcgt5sAm9UzkZzuTOkrjER%2Bsfvlu6BsUyKHFJBYtTVV9LwQ79jvTiMfDhEN5vJkXbZ%2FKW0FGn0zt8XgE9cI6Nuf8DhWJYC6e01flfHoP8h54c%3D&ua=&userId=2129115006&umidtoken=YM1U8jh9L10DAAmbKjfEefCd&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&asac=2A20C07RJ9F51AOEFSNHDR&timestamp=1624093493&activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&sqSv=1.0&sign=f0780c31bb4f7aa19b7eabb486123409&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.2%26utdid%3DYM1U8jh9L10DAAmbKjfEefCd%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2129115006%26sn%3D7E3BD7A48F26134CDA2BE88F7A1DF944FB427BEE%26umidtoken%3DYM1U8jh9L10DAAmbKjfEefCd%26msv%3D8.0.0%26brand%3DApple%26imei%3DFA1E6CFF369FF89C9A86A0833CCBD65377BFF3C6%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DB822F607-40E2-4476-8258-87D97B2F41D6"},{"key":"shuqijsspbody4","val":""},{"key":"shuqijsydurl4","val":""},{"key":"shuqijsydbody4","val":""},{"key":"shuqijsqdbody4","val":""},{"key":"shuqijsqdspyurl4","val":""},{"key":"shuqijsqdspbody4","val":""},{"key":"shuqijsrwbody4","val":""},{"key":"shuqijsfxbody4","val":""},{"key":"shuqijsbookurl4","val":""},{"key":"shuqijsbookbody4","val":""},{"key":"shuqijssprwurl4","val":""},{"key":"shuqiuserurl5","val":"https://ocean.shuqireader.com/api/jaccount/accountapi/v1/sapi/account/getBindinfo?userId=2131886211&sqSv=1.0&timestamp=1624093587&sign=376d1638a13349051f2e2d21550cab41&key=sq_h5_gateway"},{"key":"shuqisyurl5","val":"https://render.shuqireader.com/load/resource?sdk=13.3.1&utdid=YM1U%2B4yYBEMDAPo4LbbfVb7K&ustatus=0&first_placeid=111111&net_env=4g&placeid=111111&user_id=2131886211&sn=55D0F52637736F28B8F1A91761020222DAE83F5A&umidtoken=YM1U%2B4yYBEMDAPo4LbbfVb7K&msv=8.0.0&brand=Apple&imei=1E97C62A4C8322E42E3083642EB14EBAE4E7EBDB&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=iOS&ver=210301&mod=UnknowniPad&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=C41201D9-C844-4F6D-B2FB-F35149224ADE"},{"key":"shuqisybody5","val":"appVer=4.3.6.0&imei=1E97C62A4C8322E42E3083642EB14EBAE4E7EBDB&isNewUser=1&params=%7B%22resources%22%3A%7B%22ShuqiVipEntry%22%3A%7B%7D%2C%22personalCardConfig%22%3A%7B%7D%7D%7D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=e2d988f8900d9f70af3294f94e7f1195&sn=55D0F52637736F28B8F1A91761020222DAE83F5A&soft_id=21&timestamp=1624093525&user_id=2131886211&ver=210301"},{"key":"shuqispbody5","val":"_public=skinId%3D999%26idfa%3DC41201D9-C844-4F6D-B2FB-F35149224ADE%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26umidtoken%3DYM1U%2B4yYBEMDAPo4LbbfVb7K%26user_id%3D2131886211%26sn%3D55D0F52637736F28B8F1A91761020222DAE83F5A%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D1E97C62A4C8322E42E3083642EB14EBAE4E7EBDB%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYM1U%2B4yYBEMDAPo4LbbfVb7K%26utype%3Dpre_vip%26sdk%3D13.3.1&deliveryId=525&key=sq_app_ad&miniWua=HHnB_q76q2TRL56j4N6Fho3y9jHI7xBh/zoSGohEcioKDEVI%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=626&sign=931B65B339D2C0CAD0930B57410B8C6E&timestamp=1624093551&userId=2131886211&user_id=2131886211&wua=HIVW_hvia550vUPcNnu1vXNW5M%2BHzfYYSP7F2yOGPghzZhV5nNPigiEtmOeZ%2BigkTGMy3mPQkKNeEJRJx4/tGf5Sb7TcjLz7VdljF5Qx4uJR2Q/egQMejQRZ62JhYEwcCk1FevZey/O4FFMqdty4N6RPh6LLY9tEwepvMpfJnl2Cij5f%2BVC7WVOBX2vT8VT3hKzMzywcjPEWKgH5Wq2ZRpJfmw%2BTTF4ktoYfeDjJKLteL908%3D"},{"key":"shuqiscbody5","val":""},{"key":"shuqiydbody5","val":""},{"key":"shuqiqdbody5","val":"clientTimestamp=1624093540&position=501&userId=2131886211&signInType=1&wua=HIVW_tuGG6xpz4UUX2%2FPclbpFjcwVFlOFrW5xTfw9Sll8tHnY4MQKLVwBxeNMPlB24WevGAh%2Bk2UlooivXLvnxXo1a4lvJ05TcMFwXHSgpY1MiQxJSUp1mIGWjsA2Qpf%2BAARq6moU52jhl8Q2e8dJZVEoIddHeRZfPXXlXNHSY3VZnZoiX4bZYj7ayo2yIFqCfHNnvUFpjnaHppnaE9XckhIidL3GftAgfpw%2B3FBzlNFQJuY%3D&ua=&miniWua=HHnB_WOsjKxKEsiKUP5eLHAWvwAikgb1etuJmHvcRpjQM%2B0I%3D&umidtoken=YM1U%2B4yYBEMDAPo4LbbfVb7K&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&sign=d70f2a080426fc5c999016aa82d60569&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.3.1%26utdid%3DYM1U%252B4yYBEMDAPo4LbbfVb7K%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2131886211%26sn%3D55D0F52637736F28B8F1A91761020222DAE83F5A%26umidtoken%3DYM1U%252B4yYBEMDAPo4LbbfVb7K%26msv%3D8.0.0%26brand%3DApple%26imei%3D1E97C62A4C8322E42E3083642EB14EBAE4E7EBDB%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DC41201D9-C844-4F6D-B2FB-F35149224ADE"},{"key":"shuqirwbody5","val":"serviceWorkerOn=1&stopPullRefresh=1&from=ShuqiTab&upf=20368&sdk=13.3.1&utdid=YM1U%2B4yYBEMDAPo4LbbfVb7K&ustatus=0&first_placeid=111111&net_env=4g&placeid=111111&user_id=2131886211&sn=55D0F52637736F28B8F1A91761020222DAE83F5A&umidtoken=YM1U%2B4yYBEMDAPo4LbbfVb7K&msv=8.0.0&brand=Apple&imei=1E97C62A4C8322E42E3083642EB14EBAE4E7EBDB&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&session=&skinColor=23B383&platform=1&ver=210301&mod=UnknowniPad&statusBarHeight=44.000000&skinVersion=1&wh=1242x2688&soft_id=21&utype=pre_vip&skinId=999&idfa=C41201D9-C844-4F6D-B2FB-F35149224ADE&params=%7B%22resources%22%3A%7B%22ShuqiBsDailyTask%22%3A%7B%7D%7D%7D&userId=2131886211&placeId=111111&timestamp=1624093557&sqSv=1.0&sign=de4d09fd3466c7e555c6d56c7900c7c2&key=sq_h5_gateway&_public="},{"key":"shuqifxbody5","val":""},{"key":"shuqisprwurl5","val":"https://ocean.shuqireader.com/api/ad/adserver/v1/api/getAdInfo?appVer=4.3.6.0&placeId=111111&platform=iOS&requestSrc=h5&resourceId=626&timestamp=1624093581&user_id=2131886211&sqSv=1.0&sign=98a0a4eed92332429d054b15a8c6d4f5&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.3.1%26utdid%3DYM1U%252B4yYBEMDAPo4LbbfVb7K%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2131886211%26sn%3D55D0F52637736F28B8F1A91761020222DAE83F5A%26umidtoken%3DYM1U%252B4yYBEMDAPo4LbbfVb7K%26msv%3D8.0.0%26brand%3DApple%26imei%3D1E97C62A4C8322E42E3083642EB14EBAE4E7EBDB%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DC41201D9-C844-4F6D-B2FB-F35149224ADE"},{"key":"shuqijlbody5","val":"requestSrc=h5&userId=2131886211&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624093557&sqSv=1.0&sign=54632754c24d6e1bab1058260f890449&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.3.1%26utdid%3DYM1U%252B4yYBEMDAPo4LbbfVb7K%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2131886211%26sn%3D55D0F52637736F28B8F1A91761020222DAE83F5A%26umidtoken%3DYM1U%252B4yYBEMDAPo4LbbfVb7K%26msv%3D8.0.0%26brand%3DApple%26imei%3D1E97C62A4C8322E42E3083642EB14EBAE4E7EBDB%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DC41201D9-C844-4F6D-B2FB-F35149224ADE"},{"key":"shuqisqjlbody5","val":"src=&userId=2131886211&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624093547&sqSv=1.0&sign=58f9420bdd0f3fd5fd4c54f7b0501201&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.3.1%26utdid%3DYM1U%252B4yYBEMDAPo4LbbfVb7K%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2131886211%26sn%3D55D0F52637736F28B8F1A91761020222DAE83F5A%26umidtoken%3DYM1U%252B4yYBEMDAPo4LbbfVb7K%26msv%3D8.0.0%26brand%3DApple%26imei%3D1E97C62A4C8322E42E3083642EB14EBAE4E7EBDB%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DC41201D9-C844-4F6D-B2FB-F35149224ADE"},{"key":"shuqicjyurl5","val":"https://ocean.shuqireader.com/api/activity/activity/v1/lottery/info?timestamp=1624093587&userId=2131886211&activityId=311&sqSv=1.0&sign=031058a56cff7b47ce1a888d990efdf4&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.3.1%26utdid%3DYM1U%252B4yYBEMDAPo4LbbfVb7K%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2131886211%26sn%3D55D0F52637736F28B8F1A91761020222DAE83F5A%26umidtoken%3DYM1U%252B4yYBEMDAPo4LbbfVb7K%26msv%3D8.0.0%26brand%3DApple%26imei%3D1E97C62A4C8322E42E3083642EB14EBAE4E7EBDB%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DC41201D9-C844-4F6D-B2FB-F35149224ADE"},{"key":"shuqicjcsbody5","val":"_public=skinId%3D999%26idfa%3DC41201D9-C844-4F6D-B2FB-F35149224ADE%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26umidtoken%3DYM1U%2B4yYBEMDAPo4LbbfVb7K%26user_id%3D2131886211%26sn%3D55D0F52637736F28B8F1A91761020222DAE83F5A%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D1E97C62A4C8322E42E3083642EB14EBAE4E7EBDB%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYM1U%2B4yYBEMDAPo4LbbfVb7K%26utype%3Dpre_vip%26sdk%3D13.3.1&deliveryId=711&key=sq_app_ad&miniWua=HHnB_85VR50ty2kj991JYVkOp9UKXmdk1qTDv3VY%2B1UKZgwQ%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=703&sign=A3AC9FB79A91C4EDCD1FD22CF9B42118&timestamp=1624093565&userId=2131886211&user_id=2131886211&wua=HIVW_zxRdn1rbAm65mZ15e2VNy688mJ2cSmf0h0X3qUH35KqEXGjPJ0BvCqNY71UgNmb7vvGwXb4PT6U53bCsL%2BK/fAVlLCOF2SSi3eFVBU8vkuztq1VAKUe7BzjiLViyt55sPk3O9GiLCruv2qqO1XvUF3JD2hbnL/EtfByS%2BDdfZpG7n/PqnicEho6BG9X0yYDYKGEUMaIj4KmhF9ytzds26whfHk%2B8QkK0cPRrTDQN8Ds%3D"},{"key":"shuqicjbody5","val":"wua=HIVW_L7bzPeKDBuOxocilCsTo%2B4QVBNAp4ymtc6VM2K2teIafduI9T8fCrqIzsg1%2BrEk24oSxDOxaw5%2F8mx1OTvUrYG7u8mUy3Mexhg%2Fob42EuzZhqKxxHBEDTcY4vOxekxSlqrF9eEGrSOSuUZ9w0%2F4RU2Yl1B3CX%2BnLsBGdYdruaBQUmvtfjeV3pZAUyQYUC0pZ8sFIltQ1lZ3id9tQSADUiD6g8fSG44UZOWxsX%2BMwFu0%3D&ua=&userId=2131886211&umidtoken=YM1U%2B4yYBEMDAPo4LbbfVb7K&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&asac=2A20C07RJ9F51AOEFSNHDR&timestamp=1624093571&activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&sqSv=1.0&sign=6313a2ab31fb3db1e0786d1a8c1fb680&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.3.1%26utdid%3DYM1U%252B4yYBEMDAPo4LbbfVb7K%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2131886211%26sn%3D55D0F52637736F28B8F1A91761020222DAE83F5A%26umidtoken%3DYM1U%252B4yYBEMDAPo4LbbfVb7K%26msv%3D8.0.0%26brand%3DApple%26imei%3D1E97C62A4C8322E42E3083642EB14EBAE4E7EBDB%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DC41201D9-C844-4F6D-B2FB-F35149224ADE"},{"key":"shuqijsspbody5","val":""},{"key":"shuqijsydurl5","val":""},{"key":"shuqijsydbody5","val":""},{"key":"shuqijsqdbody5","val":""},{"key":"shuqijsqdspyurl5","val":""},{"key":"shuqijsqdspbody5","val":""},{"key":"shuqijsrwbody5","val":""},{"key":"shuqijsfxbody5","val":""},{"key":"shuqijsbookurl5","val":""},{"key":"shuqijsbookbody5","val":""},{"key":"shuqijssprwurl5","val":""},{"key":"shuqiuserurl6","val":"https://ocean.shuqireader.com/api/jaccount/accountapi/v1/sapi/account/getBindinfo?userId=2127869117&sqSv=1.0&timestamp=1624093644&sign=5ec1d233da2905d9e43620087acd979f&key=sq_h5_gateway"},{"key":"shuqisyurl6","val":"https://render.shuqireader.com/load/resource?sdk=13.5.1&utdid=YM1VBZtPBSsDABvExPkGEhUQ&ustatus=0&first_placeid=111111&net_env=wifi&placeid=111111&user_id=2127869117&sn=902786315D6C51E57409081982F9B239BCC66E29&umidtoken=YM1VBZtPBSsDABvExPkGEhUQ&msv=8.0.0&brand=Apple&imei=D06D7048C6CC96E704249DC0B7461036E819A5F1&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=iOS&ver=210301&mod=iPad4G&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=BF2EE7D0-6FFC-43B0-9A12-CA7C4BCE9520"},{"key":"shuqisybody6","val":"appVer=4.3.6.0&imei=D06D7048C6CC96E704249DC0B7461036E819A5F1&isNewUser=1&params=%7B%22resources%22%3A%7B%22ShuqiVipEntry%22%3A%7B%7D%2C%22personalCardConfig%22%3A%7B%7D%7D%7D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=d00cc832ea570ee75a4a703ecef152ce&sn=902786315D6C51E57409081982F9B239BCC66E29&soft_id=21&timestamp=1624093598&user_id=2127869117&ver=210301"},{"key":"shuqispbody6","val":"_public=skinId%3D999%26idfa%3DBF2EE7D0-6FFC-43B0-9A12-CA7C4BCE9520%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26umidtoken%3DYM1VBZtPBSsDABvExPkGEhUQ%26user_id%3D2127869117%26sn%3D902786315D6C51E57409081982F9B239BCC66E29%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3DD06D7048C6CC96E704249DC0B7461036E819A5F1%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPad4G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYM1VBZtPBSsDABvExPkGEhUQ%26utype%3Dpre_vip%26sdk%3D13.5.1&deliveryId=525&key=sq_app_ad&miniWua=HHnB_n4H0r9hJpvi1sT5pYEsTpeY1JqAS5w7%2Bc5L4eYI8r9c%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=626&sign=12C861A618C66E975483F1304396E52D&timestamp=1624093618&userId=2127869117&user_id=2127869117&wua=HIVW_zg8IpQkpIgzRBKlZ7e8NNIzFIfpBUHCYZFpiQlUH3tE%2BW0kI89QlmOC61g3JaZzJ7RnhTrQxlSLC5DAeGJiap4pscbASbS7zQ1Btb3pHNoH60RUhI0JxVKT2NvqrkyCFV9ykazpx3cfY81uwmDmP4sorPgBqDxl9nM%2B3uf6JU6JbzohA4fvu5jWNqgsIliVGqdh3SpBHRTpogNpUS7pfRZUbTg/pjmlegzHgEkPYHrI%3D"},{"key":"shuqiscbody6","val":""},{"key":"shuqiydbody6","val":""},{"key":"shuqiqdbody6","val":"clientTimestamp=1624093610&position=501&userId=2127869117&signInType=1&wua=HIVW_IQmJfio38rZIUWzApQbKpH4du3slkUv468ha6Dy%2FTOPJXXeNyECzmdTV37GZUyeM1IcWOMq5SVPNLOvlxlnOURi3u6x4ddii6t6OfOdtOsOQdqzlEcp4cZwQJYahA0eHYL9gwAT96UGiA%2FvQFVTKcP2TpaxhbfpCRutQkAlUlxCri%2FlWSOXIl8AvpdH9rxiUOycIuJqiuRZouY2TOGYWIs0MZBzmDs7FGnmjcxlTq0k%3D&ua=&miniWua=HHnB_00%2FvC0yGgFy9gfq%2Fb%2FzQ8gvN%2F7uC7EK2bY2Ny3jkjGc%3D&umidtoken=YM1VBZtPBSsDABvExPkGEhUQ&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&sign=b9bbe42d47535c83c698010cd0e1a234&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.5.1%26utdid%3DYM1VBZtPBSsDABvExPkGEhUQ%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2127869117%26sn%3D902786315D6C51E57409081982F9B239BCC66E29%26umidtoken%3DYM1VBZtPBSsDABvExPkGEhUQ%26msv%3D8.0.0%26brand%3DApple%26imei%3DD06D7048C6CC96E704249DC0B7461036E819A5F1%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad4G%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DBF2EE7D0-6FFC-43B0-9A12-CA7C4BCE9520"},{"key":"shuqirwbody6","val":"serviceWorkerOn=1&stopPullRefresh=1&from=ShuqiTab&upf=20368&sdk=13.5.1&utdid=YM1VBZtPBSsDABvExPkGEhUQ&ustatus=0&first_placeid=111111&net_env=wifi&placeid=111111&user_id=2127869117&sn=902786315D6C51E57409081982F9B239BCC66E29&umidtoken=YM1VBZtPBSsDABvExPkGEhUQ&msv=8.0.0&brand=Apple&imei=D06D7048C6CC96E704249DC0B7461036E819A5F1&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=1&ver=210301&mod=iPad4G&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=BF2EE7D0-6FFC-43B0-9A12-CA7C4BCE9520&params=%7B%22resources%22%3A%7B%22ShuqiBsDailyTask%22%3A%7B%7D%7D%7D&userId=2127869117&placeId=111111&timestamp=1624093624&sqSv=1.0&sign=3e126ea6d52a832b8c56f0fbb4800ba5&key=sq_h5_gateway&_public="},{"key":"shuqifxbody6","val":""},{"key":"shuqisprwurl6","val":"https://ocean.shuqireader.com/api/ad/adserver/v1/api/getAdInfo?appVer=4.3.6.0&placeId=111111&platform=iOS&requestSrc=h5&resourceId=626&timestamp=1624093645&user_id=2127869117&sqSv=1.0&sign=8435d2e164a06852595c84bcd31b3ef5&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.5.1%26utdid%3DYM1VBZtPBSsDABvExPkGEhUQ%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2127869117%26sn%3D902786315D6C51E57409081982F9B239BCC66E29%26umidtoken%3DYM1VBZtPBSsDABvExPkGEhUQ%26msv%3D8.0.0%26brand%3DApple%26imei%3DD06D7048C6CC96E704249DC0B7461036E819A5F1%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad4G%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DBF2EE7D0-6FFC-43B0-9A12-CA7C4BCE9520"},{"key":"shuqijlbody6","val":"requestSrc=h5&userId=2127869117&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624093624&sqSv=1.0&sign=c94a391f77100b758eda8fce26da690d&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.5.1%26utdid%3DYM1VBZtPBSsDABvExPkGEhUQ%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2127869117%26sn%3D902786315D6C51E57409081982F9B239BCC66E29%26umidtoken%3DYM1VBZtPBSsDABvExPkGEhUQ%26msv%3D8.0.0%26brand%3DApple%26imei%3DD06D7048C6CC96E704249DC0B7461036E819A5F1%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad4G%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DBF2EE7D0-6FFC-43B0-9A12-CA7C4BCE9520"},{"key":"shuqisqjlbody6","val":"src=&userId=2127869117&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624093614&sqSv=1.0&sign=f56dd17af1e11421358bb23a2c1671c2&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.5.1%26utdid%3DYM1VBZtPBSsDABvExPkGEhUQ%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2127869117%26sn%3D902786315D6C51E57409081982F9B239BCC66E29%26umidtoken%3DYM1VBZtPBSsDABvExPkGEhUQ%26msv%3D8.0.0%26brand%3DApple%26imei%3DD06D7048C6CC96E704249DC0B7461036E819A5F1%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad4G%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DBF2EE7D0-6FFC-43B0-9A12-CA7C4BCE9520"},{"key":"shuqicjyurl6","val":"https://ocean.shuqireader.com/api/activity/activity/v1/lottery/info?timestamp=1624093646&userId=2127869117&activityId=311&sqSv=1.0&sign=070328ec0ed0f7a30ef640e6b73d0627&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.5.1%26utdid%3DYM1VBZtPBSsDABvExPkGEhUQ%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2127869117%26sn%3D902786315D6C51E57409081982F9B239BCC66E29%26umidtoken%3DYM1VBZtPBSsDABvExPkGEhUQ%26msv%3D8.0.0%26brand%3DApple%26imei%3DD06D7048C6CC96E704249DC0B7461036E819A5F1%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad4G%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DBF2EE7D0-6FFC-43B0-9A12-CA7C4BCE9520"},{"key":"shuqicjcsbody6","val":"_public=skinId%3D999%26idfa%3DBF2EE7D0-6FFC-43B0-9A12-CA7C4BCE9520%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26umidtoken%3DYM1VBZtPBSsDABvExPkGEhUQ%26user_id%3D2127869117%26sn%3D902786315D6C51E57409081982F9B239BCC66E29%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3DD06D7048C6CC96E704249DC0B7461036E819A5F1%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPad4G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYM1VBZtPBSsDABvExPkGEhUQ%26utype%3Dpre_vip%26sdk%3D13.5.1&deliveryId=711&key=sq_app_ad&miniWua=HHnB_k3yWEhG25CaHxxzOq7CoTWu9LX0Z0LHrZuU1Fjss0hU%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=703&sign=962955E9A1110C92A3F3C624245CF41A&timestamp=1624093629&userId=2127869117&user_id=2127869117&wua=HIVW_QsIsC4cG9IiPew4iWjUyGKnwPklg0Evvrxe4nA0IBzWpk%2B2vuSxrtldA8TalPApuKufNQL13RfWZlPy%2BaSROGvnqGx6guOzNmp2PGe5DCC49NTFQQZ9u87jf8xfsphGPYLScLXC6eyNqmVfX/%2BljHurE22UNswaBfzexih54ANpDNQ%2BTw2hJKSO90M%2BmNGJtn4fEm01%2BOsm27Mp8NYU6O5mJGxmYANOMJ9gGt1Z9GRY%3D"},{"key":"shuqicjbody6","val":"wua=HIVW_TAsyh5j%2FHaofHWE1X1HS2EbGx24G9u4tCd5j00uKCpXwS895t44hK%2Br9cXLxQXHktGzOSVfBNytl%2FPk79bekmkGpGZtLXjDWzoG%2FKGJ0627SqphwqdYPw3wVxjwbbhfcUYhMZqRtlFmt5tA3hTvNEx94X5gr6SQaGONy9Q4SjIVHXKAm4n6JoCypc8Ec89KHv0fd3lunD191Eko3uIoCcRdKgKtS%2BLv8uPJ2om4V3dI%3D&ua=&userId=2127869117&umidtoken=YM1VBZtPBSsDABvExPkGEhUQ&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&asac=2A20C07RJ9F51AOEFSNHDR&timestamp=1624093634&activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&sqSv=1.0&sign=0e662285588209fa9a0b61612a779fc0&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.5.1%26utdid%3DYM1VBZtPBSsDABvExPkGEhUQ%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2127869117%26sn%3D902786315D6C51E57409081982F9B239BCC66E29%26umidtoken%3DYM1VBZtPBSsDABvExPkGEhUQ%26msv%3D8.0.0%26brand%3DApple%26imei%3DD06D7048C6CC96E704249DC0B7461036E819A5F1%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad4G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DBF2EE7D0-6FFC-43B0-9A12-CA7C4BCE9520"},{"key":"shuqijsspbody6","val":""},{"key":"shuqijsydurl6","val":""},{"key":"shuqijsydbody6","val":""},{"key":"shuqijsqdbody6","val":""},{"key":"shuqijsqdspyurl6","val":""},{"key":"shuqijsqdspbody6","val":""},{"key":"shuqijsrwbody6","val":""},{"key":"shuqijsfxbody6","val":""},{"key":"shuqijsbookurl6","val":""},{"key":"shuqijsbookbody6","val":""},{"key":"shuqijssprwurl6","val":""},{"key":"shuqiuserurl7","val":"https://ocean.shuqireader.com/api/jaccount/accountapi/v1/sapi/account/getBindinfo?userId=2129214869&sqSv=1.0&timestamp=1624093714&sign=ea19272fa7ceb34d75e5b60836452a8b&key=sq_h5_gateway"},{"key":"shuqisyurl7","val":"https://render.shuqireader.com/load/resource?sdk=13.4.1&utdid=YM1VDm85M70DABV5WwhkYvAC&ustatus=0&first_placeid=111111&net_env=3g&placeid=111111&user_id=2129214869&sn=E08B14454A8F69DD9559F00361BC4DA19BF2D5E9&umidtoken=YM1VDm85M70DABV5WwhkYvAC&msv=8.0.0&brand=Apple&imei=15E97A0B3BA53DC2468F2CBDAA7C20130ADFB917&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=iOS&ver=210301&mod=iPhoneX&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=F6303AA7-4A54-4D62-BB8E-4072C79862BD"},{"key":"shuqisybody7","val":"appVer=4.3.6.0&imei=15E97A0B3BA53DC2468F2CBDAA7C20130ADFB917&isNewUser=1&params=%7B%22resources%22%3A%7B%22ShuqiVipEntry%22%3A%7B%7D%2C%22personalCardConfig%22%3A%7B%7D%7D%7D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=e75553b1cfdb6a15e008a04aece44668&sn=E08B14454A8F69DD9559F00361BC4DA19BF2D5E9&soft_id=21&timestamp=1624093659&user_id=2129214869&ver=210301"},{"key":"shuqispbody7","val":"_public=skinId%3D999%26idfa%3DF6303AA7-4A54-4D62-BB8E-4072C79862BD%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26umidtoken%3DYM1VDm85M70DABV5WwhkYvAC%26user_id%3D2129214869%26sn%3DE08B14454A8F69DD9559F00361BC4DA19BF2D5E9%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D15E97A0B3BA53DC2468F2CBDAA7C20130ADFB917%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhoneX%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYM1VDm85M70DABV5WwhkYvAC%26utype%3Dpre_vip%26sdk%3D13.4.1&deliveryId=525&key=sq_app_ad&miniWua=HHnB_5GqT21KJ6nkWFY50z0SPf3APgfROqP6MJl8jwH%2Bc1Cg%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=626&sign=AA9E9B83B7EB4A650AB6CB65F2F4541F&timestamp=1624093681&userId=2129214869&user_id=2129214869&wua=HIVW_RpAQNeXmU3pi0dzt8bzjYlGd27hiu5TxIleQHNHPGbnL26jAUeZ9OdsCeLBLkfcnu54/LCVbFSWf/B9ceyXVCcNIVeAUJV5g%2BM8JMyWCTuUIYUezRkh5HOu5iqpmBaVNKVHn33DJz4tGaTuY5dhWE1nO%2BgAS5I5BlYttXnmwrKB37Vid5uudD2ItPy7ifCFFKxD%2Bjgf967M3Gx/1O2plqPwNdo2JDTtLIaA/4R/y9bk%3D"},{"key":"shuqiscbody7","val":""},{"key":"shuqiydbody7","val":""},{"key":"shuqiqdbody7","val":"clientTimestamp=1624093673&position=501&userId=2129214869&signInType=1&wua=HIVW_kdFqOZWYqZqX3U%2Bq0CyNz5XuKa8RhzpdebKPU9UDxczZB8W%2FtnWQvr8p%2BdWp7SLbmynCKF0g67DuQq%2BmLz1ZDY4bNK7iHlPri3B5PJXPHvehJLZHGBCGypy2xqhcxy%2FGEVfKvNYFyirq7uwP5WAyu7qxETiEZRFB5JJU07oP96D587F7HGSYN8%2BW%2B4cVBIOD%2F2m2p9cFiDiR4Se1iOEBYqyjZzWVFsO85Z2cWy5Zjos%3D&ua=&miniWua=HHnB_yMFiIJznrH20lAqj7XcF8U2xaN1ri%2Fn0npsBlgRBiTE%3D&umidtoken=YM1VDm85M70DABV5WwhkYvAC&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&sign=ffd3d716d5060b1b7b89d66b0f08f695&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.4.1%26utdid%3DYM1VDm85M70DABV5WwhkYvAC%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2129214869%26sn%3DE08B14454A8F69DD9559F00361BC4DA19BF2D5E9%26umidtoken%3DYM1VDm85M70DABV5WwhkYvAC%26msv%3D8.0.0%26brand%3DApple%26imei%3D15E97A0B3BA53DC2468F2CBDAA7C20130ADFB917%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhoneX%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DF6303AA7-4A54-4D62-BB8E-4072C79862BD"},{"key":"shuqirwbody7","val":"serviceWorkerOn=1&stopPullRefresh=1&from=ShuqiTab&upf=20368&sdk=13.4.1&utdid=YM1VDm85M70DABV5WwhkYvAC&ustatus=0&first_placeid=111111&net_env=3g&placeid=111111&user_id=2129214869&sn=E08B14454A8F69DD9559F00361BC4DA19BF2D5E9&umidtoken=YM1VDm85M70DABV5WwhkYvAC&msv=8.0.0&brand=Apple&imei=15E97A0B3BA53DC2468F2CBDAA7C20130ADFB917&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=1&ver=210301&mod=iPhoneX&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=F6303AA7-4A54-4D62-BB8E-4072C79862BD&params=%7B%22resources%22%3A%7B%22ShuqiBsDailyTask%22%3A%7B%7D%7D%7D&userId=2129214869&placeId=111111&timestamp=1624093687&sqSv=1.0&sign=d055864bf2070e784331ef867cdd0e09&key=sq_h5_gateway&_public="},{"key":"shuqifxbody7","val":""},{"key":"shuqisprwurl7","val":"https://ocean.shuqireader.com/api/ad/adserver/v1/api/getAdInfo?appVer=4.3.6.0&placeId=111111&platform=iOS&requestSrc=h5&resourceId=626&timestamp=1624093713&user_id=2129214869&sqSv=1.0&sign=6e188f303c31858b2ecef14398852a81&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.4.1%26utdid%3DYM1VDm85M70DABV5WwhkYvAC%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2129214869%26sn%3DE08B14454A8F69DD9559F00361BC4DA19BF2D5E9%26umidtoken%3DYM1VDm85M70DABV5WwhkYvAC%26msv%3D8.0.0%26brand%3DApple%26imei%3D15E97A0B3BA53DC2468F2CBDAA7C20130ADFB917%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhoneX%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DF6303AA7-4A54-4D62-BB8E-4072C79862BD"},{"key":"shuqijlbody7","val":"requestSrc=h5&userId=2129214869&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624093687&sqSv=1.0&sign=659d73f7b298d6d25492ac66eb421418&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.4.1%26utdid%3DYM1VDm85M70DABV5WwhkYvAC%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2129214869%26sn%3DE08B14454A8F69DD9559F00361BC4DA19BF2D5E9%26umidtoken%3DYM1VDm85M70DABV5WwhkYvAC%26msv%3D8.0.0%26brand%3DApple%26imei%3D15E97A0B3BA53DC2468F2CBDAA7C20130ADFB917%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhoneX%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DF6303AA7-4A54-4D62-BB8E-4072C79862BD"},{"key":"shuqisqjlbody7","val":"src=&userId=2129214869&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624093678&sqSv=1.0&sign=389dfbd2f71ffeabe6e5862a8a08437d&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.4.1%26utdid%3DYM1VDm85M70DABV5WwhkYvAC%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2129214869%26sn%3DE08B14454A8F69DD9559F00361BC4DA19BF2D5E9%26umidtoken%3DYM1VDm85M70DABV5WwhkYvAC%26msv%3D8.0.0%26brand%3DApple%26imei%3D15E97A0B3BA53DC2468F2CBDAA7C20130ADFB917%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhoneX%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DF6303AA7-4A54-4D62-BB8E-4072C79862BD"},{"key":"shuqicjyurl7","val":"https://ocean.shuqireader.com/api/activity/activity/v1/lottery/info?timestamp=1624093714&userId=2129214869&activityId=311&sqSv=1.0&sign=0c3134a1c0365d6aabdd68a5035a3173&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.4.1%26utdid%3DYM1VDm85M70DABV5WwhkYvAC%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2129214869%26sn%3DE08B14454A8F69DD9559F00361BC4DA19BF2D5E9%26umidtoken%3DYM1VDm85M70DABV5WwhkYvAC%26msv%3D8.0.0%26brand%3DApple%26imei%3D15E97A0B3BA53DC2468F2CBDAA7C20130ADFB917%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhoneX%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DF6303AA7-4A54-4D62-BB8E-4072C79862BD"},{"key":"shuqicjcsbody7","val":"_public=skinId%3D999%26idfa%3DF6303AA7-4A54-4D62-BB8E-4072C79862BD%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26umidtoken%3DYM1VDm85M70DABV5WwhkYvAC%26user_id%3D2129214869%26sn%3DE08B14454A8F69DD9559F00361BC4DA19BF2D5E9%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D15E97A0B3BA53DC2468F2CBDAA7C20130ADFB917%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhoneX%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYM1VDm85M70DABV5WwhkYvAC%26utype%3Dpre_vip%26sdk%3D13.4.1&deliveryId=711&key=sq_app_ad&miniWua=HHnB_xKzLzCSSc4u8MJWDP/RL57O5SCuA6sKWSXY24U0IO/I%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=703&sign=A2245DCD0DBAEC834DFDC0FD7CF5D0FD&timestamp=1624093693&userId=2129214869&user_id=2129214869&wua=HIVW_cKEpd0JIUksqDY/Dh4JoWkyWxcc5k/WGV2h3idqqzRRNyfyn/2fR8m9XURwkHOth7bfVesRe5/UjT98sLmI6nlMMCmBOZ9jVNBq433u3hiZnEeM1AzEbhzA4Yx1umaVoZb9YVEwJ5dQsMC2CuyNb6%2BbXNBh7nCfayhWDDZM/sf%2BmWCMsETZcPDmo%2BKvwLwDGpxRcU9ToCbCsbGjBNVKClMhZ1E7s1Hdr8zLj/ES3AXY%3D"},{"key":"shuqicjbody7","val":"wua=HIVW_m26gOs%2FRdlaEFrIf0NTWzuXnofLEqeiVs392Tw169cnzvXpU%2Bg%2Br%2BHQoIxBUfVzTG81NJAuk1DqbQkFifk%2FVJ%2FoPO5OsPXwxFuh0FiuMWDNB7z6YUKjL0tw6fqdRut4q3zAbvWd406SiG1crXRKvFFINNu8E7zZzaKmOxwNzjM8z3kMOJ3jVdNeDiba2r77Zkd4YDbRVaPKWsKxJSQ6yu%2FIT%2Bk4kCmvIkRnfAL0OlZA%3D&ua=&userId=2129214869&umidtoken=YM1VDm85M70DABV5WwhkYvAC&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&asac=2A20C07RJ9F51AOEFSNHDR&timestamp=1624093701&activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&sqSv=1.0&sign=2a6da111444ce3003e38a93d055d88bb&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.4.1%26utdid%3DYM1VDm85M70DABV5WwhkYvAC%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2129214869%26sn%3DE08B14454A8F69DD9559F00361BC4DA19BF2D5E9%26umidtoken%3DYM1VDm85M70DABV5WwhkYvAC%26msv%3D8.0.0%26brand%3DApple%26imei%3D15E97A0B3BA53DC2468F2CBDAA7C20130ADFB917%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhoneX%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DF6303AA7-4A54-4D62-BB8E-4072C79862BD"},{"key":"shuqijsspbody7","val":""},{"key":"shuqijsydurl7","val":""},{"key":"shuqijsydbody7","val":""},{"key":"shuqijsqdbody7","val":""},{"key":"shuqijsqdspyurl7","val":""},{"key":"shuqijsqdspbody7","val":""},{"key":"shuqijsrwbody7","val":""},{"key":"shuqijsfxbody7","val":""},{"key":"shuqijsbookurl7","val":""},{"key":"shuqijsbookbody7","val":""},{"key":"shuqijssprwurl7","val":""},{"key":"shuqiuserurl8","val":"https://ocean.shuqireader.com/api/jaccount/accountapi/v1/sapi/account/getBindinfo?userId=2131289221&sqSv=1.0&timestamp=1624093783&sign=7e98839e18730682d99ebe8655ac5956&key=sq_h5_gateway"},{"key":"shuqisyurl8","val":"https://render.shuqireader.com/load/resource?sdk=13.1.1&utdid=YM1VGeF6etkDADlHYWAa6A%2Bo&ustatus=0&first_placeid=111111&net_env=3g&placeid=111111&user_id=2131289221&sn=4B3BB5E96227BA50ADA8A93E3933702C4FC19F43&umidtoken=YM1VGeF6etkDADlHYWAa6A%2Bo&msv=8.0.0&brand=Apple&imei=9961F18E245D5D5F2A1B896DDBDE603BCD567E49&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=iOS&ver=210301&mod=iPodtouch3G&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=25F79B88-36EB-4BC2-8CD6-FA646D4C41DD"},{"key":"shuqisybody8","val":"appVer=4.3.6.0&imei=9961F18E245D5D5F2A1B896DDBDE603BCD567E49&isNewUser=1&params=%7B%22resources%22%3A%7B%22ShuqiVipEntry%22%3A%7B%7D%2C%22personalCardConfig%22%3A%7B%7D%7D%7D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=d4aad73c44505719b1629bfdf2739cbb&sn=4B3BB5E96227BA50ADA8A93E3933702C4FC19F43&soft_id=21&timestamp=1624093737&user_id=2131289221&ver=210301"},{"key":"shuqispbody8","val":"_public=skinId%3D999%26idfa%3D25F79B88-36EB-4BC2-8CD6-FA646D4C41DD%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26umidtoken%3DYM1VGeF6etkDADlHYWAa6A%2Bo%26user_id%3D2131289221%26sn%3D4B3BB5E96227BA50ADA8A93E3933702C4FC19F43%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D9961F18E245D5D5F2A1B896DDBDE603BCD567E49%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPodtouch3G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYM1VGeF6etkDADlHYWAa6A%2Bo%26utype%3Dpre_vip%26sdk%3D13.1.1&deliveryId=525&key=sq_app_ad&miniWua=HHnB_F33W0vhKP%2BqIy8ZoE/y/kKp4GXhc6q66lc5mnGmkoqM%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=626&sign=C97B8DDA0CBA8A5481951A90DAECA41D&timestamp=1624093761&userId=2131289221&user_id=2131289221&wua=HIVW_F5BNVAlyvefeWxXwpY4XNIPkuzb0w7qbKwwNZXII8f8HaPAzFL7VpTIOJAPJJ/nGKtkSZvSYm5LLge0FrHm%2BeOzyLR78fcGdeqbFr6%2B2wA5TWtXmT9/fqkbKEgQDC990tjK85US4PNc1c%2BC4LwfGth4SC53WaO%2BoYJBLG0iykPsB1%2BwIKbACwVUqI8Oa91T83CnFonmxxgKqsBLgme0HKGogBwkSu4jyB%2B7VGNkwZFI%3D"},{"key":"shuqiscbody8","val":""},{"key":"shuqiydbody8","val":""},{"key":"shuqiqdbody8","val":"clientTimestamp=1624093752&position=501&userId=2131289221&signInType=1&wua=HIVW_lsht20OatgO3aciM4z%2Ba8KPQKfxU17TU%2FYkN1od%2FBKJqc3%2FiuG0Zy5ONYE%2FrUUuOI4yRrH59mzw8xVkJlZxdANciFULbmFKDQYUuX9X0lcF7aWmH9FRUy8dgN%2FU19a8DxRATh%2Bjm0fq1uzFO%2BHAR5lUbw6YQuW2qFWR%2BpP2yqAZiZRlwdjSZn3zMZwsvunV3uRuYl85M%2F1HxQHMgIhb6ofIt1WpgkRtFeBm5C7zMDhg%3D&ua=&miniWua=HHnB_aNKD0rrQizkbxoZRD5s8tV8km%2Bx0ywm096dXUkgo8AM%3D&umidtoken=YM1VGeF6etkDADlHYWAa6A%2Bo&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&sign=d76f98a77523ea637592a05bfadfddf2&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.1.1%26utdid%3DYM1VGeF6etkDADlHYWAa6A%252Bo%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2131289221%26sn%3D4B3BB5E96227BA50ADA8A93E3933702C4FC19F43%26umidtoken%3DYM1VGeF6etkDADlHYWAa6A%252Bo%26msv%3D8.0.0%26brand%3DApple%26imei%3D9961F18E245D5D5F2A1B896DDBDE603BCD567E49%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPodtouch3G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D25F79B88-36EB-4BC2-8CD6-FA646D4C41DD"},{"key":"shuqirwbody8","val":"serviceWorkerOn=1&stopPullRefresh=1&from=ShuqiTab&upf=20368&sdk=13.1.1&utdid=YM1VGeF6etkDADlHYWAa6A%2Bo&ustatus=0&first_placeid=111111&net_env=3g&placeid=111111&user_id=2131289221&sn=4B3BB5E96227BA50ADA8A93E3933702C4FC19F43&umidtoken=YM1VGeF6etkDADlHYWAa6A%2Bo&msv=8.0.0&brand=Apple&imei=9961F18E245D5D5F2A1B896DDBDE603BCD567E49&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&session=&skinColor=23B383&platform=1&ver=210301&mod=iPodtouch3G&statusBarHeight=44.000000&skinVersion=1&wh=1242x2688&soft_id=21&utype=pre_vip&skinId=999&idfa=25F79B88-36EB-4BC2-8CD6-FA646D4C41DD&params=%7B%22resources%22%3A%7B%22ShuqiBsDailyTask%22%3A%7B%7D%7D%7D&userId=2131289221&placeId=111111&timestamp=1624093764&sqSv=1.0&sign=6cb00236ae9fc6098bc2a86972a88d99&key=sq_h5_gateway&_public="},{"key":"shuqifxbody8","val":""},{"key":"shuqisprwurl8","val":"https://ocean.shuqireader.com/api/ad/adserver/v1/api/getAdInfo?appVer=4.3.6.0&placeId=111111&platform=iOS&requestSrc=h5&resourceId=626&timestamp=1624093782&user_id=2131289221&sqSv=1.0&sign=5292c65751973ca048352ab1400072e1&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.1.1%26utdid%3DYM1VGeF6etkDADlHYWAa6A%252Bo%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2131289221%26sn%3D4B3BB5E96227BA50ADA8A93E3933702C4FC19F43%26umidtoken%3DYM1VGeF6etkDADlHYWAa6A%252Bo%26msv%3D8.0.0%26brand%3DApple%26imei%3D9961F18E245D5D5F2A1B896DDBDE603BCD567E49%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPodtouch3G%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D25F79B88-36EB-4BC2-8CD6-FA646D4C41DD"},{"key":"shuqijlbody8","val":"requestSrc=h5&userId=2131289221&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624093764&sqSv=1.0&sign=263ff0a49f2080289d767fd5adf5d3f1&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.1.1%26utdid%3DYM1VGeF6etkDADlHYWAa6A%252Bo%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2131289221%26sn%3D4B3BB5E96227BA50ADA8A93E3933702C4FC19F43%26umidtoken%3DYM1VGeF6etkDADlHYWAa6A%252Bo%26msv%3D8.0.0%26brand%3DApple%26imei%3D9961F18E245D5D5F2A1B896DDBDE603BCD567E49%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPodtouch3G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D25F79B88-36EB-4BC2-8CD6-FA646D4C41DD"},{"key":"shuqisqjlbody8","val":"src=&userId=2131289221&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624093757&sqSv=1.0&sign=a74ea76b107b128de2c8967a5219be32&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.1.1%26utdid%3DYM1VGeF6etkDADlHYWAa6A%252Bo%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2131289221%26sn%3D4B3BB5E96227BA50ADA8A93E3933702C4FC19F43%26umidtoken%3DYM1VGeF6etkDADlHYWAa6A%252Bo%26msv%3D8.0.0%26brand%3DApple%26imei%3D9961F18E245D5D5F2A1B896DDBDE603BCD567E49%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPodtouch3G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D25F79B88-36EB-4BC2-8CD6-FA646D4C41DD"},{"key":"shuqicjyurl8","val":"https://ocean.shuqireader.com/api/activity/activity/v1/lottery/info?timestamp=1624093784&userId=2131289221&activityId=311&sqSv=1.0&sign=e7a0f9cc6063652cae5227d13aa21c83&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.1.1%26utdid%3DYM1VGeF6etkDADlHYWAa6A%252Bo%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2131289221%26sn%3D4B3BB5E96227BA50ADA8A93E3933702C4FC19F43%26umidtoken%3DYM1VGeF6etkDADlHYWAa6A%252Bo%26msv%3D8.0.0%26brand%3DApple%26imei%3D9961F18E245D5D5F2A1B896DDBDE603BCD567E49%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPodtouch3G%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D25F79B88-36EB-4BC2-8CD6-FA646D4C41DD"},{"key":"shuqicjcsbody8","val":"_public=skinId%3D999%26idfa%3D25F79B88-36EB-4BC2-8CD6-FA646D4C41DD%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26umidtoken%3DYM1VGeF6etkDADlHYWAa6A%2Bo%26user_id%3D2131289221%26sn%3D4B3BB5E96227BA50ADA8A93E3933702C4FC19F43%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D9961F18E245D5D5F2A1B896DDBDE603BCD567E49%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPodtouch3G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYM1VGeF6etkDADlHYWAa6A%2Bo%26utype%3Dpre_vip%26sdk%3D13.1.1&deliveryId=711&key=sq_app_ad&miniWua=HHnB_dq51LgoF8YH%2BeKyctrR2qbL4yghEnwTODCLIa0VDVNM%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=703&sign=243A22E052298A1850BBD60908B69180&timestamp=1624093770&userId=2131289221&user_id=2131289221&wua=HIVW_2IrRtrfR4Wc0x/X5%2BBilKNik5GNvZ2bl/DFzUEmVOqnFG8rY4yYWQ7Ehy3UglTxRjuW6Lss78jpNr5%2BYI3/umnBLlvCbRpEsrbPcxj/pg%2B2m6o23yhxVEeRHAbkhx6j6MRxHO6Qss75DeiuZYZ4F51yE4tA/LGX8cTgzz/KZcBsJNnHcT/avxlaIVmjEoNJyIzWHlRbKh9l9zJ35ztdDnZ%2BTmiUXrGWnNYA5PQvYt6c%3D"},{"key":"shuqicjbody8","val":"wua=HIVW_jtyuWqmx4HLzNgFRbTTIjDq9txhv8Wui8bCYp4NbfBS3spQKBGufB0DE8%2F9zcxjGrieu4oXu2z3V6UvdGkOa29PaRGxkoMKb1K2FuRiFFYSmSiqVLf0%2FZ1NBTg%2BXN3S6rATSxdH5gdAXMDXoX8IPXNgBjNREEiwXuhwxzFhP3rNzHOOyLbm8NyzArdfDqHE2CirMukxZk11GzGwRpb5o4QFTYOFzkLMMtQNtXAsL0ok%3D&ua=&userId=2131289221&umidtoken=YM1VGeF6etkDADlHYWAa6A%2Bo&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&asac=2A20C07RJ9F51AOEFSNHDR&timestamp=1624093772&activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&sqSv=1.0&sign=2b0e9374401e13e2d9bde211e1c0324b&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.1.1%26utdid%3DYM1VGeF6etkDADlHYWAa6A%252Bo%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2131289221%26sn%3D4B3BB5E96227BA50ADA8A93E3933702C4FC19F43%26umidtoken%3DYM1VGeF6etkDADlHYWAa6A%252Bo%26msv%3D8.0.0%26brand%3DApple%26imei%3D9961F18E245D5D5F2A1B896DDBDE603BCD567E49%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPodtouch3G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D25F79B88-36EB-4BC2-8CD6-FA646D4C41DD"},{"key":"shuqijsspbody8","val":""},{"key":"shuqijsydurl8","val":""},{"key":"shuqijsydbody8","val":""},{"key":"shuqijsqdbody8","val":""},{"key":"shuqijsqdspyurl8","val":""},{"key":"shuqijsqdspbody8","val":""},{"key":"shuqijsrwbody8","val":""},{"key":"shuqijsfxbody8","val":""},{"key":"shuqijsbookurl8","val":""},{"key":"shuqijsbookbody8","val":""},{"key":"shuqijssprwurl8","val":""},{"key":"shuqiuserurl9","val":"https://ocean.shuqireader.com/api/jaccount/accountapi/v1/sapi/account/getBindinfo?userId=2132033782&sqSv=1.0&timestamp=1624093861&sign=11412441ee77efa9b40b0cb7943c1e06&key=sq_h5_gateway"},{"key":"shuqisyurl9","val":"https://render.shuqireader.com/load/resource?sdk=13.3.1&utdid=YM1VJ7gXgNEDAPZlmq3V4kSv&ustatus=0&first_placeid=111111&net_env=4g&placeid=111111&user_id=2132033782&sn=8242220720EEFBD7749571096413DD1F560B62EF&umidtoken=YM1VJ7gXgNEDAPZlmq3V4kSv&msv=8.0.0&brand=Apple&imei=744945EE876917811F12D45DAC3987B10FFBDA03&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&session=&skinColor=23B383&platform=iOS&ver=210301&mod=UnknowniPod&statusBarHeight=44.000000&skinVersion=1&wh=1242x2688&soft_id=21&utype=pre_vip&skinId=999&idfa=3D91C615-5A00-4E7C-85B4-BDA8BD1A4DBB"},{"key":"shuqisybody9","val":"appVer=4.3.6.0&imei=744945EE876917811F12D45DAC3987B10FFBDA03&isNewUser=1&params=%7B%22resources%22%3A%7B%22ShuqiVipEntry%22%3A%7B%7D%2C%22personalCardConfig%22%3A%7B%7D%7D%7D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=86c51faf34a3e74979fb37e5e66a98bd&sn=8242220720EEFBD7749571096413DD1F560B62EF&soft_id=21&timestamp=1624093815&user_id=2132033782&ver=210301"},{"key":"shuqispbody9","val":"_public=skinId%3D999%26idfa%3D3D91C615-5A00-4E7C-85B4-BDA8BD1A4DBB%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26umidtoken%3DYM1VJ7gXgNEDAPZlmq3V4kSv%26user_id%3D2132033782%26sn%3D8242220720EEFBD7749571096413DD1F560B62EF%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D744945EE876917811F12D45DAC3987B10FFBDA03%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DUnknowniPod%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYM1VJ7gXgNEDAPZlmq3V4kSv%26utype%3Dpre_vip%26sdk%3D13.3.1&deliveryId=525&key=sq_app_ad&miniWua=HHnB_1gvcZHi7MWfRThjzg7wVSSZuyEIt2i5mOn/M/gaOJe4%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=626&sign=8AB13D37BA531CEEFFBD65DDB71868F4&timestamp=1624093830&userId=2132033782&user_id=2132033782&wua=HIVW_j%2BksNT1Gw6DCsJKjALZ2S9yGZwL/WbDaD5YgZ7fffoslJxbtnrRsqzwSQ3rZklLD1GFD1rW9g6Ji5WaA9QqWUEF2M7kC/UmYbcmk47zSv0Jt5mdF25azrvZoBVsHDBaKlYllfNBn3T0mm86aYKivde3O8AxuHc2c38pn568itTO0EnzSoGALRCKZFwkpc3xdjJJKvwtJdsWq7%2BXH81UEQAZtUafVAEEqsLPRvH00bKA%3D"},{"key":"shuqiscbody9","val":""},{"key":"shuqiydbody9","val":""},{"key":"shuqiqdbody9","val":"clientTimestamp=1624093840&position=501&userId=2132033782&signInType=1&wua=HIVW_hKBT93da1mC25Gl%2BqFbktAND5S9Est7lCYgqypdp9LW0WNG%2F1dHuYJwLAfY8%2FsFHb47goTOWgFMoGrMRQLNgTng%2FtwqwttNPz7QW0AdrXvWsBHkD7GIiBg925FnFTrQhp0apSST786irn2p1viUKXU7njk9Azm1euCpm3qUoxPR7rXE8x1xzcVPtT57Emct6TkK%2BTmH5ibsE0kXQoBF1CZ3Pv1qZrxcjWfsG0jAf%2BcE%3D&ua=&miniWua=HHnB_loXFeJKArWiv4FM0Au0uRPhlk276WABs%2B9VJllYjyYQ%3D&umidtoken=YM1VJ7gXgNEDAPZlmq3V4kSv&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&sign=1a26887b2aae300f5ba8c481a583fabb&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.3.1%26utdid%3DYM1VJ7gXgNEDAPZlmq3V4kSv%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2132033782%26sn%3D8242220720EEFBD7749571096413DD1F560B62EF%26umidtoken%3DYM1VJ7gXgNEDAPZlmq3V4kSv%26msv%3D8.0.0%26brand%3DApple%26imei%3D744945EE876917811F12D45DAC3987B10FFBDA03%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPod%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D3D91C615-5A00-4E7C-85B4-BDA8BD1A4DBB"},{"key":"shuqirwbody9","val":"serviceWorkerOn=1&stopPullRefresh=1&from=ShuqiTab&upf=20368&sdk=13.3.1&utdid=YM1VJ7gXgNEDAPZlmq3V4kSv&ustatus=0&first_placeid=111111&net_env=4g&placeid=111111&user_id=2132033782&sn=8242220720EEFBD7749571096413DD1F560B62EF&umidtoken=YM1VJ7gXgNEDAPZlmq3V4kSv&msv=8.0.0&brand=Apple&imei=744945EE876917811F12D45DAC3987B10FFBDA03&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=1&ver=210301&mod=UnknowniPod&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=3D91C615-5A00-4E7C-85B4-BDA8BD1A4DBB&params=%7B%22resources%22%3A%7B%22ShuqiBsDailyTask%22%3A%7B%7D%7D%7D&userId=2132033782&placeId=111111&timestamp=1624093846&sqSv=1.0&sign=26a76075fea642570b1777947ac95566&key=sq_h5_gateway&_public="},{"key":"shuqifxbody9","val":""},{"key":"shuqisprwurl9","val":"https://ocean.shuqireader.com/api/ad/adserver/v1/api/getAdInfo?appVer=4.3.6.0&placeId=111111&platform=iOS&requestSrc=h5&resourceId=626&timestamp=1624093861&user_id=2132033782&sqSv=1.0&sign=6e64d0b59dbd67ebf9413c10a5261d57&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.3.1%26utdid%3DYM1VJ7gXgNEDAPZlmq3V4kSv%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2132033782%26sn%3D8242220720EEFBD7749571096413DD1F560B62EF%26umidtoken%3DYM1VJ7gXgNEDAPZlmq3V4kSv%26msv%3D8.0.0%26brand%3DApple%26imei%3D744945EE876917811F12D45DAC3987B10FFBDA03%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPod%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D3D91C615-5A00-4E7C-85B4-BDA8BD1A4DBB"},{"key":"shuqijlbody9","val":"requestSrc=h5&userId=2132033782&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624093846&sqSv=1.0&sign=158a3f974209e008b72094e5ec73702a&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.3.1%26utdid%3DYM1VJ7gXgNEDAPZlmq3V4kSv%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2132033782%26sn%3D8242220720EEFBD7749571096413DD1F560B62EF%26umidtoken%3DYM1VJ7gXgNEDAPZlmq3V4kSv%26msv%3D8.0.0%26brand%3DApple%26imei%3D744945EE876917811F12D45DAC3987B10FFBDA03%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPod%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D3D91C615-5A00-4E7C-85B4-BDA8BD1A4DBB"},{"key":"shuqisqjlbody9","val":"src=&userId=2132033782&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624093844&sqSv=1.0&sign=8f0aee542ffd20b1ae91ac9d7dac3cf7&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.3.1%26utdid%3DYM1VJ7gXgNEDAPZlmq3V4kSv%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2132033782%26sn%3D8242220720EEFBD7749571096413DD1F560B62EF%26umidtoken%3DYM1VJ7gXgNEDAPZlmq3V4kSv%26msv%3D8.0.0%26brand%3DApple%26imei%3D744945EE876917811F12D45DAC3987B10FFBDA03%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPod%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D3D91C615-5A00-4E7C-85B4-BDA8BD1A4DBB"},{"key":"shuqicjyurl9","val":"https://ocean.shuqireader.com/api/activity/activity/v1/lottery/info?timestamp=1624093863&userId=2132033782&activityId=311&sqSv=1.0&sign=a7640a46b0a9c5bf3231c006b36702b7&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.3.1%26utdid%3DYM1VJ7gXgNEDAPZlmq3V4kSv%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2132033782%26sn%3D8242220720EEFBD7749571096413DD1F560B62EF%26umidtoken%3DYM1VJ7gXgNEDAPZlmq3V4kSv%26msv%3D8.0.0%26brand%3DApple%26imei%3D744945EE876917811F12D45DAC3987B10FFBDA03%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPod%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D3D91C615-5A00-4E7C-85B4-BDA8BD1A4DBB"},{"key":"shuqicjcsbody9","val":"_public=skinId%3D999%26idfa%3D3D91C615-5A00-4E7C-85B4-BDA8BD1A4DBB%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26umidtoken%3DYM1VJ7gXgNEDAPZlmq3V4kSv%26user_id%3D2132033782%26sn%3D8242220720EEFBD7749571096413DD1F560B62EF%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D744945EE876917811F12D45DAC3987B10FFBDA03%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DUnknowniPod%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYM1VJ7gXgNEDAPZlmq3V4kSv%26utype%3Dpre_vip%26sdk%3D13.3.1&deliveryId=711&key=sq_app_ad&miniWua=HHnB_1TlWRWqrP9jQzUw/iC7pCCMEAHLV24nr5qYMpdJwyWs%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=703&sign=0815CB26E0611D9F42572576B330BA15&timestamp=1624093848&userId=2132033782&user_id=2132033782&wua=HIVW_CkkUG33Aq1Y72L7XSatc3T4NA7lZMHyDPcdUyzz/Y2U3j0x6Rnhv2X0gG5zWsdw0fmSthYhWp7c0rb%2BckWI6zpoih3KhySkfwDLGz8ad1t914%2Bs/MKUvuxB5izvQ0bItZnjgpkwBVE2VKd2xMnZiVr2tMmc3PXSDFOfXVgeS2N4/4jq0OuZQX1z8/5utE4RfAocBUbWenbv4Mr2VF9vJuvp0ndlL7WnoocaN2e5Tllo%3D"},{"key":"shuqicjbody9","val":"wua=HIVW_lyG%2FuZSX6awrJEesxYQy26kQm1tokoH%2FMmWoxLWTyayMU199vl8vIkkeJYPrapeLovfOvTfxNYbtrjEMiD0T5RY3QPzALpDiPNGnDziV54EwAVscQBK7HHEQeuyyt7pOueSk5f9sYsjxVEVNKsNgCXdFxHCYv1uLjARUK%2FLKapExHuOZk7uMWMK%2FJjz0%2B7ONDh2IAKjcFmdh7WuMGHkz0MUep3ungA%2B2Vv6AsSuKTEk%3D&ua=&userId=2132033782&umidtoken=YM1VJ7gXgNEDAPZlmq3V4kSv&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&asac=2A20C07RJ9F51AOEFSNHDR&timestamp=1624093850&activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&sqSv=1.0&sign=86c1592ffb952b09725d2ae42bc8dfae&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.3.1%26utdid%3DYM1VJ7gXgNEDAPZlmq3V4kSv%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2132033782%26sn%3D8242220720EEFBD7749571096413DD1F560B62EF%26umidtoken%3DYM1VJ7gXgNEDAPZlmq3V4kSv%26msv%3D8.0.0%26brand%3DApple%26imei%3D744945EE876917811F12D45DAC3987B10FFBDA03%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPod%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D3D91C615-5A00-4E7C-85B4-BDA8BD1A4DBB"},{"key":"shuqijsspbody9","val":""},{"key":"shuqijsydurl9","val":""},{"key":"shuqijsydbody9","val":""},{"key":"shuqijsqdbody9","val":""},{"key":"shuqijsqdspyurl9","val":""},{"key":"shuqijsqdspbody9","val":""},{"key":"shuqijsrwbody9","val":""},{"key":"shuqijsfxbody9","val":""},{"key":"shuqijsbookurl9","val":""},{"key":"shuqijsbookbody9","val":""},{"key":"shuqijssprwurl9","val":""},{"key":"shuqiuserurl10","val":"https://ocean.shuqireader.com/api/jaccount/accountapi/v1/sapi/account/getBindinfo?userId=2131339666&sqSv=1.0&timestamp=1624093946&sign=b9a976d01f076e48afff8c959907dde7&key=sq_h5_gateway"},{"key":"shuqisyurl10","val":"https://render.shuqireader.com/load/resource?sdk=13.4.1&utdid=YM1VMEqFjk4DABsG27tXoV7d&ustatus=0&first_placeid=111111&net_env=4g&placeid=111111&user_id=2131339666&sn=5CC6275915F4DBA18AC0C6360DCA38A66A4F2206&umidtoken=YM1VMEqFjk4DABsG27tXoV7d&msv=8.0.0&brand=Apple&imei=849A5702A026739F11E2ED4933848C99452ADD6C&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=iOS&ver=210301&mod=UnknowniPad&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=7E370251-2A1F-4C5E-A646-E92DDE5A608D"},{"key":"shuqisybody10","val":"appVer=4.3.6.0&imei=849A5702A026739F11E2ED4933848C99452ADD6C&isNewUser=1&params=%7B%22resources%22%3A%7B%22ShuqiVipEntry%22%3A%7B%7D%2C%22personalCardConfig%22%3A%7B%7D%7D%7D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=ceeca7ae206d9a593fb82560913a65b2&sn=5CC6275915F4DBA18AC0C6360DCA38A66A4F2206&soft_id=21&timestamp=1624093886&user_id=2131339666&ver=210301"},{"key":"shuqispbody10","val":"_public=skinId%3D999%26idfa%3D7E370251-2A1F-4C5E-A646-E92DDE5A608D%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26umidtoken%3DYM1VMEqFjk4DABsG27tXoV7d%26user_id%3D2131339666%26sn%3D5CC6275915F4DBA18AC0C6360DCA38A66A4F2206%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D849A5702A026739F11E2ED4933848C99452ADD6C%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYM1VMEqFjk4DABsG27tXoV7d%26utype%3Dpre_vip%26sdk%3D13.4.1&deliveryId=525&key=sq_app_ad&miniWua=HHnB_4d/s6no07X2QBsaRPBv9bYHrlZuH3pY5LaHBxHOtmIA%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=626&sign=B3820C6C6F4419618913EEDB4966F6F1&timestamp=1624093918&userId=2131339666&user_id=2131339666&wua=HIVW_ERnam4%2B4X83cG0dAtQx%2BDdi3vnQOcHAAYicsWUVnU1PDjJ/mo9Ckyj1%2B7gCcYx5kBA%2Bf%2Bi3hz2TQEXFAZTLIljKR4OyvVLv%2BPzBWRKFiBYPNQGLv7c8C7Cngb7Fa8/I46FzAhlWVX2e1w5JDUge4tz2/Y8KBybfwzHk0iVqbdMJ/tsPuK4aIfsb4cR/iKGMVFXpPrEq43nughT/jGJqJSLrbGAW/0u3o%2BUoRwVsHD1A%3D"},{"key":"shuqiscbody10","val":""},{"key":"shuqiydbody10","val":""},{"key":"shuqiqdbody10","val":"clientTimestamp=1624093908&position=501&userId=2131339666&signInType=1&wua=HIVW_i7IGQDexe6ldd%2FULMrz%2Fz4PzEYFmqpR4gPmMVgT3Z5EykwBBrgUxpAkylkdVAs13ryLbiebnrje%2BVJifCpp5AeVz5d7xk4hA2ir9QSDUb687tQ9TET%2BFBFuvDV99i8PJjTISw6Qzc%2FqhAWYW7BUXxGbFaIMV4IqusbhiOQc9cg7Y27kxgP3WC2LSKOTBNfmoHQva2aZV24YtqjdBBvieK%2FqB5lhn8Ut6RwCfKyXa7xk%3D&ua=&miniWua=HHnB_UhQyPJNasGmWoLPQFYoCmvMsRPQibUlRKHnTE0JYIi4%3D&umidtoken=YM1VMEqFjk4DABsG27tXoV7d&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&sign=2a3585b3b694fc769abb97deb6f4c3af&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.4.1%26utdid%3DYM1VMEqFjk4DABsG27tXoV7d%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2131339666%26sn%3D5CC6275915F4DBA18AC0C6360DCA38A66A4F2206%26umidtoken%3DYM1VMEqFjk4DABsG27tXoV7d%26msv%3D8.0.0%26brand%3DApple%26imei%3D849A5702A026739F11E2ED4933848C99452ADD6C%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D7E370251-2A1F-4C5E-A646-E92DDE5A608D"},{"key":"shuqirwbody10","val":"serviceWorkerOn=1&stopPullRefresh=1&from=ShuqiTab&upf=20368&sdk=13.4.1&utdid=YM1VMEqFjk4DABsG27tXoV7d&ustatus=0&first_placeid=111111&net_env=4g&placeid=111111&user_id=2131339666&sn=5CC6275915F4DBA18AC0C6360DCA38A66A4F2206&umidtoken=YM1VMEqFjk4DABsG27tXoV7d&msv=8.0.0&brand=Apple&imei=849A5702A026739F11E2ED4933848C99452ADD6C&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&session=&skinColor=23B383&platform=1&ver=210301&mod=UnknowniPad&statusBarHeight=44.000000&skinVersion=1&wh=1242x2688&soft_id=21&utype=pre_vip&skinId=999&idfa=7E370251-2A1F-4C5E-A646-E92DDE5A608D&params=%7B%22resources%22%3A%7B%22ShuqiBsDailyTask%22%3A%7B%7D%7D%7D&userId=2131339666&placeId=111111&timestamp=1624093924&sqSv=1.0&sign=7cb5c54f19435ec4ade7090195923c28&key=sq_h5_gateway&_public="},{"key":"shuqifxbody10","val":""},{"key":"shuqisprwurl10","val":"https://ocean.shuqireader.com/api/ad/adserver/v1/api/getAdInfo?appVer=4.3.6.0&placeId=111111&platform=iOS&requestSrc=h5&resourceId=626&timestamp=1624093947&user_id=2131339666&sqSv=1.0&sign=0918a33d38ac5a84f91853f1cebfa96f&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.4.1%26utdid%3DYM1VMEqFjk4DABsG27tXoV7d%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2131339666%26sn%3D5CC6275915F4DBA18AC0C6360DCA38A66A4F2206%26umidtoken%3DYM1VMEqFjk4DABsG27tXoV7d%26msv%3D8.0.0%26brand%3DApple%26imei%3D849A5702A026739F11E2ED4933848C99452ADD6C%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D7E370251-2A1F-4C5E-A646-E92DDE5A608D"},{"key":"shuqijlbody10","val":"requestSrc=h5&userId=2131339666&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624093924&sqSv=1.0&sign=7b49ae5578ea120ca3498ecead916ad7&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.4.1%26utdid%3DYM1VMEqFjk4DABsG27tXoV7d%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2131339666%26sn%3D5CC6275915F4DBA18AC0C6360DCA38A66A4F2206%26umidtoken%3DYM1VMEqFjk4DABsG27tXoV7d%26msv%3D8.0.0%26brand%3DApple%26imei%3D849A5702A026739F11E2ED4933848C99452ADD6C%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D7E370251-2A1F-4C5E-A646-E92DDE5A608D"},{"key":"shuqisqjlbody10","val":"src=&userId=2131339666&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624093915&sqSv=1.0&sign=0f1752a41e34633afa8fe78a9ee7a1cc&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.4.1%26utdid%3DYM1VMEqFjk4DABsG27tXoV7d%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2131339666%26sn%3D5CC6275915F4DBA18AC0C6360DCA38A66A4F2206%26umidtoken%3DYM1VMEqFjk4DABsG27tXoV7d%26msv%3D8.0.0%26brand%3DApple%26imei%3D849A5702A026739F11E2ED4933848C99452ADD6C%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D7E370251-2A1F-4C5E-A646-E92DDE5A608D"},{"key":"shuqicjyurl10","val":"https://ocean.shuqireader.com/api/activity/activity/v1/lottery/info?timestamp=1624093950&userId=2131339666&activityId=311&sqSv=1.0&sign=bfffc98882bf189939b7e89811cf83cf&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.4.1%26utdid%3DYM1VMEqFjk4DABsG27tXoV7d%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2131339666%26sn%3D5CC6275915F4DBA18AC0C6360DCA38A66A4F2206%26umidtoken%3DYM1VMEqFjk4DABsG27tXoV7d%26msv%3D8.0.0%26brand%3DApple%26imei%3D849A5702A026739F11E2ED4933848C99452ADD6C%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D7E370251-2A1F-4C5E-A646-E92DDE5A608D"},{"key":"shuqicjcsbody10","val":"_public=skinId%3D999%26idfa%3D7E370251-2A1F-4C5E-A646-E92DDE5A608D%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26umidtoken%3DYM1VMEqFjk4DABsG27tXoV7d%26user_id%3D2131339666%26sn%3D5CC6275915F4DBA18AC0C6360DCA38A66A4F2206%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D849A5702A026739F11E2ED4933848C99452ADD6C%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYM1VMEqFjk4DABsG27tXoV7d%26utype%3Dpre_vip%26sdk%3D13.4.1&deliveryId=711&key=sq_app_ad&miniWua=HHnB_jo%2BnHTPfwZq6kuw4I7n0q3AgVHBVQp2nT%2Bm/CJ42LCA%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=703&sign=D2799CA2F3461FD3254A099D6E14C78C&timestamp=1624093930&userId=2131339666&user_id=2131339666&wua=HIVW_WRJSOpNTVvnYCs0s1%2BvaJrtpsAIn%2Bs6HFUxxQM%2BzUiubV3NOkKL//7gZYUjrNZOWJBl4loJp10tTVDFb8RkpJ6WShZXynByuAim1dETYKfT2AQ/y4Yk6UIkxk1laSdblN65rBtY9CTowJldp2b2mgvK5LpKMahALMREuHOfujIOnM8JbZ5SzsK83o9sdz4i%2BmsGuq/nBwCKZkvBLDXM1G3QZBErhdCOhf5P9DjJMfSA%3D"},{"key":"shuqicjbody10","val":"wua=HIVW_vj2B7NMqpsEVRwpgSFb8EoZ0Gx1mkXRx1jqSz13Cugmc7bni%2F7ZGQBzl0dJXgeOfcu1n8YCz5yFG7MyldfSsp5rcHye8tWLGOs742U7alzu2lEd7oqXojAt6T%2BurcMBXfMdjAnDJB9CGkDrWbq8uPodWBjGC30n90zuTB9hDCkjFoj6Nd%2FWoY%2B%2BPSwUc9mdb5G7ZxkwuLDzLho70Z1NiGFjMNz%2FCqu%2FPklJKcO3FhN8%3D&ua=&userId=2131339666&umidtoken=YM1VMEqFjk4DABsG27tXoV7d&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&asac=2A20C07RJ9F51AOEFSNHDR&timestamp=1624093935&activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&sqSv=1.0&sign=dd5861b1cbd3858897b26bca45237b18&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.4.1%26utdid%3DYM1VMEqFjk4DABsG27tXoV7d%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2131339666%26sn%3D5CC6275915F4DBA18AC0C6360DCA38A66A4F2206%26umidtoken%3DYM1VMEqFjk4DABsG27tXoV7d%26msv%3D8.0.0%26brand%3DApple%26imei%3D849A5702A026739F11E2ED4933848C99452ADD6C%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D7E370251-2A1F-4C5E-A646-E92DDE5A608D"},{"key":"shuqijsspbody10","val":""},{"key":"shuqijsydurl10","val":""},{"key":"shuqijsydbody10","val":""},{"key":"shuqijsqdbody10","val":""},{"key":"shuqijsqdspyurl10","val":""},{"key":"shuqijsqdspbody10","val":""},{"key":"shuqijsrwbody10","val":""},{"key":"shuqijsfxbody10","val":""},{"key":"shuqijsbookurl10","val":""},{"key":"shuqijsbookbody10","val":""},{"key":"shuqijssprwurl10","val":""},{"key":"shuqiuserurl11","val":"https://ocean.shuqireader.com/api/jaccount/accountapi/v1/sapi/account/getBindinfo?userId=2131488745&sqSv=1.0&timestamp=1624094023&sign=5df37732a8d3c9d360374eb761980443&key=sq_h5_gateway"},{"key":"shuqisyurl11","val":"https://render.shuqireader.com/load/resource?sdk=13.2.2&utdid=YM1VOsPoPZYDANtFe6DQvyQP&ustatus=0&first_placeid=111111&net_env=4g&placeid=111111&user_id=2131488745&sn=3453305EE03BDA45D4EE378AD27660BC49571541&umidtoken=YM1VOsPoPZYDANtFe6DQvyQP&msv=8.0.0&brand=Apple&imei=296C029256F0E829FBE2F9C9A0C04FB4237C8FD5&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=iOS&ver=210301&mod=iPad3G&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=9ED24537-439E-41D9-B506-7650736195C6"},{"key":"shuqisybody11","val":"appVer=4.3.6.0&imei=296C029256F0E829FBE2F9C9A0C04FB4237C8FD5&isNewUser=1&params=%7B%22resources%22%3A%7B%22ShuqiVipEntry%22%3A%7B%7D%2C%22personalCardConfig%22%3A%7B%7D%7D%7D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=3099f37ab92bc3e03d1207bba3a8ab25&sn=3453305EE03BDA45D4EE378AD27660BC49571541&soft_id=21&timestamp=1624093973&user_id=2131488745&ver=210301"},{"key":"shuqispbody11","val":"_public=skinId%3D999%26idfa%3D9ED24537-439E-41D9-B506-7650736195C6%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26umidtoken%3DYM1VOsPoPZYDANtFe6DQvyQP%26user_id%3D2131488745%26sn%3D3453305EE03BDA45D4EE378AD27660BC49571541%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D296C029256F0E829FBE2F9C9A0C04FB4237C8FD5%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPad3G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYM1VOsPoPZYDANtFe6DQvyQP%26utype%3Dpre_vip%26sdk%3D13.2.2&deliveryId=525&key=sq_app_ad&miniWua=HHnB_7OEG2eI38EOIszcI3GPv89uRXWBg48bUEqXU3xiRTMo%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=626&sign=DBEB4F4CBFF5AC7DC8D433CF5E5E73C7&timestamp=1624093997&userId=2131488745&user_id=2131488745&wua=HIVW_A4nozAQOuBaF40dAam/WzilNUcQt1nEaN5ZMhoNbv9kzL67RQAX81PFYnNGAaUiRwtqjkApeYbYf8iYPkpN6hApZw1rFYBmFwQAJkiFSEMYlRUAC3MXuN4EkDJOcz5LYKw6d%2BKivvDwB7/gH2DyUTZT%2BfOrK4NpPGRn4b%2BgGzfSA44YJv4uWgY5D2I3LvEcBD8KMof7g2DARLj%2BBVtHzOOqjNou0DFsuQ8WQd7xDEXs%3D"},{"key":"shuqiscbody11","val":""},{"key":"shuqiydbody11","val":""},{"key":"shuqiqdbody11","val":"clientTimestamp=1624093990&position=501&userId=2131488745&signInType=1&wua=HIVW_lyG%2FuZSX6awrJEesxYQy24g%2FXcfFfobMRX6PPPeIGKov7Mqeti0Izue4KVfUTWsVj4xQFpxqDeYps%2Bv%2Fvl0Z9V5ztajUykKbwjUT0RLMZgmsLjKRS2jL2Jsx4u%2F3rxENODtKNimd%2FElfcWFLx6sy2HXYjFTnH8s45fV%2F0f6ipeOtrS1JTqKqwMX2XXzyV19sZvnDg0D%2BFD9iLWH%2BHJz19qic26V19yU1mh1icqmJa6Y%3D&ua=&miniWua=HHnB_TN6DmKzZurCr6V16ymRWQH4s1WNzLgGb4FECmJrs8Ws%3D&umidtoken=YM1VOsPoPZYDANtFe6DQvyQP&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&sign=05ac0c8e79fd5432be04829b35c2e88f&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.2.2%26utdid%3DYM1VOsPoPZYDANtFe6DQvyQP%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2131488745%26sn%3D3453305EE03BDA45D4EE378AD27660BC49571541%26umidtoken%3DYM1VOsPoPZYDANtFe6DQvyQP%26msv%3D8.0.0%26brand%3DApple%26imei%3D296C029256F0E829FBE2F9C9A0C04FB4237C8FD5%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad3G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D9ED24537-439E-41D9-B506-7650736195C6"},{"key":"shuqirwbody11","val":"serviceWorkerOn=1&stopPullRefresh=1&from=ShuqiTab&upf=20368&sdk=13.2.2&utdid=YM1VOsPoPZYDANtFe6DQvyQP&ustatus=0&first_placeid=111111&net_env=4g&placeid=111111&user_id=2131488745&sn=3453305EE03BDA45D4EE378AD27660BC49571541&umidtoken=YM1VOsPoPZYDANtFe6DQvyQP&msv=8.0.0&brand=Apple&imei=296C029256F0E829FBE2F9C9A0C04FB4237C8FD5&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&session=&skinColor=23B383&platform=1&ver=210301&mod=iPad3G&statusBarHeight=44.000000&skinVersion=1&wh=1242x2688&soft_id=21&utype=pre_vip&skinId=999&idfa=9ED24537-439E-41D9-B506-7650736195C6&params=%7B%22resources%22%3A%7B%22ShuqiBsDailyTask%22%3A%7B%7D%7D%7D&userId=2131488745&placeId=111111&timestamp=1624094004&sqSv=1.0&sign=ad31a67aa88e698616a416ada8d58e22&key=sq_h5_gateway&_public="},{"key":"shuqifxbody11","val":""},{"key":"shuqisprwurl11","val":"https://ocean.shuqireader.com/api/ad/adserver/v1/api/getAdInfo?appVer=4.3.6.0&placeId=111111&platform=iOS&requestSrc=h5&resourceId=626&timestamp=1624094024&user_id=2131488745&sqSv=1.0&sign=f25cec294900bb6be53c2ea5aec10695&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.2.2%26utdid%3DYM1VOsPoPZYDANtFe6DQvyQP%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2131488745%26sn%3D3453305EE03BDA45D4EE378AD27660BC49571541%26umidtoken%3DYM1VOsPoPZYDANtFe6DQvyQP%26msv%3D8.0.0%26brand%3DApple%26imei%3D296C029256F0E829FBE2F9C9A0C04FB4237C8FD5%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad3G%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D9ED24537-439E-41D9-B506-7650736195C6"},{"key":"shuqijlbody11","val":"requestSrc=h5&userId=2131488745&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624094004&sqSv=1.0&sign=c4eeb2aed7393b41d4bba0b3c9a9ca78&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.2.2%26utdid%3DYM1VOsPoPZYDANtFe6DQvyQP%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2131488745%26sn%3D3453305EE03BDA45D4EE378AD27660BC49571541%26umidtoken%3DYM1VOsPoPZYDANtFe6DQvyQP%26msv%3D8.0.0%26brand%3DApple%26imei%3D296C029256F0E829FBE2F9C9A0C04FB4237C8FD5%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad3G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D9ED24537-439E-41D9-B506-7650736195C6"},{"key":"shuqisqjlbody11","val":"src=&userId=2131488745&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624093995&sqSv=1.0&sign=c67f720c137ee6893fc85f7c68f90f3a&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.2.2%26utdid%3DYM1VOsPoPZYDANtFe6DQvyQP%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2131488745%26sn%3D3453305EE03BDA45D4EE378AD27660BC49571541%26umidtoken%3DYM1VOsPoPZYDANtFe6DQvyQP%26msv%3D8.0.0%26brand%3DApple%26imei%3D296C029256F0E829FBE2F9C9A0C04FB4237C8FD5%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad3G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D9ED24537-439E-41D9-B506-7650736195C6"},{"key":"shuqicjyurl11","val":"https://ocean.shuqireader.com/api/activity/activity/v1/lottery/info?timestamp=1624094027&userId=2131488745&activityId=311&sqSv=1.0&sign=7e03be90d30cfa766d0a3a848c4ce05e&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.2.2%26utdid%3DYM1VOsPoPZYDANtFe6DQvyQP%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2131488745%26sn%3D3453305EE03BDA45D4EE378AD27660BC49571541%26umidtoken%3DYM1VOsPoPZYDANtFe6DQvyQP%26msv%3D8.0.0%26brand%3DApple%26imei%3D296C029256F0E829FBE2F9C9A0C04FB4237C8FD5%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad3G%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D9ED24537-439E-41D9-B506-7650736195C6"},{"key":"shuqicjcsbody11","val":"_public=skinId%3D999%26idfa%3D9ED24537-439E-41D9-B506-7650736195C6%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26umidtoken%3DYM1VOsPoPZYDANtFe6DQvyQP%26user_id%3D2131488745%26sn%3D3453305EE03BDA45D4EE378AD27660BC49571541%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D296C029256F0E829FBE2F9C9A0C04FB4237C8FD5%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPad3G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYM1VOsPoPZYDANtFe6DQvyQP%26utype%3Dpre_vip%26sdk%3D13.2.2&deliveryId=711&key=sq_app_ad&miniWua=HHnB_NEj1R3Oyi4SiL/la4lrY7/DwelQeu%2BPc2%2BGRm80oMHI%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=703&sign=51B089CC494D83CF40B5ED3032598BFE&timestamp=1624094009&userId=2131488745&user_id=2131488745&wua=HIVW_bCQGvh18L%2BlPyGxgcsVbTdUGpBZEzY%2Bujotf20hvxXYnYjqasxpU8TATY2GzjZvjNQQgBvUG8uDEhuzpDs%2B3oSB/3hDVDIzHsE3u3wiT37A3yO/AYdY%2BhEqDuAH/AeRMDiildZvjl7tL6qm/zJtT5gX2Z7J%2B9qxVbDDfmrAGiQDgAucnxauU/zHY9PRHDxmUa3xC6lZr0uGalZBTMud3HxO8rMg84ocm/lue2OYQ5pI%3D"},{"key":"shuqicjbody11","val":"wua=HIVW_O2U1QMIF685mU2QtPbHHKyEoRxaUh2UqmZ%2FJnSKyMvE5R1aWytpqzegGn5xzB742VULru%2F4Gx1f%2FD%2FgzbuyLXMP7j4E7%2FDaJ3ZuRsaGRT0ZszyrcwyjaVW8YW7hVR3ps%2BhW057cOQb6eDOjPYKSpi%2Fs9RgdgFymDXHRKlKJIwAOcIK1YhcByfaLuXFGFmLUFr1%2FVEMCSuhwhs51p%2BBBFIsVbTwRqTdJp5xR4riWEhHo%3D&ua=&userId=2131488745&umidtoken=YM1VOsPoPZYDANtFe6DQvyQP&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&asac=2A20C07RJ9F51AOEFSNHDR&timestamp=1624094012&activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&sqSv=1.0&sign=cc772282e75090d37e25c38230055394&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.2.2%26utdid%3DYM1VOsPoPZYDANtFe6DQvyQP%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2131488745%26sn%3D3453305EE03BDA45D4EE378AD27660BC49571541%26umidtoken%3DYM1VOsPoPZYDANtFe6DQvyQP%26msv%3D8.0.0%26brand%3DApple%26imei%3D296C029256F0E829FBE2F9C9A0C04FB4237C8FD5%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad3G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D9ED24537-439E-41D9-B506-7650736195C6"},{"key":"shuqijsspbody11","val":""},{"key":"shuqijsydurl11","val":""},{"key":"shuqijsydbody11","val":""},{"key":"shuqijsqdbody11","val":""},{"key":"shuqijsqdspyurl11","val":""},{"key":"shuqijsqdspbody11","val":""},{"key":"shuqijsrwbody11","val":""},{"key":"shuqijsfxbody11","val":""},{"key":"shuqijsbookurl11","val":""},{"key":"shuqijsbookbody11","val":""},{"key":"shuqijssprwurl11","val":""},{"key":"shuqiuserurl12","val":"https://ocean.shuqireader.com/api/jaccount/accountapi/v1/sapi/account/getBindinfo?userId=2129413066&sqSv=1.0&timestamp=1624094099&sign=f5e4c8391a196a6fa4c868139383749f&key=sq_h5_gateway"},{"key":"shuqisyurl12","val":"https://render.shuqireader.com/load/resource?sdk=13.2&utdid=YM1VRc8qYFUDAE5OQF6CZiNu&ustatus=0&first_placeid=111111&net_env=3g&placeid=111111&user_id=2129413066&sn=4DA6A79041463F707CBCF7B0B3CE7E272255BF85&umidtoken=YM1VRc8qYFUDAE5OQF6CZiNu&msv=8.0.0&brand=Apple&imei=2BBF315283C5EA9803F600BF78204834F835BD33&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=iOS&ver=210301&mod=iPhone11Pro&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=5171690A-8592-462D-9911-1ED04E5ECD58"},{"key":"shuqisybody12","val":"appVer=4.3.6.0&imei=2BBF315283C5EA9803F600BF78204834F835BD33&isNewUser=1&params=%7B%22resources%22%3A%7B%22ShuqiVipEntry%22%3A%7B%7D%2C%22personalCardConfig%22%3A%7B%7D%7D%7D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=f6c77bb89e552f66cac81eb1e2c13d1d&sn=4DA6A79041463F707CBCF7B0B3CE7E272255BF85&soft_id=21&timestamp=1624094042&user_id=2129413066&ver=210301"},{"key":"shuqispbody12","val":"_public=skinId%3D999%26idfa%3D5171690A-8592-462D-9911-1ED04E5ECD58%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26umidtoken%3DYM1VRc8qYFUDAE5OQF6CZiNu%26user_id%3D2129413066%26sn%3D4DA6A79041463F707CBCF7B0B3CE7E272255BF85%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D2BBF315283C5EA9803F600BF78204834F835BD33%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhone11Pro%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYM1VRc8qYFUDAE5OQF6CZiNu%26utype%3Dpre_vip%26sdk%3D13.2&deliveryId=525&key=sq_app_ad&miniWua=HHnB_Pr4TUODG2G2mzcnDVmtKOw2F4ZIz8QyKPUWsj0WLSH8%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=626&sign=41CB516334ADE5D9C89384B238C7ABCA&timestamp=1624094066&userId=2129413066&user_id=2129413066&wua=HIVW_bYR1Kd6AoKpP4t8TtoLvSRIRVzQ7OugPwb9SscIFFsKkr%2BKL4DwgihgI4p1wg467EluzqjKMjy49Dz1sy1tGl05ail4RVth4LRV2qrVMcO9OFv0tfUaA5SVmmMI6hzgb0prmn/x3/xeBPlG5WjBnjd2CKtlg8nEqGjpSoUjMJH25gUDabGJd7R1LoWuVWzrSxi8rZsN0baSN5Al/mNnA4GyCdLCjiP8BM3zvmAXgNas%3D"},{"key":"shuqiscbody12","val":""},{"key":"shuqiydbody12","val":""},{"key":"shuqiqdbody12","val":"clientTimestamp=1624094056&position=501&userId=2129413066&signInType=1&wua=HIVW_ftcJBlCOtFvMimnCWIMjbvzW2SIi3CSYW65oe4vjYg61ZWp84C2%2BbUXSxbpRu1shQqT1T7AuMi3UapL8iM9B4RKnxqxG1lAyclUh%2F7zmTz1iuyPH5OaMjq8S4KStUrQ%2FwGj0ukZ4JIP%2BmNVFPbmYd%2BhxaIhBRjvG5DHMXZa96iUhfDBGrBFhxboTEU%2FvEmnBt%2Bp4IIHu5%2FS5P0%2FaBwGo8VzNPW7IKczbh0cAHpEtnos%3D&ua=&miniWua=HHnB_UaJMac612shodb7QhMc9rGy%2FPfy3aMIU6EHCOEOB9qk%3D&umidtoken=YM1VRc8qYFUDAE5OQF6CZiNu&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&sign=e38da89a5d645eeee04df7c8f4eea94f&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.2%26utdid%3DYM1VRc8qYFUDAE5OQF6CZiNu%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2129413066%26sn%3D4DA6A79041463F707CBCF7B0B3CE7E272255BF85%26umidtoken%3DYM1VRc8qYFUDAE5OQF6CZiNu%26msv%3D8.0.0%26brand%3DApple%26imei%3D2BBF315283C5EA9803F600BF78204834F835BD33%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone11Pro%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D5171690A-8592-462D-9911-1ED04E5ECD58"},{"key":"shuqirwbody12","val":"serviceWorkerOn=1&stopPullRefresh=1&from=ShuqiTab&upf=20368&sdk=13.2&utdid=YM1VRc8qYFUDAE5OQF6CZiNu&ustatus=0&first_placeid=111111&net_env=3g&placeid=111111&user_id=2129413066&sn=4DA6A79041463F707CBCF7B0B3CE7E272255BF85&umidtoken=YM1VRc8qYFUDAE5OQF6CZiNu&msv=8.0.0&brand=Apple&imei=2BBF315283C5EA9803F600BF78204834F835BD33&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=1&ver=210301&mod=iPhone11Pro&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=5171690A-8592-462D-9911-1ED04E5ECD58&params=%7B%22resources%22%3A%7B%22ShuqiBsDailyTask%22%3A%7B%7D%7D%7D&userId=2129413066&placeId=111111&timestamp=1624094072&sqSv=1.0&sign=1e4cb780648bb8d7eb543b13297d5174&key=sq_h5_gateway&_public="},{"key":"shuqifxbody12","val":""},{"key":"shuqisprwurl12","val":"https://ocean.shuqireader.com/api/ad/adserver/v1/api/getAdInfo?appVer=4.3.6.0&placeId=111111&platform=iOS&requestSrc=h5&resourceId=626&timestamp=1624094099&user_id=2129413066&sqSv=1.0&sign=ba9867a5958e815de875617724148363&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.2%26utdid%3DYM1VRc8qYFUDAE5OQF6CZiNu%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2129413066%26sn%3D4DA6A79041463F707CBCF7B0B3CE7E272255BF85%26umidtoken%3DYM1VRc8qYFUDAE5OQF6CZiNu%26msv%3D8.0.0%26brand%3DApple%26imei%3D2BBF315283C5EA9803F600BF78204834F835BD33%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone11Pro%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D5171690A-8592-462D-9911-1ED04E5ECD58"},{"key":"shuqijlbody12","val":"requestSrc=h5&userId=2129413066&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624094072&sqSv=1.0&sign=02d2c87179ee5463ce3939e0988d7b80&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.2%26utdid%3DYM1VRc8qYFUDAE5OQF6CZiNu%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2129413066%26sn%3D4DA6A79041463F707CBCF7B0B3CE7E272255BF85%26umidtoken%3DYM1VRc8qYFUDAE5OQF6CZiNu%26msv%3D8.0.0%26brand%3DApple%26imei%3D2BBF315283C5EA9803F600BF78204834F835BD33%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone11Pro%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D5171690A-8592-462D-9911-1ED04E5ECD58"},{"key":"shuqisqjlbody12","val":"src=&userId=2129413066&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624094063&sqSv=1.0&sign=e7c7bde553d1ad39d636fbdf69ac168a&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.2%26utdid%3DYM1VRc8qYFUDAE5OQF6CZiNu%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2129413066%26sn%3D4DA6A79041463F707CBCF7B0B3CE7E272255BF85%26umidtoken%3DYM1VRc8qYFUDAE5OQF6CZiNu%26msv%3D8.0.0%26brand%3DApple%26imei%3D2BBF315283C5EA9803F600BF78204834F835BD33%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone11Pro%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D5171690A-8592-462D-9911-1ED04E5ECD58"},{"key":"shuqicjyurl12","val":"https://ocean.shuqireader.com/api/activity/activity/v1/lottery/info?timestamp=1624094102&userId=2129413066&activityId=311&sqSv=1.0&sign=eba81a85d93f787c5afa4866428d2ca9&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.2%26utdid%3DYM1VRc8qYFUDAE5OQF6CZiNu%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2129413066%26sn%3D4DA6A79041463F707CBCF7B0B3CE7E272255BF85%26umidtoken%3DYM1VRc8qYFUDAE5OQF6CZiNu%26msv%3D8.0.0%26brand%3DApple%26imei%3D2BBF315283C5EA9803F600BF78204834F835BD33%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone11Pro%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D5171690A-8592-462D-9911-1ED04E5ECD58"},{"key":"shuqicjcsbody12","val":"_public=skinId%3D999%26idfa%3D5171690A-8592-462D-9911-1ED04E5ECD58%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26umidtoken%3DYM1VRc8qYFUDAE5OQF6CZiNu%26user_id%3D2129413066%26sn%3D4DA6A79041463F707CBCF7B0B3CE7E272255BF85%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D2BBF315283C5EA9803F600BF78204834F835BD33%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhone11Pro%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYM1VRc8qYFUDAE5OQF6CZiNu%26utype%3Dpre_vip%26sdk%3D13.2&deliveryId=711&key=sq_app_ad&miniWua=HHnB_N5XrckoMlNXEWuCcmjKSs6vHdFEz15yrpuThT4zleTQ%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=703&sign=68AB29E174FB70DF11C31B503B6CC500&timestamp=1624094079&userId=2129413066&user_id=2129413066&wua=HIVW_skDRBItCMr%2ByymBNpj0lOEH2GbeGT7uiquq0xvIaMJ7bSLGrAIkeS2a4u5h33JJETlqdrdSGL82dniwCnZyWNuUE0LvScEpfhLaM5kb1A2PC3AS2zpc4eN4LNSn4z3GMHx4JJIsI5DshzYFvCGM4Sl4wdEVp4EBs9AqvsR%2BZ%2BH135PIK9hieDzNmy88zQ4eS5TAxcTEWfHrNMgtoy3mGSE7kRXMS99D92v6HiCgEZbc%3D"},{"key":"shuqicjbody12","val":"wua=HIVW_ev9UiFwbCsMl15X%2Baf%2BoSHO5qQpiWD6OhWj08DflxqPbIyo%2Fqsu%2Ba4xoDAhYC5hRW8Y8A2v%2BrxmY%2B2pWbcHQOjBcp573Gw3X9Cb%2Fu9FXWKPL6lvH8OgG7Dosaj%2Bt%2Fw%2FmIQnk0n5nA8fpZa0hvhnacBL7iUgAjqd303YRUXu%2F6x3ok512dvdQ5B5mH0dgEqq8RafdWXrjkg7GzvBr%2BBZXtK3rs46zZbndLW9PlWGNyTU%3D&ua=&userId=2129413066&umidtoken=YM1VRc8qYFUDAE5OQF6CZiNu&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&asac=2A20C07RJ9F51AOEFSNHDR&timestamp=1624094087&activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&sqSv=1.0&sign=4e8ae9f92cd8844550bc691b08165a7f&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.2%26utdid%3DYM1VRc8qYFUDAE5OQF6CZiNu%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2129413066%26sn%3D4DA6A79041463F707CBCF7B0B3CE7E272255BF85%26umidtoken%3DYM1VRc8qYFUDAE5OQF6CZiNu%26msv%3D8.0.0%26brand%3DApple%26imei%3D2BBF315283C5EA9803F600BF78204834F835BD33%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone11Pro%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D5171690A-8592-462D-9911-1ED04E5ECD58"},{"key":"shuqijsspbody12","val":""},{"key":"shuqijsydurl12","val":""},{"key":"shuqijsydbody12","val":""},{"key":"shuqijsqdbody12","val":""},{"key":"shuqijsqdspyurl12","val":""},{"key":"shuqijsqdspbody12","val":""},{"key":"shuqijsrwbody12","val":""},{"key":"shuqijsfxbody12","val":""},{"key":"shuqijsbookurl12","val":""},{"key":"shuqijsbookbody12","val":""},{"key":"shuqijssprwurl12","val":""},{"key":"shuqiuserurl13","val":"https://ocean.shuqireader.com/api/jaccount/accountapi/v1/sapi/account/getBindinfo?userId=2132282869&sqSv=1.0&timestamp=1624094174&sign=2e77660cf9fd2121f4dbecfc14e3999c&key=sq_h5_gateway"},{"key":"shuqisyurl13","val":"https://render.shuqireader.com/load/resource?sdk=13.0&utdid=YM21p5IxJuUDAFdWTUF6xMxt&ustatus=0&first_placeid=111111&net_env=3g&placeid=111111&user_id=2132282869&sn=50F2312F28FEC6D2CEED6FB2F6AEA6D9317D8B74&umidtoken=YM21p5IxJuUDAFdWTUF6xMxt&msv=8.0.0&brand=Apple&imei=1A76888E3B934333288E60B4704269DB4E411F55&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=iOS&ver=210301&mod=UnknowniPad&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=9A6C9C63-A12F-40C3-8B45-2D352717C614"},{"key":"shuqisybody13","val":"appVer=4.3.6.0&imei=1A76888E3B934333288E60B4704269DB4E411F55&isNewUser=1&params=%7B%22resources%22%3A%7B%22ShuqiVipEntry%22%3A%7B%7D%2C%22personalCardConfig%22%3A%7B%7D%7D%7D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=f277691ba7effec18fd364ee21e69656&sn=50F2312F28FEC6D2CEED6FB2F6AEA6D9317D8B74&soft_id=21&timestamp=1624094121&user_id=2132282869&ver=210301"},{"key":"shuqispbody13","val":"_public=skinId%3D999%26idfa%3D9A6C9C63-A12F-40C3-8B45-2D352717C614%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26umidtoken%3DYM21p5IxJuUDAFdWTUF6xMxt%26user_id%3D2132282869%26sn%3D50F2312F28FEC6D2CEED6FB2F6AEA6D9317D8B74%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D1A76888E3B934333288E60B4704269DB4E411F55%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYM21p5IxJuUDAFdWTUF6xMxt%26utype%3Dpre_vip%26sdk%3D13.0&deliveryId=525&key=sq_app_ad&miniWua=HHnB_UohxKW0yfdOtkmbWJ5hpuyWNpfQ2rNkpbxwn8l7PdmU%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=626&sign=B81E2D6A58B3A89CA812BAD113B250ED&timestamp=1624094145&userId=2132282869&user_id=2132282869&wua=HIVW_FZjwJIlzKh%2BoC2OgR5a3LMstPy35DKBMD%2BA%2BxdB8S5vM/DLp/JECi8CVuZzT41/8ZCBhu/IZUjM6k2lvBwLUD/2WcSUgKl6GMhQPHlj5GdTEFsRSIAXuX82Meon4oycHWsqHZQhFV1yWZTsdP7xHSW062zwP1xOgLa32naE0SCFXA6XDRmkZPIT%2BuLz8j7oIuE7llBRLlkQYprtPRz21/TBAIvj1qQRS6iuY81FXlAg%3D"},{"key":"shuqiscbody13","val":""},{"key":"shuqiydbody13","val":""},{"key":"shuqiqdbody13","val":"clientTimestamp=1624094137&position=501&userId=2132282869&signInType=1&wua=HIVW_SPxNZeZkaVu9JzA31Q03VPEvHbPf4cncmKOLc6VkLixBJInfZ0Hajs3IxQVTqhC2%2BujmZUxdwwRIEllzPiaaiy9eOHZrYMdtKp1%2BT8Bn0cPdQEgMQe2NLOqi6%2BqFkq1KhWLEOdNkqr3J%2FEekK3JkqgRBm%2FGA7dHfmWm3wC%2FAnCBZnXMMI56MBFniaHG6K5urbnMIbrXwCrcraYlogkSEdR3M2t96MQWl7krUVK619jY%3D&ua=&miniWua=HHnB_hValdHt9p9mr6B7GZPziqZWNzNn4uSWjK9uLofnwKVw%3D&umidtoken=YM21p5IxJuUDAFdWTUF6xMxt&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&sign=82949f749faa80e0dc1da5b3e9dbe62e&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.0%26utdid%3DYM21p5IxJuUDAFdWTUF6xMxt%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2132282869%26sn%3D50F2312F28FEC6D2CEED6FB2F6AEA6D9317D8B74%26umidtoken%3DYM21p5IxJuUDAFdWTUF6xMxt%26msv%3D8.0.0%26brand%3DApple%26imei%3D1A76888E3B934333288E60B4704269DB4E411F55%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D9A6C9C63-A12F-40C3-8B45-2D352717C614"},{"key":"shuqirwbody13","val":"serviceWorkerOn=1&stopPullRefresh=1&from=ShuqiTab&upf=20368&sdk=13.0&utdid=YM21p5IxJuUDAFdWTUF6xMxt&ustatus=0&first_placeid=111111&net_env=3g&placeid=111111&user_id=2132282869&sn=50F2312F28FEC6D2CEED6FB2F6AEA6D9317D8B74&umidtoken=YM21p5IxJuUDAFdWTUF6xMxt&msv=8.0.0&brand=Apple&imei=1A76888E3B934333288E60B4704269DB4E411F55&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=1&ver=210301&mod=UnknowniPad&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=9A6C9C63-A12F-40C3-8B45-2D352717C614&params=%7B%22resources%22%3A%7B%22ShuqiBsDailyTask%22%3A%7B%7D%7D%7D&userId=2132282869&placeId=111111&timestamp=1624094149&sqSv=1.0&sign=c2827b9819edad8280fdf8220c7a5875&key=sq_h5_gateway&_public="},{"key":"shuqifxbody13","val":""},{"key":"shuqisprwurl13","val":"https://ocean.shuqireader.com/api/ad/adserver/v1/api/getAdInfo?appVer=4.3.6.0&placeId=111111&platform=iOS&requestSrc=h5&resourceId=626&timestamp=1624094175&user_id=2132282869&sqSv=1.0&sign=ba786db32d06420ea77aa988b19cfc2e&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.0%26utdid%3DYM21p5IxJuUDAFdWTUF6xMxt%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2132282869%26sn%3D50F2312F28FEC6D2CEED6FB2F6AEA6D9317D8B74%26umidtoken%3DYM21p5IxJuUDAFdWTUF6xMxt%26msv%3D8.0.0%26brand%3DApple%26imei%3D1A76888E3B934333288E60B4704269DB4E411F55%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D9A6C9C63-A12F-40C3-8B45-2D352717C614"},{"key":"shuqijlbody13","val":"requestSrc=h5&userId=2132282869&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624094149&sqSv=1.0&sign=56cdf8f8da1cb6cc64e503bafc0acd80&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.0%26utdid%3DYM21p5IxJuUDAFdWTUF6xMxt%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2132282869%26sn%3D50F2312F28FEC6D2CEED6FB2F6AEA6D9317D8B74%26umidtoken%3DYM21p5IxJuUDAFdWTUF6xMxt%26msv%3D8.0.0%26brand%3DApple%26imei%3D1A76888E3B934333288E60B4704269DB4E411F55%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D9A6C9C63-A12F-40C3-8B45-2D352717C614"},{"key":"shuqisqjlbody13","val":"src=&userId=2132282869&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624094146&sqSv=1.0&sign=ddef958f5883289fc170f0c5c5a37e81&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.0%26utdid%3DYM21p5IxJuUDAFdWTUF6xMxt%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2132282869%26sn%3D50F2312F28FEC6D2CEED6FB2F6AEA6D9317D8B74%26umidtoken%3DYM21p5IxJuUDAFdWTUF6xMxt%26msv%3D8.0.0%26brand%3DApple%26imei%3D1A76888E3B934333288E60B4704269DB4E411F55%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D9A6C9C63-A12F-40C3-8B45-2D352717C614"},{"key":"shuqicjyurl13","val":"https://ocean.shuqireader.com/api/activity/activity/v1/lottery/info?timestamp=1624094176&userId=2132282869&activityId=311&sqSv=1.0&sign=54baa39e7d5ea797cab569abf84465e0&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.0%26utdid%3DYM21p5IxJuUDAFdWTUF6xMxt%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2132282869%26sn%3D50F2312F28FEC6D2CEED6FB2F6AEA6D9317D8B74%26umidtoken%3DYM21p5IxJuUDAFdWTUF6xMxt%26msv%3D8.0.0%26brand%3DApple%26imei%3D1A76888E3B934333288E60B4704269DB4E411F55%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D9A6C9C63-A12F-40C3-8B45-2D352717C614"},{"key":"shuqicjcsbody13","val":"_public=skinId%3D999%26idfa%3D9A6C9C63-A12F-40C3-8B45-2D352717C614%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26umidtoken%3DYM21p5IxJuUDAFdWTUF6xMxt%26user_id%3D2132282869%26sn%3D50F2312F28FEC6D2CEED6FB2F6AEA6D9317D8B74%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D1A76888E3B934333288E60B4704269DB4E411F55%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYM21p5IxJuUDAFdWTUF6xMxt%26utype%3Dpre_vip%26sdk%3D13.0&deliveryId=711&key=sq_app_ad&miniWua=HHnB_urFbm5YCD2TC2dreJ%2BhdthzUo2j/grS%2Bjo1eIgL6ndk%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=703&sign=A51AC8BF98491237B42C7DF64B518438&timestamp=1624094159&userId=2132282869&user_id=2132282869&wua=HIVW_Clw5ISs/ofPSpgv4wyndd/oGnFRtZeWBXBkj6nCKmOJjLmo7oxGKm/kvBLYgDjGICd4luOsGnCePh0CVXEjm6oiEuHGx7btC8kXNHjM5l3DIIB4i36QlQ9atr%2BBXnu2Fb22ZUkBVPrQYm13RFxYFfTrlJDYmFt3S1O48VW%2B1sU9LLGo03O3bT67aaHZWSMdszZMfndVArBUZtycKu3sfk0uFzMmZsRyt34H5m4%2B1Sd8%3D"},{"key":"shuqicjbody13","val":"wua=HIVW_pxsPQD9VZH5fLYl%2F2WbPKyvsLXhLBGTn9BSfQD1A2oe%2F8iS7sV6mQMCHFk6ErXRA%2F5S5x1OjLiwOnU0bLW692JEex2kP6IcSXzrx0fZvyLXlsZXtY14uL6Dyk%2FF3x7oJQkkiNyp5ga8vdU13saUjKliY2nR7OFeLTjO8ictZR4jTudHwV5vSj65hL0JLkEkhQWBfVnd%2B6GK0mSDP4eHBxMHGJFu%2BBrw69%2FJZAqwfU4E%3D&ua=&userId=2132282869&umidtoken=YM21p5IxJuUDAFdWTUF6xMxt&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&asac=2A20C07RJ9F51AOEFSNHDR&timestamp=1624094163&activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&sqSv=1.0&sign=25c0eb1aec3a07a9ed322a2f2e1e5e14&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.0%26utdid%3DYM21p5IxJuUDAFdWTUF6xMxt%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2132282869%26sn%3D50F2312F28FEC6D2CEED6FB2F6AEA6D9317D8B74%26umidtoken%3DYM21p5IxJuUDAFdWTUF6xMxt%26msv%3D8.0.0%26brand%3DApple%26imei%3D1A76888E3B934333288E60B4704269DB4E411F55%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D9A6C9C63-A12F-40C3-8B45-2D352717C614"},{"key":"shuqijsspbody13","val":""},{"key":"shuqijsydurl13","val":""},{"key":"shuqijsydbody13","val":""},{"key":"shuqijsqdbody13","val":""},{"key":"shuqijsqdspyurl13","val":""},{"key":"shuqijsqdspbody13","val":""},{"key":"shuqijsrwbody13","val":""},{"key":"shuqijsfxbody13","val":""},{"key":"shuqijsbookurl13","val":""},{"key":"shuqijsbookbody13","val":""},{"key":"shuqijssprwurl13","val":""},{"key":"shuqiuserurl14","val":"https://ocean.shuqireader.com/api/jaccount/accountapi/v1/sapi/account/getBindinfo?userId=2127819983&sqSv=1.0&timestamp=1624094247&sign=11866abdb332af770d2060ed62d86ce5&key=sq_h5_gateway"},{"key":"shuqisyurl14","val":"https://render.shuqireader.com/load/resource?sdk=13.3&utdid=YM1VXhTJ7B8DAM7vWe3yP2Vp&ustatus=0&first_placeid=111111&net_env=3g&placeid=111111&user_id=2127819983&sn=E5705EDCED0D143892CA5211D6F75EF134B85A84&umidtoken=YM1VXhTJ7B8DAM7vWe3yP2Vp&msv=8.0.0&brand=Apple&imei=B99CAB55F96E4DEC58AF097571152BE930F40949&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&session=&skinColor=23B383&platform=iOS&ver=210301&mod=UnknowniPad&statusBarHeight=44.000000&skinVersion=1&wh=1242x2688&soft_id=21&utype=pre_vip&skinId=999&idfa=FC5F4D70-10C1-4F5E-8902-4F36EC134F70"},{"key":"shuqisybody14","val":"appVer=4.3.6.0&imei=B99CAB55F96E4DEC58AF097571152BE930F40949&isNewUser=1&params=%7B%22resources%22%3A%7B%22ShuqiVipEntry%22%3A%7B%7D%2C%22personalCardConfig%22%3A%7B%7D%7D%7D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=f6d385113bc5b98494ddfe8bac0def38&sn=E5705EDCED0D143892CA5211D6F75EF134B85A84&soft_id=21&timestamp=1624094199&user_id=2127819983&ver=210301"},{"key":"shuqispbody14","val":"_public=skinId%3D999%26idfa%3DFC5F4D70-10C1-4F5E-8902-4F36EC134F70%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26umidtoken%3DYM1VXhTJ7B8DAM7vWe3yP2Vp%26user_id%3D2127819983%26sn%3DE5705EDCED0D143892CA5211D6F75EF134B85A84%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3DB99CAB55F96E4DEC58AF097571152BE930F40949%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYM1VXhTJ7B8DAM7vWe3yP2Vp%26utype%3Dpre_vip%26sdk%3D13.3&deliveryId=525&key=sq_app_ad&miniWua=HHnB_lmqawMUgl6aIR6mQx6rlGEWmTrrUX6H5biX0WtecSPc%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=626&sign=747694599BD7EDA4A748BF269B956C36&timestamp=1624094218&userId=2127819983&user_id=2127819983&wua=HIVW_njkX37S5cDjErZwtM6rYVOTHff6OU5T8I2GzaZetwEEXmbAHtLqmledQIBzUCE3b9X9TcvM6W8f6PNtXDw/E4LUUTu%2BYLEHrnoFni3X4jCBw/duDFTd0kEdNUWrCaT5ttjukC1zJ3oNep29PzdsurnA0lhvVvksEVBIkKIe%2Bv6ztZSGaULfIMR%2BLz1oJTDztukMohe1oyDMQqBkckr%2Bgc0%2BB%2Bb3uF/Q2VV420KeUipI%3D"},{"key":"shuqiscbody14","val":""},{"key":"shuqiydbody14","val":""},{"key":"shuqiqdbody14","val":"clientTimestamp=1624094212&position=501&userId=2127819983&signInType=1&wua=HIVW_gvfnEQDXwqLKdkNljWB7jodyDHObngd1%2FZuQRAb5zM%2FNKVUSLFOgvvjw0G1T81UH3mbxS%2BqUiGg1lb54NlUZMuAU9ysMG2mOjIVflTLW3qAqDvP0mg6jXDJVCJsBHUbpSbDFbOxtoXlbf8p1u6F268C6wCFAxETlf9GyBDoQVEgHTjs8YPRUX7bsIm3oXDZaEigOWgGgZubQiQ6g3jSUJ5IAAEjfqW8FUKEva6tEx0o%3D&ua=&miniWua=HHnB_4AQLmpCirWtwaQttELGY6irhx40piSh75S65vk06mFk%3D&umidtoken=YM1VXhTJ7B8DAM7vWe3yP2Vp&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&sign=0015c5d3f7b79b4641406f981b143956&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.3%26utdid%3DYM1VXhTJ7B8DAM7vWe3yP2Vp%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2127819983%26sn%3DE5705EDCED0D143892CA5211D6F75EF134B85A84%26umidtoken%3DYM1VXhTJ7B8DAM7vWe3yP2Vp%26msv%3D8.0.0%26brand%3DApple%26imei%3DB99CAB55F96E4DEC58AF097571152BE930F40949%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DFC5F4D70-10C1-4F5E-8902-4F36EC134F70"},{"key":"shuqirwbody14","val":"serviceWorkerOn=1&stopPullRefresh=1&from=ShuqiTab&upf=20368&sdk=13.3&utdid=YM1VXhTJ7B8DAM7vWe3yP2Vp&ustatus=0&first_placeid=111111&net_env=3g&placeid=111111&user_id=2127819983&sn=E5705EDCED0D143892CA5211D6F75EF134B85A84&umidtoken=YM1VXhTJ7B8DAM7vWe3yP2Vp&msv=8.0.0&brand=Apple&imei=B99CAB55F96E4DEC58AF097571152BE930F40949&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&session=&skinColor=23B383&platform=1&ver=210301&mod=UnknowniPad&statusBarHeight=44.000000&skinVersion=1&wh=1242x2688&soft_id=21&utype=pre_vip&skinId=999&idfa=FC5F4D70-10C1-4F5E-8902-4F36EC134F70&params=%7B%22resources%22%3A%7B%22ShuqiBsDailyTask%22%3A%7B%7D%7D%7D&userId=2127819983&placeId=111111&timestamp=1624094224&sqSv=1.0&sign=9eaf960739e66983b99c88330dd83351&key=sq_h5_gateway&_public="},{"key":"shuqifxbody14","val":""},{"key":"shuqisprwurl14","val":"https://ocean.shuqireader.com/api/ad/adserver/v1/api/getAdInfo?appVer=4.3.6.0&placeId=111111&platform=iOS&requestSrc=h5&resourceId=626&timestamp=1624094247&user_id=2127819983&sqSv=1.0&sign=527cb5e99be8960dd970f6154c4824dd&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.3%26utdid%3DYM1VXhTJ7B8DAM7vWe3yP2Vp%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2127819983%26sn%3DE5705EDCED0D143892CA5211D6F75EF134B85A84%26umidtoken%3DYM1VXhTJ7B8DAM7vWe3yP2Vp%26msv%3D8.0.0%26brand%3DApple%26imei%3DB99CAB55F96E4DEC58AF097571152BE930F40949%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DFC5F4D70-10C1-4F5E-8902-4F36EC134F70"},{"key":"shuqijlbody14","val":"requestSrc=h5&userId=2127819983&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624094224&sqSv=1.0&sign=3d68d64a2a3a83d29bd213d01c7b0a17&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.3%26utdid%3DYM1VXhTJ7B8DAM7vWe3yP2Vp%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2127819983%26sn%3DE5705EDCED0D143892CA5211D6F75EF134B85A84%26umidtoken%3DYM1VXhTJ7B8DAM7vWe3yP2Vp%26msv%3D8.0.0%26brand%3DApple%26imei%3DB99CAB55F96E4DEC58AF097571152BE930F40949%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DFC5F4D70-10C1-4F5E-8902-4F36EC134F70"},{"key":"shuqisqjlbody14","val":"src=&userId=2127819983&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624094215&sqSv=1.0&sign=4e53de35b36dbaee96e49166b8cb28af&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.3%26utdid%3DYM1VXhTJ7B8DAM7vWe3yP2Vp%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2127819983%26sn%3DE5705EDCED0D143892CA5211D6F75EF134B85A84%26umidtoken%3DYM1VXhTJ7B8DAM7vWe3yP2Vp%26msv%3D8.0.0%26brand%3DApple%26imei%3DB99CAB55F96E4DEC58AF097571152BE930F40949%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DFC5F4D70-10C1-4F5E-8902-4F36EC134F70"},{"key":"shuqicjyurl14","val":"https://ocean.shuqireader.com/api/activity/activity/v1/lottery/info?timestamp=1624094249&userId=2127819983&activityId=311&sqSv=1.0&sign=2c5139a8ef8253a36e4bac58069f156f&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.3%26utdid%3DYM1VXhTJ7B8DAM7vWe3yP2Vp%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2127819983%26sn%3DE5705EDCED0D143892CA5211D6F75EF134B85A84%26umidtoken%3DYM1VXhTJ7B8DAM7vWe3yP2Vp%26msv%3D8.0.0%26brand%3DApple%26imei%3DB99CAB55F96E4DEC58AF097571152BE930F40949%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DFC5F4D70-10C1-4F5E-8902-4F36EC134F70"},{"key":"shuqicjcsbody14","val":"_public=skinId%3D999%26idfa%3DFC5F4D70-10C1-4F5E-8902-4F36EC134F70%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26umidtoken%3DYM1VXhTJ7B8DAM7vWe3yP2Vp%26user_id%3D2127819983%26sn%3DE5705EDCED0D143892CA5211D6F75EF134B85A84%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3DB99CAB55F96E4DEC58AF097571152BE930F40949%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYM1VXhTJ7B8DAM7vWe3yP2Vp%26utype%3Dpre_vip%26sdk%3D13.3&deliveryId=711&key=sq_app_ad&miniWua=HHnB_6hlQS5QOxGLWJM03IhoLDhJBeEQkNSo4z/kE4TBXzDE%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=703&sign=AF9CB896842F99C802372589A7C0B635&timestamp=1624094230&userId=2127819983&user_id=2127819983&wua=HIVW_rqFH0IlnLYRQ0Jl23jLuV%2BHtjiw3uNd5M07hIld/F42LG2HNs/2WlKNWhNulSz3kArX3VW7SvxgwCYP6eduOoQebIF79fv%2BtVVGCXC14sjLBxye6DUqQ3t8bcMIxdR1zuU1snjWLi8RTfV%2BjKn63FU3phtSdyFbz0oavtjMwLCzwI9FKZbkEr2RDINsBjOFvhTV/t5%2BTAzWQZHNbseJNxn5CR84z1B%2Bo95zMY/tQJmE%3D"},{"key":"shuqicjbody14","val":"wua=HIVW_KCLBmvQ5sJzXnlzFphR28TcK%2FkqAAKbqSZ%2FcV8M56IRboGza0g1SIsdqy%2BwhYAgEw8r3C1ito9wOM7dZo4DoMQhBuJFW85xj75tFbeGfoPicx%2Bsr1xlkexnnRkJHMzmvdfGMt0gOClDJlKNO%2BrwXg0%2B%2FQA51n5ki8HW9BlxLo9GytBfQiLxCpw4Ik6IC%2FY8Hsh6RkDgNOcTXiM7J4J8Lub%2B9K%2FEkfk6KWALlOlAHSw8%3D&ua=&userId=2127819983&umidtoken=YM1VXhTJ7B8DAM7vWe3yP2Vp&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&asac=2A20C07RJ9F51AOEFSNHDR&timestamp=1624094236&activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&sqSv=1.0&sign=23a306fc15fc0be47b55b0ea365d3e72&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.3%26utdid%3DYM1VXhTJ7B8DAM7vWe3yP2Vp%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2127819983%26sn%3DE5705EDCED0D143892CA5211D6F75EF134B85A84%26umidtoken%3DYM1VXhTJ7B8DAM7vWe3yP2Vp%26msv%3D8.0.0%26brand%3DApple%26imei%3DB99CAB55F96E4DEC58AF097571152BE930F40949%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DFC5F4D70-10C1-4F5E-8902-4F36EC134F70"},{"key":"shuqijsspbody14","val":""},{"key":"shuqijsydurl14","val":""},{"key":"shuqijsydbody14","val":""},{"key":"shuqijsqdbody14","val":""},{"key":"shuqijsqdspyurl14","val":""},{"key":"shuqijsqdspbody14","val":""},{"key":"shuqijsrwbody14","val":""},{"key":"shuqijsfxbody14","val":""},{"key":"shuqijsbookurl14","val":""},{"key":"shuqijsbookbody14","val":""},{"key":"shuqijssprwurl14","val":""},{"key":"shuqiuserurl15","val":"https://ocean.shuqireader.com/api/jaccount/accountapi/v1/sapi/account/getBindinfo?userId=2130111089&sqSv=1.0&timestamp=1624094359&sign=37d12601d027fb304e7e00b075e42920&key=sq_h5_gateway"},{"key":"shuqisyurl15","val":"https://render.shuqireader.com/load/resource?sdk=13.2&utdid=YM1VZz%2FPgggDAImJ64cgsMF0&ustatus=0&first_placeid=111111&net_env=4g&placeid=111111&user_id=2130111089&sn=C84266BD285EB765C6F375D55185034DDBCE0AFD&umidtoken=YM1VZz%2FPgggDAImJ64cgsMF0&msv=8.0.0&brand=Apple&imei=1CB57007ECF6C6EC9CEB6A0BC99D9D7765A0E2DA&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&session=&skinColor=23B383&platform=iOS&ver=210301&mod=UnknowniPod&statusBarHeight=44.000000&skinVersion=1&wh=1242x2688&soft_id=21&utype=pre_vip&skinId=999&idfa=0A78CA8E-C2B0-4BD5-930F-038A8C7E4151"},{"key":"shuqisybody15","val":"appVer=4.3.6.0&imei=1CB57007ECF6C6EC9CEB6A0BC99D9D7765A0E2DA&isNewUser=1&params=%7B%22resources%22%3A%7B%22ShuqiVipEntry%22%3A%7B%7D%2C%22personalCardConfig%22%3A%7B%7D%7D%7D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=eeae978c7a335a82e5af236d802924fd&sn=C84266BD285EB765C6F375D55185034DDBCE0AFD&soft_id=21&timestamp=1624094267&user_id=2130111089&ver=210301"},{"key":"shuqispbody15","val":"_public=skinId%3D999%26idfa%3D0A78CA8E-C2B0-4BD5-930F-038A8C7E4151%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26umidtoken%3DYM1VZz/PgggDAImJ64cgsMF0%26user_id%3D2130111089%26sn%3DC84266BD285EB765C6F375D55185034DDBCE0AFD%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D1CB57007ECF6C6EC9CEB6A0BC99D9D7765A0E2DA%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DUnknowniPod%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYM1VZz/PgggDAImJ64cgsMF0%26utype%3Dpre_vip%26sdk%3D13.2&deliveryId=525&key=sq_app_ad&miniWua=HHnB_O%2BGXc0zBN483XIVeuC7BMNk58K4pxLt3Il17OuWFovE%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=626&sign=29135966433868FE9E96DB96D130A185&timestamp=1624094305&userId=2130111089&user_id=2130111089&wua=HIVW_qm9/IHMaEbG8Ctz/F0Vl76jU0z3lKY9d9wFgNrgP7Hv6lFGRC0XpJBFlxgWXgFy5HtbgdeiSUtHm05td/kbv%2B6WWOr6YzXLCXrnT8Zuk9jMYxOSADUm5vNpvfZiIQYyQgVi0OzYZz9uOAgm7cHf7c9ZayhWhSYh6JQdXGBX4m3iVMDFtHyLT%2B5%2BfsJdRHOyF9k0zhZWbOI52JOF3KUOewoz5iyW3GYyL9xf%2BBQqJpU4%3D"},{"key":"shuqiscbody15","val":""},{"key":"shuqiydbody15","val":""},{"key":"shuqiqdbody15","val":"clientTimestamp=1624094294&position=501&userId=2130111089&signInType=1&wua=HIVW_nnDRzVFS0v%2BrU19qLeOBGZzSs7ZQvtt%2F5hqS7UUfaN0V83tFHMELVz1aTTZa0XxoQlnNihJ%2FQdYO30CB522GDiyMzDCysSNVnRGqMbsb7Gexuk5UTU2prfEldKOTW4LfHTtywUAG%2FwF5Cm%2FmHrTUzJK4xwKpdomq8q16%2F4Ish2TXFdtu7AJy0oGXRblcqeRqriEhKnNp72gqQgPtfJ3ywnNl%2FkIj5qxg1vETbh3O3Uk%3D&ua=&miniWua=HHnB_BuQyP%2F6EFBFN9x65w88xNsurdPxaKHEUQLPMTZt0dVo%3D&umidtoken=YM1VZz%2FPgggDAImJ64cgsMF0&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&sign=05db45050c67bb0bc3c52ba54e319ad9&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.2%26utdid%3DYM1VZz%252FPgggDAImJ64cgsMF0%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2130111089%26sn%3DC84266BD285EB765C6F375D55185034DDBCE0AFD%26umidtoken%3DYM1VZz%252FPgggDAImJ64cgsMF0%26msv%3D8.0.0%26brand%3DApple%26imei%3D1CB57007ECF6C6EC9CEB6A0BC99D9D7765A0E2DA%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPod%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D0A78CA8E-C2B0-4BD5-930F-038A8C7E4151"},{"key":"shuqirwbody15","val":"serviceWorkerOn=1&stopPullRefresh=1&from=ShuqiTab&upf=20368&sdk=13.2&utdid=YM1VZz%2FPgggDAImJ64cgsMF0&ustatus=0&first_placeid=111111&net_env=4g&placeid=111111&user_id=2130111089&sn=C84266BD285EB765C6F375D55185034DDBCE0AFD&umidtoken=YM1VZz%2FPgggDAImJ64cgsMF0&msv=8.0.0&brand=Apple&imei=1CB57007ECF6C6EC9CEB6A0BC99D9D7765A0E2DA&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&session=&skinColor=23B383&platform=1&ver=210301&mod=UnknowniPod&statusBarHeight=44.000000&skinVersion=1&wh=1242x2688&soft_id=21&utype=pre_vip&skinId=999&idfa=0A78CA8E-C2B0-4BD5-930F-038A8C7E4151&params=%7B%22resources%22%3A%7B%22ShuqiBsDailyTask%22%3A%7B%7D%7D%7D&userId=2130111089&placeId=111111&timestamp=1624094310&sqSv=1.0&sign=0a5fd2f359d7b118fb76d3e023f606c4&key=sq_h5_gateway&_public="},{"key":"shuqifxbody15","val":""},{"key":"shuqisprwurl15","val":"https://ocean.shuqireader.com/api/ad/adserver/v1/api/getAdInfo?appVer=4.3.6.0&placeId=111111&platform=iOS&requestSrc=h5&resourceId=626&timestamp=1624094344&user_id=2130111089&sqSv=1.0&sign=8c5831936da45f83a82dc3b4138bf5fb&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.2%26utdid%3DYM1VZz%252FPgggDAImJ64cgsMF0%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2130111089%26sn%3DC84266BD285EB765C6F375D55185034DDBCE0AFD%26umidtoken%3DYM1VZz%252FPgggDAImJ64cgsMF0%26msv%3D8.0.0%26brand%3DApple%26imei%3D1CB57007ECF6C6EC9CEB6A0BC99D9D7765A0E2DA%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPod%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D0A78CA8E-C2B0-4BD5-930F-038A8C7E4151"},{"key":"shuqijlbody15","val":"requestSrc=h5&userId=2130111089&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624094310&sqSv=1.0&sign=889537ef3dd1efd81bb853d6ec9b81ec&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.2%26utdid%3DYM1VZz%252FPgggDAImJ64cgsMF0%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2130111089%26sn%3DC84266BD285EB765C6F375D55185034DDBCE0AFD%26umidtoken%3DYM1VZz%252FPgggDAImJ64cgsMF0%26msv%3D8.0.0%26brand%3DApple%26imei%3D1CB57007ECF6C6EC9CEB6A0BC99D9D7765A0E2DA%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPod%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D0A78CA8E-C2B0-4BD5-930F-038A8C7E4151"},{"key":"shuqisqjlbody15","val":"src=&userId=2130111089&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624094303&sqSv=1.0&sign=2e595ae9e5a2a3553e8b0e134dd0a57a&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.2%26utdid%3DYM1VZz%252FPgggDAImJ64cgsMF0%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2130111089%26sn%3DC84266BD285EB765C6F375D55185034DDBCE0AFD%26umidtoken%3DYM1VZz%252FPgggDAImJ64cgsMF0%26msv%3D8.0.0%26brand%3DApple%26imei%3D1CB57007ECF6C6EC9CEB6A0BC99D9D7765A0E2DA%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPod%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D0A78CA8E-C2B0-4BD5-930F-038A8C7E4151"},{"key":"shuqicjyurl15","val":"https://ocean.shuqireader.com/api/activity/activity/v1/lottery/info?timestamp=1624094360&userId=2130111089&activityId=311&sqSv=1.0&sign=0aa3270013d46daa06377605e5afaf7b&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.2%26utdid%3DYM1VZz%252FPgggDAImJ64cgsMF0%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2130111089%26sn%3DC84266BD285EB765C6F375D55185034DDBCE0AFD%26umidtoken%3DYM1VZz%252FPgggDAImJ64cgsMF0%26msv%3D8.0.0%26brand%3DApple%26imei%3D1CB57007ECF6C6EC9CEB6A0BC99D9D7765A0E2DA%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPod%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D0A78CA8E-C2B0-4BD5-930F-038A8C7E4151"},{"key":"shuqicjcsbody15","val":"_public=skinId%3D999%26idfa%3D0A78CA8E-C2B0-4BD5-930F-038A8C7E4151%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26umidtoken%3DYM1VZz/PgggDAImJ64cgsMF0%26user_id%3D2130111089%26sn%3DC84266BD285EB765C6F375D55185034DDBCE0AFD%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D1CB57007ECF6C6EC9CEB6A0BC99D9D7765A0E2DA%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DUnknowniPod%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYM1VZz/PgggDAImJ64cgsMF0%26utype%3Dpre_vip%26sdk%3D13.2&deliveryId=711&key=sq_app_ad&miniWua=HHnB_5cZUyVhJXtC%2B9hN6tIYpPvjCYKeA189y2zXTV9lkZzY%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=703&sign=0B0EFD0127E57372A37AD7C75A4F3BB7&timestamp=1624094319&userId=2130111089&user_id=2130111089&wua=HIVW_W98atYL2suulzCDgqqAO%2BgJTVgFtM/xREGUhOpU8kLJPsb4MBt%2BH66qsx8u2/B77Q7uKMTvRZzqy2owEBQlf0o7H/YUbyVeiKETelsvE71QP%2BAPb3H4zALM1US9xQVFa5vgrm9kWw7stuWmYgN/JUPubYzY1vLuklO8XknBeH9GgIXHQzrCkFQYO/iY0a0iwCU5Kv/n7vPXffSQLCR/3p0ZNMxZGuSbR7zXyeV4wkyU%3D"},{"key":"shuqicjbody15","val":"wua=HIVW_UFgIbNney%2FYzor%2B9CYVCzvDf6LNBrG2WgaxyQ3FWi%2FwFLd3iz6ILGrlWzXk%2BB4Ex2fmcnUybnIRxllgLbjBiB8QA4M3W9tapmYQI%2Fb1Roke33sY2ajBV%2FewygPyFQNDAvUA8ulIDOCNw4390%2FBJPjMRFxpV7%2BN461MX1HInIgn2Wa8Ro2mcGK3Fy4uBL2j8h3G4BxiHme87z7jDdeMbMN5QQ1qo8hsyQ2QY%2FFmr58ek%3D&ua=&userId=2130111089&umidtoken=YM1VZz%2FPgggDAImJ64cgsMF0&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&asac=2A20C07RJ9F51AOEFSNHDR&timestamp=1624094325&activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&sqSv=1.0&sign=371448220f6cc831cc7338fceec57b00&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.2%26utdid%3DYM1VZz%252FPgggDAImJ64cgsMF0%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2130111089%26sn%3DC84266BD285EB765C6F375D55185034DDBCE0AFD%26umidtoken%3DYM1VZz%252FPgggDAImJ64cgsMF0%26msv%3D8.0.0%26brand%3DApple%26imei%3D1CB57007ECF6C6EC9CEB6A0BC99D9D7765A0E2DA%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPod%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D0A78CA8E-C2B0-4BD5-930F-038A8C7E4151"},{"key":"shuqijsspbody15","val":""},{"key":"shuqijsydurl15","val":""},{"key":"shuqijsydbody15","val":""},{"key":"shuqijsqdbody15","val":""},{"key":"shuqijsqdspyurl15","val":""},{"key":"shuqijsqdspbody15","val":""},{"key":"shuqijsrwbody15","val":""},{"key":"shuqijsfxbody15","val":""},{"key":"shuqijsbookurl15","val":""},{"key":"shuqijsbookbody15","val":""},{"key":"shuqijssprwurl15","val":""},{"key":"shuqiuserurl16","val":""},{"key":"shuqisyurl16","val":""},{"key":"shuqisybody16","val":""},{"key":"shuqispbody16","val":""},{"key":"shuqiscbody16","val":""},{"key":"shuqiydbody16","val":""},{"key":"shuqiqdbody16","val":""},{"key":"shuqirwbody16","val":""},{"key":"shuqifxbody16","val":""},{"key":"shuqisprwurl16","val":""},{"key":"shuqijlbody16","val":""},{"key":"shuqisqjlbody16","val":""},{"key":"shuqicjyurl16","val":""},{"key":"shuqicjcsbody16","val":""},{"key":"shuqicjbody16","val":""},{"key":"shuqijsspbody16","val":""},{"key":"shuqijsydurl16","val":""},{"key":"shuqijsydbody16","val":""},{"key":"shuqijsqdbody16","val":""},{"key":"shuqijsqdspyurl16","val":""},{"key":"shuqijsqdspbody16","val":""},{"key":"shuqijsrwbody16","val":""},{"key":"shuqijsfxbody16","val":""},{"key":"shuqijsbookurl16","val":""},{"key":"shuqijsbookbody16","val":""},{"key":"shuqijssprwurl16","val":""},{"key":"shuqiuserurl17","val":""},{"key":"shuqisyurl17","val":""},{"key":"shuqisybody17","val":""},{"key":"shuqispbody17","val":""},{"key":"shuqiscbody17","val":""},{"key":"shuqiydbody17","val":""},{"key":"shuqiqdbody17","val":""},{"key":"shuqirwbody17","val":""},{"key":"shuqifxbody17","val":""},{"key":"shuqisprwurl17","val":""},{"key":"shuqijlbody17","val":""},{"key":"shuqisqjlbody17","val":""},{"key":"shuqicjyurl17","val":""},{"key":"shuqicjcsbody17","val":""},{"key":"shuqicjbody17","val":""},{"key":"shuqijsspbody17","val":""},{"key":"shuqijsydurl17","val":""},{"key":"shuqijsydbody17","val":""},{"key":"shuqijsqdbody17","val":""},{"key":"shuqijsqdspyurl17","val":""},{"key":"shuqijsqdspbody17","val":""},{"key":"shuqijsrwbody17","val":""},{"key":"shuqijsfxbody17","val":""},{"key":"shuqijsbookurl17","val":""},{"key":"shuqijsbookbody17","val":""},{"key":"shuqijssprwurl17","val":""},{"key":"shuqiuserurl18","val":""},{"key":"shuqisyurl18","val":""},{"key":"shuqisybody18","val":""},{"key":"shuqispbody18","val":""},{"key":"shuqiscbody18","val":""},{"key":"shuqiydbody18","val":""},{"key":"shuqiqdbody18","val":""},{"key":"shuqirwbody18","val":""},{"key":"shuqifxbody18","val":""},{"key":"shuqisprwurl18","val":""},{"key":"shuqijlbody18","val":""},{"key":"shuqisqjlbody18","val":""},{"key":"shuqicjyurl18","val":""},{"key":"shuqicjcsbody18","val":""},{"key":"shuqicjbody18","val":""},{"key":"shuqijsspbody18","val":""},{"key":"shuqijsydurl18","val":""},{"key":"shuqijsydbody18","val":""},{"key":"shuqijsqdbody18","val":""},{"key":"shuqijsqdspyurl18","val":""},{"key":"shuqijsqdspbody18","val":""},{"key":"shuqijsrwbody18","val":""},{"key":"shuqijsfxbody18","val":""},{"key":"shuqijsbookurl18","val":""},{"key":"shuqijsbookbody18","val":""},{"key":"shuqijssprwurl18","val":""},{"key":"shuqiuserurl19","val":""},{"key":"shuqisyurl19","val":""},{"key":"shuqisybody19","val":""},{"key":"shuqispbody19","val":""},{"key":"shuqiscbody19","val":""},{"key":"shuqiydbody19","val":""},{"key":"shuqiqdbody19","val":""},{"key":"shuqirwbody19","val":""},{"key":"shuqifxbody19","val":""},{"key":"shuqisprwurl19","val":""},{"key":"shuqijlbody19","val":""},{"key":"shuqisqjlbody19","val":""},{"key":"shuqicjyurl19","val":""},{"key":"shuqicjcsbody19","val":""},{"key":"shuqicjbody19","val":""},{"key":"shuqijsspbody19","val":""},{"key":"shuqijsydurl19","val":""},{"key":"shuqijsydbody19","val":""},{"key":"shuqijsqdbody19","val":""},{"key":"shuqijsqdspyurl19","val":""},{"key":"shuqijsqdspbody19","val":""},{"key":"shuqijsrwbody19","val":""},{"key":"shuqijsfxbody19","val":""},{"key":"shuqijsbookurl19","val":""},{"key":"shuqijsbookbody19","val":""},{"key":"shuqijssprwurl19","val":""},{"key":"shuqiuserurl20","val":""},{"key":"shuqisyurl20","val":""},{"key":"shuqisybody20","val":""},{"key":"shuqispbody20","val":""},{"key":"shuqiscbody20","val":""},{"key":"shuqiydbody20","val":""},{"key":"shuqiqdbody20","val":""},{"key":"shuqirwbody20","val":""},{"key":"shuqifxbody20","val":""},{"key":"shuqisprwurl20","val":""},{"key":"shuqijlbody20","val":""},{"key":"shuqisqjlbody20","val":""},{"key":"shuqicjyurl20","val":""},{"key":"shuqicjcsbody20","val":""},{"key":"shuqicjbody20","val":""},{"key":"shuqijsspbody20","val":""},{"key":"shuqijsydurl20","val":""},{"key":"shuqijsydbody20","val":""},{"key":"shuqijsqdbody20","val":""},{"key":"shuqijsqdspyurl20","val":""},{"key":"shuqijsqdspbody20","val":""},{"key":"shuqijsrwbody20","val":""},{"key":"shuqijsfxbody20","val":""},{"key":"shuqijsbookurl20","val":""},{"key":"shuqijsbookbody20","val":""},{"key":"shuqijssprwurl20","val":""}],"sessions":[],"isLoaded":true};
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
