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
const COOKIE = {"id":"shuqi","name":"书旗小说APP","keys":["shuqiuserurl","shuqisyurl","shuqisybody","shuqispbody","shuqiscbody","shuqiydbody","shuqiqdbody","shuqirwbody","shuqifxbody","shuqisprwurl","shuqijlbody","shuqisqjlbody","shuqicjyurl","shuqicjcsbody","shuqicjbody","shuqijsspbody","shuqijsydurl","shuqijsydbody","shuqijsqdbody","shuqijsqdspyurl","shuqijsqdspbody","shuqijsrwbody","shuqijsfxbody","shuqijsbookurl","shuqijsbookbody","shuqijssprwurl","shuqiuserurl2","shuqisyurl2","shuqisybody2","shuqispbody2","shuqiscbody2","shuqiydbody2","shuqiqdbody2","shuqirwbody2","shuqifxbody2","shuqisprwurl2","shuqijlbody2","shuqisqjlbody2","shuqicjyurl2","shuqicjcsbody2","shuqicjbody2","shuqijsspbody2","shuqijsydurl2","shuqijsydbody2","shuqijsqdbody2","shuqijsqdspyurl2","shuqijsqdspbody2","shuqijsrwbody2","shuqijsfxbody2","shuqijsbookurl2","shuqijsbookbody2","shuqijssprwurl2","shuqiuserurl3","shuqisyurl3","shuqisybody3","shuqispbody3","shuqiscbody3","shuqiydbody3","shuqiqdbody3","shuqirwbody3","shuqifxbody3","shuqisprwurl3","shuqijlbody3","shuqisqjlbody3","shuqicjyurl3","shuqicjcsbody3","shuqicjbody3","shuqijsspbody3","shuqijsydurl3","shuqijsydbody3","shuqijsqdbody3","shuqijsqdspyurl3","shuqijsqdspbody3","shuqijsrwbody3","shuqijsfxbody3","shuqijsbookurl3","shuqijsbookbody3","shuqijssprwurl3","shuqiuserurl4","shuqisyurl4","shuqisybody4","shuqispbody4","shuqiscbody4","shuqiydbody4","shuqiqdbody4","shuqirwbody4","shuqifxbody4","shuqisprwurl4","shuqijlbody4","shuqisqjlbody4","shuqicjyurl4","shuqicjcsbody4","shuqicjbody4","shuqijsspbody4","shuqijsydurl4","shuqijsydbody4","shuqijsqdbody4","shuqijsqdspyurl4","shuqijsqdspbody4","shuqijsrwbody4","shuqijsfxbody4","shuqijsbookurl4","shuqijsbookbody4","shuqijssprwurl4","shuqiuserurl5","shuqisyurl5","shuqisybody5","shuqispbody5","shuqiscbody5","shuqiydbody5","shuqiqdbody5","shuqirwbody5","shuqifxbody5","shuqisprwurl5","shuqijlbody5","shuqisqjlbody5","shuqicjyurl5","shuqicjcsbody5","shuqicjbody5","shuqijsspbody5","shuqijsydurl5","shuqijsydbody5","shuqijsqdbody5","shuqijsqdspyurl5","shuqijsqdspbody5","shuqijsrwbody5","shuqijsfxbody5","shuqijsbookurl5","shuqijsbookbody5","shuqijssprwurl5","shuqiuserurl6","shuqisyurl6","shuqisybody6","shuqispbody6","shuqiscbody6","shuqiydbody6","shuqiqdbody6","shuqirwbody6","shuqifxbody6","shuqisprwurl6","shuqijlbody6","shuqisqjlbody6","shuqicjyurl6","shuqicjcsbody6","shuqicjbody6","shuqijsspbody6","shuqijsydurl6","shuqijsydbody6","shuqijsqdbody6","shuqijsqdspyurl6","shuqijsqdspbody6","shuqijsrwbody6","shuqijsfxbody6","shuqijsbookurl6","shuqijsbookbody6","shuqijssprwurl6","shuqiuserurl7","shuqisyurl7","shuqisybody7","shuqispbody7","shuqiscbody7","shuqiydbody7","shuqiqdbody7","shuqirwbody7","shuqifxbody7","shuqisprwurl7","shuqijlbody7","shuqisqjlbody7","shuqicjyurl7","shuqicjcsbody7","shuqicjbody7","shuqijsspbody7","shuqijsydurl7","shuqijsydbody7","shuqijsqdbody7","shuqijsqdspyurl7","shuqijsqdspbody7","shuqijsrwbody7","shuqijsfxbody7","shuqijsbookurl7","shuqijsbookbody7","shuqijssprwurl7","shuqiuserurl8","shuqisyurl8","shuqisybody8","shuqispbody8","shuqiscbody8","shuqiydbody8","shuqiqdbody8","shuqirwbody8","shuqifxbody8","shuqisprwurl8","shuqijlbody8","shuqisqjlbody8","shuqicjyurl8","shuqicjcsbody8","shuqicjbody8","shuqijsspbody8","shuqijsydurl8","shuqijsydbody8","shuqijsqdbody8","shuqijsqdspyurl8","shuqijsqdspbody8","shuqijsrwbody8","shuqijsfxbody8","shuqijsbookurl8","shuqijsbookbody8","shuqijssprwurl8","shuqiuserurl9","shuqisyurl9","shuqisybody9","shuqispbody9","shuqiscbody9","shuqiydbody9","shuqiqdbody9","shuqirwbody9","shuqifxbody9","shuqisprwurl9","shuqijlbody9","shuqisqjlbody9","shuqicjyurl9","shuqicjcsbody9","shuqicjbody9","shuqijsspbody9","shuqijsydurl9","shuqijsydbody9","shuqijsqdbody9","shuqijsqdspyurl9","shuqijsqdspbody9","shuqijsrwbody9","shuqijsfxbody9","shuqijsbookurl9","shuqijsbookbody9","shuqijssprwurl9","shuqiuserurl10","shuqisyurl10","shuqisybody10","shuqispbody10","shuqiscbody10","shuqiydbody10","shuqiqdbody10","shuqirwbody10","shuqifxbody10","shuqisprwurl10","shuqijlbody10","shuqisqjlbody10","shuqicjyurl10","shuqicjcsbody10","shuqicjbody10","shuqijsspbody10","shuqijsydurl10","shuqijsydbody10","shuqijsqdbody10","shuqijsqdspyurl10","shuqijsqdspbody10","shuqijsrwbody10","shuqijsfxbody10","shuqijsbookurl10","shuqijsbookbody10","shuqijssprwurl10","shuqiuserurl11","shuqisyurl11","shuqisybody11","shuqispbody11","shuqiscbody11","shuqiydbody11","shuqiqdbody11","shuqirwbody11","shuqifxbody11","shuqisprwurl11","shuqijlbody11","shuqisqjlbody11","shuqicjyurl11","shuqicjcsbody11","shuqicjbody11","shuqijsspbody11","shuqijsydurl11","shuqijsydbody11","shuqijsqdbody11","shuqijsqdspyurl11","shuqijsqdspbody11","shuqijsrwbody11","shuqijsfxbody11","shuqijsbookurl11","shuqijsbookbody11","shuqijssprwurl11","shuqiuserurl12","shuqisyurl12","shuqisybody12","shuqispbody12","shuqiscbody12","shuqiydbody12","shuqiqdbody12","shuqirwbody12","shuqifxbody12","shuqisprwurl12","shuqijlbody12","shuqisqjlbody12","shuqicjyurl12","shuqicjcsbody12","shuqicjbody12","shuqijsspbody12","shuqijsydurl12","shuqijsydbody12","shuqijsqdbody12","shuqijsqdspyurl12","shuqijsqdspbody12","shuqijsrwbody12","shuqijsfxbody12","shuqijsbookurl12","shuqijsbookbody12","shuqijssprwurl12","shuqiuserurl13","shuqisyurl13","shuqisybody13","shuqispbody13","shuqiscbody13","shuqiydbody13","shuqiqdbody13","shuqirwbody13","shuqifxbody13","shuqisprwurl13","shuqijlbody13","shuqisqjlbody13","shuqicjyurl13","shuqicjcsbody13","shuqicjbody13","shuqijsspbody13","shuqijsydurl13","shuqijsydbody13","shuqijsqdbody13","shuqijsqdspyurl13","shuqijsqdspbody13","shuqijsrwbody13","shuqijsfxbody13","shuqijsbookurl13","shuqijsbookbody13","shuqijssprwurl13","shuqiuserurl14","shuqisyurl14","shuqisybody14","shuqispbody14","shuqiscbody14","shuqiydbody14","shuqiqdbody14","shuqirwbody14","shuqifxbody14","shuqisprwurl14","shuqijlbody14","shuqisqjlbody14","shuqicjyurl14","shuqicjcsbody14","shuqicjbody14","shuqijsspbody14","shuqijsydurl14","shuqijsydbody14","shuqijsqdbody14","shuqijsqdspyurl14","shuqijsqdspbody14","shuqijsrwbody14","shuqijsfxbody14","shuqijsbookurl14","shuqijsbookbody14","shuqijssprwurl14","shuqiuserurl15","shuqisyurl15","shuqisybody15","shuqispbody15","shuqiscbody15","shuqiydbody15","shuqiqdbody15","shuqirwbody15","shuqifxbody15","shuqisprwurl15","shuqijlbody15","shuqisqjlbody15","shuqicjyurl15","shuqicjcsbody15","shuqicjbody15","shuqijsspbody15","shuqijsydurl15","shuqijsydbody15","shuqijsqdbody15","shuqijsqdspyurl15","shuqijsqdspbody15","shuqijsrwbody15","shuqijsfxbody15","shuqijsbookurl15","shuqijsbookbody15","shuqijssprwurl15","shuqiuserurl16","shuqisyurl16","shuqisybody16","shuqispbody16","shuqiscbody16","shuqiydbody16","shuqiqdbody16","shuqirwbody16","shuqifxbody16","shuqisprwurl16","shuqijlbody16","shuqisqjlbody16","shuqicjyurl16","shuqicjcsbody16","shuqicjbody16","shuqijsspbody16","shuqijsydurl16","shuqijsydbody16","shuqijsqdbody16","shuqijsqdspyurl16","shuqijsqdspbody16","shuqijsrwbody16","shuqijsfxbody16","shuqijsbookurl16","shuqijsbookbody16","shuqijssprwurl16","shuqiuserurl17","shuqisyurl17","shuqisybody17","shuqispbody17","shuqiscbody17","shuqiydbody17","shuqiqdbody17","shuqirwbody17","shuqifxbody17","shuqisprwurl17","shuqijlbody17","shuqisqjlbody17","shuqicjyurl17","shuqicjcsbody17","shuqicjbody17","shuqijsspbody17","shuqijsydurl17","shuqijsydbody17","shuqijsqdbody17","shuqijsqdspyurl17","shuqijsqdspbody17","shuqijsrwbody17","shuqijsfxbody17","shuqijsbookurl17","shuqijsbookbody17","shuqijssprwurl17","shuqiuserurl18","shuqisyurl18","shuqisybody18","shuqispbody18","shuqiscbody18","shuqiydbody18","shuqiqdbody18","shuqirwbody18","shuqifxbody18","shuqisprwurl18","shuqijlbody18","shuqisqjlbody18","shuqicjyurl18","shuqicjcsbody18","shuqicjbody18","shuqijsspbody18","shuqijsydurl18","shuqijsydbody18","shuqijsqdbody18","shuqijsqdspyurl18","shuqijsqdspbody18","shuqijsrwbody18","shuqijsfxbody18","shuqijsbookurl18","shuqijsbookbody18","shuqijssprwurl18","shuqiuserurl19","shuqisyurl19","shuqisybody19","shuqispbody19","shuqiscbody19","shuqiydbody19","shuqiqdbody19","shuqirwbody19","shuqifxbody19","shuqisprwurl19","shuqijlbody19","shuqisqjlbody19","shuqicjyurl19","shuqicjcsbody19","shuqicjbody19","shuqijsspbody19","shuqijsydurl19","shuqijsydbody19","shuqijsqdbody19","shuqijsqdspyurl19","shuqijsqdspbody19","shuqijsrwbody19","shuqijsfxbody19","shuqijsbookurl19","shuqijsbookbody19","shuqijssprwurl19","shuqiuserurl20","shuqisyurl20","shuqisybody20","shuqispbody20","shuqiscbody20","shuqiydbody20","shuqiqdbody20","shuqirwbody20","shuqifxbody20","shuqisprwurl20","shuqijlbody20","shuqisqjlbody20","shuqicjyurl20","shuqicjcsbody20","shuqicjbody20","shuqijsspbody20","shuqijsydurl20","shuqijsydbody20","shuqijsqdbody20","shuqijsqdspyurl20","shuqijsqdspbody20","shuqijsrwbody20","shuqijsfxbody20","shuqijsbookurl20","shuqijsbookbody20","shuqijssprwurl20"],"author":"@ziye","settings":[{"id":"shuqiSuffix","name":"当前账号","val":"14","type":"number","desc":"当前抓取ck记录的账号序号，如：1、2、3、"},{"id":"shuqiCount","name":"账号个数","val":"15","type":"number","desc":"指定任务最多跑几个账号，根据抓取的账号数据个数来设值"},{"id":"shuqiXH","name":"循环获取CK","val":"1","type":"number","desc":"0关闭 1开启,默认关闭"},{"id":"shuqiSC","name":"单刷时长控制","val":"0","type":"number","desc":"0关闭 1开启,默认关闭"},{"id":"shuqiTXTX","name":"提现提醒","val":"10","type":"number","desc":"0关闭 设置余额大于多少提醒"},{"id":"shuqinotifyttt","name":"推送控制","val":"1","type":"number","desc":"0关闭，1推送,默认12点以及23点推送"},{"id":"shuqinotifyInterval","name":"通知控制","val":"2","type":"number","desc":"0关闭，1为 所有通知，2为 12，23 点通知，3为 6，12，18，23 点通知 "},{"id":"shuqiMinutes","name":"推送-通知 分钟控制","val":"59","type":"number","desc":"推送以及通知控制在什么分钟段，可设置0-59,默认0到10"}],"repo":"https://cdn.jsdelivr.net/gh/ziye888/JavaScript@main/Task/shuqi.js","icons":["https://cdn.jsdelivr.net/gh/ziye888/JavaScript@main/Task/shuqi.png","https://cdn.jsdelivr.net/gh/ziye888/JavaScript@main/Task/shuqi.png"],"script":"https://cdn.jsdelivr.net/gh/ziye888/JavaScript@main/Task/shuqi.js","icon":"https://cdn.jsdelivr.net/gh/ziye888/JavaScript@main/Task/shuqi.png","favIcon":"mdi-star","favIconColor":"primary","datas":[{"key":"shuqiuserurl","val":"https://ocean.shuqireader.com/api/jaccount/accountapi/v1/sapi/account/getBindinfo?userId=2128966499&sqSv=1.0&timestamp=1624097679&sign=add63a2102b20f43e70df17a17b2fdb0&key=sq_h5_gateway"},{"key":"shuqisyurl","val":"https://render.shuqireader.com/load/resource?sdk=13.2.2&utdid=YM3DULqnk14DAIg9Tybjkid5&ustatus=0&first_placeid=111111&net_env=4g&placeid=111111&user_id=2128966499&sn=E34AD3A2CA8A4E15C9D9B3F02EB803435C377B6B&umidtoken=YM3DULqnk14DAIg9Tybjkid5&msv=8.0.0&brand=Apple&imei=201C2929D2646D256161B5DCC66EF92957345EFC&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=iOS&ver=210301&mod=iPad3G&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=9849689B-072D-4C19-897F-BCB2CE525016"},{"key":"shuqisybody","val":"appVer=4.3.6.0&imei=201C2929D2646D256161B5DCC66EF92957345EFC&isNewUser=1&params=%7B%22resources%22%3A%7B%22ShuqiVipEntry%22%3A%7B%7D%2C%22personalCardConfig%22%3A%7B%7D%7D%7D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=0d51dc66dff1e8babe50b04f23e4695f&sn=E34AD3A2CA8A4E15C9D9B3F02EB803435C377B6B&soft_id=21&timestamp=1624097618&user_id=2128966499&ver=210301"},{"key":"shuqispbody","val":"_public=skinId%3D999%26idfa%3D9849689B-072D-4C19-897F-BCB2CE525016%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26umidtoken%3DYM3DULqnk14DAIg9Tybjkid5%26user_id%3D2128966499%26sn%3DE34AD3A2CA8A4E15C9D9B3F02EB803435C377B6B%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D201C2929D2646D256161B5DCC66EF92957345EFC%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPad3G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYM3DULqnk14DAIg9Tybjkid5%26utype%3Dpre_vip%26sdk%3D13.2.2&deliveryId=525&key=sq_app_ad&miniWua=HHnB_iPEtdQYdzGGVvMocsgXAxBa1pzRGrZd3Zmn4YsQQi30%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=626&sign=24241328BF2716720F225E831AFB4683&timestamp=1624097634&userId=2128966499&user_id=2128966499&wua=HIVW_fFoetzz2kxdARZ/4P2pDIzihPuRMLnisVv74Fi8NCOD9VDgYucbQVI9GG53kMnAQ4Q4o4TC/Dzz3hKbuS2eVdFAJk42SYYBz5B/6tPaZkwYNgX7rp/ZCXR/3xpsnsYwdvWeYSMSUFc6uzlD1s7N%2BFf18KC7Jb5KtdiNILc/RJnjUyblvOQueCh9rZFiwYoyke1DMonrZOurV0pEad5Ie4N0DtWw77aoeXdJGaqIMBH0%3D"},{"key":"shuqiscbody","val":""},{"key":"shuqiydbody","val":""},{"key":"shuqiqdbody","val":"clientTimestamp=1624097628&position=501&userId=2128966499&signInType=1&wua=HIVW_INVlwtt%2BRilMsiirZIT3ctAUUb0Tb4%2Ffn2hyrBVp5%2B0GR%2FsbO0QohGMaNI76kU4yVs1SBqwbNiuCAibZMy730Mk1uoTgkhvw4Vgl7K9SNabunHG8EeCnj3oHia7bQB3J9yUmbypHykm5YTBSnPSNJ0NnHkPnSZSyyVg6Kh1lvERE3rbdP4tUEmkYNqSuOfcRCM3sMgzzDbrIf3kjq%2BMBCpqwHpd89wZZA2R6RhHcEmQ%3D&ua=&miniWua=HHnB_9%2BaBNBZVFOHcsassvQMU9HP5qAdKvRFWjUj0vZ%2FoYbU%3D&umidtoken=YM3DULqnk14DAIg9Tybjkid5&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&sign=cdc35bd7cdc0d4138735abb914b7e6a8&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.2.2%26utdid%3DYM3DULqnk14DAIg9Tybjkid5%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2128966499%26sn%3DE34AD3A2CA8A4E15C9D9B3F02EB803435C377B6B%26umidtoken%3DYM3DULqnk14DAIg9Tybjkid5%26msv%3D8.0.0%26brand%3DApple%26imei%3D201C2929D2646D256161B5DCC66EF92957345EFC%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad3G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D9849689B-072D-4C19-897F-BCB2CE525016"},{"key":"shuqirwbody","val":"serviceWorkerOn=1&stopPullRefresh=1&from=ShuqiTab&upf=20368&sdk=13.2.2&utdid=YM3DULqnk14DAIg9Tybjkid5&ustatus=0&first_placeid=111111&net_env=4g&placeid=111111&user_id=2128966499&sn=E34AD3A2CA8A4E15C9D9B3F02EB803435C377B6B&umidtoken=YM3DULqnk14DAIg9Tybjkid5&msv=8.0.0&brand=Apple&imei=201C2929D2646D256161B5DCC66EF92957345EFC&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&session=&skinColor=23B383&platform=1&ver=210301&mod=iPad3G&statusBarHeight=44.000000&skinVersion=1&wh=1242x2688&soft_id=21&utype=pre_vip&skinId=999&idfa=9849689B-072D-4C19-897F-BCB2CE525016&params=%7B%22resources%22%3A%7B%22ShuqiBsDailyTask%22%3A%7B%7D%7D%7D&userId=2128966499&placeId=111111&timestamp=1624097640&sqSv=1.0&sign=dcfdbfb054171e9b880ff06ecdc62154&key=sq_h5_gateway&_public="},{"key":"shuqifxbody","val":""},{"key":"shuqisprwurl","val":"https://ocean.shuqireader.com/api/ad/adserver/v1/api/getAdInfo?appVer=4.3.6.0&placeId=111111&platform=iOS&requestSrc=h5&resourceId=626&timestamp=1624097678&user_id=2128966499&sqSv=1.0&sign=b0fe1090265af4fede78b81f64e0a195&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.2.2%26utdid%3DYM3DULqnk14DAIg9Tybjkid5%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2128966499%26sn%3DE34AD3A2CA8A4E15C9D9B3F02EB803435C377B6B%26umidtoken%3DYM3DULqnk14DAIg9Tybjkid5%26msv%3D8.0.0%26brand%3DApple%26imei%3D201C2929D2646D256161B5DCC66EF92957345EFC%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad3G%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D9849689B-072D-4C19-897F-BCB2CE525016"},{"key":"shuqijlbody","val":"requestSrc=h5&userId=2128966499&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624097640&sqSv=1.0&sign=030c4dcf5f2227643647588fd42e8a64&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.2.2%26utdid%3DYM3DULqnk14DAIg9Tybjkid5%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2128966499%26sn%3DE34AD3A2CA8A4E15C9D9B3F02EB803435C377B6B%26umidtoken%3DYM3DULqnk14DAIg9Tybjkid5%26msv%3D8.0.0%26brand%3DApple%26imei%3D201C2929D2646D256161B5DCC66EF92957345EFC%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad3G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D9849689B-072D-4C19-897F-BCB2CE525016"},{"key":"shuqisqjlbody","val":"src=&userId=2128966499&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624097632&sqSv=1.0&sign=089cc16ccd995923927329a5789f340b&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.2.2%26utdid%3DYM3DULqnk14DAIg9Tybjkid5%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2128966499%26sn%3DE34AD3A2CA8A4E15C9D9B3F02EB803435C377B6B%26umidtoken%3DYM3DULqnk14DAIg9Tybjkid5%26msv%3D8.0.0%26brand%3DApple%26imei%3D201C2929D2646D256161B5DCC66EF92957345EFC%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad3G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D9849689B-072D-4C19-897F-BCB2CE525016"},{"key":"shuqicjyurl","val":"https://ocean.shuqireader.com/api/activity/activity/v1/lottery/info?timestamp=1624097680&userId=2128966499&activityId=311&sqSv=1.0&sign=a9314f5344bfc745c1f36ddfe36d2234&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.2.2%26utdid%3DYM3DULqnk14DAIg9Tybjkid5%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2128966499%26sn%3DE34AD3A2CA8A4E15C9D9B3F02EB803435C377B6B%26umidtoken%3DYM3DULqnk14DAIg9Tybjkid5%26msv%3D8.0.0%26brand%3DApple%26imei%3D201C2929D2646D256161B5DCC66EF92957345EFC%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad3G%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D9849689B-072D-4C19-897F-BCB2CE525016"},{"key":"shuqicjcsbody","val":"_public=skinId%3D999%26idfa%3D9849689B-072D-4C19-897F-BCB2CE525016%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26umidtoken%3DYM3DULqnk14DAIg9Tybjkid5%26user_id%3D2128966499%26sn%3DE34AD3A2CA8A4E15C9D9B3F02EB803435C377B6B%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D201C2929D2646D256161B5DCC66EF92957345EFC%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPad3G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYM3DULqnk14DAIg9Tybjkid5%26utype%3Dpre_vip%26sdk%3D13.2.2&deliveryId=711&key=sq_app_ad&miniWua=HHnB_3sYZylOCE94jD0%2BfzDnoZNZRawwuFJzto8CsiR1M/C4%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=703&sign=F1D6B06D16D5C4ADF9962D6D6D0EBA1B&timestamp=1624097646&userId=2128966499&user_id=2128966499&wua=HIVW_bmUaNJe8NcWcN0I1xFrG2/36m53RNt8rLMxzRfypZwVaITBv66Rj6vqbOzQNHVzGHZrjzhbsFD0nJe6ys3GgrH0FxtYSTPovW%2BSrhG1nMjvwLW/pMJGxwkm8DbJFuc4Ts5//zudZamXzsSowg1509zl92bglaJrJ1gciFf1FEOpIdmg%2BolCPO%2BJRB7Gi2OYn60DBFIzYf9n8Ath7LWcF%2BSTpKYmcuZuRVDgmdNaQWvw%3D"},{"key":"shuqicjbody","val":"wua=HIVW_mYwYp3VbtYc2y7i48O5scEaqHFiP95u6rttMJ3BrndmwZLC4w3ods9qcv6OGV%2BAjXyhkN%2BevkeycPLzdFAaWsBEpuxcm8LOaz6bIMMtUnD1kyQGWtN8dOI5I9ye5riEQVL7PqdcTktB05rugdB0k2UL1VUDhyJa52xLWEUElXjtcJ9IF1fh59a8UDGThbMDCD9cpXMB6TmuUNVFwbrbjhTMZR0fXq6DpEtqB7II2Cik%3D&ua=&userId=2128966499&umidtoken=YM3DULqnk14DAIg9Tybjkid5&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&asac=2A20C07RJ9F51AOEFSNHDR&timestamp=1624097654&activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&sqSv=1.0&sign=5fb51c5be975713fb06711141e11f8e6&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.2.2%26utdid%3DYM3DULqnk14DAIg9Tybjkid5%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2128966499%26sn%3DE34AD3A2CA8A4E15C9D9B3F02EB803435C377B6B%26umidtoken%3DYM3DULqnk14DAIg9Tybjkid5%26msv%3D8.0.0%26brand%3DApple%26imei%3D201C2929D2646D256161B5DCC66EF92957345EFC%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad3G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D9849689B-072D-4C19-897F-BCB2CE525016"},{"key":"shuqijsspbody","val":""},{"key":"shuqijsydurl","val":""},{"key":"shuqijsydbody","val":""},{"key":"shuqijsqdbody","val":""},{"key":"shuqijsqdspyurl","val":""},{"key":"shuqijsqdspbody","val":""},{"key":"shuqijsrwbody","val":""},{"key":"shuqijsfxbody","val":""},{"key":"shuqijsbookurl","val":""},{"key":"shuqijsbookbody","val":""},{"key":"shuqijssprwurl","val":""},{"key":"shuqiuserurl2","val":"https://ocean.shuqireader.com/api/jaccount/accountapi/v1/sapi/account/getBindinfo?userId=2131687328&sqSv=1.0&timestamp=1624097774&sign=8bd5471ab06f103f9eb2b60c45bffd8a&key=sq_h5_gateway"},{"key":"shuqisyurl2","val":"https://render.shuqireader.com/load/resource?sdk=13.4&utdid=YM1XHvZcbecDAHqZtHzr8CKG&ustatus=0&first_placeid=111111&net_env=3g&placeid=111111&user_id=2131687328&sn=35F49DC72F14F7474A3BD2A0DCA9DB6C88560195&umidtoken=YM1XHvZcbecDAHqZtHzr8CKG&msv=8.0.0&brand=Apple&imei=D7DC781BED675C64C2D348F090113324562A33BD&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=iOS&ver=210301&mod=iPodtouch3G&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=6EB0AE61-EDFB-4DF4-BA11-D92C815FCF86"},{"key":"shuqisybody2","val":"appVer=4.3.6.0&imei=D7DC781BED675C64C2D348F090113324562A33BD&isNewUser=1&params=%7B%22resources%22%3A%7B%22ShuqiVipEntry%22%3A%7B%7D%2C%22personalCardConfig%22%3A%7B%7D%7D%7D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=6f5487a53f33ba12f9861e1399f26a30&sn=35F49DC72F14F7474A3BD2A0DCA9DB6C88560195&soft_id=21&timestamp=1624097701&user_id=2131687328&ver=210301"},{"key":"shuqispbody2","val":"_public=skinId%3D999%26idfa%3D6EB0AE61-EDFB-4DF4-BA11-D92C815FCF86%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26umidtoken%3DYM1XHvZcbecDAHqZtHzr8CKG%26user_id%3D2131687328%26sn%3D35F49DC72F14F7474A3BD2A0DCA9DB6C88560195%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3DD7DC781BED675C64C2D348F090113324562A33BD%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPodtouch3G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYM1XHvZcbecDAHqZtHzr8CKG%26utype%3Dpre_vip%26sdk%3D13.4&deliveryId=525&key=sq_app_ad&miniWua=HHnB_Dhj89bkDj2wbbxo54NEVrNJOrnieP/yg5Zk0NdAWI0E%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=626&sign=0939D18A3DE5DFE24206B6F218A34FF4&timestamp=1624097718&userId=2131687328&user_id=2131687328&wua=HIVW_MKCu%2BMcROmbRKQA0JBosZivA6XXwL0YRw2gyDZj531zXNFjpQ1xrOMfH4FNjLOCkhWwOaokbaPK2elZO8BluOZWbBGLpyu5HtpynBNG8/LxVagOTOq5SKdFv6OlJnouOjfrOft6qTu5dFJqAmukmobNSISfgLthTzndBIM3lWLSnykMliTZXsr9MCy32PaTSchwAznoMp9a9nu1ZZ6%2BCvGI0R/m32N7Cuj0DBZVcw7c%3D"},{"key":"shuqiscbody2","val":""},{"key":"shuqiydbody2","val":""},{"key":"shuqiqdbody2","val":"clientTimestamp=1624097711&position=501&userId=2131687328&signInType=1&wua=HIVW_WRJSOpNTVvnYCs0s1%2BvaJnpMupO7TqNAuSGUJIzOWO77%2FxR6oLyl86oYLSXuSW6oIVR0x0EIQO0Y9NgTD%2B%2FiH0K%2FHJ55KYQ5WkrM%2B70uFJ0X7oZzLTkKZt3N0v54M6SRpQ%2F42QZ6t84DE9TEGe9HSSL5GbWATT%2B%2Fkm%2Ff%2FHRg1O0DwUmej84B5gEaZUuuGAspCeCQuxIHHhSRb%2FwBFca9fPW2Zg8KQiYJsQe3fQeyXcE%3D&ua=&miniWua=HHnB_V5zLQWKRh7eEoYnWneTfIgu7BOWl%2FLCyGebF%2BPU3FcQ%3D&umidtoken=YM1XHvZcbecDAHqZtHzr8CKG&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&sign=fad52d2ff16624bbc86ac038fe56e8f4&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.4%26utdid%3DYM1XHvZcbecDAHqZtHzr8CKG%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2131687328%26sn%3D35F49DC72F14F7474A3BD2A0DCA9DB6C88560195%26umidtoken%3DYM1XHvZcbecDAHqZtHzr8CKG%26msv%3D8.0.0%26brand%3DApple%26imei%3DD7DC781BED675C64C2D348F090113324562A33BD%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPodtouch3G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D6EB0AE61-EDFB-4DF4-BA11-D92C815FCF86"},{"key":"shuqirwbody2","val":"serviceWorkerOn=1&stopPullRefresh=1&from=ShuqiTab&upf=20368&sdk=13.4&utdid=YM1XHvZcbecDAHqZtHzr8CKG&ustatus=0&first_placeid=111111&net_env=3g&placeid=111111&user_id=2131687328&sn=35F49DC72F14F7474A3BD2A0DCA9DB6C88560195&umidtoken=YM1XHvZcbecDAHqZtHzr8CKG&msv=8.0.0&brand=Apple&imei=D7DC781BED675C64C2D348F090113324562A33BD&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&session=&skinColor=23B383&platform=1&ver=210301&mod=iPodtouch3G&statusBarHeight=44.000000&skinVersion=1&wh=1242x2688&soft_id=21&utype=pre_vip&skinId=999&idfa=6EB0AE61-EDFB-4DF4-BA11-D92C815FCF86&params=%7B%22resources%22%3A%7B%22ShuqiBsDailyTask%22%3A%7B%7D%7D%7D&userId=2131687328&placeId=111111&timestamp=1624097722&sqSv=1.0&sign=7c06b4a871dffb27e69deb9dfa7bebca&key=sq_h5_gateway&_public="},{"key":"shuqifxbody2","val":""},{"key":"shuqisprwurl2","val":"https://ocean.shuqireader.com/api/ad/adserver/v1/api/getAdInfo?appVer=4.3.6.0&placeId=111111&platform=iOS&requestSrc=h5&resourceId=626&timestamp=1624097775&user_id=2131687328&sqSv=1.0&sign=be020b2eb77553199fd8a5cbafd767e3&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.4%26utdid%3DYM1XHvZcbecDAHqZtHzr8CKG%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2131687328%26sn%3D35F49DC72F14F7474A3BD2A0DCA9DB6C88560195%26umidtoken%3DYM1XHvZcbecDAHqZtHzr8CKG%26msv%3D8.0.0%26brand%3DApple%26imei%3DD7DC781BED675C64C2D348F090113324562A33BD%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPodtouch3G%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D6EB0AE61-EDFB-4DF4-BA11-D92C815FCF86"},{"key":"shuqijlbody2","val":"requestSrc=h5&userId=2131687328&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624097722&sqSv=1.0&sign=6dea8b47d7d5c801da2624bafa74f9ab&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.4%26utdid%3DYM1XHvZcbecDAHqZtHzr8CKG%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2131687328%26sn%3D35F49DC72F14F7474A3BD2A0DCA9DB6C88560195%26umidtoken%3DYM1XHvZcbecDAHqZtHzr8CKG%26msv%3D8.0.0%26brand%3DApple%26imei%3DD7DC781BED675C64C2D348F090113324562A33BD%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPodtouch3G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D6EB0AE61-EDFB-4DF4-BA11-D92C815FCF86"},{"key":"shuqisqjlbody2","val":"src=&userId=2131687328&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624097715&sqSv=1.0&sign=992ed6a865575030c0f0250126f49b78&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.4%26utdid%3DYM1XHvZcbecDAHqZtHzr8CKG%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2131687328%26sn%3D35F49DC72F14F7474A3BD2A0DCA9DB6C88560195%26umidtoken%3DYM1XHvZcbecDAHqZtHzr8CKG%26msv%3D8.0.0%26brand%3DApple%26imei%3DD7DC781BED675C64C2D348F090113324562A33BD%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPodtouch3G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D6EB0AE61-EDFB-4DF4-BA11-D92C815FCF86"},{"key":"shuqicjyurl2","val":"https://ocean.shuqireader.com/api/activity/activity/v1/lottery/info?timestamp=1624097777&userId=2131687328&activityId=311&sqSv=1.0&sign=dff6aff92e6525bdcfe1ebbd15f6d6f5&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.4%26utdid%3DYM1XHvZcbecDAHqZtHzr8CKG%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2131687328%26sn%3D35F49DC72F14F7474A3BD2A0DCA9DB6C88560195%26umidtoken%3DYM1XHvZcbecDAHqZtHzr8CKG%26msv%3D8.0.0%26brand%3DApple%26imei%3DD7DC781BED675C64C2D348F090113324562A33BD%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPodtouch3G%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D6EB0AE61-EDFB-4DF4-BA11-D92C815FCF86"},{"key":"shuqicjcsbody2","val":"_public=skinId%3D999%26idfa%3D6EB0AE61-EDFB-4DF4-BA11-D92C815FCF86%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26umidtoken%3DYM1XHvZcbecDAHqZtHzr8CKG%26user_id%3D2131687328%26sn%3D35F49DC72F14F7474A3BD2A0DCA9DB6C88560195%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3DD7DC781BED675C64C2D348F090113324562A33BD%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPodtouch3G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYM1XHvZcbecDAHqZtHzr8CKG%26utype%3Dpre_vip%26sdk%3D13.4&deliveryId=711&key=sq_app_ad&miniWua=HHnB_r2YRojVba/acxTFxlH6fO0apvrCgJtvGYOVZxEyIDVU%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=703&sign=6F816802233DD729F4BC98A19AD2CF73&timestamp=1624097730&userId=2131687328&user_id=2131687328&wua=HIVW_eHl0up/k9tMnf8ahSM%2Bywq1PIKKg1n7ToyS1lLDJmYaySMqn7iLcjCPVwHV7Wv20KwUuhwItG98z5wb7wGh%2BOpHn1V3bqeET5HGS5gSNY4%2BBJePSnRQkrERQhUKWxwHTwC3mAZbuLvY8rzIFizCs9RgacDIo98MqxgWeYOdj3x%2B1oox6ubsoOo1L3AUDa/1L4DGYtPEgL%2BdMzxHEO5AEHHmb/N5cd7cNvdp23xPKh5Y%3D"},{"key":"shuqicjbody2","val":"wua=HIVW_G%2BOBA%2BoGKe3oUGZ3htU33rTzho0yNuUkCVYffo1VxmQZ7%2FRBLBxUbZGbr3p3Wd10AGEvVtRFBWCTvLeGYxgjkNOUX7vEQm%2FyV2wqozst8jEizLXFRBfAauV9DcaQCNDhXU4EgZ0OMqk6mb6%2F4vPMWuhlzD0CeyZ63t2TGmWKyOyFHOpTnkkyNn8slf%2FWhGxkaOGpf1v06jZxCHV73y%2BBZ7u8loXkIzNfL%2FRkuQzRMu8%3D&ua=&userId=2131687328&umidtoken=YM1XHvZcbecDAHqZtHzr8CKG&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&asac=2A20C07RJ9F51AOEFSNHDR&timestamp=1624097732&activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&sqSv=1.0&sign=138e531eba3853b67e6ebb41a6177252&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.4%26utdid%3DYM1XHvZcbecDAHqZtHzr8CKG%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2131687328%26sn%3D35F49DC72F14F7474A3BD2A0DCA9DB6C88560195%26umidtoken%3DYM1XHvZcbecDAHqZtHzr8CKG%26msv%3D8.0.0%26brand%3DApple%26imei%3DD7DC781BED675C64C2D348F090113324562A33BD%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPodtouch3G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D6EB0AE61-EDFB-4DF4-BA11-D92C815FCF86"},{"key":"shuqijsspbody2","val":""},{"key":"shuqijsydurl2","val":""},{"key":"shuqijsydbody2","val":""},{"key":"shuqijsqdbody2","val":""},{"key":"shuqijsqdspyurl2","val":""},{"key":"shuqijsqdspbody2","val":""},{"key":"shuqijsrwbody2","val":""},{"key":"shuqijsfxbody2","val":""},{"key":"shuqijsbookurl2","val":""},{"key":"shuqijsbookbody2","val":""},{"key":"shuqijssprwurl2","val":""},{"key":"shuqiuserurl3","val":"https://ocean.shuqireader.com/api/jaccount/accountapi/v1/sapi/account/getBindinfo?userId=2131092648&sqSv=1.0&timestamp=1624097828&sign=0d7a10ac74233d0ad2b484e529b56865&key=sq_h5_gateway"},{"key":"shuqisyurl3","val":"https://render.shuqireader.com/load/resource?sdk=13.5.1&utdid=YM3D%2B%2FfHQrIDALAI%2BmU4dWKV&ustatus=0&first_placeid=111111&net_env=4g&placeid=111111&user_id=2131092648&sn=7EF87BAB243F8243D1CBAE7A10D93C1B9589F6FE&umidtoken=YM3D%2B%2FfHQrIDALAI%2BmU4dWKV&msv=8.0.0&brand=Apple&imei=F1E988766725EA583BCC13C60ADD491366811562&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=iOS&ver=210301&mod=iPad3G&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=E0271BC5-4DF7-4B38-BC38-A7810FEB56D2"},{"key":"shuqisybody3","val":"appVer=4.3.6.0&imei=F1E988766725EA583BCC13C60ADD491366811562&isNewUser=1&params=%7B%22resources%22%3A%7B%22ShuqiVipEntry%22%3A%7B%7D%2C%22personalCardConfig%22%3A%7B%7D%7D%7D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=62b22319ebaf655f00d571d0211d42ac&sn=7EF87BAB243F8243D1CBAE7A10D93C1B9589F6FE&soft_id=21&timestamp=1624097789&user_id=2131092648&ver=210301"},{"key":"shuqispbody3","val":"_public=skinId%3D999%26idfa%3DE0271BC5-4DF7-4B38-BC38-A7810FEB56D2%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26umidtoken%3DYM3D%2B/fHQrIDALAI%2BmU4dWKV%26user_id%3D2131092648%26sn%3D7EF87BAB243F8243D1CBAE7A10D93C1B9589F6FE%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3DF1E988766725EA583BCC13C60ADD491366811562%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPad3G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYM3D%2B/fHQrIDALAI%2BmU4dWKV%26utype%3Dpre_vip%26sdk%3D13.5.1&deliveryId=525&key=sq_app_ad&miniWua=HHnB_7zvuqeIsTuMrWeD9foIAzPdJNNM0qX7ToJom7TZnW48%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=626&sign=9799ABC3869B10AF2725A2155D17188D&timestamp=1624097806&userId=2131092648&user_id=2131092648&wua=HIVW_i5gMN5l8R9BmJg43vs4iaUV97HJJ0fTKacbNcd8NHhGN0ykLeUPGZ9nbt1Bd3nPvM7Cm3l8Uy0VbupZ58NQN07l3VGGIN4Y4xyU5Vjy0E2nY3UEsH2eVCqzPG/xCh/6Bo8Q%2Bgj7QcvYOG5Xg0kZnjB9r4YLVHZuFwGpjUDNCJHwy5CTNG%2BoHdeqoypeBvcMcYBFzV%2BUVk04LWJCurazeN%2BgMzY5C8YhM4pNhZz5zhs0%3D"},{"key":"shuqiscbody3","val":""},{"key":"shuqiydbody3","val":""},{"key":"shuqiqdbody3","val":"clientTimestamp=1624097798&position=501&userId=2131092648&signInType=1&wua=HIVW_90i1pybAAArgKGOhos9zlfskpJTIqifB9%2F92J3viyt7ckq2QWqVY0Ei9z96j41k%2F0vTB7lAlzY5%2BBzxm7wVz1aPJDrOwxkH7Zjrs0hZZY0SrdD8POqt6oe6c9R93RqgWhez89LlaFpmwilLd2x1BDHtBLsWAbwQbq8oRgfhrwDW6h59GGbQsfY5%2Fkgs536dlWx1YMC7j9M6Si1LqwrO%2Bb9q1%2Ff9DgvnMlolSsJhuzII%3D&ua=&miniWua=HHnB_4c8AwA%2B5VFQ6S4KQTwn%2FCBkNXsqKTSMV8SyS97VwYo4%3D&umidtoken=YM3D%2B%2FfHQrIDALAI%2BmU4dWKV&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&sign=676540b913b72624cf6f506ef08623e4&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.5.1%26utdid%3DYM3D%252B%252FfHQrIDALAI%252BmU4dWKV%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2131092648%26sn%3D7EF87BAB243F8243D1CBAE7A10D93C1B9589F6FE%26umidtoken%3DYM3D%252B%252FfHQrIDALAI%252BmU4dWKV%26msv%3D8.0.0%26brand%3DApple%26imei%3DF1E988766725EA583BCC13C60ADD491366811562%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad3G%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DE0271BC5-4DF7-4B38-BC38-A7810FEB56D2"},{"key":"shuqirwbody3","val":"serviceWorkerOn=1&stopPullRefresh=1&from=ShuqiTab&upf=20368&sdk=13.5.1&utdid=YM3D%2B%2FfHQrIDALAI%2BmU4dWKV&ustatus=0&first_placeid=111111&net_env=4g&placeid=111111&user_id=2131092648&sn=7EF87BAB243F8243D1CBAE7A10D93C1B9589F6FE&umidtoken=YM3D%2B%2FfHQrIDALAI%2BmU4dWKV&msv=8.0.0&brand=Apple&imei=F1E988766725EA583BCC13C60ADD491366811562&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=1&ver=210301&mod=iPad3G&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=E0271BC5-4DF7-4B38-BC38-A7810FEB56D2&params=%7B%22resources%22%3A%7B%22ShuqiBsDailyTask%22%3A%7B%7D%7D%7D&userId=2131092648&placeId=111111&timestamp=1624097810&sqSv=1.0&sign=5a35147abd114fecd80cf87dc8707fd3&key=sq_h5_gateway&_public="},{"key":"shuqifxbody3","val":""},{"key":"shuqisprwurl3","val":"https://ocean.shuqireader.com/api/ad/adserver/v1/api/getAdInfo?appVer=4.3.6.0&placeId=111111&platform=iOS&requestSrc=h5&resourceId=626&timestamp=1624097828&user_id=2131092648&sqSv=1.0&sign=c4304425a43fefc89b22f138a4047f21&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.5.1%26utdid%3DYM3D%252B%252FfHQrIDALAI%252BmU4dWKV%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2131092648%26sn%3D7EF87BAB243F8243D1CBAE7A10D93C1B9589F6FE%26umidtoken%3DYM3D%252B%252FfHQrIDALAI%252BmU4dWKV%26msv%3D8.0.0%26brand%3DApple%26imei%3DF1E988766725EA583BCC13C60ADD491366811562%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad3G%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DE0271BC5-4DF7-4B38-BC38-A7810FEB56D2"},{"key":"shuqijlbody3","val":"requestSrc=h5&userId=2131092648&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624097810&sqSv=1.0&sign=4b2d298192a08adacc67b782d1357453&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.5.1%26utdid%3DYM3D%252B%252FfHQrIDALAI%252BmU4dWKV%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2131092648%26sn%3D7EF87BAB243F8243D1CBAE7A10D93C1B9589F6FE%26umidtoken%3DYM3D%252B%252FfHQrIDALAI%252BmU4dWKV%26msv%3D8.0.0%26brand%3DApple%26imei%3DF1E988766725EA583BCC13C60ADD491366811562%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad3G%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DE0271BC5-4DF7-4B38-BC38-A7810FEB56D2"},{"key":"shuqisqjlbody3","val":"src=&userId=2131092648&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624097803&sqSv=1.0&sign=56b7d26e96d399e219dc708aecfd6434&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.5.1%26utdid%3DYM3D%252B%252FfHQrIDALAI%252BmU4dWKV%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2131092648%26sn%3D7EF87BAB243F8243D1CBAE7A10D93C1B9589F6FE%26umidtoken%3DYM3D%252B%252FfHQrIDALAI%252BmU4dWKV%26msv%3D8.0.0%26brand%3DApple%26imei%3DF1E988766725EA583BCC13C60ADD491366811562%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad3G%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DE0271BC5-4DF7-4B38-BC38-A7810FEB56D2"},{"key":"shuqicjyurl3","val":"https://ocean.shuqireader.com/api/activity/activity/v1/lottery/info?timestamp=1624097830&userId=2131092648&activityId=311&sqSv=1.0&sign=e0135e9cd8a3927adf37910893801ddf&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.5.1%26utdid%3DYM3D%252B%252FfHQrIDALAI%252BmU4dWKV%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2131092648%26sn%3D7EF87BAB243F8243D1CBAE7A10D93C1B9589F6FE%26umidtoken%3DYM3D%252B%252FfHQrIDALAI%252BmU4dWKV%26msv%3D8.0.0%26brand%3DApple%26imei%3DF1E988766725EA583BCC13C60ADD491366811562%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad3G%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DE0271BC5-4DF7-4B38-BC38-A7810FEB56D2"},{"key":"shuqicjcsbody3","val":"_public=skinId%3D999%26idfa%3DE0271BC5-4DF7-4B38-BC38-A7810FEB56D2%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26umidtoken%3DYM3D%2B/fHQrIDALAI%2BmU4dWKV%26user_id%3D2131092648%26sn%3D7EF87BAB243F8243D1CBAE7A10D93C1B9589F6FE%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3DF1E988766725EA583BCC13C60ADD491366811562%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPad3G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYM3D%2B/fHQrIDALAI%2BmU4dWKV%26utype%3Dpre_vip%26sdk%3D13.5.1&deliveryId=711&key=sq_app_ad&miniWua=HHnB_67QcI1zZoDSEvRhabTtc%2BBq74eTj%2BxbyaAaRM1lWEHs%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=703&sign=677E3FBC13EE842ED06879F32FFF071D&timestamp=1624097816&userId=2131092648&user_id=2131092648&wua=HIVW_YytjfjzpjtJHBdaYF7TASBFeSI%2BEkho8JvkpXU5gJtumMf9jREdprB6fqu42Op0kp3HIewP9WBVJ9F4%2BSWrXbXBRZtjMS5WEO/8/trD9BkT6OT51TBzMf%2BPJVTp/C4zZAeoaZPesnAi4yeAAdaGDzVymhXdmIeS9wSWXeyaPb3lTN28DFXFMhCuQIfLjMHYm8rRYCoM6sqD720TMY7YopAnjCMNLLTNUdL4b2wCxeCs%3D"},{"key":"shuqicjbody3","val":"wua=HIVW_M5wVy%2FkBwTcfat702PC8hH%2B8Au1T1OjIjpRMbVXZTryIzIB1dOBx799g%2FhhRh3sVevKvymm4vywqryAPuUTrC0%2B1WQZH7ZHF9KpRhZz%2Bd1HXppOctOWdewwcNslbBtsdos7QazTkLgks7N%2BsFKdisQWv0BHaITjw6kXHsrhzimRjdqmdWg2nqmwKcSIKNZ7wFTfWtZQQG1me%2F1EuBEQ6fJzpW3w6u0%2FRLBifv5u8zyk%3D&ua=&userId=2131092648&umidtoken=YM3D%2B%2FfHQrIDALAI%2BmU4dWKV&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&asac=2A20C07RJ9F51AOEFSNHDR&timestamp=1624097818&activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&sqSv=1.0&sign=5fff6c417dc771ee576f48aa79cb31b5&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.5.1%26utdid%3DYM3D%252B%252FfHQrIDALAI%252BmU4dWKV%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2131092648%26sn%3D7EF87BAB243F8243D1CBAE7A10D93C1B9589F6FE%26umidtoken%3DYM3D%252B%252FfHQrIDALAI%252BmU4dWKV%26msv%3D8.0.0%26brand%3DApple%26imei%3DF1E988766725EA583BCC13C60ADD491366811562%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad3G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DE0271BC5-4DF7-4B38-BC38-A7810FEB56D2"},{"key":"shuqijsspbody3","val":""},{"key":"shuqijsydurl3","val":""},{"key":"shuqijsydbody3","val":""},{"key":"shuqijsqdbody3","val":""},{"key":"shuqijsqdspyurl3","val":""},{"key":"shuqijsqdspbody3","val":""},{"key":"shuqijsrwbody3","val":""},{"key":"shuqijsfxbody3","val":""},{"key":"shuqijsbookurl3","val":""},{"key":"shuqijsbookbody3","val":""},{"key":"shuqijssprwurl3","val":""},{"key":"shuqiuserurl4","val":"https://ocean.shuqireader.com/api/jaccount/accountapi/v1/sapi/account/getBindinfo?userId=2129066032&sqSv=1.0&timestamp=1624098460&sign=3ef6dd46a1124cc4600500b889296fad&key=sq_h5_gateway"},{"key":"shuqisyurl4","val":"https://render.shuqireader.com/load/resource?sdk=13.4&utdid=YM3EMHbQ0K8DAJ8M1oPXXWPa&ustatus=0&first_placeid=111111&net_env=3g&placeid=111111&user_id=2129066032&sn=450D3A9D6EDEBE48A78277F7BB4E1757753B6570&umidtoken=YM3EMHbQ0K8DAJ8M1oPXXWPa&msv=8.0.0&brand=Apple&imei=6538BFF83410509156BED14C1BC38AB974A0A3BC&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=iOS&ver=210301&mod=UnknowniPod&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=E1993B63-6964-4FE8-A4F9-8FF3A7A70AA2"},{"key":"shuqisybody4","val":"appVer=4.3.6.0&imei=6538BFF83410509156BED14C1BC38AB974A0A3BC&isNewUser=1&params=%7B%22resources%22%3A%7B%22ShuqiVipEntry%22%3A%7B%7D%2C%22personalCardConfig%22%3A%7B%7D%7D%7D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=94b8626fce95fda4235a2f961d3bcc92&sn=450D3A9D6EDEBE48A78277F7BB4E1757753B6570&soft_id=21&timestamp=1624098087&user_id=2129066032&ver=210301"},{"key":"shuqispbody4","val":"_public=skinId%3D999%26idfa%3DE1993B63-6964-4FE8-A4F9-8FF3A7A70AA2%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26umidtoken%3DYM3EMHbQ0K8DAJ8M1oPXXWPa%26user_id%3D2129066032%26sn%3D450D3A9D6EDEBE48A78277F7BB4E1757753B6570%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D6538BFF83410509156BED14C1BC38AB974A0A3BC%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DUnknowniPod%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYM3EMHbQ0K8DAJ8M1oPXXWPa%26utype%3Dpre_vip%26sdk%3D13.4&deliveryId=525&key=sq_app_ad&miniWua=HHnB_dR6mI/hP4rg6uslTzvO1eark3Y1PnhW7SKu%2BwIQx0Wk%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=626&sign=EC65062CDDBE9AB8F47414F112236EA5&timestamp=1624098173&userId=2129066032&user_id=2129066032&wua=HIVW_tFk7bVRoUDcDOSsb5/c6eRe1EkW2UzabeamebZcPX%2BJQBx9XIARFEQkhFVji29vEx2quEQkTa07wKKBxl09grKjgqeRg/szsgTB7m0ezfz1Q%2BKkuupSQOd9d8UOle9kJtKCeKf8DUknDLLOx4BpM7IrPt0SWwjwK%2BeXLhmeH3uDSWdQKDdDerz6PipnpPZEUDENsteDTFqn1Sg11hQ1Yt9XvHXOv3a83Hpajx9Ik64Y%3D"},{"key":"shuqiscbody4","val":""},{"key":"shuqiydbody4","val":""},{"key":"shuqiqdbody4","val":"clientTimestamp=1624098129&position=501&userId=2129066032&signInType=1&wua=HIVW_JoZeQvzWcxwAGwBva3bc%2BvgZ3sZwvtCFa4e3xOHgS%2BClbFmq3%2Fy5xBnqq%2B%2FZUfdlan%2FGF1MzYf7yHLwUTicht4IerpmoqUvjDmqDBdqJk3h1IdE%2FaealSewlxB2GJJBGBFAR7GS3X9k1aexQXV8H69mzRH4g%2FkC1aedQP2Dx8akmWrHQ%2FZr2w8JYka6V%2F9%2Fi%2F6BO2S%2BZkUsjK1ZTs86jWjIPoBOC3lTEJGbwUPJRgXQ%3D&ua=&miniWua=HHnB_g%2Fv56u%2Bga59oEWdjVZ2H2fXLLzf9ojf6cHHtkD4%2FC6w%3D&umidtoken=YM3EMHbQ0K8DAJ8M1oPXXWPa&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&sign=94549f9b400f0b38d8dfcb5ae8d6e420&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.4%26utdid%3DYM3EMHbQ0K8DAJ8M1oPXXWPa%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2129066032%26sn%3D450D3A9D6EDEBE48A78277F7BB4E1757753B6570%26umidtoken%3DYM3EMHbQ0K8DAJ8M1oPXXWPa%26msv%3D8.0.0%26brand%3DApple%26imei%3D6538BFF83410509156BED14C1BC38AB974A0A3BC%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPod%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DE1993B63-6964-4FE8-A4F9-8FF3A7A70AA2"},{"key":"shuqirwbody4","val":"serviceWorkerOn=1&stopPullRefresh=1&from=ShuqiTab&upf=20368&sdk=13.4&utdid=YM3EMHbQ0K8DAJ8M1oPXXWPa&ustatus=0&first_placeid=111111&net_env=3g&placeid=111111&user_id=2129066032&sn=450D3A9D6EDEBE48A78277F7BB4E1757753B6570&umidtoken=YM3EMHbQ0K8DAJ8M1oPXXWPa&msv=8.0.0&brand=Apple&imei=6538BFF83410509156BED14C1BC38AB974A0A3BC&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&session=&skinColor=23B383&platform=1&ver=210301&mod=UnknowniPod&statusBarHeight=44.000000&skinVersion=1&wh=1242x2688&soft_id=21&utype=pre_vip&skinId=999&idfa=E1993B63-6964-4FE8-A4F9-8FF3A7A70AA2&params=%7B%22resources%22%3A%7B%22ShuqiBsDailyTask%22%3A%7B%7D%7D%7D&userId=2129066032&placeId=111111&timestamp=1624098183&sqSv=1.0&sign=0c8d54b2724cfcf974ec0aae3867acd8&key=sq_h5_gateway&_public="},{"key":"shuqifxbody4","val":""},{"key":"shuqisprwurl4","val":"https://ocean.shuqireader.com/api/ad/adserver/v1/api/getAdInfo?appVer=4.3.6.0&placeId=111111&platform=iOS&requestSrc=h5&resourceId=626&timestamp=1624098459&user_id=2129066032&sqSv=1.0&sign=ad126d65d75d067156642de71bf3624c&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.4%26utdid%3DYM3EMHbQ0K8DAJ8M1oPXXWPa%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2129066032%26sn%3D450D3A9D6EDEBE48A78277F7BB4E1757753B6570%26umidtoken%3DYM3EMHbQ0K8DAJ8M1oPXXWPa%26msv%3D8.0.0%26brand%3DApple%26imei%3D6538BFF83410509156BED14C1BC38AB974A0A3BC%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPod%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DE1993B63-6964-4FE8-A4F9-8FF3A7A70AA2"},{"key":"shuqijlbody4","val":"requestSrc=h5&userId=2129066032&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624098183&sqSv=1.0&sign=c94a62e3be31c88fe264d01854bcd945&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.4%26utdid%3DYM3EMHbQ0K8DAJ8M1oPXXWPa%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2129066032%26sn%3D450D3A9D6EDEBE48A78277F7BB4E1757753B6570%26umidtoken%3DYM3EMHbQ0K8DAJ8M1oPXXWPa%26msv%3D8.0.0%26brand%3DApple%26imei%3D6538BFF83410509156BED14C1BC38AB974A0A3BC%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPod%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DE1993B63-6964-4FE8-A4F9-8FF3A7A70AA2"},{"key":"shuqisqjlbody4","val":"src=&userId=2129066032&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624098134&sqSv=1.0&sign=7ae8837c3e7e6dab28666ebecbb1d727&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.4%26utdid%3DYM3EMHbQ0K8DAJ8M1oPXXWPa%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2129066032%26sn%3D450D3A9D6EDEBE48A78277F7BB4E1757753B6570%26umidtoken%3DYM3EMHbQ0K8DAJ8M1oPXXWPa%26msv%3D8.0.0%26brand%3DApple%26imei%3D6538BFF83410509156BED14C1BC38AB974A0A3BC%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPod%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DE1993B63-6964-4FE8-A4F9-8FF3A7A70AA2"},{"key":"shuqicjyurl4","val":"https://ocean.shuqireader.com/api/activity/activity/v1/lottery/info?timestamp=1624098460&userId=2129066032&activityId=311&sqSv=1.0&sign=f6e1fcf67186014622e330c5e2788bbe&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.4%26utdid%3DYM3EMHbQ0K8DAJ8M1oPXXWPa%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2129066032%26sn%3D450D3A9D6EDEBE48A78277F7BB4E1757753B6570%26umidtoken%3DYM3EMHbQ0K8DAJ8M1oPXXWPa%26msv%3D8.0.0%26brand%3DApple%26imei%3D6538BFF83410509156BED14C1BC38AB974A0A3BC%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPod%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DE1993B63-6964-4FE8-A4F9-8FF3A7A70AA2"},{"key":"shuqicjcsbody4","val":"_public=skinId%3D999%26idfa%3DE1993B63-6964-4FE8-A4F9-8FF3A7A70AA2%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26umidtoken%3DYM3EMHbQ0K8DAJ8M1oPXXWPa%26user_id%3D2129066032%26sn%3D450D3A9D6EDEBE48A78277F7BB4E1757753B6570%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D6538BFF83410509156BED14C1BC38AB974A0A3BC%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DUnknowniPod%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYM3EMHbQ0K8DAJ8M1oPXXWPa%26utype%3Dpre_vip%26sdk%3D13.4&deliveryId=711&key=sq_app_ad&miniWua=HHnB_WXH2V3FSZwkX0VJzqdNFRbtxfJ8RnkmxTm3tTG8m2Pw%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=703&sign=DF0E128DE1C5BA0AA058CBCAC38DB74E&timestamp=1624098140&userId=2129066032&user_id=2129066032&wua=HIVW_rWDyyujgko19pm13I3CVmnpNyanSjqHv08dDUYm4/oRXsycsVAqR5bbSLSTdYG7TbG9tNJygA7lgggcUUbk5XdgTsgowLgg%2BrRuiLwvwLq1rx7TyspaQhdnz5OzXdf1IWLHsRMe0hY86VOUwNh8Wfqqp30tQvq11g9m2NZJA3EiQGi8AdbewtLTKFru4dLLJtZ%2BEaDneI6I6y8ecGalOxeuENeU6S8ZjLfJSMgQy8a0%3D"},{"key":"shuqicjbody4","val":"wua=HIVW_GsJUCytCxBgwnuvfwEu73w9%2FRwEJlkXznrlKtaKuXoicAD5b7vke5UdIwTz4s8YpcX%2FbuYHsvfwTIqRs2vNo8XVOgWyO1Kj0%2Fjy33mQLb0Qb3B%2Ba%2BoHlTe06IizdwegT86XbaMbUZva95F%2FtUBkrT861PWuOJ0DBVdWADsB7VT2tzopi1E6PcWSfa09h49RWCEXyQDv80dmli6%2BskMG4DaQFZEGEbLvOmy65lCIDmkg%3D&ua=&userId=2129066032&umidtoken=YM3EMHbQ0K8DAJ8M1oPXXWPa&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&asac=2A20C07RJ9F51AOEFSNHDR&timestamp=1624098162&activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&sqSv=1.0&sign=b4d5119b5056cc9f39670fd1242af075&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.4%26utdid%3DYM3EMHbQ0K8DAJ8M1oPXXWPa%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2129066032%26sn%3D450D3A9D6EDEBE48A78277F7BB4E1757753B6570%26umidtoken%3DYM3EMHbQ0K8DAJ8M1oPXXWPa%26msv%3D8.0.0%26brand%3DApple%26imei%3D6538BFF83410509156BED14C1BC38AB974A0A3BC%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPod%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DE1993B63-6964-4FE8-A4F9-8FF3A7A70AA2"},{"key":"shuqijsspbody4","val":""},{"key":"shuqijsydurl4","val":""},{"key":"shuqijsydbody4","val":""},{"key":"shuqijsqdbody4","val":""},{"key":"shuqijsqdspyurl4","val":""},{"key":"shuqijsqdspbody4","val":""},{"key":"shuqijsrwbody4","val":""},{"key":"shuqijsfxbody4","val":""},{"key":"shuqijsbookurl4","val":""},{"key":"shuqijsbookbody4","val":""},{"key":"shuqijssprwurl4","val":""},{"key":"shuqiuserurl5","val":"https://ocean.shuqireader.com/api/jaccount/accountapi/v1/sapi/account/getBindinfo?userId=2128517313&sqSv=1.0&timestamp=1624098529&sign=285f1f0c7f8e90738d1f77aada66abb3&key=sq_h5_gateway"},{"key":"shuqisyurl5","val":"https://render.shuqireader.com/load/resource?sdk=13.3.1&utdid=YM1XRPnjyhIDAD5xOEJAvIUr&ustatus=0&first_placeid=111111&net_env=4g&placeid=111111&user_id=2128517313&sn=EF24EB2FD1FF7AC01E6C124764397BBC7813EBEB&umidtoken=YM1XRPnjyhIDAD5xOEJAvIUr&msv=8.0.0&brand=Apple&imei=BB0BF8DAC0B433CF6F6944EF131AE6052929ACD1&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=iOS&ver=210301&mod=iPhone6&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=C4277A97-61D0-44E9-B85F-728DBA5F936F"},{"key":"shuqisybody5","val":"appVer=4.3.6.0&imei=BB0BF8DAC0B433CF6F6944EF131AE6052929ACD1&isNewUser=1&params=%7B%22resources%22%3A%7B%22ShuqiVipEntry%22%3A%7B%7D%2C%22personalCardConfig%22%3A%7B%7D%7D%7D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=e5550c457549b8341b2e81fac6b9fc0e&sn=EF24EB2FD1FF7AC01E6C124764397BBC7813EBEB&soft_id=21&timestamp=1624098474&user_id=2128517313&ver=210301"},{"key":"shuqispbody5","val":"_public=skinId%3D999%26idfa%3DC4277A97-61D0-44E9-B85F-728DBA5F936F%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26umidtoken%3DYM1XRPnjyhIDAD5xOEJAvIUr%26user_id%3D2128517313%26sn%3DEF24EB2FD1FF7AC01E6C124764397BBC7813EBEB%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3DBB0BF8DAC0B433CF6F6944EF131AE6052929ACD1%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhone6%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYM1XRPnjyhIDAD5xOEJAvIUr%26utype%3Dpre_vip%26sdk%3D13.3.1&deliveryId=525&key=sq_app_ad&miniWua=HHnB_xgBKjEcXwPyEoxI%2BgWqdseQtr%2BRzpoRO1WUPPCOirsw%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=626&sign=113F34F890371D9DBFF53C196A132F3A&timestamp=1624098495&userId=2128517313&user_id=2128517313&wua=HIVW_Hvuxo7sP3b99haMBTpjyvw2gfT0c7tR6uRlFAqK1N%2BWTw2SIsq/Xn7WERExfCmHOZlh2Zy9iNGZumgdUQXGeWgln8ECcaLWsZ7ERH9LQnuEtL7/9VBNKhU9BmW5t0dn4K%2Bp2VmNdZ5DiXptaCuXd6KvVJ43xEiQcE9m5fRJTo94OYXFQIYa9z6DFmCO143fMRqnYd%2BOvjCb2W3dcIOJcLRmW5qmUhE8T6mz0OzcgCxw%3D"},{"key":"shuqiscbody5","val":""},{"key":"shuqiydbody5","val":""},{"key":"shuqiqdbody5","val":"clientTimestamp=1624098485&position=501&userId=2128517313&signInType=1&wua=HIVW_pU0xxSjXrkQ2LN%2BFfZtBN5q9wRavhfxEuFe5dO0Z10j6X1IZLgiFDkStAFRlwoLzCMZsgQzmKATAJmyMAhFcUIgEKcFeaYna2GY4x70ljtSeG937AN%2FbNC68m88w5CbwZwutiWCDA8T3eI8WJLbmf8NNoB6iYNZ5NADR%2BI%2FQrU%2BE4uyvBST6jkCu2ZujoCWYj5EhwcIbDWWsdN8rREQyKlsgE%2BSueeJ3TbLw6b%2BUSCc%3D&ua=&miniWua=HHnB_ruXLDJfCL349EdaWDN6wPcQBRerJ5q7sULiJDIN0ZZc%3D&umidtoken=YM1XRPnjyhIDAD5xOEJAvIUr&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&sign=b590094b0563aa053c3215d4f01ac2af&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.3.1%26utdid%3DYM1XRPnjyhIDAD5xOEJAvIUr%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2128517313%26sn%3DEF24EB2FD1FF7AC01E6C124764397BBC7813EBEB%26umidtoken%3DYM1XRPnjyhIDAD5xOEJAvIUr%26msv%3D8.0.0%26brand%3DApple%26imei%3DBB0BF8DAC0B433CF6F6944EF131AE6052929ACD1%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone6%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DC4277A97-61D0-44E9-B85F-728DBA5F936F"},{"key":"shuqirwbody5","val":"serviceWorkerOn=1&stopPullRefresh=1&from=ShuqiTab&upf=20368&sdk=13.3.1&utdid=YM1XRPnjyhIDAD5xOEJAvIUr&ustatus=0&first_placeid=111111&net_env=4g&placeid=111111&user_id=2128517313&sn=EF24EB2FD1FF7AC01E6C124764397BBC7813EBEB&umidtoken=YM1XRPnjyhIDAD5xOEJAvIUr&msv=8.0.0&brand=Apple&imei=BB0BF8DAC0B433CF6F6944EF131AE6052929ACD1&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&session=&skinColor=23B383&platform=1&ver=210301&mod=iPhone6&statusBarHeight=44.000000&skinVersion=1&wh=1242x2688&soft_id=21&utype=pre_vip&skinId=999&idfa=C4277A97-61D0-44E9-B85F-728DBA5F936F&params=%7B%22resources%22%3A%7B%22ShuqiBsDailyTask%22%3A%7B%7D%7D%7D&userId=2128517313&placeId=111111&timestamp=1624098501&sqSv=1.0&sign=6a1cd6d4f3c37b54ef00681fa8ff4d6e&key=sq_h5_gateway&_public="},{"key":"shuqifxbody5","val":""},{"key":"shuqisprwurl5","val":"https://ocean.shuqireader.com/api/ad/adserver/v1/api/getAdInfo?appVer=4.3.6.0&placeId=111111&platform=iOS&requestSrc=h5&resourceId=626&timestamp=1624098526&user_id=2128517313&sqSv=1.0&sign=b368f847e172ad4990da77aafe5ce567&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.3.1%26utdid%3DYM1XRPnjyhIDAD5xOEJAvIUr%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2128517313%26sn%3DEF24EB2FD1FF7AC01E6C124764397BBC7813EBEB%26umidtoken%3DYM1XRPnjyhIDAD5xOEJAvIUr%26msv%3D8.0.0%26brand%3DApple%26imei%3DBB0BF8DAC0B433CF6F6944EF131AE6052929ACD1%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone6%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DC4277A97-61D0-44E9-B85F-728DBA5F936F"},{"key":"shuqijlbody5","val":"requestSrc=h5&userId=2128517313&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624098501&sqSv=1.0&sign=f0c438ae6d0b4945404ce71c64aea3bf&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.3.1%26utdid%3DYM1XRPnjyhIDAD5xOEJAvIUr%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2128517313%26sn%3DEF24EB2FD1FF7AC01E6C124764397BBC7813EBEB%26umidtoken%3DYM1XRPnjyhIDAD5xOEJAvIUr%26msv%3D8.0.0%26brand%3DApple%26imei%3DBB0BF8DAC0B433CF6F6944EF131AE6052929ACD1%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone6%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DC4277A97-61D0-44E9-B85F-728DBA5F936F"},{"key":"shuqisqjlbody5","val":"src=&userId=2128517313&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624098490&sqSv=1.0&sign=70ca687e366a8cba5efaa96d6e0d53df&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.3.1%26utdid%3DYM1XRPnjyhIDAD5xOEJAvIUr%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2128517313%26sn%3DEF24EB2FD1FF7AC01E6C124764397BBC7813EBEB%26umidtoken%3DYM1XRPnjyhIDAD5xOEJAvIUr%26msv%3D8.0.0%26brand%3DApple%26imei%3DBB0BF8DAC0B433CF6F6944EF131AE6052929ACD1%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone6%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DC4277A97-61D0-44E9-B85F-728DBA5F936F"},{"key":"shuqicjyurl5","val":"https://ocean.shuqireader.com/api/activity/activity/v1/lottery/info?timestamp=1624098529&userId=2128517313&activityId=311&sqSv=1.0&sign=e256c1e18f42f38a8539a7a52e42ebd8&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.3.1%26utdid%3DYM1XRPnjyhIDAD5xOEJAvIUr%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2128517313%26sn%3DEF24EB2FD1FF7AC01E6C124764397BBC7813EBEB%26umidtoken%3DYM1XRPnjyhIDAD5xOEJAvIUr%26msv%3D8.0.0%26brand%3DApple%26imei%3DBB0BF8DAC0B433CF6F6944EF131AE6052929ACD1%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone6%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DC4277A97-61D0-44E9-B85F-728DBA5F936F"},{"key":"shuqicjcsbody5","val":"_public=skinId%3D999%26idfa%3DC4277A97-61D0-44E9-B85F-728DBA5F936F%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26umidtoken%3DYM1XRPnjyhIDAD5xOEJAvIUr%26user_id%3D2128517313%26sn%3DEF24EB2FD1FF7AC01E6C124764397BBC7813EBEB%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3DBB0BF8DAC0B433CF6F6944EF131AE6052929ACD1%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhone6%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYM1XRPnjyhIDAD5xOEJAvIUr%26utype%3Dpre_vip%26sdk%3D13.3.1&deliveryId=711&key=sq_app_ad&miniWua=HHnB_jXBzl2GNsWlYv5OkBgMiX5HNOdTGIsqoyMInCf9AX7g%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=703&sign=999C1F0B625AC3D78BA5A40EF573AE2E&timestamp=1624098506&userId=2128517313&user_id=2128517313&wua=HIVW_3pgctpKxHzZeH7rPlUnu3IE%2BimgUUZOPuCjC9qwZw5orLMbTinvXt5SdNRLECTgMXpFiW7upT/e%2B8tOWee24EFZavRmYPPCnwtYqqlFVqOBYL80O7klRvckn%2BTdY1sk4MC0XxaDzKrc2datoRj63LRcIv4BaQSCqHqJUAnbyJz0yHFTRVq0DqoeurvbOARZ65US2JpcdYfQq15bRVxfPwTqRbfePNABSXtnpVQadVhQ%3D"},{"key":"shuqicjbody5","val":"wua=HIVW_Jmt8HqcK9K841951JCr9A5nhnWF6N8tBsakQS7253rl6n9sWq%2F50jzdFUo5tEU7m0E%2BGGaQ5W%2FppJx9chJeZQgCXqYfUM%2B2wSSWwgvuffF413vwfjP%2F0ZnWsu%2Fa3G2G0ltt1AeIyo77a8FbEKQ%2FXrUsOzBu3A%2FYHodD5hj4w2EALqNK4S1NjuBTtLtY%2ByIFtk6RosZjsKNJ5UWKKvUSA9vbhNRRlXySLtXi7Bo%2FK1iY%3D&ua=&userId=2128517313&umidtoken=YM1XRPnjyhIDAD5xOEJAvIUr&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&asac=2A20C07RJ9F51AOEFSNHDR&timestamp=1624098512&activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&sqSv=1.0&sign=9460b16b39e9dc76a8051b6138c21742&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.3.1%26utdid%3DYM1XRPnjyhIDAD5xOEJAvIUr%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2128517313%26sn%3DEF24EB2FD1FF7AC01E6C124764397BBC7813EBEB%26umidtoken%3DYM1XRPnjyhIDAD5xOEJAvIUr%26msv%3D8.0.0%26brand%3DApple%26imei%3DBB0BF8DAC0B433CF6F6944EF131AE6052929ACD1%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone6%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DC4277A97-61D0-44E9-B85F-728DBA5F936F"},{"key":"shuqijsspbody5","val":""},{"key":"shuqijsydurl5","val":""},{"key":"shuqijsydbody5","val":""},{"key":"shuqijsqdbody5","val":""},{"key":"shuqijsqdspyurl5","val":""},{"key":"shuqijsqdspbody5","val":""},{"key":"shuqijsrwbody5","val":""},{"key":"shuqijsfxbody5","val":""},{"key":"shuqijsbookurl5","val":""},{"key":"shuqijsbookbody5","val":""},{"key":"shuqijssprwurl5","val":""},{"key":"shuqiuserurl6","val":"https://ocean.shuqireader.com/api/jaccount/accountapi/v1/sapi/account/getBindinfo?userId=2128566993&sqSv=1.0&timestamp=1624098597&sign=f615c25d28efd7432e60e0ee41c5b18e&key=sq_h5_gateway"},{"key":"shuqisyurl6","val":"https://render.shuqireader.com/load/resource?sdk=13.1.3&utdid=YM1XcZSE1JcDALNGfsro4%2Fk%2F&ustatus=0&first_placeid=111111&net_env=wifi&placeid=111111&user_id=2128566993&sn=A0C6472487840323E6B62DB7C1485E9F16E6D0C3&umidtoken=YM1XcZSE1JcDALNGfsro4%2Fk%2F&msv=8.0.0&brand=Apple&imei=F4D593534532FC74F6A431E19A4E25C4D5B82996&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=iOS&ver=210301&mod=iPhone6s&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=AAFB2B93-4482-45EA-B09F-2E27D13CA9C8"},{"key":"shuqisybody6","val":"appVer=4.3.6.0&imei=F4D593534532FC74F6A431E19A4E25C4D5B82996&isNewUser=1&params=%7B%22resources%22%3A%7B%22ShuqiVipEntry%22%3A%7B%7D%2C%22personalCardConfig%22%3A%7B%7D%7D%7D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=1c599610c663cdaff1c419f1a917154a&sn=A0C6472487840323E6B62DB7C1485E9F16E6D0C3&soft_id=21&timestamp=1624098542&user_id=2128566993&ver=210301"},{"key":"shuqispbody6","val":"_public=skinId%3D999%26idfa%3DAAFB2B93-4482-45EA-B09F-2E27D13CA9C8%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26umidtoken%3DYM1XcZSE1JcDALNGfsro4/k/%26user_id%3D2128566993%26sn%3DA0C6472487840323E6B62DB7C1485E9F16E6D0C3%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3DF4D593534532FC74F6A431E19A4E25C4D5B82996%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhone6s%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYM1XcZSE1JcDALNGfsro4/k/%26utype%3Dpre_vip%26sdk%3D13.1.3&deliveryId=525&key=sq_app_ad&miniWua=HHnB_zp/UC4o40%2Be6BIqpbIEuKZ2QVmqC1IIJTyQpgFnSpoo%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=626&sign=0ABFA3073710B015B819D00CD50EF45B&timestamp=1624098561&userId=2128566993&user_id=2128566993&wua=HIVW_NwHOJHrgTfleXhnU1rfIyF1HPjH3rEWXzccgV5qwMe0w7YnQLw81eJTD%2BpOvXFlDCu57sRcPhzjzqDvXuNbBW3pV1ikX6lnmCLiEjT2n8Eo%2BjvQIw92qUfcQlyYy8jCQ4MFqVQyhTT0Tv1NZJbwkeuP297dGTHHgwctGL/KCE9ViogiphOM07p8GYMtqOrmg2F2mIRdkoiFK2Qh6FrFj6T0TmYUfBw53xTKjNwpvn2E%3D"},{"key":"shuqiscbody6","val":""},{"key":"shuqiydbody6","val":""},{"key":"shuqiqdbody6","val":"clientTimestamp=1624098552&position=501&userId=2128566993&signInType=1&wua=HIVW_dvPYT4RVLa%2FlKZhKSZZrh7O1UVdyIuR7%2F1F33Bd5opCdOMyFna2VzQ9GCpwjyLfuvbZpkAXqH40oQLrkH1C9nIleCXzkJftOdyflIAV6s1eZE58kcNcRbHgnqq6RhJm4y7KUyWIyW0uhqnvwy74DiquYHXRojhWdqvV4KzgBM93d0Igew%2FSmtWRweQjLXAVpOUqSlw0AG5o1h9LJFt2rtItHeHKI2zX%2FonXlADMsGXA%3D&ua=&miniWua=HHnB_3eCSWzg6th5BgEFwWhnzpvbH7fTOLicyJu9GRZrQeU0%3D&umidtoken=YM1XcZSE1JcDALNGfsro4%2Fk%2F&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&sign=7bdbf6813da03bc5da83213567e40ca1&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.1.3%26utdid%3DYM1XcZSE1JcDALNGfsro4%252Fk%252F%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2128566993%26sn%3DA0C6472487840323E6B62DB7C1485E9F16E6D0C3%26umidtoken%3DYM1XcZSE1JcDALNGfsro4%252Fk%252F%26msv%3D8.0.0%26brand%3DApple%26imei%3DF4D593534532FC74F6A431E19A4E25C4D5B82996%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone6s%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DAAFB2B93-4482-45EA-B09F-2E27D13CA9C8"},{"key":"shuqirwbody6","val":"serviceWorkerOn=1&stopPullRefresh=1&from=ShuqiTab&upf=20368&sdk=13.1.3&utdid=YM1XcZSE1JcDALNGfsro4%2Fk%2F&ustatus=0&first_placeid=111111&net_env=wifi&placeid=111111&user_id=2128566993&sn=A0C6472487840323E6B62DB7C1485E9F16E6D0C3&umidtoken=YM1XcZSE1JcDALNGfsro4%2Fk%2F&msv=8.0.0&brand=Apple&imei=F4D593534532FC74F6A431E19A4E25C4D5B82996&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&session=&skinColor=23B383&platform=1&ver=210301&mod=iPhone6s&statusBarHeight=44.000000&skinVersion=1&wh=1242x2688&soft_id=21&utype=pre_vip&skinId=999&idfa=AAFB2B93-4482-45EA-B09F-2E27D13CA9C8&params=%7B%22resources%22%3A%7B%22ShuqiBsDailyTask%22%3A%7B%7D%7D%7D&userId=2128566993&placeId=111111&timestamp=1624098567&sqSv=1.0&sign=0e1cd36b1df5e4c0bb911811ae7bf159&key=sq_h5_gateway&_public="},{"key":"shuqifxbody6","val":""},{"key":"shuqisprwurl6","val":"https://ocean.shuqireader.com/api/ad/adserver/v1/api/getAdInfo?appVer=4.3.6.0&placeId=111111&platform=iOS&requestSrc=h5&resourceId=626&timestamp=1624098592&user_id=2128566993&sqSv=1.0&sign=da55b64259f21a906176718eb2b66f2e&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.1.3%26utdid%3DYM1XcZSE1JcDALNGfsro4%252Fk%252F%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2128566993%26sn%3DA0C6472487840323E6B62DB7C1485E9F16E6D0C3%26umidtoken%3DYM1XcZSE1JcDALNGfsro4%252Fk%252F%26msv%3D8.0.0%26brand%3DApple%26imei%3DF4D593534532FC74F6A431E19A4E25C4D5B82996%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone6s%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DAAFB2B93-4482-45EA-B09F-2E27D13CA9C8"},{"key":"shuqijlbody6","val":"requestSrc=h5&userId=2128566993&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624098567&sqSv=1.0&sign=8305f4e08aefd1ae166b84fa230564ae&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.1.3%26utdid%3DYM1XcZSE1JcDALNGfsro4%252Fk%252F%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2128566993%26sn%3DA0C6472487840323E6B62DB7C1485E9F16E6D0C3%26umidtoken%3DYM1XcZSE1JcDALNGfsro4%252Fk%252F%26msv%3D8.0.0%26brand%3DApple%26imei%3DF4D593534532FC74F6A431E19A4E25C4D5B82996%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone6s%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DAAFB2B93-4482-45EA-B09F-2E27D13CA9C8"},{"key":"shuqisqjlbody6","val":"src=&userId=2128566993&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624098558&sqSv=1.0&sign=6008b617f87904af241c2208e10c37da&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.1.3%26utdid%3DYM1XcZSE1JcDALNGfsro4%252Fk%252F%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2128566993%26sn%3DA0C6472487840323E6B62DB7C1485E9F16E6D0C3%26umidtoken%3DYM1XcZSE1JcDALNGfsro4%252Fk%252F%26msv%3D8.0.0%26brand%3DApple%26imei%3DF4D593534532FC74F6A431E19A4E25C4D5B82996%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone6s%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DAAFB2B93-4482-45EA-B09F-2E27D13CA9C8"},{"key":"shuqicjyurl6","val":"https://ocean.shuqireader.com/api/activity/activity/v1/lottery/info?timestamp=1624098597&userId=2128566993&activityId=311&sqSv=1.0&sign=27e167abe45740a0aefb53664dbe3c58&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.1.3%26utdid%3DYM1XcZSE1JcDALNGfsro4%252Fk%252F%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2128566993%26sn%3DA0C6472487840323E6B62DB7C1485E9F16E6D0C3%26umidtoken%3DYM1XcZSE1JcDALNGfsro4%252Fk%252F%26msv%3D8.0.0%26brand%3DApple%26imei%3DF4D593534532FC74F6A431E19A4E25C4D5B82996%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone6s%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DAAFB2B93-4482-45EA-B09F-2E27D13CA9C8"},{"key":"shuqicjcsbody6","val":"_public=skinId%3D999%26idfa%3DAAFB2B93-4482-45EA-B09F-2E27D13CA9C8%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26umidtoken%3DYM1XcZSE1JcDALNGfsro4/k/%26user_id%3D2128566993%26sn%3DA0C6472487840323E6B62DB7C1485E9F16E6D0C3%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3DF4D593534532FC74F6A431E19A4E25C4D5B82996%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhone6s%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYM1XcZSE1JcDALNGfsro4/k/%26utype%3Dpre_vip%26sdk%3D13.1.3&deliveryId=711&key=sq_app_ad&miniWua=HHnB_f5Kk9pPk2oKOaJViD1pydnedx5fNnQQCxJFUbAwovCU%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=703&sign=0AD6CE4482632DEA67AC207E0FD01D51&timestamp=1624098572&userId=2128566993&user_id=2128566993&wua=HIVW_WjSWj1lQh90tKEtJQ%2BqoL23HiUL0znOmeypcHuQ8GXS11AZRR%2BtKI7i5I9p4ODtgs1SU9QbfdxWDP7fYLHaFJW03Lrv3EDvV5UZ%2BLks0FhbMCt4ZENhHqe886Wd7D8/Vl9J3W1QtHGK5RFS0S4cQN0D35PNvtxp6TkijZgDWhz2JAQPNMoS%2BY1K4Ka25rPkXd/pj5BDUTINMRF10A0DH5ZQgAQBmuJguM6sbZ%2By0cmY%3D"},{"key":"shuqicjbody6","val":"wua=HIVW_E8%2FS9c4HiIn5oCtvq2oHecHEhjNAWfpFUx2GdniPHrrEV8fzkP1yfCoHAotBm57XG%2B0P0ZJnjILEY53p2FMxb1%2BHV00q2d9Jwv5uPHTsjQJihwJwTneZGgzy70NPeOzJZ5H9MMuP%2FSD6k0vP1jB1vmiMFTQvH1ZQ5U0RhukgwNKowKXi95RnepjPv3dffwMjAA4jzKszkvckunmDILawCfn5VXHa2kKtWXZdYkdjnYk%3D&ua=&userId=2128566993&umidtoken=YM1XcZSE1JcDALNGfsro4%2Fk%2F&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&asac=2A20C07RJ9F51AOEFSNHDR&timestamp=1624098577&activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&sqSv=1.0&sign=152de7a8eecb89a68c6d7f37e61ef0c7&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.1.3%26utdid%3DYM1XcZSE1JcDALNGfsro4%252Fk%252F%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2128566993%26sn%3DA0C6472487840323E6B62DB7C1485E9F16E6D0C3%26umidtoken%3DYM1XcZSE1JcDALNGfsro4%252Fk%252F%26msv%3D8.0.0%26brand%3DApple%26imei%3DF4D593534532FC74F6A431E19A4E25C4D5B82996%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone6s%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DAAFB2B93-4482-45EA-B09F-2E27D13CA9C8"},{"key":"shuqijsspbody6","val":""},{"key":"shuqijsydurl6","val":""},{"key":"shuqijsydbody6","val":""},{"key":"shuqijsqdbody6","val":""},{"key":"shuqijsqdspyurl6","val":""},{"key":"shuqijsqdspbody6","val":""},{"key":"shuqijsrwbody6","val":""},{"key":"shuqijsfxbody6","val":""},{"key":"shuqijsbookurl6","val":""},{"key":"shuqijsbookbody6","val":""},{"key":"shuqijssprwurl6","val":""},{"key":"shuqiuserurl7","val":"https://ocean.shuqireader.com/api/jaccount/accountapi/v1/sapi/account/getBindinfo?userId=2131984647&sqSv=1.0&timestamp=1624098665&sign=f550ce9c30a866b316d64268037f05f5&key=sq_h5_gateway"},{"key":"shuqisyurl7","val":"https://render.shuqireader.com/load/resource?sdk=13.5&utdid=YM1Xep2M8tcDAL46ZmXxmsYK&ustatus=0&first_placeid=111111&net_env=3g&placeid=111111&user_id=2131984647&sn=9E6114323F5F5C9EB4AC4E9FAD1B6D71993A8FEB&umidtoken=YM1Xep2M8tcDAL46ZmXxmsYK&msv=8.0.0&brand=Apple&imei=B75BAD6AF40C79CA8E9E2C7E97DCF56BB002C9B7&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=iOS&ver=210301&mod=iPad4G&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=087A2D08-45CA-4789-B6C4-6397B330CC68"},{"key":"shuqisybody7","val":"appVer=4.3.6.0&imei=B75BAD6AF40C79CA8E9E2C7E97DCF56BB002C9B7&isNewUser=1&params=%7B%22resources%22%3A%7B%22ShuqiVipEntry%22%3A%7B%7D%2C%22personalCardConfig%22%3A%7B%7D%7D%7D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=64558df11c8084a5100d2ad514709887&sn=9E6114323F5F5C9EB4AC4E9FAD1B6D71993A8FEB&soft_id=21&timestamp=1624098611&user_id=2131984647&ver=210301"},{"key":"shuqispbody7","val":"_public=skinId%3D999%26idfa%3D087A2D08-45CA-4789-B6C4-6397B330CC68%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26umidtoken%3DYM1Xep2M8tcDAL46ZmXxmsYK%26user_id%3D2131984647%26sn%3D9E6114323F5F5C9EB4AC4E9FAD1B6D71993A8FEB%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3DB75BAD6AF40C79CA8E9E2C7E97DCF56BB002C9B7%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPad4G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYM1Xep2M8tcDAL46ZmXxmsYK%26utype%3Dpre_vip%26sdk%3D13.5&deliveryId=525&key=sq_app_ad&miniWua=HHnB_DMQNUNDHDb%2Bx50YFBcj880oFO6ttlHN6KmKaBusREyU%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=626&sign=A69E5242574B38CE8B227A4D2888F571&timestamp=1624098631&userId=2131984647&user_id=2131984647&wua=HIVW_BTw5SJYnfbssUi/pFvYKXDS1cR1A9YwYNnoJWf%2BHe01gkdk/y1wN2Xll8AXjKde4wqEhoNQ0GDQXcpHpnJDrDhijQhKSLQ4T0Da45oDXXbF/8iMwlmDEXdV8jynZGtzYruYexbovHpq0pBText3S2BY7o4Rq27fkw35rUtamBAIkdsjabiwH15NV9MHg0RbY5sMFk765hIzDJ7/vlDp1NxDqE8bBBLYY4QGrVhlrzQ8%3D"},{"key":"shuqiscbody7","val":""},{"key":"shuqiydbody7","val":""},{"key":"shuqiqdbody7","val":"clientTimestamp=1624098622&position=501&userId=2131984647&signInType=1&wua=HIVW_SseBvMalJoZBTQLzzicj%2BM9mm3%2BqcMkKH1BgPP1l4yDFYa%2FEuYqwgSOc%2BKYNfMPP4JdqWq9F9mgTa9vhOXn7nxhsilpuvls34waAOw1TVTjSGoNfhFGd8B4IragSixLMERe69aZ%2BZ%2FIN3Vc86th9lte4VvzmEplYfXBO0qLAtFGadVBHTMqNYxMJzWME9hT1nHgxM8fpDl8YrfK7OgMkwWqGeDCdzWPEzrj2PJx47vo%3D&ua=&miniWua=HHnB_TbF8uT5Vc%2Bo9YZO1giGtsQAel%2FEcZLXPtFEoP2JlVrY%3D&umidtoken=YM1Xep2M8tcDAL46ZmXxmsYK&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&sign=fd547512e45438af70f0299750d9eef3&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.5%26utdid%3DYM1Xep2M8tcDAL46ZmXxmsYK%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2131984647%26sn%3D9E6114323F5F5C9EB4AC4E9FAD1B6D71993A8FEB%26umidtoken%3DYM1Xep2M8tcDAL46ZmXxmsYK%26msv%3D8.0.0%26brand%3DApple%26imei%3DB75BAD6AF40C79CA8E9E2C7E97DCF56BB002C9B7%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad4G%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D087A2D08-45CA-4789-B6C4-6397B330CC68"},{"key":"shuqirwbody7","val":"serviceWorkerOn=1&stopPullRefresh=1&from=ShuqiTab&upf=20368&sdk=13.5&utdid=YM1Xep2M8tcDAL46ZmXxmsYK&ustatus=0&first_placeid=111111&net_env=3g&placeid=111111&user_id=2131984647&sn=9E6114323F5F5C9EB4AC4E9FAD1B6D71993A8FEB&umidtoken=YM1Xep2M8tcDAL46ZmXxmsYK&msv=8.0.0&brand=Apple&imei=B75BAD6AF40C79CA8E9E2C7E97DCF56BB002C9B7&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=1&ver=210301&mod=iPad4G&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=087A2D08-45CA-4789-B6C4-6397B330CC68&params=%7B%22resources%22%3A%7B%22ShuqiBsDailyTask%22%3A%7B%7D%7D%7D&userId=2131984647&placeId=111111&timestamp=1624098637&sqSv=1.0&sign=a9b370a701c74971b4f48a143fc057b0&key=sq_h5_gateway&_public="},{"key":"shuqifxbody7","val":""},{"key":"shuqisprwurl7","val":"https://ocean.shuqireader.com/api/ad/adserver/v1/api/getAdInfo?appVer=4.3.6.0&placeId=111111&platform=iOS&requestSrc=h5&resourceId=626&timestamp=1624098665&user_id=2131984647&sqSv=1.0&sign=cab6dd8eecf0f660ac36c9bdfcdf4a2a&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.5%26utdid%3DYM1Xep2M8tcDAL46ZmXxmsYK%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2131984647%26sn%3D9E6114323F5F5C9EB4AC4E9FAD1B6D71993A8FEB%26umidtoken%3DYM1Xep2M8tcDAL46ZmXxmsYK%26msv%3D8.0.0%26brand%3DApple%26imei%3DB75BAD6AF40C79CA8E9E2C7E97DCF56BB002C9B7%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad4G%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D087A2D08-45CA-4789-B6C4-6397B330CC68"},{"key":"shuqijlbody7","val":"requestSrc=h5&userId=2131984647&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624098637&sqSv=1.0&sign=4dddefd8d8705c627718322d35380e45&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.5%26utdid%3DYM1Xep2M8tcDAL46ZmXxmsYK%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2131984647%26sn%3D9E6114323F5F5C9EB4AC4E9FAD1B6D71993A8FEB%26umidtoken%3DYM1Xep2M8tcDAL46ZmXxmsYK%26msv%3D8.0.0%26brand%3DApple%26imei%3DB75BAD6AF40C79CA8E9E2C7E97DCF56BB002C9B7%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad4G%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D087A2D08-45CA-4789-B6C4-6397B330CC68"},{"key":"shuqisqjlbody7","val":"src=&userId=2131984647&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624098628&sqSv=1.0&sign=0b85e670d0dc5e90e528ffd910cfe2cf&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.5%26utdid%3DYM1Xep2M8tcDAL46ZmXxmsYK%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2131984647%26sn%3D9E6114323F5F5C9EB4AC4E9FAD1B6D71993A8FEB%26umidtoken%3DYM1Xep2M8tcDAL46ZmXxmsYK%26msv%3D8.0.0%26brand%3DApple%26imei%3DB75BAD6AF40C79CA8E9E2C7E97DCF56BB002C9B7%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad4G%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D087A2D08-45CA-4789-B6C4-6397B330CC68"},{"key":"shuqicjyurl7","val":"https://ocean.shuqireader.com/api/activity/activity/v1/lottery/info?timestamp=1624098667&userId=2131984647&activityId=311&sqSv=1.0&sign=20811328d09e66e80c8e9c56f4a9ed15&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.5%26utdid%3DYM1Xep2M8tcDAL46ZmXxmsYK%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2131984647%26sn%3D9E6114323F5F5C9EB4AC4E9FAD1B6D71993A8FEB%26umidtoken%3DYM1Xep2M8tcDAL46ZmXxmsYK%26msv%3D8.0.0%26brand%3DApple%26imei%3DB75BAD6AF40C79CA8E9E2C7E97DCF56BB002C9B7%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad4G%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D087A2D08-45CA-4789-B6C4-6397B330CC68"},{"key":"shuqicjcsbody7","val":"_public=skinId%3D999%26idfa%3D087A2D08-45CA-4789-B6C4-6397B330CC68%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26umidtoken%3DYM1Xep2M8tcDAL46ZmXxmsYK%26user_id%3D2131984647%26sn%3D9E6114323F5F5C9EB4AC4E9FAD1B6D71993A8FEB%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3DB75BAD6AF40C79CA8E9E2C7E97DCF56BB002C9B7%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPad4G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYM1Xep2M8tcDAL46ZmXxmsYK%26utype%3Dpre_vip%26sdk%3D13.5&deliveryId=711&key=sq_app_ad&miniWua=HHnB_flk%2Bvc1QJnDVX/W1hSagyaC1Plrg8NwRUBjLXGNzgjY%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=703&sign=C5A3A27FA61E3519E65831A9AA9B1971&timestamp=1624098648&userId=2131984647&user_id=2131984647&wua=HIVW_VTYUz5KE0XnoCY%2BP79/uS/jd558eEcbe5c%2B4v8jzEtrN4l0bWvxVtdIGK0G2Nl%2Bd0wEN8wMsvy4Mifq4KBupZ2q9Yxy29ig2JIgd%2BMSKH98hee/83sxzpF3ZnDssi6HzicivjgJdFKYLI4m9ZtmEYzp9vEYA/%2BIYUT79GYaWpXJyslaVr55q%2BHPS%2Beuq/8I4LyRymmI1zI5WqkW264PXYyBif%2BLE3lv9T3HOnn%2BOS2c%3D"},{"key":"shuqicjbody7","val":"wua=HIVW_IcGU9qjp%2FIzfCyoX1t5Fx02JUJps2DqQIK7X3kJT37uEyLtQRjDfaHpptJnaTO1cyIU6E5qUXVDc6LgMhuCaEPPLFrgBf0jlpHmxbmqWyTbrStkZ%2Fyvv1VQaDEHyzTob9zoOeuti8rQNEuj0xxnQG%2BlRihmxqX0rI%2Fx55EIrjToFRgc4Ydbf%2FcUSlSv%2FFUB5rJA4MF%2FT7OtrpjYDifoMUIcqCUr5uOx78ZT7unqw0KI%3D&ua=&userId=2131984647&umidtoken=YM1Xep2M8tcDAL46ZmXxmsYK&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&asac=2A20C07RJ9F51AOEFSNHDR&timestamp=1624098655&activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&sqSv=1.0&sign=0815ad076c123aa3ce83e834ffb6651c&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.5%26utdid%3DYM1Xep2M8tcDAL46ZmXxmsYK%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2131984647%26sn%3D9E6114323F5F5C9EB4AC4E9FAD1B6D71993A8FEB%26umidtoken%3DYM1Xep2M8tcDAL46ZmXxmsYK%26msv%3D8.0.0%26brand%3DApple%26imei%3DB75BAD6AF40C79CA8E9E2C7E97DCF56BB002C9B7%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad4G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D087A2D08-45CA-4789-B6C4-6397B330CC68"},{"key":"shuqijsspbody7","val":""},{"key":"shuqijsydurl7","val":""},{"key":"shuqijsydbody7","val":""},{"key":"shuqijsqdbody7","val":""},{"key":"shuqijsqdspyurl7","val":""},{"key":"shuqijsqdspbody7","val":""},{"key":"shuqijsrwbody7","val":""},{"key":"shuqijsfxbody7","val":""},{"key":"shuqijsbookurl7","val":""},{"key":"shuqijsbookbody7","val":""},{"key":"shuqijssprwurl7","val":""},{"key":"shuqiuserurl8","val":"https://ocean.shuqireader.com/api/jaccount/accountapi/v1/sapi/account/getBindinfo?userId=2131438427&sqSv=1.0&timestamp=1624098846&sign=bda7bdbc247a086a20c182bc7bb2f5da&key=sq_h5_gateway"},{"key":"shuqisyurl8","val":"https://render.shuqireader.com/load/resource?sdk=13.4.1&utdid=YM3H2LrubDEDAL3jDqSiv70y&ustatus=0&first_placeid=111111&net_env=4g&placeid=111111&user_id=2131438427&sn=5CDEB18C388F969995D2EF42A75797363CD35EB5&umidtoken=YM3H2LrubDEDAL3jDqSiv70y&msv=8.0.0&brand=Apple&imei=527482B995145DD9A18647502ACB9809FBA84126&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=iOS&ver=210301&mod=iPhone8P&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=7FA70192-2E90-46AA-8E4C-124D4E1A8D37"},{"key":"shuqisybody8","val":"appVer=4.3.6.0&imei=527482B995145DD9A18647502ACB9809FBA84126&isNewUser=1&params=%7B%22resources%22%3A%7B%22ShuqiVipEntry%22%3A%7B%7D%2C%22personalCardConfig%22%3A%7B%7D%7D%7D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=529a35c32df00a91079fd90ec5146894&sn=5CDEB18C388F969995D2EF42A75797363CD35EB5&soft_id=21&timestamp=1624098790&user_id=2131438427&ver=210301"},{"key":"shuqispbody8","val":"_public=skinId%3D999%26idfa%3D7FA70192-2E90-46AA-8E4C-124D4E1A8D37%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26umidtoken%3DYM3H2LrubDEDAL3jDqSiv70y%26user_id%3D2131438427%26sn%3D5CDEB18C388F969995D2EF42A75797363CD35EB5%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D527482B995145DD9A18647502ACB9809FBA84126%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhone8P%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYM3H2LrubDEDAL3jDqSiv70y%26utype%3Dpre_vip%26sdk%3D13.4.1&deliveryId=525&key=sq_app_ad&miniWua=HHnB_jrZbfibVJPmRX3OI38Ftibpd001osCx%2Bwu5UtCW673c%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=626&sign=62FA273E0B8DB72569081B7562082F35&timestamp=1624098813&userId=2131438427&user_id=2131438427&wua=HIVW_LpzyarA/7uvHq/bDhX3xgXwACQnBudQDbfkhNrKJcDYiumfM3lXApVwmGiv7PuZC7MQ%2BsCYX0dcLIRYLfXbA%2BFcr0BmWeVbWlS9og5UkdoL7a56aIyMSKJB8kSCZKjmulbkYm8ffBRJlQVmmlPMxNUykdl0SXBFSlN2z83eYjunuYNir6vh%2B8s67A8IfrqT2sVpoe86XsmHltLijzDZuF0TlKtZNrN45G83q6CfweFU%3D"},{"key":"shuqiscbody8","val":""},{"key":"shuqiydbody8","val":""},{"key":"shuqiqdbody8","val":"clientTimestamp=1624098806&position=501&userId=2131438427&signInType=1&wua=HIVW_%2FYLiay7MOYeTlGavsE1y1Jfe6CmTEiC9bwToMc%2BslsUJo%2Bt1ROVTTR%2F2M13gXPamCL8pSCi4PwbmoFfhB%2ByTBL3W4%2BHKhM1V2MrBJMPIKaUx2%2BM9Gb2CufuLMB8DC0pWiocnu9JfCDBufJKJ1Y5DrTwL%2BbDULL10MG5pa72rrqGIsPCcNc7yAib%2F%2FsdV4N%2FuPgMb%2F%2BxROXzm0Az%2FhAoYw7R%2Bico%2Fha9Wld8A5Fi02RA%3D&ua=&miniWua=HHnB_WEDOzUJilNklb0LSkBE6lv%2FC5TGgnbTft%2B9rk661MKI%3D&umidtoken=YM3H2LrubDEDAL3jDqSiv70y&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&sign=e4a81185c4cd1d888eaf49fbcc437e99&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.4.1%26utdid%3DYM3H2LrubDEDAL3jDqSiv70y%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2131438427%26sn%3D5CDEB18C388F969995D2EF42A75797363CD35EB5%26umidtoken%3DYM3H2LrubDEDAL3jDqSiv70y%26msv%3D8.0.0%26brand%3DApple%26imei%3D527482B995145DD9A18647502ACB9809FBA84126%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone8P%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D7FA70192-2E90-46AA-8E4C-124D4E1A8D37"},{"key":"shuqirwbody8","val":"serviceWorkerOn=1&stopPullRefresh=1&from=ShuqiTab&upf=20368&sdk=13.4.1&utdid=YM3H2LrubDEDAL3jDqSiv70y&ustatus=0&first_placeid=111111&net_env=4g&placeid=111111&user_id=2131438427&sn=5CDEB18C388F969995D2EF42A75797363CD35EB5&umidtoken=YM3H2LrubDEDAL3jDqSiv70y&msv=8.0.0&brand=Apple&imei=527482B995145DD9A18647502ACB9809FBA84126&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&session=&skinColor=23B383&platform=1&ver=210301&mod=iPhone8P&statusBarHeight=44.000000&skinVersion=1&wh=1242x2688&soft_id=21&utype=pre_vip&skinId=999&idfa=7FA70192-2E90-46AA-8E4C-124D4E1A8D37&params=%7B%22resources%22%3A%7B%22ShuqiBsDailyTask%22%3A%7B%7D%7D%7D&userId=2131438427&placeId=111111&timestamp=1624098820&sqSv=1.0&sign=390ce55a6aa1163ae7d6ea09091f9bf5&key=sq_h5_gateway&_public="},{"key":"shuqifxbody8","val":""},{"key":"shuqisprwurl8","val":"https://ocean.shuqireader.com/api/ad/adserver/v1/api/getAdInfo?appVer=4.3.6.0&placeId=111111&platform=iOS&requestSrc=h5&resourceId=626&timestamp=1624098846&user_id=2131438427&sqSv=1.0&sign=cb3e992f8087418a1999eaf4e720e419&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.4.1%26utdid%3DYM3H2LrubDEDAL3jDqSiv70y%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2131438427%26sn%3D5CDEB18C388F969995D2EF42A75797363CD35EB5%26umidtoken%3DYM3H2LrubDEDAL3jDqSiv70y%26msv%3D8.0.0%26brand%3DApple%26imei%3D527482B995145DD9A18647502ACB9809FBA84126%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone8P%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D7FA70192-2E90-46AA-8E4C-124D4E1A8D37"},{"key":"shuqijlbody8","val":"requestSrc=h5&userId=2131438427&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624098820&sqSv=1.0&sign=47df6e0d5228b90cb41dab1208e83d9f&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.4.1%26utdid%3DYM3H2LrubDEDAL3jDqSiv70y%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2131438427%26sn%3D5CDEB18C388F969995D2EF42A75797363CD35EB5%26umidtoken%3DYM3H2LrubDEDAL3jDqSiv70y%26msv%3D8.0.0%26brand%3DApple%26imei%3D527482B995145DD9A18647502ACB9809FBA84126%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone8P%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D7FA70192-2E90-46AA-8E4C-124D4E1A8D37"},{"key":"shuqisqjlbody8","val":"src=&userId=2131438427&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624098810&sqSv=1.0&sign=86a1634cbb6a72709e255f28e72fb984&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.4.1%26utdid%3DYM3H2LrubDEDAL3jDqSiv70y%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2131438427%26sn%3D5CDEB18C388F969995D2EF42A75797363CD35EB5%26umidtoken%3DYM3H2LrubDEDAL3jDqSiv70y%26msv%3D8.0.0%26brand%3DApple%26imei%3D527482B995145DD9A18647502ACB9809FBA84126%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone8P%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D7FA70192-2E90-46AA-8E4C-124D4E1A8D37"},{"key":"shuqicjyurl8","val":"https://ocean.shuqireader.com/api/activity/activity/v1/lottery/info?timestamp=1624098848&userId=2131438427&activityId=311&sqSv=1.0&sign=98287c924a6d095e58dce9fe7639d4f6&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.4.1%26utdid%3DYM3H2LrubDEDAL3jDqSiv70y%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2131438427%26sn%3D5CDEB18C388F969995D2EF42A75797363CD35EB5%26umidtoken%3DYM3H2LrubDEDAL3jDqSiv70y%26msv%3D8.0.0%26brand%3DApple%26imei%3D527482B995145DD9A18647502ACB9809FBA84126%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone8P%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D7FA70192-2E90-46AA-8E4C-124D4E1A8D37"},{"key":"shuqicjcsbody8","val":"_public=skinId%3D999%26idfa%3D7FA70192-2E90-46AA-8E4C-124D4E1A8D37%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26umidtoken%3DYM3H2LrubDEDAL3jDqSiv70y%26user_id%3D2131438427%26sn%3D5CDEB18C388F969995D2EF42A75797363CD35EB5%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D527482B995145DD9A18647502ACB9809FBA84126%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhone8P%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYM3H2LrubDEDAL3jDqSiv70y%26utype%3Dpre_vip%26sdk%3D13.4.1&deliveryId=711&key=sq_app_ad&miniWua=HHnB_VIvJ0JmX4gM4948tl0MjpEnFQqjqeCLx/8GDrf3XfkQ%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=703&sign=37ACF510DDB5FB6571C3F713CEFC96C8&timestamp=1624098825&userId=2131438427&user_id=2131438427&wua=HIVW_jPDMTO8VW62baVqqK8UaQHYYfnnJ2W5ZMD%2BXmxWNF18p9A35o5fp4V/hZWrgkdFkpBkeBFnWUaL5/ynFygEUjuf/oYihxXbGjRTuTdf%2BLRQpFrcwCgeQn8xqYzvRJRid8RBM%2B09EQJKrQwbivHx5Z0lHZiZIGh9iY5gU0dqJt%2BPL/KOueKsvI0YLIK4coVVEsx/MILJycB4uYbHotqzn2zkpv5uEn0SEpOorEyVQ6Ic%3D"},{"key":"shuqicjbody8","val":"wua=HIVW_5MpOVGXBQuN9k1dYRyp2oKOXCuV1F6iwmBUcKYJUVur8dZO%2BknP3wIV4c65rJe3a8z4DoaqFDMsYOvvmuoSdqf9sXkMtvYIJs4EQq7zXG9Mm6HOWEZk7c%2F8RD9tULLfsziTXBySrwH%2FSfqjCeYYiVQ9Az1pSyjxWCD1q4N2DEyZiiIIoK1G0as4GuMsSbf21RmjoEFaDh41QOLlF0UunfqRL925nvkqPfYAQyj9ae1U%3D&ua=&userId=2131438427&umidtoken=YM3H2LrubDEDAL3jDqSiv70y&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&asac=2A20C07RJ9F51AOEFSNHDR&timestamp=1624098831&activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&sqSv=1.0&sign=feee1a1b94e0c0c7f19a909abe221ef4&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.4.1%26utdid%3DYM3H2LrubDEDAL3jDqSiv70y%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2131438427%26sn%3D5CDEB18C388F969995D2EF42A75797363CD35EB5%26umidtoken%3DYM3H2LrubDEDAL3jDqSiv70y%26msv%3D8.0.0%26brand%3DApple%26imei%3D527482B995145DD9A18647502ACB9809FBA84126%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone8P%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D7FA70192-2E90-46AA-8E4C-124D4E1A8D37"},{"key":"shuqijsspbody8","val":""},{"key":"shuqijsydurl8","val":""},{"key":"shuqijsydbody8","val":""},{"key":"shuqijsqdbody8","val":""},{"key":"shuqijsqdspyurl8","val":""},{"key":"shuqijsqdspbody8","val":""},{"key":"shuqijsrwbody8","val":""},{"key":"shuqijsfxbody8","val":""},{"key":"shuqijsbookurl8","val":""},{"key":"shuqijsbookbody8","val":""},{"key":"shuqijssprwurl8","val":""},{"key":"shuqiuserurl9","val":"https://ocean.shuqireader.com/api/jaccount/accountapi/v1/sapi/account/getBindinfo?userId=2130807351&sqSv=1.0&timestamp=1624098911&sign=b860e068dabf981debf32e0aa475a66b&key=sq_h5_gateway"},{"key":"shuqisyurl9","val":"https://render.shuqireader.com/load/resource?sdk=13.3&utdid=YM1XsGE7NzkDAARqfhZhDoV0&ustatus=0&first_placeid=111111&net_env=wifi&placeid=111111&user_id=2130807351&sn=E23C8CFA7D33D2664ABE2083DC0CCBBB952D35C4&umidtoken=YM1XsGE7NzkDAARqfhZhDoV0&msv=8.0.0&brand=Apple&imei=A2EA82D63C324F58FCEBED9D09EAE789FA35FE19&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=iOS&ver=210301&mod=UnknowniPad&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=5BA71C80-E552-4FD1-B7CB-2E8E6F805E37"},{"key":"shuqisybody9","val":"appVer=4.3.6.0&imei=A2EA82D63C324F58FCEBED9D09EAE789FA35FE19&isNewUser=1&params=%7B%22resources%22%3A%7B%22ShuqiVipEntry%22%3A%7B%7D%2C%22personalCardConfig%22%3A%7B%7D%7D%7D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=5380eeebf76a0c45c34981f7fd193c4e&sn=E23C8CFA7D33D2664ABE2083DC0CCBBB952D35C4&soft_id=21&timestamp=1624098867&user_id=2130807351&ver=210301"},{"key":"shuqispbody9","val":"_public=skinId%3D999%26idfa%3D5BA71C80-E552-4FD1-B7CB-2E8E6F805E37%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26umidtoken%3DYM1XsGE7NzkDAARqfhZhDoV0%26user_id%3D2130807351%26sn%3DE23C8CFA7D33D2664ABE2083DC0CCBBB952D35C4%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3DA2EA82D63C324F58FCEBED9D09EAE789FA35FE19%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYM1XsGE7NzkDAARqfhZhDoV0%26utype%3Dpre_vip%26sdk%3D13.3&deliveryId=525&key=sq_app_ad&miniWua=HHnB_X1gGJDyutcafwHIOSz9wOpnI5XyUZZJAXFPHuQHSZz4%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=626&sign=05738E82577A3D867E37E403A195491F&timestamp=1624098891&userId=2130807351&user_id=2130807351&wua=HIVW_dSvD3q5lOi0R2gLczjRUYBXWvJIKyIcc9nfqVB/0mVX36ZK6abQkR17%2BSr9L7/QYTeKdY9qXmPfj2ca8wHOj6MiqzgtjSbDGlc0De8kyBMyikKu7cslAMKGKtdmcgB7rW13PRKMAzIShvQCsmwkvtvFtSHYT/PD/tTGIY%2BJwG6RGO2pSCjJhusTVPAnKviAZa8xyZiUarq7HA0RRne2sZXkeps2fyd9fzBKUHuLbmzg%3D"},{"key":"shuqiscbody9","val":""},{"key":"shuqiydbody9","val":""},{"key":"shuqiqdbody9","val":"clientTimestamp=1624098883&position=501&userId=2130807351&signInType=1&wua=HIVW_wsWRURlL7zTrHMh9BHuyHqHtSHCe09eKrAsNZmBAf1YLN6zW4XPHLmw%2F5gZqpJNlZ1iHyTPa2cgmUSj6HP8i5ZdpCYTCwke%2BILTYNQK2OhqJAZtWz04ExAIXO7hp23n%2F3yRXtr1WlZ4ntc1r%2B2Hq49PcP6v0%2B9Ug4ODiallanesWcr2wfjv5kIf%2FQK2netTHv%2FBjE9X%2F5s70OweetK1lwE5aHJ7zI%2Fa05VCdUPTB1gc%3D&ua=&miniWua=HHnB_ziW6pFWU9AscMxkiJbRpSY8aZ51eZzqsWtrTQ%2BAtAWc%3D&umidtoken=YM1XsGE7NzkDAARqfhZhDoV0&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&sign=c2915ac503699262376ae72b804a9c49&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.3%26utdid%3DYM1XsGE7NzkDAARqfhZhDoV0%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2130807351%26sn%3DE23C8CFA7D33D2664ABE2083DC0CCBBB952D35C4%26umidtoken%3DYM1XsGE7NzkDAARqfhZhDoV0%26msv%3D8.0.0%26brand%3DApple%26imei%3DA2EA82D63C324F58FCEBED9D09EAE789FA35FE19%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D5BA71C80-E552-4FD1-B7CB-2E8E6F805E37"},{"key":"shuqirwbody9","val":"serviceWorkerOn=1&stopPullRefresh=1&from=ShuqiTab&upf=20368&sdk=13.3&utdid=YM1XsGE7NzkDAARqfhZhDoV0&ustatus=0&first_placeid=111111&net_env=wifi&placeid=111111&user_id=2130807351&sn=E23C8CFA7D33D2664ABE2083DC0CCBBB952D35C4&umidtoken=YM1XsGE7NzkDAARqfhZhDoV0&msv=8.0.0&brand=Apple&imei=A2EA82D63C324F58FCEBED9D09EAE789FA35FE19&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&session=&skinColor=23B383&platform=1&ver=210301&mod=UnknowniPad&statusBarHeight=44.000000&skinVersion=1&wh=1242x2688&soft_id=21&utype=pre_vip&skinId=999&idfa=5BA71C80-E552-4FD1-B7CB-2E8E6F805E37&params=%7B%22resources%22%3A%7B%22ShuqiBsDailyTask%22%3A%7B%7D%7D%7D&userId=2130807351&placeId=111111&timestamp=1624098894&sqSv=1.0&sign=61e32c7962e3e9d5410600ed930bffa3&key=sq_h5_gateway&_public="},{"key":"shuqifxbody9","val":""},{"key":"shuqisprwurl9","val":"https://ocean.shuqireader.com/api/ad/adserver/v1/api/getAdInfo?appVer=4.3.6.0&placeId=111111&platform=iOS&requestSrc=h5&resourceId=626&timestamp=1624098912&user_id=2130807351&sqSv=1.0&sign=4121e4091b10cc3c00e340623b56f0de&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.3%26utdid%3DYM1XsGE7NzkDAARqfhZhDoV0%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2130807351%26sn%3DE23C8CFA7D33D2664ABE2083DC0CCBBB952D35C4%26umidtoken%3DYM1XsGE7NzkDAARqfhZhDoV0%26msv%3D8.0.0%26brand%3DApple%26imei%3DA2EA82D63C324F58FCEBED9D09EAE789FA35FE19%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D5BA71C80-E552-4FD1-B7CB-2E8E6F805E37"},{"key":"shuqijlbody9","val":"requestSrc=h5&userId=2130807351&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624098894&sqSv=1.0&sign=4c4ee975d76ff29615fe72d782247798&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.3%26utdid%3DYM1XsGE7NzkDAARqfhZhDoV0%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2130807351%26sn%3DE23C8CFA7D33D2664ABE2083DC0CCBBB952D35C4%26umidtoken%3DYM1XsGE7NzkDAARqfhZhDoV0%26msv%3D8.0.0%26brand%3DApple%26imei%3DA2EA82D63C324F58FCEBED9D09EAE789FA35FE19%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D5BA71C80-E552-4FD1-B7CB-2E8E6F805E37"},{"key":"shuqisqjlbody9","val":"src=&userId=2130807351&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624098888&sqSv=1.0&sign=ad0fdf3cb20df2ba9e7648c834829c0f&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.3%26utdid%3DYM1XsGE7NzkDAARqfhZhDoV0%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2130807351%26sn%3DE23C8CFA7D33D2664ABE2083DC0CCBBB952D35C4%26umidtoken%3DYM1XsGE7NzkDAARqfhZhDoV0%26msv%3D8.0.0%26brand%3DApple%26imei%3DA2EA82D63C324F58FCEBED9D09EAE789FA35FE19%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D5BA71C80-E552-4FD1-B7CB-2E8E6F805E37"},{"key":"shuqicjyurl9","val":"https://ocean.shuqireader.com/api/activity/activity/v1/lottery/info?timestamp=1624098913&userId=2130807351&activityId=311&sqSv=1.0&sign=bd36939e1855b361f360f87913e02875&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.3%26utdid%3DYM1XsGE7NzkDAARqfhZhDoV0%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2130807351%26sn%3DE23C8CFA7D33D2664ABE2083DC0CCBBB952D35C4%26umidtoken%3DYM1XsGE7NzkDAARqfhZhDoV0%26msv%3D8.0.0%26brand%3DApple%26imei%3DA2EA82D63C324F58FCEBED9D09EAE789FA35FE19%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D5BA71C80-E552-4FD1-B7CB-2E8E6F805E37"},{"key":"shuqicjcsbody9","val":"_public=skinId%3D999%26idfa%3D5BA71C80-E552-4FD1-B7CB-2E8E6F805E37%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26umidtoken%3DYM1XsGE7NzkDAARqfhZhDoV0%26user_id%3D2130807351%26sn%3DE23C8CFA7D33D2664ABE2083DC0CCBBB952D35C4%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3DA2EA82D63C324F58FCEBED9D09EAE789FA35FE19%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYM1XsGE7NzkDAARqfhZhDoV0%26utype%3Dpre_vip%26sdk%3D13.3&deliveryId=711&key=sq_app_ad&miniWua=HHnB_eR2uZsKOuT9gsq31uTVa/ku6bmJAjeCflsGYahIVW/8%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=703&sign=947B0C9B2758D752CC034F21AD65AA87&timestamp=1624098899&userId=2130807351&user_id=2130807351&wua=HIVW_oYFeTJMEnccLZs6xHYgL0RazrOSVUhYGULZeaudtWxpeZKiCqbsJ5tXRoX6poW5w6vRdL/aM8vs9rMFlwS%2BvSzTelDO1yPK23xhoRyv2PzwZ6MAaEp1at%2BoUuyqa%2B/PsX00ZT7pU57Nb%2BAw3SihxQVkRTeej71kxA4fOAj5vVtQ9sRHhGfyU9KDqWR7iIrGzfukdpTOsQ3Z1LpBdrCEVcGWzgZUKYY2TG9qj1VVeZmY%3D"},{"key":"shuqicjbody9","val":"wua=HIVW_zwJRixa2R5OlOK6jlBqZmWDPLhV5e%2F51dBuuQOYR8vmF2BZTmeZd%2B2rcIhlGQj2LOHKLbd8BTg%2Bwn4hAJSxuAtmP27SeXejtsEg%2Be8cTOroUuxlhZFMrzfOCnew1UsGgl7LQI3ywHHnjc4g5Tt88ZRPmYTQnOYm6Vvx0KNjtL48114%2FWVHwOBKWFbNtkB%2FaWrYQFUcPo7WOfRvN80iU43mQ7FfCul0USaHhE3NhoLKg%3D&ua=&userId=2130807351&umidtoken=YM1XsGE7NzkDAARqfhZhDoV0&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&asac=2A20C07RJ9F51AOEFSNHDR&timestamp=1624098901&activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&sqSv=1.0&sign=072d653b1ebc6c0ab438f393aa6d391a&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.3%26utdid%3DYM1XsGE7NzkDAARqfhZhDoV0%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2130807351%26sn%3DE23C8CFA7D33D2664ABE2083DC0CCBBB952D35C4%26umidtoken%3DYM1XsGE7NzkDAARqfhZhDoV0%26msv%3D8.0.0%26brand%3DApple%26imei%3DA2EA82D63C324F58FCEBED9D09EAE789FA35FE19%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D5BA71C80-E552-4FD1-B7CB-2E8E6F805E37"},{"key":"shuqijsspbody9","val":""},{"key":"shuqijsydurl9","val":""},{"key":"shuqijsydbody9","val":""},{"key":"shuqijsqdbody9","val":""},{"key":"shuqijsqdspyurl9","val":""},{"key":"shuqijsqdspbody9","val":""},{"key":"shuqijsrwbody9","val":""},{"key":"shuqijsfxbody9","val":""},{"key":"shuqijsbookurl9","val":""},{"key":"shuqijsbookbody9","val":""},{"key":"shuqijssprwurl9","val":""},{"key":"shuqiuserurl10","val":"https://ocean.shuqireader.com/api/jaccount/accountapi/v1/sapi/account/getBindinfo?userId=2131837194&sqSv=1.0&timestamp=1624098989&sign=76394ffc4d29b9df5eae0731a36f8db9&key=sq_h5_gateway"},{"key":"shuqisyurl10","val":"https://render.shuqireader.com/load/resource?sdk=13.0&utdid=YM1XudsjzwIDAEF13XihaMQa&ustatus=0&first_placeid=111111&net_env=4g&placeid=111111&user_id=2131837194&sn=194501F250FBAF221218810D7FA9ECD490597044&umidtoken=YM1XudsjzwIDAEF13XihaMQa&msv=8.0.0&brand=Apple&imei=866DE243A5DBC31EC553B59D78F8EAC4780A897A&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=iOS&ver=210301&mod=iPad4G&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=B8BD9EFE-56B2-472A-BC47-670522A7A5A9"},{"key":"shuqisybody10","val":"appVer=4.3.6.0&imei=866DE243A5DBC31EC553B59D78F8EAC4780A897A&isNewUser=1&params=%7B%22resources%22%3A%7B%22ShuqiVipEntry%22%3A%7B%7D%2C%22personalCardConfig%22%3A%7B%7D%7D%7D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=e766d90c65181a43e0bd56d783885e69&sn=194501F250FBAF221218810D7FA9ECD490597044&soft_id=21&timestamp=1624098929&user_id=2131837194&ver=210301"},{"key":"shuqispbody10","val":"_public=skinId%3D999%26idfa%3DB8BD9EFE-56B2-472A-BC47-670522A7A5A9%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26umidtoken%3DYM1XudsjzwIDAEF13XihaMQa%26user_id%3D2131837194%26sn%3D194501F250FBAF221218810D7FA9ECD490597044%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D866DE243A5DBC31EC553B59D78F8EAC4780A897A%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPad4G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYM1XudsjzwIDAEF13XihaMQa%26utype%3Dpre_vip%26sdk%3D13.0&deliveryId=525&key=sq_app_ad&miniWua=HHnB_KA1cu4imXFezcAhOzFY0V6JmgByfwhYVqlaDLlhKURQ%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=626&sign=6A0BB25F09D0B314344DCEED1974D735&timestamp=1624098954&userId=2131837194&user_id=2131837194&wua=HIVW_5IihVGJewfJTK8ckMiH/9VsUO4sZtD0OoGFbGOTVRApg7nu6YgSOm4guXrA638OQV9pgzKQ20mhAkbDVPrxoeG6%2BSbcTWscuggXYvQ/ljJIi5d4gzqWMjM%2B1Sm1uHxLR4neSqaChcmiqehgNKDOw8qy3Eetf/SDnYqLvM68UxskhbKPcB458aXCs%2BaaLVo1W1O6tLi9g6z04uaHLrJIzHyROBYpm24alL2BClzjqAg8%3D"},{"key":"shuqiscbody10","val":""},{"key":"shuqiydbody10","val":""},{"key":"shuqiqdbody10","val":"clientTimestamp=1624098940&position=501&userId=2131837194&signInType=1&wua=HIVW_ScIoXrYuNc3CaGYpEVwMp2NNT6nKe5XxCOqvI1yRnFSdcnmNfMbPlLd%2F7JZOzlLzeASH1VK5IYX%2BPBGiRHDmku%2FOnx3czW81vx2tPNPM6RKhPscPtqvocNRMDqmqUstoLhD4KSlVRbLBqgFGPtp8aUtDyLwbXkf0UYtW%2By6NjNg1frMmywufZnOb4KloeBKeiJ6Tq5a6WTG3GGAGyXyNpSDru7gCnhxuJ6qycpGlGC4%3D&ua=&miniWua=HHnB_7hP%2FG6JZmYJay4RNItQb7sShwaRjRIItOhDx3c6O7xU%3D&umidtoken=YM1XudsjzwIDAEF13XihaMQa&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&sign=c80827201648dade071b8dfe233958ad&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.0%26utdid%3DYM1XudsjzwIDAEF13XihaMQa%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2131837194%26sn%3D194501F250FBAF221218810D7FA9ECD490597044%26umidtoken%3DYM1XudsjzwIDAEF13XihaMQa%26msv%3D8.0.0%26brand%3DApple%26imei%3D866DE243A5DBC31EC553B59D78F8EAC4780A897A%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad4G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DB8BD9EFE-56B2-472A-BC47-670522A7A5A9"},{"key":"shuqirwbody10","val":"serviceWorkerOn=1&stopPullRefresh=1&from=ShuqiTab&upf=20368&sdk=13.0&utdid=YM1XudsjzwIDAEF13XihaMQa&ustatus=0&first_placeid=111111&net_env=4g&placeid=111111&user_id=2131837194&sn=194501F250FBAF221218810D7FA9ECD490597044&umidtoken=YM1XudsjzwIDAEF13XihaMQa&msv=8.0.0&brand=Apple&imei=866DE243A5DBC31EC553B59D78F8EAC4780A897A&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&session=&skinColor=23B383&platform=1&ver=210301&mod=iPad4G&statusBarHeight=44.000000&skinVersion=1&wh=1242x2688&soft_id=21&utype=pre_vip&skinId=999&idfa=B8BD9EFE-56B2-472A-BC47-670522A7A5A9&params=%7B%22resources%22%3A%7B%22ShuqiBsDailyTask%22%3A%7B%7D%7D%7D&userId=2131837194&placeId=111111&timestamp=1624098966&sqSv=1.0&sign=25f3a279f326a35833ef419869496ed4&key=sq_h5_gateway&_public="},{"key":"shuqifxbody10","val":""},{"key":"shuqisprwurl10","val":"https://ocean.shuqireader.com/api/ad/adserver/v1/api/getAdInfo?appVer=4.3.6.0&placeId=111111&platform=iOS&requestSrc=h5&resourceId=626&timestamp=1624098989&user_id=2131837194&sqSv=1.0&sign=791122a5acca336421b4da14a1ca499b&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.0%26utdid%3DYM1XudsjzwIDAEF13XihaMQa%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2131837194%26sn%3D194501F250FBAF221218810D7FA9ECD490597044%26umidtoken%3DYM1XudsjzwIDAEF13XihaMQa%26msv%3D8.0.0%26brand%3DApple%26imei%3D866DE243A5DBC31EC553B59D78F8EAC4780A897A%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad4G%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DB8BD9EFE-56B2-472A-BC47-670522A7A5A9"},{"key":"shuqijlbody10","val":"requestSrc=h5&userId=2131837194&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624098966&sqSv=1.0&sign=c48c51233684e866757c8eacbb8565f2&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.0%26utdid%3DYM1XudsjzwIDAEF13XihaMQa%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2131837194%26sn%3D194501F250FBAF221218810D7FA9ECD490597044%26umidtoken%3DYM1XudsjzwIDAEF13XihaMQa%26msv%3D8.0.0%26brand%3DApple%26imei%3D866DE243A5DBC31EC553B59D78F8EAC4780A897A%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad4G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DB8BD9EFE-56B2-472A-BC47-670522A7A5A9"},{"key":"shuqisqjlbody10","val":"src=&userId=2131837194&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624098945&sqSv=1.0&sign=81ca8c53f226ef68c2aba2f92a8f8682&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.0%26utdid%3DYM1XudsjzwIDAEF13XihaMQa%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2131837194%26sn%3D194501F250FBAF221218810D7FA9ECD490597044%26umidtoken%3DYM1XudsjzwIDAEF13XihaMQa%26msv%3D8.0.0%26brand%3DApple%26imei%3D866DE243A5DBC31EC553B59D78F8EAC4780A897A%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad4G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DB8BD9EFE-56B2-472A-BC47-670522A7A5A9"},{"key":"shuqicjyurl10","val":"https://ocean.shuqireader.com/api/activity/activity/v1/lottery/info?timestamp=1624098990&userId=2131837194&activityId=311&sqSv=1.0&sign=27e08ecb88d22a7f46249e28fb417dba&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.0%26utdid%3DYM1XudsjzwIDAEF13XihaMQa%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2131837194%26sn%3D194501F250FBAF221218810D7FA9ECD490597044%26umidtoken%3DYM1XudsjzwIDAEF13XihaMQa%26msv%3D8.0.0%26brand%3DApple%26imei%3D866DE243A5DBC31EC553B59D78F8EAC4780A897A%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad4G%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DB8BD9EFE-56B2-472A-BC47-670522A7A5A9"},{"key":"shuqicjcsbody10","val":"_public=skinId%3D999%26idfa%3DB8BD9EFE-56B2-472A-BC47-670522A7A5A9%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26umidtoken%3DYM1XudsjzwIDAEF13XihaMQa%26user_id%3D2131837194%26sn%3D194501F250FBAF221218810D7FA9ECD490597044%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D866DE243A5DBC31EC553B59D78F8EAC4780A897A%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPad4G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYM1XudsjzwIDAEF13XihaMQa%26utype%3Dpre_vip%26sdk%3D13.0&deliveryId=711&key=sq_app_ad&miniWua=HHnB_yunESAeTOg76JTgQKduoaBG3WLV17mng1XtsVjqaVuM%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=703&sign=F34581047C61CBFFEF17FB1F20FE5A3C&timestamp=1624098972&userId=2131837194&user_id=2131837194&wua=HIVW_MZYhnZPB/pvOsvDMuk684MaUnLe64Ux1haU/4hIgbjSYaJX/g3vCmY0j/006DUZ3T0bWTSRfq/sCjKvp%2BjHKfaXIhGgsg%2BxmUFw3yu4TcYcsoh0qBHgxSoa1nIXpyUTyBv8DqypT%2BBhb5qgrDFfUYJJzk/LqR21YVxxJkA%2BNZpRnEJFDdcb7j8bf2hkhNpLF4iknfi0WhqxrRDl9jDidvCiUY0Vk0J/l2axT0X4235M%3D"},{"key":"shuqicjbody10","val":"wua=HIVW_4BunZEYBh%2BE8uw2kRmP3Y1uvtGYMTB47z1ku8Nh9py6nHr0QHgwN2gz5dci0rSzX9BZvClvyT3lHuWluaQ7qk4vcIaahWoJXyytsmgXcxzfstIbbSmdXlSmYq6BJUzozsCGj8FmiqYhKiJmJOKL7lEjvBgCpkBpuubsLXRQ7iRKUftR7ukak28hwcaDf%2BOG8HQ3dwzXvFi%2FAus%2FTDYjZ2pvT5TER%2Fxa0BHTd0w168%2F8%3D&ua=&userId=2131837194&umidtoken=YM1XudsjzwIDAEF13XihaMQa&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&asac=2A20C07RJ9F51AOEFSNHDR&timestamp=1624098978&activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&sqSv=1.0&sign=7e1dad862a8ecbeededa9e35cb688945&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.0%26utdid%3DYM1XudsjzwIDAEF13XihaMQa%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2131837194%26sn%3D194501F250FBAF221218810D7FA9ECD490597044%26umidtoken%3DYM1XudsjzwIDAEF13XihaMQa%26msv%3D8.0.0%26brand%3DApple%26imei%3D866DE243A5DBC31EC553B59D78F8EAC4780A897A%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad4G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DB8BD9EFE-56B2-472A-BC47-670522A7A5A9"},{"key":"shuqijsspbody10","val":""},{"key":"shuqijsydurl10","val":""},{"key":"shuqijsydbody10","val":""},{"key":"shuqijsqdbody10","val":""},{"key":"shuqijsqdspyurl10","val":""},{"key":"shuqijsqdspbody10","val":""},{"key":"shuqijsrwbody10","val":""},{"key":"shuqijsfxbody10","val":""},{"key":"shuqijsbookurl10","val":""},{"key":"shuqijsbookbody10","val":""},{"key":"shuqijssprwurl10","val":""},{"key":"shuqiuserurl11","val":"https://ocean.shuqireader.com/api/jaccount/accountapi/v1/sapi/account/getBindinfo?userId=2127520147&sqSv=1.0&timestamp=1624100133&sign=3d2fce470afcdd495e6147e8f666536c&key=sq_h5_gateway"},{"key":"shuqisyurl11","val":"https://render.shuqireader.com/load/resource?sdk=13.2.2&utdid=YM1Xwq9g340DADWpVMFD%2Fzq1&ustatus=0&first_placeid=111111&net_env=4g&placeid=111111&user_id=2127520147&sn=5BEEFAD3AF2E21FDEE05321887B2388A80713676&umidtoken=YM1Xwq9g340DADWpVMFD%2Fzq1&msv=8.0.0&brand=Apple&imei=B988CC0A6D058894B6BA7EA1B141301941C4B82A&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=iOS&ver=210301&mod=iPhone6plus&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=EB76F04E-1C26-4357-9EFE-0A53BEFFDA0E"},{"key":"shuqisybody11","val":"appVer=4.3.6.0&imei=B988CC0A6D058894B6BA7EA1B141301941C4B82A&isNewUser=1&params=%7B%22resources%22%3A%7B%22ShuqiVipEntry%22%3A%7B%7D%2C%22personalCardConfig%22%3A%7B%7D%7D%7D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=ffb0eaefb96641a6134af4e582728b20&sn=5BEEFAD3AF2E21FDEE05321887B2388A80713676&soft_id=21&timestamp=1624100070&user_id=2127520147&ver=210301"},{"key":"shuqispbody11","val":"_public=skinId%3D999%26idfa%3DEB76F04E-1C26-4357-9EFE-0A53BEFFDA0E%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26umidtoken%3DYM1Xwq9g340DADWpVMFD/zq1%26user_id%3D2127520147%26sn%3D5BEEFAD3AF2E21FDEE05321887B2388A80713676%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3DB988CC0A6D058894B6BA7EA1B141301941C4B82A%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhone6plus%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYM1Xwq9g340DADWpVMFD/zq1%26utype%3Dpre_vip%26sdk%3D13.2.2&deliveryId=525&key=sq_app_ad&miniWua=HHnB_fGc0RWZyZNukFbNeeH82DmWAfD65zfWle7Ji5XN/Skw%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=626&sign=5007BEAA5EB2C3EF043BF201C24AD643&timestamp=1624100093&userId=2127520147&user_id=2127520147&wua=HIVW_0vJK9ArsoKYOiwWxY8Kz1PGmbnnmarIrFED%2BlsaKcXvODcloqrTm7Zlll6jldJMa6d/pywkJsGmdhk8mrllMsCTGHDt08BfmKPaCxeFP1rFYXEIrsyVxdnhtDE3XEm5xnLk4%2BjB%2BAwnWW2P3UanePVqngCNvTJUj/ngtq2dTXZ/7YNeCi%2BAhZH4yqY3C1ad8qBUHKAMfgFvDlv6QoQaBOhy/G%2BmRn6u7dTOnlNa1st8%3D"},{"key":"shuqiscbody11","val":""},{"key":"shuqiydbody11","val":""},{"key":"shuqiqdbody11","val":"clientTimestamp=1624100084&position=501&userId=2127520147&signInType=1&wua=HIVW_WRJSOpNTVvnYCs0s1%2BvaJgnHabq0Ep%2BPZYqyWSrEVAOMmyBxxqx9qp9BtNjEBfoW%2BsXEWL5aKUQrvMkFiNNQhRjD2%2BvFBLz2lRTtdbn8GUQOtLUSDEtsCWtyE349klLh0KpiMVCglr0LTQwSFn8%2BTV5OUkO8FE1gEd952vryjOisa56037SBZFtGFZ%2Bf3bj3EjLa7OYx03Y%2FHjgHoH5Poeso%2FVAHk%2FQXFmGGq07BlQg%3D&ua=&miniWua=HHnB_0evZHLEUpMcs7OHelSt2pePGVnu9sW9LXqQd3K2Pad8%3D&umidtoken=YM1Xwq9g340DADWpVMFD%2Fzq1&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&sign=99e83c3e38bf16346fedf7331651a994&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.2.2%26utdid%3DYM1Xwq9g340DADWpVMFD%252Fzq1%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2127520147%26sn%3D5BEEFAD3AF2E21FDEE05321887B2388A80713676%26umidtoken%3DYM1Xwq9g340DADWpVMFD%252Fzq1%26msv%3D8.0.0%26brand%3DApple%26imei%3DB988CC0A6D058894B6BA7EA1B141301941C4B82A%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone6plus%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DEB76F04E-1C26-4357-9EFE-0A53BEFFDA0E"},{"key":"shuqirwbody11","val":"serviceWorkerOn=1&stopPullRefresh=1&from=ShuqiTab&upf=20368&sdk=13.2.2&utdid=YM1Xwq9g340DADWpVMFD%2Fzq1&ustatus=0&first_placeid=111111&net_env=4g&placeid=111111&user_id=2127520147&sn=5BEEFAD3AF2E21FDEE05321887B2388A80713676&umidtoken=YM1Xwq9g340DADWpVMFD%2Fzq1&msv=8.0.0&brand=Apple&imei=B988CC0A6D058894B6BA7EA1B141301941C4B82A&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=1&ver=210301&mod=iPhone6plus&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=EB76F04E-1C26-4357-9EFE-0A53BEFFDA0E&params=%7B%22resources%22%3A%7B%22ShuqiBsDailyTask%22%3A%7B%7D%7D%7D&userId=2127520147&placeId=111111&timestamp=1624100101&sqSv=1.0&sign=61494ba66e818dde2b4332ccefa04ed6&key=sq_h5_gateway&_public="},{"key":"shuqifxbody11","val":""},{"key":"shuqisprwurl11","val":"https://ocean.shuqireader.com/api/ad/adserver/v1/api/getAdInfo?appVer=4.3.6.0&placeId=111111&platform=iOS&requestSrc=h5&resourceId=626&timestamp=1624100134&user_id=2127520147&sqSv=1.0&sign=1d8326cea04f9352ea249c207e20ddc2&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.2.2%26utdid%3DYM1Xwq9g340DADWpVMFD%252Fzq1%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2127520147%26sn%3D5BEEFAD3AF2E21FDEE05321887B2388A80713676%26umidtoken%3DYM1Xwq9g340DADWpVMFD%252Fzq1%26msv%3D8.0.0%26brand%3DApple%26imei%3DB988CC0A6D058894B6BA7EA1B141301941C4B82A%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone6plus%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DEB76F04E-1C26-4357-9EFE-0A53BEFFDA0E"},{"key":"shuqijlbody11","val":"requestSrc=h5&userId=2127520147&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624100101&sqSv=1.0&sign=aad9c985326ef00db6f1b379ef7a3393&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.2.2%26utdid%3DYM1Xwq9g340DADWpVMFD%252Fzq1%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2127520147%26sn%3D5BEEFAD3AF2E21FDEE05321887B2388A80713676%26umidtoken%3DYM1Xwq9g340DADWpVMFD%252Fzq1%26msv%3D8.0.0%26brand%3DApple%26imei%3DB988CC0A6D058894B6BA7EA1B141301941C4B82A%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone6plus%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DEB76F04E-1C26-4357-9EFE-0A53BEFFDA0E"},{"key":"shuqisqjlbody11","val":"src=&userId=2127520147&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624100090&sqSv=1.0&sign=bf3181acbc2c45a1baa00dd1af26f4e3&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.2.2%26utdid%3DYM1Xwq9g340DADWpVMFD%252Fzq1%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2127520147%26sn%3D5BEEFAD3AF2E21FDEE05321887B2388A80713676%26umidtoken%3DYM1Xwq9g340DADWpVMFD%252Fzq1%26msv%3D8.0.0%26brand%3DApple%26imei%3DB988CC0A6D058894B6BA7EA1B141301941C4B82A%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone6plus%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DEB76F04E-1C26-4357-9EFE-0A53BEFFDA0E"},{"key":"shuqicjyurl11","val":"https://ocean.shuqireader.com/api/activity/activity/v1/lottery/info?timestamp=1624100136&userId=2127520147&activityId=311&sqSv=1.0&sign=3653fcf63bd8814cb21fa8fb25fcf6ac&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.2.2%26utdid%3DYM1Xwq9g340DADWpVMFD%252Fzq1%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2127520147%26sn%3D5BEEFAD3AF2E21FDEE05321887B2388A80713676%26umidtoken%3DYM1Xwq9g340DADWpVMFD%252Fzq1%26msv%3D8.0.0%26brand%3DApple%26imei%3DB988CC0A6D058894B6BA7EA1B141301941C4B82A%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone6plus%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DEB76F04E-1C26-4357-9EFE-0A53BEFFDA0E"},{"key":"shuqicjcsbody11","val":"_public=skinId%3D999%26idfa%3DEB76F04E-1C26-4357-9EFE-0A53BEFFDA0E%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26umidtoken%3DYM1Xwq9g340DADWpVMFD/zq1%26user_id%3D2127520147%26sn%3D5BEEFAD3AF2E21FDEE05321887B2388A80713676%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3DB988CC0A6D058894B6BA7EA1B141301941C4B82A%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhone6plus%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYM1Xwq9g340DADWpVMFD/zq1%26utype%3Dpre_vip%26sdk%3D13.2.2&deliveryId=711&key=sq_app_ad&miniWua=HHnB_3ly6/q7RCY2tSnr1zeDw%2ByGRDv8f1uH8uTPeBvBUkoc%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=703&sign=79B54DDEF391A4B665F26B5CD444D3DB&timestamp=1624100115&userId=2127520147&user_id=2127520147&wua=HIVW_AtGLhVutpXfoBD4Uq6JJYwxhtuTIhZ59as7MyjWBgErvskwYz3KTJMNQGcGcv1yJmflgo14eQbRoJJK9m3CEz/TXbKCjsJyLK4LiGNVG4ruOCFPXvlAClVkAfWVzbisrwksIfb3QFRPr1Qjk/L6JqcL5k%2BNgx2hz5pMS68kio4x%2BH5kWI0qeoATmKpnKDKU1pQwQ50ySvLU8MQjni7T09vBJUECSddQyz2DsrjJs6Wc%3D"},{"key":"shuqicjbody11","val":"wua=HIVW_bYaM6pP9M7nZFQUxuMKr4SjHchRrejYUdHWJjIvrX7IE9DThx2klIzkmx9T6flblvceWFPFYUcdmgZIiez8ASny9RaOwWeB6y4Xq7%2BOH4HVUWJT%2BxkI484KQGFLjdpOc%2B%2FYi8vOZL1yJGxJ9o1sg971kFp1HPqfsS5QKutmUGyf5NPWjeaD5IKxmclTZWRWSBbWbdJgiqtA095ZHRGEvAqoM3FOWLY8t%2B5BKgAm2s7M%3D&ua=&userId=2127520147&umidtoken=YM1Xwq9g340DADWpVMFD%2Fzq1&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&asac=2A20C07RJ9F51AOEFSNHDR&timestamp=1624100123&activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&sqSv=1.0&sign=88a59badf9f230779de2a9e458fe9d68&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.2.2%26utdid%3DYM1Xwq9g340DADWpVMFD%252Fzq1%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2127520147%26sn%3D5BEEFAD3AF2E21FDEE05321887B2388A80713676%26umidtoken%3DYM1Xwq9g340DADWpVMFD%252Fzq1%26msv%3D8.0.0%26brand%3DApple%26imei%3DB988CC0A6D058894B6BA7EA1B141301941C4B82A%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone6plus%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DEB76F04E-1C26-4357-9EFE-0A53BEFFDA0E"},{"key":"shuqijsspbody11","val":""},{"key":"shuqijsydurl11","val":""},{"key":"shuqijsydbody11","val":""},{"key":"shuqijsqdbody11","val":""},{"key":"shuqijsqdspyurl11","val":""},{"key":"shuqijsqdspbody11","val":""},{"key":"shuqijsrwbody11","val":""},{"key":"shuqijsfxbody11","val":""},{"key":"shuqijsbookurl11","val":""},{"key":"shuqijsbookbody11","val":""},{"key":"shuqijssprwurl11","val":""},{"key":"shuqiuserurl12","val":"https://ocean.shuqireader.com/api/jaccount/accountapi/v1/sapi/account/getBindinfo?userId=2128617355&sqSv=1.0&timestamp=1624100207&sign=359acf0df8023c325e2d5fd33b161114&key=sq_h5_gateway"},{"key":"shuqisyurl12","val":"https://render.shuqireader.com/load/resource?sdk=13.2&utdid=YM3NNWVpBk0DAPXHbpjlEFAE&ustatus=0&first_placeid=111111&net_env=wifi&placeid=111111&user_id=2128617355&sn=2EEB22F83075818B5C8FAD0646D47A7A37A2D7FD&umidtoken=YM3NNWVpBk0DAPXHbpjlEFAE&msv=8.0.0&brand=Apple&imei=62E4BF61B5FB6124AEA1C97C9B022E4A01ABA741&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=iOS&ver=210301&mod=iPhoneXMAX&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=3CDBD802-A53E-41BF-BD6D-1DF726DF4B02"},{"key":"shuqisybody12","val":"appVer=4.3.6.0&imei=62E4BF61B5FB6124AEA1C97C9B022E4A01ABA741&isNewUser=1&params=%7B%22resources%22%3A%7B%22ShuqiVipEntry%22%3A%7B%7D%2C%22personalCardConfig%22%3A%7B%7D%7D%7D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=cd4df677aefd4c0680acb71a9f8e6dcd&sn=2EEB22F83075818B5C8FAD0646D47A7A37A2D7FD&soft_id=21&timestamp=1624100152&user_id=2128617355&ver=210301"},{"key":"shuqispbody12","val":"_public=skinId%3D999%26idfa%3D3CDBD802-A53E-41BF-BD6D-1DF726DF4B02%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26umidtoken%3DYM3NNWVpBk0DAPXHbpjlEFAE%26user_id%3D2128617355%26sn%3D2EEB22F83075818B5C8FAD0646D47A7A37A2D7FD%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D62E4BF61B5FB6124AEA1C97C9B022E4A01ABA741%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhoneXMAX%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYM3NNWVpBk0DAPXHbpjlEFAE%26utype%3Dpre_vip%26sdk%3D13.2&deliveryId=525&key=sq_app_ad&miniWua=HHnB_Kz4RCEMO87rzHj6jpD/N/UHFRWIZ%2BLwP6AtqFW3WiK4%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=626&sign=FBA7FB07CA8C2797E75179DB3DC864B8&timestamp=1624100176&userId=2128617355&user_id=2128617355&wua=HIVW_3RXMCuO1OQuhhx016yefZSBbBdxr1T/Qr7ZPM5/9MOanqI5CCzFObKCrq8TLbRcoIoL%2BZMTEmOTxw9zFU4qY/TTcObd4xKkJQ4l4f54s2npehBNhRo7P2IVnpiyOSTF8JAvBRMn51y24VagUgJcpn3eFnmk9Y2/hjRwyZvtiL0OtRVSTpb08Ur58JuZ87xoKJDHGBaZ/oasd6Mb0jbloJSvaHrTYylB4osF20BP9cEI%3D"},{"key":"shuqiscbody12","val":""},{"key":"shuqiydbody12","val":""},{"key":"shuqiqdbody12","val":"clientTimestamp=1624100167&position=501&userId=2128617355&signInType=1&wua=HIVW_ynHkGrFqWjVRK50pcncW2yzFkUF5YvyBolEHl1MvbLfCFokutNGrgEOw7fMqbfvhjfe3hQF1zA1nzIL1wMsLgUFFX9vEX4r%2Bn17iK9VZNCBCcldrNTsuD%2Bi%2Bl76pPNRh7s8zLPGD4Kik1MeY16OZhw66jynzWWfW%2FVObcqsZU08VZTiXpvGBSjKQ%2BdPpdEzQwi%2B1smKV5RwNkIbXRqscG3nJ7yWhrgqt5wRnW%2FwpGzI%3D&ua=&miniWua=HHnB_YEqBVr2rZH%2BgsKVr6%2BiBtECn2UuM71%2BY1iQx7FC%2FUd0%3D&umidtoken=YM3NNWVpBk0DAPXHbpjlEFAE&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&sign=08bbf05ea4bb0a36f5ed8fd9cba113ac&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.2%26utdid%3DYM3NNWVpBk0DAPXHbpjlEFAE%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2128617355%26sn%3D2EEB22F83075818B5C8FAD0646D47A7A37A2D7FD%26umidtoken%3DYM3NNWVpBk0DAPXHbpjlEFAE%26msv%3D8.0.0%26brand%3DApple%26imei%3D62E4BF61B5FB6124AEA1C97C9B022E4A01ABA741%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhoneXMAX%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D3CDBD802-A53E-41BF-BD6D-1DF726DF4B02"},{"key":"shuqirwbody12","val":"serviceWorkerOn=1&stopPullRefresh=1&from=ShuqiTab&upf=20368&sdk=13.2&utdid=YM3NNWVpBk0DAPXHbpjlEFAE&ustatus=0&first_placeid=111111&net_env=wifi&placeid=111111&user_id=2128617355&sn=2EEB22F83075818B5C8FAD0646D47A7A37A2D7FD&umidtoken=YM3NNWVpBk0DAPXHbpjlEFAE&msv=8.0.0&brand=Apple&imei=62E4BF61B5FB6124AEA1C97C9B022E4A01ABA741&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=1&ver=210301&mod=iPhoneXMAX&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=3CDBD802-A53E-41BF-BD6D-1DF726DF4B02&params=%7B%22resources%22%3A%7B%22ShuqiBsDailyTask%22%3A%7B%7D%7D%7D&userId=2128617355&placeId=111111&timestamp=1624100182&sqSv=1.0&sign=e5e200616a677b110e5d27d2917b30a5&key=sq_h5_gateway&_public="},{"key":"shuqifxbody12","val":""},{"key":"shuqisprwurl12","val":"https://ocean.shuqireader.com/api/ad/adserver/v1/api/getAdInfo?appVer=4.3.6.0&placeId=111111&platform=iOS&requestSrc=h5&resourceId=626&timestamp=1624100207&user_id=2128617355&sqSv=1.0&sign=31e998c923e67e23a9ab73e3c27ac91a&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.2%26utdid%3DYM3NNWVpBk0DAPXHbpjlEFAE%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2128617355%26sn%3D2EEB22F83075818B5C8FAD0646D47A7A37A2D7FD%26umidtoken%3DYM3NNWVpBk0DAPXHbpjlEFAE%26msv%3D8.0.0%26brand%3DApple%26imei%3D62E4BF61B5FB6124AEA1C97C9B022E4A01ABA741%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhoneXMAX%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D3CDBD802-A53E-41BF-BD6D-1DF726DF4B02"},{"key":"shuqijlbody12","val":"requestSrc=h5&userId=2128617355&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624100182&sqSv=1.0&sign=e829309c3950237dc6a123a59317a087&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.2%26utdid%3DYM3NNWVpBk0DAPXHbpjlEFAE%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2128617355%26sn%3D2EEB22F83075818B5C8FAD0646D47A7A37A2D7FD%26umidtoken%3DYM3NNWVpBk0DAPXHbpjlEFAE%26msv%3D8.0.0%26brand%3DApple%26imei%3D62E4BF61B5FB6124AEA1C97C9B022E4A01ABA741%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhoneXMAX%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D3CDBD802-A53E-41BF-BD6D-1DF726DF4B02"},{"key":"shuqisqjlbody12","val":"src=&userId=2128617355&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624100173&sqSv=1.0&sign=bc006dc712c194c65d0896793d84db43&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.2%26utdid%3DYM3NNWVpBk0DAPXHbpjlEFAE%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2128617355%26sn%3D2EEB22F83075818B5C8FAD0646D47A7A37A2D7FD%26umidtoken%3DYM3NNWVpBk0DAPXHbpjlEFAE%26msv%3D8.0.0%26brand%3DApple%26imei%3D62E4BF61B5FB6124AEA1C97C9B022E4A01ABA741%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhoneXMAX%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D3CDBD802-A53E-41BF-BD6D-1DF726DF4B02"},{"key":"shuqicjyurl12","val":"https://ocean.shuqireader.com/api/activity/activity/v1/lottery/info?timestamp=1624100209&userId=2128617355&activityId=311&sqSv=1.0&sign=32357139ab1fa1aceae84c83743b1655&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.2%26utdid%3DYM3NNWVpBk0DAPXHbpjlEFAE%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2128617355%26sn%3D2EEB22F83075818B5C8FAD0646D47A7A37A2D7FD%26umidtoken%3DYM3NNWVpBk0DAPXHbpjlEFAE%26msv%3D8.0.0%26brand%3DApple%26imei%3D62E4BF61B5FB6124AEA1C97C9B022E4A01ABA741%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhoneXMAX%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D3CDBD802-A53E-41BF-BD6D-1DF726DF4B02"},{"key":"shuqicjcsbody12","val":"_public=skinId%3D999%26idfa%3D3CDBD802-A53E-41BF-BD6D-1DF726DF4B02%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26umidtoken%3DYM3NNWVpBk0DAPXHbpjlEFAE%26user_id%3D2128617355%26sn%3D2EEB22F83075818B5C8FAD0646D47A7A37A2D7FD%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D62E4BF61B5FB6124AEA1C97C9B022E4A01ABA741%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhoneXMAX%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYM3NNWVpBk0DAPXHbpjlEFAE%26utype%3Dpre_vip%26sdk%3D13.2&deliveryId=711&key=sq_app_ad&miniWua=HHnB_eaiGpw56jBeaue6FQ3k1U2llNIxc7gsdw7RG59BRWQs%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=703&sign=EF30420770642D8FD0BD7607949583A7&timestamp=1624100189&userId=2128617355&user_id=2128617355&wua=HIVW_Jo1lNQbF9%2BFOZgUUROVZ5RAAnzubEtSOHzQkD1lZtxim9qa/gc8HdjxqvOHNKC8HY%2B2QL3kXaEbwZtOsYyJI0uOO7NPDFUTgZZWs6M%2BQE4XBSitN6yKX96JAOnRC4hSOhVf25b7U2rPcv0OASTnYRVzJMUXm3cQS35tM0e2MEvONdQBiWQqD2qWAWdpxIePKycEkB%2BX1zb222x%2BnrUUiMRtzW5ERNQy3/Ds8GxnsQGI%3D"},{"key":"shuqicjbody12","val":"wua=HIVW_lbb47%2FCOwPNPsOUUukDOXoFyWHURDxG7BP%2FDsiFS8hL%2BVFiJE%2F1Jo1McZC1xGOB65eW1tqq7kyK0VZckntvGP%2FJdLUY%2BdgNSVw8uIyJ1c%2BFuh7b%2BK%2B7cYy6u8ZGFDd70ClS6F4muPmEgG%2BKnqV%2Fhh%2BGVAOT1g3nCY6pXtQC0cl%2BGC%2FZ3Ihs9V69liCiRpNFAS1Hpq6QA0QQr5A0WEf0yggE0XtcsWVUsiY5OWW7bjEo%3D&ua=&userId=2128617355&umidtoken=YM3NNWVpBk0DAPXHbpjlEFAE&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&asac=2A20C07RJ9F51AOEFSNHDR&timestamp=1624100195&activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&sqSv=1.0&sign=8acb8529d1bbc30c3275953e36ae3837&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.2%26utdid%3DYM3NNWVpBk0DAPXHbpjlEFAE%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2128617355%26sn%3D2EEB22F83075818B5C8FAD0646D47A7A37A2D7FD%26umidtoken%3DYM3NNWVpBk0DAPXHbpjlEFAE%26msv%3D8.0.0%26brand%3DApple%26imei%3D62E4BF61B5FB6124AEA1C97C9B022E4A01ABA741%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhoneXMAX%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D3CDBD802-A53E-41BF-BD6D-1DF726DF4B02"},{"key":"shuqijsspbody12","val":""},{"key":"shuqijsydurl12","val":""},{"key":"shuqijsydbody12","val":""},{"key":"shuqijsqdbody12","val":""},{"key":"shuqijsqdspyurl12","val":""},{"key":"shuqijsqdspbody12","val":""},{"key":"shuqijsrwbody12","val":""},{"key":"shuqijsfxbody12","val":""},{"key":"shuqijsbookurl12","val":""},{"key":"shuqijsbookbody12","val":""},{"key":"shuqijssprwurl12","val":""},{"key":"shuqiuserurl13","val":"https://ocean.shuqireader.com/api/jaccount/accountapi/v1/sapi/account/getBindinfo?userId=2129911269&sqSv=1.0&timestamp=1624100290&sign=dd3556de94c62966e0f4e9e9d5068823&key=sq_h5_gateway"},{"key":"shuqisyurl13","val":"https://render.shuqireader.com/load/resource?sdk=13.4&utdid=YM3Nh4TRMOADALZkWsatus%2BQ&ustatus=0&first_placeid=111111&net_env=4g&placeid=111111&user_id=2129911269&sn=458E7FDDAF92E152AC1BFCDA44CB32F07B31FF67&umidtoken=YM3Nh4TRMOADALZkWsatus%2BQ&msv=8.0.0&brand=Apple&imei=8DF38B9F259E3270905119D15CFEC887838580A8&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=iOS&ver=210301&mod=iPhoneSE&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=BD13DE99-14FC-40A2-A4F2-32A6766C8946"},{"key":"shuqisybody13","val":"appVer=4.3.6.0&imei=8DF38B9F259E3270905119D15CFEC887838580A8&isNewUser=1&params=%7B%22resources%22%3A%7B%22ShuqiVipEntry%22%3A%7B%7D%2C%22personalCardConfig%22%3A%7B%7D%7D%7D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=8529b32262e72df4fb2564c36647cca8&sn=458E7FDDAF92E152AC1BFCDA44CB32F07B31FF67&soft_id=21&timestamp=1624100233&user_id=2129911269&ver=210301"},{"key":"shuqispbody13","val":"_public=skinId%3D999%26idfa%3DBD13DE99-14FC-40A2-A4F2-32A6766C8946%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26umidtoken%3DYM3Nh4TRMOADALZkWsatus%2BQ%26user_id%3D2129911269%26sn%3D458E7FDDAF92E152AC1BFCDA44CB32F07B31FF67%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D8DF38B9F259E3270905119D15CFEC887838580A8%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhoneSE%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYM3Nh4TRMOADALZkWsatus%2BQ%26utype%3Dpre_vip%26sdk%3D13.4&deliveryId=525&key=sq_app_ad&miniWua=HHnB_IUY/3jv%2BYLQRkS3JAddEHvWzZ1noXiAqPFLpTUGpaXE%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=626&sign=E61AE13744F5620D0C6A59A645336D3E&timestamp=1624100256&userId=2129911269&user_id=2129911269&wua=HIVW_/UAFjSI7gqQCKaJr7R8Bf8EYH/yGavZZ%2Bn6halrMrjLQ0/qRY4PkM2ezq9J4dvWHEOrzc5O5GJPeXLX4Z2gW6J39lUmDDjlAwBWxt2eD/nOhuR7ZIBur1jESC0DbdagDzSNGr%2BO54Mfa4jjjaZSc8lBK8wz4LLmXFPGu3wYxu3xSgBQZEMKN1ROH4Qa2zdQY7k9QSXq4cZChxUmtX2av/oxjsTUoH/9Ka3TVKedBRlA%3D"},{"key":"shuqiscbody13","val":""},{"key":"shuqiydbody13","val":""},{"key":"shuqiqdbody13","val":"clientTimestamp=1624100247&position=501&userId=2129911269&signInType=1&wua=HIVW_LefTKUaS4ARgb9iBBDh1XvWf0AByJceuBu%2FioQDGA5gG2EMyp1EjZ0SCpLveFkpeeFOH1NuNDWTPGD5pBfeY5mXsZ%2Ffw9kiiOfZFrwBaRTB6%2FMQh7jJzPClmUJ%2FVBg2aESZXXs9xeEC3RcOMEDqq57Dck6XmDprd9gvU7JJIcivFkiXkGiTNDt70KpBse2O8PWe2CL4HpYC5hb1%2BM2Ww1QtGCuOW4Ti0Wl7XdKr%2FT%2B0%3D&ua=&miniWua=HHnB_E7Bqcr%2Fbu%2BFwZuHjGdLB4WYnK6r%2FRX2StmyrW7Fhgy4%3D&umidtoken=YM3Nh4TRMOADALZkWsatus%2BQ&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&sign=14483cb8405b0c2f477096e72f27557f&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.4%26utdid%3DYM3Nh4TRMOADALZkWsatus%252BQ%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2129911269%26sn%3D458E7FDDAF92E152AC1BFCDA44CB32F07B31FF67%26umidtoken%3DYM3Nh4TRMOADALZkWsatus%252BQ%26msv%3D8.0.0%26brand%3DApple%26imei%3D8DF38B9F259E3270905119D15CFEC887838580A8%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhoneSE%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DBD13DE99-14FC-40A2-A4F2-32A6766C8946"},{"key":"shuqirwbody13","val":"serviceWorkerOn=1&stopPullRefresh=1&from=ShuqiTab&upf=20368&sdk=13.4&utdid=YM3Nh4TRMOADALZkWsatus%2BQ&ustatus=0&first_placeid=111111&net_env=4g&placeid=111111&user_id=2129911269&sn=458E7FDDAF92E152AC1BFCDA44CB32F07B31FF67&umidtoken=YM3Nh4TRMOADALZkWsatus%2BQ&msv=8.0.0&brand=Apple&imei=8DF38B9F259E3270905119D15CFEC887838580A8&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=1&ver=210301&mod=iPhoneSE&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=BD13DE99-14FC-40A2-A4F2-32A6766C8946&params=%7B%22resources%22%3A%7B%22ShuqiBsDailyTask%22%3A%7B%7D%7D%7D&userId=2129911269&placeId=111111&timestamp=1624100263&sqSv=1.0&sign=b0d9b9d1e67a37ae87eac4e8372ed56c&key=sq_h5_gateway&_public="},{"key":"shuqifxbody13","val":""},{"key":"shuqisprwurl13","val":"https://ocean.shuqireader.com/api/ad/adserver/v1/api/getAdInfo?appVer=4.3.6.0&placeId=111111&platform=iOS&requestSrc=h5&resourceId=626&timestamp=1624100291&user_id=2129911269&sqSv=1.0&sign=6c4d00ec9fe06958ddaec1ad0ff736d9&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.4%26utdid%3DYM3Nh4TRMOADALZkWsatus%252BQ%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2129911269%26sn%3D458E7FDDAF92E152AC1BFCDA44CB32F07B31FF67%26umidtoken%3DYM3Nh4TRMOADALZkWsatus%252BQ%26msv%3D8.0.0%26brand%3DApple%26imei%3D8DF38B9F259E3270905119D15CFEC887838580A8%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhoneSE%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DBD13DE99-14FC-40A2-A4F2-32A6766C8946"},{"key":"shuqijlbody13","val":"requestSrc=h5&userId=2129911269&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624100263&sqSv=1.0&sign=d3e8aa4a14827956166af93997ff8377&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.4%26utdid%3DYM3Nh4TRMOADALZkWsatus%252BQ%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2129911269%26sn%3D458E7FDDAF92E152AC1BFCDA44CB32F07B31FF67%26umidtoken%3DYM3Nh4TRMOADALZkWsatus%252BQ%26msv%3D8.0.0%26brand%3DApple%26imei%3D8DF38B9F259E3270905119D15CFEC887838580A8%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhoneSE%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DBD13DE99-14FC-40A2-A4F2-32A6766C8946"},{"key":"shuqisqjlbody13","val":"src=&userId=2129911269&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624100253&sqSv=1.0&sign=6e805903240d34cde22b8fd00f666c69&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.4%26utdid%3DYM3Nh4TRMOADALZkWsatus%252BQ%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2129911269%26sn%3D458E7FDDAF92E152AC1BFCDA44CB32F07B31FF67%26umidtoken%3DYM3Nh4TRMOADALZkWsatus%252BQ%26msv%3D8.0.0%26brand%3DApple%26imei%3D8DF38B9F259E3270905119D15CFEC887838580A8%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhoneSE%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DBD13DE99-14FC-40A2-A4F2-32A6766C8946"},{"key":"shuqicjyurl13","val":"https://ocean.shuqireader.com/api/activity/activity/v1/lottery/info?timestamp=1624100292&userId=2129911269&activityId=311&sqSv=1.0&sign=2f2e1957e37b7b0c5251453111304c4f&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.4%26utdid%3DYM3Nh4TRMOADALZkWsatus%252BQ%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2129911269%26sn%3D458E7FDDAF92E152AC1BFCDA44CB32F07B31FF67%26umidtoken%3DYM3Nh4TRMOADALZkWsatus%252BQ%26msv%3D8.0.0%26brand%3DApple%26imei%3D8DF38B9F259E3270905119D15CFEC887838580A8%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhoneSE%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DBD13DE99-14FC-40A2-A4F2-32A6766C8946"},{"key":"shuqicjcsbody13","val":"_public=skinId%3D999%26idfa%3DBD13DE99-14FC-40A2-A4F2-32A6766C8946%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26umidtoken%3DYM3Nh4TRMOADALZkWsatus%2BQ%26user_id%3D2129911269%26sn%3D458E7FDDAF92E152AC1BFCDA44CB32F07B31FF67%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D8DF38B9F259E3270905119D15CFEC887838580A8%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhoneSE%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYM3Nh4TRMOADALZkWsatus%2BQ%26utype%3Dpre_vip%26sdk%3D13.4&deliveryId=711&key=sq_app_ad&miniWua=HHnB_AOLi3agKKf6aHwefP4EkYqfJbGVBq8hKZfI2FMwL7jQ%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=703&sign=17D6D0E38D9DE665CF33BA08008EC5F8&timestamp=1624100271&userId=2129911269&user_id=2129911269&wua=HIVW_2D0JYZAPQjBWCIImTuo546mxP9TD6qR5yo3BbAbnUq/HgFko%2B/vCKaA4SrzH0UZQFfZ9PJEqcfQ64xV5KC59yWJQh2R3b7GDs%2B%2B0%2BwZESm4IoC470vg/YueOMw9Z2uv3CM0qdzVaXe9OhD5sIwTWT7iBdAtONKHRXdLX1qYeFpRIcdHLtNt4J8Mi0AR9tLwqVcgatMGRC6%2Bubu1wYMtcUTUlgFZJpWbm21y5pna5cok%3D"},{"key":"shuqicjbody13","val":"wua=HIVW_nUmACM8XoMCNol%2Fad2MKJxYUDzTwUlV62B858prLdFGXk8aG52xBal4AML4n3qkYr90%2FuGMBxhsFk5jmlS0eAu3bU3HBCZp6xfv6e1gv9cu7tRLlMCGSEogPxy%2BFL8%2Fx3wrOJ35yuhYBvo3Ty1x5sIBdyBSi1IIqHJXA2j9IPDzRmk2M%2Bh90QtDPSSPv2nYrdogt5%2FvoIDIabmRR%2BURTOXSbqgnmVJcElpJEKlRq81M%3D&ua=&userId=2129911269&umidtoken=YM3Nh4TRMOADALZkWsatus%2BQ&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&asac=2A20C07RJ9F51AOEFSNHDR&timestamp=1624100277&activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&sqSv=1.0&sign=024549e840e07d8f5777f80188710562&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.4%26utdid%3DYM3Nh4TRMOADALZkWsatus%252BQ%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2129911269%26sn%3D458E7FDDAF92E152AC1BFCDA44CB32F07B31FF67%26umidtoken%3DYM3Nh4TRMOADALZkWsatus%252BQ%26msv%3D8.0.0%26brand%3DApple%26imei%3D8DF38B9F259E3270905119D15CFEC887838580A8%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhoneSE%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DBD13DE99-14FC-40A2-A4F2-32A6766C8946"},{"key":"shuqijsspbody13","val":""},{"key":"shuqijsydurl13","val":""},{"key":"shuqijsydbody13","val":""},{"key":"shuqijsqdbody13","val":""},{"key":"shuqijsqdspyurl13","val":""},{"key":"shuqijsqdspbody13","val":""},{"key":"shuqijsrwbody13","val":""},{"key":"shuqijsfxbody13","val":""},{"key":"shuqijsbookurl13","val":""},{"key":"shuqijsbookbody13","val":""},{"key":"shuqijssprwurl13","val":""},{"key":"shuqiuserurl14","val":"https://ocean.shuqireader.com/api/jaccount/accountapi/v1/sapi/account/getBindinfo?userId=2131588277&sqSv=1.0&timestamp=1624100453&sign=23523f30e51e8a874d632582ce9ee51e&key=sq_h5_gateway"},{"key":"shuqisyurl14","val":"https://render.shuqireader.com/load/resource?sdk=13.2&utdid=YM1X6bpOX88DAKhyBXGUSGFh&ustatus=0&first_placeid=111111&net_env=4g&placeid=111111&user_id=2131588277&sn=2505B2481419F67D3FECC107AF3907BAC5FC9217&umidtoken=YM1X6bpOX88DAKhyBXGUSGFh&msv=8.0.0&brand=Apple&imei=4063454E34F71B5731488B882FB7EA26154D593C&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=iOS&ver=210301&mod=UnknowniPad&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=F50C9944-C347-4B9C-B339-F22AEC0EF954"},{"key":"shuqisybody14","val":"appVer=4.3.6.0&imei=4063454E34F71B5731488B882FB7EA26154D593C&isNewUser=1&params=%7B%22resources%22%3A%7B%22ShuqiVipEntry%22%3A%7B%7D%2C%22personalCardConfig%22%3A%7B%7D%7D%7D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=2c3cff02ea008a44b358564a096654cc&sn=2505B2481419F67D3FECC107AF3907BAC5FC9217&soft_id=21&timestamp=1624100309&user_id=2131588277&ver=210301"},{"key":"shuqispbody14","val":"_public=skinId%3D999%26idfa%3DF50C9944-C347-4B9C-B339-F22AEC0EF954%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26umidtoken%3DYM1X6bpOX88DAKhyBXGUSGFh%26user_id%3D2131588277%26sn%3D2505B2481419F67D3FECC107AF3907BAC5FC9217%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D4063454E34F71B5731488B882FB7EA26154D593C%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYM1X6bpOX88DAKhyBXGUSGFh%26utype%3Dpre_vip%26sdk%3D13.2&deliveryId=525&key=sq_app_ad&miniWua=HHnB_lPtE060rHsrjkQwCYFlpSc2FoRjdMuOBE%2BIYm37d/TU%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=626&sign=4127094054041D0EF3521DCF96225B26&timestamp=1624100338&userId=2131588277&user_id=2131588277&wua=HIVW_X8SaEKIDHsYl5pahFvoFXOoOxJOepyKQEkLoA9GjNt1xVyhj7QndXRdGjdA9gm9cIsA2zz4senyv3DpyBVyIIE0muONCjxrMcsE1G73X%2B97G9aKMl%2BNvxvHCDtE0zMUWOdZNR2VfEZ3HY3ElSZZ7Qn9eyjMZnFrJaIUjjAFA0B0SHNVbnFLydCovAaTuFUFMoYQ4lRZ/xc7s%2B5uj2U0IsUAGi3Zh2zmeComlbzazogw%3D"},{"key":"shuqiscbody14","val":""},{"key":"shuqiydbody14","val":""},{"key":"shuqiqdbody14","val":"clientTimestamp=1624100329&position=501&userId=2131588277&signInType=1&wua=HIVW_GsJUCytCxBgwnuvfwEu7305CYpsdgtP7of5y7BfAPmeHMsMm8FE7rifvJ4Lb1E%2FYhjuvhGrBfXFidj4zWhnHnOWI6Ox113Qn9UEe9Rh%2BhaAcR1kwW3cNLfTIlU3zbnOXPYd3AW8HOt%2FA5K99gq92lezyK%2FwOR4oHMypYno5C%2FwIpEWF1av2kRQgr8FdxhZ6SBlrZkVI1bMwVhDlNwTjx3%2BhPDLkmMsJuT6E0qOopB%2BM%3D&ua=&miniWua=HHnB_wJfzCBpo1dL9I%2FUX%2BFlCbGDLbjNRyvkBjOb3w3Evhxc%3D&umidtoken=YM1X6bpOX88DAKhyBXGUSGFh&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&sign=b33a3550e305ffa4da0000e533e4c947&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.2%26utdid%3DYM1X6bpOX88DAKhyBXGUSGFh%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2131588277%26sn%3D2505B2481419F67D3FECC107AF3907BAC5FC9217%26umidtoken%3DYM1X6bpOX88DAKhyBXGUSGFh%26msv%3D8.0.0%26brand%3DApple%26imei%3D4063454E34F71B5731488B882FB7EA26154D593C%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DF50C9944-C347-4B9C-B339-F22AEC0EF954"},{"key":"shuqirwbody14","val":"serviceWorkerOn=1&stopPullRefresh=1&from=ShuqiTab&upf=20368&sdk=13.2&utdid=YM1X6bpOX88DAKhyBXGUSGFh&ustatus=0&first_placeid=111111&net_env=4g&placeid=111111&user_id=2131588277&sn=2505B2481419F67D3FECC107AF3907BAC5FC9217&umidtoken=YM1X6bpOX88DAKhyBXGUSGFh&msv=8.0.0&brand=Apple&imei=4063454E34F71B5731488B882FB7EA26154D593C&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&session=&skinColor=23B383&platform=1&ver=210301&mod=UnknowniPad&statusBarHeight=44.000000&skinVersion=1&wh=1242x2688&soft_id=21&utype=pre_vip&skinId=999&idfa=F50C9944-C347-4B9C-B339-F22AEC0EF954&params=%7B%22resources%22%3A%7B%22ShuqiBsDailyTask%22%3A%7B%7D%7D%7D&userId=2131588277&placeId=111111&timestamp=1624100429&sqSv=1.0&sign=7dff5235ab5e581fe6d3389f8e14249f&key=sq_h5_gateway&_public="},{"key":"shuqifxbody14","val":""},{"key":"shuqisprwurl14","val":"https://ocean.shuqireader.com/api/ad/adserver/v1/api/getAdInfo?appVer=4.3.6.0&placeId=111111&platform=iOS&requestSrc=h5&resourceId=626&timestamp=1624100450&user_id=2131588277&sqSv=1.0&sign=97a14cafbcb6ea6a0d54fd9867caf3d3&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.2%26utdid%3DYM1X6bpOX88DAKhyBXGUSGFh%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2131588277%26sn%3D2505B2481419F67D3FECC107AF3907BAC5FC9217%26umidtoken%3DYM1X6bpOX88DAKhyBXGUSGFh%26msv%3D8.0.0%26brand%3DApple%26imei%3D4063454E34F71B5731488B882FB7EA26154D593C%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DF50C9944-C347-4B9C-B339-F22AEC0EF954"},{"key":"shuqijlbody14","val":"requestSrc=h5&userId=2131588277&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624100429&sqSv=1.0&sign=19301104749c1b7d1afbb719f1828be2&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.2%26utdid%3DYM1X6bpOX88DAKhyBXGUSGFh%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2131588277%26sn%3D2505B2481419F67D3FECC107AF3907BAC5FC9217%26umidtoken%3DYM1X6bpOX88DAKhyBXGUSGFh%26msv%3D8.0.0%26brand%3DApple%26imei%3D4063454E34F71B5731488B882FB7EA26154D593C%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DF50C9944-C347-4B9C-B339-F22AEC0EF954"},{"key":"shuqisqjlbody14","val":"src=&userId=2131588277&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624100334&sqSv=1.0&sign=1e447d8a64b1d71ffd8cc6a5cbbf9d75&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.2%26utdid%3DYM1X6bpOX88DAKhyBXGUSGFh%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2131588277%26sn%3D2505B2481419F67D3FECC107AF3907BAC5FC9217%26umidtoken%3DYM1X6bpOX88DAKhyBXGUSGFh%26msv%3D8.0.0%26brand%3DApple%26imei%3D4063454E34F71B5731488B882FB7EA26154D593C%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DF50C9944-C347-4B9C-B339-F22AEC0EF954"},{"key":"shuqicjyurl14","val":"https://ocean.shuqireader.com/api/activity/activity/v1/lottery/info?timestamp=1624100453&userId=2131588277&activityId=311&sqSv=1.0&sign=c02859a3c521eee3b8aa5d2873339e4f&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.2%26utdid%3DYM1X6bpOX88DAKhyBXGUSGFh%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2131588277%26sn%3D2505B2481419F67D3FECC107AF3907BAC5FC9217%26umidtoken%3DYM1X6bpOX88DAKhyBXGUSGFh%26msv%3D8.0.0%26brand%3DApple%26imei%3D4063454E34F71B5731488B882FB7EA26154D593C%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DF50C9944-C347-4B9C-B339-F22AEC0EF954"},{"key":"shuqicjcsbody14","val":"_public=skinId%3D999%26idfa%3DF50C9944-C347-4B9C-B339-F22AEC0EF954%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26umidtoken%3DYM1X6bpOX88DAKhyBXGUSGFh%26user_id%3D2131588277%26sn%3D2505B2481419F67D3FECC107AF3907BAC5FC9217%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D4063454E34F71B5731488B882FB7EA26154D593C%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYM1X6bpOX88DAKhyBXGUSGFh%26utype%3Dpre_vip%26sdk%3D13.2&deliveryId=711&key=sq_app_ad&miniWua=HHnB_/Z1pK1PovMEVOzJnTN5kCaV1J7Krj75DEJHwY0kphSg%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=703&sign=24D0833D885A1D12B6D2D90A72F6AB54&timestamp=1624100436&userId=2131588277&user_id=2131588277&wua=HIVW_5SljDVZoF92u7TtqTX%2B1und5KrukwDm1u2xIQZw0t01Q6sugxqiAmQu/rZROc7E4QlpQkXvAQSif6KTlJhvmNlhhD/yjzm8TIqBL7yFDvYKIlPFSgvOtBWamU4CFXMylxz/VfUd/4eZ4LZUFMVL3Ga4XivOaUfC7dhvINpy6sFJeilQ1%2BgU7Tix4wL2mKeZKAjbp92sG%2BZZn8d3BbU%2BNi4%2BIuULJiUvmeY43%2BCxTYbk%3D"},{"key":"shuqicjbody14","val":"wua=HIVW_HeGI%2BS1SrvF45e6EnJKxJLVAHJByHt4t33OsFirnLJqxc%2BjsEtKTRtzYhXZ9B%2FNjBa0XsWo5ltYN9bU2HSxOJQZaIfzF6g%2BpKPRjcGx%2FOmdBmBsa0JcrbF8SiBpN8vrku60%2BMTbUgf79hyBj1b%2BMX9%2FuMqKTYT%2BpDobV%2FWcX%2FuWkGfcwsUv1Ayb8yyx2T9kGcqf18wcPNqrMP%2FyDNdo6ZxymDbfn1CICD3stLdmagog%3D&ua=&userId=2131588277&umidtoken=YM1X6bpOX88DAKhyBXGUSGFh&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&asac=2A20C07RJ9F51AOEFSNHDR&timestamp=1624100439&activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&sqSv=1.0&sign=989a0d00bf1fd8e172efcbbfc6a78d72&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.2%26utdid%3DYM1X6bpOX88DAKhyBXGUSGFh%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2131588277%26sn%3D2505B2481419F67D3FECC107AF3907BAC5FC9217%26umidtoken%3DYM1X6bpOX88DAKhyBXGUSGFh%26msv%3D8.0.0%26brand%3DApple%26imei%3D4063454E34F71B5731488B882FB7EA26154D593C%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DF50C9944-C347-4B9C-B339-F22AEC0EF954"},{"key":"shuqijsspbody14","val":""},{"key":"shuqijsydurl14","val":""},{"key":"shuqijsydbody14","val":""},{"key":"shuqijsqdbody14","val":""},{"key":"shuqijsqdspyurl14","val":""},{"key":"shuqijsqdspbody14","val":""},{"key":"shuqijsrwbody14","val":""},{"key":"shuqijsfxbody14","val":""},{"key":"shuqijsbookurl14","val":""},{"key":"shuqijsbookbody14","val":""},{"key":"shuqijssprwurl14","val":""},{"key":"shuqiuserurl15","val":"https://ocean.shuqireader.com/api/jaccount/accountapi/v1/sapi/account/getBindinfo?userId=2131886208&sqSv=1.0&timestamp=1624100636&sign=a1edb033297b447b32ad4604901921f2&key=sq_h5_gateway"},{"key":"shuqisyurl15","val":"https://render.shuqireader.com/load/resource?sdk=13.1.1&utdid=YM1X8hbgWUgDAIITUQRmYXxB&ustatus=0&first_placeid=111111&net_env=wifi&placeid=111111&user_id=2131886208&sn=02ADBE18C6510B3EC43DF92D1DC1D6AD4C665C20&umidtoken=YM1X8hbgWUgDAIITUQRmYXxB&msv=8.0.0&brand=Apple&imei=AEF6342FCA0AD6692A28D1ABEE0761A22D70D269&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=iOS&ver=210301&mod=iPad4G&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=50337F0E-BF11-4878-BE2F-9C274E5394E8"},{"key":"shuqisybody15","val":"appVer=4.3.6.0&imei=AEF6342FCA0AD6692A28D1ABEE0761A22D70D269&isNewUser=1&params=%7B%22resources%22%3A%7B%22ShuqiVipEntry%22%3A%7B%7D%2C%22personalCardConfig%22%3A%7B%7D%7D%7D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=b77fdf21692f142c3d46d0e5295d3558&sn=02ADBE18C6510B3EC43DF92D1DC1D6AD4C665C20&soft_id=21&timestamp=1624100579&user_id=2131886208&ver=210301"},{"key":"shuqispbody15","val":"_public=skinId%3D999%26idfa%3D50337F0E-BF11-4878-BE2F-9C274E5394E8%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26umidtoken%3DYM1X8hbgWUgDAIITUQRmYXxB%26user_id%3D2131886208%26sn%3D02ADBE18C6510B3EC43DF92D1DC1D6AD4C665C20%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3DAEF6342FCA0AD6692A28D1ABEE0761A22D70D269%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPad4G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYM1X8hbgWUgDAIITUQRmYXxB%26utype%3Dpre_vip%26sdk%3D13.1.1&deliveryId=525&key=sq_app_ad&miniWua=HHnB_dnqU7cm1kwaBdWJ9TRjSGMcVh/Aymj6DH9eQ79ekGYk%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=626&sign=2EA287240CF1A9407924AE6850C9446F&timestamp=1624100602&userId=2131886208&user_id=2131886208&wua=HIVW_mDeda4CFOrW%2B65b35GU1NjeGTppdgoq3eTWQnFz23WdFMJiEGv2sWvkleSfQYcwFTGQcSMW4AaJXyEh4UR6fhsCyRQsKRbSXzNTfqjxzrUPAmYdWWHQuPTYH5yiC/L7DnAj25EuxU%2BkPKyKr8x3i9sxLBWBmLajZVnQGyiiusuaJkX477qoTInoCcipSo3Ts8J/h5moMR7cQwicZpOCo0rOH2uFeEZwZQA7xs15Nd6A%3D"},{"key":"shuqiscbody15","val":""},{"key":"shuqiydbody15","val":""},{"key":"shuqiqdbody15","val":"clientTimestamp=1624100594&position=501&userId=2131886208&signInType=1&wua=HIVW_BTw5SJYnfbssUi%2FpFvYKXPZvWnrT72YFg9MF5nLIMplCIgmDE8NAZB73P69Ifc%2BvXo0Ulj4OgQC%2F%2FhmD2h2%2B00mFMxVUyrgLstELSKzF7NlhSauEbCLWVd%2BtvgNss8WEJ3qhCbmQRniSoP%2FAvbJsWFH0dH1jnfNd1W2FQ7Rmbxt6cd6RCYk8gvb6PnSBFG6Uk5gwSLluYgJyYXUnP%2FqaCaWCH1wjoHsNJ1oQJtYXUQY%3D&ua=&miniWua=HHnB_Nq7zT3%2F3vuerWFB9iT6xK5oUgxCZ97%2FCdd8Nog4noJ4%3D&umidtoken=YM1X8hbgWUgDAIITUQRmYXxB&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&sign=59fdec7f9c76c485801c82b362b3c570&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.1.1%26utdid%3DYM1X8hbgWUgDAIITUQRmYXxB%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2131886208%26sn%3D02ADBE18C6510B3EC43DF92D1DC1D6AD4C665C20%26umidtoken%3DYM1X8hbgWUgDAIITUQRmYXxB%26msv%3D8.0.0%26brand%3DApple%26imei%3DAEF6342FCA0AD6692A28D1ABEE0761A22D70D269%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad4G%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D50337F0E-BF11-4878-BE2F-9C274E5394E8"},{"key":"shuqirwbody15","val":"serviceWorkerOn=1&stopPullRefresh=1&from=ShuqiTab&upf=20368&sdk=13.1.1&utdid=YM1X8hbgWUgDAIITUQRmYXxB&ustatus=0&first_placeid=111111&net_env=wifi&placeid=111111&user_id=2131886208&sn=02ADBE18C6510B3EC43DF92D1DC1D6AD4C665C20&umidtoken=YM1X8hbgWUgDAIITUQRmYXxB&msv=8.0.0&brand=Apple&imei=AEF6342FCA0AD6692A28D1ABEE0761A22D70D269&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=1&ver=210301&mod=iPad4G&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=50337F0E-BF11-4878-BE2F-9C274E5394E8&params=%7B%22resources%22%3A%7B%22ShuqiBsDailyTask%22%3A%7B%7D%7D%7D&userId=2131886208&placeId=111111&timestamp=1624100611&sqSv=1.0&sign=c6ee5bc4aa11dbde03e37c1ce3454666&key=sq_h5_gateway&_public="},{"key":"shuqifxbody15","val":""},{"key":"shuqisprwurl15","val":"https://ocean.shuqireader.com/api/ad/adserver/v1/api/getAdInfo?appVer=4.3.6.0&placeId=111111&platform=iOS&requestSrc=h5&resourceId=626&timestamp=1624100637&user_id=2131886208&sqSv=1.0&sign=587cee37744d95fef540be86bc95bca9&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.1.1%26utdid%3DYM1X8hbgWUgDAIITUQRmYXxB%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2131886208%26sn%3D02ADBE18C6510B3EC43DF92D1DC1D6AD4C665C20%26umidtoken%3DYM1X8hbgWUgDAIITUQRmYXxB%26msv%3D8.0.0%26brand%3DApple%26imei%3DAEF6342FCA0AD6692A28D1ABEE0761A22D70D269%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad4G%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D50337F0E-BF11-4878-BE2F-9C274E5394E8"},{"key":"shuqijlbody15","val":"requestSrc=h5&userId=2131886208&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624100611&sqSv=1.0&sign=694f15db3b6c9c1f17c0ad0836d664b4&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.1.1%26utdid%3DYM1X8hbgWUgDAIITUQRmYXxB%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2131886208%26sn%3D02ADBE18C6510B3EC43DF92D1DC1D6AD4C665C20%26umidtoken%3DYM1X8hbgWUgDAIITUQRmYXxB%26msv%3D8.0.0%26brand%3DApple%26imei%3DAEF6342FCA0AD6692A28D1ABEE0761A22D70D269%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad4G%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D50337F0E-BF11-4878-BE2F-9C274E5394E8"},{"key":"shuqisqjlbody15","val":"src=&userId=2131886208&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624100600&sqSv=1.0&sign=82037c9e558dcb3949f2e590e00f759b&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.1.1%26utdid%3DYM1X8hbgWUgDAIITUQRmYXxB%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2131886208%26sn%3D02ADBE18C6510B3EC43DF92D1DC1D6AD4C665C20%26umidtoken%3DYM1X8hbgWUgDAIITUQRmYXxB%26msv%3D8.0.0%26brand%3DApple%26imei%3DAEF6342FCA0AD6692A28D1ABEE0761A22D70D269%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad4G%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D50337F0E-BF11-4878-BE2F-9C274E5394E8"},{"key":"shuqicjyurl15","val":"https://ocean.shuqireader.com/api/activity/activity/v1/lottery/info?timestamp=1624100641&userId=2131886208&activityId=311&sqSv=1.0&sign=7f6d09bba01bce2f589f8264b1f9e437&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.1.1%26utdid%3DYM1X8hbgWUgDAIITUQRmYXxB%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2131886208%26sn%3D02ADBE18C6510B3EC43DF92D1DC1D6AD4C665C20%26umidtoken%3DYM1X8hbgWUgDAIITUQRmYXxB%26msv%3D8.0.0%26brand%3DApple%26imei%3DAEF6342FCA0AD6692A28D1ABEE0761A22D70D269%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad4G%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D50337F0E-BF11-4878-BE2F-9C274E5394E8"},{"key":"shuqicjcsbody15","val":"_public=skinId%3D999%26idfa%3D50337F0E-BF11-4878-BE2F-9C274E5394E8%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26umidtoken%3DYM1X8hbgWUgDAIITUQRmYXxB%26user_id%3D2131886208%26sn%3D02ADBE18C6510B3EC43DF92D1DC1D6AD4C665C20%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3DAEF6342FCA0AD6692A28D1ABEE0761A22D70D269%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPad4G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYM1X8hbgWUgDAIITUQRmYXxB%26utype%3Dpre_vip%26sdk%3D13.1.1&deliveryId=711&key=sq_app_ad&miniWua=HHnB_rtj05nkA9Gk6FYuVJPtxFMc57RFx02udiGap735zssI%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=703&sign=2D283735D89B271AEDFA51BACB89A963&timestamp=1624100617&userId=2131886208&user_id=2131886208&wua=HIVW_AbXEHGUopI6PnKR5ZhRqW3YnsvN1dSBCMHp5ZKkg58Hzwotqj9oWf7sNAuYExHo8%2BF/yw2H5xL7m7qdL4l9/eqmQafqxgIqIvYHjsIjkUfaRTMMmu0dKKEa9%2BBv%2Be2tGYJV1WeJ1HzvXy0%2Buk3M%2By%2BgMs9YIRoAy7c5OVr3lkpnPTzuODycHpQ%2B4rfNTCChaXP24F3bzT5Wt2fYZeQej9XQeZCCNwRxUM5X0Gi/Cqv0%3D"},{"key":"shuqicjbody15","val":"wua=HIVW_HhLbSKmLzAG0wli9A9An454HCi1HhozorEbBKwRxkqNCySl%2Bf5I5Z0%2BVWYXTIigtWFZNm3CcCTi%2B3zSvTp2%2B9TNw1DY0TZthU6Kt1DAmcff30BTBzuCWFYo7lj%2BPW9WDrSpU4VgH3j3jzDmpu1TzlYrFZQxN3%2BT2PdBhKVALzrEaXzdHBcItcY7p32KzkXafzMRVzPAMIQFurzAED4Gs4wITFISvS3QqTpXLHAnghH8%3D&ua=&userId=2131886208&umidtoken=YM1X8hbgWUgDAIITUQRmYXxB&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&asac=2A20C07RJ9F51AOEFSNHDR&timestamp=1624100623&activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&sqSv=1.0&sign=e9ec4d911f67f6330f318429fe131afc&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.1.1%26utdid%3DYM1X8hbgWUgDAIITUQRmYXxB%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2131886208%26sn%3D02ADBE18C6510B3EC43DF92D1DC1D6AD4C665C20%26umidtoken%3DYM1X8hbgWUgDAIITUQRmYXxB%26msv%3D8.0.0%26brand%3DApple%26imei%3DAEF6342FCA0AD6692A28D1ABEE0761A22D70D269%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad4G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D50337F0E-BF11-4878-BE2F-9C274E5394E8"},{"key":"shuqijsspbody15","val":""},{"key":"shuqijsydurl15","val":""},{"key":"shuqijsydbody15","val":""},{"key":"shuqijsqdbody15","val":""},{"key":"shuqijsqdspyurl15","val":""},{"key":"shuqijsqdspbody15","val":""},{"key":"shuqijsrwbody15","val":""},{"key":"shuqijsfxbody15","val":""},{"key":"shuqijsbookurl15","val":""},{"key":"shuqijsbookbody15","val":""},{"key":"shuqijssprwurl15","val":""},{"key":"shuqiuserurl16","val":""},{"key":"shuqisyurl16","val":""},{"key":"shuqisybody16","val":""},{"key":"shuqispbody16","val":""},{"key":"shuqiscbody16","val":""},{"key":"shuqiydbody16","val":""},{"key":"shuqiqdbody16","val":""},{"key":"shuqirwbody16","val":""},{"key":"shuqifxbody16","val":""},{"key":"shuqisprwurl16","val":""},{"key":"shuqijlbody16","val":""},{"key":"shuqisqjlbody16","val":""},{"key":"shuqicjyurl16","val":""},{"key":"shuqicjcsbody16","val":""},{"key":"shuqicjbody16","val":""},{"key":"shuqijsspbody16","val":""},{"key":"shuqijsydurl16","val":""},{"key":"shuqijsydbody16","val":""},{"key":"shuqijsqdbody16","val":""},{"key":"shuqijsqdspyurl16","val":""},{"key":"shuqijsqdspbody16","val":""},{"key":"shuqijsrwbody16","val":""},{"key":"shuqijsfxbody16","val":""},{"key":"shuqijsbookurl16","val":""},{"key":"shuqijsbookbody16","val":""},{"key":"shuqijssprwurl16","val":""},{"key":"shuqiuserurl17","val":""},{"key":"shuqisyurl17","val":""},{"key":"shuqisybody17","val":""},{"key":"shuqispbody17","val":""},{"key":"shuqiscbody17","val":""},{"key":"shuqiydbody17","val":""},{"key":"shuqiqdbody17","val":""},{"key":"shuqirwbody17","val":""},{"key":"shuqifxbody17","val":""},{"key":"shuqisprwurl17","val":""},{"key":"shuqijlbody17","val":""},{"key":"shuqisqjlbody17","val":""},{"key":"shuqicjyurl17","val":""},{"key":"shuqicjcsbody17","val":""},{"key":"shuqicjbody17","val":""},{"key":"shuqijsspbody17","val":""},{"key":"shuqijsydurl17","val":""},{"key":"shuqijsydbody17","val":""},{"key":"shuqijsqdbody17","val":""},{"key":"shuqijsqdspyurl17","val":""},{"key":"shuqijsqdspbody17","val":""},{"key":"shuqijsrwbody17","val":""},{"key":"shuqijsfxbody17","val":""},{"key":"shuqijsbookurl17","val":""},{"key":"shuqijsbookbody17","val":""},{"key":"shuqijssprwurl17","val":""},{"key":"shuqiuserurl18","val":""},{"key":"shuqisyurl18","val":""},{"key":"shuqisybody18","val":""},{"key":"shuqispbody18","val":""},{"key":"shuqiscbody18","val":""},{"key":"shuqiydbody18","val":""},{"key":"shuqiqdbody18","val":""},{"key":"shuqirwbody18","val":""},{"key":"shuqifxbody18","val":""},{"key":"shuqisprwurl18","val":""},{"key":"shuqijlbody18","val":""},{"key":"shuqisqjlbody18","val":""},{"key":"shuqicjyurl18","val":""},{"key":"shuqicjcsbody18","val":""},{"key":"shuqicjbody18","val":""},{"key":"shuqijsspbody18","val":""},{"key":"shuqijsydurl18","val":""},{"key":"shuqijsydbody18","val":""},{"key":"shuqijsqdbody18","val":""},{"key":"shuqijsqdspyurl18","val":""},{"key":"shuqijsqdspbody18","val":""},{"key":"shuqijsrwbody18","val":""},{"key":"shuqijsfxbody18","val":""},{"key":"shuqijsbookurl18","val":""},{"key":"shuqijsbookbody18","val":""},{"key":"shuqijssprwurl18","val":""},{"key":"shuqiuserurl19","val":""},{"key":"shuqisyurl19","val":""},{"key":"shuqisybody19","val":""},{"key":"shuqispbody19","val":""},{"key":"shuqiscbody19","val":""},{"key":"shuqiydbody19","val":""},{"key":"shuqiqdbody19","val":""},{"key":"shuqirwbody19","val":""},{"key":"shuqifxbody19","val":""},{"key":"shuqisprwurl19","val":""},{"key":"shuqijlbody19","val":""},{"key":"shuqisqjlbody19","val":""},{"key":"shuqicjyurl19","val":""},{"key":"shuqicjcsbody19","val":""},{"key":"shuqicjbody19","val":""},{"key":"shuqijsspbody19","val":""},{"key":"shuqijsydurl19","val":""},{"key":"shuqijsydbody19","val":""},{"key":"shuqijsqdbody19","val":""},{"key":"shuqijsqdspyurl19","val":""},{"key":"shuqijsqdspbody19","val":""},{"key":"shuqijsrwbody19","val":""},{"key":"shuqijsfxbody19","val":""},{"key":"shuqijsbookurl19","val":""},{"key":"shuqijsbookbody19","val":""},{"key":"shuqijssprwurl19","val":""},{"key":"shuqiuserurl20","val":""},{"key":"shuqisyurl20","val":""},{"key":"shuqisybody20","val":""},{"key":"shuqispbody20","val":""},{"key":"shuqiscbody20","val":""},{"key":"shuqiydbody20","val":""},{"key":"shuqiqdbody20","val":""},{"key":"shuqirwbody20","val":""},{"key":"shuqifxbody20","val":""},{"key":"shuqisprwurl20","val":""},{"key":"shuqijlbody20","val":""},{"key":"shuqisqjlbody20","val":""},{"key":"shuqicjyurl20","val":""},{"key":"shuqicjcsbody20","val":""},{"key":"shuqicjbody20","val":""},{"key":"shuqijsspbody20","val":""},{"key":"shuqijsydurl20","val":""},{"key":"shuqijsydbody20","val":""},{"key":"shuqijsqdbody20","val":""},{"key":"shuqijsqdspyurl20","val":""},{"key":"shuqijsqdspbody20","val":""},{"key":"shuqijsrwbody20","val":""},{"key":"shuqijsfxbody20","val":""},{"key":"shuqijsbookurl20","val":""},{"key":"shuqijsbookbody20","val":""},{"key":"shuqijssprwurl20","val":""}],"sessions":[],"isLoaded":true};
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
