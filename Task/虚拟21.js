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
const COOKIE ={"id":"shuqi","name":"书旗小说APP","keys":["shuqiuserurl","shuqisyurl","shuqisybody","shuqispbody","shuqiscbody","shuqiydbody","shuqiqdbody","shuqirwbody","shuqifxbody","shuqisprwurl","shuqijlbody","shuqisqjlbody","shuqicjyurl","shuqicjcsbody","shuqicjbody","shuqijsspbody","shuqijsydurl","shuqijsydbody","shuqijsqdbody","shuqijsqdspyurl","shuqijsqdspbody","shuqijsrwbody","shuqijsfxbody","shuqijsbookurl","shuqijsbookbody","shuqijssprwurl","shuqiuserurl2","shuqisyurl2","shuqisybody2","shuqispbody2","shuqiscbody2","shuqiydbody2","shuqiqdbody2","shuqirwbody2","shuqifxbody2","shuqisprwurl2","shuqijlbody2","shuqisqjlbody2","shuqicjyurl2","shuqicjcsbody2","shuqicjbody2","shuqijsspbody2","shuqijsydurl2","shuqijsydbody2","shuqijsqdbody2","shuqijsqdspyurl2","shuqijsqdspbody2","shuqijsrwbody2","shuqijsfxbody2","shuqijsbookurl2","shuqijsbookbody2","shuqijssprwurl2","shuqiuserurl3","shuqisyurl3","shuqisybody3","shuqispbody3","shuqiscbody3","shuqiydbody3","shuqiqdbody3","shuqirwbody3","shuqifxbody3","shuqisprwurl3","shuqijlbody3","shuqisqjlbody3","shuqicjyurl3","shuqicjcsbody3","shuqicjbody3","shuqijsspbody3","shuqijsydurl3","shuqijsydbody3","shuqijsqdbody3","shuqijsqdspyurl3","shuqijsqdspbody3","shuqijsrwbody3","shuqijsfxbody3","shuqijsbookurl3","shuqijsbookbody3","shuqijssprwurl3","shuqiuserurl4","shuqisyurl4","shuqisybody4","shuqispbody4","shuqiscbody4","shuqiydbody4","shuqiqdbody4","shuqirwbody4","shuqifxbody4","shuqisprwurl4","shuqijlbody4","shuqisqjlbody4","shuqicjyurl4","shuqicjcsbody4","shuqicjbody4","shuqijsspbody4","shuqijsydurl4","shuqijsydbody4","shuqijsqdbody4","shuqijsqdspyurl4","shuqijsqdspbody4","shuqijsrwbody4","shuqijsfxbody4","shuqijsbookurl4","shuqijsbookbody4","shuqijssprwurl4","shuqiuserurl5","shuqisyurl5","shuqisybody5","shuqispbody5","shuqiscbody5","shuqiydbody5","shuqiqdbody5","shuqirwbody5","shuqifxbody5","shuqisprwurl5","shuqijlbody5","shuqisqjlbody5","shuqicjyurl5","shuqicjcsbody5","shuqicjbody5","shuqijsspbody5","shuqijsydurl5","shuqijsydbody5","shuqijsqdbody5","shuqijsqdspyurl5","shuqijsqdspbody5","shuqijsrwbody5","shuqijsfxbody5","shuqijsbookurl5","shuqijsbookbody5","shuqijssprwurl5","shuqiuserurl6","shuqisyurl6","shuqisybody6","shuqispbody6","shuqiscbody6","shuqiydbody6","shuqiqdbody6","shuqirwbody6","shuqifxbody6","shuqisprwurl6","shuqijlbody6","shuqisqjlbody6","shuqicjyurl6","shuqicjcsbody6","shuqicjbody6","shuqijsspbody6","shuqijsydurl6","shuqijsydbody6","shuqijsqdbody6","shuqijsqdspyurl6","shuqijsqdspbody6","shuqijsrwbody6","shuqijsfxbody6","shuqijsbookurl6","shuqijsbookbody6","shuqijssprwurl6","shuqiuserurl7","shuqisyurl7","shuqisybody7","shuqispbody7","shuqiscbody7","shuqiydbody7","shuqiqdbody7","shuqirwbody7","shuqifxbody7","shuqisprwurl7","shuqijlbody7","shuqisqjlbody7","shuqicjyurl7","shuqicjcsbody7","shuqicjbody7","shuqijsspbody7","shuqijsydurl7","shuqijsydbody7","shuqijsqdbody7","shuqijsqdspyurl7","shuqijsqdspbody7","shuqijsrwbody7","shuqijsfxbody7","shuqijsbookurl7","shuqijsbookbody7","shuqijssprwurl7","shuqiuserurl8","shuqisyurl8","shuqisybody8","shuqispbody8","shuqiscbody8","shuqiydbody8","shuqiqdbody8","shuqirwbody8","shuqifxbody8","shuqisprwurl8","shuqijlbody8","shuqisqjlbody8","shuqicjyurl8","shuqicjcsbody8","shuqicjbody8","shuqijsspbody8","shuqijsydurl8","shuqijsydbody8","shuqijsqdbody8","shuqijsqdspyurl8","shuqijsqdspbody8","shuqijsrwbody8","shuqijsfxbody8","shuqijsbookurl8","shuqijsbookbody8","shuqijssprwurl8","shuqiuserurl9","shuqisyurl9","shuqisybody9","shuqispbody9","shuqiscbody9","shuqiydbody9","shuqiqdbody9","shuqirwbody9","shuqifxbody9","shuqisprwurl9","shuqijlbody9","shuqisqjlbody9","shuqicjyurl9","shuqicjcsbody9","shuqicjbody9","shuqijsspbody9","shuqijsydurl9","shuqijsydbody9","shuqijsqdbody9","shuqijsqdspyurl9","shuqijsqdspbody9","shuqijsrwbody9","shuqijsfxbody9","shuqijsbookurl9","shuqijsbookbody9","shuqijssprwurl9","shuqiuserurl10","shuqisyurl10","shuqisybody10","shuqispbody10","shuqiscbody10","shuqiydbody10","shuqiqdbody10","shuqirwbody10","shuqifxbody10","shuqisprwurl10","shuqijlbody10","shuqisqjlbody10","shuqicjyurl10","shuqicjcsbody10","shuqicjbody10","shuqijsspbody10","shuqijsydurl10","shuqijsydbody10","shuqijsqdbody10","shuqijsqdspyurl10","shuqijsqdspbody10","shuqijsrwbody10","shuqijsfxbody10","shuqijsbookurl10","shuqijsbookbody10","shuqijssprwurl10","shuqiuserurl11","shuqisyurl11","shuqisybody11","shuqispbody11","shuqiscbody11","shuqiydbody11","shuqiqdbody11","shuqirwbody11","shuqifxbody11","shuqisprwurl11","shuqijlbody11","shuqisqjlbody11","shuqicjyurl11","shuqicjcsbody11","shuqicjbody11","shuqijsspbody11","shuqijsydurl11","shuqijsydbody11","shuqijsqdbody11","shuqijsqdspyurl11","shuqijsqdspbody11","shuqijsrwbody11","shuqijsfxbody11","shuqijsbookurl11","shuqijsbookbody11","shuqijssprwurl11","shuqiuserurl12","shuqisyurl12","shuqisybody12","shuqispbody12","shuqiscbody12","shuqiydbody12","shuqiqdbody12","shuqirwbody12","shuqifxbody12","shuqisprwurl12","shuqijlbody12","shuqisqjlbody12","shuqicjyurl12","shuqicjcsbody12","shuqicjbody12","shuqijsspbody12","shuqijsydurl12","shuqijsydbody12","shuqijsqdbody12","shuqijsqdspyurl12","shuqijsqdspbody12","shuqijsrwbody12","shuqijsfxbody12","shuqijsbookurl12","shuqijsbookbody12","shuqijssprwurl12","shuqiuserurl13","shuqisyurl13","shuqisybody13","shuqispbody13","shuqiscbody13","shuqiydbody13","shuqiqdbody13","shuqirwbody13","shuqifxbody13","shuqisprwurl13","shuqijlbody13","shuqisqjlbody13","shuqicjyurl13","shuqicjcsbody13","shuqicjbody13","shuqijsspbody13","shuqijsydurl13","shuqijsydbody13","shuqijsqdbody13","shuqijsqdspyurl13","shuqijsqdspbody13","shuqijsrwbody13","shuqijsfxbody13","shuqijsbookurl13","shuqijsbookbody13","shuqijssprwurl13","shuqiuserurl14","shuqisyurl14","shuqisybody14","shuqispbody14","shuqiscbody14","shuqiydbody14","shuqiqdbody14","shuqirwbody14","shuqifxbody14","shuqisprwurl14","shuqijlbody14","shuqisqjlbody14","shuqicjyurl14","shuqicjcsbody14","shuqicjbody14","shuqijsspbody14","shuqijsydurl14","shuqijsydbody14","shuqijsqdbody14","shuqijsqdspyurl14","shuqijsqdspbody14","shuqijsrwbody14","shuqijsfxbody14","shuqijsbookurl14","shuqijsbookbody14","shuqijssprwurl14","shuqiuserurl15","shuqisyurl15","shuqisybody15","shuqispbody15","shuqiscbody15","shuqiydbody15","shuqiqdbody15","shuqirwbody15","shuqifxbody15","shuqisprwurl15","shuqijlbody15","shuqisqjlbody15","shuqicjyurl15","shuqicjcsbody15","shuqicjbody15","shuqijsspbody15","shuqijsydurl15","shuqijsydbody15","shuqijsqdbody15","shuqijsqdspyurl15","shuqijsqdspbody15","shuqijsrwbody15","shuqijsfxbody15","shuqijsbookurl15","shuqijsbookbody15","shuqijssprwurl15","shuqiuserurl16","shuqisyurl16","shuqisybody16","shuqispbody16","shuqiscbody16","shuqiydbody16","shuqiqdbody16","shuqirwbody16","shuqifxbody16","shuqisprwurl16","shuqijlbody16","shuqisqjlbody16","shuqicjyurl16","shuqicjcsbody16","shuqicjbody16","shuqijsspbody16","shuqijsydurl16","shuqijsydbody16","shuqijsqdbody16","shuqijsqdspyurl16","shuqijsqdspbody16","shuqijsrwbody16","shuqijsfxbody16","shuqijsbookurl16","shuqijsbookbody16","shuqijssprwurl16","shuqiuserurl17","shuqisyurl17","shuqisybody17","shuqispbody17","shuqiscbody17","shuqiydbody17","shuqiqdbody17","shuqirwbody17","shuqifxbody17","shuqisprwurl17","shuqijlbody17","shuqisqjlbody17","shuqicjyurl17","shuqicjcsbody17","shuqicjbody17","shuqijsspbody17","shuqijsydurl17","shuqijsydbody17","shuqijsqdbody17","shuqijsqdspyurl17","shuqijsqdspbody17","shuqijsrwbody17","shuqijsfxbody17","shuqijsbookurl17","shuqijsbookbody17","shuqijssprwurl17","shuqiuserurl18","shuqisyurl18","shuqisybody18","shuqispbody18","shuqiscbody18","shuqiydbody18","shuqiqdbody18","shuqirwbody18","shuqifxbody18","shuqisprwurl18","shuqijlbody18","shuqisqjlbody18","shuqicjyurl18","shuqicjcsbody18","shuqicjbody18","shuqijsspbody18","shuqijsydurl18","shuqijsydbody18","shuqijsqdbody18","shuqijsqdspyurl18","shuqijsqdspbody18","shuqijsrwbody18","shuqijsfxbody18","shuqijsbookurl18","shuqijsbookbody18","shuqijssprwurl18","shuqiuserurl19","shuqisyurl19","shuqisybody19","shuqispbody19","shuqiscbody19","shuqiydbody19","shuqiqdbody19","shuqirwbody19","shuqifxbody19","shuqisprwurl19","shuqijlbody19","shuqisqjlbody19","shuqicjyurl19","shuqicjcsbody19","shuqicjbody19","shuqijsspbody19","shuqijsydurl19","shuqijsydbody19","shuqijsqdbody19","shuqijsqdspyurl19","shuqijsqdspbody19","shuqijsrwbody19","shuqijsfxbody19","shuqijsbookurl19","shuqijsbookbody19","shuqijssprwurl19","shuqiuserurl20","shuqisyurl20","shuqisybody20","shuqispbody20","shuqiscbody20","shuqiydbody20","shuqiqdbody20","shuqirwbody20","shuqifxbody20","shuqisprwurl20","shuqijlbody20","shuqisqjlbody20","shuqicjyurl20","shuqicjcsbody20","shuqicjbody20","shuqijsspbody20","shuqijsydurl20","shuqijsydbody20","shuqijsqdbody20","shuqijsqdspyurl20","shuqijsqdspbody20","shuqijsrwbody20","shuqijsfxbody20","shuqijsbookurl20","shuqijsbookbody20","shuqijssprwurl20"],"author":"@ziye","settings":[{"id":"shuqiSuffix","name":"当前账号","val":"13","type":"number","desc":"当前抓取ck记录的账号序号，如：1、2、3、"},{"id":"shuqiCount","name":"账号个数","val":"15","type":"number","desc":"指定任务最多跑几个账号，根据抓取的账号数据个数来设值"},{"id":"shuqiXH","name":"循环获取CK","val":"1","type":"number","desc":"0关闭 1开启,默认关闭"},{"id":"shuqiSC","name":"单刷时长控制","val":"0","type":"number","desc":"0关闭 1开启,默认关闭"},{"id":"shuqiTXTX","name":"提现提醒","val":"10","type":"number","desc":"0关闭 设置余额大于多少提醒"},{"id":"shuqinotifyttt","name":"推送控制","val":"1","type":"number","desc":"0关闭，1推送,默认12点以及23点推送"},{"id":"shuqinotifyInterval","name":"通知控制","val":"2","type":"number","desc":"0关闭，1为 所有通知，2为 12，23 点通知，3为 6，12，18，23 点通知 "},{"id":"shuqiMinutes","name":"推送-通知 分钟控制","val":"59","type":"number","desc":"推送以及通知控制在什么分钟段，可设置0-59,默认0到10"}],"repo":"https://cdn.jsdelivr.net/gh/ziye888/JavaScript@main/Task/shuqi.js","icons":["https://cdn.jsdelivr.net/gh/ziye888/JavaScript@main/Task/shuqi.png","https://cdn.jsdelivr.net/gh/ziye888/JavaScript@main/Task/shuqi.png"],"script":"https://cdn.jsdelivr.net/gh/ziye888/JavaScript@main/Task/shuqi.js","icon":"https://cdn.jsdelivr.net/gh/ziye888/JavaScript@main/Task/shuqi.png","favIcon":"mdi-star","favIconColor":"primary","datas":[{"key":"shuqiuserurl","val":"https://ocean.shuqireader.com/api/jaccount/accountapi/v1/sapi/account/getBindinfo?userId=2130460976&sqSv=1.0&timestamp=1624087926&sign=99bf3709d520277d82e08c53250850c1&key=sq_h5_gateway"},{"key":"shuqisyurl","val":"https://render.shuqireader.com/load/resource?sdk=13.1&utdid=YM2c2htc5oADAMYmr11f8MVR&ustatus=0&first_placeid=111111&net_env=wifi&placeid=111111&user_id=2130460976&sn=95317DDDAB7755151204BD587F60913364D5F055&umidtoken=YM2c2htc5oADAMYmr11f8MVR&msv=8.0.0&brand=Apple&imei=EF9D745BF160528B43C2CC03DFBAC1C9E4A2F9F1&skinVersionPrefix=1&appVer=4.3.0.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=iOS&ver=210107&mod=iPhone6&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=47C77F53-628A-443E-8CCE-1EE03FF24242"},{"key":"shuqisybody","val":"appVer=4.3.0.0&imei=EF9D745BF160528B43C2CC03DFBAC1C9E4A2F9F1&isNewUser=1&params=%7B%22resources%22%3A%7B%22ShuqiVipEntry%22%3A%7B%7D%2C%22personalCardConfig%22%3A%7B%7D%7D%7D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=b610f1e7559c8ceac06933ae004abc29&sn=95317DDDAB7755151204BD587F60913364D5F055&soft_id=21&timestamp=1624087877&user_id=2130460976&ver=210107"},{"key":"shuqispbody","val":"_public=utype%3Dpre_vip%26idfa%3D47C77F53-628A-443E-8CCE-1EE03FF24242%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26umidtoken%3DYM2c2htc5oADAMYmr11f8MVR%26user_id%3D2130460976%26sn%3D95317DDDAB7755151204BD587F60913364D5F055%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3DEF9D745BF160528B43C2CC03DFBAC1C9E4A2F9F1%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhone6%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26utdid%3DYM2c2htc5oADAMYmr11f8MVR%26soft_id%3D21%26sdk%3D13.1&deliveryId=525&key=sq_app_ad&miniWua=HHnB_XYoc0TZQ7VbAUXDxJy/s2AE393yD54P3qUddo8vH1h4%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=626&sign=E2B64F2D459A8D07BFA9DBCC14D6767F&timestamp=1624089310&userId=2130460976&user_id=2130460976&wua=HIVW_i5gMN5l8R9BmJg43vs4iaWU5JiN7wywPZGks5XFGo7RUPf/EepDa9h9nsDkgo7ghGIQkekbjS/40Y3XrEzkEiEEOYhboKlWGhzfcfOzVdOuq2iDdhqWesSzIJ0b/e2Bj0Jdqw7JtU6exO61kJL6YTZR2nnsWjQxCmlVk7aaGBXRGXraCZs4pXcD0wsyHXKKVCR0UvOICPQszq2am9XBd%2BuwxA8SL9aamm5jTD5QRvcw%3D"},{"key":"shuqiscbody","val":""},{"key":"shuqiydbody","val":""},{"key":"shuqiqdbody","val":"clientTimestamp=1624087887&position=501&userId=2130460976&signInType=1&wua=HIVW_4MEHflEnZFOVy4r5GhTQMpig1Nii2PJnnlzc1t7u2OaDvq9yYAg%2BSW64LNHGzv93S0yWzM4PuzuZSnwrydej91W6uvca99E8V3s7S6ewJsVNO3NP%2B8d80QIQ%2FosiAZQS3jbJ2fm2d4e9FGFjpwST4HNEHJTCrKY8Pej6Cbh9Ikx9sB9FdBZh9WrFilG2lmQjCM%2F98Xbr13WB2%2FURRg63XxQxbfAKOhCf07VsHntFh9CQf8Bj7APBv4UGkHcIiCWDzBAzQ3pltjqDkjt4wQ0OQlkEhqjwRiZvGfXYjChhiXYdCKTR%2Fxyv9wO5IXB%2BQA2O6rJyb2pJJt8z7RqSaNcZIlmKJg4nzzRFxWgOmhbQ4HwnkHK%2BGvdHpA3i%2F6KcnRbh&ua=&miniWua=HHnB_%2BB5PrPCTTH%2Bq9u%2Fniogo%2FgNaBul6UfGb2pJdhkX9xv%2F3UA2daNl94RuD89RlxBcbMxPAR5AYiqwSM3mxoAXcOP2xWE2MvGCiRG7zo02dTKfPzfL2rpJT3eXSK6r2blc9&umidtoken=YM2c2htc5oADAMYmr11f8MVR&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&sign=9cc3ce31b20ac11d3a8f9404469cca4a&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.1%26utdid%3DYM2c2htc5oADAMYmr11f8MVR%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2130460976%26sn%3D95317DDDAB7755151204BD587F60913364D5F055%26umidtoken%3DYM2c2htc5oADAMYmr11f8MVR%26msv%3D8.0.0%26brand%3DApple%26imei%3DEF9D745BF160528B43C2CC03DFBAC1C9E4A2F9F1%26skinVersionPrefix%3D1%26appVer%3D4.3.0.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210107%26mod%3DiPhone6%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D47C77F53-628A-443E-8CCE-1EE03FF24242"},{"key":"shuqirwbody","val":"serviceWorkerOn=1&stopPullRefresh=1&upf=20559&from=ShuqiTab&sdk=13.1&utdid=YM2c2htc5oADAMYmr11f8MVR&ustatus=0&first_placeid=111111&net_env=wifi&placeid=111111&user_id=2130460976&sn=95317DDDAB7755151204BD587F60913364D5F055&umidtoken=YM2c2htc5oADAMYmr11f8MVR&msv=8.0.0&brand=Apple&imei=EF9D745BF160528B43C2CC03DFBAC1C9E4A2F9F1&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=1&ver=210301&mod=iPhone6&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=47C77F53-628A-443E-8CCE-1EE03FF24242&params=%7B%22resources%22%3A%7B%22ShuqiBsDailyTask%22%3A%7B%7D%7D%7D&userId=2130460976&placeId=111111&timestamp=1624089314&sqSv=1.0&sign=8ac9eae383ac6fa32dbc7e856c3954f4&key=sq_h5_gateway&_public="},{"key":"shuqifxbody","val":""},{"key":"shuqisprwurl","val":"https://ocean.shuqireader.com/api/ad/adserver/v1/api/getAdInfo?appVer=4.3.0.0&placeId=111111&platform=iOS&requestSrc=h5&resourceId=626&timestamp=1624087925&user_id=2130460976&sqSv=1.0&sign=1864c56b14959e5ed603e126be838e41&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.1%26utdid%3DYM2c2htc5oADAMYmr11f8MVR%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2130460976%26sn%3D95317DDDAB7755151204BD587F60913364D5F055%26umidtoken%3DpP1LBQdLOquojTV6I7akXLntLLf0TyVs%26msv%3D8.0.0%26brand%3DApple%26imei%3DEF9D745BF160528B43C2CC03DFBAC1C9E4A2F9F1%26skinVersionPrefix%3D1%26appVer%3D4.3.0.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210107%26mod%3DiPhone6%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D47C77F53-628A-443E-8CCE-1EE03FF24242"},{"key":"shuqijlbody","val":"requestSrc=h5&userId=2130460976&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624089314&sqSv=1.0&sign=f362cfb8a9738f7c5d0c8f30e7e3849f&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26upf%3D20559%26from%3DShuqiTab%26sdk%3D13.1%26utdid%3DYM2c2htc5oADAMYmr11f8MVR%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2130460976%26sn%3D95317DDDAB7755151204BD587F60913364D5F055%26umidtoken%3DYM2c2htc5oADAMYmr11f8MVR%26msv%3D8.0.0%26brand%3DApple%26imei%3DEF9D745BF160528B43C2CC03DFBAC1C9E4A2F9F1%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone6%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D47C77F53-628A-443E-8CCE-1EE03FF24242"},{"key":"shuqisqjlbody","val":"src=&userId=2130460976&platform=1&appVer=4.3.0.0&placeId=111111&timestamp=1624087891&sqSv=1.0&sign=021ed00218d766a2f4a718f502e016e9&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.1%26utdid%3DYM2c2htc5oADAMYmr11f8MVR%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2130460976%26sn%3D95317DDDAB7755151204BD587F60913364D5F055%26umidtoken%3DYM2c2htc5oADAMYmr11f8MVR%26msv%3D8.0.0%26brand%3DApple%26imei%3DEF9D745BF160528B43C2CC03DFBAC1C9E4A2F9F1%26skinVersionPrefix%3D1%26appVer%3D4.3.0.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210107%26mod%3DiPhone6%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D47C77F53-628A-443E-8CCE-1EE03FF24242"},{"key":"shuqicjyurl","val":"https://ocean.shuqireader.com/api/activity/activity/v1/lottery/info?timestamp=1624087926&userId=2130460976&activityId=311&sqSv=1.0&sign=27f0821f7d34d7ee27326b72b5ada5b6&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.1%26utdid%3DYM2c2htc5oADAMYmr11f8MVR%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2130460976%26sn%3D95317DDDAB7755151204BD587F60913364D5F055%26umidtoken%3DpP1LBQdLOquojTV6I7akXLntLLf0TyVs%26msv%3D8.0.0%26brand%3DApple%26imei%3DEF9D745BF160528B43C2CC03DFBAC1C9E4A2F9F1%26skinVersionPrefix%3D1%26appVer%3D4.3.0.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210107%26mod%3DiPhone6%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D47C77F53-628A-443E-8CCE-1EE03FF24242"},{"key":"shuqicjcsbody","val":"_public=utype%3Dpre_vip%26idfa%3D47C77F53-628A-443E-8CCE-1EE03FF24242%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26umidtoken%3DYM2c2htc5oADAMYmr11f8MVR%26user_id%3D2130460976%26sn%3D95317DDDAB7755151204BD587F60913364D5F055%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3DEF9D745BF160528B43C2CC03DFBAC1C9E4A2F9F1%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhone6%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26utdid%3DYM2c2htc5oADAMYmr11f8MVR%26soft_id%3D21%26sdk%3D13.1&deliveryId=711&key=sq_app_ad&miniWua=HHnB_8BjDmHhKwlrN5tB%2BFwY1tlQ3zM4EHG9uBzGK96uD7U0%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=703&sign=7E08FF7554C788491479A049B3D68E52&timestamp=1624089321&userId=2130460976&user_id=2130460976&wua=HIVW_hMUCOv66tisb9Gyj9K4ukSrJMit6flxs/fu/RU52qGxQ0G0wgOnwLLXMp41v4GUt7uq/Mf0VYrb7GAzH7Bk7r3BFqd/Q8copTIqSB6RHSmGVo7wVbIcY1tomUJzVAoXMkWYPzclNAtjkh%2BqJoH13iTd0UKdYXqKqVP0oKXjBzN4Ow9VwdFdsUHJEmSvpPB1T7yn9L3j4AufjTKC%2BNyoaOT5CisPfGW4eSPU3iyBRxU8%3D"},{"key":"shuqicjbody","val":"wua=HIVW_lMl3nViAyrKWua%2BlV3ahiv2Z7KCUz8cGecf8AzhCspRI1aMISpIsL6cbSxMFDX4JLPaM9%2B82QkeMsDlHXStsoepOkX4P64pNbWAYrxYdCguNk0B0sLzRnV9eA%2BAnkV6GM4daIaTzw%2FqEM7VPTpEOSsYjtHc0f0B8QIV8Avj%2BMH9nN9p4plnyDwKiDDjscsLSqLIdynurmvZVF9IdMWkakn7%2By4e7MuSbl%2BRWHcrDrYI%3D&ua=&userId=2130460976&umidtoken=YM2c2htc5oADAMYmr11f8MVR&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&asac=2A20C07RJ9F51AOEFSNHDR&timestamp=1624089328&activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&sqSv=1.0&sign=a0a6a050dd6e71c4c1eab38dc2607a32&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.1%26utdid%3DYM2c2htc5oADAMYmr11f8MVR%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2130460976%26sn%3D95317DDDAB7755151204BD587F60913364D5F055%26umidtoken%3DYM2c2htc5oADAMYmr11f8MVR%26msv%3D8.0.0%26brand%3DApple%26imei%3DEF9D745BF160528B43C2CC03DFBAC1C9E4A2F9F1%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone6%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D47C77F53-628A-443E-8CCE-1EE03FF24242"},{"key":"shuqijsspbody","val":""},{"key":"shuqijsydurl","val":""},{"key":"shuqijsydbody","val":""},{"key":"shuqijsqdbody","val":""},{"key":"shuqijsqdspyurl","val":""},{"key":"shuqijsqdspbody","val":""},{"key":"shuqijsrwbody","val":""},{"key":"shuqijsfxbody","val":""},{"key":"shuqijsbookurl","val":""},{"key":"shuqijsbookbody","val":""},{"key":"shuqijssprwurl","val":""},{"key":"shuqiuserurl2","val":"https://ocean.shuqireader.com/api/jaccount/accountapi/v1/sapi/account/getBindinfo?userId=2127621746&sqSv=1.0&timestamp=1624087989&sign=a864614bd8e02f527351f7760a8f398d&key=sq_h5_gateway"},{"key":"shuqisyurl2","val":"https://render.shuqireader.com/load/resource?sdk=13.1&utdid=YM1TTKFPG00DAOFIgoTWlyXd&ustatus=0&first_placeid=111111&net_env=4g&placeid=111111&user_id=2127621746&sn=1ADDC3E3DB1E0EA395805D5DAE55E2F1F17A9C40&umidtoken=YM1TTKFPG00DAOFIgoTWlyXd&msv=8.0.0&brand=Apple&imei=DEF285E8BE1C30350C9CFA1FDF65E0194D73B762&skinVersionPrefix=1&appVer=4.3.0.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=iOS&ver=210107&mod=iPodtouch3G&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=BC9C30B6-9993-477A-8A58-F17F4E58B36E"},{"key":"shuqisybody2","val":"appVer=4.3.0.0&imei=DEF285E8BE1C30350C9CFA1FDF65E0194D73B762&isNewUser=1&params=%7B%22resources%22%3A%7B%22ShuqiVipEntry%22%3A%7B%7D%2C%22personalCardConfig%22%3A%7B%7D%7D%7D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=27b24fa1695ce12561ec051ff99f7ba6&sn=1ADDC3E3DB1E0EA395805D5DAE55E2F1F17A9C40&soft_id=21&timestamp=1624087945&user_id=2127621746&ver=210107"},{"key":"shuqispbody2","val":"_public=utype%3Dpre_vip%26idfa%3DBC9C30B6-9993-477A-8A58-F17F4E58B36E%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26umidtoken%3DYM1TTKFPG00DAOFIgoTWlyXd%26user_id%3D2127621746%26sn%3D1ADDC3E3DB1E0EA395805D5DAE55E2F1F17A9C40%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3DDEF285E8BE1C30350C9CFA1FDF65E0194D73B762%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPodtouch3G%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26utdid%3DYM1TTKFPG00DAOFIgoTWlyXd%26soft_id%3D21%26sdk%3D13.1&deliveryId=525&key=sq_app_ad&miniWua=HHnB_8m2%2BwCs0EwLLmAHM2k70mEgbccV0PbV9XGORnn7GraU%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=626&sign=B21179932CE67EB22480A456C7A9270D&timestamp=1624089391&userId=2127621746&user_id=2127621746&wua=HIVW_8f5Xnj2HPUzc5b/Bq/Sf3XdFe6O3QwYu%2B6biZ2KakzEB2BvbAwUlJXigpnxlFDubC9TSNfsT6PXhqy3g8BxGfR6qYTPZ/e22FQ9PRjj8aYNYqUB%2BgvcNG8QL0415UWx8hbZlTgYKQqjjdoIzb9IkpevUzFTjPgMvVzXqf50XLCZsEz6%2BEKzSDUu4nphm4akW2Ggkgy2NO0cy7OVZDXvqDA%2Bnike9IIOQHhQbSsRWtxw%3D"},{"key":"shuqiscbody2","val":""},{"key":"shuqiydbody2","val":""},{"key":"shuqiqdbody2","val":"clientTimestamp=1624087952&position=501&userId=2127621746&signInType=1&wua=HIVW_ej4RbsKQl13kExa%2BK0sPsxpEG63eHIWysm1eGkx24as5urDaJQ0nfz0sW19Bl95ab4YZRz3ua0hSVU1vCU2jldBMS5pS4IiORj3x3WnfdSsK8VDQNPhhErslwLLxsDy4u9JSdAyeWWCDUsqgfJfig0T3n7aLbNxKfIstdp7xRSQV3dGgtgrsg%2B0Fg2J7B6%2FTNbqlWAatMtaKYeCNtqhVLkbaf0a7WVUc%2FVihVnhD99e2j7Q9TQT3i6tfbBVagnbJuZ%2FFUvbORBSmMNz%2Fx1XL2H%2BibcTKbd0u5lVCL3b%2BU44iQEfaVEfBlmifGTojf%2FeLA23L0nnPa5%2BjH8t6iBEcFt7BGFHTWT0GYW8hHvaSSUIm61z11VoP9BrqMyjE8Amu&ua=&miniWua=HHnB_SDf5pyOWKfCcW%2FyorYaFL1GqShtSnQiQR%2B46xTtx1Ok492VgZqwXvxCArXr0wwJjlKhUXKYcR8VcVcULUSpC2fPFGVk1NHk62mRXJ21ut512RK29QD39B9w%2B7s8ZGV3z&umidtoken=YM1TTKFPG00DAOFIgoTWlyXd&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&sign=fcaee930f7e9ccd99fd060797af8763a&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.1%26utdid%3DYM1TTKFPG00DAOFIgoTWlyXd%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2127621746%26sn%3D1ADDC3E3DB1E0EA395805D5DAE55E2F1F17A9C40%26umidtoken%3DYM1TTKFPG00DAOFIgoTWlyXd%26msv%3D8.0.0%26brand%3DApple%26imei%3DDEF285E8BE1C30350C9CFA1FDF65E0194D73B762%26skinVersionPrefix%3D1%26appVer%3D4.3.0.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210107%26mod%3DiPodtouch3G%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DBC9C30B6-9993-477A-8A58-F17F4E58B36E"},{"key":"shuqirwbody2","val":"serviceWorkerOn=1&stopPullRefresh=1&upf=20559&from=ShuqiTab&sdk=13.1&utdid=YM1TTKFPG00DAOFIgoTWlyXd&ustatus=0&first_placeid=111111&net_env=4g&placeid=111111&user_id=2127621746&sn=1ADDC3E3DB1E0EA395805D5DAE55E2F1F17A9C40&umidtoken=YM1TTKFPG00DAOFIgoTWlyXd&msv=8.0.0&brand=Apple&imei=DEF285E8BE1C30350C9CFA1FDF65E0194D73B762&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=1&ver=210301&mod=iPodtouch3G&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=BC9C30B6-9993-477A-8A58-F17F4E58B36E&params=%7B%22resources%22%3A%7B%22ShuqiBsDailyTask%22%3A%7B%7D%7D%7D&userId=2127621746&placeId=111111&timestamp=1624089420&sqSv=1.0&sign=b0bf531eaedb3f476dd2664b9d670487&key=sq_h5_gateway&_public="},{"key":"shuqifxbody2","val":""},{"key":"shuqisprwurl2","val":"https://ocean.shuqireader.com/api/ad/adserver/v1/api/getAdInfo?appVer=4.3.0.0&placeId=111111&platform=iOS&requestSrc=h5&resourceId=626&timestamp=1624087988&user_id=2127621746&sqSv=1.0&sign=a689c3b6ae17d39b646e54a03b136dee&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.1%26utdid%3DYM1TTKFPG00DAOFIgoTWlyXd%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2127621746%26sn%3D1ADDC3E3DB1E0EA395805D5DAE55E2F1F17A9C40%26umidtoken%3DaaVL21lLOjP5bDV6I2vbggK6L0c6VYey%26msv%3D8.0.0%26brand%3DApple%26imei%3DDEF285E8BE1C30350C9CFA1FDF65E0194D73B762%26skinVersionPrefix%3D1%26appVer%3D4.3.0.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210107%26mod%3DiPodtouch3G%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DBC9C30B6-9993-477A-8A58-F17F4E58B36E"},{"key":"shuqijlbody2","val":"requestSrc=h5&userId=2127621746&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624089420&sqSv=1.0&sign=770ef9792ed40cfb476fd2f250dbf336&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26upf%3D20559%26from%3DShuqiTab%26sdk%3D13.1%26utdid%3DYM1TTKFPG00DAOFIgoTWlyXd%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2127621746%26sn%3D1ADDC3E3DB1E0EA395805D5DAE55E2F1F17A9C40%26umidtoken%3DYM1TTKFPG00DAOFIgoTWlyXd%26msv%3D8.0.0%26brand%3DApple%26imei%3DDEF285E8BE1C30350C9CFA1FDF65E0194D73B762%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPodtouch3G%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DBC9C30B6-9993-477A-8A58-F17F4E58B36E"},{"key":"shuqisqjlbody2","val":"src=&userId=2127621746&platform=1&appVer=4.3.0.0&placeId=111111&timestamp=1624087956&sqSv=1.0&sign=47ab8df05a2e7b58c3bf7a707fe24460&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.1%26utdid%3DYM1TTKFPG00DAOFIgoTWlyXd%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2127621746%26sn%3D1ADDC3E3DB1E0EA395805D5DAE55E2F1F17A9C40%26umidtoken%3DYM1TTKFPG00DAOFIgoTWlyXd%26msv%3D8.0.0%26brand%3DApple%26imei%3DDEF285E8BE1C30350C9CFA1FDF65E0194D73B762%26skinVersionPrefix%3D1%26appVer%3D4.3.0.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210107%26mod%3DiPodtouch3G%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DBC9C30B6-9993-477A-8A58-F17F4E58B36E"},{"key":"shuqicjyurl2","val":"https://ocean.shuqireader.com/api/activity/activity/v1/lottery/info?timestamp=1624087989&userId=2127621746&activityId=311&sqSv=1.0&sign=2b1f76966c1869d5dee9e1dfed24a8e5&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.1%26utdid%3DYM1TTKFPG00DAOFIgoTWlyXd%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2127621746%26sn%3D1ADDC3E3DB1E0EA395805D5DAE55E2F1F17A9C40%26umidtoken%3DaaVL21lLOjP5bDV6I2vbggK6L0c6VYey%26msv%3D8.0.0%26brand%3DApple%26imei%3DDEF285E8BE1C30350C9CFA1FDF65E0194D73B762%26skinVersionPrefix%3D1%26appVer%3D4.3.0.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210107%26mod%3DiPodtouch3G%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DBC9C30B6-9993-477A-8A58-F17F4E58B36E"},{"key":"shuqicjcsbody2","val":"_public=utype%3Dpre_vip%26idfa%3DBC9C30B6-9993-477A-8A58-F17F4E58B36E%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26umidtoken%3DYM1TTKFPG00DAOFIgoTWlyXd%26user_id%3D2127621746%26sn%3D1ADDC3E3DB1E0EA395805D5DAE55E2F1F17A9C40%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3DDEF285E8BE1C30350C9CFA1FDF65E0194D73B762%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPodtouch3G%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26utdid%3DYM1TTKFPG00DAOFIgoTWlyXd%26soft_id%3D21%26sdk%3D13.1&deliveryId=711&key=sq_app_ad&miniWua=HHnB_%2BQKaWSw6GCpwbTF2JBDsPrHDARyf0lLJbqvga4geseE%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=703&sign=B0FE56DB9DB165724A79F4EEAEA8488D&timestamp=1624089429&userId=2127621746&user_id=2127621746&wua=HIVW_fA/RzcoHxBIoPZElpSBkNR15hatWm5/zGoMVlT4nSPW1JbLC3AhR0yM/kKmRdk%2BJv4NWHFZgwj%2BQgONLva1y42if08Zk1oZsXOdiU%2BFHkWjrYpbAWAwmC27kglAfs/jtglMeQZxKDlsl8KP9qGhhP6GLg7u8Rcf/ITCaFrGjyRFdI7Kr5ruLassLs2BqhAu9qeK/c3hhHSLz5XIvMTOG7flUB4cO0auj7tgiT9SA4ik%3D"},{"key":"shuqicjbody2","val":"wua=HIVW_apudbsGUnlUV4l4aBZQKmd%2FxTXdweQsvg%2BKeu77rn1D0kRnr4OGzll%2FucDnyO6eTofuy4pbL42OI2DHIpPPTBgEH4YGDssAGQD0vcux%2FLiRu8TuSbT1eXn6waQD8A5UEOYSh%2BbAUdZ0RkjSr%2By5m2wu5SyJYDGCdBMj1xBsGPIgPefbwRGcgRiSAdT5Hzjs%2BVTkPwqqX56O2Qyujb07b9r45a8Yt7y1ycNULgV%2BBo1rIMlAyA7Jd8WbsSFXF%2FLcq6Hz8FoteRZ6lfGjeAfYm3Sj%2FeeP1BdZdRZ4DUxSxdSnCxP5ZfkXUYh0lLTY1K6bE%2BJawOVzYSGDKCYPkuSlPRdjvZBxmg0nnK6BE8rKdSQQ6U6f3T8dWEHtESwaKHFTV&ua=&userId=2127621746&umidtoken=YM1TTKFPG00DAOFIgoTWlyXd&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&asac=2A20C07RJ9F51AOEFSNHDR&timestamp=1624087973&activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&sqSv=1.0&sign=e61bd84c34f185d17540e139abddb25a&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.1%26utdid%3DYM1TTKFPG00DAOFIgoTWlyXd%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2127621746%26sn%3D1ADDC3E3DB1E0EA395805D5DAE55E2F1F17A9C40%26umidtoken%3DYM1TTKFPG00DAOFIgoTWlyXd%26msv%3D8.0.0%26brand%3DApple%26imei%3DDEF285E8BE1C30350C9CFA1FDF65E0194D73B762%26skinVersionPrefix%3D1%26appVer%3D4.3.0.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210107%26mod%3DiPodtouch3G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DBC9C30B6-9993-477A-8A58-F17F4E58B36E"},{"key":"shuqijsspbody2","val":""},{"key":"shuqijsydurl2","val":""},{"key":"shuqijsydbody2","val":""},{"key":"shuqijsqdbody2","val":""},{"key":"shuqijsqdspyurl2","val":""},{"key":"shuqijsqdspbody2","val":""},{"key":"shuqijsrwbody2","val":""},{"key":"shuqijsfxbody2","val":""},{"key":"shuqijsbookurl2","val":""},{"key":"shuqijsbookbody2","val":""},{"key":"shuqijssprwurl2","val":""},{"key":"shuqiuserurl3","val":"https://ocean.shuqireader.com/api/jaccount/accountapi/v1/sapi/account/getBindinfo?userId=2131786688&sqSv=1.0&timestamp=1624088068&sign=5f5b2d9654062bfb3e1eee3766ff757c&key=sq_h5_gateway"},{"key":"shuqisyurl3","val":"https://render.shuqireader.com/load/resource?sdk=13.3.1&utdid=YM2dxyoqlygDAB%2BbNXMjTze5&ustatus=0&first_placeid=111111&net_env=4g&placeid=111111&user_id=2131786688&sn=66ABD202BB6F26D1EB639FF6F229D7271CF7FD4F&umidtoken=YM2dxyoqlygDAB%2BbNXMjTze5&msv=8.0.0&brand=Apple&imei=2CC19F7BE1C9A5DAF85E599D27BC72D9B6A1A53F&skinVersionPrefix=1&appVer=4.3.0.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=iOS&ver=210107&mod=iPhone7&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=C847C240-A5B9-4E5F-AA63-371E1359AF68"},{"key":"shuqisybody3","val":"appVer=4.3.0.0&imei=2CC19F7BE1C9A5DAF85E599D27BC72D9B6A1A53F&isNewUser=1&params=%7B%22resources%22%3A%7B%22ShuqiVipEntry%22%3A%7B%7D%2C%22personalCardConfig%22%3A%7B%7D%7D%7D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=402493429036334963d700b9813331bf&sn=66ABD202BB6F26D1EB639FF6F229D7271CF7FD4F&soft_id=21&timestamp=1624088026&user_id=2131786688&ver=210107"},{"key":"shuqispbody3","val":"_public=utype%3Dpre_vip%26idfa%3DC847C240-A5B9-4E5F-AA63-371E1359AF68%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26umidtoken%3DYM2dxyoqlygDAB%2BbNXMjTze5%26user_id%3D2131786688%26sn%3D66ABD202BB6F26D1EB639FF6F229D7271CF7FD4F%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D2CC19F7BE1C9A5DAF85E599D27BC72D9B6A1A53F%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhone7%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26utdid%3DYM2dxyoqlygDAB%2BbNXMjTze5%26soft_id%3D21%26sdk%3D13.3.1&deliveryId=525&key=sq_app_ad&miniWua=HHnB_pF8jTHwuiqWnWu0WQrQbQosX2cP79dOUGnqNXRZP6ac%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=626&sign=81CA26A8E94022301858CDE2ABC4C07E&timestamp=1624089464&userId=2131786688&user_id=2131786688&wua=HIVW_WHqLdQ/VYdtX9QRhdrDrLGwk277zayQRM2KbsbFYTJ3zHEB8u1YnD7MIqiJIkE5H/fgySGUACoU9hXlA4tGPvKa%2BFQebz4nso35N7NrkZ7rqiEXULBu2TUPGT7LyDKNIBosCnGva5uYXP331jkMCGNDIMV0nislhCp0H7zkWrC9f/x8vPJ%2Be%2B59Vd8ZRt/3oCQNp8iVQGuqv/76CxiLiPTkbVG86LXlHpFFXStK/TIk%3D"},{"key":"shuqiscbody3","val":""},{"key":"shuqiydbody3","val":""},{"key":"shuqiqdbody3","val":"clientTimestamp=1624088036&position=501&userId=2131786688&signInType=1&wua=HIVW_vl84pAZ0OhU1wc%2BEyUQvShQ8zw5yVvcVML52gMfGbx8BZgdi8oHceNUempYP80pILu7P%2FlEHt8OUdTQ9NqkQtJZrik%2FKeyot%2BXoaI6nYbQe9d972%2BaazZnnrVrLU0Z%2BrW9eqP2dbSDmxaJNrLZ5pX4YUQRnuGUGdIjDXv380OFHBtK4mgC76XFbP893AUsfD175cFACgRoNWkqCAK6EyrwjJ4B09nPaZpIwmJbWlP7p193F4nWU0g6KLGZ09TjMaOxmHZvmcJzONDx3O7p1%2F3gTBPjyF2OPo8lG0dCq6j3zNMuRTHJHQsWiYM6NM2V9HZnAciyLntkgV2Y7zeDu3VEvurKbMSi97lOMo3TIBFOfV3JA2NDx7FFvdsKpE9%2BRJ&ua=&miniWua=HHnB_9m4C5rJCfQEd7ZYnfJN8AirB5Kpb5qJasiDdrvBKVXriEXGFzxPLAERJzk7k2qyz9ySbQbqt3UpXPuyboHenyY6OXzTKzItM14x77jyeTdA60S%2BqdLzOyukuxEg%2BtwWR&umidtoken=YM2dxyoqlygDAB%2BbNXMjTze5&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&sign=6b7ae2104ff93324a6a57b1f2159b21f&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.3.1%26utdid%3DYM2dxyoqlygDAB%252BbNXMjTze5%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2131786688%26sn%3D66ABD202BB6F26D1EB639FF6F229D7271CF7FD4F%26umidtoken%3DYM2dxyoqlygDAB%252BbNXMjTze5%26msv%3D8.0.0%26brand%3DApple%26imei%3D2CC19F7BE1C9A5DAF85E599D27BC72D9B6A1A53F%26skinVersionPrefix%3D1%26appVer%3D4.3.0.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210107%26mod%3DiPhone7%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DC847C240-A5B9-4E5F-AA63-371E1359AF68"},{"key":"shuqirwbody3","val":"serviceWorkerOn=1&stopPullRefresh=1&upf=20559&from=ShuqiTab&sdk=13.3.1&utdid=YM2dxyoqlygDAB%2BbNXMjTze5&ustatus=0&first_placeid=111111&net_env=4g&placeid=111111&user_id=2131786688&sn=66ABD202BB6F26D1EB639FF6F229D7271CF7FD4F&umidtoken=YM2dxyoqlygDAB%2BbNXMjTze5&msv=8.0.0&brand=Apple&imei=2CC19F7BE1C9A5DAF85E599D27BC72D9B6A1A53F&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=1&ver=210301&mod=iPhone7&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=C847C240-A5B9-4E5F-AA63-371E1359AF68&params=%7B%22resources%22%3A%7B%22ShuqiBsDailyTask%22%3A%7B%7D%7D%7D&userId=2131786688&placeId=111111&timestamp=1624089452&sqSv=1.0&sign=2f8ad225edb666cf4f2a4fb69155f0f5&key=sq_h5_gateway&_public="},{"key":"shuqifxbody3","val":""},{"key":"shuqisprwurl3","val":"https://ocean.shuqireader.com/api/ad/adserver/v1/api/getAdInfo?appVer=4.3.0.0&placeId=111111&platform=iOS&requestSrc=h5&resourceId=626&timestamp=1624088068&user_id=2131786688&sqSv=1.0&sign=775fc845aca026ec63aa01fac0791a36&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.3.1%26utdid%3DYM2dxyoqlygDAB%252BbNXMjTze5%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2131786688%26sn%3D66ABD202BB6F26D1EB639FF6F229D7271CF7FD4F%26umidtoken%3Dl8FLP9dLOkhQOjV6I3Q13vUXMFXIkdND%26msv%3D8.0.0%26brand%3DApple%26imei%3D2CC19F7BE1C9A5DAF85E599D27BC72D9B6A1A53F%26skinVersionPrefix%3D1%26appVer%3D4.3.0.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210107%26mod%3DiPhone7%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DC847C240-A5B9-4E5F-AA63-371E1359AF68"},{"key":"shuqijlbody3","val":"requestSrc=h5&userId=2131786688&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624089452&sqSv=1.0&sign=7d8b25a32d8f3f4e22a725335625bf14&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26upf%3D20559%26from%3DShuqiTab%26sdk%3D13.3.1%26utdid%3DYM2dxyoqlygDAB%252BbNXMjTze5%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2131786688%26sn%3D66ABD202BB6F26D1EB639FF6F229D7271CF7FD4F%26umidtoken%3DYM2dxyoqlygDAB%252BbNXMjTze5%26msv%3D8.0.0%26brand%3DApple%26imei%3D2CC19F7BE1C9A5DAF85E599D27BC72D9B6A1A53F%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone7%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DC847C240-A5B9-4E5F-AA63-371E1359AF68"},{"key":"shuqisqjlbody3","val":"src=&userId=2131786688&platform=1&appVer=4.3.0.0&placeId=111111&timestamp=1624088042&sqSv=1.0&sign=7d60af41d73a44f346fdb8e5623ef0a3&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.3.1%26utdid%3DYM2dxyoqlygDAB%252BbNXMjTze5%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2131786688%26sn%3D66ABD202BB6F26D1EB639FF6F229D7271CF7FD4F%26umidtoken%3DYM2dxyoqlygDAB%252BbNXMjTze5%26msv%3D8.0.0%26brand%3DApple%26imei%3D2CC19F7BE1C9A5DAF85E599D27BC72D9B6A1A53F%26skinVersionPrefix%3D1%26appVer%3D4.3.0.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210107%26mod%3DiPhone7%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DC847C240-A5B9-4E5F-AA63-371E1359AF68"},{"key":"shuqicjyurl3","val":"https://ocean.shuqireader.com/api/activity/activity/v1/lottery/info?timestamp=1624088070&userId=2131786688&activityId=311&sqSv=1.0&sign=f1f8fac4307f91c83ec20727fd1ae5dc&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.3.1%26utdid%3DYM2dxyoqlygDAB%252BbNXMjTze5%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2131786688%26sn%3D66ABD202BB6F26D1EB639FF6F229D7271CF7FD4F%26umidtoken%3Dl8FLP9dLOkhQOjV6I3Q13vUXMFXIkdND%26msv%3D8.0.0%26brand%3DApple%26imei%3D2CC19F7BE1C9A5DAF85E599D27BC72D9B6A1A53F%26skinVersionPrefix%3D1%26appVer%3D4.3.0.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210107%26mod%3DiPhone7%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DC847C240-A5B9-4E5F-AA63-371E1359AF68"},{"key":"shuqicjcsbody3","val":"_public=utype%3Dpre_vip%26idfa%3DC847C240-A5B9-4E5F-AA63-371E1359AF68%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26umidtoken%3DYM2dxyoqlygDAB%2BbNXMjTze5%26user_id%3D2131786688%26sn%3D66ABD202BB6F26D1EB639FF6F229D7271CF7FD4F%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D2CC19F7BE1C9A5DAF85E599D27BC72D9B6A1A53F%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhone7%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26utdid%3DYM2dxyoqlygDAB%2BbNXMjTze5%26soft_id%3D21%26sdk%3D13.3.1&deliveryId=711&key=sq_app_ad&miniWua=HHnB_%2B%2BJbveYzr9h3ZtJsHi2T3J5foeO6Ottyw4%2BXpnOEspg%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=703&sign=A261715DCC0E86702ED8335647DCC523&timestamp=1624089482&userId=2131786688&user_id=2131786688&wua=HIVW_WoZ2jpir5zHoWKsj5a34e351r9/kcZYKmAyx%2B2nUypKbnys2LkD5cL9aloQR2LQ1mS9PcHRVAI8F2nSG6r%2Bf/dQ4wPx/wDwADYxkPZ5D0NuygaprCUfQ0eaMHXKaom17j67X/pHvPs7UMQ70sVzvGNo/vkI8vKGMnwADzkP2Y2a30nFdEml5EQfYQfL0U8yS4pIXNxzi%2BfoOXoCTLtVe6hCQKOKFNr2QUjk1LM3r6Gk%3D"},{"key":"shuqicjbody3","val":"wua=HIVW_0yyUAprRvtADl5tkmihKeTrQ7MLOSI1oifnrJqIUGBl3mitk1TdO3VS1NmvwsdOL8WlZnC3wsJMNSTIQ%2F2z1m6xtgftdGBqknRFy861RkalzUPhfl%2ByR5YjDrZ0U3LGF%2BQ2O0k1iX73vGGD%2BhS4FV8I7mlNKBBg2J%2FkvnG3L6namoPrsH%2FAVSsLLMSiC7pm9kdGwSJg3vmYmmkTgW%2BFOx3sbmgE%2BJR0XkS%2FozDOU8G0%3D&ua=&userId=2131786688&umidtoken=YM2dxyoqlygDAB%2BbNXMjTze5&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&asac=2A20C07RJ9F51AOEFSNHDR&timestamp=1624089486&activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&sqSv=1.0&sign=72f6a02183f154a210a2ad7d9f1f4c59&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.3.1%26utdid%3DYM2dxyoqlygDAB%252BbNXMjTze5%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2131786688%26sn%3D66ABD202BB6F26D1EB639FF6F229D7271CF7FD4F%26umidtoken%3DYM2dxyoqlygDAB%252BbNXMjTze5%26msv%3D8.0.0%26brand%3DApple%26imei%3D2CC19F7BE1C9A5DAF85E599D27BC72D9B6A1A53F%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone7%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DC847C240-A5B9-4E5F-AA63-371E1359AF68"},{"key":"shuqijsspbody3","val":""},{"key":"shuqijsydurl3","val":""},{"key":"shuqijsydbody3","val":""},{"key":"shuqijsqdbody3","val":""},{"key":"shuqijsqdspyurl3","val":""},{"key":"shuqijsqdspbody3","val":""},{"key":"shuqijsrwbody3","val":""},{"key":"shuqijsfxbody3","val":""},{"key":"shuqijsbookurl3","val":""},{"key":"shuqijsbookbody3","val":""},{"key":"shuqijssprwurl3","val":""},{"key":"shuqiuserurl4","val":"https://ocean.shuqireader.com/api/jaccount/accountapi/v1/sapi/account/getBindinfo?userId=2127868073&sqSv=1.0&timestamp=1624088141&sign=8fd5ca27c9abe445e5518d18aaf268b7&key=sq_h5_gateway"},{"key":"shuqisyurl4","val":"https://render.shuqireader.com/load/resource?sdk=13.3&utdid=YM2eEEJyKu8DAHmcoQpcSdQ9&ustatus=0&first_placeid=111111&net_env=3g&placeid=111111&user_id=2127868073&sn=0DE91F893559728BF3FE482A2C7375A6752C860A&umidtoken=YM2eEEJyKu8DAHmcoQpcSdQ9&msv=8.0.0&brand=Apple&imei=D0D673A43E271EB29BB14001710F113720477851&skinVersionPrefix=1&appVer=4.3.0.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=iOS&ver=210107&mod=iPad4G&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=E506385F-E4DD-4DD5-8144-05839000DF3B"},{"key":"shuqisybody4","val":"appVer=4.3.0.0&imei=D0D673A43E271EB29BB14001710F113720477851&isNewUser=1&params=%7B%22resources%22%3A%7B%22ShuqiVipEntry%22%3A%7B%7D%2C%22personalCardConfig%22%3A%7B%7D%7D%7D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=9b386bf8225b2728dcb36e020a4110aa&sn=0DE91F893559728BF3FE482A2C7375A6752C860A&soft_id=21&timestamp=1624088083&user_id=2127868073&ver=210107"},{"key":"shuqispbody4","val":"_public=utype%3Dpre_vip%26idfa%3DE506385F-E4DD-4DD5-8144-05839000DF3B%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26umidtoken%3DYM2eEEJyKu8DAHmcoQpcSdQ9%26user_id%3D2127868073%26sn%3D0DE91F893559728BF3FE482A2C7375A6752C860A%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3DD0D673A43E271EB29BB14001710F113720477851%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPad4G%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26utdid%3DYM2eEEJyKu8DAHmcoQpcSdQ9%26soft_id%3D21%26sdk%3D13.3&deliveryId=525&key=sq_app_ad&miniWua=HHnB_cV4z3TaG4IlBgUf4WfypXeJfYrtegc31rsvOiPPpXBQ%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=626&sign=A469337F274480211106D18E8F0C5DB9&timestamp=1624089509&userId=2127868073&user_id=2127868073&wua=HIVW_7R5/eFJcQtkKKEBHH9KPMlfDIov1SKGauX3wtJLn%2BP7UuypdsCqKRrnf0mnRsXklVHscmfrwCjGXw0RxUTqRPCHdn9XKfiUalOo8yINE1M2LCFxcL0YCGm7K7sKkblSN3fdkGL1jR9IIOxPf2xz1Igj2nmee7WemQ1KPb%2BFmtq6e/4F6mpw8SnXSN/k7IcWvTwpCG%2B/bJS6/me4T6BhBC0yON94cCkq27QMcbvvbfEM%3D"},{"key":"shuqiscbody4","val":""},{"key":"shuqiydbody4","val":""},{"key":"shuqiqdbody4","val":"clientTimestamp=1624088093&position=501&userId=2127868073&signInType=1&wua=HIVW_iMDWTR1LlceSnOMojm6z1PuxOs4KWGwl5K1hGOS1x7tg79xeopJ1GrnTrGZIZMtdGbJb9WKi8ry0GMYqMCdd7kp29FpBtT6ZysLQOPDqkDhfLpZQT5oSTBzk6tagErEaUlEwT0BWirbM4cHjxtrswb8YPc5XDNpWcqbsL3Yw0l1ZSnVfbmN1jyP78y5IvuujM9n%2FmvyEMgvIlkGVYWrSsndpRZD%2BapXhFpQEmyagpGqXbV5CnpRqTJgRFtKiAVWCk8oSsSw2ETHaUblDg2pWSvl%2FTBG6UbzrsDfRLgkxxLsymLiCqo2EuiEm10KNBeq8woroP3WYP6aeCC1TMv3U%2BgHRqytsd6lGuX4WyKh6nbF12L4xl2%2F2tXn3vMFtP%2Bbd&ua=&miniWua=HHnB_7zVtGU%2FE1Z5ZF3roY3kF%2BzG8ONfoa8rnO2f52gt0mLDHdiMDro2W7jI4RIjm8pKWu09c3r9f2GKGMLfYXFaqdG%2FjfajF8I35xvF9GXxRtm0xMbIDC7tChpSDfgP6q8Eq&umidtoken=YM2eEEJyKu8DAHmcoQpcSdQ9&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&sign=043a43aae81d8d1c462e43647fd3f27a&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.3%26utdid%3DYM2eEEJyKu8DAHmcoQpcSdQ9%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2127868073%26sn%3D0DE91F893559728BF3FE482A2C7375A6752C860A%26umidtoken%3DYM2eEEJyKu8DAHmcoQpcSdQ9%26msv%3D8.0.0%26brand%3DApple%26imei%3DD0D673A43E271EB29BB14001710F113720477851%26skinVersionPrefix%3D1%26appVer%3D4.3.0.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210107%26mod%3DiPad4G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DE506385F-E4DD-4DD5-8144-05839000DF3B"},{"key":"shuqirwbody4","val":"serviceWorkerOn=1&stopPullRefresh=1&upf=20559&from=ShuqiTab&sdk=13.3&utdid=YM2eEEJyKu8DAHmcoQpcSdQ9&ustatus=0&first_placeid=111111&net_env=3g&placeid=111111&user_id=2127868073&sn=0DE91F893559728BF3FE482A2C7375A6752C860A&umidtoken=YM2eEEJyKu8DAHmcoQpcSdQ9&msv=8.0.0&brand=Apple&imei=D0D673A43E271EB29BB14001710F113720477851&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=1&ver=210301&mod=iPad4G&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=E506385F-E4DD-4DD5-8144-05839000DF3B&params=%7B%22resources%22%3A%7B%22ShuqiBsDailyTask%22%3A%7B%7D%7D%7D&userId=2127868073&placeId=111111&timestamp=1624089516&sqSv=1.0&sign=6254e9720925662b6e87ad42e18a964f&key=sq_h5_gateway&_public="},{"key":"shuqifxbody4","val":""},{"key":"shuqisprwurl4","val":"https://ocean.shuqireader.com/api/ad/adserver/v1/api/getAdInfo?appVer=4.3.0.0&placeId=111111&platform=iOS&requestSrc=h5&resourceId=626&timestamp=1624088142&user_id=2127868073&sqSv=1.0&sign=ab88e116a229f71cf68c0f1f1420ac34&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.3%26utdid%3DYM2eEEJyKu8DAHmcoQpcSdQ9%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2127868073%26sn%3D0DE91F893559728BF3FE482A2C7375A6752C860A%26umidtoken%3DzexLX%252BhLOgSUmjV6I6Yt6u6OMXQ8CTgO%26msv%3D8.0.0%26brand%3DApple%26imei%3DD0D673A43E271EB29BB14001710F113720477851%26skinVersionPrefix%3D1%26appVer%3D4.3.0.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210107%26mod%3DiPad4G%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DE506385F-E4DD-4DD5-8144-05839000DF3B"},{"key":"shuqijlbody4","val":"requestSrc=h5&userId=2127868073&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624089515&sqSv=1.0&sign=22c89ceb38f6587de61016b198daa8de&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26upf%3D20559%26from%3DShuqiTab%26sdk%3D13.3%26utdid%3DYM2eEEJyKu8DAHmcoQpcSdQ9%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2127868073%26sn%3D0DE91F893559728BF3FE482A2C7375A6752C860A%26umidtoken%3DYM2eEEJyKu8DAHmcoQpcSdQ9%26msv%3D8.0.0%26brand%3DApple%26imei%3DD0D673A43E271EB29BB14001710F113720477851%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad4G%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DE506385F-E4DD-4DD5-8144-05839000DF3B"},{"key":"shuqisqjlbody4","val":"src=&userId=2127868073&platform=1&appVer=4.3.0.0&placeId=111111&timestamp=1624088098&sqSv=1.0&sign=cf61b644f280be68b34d975b6dd43332&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.3%26utdid%3DYM2eEEJyKu8DAHmcoQpcSdQ9%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2127868073%26sn%3D0DE91F893559728BF3FE482A2C7375A6752C860A%26umidtoken%3DYM2eEEJyKu8DAHmcoQpcSdQ9%26msv%3D8.0.0%26brand%3DApple%26imei%3DD0D673A43E271EB29BB14001710F113720477851%26skinVersionPrefix%3D1%26appVer%3D4.3.0.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210107%26mod%3DiPad4G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DE506385F-E4DD-4DD5-8144-05839000DF3B"},{"key":"shuqicjyurl4","val":"https://ocean.shuqireader.com/api/activity/activity/v1/lottery/info?timestamp=1624088143&userId=2127868073&activityId=311&sqSv=1.0&sign=e657f91cb5e7196eb59ef82745212d12&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.3%26utdid%3DYM2eEEJyKu8DAHmcoQpcSdQ9%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2127868073%26sn%3D0DE91F893559728BF3FE482A2C7375A6752C860A%26umidtoken%3DzexLX%252BhLOgSUmjV6I6Yt6u6OMXQ8CTgO%26msv%3D8.0.0%26brand%3DApple%26imei%3DD0D673A43E271EB29BB14001710F113720477851%26skinVersionPrefix%3D1%26appVer%3D4.3.0.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210107%26mod%3DiPad4G%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DE506385F-E4DD-4DD5-8144-05839000DF3B"},{"key":"shuqicjcsbody4","val":"_public=utype%3Dpre_vip%26idfa%3DE506385F-E4DD-4DD5-8144-05839000DF3B%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26umidtoken%3DYM2eEEJyKu8DAHmcoQpcSdQ9%26user_id%3D2127868073%26sn%3D0DE91F893559728BF3FE482A2C7375A6752C860A%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3DD0D673A43E271EB29BB14001710F113720477851%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPad4G%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26utdid%3DYM2eEEJyKu8DAHmcoQpcSdQ9%26soft_id%3D21%26sdk%3D13.3&deliveryId=711&key=sq_app_ad&miniWua=HHnB_mMSxE9ZT2t6twzwcGSeQYIPSITI3gRINrQCOPC4W4NI%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=703&sign=CA5F6C3465DB5DAF7CC8BAD4EE42D9A6&timestamp=1624089521&userId=2127868073&user_id=2127868073&wua=HIVW_/8kahMQA/BqdWaJHCnND3VKSgqCf9gDKqxigTtQkWCdzXc/Kzssl/tC/fNJR7iFSAWwf/iudUo8Zl75Q3YdMLA47Y82ogJcwtzdDbdFK/CEbpf77CYFjOTfkmHf8n22qjkXdSywZsYKDUiQL8FV6CW0z3/9/ZZLS6TxeSfP3AtWLVNRoJkcDOZSTDxuKDEkOWnblvr9tA8xRFb1U%2B3dvc/t5NAZtZwxAzVaBrhXitRQ%3D"},{"key":"shuqicjbody4","val":"wua=HIVW_jTOBd1QVCDxa87Dvn82Yt7dZo88xzhaALbHoLE2nKKiH1NFxkSdNUqJmtzZC5pzDpKb26Wl25k2fvip55Rcec3e22JHWNrvE%2B13HxP6dti7yDGVpSBniGrmECGS24cqLobz71mhU1qTp2iE0GcDUFaBtgEbJIN4gvXvUwqwN0XTGiLy%2F1wRPM49I%2Bs9Hgxc65C8BJsmlkkhigaTrz%2BAYvRe2OXmmUqM5qzoNeLDYIPw%3D&ua=&userId=2127868073&umidtoken=YM2eEEJyKu8DAHmcoQpcSdQ9&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&asac=2A20C07RJ9F51AOEFSNHDR&timestamp=1624089527&activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&sqSv=1.0&sign=261c86963ed2ca1a110fd159fab9bf97&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.3%26utdid%3DYM2eEEJyKu8DAHmcoQpcSdQ9%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2127868073%26sn%3D0DE91F893559728BF3FE482A2C7375A6752C860A%26umidtoken%3DYM2eEEJyKu8DAHmcoQpcSdQ9%26msv%3D8.0.0%26brand%3DApple%26imei%3DD0D673A43E271EB29BB14001710F113720477851%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad4G%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DE506385F-E4DD-4DD5-8144-05839000DF3B"},{"key":"shuqijsspbody4","val":""},{"key":"shuqijsydurl4","val":""},{"key":"shuqijsydbody4","val":""},{"key":"shuqijsqdbody4","val":""},{"key":"shuqijsqdspyurl4","val":""},{"key":"shuqijsqdspbody4","val":""},{"key":"shuqijsrwbody4","val":""},{"key":"shuqijsfxbody4","val":""},{"key":"shuqijsbookurl4","val":""},{"key":"shuqijsbookbody4","val":""},{"key":"shuqijssprwurl4","val":""},{"key":"shuqiuserurl5","val":"https://ocean.shuqireader.com/api/jaccount/accountapi/v1/sapi/account/getBindinfo?userId=2131637032&sqSv=1.0&timestamp=1624088242&sign=50f07a78905707b982ab89f10b9d2297&key=sq_h5_gateway"},{"key":"shuqisyurl5","val":"https://render.shuqireader.com/load/resource?sdk=13.1.2&utdid=YM1TXaAgm3YDAEfKfFksVjNQ&ustatus=0&first_placeid=111111&net_env=4g&placeid=111111&user_id=2131637032&sn=2F8ED2CF2AE16075FE87ED817E475DE1E465B14F&umidtoken=YM1TXaAgm3YDAEfKfFksVjNQ&msv=8.0.0&brand=Apple&imei=3E88E2FB3CD13C63D7EFB4141C4D0F8BE681FE30&skinVersionPrefix=1&appVer=4.3.0.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=iOS&ver=210107&mod=iPhone6s&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=D59E97FA-7877-4B0A-80A2-ACCC30E207C6"},{"key":"shuqisybody5","val":"appVer=4.3.0.0&imei=3E88E2FB3CD13C63D7EFB4141C4D0F8BE681FE30&isNewUser=1&params=%7B%22resources%22%3A%7B%22ShuqiVipEntry%22%3A%7B%7D%2C%22personalCardConfig%22%3A%7B%7D%7D%7D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=5bb31c6ebcfc89fd2dedd485e6b11e15&sn=2F8ED2CF2AE16075FE87ED817E475DE1E465B14F&soft_id=21&timestamp=1624088162&user_id=2131637032&ver=210107"},{"key":"shuqispbody5","val":"_public=utype%3Dpre_vip%26idfa%3DD59E97FA-7877-4B0A-80A2-ACCC30E207C6%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26umidtoken%3DYM1TXaAgm3YDAEfKfFksVjNQ%26user_id%3D2131637032%26sn%3D2F8ED2CF2AE16075FE87ED817E475DE1E465B14F%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D3E88E2FB3CD13C63D7EFB4141C4D0F8BE681FE30%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhone6s%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26utdid%3DYM1TXaAgm3YDAEfKfFksVjNQ%26soft_id%3D21%26sdk%3D13.1.2&deliveryId=525&key=sq_app_ad&miniWua=HHnB_wpwqwDWyjg1uFB9pV%2BK4DzbqOE6OfVtcSTkXw0Js36M%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=626&sign=56BC6068C85EF33A60BEFCB8DEE0E7B2&timestamp=1624090141&userId=2131637032&user_id=2131637032&wua=HIVW_tIUQH/1Jr6mfEGUassytCyo9h6IMJX%2BwyfmesHD7JqIJIAt79hyuHIdw0O0eUa3%2BUshadrr10F/jO5mg0WsS2bi5ZaglzrlJhx2GSJw%2BpILkh%2Bru5m9Fq1SwpqkTAYbto1ufkC0IyeVFc0r8T3JFyEB5hB5IvA0IWX%2BZF%2BvhLkoQzhJNgHirypOE4kWcfRxCSjBFwfGua0Bco2Sh8T1vmxf8lQ8QUgzc6QPS6hZIfeo%3D"},{"key":"shuqiscbody5","val":""},{"key":"shuqiydbody5","val":""},{"key":"shuqiqdbody5","val":"clientTimestamp=1624088171&position=501&userId=2131637032&signInType=1&wua=HIVW_gW9rGL5VhlOsPneEzQgroCWl8YCUFhEzYytdiCfGCkpzVA07w%2FK0M%2FiRVHDX%2Fstg77hBA3JBFg1zfBLcwqbodzDKnll16qlMNbW4Zv4ctmBfiyUcHedfCqpbI1H%2BdtPRiyz%2B49AEa8Y7fGAg7hSWQFOblEU4z28fYkvVomWyrAHHxWJTnuFU3%2F8xI5MejBsE%2FcB1nUWQPmbHg5imLdqRDaM2xbtaiAITvtx4xpebmZIfVN0fg0gdVJ80KTVtd9Ns5bSdp96a0Sh7%2FJZ3uvRGe%2BYGb4W4wLaEJzjTPOdLGpGyzmF8seZizapR4BbTOxzlc76wYRrX6kQRUfjz9jqXkIXvCIH7yZMnRvqJs%2FVcyXXn9LIHH0xR0wtwDq8jgKax&ua=&miniWua=HHnB_CZEmasD96klacY2TP%2FWNp37Hyv2AGI9aiNBEepjM4FBs284rY5%2BNh%2BVMDeAQ2v%2FsUSmYVU%2FXqUnT2Wt%2FswYiwOs3pGJWmq%2FjMB1CmMiwcq22lkdK%2FadUgRuMvgjJjg4B&umidtoken=YM1TXaAgm3YDAEfKfFksVjNQ&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&sign=aa4f0b74495ecf568ec0eb49e99582be&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.1.2%26utdid%3DYM1TXaAgm3YDAEfKfFksVjNQ%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2131637032%26sn%3D2F8ED2CF2AE16075FE87ED817E475DE1E465B14F%26umidtoken%3DYM1TXaAgm3YDAEfKfFksVjNQ%26msv%3D8.0.0%26brand%3DApple%26imei%3D3E88E2FB3CD13C63D7EFB4141C4D0F8BE681FE30%26skinVersionPrefix%3D1%26appVer%3D4.3.0.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210107%26mod%3DiPhone6s%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DD59E97FA-7877-4B0A-80A2-ACCC30E207C6"},{"key":"shuqirwbody5","val":"serviceWorkerOn=1&stopPullRefresh=1&upf=20559&from=ShuqiTab&sdk=13.1.2&utdid=YM1TXaAgm3YDAEfKfFksVjNQ&ustatus=0&first_placeid=111111&net_env=4g&placeid=111111&user_id=2131637032&sn=2F8ED2CF2AE16075FE87ED817E475DE1E465B14F&umidtoken=YM1TXaAgm3YDAEfKfFksVjNQ&msv=8.0.0&brand=Apple&imei=3E88E2FB3CD13C63D7EFB4141C4D0F8BE681FE30&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=1&ver=210301&mod=iPhone6s&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=D59E97FA-7877-4B0A-80A2-ACCC30E207C6&params=%7B%22resources%22%3A%7B%22ShuqiBsDailyTask%22%3A%7B%7D%7D%7D&userId=2131637032&placeId=111111&timestamp=1624090145&sqSv=1.0&sign=0d34a66cd551083c8fbaa8136dcfb940&key=sq_h5_gateway&_public="},{"key":"shuqifxbody5","val":""},{"key":"shuqisprwurl5","val":"https://ocean.shuqireader.com/api/ad/adserver/v1/api/getAdInfo?appVer=4.3.0.0&placeId=111111&platform=iOS&requestSrc=h5&resourceId=626&timestamp=1624088242&user_id=2131637032&sqSv=1.0&sign=e30bb53c1baa47274014c3decd36da71&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.1.2%26utdid%3DYM1TXaAgm3YDAEfKfFksVjNQ%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2131637032%26sn%3D2F8ED2CF2AE16075FE87ED817E475DE1E465B14F%26umidtoken%3D8jlLJm9LOte9njV6I4Ni6%252FxUMpGTmLK4%26msv%3D8.0.0%26brand%3DApple%26imei%3D3E88E2FB3CD13C63D7EFB4141C4D0F8BE681FE30%26skinVersionPrefix%3D1%26appVer%3D4.3.0.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210107%26mod%3DiPhone6s%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DD59E97FA-7877-4B0A-80A2-ACCC30E207C6"},{"key":"shuqijlbody5","val":"requestSrc=h5&userId=2131637032&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624090145&sqSv=1.0&sign=1e1fd3158c7393963f5ecdd25c9ecf62&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26upf%3D20559%26from%3DShuqiTab%26sdk%3D13.1.2%26utdid%3DYM1TXaAgm3YDAEfKfFksVjNQ%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2131637032%26sn%3D2F8ED2CF2AE16075FE87ED817E475DE1E465B14F%26umidtoken%3DYM1TXaAgm3YDAEfKfFksVjNQ%26msv%3D8.0.0%26brand%3DApple%26imei%3D3E88E2FB3CD13C63D7EFB4141C4D0F8BE681FE30%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone6s%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DD59E97FA-7877-4B0A-80A2-ACCC30E207C6"},{"key":"shuqisqjlbody5","val":"src=&userId=2131637032&platform=1&appVer=4.3.0.0&placeId=111111&timestamp=1624088179&sqSv=1.0&sign=26ac9922cc0b511e5a6bdb262b31a132&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.1.2%26utdid%3DYM1TXaAgm3YDAEfKfFksVjNQ%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2131637032%26sn%3D2F8ED2CF2AE16075FE87ED817E475DE1E465B14F%26umidtoken%3DYM1TXaAgm3YDAEfKfFksVjNQ%26msv%3D8.0.0%26brand%3DApple%26imei%3D3E88E2FB3CD13C63D7EFB4141C4D0F8BE681FE30%26skinVersionPrefix%3D1%26appVer%3D4.3.0.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210107%26mod%3DiPhone6s%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DD59E97FA-7877-4B0A-80A2-ACCC30E207C6"},{"key":"shuqicjyurl5","val":"https://ocean.shuqireader.com/api/activity/activity/v1/lottery/info?timestamp=1624088245&userId=2131637032&activityId=311&sqSv=1.0&sign=cd682732449773c09343822447356e9a&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.1.2%26utdid%3DYM1TXaAgm3YDAEfKfFksVjNQ%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2131637032%26sn%3D2F8ED2CF2AE16075FE87ED817E475DE1E465B14F%26umidtoken%3D8jlLJm9LOte9njV6I4Ni6%252FxUMpGTmLK4%26msv%3D8.0.0%26brand%3DApple%26imei%3D3E88E2FB3CD13C63D7EFB4141C4D0F8BE681FE30%26skinVersionPrefix%3D1%26appVer%3D4.3.0.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210107%26mod%3DiPhone6s%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DD59E97FA-7877-4B0A-80A2-ACCC30E207C6"},{"key":"shuqicjcsbody5","val":"_public=utype%3Dpre_vip%26idfa%3DD59E97FA-7877-4B0A-80A2-ACCC30E207C6%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26umidtoken%3DYM1TXaAgm3YDAEfKfFksVjNQ%26user_id%3D2131637032%26sn%3D2F8ED2CF2AE16075FE87ED817E475DE1E465B14F%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D3E88E2FB3CD13C63D7EFB4141C4D0F8BE681FE30%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhone6s%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26utdid%3DYM1TXaAgm3YDAEfKfFksVjNQ%26soft_id%3D21%26sdk%3D13.1.2&deliveryId=711&key=sq_app_ad&miniWua=HHnB_StAkBInUxnOTEpwjz4jx6bbPZ4jc82UF8qx/HJ5m9e8%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=703&sign=348C86234788A82520C52E7524E228CC&timestamp=1624090155&userId=2131637032&user_id=2131637032&wua=HIVW_ZyZ20K1Zx7HiUyPkerBJIW6nX7S0YgcCtNoCe%2BJjcg%2BEk08mcTq3vInPraB/ODmbtKZIPqt2v%2ByiQjsKXURM9HubN2DC3OlAVFsR3IzYSQ/ScLgMA4WOMDgMnAjGtgGfBzejwJWNrb5VqV8F%2BWhOKrBkC8XJU8aQoI%2BWq30wuI1SbV2NiTTrDGbMIAY6v0tNjE5eAbyC/PxPOiwExLbELn/JZvbZYkpL28sajn6amX0%3D"},{"key":"shuqicjbody5","val":"wua=HIVW_g4C1ul4O%2Bs8IPy%2BA1J0ZXC1nA8w8sldQrtRKXo5vAJYKv6kZnFjLkyesvWH91Q63VBVNLSa543WSlxjYzKmwoD71acDrbbudG90xZ9OxKxusgajA2y40wQc0xCveql9trn275qS7wdQoUM6xroXIj%2FcWogsR6yXqAYdpQ%2F4Xpu3bQxbrNWFNmrz9EK9YRbLS2vC4LRdUvh9FUVav4Dv4tte3WKxkJAPEec3q%2BKV%2BzxQ%3D&ua=&userId=2131637032&umidtoken=YM1TXaAgm3YDAEfKfFksVjNQ&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&asac=2A20C07RJ9F51AOEFSNHDR&timestamp=1624090165&activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&sqSv=1.0&sign=5c57d7dbce155811324d9331e92b7ac3&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.1.2%26utdid%3DYM1TXaAgm3YDAEfKfFksVjNQ%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2131637032%26sn%3D2F8ED2CF2AE16075FE87ED817E475DE1E465B14F%26umidtoken%3DYM1TXaAgm3YDAEfKfFksVjNQ%26msv%3D8.0.0%26brand%3DApple%26imei%3D3E88E2FB3CD13C63D7EFB4141C4D0F8BE681FE30%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone6s%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DD59E97FA-7877-4B0A-80A2-ACCC30E207C6"},{"key":"shuqijsspbody5","val":""},{"key":"shuqijsydurl5","val":""},{"key":"shuqijsydbody5","val":""},{"key":"shuqijsqdbody5","val":""},{"key":"shuqijsqdspyurl5","val":""},{"key":"shuqijsqdspbody5","val":""},{"key":"shuqijsrwbody5","val":""},{"key":"shuqijsfxbody5","val":""},{"key":"shuqijsbookurl5","val":""},{"key":"shuqijsbookbody5","val":""},{"key":"shuqijssprwurl5","val":""},{"key":"shuqiuserurl6","val":"https://ocean.shuqireader.com/api/jaccount/accountapi/v1/sapi/account/getBindinfo?userId=2131141404&sqSv=1.0&timestamp=1624088303&sign=9a483d0019551243b86ef13d02d14c5c&key=sq_h5_gateway"},{"key":"shuqisyurl6","val":"https://render.shuqireader.com/load/resource?sdk=13.2.3&utdid=YM1Tn368zEUDANJ3xFZPjhnT&ustatus=0&first_placeid=111111&net_env=4g&placeid=111111&user_id=2131141404&sn=09E595FDA0E496CCFF969FD0A1F7836065D1F83F&umidtoken=YM1Tn368zEUDANJ3xFZPjhnT&msv=8.0.0&brand=Apple&imei=FD209BA9D3BBBAA9C3DF279C7B86F47067B08452&skinVersionPrefix=1&appVer=4.3.0.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=iOS&ver=210107&mod=iPhone11Pro&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=744D0DC5-B83B-4806-BF81-1B7B0BD3B92A"},{"key":"shuqisybody6","val":"appVer=4.3.0.0&imei=FD209BA9D3BBBAA9C3DF279C7B86F47067B08452&isNewUser=1&params=%7B%22resources%22%3A%7B%22ShuqiVipEntry%22%3A%7B%7D%2C%22personalCardConfig%22%3A%7B%7D%7D%7D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=7dc4da5575df84d46d47604987f39941&sn=09E595FDA0E496CCFF969FD0A1F7836065D1F83F&soft_id=21&timestamp=1624088260&user_id=2131141404&ver=210107"},{"key":"shuqispbody6","val":"_public=utype%3Dpre_vip%26idfa%3D744D0DC5-B83B-4806-BF81-1B7B0BD3B92A%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26umidtoken%3DYM1Tn368zEUDANJ3xFZPjhnT%26user_id%3D2131141404%26sn%3D09E595FDA0E496CCFF969FD0A1F7836065D1F83F%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3DFD209BA9D3BBBAA9C3DF279C7B86F47067B08452%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhone11Pro%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26utdid%3DYM1Tn368zEUDANJ3xFZPjhnT%26soft_id%3D21%26sdk%3D13.2.3&deliveryId=525&key=sq_app_ad&miniWua=HHnB_CFC8kisKu2iYhPkVV1gZJObjcH/gIBOcwN2s/b6SDU0%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=626&sign=1B0DC3FE2D800D8E4D56365CE7AD6F83&timestamp=1624090203&userId=2131141404&user_id=2131141404&wua=HIVW_YoF1a7M%2BAVsupy20mVRXob/QeRTEIFH8rre48vyU83oRIy193BguJQBFtltilC3rIVqPHB6qPt8x%2Bhp9H/BBsMhwuJcvPWVOWVMjOEICwtiMQ1Y08%2Bepj27zJA9CGeyNK6waenwC7U/m1Wc9%2BF54R/PdltOmr0sSOkezJaSkzLCyqNgqsUToOyltqvm3OiImXq2p8dkGsMsuo/PZRJ39O1d8aAl5egtNgp4PoGPxpzg%3D"},{"key":"shuqiscbody6","val":""},{"key":"shuqiydbody6","val":""},{"key":"shuqiqdbody6","val":"clientTimestamp=1624088271&position=501&userId=2131141404&signInType=1&wua=HIVW_X3jCBbfwft4uGar9B3ho1gL85u002Zu6%2BnYoPYiDZ6SWG1OYByvUmxQQcis%2BckZU3u2n0PIVOV3BCP7XdwQrKv0lFHpo%2B0L2tKD9ykGviPLvZIP81qQbwuv1pkXsS9tU5RyH%2BdXoh1DRB2BiWndgP9z6z%2Brc0y52tb95CexJbIdCYOZgiWDQf4WIqD1LfxYE5lOs2yqhFyeTraTqtWhqDCmuSHMpjGeByDaZrYQEkt9vmGssZqbEnjrE2lnNYBTHzc8pc6geDqcKy1d4gMneYv86hdAhb3Vx%2Fc%2FuO07UbmiMnF2WMJz39CA3h%2F6tbkyuHsQ%2BsTrBCHH59%2FT46vxp%2FYYb6hONZqA9%2BenU%2FRNhO23PzDDo0Rd%2Bfmd1%2BBDhUBJ8&ua=&miniWua=HHnB_POE7lifRKTUcVaVDlI7cutppYWW5VNauxTRf%2B7QHnewKOSdVpKpkguwQsZTyulLAKONOf3M%2BtY0ElZmy1MFErqqFasyJDbusFWHeBUgrjE6ZzAOtakPGTXYxYbFsNihi&umidtoken=YM1Tn368zEUDANJ3xFZPjhnT&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&sign=8c224e5ab42fe64b19b433f91bb6764c&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.2.3%26utdid%3DYM1Tn368zEUDANJ3xFZPjhnT%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2131141404%26sn%3D09E595FDA0E496CCFF969FD0A1F7836065D1F83F%26umidtoken%3DYM1Tn368zEUDANJ3xFZPjhnT%26msv%3D8.0.0%26brand%3DApple%26imei%3DFD209BA9D3BBBAA9C3DF279C7B86F47067B08452%26skinVersionPrefix%3D1%26appVer%3D4.3.0.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210107%26mod%3DiPhone11Pro%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D744D0DC5-B83B-4806-BF81-1B7B0BD3B92A"},{"key":"shuqirwbody6","val":"serviceWorkerOn=1&stopPullRefresh=1&from=ShuqiTab&upf=20368&sdk=13.2.3&utdid=YM1Tn368zEUDANJ3xFZPjhnT&ustatus=0&first_placeid=111111&net_env=4g&placeid=111111&user_id=2131141404&sn=09E595FDA0E496CCFF969FD0A1F7836065D1F83F&umidtoken=YM1Tn368zEUDANJ3xFZPjhnT&msv=8.0.0&brand=Apple&imei=FD209BA9D3BBBAA9C3DF279C7B86F47067B08452&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=1&ver=210301&mod=iPhone11Pro&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=744D0DC5-B83B-4806-BF81-1B7B0BD3B92A&params=%7B%22resources%22%3A%7B%22ShuqiBsDailyTask%22%3A%7B%7D%7D%7D&userId=2131141404&placeId=111111&timestamp=1624090226&sqSv=1.0&sign=1fafa304be8aa0e2b593a1199724f2bd&key=sq_h5_gateway&_public="},{"key":"shuqifxbody6","val":""},{"key":"shuqisprwurl6","val":"https://ocean.shuqireader.com/api/ad/adserver/v1/api/getAdInfo?appVer=4.3.0.0&placeId=111111&platform=iOS&requestSrc=h5&resourceId=626&timestamp=1624088303&user_id=2131141404&sqSv=1.0&sign=3e698dce97e525a6a15d88d709e5a88e&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.2.3%26utdid%3DYM1Tn368zEUDANJ3xFZPjhnT%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2131141404%26sn%3D09E595FDA0E496CCFF969FD0A1F7836065D1F83F%26umidtoken%3DzGpLW05LOjdXTTV6I9PBE4OINCk7S%252FrE%26msv%3D8.0.0%26brand%3DApple%26imei%3DFD209BA9D3BBBAA9C3DF279C7B86F47067B08452%26skinVersionPrefix%3D1%26appVer%3D4.3.0.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210107%26mod%3DiPhone11Pro%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D744D0DC5-B83B-4806-BF81-1B7B0BD3B92A"},{"key":"shuqijlbody6","val":"requestSrc=h5&userId=2131141404&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624090226&sqSv=1.0&sign=38f79c5f0ecdf247a83d0abb52d3a046&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.2.3%26utdid%3DYM1Tn368zEUDANJ3xFZPjhnT%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2131141404%26sn%3D09E595FDA0E496CCFF969FD0A1F7836065D1F83F%26umidtoken%3DYM1Tn368zEUDANJ3xFZPjhnT%26msv%3D8.0.0%26brand%3DApple%26imei%3DFD209BA9D3BBBAA9C3DF279C7B86F47067B08452%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone11Pro%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D744D0DC5-B83B-4806-BF81-1B7B0BD3B92A"},{"key":"shuqisqjlbody6","val":"src=&userId=2131141404&platform=1&appVer=4.3.0.0&placeId=111111&timestamp=1624088277&sqSv=1.0&sign=0a8f6cef93870724c2c228750676ce2a&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.2.3%26utdid%3DYM1Tn368zEUDANJ3xFZPjhnT%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2131141404%26sn%3D09E595FDA0E496CCFF969FD0A1F7836065D1F83F%26umidtoken%3DYM1Tn368zEUDANJ3xFZPjhnT%26msv%3D8.0.0%26brand%3DApple%26imei%3DFD209BA9D3BBBAA9C3DF279C7B86F47067B08452%26skinVersionPrefix%3D1%26appVer%3D4.3.0.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210107%26mod%3DiPhone11Pro%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D744D0DC5-B83B-4806-BF81-1B7B0BD3B92A"},{"key":"shuqicjyurl6","val":"https://ocean.shuqireader.com/api/activity/activity/v1/lottery/info?timestamp=1624088306&userId=2131141404&activityId=311&sqSv=1.0&sign=48da4c8b652beac5807dbd2609c9b2e2&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.2.3%26utdid%3DYM1Tn368zEUDANJ3xFZPjhnT%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2131141404%26sn%3D09E595FDA0E496CCFF969FD0A1F7836065D1F83F%26umidtoken%3DzGpLW05LOjdXTTV6I9PBE4OINCk7S%252FrE%26msv%3D8.0.0%26brand%3DApple%26imei%3DFD209BA9D3BBBAA9C3DF279C7B86F47067B08452%26skinVersionPrefix%3D1%26appVer%3D4.3.0.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210107%26mod%3DiPhone11Pro%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D744D0DC5-B83B-4806-BF81-1B7B0BD3B92A"},{"key":"shuqicjcsbody6","val":"_public=utype%3Dpre_vip%26idfa%3D744D0DC5-B83B-4806-BF81-1B7B0BD3B92A%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26umidtoken%3DYM1Tn368zEUDANJ3xFZPjhnT%26user_id%3D2131141404%26sn%3D09E595FDA0E496CCFF969FD0A1F7836065D1F83F%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3DFD209BA9D3BBBAA9C3DF279C7B86F47067B08452%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhone11Pro%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26utdid%3DYM1Tn368zEUDANJ3xFZPjhnT%26soft_id%3D21%26sdk%3D13.2.3&deliveryId=711&key=sq_app_ad&miniWua=HHnB_WygDi8y2yOBa7CempiWgNMMErQJVB8fv9/6ics3DTjI%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=703&sign=6CF29EF4CFB0BB3529DDC6332EE940C4&timestamp=1624090232&userId=2131141404&user_id=2131141404&wua=HIVW_BTw5SJYnfbssUi/pFvYKXN%2BaTAQ9WX9pL6nrvv/YfnIBDAsfAZcrzSO%2BcL5KAK93MjXCMWu1IZWMN55HQRfZKlwA0MLchRIWn4mnkAc7n1HZtBFYg0Dww6XKLANdTUcR2gxEL5m8oUSg8Exo9/E7jwdhStgTFBLtqgre2i7YLO7PahPay2xpsWcFM7JAB4E0x6YcRFbL5TAPLeSZhNYysuu5mmo4UB4cRAX0soGe4Pk%3D"},{"key":"shuqicjbody6","val":"wua=HIVW_Eg0zw%2Blx42JIPmfr%2FDcCNzgy3%2FLDjcyNBItRRccFG9piJ4XD9rmjhKQWTROBMtwKw8mupqkSiWVj5wO4W8qfz9YE8C0hzCBjBrBJ6mk6DCeJqShm%2FYkC%2FcDg3fbu98wcZ0ptCJBxMHBR9%2Fqg6xeStVpDrrIgdXPRtNeGilOv2nAa%2FuJvr2SGcsuxDvMGG913qIL6V%2BE9W2eWmi0ctjHDoMBrv3I2SP12q9zWSKkiafg%3D&ua=&userId=2131141404&umidtoken=YM1Tn368zEUDANJ3xFZPjhnT&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&asac=2A20C07RJ9F51AOEFSNHDR&timestamp=1624090236&activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&sqSv=1.0&sign=366d9255df871fa75281a582f7d679d7&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.2.3%26utdid%3DYM1Tn368zEUDANJ3xFZPjhnT%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2131141404%26sn%3D09E595FDA0E496CCFF969FD0A1F7836065D1F83F%26umidtoken%3DYM1Tn368zEUDANJ3xFZPjhnT%26msv%3D8.0.0%26brand%3DApple%26imei%3DFD209BA9D3BBBAA9C3DF279C7B86F47067B08452%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone11Pro%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D744D0DC5-B83B-4806-BF81-1B7B0BD3B92A"},{"key":"shuqijsspbody6","val":""},{"key":"shuqijsydurl6","val":""},{"key":"shuqijsydbody6","val":""},{"key":"shuqijsqdbody6","val":""},{"key":"shuqijsqdspyurl6","val":""},{"key":"shuqijsqdspbody6","val":""},{"key":"shuqijsrwbody6","val":""},{"key":"shuqijsfxbody6","val":""},{"key":"shuqijsbookurl6","val":""},{"key":"shuqijsbookbody6","val":""},{"key":"shuqijssprwurl6","val":""},{"key":"shuqiuserurl7","val":"https://ocean.shuqireader.com/api/jaccount/accountapi/v1/sapi/account/getBindinfo?userId=2127571764&sqSv=1.0&timestamp=1624088366&sign=2a38023b7dd1533611ad08f96ecc6247&key=sq_h5_gateway"},{"key":"shuqisyurl7","val":"https://render.shuqireader.com/load/resource?sdk=13.1&utdid=YM1Tn368zEUDANJ3xFZPjhnT&ustatus=0&first_placeid=111111&net_env=3g&placeid=111111&user_id=2127571764&sn=ED7B2B875B73296FB1DF767FBC0EBC58DE851B00&umidtoken=YM1Tn368zEUDANJ3xFZPjhnT&msv=8.0.0&brand=Apple&imei=05E9A5ED6E56B304B3E757CF9EFFA8618250A8DD&skinVersionPrefix=1&appVer=4.3.0.0&skinActiveColor=0F9970&manufacturer=Apple&session=&skinColor=23B383&platform=iOS&ver=210107&mod=UnknowniPad&statusBarHeight=44.000000&skinVersion=1&wh=1242x2688&soft_id=21&utype=pre_vip&skinId=999&idfa=EA046E85-32FF-4E80-95D2-B0769309B1DA"},{"key":"shuqisybody7","val":"appVer=4.3.0.0&imei=05E9A5ED6E56B304B3E757CF9EFFA8618250A8DD&isNewUser=1&params=%7B%22resources%22%3A%7B%22ShuqiVipEntry%22%3A%7B%7D%2C%22personalCardConfig%22%3A%7B%7D%7D%7D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=cc515e602fdbb8063ec648f4238f8318&sn=ED7B2B875B73296FB1DF767FBC0EBC58DE851B00&soft_id=21&timestamp=1624088321&user_id=2127571764&ver=210107"},{"key":"shuqispbody7","val":"_public=utype%3Dpre_vip%26idfa%3DEA046E85-32FF-4E80-95D2-B0769309B1DA%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26umidtoken%3DYM1Tn368zEUDANJ3xFZPjhnT%26user_id%3D2127571764%26sn%3DED7B2B875B73296FB1DF767FBC0EBC58DE851B00%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D05E9A5ED6E56B304B3E757CF9EFFA8618250A8DD%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DUnknowniPad%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26utdid%3DYM1Tn368zEUDANJ3xFZPjhnT%26soft_id%3D21%26sdk%3D13.1&deliveryId=525&key=sq_app_ad&miniWua=HHnB_5FQ1/8uyvODr6d4WabTLLbucKLbaMy6Kg8huV0eQrNQ%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=626&sign=D557B1A6B218347B91D8DC8EA4F31B82&timestamp=1624090259&userId=2127571764&user_id=2127571764&wua=HIVW_7pnPfZCIqNyzKZ1m7ebXoyAJmVM54bOIGCVgz83J6KLvCvKG1SKRaMG3WI6nhaZ7dInvZI41eWUaSgBRQPufWSLq9M8ShdhbSY3pknYDKu256QO%2B/0/IKmEn5F484uO4ZmcxrMySf5n%2BRmdVNvOI%2BQv3RyDTah01QSvoJuEc1niAsNPtKdbgVFfn%2BUNKzbY5fS9NrjQtof6eagm4%2BdRCr7e3ZVqvqcveAcDQ8ps0OTA%3D"},{"key":"shuqiscbody7","val":""},{"key":"shuqiydbody7","val":""},{"key":"shuqiqdbody7","val":"clientTimestamp=1624088339&position=501&userId=2127571764&signInType=1&wua=HIVW_A08evU57pqGoflfwd4IoGOnSOFynsOGmB%2BLCzLKlxU1y4czqaVxbEfXbTyRH6lVKhb6OgIvZYNP%2Bu85vQRSD75PnG1kOOALdMmU7lM9mRq2hsfHd26EXEfcnRCS%2FIuJzVRj1eNMaBTjta8do2Y5jGAFSKEKn7xx8kRSw8CJuMIRk5%2FymphaUh6C%2BYW0g86Y%2FKQkl%2BNFzIfWQ3e4lOHrTA%2FkO5jD%2FOMh2yDhm1zbCyTinAK5aYICMIZd31oEBr1GuZ6M%2F0tpcDvYzP4zL%2BHlw7BzAeQnDlhH%2BZSVst70VHbvO2uqp8HFeeqV0QyBwfIfa7roMWtEg0vfnnxpvwM29%2FS%2FNNSZfDS7LUoSLtdTPjvowsKv%2F8UKYW9QepdnuWLLx&ua=&miniWua=HHnB_nm3SyWIe4rUcgnyAqI75HYiqZ28q2lPOIhqfieoh9F5JvhVpMqDme2JXF%2F9bDG3dydbPEfr6CTt8Yw9N3b0u%2FBelwmIFMTZJSOAD7P17Z%2BJzJ40%2Bwp8Shk1DBmdaF0I2&umidtoken=YM1Tn368zEUDANJ3xFZPjhnT&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&sign=361f24e5664ff5181a226543bb189c34&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.1%26utdid%3DYM1Tn368zEUDANJ3xFZPjhnT%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2127571764%26sn%3DED7B2B875B73296FB1DF767FBC0EBC58DE851B00%26umidtoken%3DYM1Tn368zEUDANJ3xFZPjhnT%26msv%3D8.0.0%26brand%3DApple%26imei%3D05E9A5ED6E56B304B3E757CF9EFFA8618250A8DD%26skinVersionPrefix%3D1%26appVer%3D4.3.0.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210107%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DEA046E85-32FF-4E80-95D2-B0769309B1DA"},{"key":"shuqirwbody7","val":"serviceWorkerOn=1&stopPullRefresh=1&from=ShuqiTab&upf=20368&sdk=13.1&utdid=YM1Tn368zEUDANJ3xFZPjhnT&ustatus=0&first_placeid=111111&net_env=3g&placeid=111111&user_id=2127571764&sn=ED7B2B875B73296FB1DF767FBC0EBC58DE851B00&umidtoken=YM1Tn368zEUDANJ3xFZPjhnT&msv=8.0.0&brand=Apple&imei=05E9A5ED6E56B304B3E757CF9EFFA8618250A8DD&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=1&ver=210301&mod=UnknowniPad&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=EA046E85-32FF-4E80-95D2-B0769309B1DA&params=%7B%22resources%22%3A%7B%22ShuqiBsDailyTask%22%3A%7B%7D%7D%7D&userId=2127571764&placeId=111111&timestamp=1624090266&sqSv=1.0&sign=fe2bc7883b2b6e8dbe2a5b79af4d496a&key=sq_h5_gateway&_public="},{"key":"shuqifxbody7","val":""},{"key":"shuqisprwurl7","val":"https://ocean.shuqireader.com/api/ad/adserver/v1/api/getAdInfo?appVer=4.3.0.0&placeId=111111&platform=iOS&requestSrc=h5&resourceId=626&timestamp=1624088367&user_id=2127571764&sqSv=1.0&sign=2d667d1a6fb1746a166db45b2d6b9f6e&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.1%26utdid%3DYM1Tn368zEUDANJ3xFZPjhnT%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2127571764%26sn%3DED7B2B875B73296FB1DF767FBC0EBC58DE851B00%26umidtoken%3DUVdLW5BLOvrVqDV6IwixWUvzNQ8kxphv%26msv%3D8.0.0%26brand%3DApple%26imei%3D05E9A5ED6E56B304B3E757CF9EFFA8618250A8DD%26skinVersionPrefix%3D1%26appVer%3D4.3.0.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210107%26mod%3DUnknowniPad%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DEA046E85-32FF-4E80-95D2-B0769309B1DA"},{"key":"shuqijlbody7","val":"requestSrc=h5&userId=2127571764&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624090266&sqSv=1.0&sign=790a6cc092ae4856119cb29954ae3364&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.1%26utdid%3DYM1Tn368zEUDANJ3xFZPjhnT%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2127571764%26sn%3DED7B2B875B73296FB1DF767FBC0EBC58DE851B00%26umidtoken%3DYM1Tn368zEUDANJ3xFZPjhnT%26msv%3D8.0.0%26brand%3DApple%26imei%3D05E9A5ED6E56B304B3E757CF9EFFA8618250A8DD%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DEA046E85-32FF-4E80-95D2-B0769309B1DA"},{"key":"shuqisqjlbody7","val":"src=&userId=2127571764&platform=1&appVer=4.3.0.0&placeId=111111&timestamp=1624088348&sqSv=1.0&sign=81439fbc61ea75f7a3dba3a052e1d118&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.1%26utdid%3DYM1Tn368zEUDANJ3xFZPjhnT%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2127571764%26sn%3DED7B2B875B73296FB1DF767FBC0EBC58DE851B00%26umidtoken%3DYM1Tn368zEUDANJ3xFZPjhnT%26msv%3D8.0.0%26brand%3DApple%26imei%3D05E9A5ED6E56B304B3E757CF9EFFA8618250A8DD%26skinVersionPrefix%3D1%26appVer%3D4.3.0.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210107%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DEA046E85-32FF-4E80-95D2-B0769309B1DA"},{"key":"shuqicjyurl7","val":"https://ocean.shuqireader.com/api/activity/activity/v1/lottery/info?timestamp=1624088369&userId=2127571764&activityId=311&sqSv=1.0&sign=e1c0edc8d83eb6b9efd3d395745247da&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.1%26utdid%3DYM1Tn368zEUDANJ3xFZPjhnT%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2127571764%26sn%3DED7B2B875B73296FB1DF767FBC0EBC58DE851B00%26umidtoken%3DUVdLW5BLOvrVqDV6IwixWUvzNQ8kxphv%26msv%3D8.0.0%26brand%3DApple%26imei%3D05E9A5ED6E56B304B3E757CF9EFFA8618250A8DD%26skinVersionPrefix%3D1%26appVer%3D4.3.0.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210107%26mod%3DUnknowniPad%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DEA046E85-32FF-4E80-95D2-B0769309B1DA"},{"key":"shuqicjcsbody7","val":"_public=utype%3Dpre_vip%26idfa%3DEA046E85-32FF-4E80-95D2-B0769309B1DA%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26umidtoken%3DYM1Tn368zEUDANJ3xFZPjhnT%26user_id%3D2127571764%26sn%3DED7B2B875B73296FB1DF767FBC0EBC58DE851B00%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D05E9A5ED6E56B304B3E757CF9EFFA8618250A8DD%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DUnknowniPad%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26utdid%3DYM1Tn368zEUDANJ3xFZPjhnT%26soft_id%3D21%26sdk%3D13.1&deliveryId=711&key=sq_app_ad&miniWua=HHnB_TUxkOcUzD9fA3ieaCt7yvxVXZoG1avdi7pnaXy2UiJY%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=703&sign=578436E11834382AA918D6897E39C7A0&timestamp=1624090272&userId=2127571764&user_id=2127571764&wua=HIVW_E6OD4OImHmXutWvKVT8BOUIxP3aGUswd0d4bLWs0kejGy8QaN%2B0S8jQALhsJAicaEDDJvj4c4xS2lnmvsi3I3%2BuETcdS7RHXwNvKt61Pt/qJUZ4BKk9kS3q0am/GqFs84hkT5D4d4vZnYGazG8UP1tynszjhD4tVlIq6cnE/FZBjeHyR/Fk8zuyEER/cQkIwrDGNFNmg0MBIgRzY724lTFY9oWbS43xEzMeXL29FDA4%3D"},{"key":"shuqicjbody7","val":"wua=HIVW_nNAwmXFAGY5%2BRt8I2HZDeDACnpDvuo07lGvfy6zQIj6Kgb6olrRyaT8JXK1W3J%2BJBGpHYeSJ9Fp8JzbX8c%2B9MvjO%2FOeQ3ZAp1glVfKvJ3uVHC0VWfgNt5lVPbL5GfQDqyGe0gb6onFcr%2BpjyrgCP0H1jVpcoQolO58hbaJ6aWb75LSeLDDmDx%2FYl1lP14j5TAtxY27Mr7hia59QPY07sZQare9nmcsRWL1rjsA58HJg%3D&ua=&userId=2127571764&umidtoken=YM1Tn368zEUDANJ3xFZPjhnT&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&asac=2A20C07RJ9F51AOEFSNHDR&timestamp=1624090278&activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&sqSv=1.0&sign=c0aec783b169b119526f9575f035e9aa&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.1%26utdid%3DYM1Tn368zEUDANJ3xFZPjhnT%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2127571764%26sn%3DED7B2B875B73296FB1DF767FBC0EBC58DE851B00%26umidtoken%3DYM1Tn368zEUDANJ3xFZPjhnT%26msv%3D8.0.0%26brand%3DApple%26imei%3D05E9A5ED6E56B304B3E757CF9EFFA8618250A8DD%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DEA046E85-32FF-4E80-95D2-B0769309B1DA"},{"key":"shuqijsspbody7","val":""},{"key":"shuqijsydurl7","val":""},{"key":"shuqijsydbody7","val":""},{"key":"shuqijsqdbody7","val":""},{"key":"shuqijsqdspyurl7","val":""},{"key":"shuqijsqdspbody7","val":""},{"key":"shuqijsrwbody7","val":""},{"key":"shuqijsfxbody7","val":""},{"key":"shuqijsbookurl7","val":""},{"key":"shuqijsbookbody7","val":""},{"key":"shuqijssprwurl7","val":""},{"key":"shuqiuserurl8","val":"https://ocean.shuqireader.com/api/jaccount/accountapi/v1/sapi/account/getBindinfo?userId=2128018744&sqSv=1.0&timestamp=1624088475&sign=9ba6fbfc30272fa5760d75a082cd6883&key=sq_h5_gateway"},{"key":"shuqisyurl8","val":"https://render.shuqireader.com/load/resource?sdk=13.3&utdid=YM1Tn368zEUDANJ3xFZPjhnT&ustatus=0&first_placeid=111111&net_env=3g&placeid=111111&user_id=2128018744&sn=E173D4628254FBB010F902B7DB15E87DFFFEB2E9&umidtoken=YM1Tn368zEUDANJ3xFZPjhnT&msv=8.0.0&brand=Apple&imei=E208166D65F4A32EBD4099C05CC480A6C8A7E9B6&skinVersionPrefix=1&appVer=4.3.0.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=iOS&ver=210107&mod=iPhone6s&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=406C6390-96C3-4CF3-A9C2-36638C88C251"},{"key":"shuqisybody8","val":"appVer=4.3.0.0&imei=E208166D65F4A32EBD4099C05CC480A6C8A7E9B6&isNewUser=1&params=%7B%22resources%22%3A%7B%22ShuqiVipEntry%22%3A%7B%7D%2C%22personalCardConfig%22%3A%7B%7D%7D%7D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=52052db2cf08b58e5677a0c9a1c0ee6b&sn=E173D4628254FBB010F902B7DB15E87DFFFEB2E9&soft_id=21&timestamp=1624088383&user_id=2128018744&ver=210107"},{"key":"shuqispbody8","val":"_public=utype%3Dpre_vip%26idfa%3D406C6390-96C3-4CF3-A9C2-36638C88C251%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26umidtoken%3DYM1Tn368zEUDANJ3xFZPjhnT%26user_id%3D2128018744%26sn%3DE173D4628254FBB010F902B7DB15E87DFFFEB2E9%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3DE208166D65F4A32EBD4099C05CC480A6C8A7E9B6%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhone6s%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26utdid%3DYM1Tn368zEUDANJ3xFZPjhnT%26soft_id%3D21%26sdk%3D13.3&deliveryId=525&key=sq_app_ad&miniWua=HHnB_US4mRol/Uq4j4cTMYNAr0LnAuivY67aYCyiqfQ9Djf4%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=626&sign=F40465FA8E98B8E8DF99D7C008A075CE&timestamp=1624090303&userId=2128018744&user_id=2128018744&wua=HIVW_W6HaO6WCjMCskdqouqRheVOMlQVnaCTNduxAASEwl2K6lURo04W7jqDMzlIX3LPjlEJ5YUCnbbVrwtscfUYoi6EZ175iVCQt5H6C89Gt%2BoL%2BVBexWP4BUlxP7n0h9mbveBe7B2c4r7EMz9KsPD7wpz2Mq3TLF3m3Tpuc7fXN4oBZNLmb/HzB3AoOKQ5xBDy3Q4QiNe0VvGl71lBHomHlFXlqLGdBvaYkVvGzm3B9l2E%3D"},{"key":"shuqiscbody8","val":""},{"key":"shuqiydbody8","val":""},{"key":"shuqiqdbody8","val":"clientTimestamp=1624088448&position=501&userId=2128018744&signInType=1&wua=HIVW_5W6ngz21kSAMqFroqqd3jA%2BKGpRYrb5P2ekdUrD3c2NKHVPBR3LwxI3oEz8kFPDgHVnEu2g6nP8T4GSeNalS%2FiRhAmM7kLybRQ%2BjStRHWztjYSc7FJqmF1PLjtKQOU9iEp4qXtRpzUMLXU0v0FaJ8AaM3kPjZO6R3BnFjbQynaRiXooBWas%2BYIZQDr0ISC9K6YsIVAkpFxWTEymrSZVhdOcauZNewQgwmGRFbv9YOO4flr9PEleNttSEIfMQ1kKIvDccFJO3fySER%2BryfLpRyj9fCwKL9lAJV7C3i2n3ScBBVlaFlUDs15%2FfqhwP4t1BMo0zefdYFcLW%2FGmq%2BuM8M1MtA77EPZn5Vh7VQXRXF7aPlxJ9ulTnkiyESnt5T24T&ua=&miniWua=HHnB_q6oiKTg9k2La4f5gTGiKx9IftRb2rw7EA3QWPc8L9L706IgOlSpF1pQI5oTCvy9AB5mg%2BaVk3ajNoOZIKt6zTkBg8LHENf9rZRSmKZww3Q%2BCCOuW44%2BL%2Bi1UJaDeS8E4&umidtoken=4tlLI8FLOhfuxTV6I0MSPO5ENg2glLRA&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&sign=c33df75c8800f1cffac89e21e2010089&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.3%26utdid%3DYM1Tn368zEUDANJ3xFZPjhnT%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2128018744%26sn%3DE173D4628254FBB010F902B7DB15E87DFFFEB2E9%26umidtoken%3D4tlLI8FLOhfuxTV6I0MSPO5ENg2glLRA%26msv%3D8.0.0%26brand%3DApple%26imei%3DE208166D65F4A32EBD4099C05CC480A6C8A7E9B6%26skinVersionPrefix%3D1%26appVer%3D4.3.0.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210107%26mod%3DiPhone6s%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D406C6390-96C3-4CF3-A9C2-36638C88C251"},{"key":"shuqirwbody8","val":"serviceWorkerOn=1&stopPullRefresh=1&from=ShuqiTab&upf=20368&sdk=13.3&utdid=YM1Tn368zEUDANJ3xFZPjhnT&ustatus=0&first_placeid=111111&net_env=3g&placeid=111111&user_id=2128018744&sn=E173D4628254FBB010F902B7DB15E87DFFFEB2E9&umidtoken=YM1Tn368zEUDANJ3xFZPjhnT&msv=8.0.0&brand=Apple&imei=E208166D65F4A32EBD4099C05CC480A6C8A7E9B6&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=1&ver=210301&mod=iPhone6s&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=406C6390-96C3-4CF3-A9C2-36638C88C251&params=%7B%22resources%22%3A%7B%22ShuqiBsDailyTask%22%3A%7B%7D%7D%7D&userId=2128018744&placeId=111111&timestamp=1624090324&sqSv=1.0&sign=a37623920d4361ef66f84df455391d9b&key=sq_h5_gateway&_public="},{"key":"shuqifxbody8","val":""},{"key":"shuqisprwurl8","val":"https://ocean.shuqireader.com/api/ad/adserver/v1/api/getAdInfo?appVer=4.3.0.0&placeId=111111&platform=iOS&requestSrc=h5&resourceId=626&timestamp=1624088475&user_id=2128018744&sqSv=1.0&sign=79e661198d1ff03118389a0ad9197b87&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.3%26utdid%3DYM1Tn368zEUDANJ3xFZPjhnT%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2128018744%26sn%3DE173D4628254FBB010F902B7DB15E87DFFFEB2E9%26umidtoken%3D4tlLI8FLOhfuxTV6I0MSPO5ENg2glLRA%26msv%3D8.0.0%26brand%3DApple%26imei%3DE208166D65F4A32EBD4099C05CC480A6C8A7E9B6%26skinVersionPrefix%3D1%26appVer%3D4.3.0.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210107%26mod%3DiPhone6s%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D406C6390-96C3-4CF3-A9C2-36638C88C251"},{"key":"shuqijlbody8","val":"requestSrc=h5&userId=2128018744&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624090324&sqSv=1.0&sign=34d4b3589cc9f30a3b2cc793f2504715&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.3%26utdid%3DYM1Tn368zEUDANJ3xFZPjhnT%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2128018744%26sn%3DE173D4628254FBB010F902B7DB15E87DFFFEB2E9%26umidtoken%3DYM1Tn368zEUDANJ3xFZPjhnT%26msv%3D8.0.0%26brand%3DApple%26imei%3DE208166D65F4A32EBD4099C05CC480A6C8A7E9B6%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone6s%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D406C6390-96C3-4CF3-A9C2-36638C88C251"},{"key":"shuqisqjlbody8","val":"src=&userId=2128018744&platform=1&appVer=4.3.0.0&placeId=111111&timestamp=1624088452&sqSv=1.0&sign=1107d3af1e303afd31a420cc195ae5a2&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.3%26utdid%3DYM1Tn368zEUDANJ3xFZPjhnT%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2128018744%26sn%3DE173D4628254FBB010F902B7DB15E87DFFFEB2E9%26umidtoken%3D4tlLI8FLOhfuxTV6I0MSPO5ENg2glLRA%26msv%3D8.0.0%26brand%3DApple%26imei%3DE208166D65F4A32EBD4099C05CC480A6C8A7E9B6%26skinVersionPrefix%3D1%26appVer%3D4.3.0.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210107%26mod%3DiPhone6s%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D406C6390-96C3-4CF3-A9C2-36638C88C251"},{"key":"shuqicjyurl8","val":"https://ocean.shuqireader.com/api/activity/activity/v1/lottery/info?timestamp=1624088478&userId=2128018744&activityId=311&sqSv=1.0&sign=6d2ee3488905d3d19d8ed0c5ba4fcf7b&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.3%26utdid%3DYM1Tn368zEUDANJ3xFZPjhnT%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2128018744%26sn%3DE173D4628254FBB010F902B7DB15E87DFFFEB2E9%26umidtoken%3D4tlLI8FLOhfuxTV6I0MSPO5ENg2glLRA%26msv%3D8.0.0%26brand%3DApple%26imei%3DE208166D65F4A32EBD4099C05CC480A6C8A7E9B6%26skinVersionPrefix%3D1%26appVer%3D4.3.0.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210107%26mod%3DiPhone6s%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D406C6390-96C3-4CF3-A9C2-36638C88C251"},{"key":"shuqicjcsbody8","val":"_public=utype%3Dpre_vip%26idfa%3D406C6390-96C3-4CF3-A9C2-36638C88C251%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26umidtoken%3DYM1Tn368zEUDANJ3xFZPjhnT%26user_id%3D2128018744%26sn%3DE173D4628254FBB010F902B7DB15E87DFFFEB2E9%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3DE208166D65F4A32EBD4099C05CC480A6C8A7E9B6%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhone6s%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26utdid%3DYM1Tn368zEUDANJ3xFZPjhnT%26soft_id%3D21%26sdk%3D13.3&deliveryId=711&key=sq_app_ad&miniWua=HHnB_5xYTXg1W5jpGHLRYwnZqbzQkk0YYwwT82TQZkL7TlKY%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=703&sign=B221138B37EF35D90FD475131F3D6ACD&timestamp=1624090331&userId=2128018744&user_id=2128018744&wua=HIVW_BTw5SJYnfbssUi/pFvYKXAPjT9B1SjURmBYlFFyXdtxKb5ywm1Yzn3mTA0/YHtO0PUra6RzwCyTumT4E2WICZegZuszgIovlWOQ5CcVHHgywEDuWWssL0nEj/kVcgynOjppeu8LB4FIszLIPbAcSSrCWmSIbEj%2BOfpyyP12GGn3H1maOyFPIeqMNTy0WhukNBvPhNKUyr4WjkA8PTEDxlGUTadj%2BkIEPgnpMrzg%2BZ1U%3D"},{"key":"shuqicjbody8","val":"wua=HIVW_%2BIdv4oOOGHhdU4qZ5Fqh46e6VSVZnX1kq7%2FN9wvYq46lI%2F4BeLtHlrTzC%2FIe2pJL%2BLdW4ms6CGoCueP14rLbnkbBNTCDvD3d14Ko31KtNZEF0Sz8Nvm9xucgv2Ujnxn%2FYHS5%2BpeFDcMIoKsesmzlTLSKFrM0nY1mVC8fbTcMDoXN7CGFAes8zSBxn19ZbYnNkvn4RcYRJTpUucbSJa1KGBUtDE%2Bn0BGO2%2B5dacrfJXU%3D&ua=&userId=2128018744&umidtoken=YM1Tn368zEUDANJ3xFZPjhnT&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&asac=2A20C07RJ9F51AOEFSNHDR&timestamp=1624090335&activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&sqSv=1.0&sign=5cb08d3c4467497c4819536e2d06981d&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.3%26utdid%3DYM1Tn368zEUDANJ3xFZPjhnT%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2128018744%26sn%3DE173D4628254FBB010F902B7DB15E87DFFFEB2E9%26umidtoken%3DYM1Tn368zEUDANJ3xFZPjhnT%26msv%3D8.0.0%26brand%3DApple%26imei%3DE208166D65F4A32EBD4099C05CC480A6C8A7E9B6%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone6s%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D406C6390-96C3-4CF3-A9C2-36638C88C251"},{"key":"shuqijsspbody8","val":""},{"key":"shuqijsydurl8","val":""},{"key":"shuqijsydbody8","val":""},{"key":"shuqijsqdbody8","val":""},{"key":"shuqijsqdspyurl8","val":""},{"key":"shuqijsqdspbody8","val":""},{"key":"shuqijsrwbody8","val":""},{"key":"shuqijsfxbody8","val":""},{"key":"shuqijsbookurl8","val":""},{"key":"shuqijsbookbody8","val":""},{"key":"shuqijssprwurl8","val":""},{"key":"shuqiuserurl9","val":"https://ocean.shuqireader.com/api/jaccount/accountapi/v1/sapi/account/getBindinfo?userId=2128266907&sqSv=1.0&timestamp=1624088540&sign=bc174e64704b98faec5d2a0b4881fa03&key=sq_h5_gateway"},{"key":"shuqisyurl9","val":"https://render.shuqireader.com/load/resource?sdk=13.1.1&utdid=YM1TuuwOfYgDAH6J%2BvDrP9Lh&ustatus=0&first_placeid=111111&net_env=4g&placeid=111111&user_id=2128266907&sn=77B0B9C78697AB277625CC84F75E6A9BEBEDC2D6&umidtoken=YM1TuuwOfYgDAH6J%2BvDrP9Lh&msv=8.0.0&brand=Apple&imei=884DD4389F6BF49003F9D27F83E0F2BB0E1C5393&skinVersionPrefix=1&appVer=4.3.0.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=iOS&ver=210107&mod=iPhone6&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=311788B8-137B-431C-AF08-A05C06251C3D"},{"key":"shuqisybody9","val":"appVer=4.3.0.0&imei=884DD4389F6BF49003F9D27F83E0F2BB0E1C5393&isNewUser=1&params=%7B%22resources%22%3A%7B%22ShuqiVipEntry%22%3A%7B%7D%2C%22personalCardConfig%22%3A%7B%7D%7D%7D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=5d7f76b2f7e4f7d95d773503c01b3d22&sn=77B0B9C78697AB277625CC84F75E6A9BEBEDC2D6&soft_id=21&timestamp=1624088494&user_id=2128266907&ver=210107"},{"key":"shuqispbody9","val":"_public=utype%3Dpre_vip%26idfa%3D311788B8-137B-431C-AF08-A05C06251C3D%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26umidtoken%3DYM1TuuwOfYgDAH6J%2BvDrP9Lh%26user_id%3D2128266907%26sn%3D77B0B9C78697AB277625CC84F75E6A9BEBEDC2D6%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D884DD4389F6BF49003F9D27F83E0F2BB0E1C5393%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhone6%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26utdid%3DYM1TuuwOfYgDAH6J%2BvDrP9Lh%26soft_id%3D21%26sdk%3D13.1.1&deliveryId=525&key=sq_app_ad&miniWua=HHnB_Rxu8%2BV%2BzUB3COMqiPBsfArtaSu3/uBg5c0OvaichbFI%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=626&sign=42440156C6D85493150F5EC2F6AF5C81&timestamp=1624090382&userId=2128266907&user_id=2128266907&wua=HIVW_thE2OwjVf8poP3HRpSKnthi8%2B9kdIrOQoy4ED9ums5lvzRxnVErMmPL5Hsq2uIfZV4IikPnve49jLLQGtCII0pyqv%2Bl8oL1Hd/ly5Ut6ITv%2BN2U1kzvXy04Ifb1pNirmc3/tpNofbQzUsLqRcQeovKuVVRNrYT0DS1Iewe4wsUXZ7uH5MV8dvmLU0FMrjdiXvVUxc4KWKyZZTBfoBOqiTkgFQflCJH%2BkrkHAWgtk4gw%3D"},{"key":"shuqiscbody9","val":""},{"key":"shuqiydbody9","val":""},{"key":"shuqiqdbody9","val":"clientTimestamp=1624088504&position=501&userId=2128266907&signInType=1&wua=HIVW_XPRDVVeAZka2MuZAnt%2Fe64GuhPHDegGGYP2VSxqMZ%2B%2Fw9CbZbLn%2FOZ0QX4kX%2BN3b59ikJ0b%2BuiwgtcpMGp6E3lbfDvdmMb03ZBGcMm1pt22IXt2Ev45nqiFukJGgG6agm1evTe6aeyRBYT6UpGA0gNbbBXNwFwM7HR%2BFwP8oEnvNoCEpqwvk89vBe8p7b5vZ02SZ0YQqWkoiNfO5mmVyt%2BdYWAukW2Lqie9ND9xkRk8FfAI2ZtGpdmjK6iJvqHsUk%2Bbp%2Blc0ubvcLvygdjgeM6s1vGeyTYVBcLQNRXKfYn9FCcK%2FFZIDg4SAGckyiA6rPgkK2GAnHQbyfqZs1pfu6Za7g1KgGDmKKf9naHWSGJhQw%2BEg0Sv%2BBnIwFxu6JouC&ua=&miniWua=HHnB_H4vyFiA6JtjMYLbHeL5OPXOGTa2y9cUvSnpAOX7aVcuK6xK5DsrOMALHaNhe2jvJZBeYmSSGyPrSW%2FbOUEksPqRvw%2FrUTcOc%2Fp3TBqzf%2BnpyD78c1KfAq28oqDCOuMiJ&umidtoken=YM1TuuwOfYgDAH6J%2BvDrP9Lh&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&sign=d6532c39414735f75d7fe9a7484e6954&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.1.1%26utdid%3DYM1TuuwOfYgDAH6J%252BvDrP9Lh%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2128266907%26sn%3D77B0B9C78697AB277625CC84F75E6A9BEBEDC2D6%26umidtoken%3DYM1TuuwOfYgDAH6J%252BvDrP9Lh%26msv%3D8.0.0%26brand%3DApple%26imei%3D884DD4389F6BF49003F9D27F83E0F2BB0E1C5393%26skinVersionPrefix%3D1%26appVer%3D4.3.0.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210107%26mod%3DiPhone6%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D311788B8-137B-431C-AF08-A05C06251C3D"},{"key":"shuqirwbody9","val":"serviceWorkerOn=1&stopPullRefresh=1&from=ShuqiTab&upf=20368&sdk=13.1.1&utdid=YM1TuuwOfYgDAH6J%2BvDrP9Lh&ustatus=0&first_placeid=111111&net_env=4g&placeid=111111&user_id=2128266907&sn=77B0B9C78697AB277625CC84F75E6A9BEBEDC2D6&umidtoken=YM1TuuwOfYgDAH6J%2BvDrP9Lh&msv=8.0.0&brand=Apple&imei=884DD4389F6BF49003F9D27F83E0F2BB0E1C5393&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=1&ver=210301&mod=iPhone6&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=311788B8-137B-431C-AF08-A05C06251C3D&params=%7B%22resources%22%3A%7B%22ShuqiBsDailyTask%22%3A%7B%7D%7D%7D&userId=2128266907&placeId=111111&timestamp=1624090438&sqSv=1.0&sign=1c227c5fc39afc156655579f00726a2e&key=sq_h5_gateway&_public="},{"key":"shuqifxbody9","val":""},{"key":"shuqisprwurl9","val":"https://ocean.shuqireader.com/api/ad/adserver/v1/api/getAdInfo?appVer=4.3.0.0&placeId=111111&platform=iOS&requestSrc=h5&resourceId=626&timestamp=1624088540&user_id=2128266907&sqSv=1.0&sign=052890be8d244b20e2fc8084fb389862&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.1.1%26utdid%3DYM1TuuwOfYgDAH6J%252BvDrP9Lh%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2128266907%26sn%3D77B0B9C78697AB277625CC84F75E6A9BEBEDC2D6%26umidtoken%3DG9BLNExLOkdv8TV6I%252FFwpoK8N7iQz54d%26msv%3D8.0.0%26brand%3DApple%26imei%3D884DD4389F6BF49003F9D27F83E0F2BB0E1C5393%26skinVersionPrefix%3D1%26appVer%3D4.3.0.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210107%26mod%3DiPhone6%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D311788B8-137B-431C-AF08-A05C06251C3D"},{"key":"shuqijlbody9","val":"requestSrc=h5&userId=2128266907&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624090438&sqSv=1.0&sign=9fcf64f5b5b542ec716b71f4ac3d7c88&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.1.1%26utdid%3DYM1TuuwOfYgDAH6J%252BvDrP9Lh%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2128266907%26sn%3D77B0B9C78697AB277625CC84F75E6A9BEBEDC2D6%26umidtoken%3DYM1TuuwOfYgDAH6J%252BvDrP9Lh%26msv%3D8.0.0%26brand%3DApple%26imei%3D884DD4389F6BF49003F9D27F83E0F2BB0E1C5393%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone6%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D311788B8-137B-431C-AF08-A05C06251C3D"},{"key":"shuqisqjlbody9","val":"src=&userId=2128266907&platform=1&appVer=4.3.0.0&placeId=111111&timestamp=1624088509&sqSv=1.0&sign=480be0d1227390c5113244ab82e47307&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.1.1%26utdid%3DYM1TuuwOfYgDAH6J%252BvDrP9Lh%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2128266907%26sn%3D77B0B9C78697AB277625CC84F75E6A9BEBEDC2D6%26umidtoken%3DYM1TuuwOfYgDAH6J%252BvDrP9Lh%26msv%3D8.0.0%26brand%3DApple%26imei%3D884DD4389F6BF49003F9D27F83E0F2BB0E1C5393%26skinVersionPrefix%3D1%26appVer%3D4.3.0.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210107%26mod%3DiPhone6%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D311788B8-137B-431C-AF08-A05C06251C3D"},{"key":"shuqicjyurl9","val":"https://ocean.shuqireader.com/api/activity/activity/v1/lottery/info?timestamp=1624088543&userId=2128266907&activityId=311&sqSv=1.0&sign=b0687ca709d7aca3f066649f70ace7f5&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.1.1%26utdid%3DYM1TuuwOfYgDAH6J%252BvDrP9Lh%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2128266907%26sn%3D77B0B9C78697AB277625CC84F75E6A9BEBEDC2D6%26umidtoken%3DG9BLNExLOkdv8TV6I%252FFwpoK8N7iQz54d%26msv%3D8.0.0%26brand%3DApple%26imei%3D884DD4389F6BF49003F9D27F83E0F2BB0E1C5393%26skinVersionPrefix%3D1%26appVer%3D4.3.0.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210107%26mod%3DiPhone6%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D311788B8-137B-431C-AF08-A05C06251C3D"},{"key":"shuqicjcsbody9","val":"_public=utype%3Dpre_vip%26idfa%3D311788B8-137B-431C-AF08-A05C06251C3D%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26umidtoken%3DYM1TuuwOfYgDAH6J%2BvDrP9Lh%26user_id%3D2128266907%26sn%3D77B0B9C78697AB277625CC84F75E6A9BEBEDC2D6%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D884DD4389F6BF49003F9D27F83E0F2BB0E1C5393%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhone6%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26utdid%3DYM1TuuwOfYgDAH6J%2BvDrP9Lh%26soft_id%3D21%26sdk%3D13.1.1&deliveryId=711&key=sq_app_ad&miniWua=HHnB_6TAI1nGZlPZUIKz45TmPnwE8By4cfQxSlJrNtTJUfx0%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=703&sign=7AF344B7197F713788988625148FF7F1&timestamp=1624090445&userId=2128266907&user_id=2128266907&wua=HIVW_%2BlFfEWb3JYD3fqTaNH50PMi4tHnXuke7hv4OkesT6Ag0dENDDfZ2OhwZsgRJ8q6Wy0iExDOMaxX3sSUCkOd4wYgymRWi2mp7V1%2BOPUKzKeyaLsY7t3Rmn2QKIm7dJF8c9gtOohRkaIek1SVBiKfumidDU46AHBzlXRAuO3TLf0HowHeRZeo2A0AHaBVf8v7SHYYR%2ByrrK%2BHRMfQaBKiDe%2BhU/h%2BLDqYb%2BX8f%2BBFJzbw%3D"},{"key":"shuqicjbody9","val":"wua=HIVW_Nn09GjW9jyf3aTXDD576JZEiEdd7qHzV5PZVJ9cErWbCQmvndwdnVOmr0PtapQO5CBUXeyqzURs3RKSgyD64kxGMPKRUyFK9kn0XeJw9cEzv6ehGVGnBMy89dtiFxeePqNYYqPy%2F3OwJBu%2FajJdzPysDYxffWHn3BWfDefmC8itLCJ3UUQhCa2k%2FawCd8kUyJ0JtoRHetsqkchx64sHf8g%3D%3D&ua=&userId=2128266907&umidtoken=YM1TuuwOfYgDAH6J%2BvDrP9Lh&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&asac=2A20C07RJ9F51AOEFSNHDR&timestamp=1624090451&activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&sqSv=1.0&sign=e1053499e9370b828f6af138aa6095a3&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.1.1%26utdid%3DYM1TuuwOfYgDAH6J%252BvDrP9Lh%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2128266907%26sn%3D77B0B9C78697AB277625CC84F75E6A9BEBEDC2D6%26umidtoken%3DYM1TuuwOfYgDAH6J%252BvDrP9Lh%26msv%3D8.0.0%26brand%3DApple%26imei%3D884DD4389F6BF49003F9D27F83E0F2BB0E1C5393%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone6%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D311788B8-137B-431C-AF08-A05C06251C3D"},{"key":"shuqijsspbody9","val":""},{"key":"shuqijsydurl9","val":""},{"key":"shuqijsydbody9","val":""},{"key":"shuqijsqdbody9","val":""},{"key":"shuqijsqdspyurl9","val":""},{"key":"shuqijsqdspbody9","val":""},{"key":"shuqijsrwbody9","val":""},{"key":"shuqijsfxbody9","val":""},{"key":"shuqijsbookurl9","val":""},{"key":"shuqijsbookbody9","val":""},{"key":"shuqijssprwurl9","val":""},{"key":"shuqiuserurl10","val":"https://ocean.shuqireader.com/api/jaccount/accountapi/v1/sapi/account/getBindinfo?userId=2131041486&sqSv=1.0&timestamp=1624088676&sign=649f3188a7197c8e002647cedebe9a03&key=sq_h5_gateway"},{"key":"shuqisyurl10","val":"https://render.shuqireader.com/load/resource?sdk=13.3.1&utdid=YM2gH7UssFsDAC6LBLeRQBMg&ustatus=0&first_placeid=111111&net_env=wifi&placeid=111111&user_id=2131041486&sn=6A7A0F3FFFDB5D6F77AE36BFB748ED2EA7416DD2&umidtoken=YM2gH7UssFsDAC6LBLeRQBMg&msv=8.0.0&brand=Apple&imei=E001895264866114EEFE904A2408012B4CB81313&skinVersionPrefix=1&appVer=4.3.0.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=iOS&ver=210107&mod=iPhone6splus&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=A00D0188-608A-4A7D-A8BF-229827C1A203"},{"key":"shuqisybody10","val":"appVer=4.3.0.0&imei=E001895264866114EEFE904A2408012B4CB81313&isNewUser=1&params=%7B%22resources%22%3A%7B%22ShuqiVipEntry%22%3A%7B%7D%2C%22personalCardConfig%22%3A%7B%7D%7D%7D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=2fd49a5980a5f465353d8093a84a93f4&sn=6A7A0F3FFFDB5D6F77AE36BFB748ED2EA7416DD2&soft_id=21&timestamp=1624088614&user_id=2131041486&ver=210107"},{"key":"shuqispbody10","val":"_public=utype%3Dpre_vip%26idfa%3DA00D0188-608A-4A7D-A8BF-229827C1A203%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26umidtoken%3DYM2gH7UssFsDAC6LBLeRQBMg%26user_id%3D2131041486%26sn%3D6A7A0F3FFFDB5D6F77AE36BFB748ED2EA7416DD2%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3DE001895264866114EEFE904A2408012B4CB81313%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhone6splus%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26utdid%3DYM2gH7UssFsDAC6LBLeRQBMg%26soft_id%3D21%26sdk%3D13.3.1&deliveryId=525&key=sq_app_ad&miniWua=HHnB_bP95UtwIhXtTOmkQlQnqUVFueW4WaMCKtTzewqQra7U%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=626&sign=772FF9FCB10B26C21DC851C6C8841600&timestamp=1624090483&userId=2131041486&user_id=2131041486&wua=HIVW_CBl1l0A6DT4v/wW0XsduiVc1kEgsikMO0dt4wG6RcilpcVYeDSO/jgKEwl9RHKjlhYZzLozgkESG6d8aOPXoUu5MUHCsEKYarq06c5XmbFRpPzV2Kr7JdlWN9Fmn6hLe4%2BFzr6Svp8xLk/NGXeF1S0ZClEyXASFnU94JOQ3KXG9Vqrmajjib5Ut8r9IY6PtG0Dtaru4OiZH2zLOifhGa%2BZu9EQ5mlJQCqSbrUaUbkLA%3D"},{"key":"shuqiscbody10","val":""},{"key":"shuqiydbody10","val":""},{"key":"shuqiqdbody10","val":"clientTimestamp=1624088627&position=501&userId=2131041486&signInType=1&wua=HIVW_P5nYjjDn3d0gbKJhjTnkq0GAbtejkBk%2Fm2joIjHEx9DQKG8yMEkavAQoB5bARuvxH2yKrBcQACg798a%2BKaqxQ614o9b1e3UedlmkUZ%2F7IEyQOsLuTsHpaH7ogdj3xhc%2FqaY%2BIw0eADjd3umNgqA7QyCQc5iFO1YWMtc1zjMyKGs%2Btol1e65K4BszgMUZW6%2BYPiHSZvehJFhMR1YRlkS4LtXHo9aatUpHmkdkyzNyZpFafUdmOQRBDgpzWOAbAfqYV3OwijE2nexI5RCKEHv5SQRJh31T9Q6G7fsVzyLoS8nUia27tYfaL6IXSZBa7IZWQwgOj7T8QqzpWPIZLo2Dut25v8kIVb61VZvlSOEyqHicM31CNh%2FugA45eVlB7R0D&ua=&miniWua=HHnB_mC%2FeY4%2B24G%2BWuftyvTAw6apswc%2F7T9F79JwlNZ9NR1wOD4xxXfGZIVO%2BbdnfnfCgwS8Mf1tDDHqn%2F3abu9jOVFu8QVoBO2DIeVp5zQ8xJSTkIXLERUREUjyAK8v5F05%2F&umidtoken=YM2gH7UssFsDAC6LBLeRQBMg&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&sign=433d74d4fe68c860f2a2aa177ef14276&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.3.1%26utdid%3DYM2gH7UssFsDAC6LBLeRQBMg%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2131041486%26sn%3D6A7A0F3FFFDB5D6F77AE36BFB748ED2EA7416DD2%26umidtoken%3DYM2gH7UssFsDAC6LBLeRQBMg%26msv%3D8.0.0%26brand%3DApple%26imei%3DE001895264866114EEFE904A2408012B4CB81313%26skinVersionPrefix%3D1%26appVer%3D4.3.0.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210107%26mod%3DiPhone6splus%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DA00D0188-608A-4A7D-A8BF-229827C1A203"},{"key":"shuqirwbody10","val":"serviceWorkerOn=1&stopPullRefresh=1&from=ShuqiTab&upf=20368&sdk=13.3.1&utdid=YM2gH7UssFsDAC6LBLeRQBMg&ustatus=0&first_placeid=111111&net_env=wifi&placeid=111111&user_id=2131041486&sn=6A7A0F3FFFDB5D6F77AE36BFB748ED2EA7416DD2&umidtoken=YM2gH7UssFsDAC6LBLeRQBMg&msv=8.0.0&brand=Apple&imei=E001895264866114EEFE904A2408012B4CB81313&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=1&ver=210301&mod=iPhone6splus&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=A00D0188-608A-4A7D-A8BF-229827C1A203&params=%7B%22resources%22%3A%7B%22ShuqiBsDailyTask%22%3A%7B%7D%7D%7D&userId=2131041486&placeId=111111&timestamp=1624090486&sqSv=1.0&sign=a2b6641212a03cfa41816f529d5fe7c2&key=sq_h5_gateway&_public="},{"key":"shuqifxbody10","val":""},{"key":"shuqisprwurl10","val":"https://ocean.shuqireader.com/api/ad/adserver/v1/api/getAdInfo?appVer=4.3.0.0&placeId=111111&platform=iOS&requestSrc=h5&resourceId=626&timestamp=1624088677&user_id=2131041486&sqSv=1.0&sign=02e731762ef66a290246dce3e48167a9&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.3.1%26utdid%3DYM2gH7UssFsDAC6LBLeRQBMg%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2131041486%26sn%3D6A7A0F3FFFDB5D6F77AE36BFB748ED2EA7416DD2%26umidtoken%3D2jxLHgFLOmV%252FgTV6IzUd6ow2OX6hay0P%26msv%3D8.0.0%26brand%3DApple%26imei%3DE001895264866114EEFE904A2408012B4CB81313%26skinVersionPrefix%3D1%26appVer%3D4.3.0.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210107%26mod%3DiPhone6splus%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DA00D0188-608A-4A7D-A8BF-229827C1A203"},{"key":"shuqijlbody10","val":"requestSrc=h5&userId=2131041486&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624090486&sqSv=1.0&sign=11a5a5ae7649bd7c36d600afec1fa6c5&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.3.1%26utdid%3DYM2gH7UssFsDAC6LBLeRQBMg%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2131041486%26sn%3D6A7A0F3FFFDB5D6F77AE36BFB748ED2EA7416DD2%26umidtoken%3DYM2gH7UssFsDAC6LBLeRQBMg%26msv%3D8.0.0%26brand%3DApple%26imei%3DE001895264866114EEFE904A2408012B4CB81313%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone6splus%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DA00D0188-608A-4A7D-A8BF-229827C1A203"},{"key":"shuqisqjlbody10","val":"src=&userId=2131041486&platform=1&appVer=4.3.0.0&placeId=111111&timestamp=1624088638&sqSv=1.0&sign=d66aa2bb1cb83a967abe17343b50b33c&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.3.1%26utdid%3DYM2gH7UssFsDAC6LBLeRQBMg%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2131041486%26sn%3D6A7A0F3FFFDB5D6F77AE36BFB748ED2EA7416DD2%26umidtoken%3DYM2gH7UssFsDAC6LBLeRQBMg%26msv%3D8.0.0%26brand%3DApple%26imei%3DE001895264866114EEFE904A2408012B4CB81313%26skinVersionPrefix%3D1%26appVer%3D4.3.0.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210107%26mod%3DiPhone6splus%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DA00D0188-608A-4A7D-A8BF-229827C1A203"},{"key":"shuqicjyurl10","val":"https://ocean.shuqireader.com/api/activity/activity/v1/lottery/info?timestamp=1624088678&userId=2131041486&activityId=311&sqSv=1.0&sign=aa78ab35f5fe55a309c92c55ab917846&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.3.1%26utdid%3DYM2gH7UssFsDAC6LBLeRQBMg%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2131041486%26sn%3D6A7A0F3FFFDB5D6F77AE36BFB748ED2EA7416DD2%26umidtoken%3D2jxLHgFLOmV%252FgTV6IzUd6ow2OX6hay0P%26msv%3D8.0.0%26brand%3DApple%26imei%3DE001895264866114EEFE904A2408012B4CB81313%26skinVersionPrefix%3D1%26appVer%3D4.3.0.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210107%26mod%3DiPhone6splus%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DA00D0188-608A-4A7D-A8BF-229827C1A203"},{"key":"shuqicjcsbody10","val":"_public=utype%3Dpre_vip%26idfa%3DA00D0188-608A-4A7D-A8BF-229827C1A203%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26umidtoken%3DYM2gH7UssFsDAC6LBLeRQBMg%26user_id%3D2131041486%26sn%3D6A7A0F3FFFDB5D6F77AE36BFB748ED2EA7416DD2%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3DE001895264866114EEFE904A2408012B4CB81313%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhone6splus%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26utdid%3DYM2gH7UssFsDAC6LBLeRQBMg%26soft_id%3D21%26sdk%3D13.3.1&deliveryId=711&key=sq_app_ad&miniWua=HHnB_76RcKiuAXxTQQ0oHaij3zHXkbqMv3I%2B1MKtEhF2xvic%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=703&sign=817D769EE5256AA2423560E980E6BC37&timestamp=1624090494&userId=2131041486&user_id=2131041486&wua=HIVW_ixuA6x0470e6W5zSnRzzhm8RcJH%2BnFLn4FJi96TDhro2EaVKftNRkJXmXtrpOVVYmPhQeseXMO81QuSLjQ3GXm5SQTUmIM5NxuU5kjxEXnMsjnqzM81Y8mpUEK2PypB08Rwggk6U27g1J7EnWrswRpKmLRRTw865mMl%2BwS%2BaNBGg7IcqO8QWlD7bp4kAx563RCkpj631oSF6lyQpUd1T%2BnAitGcwMF9UbAGoEWK1gjc%3D"},{"key":"shuqicjbody10","val":"wua=HIVW_CiBaL0FE9memR4BWQGUjGGKBxeMUaRT9cnzJTk282N6vebCy4%2FY2prOqRuJLAHuV%2B76aOrlc%2ByJ32jv3bD%2B%2FVIcNE0VYRoXzOQ70FbpR1KAsDuCqyDi1veMc5fJGqMREZ3myMRTl85F4wGoDuECZmmzwX4KfW2x%2BHyW%2FB6xP0wdR7gt%2BMrNbOytr6FyKnNFQSAZpu0PFeAwg61eIZDjTb6f94nHbiysjUY%2BvD2mdZZU%3D&ua=&userId=2131041486&umidtoken=YM2gH7UssFsDAC6LBLeRQBMg&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&asac=2A20C07RJ9F51AOEFSNHDR&timestamp=1624090498&activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&sqSv=1.0&sign=0b203747d2ccc2bdb2baad34c731718a&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.3.1%26utdid%3DYM2gH7UssFsDAC6LBLeRQBMg%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2131041486%26sn%3D6A7A0F3FFFDB5D6F77AE36BFB748ED2EA7416DD2%26umidtoken%3DYM2gH7UssFsDAC6LBLeRQBMg%26msv%3D8.0.0%26brand%3DApple%26imei%3DE001895264866114EEFE904A2408012B4CB81313%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone6splus%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DA00D0188-608A-4A7D-A8BF-229827C1A203"},{"key":"shuqijsspbody10","val":""},{"key":"shuqijsydurl10","val":""},{"key":"shuqijsydbody10","val":""},{"key":"shuqijsqdbody10","val":""},{"key":"shuqijsqdspyurl10","val":""},{"key":"shuqijsqdspbody10","val":""},{"key":"shuqijsrwbody10","val":""},{"key":"shuqijsfxbody10","val":""},{"key":"shuqijsbookurl10","val":""},{"key":"shuqijsbookbody10","val":""},{"key":"shuqijssprwurl10","val":""},{"key":"shuqiuserurl11","val":"https://ocean.shuqireader.com/api/jaccount/accountapi/v1/sapi/account/getBindinfo?userId=2130210958&sqSv=1.0&timestamp=1624088747&sign=3860c1fe8865fd7ee0a5b50c5bce1469&key=sq_h5_gateway"},{"key":"shuqisyurl11","val":"https://render.shuqireader.com/load/resource?sdk=13.1.1&utdid=YM1TzNxQXLYDALtsxONUH5gi&ustatus=0&first_placeid=111111&net_env=3g&placeid=111111&user_id=2130210958&sn=17CC8F9F9241189EC1181C4A4D92A00972C914C7&umidtoken=YM1TzNxQXLYDALtsxONUH5gi&msv=8.0.0&brand=Apple&imei=9E3570081CCC91BCDACDBBFF69BD652C2A575C14&skinVersionPrefix=1&appVer=4.3.0.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=iOS&ver=210107&mod=UnknowniPad&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=73176F85-E284-419C-AF7A-837FE84F86EC"},{"key":"shuqisybody11","val":"appVer=4.3.0.0&imei=9E3570081CCC91BCDACDBBFF69BD652C2A575C14&isNewUser=1&params=%7B%22resources%22%3A%7B%22ShuqiVipEntry%22%3A%7B%7D%2C%22personalCardConfig%22%3A%7B%7D%7D%7D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=5248d10154c07eea0ac1cfb227bf05ce&sn=17CC8F9F9241189EC1181C4A4D92A00972C914C7&soft_id=21&timestamp=1624088698&user_id=2130210958&ver=210107"},{"key":"shuqispbody11","val":"_public=utype%3Dpre_vip%26idfa%3D73176F85-E284-419C-AF7A-837FE84F86EC%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26umidtoken%3DYM1TzNxQXLYDALtsxONUH5gi%26user_id%3D2130210958%26sn%3D17CC8F9F9241189EC1181C4A4D92A00972C914C7%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D9E3570081CCC91BCDACDBBFF69BD652C2A575C14%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DUnknowniPad%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26utdid%3DYM1TzNxQXLYDALtsxONUH5gi%26soft_id%3D21%26sdk%3D13.1.1&deliveryId=525&key=sq_app_ad&miniWua=HHnB_a/IBZSNk3cMHZnjhvc8fm/kglMiGVcv2U7gONZSLrA4%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=626&sign=724509754BC6D1808DC769CCB8CF672D&timestamp=1624090520&userId=2130210958&user_id=2130210958&wua=HIVW_fURytUQM5WEkdwicqjvDHqu3t74RZTm1hunluw%2B7oJ3zAfSEaB0AGnkZt3Bp%2BUUWUE0WQPquqjsjppyMxPoU5D7Pi1E7mIFTZTZGAknvIju993I2AV0E4rhlcBRhfsMi8pGl715mfS2HTYpygnh7G%2B2PzQgMr78Tp2uWY/PMwpFob%2BnLsQOYLS1BX/NBO5cBxmE4PCVx5z2RL8fQ691/pMM6EQ7lBdOkUcm8S4t0SYE%3D"},{"key":"shuqiscbody11","val":""},{"key":"shuqiydbody11","val":""},{"key":"shuqiqdbody11","val":"clientTimestamp=1624088711&position=501&userId=2130210958&signInType=1&wua=HIVW_w%2F1ULqGBgO3XoDnFcDi%2FxoaCF0JX5ULggug1TM2r7%2BCEYkkk4tXuzvMBH%2FRACgNc1KhLd%2B2y5nemyGI41uczyWWAwSxsQRe6vdoxiNIdBugkzgPKjp%2FI28HBZHkfbUxbiCuEizs%2BnnyNiMsK0f9uJFqYkGJnPKrRKpNd9Cr4qAfxQQ63bOOsPVgR3ZdZn5rnCAYHpu0GTdYnXSmVXsut1cSOSuW4%2BNmNteI2HcWFzDP9k5THXmK75MFpAF7R9vzxjwfqReEvHl3NDYk2i1X6dO8ksJSKgKdoVrIgywZzGtylJMszF3y28sPTlS12rSLXQGWbAtNJel%2Fz%2Bbrnxx2D2CWEz5twkQbHSG9ecTlrVkkJ8qOlplZc1aZPV3NCC8ap&ua=&miniWua=HHnB_LrxQZCWtKae3g1OzIG4NYM3FpV4NGQ8KX6SSpL7thM8FQ%2FL3AXRB14ekGYe3gEzH6jevwUPDsJdwVfop4VFQjQ8YYAvFBnn8N6y30O6DyxYqU9ncJFmLw300o%2Fk36dMB&umidtoken=YM1TzNxQXLYDALtsxONUH5gi&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&sign=1b11313f07650f50d4a111615a5e1d9d&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.1.1%26utdid%3DYM1TzNxQXLYDALtsxONUH5gi%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2130210958%26sn%3D17CC8F9F9241189EC1181C4A4D92A00972C914C7%26umidtoken%3DYM1TzNxQXLYDALtsxONUH5gi%26msv%3D8.0.0%26brand%3DApple%26imei%3D9E3570081CCC91BCDACDBBFF69BD652C2A575C14%26skinVersionPrefix%3D1%26appVer%3D4.3.0.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210107%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D73176F85-E284-419C-AF7A-837FE84F86EC"},{"key":"shuqirwbody11","val":"serviceWorkerOn=1&stopPullRefresh=1&from=ShuqiTab&upf=20368&sdk=13.1.1&utdid=YM1TzNxQXLYDALtsxONUH5gi&ustatus=0&first_placeid=111111&net_env=3g&placeid=111111&user_id=2130210958&sn=17CC8F9F9241189EC1181C4A4D92A00972C914C7&umidtoken=YM1TzNxQXLYDALtsxONUH5gi&msv=8.0.0&brand=Apple&imei=9E3570081CCC91BCDACDBBFF69BD652C2A575C14&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=1&ver=210301&mod=UnknowniPad&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=73176F85-E284-419C-AF7A-837FE84F86EC&params=%7B%22resources%22%3A%7B%22ShuqiBsDailyTask%22%3A%7B%7D%7D%7D&userId=2130210958&placeId=111111&timestamp=1624090537&sqSv=1.0&sign=eb55c1e1ef30ea9e839053488fa23a7c&key=sq_h5_gateway&_public="},{"key":"shuqifxbody11","val":""},{"key":"shuqisprwurl11","val":"https://ocean.shuqireader.com/api/ad/adserver/v1/api/getAdInfo?appVer=4.3.0.0&placeId=111111&platform=iOS&requestSrc=h5&resourceId=626&timestamp=1624088748&user_id=2130210958&sqSv=1.0&sign=5b71bb0d8087dc1b0514c6fe4a1d3d17&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.1.1%26utdid%3DYM1TzNxQXLYDALtsxONUH5gi%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2130210958%26sn%3D17CC8F9F9241189EC1181C4A4D92A00972C914C7%26umidtoken%3DUc1Ll15LOgdtfDV6I9atHDHROsuUUPqU%26msv%3D8.0.0%26brand%3DApple%26imei%3D9E3570081CCC91BCDACDBBFF69BD652C2A575C14%26skinVersionPrefix%3D1%26appVer%3D4.3.0.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210107%26mod%3DUnknowniPad%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D73176F85-E284-419C-AF7A-837FE84F86EC"},{"key":"shuqijlbody11","val":"requestSrc=h5&userId=2130210958&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624090537&sqSv=1.0&sign=87b1175b7f453afac4d38b40c03dcbea&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.1.1%26utdid%3DYM1TzNxQXLYDALtsxONUH5gi%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2130210958%26sn%3D17CC8F9F9241189EC1181C4A4D92A00972C914C7%26umidtoken%3DYM1TzNxQXLYDALtsxONUH5gi%26msv%3D8.0.0%26brand%3DApple%26imei%3D9E3570081CCC91BCDACDBBFF69BD652C2A575C14%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D73176F85-E284-419C-AF7A-837FE84F86EC"},{"key":"shuqisqjlbody11","val":"src=&userId=2130210958&platform=1&appVer=4.3.0.0&placeId=111111&timestamp=1624088718&sqSv=1.0&sign=cb4925f1093effe6b6faf0879e932787&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.1.1%26utdid%3DYM1TzNxQXLYDALtsxONUH5gi%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2130210958%26sn%3D17CC8F9F9241189EC1181C4A4D92A00972C914C7%26umidtoken%3DYM1TzNxQXLYDALtsxONUH5gi%26msv%3D8.0.0%26brand%3DApple%26imei%3D9E3570081CCC91BCDACDBBFF69BD652C2A575C14%26skinVersionPrefix%3D1%26appVer%3D4.3.0.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210107%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D73176F85-E284-419C-AF7A-837FE84F86EC"},{"key":"shuqicjyurl11","val":"https://ocean.shuqireader.com/api/activity/activity/v1/lottery/info?timestamp=1624088749&userId=2130210958&activityId=311&sqSv=1.0&sign=e64aa0a44d72c6df15e5ff1038d7c837&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.1.1%26utdid%3DYM1TzNxQXLYDALtsxONUH5gi%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2130210958%26sn%3D17CC8F9F9241189EC1181C4A4D92A00972C914C7%26umidtoken%3DUc1Ll15LOgdtfDV6I9atHDHROsuUUPqU%26msv%3D8.0.0%26brand%3DApple%26imei%3D9E3570081CCC91BCDACDBBFF69BD652C2A575C14%26skinVersionPrefix%3D1%26appVer%3D4.3.0.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210107%26mod%3DUnknowniPad%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D73176F85-E284-419C-AF7A-837FE84F86EC"},{"key":"shuqicjcsbody11","val":"_public=utype%3Dpre_vip%26idfa%3D73176F85-E284-419C-AF7A-837FE84F86EC%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26umidtoken%3DYM1TzNxQXLYDALtsxONUH5gi%26user_id%3D2130210958%26sn%3D17CC8F9F9241189EC1181C4A4D92A00972C914C7%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D9E3570081CCC91BCDACDBBFF69BD652C2A575C14%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DUnknowniPad%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26utdid%3DYM1TzNxQXLYDALtsxONUH5gi%26soft_id%3D21%26sdk%3D13.1.1&deliveryId=711&key=sq_app_ad&miniWua=HHnB_D3M/jeK3Y7nxkn0ez4XeJsRc5rn2fHEcY6JN/88%2B7MI%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=703&sign=2051659C7A7989F5CAAFB2CBC958F6F9&timestamp=1624090542&userId=2130210958&user_id=2130210958&wua=HIVW_6zEliQOtclrYPiVhHAWm/Upo9Xo6O1CC4s7meGyEsFXZkzZDK9H7SpyY2dYjmI1K1xtZA3LiDsFdZPOZKmp9ePBKxHnYgHOAFy9C7oBzNsLuoCXZ62m9XOikqRq2yVcgiJDgMDuClrXMftRUFLgH5GpE33OPtCsN/TZbldPMtUytJ8wqLzDChraMmITVIupQ7bjOrNZheh6%2BZ0xI/8w1o9onQD50Wcko6tpV9YSk2Rg%3D"},{"key":"shuqicjbody11","val":"wua=HIVW_X3aMKqouZ%2F2QCb%2ByQKQtdcskCS2QcsVm0h6tO5hYtvPnA7oiyfpjff7GU7EQ%2Fr0bh7DyFJSqUMDaNu5dRACr3f8WKcxnJKzpy9lmBVowcDb6ZJMjjEuZPHUAubXPOUH%2FjqjEQDShNQS1e5x0qwrCtCTiedm%2Fjbx1k9f7l3tnaP4c4%2B5N9wUwkcJ8TpDawGvmZUwsSkCNoPCXRqx6l%2FyCRSaVZWkLyUpklvo4%2FPSF3b4%3D&ua=&userId=2130210958&umidtoken=YM1TzNxQXLYDALtsxONUH5gi&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&asac=2A20C07RJ9F51AOEFSNHDR&timestamp=1624090545&activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&sqSv=1.0&sign=8e20d2d9039c1a2540c22dccfe114b7d&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.1.1%26utdid%3DYM1TzNxQXLYDALtsxONUH5gi%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2130210958%26sn%3D17CC8F9F9241189EC1181C4A4D92A00972C914C7%26umidtoken%3DYM1TzNxQXLYDALtsxONUH5gi%26msv%3D8.0.0%26brand%3DApple%26imei%3D9E3570081CCC91BCDACDBBFF69BD652C2A575C14%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D73176F85-E284-419C-AF7A-837FE84F86EC"},{"key":"shuqijsspbody11","val":""},{"key":"shuqijsydurl11","val":""},{"key":"shuqijsydbody11","val":""},{"key":"shuqijsqdbody11","val":""},{"key":"shuqijsqdspyurl11","val":""},{"key":"shuqijsqdspbody11","val":""},{"key":"shuqijsrwbody11","val":""},{"key":"shuqijsfxbody11","val":""},{"key":"shuqijsbookurl11","val":""},{"key":"shuqijsbookbody11","val":""},{"key":"shuqijssprwurl11","val":""},{"key":"shuqiuserurl12","val":"https://ocean.shuqireader.com/api/jaccount/accountapi/v1/sapi/account/getBindinfo?userId=2130708608&sqSv=1.0&timestamp=1624088823&sign=c7fa1362f40bf0c42d152e0ba43ace68&key=sq_h5_gateway"},{"key":"shuqisyurl12","val":"https://render.shuqireader.com/load/resource?sdk=13.1.2&utdid=YM2gunwUDDoDAA3nkLqiHA%2F%2F&ustatus=0&first_placeid=111111&net_env=3g&placeid=111111&user_id=2130708608&sn=E09DE17A3A45358D3D4E10DFE98C9F87C428EFC3&umidtoken=YM2gunwUDDoDAA3nkLqiHA%2F%2F&msv=8.0.0&brand=Apple&imei=5A7484219BEC25AEAFF168402BAB607A23919917&skinVersionPrefix=1&appVer=4.3.0.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=iOS&ver=210107&mod=iPad4G&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=01B3C2FE-F859-41EE-AE3F-AB7418E1C175"},{"key":"shuqisybody12","val":"appVer=4.3.0.0&imei=5A7484219BEC25AEAFF168402BAB607A23919917&isNewUser=1&params=%7B%22resources%22%3A%7B%22ShuqiVipEntry%22%3A%7B%7D%2C%22personalCardConfig%22%3A%7B%7D%7D%7D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=d45afbd5a0e178c43ec8ad0d556398d3&sn=E09DE17A3A45358D3D4E10DFE98C9F87C428EFC3&soft_id=21&timestamp=1624088765&user_id=2130708608&ver=210107"},{"key":"shuqispbody12","val":"_public=utype%3Dpre_vip%26idfa%3D01B3C2FE-F859-41EE-AE3F-AB7418E1C175%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26umidtoken%3DYM2gunwUDDoDAA3nkLqiHA//%26user_id%3D2130708608%26sn%3DE09DE17A3A45358D3D4E10DFE98C9F87C428EFC3%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D5A7484219BEC25AEAFF168402BAB607A23919917%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPad4G%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26utdid%3DYM2gunwUDDoDAA3nkLqiHA//%26soft_id%3D21%26sdk%3D13.1.2&deliveryId=525&key=sq_app_ad&miniWua=HHnB_nFrs/kQk9wFtFTthgDTV9WXxO1U7vyX1i2n2kgoC%2Bj0%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=626&sign=C9F24B3D6170D552E3B73229577C32B4&timestamp=1624090570&userId=2130708608&user_id=2130708608&wua=HIVW_x1RPse6aLRjeNg/4rPwgQxStmEvt7CtA1UO/wlmKvlZEktNjJFPGaCSZ0iP1UcG0TxT13CciiqjGZuD7nz9oMEq27zeAj63penjTENwTI7fnVNuf63CxAn%2BDn1rbXTJEJiOFB2C8qFZ27oqLp0T6wAWI3iiipsIahHcBqCJxSpN7zPPvMyWS%2BNtKypH/WkleWVbmUp5jXMuIjgqujnKJkWQd0%2BpLrGol8WD6gSVLGoY%3D"},{"key":"shuqiscbody12","val":""},{"key":"shuqiydbody12","val":""},{"key":"shuqiqdbody12","val":"clientTimestamp=1624088782&position=501&userId=2130708608&signInType=1&wua=HIVW_DTpTdgd2MHPCjkMXMH6dOqZZBrvPQ8VcAHurlAExb5f02nRZDxcFiprFIkwp57EybPjyXUXxH6oTsnIcoFphrC9UwZawuSVYzlMr4fPrEq8cvLQrMoAbwuVC%2FQnN39bfGixW7yj4%2BiaSB6BH6E%2Fn3CpstSnS8CtYteQU2Hd4V6TeYnlyA3x%2FbdqAFjxDuG%2BjiusB7Xcvx1dFhsvhvRhx6FKhaItfi1bWJI2YI4BKR6xXMa6UNoskj0eqouT0xa2kCUoWAN0vGNhcV5z6F5hsLKwF0rWGY5lXj71XcvijoEGfgVKrWhY6ToPKgAAKFvU%2F94Tjy8e8tGDOe0EqJoEZfSYvp6jEyoSSAoiaPUe2kNsBFr1Klyh3%2FPM18P5LCAF2&ua=&miniWua=HHnB_AOLDVX%2Br2v1LiPW1f%2FTP0c4ppJF%2BvtwpolVrkLO6rHaOW5peLTk336zbpIL3UeOS3OPPxiVidJyUdMg68CUNFCDKFyh931hfjw1SxqUKFA37WHGjPFAsBbWBwr4T%2BWzT&umidtoken=YM2gunwUDDoDAA3nkLqiHA%2F%2F&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&sign=b3dd7c00e9404cc38b20703f9d1facae&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.1.2%26utdid%3DYM2gunwUDDoDAA3nkLqiHA%252F%252F%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2130708608%26sn%3DE09DE17A3A45358D3D4E10DFE98C9F87C428EFC3%26umidtoken%3DYM2gunwUDDoDAA3nkLqiHA%252F%252F%26msv%3D8.0.0%26brand%3DApple%26imei%3D5A7484219BEC25AEAFF168402BAB607A23919917%26skinVersionPrefix%3D1%26appVer%3D4.3.0.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210107%26mod%3DiPad4G%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D01B3C2FE-F859-41EE-AE3F-AB7418E1C175"},{"key":"shuqirwbody12","val":"serviceWorkerOn=1&stopPullRefresh=1&from=ShuqiTab&upf=20368&sdk=13.1.2&utdid=YM2gunwUDDoDAA3nkLqiHA%2F%2F&ustatus=0&first_placeid=111111&net_env=3g&placeid=111111&user_id=2130708608&sn=E09DE17A3A45358D3D4E10DFE98C9F87C428EFC3&umidtoken=YM2gunwUDDoDAA3nkLqiHA%2F%2F&msv=8.0.0&brand=Apple&imei=5A7484219BEC25AEAFF168402BAB607A23919917&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=1&ver=210301&mod=iPad4G&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=01B3C2FE-F859-41EE-AE3F-AB7418E1C175&params=%7B%22resources%22%3A%7B%22ShuqiBsDailyTask%22%3A%7B%7D%7D%7D&userId=2130708608&placeId=111111&timestamp=1624090628&sqSv=1.0&sign=bab7fb85b27822cc5d6b1fd5af1358f7&key=sq_h5_gateway&_public="},{"key":"shuqifxbody12","val":""},{"key":"shuqisprwurl12","val":"https://ocean.shuqireader.com/api/ad/adserver/v1/api/getAdInfo?appVer=4.3.0.0&placeId=111111&platform=iOS&requestSrc=h5&resourceId=626&timestamp=1624088821&user_id=2130708608&sqSv=1.0&sign=e5f15998461fafe21daa0c9ead40f0f0&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.1.2%26utdid%3DYM2gunwUDDoDAA3nkLqiHA%252F%252F%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2130708608%26sn%3DE09DE17A3A45358D3D4E10DFE98C9F87C428EFC3%26umidtoken%3DiCJLyk5LOqy8MTV6I8YMpOw1O9x5Bo8F%26msv%3D8.0.0%26brand%3DApple%26imei%3D5A7484219BEC25AEAFF168402BAB607A23919917%26skinVersionPrefix%3D1%26appVer%3D4.3.0.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210107%26mod%3DiPad4G%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D01B3C2FE-F859-41EE-AE3F-AB7418E1C175"},{"key":"shuqijlbody12","val":"requestSrc=h5&userId=2130708608&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624090628&sqSv=1.0&sign=4df6d5c2c1bead0f2d6f5eeb36d38148&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.1.2%26utdid%3DYM2gunwUDDoDAA3nkLqiHA%252F%252F%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2130708608%26sn%3DE09DE17A3A45358D3D4E10DFE98C9F87C428EFC3%26umidtoken%3DYM2gunwUDDoDAA3nkLqiHA%252F%252F%26msv%3D8.0.0%26brand%3DApple%26imei%3D5A7484219BEC25AEAFF168402BAB607A23919917%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad4G%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D01B3C2FE-F859-41EE-AE3F-AB7418E1C175"},{"key":"shuqisqjlbody12","val":"src=&userId=2130708608&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624090583&sqSv=1.0&sign=4d7afe725ec221aa9db6bcd432aa495c&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.1.2%26utdid%3DYM2gunwUDDoDAA3nkLqiHA%252F%252F%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2130708608%26sn%3DE09DE17A3A45358D3D4E10DFE98C9F87C428EFC3%26umidtoken%3DYM2gunwUDDoDAA3nkLqiHA%252F%252F%26msv%3D8.0.0%26brand%3DApple%26imei%3D5A7484219BEC25AEAFF168402BAB607A23919917%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad4G%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D01B3C2FE-F859-41EE-AE3F-AB7418E1C175"},{"key":"shuqicjyurl12","val":"https://ocean.shuqireader.com/api/activity/activity/v1/lottery/info?timestamp=1624088824&userId=2130708608&activityId=311&sqSv=1.0&sign=c617fff39332a22bc188cf0eb3e92c06&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.1.2%26utdid%3DYM2gunwUDDoDAA3nkLqiHA%252F%252F%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2130708608%26sn%3DE09DE17A3A45358D3D4E10DFE98C9F87C428EFC3%26umidtoken%3DiCJLyk5LOqy8MTV6I8YMpOw1O9x5Bo8F%26msv%3D8.0.0%26brand%3DApple%26imei%3D5A7484219BEC25AEAFF168402BAB607A23919917%26skinVersionPrefix%3D1%26appVer%3D4.3.0.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210107%26mod%3DiPad4G%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D01B3C2FE-F859-41EE-AE3F-AB7418E1C175"},{"key":"shuqicjcsbody12","val":"_public=utype%3Dpre_vip%26idfa%3D01B3C2FE-F859-41EE-AE3F-AB7418E1C175%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26umidtoken%3DYM2gunwUDDoDAA3nkLqiHA//%26user_id%3D2130708608%26sn%3DE09DE17A3A45358D3D4E10DFE98C9F87C428EFC3%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D5A7484219BEC25AEAFF168402BAB607A23919917%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPad4G%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26utdid%3DYM2gunwUDDoDAA3nkLqiHA//%26soft_id%3D21%26sdk%3D13.1.2&deliveryId=711&key=sq_app_ad&miniWua=HHnB_2MTpF50sBSNNGq6ZAStR3RzEGcODmDHcwkP%2BHAz4Rlc%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=703&sign=F6BF5EA66E42B94B6A80ADF5A6C9D214&timestamp=1624090634&userId=2130708608&user_id=2130708608&wua=HIVW_JZW/ZdlQi1ac5VtJ/Yo4Pl/8bNFgOKUKSkZffUqYpQqnMiJ7VKxpcSdJ9xcXQEyipPt9Qc0Q206PCPsjBxzuCjPkJZ6RV5wlhzPdetOoJQLHa0kBXAf47yKLGAFq9RwYgKS0dyLB%2BYI4Pm3SAkw4kkiNW%2BQzsL7027fbn%2B8va9RbN3VFRnqJ%2Bkxm2zdNCbC97FYsZQF5DRjlZaeSRzCQaW/eO0gP6F0hdin5nzf3KBE%3D"},{"key":"shuqicjbody12","val":"wua=HIVW_LiABrKrRKr3XSjSSNJUJiaWHCaIRoPbwzIDOUqFtKsy452iJIWKd1Qoqnt4Z%2FxpNUUOXCGHJhHstRyuuj3DcRUTd6UkdcVoH4PcUGjTVI2CkLgcs1w1Qb8kixeoPp8%2FFTvb%2F3oRkXyyLtY06tQayLWBjoRBFvR0krhkf3dZBfOFPgeYXDmyHxZPJnm8CUMBtxTu%2BVBe218eDLnR%2Ff3LwVkiMslOvclv1On7FMh%2FDDd8%3D&ua=&userId=2130708608&umidtoken=YM2gunwUDDoDAA3nkLqiHA%2F%2F&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&asac=2A20C07RJ9F51AOEFSNHDR&timestamp=1624090638&activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&sqSv=1.0&sign=f541cf1573e9a533cd2042954b68437d&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.1.2%26utdid%3DYM2gunwUDDoDAA3nkLqiHA%252F%252F%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2130708608%26sn%3DE09DE17A3A45358D3D4E10DFE98C9F87C428EFC3%26umidtoken%3DYM2gunwUDDoDAA3nkLqiHA%252F%252F%26msv%3D8.0.0%26brand%3DApple%26imei%3D5A7484219BEC25AEAFF168402BAB607A23919917%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad4G%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D01B3C2FE-F859-41EE-AE3F-AB7418E1C175"},{"key":"shuqijsspbody12","val":""},{"key":"shuqijsydurl12","val":""},{"key":"shuqijsydbody12","val":""},{"key":"shuqijsqdbody12","val":""},{"key":"shuqijsqdspyurl12","val":""},{"key":"shuqijsqdspbody12","val":""},{"key":"shuqijsrwbody12","val":""},{"key":"shuqijsfxbody12","val":""},{"key":"shuqijsbookurl12","val":""},{"key":"shuqijsbookbody12","val":""},{"key":"shuqijssprwurl12","val":""},{"key":"shuqiuserurl13","val":"https://ocean.shuqireader.com/api/jaccount/accountapi/v1/sapi/account/getBindinfo?userId=2128616321&sqSv=1.0&timestamp=1624090713&sign=656889d991945f7609bc3855f9824099&key=sq_h5_gateway"},{"key":"shuqisyurl13","val":"https://render.shuqireader.com/load/resource?sdk=13.1.3&utdid=YM2hDKS8NgoDAJqPzNVGdYtM&ustatus=0&first_placeid=111111&net_env=wifi&placeid=111111&user_id=2128616321&sn=F4484B701768806B555DDCEF083C38B1833DF077&umidtoken=YM2hDKS8NgoDAJqPzNVGdYtM&msv=8.0.0&brand=Apple&imei=86154F3C279A65CA29A635B02731F58ECC03B83F&skinVersionPrefix=1&appVer=4.3.0.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=iOS&ver=210107&mod=iPhone11ProMax&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=4D471B67-D87D-405C-8F45-539B291EE812"},{"key":"shuqisybody13","val":"appVer=4.3.0.0&imei=86154F3C279A65CA29A635B02731F58ECC03B83F&isNewUser=1&params=%7B%22resources%22%3A%7B%22ShuqiVipEntry%22%3A%7B%7D%2C%22personalCardConfig%22%3A%7B%7D%7D%7D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=fc9561fa855e723e285c9e31e672725f&sn=F4484B701768806B555DDCEF083C38B1833DF077&soft_id=21&timestamp=1624088849&user_id=2128616321&ver=210107"},{"key":"shuqispbody13","val":"_public=utype%3Dpre_vip%26idfa%3D4D471B67-D87D-405C-8F45-539B291EE812%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26umidtoken%3DYM2hDKS8NgoDAJqPzNVGdYtM%26user_id%3D2128616321%26sn%3DF4484B701768806B555DDCEF083C38B1833DF077%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D86154F3C279A65CA29A635B02731F58ECC03B83F%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhone11ProMax%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26utdid%3DYM2hDKS8NgoDAJqPzNVGdYtM%26soft_id%3D21%26sdk%3D13.1.3&deliveryId=525&key=sq_app_ad&miniWua=HHnB_P3Cx5T7QpERv8ygLY2EPz0wy9MeSnQMOtFJsrRQeSGQ%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=626&sign=4F9BF613F25B43283CDFC62FEFD28357&timestamp=1624090669&userId=2128616321&user_id=2128616321&wua=HIVW_xW5pdJjIXWVWxptY3WKS3Ubuo4Ku7wfVzsFdkUtMNE14mZuedFV2G3oNT%2BNeVRe%2B%2Bg2a04BmNLHvStK/DL%2BAVcK1n5Tor1L9CTW92b8N1vrzUaXN65X6gcyzs7y6VLBivFpjPkP2eaawzPkyNL75Z3n020Klk81PMtXbLX9F5u3i8UPkHjhFsu1Jw9HPguALE6VzI8K7ITvLNjt%2B8me3T6YkrKKlPTcqqt4C576pXE8%3D"},{"key":"shuqiscbody13","val":""},{"key":"shuqiydbody13","val":""},{"key":"shuqiqdbody13","val":"clientTimestamp=1624089074&position=501&userId=2128616321&signInType=1&wua=HIVW_sctcRMln81ZerxWtkt9flFR2riMqD%2FGZlUIpIfeNZPNh18reSW1YfvtptAgX9TKphdQKAoZ6WUn%2BZR59JguvaXWJmWTPTrVEdEKt0lX9lVzd%2BzFIqiCFlDNYp58hJnqyXYrdm7wektbrepmSVQ4cYu5NrmrxVY%2Bpi%2Br0XAJWZ%2FOGD%2BeUJHFKZ7UrtbKy5l60IcL6aVjH1uKHGuw3hhCzKS6tI6%2B6qg%2FkDSU3W6A0ECg%3D&ua=&miniWua=HHnB_6%2BijmO4OS05K9Dry9ExPmghV1zemplfDLLrGME9jXmA%3D&umidtoken=YM2hDKS8NgoDAJqPzNVGdYtM&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&sign=d8693d8acfece08e9a86d78f0e74cc1c&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26upf%3D20559%26from%3DShuqiTab%26sdk%3D13.1.3%26utdid%3DYM2hDKS8NgoDAJqPzNVGdYtM%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2128616321%26sn%3DF4484B701768806B555DDCEF083C38B1833DF077%26umidtoken%3DYM2hDKS8NgoDAJqPzNVGdYtM%26msv%3D8.0.0%26brand%3DApple%26imei%3D86154F3C279A65CA29A635B02731F58ECC03B83F%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone11ProMax%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D4D471B67-D87D-405C-8F45-539B291EE812"},{"key":"shuqirwbody13","val":"serviceWorkerOn=1&stopPullRefresh=1&from=ShuqiTab&upf=20368&sdk=13.1.3&utdid=YM2hDKS8NgoDAJqPzNVGdYtM&ustatus=0&first_placeid=111111&net_env=wifi&placeid=111111&user_id=2128616321&sn=F4484B701768806B555DDCEF083C38B1833DF077&umidtoken=YM2hDKS8NgoDAJqPzNVGdYtM&msv=8.0.0&brand=Apple&imei=86154F3C279A65CA29A635B02731F58ECC03B83F&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=1&ver=210301&mod=iPhone11ProMax&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=4D471B67-D87D-405C-8F45-539B291EE812&params=%7B%22resources%22%3A%7B%22ShuqiBsDailyTask%22%3A%7B%7D%7D%7D&userId=2128616321&placeId=111111&timestamp=1624090688&sqSv=1.0&sign=47e5b9afc5f8dcabeb385540a852c04c&key=sq_h5_gateway&_public="},{"key":"shuqifxbody13","val":""},{"key":"shuqisprwurl13","val":"https://ocean.shuqireader.com/api/ad/adserver/v1/api/getAdInfo?appVer=4.3.6.0&placeId=111111&platform=iOS&requestSrc=h5&resourceId=626&timestamp=1624090709&user_id=2128616321&sqSv=1.0&sign=57505421b1c017469ee3cf9bd3cb463e&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.1.3%26utdid%3DYM2hDKS8NgoDAJqPzNVGdYtM%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2128616321%26sn%3DF4484B701768806B555DDCEF083C38B1833DF077%26umidtoken%3DYM2hDKS8NgoDAJqPzNVGdYtM%26msv%3D8.0.0%26brand%3DApple%26imei%3D86154F3C279A65CA29A635B02731F58ECC03B83F%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone11ProMax%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D4D471B67-D87D-405C-8F45-539B291EE812"},{"key":"shuqijlbody13","val":"requestSrc=h5&userId=2128616321&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624090688&sqSv=1.0&sign=d854e6bb340e433287b6d3ba34ac5818&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.1.3%26utdid%3DYM2hDKS8NgoDAJqPzNVGdYtM%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2128616321%26sn%3DF4484B701768806B555DDCEF083C38B1833DF077%26umidtoken%3DYM2hDKS8NgoDAJqPzNVGdYtM%26msv%3D8.0.0%26brand%3DApple%26imei%3D86154F3C279A65CA29A635B02731F58ECC03B83F%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone11ProMax%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D4D471B67-D87D-405C-8F45-539B291EE812"},{"key":"shuqisqjlbody13","val":"src=&userId=2128616321&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624089081&sqSv=1.0&sign=0485cad1a5187a0632f10294092fcbdd&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26upf%3D20559%26from%3DShuqiTab%26sdk%3D13.1.3%26utdid%3DYM2hDKS8NgoDAJqPzNVGdYtM%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2128616321%26sn%3DF4484B701768806B555DDCEF083C38B1833DF077%26umidtoken%3DYM2hDKS8NgoDAJqPzNVGdYtM%26msv%3D8.0.0%26brand%3DApple%26imei%3D86154F3C279A65CA29A635B02731F58ECC03B83F%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone11ProMax%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D4D471B67-D87D-405C-8F45-539B291EE812"},{"key":"shuqicjyurl13","val":"https://ocean.shuqireader.com/api/activity/activity/v1/lottery/info?timestamp=1624090714&userId=2128616321&activityId=311&sqSv=1.0&sign=3b0899438aa4452628f1f1ef16ca2f90&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.1.3%26utdid%3DYM2hDKS8NgoDAJqPzNVGdYtM%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2128616321%26sn%3DF4484B701768806B555DDCEF083C38B1833DF077%26umidtoken%3DYM2hDKS8NgoDAJqPzNVGdYtM%26msv%3D8.0.0%26brand%3DApple%26imei%3D86154F3C279A65CA29A635B02731F58ECC03B83F%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone11ProMax%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D4D471B67-D87D-405C-8F45-539B291EE812"},{"key":"shuqicjcsbody13","val":"_public=utype%3Dpre_vip%26idfa%3D4D471B67-D87D-405C-8F45-539B291EE812%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26umidtoken%3DYM2hDKS8NgoDAJqPzNVGdYtM%26user_id%3D2128616321%26sn%3DF4484B701768806B555DDCEF083C38B1833DF077%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D86154F3C279A65CA29A635B02731F58ECC03B83F%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhone11ProMax%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26utdid%3DYM2hDKS8NgoDAJqPzNVGdYtM%26soft_id%3D21%26sdk%3D13.1.3&deliveryId=711&key=sq_app_ad&miniWua=HHnB_Sv4gU4v1aYi7zBsgCCvtwbUB58eYGWtD2X9AzA5i3/E%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=703&sign=8BD9FEC70E85A6D087A6AE22DE7C6051&timestamp=1624090694&userId=2128616321&user_id=2128616321&wua=HIVW_WRJSOpNTVvnYCs0s1%2BvaJnXsN0itF%2B8krTBTh59e9XAJXtrgVxhOHmuYj6QzpF8D8lxPHxohr%2B9n5ZrTLywo27o0XSllHhlBVQ5Ircsu5sYjexkdJ6NIMZTTyBv6w8uesSRj9AR0mwMZyKven2xDBYqziqyGHaURp9TmvD6/ZvcstPuTEsCsqcG5O8j7JQJCfKTiBOBWESS2hH3oOWPxPUeeIz%2BPYGbChkul4YYDzpw%3D"},{"key":"shuqicjbody13","val":"wua=HIVW_YTf66KHcznUQeXcDjMkzfUDvVGEC7cSTa%2BbYsDagWSxN7sVyaNzzROiAe0j6C6ye6nwmmsIUtHo1%2Fgozo7feCMRYl2af58gIHPdctCHoNLiLGyE9k9IgyGE%2BNYwUUwwoB4rNYP2gcPoN%2BEHedPPD2zMU9b%2BrVXQfRvKgsxrqXdDGv8E1JuYro%2FDxj4zhT1ajRQ41LWrSDdUZ3ZUBXlWSU9%2Fr1ypURcjAkHBNgOi3SFk%3D&ua=&userId=2128616321&umidtoken=YM2hDKS8NgoDAJqPzNVGdYtM&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&asac=2A20C07RJ9F51AOEFSNHDR&timestamp=1624090697&activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&sqSv=1.0&sign=4ef872745fdaff008e0fc2a6dfa4d1d7&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.1.3%26utdid%3DYM2hDKS8NgoDAJqPzNVGdYtM%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2128616321%26sn%3DF4484B701768806B555DDCEF083C38B1833DF077%26umidtoken%3DYM2hDKS8NgoDAJqPzNVGdYtM%26msv%3D8.0.0%26brand%3DApple%26imei%3D86154F3C279A65CA29A635B02731F58ECC03B83F%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone11ProMax%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D4D471B67-D87D-405C-8F45-539B291EE812"},{"key":"shuqijsspbody13","val":""},{"key":"shuqijsydurl13","val":""},{"key":"shuqijsydbody13","val":""},{"key":"shuqijsqdbody13","val":""},{"key":"shuqijsqdspyurl13","val":""},{"key":"shuqijsqdspbody13","val":""},{"key":"shuqijsrwbody13","val":""},{"key":"shuqijsfxbody13","val":""},{"key":"shuqijsbookurl13","val":""},{"key":"shuqijsbookbody13","val":""},{"key":"shuqijssprwurl13","val":""},{"key":"shuqiuserurl14","val":"https://ocean.shuqireader.com/api/jaccount/accountapi/v1/sapi/account/getBindinfo?userId=2130112711&sqSv=1.0&timestamp=1624090789&sign=ad5d77e6ad122fd4d6d549c7cd843070&key=sq_h5_gateway"},{"key":"shuqisyurl14","val":"https://render.shuqireader.com/load/resource?sdk=13.5.1&utdid=YM2oaSvrCQkDABPPaDsO9zxv&ustatus=0&first_placeid=111111&net_env=wifi&placeid=111111&user_id=2130112711&sn=A9B7A7F06CD149B763BC78307AEE16D8967E480B&umidtoken=YM2oaSvrCQkDABPPaDsO9zxv&msv=8.0.0&brand=Apple&imei=0D3795C6FE2FB31D91E544DE762E07A728BADAAD&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=iOS&ver=210301&mod=iPhone6splus&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=3D489C01-2DAB-4C6A-BDD1-0523E34ABE5A"},{"key":"shuqisybody14","val":"appVer=4.3.6.0&imei=0D3795C6FE2FB31D91E544DE762E07A728BADAAD&isNewUser=1&params=%7B%22resources%22%3A%7B%22ShuqiVipEntry%22%3A%7B%7D%2C%22personalCardConfig%22%3A%7B%7D%7D%7D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=b3d5ea91f348b69ceab16ce9a2d6e802&sn=A9B7A7F06CD149B763BC78307AEE16D8967E480B&soft_id=21&timestamp=1624090730&user_id=2130112711&ver=210301"},{"key":"shuqispbody14","val":"_public=skinId%3D999%26idfa%3D3D489C01-2DAB-4C6A-BDD1-0523E34ABE5A%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26umidtoken%3DYM2oaSvrCQkDABPPaDsO9zxv%26user_id%3D2130112711%26sn%3DA9B7A7F06CD149B763BC78307AEE16D8967E480B%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D0D3795C6FE2FB31D91E544DE762E07A728BADAAD%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhone6splus%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYM2oaSvrCQkDABPPaDsO9zxv%26utype%3Dpre_vip%26sdk%3D13.5.1&deliveryId=525&key=sq_app_ad&miniWua=HHnB_0WF2NRfbkkiCbTBbDdFRpWYQngOoBy3QroKmfWBcObg%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=626&sign=D107816693C4916890ACFF56E34B023B&timestamp=1624090759&userId=2130112711&user_id=2130112711&wua=HIVW_Ojp7VEJghSAeG1/OOn%2BsAsGI%2B2Ro5ZD5vfWdoJTx299yzDojXxqWNhFFT4B1inxaNopvj97TzLljCUWZUUnvLp7gDzSzO0d4h1QzF5pgWaXZoRFq4CG4KM8bYXNeZMwBBJrbWxwt9GWaipljDxrVDLy2/yVact3AufvkANWXXflvldVxlt66XDraG%2BZ2/6lxEqWk4LsnANSJqWXPqPiq639fOH10r9bxwRRwEPHi0ys%3D"},{"key":"shuqiscbody14","val":""},{"key":"shuqiydbody14","val":""},{"key":"shuqiqdbody14","val":"clientTimestamp=1624090750&position=501&userId=2130112711&signInType=1&wua=HIVW_6ip%2F1fYJcaHKYMnxndghmkxyI9otyqEX9vVokRpzGlmt3u1hSi%2BnSmda7TPl%2Fs%2BpYHMdBjYYm%2Burz%2BRf6FQUPB3pT%2FxWLppblNHtG%2F5%2F24Zq6XlXc8fyWyjTEvJ6wsyC%2Fpbhy1Sotz95%2FWalSQ%2BWPleRguYWNJfM1ktT9pbxqX%2BW4WAkzouysBuiwcMFHf%2BLsG3YMtWJGoHj6oHTiSa6ISNPrVja0wRpRO0CPM08NAo%3D&ua=&miniWua=HHnB_4itUcrSut0JEkBrM8aoiw9oaTU9akwvbxWwVq7f0NF8%3D&umidtoken=YM2oaSvrCQkDABPPaDsO9zxv&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&sign=3f9d3fea495ff84c0eadbfd4b4d2764c&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.5.1%26utdid%3DYM2oaSvrCQkDABPPaDsO9zxv%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2130112711%26sn%3DA9B7A7F06CD149B763BC78307AEE16D8967E480B%26umidtoken%3DYM2oaSvrCQkDABPPaDsO9zxv%26msv%3D8.0.0%26brand%3DApple%26imei%3D0D3795C6FE2FB31D91E544DE762E07A728BADAAD%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone6splus%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D3D489C01-2DAB-4C6A-BDD1-0523E34ABE5A"},{"key":"shuqirwbody14","val":"serviceWorkerOn=1&stopPullRefresh=1&from=ShuqiTab&upf=20368&sdk=13.5.1&utdid=YM2oaSvrCQkDABPPaDsO9zxv&ustatus=0&first_placeid=111111&net_env=wifi&placeid=111111&user_id=2130112711&sn=A9B7A7F06CD149B763BC78307AEE16D8967E480B&umidtoken=YM2oaSvrCQkDABPPaDsO9zxv&msv=8.0.0&brand=Apple&imei=0D3795C6FE2FB31D91E544DE762E07A728BADAAD&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&session=&skinColor=23B383&platform=1&ver=210301&mod=iPhone6splus&statusBarHeight=44.000000&skinVersion=1&wh=1242x2688&soft_id=21&utype=pre_vip&skinId=999&idfa=3D489C01-2DAB-4C6A-BDD1-0523E34ABE5A&params=%7B%22resources%22%3A%7B%22ShuqiBsDailyTask%22%3A%7B%7D%7D%7D&userId=2130112711&placeId=111111&timestamp=1624090765&sqSv=1.0&sign=e538ea6577c0da109709f19595f43f57&key=sq_h5_gateway&_public="},{"key":"shuqifxbody14","val":""},{"key":"shuqisprwurl14","val":"https://ocean.shuqireader.com/api/ad/adserver/v1/api/getAdInfo?appVer=4.3.6.0&placeId=111111&platform=iOS&requestSrc=h5&resourceId=626&timestamp=1624090790&user_id=2130112711&sqSv=1.0&sign=b1767ea9472a2280a2676468ba9357d9&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.5.1%26utdid%3DYM2oaSvrCQkDABPPaDsO9zxv%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2130112711%26sn%3DA9B7A7F06CD149B763BC78307AEE16D8967E480B%26umidtoken%3DYM2oaSvrCQkDABPPaDsO9zxv%26msv%3D8.0.0%26brand%3DApple%26imei%3D0D3795C6FE2FB31D91E544DE762E07A728BADAAD%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone6splus%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D3D489C01-2DAB-4C6A-BDD1-0523E34ABE5A"},{"key":"shuqijlbody14","val":"requestSrc=h5&userId=2130112711&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624090765&sqSv=1.0&sign=3c063c649f4629a4fe1ff9fb465e1e88&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.5.1%26utdid%3DYM2oaSvrCQkDABPPaDsO9zxv%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2130112711%26sn%3DA9B7A7F06CD149B763BC78307AEE16D8967E480B%26umidtoken%3DYM2oaSvrCQkDABPPaDsO9zxv%26msv%3D8.0.0%26brand%3DApple%26imei%3D0D3795C6FE2FB31D91E544DE762E07A728BADAAD%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone6splus%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D3D489C01-2DAB-4C6A-BDD1-0523E34ABE5A"},{"key":"shuqisqjlbody14","val":"src=&userId=2130112711&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624090756&sqSv=1.0&sign=3a6ffbe287c6ec40616d9016251ad297&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.5.1%26utdid%3DYM2oaSvrCQkDABPPaDsO9zxv%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2130112711%26sn%3DA9B7A7F06CD149B763BC78307AEE16D8967E480B%26umidtoken%3DYM2oaSvrCQkDABPPaDsO9zxv%26msv%3D8.0.0%26brand%3DApple%26imei%3D0D3795C6FE2FB31D91E544DE762E07A728BADAAD%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone6splus%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D3D489C01-2DAB-4C6A-BDD1-0523E34ABE5A"},{"key":"shuqicjyurl14","val":"https://ocean.shuqireader.com/api/activity/activity/v1/lottery/info?timestamp=1624090793&userId=2130112711&activityId=311&sqSv=1.0&sign=a1c0d0fc1e5a41f4cc349938e6709d71&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.5.1%26utdid%3DYM2oaSvrCQkDABPPaDsO9zxv%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2130112711%26sn%3DA9B7A7F06CD149B763BC78307AEE16D8967E480B%26umidtoken%3DYM2oaSvrCQkDABPPaDsO9zxv%26msv%3D8.0.0%26brand%3DApple%26imei%3D0D3795C6FE2FB31D91E544DE762E07A728BADAAD%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone6splus%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D3D489C01-2DAB-4C6A-BDD1-0523E34ABE5A"},{"key":"shuqicjcsbody14","val":"_public=skinId%3D999%26idfa%3D3D489C01-2DAB-4C6A-BDD1-0523E34ABE5A%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26umidtoken%3DYM2oaSvrCQkDABPPaDsO9zxv%26user_id%3D2130112711%26sn%3DA9B7A7F06CD149B763BC78307AEE16D8967E480B%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D0D3795C6FE2FB31D91E544DE762E07A728BADAAD%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhone6splus%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYM2oaSvrCQkDABPPaDsO9zxv%26utype%3Dpre_vip%26sdk%3D13.5.1&deliveryId=711&key=sq_app_ad&miniWua=HHnB_Fems4TIQLAb2L/r9JTkhJ42jeJiP%2BuN9FM5hR6EwL5w%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=703&sign=6566F1F4DE029EC0958FC15301F2BA8F&timestamp=1624090773&userId=2130112711&user_id=2130112711&wua=HIVW_vzVNLUQmNt5LvoJZM%2Borgh28lV75AuwS/DRbqJbKYoUg2FVsic0a8MrtbdBLcvPzaLoM4jG66RpwfSLoT6tKCtbknXdEBZfVSQqfw4qse3Tmn9b3eZzw8cPNJHlG6oLI97NF0UPDc1zdeac9dPF/a2DJ6kQ8GWIG/7/QqS2Zi5OotCFjitFPHxGkCWYOeuxn3cDjAji6McQvWSJ8KYezAept/KREHvQ8lDOPucRRQAk%3D"},{"key":"shuqicjbody14","val":"wua=HIVW_lyG%2FuZSX6awrJEesxYQy2w%2Fum5mkWwUqvral3t4XfzIY5e6K5DSpfmThuLgsBqIUcs5vO2X6U%2FEwKt6vLSvqDj7mYZ7DkM62jE0wICvFhGZ7ZpvSnr8wugB4%2B%2B6XS2CZVZeWsFe%2Bh28dfuNLz3AGeLqngcSB%2BNY4cBxkBCAdFw8DssHPfwRWPONQmaMP7DooWuA3exSWW9FQVeoNKxt5ZAE3q7ONqzI458U647ox02I%3D&ua=&userId=2130112711&umidtoken=YM2oaSvrCQkDABPPaDsO9zxv&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&asac=2A20C07RJ9F51AOEFSNHDR&timestamp=1624090779&activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&sqSv=1.0&sign=3de32e4334c73d8a3c3ac88a876d267a&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.5.1%26utdid%3DYM2oaSvrCQkDABPPaDsO9zxv%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2130112711%26sn%3DA9B7A7F06CD149B763BC78307AEE16D8967E480B%26umidtoken%3DYM2oaSvrCQkDABPPaDsO9zxv%26msv%3D8.0.0%26brand%3DApple%26imei%3D0D3795C6FE2FB31D91E544DE762E07A728BADAAD%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone6splus%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D3D489C01-2DAB-4C6A-BDD1-0523E34ABE5A"},{"key":"shuqijsspbody14","val":""},{"key":"shuqijsydurl14","val":""},{"key":"shuqijsydbody14","val":""},{"key":"shuqijsqdbody14","val":""},{"key":"shuqijsqdspyurl14","val":""},{"key":"shuqijsqdspbody14","val":""},{"key":"shuqijsrwbody14","val":""},{"key":"shuqijsfxbody14","val":""},{"key":"shuqijsbookurl14","val":""},{"key":"shuqijsbookbody14","val":""},{"key":"shuqijssprwurl14","val":""},{"key":"shuqiuserurl15","val":"https://ocean.shuqireader.com/api/jaccount/accountapi/v1/sapi/account/getBindinfo?userId=2127570982&sqSv=1.0&timestamp=1624090873&sign=353f68fae757afae0d2ab6f18768f75e&key=sq_h5_gateway"},{"key":"shuqisyurl15","val":"https://render.shuqireader.com/load/resource?sdk=13.3&utdid=YM2ouhjiTb4DAAzm%2B%2F2JM%2FZO&ustatus=0&first_placeid=111111&net_env=3g&placeid=111111&user_id=2127570982&sn=8AA7B92A4E21605B15B8E951F3CB94D767C87282&umidtoken=YM2ouhjiTb4DAAzm%2B%2F2JM%2FZO&msv=8.0.0&brand=Apple&imei=787B55CA1C9517521CF106290CA105D51202E2D4&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=iOS&ver=210301&mod=iPhoneSE&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=8FB1C670-8FA1-46A0-A8BF-90D880DDCC01"},{"key":"shuqisybody15","val":"appVer=4.3.6.0&imei=787B55CA1C9517521CF106290CA105D51202E2D4&isNewUser=1&params=%7B%22resources%22%3A%7B%22ShuqiVipEntry%22%3A%7B%7D%2C%22personalCardConfig%22%3A%7B%7D%7D%7D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=814e38107351c4fd76976a11d7645928&sn=8AA7B92A4E21605B15B8E951F3CB94D767C87282&soft_id=21&timestamp=1624090812&user_id=2127570982&ver=210301"},{"key":"shuqispbody15","val":"_public=skinId%3D999%26idfa%3D8FB1C670-8FA1-46A0-A8BF-90D880DDCC01%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26umidtoken%3DYM2ouhjiTb4DAAzm%2B/2JM/ZO%26user_id%3D2127570982%26sn%3D8AA7B92A4E21605B15B8E951F3CB94D767C87282%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D787B55CA1C9517521CF106290CA105D51202E2D4%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhoneSE%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYM2ouhjiTb4DAAzm%2B/2JM/ZO%26utype%3Dpre_vip%26sdk%3D13.3&deliveryId=525&key=sq_app_ad&miniWua=HHnB_BzaPBDdIzYOGA1rM25482gcmqvJuhuQHkX8j5mY5RQg%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=626&sign=B6C23AEDBC1A0B3729BAC2F62002378F&timestamp=1624090840&userId=2127570982&user_id=2127570982&wua=HIVW_xBnf%2B2l9JBwVgC1hlYDK5NGcNA7F5VTz6BAlA4DqW2r2gR2u41y%2BrgDnakV/IQo0yYo8C%2BnTFTxA%2BsYCooPVlr8XtkPUb5I2/HmDsnQODrGRSDgFB/tVsWoFuC8M2DKvlPBJb1M7PCElpZPIzUkU91prfi5t%2BSYuGeuK1XVY9ftFnmsfaixgKZt8lKlw0FIBZGi1gGPj8SHjfXm9rx727lz6jjEWNqgNYG%2BqqwRTt0I%3D"},{"key":"shuqiscbody15","val":""},{"key":"shuqiydbody15","val":""},{"key":"shuqiqdbody15","val":"clientTimestamp=1624090830&position=501&userId=2127570982&signInType=1&wua=HIVW_dZV9mFlCl%2FXmDYEmzzKwpcpfkIHcMg2I6r4Dyh5admA4lK1IJBd76U5kKKodeLQGw4oaKKe2%2B7R8FPZmqhRSW01JCDSWavQT9fqoNtgSq3mzzwgeza42hb041iP8wKEiyUxSNvkNQtf5ZSWnWnn3IGcd6LFidbZM0w3dJBr5kJaiz81QyGEUpT2feU3FeKioBf9Q2g5IvgzdVKHpnnWO%2BnBCypQVM2rQI7gBV5gCFu8%3D&ua=&miniWua=HHnB_TZYRAt8wZao1NTN6fXQZriU9qCnuaFIOMyNptjiojnQ%3D&umidtoken=YM2ouhjiTb4DAAzm%2B%2F2JM%2FZO&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&sign=d6e03a70609b1095de1c5b1a1df6979a&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.3%26utdid%3DYM2ouhjiTb4DAAzm%252B%252F2JM%252FZO%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2127570982%26sn%3D8AA7B92A4E21605B15B8E951F3CB94D767C87282%26umidtoken%3DYM2ouhjiTb4DAAzm%252B%252F2JM%252FZO%26msv%3D8.0.0%26brand%3DApple%26imei%3D787B55CA1C9517521CF106290CA105D51202E2D4%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhoneSE%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D8FB1C670-8FA1-46A0-A8BF-90D880DDCC01"},{"key":"shuqirwbody15","val":"serviceWorkerOn=1&stopPullRefresh=1&from=ShuqiTab&upf=20368&sdk=13.3&utdid=YM2ouhjiTb4DAAzm%2B%2F2JM%2FZO&ustatus=0&first_placeid=111111&net_env=3g&placeid=111111&user_id=2127570982&sn=8AA7B92A4E21605B15B8E951F3CB94D767C87282&umidtoken=YM2ouhjiTb4DAAzm%2B%2F2JM%2FZO&msv=8.0.0&brand=Apple&imei=787B55CA1C9517521CF106290CA105D51202E2D4&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=1&ver=210301&mod=iPhoneSE&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=8FB1C670-8FA1-46A0-A8BF-90D880DDCC01&params=%7B%22resources%22%3A%7B%22ShuqiBsDailyTask%22%3A%7B%7D%7D%7D&userId=2127570982&placeId=111111&timestamp=1624090848&sqSv=1.0&sign=08b7a8b9451d7c81340aea017e9b0fe0&key=sq_h5_gateway&_public="},{"key":"shuqifxbody15","val":""},{"key":"shuqisprwurl15","val":"https://ocean.shuqireader.com/api/ad/adserver/v1/api/getAdInfo?appVer=4.3.6.0&placeId=111111&platform=iOS&requestSrc=h5&resourceId=626&timestamp=1624090873&user_id=2127570982&sqSv=1.0&sign=4dc47e0a8ec121ad71b87b04ffe02e53&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.3%26utdid%3DYM2ouhjiTb4DAAzm%252B%252F2JM%252FZO%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2127570982%26sn%3D8AA7B92A4E21605B15B8E951F3CB94D767C87282%26umidtoken%3DYM2ouhjiTb4DAAzm%252B%252F2JM%252FZO%26msv%3D8.0.0%26brand%3DApple%26imei%3D787B55CA1C9517521CF106290CA105D51202E2D4%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhoneSE%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D8FB1C670-8FA1-46A0-A8BF-90D880DDCC01"},{"key":"shuqijlbody15","val":"requestSrc=h5&userId=2127570982&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624090848&sqSv=1.0&sign=bfe86eb73b737d60f51d2a6b527dec4a&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.3%26utdid%3DYM2ouhjiTb4DAAzm%252B%252F2JM%252FZO%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2127570982%26sn%3D8AA7B92A4E21605B15B8E951F3CB94D767C87282%26umidtoken%3DYM2ouhjiTb4DAAzm%252B%252F2JM%252FZO%26msv%3D8.0.0%26brand%3DApple%26imei%3D787B55CA1C9517521CF106290CA105D51202E2D4%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhoneSE%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D8FB1C670-8FA1-46A0-A8BF-90D880DDCC01"},{"key":"shuqisqjlbody15","val":"src=&userId=2127570982&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624090836&sqSv=1.0&sign=5afa58576c45f1a124625a06f854fc6b&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.3%26utdid%3DYM2ouhjiTb4DAAzm%252B%252F2JM%252FZO%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2127570982%26sn%3D8AA7B92A4E21605B15B8E951F3CB94D767C87282%26umidtoken%3DYM2ouhjiTb4DAAzm%252B%252F2JM%252FZO%26msv%3D8.0.0%26brand%3DApple%26imei%3D787B55CA1C9517521CF106290CA105D51202E2D4%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhoneSE%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D8FB1C670-8FA1-46A0-A8BF-90D880DDCC01"},{"key":"shuqicjyurl15","val":"https://ocean.shuqireader.com/api/activity/activity/v1/lottery/info?timestamp=1624090878&userId=2127570982&activityId=311&sqSv=1.0&sign=465cc75cdbcce665a6545e895f183f73&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.3%26utdid%3DYM2ouhjiTb4DAAzm%252B%252F2JM%252FZO%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2127570982%26sn%3D8AA7B92A4E21605B15B8E951F3CB94D767C87282%26umidtoken%3DYM2ouhjiTb4DAAzm%252B%252F2JM%252FZO%26msv%3D8.0.0%26brand%3DApple%26imei%3D787B55CA1C9517521CF106290CA105D51202E2D4%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhoneSE%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D8FB1C670-8FA1-46A0-A8BF-90D880DDCC01"},{"key":"shuqicjcsbody15","val":"_public=skinId%3D999%26idfa%3D8FB1C670-8FA1-46A0-A8BF-90D880DDCC01%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26umidtoken%3DYM2ouhjiTb4DAAzm%2B/2JM/ZO%26user_id%3D2127570982%26sn%3D8AA7B92A4E21605B15B8E951F3CB94D767C87282%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D787B55CA1C9517521CF106290CA105D51202E2D4%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhoneSE%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYM2ouhjiTb4DAAzm%2B/2JM/ZO%26utype%3Dpre_vip%26sdk%3D13.3&deliveryId=711&key=sq_app_ad&miniWua=HHnB_Y958mZL7BSnQuispkMt1b2ADJAUGQ254qDyOsc53d7A%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=703&sign=E3D0C55A6A526CCF4BE0B1213F8EB508&timestamp=1624090856&userId=2127570982&user_id=2127570982&wua=HIVW_WRJSOpNTVvnYCs0s1%2BvaJoUH0LFjmND3qv7xNH3JhaJZVGBSVUAenqAQnnGtgSvoFWEXAa6dYHEuh8ETRKuYifsP2WoR0vSDopHTfNFkH5XcgWZ6MmmqKdePYQo%2B8YuJFCXrcCwo5q/KOoG63TNaaur/Lt2WaeiBXC%2BTqe0V49qp1WGB8Ydxd7zteL8nIMdS%2BWW/13QJBuKvRHJvsT%2Bp3PAQ/n9B77Fqy0G3ZyZO%2Bxc%3D"},{"key":"shuqicjbody15","val":"wua=HIVW_XxI97qNuP112uy1ZYWOvY4WE9Xw3bJxzHJE57mgFC2OIhp5iRyd85MpFDc2RGpTcQm9Oc2eyvvpcoFXSHvzU%2F6bmOFldAuF1xUnrrQirS3C01Ds%2BZqIHerc2RSFpOxGU%2FLCtvPBZPw6ux%2FLyVahbdG3yGJxK1eyk50Q29piD2g4j2H854YS1SR%2FZFLYJTmvDmb8pMNox0KlIEABIkv3AdniPo4cc4LKDmatT5YuhdKA%3D&ua=&userId=2127570982&umidtoken=YM2ouhjiTb4DAAzm%2B%2F2JM%2FZO&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&asac=2A20C07RJ9F51AOEFSNHDR&timestamp=1624090862&activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&sqSv=1.0&sign=fd5b1922e6e31c24db29b722945e6268&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.3%26utdid%3DYM2ouhjiTb4DAAzm%252B%252F2JM%252FZO%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2127570982%26sn%3D8AA7B92A4E21605B15B8E951F3CB94D767C87282%26umidtoken%3DYM2ouhjiTb4DAAzm%252B%252F2JM%252FZO%26msv%3D8.0.0%26brand%3DApple%26imei%3D787B55CA1C9517521CF106290CA105D51202E2D4%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhoneSE%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D8FB1C670-8FA1-46A0-A8BF-90D880DDCC01"},{"key":"shuqijsspbody15","val":""},{"key":"shuqijsydurl15","val":""},{"key":"shuqijsydbody15","val":""},{"key":"shuqijsqdbody15","val":""},{"key":"shuqijsqdspyurl15","val":""},{"key":"shuqijsqdspbody15","val":""},{"key":"shuqijsrwbody15","val":""},{"key":"shuqijsfxbody15","val":""},{"key":"shuqijsbookurl15","val":""},{"key":"shuqijsbookbody15","val":""},{"key":"shuqijssprwurl15","val":""},{"key":"shuqiuserurl16","val":""},{"key":"shuqisyurl16","val":""},{"key":"shuqisybody16","val":""},{"key":"shuqispbody16","val":""},{"key":"shuqiscbody16","val":""},{"key":"shuqiydbody16","val":""},{"key":"shuqiqdbody16","val":""},{"key":"shuqirwbody16","val":""},{"key":"shuqifxbody16","val":""},{"key":"shuqisprwurl16","val":""},{"key":"shuqijlbody16","val":""},{"key":"shuqisqjlbody16","val":""},{"key":"shuqicjyurl16","val":""},{"key":"shuqicjcsbody16","val":""},{"key":"shuqicjbody16","val":""},{"key":"shuqijsspbody16","val":""},{"key":"shuqijsydurl16","val":""},{"key":"shuqijsydbody16","val":""},{"key":"shuqijsqdbody16","val":""},{"key":"shuqijsqdspyurl16","val":""},{"key":"shuqijsqdspbody16","val":""},{"key":"shuqijsrwbody16","val":""},{"key":"shuqijsfxbody16","val":""},{"key":"shuqijsbookurl16","val":""},{"key":"shuqijsbookbody16","val":""},{"key":"shuqijssprwurl16","val":""},{"key":"shuqiuserurl17","val":""},{"key":"shuqisyurl17","val":""},{"key":"shuqisybody17","val":""},{"key":"shuqispbody17","val":""},{"key":"shuqiscbody17","val":""},{"key":"shuqiydbody17","val":""},{"key":"shuqiqdbody17","val":""},{"key":"shuqirwbody17","val":""},{"key":"shuqifxbody17","val":""},{"key":"shuqisprwurl17","val":""},{"key":"shuqijlbody17","val":""},{"key":"shuqisqjlbody17","val":""},{"key":"shuqicjyurl17","val":""},{"key":"shuqicjcsbody17","val":""},{"key":"shuqicjbody17","val":""},{"key":"shuqijsspbody17","val":""},{"key":"shuqijsydurl17","val":""},{"key":"shuqijsydbody17","val":""},{"key":"shuqijsqdbody17","val":""},{"key":"shuqijsqdspyurl17","val":""},{"key":"shuqijsqdspbody17","val":""},{"key":"shuqijsrwbody17","val":""},{"key":"shuqijsfxbody17","val":""},{"key":"shuqijsbookurl17","val":""},{"key":"shuqijsbookbody17","val":""},{"key":"shuqijssprwurl17","val":""},{"key":"shuqiuserurl18","val":""},{"key":"shuqisyurl18","val":""},{"key":"shuqisybody18","val":""},{"key":"shuqispbody18","val":""},{"key":"shuqiscbody18","val":""},{"key":"shuqiydbody18","val":""},{"key":"shuqiqdbody18","val":""},{"key":"shuqirwbody18","val":""},{"key":"shuqifxbody18","val":""},{"key":"shuqisprwurl18","val":""},{"key":"shuqijlbody18","val":""},{"key":"shuqisqjlbody18","val":""},{"key":"shuqicjyurl18","val":""},{"key":"shuqicjcsbody18","val":""},{"key":"shuqicjbody18","val":""},{"key":"shuqijsspbody18","val":""},{"key":"shuqijsydurl18","val":""},{"key":"shuqijsydbody18","val":""},{"key":"shuqijsqdbody18","val":""},{"key":"shuqijsqdspyurl18","val":""},{"key":"shuqijsqdspbody18","val":""},{"key":"shuqijsrwbody18","val":""},{"key":"shuqijsfxbody18","val":""},{"key":"shuqijsbookurl18","val":""},{"key":"shuqijsbookbody18","val":""},{"key":"shuqijssprwurl18","val":""},{"key":"shuqiuserurl19","val":""},{"key":"shuqisyurl19","val":""},{"key":"shuqisybody19","val":""},{"key":"shuqispbody19","val":""},{"key":"shuqiscbody19","val":""},{"key":"shuqiydbody19","val":""},{"key":"shuqiqdbody19","val":""},{"key":"shuqirwbody19","val":""},{"key":"shuqifxbody19","val":""},{"key":"shuqisprwurl19","val":""},{"key":"shuqijlbody19","val":""},{"key":"shuqisqjlbody19","val":""},{"key":"shuqicjyurl19","val":""},{"key":"shuqicjcsbody19","val":""},{"key":"shuqicjbody19","val":""},{"key":"shuqijsspbody19","val":""},{"key":"shuqijsydurl19","val":""},{"key":"shuqijsydbody19","val":""},{"key":"shuqijsqdbody19","val":""},{"key":"shuqijsqdspyurl19","val":""},{"key":"shuqijsqdspbody19","val":""},{"key":"shuqijsrwbody19","val":""},{"key":"shuqijsfxbody19","val":""},{"key":"shuqijsbookurl19","val":""},{"key":"shuqijsbookbody19","val":""},{"key":"shuqijssprwurl19","val":""},{"key":"shuqiuserurl20","val":""},{"key":"shuqisyurl20","val":""},{"key":"shuqisybody20","val":""},{"key":"shuqispbody20","val":""},{"key":"shuqiscbody20","val":""},{"key":"shuqiydbody20","val":""},{"key":"shuqiqdbody20","val":""},{"key":"shuqirwbody20","val":""},{"key":"shuqifxbody20","val":""},{"key":"shuqisprwurl20","val":""},{"key":"shuqijlbody20","val":""},{"key":"shuqisqjlbody20","val":""},{"key":"shuqicjyurl20","val":""},{"key":"shuqicjcsbody20","val":""},{"key":"shuqicjbody20","val":""},{"key":"shuqijsspbody20","val":""},{"key":"shuqijsydurl20","val":""},{"key":"shuqijsydbody20","val":""},{"key":"shuqijsqdbody20","val":""},{"key":"shuqijsqdspyurl20","val":""},{"key":"shuqijsqdspbody20","val":""},{"key":"shuqijsrwbody20","val":""},{"key":"shuqijsfxbody20","val":""},{"key":"shuqijsbookurl20","val":""},{"key":"shuqijsbookbody20","val":""},{"key":"shuqijssprwurl20","val":""}],"sessions":[],"isLoaded":true};
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
