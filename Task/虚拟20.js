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
const COOKIE = {"id":"shuqi","name":"书旗小说APP","keys":["shuqiuserurl","shuqisyurl","shuqisybody","shuqispbody","shuqiscbody","shuqiydbody","shuqiqdbody","shuqirwbody","shuqifxbody","shuqisprwurl","shuqijlbody","shuqisqjlbody","shuqicjyurl","shuqicjcsbody","shuqicjbody","shuqijsspbody","shuqijsydurl","shuqijsydbody","shuqijsqdbody","shuqijsqdspyurl","shuqijsqdspbody","shuqijsrwbody","shuqijsfxbody","shuqijsbookurl","shuqijsbookbody","shuqijssprwurl","shuqiuserurl2","shuqisyurl2","shuqisybody2","shuqispbody2","shuqiscbody2","shuqiydbody2","shuqiqdbody2","shuqirwbody2","shuqifxbody2","shuqisprwurl2","shuqijlbody2","shuqisqjlbody2","shuqicjyurl2","shuqicjcsbody2","shuqicjbody2","shuqijsspbody2","shuqijsydurl2","shuqijsydbody2","shuqijsqdbody2","shuqijsqdspyurl2","shuqijsqdspbody2","shuqijsrwbody2","shuqijsfxbody2","shuqijsbookurl2","shuqijsbookbody2","shuqijssprwurl2","shuqiuserurl3","shuqisyurl3","shuqisybody3","shuqispbody3","shuqiscbody3","shuqiydbody3","shuqiqdbody3","shuqirwbody3","shuqifxbody3","shuqisprwurl3","shuqijlbody3","shuqisqjlbody3","shuqicjyurl3","shuqicjcsbody3","shuqicjbody3","shuqijsspbody3","shuqijsydurl3","shuqijsydbody3","shuqijsqdbody3","shuqijsqdspyurl3","shuqijsqdspbody3","shuqijsrwbody3","shuqijsfxbody3","shuqijsbookurl3","shuqijsbookbody3","shuqijssprwurl3","shuqiuserurl4","shuqisyurl4","shuqisybody4","shuqispbody4","shuqiscbody4","shuqiydbody4","shuqiqdbody4","shuqirwbody4","shuqifxbody4","shuqisprwurl4","shuqijlbody4","shuqisqjlbody4","shuqicjyurl4","shuqicjcsbody4","shuqicjbody4","shuqijsspbody4","shuqijsydurl4","shuqijsydbody4","shuqijsqdbody4","shuqijsqdspyurl4","shuqijsqdspbody4","shuqijsrwbody4","shuqijsfxbody4","shuqijsbookurl4","shuqijsbookbody4","shuqijssprwurl4","shuqiuserurl5","shuqisyurl5","shuqisybody5","shuqispbody5","shuqiscbody5","shuqiydbody5","shuqiqdbody5","shuqirwbody5","shuqifxbody5","shuqisprwurl5","shuqijlbody5","shuqisqjlbody5","shuqicjyurl5","shuqicjcsbody5","shuqicjbody5","shuqijsspbody5","shuqijsydurl5","shuqijsydbody5","shuqijsqdbody5","shuqijsqdspyurl5","shuqijsqdspbody5","shuqijsrwbody5","shuqijsfxbody5","shuqijsbookurl5","shuqijsbookbody5","shuqijssprwurl5","shuqiuserurl6","shuqisyurl6","shuqisybody6","shuqispbody6","shuqiscbody6","shuqiydbody6","shuqiqdbody6","shuqirwbody6","shuqifxbody6","shuqisprwurl6","shuqijlbody6","shuqisqjlbody6","shuqicjyurl6","shuqicjcsbody6","shuqicjbody6","shuqijsspbody6","shuqijsydurl6","shuqijsydbody6","shuqijsqdbody6","shuqijsqdspyurl6","shuqijsqdspbody6","shuqijsrwbody6","shuqijsfxbody6","shuqijsbookurl6","shuqijsbookbody6","shuqijssprwurl6","shuqiuserurl7","shuqisyurl7","shuqisybody7","shuqispbody7","shuqiscbody7","shuqiydbody7","shuqiqdbody7","shuqirwbody7","shuqifxbody7","shuqisprwurl7","shuqijlbody7","shuqisqjlbody7","shuqicjyurl7","shuqicjcsbody7","shuqicjbody7","shuqijsspbody7","shuqijsydurl7","shuqijsydbody7","shuqijsqdbody7","shuqijsqdspyurl7","shuqijsqdspbody7","shuqijsrwbody7","shuqijsfxbody7","shuqijsbookurl7","shuqijsbookbody7","shuqijssprwurl7","shuqiuserurl8","shuqisyurl8","shuqisybody8","shuqispbody8","shuqiscbody8","shuqiydbody8","shuqiqdbody8","shuqirwbody8","shuqifxbody8","shuqisprwurl8","shuqijlbody8","shuqisqjlbody8","shuqicjyurl8","shuqicjcsbody8","shuqicjbody8","shuqijsspbody8","shuqijsydurl8","shuqijsydbody8","shuqijsqdbody8","shuqijsqdspyurl8","shuqijsqdspbody8","shuqijsrwbody8","shuqijsfxbody8","shuqijsbookurl8","shuqijsbookbody8","shuqijssprwurl8","shuqiuserurl9","shuqisyurl9","shuqisybody9","shuqispbody9","shuqiscbody9","shuqiydbody9","shuqiqdbody9","shuqirwbody9","shuqifxbody9","shuqisprwurl9","shuqijlbody9","shuqisqjlbody9","shuqicjyurl9","shuqicjcsbody9","shuqicjbody9","shuqijsspbody9","shuqijsydurl9","shuqijsydbody9","shuqijsqdbody9","shuqijsqdspyurl9","shuqijsqdspbody9","shuqijsrwbody9","shuqijsfxbody9","shuqijsbookurl9","shuqijsbookbody9","shuqijssprwurl9","shuqiuserurl10","shuqisyurl10","shuqisybody10","shuqispbody10","shuqiscbody10","shuqiydbody10","shuqiqdbody10","shuqirwbody10","shuqifxbody10","shuqisprwurl10","shuqijlbody10","shuqisqjlbody10","shuqicjyurl10","shuqicjcsbody10","shuqicjbody10","shuqijsspbody10","shuqijsydurl10","shuqijsydbody10","shuqijsqdbody10","shuqijsqdspyurl10","shuqijsqdspbody10","shuqijsrwbody10","shuqijsfxbody10","shuqijsbookurl10","shuqijsbookbody10","shuqijssprwurl10","shuqiuserurl11","shuqisyurl11","shuqisybody11","shuqispbody11","shuqiscbody11","shuqiydbody11","shuqiqdbody11","shuqirwbody11","shuqifxbody11","shuqisprwurl11","shuqijlbody11","shuqisqjlbody11","shuqicjyurl11","shuqicjcsbody11","shuqicjbody11","shuqijsspbody11","shuqijsydurl11","shuqijsydbody11","shuqijsqdbody11","shuqijsqdspyurl11","shuqijsqdspbody11","shuqijsrwbody11","shuqijsfxbody11","shuqijsbookurl11","shuqijsbookbody11","shuqijssprwurl11","shuqiuserurl12","shuqisyurl12","shuqisybody12","shuqispbody12","shuqiscbody12","shuqiydbody12","shuqiqdbody12","shuqirwbody12","shuqifxbody12","shuqisprwurl12","shuqijlbody12","shuqisqjlbody12","shuqicjyurl12","shuqicjcsbody12","shuqicjbody12","shuqijsspbody12","shuqijsydurl12","shuqijsydbody12","shuqijsqdbody12","shuqijsqdspyurl12","shuqijsqdspbody12","shuqijsrwbody12","shuqijsfxbody12","shuqijsbookurl12","shuqijsbookbody12","shuqijssprwurl12","shuqiuserurl13","shuqisyurl13","shuqisybody13","shuqispbody13","shuqiscbody13","shuqiydbody13","shuqiqdbody13","shuqirwbody13","shuqifxbody13","shuqisprwurl13","shuqijlbody13","shuqisqjlbody13","shuqicjyurl13","shuqicjcsbody13","shuqicjbody13","shuqijsspbody13","shuqijsydurl13","shuqijsydbody13","shuqijsqdbody13","shuqijsqdspyurl13","shuqijsqdspbody13","shuqijsrwbody13","shuqijsfxbody13","shuqijsbookurl13","shuqijsbookbody13","shuqijssprwurl13","shuqiuserurl14","shuqisyurl14","shuqisybody14","shuqispbody14","shuqiscbody14","shuqiydbody14","shuqiqdbody14","shuqirwbody14","shuqifxbody14","shuqisprwurl14","shuqijlbody14","shuqisqjlbody14","shuqicjyurl14","shuqicjcsbody14","shuqicjbody14","shuqijsspbody14","shuqijsydurl14","shuqijsydbody14","shuqijsqdbody14","shuqijsqdspyurl14","shuqijsqdspbody14","shuqijsrwbody14","shuqijsfxbody14","shuqijsbookurl14","shuqijsbookbody14","shuqijssprwurl14","shuqiuserurl15","shuqisyurl15","shuqisybody15","shuqispbody15","shuqiscbody15","shuqiydbody15","shuqiqdbody15","shuqirwbody15","shuqifxbody15","shuqisprwurl15","shuqijlbody15","shuqisqjlbody15","shuqicjyurl15","shuqicjcsbody15","shuqicjbody15","shuqijsspbody15","shuqijsydurl15","shuqijsydbody15","shuqijsqdbody15","shuqijsqdspyurl15","shuqijsqdspbody15","shuqijsrwbody15","shuqijsfxbody15","shuqijsbookurl15","shuqijsbookbody15","shuqijssprwurl15","shuqiuserurl16","shuqisyurl16","shuqisybody16","shuqispbody16","shuqiscbody16","shuqiydbody16","shuqiqdbody16","shuqirwbody16","shuqifxbody16","shuqisprwurl16","shuqijlbody16","shuqisqjlbody16","shuqicjyurl16","shuqicjcsbody16","shuqicjbody16","shuqijsspbody16","shuqijsydurl16","shuqijsydbody16","shuqijsqdbody16","shuqijsqdspyurl16","shuqijsqdspbody16","shuqijsrwbody16","shuqijsfxbody16","shuqijsbookurl16","shuqijsbookbody16","shuqijssprwurl16","shuqiuserurl17","shuqisyurl17","shuqisybody17","shuqispbody17","shuqiscbody17","shuqiydbody17","shuqiqdbody17","shuqirwbody17","shuqifxbody17","shuqisprwurl17","shuqijlbody17","shuqisqjlbody17","shuqicjyurl17","shuqicjcsbody17","shuqicjbody17","shuqijsspbody17","shuqijsydurl17","shuqijsydbody17","shuqijsqdbody17","shuqijsqdspyurl17","shuqijsqdspbody17","shuqijsrwbody17","shuqijsfxbody17","shuqijsbookurl17","shuqijsbookbody17","shuqijssprwurl17","shuqiuserurl18","shuqisyurl18","shuqisybody18","shuqispbody18","shuqiscbody18","shuqiydbody18","shuqiqdbody18","shuqirwbody18","shuqifxbody18","shuqisprwurl18","shuqijlbody18","shuqisqjlbody18","shuqicjyurl18","shuqicjcsbody18","shuqicjbody18","shuqijsspbody18","shuqijsydurl18","shuqijsydbody18","shuqijsqdbody18","shuqijsqdspyurl18","shuqijsqdspbody18","shuqijsrwbody18","shuqijsfxbody18","shuqijsbookurl18","shuqijsbookbody18","shuqijssprwurl18","shuqiuserurl19","shuqisyurl19","shuqisybody19","shuqispbody19","shuqiscbody19","shuqiydbody19","shuqiqdbody19","shuqirwbody19","shuqifxbody19","shuqisprwurl19","shuqijlbody19","shuqisqjlbody19","shuqicjyurl19","shuqicjcsbody19","shuqicjbody19","shuqijsspbody19","shuqijsydurl19","shuqijsydbody19","shuqijsqdbody19","shuqijsqdspyurl19","shuqijsqdspbody19","shuqijsrwbody19","shuqijsfxbody19","shuqijsbookurl19","shuqijsbookbody19","shuqijssprwurl19","shuqiuserurl20","shuqisyurl20","shuqisybody20","shuqispbody20","shuqiscbody20","shuqiydbody20","shuqiqdbody20","shuqirwbody20","shuqifxbody20","shuqisprwurl20","shuqijlbody20","shuqisqjlbody20","shuqicjyurl20","shuqicjcsbody20","shuqicjbody20","shuqijsspbody20","shuqijsydurl20","shuqijsydbody20","shuqijsqdbody20","shuqijsqdspyurl20","shuqijsqdspbody20","shuqijsrwbody20","shuqijsfxbody20","shuqijsbookurl20","shuqijsbookbody20","shuqijssprwurl20"],"author":"@ziye","settings":[{"id":"shuqiSuffix","name":"当前账号","val":"1","type":"number","desc":"当前抓取ck记录的账号序号，如：1、2、3、"},{"id":"shuqiCount","name":"账号个数","val":"15","type":"number","desc":"指定任务最多跑几个账号，根据抓取的账号数据个数来设值"},{"id":"shuqiXH","name":"循环获取CK","val":"1","type":"number","desc":"0关闭 1开启,默认关闭"},{"id":"shuqiSC","name":"单刷时长控制","val":"0","type":"number","desc":"0关闭 1开启,默认关闭"},{"id":"shuqiTXTX","name":"提现提醒","val":"10","type":"number","desc":"0关闭 设置余额大于多少提醒"},{"id":"shuqinotifyttt","name":"推送控制","val":"1","type":"number","desc":"0关闭，1推送,默认12点以及23点推送"},{"id":"shuqinotifyInterval","name":"通知控制","val":"2","type":"number","desc":"0关闭，1为 所有通知，2为 12，23 点通知，3为 6，12，18，23 点通知 "},{"id":"shuqiMinutes","name":"推送-通知 分钟控制","val":"59","type":"number","desc":"推送以及通知控制在什么分钟段，可设置0-59,默认0到10"}],"repo":"https://cdn.jsdelivr.net/gh/ziye888/JavaScript@main/Task/shuqi.js","icons":["https://cdn.jsdelivr.net/gh/ziye888/JavaScript@main/Task/shuqi.png","https://cdn.jsdelivr.net/gh/ziye888/JavaScript@main/Task/shuqi.png"],"script":"https://cdn.jsdelivr.net/gh/ziye888/JavaScript@main/Task/shuqi.js","icon":"https://cdn.jsdelivr.net/gh/ziye888/JavaScript@main/Task/shuqi.png","favIcon":"mdi-star","favIconColor":"primary","datas":[{"key":"shuqiuserurl","val":"https://ocean.shuqireader.com/api/jaccount/accountapi/v1/sapi/account/getBindinfo?userId=2128266915&sqSv=1.0&timestamp=1624078747&sign=f4e5ebfb6d78ca15ae5388c63594c210&key=sq_h5_gateway"},{"key":"shuqisyurl","val":"https://render.shuqireader.com/load/resource?sdk=13.2&utdid=YM1Sef33W8YDAEgTUPWLjZ1V&ustatus=0&first_placeid=111111&net_env=wifi&placeid=111111&user_id=2128266915&sn=0EA6F3060B7C36858715BA94D7F1444503A42665&umidtoken=YM1Sef33W8YDAEgTUPWLjZ1V&msv=8.0.0&brand=Apple&imei=C30089D3ED33D73403DF461D55358A1AFECB494F&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=iOS&ver=210301&mod=UnknowniPad&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=01EC6ABD-BBBC-439F-A144-FC512C00DD58"},{"key":"shuqisybody","val":"appVer=4.3.6.0&imei=C30089D3ED33D73403DF461D55358A1AFECB494F&isNewUser=1&params=%7B%22resources%22%3A%7B%22ShuqiVipEntry%22%3A%7B%7D%2C%22personalCardConfig%22%3A%7B%7D%7D%7D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=5bd1c1edb4a3f13e9f3d74985df8b994&sn=0EA6F3060B7C36858715BA94D7F1444503A42665&soft_id=21&timestamp=1624078678&user_id=2128266915&ver=210301"},{"key":"shuqispbody","val":"_public=skinId%3D999%26idfa%3D01EC6ABD-BBBC-439F-A144-FC512C00DD58%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26umidtoken%3DYM1Sef33W8YDAEgTUPWLjZ1V%26user_id%3D2128266915%26sn%3D0EA6F3060B7C36858715BA94D7F1444503A42665%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3DC30089D3ED33D73403DF461D55358A1AFECB494F%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYM1Sef33W8YDAEgTUPWLjZ1V%26utype%3Dpre_vip%26sdk%3D13.2&deliveryId=525&key=sq_app_ad&miniWua=HHnB_ViLMn89DFyXWlVcNxD9VLCGXCVzUrqZCQpP1uysUS3k%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=626&sign=C2233E2F25DE8E1A0B849CDEA53D2536&timestamp=1624078729&userId=2128266915&user_id=2128266915&wua=HIVW_vuUx1ACwfoWQtKwZ%2BZLJuTyx4wACsO9QzSzBZDaKcJszNK%2ByC1F9ADHs%2BQq4kPmnuiKJoGpdhUeP2E16cTu7wybfJezxxzI/OsPhLM/Z5IHGtvfal5NgtqFXKv8KbZW/dU2ci7BhzCp5A6F3BAQsUI9vOk2%2BOI0Y%2BVN9ZMAz5M1raN5MFEadwgmqhlPXrJd4rLjHv6yQsPYufGylGKcThhZnV3BHUhy%2BqKA9o%2BoD%2BiY%3D"},{"key":"shuqiscbody","val":""},{"key":"shuqiydbody","val":""},{"key":"shuqiqdbody","val":"clientTimestamp=1624078706&position=501&userId=2128266915&signInType=1&wua=HIVW_0efhUilliPg2dJFaVjr7eWijzZnouvUQScoAC6kPu53%2BEbzRpaWMtcgmDI0tNJGZUjzOx2budjgjOgpSjXWptiADZ2KAZlTfmiOa9XixhTcO0DK6AxmpNbwU5Flm1SKJcTdGDKQruO5TvJwXJfpNK1bJK2DHtAnINKvtlBDRWX%2Fy4XAD%2BgxQLH8EgMFTkgInDhomWqIBKvnMl0wNfU7HYCqsU4DQra%2Feh3IZ1YzEntg%3D&ua=&miniWua=HHnB_DtieW2AzTXyb8Qq54o7dsmsdo6m1JYzAhukssFaTMN8%3D&umidtoken=YM1Sef33W8YDAEgTUPWLjZ1V&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&sign=cad20d8ceff46d1e42fe7baa068c66ba&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.2%26utdid%3DYM1Sef33W8YDAEgTUPWLjZ1V%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2128266915%26sn%3D0EA6F3060B7C36858715BA94D7F1444503A42665%26umidtoken%3DYM1Sef33W8YDAEgTUPWLjZ1V%26msv%3D8.0.0%26brand%3DApple%26imei%3DC30089D3ED33D73403DF461D55358A1AFECB494F%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D01EC6ABD-BBBC-439F-A144-FC512C00DD58"},{"key":"shuqirwbody","val":"serviceWorkerOn=1&stopPullRefresh=1&from=ShuqiTab&upf=20368&sdk=13.2&utdid=YM1Sef33W8YDAEgTUPWLjZ1V&ustatus=0&first_placeid=111111&net_env=wifi&placeid=111111&user_id=2128266915&sn=0EA6F3060B7C36858715BA94D7F1444503A42665&umidtoken=YM1Sef33W8YDAEgTUPWLjZ1V&msv=8.0.0&brand=Apple&imei=C30089D3ED33D73403DF461D55358A1AFECB494F&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&session=&skinColor=23B383&platform=1&ver=210301&mod=UnknowniPad&statusBarHeight=44.000000&skinVersion=1&wh=1242x2688&soft_id=21&utype=pre_vip&skinId=999&idfa=01EC6ABD-BBBC-439F-A144-FC512C00DD58&params=%7B%22resources%22%3A%7B%22ShuqiBsDailyTask%22%3A%7B%7D%7D%7D&userId=2128266915&placeId=111111&timestamp=1624078735&sqSv=1.0&sign=e1a0a69ce7869a98395503b63d24814f&key=sq_h5_gateway&_public="},{"key":"shuqifxbody","val":""},{"key":"shuqisprwurl","val":"https://ocean.shuqireader.com/api/ad/adserver/v1/api/getAdInfo?appVer=4.3.6.0&placeId=111111&platform=iOS&requestSrc=h5&resourceId=626&timestamp=1624078746&user_id=2128266915&sqSv=1.0&sign=c3557c8cfa57863a145302eb704fa6ed&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.2%26utdid%3DYM1Sef33W8YDAEgTUPWLjZ1V%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2128266915%26sn%3D0EA6F3060B7C36858715BA94D7F1444503A42665%26umidtoken%3DYM1Sef33W8YDAEgTUPWLjZ1V%26msv%3D8.0.0%26brand%3DApple%26imei%3DC30089D3ED33D73403DF461D55358A1AFECB494F%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D01EC6ABD-BBBC-439F-A144-FC512C00DD58"},{"key":"shuqijlbody","val":"requestSrc=h5&userId=2128266915&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624078735&sqSv=1.0&sign=f440bc834d9a08432d3da86107567082&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.2%26utdid%3DYM1Sef33W8YDAEgTUPWLjZ1V%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2128266915%26sn%3D0EA6F3060B7C36858715BA94D7F1444503A42665%26umidtoken%3DYM1Sef33W8YDAEgTUPWLjZ1V%26msv%3D8.0.0%26brand%3DApple%26imei%3DC30089D3ED33D73403DF461D55358A1AFECB494F%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D01EC6ABD-BBBC-439F-A144-FC512C00DD58"},{"key":"shuqisqjlbody","val":"src=&userId=2128266915&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624078710&sqSv=1.0&sign=93c1c27060e8223ca5988ecd18cf2bbe&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.2%26utdid%3DYM1Sef33W8YDAEgTUPWLjZ1V%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2128266915%26sn%3D0EA6F3060B7C36858715BA94D7F1444503A42665%26umidtoken%3DYM1Sef33W8YDAEgTUPWLjZ1V%26msv%3D8.0.0%26brand%3DApple%26imei%3DC30089D3ED33D73403DF461D55358A1AFECB494F%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D01EC6ABD-BBBC-439F-A144-FC512C00DD58"},{"key":"shuqicjyurl","val":"https://ocean.shuqireader.com/api/activity/activity/v1/lottery/info?timestamp=1624078747&userId=2128266915&activityId=311&sqSv=1.0&sign=0ca414955a4c094cbb96e800451f32ce&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.2%26utdid%3DYM1Sef33W8YDAEgTUPWLjZ1V%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2128266915%26sn%3D0EA6F3060B7C36858715BA94D7F1444503A42665%26umidtoken%3DYM1Sef33W8YDAEgTUPWLjZ1V%26msv%3D8.0.0%26brand%3DApple%26imei%3DC30089D3ED33D73403DF461D55358A1AFECB494F%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D01EC6ABD-BBBC-439F-A144-FC512C00DD58"},{"key":"shuqicjcsbody","val":"_public=skinId%3D999%26idfa%3D01EC6ABD-BBBC-439F-A144-FC512C00DD58%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26umidtoken%3DYM1Sef33W8YDAEgTUPWLjZ1V%26user_id%3D2128266915%26sn%3D0EA6F3060B7C36858715BA94D7F1444503A42665%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3DC30089D3ED33D73403DF461D55358A1AFECB494F%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYM1Sef33W8YDAEgTUPWLjZ1V%26utype%3Dpre_vip%26sdk%3D13.2&deliveryId=711&key=sq_app_ad&miniWua=HHnB_gE5kIu0Ir1ZCN2Fnpn2AMufgLtwgPJQPMJnH6zYvoTI%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=703&sign=DCAAF713ED1710AFF837ACD46E243373&timestamp=1624078718&userId=2128266915&user_id=2128266915&wua=HIVW_UaatTafildAwlwZ0x3NFP0Z9PakYXWzVPUcFu3Z8whl4rmeI0ccSwAofBUIhrUQ1xN0wHCGx6CVLoiaaxS91sPt1k9VIeMwjk8vEYZ3anxjf0HHTlplk%2BjpwBJoXRffBQMJOvbsostrLedhuCmYxzIb0PI%2BP/u8OP2UKlV0UVO9eS6JP/qEankrveY0GqEjf7wGDqnOyzPGMfq1qXG2OD0SwuNm/aRPcMMP4b6q5EJo%3D"},{"key":"shuqicjbody","val":"wua=HIVW_dlFO2IoSn4Jtm2qRgM7CJYlF7q3KJDuZJ3FiuB0GCsy818%2Btdk5WSq4pBW4%2Bp7LnUBfU%2BivhH7PjVXVtSUCTNUtbwFYslQ2VGZlYa3mcMvAtzttUfcv6a8kBKgvBrrUuAM%2BV23dvfc5EzVIsmorcs1cNG%2BtZWHC10TnCi8ZpseoAzsbrf15Go3%2Fgw5LFb3NS%2FXbdPBAXG0U0d8rSIVI9KkKIPzG0yJgcLRsK%2BNrYc1Y%3D&ua=&userId=2128266915&umidtoken=YM1Sef33W8YDAEgTUPWLjZ1V&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&asac=2A20C07RJ9F51AOEFSNHDR&timestamp=1624078724&activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&sqSv=1.0&sign=67d096acccd0cf063040f5a013f8afd8&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.2%26utdid%3DYM1Sef33W8YDAEgTUPWLjZ1V%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2128266915%26sn%3D0EA6F3060B7C36858715BA94D7F1444503A42665%26umidtoken%3DYM1Sef33W8YDAEgTUPWLjZ1V%26msv%3D8.0.0%26brand%3DApple%26imei%3DC30089D3ED33D73403DF461D55358A1AFECB494F%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D01EC6ABD-BBBC-439F-A144-FC512C00DD58"},{"key":"shuqijsspbody","val":""},{"key":"shuqijsydurl","val":""},{"key":"shuqijsydbody","val":""},{"key":"shuqijsqdbody","val":""},{"key":"shuqijsqdspyurl","val":""},{"key":"shuqijsqdspbody","val":""},{"key":"shuqijsrwbody","val":""},{"key":"shuqijsfxbody","val":""},{"key":"shuqijsbookurl","val":""},{"key":"shuqijsbookbody","val":""},{"key":"shuqijssprwurl","val":""},{"key":"shuqiuserurl2","val":"https://ocean.shuqireader.com/api/jaccount/accountapi/v1/sapi/account/getBindinfo?userId=2129465426&sqSv=1.0&timestamp=1624078803&sign=7dedeb0e1f02eda6ad260a564f37f80f&key=sq_h5_gateway"},{"key":"shuqisyurl2","val":"https://render.shuqireader.com/load/resource?sdk=13.2.2&utdid=YM15pvr6RdgDAGb%2Fs6Xq%2F3wK&ustatus=0&first_placeid=111111&net_env=4g&placeid=111111&user_id=2129465426&sn=64D38B026CE9A195245679A6186DFBA3157C6644&umidtoken=YM15pvr6RdgDAGb%2Fs6Xq%2F3wK&msv=8.0.0&brand=Apple&imei=10122C97D3A52BB09C70E4748C420DBD57F8D481&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=iOS&ver=210301&mod=UnknowniPad&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=1D9DC912-200D-47D4-A3A7-6BB98C1AE110"},{"key":"shuqisybody2","val":"appVer=4.3.6.0&imei=10122C97D3A52BB09C70E4748C420DBD57F8D481&isNewUser=1&params=%7B%22resources%22%3A%7B%22ShuqiVipEntry%22%3A%7B%7D%2C%22personalCardConfig%22%3A%7B%7D%7D%7D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=9851e3a3df9dfdf4f2dc17c7d69d9ebd&sn=64D38B026CE9A195245679A6186DFBA3157C6644&soft_id=21&timestamp=1624078763&user_id=2129465426&ver=210301"},{"key":"shuqispbody2","val":"_public=skinId%3D999%26idfa%3D1D9DC912-200D-47D4-A3A7-6BB98C1AE110%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26umidtoken%3DYM15pvr6RdgDAGb/s6Xq/3wK%26user_id%3D2129465426%26sn%3D64D38B026CE9A195245679A6186DFBA3157C6644%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D10122C97D3A52BB09C70E4748C420DBD57F8D481%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYM15pvr6RdgDAGb/s6Xq/3wK%26utype%3Dpre_vip%26sdk%3D13.2.2&deliveryId=525&key=sq_app_ad&miniWua=HHnB_h1/k8RjHI2fJZ/DrDlUaz6ugCqmyIT9DNYXhcMcQI74%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=626&sign=E66533CC0D6C6BD6E75C836F8A3BDD36&timestamp=1624078778&userId=2129465426&user_id=2129465426&wua=HIVW_mp%2BPwq9mkoWdCBuiQ2Lct9nhF5ffhuDHU6eV/MOwE1k%2BcfWSyagtANHnc3/KbKm3lVxPxY8bMVbKH83NUzk75LPkJ1iTOoxV2fKoymJAhO8FDofBpP9ZPgPRaoPvksQ/ee2J1yOLAQf6tyv3cDmOLi0nUOVythcCtNFLtmcUCXwB0JfNhvZ6i2x6kPnoh%2BFShmR8ye9SAHdpQdXARXAbLDFNUyRIdGdBgZ/QHKTH438%3D"},{"key":"shuqiscbody2","val":""},{"key":"shuqiydbody2","val":""},{"key":"shuqiqdbody2","val":"clientTimestamp=1624078771&position=501&userId=2129465426&signInType=1&wua=HIVW_kE1hKsiuLGV%2F9uOClisb%2BBvzdCN%2FE3yOqed0GwQyjQYUoQvzOpbqqnclUG9tXGH%2Fzy4LJ5s%2FZmdP2cio3YZFDApYwRAohNCwbITBfpeF2f%2Bf6Gd1xHns%2Ffr8EMsaBJm%2FGPGYi5G6FwWeSJ%2BAHIa%2BS4APaTqcqQu6MIL9dMleWP19C%2FCKeeyv4vtpYtNqsRZtUeJowlSMHoCT1Gqq5taDtM54%2BbPHk2IbcpzHh0w5dRQ%3D&ua=&miniWua=HHnB_T7dIsodPEAScZxM3gCYIbZTOknkGJYbbEORHGzxS2zo%3D&umidtoken=YM15pvr6RdgDAGb%2Fs6Xq%2F3wK&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&sign=4c9a9cb2502d51418047b29e7bd1cad3&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.2.2%26utdid%3DYM15pvr6RdgDAGb%252Fs6Xq%252F3wK%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2129465426%26sn%3D64D38B026CE9A195245679A6186DFBA3157C6644%26umidtoken%3DYM15pvr6RdgDAGb%252Fs6Xq%252F3wK%26msv%3D8.0.0%26brand%3DApple%26imei%3D10122C97D3A52BB09C70E4748C420DBD57F8D481%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D1D9DC912-200D-47D4-A3A7-6BB98C1AE110"},{"key":"shuqirwbody2","val":"serviceWorkerOn=1&stopPullRefresh=1&from=ShuqiTab&upf=20368&sdk=13.2.2&utdid=YM15pvr6RdgDAGb%2Fs6Xq%2F3wK&ustatus=0&first_placeid=111111&net_env=4g&placeid=111111&user_id=2129465426&sn=64D38B026CE9A195245679A6186DFBA3157C6644&umidtoken=YM15pvr6RdgDAGb%2Fs6Xq%2F3wK&msv=8.0.0&brand=Apple&imei=10122C97D3A52BB09C70E4748C420DBD57F8D481&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=1&ver=210301&mod=UnknowniPad&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=1D9DC912-200D-47D4-A3A7-6BB98C1AE110&params=%7B%22resources%22%3A%7B%22ShuqiBsDailyTask%22%3A%7B%7D%7D%7D&userId=2129465426&placeId=111111&timestamp=1624078786&sqSv=1.0&sign=f1b7ecc853e6f95b0c354fc91141cad8&key=sq_h5_gateway&_public="},{"key":"shuqifxbody2","val":""},{"key":"shuqisprwurl2","val":"https://ocean.shuqireader.com/api/ad/adserver/v1/api/getAdInfo?appVer=4.3.6.0&placeId=111111&platform=iOS&requestSrc=h5&resourceId=626&timestamp=1624078802&user_id=2129465426&sqSv=1.0&sign=7866a66de0d5822efc1d82c610d3beb4&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.2.2%26utdid%3DYM15pvr6RdgDAGb%252Fs6Xq%252F3wK%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2129465426%26sn%3D64D38B026CE9A195245679A6186DFBA3157C6644%26umidtoken%3DYM15pvr6RdgDAGb%252Fs6Xq%252F3wK%26msv%3D8.0.0%26brand%3DApple%26imei%3D10122C97D3A52BB09C70E4748C420DBD57F8D481%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D1D9DC912-200D-47D4-A3A7-6BB98C1AE110"},{"key":"shuqijlbody2","val":"requestSrc=h5&userId=2129465426&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624078786&sqSv=1.0&sign=edd086d3edbb37f45f38c77423b3ffae&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.2.2%26utdid%3DYM15pvr6RdgDAGb%252Fs6Xq%252F3wK%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2129465426%26sn%3D64D38B026CE9A195245679A6186DFBA3157C6644%26umidtoken%3DYM15pvr6RdgDAGb%252Fs6Xq%252F3wK%26msv%3D8.0.0%26brand%3DApple%26imei%3D10122C97D3A52BB09C70E4748C420DBD57F8D481%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D1D9DC912-200D-47D4-A3A7-6BB98C1AE110"},{"key":"shuqisqjlbody2","val":"src=&userId=2129465426&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624078775&sqSv=1.0&sign=14dbcc7d9f0a039acc3180865dd7916f&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.2.2%26utdid%3DYM15pvr6RdgDAGb%252Fs6Xq%252F3wK%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2129465426%26sn%3D64D38B026CE9A195245679A6186DFBA3157C6644%26umidtoken%3DYM15pvr6RdgDAGb%252Fs6Xq%252F3wK%26msv%3D8.0.0%26brand%3DApple%26imei%3D10122C97D3A52BB09C70E4748C420DBD57F8D481%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D1D9DC912-200D-47D4-A3A7-6BB98C1AE110"},{"key":"shuqicjyurl2","val":"https://ocean.shuqireader.com/api/activity/activity/v1/lottery/info?timestamp=1624078804&userId=2129465426&activityId=311&sqSv=1.0&sign=74d03052c06d7772d9eb8f16e12afb70&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.2.2%26utdid%3DYM15pvr6RdgDAGb%252Fs6Xq%252F3wK%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2129465426%26sn%3D64D38B026CE9A195245679A6186DFBA3157C6644%26umidtoken%3DYM15pvr6RdgDAGb%252Fs6Xq%252F3wK%26msv%3D8.0.0%26brand%3DApple%26imei%3D10122C97D3A52BB09C70E4748C420DBD57F8D481%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D1D9DC912-200D-47D4-A3A7-6BB98C1AE110"},{"key":"shuqicjcsbody2","val":"_public=skinId%3D999%26idfa%3D1D9DC912-200D-47D4-A3A7-6BB98C1AE110%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26umidtoken%3DYM15pvr6RdgDAGb/s6Xq/3wK%26user_id%3D2129465426%26sn%3D64D38B026CE9A195245679A6186DFBA3157C6644%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D10122C97D3A52BB09C70E4748C420DBD57F8D481%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYM15pvr6RdgDAGb/s6Xq/3wK%26utype%3Dpre_vip%26sdk%3D13.2.2&deliveryId=711&key=sq_app_ad&miniWua=HHnB_ooOHjfpOIYrxsAI2mfyN9ETgZw6/vz4X/dWIuI5RgSg%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=703&sign=C02AE015FC9714EE904C7E01F7CE2992&timestamp=1624078791&userId=2129465426&user_id=2129465426&wua=HIVW_RbhBHIJOlezFpc8Udy5Zle6oCbOwe7YkNMgdAIs7WUOsGjbRC9ux4d9otOqHJAig2SpPC4KKS0PVkLUpaHwr%2B8%2BJ8jCSVU%2BihTlqPoqdWby5mdmw1IPkv8ACkKho9riGfX6GTPc4YWuPbNmWmeY8a%2BKdMdXnFEJvN6zGhW4nrQmysEkWkSSbwhfhWvmKoL3WPK013nl%2BKVmuVdwpGkeL%2BKHW7gqQ26fi/JX%2B9p059pU%3D"},{"key":"shuqicjbody2","val":"wua=HIVW_5sTQv3pb0lhPy72XUpBvbIVZPZmIno32xu7eyH2XaGqh51K2SWoCihrtDvw2B%2Fsr5AEpqG2WEm3qTrTL%2FYWnQI1irU%2BMxryivTukTJKwZbKYwUhmY%2BuMYopuYkNaWkCHFaucJ4u3OUl18aRMkX%2FVH7UG0djv7ZZZyY81hDEjOsr0KZDRxtcKRUWVItYexxbuIPY1oKNdS9rmo5FIbFYEOydUWqPfSwyQBslNfpxl40E%3D&ua=&userId=2129465426&umidtoken=YM15pvr6RdgDAGb%2Fs6Xq%2F3wK&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&asac=2A20C07RJ9F51AOEFSNHDR&timestamp=1624078793&activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&sqSv=1.0&sign=4d1f78a53efbb3a9775a71f0348dcfd4&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.2.2%26utdid%3DYM15pvr6RdgDAGb%252Fs6Xq%252F3wK%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2129465426%26sn%3D64D38B026CE9A195245679A6186DFBA3157C6644%26umidtoken%3DYM15pvr6RdgDAGb%252Fs6Xq%252F3wK%26msv%3D8.0.0%26brand%3DApple%26imei%3D10122C97D3A52BB09C70E4748C420DBD57F8D481%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D1D9DC912-200D-47D4-A3A7-6BB98C1AE110"},{"key":"shuqijsspbody2","val":""},{"key":"shuqijsydurl2","val":""},{"key":"shuqijsydbody2","val":""},{"key":"shuqijsqdbody2","val":""},{"key":"shuqijsqdspyurl2","val":""},{"key":"shuqijsqdspbody2","val":""},{"key":"shuqijsrwbody2","val":""},{"key":"shuqijsfxbody2","val":""},{"key":"shuqijsbookurl2","val":""},{"key":"shuqijsbookbody2","val":""},{"key":"shuqijssprwurl2","val":""},{"key":"shuqiuserurl3","val":"https://ocean.shuqireader.com/api/jaccount/accountapi/v1/sapi/account/getBindinfo?userId=2131290075&sqSv=1.0&timestamp=1624078868&sign=525cfb2f59fdef9d7ff8df282b8e1a64&key=sq_h5_gateway"},{"key":"shuqisyurl3","val":"https://render.shuqireader.com/load/resource?sdk=13.1&utdid=YM1Sm59d19YDAPSP8nJInoSr&ustatus=0&first_placeid=111111&net_env=3g&placeid=111111&user_id=2131290075&sn=1346C358080996253A566AC3C253DA079D90E06B&umidtoken=YM1Sm59d19YDAPSP8nJInoSr&msv=8.0.0&brand=Apple&imei=FD3F8E4E8348DF24FD487EA1151CD96E40AB2D2F&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=iOS&ver=210301&mod=UnknowniPod&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=030E8A70-9455-4EB1-BAAB-3AF7DBD71DA1"},{"key":"shuqisybody3","val":"appVer=4.3.6.0&imei=FD3F8E4E8348DF24FD487EA1151CD96E40AB2D2F&isNewUser=1&params=%7B%22resources%22%3A%7B%22ShuqiVipEntry%22%3A%7B%7D%2C%22personalCardConfig%22%3A%7B%7D%7D%7D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=a79f66839ec84575297528e680f60a34&sn=1346C358080996253A566AC3C253DA079D90E06B&soft_id=21&timestamp=1624078818&user_id=2131290075&ver=210301"},{"key":"shuqispbody3","val":"_public=skinId%3D999%26idfa%3D030E8A70-9455-4EB1-BAAB-3AF7DBD71DA1%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26umidtoken%3DYM1Sm59d19YDAPSP8nJInoSr%26user_id%3D2131290075%26sn%3D1346C358080996253A566AC3C253DA079D90E06B%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3DFD3F8E4E8348DF24FD487EA1151CD96E40AB2D2F%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DUnknowniPod%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYM1Sm59d19YDAPSP8nJInoSr%26utype%3Dpre_vip%26sdk%3D13.1&deliveryId=525&key=sq_app_ad&miniWua=HHnB_Jppjx9coilchbCA%2B%2BMUwQ3WFwjf5v%2BhYiXhwEXO9F7M%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=626&sign=161FA2D9CF2779AE13C01CFD4CA1AF1C&timestamp=1624078835&userId=2131290075&user_id=2131290075&wua=HIVW_XHr6YExBGPJclSjl8QrV1Me7fhsFxAkPhVbeeauChMmw2pHpO5MjBcOXp7cqmUIjSetEgvxWzb3a0MEag/im/4kr6xkZquzw40fSNk5DV9Nn1zS6jXlreqesdQdis3yh8xXt8valGEMW5kwi1Kj9P7VlcKYz6gxCi4CvrCbc7qSNQr2doksCUo0WzukzRH8hCSOGQsUT6iWvK5VRarmsLvbHs3lV1E2nT0pUqYAIlj8%3D"},{"key":"shuqiscbody3","val":""},{"key":"shuqiydbody3","val":""},{"key":"shuqiqdbody3","val":"clientTimestamp=1624078828&position=501&userId=2131290075&signInType=1&wua=HIVW_oDsQCbF0iARBdvHmsLls0d6ZhvslWMtuUn9eARbCWPWNOuQzCHFfYfTIFiXCcv4JcrcZVIkrVGwJkB9QYKbMYsJkqmGJUkr%2BJ5aMkykkYeMtJSaMf7IvJmK4UEf4xSYl4ob6zIuGGSZARMH8r0mMBYY3eInpF4UtsDr%2FerxjrDKfWrvcaAombMRnmo4nS2PWN2gCAq3Hm4pw6Ez%2FFNIGvE%2BdgUxE6Zipw8KydMhW8mQ%3D&ua=&miniWua=HHnB_3VgVPmLBi0tfdKw8pyxpggwBWu7%2BO%2B5oWvIVGiw6i8w%3D&umidtoken=YM1Sm59d19YDAPSP8nJInoSr&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&sign=0782ca33fd33e7f7cc60d9227ee9e1b2&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.1%26utdid%3DYM1Sm59d19YDAPSP8nJInoSr%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2131290075%26sn%3D1346C358080996253A566AC3C253DA079D90E06B%26umidtoken%3DYM1Sm59d19YDAPSP8nJInoSr%26msv%3D8.0.0%26brand%3DApple%26imei%3DFD3F8E4E8348DF24FD487EA1151CD96E40AB2D2F%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPod%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D030E8A70-9455-4EB1-BAAB-3AF7DBD71DA1"},{"key":"shuqirwbody3","val":"serviceWorkerOn=1&stopPullRefresh=1&from=ShuqiTab&upf=20368&sdk=13.1&utdid=YM1Sm59d19YDAPSP8nJInoSr&ustatus=0&first_placeid=111111&net_env=3g&placeid=111111&user_id=2131290075&sn=1346C358080996253A566AC3C253DA079D90E06B&umidtoken=YM1Sm59d19YDAPSP8nJInoSr&msv=8.0.0&brand=Apple&imei=FD3F8E4E8348DF24FD487EA1151CD96E40AB2D2F&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=1&ver=210301&mod=UnknowniPod&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=030E8A70-9455-4EB1-BAAB-3AF7DBD71DA1&params=%7B%22resources%22%3A%7B%22ShuqiBsDailyTask%22%3A%7B%7D%7D%7D&userId=2131290075&placeId=111111&timestamp=1624078839&sqSv=1.0&sign=21b1bcc7cdccdb02bfbe6c86b93d1c3e&key=sq_h5_gateway&_public="},{"key":"shuqifxbody3","val":""},{"key":"shuqisprwurl3","val":"https://ocean.shuqireader.com/api/ad/adserver/v1/api/getAdInfo?appVer=4.3.6.0&placeId=111111&platform=iOS&requestSrc=h5&resourceId=626&timestamp=1624078867&user_id=2131290075&sqSv=1.0&sign=9950e31415e08beae3c45361479d0813&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.1%26utdid%3DYM1Sm59d19YDAPSP8nJInoSr%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2131290075%26sn%3D1346C358080996253A566AC3C253DA079D90E06B%26umidtoken%3DYM1Sm59d19YDAPSP8nJInoSr%26msv%3D8.0.0%26brand%3DApple%26imei%3DFD3F8E4E8348DF24FD487EA1151CD96E40AB2D2F%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPod%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D030E8A70-9455-4EB1-BAAB-3AF7DBD71DA1"},{"key":"shuqijlbody3","val":"requestSrc=h5&userId=2131290075&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624078839&sqSv=1.0&sign=27d3905927019eedd9e4aa4599b57e1e&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.1%26utdid%3DYM1Sm59d19YDAPSP8nJInoSr%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2131290075%26sn%3D1346C358080996253A566AC3C253DA079D90E06B%26umidtoken%3DYM1Sm59d19YDAPSP8nJInoSr%26msv%3D8.0.0%26brand%3DApple%26imei%3DFD3F8E4E8348DF24FD487EA1151CD96E40AB2D2F%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPod%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D030E8A70-9455-4EB1-BAAB-3AF7DBD71DA1"},{"key":"shuqisqjlbody3","val":"src=&userId=2131290075&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624078832&sqSv=1.0&sign=4283ba96b4098e8caa09267c6e2bc03c&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.1%26utdid%3DYM1Sm59d19YDAPSP8nJInoSr%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2131290075%26sn%3D1346C358080996253A566AC3C253DA079D90E06B%26umidtoken%3DYM1Sm59d19YDAPSP8nJInoSr%26msv%3D8.0.0%26brand%3DApple%26imei%3DFD3F8E4E8348DF24FD487EA1151CD96E40AB2D2F%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPod%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D030E8A70-9455-4EB1-BAAB-3AF7DBD71DA1"},{"key":"shuqicjyurl3","val":"https://ocean.shuqireader.com/api/activity/activity/v1/lottery/info?timestamp=1624078869&userId=2131290075&activityId=311&sqSv=1.0&sign=4d9c4786b2a89fd956a3e8e9b302dbdb&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.1%26utdid%3DYM1Sm59d19YDAPSP8nJInoSr%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2131290075%26sn%3D1346C358080996253A566AC3C253DA079D90E06B%26umidtoken%3DYM1Sm59d19YDAPSP8nJInoSr%26msv%3D8.0.0%26brand%3DApple%26imei%3DFD3F8E4E8348DF24FD487EA1151CD96E40AB2D2F%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPod%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D030E8A70-9455-4EB1-BAAB-3AF7DBD71DA1"},{"key":"shuqicjcsbody3","val":"_public=skinId%3D999%26idfa%3D030E8A70-9455-4EB1-BAAB-3AF7DBD71DA1%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26umidtoken%3DYM1Sm59d19YDAPSP8nJInoSr%26user_id%3D2131290075%26sn%3D1346C358080996253A566AC3C253DA079D90E06B%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3DFD3F8E4E8348DF24FD487EA1151CD96E40AB2D2F%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DUnknowniPod%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYM1Sm59d19YDAPSP8nJInoSr%26utype%3Dpre_vip%26sdk%3D13.1&deliveryId=711&key=sq_app_ad&miniWua=HHnB_Mu3cb0bDLmCQ4IqR5dP671jkCGx0b8ki9MVNUOBIpgE%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=703&sign=BC5C7EC1CDF24B156EA7653BE0E01605&timestamp=1624078849&userId=2131290075&user_id=2131290075&wua=HIVW_qYPmk81pR3Ywj8AHazMezV3NVgLFAoWcRrtn/XqYYSi1QrtJHKwjy/5aharJ2IkKAYgD8fhynrhVsR7Zlr0Njxeb%2B3cUrbAMDSQJ3ZzSIUGgnKMElmpG%2BteC0Q99SNPf8LfAXVd2xvXRUS1jFidiRuu99JkfbteeyMXv7F7jZwAcADR9hNCqecA4to2B2zPR/41Lp9RICbhTnciRjuQRzJKEyT0s5ehQNqvS2ZbwOK8%3D"},{"key":"shuqicjbody3","val":"wua=HIVW_7PwLLilFu6T7Htxw4tLfgfm3LZC28dzC6nUp1XiuIGg%2BktILfS4CWe8GZEfZpJjCgQnXfnNdumhJeTXda0q%2B92BncouH8AsBjagAK%2FUfEG2vpjHnSxxee1y%2FCAV3%2BIoMrmzkt5R3xuX%2BxFYHVfHMqyUJ%2BUqFH1aQClk9lY7nhSPZ05Ow8ILhkb3dNkWz0H6haW5%2Fwjei1t9A4rF7CpXiOyiYbWtQ4BYIUYnbkWg8JJw%3D&ua=&userId=2131290075&umidtoken=YM1Sm59d19YDAPSP8nJInoSr&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&asac=2A20C07RJ9F51AOEFSNHDR&timestamp=1624078854&activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&sqSv=1.0&sign=a49e5a76ed18cec9197117ddae8a1ca4&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.1%26utdid%3DYM1Sm59d19YDAPSP8nJInoSr%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2131290075%26sn%3D1346C358080996253A566AC3C253DA079D90E06B%26umidtoken%3DYM1Sm59d19YDAPSP8nJInoSr%26msv%3D8.0.0%26brand%3DApple%26imei%3DFD3F8E4E8348DF24FD487EA1151CD96E40AB2D2F%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPod%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D030E8A70-9455-4EB1-BAAB-3AF7DBD71DA1"},{"key":"shuqijsspbody3","val":""},{"key":"shuqijsydurl3","val":""},{"key":"shuqijsydbody3","val":""},{"key":"shuqijsqdbody3","val":""},{"key":"shuqijsqdspyurl3","val":""},{"key":"shuqijsqdspbody3","val":""},{"key":"shuqijsrwbody3","val":""},{"key":"shuqijsfxbody3","val":""},{"key":"shuqijsbookurl3","val":""},{"key":"shuqijsbookbody3","val":""},{"key":"shuqijssprwurl3","val":""},{"key":"shuqiuserurl4","val":"https://ocean.shuqireader.com/api/jaccount/accountapi/v1/sapi/account/getBindinfo?userId=2129663570&sqSv=1.0&timestamp=1624078933&sign=4f2e65b30718e194ac9c58584797b0af&key=sq_h5_gateway"},{"key":"shuqisyurl4","val":"https://render.shuqireader.com/load/resource?sdk=13.2.3&utdid=YM1SoslGBmoDAI7%2BupHPrtok&ustatus=0&first_placeid=111111&net_env=4g&placeid=111111&user_id=2129663570&sn=784BD06DCE952FCB97F405A72F5C7B2AFEB805BE&umidtoken=YM1SoslGBmoDAI7%2BupHPrtok&msv=8.0.0&brand=Apple&imei=72A40E57808DE8D651513649E54963098B29633A&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=iOS&ver=210301&mod=iPhone11&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=9D59B366-E226-4A69-9335-DB3722B236FE"},{"key":"shuqisybody4","val":"appVer=4.3.6.0&imei=72A40E57808DE8D651513649E54963098B29633A&isNewUser=1&params=%7B%22resources%22%3A%7B%22ShuqiVipEntry%22%3A%7B%7D%2C%22personalCardConfig%22%3A%7B%7D%7D%7D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=fd8906fc46dfb4eb835c98e5fe91aaa5&sn=784BD06DCE952FCB97F405A72F5C7B2AFEB805BE&soft_id=21&timestamp=1624078894&user_id=2129663570&ver=210301"},{"key":"shuqispbody4","val":"_public=skinId%3D999%26idfa%3D9D59B366-E226-4A69-9335-DB3722B236FE%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26umidtoken%3DYM1SoslGBmoDAI7%2BupHPrtok%26user_id%3D2129663570%26sn%3D784BD06DCE952FCB97F405A72F5C7B2AFEB805BE%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D72A40E57808DE8D651513649E54963098B29633A%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhone11%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYM1SoslGBmoDAI7%2BupHPrtok%26utype%3Dpre_vip%26sdk%3D13.2.3&deliveryId=525&key=sq_app_ad&miniWua=HHnB_qV4WZ/ylh1I%2B/S%2BnrngNnqT%2BCO89pc5MwWN2iLEtTio%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=626&sign=E9DE130A894B1030D75EFBF07811B658&timestamp=1624078909&userId=2129663570&user_id=2129663570&wua=HIVW_E%2BdxhKfl7a5ftXp72ayRDPyOBKY66rmQfVt6pKgp70W6kCzd36bwCVGc6W4wmOt9CibtN9l3guTBz99Xa5JO0JYsaVmwKJGp/xxZJBMNpu3G%2BhQ7qYi1aqRX3XyFl/5DkPNrglqNpFUuzqG/gVtYh1iSVfj3Pce/mWpMnr6WPCoS7/XubHU8ocBSswO2W9PspS0RnAj2tgjDm1bLMZpwDUNNKr9Cl70qE6yj%2B7jqgqM%3D"},{"key":"shuqiscbody4","val":""},{"key":"shuqiydbody4","val":""},{"key":"shuqiqdbody4","val":"clientTimestamp=1624078901&position=501&userId=2129663570&signInType=1&wua=HIVW_2JJSxdOqChwGTkt8UU%2Fq7uKYxMxUM25JHl2StqGHIOUAsM0T9lv1R0MrhuuBRNvgEaxRZvB55KJFWBTZK9BwC%2FZCW%2BVwpzOWsQPisOQ4%2BIjKFA%2B1fM%2F16teeVY45wYXI2DN0avDPmcwDxlLwf3vZVSz%2Fj6DVfB3nwhMxGSy%2FhsMTgvmZto5jnI223YtTqjMXuf4S7uo2inod8I4JsMHdcZZ5yP5Q9v9yqIDK3rJg5RI%3D&ua=&miniWua=HHnB_ke3C3bAiyt%2BISXHUAontHQW%2BIF03jUOh9Z0E3PvcCGc%3D&umidtoken=YM1SoslGBmoDAI7%2BupHPrtok&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&sign=361855df8416c32e2f3566a85d63020e&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.2.3%26utdid%3DYM1SoslGBmoDAI7%252BupHPrtok%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2129663570%26sn%3D784BD06DCE952FCB97F405A72F5C7B2AFEB805BE%26umidtoken%3DYM1SoslGBmoDAI7%252BupHPrtok%26msv%3D8.0.0%26brand%3DApple%26imei%3D72A40E57808DE8D651513649E54963098B29633A%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone11%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D9D59B366-E226-4A69-9335-DB3722B236FE"},{"key":"shuqirwbody4","val":"serviceWorkerOn=1&stopPullRefresh=1&from=ShuqiTab&upf=20368&sdk=13.2.3&utdid=YM1SoslGBmoDAI7%2BupHPrtok&ustatus=0&first_placeid=111111&net_env=4g&placeid=111111&user_id=2129663570&sn=784BD06DCE952FCB97F405A72F5C7B2AFEB805BE&umidtoken=YM1SoslGBmoDAI7%2BupHPrtok&msv=8.0.0&brand=Apple&imei=72A40E57808DE8D651513649E54963098B29633A&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=1&ver=210301&mod=iPhone11&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=9D59B366-E226-4A69-9335-DB3722B236FE&params=%7B%22resources%22%3A%7B%22ShuqiBsDailyTask%22%3A%7B%7D%7D%7D&userId=2129663570&placeId=111111&timestamp=1624078912&sqSv=1.0&sign=34c8457e8b986701fde524a11f67633c&key=sq_h5_gateway&_public="},{"key":"shuqifxbody4","val":""},{"key":"shuqisprwurl4","val":"https://ocean.shuqireader.com/api/ad/adserver/v1/api/getAdInfo?appVer=4.3.6.0&placeId=111111&platform=iOS&requestSrc=h5&resourceId=626&timestamp=1624078933&user_id=2129663570&sqSv=1.0&sign=e8b2ce011299ea09d5b4df2e19ed2fa2&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.2.3%26utdid%3DYM1SoslGBmoDAI7%252BupHPrtok%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2129663570%26sn%3D784BD06DCE952FCB97F405A72F5C7B2AFEB805BE%26umidtoken%3DYM1SoslGBmoDAI7%252BupHPrtok%26msv%3D8.0.0%26brand%3DApple%26imei%3D72A40E57808DE8D651513649E54963098B29633A%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone11%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D9D59B366-E226-4A69-9335-DB3722B236FE"},{"key":"shuqijlbody4","val":"requestSrc=h5&userId=2129663570&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624078912&sqSv=1.0&sign=ef912772237f5f6ac4f243440a79032a&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.2.3%26utdid%3DYM1SoslGBmoDAI7%252BupHPrtok%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2129663570%26sn%3D784BD06DCE952FCB97F405A72F5C7B2AFEB805BE%26umidtoken%3DYM1SoslGBmoDAI7%252BupHPrtok%26msv%3D8.0.0%26brand%3DApple%26imei%3D72A40E57808DE8D651513649E54963098B29633A%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone11%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D9D59B366-E226-4A69-9335-DB3722B236FE"},{"key":"shuqisqjlbody4","val":"src=&userId=2129663570&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624078906&sqSv=1.0&sign=486093a48f539acf45a012ffdd60c1f8&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.2.3%26utdid%3DYM1SoslGBmoDAI7%252BupHPrtok%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2129663570%26sn%3D784BD06DCE952FCB97F405A72F5C7B2AFEB805BE%26umidtoken%3DYM1SoslGBmoDAI7%252BupHPrtok%26msv%3D8.0.0%26brand%3DApple%26imei%3D72A40E57808DE8D651513649E54963098B29633A%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone11%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D9D59B366-E226-4A69-9335-DB3722B236FE"},{"key":"shuqicjyurl4","val":"https://ocean.shuqireader.com/api/activity/activity/v1/lottery/info?timestamp=1624078935&userId=2129663570&activityId=311&sqSv=1.0&sign=0b2d96d0eb23dc5da808a97f647f2879&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.2.3%26utdid%3DYM1SoslGBmoDAI7%252BupHPrtok%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2129663570%26sn%3D784BD06DCE952FCB97F405A72F5C7B2AFEB805BE%26umidtoken%3DYM1SoslGBmoDAI7%252BupHPrtok%26msv%3D8.0.0%26brand%3DApple%26imei%3D72A40E57808DE8D651513649E54963098B29633A%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone11%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D9D59B366-E226-4A69-9335-DB3722B236FE"},{"key":"shuqicjcsbody4","val":"_public=skinId%3D999%26idfa%3D9D59B366-E226-4A69-9335-DB3722B236FE%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26umidtoken%3DYM1SoslGBmoDAI7%2BupHPrtok%26user_id%3D2129663570%26sn%3D784BD06DCE952FCB97F405A72F5C7B2AFEB805BE%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D72A40E57808DE8D651513649E54963098B29633A%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhone11%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYM1SoslGBmoDAI7%2BupHPrtok%26utype%3Dpre_vip%26sdk%3D13.2.3&deliveryId=711&key=sq_app_ad&miniWua=HHnB_FZlRrdfbFzPkcvO5QziRWp%2Bx2Es7taW%2B5PC/bhUs9OQ%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=703&sign=D014233CF33F42D84EC8AA1459440F0C&timestamp=1624078920&userId=2129663570&user_id=2129663570&wua=HIVW_L0YbABFs3YvtBcCfzqq/1i3BNKvCNGiKkvjwbOIh49KcYB43ev5pJ/P2V6XI%2BRv4AwXWNCUbGKaHaVCHEuNjabDcBLsvCA7ozTYT8KtNXSSjeJpcuXQJYYf0gnF97QOi8RdwvF/Oid4MoS/%2BTUSVnkDjRxYKSwR3U%2Bse8hKHLxiMX%2BJtvQsfhoBn7hPJE0UOvl97zBFYFp7vNItJ7ErUaBMgh/3jjw5/Eld5iQqXxLA%3D"},{"key":"shuqicjbody4","val":"wua=HIVW_2rrLTItzYXwCSooQP6l7u2KLs9yxr7W3XSqH3E0lebRtEdusCNQqHIcvh0ZakWj6KLGswyku4KtFNvvnTRaAuZ0Da4grDp%2FchtThLhq2F3%2Bjfhd4F5Ygi%2BAHrdVD4CUVxVx%2FZQ1Tk7hQbK5vIhNxs2Bozy03KVQLL9Nv3%2FZ76DS3SBUGjTSnjwg4z%2F7zDbCdD%2FMCzic3q1j%2F10UVmXoe%2FUiPSJJeb2QZ7SHKHnYtkqo%3D&ua=&userId=2129663570&umidtoken=YM1SoslGBmoDAI7%2BupHPrtok&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&asac=2A20C07RJ9F51AOEFSNHDR&timestamp=1624078924&activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&sqSv=1.0&sign=7d793ceb40c65b9312737ee682c4d1fe&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.2.3%26utdid%3DYM1SoslGBmoDAI7%252BupHPrtok%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2129663570%26sn%3D784BD06DCE952FCB97F405A72F5C7B2AFEB805BE%26umidtoken%3DYM1SoslGBmoDAI7%252BupHPrtok%26msv%3D8.0.0%26brand%3DApple%26imei%3D72A40E57808DE8D651513649E54963098B29633A%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone11%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D9D59B366-E226-4A69-9335-DB3722B236FE"},{"key":"shuqijsspbody4","val":""},{"key":"shuqijsydurl4","val":""},{"key":"shuqijsydbody4","val":""},{"key":"shuqijsqdbody4","val":""},{"key":"shuqijsqdspyurl4","val":""},{"key":"shuqijsqdspbody4","val":""},{"key":"shuqijsrwbody4","val":""},{"key":"shuqijsfxbody4","val":""},{"key":"shuqijsbookurl4","val":""},{"key":"shuqijsbookbody4","val":""},{"key":"shuqijssprwurl4","val":""},{"key":"shuqiuserurl5","val":"https://ocean.shuqireader.com/api/jaccount/accountapi/v1/sapi/account/getBindinfo?userId=2128566776&sqSv=1.0&timestamp=1624078989&sign=5733d0534fb80b69995556d9befacf32&key=sq_h5_gateway"},{"key":"shuqisyurl5","val":"https://render.shuqireader.com/load/resource?sdk=13.2.3&utdid=YM1Sq7Hc19wDAIT1vSP1k0TC&ustatus=0&first_placeid=111111&net_env=3g&placeid=111111&user_id=2128566776&sn=0CC3F810E60194A6D5C622A2D34710D3C9C92AAF&umidtoken=YM1Sq7Hc19wDAIT1vSP1k0TC&msv=8.0.0&brand=Apple&imei=B5790355C5C7DF8775CACDFD1F06BC7A9B65948D&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=iOS&ver=210301&mod=iPhone6plus&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=6DA8624E-FA5A-46D7-8086-0D407A84E15B"},{"key":"shuqisybody5","val":"appVer=4.3.6.0&imei=B5790355C5C7DF8775CACDFD1F06BC7A9B65948D&isNewUser=1&params=%7B%22resources%22%3A%7B%22ShuqiVipEntry%22%3A%7B%7D%2C%22personalCardConfig%22%3A%7B%7D%7D%7D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=e2bda21c6b9eacc6a48f20b994a903ca&sn=0CC3F810E60194A6D5C622A2D34710D3C9C92AAF&soft_id=21&timestamp=1624078947&user_id=2128566776&ver=210301"},{"key":"shuqispbody5","val":"_public=skinId%3D999%26idfa%3D6DA8624E-FA5A-46D7-8086-0D407A84E15B%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26umidtoken%3DYM1Sq7Hc19wDAIT1vSP1k0TC%26user_id%3D2128566776%26sn%3D0CC3F810E60194A6D5C622A2D34710D3C9C92AAF%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3DB5790355C5C7DF8775CACDFD1F06BC7A9B65948D%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhone6plus%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYM1Sq7Hc19wDAIT1vSP1k0TC%26utype%3Dpre_vip%26sdk%3D13.2.3&deliveryId=525&key=sq_app_ad&miniWua=HHnB_c9LCI9L9I31jATmd7wz%2BGBhhpqoh06pHBiJZZEMiHK4%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=626&sign=4024C946F3B1EC6DC320F156FDBC001A&timestamp=1624078966&userId=2128566776&user_id=2128566776&wua=HIVW_P9POQf2xeKxIOjayTkxRgITjryNHlBwSj5FGX/Fya75vUraIH4QtVCKjx0XD93JMG0c30wGwSTDGdKqdX7VQKFRiidNHUjkJ0iw%2B/qqJL7V0kTyo81q5FyeB9TTiW4b/Jqgmll/VUvc0B%2BXO8iJqQ26CAQn6e5iAGi6g22PZkJgoZmFe1iYgfqoqaj5P7QiG719iCskPREqmYizb/1hAVCjyjJMziQjNMEPyFTV6QD0%3D"},{"key":"shuqiscbody5","val":""},{"key":"shuqiydbody5","val":""},{"key":"shuqiqdbody5","val":"clientTimestamp=1624078958&position=501&userId=2128566776&signInType=1&wua=HIVW_2DLnknlgYfrGXWzJHqVE9UCG2zoWPalcjTmwbr%2BJu8JldQ52Kr6eTxRC8F4nmSdFcZMp2liZRJudP%2FLqa0vQd2ztQwXMWDFVdcyYSgS50EWidEA5e9QcJPFgcKimx9Gekly65jSKwwOBRTKy9%2FjdHyDoJCGZVDGXWYTexAbukOZ3zX4U8AUapH0TcaFavatMV2HWB8us1julAlDYN%2F9smqxt1ClsVm1omNEpYDLoQA8%3D&ua=&miniWua=HHnB_YyaqxRjoFREWIOh5y8LgQh3KSAv5opYiGJ30BIwVJB8%3D&umidtoken=YM1Sq7Hc19wDAIT1vSP1k0TC&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&sign=34cc2ab5f8b47ce2e856fca04d9d4510&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.2.3%26utdid%3DYM1Sq7Hc19wDAIT1vSP1k0TC%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2128566776%26sn%3D0CC3F810E60194A6D5C622A2D34710D3C9C92AAF%26umidtoken%3DYM1Sq7Hc19wDAIT1vSP1k0TC%26msv%3D8.0.0%26brand%3DApple%26imei%3DB5790355C5C7DF8775CACDFD1F06BC7A9B65948D%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone6plus%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D6DA8624E-FA5A-46D7-8086-0D407A84E15B"},{"key":"shuqirwbody5","val":"serviceWorkerOn=1&stopPullRefresh=1&from=ShuqiTab&upf=20368&sdk=13.2.3&utdid=YM1Sq7Hc19wDAIT1vSP1k0TC&ustatus=0&first_placeid=111111&net_env=3g&placeid=111111&user_id=2128566776&sn=0CC3F810E60194A6D5C622A2D34710D3C9C92AAF&umidtoken=YM1Sq7Hc19wDAIT1vSP1k0TC&msv=8.0.0&brand=Apple&imei=B5790355C5C7DF8775CACDFD1F06BC7A9B65948D&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=1&ver=210301&mod=iPhone6plus&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=6DA8624E-FA5A-46D7-8086-0D407A84E15B&params=%7B%22resources%22%3A%7B%22ShuqiBsDailyTask%22%3A%7B%7D%7D%7D&userId=2128566776&placeId=111111&timestamp=1624078972&sqSv=1.0&sign=63cb76a52963b8b86a9a24c5116ae96e&key=sq_h5_gateway&_public="},{"key":"shuqifxbody5","val":""},{"key":"shuqisprwurl5","val":"https://ocean.shuqireader.com/api/ad/adserver/v1/api/getAdInfo?appVer=4.3.6.0&placeId=111111&platform=iOS&requestSrc=h5&resourceId=626&timestamp=1624078990&user_id=2128566776&sqSv=1.0&sign=59a427eae8fa7a78009170631d05df1b&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.2.3%26utdid%3DYM1Sq7Hc19wDAIT1vSP1k0TC%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2128566776%26sn%3D0CC3F810E60194A6D5C622A2D34710D3C9C92AAF%26umidtoken%3DYM1Sq7Hc19wDAIT1vSP1k0TC%26msv%3D8.0.0%26brand%3DApple%26imei%3DB5790355C5C7DF8775CACDFD1F06BC7A9B65948D%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone6plus%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D6DA8624E-FA5A-46D7-8086-0D407A84E15B"},{"key":"shuqijlbody5","val":"requestSrc=h5&userId=2128566776&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624078972&sqSv=1.0&sign=2bf2447ced4b066f7ffc84beb0d8eb6e&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.2.3%26utdid%3DYM1Sq7Hc19wDAIT1vSP1k0TC%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2128566776%26sn%3D0CC3F810E60194A6D5C622A2D34710D3C9C92AAF%26umidtoken%3DYM1Sq7Hc19wDAIT1vSP1k0TC%26msv%3D8.0.0%26brand%3DApple%26imei%3DB5790355C5C7DF8775CACDFD1F06BC7A9B65948D%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone6plus%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D6DA8624E-FA5A-46D7-8086-0D407A84E15B"},{"key":"shuqisqjlbody5","val":"src=&userId=2128566776&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624078963&sqSv=1.0&sign=5dad6adb9a200b1bdeae53492a5072c2&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.2.3%26utdid%3DYM1Sq7Hc19wDAIT1vSP1k0TC%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2128566776%26sn%3D0CC3F810E60194A6D5C622A2D34710D3C9C92AAF%26umidtoken%3DYM1Sq7Hc19wDAIT1vSP1k0TC%26msv%3D8.0.0%26brand%3DApple%26imei%3DB5790355C5C7DF8775CACDFD1F06BC7A9B65948D%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone6plus%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D6DA8624E-FA5A-46D7-8086-0D407A84E15B"},{"key":"shuqicjyurl5","val":"https://ocean.shuqireader.com/api/activity/activity/v1/lottery/info?timestamp=1624078993&userId=2128566776&activityId=311&sqSv=1.0&sign=ca29f86928f2206888e45a0a313d37f1&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.2.3%26utdid%3DYM1Sq7Hc19wDAIT1vSP1k0TC%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2128566776%26sn%3D0CC3F810E60194A6D5C622A2D34710D3C9C92AAF%26umidtoken%3DYM1Sq7Hc19wDAIT1vSP1k0TC%26msv%3D8.0.0%26brand%3DApple%26imei%3DB5790355C5C7DF8775CACDFD1F06BC7A9B65948D%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone6plus%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D6DA8624E-FA5A-46D7-8086-0D407A84E15B"},{"key":"shuqicjcsbody5","val":"_public=skinId%3D999%26idfa%3D6DA8624E-FA5A-46D7-8086-0D407A84E15B%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26umidtoken%3DYM1Sq7Hc19wDAIT1vSP1k0TC%26user_id%3D2128566776%26sn%3D0CC3F810E60194A6D5C622A2D34710D3C9C92AAF%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3DB5790355C5C7DF8775CACDFD1F06BC7A9B65948D%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhone6plus%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYM1Sq7Hc19wDAIT1vSP1k0TC%26utype%3Dpre_vip%26sdk%3D13.2.3&deliveryId=711&key=sq_app_ad&miniWua=HHnB_GvffOQG6%2BneIpVRiyMBR4CwUUOsG5BPNGmbHTngKvYg%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=703&sign=618BAF6322EF897251266E4F20E26793&timestamp=1624078977&userId=2128566776&user_id=2128566776&wua=HIVW_gRRo1nqlGHir3s3AYYZFWpCIKFWwPyuoJP1bB%2B0MmC4pHVUIZbLGOI2n6aIqFCiJhzXwA09mxyz3phqmcqJ9pTlpI1nWIzZLHa3xaGVbZLanru67CUeQReaD5%2B/kjPBS47E4HR56S8X/cfOozmKMBUIeXb3Wu0hPMDiZe1zNh0x6wmx%2BQIY8cqqSW/s2Num/XAAqPGuDhxG9qQ4EHt11hanVAd53MPIvxoWNZYBwOoo%3D"},{"key":"shuqicjbody5","val":"wua=HIVW_K5yoRX6QS0QEQXPXDFn2QvHL4psh2FFQk4zLJucZMkIdxL2S4OVORhEvMlbG8DHJoQ%2FGMWF6IrqJooAiapW7b2BWQhdS2Vjzh7MwduHAE%2FTkakM2nI1c2vSSccdXsFl6iD9RGuuNyYGwHNk7WQ9tejBBW7uqv661NpRsDPBsqBDjuBeb%2F1XG1CSTwUT8VbHAKQGUY7clB2avYBXk0pQkiCfqhAU0vh1voMcTIy7OfVg%3D&ua=&userId=2128566776&umidtoken=YM1Sq7Hc19wDAIT1vSP1k0TC&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&asac=2A20C07RJ9F51AOEFSNHDR&timestamp=1624078980&activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&sqSv=1.0&sign=77ef9656b059baf1dc0d962160516fd4&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.2.3%26utdid%3DYM1Sq7Hc19wDAIT1vSP1k0TC%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2128566776%26sn%3D0CC3F810E60194A6D5C622A2D34710D3C9C92AAF%26umidtoken%3DYM1Sq7Hc19wDAIT1vSP1k0TC%26msv%3D8.0.0%26brand%3DApple%26imei%3DB5790355C5C7DF8775CACDFD1F06BC7A9B65948D%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone6plus%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D6DA8624E-FA5A-46D7-8086-0D407A84E15B"},{"key":"shuqijsspbody5","val":""},{"key":"shuqijsydurl5","val":""},{"key":"shuqijsydbody5","val":""},{"key":"shuqijsqdbody5","val":""},{"key":"shuqijsqdspyurl5","val":""},{"key":"shuqijsqdspbody5","val":""},{"key":"shuqijsrwbody5","val":""},{"key":"shuqijsfxbody5","val":""},{"key":"shuqijsbookurl5","val":""},{"key":"shuqijsbookbody5","val":""},{"key":"shuqijssprwurl5","val":""},{"key":"shuqiuserurl6","val":"https://ocean.shuqireader.com/api/jaccount/accountapi/v1/sapi/account/getBindinfo?userId=2131886225&sqSv=1.0&timestamp=1624079048&sign=afe1086b3b6b24c8d23cfdd5180a29bb&key=sq_h5_gateway"},{"key":"shuqisyurl6","val":"https://render.shuqireader.com/load/resource?sdk=13.3&utdid=YM1Ss9jeJYgDAAKDFIXv85pj&ustatus=0&first_placeid=111111&net_env=wifi&placeid=111111&user_id=2131886225&sn=FF13016D1DAEE44A54D0B3A4C9E5A3231C4F214A&umidtoken=YM1Ss9jeJYgDAAKDFIXv85pj&msv=8.0.0&brand=Apple&imei=0C5E119A6F6667F29657A4326865D2B7F5102BA4&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=iOS&ver=210301&mod=UnknowniPad&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=FFD7785C-D614-4B5D-8EE7-934D977C85AE"},{"key":"shuqisybody6","val":"appVer=4.3.6.0&imei=0C5E119A6F6667F29657A4326865D2B7F5102BA4&isNewUser=1&params=%7B%22resources%22%3A%7B%22ShuqiVipEntry%22%3A%7B%7D%2C%22personalCardConfig%22%3A%7B%7D%7D%7D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=f73a94935e43d46ade3583eec71716bf&sn=FF13016D1DAEE44A54D0B3A4C9E5A3231C4F214A&soft_id=21&timestamp=1624079004&user_id=2131886225&ver=210301"},{"key":"shuqispbody6","val":"_public=skinId%3D999%26idfa%3DFFD7785C-D614-4B5D-8EE7-934D977C85AE%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26umidtoken%3DYM1Ss9jeJYgDAAKDFIXv85pj%26user_id%3D2131886225%26sn%3DFF13016D1DAEE44A54D0B3A4C9E5A3231C4F214A%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D0C5E119A6F6667F29657A4326865D2B7F5102BA4%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYM1Ss9jeJYgDAAKDFIXv85pj%26utype%3Dpre_vip%26sdk%3D13.3&deliveryId=525&key=sq_app_ad&miniWua=HHnB_YGW629cYChqcKJ07DAJRKj%2B0hgMgKHhTX19qhPUsG/U%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=626&sign=3087343F098A760FB81D841B249A4CC3&timestamp=1624079025&userId=2131886225&user_id=2131886225&wua=HIVW_stww1X1izSiZhHK1d5va7TEolHLsW3Pxo2XpxXuo8m7V5YNr6BSgL0rKThrJxaNu9zDu5WicvwZpcyxe%2BTPY4CWYnuDQl96ehG2w1tmFhhrE9J7cn6W0vO8Vjbh2ft%2BBFz2HtcDk7cX98bwKv6AmuaeXnWEsD9hl2OPjbWBrmzdqVPW5O%2BwWV%2Bmvu5WFEMLpyEXqOsh53c/Qa38J9%2BwcR56ouY4MTodTGtgdp3WBnP8%3D"},{"key":"shuqiscbody6","val":""},{"key":"shuqiydbody6","val":""},{"key":"shuqiqdbody6","val":"clientTimestamp=1624079017&position=501&userId=2131886225&signInType=1&wua=HIVW_o%2BoqnHsVEseLSFyAY88db%2FtOFFzu542VK7%2BWCHLrdfIVSjPhzKVoNxznIfnCkVyTOWN5iOH%2B8m3R9tU0Ja%2B5wj9Mqlh%2BuKpPy7I46J6DXhOKK5%2BmvrdlYjEiLJ2uAd%2FFPN88ceHDzKz6QokkfnnU5cEBszDzAkv%2FKzvC2kZEu3jQ9NViqEpLDKvlq3az%2B0Bhc4yvMRWAu21YVdcUpzQ9bJe6m3p%2Bi0rWdoxKNMaEAVw%3D&ua=&miniWua=HHnB_8eXv7YNLel6qzJY6UuC%2BUhCzRuNb81DLKo1kAjGBYZA%3D&umidtoken=YM1Ss9jeJYgDAAKDFIXv85pj&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&sign=18863fb83d9d30d712e8c996c878c251&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.3%26utdid%3DYM1Ss9jeJYgDAAKDFIXv85pj%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2131886225%26sn%3DFF13016D1DAEE44A54D0B3A4C9E5A3231C4F214A%26umidtoken%3DYM1Ss9jeJYgDAAKDFIXv85pj%26msv%3D8.0.0%26brand%3DApple%26imei%3D0C5E119A6F6667F29657A4326865D2B7F5102BA4%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DFFD7785C-D614-4B5D-8EE7-934D977C85AE"},{"key":"shuqirwbody6","val":"serviceWorkerOn=1&stopPullRefresh=1&from=ShuqiTab&upf=20368&sdk=13.3&utdid=YM1Ss9jeJYgDAAKDFIXv85pj&ustatus=0&first_placeid=111111&net_env=wifi&placeid=111111&user_id=2131886225&sn=FF13016D1DAEE44A54D0B3A4C9E5A3231C4F214A&umidtoken=YM1Ss9jeJYgDAAKDFIXv85pj&msv=8.0.0&brand=Apple&imei=0C5E119A6F6667F29657A4326865D2B7F5102BA4&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&session=&skinColor=23B383&platform=1&ver=210301&mod=UnknowniPad&statusBarHeight=44.000000&skinVersion=1&wh=1242x2688&soft_id=21&utype=pre_vip&skinId=999&idfa=FFD7785C-D614-4B5D-8EE7-934D977C85AE&params=%7B%22resources%22%3A%7B%22ShuqiBsDailyTask%22%3A%7B%7D%7D%7D&userId=2131886225&placeId=111111&timestamp=1624079028&sqSv=1.0&sign=e95933a838a71070a347cf0475ec3556&key=sq_h5_gateway&_public="},{"key":"shuqifxbody6","val":""},{"key":"shuqisprwurl6","val":"https://ocean.shuqireader.com/api/ad/adserver/v1/api/getAdInfo?appVer=4.3.6.0&placeId=111111&platform=iOS&requestSrc=h5&resourceId=626&timestamp=1624079049&user_id=2131886225&sqSv=1.0&sign=6b82b97f1fa838e168aa7952182e1f5f&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.3%26utdid%3DYM1Ss9jeJYgDAAKDFIXv85pj%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2131886225%26sn%3DFF13016D1DAEE44A54D0B3A4C9E5A3231C4F214A%26umidtoken%3DYM1Ss9jeJYgDAAKDFIXv85pj%26msv%3D8.0.0%26brand%3DApple%26imei%3D0C5E119A6F6667F29657A4326865D2B7F5102BA4%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DFFD7785C-D614-4B5D-8EE7-934D977C85AE"},{"key":"shuqijlbody6","val":"requestSrc=h5&userId=2131886225&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624079028&sqSv=1.0&sign=8245085517d2d8d4523a7148fa09808d&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.3%26utdid%3DYM1Ss9jeJYgDAAKDFIXv85pj%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2131886225%26sn%3DFF13016D1DAEE44A54D0B3A4C9E5A3231C4F214A%26umidtoken%3DYM1Ss9jeJYgDAAKDFIXv85pj%26msv%3D8.0.0%26brand%3DApple%26imei%3D0C5E119A6F6667F29657A4326865D2B7F5102BA4%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DFFD7785C-D614-4B5D-8EE7-934D977C85AE"},{"key":"shuqisqjlbody6","val":"src=&userId=2131886225&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624079022&sqSv=1.0&sign=ff6cd663f9ff937eb523cb930545b794&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.3%26utdid%3DYM1Ss9jeJYgDAAKDFIXv85pj%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2131886225%26sn%3DFF13016D1DAEE44A54D0B3A4C9E5A3231C4F214A%26umidtoken%3DYM1Ss9jeJYgDAAKDFIXv85pj%26msv%3D8.0.0%26brand%3DApple%26imei%3D0C5E119A6F6667F29657A4326865D2B7F5102BA4%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DFFD7785C-D614-4B5D-8EE7-934D977C85AE"},{"key":"shuqicjyurl6","val":"https://ocean.shuqireader.com/api/activity/activity/v1/lottery/info?timestamp=1624079052&userId=2131886225&activityId=311&sqSv=1.0&sign=4eaef3bb9dace1f0561aaa94521479be&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.3%26utdid%3DYM1Ss9jeJYgDAAKDFIXv85pj%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2131886225%26sn%3DFF13016D1DAEE44A54D0B3A4C9E5A3231C4F214A%26umidtoken%3DYM1Ss9jeJYgDAAKDFIXv85pj%26msv%3D8.0.0%26brand%3DApple%26imei%3D0C5E119A6F6667F29657A4326865D2B7F5102BA4%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DFFD7785C-D614-4B5D-8EE7-934D977C85AE"},{"key":"shuqicjcsbody6","val":"_public=skinId%3D999%26idfa%3DFFD7785C-D614-4B5D-8EE7-934D977C85AE%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26umidtoken%3DYM1Ss9jeJYgDAAKDFIXv85pj%26user_id%3D2131886225%26sn%3DFF13016D1DAEE44A54D0B3A4C9E5A3231C4F214A%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D0C5E119A6F6667F29657A4326865D2B7F5102BA4%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYM1Ss9jeJYgDAAKDFIXv85pj%26utype%3Dpre_vip%26sdk%3D13.3&deliveryId=711&key=sq_app_ad&miniWua=HHnB_4dJuIQXlfcufCjKKe0j1bq2qVL%2BLKKhavOmiBloUYj0%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=703&sign=825008B264F541AE9678F0713436E07C&timestamp=1624079035&userId=2131886225&user_id=2131886225&wua=HIVW_4AZUI44VZQ%2BO0uv/m3TShTv8fXeHsWDy/2zhy0rfi0rFLcfdTgJaXYzDqFF2%2BKzslgplXVEHcKY%2BzwYln3jUxRIF0uph7OK02vRwZCE5KQ08CLmVPUcV%2B0C0Clztds5I9%2BZyh0e7pRkLxk/HvBEogoFt9urN5YqCA4BvAZm1VXcDlsu7W8AIU/bILHhnKeF43bVioKwWOUhySVEhvF7/bNN37Gw%2B94Ls2EBpwGbPk5E%3D"},{"key":"shuqicjbody6","val":"wua=HIVW_Vqv%2FlvapVbPjNVDUTppIJ2U0oBT2dzPWjxOUl%2Bjo3IEU4S%2FV7rNmwqIAy0j1HEi9uXpWziE1XqmULccbEg8ouqSuWH6pkqJuYroPeVe%2Fl%2BpcWWdxeFiZag3mbt8SPVXnkic3um%2FDx%2Bvzx%2FUoYbYJnfLEefXvHgEDXhhAkmHWHHCho07gb2c2j2dgmhvVvmCyztUFTGL8XOa3SocIfROqKnpW8%2Bt7u0LK0%2F0ezAIZvZI%3D&ua=&userId=2131886225&umidtoken=YM1Ss9jeJYgDAAKDFIXv85pj&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&asac=2A20C07RJ9F51AOEFSNHDR&timestamp=1624079039&activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&sqSv=1.0&sign=68759a567d3e5031a2936edaf0b79611&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.3%26utdid%3DYM1Ss9jeJYgDAAKDFIXv85pj%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2131886225%26sn%3DFF13016D1DAEE44A54D0B3A4C9E5A3231C4F214A%26umidtoken%3DYM1Ss9jeJYgDAAKDFIXv85pj%26msv%3D8.0.0%26brand%3DApple%26imei%3D0C5E119A6F6667F29657A4326865D2B7F5102BA4%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DFFD7785C-D614-4B5D-8EE7-934D977C85AE"},{"key":"shuqijsspbody6","val":""},{"key":"shuqijsydurl6","val":""},{"key":"shuqijsydbody6","val":""},{"key":"shuqijsqdbody6","val":""},{"key":"shuqijsqdspyurl6","val":""},{"key":"shuqijsqdspbody6","val":""},{"key":"shuqijsrwbody6","val":""},{"key":"shuqijsfxbody6","val":""},{"key":"shuqijsbookurl6","val":""},{"key":"shuqijsbookbody6","val":""},{"key":"shuqijssprwurl6","val":""},{"key":"shuqiuserurl7","val":"https://ocean.shuqireader.com/api/jaccount/accountapi/v1/sapi/account/getBindinfo?userId=2132184513&sqSv=1.0&timestamp=1624079112&sign=38f823860cb31694ca36f44da6a8b4c8&key=sq_h5_gateway"},{"key":"shuqisyurl7","val":"https://render.shuqireader.com/load/resource?sdk=13.1.3&utdid=YM1SxiJzJooDAG95sB7KoWJN&ustatus=0&first_placeid=111111&net_env=wifi&placeid=111111&user_id=2132184513&sn=E550CB6F44D441859DD405520C42F890E616AB9C&umidtoken=YM1SxiJzJooDAG95sB7KoWJN&msv=8.0.0&brand=Apple&imei=69DD4ABA0F9B92473D6720213CC43607F5633DA7&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=iOS&ver=210301&mod=UnknowniPad&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=67942FC1-408C-404B-888D-DFA67785FFDC"},{"key":"shuqisybody7","val":"appVer=4.3.6.0&imei=69DD4ABA0F9B92473D6720213CC43607F5633DA7&isNewUser=1&params=%7B%22resources%22%3A%7B%22ShuqiVipEntry%22%3A%7B%7D%2C%22personalCardConfig%22%3A%7B%7D%7D%7D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=ff05311ceb0a435e69b00372d169e66b&sn=E550CB6F44D441859DD405520C42F890E616AB9C&soft_id=21&timestamp=1624079065&user_id=2132184513&ver=210301"},{"key":"shuqispbody7","val":"_public=skinId%3D999%26idfa%3D67942FC1-408C-404B-888D-DFA67785FFDC%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26umidtoken%3DYM1SxiJzJooDAG95sB7KoWJN%26user_id%3D2132184513%26sn%3DE550CB6F44D441859DD405520C42F890E616AB9C%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D69DD4ABA0F9B92473D6720213CC43607F5633DA7%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYM1SxiJzJooDAG95sB7KoWJN%26utype%3Dpre_vip%26sdk%3D13.1.3&deliveryId=525&key=sq_app_ad&miniWua=HHnB_3ceJmoFailbkQyHWn7FiSz15KsduELEVkQaNWei1IRU%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=626&sign=04EF6CA780AAEC2AB791F6F1A09031D8&timestamp=1624079086&userId=2132184513&user_id=2132184513&wua=HIVW_Dw/VFQA7rhedNyTDZrgZ4xoj/tT9oXxiIvaLZVDZnrYn5ScII2ZDm3%2B1z8ONceLAbz0h9Bqvq9wuuYkeD3mjPQakLUZsC0U0VMOHBMoQe9RiW4sdnuij4O4aGIHNU9FV02RMvnYueCZcYII4L9oBoyTnAga573ndFlT9/IzOLCb9jGPFCZVqosz9nr1PQhrekkTyteOAJFtlxjYmELKF3dAii1j1eq06u%2Bxt8Zi9v0o%3D"},{"key":"shuqiscbody7","val":""},{"key":"shuqiydbody7","val":""},{"key":"shuqiqdbody7","val":"clientTimestamp=1624079077&position=501&userId=2132184513&signInType=1&wua=HIVW_SHNX%2BuwsZcOho1w25tUlH0o9i%2B1tm6LLP0VuCX2k7ouqbI%2BZYxDgOcYjTo5Cyj80XHlYyaCRhTtt5UscV4yZvUt4yg3sWZ1KTnUi2ultOPoDsvqjExl4uKPm5yrV0%2BdungVSiwyCP2geAiea9ib93wuCEUPm0iIgyky0y6UhDurnrJeOolKt9TCIz69olpSlgcDowAp0GgYFd3OVZM0gFBcWEZGZMQ89lPxJ%2FDKi0Ks%3D&ua=&miniWua=HHnB_27T58mkrjHfVNjlPAkAWr%2FcbJVSJM1OKOfe1ikTNPdA%3D&umidtoken=YM1SxiJzJooDAG95sB7KoWJN&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&sign=c1dde708609beccd7f712f4c54acd833&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.1.3%26utdid%3DYM1SxiJzJooDAG95sB7KoWJN%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2132184513%26sn%3DE550CB6F44D441859DD405520C42F890E616AB9C%26umidtoken%3DYM1SxiJzJooDAG95sB7KoWJN%26msv%3D8.0.0%26brand%3DApple%26imei%3D69DD4ABA0F9B92473D6720213CC43607F5633DA7%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D67942FC1-408C-404B-888D-DFA67785FFDC"},{"key":"shuqirwbody7","val":"serviceWorkerOn=1&stopPullRefresh=1&from=ShuqiTab&upf=20368&sdk=13.1.3&utdid=YM1SxiJzJooDAG95sB7KoWJN&ustatus=0&first_placeid=111111&net_env=wifi&placeid=111111&user_id=2132184513&sn=E550CB6F44D441859DD405520C42F890E616AB9C&umidtoken=YM1SxiJzJooDAG95sB7KoWJN&msv=8.0.0&brand=Apple&imei=69DD4ABA0F9B92473D6720213CC43607F5633DA7&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=1&ver=210301&mod=UnknowniPad&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=67942FC1-408C-404B-888D-DFA67785FFDC&params=%7B%22resources%22%3A%7B%22ShuqiBsDailyTask%22%3A%7B%7D%7D%7D&userId=2132184513&placeId=111111&timestamp=1624079092&sqSv=1.0&sign=58b95e90628f1e4024473ac9676fa94c&key=sq_h5_gateway&_public="},{"key":"shuqifxbody7","val":""},{"key":"shuqisprwurl7","val":"https://ocean.shuqireader.com/api/ad/adserver/v1/api/getAdInfo?appVer=4.3.6.0&placeId=111111&platform=iOS&requestSrc=h5&resourceId=626&timestamp=1624079113&user_id=2132184513&sqSv=1.0&sign=56ff5fb0d3d46119b256303587b00daa&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.1.3%26utdid%3DYM1SxiJzJooDAG95sB7KoWJN%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2132184513%26sn%3DE550CB6F44D441859DD405520C42F890E616AB9C%26umidtoken%3DYM1SxiJzJooDAG95sB7KoWJN%26msv%3D8.0.0%26brand%3DApple%26imei%3D69DD4ABA0F9B92473D6720213CC43607F5633DA7%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D67942FC1-408C-404B-888D-DFA67785FFDC"},{"key":"shuqijlbody7","val":"requestSrc=h5&userId=2132184513&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624079092&sqSv=1.0&sign=1329b33e81fb23f09aba584020943fd1&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.1.3%26utdid%3DYM1SxiJzJooDAG95sB7KoWJN%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2132184513%26sn%3DE550CB6F44D441859DD405520C42F890E616AB9C%26umidtoken%3DYM1SxiJzJooDAG95sB7KoWJN%26msv%3D8.0.0%26brand%3DApple%26imei%3D69DD4ABA0F9B92473D6720213CC43607F5633DA7%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D67942FC1-408C-404B-888D-DFA67785FFDC"},{"key":"shuqisqjlbody7","val":"src=&userId=2132184513&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624079082&sqSv=1.0&sign=6eff81d09f91d7b7911471e30501caa7&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.1.3%26utdid%3DYM1SxiJzJooDAG95sB7KoWJN%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2132184513%26sn%3DE550CB6F44D441859DD405520C42F890E616AB9C%26umidtoken%3DYM1SxiJzJooDAG95sB7KoWJN%26msv%3D8.0.0%26brand%3DApple%26imei%3D69DD4ABA0F9B92473D6720213CC43607F5633DA7%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D67942FC1-408C-404B-888D-DFA67785FFDC"},{"key":"shuqicjyurl7","val":"https://ocean.shuqireader.com/api/activity/activity/v1/lottery/info?timestamp=1624079116&userId=2132184513&activityId=311&sqSv=1.0&sign=a36a865a9ea9512395d14847a119dd1c&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.1.3%26utdid%3DYM1SxiJzJooDAG95sB7KoWJN%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2132184513%26sn%3DE550CB6F44D441859DD405520C42F890E616AB9C%26umidtoken%3DYM1SxiJzJooDAG95sB7KoWJN%26msv%3D8.0.0%26brand%3DApple%26imei%3D69DD4ABA0F9B92473D6720213CC43607F5633DA7%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D67942FC1-408C-404B-888D-DFA67785FFDC"},{"key":"shuqicjcsbody7","val":"_public=skinId%3D999%26idfa%3D67942FC1-408C-404B-888D-DFA67785FFDC%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26umidtoken%3DYM1SxiJzJooDAG95sB7KoWJN%26user_id%3D2132184513%26sn%3DE550CB6F44D441859DD405520C42F890E616AB9C%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D69DD4ABA0F9B92473D6720213CC43607F5633DA7%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYM1SxiJzJooDAG95sB7KoWJN%26utype%3Dpre_vip%26sdk%3D13.1.3&deliveryId=711&key=sq_app_ad&miniWua=HHnB_2BlJJ0QnBpLbskP19zU2T1ueinj1Yek18bO%2Bw/nuRNk%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=703&sign=CFC935ADFEE32028CA6FC0FE6E4F51B1&timestamp=1624079097&userId=2132184513&user_id=2132184513&wua=HIVW_y0GNquN0JMENwOJZ51GF4MmxQPhPn6KdE8n8KCOYmQs5rkJ/6PsOl3ijdJikZ7ZgV034qwOewI%2BqYsFBTNMhyyqqz8OJG3foNn49%2BY7nAWoqb3cU9kSjRXNVvsDFF4sASElV3PXjus0Z1jWTJa3tcWJ%2BNO0l/Qc6Ugx1DMvKXh6q7F%2Brfl%2Bmvut0WvIIMCIf3jH%2Bze4bmt3qQyB4TEE1iOP4NtVOer989q1x8%2B0iCyE%3D"},{"key":"shuqicjbody7","val":"wua=HIVW_zvUVjCgSm4tX1e8Py8N%2FTHrQIrWjpMtARQHzxksbUpK%2B3ADaWCAJg0mabtb1y5ryDHuIEkw1UmK7gZEoeseBePK1pqsQsbb6bh6cpv%2FL6t4OhqhKh0B77zKtWEdmFVq1Qn1mUU1mqZhe5XeDc3PJ3UF6zZjtkgb6MdpR1%2FZ2bQjq0mIpHMva0p4X2jpjeBxNWgIpksSkRiU3bYBBTdjLYsE3qc7TqlFbuN5AfV1jawA%3D&ua=&userId=2132184513&umidtoken=YM1SxiJzJooDAG95sB7KoWJN&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&asac=2A20C07RJ9F51AOEFSNHDR&timestamp=1624079103&activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&sqSv=1.0&sign=5d8a2145c77242524b7e0791df033123&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.1.3%26utdid%3DYM1SxiJzJooDAG95sB7KoWJN%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2132184513%26sn%3DE550CB6F44D441859DD405520C42F890E616AB9C%26umidtoken%3DYM1SxiJzJooDAG95sB7KoWJN%26msv%3D8.0.0%26brand%3DApple%26imei%3D69DD4ABA0F9B92473D6720213CC43607F5633DA7%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D67942FC1-408C-404B-888D-DFA67785FFDC"},{"key":"shuqijsspbody7","val":""},{"key":"shuqijsydurl7","val":""},{"key":"shuqijsydbody7","val":""},{"key":"shuqijsqdbody7","val":""},{"key":"shuqijsqdspyurl7","val":""},{"key":"shuqijsqdspbody7","val":""},{"key":"shuqijsrwbody7","val":""},{"key":"shuqijsfxbody7","val":""},{"key":"shuqijsbookurl7","val":""},{"key":"shuqijsbookbody7","val":""},{"key":"shuqijssprwurl7","val":""},{"key":"shuqiuserurl8","val":"https://ocean.shuqireader.com/api/jaccount/accountapi/v1/sapi/account/getBindinfo?userId=2130558298&sqSv=1.0&timestamp=1624079173&sign=2902c57b70efcbb1a1c0e0b2088b4129&key=sq_h5_gateway"},{"key":"shuqisyurl8","val":"https://render.shuqireader.com/load/resource?sdk=13.1.1&utdid=YM1SzhyDaacDANlCeb%2BrlGiF&ustatus=0&first_placeid=111111&net_env=wifi&placeid=111111&user_id=2130558298&sn=1BAD35331E484B62AA1731577C67CE8A1A49F57D&umidtoken=YM1SzhyDaacDANlCeb%2BrlGiF&msv=8.0.0&brand=Apple&imei=47CBB9ABCB26EB5099C1AC025934E5BEC2932D1D&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=iOS&ver=210301&mod=iPad4G&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=08A47570-FE6D-4898-A182-C00D84BA5D53"},{"key":"shuqisybody8","val":"appVer=4.3.6.0&imei=47CBB9ABCB26EB5099C1AC025934E5BEC2932D1D&isNewUser=1&params=%7B%22resources%22%3A%7B%22ShuqiVipEntry%22%3A%7B%7D%2C%22personalCardConfig%22%3A%7B%7D%7D%7D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=c9dd16d9bffaabf4c1d6285be42794ed&sn=1BAD35331E484B62AA1731577C67CE8A1A49F57D&soft_id=21&timestamp=1624079133&user_id=2130558298&ver=210301"},{"key":"shuqispbody8","val":"_public=skinId%3D999%26idfa%3D08A47570-FE6D-4898-A182-C00D84BA5D53%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26umidtoken%3DYM1SzhyDaacDANlCeb%2BrlGiF%26user_id%3D2130558298%26sn%3D1BAD35331E484B62AA1731577C67CE8A1A49F57D%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D47CBB9ABCB26EB5099C1AC025934E5BEC2932D1D%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPad4G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYM1SzhyDaacDANlCeb%2BrlGiF%26utype%3Dpre_vip%26sdk%3D13.1.1&deliveryId=525&key=sq_app_ad&miniWua=HHnB_73uQ6rScLQ9c8G/ZQf/H%2BbouldOIEFn16kQx9fAQqXU%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=626&sign=CC8FE73A85ACE5ED85FC3E1439C7C386&timestamp=1624079152&userId=2130558298&user_id=2130558298&wua=HIVW_C6Hy72pv/Ebo9R3fmy/bTJp1ysq8CGVBojylGKBXwsVVEyd4uUJIdE4aDfxikbVzkXYCIPAsLJ%2B75kis63GyT%2BAD4JRCX68HaVe1%2BE6lluaGVrNK1k2PJUcy%2BC2Hbq13SUsvq6aTlCU%2BpqYyyZUnRfBn/WKjATeGEr67EGvh420fINAevAwIZsdA3DxfUNTIqSb1poVer2Y9Jlxuda5fg6JQXmcrYWN5VHdmRmZl/G0%3D"},{"key":"shuqiscbody8","val":""},{"key":"shuqiydbody8","val":""},{"key":"shuqiqdbody8","val":"clientTimestamp=1624079146&position=501&userId=2130558298&signInType=1&wua=HIVW_vzVNLUQmNt5LvoJZM%2Borglfa984irZHUFl88vqhFzDp9z6mUCfEg8wWUlOySQ1qJIVst%2B%2FIYQF1HKJX72B4ieFTA%2F6pxvbJi5pSJWm1Ip997CYbxAn2698UnDQpkI6ZJ%2FipSfL%2FuUrMoj0Kpa0ScqjvLDZNtunWRP%2FNFn41RBCv8Q4MWt%2B0vHk%2BCORjLSgIjnM6Db%2FQvgncfytZtQJ1KebjzugZNWZuM7r8pxxUSSz8%3D&ua=&miniWua=HHnB_3tdrQ62PjtWYoCgQTYQT39b2LKSplV6OWSwzzOzxftk%3D&umidtoken=YM1SzhyDaacDANlCeb%2BrlGiF&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&sign=72ad3fa2671bc99d46f3b18c2c5a587b&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.1.1%26utdid%3DYM1SzhyDaacDANlCeb%252BrlGiF%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2130558298%26sn%3D1BAD35331E484B62AA1731577C67CE8A1A49F57D%26umidtoken%3DYM1SzhyDaacDANlCeb%252BrlGiF%26msv%3D8.0.0%26brand%3DApple%26imei%3D47CBB9ABCB26EB5099C1AC025934E5BEC2932D1D%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad4G%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D08A47570-FE6D-4898-A182-C00D84BA5D53"},{"key":"shuqirwbody8","val":"serviceWorkerOn=1&stopPullRefresh=1&from=ShuqiTab&upf=20368&sdk=13.1.1&utdid=YM1SzhyDaacDANlCeb%2BrlGiF&ustatus=0&first_placeid=111111&net_env=wifi&placeid=111111&user_id=2130558298&sn=1BAD35331E484B62AA1731577C67CE8A1A49F57D&umidtoken=YM1SzhyDaacDANlCeb%2BrlGiF&msv=8.0.0&brand=Apple&imei=47CBB9ABCB26EB5099C1AC025934E5BEC2932D1D&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=1&ver=210301&mod=iPad4G&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=08A47570-FE6D-4898-A182-C00D84BA5D53&params=%7B%22resources%22%3A%7B%22ShuqiBsDailyTask%22%3A%7B%7D%7D%7D&userId=2130558298&placeId=111111&timestamp=1624079155&sqSv=1.0&sign=718977933910e8798f83c709b9dddb7c&key=sq_h5_gateway&_public="},{"key":"shuqifxbody8","val":""},{"key":"shuqisprwurl8","val":"https://ocean.shuqireader.com/api/ad/adserver/v1/api/getAdInfo?appVer=4.3.6.0&placeId=111111&platform=iOS&requestSrc=h5&resourceId=626&timestamp=1624079173&user_id=2130558298&sqSv=1.0&sign=f05fd2775ad94da91e0142840752733e&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.1.1%26utdid%3DYM1SzhyDaacDANlCeb%252BrlGiF%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2130558298%26sn%3D1BAD35331E484B62AA1731577C67CE8A1A49F57D%26umidtoken%3DYM1SzhyDaacDANlCeb%252BrlGiF%26msv%3D8.0.0%26brand%3DApple%26imei%3D47CBB9ABCB26EB5099C1AC025934E5BEC2932D1D%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad4G%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D08A47570-FE6D-4898-A182-C00D84BA5D53"},{"key":"shuqijlbody8","val":"requestSrc=h5&userId=2130558298&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624079155&sqSv=1.0&sign=5b997ff316a567a60c1ffcc5c10c3e1a&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.1.1%26utdid%3DYM1SzhyDaacDANlCeb%252BrlGiF%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2130558298%26sn%3D1BAD35331E484B62AA1731577C67CE8A1A49F57D%26umidtoken%3DYM1SzhyDaacDANlCeb%252BrlGiF%26msv%3D8.0.0%26brand%3DApple%26imei%3D47CBB9ABCB26EB5099C1AC025934E5BEC2932D1D%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad4G%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D08A47570-FE6D-4898-A182-C00D84BA5D53"},{"key":"shuqisqjlbody8","val":"src=&userId=2130558298&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624079150&sqSv=1.0&sign=09b034413db5567e28f6a605e7bd78cf&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.1.1%26utdid%3DYM1SzhyDaacDANlCeb%252BrlGiF%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2130558298%26sn%3D1BAD35331E484B62AA1731577C67CE8A1A49F57D%26umidtoken%3DYM1SzhyDaacDANlCeb%252BrlGiF%26msv%3D8.0.0%26brand%3DApple%26imei%3D47CBB9ABCB26EB5099C1AC025934E5BEC2932D1D%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad4G%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D08A47570-FE6D-4898-A182-C00D84BA5D53"},{"key":"shuqicjyurl8","val":"https://ocean.shuqireader.com/api/activity/activity/v1/lottery/info?timestamp=1624079176&userId=2130558298&activityId=311&sqSv=1.0&sign=708670faafd3b130a1044b419517de17&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.1.1%26utdid%3DYM1SzhyDaacDANlCeb%252BrlGiF%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2130558298%26sn%3D1BAD35331E484B62AA1731577C67CE8A1A49F57D%26umidtoken%3DYM1SzhyDaacDANlCeb%252BrlGiF%26msv%3D8.0.0%26brand%3DApple%26imei%3D47CBB9ABCB26EB5099C1AC025934E5BEC2932D1D%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad4G%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D08A47570-FE6D-4898-A182-C00D84BA5D53"},{"key":"shuqicjcsbody8","val":"_public=skinId%3D999%26idfa%3D08A47570-FE6D-4898-A182-C00D84BA5D53%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26umidtoken%3DYM1SzhyDaacDANlCeb%2BrlGiF%26user_id%3D2130558298%26sn%3D1BAD35331E484B62AA1731577C67CE8A1A49F57D%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D47CBB9ABCB26EB5099C1AC025934E5BEC2932D1D%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPad4G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYM1SzhyDaacDANlCeb%2BrlGiF%26utype%3Dpre_vip%26sdk%3D13.1.1&deliveryId=711&key=sq_app_ad&miniWua=HHnB_PvVr9lJY2J3R8dZVmtsDAVcIJkdnvquzF6mXQjdh4hI%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=703&sign=E284B5C3665FEE064812DE4218160939&timestamp=1624079160&userId=2130558298&user_id=2130558298&wua=HIVW_%2BQDkrwqBJSmjvi8rRrZtKdkmOazSxPhX7GXye2pmMmbtcI7dxmUjHjyvroqa%2BaG0qwW/fQssRk7lz5nFtHJfaavKPf/azHT4ocnPY5BBKtpkrFhxx08QKSq/Vig4ahiBCvJcY%2BJG7KM1W0ihZCpIob915/pd9HpaFPgV2tre0j69MoSd4gGUzxWfoTP4ReEs5sQu7aX11blasGSbjlNJyJaMmtTMgTwHIkbbbdTvn4o%3D"},{"key":"shuqicjbody8","val":"wua=HIVW_xW5pdJjIXWVWxptY3WKS3eKrkwa8MeEmRLKy%2BkLB%2FZq0W0VNRYaGosrKKfOkb7CdWQYTf5apdbD4W7KU4RTKIH9ucXhnqjpgoTOj54A5aLjRTLsUdaPwoUWO7vIHv9w7J3QbsmYncBZCEDny%2BrwXN6jicDx5lDvg2h%2Bp3j%2FONyHc3I%2BG3F%2Fi6SDCYDAQdQ4cqcPENli3acAdvj3dlWh7ZVfJVMvTPoZdDKuRT8%2FRVXk%3D&ua=&userId=2130558298&umidtoken=YM1SzhyDaacDANlCeb%2BrlGiF&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&asac=2A20C07RJ9F51AOEFSNHDR&timestamp=1624079163&activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&sqSv=1.0&sign=edfd42190a637b812fb0cb4bb7a8dfe0&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.1.1%26utdid%3DYM1SzhyDaacDANlCeb%252BrlGiF%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2130558298%26sn%3D1BAD35331E484B62AA1731577C67CE8A1A49F57D%26umidtoken%3DYM1SzhyDaacDANlCeb%252BrlGiF%26msv%3D8.0.0%26brand%3DApple%26imei%3D47CBB9ABCB26EB5099C1AC025934E5BEC2932D1D%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad4G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D08A47570-FE6D-4898-A182-C00D84BA5D53"},{"key":"shuqijsspbody8","val":""},{"key":"shuqijsydurl8","val":""},{"key":"shuqijsydbody8","val":""},{"key":"shuqijsqdbody8","val":""},{"key":"shuqijsqdspyurl8","val":""},{"key":"shuqijsqdspbody8","val":""},{"key":"shuqijsrwbody8","val":""},{"key":"shuqijsfxbody8","val":""},{"key":"shuqijsbookurl8","val":""},{"key":"shuqijsbookbody8","val":""},{"key":"shuqijssprwurl8","val":""},{"key":"shuqiuserurl9","val":"https://ocean.shuqireader.com/api/jaccount/accountapi/v1/sapi/account/getBindinfo?userId=2130807565&sqSv=1.0&timestamp=1624079238&sign=b468797f68937dcaae8f2d0b46fc3546&key=sq_h5_gateway"},{"key":"shuqisyurl9","val":"https://render.shuqireader.com/load/resource?sdk=13.4.1&utdid=YM1S5g2fnAQDAKMK9WlKAXa8&ustatus=0&first_placeid=111111&net_env=4g&placeid=111111&user_id=2130807565&sn=EF79B8EA89B3E0307AD09ADDF818DEC4DC8D91D5&umidtoken=YM1S5g2fnAQDAKMK9WlKAXa8&msv=8.0.0&brand=Apple&imei=DE65788BB0E1A123F69BA045CEF79147B0286D14&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=iOS&ver=210301&mod=iPhone11ProMax&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=B2FA4562-5BF3-4918-9823-76BB87D213C7"},{"key":"shuqisybody9","val":"appVer=4.3.6.0&imei=DE65788BB0E1A123F69BA045CEF79147B0286D14&isNewUser=1&params=%7B%22resources%22%3A%7B%22ShuqiVipEntry%22%3A%7B%7D%2C%22personalCardConfig%22%3A%7B%7D%7D%7D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=bd9758065166d22c09dfe27217bb1409&sn=EF79B8EA89B3E0307AD09ADDF818DEC4DC8D91D5&soft_id=21&timestamp=1624079189&user_id=2130807565&ver=210301"},{"key":"shuqispbody9","val":"_public=skinId%3D999%26idfa%3DB2FA4562-5BF3-4918-9823-76BB87D213C7%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26umidtoken%3DYM1S5g2fnAQDAKMK9WlKAXa8%26user_id%3D2130807565%26sn%3DEF79B8EA89B3E0307AD09ADDF818DEC4DC8D91D5%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3DDE65788BB0E1A123F69BA045CEF79147B0286D14%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhone11ProMax%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYM1S5g2fnAQDAKMK9WlKAXa8%26utype%3Dpre_vip%26sdk%3D13.4.1&deliveryId=525&key=sq_app_ad&miniWua=HHnB_2nB2mmHmkwCpatVt7CZWxx//rKl0yjWz4nHZx3iZETk%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=626&sign=66D60F5944E5EC7176E3891AEF5CC6D1&timestamp=1624079209&userId=2130807565&user_id=2130807565&wua=HIVW_n65qwUa9jMPjfBeV3XwIIBghFcFu9j%2BOU7Nvzgs7I67jmd5we63b0cVTt7eMTesK6E1doWKo87V0ohczQ8M2bqeMTE7CrozOSL2g3VSNeTFcHW4FVoPjsYsDq02157LPMQye6cAwHNgvNgbQluDTwU6Jqlx4kYALhqn3RvDTQPbYJfIGayyAtJs1q9mCuaO28y/quz0dUoz8k/eGQLoMGw9UKaOw58XYEv8mRBMleRg%3D"},{"key":"shuqiscbody9","val":""},{"key":"shuqiydbody9","val":""},{"key":"shuqiqdbody9","val":"clientTimestamp=1624079201&position=501&userId=2130807565&signInType=1&wua=HIVW_AOvhmKTy%2BgoCyC2xL74hh1FOQmpOpkggaLTIPaQVDEBYgFR5JS8R1yPpUEmu%2BgcXy6zAg986qA7ywSMvTgnmWOUkV%2Bk4z4z9lKAHruVAO0QM5mOo%2BgfH%2BPbFAvgPdyaJ4jdLR4kpnooqGN8MyrwtZl%2Fpr0NnLUTWCpi2JRe0Y9KFYDlPkKkp1FRXc6crE1KWnXuTltpyinyNHy2X1k50Ze1ODA0n3VciaWTLrqAGicY%3D&ua=&miniWua=HHnB_O0D7Q%2BLY2qTP%2BLTV%2Bj6IFkDvP%2BXkYpslb2v5COM9nEs%3D&umidtoken=YM1S5g2fnAQDAKMK9WlKAXa8&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&sign=ee7d53abbcc14ed631ab0d1102af352c&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.4.1%26utdid%3DYM1S5g2fnAQDAKMK9WlKAXa8%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2130807565%26sn%3DEF79B8EA89B3E0307AD09ADDF818DEC4DC8D91D5%26umidtoken%3DYM1S5g2fnAQDAKMK9WlKAXa8%26msv%3D8.0.0%26brand%3DApple%26imei%3DDE65788BB0E1A123F69BA045CEF79147B0286D14%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone11ProMax%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DB2FA4562-5BF3-4918-9823-76BB87D213C7"},{"key":"shuqirwbody9","val":"serviceWorkerOn=1&stopPullRefresh=1&from=ShuqiTab&upf=20368&sdk=13.4.1&utdid=YM1S5g2fnAQDAKMK9WlKAXa8&ustatus=0&first_placeid=111111&net_env=4g&placeid=111111&user_id=2130807565&sn=EF79B8EA89B3E0307AD09ADDF818DEC4DC8D91D5&umidtoken=YM1S5g2fnAQDAKMK9WlKAXa8&msv=8.0.0&brand=Apple&imei=DE65788BB0E1A123F69BA045CEF79147B0286D14&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&session=&skinColor=23B383&platform=1&ver=210301&mod=iPhone11ProMax&statusBarHeight=44.000000&skinVersion=1&wh=1242x2688&soft_id=21&utype=pre_vip&skinId=999&idfa=B2FA4562-5BF3-4918-9823-76BB87D213C7&params=%7B%22resources%22%3A%7B%22ShuqiBsDailyTask%22%3A%7B%7D%7D%7D&userId=2130807565&placeId=111111&timestamp=1624079216&sqSv=1.0&sign=afc308f5f4057bb39793b7f0d4e42328&key=sq_h5_gateway&_public="},{"key":"shuqifxbody9","val":""},{"key":"shuqisprwurl9","val":"https://ocean.shuqireader.com/api/ad/adserver/v1/api/getAdInfo?appVer=4.3.6.0&placeId=111111&platform=iOS&requestSrc=h5&resourceId=626&timestamp=1624079239&user_id=2130807565&sqSv=1.0&sign=ebf7a73dcaf32afd5d91da6d87e4909c&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.4.1%26utdid%3DYM1S5g2fnAQDAKMK9WlKAXa8%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2130807565%26sn%3DEF79B8EA89B3E0307AD09ADDF818DEC4DC8D91D5%26umidtoken%3DYM1S5g2fnAQDAKMK9WlKAXa8%26msv%3D8.0.0%26brand%3DApple%26imei%3DDE65788BB0E1A123F69BA045CEF79147B0286D14%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone11ProMax%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DB2FA4562-5BF3-4918-9823-76BB87D213C7"},{"key":"shuqijlbody9","val":"requestSrc=h5&userId=2130807565&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624079216&sqSv=1.0&sign=126ac84e7049f40aa1ca530717151a8f&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.4.1%26utdid%3DYM1S5g2fnAQDAKMK9WlKAXa8%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2130807565%26sn%3DEF79B8EA89B3E0307AD09ADDF818DEC4DC8D91D5%26umidtoken%3DYM1S5g2fnAQDAKMK9WlKAXa8%26msv%3D8.0.0%26brand%3DApple%26imei%3DDE65788BB0E1A123F69BA045CEF79147B0286D14%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone11ProMax%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DB2FA4562-5BF3-4918-9823-76BB87D213C7"},{"key":"shuqisqjlbody9","val":"src=&userId=2130807565&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624079206&sqSv=1.0&sign=8bc00d3ec53e2bc5739caf6960dec17a&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.4.1%26utdid%3DYM1S5g2fnAQDAKMK9WlKAXa8%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2130807565%26sn%3DEF79B8EA89B3E0307AD09ADDF818DEC4DC8D91D5%26umidtoken%3DYM1S5g2fnAQDAKMK9WlKAXa8%26msv%3D8.0.0%26brand%3DApple%26imei%3DDE65788BB0E1A123F69BA045CEF79147B0286D14%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone11ProMax%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DB2FA4562-5BF3-4918-9823-76BB87D213C7"},{"key":"shuqicjyurl9","val":"https://ocean.shuqireader.com/api/activity/activity/v1/lottery/info?timestamp=1624079242&userId=2130807565&activityId=311&sqSv=1.0&sign=8f5bcd2d673d3b4e9deff215685c5956&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.4.1%26utdid%3DYM1S5g2fnAQDAKMK9WlKAXa8%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2130807565%26sn%3DEF79B8EA89B3E0307AD09ADDF818DEC4DC8D91D5%26umidtoken%3DYM1S5g2fnAQDAKMK9WlKAXa8%26msv%3D8.0.0%26brand%3DApple%26imei%3DDE65788BB0E1A123F69BA045CEF79147B0286D14%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone11ProMax%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DB2FA4562-5BF3-4918-9823-76BB87D213C7"},{"key":"shuqicjcsbody9","val":"_public=skinId%3D999%26idfa%3DB2FA4562-5BF3-4918-9823-76BB87D213C7%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26umidtoken%3DYM1S5g2fnAQDAKMK9WlKAXa8%26user_id%3D2130807565%26sn%3DEF79B8EA89B3E0307AD09ADDF818DEC4DC8D91D5%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3DDE65788BB0E1A123F69BA045CEF79147B0286D14%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhone11ProMax%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYM1S5g2fnAQDAKMK9WlKAXa8%26utype%3Dpre_vip%26sdk%3D13.4.1&deliveryId=711&key=sq_app_ad&miniWua=HHnB_vKLFBuEKCrjBdgBBHyWQuoBDXAXL6Ho6STSySSI5gps%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=703&sign=D7C267619542638E362D7679FC62AB39&timestamp=1624079222&userId=2130807565&user_id=2130807565&wua=HIVW_uhxRW/p18HAqCeM6J2OVssUohu%2B0GBafdx69ICN0wlv3/3DOLN7I8gn5rcZFGYmw95WnCCutf%2BVxG8FQc7PgNMTtL0oFsBvONp27bInGK0OFa2HYE7m58KBPtAzYp3T8%2BoupriDwzroy/yKtfemt0sDNWwuxRzuy5lsqe8ZxNsgr65TsEcpSk0X9h7GJVuel%2BzAl%2Be0pfONXC1P9NBFLJSWrZzgcOExSPzLVMQfjW1s%3D"},{"key":"shuqicjbody9","val":"wua=HIVW_I%2Fw3KAOgzWZylFHU1rpv5CRjYjrJg1EEMaMOSpYUn7IgPnQarlSdgg%2FMjN0bkqjbKEiqqmVvAtkovDtvigZqzhusiTnkVmV1oCFj%2BtFTHPBzztT4Ztju3p18zKD%2FxvI4l8gWgYtLajJQmYfUzdaUqcn%2F5xyDe5DbEeLc4orpqhcWP2I99mPJNh3XxRqkAqr6XeDiVnB2%2FGT5Lxwm6XgFUJGF1Y29i7VrwPRYmytyVQ4%3D&ua=&userId=2130807565&umidtoken=YM1S5g2fnAQDAKMK9WlKAXa8&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&asac=2A20C07RJ9F51AOEFSNHDR&timestamp=1624079229&activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&sqSv=1.0&sign=91e75464f19447cc62a220e8c95ccea0&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.4.1%26utdid%3DYM1S5g2fnAQDAKMK9WlKAXa8%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2130807565%26sn%3DEF79B8EA89B3E0307AD09ADDF818DEC4DC8D91D5%26umidtoken%3DYM1S5g2fnAQDAKMK9WlKAXa8%26msv%3D8.0.0%26brand%3DApple%26imei%3DDE65788BB0E1A123F69BA045CEF79147B0286D14%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone11ProMax%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DB2FA4562-5BF3-4918-9823-76BB87D213C7"},{"key":"shuqijsspbody9","val":""},{"key":"shuqijsydurl9","val":""},{"key":"shuqijsydbody9","val":""},{"key":"shuqijsqdbody9","val":""},{"key":"shuqijsqdspyurl9","val":""},{"key":"shuqijsqdspbody9","val":""},{"key":"shuqijsrwbody9","val":""},{"key":"shuqijsfxbody9","val":""},{"key":"shuqijsbookurl9","val":""},{"key":"shuqijsbookbody9","val":""},{"key":"shuqijssprwurl9","val":""},{"key":"shuqiuserurl10","val":"https://ocean.shuqireader.com/api/jaccount/accountapi/v1/sapi/account/getBindinfo?userId=2132085603&sqSv=1.0&timestamp=1624079303&sign=212d8bbcd2f6f0101beed2b215f73daa&key=sq_h5_gateway"},{"key":"shuqisyurl10","val":"https://render.shuqireader.com/load/resource?sdk=13.2.3&utdid=YM1S5g2fnAQDAKMK9WlKAXa8&ustatus=0&first_placeid=111111&net_env=3g&placeid=111111&user_id=2132085603&sn=08734F94F1F002A0A2C48B6EF6D19DCDB5856881&umidtoken=YM1S5g2fnAQDAKMK9WlKAXa8&msv=8.0.0&brand=Apple&imei=EEA40FDFED802C0CB9D108D29667EB635F73BBA2&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=iOS&ver=210301&mod=iPhone11Pro&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=BAD202BB-57C3-4D6D-9673-CB29FA3CD75B"},{"key":"shuqisybody10","val":"appVer=4.3.6.0&imei=EEA40FDFED802C0CB9D108D29667EB635F73BBA2&isNewUser=1&params=%7B%22resources%22%3A%7B%22ShuqiVipEntry%22%3A%7B%7D%2C%22personalCardConfig%22%3A%7B%7D%7D%7D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=08ddd62e3fb8f334ed5fe47113304265&sn=08734F94F1F002A0A2C48B6EF6D19DCDB5856881&soft_id=21&timestamp=1624079255&user_id=2132085603&ver=210301"},{"key":"shuqispbody10","val":"_public=skinId%3D999%26idfa%3DBAD202BB-57C3-4D6D-9673-CB29FA3CD75B%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26umidtoken%3DYM1S5g2fnAQDAKMK9WlKAXa8%26user_id%3D2132085603%26sn%3D08734F94F1F002A0A2C48B6EF6D19DCDB5856881%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3DEEA40FDFED802C0CB9D108D29667EB635F73BBA2%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhone11Pro%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYM1S5g2fnAQDAKMK9WlKAXa8%26utype%3Dpre_vip%26sdk%3D13.2.3&deliveryId=525&key=sq_app_ad&miniWua=HHnB_NczKc2Z70tAt9LSbpwhGq/YZRPdM7zWq3Cm68fCCobE%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=626&sign=262EC4C50C7257C8B67E56914D2C40CC&timestamp=1624079276&userId=2132085603&user_id=2132085603&wua=HIVW_YPEwdljKdToPKWx7n545oSsdY7QdGOfGgqg7Iu/VUXMyR75CqGG6gx0wycjQlomk4OzUnteNn1zYg7pCkHakZrBuHyq2mVBmFoavUq6egxg/VB3Limsvm62ZhrddTJsB6s3yTqAYMfPRHPt1R4RQ5353%2BdWFEh/eOTFrzzCLPuC3FVE/atwlRHNgLvfmcbFAH1M11uP640hPZQndif2Cb7ONzqMeL9IVg3Y6Uh0InS8%3D"},{"key":"shuqiscbody10","val":""},{"key":"shuqiydbody10","val":""},{"key":"shuqiqdbody10","val":"clientTimestamp=1624079267&position=501&userId=2132085603&signInType=1&wua=HIVW_X2qOJfSIXvWDbZhf4CrMdTWPJhicSO4lDmQHoNWGOKJzS4xKAVCoLmLlVaevbCl3hgrcfWxWVsMwqSRrddhUr5tq1BZ7P6%2BEvgjLJLyAxwgCvHZEV2POTK013zQSYjFWw3NdOKM%2BFFeKaj56aXoX3OKTJmyrhP4ybkHkumKuFnGRGxq%2FQNWddpeiFBEQvIqMtN%2BE2QgWsjWWO7Hvf6Ke2Dsj%2FwT3CRg6A34wbu1leOA%3D&ua=&miniWua=HHnB_UeUUd8E3Smu1oDiKitjy1Rl8yt3BxrIuLxO70lzRrXI%3D&umidtoken=YM1S5g2fnAQDAKMK9WlKAXa8&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&sign=302b848d38761378983199d89ed6129c&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.2.3%26utdid%3DYM1S5g2fnAQDAKMK9WlKAXa8%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2132085603%26sn%3D08734F94F1F002A0A2C48B6EF6D19DCDB5856881%26umidtoken%3DYM1S5g2fnAQDAKMK9WlKAXa8%26msv%3D8.0.0%26brand%3DApple%26imei%3DEEA40FDFED802C0CB9D108D29667EB635F73BBA2%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone11Pro%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DBAD202BB-57C3-4D6D-9673-CB29FA3CD75B"},{"key":"shuqirwbody10","val":"serviceWorkerOn=1&stopPullRefresh=1&from=ShuqiTab&upf=20368&sdk=13.2.3&utdid=YM1S5g2fnAQDAKMK9WlKAXa8&ustatus=0&first_placeid=111111&net_env=3g&placeid=111111&user_id=2132085603&sn=08734F94F1F002A0A2C48B6EF6D19DCDB5856881&umidtoken=YM1S5g2fnAQDAKMK9WlKAXa8&msv=8.0.0&brand=Apple&imei=EEA40FDFED802C0CB9D108D29667EB635F73BBA2&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&session=&skinColor=23B383&platform=1&ver=210301&mod=iPhone11Pro&statusBarHeight=44.000000&skinVersion=1&wh=1242x2688&soft_id=21&utype=pre_vip&skinId=999&idfa=BAD202BB-57C3-4D6D-9673-CB29FA3CD75B&params=%7B%22resources%22%3A%7B%22ShuqiBsDailyTask%22%3A%7B%7D%7D%7D&userId=2132085603&placeId=111111&timestamp=1624079283&sqSv=1.0&sign=6109322f6e33847a5537488fe5b00dea&key=sq_h5_gateway&_public="},{"key":"shuqifxbody10","val":""},{"key":"shuqisprwurl10","val":"https://ocean.shuqireader.com/api/ad/adserver/v1/api/getAdInfo?appVer=4.3.6.0&placeId=111111&platform=iOS&requestSrc=h5&resourceId=626&timestamp=1624079303&user_id=2132085603&sqSv=1.0&sign=c54247df659d731861e73e93679a9322&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.2.3%26utdid%3DYM1S5g2fnAQDAKMK9WlKAXa8%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2132085603%26sn%3D08734F94F1F002A0A2C48B6EF6D19DCDB5856881%26umidtoken%3DYM1S5g2fnAQDAKMK9WlKAXa8%26msv%3D8.0.0%26brand%3DApple%26imei%3DEEA40FDFED802C0CB9D108D29667EB635F73BBA2%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone11Pro%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DBAD202BB-57C3-4D6D-9673-CB29FA3CD75B"},{"key":"shuqijlbody10","val":"requestSrc=h5&userId=2132085603&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624079283&sqSv=1.0&sign=1ca074b8230d988a108f65fb5a9bfeeb&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.2.3%26utdid%3DYM1S5g2fnAQDAKMK9WlKAXa8%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2132085603%26sn%3D08734F94F1F002A0A2C48B6EF6D19DCDB5856881%26umidtoken%3DYM1S5g2fnAQDAKMK9WlKAXa8%26msv%3D8.0.0%26brand%3DApple%26imei%3DEEA40FDFED802C0CB9D108D29667EB635F73BBA2%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone11Pro%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DBAD202BB-57C3-4D6D-9673-CB29FA3CD75B"},{"key":"shuqisqjlbody10","val":"src=&userId=2132085603&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624079272&sqSv=1.0&sign=09bb84fe2be6cad37ae484c873e81194&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.2.3%26utdid%3DYM1S5g2fnAQDAKMK9WlKAXa8%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2132085603%26sn%3D08734F94F1F002A0A2C48B6EF6D19DCDB5856881%26umidtoken%3DYM1S5g2fnAQDAKMK9WlKAXa8%26msv%3D8.0.0%26brand%3DApple%26imei%3DEEA40FDFED802C0CB9D108D29667EB635F73BBA2%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone11Pro%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DBAD202BB-57C3-4D6D-9673-CB29FA3CD75B"},{"key":"shuqicjyurl10","val":"https://ocean.shuqireader.com/api/activity/activity/v1/lottery/info?timestamp=1624079306&userId=2132085603&activityId=311&sqSv=1.0&sign=3a5e4a13ce05b8603b0ffeecf902e49f&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.2.3%26utdid%3DYM1S5g2fnAQDAKMK9WlKAXa8%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2132085603%26sn%3D08734F94F1F002A0A2C48B6EF6D19DCDB5856881%26umidtoken%3DYM1S5g2fnAQDAKMK9WlKAXa8%26msv%3D8.0.0%26brand%3DApple%26imei%3DEEA40FDFED802C0CB9D108D29667EB635F73BBA2%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone11Pro%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DBAD202BB-57C3-4D6D-9673-CB29FA3CD75B"},{"key":"shuqicjcsbody10","val":"_public=skinId%3D999%26idfa%3DBAD202BB-57C3-4D6D-9673-CB29FA3CD75B%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26umidtoken%3DYM1S5g2fnAQDAKMK9WlKAXa8%26user_id%3D2132085603%26sn%3D08734F94F1F002A0A2C48B6EF6D19DCDB5856881%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3DEEA40FDFED802C0CB9D108D29667EB635F73BBA2%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhone11Pro%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYM1S5g2fnAQDAKMK9WlKAXa8%26utype%3Dpre_vip%26sdk%3D13.2.3&deliveryId=711&key=sq_app_ad&miniWua=HHnB_NmK6i0g2CvmUNDy3uO19xf4Z1Cr6D/O83fNvDH/VmUE%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=703&sign=CA6F94FC1307AB3ECCD5AB5DEA14F182&timestamp=1624079289&userId=2132085603&user_id=2132085603&wua=HIVW_jmI5mmIWnp8j1HlNpFMVNiGloru%2BLmGJTGFDl/gQXSyd6h7bmUoNxbzvCrDGhp/wJy5zPvwgn7mpAphx7BesUm8atiQuECJvM85SLjmH1VELxXR3B%2BRz9ncfjW9Zr1P2gWFVJEqymq%2BVqWSPA4cC3M8vCkD8h5ax0LFK/7OrmhuBM9LU7Ie%2BJH91PmyYzBZTPaU8oGhtsU/IWU%2Bq0N4dv24YZBoC4B7PSTORkgp7UZw%3D"},{"key":"shuqicjbody10","val":"wua=HIVW_RDwe4ZMDeApTF9dMdQyDTi3ASlPmhP1ggMxejc6S6OLPTrAJGHpzrfyWIKy1XHYA%2Bguhpvg84zOQX5zbITweyfm4%2BvWICcfAoKbQemWotGXOf4vOFeeej25wmWHambvCCT6Q8rbusTmQ4rcDmGyisNm36B%2BvqwFSkMSH9raVjuTuHc61LBVsxynE9IoIMJRTudyh0Sp8v2ED010FWt8TvksTiXY%2B08S5TV822gaHm%2B0%3D&ua=&userId=2132085603&umidtoken=YM1S5g2fnAQDAKMK9WlKAXa8&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&asac=2A20C07RJ9F51AOEFSNHDR&timestamp=1624079294&activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&sqSv=1.0&sign=f51cbed68dc7cd1a08b3f266451008c5&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.2.3%26utdid%3DYM1S5g2fnAQDAKMK9WlKAXa8%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2132085603%26sn%3D08734F94F1F002A0A2C48B6EF6D19DCDB5856881%26umidtoken%3DYM1S5g2fnAQDAKMK9WlKAXa8%26msv%3D8.0.0%26brand%3DApple%26imei%3DEEA40FDFED802C0CB9D108D29667EB635F73BBA2%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone11Pro%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DBAD202BB-57C3-4D6D-9673-CB29FA3CD75B"},{"key":"shuqijsspbody10","val":""},{"key":"shuqijsydurl10","val":""},{"key":"shuqijsydbody10","val":""},{"key":"shuqijsqdbody10","val":""},{"key":"shuqijsqdspyurl10","val":""},{"key":"shuqijsqdspbody10","val":""},{"key":"shuqijsrwbody10","val":""},{"key":"shuqijsfxbody10","val":""},{"key":"shuqijsbookurl10","val":""},{"key":"shuqijsbookbody10","val":""},{"key":"shuqijssprwurl10","val":""},{"key":"shuqiuserurl11","val":"https://ocean.shuqireader.com/api/jaccount/accountapi/v1/sapi/account/getBindinfo?userId=2128815586&sqSv=1.0&timestamp=1624079376&sign=3fce45cd10acf70005acbe07236307eb&key=sq_h5_gateway"},{"key":"shuqisyurl11","val":"https://render.shuqireader.com/load/resource?sdk=13.5&utdid=YM1TFhrOp8IDAKBaIJVnKXHm&ustatus=0&first_placeid=111111&net_env=wifi&placeid=111111&user_id=2128815586&sn=8518B53143A547F1358C0DA01031525705D44F6A&umidtoken=YM1TFhrOp8IDAKBaIJVnKXHm&msv=8.0.0&brand=Apple&imei=C68CCA032BB82A1748E4ED7F0A6DCC6E4C7EA175&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=iOS&ver=210301&mod=iPhoneSE&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=DE8606C7-6D58-4C13-B26A-85EB8C6BAD13"},{"key":"shuqisybody11","val":"appVer=4.3.6.0&imei=C68CCA032BB82A1748E4ED7F0A6DCC6E4C7EA175&isNewUser=1&params=%7B%22resources%22%3A%7B%22ShuqiVipEntry%22%3A%7B%7D%2C%22personalCardConfig%22%3A%7B%7D%7D%7D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=ac8be7372e96a41b10e4a087d45be22b&sn=8518B53143A547F1358C0DA01031525705D44F6A&soft_id=21&timestamp=1624079319&user_id=2128815586&ver=210301"},{"key":"shuqispbody11","val":"_public=skinId%3D999%26idfa%3DDE8606C7-6D58-4C13-B26A-85EB8C6BAD13%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26umidtoken%3DYM1TFhrOp8IDAKBaIJVnKXHm%26user_id%3D2128815586%26sn%3D8518B53143A547F1358C0DA01031525705D44F6A%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3DC68CCA032BB82A1748E4ED7F0A6DCC6E4C7EA175%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhoneSE%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYM1TFhrOp8IDAKBaIJVnKXHm%26utype%3Dpre_vip%26sdk%3D13.5&deliveryId=525&key=sq_app_ad&miniWua=HHnB_G55osNGK15Ih0okvmDeYlgPYekd0cqxXEUjaNERVbxU%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=626&sign=6CF544A7738AAF474F309A833609CF94&timestamp=1624079347&userId=2128815586&user_id=2128815586&wua=HIVW_D%2BCnjmA5zWcQQn5IAoaYUSUAwAJPLWxCFs/zFDaonzeabcfm%2BnniuCaVQKXdiyh8aWwMxdorvXGGZgA9avG6rUAgitHNIqArqcF7SfSTT4yGUMpEIg%2ByPSiS1qR0DMmv%2BpCQPmGtc8M1feM4REKLgHh5pePH1LWdL%2B0FJyS%2B/zvLTXbR9irSDSXYrDNb%2BFemLFqOzXMheErcdLijGfJCBrpqIQRuR%2BCCNI5aSJjQg50%3D"},{"key":"shuqiscbody11","val":""},{"key":"shuqiydbody11","val":""},{"key":"shuqiqdbody11","val":"clientTimestamp=1624079346&position=501&userId=2128815586&signInType=1&wua=HIVW_FO7lrzioOluEp1Gy8COtt9wlaHeKiOcih8o5E%2Fbm5CKDNOM%2B2WJRBlDOsnTWchzWGasOh3omI%2BWUNyXHLa6qwdDrz77CFpuKdkMkG%2FGnSjO5FwO34RKMPnTcSuSwuDyGn2Umh74XnYP%2BgEw3I9bL49gzcM3LJhDtq20A9PVYYd%2B4cCbkRJ9HQUiWicfk8ojVCcKQtM672Gcep2iOOxW08XQQLqxkMbzpU87PJOtMFa8%3D&ua=&miniWua=HHnB_jNqRSO%2FcnleZO%2F1HQnJ%2BB35SvM8tL58UofMNK%2FUsu84%3D&umidtoken=YM1TFhrOp8IDAKBaIJVnKXHm&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&sign=8c307844d5bc7630e2c0caa89aa7819c&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.5%26utdid%3DYM1TFhrOp8IDAKBaIJVnKXHm%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2128815586%26sn%3D8518B53143A547F1358C0DA01031525705D44F6A%26umidtoken%3DYM1TFhrOp8IDAKBaIJVnKXHm%26msv%3D8.0.0%26brand%3DApple%26imei%3DC68CCA032BB82A1748E4ED7F0A6DCC6E4C7EA175%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhoneSE%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DDE8606C7-6D58-4C13-B26A-85EB8C6BAD13"},{"key":"shuqirwbody11","val":"serviceWorkerOn=1&stopPullRefresh=1&from=ShuqiTab&upf=20368&sdk=13.5&utdid=YM1TFhrOp8IDAKBaIJVnKXHm&ustatus=0&first_placeid=111111&net_env=wifi&placeid=111111&user_id=2128815586&sn=8518B53143A547F1358C0DA01031525705D44F6A&umidtoken=YM1TFhrOp8IDAKBaIJVnKXHm&msv=8.0.0&brand=Apple&imei=C68CCA032BB82A1748E4ED7F0A6DCC6E4C7EA175&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=1&ver=210301&mod=iPhoneSE&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=DE8606C7-6D58-4C13-B26A-85EB8C6BAD13&params=%7B%22resources%22%3A%7B%22ShuqiBsDailyTask%22%3A%7B%7D%7D%7D&userId=2128815586&placeId=111111&timestamp=1624079351&sqSv=1.0&sign=c825e096a98dabc8be25842dfc306192&key=sq_h5_gateway&_public="},{"key":"shuqifxbody11","val":""},{"key":"shuqisprwurl11","val":"https://ocean.shuqireader.com/api/ad/adserver/v1/api/getAdInfo?appVer=4.3.6.0&placeId=111111&platform=iOS&requestSrc=h5&resourceId=626&timestamp=1624079376&user_id=2128815586&sqSv=1.0&sign=c040ce42e10b4fd337edc54a9fe329c9&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.5%26utdid%3DYM1TFhrOp8IDAKBaIJVnKXHm%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2128815586%26sn%3D8518B53143A547F1358C0DA01031525705D44F6A%26umidtoken%3DYM1TFhrOp8IDAKBaIJVnKXHm%26msv%3D8.0.0%26brand%3DApple%26imei%3DC68CCA032BB82A1748E4ED7F0A6DCC6E4C7EA175%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhoneSE%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DDE8606C7-6D58-4C13-B26A-85EB8C6BAD13"},{"key":"shuqijlbody11","val":"requestSrc=h5&userId=2128815586&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624079351&sqSv=1.0&sign=2c054ac0feb2fd084cf5e28494c092bc&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.5%26utdid%3DYM1TFhrOp8IDAKBaIJVnKXHm%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2128815586%26sn%3D8518B53143A547F1358C0DA01031525705D44F6A%26umidtoken%3DYM1TFhrOp8IDAKBaIJVnKXHm%26msv%3D8.0.0%26brand%3DApple%26imei%3DC68CCA032BB82A1748E4ED7F0A6DCC6E4C7EA175%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhoneSE%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DDE8606C7-6D58-4C13-B26A-85EB8C6BAD13"},{"key":"shuqisqjlbody11","val":"src=&userId=2128815586&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624079341&sqSv=1.0&sign=bd74e25e239b249de5c0e3254c7e9084&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.5%26utdid%3DYM1TFhrOp8IDAKBaIJVnKXHm%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2128815586%26sn%3D8518B53143A547F1358C0DA01031525705D44F6A%26umidtoken%3DYM1TFhrOp8IDAKBaIJVnKXHm%26msv%3D8.0.0%26brand%3DApple%26imei%3DC68CCA032BB82A1748E4ED7F0A6DCC6E4C7EA175%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhoneSE%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DDE8606C7-6D58-4C13-B26A-85EB8C6BAD13"},{"key":"shuqicjyurl11","val":"https://ocean.shuqireader.com/api/activity/activity/v1/lottery/info?timestamp=1624079379&userId=2128815586&activityId=311&sqSv=1.0&sign=0b633b84113ba3ce9bb85372cf7dfdc4&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.5%26utdid%3DYM1TFhrOp8IDAKBaIJVnKXHm%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2128815586%26sn%3D8518B53143A547F1358C0DA01031525705D44F6A%26umidtoken%3DYM1TFhrOp8IDAKBaIJVnKXHm%26msv%3D8.0.0%26brand%3DApple%26imei%3DC68CCA032BB82A1748E4ED7F0A6DCC6E4C7EA175%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhoneSE%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DDE8606C7-6D58-4C13-B26A-85EB8C6BAD13"},{"key":"shuqicjcsbody11","val":"_public=skinId%3D999%26idfa%3DDE8606C7-6D58-4C13-B26A-85EB8C6BAD13%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26umidtoken%3DYM1TFhrOp8IDAKBaIJVnKXHm%26user_id%3D2128815586%26sn%3D8518B53143A547F1358C0DA01031525705D44F6A%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3DC68CCA032BB82A1748E4ED7F0A6DCC6E4C7EA175%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhoneSE%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYM1TFhrOp8IDAKBaIJVnKXHm%26utype%3Dpre_vip%26sdk%3D13.5&deliveryId=711&key=sq_app_ad&miniWua=HHnB_l%2BW2Myx%2BzImYJmY6O3phbWyRpcyinY5V/H2epH/q3nk%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=703&sign=717F952A87CD108F078B5D5C9A96C38D&timestamp=1624079359&userId=2128815586&user_id=2128815586&wua=HIVW_jPqzl%2B8YBPkXImieJuHx1SJNFrT8v4GS9mlg0tUm63wqAPgreARc1aLw%2Bqfa1n0k7bjZR6sLNUYzAEVoy21f73Fd8D9KY/QtM6HjIKVLJWZNwEbEOHwJ0EyIrbWBb1pqPHx26oA1PCTEDQP8PzWVNuoBBCFiSSAbtHEmJ/p78Vh0QmAzFm%2Bga9axJgg4Igv%2BciQ%2BHrPv0/sxyYCl1JJLDj8e/N93VBaqfO7oSstJheE%3D"},{"key":"shuqicjbody11","val":"wua=HIVW_4L1XduyQIRnQAztet%2Fdt7vnNR970eFdNIYUW5JcRNy%2FfwpKAB5bCbV553v2AYKzQvG2svIjuKbJd%2F2lO2dmvdCXaIbVHX4shkUAipS6aTRZoVQOICGjkk%2Fq%2BjHy%2BVTFvAIRXMr08HX%2B1oJE1A3oypm1lJRAOQI%2F9n5DKSJPXYh0%2Bqc77UzvXc%2F2QcxT4QGRMV8RiwSGp1M%2BUgBRIkattchKN3Y5eONiioKVrtxKof5w%3D&ua=&userId=2128815586&umidtoken=YM1TFhrOp8IDAKBaIJVnKXHm&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&asac=2A20C07RJ9F51AOEFSNHDR&timestamp=1624079364&activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&sqSv=1.0&sign=b19c6ad497e7057f2918656e88c0f998&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.5%26utdid%3DYM1TFhrOp8IDAKBaIJVnKXHm%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2128815586%26sn%3D8518B53143A547F1358C0DA01031525705D44F6A%26umidtoken%3DYM1TFhrOp8IDAKBaIJVnKXHm%26msv%3D8.0.0%26brand%3DApple%26imei%3DC68CCA032BB82A1748E4ED7F0A6DCC6E4C7EA175%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhoneSE%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DDE8606C7-6D58-4C13-B26A-85EB8C6BAD13"},{"key":"shuqijsspbody11","val":""},{"key":"shuqijsydurl11","val":""},{"key":"shuqijsydbody11","val":""},{"key":"shuqijsqdbody11","val":""},{"key":"shuqijsqdspyurl11","val":""},{"key":"shuqijsqdspbody11","val":""},{"key":"shuqijsrwbody11","val":""},{"key":"shuqijsfxbody11","val":""},{"key":"shuqijsbookurl11","val":""},{"key":"shuqijsbookbody11","val":""},{"key":"shuqijssprwurl11","val":""},{"key":"shuqiuserurl12","val":"https://ocean.shuqireader.com/api/jaccount/accountapi/v1/sapi/account/getBindinfo?userId=2128167645&sqSv=1.0&timestamp=1624079450&sign=8c737c55fd5dc01749dff92fda855935&key=sq_h5_gateway"},{"key":"shuqisyurl12","val":"https://render.shuqireader.com/load/resource?sdk=13.3&utdid=YM1TIDrxrVIDAHVEV%2F%2B4M9xS&ustatus=0&first_placeid=111111&net_env=3g&placeid=111111&user_id=2128167645&sn=942907A2FBF1E9E83DD904CFDAF24B7C8C483276&umidtoken=YM1TIDrxrVIDAHVEV%2F%2B4M9xS&msv=8.0.0&brand=Apple&imei=FB75A97C5DCF90526FBBC5060902D958FDFE57E6&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=iOS&ver=210301&mod=UnknowniPad&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=BD8941C9-21EB-4483-9954-3A4CC847AB9C"},{"key":"shuqisybody12","val":"appVer=4.3.6.0&imei=FB75A97C5DCF90526FBBC5060902D958FDFE57E6&isNewUser=1&params=%7B%22resources%22%3A%7B%22ShuqiVipEntry%22%3A%7B%7D%2C%22personalCardConfig%22%3A%7B%7D%7D%7D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=7e3c9acecb8243eca998eacf0f49f89f&sn=942907A2FBF1E9E83DD904CFDAF24B7C8C483276&soft_id=21&timestamp=1624079396&user_id=2128167645&ver=210301"},{"key":"shuqispbody12","val":"_public=skinId%3D999%26idfa%3DBD8941C9-21EB-4483-9954-3A4CC847AB9C%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26umidtoken%3DYM1TIDrxrVIDAHVEV/%2B4M9xS%26user_id%3D2128167645%26sn%3D942907A2FBF1E9E83DD904CFDAF24B7C8C483276%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3DFB75A97C5DCF90526FBBC5060902D958FDFE57E6%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYM1TIDrxrVIDAHVEV/%2B4M9xS%26utype%3Dpre_vip%26sdk%3D13.3&deliveryId=525&key=sq_app_ad&miniWua=HHnB_2JNPg8Vxh55YZODoWGoapGeERP03TETEBOduH5rGI0I%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=626&sign=F4C1D16525FCD8C254752DFE09CF099C&timestamp=1624079420&userId=2128167645&user_id=2128167645&wua=HIVW_3aQ1Ig6V81xMTfte5A/2xc4RBuOkjfqnagmOO4cbCvVmvs%2BSaKWlGcq70KQJqdlNPiyGYdaX74i6XsoEe3gmH0snjbNEkm3VSz8Hlos/%2BBnzwS8gGyJj878cJCN1wcexSRPGfcpXv0ovXispOhn9ZndiFrzuaqzYdfAOo8%2B7u/iX%2BPXvzoSufyxJQFyZsFvyX85XCTCFAAHaDm3yxt86lSAPocfiNcZFawXoTnQqQNg%3D"},{"key":"shuqiscbody12","val":""},{"key":"shuqiydbody12","val":""},{"key":"shuqiqdbody12","val":"clientTimestamp=1624079413&position=501&userId=2128167645&signInType=1&wua=HIVW_eZP6kZwO1NMJJemIhzJsiFzCStGc%2F8a07V8dD83pr%2FtmM9EElbENvhuB56hcka0qlkubGm8BBv7Bk3vzYnFWPW5JT47d1pKuX3M%2B%2Bfwv1YBe62JJn4nOlNmbO1lA%2FLPee7tsYKxjForXfZdVGrErA3fd8bisjEeMFFu7%2FFMtc5za2ccH0gpRj67ZVmNHbisAv4cTfxBSaflRWpfm3CyAP2JgN%2F7aG5mbJihSmW9tyNw%3D&ua=&miniWua=HHnB_WNJZjl875clK4A0U1he4LgWWF2Ps1ZwZSHlU5JjF6KM%3D&umidtoken=YM1TIDrxrVIDAHVEV%2F%2B4M9xS&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&sign=2e5890fbee59e7a58ef9aea347b3274c&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.3%26utdid%3DYM1TIDrxrVIDAHVEV%252F%252B4M9xS%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2128167645%26sn%3D942907A2FBF1E9E83DD904CFDAF24B7C8C483276%26umidtoken%3DYM1TIDrxrVIDAHVEV%252F%252B4M9xS%26msv%3D8.0.0%26brand%3DApple%26imei%3DFB75A97C5DCF90526FBBC5060902D958FDFE57E6%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DBD8941C9-21EB-4483-9954-3A4CC847AB9C"},{"key":"shuqirwbody12","val":"serviceWorkerOn=1&stopPullRefresh=1&from=ShuqiTab&upf=20368&sdk=13.3&utdid=YM1TIDrxrVIDAHVEV%2F%2B4M9xS&ustatus=0&first_placeid=111111&net_env=3g&placeid=111111&user_id=2128167645&sn=942907A2FBF1E9E83DD904CFDAF24B7C8C483276&umidtoken=YM1TIDrxrVIDAHVEV%2F%2B4M9xS&msv=8.0.0&brand=Apple&imei=FB75A97C5DCF90526FBBC5060902D958FDFE57E6&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=1&ver=210301&mod=UnknowniPad&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=BD8941C9-21EB-4483-9954-3A4CC847AB9C&params=%7B%22resources%22%3A%7B%22ShuqiBsDailyTask%22%3A%7B%7D%7D%7D&userId=2128167645&placeId=111111&timestamp=1624079427&sqSv=1.0&sign=1288005e01ebcc75d50437271dd75db8&key=sq_h5_gateway&_public="},{"key":"shuqifxbody12","val":""},{"key":"shuqisprwurl12","val":"https://ocean.shuqireader.com/api/ad/adserver/v1/api/getAdInfo?appVer=4.3.6.0&placeId=111111&platform=iOS&requestSrc=h5&resourceId=626&timestamp=1624079449&user_id=2128167645&sqSv=1.0&sign=fcce7782a282cb8e390b6e67b42bdde0&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.3%26utdid%3DYM1TIDrxrVIDAHVEV%252F%252B4M9xS%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2128167645%26sn%3D942907A2FBF1E9E83DD904CFDAF24B7C8C483276%26umidtoken%3DYM1TIDrxrVIDAHVEV%252F%252B4M9xS%26msv%3D8.0.0%26brand%3DApple%26imei%3DFB75A97C5DCF90526FBBC5060902D958FDFE57E6%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DBD8941C9-21EB-4483-9954-3A4CC847AB9C"},{"key":"shuqijlbody12","val":"requestSrc=h5&userId=2128167645&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624079427&sqSv=1.0&sign=49a94cbdc5d92ea74a1cbb1fb2798bb3&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.3%26utdid%3DYM1TIDrxrVIDAHVEV%252F%252B4M9xS%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2128167645%26sn%3D942907A2FBF1E9E83DD904CFDAF24B7C8C483276%26umidtoken%3DYM1TIDrxrVIDAHVEV%252F%252B4M9xS%26msv%3D8.0.0%26brand%3DApple%26imei%3DFB75A97C5DCF90526FBBC5060902D958FDFE57E6%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DBD8941C9-21EB-4483-9954-3A4CC847AB9C"},{"key":"shuqisqjlbody12","val":"src=&userId=2128167645&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624079417&sqSv=1.0&sign=ba9b5db282d0a005e001592d8344454a&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.3%26utdid%3DYM1TIDrxrVIDAHVEV%252F%252B4M9xS%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2128167645%26sn%3D942907A2FBF1E9E83DD904CFDAF24B7C8C483276%26umidtoken%3DYM1TIDrxrVIDAHVEV%252F%252B4M9xS%26msv%3D8.0.0%26brand%3DApple%26imei%3DFB75A97C5DCF90526FBBC5060902D958FDFE57E6%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DBD8941C9-21EB-4483-9954-3A4CC847AB9C"},{"key":"shuqicjyurl12","val":"https://ocean.shuqireader.com/api/activity/activity/v1/lottery/info?timestamp=1624079450&userId=2128167645&activityId=311&sqSv=1.0&sign=dc316cc756ca507fb030ec63bbab2348&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.3%26utdid%3DYM1TIDrxrVIDAHVEV%252F%252B4M9xS%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2128167645%26sn%3D942907A2FBF1E9E83DD904CFDAF24B7C8C483276%26umidtoken%3DYM1TIDrxrVIDAHVEV%252F%252B4M9xS%26msv%3D8.0.0%26brand%3DApple%26imei%3DFB75A97C5DCF90526FBBC5060902D958FDFE57E6%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DBD8941C9-21EB-4483-9954-3A4CC847AB9C"},{"key":"shuqicjcsbody12","val":"_public=skinId%3D999%26idfa%3DBD8941C9-21EB-4483-9954-3A4CC847AB9C%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26umidtoken%3DYM1TIDrxrVIDAHVEV/%2B4M9xS%26user_id%3D2128167645%26sn%3D942907A2FBF1E9E83DD904CFDAF24B7C8C483276%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3DFB75A97C5DCF90526FBBC5060902D958FDFE57E6%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYM1TIDrxrVIDAHVEV/%2B4M9xS%26utype%3Dpre_vip%26sdk%3D13.3&deliveryId=711&key=sq_app_ad&miniWua=HHnB_sdaDt1%2B8p4MYbp2XTvYy0nbs9mq9sNu5yz5cdRou%2BQg%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=703&sign=5712D7CB02C7F01C46B0ACB64AE4EBF5&timestamp=1624079433&userId=2128167645&user_id=2128167645&wua=HIVW_Lk9%2BS2/QpZmpmnyyeKuSzFvlDp841B6W382xo2fhgkU1xZA5nPQfY6/yg29AUdpF1f47Jc3fv0OLIXbpGqZNnB3AsIK0FxzLPdDoPyTHSI0g5AR4u/RyVoSMrewKY0eJyQD4IB/faVtLAnjmpHM3Cdr/kOMC89s5FQT6tlHYjTstkHeffywgDT7rE/a/dIzeBOBttMCh8aaNle9VBibam/x6DZPmt2xsvJvaCuzlj8s%3D"},{"key":"shuqicjbody12","val":"wua=HIVW_uBPO9BTTKqpUVJ40yEUbIBKEkL%2FKhB%2FTyXpWD6rUki8FFBrvu8s7dY1k81Yo%2Buvp99pkFjd9QT8SN2wGtk%2FHDg86KkquPdDrV76%2B08nLRZqYYrouJGIVFER2C4VE9cpmRBdITWCoa8UBUuY0wvn7uCyU6eAAJoVWx28O79kXYM4qzoTas5JLrAbP%2FTKdhmaQ%2BBgFDzo5xZEePec%2F%2FQx%2B8XmclOQlUuaV%2F7RzBeuG%2FKI%3D&ua=&userId=2128167645&umidtoken=YM1TIDrxrVIDAHVEV%2F%2B4M9xS&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&asac=2A20C07RJ9F51AOEFSNHDR&timestamp=1624079437&activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&sqSv=1.0&sign=cc7f4318fb0223eb32c769080b2f1dce&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.3%26utdid%3DYM1TIDrxrVIDAHVEV%252F%252B4M9xS%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2128167645%26sn%3D942907A2FBF1E9E83DD904CFDAF24B7C8C483276%26umidtoken%3DYM1TIDrxrVIDAHVEV%252F%252B4M9xS%26msv%3D8.0.0%26brand%3DApple%26imei%3DFB75A97C5DCF90526FBBC5060902D958FDFE57E6%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DBD8941C9-21EB-4483-9954-3A4CC847AB9C"},{"key":"shuqijsspbody12","val":""},{"key":"shuqijsydurl12","val":""},{"key":"shuqijsydbody12","val":""},{"key":"shuqijsqdbody12","val":""},{"key":"shuqijsqdspyurl12","val":""},{"key":"shuqijsqdspbody12","val":""},{"key":"shuqijsrwbody12","val":""},{"key":"shuqijsfxbody12","val":""},{"key":"shuqijsbookurl12","val":""},{"key":"shuqijsbookbody12","val":""},{"key":"shuqijssprwurl12","val":""},{"key":"shuqiuserurl13","val":"https://ocean.shuqireader.com/api/jaccount/accountapi/v1/sapi/account/getBindinfo?userId=2131389239&sqSv=1.0&timestamp=1624079525&sign=7ca39333addec1dcc445d2a9005c752e&key=sq_h5_gateway"},{"key":"shuqisyurl13","val":"https://render.shuqireader.com/load/resource?sdk=13.1.2&utdid=YM1TKGuRyRkDAIpnmLsXsI4B&ustatus=0&first_placeid=111111&net_env=3g&placeid=111111&user_id=2131389239&sn=882577C715573D228D4EDC439EACEAFCF8168567&umidtoken=YM1TKGuRyRkDAIpnmLsXsI4B&msv=8.0.0&brand=Apple&imei=FBBD499DE732FA6A78AFBFEE97027C1E720DE48A&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=iOS&ver=210301&mod=iPodtouch4G&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=EFDBF899-A612-43FB-81CA-44C79F755B71"},{"key":"shuqisybody13","val":"appVer=4.3.6.0&imei=FBBD499DE732FA6A78AFBFEE97027C1E720DE48A&isNewUser=1&params=%7B%22resources%22%3A%7B%22ShuqiVipEntry%22%3A%7B%7D%2C%22personalCardConfig%22%3A%7B%7D%7D%7D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=365e4e43b1fdaf2c8fa68574d02bb949&sn=882577C715573D228D4EDC439EACEAFCF8168567&soft_id=21&timestamp=1624079468&user_id=2131389239&ver=210301"},{"key":"shuqispbody13","val":"_public=skinId%3D999%26idfa%3DEFDBF899-A612-43FB-81CA-44C79F755B71%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26umidtoken%3DYM1TKGuRyRkDAIpnmLsXsI4B%26user_id%3D2131389239%26sn%3D882577C715573D228D4EDC439EACEAFCF8168567%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3DFBBD499DE732FA6A78AFBFEE97027C1E720DE48A%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPodtouch4G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYM1TKGuRyRkDAIpnmLsXsI4B%26utype%3Dpre_vip%26sdk%3D13.1.2&deliveryId=525&key=sq_app_ad&miniWua=HHnB_3YqIugLhMoxnFOn%2B7Iv1iJeXFOGH0pyEzyX9/G3iz98%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=626&sign=5EDACAA1021C0057B4D4E858D66FCD9F&timestamp=1624079493&userId=2131389239&user_id=2131389239&wua=HIVW_bhwLY1RvG%2BgQI%2B5vPsLkS7mQd0njMUYB/6DFnVBSv5mOM3eYltjx3E5Yro/CatS9zPnvg40M5ae8bkfaTnm4AOF63RF0mEKV7zgzQPyCOb3Vdg2wfo7vWGL8nT6KWFxFmgAfdVtTI8eLs48U/1m1jYuXY4pOLPPXL5GDgtRUSE3UIkLWJcLF1%2B4zCs0EAByW%2Ba/d1TA2sZJP%2BV2ufF9Zmtq2ujUsO%2BfO9GqO6NvNJpo%3D"},{"key":"shuqiscbody13","val":""},{"key":"shuqiydbody13","val":""},{"key":"shuqiqdbody13","val":"clientTimestamp=1624079486&position=501&userId=2131389239&signInType=1&wua=HIVW_DT%2BQyIRLqqHoB91SiNGFGtVHoI%2B2TwUrAgS%2Fyt4aDRZ%2FElYINtGgvm7K94SKWFQub%2Bo5QUauGvN7UQ7nwPFPkI1e5UozjZ8cznF5KpN968kUsGWCKiUDR%2BaFpO6C1R3XkCMxqFfGyXsBaiIM3IRcvYqLYXbjBdykOh0IE2bnS3X2SFOc67BSRJ8AmJO9cWgZkrWyRMpNZ%2BA%2F0wDLDzru%2Fiy7matKhVnYqfUgx3LUmrc%3D&ua=&miniWua=HHnB_Dzdyz1ThQL3kuG9VIEF%2FeNN7WTIWVJDynaWboV9RYGw%3D&umidtoken=YM1TKGuRyRkDAIpnmLsXsI4B&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&sign=ab793356242b96ee8800ccab05f54e89&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.1.2%26utdid%3DYM1TKGuRyRkDAIpnmLsXsI4B%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2131389239%26sn%3D882577C715573D228D4EDC439EACEAFCF8168567%26umidtoken%3DYM1TKGuRyRkDAIpnmLsXsI4B%26msv%3D8.0.0%26brand%3DApple%26imei%3DFBBD499DE732FA6A78AFBFEE97027C1E720DE48A%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPodtouch4G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DEFDBF899-A612-43FB-81CA-44C79F755B71"},{"key":"shuqirwbody13","val":"serviceWorkerOn=1&stopPullRefresh=1&from=ShuqiTab&upf=20368&sdk=13.1.2&utdid=YM1TKGuRyRkDAIpnmLsXsI4B&ustatus=0&first_placeid=111111&net_env=3g&placeid=111111&user_id=2131389239&sn=882577C715573D228D4EDC439EACEAFCF8168567&umidtoken=YM1TKGuRyRkDAIpnmLsXsI4B&msv=8.0.0&brand=Apple&imei=FBBD499DE732FA6A78AFBFEE97027C1E720DE48A&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&session=&skinColor=23B383&platform=1&ver=210301&mod=iPodtouch4G&statusBarHeight=44.000000&skinVersion=1&wh=1242x2688&soft_id=21&utype=pre_vip&skinId=999&idfa=EFDBF899-A612-43FB-81CA-44C79F755B71&params=%7B%22resources%22%3A%7B%22ShuqiBsDailyTask%22%3A%7B%7D%7D%7D&userId=2131389239&placeId=111111&timestamp=1624079499&sqSv=1.0&sign=0dfb722dc93fa93a8575f7b11217ccf1&key=sq_h5_gateway&_public="},{"key":"shuqifxbody13","val":""},{"key":"shuqisprwurl13","val":"https://ocean.shuqireader.com/api/ad/adserver/v1/api/getAdInfo?appVer=4.3.6.0&placeId=111111&platform=iOS&requestSrc=h5&resourceId=626&timestamp=1624079523&user_id=2131389239&sqSv=1.0&sign=5ba0bdc28c3670b66574c5dfbf47c1e2&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.1.2%26utdid%3DYM1TKGuRyRkDAIpnmLsXsI4B%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2131389239%26sn%3D882577C715573D228D4EDC439EACEAFCF8168567%26umidtoken%3DYM1TKGuRyRkDAIpnmLsXsI4B%26msv%3D8.0.0%26brand%3DApple%26imei%3DFBBD499DE732FA6A78AFBFEE97027C1E720DE48A%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPodtouch4G%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DEFDBF899-A612-43FB-81CA-44C79F755B71"},{"key":"shuqijlbody13","val":"requestSrc=h5&userId=2131389239&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624079499&sqSv=1.0&sign=d9edc1321f08f1d15d73ff41f74bb6ab&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.1.2%26utdid%3DYM1TKGuRyRkDAIpnmLsXsI4B%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2131389239%26sn%3D882577C715573D228D4EDC439EACEAFCF8168567%26umidtoken%3DYM1TKGuRyRkDAIpnmLsXsI4B%26msv%3D8.0.0%26brand%3DApple%26imei%3DFBBD499DE732FA6A78AFBFEE97027C1E720DE48A%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPodtouch4G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DEFDBF899-A612-43FB-81CA-44C79F755B71"},{"key":"shuqisqjlbody13","val":"src=&userId=2131389239&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624079491&sqSv=1.0&sign=ea67e362d1c18c377f57d039b0014f08&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.1.2%26utdid%3DYM1TKGuRyRkDAIpnmLsXsI4B%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2131389239%26sn%3D882577C715573D228D4EDC439EACEAFCF8168567%26umidtoken%3DYM1TKGuRyRkDAIpnmLsXsI4B%26msv%3D8.0.0%26brand%3DApple%26imei%3DFBBD499DE732FA6A78AFBFEE97027C1E720DE48A%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPodtouch4G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DEFDBF899-A612-43FB-81CA-44C79F755B71"},{"key":"shuqicjyurl13","val":"https://ocean.shuqireader.com/api/activity/activity/v1/lottery/info?timestamp=1624079525&userId=2131389239&activityId=311&sqSv=1.0&sign=07ae748454a7cdaaddc5d1fa36c37e1c&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.1.2%26utdid%3DYM1TKGuRyRkDAIpnmLsXsI4B%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2131389239%26sn%3D882577C715573D228D4EDC439EACEAFCF8168567%26umidtoken%3DYM1TKGuRyRkDAIpnmLsXsI4B%26msv%3D8.0.0%26brand%3DApple%26imei%3DFBBD499DE732FA6A78AFBFEE97027C1E720DE48A%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPodtouch4G%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DEFDBF899-A612-43FB-81CA-44C79F755B71"},{"key":"shuqicjcsbody13","val":"_public=skinId%3D999%26idfa%3DEFDBF899-A612-43FB-81CA-44C79F755B71%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26umidtoken%3DYM1TKGuRyRkDAIpnmLsXsI4B%26user_id%3D2131389239%26sn%3D882577C715573D228D4EDC439EACEAFCF8168567%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3DFBBD499DE732FA6A78AFBFEE97027C1E720DE48A%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPodtouch4G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYM1TKGuRyRkDAIpnmLsXsI4B%26utype%3Dpre_vip%26sdk%3D13.1.2&deliveryId=711&key=sq_app_ad&miniWua=HHnB_WnRlbei4TPdS4a1I/QMIzyUYlA/oCJ6IDQ9JvJz8VnQ%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=703&sign=5F2D8DB4F408F0FAC05B7F9A0A9BF91D&timestamp=1624079506&userId=2131389239&user_id=2131389239&wua=HIVW_lW2GjdL1%2BkBzETYkYHib4KlXqhUPq8iwn11lZ9KKuEqOeB2ymG4VAxSUba4MBUhKzH9FpkKUN1EDnftnSbPLtgclVqX7urexikDobO5DFISgBPy5X8zil6BKFwAC8nwg2HcnZoNjAFqDDEE1f1Me0ehclZbaPSjzvOUhP5a2ZAzfwZRljl9jfAZh0Uq%2BOWuJJq%2B2yY3sdT9/QfczcU4d6dNUNQ%2ByV1wR6Up28vAkER4%3D"},{"key":"shuqicjbody13","val":"wua=HIVW_fMENtlOYX4i36qGzCMNTNzJbAAZOvxblJ0BdTXiCw8qRtG%2Fe9EwqDm%2BAth0%2FXacKW7sxqnNMLAdXjlWtHHNxPbrMbd6QNu36cHrDL%2BZ%2BZkM9lkNGvtStf7DzU2zVdf7YgLQGYKsWwd4KhrfKgLXG%2BzQwKnFxH8z2sDLtecIkVOwIk2u4m7Wl9MQaOiJvk%2BR%2FbGcaOBX1U7BBXVAlHbxKyzyjH3JMC%2FMACWge4gD1iB4%3D&ua=&userId=2131389239&umidtoken=YM1TKGuRyRkDAIpnmLsXsI4B&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&asac=2A20C07RJ9F51AOEFSNHDR&timestamp=1624079509&activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&sqSv=1.0&sign=3b470ec8fd47b9c98bd3b34777180854&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.1.2%26utdid%3DYM1TKGuRyRkDAIpnmLsXsI4B%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2131389239%26sn%3D882577C715573D228D4EDC439EACEAFCF8168567%26umidtoken%3DYM1TKGuRyRkDAIpnmLsXsI4B%26msv%3D8.0.0%26brand%3DApple%26imei%3DFBBD499DE732FA6A78AFBFEE97027C1E720DE48A%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPodtouch4G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DEFDBF899-A612-43FB-81CA-44C79F755B71"},{"key":"shuqijsspbody13","val":""},{"key":"shuqijsydurl13","val":""},{"key":"shuqijsydbody13","val":""},{"key":"shuqijsqdbody13","val":""},{"key":"shuqijsqdspyurl13","val":""},{"key":"shuqijsqdspbody13","val":""},{"key":"shuqijsrwbody13","val":""},{"key":"shuqijsfxbody13","val":""},{"key":"shuqijsbookurl13","val":""},{"key":"shuqijsbookbody13","val":""},{"key":"shuqijssprwurl13","val":""},{"key":"shuqiuserurl14","val":"https://ocean.shuqireader.com/api/jaccount/accountapi/v1/sapi/account/getBindinfo?userId=2129413740&sqSv=1.0&timestamp=1624079604&sign=d1b4d8f9436f7df87e9da9b255c27606&key=sq_h5_gateway"},{"key":"shuqisyurl14","val":"https://render.shuqireader.com/load/resource?sdk=13.1.2&utdid=YM1TMcdo4EEDAHwH8BGZyiqK&ustatus=0&first_placeid=111111&net_env=3g&placeid=111111&user_id=2129413740&sn=7FAB5C1D752D6D96C85E4089EE63B0F41E1711F6&umidtoken=YM1TMcdo4EEDAHwH8BGZyiqK&msv=8.0.0&brand=Apple&imei=29A18784CB80D743FD56D1A005165068E38E49CA&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&session=&skinColor=23B383&platform=iOS&ver=210301&mod=UnknowniPad&statusBarHeight=44.000000&skinVersion=1&wh=1242x2688&soft_id=21&utype=pre_vip&skinId=999&idfa=2270EC09-7A29-4056-B54A-02F8F19713E0"},{"key":"shuqisybody14","val":"appVer=4.3.6.0&imei=29A18784CB80D743FD56D1A005165068E38E49CA&isNewUser=1&params=%7B%22resources%22%3A%7B%22ShuqiVipEntry%22%3A%7B%7D%2C%22personalCardConfig%22%3A%7B%7D%7D%7D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=bb1d63f3dc6327f522273f5d4328a057&sn=7FAB5C1D752D6D96C85E4089EE63B0F41E1711F6&soft_id=21&timestamp=1624079545&user_id=2129413740&ver=210301"},{"key":"shuqispbody14","val":"_public=skinId%3D999%26idfa%3D2270EC09-7A29-4056-B54A-02F8F19713E0%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26umidtoken%3DYM1TMcdo4EEDAHwH8BGZyiqK%26user_id%3D2129413740%26sn%3D7FAB5C1D752D6D96C85E4089EE63B0F41E1711F6%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D29A18784CB80D743FD56D1A005165068E38E49CA%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYM1TMcdo4EEDAHwH8BGZyiqK%26utype%3Dpre_vip%26sdk%3D13.1.2&deliveryId=525&key=sq_app_ad&miniWua=HHnB_7s74Bg6N38XkYRyVJHG/0E9t39n5h%2B3Id9xP2EsSPn8%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=626&sign=9A02833C05F3E043EB1AD916CD608963&timestamp=1624079570&userId=2129413740&user_id=2129413740&wua=HIVW_lD75g9ijuJkggbNV3oJt21ziHhZug2y9FpZBJc3LUmQWftCtAfVtzIlV1HmXb1QHp3CCAd2xFbUIsdcT0E8XgEAb5ma4FAMvgW%2Bn/xWzJ0S3GRnOXJrMJLhxFtqj5oM5KycvDIQ2VqJLD9yqubhmqfRvugSlPvrgSlNxmZ3ngRbF7Uyx4PgTnz1NU2xUZE2/kMyVvGBciMWqMjJmsB46ukz7NwDZlUeznEoXCnfKQhY%3D"},{"key":"shuqiscbody14","val":""},{"key":"shuqiydbody14","val":""},{"key":"shuqiqdbody14","val":"clientTimestamp=1624079560&position=501&userId=2129413740&signInType=1&wua=HIVW_YqbJ5hkmiGNOml85ftihFCv9%2FVElmz7sd3mlGt0VgLgoJAOFSyS3bA0xqJ7MtOlh7k1KODwtDl1JjSVziXU1S4%2B%2BsDadaNsFOuxGw1TuU7vHcSs0S549MzDVPetbbB3GtlEVHBZv3jz5k1ASH6Mw5DSPV2R06TlLg3%2BoAj5zzNQxWtCn34W6WZ%2F1KLC4JGQBF1DSKgGUC4rQnqXCwjALIWaR3gvAbeWmk4MZ%2B4uvfKc%3D&ua=&miniWua=HHnB_CHvhZ%2Fb6MHFJ9yWLfz7tQgxUlW8Joe421%2BaDcIC%2BA7k%3D&umidtoken=YM1TMcdo4EEDAHwH8BGZyiqK&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&sign=e6126e3660a289ea9ce51925cb19f874&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.1.2%26utdid%3DYM1TMcdo4EEDAHwH8BGZyiqK%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2129413740%26sn%3D7FAB5C1D752D6D96C85E4089EE63B0F41E1711F6%26umidtoken%3DYM1TMcdo4EEDAHwH8BGZyiqK%26msv%3D8.0.0%26brand%3DApple%26imei%3D29A18784CB80D743FD56D1A005165068E38E49CA%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D2270EC09-7A29-4056-B54A-02F8F19713E0"},{"key":"shuqirwbody14","val":"serviceWorkerOn=1&stopPullRefresh=1&from=ShuqiTab&upf=20368&sdk=13.1.2&utdid=YM1TMcdo4EEDAHwH8BGZyiqK&ustatus=0&first_placeid=111111&net_env=3g&placeid=111111&user_id=2129413740&sn=7FAB5C1D752D6D96C85E4089EE63B0F41E1711F6&umidtoken=YM1TMcdo4EEDAHwH8BGZyiqK&msv=8.0.0&brand=Apple&imei=29A18784CB80D743FD56D1A005165068E38E49CA&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=1&ver=210301&mod=UnknowniPad&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=2270EC09-7A29-4056-B54A-02F8F19713E0&params=%7B%22resources%22%3A%7B%22ShuqiBsDailyTask%22%3A%7B%7D%7D%7D&userId=2129413740&placeId=111111&timestamp=1624079575&sqSv=1.0&sign=57826bb8dcdf2b6890299c2379d47bc9&key=sq_h5_gateway&_public="},{"key":"shuqifxbody14","val":""},{"key":"shuqisprwurl14","val":"https://ocean.shuqireader.com/api/ad/adserver/v1/api/getAdInfo?appVer=4.3.6.0&placeId=111111&platform=iOS&requestSrc=h5&resourceId=626&timestamp=1624079605&user_id=2129413740&sqSv=1.0&sign=8bb08c3aa3523c3acd457ce6588d5c61&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.1.2%26utdid%3DYM1TMcdo4EEDAHwH8BGZyiqK%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2129413740%26sn%3D7FAB5C1D752D6D96C85E4089EE63B0F41E1711F6%26umidtoken%3DYM1TMcdo4EEDAHwH8BGZyiqK%26msv%3D8.0.0%26brand%3DApple%26imei%3D29A18784CB80D743FD56D1A005165068E38E49CA%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D2270EC09-7A29-4056-B54A-02F8F19713E0"},{"key":"shuqijlbody14","val":"requestSrc=h5&userId=2129413740&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624079575&sqSv=1.0&sign=b31ae60ba5c9965524a4d4f603512e48&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.1.2%26utdid%3DYM1TMcdo4EEDAHwH8BGZyiqK%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2129413740%26sn%3D7FAB5C1D752D6D96C85E4089EE63B0F41E1711F6%26umidtoken%3DYM1TMcdo4EEDAHwH8BGZyiqK%26msv%3D8.0.0%26brand%3DApple%26imei%3D29A18784CB80D743FD56D1A005165068E38E49CA%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D2270EC09-7A29-4056-B54A-02F8F19713E0"},{"key":"shuqisqjlbody14","val":"src=&userId=2129413740&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624079566&sqSv=1.0&sign=376f4b428e34443eaa453d095239850f&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.1.2%26utdid%3DYM1TMcdo4EEDAHwH8BGZyiqK%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2129413740%26sn%3D7FAB5C1D752D6D96C85E4089EE63B0F41E1711F6%26umidtoken%3DYM1TMcdo4EEDAHwH8BGZyiqK%26msv%3D8.0.0%26brand%3DApple%26imei%3D29A18784CB80D743FD56D1A005165068E38E49CA%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D2270EC09-7A29-4056-B54A-02F8F19713E0"},{"key":"shuqicjyurl14","val":"https://ocean.shuqireader.com/api/activity/activity/v1/lottery/info?timestamp=1624079607&userId=2129413740&activityId=311&sqSv=1.0&sign=a7b83f772d1c1b2c2ed0768638081d53&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.1.2%26utdid%3DYM1TMcdo4EEDAHwH8BGZyiqK%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2129413740%26sn%3D7FAB5C1D752D6D96C85E4089EE63B0F41E1711F6%26umidtoken%3DYM1TMcdo4EEDAHwH8BGZyiqK%26msv%3D8.0.0%26brand%3DApple%26imei%3D29A18784CB80D743FD56D1A005165068E38E49CA%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D2270EC09-7A29-4056-B54A-02F8F19713E0"},{"key":"shuqicjcsbody14","val":"_public=skinId%3D999%26idfa%3D2270EC09-7A29-4056-B54A-02F8F19713E0%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26umidtoken%3DYM1TMcdo4EEDAHwH8BGZyiqK%26user_id%3D2129413740%26sn%3D7FAB5C1D752D6D96C85E4089EE63B0F41E1711F6%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D29A18784CB80D743FD56D1A005165068E38E49CA%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYM1TMcdo4EEDAHwH8BGZyiqK%26utype%3Dpre_vip%26sdk%3D13.1.2&deliveryId=711&key=sq_app_ad&miniWua=HHnB_SnwqfHltrk3Qmj6irH0BxJICcDbTmk060/fGnQ7hmPU%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=703&sign=B5AA234BC9212A8C7DC9390B925B89E0&timestamp=1624079589&userId=2129413740&user_id=2129413740&wua=HIVW_NT4hUlmfi%2BdzRhRUqsQ19mpFVA5%2BrzMMluNvJJ4N531ZVIdFodvwfX2SuKVhXDVODtNqgpjOsKbF2Iu4PbNr76llVcLrNA2X7iQw6ader1GqTDD17PjQNO564zFutqiT6zeMW1vBFNx7PHkB51kOANqYpZaX7mLU/5gu5RZx48kruFhXFc8T0GWN28wiKxZQTtBcpD3ASwhY4jAtmXDjib/aGOECxF5qDKzF6PmyYNg%3D"},{"key":"shuqicjbody14","val":"wua=HIVW_1%2F9hiacGN%2Bexm1Xu8GrhgKgg98DaWgE%2B%2B5KgyZD0s6n5aCj7r%2FedIjYb07FJcWtr3uZzn3DMubR%2FOKVla705WGqeIl8sYUyye2H13FFDLpwsm7wuut6y6lRGV8HHu3h10CiTnwSi7gnFHdihRYibw5%2FcghlqM8Ky8kthnxFwnY6ppfN89B3SBxe4xg7i5z8EdQ3BkGmcEFny6DGlDDaVMXw%2FOzR%2BDyqFQeFAE2yM5BA%3D&ua=&userId=2129413740&umidtoken=YM1TMcdo4EEDAHwH8BGZyiqK&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&asac=2A20C07RJ9F51AOEFSNHDR&timestamp=1624079595&activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&sqSv=1.0&sign=319ea82452aa54491e962db35dbb23cb&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.1.2%26utdid%3DYM1TMcdo4EEDAHwH8BGZyiqK%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2129413740%26sn%3D7FAB5C1D752D6D96C85E4089EE63B0F41E1711F6%26umidtoken%3DYM1TMcdo4EEDAHwH8BGZyiqK%26msv%3D8.0.0%26brand%3DApple%26imei%3D29A18784CB80D743FD56D1A005165068E38E49CA%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D2270EC09-7A29-4056-B54A-02F8F19713E0"},{"key":"shuqijsspbody14","val":""},{"key":"shuqijsydurl14","val":""},{"key":"shuqijsydbody14","val":""},{"key":"shuqijsqdbody14","val":""},{"key":"shuqijsqdspyurl14","val":""},{"key":"shuqijsqdspbody14","val":""},{"key":"shuqijsrwbody14","val":""},{"key":"shuqijsfxbody14","val":""},{"key":"shuqijsbookurl14","val":""},{"key":"shuqijsbookbody14","val":""},{"key":"shuqijssprwurl14","val":""},{"key":"shuqiuserurl15","val":"https://ocean.shuqireader.com/api/jaccount/accountapi/v1/sapi/account/getBindinfo?userId=2128464761&sqSv=1.0&timestamp=1624079687&sign=91215128c2bcb04224e0fb0bb010c6c5&key=sq_h5_gateway"},{"key":"shuqisyurl15","val":"https://render.shuqireader.com/load/resource?sdk=13.1&utdid=YM19EnLAs9wDAPs7Z%2F9zEsX1&ustatus=0&first_placeid=111111&net_env=3g&placeid=111111&user_id=2128464761&sn=4C5177CA862C53AD7D54A0B6DF39907B4E37902D&umidtoken=YM19EnLAs9wDAPs7Z%2F9zEsX1&msv=8.0.0&brand=Apple&imei=DF066CFA8FF9D66FF5CB5A36AA08477E9092DFF1&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=iOS&ver=210301&mod=iPhone7plus&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=C48161AB-AC0E-4101-85F6-EF31B715F8CC"},{"key":"shuqisybody15","val":"appVer=4.3.6.0&imei=DF066CFA8FF9D66FF5CB5A36AA08477E9092DFF1&isNewUser=1&params=%7B%22resources%22%3A%7B%22ShuqiVipEntry%22%3A%7B%7D%2C%22personalCardConfig%22%3A%7B%7D%7D%7D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=4022afddd7ef485bc8d06e2d1f17fbe3&sn=4C5177CA862C53AD7D54A0B6DF39907B4E37902D&soft_id=21&timestamp=1624079637&user_id=2128464761&ver=210301"},{"key":"shuqispbody15","val":"_public=skinId%3D999%26idfa%3DC48161AB-AC0E-4101-85F6-EF31B715F8CC%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26umidtoken%3DYM19EnLAs9wDAPs7Z/9zEsX1%26user_id%3D2128464761%26sn%3D4C5177CA862C53AD7D54A0B6DF39907B4E37902D%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3DDF066CFA8FF9D66FF5CB5A36AA08477E9092DFF1%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhone7plus%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYM19EnLAs9wDAPs7Z/9zEsX1%26utype%3Dpre_vip%26sdk%3D13.1&deliveryId=525&key=sq_app_ad&miniWua=HHnB_zC1uPUAZDs7HtlWKVzNbLFlh5FlB6dvNUWN6AfUY2WY%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=626&sign=FBEB15353016948B59EE6844C8A19552&timestamp=1624079662&userId=2128464761&user_id=2128464761&wua=HIVW_gTAyu15e11MfXMLMtqwadnz6mDbELqVtZZM5wIuvF3dYncXKXEQBaPsdKRr2/UlCu/NVxhfxr8hTm9WqUrqILKHgy0GxlKM9gtiZZaLlKyOEwSS8ML8lXHNcnDscdPEiqzYdVnB7Dzg3BmlTbkjTfRyUNtfuJYYSLJjgX54F/iWrtC76%2BlLv9pHeoIYnLw4P22YAChW4BI85vENpK%2BiH3cNaXPKtzqSzi/zj2LEOdMc%3D"},{"key":"shuqiscbody15","val":""},{"key":"shuqiydbody15","val":""},{"key":"shuqiqdbody15","val":"clientTimestamp=1624079653&position=501&userId=2128464761&signInType=1&wua=HIVW_lH4DyRlvf%2FKgDfraNbgMTUmaElhj1eV3Eaqd%2B5lcfnX1KtI2xQ0e9lx6QiIurijzJx7WTLMwj%2B4FJwphXjHBOMlywhJRsMtjFDE%2F%2BKe6Ep5Yv7bU2IdP40%2FsN0LH8%2FpcvhrBB1adG1iFK0G%2FsPpdZtFnyKk5XDp1nZkfPxLWiOqesPbKFgvzF91bV%2BNcuoB7WHjUoCfpr%2FxzHJirL9BynAVZF30NVQ8Glyy3C%2BmvJVA%3D&ua=&miniWua=HHnB_EWClFhVlvipvF4lxZVPIcpDbl9erDi1HDRhM7oGS3x8%3D&umidtoken=YM19EnLAs9wDAPs7Z%2F9zEsX1&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&sign=fd710a52223ac02ff4ca7867f6854962&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.1%26utdid%3DYM19EnLAs9wDAPs7Z%252F9zEsX1%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2128464761%26sn%3D4C5177CA862C53AD7D54A0B6DF39907B4E37902D%26umidtoken%3DYM19EnLAs9wDAPs7Z%252F9zEsX1%26msv%3D8.0.0%26brand%3DApple%26imei%3DDF066CFA8FF9D66FF5CB5A36AA08477E9092DFF1%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone7plus%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DC48161AB-AC0E-4101-85F6-EF31B715F8CC"},{"key":"shuqirwbody15","val":"serviceWorkerOn=1&stopPullRefresh=1&from=ShuqiTab&upf=20368&sdk=13.1&utdid=YM19EnLAs9wDAPs7Z%2F9zEsX1&ustatus=0&first_placeid=111111&net_env=3g&placeid=111111&user_id=2128464761&sn=4C5177CA862C53AD7D54A0B6DF39907B4E37902D&umidtoken=YM19EnLAs9wDAPs7Z%2F9zEsX1&msv=8.0.0&brand=Apple&imei=DF066CFA8FF9D66FF5CB5A36AA08477E9092DFF1&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=1&ver=210301&mod=iPhone7plus&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=C48161AB-AC0E-4101-85F6-EF31B715F8CC&params=%7B%22resources%22%3A%7B%22ShuqiBsDailyTask%22%3A%7B%7D%7D%7D&userId=2128464761&placeId=111111&timestamp=1624079666&sqSv=1.0&sign=8be491e7a04dcf3f871eb3c658a60e95&key=sq_h5_gateway&_public="},{"key":"shuqifxbody15","val":""},{"key":"shuqisprwurl15","val":"https://ocean.shuqireader.com/api/ad/adserver/v1/api/getAdInfo?appVer=4.3.6.0&placeId=111111&platform=iOS&requestSrc=h5&resourceId=626&timestamp=1624079687&user_id=2128464761&sqSv=1.0&sign=abfb1ff1828fefd275a2490c58f6d0a7&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.1%26utdid%3DYM19EnLAs9wDAPs7Z%252F9zEsX1%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2128464761%26sn%3D4C5177CA862C53AD7D54A0B6DF39907B4E37902D%26umidtoken%3DYM19EnLAs9wDAPs7Z%252F9zEsX1%26msv%3D8.0.0%26brand%3DApple%26imei%3DDF066CFA8FF9D66FF5CB5A36AA08477E9092DFF1%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone7plus%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DC48161AB-AC0E-4101-85F6-EF31B715F8CC"},{"key":"shuqijlbody15","val":"requestSrc=h5&userId=2128464761&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624079666&sqSv=1.0&sign=3e79c2df36eafe271faebe8c2d3cf7fc&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.1%26utdid%3DYM19EnLAs9wDAPs7Z%252F9zEsX1%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2128464761%26sn%3D4C5177CA862C53AD7D54A0B6DF39907B4E37902D%26umidtoken%3DYM19EnLAs9wDAPs7Z%252F9zEsX1%26msv%3D8.0.0%26brand%3DApple%26imei%3DDF066CFA8FF9D66FF5CB5A36AA08477E9092DFF1%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone7plus%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DC48161AB-AC0E-4101-85F6-EF31B715F8CC"},{"key":"shuqisqjlbody15","val":"src=&userId=2128464761&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624079660&sqSv=1.0&sign=3a178fa6edd0a6c5b31bddb0b48d59df&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.1%26utdid%3DYM19EnLAs9wDAPs7Z%252F9zEsX1%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2128464761%26sn%3D4C5177CA862C53AD7D54A0B6DF39907B4E37902D%26umidtoken%3DYM19EnLAs9wDAPs7Z%252F9zEsX1%26msv%3D8.0.0%26brand%3DApple%26imei%3DDF066CFA8FF9D66FF5CB5A36AA08477E9092DFF1%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone7plus%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DC48161AB-AC0E-4101-85F6-EF31B715F8CC"},{"key":"shuqicjyurl15","val":"https://ocean.shuqireader.com/api/activity/activity/v1/lottery/info?timestamp=1624079689&userId=2128464761&activityId=311&sqSv=1.0&sign=4f867312a7f37a90a03f900f08725cc8&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.1%26utdid%3DYM19EnLAs9wDAPs7Z%252F9zEsX1%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2128464761%26sn%3D4C5177CA862C53AD7D54A0B6DF39907B4E37902D%26umidtoken%3DYM19EnLAs9wDAPs7Z%252F9zEsX1%26msv%3D8.0.0%26brand%3DApple%26imei%3DDF066CFA8FF9D66FF5CB5A36AA08477E9092DFF1%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone7plus%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DC48161AB-AC0E-4101-85F6-EF31B715F8CC"},{"key":"shuqicjcsbody15","val":"_public=skinId%3D999%26idfa%3DC48161AB-AC0E-4101-85F6-EF31B715F8CC%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26umidtoken%3DYM19EnLAs9wDAPs7Z/9zEsX1%26user_id%3D2128464761%26sn%3D4C5177CA862C53AD7D54A0B6DF39907B4E37902D%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3DDF066CFA8FF9D66FF5CB5A36AA08477E9092DFF1%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhone7plus%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYM19EnLAs9wDAPs7Z/9zEsX1%26utype%3Dpre_vip%26sdk%3D13.1&deliveryId=711&key=sq_app_ad&miniWua=HHnB_sX1sLng9ewlIpaUPfddesQp5ZKxlOaRIopLOpbN8xSM%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=703&sign=F1ECCBE290F8F163AB80EED6716F0BB4&timestamp=1624079675&userId=2128464761&user_id=2128464761&wua=HIVW_vzVNLUQmNt5LvoJZM%2Borgj8nWLcFwrZh99VIxYGkxI6te%2BsC%2BUAU%2BOeLDQVy%2B4%2B3UrBY9/gt%2BpRav1KX8feOpHPLxTNSg/bHD%2BBc4Rw/JdLp0Rld9ZQ2ftlHKsF/FYp3aFWy1R3m0g208zbuaeDDNa9etopXmIZaQ2JH5m/WmrljTKn3mxo4Xi6V3ehvClNdqAGoym2YleBgcLIS1vuEPSK06mHkonmurMYtR5l9vhQ%3D"},{"key":"shuqicjbody15","val":"wua=HIVW_8ty9QDXGorJV4x5K49qxj%2BHHskBZ7WLrZdHPAAwd6gufCHSzqIkxCdC%2F4m4uTMrlG2w4fi4Qa4mFrBce%2B60LBgqt9PUcveTANg7ehKgzB43VfY5eOZoKO8xQeUvbtH%2Bd16bF3GkyoCMMj5qQDUGLNvbsPfCU9dFg%2BWhB29QY6Wxv7EIwN%2Bs7JGfqNbVPfRUbzTQ%2FFZeUcrHnWaRQLtpP0r5JDL957BqAoimeLswic%2BM%3D&ua=&userId=2128464761&umidtoken=YM19EnLAs9wDAPs7Z%2F9zEsX1&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&asac=2A20C07RJ9F51AOEFSNHDR&timestamp=1624079677&activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&sqSv=1.0&sign=7cdd33bedf82f637fba10ea7fbcdb744&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.1%26utdid%3DYM19EnLAs9wDAPs7Z%252F9zEsX1%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2128464761%26sn%3D4C5177CA862C53AD7D54A0B6DF39907B4E37902D%26umidtoken%3DYM19EnLAs9wDAPs7Z%252F9zEsX1%26msv%3D8.0.0%26brand%3DApple%26imei%3DDF066CFA8FF9D66FF5CB5A36AA08477E9092DFF1%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone7plus%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DC48161AB-AC0E-4101-85F6-EF31B715F8CC"},{"key":"shuqijsspbody15","val":""},{"key":"shuqijsydurl15","val":""},{"key":"shuqijsydbody15","val":""},{"key":"shuqijsqdbody15","val":""},{"key":"shuqijsqdspyurl15","val":""},{"key":"shuqijsqdspbody15","val":""},{"key":"shuqijsrwbody15","val":""},{"key":"shuqijsfxbody15","val":""},{"key":"shuqijsbookurl15","val":""},{"key":"shuqijsbookbody15","val":""},{"key":"shuqijssprwurl15","val":""},{"key":"shuqiuserurl16","val":""},{"key":"shuqisyurl16","val":""},{"key":"shuqisybody16","val":""},{"key":"shuqispbody16","val":""},{"key":"shuqiscbody16","val":""},{"key":"shuqiydbody16","val":""},{"key":"shuqiqdbody16","val":""},{"key":"shuqirwbody16","val":""},{"key":"shuqifxbody16","val":""},{"key":"shuqisprwurl16","val":""},{"key":"shuqijlbody16","val":""},{"key":"shuqisqjlbody16","val":""},{"key":"shuqicjyurl16","val":""},{"key":"shuqicjcsbody16","val":""},{"key":"shuqicjbody16","val":""},{"key":"shuqijsspbody16","val":""},{"key":"shuqijsydurl16","val":""},{"key":"shuqijsydbody16","val":""},{"key":"shuqijsqdbody16","val":""},{"key":"shuqijsqdspyurl16","val":""},{"key":"shuqijsqdspbody16","val":""},{"key":"shuqijsrwbody16","val":""},{"key":"shuqijsfxbody16","val":""},{"key":"shuqijsbookurl16","val":""},{"key":"shuqijsbookbody16","val":""},{"key":"shuqijssprwurl16","val":""},{"key":"shuqiuserurl17","val":""},{"key":"shuqisyurl17","val":""},{"key":"shuqisybody17","val":""},{"key":"shuqispbody17","val":""},{"key":"shuqiscbody17","val":""},{"key":"shuqiydbody17","val":""},{"key":"shuqiqdbody17","val":""},{"key":"shuqirwbody17","val":""},{"key":"shuqifxbody17","val":""},{"key":"shuqisprwurl17","val":""},{"key":"shuqijlbody17","val":""},{"key":"shuqisqjlbody17","val":""},{"key":"shuqicjyurl17","val":""},{"key":"shuqicjcsbody17","val":""},{"key":"shuqicjbody17","val":""},{"key":"shuqijsspbody17","val":""},{"key":"shuqijsydurl17","val":""},{"key":"shuqijsydbody17","val":""},{"key":"shuqijsqdbody17","val":""},{"key":"shuqijsqdspyurl17","val":""},{"key":"shuqijsqdspbody17","val":""},{"key":"shuqijsrwbody17","val":""},{"key":"shuqijsfxbody17","val":""},{"key":"shuqijsbookurl17","val":""},{"key":"shuqijsbookbody17","val":""},{"key":"shuqijssprwurl17","val":""},{"key":"shuqiuserurl18","val":""},{"key":"shuqisyurl18","val":""},{"key":"shuqisybody18","val":""},{"key":"shuqispbody18","val":""},{"key":"shuqiscbody18","val":""},{"key":"shuqiydbody18","val":""},{"key":"shuqiqdbody18","val":""},{"key":"shuqirwbody18","val":""},{"key":"shuqifxbody18","val":""},{"key":"shuqisprwurl18","val":""},{"key":"shuqijlbody18","val":""},{"key":"shuqisqjlbody18","val":""},{"key":"shuqicjyurl18","val":""},{"key":"shuqicjcsbody18","val":""},{"key":"shuqicjbody18","val":""},{"key":"shuqijsspbody18","val":""},{"key":"shuqijsydurl18","val":""},{"key":"shuqijsydbody18","val":""},{"key":"shuqijsqdbody18","val":""},{"key":"shuqijsqdspyurl18","val":""},{"key":"shuqijsqdspbody18","val":""},{"key":"shuqijsrwbody18","val":""},{"key":"shuqijsfxbody18","val":""},{"key":"shuqijsbookurl18","val":""},{"key":"shuqijsbookbody18","val":""},{"key":"shuqijssprwurl18","val":""},{"key":"shuqiuserurl19","val":""},{"key":"shuqisyurl19","val":""},{"key":"shuqisybody19","val":""},{"key":"shuqispbody19","val":""},{"key":"shuqiscbody19","val":""},{"key":"shuqiydbody19","val":""},{"key":"shuqiqdbody19","val":""},{"key":"shuqirwbody19","val":""},{"key":"shuqifxbody19","val":""},{"key":"shuqisprwurl19","val":""},{"key":"shuqijlbody19","val":""},{"key":"shuqisqjlbody19","val":""},{"key":"shuqicjyurl19","val":""},{"key":"shuqicjcsbody19","val":""},{"key":"shuqicjbody19","val":""},{"key":"shuqijsspbody19","val":""},{"key":"shuqijsydurl19","val":""},{"key":"shuqijsydbody19","val":""},{"key":"shuqijsqdbody19","val":""},{"key":"shuqijsqdspyurl19","val":""},{"key":"shuqijsqdspbody19","val":""},{"key":"shuqijsrwbody19","val":""},{"key":"shuqijsfxbody19","val":""},{"key":"shuqijsbookurl19","val":""},{"key":"shuqijsbookbody19","val":""},{"key":"shuqijssprwurl19","val":""},{"key":"shuqiuserurl20","val":""},{"key":"shuqisyurl20","val":""},{"key":"shuqisybody20","val":""},{"key":"shuqispbody20","val":""},{"key":"shuqiscbody20","val":""},{"key":"shuqiydbody20","val":""},{"key":"shuqiqdbody20","val":""},{"key":"shuqirwbody20","val":""},{"key":"shuqifxbody20","val":""},{"key":"shuqisprwurl20","val":""},{"key":"shuqijlbody20","val":""},{"key":"shuqisqjlbody20","val":""},{"key":"shuqicjyurl20","val":""},{"key":"shuqicjcsbody20","val":""},{"key":"shuqicjbody20","val":""},{"key":"shuqijsspbody20","val":""},{"key":"shuqijsydurl20","val":""},{"key":"shuqijsydbody20","val":""},{"key":"shuqijsqdbody20","val":""},{"key":"shuqijsqdspyurl20","val":""},{"key":"shuqijsqdspbody20","val":""},{"key":"shuqijsrwbody20","val":""},{"key":"shuqijsfxbody20","val":""},{"key":"shuqijsbookurl20","val":""},{"key":"shuqijsbookbody20","val":""},{"key":"shuqijssprwurl20","val":""}],"sessions":[],"isLoaded":true};
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
