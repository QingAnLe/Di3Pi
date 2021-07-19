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
const COOKIE = {"id":"shuqi","name":"书旗小说APP","keys":["shuqiuserurl","shuqisyurl","shuqisybody","shuqispbody","shuqiscbody","shuqiydbody","shuqiqdbody","shuqirwbody","shuqifxbody","shuqisprwurl","shuqijlbody","shuqisqjlbody","shuqicjyurl","shuqicjcsbody","shuqicjbody","shuqijsspbody","shuqijsydurl","shuqijsydbody","shuqijsqdbody","shuqijsqdspyurl","shuqijsqdspbody","shuqijsrwbody","shuqijsfxbody","shuqijsbookurl","shuqijsbookbody","shuqijssprwurl","shuqiuserurl2","shuqisyurl2","shuqisybody2","shuqispbody2","shuqiscbody2","shuqiydbody2","shuqiqdbody2","shuqirwbody2","shuqifxbody2","shuqisprwurl2","shuqijlbody2","shuqisqjlbody2","shuqicjyurl2","shuqicjcsbody2","shuqicjbody2","shuqijsspbody2","shuqijsydurl2","shuqijsydbody2","shuqijsqdbody2","shuqijsqdspyurl2","shuqijsqdspbody2","shuqijsrwbody2","shuqijsfxbody2","shuqijsbookurl2","shuqijsbookbody2","shuqijssprwurl2","shuqiuserurl3","shuqisyurl3","shuqisybody3","shuqispbody3","shuqiscbody3","shuqiydbody3","shuqiqdbody3","shuqirwbody3","shuqifxbody3","shuqisprwurl3","shuqijlbody3","shuqisqjlbody3","shuqicjyurl3","shuqicjcsbody3","shuqicjbody3","shuqijsspbody3","shuqijsydurl3","shuqijsydbody3","shuqijsqdbody3","shuqijsqdspyurl3","shuqijsqdspbody3","shuqijsrwbody3","shuqijsfxbody3","shuqijsbookurl3","shuqijsbookbody3","shuqijssprwurl3","shuqiuserurl4","shuqisyurl4","shuqisybody4","shuqispbody4","shuqiscbody4","shuqiydbody4","shuqiqdbody4","shuqirwbody4","shuqifxbody4","shuqisprwurl4","shuqijlbody4","shuqisqjlbody4","shuqicjyurl4","shuqicjcsbody4","shuqicjbody4","shuqijsspbody4","shuqijsydurl4","shuqijsydbody4","shuqijsqdbody4","shuqijsqdspyurl4","shuqijsqdspbody4","shuqijsrwbody4","shuqijsfxbody4","shuqijsbookurl4","shuqijsbookbody4","shuqijssprwurl4","shuqiuserurl5","shuqisyurl5","shuqisybody5","shuqispbody5","shuqiscbody5","shuqiydbody5","shuqiqdbody5","shuqirwbody5","shuqifxbody5","shuqisprwurl5","shuqijlbody5","shuqisqjlbody5","shuqicjyurl5","shuqicjcsbody5","shuqicjbody5","shuqijsspbody5","shuqijsydurl5","shuqijsydbody5","shuqijsqdbody5","shuqijsqdspyurl5","shuqijsqdspbody5","shuqijsrwbody5","shuqijsfxbody5","shuqijsbookurl5","shuqijsbookbody5","shuqijssprwurl5","shuqiuserurl6","shuqisyurl6","shuqisybody6","shuqispbody6","shuqiscbody6","shuqiydbody6","shuqiqdbody6","shuqirwbody6","shuqifxbody6","shuqisprwurl6","shuqijlbody6","shuqisqjlbody6","shuqicjyurl6","shuqicjcsbody6","shuqicjbody6","shuqijsspbody6","shuqijsydurl6","shuqijsydbody6","shuqijsqdbody6","shuqijsqdspyurl6","shuqijsqdspbody6","shuqijsrwbody6","shuqijsfxbody6","shuqijsbookurl6","shuqijsbookbody6","shuqijssprwurl6","shuqiuserurl7","shuqisyurl7","shuqisybody7","shuqispbody7","shuqiscbody7","shuqiydbody7","shuqiqdbody7","shuqirwbody7","shuqifxbody7","shuqisprwurl7","shuqijlbody7","shuqisqjlbody7","shuqicjyurl7","shuqicjcsbody7","shuqicjbody7","shuqijsspbody7","shuqijsydurl7","shuqijsydbody7","shuqijsqdbody7","shuqijsqdspyurl7","shuqijsqdspbody7","shuqijsrwbody7","shuqijsfxbody7","shuqijsbookurl7","shuqijsbookbody7","shuqijssprwurl7","shuqiuserurl8","shuqisyurl8","shuqisybody8","shuqispbody8","shuqiscbody8","shuqiydbody8","shuqiqdbody8","shuqirwbody8","shuqifxbody8","shuqisprwurl8","shuqijlbody8","shuqisqjlbody8","shuqicjyurl8","shuqicjcsbody8","shuqicjbody8","shuqijsspbody8","shuqijsydurl8","shuqijsydbody8","shuqijsqdbody8","shuqijsqdspyurl8","shuqijsqdspbody8","shuqijsrwbody8","shuqijsfxbody8","shuqijsbookurl8","shuqijsbookbody8","shuqijssprwurl8","shuqiuserurl9","shuqisyurl9","shuqisybody9","shuqispbody9","shuqiscbody9","shuqiydbody9","shuqiqdbody9","shuqirwbody9","shuqifxbody9","shuqisprwurl9","shuqijlbody9","shuqisqjlbody9","shuqicjyurl9","shuqicjcsbody9","shuqicjbody9","shuqijsspbody9","shuqijsydurl9","shuqijsydbody9","shuqijsqdbody9","shuqijsqdspyurl9","shuqijsqdspbody9","shuqijsrwbody9","shuqijsfxbody9","shuqijsbookurl9","shuqijsbookbody9","shuqijssprwurl9","shuqiuserurl10","shuqisyurl10","shuqisybody10","shuqispbody10","shuqiscbody10","shuqiydbody10","shuqiqdbody10","shuqirwbody10","shuqifxbody10","shuqisprwurl10","shuqijlbody10","shuqisqjlbody10","shuqicjyurl10","shuqicjcsbody10","shuqicjbody10","shuqijsspbody10","shuqijsydurl10","shuqijsydbody10","shuqijsqdbody10","shuqijsqdspyurl10","shuqijsqdspbody10","shuqijsrwbody10","shuqijsfxbody10","shuqijsbookurl10","shuqijsbookbody10","shuqijssprwurl10","shuqiuserurl11","shuqisyurl11","shuqisybody11","shuqispbody11","shuqiscbody11","shuqiydbody11","shuqiqdbody11","shuqirwbody11","shuqifxbody11","shuqisprwurl11","shuqijlbody11","shuqisqjlbody11","shuqicjyurl11","shuqicjcsbody11","shuqicjbody11","shuqijsspbody11","shuqijsydurl11","shuqijsydbody11","shuqijsqdbody11","shuqijsqdspyurl11","shuqijsqdspbody11","shuqijsrwbody11","shuqijsfxbody11","shuqijsbookurl11","shuqijsbookbody11","shuqijssprwurl11","shuqiuserurl12","shuqisyurl12","shuqisybody12","shuqispbody12","shuqiscbody12","shuqiydbody12","shuqiqdbody12","shuqirwbody12","shuqifxbody12","shuqisprwurl12","shuqijlbody12","shuqisqjlbody12","shuqicjyurl12","shuqicjcsbody12","shuqicjbody12","shuqijsspbody12","shuqijsydurl12","shuqijsydbody12","shuqijsqdbody12","shuqijsqdspyurl12","shuqijsqdspbody12","shuqijsrwbody12","shuqijsfxbody12","shuqijsbookurl12","shuqijsbookbody12","shuqijssprwurl12","shuqiuserurl13","shuqisyurl13","shuqisybody13","shuqispbody13","shuqiscbody13","shuqiydbody13","shuqiqdbody13","shuqirwbody13","shuqifxbody13","shuqisprwurl13","shuqijlbody13","shuqisqjlbody13","shuqicjyurl13","shuqicjcsbody13","shuqicjbody13","shuqijsspbody13","shuqijsydurl13","shuqijsydbody13","shuqijsqdbody13","shuqijsqdspyurl13","shuqijsqdspbody13","shuqijsrwbody13","shuqijsfxbody13","shuqijsbookurl13","shuqijsbookbody13","shuqijssprwurl13","shuqiuserurl14","shuqisyurl14","shuqisybody14","shuqispbody14","shuqiscbody14","shuqiydbody14","shuqiqdbody14","shuqirwbody14","shuqifxbody14","shuqisprwurl14","shuqijlbody14","shuqisqjlbody14","shuqicjyurl14","shuqicjcsbody14","shuqicjbody14","shuqijsspbody14","shuqijsydurl14","shuqijsydbody14","shuqijsqdbody14","shuqijsqdspyurl14","shuqijsqdspbody14","shuqijsrwbody14","shuqijsfxbody14","shuqijsbookurl14","shuqijsbookbody14","shuqijssprwurl14","shuqiuserurl15","shuqisyurl15","shuqisybody15","shuqispbody15","shuqiscbody15","shuqiydbody15","shuqiqdbody15","shuqirwbody15","shuqifxbody15","shuqisprwurl15","shuqijlbody15","shuqisqjlbody15","shuqicjyurl15","shuqicjcsbody15","shuqicjbody15","shuqijsspbody15","shuqijsydurl15","shuqijsydbody15","shuqijsqdbody15","shuqijsqdspyurl15","shuqijsqdspbody15","shuqijsrwbody15","shuqijsfxbody15","shuqijsbookurl15","shuqijsbookbody15","shuqijssprwurl15","shuqiuserurl16","shuqisyurl16","shuqisybody16","shuqispbody16","shuqiscbody16","shuqiydbody16","shuqiqdbody16","shuqirwbody16","shuqifxbody16","shuqisprwurl16","shuqijlbody16","shuqisqjlbody16","shuqicjyurl16","shuqicjcsbody16","shuqicjbody16","shuqijsspbody16","shuqijsydurl16","shuqijsydbody16","shuqijsqdbody16","shuqijsqdspyurl16","shuqijsqdspbody16","shuqijsrwbody16","shuqijsfxbody16","shuqijsbookurl16","shuqijsbookbody16","shuqijssprwurl16","shuqiuserurl17","shuqisyurl17","shuqisybody17","shuqispbody17","shuqiscbody17","shuqiydbody17","shuqiqdbody17","shuqirwbody17","shuqifxbody17","shuqisprwurl17","shuqijlbody17","shuqisqjlbody17","shuqicjyurl17","shuqicjcsbody17","shuqicjbody17","shuqijsspbody17","shuqijsydurl17","shuqijsydbody17","shuqijsqdbody17","shuqijsqdspyurl17","shuqijsqdspbody17","shuqijsrwbody17","shuqijsfxbody17","shuqijsbookurl17","shuqijsbookbody17","shuqijssprwurl17","shuqiuserurl18","shuqisyurl18","shuqisybody18","shuqispbody18","shuqiscbody18","shuqiydbody18","shuqiqdbody18","shuqirwbody18","shuqifxbody18","shuqisprwurl18","shuqijlbody18","shuqisqjlbody18","shuqicjyurl18","shuqicjcsbody18","shuqicjbody18","shuqijsspbody18","shuqijsydurl18","shuqijsydbody18","shuqijsqdbody18","shuqijsqdspyurl18","shuqijsqdspbody18","shuqijsrwbody18","shuqijsfxbody18","shuqijsbookurl18","shuqijsbookbody18","shuqijssprwurl18","shuqiuserurl19","shuqisyurl19","shuqisybody19","shuqispbody19","shuqiscbody19","shuqiydbody19","shuqiqdbody19","shuqirwbody19","shuqifxbody19","shuqisprwurl19","shuqijlbody19","shuqisqjlbody19","shuqicjyurl19","shuqicjcsbody19","shuqicjbody19","shuqijsspbody19","shuqijsydurl19","shuqijsydbody19","shuqijsqdbody19","shuqijsqdspyurl19","shuqijsqdspbody19","shuqijsrwbody19","shuqijsfxbody19","shuqijsbookurl19","shuqijsbookbody19","shuqijssprwurl19","shuqiuserurl20","shuqisyurl20","shuqisybody20","shuqispbody20","shuqiscbody20","shuqiydbody20","shuqiqdbody20","shuqirwbody20","shuqifxbody20","shuqisprwurl20","shuqijlbody20","shuqisqjlbody20","shuqicjyurl20","shuqicjcsbody20","shuqicjbody20","shuqijsspbody20","shuqijsydurl20","shuqijsydbody20","shuqijsqdbody20","shuqijsqdspyurl20","shuqijsqdspbody20","shuqijsrwbody20","shuqijsfxbody20","shuqijsbookurl20","shuqijsbookbody20","shuqijssprwurl20"],"author":"@ziye","settings":[{"id":"shuqiSuffix","name":"当前账号","val":"1","type":"number","desc":"当前抓取ck记录的账号序号，如：1、2、3、"},{"id":"shuqiCount","name":"账号个数","val":"15","type":"number","desc":"指定任务最多跑几个账号，根据抓取的账号数据个数来设值"},{"id":"shuqiXH","name":"循环获取CK","val":"0","type":"number","desc":"0关闭 1开启,默认关闭"},{"id":"shuqiSC","name":"单刷时长控制","val":"0","type":"number","desc":"0关闭 1开启,默认关闭"},{"id":"shuqiTXTX","name":"提现提醒","val":"10","type":"number","desc":"0关闭 设置余额大于多少提醒"},{"id":"shuqinotifyttt","name":"推送控制","val":"1","type":"number","desc":"0关闭，1推送,默认12点以及23点推送"},{"id":"shuqinotifyInterval","name":"通知控制","val":"2","type":"number","desc":"0关闭，1为 所有通知，2为 12，23 点通知，3为 6，12，18，23 点通知 "},{"id":"shuqiMinutes","name":"推送-通知 分钟控制","val":"59","type":"number","desc":"推送以及通知控制在什么分钟段，可设置0-59,默认0到10"}],"repo":"https://cdn.jsdelivr.net/gh/ziye888/JavaScript@main/Task/shuqi.js","icons":["https://cdn.jsdelivr.net/gh/ziye888/JavaScript@main/Task/shuqi.png","https://cdn.jsdelivr.net/gh/ziye888/JavaScript@main/Task/shuqi.png"],"script":"https://cdn.jsdelivr.net/gh/ziye888/JavaScript@main/Task/shuqi.js","icon":"https://cdn.jsdelivr.net/gh/ziye888/JavaScript@main/Task/shuqi.png","favIcon":"mdi-star","favIconColor":"primary","datas":[{"key":"shuqiuserurl","val":"https://ocean.shuqireader.com/api/jaccount/accountapi/v1/sapi/account/getBindinfo?userId=2129509459&sqSv=1.0&timestamp=1624022856&sign=9eae27c14f047d1f72a62a80a507a3fb&key=sq_h5_gateway"},{"key":"shuqisyurl","val":"https://render.shuqireader.com/load/resource?sdk=13.2&utdid=YMdREaFupkcDAMijlpxRHklw&ustatus=0&first_placeid=111111&net_env=4g&placeid=111111&user_id=2125416469&sn=8D3CB03E98A5C93BE41226DEA0FE0E336586A219&umidtoken=YMdREaFupkcDAMijlpxRHklw&msv=8.0.0&brand=Apple&imei=1BD7315EC9ACC942AF989F0E4F19A1B842E14783&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=iOS&ver=210301&mod=iPad4G&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=B0C782FE-C438-4F4D-BB4F-10A2358CF521"},{"key":"shuqisybody","val":"appVer=4.3.6.0&imei=1BD7315EC9ACC942AF989F0E4F19A1B842E14783&isNewUser=1&params=%7B%22resources%22%3A%7B%22ShuqiVipEntry%22%3A%7B%7D%2C%22personalCardConfig%22%3A%7B%7D%7D%7D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=193ff862080997e503a352a4c70d97d0&sn=8D3CB03E98A5C93BE41226DEA0FE0E336586A219&soft_id=21&timestamp=1624022243&user_id=2125416469&ver=210301"},{"key":"shuqispbody","val":"_public=skinId%3D999%26idfa%3DB0C782FE-C438-4F4D-BB4F-10A2358CF521%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26umidtoken%3DYMyel%2BQz94gDALsk1PqPzL0a%26user_id%3D2129509459%26sn%3D447826AD27D3DC389A04787FA94ABCB81AF6A758%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3DE10A0BC5C09A8F08F731F8FF25F98F3B83F582AA%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPad4G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYMyel%2BQz94gDALsk1PqPzL0a%26utype%3Dpre_vip%26sdk%3D13.2&deliveryId=525&key=sq_app_ad&miniWua=HHnB_q0NY4D0lr3KerslmQvrl8%2BQc6Loa1iREoPcGvqWYEoA%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=626&sign=5E0935A7F4FBAE70ABD0EB3B1E1585ED&timestamp=1624022824&userId=2129509459&user_id=2129509459&wua=HIVW_CMt4W8f8P/NCPTiEtbpIRZQC0lgindyTu%2Bb2HVbxRcv5mKkYzFnloKSOYsvIVDs0ROyyTGAVdW/Hgoa9EkiTSkB6CkkRa5ssfB3wsHNETB1E0iokNUW1UNrYRjOLlFPI8tlYV8qKheHbYSay3URWa7c7OWNHpXFy8T3MNNSUp0s9zZMaDsmQC6dX00nes0W//JFMzLQFbSpZ46uCV%2B9NLnd6TKfbmdzLl1IZlA4flnA%3D"},{"key":"shuqiscbody","val":""},{"key":"shuqiydbody","val":""},{"key":"shuqiqdbody","val":"clientTimestamp=1624025165&position=501&userId=2129509459&signInType=1&wua=HIVW_jwq68BBmf1KI%2FyHfx%2FFR%2B%2FqINdWhufdVTqzUzqvnlzOnGSvFyWQULj0K2muWeGes2jMh%2FvFrZDvQHbUJ60faISvk1U0sqlaTwKy0SBL6Bt3e7iiPeW6hOWfTC3jIPsM3cRwIotoL07rdreCimByvd%2BFZ9GN0cxIUsJOVT1rZagpFtIMwp2k3tknZAgpjv5nS6xndMgaBaeY19U3rRaPptPeh0qFvyxyC%2BgYoeg7hLkgUWSaz5Jg33zcJe75tiz76lko72m69Xh%2BwXGk77Kv8Qp04RqPSJM0C5Vq%2BMFk6KUzxuk1wRAcnP6ZX%2Fi7yfqWmwYC8xcrsi%2FcLmR7FxIyRpx8E%2Fax6e1a%2Brqc9INGx3Rcvgl85u4SYay0d6E04rw%2F%2B&ua=&miniWua=HHnB_WyWLkzjGDYDv2MAC67Iw4kAMPxhOtlTkWTqDNX%2F2qYgvX0Jwqr4Bp3iGMRQMu3d2AKac6qwJ3qvB2%2BSMlu%2BmH6%2BDzfWjPYZ4S1KC2hOHRcEpmYtB%2BUMtUy0cByEnRo8%2B&umidtoken=8g5L%2BpZLOnKDiTV6H7RGQ6b2cL8CKXFf&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&sign=9ac2e081ce9c1f84554d72aa7ba5737b&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.2%26utdid%3DYMyel%252BQz94gDALsk1PqPzL0a%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2129509459%26sn%3D447826AD27D3DC389A04787FA94ABCB81AF6A758%26umidtoken%3D8g5L%252BpZLOnKDiTV6H7RGQ6b2cL8CKXFf%26msv%3D8.0.0%26brand%3DApple%26imei%3DE10A0BC5C09A8F08F731F8FF25F98F3B83F582AA%26skinVersionPrefix%3D1%26appVer%3D4.3.0.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210107%26mod%3DiPad4G%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DB0C782FE-C438-4F4D-BB4F-10A2358CF521"},{"key":"shuqirwbody","val":"serviceWorkerOn=1&stopPullRefresh=1&from=ShuqiTab&upf=20368&sdk=13.2&utdid=YMyel%2BQz94gDALsk1PqPzL0a&ustatus=0&first_placeid=111111&net_env=4g&placeid=111111&user_id=2129509459&sn=447826AD27D3DC389A04787FA94ABCB81AF6A758&umidtoken=8g5L%2BpZLOnKDiTV6H7RGQ6b2cL8CKXFf&msv=8.0.0&brand=Apple&imei=E10A0BC5C09A8F08F731F8FF25F98F3B83F582AA&skinVersionPrefix=1&appVer=4.3.0.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=1&ver=210107&mod=iPad4G&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=B0C782FE-C438-4F4D-BB4F-10A2358CF521&params=%7B%22resources%22%3A%7B%22ShuqiBsDailyTask%22%3A%7B%7D%7D%7D&userId=2129509459&placeId=111111&timestamp=1624025168&sqSv=1.0&sign=398f08637cadbae6ae5ad0f8242c9716&key=sq_h5_gateway&_public="},{"key":"shuqifxbody","val":""},{"key":"shuqisprwurl","val":"https://ocean.shuqireader.com/api/ad/adserver/v1/api/getAdInfo?appVer=4.3.6.0&placeId=111111&platform=iOS&requestSrc=h5&resourceId=626&timestamp=1624022862&user_id=2129509459&sqSv=1.0&sign=c05a19452f00fff1b7f9bfa26f7a795d&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.2%26utdid%3DYMyel%252BQz94gDALsk1PqPzL0a%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2129509459%26sn%3D447826AD27D3DC389A04787FA94ABCB81AF6A758%26umidtoken%3DYMyel%252BQz94gDALsk1PqPzL0a%26msv%3D8.0.0%26brand%3DApple%26imei%3DE10A0BC5C09A8F08F731F8FF25F98F3B83F582AA%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad4G%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DB0C782FE-C438-4F4D-BB4F-10A2358CF521"},{"key":"shuqijlbody","val":"requestSrc=h5&userId=2129509459&platform=1&appVer=4.3.0.0&placeId=111111&timestamp=1624025168&sqSv=1.0&sign=ebabb5b4492031e8f7eeb18419ccdc73&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.2%26utdid%3DYMyel%252BQz94gDALsk1PqPzL0a%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2129509459%26sn%3D447826AD27D3DC389A04787FA94ABCB81AF6A758%26umidtoken%3D8g5L%252BpZLOnKDiTV6H7RGQ6b2cL8CKXFf%26msv%3D8.0.0%26brand%3DApple%26imei%3DE10A0BC5C09A8F08F731F8FF25F98F3B83F582AA%26skinVersionPrefix%3D1%26appVer%3D4.3.0.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210107%26mod%3DiPad4G%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DB0C782FE-C438-4F4D-BB4F-10A2358CF521"},{"key":"shuqisqjlbody","val":"src=&userId=2129509459&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624022823&sqSv=1.0&sign=322faf2775834136161078b6311bdb32&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.2%26utdid%3DYMyel%252BQz94gDALsk1PqPzL0a%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2129509459%26sn%3D447826AD27D3DC389A04787FA94ABCB81AF6A758%26umidtoken%3DYMyel%252BQz94gDALsk1PqPzL0a%26msv%3D8.0.0%26brand%3DApple%26imei%3DE10A0BC5C09A8F08F731F8FF25F98F3B83F582AA%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad4G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DB0C782FE-C438-4F4D-BB4F-10A2358CF521"},{"key":"shuqicjyurl","val":"https://ocean.shuqireader.com/api/activity/activity/v1/lottery/info?timestamp=1624022857&userId=2129509459&activityId=311&sqSv=1.0&sign=cd84981b2650f5bd85c03fbfb5a0d7e1&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.2%26utdid%3DYMyel%252BQz94gDALsk1PqPzL0a%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2129509459%26sn%3D447826AD27D3DC389A04787FA94ABCB81AF6A758%26umidtoken%3DYMyel%252BQz94gDALsk1PqPzL0a%26msv%3D8.0.0%26brand%3DApple%26imei%3DE10A0BC5C09A8F08F731F8FF25F98F3B83F582AA%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad4G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DB0C782FE-C438-4F4D-BB4F-10A2358CF521"},{"key":"shuqicjcsbody","val":"_public=skinId%3D999%26idfa%3DB0C782FE-C438-4F4D-BB4F-10A2358CF521%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26umidtoken%3DYMyel%2BQz94gDALsk1PqPzL0a%26user_id%3D2129509459%26sn%3D447826AD27D3DC389A04787FA94ABCB81AF6A758%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3DE10A0BC5C09A8F08F731F8FF25F98F3B83F582AA%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPad4G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYMyel%2BQz94gDALsk1PqPzL0a%26utype%3Dpre_vip%26sdk%3D13.2&deliveryId=711&key=sq_app_ad&miniWua=HHnB_qcW8yIoXi0M2oXJ0nxcvQvrCgwYk8nsK%2B13Gfu8cBik%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=703&sign=DD5401061D5F9BE7997647BD582E1A7C&timestamp=1624022833&userId=2129509459&user_id=2129509459&wua=HIVW_sTUN6TkKcjfhTS4azkQGR4rvjSkxpDDjcrfwF06qDVq%2BpN0HubK0z8j1/4UQJgnAZMxWpBGg9jKpybm0ut4Drg4Po9BQMASzp/%2BYfZAeyQz4jz2uTdSDSMC3qJZTzZkzjd2CdV728Cmx7tuzik7RdGz0pKYbuZhnAL%2BYuJHJcFJuMjiF2yc%2BzppNosOp4dnNd95%2B6gAod7lloGIzNx0qLSizIoJN86dlyeMbJWAi%2Beo%3D"},{"key":"shuqicjbody","val":"wua=HIVW_qbt%2Fmukd1sEf6IgxN9Bz%2BAtHtfJZ4sLZixK1TCzeuMmIIu9g1l%2BVfRIg5vgc2wvBY7G6hPkJFP5zOruYHCuKFBv6Xn2ZooKhkThhGPZ0zoi5cPSStVjbLc7Ex4UxAw21TsqrWBotZyqvAfgU9t14oKAHiBl1Q9nmqMN8Z0dvST5JmKe684awvVwb6X%2Bp7enAfbp%2FrK8xuUMQB6mfEXHjYTC6jeptlcT17NObl01%2F%2FiE%3D&ua=&userId=2129509459&umidtoken=YMyel%2BQz94gDALsk1PqPzL0a&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&asac=2A20C07RJ9F51AOEFSNHDR&timestamp=1624022836&activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&sqSv=1.0&sign=3617731a2af21d00b10674842e747d94&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.2%26utdid%3DYMyel%252BQz94gDALsk1PqPzL0a%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2129509459%26sn%3D447826AD27D3DC389A04787FA94ABCB81AF6A758%26umidtoken%3DYMyel%252BQz94gDALsk1PqPzL0a%26msv%3D8.0.0%26brand%3DApple%26imei%3DE10A0BC5C09A8F08F731F8FF25F98F3B83F582AA%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad4G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DB0C782FE-C438-4F4D-BB4F-10A2358CF521"},{"key":"shuqijsspbody","val":""},{"key":"shuqijsydurl","val":""},{"key":"shuqijsydbody","val":""},{"key":"shuqijsqdbody","val":""},{"key":"shuqijsqdspyurl","val":""},{"key":"shuqijsqdspbody","val":""},{"key":"shuqijsrwbody","val":""},{"key":"shuqijsfxbody","val":""},{"key":"shuqijsbookurl","val":""},{"key":"shuqijsbookbody","val":""},{"key":"shuqijssprwurl","val":""},{"key":"shuqiuserurl2","val":"https://ocean.shuqireader.com/api/jaccount/accountapi/v1/sapi/account/getBindinfo?userId=2127627582&sqSv=1.0&timestamp=1624022997&sign=09b65dc597b1bc8f704b0a91b37df53f&key=sq_h5_gateway"},{"key":"shuqisyurl2","val":"https://render.shuqireader.com/load/resource?sdk=13.2.3&utdid=YMqjs7gsZOQDAG12f5YGYF2K&ustatus=0&first_placeid=111111&net_env=3g&placeid=111111&user_id=2127627582&sn=D7BF53F800DB283AB837C2305F48338AA20ED258&umidtoken=YMqjs7gsZOQDAG12f5YGYF2K&msv=8.0.0&brand=Apple&imei=4C61C10F61A7EADFDE9249F13439ED52EA8454BB&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=iOS&ver=210301&mod=iPodtouch3G&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=808976FE-B04B-4CBC-91BC-36C600493C59"},{"key":"shuqisybody2","val":"appVer=4.3.6.0&imei=4C61C10F61A7EADFDE9249F13439ED52EA8454BB&isNewUser=1&params=%7B%22resources%22%3A%7B%22ShuqiVipEntry%22%3A%7B%7D%2C%22personalCardConfig%22%3A%7B%7D%7D%7D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=e93ae84b9c8f36bce977611650bcec20&sn=D7BF53F800DB283AB837C2305F48338AA20ED258&soft_id=21&timestamp=1624022915&user_id=2127627582&ver=210301"},{"key":"shuqispbody2","val":"_public=skinId%3D999%26idfa%3D808976FE-B04B-4CBC-91BC-36C600493C59%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26umidtoken%3DYMqjs7gsZOQDAG12f5YGYF2K%26user_id%3D2127627582%26sn%3DD7BF53F800DB283AB837C2305F48338AA20ED258%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D4C61C10F61A7EADFDE9249F13439ED52EA8454BB%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPodtouch3G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYMqjs7gsZOQDAG12f5YGYF2K%26utype%3Dpre_vip%26sdk%3D13.2.3&deliveryId=525&key=sq_app_ad&miniWua=HHnB_7uofj2nD1cZjqoOWFbpyHkTO7Q7eUq/kRbJIvLoDkvA%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=626&sign=47B77DDEDE4F976A016DCCB7B897D9B5&timestamp=1624022972&userId=2127627582&user_id=2127627582&wua=HIVW_UWehfOGcGzbNV2A9em2sS9ECVt3innjXz9As7iHhf6jt83kAtNl24OVrXS95cV1FUFOlPcqWOhDsN60uBi4NOqXxPAqEA6NO8nduniAEjzvF0sYaVM%2B%2BleZIB8YF88KW5Xe%2BHtdpIF/wJcwbl23xgKEwTknpIQg8Aa9yJx5yYqOd9a7y0N0o3MBs8VcDrxP03fG1qC0ieSaQw9afzEfaXczAMuYvJmRlVN7jXnTrnWs%3D"},{"key":"shuqiscbody2","val":"_public=skinId%253D999%2526idfa%253D808976FE-B04B-4CBC-91BC-36C600493C59%2526ustatus%253D0%2526first_placeid%253D111111%2526net_env%253D3g%2526umidtoken%253DYMqjs7gsZOQDAG12f5YGYF2K%2526user_id%253D2127627582%2526sn%253DD7BF53F800DB283AB837C2305F48338AA20ED258%2526placeid%253D111111%2526msv%253D8.0.0%2526brand%253DApple%2526imei%253D4C61C10F61A7EADFDE9249F13439ED52EA8454BB%2526skinVersionPrefix%253D1%2526appVer%253D4.3.6.0%2526skinActiveColor%253D0F9970%2526manufacturer%253DApple%2526skinColor%253D23B383%2526platform%253DiOS%2526ver%253D210301%2526mod%253DiPodtouch3G%2526statusBarHeight%253D44.000000%2526skinVersion%253D1%2526wh%253D1242x2688%2526soft_id%253D21%2526utdid%253DYMqjs7gsZOQDAG12f5YGYF2K%2526utype%253Dpre_vip%2526sdk%253D13.2.3&key=and_log&readingList=%5B%7B%22startTime%22%3A1624022918%2C%22readObjType%22%3A1%2C%22attr%22%3A2%2C%22readObjId%22%3A%227979379%22%2C%22readChapterId%22%3A1226271%2C%22readingLen%22%3A32%7D%5D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=0018B93CEFC1C3247D135ED5B7959905&timestamp=1624022950&user_id=2127627582"},{"key":"shuqiydbody2","val":"_public=skinId%3D999%26idfa%3D808976FE-B04B-4CBC-91BC-36C600493C59%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26umidtoken%3DYMqjs7gsZOQDAG12f5YGYF2K%26user_id%3D2127627582%26sn%3DD7BF53F800DB283AB837C2305F48338AA20ED258%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D4C61C10F61A7EADFDE9249F13439ED52EA8454BB%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPodtouch3G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYMqjs7gsZOQDAG12f5YGYF2K%26utype%3Dpre_vip%26sdk%3D13.2.3&deliveryId=707&key=sq_app_ad&miniWua=HHnB_9NP08jYPP%2B6EbxW6NF195FcmwYUf2nvCwVL1DjAw14k%3D&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=678&sign=1654029ADCDEA7C0FB9EF80400489B38&timestamp=1624022947&userId=2127627582&wua=HIVW_h7OUBP7YujVO22%2B0ObTaC7a5UIbXsQnwECK0jd3quz%2BUrB0sWEHlsuv9uCrcnbFIRGNBk2lZ6en3YWrD87uJXy7vrcTTBxGBz/MYCQMMnx8dkuzs41GZUuNO1dne8r2uM6nUg/lUuroL8rpIMDqqWwiulpjmMIHzJFYuYaW3jXdcs4r6adf%2BZl8vejuDdwsX9k5zqN0PGRqVcVkOD%2BBmXg%3D%3D"},{"key":"shuqiqdbody2","val":"clientTimestamp=1624022959&position=501&userId=2127627582&signInType=1&wua=HIVW_ug5nCG05gna6HDcP5qIw%2FwuNSSB3UHyWpflYBYJp%2FTRpMo9IAov0Oa7JAyZwIBsTI3%2BpzTlD2%2BMi27IW3AfOKNWj%2BHrYf1oP5qwFZ3mqyJ20sf%2Fi6UORJafa0YK84FERGoynysEaM3c7tXzTIRHE5GnBhw%2B2lTazYsqGwrNgbEq77gPjrfvogcb89%2F10e0iD2n%2ByN7CSJC12U0wMCUZh3N0K0oeXQgfCRJhlDggXSqk%3D&ua=&miniWua=HHnB_xNJzAqpPsByLm2lBZi7OYPyc86gsbBxqwQKAT30OEqY%3D&umidtoken=YMqjs7gsZOQDAG12f5YGYF2K&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&sign=e7cf7b7bab7d88c4c503a110afb1f895&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.2.3%26utdid%3DYMqjs7gsZOQDAG12f5YGYF2K%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2127627582%26sn%3DD7BF53F800DB283AB837C2305F48338AA20ED258%26umidtoken%3DYMqjs7gsZOQDAG12f5YGYF2K%26msv%3D8.0.0%26brand%3DApple%26imei%3D4C61C10F61A7EADFDE9249F13439ED52EA8454BB%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPodtouch3G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D808976FE-B04B-4CBC-91BC-36C600493C59"},{"key":"shuqirwbody2","val":"serviceWorkerOn=1&stopPullRefresh=1&from=ShuqiTab&upf=20368&sdk=13.2.3&utdid=YMqjs7gsZOQDAG12f5YGYF2K&ustatus=0&first_placeid=111111&net_env=3g&placeid=111111&user_id=2127627582&sn=D7BF53F800DB283AB837C2305F48338AA20ED258&umidtoken=YMqjs7gsZOQDAG12f5YGYF2K&msv=8.0.0&brand=Apple&imei=4C61C10F61A7EADFDE9249F13439ED52EA8454BB&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&session=&skinColor=23B383&platform=1&ver=210301&mod=iPodtouch3G&statusBarHeight=44.000000&skinVersion=1&wh=1242x2688&soft_id=21&utype=pre_vip&skinId=999&idfa=808976FE-B04B-4CBC-91BC-36C600493C59&params=%7B%22resources%22%3A%7B%22ShuqiBsDailyTask%22%3A%7B%7D%7D%7D&userId=2127627582&placeId=111111&timestamp=1624022977&sqSv=1.0&sign=5d6382bb9944b5d193d8039a8b615167&key=sq_h5_gateway&_public="},{"key":"shuqifxbody2","val":""},{"key":"shuqisprwurl2","val":"https://ocean.shuqireader.com/api/ad/adserver/v1/api/getAdInfo?appVer=4.3.6.0&placeId=111111&platform=iOS&requestSrc=h5&resourceId=626&timestamp=1624022995&user_id=2127627582&sqSv=1.0&sign=adf07b77fdbc2fc397635ca6161fb999&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.2.3%26utdid%3DYMqjs7gsZOQDAG12f5YGYF2K%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2127627582%26sn%3DD7BF53F800DB283AB837C2305F48338AA20ED258%26umidtoken%3DYMqjs7gsZOQDAG12f5YGYF2K%26msv%3D8.0.0%26brand%3DApple%26imei%3D4C61C10F61A7EADFDE9249F13439ED52EA8454BB%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPodtouch3G%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D808976FE-B04B-4CBC-91BC-36C600493C59"},{"key":"shuqijlbody2","val":"requestSrc=h5&userId=2127627582&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624022977&sqSv=1.0&sign=27d8dfdfe13c9e101bf2dbe00f522200&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.2.3%26utdid%3DYMqjs7gsZOQDAG12f5YGYF2K%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2127627582%26sn%3DD7BF53F800DB283AB837C2305F48338AA20ED258%26umidtoken%3DYMqjs7gsZOQDAG12f5YGYF2K%26msv%3D8.0.0%26brand%3DApple%26imei%3D4C61C10F61A7EADFDE9249F13439ED52EA8454BB%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPodtouch3G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D808976FE-B04B-4CBC-91BC-36C600493C59"},{"key":"shuqisqjlbody2","val":"src=&userId=2127627582&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624022956&sqSv=1.0&sign=362bb312fefc26a765b34b689d7c3777&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.2.3%26utdid%3DYMqjs7gsZOQDAG12f5YGYF2K%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2127627582%26sn%3DD7BF53F800DB283AB837C2305F48338AA20ED258%26umidtoken%3DYMqjs7gsZOQDAG12f5YGYF2K%26msv%3D8.0.0%26brand%3DApple%26imei%3D4C61C10F61A7EADFDE9249F13439ED52EA8454BB%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPodtouch3G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D808976FE-B04B-4CBC-91BC-36C600493C59"},{"key":"shuqicjyurl2","val":"https://ocean.shuqireader.com/api/activity/activity/v1/lottery/info?timestamp=1624022997&userId=2127627582&activityId=311&sqSv=1.0&sign=0f3adc2332066016469b3ebf0e9ccc98&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.2.3%26utdid%3DYMqjs7gsZOQDAG12f5YGYF2K%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2127627582%26sn%3DD7BF53F800DB283AB837C2305F48338AA20ED258%26umidtoken%3DYMqjs7gsZOQDAG12f5YGYF2K%26msv%3D8.0.0%26brand%3DApple%26imei%3D4C61C10F61A7EADFDE9249F13439ED52EA8454BB%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPodtouch3G%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D808976FE-B04B-4CBC-91BC-36C600493C59"},{"key":"shuqicjcsbody2","val":"_public=skinId%3D999%26idfa%3D808976FE-B04B-4CBC-91BC-36C600493C59%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26umidtoken%3DYMqjs7gsZOQDAG12f5YGYF2K%26user_id%3D2127627582%26sn%3DD7BF53F800DB283AB837C2305F48338AA20ED258%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D4C61C10F61A7EADFDE9249F13439ED52EA8454BB%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPodtouch3G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYMqjs7gsZOQDAG12f5YGYF2K%26utype%3Dpre_vip%26sdk%3D13.2.3&deliveryId=711&key=sq_app_ad&miniWua=HHnB_wHOAAd%2BcGyRKV7Ck5qtMKf0PwU6qsuPW6DVVJKpJa1c%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=703&sign=FA8BC41714B32254BAB58363D5B37129&timestamp=1624022982&userId=2127627582&user_id=2127627582&wua=HIVW_LefTKUaS4ARgb9iBBDh1Xn8/b%2BxlqMsXk5Jnt491UML8WljA7im5dfZzbMMIQsYn7pLg46wMhSvhUPSRYDEBH9FBwdaG9VG1/z7dhMdfM6Gksv2rxKsetIGzb5MUj2jeUgz5SIOZW5RRaH0JTmzpcQsd/wBIsAEHEyJxZAZt0pk51vZlmGiAAvwiuQu9vMCN6IxASrphnQW6URG7cLKTx1Gp0DxL%2BrljBdP301eocQI%3D"},{"key":"shuqicjbody2","val":"wua=HIVW_WRJSOpNTVvnYCs0s1%2BvaJrCFNsejCTw%2BBGl8yAh9zBv9YW0h20suRGLRL5syVWjzVpRny2Ju006ZqqOHQijaEEINB2J2Co9aoJ4RoFUl5%2BnMC3ePUKdT%2FopJaxLn6Q390wqrmAzUZywuHFpe74jf2h1lsUwqgPIB9yITg%2FB9b8RQ36kodh9aLg0B1IQbu1EocHkwhhLEmO53aaZf3sqo6iDWFviA7PKasBM1sQCfq5I%3D&ua=&userId=2127627582&umidtoken=YMqjs7gsZOQDAG12f5YGYF2K&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&asac=2A20C07RJ9F51AOEFSNHDR&timestamp=1624022985&activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&sqSv=1.0&sign=69eb8ed81cf84405f8d8e8687099dcc1&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.2.3%26utdid%3DYMqjs7gsZOQDAG12f5YGYF2K%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2127627582%26sn%3DD7BF53F800DB283AB837C2305F48338AA20ED258%26umidtoken%3DYMqjs7gsZOQDAG12f5YGYF2K%26msv%3D8.0.0%26brand%3DApple%26imei%3D4C61C10F61A7EADFDE9249F13439ED52EA8454BB%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPodtouch3G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D808976FE-B04B-4CBC-91BC-36C600493C59"},{"key":"shuqijsspbody2","val":""},{"key":"shuqijsydurl2","val":""},{"key":"shuqijsydbody2","val":""},{"key":"shuqijsqdbody2","val":""},{"key":"shuqijsqdspyurl2","val":""},{"key":"shuqijsqdspbody2","val":""},{"key":"shuqijsrwbody2","val":""},{"key":"shuqijsfxbody2","val":""},{"key":"shuqijsbookurl2","val":""},{"key":"shuqijsbookbody2","val":""},{"key":"shuqijssprwurl2","val":""},{"key":"shuqiuserurl3","val":"https://ocean.shuqireader.com/api/jaccount/accountapi/v1/sapi/account/getBindinfo?userId=2128673165&sqSv=1.0&timestamp=1624023098&sign=4aebe6874f9d76d52bb5a631d1f2b66c&key=sq_h5_gateway"},{"key":"shuqisyurl3","val":"https://render.shuqireader.com/load/resource?sdk=13.1.1&utdid=YMdROwmehEcDADQCYwasz7m5&ustatus=0&first_placeid=111111&net_env=wifi&placeid=111111&user_id=2128673165&sn=1CACABE4E6F0B50E9F09BD010E1ABAB99588F740&umidtoken=YMdROwmehEcDADQCYwasz7m5&msv=8.0.0&brand=Apple&imei=F309AEF1D1F44C7CA8E7463227967952C7C3873A&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=iOS&ver=210301&mod=iPad3G&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=A99B7C03-AD39-4AE7-9C30-2693CDAD6F20"},{"key":"shuqisybody3","val":"appVer=4.3.6.0&imei=F309AEF1D1F44C7CA8E7463227967952C7C3873A&isNewUser=1&params=%7B%22resources%22%3A%7B%22ShuqiVipEntry%22%3A%7B%7D%2C%22personalCardConfig%22%3A%7B%7D%7D%7D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=fd69d0b117bad810b43d313842766d97&sn=1CACABE4E6F0B50E9F09BD010E1ABAB99588F740&soft_id=21&timestamp=1624023018&user_id=2128673165&ver=210301"},{"key":"shuqispbody3","val":"_public=skinId%3D999%26idfa%3DA99B7C03-AD39-4AE7-9C30-2693CDAD6F20%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26umidtoken%3DYMdROwmehEcDADQCYwasz7m5%26user_id%3D2128673165%26sn%3D1CACABE4E6F0B50E9F09BD010E1ABAB99588F740%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3DF309AEF1D1F44C7CA8E7463227967952C7C3873A%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPad3G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYMdROwmehEcDADQCYwasz7m5%26utype%3Dpre_vip%26sdk%3D13.1.1&deliveryId=525&key=sq_app_ad&miniWua=HHnB_VuKBEV/lJlotLpVPRakvq1vgB3%2BaL4UGMt67RgKb3hc%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=626&sign=3FEAD3D4A36D001BFE2AD5C542C4F809&timestamp=1624023069&userId=2128673165&user_id=2128673165&wua=HIVW_%2BhBxKN1m%2B88YeebBb8vqJeGJS9kX82R04BAdEFb9oX/6nqXJ8gkFGo78YxwYJffjpARqOTYjLwrWBckF/HN6C1AQrDVfIQ/L2gcPeElagm9I8Zq5mlMFD7fqSez7TTKiHyIUth4ko2WOWxowC3BrafAWQF7Fjezuyb%2BL1kzVBhwYutLyl0F1umkTiMfuvM0IzlEm1rsYyfLTkP%2BuO%2BQxQmiBq%2BohtoM5zYKhuDUy1Ak%3D"},{"key":"shuqiscbody3","val":"_public=skinId%253D999%2526idfa%253DA99B7C03-AD39-4AE7-9C30-2693CDAD6F20%2526ustatus%253D0%2526first_placeid%253D111111%2526net_env%253Dwifi%2526umidtoken%253DYMdROwmehEcDADQCYwasz7m5%2526user_id%253D2128673165%2526sn%253D1CACABE4E6F0B50E9F09BD010E1ABAB99588F740%2526placeid%253D111111%2526msv%253D8.0.0%2526brand%253DApple%2526imei%253DF309AEF1D1F44C7CA8E7463227967952C7C3873A%2526skinVersionPrefix%253D1%2526appVer%253D4.3.6.0%2526skinActiveColor%253D0F9970%2526manufacturer%253DApple%2526skinColor%253D23B383%2526platform%253DiOS%2526ver%253D210301%2526mod%253DiPad3G%2526statusBarHeight%253D44.000000%2526skinVersion%253D1%2526wh%253D1242x2688%2526soft_id%253D21%2526utdid%253DYMdROwmehEcDADQCYwasz7m5%2526utype%253Dpre_vip%2526sdk%253D13.1.1&key=and_log&readingList=%5B%7B%22startTime%22%3A1624023022%2C%22readObjType%22%3A1%2C%22attr%22%3A2%2C%22readObjId%22%3A%228253380%22%2C%22readChapterId%22%3A1411300%2C%22readingLen%22%3A37%7D%5D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=FF69920B8764F7FA01F5F484BB53B154&timestamp=1624023060&user_id=2128673165"},{"key":"shuqiydbody3","val":"_public=skinId%3D999%26idfa%3DA99B7C03-AD39-4AE7-9C30-2693CDAD6F20%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26umidtoken%3DYMdROwmehEcDADQCYwasz7m5%26user_id%3D2128673165%26sn%3D1CACABE4E6F0B50E9F09BD010E1ABAB99588F740%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3DF309AEF1D1F44C7CA8E7463227967952C7C3873A%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPad3G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYMdROwmehEcDADQCYwasz7m5%26utype%3Dpre_vip%26sdk%3D13.1.1&deliveryId=707&key=sq_app_ad&miniWua=HHnB_Hh/B1cilbXExLPfElRFRpob2exdmks0PXtIip1XvA38%3D&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=678&sign=B55D8B3A48E5C40CEB373369BFA64E7C&timestamp=1624023052&userId=2128673165&wua=HIVW_cD3eQiKrQ%2BbRxxH9taO9R8IWuB%2BnFMCGLrT%2BmXsJUUuiT6yV3ZnmM5CezqtmjAv95hwza8%2BKlUitcgCK0Y/pyGJ%2BTYwpTMeSFG9bGt8KLcTXSjGc/hkvTz2VQWnw7qo1aftQQd4pF0MEsinbJB3/eFecrat3JWwslVBycIHvRqepUJmt3xlgSACB3DA8hN7i5c/jdMLq2DnJFnyttUJC49rAv6A3CvCBvc9sXyHIDHc%3D"},{"key":"shuqiqdbody3","val":"clientTimestamp=1624023063&position=501&userId=2128673165&signInType=1&wua=HIVW_%2BCEwW0KEtIzZ%2BklDfuCV%2FVShB5DwJz5qX772E2SC8ClWiPpdLCww3HQjuW0GJCKJEGbFqg4q7xsKiVEokjM%2FtDdrxFczvu2btxEe1alzE3i2ThSCz%2FsqLHDSvk6nSKm%2B3gS4HJj0JO41njRct%2BZPqihUMNuLW%2BSn52Bsrn16e85ART4fzvFucfjmOy5eCKzOAPhjmpfMHRZbSOP%2BBTCTD1N9%2FEK7RYR80Bf3KERp1Yk%3D&ua=&miniWua=HHnB_yrCxnulSmrjWebyM84L1%2FNoPccEVgSnmwbiBtLXMIQM%3D&umidtoken=YMdROwmehEcDADQCYwasz7m5&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&sign=82e8210ef296a28950da96a313437071&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.1.1%26utdid%3DYMdROwmehEcDADQCYwasz7m5%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2128673165%26sn%3D1CACABE4E6F0B50E9F09BD010E1ABAB99588F740%26umidtoken%3DYMdROwmehEcDADQCYwasz7m5%26msv%3D8.0.0%26brand%3DApple%26imei%3DF309AEF1D1F44C7CA8E7463227967952C7C3873A%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad3G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DA99B7C03-AD39-4AE7-9C30-2693CDAD6F20"},{"key":"shuqirwbody3","val":"serviceWorkerOn=1&stopPullRefresh=1&from=ShuqiTab&upf=20368&sdk=13.1.1&utdid=YMdROwmehEcDADQCYwasz7m5&ustatus=0&first_placeid=111111&net_env=wifi&placeid=111111&user_id=2128673165&sn=1CACABE4E6F0B50E9F09BD010E1ABAB99588F740&umidtoken=YMdROwmehEcDADQCYwasz7m5&msv=8.0.0&brand=Apple&imei=F309AEF1D1F44C7CA8E7463227967952C7C3873A&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&session=&skinColor=23B383&platform=1&ver=210301&mod=iPad3G&statusBarHeight=44.000000&skinVersion=1&wh=1242x2688&soft_id=21&utype=pre_vip&skinId=999&idfa=A99B7C03-AD39-4AE7-9C30-2693CDAD6F20&params=%7B%22resources%22%3A%7B%22ShuqiBsDailyTask%22%3A%7B%7D%7D%7D&userId=2128673165&placeId=111111&timestamp=1624023074&sqSv=1.0&sign=5e1f42e92ba0b932515dbbf705461f25&key=sq_h5_gateway&_public="},{"key":"shuqifxbody3","val":""},{"key":"shuqisprwurl3","val":"https://ocean.shuqireader.com/api/ad/adserver/v1/api/getAdInfo?appVer=4.3.6.0&placeId=111111&platform=iOS&requestSrc=h5&resourceId=626&timestamp=1624023097&user_id=2128673165&sqSv=1.0&sign=15bc2928d2124daf33dbdb69f06fb893&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.1.1%26utdid%3DYMdROwmehEcDADQCYwasz7m5%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2128673165%26sn%3D1CACABE4E6F0B50E9F09BD010E1ABAB99588F740%26umidtoken%3DYMdROwmehEcDADQCYwasz7m5%26msv%3D8.0.0%26brand%3DApple%26imei%3DF309AEF1D1F44C7CA8E7463227967952C7C3873A%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad3G%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DA99B7C03-AD39-4AE7-9C30-2693CDAD6F20"},{"key":"shuqijlbody3","val":"requestSrc=h5&userId=2128673165&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624023074&sqSv=1.0&sign=fd961781abe46609f2d707c384f0d19c&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.1.1%26utdid%3DYMdROwmehEcDADQCYwasz7m5%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2128673165%26sn%3D1CACABE4E6F0B50E9F09BD010E1ABAB99588F740%26umidtoken%3DYMdROwmehEcDADQCYwasz7m5%26msv%3D8.0.0%26brand%3DApple%26imei%3DF309AEF1D1F44C7CA8E7463227967952C7C3873A%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad3G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DA99B7C03-AD39-4AE7-9C30-2693CDAD6F20"},{"key":"shuqisqjlbody3","val":"src=&userId=2128673165&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624023069&sqSv=1.0&sign=624629888476a51ba3b1e0bc2720b88a&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.1.1%26utdid%3DYMdROwmehEcDADQCYwasz7m5%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2128673165%26sn%3D1CACABE4E6F0B50E9F09BD010E1ABAB99588F740%26umidtoken%3DYMdROwmehEcDADQCYwasz7m5%26msv%3D8.0.0%26brand%3DApple%26imei%3DF309AEF1D1F44C7CA8E7463227967952C7C3873A%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad3G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DA99B7C03-AD39-4AE7-9C30-2693CDAD6F20"},{"key":"shuqicjyurl3","val":"https://ocean.shuqireader.com/api/activity/activity/v1/lottery/info?timestamp=1624023099&userId=2128673165&activityId=311&sqSv=1.0&sign=3d2959076adc271c96c067b5500eb369&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.1.1%26utdid%3DYMdROwmehEcDADQCYwasz7m5%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2128673165%26sn%3D1CACABE4E6F0B50E9F09BD010E1ABAB99588F740%26umidtoken%3DYMdROwmehEcDADQCYwasz7m5%26msv%3D8.0.0%26brand%3DApple%26imei%3DF309AEF1D1F44C7CA8E7463227967952C7C3873A%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad3G%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DA99B7C03-AD39-4AE7-9C30-2693CDAD6F20"},{"key":"shuqicjcsbody3","val":"_public=skinId%3D999%26idfa%3DA99B7C03-AD39-4AE7-9C30-2693CDAD6F20%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26umidtoken%3DYMdROwmehEcDADQCYwasz7m5%26user_id%3D2128673165%26sn%3D1CACABE4E6F0B50E9F09BD010E1ABAB99588F740%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3DF309AEF1D1F44C7CA8E7463227967952C7C3873A%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPad3G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYMdROwmehEcDADQCYwasz7m5%26utype%3Dpre_vip%26sdk%3D13.1.1&deliveryId=711&key=sq_app_ad&miniWua=HHnB_ZDkN8Ak0x6qtInLzB96g5rBsA7ETv9oJQeAs43ITKqk%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=703&sign=D71E412C1EFE46C19F6DF17BB422B350&timestamp=1624023082&userId=2128673165&user_id=2128673165&wua=HIVW_22FFgvRar9oi96jaIq8HHSLxLMnEhORJGmMcJblQ3MjVJvbS955p06mJoelyc0V5auzlZh1YqrMUwJqrNpi1L9epCO%2Bs1LD1L0D9hLqWzBWZHhztds3PwLocRBEDYjDeE2Y6vGbDcpo3/elGulRn9cpoUSxMsLNq%2B6IJLu4qYEpQNBi%2B/kHU2kxhxcskVq6RD/S9o2WSZBjo%2BRDKf220X9mEVJ7nKptp0HSfEhtTQ9U%3D"},{"key":"shuqicjbody3","val":"wua=HIVW_ui1ymonn%2BjXNkjrNnImD6z0QUcWGVbNver%2FRHVfQDcg5BS5uHz%2Bi%2BmzRQ7B9BKMNkt1vliyy0k4WjFubLj8UlovWuBntFBC8rJWS8H%2FFrWoCyvpofB74uv58lV2X1uRDEkk3c3ZCB%2FcVVN%2BgQ%2FIZQX%2B%2BghoqDpnTijXBmUwt9xz48S5aXK3DSrguVPYMyy4%2BrSdeEY4usQZWGuCNAL%2FHWPB3CiO7tiDqeZSauKyJOb4%3D&ua=&userId=2128673165&umidtoken=YMdROwmehEcDADQCYwasz7m5&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&asac=2A20C07RJ9F51AOEFSNHDR&timestamp=1624023085&activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&sqSv=1.0&sign=08ce9e9d6e605d80102a695a84128d07&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.1.1%26utdid%3DYMdROwmehEcDADQCYwasz7m5%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2128673165%26sn%3D1CACABE4E6F0B50E9F09BD010E1ABAB99588F740%26umidtoken%3DYMdROwmehEcDADQCYwasz7m5%26msv%3D8.0.0%26brand%3DApple%26imei%3DF309AEF1D1F44C7CA8E7463227967952C7C3873A%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad3G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DA99B7C03-AD39-4AE7-9C30-2693CDAD6F20"},{"key":"shuqijsspbody3","val":""},{"key":"shuqijsydurl3","val":""},{"key":"shuqijsydbody3","val":""},{"key":"shuqijsqdbody3","val":""},{"key":"shuqijsqdspyurl3","val":""},{"key":"shuqijsqdspbody3","val":""},{"key":"shuqijsrwbody3","val":""},{"key":"shuqijsfxbody3","val":""},{"key":"shuqijsbookurl3","val":""},{"key":"shuqijsbookbody3","val":""},{"key":"shuqijssprwurl3","val":""},{"key":"shuqiuserurl4","val":"https://ocean.shuqireader.com/api/jaccount/accountapi/v1/sapi/account/getBindinfo?userId=2126099684&sqSv=1.0&timestamp=1624023193&sign=4bbac31b342d6d741e19ecd692f03c94&key=sq_h5_gateway"},{"key":"shuqisyurl4","val":"https://render.shuqireader.com/load/resource?sdk=13.2&utdid=YMdRSGfuWSsDAJVzOwTtRLOg&ustatus=0&first_placeid=111111&net_env=wifi&placeid=111111&user_id=2126099684&sn=14D4EFD7FD088DABF1864C178831DDAAC8C74227&umidtoken=YMdRSGfuWSsDAJVzOwTtRLOg&msv=8.0.0&brand=Apple&imei=BA9FD1ABD3E008405F8C180AD372D8204379E791&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=iOS&ver=210301&mod=iPad4G&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=61E5B0BA-9BB2-444C-B092-477DA6F8BE7B"},{"key":"shuqisybody4","val":"appVer=4.3.6.0&imei=BA9FD1ABD3E008405F8C180AD372D8204379E791&isNewUser=1&params=%7B%22resources%22%3A%7B%22ShuqiVipEntry%22%3A%7B%7D%2C%22personalCardConfig%22%3A%7B%7D%7D%7D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=102611282924b38a4d9179c58576aecc&sn=14D4EFD7FD088DABF1864C178831DDAAC8C74227&soft_id=21&timestamp=1624023118&user_id=2126099684&ver=210301"},{"key":"shuqispbody4","val":"_public=skinId%3D999%26idfa%3D61E5B0BA-9BB2-444C-B092-477DA6F8BE7B%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26umidtoken%3DYMdRSGfuWSsDAJVzOwTtRLOg%26user_id%3D2126099684%26sn%3D14D4EFD7FD088DABF1864C178831DDAAC8C74227%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3DBA9FD1ABD3E008405F8C180AD372D8204379E791%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPad4G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYMdRSGfuWSsDAJVzOwTtRLOg%26utype%3Dpre_vip%26sdk%3D13.2&deliveryId=525&key=sq_app_ad&miniWua=HHnB_WiXSb632rpAYjBt%2ByhVVCMOPgnV052mujr7lHlFZx%2BA%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=626&sign=3EC373475517D1C9CE59F780E32E67AF&timestamp=1624023163&userId=2126099684&user_id=2126099684&wua=HIVW_JF7HHm6ryM3qMXGKTwBixs3GMBF/avtjN1JqeVMPVwWMfqr6DXgo8bKuYHJKpBzIsHJCLDRpo3AupOpwAsnfsibTjOvlekEy0Dutd7UspkbF3Xj7kyQMV%2B/ITpaSlVqr1lGL9fgkJfxmwapXvkaEvK5GomudoAUa4IPnaMD0UpN%2BKl84i%2BiwZglN%2BwxDjeXXY6ks1C8enyiEw4L%2BDti9eqensFRGkHL6J5YYRw1XZ%2Bw%3D"},{"key":"shuqiscbody4","val":"_public=skinId%253D999%2526idfa%253D61E5B0BA-9BB2-444C-B092-477DA6F8BE7B%2526ustatus%253D0%2526first_placeid%253D111111%2526net_env%253Dwifi%2526umidtoken%253DYMdRSGfuWSsDAJVzOwTtRLOg%2526user_id%253D2126099684%2526sn%253D14D4EFD7FD088DABF1864C178831DDAAC8C74227%2526placeid%253D111111%2526msv%253D8.0.0%2526brand%253DApple%2526imei%253DBA9FD1ABD3E008405F8C180AD372D8204379E791%2526skinVersionPrefix%253D1%2526appVer%253D4.3.6.0%2526skinActiveColor%253D0F9970%2526manufacturer%253DApple%2526skinColor%253D23B383%2526platform%253DiOS%2526ver%253D210301%2526mod%253DiPad4G%2526statusBarHeight%253D44.000000%2526skinVersion%253D1%2526wh%253D1242x2688%2526soft_id%253D21%2526utdid%253DYMdRSGfuWSsDAJVzOwTtRLOg%2526utype%253Dpre_vip%2526sdk%253D13.2&key=and_log&readingList=%5B%7B%22startTime%22%3A1624023122%2C%22readObjType%22%3A1%2C%22attr%22%3A2%2C%22readObjId%22%3A%228253380%22%2C%22readChapterId%22%3A1411301%2C%22readingLen%22%3A33%7D%5D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=DA370517114448D58F21D210FF955F3E&timestamp=1624023156&user_id=2126099684"},{"key":"shuqiydbody4","val":"_public=skinId%3D999%26idfa%3D61E5B0BA-9BB2-444C-B092-477DA6F8BE7B%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26umidtoken%3DYMdRSGfuWSsDAJVzOwTtRLOg%26user_id%3D2126099684%26sn%3D14D4EFD7FD088DABF1864C178831DDAAC8C74227%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3DBA9FD1ABD3E008405F8C180AD372D8204379E791%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPad4G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYMdRSGfuWSsDAJVzOwTtRLOg%26utype%3Dpre_vip%26sdk%3D13.2&deliveryId=707&key=sq_app_ad&miniWua=HHnB_HFTzq78f9oX7EVVJQN5Hr9njjdeEmf%2BrPf8EWYYV9O8%3D&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=678&sign=6DC0C9AC27043CD4DB6D4E4683DFAA75&timestamp=1624023152&userId=2126099684&wua=HIVW_zln90VCdO//vNpKwTcieyKx4QEvueV3xI8MB/m5nrjSUs9GbYO9rin0EiCqRYvbVUrkvwf9CGq5ccgsdpm2D54qeBaaswmYr%2B1rITcHT/MwQGPeTkNL8BphmtBskF9Olj/xxdZDkCsy7kYCnJvzTwLvaZd8O2M96WiupzlbEOIQv0zXiWZTrJptcamf1VzBEnVH3oeRqyiSU3gnh5Vdgm9YW9Ln6q1VjxEPR3aCVcmQ%3D"},{"key":"shuqiqdbody4","val":"clientTimestamp=1624023169&position=501&userId=2126099684&signInType=1&wua=HIVW_%2BrFUmvu0%2BVESBoCz2URzT%2BRFUFOhJlWF3KKW44hB4SXWnDcOVbNu%2BvZJtk4yPj%2BQ2vh1S7gjKDwfRCfwHezuA7sXytDascO0m2EhpZGGCG%2BMVAyuQJ4wvaqsrwT5fgkJvpbuS97JZtKcln3TtgEyaqu9u8HKzaIEVebpBloRbcAepQMW%2BblJFwP7wBSAD451MdfuYJREb%2BBW3opi4KcTLBjKH90iLv5sSaqHCw0i2Nk%3D&ua=&miniWua=HHnB_0q1Hq3uu%2FbMZc4mxITvzOQ3zzu9NjADh2Ui8asIcgvo%3D&umidtoken=YMdRSGfuWSsDAJVzOwTtRLOg&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&sign=5755a3ca02ab0efe59fbba488e2c2c6f&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26sdk%3D13.2%26utdid%3DYMdRSGfuWSsDAJVzOwTtRLOg%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2126099684%26sn%3D14D4EFD7FD088DABF1864C178831DDAAC8C74227%26umidtoken%3DYMdRSGfuWSsDAJVzOwTtRLOg%26msv%3D8.0.0%26brand%3DApple%26imei%3DBA9FD1ABD3E008405F8C180AD372D8204379E791%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad4G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D61E5B0BA-9BB2-444C-B092-477DA6F8BE7B"},{"key":"shuqirwbody4","val":"serviceWorkerOn=1&sdk=13.2&utdid=YMdRSGfuWSsDAJVzOwTtRLOg&ustatus=0&first_placeid=111111&net_env=wifi&placeid=111111&user_id=2126099684&sn=14D4EFD7FD088DABF1864C178831DDAAC8C74227&umidtoken=YMdRSGfuWSsDAJVzOwTtRLOg&msv=8.0.0&brand=Apple&imei=BA9FD1ABD3E008405F8C180AD372D8204379E791&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&session=&skinColor=23B383&platform=1&ver=210301&mod=iPad4G&statusBarHeight=44.000000&skinVersion=1&wh=1242x2688&soft_id=21&utype=pre_vip&skinId=999&idfa=61E5B0BA-9BB2-444C-B092-477DA6F8BE7B&params=%7B%22resources%22%3A%7B%22ShuqiBsDailyTask%22%3A%7B%7D%7D%7D&userId=2126099684&placeId=111111&timestamp=1624023170&sqSv=1.0&sign=4fadf13ebbc571718742dcec35405da8&key=sq_h5_gateway&_public="},{"key":"shuqifxbody4","val":""},{"key":"shuqisprwurl4","val":"https://ocean.shuqireader.com/api/ad/adserver/v1/api/getAdInfo?appVer=4.3.6.0&placeId=111111&platform=iOS&requestSrc=h5&resourceId=626&timestamp=1624023191&user_id=2126099684&sqSv=1.0&sign=0afb0c9f34676bf2b1f8258a13a4c3bb&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26sdk%3D13.2%26utdid%3DYMdRSGfuWSsDAJVzOwTtRLOg%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2126099684%26sn%3D14D4EFD7FD088DABF1864C178831DDAAC8C74227%26umidtoken%3DYMdRSGfuWSsDAJVzOwTtRLOg%26msv%3D8.0.0%26brand%3DApple%26imei%3DBA9FD1ABD3E008405F8C180AD372D8204379E791%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad4G%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D61E5B0BA-9BB2-444C-B092-477DA6F8BE7B"},{"key":"shuqijlbody4","val":"requestSrc=h5&userId=2126099684&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624023170&sqSv=1.0&sign=1fe8ac7063b497fbb1989c1b0ce7690c&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26sdk%3D13.2%26utdid%3DYMdRSGfuWSsDAJVzOwTtRLOg%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2126099684%26sn%3D14D4EFD7FD088DABF1864C178831DDAAC8C74227%26umidtoken%3DYMdRSGfuWSsDAJVzOwTtRLOg%26msv%3D8.0.0%26brand%3DApple%26imei%3DBA9FD1ABD3E008405F8C180AD372D8204379E791%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad4G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D61E5B0BA-9BB2-444C-B092-477DA6F8BE7B"},{"key":"shuqisqjlbody4","val":"src=&userId=2126099684&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624023162&sqSv=1.0&sign=14a023869fe82b5d57e234c45d42f748&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26sdk%3D13.2%26utdid%3DYMdRSGfuWSsDAJVzOwTtRLOg%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2126099684%26sn%3D14D4EFD7FD088DABF1864C178831DDAAC8C74227%26umidtoken%3DYMdRSGfuWSsDAJVzOwTtRLOg%26msv%3D8.0.0%26brand%3DApple%26imei%3DBA9FD1ABD3E008405F8C180AD372D8204379E791%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad4G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D61E5B0BA-9BB2-444C-B092-477DA6F8BE7B"},{"key":"shuqicjyurl4","val":"https://ocean.shuqireader.com/api/activity/activity/v1/lottery/info?timestamp=1624023194&userId=2126099684&activityId=311&sqSv=1.0&sign=09da5bcccded8aa87ca6efc76298ce34&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.2%26utdid%3DYMdRSGfuWSsDAJVzOwTtRLOg%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2126099684%26sn%3D14D4EFD7FD088DABF1864C178831DDAAC8C74227%26umidtoken%3DYMdRSGfuWSsDAJVzOwTtRLOg%26msv%3D8.0.0%26brand%3DApple%26imei%3DBA9FD1ABD3E008405F8C180AD372D8204379E791%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad4G%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D61E5B0BA-9BB2-444C-B092-477DA6F8BE7B"},{"key":"shuqicjcsbody4","val":"_public=skinId%3D999%26idfa%3D61E5B0BA-9BB2-444C-B092-477DA6F8BE7B%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26umidtoken%3DYMdRSGfuWSsDAJVzOwTtRLOg%26user_id%3D2126099684%26sn%3D14D4EFD7FD088DABF1864C178831DDAAC8C74227%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3DBA9FD1ABD3E008405F8C180AD372D8204379E791%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPad4G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYMdRSGfuWSsDAJVzOwTtRLOg%26utype%3Dpre_vip%26sdk%3D13.2&deliveryId=711&key=sq_app_ad&miniWua=HHnB_Sp%2BxNH5HcabF0adtdhVeddWy8hrcQpRHE3LMsF3dCiI%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=703&sign=B3E9D65C9138C07157B367AC06631223&timestamp=1624023174&userId=2126099684&user_id=2126099684&wua=HIVW_4JzsXnBaMtJ08EVrJuNNjiRT0MyB0H9dq8UsxT4voj5OGAcidVidiGULTZRBuSDOGwGm7dJbNX%2BhiyNeH5xLTu/Qa7VtzVjIhZUtdLdhNhQLNZUhVuaW61aKCwpzeoSuc6R7EFgcPljy9XdaTzndvq%2BpiyihXFFNCqNYgInLXhLu%2BOKMQrZdZmdWV14NyxJPmSJyVm3Y1MOCcgSRLbL8p85bOvRZSWxDtszwqhVNxEU%3D"},{"key":"shuqicjbody4","val":"wua=HIVW_YibvsUWTM6Xc8qtMr%2BTYJSIJ%2BAKnoKHhaN2OUtXOiyaQuCHk8DeRCyQ%2BHZMpkqpYMoj2IcLCt9Os9M9DC%2B4ZXYcdoQfxwNjWGTThcr6LIKTnyShyhNU%2BeVmusWDv1JKDG9AWlF5S7pKO%2Fysky0PPUgALC6Tzt3LMzKMPvpMOutaC4NTRjQkKSLUzOLVNOEGZo6gwTJnmGmB62CboI7n0RBflwHa7BjPA2f02ajJus%2B8%3D&ua=&userId=2126099684&umidtoken=YMdRSGfuWSsDAJVzOwTtRLOg&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&asac=2A20C07RJ9F51AOEFSNHDR&timestamp=1624023177&activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&sqSv=1.0&sign=74e2eacee7fcec22b9f110b3271b9273&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.2%26utdid%3DYMdRSGfuWSsDAJVzOwTtRLOg%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2126099684%26sn%3D14D4EFD7FD088DABF1864C178831DDAAC8C74227%26umidtoken%3DYMdRSGfuWSsDAJVzOwTtRLOg%26msv%3D8.0.0%26brand%3DApple%26imei%3DBA9FD1ABD3E008405F8C180AD372D8204379E791%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad4G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D61E5B0BA-9BB2-444C-B092-477DA6F8BE7B"},{"key":"shuqijsspbody4","val":""},{"key":"shuqijsydurl4","val":""},{"key":"shuqijsydbody4","val":""},{"key":"shuqijsqdbody4","val":""},{"key":"shuqijsqdspyurl4","val":""},{"key":"shuqijsqdspbody4","val":""},{"key":"shuqijsrwbody4","val":""},{"key":"shuqijsfxbody4","val":""},{"key":"shuqijsbookurl4","val":""},{"key":"shuqijsbookbody4","val":""},{"key":"shuqijssprwurl4","val":""},{"key":"shuqiuserurl5","val":"https://ocean.shuqireader.com/api/jaccount/accountapi/v1/sapi/account/getBindinfo?userId=2128124602&sqSv=1.0&timestamp=1624023290&sign=bb05de7f8cf370dd23fe704137ef05a8&key=sq_h5_gateway"},{"key":"shuqisyurl5","val":"https://render.shuqireader.com/load/resource?sdk=13.1.1&utdid=YMdRSGfuWSsDAJVzOwTtRLOg&ustatus=0&first_placeid=111111&net_env=wifi&placeid=111111&user_id=2128124602&sn=B8D8F741D14E9BD171928DE991C8DEEE53A5DEAB&umidtoken=YMdRSGfuWSsDAJVzOwTtRLOg&msv=8.0.0&brand=Apple&imei=A0665D06522D23DEE85A85E71877907D481A11D1&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=iOS&ver=210301&mod=iPodtouch3G&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=7ACFC49E-60BC-4DD3-8DD8-1A12067D9300"},{"key":"shuqisybody5","val":"appVer=4.3.6.0&imei=A0665D06522D23DEE85A85E71877907D481A11D1&isNewUser=1&params=%7B%22resources%22%3A%7B%22ShuqiVipEntry%22%3A%7B%7D%2C%22personalCardConfig%22%3A%7B%7D%7D%7D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=e2f7e348c7690d4b11aacc90361c4083&sn=B8D8F741D14E9BD171928DE991C8DEEE53A5DEAB&soft_id=21&timestamp=1624024685&user_id=2128124602&ver=210301"},{"key":"shuqispbody5","val":"_public=utype%3Dpre_vip%26idfa%3D7ACFC49E-60BC-4DD3-8DD8-1A12067D9300%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26umidtoken%3DYMdRSGfuWSsDAJVzOwTtRLOg%26user_id%3D2128124602%26sn%3DB8D8F741D14E9BD171928DE991C8DEEE53A5DEAB%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3DA0665D06522D23DEE85A85E71877907D481A11D1%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPodtouch3G%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26utdid%3DYMdRSGfuWSsDAJVzOwTtRLOg%26soft_id%3D21%26sdk%3D13.1.1&deliveryId=525&key=sq_app_ad&miniWua=HHnB_Ntaim0M9mf2gTgG9Yj4Ppnc6Q7b3AxGpmOsm0u36n%2Bk%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=626&sign=E2584A7F7AB9BA4ED909D5A0CB3043BD&timestamp=1624023262&userId=2128124602&user_id=2128124602&wua=HIVW_E2ed7/c2xgdKoeCqE/zyUfnl2ElpTDyek3PJcV/zaBvQaWq9oSNfP%2BQ4vBacI1UtBjV1rGuj5xtyzgnUirx3GbWs2VTPghe/iZVvcsdvMJf1n2UCB%2B634eCg7ruaQtKRj8Fh0wk7EZwoP2PKhT1ktI5kbcoUejDNbAKVryZzCfQ/nU%2BpwuO7opcApS/GDVH28LcCwxbn1fxQByjqHIR2hks5n51sTB8phXLkkZDarR4%3D"},{"key":"shuqiscbody5","val":"_public=utype%253Dpre_vip%2526idfa%253D7ACFC49E-60BC-4DD3-8DD8-1A12067D9300%2526ustatus%253D0%2526first_placeid%253D111111%2526net_env%253Dwifi%2526umidtoken%253DYMdRSGfuWSsDAJVzOwTtRLOg%2526user_id%253D2128124602%2526sn%253DB8D8F741D14E9BD171928DE991C8DEEE53A5DEAB%2526placeid%253D111111%2526msv%253D8.0.0%2526brand%253DApple%2526imei%253DA0665D06522D23DEE85A85E71877907D481A11D1%2526skinVersionPrefix%253D1%2526appVer%253D4.3.6.0%2526skinActiveColor%253D0F9970%2526manufacturer%253DApple%2526statusBarHeight%253D44.000000%2526skinColor%253D23B383%2526platform%253DiOS%2526ver%253D210301%2526mod%253DiPodtouch3G%2526skinVersion%253D1%2526wh%253D1242x2688%2526skinId%253D999%2526utdid%253DYMdRSGfuWSsDAJVzOwTtRLOg%2526soft_id%253D21%2526sdk%253D13.1.1&key=and_log&readingList=%5B%7B%22startTime%22%3A1624023226%2C%22readObjType%22%3A1%2C%22attr%22%3A2%2C%22readObjId%22%3A%227976209%22%2C%22readChapterId%22%3A1303788%2C%22readingLen%22%3A19%7D%5D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=91D1518F7B18B71E74CFEBD2B7E3A0A4&timestamp=1624023245&user_id=2128124602"},{"key":"shuqiydbody5","val":"_public=utype%3Dpre_vip%26idfa%3D7ACFC49E-60BC-4DD3-8DD8-1A12067D9300%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26umidtoken%3DYMdRSGfuWSsDAJVzOwTtRLOg%26user_id%3D2128124602%26sn%3DB8D8F741D14E9BD171928DE991C8DEEE53A5DEAB%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3DA0665D06522D23DEE85A85E71877907D481A11D1%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPodtouch3G%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26utdid%3DYMdRSGfuWSsDAJVzOwTtRLOg%26soft_id%3D21%26sdk%3D13.1.1&deliveryId=707&key=sq_app_ad&miniWua=HHnB_%2B7Ie/WDUAOb81MyhKm17i0LmYXaVenvLO/G/SB2QXpY%3D&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=678&sign=C4CF38810C62B1437657DBDC97538800&timestamp=1624023241&userId=2128124602&wua=HIVW_9mGmvRA1mVF09%2BHuu4ka09JK35nu5OGwbehUdskIbnMU89/979Dllm2Fqg1NuigV8NATFlXDSZlEExbhuafhaM5P/dpTZM/9DDuIfEFScnvFsWRsJ3Pv%2BqYCOf%2B94m/jvx7tA7MpVHudNM4C4ZkAwZ3x0rN2qMGbzwQKzcJo066t0TFjgBHM95OlepezMf5c80zy8VPs07pI0rN/sT8MY/Ez%2B%2BKu3HlktFToVrM/E5I%3D"},{"key":"shuqiqdbody5","val":"clientTimestamp=1624023249&position=501&userId=2128124602&signInType=1&wua=HIVW_5LIwHAXBH4%2Fneh%2BJbvHLIw5tgYmb5OVd%2Ft%2BgljYrK58UvRfkZWKMm2WdsKtBsCnCyq%2BOWuk9FvqyBq%2BGSlmKVoK491Dhk2e2PSpQBVPewM%2FsdSm0Aga6M5Kft2Eur%2BeoBxFFdN65tw%2BekdehNZKRUeCMtn7Tiehxp79qBkZ4NMySLEZrvMrFO69%2FVOr0tj%2FMDDc7c3aEGuuZdNMSv1bzAddYIRcYvdkKVATaaBdTC7Q%3D&ua=&miniWua=HHnB_9vpeUKbrdVew5L7fbTuj08qJI6VZwIZ%2B9N4N03G1CnE%3D&umidtoken=YMdRSGfuWSsDAJVzOwTtRLOg&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&sign=039ee39291ecd6338142572f5dd79a7a&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.1.1%26utdid%3DYMdRSGfuWSsDAJVzOwTtRLOg%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2128124602%26sn%3DB8D8F741D14E9BD171928DE991C8DEEE53A5DEAB%26umidtoken%3DYMdRSGfuWSsDAJVzOwTtRLOg%26msv%3D8.0.0%26brand%3DApple%26imei%3DA0665D06522D23DEE85A85E71877907D481A11D1%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPodtouch3G%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D7ACFC49E-60BC-4DD3-8DD8-1A12067D9300"},{"key":"shuqirwbody5","val":"serviceWorkerOn=1&stopPullRefresh=1&from=ShuqiTab&upf=20368&sdk=13.1.1&utdid=YMdRSGfuWSsDAJVzOwTtRLOg&ustatus=0&first_placeid=111111&net_env=wifi&placeid=111111&user_id=2128124602&sn=B8D8F741D14E9BD171928DE991C8DEEE53A5DEAB&umidtoken=YMdRSGfuWSsDAJVzOwTtRLOg&msv=8.0.0&brand=Apple&imei=A0665D06522D23DEE85A85E71877907D481A11D1&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=1&ver=210301&mod=iPodtouch3G&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=7ACFC49E-60BC-4DD3-8DD8-1A12067D9300&params=%7B%22resources%22%3A%7B%22ShuqiBsDailyTask%22%3A%7B%7D%7D%7D&userId=2128124602&placeId=111111&timestamp=1624023265&sqSv=1.0&sign=be98e32e6826c5a27ac504026cc0d41c&key=sq_h5_gateway&_public="},{"key":"shuqifxbody5","val":""},{"key":"shuqisprwurl5","val":"https://ocean.shuqireader.com/api/ad/adserver/v1/api/getAdInfo?appVer=4.3.6.0&placeId=111111&platform=iOS&requestSrc=h5&resourceId=626&timestamp=1624023291&user_id=2128124602&sqSv=1.0&sign=e55a6ca35994197b38573702afa4c845&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.1.1%26utdid%3DYMdRSGfuWSsDAJVzOwTtRLOg%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2128124602%26sn%3DB8D8F741D14E9BD171928DE991C8DEEE53A5DEAB%26umidtoken%3DYMdRSGfuWSsDAJVzOwTtRLOg%26msv%3D8.0.0%26brand%3DApple%26imei%3DA0665D06522D23DEE85A85E71877907D481A11D1%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPodtouch3G%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D7ACFC49E-60BC-4DD3-8DD8-1A12067D9300"},{"key":"shuqijlbody5","val":"requestSrc=h5&userId=2128124602&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624023265&sqSv=1.0&sign=201080e0269f7fcd96b993862bcb319d&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.1.1%26utdid%3DYMdRSGfuWSsDAJVzOwTtRLOg%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2128124602%26sn%3DB8D8F741D14E9BD171928DE991C8DEEE53A5DEAB%26umidtoken%3DYMdRSGfuWSsDAJVzOwTtRLOg%26msv%3D8.0.0%26brand%3DApple%26imei%3DA0665D06522D23DEE85A85E71877907D481A11D1%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPodtouch3G%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D7ACFC49E-60BC-4DD3-8DD8-1A12067D9300"},{"key":"shuqisqjlbody5","val":"src=&userId=2128124602&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624023252&sqSv=1.0&sign=fc2dc306e9cc87c939ec40994318f8ba&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.1.1%26utdid%3DYMdRSGfuWSsDAJVzOwTtRLOg%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2128124602%26sn%3DB8D8F741D14E9BD171928DE991C8DEEE53A5DEAB%26umidtoken%3DYMdRSGfuWSsDAJVzOwTtRLOg%26msv%3D8.0.0%26brand%3DApple%26imei%3DA0665D06522D23DEE85A85E71877907D481A11D1%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPodtouch3G%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D7ACFC49E-60BC-4DD3-8DD8-1A12067D9300"},{"key":"shuqicjyurl5","val":"https://ocean.shuqireader.com/api/activity/activity/v1/lottery/info?timestamp=1624023293&userId=2128124602&activityId=311&sqSv=1.0&sign=f9fbda86e0c709e84e78a2359f84ae2c&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.1.1%26utdid%3DYMdRSGfuWSsDAJVzOwTtRLOg%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2128124602%26sn%3DB8D8F741D14E9BD171928DE991C8DEEE53A5DEAB%26umidtoken%3DYMdRSGfuWSsDAJVzOwTtRLOg%26msv%3D8.0.0%26brand%3DApple%26imei%3DA0665D06522D23DEE85A85E71877907D481A11D1%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPodtouch3G%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D7ACFC49E-60BC-4DD3-8DD8-1A12067D9300"},{"key":"shuqicjcsbody5","val":"_public=utype%3Dpre_vip%26idfa%3D7ACFC49E-60BC-4DD3-8DD8-1A12067D9300%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26umidtoken%3DYMdRSGfuWSsDAJVzOwTtRLOg%26user_id%3D2128124602%26sn%3DB8D8F741D14E9BD171928DE991C8DEEE53A5DEAB%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3DA0665D06522D23DEE85A85E71877907D481A11D1%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPodtouch3G%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26utdid%3DYMdRSGfuWSsDAJVzOwTtRLOg%26soft_id%3D21%26sdk%3D13.1.1&deliveryId=711&key=sq_app_ad&miniWua=HHnB_ivp19ZzhCL0EJNSlCBDMn89ofjsyuwy9po/k5qsI2KY%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=703&sign=BDE4E4C7248B2BDB3BBFEDE9932C4571&timestamp=1624023270&userId=2128124602&user_id=2128124602&wua=HIVW_FWzEYucsEqCZsGpfzvCMFQT%2BNux1D5QPOFogc3C9%2B6KU555ond3E1sv8X2NR1S5ijRlnGLFg4GFmEHIGnt/TZTa/MDMl3OlE0eH4pUdptlWb8kCjQqohmPSpyg1orqJ/CoIIwkVcQN5ZED1XybKCYyphY6ydH3eLanTaFTb7Qw/l8wDYM2%2BTi8wtXGVvZMdkhSmjgKSCpFsVKoUc%2BAZ5bKtXXVPRtmfX89iScHEPgiU%3D"},{"key":"shuqicjbody5","val":"wua=HIVW_1gw7dpvjgz9sdeGWAbtRT4U8WBb9voZ%2BYoONwuD52QN3OL1VBzfLAuvZ33L6%2FSZFqArFGPPLcdnezE3LEa0ho8dzy8KFhlVur%2BRdaT9KaJS6Qbmxi99gSXipVgiig%2FmGHmPHfO4%2FwOePAvJYBgZZW9uY5TehBVnaWrc7odlHSJz8HD8opEjdE12mIDfIyf7k8BkZZaTHUBkaroosHIsE0nEPj4TPSmnw4pkZkso51N0%3D&ua=&userId=2128124602&umidtoken=YMdRSGfuWSsDAJVzOwTtRLOg&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&asac=2A20C07RJ9F51AOEFSNHDR&timestamp=1624023274&activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&sqSv=1.0&sign=bc967592de66c6b9c991929ceb8c9868&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.1.1%26utdid%3DYMdRSGfuWSsDAJVzOwTtRLOg%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2128124602%26sn%3DB8D8F741D14E9BD171928DE991C8DEEE53A5DEAB%26umidtoken%3DYMdRSGfuWSsDAJVzOwTtRLOg%26msv%3D8.0.0%26brand%3DApple%26imei%3DA0665D06522D23DEE85A85E71877907D481A11D1%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPodtouch3G%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D7ACFC49E-60BC-4DD3-8DD8-1A12067D9300"},{"key":"shuqijsspbody5","val":""},{"key":"shuqijsydurl5","val":""},{"key":"shuqijsydbody5","val":""},{"key":"shuqijsqdbody5","val":""},{"key":"shuqijsqdspyurl5","val":""},{"key":"shuqijsqdspbody5","val":""},{"key":"shuqijsrwbody5","val":""},{"key":"shuqijsfxbody5","val":""},{"key":"shuqijsbookurl5","val":""},{"key":"shuqijsbookbody5","val":""},{"key":"shuqijssprwurl5","val":""},{"key":"shuqiuserurl6","val":"https://ocean.shuqireader.com/api/jaccount/accountapi/v1/sapi/account/getBindinfo?userId=2125169390&sqSv=1.0&timestamp=1624023406&sign=c7cd8b5204f03950919d59c77e584940&key=sq_h5_gateway"},{"key":"shuqisyurl6","val":"https://render.shuqireader.com/load/resource?sdk=13.1.3&utdid=YMdRSGfuWSsDAJVzOwTtRLOg&ustatus=0&first_placeid=111111&net_env=wifi&placeid=111111&user_id=2125169390&sn=2DE0DEB82BFEE05618D725BF7C1CCC4C27003509&umidtoken=YMdRSGfuWSsDAJVzOwTtRLOg&msv=8.0.0&brand=Apple&imei=0512F7157A819F54EBEA94D4FA3A5DCCE84F8370&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=iOS&ver=210301&mod=UnknowniPad&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=5DE805E8-67B1-4775-9CD5-D131DB4D6559"},{"key":"shuqisybody6","val":"appVer=4.3.6.0&imei=0512F7157A819F54EBEA94D4FA3A5DCCE84F8370&isNewUser=1&params=%7B%22resources%22%3A%7B%22ShuqiVipEntry%22%3A%7B%7D%2C%22personalCardConfig%22%3A%7B%7D%7D%7D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=119d81c432e69b64d50bfeeb2fd12a68&sn=2DE0DEB82BFEE05618D725BF7C1CCC4C27003509&soft_id=21&timestamp=1624023326&user_id=2125169390&ver=210301"},{"key":"shuqispbody6","val":"_public=skinId%3D999%26idfa%3D5DE805E8-67B1-4775-9CD5-D131DB4D6559%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26umidtoken%3DYMdRSGfuWSsDAJVzOwTtRLOg%26user_id%3D2125169390%26sn%3D2DE0DEB82BFEE05618D725BF7C1CCC4C27003509%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D0512F7157A819F54EBEA94D4FA3A5DCCE84F8370%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYMdRSGfuWSsDAJVzOwTtRLOg%26utype%3Dpre_vip%26sdk%3D13.1.3&deliveryId=525&key=sq_app_ad&miniWua=HHnB_ClOfk4hhQc3LkHNBiWtIS25tDvapJkA4Sp6stHCce/M%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=626&sign=BB918F5D62D85DD0169FFA89F6A6C070&timestamp=1624023376&userId=2125169390&user_id=2125169390&wua=HIVW_F7zEDQ9PUrSYh9kaBq0Z5eCKRVeEogrJIRgJKbpXAJ58s877hcZVq2wlp7K5rEb5aqspjssIG2qDNqv8JhNWaKIdFk8%2BHlBB32rA8exz51NR1lAJDPZwrhOW/zm8TNnPvdGcxwVruSv9ESIKIu8s9CqSFxR73b%2BA2tKdbf6JsZMD/BFplhUFov3urT9AI0PIAjNLjJAX6wx2ydvOuYfhKhLgCxQOdSmrwQOb0AbVGZo%3D"},{"key":"shuqiscbody6","val":"_public=skinId%253D999%2526idfa%253D5DE805E8-67B1-4775-9CD5-D131DB4D6559%2526ustatus%253D0%2526first_placeid%253D111111%2526net_env%253Dwifi%2526umidtoken%253DYMdRSGfuWSsDAJVzOwTtRLOg%2526user_id%253D2125169390%2526sn%253D2DE0DEB82BFEE05618D725BF7C1CCC4C27003509%2526placeid%253D111111%2526msv%253D8.0.0%2526brand%253DApple%2526imei%253D0512F7157A819F54EBEA94D4FA3A5DCCE84F8370%2526skinVersionPrefix%253D1%2526appVer%253D4.3.6.0%2526skinActiveColor%253D0F9970%2526manufacturer%253DApple%2526skinColor%253D23B383%2526platform%253DiOS%2526ver%253D210301%2526mod%253DUnknowniPad%2526statusBarHeight%253D44.000000%2526skinVersion%253D1%2526wh%253D1242x2688%2526soft_id%253D21%2526utdid%253DYMdRSGfuWSsDAJVzOwTtRLOg%2526utype%253Dpre_vip%2526sdk%253D13.1.3&key=and_log&readingList=%5B%7B%22startTime%22%3A1624023330%2C%22readObjType%22%3A1%2C%22attr%22%3A2%2C%22readObjId%22%3A%228332035%22%2C%22readChapterId%22%3A1469407%2C%22readingLen%22%3A34%7D%5D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=ABC18E82D8F24155AFB5AE96A86214BF&timestamp=1624023365&user_id=2125169390"},{"key":"shuqiydbody6","val":"_public=skinId%3D999%26idfa%3D5DE805E8-67B1-4775-9CD5-D131DB4D6559%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26umidtoken%3DYMdRSGfuWSsDAJVzOwTtRLOg%26user_id%3D2125169390%26sn%3D2DE0DEB82BFEE05618D725BF7C1CCC4C27003509%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D0512F7157A819F54EBEA94D4FA3A5DCCE84F8370%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYMdRSGfuWSsDAJVzOwTtRLOg%26utype%3Dpre_vip%26sdk%3D13.1.3&deliveryId=707&key=sq_app_ad&miniWua=HHnB_5JdmDNCm8t1ysQzOs0o4fDS6O//AF1yKByeGWbbi%2B34%3D&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=678&sign=82E603FF74B6E64DEEF8E1234D14CB9B&timestamp=1624023359&userId=2125169390&wua=HIVW_hwa4cU9JRK4ouDlNOwUmTA4BH%2BwwkhZZ7rpPRfak25/8CX5n3ZKM9qstmX6nZxbINa0P7mSEqIPeuBLpa1PSJL6CZDwX3XUsyiDQQrFaA3XPyNNtRTd2t4w2wm7FBEAW%2BAOEAYNXd2c5U07NMpWCJvYxHvzm2wTm6ZS96lFYmr%2BIxewkpYzyGdpbR5zSw88AY%2BbkBjDEv5SLcZC15xa2%2BqKN0MkCJLW7skiiJIeY4b0%3D"},{"key":"shuqiqdbody6","val":"clientTimestamp=1624023368&position=501&userId=2125169390&signInType=1&wua=HIVW_5XKQk7n7oxBklLuR3kC9K1iU8mi5Gymrp05RwgTrzKnZ5T3aBhgh0wTU3yRcM5jz%2BYhWPP9vCbjpbT4xE2fvBd4HUSaSIYgWAEbfCOkLNN3o64QyNm5ZUdus%2BN%2FiCLXkn%2BrXVygmLSs%2FkN3RfYim4zaoaHTjyL7ug4GuopKppijYmS4IjBbxtyEMmlfidPrbLKPf3VkrSTKyjVdlO4JWRywhdkpzPKLpTJYAIaEEyHI%3D&ua=&miniWua=HHnB_fjXoVOz9Kxr2NGh9T1N%2FPTH9gO30SeMorkhMNbHBw2E%3D&umidtoken=YMdRSGfuWSsDAJVzOwTtRLOg&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&sign=4261c5a0d932fdecfbe8e516bed34198&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.1.3%26utdid%3DYMdRSGfuWSsDAJVzOwTtRLOg%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2125169390%26sn%3D2DE0DEB82BFEE05618D725BF7C1CCC4C27003509%26umidtoken%3DYMdRSGfuWSsDAJVzOwTtRLOg%26msv%3D8.0.0%26brand%3DApple%26imei%3D0512F7157A819F54EBEA94D4FA3A5DCCE84F8370%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D5DE805E8-67B1-4775-9CD5-D131DB4D6559"},{"key":"shuqirwbody6","val":"serviceWorkerOn=1&stopPullRefresh=1&from=ShuqiTab&upf=20368&sdk=13.1.3&utdid=YMdRSGfuWSsDAJVzOwTtRLOg&ustatus=0&first_placeid=111111&net_env=wifi&placeid=111111&user_id=2125169390&sn=2DE0DEB82BFEE05618D725BF7C1CCC4C27003509&umidtoken=YMdRSGfuWSsDAJVzOwTtRLOg&msv=8.0.0&brand=Apple&imei=0512F7157A819F54EBEA94D4FA3A5DCCE84F8370&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&session=&skinColor=23B383&platform=1&ver=210301&mod=UnknowniPad&statusBarHeight=44.000000&skinVersion=1&wh=1242x2688&soft_id=21&utype=pre_vip&skinId=999&idfa=5DE805E8-67B1-4775-9CD5-D131DB4D6559&params=%7B%22resources%22%3A%7B%22ShuqiBsDailyTask%22%3A%7B%7D%7D%7D&userId=2125169390&placeId=111111&timestamp=1624023382&sqSv=1.0&sign=bf55e05f674984d4a10eb0c88fe72a1c&key=sq_h5_gateway&_public="},{"key":"shuqifxbody6","val":""},{"key":"shuqisprwurl6","val":"https://ocean.shuqireader.com/api/ad/adserver/v1/api/getAdInfo?appVer=4.3.6.0&placeId=111111&platform=iOS&requestSrc=h5&resourceId=626&timestamp=1624023403&user_id=2125169390&sqSv=1.0&sign=7471d67ad32927f2f4028406c26efe6c&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.1.3%26utdid%3DYMdRSGfuWSsDAJVzOwTtRLOg%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2125169390%26sn%3D2DE0DEB82BFEE05618D725BF7C1CCC4C27003509%26umidtoken%3DYMdRSGfuWSsDAJVzOwTtRLOg%26msv%3D8.0.0%26brand%3DApple%26imei%3D0512F7157A819F54EBEA94D4FA3A5DCCE84F8370%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D5DE805E8-67B1-4775-9CD5-D131DB4D6559"},{"key":"shuqijlbody6","val":"requestSrc=h5&userId=2125169390&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624023382&sqSv=1.0&sign=613371e392aae147306939334478b78e&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.1.3%26utdid%3DYMdRSGfuWSsDAJVzOwTtRLOg%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2125169390%26sn%3D2DE0DEB82BFEE05618D725BF7C1CCC4C27003509%26umidtoken%3DYMdRSGfuWSsDAJVzOwTtRLOg%26msv%3D8.0.0%26brand%3DApple%26imei%3D0512F7157A819F54EBEA94D4FA3A5DCCE84F8370%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D5DE805E8-67B1-4775-9CD5-D131DB4D6559"},{"key":"shuqisqjlbody6","val":"src=&userId=2125169390&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624023371&sqSv=1.0&sign=a5cb3957c8515b150064ab3c76de0ec6&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.1.3%26utdid%3DYMdRSGfuWSsDAJVzOwTtRLOg%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2125169390%26sn%3D2DE0DEB82BFEE05618D725BF7C1CCC4C27003509%26umidtoken%3DYMdRSGfuWSsDAJVzOwTtRLOg%26msv%3D8.0.0%26brand%3DApple%26imei%3D0512F7157A819F54EBEA94D4FA3A5DCCE84F8370%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D5DE805E8-67B1-4775-9CD5-D131DB4D6559"},{"key":"shuqicjyurl6","val":"https://ocean.shuqireader.com/api/activity/activity/v1/lottery/info?timestamp=1624023406&userId=2125169390&activityId=311&sqSv=1.0&sign=841890febebb813a7502dc9393b22245&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.1.3%26utdid%3DYMdRSGfuWSsDAJVzOwTtRLOg%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2125169390%26sn%3D2DE0DEB82BFEE05618D725BF7C1CCC4C27003509%26umidtoken%3DYMdRSGfuWSsDAJVzOwTtRLOg%26msv%3D8.0.0%26brand%3DApple%26imei%3D0512F7157A819F54EBEA94D4FA3A5DCCE84F8370%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D5DE805E8-67B1-4775-9CD5-D131DB4D6559"},{"key":"shuqicjcsbody6","val":"_public=skinId%3D999%26idfa%3D5DE805E8-67B1-4775-9CD5-D131DB4D6559%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26umidtoken%3DYMdRSGfuWSsDAJVzOwTtRLOg%26user_id%3D2125169390%26sn%3D2DE0DEB82BFEE05618D725BF7C1CCC4C27003509%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D0512F7157A819F54EBEA94D4FA3A5DCCE84F8370%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYMdRSGfuWSsDAJVzOwTtRLOg%26utype%3Dpre_vip%26sdk%3D13.1.3&deliveryId=711&key=sq_app_ad&miniWua=HHnB_Tmvvx/iJD82RXjU8xf/FPdVB4wB1YuY76yiDgl05bC0%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=703&sign=8618B9EF8B9B9AA88370E75D2EC007C9&timestamp=1624023389&userId=2125169390&user_id=2125169390&wua=HIVW_3jS7n2wVJUdlLKE6YtJzD1Ws8NW4Cuew2OA1mMdc7CR2KF/yKRBM6VfkfLEACdFS0AQgi7wI8DNLGUnGhTdp4vhwx2Wy5yjFrewm2GE5exMCo0Cd9rfLQpc/7xkEyEkvS6/niI50BDEdwWA3QcBNhdavbNkFDclqqxsneHzH9vYros8Nu5M4kQTFTWNxIix1I9oNvOQYXa9l2g7RrBaRrUCd59esq40Vcti0zudwgg8%3D"},{"key":"shuqicjbody6","val":"wua=HIVW_v07VSlzXvJIZwedjcjceD8qPElRJ2uPqP17PMo9TvoujD39DRPf2G7jJAyntXuaWCV3HR1LZwH5g3sV2YWDGrMtOHlf18nVr4g%2FMgiBT5dzmS%2FA35KWCXJKvvFcRyLLunAiX7gItVusuDG963ivdNvE6G7tRbaYuFq5mcerztEYn1FrsALRVsDsYMegUG4m3QzZIYpGG9Od%2BvhWwumGqRAoeMcSE7ZiIeEdaZbtbKWk%3D&ua=&userId=2125169390&umidtoken=YMdRSGfuWSsDAJVzOwTtRLOg&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&asac=2A20C07RJ9F51AOEFSNHDR&timestamp=1624023392&activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&sqSv=1.0&sign=ef91b1f46ef5bb2d4835b8c025b97add&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.1.3%26utdid%3DYMdRSGfuWSsDAJVzOwTtRLOg%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2125169390%26sn%3D2DE0DEB82BFEE05618D725BF7C1CCC4C27003509%26umidtoken%3DYMdRSGfuWSsDAJVzOwTtRLOg%26msv%3D8.0.0%26brand%3DApple%26imei%3D0512F7157A819F54EBEA94D4FA3A5DCCE84F8370%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D5DE805E8-67B1-4775-9CD5-D131DB4D6559"},{"key":"shuqijsspbody6","val":""},{"key":"shuqijsydurl6","val":""},{"key":"shuqijsydbody6","val":""},{"key":"shuqijsqdbody6","val":""},{"key":"shuqijsqdspyurl6","val":""},{"key":"shuqijsqdspbody6","val":""},{"key":"shuqijsrwbody6","val":""},{"key":"shuqijsfxbody6","val":""},{"key":"shuqijsbookurl6","val":""},{"key":"shuqijsbookbody6","val":""},{"key":"shuqijssprwurl6","val":""},{"key":"shuqiuserurl7","val":"https://ocean.shuqireader.com/api/jaccount/accountapi/v1/sapi/account/getBindinfo?userId=2128074720&sqSv=1.0&timestamp=1624023524&sign=2d79d974c08e7c4010207c51379201e5&key=sq_h5_gateway"},{"key":"shuqisyurl7","val":"https://render.shuqireader.com/load/resource?sdk=13.2.3&utdid=YMdRSGfuWSsDAJVzOwTtRLOg&ustatus=0&first_placeid=111111&net_env=4g&placeid=111111&user_id=2128074720&sn=7729DC8B48DB6138944F119D5971AB6B4401F27D&umidtoken=YMdRSGfuWSsDAJVzOwTtRLOg&msv=8.0.0&brand=Apple&imei=8E4A5B090FBA2B2B27DE30E30FBF660AB17BA4BC&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=iOS&ver=210301&mod=iPhone7plus&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=ACFE310A-E10C-4200-A09A-2253608F474D"},{"key":"shuqisybody7","val":"appVer=4.3.6.0&imei=8E4A5B090FBA2B2B27DE30E30FBF660AB17BA4BC&isNewUser=1&params=%7B%22resources%22%3A%7B%22ShuqiVipEntry%22%3A%7B%7D%2C%22personalCardConfig%22%3A%7B%7D%7D%7D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=9b82286fa1c7b712393b03070cf24bec&sn=7729DC8B48DB6138944F119D5971AB6B4401F27D&soft_id=21&timestamp=1624023424&user_id=2128074720&ver=210301"},{"key":"shuqispbody7","val":"_public=skinId%3D999%26idfa%3DACFE310A-E10C-4200-A09A-2253608F474D%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26umidtoken%3DYMdRSGfuWSsDAJVzOwTtRLOg%26user_id%3D2128074720%26sn%3D7729DC8B48DB6138944F119D5971AB6B4401F27D%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D8E4A5B090FBA2B2B27DE30E30FBF660AB17BA4BC%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhone7plus%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYMdRSGfuWSsDAJVzOwTtRLOg%26utype%3Dpre_vip%26sdk%3D13.2.3&deliveryId=525&key=sq_app_ad&miniWua=HHnB_2iq%2BLoO79U26RnQfgMEyNEwpL%2BKADAlqN/GSUsKpSTU%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=626&sign=D781834C3859D04DCAA78ADE6FE86358&timestamp=1624023492&userId=2128074720&user_id=2128074720&wua=HIVW_nRVNUX20vrBV3bTtHOF8iTFekn0LQoyPmbUC7vc35UVBIbComhQYCrmil2JfKf0l/eetI4MVusIPjc0lk3LpoRSG41uPj6/xGVSp8vWeRlubxdzKyxoHtCOAZ4/lZK439sM4pKRMwpdiGstJIj7CjA7syuNnkpBRBEiQbb%2B1iLMdMQkKvQSngxa4mAQlIWjUEemqH2ZTBUrHNRYOa7Oc%2Bwc3rWezO4lZzlUuUmZyrr8%3D"},{"key":"shuqiscbody7","val":"_public=skinId%253D999%2526idfa%253DACFE310A-E10C-4200-A09A-2253608F474D%2526ustatus%253D0%2526first_placeid%253D111111%2526net_env%253D4g%2526umidtoken%253DYMdRSGfuWSsDAJVzOwTtRLOg%2526user_id%253D2128074720%2526sn%253D7729DC8B48DB6138944F119D5971AB6B4401F27D%2526placeid%253D111111%2526msv%253D8.0.0%2526brand%253DApple%2526imei%253D8E4A5B090FBA2B2B27DE30E30FBF660AB17BA4BC%2526skinVersionPrefix%253D1%2526appVer%253D4.3.6.0%2526skinActiveColor%253D0F9970%2526manufacturer%253DApple%2526skinColor%253D23B383%2526platform%253DiOS%2526ver%253D210301%2526mod%253DiPhone7plus%2526statusBarHeight%253D44.000000%2526skinVersion%253D1%2526wh%253D1242x2688%2526soft_id%253D21%2526utdid%253DYMdRSGfuWSsDAJVzOwTtRLOg%2526utype%253Dpre_vip%2526sdk%253D13.2.3&key=and_log&readingList=%5B%7B%22startTime%22%3A1624023450%2C%22readObjType%22%3A1%2C%22attr%22%3A2%2C%22readObjId%22%3A%228374136%22%2C%22readChapterId%22%3A1476228%2C%22readingLen%22%3A33%7D%5D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=DD1E2C20D03E31146A613C2C288FEC3E&timestamp=1624023483&user_id=2128074720"},{"key":"shuqiydbody7","val":"_public=skinId%3D999%26idfa%3DACFE310A-E10C-4200-A09A-2253608F474D%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26umidtoken%3DYMdRSGfuWSsDAJVzOwTtRLOg%26user_id%3D2128074720%26sn%3D7729DC8B48DB6138944F119D5971AB6B4401F27D%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D8E4A5B090FBA2B2B27DE30E30FBF660AB17BA4BC%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhone7plus%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYMdRSGfuWSsDAJVzOwTtRLOg%26utype%3Dpre_vip%26sdk%3D13.2.3&deliveryId=707&key=sq_app_ad&miniWua=HHnB_K0hNKaE8%2BCPSoI1NGG/E6GrqkZaQcoxwVD3UvOdCZdQ%3D&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=678&sign=33D58E257154B8745C6E56B11586D4EB&timestamp=1624023481&userId=2128074720&wua=HIVW_wC98fx%2B56SePY6dq7GiF5IHoa52%2BnkxnzjjizWnwhBgx8hnkIgXrTzOsacrPPTpMX6/Mvz3zVov90CRXqSoCSQtOt1t0NOv7UjSdoA8IlNklL9gWxWkFOM52jBb8Cj5PoSHWdkBLBG4GNxLMChzXKYvLfvO1UE4QyudyWQiMMc5hRi6K8heYG7iOF6k692M8lp69obUXmahtna2/UkbI3jO9VHS2ZPz6VML5KW4VQ4s%3D"},{"key":"shuqiqdbody7","val":"clientTimestamp=1624023497&position=501&userId=2128074720&signInType=1&wua=HIVW_hLZXXrTzdE8BQVsFSQkj8PM0Hu4XiBYbGt%2BRGw49wHfQpzzc4YadjkPZCyaNKuWvWv5KqW2hC%2FQ3HAUWJaFdeD0R5U%2Bo3874S0nJPnqS0DpfrHD6MO1SOmPoptdJ3AefxmnSBbaTUjmutW7Y6tNXVYmLy0T5YD3%2Bw%2BKZj5cHHEfjuJ7582U2oCzm%2FV0p67Pm%2BzejQynWn7JOATV4SmyA8J66aCN71r%2FQdW3mA%2FGiDsA%3D&ua=&miniWua=HHnB_PSw%2F0TiFhv6jZ2tiD2dLtXLgRB6hgat7A4m47%2B257nU%3D&umidtoken=YMdRSGfuWSsDAJVzOwTtRLOg&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&sign=69e12f5544ad506bdbe200b24bc554b1&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26sdk%3D13.2.3%26utdid%3DYMdRSGfuWSsDAJVzOwTtRLOg%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2128074720%26sn%3D7729DC8B48DB6138944F119D5971AB6B4401F27D%26umidtoken%3DYMdRSGfuWSsDAJVzOwTtRLOg%26msv%3D8.0.0%26brand%3DApple%26imei%3D8E4A5B090FBA2B2B27DE30E30FBF660AB17BA4BC%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone7plus%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DACFE310A-E10C-4200-A09A-2253608F474D"},{"key":"shuqirwbody7","val":"serviceWorkerOn=1&sdk=13.2.3&utdid=YMdRSGfuWSsDAJVzOwTtRLOg&ustatus=0&first_placeid=111111&net_env=4g&placeid=111111&user_id=2128074720&sn=7729DC8B48DB6138944F119D5971AB6B4401F27D&umidtoken=YMdRSGfuWSsDAJVzOwTtRLOg&msv=8.0.0&brand=Apple&imei=8E4A5B090FBA2B2B27DE30E30FBF660AB17BA4BC&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&session=&skinColor=23B383&platform=1&ver=210301&mod=iPhone7plus&statusBarHeight=44.000000&skinVersion=1&wh=1242x2688&soft_id=21&utype=pre_vip&skinId=999&idfa=ACFE310A-E10C-4200-A09A-2253608F474D&params=%7B%22resources%22%3A%7B%22ShuqiBsDailyTask%22%3A%7B%7D%7D%7D&userId=2128074720&placeId=111111&timestamp=1624023501&sqSv=1.0&sign=baa0877252fd37990335c9199dfcf9ab&key=sq_h5_gateway&_public="},{"key":"shuqifxbody7","val":""},{"key":"shuqisprwurl7","val":"https://ocean.shuqireader.com/api/ad/adserver/v1/api/getAdInfo?appVer=4.3.6.0&placeId=111111&platform=iOS&requestSrc=h5&resourceId=626&timestamp=1624023525&user_id=2128074720&sqSv=1.0&sign=1b0689b07e64aab18a670f47f31db72a&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.2.3%26utdid%3DYMdRSGfuWSsDAJVzOwTtRLOg%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2128074720%26sn%3D7729DC8B48DB6138944F119D5971AB6B4401F27D%26umidtoken%3DYMdRSGfuWSsDAJVzOwTtRLOg%26msv%3D8.0.0%26brand%3DApple%26imei%3D8E4A5B090FBA2B2B27DE30E30FBF660AB17BA4BC%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone7plus%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DACFE310A-E10C-4200-A09A-2253608F474D"},{"key":"shuqijlbody7","val":"requestSrc=h5&userId=2128074720&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624023501&sqSv=1.0&sign=03d333a28e9b757e41afcc57abe08011&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26sdk%3D13.2.3%26utdid%3DYMdRSGfuWSsDAJVzOwTtRLOg%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2128074720%26sn%3D7729DC8B48DB6138944F119D5971AB6B4401F27D%26umidtoken%3DYMdRSGfuWSsDAJVzOwTtRLOg%26msv%3D8.0.0%26brand%3DApple%26imei%3D8E4A5B090FBA2B2B27DE30E30FBF660AB17BA4BC%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone7plus%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DACFE310A-E10C-4200-A09A-2253608F474D"},{"key":"shuqisqjlbody7","val":"src=&userId=2128074720&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624023490&sqSv=1.0&sign=3793822093ce72507904403907b5a737&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26sdk%3D13.2.3%26utdid%3DYMdRSGfuWSsDAJVzOwTtRLOg%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2128074720%26sn%3D7729DC8B48DB6138944F119D5971AB6B4401F27D%26umidtoken%3DYMdRSGfuWSsDAJVzOwTtRLOg%26msv%3D8.0.0%26brand%3DApple%26imei%3D8E4A5B090FBA2B2B27DE30E30FBF660AB17BA4BC%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone7plus%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DACFE310A-E10C-4200-A09A-2253608F474D"},{"key":"shuqicjyurl7","val":"https://ocean.shuqireader.com/api/activity/activity/v1/lottery/info?timestamp=1624023527&userId=2128074720&activityId=311&sqSv=1.0&sign=58a26308eea4ae833e4f24d347dddbe8&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.2.3%26utdid%3DYMdRSGfuWSsDAJVzOwTtRLOg%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2128074720%26sn%3D7729DC8B48DB6138944F119D5971AB6B4401F27D%26umidtoken%3DYMdRSGfuWSsDAJVzOwTtRLOg%26msv%3D8.0.0%26brand%3DApple%26imei%3D8E4A5B090FBA2B2B27DE30E30FBF660AB17BA4BC%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone7plus%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DACFE310A-E10C-4200-A09A-2253608F474D"},{"key":"shuqicjcsbody7","val":"_public=skinId%3D999%26idfa%3DACFE310A-E10C-4200-A09A-2253608F474D%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26umidtoken%3DYMdRSGfuWSsDAJVzOwTtRLOg%26user_id%3D2128074720%26sn%3D7729DC8B48DB6138944F119D5971AB6B4401F27D%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D8E4A5B090FBA2B2B27DE30E30FBF660AB17BA4BC%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhone7plus%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYMdRSGfuWSsDAJVzOwTtRLOg%26utype%3Dpre_vip%26sdk%3D13.2.3&deliveryId=711&key=sq_app_ad&miniWua=HHnB_hZbZZTrCvNQWVEPIu%2Baf2oDxDB0J7AJCK1BrFAQBics%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=703&sign=F66C1FAA41F1B3BC8694F07817DE476E&timestamp=1624023505&userId=2128074720&user_id=2128074720&wua=HIVW_TOAPman%2BwetKWsw80SMTFUmSyvxGmBl4Z7Lme9LGnVZOBdhRXEUE3asPob9Mo8A4Uyn3R1SL2EmjmMaArbD3gBp3bZqUJjG%2Bm7XruJGSBHl9w4iYA7OP9lQtv7VPUv0iNtd67JMOle/zBdi60XUy4wGIgVgsF9dAe07IBmesPjH89YhwmWtQ2%2BAlQFKrgANgC4x0hJReMNd0bVIvnoF%2B/Z%2B8BbGOgEF1L5AfOi43cto%3D"},{"key":"shuqicjbody7","val":"wua=HIVW_LxKdyLcMiVcWg3DErKCipG9zHnEiKtfBwejouu6VXbI6AmphIz5TvdlfnKNiuWh%2FcwozPtBNjItGtx4QTIrRSioRcg8MElgRjj%2BSUdfSBeYgeiqGhoJrQ8v8LXv4dKvoBsPUoWJVqsWdaku9X%2BbqvOJuLKeaXYb5%2F%2B%2Fr1JqAnTG%2F67MhsbkFsA7mxRAuIFLTnXz4ojHBhqemYYIPqio%2BIebpakw1CgthGS%2BnGNuVn0A%3D&ua=&userId=2128074720&umidtoken=YMdRSGfuWSsDAJVzOwTtRLOg&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&asac=2A20C07RJ9F51AOEFSNHDR&timestamp=1624023508&activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&sqSv=1.0&sign=e71e5202961238d3302d32a3a301b10f&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.2.3%26utdid%3DYMdRSGfuWSsDAJVzOwTtRLOg%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2128074720%26sn%3D7729DC8B48DB6138944F119D5971AB6B4401F27D%26umidtoken%3DYMdRSGfuWSsDAJVzOwTtRLOg%26msv%3D8.0.0%26brand%3DApple%26imei%3D8E4A5B090FBA2B2B27DE30E30FBF660AB17BA4BC%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone7plus%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DACFE310A-E10C-4200-A09A-2253608F474D"},{"key":"shuqijsspbody7","val":""},{"key":"shuqijsydurl7","val":""},{"key":"shuqijsydbody7","val":""},{"key":"shuqijsqdbody7","val":""},{"key":"shuqijsqdspyurl7","val":""},{"key":"shuqijsqdspbody7","val":""},{"key":"shuqijsrwbody7","val":""},{"key":"shuqijsfxbody7","val":""},{"key":"shuqijsbookurl7","val":""},{"key":"shuqijsbookbody7","val":""},{"key":"shuqijssprwurl7","val":""},{"key":"shuqiuserurl8","val":"https://ocean.shuqireader.com/api/jaccount/accountapi/v1/sapi/account/getBindinfo?userId=2125764866&sqSv=1.0&timestamp=1624023628&sign=bfc4ef3384cf9ae665ac018c1cdf885c&key=sq_h5_gateway"},{"key":"shuqisyurl8","val":"https://render.shuqireader.com/load/resource?sdk=13.2&utdid=YMdRpt%2Bv2sADAK6%2FmXc%2BEsr0&ustatus=0&first_placeid=111111&net_env=4g&placeid=111111&user_id=2125764866&sn=D3654CF1FF20809DCA416948821189B29DFB8DB4&umidtoken=YMdRpt%2Bv2sADAK6%2FmXc%2BEsr0&msv=8.0.0&brand=Apple&imei=021D3B96E8FAB3E8EEAF14364EDE94C5C0F643FA&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=iOS&ver=210301&mod=iPhone8P&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=9D9D2388-2632-4588-8FC5-D5C806B2BE0D"},{"key":"shuqisybody8","val":"appVer=4.3.6.0&imei=021D3B96E8FAB3E8EEAF14364EDE94C5C0F643FA&isNewUser=1&params=%7B%22resources%22%3A%7B%22ShuqiVipEntry%22%3A%7B%7D%2C%22personalCardConfig%22%3A%7B%7D%7D%7D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=abbd990587edb61350a0bbb12bc783ab&sn=D3654CF1FF20809DCA416948821189B29DFB8DB4&soft_id=21&timestamp=1624023547&user_id=2125764866&ver=210301"},{"key":"shuqispbody8","val":"_public=skinId%3D999%26idfa%3D9D9D2388-2632-4588-8FC5-D5C806B2BE0D%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26umidtoken%3DYMdRpt%2Bv2sADAK6/mXc%2BEsr0%26user_id%3D2125764866%26sn%3DD3654CF1FF20809DCA416948821189B29DFB8DB4%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D021D3B96E8FAB3E8EEAF14364EDE94C5C0F643FA%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhone8P%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYMdRpt%2Bv2sADAK6/mXc%2BEsr0%26utype%3Dpre_vip%26sdk%3D13.2&deliveryId=525&key=sq_app_ad&miniWua=HHnB_nUTRUqRSjIaR5wXlnbCNL/mkttkMqnxobXpGNVUPOdw%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=626&sign=1B075B1BD3AFCF4EFE1E510DFBBC0B56&timestamp=1624023594&userId=2125764866&user_id=2125764866&wua=HIVW_b2X/hsZYR0eRV/75rESp61NXijRZNIGNssrAx5WJjWQz/3AYlnEsR32PjlDxJrAbZnNsSy/MI27oPyo3SoC6sCtd2BaY%2BXS4HdFw/ugLFW4rdi0usJcBeZQPUc2Gv8Kt0xyDOXbcTvKvKfsDd8kSxYonugKaukFGMwu01x82iMejsYFpNC6lq/4Oyun3QmgVzVgUpHvzH7gu6/Ir0Fe2bsCogQOt2sgnx%2BWYWEeIObI%3D"},{"key":"shuqiscbody8","val":"_public=skinId%253D999%2526idfa%253D9D9D2388-2632-4588-8FC5-D5C806B2BE0D%2526ustatus%253D0%2526first_placeid%253D111111%2526net_env%253D4g%2526umidtoken%253DYMdRpt%252Bv2sADAK6%252FmXc%252BEsr0%2526user_id%253D2125764866%2526sn%253DD3654CF1FF20809DCA416948821189B29DFB8DB4%2526placeid%253D111111%2526msv%253D8.0.0%2526brand%253DApple%2526imei%253D021D3B96E8FAB3E8EEAF14364EDE94C5C0F643FA%2526skinVersionPrefix%253D1%2526appVer%253D4.3.6.0%2526skinActiveColor%253D0F9970%2526manufacturer%253DApple%2526skinColor%253D23B383%2526platform%253DiOS%2526ver%253D210301%2526mod%253DiPhone8P%2526statusBarHeight%253D44.000000%2526skinVersion%253D1%2526wh%253D1242x2688%2526soft_id%253D21%2526utdid%253DYMdRpt%252Bv2sADAK6%252FmXc%252BEsr0%2526utype%253Dpre_vip%2526sdk%253D13.2&key=and_log&readingList=%5B%7B%22startTime%22%3A1624023552%2C%22readObjType%22%3A1%2C%22attr%22%3A2%2C%22readObjId%22%3A%228374136%22%2C%22readChapterId%22%3A1476228%2C%22readingLen%22%3A33%7D%5D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=34CBC1B0C49EDDA202787C8026D8EB84&timestamp=1624023585&user_id=2125764866"},{"key":"shuqiydbody8","val":"_public=skinId%3D999%26idfa%3D9D9D2388-2632-4588-8FC5-D5C806B2BE0D%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26umidtoken%3DYMdRpt%2Bv2sADAK6/mXc%2BEsr0%26user_id%3D2125764866%26sn%3DD3654CF1FF20809DCA416948821189B29DFB8DB4%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D021D3B96E8FAB3E8EEAF14364EDE94C5C0F643FA%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhone8P%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYMdRpt%2Bv2sADAK6/mXc%2BEsr0%26utype%3Dpre_vip%26sdk%3D13.2&deliveryId=707&key=sq_app_ad&miniWua=HHnB_6uKeAman9%2BwPbc%2BDygl2yaNkVdERlO/NNVkQ4Q3Lp1M%3D&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=678&sign=D2F47385FD0D27820DD0EF4C92C917DB&timestamp=1624023582&userId=2125764866&wua=HIVW_2iwvqQXgQ0O92fjc%2B/TT8V597C02uNBRy5zi0ZCnijda23z68CPtcqy1i6EU9ddHkUQ%2BnBUqTJKTMyCLcONbFWO0RCwmUc5C8VeeK4q0VqrpRxe5sx3mX/h2VkmVECn8W/h/W7G6t8T0HsdS59sNDIHCRFDoP0E9z/Z8htrcU1sFEM%2B4P9sMI9EhK56FmqFk88SVKDRnlMnc6AmZhBHXabVimsARZGCaVVuYO/cmOjo%3D"},{"key":"shuqiqdbody8","val":"clientTimestamp=1624023600&position=501&userId=2125764866&signInType=1&wua=HIVW_kYmywybzLgGZxHnrbqcBSPpaNz%2FZWmFk8Eb1fZn17qBCqjbh%2Beujz%2BsyuxVI49Pj5brEd%2FUhvhOQ89HBRMX%2ByFkcOWpMeGvmI%2FS6EyGLUucB%2B2%2Fk1XkgC%2Ba8DHp23j980hWC3vozaHxGcjyvbT0KFh%2F6USK80uO5kTd67werJ8BWBk%2BYbiw3KijlUIvUKnZ9738EMMJsvsruY8dfrJNt3PyM0q5ClYQiXZYxyPIAGJc%3D&ua=&miniWua=HHnB_VCmLOVXWQPZXnKZlkcHOJRmhSKh7HaCCkKIJmRy%2BsEg%3D&umidtoken=YMdRpt%2Bv2sADAK6%2FmXc%2BEsr0&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&sign=e2ce613b1d9543160d8e2fd015d7e1d4&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.2%26utdid%3DYMdRpt%252Bv2sADAK6%252FmXc%252BEsr0%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2125764866%26sn%3DD3654CF1FF20809DCA416948821189B29DFB8DB4%26umidtoken%3DYMdRpt%252Bv2sADAK6%252FmXc%252BEsr0%26msv%3D8.0.0%26brand%3DApple%26imei%3D021D3B96E8FAB3E8EEAF14364EDE94C5C0F643FA%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone8P%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D9D9D2388-2632-4588-8FC5-D5C806B2BE0D"},{"key":"shuqirwbody8","val":"serviceWorkerOn=1&stopPullRefresh=1&from=ShuqiTab&upf=20368&sdk=13.2&utdid=YMdRpt%2Bv2sADAK6%2FmXc%2BEsr0&ustatus=0&first_placeid=111111&net_env=4g&placeid=111111&user_id=2125764866&sn=D3654CF1FF20809DCA416948821189B29DFB8DB4&umidtoken=YMdRpt%2Bv2sADAK6%2FmXc%2BEsr0&msv=8.0.0&brand=Apple&imei=021D3B96E8FAB3E8EEAF14364EDE94C5C0F643FA&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&session=&skinColor=23B383&platform=1&ver=210301&mod=iPhone8P&statusBarHeight=44.000000&skinVersion=1&wh=1242x2688&soft_id=21&utype=pre_vip&skinId=999&idfa=9D9D2388-2632-4588-8FC5-D5C806B2BE0D&params=%7B%22resources%22%3A%7B%22ShuqiBsDailyTask%22%3A%7B%7D%7D%7D&userId=2125764866&placeId=111111&timestamp=1624023603&sqSv=1.0&sign=31b5afe4d76674a275a99919b040b095&key=sq_h5_gateway&_public="},{"key":"shuqifxbody8","val":""},{"key":"shuqisprwurl8","val":"https://ocean.shuqireader.com/api/ad/adserver/v1/api/getAdInfo?appVer=4.3.6.0&placeId=111111&platform=iOS&requestSrc=h5&resourceId=626&timestamp=1624023627&user_id=2125764866&sqSv=1.0&sign=258016a76546755e3794d411d2d6b82f&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.2%26utdid%3DYMdRpt%252Bv2sADAK6%252FmXc%252BEsr0%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2125764866%26sn%3DD3654CF1FF20809DCA416948821189B29DFB8DB4%26umidtoken%3DYMdRpt%252Bv2sADAK6%252FmXc%252BEsr0%26msv%3D8.0.0%26brand%3DApple%26imei%3D021D3B96E8FAB3E8EEAF14364EDE94C5C0F643FA%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone8P%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D9D9D2388-2632-4588-8FC5-D5C806B2BE0D"},{"key":"shuqijlbody8","val":"requestSrc=h5&userId=2125764866&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624023603&sqSv=1.0&sign=eafa961146a4e846a94fd6f3e7e448b3&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.2%26utdid%3DYMdRpt%252Bv2sADAK6%252FmXc%252BEsr0%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2125764866%26sn%3DD3654CF1FF20809DCA416948821189B29DFB8DB4%26umidtoken%3DYMdRpt%252Bv2sADAK6%252FmXc%252BEsr0%26msv%3D8.0.0%26brand%3DApple%26imei%3D021D3B96E8FAB3E8EEAF14364EDE94C5C0F643FA%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone8P%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D9D9D2388-2632-4588-8FC5-D5C806B2BE0D"},{"key":"shuqisqjlbody8","val":"src=&userId=2125764866&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624023592&sqSv=1.0&sign=398f97535f7d3610406e71d9e858df42&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.2%26utdid%3DYMdRpt%252Bv2sADAK6%252FmXc%252BEsr0%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2125764866%26sn%3DD3654CF1FF20809DCA416948821189B29DFB8DB4%26umidtoken%3DYMdRpt%252Bv2sADAK6%252FmXc%252BEsr0%26msv%3D8.0.0%26brand%3DApple%26imei%3D021D3B96E8FAB3E8EEAF14364EDE94C5C0F643FA%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone8P%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D9D9D2388-2632-4588-8FC5-D5C806B2BE0D"},{"key":"shuqicjyurl8","val":"https://ocean.shuqireader.com/api/activity/activity/v1/lottery/info?timestamp=1624023629&userId=2125764866&activityId=311&sqSv=1.0&sign=2b6d80ee84ef8015f6b82770fd26c626&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.2%26utdid%3DYMdRpt%252Bv2sADAK6%252FmXc%252BEsr0%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2125764866%26sn%3DD3654CF1FF20809DCA416948821189B29DFB8DB4%26umidtoken%3DYMdRpt%252Bv2sADAK6%252FmXc%252BEsr0%26msv%3D8.0.0%26brand%3DApple%26imei%3D021D3B96E8FAB3E8EEAF14364EDE94C5C0F643FA%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone8P%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D9D9D2388-2632-4588-8FC5-D5C806B2BE0D"},{"key":"shuqicjcsbody8","val":"_public=skinId%3D999%26idfa%3D9D9D2388-2632-4588-8FC5-D5C806B2BE0D%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26umidtoken%3DYMdRpt%2Bv2sADAK6/mXc%2BEsr0%26user_id%3D2125764866%26sn%3DD3654CF1FF20809DCA416948821189B29DFB8DB4%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D021D3B96E8FAB3E8EEAF14364EDE94C5C0F643FA%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhone8P%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYMdRpt%2Bv2sADAK6/mXc%2BEsr0%26utype%3Dpre_vip%26sdk%3D13.2&deliveryId=711&key=sq_app_ad&miniWua=HHnB_IivuG4iLEoco7bdscLdvRGZoAtHyghh5Xs/3oxTqS%2Bc%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=703&sign=8E425261FE52B03424AAB3BF9DCB697B&timestamp=1624023607&userId=2125764866&user_id=2125764866&wua=HIVW_yzeEF7U1ZjIAGPoQDsOenIIl0kFA52gmh7i1vsJvXnO96nIgouMJnp1lYuMVCwD1lPtZPTAawAIqNX53PYZSAMQkDQH7vWoGz6Ji223kRZrv4H1FhH74NJAwXIkrAxLeItZ3Kj25qZ/I6691r2B3e7fgjsCufHCtbA1a8ZPIs6RLuhQ7YIR1dwbkfGqH3E3ARySGUrk5hjs73cJP%2BN7rmtgelAH8rCwqZe1H9aHDOSY%3D"},{"key":"shuqicjbody8","val":"wua=HIVW_MZYhnZPB%2FpvOsvDMuk684GSocp0kgUT4TRfVGLG%2B7fm9ivGs%2FcdpcXtOs1098MiHmrPfGxI9WgPYdqIt5SymPSFtLXkCdtxh%2FE0CvPXHuhcumlx5bbCw3eod0ipMXH%2BSUxnCVUN0r7TONAOv52YSZLKYuIX5oIBWH9VcXfpXAH2bU46VT9Fs9c9tL%2BR8wibWkZmdTx%2BlwEURGHPi9QceYTUCW4wxcHcjh4h%2FaD73CJE%3D&ua=&userId=2125764866&umidtoken=YMdRpt%2Bv2sADAK6%2FmXc%2BEsr0&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&asac=2A20C07RJ9F51AOEFSNHDR&timestamp=1624023611&activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&sqSv=1.0&sign=a0dba31fd879b031c5a76127ae4e2292&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.2%26utdid%3DYMdRpt%252Bv2sADAK6%252FmXc%252BEsr0%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2125764866%26sn%3DD3654CF1FF20809DCA416948821189B29DFB8DB4%26umidtoken%3DYMdRpt%252Bv2sADAK6%252FmXc%252BEsr0%26msv%3D8.0.0%26brand%3DApple%26imei%3D021D3B96E8FAB3E8EEAF14364EDE94C5C0F643FA%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone8P%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D9D9D2388-2632-4588-8FC5-D5C806B2BE0D"},{"key":"shuqijsspbody8","val":""},{"key":"shuqijsydurl8","val":""},{"key":"shuqijsydbody8","val":""},{"key":"shuqijsqdbody8","val":""},{"key":"shuqijsqdspyurl8","val":""},{"key":"shuqijsqdspbody8","val":""},{"key":"shuqijsrwbody8","val":""},{"key":"shuqijsfxbody8","val":""},{"key":"shuqijsbookurl8","val":""},{"key":"shuqijsbookbody8","val":""},{"key":"shuqijssprwurl8","val":""},{"key":"shuqiuserurl9","val":"https://ocean.shuqireader.com/api/jaccount/accountapi/v1/sapi/account/getBindinfo?userId=2125467501&sqSv=1.0&timestamp=1624023774&sign=e7941b4937e678475fddb3494462b4bb&key=sq_h5_gateway"},{"key":"shuqisyurl9","val":"https://render.shuqireader.com/load/resource?sdk=13.0&utdid=YMdRtAzq5uwDAAmuBC6tRuQL&ustatus=0&first_placeid=111111&net_env=4g&placeid=111111&user_id=2125467501&sn=A2246602B993998D819E472F45CE830C6F7CFC15&umidtoken=YMdRtAzq5uwDAAmuBC6tRuQL&msv=8.0.0&brand=Apple&imei=8FAD05776BF48B14C99D8CD3F833C4324F693220&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=iOS&ver=210301&mod=iPhone6s&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=3274C45B-B639-4B9B-8C5B-7B6BE34C21F3"},{"key":"shuqisybody9","val":"appVer=4.3.6.0&imei=8FAD05776BF48B14C99D8CD3F833C4324F693220&isNewUser=1&params=%7B%22resources%22%3A%7B%22ShuqiVipEntry%22%3A%7B%7D%2C%22personalCardConfig%22%3A%7B%7D%7D%7D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=5fa37321e739c43f226e48840cc5479f&sn=A2246602B993998D819E472F45CE830C6F7CFC15&soft_id=21&timestamp=1624023661&user_id=2125467501&ver=210301"},{"key":"shuqispbody9","val":"_public=skinId%3D999%26idfa%3D3274C45B-B639-4B9B-8C5B-7B6BE34C21F3%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26umidtoken%3DYMdRtAzq5uwDAAmuBC6tRuQL%26user_id%3D2125467501%26sn%3DA2246602B993998D819E472F45CE830C6F7CFC15%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D8FAD05776BF48B14C99D8CD3F833C4324F693220%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhone6s%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYMdRtAzq5uwDAAmuBC6tRuQL%26utype%3Dpre_vip%26sdk%3D13.0&deliveryId=525&key=sq_app_ad&miniWua=HHnB_AgAF7eKYWFyohqYBFEwT23UwqPS7B2Fci5TxczZ0b/M%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=626&sign=4FC2FEDDDD682A4BB9C7F5BD61697B36&timestamp=1624023730&userId=2125467501&user_id=2125467501&wua=HIVW_BZKTaTMmj7vE%2B2bVsljmUwHruOlONI%2Bd2t%2BGWcsXNcCNRFdINbAszWgNxGNqHp/dbr/r4GFBf70EBNxMTOcsNLPlLMQL9CCq8par6CBUzvxGUZMQntwWmk1AJrizN0XX1qjWAjmVZxjErHmBw%2BlteATef0JTP98PJbCKENzJ9eCJ0K7x9g7yVHkah8LAXB%2BkUPw35fDJff1xdHkCzwfjllu%2BZL4nBt8BSHh53X5fLpU%3D"},{"key":"shuqiscbody9","val":"_public=skinId%253D999%2526idfa%253D3274C45B-B639-4B9B-8C5B-7B6BE34C21F3%2526ustatus%253D0%2526first_placeid%253D111111%2526net_env%253D4g%2526umidtoken%253DYMdRtAzq5uwDAAmuBC6tRuQL%2526user_id%253D2125467501%2526sn%253DA2246602B993998D819E472F45CE830C6F7CFC15%2526placeid%253D111111%2526msv%253D8.0.0%2526brand%253DApple%2526imei%253D8FAD05776BF48B14C99D8CD3F833C4324F693220%2526skinVersionPrefix%253D1%2526appVer%253D4.3.6.0%2526skinActiveColor%253D0F9970%2526manufacturer%253DApple%2526skinColor%253D23B383%2526platform%253DiOS%2526ver%253D210301%2526mod%253DiPhone6s%2526statusBarHeight%253D44.000000%2526skinVersion%253D1%2526wh%253D1242x2688%2526soft_id%253D21%2526utdid%253DYMdRtAzq5uwDAAmuBC6tRuQL%2526utype%253Dpre_vip%2526sdk%253D13.0&key=and_log&readingList=%5B%7B%22startTime%22%3A1624023709%2C%22readObjType%22%3A1%2C%22attr%22%3A2%2C%22readObjId%22%3A%227461914%22%2C%22readChapterId%22%3A879574%2C%22readingLen%22%3A11%7D%5D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=AADED4FE9A0D4485BB350161E4675EA1&timestamp=1624023720&user_id=2125467501"},{"key":"shuqiydbody9","val":"_public=skinId%3D999%26idfa%3D3274C45B-B639-4B9B-8C5B-7B6BE34C21F3%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26umidtoken%3DYMdRtAzq5uwDAAmuBC6tRuQL%26user_id%3D2125467501%26sn%3DA2246602B993998D819E472F45CE830C6F7CFC15%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D8FAD05776BF48B14C99D8CD3F833C4324F693220%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhone6s%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYMdRtAzq5uwDAAmuBC6tRuQL%26utype%3Dpre_vip%26sdk%3D13.0&deliveryId=707&key=sq_app_ad&miniWua=HHnB_3fLj/bUJe7yEO3zzvjUFc9kTDion6Uhn1aB8gHtST50%3D&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=678&sign=AA91C4D2CFAF29E569A7232FB724F2A4&timestamp=1624023711&userId=2125467501&wua=HIVW_7zBKANW2q/JGojL/ZRHF3Opsw7NdvzgBGRvsp1FCdxRMSYMCwMgnNdbPxP3%2BhODGDuUNvxa6JRR8XPkt%2BkX1OBA9Bq7M%2Bbug%2BwE/8HkFafFKcFlVW%2BWYOrrM49ndvuNWOY0qQt4NIEeeyZU2M1tyXi4/MUjLqRzgSMO7VIfNwnUWWZ0UVloka2TCT6wKQetLQJb4KgPbW0hC8h/zgDX4kJy6IdyP27c2G8d0O5OjLlE%3D"},{"key":"shuqiqdbody9","val":"clientTimestamp=1624023728&position=501&userId=2125467501&signInType=1&wua=HIVW_EM9PUJNTpeB2mzzU0bL%2BklZWQLvknvww2qIF36QH26z45WunkzZsZ1sNNLUsxONvMN%2FVx1LGX%2B3ox0hXpJaPI1VmW0wbypKzEP4KFvFJmToPZsyTMmLeGpRXO5SoJHNReQIPcxfHVEbJGy2TjBqByLv5%2F0eXPVUuGvMSMBlwZKYGZ37oD%2BZyCZKiJYE41S8KeVYOWBzDXgNhDmOyPVo3ZoaB67NlCjG7U0gFr6%2Fs7zA%3D&ua=&miniWua=HHnB_5P0KhxhaYvX5zo5m3Gz7qQc%2FWXQYM%2BYHQckOv5GRVbM%3D&umidtoken=YMdRtAzq5uwDAAmuBC6tRuQL&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&sign=223f925dcd2903031bfbd56ef564cde0&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26sdk%3D13.0%26utdid%3DYMdRtAzq5uwDAAmuBC6tRuQL%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2125467501%26sn%3DA2246602B993998D819E472F45CE830C6F7CFC15%26umidtoken%3DYMdRtAzq5uwDAAmuBC6tRuQL%26msv%3D8.0.0%26brand%3DApple%26imei%3D8FAD05776BF48B14C99D8CD3F833C4324F693220%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone6s%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D3274C45B-B639-4B9B-8C5B-7B6BE34C21F3"},{"key":"shuqirwbody9","val":"serviceWorkerOn=1&sdk=13.0&utdid=YMdRtAzq5uwDAAmuBC6tRuQL&ustatus=0&first_placeid=111111&net_env=4g&placeid=111111&user_id=2125467501&sn=A2246602B993998D819E472F45CE830C6F7CFC15&umidtoken=YMdRtAzq5uwDAAmuBC6tRuQL&msv=8.0.0&brand=Apple&imei=8FAD05776BF48B14C99D8CD3F833C4324F693220&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&session=&skinColor=23B383&platform=1&ver=210301&mod=iPhone6s&statusBarHeight=44.000000&skinVersion=1&wh=1242x2688&soft_id=21&utype=pre_vip&skinId=999&idfa=3274C45B-B639-4B9B-8C5B-7B6BE34C21F3&params=%7B%22resources%22%3A%7B%22ShuqiBsDailyTask%22%3A%7B%7D%7D%7D&userId=2125467501&placeId=111111&timestamp=1624023738&sqSv=1.0&sign=abc24a73deaecb6a9b37d501a24f8170&key=sq_h5_gateway&_public="},{"key":"shuqifxbody9","val":""},{"key":"shuqisprwurl9","val":"https://ocean.shuqireader.com/api/ad/adserver/v1/api/getAdInfo?appVer=4.3.6.0&placeId=111111&platform=iOS&requestSrc=h5&resourceId=626&timestamp=1624023772&user_id=2125467501&sqSv=1.0&sign=56782e2606b2e8f0f6241c9a43aa4f34&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.0%26utdid%3DYMdRtAzq5uwDAAmuBC6tRuQL%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2125467501%26sn%3DA2246602B993998D819E472F45CE830C6F7CFC15%26umidtoken%3DYMdRtAzq5uwDAAmuBC6tRuQL%26msv%3D8.0.0%26brand%3DApple%26imei%3D8FAD05776BF48B14C99D8CD3F833C4324F693220%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone6s%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D3274C45B-B639-4B9B-8C5B-7B6BE34C21F3"},{"key":"shuqijlbody9","val":"requestSrc=h5&userId=2125467501&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624023738&sqSv=1.0&sign=dfc4b3de8315882e3524392059b98700&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26sdk%3D13.0%26utdid%3DYMdRtAzq5uwDAAmuBC6tRuQL%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2125467501%26sn%3DA2246602B993998D819E472F45CE830C6F7CFC15%26umidtoken%3DYMdRtAzq5uwDAAmuBC6tRuQL%26msv%3D8.0.0%26brand%3DApple%26imei%3D8FAD05776BF48B14C99D8CD3F833C4324F693220%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone6s%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D3274C45B-B639-4B9B-8C5B-7B6BE34C21F3"},{"key":"shuqisqjlbody9","val":"src=&userId=2125467501&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624023727&sqSv=1.0&sign=07b5206f36adcc02b956eed82cbc50f7&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26sdk%3D13.0%26utdid%3DYMdRtAzq5uwDAAmuBC6tRuQL%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2125467501%26sn%3DA2246602B993998D819E472F45CE830C6F7CFC15%26umidtoken%3DYMdRtAzq5uwDAAmuBC6tRuQL%26msv%3D8.0.0%26brand%3DApple%26imei%3D8FAD05776BF48B14C99D8CD3F833C4324F693220%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone6s%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D3274C45B-B639-4B9B-8C5B-7B6BE34C21F3"},{"key":"shuqicjyurl9","val":"https://ocean.shuqireader.com/api/activity/activity/v1/lottery/info?timestamp=1624023774&userId=2125467501&activityId=311&sqSv=1.0&sign=f6fefddd30c9e8e7b359b75663b8c36e&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.0%26utdid%3DYMdRtAzq5uwDAAmuBC6tRuQL%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2125467501%26sn%3DA2246602B993998D819E472F45CE830C6F7CFC15%26umidtoken%3DYMdRtAzq5uwDAAmuBC6tRuQL%26msv%3D8.0.0%26brand%3DApple%26imei%3D8FAD05776BF48B14C99D8CD3F833C4324F693220%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone6s%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D3274C45B-B639-4B9B-8C5B-7B6BE34C21F3"},{"key":"shuqicjcsbody9","val":"_public=skinId%3D999%26idfa%3D3274C45B-B639-4B9B-8C5B-7B6BE34C21F3%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26umidtoken%3DYMdRtAzq5uwDAAmuBC6tRuQL%26user_id%3D2125467501%26sn%3DA2246602B993998D819E472F45CE830C6F7CFC15%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D8FAD05776BF48B14C99D8CD3F833C4324F693220%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhone6s%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYMdRtAzq5uwDAAmuBC6tRuQL%26utype%3Dpre_vip%26sdk%3D13.0&deliveryId=711&key=sq_app_ad&miniWua=HHnB_HhxuLSTYWeZ6BdLKQyxewc5RVElwEHrS1T3Mo0P63%2BU%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=703&sign=B39387421EBA4F8290D2471576DED17A&timestamp=1624023750&userId=2125467501&user_id=2125467501&wua=HIVW_v07VSlzXvJIZwedjcjceD%2BWQvZTu7EYUSkfl7uMCjQ%2BK6s%2BzGVIFnSGI0wiPzvmizDc9s5h6CcI19uS7rwta7CoepvoWZ9JBcT7qwMvTnmkX69L5zcz%2Bh57dI0OqjOqRvFMlfefI4tDiLhQVpRZyorC0rGBDyXr1Yeslndxzpq6jfWSP40%2BCpTWjaN78sKzoOpDGw8ddH%2BWP60RKAYkuoAFuue6340dKxKnnllEomh4%3D"},{"key":"shuqicjbody9","val":"wua=HIVW_nQjSJ7Jul70rLGV5a%2FBNh285ptadsowu8O9qy6ObPyPUi5PsKHM%2FoSlUWnDLrMPBhC%2Boh5InH5%2FwKYENG2GzFQUNlgGLlo1RbuFOMvh25UW7Z4Sj%2FmvT0BcypQzyKUiU5uO8y7LbrFPdxwFZQjdi0miJ43qUhhluv1XibIC0PFAfvrBdyK%2FHRHGApZ3n5soHAFqFIc6DMYORujE95U7pJVHAp729JJa%2FtidEiUkkvL4%3D&ua=&userId=2125467501&umidtoken=YMdRtAzq5uwDAAmuBC6tRuQL&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&asac=2A20C07RJ9F51AOEFSNHDR&timestamp=1624023756&activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&sqSv=1.0&sign=584871b6342e48536e65f5be0700b46e&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.0%26utdid%3DYMdRtAzq5uwDAAmuBC6tRuQL%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2125467501%26sn%3DA2246602B993998D819E472F45CE830C6F7CFC15%26umidtoken%3DYMdRtAzq5uwDAAmuBC6tRuQL%26msv%3D8.0.0%26brand%3DApple%26imei%3D8FAD05776BF48B14C99D8CD3F833C4324F693220%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone6s%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D3274C45B-B639-4B9B-8C5B-7B6BE34C21F3"},{"key":"shuqijsspbody9","val":""},{"key":"shuqijsydurl9","val":""},{"key":"shuqijsydbody9","val":""},{"key":"shuqijsqdbody9","val":""},{"key":"shuqijsqdspyurl9","val":""},{"key":"shuqijsqdspbody9","val":""},{"key":"shuqijsrwbody9","val":""},{"key":"shuqijsfxbody9","val":""},{"key":"shuqijsbookurl9","val":""},{"key":"shuqijsbookbody9","val":""},{"key":"shuqijssprwurl9","val":""},{"key":"shuqiuserurl10","val":"https://ocean.shuqireader.com/api/jaccount/accountapi/v1/sapi/account/getBindinfo?userId=2121487568&sqSv=1.0&timestamp=1624023937&sign=b7956ebef1929c54e2a609a88dee079c&key=sq_h5_gateway"},{"key":"shuqisyurl10","val":"https://render.shuqireader.com/load/resource?sdk=13.1.3&utdid=YMyi%2Bd7fs8YDAF7kX5QQo81N&ustatus=0&first_placeid=111111&net_env=wifi&placeid=111111&user_id=2121487568&sn=15724ACC5A50E2457BA3195356E33C3B12934EEC&umidtoken=YMyi%2Bd7fs8YDAF7kX5QQo81N&msv=8.0.0&brand=Apple&imei=47C3E651F0FBBC6325D5C5CBCD646516D2748ACF&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=iOS&ver=210301&mod=iPodtouch4G&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=6BF95CC2-BCAA-4C1E-BC13-EF07C85FBA13"},{"key":"shuqisybody10","val":"appVer=4.3.6.0&imei=47C3E651F0FBBC6325D5C5CBCD646516D2748ACF&isNewUser=0&params=%7B%22resources%22%3A%7B%22ShuqiVipEntry%22%3A%7B%7D%2C%22personalCardConfig%22%3A%7B%7D%7D%7D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=33edadc925e378575e6159853b3f1f56&sn=15724ACC5A50E2457BA3195356E33C3B12934EEC&soft_id=21&timestamp=1624023808&user_id=2121487568&ver=210301"},{"key":"shuqispbody10","val":"_public=utype%3Dpre_vip%26idfa%3D6BF95CC2-BCAA-4C1E-BC13-EF07C85FBA13%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26umidtoken%3DYMyi%2Bd7fs8YDAF7kX5QQo81N%26user_id%3D2121487568%26sn%3D15724ACC5A50E2457BA3195356E33C3B12934EEC%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D47C3E651F0FBBC6325D5C5CBCD646516D2748ACF%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPodtouch4G%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26utdid%3DYMyi%2Bd7fs8YDAF7kX5QQo81N%26soft_id%3D21%26sdk%3D13.1.3&deliveryId=525&key=sq_app_ad&miniWua=HHnB_R9B2yLuXV54R4BNVQwUou4OMdsq4kHGCc1/4opQRp7M%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=626&sign=A65F4F29DA6AE62AE60206D8B2757C3E&timestamp=1624023913&userId=2121487568&user_id=2121487568&wua=HIVW_ElQ9j9OO%2BmuzPK7eMHX/FuDfE6JePq9J/oqUd0Xf0BPncqFxJR1Lnm7mO5LZCyWzp38NWS2gE1YFEhGnswnrQHq6QO5BaOuZbn1KRHH5wVEPQWpf50qlDBJBM%2BcZcz2%2BA99D3pb8t9X9A09IpScxVfrV6QDM1kdrOUGBt/U/IhrDTarJmjZCb3GKuIjpBhs3ecn/1ibz/dWYwtjqZnDNSHqdlTh4hidmIh5rRQEs5dc%3D"},{"key":"shuqiscbody10","val":"_public=skinId%253D999%2526idfa%253D6BF95CC2-BCAA-4C1E-BC13-EF07C85FBA13%2526ustatus%253D0%2526first_placeid%253D111111%2526net_env%253Dwifi%2526umidtoken%253DYMyi%252Bd7fs8YDAF7kX5QQo81N%2526user_id%253D2121487568%2526sn%253D15724ACC5A50E2457BA3195356E33C3B12934EEC%2526placeid%253D111111%2526msv%253D8.0.0%2526brand%253DApple%2526imei%253D47C3E651F0FBBC6325D5C5CBCD646516D2748ACF%2526skinVersionPrefix%253D1%2526appVer%253D4.3.6.0%2526skinActiveColor%253D0F9970%2526manufacturer%253DApple%2526skinColor%253D23B383%2526platform%253DiOS%2526ver%253D210301%2526mod%253DiPodtouch4G%2526statusBarHeight%253D44.000000%2526skinVersion%253D1%2526wh%253D1242x2688%2526soft_id%253D21%2526utdid%253DYMyi%252Bd7fs8YDAF7kX5QQo81N%2526utype%253Dpre_vip%2526sdk%253D13.1.3&key=and_log&readingList=%5B%7B%22startTime%22%3A1624023855%2C%22readObjType%22%3A1%2C%22attr%22%3A2%2C%22readObjId%22%3A%227151431%22%2C%22readChapterId%22%3A904763%2C%22readingLen%22%3A18%7D%5D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=573246646C54085DFA5B2F188EC20215&timestamp=1624023874&user_id=2121487568"},{"key":"shuqiydbody10","val":""},{"key":"shuqiqdbody10","val":""},{"key":"shuqirwbody10","val":"serviceWorkerOn=1&stopPullRefresh=1&from=ShuqiTab&upf=20368&sdk=13.1.3&utdid=YMyi%2Bd7fs8YDAF7kX5QQo81N&ustatus=0&first_placeid=111111&net_env=wifi&placeid=111111&user_id=2121487568&sn=15724ACC5A50E2457BA3195356E33C3B12934EEC&umidtoken=YMyi%2Bd7fs8YDAF7kX5QQo81N&msv=8.0.0&brand=Apple&imei=47C3E651F0FBBC6325D5C5CBCD646516D2748ACF&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=1&ver=210301&mod=iPodtouch4G&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=6BF95CC2-BCAA-4C1E-BC13-EF07C85FBA13&params=%7B%22resources%22%3A%7B%22ShuqiBsDailyTask%22%3A%7B%7D%7D%7D&userId=2121487568&placeId=111111&timestamp=1624023917&sqSv=1.0&sign=e44366cbc5bb81ac1164a09794df03ee&key=sq_h5_gateway&_public="},{"key":"shuqifxbody10","val":""},{"key":"shuqisprwurl10","val":"https://ocean.shuqireader.com/api/ad/adserver/v1/api/getAdInfo?appVer=4.3.6.0&placeId=111111&platform=iOS&requestSrc=h5&resourceId=626&timestamp=1624023938&user_id=2121487568&sqSv=1.0&sign=d916d85aa58514cbfc497e4ba2dba25a&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.1.3%26utdid%3DYMyi%252Bd7fs8YDAF7kX5QQo81N%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2121487568%26sn%3D15724ACC5A50E2457BA3195356E33C3B12934EEC%26umidtoken%3DYMyi%252Bd7fs8YDAF7kX5QQo81N%26msv%3D8.0.0%26brand%3DApple%26imei%3D47C3E651F0FBBC6325D5C5CBCD646516D2748ACF%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPodtouch4G%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D6BF95CC2-BCAA-4C1E-BC13-EF07C85FBA13"},{"key":"shuqijlbody10","val":"requestSrc=h5&userId=2121487568&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624023917&sqSv=1.0&sign=76111817b1765d9f0393b8dd6bc52e12&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.1.3%26utdid%3DYMyi%252Bd7fs8YDAF7kX5QQo81N%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2121487568%26sn%3D15724ACC5A50E2457BA3195356E33C3B12934EEC%26umidtoken%3DYMyi%252Bd7fs8YDAF7kX5QQo81N%26msv%3D8.0.0%26brand%3DApple%26imei%3D47C3E651F0FBBC6325D5C5CBCD646516D2748ACF%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPodtouch4G%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D6BF95CC2-BCAA-4C1E-BC13-EF07C85FBA13"},{"key":"shuqisqjlbody10","val":"src=&userId=2121487568&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624023913&sqSv=1.0&sign=4b79b3cd6e38b8cbbfd98832f36deb64&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.1.3%26utdid%3DYMyi%252Bd7fs8YDAF7kX5QQo81N%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2121487568%26sn%3D15724ACC5A50E2457BA3195356E33C3B12934EEC%26umidtoken%3DYMyi%252Bd7fs8YDAF7kX5QQo81N%26msv%3D8.0.0%26brand%3DApple%26imei%3D47C3E651F0FBBC6325D5C5CBCD646516D2748ACF%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPodtouch4G%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D6BF95CC2-BCAA-4C1E-BC13-EF07C85FBA13"},{"key":"shuqicjyurl10","val":"https://ocean.shuqireader.com/api/activity/activity/v1/lottery/info?timestamp=1624023940&userId=2121487568&activityId=311&sqSv=1.0&sign=bfd78dd9f55f30e566b6c55792d1e1a8&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.1.3%26utdid%3DYMyi%252Bd7fs8YDAF7kX5QQo81N%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2121487568%26sn%3D15724ACC5A50E2457BA3195356E33C3B12934EEC%26umidtoken%3DYMyi%252Bd7fs8YDAF7kX5QQo81N%26msv%3D8.0.0%26brand%3DApple%26imei%3D47C3E651F0FBBC6325D5C5CBCD646516D2748ACF%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPodtouch4G%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D6BF95CC2-BCAA-4C1E-BC13-EF07C85FBA13"},{"key":"shuqicjcsbody10","val":"_public=utype%3Dpre_vip%26idfa%3D6BF95CC2-BCAA-4C1E-BC13-EF07C85FBA13%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26umidtoken%3DYMyi%2Bd7fs8YDAF7kX5QQo81N%26user_id%3D2121487568%26sn%3D15724ACC5A50E2457BA3195356E33C3B12934EEC%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D47C3E651F0FBBC6325D5C5CBCD646516D2748ACF%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPodtouch4G%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26utdid%3DYMyi%2Bd7fs8YDAF7kX5QQo81N%26soft_id%3D21%26sdk%3D13.1.3&deliveryId=711&key=sq_app_ad&miniWua=HHnB_lnD8tl3ulpE3H/GXn3KAoSR7z04Z8GviF1AGg38mhtA%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=703&sign=C489E06EF886F2A92C2249D732744872&timestamp=1624023924&userId=2121487568&user_id=2121487568&wua=HIVW_B83KCpgGHO9vo7x3xrAWjWu/8yECC0W8/gK/3715gxTTRcCRJxtuIerhL1SvZ/54uRJK1ZDz4MIrwNDv%2BO2OtsmcV3TLT3VUpoSy%2BFkY2m2xr6oZSlnW54%2BbQO9uAlWPu70lqSe0pTjfJEFgAbc4aapDyjy6vevh3oHPmtbtpiZHOpcsEGiVgo3oFYeXJGv8xZ2VhfolV9iYJLJyjbmvQ0hxdOdeezajJ6uUUB/2hf8%3D"},{"key":"shuqicjbody10","val":"wua=HIVW_4yJc7lNOTCxZu2yIcXZGY4woc2dPLpee1g2hPfnvW2t1%2Ber3%2F8op0mO3ctmQX%2BX4Ssa9Wk9woJQhEmmRSH8yC3gUXV%2B%2FiyCzuC5vRb%2FkqpDZz9P0crJu%2FZUVfW%2FbWWQbsOlHoEu2aqlrOBbbI3qtsGYKTkylnencZ4MelYwBM9Eca%2BeRBLanpPPo1ezV3HIQQGWXd%2Fh5M29GcpIl%2BRecSEcXkoivCvzrL94RqvW94LY%3D&ua=&userId=2121487568&umidtoken=YMyi%2Bd7fs8YDAF7kX5QQo81N&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&asac=2A20C07RJ9F51AOEFSNHDR&timestamp=1624023927&activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&sqSv=1.0&sign=4be3831eeed6eb188df08b23e798200a&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.1.3%26utdid%3DYMyi%252Bd7fs8YDAF7kX5QQo81N%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2121487568%26sn%3D15724ACC5A50E2457BA3195356E33C3B12934EEC%26umidtoken%3DYMyi%252Bd7fs8YDAF7kX5QQo81N%26msv%3D8.0.0%26brand%3DApple%26imei%3D47C3E651F0FBBC6325D5C5CBCD646516D2748ACF%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPodtouch4G%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D6BF95CC2-BCAA-4C1E-BC13-EF07C85FBA13"},{"key":"shuqijsspbody10","val":""},{"key":"shuqijsydurl10","val":""},{"key":"shuqijsydbody10","val":""},{"key":"shuqijsqdbody10","val":""},{"key":"shuqijsqdspyurl10","val":""},{"key":"shuqijsqdspbody10","val":""},{"key":"shuqijsrwbody10","val":""},{"key":"shuqijsfxbody10","val":""},{"key":"shuqijsbookurl10","val":""},{"key":"shuqijsbookbody10","val":""},{"key":"shuqijssprwurl10","val":""},{"key":"shuqiuserurl11","val":"https://ocean.shuqireader.com/api/jaccount/accountapi/v1/sapi/account/getBindinfo?userId=2121487568&sqSv=1.0&timestamp=1624024056&sign=90118ba2ce03751d450b4c423f85fb04&key=sq_h5_gateway"},{"key":"shuqisyurl11","val":"https://render.shuqireader.com/load/resource?sdk=13.2.2&utdid=YMyjmPSTGXMDAEF8bqsM7se%2F&ustatus=0&first_placeid=111111&net_env=3g&placeid=111111&user_id=2121487568&sn=15724ACC5A50E2457BA3195356E33C3B12934EEC&umidtoken=YMyjmPSTGXMDAEF8bqsM7se%2F&msv=8.0.0&brand=Apple&imei=47C3E651F0FBBC6325D5C5CBCD646516D2748ACF&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=iOS&ver=210301&mod=iPad3G&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=38F94A26-E553-48AD-A0D7-3A220A7BFE6E"},{"key":"shuqisybody11","val":"appVer=4.3.6.0&imei=47C3E651F0FBBC6325D5C5CBCD646516D2748ACF&isNewUser=0&params=%7B%22resources%22%3A%7B%22ShuqiVipEntry%22%3A%7B%7D%2C%22personalCardConfig%22%3A%7B%7D%7D%7D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=60b2928c94d4f43bd1bf0efc01a31a81&sn=15724ACC5A50E2457BA3195356E33C3B12934EEC&soft_id=21&timestamp=1624024080&user_id=2121487568&ver=210301"},{"key":"shuqispbody11","val":"_public=utype%3Dpre_vip%26idfa%3D38F94A26-E553-48AD-A0D7-3A220A7BFE6E%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26umidtoken%3DYMyjmPSTGXMDAEF8bqsM7se/%26user_id%3D2121487568%26sn%3D15724ACC5A50E2457BA3195356E33C3B12934EEC%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D47C3E651F0FBBC6325D5C5CBCD646516D2748ACF%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPad3G%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26utdid%3DYMyjmPSTGXMDAEF8bqsM7se/%26soft_id%3D21%26sdk%3D13.2.2&deliveryId=525&key=sq_app_ad&miniWua=HHnB_E3QS2k%2BG4q2TbUTAw6guxVyxx6RxJSDxFI1LNwqc7OM%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=626&sign=07DE0F528F280BFA80793075C09D0B7B&timestamp=1624024015&userId=2121487568&user_id=2121487568&wua=HIVW_B0nTPgIzYmTqumRcYcjVjz1J92JL9YrqKhub5DZfmXSgTnUui83k1nNCnnO3BJLQQl/QvOxgKJUboQGTfhYc6r%2BW65K7GVW3YMhqJ5jZoJ6C9IrrKJrLRL%2BX6yPZgAzNFEbyqO1sdnagCeXk/CFfQ4M4Ip%2BX29TOHkqZBuD%2BGhAy6/79R/ED1ZQBEsKBlfaHwQeE4VQaXgVFNB%2BgnUM55tJrE2sEevG6UPL05Y/u5eA%3D"},{"key":"shuqiscbody11","val":"_public=utype%253Dpre_vip%2526idfa%253D38F94A26-E553-48AD-A0D7-3A220A7BFE6E%2526ustatus%253D0%2526first_placeid%253D111111%2526net_env%253D3g%2526umidtoken%253DYMyjmPSTGXMDAEF8bqsM7se%252F%2526user_id%253D2121487568%2526sn%253D15724ACC5A50E2457BA3195356E33C3B12934EEC%2526placeid%253D111111%2526msv%253D8.0.0%2526brand%253DApple%2526imei%253D47C3E651F0FBBC6325D5C5CBCD646516D2748ACF%2526skinVersionPrefix%253D1%2526appVer%253D4.3.6.0%2526skinActiveColor%253D0F9970%2526manufacturer%253DApple%2526statusBarHeight%253D44.000000%2526skinColor%253D23B383%2526platform%253DiOS%2526ver%253D210301%2526mod%253DiPad3G%2526skinVersion%253D1%2526wh%253D1242x2688%2526skinId%253D999%2526utdid%253DYMyjmPSTGXMDAEF8bqsM7se%252F%2526soft_id%253D21%2526sdk%253D13.2.2&key=and_log&readingList=%5B%7B%22startTime%22%3A1624023963%2C%22readObjType%22%3A1%2C%22attr%22%3A2%2C%22readObjId%22%3A%228379731%22%2C%22readChapterId%22%3A1472042%2C%22readingLen%22%3A36%7D%5D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=EAB0421661957A5D6B4852FC927AB40A&timestamp=1624023999&user_id=2121487568"},{"key":"shuqiydbody11","val":"_public=utype%3Dpre_vip%26idfa%3D38F94A26-E553-48AD-A0D7-3A220A7BFE6E%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26umidtoken%3DYMyjmPSTGXMDAEF8bqsM7se/%26user_id%3D2121487568%26sn%3D15724ACC5A50E2457BA3195356E33C3B12934EEC%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D47C3E651F0FBBC6325D5C5CBCD646516D2748ACF%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPad3G%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26utdid%3DYMyjmPSTGXMDAEF8bqsM7se/%26soft_id%3D21%26sdk%3D13.2.2&deliveryId=707&key=sq_app_ad&miniWua=HHnB_j%2BD6S8SlnupzSmClYhxAW1UA74QDOkFEKUKl4KECSa0%3D&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=678&sign=0E926554990FE7145E0664C38E3BBD8D&timestamp=1624023993&userId=2121487568&wua=HIVW_GCpkapZomw/vky6Z8%2BqAPvhA2dj4ilpJF7/oqld5wO9Qpp635wf9ItKesvwP7zyTOLf7xKpDRr5dZkWY3X4tfPTY72E8sGKhsTO0iPSCYBccc6i7YvZvIBkWV6%2BOKet%2BiVH2umCA//GOzvEBpBQQ4DwaFIFZxEXdryiqzEXG/KqY/8hUMWiRKHT3YRuQNcvINzv%2BmWuUA6I6mOBQJQfyYaO/syDDsbHMYuCFaYvxN%2BU%3D"},{"key":"shuqiqdbody11","val":"clientTimestamp=1624024004&position=501&userId=2121487568&signInType=1&wua=HIVW_q7bWC63d3IzJ5pVwRLU4pU92ZtZf7DYqeOkNTlFmp7fr6nv7G43NO0IWy6j1mXzwXKyq6bKGcZdW5CUwNWwlT0daR7j3Kiw%2B1FujpmwVmvACz2mlkwJ58sJcPzYZBqdCqiqEyAQWMwr5a0%2BgegNKER42urpVYMfoHf9tS0XYhtgGvcSel%2BgJGr6lMJaAJwt3r6FD4Dxllr8xWsdeqpUHMO%2FiwB8hsxFIDLtoGtLaJBs%3D&ua=&miniWua=HHnB_JF78EgXneWxo0gXGPK6OM%2BcQZ4sQi1PN%2BWlcDrmvB7Y%3D&umidtoken=YMyjmPSTGXMDAEF8bqsM7se%2F&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&sign=6bd38bc27a6fbf6ad0d6e8084bd14fe1&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.2.2%26utdid%3DYMyjmPSTGXMDAEF8bqsM7se%252F%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2121487568%26sn%3D15724ACC5A50E2457BA3195356E33C3B12934EEC%26umidtoken%3DYMyjmPSTGXMDAEF8bqsM7se%252F%26msv%3D8.0.0%26brand%3DApple%26imei%3D47C3E651F0FBBC6325D5C5CBCD646516D2748ACF%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad3G%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D38F94A26-E553-48AD-A0D7-3A220A7BFE6E"},{"key":"shuqirwbody11","val":"serviceWorkerOn=1&stopPullRefresh=1&from=ShuqiTab&upf=20368&sdk=13.2.2&utdid=YMyjmPSTGXMDAEF8bqsM7se%2F&ustatus=0&first_placeid=111111&net_env=3g&placeid=111111&user_id=2121487568&sn=15724ACC5A50E2457BA3195356E33C3B12934EEC&umidtoken=YMyjmPSTGXMDAEF8bqsM7se%2F&msv=8.0.0&brand=Apple&imei=47C3E651F0FBBC6325D5C5CBCD646516D2748ACF&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=1&ver=210301&mod=iPad3G&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=38F94A26-E553-48AD-A0D7-3A220A7BFE6E&params=%7B%22resources%22%3A%7B%22ShuqiBsDailyTask%22%3A%7B%7D%7D%7D&userId=2121487568&placeId=111111&timestamp=1624024021&sqSv=1.0&sign=ba7b3d91b7fda32edeef7dfa9023e5c4&key=sq_h5_gateway&_public="},{"key":"shuqifxbody11","val":""},{"key":"shuqisprwurl11","val":"https://ocean.shuqireader.com/api/ad/adserver/v1/api/getAdInfo?appVer=4.3.6.0&placeId=111111&platform=iOS&requestSrc=h5&resourceId=626&timestamp=1624024052&user_id=2121487568&sqSv=1.0&sign=501334db0311361859e54a14693060a3&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.2.2%26utdid%3DYMyjmPSTGXMDAEF8bqsM7se%252F%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2121487568%26sn%3D15724ACC5A50E2457BA3195356E33C3B12934EEC%26umidtoken%3DYMyjmPSTGXMDAEF8bqsM7se%252F%26msv%3D8.0.0%26brand%3DApple%26imei%3D47C3E651F0FBBC6325D5C5CBCD646516D2748ACF%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad3G%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D38F94A26-E553-48AD-A0D7-3A220A7BFE6E"},{"key":"shuqijlbody11","val":"requestSrc=h5&userId=2121487568&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624024021&sqSv=1.0&sign=b6bfbf4bfa50cc04330187fc998cc35e&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.2.2%26utdid%3DYMyjmPSTGXMDAEF8bqsM7se%252F%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2121487568%26sn%3D15724ACC5A50E2457BA3195356E33C3B12934EEC%26umidtoken%3DYMyjmPSTGXMDAEF8bqsM7se%252F%26msv%3D8.0.0%26brand%3DApple%26imei%3D47C3E651F0FBBC6325D5C5CBCD646516D2748ACF%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad3G%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D38F94A26-E553-48AD-A0D7-3A220A7BFE6E"},{"key":"shuqisqjlbody11","val":"src=&userId=2121487568&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624024008&sqSv=1.0&sign=5cdfedb0488f35e7418831807a294cd4&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.2.2%26utdid%3DYMyjmPSTGXMDAEF8bqsM7se%252F%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2121487568%26sn%3D15724ACC5A50E2457BA3195356E33C3B12934EEC%26umidtoken%3DYMyjmPSTGXMDAEF8bqsM7se%252F%26msv%3D8.0.0%26brand%3DApple%26imei%3D47C3E651F0FBBC6325D5C5CBCD646516D2748ACF%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad3G%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D38F94A26-E553-48AD-A0D7-3A220A7BFE6E"},{"key":"shuqicjyurl11","val":"https://ocean.shuqireader.com/api/activity/activity/v1/lottery/info?timestamp=1624024056&userId=2121487568&activityId=311&sqSv=1.0&sign=0fd6ac43d6b2002f913b31a70e482746&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.2.2%26utdid%3DYMyjmPSTGXMDAEF8bqsM7se%252F%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2121487568%26sn%3D15724ACC5A50E2457BA3195356E33C3B12934EEC%26umidtoken%3DYMyjmPSTGXMDAEF8bqsM7se%252F%26msv%3D8.0.0%26brand%3DApple%26imei%3D47C3E651F0FBBC6325D5C5CBCD646516D2748ACF%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad3G%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D38F94A26-E553-48AD-A0D7-3A220A7BFE6E"},{"key":"shuqicjcsbody11","val":"_public=utype%3Dpre_vip%26idfa%3D38F94A26-E553-48AD-A0D7-3A220A7BFE6E%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26umidtoken%3DYMyjmPSTGXMDAEF8bqsM7se/%26user_id%3D2121487568%26sn%3D15724ACC5A50E2457BA3195356E33C3B12934EEC%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D47C3E651F0FBBC6325D5C5CBCD646516D2748ACF%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPad3G%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26utdid%3DYMyjmPSTGXMDAEF8bqsM7se/%26soft_id%3D21%26sdk%3D13.2.2&deliveryId=711&key=sq_app_ad&miniWua=HHnB_Lq5NcFk8h%2BvwI0o6bs1OlLsNfmH1GMtdEorejCdGYKg%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=703&sign=0B47462F8B987AE576906774D559C536&timestamp=1624024029&userId=2121487568&user_id=2121487568&wua=HIVW_cqVu3vwSIr8O6IRzYsdiGg0fUT49A30vAEzdXZ6/I1QLhCLhsrM/D4hIC4eSc6zu1LgcBIJ4dLtTRDvUcZqm55Kt2N0pN17OEKYUXCQf/ZdRVYVV8JH6hLg/M1z2sm8E3gEtn0pZq6g4BsmuM5%2B4ZeluyFbR6jCTT6PrEE8dtdBo6YhaGjjSKK58uqAGfcIsan4lOdD1h7%2BQAHgNJYAbbc2Q4fbwZT8nRa97vf1FRI4%3D"},{"key":"shuqicjbody11","val":"wua=HIVW_wO587%2BmMj8h%2Fs1lInEHGW6OJpFmm%2BAir0FfAs%2FEqvy7bLoGwxS7peaiVntM0In8H7JW8thEeJ0lu0X2xw16IX9WncJ5p1mk2%2ByRNnqSSul8OD5%2FCF6jXKNEnK9ddjKPvm5%2FdIv4VL6Lrw80GJi7Dlg5lC2VMGbETRb%2Fob7TCB%2BQrZtW8r%2F7T7T2LXQXr5A9K4r%2FOMLbiBiSe0aDNQpJ1A%2B6hyvSApT0prnLii9IQVdU%3D&ua=&userId=2121487568&umidtoken=YMyjmPSTGXMDAEF8bqsM7se%2F&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&asac=2A20C07RJ9F51AOEFSNHDR&timestamp=1624024034&activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&sqSv=1.0&sign=f39895763a2b71168e06971aeb7c363e&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.2.2%26utdid%3DYMyjmPSTGXMDAEF8bqsM7se%252F%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2121487568%26sn%3D15724ACC5A50E2457BA3195356E33C3B12934EEC%26umidtoken%3DYMyjmPSTGXMDAEF8bqsM7se%252F%26msv%3D8.0.0%26brand%3DApple%26imei%3D47C3E651F0FBBC6325D5C5CBCD646516D2748ACF%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad3G%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D38F94A26-E553-48AD-A0D7-3A220A7BFE6E"},{"key":"shuqijsspbody11","val":""},{"key":"shuqijsydurl11","val":""},{"key":"shuqijsydbody11","val":""},{"key":"shuqijsqdbody11","val":""},{"key":"shuqijsqdspyurl11","val":""},{"key":"shuqijsqdspbody11","val":""},{"key":"shuqijsrwbody11","val":""},{"key":"shuqijsfxbody11","val":""},{"key":"shuqijsbookurl11","val":""},{"key":"shuqijsbookbody11","val":""},{"key":"shuqijssprwurl11","val":""},{"key":"shuqiuserurl12","val":"https://ocean.shuqireader.com/api/jaccount/accountapi/v1/sapi/account/getBindinfo?userId=2127963450&sqSv=1.0&timestamp=1624024246&sign=250b97c89fa83531105034e1051d5007&key=sq_h5_gateway"},{"key":"shuqisyurl12","val":"https://render.shuqireader.com/load/resource?sdk=13.1.2&utdid=YMykbDCu2NEDAIvgorHzz0e8&ustatus=0&first_placeid=111111&net_env=3g&placeid=111111&user_id=2127963450&sn=2FB4C951B756586190453EDBD0726822F9BB8699&umidtoken=YMykbDCu2NEDAIvgorHzz0e8&msv=8.0.0&brand=Apple&imei=CC5303C5497188DD374DF7B18EFF644AA3CCA72D&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&session=&skinColor=23B383&platform=iOS&ver=210301&mod=iPad4G&statusBarHeight=44.000000&skinVersion=1&wh=1242x2688&soft_id=21&utype=pre_vip&skinId=999&idfa=3E81CCC8-DEA4-4EA5-96CF-F7F03A99FBC3"},{"key":"shuqisybody12","val":"appVer=4.3.6.0&imei=CC5303C5497188DD374DF7B18EFF644AA3CCA72D&isNewUser=1&params=%7B%22resources%22%3A%7B%22ShuqiVipEntry%22%3A%7B%7D%2C%22personalCardConfig%22%3A%7B%7D%7D%7D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=f8df3bd851c525d618e71f2baf5d5c08&sn=2FB4C951B756586190453EDBD0726822F9BB8699&soft_id=21&timestamp=1624024178&user_id=2127963450&ver=210301"},{"key":"shuqispbody12","val":"_public=skinId%3D999%26idfa%3D3E81CCC8-DEA4-4EA5-96CF-F7F03A99FBC3%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26umidtoken%3DYMykbDCu2NEDAIvgorHzz0e8%26user_id%3D2127963450%26sn%3D2FB4C951B756586190453EDBD0726822F9BB8699%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3DCC5303C5497188DD374DF7B18EFF644AA3CCA72D%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPad4G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYMykbDCu2NEDAIvgorHzz0e8%26utype%3Dpre_vip%26sdk%3D13.1.2&deliveryId=525&key=sq_app_ad&miniWua=HHnB_6%2BijmO4OS05K9Dry9ExPmj1vkRT59iwMlJoyPXXQu5w%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=626&sign=23EA1F7A1C67B05C90AB56DABD503121&timestamp=1624024209&userId=2127963450&user_id=2127963450&wua=HIVW_JhXYqn0IIjT3ALJabhQxqXzq/5ydT8Vnen7QzOa0yEfk7VvaGlvkpOVuNkTymzpA72Kx3Of%2Bgd/TAkEO4WyYDfpOmI4oTIUlud%2B4BP1m5Nigp4IX7KjXktxQ9gFpqK/MHX0VlBGyCESI7WpRvumHhpsvpdbMqW0Ogdp5nJ/lc7EmUfT3galtD4tIdWKdA85u855CJvW5vm9xhkdyQNIFZLbZ1OdV5CWXRzziBGeEVYk%3D"},{"key":"shuqiscbody12","val":""},{"key":"shuqiydbody12","val":""},{"key":"shuqiqdbody12","val":"clientTimestamp=1624024201&position=501&userId=2127963450&signInType=1&wua=HIVW_KMK%2F2H7kyr2jXeJmCs1OL%2BvrPWhW3r0GBWslFqF68KjPs%2FHduyFUEU57XolX4da4z3ZFVr8aLkCu2bgXyqbZSUBQwUBcY%2FAz3VKgCrp%2FwtR3eNYCb7cCV%2BgtoWB%2B2g5JyKl%2FYf%2BgqMFIM8ZOylOifQPDt9RbtAu%2FTd%2FSbD9Arp1Vfw5tenSbOdWvkN6xT9c%2F28Lv9ThxYk%2F7znTMn89NdIJvRcxKI46anQ6siqJCX%2FM%3D&ua=&miniWua=HHnB_Oaucq6xGfoR4SON5zpKyLMDgiOYwgXrep%2Bg3Xg%2FMm%2Fw%3D&umidtoken=YMykbDCu2NEDAIvgorHzz0e8&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&sign=ab489288720bd57c9866b4a36706bb82&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.1.2%26utdid%3DYMykbDCu2NEDAIvgorHzz0e8%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2127963450%26sn%3D2FB4C951B756586190453EDBD0726822F9BB8699%26umidtoken%3DYMykbDCu2NEDAIvgorHzz0e8%26msv%3D8.0.0%26brand%3DApple%26imei%3DCC5303C5497188DD374DF7B18EFF644AA3CCA72D%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad4G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D3E81CCC8-DEA4-4EA5-96CF-F7F03A99FBC3"},{"key":"shuqirwbody12","val":"serviceWorkerOn=1&stopPullRefresh=1&from=ShuqiTab&upf=20368&sdk=13.1.2&utdid=YMykbDCu2NEDAIvgorHzz0e8&ustatus=0&first_placeid=111111&net_env=3g&placeid=111111&user_id=2127963450&sn=2FB4C951B756586190453EDBD0726822F9BB8699&umidtoken=YMykbDCu2NEDAIvgorHzz0e8&msv=8.0.0&brand=Apple&imei=CC5303C5497188DD374DF7B18EFF644AA3CCA72D&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&session=&skinColor=23B383&platform=1&ver=210301&mod=iPad4G&statusBarHeight=44.000000&skinVersion=1&wh=1242x2688&soft_id=21&utype=pre_vip&skinId=999&idfa=3E81CCC8-DEA4-4EA5-96CF-F7F03A99FBC3&params=%7B%22resources%22%3A%7B%22ShuqiBsDailyTask%22%3A%7B%7D%7D%7D&userId=2127963450&placeId=111111&timestamp=1624024221&sqSv=1.0&sign=bbc94dcf4558a575e35ed6f59d691f45&key=sq_h5_gateway&_public="},{"key":"shuqifxbody12","val":""},{"key":"shuqisprwurl12","val":"https://ocean.shuqireader.com/api/ad/adserver/v1/api/getAdInfo?appVer=4.3.6.0&placeId=111111&platform=iOS&requestSrc=h5&resourceId=626&timestamp=1624024245&user_id=2127963450&sqSv=1.0&sign=5beab3c1e7bd069620aae5a9fc08b8d3&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.1.2%26utdid%3DYMykbDCu2NEDAIvgorHzz0e8%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2127963450%26sn%3D2FB4C951B756586190453EDBD0726822F9BB8699%26umidtoken%3DYMykbDCu2NEDAIvgorHzz0e8%26msv%3D8.0.0%26brand%3DApple%26imei%3DCC5303C5497188DD374DF7B18EFF644AA3CCA72D%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad4G%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D3E81CCC8-DEA4-4EA5-96CF-F7F03A99FBC3"},{"key":"shuqijlbody12","val":"requestSrc=h5&userId=2127963450&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624024221&sqSv=1.0&sign=27174d342d9671e60a121a24ef5ba023&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.1.2%26utdid%3DYMykbDCu2NEDAIvgorHzz0e8%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2127963450%26sn%3D2FB4C951B756586190453EDBD0726822F9BB8699%26umidtoken%3DYMykbDCu2NEDAIvgorHzz0e8%26msv%3D8.0.0%26brand%3DApple%26imei%3DCC5303C5497188DD374DF7B18EFF644AA3CCA72D%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad4G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D3E81CCC8-DEA4-4EA5-96CF-F7F03A99FBC3"},{"key":"shuqisqjlbody12","val":"src=&userId=2127963450&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624024217&sqSv=1.0&sign=94b53c374c210fc1ef53c9459267fe8c&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.1.2%26utdid%3DYMykbDCu2NEDAIvgorHzz0e8%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2127963450%26sn%3D2FB4C951B756586190453EDBD0726822F9BB8699%26umidtoken%3DYMykbDCu2NEDAIvgorHzz0e8%26msv%3D8.0.0%26brand%3DApple%26imei%3DCC5303C5497188DD374DF7B18EFF644AA3CCA72D%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad4G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D3E81CCC8-DEA4-4EA5-96CF-F7F03A99FBC3"},{"key":"shuqicjyurl12","val":"https://ocean.shuqireader.com/api/activity/activity/v1/lottery/info?timestamp=1624024247&userId=2127963450&activityId=311&sqSv=1.0&sign=ac3c32824ae79fb13e5378e4e82c68bd&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.1.2%26utdid%3DYMykbDCu2NEDAIvgorHzz0e8%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2127963450%26sn%3D2FB4C951B756586190453EDBD0726822F9BB8699%26umidtoken%3DYMykbDCu2NEDAIvgorHzz0e8%26msv%3D8.0.0%26brand%3DApple%26imei%3DCC5303C5497188DD374DF7B18EFF644AA3CCA72D%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad4G%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D3E81CCC8-DEA4-4EA5-96CF-F7F03A99FBC3"},{"key":"shuqicjcsbody12","val":"_public=skinId%3D999%26idfa%3D3E81CCC8-DEA4-4EA5-96CF-F7F03A99FBC3%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26umidtoken%3DYMykbDCu2NEDAIvgorHzz0e8%26user_id%3D2127963450%26sn%3D2FB4C951B756586190453EDBD0726822F9BB8699%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3DCC5303C5497188DD374DF7B18EFF644AA3CCA72D%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPad4G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYMykbDCu2NEDAIvgorHzz0e8%26utype%3Dpre_vip%26sdk%3D13.1.2&deliveryId=711&key=sq_app_ad&miniWua=HHnB_d/Tw4ziaH/VS%2BP2gXIvq9uqtxEt89Y0np/fEIobarsU%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=703&sign=696B94266462DA847AF760CAD18C9EB0&timestamp=1624024225&userId=2127963450&user_id=2127963450&wua=HIVW_OqOidmGype1VyPQgLA1WCzMK7cguZhB7U6XR8%2BiD9JTK0/YGg7slgEv0gr5%2Bfe2h2MGBw4TLVodLUAU/9Uj1Q09%2Bqcx8QMmRtfp5tK6on5ERDgnJbZpjTcpVQsCa6l8/g8s5MZ1PlwjlY7fbVd8osB2hjesG5AL1WhE8cN2mjqQQDB0sHAFCaRuuyInJwldHzTI/pLJfFw1EMIkRz00g/f9R6EpjUctUcQfRfmnda4g%3D"},{"key":"shuqicjbody12","val":"wua=HIVW_WRJSOpNTVvnYCs0s1%2BvaJtj6A%2BVzhU47FXqsTPxm0fQcmqKfAkWvQn40T30sF6NZP7g2qEt5YDkzZ8K4sRnjKkr6XLqGs3IegcFp98fqwBCdc54A3OcVvO29zpEzQMMMbGSNIM2NoM%2FsIS2uwgV3FkygKyIKaqKtlB9DnFQ8dee5NziGCxZFvH8GVzXfCUDO35cveAhRus68LUjV%2BRnoO756G7gLzDFxRUpFUynliwE%3D&ua=&userId=2127963450&umidtoken=YMykbDCu2NEDAIvgorHzz0e8&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&asac=2A20C07RJ9F51AOEFSNHDR&timestamp=1624024232&activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&sqSv=1.0&sign=c52c0e2623d2f884b17b13644376d51b&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.1.2%26utdid%3DYMykbDCu2NEDAIvgorHzz0e8%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2127963450%26sn%3D2FB4C951B756586190453EDBD0726822F9BB8699%26umidtoken%3DYMykbDCu2NEDAIvgorHzz0e8%26msv%3D8.0.0%26brand%3DApple%26imei%3DCC5303C5497188DD374DF7B18EFF644AA3CCA72D%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad4G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D3E81CCC8-DEA4-4EA5-96CF-F7F03A99FBC3"},{"key":"shuqijsspbody12","val":""},{"key":"shuqijsydurl12","val":""},{"key":"shuqijsydbody12","val":""},{"key":"shuqijsqdbody12","val":""},{"key":"shuqijsqdspyurl12","val":""},{"key":"shuqijsqdspbody12","val":""},{"key":"shuqijsrwbody12","val":""},{"key":"shuqijsfxbody12","val":""},{"key":"shuqijsbookurl12","val":""},{"key":"shuqijsbookbody12","val":""},{"key":"shuqijssprwurl12","val":""},{"key":"shuqiuserurl13","val":"https://ocean.shuqireader.com/api/jaccount/accountapi/v1/sapi/account/getBindinfo?userId=2130703665&sqSv=1.0&timestamp=1624024406&sign=2dee5041d25b94b19d5eb8f1d471ff0f&key=sq_h5_gateway"},{"key":"shuqisyurl13","val":"https://render.shuqireader.com/load/resource?sdk=13.5&utdid=YMylBxqZ5MUDACqx%2FMbHrssH&ustatus=0&first_placeid=111111&net_env=4g&placeid=111111&user_id=2130703665&sn=F683ED054A35E121A8BFC66779C0499E2D75F22B&umidtoken=YMylBxqZ5MUDACqx%2FMbHrssH&msv=8.0.0&brand=Apple&imei=43A4BE02A25D3B0E22BB30EA4AE074225370696A&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=iOS&ver=210301&mod=iPad4G&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=8DF763CE-C212-4D21-BE30-FBF09196ED5A"},{"key":"shuqisybody13","val":"appVer=4.3.6.0&imei=43A4BE02A25D3B0E22BB30EA4AE074225370696A&isNewUser=1&params=%7B%22resources%22%3A%7B%22ShuqiVipEntry%22%3A%7B%7D%2C%22personalCardConfig%22%3A%7B%7D%7D%7D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=a5b5151d87a9077f6845cca02a2ac407&sn=F683ED054A35E121A8BFC66779C0499E2D75F22B&soft_id=21&timestamp=1624024330&user_id=2130703665&ver=210301"},{"key":"shuqispbody13","val":"_public=skinId%3D999%26idfa%3D8DF763CE-C212-4D21-BE30-FBF09196ED5A%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26umidtoken%3DYMylBxqZ5MUDACqx/MbHrssH%26user_id%3D2130703665%26sn%3DF683ED054A35E121A8BFC66779C0499E2D75F22B%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D43A4BE02A25D3B0E22BB30EA4AE074225370696A%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPad4G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYMylBxqZ5MUDACqx/MbHrssH%26utype%3Dpre_vip%26sdk%3D13.5&deliveryId=525&key=sq_app_ad&miniWua=HHnB_aTc0H7sT99sVM4LH%2BdC8UcR1hKUFZkO/sS/y4Mm4VfQ%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=626&sign=A0C061A993C78DB13F7D4C2905745A19&timestamp=1624024344&userId=2130703665&user_id=2130703665&wua=HIVW_eVDPEnbksOvwitVN9w8lta%2BfEjWAtV6sI2pUmVyWp3WVSKQgBr%2B%2BWI9GCKn0k%2BxrXORpzQyiXepbfVrSSl%2BXFMI2Njo8195%2BQIMohR2gHHfUaSG2NlKnMp4api39/KGSzU6HSMC2aFStaUgjLB8p/o8ePwBnDFbudCE8yNPBJ0sI%2BBjjl/mlHStrgocYGfQnqHHttEfIGW/F/iSXbd11nDeZiz4NnGKvMSi7vOj0jR8%3D"},{"key":"shuqiscbody13","val":"_public=skinId%253D999%2526idfa%253D8DF763CE-C212-4D21-BE30-FBF09196ED5A%2526ustatus%253D0%2526first_placeid%253D111111%2526net_env%253D4g%2526umidtoken%253DYMylBxqZ5MUDACqx%252FMbHrssH%2526user_id%253D2130703665%2526sn%253DF683ED054A35E121A8BFC66779C0499E2D75F22B%2526placeid%253D111111%2526msv%253D8.0.0%2526brand%253DApple%2526imei%253D43A4BE02A25D3B0E22BB30EA4AE074225370696A%2526skinVersionPrefix%253D1%2526appVer%253D4.3.6.0%2526skinActiveColor%253D0F9970%2526manufacturer%253DApple%2526skinColor%253D23B383%2526platform%253DiOS%2526ver%253D210301%2526mod%253DiPad4G%2526statusBarHeight%253D44.000000%2526skinVersion%253D1%2526wh%253D1242x2688%2526soft_id%253D21%2526utdid%253DYMylBxqZ5MUDACqx%252FMbHrssH%2526utype%253Dpre_vip%2526sdk%253D13.5&key=and_log&readingList=%5B%7B%22startTime%22%3A1624024356%2C%22readObjType%22%3A1%2C%22attr%22%3A2%2C%22readObjId%22%3A%228291055%22%2C%22readChapterId%22%3A1406517%2C%22readingLen%22%3A17%7D%5D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=905793075CA56733D399D44E82D91051&timestamp=1624024374&user_id=2130703665"},{"key":"shuqiydbody13","val":""},{"key":"shuqiqdbody13","val":""},{"key":"shuqirwbody13","val":"serviceWorkerOn=1&stopPullRefresh=1&from=ShuqiTab&upf=20368&sdk=13.5&utdid=YMylBxqZ5MUDACqx%2FMbHrssH&ustatus=0&first_placeid=111111&net_env=4g&placeid=111111&user_id=2130703665&sn=F683ED054A35E121A8BFC66779C0499E2D75F22B&umidtoken=YMylBxqZ5MUDACqx%2FMbHrssH&msv=8.0.0&brand=Apple&imei=43A4BE02A25D3B0E22BB30EA4AE074225370696A&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&session=&skinColor=23B383&platform=1&ver=210301&mod=iPad4G&statusBarHeight=44.000000&skinVersion=1&wh=1242x2688&soft_id=21&utype=pre_vip&skinId=999&idfa=8DF763CE-C212-4D21-BE30-FBF09196ED5A&params=%7B%22resources%22%3A%7B%22ShuqiBsDailyTask%22%3A%7B%7D%7D%7D&userId=2130703665&placeId=111111&timestamp=1624024387&sqSv=1.0&sign=dd8c41baa6af62fddb49f6e3090a6618&key=sq_h5_gateway&_public="},{"key":"shuqifxbody13","val":""},{"key":"shuqisprwurl13","val":"https://ocean.shuqireader.com/api/ad/adserver/v1/api/getAdInfo?appVer=4.3.6.0&placeId=111111&platform=iOS&requestSrc=h5&resourceId=626&timestamp=1624024407&user_id=2130703665&sqSv=1.0&sign=292151c5cfe72e3d19bc4f8c322936b0&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.5%26utdid%3DYMylBxqZ5MUDACqx%252FMbHrssH%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2130703665%26sn%3DF683ED054A35E121A8BFC66779C0499E2D75F22B%26umidtoken%3DYMylBxqZ5MUDACqx%252FMbHrssH%26msv%3D8.0.0%26brand%3DApple%26imei%3D43A4BE02A25D3B0E22BB30EA4AE074225370696A%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad4G%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D8DF763CE-C212-4D21-BE30-FBF09196ED5A"},{"key":"shuqijlbody13","val":"requestSrc=h5&userId=2130703665&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624024387&sqSv=1.0&sign=6ec1c1ad603b9c3aa6a01a164c1445af&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.5%26utdid%3DYMylBxqZ5MUDACqx%252FMbHrssH%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2130703665%26sn%3DF683ED054A35E121A8BFC66779C0499E2D75F22B%26umidtoken%3DYMylBxqZ5MUDACqx%252FMbHrssH%26msv%3D8.0.0%26brand%3DApple%26imei%3D43A4BE02A25D3B0E22BB30EA4AE074225370696A%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad4G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D8DF763CE-C212-4D21-BE30-FBF09196ED5A"},{"key":"shuqisqjlbody13","val":"src=&userId=2130703665&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624024385&sqSv=1.0&sign=58823e9f177bdb1d326cabe09d482d05&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.5%26utdid%3DYMylBxqZ5MUDACqx%252FMbHrssH%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2130703665%26sn%3DF683ED054A35E121A8BFC66779C0499E2D75F22B%26umidtoken%3DYMylBxqZ5MUDACqx%252FMbHrssH%26msv%3D8.0.0%26brand%3DApple%26imei%3D43A4BE02A25D3B0E22BB30EA4AE074225370696A%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad4G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D8DF763CE-C212-4D21-BE30-FBF09196ED5A"},{"key":"shuqicjyurl13","val":"https://ocean.shuqireader.com/api/activity/activity/v1/lottery/info?timestamp=1624024410&userId=2130703665&activityId=311&sqSv=1.0&sign=41b44619fd9c5c8955f049a230b76176&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.5%26utdid%3DYMylBxqZ5MUDACqx%252FMbHrssH%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2130703665%26sn%3DF683ED054A35E121A8BFC66779C0499E2D75F22B%26umidtoken%3DYMylBxqZ5MUDACqx%252FMbHrssH%26msv%3D8.0.0%26brand%3DApple%26imei%3D43A4BE02A25D3B0E22BB30EA4AE074225370696A%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad4G%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D8DF763CE-C212-4D21-BE30-FBF09196ED5A"},{"key":"shuqicjcsbody13","val":"_public=skinId%3D999%26idfa%3D8DF763CE-C212-4D21-BE30-FBF09196ED5A%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26umidtoken%3DYMylBxqZ5MUDACqx/MbHrssH%26user_id%3D2130703665%26sn%3DF683ED054A35E121A8BFC66779C0499E2D75F22B%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D43A4BE02A25D3B0E22BB30EA4AE074225370696A%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPad4G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYMylBxqZ5MUDACqx/MbHrssH%26utype%3Dpre_vip%26sdk%3D13.5&deliveryId=711&key=sq_app_ad&miniWua=HHnB_xMSSnSH%2BCeLpZHI6O/EAD6r55z3K0tmASmpxyx3Rbw8%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=703&sign=523F5EBC1AF4B3EDB36583F6BFB1B5D8&timestamp=1624024388&userId=2130703665&user_id=2130703665&wua=HIVW_n65qwUa9jMPjfBeV3XwIIDvEIy92NHB2WZe/FcX1FzjYtgtLvWbu/fN0/PpU0vzOUKuDQBRHy0V5%2B7xFdXHOgFlvWSLhH/FuFG4WvQEdD3Ro/0XXcSQnMEy3/EAVR48QiTjdoAcwixZiVldfuDeyJNQTcHlEA0OMdmhFxb7F%2B9TinDu%2BX5fSaHQxfrhuHDIWYeZKr5ib4lU%2ByEi8zL/ChdAnaJ%2BpyXQZx6mOeICOvfI%3D"},{"key":"shuqicjbody13","val":"wua=HIVW_lU%2Bt0TIPrDxCdYOWB3ATSmZXREDBog69N4xhl2f2xjOmo%2BjtdDWFDbXx%2BuDpyWZxIm%2FLvbQLB7409ek6UgiQI1BQwcwe102Fk8KE7xtSq3GXZNVIEtYDcy12%2BtrwZwM2n3tCtzAGvIVZo9m3mcDPXa%2B31k4bode9ERu9pwQlNl4IJHsErRPcByePf2Ol7c%2BaWCdjyS%2BKQ%2FjQlwy1b39EU8v06HVrZHoGYfMhtiojp8w%3D&ua=&userId=2130703665&umidtoken=YMylBxqZ5MUDACqx%2FMbHrssH&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&asac=2A20C07RJ9F51AOEFSNHDR&timestamp=1624024394&activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&sqSv=1.0&sign=930885de938f6c68c185f4cc4114d12b&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.5%26utdid%3DYMylBxqZ5MUDACqx%252FMbHrssH%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2130703665%26sn%3DF683ED054A35E121A8BFC66779C0499E2D75F22B%26umidtoken%3DYMylBxqZ5MUDACqx%252FMbHrssH%26msv%3D8.0.0%26brand%3DApple%26imei%3D43A4BE02A25D3B0E22BB30EA4AE074225370696A%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad4G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D8DF763CE-C212-4D21-BE30-FBF09196ED5A"},{"key":"shuqijsspbody13","val":""},{"key":"shuqijsydurl13","val":""},{"key":"shuqijsydbody13","val":""},{"key":"shuqijsqdbody13","val":""},{"key":"shuqijsqdspyurl13","val":""},{"key":"shuqijsqdspbody13","val":""},{"key":"shuqijsrwbody13","val":""},{"key":"shuqijsfxbody13","val":""},{"key":"shuqijsbookurl13","val":""},{"key":"shuqijsbookbody13","val":""},{"key":"shuqijssprwurl13","val":""},{"key":"shuqiuserurl14","val":"https://ocean.shuqireader.com/api/jaccount/accountapi/v1/sapi/account/getBindinfo?userId=2127864000&sqSv=1.0&timestamp=1624024544&sign=bcde23c11dae956a944dcd5c2e981540&key=sq_h5_gateway"},{"key":"shuqisyurl14","val":"https://render.shuqireader.com/load/resource?sdk=13.0&utdid=YMylmc4ue2IDAE2jh%2B4UIrgK&ustatus=0&first_placeid=111111&net_env=3g&placeid=111111&user_id=2127864000&sn=6E7B498CC5183309BE6D868DDE558E36FE316B47&umidtoken=YMylmc4ue2IDAE2jh%2B4UIrgK&msv=8.0.0&brand=Apple&imei=D5558A65D7A79E3895E3CDF80084CD4A7B9D11FC&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&session=&skinColor=23B383&platform=iOS&ver=210301&mod=iPad2G&statusBarHeight=44.000000&skinVersion=1&wh=1242x2688&soft_id=21&utype=pre_vip&skinId=999&idfa=AB229591-4E2A-4569-B539-372D809EC695"},{"key":"shuqisybody14","val":"appVer=4.3.6.0&imei=D5558A65D7A79E3895E3CDF80084CD4A7B9D11FC&isNewUser=1&params=%7B%22resources%22%3A%7B%22ShuqiVipEntry%22%3A%7B%7D%2C%22personalCardConfig%22%3A%7B%7D%7D%7D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=7f3ac84b71a310e9ad198d54deaaeba1&sn=6E7B498CC5183309BE6D868DDE558E36FE316B47&soft_id=21&timestamp=1624024490&user_id=2127864000&ver=210301"},{"key":"shuqispbody14","val":"_public=skinId%3D999%26idfa%3DAB229591-4E2A-4569-B539-372D809EC695%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26umidtoken%3DYMylmc4ue2IDAE2jh%2B4UIrgK%26user_id%3D2127864000%26sn%3D6E7B498CC5183309BE6D868DDE558E36FE316B47%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3DD5558A65D7A79E3895E3CDF80084CD4A7B9D11FC%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPad2G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYMylmc4ue2IDAE2jh%2B4UIrgK%26utype%3Dpre_vip%26sdk%3D13.0&deliveryId=525&key=sq_app_ad&miniWua=HHnB_QwJc/Vk7AN0%2BDG/su5AnP7sMHNlm9ZZWBY/QuJ02Jx8%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=626&sign=08B2A4A26DD4D339A101D37DBD537C35&timestamp=1624024507&userId=2127864000&user_id=2127864000&wua=HIVW_kgPbN/7ceBl7IEpofAYfy825I9/vTaGOuhv0/kFmyOdTSaNQV0HsjXystZKp6oKN8CuXAR3/GSx5MSKg9uegiPxGkpDbsn/0P/NTdi7a3xrLaSC58W6rixEX0MePaZPMZEDRbQZ9ChMgmENXMK3bLB5AsUvVKlWiAp1%2BJWQXMN0tSZ0Izmly5oyHF0ci1VQUI3aB2jGGhJ8/LEaXwytX%2BrwVeDrn58KF0h8HUel/ICc%3D"},{"key":"shuqiscbody14","val":""},{"key":"shuqiydbody14","val":""},{"key":"shuqiqdbody14","val":"clientTimestamp=1624024503&position=501&userId=2127864000&signInType=1&wua=HIVW_buq5VYgXiI%2FInxppsNqR11ZbEuzp8tM0BXZYJ3J1nNBCBsMPf4c0ievPjobArZ5vFOZMHNecbMLCAnXXQYWB0n90ml3LptWBPXyQ9InszIk3i140fq6a%2BUdfyxFvmuOvUo2okCQPEHL%2BzekG1fFEZ9aBy7myeDJBFwsuDtFoVUs553jxttWDa7sgboZ5gBjT5QmJv7PR9CUu31%2FmOY0fShPFCxcH77nam0XRGz79N3A%3D&ua=&miniWua=HHnB_YYzd4RhPIhDDgoB2TyRtjerYFHLxieTcJ98wcSxtra0%3D&umidtoken=YMylmc4ue2IDAE2jh%2B4UIrgK&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&sign=606747c1f375a03bcb9a6bd67a0cd41b&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.0%26utdid%3DYMylmc4ue2IDAE2jh%252B4UIrgK%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2127864000%26sn%3D6E7B498CC5183309BE6D868DDE558E36FE316B47%26umidtoken%3DYMylmc4ue2IDAE2jh%252B4UIrgK%26msv%3D8.0.0%26brand%3DApple%26imei%3DD5558A65D7A79E3895E3CDF80084CD4A7B9D11FC%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad2G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DAB229591-4E2A-4569-B539-372D809EC695"},{"key":"shuqirwbody14","val":"serviceWorkerOn=1&stopPullRefresh=1&from=ShuqiTab&upf=20368&sdk=13.0&utdid=YMylmc4ue2IDAE2jh%2B4UIrgK&ustatus=0&first_placeid=111111&net_env=3g&placeid=111111&user_id=2127864000&sn=6E7B498CC5183309BE6D868DDE558E36FE316B47&umidtoken=YMylmc4ue2IDAE2jh%2B4UIrgK&msv=8.0.0&brand=Apple&imei=D5558A65D7A79E3895E3CDF80084CD4A7B9D11FC&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&session=&skinColor=23B383&platform=1&ver=210301&mod=iPad2G&statusBarHeight=44.000000&skinVersion=1&wh=1242x2688&soft_id=21&utype=pre_vip&skinId=999&idfa=AB229591-4E2A-4569-B539-372D809EC695&params=%7B%22resources%22%3A%7B%22ShuqiBsDailyTask%22%3A%7B%7D%7D%7D&userId=2127864000&placeId=111111&timestamp=1624024520&sqSv=1.0&sign=b796a04e5ff3bfc7713164ea617f9da5&key=sq_h5_gateway&_public="},{"key":"shuqifxbody14","val":""},{"key":"shuqisprwurl14","val":"https://ocean.shuqireader.com/api/ad/adserver/v1/api/getAdInfo?appVer=4.3.6.0&placeId=111111&platform=iOS&requestSrc=h5&resourceId=626&timestamp=1624024545&user_id=2127864000&sqSv=1.0&sign=b65f13992c8b8e7527fb6cd4c199ce13&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.0%26utdid%3DYMylmc4ue2IDAE2jh%252B4UIrgK%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2127864000%26sn%3D6E7B498CC5183309BE6D868DDE558E36FE316B47%26umidtoken%3DYMylmc4ue2IDAE2jh%252B4UIrgK%26msv%3D8.0.0%26brand%3DApple%26imei%3DD5558A65D7A79E3895E3CDF80084CD4A7B9D11FC%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad2G%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DAB229591-4E2A-4569-B539-372D809EC695"},{"key":"shuqijlbody14","val":"requestSrc=h5&userId=2127864000&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624024520&sqSv=1.0&sign=b6caa98ef54931c0fad1f07fc2e09b4b&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.0%26utdid%3DYMylmc4ue2IDAE2jh%252B4UIrgK%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2127864000%26sn%3D6E7B498CC5183309BE6D868DDE558E36FE316B47%26umidtoken%3DYMylmc4ue2IDAE2jh%252B4UIrgK%26msv%3D8.0.0%26brand%3DApple%26imei%3DD5558A65D7A79E3895E3CDF80084CD4A7B9D11FC%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad2G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DAB229591-4E2A-4569-B539-372D809EC695"},{"key":"shuqisqjlbody14","val":"src=&userId=2127864000&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624024517&sqSv=1.0&sign=584f62c96fa92032798e8d8345a5eb7b&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.0%26utdid%3DYMylmc4ue2IDAE2jh%252B4UIrgK%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2127864000%26sn%3D6E7B498CC5183309BE6D868DDE558E36FE316B47%26umidtoken%3DYMylmc4ue2IDAE2jh%252B4UIrgK%26msv%3D8.0.0%26brand%3DApple%26imei%3DD5558A65D7A79E3895E3CDF80084CD4A7B9D11FC%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad2G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DAB229591-4E2A-4569-B539-372D809EC695"},{"key":"shuqicjyurl14","val":"https://ocean.shuqireader.com/api/activity/activity/v1/lottery/info?timestamp=1624024550&userId=2127864000&activityId=311&sqSv=1.0&sign=a9be65a006984b9475b86df3bc7bc224&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.0%26utdid%3DYMylmc4ue2IDAE2jh%252B4UIrgK%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2127864000%26sn%3D6E7B498CC5183309BE6D868DDE558E36FE316B47%26umidtoken%3DYMylmc4ue2IDAE2jh%252B4UIrgK%26msv%3D8.0.0%26brand%3DApple%26imei%3DD5558A65D7A79E3895E3CDF80084CD4A7B9D11FC%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad2G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DAB229591-4E2A-4569-B539-372D809EC695"},{"key":"shuqicjcsbody14","val":"_public=skinId%3D999%26idfa%3DAB229591-4E2A-4569-B539-372D809EC695%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26umidtoken%3DYMylmc4ue2IDAE2jh%2B4UIrgK%26user_id%3D2127864000%26sn%3D6E7B498CC5183309BE6D868DDE558E36FE316B47%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3DD5558A65D7A79E3895E3CDF80084CD4A7B9D11FC%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPad2G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYMylmc4ue2IDAE2jh%2B4UIrgK%26utype%3Dpre_vip%26sdk%3D13.0&deliveryId=711&key=sq_app_ad&miniWua=HHnB_IvzcR2vclg8paHOogaRObiRIJ8Qz5lI1RBEIrHAVw0Y%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=703&sign=50B996BAC3CA1D70E52819CAFF488DD8&timestamp=1624024527&userId=2127864000&user_id=2127864000&wua=HIVW_KeS85DUEIotED1LEzVInoiqG%2BVIt2movhuMKPJ4Zheuu2q/%2B53nSxhuhWWhoBbB91lZDafskCC5bt35yvVhXbHN16CmrzC0KljVlzWPv9Bw5w6cU%2BMCH9tjqlorFvGrG5nK6MlZwPKwvqeFj9QugULGvMI8OCIIlcKR6eC5lZ7R1SEB1lnNQLdbIHQm/18CtGcogRqW/YS6ZoMSjjEYa1WlY1dldARdQZC5sEHBWAx4%3D"},{"key":"shuqicjbody14","val":"wua=HIVW_upjc6hTfpidrCQrjl9mwz0jBTD2oU31E%2B5lhZOjJqzPA%2B%2F53Kj1BWi9GsVwKyn%2FSjiFW3S1ZgctzxsY2GYDjewzgLwKxrXRHCCgDQqfjrRs4Z1FxLpm%2BYg5Z7OcvV1ZPcCGHC6CbjPL2NXexcPHzKWNQsHHcLH3%2Bk3OEUkIiyEyaBIt5rQnWSAqUBMwtW3mgpO8FKwyrwOYMJMnFQTh7rRioJY%2FX0C4u1JWAuhtyFsw%3D&ua=&userId=2127864000&umidtoken=YMylmc4ue2IDAE2jh%2B4UIrgK&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&asac=2A20C07RJ9F51AOEFSNHDR&timestamp=1624024530&activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&sqSv=1.0&sign=ea181b4f84080066c20ecf46cb1b5ea7&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.0%26utdid%3DYMylmc4ue2IDAE2jh%252B4UIrgK%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2127864000%26sn%3D6E7B498CC5183309BE6D868DDE558E36FE316B47%26umidtoken%3DYMylmc4ue2IDAE2jh%252B4UIrgK%26msv%3D8.0.0%26brand%3DApple%26imei%3DD5558A65D7A79E3895E3CDF80084CD4A7B9D11FC%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad2G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DAB229591-4E2A-4569-B539-372D809EC695"},{"key":"shuqijsspbody14","val":""},{"key":"shuqijsydurl14","val":""},{"key":"shuqijsydbody14","val":""},{"key":"shuqijsqdbody14","val":""},{"key":"shuqijsqdspyurl14","val":""},{"key":"shuqijsqdspbody14","val":""},{"key":"shuqijsrwbody14","val":""},{"key":"shuqijsfxbody14","val":""},{"key":"shuqijsbookurl14","val":""},{"key":"shuqijsbookbody14","val":""},{"key":"shuqijssprwurl14","val":""},{"key":"shuqiuserurl15","val":"https://ocean.shuqireader.com/api/jaccount/accountapi/v1/sapi/account/getBindinfo?userId=2128162720&sqSv=1.0&timestamp=1624024660&sign=f4ca88ef0646dc49934ef2b1364714e0&key=sq_h5_gateway"},{"key":"shuqisyurl15","val":"https://render.shuqireader.com/load/resource?sdk=13.3.1&utdid=YMymD2zO2kgDAP4QFkhx%2BYt%2B&ustatus=0&first_placeid=111111&net_env=3g&placeid=111111&user_id=2128162720&sn=BFCFB2FE05DD8BDAB5982FE76F419129D2603B28&umidtoken=QXZLGEFLOk0OnzV6H8MNDrXwbU7eSvfi&msv=8.0.0&brand=Apple&imei=897BD769486C14773133EB505436ED132F4FE7CB&skinVersionPrefix=1&appVer=4.3.0.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=iOS&ver=210107&mod=iPhone11&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=C070BF74-B9C4-4F11-A439-B753F2311F47"},{"key":"shuqisybody15","val":"appVer=4.3.0.0&imei=897BD769486C14773133EB505436ED132F4FE7CB&isNewUser=1&params=%7B%22resources%22%3A%7B%22ShuqiVipEntry%22%3A%7B%7D%2C%22personalCardConfig%22%3A%7B%7D%7D%7D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=a11aea15a033c5b0bc720b8059d50f24&sn=BFCFB2FE05DD8BDAB5982FE76F419129D2603B28&soft_id=21&timestamp=1624024944&user_id=2128162720&ver=210107"},{"key":"shuqispbody15","val":"_public=skinId%3D999%26idfa%3DC070BF74-B9C4-4F11-A439-B753F2311F47%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26umidtoken%3DYMymD2zO2kgDAP4QFkhx%2BYt%2B%26user_id%3D2128162720%26sn%3DBFCFB2FE05DD8BDAB5982FE76F419129D2603B28%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D897BD769486C14773133EB505436ED132F4FE7CB%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhone11%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYMymD2zO2kgDAP4QFkhx%2BYt%2B%26utype%3Dpre_vip%26sdk%3D13.3.1&deliveryId=525&key=sq_app_ad&miniWua=HHnB_whco6Uecn89oeEazygHVIZ5hUaMoqlXyjOhiec9eQWQ%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=626&sign=FC388F9B5909A204795B0DECF68BD8BE&timestamp=1624024609&userId=2128162720&user_id=2128162720&wua=HIVW_6qZWDtw%2Bp1mEZw2IFFZEAUbXYFjgcBb0FDAzW1RWOGcsyw%2BPkSRNpvBL%2BTHKJ7KV3y9578Kz5xFXkpoPG95dPEMIbb5fUBK7wyEDhWVrJZCiTpZWW9OhScVAv6JRJ5oO/dtGL3%2BRrUbB0cSK7B4vU/oQ73puU02qbMxSYhXBDVLXcaj2twyBWxfhMCQOWwOlUYfQIXxIjqxyraAS45zoL3EJ9Y%2BCtix9d8AewyjEXVw%3D"},{"key":"shuqiscbody15","val":""},{"key":"shuqiydbody15","val":""},{"key":"shuqiqdbody15","val":"clientTimestamp=1624024622&position=501&userId=2128162720&signInType=1&wua=HIVW_v4K3vDwzGXpkAqud8znXd1eepS5XsFsOWZg6%2B0YJG1LwfDOi0wbq9JfmjN3OSfHKw25yQCOBu2%2BUsUk6fV8ZdupzdKo8yK0TwXsifFAXdQavV2EoJyb7C5flv81LvjDk1dNdGZAOCD7fRvc1kPur5Rxu3vO25wFzVRJJyMPvpof51SrliLih6FTCeMisnFGOuAPcTVDK7%2BNrvcFYRJr9yKxwMpzj003VQdQ%2BAZjkSLA%3D&ua=&miniWua=HHnB_Tbxmxd%2BsB7dqJo0yG2oZsCdu2m%2FPjEuMYcSACh594Yw%3D&umidtoken=YMymD2zO2kgDAP4QFkhx%2BYt%2B&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&sign=e3fecfe16c649260c6ba1c1ce7441646&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.3.1%26utdid%3DYMymD2zO2kgDAP4QFkhx%252BYt%252B%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2128162720%26sn%3DBFCFB2FE05DD8BDAB5982FE76F419129D2603B28%26umidtoken%3DYMymD2zO2kgDAP4QFkhx%252BYt%252B%26msv%3D8.0.0%26brand%3DApple%26imei%3D897BD769486C14773133EB505436ED132F4FE7CB%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone11%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DC070BF74-B9C4-4F11-A439-B753F2311F47"},{"key":"shuqirwbody15","val":"serviceWorkerOn=1&stopPullRefresh=1&from=ShuqiTab&upf=20368&sdk=13.3.1&utdid=YMymD2zO2kgDAP4QFkhx%2BYt%2B&ustatus=0&first_placeid=111111&net_env=3g&placeid=111111&user_id=2128162720&sn=BFCFB2FE05DD8BDAB5982FE76F419129D2603B28&umidtoken=QXZLGEFLOk0OnzV6H8MNDrXwbU7eSvfi&msv=8.0.0&brand=Apple&imei=897BD769486C14773133EB505436ED132F4FE7CB&skinVersionPrefix=1&appVer=4.3.0.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=1&ver=210107&mod=iPhone11&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=C070BF74-B9C4-4F11-A439-B753F2311F47&params=%7B%22resources%22%3A%7B%22ShuqiBsDailyTask%22%3A%7B%7D%7D%7D&userId=2128162720&placeId=111111&timestamp=1624024912&sqSv=1.0&sign=2ed016354bc8457b68d199bb9f699f15&key=sq_h5_gateway&_public="},{"key":"shuqifxbody15","val":""},{"key":"shuqisprwurl15","val":"https://ocean.shuqireader.com/api/ad/adserver/v1/api/getAdInfo?appVer=4.3.6.0&placeId=111111&platform=iOS&requestSrc=h5&resourceId=626&timestamp=1624024657&user_id=2128162720&sqSv=1.0&sign=e0891aae6bdbf07768dc95bc2f536912&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.3.1%26utdid%3DYMymD2zO2kgDAP4QFkhx%252BYt%252B%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2128162720%26sn%3DBFCFB2FE05DD8BDAB5982FE76F419129D2603B28%26umidtoken%3DYMymD2zO2kgDAP4QFkhx%252BYt%252B%26msv%3D8.0.0%26brand%3DApple%26imei%3D897BD769486C14773133EB505436ED132F4FE7CB%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone11%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DC070BF74-B9C4-4F11-A439-B753F2311F47"},{"key":"shuqijlbody15","val":"requestSrc=h5&userId=2128162720&platform=1&appVer=4.3.0.0&placeId=111111&timestamp=1624024912&sqSv=1.0&sign=7d1452154870fd4df221907dfe417571&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.3.1%26utdid%3DYMymD2zO2kgDAP4QFkhx%252BYt%252B%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2128162720%26sn%3DBFCFB2FE05DD8BDAB5982FE76F419129D2603B28%26umidtoken%3DQXZLGEFLOk0OnzV6H8MNDrXwbU7eSvfi%26msv%3D8.0.0%26brand%3DApple%26imei%3D897BD769486C14773133EB505436ED132F4FE7CB%26skinVersionPrefix%3D1%26appVer%3D4.3.0.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210107%26mod%3DiPhone11%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DC070BF74-B9C4-4F11-A439-B753F2311F47"},{"key":"shuqisqjlbody15","val":"src=&userId=2128162720&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624024635&sqSv=1.0&sign=f3825ee4b30d50bb955a76a5b6b41817&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.3.1%26utdid%3DYMymD2zO2kgDAP4QFkhx%252BYt%252B%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2128162720%26sn%3DBFCFB2FE05DD8BDAB5982FE76F419129D2603B28%26umidtoken%3DYMymD2zO2kgDAP4QFkhx%252BYt%252B%26msv%3D8.0.0%26brand%3DApple%26imei%3D897BD769486C14773133EB505436ED132F4FE7CB%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone11%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DC070BF74-B9C4-4F11-A439-B753F2311F47"},{"key":"shuqicjyurl15","val":"https://ocean.shuqireader.com/api/activity/activity/v1/lottery/info?timestamp=1624024661&userId=2128162720&activityId=311&sqSv=1.0&sign=a1515d826c84d70d22052e30f3b00df9&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.3.1%26utdid%3DYMymD2zO2kgDAP4QFkhx%252BYt%252B%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2128162720%26sn%3DBFCFB2FE05DD8BDAB5982FE76F419129D2603B28%26umidtoken%3DYMymD2zO2kgDAP4QFkhx%252BYt%252B%26msv%3D8.0.0%26brand%3DApple%26imei%3D897BD769486C14773133EB505436ED132F4FE7CB%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone11%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DC070BF74-B9C4-4F11-A439-B753F2311F47"},{"key":"shuqicjcsbody15","val":"_public=skinId%3D999%26idfa%3DC070BF74-B9C4-4F11-A439-B753F2311F47%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26umidtoken%3DYMymD2zO2kgDAP4QFkhx%2BYt%2B%26user_id%3D2128162720%26sn%3DBFCFB2FE05DD8BDAB5982FE76F419129D2603B28%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D897BD769486C14773133EB505436ED132F4FE7CB%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhone11%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYMymD2zO2kgDAP4QFkhx%2BYt%2B%26utype%3Dpre_vip%26sdk%3D13.3.1&deliveryId=711&key=sq_app_ad&miniWua=HHnB_j0FnFkEK9BVwd5GL%2BWQ8jxznozxEwMica0%2BY//BEhmU%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=703&sign=4EA5992D02DA72B122F3A8B67FB7648B&timestamp=1624024639&userId=2128162720&user_id=2128162720&wua=HIVW_Ytqz7FLc22KUj8t1vEfJ0fs9D5oHl6dQl/1X122LaH8ON4itkuTfyr1790Q0kVH7B5kYIFGG1jbME3DbQVgurKrZywM8tayqTlZXSwL8YFRKkfxf/g7sfUgv5bCTvwIA7i18st1qROdAvtu6893e10dYCEq1/Orz6CoT0BoLI6XeH9/RG5UgMNRP/grUXhXacjJBjwveKzbdKNxiZrnPIrRXWjxG/qVIG8Dhobmwvjs%3D"},{"key":"shuqicjbody15","val":"wua=HIVW_m2%2BEtdG%2BVKCn5i1yp2zkbMRB43D66yYOLNlHVsDJreVnZnZbxJF4HyCACt7eX59IJn6nfg9rg8KLPtlTJWfKnNr852t%2B0Th0legTdNq4Ck9fgsVabvi9SyUGFiDEScLmBI0kNlUtT0nNmU4Nmkbn6GrhbjF0sIxhDVpfvHZr0joAvyfQ9VV79sF%2BPTqmfVOZCVPMUIkHOWE88JgdJs%2FJeY84YxXnK9cxEwRlNNPU6KA%3D&ua=&userId=2128162720&umidtoken=YMymD2zO2kgDAP4QFkhx%2BYt%2B&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&asac=2A20C07RJ9F51AOEFSNHDR&timestamp=1624024643&activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&sqSv=1.0&sign=7986485b6f98126634d0ace88c61524c&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.3.1%26utdid%3DYMymD2zO2kgDAP4QFkhx%252BYt%252B%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2128162720%26sn%3DBFCFB2FE05DD8BDAB5982FE76F419129D2603B28%26umidtoken%3DYMymD2zO2kgDAP4QFkhx%252BYt%252B%26msv%3D8.0.0%26brand%3DApple%26imei%3D897BD769486C14773133EB505436ED132F4FE7CB%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone11%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DC070BF74-B9C4-4F11-A439-B753F2311F47"},{"key":"shuqijsspbody15","val":""},{"key":"shuqijsydurl15","val":""},{"key":"shuqijsydbody15","val":""},{"key":"shuqijsqdbody15","val":""},{"key":"shuqijsqdspyurl15","val":""},{"key":"shuqijsqdspbody15","val":""},{"key":"shuqijsrwbody15","val":""},{"key":"shuqijsfxbody15","val":""},{"key":"shuqijsbookurl15","val":""},{"key":"shuqijsbookbody15","val":""},{"key":"shuqijssprwurl15","val":""},{"key":"shuqiuserurl16","val":""},{"key":"shuqisyurl16","val":""},{"key":"shuqisybody16","val":""},{"key":"shuqispbody16","val":""},{"key":"shuqiscbody16","val":""},{"key":"shuqiydbody16","val":""},{"key":"shuqiqdbody16","val":""},{"key":"shuqirwbody16","val":""},{"key":"shuqifxbody16","val":""},{"key":"shuqisprwurl16","val":""},{"key":"shuqijlbody16","val":""},{"key":"shuqisqjlbody16","val":""},{"key":"shuqicjyurl16","val":""},{"key":"shuqicjcsbody16","val":""},{"key":"shuqicjbody16","val":""},{"key":"shuqijsspbody16","val":""},{"key":"shuqijsydurl16","val":""},{"key":"shuqijsydbody16","val":""},{"key":"shuqijsqdbody16","val":""},{"key":"shuqijsqdspyurl16","val":""},{"key":"shuqijsqdspbody16","val":""},{"key":"shuqijsrwbody16","val":""},{"key":"shuqijsfxbody16","val":""},{"key":"shuqijsbookurl16","val":""},{"key":"shuqijsbookbody16","val":""},{"key":"shuqijssprwurl16","val":""},{"key":"shuqiuserurl17","val":""},{"key":"shuqisyurl17","val":""},{"key":"shuqisybody17","val":""},{"key":"shuqispbody17","val":""},{"key":"shuqiscbody17","val":""},{"key":"shuqiydbody17","val":""},{"key":"shuqiqdbody17","val":""},{"key":"shuqirwbody17","val":""},{"key":"shuqifxbody17","val":""},{"key":"shuqisprwurl17","val":""},{"key":"shuqijlbody17","val":""},{"key":"shuqisqjlbody17","val":""},{"key":"shuqicjyurl17","val":""},{"key":"shuqicjcsbody17","val":""},{"key":"shuqicjbody17","val":""},{"key":"shuqijsspbody17","val":""},{"key":"shuqijsydurl17","val":""},{"key":"shuqijsydbody17","val":""},{"key":"shuqijsqdbody17","val":""},{"key":"shuqijsqdspyurl17","val":""},{"key":"shuqijsqdspbody17","val":""},{"key":"shuqijsrwbody17","val":""},{"key":"shuqijsfxbody17","val":""},{"key":"shuqijsbookurl17","val":""},{"key":"shuqijsbookbody17","val":""},{"key":"shuqijssprwurl17","val":""},{"key":"shuqiuserurl18","val":""},{"key":"shuqisyurl18","val":""},{"key":"shuqisybody18","val":""},{"key":"shuqispbody18","val":""},{"key":"shuqiscbody18","val":""},{"key":"shuqiydbody18","val":""},{"key":"shuqiqdbody18","val":""},{"key":"shuqirwbody18","val":""},{"key":"shuqifxbody18","val":""},{"key":"shuqisprwurl18","val":""},{"key":"shuqijlbody18","val":""},{"key":"shuqisqjlbody18","val":""},{"key":"shuqicjyurl18","val":""},{"key":"shuqicjcsbody18","val":""},{"key":"shuqicjbody18","val":""},{"key":"shuqijsspbody18","val":""},{"key":"shuqijsydurl18","val":""},{"key":"shuqijsydbody18","val":""},{"key":"shuqijsqdbody18","val":""},{"key":"shuqijsqdspyurl18","val":""},{"key":"shuqijsqdspbody18","val":""},{"key":"shuqijsrwbody18","val":""},{"key":"shuqijsfxbody18","val":""},{"key":"shuqijsbookurl18","val":""},{"key":"shuqijsbookbody18","val":""},{"key":"shuqijssprwurl18","val":""},{"key":"shuqiuserurl19","val":""},{"key":"shuqisyurl19","val":""},{"key":"shuqisybody19","val":""},{"key":"shuqispbody19","val":""},{"key":"shuqiscbody19","val":""},{"key":"shuqiydbody19","val":""},{"key":"shuqiqdbody19","val":""},{"key":"shuqirwbody19","val":""},{"key":"shuqifxbody19","val":""},{"key":"shuqisprwurl19","val":""},{"key":"shuqijlbody19","val":""},{"key":"shuqisqjlbody19","val":""},{"key":"shuqicjyurl19","val":""},{"key":"shuqicjcsbody19","val":""},{"key":"shuqicjbody19","val":""},{"key":"shuqijsspbody19","val":""},{"key":"shuqijsydurl19","val":""},{"key":"shuqijsydbody19","val":""},{"key":"shuqijsqdbody19","val":""},{"key":"shuqijsqdspyurl19","val":""},{"key":"shuqijsqdspbody19","val":""},{"key":"shuqijsrwbody19","val":""},{"key":"shuqijsfxbody19","val":""},{"key":"shuqijsbookurl19","val":""},{"key":"shuqijsbookbody19","val":""},{"key":"shuqijssprwurl19","val":""},{"key":"shuqiuserurl20","val":""},{"key":"shuqisyurl20","val":""},{"key":"shuqisybody20","val":""},{"key":"shuqispbody20","val":""},{"key":"shuqiscbody20","val":""},{"key":"shuqiydbody20","val":""},{"key":"shuqiqdbody20","val":""},{"key":"shuqirwbody20","val":""},{"key":"shuqifxbody20","val":""},{"key":"shuqisprwurl20","val":""},{"key":"shuqijlbody20","val":""},{"key":"shuqisqjlbody20","val":""},{"key":"shuqicjyurl20","val":""},{"key":"shuqicjcsbody20","val":""},{"key":"shuqicjbody20","val":""},{"key":"shuqijsspbody20","val":""},{"key":"shuqijsydurl20","val":""},{"key":"shuqijsydbody20","val":""},{"key":"shuqijsqdbody20","val":""},{"key":"shuqijsqdspyurl20","val":""},{"key":"shuqijsqdspbody20","val":""},{"key":"shuqijsrwbody20","val":""},{"key":"shuqijsfxbody20","val":""},{"key":"shuqijsbookurl20","val":""},{"key":"shuqijsbookbody20","val":""},{"key":"shuqijssprwurl20","val":""}],"sessions":[],"isLoaded":true};
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
