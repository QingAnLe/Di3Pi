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
const COOKIE = {"id":"shuqi","name":"书旗小说APP","keys":["shuqiuserurl","shuqisyurl","shuqisybody","shuqispbody","shuqiscbody","shuqiydbody","shuqiqdbody","shuqirwbody","shuqifxbody","shuqisprwurl","shuqijlbody","shuqisqjlbody","shuqicjyurl","shuqicjcsbody","shuqicjbody","shuqijsspbody","shuqijsydurl","shuqijsydbody","shuqijsqdbody","shuqijsqdspyurl","shuqijsqdspbody","shuqijsrwbody","shuqijsfxbody","shuqijsbookurl","shuqijsbookbody","shuqijssprwurl","shuqiuserurl2","shuqisyurl2","shuqisybody2","shuqispbody2","shuqiscbody2","shuqiydbody2","shuqiqdbody2","shuqirwbody2","shuqifxbody2","shuqisprwurl2","shuqijlbody2","shuqisqjlbody2","shuqicjyurl2","shuqicjcsbody2","shuqicjbody2","shuqijsspbody2","shuqijsydurl2","shuqijsydbody2","shuqijsqdbody2","shuqijsqdspyurl2","shuqijsqdspbody2","shuqijsrwbody2","shuqijsfxbody2","shuqijsbookurl2","shuqijsbookbody2","shuqijssprwurl2","shuqiuserurl3","shuqisyurl3","shuqisybody3","shuqispbody3","shuqiscbody3","shuqiydbody3","shuqiqdbody3","shuqirwbody3","shuqifxbody3","shuqisprwurl3","shuqijlbody3","shuqisqjlbody3","shuqicjyurl3","shuqicjcsbody3","shuqicjbody3","shuqijsspbody3","shuqijsydurl3","shuqijsydbody3","shuqijsqdbody3","shuqijsqdspyurl3","shuqijsqdspbody3","shuqijsrwbody3","shuqijsfxbody3","shuqijsbookurl3","shuqijsbookbody3","shuqijssprwurl3","shuqiuserurl4","shuqisyurl4","shuqisybody4","shuqispbody4","shuqiscbody4","shuqiydbody4","shuqiqdbody4","shuqirwbody4","shuqifxbody4","shuqisprwurl4","shuqijlbody4","shuqisqjlbody4","shuqicjyurl4","shuqicjcsbody4","shuqicjbody4","shuqijsspbody4","shuqijsydurl4","shuqijsydbody4","shuqijsqdbody4","shuqijsqdspyurl4","shuqijsqdspbody4","shuqijsrwbody4","shuqijsfxbody4","shuqijsbookurl4","shuqijsbookbody4","shuqijssprwurl4","shuqiuserurl5","shuqisyurl5","shuqisybody5","shuqispbody5","shuqiscbody5","shuqiydbody5","shuqiqdbody5","shuqirwbody5","shuqifxbody5","shuqisprwurl5","shuqijlbody5","shuqisqjlbody5","shuqicjyurl5","shuqicjcsbody5","shuqicjbody5","shuqijsspbody5","shuqijsydurl5","shuqijsydbody5","shuqijsqdbody5","shuqijsqdspyurl5","shuqijsqdspbody5","shuqijsrwbody5","shuqijsfxbody5","shuqijsbookurl5","shuqijsbookbody5","shuqijssprwurl5","shuqiuserurl6","shuqisyurl6","shuqisybody6","shuqispbody6","shuqiscbody6","shuqiydbody6","shuqiqdbody6","shuqirwbody6","shuqifxbody6","shuqisprwurl6","shuqijlbody6","shuqisqjlbody6","shuqicjyurl6","shuqicjcsbody6","shuqicjbody6","shuqijsspbody6","shuqijsydurl6","shuqijsydbody6","shuqijsqdbody6","shuqijsqdspyurl6","shuqijsqdspbody6","shuqijsrwbody6","shuqijsfxbody6","shuqijsbookurl6","shuqijsbookbody6","shuqijssprwurl6","shuqiuserurl7","shuqisyurl7","shuqisybody7","shuqispbody7","shuqiscbody7","shuqiydbody7","shuqiqdbody7","shuqirwbody7","shuqifxbody7","shuqisprwurl7","shuqijlbody7","shuqisqjlbody7","shuqicjyurl7","shuqicjcsbody7","shuqicjbody7","shuqijsspbody7","shuqijsydurl7","shuqijsydbody7","shuqijsqdbody7","shuqijsqdspyurl7","shuqijsqdspbody7","shuqijsrwbody7","shuqijsfxbody7","shuqijsbookurl7","shuqijsbookbody7","shuqijssprwurl7","shuqiuserurl8","shuqisyurl8","shuqisybody8","shuqispbody8","shuqiscbody8","shuqiydbody8","shuqiqdbody8","shuqirwbody8","shuqifxbody8","shuqisprwurl8","shuqijlbody8","shuqisqjlbody8","shuqicjyurl8","shuqicjcsbody8","shuqicjbody8","shuqijsspbody8","shuqijsydurl8","shuqijsydbody8","shuqijsqdbody8","shuqijsqdspyurl8","shuqijsqdspbody8","shuqijsrwbody8","shuqijsfxbody8","shuqijsbookurl8","shuqijsbookbody8","shuqijssprwurl8","shuqiuserurl9","shuqisyurl9","shuqisybody9","shuqispbody9","shuqiscbody9","shuqiydbody9","shuqiqdbody9","shuqirwbody9","shuqifxbody9","shuqisprwurl9","shuqijlbody9","shuqisqjlbody9","shuqicjyurl9","shuqicjcsbody9","shuqicjbody9","shuqijsspbody9","shuqijsydurl9","shuqijsydbody9","shuqijsqdbody9","shuqijsqdspyurl9","shuqijsqdspbody9","shuqijsrwbody9","shuqijsfxbody9","shuqijsbookurl9","shuqijsbookbody9","shuqijssprwurl9","shuqiuserurl10","shuqisyurl10","shuqisybody10","shuqispbody10","shuqiscbody10","shuqiydbody10","shuqiqdbody10","shuqirwbody10","shuqifxbody10","shuqisprwurl10","shuqijlbody10","shuqisqjlbody10","shuqicjyurl10","shuqicjcsbody10","shuqicjbody10","shuqijsspbody10","shuqijsydurl10","shuqijsydbody10","shuqijsqdbody10","shuqijsqdspyurl10","shuqijsqdspbody10","shuqijsrwbody10","shuqijsfxbody10","shuqijsbookurl10","shuqijsbookbody10","shuqijssprwurl10","shuqiuserurl11","shuqisyurl11","shuqisybody11","shuqispbody11","shuqiscbody11","shuqiydbody11","shuqiqdbody11","shuqirwbody11","shuqifxbody11","shuqisprwurl11","shuqijlbody11","shuqisqjlbody11","shuqicjyurl11","shuqicjcsbody11","shuqicjbody11","shuqijsspbody11","shuqijsydurl11","shuqijsydbody11","shuqijsqdbody11","shuqijsqdspyurl11","shuqijsqdspbody11","shuqijsrwbody11","shuqijsfxbody11","shuqijsbookurl11","shuqijsbookbody11","shuqijssprwurl11","shuqiuserurl12","shuqisyurl12","shuqisybody12","shuqispbody12","shuqiscbody12","shuqiydbody12","shuqiqdbody12","shuqirwbody12","shuqifxbody12","shuqisprwurl12","shuqijlbody12","shuqisqjlbody12","shuqicjyurl12","shuqicjcsbody12","shuqicjbody12","shuqijsspbody12","shuqijsydurl12","shuqijsydbody12","shuqijsqdbody12","shuqijsqdspyurl12","shuqijsqdspbody12","shuqijsrwbody12","shuqijsfxbody12","shuqijsbookurl12","shuqijsbookbody12","shuqijssprwurl12","shuqiuserurl13","shuqisyurl13","shuqisybody13","shuqispbody13","shuqiscbody13","shuqiydbody13","shuqiqdbody13","shuqirwbody13","shuqifxbody13","shuqisprwurl13","shuqijlbody13","shuqisqjlbody13","shuqicjyurl13","shuqicjcsbody13","shuqicjbody13","shuqijsspbody13","shuqijsydurl13","shuqijsydbody13","shuqijsqdbody13","shuqijsqdspyurl13","shuqijsqdspbody13","shuqijsrwbody13","shuqijsfxbody13","shuqijsbookurl13","shuqijsbookbody13","shuqijssprwurl13","shuqiuserurl14","shuqisyurl14","shuqisybody14","shuqispbody14","shuqiscbody14","shuqiydbody14","shuqiqdbody14","shuqirwbody14","shuqifxbody14","shuqisprwurl14","shuqijlbody14","shuqisqjlbody14","shuqicjyurl14","shuqicjcsbody14","shuqicjbody14","shuqijsspbody14","shuqijsydurl14","shuqijsydbody14","shuqijsqdbody14","shuqijsqdspyurl14","shuqijsqdspbody14","shuqijsrwbody14","shuqijsfxbody14","shuqijsbookurl14","shuqijsbookbody14","shuqijssprwurl14","shuqiuserurl15","shuqisyurl15","shuqisybody15","shuqispbody15","shuqiscbody15","shuqiydbody15","shuqiqdbody15","shuqirwbody15","shuqifxbody15","shuqisprwurl15","shuqijlbody15","shuqisqjlbody15","shuqicjyurl15","shuqicjcsbody15","shuqicjbody15","shuqijsspbody15","shuqijsydurl15","shuqijsydbody15","shuqijsqdbody15","shuqijsqdspyurl15","shuqijsqdspbody15","shuqijsrwbody15","shuqijsfxbody15","shuqijsbookurl15","shuqijsbookbody15","shuqijssprwurl15","shuqiuserurl16","shuqisyurl16","shuqisybody16","shuqispbody16","shuqiscbody16","shuqiydbody16","shuqiqdbody16","shuqirwbody16","shuqifxbody16","shuqisprwurl16","shuqijlbody16","shuqisqjlbody16","shuqicjyurl16","shuqicjcsbody16","shuqicjbody16","shuqijsspbody16","shuqijsydurl16","shuqijsydbody16","shuqijsqdbody16","shuqijsqdspyurl16","shuqijsqdspbody16","shuqijsrwbody16","shuqijsfxbody16","shuqijsbookurl16","shuqijsbookbody16","shuqijssprwurl16","shuqiuserurl17","shuqisyurl17","shuqisybody17","shuqispbody17","shuqiscbody17","shuqiydbody17","shuqiqdbody17","shuqirwbody17","shuqifxbody17","shuqisprwurl17","shuqijlbody17","shuqisqjlbody17","shuqicjyurl17","shuqicjcsbody17","shuqicjbody17","shuqijsspbody17","shuqijsydurl17","shuqijsydbody17","shuqijsqdbody17","shuqijsqdspyurl17","shuqijsqdspbody17","shuqijsrwbody17","shuqijsfxbody17","shuqijsbookurl17","shuqijsbookbody17","shuqijssprwurl17","shuqiuserurl18","shuqisyurl18","shuqisybody18","shuqispbody18","shuqiscbody18","shuqiydbody18","shuqiqdbody18","shuqirwbody18","shuqifxbody18","shuqisprwurl18","shuqijlbody18","shuqisqjlbody18","shuqicjyurl18","shuqicjcsbody18","shuqicjbody18","shuqijsspbody18","shuqijsydurl18","shuqijsydbody18","shuqijsqdbody18","shuqijsqdspyurl18","shuqijsqdspbody18","shuqijsrwbody18","shuqijsfxbody18","shuqijsbookurl18","shuqijsbookbody18","shuqijssprwurl18","shuqiuserurl19","shuqisyurl19","shuqisybody19","shuqispbody19","shuqiscbody19","shuqiydbody19","shuqiqdbody19","shuqirwbody19","shuqifxbody19","shuqisprwurl19","shuqijlbody19","shuqisqjlbody19","shuqicjyurl19","shuqicjcsbody19","shuqicjbody19","shuqijsspbody19","shuqijsydurl19","shuqijsydbody19","shuqijsqdbody19","shuqijsqdspyurl19","shuqijsqdspbody19","shuqijsrwbody19","shuqijsfxbody19","shuqijsbookurl19","shuqijsbookbody19","shuqijssprwurl19","shuqiuserurl20","shuqisyurl20","shuqisybody20","shuqispbody20","shuqiscbody20","shuqiydbody20","shuqiqdbody20","shuqirwbody20","shuqifxbody20","shuqisprwurl20","shuqijlbody20","shuqisqjlbody20","shuqicjyurl20","shuqicjcsbody20","shuqicjbody20","shuqijsspbody20","shuqijsydurl20","shuqijsydbody20","shuqijsqdbody20","shuqijsqdspyurl20","shuqijsqdspbody20","shuqijsrwbody20","shuqijsfxbody20","shuqijsbookurl20","shuqijsbookbody20","shuqijssprwurl20"],"author":"@ziye","settings":[{"id":"shuqiSuffix","name":"当前账号","val":"15","type":"number","desc":"当前抓取ck记录的账号序号，如：1、2、3、"},{"id":"shuqiCount","name":"账号个数","val":"15","type":"number","desc":"指定任务最多跑几个账号，根据抓取的账号数据个数来设值"},{"id":"shuqiXH","name":"循环获取CK","val":"0","type":"number","desc":"0关闭 1开启,默认关闭"},{"id":"shuqiSC","name":"单刷时长控制","val":"0","type":"number","desc":"0关闭 1开启,默认关闭"},{"id":"shuqiTXTX","name":"提现提醒","val":"10","type":"number","desc":"0关闭 设置余额大于多少提醒"},{"id":"shuqinotifyttt","name":"推送控制","val":"1","type":"number","desc":"0关闭，1推送,默认12点以及23点推送"},{"id":"shuqinotifyInterval","name":"通知控制","val":"2","type":"number","desc":"0关闭，1为 所有通知，2为 12，23 点通知，3为 6，12，18，23 点通知 "},{"id":"shuqiMinutes","name":"推送-通知 分钟控制","val":"59","type":"number","desc":"推送以及通知控制在什么分钟段，可设置0-59,默认0到10"}],"repo":"https://cdn.jsdelivr.net/gh/ziye888/JavaScript@main/Task/shuqi.js","icons":["https://cdn.jsdelivr.net/gh/ziye888/JavaScript@main/Task/shuqi.png","https://cdn.jsdelivr.net/gh/ziye888/JavaScript@main/Task/shuqi.png"],"script":"https://cdn.jsdelivr.net/gh/ziye888/JavaScript@main/Task/shuqi.js","icon":"https://cdn.jsdelivr.net/gh/ziye888/JavaScript@main/Task/shuqi.png","favIcon":"mdi-star","favIconColor":"primary","datas":[{"key":"shuqiuserurl","val":"https://ocean.shuqireader.com/api/jaccount/accountapi/v1/sapi/account/getBindinfo?userId=2125950200&sqSv=1.0&timestamp=1624004170&sign=6aa1ac8af03d1ca09e33e9a51bb70465&key=sq_h5_gateway"},{"key":"shuqisyurl","val":"https://render.shuqireader.com/load/resource?sdk=13.3.1&utdid=YMc97Fi70swDAM8dmPsKW7nO&ustatus=0&first_placeid=111111&net_env=3g&placeid=111111&user_id=2125950200&sn=5E56AD0BB672AE2AA292258770D4203DF9FF9C6B&umidtoken=YMc97Fi70swDAM8dmPsKW7nO&msv=8.0.0&brand=Apple&imei=0403498A78C970639D660AFA45A523AB13A1E4CD&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=iOS&ver=210301&mod=UnknowniPad&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=52EF28D4-F82D-4C31-8C7B-A3FC2762C5FB"},{"key":"shuqisybody","val":"appVer=4.3.6.0&imei=0403498A78C970639D660AFA45A523AB13A1E4CD&isNewUser=1&params=%7B%22resources%22%3A%7B%22ShuqiVipEntry%22%3A%7B%7D%2C%22personalCardConfig%22%3A%7B%7D%7D%7D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=f1d6da98d845360f6937cda1eeef1a89&sn=5E56AD0BB672AE2AA292258770D4203DF9FF9C6B&soft_id=21&timestamp=1624004080&user_id=2125950200&ver=210301"},{"key":"shuqispbody","val":"_public=skinId%3D999%26idfa%3D52EF28D4-F82D-4C31-8C7B-A3FC2762C5FB%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26umidtoken%3DYMc97Fi70swDAM8dmPsKW7nO%26user_id%3D2125950200%26sn%3D5E56AD0BB672AE2AA292258770D4203DF9FF9C6B%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D0403498A78C970639D660AFA45A523AB13A1E4CD%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYMc97Fi70swDAM8dmPsKW7nO%26utype%3Dpre_vip%26sdk%3D13.3.1&deliveryId=525&key=sq_app_ad&miniWua=HHnB_mLAciBTQ%2BguTzwwNAVBZYJbfvh4LTXWpR5YnAZH5k9w%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=626&sign=CF33630B378227ECFB216977552744D5&timestamp=1624004143&userId=2125950200&user_id=2125950200&wua=HIVW_aiokSkoMIvsVvFIf96MZCFO3ypgBPvG9pi8WIu4hgV7L4GLeEFcNnGHNpnl1Om5ifUXQyP5dmx5WxUN/7C9oJOxmwJMc520NoQc8Fh%2BAMVzNWF73QzXRHbk9Ui8tb5pOy6OW72H%2BqRlG6NzvHnHm/SJkAnLagIzvYFLDpsNs07jlPryo4RTEFVOWe0Lfr7jIJPzyoh4XjI3BmhFCEKumgosWWNYBVzw9xgGGNZ7UCyQ%3D"},{"key":"shuqiscbody","val":"_public=skinId%253D999%2526idfa%253D52EF28D4-F82D-4C31-8C7B-A3FC2762C5FB%2526ustatus%253D0%2526first_placeid%253D111111%2526net_env%253D3g%2526umidtoken%253DYMc97Fi70swDAM8dmPsKW7nO%2526user_id%253D2125950200%2526sn%253D5E56AD0BB672AE2AA292258770D4203DF9FF9C6B%2526placeid%253D111111%2526msv%253D8.0.0%2526brand%253DApple%2526imei%253D0403498A78C970639D660AFA45A523AB13A1E4CD%2526skinVersionPrefix%253D1%2526appVer%253D4.3.6.0%2526skinActiveColor%253D0F9970%2526manufacturer%253DApple%2526skinColor%253D23B383%2526platform%253DiOS%2526ver%253D210301%2526mod%253DUnknowniPad%2526statusBarHeight%253D44.000000%2526skinVersion%253D1%2526wh%253D1242x2688%2526soft_id%253D21%2526utdid%253DYMc97Fi70swDAM8dmPsKW7nO%2526utype%253Dpre_vip%2526sdk%253D13.3.1&key=and_log&readingList=%5B%7B%22startTime%22%3A1624004088%2C%22readObjType%22%3A1%2C%22attr%22%3A2%2C%22readObjId%22%3A%228299790%22%2C%22readChapterId%22%3A1383000%2C%22readingLen%22%3A41%7D%5D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=B30F329EA6D5B03C80283C2BF9F8DD7E&timestamp=1624004129&user_id=2125950200"},{"key":"shuqiydbody","val":"_public=skinId%3D999%26idfa%3D52EF28D4-F82D-4C31-8C7B-A3FC2762C5FB%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26umidtoken%3DYMc97Fi70swDAM8dmPsKW7nO%26user_id%3D2125950200%26sn%3D5E56AD0BB672AE2AA292258770D4203DF9FF9C6B%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D0403498A78C970639D660AFA45A523AB13A1E4CD%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYMc97Fi70swDAM8dmPsKW7nO%26utype%3Dpre_vip%26sdk%3D13.3.1&deliveryId=707&key=sq_app_ad&miniWua=HHnB_66m5YiaCAGj0NijamT6k%2BjlzBO7Ns99zpUUJKoaMdJc%3D&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=678&sign=A5A69FE20DBACE3F19B0B530A1DFC0FC&timestamp=1624004122&userId=2125950200&wua=HIVW_Nt5NlJIUU%2BVVKVWDzd4NyGwsKoIeAIUfVX2xR/eMBb9aGHIqdGaVUmmsBRuSNrMTOAND2o8Vw6JHQIE6RNpZGYXVFfh0fyxqypsjDnUREXgW3h5hbb/UaVPcmNqnNyfNaniw7WqoghnetazBUlbaiSA9WHglUjwg6s8JkUGE56s7DygOVq5R%2BFauxZg7lhuUE03qxYn%2BEeGWItyCpbAYYiRa7yRru7gbfIZdX2/ojqU%3D"},{"key":"shuqiqdbody","val":"clientTimestamp=1624004134&position=501&userId=2125950200&signInType=1&wua=HIVW_qrxKM5QVUkWN9t5rKwD7HjV9e%2FiB6GIqKl6V9PhP%2BlWDErShob3dYyR5%2F318xidfYrYAiXvH2ZSbiaHOHbkYW7bNFqp22ScXQcmkep33ewIvc2iuHi8w%2Fc41zmAhy35NTaVikp4iDYugFdzm6h9m0hzQsj8LEueZQJoRyz%2FLEhPHHKIVnLg2dJc4wQUwinnwxtuCClpYvKDaZ25nS0t9Hynf2ZQnKLU3DU%2BUtomIYEU%3D&ua=&miniWua=HHnB_a1MS%2BYKAsklW2TxWDO%2FvYpXDjqeEifabdC9S5XbdheU%3D&umidtoken=YMc97Fi70swDAM8dmPsKW7nO&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&sign=f77ea8ddfe69d44fd6a696e9cbc81e2e&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.3.1%26utdid%3DYMc97Fi70swDAM8dmPsKW7nO%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2125950200%26sn%3D5E56AD0BB672AE2AA292258770D4203DF9FF9C6B%26umidtoken%3DYMc97Fi70swDAM8dmPsKW7nO%26msv%3D8.0.0%26brand%3DApple%26imei%3D0403498A78C970639D660AFA45A523AB13A1E4CD%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D52EF28D4-F82D-4C31-8C7B-A3FC2762C5FB"},{"key":"shuqirwbody","val":""},{"key":"shuqifxbody","val":""},{"key":"shuqisprwurl","val":"https://ocean.shuqireader.com/api/ad/adserver/v1/api/getAdInfo?appVer=4.3.6.0&placeId=111111&platform=iOS&requestSrc=h5&resourceId=626&timestamp=1624004169&user_id=2125950200&sqSv=1.0&sign=cf7387a6ba761360ae30cacbfd32a185&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.3.1%26utdid%3DYMc97Fi70swDAM8dmPsKW7nO%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2125950200%26sn%3D5E56AD0BB672AE2AA292258770D4203DF9FF9C6B%26umidtoken%3DYMc97Fi70swDAM8dmPsKW7nO%26msv%3D8.0.0%26brand%3DApple%26imei%3D0403498A78C970639D660AFA45A523AB13A1E4CD%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D52EF28D4-F82D-4C31-8C7B-A3FC2762C5FB"},{"key":"shuqijlbody","val":"requestSrc=h5&userId=2125950200&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624004148&sqSv=1.0&sign=6a5ac1986bdf006cc9a293607aaae41f&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.3.1%26utdid%3DYMc97Fi70swDAM8dmPsKW7nO%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2125950200%26sn%3D5E56AD0BB672AE2AA292258770D4203DF9FF9C6B%26umidtoken%3DYMc97Fi70swDAM8dmPsKW7nO%26msv%3D8.0.0%26brand%3DApple%26imei%3D0403498A78C970639D660AFA45A523AB13A1E4CD%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D52EF28D4-F82D-4C31-8C7B-A3FC2762C5FB"},{"key":"shuqisqjlbody","val":"src=&userId=2125950200&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624004137&sqSv=1.0&sign=f57cb98297c84f1f6a3a26275d6a70cc&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.3.1%26utdid%3DYMc97Fi70swDAM8dmPsKW7nO%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2125950200%26sn%3D5E56AD0BB672AE2AA292258770D4203DF9FF9C6B%26umidtoken%3DYMc97Fi70swDAM8dmPsKW7nO%26msv%3D8.0.0%26brand%3DApple%26imei%3D0403498A78C970639D660AFA45A523AB13A1E4CD%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D52EF28D4-F82D-4C31-8C7B-A3FC2762C5FB"},{"key":"shuqicjyurl","val":"https://ocean.shuqireader.com/api/activity/activity/v1/lottery/info?timestamp=1624004170&userId=2125950200&activityId=311&sqSv=1.0&sign=0be8881f8c44c357c4102338252e6beb&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.3.1%26utdid%3DYMc97Fi70swDAM8dmPsKW7nO%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2125950200%26sn%3D5E56AD0BB672AE2AA292258770D4203DF9FF9C6B%26umidtoken%3DYMc97Fi70swDAM8dmPsKW7nO%26msv%3D8.0.0%26brand%3DApple%26imei%3D0403498A78C970639D660AFA45A523AB13A1E4CD%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D52EF28D4-F82D-4C31-8C7B-A3FC2762C5FB"},{"key":"shuqicjcsbody","val":"_public=skinId%3D999%26idfa%3D52EF28D4-F82D-4C31-8C7B-A3FC2762C5FB%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26umidtoken%3DYMc97Fi70swDAM8dmPsKW7nO%26user_id%3D2125950200%26sn%3D5E56AD0BB672AE2AA292258770D4203DF9FF9C6B%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D0403498A78C970639D660AFA45A523AB13A1E4CD%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYMc97Fi70swDAM8dmPsKW7nO%26utype%3Dpre_vip%26sdk%3D13.3.1&deliveryId=711&key=sq_app_ad&miniWua=HHnB_8RxisM56zHcGuTJBlnF5FFWs3tEqsr9G64gXAAqv5Xg%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=703&sign=F24689B792793AB20E248D780A9025E2&timestamp=1624004152&userId=2125950200&user_id=2125950200&wua=HIVW_stePab6nCZm%2BHZIHv%2BZ1o6gel/bwXU/Z8GGxhzy/NfaHsECVOwLvqNMWiq0bSYZsdUt4rQmGOLbguxcF%2BIIkFqh8s5LbKa2hkPUN2xffS5gSA1r%2BtFLqDgsQ9PE3aQfn/%2BjS24nLMdNZZlWKZiX/%2B8hnbZUVIJvKtW9CItrLX2aGufbxeGy8w3n0xFSfyprdnXDD3OF6G/ktlx07fTz4ptslByjp74UyVVOREMGCobM%3D"},{"key":"shuqicjbody","val":"wua=HIVW_MsPlzA455hGoXuIf1KqzUn7wamkpfuqpZ9NjdkOcj8AfeR74OISUsdeAwjbIQBocusHztClTs8g8GtnTNz%2BnP16n35EoBkRBtcaXpaU%2FIHSEyy8p%2BRTONvJR%2FGfpQRgAaR2EYqJGbHztSBfLSa8c6D9bEIweSO0meM6OJtgU%2B%2BGJLBAER7VHKxCmEickT%2FTU6mmKLgcEo0TYfsWpwoW9ZYu2ECd4vkxWr3jBH%2F9cbdk%3D&ua=&userId=2125950200&umidtoken=YMc97Fi70swDAM8dmPsKW7nO&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&asac=2A20C07RJ9F51AOEFSNHDR&timestamp=1624004158&activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&sqSv=1.0&sign=6b4279fa9e1c20ffa861af5729bb34a9&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.3.1%26utdid%3DYMc97Fi70swDAM8dmPsKW7nO%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2125950200%26sn%3D5E56AD0BB672AE2AA292258770D4203DF9FF9C6B%26umidtoken%3DYMc97Fi70swDAM8dmPsKW7nO%26msv%3D8.0.0%26brand%3DApple%26imei%3D0403498A78C970639D660AFA45A523AB13A1E4CD%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D52EF28D4-F82D-4C31-8C7B-A3FC2762C5FB"},{"key":"shuqijsspbody","val":""},{"key":"shuqijsydurl","val":""},{"key":"shuqijsydbody","val":""},{"key":"shuqijsqdbody","val":""},{"key":"shuqijsqdspyurl","val":""},{"key":"shuqijsqdspbody","val":""},{"key":"shuqijsrwbody","val":""},{"key":"shuqijsfxbody","val":""},{"key":"shuqijsbookurl","val":""},{"key":"shuqijsbookbody","val":""},{"key":"shuqijssprwurl","val":""},{"key":"shuqiuserurl2","val":"https://ocean.shuqireader.com/api/jaccount/accountapi/v1/sapi/account/getBindinfo?userId=2128772516&sqSv=1.0&timestamp=1624004295&sign=1a92ef55936db19aa353b0e5e00f1887&key=sq_h5_gateway"},{"key":"shuqisyurl2","val":"https://render.shuqireader.com/load/resource?sdk=13.3&utdid=YMc%2F8YDDd5wDAJkcM3yqhndF&ustatus=0&first_placeid=111111&net_env=wifi&placeid=111111&user_id=2128772516&sn=A0EC4CDE2F806DBE77BED08090FC881D653F069F&umidtoken=YMc%2F8YDDd5wDAJkcM3yqhndF&msv=8.0.0&brand=Apple&imei=CCB273E46C68DC4407F926AE488F672FB03B9BBB&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&session=&skinColor=23B383&platform=iOS&ver=210301&mod=UnknowniPod&statusBarHeight=44.000000&skinVersion=1&wh=1242x2688&soft_id=21&utype=pre_vip&skinId=999&idfa=057C5961-C626-4391-A180-0A16A301EF44"},{"key":"shuqisybody2","val":"appVer=4.3.6.0&imei=CCB273E46C68DC4407F926AE488F672FB03B9BBB&isNewUser=1&params=%7B%22resources%22%3A%7B%22ShuqiVipEntry%22%3A%7B%7D%2C%22personalCardConfig%22%3A%7B%7D%7D%7D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=edec91e55f249592addd71f165201f7a&sn=A0EC4CDE2F806DBE77BED08090FC881D653F069F&soft_id=21&timestamp=1624004199&user_id=2128772516&ver=210301"},{"key":"shuqispbody2","val":"_public=skinId%3D999%26idfa%3D057C5961-C626-4391-A180-0A16A301EF44%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26umidtoken%3DYMc/8YDDd5wDAJkcM3yqhndF%26user_id%3D2128772516%26sn%3DA0EC4CDE2F806DBE77BED08090FC881D653F069F%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3DCCB273E46C68DC4407F926AE488F672FB03B9BBB%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DUnknowniPod%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYMc/8YDDd5wDAJkcM3yqhndF%26utype%3Dpre_vip%26sdk%3D13.3&deliveryId=525&key=sq_app_ad&miniWua=HHnB_2UCvxlQFBlxveNGwF7XU1TIYetFLh%2BfD8TLmQifC4o0%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=626&sign=C8902FD0ED59FD4382BD0960FCEF4EDB&timestamp=1624004256&userId=2128772516&user_id=2128772516&wua=HIVW_F/wI56WM4rZak5nrgheh%2BvTGYnlH5oYa7Qc/cxgh%2BTvknSGshI/43WZ8n85GpfJy5ZM%2BizO3x7AkzoU2oEzBLWpa6fLGs25SW3e5mWT9WLH1jUdR26Qpms4WroOtN3EGXttIgje14ijcQQKSjntwh/TyBHMH%2BrxVkTHrSqXbGkiVnWMMcqcr9YPD3X9cxBPotbACRr95LElfCl%2Bg6q1cJlPvgzCIe/Xo2AdnT9cDQvQ%3D"},{"key":"shuqiscbody2","val":"_public=skinId%253D999%2526idfa%253D057C5961-C626-4391-A180-0A16A301EF44%2526ustatus%253D0%2526first_placeid%253D111111%2526net_env%253Dwifi%2526umidtoken%253DYMc%252F8YDDd5wDAJkcM3yqhndF%2526user_id%253D2128772516%2526sn%253DA0EC4CDE2F806DBE77BED08090FC881D653F069F%2526placeid%253D111111%2526msv%253D8.0.0%2526brand%253DApple%2526imei%253DCCB273E46C68DC4407F926AE488F672FB03B9BBB%2526skinVersionPrefix%253D1%2526appVer%253D4.3.6.0%2526skinActiveColor%253D0F9970%2526manufacturer%253DApple%2526skinColor%253D23B383%2526platform%253DiOS%2526ver%253D210301%2526mod%253DUnknowniPod%2526statusBarHeight%253D44.000000%2526skinVersion%253D1%2526wh%253D1242x2688%2526soft_id%253D21%2526utdid%253DYMc%252F8YDDd5wDAJkcM3yqhndF%2526utype%253Dpre_vip%2526sdk%253D13.3&key=and_log&readingList=%5B%7B%22startTime%22%3A1624004209%2C%22readObjType%22%3A1%2C%22attr%22%3A2%2C%22readObjId%22%3A%227847453%22%2C%22readChapterId%22%3A1100033%2C%22readingLen%22%3A31%7D%5D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=BA861DEF2C757FC5A92C73BF2118BD3C&timestamp=1624004241&user_id=2128772516"},{"key":"shuqiydbody2","val":"_public=skinId%3D999%26idfa%3D057C5961-C626-4391-A180-0A16A301EF44%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26umidtoken%3DYMc/8YDDd5wDAJkcM3yqhndF%26user_id%3D2128772516%26sn%3DA0EC4CDE2F806DBE77BED08090FC881D653F069F%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3DCCB273E46C68DC4407F926AE488F672FB03B9BBB%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DUnknowniPod%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYMc/8YDDd5wDAJkcM3yqhndF%26utype%3Dpre_vip%26sdk%3D13.3&deliveryId=707&key=sq_app_ad&miniWua=HHnB_iS%2BEH3jnjSuK0gvcul3DXsQslitY7v4sdwLHF5beMFQ%3D&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=678&sign=919B74361B61311012227B3A56E15CC1&timestamp=1624004238&userId=2128772516&wua=HIVW_lyG/uZSX6awrJEesxYQy2/4FrTi0mSvE2P90jqDgyfo6xnoHnCxCtip1Vxm05bB%2Bt8mHSHX7%2B1X8Pno10sp9rsubTZYpcwVySE6OqRIJ8WUGYLF2TkGDmp3O2hMpdHlrfNRYrsH2hBdLdt4l0t%2BuEVf6cWiNZq7ccXvHrPiGeb1P%2BR/qFDxEcoLoGeuEEfERK6%2BRMx2OK/2MLkJ%2B2ihK0BXC49sSQ5Qjwpb5Sa1OaZE%3D"},{"key":"shuqiqdbody2","val":"clientTimestamp=1624004204&position=501&userId=2128772516&signInType=1&wua=HIVW_ln9BgMZB6Q72hzYsjIhMoSkybRwr9sIsNcd6KzsmvbyY9EmQYk9YI94izikfEZdqp09YsMwxFanlWNfujw4T8Kdd1a0IkMuJdOG2Nc%2FVAzIulNpZCxbima79sOEsCsH8C6BN%2F0NGhipHTaRzwybomcj5NxKtTYMf7seA1PQAG5boqzBYVQOEXlTreiYgUZaWK2vLwX5Cj%2FOkUNvIEcSPVlYixn%2FiLYIXvjpLg%2Fnz32c%3D&ua=&miniWua=HHnB_eh%2BcuYlipC2qGWpDUgcoCz%2Bi0hhsQT3ADMvoF6mu%2Bbo%3D&umidtoken=YMc%2F8YDDd5wDAJkcM3yqhndF&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&sign=71fda7f82851dfc0a65c9cb9459e6cd6&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26sdk%3D13.3%26utdid%3DYMc%252F8YDDd5wDAJkcM3yqhndF%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2128772516%26sn%3DA0EC4CDE2F806DBE77BED08090FC881D653F069F%26umidtoken%3DYMc%252F8YDDd5wDAJkcM3yqhndF%26msv%3D8.0.0%26brand%3DApple%26imei%3DCCB273E46C68DC4407F926AE488F672FB03B9BBB%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPod%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D057C5961-C626-4391-A180-0A16A301EF44"},{"key":"shuqirwbody2","val":""},{"key":"shuqifxbody2","val":""},{"key":"shuqisprwurl2","val":"https://ocean.shuqireader.com/api/ad/adserver/v1/api/getAdInfo?appVer=4.3.6.0&placeId=111111&platform=iOS&requestSrc=h5&resourceId=626&timestamp=1624004293&user_id=2128772516&sqSv=1.0&sign=48dbd2fe66c53c5cea339d80327ddb52&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26sdk%3D13.3%26utdid%3DYMc%252F8YDDd5wDAJkcM3yqhndF%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2128772516%26sn%3DA0EC4CDE2F806DBE77BED08090FC881D653F069F%26umidtoken%3DYMc%252F8YDDd5wDAJkcM3yqhndF%26msv%3D8.0.0%26brand%3DApple%26imei%3DCCB273E46C68DC4407F926AE488F672FB03B9BBB%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPod%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D057C5961-C626-4391-A180-0A16A301EF44"},{"key":"shuqijlbody2","val":"requestSrc=h5&userId=2128772516&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624004273&sqSv=1.0&sign=0cd0cc0f895b4edf58857da56a10f56a&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26sdk%3D13.3%26utdid%3DYMc%252F8YDDd5wDAJkcM3yqhndF%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2128772516%26sn%3DA0EC4CDE2F806DBE77BED08090FC881D653F069F%26umidtoken%3DYMc%252F8YDDd5wDAJkcM3yqhndF%26msv%3D8.0.0%26brand%3DApple%26imei%3DCCB273E46C68DC4407F926AE488F672FB03B9BBB%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPod%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D057C5961-C626-4391-A180-0A16A301EF44"},{"key":"shuqisqjlbody2","val":"src=&userId=2128772516&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624004246&sqSv=1.0&sign=f6d58e86740367e440d99bb90e139986&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26sdk%3D13.3%26utdid%3DYMc%252F8YDDd5wDAJkcM3yqhndF%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2128772516%26sn%3DA0EC4CDE2F806DBE77BED08090FC881D653F069F%26umidtoken%3DYMc%252F8YDDd5wDAJkcM3yqhndF%26msv%3D8.0.0%26brand%3DApple%26imei%3DCCB273E46C68DC4407F926AE488F672FB03B9BBB%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPod%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D057C5961-C626-4391-A180-0A16A301EF44"},{"key":"shuqicjyurl2","val":"https://ocean.shuqireader.com/api/activity/activity/v1/lottery/info?timestamp=1624004296&userId=2128772516&activityId=311&sqSv=1.0&sign=4bdb1d80ec49af40fe91a81443bcda95&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.3%26utdid%3DYMc%252F8YDDd5wDAJkcM3yqhndF%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2128772516%26sn%3DA0EC4CDE2F806DBE77BED08090FC881D653F069F%26umidtoken%3DYMc%252F8YDDd5wDAJkcM3yqhndF%26msv%3D8.0.0%26brand%3DApple%26imei%3DCCB273E46C68DC4407F926AE488F672FB03B9BBB%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPod%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D057C5961-C626-4391-A180-0A16A301EF44"},{"key":"shuqicjcsbody2","val":"_public=skinId%3D999%26idfa%3D057C5961-C626-4391-A180-0A16A301EF44%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26umidtoken%3DYMc/8YDDd5wDAJkcM3yqhndF%26user_id%3D2128772516%26sn%3DA0EC4CDE2F806DBE77BED08090FC881D653F069F%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3DCCB273E46C68DC4407F926AE488F672FB03B9BBB%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DUnknowniPod%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYMc/8YDDd5wDAJkcM3yqhndF%26utype%3Dpre_vip%26sdk%3D13.3&deliveryId=711&key=sq_app_ad&miniWua=HHnB_7EIYAIDA99j0l2srKRkUasIIDpANG/dYZwPcCksVkOw%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=703&sign=9FE7E6E0A591779A5E49617F38483232&timestamp=1624004278&userId=2128772516&user_id=2128772516&wua=HIVW_jOhA7NSa058XejOTvYDPp3XqfmmLSO98xvBVMCrGCVdqT8/jKL98%2BHdMA9vuqnfLXhfjyy%2BTw0F9%2BwMW9i6ULAStS/ia/DgA1QvMCDSt0Ht4PAVOJZ2wltmcWdjsO8wJmsj4D%2B02MrSiAqnCkN9Yk64w58%2B0FEyB9J%2B5eZpomJmVcBAJdWrxlwr3o1QqR1R7XGGmGyTJ7VOOl5ToXZIy5eygKBFgA3jlS%2BhQa5su3DM%3D"},{"key":"shuqicjbody2","val":"wua=HIVW_oI4IWZB%2FeLPybux0i45qX%2FN9g02Rp7ogRZijMV%2F7rOo5XfTErKucpw9WYh9vtfLv5NjOcxD1%2BFg%2BRpVAsDeJP5LQxqn2ZIUcDGWEdOEb9D9ob5YHdA1BTSgeM1%2BCrm%2BTpbV8SdAixfMvAajmPJGEbaHvhdKJFqCsbsbsNgmQcqmskwXog2nkMzd0bbiU9wevvJwVE%2BZnQfiSEtmqH0X%2FBmGuoVs9cd7fovwkEQiKHU4%3D&ua=&userId=2128772516&umidtoken=YMc%2F8YDDd5wDAJkcM3yqhndF&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&asac=2A20C07RJ9F51AOEFSNHDR&timestamp=1624004281&activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&sqSv=1.0&sign=18cd7fa5246b39ac74361c43b73c1c86&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.3%26utdid%3DYMc%252F8YDDd5wDAJkcM3yqhndF%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2128772516%26sn%3DA0EC4CDE2F806DBE77BED08090FC881D653F069F%26umidtoken%3DYMc%252F8YDDd5wDAJkcM3yqhndF%26msv%3D8.0.0%26brand%3DApple%26imei%3DCCB273E46C68DC4407F926AE488F672FB03B9BBB%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPod%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D057C5961-C626-4391-A180-0A16A301EF44"},{"key":"shuqijsspbody2","val":""},{"key":"shuqijsydurl2","val":""},{"key":"shuqijsydbody2","val":""},{"key":"shuqijsqdbody2","val":""},{"key":"shuqijsqdspyurl2","val":""},{"key":"shuqijsqdspbody2","val":""},{"key":"shuqijsrwbody2","val":""},{"key":"shuqijsfxbody2","val":""},{"key":"shuqijsbookurl2","val":""},{"key":"shuqijsbookbody2","val":""},{"key":"shuqijssprwurl2","val":""},{"key":"shuqiuserurl3","val":"https://ocean.shuqireader.com/api/jaccount/accountapi/v1/sapi/account/getBindinfo?userId=2126743663&sqSv=1.0&timestamp=1624004620&sign=df48ffcc026f4e430916e2e33daf8d93&key=sq_h5_gateway"},{"key":"shuqisyurl3","val":"https://render.shuqireader.com/load/resource?sdk=13.0&utdid=YMdOlg4s5X0DAAqIxAXv4f87&ustatus=0&first_placeid=111111&net_env=4g&placeid=111111&user_id=2126743663&sn=D8B311C01F078469F82EB06AD6948E7560BEC20B&umidtoken=YMdOlg4s5X0DAAqIxAXv4f87&msv=8.0.0&brand=Apple&imei=EDCE5CD7112C245F68408F044455D30E257D139B&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=iOS&ver=210301&mod=iPhoneXS&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=855A0FF4-5900-49B8-848E-A8A16D62C058"},{"key":"shuqisybody3","val":"appVer=4.3.6.0&imei=EDCE5CD7112C245F68408F044455D30E257D139B&isNewUser=1&params=%7B%22resources%22%3A%7B%22ShuqiVipEntry%22%3A%7B%7D%2C%22personalCardConfig%22%3A%7B%7D%7D%7D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=2a307e52e3ae058d94f969b2d68177a9&sn=D8B311C01F078469F82EB06AD6948E7560BEC20B&soft_id=21&timestamp=1624004310&user_id=2126743663&ver=210301"},{"key":"shuqispbody3","val":"_public=skinId%3D999%26idfa%3D855A0FF4-5900-49B8-848E-A8A16D62C058%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26umidtoken%3DYMdOlg4s5X0DAAqIxAXv4f87%26user_id%3D2126743663%26sn%3DD8B311C01F078469F82EB06AD6948E7560BEC20B%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3DEDCE5CD7112C245F68408F044455D30E257D139B%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhoneXS%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYMdOlg4s5X0DAAqIxAXv4f87%26utype%3Dpre_vip%26sdk%3D13.0&deliveryId=525&key=sq_app_ad&miniWua=HHnB_5Vz7Ip0GUOlJSqOkJL/kVWpgQBMyE79F/pXcZJQK0UI%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=626&sign=06EAD591435E9957F201BE71946A60F2&timestamp=1624004359&userId=2126743663&user_id=2126743663&wua=HIVW_VqLb1PyqiECL8hZs17U/zxA/n5lcDuX3ZWMB4YKnqSbezmx7p5BASwKlv3YU4ik4epXhm2GE/WkRrKbDjYRlAyNDxP2zdYCqM147NIE49fNzvbxkcqlmMy119fsFZa1OYSz4E%2BPK0YcOu3Yr%2BOW%2Bv6lgiEtGG6lZckByT8N2dqP9Nva8yDCQfa9ntSW9JvXMgZ6WWbdkTKL/zeMYZPjt1oNp3zQup356XBbY1eh1pzw%3D"},{"key":"shuqiscbody3","val":"_public=skinId%253D999%2526idfa%253D855A0FF4-5900-49B8-848E-A8A16D62C058%2526ustatus%253D0%2526first_placeid%253D111111%2526net_env%253D4g%2526umidtoken%253DYMdOlg4s5X0DAAqIxAXv4f87%2526user_id%253D2126743663%2526sn%253DD8B311C01F078469F82EB06AD6948E7560BEC20B%2526placeid%253D111111%2526msv%253D8.0.0%2526brand%253DApple%2526imei%253DEDCE5CD7112C245F68408F044455D30E257D139B%2526skinVersionPrefix%253D1%2526appVer%253D4.3.6.0%2526skinActiveColor%253D0F9970%2526manufacturer%253DApple%2526skinColor%253D23B383%2526platform%253DiOS%2526ver%253D210301%2526mod%253DiPhoneXS%2526statusBarHeight%253D44.000000%2526skinVersion%253D1%2526wh%253D1242x2688%2526soft_id%253D21%2526utdid%253DYMdOlg4s5X0DAAqIxAXv4f87%2526utype%253Dpre_vip%2526sdk%253D13.0&key=and_log&readingList=%5B%7B%22startTime%22%3A1624004312%2C%22readObjType%22%3A1%2C%22attr%22%3A2%2C%22readObjId%22%3A%227847453%22%2C%22readChapterId%22%3A1113020%2C%22readingLen%22%3A33%7D%5D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=2819D19D07F04D91BDFB617BA653D14A&timestamp=1624004345&user_id=2126743663"},{"key":"shuqiydbody3","val":"_public=skinId%3D999%26idfa%3D855A0FF4-5900-49B8-848E-A8A16D62C058%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26umidtoken%3DYMdOlg4s5X0DAAqIxAXv4f87%26user_id%3D2126743663%26sn%3DD8B311C01F078469F82EB06AD6948E7560BEC20B%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3DEDCE5CD7112C245F68408F044455D30E257D139B%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhoneXS%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYMdOlg4s5X0DAAqIxAXv4f87%26utype%3Dpre_vip%26sdk%3D13.0&deliveryId=707&key=sq_app_ad&miniWua=HHnB_Au4EBruUlvcc0NIbmypFiiSM%2BdYvPJMH7Ln1jRUEW04%3D&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=678&sign=D4E57237293D4AD88CAC1C1C9DEB7DD0&timestamp=1624004342&userId=2126743663&wua=HIVW_45Zmmp/BXNjomMJ06BTGaKpteTS7PwP4orGn7ndUgYibgsLhhHzcbOw%2BSfP0bbPiDMWDh0pw9SbOei%2BMOoutNrpr1E6gpC64UQWOd9QVreMoFKps5y5OIZ/cKmAh0YzERDX/rb0TUJJ4uu7T4wfJw7hStwK3CqVZchOKgZRYR6sNlJnai2MNA6XZ2GunB5AS8b6SdWOM/N%2BTTQTUqCuF7ucNGB1jqPugvtv6VALkWb4%3D"},{"key":"shuqiqdbody3","val":"clientTimestamp=1624004354&position=501&userId=2126743663&signInType=1&wua=HIVW_7dswqA41Ba0JeWYOqIN1USGqlxfLBv61wU3y9h121AyHDbRt8QYw%2Fold15TuiBhIyl%2FsG1dAfxmEwcay9IlldrYuMH%2BnVi%2BMhfG6iNY%2FDE2RR9W3CCnWueG8JF3pYlnx41plHwU342f3wpBBWsYxJ2B3byN7Wh9RbE%2BAOq5axWHTMxecDPdu5n0uHzxmezdn1meeJZOkddVhkPRi7GpeRp%2F94PeehWVPnXLZixWu0Fc%3D&ua=&miniWua=HHnB_qLwpgMzcHOCZ7GtN28CuaN9%2FoQfyQbLQEgKAsLH8QZE%3D&umidtoken=YMdOlg4s5X0DAAqIxAXv4f87&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&sign=8475e972fb6b679b79869b460385bec9&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26sdk%3D13.0%26utdid%3DYMdOlg4s5X0DAAqIxAXv4f87%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2126743663%26sn%3DD8B311C01F078469F82EB06AD6948E7560BEC20B%26umidtoken%3DYMdOlg4s5X0DAAqIxAXv4f87%26msv%3D8.0.0%26brand%3DApple%26imei%3DEDCE5CD7112C245F68408F044455D30E257D139B%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhoneXS%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D855A0FF4-5900-49B8-848E-A8A16D62C058"},{"key":"shuqirwbody3","val":""},{"key":"shuqifxbody3","val":""},{"key":"shuqisprwurl3","val":"https://ocean.shuqireader.com/api/ad/adserver/v1/api/getAdInfo?appVer=4.3.6.0&placeId=111111&platform=iOS&requestSrc=h5&resourceId=626&timestamp=1624004618&user_id=2126743663&sqSv=1.0&sign=7817cbfa1d845151ab2966b346901e28&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26sdk%3D13.0%26utdid%3DYMdOlg4s5X0DAAqIxAXv4f87%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2126743663%26sn%3DD8B311C01F078469F82EB06AD6948E7560BEC20B%26umidtoken%3DYMdOlg4s5X0DAAqIxAXv4f87%26msv%3D8.0.0%26brand%3DApple%26imei%3DEDCE5CD7112C245F68408F044455D30E257D139B%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhoneXS%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D855A0FF4-5900-49B8-848E-A8A16D62C058"},{"key":"shuqijlbody3","val":"requestSrc=h5&userId=2126743663&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624004365&sqSv=1.0&sign=57983a2c0b219ace20c1bd5260cbd886&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26sdk%3D13.0%26utdid%3DYMdOlg4s5X0DAAqIxAXv4f87%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2126743663%26sn%3DD8B311C01F078469F82EB06AD6948E7560BEC20B%26umidtoken%3DYMdOlg4s5X0DAAqIxAXv4f87%26msv%3D8.0.0%26brand%3DApple%26imei%3DEDCE5CD7112C245F68408F044455D30E257D139B%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhoneXS%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D855A0FF4-5900-49B8-848E-A8A16D62C058"},{"key":"shuqisqjlbody3","val":"src=&userId=2126743663&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624004351&sqSv=1.0&sign=5cb8ab2d02bb1c07a80ab3b1b38b1a2c&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26sdk%3D13.0%26utdid%3DYMdOlg4s5X0DAAqIxAXv4f87%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2126743663%26sn%3DD8B311C01F078469F82EB06AD6948E7560BEC20B%26umidtoken%3DYMdOlg4s5X0DAAqIxAXv4f87%26msv%3D8.0.0%26brand%3DApple%26imei%3DEDCE5CD7112C245F68408F044455D30E257D139B%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhoneXS%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D855A0FF4-5900-49B8-848E-A8A16D62C058"},{"key":"shuqicjyurl3","val":"https://ocean.shuqireader.com/api/activity/activity/v1/lottery/info?timestamp=1624004621&userId=2126743663&activityId=311&sqSv=1.0&sign=458dfd8add0e3a7585758f5df967dc28&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.0%26utdid%3DYMdOlg4s5X0DAAqIxAXv4f87%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2126743663%26sn%3DD8B311C01F078469F82EB06AD6948E7560BEC20B%26umidtoken%3DYMdOlg4s5X0DAAqIxAXv4f87%26msv%3D8.0.0%26brand%3DApple%26imei%3DEDCE5CD7112C245F68408F044455D30E257D139B%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhoneXS%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D855A0FF4-5900-49B8-848E-A8A16D62C058"},{"key":"shuqicjcsbody3","val":"_public=skinId%3D999%26idfa%3D855A0FF4-5900-49B8-848E-A8A16D62C058%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26umidtoken%3DYMdOlg4s5X0DAAqIxAXv4f87%26user_id%3D2126743663%26sn%3DD8B311C01F078469F82EB06AD6948E7560BEC20B%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3DEDCE5CD7112C245F68408F044455D30E257D139B%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhoneXS%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYMdOlg4s5X0DAAqIxAXv4f87%26utype%3Dpre_vip%26sdk%3D13.0&deliveryId=711&key=sq_app_ad&miniWua=HHnB_Sk11bXN8v9yGAhYEUxe4XvjL1k8idhu0RRjqlcO9fBs%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=703&sign=0619C4E95CA6DD6D9E14231D04A58912&timestamp=1624004370&userId=2126743663&user_id=2126743663&wua=HIVW_lwZ2FiT/tqwQgTV5Wbxv/ltTCibtPko8zhazDBa0HvmBJ9ZLwbMX4IymJMKYVnW4sHddsnGyi%2BYAuB07Ir7OgQYNcXZ8wLUHexnIqa1kOXPIIWz4EKOP8Y41Utgf0fe1MplIzQ2oMFYk9yoH2dvebaxY5VNtRuvU5SMohDvo%2BnoX0yOz4Wu2WJ604lR13EAR5pRXq/yNwmzuub7T7UTSiITF4CM%2B5GGn40scrbBViTs%3D"},{"key":"shuqicjbody3","val":"wua=HIVW_%2Bwwxz%2F8s4BZ8fZDA1%2FfTk64VC0a9WFNpa87FinkqsW1tZ0f6Q8r6UatTO0GIwFvLUC1CAO8H2ixUpGIZif2YnznHpSq20ZNYE%2BISiMKqbeN8PVNKSB3%2B9FhkycCG%2FhmUdP0c0fljp80NoalAd7YprMheHfr1mcXw9qgXUcrIxB0%2FBcnN59fFjXD7A9NsZuypFwxsZPoWkba0VLSbrU5IaW8Wq80W%2FjUUuRHuy%2BT%2BogU%3D&ua=&userId=2126743663&umidtoken=YMdOlg4s5X0DAAqIxAXv4f87&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&asac=2A20C07RJ9F51AOEFSNHDR&timestamp=1624004378&activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&sqSv=1.0&sign=c34616de3caed6806db99495bd75cec5&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.0%26utdid%3DYMdOlg4s5X0DAAqIxAXv4f87%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2126743663%26sn%3DD8B311C01F078469F82EB06AD6948E7560BEC20B%26umidtoken%3DYMdOlg4s5X0DAAqIxAXv4f87%26msv%3D8.0.0%26brand%3DApple%26imei%3DEDCE5CD7112C245F68408F044455D30E257D139B%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhoneXS%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D855A0FF4-5900-49B8-848E-A8A16D62C058"},{"key":"shuqijsspbody3","val":""},{"key":"shuqijsydurl3","val":""},{"key":"shuqijsydbody3","val":""},{"key":"shuqijsqdbody3","val":""},{"key":"shuqijsqdspyurl3","val":""},{"key":"shuqijsqdspbody3","val":""},{"key":"shuqijsrwbody3","val":""},{"key":"shuqijsfxbody3","val":""},{"key":"shuqijsbookurl3","val":""},{"key":"shuqijsbookbody3","val":""},{"key":"shuqijssprwurl3","val":""},{"key":"shuqiuserurl4","val":"https://ocean.shuqireader.com/api/jaccount/accountapi/v1/sapi/account/getBindinfo?userId=2127528236&sqSv=1.0&timestamp=1624004727&sign=4701e6ffa34ee5d5529adb9a7116d7ab&key=sq_h5_gateway"},{"key":"shuqisyurl4","val":"https://render.shuqireader.com/load/resource?sdk=13.4.1&utdid=YMdOlg4s5X0DAAqIxAXv4f87&ustatus=0&first_placeid=111111&net_env=3g&placeid=111111&user_id=2127528236&sn=B9E6D1CC640953474383E26DE36917356AEB31E1&umidtoken=YMdOlg4s5X0DAAqIxAXv4f87&msv=8.0.0&brand=Apple&imei=514C8087A778CF237D34224997AC277DD9BC6A65&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=iOS&ver=210301&mod=UnknowniPad&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=D1699423-13B1-43A8-A673-32817D19AADF"},{"key":"shuqisybody4","val":"appVer=4.3.6.0&imei=514C8087A778CF237D34224997AC277DD9BC6A65&isNewUser=1&params=%7B%22resources%22%3A%7B%22ShuqiVipEntry%22%3A%7B%7D%2C%22personalCardConfig%22%3A%7B%7D%7D%7D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=89a8e348ab8f0a55ba12147ad57efb87&sn=B9E6D1CC640953474383E26DE36917356AEB31E1&soft_id=21&timestamp=1624004639&user_id=2127528236&ver=210301"},{"key":"shuqispbody4","val":"_public=skinId%3D999%26idfa%3DD1699423-13B1-43A8-A673-32817D19AADF%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26umidtoken%3DYMdOlg4s5X0DAAqIxAXv4f87%26user_id%3D2127528236%26sn%3DB9E6D1CC640953474383E26DE36917356AEB31E1%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D514C8087A778CF237D34224997AC277DD9BC6A65%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYMdOlg4s5X0DAAqIxAXv4f87%26utype%3Dpre_vip%26sdk%3D13.4.1&deliveryId=525&key=sq_app_ad&miniWua=HHnB_E76WAeaj0OV0/m/r3U1OQYGjZSwSD1F6YAJ73qtSAI4%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=626&sign=D6B2ABA29D0D1F331BF024CC88F59609&timestamp=1624004698&userId=2127528236&user_id=2127528236&wua=HIVW_831NGWexvChDl5sFDWTm94w0BlRKc8tt1zAYB3Y2j4YspTJ8KbCRybvMdcj5e0JgjSfdEBwUdQTkDnDH1gIHsPQtHBs8hplttL5ncjg%2B6gS2OefjZHhJmfrdPD4oQQLRd/PsmBWCmsc0/uB5fGUpsE7yZlURAiAHEFWadunmulMKeLg8uLQqXBFm%2BUoGDI0mAo154M30rOVpWXIJZUVyR/npTNNmGEpRaHi5uQIyWEw%3D"},{"key":"shuqiscbody4","val":"_public=skinId%253D999%2526idfa%253DD1699423-13B1-43A8-A673-32817D19AADF%2526ustatus%253D0%2526first_placeid%253D111111%2526net_env%253D3g%2526umidtoken%253DYMdOlg4s5X0DAAqIxAXv4f87%2526user_id%253D2127528236%2526sn%253DB9E6D1CC640953474383E26DE36917356AEB31E1%2526placeid%253D111111%2526msv%253D8.0.0%2526brand%253DApple%2526imei%253D514C8087A778CF237D34224997AC277DD9BC6A65%2526skinVersionPrefix%253D1%2526appVer%253D4.3.6.0%2526skinActiveColor%253D0F9970%2526manufacturer%253DApple%2526skinColor%253D23B383%2526platform%253DiOS%2526ver%253D210301%2526mod%253DUnknowniPad%2526statusBarHeight%253D44.000000%2526skinVersion%253D1%2526wh%253D1242x2688%2526soft_id%253D21%2526utdid%253DYMdOlg4s5X0DAAqIxAXv4f87%2526utype%253Dpre_vip%2526sdk%253D13.4.1&key=and_log&readingList=%5B%7B%22startTime%22%3A1624004643%2C%22readObjType%22%3A1%2C%22attr%22%3A2%2C%22readObjId%22%3A%227847453%22%2C%22readChapterId%22%3A1125199%2C%22readingLen%22%3A45%7D%5D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=F37A41414C76D4E5CF5C71E8CE5F46D0&timestamp=1624004689&user_id=2127528236"},{"key":"shuqiydbody4","val":"_public=skinId%3D999%26idfa%3DD1699423-13B1-43A8-A673-32817D19AADF%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26umidtoken%3DYMdOlg4s5X0DAAqIxAXv4f87%26user_id%3D2127528236%26sn%3DB9E6D1CC640953474383E26DE36917356AEB31E1%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D514C8087A778CF237D34224997AC277DD9BC6A65%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYMdOlg4s5X0DAAqIxAXv4f87%26utype%3Dpre_vip%26sdk%3D13.4.1&deliveryId=707&key=sq_app_ad&miniWua=HHnB_9aOgdqZE6x02fvxABTI/Pa%2BWfz2bBdtl4pcgbz/jMec%3D&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=678&sign=0339712EE0559F53BB561CC2935A6112&timestamp=1624004676&userId=2127528236&wua=HIVW_B4G9uPI3Ns/DmSuplfpWM34VeXd3KPmxNQqGQo29qB3E9MHJPKc1xE13RdvsO1BVQpPf67ytnGc7BcBK44fc263ILcPRgkPI6nE6PaEO8Rboewhtid5qmttLE2b2tLtMuv3kz61Q%2B5NoEwQ/cq8ZSV4x4v/y0WxeIzsss2M1MoYq05tB68vtwp3rOJTrr0w5oqOyM3lnbDpnrgGAbKfAS8KnXcuXuv1uVrW4/Yshcfo%3D"},{"key":"shuqiqdbody4","val":"clientTimestamp=1624004692&position=501&userId=2127528236&signInType=1&wua=HIVW_4JzsXnBaMtJ08EVrJuNNjgZ%2B9JnHBKIFjh6afz3SIKMxU93E3Ht%2FGnzjxElfZsuo1PPg3btWfh37F7sYKFhrM%2BwtnIjSH7XsjxR7024%2BSjlyCp9wKZ9uGEjxcXkZhdi%2F8wQd1KA8DWafWSX8v6o6VqRgqen1wzfEdAIY11GsmSwAiLzNUIY0Ki04oWaoIgine4NnLkvpjxFVjhcezRO4b6JCtYx7Bp63OnG464%2FqJE8%3D&ua=&miniWua=HHnB_%2FUaa%2B1Mog6a2YB9GKPkEp5Nw5NfHIvqSOVKlhh7RwMw%3D&umidtoken=YMdOlg4s5X0DAAqIxAXv4f87&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&sign=7e893c0b4033844eb9f37129dc1a12a7&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.4.1%26utdid%3DYMdOlg4s5X0DAAqIxAXv4f87%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2127528236%26sn%3DB9E6D1CC640953474383E26DE36917356AEB31E1%26umidtoken%3DYMdOlg4s5X0DAAqIxAXv4f87%26msv%3D8.0.0%26brand%3DApple%26imei%3D514C8087A778CF237D34224997AC277DD9BC6A65%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DD1699423-13B1-43A8-A673-32817D19AADF"},{"key":"shuqirwbody4","val":""},{"key":"shuqifxbody4","val":""},{"key":"shuqisprwurl4","val":"https://ocean.shuqireader.com/api/ad/adserver/v1/api/getAdInfo?appVer=4.3.6.0&placeId=111111&platform=iOS&requestSrc=h5&resourceId=626&timestamp=1624004727&user_id=2127528236&sqSv=1.0&sign=696f111e7256d51597da96f8f6c18615&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.4.1%26utdid%3DYMdOlg4s5X0DAAqIxAXv4f87%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2127528236%26sn%3DB9E6D1CC640953474383E26DE36917356AEB31E1%26umidtoken%3DYMdOlg4s5X0DAAqIxAXv4f87%26msv%3D8.0.0%26brand%3DApple%26imei%3D514C8087A778CF237D34224997AC277DD9BC6A65%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DD1699423-13B1-43A8-A673-32817D19AADF"},{"key":"shuqijlbody4","val":"requestSrc=h5&userId=2127528236&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624004703&sqSv=1.0&sign=db2006180a291d7b856870dc6a24887c&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.4.1%26utdid%3DYMdOlg4s5X0DAAqIxAXv4f87%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2127528236%26sn%3DB9E6D1CC640953474383E26DE36917356AEB31E1%26umidtoken%3DYMdOlg4s5X0DAAqIxAXv4f87%26msv%3D8.0.0%26brand%3DApple%26imei%3D514C8087A778CF237D34224997AC277DD9BC6A65%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DD1699423-13B1-43A8-A673-32817D19AADF"},{"key":"shuqisqjlbody4","val":"src=&userId=2127528236&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624004695&sqSv=1.0&sign=c4c524a10f21d301abaac95af3a93760&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.4.1%26utdid%3DYMdOlg4s5X0DAAqIxAXv4f87%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2127528236%26sn%3DB9E6D1CC640953474383E26DE36917356AEB31E1%26umidtoken%3DYMdOlg4s5X0DAAqIxAXv4f87%26msv%3D8.0.0%26brand%3DApple%26imei%3D514C8087A778CF237D34224997AC277DD9BC6A65%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DD1699423-13B1-43A8-A673-32817D19AADF"},{"key":"shuqicjyurl4","val":"https://ocean.shuqireader.com/api/activity/activity/v1/lottery/info?timestamp=1624004729&userId=2127528236&activityId=311&sqSv=1.0&sign=444c21ab64e4e9fd8e87328fe664b425&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.4.1%26utdid%3DYMdOlg4s5X0DAAqIxAXv4f87%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2127528236%26sn%3DB9E6D1CC640953474383E26DE36917356AEB31E1%26umidtoken%3DYMdOlg4s5X0DAAqIxAXv4f87%26msv%3D8.0.0%26brand%3DApple%26imei%3D514C8087A778CF237D34224997AC277DD9BC6A65%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DD1699423-13B1-43A8-A673-32817D19AADF"},{"key":"shuqicjcsbody4","val":"_public=skinId%3D999%26idfa%3DD1699423-13B1-43A8-A673-32817D19AADF%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26umidtoken%3DYMdOlg4s5X0DAAqIxAXv4f87%26user_id%3D2127528236%26sn%3DB9E6D1CC640953474383E26DE36917356AEB31E1%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D514C8087A778CF237D34224997AC277DD9BC6A65%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYMdOlg4s5X0DAAqIxAXv4f87%26utype%3Dpre_vip%26sdk%3D13.4.1&deliveryId=711&key=sq_app_ad&miniWua=HHnB_n93WocY6VAyVtZjuarw8R9Exo%2Bfuj51d5qXwse9eLmM%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=703&sign=01D837B91FD0C160FCE0FA176D4EA83A&timestamp=1624004709&userId=2127528236&user_id=2127528236&wua=HIVW_phtZJK%2BH7RU7hZeF7swNbNnj2We1UYD6sRmPXKgKC9mkRXM8gjPW%2BTSKEk85yoM0N0PfF5t9nI5C69z0XM5zA%2Bk9x0Kt8JAq5KheH/eYMcsMacARc8knMjJPN1%2BVOmNgPtRMLMhGW6gaePkqWecob9yickRZF00CFJcjT1wl36YekvM44Pey/yD/tzfQhMoh3QbEJtx9uixT78rvFqk8XNOpo7s0uyi/o9OYXjzS1Ao%3D"},{"key":"shuqicjbody4","val":"wua=HIVW_a6ngQiqy4O%2B%2Fh%2BI3xzbMKN3kyRnF6j3p2etBwUfW29Im7fLkaeYTbEsRZue5TkJ5m%2F6GMHk9HmPP88OSizq64V4E%2FxoFMO8O5Sfvr9qqBZQjp4Lwuq4P1XS%2ByWtQHc6qKGhCAyYJjv5XJJEhkFRjtb7YmuXJxtgY7tULpnFvtsRVA%2B2ad1vUKXpXukDQ9bH6czewTGuALRa9XRwH5w%2B149DueCN5Nzfm0Nnnhen8ULs%3D&ua=&userId=2127528236&umidtoken=YMdOlg4s5X0DAAqIxAXv4f87&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&asac=2A20C07RJ9F51AOEFSNHDR&timestamp=1624004714&activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&sqSv=1.0&sign=8563c442b1d2210cf47a3bb7ab2f166b&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.4.1%26utdid%3DYMdOlg4s5X0DAAqIxAXv4f87%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2127528236%26sn%3DB9E6D1CC640953474383E26DE36917356AEB31E1%26umidtoken%3DYMdOlg4s5X0DAAqIxAXv4f87%26msv%3D8.0.0%26brand%3DApple%26imei%3D514C8087A778CF237D34224997AC277DD9BC6A65%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DD1699423-13B1-43A8-A673-32817D19AADF"},{"key":"shuqijsspbody4","val":""},{"key":"shuqijsydurl4","val":""},{"key":"shuqijsydbody4","val":""},{"key":"shuqijsqdbody4","val":""},{"key":"shuqijsqdspyurl4","val":""},{"key":"shuqijsqdspbody4","val":""},{"key":"shuqijsrwbody4","val":""},{"key":"shuqijsfxbody4","val":""},{"key":"shuqijsbookurl4","val":""},{"key":"shuqijsbookbody4","val":""},{"key":"shuqijssprwurl4","val":""},{"key":"shuqiuserurl5","val":"https://ocean.shuqireader.com/api/jaccount/accountapi/v1/sapi/account/getBindinfo?userId=2126941681&sqSv=1.0&timestamp=1624004824&sign=c5893dd3cdc1399b240a95ad50e559c3&key=sq_h5_gateway"},{"key":"shuqisyurl5","val":"https://render.shuqireader.com/load/resource?sdk=13.2.3&utdid=YMdOlg4s5X0DAAqIxAXv4f87&ustatus=0&first_placeid=111111&net_env=3g&placeid=111111&user_id=2126941681&sn=F8D3C8883C61C461A56310D4571EC1E9580F669B&umidtoken=YMdOlg4s5X0DAAqIxAXv4f87&msv=8.0.0&brand=Apple&imei=F5B07EE36B816398C838D64C864BCBA1677FC19A&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=iOS&ver=210301&mod=UnknowniPad&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=A81CBB2E-A905-4C26-B28F-A24159BF9961"},{"key":"shuqisybody5","val":"appVer=4.3.6.0&imei=F5B07EE36B816398C838D64C864BCBA1677FC19A&isNewUser=1&params=%7B%22resources%22%3A%7B%22ShuqiVipEntry%22%3A%7B%7D%2C%22personalCardConfig%22%3A%7B%7D%7D%7D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=b5aa8e11c86b4d2875ec67ecb2eb30a9&sn=F8D3C8883C61C461A56310D4571EC1E9580F669B&soft_id=21&timestamp=1624004741&user_id=2126941681&ver=210301"},{"key":"shuqispbody5","val":"_public=skinId%3D999%26idfa%3DA81CBB2E-A905-4C26-B28F-A24159BF9961%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26umidtoken%3DYMdOlg4s5X0DAAqIxAXv4f87%26user_id%3D2126941681%26sn%3DF8D3C8883C61C461A56310D4571EC1E9580F669B%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3DF5B07EE36B816398C838D64C864BCBA1677FC19A%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYMdOlg4s5X0DAAqIxAXv4f87%26utype%3Dpre_vip%26sdk%3D13.2.3&deliveryId=525&key=sq_app_ad&miniWua=HHnB_/4hwarQs/4lL4GNACnsUxdpcBPBCyrL5inzbsQG9/%2BA%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=626&sign=AC176353461C60CDA19B652F08C97BFE&timestamp=1624004789&userId=2126941681&user_id=2126941681&wua=HIVW_oqSOJOq3cRjDEWFya/DPByPUYXUpbF7q/rFGqcZfUc5uweTd4qMdINdX6FHdT8gJ8oJXTn1YlUypQ1CrH5mUb%2B5ekAxxMwSrwW04udnpcMXzTSKJgUzIYpiCCDw9rxFlQyfDC9PkK1vj/S%2BFGwIn4QY3yFnhWfjUKXu8n8p9B3HG5wOdkNWIXo7AYkmVyYkL518U2%2BpJiP2my696Rqxbiw%3D%3D"},{"key":"shuqiscbody5","val":"_public=skinId%253D999%2526idfa%253DA81CBB2E-A905-4C26-B28F-A24159BF9961%2526ustatus%253D0%2526first_placeid%253D111111%2526net_env%253D3g%2526umidtoken%253DYMdOlg4s5X0DAAqIxAXv4f87%2526user_id%253D2126941681%2526sn%253DF8D3C8883C61C461A56310D4571EC1E9580F669B%2526placeid%253D111111%2526msv%253D8.0.0%2526brand%253DApple%2526imei%253DF5B07EE36B816398C838D64C864BCBA1677FC19A%2526skinVersionPrefix%253D1%2526appVer%253D4.3.6.0%2526skinActiveColor%253D0F9970%2526manufacturer%253DApple%2526skinColor%253D23B383%2526platform%253DiOS%2526ver%253D210301%2526mod%253DUnknowniPad%2526statusBarHeight%253D44.000000%2526skinVersion%253D1%2526wh%253D1242x2688%2526soft_id%253D21%2526utdid%253DYMdOlg4s5X0DAAqIxAXv4f87%2526utype%253Dpre_vip%2526sdk%253D13.2.3&key=and_log&readingList=%5B%7B%22startTime%22%3A1624004746%2C%22readObjType%22%3A1%2C%22attr%22%3A2%2C%22readObjId%22%3A%228328441%22%2C%22readChapterId%22%3A1391637%2C%22readingLen%22%3A32%7D%5D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=E9536ECEA5C58E989E665B4B761FFB2F&timestamp=1624004779&user_id=2126941681"},{"key":"shuqiydbody5","val":"_public=skinId%3D999%26idfa%3DA81CBB2E-A905-4C26-B28F-A24159BF9961%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26umidtoken%3DYMdOlg4s5X0DAAqIxAXv4f87%26user_id%3D2126941681%26sn%3DF8D3C8883C61C461A56310D4571EC1E9580F669B%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3DF5B07EE36B816398C838D64C864BCBA1677FC19A%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYMdOlg4s5X0DAAqIxAXv4f87%26utype%3Dpre_vip%26sdk%3D13.2.3&deliveryId=707&key=sq_app_ad&miniWua=HHnB_aYlCNXh4dryHNntJ%2BemyIPJiXC7q/SIxf5G2CbNwMWg%3D&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=678&sign=181278485053C2CA99FE1FE93A09767F&timestamp=1624004776&userId=2126941681&wua=HIVW_GBt4w/3k6d/6lhDTBvRLXETvtbXebYMa4uZj/Llg8httcCVOc9GCGvrilHx4E9Y4cINPFtJOfzGVcvRoZ2GGXxUiHoVa89zMmnhjKlvjtE/0UMWUQPV3zEPqP7aC0aMO05V53/WJ52BlJf5mW48AD0t5ekLOrXeKZsM6sG/DlGqLQgvhO096uTldliBlnFbSgV7OadVy%2BM%2BqoZaAZZYzv7mw5yyOEqAeS486P/6mDSE%3D"},{"key":"shuqiqdbody5","val":"clientTimestamp=1624004796&position=501&userId=2126941681&signInType=1&wua=HIVW_CUowJ5Tc3C84GbZGfepWjp61eehgFVfgc6j8Vn0Smp6YSuznH6wTCGt65%2BPXuGn2YKVel2zV0UAbE1WceVTsPZVj5xM8JENYdF0ErmWGhFHEYurzMOaDIpZwOIzrHS1Fm2I4CV%2FuyjsOYS6kVQt3KN2s2ueE%2BNXTvR9x5OCbGks1447fepnCQs9WTl4pGQdB8H%2FLRBNqVRA%2BW3BOowMGWQ01H%2FPsIuRsG3frledLyHk%3D&ua=&miniWua=HHnB_OiTvI7iaWhrLJkx8UywI%2BaGU7lpTWZ7jMjByh%2BIMftQ%3D&umidtoken=YMdOlg4s5X0DAAqIxAXv4f87&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&sign=b1697ffa722438e1f2cae59d20331e60&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.2.3%26utdid%3DYMdOlg4s5X0DAAqIxAXv4f87%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2126941681%26sn%3DF8D3C8883C61C461A56310D4571EC1E9580F669B%26umidtoken%3DYMdOlg4s5X0DAAqIxAXv4f87%26msv%3D8.0.0%26brand%3DApple%26imei%3DF5B07EE36B816398C838D64C864BCBA1677FC19A%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DA81CBB2E-A905-4C26-B28F-A24159BF9961"},{"key":"shuqirwbody5","val":""},{"key":"shuqifxbody5","val":""},{"key":"shuqisprwurl5","val":"https://ocean.shuqireader.com/api/ad/adserver/v1/api/getAdInfo?appVer=4.3.6.0&placeId=111111&platform=iOS&requestSrc=h5&resourceId=626&timestamp=1624004821&user_id=2126941681&sqSv=1.0&sign=7a1054e31416997a2b7e85420ca919fc&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26sdk%3D13.2.3%26utdid%3DYMdOlg4s5X0DAAqIxAXv4f87%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2126941681%26sn%3DF8D3C8883C61C461A56310D4571EC1E9580F669B%26umidtoken%3DYMdOlg4s5X0DAAqIxAXv4f87%26msv%3D8.0.0%26brand%3DApple%26imei%3DF5B07EE36B816398C838D64C864BCBA1677FC19A%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DA81CBB2E-A905-4C26-B28F-A24159BF9961"},{"key":"shuqijlbody5","val":"requestSrc=h5&userId=2126941681&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624004799&sqSv=1.0&sign=324d84136f8c019e753e2414caf4347a&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.2.3%26utdid%3DYMdOlg4s5X0DAAqIxAXv4f87%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2126941681%26sn%3DF8D3C8883C61C461A56310D4571EC1E9580F669B%26umidtoken%3DYMdOlg4s5X0DAAqIxAXv4f87%26msv%3D8.0.0%26brand%3DApple%26imei%3DF5B07EE36B816398C838D64C864BCBA1677FC19A%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DA81CBB2E-A905-4C26-B28F-A24159BF9961"},{"key":"shuqisqjlbody5","val":"src=&userId=2126941681&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624004785&sqSv=1.0&sign=cd2d119d74ec3834fdbee81452c3fab3&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.2.3%26utdid%3DYMdOlg4s5X0DAAqIxAXv4f87%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2126941681%26sn%3DF8D3C8883C61C461A56310D4571EC1E9580F669B%26umidtoken%3DYMdOlg4s5X0DAAqIxAXv4f87%26msv%3D8.0.0%26brand%3DApple%26imei%3DF5B07EE36B816398C838D64C864BCBA1677FC19A%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DA81CBB2E-A905-4C26-B28F-A24159BF9961"},{"key":"shuqicjyurl5","val":"https://ocean.shuqireader.com/api/activity/activity/v1/lottery/info?timestamp=1624004824&userId=2126941681&activityId=311&sqSv=1.0&sign=3c9a3b1e057bedbf0e4b784d4b1f9405&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.2.3%26utdid%3DYMdOlg4s5X0DAAqIxAXv4f87%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2126941681%26sn%3DF8D3C8883C61C461A56310D4571EC1E9580F669B%26umidtoken%3DYMdOlg4s5X0DAAqIxAXv4f87%26msv%3D8.0.0%26brand%3DApple%26imei%3DF5B07EE36B816398C838D64C864BCBA1677FC19A%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DA81CBB2E-A905-4C26-B28F-A24159BF9961"},{"key":"shuqicjcsbody5","val":"_public=skinId%3D999%26idfa%3DA81CBB2E-A905-4C26-B28F-A24159BF9961%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26umidtoken%3DYMdOlg4s5X0DAAqIxAXv4f87%26user_id%3D2126941681%26sn%3DF8D3C8883C61C461A56310D4571EC1E9580F669B%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3DF5B07EE36B816398C838D64C864BCBA1677FC19A%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYMdOlg4s5X0DAAqIxAXv4f87%26utype%3Dpre_vip%26sdk%3D13.2.3&deliveryId=711&key=sq_app_ad&miniWua=HHnB_CW2ikhlXCeDFxtidF/XvwnKQKTkRMFjsWMxBpNHNycQ%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=703&sign=582847F7093718982012D1447261E855&timestamp=1624004804&userId=2126941681&user_id=2126941681&wua=HIVW_igYgpQasv%2BZHqFiBgLnjJOE23aDvh7aVlwVGTFsNPq1D48J6JXK5UlKer0EUoSOeJRXDuRlcUuuN%2BH8aJCx2tSF9iIoYwGkPgBftne4iWA8zfeS%2BwHPaolauVr4trSAU3PEFqndWrbXhfj0hrjfLIm7Gp5iA0IVtTm7hO9TkLmE19yg3I4RvSGkpkRuh4IRB4sIA5/qezeuvwcMKVxr1XmiFY8qlbArBdDeEU8aF%2Bpg%3D"},{"key":"shuqicjbody5","val":"wua=HIVW_Gf4YwMsAy5b7jlH4iCyOp3oJiuS9Plarxb9Dz4y6lTwXlpOh832rErmAm4SQgsmsgN6qBIxIQwW%2BGY1sLiJnBzbs0Zhfc%2BjoyfNuITYF191kmFk7QejmtfQm4NwEkcvS7N3sJMwgTr%2Bf1%2Bc67x5mE6W9aMmgie2GYR%2B07WHs2J%2B2nKMMueUun6gvbJT901c%2BOIsdWUb7Z1cgYEzprKqHzRYMOw99ZcBdT49kHtdK3g8%3D&ua=&userId=2126941681&umidtoken=YMdOlg4s5X0DAAqIxAXv4f87&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&asac=2A20C07RJ9F51AOEFSNHDR&timestamp=1624004811&activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&sqSv=1.0&sign=78a1bc7d1bb75b55f079a15fcc6b56aa&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.2.3%26utdid%3DYMdOlg4s5X0DAAqIxAXv4f87%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2126941681%26sn%3DF8D3C8883C61C461A56310D4571EC1E9580F669B%26umidtoken%3DYMdOlg4s5X0DAAqIxAXv4f87%26msv%3D8.0.0%26brand%3DApple%26imei%3DF5B07EE36B816398C838D64C864BCBA1677FC19A%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DA81CBB2E-A905-4C26-B28F-A24159BF9961"},{"key":"shuqijsspbody5","val":""},{"key":"shuqijsydurl5","val":""},{"key":"shuqijsydbody5","val":""},{"key":"shuqijsqdbody5","val":""},{"key":"shuqijsqdspyurl5","val":""},{"key":"shuqijsqdspbody5","val":""},{"key":"shuqijsrwbody5","val":""},{"key":"shuqijsfxbody5","val":""},{"key":"shuqijsbookurl5","val":""},{"key":"shuqijsbookbody5","val":""},{"key":"shuqijssprwurl5","val":""},{"key":"shuqiuserurl6","val":"https://ocean.shuqireader.com/api/jaccount/accountapi/v1/sapi/account/getBindinfo?userId=2128923066&sqSv=1.0&timestamp=1624004932&sign=35349fe6f33afe8382c9f5c8b053c0bd&key=sq_h5_gateway"},{"key":"shuqisyurl6","val":"https://render.shuqireader.com/load/resource?sdk=13.1&utdid=YMdOtdJyVN8DANwpWmNIQy2g&ustatus=0&first_placeid=111111&net_env=3g&placeid=111111&user_id=2128923066&sn=0622E508915040BED759149455C9C7C61B5871CB&umidtoken=YMdOtdJyVN8DANwpWmNIQy2g&msv=8.0.0&brand=Apple&imei=89F6E1269D6A448308EFC9D8EECE048D7C7216E3&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=iOS&ver=210301&mod=UnknowniPod&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=5D4FD8F2-8F15-4144-9637-F30410E50C2B"},{"key":"shuqisybody6","val":"appVer=4.3.6.0&imei=89F6E1269D6A448308EFC9D8EECE048D7C7216E3&isNewUser=1&params=%7B%22resources%22%3A%7B%22ShuqiVipEntry%22%3A%7B%7D%2C%22personalCardConfig%22%3A%7B%7D%7D%7D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=3553e5449a877748529e82acfb50f58a&sn=0622E508915040BED759149455C9C7C61B5871CB&soft_id=21&timestamp=1624004839&user_id=2128923066&ver=210301"},{"key":"shuqispbody6","val":"_public=skinId%3D999%26idfa%3D5D4FD8F2-8F15-4144-9637-F30410E50C2B%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26umidtoken%3DYMdOtdJyVN8DANwpWmNIQy2g%26user_id%3D2128923066%26sn%3D0622E508915040BED759149455C9C7C61B5871CB%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D89F6E1269D6A448308EFC9D8EECE048D7C7216E3%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DUnknowniPod%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYMdOtdJyVN8DANwpWmNIQy2g%26utype%3Dpre_vip%26sdk%3D13.1&deliveryId=525&key=sq_app_ad&miniWua=HHnB_HxBs4MaInUbmc43utr8yiaHxcXub2S5iu4gzFavFIos%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=626&sign=B46D707EBE2E5413FC4C62130B504324&timestamp=1624004897&userId=2128923066&user_id=2128923066&wua=HIVW_c19s6MKXJBvjlN3yzLsBcQ/ER7tJ2HfN977Sc8XcWX2QcHf9%2BBABeNsAQqw9WU0djz6cTyYhCzETcLtMOkyoJ3JcC0rixxdI0l3M%2BYNRRq%2B1sWamuXDAHmkjMnOW02HxORrWHAI%2BWTDMaAb6w5BEsfgXblVntRSgG9nj0aPcwS1%2BvE4a9D1DIu1MHWkbj%2BAChVxh3ilK8tKSm1gPKA2Fh76B8wBHU3m9AB6bxueMW/0%3D"},{"key":"shuqiscbody6","val":"_public=skinId%253D999%2526idfa%253D5D4FD8F2-8F15-4144-9637-F30410E50C2B%2526ustatus%253D0%2526first_placeid%253D111111%2526net_env%253D3g%2526umidtoken%253DYMdOtdJyVN8DANwpWmNIQy2g%2526user_id%253D2128923066%2526sn%253D0622E508915040BED759149455C9C7C61B5871CB%2526placeid%253D111111%2526msv%253D8.0.0%2526brand%253DApple%2526imei%253D89F6E1269D6A448308EFC9D8EECE048D7C7216E3%2526skinVersionPrefix%253D1%2526appVer%253D4.3.6.0%2526skinActiveColor%253D0F9970%2526manufacturer%253DApple%2526skinColor%253D23B383%2526platform%253DiOS%2526ver%253D210301%2526mod%253DUnknowniPod%2526statusBarHeight%253D44.000000%2526skinVersion%253D1%2526wh%253D1242x2688%2526soft_id%253D21%2526utdid%253DYMdOtdJyVN8DANwpWmNIQy2g%2526utype%253Dpre_vip%2526sdk%253D13.1&key=and_log&readingList=%5B%7B%22startTime%22%3A1624004847%2C%22readObjType%22%3A1%2C%22attr%22%3A2%2C%22readObjId%22%3A%228328441%22%2C%22readChapterId%22%3A1392294%2C%22readingLen%22%3A33%7D%5D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=D386CCDD5E83DB729CE02121D6AAD06D&timestamp=1624004880&user_id=2128923066"},{"key":"shuqiydbody6","val":"_public=skinId%3D999%26idfa%3D5D4FD8F2-8F15-4144-9637-F30410E50C2B%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26umidtoken%3DYMdOtdJyVN8DANwpWmNIQy2g%26user_id%3D2128923066%26sn%3D0622E508915040BED759149455C9C7C61B5871CB%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D89F6E1269D6A448308EFC9D8EECE048D7C7216E3%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DUnknowniPod%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYMdOtdJyVN8DANwpWmNIQy2g%26utype%3Dpre_vip%26sdk%3D13.1&deliveryId=707&key=sq_app_ad&miniWua=HHnB_vG%2B3sSgU3%2Baggze0t0qPB9OOcI3oxvKoVZEKzTHpk8Y%3D&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=678&sign=A48A44113F98C43BB4AC52AEB5A1964A&timestamp=1624004877&userId=2128923066&wua=HIVW_Br/tiAWHrBX%2Be0OTuEAiFu2ZzyjvC0ytDM1GAAOHiYaM%2B/4RscEViWI1/TOgQyKFE4u4OHXSDU%2BSZtAPzNi0SOysIaYc9nU0uMwhpynD1vYawSTQCLLuNRchZoXf2HEyjkefilINnZPZmjkEsi%2BRNez9g/uwfzKHc46d%2BmRWDqigSEkBTSDSYCDSMlMeq9R58rJIIIW9lP43b8FgSLLJvlbxVcVP7W0QGR5xtDmS4X4%3D"},{"key":"shuqiqdbody6","val":"clientTimestamp=1624004890&position=501&userId=2128923066&signInType=1&wua=HIVW_Re4XotKihjnFDMgYsvYoHGK5EBh5tGzn0edWLnT9d%2BrLhaxa4%2FU%2FrPoY8kHCHCHfVGm9U0IHyo8ij1ae3y6WUwDrzH7CkmSkNd3xsx4JoSQ%2Bx5wkPUHt3eV7hLHNL2B87fGjakHyvhDDbw%2Bz%2FvytKc8S4pptxzkCW4Gky1F4FLtAtL4XICT%2BTcbhkm0VGc4XZgOnsy0%2FoLR4AdDlc0OBM1SWis30fBCvrjpigiRDL48%3D&ua=&miniWua=HHnB_va9HDXY4gKHqhEuClbVNmejFmdI8p2hTXwlA3cfISi8%3D&umidtoken=YMdOtdJyVN8DANwpWmNIQy2g&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&sign=c4cceb55b2e41c8eaf991bde59f0ccc6&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26sdk%3D13.1%26utdid%3DYMdOtdJyVN8DANwpWmNIQy2g%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2128923066%26sn%3D0622E508915040BED759149455C9C7C61B5871CB%26umidtoken%3DYMdOtdJyVN8DANwpWmNIQy2g%26msv%3D8.0.0%26brand%3DApple%26imei%3D89F6E1269D6A448308EFC9D8EECE048D7C7216E3%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPod%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D5D4FD8F2-8F15-4144-9637-F30410E50C2B"},{"key":"shuqirwbody6","val":""},{"key":"shuqifxbody6","val":""},{"key":"shuqisprwurl6","val":"https://ocean.shuqireader.com/api/ad/adserver/v1/api/getAdInfo?appVer=4.3.6.0&placeId=111111&platform=iOS&requestSrc=h5&resourceId=626&timestamp=1624004932&user_id=2128923066&sqSv=1.0&sign=0c33a9b07a1d5ec9133660c2344790e1&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26sdk%3D13.1%26utdid%3DYMdOtdJyVN8DANwpWmNIQy2g%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2128923066%26sn%3D0622E508915040BED759149455C9C7C61B5871CB%26umidtoken%3DYMdOtdJyVN8DANwpWmNIQy2g%26msv%3D8.0.0%26brand%3DApple%26imei%3D89F6E1269D6A448308EFC9D8EECE048D7C7216E3%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPod%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D5D4FD8F2-8F15-4144-9637-F30410E50C2B"},{"key":"shuqijlbody6","val":"requestSrc=h5&userId=2128923066&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624004893&sqSv=1.0&sign=9da194ea9e75c168f6721d349c8a9ff1&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26sdk%3D13.1%26utdid%3DYMdOtdJyVN8DANwpWmNIQy2g%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2128923066%26sn%3D0622E508915040BED759149455C9C7C61B5871CB%26umidtoken%3DYMdOtdJyVN8DANwpWmNIQy2g%26msv%3D8.0.0%26brand%3DApple%26imei%3D89F6E1269D6A448308EFC9D8EECE048D7C7216E3%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPod%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D5D4FD8F2-8F15-4144-9637-F30410E50C2B"},{"key":"shuqisqjlbody6","val":"src=&userId=2128923066&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624004888&sqSv=1.0&sign=59bbe387ee11c8f3c3017ebb19bcf439&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26sdk%3D13.1%26utdid%3DYMdOtdJyVN8DANwpWmNIQy2g%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2128923066%26sn%3D0622E508915040BED759149455C9C7C61B5871CB%26umidtoken%3DYMdOtdJyVN8DANwpWmNIQy2g%26msv%3D8.0.0%26brand%3DApple%26imei%3D89F6E1269D6A448308EFC9D8EECE048D7C7216E3%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPod%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D5D4FD8F2-8F15-4144-9637-F30410E50C2B"},{"key":"shuqicjyurl6","val":"https://ocean.shuqireader.com/api/activity/activity/v1/lottery/info?timestamp=1624004935&userId=2128923066&activityId=311&sqSv=1.0&sign=60dbd7f22969f064b5732dd875bc5c26&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.1%26utdid%3DYMdOtdJyVN8DANwpWmNIQy2g%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2128923066%26sn%3D0622E508915040BED759149455C9C7C61B5871CB%26umidtoken%3DYMdOtdJyVN8DANwpWmNIQy2g%26msv%3D8.0.0%26brand%3DApple%26imei%3D89F6E1269D6A448308EFC9D8EECE048D7C7216E3%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPod%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D5D4FD8F2-8F15-4144-9637-F30410E50C2B"},{"key":"shuqicjcsbody6","val":"_public=skinId%3D999%26idfa%3D5D4FD8F2-8F15-4144-9637-F30410E50C2B%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26umidtoken%3DYMdOtdJyVN8DANwpWmNIQy2g%26user_id%3D2128923066%26sn%3D0622E508915040BED759149455C9C7C61B5871CB%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D89F6E1269D6A448308EFC9D8EECE048D7C7216E3%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DUnknowniPod%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYMdOtdJyVN8DANwpWmNIQy2g%26utype%3Dpre_vip%26sdk%3D13.1&deliveryId=711&key=sq_app_ad&miniWua=HHnB_l90TfQewat/jPWKt1BczvGnvAe%2Bb93nxHt6aFrWn3KY%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=703&sign=3663F849A36A2B9A05FC6531CA7BE575&timestamp=1624004906&userId=2128923066&user_id=2128923066&wua=HIVW_m2%2BEtdG%2BVKCn5i1yp2zkbK544scton5B6JSfGGEcYyyZfKpRMeJ2uIEmdFAldNnIMhQTwLwJZNcNcLWGE%2BaonyoVG2P1j6KUlQlguc6P3OJGOKHMASTeWdvcOncpNqFTgJ4rpkbuz4bdceeOX/XuyWVTFVAsR0WHEBH%2BU4bf8aWJCsQI1sXKNHUV%2BRFi1PcJVForOv%2Bfqq/1k64V45qwFdaJ%2B0fDZ8Xdi0ArBwgecyA%3D"},{"key":"shuqicjbody6","val":"wua=HIVW_ncwwTYcOskpZ02IpbR%2FVdekCXA4zdWNMonC5iC5L9EZAVyf8yCluyVK00sIGWkg4PBuPQs1AzkJnpejOjSrNm2B35I3IdZcyHGupPqJTtRBiCsSxBCRq6UvznO2sZbXQ%2FOqn4S%2BfCSOEDEHpE0br%2BSA75HSBQ09WqLA%2BeRMFFAP7CeoaV4ZUKVJX75cIApwwsoxMvUbxoJXnciUC9nj9YOdTw482ZCdw4b7JforSPL8%3D&ua=&userId=2128923066&umidtoken=YMdOtdJyVN8DANwpWmNIQy2g&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&asac=2A20C07RJ9F51AOEFSNHDR&timestamp=1624004911&activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&sqSv=1.0&sign=9cc9c23d6f8937899430638f92244f14&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.1%26utdid%3DYMdOtdJyVN8DANwpWmNIQy2g%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2128923066%26sn%3D0622E508915040BED759149455C9C7C61B5871CB%26umidtoken%3DYMdOtdJyVN8DANwpWmNIQy2g%26msv%3D8.0.0%26brand%3DApple%26imei%3D89F6E1269D6A448308EFC9D8EECE048D7C7216E3%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPod%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D5D4FD8F2-8F15-4144-9637-F30410E50C2B"},{"key":"shuqijsspbody6","val":""},{"key":"shuqijsydurl6","val":""},{"key":"shuqijsydbody6","val":""},{"key":"shuqijsqdbody6","val":""},{"key":"shuqijsqdspyurl6","val":""},{"key":"shuqijsqdspbody6","val":""},{"key":"shuqijsrwbody6","val":""},{"key":"shuqijsfxbody6","val":""},{"key":"shuqijsbookurl6","val":""},{"key":"shuqijsbookbody6","val":""},{"key":"shuqijssprwurl6","val":""},{"key":"shuqiuserurl7","val":"https://ocean.shuqireader.com/api/jaccount/accountapi/v1/sapi/account/getBindinfo?userId=2124820065&sqSv=1.0&timestamp=1624005028&sign=8cfb4870baf9de1b7d46754126a76b57&key=sq_h5_gateway"},{"key":"shuqisyurl7","val":"https://render.shuqireader.com/load/resource?sdk=13.2.3&utdid=YMdOtdJyVN8DANwpWmNIQy2g&ustatus=0&first_placeid=111111&net_env=4g&placeid=111111&user_id=2124820065&sn=0249EE51EA8CF56198AA969E3DF2E344B30D7239&umidtoken=YMdOtdJyVN8DANwpWmNIQy2g&msv=8.0.0&brand=Apple&imei=7347C1DC9B27FF438AFF6C0781426F5EF6FE4BEF&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=iOS&ver=210301&mod=iPhoneX&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=1CDF9C10-B48A-432A-AEFE-331371A26461"},{"key":"shuqisybody7","val":"appVer=4.3.6.0&imei=7347C1DC9B27FF438AFF6C0781426F5EF6FE4BEF&isNewUser=1&params=%7B%22resources%22%3A%7B%22ShuqiVipEntry%22%3A%7B%7D%2C%22personalCardConfig%22%3A%7B%7D%7D%7D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=01dee884f7f4668b54f87feeefc93d78&sn=0249EE51EA8CF56198AA969E3DF2E344B30D7239&soft_id=21&timestamp=1624004947&user_id=2124820065&ver=210301"},{"key":"shuqispbody7","val":"_public=skinId%3D999%26idfa%3D1CDF9C10-B48A-432A-AEFE-331371A26461%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26umidtoken%3DYMdOtdJyVN8DANwpWmNIQy2g%26user_id%3D2124820065%26sn%3D0249EE51EA8CF56198AA969E3DF2E344B30D7239%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D7347C1DC9B27FF438AFF6C0781426F5EF6FE4BEF%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhoneX%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYMdOtdJyVN8DANwpWmNIQy2g%26utype%3Dpre_vip%26sdk%3D13.2.3&deliveryId=525&key=sq_app_ad&miniWua=HHnB_p6VrVYy0Jx3YZAOHHNXrOt8Q7MYrVWj7CQuSoyDRVzQ%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=626&sign=66DF475D8C0FF82DFC763DEF45F5CEFF&timestamp=1624005005&userId=2124820065&user_id=2124820065&wua=HIVW_HQoh%2BskPzdQQPS1upKcqGC3BSTkC91i6eQ8o0KFFmOWy%2BwgQfrd6CJcp8qH%2Btj3RupWPf055NyrK9bqgg3su3GvgQiiyDgsrW/N57QyQXKEiXahgNxs%2BZmbJmaYUzIHJFunADzzZDd9NckkgC9/cH/O6PBrds/QLn50ra4Cm7ZTczyz%2BPwRbAmH/ihTRyOC42D5R%2BV4BroNNVxXH4%2BxKrf4JwPFggxMCsko7KxyQkmE%3D"},{"key":"shuqiscbody7","val":"_public=skinId%253D999%2526idfa%253D1CDF9C10-B48A-432A-AEFE-331371A26461%2526ustatus%253D0%2526first_placeid%253D111111%2526net_env%253D4g%2526umidtoken%253DYMdOtdJyVN8DANwpWmNIQy2g%2526user_id%253D2124820065%2526sn%253D0249EE51EA8CF56198AA969E3DF2E344B30D7239%2526placeid%253D111111%2526msv%253D8.0.0%2526brand%253DApple%2526imei%253D7347C1DC9B27FF438AFF6C0781426F5EF6FE4BEF%2526skinVersionPrefix%253D1%2526appVer%253D4.3.6.0%2526skinActiveColor%253D0F9970%2526manufacturer%253DApple%2526skinColor%253D23B383%2526platform%253DiOS%2526ver%253D210301%2526mod%253DiPhoneX%2526statusBarHeight%253D44.000000%2526skinVersion%253D1%2526wh%253D1242x2688%2526soft_id%253D21%2526utdid%253DYMdOtdJyVN8DANwpWmNIQy2g%2526utype%253Dpre_vip%2526sdk%253D13.2.3&key=and_log&readingList=%5B%7B%22startTime%22%3A1624004953%2C%22readObjType%22%3A1%2C%22attr%22%3A2%2C%22readObjId%22%3A%226890613%22%2C%22readChapterId%22%3A944909%2C%22readingLen%22%3A36%7D%5D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=B06BF9FFBA7A85E3C41E6FAD76F71ADE&timestamp=1624004989&user_id=2124820065"},{"key":"shuqiydbody7","val":"_public=skinId%3D999%26idfa%3D1CDF9C10-B48A-432A-AEFE-331371A26461%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26umidtoken%3DYMdOtdJyVN8DANwpWmNIQy2g%26user_id%3D2124820065%26sn%3D0249EE51EA8CF56198AA969E3DF2E344B30D7239%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D7347C1DC9B27FF438AFF6C0781426F5EF6FE4BEF%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhoneX%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYMdOtdJyVN8DANwpWmNIQy2g%26utype%3Dpre_vip%26sdk%3D13.2.3&deliveryId=707&key=sq_app_ad&miniWua=HHnB_MM1EzovibZ9a%2BLjl1G64N6DelT6faTVab4MiQH0BJ6Q%3D&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=678&sign=D5FA8ADA8D55B39B2274DDE882BCB572&timestamp=1624004986&userId=2124820065&wua=HIVW_TWrIzfcTM3kuKv9mdfauz0rAWGWbWFpX6siLgt5w/uX8U1wOrTk/FXAgn8h5zBiqcIT//ExgiEoiqogkHNM4kKwZ2q9xjPWQIDIDr263HNEs/Yq3TUNhWrH3167q5Xj42VUm0mXHztsTY1rmaL21NHumnouSq/sQz2z3J8UWkwPgtf3pxGP%2BmTTnGj0EunjxsTlFOXedui4ST%2BClHmwctUh6bLDOa2re73wSSQYUNYs%3D"},{"key":"shuqiqdbody7","val":"clientTimestamp=1624004992&position=501&userId=2124820065&signInType=1&wua=HIVW_QmI2s0%2FtJRb0xLjBi%2Bzl1Sn%2F2B%2BzQTl0R4ZG5TwswgwvGwwauAeh8TmFON5QEeayD1b2M6X6hivYWjGTnQcuInePdXb0z7yheo5%2FjOZ9QwWKlPAL5zd0aRByYhSU9WDW%2BrR0NhS%2F11mDz2Pyzy9R4y5rU3jC1do3rAEPB8QQL98ynyu%2B1b8gsv%2BeuQQhXKzcRO5KCOZcWrQSwYECd%2FK10hlTir0nn7mFZXqF9Iktlh0%3D&ua=&miniWua=HHnB_lTjTF2fQgwVyiiiTgxurQpTkXoW%2FjGL6CQcDijxeppY%3D&umidtoken=YMdOtdJyVN8DANwpWmNIQy2g&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&sign=27d1e1cdc584263ea4fcf745db56134e&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26sdk%3D13.2.3%26utdid%3DYMdOtdJyVN8DANwpWmNIQy2g%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2124820065%26sn%3D0249EE51EA8CF56198AA969E3DF2E344B30D7239%26umidtoken%3DYMdOtdJyVN8DANwpWmNIQy2g%26msv%3D8.0.0%26brand%3DApple%26imei%3D7347C1DC9B27FF438AFF6C0781426F5EF6FE4BEF%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhoneX%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D1CDF9C10-B48A-432A-AEFE-331371A26461"},{"key":"shuqirwbody7","val":""},{"key":"shuqifxbody7","val":""},{"key":"shuqisprwurl7","val":"https://ocean.shuqireader.com/api/ad/adserver/v1/api/getAdInfo?appVer=4.3.6.0&placeId=111111&platform=iOS&requestSrc=h5&resourceId=626&timestamp=1624005028&user_id=2124820065&sqSv=1.0&sign=76bc9a129846ffbb6f8d1ea9b7608c49&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.2.3%26utdid%3DYMdOtdJyVN8DANwpWmNIQy2g%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2124820065%26sn%3D0249EE51EA8CF56198AA969E3DF2E344B30D7239%26umidtoken%3DYMdOtdJyVN8DANwpWmNIQy2g%26msv%3D8.0.0%26brand%3DApple%26imei%3D7347C1DC9B27FF438AFF6C0781426F5EF6FE4BEF%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhoneX%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D1CDF9C10-B48A-432A-AEFE-331371A26461"},{"key":"shuqijlbody7","val":"requestSrc=h5&userId=2124820065&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624005008&sqSv=1.0&sign=9663ce4067fdab91c65017fbf9a1b261&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26sdk%3D13.2.3%26utdid%3DYMdOtdJyVN8DANwpWmNIQy2g%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2124820065%26sn%3D0249EE51EA8CF56198AA969E3DF2E344B30D7239%26umidtoken%3DYMdOtdJyVN8DANwpWmNIQy2g%26msv%3D8.0.0%26brand%3DApple%26imei%3D7347C1DC9B27FF438AFF6C0781426F5EF6FE4BEF%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhoneX%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D1CDF9C10-B48A-432A-AEFE-331371A26461"},{"key":"shuqisqjlbody7","val":"src=&userId=2124820065&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624005004&sqSv=1.0&sign=893e3b16ccb70195fae940cd3d38eeeb&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26sdk%3D13.2.3%26utdid%3DYMdOtdJyVN8DANwpWmNIQy2g%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2124820065%26sn%3D0249EE51EA8CF56198AA969E3DF2E344B30D7239%26umidtoken%3DYMdOtdJyVN8DANwpWmNIQy2g%26msv%3D8.0.0%26brand%3DApple%26imei%3D7347C1DC9B27FF438AFF6C0781426F5EF6FE4BEF%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhoneX%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D1CDF9C10-B48A-432A-AEFE-331371A26461"},{"key":"shuqicjyurl7","val":"https://ocean.shuqireader.com/api/activity/activity/v1/lottery/info?timestamp=1624005031&userId=2124820065&activityId=311&sqSv=1.0&sign=f2e62a4979ce1477ff3d498c1b960df0&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.2.3%26utdid%3DYMdOtdJyVN8DANwpWmNIQy2g%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2124820065%26sn%3D0249EE51EA8CF56198AA969E3DF2E344B30D7239%26umidtoken%3DYMdOtdJyVN8DANwpWmNIQy2g%26msv%3D8.0.0%26brand%3DApple%26imei%3D7347C1DC9B27FF438AFF6C0781426F5EF6FE4BEF%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhoneX%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D1CDF9C10-B48A-432A-AEFE-331371A26461"},{"key":"shuqicjcsbody7","val":"_public=skinId%3D999%26idfa%3D1CDF9C10-B48A-432A-AEFE-331371A26461%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26umidtoken%3DYMdOtdJyVN8DANwpWmNIQy2g%26user_id%3D2124820065%26sn%3D0249EE51EA8CF56198AA969E3DF2E344B30D7239%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D7347C1DC9B27FF438AFF6C0781426F5EF6FE4BEF%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhoneX%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYMdOtdJyVN8DANwpWmNIQy2g%26utype%3Dpre_vip%26sdk%3D13.2.3&deliveryId=711&key=sq_app_ad&miniWua=HHnB_hHrsCEK%2BcDQnfh5xg5PnTdmnA/vUqWlPkpTLsALAF/U%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=703&sign=F7D4574B4D8C3395C46B4A3BD60F3F96&timestamp=1624005016&userId=2124820065&user_id=2124820065&wua=HIVW_sqaKtRri5sBvk7Ltj4CRxnGrr7bPD88HypAJF%2BYgIWw/uFXOiCg7q8RzDeXTCsd58UtNJ6f72rt90Bg232rtxDPex3Wp5xIAP7yc7Nt82kevFpn17nThEzM6J751m9JVUZQeEWQPb9pKrainJQBYB8N5lNp3%2BulmiMc12sqX1Bq6g0TsqgnOib30o0uz7Iji4Q1zA3jgxC5OVC0TJP4PpsgQ2Le3A5d/c0qBfR/ylcs%3D"},{"key":"shuqicjbody7","val":"wua=HIVW_qUFTssoLLI8Q4ZBOwluCKU3HABU42evjQ1WStDrzks1szAHb560esQHuM13HWxT1ZQ7reiG190VnhfmvXgqtLiMY%2BA8fO0gaTujmsk39yGmRbxpKFBRQcorEem3SpWUAipE67Rw%2FHJXWSnt88NHLtGYnrwdvT0EB%2BtW2OumNu28gJxUBnnem6BxLec8dxVVQ%2FtAzXEmKCnHSqR8TKoFJjPrmlf7es0KSiJ1psZQUfr4%3D&ua=&userId=2124820065&umidtoken=YMdOtdJyVN8DANwpWmNIQy2g&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&asac=2A20C07RJ9F51AOEFSNHDR&timestamp=1624005018&activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&sqSv=1.0&sign=78e45ce964f86298403afdc65dcbc80a&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.2.3%26utdid%3DYMdOtdJyVN8DANwpWmNIQy2g%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2124820065%26sn%3D0249EE51EA8CF56198AA969E3DF2E344B30D7239%26umidtoken%3DYMdOtdJyVN8DANwpWmNIQy2g%26msv%3D8.0.0%26brand%3DApple%26imei%3D7347C1DC9B27FF438AFF6C0781426F5EF6FE4BEF%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhoneX%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D1CDF9C10-B48A-432A-AEFE-331371A26461"},{"key":"shuqijsspbody7","val":""},{"key":"shuqijsydurl7","val":""},{"key":"shuqijsydbody7","val":""},{"key":"shuqijsqdbody7","val":""},{"key":"shuqijsqdspyurl7","val":""},{"key":"shuqijsqdspbody7","val":""},{"key":"shuqijsrwbody7","val":""},{"key":"shuqijsfxbody7","val":""},{"key":"shuqijsbookurl7","val":""},{"key":"shuqijsbookbody7","val":""},{"key":"shuqijssprwurl7","val":""},{"key":"shuqiuserurl8","val":"https://ocean.shuqireader.com/api/jaccount/accountapi/v1/sapi/account/getBindinfo?userId=2123671867&sqSv=1.0&timestamp=1624005157&sign=3d3500ff5d78a0392b96add720b9151e&key=sq_h5_gateway"},{"key":"shuqisyurl8","val":"https://render.shuqireader.com/load/resource?sdk=13.2.3&utdid=YMqjs7gsZOQDAG12f5YGYF2K&ustatus=0&first_placeid=111111&net_env=3g&placeid=111111&user_id=2123671867&sn=09B4EC6CC5C0BC3A59FC2B69E0025A581BEF8655&umidtoken=YMqjs7gsZOQDAG12f5YGYF2K&msv=8.0.0&brand=Apple&imei=99C98125FCF51389140FAE3ECE16620DCAE8BF06&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=iOS&ver=210301&mod=iPhone6s&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=F5CF2A2E-4BCE-458C-8FB5-C74173A2B0FE"},{"key":"shuqisybody8","val":"appVer=4.3.6.0&imei=99C98125FCF51389140FAE3ECE16620DCAE8BF06&isNewUser=1&params=%7B%22resources%22%3A%7B%22ShuqiVipEntry%22%3A%7B%7D%2C%22personalCardConfig%22%3A%7B%7D%7D%7D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=c5ada2d6e55c1f073d639a8f4007ebec&sn=09B4EC6CC5C0BC3A59FC2B69E0025A581BEF8655&soft_id=21&timestamp=1624005045&user_id=2123671867&ver=210301"},{"key":"shuqispbody8","val":"_public=skinId%3D999%26idfa%3DF5CF2A2E-4BCE-458C-8FB5-C74173A2B0FE%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26umidtoken%3DYMqjs7gsZOQDAG12f5YGYF2K%26user_id%3D2123671867%26sn%3D09B4EC6CC5C0BC3A59FC2B69E0025A581BEF8655%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D99C98125FCF51389140FAE3ECE16620DCAE8BF06%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhone6s%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYMqjs7gsZOQDAG12f5YGYF2K%26utype%3Dpre_vip%26sdk%3D13.2.3&deliveryId=525&key=sq_app_ad&miniWua=HHnB_RdmBkpq7fphrzDl5QTR7l4sWd7qr5RiJaRMMuNd0%2BjE%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=626&sign=45B5D71EDFC03E4050B8E929ED77CC48&timestamp=1624005121&userId=2123671867&user_id=2123671867&wua=HIVW_d2NdKEt/%2B1J4EKkPrk31NXLks1y5uIYv1kK6ZoORFut4ZDshIIZx1u7ilONk9ZKbtyW7l1BiFXt4dEKhwuhbnsBuHjDivaRxTfYZRUhomLAVjQ6bSEa7PZXIUwDn/Sj5/3OCBAMeTqXpiGLMx0Lcv%2BA0OdyKV9zfWMLXo5sZXGl2AqQk%2BFCQekeBY9sBq6aFifKyf9chDtb0aHxrESIx%2Bnmnf/H1jHksC%2Btd6Jeb5zY%3D"},{"key":"shuqiscbody8","val":"_public=skinId%253D999%2526idfa%253DF5CF2A2E-4BCE-458C-8FB5-C74173A2B0FE%2526ustatus%253D0%2526first_placeid%253D111111%2526net_env%253D3g%2526umidtoken%253DYMqjs7gsZOQDAG12f5YGYF2K%2526user_id%253D2123671867%2526sn%253D09B4EC6CC5C0BC3A59FC2B69E0025A581BEF8655%2526placeid%253D111111%2526msv%253D8.0.0%2526brand%253DApple%2526imei%253D99C98125FCF51389140FAE3ECE16620DCAE8BF06%2526skinVersionPrefix%253D1%2526appVer%253D4.3.6.0%2526skinActiveColor%253D0F9970%2526manufacturer%253DApple%2526skinColor%253D23B383%2526platform%253DiOS%2526ver%253D210301%2526mod%253DiPhone6s%2526statusBarHeight%253D44.000000%2526skinVersion%253D1%2526wh%253D1242x2688%2526soft_id%253D21%2526utdid%253DYMqjs7gsZOQDAG12f5YGYF2K%2526utype%253Dpre_vip%2526sdk%253D13.2.3&key=and_log&readingList=%5B%7B%22startTime%22%3A1624005067%2C%22readObjType%22%3A1%2C%22attr%22%3A2%2C%22readObjId%22%3A%226890613%22%2C%22readChapterId%22%3A953227%2C%22readingLen%22%3A45%7D%5D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=D66BA85AFC5B2C7294A54F82F3DD763C&timestamp=1624005113&user_id=2123671867"},{"key":"shuqiydbody8","val":"_public=skinId%3D999%26idfa%3DF5CF2A2E-4BCE-458C-8FB5-C74173A2B0FE%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26umidtoken%3DYMqjs7gsZOQDAG12f5YGYF2K%26user_id%3D2123671867%26sn%3D09B4EC6CC5C0BC3A59FC2B69E0025A581BEF8655%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D99C98125FCF51389140FAE3ECE16620DCAE8BF06%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhone6s%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYMqjs7gsZOQDAG12f5YGYF2K%26utype%3Dpre_vip%26sdk%3D13.2.3&deliveryId=707&key=sq_app_ad&miniWua=HHnB_xHEP/tu8IM%2BjQm%2BV9g9gNr/tvSUQd5dBAiLb0Hvfums%3D&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=678&sign=FE5772BC00340D5BFC2ADF92917BE8D1&timestamp=1624005097&userId=2123671867&wua=HIVW_2cHQCu4SZ9yaXWSYzwAf0dVNOWtuCjHh9KASvrOoZ%2BeNS4VuJExhOv9HDpTs8aOYT4qmnpgl870mlIuveYjcIFvN7/VKjyd3HrjSbxqYXdQ7fGyCogB/71G8/ySmV2p%2B0OOTlKcT2%2BpN1CDUaqyuzOrWd067STCVZ/gpENJn2MK9ssnrZEM98yIgoVATjHAbR4JuK7sB93QbeE1X3csl2FhxY5zTe5BkQoD4zYn74SA%3D"},{"key":"shuqiqdbody8","val":"clientTimestamp=1624005116&position=501&userId=2123671867&signInType=1&wua=HIVW_90i1pybAAArgKGOhos9zlZFt5XHisCBZfMV04XGzeWohsfeoM6Nvv39NzVxQJVhpLvMjUvcXkK4FcJutg92erCghOffBEDDdyIofs8YYOsS1JLLzEMq91KCWjmcynCY%2FJ8Pa07BhpGDdkP4g9RRDyxddX%2FuJ6hECZwP55PMLKb1Ys4OzsQapP2FBKQ0HWEZx64Kvw3LjsZ3wLC2hTD15ATqJ4cn0b8S9hVvAKI%2Fnpxo%3D&ua=&miniWua=HHnB_hQdLYidawTBs7zWR1DFbUdiqFa8kiKdOeawA0jJulaU%3D&umidtoken=YMqjs7gsZOQDAG12f5YGYF2K&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&sign=6cc5e8a33bad429ae378c0ffdd1fb126&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26sdk%3D13.2.3%26utdid%3DYMqjs7gsZOQDAG12f5YGYF2K%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2123671867%26sn%3D09B4EC6CC5C0BC3A59FC2B69E0025A581BEF8655%26umidtoken%3DYMqjs7gsZOQDAG12f5YGYF2K%26msv%3D8.0.0%26brand%3DApple%26imei%3D99C98125FCF51389140FAE3ECE16620DCAE8BF06%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone6s%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DF5CF2A2E-4BCE-458C-8FB5-C74173A2B0FE"},{"key":"shuqirwbody8","val":""},{"key":"shuqifxbody8","val":""},{"key":"shuqisprwurl8","val":"https://ocean.shuqireader.com/api/ad/adserver/v1/api/getAdInfo?appVer=4.3.6.0&placeId=111111&platform=iOS&requestSrc=h5&resourceId=626&timestamp=1624005154&user_id=2123671867&sqSv=1.0&sign=3665f1e346ad0bcc9c57ee387c018822&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.2.3%26utdid%3DYMqjs7gsZOQDAG12f5YGYF2K%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2123671867%26sn%3D09B4EC6CC5C0BC3A59FC2B69E0025A581BEF8655%26umidtoken%3DYMqjs7gsZOQDAG12f5YGYF2K%26msv%3D8.0.0%26brand%3DApple%26imei%3D99C98125FCF51389140FAE3ECE16620DCAE8BF06%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone6s%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DF5CF2A2E-4BCE-458C-8FB5-C74173A2B0FE"},{"key":"shuqijlbody8","val":"requestSrc=h5&userId=2123671867&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624005144&sqSv=1.0&sign=646e2ae3b80151ae526eca0abb1a8244&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26sdk%3D13.2.3%26utdid%3DYMqjs7gsZOQDAG12f5YGYF2K%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2123671867%26sn%3D09B4EC6CC5C0BC3A59FC2B69E0025A581BEF8655%26umidtoken%3DYMqjs7gsZOQDAG12f5YGYF2K%26msv%3D8.0.0%26brand%3DApple%26imei%3D99C98125FCF51389140FAE3ECE16620DCAE8BF06%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone6s%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DF5CF2A2E-4BCE-458C-8FB5-C74173A2B0FE"},{"key":"shuqisqjlbody8","val":"src=&userId=2123671867&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624005121&sqSv=1.0&sign=76cb89b2bfc7a72eb4f9e45c3ce32459&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26sdk%3D13.2.3%26utdid%3DYMqjs7gsZOQDAG12f5YGYF2K%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2123671867%26sn%3D09B4EC6CC5C0BC3A59FC2B69E0025A581BEF8655%26umidtoken%3DYMqjs7gsZOQDAG12f5YGYF2K%26msv%3D8.0.0%26brand%3DApple%26imei%3D99C98125FCF51389140FAE3ECE16620DCAE8BF06%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone6s%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DF5CF2A2E-4BCE-458C-8FB5-C74173A2B0FE"},{"key":"shuqicjyurl8","val":"https://ocean.shuqireader.com/api/activity/activity/v1/lottery/info?timestamp=1624005157&userId=2123671867&activityId=311&sqSv=1.0&sign=f6eb01c0e70f8bd7531010aaf75caf84&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.2.3%26utdid%3DYMqjs7gsZOQDAG12f5YGYF2K%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2123671867%26sn%3D09B4EC6CC5C0BC3A59FC2B69E0025A581BEF8655%26umidtoken%3DYMqjs7gsZOQDAG12f5YGYF2K%26msv%3D8.0.0%26brand%3DApple%26imei%3D99C98125FCF51389140FAE3ECE16620DCAE8BF06%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone6s%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DF5CF2A2E-4BCE-458C-8FB5-C74173A2B0FE"},{"key":"shuqicjcsbody8","val":"_public=skinId%3D999%26idfa%3DF5CF2A2E-4BCE-458C-8FB5-C74173A2B0FE%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26umidtoken%3DYMqjs7gsZOQDAG12f5YGYF2K%26user_id%3D2123671867%26sn%3D09B4EC6CC5C0BC3A59FC2B69E0025A581BEF8655%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D99C98125FCF51389140FAE3ECE16620DCAE8BF06%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhone6s%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYMqjs7gsZOQDAG12f5YGYF2K%26utype%3Dpre_vip%26sdk%3D13.2.3&deliveryId=711&key=sq_app_ad&miniWua=HHnB_iQ9iquxLhdmNZKWV2Da0ILl3IFnJgzc59OM78gc%2BGjM%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=703&sign=9146A9E6A6A987B6BC18819BF4D5365A&timestamp=1624005135&userId=2123671867&user_id=2123671867&wua=HIVW_rkEm9r7SYbqfO5GwN0iOhjG/Hhkc4Krr%2ByukzOwCZo8KKp1BU0S2w7qcizNI3CWyzwRTmnf%2B0jDyGygsxfYN%2BoEiM5PZDHa9rzmtzSHrc10AXKpfheY/bNKFA5/oZ6mUYM9nRO50%2B9qJYINvHgpezpCP1mtspfbNOWj6EZWZDVopUbXLwC4IytOmLzPrAmLJi7EcaWms/koW3XLaKY6Le5vvvobRB9PhgCRO3DQ4sBM%3D"},{"key":"shuqicjbody8","val":"wua=HIVW_3g30gdwEezB0WnIY3yHVcqpwJYAmM%2BxSRhU%2FoTvALy3u4cojYqLApZpC3ey9KA88EHFbIBK66C%2F4nZ0z2bd8Dw3XL6Y46ucWJLjS4ZmZ7z8YZ5EGNUfufRrOgPYVUlsS54HxJ5OMLGq207BWTFzvVKDoZ7aNfYpvpg2%2Be%2FDhW92QkOV7M7c6Pue3jra5K8QPay8APpKUB7dIh89kNg0xg6S3aOygk%2BNQZ2MJ2g5bFEY%3D&ua=&userId=2123671867&umidtoken=YMqjs7gsZOQDAG12f5YGYF2K&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&asac=2A20C07RJ9F51AOEFSNHDR&timestamp=1624005141&activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&sqSv=1.0&sign=599355e867432ad32287e8c31c353e9e&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.2.3%26utdid%3DYMqjs7gsZOQDAG12f5YGYF2K%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2123671867%26sn%3D09B4EC6CC5C0BC3A59FC2B69E0025A581BEF8655%26umidtoken%3DYMqjs7gsZOQDAG12f5YGYF2K%26msv%3D8.0.0%26brand%3DApple%26imei%3D99C98125FCF51389140FAE3ECE16620DCAE8BF06%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone6s%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DF5CF2A2E-4BCE-458C-8FB5-C74173A2B0FE"},{"key":"shuqijsspbody8","val":""},{"key":"shuqijsydurl8","val":""},{"key":"shuqijsydbody8","val":""},{"key":"shuqijsqdbody8","val":""},{"key":"shuqijsqdspyurl8","val":""},{"key":"shuqijsqdspbody8","val":""},{"key":"shuqijsrwbody8","val":""},{"key":"shuqijsfxbody8","val":""},{"key":"shuqijsbookurl8","val":""},{"key":"shuqijsbookbody8","val":""},{"key":"shuqijssprwurl8","val":""},{"key":"shuqiuserurl9","val":"https://ocean.shuqireader.com/api/jaccount/accountapi/v1/sapi/account/getBindinfo?userId=2126346865&sqSv=1.0&timestamp=1624005256&sign=2c52946266607d88a82d1987879f2eb1&key=sq_h5_gateway"},{"key":"shuqisyurl9","val":"https://render.shuqireader.com/load/resource?sdk=13.1.1&utdid=YMqjs7gsZOQDAG12f5YGYF2K&ustatus=0&first_placeid=111111&net_env=wifi&placeid=111111&user_id=2126346865&sn=C6BA867731D3B2EEAFB3CD655E540793DE09F352&umidtoken=YMqjs7gsZOQDAG12f5YGYF2K&msv=8.0.0&brand=Apple&imei=4E6FC8DFA2A1273DA4F9A8A696C13A2AC9363E3F&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=iOS&ver=210301&mod=iPad2G&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=21521703-3F6A-4140-8760-59E3F51EEB99"},{"key":"shuqisybody9","val":"appVer=4.3.6.0&imei=4E6FC8DFA2A1273DA4F9A8A696C13A2AC9363E3F&isNewUser=1&params=%7B%22resources%22%3A%7B%22ShuqiVipEntry%22%3A%7B%7D%2C%22personalCardConfig%22%3A%7B%7D%7D%7D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=1b533a021132c0fb593f5d60acdc123e&sn=C6BA867731D3B2EEAFB3CD655E540793DE09F352&soft_id=21&timestamp=1624005172&user_id=2126346865&ver=210301"},{"key":"shuqispbody9","val":"_public=skinId%3D999%26idfa%3D21521703-3F6A-4140-8760-59E3F51EEB99%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26umidtoken%3DYMqjs7gsZOQDAG12f5YGYF2K%26user_id%3D2126346865%26sn%3DC6BA867731D3B2EEAFB3CD655E540793DE09F352%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D4E6FC8DFA2A1273DA4F9A8A696C13A2AC9363E3F%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPad2G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYMqjs7gsZOQDAG12f5YGYF2K%26utype%3Dpre_vip%26sdk%3D13.1.1&deliveryId=525&key=sq_app_ad&miniWua=HHnB_vLa0K4rPf5ucP6ql8aYGBRAlB/vW82xSr0NQtPSgM2s%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=626&sign=03753E40FC0F8F1190577136BBC76422&timestamp=1624005223&userId=2126346865&user_id=2126346865&wua=HIVW_VITnMFauqz5fmVUHjpD7zACnP0MsJuYmwdJ5b85xF0t4PjwDJQILDuvwYwPMvWaV53oKwLnxdPn6Sj3bvc35WphphIeFmJ1LlsdbskFxUcgnOKY4HpQXEcHsA3ZOrFH03peDjxNQ7OmxVhmyCc8gN2huS8W/blCkuQ9XGof5sFMoJQB2nW80kJYnF0D7xbPNLD9KRblpycvpIpVzRxR/Ql7ZkZ2OisAgfgX5ir9kZ1Q%3D"},{"key":"shuqiscbody9","val":"_public=skinId%253D999%2526idfa%253D21521703-3F6A-4140-8760-59E3F51EEB99%2526ustatus%253D0%2526first_placeid%253D111111%2526net_env%253Dwifi%2526umidtoken%253DYMqjs7gsZOQDAG12f5YGYF2K%2526user_id%253D2126346865%2526sn%253DC6BA867731D3B2EEAFB3CD655E540793DE09F352%2526placeid%253D111111%2526msv%253D8.0.0%2526brand%253DApple%2526imei%253D4E6FC8DFA2A1273DA4F9A8A696C13A2AC9363E3F%2526skinVersionPrefix%253D1%2526appVer%253D4.3.6.0%2526skinActiveColor%253D0F9970%2526manufacturer%253DApple%2526skinColor%253D23B383%2526platform%253DiOS%2526ver%253D210301%2526mod%253DiPad2G%2526statusBarHeight%253D44.000000%2526skinVersion%253D1%2526wh%253D1242x2688%2526soft_id%253D21%2526utdid%253DYMqjs7gsZOQDAG12f5YGYF2K%2526utype%253Dpre_vip%2526sdk%253D13.1.1&key=and_log&readingList=%5B%7B%22startTime%22%3A1624005176%2C%22readObjType%22%3A1%2C%22attr%22%3A2%2C%22readObjId%22%3A%228379731%22%2C%22readChapterId%22%3A1472147%2C%22readingLen%22%3A37%7D%5D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=312498AB06CB576E9EF53F8CDE20451D&timestamp=1624005214&user_id=2126346865"},{"key":"shuqiydbody9","val":"_public=skinId%3D999%26idfa%3D21521703-3F6A-4140-8760-59E3F51EEB99%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26umidtoken%3DYMqjs7gsZOQDAG12f5YGYF2K%26user_id%3D2126346865%26sn%3DC6BA867731D3B2EEAFB3CD655E540793DE09F352%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D4E6FC8DFA2A1273DA4F9A8A696C13A2AC9363E3F%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPad2G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYMqjs7gsZOQDAG12f5YGYF2K%26utype%3Dpre_vip%26sdk%3D13.1.1&deliveryId=707&key=sq_app_ad&miniWua=HHnB_TwLaQpX/yNRlLJFOUNtIwa5eIEBJj4ClEIubgYhIRWY%3D&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=678&sign=34E45BF683AAB0DF7CA4040AB7F5FA96&timestamp=1624005208&userId=2126346865&wua=HIVW_U9MZG4wJq/PomFUaWnPXWgb%2BS4wtgKED33PZRu8jfGYMuynllf1DHTrGJEwPnkxeWTIBRZ%2B2LfuDlu/HoXL1TwcaiHlqfbcGE02B1D2hsDP5a/AVes6iDuHCs0FNM8AVrZsS2mykPEN%2BUbPOP7ZNJp6tIeAElrkOs5R/htpdvjVvzlj/HZlzeLQmakKmuKJPNxW4pcASrnGB45VPky5z8tf%2BIGobHZ6AwGYWLvN2y3o%3D"},{"key":"shuqiqdbody9","val":"clientTimestamp=1624005231&position=501&userId=2126346865&signInType=1&wua=HIVW_af%2FNILO89q1cS6tOGWXkJSJa76712uS7v%2BXpqgDf24MX%2FGOxEUcG3YKDdk1rpmz8iyXNrorWwkLDzEFSNaso0ZLx3JwuMetSeZSNeVhMXbaKncl92PyanX0K1KhdHKu5uPOD5OAXCSEc4R1uZr8eNPL3NMFAM26Kgl%2F9SXJtZ3AFudq3%2F8EW%2BZ%2FRTb4NIaIJNPxqP5dLSIAz9zz9CCsFIk0m9JosiSv3sZAri54U55Y%3D&ua=&miniWua=HHnB_XWNnX%2F2svDQ5qO8UuS3KjXLH7MQAKg983nEifOzlLoY%3D&umidtoken=YMqjs7gsZOQDAG12f5YGYF2K&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&sign=570bc112831dc82b8c44495cb052d27d&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26sdk%3D13.1.1%26utdid%3DYMqjs7gsZOQDAG12f5YGYF2K%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2126346865%26sn%3DC6BA867731D3B2EEAFB3CD655E540793DE09F352%26umidtoken%3DYMqjs7gsZOQDAG12f5YGYF2K%26msv%3D8.0.0%26brand%3DApple%26imei%3D4E6FC8DFA2A1273DA4F9A8A696C13A2AC9363E3F%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad2G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D21521703-3F6A-4140-8760-59E3F51EEB99"},{"key":"shuqirwbody9","val":""},{"key":"shuqifxbody9","val":""},{"key":"shuqisprwurl9","val":"https://ocean.shuqireader.com/api/ad/adserver/v1/api/getAdInfo?appVer=4.3.6.0&placeId=111111&platform=iOS&requestSrc=h5&resourceId=626&timestamp=1624005252&user_id=2126346865&sqSv=1.0&sign=5e3754b964e6c6a5cb1e4865c96ba10f&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26sdk%3D13.1.1%26utdid%3DYMqjs7gsZOQDAG12f5YGYF2K%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2126346865%26sn%3DC6BA867731D3B2EEAFB3CD655E540793DE09F352%26umidtoken%3DYMqjs7gsZOQDAG12f5YGYF2K%26msv%3D8.0.0%26brand%3DApple%26imei%3D4E6FC8DFA2A1273DA4F9A8A696C13A2AC9363E3F%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad2G%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D21521703-3F6A-4140-8760-59E3F51EEB99"},{"key":"shuqijlbody9","val":"requestSrc=h5&userId=2126346865&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624005233&sqSv=1.0&sign=e45f09e1c119141de49d0c167e99f740&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26sdk%3D13.1.1%26utdid%3DYMqjs7gsZOQDAG12f5YGYF2K%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2126346865%26sn%3DC6BA867731D3B2EEAFB3CD655E540793DE09F352%26umidtoken%3DYMqjs7gsZOQDAG12f5YGYF2K%26msv%3D8.0.0%26brand%3DApple%26imei%3D4E6FC8DFA2A1273DA4F9A8A696C13A2AC9363E3F%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad2G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D21521703-3F6A-4140-8760-59E3F51EEB99"},{"key":"shuqisqjlbody9","val":"src=&userId=2126346865&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624005221&sqSv=1.0&sign=84809baed18754745232664f31042edf&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26sdk%3D13.1.1%26utdid%3DYMqjs7gsZOQDAG12f5YGYF2K%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2126346865%26sn%3DC6BA867731D3B2EEAFB3CD655E540793DE09F352%26umidtoken%3DYMqjs7gsZOQDAG12f5YGYF2K%26msv%3D8.0.0%26brand%3DApple%26imei%3D4E6FC8DFA2A1273DA4F9A8A696C13A2AC9363E3F%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad2G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D21521703-3F6A-4140-8760-59E3F51EEB99"},{"key":"shuqicjyurl9","val":"https://ocean.shuqireader.com/api/activity/activity/v1/lottery/info?timestamp=1624005256&userId=2126346865&activityId=311&sqSv=1.0&sign=6174e05e61e9d407ac87c6ce1dcc405f&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.1.1%26utdid%3DYMqjs7gsZOQDAG12f5YGYF2K%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2126346865%26sn%3DC6BA867731D3B2EEAFB3CD655E540793DE09F352%26umidtoken%3DYMqjs7gsZOQDAG12f5YGYF2K%26msv%3D8.0.0%26brand%3DApple%26imei%3D4E6FC8DFA2A1273DA4F9A8A696C13A2AC9363E3F%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad2G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D21521703-3F6A-4140-8760-59E3F51EEB99"},{"key":"shuqicjcsbody9","val":"_public=skinId%3D999%26idfa%3D21521703-3F6A-4140-8760-59E3F51EEB99%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26umidtoken%3DYMqjs7gsZOQDAG12f5YGYF2K%26user_id%3D2126346865%26sn%3DC6BA867731D3B2EEAFB3CD655E540793DE09F352%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D4E6FC8DFA2A1273DA4F9A8A696C13A2AC9363E3F%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPad2G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYMqjs7gsZOQDAG12f5YGYF2K%26utype%3Dpre_vip%26sdk%3D13.1.1&deliveryId=711&key=sq_app_ad&miniWua=HHnB_grSGnJyxebPNJxVN%2BMIbeddALh5nDKzElEID/ROrEtI%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=703&sign=67DC1A053407BEE6E3E94CF53BFC4E31&timestamp=1624005239&userId=2126346865&user_id=2126346865&wua=HIVW_EE2oLyxEXPOtMLjX1Bxyhn6UwFllDGyxSoT%2BO5Q3xlN6mmKE4Bmbn02tPguC4ctcmj/ToY23GelKdoY2xhbY6uCSIkFB4rJAkvM6hFhcHWx7nq2KprAyVx2HwCoJnlAnun/5M4YMB7IdZH07T4u0UHoUanRwzKyjHg1V84Gg15D6B%2BW0CJ17jgMtYLuU7ickoO6Op9FNo2x8dQ17dFQgGMw/bcmsK9Gsv6fwzRgLxds%3D"},{"key":"shuqicjbody9","val":"wua=HIVW_CtV1JRvv9BvwM2F6wtI1cOabTWREykqqyPp5FYStj7TnPH3anF4q2rkIQerlMSMW%2BLwBxDzBIHd62miupdZWzi5Kz1u2TU7EaWOaJ%2Bnuapb2bZ4lM9nkIq%2BggdMEVDn2mzL5mv1AV4G41T7sS%2B2tilSYxkY%2F%2BezBXZCwv9hJAvK1GruHT1S2%2FN90xzxyDyKcexNrzb4MiO%2F5IVICiylm%2FT7rYzap0UFwHW3YlI3I4mI%3D&ua=&userId=2126346865&umidtoken=YMqjs7gsZOQDAG12f5YGYF2K&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&asac=2A20C07RJ9F51AOEFSNHDR&timestamp=1624005241&activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&sqSv=1.0&sign=1de5e43db3a5b430bd5d70983fe4ff8c&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.1.1%26utdid%3DYMqjs7gsZOQDAG12f5YGYF2K%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2126346865%26sn%3DC6BA867731D3B2EEAFB3CD655E540793DE09F352%26umidtoken%3DYMqjs7gsZOQDAG12f5YGYF2K%26msv%3D8.0.0%26brand%3DApple%26imei%3D4E6FC8DFA2A1273DA4F9A8A696C13A2AC9363E3F%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad2G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D21521703-3F6A-4140-8760-59E3F51EEB99"},{"key":"shuqijsspbody9","val":""},{"key":"shuqijsydurl9","val":""},{"key":"shuqijsydbody9","val":""},{"key":"shuqijsqdbody9","val":""},{"key":"shuqijsqdspyurl9","val":""},{"key":"shuqijsqdspbody9","val":""},{"key":"shuqijsrwbody9","val":""},{"key":"shuqijsfxbody9","val":""},{"key":"shuqijsbookurl9","val":""},{"key":"shuqijsbookbody9","val":""},{"key":"shuqijssprwurl9","val":""},{"key":"shuqiuserurl10","val":"https://ocean.shuqireader.com/api/jaccount/accountapi/v1/sapi/account/getBindinfo?userId=2127776447&sqSv=1.0&timestamp=1624005360&sign=96174944d7c45860319189406391d0f1&key=sq_h5_gateway"},{"key":"shuqisyurl10","val":"https://render.shuqireader.com/load/resource?sdk=13.1&utdid=YMdPDWrK4agDAD7dBymUZ2So&ustatus=0&first_placeid=111111&net_env=wifi&placeid=111111&user_id=2127776447&sn=4E98E842E8C693A9EC6EFC484FF923D998E97328&umidtoken=YMdPDWrK4agDAD7dBymUZ2So&msv=8.0.0&brand=Apple&imei=56090D78C7ED87F75F96F38D88BB5AEEA4AF3E44&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=iOS&ver=210301&mod=iPhone11ProMax&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=F7CAA710-F2EA-409C-BA2B-A3100847A12F"},{"key":"shuqisybody10","val":"appVer=4.3.6.0&imei=56090D78C7ED87F75F96F38D88BB5AEEA4AF3E44&isNewUser=1&params=%7B%22resources%22%3A%7B%22ShuqiVipEntry%22%3A%7B%7D%2C%22personalCardConfig%22%3A%7B%7D%7D%7D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=b326b3228a422a156d52b6de01312524&sn=4E98E842E8C693A9EC6EFC484FF923D998E97328&soft_id=21&timestamp=1624005273&user_id=2127776447&ver=210301"},{"key":"shuqispbody10","val":"_public=skinId%3D999%26idfa%3DF7CAA710-F2EA-409C-BA2B-A3100847A12F%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26umidtoken%3DYMdPDWrK4agDAD7dBymUZ2So%26user_id%3D2127776447%26sn%3D4E98E842E8C693A9EC6EFC484FF923D998E97328%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D56090D78C7ED87F75F96F38D88BB5AEEA4AF3E44%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhone11ProMax%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYMdPDWrK4agDAD7dBymUZ2So%26utype%3Dpre_vip%26sdk%3D13.1&deliveryId=525&key=sq_app_ad&miniWua=HHnB_xj/GZoVFWqxrkSyBLXUOr%2BE9z8XYFT5lDd29/nhv4rI%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=626&sign=6C408B79B5873D0CA69B7A1743CBB79F&timestamp=1624005327&userId=2127776447&user_id=2127776447&wua=HIVW_1z9uVho8iupp4C0RzPV22Be%2BwZF98UQH61JwhRxKjzqeSaIU9VP1Nyi%2B5gb2onZGFNpAyZhgcliqUk9jHIDmsXjk3PS0Vn/p5TFCeTKPWh3zEx7xPFbRyK8tFh7GI9GtwQUzFGmXKp8lGTeXJ5poKTiK0nd2xrVjsWh3w81SPd1q5wJmh6gx698gIAzJiAvodKtvUsDEzDDspjHKNSZ4gR3PsBBbvH1ZVddbq4nKHv8%3D"},{"key":"shuqiscbody10","val":"_public=skinId%253D999%2526idfa%253DF7CAA710-F2EA-409C-BA2B-A3100847A12F%2526ustatus%253D0%2526first_placeid%253D111111%2526net_env%253Dwifi%2526umidtoken%253DYMdPDWrK4agDAD7dBymUZ2So%2526user_id%253D2127776447%2526sn%253D4E98E842E8C693A9EC6EFC484FF923D998E97328%2526placeid%253D111111%2526msv%253D8.0.0%2526brand%253DApple%2526imei%253D56090D78C7ED87F75F96F38D88BB5AEEA4AF3E44%2526skinVersionPrefix%253D1%2526appVer%253D4.3.6.0%2526skinActiveColor%253D0F9970%2526manufacturer%253DApple%2526skinColor%253D23B383%2526platform%253DiOS%2526ver%253D210301%2526mod%253DiPhone11ProMax%2526statusBarHeight%253D44.000000%2526skinVersion%253D1%2526wh%253D1242x2688%2526soft_id%253D21%2526utdid%253DYMdPDWrK4agDAD7dBymUZ2So%2526utype%253Dpre_vip%2526sdk%253D13.1&key=and_log&readingList=%5B%7B%22startTime%22%3A1624005301%2C%22readObjType%22%3A1%2C%22attr%22%3A2%2C%22readObjId%22%3A%228313672%22%2C%22readChapterId%22%3A1401265%2C%22readingLen%22%3A17%7D%5D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=E9F0B40B3AF98D9A5576DF57EC5462CA&timestamp=1624005319&user_id=2127776447"},{"key":"shuqiydbody10","val":"_public=skinId%3D999%26idfa%3DF7CAA710-F2EA-409C-BA2B-A3100847A12F%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26umidtoken%3DYMdPDWrK4agDAD7dBymUZ2So%26user_id%3D2127776447%26sn%3D4E98E842E8C693A9EC6EFC484FF923D998E97328%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D56090D78C7ED87F75F96F38D88BB5AEEA4AF3E44%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhone11ProMax%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYMdPDWrK4agDAD7dBymUZ2So%26utype%3Dpre_vip%26sdk%3D13.1&deliveryId=707&key=sq_app_ad&miniWua=HHnB_krujXmxHpxT9dik9qPUO5wgJfgWN9TRHhWOY9zGNuq8%3D&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=678&sign=BDBEF3E16675A2F974A5AACDC3ACF9EB&timestamp=1624005312&userId=2127776447&wua=HIVW_J5LyPr2L5hTVBEwOdnvJMKA9x3/WDB/K7LfpXiqRdYz9kzKYffUTZiYwZ9Db9GqHhQnvZBj4L4BKUtSS/tiww2RmJWRtoTp9zzzvPmkbPOG%2Bd2n/j1qysVpsyEuDVfjPNmCXSsoJRQzX5RGi2ZwIUJuH9pYjFlKhKrHBuMeho7KGJsUJTUChbonVXb6%2BGznsIG8rzwnmMso9GNK%2BmgyfDyddEnK7slTfhz7TAE8vId8%3D"},{"key":"shuqiqdbody10","val":"clientTimestamp=1624005322&position=501&userId=2127776447&signInType=1&wua=HIVW_V3HiS6yhHzWBk7jeN7UTfFYtt0pXYnLghv2%2Bq0Ux%2BmtdyhTX6lvA7xKqkLdE4XSx0wQdqdx2aFrRPYV2W%2FxTvC7ug%2F5S8vytlNdTJvTG7sTKCav0qSc2eY819eSpmXvyQLSdyANxd8G%2Fd%2FA57ctK2b3R60sQgVuIlUaWgyZUgnYb6cHalL8sKfZwzI1PAVKjrM53iZ1QK8rP16v5tHOuYQvhTWeVrCIDEE5s%2F2OA%2BPs%3D&ua=&miniWua=HHnB_Vg6em3N7JWorMmzkI669Dvx%2B55n3puCviYBJks9IgXM%3D&umidtoken=YMdPDWrK4agDAD7dBymUZ2So&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&sign=3bb73129dea76cd164b9fcc149015787&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26sdk%3D13.1%26utdid%3DYMdPDWrK4agDAD7dBymUZ2So%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2127776447%26sn%3D4E98E842E8C693A9EC6EFC484FF923D998E97328%26umidtoken%3DYMdPDWrK4agDAD7dBymUZ2So%26msv%3D8.0.0%26brand%3DApple%26imei%3D56090D78C7ED87F75F96F38D88BB5AEEA4AF3E44%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone11ProMax%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DF7CAA710-F2EA-409C-BA2B-A3100847A12F"},{"key":"shuqirwbody10","val":""},{"key":"shuqifxbody10","val":""},{"key":"shuqisprwurl10","val":"https://ocean.shuqireader.com/api/ad/adserver/v1/api/getAdInfo?appVer=4.3.6.0&placeId=111111&platform=iOS&requestSrc=h5&resourceId=626&timestamp=1624005361&user_id=2127776447&sqSv=1.0&sign=aafbbc201850d6b2c249eb834f2cb833&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.1%26utdid%3DYMdPDWrK4agDAD7dBymUZ2So%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2127776447%26sn%3D4E98E842E8C693A9EC6EFC484FF923D998E97328%26umidtoken%3DYMdPDWrK4agDAD7dBymUZ2So%26msv%3D8.0.0%26brand%3DApple%26imei%3D56090D78C7ED87F75F96F38D88BB5AEEA4AF3E44%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone11ProMax%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DF7CAA710-F2EA-409C-BA2B-A3100847A12F"},{"key":"shuqijlbody10","val":"requestSrc=h5&userId=2127776447&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624005337&sqSv=1.0&sign=a2fe72f05b75c4ccf829621a22a2de19&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26sdk%3D13.1%26utdid%3DYMdPDWrK4agDAD7dBymUZ2So%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2127776447%26sn%3D4E98E842E8C693A9EC6EFC484FF923D998E97328%26umidtoken%3DYMdPDWrK4agDAD7dBymUZ2So%26msv%3D8.0.0%26brand%3DApple%26imei%3D56090D78C7ED87F75F96F38D88BB5AEEA4AF3E44%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone11ProMax%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DF7CAA710-F2EA-409C-BA2B-A3100847A12F"},{"key":"shuqisqjlbody10","val":"src=&userId=2127776447&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624005325&sqSv=1.0&sign=521d0d5e98bc813e1d5227d4823d9ffe&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26sdk%3D13.1%26utdid%3DYMdPDWrK4agDAD7dBymUZ2So%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2127776447%26sn%3D4E98E842E8C693A9EC6EFC484FF923D998E97328%26umidtoken%3DYMdPDWrK4agDAD7dBymUZ2So%26msv%3D8.0.0%26brand%3DApple%26imei%3D56090D78C7ED87F75F96F38D88BB5AEEA4AF3E44%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone11ProMax%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DF7CAA710-F2EA-409C-BA2B-A3100847A12F"},{"key":"shuqicjyurl10","val":"https://ocean.shuqireader.com/api/activity/activity/v1/lottery/info?timestamp=1624005363&userId=2127776447&activityId=311&sqSv=1.0&sign=2fa545998295cee32b8885371efc6cc3&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.1%26utdid%3DYMdPDWrK4agDAD7dBymUZ2So%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2127776447%26sn%3D4E98E842E8C693A9EC6EFC484FF923D998E97328%26umidtoken%3DYMdPDWrK4agDAD7dBymUZ2So%26msv%3D8.0.0%26brand%3DApple%26imei%3D56090D78C7ED87F75F96F38D88BB5AEEA4AF3E44%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone11ProMax%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DF7CAA710-F2EA-409C-BA2B-A3100847A12F"},{"key":"shuqicjcsbody10","val":"_public=skinId%3D999%26idfa%3DF7CAA710-F2EA-409C-BA2B-A3100847A12F%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26umidtoken%3DYMdPDWrK4agDAD7dBymUZ2So%26user_id%3D2127776447%26sn%3D4E98E842E8C693A9EC6EFC484FF923D998E97328%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D56090D78C7ED87F75F96F38D88BB5AEEA4AF3E44%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhone11ProMax%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYMdPDWrK4agDAD7dBymUZ2So%26utype%3Dpre_vip%26sdk%3D13.1&deliveryId=711&key=sq_app_ad&miniWua=HHnB_mCm0JhwZ2cgtw7J6271gy1ab6f5wgV4c37zjdBV7k40%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=703&sign=85640DF32FCFAC2969BEA3EBFF8B211A&timestamp=1624005343&userId=2127776447&user_id=2127776447&wua=HIVW_vzVNLUQmNt5LvoJZM%2BorgoMBiKxg5In9Eiu6GjOxpP%2BNOh9zZN4vSaZWnH3qRvBUGj0t/g%2BgpzZ4IhA0TIKwjDnTZa5mDkDVi9%2BBSyjLBdk2lbDInjqCGXzKydLVkQuARI6zrCsJw84kSRqaOt/dzx8C9ckZtpOl%2BS3j9NKtG7otA5gUnjCt47Bcj/RCT2LZtGplUdlDy34Iup0vsOyb5AyXXZgzRcaNNiB0Z2g6/VE%3D"},{"key":"shuqicjbody10","val":"wua=HIVW_41UI2TdMf9Mnh2tHqVWPUMU2b4mfnR1N9IOgR6hxP9xMDBWdw6zPQhE%2B4lCURr1tAPGIua78%2B8Q%2Bzx%2F502pyWwczJzvWclMqogl0YsUuJJhX1G2NIa4eanJyRM%2BRmw%2FFNTghvdHtjLp5PuVxCMjfqrmiFwpDDlm1GkhGH%2BEhuwIKG8Htu7HS59Uu%2BInkyOJ5K8J7mmtRf5NyDuwAq2hxe%2FU3dRbhrPltFSHDPi%2BkXC4%3D&ua=&userId=2127776447&umidtoken=YMdPDWrK4agDAD7dBymUZ2So&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&asac=2A20C07RJ9F51AOEFSNHDR&timestamp=1624005349&activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&sqSv=1.0&sign=261f136ba48f5a41bcc1cb35916a0f7c&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.1%26utdid%3DYMdPDWrK4agDAD7dBymUZ2So%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2127776447%26sn%3D4E98E842E8C693A9EC6EFC484FF923D998E97328%26umidtoken%3DYMdPDWrK4agDAD7dBymUZ2So%26msv%3D8.0.0%26brand%3DApple%26imei%3D56090D78C7ED87F75F96F38D88BB5AEEA4AF3E44%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone11ProMax%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DF7CAA710-F2EA-409C-BA2B-A3100847A12F"},{"key":"shuqijsspbody10","val":""},{"key":"shuqijsydurl10","val":""},{"key":"shuqijsydbody10","val":""},{"key":"shuqijsqdbody10","val":""},{"key":"shuqijsqdspyurl10","val":""},{"key":"shuqijsqdspbody10","val":""},{"key":"shuqijsrwbody10","val":""},{"key":"shuqijsfxbody10","val":""},{"key":"shuqijsbookurl10","val":""},{"key":"shuqijsbookbody10","val":""},{"key":"shuqijssprwurl10","val":""},{"key":"shuqiuserurl11","val":"https://ocean.shuqireader.com/api/jaccount/accountapi/v1/sapi/account/getBindinfo?userId=2127339686&sqSv=1.0&timestamp=1624005461&sign=13afef6000f8f7e37a3b109d469b60aa&key=sq_h5_gateway"},{"key":"shuqisyurl11","val":"https://render.shuqireader.com/load/resource?sdk=13.2.3&utdid=YMdPIgoTjLkDAC3Ha1i5h69o&ustatus=0&first_placeid=111111&net_env=4g&placeid=111111&user_id=2127339686&sn=512D61D4447114D7D4D2ED5A1DDA3BC36B19D712&umidtoken=YMdPIgoTjLkDAC3Ha1i5h69o&msv=8.0.0&brand=Apple&imei=5420B701ADCD65BA7F375B32C33EAF8151269AAC&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=iOS&ver=210301&mod=UnknowniPad&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=1355B3A5-340A-494D-B2F5-CB015A50A7CE"},{"key":"shuqisybody11","val":"appVer=4.3.6.0&imei=5420B701ADCD65BA7F375B32C33EAF8151269AAC&isNewUser=1&params=%7B%22resources%22%3A%7B%22ShuqiVipEntry%22%3A%7B%7D%2C%22personalCardConfig%22%3A%7B%7D%7D%7D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=f1f3067aee0d72a94dd68e0290bcf5da&sn=512D61D4447114D7D4D2ED5A1DDA3BC36B19D712&soft_id=21&timestamp=1624005382&user_id=2127339686&ver=210301"},{"key":"shuqispbody11","val":"_public=skinId%3D999%26idfa%3D1355B3A5-340A-494D-B2F5-CB015A50A7CE%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26umidtoken%3DYMdPIgoTjLkDAC3Ha1i5h69o%26user_id%3D2127339686%26sn%3D512D61D4447114D7D4D2ED5A1DDA3BC36B19D712%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D5420B701ADCD65BA7F375B32C33EAF8151269AAC%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYMdPIgoTjLkDAC3Ha1i5h69o%26utype%3Dpre_vip%26sdk%3D13.2.3&deliveryId=525&key=sq_app_ad&miniWua=HHnB_U3pChSmoxxxSQ/%2BwmHoxNj9ypn2z%2B%2BuS5cHnafZKZhE%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=626&sign=5618F181D887258A0C78F2A9CD590CDF&timestamp=1624005437&userId=2127339686&user_id=2127339686&wua=HIVW_YSqa2ow2GVuDXc6C9Z1AlcMPmv/1jQkqgkV/SMu8kaqRI4WxK4aIW5Fju6su9Fy3W%2B3%2BEgI6XfI7nd3E78AT8acd2Xu/80oSo8UnsLR0ZXOlZC7WqhzVAkrQ7aGMYmnYLD12xc3V38OoeAhzvD13aLD2fR4WhCOIkxZWRXF6yWsowXNitPZ1zp5qhNJSSyao43mpCIBm3aA0GfAYU8DfXr1xLKIIXGAI65wdyL7X5A4%3D"},{"key":"shuqiscbody11","val":"_public=skinId%253D999%2526idfa%253D1355B3A5-340A-494D-B2F5-CB015A50A7CE%2526ustatus%253D0%2526first_placeid%253D111111%2526net_env%253D4g%2526umidtoken%253DYMdPIgoTjLkDAC3Ha1i5h69o%2526user_id%253D2127339686%2526sn%253D512D61D4447114D7D4D2ED5A1DDA3BC36B19D712%2526placeid%253D111111%2526msv%253D8.0.0%2526brand%253DApple%2526imei%253D5420B701ADCD65BA7F375B32C33EAF8151269AAC%2526skinVersionPrefix%253D1%2526appVer%253D4.3.6.0%2526skinActiveColor%253D0F9970%2526manufacturer%253DApple%2526skinColor%253D23B383%2526platform%253DiOS%2526ver%253D210301%2526mod%253DUnknowniPad%2526statusBarHeight%253D44.000000%2526skinVersion%253D1%2526wh%253D1242x2688%2526soft_id%253D21%2526utdid%253DYMdPIgoTjLkDAC3Ha1i5h69o%2526utype%253Dpre_vip%2526sdk%253D13.2.3&key=and_log&readingList=%5B%7B%22startTime%22%3A1624005388%2C%22readObjType%22%3A1%2C%22attr%22%3A2%2C%22readObjId%22%3A%227910811%22%2C%22readChapterId%22%3A1214827%2C%22readingLen%22%3A39%7D%5D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=D5D22602BADFBCC9A5261A56AA2FECAC&timestamp=1624005427&user_id=2127339686"},{"key":"shuqiydbody11","val":"_public=skinId%3D999%26idfa%3D1355B3A5-340A-494D-B2F5-CB015A50A7CE%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26umidtoken%3DYMdPIgoTjLkDAC3Ha1i5h69o%26user_id%3D2127339686%26sn%3D512D61D4447114D7D4D2ED5A1DDA3BC36B19D712%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D5420B701ADCD65BA7F375B32C33EAF8151269AAC%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYMdPIgoTjLkDAC3Ha1i5h69o%26utype%3Dpre_vip%26sdk%3D13.2.3&deliveryId=707&key=sq_app_ad&miniWua=HHnB_xLjpKDUnyftMLL2DyNu2t%2BcfeE/BosMGcdgRdkJM%2Bh4%3D&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=678&sign=163768C6E62C645D05F00AD344EF0E6F&timestamp=1624005424&userId=2127339686&wua=HIVW_wSs43OxXfkhE0O3lZp6yIaCRMvNUOP6OO3Qv7fxK4Jy8MNacQMsA7Hf4/ouiaL7kFCBiDPKm8oV94WcfM3cHRzgaPy5LvLOfIVMpThiMDybJ7DpIVKCbOe2YhaYWTfvGwTKE0JUwqY1L2gxhrkk1O91BGzkkVCRyL0oYGJ%2Bqw93xjvPtshRY6JfkplG9lXXiBzXZz200tPqhDJNFO9iMPsEzandnD4zubrcbPoxy8tI%3D"},{"key":"shuqiqdbody11","val":"clientTimestamp=1624005429&position=501&userId=2127339686&signInType=1&wua=HIVW_20b%2FJi5RNNJ6%2Fy3FImJ4L8vbxHTHA1hrCd%2BSE3gbBuehLSj3neBZmN%2FEsm9ALw3PAWMKJKY1ztUSYd2uwmkPS3gy3hEpODdnr7VOQmc0jo2BS6smXgvOO9FndoAPleLgL4tusIZLJUeSygQdysSfguvvrvZ%2F3pMLeTHkJvM%2FNnF%2F3TQ1nfZQj4t04wRP7a9WnyWzRvjyhyBgFm%2Byp1LXDEmEOh5pRISfojmi2sCagxA%3D&ua=&miniWua=HHnB_%2Fm5G85O59cPu8ZrWj9HUyd0WoH2yXWHjzQWcCjmcRVY%3D&umidtoken=YMdPIgoTjLkDAC3Ha1i5h69o&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&sign=b3bbc96b73acbc73877c1d49879b484b&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.2.3%26utdid%3DYMdPIgoTjLkDAC3Ha1i5h69o%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2127339686%26sn%3D512D61D4447114D7D4D2ED5A1DDA3BC36B19D712%26umidtoken%3DYMdPIgoTjLkDAC3Ha1i5h69o%26msv%3D8.0.0%26brand%3DApple%26imei%3D5420B701ADCD65BA7F375B32C33EAF8151269AAC%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D1355B3A5-340A-494D-B2F5-CB015A50A7CE"},{"key":"shuqirwbody11","val":""},{"key":"shuqifxbody11","val":""},{"key":"shuqisprwurl11","val":"https://ocean.shuqireader.com/api/ad/adserver/v1/api/getAdInfo?appVer=4.3.6.0&placeId=111111&platform=iOS&requestSrc=h5&resourceId=626&timestamp=1624005461&user_id=2127339686&sqSv=1.0&sign=69e7e6748f5825fbc60a2480c260761d&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.2.3%26utdid%3DYMdPIgoTjLkDAC3Ha1i5h69o%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2127339686%26sn%3D512D61D4447114D7D4D2ED5A1DDA3BC36B19D712%26umidtoken%3DYMdPIgoTjLkDAC3Ha1i5h69o%26msv%3D8.0.0%26brand%3DApple%26imei%3D5420B701ADCD65BA7F375B32C33EAF8151269AAC%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D1355B3A5-340A-494D-B2F5-CB015A50A7CE"},{"key":"shuqijlbody11","val":"requestSrc=h5&userId=2127339686&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624005441&sqSv=1.0&sign=8aed384c04243c76e21d27ab013cea18&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.2.3%26utdid%3DYMdPIgoTjLkDAC3Ha1i5h69o%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2127339686%26sn%3D512D61D4447114D7D4D2ED5A1DDA3BC36B19D712%26umidtoken%3DYMdPIgoTjLkDAC3Ha1i5h69o%26msv%3D8.0.0%26brand%3DApple%26imei%3D5420B701ADCD65BA7F375B32C33EAF8151269AAC%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D1355B3A5-340A-494D-B2F5-CB015A50A7CE"},{"key":"shuqisqjlbody11","val":"src=&userId=2127339686&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624005435&sqSv=1.0&sign=58f47c5e370cc762707910f2b1f947a7&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.2.3%26utdid%3DYMdPIgoTjLkDAC3Ha1i5h69o%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2127339686%26sn%3D512D61D4447114D7D4D2ED5A1DDA3BC36B19D712%26umidtoken%3DYMdPIgoTjLkDAC3Ha1i5h69o%26msv%3D8.0.0%26brand%3DApple%26imei%3D5420B701ADCD65BA7F375B32C33EAF8151269AAC%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D1355B3A5-340A-494D-B2F5-CB015A50A7CE"},{"key":"shuqicjyurl11","val":"https://ocean.shuqireader.com/api/activity/activity/v1/lottery/info?timestamp=1624005463&userId=2127339686&activityId=311&sqSv=1.0&sign=6326dd3b297de18567433089c0affe0c&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.2.3%26utdid%3DYMdPIgoTjLkDAC3Ha1i5h69o%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2127339686%26sn%3D512D61D4447114D7D4D2ED5A1DDA3BC36B19D712%26umidtoken%3DYMdPIgoTjLkDAC3Ha1i5h69o%26msv%3D8.0.0%26brand%3DApple%26imei%3D5420B701ADCD65BA7F375B32C33EAF8151269AAC%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D1355B3A5-340A-494D-B2F5-CB015A50A7CE"},{"key":"shuqicjcsbody11","val":"_public=skinId%3D999%26idfa%3D1355B3A5-340A-494D-B2F5-CB015A50A7CE%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26umidtoken%3DYMdPIgoTjLkDAC3Ha1i5h69o%26user_id%3D2127339686%26sn%3D512D61D4447114D7D4D2ED5A1DDA3BC36B19D712%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D5420B701ADCD65BA7F375B32C33EAF8151269AAC%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYMdPIgoTjLkDAC3Ha1i5h69o%26utype%3Dpre_vip%26sdk%3D13.2.3&deliveryId=711&key=sq_app_ad&miniWua=HHnB_6v%2Br%2BPzCsbUAd01Kne6GNdpFYquo69pqdqJ%2Bdztnfqg%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=703&sign=ECFA00E4B60CBA7A72F9849358F73495&timestamp=1624005448&userId=2127339686&user_id=2127339686&wua=HIVW_kscvCfd9xmeFMnPaOvbjIPBM2uuGp%2BsEeuFzekxdPWeHBgWnwHV5bcDI9UQYrjLaxwaShx3IlnJEpOdJXN7Yr5PYchicYP0kPmUIJAFPpGvtqaR/8znFPZXYRs3yG1lqae2W0nu7KRpWPHIoZto0EA2vfFZXW0G9LTtxm%2BZZenQM%2BEOERoOMPOztMHyzXOnaXb%2BVBKIUIOJq9R0nnQbAVyU6LUVpMvwpdgZSP8XQ4dk%3D"},{"key":"shuqicjbody11","val":"wua=HIVW_WFnKThJQ%2F2WtREQTAdWEXs%2FpJLnNTkwJ2%2B7BSmmB%2FthM5u6AZk6qf91yQspX34nMqxi0GLV%2BBYFIwY%2BEJ8UVhwF347MaaAcIpLMclyCbXnqqGG1zx3Xq5tR%2F0UKs%2F1fhIlqRCxxDYz44yEfHD%2BC%2BWlvr6cmE3S2tkl6VXbP41kz5H1FLla5fvZ%2BTEgzutWU4F3nszbF4UZx%2BgNHdmGfwweZmOO9K0rZRTcfy5pH8HdQ%3D&ua=&userId=2127339686&umidtoken=YMdPIgoTjLkDAC3Ha1i5h69o&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&asac=2A20C07RJ9F51AOEFSNHDR&timestamp=1624005451&activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&sqSv=1.0&sign=75575f8dae70b206ac5a25794df9dc4a&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.2.3%26utdid%3DYMdPIgoTjLkDAC3Ha1i5h69o%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2127339686%26sn%3D512D61D4447114D7D4D2ED5A1DDA3BC36B19D712%26umidtoken%3DYMdPIgoTjLkDAC3Ha1i5h69o%26msv%3D8.0.0%26brand%3DApple%26imei%3D5420B701ADCD65BA7F375B32C33EAF8151269AAC%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D1355B3A5-340A-494D-B2F5-CB015A50A7CE"},{"key":"shuqijsspbody11","val":""},{"key":"shuqijsydurl11","val":""},{"key":"shuqijsydbody11","val":""},{"key":"shuqijsqdbody11","val":""},{"key":"shuqijsqdspyurl11","val":""},{"key":"shuqijsqdspbody11","val":""},{"key":"shuqijsrwbody11","val":""},{"key":"shuqijsfxbody11","val":""},{"key":"shuqijsbookurl11","val":""},{"key":"shuqijsbookbody11","val":""},{"key":"shuqijssprwurl11","val":""},{"key":"shuqiuserurl12","val":"https://ocean.shuqireader.com/api/jaccount/accountapi/v1/sapi/account/getBindinfo?userId=2128772296&sqSv=1.0&timestamp=1624005566&sign=a5aac2639efe6f12053f76df80295539&key=sq_h5_gateway"},{"key":"shuqisyurl12","val":"https://render.shuqireader.com/load/resource?sdk=13.0&utdid=YMdPLJGrBQEDAIHVKyK7PDqw&ustatus=0&first_placeid=111111&net_env=4g&placeid=111111&user_id=2128772296&sn=31B6FA30A5B405FBB857EBB2A791026FC41C3E9E&umidtoken=YMdPLJGrBQEDAIHVKyK7PDqw&msv=8.0.0&brand=Apple&imei=75EEAE800295938C5C9FDC985C53739ECDF092AB&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=iOS&ver=210301&mod=iPhoneXS&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=ADBD343F-5620-4DBC-81DE-9E4D154E2D75"},{"key":"shuqisybody12","val":"appVer=4.3.6.0&imei=75EEAE800295938C5C9FDC985C53739ECDF092AB&isNewUser=1&params=%7B%22resources%22%3A%7B%22ShuqiVipEntry%22%3A%7B%7D%2C%22personalCardConfig%22%3A%7B%7D%7D%7D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=2e638baae35de0134399d920224fc604&sn=31B6FA30A5B405FBB857EBB2A791026FC41C3E9E&soft_id=21&timestamp=1624005479&user_id=2128772296&ver=210301"},{"key":"shuqispbody12","val":"_public=skinId%3D999%26idfa%3DADBD343F-5620-4DBC-81DE-9E4D154E2D75%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26umidtoken%3DYMdPLJGrBQEDAIHVKyK7PDqw%26user_id%3D2128772296%26sn%3D31B6FA30A5B405FBB857EBB2A791026FC41C3E9E%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D75EEAE800295938C5C9FDC985C53739ECDF092AB%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhoneXS%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYMdPLJGrBQEDAIHVKyK7PDqw%26utype%3Dpre_vip%26sdk%3D13.0&deliveryId=525&key=sq_app_ad&miniWua=HHnB_2AAt4/aouxN19tm%2BC/LE1zwFQig31CC9QlTkKZsypbE%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=626&sign=E1F1338334EC75008D08C9EA4DE0DAE5&timestamp=1624005531&userId=2128772296&user_id=2128772296&wua=HIVW_U1OxkCKHZOcd7ch6%2BbP8WD9WkMp%2Ba0SZgLC08Ir00rrx7RuRhbKgmiBnfZyLYxmhsUNzWkSt2OUwLm36pMrvoXBkUtPhujSbLMLJSf9JjGOAGJEMbc4sRSV6DjskDdMU445lnuXVNaLj6jwRPkyPOFTsyzx3QNm5jxa6/2Ts9tJm5r9%2BqORRy0QY2MQP9OCJwTxWaTnsBb5fYkcCDPiNz2paOdVNYXInfTXbSpd1Gf8%3D"},{"key":"shuqiscbody12","val":"_public=skinId%253D999%2526idfa%253DADBD343F-5620-4DBC-81DE-9E4D154E2D75%2526ustatus%253D0%2526first_placeid%253D111111%2526net_env%253D4g%2526umidtoken%253DYMdPLJGrBQEDAIHVKyK7PDqw%2526user_id%253D2128772296%2526sn%253D31B6FA30A5B405FBB857EBB2A791026FC41C3E9E%2526placeid%253D111111%2526msv%253D8.0.0%2526brand%253DApple%2526imei%253D75EEAE800295938C5C9FDC985C53739ECDF092AB%2526skinVersionPrefix%253D1%2526appVer%253D4.3.6.0%2526skinActiveColor%253D0F9970%2526manufacturer%253DApple%2526skinColor%253D23B383%2526platform%253DiOS%2526ver%253D210301%2526mod%253DiPhoneXS%2526statusBarHeight%253D44.000000%2526skinVersion%253D1%2526wh%253D1242x2688%2526soft_id%253D21%2526utdid%253DYMdPLJGrBQEDAIHVKyK7PDqw%2526utype%253Dpre_vip%2526sdk%253D13.0&key=and_log&readingList=%5B%7B%22startTime%22%3A1624005508%2C%22readObjType%22%3A1%2C%22attr%22%3A2%2C%22readObjId%22%3A%226584515%22%2C%22readChapterId%22%3A639385%2C%22readingLen%22%3A14%7D%5D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=E3C57BB91D0CA93B0D87A6ABDF41C0C1&timestamp=1624005522&user_id=2128772296"},{"key":"shuqiydbody12","val":"_public=skinId%3D999%26idfa%3DADBD343F-5620-4DBC-81DE-9E4D154E2D75%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26umidtoken%3DYMdPLJGrBQEDAIHVKyK7PDqw%26user_id%3D2128772296%26sn%3D31B6FA30A5B405FBB857EBB2A791026FC41C3E9E%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D75EEAE800295938C5C9FDC985C53739ECDF092AB%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhoneXS%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYMdPLJGrBQEDAIHVKyK7PDqw%26utype%3Dpre_vip%26sdk%3D13.0&deliveryId=707&key=sq_app_ad&miniWua=HHnB_rvUQZcNdcrEV/3/n7PIFA72n2N2vmRJaofOqaNCaenA%3D&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=678&sign=497BBC2D0652E49DC78D07082836CAD0&timestamp=1624005517&userId=2128772296&wua=HIVW_KZlAzQuZB7oYVyHhCbBhkirPRngeMLy99V5qtr3TGDyvA8PxoBDJO/pc5YwEPmae7F7dTTLFIgqiHio8DTx5DxQBX0nhflG46jZkmBSwbp/bLeEQkwa0C4V567Ncwt7I6gxug7CRsimY5esHbHYn2mGXvt6ehLI2zfUqWyQZXamlIDo540bmIyu88H872mijbyLYW0f2Z/F6Ic4pFzvU1uj%2BsUG6qDVjqSEmhD%2BlFw8%3D"},{"key":"shuqiqdbody12","val":"clientTimestamp=1624005526&position=501&userId=2128772296&signInType=1&wua=HIVW_uMDCBvb7t%2FJ0dEY3sxilNL4IacR4yt%2FmjD0s%2FPszSs9wGDDpLCCHVcQB8jWVYYoKdRnoohJoUJgo%2BGukE2PzEjIaeAkNc06W7hYawF%2BoO4YH1SUPvormjgLyZZk5afdM2%2BKHzw3pp3Iph6XefJloDbmn0xdjfeD370A%2Bn91PLARjWQTmxS1GDRWIrSJzd04KGcHK89XCcwWk7G37kHC4IZWisI6v8lfkTCY9OwT5RWo%3D&ua=&miniWua=HHnB_XnpQfRPPMDpdVZ%2BUgOnEGuW16bepX61ogp72ZwssHCo%3D&umidtoken=YMdPLJGrBQEDAIHVKyK7PDqw&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&sign=30f6d8b57e9e132db63db1924959e5ba&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26sdk%3D13.0%26utdid%3DYMdPLJGrBQEDAIHVKyK7PDqw%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2128772296%26sn%3D31B6FA30A5B405FBB857EBB2A791026FC41C3E9E%26umidtoken%3DYMdPLJGrBQEDAIHVKyK7PDqw%26msv%3D8.0.0%26brand%3DApple%26imei%3D75EEAE800295938C5C9FDC985C53739ECDF092AB%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhoneXS%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DADBD343F-5620-4DBC-81DE-9E4D154E2D75"},{"key":"shuqirwbody12","val":""},{"key":"shuqifxbody12","val":""},{"key":"shuqisprwurl12","val":"https://ocean.shuqireader.com/api/ad/adserver/v1/api/getAdInfo?appVer=4.3.6.0&placeId=111111&platform=iOS&requestSrc=h5&resourceId=626&timestamp=1624005565&user_id=2128772296&sqSv=1.0&sign=05443cacdd3ea096806dce56cd2943fe&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26sdk%3D13.0%26utdid%3DYMdPLJGrBQEDAIHVKyK7PDqw%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2128772296%26sn%3D31B6FA30A5B405FBB857EBB2A791026FC41C3E9E%26umidtoken%3DYMdPLJGrBQEDAIHVKyK7PDqw%26msv%3D8.0.0%26brand%3DApple%26imei%3D75EEAE800295938C5C9FDC985C53739ECDF092AB%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhoneXS%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DADBD343F-5620-4DBC-81DE-9E4D154E2D75"},{"key":"shuqijlbody12","val":"requestSrc=h5&userId=2128772296&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624005537&sqSv=1.0&sign=7219890a46705a2e107c17a6394d44d5&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26sdk%3D13.0%26utdid%3DYMdPLJGrBQEDAIHVKyK7PDqw%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2128772296%26sn%3D31B6FA30A5B405FBB857EBB2A791026FC41C3E9E%26umidtoken%3DYMdPLJGrBQEDAIHVKyK7PDqw%26msv%3D8.0.0%26brand%3DApple%26imei%3D75EEAE800295938C5C9FDC985C53739ECDF092AB%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhoneXS%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DADBD343F-5620-4DBC-81DE-9E4D154E2D75"},{"key":"shuqisqjlbody12","val":"src=&userId=2128772296&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624005530&sqSv=1.0&sign=79799da48e89785902da28175f83112b&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26sdk%3D13.0%26utdid%3DYMdPLJGrBQEDAIHVKyK7PDqw%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2128772296%26sn%3D31B6FA30A5B405FBB857EBB2A791026FC41C3E9E%26umidtoken%3DYMdPLJGrBQEDAIHVKyK7PDqw%26msv%3D8.0.0%26brand%3DApple%26imei%3D75EEAE800295938C5C9FDC985C53739ECDF092AB%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhoneXS%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DADBD343F-5620-4DBC-81DE-9E4D154E2D75"},{"key":"shuqicjyurl12","val":"https://ocean.shuqireader.com/api/activity/activity/v1/lottery/info?timestamp=1624005567&userId=2128772296&activityId=311&sqSv=1.0&sign=d21a640d834297224e7df45345c2f097&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.0%26utdid%3DYMdPLJGrBQEDAIHVKyK7PDqw%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2128772296%26sn%3D31B6FA30A5B405FBB857EBB2A791026FC41C3E9E%26umidtoken%3DYMdPLJGrBQEDAIHVKyK7PDqw%26msv%3D8.0.0%26brand%3DApple%26imei%3D75EEAE800295938C5C9FDC985C53739ECDF092AB%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhoneXS%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DADBD343F-5620-4DBC-81DE-9E4D154E2D75"},{"key":"shuqicjcsbody12","val":"_public=skinId%3D999%26idfa%3DADBD343F-5620-4DBC-81DE-9E4D154E2D75%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26umidtoken%3DYMdPLJGrBQEDAIHVKyK7PDqw%26user_id%3D2128772296%26sn%3D31B6FA30A5B405FBB857EBB2A791026FC41C3E9E%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D75EEAE800295938C5C9FDC985C53739ECDF092AB%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhoneXS%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYMdPLJGrBQEDAIHVKyK7PDqw%26utype%3Dpre_vip%26sdk%3D13.0&deliveryId=711&key=sq_app_ad&miniWua=HHnB_5nnhco4PhtzhT4B7ScYHb97LRnPKiA4wjg/9KWq77s0%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=703&sign=BFAD4C5BFAEEFBB94D571D3DE0254E92&timestamp=1624005546&userId=2128772296&user_id=2128772296&wua=HIVW_y9f4t9XlKoCrXq7omW5FBbVmdsb2cCpEnLizQtc4Mz/ClSHW5zT%2B7XTOzivVt%2BMP2Oafr9JAzf3KXrlBO3yNxQGPGXPXHopw/3ayC4Q8toksLcSe1ppjeQo/H0h5r9ZdGUeqcKhfQyh3Qj0q37lfuF1laSXKLUTz4yQWohBZEcRbpgE9CLVNCnByKzel0pbeZpvvTr8Pt3etK5FNdTmCOZnYNSnH1B4ophhh/HsY0Us%3D"},{"key":"shuqicjbody12","val":"wua=HIVW_8YMcKzmEDfgYohmAXb5tM9rYXcHirS4NvE9tz7Np%2FBqAFYF41PzvDYABXoJVStgcMm%2BVBgekt5WOZpyA2NmDZADGrvenfLSRMbrDW4Jh2ZMwTA74jGcnnPxQo9T%2F%2FnWMK4v4ux5EsSGM68lOjgWo2fUwhhjYw8B81R3Qc84MUxz%2BvVTK0NQTaeNmUgEwRynUr%2Fu23JzBFoQbjcvavtMTrf6%2Bpwb8YNWv%2FazlsBG9NDI%3D&ua=&userId=2128772296&umidtoken=YMdPLJGrBQEDAIHVKyK7PDqw&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&asac=2A20C07RJ9F51AOEFSNHDR&timestamp=1624005550&activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&sqSv=1.0&sign=39d240f03226e72596f210eaf984d3de&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.0%26utdid%3DYMdPLJGrBQEDAIHVKyK7PDqw%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2128772296%26sn%3D31B6FA30A5B405FBB857EBB2A791026FC41C3E9E%26umidtoken%3DYMdPLJGrBQEDAIHVKyK7PDqw%26msv%3D8.0.0%26brand%3DApple%26imei%3D75EEAE800295938C5C9FDC985C53739ECDF092AB%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhoneXS%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DADBD343F-5620-4DBC-81DE-9E4D154E2D75"},{"key":"shuqijsspbody12","val":""},{"key":"shuqijsydurl12","val":""},{"key":"shuqijsydbody12","val":""},{"key":"shuqijsqdbody12","val":""},{"key":"shuqijsqdspyurl12","val":""},{"key":"shuqijsqdspbody12","val":""},{"key":"shuqijsrwbody12","val":""},{"key":"shuqijsfxbody12","val":""},{"key":"shuqijsbookurl12","val":""},{"key":"shuqijsbookbody12","val":""},{"key":"shuqijssprwurl12","val":""},{"key":"shuqiuserurl13","val":"https://ocean.shuqireader.com/api/jaccount/accountapi/v1/sapi/account/getBindinfo?userId=2124471777&sqSv=1.0&timestamp=1624005709&sign=933f840303efb619f99e040553726dda&key=sq_h5_gateway"},{"key":"shuqisyurl13","val":"https://render.shuqireader.com/load/resource?sdk=13.2.3&utdid=YMdPQuAAuWIDALpfpsWqygP5&ustatus=0&first_placeid=111111&net_env=3g&placeid=111111&user_id=2124471777&sn=E21A8ADED250D3EF94B1341F23212732F469A525&umidtoken=YMdPQuAAuWIDALpfpsWqygP5&msv=8.0.0&brand=Apple&imei=ACB3E3C42C998F5AF7C2FBE37B631C774C62BC5D&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&session=&skinColor=23B383&platform=iOS&ver=210301&mod=iPhone8P&statusBarHeight=44.000000&skinVersion=1&wh=1242x2688&soft_id=21&utype=pre_vip&skinId=999&idfa=467ADB67-77B9-46C4-B36D-EC805A109CFF"},{"key":"shuqisybody13","val":"appVer=4.3.6.0&imei=ACB3E3C42C998F5AF7C2FBE37B631C774C62BC5D&isNewUser=1&params=%7B%22resources%22%3A%7B%22ShuqiVipEntry%22%3A%7B%7D%2C%22personalCardConfig%22%3A%7B%7D%7D%7D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=3273b206d8045d146df0c86dd25126a1&sn=E21A8ADED250D3EF94B1341F23212732F469A525&soft_id=21&timestamp=1624005605&user_id=2124471777&ver=210301"},{"key":"shuqispbody13","val":"_public=utype%3Dpre_vip%26idfa%3D467ADB67-77B9-46C4-B36D-EC805A109CFF%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26umidtoken%3DYMdPQuAAuWIDALpfpsWqygP5%26user_id%3D2124471777%26sn%3DE21A8ADED250D3EF94B1341F23212732F469A525%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3DACB3E3C42C998F5AF7C2FBE37B631C774C62BC5D%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhone8P%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26utdid%3DYMdPQuAAuWIDALpfpsWqygP5%26soft_id%3D21%26sdk%3D13.2.3&deliveryId=525&key=sq_app_ad&miniWua=HHnB_orK9zIJfpeel05%2B1NnWWLipLFU%2B1v/v6jBfwpSQagSc%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=626&sign=9D24090C56F0BCDC7F680CCC5ED96D8C&timestamp=1624005671&userId=2124471777&user_id=2124471777&wua=HIVW_UHJRn7Qh9kU34lSvE8Xj/eQv2JIpqt7%2Bwy8m9tc5X3h8N4T3VKzKyp1iAocJPK7VSNZB4bVTNNY3OV%2By3iL09bVsmLI9DJrkkQKX9DRi46q6KoSBQSNhSkXAS4hwE7VV85TT4JLCjGtgYQrL7hj/H1OOAedsWXlmC4IRxwDDAmIQo/A9eoxzIJdmZOBto0DVtnYVoJruyWoqqun47U/Gr21UbzGtC83tTA6mGtszriY%3D"},{"key":"shuqiscbody13","val":"_public=skinId%253D999%2526idfa%253D467ADB67-77B9-46C4-B36D-EC805A109CFF%2526ustatus%253D0%2526first_placeid%253D111111%2526net_env%253D3g%2526umidtoken%253DYMdPQuAAuWIDALpfpsWqygP5%2526user_id%253D2124471777%2526sn%253DE21A8ADED250D3EF94B1341F23212732F469A525%2526placeid%253D111111%2526msv%253D8.0.0%2526brand%253DApple%2526imei%253DACB3E3C42C998F5AF7C2FBE37B631C774C62BC5D%2526skinVersionPrefix%253D1%2526appVer%253D4.3.6.0%2526skinActiveColor%253D0F9970%2526manufacturer%253DApple%2526skinColor%253D23B383%2526platform%253DiOS%2526ver%253D210301%2526mod%253DiPhone8P%2526statusBarHeight%253D44.000000%2526skinVersion%253D1%2526wh%253D1242x2688%2526soft_id%253D21%2526utdid%253DYMdPQuAAuWIDALpfpsWqygP5%2526utype%253Dpre_vip%2526sdk%253D13.2.3&key=and_log&readingList=%5B%7B%22startTime%22%3A1624005589%2C%22readObjType%22%3A1%2C%22attr%22%3A2%2C%22readObjId%22%3A%228476633%22%2C%22readChapterId%22%3A1582788%2C%22readingLen%22%3A15%7D%5D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=F01D7135BA92C45312D497489816CEC4&timestamp=1624005605&user_id=2124471777"},{"key":"shuqiydbody13","val":""},{"key":"shuqiqdbody13","val":"clientTimestamp=1624005652&position=501&userId=2124471777&signInType=1&wua=HIVW_Cc0PQ5Frjg6d35PdTsQP%2F9Du6IEh86D0gwUeGfA%2F%2BL1VK%2BHc30YY0Ih7QTEn7HnlbA1Zv%2BtXywzSXMgSNzoVMTLkb6Bvq3xKw5HoPo0jv08J0v%2B5wQHTGbOISGOCt29CeD%2FKpT3cMJqYSA%2FKHSIiEg8e4lKsJWs6e0%2FjZyBTvmPClEB3ZRYKVM8WFeUAiX7IqTYmj%2FxhCSkQjguZoCAUGSDPH%2BMqtR38uOSTc3CxlyU%3D&ua=&miniWua=HHnB_DZeoyRB%2FIn06%2FnNU6%2BBEF4i5J7bL4P8xYjngOHaxxqQ%3D&umidtoken=YMdPQuAAuWIDALpfpsWqygP5&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&sign=b8153c4504f42fddd4d2419c8c83affb&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26sdk%3D13.2.3%26utdid%3DYMdPQuAAuWIDALpfpsWqygP5%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2124471777%26sn%3DE21A8ADED250D3EF94B1341F23212732F469A525%26umidtoken%3DYMdPQuAAuWIDALpfpsWqygP5%26msv%3D8.0.0%26brand%3DApple%26imei%3DACB3E3C42C998F5AF7C2FBE37B631C774C62BC5D%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone8P%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D467ADB67-77B9-46C4-B36D-EC805A109CFF"},{"key":"shuqirwbody13","val":""},{"key":"shuqifxbody13","val":""},{"key":"shuqisprwurl13","val":"https://ocean.shuqireader.com/api/ad/adserver/v1/api/getAdInfo?appVer=4.3.6.0&placeId=111111&platform=iOS&requestSrc=h5&resourceId=626&timestamp=1624005709&user_id=2124471777&sqSv=1.0&sign=ddce1b2e510a42ffddfcadce3a0e1431&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26sdk%3D13.2.3%26utdid%3DYMdPQuAAuWIDALpfpsWqygP5%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2124471777%26sn%3DE21A8ADED250D3EF94B1341F23212732F469A525%26umidtoken%3DYMdPQuAAuWIDALpfpsWqygP5%26msv%3D8.0.0%26brand%3DApple%26imei%3DACB3E3C42C998F5AF7C2FBE37B631C774C62BC5D%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone8P%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D467ADB67-77B9-46C4-B36D-EC805A109CFF"},{"key":"shuqijlbody13","val":"requestSrc=h5&userId=2124471777&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624005683&sqSv=1.0&sign=722817180d2309d644ee7c0f8e886097&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26sdk%3D13.2.3%26utdid%3DYMdPQuAAuWIDALpfpsWqygP5%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2124471777%26sn%3DE21A8ADED250D3EF94B1341F23212732F469A525%26umidtoken%3DYMdPQuAAuWIDALpfpsWqygP5%26msv%3D8.0.0%26brand%3DApple%26imei%3DACB3E3C42C998F5AF7C2FBE37B631C774C62BC5D%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone8P%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D467ADB67-77B9-46C4-B36D-EC805A109CFF"},{"key":"shuqisqjlbody13","val":"src=&userId=2124471777&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624005680&sqSv=1.0&sign=536bf7bd5e4b25518e519c8a1d4970f7&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26sdk%3D13.2.3%26utdid%3DYMdPQuAAuWIDALpfpsWqygP5%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2124471777%26sn%3DE21A8ADED250D3EF94B1341F23212732F469A525%26umidtoken%3DYMdPQuAAuWIDALpfpsWqygP5%26msv%3D8.0.0%26brand%3DApple%26imei%3DACB3E3C42C998F5AF7C2FBE37B631C774C62BC5D%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone8P%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D467ADB67-77B9-46C4-B36D-EC805A109CFF"},{"key":"shuqicjyurl13","val":"https://ocean.shuqireader.com/api/activity/activity/v1/lottery/info?timestamp=1624005713&userId=2124471777&activityId=311&sqSv=1.0&sign=9b1df9cf54764c1400c7d2c1ae14a68b&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.2.3%26utdid%3DYMdPQuAAuWIDALpfpsWqygP5%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2124471777%26sn%3DE21A8ADED250D3EF94B1341F23212732F469A525%26umidtoken%3DYMdPQuAAuWIDALpfpsWqygP5%26msv%3D8.0.0%26brand%3DApple%26imei%3DACB3E3C42C998F5AF7C2FBE37B631C774C62BC5D%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone8P%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D467ADB67-77B9-46C4-B36D-EC805A109CFF"},{"key":"shuqicjcsbody13","val":"_public=utype%3Dpre_vip%26idfa%3D467ADB67-77B9-46C4-B36D-EC805A109CFF%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26umidtoken%3DYMdPQuAAuWIDALpfpsWqygP5%26user_id%3D2124471777%26sn%3DE21A8ADED250D3EF94B1341F23212732F469A525%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3DACB3E3C42C998F5AF7C2FBE37B631C774C62BC5D%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhone8P%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26utdid%3DYMdPQuAAuWIDALpfpsWqygP5%26soft_id%3D21%26sdk%3D13.2.3&deliveryId=711&key=sq_app_ad&miniWua=HHnB_pItGJiXU3TwFndAFjHzGf2awhqwplVR9IuruRkU/EMQ%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=703&sign=4C7B0F0413F013BD5FA06D139204BC1D&timestamp=1624005688&userId=2124471777&user_id=2124471777&wua=HIVW_clWjS5coBNVtM1tWX%2BqHQ75wwG0o4XfEgJNuXEieXgMnE3rgeEtPFrx2xzcvwVIczv/83ZLoBwRrCWRklKALKxngfx9ClChcQWkbfsWG4bGacCtZnD01IM8WXiGusjjfOO1IW6PFYQ8N0uy6Df390uhzGeoDLC82W64fCfjMnhpUghhLOVFQlEhuGrzlRUAy9qtPmWn8AZBxfHMSUGrnL9fedd0RInJrf5RrsstPs0Q%3D"},{"key":"shuqicjbody13","val":"wua=HIVW_mKCpRcOuq0aLVJsmGmlGgKCi09lIUmkbsZyzNALUhX5%2FxUY30qkF5pcnhv9vyQlpZt1ODwlpvsBipGbdIxcsQh1hrdlMPseLvbO9FC7%2BKXZ2rQBFk3Ij%2FgJyYKzAQt%2BXGi6AN6IbNsLIF2Uzo%2FIJOPBmptUxFOm4NsaNqWUL8S7TX88KHOTezBo%2BvUgvXYMKgEpZ5Z1B5HLKVOONDQ5SaFoJwRtXKHfatOwJv6aW%2F4s%3D&ua=&userId=2124471777&umidtoken=YMdPQuAAuWIDALpfpsWqygP5&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&asac=2A20C07RJ9F51AOEFSNHDR&timestamp=1624005695&activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&sqSv=1.0&sign=30eee66cdba1326f1f50d9a73e00a36a&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.2.3%26utdid%3DYMdPQuAAuWIDALpfpsWqygP5%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2124471777%26sn%3DE21A8ADED250D3EF94B1341F23212732F469A525%26umidtoken%3DYMdPQuAAuWIDALpfpsWqygP5%26msv%3D8.0.0%26brand%3DApple%26imei%3DACB3E3C42C998F5AF7C2FBE37B631C774C62BC5D%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone8P%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D467ADB67-77B9-46C4-B36D-EC805A109CFF"},{"key":"shuqijsspbody13","val":""},{"key":"shuqijsydurl13","val":""},{"key":"shuqijsydbody13","val":""},{"key":"shuqijsqdbody13","val":""},{"key":"shuqijsqdspyurl13","val":""},{"key":"shuqijsqdspbody13","val":""},{"key":"shuqijsrwbody13","val":""},{"key":"shuqijsfxbody13","val":""},{"key":"shuqijsbookurl13","val":""},{"key":"shuqijsbookbody13","val":""},{"key":"shuqijssprwurl13","val":""},{"key":"shuqiuserurl14","val":"https://ocean.shuqireader.com/api/jaccount/accountapi/v1/sapi/account/getBindinfo?userId=2126743668&sqSv=1.0&timestamp=1624005865&sign=d4877f97f196e8ea1fa97055829e71ba&key=sq_h5_gateway"},{"key":"shuqisyurl14","val":"https://render.shuqireader.com/load/resource?sdk=13.3&utdid=YMdPLJGrBQEDAIHVKyK7PDqw&ustatus=0&first_placeid=111111&net_env=wifi&placeid=111111&user_id=2126743668&sn=A0230BACDCC75850F8FA53CFCB4E67687B3CEA2E&umidtoken=YMdPLJGrBQEDAIHVKyK7PDqw&msv=8.0.0&brand=Apple&imei=C4FA057F26BBF2ABD553AC780B79FCE8AF3E5313&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=iOS&ver=210301&mod=iPhoneXMAX&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=45F11D95-4E80-4DC3-B44F-F767B7601C25"},{"key":"shuqisybody14","val":"appVer=4.3.6.0&imei=C4FA057F26BBF2ABD553AC780B79FCE8AF3E5313&isNewUser=1&params=%7B%22resources%22%3A%7B%22ShuqiVipEntry%22%3A%7B%7D%2C%22personalCardConfig%22%3A%7B%7D%7D%7D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=b230cdaff765a6de3adc4bcd538670cb&sn=A0230BACDCC75850F8FA53CFCB4E67687B3CEA2E&soft_id=21&timestamp=1624005812&user_id=2126743668&ver=210301"},{"key":"shuqispbody14","val":"_public=skinId%3D999%26idfa%3D45F11D95-4E80-4DC3-B44F-F767B7601C25%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26umidtoken%3DYMdPLJGrBQEDAIHVKyK7PDqw%26user_id%3D2126743668%26sn%3DA0230BACDCC75850F8FA53CFCB4E67687B3CEA2E%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3DC4FA057F26BBF2ABD553AC780B79FCE8AF3E5313%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhoneXMAX%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYMdPLJGrBQEDAIHVKyK7PDqw%26utype%3Dpre_vip%26sdk%3D13.3&deliveryId=525&key=sq_app_ad&miniWua=HHnB_iBZfRv06vRkL3OpjlJH03hKNZnIc3RPqvX0vv%2BtOZBE%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=626&sign=CF9D333A04C28C8252982FE95EE22967&timestamp=1624005825&userId=2126743668&user_id=2126743668&wua=HIVW_cq2Kj9lZGSd0%2Beun2GIq5%2Br75m7YSQ1nyY14ItGaVoqxUKxdABoIaA4RoQ3JTFzOoN%2BB8SyokHFosHEz3Ejldzdvt9Q4CTeviXsILPyY3fPfCuELSwUoNOqZUmKtGGPLor0LIEoGSCxxjJb8g79TmTXQxhrYOk1V9DMZJAsgdyLnJXHrWcJlKvmUNjI/AlLIjsMci72YkCzgBPY7dEsmHLeYnzUyuNv2uPtJDyGBMeE%3D"},{"key":"shuqiscbody14","val":"_public=utype%253Dpre_vip%2526idfa%253D45F11D95-4E80-4DC3-B44F-F767B7601C25%2526ustatus%253D0%2526first_placeid%253D111111%2526net_env%253Dwifi%2526umidtoken%253DYMdPLJGrBQEDAIHVKyK7PDqw%2526user_id%253D2126743668%2526sn%253DA0230BACDCC75850F8FA53CFCB4E67687B3CEA2E%2526placeid%253D111111%2526msv%253D8.0.0%2526brand%253DApple%2526imei%253DC4FA057F26BBF2ABD553AC780B79FCE8AF3E5313%2526skinVersionPrefix%253D1%2526appVer%253D4.3.6.0%2526skinActiveColor%253D0F9970%2526manufacturer%253DApple%2526statusBarHeight%253D44.000000%2526skinColor%253D23B383%2526platform%253DiOS%2526ver%253D210301%2526mod%253DiPhoneXMAX%2526skinVersion%253D1%2526wh%253D1242x2688%2526skinId%253D999%2526utdid%253DYMdPLJGrBQEDAIHVKyK7PDqw%2526soft_id%253D21%2526sdk%253D13.3&key=and_log&readingList=%5B%7B%22startTime%22%3A1624005766%2C%22readObjType%22%3A1%2C%22attr%22%3A2%2C%22readObjId%22%3A%226725806%22%2C%22readChapterId%22%3A721665%2C%22readingLen%22%3A44%7D%5D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=4527A54EFE7E7DA5DB44C01892D35556&timestamp=1624005811&user_id=2126743668"},{"key":"shuqiydbody14","val":"_public=utype%3Dpre_vip%26idfa%3D45F11D95-4E80-4DC3-B44F-F767B7601C25%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26umidtoken%3DYMdPLJGrBQEDAIHVKyK7PDqw%26user_id%3D2126743668%26sn%3DA0230BACDCC75850F8FA53CFCB4E67687B3CEA2E%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3DC4FA057F26BBF2ABD553AC780B79FCE8AF3E5313%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhoneXMAX%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26utdid%3DYMdPLJGrBQEDAIHVKyK7PDqw%26soft_id%3D21%26sdk%3D13.3&deliveryId=707&key=sq_app_ad&miniWua=HHnB_sXR7YB2r67uhyBWE3S0QDKUIbRib1uKxSAZuMbdfOPw%3D&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=678&sign=DF5D4FF72A827B824436C1B9765DE0A7&timestamp=1624005796&userId=2126743668&wua=HIVW_uuKsQxqIFpo4dXiKxZUlKWLG/Gpzn%2Bo/SkscAfYECIQUT318tdKP7iOlslC0VzHXpYuB21aKravO%2Bewx6sDIFBeOX2PknTGeHh8gqyin8UIwuF749%2BIZ7I5ThqCqEgAg6LGIPkPHImWw2KfaQsHX854GYh3OPvisZKKlGrpehakv2jsNQv78H8ewoS4xHUtAxj0SZeyBLVYPLW/7TbNhB5bz%2BrvYeW57FUwSxrgGFHY%3D"},{"key":"shuqiqdbody14","val":"clientTimestamp=1624005818&position=501&userId=2126743668&signInType=1&wua=HIVW_ok5gvDhPeY0%2FjUEeIZGy0PurupEdmMbH3OzmcUZcACla6bw4E44S7tPb9v9uXd8JNIKp28gLJod5uYq7Mxy%2F%2B2NjHr5udifZYBKLFgozS625Lwo3M6DfrCEAhe42lUU2g3M7e%2FCDQBD3u9YGCViAf63VO1UKt7PtloCRGU1JPqF1RdtbdwX8ztfbAGccJJhXd%2BYbHou1xjgtlFbVP%2FAGTkIV1M0tQ4mpvxU6PalOo%2BQ%3D&ua=&miniWua=HHnB_wzRhQHMHR%2B4GPct75koaK1%2Fw3AzZNRiSRUjr61YJSIQ%3D&umidtoken=YMdPLJGrBQEDAIHVKyK7PDqw&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&sign=f10d09a8ef96d7baf8ec03ae1e28ef34&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.3%26utdid%3DYMdPLJGrBQEDAIHVKyK7PDqw%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2126743668%26sn%3DA0230BACDCC75850F8FA53CFCB4E67687B3CEA2E%26umidtoken%3DYMdPLJGrBQEDAIHVKyK7PDqw%26msv%3D8.0.0%26brand%3DApple%26imei%3DC4FA057F26BBF2ABD553AC780B79FCE8AF3E5313%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhoneXMAX%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D45F11D95-4E80-4DC3-B44F-F767B7601C25"},{"key":"shuqirwbody14","val":""},{"key":"shuqifxbody14","val":""},{"key":"shuqisprwurl14","val":"https://ocean.shuqireader.com/api/ad/adserver/v1/api/getAdInfo?appVer=4.3.6.0&placeId=111111&platform=iOS&requestSrc=h5&resourceId=626&timestamp=1624005862&user_id=2126743668&sqSv=1.0&sign=f4e172528b1807f18f6d600dd445e365&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.3%26utdid%3DYMdPLJGrBQEDAIHVKyK7PDqw%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2126743668%26sn%3DA0230BACDCC75850F8FA53CFCB4E67687B3CEA2E%26umidtoken%3DYMdPLJGrBQEDAIHVKyK7PDqw%26msv%3D8.0.0%26brand%3DApple%26imei%3DC4FA057F26BBF2ABD553AC780B79FCE8AF3E5313%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhoneXMAX%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D45F11D95-4E80-4DC3-B44F-F767B7601C25"},{"key":"shuqijlbody14","val":"requestSrc=h5&userId=2126743668&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624005836&sqSv=1.0&sign=8a8db6734d62d7578006a2bb754927fb&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.3%26utdid%3DYMdPLJGrBQEDAIHVKyK7PDqw%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2126743668%26sn%3DA0230BACDCC75850F8FA53CFCB4E67687B3CEA2E%26umidtoken%3DYMdPLJGrBQEDAIHVKyK7PDqw%26msv%3D8.0.0%26brand%3DApple%26imei%3DC4FA057F26BBF2ABD553AC780B79FCE8AF3E5313%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhoneXMAX%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D45F11D95-4E80-4DC3-B44F-F767B7601C25"},{"key":"shuqisqjlbody14","val":"src=&userId=2126743668&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624005822&sqSv=1.0&sign=ef551ac9e514ad48cbb9cb169f25a356&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.3%26utdid%3DYMdPLJGrBQEDAIHVKyK7PDqw%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2126743668%26sn%3DA0230BACDCC75850F8FA53CFCB4E67687B3CEA2E%26umidtoken%3DYMdPLJGrBQEDAIHVKyK7PDqw%26msv%3D8.0.0%26brand%3DApple%26imei%3DC4FA057F26BBF2ABD553AC780B79FCE8AF3E5313%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhoneXMAX%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D45F11D95-4E80-4DC3-B44F-F767B7601C25"},{"key":"shuqicjyurl14","val":"https://ocean.shuqireader.com/api/activity/activity/v1/lottery/info?timestamp=1624005866&userId=2126743668&activityId=311&sqSv=1.0&sign=5fe835ad803320ea4c9f396ee4ab8e6d&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.3%26utdid%3DYMdPLJGrBQEDAIHVKyK7PDqw%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2126743668%26sn%3DA0230BACDCC75850F8FA53CFCB4E67687B3CEA2E%26umidtoken%3DYMdPLJGrBQEDAIHVKyK7PDqw%26msv%3D8.0.0%26brand%3DApple%26imei%3DC4FA057F26BBF2ABD553AC780B79FCE8AF3E5313%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhoneXMAX%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D45F11D95-4E80-4DC3-B44F-F767B7601C25"},{"key":"shuqicjcsbody14","val":"_public=skinId%3D999%26idfa%3D45F11D95-4E80-4DC3-B44F-F767B7601C25%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26umidtoken%3DYMdPLJGrBQEDAIHVKyK7PDqw%26user_id%3D2126743668%26sn%3DA0230BACDCC75850F8FA53CFCB4E67687B3CEA2E%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3DC4FA057F26BBF2ABD553AC780B79FCE8AF3E5313%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhoneXMAX%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYMdPLJGrBQEDAIHVKyK7PDqw%26utype%3Dpre_vip%26sdk%3D13.3&deliveryId=711&key=sq_app_ad&miniWua=HHnB_hZKVP3vZAy5Pv59eCTQByVKzJCtWXAoeeDK1J/Izu9A%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=703&sign=FBF068BDF5E4598E2EAE136DC2C10D32&timestamp=1624005846&userId=2126743668&user_id=2126743668&wua=HIVW_pnONIJ1spGUkpT2eXpN8tXAwHh1aGDNfFSUau3xnK33C9zS5wrZ/YSMYJJLyFwuUH942ETNlEeMWWk4vdptoHJg80CY/CZwfzJmJYccSyQ/h1iMcK14/UHK2P9bLvtfhYhFImmR0/o%2BVPAOhq7X97EbbjYRp4iXs5KnCvfdsUXWcxY2VLYAqbD9/R19wpNYaFgOq3OX%2BmrjJ2UxQ0CvPmOtXQFmHKjTL%2BpjLkQlhL9Y%3D"},{"key":"shuqicjbody14","val":"wua=HIVW_OwSioFpU9cQ26pA%2B04wezPtdxbViGRzGKzyp2T4ehK51tWQTbRejTpkaSLGUCCXlRgrr5OMxTHluPbfjs64M%2BKYGQG4hbXb%2BTpAiVT3oasE8aBLQqEwJbfpm%2Fr4OtQ7uH%2F8zs68dj%2B2mZIlEWQrHWKWSUWf8pGpdNxdqqMw8Yx%2BYQTl3BzNR07rj6QQjvisbrRNeylaBDP3Hhp9FBlCorUsnk8l1nS5Elw5Z4h3M8AQ%3D&ua=&userId=2126743668&umidtoken=YMdPLJGrBQEDAIHVKyK7PDqw&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&asac=2A20C07RJ9F51AOEFSNHDR&timestamp=1624005851&activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&sqSv=1.0&sign=1f422823ad13be7e0cf3637e5caddb04&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.3%26utdid%3DYMdPLJGrBQEDAIHVKyK7PDqw%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2126743668%26sn%3DA0230BACDCC75850F8FA53CFCB4E67687B3CEA2E%26umidtoken%3DYMdPLJGrBQEDAIHVKyK7PDqw%26msv%3D8.0.0%26brand%3DApple%26imei%3DC4FA057F26BBF2ABD553AC780B79FCE8AF3E5313%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhoneXMAX%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D45F11D95-4E80-4DC3-B44F-F767B7601C25"},{"key":"shuqijsspbody14","val":""},{"key":"shuqijsydurl14","val":""},{"key":"shuqijsydbody14","val":""},{"key":"shuqijsqdbody14","val":""},{"key":"shuqijsqdspyurl14","val":""},{"key":"shuqijsqdspbody14","val":""},{"key":"shuqijsrwbody14","val":""},{"key":"shuqijsfxbody14","val":""},{"key":"shuqijsbookurl14","val":""},{"key":"shuqijsbookbody14","val":""},{"key":"shuqijssprwurl14","val":""},{"key":"shuqiuserurl15","val":"https://ocean.shuqireader.com/api/jaccount/accountapi/v1/sapi/account/getBindinfo?userId=2128473596&sqSv=1.0&timestamp=1624005989&sign=fedd778119bc92958c8aa9209e19fb64&key=sq_h5_gateway"},{"key":"shuqisyurl15","val":"https://render.shuqireader.com/load/resource?sdk=13.1.2&utdid=YMdPkMwzcKoDALH6JMyZuCrG&ustatus=0&first_placeid=111111&net_env=4g&placeid=111111&user_id=2128473596&sn=754FB1E3615AD369FA83D8FD5409873C87260607&umidtoken=YMdPkMwzcKoDALH6JMyZuCrG&msv=8.0.0&brand=Apple&imei=F863F879EF0DDEF33093DF66685B14FEB5EFE779&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=iOS&ver=210301&mod=iPodtouch3G&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=C34362A6-9136-432E-A1A2-2CB63E15DA25"},{"key":"shuqisybody15","val":"appVer=4.3.6.0&imei=F863F879EF0DDEF33093DF66685B14FEB5EFE779&isNewUser=1&params=%7B%22resources%22%3A%7B%22ShuqiVipEntry%22%3A%7B%7D%2C%22personalCardConfig%22%3A%7B%7D%7D%7D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=8a2797eed051e3f85010620356c7853f&sn=754FB1E3615AD369FA83D8FD5409873C87260607&soft_id=21&timestamp=1624005892&user_id=2128473596&ver=210301"},{"key":"shuqispbody15","val":"_public=skinId%3D999%26idfa%3DC34362A6-9136-432E-A1A2-2CB63E15DA25%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26umidtoken%3DYMdPkMwzcKoDALH6JMyZuCrG%26user_id%3D2128473596%26sn%3D754FB1E3615AD369FA83D8FD5409873C87260607%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3DF863F879EF0DDEF33093DF66685B14FEB5EFE779%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPodtouch3G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYMdPkMwzcKoDALH6JMyZuCrG%26utype%3Dpre_vip%26sdk%3D13.1.2&deliveryId=525&key=sq_app_ad&miniWua=HHnB_blEU5XirmbxMPOMJU/iyUabYTT/sw2Ne/q75iDwc5Nc%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=626&sign=D4DCD2F8318B1F7AADE8FDE73B87BCFC&timestamp=1624005947&userId=2128473596&user_id=2128473596&wua=HIVW_1ACYw7gY3y4QzY68GINJiSsFa3Qa10Xof20PITppV0iLF952fQGCHZPmnfZuhxyGFtff9KKOsja0t9w5tiKV75bgMpRCRMs6Flky93bnAiLQZyktfLjSwxHNd4HC%2BeMoKKkLuvi%2BjKJw5UsMTuAdsmbGELkC419W/Z4pcANfst1So0HPYa/r1JP3m81/Ox5T9cwHJd0t17bwBGwOPHDy0R7A0Nz4SQpGxAYrZjvJmKQ%3D"},{"key":"shuqiscbody15","val":"_public=skinId%253D999%2526idfa%253DC34362A6-9136-432E-A1A2-2CB63E15DA25%2526ustatus%253D0%2526first_placeid%253D111111%2526net_env%253D4g%2526umidtoken%253DYMdPkMwzcKoDALH6JMyZuCrG%2526user_id%253D2128473596%2526sn%253D754FB1E3615AD369FA83D8FD5409873C87260607%2526placeid%253D111111%2526msv%253D8.0.0%2526brand%253DApple%2526imei%253DF863F879EF0DDEF33093DF66685B14FEB5EFE779%2526skinVersionPrefix%253D1%2526appVer%253D4.3.6.0%2526skinActiveColor%253D0F9970%2526manufacturer%253DApple%2526skinColor%253D23B383%2526platform%253DiOS%2526ver%253D210301%2526mod%253DiPodtouch3G%2526statusBarHeight%253D44.000000%2526skinVersion%253D1%2526wh%253D1242x2688%2526soft_id%253D21%2526utdid%253DYMdPkMwzcKoDALH6JMyZuCrG%2526utype%253Dpre_vip%2526sdk%253D13.1.2&key=and_log&readingList=%5B%7B%22startTime%22%3A1624005900%2C%22readObjType%22%3A1%2C%22attr%22%3A2%2C%22readObjId%22%3A%226282192%22%2C%22readChapterId%22%3A727132%2C%22readingLen%22%3A35%7D%5D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=621D72C2F8D73BB84CBA630E41E9ADDD&timestamp=1624005936&user_id=2128473596"},{"key":"shuqiydbody15","val":"_public=skinId%3D999%26idfa%3DC34362A6-9136-432E-A1A2-2CB63E15DA25%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26umidtoken%3DYMdPkMwzcKoDALH6JMyZuCrG%26user_id%3D2128473596%26sn%3D754FB1E3615AD369FA83D8FD5409873C87260607%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3DF863F879EF0DDEF33093DF66685B14FEB5EFE779%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPodtouch3G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYMdPkMwzcKoDALH6JMyZuCrG%26utype%3Dpre_vip%26sdk%3D13.1.2&deliveryId=707&key=sq_app_ad&miniWua=HHnB_F3hEdzuxWutq3QILxcppFOT8LjdAlEWm2uKRpdRVGEg%3D&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=678&sign=5FAF9A45CB83B97F4F0F1A937A5AF98D&timestamp=1624005930&userId=2128473596&wua=HIVW_3jhHUsXSGtIOmD6Uu5QeD0vlFP/xAeTZZEtlL4qffaSKnAa4Cra1rHl45c9aplXi9JRjaUanj%2Bqc4lg8UOtMWuIdG9szyunY5oZOysQRP%2B4coe/BQvcKeyIzqXHhkHEqRlDznloLnKzaEkD7aalb%2BJq/tS72d6SDIXGHDLxvrSjkPpvf1cbbJ8%2BQyyhc2itnAJhsKgDzN8DGDlrK9HWC%2Bydb9Q2r2WW8kkGM0qBy3c8%3D"},{"key":"shuqiqdbody15","val":"clientTimestamp=1624005939&position=501&userId=2128473596&signInType=1&wua=HIVW_f3%2F7wKjMfw7ESI5Hn2zSurA2MrPoQKrlm1APHinsuasouwb1Xr7yE9kkllt2PTuSX8JcCKz4TaIu7755jonFyftc%2FxtRXntkF1JtRxvuqtEQ%2FXyvJyW%2B3tkgISgcAC0q7kyqe%2FAaQA3ojOModNj10GmvfzRm%2BWsPcy3YhvKWxQ8Fcq1uCDnlPK4sbglhTbvac5Xq4qU2m753BuR5zdBxgATMYL4Z0p4M0m5A3xMkX4c%3D&ua=&miniWua=HHnB_DbQ0%2F3TGjJHf9zEeY5EvN7GBYDm4MjKKh%2BKXahb0R5M%3D&umidtoken=YMdPkMwzcKoDALH6JMyZuCrG&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&sign=78aaeefa5cdd567bc1b89edd97224450&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26sdk%3D13.1.2%26utdid%3DYMdPkMwzcKoDALH6JMyZuCrG%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2128473596%26sn%3D754FB1E3615AD369FA83D8FD5409873C87260607%26umidtoken%3DYMdPkMwzcKoDALH6JMyZuCrG%26msv%3D8.0.0%26brand%3DApple%26imei%3DF863F879EF0DDEF33093DF66685B14FEB5EFE779%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPodtouch3G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DC34362A6-9136-432E-A1A2-2CB63E15DA25"},{"key":"shuqirwbody15","val":""},{"key":"shuqifxbody15","val":""},{"key":"shuqisprwurl15","val":"https://ocean.shuqireader.com/api/ad/adserver/v1/api/getAdInfo?appVer=4.3.6.0&placeId=111111&platform=iOS&requestSrc=h5&resourceId=626&timestamp=1624005984&user_id=2128473596&sqSv=1.0&sign=c9034e3663bb10c8534771961a203b23&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.1.2%26utdid%3DYMdPkMwzcKoDALH6JMyZuCrG%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2128473596%26sn%3D754FB1E3615AD369FA83D8FD5409873C87260607%26umidtoken%3DYMdPkMwzcKoDALH6JMyZuCrG%26msv%3D8.0.0%26brand%3DApple%26imei%3DF863F879EF0DDEF33093DF66685B14FEB5EFE779%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPodtouch3G%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DC34362A6-9136-432E-A1A2-2CB63E15DA25"},{"key":"shuqijlbody15","val":"requestSrc=h5&userId=2128473596&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624005954&sqSv=1.0&sign=0bae04a7c8d9d7c7af6692f332a56bd9&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26sdk%3D13.1.2%26utdid%3DYMdPkMwzcKoDALH6JMyZuCrG%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2128473596%26sn%3D754FB1E3615AD369FA83D8FD5409873C87260607%26umidtoken%3DYMdPkMwzcKoDALH6JMyZuCrG%26msv%3D8.0.0%26brand%3DApple%26imei%3DF863F879EF0DDEF33093DF66685B14FEB5EFE779%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPodtouch3G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DC34362A6-9136-432E-A1A2-2CB63E15DA25"},{"key":"shuqisqjlbody15","val":"src=&userId=2128473596&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624005943&sqSv=1.0&sign=d2ec26407e27e36b17d20ba5d362cc6b&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26sdk%3D13.1.2%26utdid%3DYMdPkMwzcKoDALH6JMyZuCrG%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2128473596%26sn%3D754FB1E3615AD369FA83D8FD5409873C87260607%26umidtoken%3DYMdPkMwzcKoDALH6JMyZuCrG%26msv%3D8.0.0%26brand%3DApple%26imei%3DF863F879EF0DDEF33093DF66685B14FEB5EFE779%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPodtouch3G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DC34362A6-9136-432E-A1A2-2CB63E15DA25"},{"key":"shuqicjyurl15","val":"https://ocean.shuqireader.com/api/activity/activity/v1/lottery/info?timestamp=1624005989&userId=2128473596&activityId=311&sqSv=1.0&sign=f2fe99e12e1bfb4c933554ac8d3263e6&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.1.2%26utdid%3DYMdPkMwzcKoDALH6JMyZuCrG%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2128473596%26sn%3D754FB1E3615AD369FA83D8FD5409873C87260607%26umidtoken%3DYMdPkMwzcKoDALH6JMyZuCrG%26msv%3D8.0.0%26brand%3DApple%26imei%3DF863F879EF0DDEF33093DF66685B14FEB5EFE779%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPodtouch3G%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DC34362A6-9136-432E-A1A2-2CB63E15DA25"},{"key":"shuqicjcsbody15","val":"_public=skinId%3D999%26idfa%3DC34362A6-9136-432E-A1A2-2CB63E15DA25%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26umidtoken%3DYMdPkMwzcKoDALH6JMyZuCrG%26user_id%3D2128473596%26sn%3D754FB1E3615AD369FA83D8FD5409873C87260607%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3DF863F879EF0DDEF33093DF66685B14FEB5EFE779%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPodtouch3G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYMdPkMwzcKoDALH6JMyZuCrG%26utype%3Dpre_vip%26sdk%3D13.1.2&deliveryId=711&key=sq_app_ad&miniWua=HHnB_LFMfGjCz7sQuOoBRIPY/dZyy4EI4XMyla5y3Q/fHGoQ%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=703&sign=00C0FE603A6785649FB0CEB8D2F4CCCB&timestamp=1624005964&userId=2128473596&user_id=2128473596&wua=HIVW_CPfGZaSn5sEhiArgxs61c6FoHHX/AKNkqlAzApsqjs1XMqHEfRITUS74tBHjhkKqBmiS9WCz20fawMg30%2B1wsYpNDBoZm6YD1mdnu1LZG2VWptgBHa/LpdpiNpO1v37MdRcuqQnpqutXVskg6Gre6ARoZUdQz%2BPAXL4Oar5kGOROMhKzQT30PvT0vdUN5mWzKgFSeniV6H/HUUUx1fM7lQ4WrTEDAfotnZVaTNzT5Zo%3D"},{"key":"shuqicjbody15","val":"wua=HIVW_VUNyMuB76onWpDYN4ys5lr%2BzdzdlPuKpN8B%2B1%2F5y88H0uFjy7tLcO7Ksj6BgHDznmGev3BZS5ZuoU2y6Fa594mtL5Wce8UN7tfg5cbB6eXG0Si%2B9G16p73RDBdXgagNmzo5El49TJpnoaTwoLrqPHIGwmxdHC2%2Bq6bCDXoUQiQa7es34kk33vmOJBA6C7udBby2Cl1PFlQPqI9Ati5eTtgF0EoPl%2BtzXJI06R87%2Bqs0%3D&ua=&userId=2128473596&umidtoken=YMdPkMwzcKoDALH6JMyZuCrG&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&asac=2A20C07RJ9F51AOEFSNHDR&timestamp=1624005967&activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&sqSv=1.0&sign=051b226810e4e8ff7e029cb2dab71f3a&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.1.2%26utdid%3DYMdPkMwzcKoDALH6JMyZuCrG%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2128473596%26sn%3D754FB1E3615AD369FA83D8FD5409873C87260607%26umidtoken%3DYMdPkMwzcKoDALH6JMyZuCrG%26msv%3D8.0.0%26brand%3DApple%26imei%3DF863F879EF0DDEF33093DF66685B14FEB5EFE779%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPodtouch3G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DC34362A6-9136-432E-A1A2-2CB63E15DA25"},{"key":"shuqijsspbody15","val":""},{"key":"shuqijsydurl15","val":""},{"key":"shuqijsydbody15","val":""},{"key":"shuqijsqdbody15","val":""},{"key":"shuqijsqdspyurl15","val":""},{"key":"shuqijsqdspbody15","val":""},{"key":"shuqijsrwbody15","val":""},{"key":"shuqijsfxbody15","val":""},{"key":"shuqijsbookurl15","val":""},{"key":"shuqijsbookbody15","val":""},{"key":"shuqijssprwurl15","val":""},{"key":"shuqiuserurl16","val":""},{"key":"shuqisyurl16","val":""},{"key":"shuqisybody16","val":""},{"key":"shuqispbody16","val":""},{"key":"shuqiscbody16","val":""},{"key":"shuqiydbody16","val":""},{"key":"shuqiqdbody16","val":""},{"key":"shuqirwbody16","val":""},{"key":"shuqifxbody16","val":""},{"key":"shuqisprwurl16","val":""},{"key":"shuqijlbody16","val":""},{"key":"shuqisqjlbody16","val":""},{"key":"shuqicjyurl16","val":""},{"key":"shuqicjcsbody16","val":""},{"key":"shuqicjbody16","val":""},{"key":"shuqijsspbody16","val":""},{"key":"shuqijsydurl16","val":""},{"key":"shuqijsydbody16","val":""},{"key":"shuqijsqdbody16","val":""},{"key":"shuqijsqdspyurl16","val":""},{"key":"shuqijsqdspbody16","val":""},{"key":"shuqijsrwbody16","val":""},{"key":"shuqijsfxbody16","val":""},{"key":"shuqijsbookurl16","val":""},{"key":"shuqijsbookbody16","val":""},{"key":"shuqijssprwurl16","val":""},{"key":"shuqiuserurl17","val":""},{"key":"shuqisyurl17","val":""},{"key":"shuqisybody17","val":""},{"key":"shuqispbody17","val":""},{"key":"shuqiscbody17","val":""},{"key":"shuqiydbody17","val":""},{"key":"shuqiqdbody17","val":""},{"key":"shuqirwbody17","val":""},{"key":"shuqifxbody17","val":""},{"key":"shuqisprwurl17","val":""},{"key":"shuqijlbody17","val":""},{"key":"shuqisqjlbody17","val":""},{"key":"shuqicjyurl17","val":""},{"key":"shuqicjcsbody17","val":""},{"key":"shuqicjbody17","val":""},{"key":"shuqijsspbody17","val":""},{"key":"shuqijsydurl17","val":""},{"key":"shuqijsydbody17","val":""},{"key":"shuqijsqdbody17","val":""},{"key":"shuqijsqdspyurl17","val":""},{"key":"shuqijsqdspbody17","val":""},{"key":"shuqijsrwbody17","val":""},{"key":"shuqijsfxbody17","val":""},{"key":"shuqijsbookurl17","val":""},{"key":"shuqijsbookbody17","val":""},{"key":"shuqijssprwurl17","val":""},{"key":"shuqiuserurl18","val":""},{"key":"shuqisyurl18","val":""},{"key":"shuqisybody18","val":""},{"key":"shuqispbody18","val":""},{"key":"shuqiscbody18","val":""},{"key":"shuqiydbody18","val":""},{"key":"shuqiqdbody18","val":""},{"key":"shuqirwbody18","val":""},{"key":"shuqifxbody18","val":""},{"key":"shuqisprwurl18","val":""},{"key":"shuqijlbody18","val":""},{"key":"shuqisqjlbody18","val":""},{"key":"shuqicjyurl18","val":""},{"key":"shuqicjcsbody18","val":""},{"key":"shuqicjbody18","val":""},{"key":"shuqijsspbody18","val":""},{"key":"shuqijsydurl18","val":""},{"key":"shuqijsydbody18","val":""},{"key":"shuqijsqdbody18","val":""},{"key":"shuqijsqdspyurl18","val":""},{"key":"shuqijsqdspbody18","val":""},{"key":"shuqijsrwbody18","val":""},{"key":"shuqijsfxbody18","val":""},{"key":"shuqijsbookurl18","val":""},{"key":"shuqijsbookbody18","val":""},{"key":"shuqijssprwurl18","val":""},{"key":"shuqiuserurl19","val":""},{"key":"shuqisyurl19","val":""},{"key":"shuqisybody19","val":""},{"key":"shuqispbody19","val":""},{"key":"shuqiscbody19","val":""},{"key":"shuqiydbody19","val":""},{"key":"shuqiqdbody19","val":""},{"key":"shuqirwbody19","val":""},{"key":"shuqifxbody19","val":""},{"key":"shuqisprwurl19","val":""},{"key":"shuqijlbody19","val":""},{"key":"shuqisqjlbody19","val":""},{"key":"shuqicjyurl19","val":""},{"key":"shuqicjcsbody19","val":""},{"key":"shuqicjbody19","val":""},{"key":"shuqijsspbody19","val":""},{"key":"shuqijsydurl19","val":""},{"key":"shuqijsydbody19","val":""},{"key":"shuqijsqdbody19","val":""},{"key":"shuqijsqdspyurl19","val":""},{"key":"shuqijsqdspbody19","val":""},{"key":"shuqijsrwbody19","val":""},{"key":"shuqijsfxbody19","val":""},{"key":"shuqijsbookurl19","val":""},{"key":"shuqijsbookbody19","val":""},{"key":"shuqijssprwurl19","val":""},{"key":"shuqiuserurl20","val":""},{"key":"shuqisyurl20","val":""},{"key":"shuqisybody20","val":""},{"key":"shuqispbody20","val":""},{"key":"shuqiscbody20","val":""},{"key":"shuqiydbody20","val":""},{"key":"shuqiqdbody20","val":""},{"key":"shuqirwbody20","val":""},{"key":"shuqifxbody20","val":""},{"key":"shuqisprwurl20","val":""},{"key":"shuqijlbody20","val":""},{"key":"shuqisqjlbody20","val":""},{"key":"shuqicjyurl20","val":""},{"key":"shuqicjcsbody20","val":""},{"key":"shuqicjbody20","val":""},{"key":"shuqijsspbody20","val":""},{"key":"shuqijsydurl20","val":""},{"key":"shuqijsydbody20","val":""},{"key":"shuqijsqdbody20","val":""},{"key":"shuqijsqdspyurl20","val":""},{"key":"shuqijsqdspbody20","val":""},{"key":"shuqijsrwbody20","val":""},{"key":"shuqijsfxbody20","val":""},{"key":"shuqijsbookurl20","val":""},{"key":"shuqijsbookbody20","val":""},{"key":"shuqijssprwurl20","val":""}],"sessions":[],"isLoaded":true};
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
