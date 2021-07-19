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
const COOKIE = {"id":"shuqi","name":"书旗小说APP","keys":["shuqiuserurl","shuqisyurl","shuqisybody","shuqispbody","shuqiscbody","shuqiydbody","shuqiqdbody","shuqirwbody","shuqifxbody","shuqisprwurl","shuqijlbody","shuqisqjlbody","shuqicjyurl","shuqicjcsbody","shuqicjbody","shuqijsspbody","shuqijsydurl","shuqijsydbody","shuqijsqdbody","shuqijsqdspyurl","shuqijsqdspbody","shuqijsrwbody","shuqijsfxbody","shuqijsbookurl","shuqijsbookbody","shuqijssprwurl","shuqiuserurl2","shuqisyurl2","shuqisybody2","shuqispbody2","shuqiscbody2","shuqiydbody2","shuqiqdbody2","shuqirwbody2","shuqifxbody2","shuqisprwurl2","shuqijlbody2","shuqisqjlbody2","shuqicjyurl2","shuqicjcsbody2","shuqicjbody2","shuqijsspbody2","shuqijsydurl2","shuqijsydbody2","shuqijsqdbody2","shuqijsqdspyurl2","shuqijsqdspbody2","shuqijsrwbody2","shuqijsfxbody2","shuqijsbookurl2","shuqijsbookbody2","shuqijssprwurl2","shuqiuserurl3","shuqisyurl3","shuqisybody3","shuqispbody3","shuqiscbody3","shuqiydbody3","shuqiqdbody3","shuqirwbody3","shuqifxbody3","shuqisprwurl3","shuqijlbody3","shuqisqjlbody3","shuqicjyurl3","shuqicjcsbody3","shuqicjbody3","shuqijsspbody3","shuqijsydurl3","shuqijsydbody3","shuqijsqdbody3","shuqijsqdspyurl3","shuqijsqdspbody3","shuqijsrwbody3","shuqijsfxbody3","shuqijsbookurl3","shuqijsbookbody3","shuqijssprwurl3","shuqiuserurl4","shuqisyurl4","shuqisybody4","shuqispbody4","shuqiscbody4","shuqiydbody4","shuqiqdbody4","shuqirwbody4","shuqifxbody4","shuqisprwurl4","shuqijlbody4","shuqisqjlbody4","shuqicjyurl4","shuqicjcsbody4","shuqicjbody4","shuqijsspbody4","shuqijsydurl4","shuqijsydbody4","shuqijsqdbody4","shuqijsqdspyurl4","shuqijsqdspbody4","shuqijsrwbody4","shuqijsfxbody4","shuqijsbookurl4","shuqijsbookbody4","shuqijssprwurl4","shuqiuserurl5","shuqisyurl5","shuqisybody5","shuqispbody5","shuqiscbody5","shuqiydbody5","shuqiqdbody5","shuqirwbody5","shuqifxbody5","shuqisprwurl5","shuqijlbody5","shuqisqjlbody5","shuqicjyurl5","shuqicjcsbody5","shuqicjbody5","shuqijsspbody5","shuqijsydurl5","shuqijsydbody5","shuqijsqdbody5","shuqijsqdspyurl5","shuqijsqdspbody5","shuqijsrwbody5","shuqijsfxbody5","shuqijsbookurl5","shuqijsbookbody5","shuqijssprwurl5","shuqiuserurl6","shuqisyurl6","shuqisybody6","shuqispbody6","shuqiscbody6","shuqiydbody6","shuqiqdbody6","shuqirwbody6","shuqifxbody6","shuqisprwurl6","shuqijlbody6","shuqisqjlbody6","shuqicjyurl6","shuqicjcsbody6","shuqicjbody6","shuqijsspbody6","shuqijsydurl6","shuqijsydbody6","shuqijsqdbody6","shuqijsqdspyurl6","shuqijsqdspbody6","shuqijsrwbody6","shuqijsfxbody6","shuqijsbookurl6","shuqijsbookbody6","shuqijssprwurl6","shuqiuserurl7","shuqisyurl7","shuqisybody7","shuqispbody7","shuqiscbody7","shuqiydbody7","shuqiqdbody7","shuqirwbody7","shuqifxbody7","shuqisprwurl7","shuqijlbody7","shuqisqjlbody7","shuqicjyurl7","shuqicjcsbody7","shuqicjbody7","shuqijsspbody7","shuqijsydurl7","shuqijsydbody7","shuqijsqdbody7","shuqijsqdspyurl7","shuqijsqdspbody7","shuqijsrwbody7","shuqijsfxbody7","shuqijsbookurl7","shuqijsbookbody7","shuqijssprwurl7","shuqiuserurl8","shuqisyurl8","shuqisybody8","shuqispbody8","shuqiscbody8","shuqiydbody8","shuqiqdbody8","shuqirwbody8","shuqifxbody8","shuqisprwurl8","shuqijlbody8","shuqisqjlbody8","shuqicjyurl8","shuqicjcsbody8","shuqicjbody8","shuqijsspbody8","shuqijsydurl8","shuqijsydbody8","shuqijsqdbody8","shuqijsqdspyurl8","shuqijsqdspbody8","shuqijsrwbody8","shuqijsfxbody8","shuqijsbookurl8","shuqijsbookbody8","shuqijssprwurl8","shuqiuserurl9","shuqisyurl9","shuqisybody9","shuqispbody9","shuqiscbody9","shuqiydbody9","shuqiqdbody9","shuqirwbody9","shuqifxbody9","shuqisprwurl9","shuqijlbody9","shuqisqjlbody9","shuqicjyurl9","shuqicjcsbody9","shuqicjbody9","shuqijsspbody9","shuqijsydurl9","shuqijsydbody9","shuqijsqdbody9","shuqijsqdspyurl9","shuqijsqdspbody9","shuqijsrwbody9","shuqijsfxbody9","shuqijsbookurl9","shuqijsbookbody9","shuqijssprwurl9","shuqiuserurl10","shuqisyurl10","shuqisybody10","shuqispbody10","shuqiscbody10","shuqiydbody10","shuqiqdbody10","shuqirwbody10","shuqifxbody10","shuqisprwurl10","shuqijlbody10","shuqisqjlbody10","shuqicjyurl10","shuqicjcsbody10","shuqicjbody10","shuqijsspbody10","shuqijsydurl10","shuqijsydbody10","shuqijsqdbody10","shuqijsqdspyurl10","shuqijsqdspbody10","shuqijsrwbody10","shuqijsfxbody10","shuqijsbookurl10","shuqijsbookbody10","shuqijssprwurl10","shuqiuserurl11","shuqisyurl11","shuqisybody11","shuqispbody11","shuqiscbody11","shuqiydbody11","shuqiqdbody11","shuqirwbody11","shuqifxbody11","shuqisprwurl11","shuqijlbody11","shuqisqjlbody11","shuqicjyurl11","shuqicjcsbody11","shuqicjbody11","shuqijsspbody11","shuqijsydurl11","shuqijsydbody11","shuqijsqdbody11","shuqijsqdspyurl11","shuqijsqdspbody11","shuqijsrwbody11","shuqijsfxbody11","shuqijsbookurl11","shuqijsbookbody11","shuqijssprwurl11","shuqiuserurl12","shuqisyurl12","shuqisybody12","shuqispbody12","shuqiscbody12","shuqiydbody12","shuqiqdbody12","shuqirwbody12","shuqifxbody12","shuqisprwurl12","shuqijlbody12","shuqisqjlbody12","shuqicjyurl12","shuqicjcsbody12","shuqicjbody12","shuqijsspbody12","shuqijsydurl12","shuqijsydbody12","shuqijsqdbody12","shuqijsqdspyurl12","shuqijsqdspbody12","shuqijsrwbody12","shuqijsfxbody12","shuqijsbookurl12","shuqijsbookbody12","shuqijssprwurl12","shuqiuserurl13","shuqisyurl13","shuqisybody13","shuqispbody13","shuqiscbody13","shuqiydbody13","shuqiqdbody13","shuqirwbody13","shuqifxbody13","shuqisprwurl13","shuqijlbody13","shuqisqjlbody13","shuqicjyurl13","shuqicjcsbody13","shuqicjbody13","shuqijsspbody13","shuqijsydurl13","shuqijsydbody13","shuqijsqdbody13","shuqijsqdspyurl13","shuqijsqdspbody13","shuqijsrwbody13","shuqijsfxbody13","shuqijsbookurl13","shuqijsbookbody13","shuqijssprwurl13","shuqiuserurl14","shuqisyurl14","shuqisybody14","shuqispbody14","shuqiscbody14","shuqiydbody14","shuqiqdbody14","shuqirwbody14","shuqifxbody14","shuqisprwurl14","shuqijlbody14","shuqisqjlbody14","shuqicjyurl14","shuqicjcsbody14","shuqicjbody14","shuqijsspbody14","shuqijsydurl14","shuqijsydbody14","shuqijsqdbody14","shuqijsqdspyurl14","shuqijsqdspbody14","shuqijsrwbody14","shuqijsfxbody14","shuqijsbookurl14","shuqijsbookbody14","shuqijssprwurl14","shuqiuserurl15","shuqisyurl15","shuqisybody15","shuqispbody15","shuqiscbody15","shuqiydbody15","shuqiqdbody15","shuqirwbody15","shuqifxbody15","shuqisprwurl15","shuqijlbody15","shuqisqjlbody15","shuqicjyurl15","shuqicjcsbody15","shuqicjbody15","shuqijsspbody15","shuqijsydurl15","shuqijsydbody15","shuqijsqdbody15","shuqijsqdspyurl15","shuqijsqdspbody15","shuqijsrwbody15","shuqijsfxbody15","shuqijsbookurl15","shuqijsbookbody15","shuqijssprwurl15","shuqiuserurl16","shuqisyurl16","shuqisybody16","shuqispbody16","shuqiscbody16","shuqiydbody16","shuqiqdbody16","shuqirwbody16","shuqifxbody16","shuqisprwurl16","shuqijlbody16","shuqisqjlbody16","shuqicjyurl16","shuqicjcsbody16","shuqicjbody16","shuqijsspbody16","shuqijsydurl16","shuqijsydbody16","shuqijsqdbody16","shuqijsqdspyurl16","shuqijsqdspbody16","shuqijsrwbody16","shuqijsfxbody16","shuqijsbookurl16","shuqijsbookbody16","shuqijssprwurl16","shuqiuserurl17","shuqisyurl17","shuqisybody17","shuqispbody17","shuqiscbody17","shuqiydbody17","shuqiqdbody17","shuqirwbody17","shuqifxbody17","shuqisprwurl17","shuqijlbody17","shuqisqjlbody17","shuqicjyurl17","shuqicjcsbody17","shuqicjbody17","shuqijsspbody17","shuqijsydurl17","shuqijsydbody17","shuqijsqdbody17","shuqijsqdspyurl17","shuqijsqdspbody17","shuqijsrwbody17","shuqijsfxbody17","shuqijsbookurl17","shuqijsbookbody17","shuqijssprwurl17","shuqiuserurl18","shuqisyurl18","shuqisybody18","shuqispbody18","shuqiscbody18","shuqiydbody18","shuqiqdbody18","shuqirwbody18","shuqifxbody18","shuqisprwurl18","shuqijlbody18","shuqisqjlbody18","shuqicjyurl18","shuqicjcsbody18","shuqicjbody18","shuqijsspbody18","shuqijsydurl18","shuqijsydbody18","shuqijsqdbody18","shuqijsqdspyurl18","shuqijsqdspbody18","shuqijsrwbody18","shuqijsfxbody18","shuqijsbookurl18","shuqijsbookbody18","shuqijssprwurl18","shuqiuserurl19","shuqisyurl19","shuqisybody19","shuqispbody19","shuqiscbody19","shuqiydbody19","shuqiqdbody19","shuqirwbody19","shuqifxbody19","shuqisprwurl19","shuqijlbody19","shuqisqjlbody19","shuqicjyurl19","shuqicjcsbody19","shuqicjbody19","shuqijsspbody19","shuqijsydurl19","shuqijsydbody19","shuqijsqdbody19","shuqijsqdspyurl19","shuqijsqdspbody19","shuqijsrwbody19","shuqijsfxbody19","shuqijsbookurl19","shuqijsbookbody19","shuqijssprwurl19","shuqiuserurl20","shuqisyurl20","shuqisybody20","shuqispbody20","shuqiscbody20","shuqiydbody20","shuqiqdbody20","shuqirwbody20","shuqifxbody20","shuqisprwurl20","shuqijlbody20","shuqisqjlbody20","shuqicjyurl20","shuqicjcsbody20","shuqicjbody20","shuqijsspbody20","shuqijsydurl20","shuqijsydbody20","shuqijsqdbody20","shuqijsqdspyurl20","shuqijsqdspbody20","shuqijsrwbody20","shuqijsfxbody20","shuqijsbookurl20","shuqijsbookbody20","shuqijssprwurl20"],"author":"@ziye","settings":[{"id":"shuqiSuffix","name":"当前账号","val":"9","type":"number","desc":"当前抓取ck记录的账号序号，如：1、2、3、"},{"id":"shuqiCount","name":"账号个数","val":"15","type":"number","desc":"指定任务最多跑几个账号，根据抓取的账号数据个数来设值"},{"id":"shuqiXH","name":"循环获取CK","val":"0","type":"number","desc":"0关闭 1开启,默认关闭"},{"id":"shuqiSC","name":"单刷时长控制","val":"0","type":"number","desc":"0关闭 1开启,默认关闭"},{"id":"shuqiTXTX","name":"提现提醒","val":"10","type":"number","desc":"0关闭 设置余额大于多少提醒"},{"id":"shuqinotifyttt","name":"推送控制","val":"1","type":"number","desc":"0关闭，1推送,默认12点以及23点推送"},{"id":"shuqinotifyInterval","name":"通知控制","val":"2","type":"number","desc":"0关闭，1为 所有通知，2为 12，23 点通知，3为 6，12，18，23 点通知 "},{"id":"shuqiMinutes","name":"推送-通知 分钟控制","val":"59","type":"number","desc":"推送以及通知控制在什么分钟段，可设置0-59,默认0到10"}],"repo":"https://cdn.jsdelivr.net/gh/ziye888/JavaScript@main/Task/shuqi.js","icons":["https://cdn.jsdelivr.net/gh/ziye888/JavaScript@main/Task/shuqi.png","https://cdn.jsdelivr.net/gh/ziye888/JavaScript@main/Task/shuqi.png"],"script":"https://cdn.jsdelivr.net/gh/ziye888/JavaScript@main/Task/shuqi.js","icon":"https://cdn.jsdelivr.net/gh/ziye888/JavaScript@main/Task/shuqi.png","favIcon":"mdi-star","favIconColor":"primary","datas":[{"key":"shuqiuserurl","val":"https://ocean.shuqireader.com/api/jaccount/accountapi/v1/sapi/account/getBindinfo?userId=2125119307&sqSv=1.0&timestamp=1624006209&sign=a7997a0af4525910878718842e04c979&key=sq_h5_gateway"},{"key":"shuqisyurl","val":"https://render.shuqireader.com/load/resource?sdk=13.2&utdid=YMdPmgaCrN0DAHWfFmY%2F%2FQ7H&ustatus=0&first_placeid=111111&net_env=wifi&placeid=111111&user_id=2125119307&sn=41FA973D323238163FAA290E20A2D0F36C4914B3&umidtoken=YMdPmgaCrN0DAHWfFmY%2F%2FQ7H&msv=8.0.0&brand=Apple&imei=47BEE52110C2AA7A1F8AF66C7CE6C6A810E17AB8&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=iOS&ver=210301&mod=UnknowniPad&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=AA8B04FB-F61C-45AF-A9A0-0CEC1D43183D"},{"key":"shuqisybody","val":"appVer=4.3.6.0&imei=47BEE52110C2AA7A1F8AF66C7CE6C6A810E17AB8&isNewUser=1&params=%7B%22resources%22%3A%7B%22ShuqiVipEntry%22%3A%7B%7D%2C%22personalCardConfig%22%3A%7B%7D%7D%7D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=b47094cce83dd61ead4ca2d18ab1c112&sn=41FA973D323238163FAA290E20A2D0F36C4914B3&soft_id=21&timestamp=1624006120&user_id=2125119307&ver=210301"},{"key":"shuqispbody","val":"_public=skinId%3D999%26idfa%3DAA8B04FB-F61C-45AF-A9A0-0CEC1D43183D%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26umidtoken%3DYMdPmgaCrN0DAHWfFmY//Q7H%26user_id%3D2125119307%26sn%3D41FA973D323238163FAA290E20A2D0F36C4914B3%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D47BEE52110C2AA7A1F8AF66C7CE6C6A810E17AB8%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYMdPmgaCrN0DAHWfFmY//Q7H%26utype%3Dpre_vip%26sdk%3D13.2&deliveryId=525&key=sq_app_ad&miniWua=HHnB_w7QXIKRS9MvU4hU2kmkjthoIKU82Gl7FoqXHhxl7wQQ%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=626&sign=68A4DF9FFAA7531CE59DFAD207C54E89&timestamp=1624006173&userId=2125119307&user_id=2125119307&wua=HIVW_hvZNq/N67T/H5%2B/HuzNFldcY/Aw7ce/4Em%2B6NI6o5cp5suGJoPd8pYTh/5Y6fggdQd51zOppjY6MIyxZ3ZFr85kqgViq7Jy%2BG/qqu%2Ba7GerpxGThcJwvWEpD5v11x%2B0YnIk028SUGNVdNTA5vz4Jmk%2B2YiUvYTtfDJlzylETAikQT0PB7bHsl8p605tToPO526iHEn0rMXccqlDwKlLQQIPl7%2BAckwfchd4hM3MV7gw%3D"},{"key":"shuqiscbody","val":"_public=skinId%253D999%2526idfa%253DAA8B04FB-F61C-45AF-A9A0-0CEC1D43183D%2526ustatus%253D0%2526first_placeid%253D111111%2526net_env%253Dwifi%2526umidtoken%253DYMdPmgaCrN0DAHWfFmY%252F%252FQ7H%2526user_id%253D2125119307%2526sn%253D41FA973D323238163FAA290E20A2D0F36C4914B3%2526placeid%253D111111%2526msv%253D8.0.0%2526brand%253DApple%2526imei%253D47BEE52110C2AA7A1F8AF66C7CE6C6A810E17AB8%2526skinVersionPrefix%253D1%2526appVer%253D4.3.6.0%2526skinActiveColor%253D0F9970%2526manufacturer%253DApple%2526skinColor%253D23B383%2526platform%253DiOS%2526ver%253D210301%2526mod%253DUnknowniPad%2526statusBarHeight%253D44.000000%2526skinVersion%253D1%2526wh%253D1242x2688%2526soft_id%253D21%2526utdid%253DYMdPmgaCrN0DAHWfFmY%252F%252FQ7H%2526utype%253Dpre_vip%2526sdk%253D13.2&key=and_log&readingList=%5B%7B%22startTime%22%3A1624006126%2C%22readObjType%22%3A1%2C%22attr%22%3A2%2C%22readObjId%22%3A%226084134%22%2C%22readChapterId%22%3A642761%2C%22readingLen%22%3A35%7D%5D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=15CA7FCFEEE747E0228BB4A7A592144E&timestamp=1624006161&user_id=2125119307"},{"key":"shuqiydbody","val":"_public=skinId%3D999%26idfa%3DAA8B04FB-F61C-45AF-A9A0-0CEC1D43183D%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26umidtoken%3DYMdPmgaCrN0DAHWfFmY//Q7H%26user_id%3D2125119307%26sn%3D41FA973D323238163FAA290E20A2D0F36C4914B3%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D47BEE52110C2AA7A1F8AF66C7CE6C6A810E17AB8%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYMdPmgaCrN0DAHWfFmY//Q7H%26utype%3Dpre_vip%26sdk%3D13.2&deliveryId=707&key=sq_app_ad&miniWua=HHnB_oBzyxpmHhQfBIMrl34ZkSuQ6HKHQERiGpAqM0OsoAls%3D&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=678&sign=D6237E26E43CF423B00A967A9E64B767&timestamp=1624006156&userId=2125119307&wua=HIVW_NhXC6owJtN6cxaGPDXV0RasYTrSHoLqEOhOVjhItzHeb3aGaWFBFVWi/Jufh4oYWj8IQsti5BP4P8g3f6zx1i9fTznzrp7d2b0foDPKteA5gtkavXa8wvsv43syKOK4803STknBGrwccf1AeFQ/0VmPF%2BCeZcnR5FdrsZ%2B%2BqOofzO4FjnbvDOlTUfDjb0Q4gekfxRL9cJCp0XuqU%2BSxYBsyGjl%2Bv01%2BM15iKWwdQb3w%3D"},{"key":"shuqiqdbody","val":"clientTimestamp=1624006168&position=501&userId=2125119307&signInType=1&wua=HIVW_MXgKhWpRgNrLOM9wH2hy%2FkqWOpVnLTpH%2B6S%2F6TZz9qIKEXRWERVF%2FX4kh3H5lN09a6%2FOCWXZ%2FzQ%2Baws%2Bt%2BOlmbDkB1N4mBMHsCEANpgDk%2FmF21D7cC8oB0VO%2BY9PvfZTTV6zNhw4M%2BvYgM%2B7ANMiq4soDX%2B6R%2BVZNVzBIIC82X%2FKDbXQt2SrGeCZugw%2F9gKRpQhSrMZI6NAjmRC4QxARg%2FXGmIQl1cjK6PTPxe%2FX1lQ%3D&ua=&miniWua=HHnB_3DC%2FfBsBe8VDP0gKitkPsN7i2%2BnAAI3VVePMrJ9iNl8%3D&umidtoken=YMdPmgaCrN0DAHWfFmY%2F%2FQ7H&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&sign=e9c95245a45a867e3462fa5d29f5dcef&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.2%26utdid%3DYMdPmgaCrN0DAHWfFmY%252F%252FQ7H%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2125119307%26sn%3D41FA973D323238163FAA290E20A2D0F36C4914B3%26umidtoken%3DYMdPmgaCrN0DAHWfFmY%252F%252FQ7H%26msv%3D8.0.0%26brand%3DApple%26imei%3D47BEE52110C2AA7A1F8AF66C7CE6C6A810E17AB8%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DAA8B04FB-F61C-45AF-A9A0-0CEC1D43183D"},{"key":"shuqirwbody","val":""},{"key":"shuqifxbody","val":""},{"key":"shuqisprwurl","val":"https://ocean.shuqireader.com/api/ad/adserver/v1/api/getAdInfo?appVer=4.3.6.0&placeId=111111&platform=iOS&requestSrc=h5&resourceId=626&timestamp=1624006207&user_id=2125119307&sqSv=1.0&sign=a435adc6783e6d7903091f21d5d65c58&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.2%26utdid%3DYMdPmgaCrN0DAHWfFmY%252F%252FQ7H%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2125119307%26sn%3D41FA973D323238163FAA290E20A2D0F36C4914B3%26umidtoken%3DYMdPmgaCrN0DAHWfFmY%252F%252FQ7H%26msv%3D8.0.0%26brand%3DApple%26imei%3D47BEE52110C2AA7A1F8AF66C7CE6C6A810E17AB8%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DAA8B04FB-F61C-45AF-A9A0-0CEC1D43183D"},{"key":"shuqijlbody","val":"requestSrc=h5&userId=2125119307&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624006177&sqSv=1.0&sign=af1ae5340e0dcb1dd5e17f8af8fcd8b5&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.2%26utdid%3DYMdPmgaCrN0DAHWfFmY%252F%252FQ7H%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2125119307%26sn%3D41FA973D323238163FAA290E20A2D0F36C4914B3%26umidtoken%3DYMdPmgaCrN0DAHWfFmY%252F%252FQ7H%26msv%3D8.0.0%26brand%3DApple%26imei%3D47BEE52110C2AA7A1F8AF66C7CE6C6A810E17AB8%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DAA8B04FB-F61C-45AF-A9A0-0CEC1D43183D"},{"key":"shuqisqjlbody","val":"src=&userId=2125119307&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624006171&sqSv=1.0&sign=82b550d053309eedf41ddd60aa5438a9&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.2%26utdid%3DYMdPmgaCrN0DAHWfFmY%252F%252FQ7H%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2125119307%26sn%3D41FA973D323238163FAA290E20A2D0F36C4914B3%26umidtoken%3DYMdPmgaCrN0DAHWfFmY%252F%252FQ7H%26msv%3D8.0.0%26brand%3DApple%26imei%3D47BEE52110C2AA7A1F8AF66C7CE6C6A810E17AB8%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DAA8B04FB-F61C-45AF-A9A0-0CEC1D43183D"},{"key":"shuqicjyurl","val":"https://ocean.shuqireader.com/api/activity/activity/v1/lottery/info?timestamp=1624006210&userId=2125119307&activityId=311&sqSv=1.0&sign=30b0bcca2335b0380f78330c73b0049b&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.2%26utdid%3DYMdPmgaCrN0DAHWfFmY%252F%252FQ7H%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2125119307%26sn%3D41FA973D323238163FAA290E20A2D0F36C4914B3%26umidtoken%3DYMdPmgaCrN0DAHWfFmY%252F%252FQ7H%26msv%3D8.0.0%26brand%3DApple%26imei%3D47BEE52110C2AA7A1F8AF66C7CE6C6A810E17AB8%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DAA8B04FB-F61C-45AF-A9A0-0CEC1D43183D"},{"key":"shuqicjcsbody","val":"_public=skinId%3D999%26idfa%3DAA8B04FB-F61C-45AF-A9A0-0CEC1D43183D%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26umidtoken%3DYMdPmgaCrN0DAHWfFmY//Q7H%26user_id%3D2125119307%26sn%3D41FA973D323238163FAA290E20A2D0F36C4914B3%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D47BEE52110C2AA7A1F8AF66C7CE6C6A810E17AB8%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYMdPmgaCrN0DAHWfFmY//Q7H%26utype%3Dpre_vip%26sdk%3D13.2&deliveryId=711&key=sq_app_ad&miniWua=HHnB_etDdo1ulz10%2B3XcVFWge7zbe/ALfCTkwrN0DmqXiyFU%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=703&sign=91548DE01133CBBE8FC16307BE93A6FB&timestamp=1624006182&userId=2125119307&user_id=2125119307&wua=HIVW_uM0FVmO9LnEAwk5aVUE7xuUil/aYkWqka3uJWvH1qnoOyrcR5dwt7SrCBPX6Ua%2BQZla1FxJMZE1l8/BX1wrPTB0jv7Gn3L%2Ba5b2svvJWx/w%2BU64WkJELb14a9Fd9TnV/z%2BxqQIEFEPgqK%2Be%2B729Qvzwb3a6qAqSj5gfaMixVDREpV/WlEGMzrV6YV3PHZu5sAn53ohLVB%2B%2BdpdH/gKosVR%2B%2BFhOdypwSpmBN2Q2A%2Btk%3D"},{"key":"shuqicjbody","val":"wua=HIVW_vzVNLUQmNt5LvoJZM%2Borgsfw4uf7FU2TloenewJC1jj65fmTnODUDYpHG1rWYiV029vJx79PRtQ2sCseSIsYjANBlReho%2FKmgZYxKQ%2FFEQaT2RgwjhFv3ivCHYi0CMgbPpCylZ1G1ZCB5%2FGaOjYaYHmLQRk6Jsy1GdyxAC4Zps3JMpVENHZDQRKnM9ZlDJd5XdEMc4kVx77oHMAhMab79O7Qe%2B7h9mn76Mxra4RVRQY%3D&ua=&userId=2125119307&umidtoken=YMdPmgaCrN0DAHWfFmY%2F%2FQ7H&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&asac=2A20C07RJ9F51AOEFSNHDR&timestamp=1624006184&activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&sqSv=1.0&sign=ad148b9b3bf58111ae2560489d92bb7f&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.2%26utdid%3DYMdPmgaCrN0DAHWfFmY%252F%252FQ7H%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2125119307%26sn%3D41FA973D323238163FAA290E20A2D0F36C4914B3%26umidtoken%3DYMdPmgaCrN0DAHWfFmY%252F%252FQ7H%26msv%3D8.0.0%26brand%3DApple%26imei%3D47BEE52110C2AA7A1F8AF66C7CE6C6A810E17AB8%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DAA8B04FB-F61C-45AF-A9A0-0CEC1D43183D"},{"key":"shuqijsspbody","val":""},{"key":"shuqijsydurl","val":""},{"key":"shuqijsydbody","val":""},{"key":"shuqijsqdbody","val":""},{"key":"shuqijsqdspyurl","val":""},{"key":"shuqijsqdspbody","val":""},{"key":"shuqijsrwbody","val":""},{"key":"shuqijsfxbody","val":""},{"key":"shuqijsbookurl","val":""},{"key":"shuqijsbookbody","val":""},{"key":"shuqijssprwurl","val":""},{"key":"shuqiuserurl2","val":"https://ocean.shuqireader.com/api/jaccount/accountapi/v1/sapi/account/getBindinfo?userId=2124270138&sqSv=1.0&timestamp=1624006331&sign=e1ff75d7406a5e6ede3204d4289a2e14&key=sq_h5_gateway"},{"key":"shuqisyurl2","val":"https://render.shuqireader.com/load/resource?sdk=13.0&utdid=YMdPuCFQ0iMDAD444WGS4F0i&ustatus=0&first_placeid=111111&net_env=3g&placeid=111111&user_id=2124270138&sn=FAD267B3B72218745A1806618200D08C9DBB3EF8&umidtoken=YMdPuCFQ0iMDAD444WGS4F0i&msv=8.0.0&brand=Apple&imei=4E2EFE7077007D934C7E7DA72CBD330D3F9DB9E3&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=iOS&ver=210301&mod=iPhone11ProMax&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=4C5DC609-734F-4F9A-A9A1-02C89631DCBE"},{"key":"shuqisybody2","val":"appVer=4.3.6.0&imei=4E2EFE7077007D934C7E7DA72CBD330D3F9DB9E3&isNewUser=1&params=%7B%22resources%22%3A%7B%22ShuqiVipEntry%22%3A%7B%7D%2C%22personalCardConfig%22%3A%7B%7D%7D%7D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=812db5a5aa0e7fbf3d656ad79895124f&sn=FAD267B3B72218745A1806618200D08C9DBB3EF8&soft_id=21&timestamp=1624006243&user_id=2124270138&ver=210301"},{"key":"shuqispbody2","val":"_public=skinId%3D999%26idfa%3D4C5DC609-734F-4F9A-A9A1-02C89631DCBE%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26umidtoken%3DYMdPuCFQ0iMDAD444WGS4F0i%26user_id%3D2124270138%26sn%3DFAD267B3B72218745A1806618200D08C9DBB3EF8%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D4E2EFE7077007D934C7E7DA72CBD330D3F9DB9E3%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhone11ProMax%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYMdPuCFQ0iMDAD444WGS4F0i%26utype%3Dpre_vip%26sdk%3D13.0&deliveryId=525&key=sq_app_ad&miniWua=HHnB_rShMZ1wkEYcczuXimpIe4Bx0j/5MxlMX6zKbo8eoyac%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=626&sign=41B8523F83511C301FF229CD2FDA6D1A&timestamp=1624006301&userId=2124270138&user_id=2124270138&wua=HIVW_6p0tlwayOG6v7IxMDd6S7c7Gdyj1iHYZQo2b9Yr1YV9cfGCFWf/ecc9QnLsixcfQvJMgukuvIe33sbYpteTirFcP/CWMxPuvH/dupAfx9z9uyX7iYlzor1SM/EeGIMhVrlfOvuolWD6HzDi6YYsaS74gCZxKEn35B2QGbnMyNk7QnbJPPu2sPLvnpVf1wmJsA4%2BfIa/xq0GmzhwL3LFijtEImA6hcSg1xWE89fWrbpY%3D"},{"key":"shuqiscbody2","val":"_public=skinId%253D999%2526idfa%253D4C5DC609-734F-4F9A-A9A1-02C89631DCBE%2526ustatus%253D0%2526first_placeid%253D111111%2526net_env%253D3g%2526umidtoken%253DYMdPuCFQ0iMDAD444WGS4F0i%2526user_id%253D2124270138%2526sn%253DFAD267B3B72218745A1806618200D08C9DBB3EF8%2526placeid%253D111111%2526msv%253D8.0.0%2526brand%253DApple%2526imei%253D4E2EFE7077007D934C7E7DA72CBD330D3F9DB9E3%2526skinVersionPrefix%253D1%2526appVer%253D4.3.6.0%2526skinActiveColor%253D0F9970%2526manufacturer%253DApple%2526skinColor%253D23B383%2526platform%253DiOS%2526ver%253D210301%2526mod%253DiPhone11ProMax%2526statusBarHeight%253D44.000000%2526skinVersion%253D1%2526wh%253D1242x2688%2526soft_id%253D21%2526utdid%253DYMdPuCFQ0iMDAD444WGS4F0i%2526utype%253Dpre_vip%2526sdk%253D13.0&key=and_log&readingList=%5B%7B%22startTime%22%3A1624006247%2C%22readObjType%22%3A1%2C%22attr%22%3A2%2C%22readObjId%22%3A%227485524%22%2C%22readChapterId%22%3A938830%2C%22readingLen%22%3A38%7D%5D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=CCFCF720948435C888D7ABA23C536CED&timestamp=1624006285&user_id=2124270138"},{"key":"shuqiydbody2","val":"_public=skinId%3D999%26idfa%3D4C5DC609-734F-4F9A-A9A1-02C89631DCBE%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26umidtoken%3DYMdPuCFQ0iMDAD444WGS4F0i%26user_id%3D2124270138%26sn%3DFAD267B3B72218745A1806618200D08C9DBB3EF8%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D4E2EFE7077007D934C7E7DA72CBD330D3F9DB9E3%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhone11ProMax%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYMdPuCFQ0iMDAD444WGS4F0i%26utype%3Dpre_vip%26sdk%3D13.0&deliveryId=707&key=sq_app_ad&miniWua=HHnB_2lHeLYf147GVxSAOBu8s1qDE6YCpWtHWVaZ%2B7%2B2Yzx4%3D&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=678&sign=608902260E56974B607332D079467818&timestamp=1624006276&userId=2124270138&wua=HIVW_Yc/SojPRcAqi7bGdxbM2OC7juQ%2ByD0vfwkiRUiR7rJavy5hyCKQkM0ATvE%2BbvGnkflMNCB/1O12p52dJYAFYWttSWpcb4hEAJTMU16Er1zGAhYRA4mHpfESusfY5iuDiw5zg6jpN19D4Gy4FrJf2Z6AMF3lTUtEOf/WqD0IUugGAUhybgRiKf6D6gBkNkNaSR3UDqzbJYagxN91wDPkWN%2BMzjhYA2a5LWouLaCSAGLw%3D"},{"key":"shuqiqdbody2","val":"clientTimestamp=1624006289&position=501&userId=2124270138&signInType=1&wua=HIVW_bURHPdwoDnIVm5eYCU3RXgTHxRGEGSygNsmF8g4aKO0y%2ByEFe6ji9gMf1MM9FsuZFvP6dGKgdD74%2F2L%2FGHXebjQIpgFw%2BeKpJHk5igC%2F7u3bOH8hzGGk%2Bpm%2BMx1OK5XzWY7%2FHi6JutymakmTfn7jmcc8bp1ZCjUYHC2arRnYYq%2BSu3ndyHPJD0vPd7OyOfDPl%2FlccEvisNoVEsq24OktjposKwvV1YvrLz4Zu2q6LtY%3D&ua=&miniWua=HHnB_ScADvgz0GdEIOJvwUqZ5vz9zxED%2BMC8nnOw7V9sTqyo%3D&umidtoken=YMdPuCFQ0iMDAD444WGS4F0i&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&sign=ccf82fa452798b66d8c2828390ac95c1&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26sdk%3D13.0%26utdid%3DYMdPuCFQ0iMDAD444WGS4F0i%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2124270138%26sn%3DFAD267B3B72218745A1806618200D08C9DBB3EF8%26umidtoken%3DYMdPuCFQ0iMDAD444WGS4F0i%26msv%3D8.0.0%26brand%3DApple%26imei%3D4E2EFE7077007D934C7E7DA72CBD330D3F9DB9E3%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone11ProMax%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D4C5DC609-734F-4F9A-A9A1-02C89631DCBE"},{"key":"shuqirwbody2","val":""},{"key":"shuqifxbody2","val":""},{"key":"shuqisprwurl2","val":"https://ocean.shuqireader.com/api/ad/adserver/v1/api/getAdInfo?appVer=4.3.6.0&placeId=111111&platform=iOS&requestSrc=h5&resourceId=626&timestamp=1624006330&user_id=2124270138&sqSv=1.0&sign=0bed9319e81c47e1b1f4d2fec8cc3951&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26sdk%3D13.0%26utdid%3DYMdPuCFQ0iMDAD444WGS4F0i%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2124270138%26sn%3DFAD267B3B72218745A1806618200D08C9DBB3EF8%26umidtoken%3DYMdPuCFQ0iMDAD444WGS4F0i%26msv%3D8.0.0%26brand%3DApple%26imei%3D4E2EFE7077007D934C7E7DA72CBD330D3F9DB9E3%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone11ProMax%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D4C5DC609-734F-4F9A-A9A1-02C89631DCBE"},{"key":"shuqijlbody2","val":"requestSrc=h5&userId=2124270138&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624006306&sqSv=1.0&sign=3b70dad462b6fdb03af789bf16be044a&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26sdk%3D13.0%26utdid%3DYMdPuCFQ0iMDAD444WGS4F0i%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2124270138%26sn%3DFAD267B3B72218745A1806618200D08C9DBB3EF8%26umidtoken%3DYMdPuCFQ0iMDAD444WGS4F0i%26msv%3D8.0.0%26brand%3DApple%26imei%3D4E2EFE7077007D934C7E7DA72CBD330D3F9DB9E3%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone11ProMax%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D4C5DC609-734F-4F9A-A9A1-02C89631DCBE"},{"key":"shuqisqjlbody2","val":"src=&userId=2124270138&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624006295&sqSv=1.0&sign=5806f6daf74c56aa0427f2d4f5f7426f&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26sdk%3D13.0%26utdid%3DYMdPuCFQ0iMDAD444WGS4F0i%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2124270138%26sn%3DFAD267B3B72218745A1806618200D08C9DBB3EF8%26umidtoken%3DYMdPuCFQ0iMDAD444WGS4F0i%26msv%3D8.0.0%26brand%3DApple%26imei%3D4E2EFE7077007D934C7E7DA72CBD330D3F9DB9E3%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone11ProMax%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D4C5DC609-734F-4F9A-A9A1-02C89631DCBE"},{"key":"shuqicjyurl2","val":"https://ocean.shuqireader.com/api/activity/activity/v1/lottery/info?timestamp=1624006331&userId=2124270138&activityId=311&sqSv=1.0&sign=3f411a08ee947ab7879eac8fef542cd5&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.0%26utdid%3DYMdPuCFQ0iMDAD444WGS4F0i%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2124270138%26sn%3DFAD267B3B72218745A1806618200D08C9DBB3EF8%26umidtoken%3DYMdPuCFQ0iMDAD444WGS4F0i%26msv%3D8.0.0%26brand%3DApple%26imei%3D4E2EFE7077007D934C7E7DA72CBD330D3F9DB9E3%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone11ProMax%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D4C5DC609-734F-4F9A-A9A1-02C89631DCBE"},{"key":"shuqicjcsbody2","val":"_public=skinId%3D999%26idfa%3D4C5DC609-734F-4F9A-A9A1-02C89631DCBE%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26umidtoken%3DYMdPuCFQ0iMDAD444WGS4F0i%26user_id%3D2124270138%26sn%3DFAD267B3B72218745A1806618200D08C9DBB3EF8%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D4E2EFE7077007D934C7E7DA72CBD330D3F9DB9E3%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhone11ProMax%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYMdPuCFQ0iMDAD444WGS4F0i%26utype%3Dpre_vip%26sdk%3D13.0&deliveryId=711&key=sq_app_ad&miniWua=HHnB_Ob0fFAXvi6poMoMw0U1ffgK1l6a/UbnVBA1lZBIUKyk%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=703&sign=820C9E29BC5747B6778497995EDF1829&timestamp=1624006310&userId=2124270138&user_id=2124270138&wua=HIVW_X2Q1XqwT87hxneE//AX1/DU5DPidsl8VbLbYzaznyWeYv9eyyG4LwTGO8QFEICcwHZMEEKQp3ds8ZG42iprU8QsMmmZC9i1cs/xhFIJOICjSYlEZPuZ5zASPDqeVTB3eigWTzPTpxgMmW8q91RwVh7NYNrFs%2BhHYk7b405rKV40oPP6fW0Qy%2BnjkXBvvdYduj5Lp0LBkglKlbuciGBZJKwY7djx3Eve0FXYrkgUkUf8%3D"},{"key":"shuqicjbody2","val":"wua=HIVW_0pgKz1T%2F7jkNnv0jGsp%2B9V77spLUpuWkekCUXfz9qSEUPbqftLdtfwDklC1dYYCmmtbdXWgDEPNH9ekDJCuAdbdO6S1WZPCrxB6yulE763TZ%2B%2ByUP%2B4%2BzFYoQ4hUHP%2BcKqdurzlVlw3l%2FDmpTPGvp%2F72uZGfqAFceBRgM89QOqsolBqTtWEoMoT%2Fbibb4eoyry8iwF4eM%2FZRx8wn5fFxUmmavBKjg4LbVjsJFH4lY4M%3D&ua=&userId=2124270138&umidtoken=YMdPuCFQ0iMDAD444WGS4F0i&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&asac=2A20C07RJ9F51AOEFSNHDR&timestamp=1624006313&activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&sqSv=1.0&sign=ca6a8f052d210e075ec00d99cc11428f&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.0%26utdid%3DYMdPuCFQ0iMDAD444WGS4F0i%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2124270138%26sn%3DFAD267B3B72218745A1806618200D08C9DBB3EF8%26umidtoken%3DYMdPuCFQ0iMDAD444WGS4F0i%26msv%3D8.0.0%26brand%3DApple%26imei%3D4E2EFE7077007D934C7E7DA72CBD330D3F9DB9E3%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone11ProMax%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D4C5DC609-734F-4F9A-A9A1-02C89631DCBE"},{"key":"shuqijsspbody2","val":""},{"key":"shuqijsydurl2","val":""},{"key":"shuqijsydbody2","val":""},{"key":"shuqijsqdbody2","val":""},{"key":"shuqijsqdspyurl2","val":""},{"key":"shuqijsqdspbody2","val":""},{"key":"shuqijsrwbody2","val":""},{"key":"shuqijsfxbody2","val":""},{"key":"shuqijsbookurl2","val":""},{"key":"shuqijsbookbody2","val":""},{"key":"shuqijssprwurl2","val":""},{"key":"shuqiuserurl3","val":"https://ocean.shuqireader.com/api/jaccount/accountapi/v1/sapi/account/getBindinfo?userId=2127478401&sqSv=1.0&timestamp=1624006456&sign=4b9679c1ad11240c752b50b6fbf6055e&key=sq_h5_gateway"},{"key":"shuqisyurl3","val":"https://render.shuqireader.com/load/resource?sdk=13.0&utdid=YMdPzW58p6YDADUQm%2BhAvIjO&ustatus=0&first_placeid=111111&net_env=3g&placeid=111111&user_id=2127478401&sn=8B11A228A2E85975D038DA926F11BF929C5E979D&umidtoken=YMdPzW58p6YDADUQm%2BhAvIjO&msv=8.0.0&brand=Apple&imei=376B992A6C04653608BFC217618488A6E3A4BF40&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=iOS&ver=210301&mod=iPhoneXS&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=F4D0F264-8A43-490B-B549-CB74280B6DF0"},{"key":"shuqisybody3","val":"appVer=4.3.6.0&imei=376B992A6C04653608BFC217618488A6E3A4BF40&isNewUser=1&params=%7B%22resources%22%3A%7B%22ShuqiVipEntry%22%3A%7B%7D%2C%22personalCardConfig%22%3A%7B%7D%7D%7D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=92b9d06524c7df1bbc0f84c73e32b5ee&sn=8B11A228A2E85975D038DA926F11BF929C5E979D&soft_id=21&timestamp=1624006348&user_id=2127478401&ver=210301"},{"key":"shuqispbody3","val":"_public=utype%3Dpre_vip%26idfa%3DF4D0F264-8A43-490B-B549-CB74280B6DF0%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26umidtoken%3DYMdPzW58p6YDADUQm%2BhAvIjO%26user_id%3D2127478401%26sn%3D8B11A228A2E85975D038DA926F11BF929C5E979D%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D376B992A6C04653608BFC217618488A6E3A4BF40%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhoneXS%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26utdid%3DYMdPzW58p6YDADUQm%2BhAvIjO%26soft_id%3D21%26sdk%3D13.0&deliveryId=525&key=sq_app_ad&miniWua=HHnB_6PeUySyXayH2ltbnBW5L2T6qSLFtYNnutcBjXoyoJl8%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=626&sign=7287F52D4B36A1C110982C389DF97DA9&timestamp=1624006421&userId=2127478401&user_id=2127478401&wua=HIVW_eXoQOmgx%2BLdS6GZI9IKAZFRJFY8DQd//rBHSoROkMIfQi6z8ydzpn6CsGqj/L0ytqjCcT6aUtfZLPxKs8QCRzvoeMnkCm8xK8Bvf38ZqjP3ursU88almHKnnOuJ7u5wuDxtDppQC%2BKvbTV51gmPhlKosesMatYvFEJqCAxmQGEBZ3NS4p3PfG7100REDmdwioqaWDNuwIDysGOFZ3MzI4oESfMceTnDIOe6F6AT2Jfs%3D"},{"key":"shuqiscbody3","val":"_public=utype%253Dpre_vip%2526idfa%253DF4D0F264-8A43-490B-B549-CB74280B6DF0%2526ustatus%253D0%2526first_placeid%253D111111%2526net_env%253D3g%2526umidtoken%253DYMdPzW58p6YDADUQm%252BhAvIjO%2526user_id%253D2127478401%2526sn%253D8B11A228A2E85975D038DA926F11BF929C5E979D%2526placeid%253D111111%2526msv%253D8.0.0%2526brand%253DApple%2526imei%253D376B992A6C04653608BFC217618488A6E3A4BF40%2526skinVersionPrefix%253D1%2526appVer%253D4.3.6.0%2526skinActiveColor%253D0F9970%2526manufacturer%253DApple%2526statusBarHeight%253D44.000000%2526skinColor%253D23B383%2526platform%253DiOS%2526ver%253D210301%2526mod%253DiPhoneXS%2526skinVersion%253D1%2526wh%253D1242x2688%2526skinId%253D999%2526utdid%253DYMdPzW58p6YDADUQm%252BhAvIjO%2526soft_id%253D21%2526sdk%253D13.0&key=and_log&readingList=%5B%7B%22startTime%22%3A1624006400%2C%22readObjType%22%3A1%2C%22attr%22%3A2%2C%22readObjId%22%3A%227485524%22%2C%22readChapterId%22%3A938823%2C%22readingLen%22%3A12%7D%5D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=8A495F05159C0D089748C1B33C50FAAF&timestamp=1624006412&user_id=2127478401"},{"key":"shuqiydbody3","val":""},{"key":"shuqiqdbody3","val":"clientTimestamp=1624006417&position=501&userId=2127478401&signInType=1&wua=HIVW_Ce%2B1A5sG2rf4nhtJaND%2BaII%2FsFI6oaILz58gN9Z6Oh4xhEbBd8Ivwl6mVZkMPSugE%2BIU%2FXM4WwBPWxx4AFee1Nu4AfxIvTfOzxKykzwZ9Q2n3x2oUT0dQc7AtbgX7aW4pcup3XFTVxO%2BVzHloTj%2BxFrKCOBQ6Nr9icz4oHLk%2BSuLJJcsAC4Uq%2BlXoMPqn7FdsPHhwKVsZKI3BKTQ7v1A0VSyY1Rq2MzzQtBfeGGCI6k%3D&ua=&miniWua=HHnB_gr75MtYpPlZPoO06wp55WHWTsq9bJejuR4EdXE%2BSqw0%3D&umidtoken=YMdPzW58p6YDADUQm%2BhAvIjO&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&sign=3b1cbe217e55c0798a156aa70408fd92&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26sdk%3D13.0%26utdid%3DYMdPzW58p6YDADUQm%252BhAvIjO%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2127478401%26sn%3D8B11A228A2E85975D038DA926F11BF929C5E979D%26umidtoken%3DYMdPzW58p6YDADUQm%252BhAvIjO%26msv%3D8.0.0%26brand%3DApple%26imei%3D376B992A6C04653608BFC217618488A6E3A4BF40%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhoneXS%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DF4D0F264-8A43-490B-B549-CB74280B6DF0"},{"key":"shuqirwbody3","val":""},{"key":"shuqifxbody3","val":""},{"key":"shuqisprwurl3","val":"https://ocean.shuqireader.com/api/ad/adserver/v1/api/getAdInfo?appVer=4.3.6.0&placeId=111111&platform=iOS&requestSrc=h5&resourceId=626&timestamp=1624006455&user_id=2127478401&sqSv=1.0&sign=7afd280ebb99e7da52888ff9058512fd&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.0%26utdid%3DYMdPzW58p6YDADUQm%252BhAvIjO%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2127478401%26sn%3D8B11A228A2E85975D038DA926F11BF929C5E979D%26umidtoken%3DYMdPzW58p6YDADUQm%252BhAvIjO%26msv%3D8.0.0%26brand%3DApple%26imei%3D376B992A6C04653608BFC217618488A6E3A4BF40%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhoneXS%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DF4D0F264-8A43-490B-B549-CB74280B6DF0"},{"key":"shuqijlbody3","val":"requestSrc=h5&userId=2127478401&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624006437&sqSv=1.0&sign=24bdca75fdc5cd8e6ebc2a372edb2589&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26sdk%3D13.0%26utdid%3DYMdPzW58p6YDADUQm%252BhAvIjO%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2127478401%26sn%3D8B11A228A2E85975D038DA926F11BF929C5E979D%26umidtoken%3DYMdPzW58p6YDADUQm%252BhAvIjO%26msv%3D8.0.0%26brand%3DApple%26imei%3D376B992A6C04653608BFC217618488A6E3A4BF40%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhoneXS%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DF4D0F264-8A43-490B-B549-CB74280B6DF0"},{"key":"shuqisqjlbody3","val":"src=&userId=2127478401&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624006436&sqSv=1.0&sign=5e7d802821969c1cfd2c0e2b85970b3d&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26sdk%3D13.0%26utdid%3DYMdPzW58p6YDADUQm%252BhAvIjO%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2127478401%26sn%3D8B11A228A2E85975D038DA926F11BF929C5E979D%26umidtoken%3DYMdPzW58p6YDADUQm%252BhAvIjO%26msv%3D8.0.0%26brand%3DApple%26imei%3D376B992A6C04653608BFC217618488A6E3A4BF40%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhoneXS%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DF4D0F264-8A43-490B-B549-CB74280B6DF0"},{"key":"shuqicjyurl3","val":"https://ocean.shuqireader.com/api/activity/activity/v1/lottery/info?timestamp=1624006457&userId=2127478401&activityId=311&sqSv=1.0&sign=22bd444fe925d527cd49cc2d81750c32&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.0%26utdid%3DYMdPzW58p6YDADUQm%252BhAvIjO%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2127478401%26sn%3D8B11A228A2E85975D038DA926F11BF929C5E979D%26umidtoken%3DYMdPzW58p6YDADUQm%252BhAvIjO%26msv%3D8.0.0%26brand%3DApple%26imei%3D376B992A6C04653608BFC217618488A6E3A4BF40%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhoneXS%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DF4D0F264-8A43-490B-B549-CB74280B6DF0"},{"key":"shuqicjcsbody3","val":"_public=utype%3Dpre_vip%26idfa%3DF4D0F264-8A43-490B-B549-CB74280B6DF0%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26umidtoken%3DYMdPzW58p6YDADUQm%2BhAvIjO%26user_id%3D2127478401%26sn%3D8B11A228A2E85975D038DA926F11BF929C5E979D%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D376B992A6C04653608BFC217618488A6E3A4BF40%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhoneXS%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26utdid%3DYMdPzW58p6YDADUQm%2BhAvIjO%26soft_id%3D21%26sdk%3D13.0&deliveryId=711&key=sq_app_ad&miniWua=HHnB_s1j4f3gHbH3ZIvn0%2BMotROfxc7FzatNiC1rLr3ZzcrU%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=703&sign=44F7A94920041EF808DA2F6B8F187D9F&timestamp=1624006439&userId=2127478401&user_id=2127478401&wua=HIVW_doKEMxuKYaTBEyROhKT7DEMoNrYGtZ3y68T0NT7QSLqkzApheBYSsqgpidUDCz%2BlXzQOaoIKi9jKFgUHnW/kT6sdibIeCeSRLrjLtQhm8O7QYNf58LyXUpxUTq2cW/p5sVf60H/OOyBe37KVwpzr2zx0IGFmFTLjGj%2BNbved1PQm2NQYfJLSJPxnnr%2BtpoJYA8%2BmwZaEuZyWpmc08ScOSTijj03jgmvenNfDr3POd20%3D"},{"key":"shuqicjbody3","val":"wua=HIVW_KON6xnQ%2BfU9qvxM4Yt%2F48hx%2BJCKLSAP97jDQlWmcB43fZHyaH0Wkj5%2FvNmG0fjn%2B3EAE0UuoShBpebM4CHZS86uVz9i%2FDf%2BjlAWD3WyakK8AyhjJ6%2F0xhqw032A5ElPDmrJfD0IZpL7vnYs3VjX4PqKvGiOQmKqTt1C8EG9IIyzVzLfKIb54Jn5MOai2rdEjkBue5bSJWrQrzVCKlWZ4gngXQxGLDEwTkjsNbFw%2FVd4%3D&ua=&userId=2127478401&umidtoken=YMdPzW58p6YDADUQm%2BhAvIjO&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&asac=2A20C07RJ9F51AOEFSNHDR&timestamp=1624006444&activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&sqSv=1.0&sign=37634823786575143a4807ad36fb042f&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.0%26utdid%3DYMdPzW58p6YDADUQm%252BhAvIjO%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2127478401%26sn%3D8B11A228A2E85975D038DA926F11BF929C5E979D%26umidtoken%3DYMdPzW58p6YDADUQm%252BhAvIjO%26msv%3D8.0.0%26brand%3DApple%26imei%3D376B992A6C04653608BFC217618488A6E3A4BF40%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhoneXS%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DF4D0F264-8A43-490B-B549-CB74280B6DF0"},{"key":"shuqijsspbody3","val":""},{"key":"shuqijsydurl3","val":""},{"key":"shuqijsydbody3","val":""},{"key":"shuqijsqdbody3","val":""},{"key":"shuqijsqdspyurl3","val":""},{"key":"shuqijsqdspbody3","val":""},{"key":"shuqijsrwbody3","val":""},{"key":"shuqijsfxbody3","val":""},{"key":"shuqijsbookurl3","val":""},{"key":"shuqijsbookbody3","val":""},{"key":"shuqijssprwurl3","val":""},{"key":"shuqiuserurl4","val":"https://ocean.shuqireader.com/api/jaccount/accountapi/v1/sapi/account/getBindinfo?userId=2124270741&sqSv=1.0&timestamp=1624008088&sign=28ac77b6c90ffce6655af14270e97929&key=sq_h5_gateway"},{"key":"shuqisyurl4","val":"https://render.shuqireader.com/load/resource?sdk=13.0&utdid=YMqjs7gsZOQDAG12f5YGYF2K&ustatus=0&first_placeid=111111&net_env=wifi&placeid=111111&user_id=2124270741&sn=A247541B23E6943346137AE805B5B42C89370459&umidtoken=YMqjs7gsZOQDAG12f5YGYF2K&msv=8.0.0&brand=Apple&imei=69E67A878393C1A0BDEEE5A2AC7088980972F899&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=iOS&ver=210301&mod=iPhoneSE&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=3B0A4E1E-6595-44BA-980A-B1B516F5BC76"},{"key":"shuqisybody4","val":"appVer=4.3.6.0&imei=69E67A878393C1A0BDEEE5A2AC7088980972F899&isNewUser=1&params=%7B%22resources%22%3A%7B%22ShuqiVipEntry%22%3A%7B%7D%2C%22personalCardConfig%22%3A%7B%7D%7D%7D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=275496ffc1155ec4883f622fe35446b5&sn=A247541B23E6943346137AE805B5B42C89370459&soft_id=21&timestamp=1624008108&user_id=2124270741&ver=210301"},{"key":"shuqispbody4","val":"_public=utype%3Dpre_vip%26idfa%3D3B0A4E1E-6595-44BA-980A-B1B516F5BC76%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26umidtoken%3DYMqjs7gsZOQDAG12f5YGYF2K%26user_id%3D2124270741%26sn%3DA247541B23E6943346137AE805B5B42C89370459%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D69E67A878393C1A0BDEEE5A2AC7088980972F899%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhoneSE%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26utdid%3DYMqjs7gsZOQDAG12f5YGYF2K%26soft_id%3D21%26sdk%3D13.0&deliveryId=525&key=sq_app_ad&miniWua=HHnB_z7YyNL3fFqq9WG8G8bNQdiFKteNf/kS3dSdEfcWZolc%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=626&sign=80367DF4404E497E99C54A747EB1A26C&timestamp=1624006535&userId=2124270741&user_id=2124270741&wua=HIVW_G8FLyZhJS7S2QLVpwIaPQWkFF22vv/tlFh7jiEsXOEmDjmJZmaWcyHh/lfvCsK2%2BTuw%2B0x73SSFOM3bWG8iGXjIpQvDC9awfOMKfIg2WLn7g4Zpo%2B5poTazUmiZMGdr0Mw3t26F0x4O/LC76dGRzBIjZsnX4VRKA%2BciXVLNQ0q/Hh1l/fxeImgeIAOuVN3l51dpKQdSnWwsFUynDyHkJsg%3D%3D"},{"key":"shuqiscbody4","val":"_public=utype%253Dpre_vip%2526idfa%253D3B0A4E1E-6595-44BA-980A-B1B516F5BC76%2526ustatus%253D0%2526first_placeid%253D111111%2526net_env%253Dwifi%2526umidtoken%253DYMqjs7gsZOQDAG12f5YGYF2K%2526user_id%253D2124270741%2526sn%253DA247541B23E6943346137AE805B5B42C89370459%2526placeid%253D111111%2526msv%253D8.0.0%2526brand%253DApple%2526imei%253D69E67A878393C1A0BDEEE5A2AC7088980972F899%2526skinVersionPrefix%253D1%2526appVer%253D4.3.6.0%2526skinActiveColor%253D0F9970%2526manufacturer%253DApple%2526statusBarHeight%253D44.000000%2526skinColor%253D23B383%2526platform%253DiOS%2526ver%253D210301%2526mod%253DiPhoneSE%2526skinVersion%253D1%2526wh%253D1242x2688%2526skinId%253D999%2526utdid%253DYMqjs7gsZOQDAG12f5YGYF2K%2526soft_id%253D21%2526sdk%253D13.0&key=and_log&readingList=%5B%7B%22startTime%22%3A1624006488%2C%22readObjType%22%3A1%2C%22attr%22%3A2%2C%22readObjId%22%3A%228165943%22%2C%22readChapterId%22%3A1286183%2C%22readingLen%22%3A34%7D%5D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=6A1F75E482683E35DD84CD1DB8683BC9&timestamp=1624006523&user_id=2124270741"},{"key":"shuqiydbody4","val":"_public=utype%3Dpre_vip%26idfa%3D3B0A4E1E-6595-44BA-980A-B1B516F5BC76%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26umidtoken%3DYMqjs7gsZOQDAG12f5YGYF2K%26user_id%3D2124270741%26sn%3DA247541B23E6943346137AE805B5B42C89370459%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D69E67A878393C1A0BDEEE5A2AC7088980972F899%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhoneSE%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26utdid%3DYMqjs7gsZOQDAG12f5YGYF2K%26soft_id%3D21%26sdk%3D13.0&deliveryId=707&key=sq_app_ad&miniWua=HHnB_APdZjOaZGl6b55binZt8R9uAz1mnz6%2BFcP1qXqbh7HI%3D&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=678&sign=5A564FC910BC0E72E0F435C444DF4FA9&timestamp=1624006518&userId=2124270741&wua=HIVW_2pAQEBk7XpiHnHAxk1LuV8hsVc6eFsYioAntJdKVNAx4iJK4eiDpN%2BO52j%2BNKH8u8X5uhZlJfc9d9qgS7PSEtMDbYZdDtgKmqxo7PlqWAX6s2VTt6JArwCbMX8kKyY7JKLY8HR1maqQOCvv8JBTdKXRCfrgHRfZQswuJgPP4OqDd6b9emmQ8zBlXnXOqSkFarfBqIeQZJcoe4fvd/hhIJsAAeWHZZ4AYl8SY5MPuMLQ%3D"},{"key":"shuqiqdbody4","val":"clientTimestamp=1624006527&position=501&userId=2124270741&signInType=1&wua=HIVW_E4G66e4OL14WRb7lSZGarT8Jm55755X5RKg1NXcnhS0fzhiDYu5DKof17%2BttbRqY4P%2B2r4nKscMuqZ2FGj54PkD2w3sWQrFpCxvjmbhpNDs1djSpeV4DLD5%2FDatDdlbVtdTOZy7OXCudpS8PN%2BH1HlD8NJPieEmk%2FbhYgqPOg9YTZXG8Seydqt9aoIAhDyoYNM1QRYfwKe8xJv7d%2B09dtzQy5y8oos4rJ8fwnV%2Flv24%3D&ua=&miniWua=HHnB_rEFm1Z0Ajl25xdhRDSaDh%2BGpOiOjCaZAn7gnwhYTDfI%3D&umidtoken=YMqjs7gsZOQDAG12f5YGYF2K&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&sign=87889a6cbfe81b5351dbfb2e6b133c17&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26sdk%3D13.0%26utdid%3DYMqjs7gsZOQDAG12f5YGYF2K%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2124270741%26sn%3DA247541B23E6943346137AE805B5B42C89370459%26umidtoken%3DYMqjs7gsZOQDAG12f5YGYF2K%26msv%3D8.0.0%26brand%3DApple%26imei%3D69E67A878393C1A0BDEEE5A2AC7088980972F899%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhoneSE%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D3B0A4E1E-6595-44BA-980A-B1B516F5BC76"},{"key":"shuqirwbody4","val":""},{"key":"shuqifxbody4","val":""},{"key":"shuqisprwurl4","val":"https://ocean.shuqireader.com/api/ad/adserver/v1/api/getAdInfo?appVer=4.3.6.0&placeId=111111&platform=iOS&requestSrc=h5&resourceId=626&timestamp=1624008088&user_id=2124270741&sqSv=1.0&sign=6e12e8e60639f9dc40dcfbdfa8ce5a85&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.0%26utdid%3DYMqjs7gsZOQDAG12f5YGYF2K%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2124270741%26sn%3DA247541B23E6943346137AE805B5B42C89370459%26umidtoken%3DYMqjs7gsZOQDAG12f5YGYF2K%26msv%3D8.0.0%26brand%3DApple%26imei%3D69E67A878393C1A0BDEEE5A2AC7088980972F899%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhoneSE%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D3B0A4E1E-6595-44BA-980A-B1B516F5BC76"},{"key":"shuqijlbody4","val":"requestSrc=h5&userId=2124270741&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624006540&sqSv=1.0&sign=c7b8e647ab8c8ac4ecf606a9b4ebadb2&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26sdk%3D13.0%26utdid%3DYMqjs7gsZOQDAG12f5YGYF2K%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2124270741%26sn%3DA247541B23E6943346137AE805B5B42C89370459%26umidtoken%3DYMqjs7gsZOQDAG12f5YGYF2K%26msv%3D8.0.0%26brand%3DApple%26imei%3D69E67A878393C1A0BDEEE5A2AC7088980972F899%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhoneSE%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D3B0A4E1E-6595-44BA-980A-B1B516F5BC76"},{"key":"shuqisqjlbody4","val":"src=&userId=2124270741&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624006530&sqSv=1.0&sign=5922b2e99a467437b7725c5b20648796&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26sdk%3D13.0%26utdid%3DYMqjs7gsZOQDAG12f5YGYF2K%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2124270741%26sn%3DA247541B23E6943346137AE805B5B42C89370459%26umidtoken%3DYMqjs7gsZOQDAG12f5YGYF2K%26msv%3D8.0.0%26brand%3DApple%26imei%3D69E67A878393C1A0BDEEE5A2AC7088980972F899%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhoneSE%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D3B0A4E1E-6595-44BA-980A-B1B516F5BC76"},{"key":"shuqicjyurl4","val":"https://ocean.shuqireader.com/api/activity/activity/v1/lottery/info?timestamp=1624008092&userId=2124270741&activityId=311&sqSv=1.0&sign=bdaff78779ebe5a533965787b785dff6&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.0%26utdid%3DYMqjs7gsZOQDAG12f5YGYF2K%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2124270741%26sn%3DA247541B23E6943346137AE805B5B42C89370459%26umidtoken%3DYMqjs7gsZOQDAG12f5YGYF2K%26msv%3D8.0.0%26brand%3DApple%26imei%3D69E67A878393C1A0BDEEE5A2AC7088980972F899%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhoneSE%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D3B0A4E1E-6595-44BA-980A-B1B516F5BC76"},{"key":"shuqicjcsbody4","val":"_public=utype%3Dpre_vip%26idfa%3D3B0A4E1E-6595-44BA-980A-B1B516F5BC76%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26umidtoken%3DYMqjs7gsZOQDAG12f5YGYF2K%26user_id%3D2124270741%26sn%3DA247541B23E6943346137AE805B5B42C89370459%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D69E67A878393C1A0BDEEE5A2AC7088980972F899%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhoneSE%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26utdid%3DYMqjs7gsZOQDAG12f5YGYF2K%26soft_id%3D21%26sdk%3D13.0&deliveryId=711&key=sq_app_ad&miniWua=HHnB_SlaCoUZZo7aT8liS%2BxOLhnPiDFyOdpbR02ks9zhr/tM%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=703&sign=781B7C0BFCFDE0C35691DF83B35384A3&timestamp=1624006544&userId=2124270741&user_id=2124270741&wua=HIVW_SP2dcUetemFoAQj2HFQVsk2I82q/SgSfVnyJNGHJ4kkcI8HDFfbZgDRPGWUZ2BIr4ZrU2ZAm16vtu8ZZ1g2uawvvy3zqHDMcyXtrJ6Qgj8s3YJRn13/9gTmYoKexhDLGgPMmbwh%2BFfvmWBfHs%2B8CAsnAPhyQgLcI3kALSLcTQlvJYwyB5GsRw2OMikQzU%2BcnQf22cZSQHBmQaM0ZCsxpVpBLZSvWx0FTutm9uudqfj4%3D"},{"key":"shuqicjbody4","val":"wua=HIVW_kkCuKdcTPRGU%2FEmHA4qcF7umv5GWCHfUXlNVWGbqbgiUXF9fzWyOFIyYW7JKz1pREnfHgCjhQ4MEPCs5wkF%2FF9LPfmuHNhpyAChHo6iGDMuAeGlxOuzAn2%2FhD6KrTGuBTqfCfCdaV1CRqCd%2BNiptoGRmof3WVMZGbRNRpeatcHsm4f%2B4K8JbkRASTHyZVQPobfthWicoBDVPC%2BOVz3D1U0o%2BKeg1ZNQ6UZXnEV3Zr9k%3D&ua=&userId=2124270741&umidtoken=YMqjs7gsZOQDAG12f5YGYF2K&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&asac=2A20C07RJ9F51AOEFSNHDR&timestamp=1624006547&activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&sqSv=1.0&sign=bd6bcde68ec3c822e64cb70543ae9655&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.0%26utdid%3DYMqjs7gsZOQDAG12f5YGYF2K%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2124270741%26sn%3DA247541B23E6943346137AE805B5B42C89370459%26umidtoken%3DYMqjs7gsZOQDAG12f5YGYF2K%26msv%3D8.0.0%26brand%3DApple%26imei%3D69E67A878393C1A0BDEEE5A2AC7088980972F899%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhoneSE%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D3B0A4E1E-6595-44BA-980A-B1B516F5BC76"},{"key":"shuqijsspbody4","val":""},{"key":"shuqijsydurl4","val":""},{"key":"shuqijsydbody4","val":""},{"key":"shuqijsqdbody4","val":""},{"key":"shuqijsqdspyurl4","val":""},{"key":"shuqijsqdspbody4","val":""},{"key":"shuqijsrwbody4","val":""},{"key":"shuqijsfxbody4","val":""},{"key":"shuqijsbookurl4","val":""},{"key":"shuqijsbookbody4","val":""},{"key":"shuqijssprwurl4","val":""},{"key":"shuqiuserurl5","val":"https://ocean.shuqireader.com/api/jaccount/accountapi/v1/sapi/account/getBindinfo?userId=2125119244&sqSv=1.0&timestamp=1624006677&sign=b750b3d0ddee10c771cb63267d7ce7f4&key=sq_h5_gateway"},{"key":"shuqisyurl5","val":"https://render.shuqireader.com/load/resource?sdk=13.1.1&utdid=YMqjs7gsZOQDAG12f5YGYF2K&ustatus=0&first_placeid=111111&net_env=3g&placeid=111111&user_id=2125119244&sn=360035BD2DBF983F691B68DCC5A4F213C643B8B1&umidtoken=YMqjs7gsZOQDAG12f5YGYF2K&msv=8.0.0&brand=Apple&imei=24FFAFBBFF671EC1FF368559939E72EF7E8CF905&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=iOS&ver=210301&mod=UnknowniPod&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=6328CBC0-A1C9-4AB9-98CD-EB8644715399"},{"key":"shuqisybody5","val":"appVer=4.3.6.0&imei=24FFAFBBFF671EC1FF368559939E72EF7E8CF905&isNewUser=1&params=%7B%22resources%22%3A%7B%22ShuqiVipEntry%22%3A%7B%7D%2C%22personalCardConfig%22%3A%7B%7D%7D%7D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=12b9a4937de34a4106e2ab3d58bbb9d0&sn=360035BD2DBF983F691B68DCC5A4F213C643B8B1&soft_id=21&timestamp=1624006584&user_id=2125119244&ver=210301"},{"key":"shuqispbody5","val":"_public=skinId%3D999%26idfa%3D6328CBC0-A1C9-4AB9-98CD-EB8644715399%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26umidtoken%3DYMqjs7gsZOQDAG12f5YGYF2K%26user_id%3D2125119244%26sn%3D360035BD2DBF983F691B68DCC5A4F213C643B8B1%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D24FFAFBBFF671EC1FF368559939E72EF7E8CF905%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DUnknowniPod%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYMqjs7gsZOQDAG12f5YGYF2K%26utype%3Dpre_vip%26sdk%3D13.1.1&deliveryId=525&key=sq_app_ad&miniWua=HHnB_M57Ya0O6dAhQJklAoyJ/oSIsZF%2BzPOyQhm2YtZ1TSwc%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=626&sign=E8CEFE3C83A93A5D7746100CF4295560&timestamp=1624006644&userId=2125119244&user_id=2125119244&wua=HIVW_4u3ty7gmMi/Cov6F/6irt8uW4pf8Bk6KrDT4KNLTx9UKpupT3pEyPLfBktd7B2VIEuEq6sYGMhWO4264go1%2Bfyy67M7%2BmmSeYaQTU4iz65nwHPG%2BkX3A1ox4NCkxvPN3divwlf/D2Dm9DTa0315WobG7jVCVEme9Fv8eS0fVrwhZQ2k/EVjQqJ0nPpICl7FRVh9CxUqjin8cocGU7wHqSVn8STSBQ6tHV8168I1uSlM%3D"},{"key":"shuqiscbody5","val":"_public=skinId%253D999%2526idfa%253D6328CBC0-A1C9-4AB9-98CD-EB8644715399%2526ustatus%253D0%2526first_placeid%253D111111%2526net_env%253D3g%2526umidtoken%253DYMqjs7gsZOQDAG12f5YGYF2K%2526user_id%253D2125119244%2526sn%253D360035BD2DBF983F691B68DCC5A4F213C643B8B1%2526placeid%253D111111%2526msv%253D8.0.0%2526brand%253DApple%2526imei%253D24FFAFBBFF671EC1FF368559939E72EF7E8CF905%2526skinVersionPrefix%253D1%2526appVer%253D4.3.6.0%2526skinActiveColor%253D0F9970%2526manufacturer%253DApple%2526skinColor%253D23B383%2526platform%253DiOS%2526ver%253D210301%2526mod%253DUnknowniPod%2526statusBarHeight%253D44.000000%2526skinVersion%253D1%2526wh%253D1242x2688%2526soft_id%253D21%2526utdid%253DYMqjs7gsZOQDAG12f5YGYF2K%2526utype%253Dpre_vip%2526sdk%253D13.1.1&key=and_log&readingList=%5B%7B%22startTime%22%3A1624006595%2C%22readObjType%22%3A1%2C%22attr%22%3A2%2C%22readObjId%22%3A%228328441%22%2C%22readChapterId%22%3A1391896%2C%22readingLen%22%3A37%7D%5D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=479F59BB8DEF2A23E524DDE39D39F314&timestamp=1624006632&user_id=2125119244"},{"key":"shuqiydbody5","val":"_public=skinId%3D999%26idfa%3D6328CBC0-A1C9-4AB9-98CD-EB8644715399%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26umidtoken%3DYMqjs7gsZOQDAG12f5YGYF2K%26user_id%3D2125119244%26sn%3D360035BD2DBF983F691B68DCC5A4F213C643B8B1%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D24FFAFBBFF671EC1FF368559939E72EF7E8CF905%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DUnknowniPod%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYMqjs7gsZOQDAG12f5YGYF2K%26utype%3Dpre_vip%26sdk%3D13.1.1&deliveryId=707&key=sq_app_ad&miniWua=HHnB_H9zXOXef3nw6XQVGoBp4sIfmJMAEuVg%2BEOU%2BtZUfeyk%3D&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=678&sign=E0688DD59C0251FF62D463D8621664CD&timestamp=1624006625&userId=2125119244&wua=HIVW_BdicNBYngPGbDSr7OcDltNq5M/U77GYkDnOhYee77Uv2/IYi3Nej1a%2B8MfoFOLpg6PJYPPAueyOU1/udt1EJ6RmO84YePlKZtdWQAqhW885588rGFyqgPvMpJDpn0Eh6VuILxFtd9cVh29oCBLkGgrf%2BjQH9/2NXlEGZATeebF9oqBnZmAHXka1rE7u0cTFQK%2Bnha/PnDoNMX/g49itUQ1EMCacloRFBqWAEGPu9plg%3D"},{"key":"shuqiqdbody5","val":"clientTimestamp=1624006637&position=501&userId=2125119244&signInType=1&wua=HIVW_JuSfCBln3DPECwvxU%2FPJFXRVvbnwnihyHpIz%2BSghRJl0qKZU1ml7RlXjFa4QALckyCwmfPjIn%2BYIbwS3FF28thm6AkCxxH9j4aScIQOcc%2B0WHSwqdadMDRZbgGkEt1t%2B4gSVL4RFa3butthuAhv1OzTc64iKK7fmzMTbR12Q%2FFVcJne4H47h6VIHQwhCV%2BF039XmV0Qu%2FNsB1A%2F1DNLlAsTdvrfpG1UacyNlyWNQ%2B%2FM%3D&ua=&miniWua=HHnB_feeicGBgBQCj0ZR9e8u09NadoMLJGnL36if9NXJk8bk%3D&umidtoken=YMqjs7gsZOQDAG12f5YGYF2K&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&sign=cf926764a8af2db700d01666f180a399&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26sdk%3D13.1.1%26utdid%3DYMqjs7gsZOQDAG12f5YGYF2K%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2125119244%26sn%3D360035BD2DBF983F691B68DCC5A4F213C643B8B1%26umidtoken%3DYMqjs7gsZOQDAG12f5YGYF2K%26msv%3D8.0.0%26brand%3DApple%26imei%3D24FFAFBBFF671EC1FF368559939E72EF7E8CF905%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPod%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D6328CBC0-A1C9-4AB9-98CD-EB8644715399"},{"key":"shuqirwbody5","val":""},{"key":"shuqifxbody5","val":""},{"key":"shuqisprwurl5","val":"https://ocean.shuqireader.com/api/ad/adserver/v1/api/getAdInfo?appVer=4.3.6.0&placeId=111111&platform=iOS&requestSrc=h5&resourceId=626&timestamp=1624006674&user_id=2125119244&sqSv=1.0&sign=644719b962d6a2b3868fd51acaa3e6c2&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26sdk%3D13.1.1%26utdid%3DYMqjs7gsZOQDAG12f5YGYF2K%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2125119244%26sn%3D360035BD2DBF983F691B68DCC5A4F213C643B8B1%26umidtoken%3DYMqjs7gsZOQDAG12f5YGYF2K%26msv%3D8.0.0%26brand%3DApple%26imei%3D24FFAFBBFF671EC1FF368559939E72EF7E8CF905%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPod%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D6328CBC0-A1C9-4AB9-98CD-EB8644715399"},{"key":"shuqijlbody5","val":"requestSrc=h5&userId=2125119244&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624006651&sqSv=1.0&sign=1e04074bbae280ca958a4cb3bfdf10e8&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26sdk%3D13.1.1%26utdid%3DYMqjs7gsZOQDAG12f5YGYF2K%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2125119244%26sn%3D360035BD2DBF983F691B68DCC5A4F213C643B8B1%26umidtoken%3DYMqjs7gsZOQDAG12f5YGYF2K%26msv%3D8.0.0%26brand%3DApple%26imei%3D24FFAFBBFF671EC1FF368559939E72EF7E8CF905%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPod%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D6328CBC0-A1C9-4AB9-98CD-EB8644715399"},{"key":"shuqisqjlbody5","val":"src=&userId=2125119244&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624006639&sqSv=1.0&sign=94a16d263d3dad8f696074efa63d9f77&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26sdk%3D13.1.1%26utdid%3DYMqjs7gsZOQDAG12f5YGYF2K%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2125119244%26sn%3D360035BD2DBF983F691B68DCC5A4F213C643B8B1%26umidtoken%3DYMqjs7gsZOQDAG12f5YGYF2K%26msv%3D8.0.0%26brand%3DApple%26imei%3D24FFAFBBFF671EC1FF368559939E72EF7E8CF905%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPod%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D6328CBC0-A1C9-4AB9-98CD-EB8644715399"},{"key":"shuqicjyurl5","val":"https://ocean.shuqireader.com/api/activity/activity/v1/lottery/info?timestamp=1624006677&userId=2125119244&activityId=311&sqSv=1.0&sign=2f7410324d1b2926c70d990464601424&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.1.1%26utdid%3DYMqjs7gsZOQDAG12f5YGYF2K%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2125119244%26sn%3D360035BD2DBF983F691B68DCC5A4F213C643B8B1%26umidtoken%3DYMqjs7gsZOQDAG12f5YGYF2K%26msv%3D8.0.0%26brand%3DApple%26imei%3D24FFAFBBFF671EC1FF368559939E72EF7E8CF905%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPod%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D6328CBC0-A1C9-4AB9-98CD-EB8644715399"},{"key":"shuqicjcsbody5","val":"_public=skinId%3D999%26idfa%3D6328CBC0-A1C9-4AB9-98CD-EB8644715399%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26umidtoken%3DYMqjs7gsZOQDAG12f5YGYF2K%26user_id%3D2125119244%26sn%3D360035BD2DBF983F691B68DCC5A4F213C643B8B1%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D24FFAFBBFF671EC1FF368559939E72EF7E8CF905%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DUnknowniPod%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYMqjs7gsZOQDAG12f5YGYF2K%26utype%3Dpre_vip%26sdk%3D13.1.1&deliveryId=711&key=sq_app_ad&miniWua=HHnB_z6Nnld3M93ZN/JG44Er7a2eV3DJKHSXQpvHUSLosKbc%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=703&sign=8A61C1CAEF66304A2FDA33C95986D070&timestamp=1624006655&userId=2125119244&user_id=2125119244&wua=HIVW_NiyjksGBtCEszwgCPatQcKONXWuuDMIirWahfcg9Ptftyk/RujeM3rspmzxbosXraL0HfXH5jEgwXHoj3OdhvSGEVYV%2BO%2BFMvtQBb577BO6ZbqFAuL2nWPK3XcI5HNuNLvRSdxgvNtFhzpyu/sRSegcthnPyv0I55IodgUMw/TC7DjzW%2B8v99M91i2/ArXcgLQ3JYCBjBGUpr92yGly5Zr7MwUrFr3kKA2v4CDYDJo4%3D"},{"key":"shuqicjbody5","val":"wua=HIVW_veT4soCd%2BopOrrTTlPP2m3W8rchiKpzupfomgzsqCcOt96ZYixNFxKq%2FS6NZKDz25WaKTNvIcqBjIjBiEz7zW1HkHFc6yf%2BXanTQxgO7ynrRQVK3kF7ugrsAsZiJZIYZPRDuJARfPdTLrgbLTBEKD6NMntCRpRFOt6rRFT1CW2cDCitO9EPVkO16t6NkjJIvTBdZgQJWU%2BOWlHhLr9NwOm7kcJKGdgsm5KmQrHlis1c%3D&ua=&userId=2125119244&umidtoken=YMqjs7gsZOQDAG12f5YGYF2K&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&asac=2A20C07RJ9F51AOEFSNHDR&timestamp=1624006661&activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&sqSv=1.0&sign=e18090e16366ea591f6b703f0f065bc1&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.1.1%26utdid%3DYMqjs7gsZOQDAG12f5YGYF2K%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2125119244%26sn%3D360035BD2DBF983F691B68DCC5A4F213C643B8B1%26umidtoken%3DYMqjs7gsZOQDAG12f5YGYF2K%26msv%3D8.0.0%26brand%3DApple%26imei%3D24FFAFBBFF671EC1FF368559939E72EF7E8CF905%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPod%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D6328CBC0-A1C9-4AB9-98CD-EB8644715399"},{"key":"shuqijsspbody5","val":""},{"key":"shuqijsydurl5","val":""},{"key":"shuqijsydbody5","val":""},{"key":"shuqijsqdbody5","val":""},{"key":"shuqijsqdspyurl5","val":""},{"key":"shuqijsqdspbody5","val":""},{"key":"shuqijsrwbody5","val":""},{"key":"shuqijsfxbody5","val":""},{"key":"shuqijsbookurl5","val":""},{"key":"shuqijsbookbody5","val":""},{"key":"shuqijssprwurl5","val":""},{"key":"shuqiuserurl6","val":"https://ocean.shuqireader.com/api/jaccount/accountapi/v1/sapi/account/getBindinfo?userId=2126444763&sqSv=1.0&timestamp=1624006879&sign=fd75de326ec1dd06b2514b91abc3b10e&key=sq_h5_gateway"},{"key":"shuqisyurl6","val":"https://render.shuqireader.com/load/resource?sdk=13.4.1&utdid=YMdQGbTgOpQDAMEfvPh7HAni&ustatus=0&first_placeid=111111&net_env=4g&placeid=111111&user_id=2126444763&sn=036585CACBDC8CFE9056512C94CA8F2CACC305E5&umidtoken=YMdQGbTgOpQDAMEfvPh7HAni&msv=8.0.0&brand=Apple&imei=0903FBB7F431704AFD0AAC962381C18810E3753B&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=iOS&ver=210301&mod=UnknowniPad&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=789A3177-ECEF-4E97-B55F-451C3A78E128"},{"key":"shuqisybody6","val":"appVer=4.3.6.0&imei=0903FBB7F431704AFD0AAC962381C18810E3753B&isNewUser=1&params=%7B%22resources%22%3A%7B%22ShuqiVipEntry%22%3A%7B%7D%2C%22personalCardConfig%22%3A%7B%7D%7D%7D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=2e0e1074626ee3f96d0b15d7c5edb188&sn=036585CACBDC8CFE9056512C94CA8F2CACC305E5&soft_id=21&timestamp=1624006706&user_id=2126444763&ver=210301"},{"key":"shuqispbody6","val":"_public=utype%3Dpre_vip%26idfa%3D789A3177-ECEF-4E97-B55F-451C3A78E128%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26umidtoken%3DYMdQGbTgOpQDAMEfvPh7HAni%26user_id%3D2126444763%26sn%3D036585CACBDC8CFE9056512C94CA8F2CACC305E5%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D0903FBB7F431704AFD0AAC962381C18810E3753B%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DUnknowniPad%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26utdid%3DYMdQGbTgOpQDAMEfvPh7HAni%26soft_id%3D21%26sdk%3D13.4.1&deliveryId=525&key=sq_app_ad&miniWua=HHnB_FctEHJxHwWXrEofpaTB/Lv%2BdNZN2SWVgCgHjCUM/1Rg%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=626&sign=022D72AD39784038780CCF764855333B&timestamp=1624006810&userId=2126444763&user_id=2126444763&wua=HIVW_lOsITguP2ZfMjEsuiJeLLiuiski/AAkSWLJS73x41ovLT%2BI4FNPFC/dkA7abdl3iS6dpko3mcRXLK0jd2gIm0ytWMNtg/nYEJtmV6B8QMEmibr4EA1z/CLnAMvrwj9Bbfak8DMMoUgQKts0PDSbdg2Re45Yyis90/bqqC2ObD9thyqHNMAWXbdHLZZE/ZW1uEyUA0oMobbKwyynZGk4npw1qUFqjUa4dJoMa4vz4pgA%3D"},{"key":"shuqiscbody6","val":"_public=utype%253Dpre_vip%2526idfa%253D789A3177-ECEF-4E97-B55F-451C3A78E128%2526ustatus%253D0%2526first_placeid%253D111111%2526net_env%253D4g%2526umidtoken%253DYMdQGbTgOpQDAMEfvPh7HAni%2526user_id%253D2126444763%2526sn%253D036585CACBDC8CFE9056512C94CA8F2CACC305E5%2526placeid%253D111111%2526msv%253D8.0.0%2526brand%253DApple%2526imei%253D0903FBB7F431704AFD0AAC962381C18810E3753B%2526skinVersionPrefix%253D1%2526appVer%253D4.3.6.0%2526skinActiveColor%253D0F9970%2526manufacturer%253DApple%2526statusBarHeight%253D44.000000%2526skinColor%253D23B383%2526platform%253DiOS%2526ver%253D210301%2526mod%253DUnknowniPad%2526skinVersion%253D1%2526wh%253D1242x2688%2526skinId%253D999%2526utdid%253DYMdQGbTgOpQDAMEfvPh7HAni%2526soft_id%253D21%2526sdk%253D13.4.1&key=and_log&readingList=%5B%7B%22startTime%22%3A1624006737%2C%22readObjType%22%3A1%2C%22attr%22%3A2%2C%22readObjId%22%3A%227976491%22%2C%22readChapterId%22%3A1257721%2C%22readingLen%22%3A10%7D%5D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=4086EA4DD27EFDED289C90BDADD7305A&timestamp=1624006748&user_id=2126444763"},{"key":"shuqiydbody6","val":""},{"key":"shuqiqdbody6","val":"clientTimestamp=1624006805&position=501&userId=2126444763&signInType=1&wua=HIVW_MafT5n%2B9yoknCKrmHIMxm6Fr9Qj3eKaK8OuXjhTaUfY69mQX86efA0PytdrZ8Qzte9PjeURwQOSrl%2BDe0wlWyebbCHtPoYRemBcT1R7nSiklWWHs4DZCrdZFHGzW%2BrbgezK3I9Y1XdWPP028wrXHXkISJpZL%2BZmoOpI99QzljZmrcX2SlMrE19tQywENzmn7QEUfBt8mYlYmlQ5CmuvHhqwMwKiOxp00kDzXT4OVYBE%3D&ua=&miniWua=HHnB_PBrWNJrXt8z%2FqKIvLTJbcQ1kPXXivhAAqCyV84CBjTA%3D&umidtoken=YMdQGbTgOpQDAMEfvPh7HAni&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&sign=727cc984d6cc9c1fe1b3cc42f053dee7&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26sdk%3D13.4.1%26utdid%3DYMdQGbTgOpQDAMEfvPh7HAni%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2126444763%26sn%3D036585CACBDC8CFE9056512C94CA8F2CACC305E5%26umidtoken%3DYMdQGbTgOpQDAMEfvPh7HAni%26msv%3D8.0.0%26brand%3DApple%26imei%3D0903FBB7F431704AFD0AAC962381C18810E3753B%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D789A3177-ECEF-4E97-B55F-451C3A78E128"},{"key":"shuqirwbody6","val":""},{"key":"shuqifxbody6","val":""},{"key":"shuqisprwurl6","val":"https://ocean.shuqireader.com/api/ad/adserver/v1/api/getAdInfo?appVer=4.3.6.0&placeId=111111&platform=iOS&requestSrc=h5&resourceId=626&timestamp=1624006879&user_id=2126444763&sqSv=1.0&sign=c7b39d4d7a846e44ef872a2b0c3dcd2f&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26sdk%3D13.4.1%26utdid%3DYMdQGbTgOpQDAMEfvPh7HAni%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2126444763%26sn%3D036585CACBDC8CFE9056512C94CA8F2CACC305E5%26umidtoken%3DYMdQGbTgOpQDAMEfvPh7HAni%26msv%3D8.0.0%26brand%3DApple%26imei%3D0903FBB7F431704AFD0AAC962381C18810E3753B%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D789A3177-ECEF-4E97-B55F-451C3A78E128"},{"key":"shuqijlbody6","val":"requestSrc=h5&userId=2126444763&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624006842&sqSv=1.0&sign=c18d0781817efcf43af87f1c4e0a2f2b&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26sdk%3D13.4.1%26utdid%3DYMdQGbTgOpQDAMEfvPh7HAni%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2126444763%26sn%3D036585CACBDC8CFE9056512C94CA8F2CACC305E5%26umidtoken%3DYMdQGbTgOpQDAMEfvPh7HAni%26msv%3D8.0.0%26brand%3DApple%26imei%3D0903FBB7F431704AFD0AAC962381C18810E3753B%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D789A3177-ECEF-4E97-B55F-451C3A78E128"},{"key":"shuqisqjlbody6","val":"src=&userId=2126444763&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624006824&sqSv=1.0&sign=9d7b4a4e722c2f2819edda5adc74296c&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26sdk%3D13.4.1%26utdid%3DYMdQGbTgOpQDAMEfvPh7HAni%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2126444763%26sn%3D036585CACBDC8CFE9056512C94CA8F2CACC305E5%26umidtoken%3DYMdQGbTgOpQDAMEfvPh7HAni%26msv%3D8.0.0%26brand%3DApple%26imei%3D0903FBB7F431704AFD0AAC962381C18810E3753B%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D789A3177-ECEF-4E97-B55F-451C3A78E128"},{"key":"shuqicjyurl6","val":"https://ocean.shuqireader.com/api/activity/activity/v1/lottery/info?timestamp=1624006882&userId=2126444763&activityId=311&sqSv=1.0&sign=b3d7851a2a51fd764088e3a9df41eb6c&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.4.1%26utdid%3DYMdQGbTgOpQDAMEfvPh7HAni%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2126444763%26sn%3D036585CACBDC8CFE9056512C94CA8F2CACC305E5%26umidtoken%3DYMdQGbTgOpQDAMEfvPh7HAni%26msv%3D8.0.0%26brand%3DApple%26imei%3D0903FBB7F431704AFD0AAC962381C18810E3753B%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D789A3177-ECEF-4E97-B55F-451C3A78E128"},{"key":"shuqicjcsbody6","val":"_public=utype%3Dpre_vip%26idfa%3D789A3177-ECEF-4E97-B55F-451C3A78E128%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26umidtoken%3DYMdQGbTgOpQDAMEfvPh7HAni%26user_id%3D2126444763%26sn%3D036585CACBDC8CFE9056512C94CA8F2CACC305E5%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D0903FBB7F431704AFD0AAC962381C18810E3753B%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DUnknowniPad%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26utdid%3DYMdQGbTgOpQDAMEfvPh7HAni%26soft_id%3D21%26sdk%3D13.4.1&deliveryId=711&key=sq_app_ad&miniWua=HHnB_Fi1ooqcwWlYd5K82M8MRe/1I0Aj3mlu8%2B4ciCyoVpGI%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=703&sign=8FEE13D559AF62641CF22FAFAF44D4DB&timestamp=1624006847&userId=2126444763&user_id=2126444763&wua=HIVW_pticbyWl4IDqHJMPqCV3MPiO%2BL2XWRtgXNvZZiqDNHUaWkI6MhQJaYhr8lOLyJaG4fjQaHH9kL/%2BrZLE4igtBU8Hv1TLi55vEl3lWVJ103YFy/P0bjLWzRYkzRboEnjNoryfUx2ELldozmJKPBlKcCTzCtCDYdHOmLl4ultBUP59noOQCht6szvp4w4VqrDuS/ygveobpHNSKfrQebQlgsVr6DqSYjNabbAcDChVHeA%3D"},{"key":"shuqicjbody6","val":"wua=HIVW_KNXzihgXjVffU202rxvWdMkrSdzv%2B%2Fo4ssvGkdgRBLYuJeezkyEa00ShYoFnC187INKrJAtuSX7V6ciuXI7aXfTCt3Z6QNawRc4h3giR2fv7F8OTKci1pFIp5an9f6y9giYYfBoUph5dgrFTvzT%2FrGHP6umSiS7VK8pVHm0%2BmpnbWGIKpUMGyIgAIkR2Ctjq2kKwta28MsoGB1xSqE7lMWGVjLWqvmdtNJSeXTRScnE%3D&ua=&userId=2126444763&umidtoken=YMdQGbTgOpQDAMEfvPh7HAni&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&asac=2A20C07RJ9F51AOEFSNHDR&timestamp=1624006853&activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&sqSv=1.0&sign=516ece07e66eede1ddc9788fc4b01afa&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.4.1%26utdid%3DYMdQGbTgOpQDAMEfvPh7HAni%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2126444763%26sn%3D036585CACBDC8CFE9056512C94CA8F2CACC305E5%26umidtoken%3DYMdQGbTgOpQDAMEfvPh7HAni%26msv%3D8.0.0%26brand%3DApple%26imei%3D0903FBB7F431704AFD0AAC962381C18810E3753B%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D789A3177-ECEF-4E97-B55F-451C3A78E128"},{"key":"shuqijsspbody6","val":""},{"key":"shuqijsydurl6","val":""},{"key":"shuqijsydbody6","val":""},{"key":"shuqijsqdbody6","val":""},{"key":"shuqijsqdspyurl6","val":""},{"key":"shuqijsqdspbody6","val":""},{"key":"shuqijsrwbody6","val":""},{"key":"shuqijsfxbody6","val":""},{"key":"shuqijsbookurl6","val":""},{"key":"shuqijsbookbody6","val":""},{"key":"shuqijssprwurl6","val":""},{"key":"shuqiuserurl7","val":"https://ocean.shuqireader.com/api/jaccount/accountapi/v1/sapi/account/getBindinfo?userId=2125416576&sqSv=1.0&timestamp=1624006984&sign=65d0a3c077e6eb60db304bc165eae3fd&key=sq_h5_gateway"},{"key":"shuqisyurl7","val":"https://render.shuqireader.com/load/resource?sdk=13.1.3&utdid=YMqjs7gsZOQDAG12f5YGYF2K&ustatus=0&first_placeid=111111&net_env=4g&placeid=111111&user_id=2125416576&sn=951A1EF93744EA6FEB0033E555970E61D93F0D3B&umidtoken=YMqjs7gsZOQDAG12f5YGYF2K&msv=8.0.0&brand=Apple&imei=4C747B184030EEBAA0DEA5D464E9519C9B8FFB09&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=iOS&ver=210301&mod=iPhone11Pro&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=E0508195-12BE-4875-A31C-ABF33C484121"},{"key":"shuqisybody7","val":"appVer=4.3.6.0&imei=4C747B184030EEBAA0DEA5D464E9519C9B8FFB09&isNewUser=1&params=%7B%22resources%22%3A%7B%22ShuqiVipEntry%22%3A%7B%7D%2C%22personalCardConfig%22%3A%7B%7D%7D%7D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=7e16a11a0ac5a0059ccd998febada339&sn=951A1EF93744EA6FEB0033E555970E61D93F0D3B&soft_id=21&timestamp=1624006939&user_id=2125416576&ver=210301"},{"key":"shuqispbody7","val":"_public=skinId%3D999%26idfa%3DE0508195-12BE-4875-A31C-ABF33C484121%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26umidtoken%3DYMqjs7gsZOQDAG12f5YGYF2K%26user_id%3D2125416576%26sn%3D951A1EF93744EA6FEB0033E555970E61D93F0D3B%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D4C747B184030EEBAA0DEA5D464E9519C9B8FFB09%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhone11Pro%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYMqjs7gsZOQDAG12f5YGYF2K%26utype%3Dpre_vip%26sdk%3D13.1.3&deliveryId=525&key=sq_app_ad&miniWua=HHnB_bCQWD0pDnwVM0yxpLhuIQKuvDKoqSPDrrdTc6Kr0hZo%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=626&sign=4C7D03D9F1FEBC4DE17E8C82CC117E95&timestamp=1624006952&userId=2125416576&user_id=2125416576&wua=HIVW_NT4hUlmfi%2BdzRhRUqsQ19laaWSsoxo5nMSiihq7aqQ8ohwiqo2WcUk1ptVK4mlzcwFTSJ1dayf3WRquOipPd0amXIvViAXbqFiZKRW/PywvV1YdI5hX7L84OV0gWkAirY/u4Cf5xzx6y7qk1BQ3tNYNb%2BtHe/iDlA59SCW8j7nA/Qea3qKhUweXvjZfKK6dCPrejYfMCjvMXSvOWdOWC3qxw5cBS2ogxNu0nYm6zNnQ%3D"},{"key":"shuqiscbody7","val":"_public=utype%253Dpre_vip%2526idfa%253DE0508195-12BE-4875-A31C-ABF33C484121%2526ustatus%253D0%2526first_placeid%253D111111%2526net_env%253D4g%2526umidtoken%253DYMqjs7gsZOQDAG12f5YGYF2K%2526user_id%253D2125416576%2526sn%253D951A1EF93744EA6FEB0033E555970E61D93F0D3B%2526placeid%253D111111%2526msv%253D8.0.0%2526brand%253DApple%2526imei%253D4C747B184030EEBAA0DEA5D464E9519C9B8FFB09%2526skinVersionPrefix%253D1%2526appVer%253D4.3.6.0%2526skinActiveColor%253D0F9970%2526manufacturer%253DApple%2526statusBarHeight%253D44.000000%2526skinColor%253D23B383%2526platform%253DiOS%2526ver%253D210301%2526mod%253DiPhone11Pro%2526skinVersion%253D1%2526wh%253D1242x2688%2526skinId%253D999%2526utdid%253DYMqjs7gsZOQDAG12f5YGYF2K%2526soft_id%253D21%2526sdk%253D13.1.3&key=and_log&readingList=%5B%7B%22startTime%22%3A1624006903%2C%22readObjType%22%3A1%2C%22attr%22%3A2%2C%22readObjId%22%3A%228165943%22%2C%22readChapterId%22%3A1286183%2C%22readingLen%22%3A34%7D%5D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=9DDC706E4919175ED6F6341E8F1D56F4&timestamp=1624006937&user_id=2125416576"},{"key":"shuqiydbody7","val":"_public=utype%3Dpre_vip%26idfa%3DE0508195-12BE-4875-A31C-ABF33C484121%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26umidtoken%3DYMqjs7gsZOQDAG12f5YGYF2K%26user_id%3D2125416576%26sn%3D951A1EF93744EA6FEB0033E555970E61D93F0D3B%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D4C747B184030EEBAA0DEA5D464E9519C9B8FFB09%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhone11Pro%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26utdid%3DYMqjs7gsZOQDAG12f5YGYF2K%26soft_id%3D21%26sdk%3D13.1.3&deliveryId=707&key=sq_app_ad&miniWua=HHnB_nr4O6eHFgIAQxAAZjwqBofEZugwSS7CJysH%2BSr8YNwc%3D&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=678&sign=FBEB1FE7367EF1EAEDFBC0E129D94942&timestamp=1624006933&userId=2125416576&wua=HIVW_mFaA627Q2eVMLZKxxJqrxlkA8yuw61UgXPWQpnt5%2BcRivbETS4R/9QvMFfwwIErkPuKmTLHqTJlzfBRXQ71b93%2BmmyQM4Whl3%2BRW4uCdiPB7j2m4En4xAtiSJuWQjPlxeM0b/P%2BCow1sywCIl7nFZKJWWzNEZml2Ir1ugC7cDE9qzH6T%2B9cmOyJqcsZiIEHZM34UVKdWgUrjSE%2BRoKdSAljQyzUic0cgMyhkin9ro9o%3D"},{"key":"shuqiqdbody7","val":"clientTimestamp=1624006947&position=501&userId=2125416576&signInType=1&wua=HIVW_PzvLVEVonnG8ArfZju3EkkfO1T4G3e8pkjX95j9wvns3zp71fIv%2BK5BHY%2FXVsqaCO%2BTqhBADjPsRVIWqk1FcNCYZqO8lioJVTmwlPB5Lh2XLAE%2FmeY1LcOXEVrbQk7lPqDKI80n7wfe4md2JN%2BaIqJNpFqW7p59uRw0bu4HzXm%2FPFCR368kHCkyAWHI%2B2GWTMXTItm0YYRt%2FFW0UhxbBBVYBMRzALINsYl0IeKt2HKo%3D&ua=&miniWua=HHnB_oKAm1qT%2B1SPOUAHtPTmIHst8xOYKApejLDugw3ebIm0%3D&umidtoken=YMqjs7gsZOQDAG12f5YGYF2K&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&sign=55c570322340a8231733264958d8c54e&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26sdk%3D13.1.3%26utdid%3DYMqjs7gsZOQDAG12f5YGYF2K%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2125416576%26sn%3D951A1EF93744EA6FEB0033E555970E61D93F0D3B%26umidtoken%3DYMqjs7gsZOQDAG12f5YGYF2K%26msv%3D8.0.0%26brand%3DApple%26imei%3D4C747B184030EEBAA0DEA5D464E9519C9B8FFB09%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone11Pro%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DE0508195-12BE-4875-A31C-ABF33C484121"},{"key":"shuqirwbody7","val":""},{"key":"shuqifxbody7","val":""},{"key":"shuqisprwurl7","val":"https://ocean.shuqireader.com/api/ad/adserver/v1/api/getAdInfo?appVer=4.3.6.0&placeId=111111&platform=iOS&requestSrc=h5&resourceId=626&timestamp=1624006984&user_id=2125416576&sqSv=1.0&sign=6d683d4ab1836a4212336d0d3e1ae9c5&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26sdk%3D13.1.3%26utdid%3DYMqjs7gsZOQDAG12f5YGYF2K%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2125416576%26sn%3D951A1EF93744EA6FEB0033E555970E61D93F0D3B%26umidtoken%3DYMqjs7gsZOQDAG12f5YGYF2K%26msv%3D8.0.0%26brand%3DApple%26imei%3D4C747B184030EEBAA0DEA5D464E9519C9B8FFB09%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone11Pro%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DE0508195-12BE-4875-A31C-ABF33C484121"},{"key":"shuqijlbody7","val":"requestSrc=h5&userId=2125416576&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624006957&sqSv=1.0&sign=5606c1ead34c6919cbd4f9ae8eff209e&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26sdk%3D13.1.3%26utdid%3DYMqjs7gsZOQDAG12f5YGYF2K%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2125416576%26sn%3D951A1EF93744EA6FEB0033E555970E61D93F0D3B%26umidtoken%3DYMqjs7gsZOQDAG12f5YGYF2K%26msv%3D8.0.0%26brand%3DApple%26imei%3D4C747B184030EEBAA0DEA5D464E9519C9B8FFB09%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone11Pro%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DE0508195-12BE-4875-A31C-ABF33C484121"},{"key":"shuqisqjlbody7","val":"src=&userId=2125416576&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624006951&sqSv=1.0&sign=8a227de056aa064cc82ccb17faa5c035&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26sdk%3D13.1.3%26utdid%3DYMqjs7gsZOQDAG12f5YGYF2K%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2125416576%26sn%3D951A1EF93744EA6FEB0033E555970E61D93F0D3B%26umidtoken%3DYMqjs7gsZOQDAG12f5YGYF2K%26msv%3D8.0.0%26brand%3DApple%26imei%3D4C747B184030EEBAA0DEA5D464E9519C9B8FFB09%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone11Pro%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DE0508195-12BE-4875-A31C-ABF33C484121"},{"key":"shuqicjyurl7","val":"https://ocean.shuqireader.com/api/activity/activity/v1/lottery/info?timestamp=1624006985&userId=2125416576&activityId=311&sqSv=1.0&sign=ee0d09c11e1f85cf9c62e5be1d2ffd77&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.1.3%26utdid%3DYMqjs7gsZOQDAG12f5YGYF2K%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2125416576%26sn%3D951A1EF93744EA6FEB0033E555970E61D93F0D3B%26umidtoken%3DYMqjs7gsZOQDAG12f5YGYF2K%26msv%3D8.0.0%26brand%3DApple%26imei%3D4C747B184030EEBAA0DEA5D464E9519C9B8FFB09%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone11Pro%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DE0508195-12BE-4875-A31C-ABF33C484121"},{"key":"shuqicjcsbody7","val":"_public=skinId%3D999%26idfa%3DE0508195-12BE-4875-A31C-ABF33C484121%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26umidtoken%3DYMqjs7gsZOQDAG12f5YGYF2K%26user_id%3D2125416576%26sn%3D951A1EF93744EA6FEB0033E555970E61D93F0D3B%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D4C747B184030EEBAA0DEA5D464E9519C9B8FFB09%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhone11Pro%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYMqjs7gsZOQDAG12f5YGYF2K%26utype%3Dpre_vip%26sdk%3D13.1.3&deliveryId=711&key=sq_app_ad&miniWua=HHnB_XVQy6Wg9daIXlq/ATatbGfd7sFcvtfY5Tg9DNXSo894%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=703&sign=1214D2C811E92A8F5A931FB34CC0CEC0&timestamp=1624006964&userId=2125416576&user_id=2125416576&wua=HIVW_jIpna9fW62vSoa46D%2BJtQAyGvyL6IFTsPdb2ceRjAzYjSTwNgGPvgM52holl9XT50SgkG2qVVx0UldKQg1Rwkdv/KvnSWQdveSI6Iv71koyf2C05QSBU5thQgVIxtRzzuNjSG5GMY1rGYDp9rNBTvVAs3lfaFqkMzLsQROSZIccGKSwAGeWX21JxXkSj6N1gITdbYswr6OhIizaV2bBfrI4fsJ1MppzHaQyUgQYwun4%3D"},{"key":"shuqicjbody7","val":"wua=HIVW_HNyYBNV6VpqJ9IbPhfq71f1vOkhSwHwqAiiIjO5%2BJCu9Wey5ezV34Nvt05DAriWfESnVTuzFfyqyW%2F66giA9Dq0Sn2JQQKPnHYob2m5hjPsnrRVY%2BF8bKPyxlkOnJnfdlGjoLTWKxr1QM7enoE%2BEa87jjUP0U1hAG1xnOPHQS9Bu7W9I7IxteYWEzE4D%2FfqfIlYQfqth5l77Ex4u5WM8hU5C8GIFRNPQ4QESzP5o9Ro%3D&ua=&userId=2125416576&umidtoken=YMqjs7gsZOQDAG12f5YGYF2K&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&asac=2A20C07RJ9F51AOEFSNHDR&timestamp=1624006969&activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&sqSv=1.0&sign=638d7e796d71bdee490fb8fe610d65c4&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.1.3%26utdid%3DYMqjs7gsZOQDAG12f5YGYF2K%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2125416576%26sn%3D951A1EF93744EA6FEB0033E555970E61D93F0D3B%26umidtoken%3DYMqjs7gsZOQDAG12f5YGYF2K%26msv%3D8.0.0%26brand%3DApple%26imei%3D4C747B184030EEBAA0DEA5D464E9519C9B8FFB09%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone11Pro%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DE0508195-12BE-4875-A31C-ABF33C484121"},{"key":"shuqijsspbody7","val":""},{"key":"shuqijsydurl7","val":""},{"key":"shuqijsydbody7","val":""},{"key":"shuqijsqdbody7","val":""},{"key":"shuqijsqdspyurl7","val":""},{"key":"shuqijsqdspbody7","val":""},{"key":"shuqijsrwbody7","val":""},{"key":"shuqijsfxbody7","val":""},{"key":"shuqijsbookurl7","val":""},{"key":"shuqijsbookbody7","val":""},{"key":"shuqijssprwurl7","val":""},{"key":"shuqiuserurl8","val":"https://ocean.shuqireader.com/api/jaccount/accountapi/v1/sapi/account/getBindinfo?userId=2128473724&sqSv=1.0&timestamp=1624007089&sign=2e7ec0d2715522b5ff1deed21cfd5d5c&key=sq_h5_gateway"},{"key":"shuqisyurl8","val":"https://render.shuqireader.com/load/resource?sdk=13.4&utdid=YMqjs7gsZOQDAG12f5YGYF2K&ustatus=0&first_placeid=111111&net_env=3g&placeid=111111&user_id=2128473724&sn=62E6E94E683A354BCC22CE5E76FAF162DE25B2E9&umidtoken=YMqjs7gsZOQDAG12f5YGYF2K&msv=8.0.0&brand=Apple&imei=AE50841CE37C08B878A2DA4A3D0436C0F42F904A&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&session=&skinColor=23B383&platform=iOS&ver=210301&mod=iPad3G&statusBarHeight=44.000000&skinVersion=1&wh=1242x2688&soft_id=21&utype=pre_vip&skinId=999&idfa=76A2D1D7-E5E9-410F-844B-66DE2E55DAB9"},{"key":"shuqisybody8","val":"appVer=4.3.6.0&imei=AE50841CE37C08B878A2DA4A3D0436C0F42F904A&isNewUser=1&params=%7B%22resources%22%3A%7B%22ShuqiVipEntry%22%3A%7B%7D%2C%22personalCardConfig%22%3A%7B%7D%7D%7D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=67c1e1ed487b6afc314bb6e547eb245d&sn=62E6E94E683A354BCC22CE5E76FAF162DE25B2E9&soft_id=21&timestamp=1624007008&user_id=2128473724&ver=210301"},{"key":"shuqispbody8","val":"_public=skinId%3D999%26idfa%3D76A2D1D7-E5E9-410F-844B-66DE2E55DAB9%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26umidtoken%3DYMqjs7gsZOQDAG12f5YGYF2K%26user_id%3D2128473724%26sn%3D62E6E94E683A354BCC22CE5E76FAF162DE25B2E9%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3DAE50841CE37C08B878A2DA4A3D0436C0F42F904A%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPad3G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYMqjs7gsZOQDAG12f5YGYF2K%26utype%3Dpre_vip%26sdk%3D13.4&deliveryId=525&key=sq_app_ad&miniWua=HHnB_w4P6USKd/tpeR5cdF1QfcfDA3bM4QDtMQuMU%2B5Rev60%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=626&sign=3627A880F2DF31387219D5C4EBF6BB44&timestamp=1624007055&userId=2128473724&user_id=2128473724&wua=HIVW_i7i/g9q0bBpUAvRAUHLuX3WTZsXSj4Z/2uIXk3GXnWVzwKvKFHU7sM3LwrUr2k9i%2BtYPr73FJwumUCUocuSobB6hlMzUEUW1Zg3Q2Bq/BOtcTDGiiX1D5Hh/SECwcMaYPMuPNtPLMgwsgkG76R6i03TDOJVsvFiM/C3%2BpB2%2Bhjsr7WDHoPKgRa1AiT3GLSQGDX2thduK4J5ej86OEulFxcNJdArxb5CSy1heUjieKCg%3D"},{"key":"shuqiscbody8","val":"_public=skinId%253D999%2526idfa%253D76A2D1D7-E5E9-410F-844B-66DE2E55DAB9%2526ustatus%253D0%2526first_placeid%253D111111%2526net_env%253D3g%2526umidtoken%253DYMqjs7gsZOQDAG12f5YGYF2K%2526user_id%253D2128473724%2526sn%253D62E6E94E683A354BCC22CE5E76FAF162DE25B2E9%2526placeid%253D111111%2526msv%253D8.0.0%2526brand%253DApple%2526imei%253DAE50841CE37C08B878A2DA4A3D0436C0F42F904A%2526skinVersionPrefix%253D1%2526appVer%253D4.3.6.0%2526skinActiveColor%253D0F9970%2526manufacturer%253DApple%2526skinColor%253D23B383%2526platform%253DiOS%2526ver%253D210301%2526mod%253DiPad3G%2526statusBarHeight%253D44.000000%2526skinVersion%253D1%2526wh%253D1242x2688%2526soft_id%253D21%2526utdid%253DYMqjs7gsZOQDAG12f5YGYF2K%2526utype%253Dpre_vip%2526sdk%253D13.4&key=and_log&readingList=%5B%7B%22startTime%22%3A1624007012%2C%22readObjType%22%3A1%2C%22attr%22%3A2%2C%22readObjId%22%3A%228165943%22%2C%22readChapterId%22%3A1301226%2C%22readingLen%22%3A34%7D%5D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=B5D84EF03FD82301A6B33884A66164BB&timestamp=1624007047&user_id=2128473724"},{"key":"shuqiydbody8","val":"_public=skinId%3D999%26idfa%3D76A2D1D7-E5E9-410F-844B-66DE2E55DAB9%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26umidtoken%3DYMqjs7gsZOQDAG12f5YGYF2K%26user_id%3D2128473724%26sn%3D62E6E94E683A354BCC22CE5E76FAF162DE25B2E9%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3DAE50841CE37C08B878A2DA4A3D0436C0F42F904A%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPad3G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYMqjs7gsZOQDAG12f5YGYF2K%26utype%3Dpre_vip%26sdk%3D13.4&deliveryId=707&key=sq_app_ad&miniWua=HHnB_MRci9j7OdMUl6qU8p0thwEyyYjq1hEyvNwpbxbYHF5I%3D&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=678&sign=D8DB64A1AB3685656067228F6A2EBE51&timestamp=1624007044&userId=2128473724&wua=HIVW_%2BKF2Sn%2BJ0/ra2sepLs9SHB2O8gkUqGjeJGTZJnqlCxz41/iUdrpcdOp0c3sEe8ZMAKn7kmrM4GUcxyCca3hFdQiX8F0hCHW/s%2B2IyXpO87ZLjdpdUyqDsjG9n4w8UYYNkGPi7LKu59OHmIovdA9jPAfaCuxeu3SWXnJb2E/ft5ydTXZHsdFTCcxCpgYKJSnpOLSSlegZbV%2BHJ%2BYpXpcJzaTr%2BFWLVqfKEHsWvN5DXts%3D"},{"key":"shuqiqdbody8","val":"clientTimestamp=1624007050&position=501&userId=2128473724&signInType=1&wua=HIVW_KEFJlXTzZVD7hP%2Bs%2BohuSw%2F6p9QLASjkXjpepPHaZm2e9Sl75lmDH9l4VBBRRAhMMvqa8UBen29K6SM%2B64vD1mBfRyPYgBqrd7ejCGe%2F5lWIl79%2FgrmfNrLWzQ9vLGsMNgY9d2d%2BW%2FPTojo3kXBpxpadqeb73Vof4BQgnc68%2FY4q%2BggpQUz39ItE9cDFMXYimJa%2BT74%2B6A%2BSElSfmAnJOw%3D%3D&ua=&miniWua=HHnB_zkiOyBDHBUrjrruzVUHwIB3c0gkN%2FCI4N%2B6w9XN3fqg%3D&umidtoken=YMqjs7gsZOQDAG12f5YGYF2K&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&sign=433076f70f80afed860c1ea4706ced8d&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26sdk%3D13.4%26utdid%3DYMqjs7gsZOQDAG12f5YGYF2K%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2128473724%26sn%3D62E6E94E683A354BCC22CE5E76FAF162DE25B2E9%26umidtoken%3DYMqjs7gsZOQDAG12f5YGYF2K%26msv%3D8.0.0%26brand%3DApple%26imei%3DAE50841CE37C08B878A2DA4A3D0436C0F42F904A%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad3G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D76A2D1D7-E5E9-410F-844B-66DE2E55DAB9"},{"key":"shuqirwbody8","val":""},{"key":"shuqifxbody8","val":""},{"key":"shuqisprwurl8","val":"https://ocean.shuqireader.com/api/ad/adserver/v1/api/getAdInfo?appVer=4.3.6.0&placeId=111111&platform=iOS&requestSrc=h5&resourceId=626&timestamp=1624007090&user_id=2128473724&sqSv=1.0&sign=7cb2959e4e8bee1031c975b995382759&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26sdk%3D13.4%26utdid%3DYMqjs7gsZOQDAG12f5YGYF2K%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2128473724%26sn%3D62E6E94E683A354BCC22CE5E76FAF162DE25B2E9%26umidtoken%3DYMqjs7gsZOQDAG12f5YGYF2K%26msv%3D8.0.0%26brand%3DApple%26imei%3DAE50841CE37C08B878A2DA4A3D0436C0F42F904A%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad3G%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D76A2D1D7-E5E9-410F-844B-66DE2E55DAB9"},{"key":"shuqijlbody8","val":"requestSrc=h5&userId=2128473724&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624007063&sqSv=1.0&sign=7ef8f997dcf2da7ebd1b6c9ee7cefcee&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26sdk%3D13.4%26utdid%3DYMqjs7gsZOQDAG12f5YGYF2K%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2128473724%26sn%3D62E6E94E683A354BCC22CE5E76FAF162DE25B2E9%26umidtoken%3DYMqjs7gsZOQDAG12f5YGYF2K%26msv%3D8.0.0%26brand%3DApple%26imei%3DAE50841CE37C08B878A2DA4A3D0436C0F42F904A%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad3G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D76A2D1D7-E5E9-410F-844B-66DE2E55DAB9"},{"key":"shuqisqjlbody8","val":"src=&userId=2128473724&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624007054&sqSv=1.0&sign=7981eb20b765668c031fd817d46719ea&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26sdk%3D13.4%26utdid%3DYMqjs7gsZOQDAG12f5YGYF2K%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2128473724%26sn%3D62E6E94E683A354BCC22CE5E76FAF162DE25B2E9%26umidtoken%3DYMqjs7gsZOQDAG12f5YGYF2K%26msv%3D8.0.0%26brand%3DApple%26imei%3DAE50841CE37C08B878A2DA4A3D0436C0F42F904A%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad3G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D76A2D1D7-E5E9-410F-844B-66DE2E55DAB9"},{"key":"shuqicjyurl8","val":"https://ocean.shuqireader.com/api/activity/activity/v1/lottery/info?timestamp=1624007093&userId=2128473724&activityId=311&sqSv=1.0&sign=80b44d101abeef04a9a0c26c49a2e909&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.4%26utdid%3DYMqjs7gsZOQDAG12f5YGYF2K%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2128473724%26sn%3D62E6E94E683A354BCC22CE5E76FAF162DE25B2E9%26umidtoken%3DYMqjs7gsZOQDAG12f5YGYF2K%26msv%3D8.0.0%26brand%3DApple%26imei%3DAE50841CE37C08B878A2DA4A3D0436C0F42F904A%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad3G%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D76A2D1D7-E5E9-410F-844B-66DE2E55DAB9"},{"key":"shuqicjcsbody8","val":"_public=skinId%3D999%26idfa%3D76A2D1D7-E5E9-410F-844B-66DE2E55DAB9%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26umidtoken%3DYMqjs7gsZOQDAG12f5YGYF2K%26user_id%3D2128473724%26sn%3D62E6E94E683A354BCC22CE5E76FAF162DE25B2E9%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3DAE50841CE37C08B878A2DA4A3D0436C0F42F904A%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPad3G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYMqjs7gsZOQDAG12f5YGYF2K%26utype%3Dpre_vip%26sdk%3D13.4&deliveryId=711&key=sq_app_ad&miniWua=HHnB_PRdSDveFoc4osTxMgQX1te/U14ZzfMiaG6waNaxTMtw%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=703&sign=A6011996AF850E48303D265AFB89F877&timestamp=1624007068&userId=2128473724&user_id=2128473724&wua=HIVW_MtHU5U4q8f8txtMsxeH40WQSGyCCNOKZvgIiFB2fnyQu4ZFm2nL0BMrHc0Ee/YcDhF5NZH8RiXZLO1I8MLC4OtIH17kVB850Myps/CB%2BQ9gUu/rp1TON8nND6H0CfzNm1mm8WDpzJEpBs%2BJD7lO98jzZsFgnuP6HVJoaGc74E62uXTk4yi4Rzd7/mmZm2t%2BWTI2fELNhkAFCiq1d/8oI%2B1HwcWjwv8Hq9lT9J%2BgFIDs%3D"},{"key":"shuqicjbody8","val":"wua=HIVW_RwYfnVkOBBhYdpNWvmPlRBqW%2FVNnNnPiJ7aptYqn2laxNrAdTYTtDZ5KMTytk0QOmnqxbVL6Ai0RlQrTWhJcoghLtToaXbsoFjoI2Hi8ZTaZNjcue0ksYIh0oEOyPWRtmmBpZYZRJPwHBY%2BhIAxiLwrNwLba0WLJawafEASd%2BqTHn%2FP%2FXrwUuzPGszz0mdpiiv000OzWExDh7fHrmAHKjFqPjf5Jdo2hrwAoZwvUtC4%3D&ua=&userId=2128473724&umidtoken=YMqjs7gsZOQDAG12f5YGYF2K&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&asac=2A20C07RJ9F51AOEFSNHDR&timestamp=1624007074&activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&sqSv=1.0&sign=3da20d9c5194d9746b8f8922e415526c&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.4%26utdid%3DYMqjs7gsZOQDAG12f5YGYF2K%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2128473724%26sn%3D62E6E94E683A354BCC22CE5E76FAF162DE25B2E9%26umidtoken%3DYMqjs7gsZOQDAG12f5YGYF2K%26msv%3D8.0.0%26brand%3DApple%26imei%3DAE50841CE37C08B878A2DA4A3D0436C0F42F904A%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad3G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D76A2D1D7-E5E9-410F-844B-66DE2E55DAB9"},{"key":"shuqijsspbody8","val":""},{"key":"shuqijsydurl8","val":""},{"key":"shuqijsydbody8","val":""},{"key":"shuqijsqdbody8","val":""},{"key":"shuqijsqdspyurl8","val":""},{"key":"shuqijsqdspbody8","val":""},{"key":"shuqijsrwbody8","val":""},{"key":"shuqijsfxbody8","val":""},{"key":"shuqijsbookurl8","val":""},{"key":"shuqijsbookbody8","val":""},{"key":"shuqijssprwurl8","val":""},{"key":"shuqiuserurl9","val":"https://ocean.shuqireader.com/api/jaccount/accountapi/v1/sapi/account/getBindinfo?userId=2124819417&sqSv=1.0&timestamp=1624007184&sign=e8ea229e9a2a2ba6d93941e49f626e1a&key=sq_h5_gateway"},{"key":"shuqisyurl9","val":"https://render.shuqireader.com/load/resource?sdk=13.5&utdid=YMqjs7gsZOQDAG12f5YGYF2K&ustatus=0&first_placeid=111111&net_env=wifi&placeid=111111&user_id=2124819417&sn=0CF5FD02400951AADB403512AC1D9390911294A7&umidtoken=YMqjs7gsZOQDAG12f5YGYF2K&msv=8.0.0&brand=Apple&imei=120A9EEBD31CF2394A1C1B440081248A21A44914&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=iOS&ver=210301&mod=UnknowniPad&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=57FB4696-462A-4ABC-B13A-F0823F7F8EF8"},{"key":"shuqisybody9","val":"appVer=4.3.6.0&imei=120A9EEBD31CF2394A1C1B440081248A21A44914&isNewUser=1&params=%7B%22resources%22%3A%7B%22ShuqiVipEntry%22%3A%7B%7D%2C%22personalCardConfig%22%3A%7B%7D%7D%7D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=50e6c776ab92c5643bf97403e54f143b&sn=0CF5FD02400951AADB403512AC1D9390911294A7&soft_id=21&timestamp=1624008170&user_id=2124819417&ver=210301"},{"key":"shuqispbody9","val":"_public=utype%3Dpre_vip%26idfa%3D57FB4696-462A-4ABC-B13A-F0823F7F8EF8%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26umidtoken%3DYMqjs7gsZOQDAG12f5YGYF2K%26user_id%3D2124819417%26sn%3D0CF5FD02400951AADB403512AC1D9390911294A7%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D120A9EEBD31CF2394A1C1B440081248A21A44914%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DUnknowniPad%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26utdid%3DYMqjs7gsZOQDAG12f5YGYF2K%26soft_id%3D21%26sdk%3D13.5&deliveryId=525&key=sq_app_ad&miniWua=HHnB_KSOEqrQr1lbIzGuh3wmoiE6Obfk7lONxQwu2Y3MRb2s%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=626&sign=2B92D969777EEF288A6D0A65ADECCB9E&timestamp=1624007158&userId=2124819417&user_id=2124819417&wua=HIVW_x85AXX/g6BzM/7oxs5tS4XSDWBZKjzhiddfm0RQrmOwOymw6bRMMSTQpxUag4mt%2BUVYtOgiDVBeAmzUR2sUVHE/6YE2%2BL/wUQ43gL2TZTZdn6tjvwf/BBd/Xo7PBDIyI/heovH9r%2Bqcw8ZebEi2lW4MGp2yoZeaMS5ndLgVvOSSggG15s%2BMSMwUhuhC0a1dS3BWw/BDYM25vqXGRFW93YBgWR3Y0CtUSuWTs3N6EUjA%3D"},{"key":"shuqiscbody9","val":"_public=utype%253Dpre_vip%2526idfa%253D57FB4696-462A-4ABC-B13A-F0823F7F8EF8%2526ustatus%253D0%2526first_placeid%253D111111%2526net_env%253Dwifi%2526umidtoken%253DYMqjs7gsZOQDAG12f5YGYF2K%2526user_id%253D2124819417%2526sn%253D0CF5FD02400951AADB403512AC1D9390911294A7%2526placeid%253D111111%2526msv%253D8.0.0%2526brand%253DApple%2526imei%253D120A9EEBD31CF2394A1C1B440081248A21A44914%2526skinVersionPrefix%253D1%2526appVer%253D4.3.6.0%2526skinActiveColor%253D0F9970%2526manufacturer%253DApple%2526statusBarHeight%253D44.000000%2526skinColor%253D23B383%2526platform%253DiOS%2526ver%253D210301%2526mod%253DUnknowniPad%2526skinVersion%253D1%2526wh%253D1242x2688%2526skinId%253D999%2526utdid%253DYMqjs7gsZOQDAG12f5YGYF2K%2526soft_id%253D21%2526sdk%253D13.5&key=and_log&readingList=%5B%7B%22startTime%22%3A1624007115%2C%22readObjType%22%3A1%2C%22attr%22%3A2%2C%22readObjId%22%3A%228379731%22%2C%22readChapterId%22%3A1609880%2C%22readingLen%22%3A32%7D%5D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=549FC77C0D9AAF6962098645630397C8&timestamp=1624007148&user_id=2124819417"},{"key":"shuqiydbody9","val":"_public=utype%3Dpre_vip%26idfa%3D57FB4696-462A-4ABC-B13A-F0823F7F8EF8%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26umidtoken%3DYMqjs7gsZOQDAG12f5YGYF2K%26user_id%3D2124819417%26sn%3D0CF5FD02400951AADB403512AC1D9390911294A7%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D120A9EEBD31CF2394A1C1B440081248A21A44914%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DUnknowniPad%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26utdid%3DYMqjs7gsZOQDAG12f5YGYF2K%26soft_id%3D21%26sdk%3D13.5&deliveryId=707&key=sq_app_ad&miniWua=HHnB_MXV4W1G8/sQUB8qtsfqWZJjers5KxwuFRIDQu7E34Oo%3D&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=678&sign=0079F5E38885EBDD58B1341E877BD992&timestamp=1624007145&userId=2124819417&wua=HIVW_mGe3pPPlSlZLLzX/TJNSQnABaCZNGPyVwzdFBZoAaN3Hvd7RO48G2htdyP1wCz%2B229cCkUXZWe2%2BEXUrAj76dC7bpBgCbNvDtr/Na7M9nacFEnDRFtx94KApNo2/p3dYLo%2BjgVcluhMukGvCmGaM29%2Bw5fbDFM8ucWabYA8dvbePWoUgPAQ6dbXJvRmgiBT87p%2BkRV6iL4c%2BWeFu0KtDKJyboYAgI6qKlbc9eXpgzek%3D"},{"key":"shuqiqdbody9","val":"clientTimestamp=1624007153&position=501&userId=2124819417&signInType=1&wua=HIVW_cd9JPDqwiBYzqxyhh8PgPZNIYjcqyhG%2BwWKD387eeAAEqvwpwr63G6gUDfKPnGY%2FpTSEEHgweHrWKz6qvvFch4CXXJEX7uGodl8UWxZws5EM8yJhLwaNtvwXp6shdky2KDk4q2cIKf7mM41Je22aaN81ncXiXTWZMMU2EvpqcfQzYR1klENYSzwXKmDa4G4OCeKaysG2r8TGSvpZOjsd5Q%2F9HrlPG8LoQLntDmEZd94%3D&ua=&miniWua=HHnB_zMXEGPEd6GxALQZ6gFF%2FSzgkPKCn4XhSysNG41eof%2F4%3D&umidtoken=YMqjs7gsZOQDAG12f5YGYF2K&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&sign=e78eca593ff60f3252b12249903891d5&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26sdk%3D13.5%26utdid%3DYMqjs7gsZOQDAG12f5YGYF2K%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2124819417%26sn%3D0CF5FD02400951AADB403512AC1D9390911294A7%26umidtoken%3DYMqjs7gsZOQDAG12f5YGYF2K%26msv%3D8.0.0%26brand%3DApple%26imei%3D120A9EEBD31CF2394A1C1B440081248A21A44914%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D57FB4696-462A-4ABC-B13A-F0823F7F8EF8"},{"key":"shuqirwbody9","val":""},{"key":"shuqifxbody9","val":""},{"key":"shuqisprwurl9","val":"https://ocean.shuqireader.com/api/ad/adserver/v1/api/getAdInfo?appVer=4.3.6.0&placeId=111111&platform=iOS&requestSrc=h5&resourceId=626&timestamp=1624007183&user_id=2124819417&sqSv=1.0&sign=837c45f4055aea97822c8d5833f1602f&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.5%26utdid%3DYMqjs7gsZOQDAG12f5YGYF2K%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2124819417%26sn%3D0CF5FD02400951AADB403512AC1D9390911294A7%26umidtoken%3DYMqjs7gsZOQDAG12f5YGYF2K%26msv%3D8.0.0%26brand%3DApple%26imei%3D120A9EEBD31CF2394A1C1B440081248A21A44914%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D57FB4696-462A-4ABC-B13A-F0823F7F8EF8"},{"key":"shuqijlbody9","val":"requestSrc=h5&userId=2124819417&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624007165&sqSv=1.0&sign=d0fa8e946d15fd2924e38cae5e990476&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26sdk%3D13.5%26utdid%3DYMqjs7gsZOQDAG12f5YGYF2K%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2124819417%26sn%3D0CF5FD02400951AADB403512AC1D9390911294A7%26umidtoken%3DYMqjs7gsZOQDAG12f5YGYF2K%26msv%3D8.0.0%26brand%3DApple%26imei%3D120A9EEBD31CF2394A1C1B440081248A21A44914%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D57FB4696-462A-4ABC-B13A-F0823F7F8EF8"},{"key":"shuqisqjlbody9","val":"src=&userId=2124819417&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624007156&sqSv=1.0&sign=2691be5186aa0f576168655e8bc3040f&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26sdk%3D13.5%26utdid%3DYMqjs7gsZOQDAG12f5YGYF2K%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2124819417%26sn%3D0CF5FD02400951AADB403512AC1D9390911294A7%26umidtoken%3DYMqjs7gsZOQDAG12f5YGYF2K%26msv%3D8.0.0%26brand%3DApple%26imei%3D120A9EEBD31CF2394A1C1B440081248A21A44914%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D57FB4696-462A-4ABC-B13A-F0823F7F8EF8"},{"key":"shuqicjyurl9","val":"https://ocean.shuqireader.com/api/activity/activity/v1/lottery/info?timestamp=1624007185&userId=2124819417&activityId=311&sqSv=1.0&sign=b02535d718d10d5011f97fc5ac5a1372&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.5%26utdid%3DYMqjs7gsZOQDAG12f5YGYF2K%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2124819417%26sn%3D0CF5FD02400951AADB403512AC1D9390911294A7%26umidtoken%3DYMqjs7gsZOQDAG12f5YGYF2K%26msv%3D8.0.0%26brand%3DApple%26imei%3D120A9EEBD31CF2394A1C1B440081248A21A44914%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D57FB4696-462A-4ABC-B13A-F0823F7F8EF8"},{"key":"shuqicjcsbody9","val":"_public=utype%3Dpre_vip%26idfa%3D57FB4696-462A-4ABC-B13A-F0823F7F8EF8%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26umidtoken%3DYMqjs7gsZOQDAG12f5YGYF2K%26user_id%3D2124819417%26sn%3D0CF5FD02400951AADB403512AC1D9390911294A7%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D120A9EEBD31CF2394A1C1B440081248A21A44914%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DUnknowniPad%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26utdid%3DYMqjs7gsZOQDAG12f5YGYF2K%26soft_id%3D21%26sdk%3D13.5&deliveryId=711&key=sq_app_ad&miniWua=HHnB_RVpLFnPrDB50gi8lvQw17CgW59wjOp0ygG6RCGqH2Ww%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=703&sign=EDCF9136171F71CC19B9DE3B44FD8E50&timestamp=1624007171&userId=2124819417&user_id=2124819417&wua=HIVW_H4O%2B3LwCcz2f0pys9f2lz6sK4XYCbp1C9V1RF6O61DVMrupbzdsbLPXM2cLQ2vl85MDNIG8uUWBrUheRV3NrSojtgJ4b4mjr/yAe7xqWHEVUumFP2i9U4TjpPJ/o3fZAGKAgQORIgGlkkoINMtOUxGMKpEMaB5TXivmEzG60gYYOsFH9k9sgA940wnyg7ZMr4FOhOst6JLBwz%2Bhph2KG2FX17cBfIGk%2BvQ4LsHPxk9w%3D"},{"key":"shuqicjbody9","val":"wua=HIVW_t6KU237zvEJGEMbQOOF0%2BvC1CEHlFzKtOqUP1ymG37kpH1Nmyvpr29DMWAFHutXUgtoRabTMxs6F1MLPUirMQKz6HG5QLzO%2FIbp5grST2SivoUmPChonK6YU9mRoz8yCZAbLodRwcy32ODTZO1xWoo%2FO8tuz2p9JO5mMq%2B11e6ZdwzwCw1fBCDJW%2FcrO44RKXbhLK0ANLdwGzacATWph%2Fw%3D%3D&ua=&userId=2124819417&umidtoken=YMqjs7gsZOQDAG12f5YGYF2K&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&asac=2A20C07RJ9F51AOEFSNHDR&timestamp=1624007173&activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&sqSv=1.0&sign=954ddbce58a299abf16ab860bdeccba6&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.5%26utdid%3DYMqjs7gsZOQDAG12f5YGYF2K%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2124819417%26sn%3D0CF5FD02400951AADB403512AC1D9390911294A7%26umidtoken%3DYMqjs7gsZOQDAG12f5YGYF2K%26msv%3D8.0.0%26brand%3DApple%26imei%3D120A9EEBD31CF2394A1C1B440081248A21A44914%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D57FB4696-462A-4ABC-B13A-F0823F7F8EF8"},{"key":"shuqijsspbody9","val":""},{"key":"shuqijsydurl9","val":""},{"key":"shuqijsydbody9","val":""},{"key":"shuqijsqdbody9","val":""},{"key":"shuqijsqdspyurl9","val":""},{"key":"shuqijsqdspbody9","val":""},{"key":"shuqijsrwbody9","val":""},{"key":"shuqijsfxbody9","val":""},{"key":"shuqijsbookurl9","val":""},{"key":"shuqijsbookbody9","val":""},{"key":"shuqijssprwurl9","val":""},{"key":"shuqiuserurl10","val":"https://ocean.shuqireader.com/api/jaccount/accountapi/v1/sapi/account/getBindinfo?userId=2125813374&sqSv=1.0&timestamp=1624007297&sign=e85e40aec76a43c935884f46a4cff8e2&key=sq_h5_gateway"},{"key":"shuqisyurl10","val":"https://render.shuqireader.com/load/resource?sdk=13.5.1&utdid=YMdQYylXIpoDAAF8itPKtOYe&ustatus=0&first_placeid=111111&net_env=wifi&placeid=111111&user_id=2125813374&sn=DBBB156D050A9A8621F24BE57C410332DA6D1E58&umidtoken=YMdQYylXIpoDAAF8itPKtOYe&msv=8.0.0&brand=Apple&imei=264AF87C4EFEC935022305945AAC7018683EA41D&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=iOS&ver=210301&mod=UnknowniPad&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=B044FC53-B687-4773-B807-F4179ACEE629"},{"key":"shuqisybody10","val":"appVer=4.3.6.0&imei=264AF87C4EFEC935022305945AAC7018683EA41D&isNewUser=1&params=%7B%22resources%22%3A%7B%22ShuqiVipEntry%22%3A%7B%7D%2C%22personalCardConfig%22%3A%7B%7D%7D%7D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=5a719302018e146f91dcab7dbef35126&sn=DBBB156D050A9A8621F24BE57C410332DA6D1E58&soft_id=21&timestamp=1624007208&user_id=2125813374&ver=210301"},{"key":"shuqispbody10","val":"_public=skinId%3D999%26idfa%3DB044FC53-B687-4773-B807-F4179ACEE629%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26umidtoken%3DYMdQYylXIpoDAAF8itPKtOYe%26user_id%3D2125813374%26sn%3DDBBB156D050A9A8621F24BE57C410332DA6D1E58%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D264AF87C4EFEC935022305945AAC7018683EA41D%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYMdQYylXIpoDAAF8itPKtOYe%26utype%3Dpre_vip%26sdk%3D13.5.1&deliveryId=525&key=sq_app_ad&miniWua=HHnB_A2daiJhPaKltLJGIQi0ObjxpC0RgVFp%2B31FSfzmeo%2Bo%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=626&sign=7F90D6C2F9EB69B00E8B51CB3FBD362B&timestamp=1624007263&userId=2125813374&user_id=2125813374&wua=HIVW_Re4XotKihjnFDMgYsvYoHA%2BzHHBNVIHkkgdqcAZIl/eJ2/hEeLxKi75BceiRM2%2B6B2uIZPGEIyQlK00wv2Q8VWXXSu8JI//GBPy%2BjDTNDl8HHIlEHCWDOJFEmgiNAdY1kAKlvvKuAFydH/z3CHXVEesTaoLvG/jnshTOR7NJQShkiURciLjQ28N4cD3B4BZO0CVs7MNQcw8KstMIE0/KLVii1hSp1RIbVghNjAJsSzw%3D"},{"key":"shuqiscbody10","val":"_public=skinId%253D999%2526idfa%253DB044FC53-B687-4773-B807-F4179ACEE629%2526ustatus%253D0%2526first_placeid%253D111111%2526net_env%253Dwifi%2526umidtoken%253DYMdQYylXIpoDAAF8itPKtOYe%2526user_id%253D2125813374%2526sn%253DDBBB156D050A9A8621F24BE57C410332DA6D1E58%2526placeid%253D111111%2526msv%253D8.0.0%2526brand%253DApple%2526imei%253D264AF87C4EFEC935022305945AAC7018683EA41D%2526skinVersionPrefix%253D1%2526appVer%253D4.3.6.0%2526skinActiveColor%253D0F9970%2526manufacturer%253DApple%2526skinColor%253D23B383%2526platform%253DiOS%2526ver%253D210301%2526mod%253DUnknowniPad%2526statusBarHeight%253D44.000000%2526skinVersion%253D1%2526wh%253D1242x2688%2526soft_id%253D21%2526utdid%253DYMdQYylXIpoDAAF8itPKtOYe%2526utype%253Dpre_vip%2526sdk%253D13.5.1&key=and_log&readingList=%5B%7B%22startTime%22%3A1624007213%2C%22readObjType%22%3A1%2C%22attr%22%3A2%2C%22readObjId%22%3A%228379731%22%2C%22readChapterId%22%3A1472185%2C%22readingLen%22%3A41%7D%5D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=195B3CD66DE8DE39B38AED7F76EA562B&timestamp=1624007254&user_id=2125813374"},{"key":"shuqiydbody10","val":"_public=skinId%3D999%26idfa%3DB044FC53-B687-4773-B807-F4179ACEE629%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26umidtoken%3DYMdQYylXIpoDAAF8itPKtOYe%26user_id%3D2125813374%26sn%3DDBBB156D050A9A8621F24BE57C410332DA6D1E58%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D264AF87C4EFEC935022305945AAC7018683EA41D%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYMdQYylXIpoDAAF8itPKtOYe%26utype%3Dpre_vip%26sdk%3D13.5.1&deliveryId=707&key=sq_app_ad&miniWua=HHnB_Sy77MishWRHtJVLCxtYt3J4sMvBPB0ZYhxs/RgDhZS4%3D&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=678&sign=D454E13E13141A38767762A09209F974&timestamp=1624007245&userId=2125813374&wua=HIVW_FaodUNIxRbdOOF7D9jxRYupiMh7gsoNV2FBA%2BJRmUyx3FAi0Y1ld0wnzI9LCioQ192nJbiovINNVpq4V/znuqUfDQGBSYgLGh%2ByHdWy7trsQS5MR6%2BMiYwCHYQLliaw24pQMtmdA/dJXAwW3G1MMcm1KQozGczX4NSVmB5LtZsInJ7/3AecWGX4t0hu9t5MTQoSAAv1HzoJLe/KL%2B1c5C624jkupHhH6D1iJfBXNO2Q%3D"},{"key":"shuqiqdbody10","val":"clientTimestamp=1624007258&position=501&userId=2125813374&signInType=1&wua=HIVW_sjiH%2FL26JR8zajahnTKSiiUV99dxLMJs4aMAmbqNkzzHu%2F8b0mBN5a9iAkwnK78llVEEdb4CnwAPLoZXeDsQOk8T4oRsiFpeSEaQuuvidBn2RJxiQz39rHwxAEJ7VvkhM%2FVpQLsevoHEaVnAsxH56yZ3Km4XM%2F0KO3xq4zOwTFbmNq6KcfnWZMiV1mEwrBnObSUPh0t7t6SnPcIUoeaXf6ksmkggL1kU7UP1e6Vqd24%3D&ua=&miniWua=HHnB_DeVM8RPT1kSj2%2FHCKdZmOJCA8KMpYjzoQonnv65fza8%3D&umidtoken=YMdQYylXIpoDAAF8itPKtOYe&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&sign=e16bb641e9bdcdb4ab9a08b875797379&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26sdk%3D13.5.1%26utdid%3DYMdQYylXIpoDAAF8itPKtOYe%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2125813374%26sn%3DDBBB156D050A9A8621F24BE57C410332DA6D1E58%26umidtoken%3DYMdQYylXIpoDAAF8itPKtOYe%26msv%3D8.0.0%26brand%3DApple%26imei%3D264AF87C4EFEC935022305945AAC7018683EA41D%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DB044FC53-B687-4773-B807-F4179ACEE629"},{"key":"shuqirwbody10","val":""},{"key":"shuqifxbody10","val":""},{"key":"shuqisprwurl10","val":"https://ocean.shuqireader.com/api/ad/adserver/v1/api/getAdInfo?appVer=4.3.6.0&placeId=111111&platform=iOS&requestSrc=h5&resourceId=626&timestamp=1624007298&user_id=2125813374&sqSv=1.0&sign=c645d621f43bb8dae80611a80ed89197&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.5.1%26utdid%3DYMdQYylXIpoDAAF8itPKtOYe%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2125813374%26sn%3DDBBB156D050A9A8621F24BE57C410332DA6D1E58%26umidtoken%3DYMdQYylXIpoDAAF8itPKtOYe%26msv%3D8.0.0%26brand%3DApple%26imei%3D264AF87C4EFEC935022305945AAC7018683EA41D%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DB044FC53-B687-4773-B807-F4179ACEE629"},{"key":"shuqijlbody10","val":"requestSrc=h5&userId=2125813374&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624007270&sqSv=1.0&sign=135a2fb63dd340e2f907f7fbdfcf247a&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26sdk%3D13.5.1%26utdid%3DYMdQYylXIpoDAAF8itPKtOYe%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2125813374%26sn%3DDBBB156D050A9A8621F24BE57C410332DA6D1E58%26umidtoken%3DYMdQYylXIpoDAAF8itPKtOYe%26msv%3D8.0.0%26brand%3DApple%26imei%3D264AF87C4EFEC935022305945AAC7018683EA41D%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DB044FC53-B687-4773-B807-F4179ACEE629"},{"key":"shuqisqjlbody10","val":"src=&userId=2125813374&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624007262&sqSv=1.0&sign=bb25db80c35032e75a005b5f19bbdb1b&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26sdk%3D13.5.1%26utdid%3DYMdQYylXIpoDAAF8itPKtOYe%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2125813374%26sn%3DDBBB156D050A9A8621F24BE57C410332DA6D1E58%26umidtoken%3DYMdQYylXIpoDAAF8itPKtOYe%26msv%3D8.0.0%26brand%3DApple%26imei%3D264AF87C4EFEC935022305945AAC7018683EA41D%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DB044FC53-B687-4773-B807-F4179ACEE629"},{"key":"shuqicjyurl10","val":"https://ocean.shuqireader.com/api/activity/activity/v1/lottery/info?timestamp=1624007299&userId=2125813374&activityId=311&sqSv=1.0&sign=0d26a0bdb0fd93e5323a8a0f93ccd149&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.5.1%26utdid%3DYMdQYylXIpoDAAF8itPKtOYe%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2125813374%26sn%3DDBBB156D050A9A8621F24BE57C410332DA6D1E58%26umidtoken%3DYMdQYylXIpoDAAF8itPKtOYe%26msv%3D8.0.0%26brand%3DApple%26imei%3D264AF87C4EFEC935022305945AAC7018683EA41D%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DB044FC53-B687-4773-B807-F4179ACEE629"},{"key":"shuqicjcsbody10","val":"_public=skinId%3D999%26idfa%3DB044FC53-B687-4773-B807-F4179ACEE629%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26umidtoken%3DYMdQYylXIpoDAAF8itPKtOYe%26user_id%3D2125813374%26sn%3DDBBB156D050A9A8621F24BE57C410332DA6D1E58%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D264AF87C4EFEC935022305945AAC7018683EA41D%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYMdQYylXIpoDAAF8itPKtOYe%26utype%3Dpre_vip%26sdk%3D13.5.1&deliveryId=711&key=sq_app_ad&miniWua=HHnB_lG0t%2Bc%2B%2BbqmzUNoAUAFoai1HDkTSh2Hqv33FantiJ7s%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=703&sign=A7720DD043C39A666E017F75D9FB9504&timestamp=1624007276&userId=2125813374&user_id=2125813374&wua=HIVW_5IZBEx6WeuwhNZhAEiNLyajGfjGJU6zVo43qXIKimYFJ0y7OX6M2Jz6u1kln46SFoXdbc0hgjkP6s0LK9hEGcuDjkQ8PJ7cgzeZ9z%2B3AlvWPjWLa%2B/e3N7FJqFyXCEIRzTRDmSlShV0h4amRZcvDJLprbqAz6AYUa8VHZQohyRtbELM2r1xU/rWkQwUbUdWKa6af6DGJ%2BWCF/F%2B%2BnvEwIGLsLQ3ZPsKdiFKi/TplmNs%3D"},{"key":"shuqicjbody10","val":"wua=HIVW_aNaJAAHUVWwuVoPtpO01bdp96a%2BwUS3NtZEzL0F3TXl7X29qN%2B9m%2Bv0%2F2E2ezDpa%2Fic1IPODnT8E%2F93NVhxexcOsf5rqeKaf6XtFOPNMgnOV2NL6wfCZnqF%2By50M5CeLRCdA1Bi6NEqSI03nvhTXlG8AYuGjOg6o4pKg2Rm5EVfTIFJIiqSD7XlscT76jQkU9OPGmAQQoJ%2FhZIXfTsxNF59FKytJdOr3r%2F4idtklJGQ%3D&ua=&userId=2125813374&umidtoken=YMdQYylXIpoDAAF8itPKtOYe&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&asac=2A20C07RJ9F51AOEFSNHDR&timestamp=1624007287&activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&sqSv=1.0&sign=4a248d714951b301285a0967e8f1b336&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.5.1%26utdid%3DYMdQYylXIpoDAAF8itPKtOYe%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2125813374%26sn%3DDBBB156D050A9A8621F24BE57C410332DA6D1E58%26umidtoken%3DYMdQYylXIpoDAAF8itPKtOYe%26msv%3D8.0.0%26brand%3DApple%26imei%3D264AF87C4EFEC935022305945AAC7018683EA41D%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DB044FC53-B687-4773-B807-F4179ACEE629"},{"key":"shuqijsspbody10","val":""},{"key":"shuqijsydurl10","val":""},{"key":"shuqijsydbody10","val":""},{"key":"shuqijsqdbody10","val":""},{"key":"shuqijsqdspyurl10","val":""},{"key":"shuqijsqdspbody10","val":""},{"key":"shuqijsrwbody10","val":""},{"key":"shuqijsfxbody10","val":""},{"key":"shuqijsbookurl10","val":""},{"key":"shuqijsbookbody10","val":""},{"key":"shuqijssprwurl10","val":""},{"key":"shuqiuserurl11","val":"https://ocean.shuqireader.com/api/jaccount/accountapi/v1/sapi/account/getBindinfo?userId=2125118594&sqSv=1.0&timestamp=1624007408&sign=ab5bb43e2b02f0bfc089d6c14b553b03&key=sq_h5_gateway"},{"key":"shuqisyurl11","val":"https://render.shuqireader.com/load/resource?sdk=13.0&utdid=YMdQYylXIpoDAAF8itPKtOYe&ustatus=0&first_placeid=111111&net_env=4g&placeid=111111&user_id=2125118594&sn=DE20B2B3BEA4E913131A1135911CA850F967F322&umidtoken=YMdQYylXIpoDAAF8itPKtOYe&msv=8.0.0&brand=Apple&imei=8CA843D498D4F7141115DEC6199055041EDBDF8E&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=iOS&ver=210301&mod=iPad3G&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=92FFA035-6810-4B13-9883-5085DB51547B"},{"key":"shuqisybody11","val":"appVer=4.3.6.0&imei=8CA843D498D4F7141115DEC6199055041EDBDF8E&isNewUser=1&params=%7B%22resources%22%3A%7B%22ShuqiVipEntry%22%3A%7B%7D%2C%22personalCardConfig%22%3A%7B%7D%7D%7D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=da13ae0c14b3b0851862bca01ea84f48&sn=DE20B2B3BEA4E913131A1135911CA850F967F322&soft_id=21&timestamp=1624007324&user_id=2125118594&ver=210301"},{"key":"shuqispbody11","val":"_public=skinId%3D999%26idfa%3D92FFA035-6810-4B13-9883-5085DB51547B%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26umidtoken%3DYMdQYylXIpoDAAF8itPKtOYe%26user_id%3D2125118594%26sn%3DDE20B2B3BEA4E913131A1135911CA850F967F322%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D8CA843D498D4F7141115DEC6199055041EDBDF8E%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPad3G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYMdQYylXIpoDAAF8itPKtOYe%26utype%3Dpre_vip%26sdk%3D13.0&deliveryId=525&key=sq_app_ad&miniWua=HHnB_T7F6tXxIovq7GX7kivccIysQdwt7dS/8JIBs742MN0M%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=626&sign=18E27B3AC4A8ABAB63F66F6B40DABFF4&timestamp=1624007375&userId=2125118594&user_id=2125118594&wua=HIVW_JJA6f6DKIT3TTgHv23vxs4BErLS3HrP8y8dl66RM0Rc22/z%2BAdMGerZfR4CgGYfas0eHZSqwB2rtqcusKid3VpkIQOd4bOqT5FQ8GSXuy3P4tyYXEMx6buk4pmuLPl8P3kbnTSpjPgyWAykRUUdPT2aPU/s99sa0BxT1hTNl3cWy8aGniisZoOgBctak08zicw0qW1YkMGcw10xcAVaQ0U/qnugomtmTA3RYgflx4yI%3D"},{"key":"shuqiscbody11","val":"_public=skinId%253D999%2526idfa%253D92FFA035-6810-4B13-9883-5085DB51547B%2526ustatus%253D0%2526first_placeid%253D111111%2526net_env%253D4g%2526umidtoken%253DYMdQYylXIpoDAAF8itPKtOYe%2526user_id%253D2125118594%2526sn%253DDE20B2B3BEA4E913131A1135911CA850F967F322%2526placeid%253D111111%2526msv%253D8.0.0%2526brand%253DApple%2526imei%253D8CA843D498D4F7141115DEC6199055041EDBDF8E%2526skinVersionPrefix%253D1%2526appVer%253D4.3.6.0%2526skinActiveColor%253D0F9970%2526manufacturer%253DApple%2526skinColor%253D23B383%2526platform%253DiOS%2526ver%253D210301%2526mod%253DiPad3G%2526statusBarHeight%253D44.000000%2526skinVersion%253D1%2526wh%253D1242x2688%2526soft_id%253D21%2526utdid%253DYMdQYylXIpoDAAF8itPKtOYe%2526utype%253Dpre_vip%2526sdk%253D13.0&key=and_log&readingList=%5B%7B%22startTime%22%3A1624007328%2C%22readObjType%22%3A1%2C%22attr%22%3A2%2C%22readObjId%22%3A%228317417%22%2C%22readChapterId%22%3A1420274%2C%22readingLen%22%3A37%7D%5D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=856B8ABD4FB833663C4E51D54F5BCBA3&timestamp=1624007365&user_id=2125118594"},{"key":"shuqiydbody11","val":"_public=skinId%3D999%26idfa%3D92FFA035-6810-4B13-9883-5085DB51547B%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26umidtoken%3DYMdQYylXIpoDAAF8itPKtOYe%26user_id%3D2125118594%26sn%3DDE20B2B3BEA4E913131A1135911CA850F967F322%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D8CA843D498D4F7141115DEC6199055041EDBDF8E%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPad3G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYMdQYylXIpoDAAF8itPKtOYe%26utype%3Dpre_vip%26sdk%3D13.0&deliveryId=707&key=sq_app_ad&miniWua=HHnB_N8HYMxc2Pt6lHaoTU%2BPjml4R9OtayqBaKKNb7d8PfKI%3D&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=678&sign=D5B86B51C64247F50EDAE2166D9A868E&timestamp=1624007361&userId=2125118594&wua=HIVW_/4rE1FpkoCDZq63CBMVMkJ7cvygvSBPf6XxDgh1/zQ1Eghjbbswfmewu%2BgV5tseSpMEy5OyXW%2BXKsWyS0PcYZCChi/UPYZqPaGS9LVtRHKj2OmOb2CmNwzoBQm2YMtYk1/yhLXRdTTYlpbfHXIRDPldEP9%2BTUaku/R8YIi6RExYBTERvU5VPuTzojvNTHJsB2ib3Wl98dLx%2BsTCNQT4RzK/er%2BYsLepDkfrI4SwvWug%3D"},{"key":"shuqiqdbody11","val":"clientTimestamp=1624007368&position=501&userId=2125118594&signInType=1&wua=HIVW_xW5pdJjIXWVWxptY3WKS3VwpWVzLtHmWKlNdTB2UTkC2F%2FkMlClxqu8NvFe197ymE76Apw8gOl%2FMyNNEQh0rrPYgPWfk7zF%2BSFk4ykfCdg0eJeAtjO1bTElZwflafUH6eA8Cv8ZQkSKxyE1G6siKG%2BOFC2249RoQoq1BMTinqTbDv8RgKnFadrBibbLqaXBli7aBJli9VbGi8OW%2Brdznlspvkkwqk98eC%2FQxjVoqvk8%3D&ua=&miniWua=HHnB_DorZh1LFuJZZWNHb1ms5zif%2Bret%2Fw2um3bEqsdJUIXU%3D&umidtoken=YMdQYylXIpoDAAF8itPKtOYe&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&sign=576285767afa2d1acfe211f2795a7ee3&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26sdk%3D13.0%26utdid%3DYMdQYylXIpoDAAF8itPKtOYe%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2125118594%26sn%3DDE20B2B3BEA4E913131A1135911CA850F967F322%26umidtoken%3DYMdQYylXIpoDAAF8itPKtOYe%26msv%3D8.0.0%26brand%3DApple%26imei%3D8CA843D498D4F7141115DEC6199055041EDBDF8E%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad3G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D92FFA035-6810-4B13-9883-5085DB51547B"},{"key":"shuqirwbody11","val":""},{"key":"shuqifxbody11","val":""},{"key":"shuqisprwurl11","val":"https://ocean.shuqireader.com/api/ad/adserver/v1/api/getAdInfo?appVer=4.3.6.0&placeId=111111&platform=iOS&requestSrc=h5&resourceId=626&timestamp=1624007405&user_id=2125118594&sqSv=1.0&sign=6b9210b85b23bfe1986977bad6fbd49a&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.0%26utdid%3DYMdQYylXIpoDAAF8itPKtOYe%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2125118594%26sn%3DDE20B2B3BEA4E913131A1135911CA850F967F322%26umidtoken%3DYMdQYylXIpoDAAF8itPKtOYe%26msv%3D8.0.0%26brand%3DApple%26imei%3D8CA843D498D4F7141115DEC6199055041EDBDF8E%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad3G%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D92FFA035-6810-4B13-9883-5085DB51547B"},{"key":"shuqijlbody11","val":"requestSrc=h5&userId=2125118594&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624007380&sqSv=1.0&sign=450966243ac30c899a60d197cd533fc4&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26sdk%3D13.0%26utdid%3DYMdQYylXIpoDAAF8itPKtOYe%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2125118594%26sn%3DDE20B2B3BEA4E913131A1135911CA850F967F322%26umidtoken%3DYMdQYylXIpoDAAF8itPKtOYe%26msv%3D8.0.0%26brand%3DApple%26imei%3D8CA843D498D4F7141115DEC6199055041EDBDF8E%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad3G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D92FFA035-6810-4B13-9883-5085DB51547B"},{"key":"shuqisqjlbody11","val":"src=&userId=2125118594&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624007372&sqSv=1.0&sign=5be3ced3c455b60df5c5ab342f264a38&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26sdk%3D13.0%26utdid%3DYMdQYylXIpoDAAF8itPKtOYe%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2125118594%26sn%3DDE20B2B3BEA4E913131A1135911CA850F967F322%26umidtoken%3DYMdQYylXIpoDAAF8itPKtOYe%26msv%3D8.0.0%26brand%3DApple%26imei%3D8CA843D498D4F7141115DEC6199055041EDBDF8E%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad3G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D92FFA035-6810-4B13-9883-5085DB51547B"},{"key":"shuqicjyurl11","val":"https://ocean.shuqireader.com/api/activity/activity/v1/lottery/info?timestamp=1624007409&userId=2125118594&activityId=311&sqSv=1.0&sign=d1eb671c74c683a251c82835805db47d&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.0%26utdid%3DYMdQYylXIpoDAAF8itPKtOYe%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2125118594%26sn%3DDE20B2B3BEA4E913131A1135911CA850F967F322%26umidtoken%3DYMdQYylXIpoDAAF8itPKtOYe%26msv%3D8.0.0%26brand%3DApple%26imei%3D8CA843D498D4F7141115DEC6199055041EDBDF8E%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad3G%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D92FFA035-6810-4B13-9883-5085DB51547B"},{"key":"shuqicjcsbody11","val":"_public=skinId%3D999%26idfa%3D92FFA035-6810-4B13-9883-5085DB51547B%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26umidtoken%3DYMdQYylXIpoDAAF8itPKtOYe%26user_id%3D2125118594%26sn%3DDE20B2B3BEA4E913131A1135911CA850F967F322%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D8CA843D498D4F7141115DEC6199055041EDBDF8E%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPad3G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYMdQYylXIpoDAAF8itPKtOYe%26utype%3Dpre_vip%26sdk%3D13.0&deliveryId=711&key=sq_app_ad&miniWua=HHnB_mjJhxbdO5YV/oMgnTe%2BbgOoInchxA4BeqqyKxdLQXmw%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=703&sign=B60494A0878351D814B7E89ADD720DEE&timestamp=1624007390&userId=2125118594&user_id=2125118594&wua=HIVW_g7NfcvhniDaT9fFm2dVQ08XiHj8V2iUXNm/fdEZv55opSzNNh%2BlK1K3mgiBGhZ9ffC9T0yCsN2XAJCY1HBeDHbZS8N2bmW9WnU6Ixhg/qdnvIx01OrQXDGRYQxhiqIwPgsIMZdufWPvMmmbWQTlvdUxU1MA1xn9GPB2Pf93%2BwUdZu0t2wRdURSwyw37LYKP%2B1XT1Rm3GpBOIuvZeEFogUi%2BqTLocvsSBc2fOKIXkjRw%3D"},{"key":"shuqicjbody11","val":"wua=HIVW_%2BYf%2B%2Bm5eY%2BLn5BwUDDiwxr2Z5yFJxpJxhr2QGCzXlHKXqNT4D72UNLo7dOVjFjKRh7TKjyH90XcPmvizQm1e%2BaY%2BRLRT9xD5LJMNaRrLOLjifqixQ6LHhsipowo8ZaufUHyr%2BoH3osvwhCs%2BnfKpP77vSgCR2YoIegUzfQ4jQ4vR4nwlkowE8Vn%2BVEfX4JcgfwmDmOdKFNay%2B2Gqdwpgawfgb0TsUiJGg%2FHcXL%2BB3xs%3D&ua=&userId=2125118594&umidtoken=YMdQYylXIpoDAAF8itPKtOYe&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&asac=2A20C07RJ9F51AOEFSNHDR&timestamp=1624007393&activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&sqSv=1.0&sign=0b4ba30f73dc6400fac71c2ac638795a&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.0%26utdid%3DYMdQYylXIpoDAAF8itPKtOYe%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2125118594%26sn%3DDE20B2B3BEA4E913131A1135911CA850F967F322%26umidtoken%3DYMdQYylXIpoDAAF8itPKtOYe%26msv%3D8.0.0%26brand%3DApple%26imei%3D8CA843D498D4F7141115DEC6199055041EDBDF8E%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad3G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D92FFA035-6810-4B13-9883-5085DB51547B"},{"key":"shuqijsspbody11","val":""},{"key":"shuqijsydurl11","val":""},{"key":"shuqijsydbody11","val":""},{"key":"shuqijsqdbody11","val":""},{"key":"shuqijsqdspyurl11","val":""},{"key":"shuqijsqdspbody11","val":""},{"key":"shuqijsrwbody11","val":""},{"key":"shuqijsfxbody11","val":""},{"key":"shuqijsbookurl11","val":""},{"key":"shuqijsbookbody11","val":""},{"key":"shuqijssprwurl11","val":""},{"key":"shuqiuserurl12","val":"https://ocean.shuqireader.com/api/jaccount/accountapi/v1/sapi/account/getBindinfo?userId=2129122480&sqSv=1.0&timestamp=1624007517&sign=56fb6cd9a29e385f62e35dbe98957b41&key=sq_h5_gateway"},{"key":"shuqisyurl12","val":"https://render.shuqireader.com/load/resource?sdk=13.2&utdid=YMdQYylXIpoDAAF8itPKtOYe&ustatus=0&first_placeid=111111&net_env=3g&placeid=111111&user_id=2129122480&sn=823C298393E1869FB9EDEF00F214604E20A9ADB5&umidtoken=YMdQYylXIpoDAAF8itPKtOYe&msv=8.0.0&brand=Apple&imei=7E82232629EB1EBE8F583094288F037F63E1E5B9&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=iOS&ver=210301&mod=UnknowniPad&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=3EA6DB2B-C2BA-47A0-B6D1-A8F5DCBCA1F0"},{"key":"shuqisybody12","val":"appVer=4.3.6.0&imei=7E82232629EB1EBE8F583094288F037F63E1E5B9&isNewUser=1&params=%7B%22resources%22%3A%7B%22ShuqiVipEntry%22%3A%7B%7D%2C%22personalCardConfig%22%3A%7B%7D%7D%7D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=8867df14228900c1d72ca916581cabe7&sn=823C298393E1869FB9EDEF00F214604E20A9ADB5&soft_id=21&timestamp=1624007434&user_id=2129122480&ver=210301"},{"key":"shuqispbody12","val":"_public=skinId%3D999%26idfa%3D3EA6DB2B-C2BA-47A0-B6D1-A8F5DCBCA1F0%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26umidtoken%3DYMdQYylXIpoDAAF8itPKtOYe%26user_id%3D2129122480%26sn%3D823C298393E1869FB9EDEF00F214604E20A9ADB5%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D7E82232629EB1EBE8F583094288F037F63E1E5B9%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYMdQYylXIpoDAAF8itPKtOYe%26utype%3Dpre_vip%26sdk%3D13.2&deliveryId=525&key=sq_app_ad&miniWua=HHnB_uMO%2B9JUEmKze9CruMv1g6q/zeZRLJxeCT89JTU0efeI%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=626&sign=25E9823D26840EC884080406EE37616B&timestamp=1624007480&userId=2129122480&user_id=2129122480&wua=HIVW_u2uwKkffzGDVnQbxAa9hCo8hH2xenbVGLK%2B9QULhjhUMDpL69qvg7SpbY9/Q9%2BMRRitZpuhAnik8mSdpluF7o71yGRlCEzb1fBOiE70b2is2n55zHQbAhYnyqajyYXzQgQ6XTmg23m/IcQx43eLO4XrJuLo4K5dXdb3orqxiILberaRapNI4mFZdWt0v/03XAtigTop/G/NdKZFHCbiJGqOy8IXiZzhYd48fD2gIdBA%3D"},{"key":"shuqiscbody12","val":"_public=skinId%253D999%2526idfa%253D3EA6DB2B-C2BA-47A0-B6D1-A8F5DCBCA1F0%2526ustatus%253D0%2526first_placeid%253D111111%2526net_env%253D3g%2526umidtoken%253DYMdQYylXIpoDAAF8itPKtOYe%2526user_id%253D2129122480%2526sn%253D823C298393E1869FB9EDEF00F214604E20A9ADB5%2526placeid%253D111111%2526msv%253D8.0.0%2526brand%253DApple%2526imei%253D7E82232629EB1EBE8F583094288F037F63E1E5B9%2526skinVersionPrefix%253D1%2526appVer%253D4.3.6.0%2526skinActiveColor%253D0F9970%2526manufacturer%253DApple%2526skinColor%253D23B383%2526platform%253DiOS%2526ver%253D210301%2526mod%253DUnknowniPad%2526statusBarHeight%253D44.000000%2526skinVersion%253D1%2526wh%253D1242x2688%2526soft_id%253D21%2526utdid%253DYMdQYylXIpoDAAF8itPKtOYe%2526utype%253Dpre_vip%2526sdk%253D13.2&key=and_log&readingList=%5B%7B%22startTime%22%3A1624007439%2C%22readObjType%22%3A1%2C%22attr%22%3A2%2C%22readObjId%22%3A%226725806%22%2C%22readChapterId%22%3A736013%2C%22readingLen%22%3A33%7D%5D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=53B0B75B50AAEF0D486BF7E271CD8159&timestamp=1624007472&user_id=2129122480"},{"key":"shuqiydbody12","val":"_public=skinId%3D999%26idfa%3D3EA6DB2B-C2BA-47A0-B6D1-A8F5DCBCA1F0%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26umidtoken%3DYMdQYylXIpoDAAF8itPKtOYe%26user_id%3D2129122480%26sn%3D823C298393E1869FB9EDEF00F214604E20A9ADB5%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D7E82232629EB1EBE8F583094288F037F63E1E5B9%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYMdQYylXIpoDAAF8itPKtOYe%26utype%3Dpre_vip%26sdk%3D13.2&deliveryId=707&key=sq_app_ad&miniWua=HHnB_hKvSn60qZ2Kcv%2BI6wuhDCf4%2BIuRyxuhUh09YnZz66Jk%3D&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=678&sign=3C70D031F2214C3C2D254B66DA809813&timestamp=1624007469&userId=2129122480&wua=HIVW_v07VSlzXvJIZwedjcjceDyRxFchlIdL3l7KjAmOz91NQsqbXbIgORTITswo2SyCkTw6KVmH2DKeAmhUZmNnFpH1HSH9kTGXfLlb6OG%2B0oUishnnTmfqsxG21UTqFgPHh%2Bkfcm3gIJKmBkcH/GT4JrvVXmSZOyRn/0Ib7kokq8rZ6xukkB/4nmXK53YeDmpl8Rvm49vGDg6ZkgDNhHwuCoczmuZpBO8zpNXVMd8BS0Ss%3D"},{"key":"shuqiqdbody12","val":"clientTimestamp=1624007475&position=501&userId=2129122480&signInType=1&wua=HIVW_Kmy56oL8MoHHCSRPzqDrQ2wcjuo7JuUCL43H0Br2JnEPpSa896lxtITSfirLZq7Rf6dabI3sWtzIPZ5jPo%2BR73FGfmL9RLPEJ0UxjC39nC7Dwbw6VaCuNGA0s%2FR4JMEiBlaQDiASU%2BKMcf%2BhbJ5%2FYgmNlZQPmwoeFwQoLmSpm2SYQxQkTpN%2FrlgngfAcsqe8lqSIwiT%2BkV3IxCHWtRCdFw2T%2BNUz2IUBEB%2BxXd7lSFg%3D&ua=&miniWua=HHnB_6gcQBlIDPp1eBmply749OQ%2FmASjMIYrqa2XMLj8%2FqmQ%3D&umidtoken=YMdQYylXIpoDAAF8itPKtOYe&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&sign=1092e4ee456bb5544a22277a2e7a6522&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26sdk%3D13.2%26utdid%3DYMdQYylXIpoDAAF8itPKtOYe%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2129122480%26sn%3D823C298393E1869FB9EDEF00F214604E20A9ADB5%26umidtoken%3DYMdQYylXIpoDAAF8itPKtOYe%26msv%3D8.0.0%26brand%3DApple%26imei%3D7E82232629EB1EBE8F583094288F037F63E1E5B9%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D3EA6DB2B-C2BA-47A0-B6D1-A8F5DCBCA1F0"},{"key":"shuqirwbody12","val":"serviceWorkerOn=1&sdk=13.2&utdid=YMdQYylXIpoDAAF8itPKtOYe&ustatus=0&first_placeid=111111&net_env=3g&placeid=111111&user_id=2129122480&sn=823C298393E1869FB9EDEF00F214604E20A9ADB5&umidtoken=YMdQYylXIpoDAAF8itPKtOYe&msv=8.0.0&brand=Apple&imei=7E82232629EB1EBE8F583094288F037F63E1E5B9&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&session=&skinColor=23B383&platform=1&ver=210301&mod=UnknowniPad&statusBarHeight=44.000000&skinVersion=1&wh=1242x2688&soft_id=21&utype=pre_vip&skinId=999&idfa=3EA6DB2B-C2BA-47A0-B6D1-A8F5DCBCA1F0&params=%7B%22resources%22%3A%7B%22ShuqiBsDailyTask%22%3A%7B%7D%7D%7D&userId=2129122480&placeId=111111&timestamp=1624007494&sqSv=1.0&sign=b2efbc600e125cb88179aa56f2c9c40e&key=sq_h5_gateway&_public="},{"key":"shuqifxbody12","val":""},{"key":"shuqisprwurl12","val":"https://ocean.shuqireader.com/api/ad/adserver/v1/api/getAdInfo?appVer=4.3.6.0&placeId=111111&platform=iOS&requestSrc=h5&resourceId=626&timestamp=1624007517&user_id=2129122480&sqSv=1.0&sign=36a00e9d42f7c0723b450d46dd5a63a8&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26sdk%3D13.2%26utdid%3DYMdQYylXIpoDAAF8itPKtOYe%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2129122480%26sn%3D823C298393E1869FB9EDEF00F214604E20A9ADB5%26umidtoken%3DYMdQYylXIpoDAAF8itPKtOYe%26msv%3D8.0.0%26brand%3DApple%26imei%3D7E82232629EB1EBE8F583094288F037F63E1E5B9%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D3EA6DB2B-C2BA-47A0-B6D1-A8F5DCBCA1F0"},{"key":"shuqijlbody12","val":"requestSrc=h5&userId=2129122480&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624007494&sqSv=1.0&sign=8e481a9a6ebd4c0391980a7daecc4e2d&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26sdk%3D13.2%26utdid%3DYMdQYylXIpoDAAF8itPKtOYe%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2129122480%26sn%3D823C298393E1869FB9EDEF00F214604E20A9ADB5%26umidtoken%3DYMdQYylXIpoDAAF8itPKtOYe%26msv%3D8.0.0%26brand%3DApple%26imei%3D7E82232629EB1EBE8F583094288F037F63E1E5B9%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D3EA6DB2B-C2BA-47A0-B6D1-A8F5DCBCA1F0"},{"key":"shuqisqjlbody12","val":"src=&userId=2129122480&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624007480&sqSv=1.0&sign=7f0e1d4620d9e072277e73d2725185df&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26sdk%3D13.2%26utdid%3DYMdQYylXIpoDAAF8itPKtOYe%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2129122480%26sn%3D823C298393E1869FB9EDEF00F214604E20A9ADB5%26umidtoken%3DYMdQYylXIpoDAAF8itPKtOYe%26msv%3D8.0.0%26brand%3DApple%26imei%3D7E82232629EB1EBE8F583094288F037F63E1E5B9%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D3EA6DB2B-C2BA-47A0-B6D1-A8F5DCBCA1F0"},{"key":"shuqicjyurl12","val":"https://ocean.shuqireader.com/api/activity/activity/v1/lottery/info?timestamp=1624007521&userId=2129122480&activityId=311&sqSv=1.0&sign=42298934ffd62fdebf1664fdf0a169f0&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.2%26utdid%3DYMdQYylXIpoDAAF8itPKtOYe%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2129122480%26sn%3D823C298393E1869FB9EDEF00F214604E20A9ADB5%26umidtoken%3DYMdQYylXIpoDAAF8itPKtOYe%26msv%3D8.0.0%26brand%3DApple%26imei%3D7E82232629EB1EBE8F583094288F037F63E1E5B9%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D3EA6DB2B-C2BA-47A0-B6D1-A8F5DCBCA1F0"},{"key":"shuqicjcsbody12","val":"_public=skinId%3D999%26idfa%3D3EA6DB2B-C2BA-47A0-B6D1-A8F5DCBCA1F0%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26umidtoken%3DYMdQYylXIpoDAAF8itPKtOYe%26user_id%3D2129122480%26sn%3D823C298393E1869FB9EDEF00F214604E20A9ADB5%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D7E82232629EB1EBE8F583094288F037F63E1E5B9%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYMdQYylXIpoDAAF8itPKtOYe%26utype%3Dpre_vip%26sdk%3D13.2&deliveryId=711&key=sq_app_ad&miniWua=HHnB_FZIHyu6F1g1ygzB1LbpjWC2GjAcPnkLRZ2krxEV%2BGdw%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=703&sign=0C5C6E78A79368BF3FC2A645937E237C&timestamp=1624007499&userId=2129122480&user_id=2129122480&wua=HIVW_jzK1tGvJFfvXq8gNF%2BSg0wK9Gnq8jU6C2wrRygR%2BQYozV/n9rlaAuNExUKII8PC0gXQJN/aVESzdQdiLIn2ndVY/1ruwAFUBcgv2UV1AssociNR0j3QhWbCb1Vkr5N%2BzHzQuTHpsgpgokLHoXKlUIfGfqtWkEz0Sq7Y/4y28qrZexKL/BxeZTEq/zPIfgRIK76XjkGSQHrz5SK8DsrSgh3aFvYkafEugPacuO3iOrU0%3D"},{"key":"shuqicjbody12","val":"wua=HIVW_rT%2FdnSx7I0UpQgJpbLr8P%2FXvND2usIRAeyuPq7fB8zzNuN28zAUPsxmGEgsNx9IwUj%2FQgxYPEwvgq87TLWS9tCoQuFP2O1LSGP1cTiqwCRKIJgE3P8J6k%2B52qazHYt63I1Eiog0G0ITQCyCpfzsaklTyrR8dqJRTfvMeib8MHyKkA6oMLyVzqrxoixf%2FxHWY92OpF8F7VMvSYipOu3FWHKMkL6pQN9KofB75Au5yC18%3D&ua=&userId=2129122480&umidtoken=YMdQYylXIpoDAAF8itPKtOYe&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&asac=2A20C07RJ9F51AOEFSNHDR&timestamp=1624007505&activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&sqSv=1.0&sign=b217133a43a25575f9a165c849f5104e&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.2%26utdid%3DYMdQYylXIpoDAAF8itPKtOYe%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2129122480%26sn%3D823C298393E1869FB9EDEF00F214604E20A9ADB5%26umidtoken%3DYMdQYylXIpoDAAF8itPKtOYe%26msv%3D8.0.0%26brand%3DApple%26imei%3D7E82232629EB1EBE8F583094288F037F63E1E5B9%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D3EA6DB2B-C2BA-47A0-B6D1-A8F5DCBCA1F0"},{"key":"shuqijsspbody12","val":""},{"key":"shuqijsydurl12","val":""},{"key":"shuqijsydbody12","val":""},{"key":"shuqijsqdbody12","val":""},{"key":"shuqijsqdspyurl12","val":""},{"key":"shuqijsqdspbody12","val":""},{"key":"shuqijsrwbody12","val":""},{"key":"shuqijsfxbody12","val":""},{"key":"shuqijsbookurl12","val":""},{"key":"shuqijsbookbody12","val":""},{"key":"shuqijssprwurl12","val":""},{"key":"shuqiuserurl13","val":"https://ocean.shuqireader.com/api/jaccount/accountapi/v1/sapi/account/getBindinfo?userId=2126594410&sqSv=1.0&timestamp=1624007655&sign=4ff9f2b7e838edff493ee197dafd87f4&key=sq_h5_gateway"},{"key":"shuqisyurl13","val":"https://render.shuqireader.com/load/resource?sdk=13.1.2&utdid=YMdQomkearoDAPJEc5o0udrt&ustatus=0&first_placeid=111111&net_env=3g&placeid=111111&user_id=2126594410&sn=5007BD5D71F548B10E54361F17A2CEA37347F514&umidtoken=YMdQomkearoDAPJEc5o0udrt&msv=8.0.0&brand=Apple&imei=A8000E31B60831857165C27CF8A405BAD39D3792&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=iOS&ver=210301&mod=iPhone6splus&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=41020D4A-F27A-47E1-A898-EE223BB71768"},{"key":"shuqisybody13","val":"appVer=4.3.6.0&imei=A8000E31B60831857165C27CF8A405BAD39D3792&isNewUser=1&params=%7B%22resources%22%3A%7B%22ShuqiVipEntry%22%3A%7B%7D%2C%22personalCardConfig%22%3A%7B%7D%7D%7D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=e793ccd93fa25b78cefbec833f3f853f&sn=5007BD5D71F548B10E54361F17A2CEA37347F514&soft_id=21&timestamp=1624007540&user_id=2126594410&ver=210301"},{"key":"shuqispbody13","val":"_public=skinId%3D999%26idfa%3D41020D4A-F27A-47E1-A898-EE223BB71768%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26umidtoken%3DYMdQomkearoDAPJEc5o0udrt%26user_id%3D2126594410%26sn%3D5007BD5D71F548B10E54361F17A2CEA37347F514%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3DA8000E31B60831857165C27CF8A405BAD39D3792%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhone6splus%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYMdQomkearoDAPJEc5o0udrt%26utype%3Dpre_vip%26sdk%3D13.1.2&deliveryId=525&key=sq_app_ad&miniWua=HHnB_kwsPQa5LPa3Ry0tCEXxaoz8oXvgqfQhzvcf/KAA6SxI%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=626&sign=049C00289D753973A0045010AB85A152&timestamp=1624007596&userId=2126594410&user_id=2126594410&wua=HIVW_i5gMN5l8R9BmJg43vs4iaaTs3Ix6vVkJZYTt1ooXWw0cKIL549xzKmiIMYYkQ8P3/bWZ%2BxpatkkxyKwabLmldnjW/%2BBkXC1VXYc331uqsieDTQ%2BY7ud13F6zo64mQvGV%2B5ZLrRsFE1Iho2S70pOfAtxe8HVqnfW1o3JkyLZl9/MEQntYSYuvLT6wIAY0NK3LqjadaaWR2xZYI4Z0G9DihlMGB32xmgpH0BEAFckeU5c%3D"},{"key":"shuqiscbody13","val":"_public=skinId%253D999%2526idfa%253D41020D4A-F27A-47E1-A898-EE223BB71768%2526ustatus%253D0%2526first_placeid%253D111111%2526net_env%253D3g%2526umidtoken%253DYMdQomkearoDAPJEc5o0udrt%2526user_id%253D2126594410%2526sn%253D5007BD5D71F548B10E54361F17A2CEA37347F514%2526placeid%253D111111%2526msv%253D8.0.0%2526brand%253DApple%2526imei%253DA8000E31B60831857165C27CF8A405BAD39D3792%2526skinVersionPrefix%253D1%2526appVer%253D4.3.6.0%2526skinActiveColor%253D0F9970%2526manufacturer%253DApple%2526skinColor%253D23B383%2526platform%253DiOS%2526ver%253D210301%2526mod%253DiPhone6splus%2526statusBarHeight%253D44.000000%2526skinVersion%253D1%2526wh%253D1242x2688%2526soft_id%253D21%2526utdid%253DYMdQomkearoDAPJEc5o0udrt%2526utype%253Dpre_vip%2526sdk%253D13.1.2&key=and_log&readingList=%5B%7B%22startTime%22%3A1624007576%2C%22readObjType%22%3A1%2C%22attr%22%3A2%2C%22readObjId%22%3A%228340007%22%2C%22readChapterId%22%3A1429992%2C%22readingLen%22%3A11%7D%5D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=FE411B3AFE0FE3AB1CA4DB189CBDED56&timestamp=1624007587&user_id=2126594410"},{"key":"shuqiydbody13","val":"_public=skinId%3D999%26idfa%3D41020D4A-F27A-47E1-A898-EE223BB71768%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26umidtoken%3DYMdQomkearoDAPJEc5o0udrt%26user_id%3D2126594410%26sn%3D5007BD5D71F548B10E54361F17A2CEA37347F514%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3DA8000E31B60831857165C27CF8A405BAD39D3792%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhone6splus%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYMdQomkearoDAPJEc5o0udrt%26utype%3Dpre_vip%26sdk%3D13.1.2&deliveryId=707&key=sq_app_ad&miniWua=HHnB_N0tNdYyR/MB1vT1ndOrYTMeTig6c9943pq8EvDgdRHo%3D&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=678&sign=9A14C67432A73FDC8A81067963171057&timestamp=1624007580&userId=2126594410&wua=HIVW_Utw6gRC4%2BilYn3waWfaIjlP83mfif6ZxlY5FiHmJctY8v97lwesmtzlg/jxf0N7ms9zHn5DTxOz0geuVIGkR/bj0ZeOCDYXhV0yqWEFJkjgklAt9YkEwVRN9vJkJ9iG2gMxlURnFBfR1zpHko4aNN39PCP49ZMYU3hz3Ii5vgO7E14BF8k/tfxJ3RIHV99Hij6VoElF06dC36eYambd5pHByiHiE%2Blk1kT62OBKixZs%3D"},{"key":"shuqiqdbody13","val":"clientTimestamp=1624007591&position=501&userId=2126594410&signInType=1&wua=HIVW_ulnYbdqJUPfYTg0GwVeiq8qiT4Dce%2BdJU%2FhO9fO2e32w4dwOQV46Vl5Pl8SWAEE3J7Dl8wSFEgTwWEKPxaTrWiFB2xBepv1kS%2BB8nPNB9IZ7YgXa63vpa6MIp7ivkAy2g1za33jKmr3o4VrYlsDTNXKftmM8zXWiAa6vEr61LYAcSFXPAxPYYD1vbpNtbKB9ikg%2FkGcw6QKTODa2lkDZ1KRl6TVcqWEoAJsF%2F%2B7FPn0%3D&ua=&miniWua=HHnB_VZK9O4KPB0wsr6b3nrKsgCPruS9Y%2FuyYrVJMvmziwgc%3D&umidtoken=YMdQomkearoDAPJEc5o0udrt&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&sign=09f2377f54a98a141b0b3305fffe64dc&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.1.2%26utdid%3DYMdQomkearoDAPJEc5o0udrt%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2126594410%26sn%3D5007BD5D71F548B10E54361F17A2CEA37347F514%26umidtoken%3DYMdQomkearoDAPJEc5o0udrt%26msv%3D8.0.0%26brand%3DApple%26imei%3DA8000E31B60831857165C27CF8A405BAD39D3792%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone6splus%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D41020D4A-F27A-47E1-A898-EE223BB71768"},{"key":"shuqirwbody13","val":"serviceWorkerOn=1&stopPullRefresh=1&from=ShuqiTab&upf=20368&sdk=13.1.2&utdid=YMdQomkearoDAPJEc5o0udrt&ustatus=0&first_placeid=111111&net_env=3g&placeid=111111&user_id=2126594410&sn=5007BD5D71F548B10E54361F17A2CEA37347F514&umidtoken=YMdQomkearoDAPJEc5o0udrt&msv=8.0.0&brand=Apple&imei=A8000E31B60831857165C27CF8A405BAD39D3792&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&session=&skinColor=23B383&platform=1&ver=210301&mod=iPhone6splus&statusBarHeight=44.000000&skinVersion=1&wh=1242x2688&soft_id=21&utype=pre_vip&skinId=999&idfa=41020D4A-F27A-47E1-A898-EE223BB71768&params=%7B%22resources%22%3A%7B%22ShuqiBsDailyTask%22%3A%7B%7D%7D%7D&userId=2126594410&placeId=111111&timestamp=1624007606&sqSv=1.0&sign=74a3ed2c909ef088f4d70408eceaa143&key=sq_h5_gateway&_public="},{"key":"shuqifxbody13","val":""},{"key":"shuqisprwurl13","val":"https://ocean.shuqireader.com/api/ad/adserver/v1/api/getAdInfo?appVer=4.3.6.0&placeId=111111&platform=iOS&requestSrc=h5&resourceId=626&timestamp=1624007653&user_id=2126594410&sqSv=1.0&sign=275011e6825bcd38ab900be0e59f053a&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.1.2%26utdid%3DYMdQomkearoDAPJEc5o0udrt%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2126594410%26sn%3D5007BD5D71F548B10E54361F17A2CEA37347F514%26umidtoken%3DYMdQomkearoDAPJEc5o0udrt%26msv%3D8.0.0%26brand%3DApple%26imei%3DA8000E31B60831857165C27CF8A405BAD39D3792%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone6splus%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D41020D4A-F27A-47E1-A898-EE223BB71768"},{"key":"shuqijlbody13","val":"requestSrc=h5&userId=2126594410&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624007606&sqSv=1.0&sign=372e6b22b64c53f516f507e4149cbac9&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.1.2%26utdid%3DYMdQomkearoDAPJEc5o0udrt%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2126594410%26sn%3D5007BD5D71F548B10E54361F17A2CEA37347F514%26umidtoken%3DYMdQomkearoDAPJEc5o0udrt%26msv%3D8.0.0%26brand%3DApple%26imei%3DA8000E31B60831857165C27CF8A405BAD39D3792%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone6splus%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D41020D4A-F27A-47E1-A898-EE223BB71768"},{"key":"shuqisqjlbody13","val":"src=&userId=2126594410&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624007594&sqSv=1.0&sign=eb3c75fe6ebf12551147b2f1126cd79e&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.1.2%26utdid%3DYMdQomkearoDAPJEc5o0udrt%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2126594410%26sn%3D5007BD5D71F548B10E54361F17A2CEA37347F514%26umidtoken%3DYMdQomkearoDAPJEc5o0udrt%26msv%3D8.0.0%26brand%3DApple%26imei%3DA8000E31B60831857165C27CF8A405BAD39D3792%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone6splus%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D41020D4A-F27A-47E1-A898-EE223BB71768"},{"key":"shuqicjyurl13","val":"https://ocean.shuqireader.com/api/activity/activity/v1/lottery/info?timestamp=1624007656&userId=2126594410&activityId=311&sqSv=1.0&sign=5dcf4aeb0f71c5cf67e5aa876fe45e01&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.1.2%26utdid%3DYMdQomkearoDAPJEc5o0udrt%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2126594410%26sn%3D5007BD5D71F548B10E54361F17A2CEA37347F514%26umidtoken%3DYMdQomkearoDAPJEc5o0udrt%26msv%3D8.0.0%26brand%3DApple%26imei%3DA8000E31B60831857165C27CF8A405BAD39D3792%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone6splus%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D41020D4A-F27A-47E1-A898-EE223BB71768"},{"key":"shuqicjcsbody13","val":"_public=skinId%3D999%26idfa%3D41020D4A-F27A-47E1-A898-EE223BB71768%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26umidtoken%3DYMdQomkearoDAPJEc5o0udrt%26user_id%3D2126594410%26sn%3D5007BD5D71F548B10E54361F17A2CEA37347F514%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3DA8000E31B60831857165C27CF8A405BAD39D3792%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhone6splus%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYMdQomkearoDAPJEc5o0udrt%26utype%3Dpre_vip%26sdk%3D13.1.2&deliveryId=711&key=sq_app_ad&miniWua=HHnB_DYZWnKkDHMVz7KgEej/v0BavFQ29OFgXIE7VXhFzLKA%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=703&sign=E3869C67724B03F01C5DDA4481DB8D57&timestamp=1624007615&userId=2126594410&user_id=2126594410&wua=HIVW_FO7lrzioOluEp1Gy8COttzxvovRnR12nqpZ2zlLNqWv0QriiEGSWk/6tYXTzSz9Q14ujUpmbFhYFr0HWctcnRpXPsUxhxaWt82yAliZHr9VLIo9935yw/NORheVAeqIRkE8z%2BFH2iHo0YsfjrijYA9XmHNrN2UXoT7xIDb%2Bkn6YyGoNG0vruNz4isSk4553pNXdFHinPS2ksJ/XI1PfaP9P6UVNBFsPARWj0ckssQYY%3D"},{"key":"shuqicjbody13","val":"wua=HIVW_qZUzEoL%2B2y3X7xq%2FV5ccooyqUb2sXU8EjR3noh4s3e8UXdh2LDLeTKOnoTB8Jqis2bkkzBpm7UmIY5d6AgRUM%2BoUsDnXEefEtv%2B2KBXrdNmuFmcwU%2FnVOQyIxAEMjc9x1iDb81JPyDCPgPf093zVROHc8fQGaQyqoOMJRYNAXcEh7e15KMj%2BELsQeKziAHN1zrePI2vzH3feQV1%2FZnntOjvEu%2Fy8R97ypqJ1EtU%2FFw4%3D&ua=&userId=2126594410&umidtoken=YMdQomkearoDAPJEc5o0udrt&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&asac=2A20C07RJ9F51AOEFSNHDR&timestamp=1624007627&activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&sqSv=1.0&sign=7b34183a32614643e68995d4ee233209&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.1.2%26utdid%3DYMdQomkearoDAPJEc5o0udrt%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2126594410%26sn%3D5007BD5D71F548B10E54361F17A2CEA37347F514%26umidtoken%3DYMdQomkearoDAPJEc5o0udrt%26msv%3D8.0.0%26brand%3DApple%26imei%3DA8000E31B60831857165C27CF8A405BAD39D3792%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone6splus%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D41020D4A-F27A-47E1-A898-EE223BB71768"},{"key":"shuqijsspbody13","val":""},{"key":"shuqijsydurl13","val":""},{"key":"shuqijsydbody13","val":""},{"key":"shuqijsqdbody13","val":""},{"key":"shuqijsqdspyurl13","val":""},{"key":"shuqijsqdspbody13","val":""},{"key":"shuqijsrwbody13","val":""},{"key":"shuqijsfxbody13","val":""},{"key":"shuqijsbookurl13","val":""},{"key":"shuqijsbookbody13","val":""},{"key":"shuqijssprwurl13","val":""},{"key":"shuqiuserurl14","val":"https://ocean.shuqireader.com/api/jaccount/accountapi/v1/sapi/account/getBindinfo?userId=2128324017&sqSv=1.0&timestamp=1624007900&sign=99a7ef5102dcaf607d13d7008a14db42&key=sq_h5_gateway"},{"key":"shuqisyurl14","val":"https://render.shuqireader.com/load/resource?sdk=13.4&utdid=YMdQxJaYeLEDAMHH3o84z%2F1p&ustatus=0&first_placeid=111111&net_env=4g&placeid=111111&user_id=2128324017&sn=2D3D48A6AAA682BC833775DBAE7A05EFAA68437C&umidtoken=YMdQxJaYeLEDAMHH3o84z%2F1p&msv=8.0.0&brand=Apple&imei=BE0AE4EB87AAE2260EBC55F3E17F80529AD98E16&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=iOS&ver=210301&mod=UnknowniPad&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=264DB130-393F-4FC1-8DF1-4DA1CA234473"},{"key":"shuqisybody14","val":"appVer=4.3.6.0&imei=BE0AE4EB87AAE2260EBC55F3E17F80529AD98E16&isNewUser=1&params=%7B%22resources%22%3A%7B%22ShuqiVipEntry%22%3A%7B%7D%2C%22personalCardConfig%22%3A%7B%7D%7D%7D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=7f9d708943c216ec83498449ddf8043e&sn=2D3D48A6AAA682BC833775DBAE7A05EFAA68437C&soft_id=21&timestamp=1624007741&user_id=2128324017&ver=210301"},{"key":"shuqispbody14","val":"_public=skinId%3D999%26idfa%3D264DB130-393F-4FC1-8DF1-4DA1CA234473%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26umidtoken%3DYMdQxJaYeLEDAMHH3o84z/1p%26user_id%3D2128324017%26sn%3D2D3D48A6AAA682BC833775DBAE7A05EFAA68437C%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3DBE0AE4EB87AAE2260EBC55F3E17F80529AD98E16%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYMdQxJaYeLEDAMHH3o84z/1p%26utype%3Dpre_vip%26sdk%3D13.4&deliveryId=525&key=sq_app_ad&miniWua=HHnB_PxlwZ54rG171saOfhRQxRZ6DK1HkM5v%2BxwX0QLhB5oM%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=626&sign=CDDD7079B6ECFAB07231CBD66623E477&timestamp=1624007871&userId=2128324017&user_id=2128324017&wua=HIVW_GjIbMZFJxCk8hZNxCY89VpTke7qXRiTdVFgAuIU%2BkX%2BV2hhrWKS/7qwfdWKUQfeQxBY6gRIuOAB5RMll9HlRrmneu5vI0LDQr3/jRtGPUqAyuJmE2rjw6N5kRrz8lpmlh3FlCNuk3l5lgLifp2/Wqb78UP6tpslkZ5pRRLBO1QbHKzNxAq3tb5TE9spr/sqDAsB/LN33RuyOOOdQOcDqas%2BE6Po9QHZO/5vd3n%2B348M%3D"},{"key":"shuqiscbody14","val":"_public=skinId%253D999%2526idfa%253D264DB130-393F-4FC1-8DF1-4DA1CA234473%2526ustatus%253D0%2526first_placeid%253D111111%2526net_env%253D4g%2526umidtoken%253DYMdQxJaYeLEDAMHH3o84z%252F1p%2526user_id%253D2128324017%2526sn%253D2D3D48A6AAA682BC833775DBAE7A05EFAA68437C%2526placeid%253D111111%2526msv%253D8.0.0%2526brand%253DApple%2526imei%253DBE0AE4EB87AAE2260EBC55F3E17F80529AD98E16%2526skinVersionPrefix%253D1%2526appVer%253D4.3.6.0%2526skinActiveColor%253D0F9970%2526manufacturer%253DApple%2526skinColor%253D23B383%2526platform%253DiOS%2526ver%253D210301%2526mod%253DUnknowniPad%2526statusBarHeight%253D44.000000%2526skinVersion%253D1%2526wh%253D1242x2688%2526soft_id%253D21%2526utdid%253DYMdQxJaYeLEDAMHH3o84z%252F1p%2526utype%253Dpre_vip%2526sdk%253D13.4&key=and_log&readingList=%5B%7B%22startTime%22%3A1624007816%2C%22readObjType%22%3A1%2C%22attr%22%3A2%2C%22readObjId%22%3A%227910811%22%2C%22readChapterId%22%3A1334640%2C%22readingLen%22%3A41%7D%5D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=63D98D8AD4A4519F709E76E036FCE20B&timestamp=1624007857&user_id=2128324017"},{"key":"shuqiydbody14","val":"_public=skinId%3D999%26idfa%3D264DB130-393F-4FC1-8DF1-4DA1CA234473%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26umidtoken%3DYMdQxJaYeLEDAMHH3o84z/1p%26user_id%3D2128324017%26sn%3D2D3D48A6AAA682BC833775DBAE7A05EFAA68437C%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3DBE0AE4EB87AAE2260EBC55F3E17F80529AD98E16%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYMdQxJaYeLEDAMHH3o84z/1p%26utype%3Dpre_vip%26sdk%3D13.4&deliveryId=707&key=sq_app_ad&miniWua=HHnB_6oRzgW%2ByTf544Cv90U3pNZjb8kPOLZOJo6XWWb4gZng%3D&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=678&sign=EE80CA829334F04D6C989497519BB3DD&timestamp=1624007846&userId=2128324017&wua=HIVW_H3W5oB9oJukm/5HYfgH6CVsG4ULr0evu4A3UnZKDJzHCwEJtdi2uNkRRdVr21Rzy/v/i89XGXxluG4a44V9ApNsXPkx%2BtMFJaDf7EsgXr86uX1iGrNiXTriYW3jrXFzCtZXzw2l/Qn9lytT0%2BuwhhZiePsUh/d3nRDGlnSE%2B86oY1jSJ3gH5MzWcLzbrYMrD0qGSfUFvVSD4htxHLMPRNCbSAAbEvgJJ/oEXyvlFez4%3D"},{"key":"shuqiqdbody14","val":"clientTimestamp=1624007864&position=501&userId=2128324017&signInType=1&wua=HIVW_REsAWrvnQsQmrMpbq9Yt2Fp3tySI3wHBv1%2BTZE%2BIBEWb0mHn3N%2Fz%2BUGzWb53YkJB01daTvnA%2FWLkuc%2F0mM%2BHk7RT4%2Fmri7Rtiyo8VoJGQ0GNITHTPq1fTMsCywtfYmQQcN0xE%2F%2FD0qIpnI1HSmm7WaInnF%2BKPGC3yHLpZMhz7lCuK8DHEZnXhtCfliAFXu1n3SjsKbR%2BDq7ALc7DyGBos8c4GXRSB9TEKRUDm%2Fve0GY%3D&ua=&miniWua=HHnB_CBVhWcVulP9APo1nX30bADlQKpYzX2xWC%2FvvM4Es5Q0%3D&umidtoken=YMdQxJaYeLEDAMHH3o84z%2F1p&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&sign=0e0e15baf51404cbb52a2baf77202cef&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26sdk%3D13.4%26utdid%3DYMdQxJaYeLEDAMHH3o84z%252F1p%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2128324017%26sn%3D2D3D48A6AAA682BC833775DBAE7A05EFAA68437C%26umidtoken%3DYMdQxJaYeLEDAMHH3o84z%252F1p%26msv%3D8.0.0%26brand%3DApple%26imei%3DBE0AE4EB87AAE2260EBC55F3E17F80529AD98E16%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D264DB130-393F-4FC1-8DF1-4DA1CA234473"},{"key":"shuqirwbody14","val":"serviceWorkerOn=1&sdk=13.4&utdid=YMdQxJaYeLEDAMHH3o84z%2F1p&ustatus=0&first_placeid=111111&net_env=4g&placeid=111111&user_id=2128324017&sn=2D3D48A6AAA682BC833775DBAE7A05EFAA68437C&umidtoken=YMdQxJaYeLEDAMHH3o84z%2F1p&msv=8.0.0&brand=Apple&imei=BE0AE4EB87AAE2260EBC55F3E17F80529AD98E16&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&session=&skinColor=23B383&platform=1&ver=210301&mod=UnknowniPad&statusBarHeight=44.000000&skinVersion=1&wh=1242x2688&soft_id=21&utype=pre_vip&skinId=999&idfa=264DB130-393F-4FC1-8DF1-4DA1CA234473&params=%7B%22resources%22%3A%7B%22ShuqiBsDailyTask%22%3A%7B%7D%7D%7D&userId=2128324017&placeId=111111&timestamp=1624007875&sqSv=1.0&sign=264204b4d1a096fa905a237f7166a04e&key=sq_h5_gateway&_public="},{"key":"shuqifxbody14","val":""},{"key":"shuqisprwurl14","val":"https://ocean.shuqireader.com/api/ad/adserver/v1/api/getAdInfo?appVer=4.3.6.0&placeId=111111&platform=iOS&requestSrc=h5&resourceId=626&timestamp=1624007897&user_id=2128324017&sqSv=1.0&sign=c0aead3d8c96ce8d25209288ed0c079a&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.4%26utdid%3DYMdQxJaYeLEDAMHH3o84z%252F1p%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2128324017%26sn%3D2D3D48A6AAA682BC833775DBAE7A05EFAA68437C%26umidtoken%3DYMdQxJaYeLEDAMHH3o84z%252F1p%26msv%3D8.0.0%26brand%3DApple%26imei%3DBE0AE4EB87AAE2260EBC55F3E17F80529AD98E16%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D264DB130-393F-4FC1-8DF1-4DA1CA234473"},{"key":"shuqijlbody14","val":"requestSrc=h5&userId=2128324017&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624007875&sqSv=1.0&sign=f8cdc508e57e45eaab678375f158921a&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26sdk%3D13.4%26utdid%3DYMdQxJaYeLEDAMHH3o84z%252F1p%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2128324017%26sn%3D2D3D48A6AAA682BC833775DBAE7A05EFAA68437C%26umidtoken%3DYMdQxJaYeLEDAMHH3o84z%252F1p%26msv%3D8.0.0%26brand%3DApple%26imei%3DBE0AE4EB87AAE2260EBC55F3E17F80529AD98E16%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D264DB130-393F-4FC1-8DF1-4DA1CA234473"},{"key":"shuqisqjlbody14","val":"src=&userId=2128324017&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624007864&sqSv=1.0&sign=efe92be949d3c5e345c4e9c30c274a1e&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26sdk%3D13.4%26utdid%3DYMdQxJaYeLEDAMHH3o84z%252F1p%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2128324017%26sn%3D2D3D48A6AAA682BC833775DBAE7A05EFAA68437C%26umidtoken%3DYMdQxJaYeLEDAMHH3o84z%252F1p%26msv%3D8.0.0%26brand%3DApple%26imei%3DBE0AE4EB87AAE2260EBC55F3E17F80529AD98E16%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D264DB130-393F-4FC1-8DF1-4DA1CA234473"},{"key":"shuqicjyurl14","val":"https://ocean.shuqireader.com/api/activity/activity/v1/lottery/info?timestamp=1624007901&userId=2128324017&activityId=311&sqSv=1.0&sign=937946491a4f5ddfaa90df04267d0717&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.4%26utdid%3DYMdQxJaYeLEDAMHH3o84z%252F1p%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2128324017%26sn%3D2D3D48A6AAA682BC833775DBAE7A05EFAA68437C%26umidtoken%3DYMdQxJaYeLEDAMHH3o84z%252F1p%26msv%3D8.0.0%26brand%3DApple%26imei%3DBE0AE4EB87AAE2260EBC55F3E17F80529AD98E16%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D264DB130-393F-4FC1-8DF1-4DA1CA234473"},{"key":"shuqicjcsbody14","val":"_public=skinId%3D999%26idfa%3D264DB130-393F-4FC1-8DF1-4DA1CA234473%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26umidtoken%3DYMdQxJaYeLEDAMHH3o84z/1p%26user_id%3D2128324017%26sn%3D2D3D48A6AAA682BC833775DBAE7A05EFAA68437C%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3DBE0AE4EB87AAE2260EBC55F3E17F80529AD98E16%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYMdQxJaYeLEDAMHH3o84z/1p%26utype%3Dpre_vip%26sdk%3D13.4&deliveryId=711&key=sq_app_ad&miniWua=HHnB_ZSjJ3p0P/Z2bVkefI0D9pLDdOSMID6iIpVYpF0oq8Ow%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=703&sign=0868C88109FE16F5F1002BC42513DD04&timestamp=1624007881&userId=2128324017&user_id=2128324017&wua=HIVW_BvJNIePrcfJMhR04sUTioPfCTA38t5I/3dBCsz%2B6nkNzeRRmAsmFn%2B0xtA7ZMj9XYlRNJuSZUBYEyHK3F/qet2F8hM4odpwy97q6UnV5qTFikqOkw%2BsVp91JMAVi/AdGABJiHmHyYAOBifPh/FFI7kRc8cp8NWT2Q0/IjfOPCjgKJSgZL4aRN0uh4/S7pC9%2B6tsHv6bReujBRSA4gCnH6f3nFv/xztWOWyKdKnZBT6A%3D"},{"key":"shuqicjbody14","val":"wua=HIVW_JftRGNCPMUn22Wb7n8opGyk%2FJU6722Q1lUZ7FDDNg3eRP3K5AWWZNS4rZfbgNxvGA5ONj57GISkpwDvFQhtzhmVYVBhE6AUXA4dIuzDHKw8EY5HGiAifNLBQMJH1wQjabUGtzOM0xGXT7r5i6biG7SEtFPb0oQjkywcpa2YMStgcHkn9AHLbpWz%2BxNU4ggCQYy3Dj1LVGa245bRg8o5eEgTmvMQRNFuFGbEP7CskQVQ%3D&ua=&userId=2128324017&umidtoken=YMdQxJaYeLEDAMHH3o84z%2F1p&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&asac=2A20C07RJ9F51AOEFSNHDR&timestamp=1624007884&activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&sqSv=1.0&sign=d70e8fc0af6d877275cf97e174dad43d&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.4%26utdid%3DYMdQxJaYeLEDAMHH3o84z%252F1p%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2128324017%26sn%3D2D3D48A6AAA682BC833775DBAE7A05EFAA68437C%26umidtoken%3DYMdQxJaYeLEDAMHH3o84z%252F1p%26msv%3D8.0.0%26brand%3DApple%26imei%3DBE0AE4EB87AAE2260EBC55F3E17F80529AD98E16%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D264DB130-393F-4FC1-8DF1-4DA1CA234473"},{"key":"shuqijsspbody14","val":""},{"key":"shuqijsydurl14","val":""},{"key":"shuqijsydbody14","val":""},{"key":"shuqijsqdbody14","val":""},{"key":"shuqijsqdspyurl14","val":""},{"key":"shuqijsqdspbody14","val":""},{"key":"shuqijsrwbody14","val":""},{"key":"shuqijsfxbody14","val":""},{"key":"shuqijsbookurl14","val":""},{"key":"shuqijsbookbody14","val":""},{"key":"shuqijssprwurl14","val":""},{"key":"shuqiuserurl15","val":"https://ocean.shuqireader.com/api/jaccount/accountapi/v1/sapi/account/getBindinfo?userId=2126941269&sqSv=1.0&timestamp=1624008020&sign=11313352ae100b93ccd122cb93a29308&key=sq_h5_gateway"},{"key":"shuqisyurl15","val":""},{"key":"shuqisybody15","val":""},{"key":"shuqispbody15","val":"_public=utype%3Dpre_vip%26idfa%3D4DE53260-B584-4272-A837-332EA0499A56%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26umidtoken%3DYMqjs7gsZOQDAG12f5YGYF2K%26user_id%3D2126941269%26sn%3DB8768D5BA20D3BD2B38F492C2BA54DBF251FC136%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D83FBA0545D23B91B74D793F7A4A72D9E6FF53BDF%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhone8%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26utdid%3DYMqjs7gsZOQDAG12f5YGYF2K%26soft_id%3D21%26sdk%3D13.0&deliveryId=525&key=sq_app_ad&miniWua=HHnB_a1acizG6Ws%2BDMOSxYZ%2Br3THGXMbs1HvEbh8SyWBf6MI%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=626&sign=2CA6C20B76C42ED33BF9D99CF27C37D3&timestamp=1624007976&userId=2126941269&user_id=2126941269&wua=HIVW_0IpyZCr5D2HkQAM5QYWHRtxKFeNagxWRItNABAeTZU/TCcIfUX07naDMPw3QhkXsQ2d29m91pIGTC/J/B3rxDlMsnlykotByClttBHVGB3jIuhJq54Ydu0qPKRRzIQo8Dmm1MVOzYhi9ftutRb4Fb6oRCi2QFer7Ymep2aZQ8CihRdVrjSkHIB2Jao%2BoQSDCCLyOADQ78awlrCrn3IuP%2BiECLnDG6eKmjjhN0pysSog%3D"},{"key":"shuqiscbody15","val":"_public=utype%253Dpre_vip%2526idfa%253D4DE53260-B584-4272-A837-332EA0499A56%2526ustatus%253D0%2526first_placeid%253D111111%2526net_env%253D4g%2526umidtoken%253DYMqjs7gsZOQDAG12f5YGYF2K%2526user_id%253D2126941269%2526sn%253DB8768D5BA20D3BD2B38F492C2BA54DBF251FC136%2526placeid%253D111111%2526msv%253D8.0.0%2526brand%253DApple%2526imei%253D83FBA0545D23B91B74D793F7A4A72D9E6FF53BDF%2526skinVersionPrefix%253D1%2526appVer%253D4.3.6.0%2526skinActiveColor%253D0F9970%2526manufacturer%253DApple%2526statusBarHeight%253D44.000000%2526skinColor%253D23B383%2526platform%253DiOS%2526ver%253D210301%2526mod%253DiPhone8%2526skinVersion%253D1%2526wh%253D1242x2688%2526skinId%253D999%2526utdid%253DYMqjs7gsZOQDAG12f5YGYF2K%2526soft_id%253D21%2526sdk%253D13.0&key=and_log&readingList=%5B%7B%22startTime%22%3A1624007924%2C%22readObjType%22%3A1%2C%22attr%22%3A2%2C%22readObjId%22%3A%226725806%22%2C%22readChapterId%22%3A945691%2C%22readingLen%22%3A40%7D%5D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=4DF36B7AAF9CA4C408743AFF80219926&timestamp=1624007965&user_id=2126941269"},{"key":"shuqiydbody15","val":"_public=utype%3Dpre_vip%26idfa%3D4DE53260-B584-4272-A837-332EA0499A56%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26umidtoken%3DYMqjs7gsZOQDAG12f5YGYF2K%26user_id%3D2126941269%26sn%3DB8768D5BA20D3BD2B38F492C2BA54DBF251FC136%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D83FBA0545D23B91B74D793F7A4A72D9E6FF53BDF%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhone8%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26utdid%3DYMqjs7gsZOQDAG12f5YGYF2K%26soft_id%3D21%26sdk%3D13.0&deliveryId=707&key=sq_app_ad&miniWua=HHnB_qNv%2BT4zVoiCFftyV9LyEaLLEhEDStp6O%2BGiOPcQUL1w%3D&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=678&sign=5DBE3997EC517F1E866A802C995FC219&timestamp=1624007960&userId=2126941269&wua=HIVW_LRC3rLpRz0R%2BMlAz2EtLQg9rMFnFphkrIbSk%2BqDh3NEoaPtJfKzXGXfZwsyCrTQEnGND/HLEIHoKqzbaE7RksoIJY3aAe0Q/5A6gO5yDlx22o2%2B2i8K61YsVc%2BoSjqfLImxV2E9mJ5qHZDv/5OExLrictRQ%2BQN9VSLCekLIamxuGhwMNMhv6mrfvIGFkSg5lUP2uYqvjoJWb2F4WOeolZlWWKhD%2Bx1yylckq2EgFUyw%3D"},{"key":"shuqiqdbody15","val":"clientTimestamp=1624007993&position=501&userId=2126941269&signInType=1&wua=HIVW_VQZRPBFW81TbPVrDYCEVFaBlv3hGU1MwGgtHAe3DYZa4so9dkYeLgPp7pEe2k9t%2BEHvf9QdSAt4W%2BvLMb4P7BbgnddgnmSevwclvxQjPeEuKRhgiVEbtbS65EJ1s1lpryPqbMuKueX6G4nwGtR2a3q2HLLgkmMQslXv5pbImmHZURUmPeaPMQLxzlYxpKjkjNp%2F3mQgJpRtzFWJpfwerVN8YakMEBmRKMLe12CyzO1k%3D&ua=&miniWua=HHnB_aUV4vFJyMVNyUh3EXVjYGuiXvTAZpJJC3prN5e6n52M%3D&umidtoken=YMqjs7gsZOQDAG12f5YGYF2K&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&sign=5aa37f634c1d957001531aec68497a14&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.0%26utdid%3DYMqjs7gsZOQDAG12f5YGYF2K%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2126941269%26sn%3DB8768D5BA20D3BD2B38F492C2BA54DBF251FC136%26umidtoken%3DYMqjs7gsZOQDAG12f5YGYF2K%26msv%3D8.0.0%26brand%3DApple%26imei%3D83FBA0545D23B91B74D793F7A4A72D9E6FF53BDF%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone8%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D4DE53260-B584-4272-A837-332EA0499A56"},{"key":"shuqirwbody15","val":"serviceWorkerOn=1&stopPullRefresh=1&from=ShuqiTab&upf=20368&sdk=13.0&utdid=YMqjs7gsZOQDAG12f5YGYF2K&ustatus=0&first_placeid=111111&net_env=4g&placeid=111111&user_id=2126941269&sn=B8768D5BA20D3BD2B38F492C2BA54DBF251FC136&umidtoken=YMqjs7gsZOQDAG12f5YGYF2K&msv=8.0.0&brand=Apple&imei=83FBA0545D23B91B74D793F7A4A72D9E6FF53BDF&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=1&ver=210301&mod=iPhone8&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=4DE53260-B584-4272-A837-332EA0499A56&params=%7B%22resources%22%3A%7B%22ShuqiBsDailyTask%22%3A%7B%7D%7D%7D&userId=2126941269&placeId=111111&timestamp=1624007997&sqSv=1.0&sign=aabc4899508c6e4fc1d762db397f7c7e&key=sq_h5_gateway&_public="},{"key":"shuqifxbody15","val":""},{"key":"shuqisprwurl15","val":"https://ocean.shuqireader.com/api/ad/adserver/v1/api/getAdInfo?appVer=4.3.6.0&placeId=111111&platform=iOS&requestSrc=h5&resourceId=626&timestamp=1624008020&user_id=2126941269&sqSv=1.0&sign=7c94cd82f97883bafe33d1515afd7e94&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.0%26utdid%3DYMqjs7gsZOQDAG12f5YGYF2K%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2126941269%26sn%3DB8768D5BA20D3BD2B38F492C2BA54DBF251FC136%26umidtoken%3DYMqjs7gsZOQDAG12f5YGYF2K%26msv%3D8.0.0%26brand%3DApple%26imei%3D83FBA0545D23B91B74D793F7A4A72D9E6FF53BDF%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone8%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D4DE53260-B584-4272-A837-332EA0499A56"},{"key":"shuqijlbody15","val":"requestSrc=h5&userId=2126941269&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624007997&sqSv=1.0&sign=af8fad6aafe5d999c74520ed0368e200&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.0%26utdid%3DYMqjs7gsZOQDAG12f5YGYF2K%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2126941269%26sn%3DB8768D5BA20D3BD2B38F492C2BA54DBF251FC136%26umidtoken%3DYMqjs7gsZOQDAG12f5YGYF2K%26msv%3D8.0.0%26brand%3DApple%26imei%3D83FBA0545D23B91B74D793F7A4A72D9E6FF53BDF%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone8%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D4DE53260-B584-4272-A837-332EA0499A56"},{"key":"shuqisqjlbody15","val":"src=&userId=2126941269&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624007973&sqSv=1.0&sign=611328a620c30dbaad8f532d3dd6bfe2&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.0%26utdid%3DYMqjs7gsZOQDAG12f5YGYF2K%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2126941269%26sn%3DB8768D5BA20D3BD2B38F492C2BA54DBF251FC136%26umidtoken%3DYMqjs7gsZOQDAG12f5YGYF2K%26msv%3D8.0.0%26brand%3DApple%26imei%3D83FBA0545D23B91B74D793F7A4A72D9E6FF53BDF%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone8%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D4DE53260-B584-4272-A837-332EA0499A56"},{"key":"shuqicjyurl15","val":"https://ocean.shuqireader.com/api/activity/activity/v1/lottery/info?timestamp=1624008024&userId=2126941269&activityId=311&sqSv=1.0&sign=bba7c434517f2fb279dd84f2360a462c&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.0%26utdid%3DYMqjs7gsZOQDAG12f5YGYF2K%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2126941269%26sn%3DB8768D5BA20D3BD2B38F492C2BA54DBF251FC136%26umidtoken%3DYMqjs7gsZOQDAG12f5YGYF2K%26msv%3D8.0.0%26brand%3DApple%26imei%3D83FBA0545D23B91B74D793F7A4A72D9E6FF53BDF%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone8%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D4DE53260-B584-4272-A837-332EA0499A56"},{"key":"shuqicjcsbody15","val":"_public=utype%3Dpre_vip%26idfa%3D4DE53260-B584-4272-A837-332EA0499A56%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26umidtoken%3DYMqjs7gsZOQDAG12f5YGYF2K%26user_id%3D2126941269%26sn%3DB8768D5BA20D3BD2B38F492C2BA54DBF251FC136%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D83FBA0545D23B91B74D793F7A4A72D9E6FF53BDF%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhone8%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26utdid%3DYMqjs7gsZOQDAG12f5YGYF2K%26soft_id%3D21%26sdk%3D13.0&deliveryId=711&key=sq_app_ad&miniWua=HHnB_XqQeST6YhAsr5aDY%2BhT8luFppKjIT8x4C4vkvy3BDko%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=703&sign=577C3348C219D64F4913D56E4AECB762&timestamp=1624008002&userId=2126941269&user_id=2126941269&wua=HIVW_6I6S51lTK/UAlI6km9xek1pLvel9HeLBJZ1BCRyNtFRWjXBd39DQwnSMkpWufQhUBuXkrYm7gxxf%2BCiSf2XILrTzix74kwXkuO6%2BJ8j9GxQ58tmOxvWeNfzKyQDqPmGyru%2BRFsT3dwsGQFzbcv5N0FaTp%2BCNa1DDUC63ZuB%2B2b1ue1WpoFPGsQg6/l59DWHjFkUnPe0bM90itCcfbf%2BXtEW25j0Y/YT9nxMYVhKYCI4%3D"},{"key":"shuqicjbody15","val":"wua=HIVW_VkqxN2WQROpGTVbnIpHOU0KpjxxdtbD7aktJCsx3hXqsGbXwMFOkH5LAiJbuipzgOWa%2BghPQha%2BYWAjzw5Ql54OgPNInM1rxXlhDu36%2FhYy11Og3L5UUVIDJrShJNhwdksMf2oDULuf%2BJIMBgsWLxT6bmR7UhdljKd2ieM6lAqcAg2fbxCHKNB5gGhbBoBx04CkdRQvs6E6eDEZ%2FznkiBC%2B34RmJnkPJQjJ7U%2FjiRVg%3D&ua=&userId=2126941269&umidtoken=YMqjs7gsZOQDAG12f5YGYF2K&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&asac=2A20C07RJ9F51AOEFSNHDR&timestamp=1624008008&activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&sqSv=1.0&sign=10f5fec36f04322570aa2588cbfaa338&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.0%26utdid%3DYMqjs7gsZOQDAG12f5YGYF2K%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2126941269%26sn%3DB8768D5BA20D3BD2B38F492C2BA54DBF251FC136%26umidtoken%3DYMqjs7gsZOQDAG12f5YGYF2K%26msv%3D8.0.0%26brand%3DApple%26imei%3D83FBA0545D23B91B74D793F7A4A72D9E6FF53BDF%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone8%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D4DE53260-B584-4272-A837-332EA0499A56"},{"key":"shuqijsspbody15","val":""},{"key":"shuqijsydurl15","val":""},{"key":"shuqijsydbody15","val":""},{"key":"shuqijsqdbody15","val":""},{"key":"shuqijsqdspyurl15","val":""},{"key":"shuqijsqdspbody15","val":""},{"key":"shuqijsrwbody15","val":""},{"key":"shuqijsfxbody15","val":""},{"key":"shuqijsbookurl15","val":""},{"key":"shuqijsbookbody15","val":""},{"key":"shuqijssprwurl15","val":""},{"key":"shuqiuserurl16","val":""},{"key":"shuqisyurl16","val":""},{"key":"shuqisybody16","val":""},{"key":"shuqispbody16","val":""},{"key":"shuqiscbody16","val":""},{"key":"shuqiydbody16","val":""},{"key":"shuqiqdbody16","val":""},{"key":"shuqirwbody16","val":""},{"key":"shuqifxbody16","val":""},{"key":"shuqisprwurl16","val":""},{"key":"shuqijlbody16","val":""},{"key":"shuqisqjlbody16","val":""},{"key":"shuqicjyurl16","val":""},{"key":"shuqicjcsbody16","val":""},{"key":"shuqicjbody16","val":""},{"key":"shuqijsspbody16","val":""},{"key":"shuqijsydurl16","val":""},{"key":"shuqijsydbody16","val":""},{"key":"shuqijsqdbody16","val":""},{"key":"shuqijsqdspyurl16","val":""},{"key":"shuqijsqdspbody16","val":""},{"key":"shuqijsrwbody16","val":""},{"key":"shuqijsfxbody16","val":""},{"key":"shuqijsbookurl16","val":""},{"key":"shuqijsbookbody16","val":""},{"key":"shuqijssprwurl16","val":""},{"key":"shuqiuserurl17","val":""},{"key":"shuqisyurl17","val":""},{"key":"shuqisybody17","val":""},{"key":"shuqispbody17","val":""},{"key":"shuqiscbody17","val":""},{"key":"shuqiydbody17","val":""},{"key":"shuqiqdbody17","val":""},{"key":"shuqirwbody17","val":""},{"key":"shuqifxbody17","val":""},{"key":"shuqisprwurl17","val":""},{"key":"shuqijlbody17","val":""},{"key":"shuqisqjlbody17","val":""},{"key":"shuqicjyurl17","val":""},{"key":"shuqicjcsbody17","val":""},{"key":"shuqicjbody17","val":""},{"key":"shuqijsspbody17","val":""},{"key":"shuqijsydurl17","val":""},{"key":"shuqijsydbody17","val":""},{"key":"shuqijsqdbody17","val":""},{"key":"shuqijsqdspyurl17","val":""},{"key":"shuqijsqdspbody17","val":""},{"key":"shuqijsrwbody17","val":""},{"key":"shuqijsfxbody17","val":""},{"key":"shuqijsbookurl17","val":""},{"key":"shuqijsbookbody17","val":""},{"key":"shuqijssprwurl17","val":""},{"key":"shuqiuserurl18","val":""},{"key":"shuqisyurl18","val":""},{"key":"shuqisybody18","val":""},{"key":"shuqispbody18","val":""},{"key":"shuqiscbody18","val":""},{"key":"shuqiydbody18","val":""},{"key":"shuqiqdbody18","val":""},{"key":"shuqirwbody18","val":""},{"key":"shuqifxbody18","val":""},{"key":"shuqisprwurl18","val":""},{"key":"shuqijlbody18","val":""},{"key":"shuqisqjlbody18","val":""},{"key":"shuqicjyurl18","val":""},{"key":"shuqicjcsbody18","val":""},{"key":"shuqicjbody18","val":""},{"key":"shuqijsspbody18","val":""},{"key":"shuqijsydurl18","val":""},{"key":"shuqijsydbody18","val":""},{"key":"shuqijsqdbody18","val":""},{"key":"shuqijsqdspyurl18","val":""},{"key":"shuqijsqdspbody18","val":""},{"key":"shuqijsrwbody18","val":""},{"key":"shuqijsfxbody18","val":""},{"key":"shuqijsbookurl18","val":""},{"key":"shuqijsbookbody18","val":""},{"key":"shuqijssprwurl18","val":""},{"key":"shuqiuserurl19","val":""},{"key":"shuqisyurl19","val":""},{"key":"shuqisybody19","val":""},{"key":"shuqispbody19","val":""},{"key":"shuqiscbody19","val":""},{"key":"shuqiydbody19","val":""},{"key":"shuqiqdbody19","val":""},{"key":"shuqirwbody19","val":""},{"key":"shuqifxbody19","val":""},{"key":"shuqisprwurl19","val":""},{"key":"shuqijlbody19","val":""},{"key":"shuqisqjlbody19","val":""},{"key":"shuqicjyurl19","val":""},{"key":"shuqicjcsbody19","val":""},{"key":"shuqicjbody19","val":""},{"key":"shuqijsspbody19","val":""},{"key":"shuqijsydurl19","val":""},{"key":"shuqijsydbody19","val":""},{"key":"shuqijsqdbody19","val":""},{"key":"shuqijsqdspyurl19","val":""},{"key":"shuqijsqdspbody19","val":""},{"key":"shuqijsrwbody19","val":""},{"key":"shuqijsfxbody19","val":""},{"key":"shuqijsbookurl19","val":""},{"key":"shuqijsbookbody19","val":""},{"key":"shuqijssprwurl19","val":""},{"key":"shuqiuserurl20","val":""},{"key":"shuqisyurl20","val":""},{"key":"shuqisybody20","val":""},{"key":"shuqispbody20","val":""},{"key":"shuqiscbody20","val":""},{"key":"shuqiydbody20","val":""},{"key":"shuqiqdbody20","val":""},{"key":"shuqirwbody20","val":""},{"key":"shuqifxbody20","val":""},{"key":"shuqisprwurl20","val":""},{"key":"shuqijlbody20","val":""},{"key":"shuqisqjlbody20","val":""},{"key":"shuqicjyurl20","val":""},{"key":"shuqicjcsbody20","val":""},{"key":"shuqicjbody20","val":""},{"key":"shuqijsspbody20","val":""},{"key":"shuqijsydurl20","val":""},{"key":"shuqijsydbody20","val":""},{"key":"shuqijsqdbody20","val":""},{"key":"shuqijsqdspyurl20","val":""},{"key":"shuqijsqdspbody20","val":""},{"key":"shuqijsrwbody20","val":""},{"key":"shuqijsfxbody20","val":""},{"key":"shuqijsbookurl20","val":""},{"key":"shuqijsbookbody20","val":""},{"key":"shuqijssprwurl20","val":""}],"sessions":[],"isLoaded":true};
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
