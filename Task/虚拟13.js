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
const COOKIE ={"id":"shuqi","name":"书旗小说APP","keys":["shuqiuserurl","shuqisyurl","shuqisybody","shuqispbody","shuqiscbody","shuqiydbody","shuqiqdbody","shuqirwbody","shuqifxbody","shuqisprwurl","shuqijlbody","shuqisqjlbody","shuqicjyurl","shuqicjcsbody","shuqicjbody","shuqijsspbody","shuqijsydurl","shuqijsydbody","shuqijsqdbody","shuqijsqdspyurl","shuqijsqdspbody","shuqijsrwbody","shuqijsfxbody","shuqijsbookurl","shuqijsbookbody","shuqijssprwurl","shuqiuserurl2","shuqisyurl2","shuqisybody2","shuqispbody2","shuqiscbody2","shuqiydbody2","shuqiqdbody2","shuqirwbody2","shuqifxbody2","shuqisprwurl2","shuqijlbody2","shuqisqjlbody2","shuqicjyurl2","shuqicjcsbody2","shuqicjbody2","shuqijsspbody2","shuqijsydurl2","shuqijsydbody2","shuqijsqdbody2","shuqijsqdspyurl2","shuqijsqdspbody2","shuqijsrwbody2","shuqijsfxbody2","shuqijsbookurl2","shuqijsbookbody2","shuqijssprwurl2","shuqiuserurl3","shuqisyurl3","shuqisybody3","shuqispbody3","shuqiscbody3","shuqiydbody3","shuqiqdbody3","shuqirwbody3","shuqifxbody3","shuqisprwurl3","shuqijlbody3","shuqisqjlbody3","shuqicjyurl3","shuqicjcsbody3","shuqicjbody3","shuqijsspbody3","shuqijsydurl3","shuqijsydbody3","shuqijsqdbody3","shuqijsqdspyurl3","shuqijsqdspbody3","shuqijsrwbody3","shuqijsfxbody3","shuqijsbookurl3","shuqijsbookbody3","shuqijssprwurl3","shuqiuserurl4","shuqisyurl4","shuqisybody4","shuqispbody4","shuqiscbody4","shuqiydbody4","shuqiqdbody4","shuqirwbody4","shuqifxbody4","shuqisprwurl4","shuqijlbody4","shuqisqjlbody4","shuqicjyurl4","shuqicjcsbody4","shuqicjbody4","shuqijsspbody4","shuqijsydurl4","shuqijsydbody4","shuqijsqdbody4","shuqijsqdspyurl4","shuqijsqdspbody4","shuqijsrwbody4","shuqijsfxbody4","shuqijsbookurl4","shuqijsbookbody4","shuqijssprwurl4","shuqiuserurl5","shuqisyurl5","shuqisybody5","shuqispbody5","shuqiscbody5","shuqiydbody5","shuqiqdbody5","shuqirwbody5","shuqifxbody5","shuqisprwurl5","shuqijlbody5","shuqisqjlbody5","shuqicjyurl5","shuqicjcsbody5","shuqicjbody5","shuqijsspbody5","shuqijsydurl5","shuqijsydbody5","shuqijsqdbody5","shuqijsqdspyurl5","shuqijsqdspbody5","shuqijsrwbody5","shuqijsfxbody5","shuqijsbookurl5","shuqijsbookbody5","shuqijssprwurl5","shuqiuserurl6","shuqisyurl6","shuqisybody6","shuqispbody6","shuqiscbody6","shuqiydbody6","shuqiqdbody6","shuqirwbody6","shuqifxbody6","shuqisprwurl6","shuqijlbody6","shuqisqjlbody6","shuqicjyurl6","shuqicjcsbody6","shuqicjbody6","shuqijsspbody6","shuqijsydurl6","shuqijsydbody6","shuqijsqdbody6","shuqijsqdspyurl6","shuqijsqdspbody6","shuqijsrwbody6","shuqijsfxbody6","shuqijsbookurl6","shuqijsbookbody6","shuqijssprwurl6","shuqiuserurl7","shuqisyurl7","shuqisybody7","shuqispbody7","shuqiscbody7","shuqiydbody7","shuqiqdbody7","shuqirwbody7","shuqifxbody7","shuqisprwurl7","shuqijlbody7","shuqisqjlbody7","shuqicjyurl7","shuqicjcsbody7","shuqicjbody7","shuqijsspbody7","shuqijsydurl7","shuqijsydbody7","shuqijsqdbody7","shuqijsqdspyurl7","shuqijsqdspbody7","shuqijsrwbody7","shuqijsfxbody7","shuqijsbookurl7","shuqijsbookbody7","shuqijssprwurl7","shuqiuserurl8","shuqisyurl8","shuqisybody8","shuqispbody8","shuqiscbody8","shuqiydbody8","shuqiqdbody8","shuqirwbody8","shuqifxbody8","shuqisprwurl8","shuqijlbody8","shuqisqjlbody8","shuqicjyurl8","shuqicjcsbody8","shuqicjbody8","shuqijsspbody8","shuqijsydurl8","shuqijsydbody8","shuqijsqdbody8","shuqijsqdspyurl8","shuqijsqdspbody8","shuqijsrwbody8","shuqijsfxbody8","shuqijsbookurl8","shuqijsbookbody8","shuqijssprwurl8","shuqiuserurl9","shuqisyurl9","shuqisybody9","shuqispbody9","shuqiscbody9","shuqiydbody9","shuqiqdbody9","shuqirwbody9","shuqifxbody9","shuqisprwurl9","shuqijlbody9","shuqisqjlbody9","shuqicjyurl9","shuqicjcsbody9","shuqicjbody9","shuqijsspbody9","shuqijsydurl9","shuqijsydbody9","shuqijsqdbody9","shuqijsqdspyurl9","shuqijsqdspbody9","shuqijsrwbody9","shuqijsfxbody9","shuqijsbookurl9","shuqijsbookbody9","shuqijssprwurl9","shuqiuserurl10","shuqisyurl10","shuqisybody10","shuqispbody10","shuqiscbody10","shuqiydbody10","shuqiqdbody10","shuqirwbody10","shuqifxbody10","shuqisprwurl10","shuqijlbody10","shuqisqjlbody10","shuqicjyurl10","shuqicjcsbody10","shuqicjbody10","shuqijsspbody10","shuqijsydurl10","shuqijsydbody10","shuqijsqdbody10","shuqijsqdspyurl10","shuqijsqdspbody10","shuqijsrwbody10","shuqijsfxbody10","shuqijsbookurl10","shuqijsbookbody10","shuqijssprwurl10","shuqiuserurl11","shuqisyurl11","shuqisybody11","shuqispbody11","shuqiscbody11","shuqiydbody11","shuqiqdbody11","shuqirwbody11","shuqifxbody11","shuqisprwurl11","shuqijlbody11","shuqisqjlbody11","shuqicjyurl11","shuqicjcsbody11","shuqicjbody11","shuqijsspbody11","shuqijsydurl11","shuqijsydbody11","shuqijsqdbody11","shuqijsqdspyurl11","shuqijsqdspbody11","shuqijsrwbody11","shuqijsfxbody11","shuqijsbookurl11","shuqijsbookbody11","shuqijssprwurl11","shuqiuserurl12","shuqisyurl12","shuqisybody12","shuqispbody12","shuqiscbody12","shuqiydbody12","shuqiqdbody12","shuqirwbody12","shuqifxbody12","shuqisprwurl12","shuqijlbody12","shuqisqjlbody12","shuqicjyurl12","shuqicjcsbody12","shuqicjbody12","shuqijsspbody12","shuqijsydurl12","shuqijsydbody12","shuqijsqdbody12","shuqijsqdspyurl12","shuqijsqdspbody12","shuqijsrwbody12","shuqijsfxbody12","shuqijsbookurl12","shuqijsbookbody12","shuqijssprwurl12","shuqiuserurl13","shuqisyurl13","shuqisybody13","shuqispbody13","shuqiscbody13","shuqiydbody13","shuqiqdbody13","shuqirwbody13","shuqifxbody13","shuqisprwurl13","shuqijlbody13","shuqisqjlbody13","shuqicjyurl13","shuqicjcsbody13","shuqicjbody13","shuqijsspbody13","shuqijsydurl13","shuqijsydbody13","shuqijsqdbody13","shuqijsqdspyurl13","shuqijsqdspbody13","shuqijsrwbody13","shuqijsfxbody13","shuqijsbookurl13","shuqijsbookbody13","shuqijssprwurl13","shuqiuserurl14","shuqisyurl14","shuqisybody14","shuqispbody14","shuqiscbody14","shuqiydbody14","shuqiqdbody14","shuqirwbody14","shuqifxbody14","shuqisprwurl14","shuqijlbody14","shuqisqjlbody14","shuqicjyurl14","shuqicjcsbody14","shuqicjbody14","shuqijsspbody14","shuqijsydurl14","shuqijsydbody14","shuqijsqdbody14","shuqijsqdspyurl14","shuqijsqdspbody14","shuqijsrwbody14","shuqijsfxbody14","shuqijsbookurl14","shuqijsbookbody14","shuqijssprwurl14","shuqiuserurl15","shuqisyurl15","shuqisybody15","shuqispbody15","shuqiscbody15","shuqiydbody15","shuqiqdbody15","shuqirwbody15","shuqifxbody15","shuqisprwurl15","shuqijlbody15","shuqisqjlbody15","shuqicjyurl15","shuqicjcsbody15","shuqicjbody15","shuqijsspbody15","shuqijsydurl15","shuqijsydbody15","shuqijsqdbody15","shuqijsqdspyurl15","shuqijsqdspbody15","shuqijsrwbody15","shuqijsfxbody15","shuqijsbookurl15","shuqijsbookbody15","shuqijssprwurl15","shuqiuserurl16","shuqisyurl16","shuqisybody16","shuqispbody16","shuqiscbody16","shuqiydbody16","shuqiqdbody16","shuqirwbody16","shuqifxbody16","shuqisprwurl16","shuqijlbody16","shuqisqjlbody16","shuqicjyurl16","shuqicjcsbody16","shuqicjbody16","shuqijsspbody16","shuqijsydurl16","shuqijsydbody16","shuqijsqdbody16","shuqijsqdspyurl16","shuqijsqdspbody16","shuqijsrwbody16","shuqijsfxbody16","shuqijsbookurl16","shuqijsbookbody16","shuqijssprwurl16","shuqiuserurl17","shuqisyurl17","shuqisybody17","shuqispbody17","shuqiscbody17","shuqiydbody17","shuqiqdbody17","shuqirwbody17","shuqifxbody17","shuqisprwurl17","shuqijlbody17","shuqisqjlbody17","shuqicjyurl17","shuqicjcsbody17","shuqicjbody17","shuqijsspbody17","shuqijsydurl17","shuqijsydbody17","shuqijsqdbody17","shuqijsqdspyurl17","shuqijsqdspbody17","shuqijsrwbody17","shuqijsfxbody17","shuqijsbookurl17","shuqijsbookbody17","shuqijssprwurl17","shuqiuserurl18","shuqisyurl18","shuqisybody18","shuqispbody18","shuqiscbody18","shuqiydbody18","shuqiqdbody18","shuqirwbody18","shuqifxbody18","shuqisprwurl18","shuqijlbody18","shuqisqjlbody18","shuqicjyurl18","shuqicjcsbody18","shuqicjbody18","shuqijsspbody18","shuqijsydurl18","shuqijsydbody18","shuqijsqdbody18","shuqijsqdspyurl18","shuqijsqdspbody18","shuqijsrwbody18","shuqijsfxbody18","shuqijsbookurl18","shuqijsbookbody18","shuqijssprwurl18","shuqiuserurl19","shuqisyurl19","shuqisybody19","shuqispbody19","shuqiscbody19","shuqiydbody19","shuqiqdbody19","shuqirwbody19","shuqifxbody19","shuqisprwurl19","shuqijlbody19","shuqisqjlbody19","shuqicjyurl19","shuqicjcsbody19","shuqicjbody19","shuqijsspbody19","shuqijsydurl19","shuqijsydbody19","shuqijsqdbody19","shuqijsqdspyurl19","shuqijsqdspbody19","shuqijsrwbody19","shuqijsfxbody19","shuqijsbookurl19","shuqijsbookbody19","shuqijssprwurl19","shuqiuserurl20","shuqisyurl20","shuqisybody20","shuqispbody20","shuqiscbody20","shuqiydbody20","shuqiqdbody20","shuqirwbody20","shuqifxbody20","shuqisprwurl20","shuqijlbody20","shuqisqjlbody20","shuqicjyurl20","shuqicjcsbody20","shuqicjbody20","shuqijsspbody20","shuqijsydurl20","shuqijsydbody20","shuqijsqdbody20","shuqijsqdspyurl20","shuqijsqdspbody20","shuqijsrwbody20","shuqijsfxbody20","shuqijsbookurl20","shuqijsbookbody20","shuqijssprwurl20"],"author":"@ziye","settings":[{"id":"shuqiSuffix","name":"当前账号","val":"15","type":"number","desc":"当前抓取ck记录的账号序号，如：1、2、3、"},{"id":"shuqiCount","name":"账号个数","val":"15","type":"number","desc":"指定任务最多跑几个账号，根据抓取的账号数据个数来设值"},{"id":"shuqiXH","name":"循环获取CK","val":"0","type":"number","desc":"0关闭 1开启,默认关闭"},{"id":"shuqiSC","name":"单刷时长控制","val":"0","type":"number","desc":"0关闭 1开启,默认关闭"},{"id":"shuqiTXTX","name":"提现提醒","val":"15","type":"number","desc":"0关闭 设置余额大于多少提醒"},{"id":"shuqinotifyttt","name":"推送控制","val":"1","type":"number","desc":"0关闭，1推送,默认12点以及23点推送"},{"id":"shuqinotifyInterval","name":"通知控制","val":"2","type":"number","desc":"0关闭，1为 所有通知，2为 12，23 点通知，3为 6，12，18，23 点通知 "},{"id":"shuqiMinutes","name":"推送-通知 分钟控制","val":"59","type":"number","desc":"推送以及通知控制在什么分钟段，可设置0-59,默认0到10"}],"repo":"https://cdn.jsdelivr.net/gh/ziye888/JavaScript@main/Task/shuqi.js","icons":["https://cdn.jsdelivr.net/gh/ziye888/JavaScript@main/Task/shuqi.png","https://cdn.jsdelivr.net/gh/ziye888/JavaScript@main/Task/shuqi.png"],"script":"https://cdn.jsdelivr.net/gh/ziye888/JavaScript@main/Task/shuqi.js","icon":"https://cdn.jsdelivr.net/gh/ziye888/JavaScript@main/Task/shuqi.png","favIcon":"mdi-star","favIconColor":"primary","datas":[{"key":"shuqiuserurl","val":"https://ocean.shuqireader.com/api/jaccount/accountapi/v1/sapi/account/getBindinfo?userId=2127238940&sqSv=1.0&timestamp=1623987783&sign=d810a68ecfe8014cc856fcc705484dad&key=sq_h5_gateway"},{"key":"shuqisyurl","val":"https://render.shuqireader.com/load/resource?sdk=14.3&utdid=YMc1rKlDFgQDAJQyvafRaJHf&ustatus=0&first_placeid=111111&net_env=wifi&placeid=111111&user_id=2127238940&sn=76BB1AFC60518BD052AC80FD8FA3A3EEA93CA0FB&umidtoken=YMc1rKlDFgQDAJQyvafRaJHf&msv=8.0.0&brand=Apple&imei=825E2DD08E82B5621233B7678DCAD528D02F70A7&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=iOS&ver=210301&mod=iPhoneXMAX&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=1E21B36C-611A-4396-A244-445FE66353E9"},{"key":"shuqisybody","val":"appVer=4.3.6.0&imei=825E2DD08E82B5621233B7678DCAD528D02F70A7&isNewUser=1&params=%7B%22resources%22%3A%7B%22ShuqiVipEntry%22%3A%7B%7D%2C%22personalCardConfig%22%3A%7B%7D%7D%7D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=1870bbec7b52a50117669621e763197e&sn=76BB1AFC60518BD052AC80FD8FA3A3EEA93CA0FB&soft_id=21&timestamp=1623987615&user_id=2127238940&ver=210301"},{"key":"shuqispbody","val":"_public=utype%3Dpre_vip%26idfa%3D71F18955-F8EA-4F08-804B-875E6ECC6E5E%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26umidtoken%3DYMc1rKlDFgQDAJQyvafRaJHf%26user_id%3D2127238940%26sn%3D76BB1AFC60518BD052AC80FD8FA3A3EEA93CA0FB%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D825E2DD08E82B5621233B7678DCAD528D02F70A7%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhone8P%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26utdid%3DYMc1rKlDFgQDAJQyvafRaJHf%26soft_id%3D21%26sdk%3D13.4&deliveryId=525&key=sq_app_ad&miniWua=HHnB_KUOqTdWZb0eQAxaLs41UEHJnDxRWbQNMJCuCdIAPGKQ%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=626&sign=6E378E9A31DB44E61ACE33498E9D0188&timestamp=1623987724&userId=2127238940&user_id=2127238940&wua=HIVW_Re4XotKihjnFDMgYsvYoHMK253sPKGBb3AgiO7YYEKRLjmalHeN/LYaiQaKeuPAtfXyVGOPjetl/6ug2LwJFWFCK3XGgI0UpZ5HA5LauLEcu1pwy1jWL4Kpt1UKTIMKk0aOqKgYn9UKoxViaBsQPHVdh9BS6IY6iL9uGh7YRK4LDEX/EIvec7MHDE3l7jBtHVsNLf8lwWxWDmCmptz8Gugk%2Bktcuh75wnPkay6w8aI4%3D"},{"key":"shuqiscbody","val":"_public=skinId%253D999%2526idfa%253D1E21B36C-611A-4396-A244-445FE66353E9%2526ustatus%253D0%2526first_placeid%253D111111%2526net_env%253Dwifi%2526umidtoken%253DYMc1rKlDFgQDAJQyvafRaJHf%2526user_id%253D2127238940%2526sn%253D76BB1AFC60518BD052AC80FD8FA3A3EEA93CA0FB%2526placeid%253D111111%2526msv%253D8.0.0%2526brand%253DApple%2526imei%253D825E2DD08E82B5621233B7678DCAD528D02F70A7%2526skinVersionPrefix%253D1%2526appVer%253D4.3.6.0%2526skinActiveColor%253D0F9970%2526manufacturer%253DApple%2526skinColor%253D23B383%2526platform%253DiOS%2526ver%253D210301%2526mod%253DiPhoneXMAX%2526statusBarHeight%253D44.000000%2526skinVersion%253D1%2526wh%253D1242x2688%2526soft_id%253D21%2526utdid%253DYMc1rKlDFgQDAJQyvafRaJHf%2526utype%253Dpre_vip%2526sdk%253D14.3&key=and_log&readingList=%5B%7B%22startTime%22%3A1623987621%2C%22readObjType%22%3A1%2C%22attr%22%3A2%2C%22readObjId%22%3A%227910811%22%2C%22readChapterId%22%3A1214465%2C%22readingLen%22%3A34%7D%5D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=53A18A0A5E4CD23641F4FB081AA36F19&timestamp=1623987656&user_id=2127238940"},{"key":"shuqiydbody","val":"_public=skinId%3D999%26idfa%3D1E21B36C-611A-4396-A244-445FE66353E9%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26umidtoken%3DYMc1rKlDFgQDAJQyvafRaJHf%26user_id%3D2127238940%26sn%3D76BB1AFC60518BD052AC80FD8FA3A3EEA93CA0FB%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D825E2DD08E82B5621233B7678DCAD528D02F70A7%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhoneXMAX%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYMc1rKlDFgQDAJQyvafRaJHf%26utype%3Dpre_vip%26sdk%3D14.3&deliveryId=707&key=sq_app_ad&miniWua=HHnB_57jWeNtAsRQOrlt6O0cnbViTpAtgWyiqYmwhnDMrz/I%3D&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=678&sign=0B0537C70E49643CF19C3677A9FF12B8&timestamp=1623987650&userId=2127238940&wua=HIVW_Qf00pofcCTRWUn%2BNC5GQYbCP8uyy0H7ThIe%2BbaAXiAbIpxMybI3pWYg0LAjIy8INm50FogEu7DvyAgTjnMhbGYTEPl92NQLgJ45gEkxnSm0KF0dm7RnbBKfjISWPF0REB6Lm%2BtSQfCie8y3XFrFbG%2BIZqGTsYtbTg5dRxFwZIu2KKR9qPvMIkOviKLvJtfbyj0SV84M10HiEkQBwNolDYAOaW6MuLPXnH5ULJ/n5prk%3D"},{"key":"shuqiqdbody","val":"clientTimestamp=1623987671&position=501&userId=2127238940&signInType=1&wua=HIVW_NOJycjuGg3M91RSIzpu9VDBZHlxYTJKvgijOikQLzS9LYIDEtgScE%2BbM%2FVIWhip8HBpgtiizfjjdjCvuYCVNlMJD3PPDHPV4t%2FQub%2F5lTd4TAGBcZjbhOmUx2eKXC6osTW4EslexZl0%2FsjD0Pd7oAtf2ZBfLea%2B%2FmZRsLCXhFjd9UK%2FJG5Ko8df4CgK21rCArd%2BTWcz0zgp7EnP57msnHeC15h87zLgUME1OvPsHnPE%3D&ua=&miniWua=HHnB_ADkb0tuA63rsEYK195OYmbG1vrSOBjTy6yQY1R41xxA%3D&umidtoken=YMc1rKlDFgQDAJQyvafRaJHf&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&sign=3d20cd90a31b2c48bd92e880aef12009&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D14.3%26utdid%3DYMc1rKlDFgQDAJQyvafRaJHf%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2127238940%26sn%3D76BB1AFC60518BD052AC80FD8FA3A3EEA93CA0FB%26umidtoken%3DYMc1rKlDFgQDAJQyvafRaJHf%26msv%3D8.0.0%26brand%3DApple%26imei%3D825E2DD08E82B5621233B7678DCAD528D02F70A7%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhoneXMAX%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D1E21B36C-611A-4396-A244-445FE66353E9"},{"key":"shuqirwbody","val":""},{"key":"shuqifxbody","val":""},{"key":"shuqisprwurl","val":"https://ocean.shuqireader.com/api/ad/adserver/v1/api/getAdInfo?appVer=4.3.6.0&placeId=111111&platform=iOS&requestSrc=h5&resourceId=626&timestamp=1623987782&user_id=2127238940&sqSv=1.0&sign=43af6ef443fcc6a53089a259712391ef&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.4%26utdid%3DYMc1rKlDFgQDAJQyvafRaJHf%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2127238940%26sn%3D76BB1AFC60518BD052AC80FD8FA3A3EEA93CA0FB%26umidtoken%3DYMc1rKlDFgQDAJQyvafRaJHf%26msv%3D8.0.0%26brand%3DApple%26imei%3D825E2DD08E82B5621233B7678DCAD528D02F70A7%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone8P%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D71F18955-F8EA-4F08-804B-875E6ECC6E5E"},{"key":"shuqijlbody","val":"requestSrc=h5&userId=2127238940&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1623987727&sqSv=1.0&sign=530031ea1926c3665b0c94bec877f94e&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.4%26utdid%3DYMc1rKlDFgQDAJQyvafRaJHf%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2127238940%26sn%3D76BB1AFC60518BD052AC80FD8FA3A3EEA93CA0FB%26umidtoken%3DYMc1rKlDFgQDAJQyvafRaJHf%26msv%3D8.0.0%26brand%3DApple%26imei%3D825E2DD08E82B5621233B7678DCAD528D02F70A7%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone8P%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D71F18955-F8EA-4F08-804B-875E6ECC6E5E"},{"key":"shuqisqjlbody","val":"src=&userId=2127238940&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1623987666&sqSv=1.0&sign=c6bde520cd2a5333df552330471b63cd&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D14.3%26utdid%3DYMc1rKlDFgQDAJQyvafRaJHf%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2127238940%26sn%3D76BB1AFC60518BD052AC80FD8FA3A3EEA93CA0FB%26umidtoken%3DYMc1rKlDFgQDAJQyvafRaJHf%26msv%3D8.0.0%26brand%3DApple%26imei%3D825E2DD08E82B5621233B7678DCAD528D02F70A7%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhoneXMAX%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D1E21B36C-611A-4396-A244-445FE66353E9"},{"key":"shuqicjyurl","val":"https://ocean.shuqireader.com/api/activity/activity/v1/lottery/info?timestamp=1623987784&userId=2127238940&activityId=311&sqSv=1.0&sign=e491adcdc9c179d42b30ece49a8a59f8&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.4%26utdid%3DYMc1rKlDFgQDAJQyvafRaJHf%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2127238940%26sn%3D76BB1AFC60518BD052AC80FD8FA3A3EEA93CA0FB%26umidtoken%3DYMc1rKlDFgQDAJQyvafRaJHf%26msv%3D8.0.0%26brand%3DApple%26imei%3D825E2DD08E82B5621233B7678DCAD528D02F70A7%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone8P%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D71F18955-F8EA-4F08-804B-875E6ECC6E5E"},{"key":"shuqicjcsbody","val":"_public=utype%3Dpre_vip%26idfa%3D71F18955-F8EA-4F08-804B-875E6ECC6E5E%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26umidtoken%3DYMc1rKlDFgQDAJQyvafRaJHf%26user_id%3D2127238940%26sn%3D76BB1AFC60518BD052AC80FD8FA3A3EEA93CA0FB%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D825E2DD08E82B5621233B7678DCAD528D02F70A7%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhone8P%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26utdid%3DYMc1rKlDFgQDAJQyvafRaJHf%26soft_id%3D21%26sdk%3D13.4&deliveryId=711&key=sq_app_ad&miniWua=HHnB_a4JzDlKY8dTlSHi8%2BpHCq1d0WTalYZ3Ein2dYZ3MoUU%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=703&sign=B82B35376A595D66E3185A56AD01821F&timestamp=1623987753&userId=2127238940&user_id=2127238940&wua=HIVW_8tYdsuoGmwsUzEkEUjzLXHZdS%2BtCvVLfrkLjp5Q0S4HlwlMwXKsSjiejW8v9p91NPHKNBp8GaKZEOdfw0S42WhcVm/yMN6%2BrG5kPszY8hBUkXsKG59Kebnv43pQ97SJMMAgaSgYUCneitfC%2Bl8tyGak1H2FNsW8Tduk6KROq0IbsSlsm84rdzrUVXzVBkG7qct0pdyhGptv%2B5Z3PPjsiCkeMIDX8UQUnGKlzFphyPU8%3D"},{"key":"shuqicjbody","val":"wua=HIVW_kdGJYH5Masdg6z0eUFEsW7D7Du%2FsTfEgZ3b5ZV9bOrUIHvF1Qg1LX3%2FW8BJmSLgJc3hbghZDu6vRSWSU9psVNMxBrxlFULj7MVQvxXS%2FRbspb8oAWPV89Sh2wi2l%2BUqyC651T4Z1v94ZvJb2wJbawZ5XrP%2B6fhBr7cbuxU%2BT5Z6GBnEvjXVjk4dk2G8nucDle5eXgsq73jZpyW688YfSJ09idjsY8QTUgI%2BrhrXk3YI%3D&ua=&userId=2127238940&umidtoken=YMc1rKlDFgQDAJQyvafRaJHf&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&asac=2A20C07RJ9F51AOEFSNHDR&timestamp=1623987769&activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&sqSv=1.0&sign=2cf1dc86a3679b35fce4b351898ff52c&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.4%26utdid%3DYMc1rKlDFgQDAJQyvafRaJHf%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2127238940%26sn%3D76BB1AFC60518BD052AC80FD8FA3A3EEA93CA0FB%26umidtoken%3DYMc1rKlDFgQDAJQyvafRaJHf%26msv%3D8.0.0%26brand%3DApple%26imei%3D825E2DD08E82B5621233B7678DCAD528D02F70A7%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone8P%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D71F18955-F8EA-4F08-804B-875E6ECC6E5E"},{"key":"shuqijsspbody","val":""},{"key":"shuqijsydurl","val":""},{"key":"shuqijsydbody","val":""},{"key":"shuqijsqdbody","val":""},{"key":"shuqijsqdspyurl","val":""},{"key":"shuqijsqdspbody","val":""},{"key":"shuqijsrwbody","val":""},{"key":"shuqijsfxbody","val":""},{"key":"shuqijsbookurl","val":""},{"key":"shuqijsbookbody","val":""},{"key":"shuqijssprwurl","val":""},{"key":"shuqiuserurl2","val":"https://ocean.shuqireader.com/api/jaccount/accountapi/v1/sapi/account/getBindinfo?userId=2125216559&sqSv=1.0&timestamp=1623987947&sign=081caab49ebed9894beae00a4d01c233&key=sq_h5_gateway"},{"key":"shuqisyurl2","val":"https://render.shuqireader.com/load/resource?sdk=13.3.1&utdid=YMqjs7gsZOQDAG12f5YGYF2K&ustatus=0&first_placeid=111111&net_env=wifi&placeid=111111&user_id=2125216559&sn=F3034932BCFFFA932582D9A19EA6463FE76ADAAC&umidtoken=YMqjs7gsZOQDAG12f5YGYF2K&msv=8.0.0&brand=Apple&imei=1EB833AC2923027D6C63AB33FE9BAA0A590879C3&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=iOS&ver=210301&mod=iPhoneXS&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=5944CD7C-11A1-47A9-B291-A6710EC9ED8E"},{"key":"shuqisybody2","val":"appVer=4.3.6.0&imei=1EB833AC2923027D6C63AB33FE9BAA0A590879C3&isNewUser=1&params=%7B%22resources%22%3A%7B%22ShuqiVipEntry%22%3A%7B%7D%2C%22personalCardConfig%22%3A%7B%7D%7D%7D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=08d46ac0962ac86ec28ab07a0b726b11&sn=F3034932BCFFFA932582D9A19EA6463FE76ADAAC&soft_id=21&timestamp=1623987871&user_id=2125216559&ver=210301"},{"key":"shuqispbody2","val":"_public=skinId%3D999%26idfa%3D5944CD7C-11A1-47A9-B291-A6710EC9ED8E%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26umidtoken%3DYMqjs7gsZOQDAG12f5YGYF2K%26user_id%3D2125216559%26sn%3DF3034932BCFFFA932582D9A19EA6463FE76ADAAC%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D1EB833AC2923027D6C63AB33FE9BAA0A590879C3%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhoneXS%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYMqjs7gsZOQDAG12f5YGYF2K%26utype%3Dpre_vip%26sdk%3D13.3.1&deliveryId=525&key=sq_app_ad&miniWua=HHnB_V1ZYR1ivJXE/nvCZItCWnkkCKbID3gnVuVkQ/9ATIX0%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=626&sign=54232B7A4140A4319507FFDD842D57B3&timestamp=1623987902&userId=2125216559&user_id=2125216559&wua=HIVW_ZCIN5cLlKOXCPe3B9pvs65d0ZYcc1tHK4LKG4Izcx9y4OOTwjF2n/rueKZxUgDMR2uVtAY%2BwclrqEIq5Z00R/tX6U0Ziqh43dNpCZSkO97n66sxrA1Z4wnwP9soFwtPVPbAYxSC%2BEvTghbEIpvVJ4UTPZXA7bt%2BD2GELfqVLrI0fREhi4BPTl%2Bs0qzWAGQOV%2BMUNKW3AqTPZlA4mviegrcSamh/CcR5TmXf%2ByfAMeUA%3D"},{"key":"shuqiscbody2","val":"_public=utype%253Dpre_vip%2526idfa%253D5944CD7C-11A1-47A9-B291-A6710EC9ED8E%2526ustatus%253D0%2526first_placeid%253D111111%2526net_env%253Dwifi%2526umidtoken%253DYMqjs7gsZOQDAG12f5YGYF2K%2526user_id%253D2125216559%2526sn%253DF3034932BCFFFA932582D9A19EA6463FE76ADAAC%2526placeid%253D111111%2526msv%253D8.0.0%2526brand%253DApple%2526imei%253D1EB833AC2923027D6C63AB33FE9BAA0A590879C3%2526skinVersionPrefix%253D1%2526appVer%253D4.3.6.0%2526skinActiveColor%253D0F9970%2526manufacturer%253DApple%2526statusBarHeight%253D44.000000%2526skinColor%253D23B383%2526platform%253DiOS%2526ver%253D210301%2526mod%253DiPhoneXS%2526skinVersion%253D1%2526wh%253D1242x2688%2526skinId%253D999%2526utdid%253DYMqjs7gsZOQDAG12f5YGYF2K%2526soft_id%253D21%2526sdk%253D13.3.1&key=and_log&readingList=%5B%7B%22startTime%22%3A1623987838%2C%22readObjType%22%3A1%2C%22attr%22%3A2%2C%22readObjId%22%3A%228370018%22%2C%22readChapterId%22%3A1523305%2C%22readingLen%22%3A32%7D%5D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=83A888EC912DA95260F968683D52F8E8&timestamp=1623987871&user_id=2125216559"},{"key":"shuqiydbody2","val":"_public=utype%3Dpre_vip%26idfa%3D5944CD7C-11A1-47A9-B291-A6710EC9ED8E%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26umidtoken%3DYMqjs7gsZOQDAG12f5YGYF2K%26user_id%3D2125216559%26sn%3DF3034932BCFFFA932582D9A19EA6463FE76ADAAC%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D1EB833AC2923027D6C63AB33FE9BAA0A590879C3%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhoneXS%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26utdid%3DYMqjs7gsZOQDAG12f5YGYF2K%26soft_id%3D21%26sdk%3D13.3.1&deliveryId=707&key=sq_app_ad&miniWua=HHnB_3DheSeZxMZ%2BACsFRskPYJqpAIGsV7tEUcXwqq0xQDd0%3D&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=678&sign=E4BBE2217932027236D9C3A3C7AA987F&timestamp=1623987868&userId=2125216559&wua=HIVW_sg2SPZetiS8KDc1QdNW8gN9uG%2Be6nHHaTvirc4z/eMaWe0yYZwdfAp6zbslxzMjAhVswWGJQi/YZrHT0bw8wdxq0mxV7HCi9Ww%2BR91/tICWATMFcI7xPmfKAkVOZRzltf0cfsKHtW4PofQOxyXxr/9wNdg189IDwMf56fdINLyWRbWjnIMxULTd9yqNJoPFSA0ksswyJEi0QLTgeUc5sOPd099v16rTGOM1Zk2rp3s0%3D"},{"key":"shuqiqdbody2","val":"clientTimestamp=1623987879&position=501&userId=2125216559&signInType=1&wua=HIVW_YTf66KHcznUQeXcDjMkzfUyYu6hB9FgL9pRnScmQXsDxbiw0IS7N6udbmgb2HLnJhCqwj8BOJibNl1qkYQMGhxRyyocQRFD%2FPf%2B6yztTIo2TEzswtUIc7mBB9BvQ745%2FhQvcH9PiV%2BF0GBOsY%2FZipjztPclx04uoy5mlTV42LL2t66k86MH4vc1gqQBMhlce24zgxSUnkk4H3RFZkdDDANupExpTb8HYrzKc1cXw7%2F0%3D&ua=&miniWua=HHnB_xh3ps%2FwAGTGUDcjPc%2FWenqe45dvYh3PFzbK%2BvGpAgSs%3D&umidtoken=YMqjs7gsZOQDAG12f5YGYF2K&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&sign=3768df58f2cee2c2f1a96b9bd155ae92&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26sdk%3D13.3.1%26utdid%3DYMqjs7gsZOQDAG12f5YGYF2K%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2125216559%26sn%3DF3034932BCFFFA932582D9A19EA6463FE76ADAAC%26umidtoken%3DYMqjs7gsZOQDAG12f5YGYF2K%26msv%3D8.0.0%26brand%3DApple%26imei%3D1EB833AC2923027D6C63AB33FE9BAA0A590879C3%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhoneXS%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D5944CD7C-11A1-47A9-B291-A6710EC9ED8E"},{"key":"shuqirwbody2","val":""},{"key":"shuqifxbody2","val":""},{"key":"shuqisprwurl2","val":"https://ocean.shuqireader.com/api/ad/adserver/v1/api/getAdInfo?appVer=4.3.6.0&placeId=111111&platform=iOS&requestSrc=h5&resourceId=626&timestamp=1623987948&user_id=2125216559&sqSv=1.0&sign=6db070a196978bdff57061683b5ec425&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26sdk%3D13.3.1%26utdid%3DYMqjs7gsZOQDAG12f5YGYF2K%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2125216559%26sn%3DF3034932BCFFFA932582D9A19EA6463FE76ADAAC%26umidtoken%3DYMqjs7gsZOQDAG12f5YGYF2K%26msv%3D8.0.0%26brand%3DApple%26imei%3D1EB833AC2923027D6C63AB33FE9BAA0A590879C3%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhoneXS%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D5944CD7C-11A1-47A9-B291-A6710EC9ED8E"},{"key":"shuqijlbody2","val":"requestSrc=h5&userId=2125216559&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1623987908&sqSv=1.0&sign=3b6343719c58337318e181ae810e4658&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26sdk%3D13.3.1%26utdid%3DYMqjs7gsZOQDAG12f5YGYF2K%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2125216559%26sn%3DF3034932BCFFFA932582D9A19EA6463FE76ADAAC%26umidtoken%3DYMqjs7gsZOQDAG12f5YGYF2K%26msv%3D8.0.0%26brand%3DApple%26imei%3D1EB833AC2923027D6C63AB33FE9BAA0A590879C3%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhoneXS%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D5944CD7C-11A1-47A9-B291-A6710EC9ED8E"},{"key":"shuqisqjlbody2","val":"src=&userId=2125216559&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1623987892&sqSv=1.0&sign=ba258a1a60b46e5e2ab566eba86a7ee0&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26sdk%3D13.3.1%26utdid%3DYMqjs7gsZOQDAG12f5YGYF2K%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2125216559%26sn%3DF3034932BCFFFA932582D9A19EA6463FE76ADAAC%26umidtoken%3DYMqjs7gsZOQDAG12f5YGYF2K%26msv%3D8.0.0%26brand%3DApple%26imei%3D1EB833AC2923027D6C63AB33FE9BAA0A590879C3%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhoneXS%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D5944CD7C-11A1-47A9-B291-A6710EC9ED8E"},{"key":"shuqicjyurl2","val":"https://ocean.shuqireader.com/api/activity/activity/v1/lottery/info?timestamp=1623987952&userId=2125216559&activityId=311&sqSv=1.0&sign=88da5daf12d2076a745e3f9317cf92e0&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.3.1%26utdid%3DYMqjs7gsZOQDAG12f5YGYF2K%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2125216559%26sn%3DF3034932BCFFFA932582D9A19EA6463FE76ADAAC%26umidtoken%3DYMqjs7gsZOQDAG12f5YGYF2K%26msv%3D8.0.0%26brand%3DApple%26imei%3D1EB833AC2923027D6C63AB33FE9BAA0A590879C3%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhoneXS%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D5944CD7C-11A1-47A9-B291-A6710EC9ED8E"},{"key":"shuqicjcsbody2","val":"_public=skinId%3D999%26idfa%3D5944CD7C-11A1-47A9-B291-A6710EC9ED8E%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26umidtoken%3DYMqjs7gsZOQDAG12f5YGYF2K%26user_id%3D2125216559%26sn%3DF3034932BCFFFA932582D9A19EA6463FE76ADAAC%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D1EB833AC2923027D6C63AB33FE9BAA0A590879C3%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhoneXS%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYMqjs7gsZOQDAG12f5YGYF2K%26utype%3Dpre_vip%26sdk%3D13.3.1&deliveryId=711&key=sq_app_ad&miniWua=HHnB_UAz6nbGmXT4j5U90iCJJSxyRZDtzDOBJffSexjvi1L0%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=703&sign=6DE48E900AA1E59FE93C3590290F1E05&timestamp=1623987915&userId=2125216559&user_id=2125216559&wua=HIVW_ANDmXOyZ4ZkMCSz6XMdQBvXD9hmoVME2q6T6GLsMC3Es9qlE9Vyvrru8GaJQEnuA8ukrdsS9jLvVLQaZKWLoGeGtAAitKZh7yEL3StcE05Z9hGA5GSHncpwiSm0C98TvJ%2BjnQuDeTXo%2Bhd4yjKixXG94/n/UpO/stu6y8Gj81AbBTDz4O%2BXnri8Efl5WGudLm4kkyC0AuGdSUlyBTwXJFFII1g1dw1wElWUF4ZLLvXQ%3D"},{"key":"shuqicjbody2","val":"wua=HIVW_QM65UIx7azSeWO8U0JmRhpi0EdjRC%2B%2FiWE2wSEfpH7%2BK3X99BDwW5tgBJ1wG2yoXVVtRCvUJmI0e1xP5awdJ%2FCsGGqcXKNm5fRzfujqM4VZnJzFOgDCqolLIkIW1PumjtearsC2U3zV%2BL8fa%2BfEoYclVhAd1Sb1%2Bx3YQlJk0XKljKwsC%2B9RLH1r4qorraogjPk1%2FDBzssanFsBFM60M%2BECyKAi0XmlM0JiSEIh64MaA%3D&ua=&userId=2125216559&umidtoken=YMqjs7gsZOQDAG12f5YGYF2K&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&asac=2A20C07RJ9F51AOEFSNHDR&timestamp=1623987921&activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&sqSv=1.0&sign=11750ed71c1f33cbebe413114bb73000&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.3.1%26utdid%3DYMqjs7gsZOQDAG12f5YGYF2K%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2125216559%26sn%3DF3034932BCFFFA932582D9A19EA6463FE76ADAAC%26umidtoken%3DYMqjs7gsZOQDAG12f5YGYF2K%26msv%3D8.0.0%26brand%3DApple%26imei%3D1EB833AC2923027D6C63AB33FE9BAA0A590879C3%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhoneXS%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D5944CD7C-11A1-47A9-B291-A6710EC9ED8E"},{"key":"shuqijsspbody2","val":""},{"key":"shuqijsydurl2","val":""},{"key":"shuqijsydbody2","val":""},{"key":"shuqijsqdbody2","val":""},{"key":"shuqijsqdspyurl2","val":""},{"key":"shuqijsqdspbody2","val":""},{"key":"shuqijsrwbody2","val":""},{"key":"shuqijsfxbody2","val":""},{"key":"shuqijsbookurl2","val":""},{"key":"shuqijsbookbody2","val":""},{"key":"shuqijssprwurl2","val":""},{"key":"shuqiuserurl3","val":"https://ocean.shuqireader.com/api/jaccount/accountapi/v1/sapi/account/getBindinfo?userId=2125216547&sqSv=1.0&timestamp=1623988068&sign=5728dfe99ba2fb38aa5857ca99138e3b&key=sq_h5_gateway"},{"key":"shuqisyurl3","val":"https://render.shuqireader.com/load/resource?sdk=13.1&utdid=YMqjs7gsZOQDAG12f5YGYF2K&ustatus=0&first_placeid=111111&net_env=3g&placeid=111111&user_id=2125216547&sn=33812526D6276F052A6A3EF6899DA9F4067DEC31&umidtoken=YMqjs7gsZOQDAG12f5YGYF2K&msv=8.0.0&brand=Apple&imei=4FC24FC17528053551CA446A906A331FBD2F6A11&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=iOS&ver=210301&mod=iPhoneX&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=2F543E1E-800B-45FE-AAA0-E91F84B84931"},{"key":"shuqisybody3","val":"appVer=4.3.6.0&imei=4FC24FC17528053551CA446A906A331FBD2F6A11&isNewUser=1&params=%7B%22resources%22%3A%7B%22ShuqiVipEntry%22%3A%7B%7D%2C%22personalCardConfig%22%3A%7B%7D%7D%7D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=f40d190cd38178b7e441554f10bf767a&sn=33812526D6276F052A6A3EF6899DA9F4067DEC31&soft_id=21&timestamp=1623988001&user_id=2125216547&ver=210301"},{"key":"shuqispbody3","val":"_public=skinId%3D999%26idfa%3D2F543E1E-800B-45FE-AAA0-E91F84B84931%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26umidtoken%3DYMqjs7gsZOQDAG12f5YGYF2K%26user_id%3D2125216547%26sn%3D33812526D6276F052A6A3EF6899DA9F4067DEC31%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D4FC24FC17528053551CA446A906A331FBD2F6A11%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhoneX%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYMqjs7gsZOQDAG12f5YGYF2K%26utype%3Dpre_vip%26sdk%3D13.1&deliveryId=525&key=sq_app_ad&miniWua=HHnB_3oDTzbD%2B9CVuU%2B9VMPchoMSS8B4O3nFPJPDiHip%2BGD4%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=626&sign=F045B8537F1D7E317990241E7E753F8D&timestamp=1623988034&userId=2125216547&user_id=2125216547&wua=HIVW_lyG/uZSX6awrJEesxYQy2/6uOlRx0KxDRLd5MgjeWQzwl6tMyXbAtZ%2B5B8XxWMqosZW//e/ckDiL4cqzi7SjQHCLXDJRYe3QBAamtOeAIwXQOO8CRnWPeZYrvWLhzzRjJKV0rBV7yMBkJuqO4vUSLPC5pjS5nyPpgT60sZ6j7TAnWR/HRQzKmKeR09wT3VrZ4k1owDXpdd5jAIafacegZtBHyBgheEeSE1RiHfosLnM%3D"},{"key":"shuqiscbody3","val":"_public=utype%253Dpre_vip%2526idfa%253D2F543E1E-800B-45FE-AAA0-E91F84B84931%2526ustatus%253D0%2526first_placeid%253D111111%2526net_env%253D3g%2526umidtoken%253DYMqjs7gsZOQDAG12f5YGYF2K%2526user_id%253D2125216547%2526sn%253D33812526D6276F052A6A3EF6899DA9F4067DEC31%2526placeid%253D111111%2526msv%253D8.0.0%2526brand%253DApple%2526imei%253D4FC24FC17528053551CA446A906A331FBD2F6A11%2526skinVersionPrefix%253D1%2526appVer%253D4.3.6.0%2526skinActiveColor%253D0F9970%2526manufacturer%253DApple%2526statusBarHeight%253D44.000000%2526skinColor%253D23B383%2526platform%253DiOS%2526ver%253D210301%2526mod%253DiPhoneX%2526skinVersion%253D1%2526wh%253D1242x2688%2526skinId%253D999%2526utdid%253DYMqjs7gsZOQDAG12f5YGYF2K%2526soft_id%253D21%2526sdk%253D13.1&key=and_log&readingList=%5B%7B%22startTime%22%3A1623987966%2C%22readObjType%22%3A1%2C%22attr%22%3A2%2C%22readObjId%22%3A%228370018%22%2C%22readChapterId%22%3A1523305%2C%22readingLen%22%3A33%7D%5D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=31D0EF5ABE6533F2095C0555FFD195C0&timestamp=1623988000&user_id=2125216547"},{"key":"shuqiydbody3","val":"_public=utype%3Dpre_vip%26idfa%3D2F543E1E-800B-45FE-AAA0-E91F84B84931%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26umidtoken%3DYMqjs7gsZOQDAG12f5YGYF2K%26user_id%3D2125216547%26sn%3D33812526D6276F052A6A3EF6899DA9F4067DEC31%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D4FC24FC17528053551CA446A906A331FBD2F6A11%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhoneX%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26utdid%3DYMqjs7gsZOQDAG12f5YGYF2K%26soft_id%3D21%26sdk%3D13.1&deliveryId=707&key=sq_app_ad&miniWua=HHnB_l2vcBHLCoay885mo7FFfq2ArklVXhtSaZ8sK9AvdhEs%3D&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=678&sign=007BAC21C30C93FF8F9221A0DD497AEB&timestamp=1623987996&userId=2125216547&wua=HIVW_lyG/uZSX6awrJEesxYQy20hT6RzHre/VGzaAjB1xuJjATWR6wOj4qP5J00dKJwhwsMCCl7zWYC%2BS8rt%2B7MT18tLVo0FDId8u9dZNEW/qkBNXzcLqQpBQ63kC/ujybKOTQ5IxDoZiMLDG4bRPoTO2gDPHbA2/G495esCc7yHRxZtg0a0F7oRmbrBQg/8B2KJvHz%2B7JCZqON8a60V/uAnuBqUyNYOq5T8G/g3RRR5ANVE%3D"},{"key":"shuqiqdbody3","val":"clientTimestamp=1623988011&position=501&userId=2125216547&signInType=1&wua=HIVW_M0cGA0eD5V1kTi2%2BMI3RxrMdGv6clmnRw%2F1vD%2F3vZ3zHXf6ggDoR8%2BBxPF2%2FOk9AojCWF0R8KWD9Fzq4zs8UXXcTCqUwrA2lnVqJhAY3flJvSr5Y0NJdJXDLT3mu9SfA9yM1mCB6g9FeInx88JY0Bfb1o%2BTFgiiE7eMjzOONmc7sOBqp8UpoMuTIb70odoLhxww2WluoafsLVExRwLsvD%2FtQEWW2BM%2FoVl7iQPtvE5s%3D&ua=&miniWua=HHnB_IUKzzPov170EwKHc3cq9BGOY3BGwXY3uDwMmmnVk%2FAo%3D&umidtoken=YMqjs7gsZOQDAG12f5YGYF2K&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&sign=b0d9d7744b01f4e014cfb2d056c71150&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26sdk%3D13.1%26utdid%3DYMqjs7gsZOQDAG12f5YGYF2K%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2125216547%26sn%3D33812526D6276F052A6A3EF6899DA9F4067DEC31%26umidtoken%3DYMqjs7gsZOQDAG12f5YGYF2K%26msv%3D8.0.0%26brand%3DApple%26imei%3D4FC24FC17528053551CA446A906A331FBD2F6A11%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhoneX%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D2F543E1E-800B-45FE-AAA0-E91F84B84931"},{"key":"shuqirwbody3","val":""},{"key":"shuqifxbody3","val":""},{"key":"shuqisprwurl3","val":"https://ocean.shuqireader.com/api/ad/adserver/v1/api/getAdInfo?appVer=4.3.6.0&placeId=111111&platform=iOS&requestSrc=h5&resourceId=626&timestamp=1623988067&user_id=2125216547&sqSv=1.0&sign=a08833c16f0710a9e3ca2b7014e83553&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26sdk%3D13.1%26utdid%3DYMqjs7gsZOQDAG12f5YGYF2K%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2125216547%26sn%3D33812526D6276F052A6A3EF6899DA9F4067DEC31%26umidtoken%3DYMqjs7gsZOQDAG12f5YGYF2K%26msv%3D8.0.0%26brand%3DApple%26imei%3D4FC24FC17528053551CA446A906A331FBD2F6A11%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhoneX%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D2F543E1E-800B-45FE-AAA0-E91F84B84931"},{"key":"shuqijlbody3","val":"requestSrc=h5&userId=2125216547&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1623988037&sqSv=1.0&sign=4f78c51a8072f25ff9a483eb2260e0dd&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26sdk%3D13.1%26utdid%3DYMqjs7gsZOQDAG12f5YGYF2K%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2125216547%26sn%3D33812526D6276F052A6A3EF6899DA9F4067DEC31%26umidtoken%3DYMqjs7gsZOQDAG12f5YGYF2K%26msv%3D8.0.0%26brand%3DApple%26imei%3D4FC24FC17528053551CA446A906A331FBD2F6A11%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhoneX%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D2F543E1E-800B-45FE-AAA0-E91F84B84931"},{"key":"shuqisqjlbody3","val":"src=&userId=2125216547&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1623988014&sqSv=1.0&sign=048b791f7dd1f754e65c6a810d40ae6b&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26sdk%3D13.1%26utdid%3DYMqjs7gsZOQDAG12f5YGYF2K%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2125216547%26sn%3D33812526D6276F052A6A3EF6899DA9F4067DEC31%26umidtoken%3DYMqjs7gsZOQDAG12f5YGYF2K%26msv%3D8.0.0%26brand%3DApple%26imei%3D4FC24FC17528053551CA446A906A331FBD2F6A11%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhoneX%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D2F543E1E-800B-45FE-AAA0-E91F84B84931"},{"key":"shuqicjyurl3","val":"https://ocean.shuqireader.com/api/activity/activity/v1/lottery/info?timestamp=1623988068&userId=2125216547&activityId=311&sqSv=1.0&sign=1c7211ba51d5a8f595196c370aee54f2&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.1%26utdid%3DYMqjs7gsZOQDAG12f5YGYF2K%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2125216547%26sn%3D33812526D6276F052A6A3EF6899DA9F4067DEC31%26umidtoken%3DYMqjs7gsZOQDAG12f5YGYF2K%26msv%3D8.0.0%26brand%3DApple%26imei%3D4FC24FC17528053551CA446A906A331FBD2F6A11%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhoneX%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D2F543E1E-800B-45FE-AAA0-E91F84B84931"},{"key":"shuqicjcsbody3","val":"_public=skinId%3D999%26idfa%3D2F543E1E-800B-45FE-AAA0-E91F84B84931%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26umidtoken%3DYMqjs7gsZOQDAG12f5YGYF2K%26user_id%3D2125216547%26sn%3D33812526D6276F052A6A3EF6899DA9F4067DEC31%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D4FC24FC17528053551CA446A906A331FBD2F6A11%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhoneX%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYMqjs7gsZOQDAG12f5YGYF2K%26utype%3Dpre_vip%26sdk%3D13.1&deliveryId=711&key=sq_app_ad&miniWua=HHnB_6xPQL7%2BW1x8EJzKy5r5Fs8jHoK5hL7lhi0Xud70Y8LE%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=703&sign=C8926E814C8E9B0EE4E80E4C24C36E19&timestamp=1623988049&userId=2125216547&user_id=2125216547&wua=HIVW_gRLdyUTEgG/sRfmV9e/2eys7%2BaqHP1ju4mZEF5Rjy1I50L6iSho0EzWT%2Bj43mvDBoSN486tkiOnM47%2BeXxAtVmd7bGS5Lx8dLX/Smx3Ec6L7k/8DL5/Yzz5PiEZYBsnFkv8%2B3C82E4jAspWLc32q/eHVrAZ%2Btyu/D4KD3SB3Gh6dJofeMERkfPdFhxlUlEwiniAt2n7GCZBH4PmXle6uGg%3D%3D"},{"key":"shuqicjbody3","val":"wua=HIVW_HoDROsOGAYpWOLzDKK92U4c012DlTtsdUyEQeBg1L6uze4jeU%2FNxeEEXZHoLkblLCaH8VNdo%2Fzi8XaCsgGGDZa55yce2DxZ2%2FgyRXKzvSrU4Amcn90vlGQ1mwlsnWibVFtM%2BWbZKdJYY7IJkRZlOR3svBUoQ9LXw%2FQVlZv%2FJmUHMKH3CvLgi1rm1bpvpmYKh1NF6DMC78JhVMM3OyJmYILEV%2BCfqASo6EZ%2BdJ3mM1pM%3D&ua=&userId=2125216547&umidtoken=YMqjs7gsZOQDAG12f5YGYF2K&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&asac=2A20C07RJ9F51AOEFSNHDR&timestamp=1623988053&activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&sqSv=1.0&sign=a9335228e365cce269db17431039f930&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.1%26utdid%3DYMqjs7gsZOQDAG12f5YGYF2K%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2125216547%26sn%3D33812526D6276F052A6A3EF6899DA9F4067DEC31%26umidtoken%3DYMqjs7gsZOQDAG12f5YGYF2K%26msv%3D8.0.0%26brand%3DApple%26imei%3D4FC24FC17528053551CA446A906A331FBD2F6A11%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhoneX%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D2F543E1E-800B-45FE-AAA0-E91F84B84931"},{"key":"shuqijsspbody3","val":""},{"key":"shuqijsydurl3","val":""},{"key":"shuqijsydbody3","val":""},{"key":"shuqijsqdbody3","val":""},{"key":"shuqijsqdspyurl3","val":""},{"key":"shuqijsqdspbody3","val":""},{"key":"shuqijsrwbody3","val":""},{"key":"shuqijsfxbody3","val":""},{"key":"shuqijsbookurl3","val":""},{"key":"shuqijsbookbody3","val":""},{"key":"shuqijssprwurl3","val":""},{"key":"shuqiuserurl4","val":"https://ocean.shuqireader.com/api/jaccount/accountapi/v1/sapi/account/getBindinfo?userId=2128372993&sqSv=1.0&timestamp=1623988178&sign=ceeaf467fd086a52a45c513e903b7830&key=sq_h5_gateway"},{"key":"shuqisyurl4","val":"https://render.shuqireader.com/load/resource?sdk=13.2.2&utdid=YMqjs7gsZOQDAG12f5YGYF2K&ustatus=0&first_placeid=111111&net_env=wifi&placeid=111111&user_id=2128372993&sn=4419F0CF9CB47D6A935577EC5F180A17EFA17AA1&umidtoken=YMqjs7gsZOQDAG12f5YGYF2K&msv=8.0.0&brand=Apple&imei=B068BE298A46F1CA80E11831158F74A64F8DA6E1&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=iOS&ver=210301&mod=iPhone8&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=6C14278B-6FE8-4322-9810-70E092C4540D"},{"key":"shuqisybody4","val":"appVer=4.3.6.0&imei=B068BE298A46F1CA80E11831158F74A64F8DA6E1&isNewUser=1&params=%7B%22resources%22%3A%7B%22ShuqiVipEntry%22%3A%7B%7D%2C%22personalCardConfig%22%3A%7B%7D%7D%7D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=17e1fe3cf8feb3b3e42698dbaa8ebe9a&sn=4419F0CF9CB47D6A935577EC5F180A17EFA17AA1&soft_id=21&timestamp=1623988119&user_id=2128372993&ver=210301"},{"key":"shuqispbody4","val":"_public=skinId%3D999%26idfa%3D6C14278B-6FE8-4322-9810-70E092C4540D%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26umidtoken%3DYMqjs7gsZOQDAG12f5YGYF2K%26user_id%3D2128372993%26sn%3D4419F0CF9CB47D6A935577EC5F180A17EFA17AA1%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3DB068BE298A46F1CA80E11831158F74A64F8DA6E1%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhone8%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYMqjs7gsZOQDAG12f5YGYF2K%26utype%3Dpre_vip%26sdk%3D13.2.2&deliveryId=525&key=sq_app_ad&miniWua=HHnB_ovmwa4HLBJP9b4BBvcMiTSzOMRAmPtrH/2Y28FS5YMU%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=626&sign=AE208DDCBD9776AF604066AD5AC74FA1&timestamp=1623988137&userId=2128372993&user_id=2128372993&wua=HIVW_n09fb6jFi7CUqzpGYtpud%2B8q6OvAaIDCYv73FxBoue98JlbAtJL9BKVZ99dxWKrS18fINQm7p/l%2B9tbWuaurLLqqMjr6BK0Amy4BQSuJoOXVnmkvmTh5/X0G7BS/d9MybvGh%2BcDARU/TOrfc/QtXtoQ3fWzwZVpS1J65sygazBvNiVK4jsvn63/zxt1S1YHLr7Y6fCnwxQInLwKtB/QHXZdYwjmu6YpPmhqwFY2/eRk%3D"},{"key":"shuqiscbody4","val":"_public=utype%253Dpre_vip%2526idfa%253D6C14278B-6FE8-4322-9810-70E092C4540D%2526ustatus%253D0%2526first_placeid%253D111111%2526net_env%253Dwifi%2526umidtoken%253DYMqjs7gsZOQDAG12f5YGYF2K%2526user_id%253D2128372993%2526sn%253D4419F0CF9CB47D6A935577EC5F180A17EFA17AA1%2526placeid%253D111111%2526msv%253D8.0.0%2526brand%253DApple%2526imei%253DB068BE298A46F1CA80E11831158F74A64F8DA6E1%2526skinVersionPrefix%253D1%2526appVer%253D4.3.6.0%2526skinActiveColor%253D0F9970%2526manufacturer%253DApple%2526statusBarHeight%253D44.000000%2526skinColor%253D23B383%2526platform%253DiOS%2526ver%253D210301%2526mod%253DiPhone8%2526skinVersion%253D1%2526wh%253D1242x2688%2526skinId%253D999%2526utdid%253DYMqjs7gsZOQDAG12f5YGYF2K%2526soft_id%253D21%2526sdk%253D13.2.2&key=and_log&readingList=%5B%7B%22startTime%22%3A1623988085%2C%22readObjType%22%3A1%2C%22attr%22%3A2%2C%22readObjId%22%3A%228255483%22%2C%22readChapterId%22%3A1372348%2C%22readingLen%22%3A27%7D%5D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=6101F1DBA6DFF3C5FDB584DF8AD048D0&timestamp=1623988112&user_id=2128372993"},{"key":"shuqiydbody4","val":"_public=utype%3Dpre_vip%26idfa%3D6C14278B-6FE8-4322-9810-70E092C4540D%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26umidtoken%3DYMqjs7gsZOQDAG12f5YGYF2K%26user_id%3D2128372993%26sn%3D4419F0CF9CB47D6A935577EC5F180A17EFA17AA1%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3DB068BE298A46F1CA80E11831158F74A64F8DA6E1%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhone8%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26utdid%3DYMqjs7gsZOQDAG12f5YGYF2K%26soft_id%3D21%26sdk%3D13.2.2&deliveryId=707&key=sq_app_ad&miniWua=HHnB_yxOO241SA4D/%2B03oYkxVtrC/kwdESj1RPbHrevXrbfs%3D&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=678&sign=18B467BAFDB4AB2A5E503823D08E5AF3&timestamp=1623988115&userId=2128372993&wua=HIVW_ZGuJlo4ddYJpWEFC9r/Zn84U6sZ7nHIz4vnbIpFiFiEcffI5VF7t1EOW1/fPFpH%2B%2BW1EiGqTD3HSbyBfRheUtBuf7RqyQ7EabDY/bVDvAa04FAqv%2BXJTvpD3Yp9qV4qo3/qsjnv28ew8j/64qFdOduhSxy%2BMIVsNjOq4ipxxKWhKEBLc%2B97BslzxGBGH6yqH8EaRqUALySA3tA%2Bq0U2tWbMjRy1Rct7kKOWWYdwZFq0%3D"},{"key":"shuqiqdbody4","val":"clientTimestamp=1623988146&position=501&userId=2128372993&signInType=1&wua=HIVW_SseBvMalJoZBTQLzzicj%2BJCxak9AhlhWSf2LPj6cjf8V5UiSrRZiLYZzufh8yLlAD2256QnpJSAUQIptDbdhD%2BVa7asgmFQ4784nrSIN4leCfku%2FLnLCUQjdo13xHI%2Bdr7b5G4LRCN4deJlu1Ur4GRNxGVDNfcKpMh7U92hxPI0gsZo6xphA1cfBBUQgH0x5c0uqV6xAis6qg1kkmbC9NsW%2BOG6ulUSinkEwSpeGCxo%3D&ua=&miniWua=HHnB_5TtaaaboVODQKaH2BBjo9%2BXj6dr7UB4Gex6YHBI6X1k%3D&umidtoken=YMqjs7gsZOQDAG12f5YGYF2K&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&sign=2ea5be5f6b1cd3252a42c9fabaea12a6&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26sdk%3D13.2.2%26utdid%3DYMqjs7gsZOQDAG12f5YGYF2K%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2128372993%26sn%3D4419F0CF9CB47D6A935577EC5F180A17EFA17AA1%26umidtoken%3DYMqjs7gsZOQDAG12f5YGYF2K%26msv%3D8.0.0%26brand%3DApple%26imei%3DB068BE298A46F1CA80E11831158F74A64F8DA6E1%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone8%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D6C14278B-6FE8-4322-9810-70E092C4540D"},{"key":"shuqirwbody4","val":""},{"key":"shuqifxbody4","val":""},{"key":"shuqisprwurl4","val":"https://ocean.shuqireader.com/api/ad/adserver/v1/api/getAdInfo?appVer=4.3.6.0&placeId=111111&platform=iOS&requestSrc=h5&resourceId=626&timestamp=1623988178&user_id=2128372993&sqSv=1.0&sign=1521548740f292860fb9eb1330d80491&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.2.2%26utdid%3DYMqjs7gsZOQDAG12f5YGYF2K%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2128372993%26sn%3D4419F0CF9CB47D6A935577EC5F180A17EFA17AA1%26umidtoken%3DYMqjs7gsZOQDAG12f5YGYF2K%26msv%3D8.0.0%26brand%3DApple%26imei%3DB068BE298A46F1CA80E11831158F74A64F8DA6E1%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone8%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D6C14278B-6FE8-4322-9810-70E092C4540D"},{"key":"shuqijlbody4","val":"requestSrc=h5&userId=2128372993&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1623988148&sqSv=1.0&sign=cf2476f60be5c5f763793e1e72491879&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26sdk%3D13.2.2%26utdid%3DYMqjs7gsZOQDAG12f5YGYF2K%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2128372993%26sn%3D4419F0CF9CB47D6A935577EC5F180A17EFA17AA1%26umidtoken%3DYMqjs7gsZOQDAG12f5YGYF2K%26msv%3D8.0.0%26brand%3DApple%26imei%3DB068BE298A46F1CA80E11831158F74A64F8DA6E1%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone8%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D6C14278B-6FE8-4322-9810-70E092C4540D"},{"key":"shuqisqjlbody4","val":"src=&userId=2128372993&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1623988129&sqSv=1.0&sign=c1fcab693e2f8ab5980092da8dba5b5e&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26sdk%3D13.2.2%26utdid%3DYMqjs7gsZOQDAG12f5YGYF2K%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2128372993%26sn%3D4419F0CF9CB47D6A935577EC5F180A17EFA17AA1%26umidtoken%3DYMqjs7gsZOQDAG12f5YGYF2K%26msv%3D8.0.0%26brand%3DApple%26imei%3DB068BE298A46F1CA80E11831158F74A64F8DA6E1%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone8%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D6C14278B-6FE8-4322-9810-70E092C4540D"},{"key":"shuqicjyurl4","val":"https://ocean.shuqireader.com/api/activity/activity/v1/lottery/info?timestamp=1623988182&userId=2128372993&activityId=311&sqSv=1.0&sign=c91c7d6927f5edb5054a2cf66c4ffd91&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.2.2%26utdid%3DYMqjs7gsZOQDAG12f5YGYF2K%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2128372993%26sn%3D4419F0CF9CB47D6A935577EC5F180A17EFA17AA1%26umidtoken%3DYMqjs7gsZOQDAG12f5YGYF2K%26msv%3D8.0.0%26brand%3DApple%26imei%3DB068BE298A46F1CA80E11831158F74A64F8DA6E1%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone8%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D6C14278B-6FE8-4322-9810-70E092C4540D"},{"key":"shuqicjcsbody4","val":"_public=skinId%3D999%26idfa%3D6C14278B-6FE8-4322-9810-70E092C4540D%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26umidtoken%3DYMqjs7gsZOQDAG12f5YGYF2K%26user_id%3D2128372993%26sn%3D4419F0CF9CB47D6A935577EC5F180A17EFA17AA1%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3DB068BE298A46F1CA80E11831158F74A64F8DA6E1%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhone8%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYMqjs7gsZOQDAG12f5YGYF2K%26utype%3Dpre_vip%26sdk%3D13.2.2&deliveryId=711&key=sq_app_ad&miniWua=HHnB_111Gpwh4j98S/zY18rv4NpcE87AVqb7%2BMo2xfH1JfXY%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=703&sign=E9727AC851153C2B3EDB485F4D1CC8BC&timestamp=1623988153&userId=2128372993&user_id=2128372993&wua=HIVW_aErt1rqDugC%2B6SWgBcmd6UU0%2BiArlSI9TEd5SMdpftbecq5BBnnVdCKwOHMSZc8nX4/6lqxW1Hg5QR9NukbNkFb%2BDwCCGUp6/kEi8f9jTLnWqMwq9kcHTs2x%2BUSJNJGLKvjQU0Py7M6oS22kA/cpuZScInPRXJ8rvJH/QjPpnGjNCrBdll0jWmw6BDeNph4aXQWCG7kWfCGOPMy5uVXLTSLvGYR%2BtDC6oCXIq9Vsgno%3D"},{"key":"shuqicjbody4","val":"wua=HIVW_6I6S51lTK%2FUAlI6km9xek%2FCfYqiJi4HAcBmy%2FyN7DevQDcUqKy5U9eqkxRbGrr5uzcZgI3Z6%2FQi%2FUopsi6T2e6Gwbqbq56tPyTNEgX1CesTM54GUWr91RXcXP7yNGVtTi1dzvKZrZ9pRnibyZdNI4E%2FRaN%2B%2FhHI%2FLUZkLWFRxhHW41EQo7OtKZSz2uvuWEWUa21ySZe3naZShiPAM%2FSdPwgnMeQIZCVS0U0qp78khg0%3D&ua=&userId=2128372993&umidtoken=YMqjs7gsZOQDAG12f5YGYF2K&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&asac=2A20C07RJ9F51AOEFSNHDR&timestamp=1623988165&activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&sqSv=1.0&sign=4c3681bc66628e94b6d214aa256904a4&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.2.2%26utdid%3DYMqjs7gsZOQDAG12f5YGYF2K%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2128372993%26sn%3D4419F0CF9CB47D6A935577EC5F180A17EFA17AA1%26umidtoken%3DYMqjs7gsZOQDAG12f5YGYF2K%26msv%3D8.0.0%26brand%3DApple%26imei%3DB068BE298A46F1CA80E11831158F74A64F8DA6E1%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone8%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D6C14278B-6FE8-4322-9810-70E092C4540D"},{"key":"shuqijsspbody4","val":""},{"key":"shuqijsydurl4","val":""},{"key":"shuqijsydbody4","val":""},{"key":"shuqijsqdbody4","val":""},{"key":"shuqijsqdspyurl4","val":""},{"key":"shuqijsqdspbody4","val":""},{"key":"shuqijsrwbody4","val":""},{"key":"shuqijsfxbody4","val":""},{"key":"shuqijsbookurl4","val":""},{"key":"shuqijsbookbody4","val":""},{"key":"shuqijssprwurl4","val":""},{"key":"shuqiuserurl5","val":"https://ocean.shuqireader.com/api/jaccount/accountapi/v1/sapi/account/getBindinfo?userId=2126891675&sqSv=1.0&timestamp=1623988325&sign=e89a963d2b3c24c33e93f57a3d1ecf5e&key=sq_h5_gateway"},{"key":"shuqisyurl5","val":"https://render.shuqireader.com/load/resource?sdk=13.1.2&utdid=YMc2Cpvtm4sDABHEaNTYDIDA&ustatus=0&first_placeid=111111&net_env=4g&placeid=111111&user_id=2126891675&sn=D4CCCFE7A1E764751FC7B9E948219E49326B8CC8&umidtoken=YMc2Cpvtm4sDABHEaNTYDIDA&msv=8.0.0&brand=Apple&imei=46869FD8E7F2C4B7B2BF917A3B5F905BB6493EE7&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&session=&skinColor=23B383&platform=iOS&ver=210301&mod=iPad4G&statusBarHeight=44.000000&skinVersion=1&wh=1242x2688&soft_id=21&utype=pre_vip&skinId=999&idfa=58E3F5FB-02AC-4A7F-A931-77318E5A93F7"},{"key":"shuqisybody5","val":"appVer=4.3.6.0&imei=46869FD8E7F2C4B7B2BF917A3B5F905BB6493EE7&isNewUser=1&params=%7B%22resources%22%3A%7B%22ShuqiVipEntry%22%3A%7B%7D%2C%22personalCardConfig%22%3A%7B%7D%7D%7D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=e0e21b6c2bfcf2f1a02e511a26255a6a&sn=D4CCCFE7A1E764751FC7B9E948219E49326B8CC8&soft_id=21&timestamp=1623988265&user_id=2126891675&ver=210301"},{"key":"shuqispbody5","val":"_public=skinId%3D999%26idfa%3D58E3F5FB-02AC-4A7F-A931-77318E5A93F7%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26umidtoken%3DYMc2Cpvtm4sDABHEaNTYDIDA%26user_id%3D2126891675%26sn%3DD4CCCFE7A1E764751FC7B9E948219E49326B8CC8%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D46869FD8E7F2C4B7B2BF917A3B5F905BB6493EE7%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPad4G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYMc2Cpvtm4sDABHEaNTYDIDA%26utype%3Dpre_vip%26sdk%3D13.1.2&deliveryId=525&key=sq_app_ad&miniWua=HHnB_GIDK8NlPk8nsnvnwwVTg2XKKQWDAemdvtMD58M6pnS8%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=626&sign=17577A608D6ED96928C266C0C5A57772&timestamp=1623988280&userId=2126891675&user_id=2126891675&wua=HIVW_QYrifbNqCBm2GeFGfW98OczABT8nmjNw%2BWdqenpuhjXvDO1dxIxsP%2BfD0dNHypyJmszc0G%2BBvQqvH/EJfsc1xINs062cjskRLMO8FxkBhWFGbcIHuKUty3dSoZjpgUdJUK5UNO7oIh5qN/EYmQTDTcfR%2BZxKBIV6hvdsCrCAvmb6/o1w9OOtt/5P/6AgBHiNljelJM8VBVdPwqUoYAzz1sJ6kv2%2B3j80M%2Bqq7NykXzQ%3D"},{"key":"shuqiscbody5","val":"_public=skinId%253D999%2526idfa%253D58E3F5FB-02AC-4A7F-A931-77318E5A93F7%2526ustatus%253D0%2526first_placeid%253D111111%2526net_env%253D4g%2526umidtoken%253DYMc2Cpvtm4sDABHEaNTYDIDA%2526user_id%253D2126891675%2526sn%253DD4CCCFE7A1E764751FC7B9E948219E49326B8CC8%2526placeid%253D111111%2526msv%253D8.0.0%2526brand%253DApple%2526imei%253D46869FD8E7F2C4B7B2BF917A3B5F905BB6493EE7%2526skinVersionPrefix%253D1%2526appVer%253D4.3.6.0%2526skinActiveColor%253D0F9970%2526manufacturer%253DApple%2526skinColor%253D23B383%2526platform%253DiOS%2526ver%253D210301%2526mod%253DiPad4G%2526statusBarHeight%253D44.000000%2526skinVersion%253D1%2526wh%253D1242x2688%2526soft_id%253D21%2526utdid%253DYMc2Cpvtm4sDABHEaNTYDIDA%2526utype%253Dpre_vip%2526sdk%253D13.1.2&key=and_log&readingList=%5B%7B%22startTime%22%3A1623988232%2C%22readObjType%22%3A1%2C%22attr%22%3A2%2C%22readObjId%22%3A%228340007%22%2C%22readChapterId%22%3A1429858%2C%22readingLen%22%3A22%7D%5D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=4E59901E5A8BE8CF9F9D88926EEA06A2&timestamp=1623988255&user_id=2126891675"},{"key":"shuqiydbody5","val":"_public=skinId%3D999%26idfa%3D58E3F5FB-02AC-4A7F-A931-77318E5A93F7%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26umidtoken%3DYMc2Cpvtm4sDABHEaNTYDIDA%26user_id%3D2126891675%26sn%3DD4CCCFE7A1E764751FC7B9E948219E49326B8CC8%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D46869FD8E7F2C4B7B2BF917A3B5F905BB6493EE7%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPad4G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYMc2Cpvtm4sDABHEaNTYDIDA%26utype%3Dpre_vip%26sdk%3D13.1.2&deliveryId=707&key=sq_app_ad&miniWua=HHnB_IAIGuT41tglTwjo%2BmbmpSb9HSo2wNjZ9mqdS/C3kjaQ%3D&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=678&sign=A027947158245C3BDA5B83150AF0F7D6&timestamp=1623988237&userId=2126891675&wua=HIVW_WfvJek2j%2BPn16gA2p8eoNJFWH3JNsW49pxgX0CYDHFkCtXqw1Ay7lLDHcURN%2Bd/Jcboc7YouQZYSZgc6KHLFU4fRV9jFeEuB8Oc46dcnqJsc9zf9Ikdr%2BVjxz3hAaoLeaXuudvUx3XN21/jFvRME/hWkicYHsMnKUfM6zuJmA9A7gP3i5ednH9gaAb76Nth9EWz3abUpiL3VdLwCd8PTtV%2Bj6IM/iBHDqNlUIdjG28Y%3D"},{"key":"shuqiqdbody5","val":"clientTimestamp=1623988292&position=501&userId=2126891675&signInType=1&wua=HIVW_ZscxCmCkvBWgnexk4e0KStOGWDkvcF3u6vMrvXBhagj0hBneeRdOguKPTNS1Z8G72ndU%2Bh0pNefYyrNtAwgJA1AWNzM4TblvBpB1tM0PZs4%2Fdgvvve%2BEqr%2FlpbHzVOgIrDvqiB%2BjsVjLvjFZyJh4V0EnD%2BCekVL9Dip0U5n7ohZaeYhuVY%2Ft7u9XVnwUvWEsZgU7lIrh68UDImoh06NNuHuZ%2FhHtrxwaAnGzudb3620%3D&ua=&miniWua=HHnB_pnbMYMOJuBO4ge0I9dz7V6d3hN5aqpZbishUjzkCdY8%3D&umidtoken=YMc2Cpvtm4sDABHEaNTYDIDA&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&sign=b28a472f4862133757d50bb732e82214&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.1.2%26utdid%3DYMc2Cpvtm4sDABHEaNTYDIDA%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2126891675%26sn%3DD4CCCFE7A1E764751FC7B9E948219E49326B8CC8%26umidtoken%3DYMc2Cpvtm4sDABHEaNTYDIDA%26msv%3D8.0.0%26brand%3DApple%26imei%3D46869FD8E7F2C4B7B2BF917A3B5F905BB6493EE7%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad4G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D58E3F5FB-02AC-4A7F-A931-77318E5A93F7"},{"key":"shuqirwbody5","val":""},{"key":"shuqifxbody5","val":""},{"key":"shuqisprwurl5","val":"https://ocean.shuqireader.com/api/ad/adserver/v1/api/getAdInfo?appVer=4.3.6.0&placeId=111111&platform=iOS&requestSrc=h5&resourceId=626&timestamp=1623988323&user_id=2126891675&sqSv=1.0&sign=73ec85e7b63972979b73ef9a31733228&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.1.2%26utdid%3DYMc2Cpvtm4sDABHEaNTYDIDA%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2126891675%26sn%3DD4CCCFE7A1E764751FC7B9E948219E49326B8CC8%26umidtoken%3DYMc2Cpvtm4sDABHEaNTYDIDA%26msv%3D8.0.0%26brand%3DApple%26imei%3D46869FD8E7F2C4B7B2BF917A3B5F905BB6493EE7%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad4G%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D58E3F5FB-02AC-4A7F-A931-77318E5A93F7"},{"key":"shuqijlbody5","val":"requestSrc=h5&userId=2126891675&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1623988293&sqSv=1.0&sign=f24b03ef73e5d2f906bd438bcb3230b9&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.1.2%26utdid%3DYMc2Cpvtm4sDABHEaNTYDIDA%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2126891675%26sn%3DD4CCCFE7A1E764751FC7B9E948219E49326B8CC8%26umidtoken%3DYMc2Cpvtm4sDABHEaNTYDIDA%26msv%3D8.0.0%26brand%3DApple%26imei%3D46869FD8E7F2C4B7B2BF917A3B5F905BB6493EE7%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad4G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D58E3F5FB-02AC-4A7F-A931-77318E5A93F7"},{"key":"shuqisqjlbody5","val":"src=&userId=2126891675&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1623988276&sqSv=1.0&sign=223eb31960fca5622764e1aa2002a966&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.1.2%26utdid%3DYMc2Cpvtm4sDABHEaNTYDIDA%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2126891675%26sn%3DD4CCCFE7A1E764751FC7B9E948219E49326B8CC8%26umidtoken%3DYMc2Cpvtm4sDABHEaNTYDIDA%26msv%3D8.0.0%26brand%3DApple%26imei%3D46869FD8E7F2C4B7B2BF917A3B5F905BB6493EE7%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad4G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D58E3F5FB-02AC-4A7F-A931-77318E5A93F7"},{"key":"shuqicjyurl5","val":"https://ocean.shuqireader.com/api/activity/activity/v1/lottery/info?timestamp=1623988326&userId=2126891675&activityId=311&sqSv=1.0&sign=17ca5e2907d461be075b2032ddc45570&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.1.2%26utdid%3DYMc2Cpvtm4sDABHEaNTYDIDA%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2126891675%26sn%3DD4CCCFE7A1E764751FC7B9E948219E49326B8CC8%26umidtoken%3DYMc2Cpvtm4sDABHEaNTYDIDA%26msv%3D8.0.0%26brand%3DApple%26imei%3D46869FD8E7F2C4B7B2BF917A3B5F905BB6493EE7%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad4G%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D58E3F5FB-02AC-4A7F-A931-77318E5A93F7"},{"key":"shuqicjcsbody5","val":"_public=skinId%3D999%26idfa%3D58E3F5FB-02AC-4A7F-A931-77318E5A93F7%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26umidtoken%3DYMc2Cpvtm4sDABHEaNTYDIDA%26user_id%3D2126891675%26sn%3DD4CCCFE7A1E764751FC7B9E948219E49326B8CC8%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D46869FD8E7F2C4B7B2BF917A3B5F905BB6493EE7%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPad4G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYMc2Cpvtm4sDABHEaNTYDIDA%26utype%3Dpre_vip%26sdk%3D13.1.2&deliveryId=711&key=sq_app_ad&miniWua=HHnB_n6wVWgAtcwZN7WrdMJ6fHfMdc7lqsbGxNLngQFrShZA%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=703&sign=890B3BA9D9BC34A601B3E58DD9F992D5&timestamp=1623988305&userId=2126891675&user_id=2126891675&wua=HIVW_O1InSIknrGzdM1w2pimPGrz2Eotrvn144tVo6XgYidawGBdA9qUcv/xqbCgpByWemx/eSw6i4uyo%2BFMwYBsV7so%2B4tc0lPJg3Xsy0PQz5grhwG20NCU75QSMzEzuRVRZGue4WGERBCPOxtOmQrejP3jPnVV8EFlpJau7TEhrLCe4bo5wDS3YCvH7W6WND38x2hN%2BVexa4Ktww6sWpRtmfg%3D%3D"},{"key":"shuqicjbody5","val":"wua=HIVW_%2FvhMwBE47pbIya1%2BlMJ32HIpFMDPORV1kSQIMhoAJqkvG4uIAZQpiXE9XDdt3Zjgb3a24uP1vw6TLCkDB1sjC2SEwmbp6x9X18TTK0ACQaGrzZAUdYNkf2iF19%2FTO%2FlvBCFFM4bDLmPTqdVZhdEhPvdSrfPIMuZsV9X%2B3EAI94rUbNh3BezoUrEsEYjLHhB%2BdKEJzaU7QjE521dqXpUP0NzgcqPB0g51VN5h%2BnbsNpI%3D&ua=&userId=2126891675&umidtoken=YMc2Cpvtm4sDABHEaNTYDIDA&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&asac=2A20C07RJ9F51AOEFSNHDR&timestamp=1623988309&activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&sqSv=1.0&sign=5ae2be9e087e980ad332e50ccefd82b3&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26sdk%3D13.1.2%26utdid%3DYMc2Cpvtm4sDABHEaNTYDIDA%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2126891675%26sn%3DD4CCCFE7A1E764751FC7B9E948219E49326B8CC8%26umidtoken%3DYMc2Cpvtm4sDABHEaNTYDIDA%26msv%3D8.0.0%26brand%3DApple%26imei%3D46869FD8E7F2C4B7B2BF917A3B5F905BB6493EE7%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad4G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D58E3F5FB-02AC-4A7F-A931-77318E5A93F7"},{"key":"shuqijsspbody5","val":""},{"key":"shuqijsydurl5","val":""},{"key":"shuqijsydbody5","val":""},{"key":"shuqijsqdbody5","val":""},{"key":"shuqijsqdspyurl5","val":""},{"key":"shuqijsqdspbody5","val":""},{"key":"shuqijsrwbody5","val":""},{"key":"shuqijsfxbody5","val":""},{"key":"shuqijsbookurl5","val":""},{"key":"shuqijsbookbody5","val":""},{"key":"shuqijssprwurl5","val":""},{"key":"shuqiuserurl6","val":"https://ocean.shuqireader.com/api/jaccount/accountapi/v1/sapi/account/getBindinfo?userId=2124818845&sqSv=1.0&timestamp=1623988465&sign=17b3e578a7a37ae29c7feb68e711dc6c&key=sq_h5_gateway"},{"key":"shuqisyurl6","val":"https://render.shuqireader.com/load/resource?sdk=13.1&utdid=YMc2Ga%2B6sWIDADTCbwoCfnHd&ustatus=0&first_placeid=111111&net_env=3g&placeid=111111&user_id=2124818845&sn=20DDDF28C7F66A83536BA373C65F3CE395AFC93B&umidtoken=YMc2Ga%2B6sWIDADTCbwoCfnHd&msv=8.0.0&brand=Apple&imei=B0CAF3590ED120875841926986215AFC64652F0E&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=iOS&ver=210301&mod=iPhoneXR&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=BA92D3C6-DF5B-4066-9ADC-52BCFB03E48C"},{"key":"shuqisybody6","val":"appVer=4.3.6.0&imei=B0CAF3590ED120875841926986215AFC64652F0E&isNewUser=1&params=%7B%22resources%22%3A%7B%22ShuqiVipEntry%22%3A%7B%7D%2C%22personalCardConfig%22%3A%7B%7D%7D%7D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=22805774a3ca34d97ffc69d0005c9a4b&sn=20DDDF28C7F66A83536BA373C65F3CE395AFC93B&soft_id=21&timestamp=1623988343&user_id=2124818845&ver=210301"},{"key":"shuqispbody6","val":"_public=skinId%3D999%26idfa%3DBA92D3C6-DF5B-4066-9ADC-52BCFB03E48C%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26umidtoken%3DYMc2Ga%2B6sWIDADTCbwoCfnHd%26user_id%3D2124818845%26sn%3D20DDDF28C7F66A83536BA373C65F3CE395AFC93B%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3DB0CAF3590ED120875841926986215AFC64652F0E%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhoneXR%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYMc2Ga%2B6sWIDADTCbwoCfnHd%26utype%3Dpre_vip%26sdk%3D13.1&deliveryId=525&key=sq_app_ad&miniWua=HHnB_ZUdDB8RumwRksMLjdCrFN8Y4hzUaQxqstxRBhrsbqyU%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=626&sign=ADD8D659B93D141B457EC966AC11F7A1&timestamp=1623988428&userId=2124818845&user_id=2124818845&wua=HIVW_LefTKUaS4ARgb9iBBDh1XjCKkRmapXu4SGU7RMxJLoJ76npGJeuoTR6KiTd1z/ujE0W2gVujvEp5vs76%2BwCcTHQjv8mdHs0HEYJY3wgmlUVZTNFFdF1TIRtPdn99sTdleRe/O9akYYKGIyD6H02AEdyW65YIEb8XpMgLi6j0rIrlBg81Rm9usV9Y2h8wVQuj/diURmRD1g2dEbqBXkHht9/lfaM9Tse6nAH5N4E0VmE%3D"},{"key":"shuqiscbody6","val":"_public=skinId%253D999%2526idfa%253DBA92D3C6-DF5B-4066-9ADC-52BCFB03E48C%2526ustatus%253D0%2526first_placeid%253D111111%2526net_env%253D3g%2526umidtoken%253DYMc2Ga%252B6sWIDADTCbwoCfnHd%2526user_id%253D2124818845%2526sn%253D20DDDF28C7F66A83536BA373C65F3CE395AFC93B%2526placeid%253D111111%2526msv%253D8.0.0%2526brand%253DApple%2526imei%253DB0CAF3590ED120875841926986215AFC64652F0E%2526skinVersionPrefix%253D1%2526appVer%253D4.3.6.0%2526skinActiveColor%253D0F9970%2526manufacturer%253DApple%2526skinColor%253D23B383%2526platform%253DiOS%2526ver%253D210301%2526mod%253DiPhoneXR%2526statusBarHeight%253D44.000000%2526skinVersion%253D1%2526wh%253D1242x2688%2526soft_id%253D21%2526utdid%253DYMc2Ga%252B6sWIDADTCbwoCfnHd%2526utype%253Dpre_vip%2526sdk%253D13.1&key=and_log&readingList=%5B%7B%22startTime%22%3A1623988365%2C%22readObjType%22%3A1%2C%22attr%22%3A2%2C%22readObjId%22%3A%228340248%22%2C%22readChapterId%22%3A1469713%2C%22readingLen%22%3A32%7D%5D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=F9C640441912E6298063C62C6D637664&timestamp=1623988398&user_id=2124818845"},{"key":"shuqiydbody6","val":"_public=skinId%3D999%26idfa%3DBA92D3C6-DF5B-4066-9ADC-52BCFB03E48C%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26umidtoken%3DYMc2Ga%2B6sWIDADTCbwoCfnHd%26user_id%3D2124818845%26sn%3D20DDDF28C7F66A83536BA373C65F3CE395AFC93B%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3DB0CAF3590ED120875841926986215AFC64652F0E%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhoneXR%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYMc2Ga%2B6sWIDADTCbwoCfnHd%26utype%3Dpre_vip%26sdk%3D13.1&deliveryId=707&key=sq_app_ad&miniWua=HHnB_q5McCriqolXKXYiMD%2BOztbr7teQZ2/RA8feMeedN67k%3D&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=678&sign=286645626329F3A8041F3138F135FDDF&timestamp=1623988395&userId=2124818845&wua=HIVW_HzOvDVcH1vCGZ%2BI0GKpRjmJZBz8AF9H7ZvGXeU1zNC0Igr7uuwR4Gxig/JJCAhwxvuNOuCPvnweD%2Bzqc3YklJEwLqTxJetDprUCToLqxoYjrTAyvh1syASgxHGe8ZSl3xit4b0aQy/Vvrc/%2BDN3Pd%2B%2B44YbiviEZrPTu1GzCO0hD6hPOPq8aCc4ERoDpxCwNTRDlNDnirTgVrv7il6un95OsR8MMS4JV4d9p7h73s3Q%3D"},{"key":"shuqiqdbody6","val":"clientTimestamp=1623988426&position=501&userId=2124818845&signInType=1&wua=HIVW_RBEWtpit5xACe1hYyoAIxAunpB%2FowN1RAyUPZMk00OROUXp4xjCkgGilktMgHJDyUlwrgMIzRTxy6DDY%2FI4Xv4priRbiYxsnFom4c%2BsZWkkxFmMWixlR%2BJiQaBsTxRLsquoMuChEY8pf7s5yzeB0F3DEHOdncMPA7rjiRVzoQR9VoCtNvmRE1JMhi%2B82rj1J7QoXrhqWRex3%2B9cDOhuOH0WL%2BeP1HvzUryyMtsuaUew%3D&ua=&miniWua=HHnB_HKYn9QY5GUsp4J6ySfjvzNpmNTOiwTDwb5CxrM%2FmJ0g%3D&umidtoken=YMc2Ga%2B6sWIDADTCbwoCfnHd&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&sign=bc3787a2ae8320c3391799c67bffe840&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26sdk%3D13.1%26utdid%3DYMc2Ga%252B6sWIDADTCbwoCfnHd%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2124818845%26sn%3D20DDDF28C7F66A83536BA373C65F3CE395AFC93B%26umidtoken%3DYMc2Ga%252B6sWIDADTCbwoCfnHd%26msv%3D8.0.0%26brand%3DApple%26imei%3DB0CAF3590ED120875841926986215AFC64652F0E%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhoneXR%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DBA92D3C6-DF5B-4066-9ADC-52BCFB03E48C"},{"key":"shuqirwbody6","val":""},{"key":"shuqifxbody6","val":""},{"key":"shuqisprwurl6","val":"https://ocean.shuqireader.com/api/ad/adserver/v1/api/getAdInfo?appVer=4.3.6.0&placeId=111111&platform=iOS&requestSrc=h5&resourceId=626&timestamp=1623988465&user_id=2124818845&sqSv=1.0&sign=9962f0070866779a9a420f6ac3c57dda&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26sdk%3D13.1%26utdid%3DYMc2Ga%252B6sWIDADTCbwoCfnHd%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2124818845%26sn%3D20DDDF28C7F66A83536BA373C65F3CE395AFC93B%26umidtoken%3DYMc2Ga%252B6sWIDADTCbwoCfnHd%26msv%3D8.0.0%26brand%3DApple%26imei%3DB0CAF3590ED120875841926986215AFC64652F0E%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhoneXR%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DBA92D3C6-DF5B-4066-9ADC-52BCFB03E48C"},{"key":"shuqijlbody6","val":"requestSrc=h5&userId=2124818845&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1623988435&sqSv=1.0&sign=43109035cd96489eb478fe95f4d0f1cc&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26sdk%3D13.1%26utdid%3DYMc2Ga%252B6sWIDADTCbwoCfnHd%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2124818845%26sn%3D20DDDF28C7F66A83536BA373C65F3CE395AFC93B%26umidtoken%3DYMc2Ga%252B6sWIDADTCbwoCfnHd%26msv%3D8.0.0%26brand%3DApple%26imei%3DB0CAF3590ED120875841926986215AFC64652F0E%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhoneXR%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DBA92D3C6-DF5B-4066-9ADC-52BCFB03E48C"},{"key":"shuqisqjlbody6","val":"src=&userId=2124818845&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1623988405&sqSv=1.0&sign=812ecbe0d6ad8dad25c4ff039822c597&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26sdk%3D13.1%26utdid%3DYMc2Ga%252B6sWIDADTCbwoCfnHd%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2124818845%26sn%3D20DDDF28C7F66A83536BA373C65F3CE395AFC93B%26umidtoken%3DYMc2Ga%252B6sWIDADTCbwoCfnHd%26msv%3D8.0.0%26brand%3DApple%26imei%3DB0CAF3590ED120875841926986215AFC64652F0E%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhoneXR%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DBA92D3C6-DF5B-4066-9ADC-52BCFB03E48C"},{"key":"shuqicjyurl6","val":"https://ocean.shuqireader.com/api/activity/activity/v1/lottery/info?timestamp=1623988466&userId=2124818845&activityId=311&sqSv=1.0&sign=4086e042766ea1bca9ce9d713db9c155&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.1%26utdid%3DYMc2Ga%252B6sWIDADTCbwoCfnHd%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2124818845%26sn%3D20DDDF28C7F66A83536BA373C65F3CE395AFC93B%26umidtoken%3DYMc2Ga%252B6sWIDADTCbwoCfnHd%26msv%3D8.0.0%26brand%3DApple%26imei%3DB0CAF3590ED120875841926986215AFC64652F0E%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhoneXR%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DBA92D3C6-DF5B-4066-9ADC-52BCFB03E48C"},{"key":"shuqicjcsbody6","val":"_public=skinId%3D999%26idfa%3DBA92D3C6-DF5B-4066-9ADC-52BCFB03E48C%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26umidtoken%3DYMc2Ga%2B6sWIDADTCbwoCfnHd%26user_id%3D2124818845%26sn%3D20DDDF28C7F66A83536BA373C65F3CE395AFC93B%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3DB0CAF3590ED120875841926986215AFC64652F0E%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhoneXR%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYMc2Ga%2B6sWIDADTCbwoCfnHd%26utype%3Dpre_vip%26sdk%3D13.1&deliveryId=711&key=sq_app_ad&miniWua=HHnB_kRKrKabC0%2BO8dZHK6AhDMs7voXAE33FBfljDoTfgjm0%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=703&sign=359108792ECB829D238B8DFDA275C640&timestamp=1623988442&userId=2124818845&user_id=2124818845&wua=HIVW_0WmwlL6Q47PQrJcq4CpVhYynEMcieRkffrjEutn7uXtD0ZqL63oBc9ME5wJzWHqIwx3pniCIRGayWR55n01qI7Tjle8qWej5io3zXCHAvARVl3D9jlzlcLGtqX30OZpCR1IgN25F0UiaGgWD9V8y440LZgrjPMxLgsW2LSldJHUBb7Z%2BIgHkpGJCU8q9jndOhy1MiuDEfhDUQJAjq6oRrfQNpkjZrNXgQsKIUyoXl2M%3D"},{"key":"shuqicjbody6","val":"wua=HIVW_40yfetzPRIR9KgH6NSkx7JI1AFW%2FqfeYjMKUvNm3XIzTLqo5ihbEeOBfYh5NJwLzKUVCTirVNW55ERfc1PNmuGn5fj9UbCE1Me%2Fhil8O2sa5UHPM7kjjO2XgAav0e2ArGZT6ZRdqBSwx2luetXXnc9u6YyVBhKneB7nPca58Ct34mRSPaR2pnOhjKHGQKIlUWKZwBTcliOa3GN5NPPaFyACC2opfoKjm0FFG8oyB0N4%3D&ua=&userId=2124818845&umidtoken=YMc2Ga%2B6sWIDADTCbwoCfnHd&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&asac=2A20C07RJ9F51AOEFSNHDR&timestamp=1623988449&activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&sqSv=1.0&sign=e6fc5a63cc4492decb5cf4b099d56b31&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.1%26utdid%3DYMc2Ga%252B6sWIDADTCbwoCfnHd%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2124818845%26sn%3D20DDDF28C7F66A83536BA373C65F3CE395AFC93B%26umidtoken%3DYMc2Ga%252B6sWIDADTCbwoCfnHd%26msv%3D8.0.0%26brand%3DApple%26imei%3DB0CAF3590ED120875841926986215AFC64652F0E%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhoneXR%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DBA92D3C6-DF5B-4066-9ADC-52BCFB03E48C"},{"key":"shuqijsspbody6","val":""},{"key":"shuqijsydurl6","val":""},{"key":"shuqijsydbody6","val":""},{"key":"shuqijsqdbody6","val":""},{"key":"shuqijsqdspyurl6","val":""},{"key":"shuqijsqdspbody6","val":""},{"key":"shuqijsrwbody6","val":""},{"key":"shuqijsfxbody6","val":""},{"key":"shuqijsbookurl6","val":""},{"key":"shuqijsbookbody6","val":""},{"key":"shuqijssprwurl6","val":""},{"key":"shuqiuserurl7","val":"https://ocean.shuqireader.com/api/jaccount/accountapi/v1/sapi/account/getBindinfo?userId=2128572510&sqSv=1.0&timestamp=1623989022&sign=5a0509ad70c9a810c0d03bb67d75f3c9&key=sq_h5_gateway"},{"key":"shuqisyurl7","val":"https://render.shuqireader.com/load/resource?sdk=13.5.1&utdid=YMc2Ga%2B6sWIDADTCbwoCfnHd&ustatus=0&first_placeid=111111&net_env=wifi&placeid=111111&user_id=2128572510&sn=8405D8FF95AF97E9405B481D894814E44B9992D6&umidtoken=YMc2Ga%2B6sWIDADTCbwoCfnHd&msv=8.0.0&brand=Apple&imei=9FED9C8C406F76CA190108372C62B98CD87C6717&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=iOS&ver=210301&mod=iPad4G&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=465CF2A8-2C90-40FE-AD72-BB4F57BCE509"},{"key":"shuqisybody7","val":"appVer=4.3.6.0&imei=9FED9C8C406F76CA190108372C62B98CD87C6717&isNewUser=1&params=%7B%22resources%22%3A%7B%22ShuqiVipEntry%22%3A%7B%7D%2C%22personalCardConfig%22%3A%7B%7D%7D%7D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=745612e6f0cca0d1776a3ec3d10805bb&sn=8405D8FF95AF97E9405B481D894814E44B9992D6&soft_id=21&timestamp=1623988958&user_id=2128572510&ver=210301"},{"key":"shuqispbody7","val":"_public=utype%3Dpre_vip%26idfa%3D465CF2A8-2C90-40FE-AD72-BB4F57BCE509%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26umidtoken%3DYMc2Ga%2B6sWIDADTCbwoCfnHd%26user_id%3D2128572510%26sn%3D8405D8FF95AF97E9405B481D894814E44B9992D6%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D9FED9C8C406F76CA190108372C62B98CD87C6717%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPad4G%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26utdid%3DYMc2Ga%2B6sWIDADTCbwoCfnHd%26soft_id%3D21%26sdk%3D13.5.1&deliveryId=525&key=sq_app_ad&miniWua=HHnB_MY7m0rEbm70gWJMCbEa/L75lGXJ3Fi18OWD8JlPGENc%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=626&sign=4461C5968B7F8DEAA9D3E3ABA4B8DEFF&timestamp=1623988945&userId=2128572510&user_id=2128572510&wua=HIVW_9QAVPPPeM7MIk8r3NyeljEUUA1OSI2TSLCkcLBZy8VTa1bLQYLKvmBVgqGiT8B5UXVxQ9sjqdYhUIHcb7/Xd8fzsVEuxSih6RwPcF5aTpFzEqkts7enCn2MM7tXLd1gBIG8D77ItgM8DYcl8xGMInW8YAC/nvv25%2B1PtCOHwg7i80aPI0XqBgN3s0GC4uv4vhoh1/V9uSv1KXnVple%2BzqtVG8E2YAxJ6hJwyD0P1ROw%3D"},{"key":"shuqiscbody7","val":"_public=skinId%253D999%2526idfa%253D465CF2A8-2C90-40FE-AD72-BB4F57BCE509%2526ustatus%253D0%2526first_placeid%253D111111%2526net_env%253Dwifi%2526umidtoken%253DYMc2Ga%252B6sWIDADTCbwoCfnHd%2526user_id%253D2128572510%2526sn%253D8405D8FF95AF97E9405B481D894814E44B9992D6%2526placeid%253D111111%2526msv%253D8.0.0%2526brand%253DApple%2526imei%253D9FED9C8C406F76CA190108372C62B98CD87C6717%2526skinVersionPrefix%253D1%2526appVer%253D4.3.6.0%2526skinActiveColor%253D0F9970%2526manufacturer%253DApple%2526skinColor%253D23B383%2526platform%253DiOS%2526ver%253D210301%2526mod%253DiPad4G%2526statusBarHeight%253D44.000000%2526skinVersion%253D1%2526wh%253D1242x2688%2526soft_id%253D21%2526utdid%253DYMc2Ga%252B6sWIDADTCbwoCfnHd%2526utype%253Dpre_vip%2526sdk%253D13.5.1&key=and_log&readingList=%5B%7B%22startTime%22%3A1623988966%2C%22readObjType%22%3A1%2C%22attr%22%3A2%2C%22readObjId%22%3A%228340007%22%2C%22readChapterId%22%3A1429856%2C%22readingLen%22%3A25%7D%5D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=4B8E107D617B672EA3389E0FC1A184DB&timestamp=1623988991&user_id=2128572510"},{"key":"shuqiydbody7","val":"_public=skinId%3D999%26idfa%3D465CF2A8-2C90-40FE-AD72-BB4F57BCE509%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26umidtoken%3DYMc2Ga%2B6sWIDADTCbwoCfnHd%26user_id%3D2128572510%26sn%3D8405D8FF95AF97E9405B481D894814E44B9992D6%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D9FED9C8C406F76CA190108372C62B98CD87C6717%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPad4G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYMc2Ga%2B6sWIDADTCbwoCfnHd%26utype%3Dpre_vip%26sdk%3D13.5.1&deliveryId=707&key=sq_app_ad&miniWua=HHnB_PWyDVQ9zPgdzPyaoM%2BioOh%2BMGQkTH9RPqXvJbKs/wG4%3D&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=678&sign=1C8F09884145CB5FFBCCA3BC24C522EC&timestamp=1623988998&userId=2128572510&wua=HIVW_PXVOsqvYaqIKMhTvVNth4jFYcLPrOBYjXamjpXcQkdqtPSd3akmN82HC28VXfnvCDdyigpIaTvChCJjz23lFIueoP9f4UgI2MgZZBRrGlkfqaZbZQDCSbYL6qsDREHJ6te4WM4oNU46ixfFwqyTJhDdfW%2B3%2Bul5S7XKjnHypZ3S/xgHNrexhfkMxno6e76ipMdENMbQ4H7zpIBp7zc3fRmEcxJUp3YArcGz8NU1qzRU%3D"},{"key":"shuqiqdbody7","val":"clientTimestamp=1623988937&position=501&userId=2128572510&signInType=1&wua=HIVW_BTw5SJYnfbssUi%2FpFvYKXHTtFajJEbOT2LJ%2FQlsvfvfFKQiSZnzAsJxO7JXK9f8o7rVkOi7054aroaFjoL7e%2FNZIrSKqJVVUVbJIddfI3mS36lr4z6%2BKN6AFVDVvgfFTHulUAXWSEzTa%2BncUakciUx5uKQFCu1WUiOg2btg6SmP40juscyK5SuXqbkWH0JSqIviCrwVyY%2BZ0sBCwmK2TVwDsCQwB0ETYhZ7WOUv9JEc%3D&ua=&miniWua=HHnB_nDsMIvM5WgKqZpg4QpORgix0LHqvWTVX5JuAlrTGNJw%3D&umidtoken=YMc2Ga%2B6sWIDADTCbwoCfnHd&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&sign=323474df502dbf0945672ab510ef954c&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26sdk%3D13.5.1%26utdid%3DYMc2Ga%252B6sWIDADTCbwoCfnHd%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2128572510%26sn%3D8405D8FF95AF97E9405B481D894814E44B9992D6%26umidtoken%3DYMc2Ga%252B6sWIDADTCbwoCfnHd%26msv%3D8.0.0%26brand%3DApple%26imei%3D9FED9C8C406F76CA190108372C62B98CD87C6717%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad4G%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D465CF2A8-2C90-40FE-AD72-BB4F57BCE509"},{"key":"shuqirwbody7","val":""},{"key":"shuqifxbody7","val":""},{"key":"shuqisprwurl7","val":"https://ocean.shuqireader.com/api/ad/adserver/v1/api/getAdInfo?appVer=4.3.6.0&placeId=111111&platform=iOS&requestSrc=h5&resourceId=626&timestamp=1623989023&user_id=2128572510&sqSv=1.0&sign=48132b907fcca9c65bf5d03d9f843572&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26sdk%3D13.5.1%26utdid%3DYMc2Ga%252B6sWIDADTCbwoCfnHd%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2128572510%26sn%3D8405D8FF95AF97E9405B481D894814E44B9992D6%26umidtoken%3DYMc2Ga%252B6sWIDADTCbwoCfnHd%26msv%3D8.0.0%26brand%3DApple%26imei%3D9FED9C8C406F76CA190108372C62B98CD87C6717%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad4G%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D465CF2A8-2C90-40FE-AD72-BB4F57BCE509"},{"key":"shuqijlbody7","val":"requestSrc=h5&userId=2128572510&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1623989008&sqSv=1.0&sign=6142d559074ceff26beb0c212b535aef&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26sdk%3D13.5.1%26utdid%3DYMc2Ga%252B6sWIDADTCbwoCfnHd%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2128572510%26sn%3D8405D8FF95AF97E9405B481D894814E44B9992D6%26umidtoken%3DYMc2Ga%252B6sWIDADTCbwoCfnHd%26msv%3D8.0.0%26brand%3DApple%26imei%3D9FED9C8C406F76CA190108372C62B98CD87C6717%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad4G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D465CF2A8-2C90-40FE-AD72-BB4F57BCE509"},{"key":"shuqisqjlbody7","val":"src=&userId=2128572510&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1623989007&sqSv=1.0&sign=65bed0a2bfcbe0640f57d54e5594fb76&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26sdk%3D13.5.1%26utdid%3DYMc2Ga%252B6sWIDADTCbwoCfnHd%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2128572510%26sn%3D8405D8FF95AF97E9405B481D894814E44B9992D6%26umidtoken%3DYMc2Ga%252B6sWIDADTCbwoCfnHd%26msv%3D8.0.0%26brand%3DApple%26imei%3D9FED9C8C406F76CA190108372C62B98CD87C6717%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad4G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D465CF2A8-2C90-40FE-AD72-BB4F57BCE509"},{"key":"shuqicjyurl7","val":"https://ocean.shuqireader.com/api/activity/activity/v1/lottery/info?timestamp=1623989026&userId=2128572510&activityId=311&sqSv=1.0&sign=f11d7b915e5f47248c91c2b63b6adeb8&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.5.1%26utdid%3DYMc2Ga%252B6sWIDADTCbwoCfnHd%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2128572510%26sn%3D8405D8FF95AF97E9405B481D894814E44B9992D6%26umidtoken%3DYMc2Ga%252B6sWIDADTCbwoCfnHd%26msv%3D8.0.0%26brand%3DApple%26imei%3D9FED9C8C406F76CA190108372C62B98CD87C6717%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad4G%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D465CF2A8-2C90-40FE-AD72-BB4F57BCE509"},{"key":"shuqicjcsbody7","val":"_public=utype%3Dpre_vip%26idfa%3D465CF2A8-2C90-40FE-AD72-BB4F57BCE509%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26umidtoken%3DYMc2Ga%2B6sWIDADTCbwoCfnHd%26user_id%3D2128572510%26sn%3D8405D8FF95AF97E9405B481D894814E44B9992D6%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D9FED9C8C406F76CA190108372C62B98CD87C6717%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPad4G%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26utdid%3DYMc2Ga%2B6sWIDADTCbwoCfnHd%26soft_id%3D21%26sdk%3D13.5.1&deliveryId=711&key=sq_app_ad&miniWua=HHnB_ruSXWZJHi09JHbx/uvy7jTcAG%2BtZkn/CAajHmRO42tI%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=703&sign=58AB2735628273C892A5322CE97CA6E7&timestamp=1623988953&userId=2128572510&user_id=2128572510&wua=HIVW_vsOhMc5EYLiANmNVHU7qC4/MxwHQdJQs38kdpjhYmuwv/ZDCcFlUuW6bKnZ7bNwn238R5Ldbsj0%2BafsirolxaD7mq2rvDFlYGcdltoZNOKZUIO2jUFSAStvWS7hicokWQH720mxaPSzPdhBiJxVQfGY8IXH%2B5OzCWXrrAdAFxuaQuwQS2tsZMqNFc6iyBh5rqsPzUztgOsNK9Hf4pk8T%2BsqIIHtAJuSSJDFNBDZ5Kr4%3D"},{"key":"shuqicjbody7","val":"wua=HIVW_Ce97WdVHrp%2FPP198%2FMNpu8xFP3PsKpYQ%2FSkPGrL8xofr5j9dvhhSyq3WAPpv3UJOmNpdem9C60lZDzqY8Y2pZWjCHfq2LN%2FVG0dJ0MaxhoBjxuMpdhgNKalMEaQdwYpGiBssuXmpIsY330wXakhSqx%2Fl3Aa%2BQPzRlcgjnegB3JNnG%2F6hvanW%2B8NlZCJrYVmSBXZgirdQjHmJRiV1wRzC7udmgo2owSNAZZ%2FkageZC00%3D&ua=&userId=2128572510&umidtoken=YMc2Ga%2B6sWIDADTCbwoCfnHd&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&asac=2A20C07RJ9F51AOEFSNHDR&timestamp=1623988955&activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&sqSv=1.0&sign=86534708d534cb23e61f177a8436bc50&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.5.1%26utdid%3DYMc2Ga%252B6sWIDADTCbwoCfnHd%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2128572510%26sn%3D8405D8FF95AF97E9405B481D894814E44B9992D6%26umidtoken%3DYMc2Ga%252B6sWIDADTCbwoCfnHd%26msv%3D8.0.0%26brand%3DApple%26imei%3D9FED9C8C406F76CA190108372C62B98CD87C6717%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad4G%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D465CF2A8-2C90-40FE-AD72-BB4F57BCE509"},{"key":"shuqijsspbody7","val":""},{"key":"shuqijsydurl7","val":""},{"key":"shuqijsydbody7","val":""},{"key":"shuqijsqdbody7","val":""},{"key":"shuqijsqdspyurl7","val":""},{"key":"shuqijsqdspbody7","val":""},{"key":"shuqijsrwbody7","val":""},{"key":"shuqijsfxbody7","val":""},{"key":"shuqijsbookurl7","val":""},{"key":"shuqijsbookbody7","val":""},{"key":"shuqijssprwurl7","val":""},{"key":"shuqiuserurl8","val":"https://ocean.shuqireader.com/api/jaccount/accountapi/v1/sapi/account/getBindinfo?userId=2128273114&sqSv=1.0&timestamp=1623989125&sign=d63ffddc48844da15e9f623f52310d9d&key=sq_h5_gateway"},{"key":"shuqisyurl8","val":"https://render.shuqireader.com/load/resource?sdk=13.2&utdid=YMqjs7gsZOQDAG12f5YGYF2K&ustatus=0&first_placeid=111111&net_env=4g&placeid=111111&user_id=2128273114&sn=B3D6443B1875BEB9F8789D0CE1105A042C86BA78&umidtoken=YMqjs7gsZOQDAG12f5YGYF2K&msv=8.0.0&brand=Apple&imei=64CE5D9FD911474C5F14071664FED1FC81BADDE8&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=iOS&ver=210301&mod=iPhone8P&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=2FAC66AA-00C4-49DD-9B48-003D6100BF76"},{"key":"shuqisybody8","val":"appVer=4.3.6.0&imei=64CE5D9FD911474C5F14071664FED1FC81BADDE8&isNewUser=1&params=%7B%22resources%22%3A%7B%22ShuqiVipEntry%22%3A%7B%7D%2C%22personalCardConfig%22%3A%7B%7D%7D%7D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=ed7f3d115f4675f6aa9d910f12c4b106&sn=B3D6443B1875BEB9F8789D0CE1105A042C86BA78&soft_id=21&timestamp=1623989040&user_id=2128273114&ver=210301"},{"key":"shuqispbody8","val":"_public=skinId%3D999%26idfa%3D2FAC66AA-00C4-49DD-9B48-003D6100BF76%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26umidtoken%3DYMqjs7gsZOQDAG12f5YGYF2K%26user_id%3D2128273114%26sn%3DB3D6443B1875BEB9F8789D0CE1105A042C86BA78%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D64CE5D9FD911474C5F14071664FED1FC81BADDE8%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhone8P%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYMqjs7gsZOQDAG12f5YGYF2K%26utype%3Dpre_vip%26sdk%3D13.2&deliveryId=525&key=sq_app_ad&miniWua=HHnB_UDvceeJ3klfqsupXh/RMXKjOIVPOJxSsw3iSVBJTGeo%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=626&sign=5127F0EF2A2F96215FBEF8B2DD72F438&timestamp=1623989095&userId=2128273114&user_id=2128273114&wua=HIVW_LefTKUaS4ARgb9iBBDh1Xg9jvaRv9A%2B2c/5orbsyEh5fleO8GAFW5MYkL01evkiPtorKZlREUVn4CXOnImAbZyEPgX%2BsxMML7J8u/10RxoahVYlsoDGVUVMP0iKCeRPvZ0zq1vOu%2BA0%2BGp/4lCrXInM510Y/sUydiO3/yjGx4wp9G%2Bcd8kmwkWeAXGRGqLU/I%2B3ZUqImp41JdpPYq1VqZu6uWIFlAIoUI8VCbZrq16U%3D"},{"key":"shuqiscbody8","val":"_public=skinId%253D999%2526idfa%253D2FAC66AA-00C4-49DD-9B48-003D6100BF76%2526ustatus%253D0%2526first_placeid%253D111111%2526net_env%253D4g%2526umidtoken%253DYMqjs7gsZOQDAG12f5YGYF2K%2526user_id%253D2128273114%2526sn%253DB3D6443B1875BEB9F8789D0CE1105A042C86BA78%2526placeid%253D111111%2526msv%253D8.0.0%2526brand%253DApple%2526imei%253D64CE5D9FD911474C5F14071664FED1FC81BADDE8%2526skinVersionPrefix%253D1%2526appVer%253D4.3.6.0%2526skinActiveColor%253D0F9970%2526manufacturer%253DApple%2526skinColor%253D23B383%2526platform%253DiOS%2526ver%253D210301%2526mod%253DiPhone8P%2526statusBarHeight%253D44.000000%2526skinVersion%253D1%2526wh%253D1242x2688%2526soft_id%253D21%2526utdid%253DYMqjs7gsZOQDAG12f5YGYF2K%2526utype%253Dpre_vip%2526sdk%253D13.2&key=and_log&readingList=%5B%7B%22startTime%22%3A1623989043%2C%22readObjType%22%3A1%2C%22attr%22%3A2%2C%22readObjId%22%3A%228316008%22%2C%22readChapterId%22%3A1424318%2C%22readingLen%22%3A39%7D%5D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=F05C3A1205553802029C0BC6CE437FB0&timestamp=1623989083&user_id=2128273114"},{"key":"shuqiydbody8","val":"_public=skinId%3D999%26idfa%3D2FAC66AA-00C4-49DD-9B48-003D6100BF76%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26umidtoken%3DYMqjs7gsZOQDAG12f5YGYF2K%26user_id%3D2128273114%26sn%3DB3D6443B1875BEB9F8789D0CE1105A042C86BA78%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D64CE5D9FD911474C5F14071664FED1FC81BADDE8%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhone8P%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYMqjs7gsZOQDAG12f5YGYF2K%26utype%3Dpre_vip%26sdk%3D13.2&deliveryId=707&key=sq_app_ad&miniWua=HHnB_%2B9RQoPL5vDgv/H2GJ47Ev0kZqVSfxNj1dCmEhkKV/jM%3D&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=678&sign=1BC9694B275286C6913C9ED53C2CB1AF&timestamp=1623989076&userId=2128273114&wua=HIVW_0ot6j0fD098BVUuSp/7NFjDEpgMiqmMe7euqmFPBl26YvqjvautgOMbyJ2ckl3Z7q%2B0CMMqMc8bgDiiu3eI//n58Fr35K6ECHRNLxO/gA0BrMX/H0BHLpzExv7A7MJD4FcyofdRkdTTdGwNr0v6ttAEzIoclUOa1/%2ByDJ0YI4VUYk2ly2x6QTduNv8%2BextCKHxknRND3IzbYOKwWUdkgcVvqqRUxoqMtX9BVtGMu3yg%3D"},{"key":"shuqiqdbody8","val":"clientTimestamp=1623989089&position=501&userId=2128273114&signInType=1&wua=HIVW_FO7lrzioOluEp1Gy8COttwQm4nkrTD%2BdJ%2BmaemdD0vxwFluWaA5uLlVg5VUErMXjqAFDY9pFwKB%2BgXYoZ6RA6uwhkrsl7aiHxzFwnrSS0%2F0PkipEX%2BcZB%2BfKgs20xvdKTdR1xl2TD1BwBLDqbR5ac8p8BBlp2Nyh1kj2Yy7MgB6qmSFbpqpuYeFlnFtU3evW6pXlyL8SZFpIHkCIXT76OT%2BgrpoDBVcgqdDrEA4LwFU%3D&ua=&miniWua=HHnB_1vQXCM%2Fqbe6SFuptsHIieVFJ2RIopgVzK04YvHnx344%3D&umidtoken=YMqjs7gsZOQDAG12f5YGYF2K&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&sign=debdc5e141d07a1314e76908de8c48c7&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26sdk%3D13.2%26utdid%3DYMqjs7gsZOQDAG12f5YGYF2K%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2128273114%26sn%3DB3D6443B1875BEB9F8789D0CE1105A042C86BA78%26umidtoken%3DYMqjs7gsZOQDAG12f5YGYF2K%26msv%3D8.0.0%26brand%3DApple%26imei%3D64CE5D9FD911474C5F14071664FED1FC81BADDE8%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone8P%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D2FAC66AA-00C4-49DD-9B48-003D6100BF76"},{"key":"shuqirwbody8","val":""},{"key":"shuqifxbody8","val":""},{"key":"shuqisprwurl8","val":"https://ocean.shuqireader.com/api/ad/adserver/v1/api/getAdInfo?appVer=4.3.6.0&placeId=111111&platform=iOS&requestSrc=h5&resourceId=626&timestamp=1623989126&user_id=2128273114&sqSv=1.0&sign=273106de77ae8fa052548a330ead9d73&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26sdk%3D13.2%26utdid%3DYMqjs7gsZOQDAG12f5YGYF2K%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2128273114%26sn%3DB3D6443B1875BEB9F8789D0CE1105A042C86BA78%26umidtoken%3DYMqjs7gsZOQDAG12f5YGYF2K%26msv%3D8.0.0%26brand%3DApple%26imei%3D64CE5D9FD911474C5F14071664FED1FC81BADDE8%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone8P%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D2FAC66AA-00C4-49DD-9B48-003D6100BF76"},{"key":"shuqijlbody8","val":"requestSrc=h5&userId=2128273114&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1623989101&sqSv=1.0&sign=cd6cf79e05891be0d56a4918c799365b&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26sdk%3D13.2%26utdid%3DYMqjs7gsZOQDAG12f5YGYF2K%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2128273114%26sn%3DB3D6443B1875BEB9F8789D0CE1105A042C86BA78%26umidtoken%3DYMqjs7gsZOQDAG12f5YGYF2K%26msv%3D8.0.0%26brand%3DApple%26imei%3D64CE5D9FD911474C5F14071664FED1FC81BADDE8%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone8P%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D2FAC66AA-00C4-49DD-9B48-003D6100BF76"},{"key":"shuqisqjlbody8","val":"src=&userId=2128273114&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1623989092&sqSv=1.0&sign=cf23cf9bb80a65caafe04796762f1058&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26sdk%3D13.2%26utdid%3DYMqjs7gsZOQDAG12f5YGYF2K%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2128273114%26sn%3DB3D6443B1875BEB9F8789D0CE1105A042C86BA78%26umidtoken%3DYMqjs7gsZOQDAG12f5YGYF2K%26msv%3D8.0.0%26brand%3DApple%26imei%3D64CE5D9FD911474C5F14071664FED1FC81BADDE8%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone8P%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D2FAC66AA-00C4-49DD-9B48-003D6100BF76"},{"key":"shuqicjyurl8","val":"https://ocean.shuqireader.com/api/activity/activity/v1/lottery/info?timestamp=1623989128&userId=2128273114&activityId=311&sqSv=1.0&sign=36c1b8a2237df58b80c106267f6eed99&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.2%26utdid%3DYMqjs7gsZOQDAG12f5YGYF2K%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2128273114%26sn%3DB3D6443B1875BEB9F8789D0CE1105A042C86BA78%26umidtoken%3DYMqjs7gsZOQDAG12f5YGYF2K%26msv%3D8.0.0%26brand%3DApple%26imei%3D64CE5D9FD911474C5F14071664FED1FC81BADDE8%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone8P%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D2FAC66AA-00C4-49DD-9B48-003D6100BF76"},{"key":"shuqicjcsbody8","val":"_public=skinId%3D999%26idfa%3D2FAC66AA-00C4-49DD-9B48-003D6100BF76%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26umidtoken%3DYMqjs7gsZOQDAG12f5YGYF2K%26user_id%3D2128273114%26sn%3DB3D6443B1875BEB9F8789D0CE1105A042C86BA78%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D64CE5D9FD911474C5F14071664FED1FC81BADDE8%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhone8P%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYMqjs7gsZOQDAG12f5YGYF2K%26utype%3Dpre_vip%26sdk%3D13.2&deliveryId=711&key=sq_app_ad&miniWua=HHnB_x/gl7FJyX7yGWL3ARMIU26sfn6atE2YRRy5mSbeLLGg%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=703&sign=EA7C70BE7754AC1342BC36170778D419&timestamp=1623989107&userId=2128273114&user_id=2128273114&wua=HIVW_VggT1AZU/X%2B8CyEdiiYQdhTK2aHR1Fv/4oGZ7qSwNcEbjUPnF95z3K43aL7uGTjk4QPPLraYVIXrMAeHtHwLpZtBFIBvFnLZWgpvSHx/edvDs2Fw9sfNPIZoQARLAW13JtNk7wkWVz2pFmLEg4aIOvf1QDPf3vKyDBz6TbpHSULphk2bsVNVllWrNHGWtk/ArQ6ow9tfY/ngmGJMiz4/CWOLWmlx2Sha0br2SfQSpZY%3D"},{"key":"shuqicjbody8","val":"wua=HIVW_qFi%2Fgak%2B%2BXovFhVblRXm%2BsIa%2BmfbieoTwOkGCxgmb5w4vcbbMktNoe5wUgpM5fPmI4o3gtRV0kZ3FJqdQfF0sgQlaHLIjAGPAgTcTtLjD9g5gLdwHX%2B%2BlYXqV0nv5u24l2NCRP%2FrZ8Oj27n1vmNyq6OQG%2BZsi3x6EWNRGaZB25U%2BxBscjYhWglIOG3cMSroe3Oy3cgl3mwHYGxUACPqozlbW5IoOIir4K7YypLHllOM%3D&ua=&userId=2128273114&umidtoken=YMqjs7gsZOQDAG12f5YGYF2K&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&asac=2A20C07RJ9F51AOEFSNHDR&timestamp=1623989114&activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&sqSv=1.0&sign=377628f74762395a5245fb50c80a3f13&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.2%26utdid%3DYMqjs7gsZOQDAG12f5YGYF2K%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2128273114%26sn%3DB3D6443B1875BEB9F8789D0CE1105A042C86BA78%26umidtoken%3DYMqjs7gsZOQDAG12f5YGYF2K%26msv%3D8.0.0%26brand%3DApple%26imei%3D64CE5D9FD911474C5F14071664FED1FC81BADDE8%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone8P%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D2FAC66AA-00C4-49DD-9B48-003D6100BF76"},{"key":"shuqijsspbody8","val":""},{"key":"shuqijsydurl8","val":""},{"key":"shuqijsydbody8","val":""},{"key":"shuqijsqdbody8","val":""},{"key":"shuqijsqdspyurl8","val":""},{"key":"shuqijsqdspbody8","val":""},{"key":"shuqijsrwbody8","val":""},{"key":"shuqijsfxbody8","val":""},{"key":"shuqijsbookurl8","val":""},{"key":"shuqijsbookbody8","val":""},{"key":"shuqijssprwurl8","val":""},{"key":"shuqiuserurl9","val":"https://ocean.shuqireader.com/api/jaccount/accountapi/v1/sapi/account/getBindinfo?userId=2126245290&sqSv=1.0&timestamp=1623989253&sign=71af2dcde136e886dd2ef6dca854059f&key=sq_h5_gateway"},{"key":"shuqisyurl9","val":"https://render.shuqireader.com/load/resource?sdk=13.5&utdid=YMqjs7gsZOQDAG12f5YGYF2K&ustatus=0&first_placeid=111111&net_env=4g&placeid=111111&user_id=2126245290&sn=295C32D92E2CEBB36D8D3C09B99B59C59FECC225&umidtoken=YMqjs7gsZOQDAG12f5YGYF2K&msv=8.0.0&brand=Apple&imei=63EBDFE27B0AC307EBC8E6977E8A177C3366AF90&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=iOS&ver=210301&mod=UnknowniPad&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=60C19B2B-8DFF-4581-9EEB-91C40358088F"},{"key":"shuqisybody9","val":"appVer=4.3.6.0&imei=63EBDFE27B0AC307EBC8E6977E8A177C3366AF90&isNewUser=1&params=%7B%22resources%22%3A%7B%22ShuqiVipEntry%22%3A%7B%7D%2C%22personalCardConfig%22%3A%7B%7D%7D%7D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=823c7133fe84049494daea350af1c872&sn=295C32D92E2CEBB36D8D3C09B99B59C59FECC225&soft_id=21&timestamp=1623989144&user_id=2126245290&ver=210301"},{"key":"shuqispbody9","val":"_public=skinId%3D999%26idfa%3D60C19B2B-8DFF-4581-9EEB-91C40358088F%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26umidtoken%3DYMqjs7gsZOQDAG12f5YGYF2K%26user_id%3D2126245290%26sn%3D295C32D92E2CEBB36D8D3C09B99B59C59FECC225%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D63EBDFE27B0AC307EBC8E6977E8A177C3366AF90%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYMqjs7gsZOQDAG12f5YGYF2K%26utype%3Dpre_vip%26sdk%3D13.5&deliveryId=525&key=sq_app_ad&miniWua=HHnB_dRzQTXix%2BJz/NY%2B5xAPNbVFN7Y9ZSE6LqA/MLgL0zIQ%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=626&sign=0D586C15B3B257CDF1D179056069124C&timestamp=1623989220&userId=2126245290&user_id=2126245290&wua=HIVW_ik8uYHfz6IRwvqHlDMQrhRP2%2B84OTd42PJvFW/u82xBhH1jaHzTVAFIGi%2BOiYolIKc/fYtAgyiRA8fr4kTRT9WvXor6AS6A%2B3MrEHSae3pAeKr/5u/twqI8I1rxcOEv3HrvMVF1SJX95kAbd6dNrJFJezEUaJ3Pa1z2Zyhb64yfpXQEPd5B5D1yRtIEx3LT/ZzjiwPGIw8/QJtS9J62KS7uPkP8ijoeyIq5tj3BnmN0%3D"},{"key":"shuqiscbody9","val":"_public=skinId%253D999%2526idfa%253D60C19B2B-8DFF-4581-9EEB-91C40358088F%2526ustatus%253D0%2526first_placeid%253D111111%2526net_env%253D4g%2526umidtoken%253DYMqjs7gsZOQDAG12f5YGYF2K%2526user_id%253D2126245290%2526sn%253D295C32D92E2CEBB36D8D3C09B99B59C59FECC225%2526placeid%253D111111%2526msv%253D8.0.0%2526brand%253DApple%2526imei%253D63EBDFE27B0AC307EBC8E6977E8A177C3366AF90%2526skinVersionPrefix%253D1%2526appVer%253D4.3.6.0%2526skinActiveColor%253D0F9970%2526manufacturer%253DApple%2526skinColor%253D23B383%2526platform%253DiOS%2526ver%253D210301%2526mod%253DUnknowniPad%2526statusBarHeight%253D44.000000%2526skinVersion%253D1%2526wh%253D1242x2688%2526soft_id%253D21%2526utdid%253DYMqjs7gsZOQDAG12f5YGYF2K%2526utype%253Dpre_vip%2526sdk%253D13.5&key=and_log&readingList=%5B%7B%22startTime%22%3A1623989147%2C%22readObjType%22%3A1%2C%22attr%22%3A2%2C%22readObjId%22%3A%227504095%22%2C%22readChapterId%22%3A961917%2C%22readingLen%22%3A30%7D%5D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=9786922606E1360202210541AA901E3A&timestamp=1623989177&user_id=2126245290"},{"key":"shuqiydbody9","val":"_public=skinId%3D999%26idfa%3D60C19B2B-8DFF-4581-9EEB-91C40358088F%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26umidtoken%3DYMqjs7gsZOQDAG12f5YGYF2K%26user_id%3D2126245290%26sn%3D295C32D92E2CEBB36D8D3C09B99B59C59FECC225%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D63EBDFE27B0AC307EBC8E6977E8A177C3366AF90%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYMqjs7gsZOQDAG12f5YGYF2K%26utype%3Dpre_vip%26sdk%3D13.5&deliveryId=707&key=sq_app_ad&miniWua=HHnB_DYZWnKkDHMVz7KgEej/v0GHvz9X2XodU4qWkw7JNlh8%3D&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=678&sign=4E1AC56B81C4A8F1D33A825AEF5CDA3A&timestamp=1623989181&userId=2126245290&wua=HIVW_OwoNZdnIjsYliPYflf8YZRGNVOv3d7wbt2GHXZSpdGEToQZIdbuUmsiSznbiiFFi%2BhWz5ZwmbKUfx35DVMcE9eXojby4VC0P%2BvEJDhxDScvS55JcAMMU1KREas2EhkdKlfAXLLytoRxJDcrdpTZPFKykqcrQwcjDcszsW7HRV%2BgGLLkzERgQk04xanMG2VCgpr6xZ8v8ondDsKWTKrcn%2Bumi52vlgSZOzmT7%2BrFK48w%3D"},{"key":"shuqiqdbody9","val":"clientTimestamp=1623989215&position=501&userId=2126245290&signInType=1&wua=HIVW_Odp3C2KuIYDmfzP7mZXck%2F0ghRHuBbghP9J%2BoDaBps5FW7PGZbKPsRPmR%2BqiU%2F2VWQ%2Fc4JWWSBDLP3pWt%2Bu3NcNZbsMn1YddhsjvRqY18NWqajXyncDoG%2F8q15UZX%2B86wcQTjN%2FvagRj15zv98M9bhxqfupfbJ2ivy73VPu0v1fYUUu35CpmUcMbeENh46akPX%2BXqXVwj%2BOzunosahC7UnXbkzB%2B7kjiuWWG7OR3ovs%3D&ua=&miniWua=HHnB_Lhqsb5K8qKWb%2BaJ%2Fs%2BjgUzR2gtenxSlODWIbXs1Y1%2Fs%3D&umidtoken=YMqjs7gsZOQDAG12f5YGYF2K&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&sign=6000a0e9d2e35437c3925c7619978350&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26sdk%3D13.5%26utdid%3DYMqjs7gsZOQDAG12f5YGYF2K%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2126245290%26sn%3D295C32D92E2CEBB36D8D3C09B99B59C59FECC225%26umidtoken%3DYMqjs7gsZOQDAG12f5YGYF2K%26msv%3D8.0.0%26brand%3DApple%26imei%3D63EBDFE27B0AC307EBC8E6977E8A177C3366AF90%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D60C19B2B-8DFF-4581-9EEB-91C40358088F"},{"key":"shuqirwbody9","val":""},{"key":"shuqifxbody9","val":""},{"key":"shuqisprwurl9","val":"https://ocean.shuqireader.com/api/ad/adserver/v1/api/getAdInfo?appVer=4.3.6.0&placeId=111111&platform=iOS&requestSrc=h5&resourceId=626&timestamp=1623989254&user_id=2126245290&sqSv=1.0&sign=1176419b97c25b595622c97268c054f0&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26sdk%3D13.5%26utdid%3DYMqjs7gsZOQDAG12f5YGYF2K%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2126245290%26sn%3D295C32D92E2CEBB36D8D3C09B99B59C59FECC225%26umidtoken%3DYMqjs7gsZOQDAG12f5YGYF2K%26msv%3D8.0.0%26brand%3DApple%26imei%3D63EBDFE27B0AC307EBC8E6977E8A177C3366AF90%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D60C19B2B-8DFF-4581-9EEB-91C40358088F"},{"key":"shuqijlbody9","val":"requestSrc=h5&userId=2126245290&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1623989230&sqSv=1.0&sign=d9cf79720ae562d78d7870fd3ce70e54&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26sdk%3D13.5%26utdid%3DYMqjs7gsZOQDAG12f5YGYF2K%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2126245290%26sn%3D295C32D92E2CEBB36D8D3C09B99B59C59FECC225%26umidtoken%3DYMqjs7gsZOQDAG12f5YGYF2K%26msv%3D8.0.0%26brand%3DApple%26imei%3D63EBDFE27B0AC307EBC8E6977E8A177C3366AF90%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D60C19B2B-8DFF-4581-9EEB-91C40358088F"},{"key":"shuqisqjlbody9","val":"src=&userId=2126245290&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1623989218&sqSv=1.0&sign=c8a3174ceb703a2a287ccdda1ff39022&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26sdk%3D13.5%26utdid%3DYMqjs7gsZOQDAG12f5YGYF2K%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2126245290%26sn%3D295C32D92E2CEBB36D8D3C09B99B59C59FECC225%26umidtoken%3DYMqjs7gsZOQDAG12f5YGYF2K%26msv%3D8.0.0%26brand%3DApple%26imei%3D63EBDFE27B0AC307EBC8E6977E8A177C3366AF90%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D60C19B2B-8DFF-4581-9EEB-91C40358088F"},{"key":"shuqicjyurl9","val":"https://ocean.shuqireader.com/api/activity/activity/v1/lottery/info?timestamp=1623989256&userId=2126245290&activityId=311&sqSv=1.0&sign=bb66ee4244b3c4247715d74c1bfc7f15&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.5%26utdid%3DYMqjs7gsZOQDAG12f5YGYF2K%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2126245290%26sn%3D295C32D92E2CEBB36D8D3C09B99B59C59FECC225%26umidtoken%3DYMqjs7gsZOQDAG12f5YGYF2K%26msv%3D8.0.0%26brand%3DApple%26imei%3D63EBDFE27B0AC307EBC8E6977E8A177C3366AF90%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D60C19B2B-8DFF-4581-9EEB-91C40358088F"},{"key":"shuqicjcsbody9","val":"_public=skinId%3D999%26idfa%3D60C19B2B-8DFF-4581-9EEB-91C40358088F%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26umidtoken%3DYMqjs7gsZOQDAG12f5YGYF2K%26user_id%3D2126245290%26sn%3D295C32D92E2CEBB36D8D3C09B99B59C59FECC225%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D63EBDFE27B0AC307EBC8E6977E8A177C3366AF90%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYMqjs7gsZOQDAG12f5YGYF2K%26utype%3Dpre_vip%26sdk%3D13.5&deliveryId=711&key=sq_app_ad&miniWua=HHnB_oMumWdV982%2BBQukfpnx1ZQesA6oWXLYLvrCvQRpTL2c%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=703&sign=FEF6ACAC24AF64514B2D8C6229B3EACD&timestamp=1623989235&userId=2126245290&user_id=2126245290&wua=HIVW_5KEU4jxTS39ySBW3ZGKTI2HDCv5yFU722EFvg/mr6PRaunpjQmd80j9mVMQI79WDLxI9TptsOWxYH9PAVSn3v3U2SnxNQC%2Bn%2BQgJg1v2MP0mYKZ%2B84IdAbJ9KdWJMnHS3cEGKCZxE8oznb3qLNmXL5j83EasAOuozmNAMSVRxEzgO%2BK%2BkuCtC2L8AfU5CuQoOe8UaNf9s66pJYkPL6lIbr0xIbSy%2BAynOEL0P%2B7xPGM%3D"},{"key":"shuqicjbody9","val":"wua=HIVW_krDAfkc%2BDvvh2QI6giqfBz1COxxn0pG%2FMlwCb4EJnw1wYp023phcYy8LSeWS%2Bgl%2FIlNPD7Xw1gSbcYaSazlP9kW4MjaFO1nHx2yu1OUsylnEM%2FBWaMYsRTZHOL7qko1YTmwagkRJTUyZVvYJZ5zDZDkGnQFT4ceptkB4IYTpdsuCOrl2AVMx70Qw5ZCWhPOwaK0VJVNepSbdVtCzekbvKSbdC6NRrNdI9S4cpg20q0g%3D&ua=&userId=2126245290&umidtoken=YMqjs7gsZOQDAG12f5YGYF2K&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&asac=2A20C07RJ9F51AOEFSNHDR&timestamp=1623989240&activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&sqSv=1.0&sign=ac2fde8d7383a6487833d95688c2d6b3&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.5%26utdid%3DYMqjs7gsZOQDAG12f5YGYF2K%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2126245290%26sn%3D295C32D92E2CEBB36D8D3C09B99B59C59FECC225%26umidtoken%3DYMqjs7gsZOQDAG12f5YGYF2K%26msv%3D8.0.0%26brand%3DApple%26imei%3D63EBDFE27B0AC307EBC8E6977E8A177C3366AF90%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D60C19B2B-8DFF-4581-9EEB-91C40358088F"},{"key":"shuqijsspbody9","val":""},{"key":"shuqijsydurl9","val":""},{"key":"shuqijsydbody9","val":""},{"key":"shuqijsqdbody9","val":""},{"key":"shuqijsqdspyurl9","val":""},{"key":"shuqijsqdspbody9","val":""},{"key":"shuqijsrwbody9","val":""},{"key":"shuqijsfxbody9","val":""},{"key":"shuqijsbookurl9","val":""},{"key":"shuqijsbookbody9","val":""},{"key":"shuqijssprwurl9","val":""},{"key":"shuqiuserurl10","val":"https://ocean.shuqireader.com/api/jaccount/accountapi/v1/sapi/account/getBindinfo?userId=2126792125&sqSv=1.0&timestamp=1623989384&sign=ef6d6923f040304eabcc641cbf8bde79&key=sq_h5_gateway"},{"key":"shuqisyurl10","val":"https://render.shuqireader.com/load/resource?sdk=13.5.1&utdid=YMqjs7gsZOQDAG12f5YGYF2K&ustatus=0&first_placeid=111111&net_env=3g&placeid=111111&user_id=2126792125&sn=2D62E6A2F4F568C7EB8AB54286BE723D177C2754&umidtoken=YMqjs7gsZOQDAG12f5YGYF2K&msv=8.0.0&brand=Apple&imei=A78EA2DBCEE4A1F8BDEC8237A04DD1F475328B07&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=iOS&ver=210301&mod=iPhoneXR&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=284708B9-BC13-41C2-BC96-83EE9C3579B6"},{"key":"shuqisybody10","val":"appVer=4.3.6.0&imei=A78EA2DBCEE4A1F8BDEC8237A04DD1F475328B07&isNewUser=1&params=%7B%22resources%22%3A%7B%22ShuqiVipEntry%22%3A%7B%7D%2C%22personalCardConfig%22%3A%7B%7D%7D%7D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=ae2fab2500594d6ceb044df7e5db4f57&sn=2D62E6A2F4F568C7EB8AB54286BE723D177C2754&soft_id=21&timestamp=1623989271&user_id=2126792125&ver=210301"},{"key":"shuqispbody10","val":"_public=skinId%3D999%26idfa%3D284708B9-BC13-41C2-BC96-83EE9C3579B6%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26umidtoken%3DYMqjs7gsZOQDAG12f5YGYF2K%26user_id%3D2126792125%26sn%3D2D62E6A2F4F568C7EB8AB54286BE723D177C2754%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3DA78EA2DBCEE4A1F8BDEC8237A04DD1F475328B07%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhoneXR%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYMqjs7gsZOQDAG12f5YGYF2K%26utype%3Dpre_vip%26sdk%3D13.5.1&deliveryId=525&key=sq_app_ad&miniWua=HHnB_b6Q%2BrMyAEckgbw2ZSBtgUmojfD%2B5q1suiYCuAJIVK40%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=626&sign=C955FD002C2A510081ED454E8D0AAB6E&timestamp=1623989330&userId=2126792125&user_id=2126792125&wua=HIVW_aBLY%2Btr82SjGtpHVHdHFtSzwQQSF%2BKFIPVPM2as3uqVfK%2BWETUK7leh8PUOahVgzpNQxUFKDQNnXrvbK6VDI/ZZ5O41UM3AA%2BGSvF5fr5dO1vwvSGuHix/Z2Bunpihh9gHGpcfzAspvHNxteCrmbiCdvAsjNhZHeFs%2B5yYJ9VoaArxAOQ3OAw5K/GDlRuTPkE1VbKfvgWjopprI%2BG5ABNcIOxFVV6IhD20R6%2BGH6AsU%3D"},{"key":"shuqiscbody10","val":"_public=skinId%253D999%2526idfa%253D284708B9-BC13-41C2-BC96-83EE9C3579B6%2526ustatus%253D0%2526first_placeid%253D111111%2526net_env%253D3g%2526umidtoken%253DYMqjs7gsZOQDAG12f5YGYF2K%2526user_id%253D2126792125%2526sn%253D2D62E6A2F4F568C7EB8AB54286BE723D177C2754%2526placeid%253D111111%2526msv%253D8.0.0%2526brand%253DApple%2526imei%253DA78EA2DBCEE4A1F8BDEC8237A04DD1F475328B07%2526skinVersionPrefix%253D1%2526appVer%253D4.3.6.0%2526skinActiveColor%253D0F9970%2526manufacturer%253DApple%2526skinColor%253D23B383%2526platform%253DiOS%2526ver%253D210301%2526mod%253DiPhoneXR%2526statusBarHeight%253D44.000000%2526skinVersion%253D1%2526wh%253D1242x2688%2526soft_id%253D21%2526utdid%253DYMqjs7gsZOQDAG12f5YGYF2K%2526utype%253Dpre_vip%2526sdk%253D13.5.1&key=and_log&readingList=%5B%7B%22startTime%22%3A1623989275%2C%22readObjType%22%3A1%2C%22attr%22%3A2%2C%22readObjId%22%3A%227504095%22%2C%22readChapterId%22%3A1027038%2C%22readingLen%22%3A41%7D%5D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=072E9779D9116C57BBB614E5016695B6&timestamp=1623989316&user_id=2126792125"},{"key":"shuqiydbody10","val":"_public=skinId%3D999%26idfa%3D284708B9-BC13-41C2-BC96-83EE9C3579B6%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26umidtoken%3DYMqjs7gsZOQDAG12f5YGYF2K%26user_id%3D2126792125%26sn%3D2D62E6A2F4F568C7EB8AB54286BE723D177C2754%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3DA78EA2DBCEE4A1F8BDEC8237A04DD1F475328B07%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhoneXR%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYMqjs7gsZOQDAG12f5YGYF2K%26utype%3Dpre_vip%26sdk%3D13.5.1&deliveryId=707&key=sq_app_ad&miniWua=HHnB_ysHfoLoRc8qdkkkpsXHvssvdvzaeYE879qqm7Y0ylko%3D&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=678&sign=CA648EF4758415594A495A56064C3C09&timestamp=1623989312&userId=2126792125&wua=HIVW_BtldMJEu4et%2B4UIqBdfwqvgGeOCkNzgEXBeI6n0e37qiYuv/wqbT7HN/PrfH4eJXtpHGJjAuKmFPqpwirHDTf20ewpkmZq4DtUdwRPCYc8keE4CjC/KIQ6DG5IXlYGBdfHCJzpX1gGtTszUAs4jO31wTnxm8qZsfJUZ5l7IQB3hwWLyAEAJhmW%2BgpKmEvafoIiUcw%2BXC8ko6qnZyUWlX0BqLdSC3icZn5PYYAb9c63s%3D"},{"key":"shuqiqdbody10","val":"clientTimestamp=1623989324&position=501&userId=2126792125&signInType=1&wua=HIVW_mqwUXvMWNX7rQ0DY3TjQHDKhWE3zV9X7Io192%2FhAXO3cESaGp%2BacIogQGAllaNSY4Yell6E%2F0XfHOgbrwlGzo4ddtNBCbPFJxbo2yXgnaMPaVCKZrPL7xRf66brabfUOFTSrDaV97X0E8Ghmtdjo6Hj9DHsWqoDoigAZWV0CYd7VRAW6v7iBLsRX1F8nwTcMnYgJJNKUQDAu5kZgHZ%2BHx3eWx%2BUnP5RuFL%2BENC%2ByqME%3D&ua=&miniWua=HHnB_%2FQA3AFgGF9N1Az5cuJ93KZnZuqn6b8MbHn5mL3qXHi4%3D&umidtoken=YMqjs7gsZOQDAG12f5YGYF2K&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&sign=5cc463e3d1c4821418637c17475c83c6&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26sdk%3D13.5.1%26utdid%3DYMqjs7gsZOQDAG12f5YGYF2K%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2126792125%26sn%3D2D62E6A2F4F568C7EB8AB54286BE723D177C2754%26umidtoken%3DYMqjs7gsZOQDAG12f5YGYF2K%26msv%3D8.0.0%26brand%3DApple%26imei%3DA78EA2DBCEE4A1F8BDEC8237A04DD1F475328B07%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhoneXR%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D284708B9-BC13-41C2-BC96-83EE9C3579B6"},{"key":"shuqirwbody10","val":""},{"key":"shuqifxbody10","val":""},{"key":"shuqisprwurl10","val":"https://ocean.shuqireader.com/api/ad/adserver/v1/api/getAdInfo?appVer=4.3.6.0&placeId=111111&platform=iOS&requestSrc=h5&resourceId=626&timestamp=1623989373&user_id=2126792125&sqSv=1.0&sign=fa3c72500f29796ccffceca1004eb6c5&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26sdk%3D13.5.1%26utdid%3DYMqjs7gsZOQDAG12f5YGYF2K%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2126792125%26sn%3D2D62E6A2F4F568C7EB8AB54286BE723D177C2754%26umidtoken%3DYMqjs7gsZOQDAG12f5YGYF2K%26msv%3D8.0.0%26brand%3DApple%26imei%3DA78EA2DBCEE4A1F8BDEC8237A04DD1F475328B07%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhoneXR%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D284708B9-BC13-41C2-BC96-83EE9C3579B6"},{"key":"shuqijlbody10","val":"requestSrc=h5&userId=2126792125&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1623989339&sqSv=1.0&sign=a1732caa3e46fb2a12780b215fff64c6&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26sdk%3D13.5.1%26utdid%3DYMqjs7gsZOQDAG12f5YGYF2K%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2126792125%26sn%3D2D62E6A2F4F568C7EB8AB54286BE723D177C2754%26umidtoken%3DYMqjs7gsZOQDAG12f5YGYF2K%26msv%3D8.0.0%26brand%3DApple%26imei%3DA78EA2DBCEE4A1F8BDEC8237A04DD1F475328B07%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhoneXR%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D284708B9-BC13-41C2-BC96-83EE9C3579B6"},{"key":"shuqisqjlbody10","val":"src=&userId=2126792125&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1623989328&sqSv=1.0&sign=6c9b8055e124b802b80a35d8a98e6b98&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26sdk%3D13.5.1%26utdid%3DYMqjs7gsZOQDAG12f5YGYF2K%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2126792125%26sn%3D2D62E6A2F4F568C7EB8AB54286BE723D177C2754%26umidtoken%3DYMqjs7gsZOQDAG12f5YGYF2K%26msv%3D8.0.0%26brand%3DApple%26imei%3DA78EA2DBCEE4A1F8BDEC8237A04DD1F475328B07%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhoneXR%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D284708B9-BC13-41C2-BC96-83EE9C3579B6"},{"key":"shuqicjyurl10","val":"https://ocean.shuqireader.com/api/activity/activity/v1/lottery/info?timestamp=1623989384&userId=2126792125&activityId=311&sqSv=1.0&sign=d1eb26683bff7b943e60ad525e75cde9&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.5.1%26utdid%3DYMqjs7gsZOQDAG12f5YGYF2K%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2126792125%26sn%3D2D62E6A2F4F568C7EB8AB54286BE723D177C2754%26umidtoken%3DYMqjs7gsZOQDAG12f5YGYF2K%26msv%3D8.0.0%26brand%3DApple%26imei%3DA78EA2DBCEE4A1F8BDEC8237A04DD1F475328B07%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhoneXR%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D284708B9-BC13-41C2-BC96-83EE9C3579B6"},{"key":"shuqicjcsbody10","val":"_public=skinId%3D999%26idfa%3D284708B9-BC13-41C2-BC96-83EE9C3579B6%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26umidtoken%3DYMqjs7gsZOQDAG12f5YGYF2K%26user_id%3D2126792125%26sn%3D2D62E6A2F4F568C7EB8AB54286BE723D177C2754%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3DA78EA2DBCEE4A1F8BDEC8237A04DD1F475328B07%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhoneXR%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYMqjs7gsZOQDAG12f5YGYF2K%26utype%3Dpre_vip%26sdk%3D13.5.1&deliveryId=711&key=sq_app_ad&miniWua=HHnB_QQxqszDDmRKtxR5TuLip4uU9k7/ftL5vkixxsGJeOR0%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=703&sign=1380333E90E31A44D988A8779B5D7472&timestamp=1623989346&userId=2126792125&user_id=2126792125&wua=HIVW_PU7Q9pzo6LVo%2Bnx8y7BoBDctFovMdWPmH7IsxenVy1a0aYMho3YFi6h5y4ubqJijIKDymvDwZZGQYTNJN2CXbjI%2BSEk%2BxWKodl4ip/V2H%2BLhK6hN9WlONPyBPtxlxWdW2cNCraCpQUFNz1tr9xNRjZGNCtUiE/SDSP9YIa3eigerDSqNPBnRA50FrjBra3ttYpZSFnXYZjUhSyu2GujXU26lVMHbVZ5Hht2bAA/Y/xM%3D"},{"key":"shuqicjbody10","val":"wua=HIVW_Re4XotKihjnFDMgYsvYoHILvBXMcNQnsG4cLvoGkVklvu0leJBCePIva%2BwLfJderGIkMc4rRWqp5RTNdxYNcsj%2BO6B8UBEhRsiBLkJvIAJICRDB5tBTuvfMyw2K8Bq0q%2F19pQvCRaThVhelfFJ2JXf3zBR4hpMAVvkxbGdyeqcxkRnSUimZ8mUfTUdKdSDdT2WI3PMKtscfK3ovkgQspTIKZbDNDayVTystMyb%2BBRHc%3D&ua=&userId=2126792125&umidtoken=YMqjs7gsZOQDAG12f5YGYF2K&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&asac=2A20C07RJ9F51AOEFSNHDR&timestamp=1623989352&activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&sqSv=1.0&sign=37d744523422603fdac2eb1443af99f3&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.5.1%26utdid%3DYMqjs7gsZOQDAG12f5YGYF2K%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2126792125%26sn%3D2D62E6A2F4F568C7EB8AB54286BE723D177C2754%26umidtoken%3DYMqjs7gsZOQDAG12f5YGYF2K%26msv%3D8.0.0%26brand%3DApple%26imei%3DA78EA2DBCEE4A1F8BDEC8237A04DD1F475328B07%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhoneXR%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D284708B9-BC13-41C2-BC96-83EE9C3579B6"},{"key":"shuqijsspbody10","val":""},{"key":"shuqijsydurl10","val":""},{"key":"shuqijsydbody10","val":""},{"key":"shuqijsqdbody10","val":""},{"key":"shuqijsqdspyurl10","val":""},{"key":"shuqijsqdspbody10","val":""},{"key":"shuqijsrwbody10","val":""},{"key":"shuqijsfxbody10","val":""},{"key":"shuqijsbookurl10","val":""},{"key":"shuqijsbookbody10","val":""},{"key":"shuqijssprwurl10","val":""},{"key":"shuqiuserurl11","val":"https://ocean.shuqireader.com/api/jaccount/accountapi/v1/sapi/account/getBindinfo?userId=2127239615&sqSv=1.0&timestamp=1623989537&sign=85b042a1dfbaae941a43938e322963cc&key=sq_h5_gateway"},{"key":"shuqisyurl11","val":"https://render.shuqireader.com/load/resource?sdk=13.4&utdid=YMqjs7gsZOQDAG12f5YGYF2K&ustatus=0&first_placeid=111111&net_env=3g&placeid=111111&user_id=2127239615&sn=FB4690C180E6AE461263C6CCFE2A385982B73810&umidtoken=YMqjs7gsZOQDAG12f5YGYF2K&msv=8.0.0&brand=Apple&imei=9ABC47C89C11524C032A334CBC39ABBC531E26EE&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&session=&skinColor=23B383&platform=iOS&ver=210301&mod=iPhoneSE&statusBarHeight=44.000000&skinVersion=1&wh=1242x2688&soft_id=21&utype=pre_vip&skinId=999&idfa=1B584784-9948-42A7-9461-13EE7B613B6B"},{"key":"shuqisybody11","val":"appVer=4.3.6.0&imei=9ABC47C89C11524C032A334CBC39ABBC531E26EE&isNewUser=1&params=%7B%22resources%22%3A%7B%22ShuqiVipEntry%22%3A%7B%7D%2C%22personalCardConfig%22%3A%7B%7D%7D%7D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=33e968d1294620537bbdcd3cf144cbd8&sn=FB4690C180E6AE461263C6CCFE2A385982B73810&soft_id=21&timestamp=1623989398&user_id=2127239615&ver=210301"},{"key":"shuqispbody11","val":"_public=skinId%3D999%26idfa%3D1B584784-9948-42A7-9461-13EE7B613B6B%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26umidtoken%3DYMqjs7gsZOQDAG12f5YGYF2K%26user_id%3D2127239615%26sn%3DFB4690C180E6AE461263C6CCFE2A385982B73810%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D9ABC47C89C11524C032A334CBC39ABBC531E26EE%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhoneSE%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYMqjs7gsZOQDAG12f5YGYF2K%26utype%3Dpre_vip%26sdk%3D13.4&deliveryId=525&key=sq_app_ad&miniWua=HHnB_mWWcBYRf7VByx%2BhLzJPtgMiSY3AODtAM5QQZXD7cKws%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=626&sign=BD09216F5F3697B45046512ECA150296&timestamp=1623989474&userId=2127239615&user_id=2127239615&wua=HIVW_0HPrSEDqGhKRcgepO1PBOgXv%2BDuM5ZHH3cdeQI2vpeLNsRLjIjnBYa8blzkdDI6ncDBhXEmuNOl/ZMqbCL8zOmv3QlmkCf6Ko7NBMKAC9VboLnkpxhKNxa7ryzxRvvwtLO5wRSujFIr/0nwwdOIo2PSoG187dRIecS0e7NjtS/BubiJ/UMSLwKAXNFPY4inCwr0TZrmNDkVsiY4Ioxq9SEkUTf4ZhAAOY0qRHTUT5n4%3D"},{"key":"shuqiscbody11","val":"_public=skinId%253D999%2526idfa%253D1B584784-9948-42A7-9461-13EE7B613B6B%2526ustatus%253D0%2526first_placeid%253D111111%2526net_env%253D3g%2526umidtoken%253DYMqjs7gsZOQDAG12f5YGYF2K%2526user_id%253D2127239615%2526sn%253DFB4690C180E6AE461263C6CCFE2A385982B73810%2526placeid%253D111111%2526msv%253D8.0.0%2526brand%253DApple%2526imei%253D9ABC47C89C11524C032A334CBC39ABBC531E26EE%2526skinVersionPrefix%253D1%2526appVer%253D4.3.6.0%2526skinActiveColor%253D0F9970%2526manufacturer%253DApple%2526skinColor%253D23B383%2526platform%253DiOS%2526ver%253D210301%2526mod%253DiPhoneSE%2526statusBarHeight%253D44.000000%2526skinVersion%253D1%2526wh%253D1242x2688%2526soft_id%253D21%2526utdid%253DYMqjs7gsZOQDAG12f5YGYF2K%2526utype%253Dpre_vip%2526sdk%253D13.4&key=and_log&readingList=%5B%7B%22startTime%22%3A1623989431%2C%22readObjType%22%3A1%2C%22attr%22%3A2%2C%22readObjId%22%3A%228300300%22%2C%22readChapterId%22%3A1346022%2C%22readingLen%22%3A33%7D%5D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=B44C2F326E81BBBDAB4E90BE31324F68&timestamp=1623989465&user_id=2127239615"},{"key":"shuqiydbody11","val":"_public=skinId%3D999%26idfa%3D1B584784-9948-42A7-9461-13EE7B613B6B%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26umidtoken%3DYMqjs7gsZOQDAG12f5YGYF2K%26user_id%3D2127239615%26sn%3DFB4690C180E6AE461263C6CCFE2A385982B73810%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D9ABC47C89C11524C032A334CBC39ABBC531E26EE%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhoneSE%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYMqjs7gsZOQDAG12f5YGYF2K%26utype%3Dpre_vip%26sdk%3D13.4&deliveryId=707&key=sq_app_ad&miniWua=HHnB_AaE2wibVfLVbPyX2Uf9cVRErdDHgU4mpr74t3D3Vr3I%3D&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=678&sign=5D1E2B1EA9FE59A813A0CAF92C03BDE6&timestamp=1623989460&userId=2127239615&wua=HIVW_qOZ1q9tNi68%2BtGOK8Y0UL68T/ROJ/lW2PZy6A4tZ/UGgifqIej%2BQwJ5cVAC8DX8iop31Zc6Ve46TulE4knnKoBYmcOenYRlT02PWUgZPdX4tF5hqfm1Wl6x%2BjH0XACnJTZTbLwnaW0eJtisiDK%2BeBqw2CgWj1WvC/B5Key7tpn/G0DHtryXPfmN7h1nvnj0HQrbo1iiS/%2B1rKkxHFP7mFbNgKvExePopMEvzuc0dNsw%3D"},{"key":"shuqiqdbody11","val":"clientTimestamp=1623989468&position=501&userId=2127239615&signInType=1&wua=HIVW_FS%2BVG5k1Jsay1wCSLnwkZGE2e%2BtQpQP2YTeoJfo4LfFY4x9cHmfMKoviOPUkW02Y2IPg1sfzPh215tFo4%2B8qjy3doWtXpWBlOxmvoCsBTUTXN%2FEMf0DHWx8bFZN1lBYvQ4Qf4D2DhADoUeG7WEHnJNm7TlM%2FsMte%2FwPzjuLWPpeACEW2EgSROAu5vHZsbQ8%2BtZBvJoruPgTrs8eM0kn4R%2Fk6WdmIfE50ctcBNTBBWLs%3D&ua=&miniWua=HHnB_W5pb58Dc%2F1kHHbi3qdAWkxqxMx7imx%2F8teCQWDPATbc%3D&umidtoken=YMqjs7gsZOQDAG12f5YGYF2K&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&sign=096936945fb9453a24c3505ef65c6694&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26sdk%3D13.4%26utdid%3DYMqjs7gsZOQDAG12f5YGYF2K%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2127239615%26sn%3DFB4690C180E6AE461263C6CCFE2A385982B73810%26umidtoken%3DYMqjs7gsZOQDAG12f5YGYF2K%26msv%3D8.0.0%26brand%3DApple%26imei%3D9ABC47C89C11524C032A334CBC39ABBC531E26EE%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhoneSE%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D1B584784-9948-42A7-9461-13EE7B613B6B"},{"key":"shuqirwbody11","val":""},{"key":"shuqifxbody11","val":""},{"key":"shuqisprwurl11","val":"https://ocean.shuqireader.com/api/ad/adserver/v1/api/getAdInfo?appVer=4.3.6.0&placeId=111111&platform=iOS&requestSrc=h5&resourceId=626&timestamp=1623989536&user_id=2127239615&sqSv=1.0&sign=b7eb724827e3afba1b80c352edae12ec&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26sdk%3D13.4%26utdid%3DYMqjs7gsZOQDAG12f5YGYF2K%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2127239615%26sn%3DFB4690C180E6AE461263C6CCFE2A385982B73810%26umidtoken%3DYMqjs7gsZOQDAG12f5YGYF2K%26msv%3D8.0.0%26brand%3DApple%26imei%3D9ABC47C89C11524C032A334CBC39ABBC531E26EE%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhoneSE%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D1B584784-9948-42A7-9461-13EE7B613B6B"},{"key":"shuqijlbody11","val":"requestSrc=h5&userId=2127239615&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1623989482&sqSv=1.0&sign=b2e74cf1e90597cea8949b920d6d7f9a&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26sdk%3D13.4%26utdid%3DYMqjs7gsZOQDAG12f5YGYF2K%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2127239615%26sn%3DFB4690C180E6AE461263C6CCFE2A385982B73810%26umidtoken%3DYMqjs7gsZOQDAG12f5YGYF2K%26msv%3D8.0.0%26brand%3DApple%26imei%3D9ABC47C89C11524C032A334CBC39ABBC531E26EE%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhoneSE%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D1B584784-9948-42A7-9461-13EE7B613B6B"},{"key":"shuqisqjlbody11","val":"src=&userId=2127239615&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1623989472&sqSv=1.0&sign=69f0093410fa3fa4238941940fd4a4c7&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26sdk%3D13.4%26utdid%3DYMqjs7gsZOQDAG12f5YGYF2K%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2127239615%26sn%3DFB4690C180E6AE461263C6CCFE2A385982B73810%26umidtoken%3DYMqjs7gsZOQDAG12f5YGYF2K%26msv%3D8.0.0%26brand%3DApple%26imei%3D9ABC47C89C11524C032A334CBC39ABBC531E26EE%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhoneSE%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D1B584784-9948-42A7-9461-13EE7B613B6B"},{"key":"shuqicjyurl11","val":"https://ocean.shuqireader.com/api/activity/activity/v1/lottery/info?timestamp=1623989537&userId=2127239615&activityId=311&sqSv=1.0&sign=6d6f3a091640a8efaacfec460345bacd&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.4%26utdid%3DYMqjs7gsZOQDAG12f5YGYF2K%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2127239615%26sn%3DFB4690C180E6AE461263C6CCFE2A385982B73810%26umidtoken%3DYMqjs7gsZOQDAG12f5YGYF2K%26msv%3D8.0.0%26brand%3DApple%26imei%3D9ABC47C89C11524C032A334CBC39ABBC531E26EE%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhoneSE%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D1B584784-9948-42A7-9461-13EE7B613B6B"},{"key":"shuqicjcsbody11","val":"_public=skinId%3D999%26idfa%3D1B584784-9948-42A7-9461-13EE7B613B6B%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26umidtoken%3DYMqjs7gsZOQDAG12f5YGYF2K%26user_id%3D2127239615%26sn%3DFB4690C180E6AE461263C6CCFE2A385982B73810%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D9ABC47C89C11524C032A334CBC39ABBC531E26EE%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhoneSE%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYMqjs7gsZOQDAG12f5YGYF2K%26utype%3Dpre_vip%26sdk%3D13.4&deliveryId=711&key=sq_app_ad&miniWua=HHnB_o/73f66wDD%2BtV5YKfqqpEmmSPHTYBc9Jxt8u%2BDlkPBs%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=703&sign=BEBC303EAFCFD055768259CAEC0A79C6&timestamp=1623989497&userId=2127239615&user_id=2127239615&wua=HIVW_lyG/uZSX6awrJEesxYQy241e/r4gJrr5D8nhKs14uMiwdJZlnw2eWckiXASnLVYav7Bh7veHnI3qfFAsG/kTT1WBKC00%2BhI2zRjYISDxpnl/RXjqCabhf2USBmPHnVBn/PDZEdgAgVpCpoa7FI%2BoHxv11xWW1mzfh70jpqqNyo53rDJY1Ef4OELktahhiamQKw%2BxL5xQPZsetrbLLgKO6uwTuDmmNBEF1ayye9kfwoo%3D"},{"key":"shuqicjbody11","val":"wua=HIVW_F7eA%2BmvEbsiN60wAuRyl5RjNhIhUQJ9PK%2FERWGTduyPQOFZI7EDU7r4x2NcEHLXCM1aXt5QPigGlHRy1ck6nLeCvMxjU1XUVjXcqbsyOr7EIZxt4nKWTHl8%2B0%2BRJwrgnOY8Z2F%2F0FsBjXyts80zOUa82FTh0od3Qm6YxtLs9bpGkjDznkWS1%2Bgeq22re5%2BvDukKFtNIyPi4cthmUUBfCvDD5stZyskyzt4F3GE%2BjmN4%3D&ua=&userId=2127239615&umidtoken=YMqjs7gsZOQDAG12f5YGYF2K&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&asac=2A20C07RJ9F51AOEFSNHDR&timestamp=1623989502&activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&sqSv=1.0&sign=7d9ee927aec124a8c82644580b26d777&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.4%26utdid%3DYMqjs7gsZOQDAG12f5YGYF2K%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2127239615%26sn%3DFB4690C180E6AE461263C6CCFE2A385982B73810%26umidtoken%3DYMqjs7gsZOQDAG12f5YGYF2K%26msv%3D8.0.0%26brand%3DApple%26imei%3D9ABC47C89C11524C032A334CBC39ABBC531E26EE%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhoneSE%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D1B584784-9948-42A7-9461-13EE7B613B6B"},{"key":"shuqijsspbody11","val":""},{"key":"shuqijsydurl11","val":""},{"key":"shuqijsydbody11","val":""},{"key":"shuqijsqdbody11","val":""},{"key":"shuqijsqdspyurl11","val":""},{"key":"shuqijsqdspbody11","val":""},{"key":"shuqijsrwbody11","val":""},{"key":"shuqijsfxbody11","val":""},{"key":"shuqijsbookurl11","val":""},{"key":"shuqijsbookbody11","val":""},{"key":"shuqijssprwurl11","val":""},{"key":"shuqiuserurl12","val":"https://ocean.shuqireader.com/api/jaccount/accountapi/v1/sapi/account/getBindinfo?userId=2124469047&sqSv=1.0&timestamp=1623990174&sign=a68dce2c2e99824a3d3f05c56fee5d96&key=sq_h5_gateway"},{"key":"shuqisyurl12","val":"https://render.shuqireader.com/load/resource?sdk=13.4&utdid=YMc2q65ZjGgDAOPH4UwsfoLB&ustatus=0&first_placeid=111111&net_env=wifi&placeid=111111&user_id=2124469047&sn=C218720E27B76F0117B486AD58D47795F5B2C58F&umidtoken=YMc2q65ZjGgDAOPH4UwsfoLB&msv=8.0.0&brand=Apple&imei=748221A80A5F977214BF633B13391D6133D4037A&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=iOS&ver=210301&mod=iPad3G&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=946C3406-C997-436B-8E20-FDD5EC67AAC8"},{"key":"shuqisybody12","val":"appVer=4.3.6.0&imei=748221A80A5F977214BF633B13391D6133D4037A&isNewUser=1&params=%7B%22resources%22%3A%7B%22ShuqiVipEntry%22%3A%7B%7D%2C%22personalCardConfig%22%3A%7B%7D%7D%7D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=28c737abfff6169ab5c45b2767d5993d&sn=C218720E27B76F0117B486AD58D47795F5B2C58F&soft_id=21&timestamp=1623990034&user_id=2124469047&ver=210301"},{"key":"shuqispbody12","val":"_public=skinId%3D999%26idfa%3D946C3406-C997-436B-8E20-FDD5EC67AAC8%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26umidtoken%3DYMc2q65ZjGgDAOPH4UwsfoLB%26user_id%3D2124469047%26sn%3DC218720E27B76F0117B486AD58D47795F5B2C58F%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D748221A80A5F977214BF633B13391D6133D4037A%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPad3G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYMc2q65ZjGgDAOPH4UwsfoLB%26utype%3Dpre_vip%26sdk%3D13.4&deliveryId=525&key=sq_app_ad&miniWua=HHnB_tqNI0MXgDmYo3vm%2BCrs/cb6F8I4GsJKHSMo3Fw/0A3g%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=626&sign=C31D34D3568DE1D201A3CBC51413C348&timestamp=1623990075&userId=2124469047&user_id=2124469047&wua=HIVW_lyG/uZSX6awrJEesxYQy20dYffaaFHsNT3npgy/X7qkQQL%2Bl8FoCGGgMz1U6Ajj2atpmp9cQXQn88tySQP9z6x7%2BaXMyTpjo4t9usLKbArKD38VoowPTTC1b5VNkeW49oR20D0eM6fOFlMuUhF7AFl0fVidyXD17ND7ajhzGLIb9HZAtZmQWBeX6ITTUqIHv%2BkBfXHp8iyADAhTn%2BlkQbmgZcYRisCjGL90Z%2B4K0eVo%3D"},{"key":"shuqiscbody12","val":"_public=skinId%253D999%2526idfa%253D2A476197-0668-42FF-B594-4D56A0A532F3%2526ustatus%253D0%2526first_placeid%253D111111%2526net_env%253Dwifi%2526umidtoken%253DYMc2q65ZjGgDAOPH4UwsfoLB%2526user_id%253D2125949650%2526sn%253D1E6E5CB12737784363D288B9BEA77B590D5DC963%2526placeid%253D111111%2526msv%253D8.0.0%2526brand%253DApple%2526imei%253D1A7F66DD2784B8F03F16B6DA6FD9DB6EEA166338%2526skinVersionPrefix%253D1%2526appVer%253D4.3.6.0%2526skinActiveColor%253D0F9970%2526manufacturer%253DApple%2526skinColor%253D23B383%2526platform%253DiOS%2526ver%253D210301%2526mod%253DiPodtouch3G%2526statusBarHeight%253D44.000000%2526skinVersion%253D1%2526wh%253D1242x2688%2526soft_id%253D21%2526utdid%253DYMc2q65ZjGgDAOPH4UwsfoLB%2526utype%253Dpre_vip%2526sdk%253D13.5&key=and_log&readingList=%5B%7B%22startTime%22%3A1623990265%2C%22readObjType%22%3A1%2C%22attr%22%3A2%2C%22readObjId%22%3A%227975017%22%2C%22readChapterId%22%3A1219845%2C%22readingLen%22%3A26%7D%5D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=1A5767A22145E9B62324011339E4206C&timestamp=1623990292&user_id=2125949650"},{"key":"shuqiydbody12","val":"_public=skinId%3D999%26idfa%3D2A476197-0668-42FF-B594-4D56A0A532F3%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26umidtoken%3DYMc2q65ZjGgDAOPH4UwsfoLB%26user_id%3D2125949650%26sn%3D1E6E5CB12737784363D288B9BEA77B590D5DC963%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D1A7F66DD2784B8F03F16B6DA6FD9DB6EEA166338%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPodtouch3G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYMc2q65ZjGgDAOPH4UwsfoLB%26utype%3Dpre_vip%26sdk%3D13.5&deliveryId=707&key=sq_app_ad&miniWua=HHnB_TASKo9/HyYkrbW6QahJMr1k4VJVaInQwRpz2A4KB%2BSc%3D&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=678&sign=896A02DE75327AD4B0F2F28D8DC4EEDE&timestamp=1623990288&userId=2125949650&wua=HIVW_q0KDLb0WzxynXXmqc3mEImjo4nWBciDhYbTuLcPR1Coa/aK8yq5wFmfO0telE3LKupxumizZnuRC8ewgqXT42/RnTSudG/9OF57CACpuq27kNA7S91PNYVwiWKZ8iekYhde253PVarwTZMzD8Vx5BnKu8N14geTSvPYUdNjrb%2Bo4o3r0nThADFGzbF/LeDXbN/nJEnGlRXTiy9ZtWLs2ZCqkPIowsvR5hQhHv7eComY%3D"},{"key":"shuqiqdbody12","val":"clientTimestamp=1623990046&position=501&userId=2124469047&signInType=1&wua=HIVW_daRuyyuD6cGkMi280a4E6ButR0PMRxMSwzTEYY0jhyCmkscjKBG3UatSU%2Fu7OwYYgSkH299fEMsc0LEIPzDXofy9jTMe2iWJzrEGknEeMQG1%2FasFz%2BGxNgxpBYR%2FGkNmWtem%2Fvdup5z7rLVQlx1gr4ju1oI6NM%2BmkwGAJoiPzdsVPJIjcAmAwUtC56nsePSLaeszUZa3nxxGRivXwMn3qhog7mCQ1jin7tQMC0D2Lp8%3D&ua=&miniWua=HHnB_pu6XALd6gnRrsWeGDQP2HGs73IGPpJQuknLueV%2B1fq8%3D&umidtoken=YMc2q65ZjGgDAOPH4UwsfoLB&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&sign=e809a9e767b46072faaabd36acdd6f72&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26sdk%3D13.4%26utdid%3DYMc2q65ZjGgDAOPH4UwsfoLB%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2124469047%26sn%3DC218720E27B76F0117B486AD58D47795F5B2C58F%26umidtoken%3DYMc2q65ZjGgDAOPH4UwsfoLB%26msv%3D8.0.0%26brand%3DApple%26imei%3D748221A80A5F977214BF633B13391D6133D4037A%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad3G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D946C3406-C997-436B-8E20-FDD5EC67AAC8"},{"key":"shuqirwbody12","val":""},{"key":"shuqifxbody12","val":""},{"key":"shuqisprwurl12","val":"https://ocean.shuqireader.com/api/ad/adserver/v1/api/getAdInfo?appVer=4.3.6.0&placeId=111111&platform=iOS&requestSrc=h5&resourceId=626&timestamp=1623990173&user_id=2124469047&sqSv=1.0&sign=76229742648b62a182cf2b555785c099&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.4%26utdid%3DYMc2q65ZjGgDAOPH4UwsfoLB%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2124469047%26sn%3DC218720E27B76F0117B486AD58D47795F5B2C58F%26umidtoken%3DYMc2q65ZjGgDAOPH4UwsfoLB%26msv%3D8.0.0%26brand%3DApple%26imei%3D748221A80A5F977214BF633B13391D6133D4037A%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad3G%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D946C3406-C997-436B-8E20-FDD5EC67AAC8"},{"key":"shuqijlbody12","val":"requestSrc=h5&userId=2124469047&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1623990110&sqSv=1.0&sign=a5b6fcf6f154d08fefe2f469b502ace1&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26sdk%3D13.4%26utdid%3DYMc2q65ZjGgDAOPH4UwsfoLB%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2124469047%26sn%3DC218720E27B76F0117B486AD58D47795F5B2C58F%26umidtoken%3DYMc2q65ZjGgDAOPH4UwsfoLB%26msv%3D8.0.0%26brand%3DApple%26imei%3D748221A80A5F977214BF633B13391D6133D4037A%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad3G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D946C3406-C997-436B-8E20-FDD5EC67AAC8"},{"key":"shuqisqjlbody12","val":"src=&userId=2124469047&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1623990070&sqSv=1.0&sign=879ed5eb7f8778aa06a8c4a1915b92c1&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26sdk%3D13.4%26utdid%3DYMc2q65ZjGgDAOPH4UwsfoLB%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2124469047%26sn%3DC218720E27B76F0117B486AD58D47795F5B2C58F%26umidtoken%3DYMc2q65ZjGgDAOPH4UwsfoLB%26msv%3D8.0.0%26brand%3DApple%26imei%3D748221A80A5F977214BF633B13391D6133D4037A%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad3G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D946C3406-C997-436B-8E20-FDD5EC67AAC8"},{"key":"shuqicjyurl12","val":"https://ocean.shuqireader.com/api/activity/activity/v1/lottery/info?timestamp=1623990174&userId=2124469047&activityId=311&sqSv=1.0&sign=b58810884d5d7320172222b0024b35e6&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.4%26utdid%3DYMc2q65ZjGgDAOPH4UwsfoLB%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2124469047%26sn%3DC218720E27B76F0117B486AD58D47795F5B2C58F%26umidtoken%3DYMc2q65ZjGgDAOPH4UwsfoLB%26msv%3D8.0.0%26brand%3DApple%26imei%3D748221A80A5F977214BF633B13391D6133D4037A%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad3G%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D946C3406-C997-436B-8E20-FDD5EC67AAC8"},{"key":"shuqicjcsbody12","val":"_public=skinId%3D999%26idfa%3D946C3406-C997-436B-8E20-FDD5EC67AAC8%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26umidtoken%3DYMc2q65ZjGgDAOPH4UwsfoLB%26user_id%3D2124469047%26sn%3DC218720E27B76F0117B486AD58D47795F5B2C58F%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D748221A80A5F977214BF633B13391D6133D4037A%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPad3G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYMc2q65ZjGgDAOPH4UwsfoLB%26utype%3Dpre_vip%26sdk%3D13.4&deliveryId=711&key=sq_app_ad&miniWua=HHnB_5V7tHBZZFGKPaKFPLZq4CaJhwOCuMpjlwOViPkMbc70%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=703&sign=3CB4941C86BD408885DC843082631D87&timestamp=1623990122&userId=2124469047&user_id=2124469047&wua=HIVW_sjsv2QTOAtPY0KdGTnDPdHwNjzGmE%2B60CRG5HvWIGO4Jsy4kpt/TeDRE%2BjoE6hCK3YyTUUOzrBXOYR2JkD3Jgvi3Avt94wwcPHtwXq71oFwG7rRZQ09Qr6B7NfLgELPYLtp9fvHtneIs0a5Hx/AkVZblhA5TvmtDfyNO2I9W7WC76hDyoPU9/A7WGHIq5ubUHx4NfX%2B7pbhpF4HSsdMA8DPgkhapzQmhH7PwvxRPj4g%3D"},{"key":"shuqicjbody12","val":"wua=HIVW_Ive8pej8Np1SkzWEeeRXzD%2B9sNI%2Fqf8w97segHINdR5PSUafAycOyh%2FxlETpWhkALSBAi6XrILub9w6VodzvOxyz2mT2kgUz2n5A8IBNvlZq88LsNIu%2FihEvvp0vKD4QOzgL3qU%2F0e53iOrIvP6rPyU%2FbFhuED2mmh1rKjiXEjGPMNpzJGW%2FCrhMEB9dNyI6I8thB0P3dq22idBBFKkO%2Bo757sXMlVRneakaJBRm1ls%3D&ua=&userId=2124469047&umidtoken=YMc2q65ZjGgDAOPH4UwsfoLB&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&asac=2A20C07RJ9F51AOEFSNHDR&timestamp=1623990128&activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&sqSv=1.0&sign=eefcf43fcd93dc897171523a3124076c&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.4%26utdid%3DYMc2q65ZjGgDAOPH4UwsfoLB%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2124469047%26sn%3DC218720E27B76F0117B486AD58D47795F5B2C58F%26umidtoken%3DYMc2q65ZjGgDAOPH4UwsfoLB%26msv%3D8.0.0%26brand%3DApple%26imei%3D748221A80A5F977214BF633B13391D6133D4037A%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad3G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D946C3406-C997-436B-8E20-FDD5EC67AAC8"},{"key":"shuqijsspbody12","val":""},{"key":"shuqijsydurl12","val":""},{"key":"shuqijsydbody12","val":""},{"key":"shuqijsqdbody12","val":""},{"key":"shuqijsqdspyurl12","val":""},{"key":"shuqijsqdspbody12","val":""},{"key":"shuqijsrwbody12","val":""},{"key":"shuqijsfxbody12","val":""},{"key":"shuqijsbookurl12","val":""},{"key":"shuqijsbookbody12","val":""},{"key":"shuqijssprwurl12","val":""},{"key":"shuqiuserurl13","val":"https://ocean.shuqireader.com/api/jaccount/accountapi/v1/sapi/account/getBindinfo?userId=2125949650&sqSv=1.0&timestamp=1623990338&sign=3041e15ec9f6c1919507b0d6d5a64248&key=sq_h5_gateway"},{"key":"shuqisyurl13","val":"https://render.shuqireader.com/load/resource?sdk=13.5&utdid=YMc2q65ZjGgDAOPH4UwsfoLB&ustatus=0&first_placeid=111111&net_env=wifi&placeid=111111&user_id=2125949650&sn=1E6E5CB12737784363D288B9BEA77B590D5DC963&umidtoken=YMc2q65ZjGgDAOPH4UwsfoLB&msv=8.0.0&brand=Apple&imei=1A7F66DD2784B8F03F16B6DA6FD9DB6EEA166338&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&session=&skinColor=23B383&platform=iOS&ver=210301&mod=iPodtouch3G&statusBarHeight=44.000000&skinVersion=1&wh=1242x2688&soft_id=21&utype=pre_vip&skinId=999&idfa=2A476197-0668-42FF-B594-4D56A0A532F3"},{"key":"shuqisybody13","val":"appVer=4.3.6.0&imei=1A7F66DD2784B8F03F16B6DA6FD9DB6EEA166338&isNewUser=1&params=%7B%22resources%22%3A%7B%22ShuqiVipEntry%22%3A%7B%7D%2C%22personalCardConfig%22%3A%7B%7D%7D%7D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=8bde548dee0b6480d2326f364708c981&sn=1E6E5CB12737784363D288B9BEA77B590D5DC963&soft_id=21&timestamp=1623990478&user_id=2125949650&ver=210301"},{"key":"shuqispbody13","val":"_public=skinId%3D999%26idfa%3D2A476197-0668-42FF-B594-4D56A0A532F3%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26umidtoken%3DYMc2q65ZjGgDAOPH4UwsfoLB%26user_id%3D2125949650%26sn%3D1E6E5CB12737784363D288B9BEA77B590D5DC963%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D1A7F66DD2784B8F03F16B6DA6FD9DB6EEA166338%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPodtouch3G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYMc2q65ZjGgDAOPH4UwsfoLB%26utype%3Dpre_vip%26sdk%3D13.5&deliveryId=525&key=sq_app_ad&miniWua=HHnB_zCAofDvyeLF6Jbqvc3K50dL%2BVFAEKNyGrxQp76xgJyM%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=626&sign=61B2578037A11498C8D81741ADD47878&timestamp=1623990305&userId=2125949650&user_id=2125949650&wua=HIVW_lwZ2FiT/tqwQgTV5Wbxv/jex5skhT4xZL2PR2kZIz52rvjZ/MyynQAknpfWt2PWZLC2gjLb/0G04EDb1RI20WV8orgI5BtXgMQVwGo%2Bzw0CWDsgfXcqx%2BoG0NyzDU/6EfWfUeMZ8S%2BOz58s1hYNSgcIa9fSAnVlWJ4kBhfseK2GJOSaOH0LPgCcM/rgyuE95Gi2ObnwLNR6honANNclJ02MmMzyJKrQfVJMn0AxRCEA%3D"},{"key":"shuqiscbody13","val":"_public=skinId%253D999%2526idfa%253D2A476197-0668-42FF-B594-4D56A0A532F3%2526ustatus%253D0%2526first_placeid%253D111111%2526net_env%253Dwifi%2526umidtoken%253DYMc2q65ZjGgDAOPH4UwsfoLB%2526user_id%253D2125949650%2526sn%253D1E6E5CB12737784363D288B9BEA77B590D5DC963%2526placeid%253D111111%2526msv%253D8.0.0%2526brand%253DApple%2526imei%253D1A7F66DD2784B8F03F16B6DA6FD9DB6EEA166338%2526skinVersionPrefix%253D1%2526appVer%253D4.3.6.0%2526skinActiveColor%253D0F9970%2526manufacturer%253DApple%2526skinColor%253D23B383%2526platform%253DiOS%2526ver%253D210301%2526mod%253DiPodtouch3G%2526statusBarHeight%253D44.000000%2526skinVersion%253D1%2526wh%253D1242x2688%2526soft_id%253D21%2526utdid%253DYMc2q65ZjGgDAOPH4UwsfoLB%2526utype%253Dpre_vip%2526sdk%253D13.5&key=and_log&readingList=%5B%7B%22startTime%22%3A1623990510%2C%22readObjType%22%3A1%2C%22attr%22%3A2%2C%22readObjId%22%3A%227975017%22%2C%22readChapterId%22%3A1219846%2C%22readingLen%22%3A17%7D%5D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=103A5A68B95B7175180E11EB48832A70&timestamp=1623990527&user_id=2125949650"},{"key":"shuqiydbody13","val":"_public=skinId%3D999%26idfa%3D2A476197-0668-42FF-B594-4D56A0A532F3%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26umidtoken%3DYMc2q65ZjGgDAOPH4UwsfoLB%26user_id%3D2125949650%26sn%3D1E6E5CB12737784363D288B9BEA77B590D5DC963%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D1A7F66DD2784B8F03F16B6DA6FD9DB6EEA166338%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPodtouch3G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYMc2q65ZjGgDAOPH4UwsfoLB%26utype%3Dpre_vip%26sdk%3D13.5&deliveryId=707&key=sq_app_ad&miniWua=HHnB_Qzvl/UhrphbeJotv3VvpRWjZpw0clK/Ji8zi5WP%2Bev4%3D&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=678&sign=91050A72F84C4BDAAAB7A0F8EE5DD3F9&timestamp=1623990528&userId=2125949650&wua=HIVW_hmp4XXZfnz4diOOT8kUI5lFxqzRpHnY2TKwsG0QrSr52Yex1xOI4tHuqy719B8LrF/byvpotBMi1GH%2BrSPVxQOvhFgk3PD/FYKYbrjKGt5qUWPsNNKZoCNoeReXb5GBhLc7GRV1FsGP6ui8PZpVHNAuvbuSFmRB8XIep6ZKrJfScFx/Q4DCh0kzJO2lk/Z6j8oDBD7nO02chgiUxZ%2BortpENKtuJepq56BoNLaoE8gI%3D"},{"key":"shuqiqdbody13","val":"clientTimestamp=1623990297&position=501&userId=2125949650&signInType=1&wua=HIVW_9xE%2BTNloMsgA2rXVDMdWF4eMc%2BqHkb3FTjZlI06irgbEr6ez65wIpuIyiyIEk4%2BcD%2BAWX0Q%2BbTtCKiT1gmvrRO31vlDMCPd94cDaitj%2BxzGjniYkFy1HAXYWJerdccbbcFJW9HmYomv60CAZ65Z4zbyv06aZ09KIwsW7oXVrdX%2FG3Xuk2TKfm6tPe4FS5Oe41t%2FKczBIJZP4DxMSHTHaf0v7GvLmIg4gXhyPpE5fulA%3D&ua=&miniWua=HHnB_OriTLOZeJxsfCKDvFnbh%2FpF2R3qwFIsIq2YBOZ%2FUYCI%3D&umidtoken=YMc2q65ZjGgDAOPH4UwsfoLB&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&sign=c4b3afdb8a30bc9b799d63c33609c315&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.5%26utdid%3DYMc2q65ZjGgDAOPH4UwsfoLB%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2125949650%26sn%3D1E6E5CB12737784363D288B9BEA77B590D5DC963%26umidtoken%3DYMc2q65ZjGgDAOPH4UwsfoLB%26msv%3D8.0.0%26brand%3DApple%26imei%3D1A7F66DD2784B8F03F16B6DA6FD9DB6EEA166338%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPodtouch3G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D2A476197-0668-42FF-B594-4D56A0A532F3"},{"key":"shuqirwbody13","val":""},{"key":"shuqifxbody13","val":""},{"key":"shuqisprwurl13","val":"https://ocean.shuqireader.com/api/ad/adserver/v1/api/getAdInfo?appVer=4.3.6.0&placeId=111111&platform=iOS&requestSrc=h5&resourceId=626&timestamp=1623990338&user_id=2125949650&sqSv=1.0&sign=210f692c14f7aa18b90f0a936c581924&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.5%26utdid%3DYMc2q65ZjGgDAOPH4UwsfoLB%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2125949650%26sn%3D1E6E5CB12737784363D288B9BEA77B590D5DC963%26umidtoken%3DYMc2q65ZjGgDAOPH4UwsfoLB%26msv%3D8.0.0%26brand%3DApple%26imei%3D1A7F66DD2784B8F03F16B6DA6FD9DB6EEA166338%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPodtouch3G%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D2A476197-0668-42FF-B594-4D56A0A532F3"},{"key":"shuqijlbody13","val":"requestSrc=h5&userId=2125949650&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1623990534&sqSv=1.0&sign=41372003e468692a1e0e505838d74c74&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.5%26utdid%3DYMc2q65ZjGgDAOPH4UwsfoLB%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2125949650%26sn%3D1E6E5CB12737784363D288B9BEA77B590D5DC963%26umidtoken%3DYMc2q65ZjGgDAOPH4UwsfoLB%26msv%3D8.0.0%26brand%3DApple%26imei%3D1A7F66DD2784B8F03F16B6DA6FD9DB6EEA166338%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPodtouch3G%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D2A476197-0668-42FF-B594-4D56A0A532F3"},{"key":"shuqisqjlbody13","val":"src=&userId=2125949650&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1623990543&sqSv=1.0&sign=735ed55dd3ce5cf7090d474ff6d7c8d0&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.5%26utdid%3DYMc2q65ZjGgDAOPH4UwsfoLB%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2125949650%26sn%3D1E6E5CB12737784363D288B9BEA77B590D5DC963%26umidtoken%3DYMc2q65ZjGgDAOPH4UwsfoLB%26msv%3D8.0.0%26brand%3DApple%26imei%3D1A7F66DD2784B8F03F16B6DA6FD9DB6EEA166338%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPodtouch3G%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D2A476197-0668-42FF-B594-4D56A0A532F3"},{"key":"shuqicjyurl13","val":"https://ocean.shuqireader.com/api/activity/activity/v1/lottery/info?timestamp=1623990340&userId=2125949650&activityId=311&sqSv=1.0&sign=c6062abd18a01d8f00017fff25a58f82&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.5%26utdid%3DYMc2q65ZjGgDAOPH4UwsfoLB%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2125949650%26sn%3D1E6E5CB12737784363D288B9BEA77B590D5DC963%26umidtoken%3DYMc2q65ZjGgDAOPH4UwsfoLB%26msv%3D8.0.0%26brand%3DApple%26imei%3D1A7F66DD2784B8F03F16B6DA6FD9DB6EEA166338%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPodtouch3G%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D2A476197-0668-42FF-B594-4D56A0A532F3"},{"key":"shuqicjcsbody13","val":"_public=skinId%3D999%26idfa%3D2A476197-0668-42FF-B594-4D56A0A532F3%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26umidtoken%3DYMc2q65ZjGgDAOPH4UwsfoLB%26user_id%3D2125949650%26sn%3D1E6E5CB12737784363D288B9BEA77B590D5DC963%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D1A7F66DD2784B8F03F16B6DA6FD9DB6EEA166338%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPodtouch3G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYMc2q65ZjGgDAOPH4UwsfoLB%26utype%3Dpre_vip%26sdk%3D13.5&deliveryId=711&key=sq_app_ad&miniWua=HHnB_6UqOyIIRwj6LCx65KDdbdxyE0ocakZV1z5fEqrVZYQU%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=703&sign=42AEDF1DD3151A3F30051C315DD4AF7F&timestamp=1623990319&userId=2125949650&user_id=2125949650&wua=HIVW_vzVNLUQmNt5LvoJZM%2BorglosfuHNVocVj5sislHKVmHwF%2BlTnkCRcAw1TmhTtC1AhO8IOkB4hDZ811vYzjh9E4dFbLcTCmuzqaJ5lwMgiBl/hmgXsJ1rroKAqbAzKocWnv5zRItMW9p3x8O74hNheud9NGwCqNOlqYe4vgB9v2IXAfAfTEOdF55eXiBO0sXXFU/AjGcr91XFGZwYZm2rr5zRX99jjsn5EpOOlbP/tjA%3D"},{"key":"shuqicjbody13","val":"wua=HIVW_c8rAWY15FNUZc3cV%2ByX3l%2B2AE%2BcCQFmXtBLGyyVIpFujqmztS0AKbrsdspOwqCb5LKbFjuuPwDNAbsGKRLz%2FmHyrB7uejxF32JvZ6KTAnIetE1r6S8D3uRqqRdbM1a7AOXLg8YIvnWRf%2F5FkumP4ntxGLfo0baoQ8EdcspGiG1KMiHL7rAt0P7wu5oSQd1T0UEQZHBElxKoAAVDsjcX2toSjNsVkeh8wIWGCX5W4Y7E%3D&ua=&userId=2125949650&umidtoken=YMc2q65ZjGgDAOPH4UwsfoLB&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&asac=2A20C07RJ9F51AOEFSNHDR&timestamp=1623990322&activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&sqSv=1.0&sign=aa0a9959fd6594b2c30294f326be4021&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.5%26utdid%3DYMc2q65ZjGgDAOPH4UwsfoLB%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2125949650%26sn%3D1E6E5CB12737784363D288B9BEA77B590D5DC963%26umidtoken%3DYMc2q65ZjGgDAOPH4UwsfoLB%26msv%3D8.0.0%26brand%3DApple%26imei%3D1A7F66DD2784B8F03F16B6DA6FD9DB6EEA166338%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPodtouch3G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D2A476197-0668-42FF-B594-4D56A0A532F3"},{"key":"shuqijsspbody13","val":""},{"key":"shuqijsydurl13","val":""},{"key":"shuqijsydbody13","val":""},{"key":"shuqijsqdbody13","val":""},{"key":"shuqijsqdspyurl13","val":""},{"key":"shuqijsqdspbody13","val":""},{"key":"shuqijsrwbody13","val":""},{"key":"shuqijsfxbody13","val":""},{"key":"shuqijsbookurl13","val":""},{"key":"shuqijsbookbody13","val":""},{"key":"shuqijssprwurl13","val":""},{"key":"shuqiuserurl14","val":"https://ocean.shuqireader.com/api/jaccount/accountapi/v1/sapi/account/getBindinfo?userId=2125266614&sqSv=1.0&timestamp=1623990670&sign=4d938e470f4b40e4f0427c42159c610f&key=sq_h5_gateway"},{"key":"shuqisyurl14","val":"https://render.shuqireader.com/load/resource?sdk=13.3.1&utdid=YMc26rRnCVQDAPJUMvR9aHWw&ustatus=0&first_placeid=111111&net_env=4g&placeid=111111&user_id=2125266614&sn=9C082F1277BEA2F32EF30144B01660314654A360&umidtoken=YMc26rRnCVQDAPJUMvR9aHWw&msv=8.0.0&brand=Apple&imei=56CACBAFE6A56C7C2DB9F6C4457A3B0FEA11C183&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=iOS&ver=210301&mod=iPodtouch3G&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=C8984B6C-96CE-45E7-B5E6-BC440FF323EE"},{"key":"shuqisybody14","val":"appVer=4.3.6.0&imei=56CACBAFE6A56C7C2DB9F6C4457A3B0FEA11C183&isNewUser=1&params=%7B%22resources%22%3A%7B%22ShuqiVipEntry%22%3A%7B%7D%2C%22personalCardConfig%22%3A%7B%7D%7D%7D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=66114fd3698f47052f09b4286b245852&sn=9C082F1277BEA2F32EF30144B01660314654A360&soft_id=21&timestamp=1623990559&user_id=2125266614&ver=210301"},{"key":"shuqispbody14","val":"_public=utype%3Dpre_vip%26idfa%3DC8984B6C-96CE-45E7-B5E6-BC440FF323EE%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26umidtoken%3DYMc26rRnCVQDAPJUMvR9aHWw%26user_id%3D2125266614%26sn%3D9C082F1277BEA2F32EF30144B01660314654A360%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D56CACBAFE6A56C7C2DB9F6C4457A3B0FEA11C183%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPodtouch3G%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26utdid%3DYMc26rRnCVQDAPJUMvR9aHWw%26soft_id%3D21%26sdk%3D13.3.1&deliveryId=525&key=sq_app_ad&miniWua=HHnB_EEn8qlNqRAkEBIsupGEjwiTcJgBmm38mRZ7oaNKba4I%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=626&sign=3541E2DA05AD7F8102E5FED0F4B295DE&timestamp=1623990640&userId=2125266614&user_id=2125266614&wua=HIVW_67FFvc/RYaQGve/5UvWnOfnWPZgZpgdPivfYRJclduJe5ZNlKxs48H8s9ixAxdLvDWkyB%2BeC/rHcbBOQqxjbz847H0fYILpShb%2BxKntTG50N/P2neSzqt/FVffbZTH0%2BrPaputE8S0DggDfCgDseZuSCwJWJUYdeBq8kwzOqGwZgbsP8yzed6men7dqpnOhpPGGQqp3P4jtRkmvYSu0pdTAuEFw2U1NzV2sFa1AEY3M%3D"},{"key":"shuqiscbody14","val":"_public=utype%253Dpre_vip%2526idfa%253DC8984B6C-96CE-45E7-B5E6-BC440FF323EE%2526ustatus%253D0%2526first_placeid%253D111111%2526net_env%253D4g%2526umidtoken%253DYMc26rRnCVQDAPJUMvR9aHWw%2526user_id%253D2125266614%2526sn%253D9C082F1277BEA2F32EF30144B01660314654A360%2526placeid%253D111111%2526msv%253D8.0.0%2526brand%253DApple%2526imei%253D56CACBAFE6A56C7C2DB9F6C4457A3B0FEA11C183%2526skinVersionPrefix%253D1%2526appVer%253D4.3.6.0%2526skinActiveColor%253D0F9970%2526manufacturer%253DApple%2526statusBarHeight%253D44.000000%2526skinColor%253D23B383%2526platform%253DiOS%2526ver%253D210301%2526mod%253DiPodtouch3G%2526skinVersion%253D1%2526wh%253D1242x2688%2526skinId%253D999%2526utdid%253DYMc26rRnCVQDAPJUMvR9aHWw%2526soft_id%253D21%2526sdk%253D13.3.1&key=and_log&readingList=%5B%7B%22startTime%22%3A1623990593%2C%22readObjType%22%3A1%2C%22attr%22%3A2%2C%22readObjId%22%3A%226725806%22%2C%22readChapterId%22%3A721665%2C%22readingLen%22%3A26%7D%5D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=992B9F17A67DD4D1E3C4272B52DD644E&timestamp=1623990619&user_id=2125266614"},{"key":"shuqiydbody14","val":"_public=utype%3Dpre_vip%26idfa%3DC8984B6C-96CE-45E7-B5E6-BC440FF323EE%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26umidtoken%3DYMc26rRnCVQDAPJUMvR9aHWw%26user_id%3D2125266614%26sn%3D9C082F1277BEA2F32EF30144B01660314654A360%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D56CACBAFE6A56C7C2DB9F6C4457A3B0FEA11C183%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPodtouch3G%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26utdid%3DYMc26rRnCVQDAPJUMvR9aHWw%26soft_id%3D21%26sdk%3D13.3.1&deliveryId=707&key=sq_app_ad&miniWua=HHnB_wXMz4rT0vDUSJyNjO3cGW6qw1pvGeT0KPe%2B41wvqdtQ%3D&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=678&sign=54EFD6E7B0C9A845CDCDD99F8A548B85&timestamp=1623990623&userId=2125266614&wua=HIVW_yHjcjf8XCpT1/oEjcsTs60/gfolcYdSKmC9PuufNB/XzhF%2B5AxXCg5CY2U9pTvqTdK0g7QqBtHwRABS7bvrpXX/zleemkqXc7dYrXpv1l3CdcGRc8imdx/v1Cx7k2mQ7xWgKclqay2idLnSFjfgnjYVxTqiab4t6mlLnmBXxVXEeqUjNm8CQX4lFEZOqajKZpRt/p9zSZphmykP0uk4IQfJSBcGKI/dRnazEbWh13m0%3D"},{"key":"shuqiqdbody14","val":"clientTimestamp=1623990636&position=501&userId=2125266614&signInType=1&wua=HIVW_XPX6f0crX4Eup6hgobzbNAsvHphbrYLw44D5mem97vV8aDheBwPaeROpF7vcRo8eIWOl9nwNDqU9ZBa4s5cCHSsbmPt7yTAhkRuxHlZ1w8ZsImrZVvN9cvC7T8EpB3OnUHrwXgTp8VpOf45s4Dn8x8au6aur8TFb%2BtcHB9lJYHFI7309Oaw1QSjx4XSnedYlAdY4rTBy8qhPaRyPyfNeCz38ZxdGjnQJemZQCSVVju8%3D&ua=&miniWua=HHnB_m4E3zwBoutnqaRwIWy3%2BSK40lKBU9ogT0XscwhYpqzA%3D&umidtoken=YMc26rRnCVQDAPJUMvR9aHWw&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&sign=83e45a5ad0633455e09e69db2ec6b1a7&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.3.1%26utdid%3DYMc26rRnCVQDAPJUMvR9aHWw%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2125266614%26sn%3D9C082F1277BEA2F32EF30144B01660314654A360%26umidtoken%3DYMc26rRnCVQDAPJUMvR9aHWw%26msv%3D8.0.0%26brand%3DApple%26imei%3D56CACBAFE6A56C7C2DB9F6C4457A3B0FEA11C183%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPodtouch3G%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DC8984B6C-96CE-45E7-B5E6-BC440FF323EE"},{"key":"shuqirwbody14","val":""},{"key":"shuqifxbody14","val":""},{"key":"shuqisprwurl14","val":"https://ocean.shuqireader.com/api/ad/adserver/v1/api/getAdInfo?appVer=4.3.6.0&placeId=111111&platform=iOS&requestSrc=h5&resourceId=626&timestamp=1623990671&user_id=2125266614&sqSv=1.0&sign=6cdb9cb69b3eda1fb019d0d4aeedf97b&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.3.1%26utdid%3DYMc26rRnCVQDAPJUMvR9aHWw%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2125266614%26sn%3D9C082F1277BEA2F32EF30144B01660314654A360%26umidtoken%3DYMc26rRnCVQDAPJUMvR9aHWw%26msv%3D8.0.0%26brand%3DApple%26imei%3D56CACBAFE6A56C7C2DB9F6C4457A3B0FEA11C183%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPodtouch3G%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DC8984B6C-96CE-45E7-B5E6-BC440FF323EE"},{"key":"shuqijlbody14","val":"requestSrc=h5&userId=2125266614&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1623990646&sqSv=1.0&sign=835ddcc4bb2f55ba65472f46a1a919fd&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.3.1%26utdid%3DYMc26rRnCVQDAPJUMvR9aHWw%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2125266614%26sn%3D9C082F1277BEA2F32EF30144B01660314654A360%26umidtoken%3DYMc26rRnCVQDAPJUMvR9aHWw%26msv%3D8.0.0%26brand%3DApple%26imei%3D56CACBAFE6A56C7C2DB9F6C4457A3B0FEA11C183%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPodtouch3G%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DC8984B6C-96CE-45E7-B5E6-BC440FF323EE"},{"key":"shuqisqjlbody14","val":"src=&userId=2125266614&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1623990635&sqSv=1.0&sign=10f1b7229f27ac00815705480859b653&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.3.1%26utdid%3DYMc26rRnCVQDAPJUMvR9aHWw%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2125266614%26sn%3D9C082F1277BEA2F32EF30144B01660314654A360%26umidtoken%3DYMc26rRnCVQDAPJUMvR9aHWw%26msv%3D8.0.0%26brand%3DApple%26imei%3D56CACBAFE6A56C7C2DB9F6C4457A3B0FEA11C183%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPodtouch3G%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DC8984B6C-96CE-45E7-B5E6-BC440FF323EE"},{"key":"shuqicjyurl14","val":"https://ocean.shuqireader.com/api/activity/activity/v1/lottery/info?timestamp=1623990675&userId=2125266614&activityId=311&sqSv=1.0&sign=573fb3fd21045d4958d3701cbd387f0c&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.3.1%26utdid%3DYMc26rRnCVQDAPJUMvR9aHWw%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2125266614%26sn%3D9C082F1277BEA2F32EF30144B01660314654A360%26umidtoken%3DYMc26rRnCVQDAPJUMvR9aHWw%26msv%3D8.0.0%26brand%3DApple%26imei%3D56CACBAFE6A56C7C2DB9F6C4457A3B0FEA11C183%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPodtouch3G%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DC8984B6C-96CE-45E7-B5E6-BC440FF323EE"},{"key":"shuqicjcsbody14","val":"_public=utype%3Dpre_vip%26idfa%3DC8984B6C-96CE-45E7-B5E6-BC440FF323EE%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26umidtoken%3DYMc26rRnCVQDAPJUMvR9aHWw%26user_id%3D2125266614%26sn%3D9C082F1277BEA2F32EF30144B01660314654A360%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D56CACBAFE6A56C7C2DB9F6C4457A3B0FEA11C183%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPodtouch3G%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26utdid%3DYMc26rRnCVQDAPJUMvR9aHWw%26soft_id%3D21%26sdk%3D13.3.1&deliveryId=711&key=sq_app_ad&miniWua=HHnB_tUilZ9GrlX9veCxGBKXEnQeh88JvBWyVTUwoZtLSpEQ%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=703&sign=10EF1011C96DF938091D96515094D2BB&timestamp=1623990656&userId=2125266614&user_id=2125266614&wua=HIVW_GiZtQRhf63I4dKtchs3hYz7Ua3bIQZgK3gFzcdSC7uNebnsnwmfzTZob/4coqZ6ytVZWLCyH2%2BIzLaIlack6SJ3e85jit/p/oq4Ai/T4OxgOJc52wKYYMF96VpFQuR2RFoaTVmvxTXkfNm3GOiH2iAjKrD4UeFGXmWKjhIUgH/q3AvJpxnULLhDqm1e7uXK3IcUTVubTH3dSJGybMvwBXQUAUYyKZB4m0LiUYjyQi6Q%3D"},{"key":"shuqicjbody14","val":"wua=HIVW_v07VSlzXvJIZwedjcjceD5GG%2FRxxcl3qIMYPq5KszWoBIenavEB80NoDOFu5j2xZ4XIiTeljCuaXhVEnjW6mx5CsONASfOeujecTcPkq3cnlil1QVkuE%2BsEkGTW5%2FT5fdcbh0TrkCtcRXw%2Fkpl5Nr04%2BKC0NNlB991gu5KvbOWPqETJVChwwO%2B0UDe%2BSlrvwOksTsbBCPbXZi5DoALhjj5%2B7VtHAweRhc7Turtdnr%2BM%3D&ua=&userId=2125266614&umidtoken=YMc26rRnCVQDAPJUMvR9aHWw&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&asac=2A20C07RJ9F51AOEFSNHDR&timestamp=1623990659&activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&sqSv=1.0&sign=666f406d8186b3134cc43cbdbed4eff7&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.3.1%26utdid%3DYMc26rRnCVQDAPJUMvR9aHWw%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2125266614%26sn%3D9C082F1277BEA2F32EF30144B01660314654A360%26umidtoken%3DYMc26rRnCVQDAPJUMvR9aHWw%26msv%3D8.0.0%26brand%3DApple%26imei%3D56CACBAFE6A56C7C2DB9F6C4457A3B0FEA11C183%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPodtouch3G%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DC8984B6C-96CE-45E7-B5E6-BC440FF323EE"},{"key":"shuqijsspbody14","val":""},{"key":"shuqijsydurl14","val":""},{"key":"shuqijsydbody14","val":""},{"key":"shuqijsqdbody14","val":""},{"key":"shuqijsqdspyurl14","val":""},{"key":"shuqijsqdspbody14","val":""},{"key":"shuqijsrwbody14","val":""},{"key":"shuqijsfxbody14","val":""},{"key":"shuqijsbookurl14","val":""},{"key":"shuqijsbookbody14","val":""},{"key":"shuqijssprwurl14","val":""},{"key":"shuqiuserurl15","val":"https://ocean.shuqireader.com/api/jaccount/accountapi/v1/sapi/account/getBindinfo?userId=2128572728&sqSv=1.0&timestamp=1623990801&sign=15f1262f0c124f2c06f3bd2a50044637&key=sq_h5_gateway"},{"key":"shuqisyurl15","val":"https://render.shuqireader.com/load/resource?sdk=13.3&utdid=YMc3CBuROTsDAKhAyCYxY8kR&ustatus=0&first_placeid=111111&net_env=4g&placeid=111111&user_id=2128572728&sn=35B601E2222880D792CC5E7E4C974254B2059B9F&umidtoken=YMc3CBuROTsDAKhAyCYxY8kR&msv=8.0.0&brand=Apple&imei=05F7C38208B0D45745971C0CED342B2C343353C6&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=iOS&ver=210301&mod=iPhone6&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=DB10B647-DE5D-44A2-A1CB-0F5F29289F53"},{"key":"shuqisybody15","val":"appVer=4.3.6.0&imei=05F7C38208B0D45745971C0CED342B2C343353C6&isNewUser=1&params=%7B%22resources%22%3A%7B%22ShuqiVipEntry%22%3A%7B%7D%2C%22personalCardConfig%22%3A%7B%7D%7D%7D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=43dca798f6691fe998e387d729a10ce1&sn=35B601E2222880D792CC5E7E4C974254B2059B9F&soft_id=21&timestamp=1623990697&user_id=2128572728&ver=210301"},{"key":"shuqispbody15","val":"_public=skinId%3D999%26idfa%3DDB10B647-DE5D-44A2-A1CB-0F5F29289F53%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26umidtoken%3DYMc3CBuROTsDAKhAyCYxY8kR%26user_id%3D2128572728%26sn%3D35B601E2222880D792CC5E7E4C974254B2059B9F%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D05F7C38208B0D45745971C0CED342B2C343353C6%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhone6%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYMc3CBuROTsDAKhAyCYxY8kR%26utype%3Dpre_vip%26sdk%3D13.3&deliveryId=525&key=sq_app_ad&miniWua=HHnB_Y5kGqe9TI6yAyt/dwAcK4BK7NCCFUFCv2NcxkCcGiGI%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=626&sign=BEEEA333E2C3C6EB28EB1ACD8805E258&timestamp=1623990757&userId=2128572728&user_id=2128572728&wua=HIVW_4SPlaNMwnfH4f3BMM5HhLGlNfmz04OhiRXdSVjOaHFPRZqLFMt2ASesQzGhU2WX0rgXG9glm%2BHVtF8dsBcx0dDKsyxMdpgNIGEfNj1kUzZya/HOxBJvkXqVun4CCbwACl%2BzLOsFjBC7yRdyMBp34dL6uxEI%2BFYwi6tm05lm5GO2hAKRht3E9y2qLw4QCP0yMvxPYJ8k3dYWCsqBAfgRVOteH33kjJg2/5XqB6n0SOrg%3D"},{"key":"shuqiscbody15","val":"_public=skinId%253D999%2526idfa%253DDB10B647-DE5D-44A2-A1CB-0F5F29289F53%2526ustatus%253D0%2526first_placeid%253D111111%2526net_env%253D4g%2526umidtoken%253DYMc3CBuROTsDAKhAyCYxY8kR%2526user_id%253D2128572728%2526sn%253D35B601E2222880D792CC5E7E4C974254B2059B9F%2526placeid%253D111111%2526msv%253D8.0.0%2526brand%253DApple%2526imei%253D05F7C38208B0D45745971C0CED342B2C343353C6%2526skinVersionPrefix%253D1%2526appVer%253D4.3.6.0%2526skinActiveColor%253D0F9970%2526manufacturer%253DApple%2526skinColor%253D23B383%2526platform%253DiOS%2526ver%253D210301%2526mod%253DiPhone6%2526statusBarHeight%253D44.000000%2526skinVersion%253D1%2526wh%253D1242x2688%2526soft_id%253D21%2526utdid%253DYMc3CBuROTsDAKhAyCYxY8kR%2526utype%253Dpre_vip%2526sdk%253D13.3&key=and_log&readingList=%5B%7B%22startTime%22%3A1623990702%2C%22readObjType%22%3A1%2C%22attr%22%3A2%2C%22readObjId%22%3A%227711938%22%2C%22readChapterId%22%3A1058790%2C%22readingLen%22%3A42%7D%5D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=49BF059E6ADDC0E7EE3C50E06236510D&timestamp=1623990744&user_id=2128572728"},{"key":"shuqiydbody15","val":"_public=skinId%3D999%26idfa%3DDB10B647-DE5D-44A2-A1CB-0F5F29289F53%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26umidtoken%3DYMc3CBuROTsDAKhAyCYxY8kR%26user_id%3D2128572728%26sn%3D35B601E2222880D792CC5E7E4C974254B2059B9F%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D05F7C38208B0D45745971C0CED342B2C343353C6%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhone6%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYMc3CBuROTsDAKhAyCYxY8kR%26utype%3Dpre_vip%26sdk%3D13.3&deliveryId=707&key=sq_app_ad&miniWua=HHnB_vAFwAycIpe0Ol5tkmCwPJiSsP6elCw619O6roIpu1Yw%3D&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=678&sign=5355D52E66D72609312B47CA0BFAF024&timestamp=1623990738&userId=2128572728&wua=HIVW_rttHYYokj1wR0O7T2p%2BrKr535h9q8Rk%2Bwf11RSBdztzJTGX46F95ZQvPkbkxp2nYBQ12Tf3%2BK%2BARiQCORsISe6tTlnsoC1h1zYDx6QCUHrQ90X2NBpxxfE/3g7vaJzSExGis9eU%2B1BaW/I19jRObQ4DWM0Ywr9JkFYH6EJMW1brYA9qvPTbtcOCAK/W%2ByOxrlznbPD7LBEIoSvzPm2LbEqvslPGtTInlMGL3RJiIfjY%3D"},{"key":"shuqiqdbody15","val":"clientTimestamp=1623990751&position=501&userId=2128572728&signInType=1&wua=HIVW_R3dzfx8eIaiMXUZ55iakCyncMmPvZmW27ptKf6bCY2FNd5c1YjbOjYVLwLBigIpoBfIsdwhHhqI9LUOVe5RPBS6nG1C6NbkCVblSIfxjX%2BAo75aaTUVYsLdS0IBwHDtT0Zw1cRoWqnym9Q1tTztzxbqfA0h1fhvyDvvw0FrveIlI5IGnMfg%2FzG3rNfHc62vfhAyTm73%2FVt1PYQtBZXtT75WzHPbQNphMEsVqmnch0ck%3D&ua=&miniWua=HHnB_zT1nFRy9ZMlkwmRYO7Y%2FLKvFZF0Rbux1b%2BA%2FC1PX7hk%3D&umidtoken=YMc3CBuROTsDAKhAyCYxY8kR&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&sign=ec20fc8937f46e87579f21fd91e303fe&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.3%26utdid%3DYMc3CBuROTsDAKhAyCYxY8kR%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2128572728%26sn%3D35B601E2222880D792CC5E7E4C974254B2059B9F%26umidtoken%3DYMc3CBuROTsDAKhAyCYxY8kR%26msv%3D8.0.0%26brand%3DApple%26imei%3D05F7C38208B0D45745971C0CED342B2C343353C6%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone6%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DDB10B647-DE5D-44A2-A1CB-0F5F29289F53"},{"key":"shuqirwbody15","val":""},{"key":"shuqifxbody15","val":""},{"key":"shuqisprwurl15","val":"https://ocean.shuqireader.com/api/ad/adserver/v1/api/getAdInfo?appVer=4.3.6.0&placeId=111111&platform=iOS&requestSrc=h5&resourceId=626&timestamp=1623990798&user_id=2128572728&sqSv=1.0&sign=f7bf1d05a8c970d74d28e81bba8f19aa&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.3%26utdid%3DYMc3CBuROTsDAKhAyCYxY8kR%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2128572728%26sn%3D35B601E2222880D792CC5E7E4C974254B2059B9F%26umidtoken%3DYMc3CBuROTsDAKhAyCYxY8kR%26msv%3D8.0.0%26brand%3DApple%26imei%3D05F7C38208B0D45745971C0CED342B2C343353C6%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone6%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DDB10B647-DE5D-44A2-A1CB-0F5F29289F53"},{"key":"shuqijlbody15","val":"requestSrc=h5&userId=2128572728&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1623990764&sqSv=1.0&sign=b3137c8998f2e7efbe67293dd939ee76&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.3%26utdid%3DYMc3CBuROTsDAKhAyCYxY8kR%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2128572728%26sn%3D35B601E2222880D792CC5E7E4C974254B2059B9F%26umidtoken%3DYMc3CBuROTsDAKhAyCYxY8kR%26msv%3D8.0.0%26brand%3DApple%26imei%3D05F7C38208B0D45745971C0CED342B2C343353C6%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone6%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DDB10B647-DE5D-44A2-A1CB-0F5F29289F53"},{"key":"shuqisqjlbody15","val":"src=&userId=2128572728&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1623990754&sqSv=1.0&sign=fa9e8643b38209525c78fe5b8e322acb&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.3%26utdid%3DYMc3CBuROTsDAKhAyCYxY8kR%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2128572728%26sn%3D35B601E2222880D792CC5E7E4C974254B2059B9F%26umidtoken%3DYMc3CBuROTsDAKhAyCYxY8kR%26msv%3D8.0.0%26brand%3DApple%26imei%3D05F7C38208B0D45745971C0CED342B2C343353C6%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone6%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DDB10B647-DE5D-44A2-A1CB-0F5F29289F53"},{"key":"shuqicjyurl15","val":"https://ocean.shuqireader.com/api/activity/activity/v1/lottery/info?timestamp=1623990801&userId=2128572728&activityId=311&sqSv=1.0&sign=20a84c53310499e4a67b05db11d00367&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.3%26utdid%3DYMc3CBuROTsDAKhAyCYxY8kR%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2128572728%26sn%3D35B601E2222880D792CC5E7E4C974254B2059B9F%26umidtoken%3DYMc3CBuROTsDAKhAyCYxY8kR%26msv%3D8.0.0%26brand%3DApple%26imei%3D05F7C38208B0D45745971C0CED342B2C343353C6%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone6%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DDB10B647-DE5D-44A2-A1CB-0F5F29289F53"},{"key":"shuqicjcsbody15","val":"_public=skinId%3D999%26idfa%3DDB10B647-DE5D-44A2-A1CB-0F5F29289F53%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26umidtoken%3DYMc3CBuROTsDAKhAyCYxY8kR%26user_id%3D2128572728%26sn%3D35B601E2222880D792CC5E7E4C974254B2059B9F%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D05F7C38208B0D45745971C0CED342B2C343353C6%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhone6%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYMc3CBuROTsDAKhAyCYxY8kR%26utype%3Dpre_vip%26sdk%3D13.3&deliveryId=711&key=sq_app_ad&miniWua=HHnB_EROFAaPcKAfNAQSeZtShyxwMf7h4/hbnRFE0K3N1UQ8%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=703&sign=A104D73DD5E9F1AC35C957D3A6DEA53C&timestamp=1623990774&userId=2128572728&user_id=2128572728&wua=HIVW_gRLdyUTEgG/sRfmV9e/2ewZVi/7sYbTf8ByFITLK3QoccpiCbDkEeICJ5m3KyguJlJ7frqhDnKUpwZpq8VVtSbX2FaHtaceL3koZkBIqrl34smOucyNdv/9PMQHjfOLRpoiiUQxqWQ3nnXneauS1wnRNnZlGc16YQendxDiAsQLUASC2Vw/Z5%2BIGJ882kIAoo1p2%2Bv3iOV7ennnC025KauN3QdPOXHghse%2BA541B8Wc%3D"},{"key":"shuqicjbody15","val":"wua=HIVW_wHJKf3f84Z%2BQacjs9q%2BNRMRfiUQSOm%2B5CNUUCFzW7m4Atqx%2F518WAWXj40B9bLay%2F9VIKV%2BNiRKupDl%2B%2BU3BjL8rrVCWGAHOZwli3CxSg8UubeSQbWikaJthf1cQ%2B5%2BZhIZoFUreMzzsiB%2BArh1D6LInRiK1As7DHnyA6clXywDXGlRhXLB4rbq7QAkcV%2FYkHDYZG7mCi%2FvnrECu5Erwpz9aobMqDav53uOEyHYUFBY%3D&ua=&userId=2128572728&umidtoken=YMc3CBuROTsDAKhAyCYxY8kR&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&asac=2A20C07RJ9F51AOEFSNHDR&timestamp=1623990776&activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&sqSv=1.0&sign=5fb4dff89c526272a4607f6789abb446&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.3%26utdid%3DYMc3CBuROTsDAKhAyCYxY8kR%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2128572728%26sn%3D35B601E2222880D792CC5E7E4C974254B2059B9F%26umidtoken%3DYMc3CBuROTsDAKhAyCYxY8kR%26msv%3D8.0.0%26brand%3DApple%26imei%3D05F7C38208B0D45745971C0CED342B2C343353C6%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone6%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DDB10B647-DE5D-44A2-A1CB-0F5F29289F53"},{"key":"shuqijsspbody15","val":""},{"key":"shuqijsydurl15","val":""},{"key":"shuqijsydbody15","val":""},{"key":"shuqijsqdbody15","val":""},{"key":"shuqijsqdspyurl15","val":""},{"key":"shuqijsqdspbody15","val":""},{"key":"shuqijsrwbody15","val":""},{"key":"shuqijsfxbody15","val":""},{"key":"shuqijsbookurl15","val":""},{"key":"shuqijsbookbody15","val":""},{"key":"shuqijssprwurl15","val":""},{"key":"shuqiuserurl16","val":""},{"key":"shuqisyurl16","val":""},{"key":"shuqisybody16","val":""},{"key":"shuqispbody16","val":""},{"key":"shuqiscbody16","val":""},{"key":"shuqiydbody16","val":""},{"key":"shuqiqdbody16","val":""},{"key":"shuqirwbody16","val":""},{"key":"shuqifxbody16","val":""},{"key":"shuqisprwurl16","val":""},{"key":"shuqijlbody16","val":""},{"key":"shuqisqjlbody16","val":""},{"key":"shuqicjyurl16","val":""},{"key":"shuqicjcsbody16","val":""},{"key":"shuqicjbody16","val":""},{"key":"shuqijsspbody16","val":""},{"key":"shuqijsydurl16","val":""},{"key":"shuqijsydbody16","val":""},{"key":"shuqijsqdbody16","val":""},{"key":"shuqijsqdspyurl16","val":""},{"key":"shuqijsqdspbody16","val":""},{"key":"shuqijsrwbody16","val":""},{"key":"shuqijsfxbody16","val":""},{"key":"shuqijsbookurl16","val":""},{"key":"shuqijsbookbody16","val":""},{"key":"shuqijssprwurl16","val":""},{"key":"shuqiuserurl17","val":""},{"key":"shuqisyurl17","val":""},{"key":"shuqisybody17","val":""},{"key":"shuqispbody17","val":""},{"key":"shuqiscbody17","val":""},{"key":"shuqiydbody17","val":""},{"key":"shuqiqdbody17","val":""},{"key":"shuqirwbody17","val":""},{"key":"shuqifxbody17","val":""},{"key":"shuqisprwurl17","val":""},{"key":"shuqijlbody17","val":""},{"key":"shuqisqjlbody17","val":""},{"key":"shuqicjyurl17","val":""},{"key":"shuqicjcsbody17","val":""},{"key":"shuqicjbody17","val":""},{"key":"shuqijsspbody17","val":""},{"key":"shuqijsydurl17","val":""},{"key":"shuqijsydbody17","val":""},{"key":"shuqijsqdbody17","val":""},{"key":"shuqijsqdspyurl17","val":""},{"key":"shuqijsqdspbody17","val":""},{"key":"shuqijsrwbody17","val":""},{"key":"shuqijsfxbody17","val":""},{"key":"shuqijsbookurl17","val":""},{"key":"shuqijsbookbody17","val":""},{"key":"shuqijssprwurl17","val":""},{"key":"shuqiuserurl18","val":""},{"key":"shuqisyurl18","val":""},{"key":"shuqisybody18","val":""},{"key":"shuqispbody18","val":""},{"key":"shuqiscbody18","val":""},{"key":"shuqiydbody18","val":""},{"key":"shuqiqdbody18","val":""},{"key":"shuqirwbody18","val":""},{"key":"shuqifxbody18","val":""},{"key":"shuqisprwurl18","val":""},{"key":"shuqijlbody18","val":""},{"key":"shuqisqjlbody18","val":""},{"key":"shuqicjyurl18","val":""},{"key":"shuqicjcsbody18","val":""},{"key":"shuqicjbody18","val":""},{"key":"shuqijsspbody18","val":""},{"key":"shuqijsydurl18","val":""},{"key":"shuqijsydbody18","val":""},{"key":"shuqijsqdbody18","val":""},{"key":"shuqijsqdspyurl18","val":""},{"key":"shuqijsqdspbody18","val":""},{"key":"shuqijsrwbody18","val":""},{"key":"shuqijsfxbody18","val":""},{"key":"shuqijsbookurl18","val":""},{"key":"shuqijsbookbody18","val":""},{"key":"shuqijssprwurl18","val":""},{"key":"shuqiuserurl19","val":""},{"key":"shuqisyurl19","val":""},{"key":"shuqisybody19","val":""},{"key":"shuqispbody19","val":""},{"key":"shuqiscbody19","val":""},{"key":"shuqiydbody19","val":""},{"key":"shuqiqdbody19","val":""},{"key":"shuqirwbody19","val":""},{"key":"shuqifxbody19","val":""},{"key":"shuqisprwurl19","val":""},{"key":"shuqijlbody19","val":""},{"key":"shuqisqjlbody19","val":""},{"key":"shuqicjyurl19","val":""},{"key":"shuqicjcsbody19","val":""},{"key":"shuqicjbody19","val":""},{"key":"shuqijsspbody19","val":""},{"key":"shuqijsydurl19","val":""},{"key":"shuqijsydbody19","val":""},{"key":"shuqijsqdbody19","val":""},{"key":"shuqijsqdspyurl19","val":""},{"key":"shuqijsqdspbody19","val":""},{"key":"shuqijsrwbody19","val":""},{"key":"shuqijsfxbody19","val":""},{"key":"shuqijsbookurl19","val":""},{"key":"shuqijsbookbody19","val":""},{"key":"shuqijssprwurl19","val":""},{"key":"shuqiuserurl20","val":""},{"key":"shuqisyurl20","val":""},{"key":"shuqisybody20","val":""},{"key":"shuqispbody20","val":""},{"key":"shuqiscbody20","val":""},{"key":"shuqiydbody20","val":""},{"key":"shuqiqdbody20","val":""},{"key":"shuqirwbody20","val":""},{"key":"shuqifxbody20","val":""},{"key":"shuqisprwurl20","val":""},{"key":"shuqijlbody20","val":""},{"key":"shuqisqjlbody20","val":""},{"key":"shuqicjyurl20","val":""},{"key":"shuqicjcsbody20","val":""},{"key":"shuqicjbody20","val":""},{"key":"shuqijsspbody20","val":""},{"key":"shuqijsydurl20","val":""},{"key":"shuqijsydbody20","val":""},{"key":"shuqijsqdbody20","val":""},{"key":"shuqijsqdspyurl20","val":""},{"key":"shuqijsqdspbody20","val":""},{"key":"shuqijsrwbody20","val":""},{"key":"shuqijsfxbody20","val":""},{"key":"shuqijsbookurl20","val":""},{"key":"shuqijsbookbody20","val":""},{"key":"shuqijssprwurl20","val":""}],"sessions":[],"isLoaded":true};
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
