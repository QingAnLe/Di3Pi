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
const COOKIE = {"id":"shuqi","name":"书旗小说APP","keys":["shuqiuserurl","shuqisyurl","shuqisybody","shuqispbody","shuqiscbody","shuqiydbody","shuqiqdbody","shuqirwbody","shuqifxbody","shuqisprwurl","shuqijlbody","shuqisqjlbody","shuqicjyurl","shuqicjcsbody","shuqicjbody","shuqijsspbody","shuqijsydurl","shuqijsydbody","shuqijsqdbody","shuqijsqdspyurl","shuqijsqdspbody","shuqijsrwbody","shuqijsfxbody","shuqijsbookurl","shuqijsbookbody","shuqijssprwurl","shuqiuserurl2","shuqisyurl2","shuqisybody2","shuqispbody2","shuqiscbody2","shuqiydbody2","shuqiqdbody2","shuqirwbody2","shuqifxbody2","shuqisprwurl2","shuqijlbody2","shuqisqjlbody2","shuqicjyurl2","shuqicjcsbody2","shuqicjbody2","shuqijsspbody2","shuqijsydurl2","shuqijsydbody2","shuqijsqdbody2","shuqijsqdspyurl2","shuqijsqdspbody2","shuqijsrwbody2","shuqijsfxbody2","shuqijsbookurl2","shuqijsbookbody2","shuqijssprwurl2","shuqiuserurl3","shuqisyurl3","shuqisybody3","shuqispbody3","shuqiscbody3","shuqiydbody3","shuqiqdbody3","shuqirwbody3","shuqifxbody3","shuqisprwurl3","shuqijlbody3","shuqisqjlbody3","shuqicjyurl3","shuqicjcsbody3","shuqicjbody3","shuqijsspbody3","shuqijsydurl3","shuqijsydbody3","shuqijsqdbody3","shuqijsqdspyurl3","shuqijsqdspbody3","shuqijsrwbody3","shuqijsfxbody3","shuqijsbookurl3","shuqijsbookbody3","shuqijssprwurl3","shuqiuserurl4","shuqisyurl4","shuqisybody4","shuqispbody4","shuqiscbody4","shuqiydbody4","shuqiqdbody4","shuqirwbody4","shuqifxbody4","shuqisprwurl4","shuqijlbody4","shuqisqjlbody4","shuqicjyurl4","shuqicjcsbody4","shuqicjbody4","shuqijsspbody4","shuqijsydurl4","shuqijsydbody4","shuqijsqdbody4","shuqijsqdspyurl4","shuqijsqdspbody4","shuqijsrwbody4","shuqijsfxbody4","shuqijsbookurl4","shuqijsbookbody4","shuqijssprwurl4","shuqiuserurl5","shuqisyurl5","shuqisybody5","shuqispbody5","shuqiscbody5","shuqiydbody5","shuqiqdbody5","shuqirwbody5","shuqifxbody5","shuqisprwurl5","shuqijlbody5","shuqisqjlbody5","shuqicjyurl5","shuqicjcsbody5","shuqicjbody5","shuqijsspbody5","shuqijsydurl5","shuqijsydbody5","shuqijsqdbody5","shuqijsqdspyurl5","shuqijsqdspbody5","shuqijsrwbody5","shuqijsfxbody5","shuqijsbookurl5","shuqijsbookbody5","shuqijssprwurl5","shuqiuserurl6","shuqisyurl6","shuqisybody6","shuqispbody6","shuqiscbody6","shuqiydbody6","shuqiqdbody6","shuqirwbody6","shuqifxbody6","shuqisprwurl6","shuqijlbody6","shuqisqjlbody6","shuqicjyurl6","shuqicjcsbody6","shuqicjbody6","shuqijsspbody6","shuqijsydurl6","shuqijsydbody6","shuqijsqdbody6","shuqijsqdspyurl6","shuqijsqdspbody6","shuqijsrwbody6","shuqijsfxbody6","shuqijsbookurl6","shuqijsbookbody6","shuqijssprwurl6","shuqiuserurl7","shuqisyurl7","shuqisybody7","shuqispbody7","shuqiscbody7","shuqiydbody7","shuqiqdbody7","shuqirwbody7","shuqifxbody7","shuqisprwurl7","shuqijlbody7","shuqisqjlbody7","shuqicjyurl7","shuqicjcsbody7","shuqicjbody7","shuqijsspbody7","shuqijsydurl7","shuqijsydbody7","shuqijsqdbody7","shuqijsqdspyurl7","shuqijsqdspbody7","shuqijsrwbody7","shuqijsfxbody7","shuqijsbookurl7","shuqijsbookbody7","shuqijssprwurl7","shuqiuserurl8","shuqisyurl8","shuqisybody8","shuqispbody8","shuqiscbody8","shuqiydbody8","shuqiqdbody8","shuqirwbody8","shuqifxbody8","shuqisprwurl8","shuqijlbody8","shuqisqjlbody8","shuqicjyurl8","shuqicjcsbody8","shuqicjbody8","shuqijsspbody8","shuqijsydurl8","shuqijsydbody8","shuqijsqdbody8","shuqijsqdspyurl8","shuqijsqdspbody8","shuqijsrwbody8","shuqijsfxbody8","shuqijsbookurl8","shuqijsbookbody8","shuqijssprwurl8","shuqiuserurl9","shuqisyurl9","shuqisybody9","shuqispbody9","shuqiscbody9","shuqiydbody9","shuqiqdbody9","shuqirwbody9","shuqifxbody9","shuqisprwurl9","shuqijlbody9","shuqisqjlbody9","shuqicjyurl9","shuqicjcsbody9","shuqicjbody9","shuqijsspbody9","shuqijsydurl9","shuqijsydbody9","shuqijsqdbody9","shuqijsqdspyurl9","shuqijsqdspbody9","shuqijsrwbody9","shuqijsfxbody9","shuqijsbookurl9","shuqijsbookbody9","shuqijssprwurl9","shuqiuserurl10","shuqisyurl10","shuqisybody10","shuqispbody10","shuqiscbody10","shuqiydbody10","shuqiqdbody10","shuqirwbody10","shuqifxbody10","shuqisprwurl10","shuqijlbody10","shuqisqjlbody10","shuqicjyurl10","shuqicjcsbody10","shuqicjbody10","shuqijsspbody10","shuqijsydurl10","shuqijsydbody10","shuqijsqdbody10","shuqijsqdspyurl10","shuqijsqdspbody10","shuqijsrwbody10","shuqijsfxbody10","shuqijsbookurl10","shuqijsbookbody10","shuqijssprwurl10","shuqiuserurl11","shuqisyurl11","shuqisybody11","shuqispbody11","shuqiscbody11","shuqiydbody11","shuqiqdbody11","shuqirwbody11","shuqifxbody11","shuqisprwurl11","shuqijlbody11","shuqisqjlbody11","shuqicjyurl11","shuqicjcsbody11","shuqicjbody11","shuqijsspbody11","shuqijsydurl11","shuqijsydbody11","shuqijsqdbody11","shuqijsqdspyurl11","shuqijsqdspbody11","shuqijsrwbody11","shuqijsfxbody11","shuqijsbookurl11","shuqijsbookbody11","shuqijssprwurl11","shuqiuserurl12","shuqisyurl12","shuqisybody12","shuqispbody12","shuqiscbody12","shuqiydbody12","shuqiqdbody12","shuqirwbody12","shuqifxbody12","shuqisprwurl12","shuqijlbody12","shuqisqjlbody12","shuqicjyurl12","shuqicjcsbody12","shuqicjbody12","shuqijsspbody12","shuqijsydurl12","shuqijsydbody12","shuqijsqdbody12","shuqijsqdspyurl12","shuqijsqdspbody12","shuqijsrwbody12","shuqijsfxbody12","shuqijsbookurl12","shuqijsbookbody12","shuqijssprwurl12","shuqiuserurl13","shuqisyurl13","shuqisybody13","shuqispbody13","shuqiscbody13","shuqiydbody13","shuqiqdbody13","shuqirwbody13","shuqifxbody13","shuqisprwurl13","shuqijlbody13","shuqisqjlbody13","shuqicjyurl13","shuqicjcsbody13","shuqicjbody13","shuqijsspbody13","shuqijsydurl13","shuqijsydbody13","shuqijsqdbody13","shuqijsqdspyurl13","shuqijsqdspbody13","shuqijsrwbody13","shuqijsfxbody13","shuqijsbookurl13","shuqijsbookbody13","shuqijssprwurl13","shuqiuserurl14","shuqisyurl14","shuqisybody14","shuqispbody14","shuqiscbody14","shuqiydbody14","shuqiqdbody14","shuqirwbody14","shuqifxbody14","shuqisprwurl14","shuqijlbody14","shuqisqjlbody14","shuqicjyurl14","shuqicjcsbody14","shuqicjbody14","shuqijsspbody14","shuqijsydurl14","shuqijsydbody14","shuqijsqdbody14","shuqijsqdspyurl14","shuqijsqdspbody14","shuqijsrwbody14","shuqijsfxbody14","shuqijsbookurl14","shuqijsbookbody14","shuqijssprwurl14","shuqiuserurl15","shuqisyurl15","shuqisybody15","shuqispbody15","shuqiscbody15","shuqiydbody15","shuqiqdbody15","shuqirwbody15","shuqifxbody15","shuqisprwurl15","shuqijlbody15","shuqisqjlbody15","shuqicjyurl15","shuqicjcsbody15","shuqicjbody15","shuqijsspbody15","shuqijsydurl15","shuqijsydbody15","shuqijsqdbody15","shuqijsqdspyurl15","shuqijsqdspbody15","shuqijsrwbody15","shuqijsfxbody15","shuqijsbookurl15","shuqijsbookbody15","shuqijssprwurl15","shuqiuserurl16","shuqisyurl16","shuqisybody16","shuqispbody16","shuqiscbody16","shuqiydbody16","shuqiqdbody16","shuqirwbody16","shuqifxbody16","shuqisprwurl16","shuqijlbody16","shuqisqjlbody16","shuqicjyurl16","shuqicjcsbody16","shuqicjbody16","shuqijsspbody16","shuqijsydurl16","shuqijsydbody16","shuqijsqdbody16","shuqijsqdspyurl16","shuqijsqdspbody16","shuqijsrwbody16","shuqijsfxbody16","shuqijsbookurl16","shuqijsbookbody16","shuqijssprwurl16","shuqiuserurl17","shuqisyurl17","shuqisybody17","shuqispbody17","shuqiscbody17","shuqiydbody17","shuqiqdbody17","shuqirwbody17","shuqifxbody17","shuqisprwurl17","shuqijlbody17","shuqisqjlbody17","shuqicjyurl17","shuqicjcsbody17","shuqicjbody17","shuqijsspbody17","shuqijsydurl17","shuqijsydbody17","shuqijsqdbody17","shuqijsqdspyurl17","shuqijsqdspbody17","shuqijsrwbody17","shuqijsfxbody17","shuqijsbookurl17","shuqijsbookbody17","shuqijssprwurl17","shuqiuserurl18","shuqisyurl18","shuqisybody18","shuqispbody18","shuqiscbody18","shuqiydbody18","shuqiqdbody18","shuqirwbody18","shuqifxbody18","shuqisprwurl18","shuqijlbody18","shuqisqjlbody18","shuqicjyurl18","shuqicjcsbody18","shuqicjbody18","shuqijsspbody18","shuqijsydurl18","shuqijsydbody18","shuqijsqdbody18","shuqijsqdspyurl18","shuqijsqdspbody18","shuqijsrwbody18","shuqijsfxbody18","shuqijsbookurl18","shuqijsbookbody18","shuqijssprwurl18","shuqiuserurl19","shuqisyurl19","shuqisybody19","shuqispbody19","shuqiscbody19","shuqiydbody19","shuqiqdbody19","shuqirwbody19","shuqifxbody19","shuqisprwurl19","shuqijlbody19","shuqisqjlbody19","shuqicjyurl19","shuqicjcsbody19","shuqicjbody19","shuqijsspbody19","shuqijsydurl19","shuqijsydbody19","shuqijsqdbody19","shuqijsqdspyurl19","shuqijsqdspbody19","shuqijsrwbody19","shuqijsfxbody19","shuqijsbookurl19","shuqijsbookbody19","shuqijssprwurl19","shuqiuserurl20","shuqisyurl20","shuqisybody20","shuqispbody20","shuqiscbody20","shuqiydbody20","shuqiqdbody20","shuqirwbody20","shuqifxbody20","shuqisprwurl20","shuqijlbody20","shuqisqjlbody20","shuqicjyurl20","shuqicjcsbody20","shuqicjbody20","shuqijsspbody20","shuqijsydurl20","shuqijsydbody20","shuqijsqdbody20","shuqijsqdspyurl20","shuqijsqdspbody20","shuqijsrwbody20","shuqijsfxbody20","shuqijsbookurl20","shuqijsbookbody20","shuqijssprwurl20"],"author":"@ziye","settings":[{"id":"shuqiSuffix","name":"当前账号","val":"1","type":"number","desc":"当前抓取ck记录的账号序号，如：1、2、3、"},{"id":"shuqiCount","name":"账号个数","val":"15","type":"number","desc":"指定任务最多跑几个账号，根据抓取的账号数据个数来设值"},{"id":"shuqiXH","name":"循环获取CK","val":"1","type":"number","desc":"0关闭 1开启,默认关闭"},{"id":"shuqiSC","name":"单刷时长控制","val":"0","type":"number","desc":"0关闭 1开启,默认关闭"},{"id":"shuqiTXTX","name":"提现提醒","val":"10","type":"number","desc":"0关闭 设置余额大于多少提醒"},{"id":"shuqinotifyttt","name":"推送控制","val":"1","type":"number","desc":"0关闭，1推送,默认12点以及23点推送"},{"id":"shuqinotifyInterval","name":"通知控制","val":"2","type":"number","desc":"0关闭，1为 所有通知，2为 12，23 点通知，3为 6，12，18，23 点通知 "},{"id":"shuqiMinutes","name":"推送-通知 分钟控制","val":"59","type":"number","desc":"推送以及通知控制在什么分钟段，可设置0-59,默认0到10"}],"repo":"https://cdn.jsdelivr.net/gh/ziye888/JavaScript@main/Task/shuqi.js","icons":["https://cdn.jsdelivr.net/gh/ziye888/JavaScript@main/Task/shuqi.png","https://cdn.jsdelivr.net/gh/ziye888/JavaScript@main/Task/shuqi.png"],"script":"https://cdn.jsdelivr.net/gh/ziye888/JavaScript@main/Task/shuqi.js","icon":"https://cdn.jsdelivr.net/gh/ziye888/JavaScript@main/Task/shuqi.png","favIcon":"mdi-star","favIconColor":"primary","datas":[{"key":"shuqiuserurl","val":"https://ocean.shuqireader.com/api/jaccount/accountapi/v1/sapi/account/getBindinfo?userId=2128167240&sqSv=1.0&timestamp=1624077539&sign=1640404782f5ace1acfd7f366796ec74&key=sq_h5_gateway"},{"key":"shuqisyurl","val":"https://render.shuqireader.com/load/resource?sdk=13.0&utdid=YM10q%2Bfp9g8DAIK6BLLYQw0Q&ustatus=0&first_placeid=111111&net_env=3g&placeid=111111&user_id=2128167240&sn=18D62CFC23072BDD783C4C8A0A28BFFDF274F368&umidtoken=YM10q%2Bfp9g8DAIK6BLLYQw0Q&msv=8.0.0&brand=Apple&imei=948F46F88705BA007CCD9F9ED5B164F3B0311F65&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=iOS&ver=210301&mod=iPhoneSE&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=A52E67A1-AE57-4C49-9F8D-F49373B8E33D"},{"key":"shuqisybody","val":"appVer=4.3.6.0&imei=948F46F88705BA007CCD9F9ED5B164F3B0311F65&isNewUser=1&params=%7B%22resources%22%3A%7B%22ShuqiVipEntry%22%3A%7B%7D%2C%22personalCardConfig%22%3A%7B%7D%7D%7D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=bd707b6b4ffa234165d6fc150648068e&sn=18D62CFC23072BDD783C4C8A0A28BFFDF274F368&soft_id=21&timestamp=1624077495&user_id=2128167240&ver=210301"},{"key":"shuqispbody","val":"_public=skinId%3D999%26idfa%3DA52E67A1-AE57-4C49-9F8D-F49373B8E33D%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26umidtoken%3DYM10q%2Bfp9g8DAIK6BLLYQw0Q%26user_id%3D2128167240%26sn%3D18D62CFC23072BDD783C4C8A0A28BFFDF274F368%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D948F46F88705BA007CCD9F9ED5B164F3B0311F65%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhoneSE%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYM10q%2Bfp9g8DAIK6BLLYQw0Q%26utype%3Dpre_vip%26sdk%3D13.0&deliveryId=525&key=sq_app_ad&miniWua=HHnB_b/wfdMhvq9wgycVM2p5a/bfGY5YRZIhHHEsPp0lD24Q%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=626&sign=A4383B133392014B1F4CF13E85B202E5&timestamp=1624077511&userId=2128167240&user_id=2128167240&wua=HIVW_CTdOvoee6k2T3yfb4402G2DK8XoQ0TmTHh8xMEkGyW3v5fjned0entmMVwx7c/e9BGMgoz/8H/IYylqJQvtBbj0NrLEzsUkkC7JKC4zjvGFaOrueGXN4Tb7pmSh%2BFXcPyOQXFgUq9Pyek7cmco2GrQwqHNKt3sIP9zIbo%2BLbB/v3QnyiBYpIUBgg63iML1z10VgbMEb%2BHVVNte9RjfXNFlBnNiQOUo45%2BZHj5m5c0b8%3D"},{"key":"shuqiscbody","val":""},{"key":"shuqiydbody","val":""},{"key":"shuqiqdbody","val":"clientTimestamp=1624077504&position=501&userId=2128167240&signInType=1&wua=HIVW_S3pmpvBEsH1dGR7y2jVV5BudtM%2F3war0ClDkKxAHQxFegbGDCzZY6L5B%2BHBX8L5zEQnUB8HMoBhuMKV1rwvjGW2%2BqH20f1G93BmaFD3PbMWh0AA2yiWwJkHnBzC0FGNKCYEufyI7Ah9BoFDD%2F22XEoGBcyBaG2M%2BP4q1DOxynSsdWSMHE%2BCkg23nQoPZR7rWojsKqWWuV%2FVXG99uyD0zJTIoGSuvLToIj240SN0QKb8%3D&ua=&miniWua=HHnB_r97YzgZaeizJK%2B3ZxPVlXTO17BjWaMMrnSjnr8slTZQ%3D&umidtoken=YM10q%2Bfp9g8DAIK6BLLYQw0Q&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&sign=0e9fb3a03f47684e2d4d8e4dbc71ea99&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.0%26utdid%3DYM10q%252Bfp9g8DAIK6BLLYQw0Q%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2128167240%26sn%3D18D62CFC23072BDD783C4C8A0A28BFFDF274F368%26umidtoken%3DYM10q%252Bfp9g8DAIK6BLLYQw0Q%26msv%3D8.0.0%26brand%3DApple%26imei%3D948F46F88705BA007CCD9F9ED5B164F3B0311F65%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhoneSE%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DA52E67A1-AE57-4C49-9F8D-F49373B8E33D"},{"key":"shuqirwbody","val":"serviceWorkerOn=1&stopPullRefresh=1&from=ShuqiTab&upf=20368&sdk=13.0&utdid=YM10q%2Bfp9g8DAIK6BLLYQw0Q&ustatus=0&first_placeid=111111&net_env=3g&placeid=111111&user_id=2128167240&sn=18D62CFC23072BDD783C4C8A0A28BFFDF274F368&umidtoken=YM10q%2Bfp9g8DAIK6BLLYQw0Q&msv=8.0.0&brand=Apple&imei=948F46F88705BA007CCD9F9ED5B164F3B0311F65&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=1&ver=210301&mod=iPhoneSE&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=A52E67A1-AE57-4C49-9F8D-F49373B8E33D&params=%7B%22resources%22%3A%7B%22ShuqiBsDailyTask%22%3A%7B%7D%7D%7D&userId=2128167240&placeId=111111&timestamp=1624077517&sqSv=1.0&sign=0fa4ada1c7a5541561ff298a6e4181d5&key=sq_h5_gateway&_public="},{"key":"shuqifxbody","val":""},{"key":"shuqisprwurl","val":"https://ocean.shuqireader.com/api/ad/adserver/v1/api/getAdInfo?appVer=4.3.6.0&placeId=111111&platform=iOS&requestSrc=h5&resourceId=626&timestamp=1624077538&user_id=2128167240&sqSv=1.0&sign=617a01d709b841c11a58eec61c25d647&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.0%26utdid%3DYM10q%252Bfp9g8DAIK6BLLYQw0Q%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2128167240%26sn%3D18D62CFC23072BDD783C4C8A0A28BFFDF274F368%26umidtoken%3DYM10q%252Bfp9g8DAIK6BLLYQw0Q%26msv%3D8.0.0%26brand%3DApple%26imei%3D948F46F88705BA007CCD9F9ED5B164F3B0311F65%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhoneSE%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DA52E67A1-AE57-4C49-9F8D-F49373B8E33D"},{"key":"shuqijlbody","val":"requestSrc=h5&userId=2128167240&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624077517&sqSv=1.0&sign=4b9e9075de92a58614b45586654032b8&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.0%26utdid%3DYM10q%252Bfp9g8DAIK6BLLYQw0Q%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2128167240%26sn%3D18D62CFC23072BDD783C4C8A0A28BFFDF274F368%26umidtoken%3DYM10q%252Bfp9g8DAIK6BLLYQw0Q%26msv%3D8.0.0%26brand%3DApple%26imei%3D948F46F88705BA007CCD9F9ED5B164F3B0311F65%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhoneSE%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DA52E67A1-AE57-4C49-9F8D-F49373B8E33D"},{"key":"shuqisqjlbody","val":"src=&userId=2128167240&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624077508&sqSv=1.0&sign=9e3c4adaf3b3212d4b46b9e43dc73653&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.0%26utdid%3DYM10q%252Bfp9g8DAIK6BLLYQw0Q%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2128167240%26sn%3D18D62CFC23072BDD783C4C8A0A28BFFDF274F368%26umidtoken%3DYM10q%252Bfp9g8DAIK6BLLYQw0Q%26msv%3D8.0.0%26brand%3DApple%26imei%3D948F46F88705BA007CCD9F9ED5B164F3B0311F65%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhoneSE%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DA52E67A1-AE57-4C49-9F8D-F49373B8E33D"},{"key":"shuqicjyurl","val":"https://ocean.shuqireader.com/api/activity/activity/v1/lottery/info?timestamp=1624077540&userId=2128167240&activityId=311&sqSv=1.0&sign=03e08781ca3297cb920751afd6fc3375&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.0%26utdid%3DYM10q%252Bfp9g8DAIK6BLLYQw0Q%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2128167240%26sn%3D18D62CFC23072BDD783C4C8A0A28BFFDF274F368%26umidtoken%3DYM10q%252Bfp9g8DAIK6BLLYQw0Q%26msv%3D8.0.0%26brand%3DApple%26imei%3D948F46F88705BA007CCD9F9ED5B164F3B0311F65%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhoneSE%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DA52E67A1-AE57-4C49-9F8D-F49373B8E33D"},{"key":"shuqicjcsbody","val":"_public=skinId%3D999%26idfa%3DA52E67A1-AE57-4C49-9F8D-F49373B8E33D%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26umidtoken%3DYM10q%2Bfp9g8DAIK6BLLYQw0Q%26user_id%3D2128167240%26sn%3D18D62CFC23072BDD783C4C8A0A28BFFDF274F368%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D948F46F88705BA007CCD9F9ED5B164F3B0311F65%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhoneSE%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYM10q%2Bfp9g8DAIK6BLLYQw0Q%26utype%3Dpre_vip%26sdk%3D13.0&deliveryId=711&key=sq_app_ad&miniWua=HHnB_XP/vPSc%2Br%2BDIBzdVMwIwcU45NLnIxyHfaMxNMsO971M%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=703&sign=2179EDDE7792F171D1AC1A297B2ABD9E&timestamp=1624077522&userId=2128167240&user_id=2128167240&wua=HIVW_Xx%2B1vHorSDM0xZc5zLZWxh5mYc1OetM9cWsvZGK82JToH46%2BIOWQKI0DFRzYlOPN/zOhLJoRg1OLnJ2GNsoP9lUMjnR6VWaAxb7tD/ri5hPImcx/MopF4cLiFz3VK2DsGHfnmhkZ/AHd91a5q2Q2hITPOhPdTXZAsdQSCo37O87ImXwPuT%2BCFW5XCYCmZQOJn53qsoscoZtiy4xCwyutFL41G7GeGSeah2gXtsDab9g%3D"},{"key":"shuqicjbody","val":"wua=HIVW_LefTKUaS4ARgb9iBBDh1XqrwMO3pj7u2wJBbfoyTfwOXHY7iRTVeDlBGbxnPZw7gtYB7%2Bs6txS9OVhdOZuVj98cOm57yRDhcxfYV55yetYxfFFlzGMNHdoInZAL%2FSDhgiuj35pwSWZz39SuLchoIy1wnC%2FjKg91vhgVxe%2FhyE5gW64afSTUtEB0Ymg7pou6ujgCuLIrJ62a1PfVpeBY9A%2BQsRUjWy97mrfNP83cunFg%3D&ua=&userId=2128167240&umidtoken=YM10q%2Bfp9g8DAIK6BLLYQw0Q&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&asac=2A20C07RJ9F51AOEFSNHDR&timestamp=1624077525&activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&sqSv=1.0&sign=a995206cf381278382cfeea3e01b2c1b&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.0%26utdid%3DYM10q%252Bfp9g8DAIK6BLLYQw0Q%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2128167240%26sn%3D18D62CFC23072BDD783C4C8A0A28BFFDF274F368%26umidtoken%3DYM10q%252Bfp9g8DAIK6BLLYQw0Q%26msv%3D8.0.0%26brand%3DApple%26imei%3D948F46F88705BA007CCD9F9ED5B164F3B0311F65%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhoneSE%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DA52E67A1-AE57-4C49-9F8D-F49373B8E33D"},{"key":"shuqijsspbody","val":""},{"key":"shuqijsydurl","val":""},{"key":"shuqijsydbody","val":""},{"key":"shuqijsqdbody","val":""},{"key":"shuqijsqdspyurl","val":""},{"key":"shuqijsqdspbody","val":""},{"key":"shuqijsrwbody","val":""},{"key":"shuqijsfxbody","val":""},{"key":"shuqijsbookurl","val":""},{"key":"shuqijsbookbody","val":""},{"key":"shuqijssprwurl","val":""},{"key":"shuqiuserurl2","val":"https://ocean.shuqireader.com/api/jaccount/accountapi/v1/sapi/account/getBindinfo?userId=2128816587&sqSv=1.0&timestamp=1624077599&sign=014dd8fcb4d2ec384c6f94f10889da9c&key=sq_h5_gateway"},{"key":"shuqisyurl2","val":"https://render.shuqireader.com/load/resource?sdk=13.1&utdid=YM107eog7NIDABY%2BS2RxomVg&ustatus=0&first_placeid=111111&net_env=4g&placeid=111111&user_id=2128816587&sn=210E66182C5B1F329C65D00116BFEED0A2E59940&umidtoken=YM107eog7NIDABY%2BS2RxomVg&msv=8.0.0&brand=Apple&imei=2C06E9DA58E8A6466B74C40CE1D0B4709E03B4D3&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=iOS&ver=210301&mod=iPhone7&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=50E835C5-CD82-4163-8272-C1E6B13193E9"},{"key":"shuqisybody2","val":"appVer=4.3.6.0&imei=2C06E9DA58E8A6466B74C40CE1D0B4709E03B4D3&isNewUser=1&params=%7B%22resources%22%3A%7B%22ShuqiVipEntry%22%3A%7B%7D%2C%22personalCardConfig%22%3A%7B%7D%7D%7D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=d5a72075168ea0724f8a78230cd08906&sn=210E66182C5B1F329C65D00116BFEED0A2E59940&soft_id=21&timestamp=1624077552&user_id=2128816587&ver=210301"},{"key":"shuqispbody2","val":"_public=skinId%3D999%26idfa%3D50E835C5-CD82-4163-8272-C1E6B13193E9%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26umidtoken%3DYM107eog7NIDABY%2BS2RxomVg%26user_id%3D2128816587%26sn%3D210E66182C5B1F329C65D00116BFEED0A2E59940%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D2C06E9DA58E8A6466B74C40CE1D0B4709E03B4D3%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhone7%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYM107eog7NIDABY%2BS2RxomVg%26utype%3Dpre_vip%26sdk%3D13.1&deliveryId=525&key=sq_app_ad&miniWua=HHnB_Q8zG54SfltMBUACBJIuJUpS1MNT8FLWpa4jJJewDtKw%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=626&sign=96CA1E4F8B147945F2C531211343D197&timestamp=1624077568&userId=2128816587&user_id=2128816587&wua=HIVW_OXaRaxkpCzXa5zCM9M3NMwtn159zAu39V9EqEHsDWV00bf%2BJ4MLi9Yl%2B6dCNnmAU8n663S9lU557O8gzhFw%2Bcp1bsHm1/vgHoUZ0X5ZejveV/CcDHwUmevzN1fgYnlD3tltzFKSShpXCxZBDLTTA62eZ0j0x8Q60lA0PXHKnBRFquvxu/F5JToX%2BA6u0o2rnhsiDZXGNI3CL3bQAG95ZdzH31aEqbPVJPfbHpSqCJgU%3D"},{"key":"shuqiscbody2","val":""},{"key":"shuqiydbody2","val":""},{"key":"shuqiqdbody2","val":"clientTimestamp=1624077562&position=501&userId=2128816587&signInType=1&wua=HIVW_PI2M4QGlimacQ08pZ0Bf%2BrbqXEiDZ%2BEL%2Fo6Ek6Ip1%2B12nY1HGrrU8BzWNx6vh6wiXpXmNbcRbb%2BqGGuIUKXTQXMj37EiEcf2ZAtBouVkTru2S%2BFQfn1ase1fXHdASKAjl5ljYOCc51f%2F9KPNQG8425EoB07NTPdJy8liXomsxB6Mg3Ka6SXS3jT59gLmsZAgdRaInB2i5%2Fc0epdijP7O%2FHgPPYM%2BgvaMS4IaEOrPUOc%3D&ua=&miniWua=HHnB_Q1Dyyi%2FoB3K95lydHGG5eI7o1dhB%2Fn9HDQ7x6eJV6y8%3D&umidtoken=YM107eog7NIDABY%2BS2RxomVg&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&sign=0056bd8f4ff72d8efb30446603f027f0&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.1%26utdid%3DYM107eog7NIDABY%252BS2RxomVg%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2128816587%26sn%3D210E66182C5B1F329C65D00116BFEED0A2E59940%26umidtoken%3DYM107eog7NIDABY%252BS2RxomVg%26msv%3D8.0.0%26brand%3DApple%26imei%3D2C06E9DA58E8A6466B74C40CE1D0B4709E03B4D3%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone7%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D50E835C5-CD82-4163-8272-C1E6B13193E9"},{"key":"shuqirwbody2","val":"serviceWorkerOn=1&stopPullRefresh=1&from=ShuqiTab&upf=20368&sdk=13.1&utdid=YM107eog7NIDABY%2BS2RxomVg&ustatus=0&first_placeid=111111&net_env=4g&placeid=111111&user_id=2128816587&sn=210E66182C5B1F329C65D00116BFEED0A2E59940&umidtoken=YM107eog7NIDABY%2BS2RxomVg&msv=8.0.0&brand=Apple&imei=2C06E9DA58E8A6466B74C40CE1D0B4709E03B4D3&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=1&ver=210301&mod=iPhone7&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=50E835C5-CD82-4163-8272-C1E6B13193E9&params=%7B%22resources%22%3A%7B%22ShuqiBsDailyTask%22%3A%7B%7D%7D%7D&userId=2128816587&placeId=111111&timestamp=1624077574&sqSv=1.0&sign=111949585ffb9a6bde74309d68d18107&key=sq_h5_gateway&_public="},{"key":"shuqifxbody2","val":""},{"key":"shuqisprwurl2","val":"https://ocean.shuqireader.com/api/ad/adserver/v1/api/getAdInfo?appVer=4.3.6.0&placeId=111111&platform=iOS&requestSrc=h5&resourceId=626&timestamp=1624077597&user_id=2128816587&sqSv=1.0&sign=62954d7d9e0164fbe7150ea09df266a7&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.1%26utdid%3DYM107eog7NIDABY%252BS2RxomVg%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2128816587%26sn%3D210E66182C5B1F329C65D00116BFEED0A2E59940%26umidtoken%3DYM107eog7NIDABY%252BS2RxomVg%26msv%3D8.0.0%26brand%3DApple%26imei%3D2C06E9DA58E8A6466B74C40CE1D0B4709E03B4D3%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone7%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D50E835C5-CD82-4163-8272-C1E6B13193E9"},{"key":"shuqijlbody2","val":"requestSrc=h5&userId=2128816587&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624077574&sqSv=1.0&sign=db922a392784bf84e1c5420e4e1a1533&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.1%26utdid%3DYM107eog7NIDABY%252BS2RxomVg%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2128816587%26sn%3D210E66182C5B1F329C65D00116BFEED0A2E59940%26umidtoken%3DYM107eog7NIDABY%252BS2RxomVg%26msv%3D8.0.0%26brand%3DApple%26imei%3D2C06E9DA58E8A6466B74C40CE1D0B4709E03B4D3%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone7%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D50E835C5-CD82-4163-8272-C1E6B13193E9"},{"key":"shuqisqjlbody2","val":"src=&userId=2128816587&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624077566&sqSv=1.0&sign=b4b2595e1b62a31c1148aa29c3e5b388&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.1%26utdid%3DYM107eog7NIDABY%252BS2RxomVg%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2128816587%26sn%3D210E66182C5B1F329C65D00116BFEED0A2E59940%26umidtoken%3DYM107eog7NIDABY%252BS2RxomVg%26msv%3D8.0.0%26brand%3DApple%26imei%3D2C06E9DA58E8A6466B74C40CE1D0B4709E03B4D3%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone7%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D50E835C5-CD82-4163-8272-C1E6B13193E9"},{"key":"shuqicjyurl2","val":"https://ocean.shuqireader.com/api/activity/activity/v1/lottery/info?timestamp=1624077600&userId=2128816587&activityId=311&sqSv=1.0&sign=fededb6f9ba82de9ffce97a749051c62&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.1%26utdid%3DYM107eog7NIDABY%252BS2RxomVg%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2128816587%26sn%3D210E66182C5B1F329C65D00116BFEED0A2E59940%26umidtoken%3DYM107eog7NIDABY%252BS2RxomVg%26msv%3D8.0.0%26brand%3DApple%26imei%3D2C06E9DA58E8A6466B74C40CE1D0B4709E03B4D3%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone7%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D50E835C5-CD82-4163-8272-C1E6B13193E9"},{"key":"shuqicjcsbody2","val":"_public=skinId%3D999%26idfa%3D50E835C5-CD82-4163-8272-C1E6B13193E9%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26umidtoken%3DYM107eog7NIDABY%2BS2RxomVg%26user_id%3D2128816587%26sn%3D210E66182C5B1F329C65D00116BFEED0A2E59940%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D2C06E9DA58E8A6466B74C40CE1D0B4709E03B4D3%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhone7%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYM107eog7NIDABY%2BS2RxomVg%26utype%3Dpre_vip%26sdk%3D13.1&deliveryId=711&key=sq_app_ad&miniWua=HHnB_PrKxUXLHPGZrcOFr%2BS6OrHzYmGZWLGaL7b7QvKhFuTE%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=703&sign=34A5BD210ABC3219127D7E144FC0B157&timestamp=1624077580&userId=2128816587&user_id=2128816587&wua=HIVW_YV9vQmgdoKqnxKZU/6FBLlcL4NIuG6GT02b%2BYr4rwyOIHMN8CtFyzOpb0oXgwKo/TG%2BPEkWmadOqCE/5iZQXHHzqgbruKRHlrEXXJ8zs/wAU9eUVTOiYbEL3geVVuhTL%2Bb27Ixh8/cJQcgjGWvvuuAccEYxttT5M1oLhj1Ti7xaodvxKt8FJFQ/kU7Q%2B%2B8EfZo1uH0a6MPy3ur1An8GpCSOU2rps5TyjPpCkfqpXAnM%3D"},{"key":"shuqicjbody2","val":"wua=HIVW_lZKfsAE5nCQz0D%2FHEPItUWlf2ik5CViDqjV7fpqd9IFlvlritFb7VOPhBUHwKaL6zICv7RH7Cguh2sC0LBsY0B7FDn4H2L78zK3S6t282UpgeVaAiRUlbW5MSR6Usqt27YJ%2BLWLWK2IjF8V6li%2F06dECyHkhwpWAqai8gztvHpOu46qNnwJDHAkcqZ%2FeD7tk6Z6Khi%2Fm9wWv%2FA0Z8BQ0mhrhrMcFdF%2Fo%2FO4rdBOPIms%3D&ua=&userId=2128816587&umidtoken=YM107eog7NIDABY%2BS2RxomVg&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&asac=2A20C07RJ9F51AOEFSNHDR&timestamp=1624077586&activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&sqSv=1.0&sign=af4536368f56dcc74b5af52b9b405bf6&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.1%26utdid%3DYM107eog7NIDABY%252BS2RxomVg%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2128816587%26sn%3D210E66182C5B1F329C65D00116BFEED0A2E59940%26umidtoken%3DYM107eog7NIDABY%252BS2RxomVg%26msv%3D8.0.0%26brand%3DApple%26imei%3D2C06E9DA58E8A6466B74C40CE1D0B4709E03B4D3%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone7%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D50E835C5-CD82-4163-8272-C1E6B13193E9"},{"key":"shuqijsspbody2","val":""},{"key":"shuqijsydurl2","val":""},{"key":"shuqijsydbody2","val":""},{"key":"shuqijsqdbody2","val":""},{"key":"shuqijsqdspyurl2","val":""},{"key":"shuqijsqdspbody2","val":""},{"key":"shuqijsrwbody2","val":""},{"key":"shuqijsfxbody2","val":""},{"key":"shuqijsbookurl2","val":""},{"key":"shuqijsbookbody2","val":""},{"key":"shuqijssprwurl2","val":""},{"key":"shuqiuserurl3","val":"https://ocean.shuqireader.com/api/jaccount/accountapi/v1/sapi/account/getBindinfo?userId=2130509733&sqSv=1.0&timestamp=1624077657&sign=67f7d8f9705788f1e62edd2170547712&key=sq_h5_gateway"},{"key":"shuqisyurl3","val":"https://render.shuqireader.com/load/resource?sdk=13.3&utdid=YM1R53MbWxoDAInmjCbWCpRr&ustatus=0&first_placeid=111111&net_env=4g&placeid=111111&user_id=2130509733&sn=724C209C91F8343B25F2A02E8C9EDE3629E9D438&umidtoken=YM1R53MbWxoDAInmjCbWCpRr&msv=8.0.0&brand=Apple&imei=7D52371E667A81BF1B6FFCC477526327852B5459&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=iOS&ver=210301&mod=iPhone6plus&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=23ED523E-938E-4179-84CE-456DB24C1D2A"},{"key":"shuqisybody3","val":"appVer=4.3.6.0&imei=7D52371E667A81BF1B6FFCC477526327852B5459&isNewUser=1&params=%7B%22resources%22%3A%7B%22ShuqiVipEntry%22%3A%7B%7D%2C%22personalCardConfig%22%3A%7B%7D%7D%7D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=fb791cbe2efbdf31a8cd913b9e02f47c&sn=724C209C91F8343B25F2A02E8C9EDE3629E9D438&soft_id=21&timestamp=1624077612&user_id=2130509733&ver=210301"},{"key":"shuqispbody3","val":"_public=skinId%3D999%26idfa%3D23ED523E-938E-4179-84CE-456DB24C1D2A%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26umidtoken%3DYM1R53MbWxoDAInmjCbWCpRr%26user_id%3D2130509733%26sn%3D724C209C91F8343B25F2A02E8C9EDE3629E9D438%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D7D52371E667A81BF1B6FFCC477526327852B5459%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhone6plus%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYM1R53MbWxoDAInmjCbWCpRr%26utype%3Dpre_vip%26sdk%3D13.3&deliveryId=525&key=sq_app_ad&miniWua=HHnB_HUJHaYPRNlmZaudXWMdc6XAPtaCmShuTTbVxvvZ6hS4%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=626&sign=3E1E8DFE9284C99C1B46E16FAC7057F6&timestamp=1624077629&userId=2130509733&user_id=2130509733&wua=HIVW_G%2BOBA%2BoGKe3oUGZ3htU33omXhOsUcV2kDo%2B5QGo4%2B%2BLNl6ZN1m6s7H224PcmMjyr2u3bZjxLzinva1xRihB/rseej7jXu7QrBzXGHw0kkaN7j%2BI%2BZik8XsOGG2YJMnUHfDEXwSEteN142uwwts64iHurssiIS8E7qwFVTmC%2BnUquvrCmBQF6giou666wRWmTpQK6i577PUS1w4jHA5nYUINeLFsj1EJ8O6TkQY%2B737M%3D"},{"key":"shuqiscbody3","val":""},{"key":"shuqiydbody3","val":""},{"key":"shuqiqdbody3","val":"clientTimestamp=1624077621&position=501&userId=2130509733&signInType=1&wua=HIVW_0bLKcuGzdjYT%2FLNedileZxoPPkpI4eUgqFfDxgY%2FI%2FdU6HUk75OegLGMQ3I9mxxvlenfoqcJ1YPGOdEhN7jok0MPaf%2FSiDyGsMXqTzKA3LbK8HdGmqtxT%2BiBXoOIGQy8lvC9kDcColi56%2B8rEK4GpOegF%2FClTu3A1G8nJYkEWKYfa%2BSBm1BSru7i3sRcMwbb5N12Kkn2DjCzOKMjxrwii3a%2BLv1OtLCE%2FA3X1BXULzU%3D&ua=&miniWua=HHnB_2MH6mU9%2FhY2PiWj5P%2BtzrUK4VLecP66vmKmSE0EiMaY%3D&umidtoken=YM1R53MbWxoDAInmjCbWCpRr&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&sign=a4945e7119c52306379114f4ed1af8e3&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.3%26utdid%3DYM1R53MbWxoDAInmjCbWCpRr%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2130509733%26sn%3D724C209C91F8343B25F2A02E8C9EDE3629E9D438%26umidtoken%3DYM1R53MbWxoDAInmjCbWCpRr%26msv%3D8.0.0%26brand%3DApple%26imei%3D7D52371E667A81BF1B6FFCC477526327852B5459%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone6plus%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D23ED523E-938E-4179-84CE-456DB24C1D2A"},{"key":"shuqirwbody3","val":"serviceWorkerOn=1&stopPullRefresh=1&from=ShuqiTab&upf=20368&sdk=13.3&utdid=YM1R53MbWxoDAInmjCbWCpRr&ustatus=0&first_placeid=111111&net_env=4g&placeid=111111&user_id=2130509733&sn=724C209C91F8343B25F2A02E8C9EDE3629E9D438&umidtoken=YM1R53MbWxoDAInmjCbWCpRr&msv=8.0.0&brand=Apple&imei=7D52371E667A81BF1B6FFCC477526327852B5459&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=1&ver=210301&mod=iPhone6plus&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=23ED523E-938E-4179-84CE-456DB24C1D2A&params=%7B%22resources%22%3A%7B%22ShuqiBsDailyTask%22%3A%7B%7D%7D%7D&userId=2130509733&placeId=111111&timestamp=1624077635&sqSv=1.0&sign=7df85387511cd522771f33c3013d108f&key=sq_h5_gateway&_public="},{"key":"shuqifxbody3","val":""},{"key":"shuqisprwurl3","val":"https://ocean.shuqireader.com/api/ad/adserver/v1/api/getAdInfo?appVer=4.3.6.0&placeId=111111&platform=iOS&requestSrc=h5&resourceId=626&timestamp=1624077655&user_id=2130509733&sqSv=1.0&sign=0dce97c341d296c3a08ac4a4d02bf693&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.3%26utdid%3DYM1R53MbWxoDAInmjCbWCpRr%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2130509733%26sn%3D724C209C91F8343B25F2A02E8C9EDE3629E9D438%26umidtoken%3DYM1R53MbWxoDAInmjCbWCpRr%26msv%3D8.0.0%26brand%3DApple%26imei%3D7D52371E667A81BF1B6FFCC477526327852B5459%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone6plus%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D23ED523E-938E-4179-84CE-456DB24C1D2A"},{"key":"shuqijlbody3","val":"requestSrc=h5&userId=2130509733&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624077635&sqSv=1.0&sign=74fc88503ea85fd13e908f7b32cbfcba&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.3%26utdid%3DYM1R53MbWxoDAInmjCbWCpRr%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2130509733%26sn%3D724C209C91F8343B25F2A02E8C9EDE3629E9D438%26umidtoken%3DYM1R53MbWxoDAInmjCbWCpRr%26msv%3D8.0.0%26brand%3DApple%26imei%3D7D52371E667A81BF1B6FFCC477526327852B5459%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone6plus%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D23ED523E-938E-4179-84CE-456DB24C1D2A"},{"key":"shuqisqjlbody3","val":"src=&userId=2130509733&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624077626&sqSv=1.0&sign=d22550b76e02734d3733fff9a07f5494&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.3%26utdid%3DYM1R53MbWxoDAInmjCbWCpRr%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2130509733%26sn%3D724C209C91F8343B25F2A02E8C9EDE3629E9D438%26umidtoken%3DYM1R53MbWxoDAInmjCbWCpRr%26msv%3D8.0.0%26brand%3DApple%26imei%3D7D52371E667A81BF1B6FFCC477526327852B5459%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone6plus%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D23ED523E-938E-4179-84CE-456DB24C1D2A"},{"key":"shuqicjyurl3","val":"https://ocean.shuqireader.com/api/activity/activity/v1/lottery/info?timestamp=1624077657&userId=2130509733&activityId=311&sqSv=1.0&sign=4976f10a0e8219a33e575fed167612d6&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.3%26utdid%3DYM1R53MbWxoDAInmjCbWCpRr%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2130509733%26sn%3D724C209C91F8343B25F2A02E8C9EDE3629E9D438%26umidtoken%3DYM1R53MbWxoDAInmjCbWCpRr%26msv%3D8.0.0%26brand%3DApple%26imei%3D7D52371E667A81BF1B6FFCC477526327852B5459%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone6plus%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D23ED523E-938E-4179-84CE-456DB24C1D2A"},{"key":"shuqicjcsbody3","val":"_public=skinId%3D999%26idfa%3D23ED523E-938E-4179-84CE-456DB24C1D2A%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26umidtoken%3DYM1R53MbWxoDAInmjCbWCpRr%26user_id%3D2130509733%26sn%3D724C209C91F8343B25F2A02E8C9EDE3629E9D438%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D7D52371E667A81BF1B6FFCC477526327852B5459%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhone6plus%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYM1R53MbWxoDAInmjCbWCpRr%26utype%3Dpre_vip%26sdk%3D13.3&deliveryId=711&key=sq_app_ad&miniWua=HHnB_shuKGyIqUmre39Q83%2BLSLzK4I0zdM13bKDzzp7rH9wA%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=703&sign=B5B6326EB8673C39B62919AE540DA9EB&timestamp=1624077640&userId=2130509733&user_id=2130509733&wua=HIVW_nnZxIk3Sf1Zqk9IiVDpQ8mlj61GY9YztM3rP2YI75PDVYV0SMb0Sx9Cv9K3to6kNlVzEmBlNt5EcsWdCsTYXHxVsINjS0dx6wxDaLpjsJr2u45x42InNC1KPGWTgQmsABfzPev%2BXw5VagiyMwFYlxtSRxg9SAioP1aFMHX8muznoQ2cr4WqiMM5IJEiraipoVVbf7/GwFbtz/ohTWs78YepbXrVvnWmVQ2y4YTqMrxc%3D"},{"key":"shuqicjbody3","val":"wua=HIVW_VU2IkFdme4%2ByqXmAqizcYgK%2Fo8tiAkuDE0ki7b64KbXm24s74wN84Jdl1ONAS%2FjEbrWBAyU82j78%2Bset9ebvH84c%2FAe4IBvXS91d87FkKSv%2FVeNdakV7whWaYXTqykoRYJ15hINMFkkcMiQDzks2ZQ6YOoz02m5dR0kKkKmJljF5DdLU78iWFqqLEep4QGVCtA1mqy5fjGvYC8Z1egFEXdGFaFAun5ZizaXxYkBN6fg%3D&ua=&userId=2130509733&umidtoken=YM1R53MbWxoDAInmjCbWCpRr&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&asac=2A20C07RJ9F51AOEFSNHDR&timestamp=1624077646&activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&sqSv=1.0&sign=1822813089600bacdd9f9b31d764cb8e&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.3%26utdid%3DYM1R53MbWxoDAInmjCbWCpRr%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2130509733%26sn%3D724C209C91F8343B25F2A02E8C9EDE3629E9D438%26umidtoken%3DYM1R53MbWxoDAInmjCbWCpRr%26msv%3D8.0.0%26brand%3DApple%26imei%3D7D52371E667A81BF1B6FFCC477526327852B5459%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone6plus%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D23ED523E-938E-4179-84CE-456DB24C1D2A"},{"key":"shuqijsspbody3","val":""},{"key":"shuqijsydurl3","val":""},{"key":"shuqijsydbody3","val":""},{"key":"shuqijsqdbody3","val":""},{"key":"shuqijsqdspyurl3","val":""},{"key":"shuqijsqdspbody3","val":""},{"key":"shuqijsrwbody3","val":""},{"key":"shuqijsfxbody3","val":""},{"key":"shuqijsbookurl3","val":""},{"key":"shuqijsbookbody3","val":""},{"key":"shuqijssprwurl3","val":""},{"key":"shuqiuserurl4","val":"https://ocean.shuqireader.com/api/jaccount/accountapi/v1/sapi/account/getBindinfo?userId=2130894915&sqSv=1.0&timestamp=1624077719&sign=990b44907197a671f6f95b4d868f3968&key=sq_h5_gateway"},{"key":"shuqisyurl4","val":"https://render.shuqireader.com/load/resource?sdk=13.4&utdid=YM1R8Tw6%2FAADAIpJv%2FVI2VE4&ustatus=0&first_placeid=111111&net_env=4g&placeid=111111&user_id=2130894915&sn=C3B2109B991DEA172DC399A3BDF1831F123BDD08&umidtoken=YM1R8Tw6%2FAADAIpJv%2FVI2VE4&msv=8.0.0&brand=Apple&imei=52C40141EA6D0EC5F58471813537263E9B5CD506&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=iOS&ver=210301&mod=UnknowniPad&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=3F89A34F-14C0-4FE2-BFB3-348A467C56F5"},{"key":"shuqisybody4","val":"appVer=4.3.6.0&imei=52C40141EA6D0EC5F58471813537263E9B5CD506&isNewUser=1&params=%7B%22resources%22%3A%7B%22ShuqiVipEntry%22%3A%7B%7D%2C%22personalCardConfig%22%3A%7B%7D%7D%7D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=506b6f353116b057007f9010771b89a6&sn=C3B2109B991DEA172DC399A3BDF1831F123BDD08&soft_id=21&timestamp=1624077678&user_id=2130894915&ver=210301"},{"key":"shuqispbody4","val":"_public=skinId%3D999%26idfa%3D3F89A34F-14C0-4FE2-BFB3-348A467C56F5%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26umidtoken%3DYM1R8Tw6/AADAIpJv/VI2VE4%26user_id%3D2130894915%26sn%3DC3B2109B991DEA172DC399A3BDF1831F123BDD08%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D52C40141EA6D0EC5F58471813537263E9B5CD506%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYM1R8Tw6/AADAIpJv/VI2VE4%26utype%3Dpre_vip%26sdk%3D13.4&deliveryId=525&key=sq_app_ad&miniWua=HHnB_CWkSRDEjVfo2h7xglWGoLc713PRSsCavrDht2OgYXfE%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=626&sign=047725CE32284ED48EC876146748D3B8&timestamp=1624077694&userId=2130894915&user_id=2130894915&wua=HIVW_bMLVVLJe51A3zuu7dn3244ENbO3FgnbJYEnrB9Q52EeBYqts4DwbqQT9b%2BcA7YamnEBm3mOhbbP6fSbBDa06By/CLQCWwD0v2gbyJ327XdAYktYJmHOBX%2BNdxNCPHSOzpCXeZpuB5LKD8w7vD9mRhXkj7pxgVPIy/ARoRpaz8%2BNST4hO/nAHlRe9Tmh3o2D4DY238sfY3oPpSW6gH/Kb3ELj6BnYuK6VAVKbDuC/b%2Bc%3D"},{"key":"shuqiscbody4","val":""},{"key":"shuqiydbody4","val":""},{"key":"shuqiqdbody4","val":"clientTimestamp=1624077687&position=501&userId=2130894915&signInType=1&wua=HIVW_Ph1Yl%2F7PnplUF1w8UdYCaXQjhHszrs8QgdD41XLbV%2ByKS2bBVAvFe%2Fa2m1Mv7dF9bAi%2Bq20rr0t9BxhhWN5dDCL6q%2BELXai9ct1fOpwOV3ykBbkOO86dfpejpPADTehBfscRXpF2lVsJLbNcf1sEFDUDh5QebDr1QDYr4GI1CA%2BEm6qbil9IVyO0N0NZQjnblEWcAD2xGKSTQu2QcYXDwK%2F%2FS2vuvufopjFZvfr87%2FE%3D&ua=&miniWua=HHnB_9hsjFZqL2VVhKU86Rx2Fpv4irMNfkkz6SjRTnl6Wd%2Bo%3D&umidtoken=YM1R8Tw6%2FAADAIpJv%2FVI2VE4&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&sign=9af07facc34832f100507aa147bc932b&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.4%26utdid%3DYM1R8Tw6%252FAADAIpJv%252FVI2VE4%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2130894915%26sn%3DC3B2109B991DEA172DC399A3BDF1831F123BDD08%26umidtoken%3DYM1R8Tw6%252FAADAIpJv%252FVI2VE4%26msv%3D8.0.0%26brand%3DApple%26imei%3D52C40141EA6D0EC5F58471813537263E9B5CD506%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D3F89A34F-14C0-4FE2-BFB3-348A467C56F5"},{"key":"shuqirwbody4","val":"serviceWorkerOn=1&stopPullRefresh=1&from=ShuqiTab&upf=20368&sdk=13.4&utdid=YM1R8Tw6%2FAADAIpJv%2FVI2VE4&ustatus=0&first_placeid=111111&net_env=4g&placeid=111111&user_id=2130894915&sn=C3B2109B991DEA172DC399A3BDF1831F123BDD08&umidtoken=YM1R8Tw6%2FAADAIpJv%2FVI2VE4&msv=8.0.0&brand=Apple&imei=52C40141EA6D0EC5F58471813537263E9B5CD506&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=1&ver=210301&mod=UnknowniPad&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=3F89A34F-14C0-4FE2-BFB3-348A467C56F5&params=%7B%22resources%22%3A%7B%22ShuqiBsDailyTask%22%3A%7B%7D%7D%7D&userId=2130894915&placeId=111111&timestamp=1624077697&sqSv=1.0&sign=1b3b6c55296167f7db2fc15761a1d24e&key=sq_h5_gateway&_public="},{"key":"shuqifxbody4","val":""},{"key":"shuqisprwurl4","val":"https://ocean.shuqireader.com/api/ad/adserver/v1/api/getAdInfo?appVer=4.3.6.0&placeId=111111&platform=iOS&requestSrc=h5&resourceId=626&timestamp=1624077719&user_id=2130894915&sqSv=1.0&sign=1a81108072b7a2ea4d557c3ffaaf3b34&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.4%26utdid%3DYM1R8Tw6%252FAADAIpJv%252FVI2VE4%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2130894915%26sn%3DC3B2109B991DEA172DC399A3BDF1831F123BDD08%26umidtoken%3DYM1R8Tw6%252FAADAIpJv%252FVI2VE4%26msv%3D8.0.0%26brand%3DApple%26imei%3D52C40141EA6D0EC5F58471813537263E9B5CD506%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D3F89A34F-14C0-4FE2-BFB3-348A467C56F5"},{"key":"shuqijlbody4","val":"requestSrc=h5&userId=2130894915&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624077697&sqSv=1.0&sign=4ae8deecc31d4f145af104c93b15d965&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.4%26utdid%3DYM1R8Tw6%252FAADAIpJv%252FVI2VE4%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2130894915%26sn%3DC3B2109B991DEA172DC399A3BDF1831F123BDD08%26umidtoken%3DYM1R8Tw6%252FAADAIpJv%252FVI2VE4%26msv%3D8.0.0%26brand%3DApple%26imei%3D52C40141EA6D0EC5F58471813537263E9B5CD506%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D3F89A34F-14C0-4FE2-BFB3-348A467C56F5"},{"key":"shuqisqjlbody4","val":"src=&userId=2130894915&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624077691&sqSv=1.0&sign=36528875bb84fd9ee226b60844cc1687&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.4%26utdid%3DYM1R8Tw6%252FAADAIpJv%252FVI2VE4%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2130894915%26sn%3DC3B2109B991DEA172DC399A3BDF1831F123BDD08%26umidtoken%3DYM1R8Tw6%252FAADAIpJv%252FVI2VE4%26msv%3D8.0.0%26brand%3DApple%26imei%3D52C40141EA6D0EC5F58471813537263E9B5CD506%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D3F89A34F-14C0-4FE2-BFB3-348A467C56F5"},{"key":"shuqicjyurl4","val":"https://ocean.shuqireader.com/api/activity/activity/v1/lottery/info?timestamp=1624077722&userId=2130894915&activityId=311&sqSv=1.0&sign=7e4e6ae35c928a831e2923fc8a87d30d&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.4%26utdid%3DYM1R8Tw6%252FAADAIpJv%252FVI2VE4%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2130894915%26sn%3DC3B2109B991DEA172DC399A3BDF1831F123BDD08%26umidtoken%3DYM1R8Tw6%252FAADAIpJv%252FVI2VE4%26msv%3D8.0.0%26brand%3DApple%26imei%3D52C40141EA6D0EC5F58471813537263E9B5CD506%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D3F89A34F-14C0-4FE2-BFB3-348A467C56F5"},{"key":"shuqicjcsbody4","val":"_public=skinId%3D999%26idfa%3D3F89A34F-14C0-4FE2-BFB3-348A467C56F5%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26umidtoken%3DYM1R8Tw6/AADAIpJv/VI2VE4%26user_id%3D2130894915%26sn%3DC3B2109B991DEA172DC399A3BDF1831F123BDD08%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D52C40141EA6D0EC5F58471813537263E9B5CD506%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYM1R8Tw6/AADAIpJv/VI2VE4%26utype%3Dpre_vip%26sdk%3D13.4&deliveryId=711&key=sq_app_ad&miniWua=HHnB_2pPA8ZbaXfVqlCMcu%2BKklDd7i7qA2lFufThW1%2BBqZX8%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=703&sign=0D22934EA15B4C555C484D809EDB7C12&timestamp=1624077706&userId=2130894915&user_id=2130894915&wua=HIVW_Aq4rfhqcdsgzt3ysPSvXAvycVfIB/jy2vdlBRhA9x0A%2BSoQ6bVVGxXLGUz0SpG2MlMkkA3sDZOR65x0x0lwk4denV1tqUS4FtSxZd2%2BupXG3Zgr8/KKZ54J7w616nF0RWfTcyWMJ%2BiE82HtACob%2Bhg7um81wWYUVNWK7K0%2BmD4l5OY5R1K9e2U7B0ZJG0z%2BG/Kygc59ZTvfsZN97pZwF2NoZIpl5X/mviFJnWQHjmjM%3D"},{"key":"shuqicjbody4","val":"wua=HIVW_IT%2Bi3OFaVm6EK%2FKUNb31y5r%2FTcT7d53%2F1lBxkYCqFTP8SZIBh9qTl3SdXU5F9BhgCJ%2Bw8A4m88UHQgmnH0j0GS7nUN2HyhB7wCq98gph40%2FZOBe5FL%2Bl1OgaXh%2F9ZN3rXlo9vVPzUf7CSkXBhJEMejrtLp6UyghvSNrV%2FNPHulfBNDTjHjwQEAiQTLSNz3%2Bj4WhLZq8C0Mzhh96HboQnK4A0zyBPz7hjsnaCX91%2FpdE%3D&ua=&userId=2130894915&umidtoken=YM1R8Tw6%2FAADAIpJv%2FVI2VE4&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&asac=2A20C07RJ9F51AOEFSNHDR&timestamp=1624077708&activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&sqSv=1.0&sign=f5a9048545a4e4e8081a4644fff609dc&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.4%26utdid%3DYM1R8Tw6%252FAADAIpJv%252FVI2VE4%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2130894915%26sn%3DC3B2109B991DEA172DC399A3BDF1831F123BDD08%26umidtoken%3DYM1R8Tw6%252FAADAIpJv%252FVI2VE4%26msv%3D8.0.0%26brand%3DApple%26imei%3D52C40141EA6D0EC5F58471813537263E9B5CD506%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D3F89A34F-14C0-4FE2-BFB3-348A467C56F5"},{"key":"shuqijsspbody4","val":""},{"key":"shuqijsydurl4","val":""},{"key":"shuqijsydbody4","val":""},{"key":"shuqijsqdbody4","val":""},{"key":"shuqijsqdspyurl4","val":""},{"key":"shuqijsqdspbody4","val":""},{"key":"shuqijsrwbody4","val":""},{"key":"shuqijsfxbody4","val":""},{"key":"shuqijsbookurl4","val":""},{"key":"shuqijsbookbody4","val":""},{"key":"shuqijssprwurl4","val":""},{"key":"shuqiuserurl5","val":"https://ocean.shuqireader.com/api/jaccount/accountapi/v1/sapi/account/getBindinfo?userId=2130658784&sqSv=1.0&timestamp=1624077784&sign=f8b877c7bc1b105ed3b8ad7965dc7281&key=sq_h5_gateway"},{"key":"shuqisyurl5","val":"https://render.shuqireader.com/load/resource?sdk=13.2.2&utdid=YM1R%2BoTXGoQDADshoWRRsduc&ustatus=0&first_placeid=111111&net_env=4g&placeid=111111&user_id=2130658784&sn=0F5FC45F12172F024610810C52293CEE6F197FCF&umidtoken=YM1R%2BoTXGoQDADshoWRRsduc&msv=8.0.0&brand=Apple&imei=F9262B02B5D1DB27804EEC95F196DD312ED915C5&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=iOS&ver=210301&mod=iPhoneXR&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=27E6B33E-90B3-4246-B82D-7823CD3A1206"},{"key":"shuqisybody5","val":"appVer=4.3.6.0&imei=F9262B02B5D1DB27804EEC95F196DD312ED915C5&isNewUser=1&params=%7B%22resources%22%3A%7B%22ShuqiVipEntry%22%3A%7B%7D%2C%22personalCardConfig%22%3A%7B%7D%7D%7D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=ea516f9a9ac6cc2cadbabec24c91744f&sn=0F5FC45F12172F024610810C52293CEE6F197FCF&soft_id=21&timestamp=1624077734&user_id=2130658784&ver=210301"},{"key":"shuqispbody5","val":"_public=skinId%3D999%26idfa%3D27E6B33E-90B3-4246-B82D-7823CD3A1206%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26umidtoken%3DYM1R%2BoTXGoQDADshoWRRsduc%26user_id%3D2130658784%26sn%3D0F5FC45F12172F024610810C52293CEE6F197FCF%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3DF9262B02B5D1DB27804EEC95F196DD312ED915C5%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhoneXR%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYM1R%2BoTXGoQDADshoWRRsduc%26utype%3Dpre_vip%26sdk%3D13.2.2&deliveryId=525&key=sq_app_ad&miniWua=HHnB_2idlYmwYMRaS1g17dr%2ByqwEoH0A72VY425dPKp0j1Vs%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=626&sign=8A8529FE59247118F1CB05E43B7D7516&timestamp=1624077753&userId=2130658784&user_id=2130658784&wua=HIVW_V3ozfRL5ju3ml45Y1j3ityG8XHJ5iVZq2CpC/hMHCl5oDkUMhnWY%2BvLFTz4mrVXkjOWzgiGqEU7J08GS8FeKjfQRCoItHgxd4815UcRj0T8etCUPpInaVFfpT7VTMC1CfPyGf%2BnMLwYHF85l7%2BXzAQxx3aaLqWcMrRvwp4eT%2B1FqCdMbdTgWc5khiEkshGW4FA9oHJmArj/GC3jCw3teCzm6wGClkLfCyoew%2BaTYa40%3D"},{"key":"shuqiscbody5","val":""},{"key":"shuqiydbody5","val":""},{"key":"shuqiqdbody5","val":"clientTimestamp=1624077746&position=501&userId=2130658784&signInType=1&wua=HIVW_PrGi2haxuTuvQb3v%2F4AwOlMjVVXXolZhVmpd4LZ%2F2XF13IA%2FiEhmTjpAlyQhGLhuwLajZYzgzKS9%2Bx8185BWQnRRAktninVvKee2djZd8WJ7Sj6yTUbQdb%2B49TTMcDAjQ1htitS37rG6VjCbKzQCAS4viZ64jzfhcIBIz%2FHZIdwODmZBPn72%2BAOYGt14%2BYViMsR%2BTe0p75HEAA4UW%2FlkhJ7DtJKiPDpZwaAupKsPfn0%3D&ua=&miniWua=HHnB_hmh6tPkpzTCCQqc1AmNdQPOh4mGPAwt69hB4K0S8E0c%3D&umidtoken=YM1R%2BoTXGoQDADshoWRRsduc&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&sign=6e1e88cdecf0461c2ba69f88f705ef0b&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.2.2%26utdid%3DYM1R%252BoTXGoQDADshoWRRsduc%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2130658784%26sn%3D0F5FC45F12172F024610810C52293CEE6F197FCF%26umidtoken%3DYM1R%252BoTXGoQDADshoWRRsduc%26msv%3D8.0.0%26brand%3DApple%26imei%3DF9262B02B5D1DB27804EEC95F196DD312ED915C5%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhoneXR%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D27E6B33E-90B3-4246-B82D-7823CD3A1206"},{"key":"shuqirwbody5","val":"serviceWorkerOn=1&stopPullRefresh=1&from=ShuqiTab&upf=20368&sdk=13.2.2&utdid=YM1R%2BoTXGoQDADshoWRRsduc&ustatus=0&first_placeid=111111&net_env=4g&placeid=111111&user_id=2130658784&sn=0F5FC45F12172F024610810C52293CEE6F197FCF&umidtoken=YM1R%2BoTXGoQDADshoWRRsduc&msv=8.0.0&brand=Apple&imei=F9262B02B5D1DB27804EEC95F196DD312ED915C5&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&session=&skinColor=23B383&platform=1&ver=210301&mod=iPhoneXR&statusBarHeight=44.000000&skinVersion=1&wh=1242x2688&soft_id=21&utype=pre_vip&skinId=999&idfa=27E6B33E-90B3-4246-B82D-7823CD3A1206&params=%7B%22resources%22%3A%7B%22ShuqiBsDailyTask%22%3A%7B%7D%7D%7D&userId=2130658784&placeId=111111&timestamp=1624077762&sqSv=1.0&sign=02ca20582457db7762b898023762521e&key=sq_h5_gateway&_public="},{"key":"shuqifxbody5","val":""},{"key":"shuqisprwurl5","val":"https://ocean.shuqireader.com/api/ad/adserver/v1/api/getAdInfo?appVer=4.3.6.0&placeId=111111&platform=iOS&requestSrc=h5&resourceId=626&timestamp=1624077783&user_id=2130658784&sqSv=1.0&sign=eb5fe16b8400591963f6c029cff84c7e&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.2.2%26utdid%3DYM1R%252BoTXGoQDADshoWRRsduc%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2130658784%26sn%3D0F5FC45F12172F024610810C52293CEE6F197FCF%26umidtoken%3DYM1R%252BoTXGoQDADshoWRRsduc%26msv%3D8.0.0%26brand%3DApple%26imei%3DF9262B02B5D1DB27804EEC95F196DD312ED915C5%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhoneXR%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D27E6B33E-90B3-4246-B82D-7823CD3A1206"},{"key":"shuqijlbody5","val":"requestSrc=h5&userId=2130658784&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624077762&sqSv=1.0&sign=b0bbc42f5a9b03f74ba2a6ab9c658704&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.2.2%26utdid%3DYM1R%252BoTXGoQDADshoWRRsduc%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2130658784%26sn%3D0F5FC45F12172F024610810C52293CEE6F197FCF%26umidtoken%3DYM1R%252BoTXGoQDADshoWRRsduc%26msv%3D8.0.0%26brand%3DApple%26imei%3DF9262B02B5D1DB27804EEC95F196DD312ED915C5%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhoneXR%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D27E6B33E-90B3-4246-B82D-7823CD3A1206"},{"key":"shuqisqjlbody5","val":"src=&userId=2130658784&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624077751&sqSv=1.0&sign=657b76929611eedde0edd07a1c6a38bb&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.2.2%26utdid%3DYM1R%252BoTXGoQDADshoWRRsduc%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2130658784%26sn%3D0F5FC45F12172F024610810C52293CEE6F197FCF%26umidtoken%3DYM1R%252BoTXGoQDADshoWRRsduc%26msv%3D8.0.0%26brand%3DApple%26imei%3DF9262B02B5D1DB27804EEC95F196DD312ED915C5%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhoneXR%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D27E6B33E-90B3-4246-B82D-7823CD3A1206"},{"key":"shuqicjyurl5","val":"https://ocean.shuqireader.com/api/activity/activity/v1/lottery/info?timestamp=1624077785&userId=2130658784&activityId=311&sqSv=1.0&sign=543e6126fa64527a11220d3d570df3c7&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.2.2%26utdid%3DYM1R%252BoTXGoQDADshoWRRsduc%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2130658784%26sn%3D0F5FC45F12172F024610810C52293CEE6F197FCF%26umidtoken%3DYM1R%252BoTXGoQDADshoWRRsduc%26msv%3D8.0.0%26brand%3DApple%26imei%3DF9262B02B5D1DB27804EEC95F196DD312ED915C5%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhoneXR%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D27E6B33E-90B3-4246-B82D-7823CD3A1206"},{"key":"shuqicjcsbody5","val":"_public=skinId%3D999%26idfa%3D27E6B33E-90B3-4246-B82D-7823CD3A1206%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26umidtoken%3DYM1R%2BoTXGoQDADshoWRRsduc%26user_id%3D2130658784%26sn%3D0F5FC45F12172F024610810C52293CEE6F197FCF%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3DF9262B02B5D1DB27804EEC95F196DD312ED915C5%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhoneXR%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYM1R%2BoTXGoQDADshoWRRsduc%26utype%3Dpre_vip%26sdk%3D13.2.2&deliveryId=711&key=sq_app_ad&miniWua=HHnB_34EJV2aCLQc8ILd/ZXFRrJJ%2B3N1tF9a18p3MVXaSQA0%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=703&sign=FAEC76548A344853B952C22595898561&timestamp=1624077767&userId=2130658784&user_id=2130658784&wua=HIVW_uWvkUPbHUo8shL0RE/vVLRzuEAoPBntrBTkQVhQ7zU8zzCShD/7MZoFYVUbO3NSojRUSLVPvGGEiLuuwQJWQp2rlJHL4k/ywACyOyPx0/3JQ2Xg0AoDgCbtCp8VVA8JWd3Ks51Bgz/btU9RguHo%2BeSbMBXxvsG7k2hgyw86UCaXGEhjSL5uX/LeibB6NcmQdZFWbFuzJaj8zia9Dz2iURvSBAnBXQhSvqWLY5CC5D0o%3D"},{"key":"shuqicjbody5","val":"wua=HIVW_Yc%2FSojPRcAqi7bGdxbM2OOj2Y0AojLwCvVWOfBXPVY5h9fBNePXsMb1NUY6D%2FyTyaGy79ePZ6lLVAoZ8ptCpJcjm0gSuuY%2BZKf6ileD1lTDKANxjKyI%2FKYwzhZvCQ4Zv3f%2BI1gSePK05ZQDM9wkk%2BGa%2FQfKJ9W4GZ8%2Fvp6rMbMWb58LlGkyzQRTt1kpKNkHVCB50jNPYlDw4jJBxMzaRU%2BWIP9EmE8hePlnsiEGkVBg%3D&ua=&userId=2130658784&umidtoken=YM1R%2BoTXGoQDADshoWRRsduc&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&asac=2A20C07RJ9F51AOEFSNHDR&timestamp=1624077773&activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&sqSv=1.0&sign=e65a64ef3f9e20f725ac976011c61bf2&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.2.2%26utdid%3DYM1R%252BoTXGoQDADshoWRRsduc%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2130658784%26sn%3D0F5FC45F12172F024610810C52293CEE6F197FCF%26umidtoken%3DYM1R%252BoTXGoQDADshoWRRsduc%26msv%3D8.0.0%26brand%3DApple%26imei%3DF9262B02B5D1DB27804EEC95F196DD312ED915C5%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhoneXR%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D27E6B33E-90B3-4246-B82D-7823CD3A1206"},{"key":"shuqijsspbody5","val":""},{"key":"shuqijsydurl5","val":""},{"key":"shuqijsydbody5","val":""},{"key":"shuqijsqdbody5","val":""},{"key":"shuqijsqdspyurl5","val":""},{"key":"shuqijsqdspbody5","val":""},{"key":"shuqijsrwbody5","val":""},{"key":"shuqijsfxbody5","val":""},{"key":"shuqijsbookurl5","val":""},{"key":"shuqijsbookbody5","val":""},{"key":"shuqijssprwurl5","val":""},{"key":"shuqiuserurl6","val":"https://ocean.shuqireader.com/api/jaccount/accountapi/v1/sapi/account/getBindinfo?userId=2130112525&sqSv=1.0&timestamp=1624077842&sign=1afb491e81f3602645f4450ff018c582&key=sq_h5_gateway"},{"key":"shuqisyurl6","val":"https://render.shuqireader.com/load/resource?sdk=13.4.1&utdid=YM1R%2BoTXGoQDADshoWRRsduc&ustatus=0&first_placeid=111111&net_env=4g&placeid=111111&user_id=2130112525&sn=E84AB80E56410B571ABA572D1AF0AD4F74E73A6C&umidtoken=YM1R%2BoTXGoQDADshoWRRsduc&msv=8.0.0&brand=Apple&imei=85A44FB9214678C732479052745813B80B4D24D4&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=iOS&ver=210301&mod=UnknowniPad&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=3A9BCC08-B51E-4642-BA4C-E665BC833BDF"},{"key":"shuqisybody6","val":"appVer=4.3.6.0&imei=85A44FB9214678C732479052745813B80B4D24D4&isNewUser=1&params=%7B%22resources%22%3A%7B%22ShuqiVipEntry%22%3A%7B%7D%2C%22personalCardConfig%22%3A%7B%7D%7D%7D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=bf32c313a41095b509b415e1cfe0d910&sn=E84AB80E56410B571ABA572D1AF0AD4F74E73A6C&soft_id=21&timestamp=1624077800&user_id=2130112525&ver=210301"},{"key":"shuqispbody6","val":"_public=skinId%3D999%26idfa%3D3A9BCC08-B51E-4642-BA4C-E665BC833BDF%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26umidtoken%3DYM1R%2BoTXGoQDADshoWRRsduc%26user_id%3D2130112525%26sn%3DE84AB80E56410B571ABA572D1AF0AD4F74E73A6C%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D85A44FB9214678C732479052745813B80B4D24D4%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYM1R%2BoTXGoQDADshoWRRsduc%26utype%3Dpre_vip%26sdk%3D13.4.1&deliveryId=525&key=sq_app_ad&miniWua=HHnB_rpAAyTOY5GV2CfY8xknvhkEZnZLS/x4QV2Agxrtjg5E%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=626&sign=E03CFEC580AAFBB74D17CB29E8A2CAFB&timestamp=1624077817&userId=2130112525&user_id=2130112525&wua=HIVW_GOEvuhaT0xe1IWZc356v/tuxfi6El9iHrjzER5vpfYjkJ2b82wHjRC5CLD6AKbgjjGTuRdG3SbJAT2NyYQHPCj8lb2p6vXDyadNdMLLXkY5uPVPh3ngWyHXjxkmtHxt0k%2BRE25ejGC5YUhNN0g7uqx1eM4HVAX%2BYpeuEbp1pVtvxWZ6Vs3NtGRHJHxTBK%2BFOuFtvcYZ4tG7Zu1BbA6CJkwnrPfmCDB6JgGKBrKLMhe4%3D"},{"key":"shuqiscbody6","val":""},{"key":"shuqiydbody6","val":""},{"key":"shuqiqdbody6","val":"clientTimestamp=1624077810&position=501&userId=2130112525&signInType=1&wua=HIVW_qxlObB094fjlmIeIiII1TO6yD0vc0zk9tnB%2BRTdCcN%2BYo1U%2Fe5QvsC3g3kdiWyFVI6LdudCmGGNPFzG8o6IheqgeK6lo%2F13CRUehm%2FqTTQFW3TbioSHR5IQ8YiT7awLa8zTkMM2plflAFnKXhfDEwlNxJ1%2B%2FczNweTvBlnWMdjohSul0OqXN0fWdEKbmgQzoGVoBsmKMPUi6WlQLB7AZJcpsDQIepbF1lauB%2BIC%2F9zg%3D&ua=&miniWua=HHnB_N8sApWJAeGRaUOkHmdj4TPPaTWu44yZkNQFaDVuDKMk%3D&umidtoken=YM1R%2BoTXGoQDADshoWRRsduc&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&sign=02cad64538af19a8cb11bbfa17b20382&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.4.1%26utdid%3DYM1R%252BoTXGoQDADshoWRRsduc%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2130112525%26sn%3DE84AB80E56410B571ABA572D1AF0AD4F74E73A6C%26umidtoken%3DYM1R%252BoTXGoQDADshoWRRsduc%26msv%3D8.0.0%26brand%3DApple%26imei%3D85A44FB9214678C732479052745813B80B4D24D4%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D3A9BCC08-B51E-4642-BA4C-E665BC833BDF"},{"key":"shuqirwbody6","val":"serviceWorkerOn=1&stopPullRefresh=1&from=ShuqiTab&upf=20368&sdk=13.4.1&utdid=YM1R%2BoTXGoQDADshoWRRsduc&ustatus=0&first_placeid=111111&net_env=4g&placeid=111111&user_id=2130112525&sn=E84AB80E56410B571ABA572D1AF0AD4F74E73A6C&umidtoken=YM1R%2BoTXGoQDADshoWRRsduc&msv=8.0.0&brand=Apple&imei=85A44FB9214678C732479052745813B80B4D24D4&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=1&ver=210301&mod=UnknowniPad&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=3A9BCC08-B51E-4642-BA4C-E665BC833BDF&params=%7B%22resources%22%3A%7B%22ShuqiBsDailyTask%22%3A%7B%7D%7D%7D&userId=2130112525&placeId=111111&timestamp=1624077823&sqSv=1.0&sign=da0d97eb346d3b7d70fbe5c319142bf0&key=sq_h5_gateway&_public="},{"key":"shuqifxbody6","val":""},{"key":"shuqisprwurl6","val":"https://ocean.shuqireader.com/api/ad/adserver/v1/api/getAdInfo?appVer=4.3.6.0&placeId=111111&platform=iOS&requestSrc=h5&resourceId=626&timestamp=1624077843&user_id=2130112525&sqSv=1.0&sign=a67a7f4903a89b37ab876f22112991fc&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.4.1%26utdid%3DYM1R%252BoTXGoQDADshoWRRsduc%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2130112525%26sn%3DE84AB80E56410B571ABA572D1AF0AD4F74E73A6C%26umidtoken%3DYM1R%252BoTXGoQDADshoWRRsduc%26msv%3D8.0.0%26brand%3DApple%26imei%3D85A44FB9214678C732479052745813B80B4D24D4%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D3A9BCC08-B51E-4642-BA4C-E665BC833BDF"},{"key":"shuqijlbody6","val":"requestSrc=h5&userId=2130112525&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624077823&sqSv=1.0&sign=11bf4168bb8b16205df636d3661cb00d&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.4.1%26utdid%3DYM1R%252BoTXGoQDADshoWRRsduc%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2130112525%26sn%3DE84AB80E56410B571ABA572D1AF0AD4F74E73A6C%26umidtoken%3DYM1R%252BoTXGoQDADshoWRRsduc%26msv%3D8.0.0%26brand%3DApple%26imei%3D85A44FB9214678C732479052745813B80B4D24D4%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D3A9BCC08-B51E-4642-BA4C-E665BC833BDF"},{"key":"shuqisqjlbody6","val":"src=&userId=2130112525&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624077814&sqSv=1.0&sign=80aef80a12609fdb1b64cc645c56fb5b&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.4.1%26utdid%3DYM1R%252BoTXGoQDADshoWRRsduc%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2130112525%26sn%3DE84AB80E56410B571ABA572D1AF0AD4F74E73A6C%26umidtoken%3DYM1R%252BoTXGoQDADshoWRRsduc%26msv%3D8.0.0%26brand%3DApple%26imei%3D85A44FB9214678C732479052745813B80B4D24D4%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D3A9BCC08-B51E-4642-BA4C-E665BC833BDF"},{"key":"shuqicjyurl6","val":"https://ocean.shuqireader.com/api/activity/activity/v1/lottery/info?timestamp=1624077845&userId=2130112525&activityId=311&sqSv=1.0&sign=810ac7eebb96598b12af50f6ede916b1&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.4.1%26utdid%3DYM1R%252BoTXGoQDADshoWRRsduc%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2130112525%26sn%3DE84AB80E56410B571ABA572D1AF0AD4F74E73A6C%26umidtoken%3DYM1R%252BoTXGoQDADshoWRRsduc%26msv%3D8.0.0%26brand%3DApple%26imei%3D85A44FB9214678C732479052745813B80B4D24D4%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D3A9BCC08-B51E-4642-BA4C-E665BC833BDF"},{"key":"shuqicjcsbody6","val":"_public=skinId%3D999%26idfa%3D3A9BCC08-B51E-4642-BA4C-E665BC833BDF%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26umidtoken%3DYM1R%2BoTXGoQDADshoWRRsduc%26user_id%3D2130112525%26sn%3DE84AB80E56410B571ABA572D1AF0AD4F74E73A6C%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D85A44FB9214678C732479052745813B80B4D24D4%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYM1R%2BoTXGoQDADshoWRRsduc%26utype%3Dpre_vip%26sdk%3D13.4.1&deliveryId=711&key=sq_app_ad&miniWua=HHnB_c34O8q8iR0qFVkrCZUS6pw5Y5oBu0tZ1w7zAypqFoAQ%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=703&sign=C7D94EF7FF39F30B9D6CB34E7607D27A&timestamp=1624077828&userId=2130112525&user_id=2130112525&wua=HIVW_axbCx8Kp9hBhT5m7L/MK%2BeeuX4xZjaYc0xg3lxiJPpdYoqcVRe%2BURCmPGUgRwyWsYISzrozZaqWgkKArXuZtVmQkPg9sN3HhLQU4FKeAZKv1CIfRZxmjzYkBQ0Mu8%2BLAXJ8Pgryp/9eaS0wFf9NhiH0EW/mTSVeKgeFrWO0uwO2hWGXX49HTLF2Gtsi04d4e9OgEEcA1iejjfBoSuMuzU4pX1JrjOgt6BHuZLgoox1g%3D"},{"key":"shuqicjbody6","val":"wua=HIVW_3iZwbelP%2BzcJvufJeJCOu3rcMdx6s%2BQaHrIENo3%2FKhyOOgV%2Bxy%2FvLhviQFAIf4Y9jHkjwW9O19JBBKsKOoaoAfujAQ9PsO%2BeBdgJhuOnZmTAW25UI5OPHQyVaF3evk2bNqLhoSJbqn2q85bh7KhIZJWvil8%2FW%2By5e1A1inFMxBVKT628kYgDP4gUoUVwSQ2BlV3mcRzcrx3f61hcxrSpWJxeKBepyi1HMkc7xHR9BrQ%3D&ua=&userId=2130112525&umidtoken=YM1R%2BoTXGoQDADshoWRRsduc&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&asac=2A20C07RJ9F51AOEFSNHDR&timestamp=1624077833&activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&sqSv=1.0&sign=8bed4159d0572beb5f6957cf09baba47&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.4.1%26utdid%3DYM1R%252BoTXGoQDADshoWRRsduc%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2130112525%26sn%3DE84AB80E56410B571ABA572D1AF0AD4F74E73A6C%26umidtoken%3DYM1R%252BoTXGoQDADshoWRRsduc%26msv%3D8.0.0%26brand%3DApple%26imei%3D85A44FB9214678C732479052745813B80B4D24D4%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D3A9BCC08-B51E-4642-BA4C-E665BC833BDF"},{"key":"shuqijsspbody6","val":""},{"key":"shuqijsydurl6","val":""},{"key":"shuqijsydbody6","val":""},{"key":"shuqijsqdbody6","val":""},{"key":"shuqijsqdspyurl6","val":""},{"key":"shuqijsqdspbody6","val":""},{"key":"shuqijsrwbody6","val":""},{"key":"shuqijsfxbody6","val":""},{"key":"shuqijsbookurl6","val":""},{"key":"shuqijsbookbody6","val":""},{"key":"shuqijssprwurl6","val":""},{"key":"shuqiuserurl7","val":"https://ocean.shuqireader.com/api/jaccount/accountapi/v1/sapi/account/getBindinfo?userId=2127472059&sqSv=1.0&timestamp=1624077906&sign=9be7467d27c5981a7d02da1e0f50a2f8&key=sq_h5_gateway"},{"key":"shuqisyurl7","val":"https://render.shuqireader.com/load/resource?sdk=13.2&utdid=YM12IYMcZO4DAOk17D2z5oPU&ustatus=0&first_placeid=111111&net_env=3g&placeid=111111&user_id=2127472059&sn=FEF781FE5CA178A240E644032FF6A05A45D641C4&umidtoken=YM12IYMcZO4DAOk17D2z5oPU&msv=8.0.0&brand=Apple&imei=BAE03D0B0611D9C13ED41CD98ED19BCC9F351B98&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=iOS&ver=210301&mod=UnknowniPod&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=B21643E1-4C07-4107-B7A2-2B958FF39554"},{"key":"shuqisybody7","val":"appVer=4.3.6.0&imei=BAE03D0B0611D9C13ED41CD98ED19BCC9F351B98&isNewUser=1&params=%7B%22resources%22%3A%7B%22ShuqiVipEntry%22%3A%7B%7D%2C%22personalCardConfig%22%3A%7B%7D%7D%7D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=d307e214831ba7446e9ab738f954a921&sn=FEF781FE5CA178A240E644032FF6A05A45D641C4&soft_id=21&timestamp=1624077864&user_id=2127472059&ver=210301"},{"key":"shuqispbody7","val":"_public=skinId%3D999%26idfa%3DB21643E1-4C07-4107-B7A2-2B958FF39554%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26umidtoken%3DYM12IYMcZO4DAOk17D2z5oPU%26user_id%3D2127472059%26sn%3DFEF781FE5CA178A240E644032FF6A05A45D641C4%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3DBAE03D0B0611D9C13ED41CD98ED19BCC9F351B98%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DUnknowniPod%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYM12IYMcZO4DAOk17D2z5oPU%26utype%3Dpre_vip%26sdk%3D13.2&deliveryId=525&key=sq_app_ad&miniWua=HHnB_7HDL%2BLF3hWpzdmvq631/B20G%2BA/Ld/E64qK/amBO/%2BM%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=626&sign=831FC43ABB6C2AC00E4D2773FDE15614&timestamp=1624077881&userId=2127472059&user_id=2127472059&wua=HIVW_8nlyHCdPFuwHTFnVA3Lf49z5ItQt%2BKoQxVExWTQH57OhZGC/iVVj/UVES4o/iC9g4Ikb2lNzH7mlArgabJYlOilPSrXkOi3VFg541FMBCBkOkzdnDNw%2BSGEismpNkRJgcxe3zJo6CBrdBlqjKuFNyWIOBWU7mKxpO4rAwLEIY2JFK0Ua2BGEIHHySer%2BASB03aG5mMdyJl5qvwN2Zz7TOOCz9cJ9PxU2emXwqiZyHYg%3D"},{"key":"shuqiscbody7","val":""},{"key":"shuqiydbody7","val":""},{"key":"shuqiqdbody7","val":"clientTimestamp=1624077873&position=501&userId=2127472059&signInType=1&wua=HIVW_lyG%2FuZSX6awrJEesxYQy2yzFl60pWzULKoF2IKUTjS1HtUXZGwuIfPTQaZITjlGI%2BG7lC%2F5Q648EsPmCKFmyXmwaKDLVIviQ%2Fscw8YvMk3KK0JgOEj%2BMb95osLqXgWnKnFrlboOxUT60xfFL7Brelg6FA0LXr8EBfgd6pMZj7BLVotdvJEyTPskqXM1jpJ6W%2FWI4TD3cC5Cpa0DETDCF%2BhOW9l68Y9yIpO0mglUD1%2F8%3D&ua=&miniWua=HHnB_rgSlIS6QzXeJU8paFpFjQVm80cvYGsi9NAGDNTSfWGA%3D&umidtoken=YM12IYMcZO4DAOk17D2z5oPU&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&sign=01634f245fa987e9a41d4ce457da1efe&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.2%26utdid%3DYM12IYMcZO4DAOk17D2z5oPU%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2127472059%26sn%3DFEF781FE5CA178A240E644032FF6A05A45D641C4%26umidtoken%3DYM12IYMcZO4DAOk17D2z5oPU%26msv%3D8.0.0%26brand%3DApple%26imei%3DBAE03D0B0611D9C13ED41CD98ED19BCC9F351B98%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPod%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DB21643E1-4C07-4107-B7A2-2B958FF39554"},{"key":"shuqirwbody7","val":"serviceWorkerOn=1&stopPullRefresh=1&from=ShuqiTab&upf=20368&sdk=13.2&utdid=YM12IYMcZO4DAOk17D2z5oPU&ustatus=0&first_placeid=111111&net_env=3g&placeid=111111&user_id=2127472059&sn=FEF781FE5CA178A240E644032FF6A05A45D641C4&umidtoken=YM12IYMcZO4DAOk17D2z5oPU&msv=8.0.0&brand=Apple&imei=BAE03D0B0611D9C13ED41CD98ED19BCC9F351B98&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=1&ver=210301&mod=UnknowniPod&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=B21643E1-4C07-4107-B7A2-2B958FF39554&params=%7B%22resources%22%3A%7B%22ShuqiBsDailyTask%22%3A%7B%7D%7D%7D&userId=2127472059&placeId=111111&timestamp=1624077884&sqSv=1.0&sign=0672af4e1763ebc4c6e9adb9c6c908f8&key=sq_h5_gateway&_public="},{"key":"shuqifxbody7","val":""},{"key":"shuqisprwurl7","val":"https://ocean.shuqireader.com/api/ad/adserver/v1/api/getAdInfo?appVer=4.3.6.0&placeId=111111&platform=iOS&requestSrc=h5&resourceId=626&timestamp=1624077907&user_id=2127472059&sqSv=1.0&sign=092ac85f431fdb077c7242b9e89d62f3&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.2%26utdid%3DYM12IYMcZO4DAOk17D2z5oPU%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2127472059%26sn%3DFEF781FE5CA178A240E644032FF6A05A45D641C4%26umidtoken%3DYM12IYMcZO4DAOk17D2z5oPU%26msv%3D8.0.0%26brand%3DApple%26imei%3DBAE03D0B0611D9C13ED41CD98ED19BCC9F351B98%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPod%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DB21643E1-4C07-4107-B7A2-2B958FF39554"},{"key":"shuqijlbody7","val":"requestSrc=h5&userId=2127472059&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624077884&sqSv=1.0&sign=d816556ee28ce2f36d596acbab03f403&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.2%26utdid%3DYM12IYMcZO4DAOk17D2z5oPU%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2127472059%26sn%3DFEF781FE5CA178A240E644032FF6A05A45D641C4%26umidtoken%3DYM12IYMcZO4DAOk17D2z5oPU%26msv%3D8.0.0%26brand%3DApple%26imei%3DBAE03D0B0611D9C13ED41CD98ED19BCC9F351B98%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPod%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DB21643E1-4C07-4107-B7A2-2B958FF39554"},{"key":"shuqisqjlbody7","val":"src=&userId=2127472059&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624077878&sqSv=1.0&sign=69fbe9aa8d7d52eda0c66bb3b86812f4&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.2%26utdid%3DYM12IYMcZO4DAOk17D2z5oPU%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2127472059%26sn%3DFEF781FE5CA178A240E644032FF6A05A45D641C4%26umidtoken%3DYM12IYMcZO4DAOk17D2z5oPU%26msv%3D8.0.0%26brand%3DApple%26imei%3DBAE03D0B0611D9C13ED41CD98ED19BCC9F351B98%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPod%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DB21643E1-4C07-4107-B7A2-2B958FF39554"},{"key":"shuqicjyurl7","val":"https://ocean.shuqireader.com/api/activity/activity/v1/lottery/info?timestamp=1624077909&userId=2127472059&activityId=311&sqSv=1.0&sign=595ee16d3692cdd35109a4ef06be3bc8&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.2%26utdid%3DYM12IYMcZO4DAOk17D2z5oPU%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2127472059%26sn%3DFEF781FE5CA178A240E644032FF6A05A45D641C4%26umidtoken%3DYM12IYMcZO4DAOk17D2z5oPU%26msv%3D8.0.0%26brand%3DApple%26imei%3DBAE03D0B0611D9C13ED41CD98ED19BCC9F351B98%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPod%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DB21643E1-4C07-4107-B7A2-2B958FF39554"},{"key":"shuqicjcsbody7","val":"_public=skinId%3D999%26idfa%3DB21643E1-4C07-4107-B7A2-2B958FF39554%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26umidtoken%3DYM12IYMcZO4DAOk17D2z5oPU%26user_id%3D2127472059%26sn%3DFEF781FE5CA178A240E644032FF6A05A45D641C4%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3DBAE03D0B0611D9C13ED41CD98ED19BCC9F351B98%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DUnknowniPod%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYM12IYMcZO4DAOk17D2z5oPU%26utype%3Dpre_vip%26sdk%3D13.2&deliveryId=711&key=sq_app_ad&miniWua=HHnB_lMY03iiWVwvHtUKXmFeohu017eiQlCUuiXgrMB3RvMo%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=703&sign=20189E726B35E4D1634A754FA2469DE4&timestamp=1624077890&userId=2127472059&user_id=2127472059&wua=HIVW_WRJSOpNTVvnYCs0s1%2BvaJuIkokr%2BJYuX9LAKGmC8qwumTyBpwYW632ZbDB8wTLs%2B4ny8ZmBWtzqp0cjERGj31OzTYdN7/n%2BXA/jGfi1R7eQa0ZU4ja6DYoFElQfinY8DQ3jQWf80lQEF7/w62a3PhpdIIIVuukY0hv/xWhCDRLiJYMIJaSoiNCjciLflSbdjStYreixtIZIAxr/xFtd8EiDfbZPtQiKkB3s0oq914ZY%3D"},{"key":"shuqicjbody7","val":"wua=HIVW_wHXFWxFeLY00raKNCdPDB696TQIVURRyp5iXCN7%2Boq%2B8sB7jH%2B0iGJxCbjwBwR3b0e68NsWMJ1HDDF%2B9RtmeQxbT%2FLjzTZq6KNBPKkyNerhkmEvt1SAlykByijzRGh1a2Q%2FeiSbNKzazQ4LApeK9xFsj1QfFaf5jJiEXCsApdvjUk7%2B0EgLdAJOSjY5OANeBwMsnoGOFNI5yp8tqCQ9FBPIYVe%2FOYrAhRBMl5RQcNzA%3D&ua=&userId=2127472059&umidtoken=YM12IYMcZO4DAOk17D2z5oPU&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&asac=2A20C07RJ9F51AOEFSNHDR&timestamp=1624077897&activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&sqSv=1.0&sign=64c980385cdacc88a6549e6a9cd287fe&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.2%26utdid%3DYM12IYMcZO4DAOk17D2z5oPU%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2127472059%26sn%3DFEF781FE5CA178A240E644032FF6A05A45D641C4%26umidtoken%3DYM12IYMcZO4DAOk17D2z5oPU%26msv%3D8.0.0%26brand%3DApple%26imei%3DBAE03D0B0611D9C13ED41CD98ED19BCC9F351B98%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPod%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DB21643E1-4C07-4107-B7A2-2B958FF39554"},{"key":"shuqijsspbody7","val":""},{"key":"shuqijsydurl7","val":""},{"key":"shuqijsydbody7","val":""},{"key":"shuqijsqdbody7","val":""},{"key":"shuqijsqdspyurl7","val":""},{"key":"shuqijsqdspbody7","val":""},{"key":"shuqijsrwbody7","val":""},{"key":"shuqijsfxbody7","val":""},{"key":"shuqijsbookurl7","val":""},{"key":"shuqijsbookbody7","val":""},{"key":"shuqijssprwurl7","val":""},{"key":"shuqiuserurl8","val":"https://ocean.shuqireader.com/api/jaccount/accountapi/v1/sapi/account/getBindinfo?userId=2129613959&sqSv=1.0&timestamp=1624078023&sign=9e49a3072715b3dfb02efb4bbc1fb7b2&key=sq_h5_gateway"},{"key":"shuqisyurl8","val":"https://render.shuqireader.com/load/resource?sdk=13.0&utdid=YM12aeJnqPoDACk1aGhajh5r&ustatus=0&first_placeid=111111&net_env=4g&placeid=111111&user_id=2129613959&sn=1AD9226C7B4BA24E32DD67CD940CB871081C3BA6&umidtoken=YM12aeJnqPoDACk1aGhajh5r&msv=8.0.0&brand=Apple&imei=09DF794A32887914BDB0A696F637F7DC8DC0E6A5&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=iOS&ver=210301&mod=UnknowniPad&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=1CD87C1B-61AA-4B1E-BFB4-37D75D9284D4"},{"key":"shuqisybody8","val":"appVer=4.3.6.0&imei=09DF794A32887914BDB0A696F637F7DC8DC0E6A5&isNewUser=1&params=%7B%22resources%22%3A%7B%22ShuqiVipEntry%22%3A%7B%7D%2C%22personalCardConfig%22%3A%7B%7D%7D%7D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=f6f7b573cc25ce0789c0b9838b380fc8&sn=1AD9226C7B4BA24E32DD67CD940CB871081C3BA6&soft_id=21&timestamp=1624077960&user_id=2129613959&ver=210301"},{"key":"shuqispbody8","val":"_public=skinId%3D999%26idfa%3D1CD87C1B-61AA-4B1E-BFB4-37D75D9284D4%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26umidtoken%3DYM12aeJnqPoDACk1aGhajh5r%26user_id%3D2129613959%26sn%3D1AD9226C7B4BA24E32DD67CD940CB871081C3BA6%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D09DF794A32887914BDB0A696F637F7DC8DC0E6A5%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYM12aeJnqPoDACk1aGhajh5r%26utype%3Dpre_vip%26sdk%3D13.0&deliveryId=525&key=sq_app_ad&miniWua=HHnB_65wD3eN3qddUdOA4IknHD3XGiQimm3BIvXLg6IFY7QI%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=626&sign=5DADACD00664E3B3A6EBDAE15CCFB18B&timestamp=1624077998&userId=2129613959&user_id=2129613959&wua=HIVW_MDFUgpSfOQOypQz8C/0McpnkNkEi//S%2BJkEnHEIWWA5Yu2EDGHpYt9zCPwXiA8mS9QsGiWgsdYev/R1OCC8trIhGpN5VbYvKGlHVlu5Pmz707GfCCqce8uHogdWcu4rLBu59K%2BSlEgpgni3qKOIKKdiV2nJQvfLSyCWrYLmolQg6OgfuVGNvVJOiVyQ5C2K4u0/sokAN744pq9ofpontbifYrn5n08RNTkaMLuSyo5M%3D"},{"key":"shuqiscbody8","val":""},{"key":"shuqiydbody8","val":""},{"key":"shuqiqdbody8","val":"clientTimestamp=1624077991&position=501&userId=2129613959&signInType=1&wua=HIVW_%2FLXnVd%2ByBx34DSgfSXuJKmQFt784tK%2B2TbZe4H57SWubdQ6YsObB1EJqEO08cEtHD3wFqjMPXPsGKKWREQKIIcyRrMeQEzVB4pIRg3Qd8RMdeUlKQmQpwrtS6qY2a7VFPHWPJNAjYVsmRUPJxzm0mIY%2BTErm1e4Wg2h5OnEQEvZ8ClyKIhxBk%2FfHHlQfXHnFweZQV3emO3PiJR9GvJOAyiFvgFCHz%2Bp2EpuKjhsj6CQ%3D&ua=&miniWua=HHnB_spwOFUGEp%2Bz9S8RkxmPy02u51hraFWqOvGtpoGvOTmI%3D&umidtoken=YM12aeJnqPoDACk1aGhajh5r&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&sign=d29e00e01b03137508b216b746f43716&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.0%26utdid%3DYM12aeJnqPoDACk1aGhajh5r%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2129613959%26sn%3D1AD9226C7B4BA24E32DD67CD940CB871081C3BA6%26umidtoken%3DYM12aeJnqPoDACk1aGhajh5r%26msv%3D8.0.0%26brand%3DApple%26imei%3D09DF794A32887914BDB0A696F637F7DC8DC0E6A5%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D1CD87C1B-61AA-4B1E-BFB4-37D75D9284D4"},{"key":"shuqirwbody8","val":"serviceWorkerOn=1&stopPullRefresh=1&from=ShuqiTab&upf=20368&sdk=13.0&utdid=YM12aeJnqPoDACk1aGhajh5r&ustatus=0&first_placeid=111111&net_env=4g&placeid=111111&user_id=2129613959&sn=1AD9226C7B4BA24E32DD67CD940CB871081C3BA6&umidtoken=YM12aeJnqPoDACk1aGhajh5r&msv=8.0.0&brand=Apple&imei=09DF794A32887914BDB0A696F637F7DC8DC0E6A5&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&session=&skinColor=23B383&platform=1&ver=210301&mod=UnknowniPad&statusBarHeight=44.000000&skinVersion=1&wh=1242x2688&soft_id=21&utype=pre_vip&skinId=999&idfa=1CD87C1B-61AA-4B1E-BFB4-37D75D9284D4&params=%7B%22resources%22%3A%7B%22ShuqiBsDailyTask%22%3A%7B%7D%7D%7D&userId=2129613959&placeId=111111&timestamp=1624078004&sqSv=1.0&sign=9e204cb8d0283053928a11e796941b26&key=sq_h5_gateway&_public="},{"key":"shuqifxbody8","val":""},{"key":"shuqisprwurl8","val":"https://ocean.shuqireader.com/api/ad/adserver/v1/api/getAdInfo?appVer=4.3.6.0&placeId=111111&platform=iOS&requestSrc=h5&resourceId=626&timestamp=1624078024&user_id=2129613959&sqSv=1.0&sign=fb5c3e71a893ae68747c8c9694ee9294&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.0%26utdid%3DYM12aeJnqPoDACk1aGhajh5r%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2129613959%26sn%3D1AD9226C7B4BA24E32DD67CD940CB871081C3BA6%26umidtoken%3DYM12aeJnqPoDACk1aGhajh5r%26msv%3D8.0.0%26brand%3DApple%26imei%3D09DF794A32887914BDB0A696F637F7DC8DC0E6A5%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D1CD87C1B-61AA-4B1E-BFB4-37D75D9284D4"},{"key":"shuqijlbody8","val":"requestSrc=h5&userId=2129613959&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624078004&sqSv=1.0&sign=60a64184c7f8611fe13b87af4d8c34cf&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.0%26utdid%3DYM12aeJnqPoDACk1aGhajh5r%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2129613959%26sn%3D1AD9226C7B4BA24E32DD67CD940CB871081C3BA6%26umidtoken%3DYM12aeJnqPoDACk1aGhajh5r%26msv%3D8.0.0%26brand%3DApple%26imei%3D09DF794A32887914BDB0A696F637F7DC8DC0E6A5%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D1CD87C1B-61AA-4B1E-BFB4-37D75D9284D4"},{"key":"shuqisqjlbody8","val":"src=&userId=2129613959&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624077996&sqSv=1.0&sign=32cceff98f5d518cb6d8910bbfd5ec9f&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.0%26utdid%3DYM12aeJnqPoDACk1aGhajh5r%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2129613959%26sn%3D1AD9226C7B4BA24E32DD67CD940CB871081C3BA6%26umidtoken%3DYM12aeJnqPoDACk1aGhajh5r%26msv%3D8.0.0%26brand%3DApple%26imei%3D09DF794A32887914BDB0A696F637F7DC8DC0E6A5%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D1CD87C1B-61AA-4B1E-BFB4-37D75D9284D4"},{"key":"shuqicjyurl8","val":"https://ocean.shuqireader.com/api/activity/activity/v1/lottery/info?timestamp=1624078026&userId=2129613959&activityId=311&sqSv=1.0&sign=0f8e33b0c6dd6a4f64eb2f14c78dff18&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.0%26utdid%3DYM12aeJnqPoDACk1aGhajh5r%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2129613959%26sn%3D1AD9226C7B4BA24E32DD67CD940CB871081C3BA6%26umidtoken%3DYM12aeJnqPoDACk1aGhajh5r%26msv%3D8.0.0%26brand%3DApple%26imei%3D09DF794A32887914BDB0A696F637F7DC8DC0E6A5%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D1CD87C1B-61AA-4B1E-BFB4-37D75D9284D4"},{"key":"shuqicjcsbody8","val":"_public=skinId%3D999%26idfa%3D1CD87C1B-61AA-4B1E-BFB4-37D75D9284D4%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26umidtoken%3DYM12aeJnqPoDACk1aGhajh5r%26user_id%3D2129613959%26sn%3D1AD9226C7B4BA24E32DD67CD940CB871081C3BA6%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D09DF794A32887914BDB0A696F637F7DC8DC0E6A5%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYM12aeJnqPoDACk1aGhajh5r%26utype%3Dpre_vip%26sdk%3D13.0&deliveryId=711&key=sq_app_ad&miniWua=HHnB_rowHut0NsILGe4vcLeGObBPqnsUjDtP5W/1WSjZf6Qw%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=703&sign=82647BAFCC11A77D4BB8B2E4892359AE&timestamp=1624078009&userId=2129613959&user_id=2129613959&wua=HIVW_R95BOAYSAJuDjF4wL8Ah3uxuwnihqG2dhbOc%2BJAJthbHZh2Jx8qXm9p1hSCZkdL8Npv/%2BNsgFiVyrwdzyEYcHPirr3hczKKnAGUX0dknCsVj2JbE97WO071t6IEe6mQjew4gSq4GLdyEVHt3t7IFwfzXg9PyzIzZkJA61nBz5sRaRbYuTjhwYZafUTTxpgHpFeH4r/N3P6TPJVqAmA05Mkyt3iVG85EAhYa0wvubAqs%3D"},{"key":"shuqicjbody8","val":"wua=HIVW_%2BFm2q%2FMUew5g4YiIc7NZx%2BaVIG5xWjzYyJa6G0HVHZ4YR6DUQRdQdwQ0ff8PahFGPTZ32%2Bl7wCTBKLh7XAthAe1%2FezLFbzArrx842vatpUW5M4%2FvmT2rgpT0ZVw0a5tLT%2FmNpPOM5DWqSGSH2P5kpdKcntRN4S8vdDFXt79IMJyn3NjBhMQcdilGwxxRIE30PGKQwxtTcer6SuLNAGXitsX32xkx2%2B0H6Moq5to%2BgG0%3D&ua=&userId=2129613959&umidtoken=YM12aeJnqPoDACk1aGhajh5r&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&asac=2A20C07RJ9F51AOEFSNHDR&timestamp=1624078015&activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&sqSv=1.0&sign=ddea64eece722752749c5737f05e10be&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.0%26utdid%3DYM12aeJnqPoDACk1aGhajh5r%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2129613959%26sn%3D1AD9226C7B4BA24E32DD67CD940CB871081C3BA6%26umidtoken%3DYM12aeJnqPoDACk1aGhajh5r%26msv%3D8.0.0%26brand%3DApple%26imei%3D09DF794A32887914BDB0A696F637F7DC8DC0E6A5%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D1CD87C1B-61AA-4B1E-BFB4-37D75D9284D4"},{"key":"shuqijsspbody8","val":""},{"key":"shuqijsydurl8","val":""},{"key":"shuqijsydbody8","val":""},{"key":"shuqijsqdbody8","val":""},{"key":"shuqijsqdspyurl8","val":""},{"key":"shuqijsqdspbody8","val":""},{"key":"shuqijsrwbody8","val":""},{"key":"shuqijsfxbody8","val":""},{"key":"shuqijsbookurl8","val":""},{"key":"shuqijsbookbody8","val":""},{"key":"shuqijssprwurl8","val":""},{"key":"shuqiuserurl9","val":"https://ocean.shuqireader.com/api/jaccount/accountapi/v1/sapi/account/getBindinfo?userId=2129961797&sqSv=1.0&timestamp=1624078087&sign=ab3e5f97cc93cd279718e71d1e092d06&key=sq_h5_gateway"},{"key":"shuqisyurl9","val":"https://render.shuqireader.com/load/resource?sdk=13.1.2&utdid=YM121p9Sa%2BQDABct3uOualCh&ustatus=0&first_placeid=111111&net_env=wifi&placeid=111111&user_id=2129961797&sn=AF49B063CCC9AA465E87536AD0033EF97FBF453E&umidtoken=YM121p9Sa%2BQDABct3uOualCh&msv=8.0.0&brand=Apple&imei=8D3846EB9973696C44A20A42F3F7FBF2DB3D161E&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=iOS&ver=210301&mod=iPad4G&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=EC8E2EE0-B71B-431B-9460-9CBD6FCB8AE3"},{"key":"shuqisybody9","val":"appVer=4.3.6.0&imei=8D3846EB9973696C44A20A42F3F7FBF2DB3D161E&isNewUser=1&params=%7B%22resources%22%3A%7B%22ShuqiVipEntry%22%3A%7B%7D%2C%22personalCardConfig%22%3A%7B%7D%7D%7D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=704dc00960084180893afdf114df90ed&sn=AF49B063CCC9AA465E87536AD0033EF97FBF453E&soft_id=21&timestamp=1624078040&user_id=2129961797&ver=210301"},{"key":"shuqispbody9","val":"_public=skinId%3D999%26idfa%3DEC8E2EE0-B71B-431B-9460-9CBD6FCB8AE3%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26umidtoken%3DYM121p9Sa%2BQDABct3uOualCh%26user_id%3D2129961797%26sn%3DAF49B063CCC9AA465E87536AD0033EF97FBF453E%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D8D3846EB9973696C44A20A42F3F7FBF2DB3D161E%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPad4G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYM121p9Sa%2BQDABct3uOualCh%26utype%3Dpre_vip%26sdk%3D13.1.2&deliveryId=525&key=sq_app_ad&miniWua=HHnB_xY78gMVYjBeL4KcyTk8URD/yA%2B9tyh1hE1AuW%2BGGO1M%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=626&sign=41EC488E8484AACB0BCC6599A4093707&timestamp=1624078062&userId=2129961797&user_id=2129961797&wua=HIVW_IsGdIlOHuW/h4xD0NdhDC3OTCBUHWBin8KiVWmC9kHbStr9sNikfN47n14KU4vzdi2aUyFmTKfDVGMLeaMqFigTEfIo1/J3PqTmYwHA5j62B5CC%2BtqLGM8PTHYHhWhgrGvwytAgZ5idNOCwhXW%2B2yq7kv57nKtpIz7AvQ8lToUzMYY79I1E7d2hOwtlx2zTu2J/6iCtqO%2B7l7hkk0jyZWW18I18yRKFfS%2Bc5WAN/oSw%3D"},{"key":"shuqiscbody9","val":""},{"key":"shuqiydbody9","val":""},{"key":"shuqiqdbody9","val":"clientTimestamp=1624078054&position=501&userId=2129961797&signInType=1&wua=HIVW_2wfvT1BRiMWKggEBGCmDIffUeuqEAlUBNw2dpqVi1QPdF3GqPYp3PwN2LZDEbEKsOjbyK9tED1RhpGCngIjaiRazG4yN36V8VP%2F%2BbC%2FRr9WYwLq2996bYIh6eweuKOIgBShV%2BN6SzPEQCEdeYPFEKCAoY%2BtProRS%2B6ayoM00uZZGHDmzCOLaC0pX17Mtvemb%2FdyZHBkFomNS9HANy1x%2FwLsMGbMB1Ev5khWuMZCbalg%3D&ua=&miniWua=HHnB_6rqKcoTFqTAw5HPa3NeFStDDS81GRZ%2B%2FDO7x%2Fc2bcsc%3D&umidtoken=YM121p9Sa%2BQDABct3uOualCh&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&sign=39c3390c0a26b9508be7017e9eb30712&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.1.2%26utdid%3DYM121p9Sa%252BQDABct3uOualCh%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2129961797%26sn%3DAF49B063CCC9AA465E87536AD0033EF97FBF453E%26umidtoken%3DYM121p9Sa%252BQDABct3uOualCh%26msv%3D8.0.0%26brand%3DApple%26imei%3D8D3846EB9973696C44A20A42F3F7FBF2DB3D161E%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad4G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DEC8E2EE0-B71B-431B-9460-9CBD6FCB8AE3"},{"key":"shuqirwbody9","val":"serviceWorkerOn=1&stopPullRefresh=1&from=ShuqiTab&upf=20368&sdk=13.1.2&utdid=YM121p9Sa%2BQDABct3uOualCh&ustatus=0&first_placeid=111111&net_env=wifi&placeid=111111&user_id=2129961797&sn=AF49B063CCC9AA465E87536AD0033EF97FBF453E&umidtoken=YM121p9Sa%2BQDABct3uOualCh&msv=8.0.0&brand=Apple&imei=8D3846EB9973696C44A20A42F3F7FBF2DB3D161E&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&session=&skinColor=23B383&platform=1&ver=210301&mod=iPad4G&statusBarHeight=44.000000&skinVersion=1&wh=1242x2688&soft_id=21&utype=pre_vip&skinId=999&idfa=EC8E2EE0-B71B-431B-9460-9CBD6FCB8AE3&params=%7B%22resources%22%3A%7B%22ShuqiBsDailyTask%22%3A%7B%7D%7D%7D&userId=2129961797&placeId=111111&timestamp=1624078068&sqSv=1.0&sign=8ae8d6da8d2c4b9fcc9f6d7026f67711&key=sq_h5_gateway&_public="},{"key":"shuqifxbody9","val":""},{"key":"shuqisprwurl9","val":"https://ocean.shuqireader.com/api/ad/adserver/v1/api/getAdInfo?appVer=4.3.6.0&placeId=111111&platform=iOS&requestSrc=h5&resourceId=626&timestamp=1624078087&user_id=2129961797&sqSv=1.0&sign=5023dbdcb1018003a7a1af08d2e3b2a9&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.1.2%26utdid%3DYM121p9Sa%252BQDABct3uOualCh%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2129961797%26sn%3DAF49B063CCC9AA465E87536AD0033EF97FBF453E%26umidtoken%3DYM121p9Sa%252BQDABct3uOualCh%26msv%3D8.0.0%26brand%3DApple%26imei%3D8D3846EB9973696C44A20A42F3F7FBF2DB3D161E%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad4G%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DEC8E2EE0-B71B-431B-9460-9CBD6FCB8AE3"},{"key":"shuqijlbody9","val":"requestSrc=h5&userId=2129961797&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624078068&sqSv=1.0&sign=d0d3b31d69d0069079089be2ea2e1a77&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.1.2%26utdid%3DYM121p9Sa%252BQDABct3uOualCh%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2129961797%26sn%3DAF49B063CCC9AA465E87536AD0033EF97FBF453E%26umidtoken%3DYM121p9Sa%252BQDABct3uOualCh%26msv%3D8.0.0%26brand%3DApple%26imei%3D8D3846EB9973696C44A20A42F3F7FBF2DB3D161E%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad4G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DEC8E2EE0-B71B-431B-9460-9CBD6FCB8AE3"},{"key":"shuqisqjlbody9","val":"src=&userId=2129961797&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624078058&sqSv=1.0&sign=5992e9e638bd5655139e62e271c802dc&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.1.2%26utdid%3DYM121p9Sa%252BQDABct3uOualCh%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2129961797%26sn%3DAF49B063CCC9AA465E87536AD0033EF97FBF453E%26umidtoken%3DYM121p9Sa%252BQDABct3uOualCh%26msv%3D8.0.0%26brand%3DApple%26imei%3D8D3846EB9973696C44A20A42F3F7FBF2DB3D161E%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad4G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DEC8E2EE0-B71B-431B-9460-9CBD6FCB8AE3"},{"key":"shuqicjyurl9","val":"https://ocean.shuqireader.com/api/activity/activity/v1/lottery/info?timestamp=1624078091&userId=2129961797&activityId=311&sqSv=1.0&sign=78a8d66768363e6de1ea308d2bd8e5bb&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.1.2%26utdid%3DYM121p9Sa%252BQDABct3uOualCh%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2129961797%26sn%3DAF49B063CCC9AA465E87536AD0033EF97FBF453E%26umidtoken%3DYM121p9Sa%252BQDABct3uOualCh%26msv%3D8.0.0%26brand%3DApple%26imei%3D8D3846EB9973696C44A20A42F3F7FBF2DB3D161E%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad4G%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DEC8E2EE0-B71B-431B-9460-9CBD6FCB8AE3"},{"key":"shuqicjcsbody9","val":"_public=skinId%3D999%26idfa%3DEC8E2EE0-B71B-431B-9460-9CBD6FCB8AE3%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26umidtoken%3DYM121p9Sa%2BQDABct3uOualCh%26user_id%3D2129961797%26sn%3DAF49B063CCC9AA465E87536AD0033EF97FBF453E%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D8D3846EB9973696C44A20A42F3F7FBF2DB3D161E%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPad4G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYM121p9Sa%2BQDABct3uOualCh%26utype%3Dpre_vip%26sdk%3D13.1.2&deliveryId=711&key=sq_app_ad&miniWua=HHnB_xYMnoX8ZyDrYOhBxyk4BgktuvD4a2ntTjRZerEEdcJo%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=703&sign=D1BEAC9D2FF2A6196F08867CE428CBF6&timestamp=1624078073&userId=2129961797&user_id=2129961797&wua=HIVW_71N2WURvFg80gFKO3ZJWcg/YB2impwlDjazBAwHFXe704EjOxva5Dv0Tl0NPFKpwRAn9tAvW2y1imoqyeaT/Y6Mc8MTpzH3REl7CtnD2/jzcJlRSSMdplKIwhFhHcd%2BTD6X5tLKvgxTwMpgbBfQvdC%2B4D7d2EuhEF8dQPe0TaZs6x6YFsnWFhr5KrHck6TxllzkXFZGixW0Ptc3cw6L2zWGwsOcl8oQXLDsuejWxHqw%3D"},{"key":"shuqicjbody9","val":"wua=HIVW_i5gMN5l8R9BmJg43vs4iaSRGecMp2nM2EhLzC5C5eDzrY372THnl7w75lV5dj2Tbr2c80val7hkoDWrns10F2YwMvkdo%2F2EyvXyijm%2Fdu2AjhN2oTjZLPCyAbZFwQVP4E8%2FyxSuJ7d4UjXdDBCT7aT1%2BRQ4UBmSD5JInaYy4epG%2Fjlb6bHCJmIDiO0fzojIaNArfzLZPbK0LNV2NsvEV%2BHb2m2zP0W%2B80B%2Fc8i62TbE%3D&ua=&userId=2129961797&umidtoken=YM121p9Sa%2BQDABct3uOualCh&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&asac=2A20C07RJ9F51AOEFSNHDR&timestamp=1624078077&activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&sqSv=1.0&sign=628e19fa02b5ecbd922a0ae0f1d8e8cc&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.1.2%26utdid%3DYM121p9Sa%252BQDABct3uOualCh%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2129961797%26sn%3DAF49B063CCC9AA465E87536AD0033EF97FBF453E%26umidtoken%3DYM121p9Sa%252BQDABct3uOualCh%26msv%3D8.0.0%26brand%3DApple%26imei%3D8D3846EB9973696C44A20A42F3F7FBF2DB3D161E%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad4G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DEC8E2EE0-B71B-431B-9460-9CBD6FCB8AE3"},{"key":"shuqijsspbody9","val":""},{"key":"shuqijsydurl9","val":""},{"key":"shuqijsydbody9","val":""},{"key":"shuqijsqdbody9","val":""},{"key":"shuqijsqdspyurl9","val":""},{"key":"shuqijsqdspbody9","val":""},{"key":"shuqijsrwbody9","val":""},{"key":"shuqijsfxbody9","val":""},{"key":"shuqijsbookurl9","val":""},{"key":"shuqijsbookbody9","val":""},{"key":"shuqijssprwurl9","val":""},{"key":"shuqiuserurl10","val":"https://ocean.shuqireader.com/api/jaccount/accountapi/v1/sapi/account/getBindinfo?userId=2128267115&sqSv=1.0&timestamp=1624078153&sign=e57b9d4748dce5f857ef04d6b0044ca6&key=sq_h5_gateway"},{"key":"shuqisyurl10","val":"https://render.shuqireader.com/load/resource?sdk=13.1&utdid=YM13FhQ%2FBKoDAEqVAAF4Koom&ustatus=0&first_placeid=111111&net_env=3g&placeid=111111&user_id=2128267115&sn=38B91DE857C92DD5DD6B6FD0DAE5509185A2EE36&umidtoken=YM13FhQ%2FBKoDAEqVAAF4Koom&msv=8.0.0&brand=Apple&imei=20B0AAEBC7E58BDD63864660C02F68CF198A71F2&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=iOS&ver=210301&mod=iPad4G&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=FA4AADF2-9F2A-452D-90BA-BF6831F67315"},{"key":"shuqisybody10","val":"appVer=4.3.6.0&imei=20B0AAEBC7E58BDD63864660C02F68CF198A71F2&isNewUser=1&params=%7B%22resources%22%3A%7B%22ShuqiVipEntry%22%3A%7B%7D%2C%22personalCardConfig%22%3A%7B%7D%7D%7D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=abe5475f2b5bdb340b96ae453ee882bc&sn=38B91DE857C92DD5DD6B6FD0DAE5509185A2EE36&soft_id=21&timestamp=1624078104&user_id=2128267115&ver=210301"},{"key":"shuqispbody10","val":"_public=skinId%3D999%26idfa%3DFA4AADF2-9F2A-452D-90BA-BF6831F67315%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26umidtoken%3DYM13FhQ/BKoDAEqVAAF4Koom%26user_id%3D2128267115%26sn%3D38B91DE857C92DD5DD6B6FD0DAE5509185A2EE36%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D20B0AAEBC7E58BDD63864660C02F68CF198A71F2%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPad4G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYM13FhQ/BKoDAEqVAAF4Koom%26utype%3Dpre_vip%26sdk%3D13.1&deliveryId=525&key=sq_app_ad&miniWua=HHnB_0/LAgmtpvD6YU%2B47Nd8kZsPfCXgHA5OC%2BCf0WHojNlM%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=626&sign=78D568D0DDE90AAF233FD857A5A0BC6D&timestamp=1624078125&userId=2128267115&user_id=2128267115&wua=HIVW_6qZWDtw%2Bp1mEZw2IFFZEAdprUIkzRAs53sDmL2l8%2B3U8ZDPphgJvELjshtnMAYOiO%2Bghi4GCPofxV8l6Lps4T/r4JlJYYVG6/8s/WaPqBaGkjIwfJxs7/Xq2rvRJhsVDb0iAuIyn/BVtsGM9TaaBZPt5E087ug34N3qA3JFbm885eeSZ41tLfW1Z3e54tCX1TEC2E6lENrJ6AER4tZvY7h8m3uinV/F0FK7MGI4gA5Y%3D"},{"key":"shuqiscbody10","val":""},{"key":"shuqiydbody10","val":""},{"key":"shuqiqdbody10","val":"clientTimestamp=1624078118&position=501&userId=2128267115&signInType=1&wua=HIVW_yX4o5aX1XAA1Ewz%2FJGkXkpb5hNwqyRxKv4sG%2F9ljZk2NO1yNdRzOMuOhZb3Dzh%2BWzNpaVoACdfQXKhwfvxQl%2BHKUyNO0B3TTrVezrDeFNTvYAMRXITY2R9HTaupaoJ%2FFmAWhzM%2F%2FLoAg6SquLUNgwW8biiQ2KMkvDi7UzZsqkR1fsweTGoHjWjWlD%2BkkRTD5VUTGK90A1vOOIKp3IVCnOiuU5v1YkxyXkoDN7hhRqbQ%3D&ua=&miniWua=HHnB_LPpVe8IDYx%2B3JzC60ySJaPsW%2BzlHM4JrK3SRqyk2YPI%3D&umidtoken=YM13FhQ%2FBKoDAEqVAAF4Koom&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&sign=8f8cfe3cd3f331535fb21e60d7f3535c&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.1%26utdid%3DYM13FhQ%252FBKoDAEqVAAF4Koom%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2128267115%26sn%3D38B91DE857C92DD5DD6B6FD0DAE5509185A2EE36%26umidtoken%3DYM13FhQ%252FBKoDAEqVAAF4Koom%26msv%3D8.0.0%26brand%3DApple%26imei%3D20B0AAEBC7E58BDD63864660C02F68CF198A71F2%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad4G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DFA4AADF2-9F2A-452D-90BA-BF6831F67315"},{"key":"shuqirwbody10","val":"serviceWorkerOn=1&stopPullRefresh=1&from=ShuqiTab&upf=20368&sdk=13.1&utdid=YM13FhQ%2FBKoDAEqVAAF4Koom&ustatus=0&first_placeid=111111&net_env=3g&placeid=111111&user_id=2128267115&sn=38B91DE857C92DD5DD6B6FD0DAE5509185A2EE36&umidtoken=YM13FhQ%2FBKoDAEqVAAF4Koom&msv=8.0.0&brand=Apple&imei=20B0AAEBC7E58BDD63864660C02F68CF198A71F2&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&session=&skinColor=23B383&platform=1&ver=210301&mod=iPad4G&statusBarHeight=44.000000&skinVersion=1&wh=1242x2688&soft_id=21&utype=pre_vip&skinId=999&idfa=FA4AADF2-9F2A-452D-90BA-BF6831F67315&params=%7B%22resources%22%3A%7B%22ShuqiBsDailyTask%22%3A%7B%7D%7D%7D&userId=2128267115&placeId=111111&timestamp=1624078131&sqSv=1.0&sign=d0f8ff28a36e1897eee0733038b1edfd&key=sq_h5_gateway&_public="},{"key":"shuqifxbody10","val":""},{"key":"shuqisprwurl10","val":"https://ocean.shuqireader.com/api/ad/adserver/v1/api/getAdInfo?appVer=4.3.6.0&placeId=111111&platform=iOS&requestSrc=h5&resourceId=626&timestamp=1624078153&user_id=2128267115&sqSv=1.0&sign=eb6f877f6c0814fd55426ee9a687f32f&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.1%26utdid%3DYM13FhQ%252FBKoDAEqVAAF4Koom%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2128267115%26sn%3D38B91DE857C92DD5DD6B6FD0DAE5509185A2EE36%26umidtoken%3DYM13FhQ%252FBKoDAEqVAAF4Koom%26msv%3D8.0.0%26brand%3DApple%26imei%3D20B0AAEBC7E58BDD63864660C02F68CF198A71F2%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad4G%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DFA4AADF2-9F2A-452D-90BA-BF6831F67315"},{"key":"shuqijlbody10","val":"requestSrc=h5&userId=2128267115&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624078131&sqSv=1.0&sign=8043b644c2a768bebf41285e516019a5&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.1%26utdid%3DYM13FhQ%252FBKoDAEqVAAF4Koom%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2128267115%26sn%3D38B91DE857C92DD5DD6B6FD0DAE5509185A2EE36%26umidtoken%3DYM13FhQ%252FBKoDAEqVAAF4Koom%26msv%3D8.0.0%26brand%3DApple%26imei%3D20B0AAEBC7E58BDD63864660C02F68CF198A71F2%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad4G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DFA4AADF2-9F2A-452D-90BA-BF6831F67315"},{"key":"shuqisqjlbody10","val":"src=&userId=2128267115&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624078122&sqSv=1.0&sign=821b6129ee1b5358f4456380a84dd959&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.1%26utdid%3DYM13FhQ%252FBKoDAEqVAAF4Koom%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2128267115%26sn%3D38B91DE857C92DD5DD6B6FD0DAE5509185A2EE36%26umidtoken%3DYM13FhQ%252FBKoDAEqVAAF4Koom%26msv%3D8.0.0%26brand%3DApple%26imei%3D20B0AAEBC7E58BDD63864660C02F68CF198A71F2%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad4G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DFA4AADF2-9F2A-452D-90BA-BF6831F67315"},{"key":"shuqicjyurl10","val":"https://ocean.shuqireader.com/api/activity/activity/v1/lottery/info?timestamp=1624078155&userId=2128267115&activityId=311&sqSv=1.0&sign=3720b9d1bdc00db573b8b7a780a13ff6&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.1%26utdid%3DYM13FhQ%252FBKoDAEqVAAF4Koom%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2128267115%26sn%3D38B91DE857C92DD5DD6B6FD0DAE5509185A2EE36%26umidtoken%3DYM13FhQ%252FBKoDAEqVAAF4Koom%26msv%3D8.0.0%26brand%3DApple%26imei%3D20B0AAEBC7E58BDD63864660C02F68CF198A71F2%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad4G%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DFA4AADF2-9F2A-452D-90BA-BF6831F67315"},{"key":"shuqicjcsbody10","val":"_public=skinId%3D999%26idfa%3DFA4AADF2-9F2A-452D-90BA-BF6831F67315%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26umidtoken%3DYM13FhQ/BKoDAEqVAAF4Koom%26user_id%3D2128267115%26sn%3D38B91DE857C92DD5DD6B6FD0DAE5509185A2EE36%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D20B0AAEBC7E58BDD63864660C02F68CF198A71F2%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPad4G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYM13FhQ/BKoDAEqVAAF4Koom%26utype%3Dpre_vip%26sdk%3D13.1&deliveryId=711&key=sq_app_ad&miniWua=HHnB_YukyGiq/mduNSwiZx7tVpiGuD1DFYkyXYwJK%2B0SYvMU%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=703&sign=1F545B3297F467F95E803F558E83AD59&timestamp=1624078136&userId=2128267115&user_id=2128267115&wua=HIVW_7slp0FVT%2BHnHln0Yx78fyQPtnK83J9ejd4Xn6wGOKxm5S3dGqMtfqoZtHW82pvWfvYjhtv9RMWVkeCVPenuJrLSxTvSH4mr98vBsvaEKN5RTSmTgPkviktZdvsfwEbj75SrYKFx/WS1b0FxRZ7WMN/MfrlOpwoxSCFy0T4EJ898wsK1AP4TndYYHHMSYCS4jlZZ/IPVh6NyjjV1pnECBugxtMFcUdE8vchpjGamS/aw%3D"},{"key":"shuqicjbody10","val":"wua=HIVW_CH59L9dw7IEmMn%2FglNqt%2B6PNvXY7midA4gzqC%2Fj%2B5mr4Pug53ihQo5%2FXx6%2Bs%2F1WuoAqV%2FCJaD27vnmqFqb9Qo7NdO7xfKpPPF8DGqnwEG3Rn1F3FEYvWZf3nIKqrY%2BUjOgO08d1L9OTioGF3Y7Lz3pRxswBgMZvbRR2IAu5XpyElMQBfYb1%2Bpm0N4eeohMHiUMj13e3mA8B2Dng2bN9geEy%2Fl5kLNilcJeOAQdpg2wQ%3D&ua=&userId=2128267115&umidtoken=YM13FhQ%2FBKoDAEqVAAF4Koom&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&asac=2A20C07RJ9F51AOEFSNHDR&timestamp=1624078142&activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&sqSv=1.0&sign=f60d8515db67985ac6bd4a61119f5455&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.1%26utdid%3DYM13FhQ%252FBKoDAEqVAAF4Koom%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2128267115%26sn%3D38B91DE857C92DD5DD6B6FD0DAE5509185A2EE36%26umidtoken%3DYM13FhQ%252FBKoDAEqVAAF4Koom%26msv%3D8.0.0%26brand%3DApple%26imei%3D20B0AAEBC7E58BDD63864660C02F68CF198A71F2%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad4G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DFA4AADF2-9F2A-452D-90BA-BF6831F67315"},{"key":"shuqijsspbody10","val":""},{"key":"shuqijsydurl10","val":""},{"key":"shuqijsydbody10","val":""},{"key":"shuqijsqdbody10","val":""},{"key":"shuqijsqdspyurl10","val":""},{"key":"shuqijsqdspbody10","val":""},{"key":"shuqijsrwbody10","val":""},{"key":"shuqijsfxbody10","val":""},{"key":"shuqijsbookurl10","val":""},{"key":"shuqijsbookbody10","val":""},{"key":"shuqijssprwurl10","val":""},{"key":"shuqiuserurl11","val":"https://ocean.shuqireader.com/api/jaccount/accountapi/v1/sapi/account/getBindinfo?userId=2129663549&sqSv=1.0&timestamp=1624078276&sign=ff3b7f80dcea10fab4408246b94194b2&key=sq_h5_gateway"},{"key":"shuqisyurl11","val":"https://render.shuqireader.com/load/resource?sdk=13.1&utdid=YM1SRcE8vQkDAKNSGV1txxo8&ustatus=0&first_placeid=111111&net_env=wifi&placeid=111111&user_id=2129663549&sn=B0DF1AD6B9A5E304D6BEC36E251E6E7E62ED3E04&umidtoken=YM1SRcE8vQkDAKNSGV1txxo8&msv=8.0.0&brand=Apple&imei=24A6627EC3FC48530422800D0001063173B5BB13&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=iOS&ver=210301&mod=UnknowniPad&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=EF851760-9251-48A9-9B39-F58411A3FAF1"},{"key":"shuqisybody11","val":"appVer=4.3.6.0&imei=24A6627EC3FC48530422800D0001063173B5BB13&isNewUser=1&params=%7B%22resources%22%3A%7B%22ShuqiVipEntry%22%3A%7B%7D%2C%22personalCardConfig%22%3A%7B%7D%7D%7D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=eda9efbd0d6762a3b90276eacc76d77d&sn=B0DF1AD6B9A5E304D6BEC36E251E6E7E62ED3E04&soft_id=21&timestamp=1624078174&user_id=2129663549&ver=210301"},{"key":"shuqispbody11","val":"_public=skinId%3D999%26idfa%3DEF851760-9251-48A9-9B39-F58411A3FAF1%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26umidtoken%3DYM1SRcE8vQkDAKNSGV1txxo8%26user_id%3D2129663549%26sn%3DB0DF1AD6B9A5E304D6BEC36E251E6E7E62ED3E04%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D24A6627EC3FC48530422800D0001063173B5BB13%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYM1SRcE8vQkDAKNSGV1txxo8%26utype%3Dpre_vip%26sdk%3D13.1&deliveryId=525&key=sq_app_ad&miniWua=HHnB_l2UVu1mjKacaj462eQq8OPgNJHezBd6DPfHc8p62gY8%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=626&sign=7835227267447F5111223DE7D33AFFFD&timestamp=1624078195&userId=2129663549&user_id=2129663549&wua=HIVW_OmbDels2AA1DWo8PiQl1ZJe4RZODRYnjQ2WbkB9ozPg%2BYIKcCntXeARJL7n5v%2BS%2BXyIiBfbA6wTZSfzmzK1C%2BXc5T%2BkiUTnTRSqNV%2B4SO%2B36Ayfn5ZxoLNHdJPMhavI0qp0JTUsdvh2Sau578L/Egd10vOhrRhSbbvHFiWW5C8u2R9uQFNxW2MeArTbvhBYTqRlrrY%2BqANpKK6XuYijkvg3wqmfioeDhOtDsaHi6oBA%3D"},{"key":"shuqiscbody11","val":""},{"key":"shuqiydbody11","val":""},{"key":"shuqiqdbody11","val":"clientTimestamp=1624078186&position=501&userId=2129663549&signInType=1&wua=HIVW_5QWxODC9PTwfh4afaDyoYbJgqcWpNdY6q2wFMxKUP9wmnpYafLfNtXW001p3W3gnnoFf%2Bk%2FFBIhPFoJZ5xV7R2A64WvrCDLpdTqmTlQKo7s2Mik1Ybouh%2FHBHgSMbQYQI6oYs9VAWcVBY1vvKgocrLlAc6ALsEajHuNO1%2BbJwsg3GY1y0Uz7lEh7SKuSC8HCN7ZiE56dbpn7%2BsWOHPL4yCtdJJg9dV3pmR2bZFSt2nY%3D&ua=&miniWua=HHnB_j0ZMCjqWHt5aW5GVPsWWG2zB3IL%2F50GIvSlDAvx3HiQ%3D&umidtoken=YM1SRcE8vQkDAKNSGV1txxo8&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&sign=a1d6262baf6d9999b57cc938765c9e5e&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.1%26utdid%3DYM1SRcE8vQkDAKNSGV1txxo8%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2129663549%26sn%3DB0DF1AD6B9A5E304D6BEC36E251E6E7E62ED3E04%26umidtoken%3DYM1SRcE8vQkDAKNSGV1txxo8%26msv%3D8.0.0%26brand%3DApple%26imei%3D24A6627EC3FC48530422800D0001063173B5BB13%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DEF851760-9251-48A9-9B39-F58411A3FAF1"},{"key":"shuqirwbody11","val":"serviceWorkerOn=1&stopPullRefresh=1&from=ShuqiTab&upf=20368&sdk=13.1&utdid=YM1SRcE8vQkDAKNSGV1txxo8&ustatus=0&first_placeid=111111&net_env=wifi&placeid=111111&user_id=2129663549&sn=B0DF1AD6B9A5E304D6BEC36E251E6E7E62ED3E04&umidtoken=YM1SRcE8vQkDAKNSGV1txxo8&msv=8.0.0&brand=Apple&imei=24A6627EC3FC48530422800D0001063173B5BB13&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=1&ver=210301&mod=UnknowniPad&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=EF851760-9251-48A9-9B39-F58411A3FAF1&params=%7B%22resources%22%3A%7B%22ShuqiBsDailyTask%22%3A%7B%7D%7D%7D&userId=2129663549&placeId=111111&timestamp=1624078198&sqSv=1.0&sign=85aa8aecc683460fccb841f3a460c365&key=sq_h5_gateway&_public="},{"key":"shuqifxbody11","val":""},{"key":"shuqisprwurl11","val":"https://ocean.shuqireader.com/api/ad/adserver/v1/api/getAdInfo?appVer=4.3.6.0&placeId=111111&platform=iOS&requestSrc=h5&resourceId=626&timestamp=1624078273&user_id=2129663549&sqSv=1.0&sign=238845cdce0f548e88d32fedb777830f&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.1%26utdid%3DYM1SRcE8vQkDAKNSGV1txxo8%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2129663549%26sn%3DB0DF1AD6B9A5E304D6BEC36E251E6E7E62ED3E04%26umidtoken%3DYM1SRcE8vQkDAKNSGV1txxo8%26msv%3D8.0.0%26brand%3DApple%26imei%3D24A6627EC3FC48530422800D0001063173B5BB13%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DEF851760-9251-48A9-9B39-F58411A3FAF1"},{"key":"shuqijlbody11","val":"requestSrc=h5&userId=2129663549&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624078198&sqSv=1.0&sign=7c1e55f9d052c6b69803bd2cf2be2e14&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.1%26utdid%3DYM1SRcE8vQkDAKNSGV1txxo8%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2129663549%26sn%3DB0DF1AD6B9A5E304D6BEC36E251E6E7E62ED3E04%26umidtoken%3DYM1SRcE8vQkDAKNSGV1txxo8%26msv%3D8.0.0%26brand%3DApple%26imei%3D24A6627EC3FC48530422800D0001063173B5BB13%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DEF851760-9251-48A9-9B39-F58411A3FAF1"},{"key":"shuqisqjlbody11","val":"src=&userId=2129663549&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624078191&sqSv=1.0&sign=645fa997fa7f6597dced5f0e2eca3aca&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.1%26utdid%3DYM1SRcE8vQkDAKNSGV1txxo8%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2129663549%26sn%3DB0DF1AD6B9A5E304D6BEC36E251E6E7E62ED3E04%26umidtoken%3DYM1SRcE8vQkDAKNSGV1txxo8%26msv%3D8.0.0%26brand%3DApple%26imei%3D24A6627EC3FC48530422800D0001063173B5BB13%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DEF851760-9251-48A9-9B39-F58411A3FAF1"},{"key":"shuqicjyurl11","val":"https://ocean.shuqireader.com/api/activity/activity/v1/lottery/info?timestamp=1624078276&userId=2129663549&activityId=311&sqSv=1.0&sign=ac306821633b211a889d227376d05710&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.1%26utdid%3DYM1SRcE8vQkDAKNSGV1txxo8%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2129663549%26sn%3DB0DF1AD6B9A5E304D6BEC36E251E6E7E62ED3E04%26umidtoken%3DYM1SRcE8vQkDAKNSGV1txxo8%26msv%3D8.0.0%26brand%3DApple%26imei%3D24A6627EC3FC48530422800D0001063173B5BB13%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DEF851760-9251-48A9-9B39-F58411A3FAF1"},{"key":"shuqicjcsbody11","val":"_public=skinId%3D999%26idfa%3DEF851760-9251-48A9-9B39-F58411A3FAF1%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26umidtoken%3DYM1SRcE8vQkDAKNSGV1txxo8%26user_id%3D2129663549%26sn%3DB0DF1AD6B9A5E304D6BEC36E251E6E7E62ED3E04%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D24A6627EC3FC48530422800D0001063173B5BB13%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYM1SRcE8vQkDAKNSGV1txxo8%26utype%3Dpre_vip%26sdk%3D13.1&deliveryId=711&key=sq_app_ad&miniWua=HHnB_VudeOBCMu0TlTRX2kt0NNc1NNqVP2siu99DI/VCk2YE%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=703&sign=78B3975D235C23E56E9068049AFECB38&timestamp=1624078207&userId=2129663549&user_id=2129663549&wua=HIVW_7slp0FVT%2BHnHln0Yx78fyZ0T0i77sM2UKNmqdy16KiSUtW/EY2YAcqsMOsSuMtwzBpJPzQgyW%2BwTLx4OGhG/iwrK33twO3tnrWu18suEpzbh3VIwFONYAnnHU6%2BTAQ4IS/CMQfgVHPeENxCIWO13xyohnjtoB%2BnegmW6DNrLQuG3A%2B0nM2L4FeaQQ2PEJyTm90NH159h01osokm0Cir%2BRVZOKNqSFPuibfZ8Yogfu4Y%3D"},{"key":"shuqicjbody11","val":"wua=HIVW_lyG%2FuZSX6awrJEesxYQy24n13b1Zeb9%2BiLc8RDEtT60wK3yoiAgnZ7GDin72oc9eplUxpSrI1ilnRWmkmraGJHd4R9wXtHi1Qu8AQCynoK6%2FQFQN1CBu0bT7SZugNyEqtgWLJrdijN06gyWb4luLF%2Fr30ZqxLr50YZ43iWUlkRk8s4T62CwdQZYDE%2F03TlhrjnkBrrm2JBKZm08xqKJlyamlIsP4uUaupjwz1DfpOEY%3D&ua=&userId=2129663549&umidtoken=YM1SRcE8vQkDAKNSGV1txxo8&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&asac=2A20C07RJ9F51AOEFSNHDR&timestamp=1624078261&activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&sqSv=1.0&sign=ae1bfda824133a1b3049457268225534&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.1%26utdid%3DYM1SRcE8vQkDAKNSGV1txxo8%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2129663549%26sn%3DB0DF1AD6B9A5E304D6BEC36E251E6E7E62ED3E04%26umidtoken%3DYM1SRcE8vQkDAKNSGV1txxo8%26msv%3D8.0.0%26brand%3DApple%26imei%3D24A6627EC3FC48530422800D0001063173B5BB13%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DEF851760-9251-48A9-9B39-F58411A3FAF1"},{"key":"shuqijsspbody11","val":""},{"key":"shuqijsydurl11","val":""},{"key":"shuqijsydbody11","val":""},{"key":"shuqijsqdbody11","val":""},{"key":"shuqijsqdspyurl11","val":""},{"key":"shuqijsqdspbody11","val":""},{"key":"shuqijsrwbody11","val":""},{"key":"shuqijsfxbody11","val":""},{"key":"shuqijsbookurl11","val":""},{"key":"shuqijsbookbody11","val":""},{"key":"shuqijssprwurl11","val":""},{"key":"shuqiuserurl12","val":"https://ocean.shuqireader.com/api/jaccount/accountapi/v1/sapi/account/getBindinfo?userId=2130360029&sqSv=1.0&timestamp=1624078355&sign=8225c29a5187df539ed203efe45e6646&key=sq_h5_gateway"},{"key":"shuqisyurl12","val":"https://render.shuqireader.com/load/resource?sdk=13.1.2&utdid=YM1SRcE8vQkDAKNSGV1txxo8&ustatus=0&first_placeid=111111&net_env=4g&placeid=111111&user_id=2130360029&sn=ED0D9D34147CB349061283ED23A30FA9DA97D11B&umidtoken=YM1SRcE8vQkDAKNSGV1txxo8&msv=8.0.0&brand=Apple&imei=1DA229C406CD06B54E337E24DDAB82AA56818CED&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=iOS&ver=210301&mod=iPad2G&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=E952B739-DAF2-44CF-B440-D199DEA89B8C"},{"key":"shuqisybody12","val":"appVer=4.3.6.0&imei=1DA229C406CD06B54E337E24DDAB82AA56818CED&isNewUser=1&params=%7B%22resources%22%3A%7B%22ShuqiVipEntry%22%3A%7B%7D%2C%22personalCardConfig%22%3A%7B%7D%7D%7D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=c731500d6cb2a60a691e69a0ecea3f21&sn=ED0D9D34147CB349061283ED23A30FA9DA97D11B&soft_id=21&timestamp=1624078301&user_id=2130360029&ver=210301"},{"key":"shuqispbody12","val":"_public=skinId%3D999%26idfa%3DE952B739-DAF2-44CF-B440-D199DEA89B8C%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26umidtoken%3DYM1SRcE8vQkDAKNSGV1txxo8%26user_id%3D2130360029%26sn%3DED0D9D34147CB349061283ED23A30FA9DA97D11B%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D1DA229C406CD06B54E337E24DDAB82AA56818CED%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPad2G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYM1SRcE8vQkDAKNSGV1txxo8%26utype%3Dpre_vip%26sdk%3D13.1.2&deliveryId=525&key=sq_app_ad&miniWua=HHnB_P5M2BCAaBuidViZVlLrvgqnp%2BPfqda0akYZkD7ETCb8%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=626&sign=7CBF4F5FFFE2D20B9EA9911884A45475&timestamp=1624078330&userId=2130360029&user_id=2130360029&wua=HIVW_D4B8VvFKZowf/Edv7Om5OE73pExrpORO7AIxCKc3qVjr8YMrTpMYx%2B%2BFBx7rVJGOYqRcieIuBZSnYLGnKM9YfksUWa60lA2npTMXWHPfUNDKd7k5r8696r8qv2ynKElu5cisA%2BAsbyCdNlbiIgjz6NiVrclliI%2BOGHxzTSUtIWGW1gf3Ghv2FYOt%2BAE4mIY1chOw3M6Tqfrj%2BP7%2Bl9VH8owoUCD9Cl6cQHKX5Noakvo%3D"},{"key":"shuqiscbody12","val":""},{"key":"shuqiydbody12","val":""},{"key":"shuqiqdbody12","val":"clientTimestamp=1624078316&position=501&userId=2130360029&signInType=1&wua=HIVW_lyG%2FuZSX6awrJEesxYQy29pinmx9VwBQtsOfut%2FTAIwcR1jZ%2B2OdUfmjntbkDt2dSkk5l%2B96MtPTM1QxzueveiXSMOzkI3cynQIzPskgiDkOCD7B%2B%2Fdo81W6RbZHQmrlErqCxHvmWCcfu5jbhx82YPZ0yw427RZUcCS1jgPUiPIrmzyXJhvkYbeVhGA5T19sjHQTcAL9tyYn0Jnz8pozpbes4qF80ZHJ5Q7QZSWMxBI%3D&ua=&miniWua=HHnB_GAwcSJWwNfDMuLntW41S%2FZyQacT6NbRubsLt8iUq%2BS8%3D&umidtoken=YM1SRcE8vQkDAKNSGV1txxo8&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&sign=3a6c2d5e7fc7951858de2c8fc5df4fb7&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.1.2%26utdid%3DYM1SRcE8vQkDAKNSGV1txxo8%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2130360029%26sn%3DED0D9D34147CB349061283ED23A30FA9DA97D11B%26umidtoken%3DYM1SRcE8vQkDAKNSGV1txxo8%26msv%3D8.0.0%26brand%3DApple%26imei%3D1DA229C406CD06B54E337E24DDAB82AA56818CED%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad2G%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DE952B739-DAF2-44CF-B440-D199DEA89B8C"},{"key":"shuqirwbody12","val":"serviceWorkerOn=1&stopPullRefresh=1&from=ShuqiTab&upf=20368&sdk=13.1.2&utdid=YM1SRcE8vQkDAKNSGV1txxo8&ustatus=0&first_placeid=111111&net_env=4g&placeid=111111&user_id=2130360029&sn=ED0D9D34147CB349061283ED23A30FA9DA97D11B&umidtoken=YM1SRcE8vQkDAKNSGV1txxo8&msv=8.0.0&brand=Apple&imei=1DA229C406CD06B54E337E24DDAB82AA56818CED&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=1&ver=210301&mod=iPad2G&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=E952B739-DAF2-44CF-B440-D199DEA89B8C&params=%7B%22resources%22%3A%7B%22ShuqiBsDailyTask%22%3A%7B%7D%7D%7D&userId=2130360029&placeId=111111&timestamp=1624078333&sqSv=1.0&sign=1624d3f99ed5a1850f1c92a0c9c11ad6&key=sq_h5_gateway&_public="},{"key":"shuqifxbody12","val":""},{"key":"shuqisprwurl12","val":"https://ocean.shuqireader.com/api/ad/adserver/v1/api/getAdInfo?appVer=4.3.6.0&placeId=111111&platform=iOS&requestSrc=h5&resourceId=626&timestamp=1624078353&user_id=2130360029&sqSv=1.0&sign=2dc5163beb3fb246119227f5858a762c&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.1.2%26utdid%3DYM1SRcE8vQkDAKNSGV1txxo8%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2130360029%26sn%3DED0D9D34147CB349061283ED23A30FA9DA97D11B%26umidtoken%3DYM1SRcE8vQkDAKNSGV1txxo8%26msv%3D8.0.0%26brand%3DApple%26imei%3D1DA229C406CD06B54E337E24DDAB82AA56818CED%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad2G%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DE952B739-DAF2-44CF-B440-D199DEA89B8C"},{"key":"shuqijlbody12","val":"requestSrc=h5&userId=2130360029&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624078333&sqSv=1.0&sign=0e19308193d7109353d304c8c7ac9a2f&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.1.2%26utdid%3DYM1SRcE8vQkDAKNSGV1txxo8%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2130360029%26sn%3DED0D9D34147CB349061283ED23A30FA9DA97D11B%26umidtoken%3DYM1SRcE8vQkDAKNSGV1txxo8%26msv%3D8.0.0%26brand%3DApple%26imei%3D1DA229C406CD06B54E337E24DDAB82AA56818CED%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad2G%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DE952B739-DAF2-44CF-B440-D199DEA89B8C"},{"key":"shuqisqjlbody12","val":"src=&userId=2130360029&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624078327&sqSv=1.0&sign=c669f2ff628505260acc75ca4806879a&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.1.2%26utdid%3DYM1SRcE8vQkDAKNSGV1txxo8%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2130360029%26sn%3DED0D9D34147CB349061283ED23A30FA9DA97D11B%26umidtoken%3DYM1SRcE8vQkDAKNSGV1txxo8%26msv%3D8.0.0%26brand%3DApple%26imei%3D1DA229C406CD06B54E337E24DDAB82AA56818CED%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad2G%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DE952B739-DAF2-44CF-B440-D199DEA89B8C"},{"key":"shuqicjyurl12","val":"https://ocean.shuqireader.com/api/activity/activity/v1/lottery/info?timestamp=1624078355&userId=2130360029&activityId=311&sqSv=1.0&sign=2256c607c6a707797ff68cd36dea9ac4&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.1.2%26utdid%3DYM1SRcE8vQkDAKNSGV1txxo8%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2130360029%26sn%3DED0D9D34147CB349061283ED23A30FA9DA97D11B%26umidtoken%3DYM1SRcE8vQkDAKNSGV1txxo8%26msv%3D8.0.0%26brand%3DApple%26imei%3D1DA229C406CD06B54E337E24DDAB82AA56818CED%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad2G%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DE952B739-DAF2-44CF-B440-D199DEA89B8C"},{"key":"shuqicjcsbody12","val":"_public=skinId%3D999%26idfa%3DE952B739-DAF2-44CF-B440-D199DEA89B8C%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26umidtoken%3DYM1SRcE8vQkDAKNSGV1txxo8%26user_id%3D2130360029%26sn%3DED0D9D34147CB349061283ED23A30FA9DA97D11B%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D1DA229C406CD06B54E337E24DDAB82AA56818CED%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPad2G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYM1SRcE8vQkDAKNSGV1txxo8%26utype%3Dpre_vip%26sdk%3D13.1.2&deliveryId=711&key=sq_app_ad&miniWua=HHnB_jNBIBt5iRLrjvJJeNsGxew8mT09Fe53AKQ3r5rumlVs%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=703&sign=E08D4891B8551DA0523D9AFD1364BB01&timestamp=1624078339&userId=2130360029&user_id=2130360029&wua=HIVW_9NeUiKcpZzeQFC0l9uLWNExaEvM6jP5eDJ6hkx7HO%2BFzCYuES6tzgJR7IRRLuFS5m7BfhhLETJ/fjdNc4m1k/1wINHLtdMbiC7fQbyosL0NlQCWZksNxsgBNJBcYAy6pukMArFplvUaN6usvkjHCdYZgLaD7KAe3yIMJXuWqkMvohljwc13rwSJwDvAjS4z/WS0tCOL%2BGPn5WaSlAoutTe9QAnf6Rjb86k2wroAL%2Buc%3D"},{"key":"shuqicjbody12","val":"wua=HIVW_zbpOx0x0QZ8rXg39gv4f0hzOMNwJZrmwbTWTIVa01Js71xVVpF3svx2d1bs90ZrV8FvOwgpBUWq5L2DHECk1LnwLdXdLiYpvBZPGlvqvgbtZsOcBR0112DCUuRrO8TdiLmRm5dlg0UF2S6sZgZZuYoyLe34OOTwRsOll%2FSt%2BSnjU%2BgZs%2F%2BRhvXF8AyvA%2F6HKvJNVbrZWyogTjRL7AomEQ6myUUFx3lgVi9CL7qXDGhg%3D&ua=&userId=2130360029&umidtoken=YM1SRcE8vQkDAKNSGV1txxo8&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&asac=2A20C07RJ9F51AOEFSNHDR&timestamp=1624078342&activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&sqSv=1.0&sign=d61308cc5e4ac0e80dfd0fd430001e42&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.1.2%26utdid%3DYM1SRcE8vQkDAKNSGV1txxo8%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2130360029%26sn%3DED0D9D34147CB349061283ED23A30FA9DA97D11B%26umidtoken%3DYM1SRcE8vQkDAKNSGV1txxo8%26msv%3D8.0.0%26brand%3DApple%26imei%3D1DA229C406CD06B54E337E24DDAB82AA56818CED%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad2G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DE952B739-DAF2-44CF-B440-D199DEA89B8C"},{"key":"shuqijsspbody12","val":""},{"key":"shuqijsydurl12","val":""},{"key":"shuqijsydbody12","val":""},{"key":"shuqijsqdbody12","val":""},{"key":"shuqijsqdspyurl12","val":""},{"key":"shuqijsqdspbody12","val":""},{"key":"shuqijsrwbody12","val":""},{"key":"shuqijsfxbody12","val":""},{"key":"shuqijsbookurl12","val":""},{"key":"shuqijsbookbody12","val":""},{"key":"shuqijssprwurl12","val":""},{"key":"shuqiuserurl13","val":"https://ocean.shuqireader.com/api/jaccount/accountapi/v1/sapi/account/getBindinfo?userId=2131042366&sqSv=1.0&timestamp=1624078418&sign=1e0598f1f9a976401c19db55138c1a62&key=sq_h5_gateway"},{"key":"shuqisyurl13","val":"https://render.shuqireader.com/load/resource?sdk=13.0&utdid=YM1SRcE8vQkDAKNSGV1txxo8&ustatus=0&first_placeid=111111&net_env=wifi&placeid=111111&user_id=2131042366&sn=605CC64DCE30E388FA55F9A3ADDAB85C1072D4CC&umidtoken=YM1SRcE8vQkDAKNSGV1txxo8&msv=8.0.0&brand=Apple&imei=3A5EADB5474889D68730C0E82367CA0ED58CE430&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=iOS&ver=210301&mod=iPad4G&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=BAEA5376-8B7B-4F91-92F8-0A1A3015E16E"},{"key":"shuqisybody13","val":"appVer=4.3.6.0&imei=3A5EADB5474889D68730C0E82367CA0ED58CE430&isNewUser=1&params=%7B%22resources%22%3A%7B%22ShuqiVipEntry%22%3A%7B%7D%2C%22personalCardConfig%22%3A%7B%7D%7D%7D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=1de37c1fdd028a3cbc90e65f8cba613c&sn=605CC64DCE30E388FA55F9A3ADDAB85C1072D4CC&soft_id=21&timestamp=1624078373&user_id=2131042366&ver=210301"},{"key":"shuqispbody13","val":"_public=skinId%3D999%26idfa%3DBAEA5376-8B7B-4F91-92F8-0A1A3015E16E%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26umidtoken%3DYM1SRcE8vQkDAKNSGV1txxo8%26user_id%3D2131042366%26sn%3D605CC64DCE30E388FA55F9A3ADDAB85C1072D4CC%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D3A5EADB5474889D68730C0E82367CA0ED58CE430%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPad4G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYM1SRcE8vQkDAKNSGV1txxo8%26utype%3Dpre_vip%26sdk%3D13.0&deliveryId=525&key=sq_app_ad&miniWua=HHnB_kkxcmiKK3vCbSJYAo9B2rK2vRxgZHklp1AgP9jEmbOQ%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=626&sign=8A9D5F30314F110EE454369E37C8E257&timestamp=1624078396&userId=2131042366&user_id=2131042366&wua=HIVW_WwrqFFWaJT7aemuDqu6X2vMJ76%2BfDNi%2BBDzdnIPsJUm6PqxPVtMRs3SfTkRRovePVRWzyqFCqLuMvu4uT0FwYaJCw/CC1r8/zHNufR%2BXKjHBk%2Bf48D6nMV0GZZnsuDThH9zce53ZRBs3vzC76uqVAiWN2eR7PoU6LIuS/E/6SJh6k8jpKaGHQFLSzM8J9tXRUgSAYK9ZCpt2scMqlxYHEA%3D%3D"},{"key":"shuqiscbody13","val":""},{"key":"shuqiydbody13","val":""},{"key":"shuqiqdbody13","val":"clientTimestamp=1624078387&position=501&userId=2131042366&signInType=1&wua=HIVW_O7M6QaUPyb%2BElJO1kvaUWQoXUeT3AKhfQYi3LWMTxn7m8MZGWGJWd7xnsGTIHS7zFkYTjJwgiQFNsedhlgpMqD%2F5V2Uhe%2BZNooab3PsqU63i%2Bo%2Bu3w4x3yEPsjuJtSUKBoj2YfCNL%2FyGSoe6%2BjV2R96ZbNyi%2B23CFKtWec8fQbUWIY3Io104qRiBp4I2GLqbDzKiM3vOMV8y9nVSl3u6HtsLs6X4llHBSu%2FKR0NsjwE%3D&ua=&miniWua=HHnB_8GlkYlyTWTrSylVKu33ntFdlPXsaqN6vpj79WcwEFog%3D&umidtoken=YM1SRcE8vQkDAKNSGV1txxo8&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&sign=a482b3d97403ead92d398f8a2d3eac0e&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.0%26utdid%3DYM1SRcE8vQkDAKNSGV1txxo8%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2131042366%26sn%3D605CC64DCE30E388FA55F9A3ADDAB85C1072D4CC%26umidtoken%3DYM1SRcE8vQkDAKNSGV1txxo8%26msv%3D8.0.0%26brand%3DApple%26imei%3D3A5EADB5474889D68730C0E82367CA0ED58CE430%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad4G%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DBAEA5376-8B7B-4F91-92F8-0A1A3015E16E"},{"key":"shuqirwbody13","val":"serviceWorkerOn=1&stopPullRefresh=1&from=ShuqiTab&upf=20368&sdk=13.0&utdid=YM1SRcE8vQkDAKNSGV1txxo8&ustatus=0&first_placeid=111111&net_env=wifi&placeid=111111&user_id=2131042366&sn=605CC64DCE30E388FA55F9A3ADDAB85C1072D4CC&umidtoken=YM1SRcE8vQkDAKNSGV1txxo8&msv=8.0.0&brand=Apple&imei=3A5EADB5474889D68730C0E82367CA0ED58CE430&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=1&ver=210301&mod=iPad4G&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=BAEA5376-8B7B-4F91-92F8-0A1A3015E16E&params=%7B%22resources%22%3A%7B%22ShuqiBsDailyTask%22%3A%7B%7D%7D%7D&userId=2131042366&placeId=111111&timestamp=1624078401&sqSv=1.0&sign=7f340dae7596bdd9f0ccd539a3a3da22&key=sq_h5_gateway&_public="},{"key":"shuqifxbody13","val":""},{"key":"shuqisprwurl13","val":"https://ocean.shuqireader.com/api/ad/adserver/v1/api/getAdInfo?appVer=4.3.6.0&placeId=111111&platform=iOS&requestSrc=h5&resourceId=626&timestamp=1624078419&user_id=2131042366&sqSv=1.0&sign=f5d4095bc213a9dc2cb11abe0faf21cb&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.0%26utdid%3DYM1SRcE8vQkDAKNSGV1txxo8%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2131042366%26sn%3D605CC64DCE30E388FA55F9A3ADDAB85C1072D4CC%26umidtoken%3DYM1SRcE8vQkDAKNSGV1txxo8%26msv%3D8.0.0%26brand%3DApple%26imei%3D3A5EADB5474889D68730C0E82367CA0ED58CE430%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad4G%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DBAEA5376-8B7B-4F91-92F8-0A1A3015E16E"},{"key":"shuqijlbody13","val":"requestSrc=h5&userId=2131042366&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624078401&sqSv=1.0&sign=f621134fabe752e90593806fe480947b&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.0%26utdid%3DYM1SRcE8vQkDAKNSGV1txxo8%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2131042366%26sn%3D605CC64DCE30E388FA55F9A3ADDAB85C1072D4CC%26umidtoken%3DYM1SRcE8vQkDAKNSGV1txxo8%26msv%3D8.0.0%26brand%3DApple%26imei%3D3A5EADB5474889D68730C0E82367CA0ED58CE430%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad4G%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DBAEA5376-8B7B-4F91-92F8-0A1A3015E16E"},{"key":"shuqisqjlbody13","val":"src=&userId=2131042366&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624078393&sqSv=1.0&sign=c72abbdbd761c9b524e392640561d92f&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.0%26utdid%3DYM1SRcE8vQkDAKNSGV1txxo8%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2131042366%26sn%3D605CC64DCE30E388FA55F9A3ADDAB85C1072D4CC%26umidtoken%3DYM1SRcE8vQkDAKNSGV1txxo8%26msv%3D8.0.0%26brand%3DApple%26imei%3D3A5EADB5474889D68730C0E82367CA0ED58CE430%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad4G%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DBAEA5376-8B7B-4F91-92F8-0A1A3015E16E"},{"key":"shuqicjyurl13","val":"https://ocean.shuqireader.com/api/activity/activity/v1/lottery/info?timestamp=1624078422&userId=2131042366&activityId=311&sqSv=1.0&sign=9d086d27ad9d157ad7a1a6fa640ab868&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.0%26utdid%3DYM1SRcE8vQkDAKNSGV1txxo8%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2131042366%26sn%3D605CC64DCE30E388FA55F9A3ADDAB85C1072D4CC%26umidtoken%3DYM1SRcE8vQkDAKNSGV1txxo8%26msv%3D8.0.0%26brand%3DApple%26imei%3D3A5EADB5474889D68730C0E82367CA0ED58CE430%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad4G%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DBAEA5376-8B7B-4F91-92F8-0A1A3015E16E"},{"key":"shuqicjcsbody13","val":"_public=skinId%3D999%26idfa%3DBAEA5376-8B7B-4F91-92F8-0A1A3015E16E%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26umidtoken%3DYM1SRcE8vQkDAKNSGV1txxo8%26user_id%3D2131042366%26sn%3D605CC64DCE30E388FA55F9A3ADDAB85C1072D4CC%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D3A5EADB5474889D68730C0E82367CA0ED58CE430%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPad4G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYM1SRcE8vQkDAKNSGV1txxo8%26utype%3Dpre_vip%26sdk%3D13.0&deliveryId=711&key=sq_app_ad&miniWua=HHnB_aV4Li8ecDQp7XttQD5zAbGsqiYvK%2BBHPOihG5yBZBA4%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=703&sign=8C7CEB2596FDCDC68DEC2E711755B2F5&timestamp=1624078407&userId=2131042366&user_id=2131042366&wua=HIVW_b9CDawUgsXDv9fKoIvTRoMqmag6LqME5Z3zP8z9nCB0f%2Bl%2BFnzc48vxrl28YKpA4sGYMl71zdjxQKkN7lBDRIXxmfr1DkVnzvNk0HcHz/ey3YYEjhfoIssQy5%2BP%2BftREJOQ2bT9pizakpLcvanJdso6rYWz9yt/SekG%2B227CMX%2Bt%2Be5ULuE7xsQFyGEZJwkCULSwAsaCTAuE3Af164dwuXyM3tSv4BLXf0B2y3Do/qQ%3D"},{"key":"shuqicjbody13","val":"wua=HIVW_3TtUFJI30sQBf6yUTdR7EBEwVpM3t0xYkfHprSEPnO51yijwnZ4vnwCzT%2BbPYbLlRiOb8fw3CWuqtXFo9iNR9jHn0Q%2FK%2BayaVJhIaDTDZ6rAlDXQ0iDbr1gWVqL7p0rw%2FmDRTgZMicwtyqWotxA03pma8FFM0xHlnL4d1i0VG7KJxmzQxlzrusADq8twPnFlff9KM8dMTtXXP4CstR73BedEogHq5%2FwfCkwhcHLVjhM%3D&ua=&userId=2131042366&umidtoken=YM1SRcE8vQkDAKNSGV1txxo8&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&asac=2A20C07RJ9F51AOEFSNHDR&timestamp=1624078409&activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&sqSv=1.0&sign=64ce8d105b67a8439ab2ecbae8b49534&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.0%26utdid%3DYM1SRcE8vQkDAKNSGV1txxo8%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2131042366%26sn%3D605CC64DCE30E388FA55F9A3ADDAB85C1072D4CC%26umidtoken%3DYM1SRcE8vQkDAKNSGV1txxo8%26msv%3D8.0.0%26brand%3DApple%26imei%3D3A5EADB5474889D68730C0E82367CA0ED58CE430%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad4G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DBAEA5376-8B7B-4F91-92F8-0A1A3015E16E"},{"key":"shuqijsspbody13","val":""},{"key":"shuqijsydurl13","val":""},{"key":"shuqijsydbody13","val":""},{"key":"shuqijsqdbody13","val":""},{"key":"shuqijsqdspyurl13","val":""},{"key":"shuqijsqdspbody13","val":""},{"key":"shuqijsrwbody13","val":""},{"key":"shuqijsfxbody13","val":""},{"key":"shuqijsbookurl13","val":""},{"key":"shuqijsbookbody13","val":""},{"key":"shuqijssprwurl13","val":""},{"key":"shuqiuserurl14","val":"https://ocean.shuqireader.com/api/jaccount/accountapi/v1/sapi/account/getBindinfo?userId=2130409921&sqSv=1.0&timestamp=1624078497&sign=e1e51d23824524b2be342fc9167a791d&key=sq_h5_gateway"},{"key":"shuqisyurl14","val":"https://render.shuqireader.com/load/resource?sdk=13.2.3&utdid=YM14ZpGj0MYDADZ5IEh0dwOH&ustatus=0&first_placeid=111111&net_env=3g&placeid=111111&user_id=2130409921&sn=5E73652E3BDD348A56A2178F946F246945352407&umidtoken=YM14ZpGj0MYDADZ5IEh0dwOH&msv=8.0.0&brand=Apple&imei=530C3F5DCB6FF14B006D0CF17FF488CEEC2E4CDF&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&session=&skinColor=23B383&platform=iOS&ver=210301&mod=iPhone8&statusBarHeight=44.000000&skinVersion=1&wh=1242x2688&soft_id=21&utype=pre_vip&skinId=999&idfa=EE419AE0-BCF3-4BA5-8773-6891DE46BDDC"},{"key":"shuqisybody14","val":"appVer=4.3.6.0&imei=530C3F5DCB6FF14B006D0CF17FF488CEEC2E4CDF&isNewUser=1&params=%7B%22resources%22%3A%7B%22ShuqiVipEntry%22%3A%7B%7D%2C%22personalCardConfig%22%3A%7B%7D%7D%7D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=4bfe5b427772ff18d3c64a00892de1b4&sn=5E73652E3BDD348A56A2178F946F246945352407&soft_id=21&timestamp=1624078440&user_id=2130409921&ver=210301"},{"key":"shuqispbody14","val":"_public=skinId%3D999%26idfa%3DEE419AE0-BCF3-4BA5-8773-6891DE46BDDC%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26umidtoken%3DYM14ZpGj0MYDADZ5IEh0dwOH%26user_id%3D2130409921%26sn%3D5E73652E3BDD348A56A2178F946F246945352407%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D530C3F5DCB6FF14B006D0CF17FF488CEEC2E4CDF%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhone8%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYM14ZpGj0MYDADZ5IEh0dwOH%26utype%3Dpre_vip%26sdk%3D13.2.3&deliveryId=525&key=sq_app_ad&miniWua=HHnB_IHobH%2B%2BT21CN6yyNsJrnwUon67ef/iH7CiM8gsMKn1w%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=626&sign=5C595CA95DCBE8C15B619EDDAE174768&timestamp=1624078469&userId=2130409921&user_id=2130409921&wua=HIVW_D5bOZvcuqTfZVNp8P0UiEMnkgwzShlsO7wEyO4lG6sh4AclLUt99JUhI1K%2BpJyUCldW%2BYIXqStlOdYAOTbRH0CLm8JJ1BhhfuwgrRXdxm6/Aq9iZw6YTC%2BvG0FezspYTqvcCBggt6pOF4LeNz3gvI4UzDiJw2DBJlUVTHQUI5%2BQ3Mf6FMFPBktDC2K%2BbBad6jBtu2T4X6yiSDhjEBKpcsdbYTfDOU/8V/ZdcJ2djpqA%3D"},{"key":"shuqiscbody14","val":""},{"key":"shuqiydbody14","val":""},{"key":"shuqiqdbody14","val":"clientTimestamp=1624078457&position=501&userId=2130409921&signInType=1&wua=HIVW_9JrCR7Qbjl4OLsMt1vHRxyTYE3vCnp%2B%2ByNdb%2B9COoKLf%2FD64GNRYnG19cifx%2FudDJ%2FhGf7aYEHbtFK0gQH5M1CcrbxHrrCnMOxfiXaArpN%2Fv5e2Au8sfMIuswTVuTHU5PPZOsSJcnqBQV4XCpr4QtzRFyyPMXWA5XC8eIkEcCtaGN%2FNVk%2BJZnDUdunvRS0jRal7v8Dq8wEVy%2BO42FJOS00HnNThvdkgSqbxbkKmvDWg%3D&ua=&miniWua=HHnB_TYBRi%2BdW%2BMizozU5rdBysmpzClXUL8hKfWefjUX5nTg%3D&umidtoken=YM14ZpGj0MYDADZ5IEh0dwOH&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&sign=ac9ce8fca039a5e1cb2db896918b73e3&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.2.3%26utdid%3DYM14ZpGj0MYDADZ5IEh0dwOH%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2130409921%26sn%3D5E73652E3BDD348A56A2178F946F246945352407%26umidtoken%3DYM14ZpGj0MYDADZ5IEh0dwOH%26msv%3D8.0.0%26brand%3DApple%26imei%3D530C3F5DCB6FF14B006D0CF17FF488CEEC2E4CDF%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone8%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DEE419AE0-BCF3-4BA5-8773-6891DE46BDDC"},{"key":"shuqirwbody14","val":"serviceWorkerOn=1&stopPullRefresh=1&from=ShuqiTab&upf=20368&sdk=13.2.3&utdid=YM14ZpGj0MYDADZ5IEh0dwOH&ustatus=0&first_placeid=111111&net_env=3g&placeid=111111&user_id=2130409921&sn=5E73652E3BDD348A56A2178F946F246945352407&umidtoken=YM14ZpGj0MYDADZ5IEh0dwOH&msv=8.0.0&brand=Apple&imei=530C3F5DCB6FF14B006D0CF17FF488CEEC2E4CDF&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=1&ver=210301&mod=iPhone8&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=EE419AE0-BCF3-4BA5-8773-6891DE46BDDC&params=%7B%22resources%22%3A%7B%22ShuqiBsDailyTask%22%3A%7B%7D%7D%7D&userId=2130409921&placeId=111111&timestamp=1624078472&sqSv=1.0&sign=2e0b211950a72db2e485777d24437bef&key=sq_h5_gateway&_public="},{"key":"shuqifxbody14","val":""},{"key":"shuqisprwurl14","val":"https://ocean.shuqireader.com/api/ad/adserver/v1/api/getAdInfo?appVer=4.3.6.0&placeId=111111&platform=iOS&requestSrc=h5&resourceId=626&timestamp=1624078497&user_id=2130409921&sqSv=1.0&sign=15cc2724e4d907dc4c76b7464b1d20b3&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.2.3%26utdid%3DYM14ZpGj0MYDADZ5IEh0dwOH%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2130409921%26sn%3D5E73652E3BDD348A56A2178F946F246945352407%26umidtoken%3DYM14ZpGj0MYDADZ5IEh0dwOH%26msv%3D8.0.0%26brand%3DApple%26imei%3D530C3F5DCB6FF14B006D0CF17FF488CEEC2E4CDF%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone8%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DEE419AE0-BCF3-4BA5-8773-6891DE46BDDC"},{"key":"shuqijlbody14","val":"requestSrc=h5&userId=2130409921&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624078472&sqSv=1.0&sign=f9f0a8eb04ebb916c6529efa9dd54fdc&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.2.3%26utdid%3DYM14ZpGj0MYDADZ5IEh0dwOH%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2130409921%26sn%3D5E73652E3BDD348A56A2178F946F246945352407%26umidtoken%3DYM14ZpGj0MYDADZ5IEh0dwOH%26msv%3D8.0.0%26brand%3DApple%26imei%3D530C3F5DCB6FF14B006D0CF17FF488CEEC2E4CDF%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone8%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DEE419AE0-BCF3-4BA5-8773-6891DE46BDDC"},{"key":"shuqisqjlbody14","val":"src=&userId=2130409921&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624078464&sqSv=1.0&sign=019c4e0989eb8e0970ec8cef39d16771&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.2.3%26utdid%3DYM14ZpGj0MYDADZ5IEh0dwOH%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2130409921%26sn%3D5E73652E3BDD348A56A2178F946F246945352407%26umidtoken%3DYM14ZpGj0MYDADZ5IEh0dwOH%26msv%3D8.0.0%26brand%3DApple%26imei%3D530C3F5DCB6FF14B006D0CF17FF488CEEC2E4CDF%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone8%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DEE419AE0-BCF3-4BA5-8773-6891DE46BDDC"},{"key":"shuqicjyurl14","val":"https://ocean.shuqireader.com/api/activity/activity/v1/lottery/info?timestamp=1624078500&userId=2130409921&activityId=311&sqSv=1.0&sign=2b0506dc6cd7607ce614abeaad808e90&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.2.3%26utdid%3DYM14ZpGj0MYDADZ5IEh0dwOH%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2130409921%26sn%3D5E73652E3BDD348A56A2178F946F246945352407%26umidtoken%3DYM14ZpGj0MYDADZ5IEh0dwOH%26msv%3D8.0.0%26brand%3DApple%26imei%3D530C3F5DCB6FF14B006D0CF17FF488CEEC2E4CDF%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone8%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DEE419AE0-BCF3-4BA5-8773-6891DE46BDDC"},{"key":"shuqicjcsbody14","val":"_public=skinId%3D999%26idfa%3DEE419AE0-BCF3-4BA5-8773-6891DE46BDDC%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26umidtoken%3DYM14ZpGj0MYDADZ5IEh0dwOH%26user_id%3D2130409921%26sn%3D5E73652E3BDD348A56A2178F946F246945352407%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D530C3F5DCB6FF14B006D0CF17FF488CEEC2E4CDF%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhone8%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYM14ZpGj0MYDADZ5IEh0dwOH%26utype%3Dpre_vip%26sdk%3D13.2.3&deliveryId=711&key=sq_app_ad&miniWua=HHnB_lZUVwiUKOOHzo23Qi1bZ%2BZo3pcqSaL8WyXiMe1p2AUg%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=703&sign=8605092B5348BE19D4BF7E8803B464F8&timestamp=1624078480&userId=2130409921&user_id=2130409921&wua=HIVW_WRJSOpNTVvnYCs0s1%2BvaJpH55HlLvOVv47vOHuGu7XzzW2twdf2vGBkiUke9gXnLRmfUM0LhVExierwyQTJJzyQOt8z9X1zVWHtNNp8RoEasEB/nbkRjWIB699%2BldcqlErW/AOLmaJ8YvF0ruB96AXVfYcDhU1KdWB5bCfTbecAvfzQu%2BwUgFXvNg97y6xss43XqrDYP7z9oos3FPgLlYF0f01TCgucYPAlvTZ8cqvM%3D"},{"key":"shuqicjbody14","val":"wua=HIVW_rYvUPqpW67hswdHR9gaflw%2FsLaRZsxoenSBpLXWqPu9t5swcqK6wNvjyx6BnKvG83IV8YstmW9xV5WDCi1WNo9RDr6W%2FhuOBDd72UdHuZ9XUxQtA%2Bs9t9X7E3XtdZQT%2FNIv1cq5viKib2h3VBcVjRTz0KnaH4vNWB%2BvcrcSPsgfJqhFRU7MWZeQxMqNjhN0it%2Fb23dpVHpg3epepR4410u9oWjuHfbI9hNox%2FhARXg8%3D&ua=&userId=2130409921&umidtoken=YM14ZpGj0MYDADZ5IEh0dwOH&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&asac=2A20C07RJ9F51AOEFSNHDR&timestamp=1624078486&activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&sqSv=1.0&sign=d8adc889050b5cd9050a75c88d3ba0f0&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.2.3%26utdid%3DYM14ZpGj0MYDADZ5IEh0dwOH%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2130409921%26sn%3D5E73652E3BDD348A56A2178F946F246945352407%26umidtoken%3DYM14ZpGj0MYDADZ5IEh0dwOH%26msv%3D8.0.0%26brand%3DApple%26imei%3D530C3F5DCB6FF14B006D0CF17FF488CEEC2E4CDF%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone8%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DEE419AE0-BCF3-4BA5-8773-6891DE46BDDC"},{"key":"shuqijsspbody14","val":""},{"key":"shuqijsydurl14","val":""},{"key":"shuqijsydbody14","val":""},{"key":"shuqijsqdbody14","val":""},{"key":"shuqijsqdspyurl14","val":""},{"key":"shuqijsqdspbody14","val":""},{"key":"shuqijsrwbody14","val":""},{"key":"shuqijsfxbody14","val":""},{"key":"shuqijsbookurl14","val":""},{"key":"shuqijsbookbody14","val":""},{"key":"shuqijssprwurl14","val":""},{"key":"shuqiuserurl15","val":"https://ocean.shuqireader.com/api/jaccount/accountapi/v1/sapi/account/getBindinfo?userId=2127967835&sqSv=1.0&timestamp=1624078566&sign=c1caabfb11c43d8b63328f6202dd2be5&key=sq_h5_gateway"},{"key":"shuqisyurl15","val":"https://render.shuqireader.com/load/resource?sdk=13.1.3&utdid=YM1Sb8aKaW8DAO2KVr4AVQMY&ustatus=0&first_placeid=111111&net_env=3g&placeid=111111&user_id=2127967835&sn=F6561FF5A7DC8FDD903C6A7F69DA43246D1A6445&umidtoken=YM1Sb8aKaW8DAO2KVr4AVQMY&msv=8.0.0&brand=Apple&imei=5324556A9C781929688BADE660CF2DCC76A729E8&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&session=&skinColor=23B383&platform=iOS&ver=210301&mod=iPad3G&statusBarHeight=44.000000&skinVersion=1&wh=1242x2688&soft_id=21&utype=pre_vip&skinId=999&idfa=12377F33-690B-468D-87EB-821040F1F712"},{"key":"shuqisybody15","val":"appVer=4.3.6.0&imei=5324556A9C781929688BADE660CF2DCC76A729E8&isNewUser=1&params=%7B%22resources%22%3A%7B%22ShuqiVipEntry%22%3A%7B%7D%2C%22personalCardConfig%22%3A%7B%7D%7D%7D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=f16756838e4b8f5f3e966034524fad2c&sn=F6561FF5A7DC8FDD903C6A7F69DA43246D1A6445&soft_id=21&timestamp=1624078517&user_id=2127967835&ver=210301"},{"key":"shuqispbody15","val":"_public=skinId%3D999%26idfa%3D12377F33-690B-468D-87EB-821040F1F712%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26umidtoken%3DYM1Sb8aKaW8DAO2KVr4AVQMY%26user_id%3D2127967835%26sn%3DF6561FF5A7DC8FDD903C6A7F69DA43246D1A6445%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D5324556A9C781929688BADE660CF2DCC76A729E8%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPad3G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYM1Sb8aKaW8DAO2KVr4AVQMY%26utype%3Dpre_vip%26sdk%3D13.1.3&deliveryId=525&key=sq_app_ad&miniWua=HHnB_KfhrUu7KedzwnC79GY1nf2FaoTynI%2Bybg2vUQfPWUhA%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=626&sign=7110465BBAFF630B1F15E703CC0240EA&timestamp=1624078541&userId=2127967835&user_id=2127967835&wua=HIVW_ZsZAeY7v7p0keRk/KbOZEh2U1iYKE7vZVwbJpUZOAA3a9X1AL8mHXcRvR5LAL1jxPXAuX5lgAtpQulREmTtl8%2B9BNikKaxLHNABxwGQg7SMgC%2BhMd1ndTMdyYSiN9YOkiPE7lVUnotguMMRlVHQUaJ%2BTIWC4iIsDxCy6diph1m6mapew4sWPydjiWurhwj0eO2esH6ZeCvgjeL7b8Ak5XebifkTS239F2AIRUtXjmxs%3D"},{"key":"shuqiscbody15","val":""},{"key":"shuqiydbody15","val":""},{"key":"shuqiqdbody15","val":"clientTimestamp=1624078532&position=501&userId=2127967835&signInType=1&wua=HIVW_Uc22c4zk0ApC%2B6D77lOxS%2FKekopbdby%2BY%2BiDmHtaZg9K0B8JSGhMgfmbq%2F6KPDaNrmHHuaOEOfUO8g1DLXwNZnvzoTqmG3hZPiLebIstBmpQoBHQZGFIBVOx6SdH6zWcoLxFsqgoX8%2FyqpXtRD%2FQ7HM7pjdcqDmsiBV6MPHcK3sPIPFq8UH4J2GrURfj8qW6rhQlwtkQSUFOo9I3B48UvVhNWqCP9%2F%2BvLAhAD%2BZF1KQ%3D&ua=&miniWua=HHnB_blTax%2F%2Bb2KrZ29ZdoO9o5YgByRDKymyUVbMB4iGyGHI%3D&umidtoken=YM1Sb8aKaW8DAO2KVr4AVQMY&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&sign=8e277d026efabad6d42c7c942bb6d3a5&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.1.3%26utdid%3DYM1Sb8aKaW8DAO2KVr4AVQMY%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2127967835%26sn%3DF6561FF5A7DC8FDD903C6A7F69DA43246D1A6445%26umidtoken%3DYM1Sb8aKaW8DAO2KVr4AVQMY%26msv%3D8.0.0%26brand%3DApple%26imei%3D5324556A9C781929688BADE660CF2DCC76A729E8%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad3G%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D12377F33-690B-468D-87EB-821040F1F712"},{"key":"shuqirwbody15","val":"serviceWorkerOn=1&stopPullRefresh=1&from=ShuqiTab&upf=20368&sdk=13.1.3&utdid=YM1Sb8aKaW8DAO2KVr4AVQMY&ustatus=0&first_placeid=111111&net_env=3g&placeid=111111&user_id=2127967835&sn=F6561FF5A7DC8FDD903C6A7F69DA43246D1A6445&umidtoken=YM1Sb8aKaW8DAO2KVr4AVQMY&msv=8.0.0&brand=Apple&imei=5324556A9C781929688BADE660CF2DCC76A729E8&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=1&ver=210301&mod=iPad3G&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=12377F33-690B-468D-87EB-821040F1F712&params=%7B%22resources%22%3A%7B%22ShuqiBsDailyTask%22%3A%7B%7D%7D%7D&userId=2127967835&placeId=111111&timestamp=1624078545&sqSv=1.0&sign=2ed5fe93a05a8ef894d697369aabbe01&key=sq_h5_gateway&_public="},{"key":"shuqifxbody15","val":""},{"key":"shuqisprwurl15","val":"https://ocean.shuqireader.com/api/ad/adserver/v1/api/getAdInfo?appVer=4.3.6.0&placeId=111111&platform=iOS&requestSrc=h5&resourceId=626&timestamp=1624078567&user_id=2127967835&sqSv=1.0&sign=21d2c6cf9e8df8e0cf92f728bfeb9a0b&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.1.3%26utdid%3DYM1Sb8aKaW8DAO2KVr4AVQMY%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2127967835%26sn%3DF6561FF5A7DC8FDD903C6A7F69DA43246D1A6445%26umidtoken%3DYM1Sb8aKaW8DAO2KVr4AVQMY%26msv%3D8.0.0%26brand%3DApple%26imei%3D5324556A9C781929688BADE660CF2DCC76A729E8%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad3G%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D12377F33-690B-468D-87EB-821040F1F712"},{"key":"shuqijlbody15","val":"requestSrc=h5&userId=2127967835&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624078545&sqSv=1.0&sign=5e3976c88bc9ccf63622578e1ff5f6f3&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.1.3%26utdid%3DYM1Sb8aKaW8DAO2KVr4AVQMY%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2127967835%26sn%3DF6561FF5A7DC8FDD903C6A7F69DA43246D1A6445%26umidtoken%3DYM1Sb8aKaW8DAO2KVr4AVQMY%26msv%3D8.0.0%26brand%3DApple%26imei%3D5324556A9C781929688BADE660CF2DCC76A729E8%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad3G%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D12377F33-690B-468D-87EB-821040F1F712"},{"key":"shuqisqjlbody15","val":"src=&userId=2127967835&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624078538&sqSv=1.0&sign=17d2b5720048ab6a7f9cb51fc2379e0f&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.1.3%26utdid%3DYM1Sb8aKaW8DAO2KVr4AVQMY%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2127967835%26sn%3DF6561FF5A7DC8FDD903C6A7F69DA43246D1A6445%26umidtoken%3DYM1Sb8aKaW8DAO2KVr4AVQMY%26msv%3D8.0.0%26brand%3DApple%26imei%3D5324556A9C781929688BADE660CF2DCC76A729E8%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad3G%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D12377F33-690B-468D-87EB-821040F1F712"},{"key":"shuqicjyurl15","val":"https://ocean.shuqireader.com/api/activity/activity/v1/lottery/info?timestamp=1624078570&userId=2127967835&activityId=311&sqSv=1.0&sign=6f0e015d5fb0570a4e5b085446f2326d&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.1.3%26utdid%3DYM1Sb8aKaW8DAO2KVr4AVQMY%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2127967835%26sn%3DF6561FF5A7DC8FDD903C6A7F69DA43246D1A6445%26umidtoken%3DYM1Sb8aKaW8DAO2KVr4AVQMY%26msv%3D8.0.0%26brand%3DApple%26imei%3D5324556A9C781929688BADE660CF2DCC76A729E8%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad3G%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D12377F33-690B-468D-87EB-821040F1F712"},{"key":"shuqicjcsbody15","val":"_public=skinId%3D999%26idfa%3D12377F33-690B-468D-87EB-821040F1F712%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26umidtoken%3DYM1Sb8aKaW8DAO2KVr4AVQMY%26user_id%3D2127967835%26sn%3DF6561FF5A7DC8FDD903C6A7F69DA43246D1A6445%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D5324556A9C781929688BADE660CF2DCC76A729E8%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPad3G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYM1Sb8aKaW8DAO2KVr4AVQMY%26utype%3Dpre_vip%26sdk%3D13.1.3&deliveryId=711&key=sq_app_ad&miniWua=HHnB_Gr1cF0rbUR3rwueQMofdOFsfB%2B8Zt96KCjlT15pweNQ%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=703&sign=5B328E42E7CC5135238326638EDF86EB&timestamp=1624078551&userId=2127967835&user_id=2127967835&wua=HIVW_3I0FZFButV5Eznd2QGJ7wqVrUO5/IyvPCresy9nz03RMBIB4Tg7P%2BXkg3a6e8TXdOEf9iGBCri69zwTA1baYAjFF6bEWa9AvdPvBlEC5Usu5YxPDI8U%2BrqJkWwqKmLJbaCzkunkt/g2IXHimMdMZWiWknJ8qnSa8XpaQjSronHISfM5UJR0LFDAevCOXNERh%2Bx3%2Bbh7XlWSAmBW9kzzbEr/mel3iMnGirzHjB5K8c4U%3D"},{"key":"shuqicjbody15","val":"wua=HIVW_1R7IKmOP3vFH3LMVm8eQ9DbpZjhJR8TQGHejQCmMsr4cq0NDkPryZ5Eq09SRzMaPetfD3eZmmcDmM2FnVb1LJxUienFDxOvioHGkjd7nsLRGTawKaIJMoUSfvVM2x58%2BU%2FlhqOU5VNuQ%2FHuDVbLTHGBMpHWBxaSnWLTotgR2N241dwvVYvUwlbdq1QfkAsYG6VAmdwtY11ePmeOx0a8baoHZ%2BsP8AqNZqm6mOtwPhY4%3D&ua=&userId=2127967835&umidtoken=YM1Sb8aKaW8DAO2KVr4AVQMY&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&asac=2A20C07RJ9F51AOEFSNHDR&timestamp=1624078555&activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&sqSv=1.0&sign=d7901e27d798b7aee0ec51450a0c817e&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.1.3%26utdid%3DYM1Sb8aKaW8DAO2KVr4AVQMY%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2127967835%26sn%3DF6561FF5A7DC8FDD903C6A7F69DA43246D1A6445%26umidtoken%3DYM1Sb8aKaW8DAO2KVr4AVQMY%26msv%3D8.0.0%26brand%3DApple%26imei%3D5324556A9C781929688BADE660CF2DCC76A729E8%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad3G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D12377F33-690B-468D-87EB-821040F1F712"},{"key":"shuqijsspbody15","val":""},{"key":"shuqijsydurl15","val":""},{"key":"shuqijsydbody15","val":""},{"key":"shuqijsqdbody15","val":""},{"key":"shuqijsqdspyurl15","val":""},{"key":"shuqijsqdspbody15","val":""},{"key":"shuqijsrwbody15","val":""},{"key":"shuqijsfxbody15","val":""},{"key":"shuqijsbookurl15","val":""},{"key":"shuqijsbookbody15","val":""},{"key":"shuqijssprwurl15","val":""},{"key":"shuqiuserurl16","val":""},{"key":"shuqisyurl16","val":""},{"key":"shuqisybody16","val":""},{"key":"shuqispbody16","val":""},{"key":"shuqiscbody16","val":""},{"key":"shuqiydbody16","val":""},{"key":"shuqiqdbody16","val":""},{"key":"shuqirwbody16","val":""},{"key":"shuqifxbody16","val":""},{"key":"shuqisprwurl16","val":""},{"key":"shuqijlbody16","val":""},{"key":"shuqisqjlbody16","val":""},{"key":"shuqicjyurl16","val":""},{"key":"shuqicjcsbody16","val":""},{"key":"shuqicjbody16","val":""},{"key":"shuqijsspbody16","val":""},{"key":"shuqijsydurl16","val":""},{"key":"shuqijsydbody16","val":""},{"key":"shuqijsqdbody16","val":""},{"key":"shuqijsqdspyurl16","val":""},{"key":"shuqijsqdspbody16","val":""},{"key":"shuqijsrwbody16","val":""},{"key":"shuqijsfxbody16","val":""},{"key":"shuqijsbookurl16","val":""},{"key":"shuqijsbookbody16","val":""},{"key":"shuqijssprwurl16","val":""},{"key":"shuqiuserurl17","val":""},{"key":"shuqisyurl17","val":""},{"key":"shuqisybody17","val":""},{"key":"shuqispbody17","val":""},{"key":"shuqiscbody17","val":""},{"key":"shuqiydbody17","val":""},{"key":"shuqiqdbody17","val":""},{"key":"shuqirwbody17","val":""},{"key":"shuqifxbody17","val":""},{"key":"shuqisprwurl17","val":""},{"key":"shuqijlbody17","val":""},{"key":"shuqisqjlbody17","val":""},{"key":"shuqicjyurl17","val":""},{"key":"shuqicjcsbody17","val":""},{"key":"shuqicjbody17","val":""},{"key":"shuqijsspbody17","val":""},{"key":"shuqijsydurl17","val":""},{"key":"shuqijsydbody17","val":""},{"key":"shuqijsqdbody17","val":""},{"key":"shuqijsqdspyurl17","val":""},{"key":"shuqijsqdspbody17","val":""},{"key":"shuqijsrwbody17","val":""},{"key":"shuqijsfxbody17","val":""},{"key":"shuqijsbookurl17","val":""},{"key":"shuqijsbookbody17","val":""},{"key":"shuqijssprwurl17","val":""},{"key":"shuqiuserurl18","val":""},{"key":"shuqisyurl18","val":""},{"key":"shuqisybody18","val":""},{"key":"shuqispbody18","val":""},{"key":"shuqiscbody18","val":""},{"key":"shuqiydbody18","val":""},{"key":"shuqiqdbody18","val":""},{"key":"shuqirwbody18","val":""},{"key":"shuqifxbody18","val":""},{"key":"shuqisprwurl18","val":""},{"key":"shuqijlbody18","val":""},{"key":"shuqisqjlbody18","val":""},{"key":"shuqicjyurl18","val":""},{"key":"shuqicjcsbody18","val":""},{"key":"shuqicjbody18","val":""},{"key":"shuqijsspbody18","val":""},{"key":"shuqijsydurl18","val":""},{"key":"shuqijsydbody18","val":""},{"key":"shuqijsqdbody18","val":""},{"key":"shuqijsqdspyurl18","val":""},{"key":"shuqijsqdspbody18","val":""},{"key":"shuqijsrwbody18","val":""},{"key":"shuqijsfxbody18","val":""},{"key":"shuqijsbookurl18","val":""},{"key":"shuqijsbookbody18","val":""},{"key":"shuqijssprwurl18","val":""},{"key":"shuqiuserurl19","val":""},{"key":"shuqisyurl19","val":""},{"key":"shuqisybody19","val":""},{"key":"shuqispbody19","val":""},{"key":"shuqiscbody19","val":""},{"key":"shuqiydbody19","val":""},{"key":"shuqiqdbody19","val":""},{"key":"shuqirwbody19","val":""},{"key":"shuqifxbody19","val":""},{"key":"shuqisprwurl19","val":""},{"key":"shuqijlbody19","val":""},{"key":"shuqisqjlbody19","val":""},{"key":"shuqicjyurl19","val":""},{"key":"shuqicjcsbody19","val":""},{"key":"shuqicjbody19","val":""},{"key":"shuqijsspbody19","val":""},{"key":"shuqijsydurl19","val":""},{"key":"shuqijsydbody19","val":""},{"key":"shuqijsqdbody19","val":""},{"key":"shuqijsqdspyurl19","val":""},{"key":"shuqijsqdspbody19","val":""},{"key":"shuqijsrwbody19","val":""},{"key":"shuqijsfxbody19","val":""},{"key":"shuqijsbookurl19","val":""},{"key":"shuqijsbookbody19","val":""},{"key":"shuqijssprwurl19","val":""},{"key":"shuqiuserurl20","val":""},{"key":"shuqisyurl20","val":""},{"key":"shuqisybody20","val":""},{"key":"shuqispbody20","val":""},{"key":"shuqiscbody20","val":""},{"key":"shuqiydbody20","val":""},{"key":"shuqiqdbody20","val":""},{"key":"shuqirwbody20","val":""},{"key":"shuqifxbody20","val":""},{"key":"shuqisprwurl20","val":""},{"key":"shuqijlbody20","val":""},{"key":"shuqisqjlbody20","val":""},{"key":"shuqicjyurl20","val":""},{"key":"shuqicjcsbody20","val":""},{"key":"shuqicjbody20","val":""},{"key":"shuqijsspbody20","val":""},{"key":"shuqijsydurl20","val":""},{"key":"shuqijsydbody20","val":""},{"key":"shuqijsqdbody20","val":""},{"key":"shuqijsqdspyurl20","val":""},{"key":"shuqijsqdspbody20","val":""},{"key":"shuqijsrwbody20","val":""},{"key":"shuqijsfxbody20","val":""},{"key":"shuqijsbookurl20","val":""},{"key":"shuqijsbookbody20","val":""},{"key":"shuqijssprwurl20","val":""}],"sessions":[],"isLoaded":true};
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
