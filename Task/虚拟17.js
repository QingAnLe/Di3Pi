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
const COOKIE = {"id":"shuqi","name":"书旗小说APP","keys":["shuqiuserurl","shuqisyurl","shuqisybody","shuqispbody","shuqiscbody","shuqiydbody","shuqiqdbody","shuqirwbody","shuqifxbody","shuqisprwurl","shuqijlbody","shuqisqjlbody","shuqicjyurl","shuqicjcsbody","shuqicjbody","shuqijsspbody","shuqijsydurl","shuqijsydbody","shuqijsqdbody","shuqijsqdspyurl","shuqijsqdspbody","shuqijsrwbody","shuqijsfxbody","shuqijsbookurl","shuqijsbookbody","shuqijssprwurl","shuqiuserurl2","shuqisyurl2","shuqisybody2","shuqispbody2","shuqiscbody2","shuqiydbody2","shuqiqdbody2","shuqirwbody2","shuqifxbody2","shuqisprwurl2","shuqijlbody2","shuqisqjlbody2","shuqicjyurl2","shuqicjcsbody2","shuqicjbody2","shuqijsspbody2","shuqijsydurl2","shuqijsydbody2","shuqijsqdbody2","shuqijsqdspyurl2","shuqijsqdspbody2","shuqijsrwbody2","shuqijsfxbody2","shuqijsbookurl2","shuqijsbookbody2","shuqijssprwurl2","shuqiuserurl3","shuqisyurl3","shuqisybody3","shuqispbody3","shuqiscbody3","shuqiydbody3","shuqiqdbody3","shuqirwbody3","shuqifxbody3","shuqisprwurl3","shuqijlbody3","shuqisqjlbody3","shuqicjyurl3","shuqicjcsbody3","shuqicjbody3","shuqijsspbody3","shuqijsydurl3","shuqijsydbody3","shuqijsqdbody3","shuqijsqdspyurl3","shuqijsqdspbody3","shuqijsrwbody3","shuqijsfxbody3","shuqijsbookurl3","shuqijsbookbody3","shuqijssprwurl3","shuqiuserurl4","shuqisyurl4","shuqisybody4","shuqispbody4","shuqiscbody4","shuqiydbody4","shuqiqdbody4","shuqirwbody4","shuqifxbody4","shuqisprwurl4","shuqijlbody4","shuqisqjlbody4","shuqicjyurl4","shuqicjcsbody4","shuqicjbody4","shuqijsspbody4","shuqijsydurl4","shuqijsydbody4","shuqijsqdbody4","shuqijsqdspyurl4","shuqijsqdspbody4","shuqijsrwbody4","shuqijsfxbody4","shuqijsbookurl4","shuqijsbookbody4","shuqijssprwurl4","shuqiuserurl5","shuqisyurl5","shuqisybody5","shuqispbody5","shuqiscbody5","shuqiydbody5","shuqiqdbody5","shuqirwbody5","shuqifxbody5","shuqisprwurl5","shuqijlbody5","shuqisqjlbody5","shuqicjyurl5","shuqicjcsbody5","shuqicjbody5","shuqijsspbody5","shuqijsydurl5","shuqijsydbody5","shuqijsqdbody5","shuqijsqdspyurl5","shuqijsqdspbody5","shuqijsrwbody5","shuqijsfxbody5","shuqijsbookurl5","shuqijsbookbody5","shuqijssprwurl5","shuqiuserurl6","shuqisyurl6","shuqisybody6","shuqispbody6","shuqiscbody6","shuqiydbody6","shuqiqdbody6","shuqirwbody6","shuqifxbody6","shuqisprwurl6","shuqijlbody6","shuqisqjlbody6","shuqicjyurl6","shuqicjcsbody6","shuqicjbody6","shuqijsspbody6","shuqijsydurl6","shuqijsydbody6","shuqijsqdbody6","shuqijsqdspyurl6","shuqijsqdspbody6","shuqijsrwbody6","shuqijsfxbody6","shuqijsbookurl6","shuqijsbookbody6","shuqijssprwurl6","shuqiuserurl7","shuqisyurl7","shuqisybody7","shuqispbody7","shuqiscbody7","shuqiydbody7","shuqiqdbody7","shuqirwbody7","shuqifxbody7","shuqisprwurl7","shuqijlbody7","shuqisqjlbody7","shuqicjyurl7","shuqicjcsbody7","shuqicjbody7","shuqijsspbody7","shuqijsydurl7","shuqijsydbody7","shuqijsqdbody7","shuqijsqdspyurl7","shuqijsqdspbody7","shuqijsrwbody7","shuqijsfxbody7","shuqijsbookurl7","shuqijsbookbody7","shuqijssprwurl7","shuqiuserurl8","shuqisyurl8","shuqisybody8","shuqispbody8","shuqiscbody8","shuqiydbody8","shuqiqdbody8","shuqirwbody8","shuqifxbody8","shuqisprwurl8","shuqijlbody8","shuqisqjlbody8","shuqicjyurl8","shuqicjcsbody8","shuqicjbody8","shuqijsspbody8","shuqijsydurl8","shuqijsydbody8","shuqijsqdbody8","shuqijsqdspyurl8","shuqijsqdspbody8","shuqijsrwbody8","shuqijsfxbody8","shuqijsbookurl8","shuqijsbookbody8","shuqijssprwurl8","shuqiuserurl9","shuqisyurl9","shuqisybody9","shuqispbody9","shuqiscbody9","shuqiydbody9","shuqiqdbody9","shuqirwbody9","shuqifxbody9","shuqisprwurl9","shuqijlbody9","shuqisqjlbody9","shuqicjyurl9","shuqicjcsbody9","shuqicjbody9","shuqijsspbody9","shuqijsydurl9","shuqijsydbody9","shuqijsqdbody9","shuqijsqdspyurl9","shuqijsqdspbody9","shuqijsrwbody9","shuqijsfxbody9","shuqijsbookurl9","shuqijsbookbody9","shuqijssprwurl9","shuqiuserurl10","shuqisyurl10","shuqisybody10","shuqispbody10","shuqiscbody10","shuqiydbody10","shuqiqdbody10","shuqirwbody10","shuqifxbody10","shuqisprwurl10","shuqijlbody10","shuqisqjlbody10","shuqicjyurl10","shuqicjcsbody10","shuqicjbody10","shuqijsspbody10","shuqijsydurl10","shuqijsydbody10","shuqijsqdbody10","shuqijsqdspyurl10","shuqijsqdspbody10","shuqijsrwbody10","shuqijsfxbody10","shuqijsbookurl10","shuqijsbookbody10","shuqijssprwurl10","shuqiuserurl11","shuqisyurl11","shuqisybody11","shuqispbody11","shuqiscbody11","shuqiydbody11","shuqiqdbody11","shuqirwbody11","shuqifxbody11","shuqisprwurl11","shuqijlbody11","shuqisqjlbody11","shuqicjyurl11","shuqicjcsbody11","shuqicjbody11","shuqijsspbody11","shuqijsydurl11","shuqijsydbody11","shuqijsqdbody11","shuqijsqdspyurl11","shuqijsqdspbody11","shuqijsrwbody11","shuqijsfxbody11","shuqijsbookurl11","shuqijsbookbody11","shuqijssprwurl11","shuqiuserurl12","shuqisyurl12","shuqisybody12","shuqispbody12","shuqiscbody12","shuqiydbody12","shuqiqdbody12","shuqirwbody12","shuqifxbody12","shuqisprwurl12","shuqijlbody12","shuqisqjlbody12","shuqicjyurl12","shuqicjcsbody12","shuqicjbody12","shuqijsspbody12","shuqijsydurl12","shuqijsydbody12","shuqijsqdbody12","shuqijsqdspyurl12","shuqijsqdspbody12","shuqijsrwbody12","shuqijsfxbody12","shuqijsbookurl12","shuqijsbookbody12","shuqijssprwurl12","shuqiuserurl13","shuqisyurl13","shuqisybody13","shuqispbody13","shuqiscbody13","shuqiydbody13","shuqiqdbody13","shuqirwbody13","shuqifxbody13","shuqisprwurl13","shuqijlbody13","shuqisqjlbody13","shuqicjyurl13","shuqicjcsbody13","shuqicjbody13","shuqijsspbody13","shuqijsydurl13","shuqijsydbody13","shuqijsqdbody13","shuqijsqdspyurl13","shuqijsqdspbody13","shuqijsrwbody13","shuqijsfxbody13","shuqijsbookurl13","shuqijsbookbody13","shuqijssprwurl13","shuqiuserurl14","shuqisyurl14","shuqisybody14","shuqispbody14","shuqiscbody14","shuqiydbody14","shuqiqdbody14","shuqirwbody14","shuqifxbody14","shuqisprwurl14","shuqijlbody14","shuqisqjlbody14","shuqicjyurl14","shuqicjcsbody14","shuqicjbody14","shuqijsspbody14","shuqijsydurl14","shuqijsydbody14","shuqijsqdbody14","shuqijsqdspyurl14","shuqijsqdspbody14","shuqijsrwbody14","shuqijsfxbody14","shuqijsbookurl14","shuqijsbookbody14","shuqijssprwurl14","shuqiuserurl15","shuqisyurl15","shuqisybody15","shuqispbody15","shuqiscbody15","shuqiydbody15","shuqiqdbody15","shuqirwbody15","shuqifxbody15","shuqisprwurl15","shuqijlbody15","shuqisqjlbody15","shuqicjyurl15","shuqicjcsbody15","shuqicjbody15","shuqijsspbody15","shuqijsydurl15","shuqijsydbody15","shuqijsqdbody15","shuqijsqdspyurl15","shuqijsqdspbody15","shuqijsrwbody15","shuqijsfxbody15","shuqijsbookurl15","shuqijsbookbody15","shuqijssprwurl15","shuqiuserurl16","shuqisyurl16","shuqisybody16","shuqispbody16","shuqiscbody16","shuqiydbody16","shuqiqdbody16","shuqirwbody16","shuqifxbody16","shuqisprwurl16","shuqijlbody16","shuqisqjlbody16","shuqicjyurl16","shuqicjcsbody16","shuqicjbody16","shuqijsspbody16","shuqijsydurl16","shuqijsydbody16","shuqijsqdbody16","shuqijsqdspyurl16","shuqijsqdspbody16","shuqijsrwbody16","shuqijsfxbody16","shuqijsbookurl16","shuqijsbookbody16","shuqijssprwurl16","shuqiuserurl17","shuqisyurl17","shuqisybody17","shuqispbody17","shuqiscbody17","shuqiydbody17","shuqiqdbody17","shuqirwbody17","shuqifxbody17","shuqisprwurl17","shuqijlbody17","shuqisqjlbody17","shuqicjyurl17","shuqicjcsbody17","shuqicjbody17","shuqijsspbody17","shuqijsydurl17","shuqijsydbody17","shuqijsqdbody17","shuqijsqdspyurl17","shuqijsqdspbody17","shuqijsrwbody17","shuqijsfxbody17","shuqijsbookurl17","shuqijsbookbody17","shuqijssprwurl17","shuqiuserurl18","shuqisyurl18","shuqisybody18","shuqispbody18","shuqiscbody18","shuqiydbody18","shuqiqdbody18","shuqirwbody18","shuqifxbody18","shuqisprwurl18","shuqijlbody18","shuqisqjlbody18","shuqicjyurl18","shuqicjcsbody18","shuqicjbody18","shuqijsspbody18","shuqijsydurl18","shuqijsydbody18","shuqijsqdbody18","shuqijsqdspyurl18","shuqijsqdspbody18","shuqijsrwbody18","shuqijsfxbody18","shuqijsbookurl18","shuqijsbookbody18","shuqijssprwurl18","shuqiuserurl19","shuqisyurl19","shuqisybody19","shuqispbody19","shuqiscbody19","shuqiydbody19","shuqiqdbody19","shuqirwbody19","shuqifxbody19","shuqisprwurl19","shuqijlbody19","shuqisqjlbody19","shuqicjyurl19","shuqicjcsbody19","shuqicjbody19","shuqijsspbody19","shuqijsydurl19","shuqijsydbody19","shuqijsqdbody19","shuqijsqdspyurl19","shuqijsqdspbody19","shuqijsrwbody19","shuqijsfxbody19","shuqijsbookurl19","shuqijsbookbody19","shuqijssprwurl19","shuqiuserurl20","shuqisyurl20","shuqisybody20","shuqispbody20","shuqiscbody20","shuqiydbody20","shuqiqdbody20","shuqirwbody20","shuqifxbody20","shuqisprwurl20","shuqijlbody20","shuqisqjlbody20","shuqicjyurl20","shuqicjcsbody20","shuqicjbody20","shuqijsspbody20","shuqijsydurl20","shuqijsydbody20","shuqijsqdbody20","shuqijsqdspyurl20","shuqijsqdspbody20","shuqijsrwbody20","shuqijsfxbody20","shuqijsbookurl20","shuqijsbookbody20","shuqijssprwurl20"],"author":"@ziye","settings":[{"id":"shuqiSuffix","name":"当前账号","val":"1","type":"number","desc":"当前抓取ck记录的账号序号，如：1、2、3、"},{"id":"shuqiCount","name":"账号个数","val":"15","type":"number","desc":"指定任务最多跑几个账号，根据抓取的账号数据个数来设值"},{"id":"shuqiXH","name":"循环获取CK","val":"1","type":"number","desc":"0关闭 1开启,默认关闭"},{"id":"shuqiSC","name":"单刷时长控制","val":"0","type":"number","desc":"0关闭 1开启,默认关闭"},{"id":"shuqiTXTX","name":"提现提醒","val":"10","type":"number","desc":"0关闭 设置余额大于多少提醒"},{"id":"shuqinotifyttt","name":"推送控制","val":"1","type":"number","desc":"0关闭，1推送,默认12点以及23点推送"},{"id":"shuqinotifyInterval","name":"通知控制","val":"2","type":"number","desc":"0关闭，1为 所有通知，2为 12，23 点通知，3为 6，12，18，23 点通知 "},{"id":"shuqiMinutes","name":"推送-通知 分钟控制","val":"59","type":"number","desc":"推送以及通知控制在什么分钟段，可设置0-59,默认0到10"}],"repo":"https://cdn.jsdelivr.net/gh/ziye888/JavaScript@main/Task/shuqi.js","icons":["https://cdn.jsdelivr.net/gh/ziye888/JavaScript@main/Task/shuqi.png","https://cdn.jsdelivr.net/gh/ziye888/JavaScript@main/Task/shuqi.png"],"script":"https://cdn.jsdelivr.net/gh/ziye888/JavaScript@main/Task/shuqi.js","icon":"https://cdn.jsdelivr.net/gh/ziye888/JavaScript@main/Task/shuqi.png","favIcon":"mdi-star","favIconColor":"primary","datas":[{"key":"shuqiuserurl","val":"https://ocean.shuqireader.com/api/jaccount/accountapi/v1/sapi/account/getBindinfo?userId=2128765482&sqSv=1.0&timestamp=1624072715&sign=309206ee9d9089397494914a4971c2d3&key=sq_h5_gateway"},{"key":"shuqisyurl","val":"https://render.shuqireader.com/load/resource?sdk=13.3&utdid=YM1PtQNHRHMDAMvdMFyQD2HU&ustatus=0&first_placeid=111111&net_env=4g&placeid=111111&user_id=2128765482&sn=203B71171B45092F88DF38E2C731331C18AED532&umidtoken=YM1PtQNHRHMDAMvdMFyQD2HU&msv=8.0.0&brand=Apple&imei=F610A7897C7CC1FE27EE72B8C5C4A505D5E2F7BA&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=iOS&ver=210301&mod=iPhone8P&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=A56EABD4-981A-4937-AF46-5D97ECAC3E9B"},{"key":"shuqisybody","val":"appVer=4.3.6.0&imei=F610A7897C7CC1FE27EE72B8C5C4A505D5E2F7BA&isNewUser=1&params=%7B%22resources%22%3A%7B%22ShuqiVipEntry%22%3A%7B%7D%2C%22personalCardConfig%22%3A%7B%7D%7D%7D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=7aaad56a5c3ff3f99471f775ecfcea96&sn=203B71171B45092F88DF38E2C731331C18AED532&soft_id=21&timestamp=1624072596&user_id=2128765482&ver=210301"},{"key":"shuqispbody","val":"_public=skinId%3D999%26idfa%3DA56EABD4-981A-4937-AF46-5D97ECAC3E9B%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26umidtoken%3DYM1PtQNHRHMDAMvdMFyQD2HU%26user_id%3D2128765482%26sn%3D203B71171B45092F88DF38E2C731331C18AED532%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3DF610A7897C7CC1FE27EE72B8C5C4A505D5E2F7BA%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhone8P%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYM1PtQNHRHMDAMvdMFyQD2HU%26utype%3Dpre_vip%26sdk%3D13.3&deliveryId=525&key=sq_app_ad&miniWua=HHnB_xcbTdtoLlVXJ0JMJ3FDws3%2BEoeMjY3xbH7LazGELjBI%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=626&sign=3B8FDC6D7971E309EBFF3B71C71872E5&timestamp=1624072667&userId=2128765482&user_id=2128765482&wua=HIVW_H/6g0D9P6zF0fMFvFPkch8ujUKNrOirvZimvfEELiR6Jf8rKA81agyWaf6mJmzLmujT4qquatZHwnMMhXqPRxeOM7ZUfUeB6/NXnTQ6R7uU1PWLS5KXNDzrQSRpfoP9zp4etA77bj8lzLNvsnoObKctt79MOaTfc5WN3JfT8Vbpkip42eRs5T82OIPrQOAL3D/hoM3RK9u7FjcpjDDZfk1h2hJJZWNleALFSjxoydys%3D"},{"key":"shuqiscbody","val":""},{"key":"shuqiydbody","val":""},{"key":"shuqiqdbody","val":"clientTimestamp=1624072759&position=501&userId=2128765482&signInType=1&wua=HIVW_I6rVZ5KTbp%2FFS4qgASGtAT6TLXap9FP5Bohy81dRwWCGaGGUe1MbEK%2FfH4wthl3O2d8uxwIkRDmh9sAy6MfrMfCaQj68xzRBjLzwLRlAKzRxBY6hWvXuNHeuvGJszaQxArHQ7vhecaaYObseuJLSf5iNtFqwQ2Bw50A0oLgkLaq4ny0fold1lttCRC5SuUU7y40euTCvdURQDB9hFSqHX7n%2BpXkV6jo9VlzMDMQcZW0%3D&ua=&miniWua=HHnB_dlZUeqf%2BcWonoQYAjzhI0UgDY4MrwAuBhvopayZ8h%2Fs%3D&umidtoken=YM1PtQNHRHMDAMvdMFyQD2HU&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&sign=0e4c8a62d60cafe09b740ea2e6056fc6&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.3%26utdid%3DYM1PtQNHRHMDAMvdMFyQD2HU%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2128765482%26sn%3D203B71171B45092F88DF38E2C731331C18AED532%26umidtoken%3DYM1PtQNHRHMDAMvdMFyQD2HU%26msv%3D8.0.0%26brand%3DApple%26imei%3DF610A7897C7CC1FE27EE72B8C5C4A505D5E2F7BA%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone8P%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DA56EABD4-981A-4937-AF46-5D97ECAC3E9B"},{"key":"shuqirwbody","val":"serviceWorkerOn=1&stopPullRefresh=1&from=ShuqiTab&upf=20368&sdk=13.3&utdid=YM1PtQNHRHMDAMvdMFyQD2HU&ustatus=0&first_placeid=111111&net_env=4g&placeid=111111&user_id=2128765482&sn=203B71171B45092F88DF38E2C731331C18AED532&umidtoken=YM1PtQNHRHMDAMvdMFyQD2HU&msv=8.0.0&brand=Apple&imei=F610A7897C7CC1FE27EE72B8C5C4A505D5E2F7BA&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=1&ver=210301&mod=iPhone8P&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=A56EABD4-981A-4937-AF46-5D97ECAC3E9B&params=%7B%22resources%22%3A%7B%22ShuqiBsDailyTask%22%3A%7B%7D%7D%7D&userId=2128765482&placeId=111111&timestamp=1624072765&sqSv=1.0&sign=4e8b5721872ae837d70433fba9b357c4&key=sq_h5_gateway&_public="},{"key":"shuqifxbody","val":""},{"key":"shuqisprwurl","val":"https://ocean.shuqireader.com/api/ad/adserver/v1/api/getAdInfo?appVer=4.3.6.0&placeId=111111&platform=iOS&requestSrc=h5&resourceId=626&timestamp=1624072713&user_id=2128765482&sqSv=1.0&sign=0bef80f30730b40c4951b9eb59cae7f1&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.3%26utdid%3DYM1PtQNHRHMDAMvdMFyQD2HU%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2128765482%26sn%3D203B71171B45092F88DF38E2C731331C18AED532%26umidtoken%3DYM1PtQNHRHMDAMvdMFyQD2HU%26msv%3D8.0.0%26brand%3DApple%26imei%3DF610A7897C7CC1FE27EE72B8C5C4A505D5E2F7BA%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone8P%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DA56EABD4-981A-4937-AF46-5D97ECAC3E9B"},{"key":"shuqijlbody","val":"requestSrc=h5&userId=2128765482&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624072765&sqSv=1.0&sign=a819561deb6e8dde262f4ee27179e632&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.3%26utdid%3DYM1PtQNHRHMDAMvdMFyQD2HU%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2128765482%26sn%3D203B71171B45092F88DF38E2C731331C18AED532%26umidtoken%3DYM1PtQNHRHMDAMvdMFyQD2HU%26msv%3D8.0.0%26brand%3DApple%26imei%3DF610A7897C7CC1FE27EE72B8C5C4A505D5E2F7BA%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone8P%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DA56EABD4-981A-4937-AF46-5D97ECAC3E9B"},{"key":"shuqisqjlbody","val":"src=&userId=2128765482&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624072663&sqSv=1.0&sign=0b5a7704a2adf3a5cd1f8bdf535ad203&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.3%26utdid%3DYM1PtQNHRHMDAMvdMFyQD2HU%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2128765482%26sn%3D203B71171B45092F88DF38E2C731331C18AED532%26umidtoken%3DYM1PtQNHRHMDAMvdMFyQD2HU%26msv%3D8.0.0%26brand%3DApple%26imei%3DF610A7897C7CC1FE27EE72B8C5C4A505D5E2F7BA%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone8P%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DA56EABD4-981A-4937-AF46-5D97ECAC3E9B"},{"key":"shuqicjyurl","val":"https://ocean.shuqireader.com/api/activity/activity/v1/lottery/info?timestamp=1624072715&userId=2128765482&activityId=311&sqSv=1.0&sign=63ed2c85c9b3cd408a7d1c6a7a47088e&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.3%26utdid%3DYM1PtQNHRHMDAMvdMFyQD2HU%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2128765482%26sn%3D203B71171B45092F88DF38E2C731331C18AED532%26umidtoken%3DYM1PtQNHRHMDAMvdMFyQD2HU%26msv%3D8.0.0%26brand%3DApple%26imei%3DF610A7897C7CC1FE27EE72B8C5C4A505D5E2F7BA%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone8P%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DA56EABD4-981A-4937-AF46-5D97ECAC3E9B"},{"key":"shuqicjcsbody","val":"_public=skinId%3D999%26idfa%3DA56EABD4-981A-4937-AF46-5D97ECAC3E9B%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26umidtoken%3DYM1PtQNHRHMDAMvdMFyQD2HU%26user_id%3D2128765482%26sn%3D203B71171B45092F88DF38E2C731331C18AED532%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3DF610A7897C7CC1FE27EE72B8C5C4A505D5E2F7BA%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhone8P%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYM1PtQNHRHMDAMvdMFyQD2HU%26utype%3Dpre_vip%26sdk%3D13.3&deliveryId=711&key=sq_app_ad&miniWua=HHnB_T0lGV%2BbpD1moQ8vMyC4zhp8wbW7ghRVWb3dF6X8uDrk%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=703&sign=83CF20C7C0B0E51893B7C46E7B3A3F8F&timestamp=1624072695&userId=2128765482&user_id=2128765482&wua=HIVW_smsFc/XGMNM4mUVlr9RgMvDiEFjtss7OsNqO7CFJbt0pIShdFRIT0MtfpiwX6HOF%2BxYbfMQZvlrvtZhTCuCdmZ3dBfjZP2xTidJ%2BMzO9VD0THsU0ei7vzGgXpYYGsVMkTq4ow1cLKd7PWzyJKxmu/FNYXxik4W2qzxT8rqknvkS8hLPyD4Fqo6X6qvklS4PHs1kgwR2L7vkR3EkKnGJ2x7cJFINnfM/km4RAntPS9UA%3D"},{"key":"shuqicjbody","val":"wua=HIVW_x%2BPVgIpvu651NvDU3olH6qUFYFtlpIsn7lIDOg8pGrNdJlzkMoj%2FQAl3WC1uQD4sAI2zCctmWXzfRw3P3ty32HzlVvGOJFJNSqMy5s4%2BdFeqtWT2uyl13NtGH7%2BTc6sKckIQlWKhqnHG0onxIey%2BspTDFzVag%2B2e%2F4pWlKAcPw6zSBA1WC0NJA3JQ0B%2BtrQAiLwP2TRUOjcaMAEtPTDuVSatlN7ZTcAd8NeVTOxj944%3D&ua=&userId=2128765482&umidtoken=YM1PtQNHRHMDAMvdMFyQD2HU&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&asac=2A20C07RJ9F51AOEFSNHDR&timestamp=1624072699&activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&sqSv=1.0&sign=77a098c3ad5fe5a2cfe803dff241a2f1&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.3%26utdid%3DYM1PtQNHRHMDAMvdMFyQD2HU%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2128765482%26sn%3D203B71171B45092F88DF38E2C731331C18AED532%26umidtoken%3DYM1PtQNHRHMDAMvdMFyQD2HU%26msv%3D8.0.0%26brand%3DApple%26imei%3DF610A7897C7CC1FE27EE72B8C5C4A505D5E2F7BA%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone8P%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DA56EABD4-981A-4937-AF46-5D97ECAC3E9B"},{"key":"shuqijsspbody","val":""},{"key":"shuqijsydurl","val":""},{"key":"shuqijsydbody","val":""},{"key":"shuqijsqdbody","val":""},{"key":"shuqijsqdspyurl","val":""},{"key":"shuqijsqdspbody","val":""},{"key":"shuqijsrwbody","val":""},{"key":"shuqijsfxbody","val":""},{"key":"shuqijsbookurl","val":""},{"key":"shuqijsbookbody","val":""},{"key":"shuqijssprwurl","val":""},{"key":"shuqiuserurl2","val":"https://ocean.shuqireader.com/api/jaccount/accountapi/v1/sapi/account/getBindinfo?userId=2129913180&sqSv=1.0&timestamp=1624072826&sign=8c287e77ab3ac983a9e5f629268205e1&key=sq_h5_gateway"},{"key":"shuqisyurl2","val":"https://render.shuqireader.com/load/resource?sdk=13.4.1&utdid=YM1iGzluGvYDAJvI9KIMnK9G&ustatus=0&first_placeid=111111&net_env=4g&placeid=111111&user_id=2129913180&sn=0FA89950AD467F421654811E85330DA8F13CC13E&umidtoken=YM1iGzluGvYDAJvI9KIMnK9G&msv=8.0.0&brand=Apple&imei=B505347728FD2C0F7C144F422EBEC2E248BA3DB7&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=iOS&ver=210301&mod=UnknowniPod&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=76367479-E65D-4395-800C-1E0A53282B3E"},{"key":"shuqisybody2","val":"appVer=4.3.6.0&imei=B505347728FD2C0F7C144F422EBEC2E248BA3DB7&isNewUser=1&params=%7B%22resources%22%3A%7B%22ShuqiVipEntry%22%3A%7B%7D%2C%22personalCardConfig%22%3A%7B%7D%7D%7D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=4a9984228d51aff3670aa6672fce3c2c&sn=0FA89950AD467F421654811E85330DA8F13CC13E&soft_id=21&timestamp=1624072733&user_id=2129913180&ver=210301"},{"key":"shuqispbody2","val":"_public=utype%3Dpre_vip%26idfa%3D76367479-E65D-4395-800C-1E0A53282B3E%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26umidtoken%3DYM1iGzluGvYDAJvI9KIMnK9G%26user_id%3D2129913180%26sn%3D0FA89950AD467F421654811E85330DA8F13CC13E%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3DB505347728FD2C0F7C144F422EBEC2E248BA3DB7%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DUnknowniPod%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26utdid%3DYM1iGzluGvYDAJvI9KIMnK9G%26soft_id%3D21%26sdk%3D13.4.1&deliveryId=525&key=sq_app_ad&miniWua=HHnB_xaWUj8QSGgsYhjU04QAh4s3x8Et85lWjjQABEVheB0M%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=626&sign=E822CC4B31E752D2B1EDFF36000856C2&timestamp=1624072796&userId=2129913180&user_id=2129913180&wua=HIVW_AOSLdZFcs8uALK3MG70oJuC0HSr3SPKwaMylb6QgFaMNGV1%2Bcwrzrg6yUtqoNErmB1EdxghcHjCZFxizQCLBrK9Rw6%2BylQf8sQDcSKzGqmmk1CGCF2c4pR5OhzyJTFvQU06wMrgKC97X/Q/QyhUWXEFijpeLvL/O4RanUmzthyRPqYD/v9lh8n/X/kS6zQplyrfVqyL0dCCTepJi5oz1rQ%3D%3D"},{"key":"shuqiscbody2","val":""},{"key":"shuqiydbody2","val":""},{"key":"shuqiqdbody2","val":"clientTimestamp=1624072786&position=501&userId=2129913180&signInType=1&wua=HIVW_%2Fh6xOwr08X6jjWTyw5hLB3sC%2FQiqMjMFGAwQ9Pwhtg98XnjsL%2F9zKkXx7II1obu2XkPhOSulRgcYlHVi4WlMDam7hI8o5DYD8UiAQNUKDkWxNTEGyjK0bCI5kJuL06%2FL2bPtVQMIlr4sQQV0JWRcu%2B1XBvJEa8AwP4KYecHJCT%2FdlSdRF7q7GOEz6Q9sgy88IeGoYXgKY6ahs13lAXZ6lYtf5u4%2F08x5FTJj89jtqQ8%3D&ua=&miniWua=HHnB_xuehz9Yfs5DWTItWP7SXlWX7NLSFBTHMuJx5nE6nzDg%3D&umidtoken=YM1iGzluGvYDAJvI9KIMnK9G&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&sign=dff7b55804afba52dd6818f9e72b7926&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.4.1%26utdid%3DYM1iGzluGvYDAJvI9KIMnK9G%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2129913180%26sn%3D0FA89950AD467F421654811E85330DA8F13CC13E%26umidtoken%3DYM1iGzluGvYDAJvI9KIMnK9G%26msv%3D8.0.0%26brand%3DApple%26imei%3DB505347728FD2C0F7C144F422EBEC2E248BA3DB7%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPod%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D76367479-E65D-4395-800C-1E0A53282B3E"},{"key":"shuqirwbody2","val":"serviceWorkerOn=1&stopPullRefresh=1&from=ShuqiTab&upf=20368&sdk=13.4.1&utdid=YM1iGzluGvYDAJvI9KIMnK9G&ustatus=0&first_placeid=111111&net_env=4g&placeid=111111&user_id=2129913180&sn=0FA89950AD467F421654811E85330DA8F13CC13E&umidtoken=YM1iGzluGvYDAJvI9KIMnK9G&msv=8.0.0&brand=Apple&imei=B505347728FD2C0F7C144F422EBEC2E248BA3DB7&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=1&ver=210301&mod=UnknowniPod&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=76367479-E65D-4395-800C-1E0A53282B3E&params=%7B%22resources%22%3A%7B%22ShuqiBsDailyTask%22%3A%7B%7D%7D%7D&userId=2129913180&placeId=111111&timestamp=1624072803&sqSv=1.0&sign=148a38afe86b936cb1474bb61f183e95&key=sq_h5_gateway&_public="},{"key":"shuqifxbody2","val":""},{"key":"shuqisprwurl2","val":"https://ocean.shuqireader.com/api/ad/adserver/v1/api/getAdInfo?appVer=4.3.6.0&placeId=111111&platform=iOS&requestSrc=h5&resourceId=626&timestamp=1624072825&user_id=2129913180&sqSv=1.0&sign=6b856ebf6d0b582e932b7eec1becc3ee&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.4.1%26utdid%3DYM1iGzluGvYDAJvI9KIMnK9G%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2129913180%26sn%3D0FA89950AD467F421654811E85330DA8F13CC13E%26umidtoken%3DYM1iGzluGvYDAJvI9KIMnK9G%26msv%3D8.0.0%26brand%3DApple%26imei%3DB505347728FD2C0F7C144F422EBEC2E248BA3DB7%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPod%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D76367479-E65D-4395-800C-1E0A53282B3E"},{"key":"shuqijlbody2","val":"requestSrc=h5&userId=2129913180&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624072803&sqSv=1.0&sign=b93466157e7366b7cb7540a39249b2ff&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.4.1%26utdid%3DYM1iGzluGvYDAJvI9KIMnK9G%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2129913180%26sn%3D0FA89950AD467F421654811E85330DA8F13CC13E%26umidtoken%3DYM1iGzluGvYDAJvI9KIMnK9G%26msv%3D8.0.0%26brand%3DApple%26imei%3DB505347728FD2C0F7C144F422EBEC2E248BA3DB7%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPod%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D76367479-E65D-4395-800C-1E0A53282B3E"},{"key":"shuqisqjlbody2","val":"src=&userId=2129913180&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624072790&sqSv=1.0&sign=31ac8426b2c0cca1b802808d7284ad41&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.4.1%26utdid%3DYM1iGzluGvYDAJvI9KIMnK9G%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2129913180%26sn%3D0FA89950AD467F421654811E85330DA8F13CC13E%26umidtoken%3DYM1iGzluGvYDAJvI9KIMnK9G%26msv%3D8.0.0%26brand%3DApple%26imei%3DB505347728FD2C0F7C144F422EBEC2E248BA3DB7%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPod%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D76367479-E65D-4395-800C-1E0A53282B3E"},{"key":"shuqicjyurl2","val":"https://ocean.shuqireader.com/api/activity/activity/v1/lottery/info?timestamp=1624072827&userId=2129913180&activityId=311&sqSv=1.0&sign=c3f392129490431192e25c5078b33629&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.4.1%26utdid%3DYM1iGzluGvYDAJvI9KIMnK9G%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2129913180%26sn%3D0FA89950AD467F421654811E85330DA8F13CC13E%26umidtoken%3DYM1iGzluGvYDAJvI9KIMnK9G%26msv%3D8.0.0%26brand%3DApple%26imei%3DB505347728FD2C0F7C144F422EBEC2E248BA3DB7%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPod%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D76367479-E65D-4395-800C-1E0A53282B3E"},{"key":"shuqicjcsbody2","val":"_public=utype%3Dpre_vip%26idfa%3D76367479-E65D-4395-800C-1E0A53282B3E%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26umidtoken%3DYM1iGzluGvYDAJvI9KIMnK9G%26user_id%3D2129913180%26sn%3D0FA89950AD467F421654811E85330DA8F13CC13E%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3DB505347728FD2C0F7C144F422EBEC2E248BA3DB7%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DUnknowniPod%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26utdid%3DYM1iGzluGvYDAJvI9KIMnK9G%26soft_id%3D21%26sdk%3D13.4.1&deliveryId=711&key=sq_app_ad&miniWua=HHnB_2zjb0snz40lNplmM2RBVY0eRPM8vYAr0Ak0UC6y5t7w%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=703&sign=F32BC85711526DEAFB9A22A8632541F9&timestamp=1624072810&userId=2129913180&user_id=2129913180&wua=HIVW_rBfd/g4AC34TOP8hRD/xwTHcCjBWZRdywILjSpLCxqsqUkyMMtiWb%2BS6hneannzeglYfBfJMy9NaCsB72aEkchs%2BYksuchkIc65D98gm/erDjqLV2khtmIB22YwierzHBB2hNIyFyoTOVGwcMUFhV3Foyh2NDBqijXEs%2BcmC4NhspQMwcL4pFqvL9qQm6GRBQ0LQkmuO1HcmYJT9n1EB8eWMKoneUPFmDPL7CyY7dXA%3D"},{"key":"shuqicjbody2","val":"wua=HIVW_vzVNLUQmNt5LvoJZM%2BorgpIlRpbzj009sw3swPA80zxGGeZgNtfmGaDc5OOPlstVprODM1HNIVIv0pR2Wix%2BkzX9O19Scfdo2BZ2iughmmGup2xu1h08bgW6jVK5yWHt%2FGW0BDxxxmtODHgiSKTO7wcuqNEkg3dy29nAtQEA8hdSNo6yFnq8uIOuZiN2dCgugHFT7VA4YIKjYoHvN1XuLkmH28yWLV7l46NExoj31HA%3D&ua=&userId=2129913180&umidtoken=YM1iGzluGvYDAJvI9KIMnK9G&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&asac=2A20C07RJ9F51AOEFSNHDR&timestamp=1624072815&activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&sqSv=1.0&sign=738d55396c78759497d2ad804a4fd683&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.4.1%26utdid%3DYM1iGzluGvYDAJvI9KIMnK9G%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2129913180%26sn%3D0FA89950AD467F421654811E85330DA8F13CC13E%26umidtoken%3DYM1iGzluGvYDAJvI9KIMnK9G%26msv%3D8.0.0%26brand%3DApple%26imei%3DB505347728FD2C0F7C144F422EBEC2E248BA3DB7%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPod%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D76367479-E65D-4395-800C-1E0A53282B3E"},{"key":"shuqijsspbody2","val":""},{"key":"shuqijsydurl2","val":""},{"key":"shuqijsydbody2","val":""},{"key":"shuqijsqdbody2","val":""},{"key":"shuqijsqdspyurl2","val":""},{"key":"shuqijsqdspbody2","val":""},{"key":"shuqijsrwbody2","val":""},{"key":"shuqijsfxbody2","val":""},{"key":"shuqijsbookurl2","val":""},{"key":"shuqijsbookbody2","val":""},{"key":"shuqijssprwurl2","val":""},{"key":"shuqiuserurl3","val":"https://ocean.shuqireader.com/api/jaccount/accountapi/v1/sapi/account/getBindinfo?userId=2130358488&sqSv=1.0&timestamp=1624072912&sign=a9dcce23809a90bc4f809c30ea379aa0&key=sq_h5_gateway"},{"key":"shuqisyurl3","val":"https://render.shuqireader.com/load/resource?sdk=13.5&utdid=YM1ihR33dYcDANjy4eVYSAsq&ustatus=0&first_placeid=111111&net_env=wifi&placeid=111111&user_id=2130358488&sn=B210444DEF8BD4F6531AC1B5C138AAA89BC6B876&umidtoken=YM1ihR33dYcDANjy4eVYSAsq&msv=8.0.0&brand=Apple&imei=2C18F87A7B994A9DD5AD13BD24E38DCDDDD52B3D&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=iOS&ver=210301&mod=iPhone7plus&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=CD3261FA-1762-4B99-92C2-CBD710F5CA68"},{"key":"shuqisybody3","val":"appVer=4.3.6.0&imei=2C18F87A7B994A9DD5AD13BD24E38DCDDDD52B3D&isNewUser=1&params=%7B%22resources%22%3A%7B%22ShuqiVipEntry%22%3A%7B%7D%2C%22personalCardConfig%22%3A%7B%7D%7D%7D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=66e14dfe4dda1cf3c6deebc9cae9aec2&sn=B210444DEF8BD4F6531AC1B5C138AAA89BC6B876&soft_id=21&timestamp=1624072863&user_id=2130358488&ver=210301"},{"key":"shuqispbody3","val":"_public=skinId%3D999%26idfa%3DCD3261FA-1762-4B99-92C2-CBD710F5CA68%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26umidtoken%3DYM1ihR33dYcDANjy4eVYSAsq%26user_id%3D2130358488%26sn%3DB210444DEF8BD4F6531AC1B5C138AAA89BC6B876%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D2C18F87A7B994A9DD5AD13BD24E38DCDDDD52B3D%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhone7plus%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYM1ihR33dYcDANjy4eVYSAsq%26utype%3Dpre_vip%26sdk%3D13.5&deliveryId=525&key=sq_app_ad&miniWua=HHnB_5cYrARf51b0j0O278Fb3btme5j85955lE%2B0L72J03N8%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=626&sign=5238206989F87BC05456D925B67A45CE&timestamp=1624072876&userId=2130358488&user_id=2130358488&wua=HIVW_ZIQ%2Bo1tkyLhz0jV6GgG9oBCj6RNEqZlBVAdpEgePpocabq6wTfJV6EjzWPNCeemPPSMFVKslF8hZkcOKpnk7droAsdqi8d0w4rxOybKKpqI1w6tYHIhnA1h82lh/Xhcr7pQDw01mHgrY%2BECt9JdMZh193wBtqD6NG%2BaLHmKFcoRswZyfbKwcp/LMDqas8sn1EfXT2sSeZJzb2DVJwUwkuRGbVAYkUa7Y/mhtY4yhJRk%3D"},{"key":"shuqiscbody3","val":""},{"key":"shuqiydbody3","val":""},{"key":"shuqiqdbody3","val":"clientTimestamp=1624072870&position=501&userId=2130358488&signInType=1&wua=HIVW_1aWgdmh6s0BEyaYXnefxKJ%2BHQRmZ2u0fKHGz2ykhUytPMgH%2B%2FUA3JzinAz2s%2BF68ZT%2BrBgOTBCwtDTSn%2BUn6d%2BZ6Vb%2Bfdk40layO8Hk2W483%2FdZJATXq8gqPn2scRgrgAZ1yFr19jJMXU3ZbOnRQJK7MK1Bm7CNMII57KsJXfYTvxs8qw5q15Y9zRJTnWY6fVujtBCRTKj2n%2FoAKC2uR7zA1anH4N%2BYe9Cyq1g%2F4Jvs%3D&ua=&miniWua=HHnB_%2BfHkOkihpbmKNwVoYZl%2FeGHYzbgp%2BfJ4lbDD8smOgIY%3D&umidtoken=YM1ihR33dYcDANjy4eVYSAsq&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&sign=ddfd229dabe3f770632c3bd6372c5d02&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.5%26utdid%3DYM1ihR33dYcDANjy4eVYSAsq%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2130358488%26sn%3DB210444DEF8BD4F6531AC1B5C138AAA89BC6B876%26umidtoken%3DYM1ihR33dYcDANjy4eVYSAsq%26msv%3D8.0.0%26brand%3DApple%26imei%3D2C18F87A7B994A9DD5AD13BD24E38DCDDDD52B3D%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone7plus%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DCD3261FA-1762-4B99-92C2-CBD710F5CA68"},{"key":"shuqirwbody3","val":"serviceWorkerOn=1&stopPullRefresh=1&from=ShuqiTab&upf=20368&sdk=13.5&utdid=YM1ihR33dYcDANjy4eVYSAsq&ustatus=0&first_placeid=111111&net_env=wifi&placeid=111111&user_id=2130358488&sn=B210444DEF8BD4F6531AC1B5C138AAA89BC6B876&umidtoken=YM1ihR33dYcDANjy4eVYSAsq&msv=8.0.0&brand=Apple&imei=2C18F87A7B994A9DD5AD13BD24E38DCDDDD52B3D&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=1&ver=210301&mod=iPhone7plus&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=CD3261FA-1762-4B99-92C2-CBD710F5CA68&params=%7B%22resources%22%3A%7B%22ShuqiBsDailyTask%22%3A%7B%7D%7D%7D&userId=2130358488&placeId=111111&timestamp=1624072887&sqSv=1.0&sign=a078346476cfcf0f183b61b53994f3ce&key=sq_h5_gateway&_public="},{"key":"shuqifxbody3","val":""},{"key":"shuqisprwurl3","val":"https://ocean.shuqireader.com/api/ad/adserver/v1/api/getAdInfo?appVer=4.3.6.0&placeId=111111&platform=iOS&requestSrc=h5&resourceId=626&timestamp=1624072910&user_id=2130358488&sqSv=1.0&sign=a7930b0b1ac52496ec3ccecdd3414206&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.5%26utdid%3DYM1ihR33dYcDANjy4eVYSAsq%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2130358488%26sn%3DB210444DEF8BD4F6531AC1B5C138AAA89BC6B876%26umidtoken%3DYM1ihR33dYcDANjy4eVYSAsq%26msv%3D8.0.0%26brand%3DApple%26imei%3D2C18F87A7B994A9DD5AD13BD24E38DCDDDD52B3D%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone7plus%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DCD3261FA-1762-4B99-92C2-CBD710F5CA68"},{"key":"shuqijlbody3","val":"requestSrc=h5&userId=2130358488&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624072887&sqSv=1.0&sign=c12e52378beb0c8735f7f007bb10f69e&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.5%26utdid%3DYM1ihR33dYcDANjy4eVYSAsq%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2130358488%26sn%3DB210444DEF8BD4F6531AC1B5C138AAA89BC6B876%26umidtoken%3DYM1ihR33dYcDANjy4eVYSAsq%26msv%3D8.0.0%26brand%3DApple%26imei%3D2C18F87A7B994A9DD5AD13BD24E38DCDDDD52B3D%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone7plus%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DCD3261FA-1762-4B99-92C2-CBD710F5CA68"},{"key":"shuqisqjlbody3","val":"src=&userId=2130358488&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624072886&sqSv=1.0&sign=5d66531bcf03e30f0cd1e6860aa2e8ef&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.5%26utdid%3DYM1ihR33dYcDANjy4eVYSAsq%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2130358488%26sn%3DB210444DEF8BD4F6531AC1B5C138AAA89BC6B876%26umidtoken%3DYM1ihR33dYcDANjy4eVYSAsq%26msv%3D8.0.0%26brand%3DApple%26imei%3D2C18F87A7B994A9DD5AD13BD24E38DCDDDD52B3D%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone7plus%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DCD3261FA-1762-4B99-92C2-CBD710F5CA68"},{"key":"shuqicjyurl3","val":"https://ocean.shuqireader.com/api/activity/activity/v1/lottery/info?timestamp=1624072912&userId=2130358488&activityId=311&sqSv=1.0&sign=22109e55589f1d4e151d509296f6fabf&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.5%26utdid%3DYM1ihR33dYcDANjy4eVYSAsq%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2130358488%26sn%3DB210444DEF8BD4F6531AC1B5C138AAA89BC6B876%26umidtoken%3DYM1ihR33dYcDANjy4eVYSAsq%26msv%3D8.0.0%26brand%3DApple%26imei%3D2C18F87A7B994A9DD5AD13BD24E38DCDDDD52B3D%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone7plus%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DCD3261FA-1762-4B99-92C2-CBD710F5CA68"},{"key":"shuqicjcsbody3","val":"_public=skinId%3D999%26idfa%3DCD3261FA-1762-4B99-92C2-CBD710F5CA68%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26umidtoken%3DYM1ihR33dYcDANjy4eVYSAsq%26user_id%3D2130358488%26sn%3DB210444DEF8BD4F6531AC1B5C138AAA89BC6B876%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D2C18F87A7B994A9DD5AD13BD24E38DCDDDD52B3D%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhone7plus%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYM1ihR33dYcDANjy4eVYSAsq%26utype%3Dpre_vip%26sdk%3D13.5&deliveryId=711&key=sq_app_ad&miniWua=HHnB_qY%2BrJ1bhR/4EPbu8etqXab0Mq9Z/8IbgLO8eWV7Tubs%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=703&sign=E8A65D669B9A310BFF6F7CEB0481387A&timestamp=1624072890&userId=2130358488&user_id=2130358488&wua=HIVW_3q4HfyDaqhBuLC4zFZxCXZpQzja41eBI6/A5YFgF2oMZ8EsQQ4YDMM3cVKn9jMQddOS42HY8g9fKd0iiTphCtxGb4jflnCnGOQ4dJKZAHn1h/Be9ygREf43NQV0/GMp7mPbKnZUJyDQFkjG41LFRp%2BikRY6CPnvfuvZSHI%2BuDYSz6%2BIC9Nt3uSgs1D5JhIIKvZhY9kXODGSjLV9Iguj2ljzW3TDlynSEmyflE83JiDY%3D"},{"key":"shuqicjbody3","val":"wua=HIVW_gbunHYIBCCeA34w3mSgKLantXQupxNE%2BMKV0jQ2CWFzkUCAmhTrqy%2FcWy%2B2%2BRVYW9YxpSOqEp1NiqrLjXLcMgZh6XZv3MsERyQK3801gBt%2F75qqgHESRKr1V1uHp2kprHQQ3gPhCoz4rq3WbsPypp5X5ayXCsbgy87QlD82p%2Ba39Cf7kkWy3%2Fe%2FzQcS%2F2OXZDfZ8ew0NotsBQ%2Bg36G0MxGRN36JEm4n8qO3EkmL2XUY%3D&ua=&userId=2130358488&umidtoken=YM1ihR33dYcDANjy4eVYSAsq&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&asac=2A20C07RJ9F51AOEFSNHDR&timestamp=1624072896&activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&sqSv=1.0&sign=1bd0cb669823fb9c85d138471e0320f0&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.5%26utdid%3DYM1ihR33dYcDANjy4eVYSAsq%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2130358488%26sn%3DB210444DEF8BD4F6531AC1B5C138AAA89BC6B876%26umidtoken%3DYM1ihR33dYcDANjy4eVYSAsq%26msv%3D8.0.0%26brand%3DApple%26imei%3D2C18F87A7B994A9DD5AD13BD24E38DCDDDD52B3D%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone7plus%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DCD3261FA-1762-4B99-92C2-CBD710F5CA68"},{"key":"shuqijsspbody3","val":""},{"key":"shuqijsydurl3","val":""},{"key":"shuqijsydbody3","val":""},{"key":"shuqijsqdbody3","val":""},{"key":"shuqijsqdspyurl3","val":""},{"key":"shuqijsqdspbody3","val":""},{"key":"shuqijsrwbody3","val":""},{"key":"shuqijsfxbody3","val":""},{"key":"shuqijsbookurl3","val":""},{"key":"shuqijsbookbody3","val":""},{"key":"shuqijssprwurl3","val":""},{"key":"shuqiuserurl4","val":"https://ocean.shuqireader.com/api/jaccount/accountapi/v1/sapi/account/getBindinfo?userId=2131935741&sqSv=1.0&timestamp=1624073120&sign=3e9ae510290eb8fd94f44f41050177fb&key=sq_h5_gateway"},{"key":"shuqisyurl4","val":"https://render.shuqireader.com/load/resource?sdk=13.4&utdid=YM1QGY2asxoDAIh5%2BB7nYx%2BA&ustatus=0&first_placeid=111111&net_env=4g&placeid=111111&user_id=2131935741&sn=A34D86565391B62A294E096ABB92FBDE35850F35&umidtoken=YM1QGY2asxoDAIh5%2BB7nYx%2BA&msv=8.0.0&brand=Apple&imei=444A60781994406FD52A0816965ED4DC266081C5&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=iOS&ver=210301&mod=UnknowniPad&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=21628F69-70A9-492D-B03E-277AF0AC103F"},{"key":"shuqisybody4","val":"appVer=4.3.6.0&imei=444A60781994406FD52A0816965ED4DC266081C5&isNewUser=1&params=%7B%22resources%22%3A%7B%22ShuqiVipEntry%22%3A%7B%7D%2C%22personalCardConfig%22%3A%7B%7D%7D%7D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=b59961c5cd24490ccc7f50dae89d2945&sn=A34D86565391B62A294E096ABB92FBDE35850F35&soft_id=21&timestamp=1624073042&user_id=2131935741&ver=210301"},{"key":"shuqispbody4","val":"_public=skinId%3D999%26idfa%3D21628F69-70A9-492D-B03E-277AF0AC103F%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26umidtoken%3DYM1QGY2asxoDAIh5%2BB7nYx%2BA%26user_id%3D2131935741%26sn%3DA34D86565391B62A294E096ABB92FBDE35850F35%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D444A60781994406FD52A0816965ED4DC266081C5%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYM1QGY2asxoDAIh5%2BB7nYx%2BA%26utype%3Dpre_vip%26sdk%3D13.4&deliveryId=525&key=sq_app_ad&miniWua=HHnB_eBk9RT8O8q7NDheFzm5wCRNzS%2B6ugO1685S36iGEdZg%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=626&sign=1E35AC6913C70D2034F6615840D52889&timestamp=1624073075&userId=2131935741&user_id=2131935741&wua=HIVW_rILyTnI%2BO3WuLfXpoePK2RcIi1ZaFyMtVZDqKK5p3jOtTlsraxNlcMlJyxBmtO5XE8WMDUOBMBYCRd5njAneRsWhy/tt1qQhSIBeN2DC9daROf3JGyotaNfK3YGRKNtVH83lkyHK6vWO80N0gdkM2lRFzWHPnPvC1woYMyqPnWA00RchRNuSWS%2B2P1BEtV5SYTGORo1ZmWQAGM77ENEJgpjzWo8YCDuA7yZb9vIYxbw%3D"},{"key":"shuqiscbody4","val":""},{"key":"shuqiydbody4","val":""},{"key":"shuqiqdbody4","val":"clientTimestamp=1624073057&position=501&userId=2131935741&signInType=1&wua=HIVW_LQfgf6KuC2L%2Fwp91dZDbRSwF9Fq%2B0AkeTl6Ui45jZfv3BQi5a6zjIlmUSlvvvDpp%2FItTurLV3tvcqdHc3porsuDiTcsOLtc9%2BdbF%2BUhM2bSj3iZ9Lj1cGNa9D5FZgQi4oz%2FYfa4xeiF0CcybawaFIXVaXXKKYMLKX9MYNSY9yXsZboUJkdB36EX0fMxyjPxqdwCIfUBAQyQD5gCsX1jyJwmJM2nsQRYzfbxrrL4I%2Bbw%3D&ua=&miniWua=HHnB_IB%2Beql7k9MUuQHrnHLSYtU2EM%2FIfM6uaRvxnaXWHYTw%3D&umidtoken=YM1QGY2asxoDAIh5%2BB7nYx%2BA&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&sign=ad75b272924d35ab5e3ae3a26e097f05&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.4%26utdid%3DYM1QGY2asxoDAIh5%252BB7nYx%252BA%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2131935741%26sn%3DA34D86565391B62A294E096ABB92FBDE35850F35%26umidtoken%3DYM1QGY2asxoDAIh5%252BB7nYx%252BA%26msv%3D8.0.0%26brand%3DApple%26imei%3D444A60781994406FD52A0816965ED4DC266081C5%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D21628F69-70A9-492D-B03E-277AF0AC103F"},{"key":"shuqirwbody4","val":"serviceWorkerOn=1&stopPullRefresh=1&from=ShuqiTab&upf=20368&sdk=13.4&utdid=YM1QGY2asxoDAIh5%2BB7nYx%2BA&ustatus=0&first_placeid=111111&net_env=4g&placeid=111111&user_id=2131935741&sn=A34D86565391B62A294E096ABB92FBDE35850F35&umidtoken=YM1QGY2asxoDAIh5%2BB7nYx%2BA&msv=8.0.0&brand=Apple&imei=444A60781994406FD52A0816965ED4DC266081C5&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&session=&skinColor=23B383&platform=1&ver=210301&mod=UnknowniPad&statusBarHeight=44.000000&skinVersion=1&wh=1242x2688&soft_id=21&utype=pre_vip&skinId=999&idfa=21628F69-70A9-492D-B03E-277AF0AC103F&params=%7B%22resources%22%3A%7B%22ShuqiBsDailyTask%22%3A%7B%7D%7D%7D&userId=2131935741&placeId=111111&timestamp=1624073100&sqSv=1.0&sign=ec3c31b659836cddf3b6246a39611030&key=sq_h5_gateway&_public="},{"key":"shuqifxbody4","val":""},{"key":"shuqisprwurl4","val":"https://ocean.shuqireader.com/api/ad/adserver/v1/api/getAdInfo?appVer=4.3.6.0&placeId=111111&platform=iOS&requestSrc=h5&resourceId=626&timestamp=1624073121&user_id=2131935741&sqSv=1.0&sign=6e2a9e8c410075f719f45506cd800812&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.4%26utdid%3DYM1QGY2asxoDAIh5%252BB7nYx%252BA%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2131935741%26sn%3DA34D86565391B62A294E096ABB92FBDE35850F35%26umidtoken%3DYM1QGY2asxoDAIh5%252BB7nYx%252BA%26msv%3D8.0.0%26brand%3DApple%26imei%3D444A60781994406FD52A0816965ED4DC266081C5%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D21628F69-70A9-492D-B03E-277AF0AC103F"},{"key":"shuqijlbody4","val":"requestSrc=h5&userId=2131935741&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624073100&sqSv=1.0&sign=df14737a00d6595e1813ea2aabd968fa&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.4%26utdid%3DYM1QGY2asxoDAIh5%252BB7nYx%252BA%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2131935741%26sn%3DA34D86565391B62A294E096ABB92FBDE35850F35%26umidtoken%3DYM1QGY2asxoDAIh5%252BB7nYx%252BA%26msv%3D8.0.0%26brand%3DApple%26imei%3D444A60781994406FD52A0816965ED4DC266081C5%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D21628F69-70A9-492D-B03E-277AF0AC103F"},{"key":"shuqisqjlbody4","val":"src=&userId=2131935741&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624073070&sqSv=1.0&sign=b146acf7aabcd039d84bbd76de2af412&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.4%26utdid%3DYM1QGY2asxoDAIh5%252BB7nYx%252BA%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2131935741%26sn%3DA34D86565391B62A294E096ABB92FBDE35850F35%26umidtoken%3DYM1QGY2asxoDAIh5%252BB7nYx%252BA%26msv%3D8.0.0%26brand%3DApple%26imei%3D444A60781994406FD52A0816965ED4DC266081C5%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D21628F69-70A9-492D-B03E-277AF0AC103F"},{"key":"shuqicjyurl4","val":"https://ocean.shuqireader.com/api/activity/activity/v1/lottery/info?timestamp=1624073123&userId=2131935741&activityId=311&sqSv=1.0&sign=0b2a72fe3b82d8de4230d0a3fb08c4e8&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.4%26utdid%3DYM1QGY2asxoDAIh5%252BB7nYx%252BA%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2131935741%26sn%3DA34D86565391B62A294E096ABB92FBDE35850F35%26umidtoken%3DYM1QGY2asxoDAIh5%252BB7nYx%252BA%26msv%3D8.0.0%26brand%3DApple%26imei%3D444A60781994406FD52A0816965ED4DC266081C5%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D21628F69-70A9-492D-B03E-277AF0AC103F"},{"key":"shuqicjcsbody4","val":"_public=skinId%3D999%26idfa%3D21628F69-70A9-492D-B03E-277AF0AC103F%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26umidtoken%3DYM1QGY2asxoDAIh5%2BB7nYx%2BA%26user_id%3D2131935741%26sn%3DA34D86565391B62A294E096ABB92FBDE35850F35%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D444A60781994406FD52A0816965ED4DC266081C5%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYM1QGY2asxoDAIh5%2BB7nYx%2BA%26utype%3Dpre_vip%26sdk%3D13.4&deliveryId=711&key=sq_app_ad&miniWua=HHnB_BCQILt50NcGo22smXDiwBPaGSSwJrXmVNvUvPPC0E0g%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=703&sign=D2327ADD14935AE178E3284D0DC84168&timestamp=1624073108&userId=2131935741&user_id=2131935741&wua=HIVW_PsDIE/kg83qirNDVUKLp2yrnVYNO2RKFXJ7FO9iTQfdS7mpbDXeV5uLOAOrYt09U5v0KcuhtAF%2BgUIbkKw28UokYabrjO%2BOFDU5EwAYO8oL5ik4yzFFQSE71rOx5sOQV2b3Y1h05yptZSYuy%2BS%2BKhyBxl4DXc7zlJwsudfRzUqm5dsY2EAGE9nCMKR0uKyD/iYwNPnwKRQf%2BQZn1eE7bnk4ZUbdZEyzWzuLZkALQKyo%3D"},{"key":"shuqicjbody4","val":"wua=HIVW_GsJUCytCxBgwnuvfwEu730qESKSqLBBo3b5nlH8uP4qlW57hjSO1Q2UshXiOON6GvElMH3UowKr39hHEdchUXUhJ9rfygyTW7ZvpJlxf3ZvHAttQX9%2FS2UXYszlBv1rZTegV5SfHplP0iMA6dWTvOvs4wxGMQajUJKuwoA7zE2o0ANWRmDPl38lI2jY76SzVrpUg9KLu5Lijgb88WxJMrWy4e1fPwKItLgJ4fzlT7NY%3D&ua=&userId=2131935741&umidtoken=YM1QGY2asxoDAIh5%2BB7nYx%2BA&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&asac=2A20C07RJ9F51AOEFSNHDR&timestamp=1624073110&activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&sqSv=1.0&sign=d9a2376346764e43e04baa209d4c554d&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.4%26utdid%3DYM1QGY2asxoDAIh5%252BB7nYx%252BA%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2131935741%26sn%3DA34D86565391B62A294E096ABB92FBDE35850F35%26umidtoken%3DYM1QGY2asxoDAIh5%252BB7nYx%252BA%26msv%3D8.0.0%26brand%3DApple%26imei%3D444A60781994406FD52A0816965ED4DC266081C5%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D21628F69-70A9-492D-B03E-277AF0AC103F"},{"key":"shuqijsspbody4","val":""},{"key":"shuqijsydurl4","val":""},{"key":"shuqijsydbody4","val":""},{"key":"shuqijsqdbody4","val":""},{"key":"shuqijsqdspyurl4","val":""},{"key":"shuqijsqdspbody4","val":""},{"key":"shuqijsrwbody4","val":""},{"key":"shuqijsfxbody4","val":""},{"key":"shuqijsbookurl4","val":""},{"key":"shuqijsbookbody4","val":""},{"key":"shuqijssprwurl4","val":""},{"key":"shuqiuserurl5","val":"https://ocean.shuqireader.com/api/jaccount/accountapi/v1/sapi/account/getBindinfo?userId=2131289878&sqSv=1.0&timestamp=1624073187&sign=48838419a66cff1437d2192f80d55277&key=sq_h5_gateway"},{"key":"shuqisyurl5","val":"https://render.shuqireader.com/load/resource?sdk=13.2.2&utdid=YM1QIjrDDt8DAHtrMFRw5QJ1&ustatus=0&first_placeid=111111&net_env=4g&placeid=111111&user_id=2131289878&sn=7DD85674658472522E1CC5EA8F69E405BDDA3396&umidtoken=YM1QIjrDDt8DAHtrMFRw5QJ1&msv=8.0.0&brand=Apple&imei=7EBF03E28140F5A7EAFB82202D4E9350DA9AFCE2&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=iOS&ver=210301&mod=iPad4G&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=264689CC-762B-47A8-B0AD-DBDCF83823D6"},{"key":"shuqisybody5","val":"appVer=4.3.6.0&imei=7EBF03E28140F5A7EAFB82202D4E9350DA9AFCE2&isNewUser=1&params=%7B%22resources%22%3A%7B%22ShuqiVipEntry%22%3A%7B%7D%2C%22personalCardConfig%22%3A%7B%7D%7D%7D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=396386950f47ba315de96a8421bab61d&sn=7DD85674658472522E1CC5EA8F69E405BDDA3396&soft_id=21&timestamp=1624073136&user_id=2131289878&ver=210301"},{"key":"shuqispbody5","val":"_public=skinId%3D999%26idfa%3D264689CC-762B-47A8-B0AD-DBDCF83823D6%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26umidtoken%3DYM1QIjrDDt8DAHtrMFRw5QJ1%26user_id%3D2131289878%26sn%3D7DD85674658472522E1CC5EA8F69E405BDDA3396%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D7EBF03E28140F5A7EAFB82202D4E9350DA9AFCE2%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPad4G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYM1QIjrDDt8DAHtrMFRw5QJ1%26utype%3Dpre_vip%26sdk%3D13.2.2&deliveryId=525&key=sq_app_ad&miniWua=HHnB_v4YlDsIZjw8A%2BdsXws5F5y4zunmhbAYhTolCbNeNFfY%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=626&sign=656F8FB9182770F80FA8489DE5267117&timestamp=1624073161&userId=2131289878&user_id=2131289878&wua=HIVW_8I7vPW735Dz1YiBFAqxKdFFoRfG78cu4B9JMI4pshvXhtXvNSnH4tuLe9qMSMg5UKfBXA5A2XqhKnlDkD8efJV9dSdkZ1OJkbBf306ZI8VpnrOKsbRilaTTWe83k3RqBBBj2x6HywpFmK5FSFm9tltRTKH4zZDAWKHA5odIB/S2LGr/fRXUGpss/eA/1d0Jb5Yn6jeltP4lfSfGNXhQr5F/3GDMRNk0usWz3KyKLLXc%3D"},{"key":"shuqiscbody5","val":""},{"key":"shuqiydbody5","val":""},{"key":"shuqiqdbody5","val":"clientTimestamp=1624073148&position=501&userId=2131289878&signInType=1&wua=HIVW_zRI2IJ0tbB1jISziuWEQe4TU%2BPburx9m9IoV2RXBUWq%2FXi%2BlqP2QvVNU3m5Sj9ca3y2JjkYQvSBGJR%2FZFkFfGXjA2ofA9rL%2FHIAofbj8RP83UFNZlePymOJDpnck%2B4XydmuVhyJsJABx4ZXTTGYnmtylvzEymRAmeW3B1wuDqEErN9GITk67BudeRC3AJJol9F6OSH7%2Bd5yF5N1l68IAO0uJyHQIuo0z1FLnqhbHHmo%3D&ua=&miniWua=HHnB_tgmS8UEn2evaIAeJ4sgnmOfWTsgvik9spZ8lP30nvlI%3D&umidtoken=YM1QIjrDDt8DAHtrMFRw5QJ1&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&sign=6d078e403b3d40bb8c943e6846d66775&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.2.2%26utdid%3DYM1QIjrDDt8DAHtrMFRw5QJ1%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2131289878%26sn%3D7DD85674658472522E1CC5EA8F69E405BDDA3396%26umidtoken%3DYM1QIjrDDt8DAHtrMFRw5QJ1%26msv%3D8.0.0%26brand%3DApple%26imei%3D7EBF03E28140F5A7EAFB82202D4E9350DA9AFCE2%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad4G%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D264689CC-762B-47A8-B0AD-DBDCF83823D6"},{"key":"shuqirwbody5","val":"serviceWorkerOn=1&stopPullRefresh=1&from=ShuqiTab&upf=20368&sdk=13.2.2&utdid=YM1QIjrDDt8DAHtrMFRw5QJ1&ustatus=0&first_placeid=111111&net_env=4g&placeid=111111&user_id=2131289878&sn=7DD85674658472522E1CC5EA8F69E405BDDA3396&umidtoken=YM1QIjrDDt8DAHtrMFRw5QJ1&msv=8.0.0&brand=Apple&imei=7EBF03E28140F5A7EAFB82202D4E9350DA9AFCE2&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=1&ver=210301&mod=iPad4G&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=264689CC-762B-47A8-B0AD-DBDCF83823D6&params=%7B%22resources%22%3A%7B%22ShuqiBsDailyTask%22%3A%7B%7D%7D%7D&userId=2131289878&placeId=111111&timestamp=1624073164&sqSv=1.0&sign=a084fb193387694427b0b7848460cd44&key=sq_h5_gateway&_public="},{"key":"shuqifxbody5","val":""},{"key":"shuqisprwurl5","val":"https://ocean.shuqireader.com/api/ad/adserver/v1/api/getAdInfo?appVer=4.3.6.0&placeId=111111&platform=iOS&requestSrc=h5&resourceId=626&timestamp=1624073185&user_id=2131289878&sqSv=1.0&sign=ddc8f6400c84b45b40707ea43d3d791f&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.2.2%26utdid%3DYM1QIjrDDt8DAHtrMFRw5QJ1%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2131289878%26sn%3D7DD85674658472522E1CC5EA8F69E405BDDA3396%26umidtoken%3DYM1QIjrDDt8DAHtrMFRw5QJ1%26msv%3D8.0.0%26brand%3DApple%26imei%3D7EBF03E28140F5A7EAFB82202D4E9350DA9AFCE2%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad4G%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D264689CC-762B-47A8-B0AD-DBDCF83823D6"},{"key":"shuqijlbody5","val":"requestSrc=h5&userId=2131289878&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624073164&sqSv=1.0&sign=d47a4484603ece4f4b51c5d4c198fd96&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.2.2%26utdid%3DYM1QIjrDDt8DAHtrMFRw5QJ1%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2131289878%26sn%3D7DD85674658472522E1CC5EA8F69E405BDDA3396%26umidtoken%3DYM1QIjrDDt8DAHtrMFRw5QJ1%26msv%3D8.0.0%26brand%3DApple%26imei%3D7EBF03E28140F5A7EAFB82202D4E9350DA9AFCE2%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad4G%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D264689CC-762B-47A8-B0AD-DBDCF83823D6"},{"key":"shuqisqjlbody5","val":"src=&userId=2131289878&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624073156&sqSv=1.0&sign=e3df8d3fabc949e49878da821a133b19&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.2.2%26utdid%3DYM1QIjrDDt8DAHtrMFRw5QJ1%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2131289878%26sn%3D7DD85674658472522E1CC5EA8F69E405BDDA3396%26umidtoken%3DYM1QIjrDDt8DAHtrMFRw5QJ1%26msv%3D8.0.0%26brand%3DApple%26imei%3D7EBF03E28140F5A7EAFB82202D4E9350DA9AFCE2%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad4G%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D264689CC-762B-47A8-B0AD-DBDCF83823D6"},{"key":"shuqicjyurl5","val":"https://ocean.shuqireader.com/api/activity/activity/v1/lottery/info?timestamp=1624073188&userId=2131289878&activityId=311&sqSv=1.0&sign=a7d4b5fd9af81dd3b75f4de8796b5edf&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.2.2%26utdid%3DYM1QIjrDDt8DAHtrMFRw5QJ1%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2131289878%26sn%3D7DD85674658472522E1CC5EA8F69E405BDDA3396%26umidtoken%3DYM1QIjrDDt8DAHtrMFRw5QJ1%26msv%3D8.0.0%26brand%3DApple%26imei%3D7EBF03E28140F5A7EAFB82202D4E9350DA9AFCE2%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad4G%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D264689CC-762B-47A8-B0AD-DBDCF83823D6"},{"key":"shuqicjcsbody5","val":"_public=skinId%3D999%26idfa%3D264689CC-762B-47A8-B0AD-DBDCF83823D6%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26umidtoken%3DYM1QIjrDDt8DAHtrMFRw5QJ1%26user_id%3D2131289878%26sn%3D7DD85674658472522E1CC5EA8F69E405BDDA3396%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D7EBF03E28140F5A7EAFB82202D4E9350DA9AFCE2%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPad4G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYM1QIjrDDt8DAHtrMFRw5QJ1%26utype%3Dpre_vip%26sdk%3D13.2.2&deliveryId=711&key=sq_app_ad&miniWua=HHnB_Xfm6Pj/ZBLJAX3n0JGeHi/53OGpJjax9VZegcvUdIcg%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=703&sign=9AFE67FE063D83E6070D8E50C348FB1E&timestamp=1624073172&userId=2131289878&user_id=2131289878&wua=HIVW_NfRiu4hAyKi71YckOp0%2B7zJTXVM8v6f94naun2eDPkgTWsFzqPQlgt0cm/3MYHGACFyT3x9CMg0zSrCDmUhKnDxgLM9Sln1acwjtc%2B31mZzUVSUzUNWyC1KCCBapz1zeRbrOKE9coTvXRoTTCHO%2B7kD2syfLJrtu/XkTmiuQeuShGeyavV70YrvWtm2EZjOYB7W%2B/kOse5KsfktgtrK8LwUwgp1lzTis1H9JOZ5AsGg%3D"},{"key":"shuqicjbody5","val":"wua=HIVW_vl5Vp%2BrVgu%2F5CRvBlYIsnsB7FO5IYqsJAHGVpyMXqXR9gm888cXJ7W8r39ayA2jGls%2FPUtDnmfTxHCg3R%2BLCint8as5KFZn3eO9pyj%2BYrzWVGDLLWvOrhvQME55hvJw5fTiJnPkOF4a5JCIVmNhWOtxVrxVA4XW6ViNaz7aOvwwO5mBS2iZ47SXf%2FBmXEoxJ6e2CgSmHijoFHpePhUb5tEiidH80EMjHbQgn3jawLpM%3D&ua=&userId=2131289878&umidtoken=YM1QIjrDDt8DAHtrMFRw5QJ1&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&asac=2A20C07RJ9F51AOEFSNHDR&timestamp=1624073175&activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&sqSv=1.0&sign=13cf5a9c7f4208a893a654d4ab1693bf&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.2.2%26utdid%3DYM1QIjrDDt8DAHtrMFRw5QJ1%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2131289878%26sn%3D7DD85674658472522E1CC5EA8F69E405BDDA3396%26umidtoken%3DYM1QIjrDDt8DAHtrMFRw5QJ1%26msv%3D8.0.0%26brand%3DApple%26imei%3D7EBF03E28140F5A7EAFB82202D4E9350DA9AFCE2%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad4G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D264689CC-762B-47A8-B0AD-DBDCF83823D6"},{"key":"shuqijsspbody5","val":""},{"key":"shuqijsydurl5","val":""},{"key":"shuqijsydbody5","val":""},{"key":"shuqijsqdbody5","val":""},{"key":"shuqijsqdspyurl5","val":""},{"key":"shuqijsqdspbody5","val":""},{"key":"shuqijsrwbody5","val":""},{"key":"shuqijsfxbody5","val":""},{"key":"shuqijsbookurl5","val":""},{"key":"shuqijsbookbody5","val":""},{"key":"shuqijssprwurl5","val":""},{"key":"shuqiuserurl6","val":"https://ocean.shuqireader.com/api/jaccount/accountapi/v1/sapi/account/getBindinfo?userId=2128766262&sqSv=1.0&timestamp=1624073248&sign=d6f31b529769a18e27efac97ce24f9a7&key=sq_h5_gateway"},{"key":"shuqisyurl6","val":"https://render.shuqireader.com/load/resource?sdk=13.4.1&utdid=YM1QL0zrL7MDAKbN1kl7SDUO&ustatus=0&first_placeid=111111&net_env=3g&placeid=111111&user_id=2128766262&sn=6E182D3EACC3054722C983020F6707BFA66BDCC6&umidtoken=YM1QL0zrL7MDAKbN1kl7SDUO&msv=8.0.0&brand=Apple&imei=32A08C42C31629A423CE83EABF84FCD60426B4CE&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=iOS&ver=210301&mod=iPhone8P&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=7A44706E-FEF8-47F0-A25D-1FC8F04BA606"},{"key":"shuqisybody6","val":"appVer=4.3.6.0&imei=32A08C42C31629A423CE83EABF84FCD60426B4CE&isNewUser=1&params=%7B%22resources%22%3A%7B%22ShuqiVipEntry%22%3A%7B%7D%2C%22personalCardConfig%22%3A%7B%7D%7D%7D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=ad6a164d0d32be2a83fa822f29cbf1cc&sn=6E182D3EACC3054722C983020F6707BFA66BDCC6&soft_id=21&timestamp=1624073200&user_id=2128766262&ver=210301"},{"key":"shuqispbody6","val":"_public=skinId%3D999%26idfa%3D7A44706E-FEF8-47F0-A25D-1FC8F04BA606%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26umidtoken%3DYM1QL0zrL7MDAKbN1kl7SDUO%26user_id%3D2128766262%26sn%3D6E182D3EACC3054722C983020F6707BFA66BDCC6%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D32A08C42C31629A423CE83EABF84FCD60426B4CE%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhone8P%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYM1QL0zrL7MDAKbN1kl7SDUO%26utype%3Dpre_vip%26sdk%3D13.4.1&deliveryId=525&key=sq_app_ad&miniWua=HHnB_kp1tEiN9L%2BkABBFYSjQQQa0lUstgJ3Q2JSayryBC%2BNg%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=626&sign=DBE2FE6D03C7AEECE6F7C6441A1B0C49&timestamp=1624073221&userId=2128766262&user_id=2128766262&wua=HIVW_FO7lrzioOluEp1Gy8COtt6q89g7%2BH6OhNun6noj%2BM9Z6EDnjCsloBRBD8HpbGD5gQDzf6tnBoVULXNVgX%2BvqKcYodjlYTiRavWgoadvpM/S%2B8ujybSFrDFxOuaW%2BLwiHH7y9IZKdD97xBSg1Gm2OdGX%2Bzyggssk5tvAwoQ5ZcqfbUa9zCErR6%2BEXWm9d4ESd9TfXYqkETUzBUKRafbbzL%2Bq8P7ZrOHJIhs9p2h8saqI%3D"},{"key":"shuqiscbody6","val":""},{"key":"shuqiydbody6","val":""},{"key":"shuqiqdbody6","val":"clientTimestamp=1624073211&position=501&userId=2128766262&signInType=1&wua=HIVW_XHo64L8v4%2BLnugPa8RA22tjdpYtVEIRRI6k%2FCx%2Fnv%2F%2BvU3Mi95RpgtbxTGc5%2FQNy998whr5ii1vtYxqqwq%2BV3kPvg0ALxJNwmBlTcRDbcs6RmTBkNG%2FsdRh7jj7pG2FdPGYF6Z2y4g02imOKKGpn9yVyYpMM%2Fm0mZukGaFY9kxan7sSYhn6d9FoDlcNBOQKaTmUYFH1z3GIkhnkcfIoRfAto2AswkKmh2kviutZz8O0%3D&ua=&miniWua=HHnB_vGz5OqfHJKw%2FoFoVnbclFqgg4O4mdeVQ1unpJJ3tQ9U%3D&umidtoken=YM1QL0zrL7MDAKbN1kl7SDUO&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&sign=0f4ad8ac675c0c0dfefd4f0b7b538ee5&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.4.1%26utdid%3DYM1QL0zrL7MDAKbN1kl7SDUO%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2128766262%26sn%3D6E182D3EACC3054722C983020F6707BFA66BDCC6%26umidtoken%3DYM1QL0zrL7MDAKbN1kl7SDUO%26msv%3D8.0.0%26brand%3DApple%26imei%3D32A08C42C31629A423CE83EABF84FCD60426B4CE%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone8P%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D7A44706E-FEF8-47F0-A25D-1FC8F04BA606"},{"key":"shuqirwbody6","val":"serviceWorkerOn=1&stopPullRefresh=1&from=ShuqiTab&upf=20368&sdk=13.4.1&utdid=YM1QL0zrL7MDAKbN1kl7SDUO&ustatus=0&first_placeid=111111&net_env=3g&placeid=111111&user_id=2128766262&sn=6E182D3EACC3054722C983020F6707BFA66BDCC6&umidtoken=YM1QL0zrL7MDAKbN1kl7SDUO&msv=8.0.0&brand=Apple&imei=32A08C42C31629A423CE83EABF84FCD60426B4CE&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&session=&skinColor=23B383&platform=1&ver=210301&mod=iPhone8P&statusBarHeight=44.000000&skinVersion=1&wh=1242x2688&soft_id=21&utype=pre_vip&skinId=999&idfa=7A44706E-FEF8-47F0-A25D-1FC8F04BA606&params=%7B%22resources%22%3A%7B%22ShuqiBsDailyTask%22%3A%7B%7D%7D%7D&userId=2128766262&placeId=111111&timestamp=1624073227&sqSv=1.0&sign=6034f426c4a7fee80eda682f68cde6bb&key=sq_h5_gateway&_public="},{"key":"shuqifxbody6","val":""},{"key":"shuqisprwurl6","val":"https://ocean.shuqireader.com/api/ad/adserver/v1/api/getAdInfo?appVer=4.3.6.0&placeId=111111&platform=iOS&requestSrc=h5&resourceId=626&timestamp=1624073249&user_id=2128766262&sqSv=1.0&sign=fa0d84ecc74e54978ae197b1af57c65d&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.4.1%26utdid%3DYM1QL0zrL7MDAKbN1kl7SDUO%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2128766262%26sn%3D6E182D3EACC3054722C983020F6707BFA66BDCC6%26umidtoken%3DYM1QL0zrL7MDAKbN1kl7SDUO%26msv%3D8.0.0%26brand%3DApple%26imei%3D32A08C42C31629A423CE83EABF84FCD60426B4CE%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone8P%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D7A44706E-FEF8-47F0-A25D-1FC8F04BA606"},{"key":"shuqijlbody6","val":"requestSrc=h5&userId=2128766262&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624073227&sqSv=1.0&sign=4f1070623207aef9bd68071f9b44ad52&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.4.1%26utdid%3DYM1QL0zrL7MDAKbN1kl7SDUO%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2128766262%26sn%3D6E182D3EACC3054722C983020F6707BFA66BDCC6%26umidtoken%3DYM1QL0zrL7MDAKbN1kl7SDUO%26msv%3D8.0.0%26brand%3DApple%26imei%3D32A08C42C31629A423CE83EABF84FCD60426B4CE%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone8P%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D7A44706E-FEF8-47F0-A25D-1FC8F04BA606"},{"key":"shuqisqjlbody6","val":"src=&userId=2128766262&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624073221&sqSv=1.0&sign=46edeb0c96e0da16384578bdf6b1cd16&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.4.1%26utdid%3DYM1QL0zrL7MDAKbN1kl7SDUO%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2128766262%26sn%3D6E182D3EACC3054722C983020F6707BFA66BDCC6%26umidtoken%3DYM1QL0zrL7MDAKbN1kl7SDUO%26msv%3D8.0.0%26brand%3DApple%26imei%3D32A08C42C31629A423CE83EABF84FCD60426B4CE%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone8P%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D7A44706E-FEF8-47F0-A25D-1FC8F04BA606"},{"key":"shuqicjyurl6","val":"https://ocean.shuqireader.com/api/activity/activity/v1/lottery/info?timestamp=1624073251&userId=2128766262&activityId=311&sqSv=1.0&sign=b459bef3c57415ca785b6bf11fff95c0&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.4.1%26utdid%3DYM1QL0zrL7MDAKbN1kl7SDUO%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2128766262%26sn%3D6E182D3EACC3054722C983020F6707BFA66BDCC6%26umidtoken%3DYM1QL0zrL7MDAKbN1kl7SDUO%26msv%3D8.0.0%26brand%3DApple%26imei%3D32A08C42C31629A423CE83EABF84FCD60426B4CE%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone8P%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D7A44706E-FEF8-47F0-A25D-1FC8F04BA606"},{"key":"shuqicjcsbody6","val":"_public=skinId%3D999%26idfa%3D7A44706E-FEF8-47F0-A25D-1FC8F04BA606%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26umidtoken%3DYM1QL0zrL7MDAKbN1kl7SDUO%26user_id%3D2128766262%26sn%3D6E182D3EACC3054722C983020F6707BFA66BDCC6%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D32A08C42C31629A423CE83EABF84FCD60426B4CE%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhone8P%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYM1QL0zrL7MDAKbN1kl7SDUO%26utype%3Dpre_vip%26sdk%3D13.4.1&deliveryId=711&key=sq_app_ad&miniWua=HHnB_9mRlnNW9CjNdsPQgHJfvGktPfXB7h7DokV74roFvOlw%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=703&sign=BA98A333E9F48BC144FDE17ACD634B34&timestamp=1624073233&userId=2128766262&user_id=2128766262&wua=HIVW_NuiLojSA2jPyjENwgtRH%2BO5ah8RQB0RItYXsMOViASKT17L%2B1%2BqgLT44LBMPyNpX1v3ugJQRo1kQ00tXxLF8EzcDJwqV%2BWImWLdXoz4DNFPmdDPqQqqWt3DPx8VYCqvJQvv91KQfe5BfD2FQWF8N%2BpkQ2D2BlAkXa5MbkMoWaviTIyPnYyHXvCANPDg5bi/3AvVMvGCGkUpQ3fZYWrl89%2B/I3qL1JSa51G4EN3bZGLk%3D"},{"key":"shuqicjbody6","val":"wua=HIVW_UaatTafildAwlwZ0x3NFP41jAal9fZk%2FOaPwtTG2HDkkwBuzzJOZFMlQEzPLs%2Fc46QDcJ1sXHDHP%2B9XoCbRmiroZk2%2BJ4mwb6VXzzrfuOK2b7Myfl4FE8Qqa6pxeLm7jVFBK7ODI77faBr7WTIPTvtAJ2vnNEZkM0P0%2BncH5qBfHBkxFxKRi%2BAW%2FW4f6VdH1Vu%2F2QJPGxqN8%2FSVlTkelZoOzW60IqecmCZTnnXa7Qdk%3D&ua=&userId=2128766262&umidtoken=YM1QL0zrL7MDAKbN1kl7SDUO&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&asac=2A20C07RJ9F51AOEFSNHDR&timestamp=1624073239&activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&sqSv=1.0&sign=c9d4af439b03ea472f9d4a97a5838a41&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.4.1%26utdid%3DYM1QL0zrL7MDAKbN1kl7SDUO%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2128766262%26sn%3D6E182D3EACC3054722C983020F6707BFA66BDCC6%26umidtoken%3DYM1QL0zrL7MDAKbN1kl7SDUO%26msv%3D8.0.0%26brand%3DApple%26imei%3D32A08C42C31629A423CE83EABF84FCD60426B4CE%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone8P%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D7A44706E-FEF8-47F0-A25D-1FC8F04BA606"},{"key":"shuqijsspbody6","val":""},{"key":"shuqijsydurl6","val":""},{"key":"shuqijsydbody6","val":""},{"key":"shuqijsqdbody6","val":""},{"key":"shuqijsqdspyurl6","val":""},{"key":"shuqijsqdspbody6","val":""},{"key":"shuqijsrwbody6","val":""},{"key":"shuqijsfxbody6","val":""},{"key":"shuqijsbookurl6","val":""},{"key":"shuqijsbookbody6","val":""},{"key":"shuqijssprwurl6","val":""},{"key":"shuqiuserurl7","val":"https://ocean.shuqireader.com/api/jaccount/accountapi/v1/sapi/account/getBindinfo?userId=2127868493&sqSv=1.0&timestamp=1624073323&sign=8a90be610c8067af56684c64b3c3663a&key=sq_h5_gateway"},{"key":"shuqisyurl7","val":"https://render.shuqireader.com/load/resource?sdk=13.1&utdid=YM1QOYbSA10DADHpI1a3ST38&ustatus=0&first_placeid=111111&net_env=4g&placeid=111111&user_id=2127868493&sn=DDF5B0A45A76FF4AD5EED88E2D933B53BDDA9F06&umidtoken=YM1QOYbSA10DADHpI1a3ST38&msv=8.0.0&brand=Apple&imei=8D7A169DFAC4FBE47FD215B210DDF037564844D0&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&session=&skinColor=23B383&platform=iOS&ver=210301&mod=iPhone8&statusBarHeight=44.000000&skinVersion=1&wh=1242x2688&soft_id=21&utype=pre_vip&skinId=999&idfa=E4907036-C854-43D8-AB38-E8D55E8AE874"},{"key":"shuqisybody7","val":"appVer=4.3.6.0&imei=8D7A169DFAC4FBE47FD215B210DDF037564844D0&isNewUser=1&params=%7B%22resources%22%3A%7B%22ShuqiVipEntry%22%3A%7B%7D%2C%22personalCardConfig%22%3A%7B%7D%7D%7D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=6238c5ca64c24faec069b522559d078e&sn=DDF5B0A45A76FF4AD5EED88E2D933B53BDDA9F06&soft_id=21&timestamp=1624073270&user_id=2127868493&ver=210301"},{"key":"shuqispbody7","val":"_public=skinId%3D999%26idfa%3DE4907036-C854-43D8-AB38-E8D55E8AE874%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26umidtoken%3DYM1QOYbSA10DADHpI1a3ST38%26user_id%3D2127868493%26sn%3DDDF5B0A45A76FF4AD5EED88E2D933B53BDDA9F06%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D8D7A169DFAC4FBE47FD215B210DDF037564844D0%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhone8%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYM1QOYbSA10DADHpI1a3ST38%26utype%3Dpre_vip%26sdk%3D13.1&deliveryId=525&key=sq_app_ad&miniWua=HHnB_2Bay9SYne0o9B2u5DUtq5YgiLnpneC0Mvhf7XyARn0A%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=626&sign=BA12100CA36D1F584EDC56B191C251E5&timestamp=1624073295&userId=2127868493&user_id=2127868493&wua=HIVW_caUSljBDCU4rQxE0gorr73jkGS3XjM5OVc8TKIJHR8ZP7GTBi6kkQmRQwoLpZ4sG1SM8HXxKEHgSkYTiWs8ayuGuIGhxxcy/0ttU61BZcoRjMfwxKt9HKARqHFS7KjD/OQ6Vtvgn81ZSIvEcz2OsHSMvr10gQvrq9m14m7P26pfFDWi4i2Rf9RotvKb5IetBDnNqle/9Oq4QSL7KKaVU2ZjX%2BAYnmMCaFF/4fMr11nU%3D"},{"key":"shuqiscbody7","val":""},{"key":"shuqiydbody7","val":""},{"key":"shuqiqdbody7","val":"clientTimestamp=1624073285&position=501&userId=2127868493&signInType=1&wua=HIVW_gbScsRzlFs4iiAhmrKtfV3KtqX15KXPSaeAWAETfhS%2FS1I%2FxAfqP7wBq3DkCktazlbrGnOMIww3GLUeSSi7cTOoIME92kCbBpgrV0DldPd3PNxFsAUbLk12h31vz1JfH898EXbDoh%2Fkb31dpd94yPgIE0LdBbUtxA2ZCiG6ii4o5VUkEqkjHI6TJydvu02P31Pmev0xnDB4wzwEh5RLRNJrfha4RpDBg5rI4HxtYQgc%3D&ua=&miniWua=HHnB_EMPsF6qqW0zNNkU0%2FuzK2KvnGQQ0djhjfyPNlATp3m8%3D&umidtoken=YM1QOYbSA10DADHpI1a3ST38&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&sign=8b11b4b82f91e0d60d27e89534e10c37&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26sdk%3D13.1%26utdid%3DYM1QOYbSA10DADHpI1a3ST38%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2127868493%26sn%3DDDF5B0A45A76FF4AD5EED88E2D933B53BDDA9F06%26umidtoken%3DYM1QOYbSA10DADHpI1a3ST38%26msv%3D8.0.0%26brand%3DApple%26imei%3D8D7A169DFAC4FBE47FD215B210DDF037564844D0%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone8%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DE4907036-C854-43D8-AB38-E8D55E8AE874"},{"key":"shuqirwbody7","val":"serviceWorkerOn=1&sdk=13.1&utdid=YM1QOYbSA10DADHpI1a3ST38&ustatus=0&first_placeid=111111&net_env=4g&placeid=111111&user_id=2127868493&sn=DDF5B0A45A76FF4AD5EED88E2D933B53BDDA9F06&umidtoken=YM1QOYbSA10DADHpI1a3ST38&msv=8.0.0&brand=Apple&imei=8D7A169DFAC4FBE47FD215B210DDF037564844D0&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&session=&skinColor=23B383&platform=1&ver=210301&mod=iPhone8&statusBarHeight=44.000000&skinVersion=1&wh=1242x2688&soft_id=21&utype=pre_vip&skinId=999&idfa=E4907036-C854-43D8-AB38-E8D55E8AE874&params=%7B%22resources%22%3A%7B%22ShuqiBsDailyTask%22%3A%7B%7D%7D%7D&userId=2127868493&placeId=111111&timestamp=1624073301&sqSv=1.0&sign=97c23f1f54772ed8d49ebd62f8643866&key=sq_h5_gateway&_public="},{"key":"shuqifxbody7","val":""},{"key":"shuqisprwurl7","val":"https://ocean.shuqireader.com/api/ad/adserver/v1/api/getAdInfo?appVer=4.3.6.0&placeId=111111&platform=iOS&requestSrc=h5&resourceId=626&timestamp=1624073324&user_id=2127868493&sqSv=1.0&sign=ddff46e8a51c7f16da5ab81a90ec53bd&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.1%26utdid%3DYM1QOYbSA10DADHpI1a3ST38%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2127868493%26sn%3DDDF5B0A45A76FF4AD5EED88E2D933B53BDDA9F06%26umidtoken%3DYM1QOYbSA10DADHpI1a3ST38%26msv%3D8.0.0%26brand%3DApple%26imei%3D8D7A169DFAC4FBE47FD215B210DDF037564844D0%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone8%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DE4907036-C854-43D8-AB38-E8D55E8AE874"},{"key":"shuqijlbody7","val":"requestSrc=h5&userId=2127868493&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624073301&sqSv=1.0&sign=712eaddffea14bcadeb339d7da4f6abc&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26sdk%3D13.1%26utdid%3DYM1QOYbSA10DADHpI1a3ST38%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2127868493%26sn%3DDDF5B0A45A76FF4AD5EED88E2D933B53BDDA9F06%26umidtoken%3DYM1QOYbSA10DADHpI1a3ST38%26msv%3D8.0.0%26brand%3DApple%26imei%3D8D7A169DFAC4FBE47FD215B210DDF037564844D0%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone8%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DE4907036-C854-43D8-AB38-E8D55E8AE874"},{"key":"shuqisqjlbody7","val":"src=&userId=2127868493&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624073291&sqSv=1.0&sign=1fb4ca8a9ead949e7f460a09cdf8145d&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26sdk%3D13.1%26utdid%3DYM1QOYbSA10DADHpI1a3ST38%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2127868493%26sn%3DDDF5B0A45A76FF4AD5EED88E2D933B53BDDA9F06%26umidtoken%3DYM1QOYbSA10DADHpI1a3ST38%26msv%3D8.0.0%26brand%3DApple%26imei%3D8D7A169DFAC4FBE47FD215B210DDF037564844D0%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone8%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DE4907036-C854-43D8-AB38-E8D55E8AE874"},{"key":"shuqicjyurl7","val":"https://ocean.shuqireader.com/api/activity/activity/v1/lottery/info?timestamp=1624073328&userId=2127868493&activityId=311&sqSv=1.0&sign=9f592e8433e42e539203dab9698b3fed&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.1%26utdid%3DYM1QOYbSA10DADHpI1a3ST38%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2127868493%26sn%3DDDF5B0A45A76FF4AD5EED88E2D933B53BDDA9F06%26umidtoken%3DYM1QOYbSA10DADHpI1a3ST38%26msv%3D8.0.0%26brand%3DApple%26imei%3D8D7A169DFAC4FBE47FD215B210DDF037564844D0%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone8%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DE4907036-C854-43D8-AB38-E8D55E8AE874"},{"key":"shuqicjcsbody7","val":"_public=skinId%3D999%26idfa%3DE4907036-C854-43D8-AB38-E8D55E8AE874%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26umidtoken%3DYM1QOYbSA10DADHpI1a3ST38%26user_id%3D2127868493%26sn%3DDDF5B0A45A76FF4AD5EED88E2D933B53BDDA9F06%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D8D7A169DFAC4FBE47FD215B210DDF037564844D0%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhone8%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYM1QOYbSA10DADHpI1a3ST38%26utype%3Dpre_vip%26sdk%3D13.1&deliveryId=711&key=sq_app_ad&miniWua=HHnB_hPAr7K1xY1uqi7VDk3Wws4Jg5gssWu5LbYAowqLkPiA%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=703&sign=46C1CD2FCAAB19763C0CF88EA15DA0A9&timestamp=1624073307&userId=2127868493&user_id=2127868493&wua=HIVW_KTNZ63DTOqjkGeOZ3Yx9p1zOuAv2Eee257U1uxFPWwbZyzo4qlnlPWDoT0a2eUxIEMgOCumN5FpsNZEV3oGE0XgkzikTHWi27DhhvMc3Ug6rMBoMzdEy3Ci/oWH6vB0TW8p4f2JTTFsHcwyIjZrIoRnZXtewehfxF3CI8lkrojN6Ssj2V2DrSPXbTmB5m2jZzey7QuwwtJVTaE8yN%2B%2BPT6bi%2B%2BY0hfDJdEUgFIdEX/g%3D"},{"key":"shuqicjbody7","val":"wua=HIVW_T0znP%2Buq0o9l6jQh275cUA%2Fdi5w9xWODUjd7%2Byo2J4y1zyFMuRTKHkdr2YPLYv%2F9vW5NMTrUB3dP%2FPcrEbZOl9CjaDFit2tn1IWHocXNv0nUKa2IKdYUSQdsV6POY7iOqd029orej0gdlVfEcMsfGCxt7AgMtVpPK2LzfUsR6X2t4AeNDWLw5T5megv%2F5FH74lIUCxNBaOOgKBh0zirS0T3Ld5z66T4VfqNQCRr3WoE%3D&ua=&userId=2127868493&umidtoken=YM1QOYbSA10DADHpI1a3ST38&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&asac=2A20C07RJ9F51AOEFSNHDR&timestamp=1624073313&activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&sqSv=1.0&sign=d9061bc7358c731d9dcedba5f0000945&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.1%26utdid%3DYM1QOYbSA10DADHpI1a3ST38%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2127868493%26sn%3DDDF5B0A45A76FF4AD5EED88E2D933B53BDDA9F06%26umidtoken%3DYM1QOYbSA10DADHpI1a3ST38%26msv%3D8.0.0%26brand%3DApple%26imei%3D8D7A169DFAC4FBE47FD215B210DDF037564844D0%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone8%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DE4907036-C854-43D8-AB38-E8D55E8AE874"},{"key":"shuqijsspbody7","val":""},{"key":"shuqijsydurl7","val":""},{"key":"shuqijsydbody7","val":""},{"key":"shuqijsqdbody7","val":""},{"key":"shuqijsqdspyurl7","val":""},{"key":"shuqijsqdspbody7","val":""},{"key":"shuqijsrwbody7","val":""},{"key":"shuqijsfxbody7","val":""},{"key":"shuqijsbookurl7","val":""},{"key":"shuqijsbookbody7","val":""},{"key":"shuqijssprwurl7","val":""},{"key":"shuqiuserurl8","val":"https://ocean.shuqireader.com/api/jaccount/accountapi/v1/sapi/account/getBindinfo?userId=2130062610&sqSv=1.0&timestamp=1624073397&sign=270353501c87390a2d17d3a32bf47b21&key=sq_h5_gateway"},{"key":"shuqisyurl8","val":"https://render.shuqireader.com/load/resource?sdk=13.4.1&utdid=YM1QUOT%2FMdsDAO6Ct8TVzJhn&ustatus=0&first_placeid=111111&net_env=4g&placeid=111111&user_id=2130062610&sn=4728B6A018564B6B83B4927F93886A4EB54400D5&umidtoken=YM1QUOT%2FMdsDAO6Ct8TVzJhn&msv=8.0.0&brand=Apple&imei=47C5DBFA8BC7CB799128B96AA97A8EA997BF7F42&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=iOS&ver=210301&mod=iPad2G&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=51792EFE-45C4-49B6-8C97-8077FB27EDD7"},{"key":"shuqisybody8","val":"appVer=4.3.6.0&imei=47C5DBFA8BC7CB799128B96AA97A8EA997BF7F42&isNewUser=1&params=%7B%22resources%22%3A%7B%22ShuqiVipEntry%22%3A%7B%7D%2C%22personalCardConfig%22%3A%7B%7D%7D%7D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=779bf1c16aca093672901dac8f97083c&sn=4728B6A018564B6B83B4927F93886A4EB54400D5&soft_id=21&timestamp=1624073438&user_id=2130062610&ver=210301"},{"key":"shuqispbody8","val":"_public=utype%3Dpre_vip%26idfa%3D51792EFE-45C4-49B6-8C97-8077FB27EDD7%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26umidtoken%3DYM1QUOT/MdsDAO6Ct8TVzJhn%26user_id%3D2130062610%26sn%3D4728B6A018564B6B83B4927F93886A4EB54400D5%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D47C5DBFA8BC7CB799128B96AA97A8EA997BF7F42%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPad2G%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26utdid%3DYM1QUOT/MdsDAO6Ct8TVzJhn%26soft_id%3D21%26sdk%3D13.4.1&deliveryId=525&key=sq_app_ad&miniWua=HHnB_/MvoZJg847Pp3Qps/zQeBcAcuxogR0%2BrmIiqZ6tDwYo%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=626&sign=6BA94915967E997B6690B6AACE331C6E&timestamp=1624073369&userId=2130062610&user_id=2130062610&wua=HIVW_RMTXCkvQ%2BSLl0hShw1qjQ/Kw4QRB2nZkhFk6gRE72UEvYye/f0rPvIw%2BunQ2nxEqcgEjuP5Kdw9%2B0v58Dlp3kpcQtgIv8nitBH4%2BR73/NPU8DFdymWbRYBSUJwvp0JCZXXrJpJGqDWfmKUvrOPiprKwsCjZY%2BZZ5GKUoJxbakdcIax5id/Sn1wWx7TqzhO5akf9TPAOKfGeRtTcX7EdZHVSp684Jn5Ji5l7x6ki9%2BaE%3D"},{"key":"shuqiscbody8","val":""},{"key":"shuqiydbody8","val":""},{"key":"shuqiqdbody8","val":"clientTimestamp=1624073359&position=501&userId=2130062610&signInType=1&wua=HIVW_iLtx1fShVVUezwVbttdvNBHNwmhz3zCl7P9TYrYVCm38leM7j0eZQiX0Ujd%2BL5m9WcOdZScnyLN7dO5Cnqtn6T3Q5oDKlLX6538BH286kcRqAAMG5hXn3sHrT84vwJ5IGQBhDRzTQILMHZN%2BZfBea85dW37vw%2FFgT0c2xM07xXLGTqzNe%2BR%2BA9AaBALKOJQCRlwDmGMJsekNZN4Juy%2BUmrSoR5qHZW8KmONrwlK1z1Q%3D&ua=&miniWua=HHnB_MK78jw5eSlDEoUUAevqjK5NAE%2FEDjqORYU4ECpS9s0M%3D&umidtoken=YM1QUOT%2FMdsDAO6Ct8TVzJhn&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&sign=a6248493a57667122095e5c7ac8749d0&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.4.1%26utdid%3DYM1QUOT%252FMdsDAO6Ct8TVzJhn%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2130062610%26sn%3D4728B6A018564B6B83B4927F93886A4EB54400D5%26umidtoken%3DYM1QUOT%252FMdsDAO6Ct8TVzJhn%26msv%3D8.0.0%26brand%3DApple%26imei%3D47C5DBFA8BC7CB799128B96AA97A8EA997BF7F42%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad2G%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D51792EFE-45C4-49B6-8C97-8077FB27EDD7"},{"key":"shuqirwbody8","val":"serviceWorkerOn=1&stopPullRefresh=1&from=ShuqiTab&upf=20368&sdk=13.4.1&utdid=YM1QUOT%2FMdsDAO6Ct8TVzJhn&ustatus=0&first_placeid=111111&net_env=4g&placeid=111111&user_id=2130062610&sn=4728B6A018564B6B83B4927F93886A4EB54400D5&umidtoken=YM1QUOT%2FMdsDAO6Ct8TVzJhn&msv=8.0.0&brand=Apple&imei=47C5DBFA8BC7CB799128B96AA97A8EA997BF7F42&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=1&ver=210301&mod=iPad2G&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=51792EFE-45C4-49B6-8C97-8077FB27EDD7&params=%7B%22resources%22%3A%7B%22ShuqiBsDailyTask%22%3A%7B%7D%7D%7D&userId=2130062610&placeId=111111&timestamp=1624073372&sqSv=1.0&sign=94f8e24d4fb6fa7f4d10bf70c08a6053&key=sq_h5_gateway&_public="},{"key":"shuqifxbody8","val":""},{"key":"shuqisprwurl8","val":"https://ocean.shuqireader.com/api/ad/adserver/v1/api/getAdInfo?appVer=4.3.6.0&placeId=111111&platform=iOS&requestSrc=h5&resourceId=626&timestamp=1624073398&user_id=2130062610&sqSv=1.0&sign=e0ad4f5fba7f2982f3ea1301d905326a&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.4.1%26utdid%3DYM1QUOT%252FMdsDAO6Ct8TVzJhn%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2130062610%26sn%3D4728B6A018564B6B83B4927F93886A4EB54400D5%26umidtoken%3DYM1QUOT%252FMdsDAO6Ct8TVzJhn%26msv%3D8.0.0%26brand%3DApple%26imei%3D47C5DBFA8BC7CB799128B96AA97A8EA997BF7F42%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad2G%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D51792EFE-45C4-49B6-8C97-8077FB27EDD7"},{"key":"shuqijlbody8","val":"requestSrc=h5&userId=2130062610&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624073372&sqSv=1.0&sign=0b8f15970dedba773d35e56af311f360&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.4.1%26utdid%3DYM1QUOT%252FMdsDAO6Ct8TVzJhn%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2130062610%26sn%3D4728B6A018564B6B83B4927F93886A4EB54400D5%26umidtoken%3DYM1QUOT%252FMdsDAO6Ct8TVzJhn%26msv%3D8.0.0%26brand%3DApple%26imei%3D47C5DBFA8BC7CB799128B96AA97A8EA997BF7F42%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad2G%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D51792EFE-45C4-49B6-8C97-8077FB27EDD7"},{"key":"shuqisqjlbody8","val":"src=&userId=2130062610&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624073365&sqSv=1.0&sign=aa17e39c1f2a940010762464166ab110&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.4.1%26utdid%3DYM1QUOT%252FMdsDAO6Ct8TVzJhn%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2130062610%26sn%3D4728B6A018564B6B83B4927F93886A4EB54400D5%26umidtoken%3DYM1QUOT%252FMdsDAO6Ct8TVzJhn%26msv%3D8.0.0%26brand%3DApple%26imei%3D47C5DBFA8BC7CB799128B96AA97A8EA997BF7F42%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad2G%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D51792EFE-45C4-49B6-8C97-8077FB27EDD7"},{"key":"shuqicjyurl8","val":"https://ocean.shuqireader.com/api/activity/activity/v1/lottery/info?timestamp=1624073401&userId=2130062610&activityId=311&sqSv=1.0&sign=73eb1f77db0c03579c11ca33f45048fc&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.4.1%26utdid%3DYM1QUOT%252FMdsDAO6Ct8TVzJhn%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2130062610%26sn%3D4728B6A018564B6B83B4927F93886A4EB54400D5%26umidtoken%3DYM1QUOT%252FMdsDAO6Ct8TVzJhn%26msv%3D8.0.0%26brand%3DApple%26imei%3D47C5DBFA8BC7CB799128B96AA97A8EA997BF7F42%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad2G%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D51792EFE-45C4-49B6-8C97-8077FB27EDD7"},{"key":"shuqicjcsbody8","val":"_public=utype%3Dpre_vip%26idfa%3D51792EFE-45C4-49B6-8C97-8077FB27EDD7%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26umidtoken%3DYM1QUOT/MdsDAO6Ct8TVzJhn%26user_id%3D2130062610%26sn%3D4728B6A018564B6B83B4927F93886A4EB54400D5%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D47C5DBFA8BC7CB799128B96AA97A8EA997BF7F42%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPad2G%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26utdid%3DYM1QUOT/MdsDAO6Ct8TVzJhn%26soft_id%3D21%26sdk%3D13.4.1&deliveryId=711&key=sq_app_ad&miniWua=HHnB_xQtJ7dzy8KiQuNHIUGFEAKg%2BC8xnyFCXi4l/vKlKYzE%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=703&sign=627BDFC69115E10B84A1F05B1A7A69AF&timestamp=1624073382&userId=2130062610&user_id=2130062610&wua=HIVW_mkW3T0gReVqf27sDCLIMrPdxCzBI4IldWcSEGKIPJHP7Hwp48hmWKlmFqj7/ZX5tBdiAiwggTZkXBn2F6iJYsj/2cf70cZUkG5df1az1LjhlAdBCnFJ0pUJsWdNIPVk5AaXz3TdCx4aI3cvOxazFwxqMI0DE6AIQRbOVoUkMzYeoHSglhgm798oMRSabGvmIrtqDErKD1RK4aogeAvAxjbLC92lJ6FADYg0Sby6Xn24%3D"},{"key":"shuqicjbody8","val":"wua=HIVW_DAdx12%2FLk54NMb5h0eeE1o%2Buj17bpFOeESgSK0PRA8lKN2BNZjpEj42wk6%2BldlKZNkXMh0%2BjBnPizpzpya%2F3OlQlrWMtPV2NFBSA%2F6hjLldKVU0pcJpRTQc9o4ridyvCTqSh97KZLSQBhR7ePSDTJCYuEtMlBTJCmFPcbyK1BgcbYEyYB5dAHee78W1S%2FQg3OU%2BAxslhv2apkEl51NOSd8d5hTvGb60GIhoOTefA0EI%3D&ua=&userId=2130062610&umidtoken=YM1QUOT%2FMdsDAO6Ct8TVzJhn&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&asac=2A20C07RJ9F51AOEFSNHDR&timestamp=1624073387&activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&sqSv=1.0&sign=2aea7eb3a78fdccb57def728b65f60d0&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.4.1%26utdid%3DYM1QUOT%252FMdsDAO6Ct8TVzJhn%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2130062610%26sn%3D4728B6A018564B6B83B4927F93886A4EB54400D5%26umidtoken%3DYM1QUOT%252FMdsDAO6Ct8TVzJhn%26msv%3D8.0.0%26brand%3DApple%26imei%3D47C5DBFA8BC7CB799128B96AA97A8EA997BF7F42%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad2G%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D51792EFE-45C4-49B6-8C97-8077FB27EDD7"},{"key":"shuqijsspbody8","val":""},{"key":"shuqijsydurl8","val":""},{"key":"shuqijsydbody8","val":""},{"key":"shuqijsqdbody8","val":""},{"key":"shuqijsqdspyurl8","val":""},{"key":"shuqijsqdspbody8","val":""},{"key":"shuqijsrwbody8","val":""},{"key":"shuqijsfxbody8","val":""},{"key":"shuqijsbookurl8","val":""},{"key":"shuqijsbookbody8","val":""},{"key":"shuqijssprwurl8","val":""},{"key":"shuqiuserurl9","val":"https://ocean.shuqireader.com/api/jaccount/accountapi/v1/sapi/account/getBindinfo?userId=2129464351&sqSv=1.0&timestamp=1624073523&sign=abc5e14398d370527ee70e3a34acfd8f&key=sq_h5_gateway"},{"key":"shuqisyurl9","val":"https://render.shuqireader.com/load/resource?sdk=13.2.3&utdid=YM1QWxvF9aYDALaFTQRJhIP3&ustatus=0&first_placeid=111111&net_env=4g&placeid=111111&user_id=2129464351&sn=38D44FA8DA14591A5B814E76564A7BA7D5DAD82C&umidtoken=YM1QWxvF9aYDALaFTQRJhIP3&msv=8.0.0&brand=Apple&imei=D581129594F5761CB5A42E5C90F3B0CDBA82B71C&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=iOS&ver=210301&mod=iPhoneXMAX&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=C42D9BC4-C717-4F2F-A399-7EA234B10C51"},{"key":"shuqisybody9","val":"appVer=4.3.6.0&imei=D581129594F5761CB5A42E5C90F3B0CDBA82B71C&isNewUser=1&params=%7B%22resources%22%3A%7B%22ShuqiVipEntry%22%3A%7B%7D%2C%22personalCardConfig%22%3A%7B%7D%7D%7D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=e4b5456c040ff769d87211c0f76b8975&sn=38D44FA8DA14591A5B814E76564A7BA7D5DAD82C&soft_id=21&timestamp=1624073451&user_id=2129464351&ver=210301"},{"key":"shuqispbody9","val":"_public=skinId%3D999%26idfa%3DC42D9BC4-C717-4F2F-A399-7EA234B10C51%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26umidtoken%3DYM1QWxvF9aYDALaFTQRJhIP3%26user_id%3D2129464351%26sn%3D38D44FA8DA14591A5B814E76564A7BA7D5DAD82C%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3DD581129594F5761CB5A42E5C90F3B0CDBA82B71C%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhoneXMAX%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYM1QWxvF9aYDALaFTQRJhIP3%26utype%3Dpre_vip%26sdk%3D13.2.3&deliveryId=525&key=sq_app_ad&miniWua=HHnB_NcGIDqWX2CmnS0MqvYjDh/BtQCcmdlgGqcfqMO7qIWs%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=626&sign=711598DF349DF3F3B17CE6BAC8575627&timestamp=1624073483&userId=2129464351&user_id=2129464351&wua=HIVW_1r%2BQkfdEAFIRzWYyRoH4a3FNqHvEtJ9YsfMYmCZ35D7DfrWgwVrCWLDxaVByUbgYNV%2Bo4fotLfbsKplMiuDmn88%2ByV7pI%2BYWgYQo6r5wiXNv04YJq1a%2B4OrDaqdauSJg5kqrY3ffSptPMPMpEYtGyKsM0PNFZ3VbMWVc7mp8jptwi5oPdrbcC3RD49WUtmxllpsfdVc26Btfqc1OSJnCVdkbJgaYDGTsbOYYV7Gv0XA%3D"},{"key":"shuqiscbody9","val":""},{"key":"shuqiydbody9","val":""},{"key":"shuqiqdbody9","val":"clientTimestamp=1624073473&position=501&userId=2129464351&signInType=1&wua=HIVW_gNDGe4FFb9qR2QyuVLuoqMjBaNXyzAXH55wTwgzn%2F%2BlBKJxziJ59ynXuPlIGoN89JcpeWJrsZwvauo2VEFQiV5uyKSx9Cu%2FXtCDgBq1CY5%2Bb08g6mhKDuv18G6cdZGftQImrqQWjFANPKjq6UnuIaDznFX%2BUNYbIEpyQDyLlAjhQ7UrRdZVTL0ZnU%2BifyqMxpWWLCt%2B8krYotP6p13tER6ls%2Baokdr3h5TV23IvYeco%3D&ua=&miniWua=HHnB_WegIsmKKq1RD9UIIZRuklldavHxN15K2UpP5tFVbchY%3D&umidtoken=YM1QWxvF9aYDALaFTQRJhIP3&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&sign=924ec74ab2d2a8736f08d85592531eb6&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.2.3%26utdid%3DYM1QWxvF9aYDALaFTQRJhIP3%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2129464351%26sn%3D38D44FA8DA14591A5B814E76564A7BA7D5DAD82C%26umidtoken%3DYM1QWxvF9aYDALaFTQRJhIP3%26msv%3D8.0.0%26brand%3DApple%26imei%3DD581129594F5761CB5A42E5C90F3B0CDBA82B71C%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhoneXMAX%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DC42D9BC4-C717-4F2F-A399-7EA234B10C51"},{"key":"shuqirwbody9","val":"serviceWorkerOn=1&stopPullRefresh=1&from=ShuqiTab&upf=20368&sdk=13.2.3&utdid=YM1QWxvF9aYDALaFTQRJhIP3&ustatus=0&first_placeid=111111&net_env=4g&placeid=111111&user_id=2129464351&sn=38D44FA8DA14591A5B814E76564A7BA7D5DAD82C&umidtoken=YM1QWxvF9aYDALaFTQRJhIP3&msv=8.0.0&brand=Apple&imei=D581129594F5761CB5A42E5C90F3B0CDBA82B71C&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&session=&skinColor=23B383&platform=1&ver=210301&mod=iPhoneXMAX&statusBarHeight=44.000000&skinVersion=1&wh=1242x2688&soft_id=21&utype=pre_vip&skinId=999&idfa=C42D9BC4-C717-4F2F-A399-7EA234B10C51&params=%7B%22resources%22%3A%7B%22ShuqiBsDailyTask%22%3A%7B%7D%7D%7D&userId=2129464351&placeId=111111&timestamp=1624073489&sqSv=1.0&sign=2fb17968645a5ceaaa2eb39b37b38c95&key=sq_h5_gateway&_public="},{"key":"shuqifxbody9","val":""},{"key":"shuqisprwurl9","val":"https://ocean.shuqireader.com/api/ad/adserver/v1/api/getAdInfo?appVer=4.3.6.0&placeId=111111&platform=iOS&requestSrc=h5&resourceId=626&timestamp=1624073520&user_id=2129464351&sqSv=1.0&sign=e1ba80107c70d092a705779e01644438&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.2.3%26utdid%3DYM1QWxvF9aYDALaFTQRJhIP3%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2129464351%26sn%3D38D44FA8DA14591A5B814E76564A7BA7D5DAD82C%26umidtoken%3DYM1QWxvF9aYDALaFTQRJhIP3%26msv%3D8.0.0%26brand%3DApple%26imei%3DD581129594F5761CB5A42E5C90F3B0CDBA82B71C%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhoneXMAX%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DC42D9BC4-C717-4F2F-A399-7EA234B10C51"},{"key":"shuqijlbody9","val":"requestSrc=h5&userId=2129464351&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624073489&sqSv=1.0&sign=4f7763ba49098c876cfd8f78919e9515&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.2.3%26utdid%3DYM1QWxvF9aYDALaFTQRJhIP3%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2129464351%26sn%3D38D44FA8DA14591A5B814E76564A7BA7D5DAD82C%26umidtoken%3DYM1QWxvF9aYDALaFTQRJhIP3%26msv%3D8.0.0%26brand%3DApple%26imei%3DD581129594F5761CB5A42E5C90F3B0CDBA82B71C%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhoneXMAX%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DC42D9BC4-C717-4F2F-A399-7EA234B10C51"},{"key":"shuqisqjlbody9","val":"src=&userId=2129464351&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624073478&sqSv=1.0&sign=375cb6270b7556936bdd61ce4cf70957&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.2.3%26utdid%3DYM1QWxvF9aYDALaFTQRJhIP3%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2129464351%26sn%3D38D44FA8DA14591A5B814E76564A7BA7D5DAD82C%26umidtoken%3DYM1QWxvF9aYDALaFTQRJhIP3%26msv%3D8.0.0%26brand%3DApple%26imei%3DD581129594F5761CB5A42E5C90F3B0CDBA82B71C%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhoneXMAX%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DC42D9BC4-C717-4F2F-A399-7EA234B10C51"},{"key":"shuqicjyurl9","val":"https://ocean.shuqireader.com/api/activity/activity/v1/lottery/info?timestamp=1624073524&userId=2129464351&activityId=311&sqSv=1.0&sign=f9bd0afac3490d4efaefbdbcc974ea73&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.2.3%26utdid%3DYM1QWxvF9aYDALaFTQRJhIP3%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2129464351%26sn%3D38D44FA8DA14591A5B814E76564A7BA7D5DAD82C%26umidtoken%3DYM1QWxvF9aYDALaFTQRJhIP3%26msv%3D8.0.0%26brand%3DApple%26imei%3DD581129594F5761CB5A42E5C90F3B0CDBA82B71C%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhoneXMAX%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DC42D9BC4-C717-4F2F-A399-7EA234B10C51"},{"key":"shuqicjcsbody9","val":"_public=skinId%3D999%26idfa%3DC42D9BC4-C717-4F2F-A399-7EA234B10C51%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26umidtoken%3DYM1QWxvF9aYDALaFTQRJhIP3%26user_id%3D2129464351%26sn%3D38D44FA8DA14591A5B814E76564A7BA7D5DAD82C%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3DD581129594F5761CB5A42E5C90F3B0CDBA82B71C%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhoneXMAX%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYM1QWxvF9aYDALaFTQRJhIP3%26utype%3Dpre_vip%26sdk%3D13.2.3&deliveryId=711&key=sq_app_ad&miniWua=HHnB_qtYZaXWDWypZ/jAWpQ/HpVqFmURN%2BjRugNpRAS9UVSk%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=703&sign=C4326F9738ECE42B8483977BCBD032AA&timestamp=1624073495&userId=2129464351&user_id=2129464351&wua=HIVW_g%2BFMRdRM%2Bq75nztJg59p45a%2BwJNWU2N4U78y2HPaVTUeiz0IJEbbjwnBUTCZQVBoJKDcOU1WQ46xgy6lbd3XAB6amNIEuAAN3wRKPeB/Gca2gyK5ZjjFZTtOpEFAQkplzfZx7ReLmGGt0UsRdLAgNm0e8JxUdgnm/ZWhpsAVcjhAgiyzhdYw1bdolLALKHldtGxMujI3TGdKpnJ4MNXHoUzf0fZiOCj5sowlGHYhQMk%3D"},{"key":"shuqicjbody9","val":"wua=HIVW_OPCpRlcchz5dJLNvRXH4yS7Pdl14kI3UdkuRHo3dNWCTFB%2B%2FIgnBnISajtlMo6qehSD5LG3P9Cg8sYxH4oT8zea%2B9%2F5edeh%2FKGjert7LL3EZB7GW5Qj1lHaz83CN%2B4BBi0QhU%2B6WBMeDzeg0tzdHbxC51ej2yQqrqkZMmO8f47dnnU7ty70HIkey3LCaOiVXCi0vLZZ2jSgxk6PAHDzESAt73M7bq%2FQpI4juzwLPcDU%3D&ua=&userId=2129464351&umidtoken=YM1QWxvF9aYDALaFTQRJhIP3&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&asac=2A20C07RJ9F51AOEFSNHDR&timestamp=1624073501&activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&sqSv=1.0&sign=a5db75762128757e2638e90d2484ce89&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.2.3%26utdid%3DYM1QWxvF9aYDALaFTQRJhIP3%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2129464351%26sn%3D38D44FA8DA14591A5B814E76564A7BA7D5DAD82C%26umidtoken%3DYM1QWxvF9aYDALaFTQRJhIP3%26msv%3D8.0.0%26brand%3DApple%26imei%3DD581129594F5761CB5A42E5C90F3B0CDBA82B71C%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhoneXMAX%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DC42D9BC4-C717-4F2F-A399-7EA234B10C51"},{"key":"shuqijsspbody9","val":""},{"key":"shuqijsydurl9","val":""},{"key":"shuqijsydbody9","val":""},{"key":"shuqijsqdbody9","val":""},{"key":"shuqijsqdspyurl9","val":""},{"key":"shuqijsqdspbody9","val":""},{"key":"shuqijsrwbody9","val":""},{"key":"shuqijsfxbody9","val":""},{"key":"shuqijsbookurl9","val":""},{"key":"shuqijsbookbody9","val":""},{"key":"shuqijssprwurl9","val":""},{"key":"shuqiuserurl10","val":"https://ocean.shuqireader.com/api/jaccount/accountapi/v1/sapi/account/getBindinfo?userId=2131786826&sqSv=1.0&timestamp=1624073633&sign=dd4fd89cb0fd0ee6149e90819f5fb143&key=sq_h5_gateway"},{"key":"shuqisyurl10","val":"https://render.shuqireader.com/load/resource?sdk=13.3.1&utdid=YM1lR4VRGAoDAM%2FH2%2Bjtvf5I&ustatus=0&first_placeid=111111&net_env=3g&placeid=111111&user_id=2131786826&sn=DE2CCE120D96EB7D57B56FE962FA56FCDF5180CC&umidtoken=YM1lR4VRGAoDAM%2FH2%2Bjtvf5I&msv=8.0.0&brand=Apple&imei=874C7CBF995B097D928EDE92A95DE4292FD7F369&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=iOS&ver=210301&mod=iPhoneSE&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=1C13B85E-5BCF-479D-9549-9719DC9F26B6"},{"key":"shuqisybody10","val":"appVer=4.3.6.0&imei=874C7CBF995B097D928EDE92A95DE4292FD7F369&isNewUser=1&params=%7B%22resources%22%3A%7B%22ShuqiVipEntry%22%3A%7B%7D%2C%22personalCardConfig%22%3A%7B%7D%7D%7D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=726c7fed65c0ef2a1397ed17a3770c5e&sn=DE2CCE120D96EB7D57B56FE962FA56FCDF5180CC&soft_id=21&timestamp=1624073545&user_id=2131786826&ver=210301"},{"key":"shuqispbody10","val":"_public=skinId%3D999%26idfa%3D1C13B85E-5BCF-479D-9549-9719DC9F26B6%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26umidtoken%3DYM1lR4VRGAoDAM/H2%2Bjtvf5I%26user_id%3D2131786826%26sn%3DDE2CCE120D96EB7D57B56FE962FA56FCDF5180CC%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D874C7CBF995B097D928EDE92A95DE4292FD7F369%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhoneSE%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYM1lR4VRGAoDAM/H2%2Bjtvf5I%26utype%3Dpre_vip%26sdk%3D13.3.1&deliveryId=525&key=sq_app_ad&miniWua=HHnB_gMaaoJmQ5joP2h/4F5apoaBLRcWN6RDbj2Ytqmy3M1o%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=626&sign=32AE9C1BA7E755D3CACB123C4BD6E113&timestamp=1624073592&userId=2131786826&user_id=2131786826&wua=HIVW_ZFllFZLLtxIc2wvpclNRhQDKkY1Q8Zl15Tk%2B%2Bg19gyj9H7/AHcF7IDLv0ykgJKGE/nF57j6%2Bz7d/%2BRC1I%2Ba2rrShtbPD1Yw4mEfYnGLytwkU5/YpJ1UBO9M81yvOq/5BtXxceDSI2QHDTM47xXArtA5%2BxxqHdTyZK74Ps%2B6urvCVs6y0vIf%2BGwobZ9QGKHvcB1qTBsonQ5P8vglAp8tU2ZtKec21Pqre3fHI0T2%2BqS0%3D"},{"key":"shuqiscbody10","val":""},{"key":"shuqiydbody10","val":""},{"key":"shuqiqdbody10","val":"clientTimestamp=1624073568&position=501&userId=2131786826&signInType=1&wua=HIVW_RJqipSRfHoY4PnotxJzvKJoffgCvKcBaQByHtv38F7OHabBkqRPg2HQ8I94iIUQXzZY5Ma623yvgV4KNiRIXcyURtKD7%2BBWTDB2OSkLnnLjrjyOz9qt%2FA04ENcbH17B465MH8a2Ca2Pbv2JyX48aIL5h2V7dcKagWUmRApdwfHLPewKuV6UVqAXhDzlSAHl4xIdH6tZ3Nbv3hrxr2gVXf31x5tTaj73foe%2FYQSz%2Faag%3D&ua=&miniWua=HHnB_4537OP6I%2FhW10NZPaxtqGtYuT52iDm6m%2F8sv5D72w9U%3D&umidtoken=YM1lR4VRGAoDAM%2FH2%2Bjtvf5I&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&sign=d4fa8b0d2623defdfc1007591a13886f&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.3.1%26utdid%3DYM1lR4VRGAoDAM%252FH2%252Bjtvf5I%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2131786826%26sn%3DDE2CCE120D96EB7D57B56FE962FA56FCDF5180CC%26umidtoken%3DYM1lR4VRGAoDAM%252FH2%252Bjtvf5I%26msv%3D8.0.0%26brand%3DApple%26imei%3D874C7CBF995B097D928EDE92A95DE4292FD7F369%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhoneSE%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D1C13B85E-5BCF-479D-9549-9719DC9F26B6"},{"key":"shuqirwbody10","val":"serviceWorkerOn=1&stopPullRefresh=1&from=ShuqiTab&upf=20368&sdk=13.3.1&utdid=YM1lR4VRGAoDAM%2FH2%2Bjtvf5I&ustatus=0&first_placeid=111111&net_env=3g&placeid=111111&user_id=2131786826&sn=DE2CCE120D96EB7D57B56FE962FA56FCDF5180CC&umidtoken=YM1lR4VRGAoDAM%2FH2%2Bjtvf5I&msv=8.0.0&brand=Apple&imei=874C7CBF995B097D928EDE92A95DE4292FD7F369&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&session=&skinColor=23B383&platform=1&ver=210301&mod=iPhoneSE&statusBarHeight=44.000000&skinVersion=1&wh=1242x2688&soft_id=21&utype=pre_vip&skinId=999&idfa=1C13B85E-5BCF-479D-9549-9719DC9F26B6&params=%7B%22resources%22%3A%7B%22ShuqiBsDailyTask%22%3A%7B%7D%7D%7D&userId=2131786826&placeId=111111&timestamp=1624073605&sqSv=1.0&sign=9e36cc693c49c69989501fddc66eecbd&key=sq_h5_gateway&_public="},{"key":"shuqifxbody10","val":""},{"key":"shuqisprwurl10","val":"https://ocean.shuqireader.com/api/ad/adserver/v1/api/getAdInfo?appVer=4.3.6.0&placeId=111111&platform=iOS&requestSrc=h5&resourceId=626&timestamp=1624073633&user_id=2131786826&sqSv=1.0&sign=2f7cecbfd5f90ab339cf5ccd76d8d8ea&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26sdk%3D13.3.1%26utdid%3DYM1lR4VRGAoDAM%252FH2%252Bjtvf5I%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2131786826%26sn%3DDE2CCE120D96EB7D57B56FE962FA56FCDF5180CC%26umidtoken%3DYM1lR4VRGAoDAM%252FH2%252Bjtvf5I%26msv%3D8.0.0%26brand%3DApple%26imei%3D874C7CBF995B097D928EDE92A95DE4292FD7F369%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhoneSE%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D1C13B85E-5BCF-479D-9549-9719DC9F26B6"},{"key":"shuqijlbody10","val":"requestSrc=h5&userId=2131786826&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624073605&sqSv=1.0&sign=b5f212e000117a6dd7c4e15675da15ef&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.3.1%26utdid%3DYM1lR4VRGAoDAM%252FH2%252Bjtvf5I%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2131786826%26sn%3DDE2CCE120D96EB7D57B56FE962FA56FCDF5180CC%26umidtoken%3DYM1lR4VRGAoDAM%252FH2%252Bjtvf5I%26msv%3D8.0.0%26brand%3DApple%26imei%3D874C7CBF995B097D928EDE92A95DE4292FD7F369%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhoneSE%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D1C13B85E-5BCF-479D-9549-9719DC9F26B6"},{"key":"shuqisqjlbody10","val":"src=&userId=2131786826&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624073573&sqSv=1.0&sign=875d3618db538b519d0445ae78dfccf8&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.3.1%26utdid%3DYM1lR4VRGAoDAM%252FH2%252Bjtvf5I%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2131786826%26sn%3DDE2CCE120D96EB7D57B56FE962FA56FCDF5180CC%26umidtoken%3DYM1lR4VRGAoDAM%252FH2%252Bjtvf5I%26msv%3D8.0.0%26brand%3DApple%26imei%3D874C7CBF995B097D928EDE92A95DE4292FD7F369%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhoneSE%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D1C13B85E-5BCF-479D-9549-9719DC9F26B6"},{"key":"shuqicjyurl10","val":"https://ocean.shuqireader.com/api/activity/activity/v1/lottery/info?timestamp=1624073636&userId=2131786826&activityId=311&sqSv=1.0&sign=9a24666fda51b002a488238dc7802d2b&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.3.1%26utdid%3DYM1lR4VRGAoDAM%252FH2%252Bjtvf5I%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2131786826%26sn%3DDE2CCE120D96EB7D57B56FE962FA56FCDF5180CC%26umidtoken%3DYM1lR4VRGAoDAM%252FH2%252Bjtvf5I%26msv%3D8.0.0%26brand%3DApple%26imei%3D874C7CBF995B097D928EDE92A95DE4292FD7F369%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhoneSE%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D1C13B85E-5BCF-479D-9549-9719DC9F26B6"},{"key":"shuqicjcsbody10","val":"_public=skinId%3D999%26idfa%3D1C13B85E-5BCF-479D-9549-9719DC9F26B6%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26umidtoken%3DYM1lR4VRGAoDAM/H2%2Bjtvf5I%26user_id%3D2131786826%26sn%3DDE2CCE120D96EB7D57B56FE962FA56FCDF5180CC%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D874C7CBF995B097D928EDE92A95DE4292FD7F369%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhoneSE%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYM1lR4VRGAoDAM/H2%2Bjtvf5I%26utype%3Dpre_vip%26sdk%3D13.3.1&deliveryId=711&key=sq_app_ad&miniWua=HHnB_0yNOffjpDAvR48wIvyfKXYL4S8kYSf2syqRDK8Pqdc4%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=703&sign=EEF7AE5F1184B1C90830DDD96C67C393&timestamp=1624073611&userId=2131786826&user_id=2131786826&wua=HIVW_i5gMN5l8R9BmJg43vs4iadeiy8psRNeGosoZE/lBxFLqJhWuiCfjr3hxK%2Be0WNM2c%2BVbFgoqculYCBrsSP4ofiFLDeosY/AUN/XiUHnCSbXW4QyOtsw%2Bw1yIkrLV4zOF3YCrSJEyzoISzyMYzc/4sG816Aa6sCUJX%2BCnBwYzZdJ5JrhLOgS2fWhTbzwnQEos5s9fxQtExG6QgKRJ8t73k6711BVCn6q%2BxLQCgq8qj4w%3D"},{"key":"shuqicjbody10","val":"wua=HIVW_SseBvMalJoZBTQLzzicj%2BBQt5C7EbmreuKsCj70CtxLsJXXoFFrU8HAGz1yR6W7gpY9Sqpfo5LdyV2pH2AW%2Fsi7vAx2wJMaWnYkPbyGuHPRomeTghF3QbSkcFGLxH5LuhnZh1Dz65wKHFaR7QUylUmCqlpSolmtXZTv4oUqbuLbnGtGWd%2Fc5x1WKNKD3eA96gq4T%2FCW64NvZDoIHwCx2leUUbN%2Ftv57mYqHeCO0UIMc%3D&ua=&userId=2131786826&umidtoken=YM1lR4VRGAoDAM%2FH2%2Bjtvf5I&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&asac=2A20C07RJ9F51AOEFSNHDR&timestamp=1624073615&activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&sqSv=1.0&sign=0f29864c2d31c00f66f38d7e363202e3&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.3.1%26utdid%3DYM1lR4VRGAoDAM%252FH2%252Bjtvf5I%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2131786826%26sn%3DDE2CCE120D96EB7D57B56FE962FA56FCDF5180CC%26umidtoken%3DYM1lR4VRGAoDAM%252FH2%252Bjtvf5I%26msv%3D8.0.0%26brand%3DApple%26imei%3D874C7CBF995B097D928EDE92A95DE4292FD7F369%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhoneSE%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D1C13B85E-5BCF-479D-9549-9719DC9F26B6"},{"key":"shuqijsspbody10","val":""},{"key":"shuqijsydurl10","val":""},{"key":"shuqijsydbody10","val":""},{"key":"shuqijsqdbody10","val":""},{"key":"shuqijsqdspyurl10","val":""},{"key":"shuqijsqdspbody10","val":""},{"key":"shuqijsrwbody10","val":""},{"key":"shuqijsfxbody10","val":""},{"key":"shuqijsbookurl10","val":""},{"key":"shuqijsbookbody10","val":""},{"key":"shuqijssprwurl10","val":""},{"key":"shuqiuserurl11","val":"https://ocean.shuqireader.com/api/jaccount/accountapi/v1/sapi/account/getBindinfo?userId=2132035044&sqSv=1.0&timestamp=1624073704&sign=6aa985374b5ed98ec6e417c265c576f0&key=sq_h5_gateway"},{"key":"shuqisyurl11","val":"https://render.shuqireader.com/load/resource?sdk=13.2&utdid=YM1QiVrhF%2F4DAMoMLzH%2BagW%2F&ustatus=0&first_placeid=111111&net_env=4g&placeid=111111&user_id=2132035044&sn=D99576BE2B0A604853083B6ECE0D4971011459ED&umidtoken=YM1QiVrhF%2F4DAMoMLzH%2BagW%2F&msv=8.0.0&brand=Apple&imei=DC0E57F7D79E9BAD4AA83757AE66F2441818E2B9&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=iOS&ver=210301&mod=UnknowniPad&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=34099651-2CCF-45D9-A1F6-456A05B1890D"},{"key":"shuqisybody11","val":"appVer=4.3.6.0&imei=DC0E57F7D79E9BAD4AA83757AE66F2441818E2B9&isNewUser=1&params=%7B%22resources%22%3A%7B%22ShuqiVipEntry%22%3A%7B%7D%2C%22personalCardConfig%22%3A%7B%7D%7D%7D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=0941de4599102eb4b322ba5367657cec&sn=D99576BE2B0A604853083B6ECE0D4971011459ED&soft_id=21&timestamp=1624073659&user_id=2132035044&ver=210301"},{"key":"shuqispbody11","val":"_public=skinId%3D999%26idfa%3D34099651-2CCF-45D9-A1F6-456A05B1890D%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26umidtoken%3DYM1QiVrhF/4DAMoMLzH%2BagW/%26user_id%3D2132035044%26sn%3DD99576BE2B0A604853083B6ECE0D4971011459ED%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3DDC0E57F7D79E9BAD4AA83757AE66F2441818E2B9%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYM1QiVrhF/4DAMoMLzH%2BagW/%26utype%3Dpre_vip%26sdk%3D13.2&deliveryId=525&key=sq_app_ad&miniWua=HHnB_qGQ9BuyTEiBRN%2BnodXHBHY0Kt1Hmm/eYqgdkFuJBuzc%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=626&sign=AE20DB1F6DDBC65CC66E1F8BB69ECFCB&timestamp=1624073672&userId=2132035044&user_id=2132035044&wua=HIVW_6/VF8x7Sb50JIWpZFCUNhmcb6ZS1OgFI%2B/R77wbwx2gBCjjwXtCMgtI%2BUph2/rw2AfK8olC5/5a2kE68HILo3Hhusgg3iR6udqGUYpy7hJJCq1AI9YzQm3EFU0FzXZxiJYuVm15%2BJAEcSFkZNynBe8KX0YGm5gDK4E0AS3n15YzvOGB/xwTephw00sNQUPTpv%2BT5hznxc7QLFrSjnkk83i77zmoOEqLVr8l2/vKcCyI%3D"},{"key":"shuqiscbody11","val":""},{"key":"shuqiydbody11","val":""},{"key":"shuqiqdbody11","val":"clientTimestamp=1624073670&position=501&userId=2132035044&signInType=1&wua=HIVW_o7adXOldaDf34%2FlUcEiGXiGYZ795UiGczc%2BTiIgEzngGMsrkMbcfutXL75qYOaGYnjkos8VMU37eEOaaHKbJxuLYpmNWvRkdwcOvTOAqf1fuUXQT7lTbmDtb2QXMa%2BMwbPAtHwOwVjtLenIzIZ1FH0dJdGzp586fIaNg1ELrbikysbTxdvq40LHSmfGEnarCc%2FiocFoHB%2ByyXYCSAulp3MCPt1G8JhqAgcAJdcLQfIM%3D&ua=&miniWua=HHnB_Zxkq6ut6IDiSaQdubrilZs%2Bk2AyVs5dCVm%2FpoHwdYQM%3D&umidtoken=YM1QiVrhF%2F4DAMoMLzH%2BagW%2F&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&sign=1646edda2149f2697fc5c1e18b87bc20&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.2%26utdid%3DYM1QiVrhF%252F4DAMoMLzH%252BagW%252F%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2132035044%26sn%3DD99576BE2B0A604853083B6ECE0D4971011459ED%26umidtoken%3DYM1QiVrhF%252F4DAMoMLzH%252BagW%252F%26msv%3D8.0.0%26brand%3DApple%26imei%3DDC0E57F7D79E9BAD4AA83757AE66F2441818E2B9%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D34099651-2CCF-45D9-A1F6-456A05B1890D"},{"key":"shuqirwbody11","val":"serviceWorkerOn=1&stopPullRefresh=1&from=ShuqiTab&upf=20368&sdk=13.2&utdid=YM1QiVrhF%2F4DAMoMLzH%2BagW%2F&ustatus=0&first_placeid=111111&net_env=4g&placeid=111111&user_id=2132035044&sn=D99576BE2B0A604853083B6ECE0D4971011459ED&umidtoken=YM1QiVrhF%2F4DAMoMLzH%2BagW%2F&msv=8.0.0&brand=Apple&imei=DC0E57F7D79E9BAD4AA83757AE66F2441818E2B9&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=1&ver=210301&mod=UnknowniPad&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=34099651-2CCF-45D9-A1F6-456A05B1890D&params=%7B%22resources%22%3A%7B%22ShuqiBsDailyTask%22%3A%7B%7D%7D%7D&userId=2132035044&placeId=111111&timestamp=1624073684&sqSv=1.0&sign=41aaf2a6757b9f50cc9fab44c6802faa&key=sq_h5_gateway&_public="},{"key":"shuqifxbody11","val":""},{"key":"shuqisprwurl11","val":"https://ocean.shuqireader.com/api/ad/adserver/v1/api/getAdInfo?appVer=4.3.6.0&placeId=111111&platform=iOS&requestSrc=h5&resourceId=626&timestamp=1624073705&user_id=2132035044&sqSv=1.0&sign=851881371deabafc4b4270bb47e0cf98&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.2%26utdid%3DYM1QiVrhF%252F4DAMoMLzH%252BagW%252F%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2132035044%26sn%3DD99576BE2B0A604853083B6ECE0D4971011459ED%26umidtoken%3DYM1QiVrhF%252F4DAMoMLzH%252BagW%252F%26msv%3D8.0.0%26brand%3DApple%26imei%3DDC0E57F7D79E9BAD4AA83757AE66F2441818E2B9%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D34099651-2CCF-45D9-A1F6-456A05B1890D"},{"key":"shuqijlbody11","val":"requestSrc=h5&userId=2132035044&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624073684&sqSv=1.0&sign=7e9c9b44456ff8edea4835a78255b513&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.2%26utdid%3DYM1QiVrhF%252F4DAMoMLzH%252BagW%252F%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2132035044%26sn%3DD99576BE2B0A604853083B6ECE0D4971011459ED%26umidtoken%3DYM1QiVrhF%252F4DAMoMLzH%252BagW%252F%26msv%3D8.0.0%26brand%3DApple%26imei%3DDC0E57F7D79E9BAD4AA83757AE66F2441818E2B9%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D34099651-2CCF-45D9-A1F6-456A05B1890D"},{"key":"shuqisqjlbody11","val":"src=&userId=2132035044&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624073681&sqSv=1.0&sign=9961fcc5ec1502388877ee24f3811cdb&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.2%26utdid%3DYM1QiVrhF%252F4DAMoMLzH%252BagW%252F%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2132035044%26sn%3DD99576BE2B0A604853083B6ECE0D4971011459ED%26umidtoken%3DYM1QiVrhF%252F4DAMoMLzH%252BagW%252F%26msv%3D8.0.0%26brand%3DApple%26imei%3DDC0E57F7D79E9BAD4AA83757AE66F2441818E2B9%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D34099651-2CCF-45D9-A1F6-456A05B1890D"},{"key":"shuqicjyurl11","val":"https://ocean.shuqireader.com/api/activity/activity/v1/lottery/info?timestamp=1624073709&userId=2132035044&activityId=311&sqSv=1.0&sign=052a6d65ddfa7f0255539e84c615f77b&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.2%26utdid%3DYM1QiVrhF%252F4DAMoMLzH%252BagW%252F%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2132035044%26sn%3DD99576BE2B0A604853083B6ECE0D4971011459ED%26umidtoken%3DYM1QiVrhF%252F4DAMoMLzH%252BagW%252F%26msv%3D8.0.0%26brand%3DApple%26imei%3DDC0E57F7D79E9BAD4AA83757AE66F2441818E2B9%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D34099651-2CCF-45D9-A1F6-456A05B1890D"},{"key":"shuqicjcsbody11","val":"_public=skinId%3D999%26idfa%3D34099651-2CCF-45D9-A1F6-456A05B1890D%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26umidtoken%3DYM1QiVrhF/4DAMoMLzH%2BagW/%26user_id%3D2132035044%26sn%3DD99576BE2B0A604853083B6ECE0D4971011459ED%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3DDC0E57F7D79E9BAD4AA83757AE66F2441818E2B9%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYM1QiVrhF/4DAMoMLzH%2BagW/%26utype%3Dpre_vip%26sdk%3D13.2&deliveryId=711&key=sq_app_ad&miniWua=HHnB_MNB88qRoaI/Fqd6cPSZ937bw/3ZxBXXfdFrMgvpmatQ%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=703&sign=1B8842DD390999263D05DC9ECB5EFB4B&timestamp=1624073688&userId=2132035044&user_id=2132035044&wua=HIVW_mL%2BD3dGnJEDShRDlLPlt8Hw51JiBgtbDVOJgRN217auRr5gtLgpnbbYXIyAIUlzAxCoxO0b9UCORDTcef8OCQsTypjftQpV3Uru5mnS3P3KUMCpGHgg6OYYw9T%2B3m9AYdutJ/Y4JT0jezex%2B716wZvlKyt1loyMgG1HyRYhYyzjDFypPlXSolg3vXkfxJ6vTZg4G4SpjSP7k/fESlJzYAiifzzUhOqS2DOI7H8bCQrY%3D"},{"key":"shuqicjbody11","val":"wua=HIVW_Q5v4leV0%2BEuI7h29WMqbyUuQ3rElp2N4XrQ5R5pkK9mQNcIjBZ5izi5%2FEu6H7phXX0iEKAVTk2e2ZmkdQi54xq%2BU%2BjPI3aygHUT1%2FNHQLB6yz1BTsVGjQXKxE8Iqa%2FDdr4KbUYRo2JGEX44zbmDY4AzM%2B3qBtWhm%2BYHRzzn4ECI0GPN2BmLGIMVNWBBbgn%2FwbbFOdLWtGdK3DW8b2m6UfPJ%2BFGZoK9t%2FhDPIa4vVc9E%3D&ua=&userId=2132035044&umidtoken=YM1QiVrhF%2F4DAMoMLzH%2BagW%2F&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&asac=2A20C07RJ9F51AOEFSNHDR&timestamp=1624073693&activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&sqSv=1.0&sign=b8e2a9fb0c7f5d11f28d8ad5f80fd5e5&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.2%26utdid%3DYM1QiVrhF%252F4DAMoMLzH%252BagW%252F%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2132035044%26sn%3DD99576BE2B0A604853083B6ECE0D4971011459ED%26umidtoken%3DYM1QiVrhF%252F4DAMoMLzH%252BagW%252F%26msv%3D8.0.0%26brand%3DApple%26imei%3DDC0E57F7D79E9BAD4AA83757AE66F2441818E2B9%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D34099651-2CCF-45D9-A1F6-456A05B1890D"},{"key":"shuqijsspbody11","val":""},{"key":"shuqijsydurl11","val":""},{"key":"shuqijsydbody11","val":""},{"key":"shuqijsqdbody11","val":""},{"key":"shuqijsqdspyurl11","val":""},{"key":"shuqijsqdspbody11","val":""},{"key":"shuqijsrwbody11","val":""},{"key":"shuqijsfxbody11","val":""},{"key":"shuqijsbookurl11","val":""},{"key":"shuqijsbookbody11","val":""},{"key":"shuqijssprwurl11","val":""},{"key":"shuqiuserurl12","val":"https://ocean.shuqireader.com/api/jaccount/accountapi/v1/sapi/account/getBindinfo?userId=2130608081&sqSv=1.0&timestamp=1624074331&sign=9d36f7137aaa32c7c2a9d9bd34ea4eff&key=sq_h5_gateway"},{"key":"shuqisyurl12","val":"https://render.shuqireader.com/load/resource?sdk=13.1.3&utdid=YM1QkRaDbooDANFqNRoBDqeW&ustatus=0&first_placeid=111111&net_env=wifi&placeid=111111&user_id=2130608081&sn=410D4CA4E41C6C7531D5464D7B99A4B86F01CD0F&umidtoken=YM1QkRaDbooDANFqNRoBDqeW&msv=8.0.0&brand=Apple&imei=A0BA5A95716237A98ADEF49CA18FC8C24093E13B&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=iOS&ver=210301&mod=iPhone6plus&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=A9F70434-2EAB-449C-8B21-81F14F5AB098"},{"key":"shuqisybody12","val":"appVer=4.3.6.0&imei=A0BA5A95716237A98ADEF49CA18FC8C24093E13B&isNewUser=1&params=%7B%22resources%22%3A%7B%22ShuqiVipEntry%22%3A%7B%7D%2C%22personalCardConfig%22%3A%7B%7D%7D%7D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=1b46f20324ff11a9007c1aa444320ea8&sn=410D4CA4E41C6C7531D5464D7B99A4B86F01CD0F&soft_id=21&timestamp=1624073725&user_id=2130608081&ver=210301"},{"key":"shuqispbody12","val":"_public=skinId%3D999%26idfa%3DA9F70434-2EAB-449C-8B21-81F14F5AB098%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26umidtoken%3DYM1QkRaDbooDANFqNRoBDqeW%26user_id%3D2130608081%26sn%3D410D4CA4E41C6C7531D5464D7B99A4B86F01CD0F%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3DA0BA5A95716237A98ADEF49CA18FC8C24093E13B%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhone6plus%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYM1QkRaDbooDANFqNRoBDqeW%26utype%3Dpre_vip%26sdk%3D13.1.3&deliveryId=525&key=sq_app_ad&miniWua=HHnB_4quwAOVLdcMeXHUiw6aPO6yQ0CAn/f/7FKMx5ekIqYc%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=626&sign=5E0846F7667ED22F495EACC9D888A402&timestamp=1624073758&userId=2130608081&user_id=2130608081&wua=HIVW_j8EXqS6/IOpPcnd5lcOuYH/xWJllBm2WPX0MGQeJ8EsvWUShT/oJC/y5y2j5yTfDAdFMsWOtwwI0j%2BpN1ZKIjJ8Zdq2VDc4t096VoN1m5iFkCqEvcOI5tyi1pXBlZ7jvkLSSbbeVBk3XzJ4jf4oanjDj/6gpGUanxmN//TzWHAYpm3BhB21pERwZC5WaVaa7NGWFYXaXOqbFm4lQilwZM/8o6aFeb/ZaeiZlBY1URoc%3D"},{"key":"shuqiscbody12","val":""},{"key":"shuqiydbody12","val":""},{"key":"shuqiqdbody12","val":"clientTimestamp=1624073764&position=501&userId=2130608081&signInType=1&wua=HIVW_j%2F%2BoWMmJ86KMjA5nQyuZ0QJBWSZ450kxZIVpBxoOSTTk7ASC0Tu4kzxJeXOqtaMF6arwvoZ2c%2BjEC%2BFWtgWVZRUU8O6fkmVfyUbjNAdJ9C6Cr8UWfo8XUIoh5YHGGD3tOYP45kMG8hGi3zyLIhYtkaGpsPPQfPMIqNOJP94ohDCD4S4bLJs8DtEZH7r19I4tQ0ghAoYQRtsUSCTEqJ7RulSMHqQNBAMWIJqo2p3HVf4%3D&ua=&miniWua=HHnB_I6a5YdoG8ksQlDn1r4Xorl27f6vUG1TuEsw7L15kwlU%3D&umidtoken=YM1QkRaDbooDANFqNRoBDqeW&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&sign=60b7fd694e1211e5cd2935961e377e1d&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.1.3%26utdid%3DYM1QkRaDbooDANFqNRoBDqeW%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2130608081%26sn%3D410D4CA4E41C6C7531D5464D7B99A4B86F01CD0F%26umidtoken%3DYM1QkRaDbooDANFqNRoBDqeW%26msv%3D8.0.0%26brand%3DApple%26imei%3DA0BA5A95716237A98ADEF49CA18FC8C24093E13B%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone6plus%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DA9F70434-2EAB-449C-8B21-81F14F5AB098"},{"key":"shuqirwbody12","val":"serviceWorkerOn=1&stopPullRefresh=1&from=ShuqiTab&upf=20368&sdk=13.1.3&utdid=YM1QkRaDbooDANFqNRoBDqeW&ustatus=0&first_placeid=111111&net_env=wifi&placeid=111111&user_id=2130608081&sn=410D4CA4E41C6C7531D5464D7B99A4B86F01CD0F&umidtoken=YM1QkRaDbooDANFqNRoBDqeW&msv=8.0.0&brand=Apple&imei=A0BA5A95716237A98ADEF49CA18FC8C24093E13B&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=1&ver=210301&mod=iPhone6plus&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=A9F70434-2EAB-449C-8B21-81F14F5AB098&params=%7B%22resources%22%3A%7B%22ShuqiBsDailyTask%22%3A%7B%7D%7D%7D&userId=2130608081&placeId=111111&timestamp=1624073787&sqSv=1.0&sign=4cb2621f7d1fc9536189ffa4d857240f&key=sq_h5_gateway&_public="},{"key":"shuqifxbody12","val":""},{"key":"shuqisprwurl12","val":"https://ocean.shuqireader.com/api/ad/adserver/v1/api/getAdInfo?appVer=4.3.6.0&placeId=111111&platform=iOS&requestSrc=h5&resourceId=626&timestamp=1624074329&user_id=2130608081&sqSv=1.0&sign=b29e2dd6d024d9b4294863eaac72a23b&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.1.3%26utdid%3DYM1QkRaDbooDANFqNRoBDqeW%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2130608081%26sn%3D410D4CA4E41C6C7531D5464D7B99A4B86F01CD0F%26umidtoken%3DYM1QkRaDbooDANFqNRoBDqeW%26msv%3D8.0.0%26brand%3DApple%26imei%3DA0BA5A95716237A98ADEF49CA18FC8C24093E13B%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone6plus%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DA9F70434-2EAB-449C-8B21-81F14F5AB098"},{"key":"shuqijlbody12","val":"requestSrc=h5&userId=2130608081&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624073787&sqSv=1.0&sign=a210d21c86a1de50b72ecb879d40db5c&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.1.3%26utdid%3DYM1QkRaDbooDANFqNRoBDqeW%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2130608081%26sn%3D410D4CA4E41C6C7531D5464D7B99A4B86F01CD0F%26umidtoken%3DYM1QkRaDbooDANFqNRoBDqeW%26msv%3D8.0.0%26brand%3DApple%26imei%3DA0BA5A95716237A98ADEF49CA18FC8C24093E13B%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone6plus%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DA9F70434-2EAB-449C-8B21-81F14F5AB098"},{"key":"shuqisqjlbody12","val":"src=&userId=2130608081&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624073785&sqSv=1.0&sign=de59f572205aca163658e50bdb188e20&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.1.3%26utdid%3DYM1QkRaDbooDANFqNRoBDqeW%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2130608081%26sn%3D410D4CA4E41C6C7531D5464D7B99A4B86F01CD0F%26umidtoken%3DYM1QkRaDbooDANFqNRoBDqeW%26msv%3D8.0.0%26brand%3DApple%26imei%3DA0BA5A95716237A98ADEF49CA18FC8C24093E13B%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone6plus%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DA9F70434-2EAB-449C-8B21-81F14F5AB098"},{"key":"shuqicjyurl12","val":"https://ocean.shuqireader.com/api/activity/activity/v1/lottery/info?timestamp=1624074332&userId=2130608081&activityId=311&sqSv=1.0&sign=7b576ce2d460f1ad5384c86a570b3638&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.1.3%26utdid%3DYM1QkRaDbooDANFqNRoBDqeW%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2130608081%26sn%3D410D4CA4E41C6C7531D5464D7B99A4B86F01CD0F%26umidtoken%3DYM1QkRaDbooDANFqNRoBDqeW%26msv%3D8.0.0%26brand%3DApple%26imei%3DA0BA5A95716237A98ADEF49CA18FC8C24093E13B%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone6plus%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DA9F70434-2EAB-449C-8B21-81F14F5AB098"},{"key":"shuqicjcsbody12","val":"_public=utype%3Dpre_vip%26idfa%3DA9F70434-2EAB-449C-8B21-81F14F5AB098%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26umidtoken%3DYM1QkRaDbooDANFqNRoBDqeW%26user_id%3D2130608081%26sn%3D410D4CA4E41C6C7531D5464D7B99A4B86F01CD0F%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3DA0BA5A95716237A98ADEF49CA18FC8C24093E13B%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhone6plus%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26utdid%3DYM1QkRaDbooDANFqNRoBDqeW%26soft_id%3D21%26sdk%3D13.1.3&deliveryId=711&key=sq_app_ad&miniWua=HHnB_lwLpRZpJMh5cjRD5ZGkpR2hu0eyKFyB9E9Q0evR0z/A%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=703&sign=B5DF2123F7C84D13B1DA72A5097AB9E2&timestamp=1624073813&userId=2130608081&user_id=2130608081&wua=HIVW_nEVHJxxFK8tcHwgWVA5yd/WFK8xwcbbeuFaCBdK/Hl1bgpwOtGexPtLpwZYnFes8p5fzXAovZA%2BAs0sTuB6Gf%2B1CCsIr4vjgTQm6yNxsKZf%2BNl2Baa8S4AKD/F1JyR4TTcnWFJ7vdDHxApJdnmBIcM%2BcMQ6Gm8HcOkkYUDWn52k3Jh0rAx3x5i1KXRnEae94a6zM71A9pyc17U4iEBCtRYc1dG8iplUntAGEzxXMvtE%3D"},{"key":"shuqicjbody12","val":"wua=HIVW_vzVNLUQmNt5LvoJZM%2BorgtAAbw%2FU96s8YALT%2Fg6Qc8RGqk%2BC7Vp97gtRIw93WJOL4wpxEyLhJ61TsEnnaMtEaqfF7LX2icf4xK8mSyGbxDqDpmiyMKWp103L%2Fo99MeHk7WUISGTzZ78rpl4wsEYq8t4CpO7Yj7EQ2cyksayMNnqtQo8eaV0JQ2crcdkt%2FmfbHAL0XCK8sCMlSkyB32MT1W26znt0wx7C0WnY1uM0JFA%3D&ua=&userId=2130608081&umidtoken=YM1QkRaDbooDANFqNRoBDqeW&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&asac=2A20C07RJ9F51AOEFSNHDR&timestamp=1624073823&activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&sqSv=1.0&sign=cf4ec89bbc3b7f2f68450d020cd18192&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.1.3%26utdid%3DYM1QkRaDbooDANFqNRoBDqeW%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2130608081%26sn%3D410D4CA4E41C6C7531D5464D7B99A4B86F01CD0F%26umidtoken%3DYM1QkRaDbooDANFqNRoBDqeW%26msv%3D8.0.0%26brand%3DApple%26imei%3DA0BA5A95716237A98ADEF49CA18FC8C24093E13B%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone6plus%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DA9F70434-2EAB-449C-8B21-81F14F5AB098"},{"key":"shuqijsspbody12","val":""},{"key":"shuqijsydurl12","val":""},{"key":"shuqijsydbody12","val":""},{"key":"shuqijsqdbody12","val":""},{"key":"shuqijsqdspyurl12","val":""},{"key":"shuqijsqdspbody12","val":""},{"key":"shuqijsrwbody12","val":""},{"key":"shuqijsfxbody12","val":""},{"key":"shuqijsbookurl12","val":""},{"key":"shuqijsbookbody12","val":""},{"key":"shuqijssprwurl12","val":""},{"key":"shuqiuserurl13","val":"https://ocean.shuqireader.com/api/jaccount/accountapi/v1/sapi/account/getBindinfo?userId=2130991353&sqSv=1.0&timestamp=1624074580&sign=4ec52bcf41f6cbf10c89836930ee5574&key=sq_h5_gateway"},{"key":"shuqisyurl13","val":"https://render.shuqireader.com/load/resource?sdk=13.4.1&utdid=YM1QmdYGymIDABJ87tJdlTYM&ustatus=0&first_placeid=111111&net_env=wifi&placeid=111111&user_id=2130991353&sn=2CA41B156DBD2DF32BCB557C2A371CB5DF8EAC41&umidtoken=YM1QmdYGymIDABJ87tJdlTYM&msv=8.0.0&brand=Apple&imei=8B7F3739E2B26EC19800A268505763B2A54CFF7E&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=iOS&ver=210301&mod=UnknowniPad&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=523C63CA-7BF9-4ED0-8DAF-F747DD939034"},{"key":"shuqisybody13","val":"appVer=4.3.6.0&imei=8B7F3739E2B26EC19800A268505763B2A54CFF7E&isNewUser=1&params=%7B%22resources%22%3A%7B%22ShuqiVipEntry%22%3A%7B%7D%2C%22personalCardConfig%22%3A%7B%7D%7D%7D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=e559a6eabdbe87234903105ccb76e863&sn=2CA41B156DBD2DF32BCB557C2A371CB5DF8EAC41&soft_id=21&timestamp=1624074530&user_id=2130991353&ver=210301"},{"key":"shuqispbody13","val":"_public=skinId%3D999%26idfa%3D523C63CA-7BF9-4ED0-8DAF-F747DD939034%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26umidtoken%3DYM1QmdYGymIDABJ87tJdlTYM%26user_id%3D2130991353%26sn%3D2CA41B156DBD2DF32BCB557C2A371CB5DF8EAC41%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D8B7F3739E2B26EC19800A268505763B2A54CFF7E%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYM1QmdYGymIDABJ87tJdlTYM%26utype%3Dpre_vip%26sdk%3D13.4.1&deliveryId=525&key=sq_app_ad&miniWua=HHnB_GJSIKlDzIDteozKFLu9D%2BtCTLXUuc/7gAEsTvEnoxbc%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=626&sign=C3323B89F348425BC87FAB22E829D375&timestamp=1624074547&userId=2130991353&user_id=2130991353&wua=HIVW_Wq8aeCoJcbC1HJuBtMyeWsHoYbxioJJkIVM2gvrrnz7Pp2THNszPtWGhlFlTj0r7FPOWAWvXkUZ/7IDpGNomynvi6nCMjTamTA1bgYMSXo6li2cOPtntr7%2B/Du3QLWM8N/L/93H6aQIeHSGFJ4ccc5pTA5FV/GV8cljxg1pakBKcPmZEmeIrzB3ogRuRCIhwUcl7YM0yesAGAex3nvFoLBqF9V1/vzPLxD3/l40/7YA%3D"},{"key":"shuqiscbody13","val":""},{"key":"shuqiydbody13","val":""},{"key":"shuqiqdbody13","val":"clientTimestamp=1624074545&position=501&userId=2130991353&signInType=1&wua=HIVW_IWOC8dk9gsa0RPxT%2BP1QoN702lLaqTAhrMQJ15WN1BlKdHDZGTxX0ZmQHdHi18kR2wFvnwUNrj9MFxmB%2BW6vQ9RHsbkkhEK31H%2BBz9HVG%2BmtxiWTtB4%2F4na4qwxZUYSD2GN%2BQHCUas9bMo5376N%2F4Hh4BLV5yJnMw77SMw1ZKRP8fQ5q0r6JrkqiRcQGE6vM0MiOyEiFx16M8PrfEk7sjd7BqvUwLd9MHl9gYjXhfzY%3D&ua=&miniWua=HHnB_WyGNfDNssvyDmWJzlrzCveVMjrzExoGvFsZyiEOhoOU%3D&umidtoken=YM1QmdYGymIDABJ87tJdlTYM&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&sign=59d73b01ccdfcfa3a252a70b9b1a38c4&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.4.1%26utdid%3DYM1QmdYGymIDABJ87tJdlTYM%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2130991353%26sn%3D2CA41B156DBD2DF32BCB557C2A371CB5DF8EAC41%26umidtoken%3DYM1QmdYGymIDABJ87tJdlTYM%26msv%3D8.0.0%26brand%3DApple%26imei%3D8B7F3739E2B26EC19800A268505763B2A54CFF7E%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D523C63CA-7BF9-4ED0-8DAF-F747DD939034"},{"key":"shuqirwbody13","val":"serviceWorkerOn=1&stopPullRefresh=1&from=ShuqiTab&upf=20368&sdk=13.4.1&utdid=YM1QmdYGymIDABJ87tJdlTYM&ustatus=0&first_placeid=111111&net_env=wifi&placeid=111111&user_id=2130991353&sn=2CA41B156DBD2DF32BCB557C2A371CB5DF8EAC41&umidtoken=YM1QmdYGymIDABJ87tJdlTYM&msv=8.0.0&brand=Apple&imei=8B7F3739E2B26EC19800A268505763B2A54CFF7E&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&session=&skinColor=23B383&platform=1&ver=210301&mod=UnknowniPad&statusBarHeight=44.000000&skinVersion=1&wh=1242x2688&soft_id=21&utype=pre_vip&skinId=999&idfa=523C63CA-7BF9-4ED0-8DAF-F747DD939034&params=%7B%22resources%22%3A%7B%22ShuqiBsDailyTask%22%3A%7B%7D%7D%7D&userId=2130991353&placeId=111111&timestamp=1624074560&sqSv=1.0&sign=adac51f8c220472cc742f316e528ed7a&key=sq_h5_gateway&_public="},{"key":"shuqifxbody13","val":""},{"key":"shuqisprwurl13","val":"https://ocean.shuqireader.com/api/ad/adserver/v1/api/getAdInfo?appVer=4.3.6.0&placeId=111111&platform=iOS&requestSrc=h5&resourceId=626&timestamp=1624074581&user_id=2130991353&sqSv=1.0&sign=a4f1d192811debc461e066b681c6c2ce&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.4.1%26utdid%3DYM1QmdYGymIDABJ87tJdlTYM%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2130991353%26sn%3D2CA41B156DBD2DF32BCB557C2A371CB5DF8EAC41%26umidtoken%3DYM1QmdYGymIDABJ87tJdlTYM%26msv%3D8.0.0%26brand%3DApple%26imei%3D8B7F3739E2B26EC19800A268505763B2A54CFF7E%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D523C63CA-7BF9-4ED0-8DAF-F747DD939034"},{"key":"shuqijlbody13","val":"requestSrc=h5&userId=2130991353&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624074560&sqSv=1.0&sign=71f8f25ca7fa0223feb0ac970a116eeb&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.4.1%26utdid%3DYM1QmdYGymIDABJ87tJdlTYM%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2130991353%26sn%3D2CA41B156DBD2DF32BCB557C2A371CB5DF8EAC41%26umidtoken%3DYM1QmdYGymIDABJ87tJdlTYM%26msv%3D8.0.0%26brand%3DApple%26imei%3D8B7F3739E2B26EC19800A268505763B2A54CFF7E%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D523C63CA-7BF9-4ED0-8DAF-F747DD939034"},{"key":"shuqisqjlbody13","val":"src=&userId=2130991353&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624074556&sqSv=1.0&sign=0e5a34f98506cd86621495ec0195fa18&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.4.1%26utdid%3DYM1QmdYGymIDABJ87tJdlTYM%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2130991353%26sn%3D2CA41B156DBD2DF32BCB557C2A371CB5DF8EAC41%26umidtoken%3DYM1QmdYGymIDABJ87tJdlTYM%26msv%3D8.0.0%26brand%3DApple%26imei%3D8B7F3739E2B26EC19800A268505763B2A54CFF7E%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D523C63CA-7BF9-4ED0-8DAF-F747DD939034"},{"key":"shuqicjyurl13","val":"https://ocean.shuqireader.com/api/activity/activity/v1/lottery/info?timestamp=1624074584&userId=2130991353&activityId=311&sqSv=1.0&sign=23564694effc1a68d2bb8ab653679d81&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.4.1%26utdid%3DYM1QmdYGymIDABJ87tJdlTYM%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2130991353%26sn%3D2CA41B156DBD2DF32BCB557C2A371CB5DF8EAC41%26umidtoken%3DYM1QmdYGymIDABJ87tJdlTYM%26msv%3D8.0.0%26brand%3DApple%26imei%3D8B7F3739E2B26EC19800A268505763B2A54CFF7E%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D523C63CA-7BF9-4ED0-8DAF-F747DD939034"},{"key":"shuqicjcsbody13","val":"_public=skinId%3D999%26idfa%3D523C63CA-7BF9-4ED0-8DAF-F747DD939034%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26umidtoken%3DYM1QmdYGymIDABJ87tJdlTYM%26user_id%3D2130991353%26sn%3D2CA41B156DBD2DF32BCB557C2A371CB5DF8EAC41%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D8B7F3739E2B26EC19800A268505763B2A54CFF7E%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYM1QmdYGymIDABJ87tJdlTYM%26utype%3Dpre_vip%26sdk%3D13.4.1&deliveryId=711&key=sq_app_ad&miniWua=HHnB_fLaQ13ZMpSeKxcEi51MjgeFZ8%2Bzh%2Bektr1dAruGNRSg%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=703&sign=FC0ED00CDC774C8A0A04F921ABA02C11&timestamp=1624074564&userId=2130991353&user_id=2130991353&wua=HIVW_8aPqHZQpK5H9L0JSWRzyUZs%2BpP7dGSi5hySrwJe5ndEucKSQ4eo5pVUORfTvk13vQBUFPywo4FbjS3PXdh0I5hjFylpp94i5e98z/4kJBfrOwSq3nPaPvbDc8E5tYrAo1HoAKGEZ97mxX%2BsrutlM28YzdZMTs2yH701eIuEjYL3g1MNX2FRMLkFpeRbhhbXQ/PUisZR4DhSX382tl/wK9hqvm9ge0yXtPID5VCVZlS0%3D"},{"key":"shuqicjbody13","val":"wua=HIVW_sboTNjNzeFzFpjo4Sv80m8v70t1Qexz1UDhnQ6cYxs44uXQ1hUvPtDuC3ALtTe%2FSL7RI14eBeL1eDegfQF0M3NExoyGniauUEoxFDAtwX5JlaS%2BXWDNjTEbZNqY8NTVLCbSo84NZPX0ya%2BFKeO5g%2B7FMpS1xZBdKa0fRv67WcQ8vBjTLYPpmOQcnFULpH8Gx9VDPM1gUCqSAu4KFfHnBG27g3PlrQH2DJyPjKsXZxto%3D&ua=&userId=2130991353&umidtoken=YM1QmdYGymIDABJ87tJdlTYM&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&asac=2A20C07RJ9F51AOEFSNHDR&timestamp=1624074571&activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&sqSv=1.0&sign=986b9e26fbe875aaa9b9075bd1366d82&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.4.1%26utdid%3DYM1QmdYGymIDABJ87tJdlTYM%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2130991353%26sn%3D2CA41B156DBD2DF32BCB557C2A371CB5DF8EAC41%26umidtoken%3DYM1QmdYGymIDABJ87tJdlTYM%26msv%3D8.0.0%26brand%3DApple%26imei%3D8B7F3739E2B26EC19800A268505763B2A54CFF7E%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D523C63CA-7BF9-4ED0-8DAF-F747DD939034"},{"key":"shuqijsspbody13","val":""},{"key":"shuqijsydurl13","val":""},{"key":"shuqijsydbody13","val":""},{"key":"shuqijsqdbody13","val":""},{"key":"shuqijsqdspyurl13","val":""},{"key":"shuqijsqdspbody13","val":""},{"key":"shuqijsrwbody13","val":""},{"key":"shuqijsfxbody13","val":""},{"key":"shuqijsbookurl13","val":""},{"key":"shuqijsbookbody13","val":""},{"key":"shuqijssprwurl13","val":""},{"key":"shuqiuserurl14","val":"https://ocean.shuqireader.com/api/jaccount/accountapi/v1/sapi/account/getBindinfo?userId=2130260551&sqSv=1.0&timestamp=1624074653&sign=99a396201e688f7d6dcc010fe3dc1d32&key=sq_h5_gateway"},{"key":"shuqisyurl14","val":"https://render.shuqireader.com/load/resource?sdk=13.1.3&utdid=YM1pZTWXtOMDAAIEPLjwETyF&ustatus=0&first_placeid=111111&net_env=3g&placeid=111111&user_id=2130260551&sn=8B0050996D41ADD73EAFF539F2D224E6DCA3B2D0&umidtoken=YM1pZTWXtOMDAAIEPLjwETyF&msv=8.0.0&brand=Apple&imei=80956C57EEFF548F077F929EB5E136890EEB9749&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=iOS&ver=210301&mod=UnknowniPad&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=CD1E6321-7416-4734-8327-C0CAC222A42B"},{"key":"shuqisybody14","val":"appVer=4.3.6.0&imei=80956C57EEFF548F077F929EB5E136890EEB9749&isNewUser=1&params=%7B%22resources%22%3A%7B%22ShuqiVipEntry%22%3A%7B%7D%2C%22personalCardConfig%22%3A%7B%7D%7D%7D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=7f72ea04c31959f4c1eb3c16e090ee32&sn=8B0050996D41ADD73EAFF539F2D224E6DCA3B2D0&soft_id=21&timestamp=1624074609&user_id=2130260551&ver=210301"},{"key":"shuqispbody14","val":"_public=skinId%3D999%26idfa%3DCD1E6321-7416-4734-8327-C0CAC222A42B%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26umidtoken%3DYM1pZTWXtOMDAAIEPLjwETyF%26user_id%3D2130260551%26sn%3D8B0050996D41ADD73EAFF539F2D224E6DCA3B2D0%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D80956C57EEFF548F077F929EB5E136890EEB9749%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYM1pZTWXtOMDAAIEPLjwETyF%26utype%3Dpre_vip%26sdk%3D13.1.3&deliveryId=525&key=sq_app_ad&miniWua=HHnB_9dZW3cwy8VsR6xn83oD56145VZu2dGhN85NptZBgwTM%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=626&sign=A9F4AA442155C1F87FEBF2F3FF75ED64&timestamp=1624074623&userId=2130260551&user_id=2130260551&wua=HIVW_YKinz6bqw//qCSdSSMk/U/h2OObtzOfZLBWnBjgn4GWCe4nlUtzMw5MaZAQVpQULMKkpPj/8peHnRJTdgrFbp5lKiKejp9iziPqGLV0pwbR%2BuHxJqMFVkV%2BuPXG5Q%2BDMPTf2q1PIjpMBOoYboylgMNyPxEfrtxIROFq1YR7h23nKcDbTrw8wkqKwa2qRqrMpUSVpWnW9seP5JYpJa9TiS53DN/GHN9ttcBJKIcwUefI%3D"},{"key":"shuqiscbody14","val":""},{"key":"shuqiydbody14","val":""},{"key":"shuqiqdbody14","val":"clientTimestamp=1624074620&position=501&userId=2130260551&signInType=1&wua=HIVW_w58%2F7d%2BV211P645nIb8WxD54R7gIl6sGT7huZURrXVWC5Zzlps4lPJeIQRM0hdtVm4FuDCkPAxTpbGytKbjUCLvvNDXuUWFfHK80Vpy%2B08j%2FD7qlbeGjoN1GU1WAUaEWcCxaAL8LdrB243tMdfXVsSdVjSi9ILNcZ9ZIta%2Fnvh93whhJ3lFJ2k9l%2FvKMw48O6sGwLkPHRrlrm9XEiD%2FGWqXEwWlVeHXVaRmho23057M%3D&ua=&miniWua=HHnB_D6%2FpRiY%2FqMpYMGbBVVtB9B47RvIs0XoPGMfa6JNxzdw%3D&umidtoken=YM1pZTWXtOMDAAIEPLjwETyF&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&sign=e3aada6a45e2063413ed2c4435045582&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.1.3%26utdid%3DYM1pZTWXtOMDAAIEPLjwETyF%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2130260551%26sn%3D8B0050996D41ADD73EAFF539F2D224E6DCA3B2D0%26umidtoken%3DYM1pZTWXtOMDAAIEPLjwETyF%26msv%3D8.0.0%26brand%3DApple%26imei%3D80956C57EEFF548F077F929EB5E136890EEB9749%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DCD1E6321-7416-4734-8327-C0CAC222A42B"},{"key":"shuqirwbody14","val":"serviceWorkerOn=1&stopPullRefresh=1&from=ShuqiTab&upf=20368&sdk=13.1.3&utdid=YM1pZTWXtOMDAAIEPLjwETyF&ustatus=0&first_placeid=111111&net_env=3g&placeid=111111&user_id=2130260551&sn=8B0050996D41ADD73EAFF539F2D224E6DCA3B2D0&umidtoken=YM1pZTWXtOMDAAIEPLjwETyF&msv=8.0.0&brand=Apple&imei=80956C57EEFF548F077F929EB5E136890EEB9749&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&session=&skinColor=23B383&platform=1&ver=210301&mod=UnknowniPad&statusBarHeight=44.000000&skinVersion=1&wh=1242x2688&soft_id=21&utype=pre_vip&skinId=999&idfa=CD1E6321-7416-4734-8327-C0CAC222A42B&params=%7B%22resources%22%3A%7B%22ShuqiBsDailyTask%22%3A%7B%7D%7D%7D&userId=2130260551&placeId=111111&timestamp=1624074636&sqSv=1.0&sign=07f2c4ebe4cc4e09b99f5c9d57429d40&key=sq_h5_gateway&_public="},{"key":"shuqifxbody14","val":""},{"key":"shuqisprwurl14","val":"https://ocean.shuqireader.com/api/ad/adserver/v1/api/getAdInfo?appVer=4.3.6.0&placeId=111111&platform=iOS&requestSrc=h5&resourceId=626&timestamp=1624074654&user_id=2130260551&sqSv=1.0&sign=b82aacd47b9c04556ed2c18b828d8c2e&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.1.3%26utdid%3DYM1pZTWXtOMDAAIEPLjwETyF%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2130260551%26sn%3D8B0050996D41ADD73EAFF539F2D224E6DCA3B2D0%26umidtoken%3DYM1pZTWXtOMDAAIEPLjwETyF%26msv%3D8.0.0%26brand%3DApple%26imei%3D80956C57EEFF548F077F929EB5E136890EEB9749%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DCD1E6321-7416-4734-8327-C0CAC222A42B"},{"key":"shuqijlbody14","val":"requestSrc=h5&userId=2130260551&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624074636&sqSv=1.0&sign=7e1c213530c1ac67ee05935c02bc623c&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.1.3%26utdid%3DYM1pZTWXtOMDAAIEPLjwETyF%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2130260551%26sn%3D8B0050996D41ADD73EAFF539F2D224E6DCA3B2D0%26umidtoken%3DYM1pZTWXtOMDAAIEPLjwETyF%26msv%3D8.0.0%26brand%3DApple%26imei%3D80956C57EEFF548F077F929EB5E136890EEB9749%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DCD1E6321-7416-4734-8327-C0CAC222A42B"},{"key":"shuqisqjlbody14","val":"src=&userId=2130260551&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624074633&sqSv=1.0&sign=c2a195da03644b9c264af8c1902eee87&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.1.3%26utdid%3DYM1pZTWXtOMDAAIEPLjwETyF%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2130260551%26sn%3D8B0050996D41ADD73EAFF539F2D224E6DCA3B2D0%26umidtoken%3DYM1pZTWXtOMDAAIEPLjwETyF%26msv%3D8.0.0%26brand%3DApple%26imei%3D80956C57EEFF548F077F929EB5E136890EEB9749%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DCD1E6321-7416-4734-8327-C0CAC222A42B"},{"key":"shuqicjyurl14","val":"https://ocean.shuqireader.com/api/activity/activity/v1/lottery/info?timestamp=1624074658&userId=2130260551&activityId=311&sqSv=1.0&sign=e75cb132916d7d2e6f395c58a589f9e9&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.1.3%26utdid%3DYM1pZTWXtOMDAAIEPLjwETyF%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2130260551%26sn%3D8B0050996D41ADD73EAFF539F2D224E6DCA3B2D0%26umidtoken%3DYM1pZTWXtOMDAAIEPLjwETyF%26msv%3D8.0.0%26brand%3DApple%26imei%3D80956C57EEFF548F077F929EB5E136890EEB9749%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DCD1E6321-7416-4734-8327-C0CAC222A42B"},{"key":"shuqicjcsbody14","val":"_public=skinId%3D999%26idfa%3DCD1E6321-7416-4734-8327-C0CAC222A42B%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26umidtoken%3DYM1pZTWXtOMDAAIEPLjwETyF%26user_id%3D2130260551%26sn%3D8B0050996D41ADD73EAFF539F2D224E6DCA3B2D0%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D80956C57EEFF548F077F929EB5E136890EEB9749%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYM1pZTWXtOMDAAIEPLjwETyF%26utype%3Dpre_vip%26sdk%3D13.1.3&deliveryId=711&key=sq_app_ad&miniWua=HHnB_RoBLvKVNmIrPf9AwTuBw2f7U/l4/dyLaxakws514%2Bmg%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=703&sign=4FC43F62C8509D7F97C40CCE59D61C1B&timestamp=1624074637&userId=2130260551&user_id=2130260551&wua=HIVW_vzVNLUQmNt5LvoJZM%2BorgsgrlJUaakVj6lBLYxoujIlI61%2Bnsm364i42eGh05VzsXsSZaGSuhjeqfSAa3TDxYfDSdgopA0JAc12Z/V9Ta1tQbkPdlHpaGWZllSPS24kiaER%2BsXlNK9ct/eFa5AFzFSX6IarV2EqWScgZE5PMCyPfyqCSZl9FswLSzFNlX9S9aZJrvCzic0YtBPJGN%2BCeTNPnIkTXGvC9hb8DT%2BSf7Zg%3D"},{"key":"shuqicjbody14","val":"wua=HIVW_eVQvG8fnItdinMVlI6nLFQaDW5CwiYQWAxS6P2eIw0DaafRaHkn9SuucnbwfrEJtKKyhz5eaZ0l0UhRt7hWGviOFhKqBI3FBrTO%2BOd%2BOdDAELByN5xZpDDeAZ3vZsmbwnfex3DnqhKDTMZUz1DjdcNY8DfpW%2FcFr2b%2FnTcdlwT8T%2FgRWxdGP%2F3GwTW73yLquLRcB8VIopJv2uu6S8m9H3s7kfLxzbgT4zF9roKz5pUU%3D&ua=&userId=2130260551&umidtoken=YM1pZTWXtOMDAAIEPLjwETyF&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&asac=2A20C07RJ9F51AOEFSNHDR&timestamp=1624074643&activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&sqSv=1.0&sign=2cce50f22e7ca0ca70c4600a7ecf292f&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.1.3%26utdid%3DYM1pZTWXtOMDAAIEPLjwETyF%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2130260551%26sn%3D8B0050996D41ADD73EAFF539F2D224E6DCA3B2D0%26umidtoken%3DYM1pZTWXtOMDAAIEPLjwETyF%26msv%3D8.0.0%26brand%3DApple%26imei%3D80956C57EEFF548F077F929EB5E136890EEB9749%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DCD1E6321-7416-4734-8327-C0CAC222A42B"},{"key":"shuqijsspbody14","val":""},{"key":"shuqijsydurl14","val":""},{"key":"shuqijsydbody14","val":""},{"key":"shuqijsqdbody14","val":""},{"key":"shuqijsqdspyurl14","val":""},{"key":"shuqijsqdspbody14","val":""},{"key":"shuqijsrwbody14","val":""},{"key":"shuqijsfxbody14","val":""},{"key":"shuqijsbookurl14","val":""},{"key":"shuqijsbookbody14","val":""},{"key":"shuqijssprwurl14","val":""},{"key":"shuqiuserurl15","val":"https://ocean.shuqireader.com/api/jaccount/accountapi/v1/sapi/account/getBindinfo?userId=2130062306&sqSv=1.0&timestamp=1624074736&sign=0d59b3f21e57fcde3baaa52d4e85cd3d&key=sq_h5_gateway"},{"key":"shuqisyurl15","val":"https://render.shuqireader.com/load/resource?sdk=13.1&utdid=YM1Qr0YPWz0DAGcX65IMOSSt&ustatus=0&first_placeid=111111&net_env=wifi&placeid=111111&user_id=2130062306&sn=C21CE7AFCD681A92CF90950DD07F1246D9DA9D14&umidtoken=YM1Qr0YPWz0DAGcX65IMOSSt&msv=8.0.0&brand=Apple&imei=FBABE7B348CB70CBD0598086B058A43F84ECA11E&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&session=&skinColor=23B383&platform=iOS&ver=210301&mod=UnknowniPad&statusBarHeight=44.000000&skinVersion=1&wh=1242x2688&soft_id=21&utype=pre_vip&skinId=999&idfa=E11C92C1-D769-4D98-B936-2EF85C6ED4FD"},{"key":"shuqisybody15","val":"appVer=4.3.6.0&imei=FBABE7B348CB70CBD0598086B058A43F84ECA11E&isNewUser=1&params=%7B%22resources%22%3A%7B%22ShuqiVipEntry%22%3A%7B%7D%2C%22personalCardConfig%22%3A%7B%7D%7D%7D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=5e6e1acd8ab5dadd06335adfb5482ff4&sn=C21CE7AFCD681A92CF90950DD07F1246D9DA9D14&soft_id=21&timestamp=1624074674&user_id=2130062306&ver=210301"},{"key":"shuqispbody15","val":"_public=skinId%3D999%26idfa%3DE11C92C1-D769-4D98-B936-2EF85C6ED4FD%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26umidtoken%3DYM1Qr0YPWz0DAGcX65IMOSSt%26user_id%3D2130062306%26sn%3DC21CE7AFCD681A92CF90950DD07F1246D9DA9D14%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3DFBABE7B348CB70CBD0598086B058A43F84ECA11E%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYM1Qr0YPWz0DAGcX65IMOSSt%26utype%3Dpre_vip%26sdk%3D13.1&deliveryId=525&key=sq_app_ad&miniWua=HHnB_B9nyC1yiCy0YTvctDzVeYwceXHk7DIRf1lWf6prZ8fU%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=626&sign=C43A2A3B86EA28FE908CF19126A5175A&timestamp=1624074687&userId=2130062306&user_id=2130062306&wua=HIVW_lwZ2FiT/tqwQgTV5Wbxv/pWPNyuKf9irwMMaxeZiGQWcoYmdzw/u8/U9Z2rbCaiDF3VLxoLtNNXmeQ/bpHY7/5HdOPEkzOFN5/0uBPYIcONSL0BNCgevcwy7Wwa6MNiB%2BdDfRaXqVpTllZOnXTABVPr9MiE74zMIrI2cRYb7tJREzKkG2nWI3fCXqb1mykfW6sjHjFIK7vTd6Ux3kbZeJwOaW7XgiMKH1z8%2B4oXxJGA%3D"},{"key":"shuqiscbody15","val":""},{"key":"shuqiydbody15","val":""},{"key":"shuqiqdbody15","val":"clientTimestamp=1624074705&position=501&userId=2130062306&signInType=1&wua=HIVW_Vet%2FhbZJ63U%2Bet1dx%2BHoPodFe4lRy5ySko8CwUh7VQulD8xNEtTWA0vFYEcqpo48trk%2F0Q%2FjhHH36WXuWv9Z3HmoJpMZDxhI%2F%2BkXyknXgHbD4cvWw3W2m%2BW7PEYtLW0Bz5M%2FHKIL%2BjBrHDxLWj5S2UUFVoaTQIJzspclPPZTTwsxIlhsUu5rY8Hw7v2%2B9zDwTJEXHyIDJ55juGBPMI2d0RgWtciqnkblNV%2BojIihoMY%3D&ua=&miniWua=HHnB_T01izALSnNQNKwVb7neR9DJzwkw3a8zhS06s3sAbucU%3D&umidtoken=YM1Qr0YPWz0DAGcX65IMOSSt&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&sign=6a236c300b78791c4c397b49157be479&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.1%26utdid%3DYM1Qr0YPWz0DAGcX65IMOSSt%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2130062306%26sn%3DC21CE7AFCD681A92CF90950DD07F1246D9DA9D14%26umidtoken%3DYM1Qr0YPWz0DAGcX65IMOSSt%26msv%3D8.0.0%26brand%3DApple%26imei%3DFBABE7B348CB70CBD0598086B058A43F84ECA11E%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DE11C92C1-D769-4D98-B936-2EF85C6ED4FD"},{"key":"shuqirwbody15","val":"serviceWorkerOn=1&stopPullRefresh=1&from=ShuqiTab&upf=20368&sdk=13.1&utdid=YM1Qr0YPWz0DAGcX65IMOSSt&ustatus=0&first_placeid=111111&net_env=wifi&placeid=111111&user_id=2130062306&sn=C21CE7AFCD681A92CF90950DD07F1246D9DA9D14&umidtoken=YM1Qr0YPWz0DAGcX65IMOSSt&msv=8.0.0&brand=Apple&imei=FBABE7B348CB70CBD0598086B058A43F84ECA11E&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&session=&skinColor=23B383&platform=1&ver=210301&mod=UnknowniPad&statusBarHeight=44.000000&skinVersion=1&wh=1242x2688&soft_id=21&utype=pre_vip&skinId=999&idfa=E11C92C1-D769-4D98-B936-2EF85C6ED4FD&params=%7B%22resources%22%3A%7B%22ShuqiBsDailyTask%22%3A%7B%7D%7D%7D&userId=2130062306&placeId=111111&timestamp=1624074713&sqSv=1.0&sign=e327ce1e1f86585850a16e7a97708690&key=sq_h5_gateway&_public="},{"key":"shuqifxbody15","val":""},{"key":"shuqisprwurl15","val":"https://ocean.shuqireader.com/api/ad/adserver/v1/api/getAdInfo?appVer=4.3.6.0&placeId=111111&platform=iOS&requestSrc=h5&resourceId=626&timestamp=1624074732&user_id=2130062306&sqSv=1.0&sign=f09f5e1e309d2af79d511631e89147b5&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.1%26utdid%3DYM1Qr0YPWz0DAGcX65IMOSSt%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2130062306%26sn%3DC21CE7AFCD681A92CF90950DD07F1246D9DA9D14%26umidtoken%3DYM1Qr0YPWz0DAGcX65IMOSSt%26msv%3D8.0.0%26brand%3DApple%26imei%3DFBABE7B348CB70CBD0598086B058A43F84ECA11E%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DE11C92C1-D769-4D98-B936-2EF85C6ED4FD"},{"key":"shuqijlbody15","val":"requestSrc=h5&userId=2130062306&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624074713&sqSv=1.0&sign=e92e0ea7b9e35d33f60aec8092b3ef2c&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.1%26utdid%3DYM1Qr0YPWz0DAGcX65IMOSSt%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2130062306%26sn%3DC21CE7AFCD681A92CF90950DD07F1246D9DA9D14%26umidtoken%3DYM1Qr0YPWz0DAGcX65IMOSSt%26msv%3D8.0.0%26brand%3DApple%26imei%3DFBABE7B348CB70CBD0598086B058A43F84ECA11E%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DE11C92C1-D769-4D98-B936-2EF85C6ED4FD"},{"key":"shuqisqjlbody15","val":"src=&userId=2130062306&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624074711&sqSv=1.0&sign=70437f0780ef38649609aadc8b302a93&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.1%26utdid%3DYM1Qr0YPWz0DAGcX65IMOSSt%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2130062306%26sn%3DC21CE7AFCD681A92CF90950DD07F1246D9DA9D14%26umidtoken%3DYM1Qr0YPWz0DAGcX65IMOSSt%26msv%3D8.0.0%26brand%3DApple%26imei%3DFBABE7B348CB70CBD0598086B058A43F84ECA11E%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DE11C92C1-D769-4D98-B936-2EF85C6ED4FD"},{"key":"shuqicjyurl15","val":"https://ocean.shuqireader.com/api/activity/activity/v1/lottery/info?timestamp=1624074737&userId=2130062306&activityId=311&sqSv=1.0&sign=8f90e42aa220327d8fecf37ab642ee42&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.1%26utdid%3DYM1Qr0YPWz0DAGcX65IMOSSt%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2130062306%26sn%3DC21CE7AFCD681A92CF90950DD07F1246D9DA9D14%26umidtoken%3DYM1Qr0YPWz0DAGcX65IMOSSt%26msv%3D8.0.0%26brand%3DApple%26imei%3DFBABE7B348CB70CBD0598086B058A43F84ECA11E%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DE11C92C1-D769-4D98-B936-2EF85C6ED4FD"},{"key":"shuqicjcsbody15","val":"_public=skinId%3D999%26idfa%3DE11C92C1-D769-4D98-B936-2EF85C6ED4FD%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26umidtoken%3DYM1Qr0YPWz0DAGcX65IMOSSt%26user_id%3D2130062306%26sn%3DC21CE7AFCD681A92CF90950DD07F1246D9DA9D14%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3DFBABE7B348CB70CBD0598086B058A43F84ECA11E%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYM1Qr0YPWz0DAGcX65IMOSSt%26utype%3Dpre_vip%26sdk%3D13.1&deliveryId=711&key=sq_app_ad&miniWua=HHnB_iCwvLUoMED3K%2BZaGxdjtobnokHU6xpWcat7rLQ/qahc%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=703&sign=7F0299D40B47A33921566BA6DCA821F2&timestamp=1624074718&userId=2130062306&user_id=2130062306&wua=HIVW_ISYTxBiAp8tgnXr0zRWxBTodZZfhVKXAc2OsNNTcTF8tJnn6eOA6roB/MntHNZ8EmWe4eMFTKGe4IlRZZ77F69GdMrzqN578Z9lrF5mK46QnlTIfmHlfdSCVurc3F5S2/GLikXRfjqV6hBlP98V6yVLDU%2Bu8t5gKrlY4kooYEYXX2Rx/t3J7wXIjEJKPmKrOWooj%2BRjyF0BCrUmwSsBo3i9PrKoW7rvquwRljRyD/TU%3D"},{"key":"shuqicjbody15","val":"wua=HIVW_uWWC6CNLniVIAEQNXoSCtu5g8bS%2B2g5KrlfPtiOb8Bg6IFT5dQKwLuRaYMq6X9cN3IrTKCUdGUkT99nLlZZiE15WdYkn93s%2FMEcQFo7cpOTYjVpbvKxHjDDd4klkMIVB%2FPKL24JvrKROyQlBqm%2B5FU%2Bt%2BcnWODiNiy0fxg6Pwix0VKazb5SyIS8BC2NP%2Binw8pB5CAMNc%2F1z197MsUNl0YKOnYJcOExbOajcz%2FkIsg0%3D&ua=&userId=2130062306&umidtoken=YM1Qr0YPWz0DAGcX65IMOSSt&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&asac=2A20C07RJ9F51AOEFSNHDR&timestamp=1624074722&activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&sqSv=1.0&sign=a09450f9b53181745d76eb1d73ddc467&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.1%26utdid%3DYM1Qr0YPWz0DAGcX65IMOSSt%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2130062306%26sn%3DC21CE7AFCD681A92CF90950DD07F1246D9DA9D14%26umidtoken%3DYM1Qr0YPWz0DAGcX65IMOSSt%26msv%3D8.0.0%26brand%3DApple%26imei%3DFBABE7B348CB70CBD0598086B058A43F84ECA11E%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DE11C92C1-D769-4D98-B936-2EF85C6ED4FD"},{"key":"shuqijsspbody15","val":""},{"key":"shuqijsydurl15","val":""},{"key":"shuqijsydbody15","val":""},{"key":"shuqijsqdbody15","val":""},{"key":"shuqijsqdspyurl15","val":""},{"key":"shuqijsqdspbody15","val":""},{"key":"shuqijsrwbody15","val":""},{"key":"shuqijsfxbody15","val":""},{"key":"shuqijsbookurl15","val":""},{"key":"shuqijsbookbody15","val":""},{"key":"shuqijssprwurl15","val":""},{"key":"shuqiuserurl16","val":""},{"key":"shuqisyurl16","val":""},{"key":"shuqisybody16","val":""},{"key":"shuqispbody16","val":""},{"key":"shuqiscbody16","val":""},{"key":"shuqiydbody16","val":""},{"key":"shuqiqdbody16","val":""},{"key":"shuqirwbody16","val":""},{"key":"shuqifxbody16","val":""},{"key":"shuqisprwurl16","val":""},{"key":"shuqijlbody16","val":""},{"key":"shuqisqjlbody16","val":""},{"key":"shuqicjyurl16","val":""},{"key":"shuqicjcsbody16","val":""},{"key":"shuqicjbody16","val":""},{"key":"shuqijsspbody16","val":""},{"key":"shuqijsydurl16","val":""},{"key":"shuqijsydbody16","val":""},{"key":"shuqijsqdbody16","val":""},{"key":"shuqijsqdspyurl16","val":""},{"key":"shuqijsqdspbody16","val":""},{"key":"shuqijsrwbody16","val":""},{"key":"shuqijsfxbody16","val":""},{"key":"shuqijsbookurl16","val":""},{"key":"shuqijsbookbody16","val":""},{"key":"shuqijssprwurl16","val":""},{"key":"shuqiuserurl17","val":""},{"key":"shuqisyurl17","val":""},{"key":"shuqisybody17","val":""},{"key":"shuqispbody17","val":""},{"key":"shuqiscbody17","val":""},{"key":"shuqiydbody17","val":""},{"key":"shuqiqdbody17","val":""},{"key":"shuqirwbody17","val":""},{"key":"shuqifxbody17","val":""},{"key":"shuqisprwurl17","val":""},{"key":"shuqijlbody17","val":""},{"key":"shuqisqjlbody17","val":""},{"key":"shuqicjyurl17","val":""},{"key":"shuqicjcsbody17","val":""},{"key":"shuqicjbody17","val":""},{"key":"shuqijsspbody17","val":""},{"key":"shuqijsydurl17","val":""},{"key":"shuqijsydbody17","val":""},{"key":"shuqijsqdbody17","val":""},{"key":"shuqijsqdspyurl17","val":""},{"key":"shuqijsqdspbody17","val":""},{"key":"shuqijsrwbody17","val":""},{"key":"shuqijsfxbody17","val":""},{"key":"shuqijsbookurl17","val":""},{"key":"shuqijsbookbody17","val":""},{"key":"shuqijssprwurl17","val":""},{"key":"shuqiuserurl18","val":""},{"key":"shuqisyurl18","val":""},{"key":"shuqisybody18","val":""},{"key":"shuqispbody18","val":""},{"key":"shuqiscbody18","val":""},{"key":"shuqiydbody18","val":""},{"key":"shuqiqdbody18","val":""},{"key":"shuqirwbody18","val":""},{"key":"shuqifxbody18","val":""},{"key":"shuqisprwurl18","val":""},{"key":"shuqijlbody18","val":""},{"key":"shuqisqjlbody18","val":""},{"key":"shuqicjyurl18","val":""},{"key":"shuqicjcsbody18","val":""},{"key":"shuqicjbody18","val":""},{"key":"shuqijsspbody18","val":""},{"key":"shuqijsydurl18","val":""},{"key":"shuqijsydbody18","val":""},{"key":"shuqijsqdbody18","val":""},{"key":"shuqijsqdspyurl18","val":""},{"key":"shuqijsqdspbody18","val":""},{"key":"shuqijsrwbody18","val":""},{"key":"shuqijsfxbody18","val":""},{"key":"shuqijsbookurl18","val":""},{"key":"shuqijsbookbody18","val":""},{"key":"shuqijssprwurl18","val":""},{"key":"shuqiuserurl19","val":""},{"key":"shuqisyurl19","val":""},{"key":"shuqisybody19","val":""},{"key":"shuqispbody19","val":""},{"key":"shuqiscbody19","val":""},{"key":"shuqiydbody19","val":""},{"key":"shuqiqdbody19","val":""},{"key":"shuqirwbody19","val":""},{"key":"shuqifxbody19","val":""},{"key":"shuqisprwurl19","val":""},{"key":"shuqijlbody19","val":""},{"key":"shuqisqjlbody19","val":""},{"key":"shuqicjyurl19","val":""},{"key":"shuqicjcsbody19","val":""},{"key":"shuqicjbody19","val":""},{"key":"shuqijsspbody19","val":""},{"key":"shuqijsydurl19","val":""},{"key":"shuqijsydbody19","val":""},{"key":"shuqijsqdbody19","val":""},{"key":"shuqijsqdspyurl19","val":""},{"key":"shuqijsqdspbody19","val":""},{"key":"shuqijsrwbody19","val":""},{"key":"shuqijsfxbody19","val":""},{"key":"shuqijsbookurl19","val":""},{"key":"shuqijsbookbody19","val":""},{"key":"shuqijssprwurl19","val":""},{"key":"shuqiuserurl20","val":""},{"key":"shuqisyurl20","val":""},{"key":"shuqisybody20","val":""},{"key":"shuqispbody20","val":""},{"key":"shuqiscbody20","val":""},{"key":"shuqiydbody20","val":""},{"key":"shuqiqdbody20","val":""},{"key":"shuqirwbody20","val":""},{"key":"shuqifxbody20","val":""},{"key":"shuqisprwurl20","val":""},{"key":"shuqijlbody20","val":""},{"key":"shuqisqjlbody20","val":""},{"key":"shuqicjyurl20","val":""},{"key":"shuqicjcsbody20","val":""},{"key":"shuqicjbody20","val":""},{"key":"shuqijsspbody20","val":""},{"key":"shuqijsydurl20","val":""},{"key":"shuqijsydbody20","val":""},{"key":"shuqijsqdbody20","val":""},{"key":"shuqijsqdspyurl20","val":""},{"key":"shuqijsqdspbody20","val":""},{"key":"shuqijsrwbody20","val":""},{"key":"shuqijsfxbody20","val":""},{"key":"shuqijsbookurl20","val":""},{"key":"shuqijsbookbody20","val":""},{"key":"shuqijssprwurl20","val":""}],"sessions":[],"isLoaded":true};
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
