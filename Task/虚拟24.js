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
const COOKIE = {"id":"shuqi","name":"书旗小说APP","keys":["shuqiuserurl","shuqisyurl","shuqisybody","shuqispbody","shuqiscbody","shuqiydbody","shuqiqdbody","shuqirwbody","shuqifxbody","shuqisprwurl","shuqijlbody","shuqisqjlbody","shuqicjyurl","shuqicjcsbody","shuqicjbody","shuqijsspbody","shuqijsydurl","shuqijsydbody","shuqijsqdbody","shuqijsqdspyurl","shuqijsqdspbody","shuqijsrwbody","shuqijsfxbody","shuqijsbookurl","shuqijsbookbody","shuqijssprwurl","shuqiuserurl2","shuqisyurl2","shuqisybody2","shuqispbody2","shuqiscbody2","shuqiydbody2","shuqiqdbody2","shuqirwbody2","shuqifxbody2","shuqisprwurl2","shuqijlbody2","shuqisqjlbody2","shuqicjyurl2","shuqicjcsbody2","shuqicjbody2","shuqijsspbody2","shuqijsydurl2","shuqijsydbody2","shuqijsqdbody2","shuqijsqdspyurl2","shuqijsqdspbody2","shuqijsrwbody2","shuqijsfxbody2","shuqijsbookurl2","shuqijsbookbody2","shuqijssprwurl2","shuqiuserurl3","shuqisyurl3","shuqisybody3","shuqispbody3","shuqiscbody3","shuqiydbody3","shuqiqdbody3","shuqirwbody3","shuqifxbody3","shuqisprwurl3","shuqijlbody3","shuqisqjlbody3","shuqicjyurl3","shuqicjcsbody3","shuqicjbody3","shuqijsspbody3","shuqijsydurl3","shuqijsydbody3","shuqijsqdbody3","shuqijsqdspyurl3","shuqijsqdspbody3","shuqijsrwbody3","shuqijsfxbody3","shuqijsbookurl3","shuqijsbookbody3","shuqijssprwurl3","shuqiuserurl4","shuqisyurl4","shuqisybody4","shuqispbody4","shuqiscbody4","shuqiydbody4","shuqiqdbody4","shuqirwbody4","shuqifxbody4","shuqisprwurl4","shuqijlbody4","shuqisqjlbody4","shuqicjyurl4","shuqicjcsbody4","shuqicjbody4","shuqijsspbody4","shuqijsydurl4","shuqijsydbody4","shuqijsqdbody4","shuqijsqdspyurl4","shuqijsqdspbody4","shuqijsrwbody4","shuqijsfxbody4","shuqijsbookurl4","shuqijsbookbody4","shuqijssprwurl4","shuqiuserurl5","shuqisyurl5","shuqisybody5","shuqispbody5","shuqiscbody5","shuqiydbody5","shuqiqdbody5","shuqirwbody5","shuqifxbody5","shuqisprwurl5","shuqijlbody5","shuqisqjlbody5","shuqicjyurl5","shuqicjcsbody5","shuqicjbody5","shuqijsspbody5","shuqijsydurl5","shuqijsydbody5","shuqijsqdbody5","shuqijsqdspyurl5","shuqijsqdspbody5","shuqijsrwbody5","shuqijsfxbody5","shuqijsbookurl5","shuqijsbookbody5","shuqijssprwurl5","shuqiuserurl6","shuqisyurl6","shuqisybody6","shuqispbody6","shuqiscbody6","shuqiydbody6","shuqiqdbody6","shuqirwbody6","shuqifxbody6","shuqisprwurl6","shuqijlbody6","shuqisqjlbody6","shuqicjyurl6","shuqicjcsbody6","shuqicjbody6","shuqijsspbody6","shuqijsydurl6","shuqijsydbody6","shuqijsqdbody6","shuqijsqdspyurl6","shuqijsqdspbody6","shuqijsrwbody6","shuqijsfxbody6","shuqijsbookurl6","shuqijsbookbody6","shuqijssprwurl6","shuqiuserurl7","shuqisyurl7","shuqisybody7","shuqispbody7","shuqiscbody7","shuqiydbody7","shuqiqdbody7","shuqirwbody7","shuqifxbody7","shuqisprwurl7","shuqijlbody7","shuqisqjlbody7","shuqicjyurl7","shuqicjcsbody7","shuqicjbody7","shuqijsspbody7","shuqijsydurl7","shuqijsydbody7","shuqijsqdbody7","shuqijsqdspyurl7","shuqijsqdspbody7","shuqijsrwbody7","shuqijsfxbody7","shuqijsbookurl7","shuqijsbookbody7","shuqijssprwurl7","shuqiuserurl8","shuqisyurl8","shuqisybody8","shuqispbody8","shuqiscbody8","shuqiydbody8","shuqiqdbody8","shuqirwbody8","shuqifxbody8","shuqisprwurl8","shuqijlbody8","shuqisqjlbody8","shuqicjyurl8","shuqicjcsbody8","shuqicjbody8","shuqijsspbody8","shuqijsydurl8","shuqijsydbody8","shuqijsqdbody8","shuqijsqdspyurl8","shuqijsqdspbody8","shuqijsrwbody8","shuqijsfxbody8","shuqijsbookurl8","shuqijsbookbody8","shuqijssprwurl8","shuqiuserurl9","shuqisyurl9","shuqisybody9","shuqispbody9","shuqiscbody9","shuqiydbody9","shuqiqdbody9","shuqirwbody9","shuqifxbody9","shuqisprwurl9","shuqijlbody9","shuqisqjlbody9","shuqicjyurl9","shuqicjcsbody9","shuqicjbody9","shuqijsspbody9","shuqijsydurl9","shuqijsydbody9","shuqijsqdbody9","shuqijsqdspyurl9","shuqijsqdspbody9","shuqijsrwbody9","shuqijsfxbody9","shuqijsbookurl9","shuqijsbookbody9","shuqijssprwurl9","shuqiuserurl10","shuqisyurl10","shuqisybody10","shuqispbody10","shuqiscbody10","shuqiydbody10","shuqiqdbody10","shuqirwbody10","shuqifxbody10","shuqisprwurl10","shuqijlbody10","shuqisqjlbody10","shuqicjyurl10","shuqicjcsbody10","shuqicjbody10","shuqijsspbody10","shuqijsydurl10","shuqijsydbody10","shuqijsqdbody10","shuqijsqdspyurl10","shuqijsqdspbody10","shuqijsrwbody10","shuqijsfxbody10","shuqijsbookurl10","shuqijsbookbody10","shuqijssprwurl10","shuqiuserurl11","shuqisyurl11","shuqisybody11","shuqispbody11","shuqiscbody11","shuqiydbody11","shuqiqdbody11","shuqirwbody11","shuqifxbody11","shuqisprwurl11","shuqijlbody11","shuqisqjlbody11","shuqicjyurl11","shuqicjcsbody11","shuqicjbody11","shuqijsspbody11","shuqijsydurl11","shuqijsydbody11","shuqijsqdbody11","shuqijsqdspyurl11","shuqijsqdspbody11","shuqijsrwbody11","shuqijsfxbody11","shuqijsbookurl11","shuqijsbookbody11","shuqijssprwurl11","shuqiuserurl12","shuqisyurl12","shuqisybody12","shuqispbody12","shuqiscbody12","shuqiydbody12","shuqiqdbody12","shuqirwbody12","shuqifxbody12","shuqisprwurl12","shuqijlbody12","shuqisqjlbody12","shuqicjyurl12","shuqicjcsbody12","shuqicjbody12","shuqijsspbody12","shuqijsydurl12","shuqijsydbody12","shuqijsqdbody12","shuqijsqdspyurl12","shuqijsqdspbody12","shuqijsrwbody12","shuqijsfxbody12","shuqijsbookurl12","shuqijsbookbody12","shuqijssprwurl12","shuqiuserurl13","shuqisyurl13","shuqisybody13","shuqispbody13","shuqiscbody13","shuqiydbody13","shuqiqdbody13","shuqirwbody13","shuqifxbody13","shuqisprwurl13","shuqijlbody13","shuqisqjlbody13","shuqicjyurl13","shuqicjcsbody13","shuqicjbody13","shuqijsspbody13","shuqijsydurl13","shuqijsydbody13","shuqijsqdbody13","shuqijsqdspyurl13","shuqijsqdspbody13","shuqijsrwbody13","shuqijsfxbody13","shuqijsbookurl13","shuqijsbookbody13","shuqijssprwurl13","shuqiuserurl14","shuqisyurl14","shuqisybody14","shuqispbody14","shuqiscbody14","shuqiydbody14","shuqiqdbody14","shuqirwbody14","shuqifxbody14","shuqisprwurl14","shuqijlbody14","shuqisqjlbody14","shuqicjyurl14","shuqicjcsbody14","shuqicjbody14","shuqijsspbody14","shuqijsydurl14","shuqijsydbody14","shuqijsqdbody14","shuqijsqdspyurl14","shuqijsqdspbody14","shuqijsrwbody14","shuqijsfxbody14","shuqijsbookurl14","shuqijsbookbody14","shuqijssprwurl14","shuqiuserurl15","shuqisyurl15","shuqisybody15","shuqispbody15","shuqiscbody15","shuqiydbody15","shuqiqdbody15","shuqirwbody15","shuqifxbody15","shuqisprwurl15","shuqijlbody15","shuqisqjlbody15","shuqicjyurl15","shuqicjcsbody15","shuqicjbody15","shuqijsspbody15","shuqijsydurl15","shuqijsydbody15","shuqijsqdbody15","shuqijsqdspyurl15","shuqijsqdspbody15","shuqijsrwbody15","shuqijsfxbody15","shuqijsbookurl15","shuqijsbookbody15","shuqijssprwurl15","shuqiuserurl16","shuqisyurl16","shuqisybody16","shuqispbody16","shuqiscbody16","shuqiydbody16","shuqiqdbody16","shuqirwbody16","shuqifxbody16","shuqisprwurl16","shuqijlbody16","shuqisqjlbody16","shuqicjyurl16","shuqicjcsbody16","shuqicjbody16","shuqijsspbody16","shuqijsydurl16","shuqijsydbody16","shuqijsqdbody16","shuqijsqdspyurl16","shuqijsqdspbody16","shuqijsrwbody16","shuqijsfxbody16","shuqijsbookurl16","shuqijsbookbody16","shuqijssprwurl16","shuqiuserurl17","shuqisyurl17","shuqisybody17","shuqispbody17","shuqiscbody17","shuqiydbody17","shuqiqdbody17","shuqirwbody17","shuqifxbody17","shuqisprwurl17","shuqijlbody17","shuqisqjlbody17","shuqicjyurl17","shuqicjcsbody17","shuqicjbody17","shuqijsspbody17","shuqijsydurl17","shuqijsydbody17","shuqijsqdbody17","shuqijsqdspyurl17","shuqijsqdspbody17","shuqijsrwbody17","shuqijsfxbody17","shuqijsbookurl17","shuqijsbookbody17","shuqijssprwurl17","shuqiuserurl18","shuqisyurl18","shuqisybody18","shuqispbody18","shuqiscbody18","shuqiydbody18","shuqiqdbody18","shuqirwbody18","shuqifxbody18","shuqisprwurl18","shuqijlbody18","shuqisqjlbody18","shuqicjyurl18","shuqicjcsbody18","shuqicjbody18","shuqijsspbody18","shuqijsydurl18","shuqijsydbody18","shuqijsqdbody18","shuqijsqdspyurl18","shuqijsqdspbody18","shuqijsrwbody18","shuqijsfxbody18","shuqijsbookurl18","shuqijsbookbody18","shuqijssprwurl18","shuqiuserurl19","shuqisyurl19","shuqisybody19","shuqispbody19","shuqiscbody19","shuqiydbody19","shuqiqdbody19","shuqirwbody19","shuqifxbody19","shuqisprwurl19","shuqijlbody19","shuqisqjlbody19","shuqicjyurl19","shuqicjcsbody19","shuqicjbody19","shuqijsspbody19","shuqijsydurl19","shuqijsydbody19","shuqijsqdbody19","shuqijsqdspyurl19","shuqijsqdspbody19","shuqijsrwbody19","shuqijsfxbody19","shuqijsbookurl19","shuqijsbookbody19","shuqijssprwurl19","shuqiuserurl20","shuqisyurl20","shuqisybody20","shuqispbody20","shuqiscbody20","shuqiydbody20","shuqiqdbody20","shuqirwbody20","shuqifxbody20","shuqisprwurl20","shuqijlbody20","shuqisqjlbody20","shuqicjyurl20","shuqicjcsbody20","shuqicjbody20","shuqijsspbody20","shuqijsydurl20","shuqijsydbody20","shuqijsqdbody20","shuqijsqdspyurl20","shuqijsqdspbody20","shuqijsrwbody20","shuqijsfxbody20","shuqijsbookurl20","shuqijsbookbody20","shuqijssprwurl20"],"author":"@ziye","settings":[{"id":"shuqiSuffix","name":"当前账号","val":"13","type":"number","desc":"当前抓取ck记录的账号序号，如：1、2、3、"},{"id":"shuqiCount","name":"账号个数","val":"15","type":"number","desc":"指定任务最多跑几个账号，根据抓取的账号数据个数来设值"},{"id":"shuqiXH","name":"循环获取CK","val":"1","type":"number","desc":"0关闭 1开启,默认关闭"},{"id":"shuqiSC","name":"单刷时长控制","val":"0","type":"number","desc":"0关闭 1开启,默认关闭"},{"id":"shuqiTXTX","name":"提现提醒","val":"10","type":"number","desc":"0关闭 设置余额大于多少提醒"},{"id":"shuqinotifyttt","name":"推送控制","val":"1","type":"number","desc":"0关闭，1推送,默认12点以及23点推送"},{"id":"shuqinotifyInterval","name":"通知控制","val":"2","type":"number","desc":"0关闭，1为 所有通知，2为 12，23 点通知，3为 6，12，18，23 点通知 "},{"id":"shuqiMinutes","name":"推送-通知 分钟控制","val":"59","type":"number","desc":"推送以及通知控制在什么分钟段，可设置0-59,默认0到10"}],"repo":"https://cdn.jsdelivr.net/gh/ziye888/JavaScript@main/Task/shuqi.js","icons":["https://cdn.jsdelivr.net/gh/ziye888/JavaScript@main/Task/shuqi.png","https://cdn.jsdelivr.net/gh/ziye888/JavaScript@main/Task/shuqi.png"],"script":"https://cdn.jsdelivr.net/gh/ziye888/JavaScript@main/Task/shuqi.js","icon":"https://cdn.jsdelivr.net/gh/ziye888/JavaScript@main/Task/shuqi.png","favIcon":"mdi-star","favIconColor":"primary","datas":[{"key":"shuqiuserurl","val":"https://ocean.shuqireader.com/api/jaccount/accountapi/v1/sapi/account/getBindinfo?userId=2129963624&sqSv=1.0&timestamp=1624095908&sign=77f8766d43e94ceffa2f18ed6a03bdf0&key=sq_h5_gateway"},{"key":"shuqisyurl","val":"https://render.shuqireader.com/load/resource?sdk=13.4.1&utdid=YM28b7HPw0kDAD5JC0it5Lia&ustatus=0&first_placeid=111111&net_env=wifi&placeid=111111&user_id=2129963624&sn=32A38BC2C91102C76241E6DF402DB6C0A41F8B28&umidtoken=YM28b7HPw0kDAD5JC0it5Lia&msv=8.0.0&brand=Apple&imei=0A280DBC442F6145416BF4E2F2D9B72FEFDA9F5F&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=iOS&ver=210301&mod=iPhone11ProMax&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=FEC9C727-21D7-4588-9AAA-1FF66BBF7360"},{"key":"shuqisybody","val":"appVer=4.3.6.0&imei=0A280DBC442F6145416BF4E2F2D9B72FEFDA9F5F&isNewUser=1&params=%7B%22resources%22%3A%7B%22ShuqiVipEntry%22%3A%7B%7D%2C%22personalCardConfig%22%3A%7B%7D%7D%7D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=2c92b820b615edc5b429d8c755b6ba66&sn=32A38BC2C91102C76241E6DF402DB6C0A41F8B28&soft_id=21&timestamp=1624095857&user_id=2129963624&ver=210301"},{"key":"shuqispbody","val":"_public=skinId%3D999%26idfa%3DFEC9C727-21D7-4588-9AAA-1FF66BBF7360%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26umidtoken%3DYM28b7HPw0kDAD5JC0it5Lia%26user_id%3D2129963624%26sn%3D32A38BC2C91102C76241E6DF402DB6C0A41F8B28%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D0A280DBC442F6145416BF4E2F2D9B72FEFDA9F5F%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhone11ProMax%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYM28b7HPw0kDAD5JC0it5Lia%26utype%3Dpre_vip%26sdk%3D13.4.1&deliveryId=525&key=sq_app_ad&miniWua=HHnB_Gg/wPoivAo0YPeckMn5zTHbTDpMn7V8%2BwwwFGvjKD5Q%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=626&sign=8AC25F7CC8B07D214F2B8DA6B4C4A6B2&timestamp=1624095877&userId=2129963624&user_id=2129963624&wua=HIVW_M%2BDeHdEPQho2QgowZiDjxGXb5JtN7CLkz%2BQitOQNArnErxGH76ac8A7f9ypL/ix4QWCRzdpK1Be4T7z3PnARJJiacvmaxHbwFb%2BtojY0g3Ctln11iivQNkkAunN7qdrhiW%2BoC4PvYJImF4joRPg6vqOCERiifPvOPSbweOdl2NE7svEuwfwGgSpmDLTfrVHPASq1YvfRnXgkXH5sl2UpOJChCdjo9CeNTOPUonD4%2B4U%3D"},{"key":"shuqiscbody","val":""},{"key":"shuqiydbody","val":""},{"key":"shuqiqdbody","val":"clientTimestamp=1624095870&position=501&userId=2129963624&signInType=1&wua=HIVW_6I6S51lTK%2FUAlI6km9xek88%2FTvhBelubr8AjiopsyaxNwh2QIenqUJWIOet93gjHB8LLVs8CDBvXz%2Bnqy1TXr85bo7HCllf%2FTs2%2BPLNY0%2Bf4FyNAP6MCzNN%2FX%2FMQ9hBakpJ0PqRVjgwcqv4qW%2BTvQd0x2IIVE8dJkbhndwDZypN8J%2FvYC%2Bzp1ovBzOgiUbmylMGSEARWYVgyTYU25TwqPDzASswn3ZZMWzyONeb1Ll4%3D&ua=&miniWua=HHnB_akpyhvtP8SSSZtRKb5Pw6ntQDcV7n4FuJZNts7jbD2I%3D&umidtoken=YM28b7HPw0kDAD5JC0it5Lia&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&sign=1dedb0df2825e31d03ee40c85c3966f4&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.4.1%26utdid%3DYM28b7HPw0kDAD5JC0it5Lia%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2129963624%26sn%3D32A38BC2C91102C76241E6DF402DB6C0A41F8B28%26umidtoken%3DYM28b7HPw0kDAD5JC0it5Lia%26msv%3D8.0.0%26brand%3DApple%26imei%3D0A280DBC442F6145416BF4E2F2D9B72FEFDA9F5F%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone11ProMax%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DFEC9C727-21D7-4588-9AAA-1FF66BBF7360"},{"key":"shuqirwbody","val":"serviceWorkerOn=1&stopPullRefresh=1&from=ShuqiTab&upf=20368&sdk=13.4.1&utdid=YM28b7HPw0kDAD5JC0it5Lia&ustatus=0&first_placeid=111111&net_env=wifi&placeid=111111&user_id=2129963624&sn=32A38BC2C91102C76241E6DF402DB6C0A41F8B28&umidtoken=YM28b7HPw0kDAD5JC0it5Lia&msv=8.0.0&brand=Apple&imei=0A280DBC442F6145416BF4E2F2D9B72FEFDA9F5F&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&session=&skinColor=23B383&platform=1&ver=210301&mod=iPhone11ProMax&statusBarHeight=44.000000&skinVersion=1&wh=1242x2688&soft_id=21&utype=pre_vip&skinId=999&idfa=FEC9C727-21D7-4588-9AAA-1FF66BBF7360&params=%7B%22resources%22%3A%7B%22ShuqiBsDailyTask%22%3A%7B%7D%7D%7D&userId=2129963624&placeId=111111&timestamp=1624095883&sqSv=1.0&sign=09be7032fbf456f13143715b36174e94&key=sq_h5_gateway&_public="},{"key":"shuqifxbody","val":""},{"key":"shuqisprwurl","val":"https://ocean.shuqireader.com/api/ad/adserver/v1/api/getAdInfo?appVer=4.3.6.0&placeId=111111&platform=iOS&requestSrc=h5&resourceId=626&timestamp=1624095907&user_id=2129963624&sqSv=1.0&sign=50f4ce6d2b5359b5e98f4213123dbfba&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.4.1%26utdid%3DYM28b7HPw0kDAD5JC0it5Lia%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2129963624%26sn%3D32A38BC2C91102C76241E6DF402DB6C0A41F8B28%26umidtoken%3DYM28b7HPw0kDAD5JC0it5Lia%26msv%3D8.0.0%26brand%3DApple%26imei%3D0A280DBC442F6145416BF4E2F2D9B72FEFDA9F5F%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone11ProMax%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DFEC9C727-21D7-4588-9AAA-1FF66BBF7360"},{"key":"shuqijlbody","val":"requestSrc=h5&userId=2129963624&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624095883&sqSv=1.0&sign=b03ae4f8b3a80912f7fc31c2d22333ab&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.4.1%26utdid%3DYM28b7HPw0kDAD5JC0it5Lia%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2129963624%26sn%3D32A38BC2C91102C76241E6DF402DB6C0A41F8B28%26umidtoken%3DYM28b7HPw0kDAD5JC0it5Lia%26msv%3D8.0.0%26brand%3DApple%26imei%3D0A280DBC442F6145416BF4E2F2D9B72FEFDA9F5F%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone11ProMax%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DFEC9C727-21D7-4588-9AAA-1FF66BBF7360"},{"key":"shuqisqjlbody","val":"src=&userId=2129963624&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624095874&sqSv=1.0&sign=ebb327b46e5c9ac715fcbaa65928d0b1&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.4.1%26utdid%3DYM28b7HPw0kDAD5JC0it5Lia%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2129963624%26sn%3D32A38BC2C91102C76241E6DF402DB6C0A41F8B28%26umidtoken%3DYM28b7HPw0kDAD5JC0it5Lia%26msv%3D8.0.0%26brand%3DApple%26imei%3D0A280DBC442F6145416BF4E2F2D9B72FEFDA9F5F%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone11ProMax%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DFEC9C727-21D7-4588-9AAA-1FF66BBF7360"},{"key":"shuqicjyurl","val":"https://ocean.shuqireader.com/api/activity/activity/v1/lottery/info?timestamp=1624095909&userId=2129963624&activityId=311&sqSv=1.0&sign=127af3be36d322ab30b738607354f085&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.4.1%26utdid%3DYM28b7HPw0kDAD5JC0it5Lia%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2129963624%26sn%3D32A38BC2C91102C76241E6DF402DB6C0A41F8B28%26umidtoken%3DYM28b7HPw0kDAD5JC0it5Lia%26msv%3D8.0.0%26brand%3DApple%26imei%3D0A280DBC442F6145416BF4E2F2D9B72FEFDA9F5F%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone11ProMax%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DFEC9C727-21D7-4588-9AAA-1FF66BBF7360"},{"key":"shuqicjcsbody","val":"_public=skinId%3D999%26idfa%3DFEC9C727-21D7-4588-9AAA-1FF66BBF7360%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26umidtoken%3DYM28b7HPw0kDAD5JC0it5Lia%26user_id%3D2129963624%26sn%3D32A38BC2C91102C76241E6DF402DB6C0A41F8B28%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D0A280DBC442F6145416BF4E2F2D9B72FEFDA9F5F%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhone11ProMax%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYM28b7HPw0kDAD5JC0it5Lia%26utype%3Dpre_vip%26sdk%3D13.4.1&deliveryId=711&key=sq_app_ad&miniWua=HHnB_O5ZZJvM10mAuoLJR6ZCYh9h0tQusT2ZO18sUUy4JMIs%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=703&sign=1634686FA6DE70D1198378EE1FB7A1FC&timestamp=1624095888&userId=2129963624&user_id=2129963624&wua=HIVW_c/cSM91sFYUva1gZ70liL3SufojfPywUCqx%2Bj2Q1ZPLBSjaJm87cg6BI56SC2Wv4Tl1DEOP7m2Fr7SIaUnEf9Y5/WNGQPj96ucW5QPfcgJMVLqc%2BmFxkEIO97EKg%2BCM8IcZgzJulBOR5WpGGr0JN81472d534ATVJn1kuMgEs5ea2AA%2BT/4mshdYMq/Uuo79Wj79Zqv6j22Zg3u7da70zjgy/kVvFtMJpmdisEhIJRs%3D"},{"key":"shuqicjbody","val":"wua=HIVW_6qZWDtw%2Bp1mEZw2IFFZEAdxiEPM%2FAiQjAKjk6ltpDY36tRWS34%2BlmrRbpF1hFLcqRbt2jf7%2F2KMjIi8SVcPvQBrDEu5BfRaHo2KUsD6BLJggg3vM1XeVimxXyMath9yHmBTd9QzNileheQNEyb0q2%2FgDQr5MwwCKWC8LQXMmUr%2BT3So5uP7UeSBugMNQSN1pcVfEGK1b0GGyXKCoN5fzvuP3PGOQty%2Ft%2B5KHy%2FhoPc4%3D&ua=&userId=2129963624&umidtoken=YM28b7HPw0kDAD5JC0it5Lia&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&asac=2A20C07RJ9F51AOEFSNHDR&timestamp=1624095894&activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&sqSv=1.0&sign=07cd1a6528c87275775548ff3e7d6618&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.4.1%26utdid%3DYM28b7HPw0kDAD5JC0it5Lia%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2129963624%26sn%3D32A38BC2C91102C76241E6DF402DB6C0A41F8B28%26umidtoken%3DYM28b7HPw0kDAD5JC0it5Lia%26msv%3D8.0.0%26brand%3DApple%26imei%3D0A280DBC442F6145416BF4E2F2D9B72FEFDA9F5F%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone11ProMax%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DFEC9C727-21D7-4588-9AAA-1FF66BBF7360"},{"key":"shuqijsspbody","val":""},{"key":"shuqijsydurl","val":""},{"key":"shuqijsydbody","val":""},{"key":"shuqijsqdbody","val":""},{"key":"shuqijsqdspyurl","val":""},{"key":"shuqijsqdspbody","val":""},{"key":"shuqijsrwbody","val":""},{"key":"shuqijsfxbody","val":""},{"key":"shuqijsbookurl","val":""},{"key":"shuqijsbookbody","val":""},{"key":"shuqijssprwurl","val":""},{"key":"shuqiuserurl2","val":"https://ocean.shuqireader.com/api/jaccount/accountapi/v1/sapi/account/getBindinfo?userId=2131685389&sqSv=1.0&timestamp=1624096121&sign=7194e214b54dc3b903c3cf1ec613c10f&key=sq_h5_gateway"},{"key":"shuqisyurl2","val":"https://render.shuqireader.com/load/resource?sdk=13.3.1&utdid=YM1Vb0nsOoADAKdvgCxmpfoK&ustatus=0&first_placeid=111111&net_env=3g&placeid=111111&user_id=2131685389&sn=3E34B50E4B994CB35061CCEBDBF11834D82B2A55&umidtoken=YM1Vb0nsOoADAKdvgCxmpfoK&msv=8.0.0&brand=Apple&imei=93A59458135BC55ACF40351915556D86060D672C&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=iOS&ver=210301&mod=iPhone7plus&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=9A50CB9A-106D-455E-927C-9A6C44113CEE"},{"key":"shuqisybody2","val":"appVer=4.3.6.0&imei=93A59458135BC55ACF40351915556D86060D672C&isNewUser=1&params=%7B%22resources%22%3A%7B%22ShuqiVipEntry%22%3A%7B%7D%2C%22personalCardConfig%22%3A%7B%7D%7D%7D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=41e6d9ff381864f2b692ba002784f3e7&sn=3E34B50E4B994CB35061CCEBDBF11834D82B2A55&soft_id=21&timestamp=1624096172&user_id=2131685389&ver=210301"},{"key":"shuqispbody2","val":"_public=utype%3Dpre_vip%26idfa%3D9A50CB9A-106D-455E-927C-9A6C44113CEE%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26umidtoken%3DYM1Vb0nsOoADAKdvgCxmpfoK%26user_id%3D2131685389%26sn%3D3E34B50E4B994CB35061CCEBDBF11834D82B2A55%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D93A59458135BC55ACF40351915556D86060D672C%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhone7plus%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26utdid%3DYM1Vb0nsOoADAKdvgCxmpfoK%26soft_id%3D21%26sdk%3D13.3.1&deliveryId=525&key=sq_app_ad&miniWua=HHnB_knDY7joY/d6YS1eonSN6MszR2LY1lNErsWFzGbfGdlE%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=626&sign=C14E1F7D112ABD08505B6A7429AF1EB7&timestamp=1624096031&userId=2131685389&user_id=2131685389&wua=HIVW_VzOBJ7%2BuHZMImQdL%2Bvvu0f/po6Uzx4dCsyI/GeatLI01A3aaY3fVgZLf9vRCPzqRDf7nOzTsMQQsW45EBvrTNBkCszsyATMTDLjQDSxLpcGeftn/0tGIDOxCuG2CrEfL7ZmmpxrPEIigNrxJeEPoOrDlJ8aWng5GrIk1bo%2B712Zz7c/Refc3UVQ3f3Z3KyWCMlJ10mJLjlNSyAGfdPXWJZfiz4ahhYYpfjEpMU42de0%3D"},{"key":"shuqiscbody2","val":""},{"key":"shuqiydbody2","val":""},{"key":"shuqiqdbody2","val":"clientTimestamp=1624096023&position=501&userId=2131685389&signInType=1&wua=HIVW_ODxRRg%2F0GnjKa%2FKCIqxrAcJyNEH%2Bi3KmXL2RkKveFeXlWrGt3F5bDYNe1mR8nyNx%2FMK%2BojG%2Ft7ScylN6sS6nHXR9%2BRbM9xiBnegnU7UwvBrPD6ESeenZmydNvjrS15KzzUyh9J%2FkXI6dPK7giLYPlbjObptwdWn1v%2B6xJ7L89T7CkTCKhn%2Bd67eX56Lz8xhjls5%2BGLW4PPz7P2o69WOeTgaodw0ipBYoJuYl1S8OI2k%3D&ua=&miniWua=HHnB_Uva0dqDVwwWFzYO5cgYtGI%2Bnv99zSCks0wwP2z5CHVI%3D&umidtoken=YM1Vb0nsOoADAKdvgCxmpfoK&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&sign=dc5e6c982904dd5f94d05634445f949a&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.3.1%26utdid%3DYM1Vb0nsOoADAKdvgCxmpfoK%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2131685389%26sn%3D3E34B50E4B994CB35061CCEBDBF11834D82B2A55%26umidtoken%3DYM1Vb0nsOoADAKdvgCxmpfoK%26msv%3D8.0.0%26brand%3DApple%26imei%3D93A59458135BC55ACF40351915556D86060D672C%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone7plus%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D9A50CB9A-106D-455E-927C-9A6C44113CEE"},{"key":"shuqirwbody2","val":"serviceWorkerOn=1&stopPullRefresh=1&from=ShuqiTab&upf=20368&sdk=13.3.1&utdid=YM1Vb0nsOoADAKdvgCxmpfoK&ustatus=0&first_placeid=111111&net_env=3g&placeid=111111&user_id=2131685389&sn=3E34B50E4B994CB35061CCEBDBF11834D82B2A55&umidtoken=YM1Vb0nsOoADAKdvgCxmpfoK&msv=8.0.0&brand=Apple&imei=93A59458135BC55ACF40351915556D86060D672C&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=1&ver=210301&mod=iPhone7plus&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=9A50CB9A-106D-455E-927C-9A6C44113CEE&params=%7B%22resources%22%3A%7B%22ShuqiBsDailyTask%22%3A%7B%7D%7D%7D&userId=2131685389&placeId=111111&timestamp=1624096037&sqSv=1.0&sign=908f0461d9659a81fe9c747c2e68ea29&key=sq_h5_gateway&_public="},{"key":"shuqifxbody2","val":""},{"key":"shuqisprwurl2","val":"https://ocean.shuqireader.com/api/ad/adserver/v1/api/getAdInfo?appVer=4.3.6.0&placeId=111111&platform=iOS&requestSrc=h5&resourceId=626&timestamp=1624096120&user_id=2131685389&sqSv=1.0&sign=170975c12d841d992ce6432b67c87507&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.3.1%26utdid%3DYM1Vb0nsOoADAKdvgCxmpfoK%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2131685389%26sn%3D3E34B50E4B994CB35061CCEBDBF11834D82B2A55%26umidtoken%3DYM1Vb0nsOoADAKdvgCxmpfoK%26msv%3D8.0.0%26brand%3DApple%26imei%3D93A59458135BC55ACF40351915556D86060D672C%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone7plus%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D9A50CB9A-106D-455E-927C-9A6C44113CEE"},{"key":"shuqijlbody2","val":"requestSrc=h5&userId=2131685389&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624096037&sqSv=1.0&sign=0d4b95111e8a1c22a276f02be05865ab&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.3.1%26utdid%3DYM1Vb0nsOoADAKdvgCxmpfoK%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2131685389%26sn%3D3E34B50E4B994CB35061CCEBDBF11834D82B2A55%26umidtoken%3DYM1Vb0nsOoADAKdvgCxmpfoK%26msv%3D8.0.0%26brand%3DApple%26imei%3D93A59458135BC55ACF40351915556D86060D672C%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone7plus%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D9A50CB9A-106D-455E-927C-9A6C44113CEE"},{"key":"shuqisqjlbody2","val":"src=&userId=2131685389&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624096028&sqSv=1.0&sign=2a0c7a332202b090c20d0856de414b81&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.3.1%26utdid%3DYM1Vb0nsOoADAKdvgCxmpfoK%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2131685389%26sn%3D3E34B50E4B994CB35061CCEBDBF11834D82B2A55%26umidtoken%3DYM1Vb0nsOoADAKdvgCxmpfoK%26msv%3D8.0.0%26brand%3DApple%26imei%3D93A59458135BC55ACF40351915556D86060D672C%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone7plus%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D9A50CB9A-106D-455E-927C-9A6C44113CEE"},{"key":"shuqicjyurl2","val":"https://ocean.shuqireader.com/api/activity/activity/v1/lottery/info?timestamp=1624096122&userId=2131685389&activityId=311&sqSv=1.0&sign=356ca11c908cff4679ce10be2550a216&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.3.1%26utdid%3DYM1Vb0nsOoADAKdvgCxmpfoK%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2131685389%26sn%3D3E34B50E4B994CB35061CCEBDBF11834D82B2A55%26umidtoken%3DYM1Vb0nsOoADAKdvgCxmpfoK%26msv%3D8.0.0%26brand%3DApple%26imei%3D93A59458135BC55ACF40351915556D86060D672C%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone7plus%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D9A50CB9A-106D-455E-927C-9A6C44113CEE"},{"key":"shuqicjcsbody2","val":"_public=utype%3Dpre_vip%26idfa%3D9A50CB9A-106D-455E-927C-9A6C44113CEE%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26umidtoken%3DYM1Vb0nsOoADAKdvgCxmpfoK%26user_id%3D2131685389%26sn%3D3E34B50E4B994CB35061CCEBDBF11834D82B2A55%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D93A59458135BC55ACF40351915556D86060D672C%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhone7plus%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26utdid%3DYM1Vb0nsOoADAKdvgCxmpfoK%26soft_id%3D21%26sdk%3D13.3.1&deliveryId=711&key=sq_app_ad&miniWua=HHnB_500IEH8AcJMscyjZ6xEL4CbULy1K0Al8I%2BQ7x9Hwb/w%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=703&sign=97CE6E8431F0C53D6F27695A22D0160A&timestamp=1624096042&userId=2131685389&user_id=2131685389&wua=HIVW_uSAK8LQGyxoE44ziIcRdIE/8YsJBQ2HJQDiOnYhHqQI563gS%2ByEH8T//uR5cjqE5KxRZpqprK6RGAI/doqnUa%2B2Wj2NVUquQXifIkOfc1G9cSj4gJO9tpao5Bj2pbLMvVVQKmwPU5HyxM51ZX29/i8sWvxtTn0UwVjQmFHn9iEZLbIuUsZ/G39xaENO0%2Bz5Iq08dfqaVQwoM1AIvzMswgCh6SSIJSZzj354oyjJrsHs%3D"},{"key":"shuqicjbody2","val":"wua=HIVW_UGMLLhGgKfY%2FKubVcLh7vsWPr%2BuNzRc%2FsH%2Fc%2BzbNK5Lj7JzhV5z1YNL%2F0%2B%2BsGN%2BV9VafcNPKITeIpZ81SQmo9leT05EYuRyCGlCtCEMKAWALc82m2VGPdPY2fWsrQtuU5dhEVYtGoCmotbYLro9Qy3mzFg3ZQCnZkwhtNJWXd2Yfx0U3hYILy5shZUp6xbvvfH83VOjOR7iB80uF3lvlla%2FoScw%2F%2FkO5Zqe5f7Nl2zw%3D&ua=&userId=2131685389&umidtoken=YM1Vb0nsOoADAKdvgCxmpfoK&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&asac=2A20C07RJ9F51AOEFSNHDR&timestamp=1624096048&activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&sqSv=1.0&sign=59b204b8085d1db09ab33bde17e5ba24&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.3.1%26utdid%3DYM1Vb0nsOoADAKdvgCxmpfoK%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2131685389%26sn%3D3E34B50E4B994CB35061CCEBDBF11834D82B2A55%26umidtoken%3DYM1Vb0nsOoADAKdvgCxmpfoK%26msv%3D8.0.0%26brand%3DApple%26imei%3D93A59458135BC55ACF40351915556D86060D672C%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone7plus%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D9A50CB9A-106D-455E-927C-9A6C44113CEE"},{"key":"shuqijsspbody2","val":""},{"key":"shuqijsydurl2","val":""},{"key":"shuqijsydbody2","val":""},{"key":"shuqijsqdbody2","val":""},{"key":"shuqijsqdspyurl2","val":""},{"key":"shuqijsqdspbody2","val":""},{"key":"shuqijsrwbody2","val":""},{"key":"shuqijsfxbody2","val":""},{"key":"shuqijsbookurl2","val":""},{"key":"shuqijsbookbody2","val":""},{"key":"shuqijssprwurl2","val":""},{"key":"shuqiuserurl3","val":"https://ocean.shuqireader.com/api/jaccount/accountapi/v1/sapi/account/getBindinfo?userId=2131290039&sqSv=1.0&timestamp=1624096239&sign=04511736cfb857c2deaadf203d58852c&key=sq_h5_gateway"},{"key":"shuqisyurl3","val":"https://render.shuqireader.com/load/resource?sdk=13.4.1&utdid=YM1Vb0nsOoADAKdvgCxmpfoK&ustatus=0&first_placeid=111111&net_env=3g&placeid=111111&user_id=2131290039&sn=55DB7079D228C3EF67D0CA6217374B758DEB1862&umidtoken=YM1Vb0nsOoADAKdvgCxmpfoK&msv=8.0.0&brand=Apple&imei=0D7BCFC398C2E0CC05DA5F3EACED05947391351E&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=iOS&ver=210301&mod=iPad2G&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=215A93F7-CF37-456E-BE1B-6CE453CEDAC0"},{"key":"shuqisybody3","val":"appVer=4.3.6.0&imei=0D7BCFC398C2E0CC05DA5F3EACED05947391351E&isNewUser=1&params=%7B%22resources%22%3A%7B%22ShuqiVipEntry%22%3A%7B%7D%2C%22personalCardConfig%22%3A%7B%7D%7D%7D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=c35750ca567a182bf040cfbd0914e1ec&sn=55DB7079D228C3EF67D0CA6217374B758DEB1862&soft_id=21&timestamp=1624096188&user_id=2131290039&ver=210301"},{"key":"shuqispbody3","val":"_public=skinId%3D999%26idfa%3D215A93F7-CF37-456E-BE1B-6CE453CEDAC0%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26umidtoken%3DYM1Vb0nsOoADAKdvgCxmpfoK%26user_id%3D2131290039%26sn%3D55DB7079D228C3EF67D0CA6217374B758DEB1862%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D0D7BCFC398C2E0CC05DA5F3EACED05947391351E%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPad2G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYM1Vb0nsOoADAKdvgCxmpfoK%26utype%3Dpre_vip%26sdk%3D13.4.1&deliveryId=525&key=sq_app_ad&miniWua=HHnB_Nx4jIweL1krZoIlIFrKl%2B7mFzjC7msiDc5f5gFLA3BM%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=626&sign=9E3BD88A15A0FC12AA5283FC71396423&timestamp=1624096208&userId=2131290039&user_id=2131290039&wua=HIVW_WRJSOpNTVvnYCs0s1%2BvaJhqzCteWRfJ/etwzFFpHsEmzrKQKmlvENchAcaSQX7Rr4BVofiO6FU3Oz%2BdRBU2sT3bhPxm3wRzsSnHaXvCt7gYo6/Nsn3lFhqJI4HuluK7UXTiRWbrDUFOyR2/HdiLVD1tnAM4zDe0YqLidV9Sm78aDkjfFiUiGVo6y4HzLG%2BXcfZPysEC%2Bqz3VrxxwOg7g2b6Ru2UED8nwGdzgux4THS0%3D"},{"key":"shuqiscbody3","val":""},{"key":"shuqiydbody3","val":""},{"key":"shuqiqdbody3","val":"clientTimestamp=1624096202&position=501&userId=2131290039&signInType=1&wua=HIVW_fucrnQ7DL4sy6LsEDdJPOWI0AMURjTByivCfrvg8Wvqi%2F4WeBENlvg3wktPdRk8EWxSkCBWZvvElSss0%2FnQDkX%2B%2Byp8AIjP0U2oXXilrH56kGwkkiEfh1aZEdjHvdBMbovMJJ24EFponUHx9nBHJK8hfqxHs3oMl2dQfJnSWyoX1n4ZZJgA7WqrQpjvii8f3%2BJuYWAvaO57gBBfP%2F%2FSLuLplYRJsTpWJ%2BowlHPRZdM0%3D&ua=&miniWua=HHnB_GvUEjsu4AUUKKoNLUD919HYsOQAb2FM4Nh1J4BAD6XE%3D&umidtoken=YM1Vb0nsOoADAKdvgCxmpfoK&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&sign=6a31b027a167538f475358d277433018&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.4.1%26utdid%3DYM1Vb0nsOoADAKdvgCxmpfoK%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2131290039%26sn%3D55DB7079D228C3EF67D0CA6217374B758DEB1862%26umidtoken%3DYM1Vb0nsOoADAKdvgCxmpfoK%26msv%3D8.0.0%26brand%3DApple%26imei%3D0D7BCFC398C2E0CC05DA5F3EACED05947391351E%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad2G%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D215A93F7-CF37-456E-BE1B-6CE453CEDAC0"},{"key":"shuqirwbody3","val":"serviceWorkerOn=1&stopPullRefresh=1&from=ShuqiTab&upf=20368&sdk=13.4.1&utdid=YM1Vb0nsOoADAKdvgCxmpfoK&ustatus=0&first_placeid=111111&net_env=3g&placeid=111111&user_id=2131290039&sn=55DB7079D228C3EF67D0CA6217374B758DEB1862&umidtoken=YM1Vb0nsOoADAKdvgCxmpfoK&msv=8.0.0&brand=Apple&imei=0D7BCFC398C2E0CC05DA5F3EACED05947391351E&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=1&ver=210301&mod=iPad2G&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=215A93F7-CF37-456E-BE1B-6CE453CEDAC0&params=%7B%22resources%22%3A%7B%22ShuqiBsDailyTask%22%3A%7B%7D%7D%7D&userId=2131290039&placeId=111111&timestamp=1624096215&sqSv=1.0&sign=4a25736fc51963e44e3a04aa8d93f95a&key=sq_h5_gateway&_public="},{"key":"shuqifxbody3","val":""},{"key":"shuqisprwurl3","val":"https://ocean.shuqireader.com/api/ad/adserver/v1/api/getAdInfo?appVer=4.3.6.0&placeId=111111&platform=iOS&requestSrc=h5&resourceId=626&timestamp=1624096240&user_id=2131290039&sqSv=1.0&sign=1848f9b1d3830a0dce0b67b8746cd636&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.4.1%26utdid%3DYM1Vb0nsOoADAKdvgCxmpfoK%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2131290039%26sn%3D55DB7079D228C3EF67D0CA6217374B758DEB1862%26umidtoken%3DYM1Vb0nsOoADAKdvgCxmpfoK%26msv%3D8.0.0%26brand%3DApple%26imei%3D0D7BCFC398C2E0CC05DA5F3EACED05947391351E%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad2G%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D215A93F7-CF37-456E-BE1B-6CE453CEDAC0"},{"key":"shuqijlbody3","val":"requestSrc=h5&userId=2131290039&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624096215&sqSv=1.0&sign=3ec30dd5048fafd4727b5aec73897f7a&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.4.1%26utdid%3DYM1Vb0nsOoADAKdvgCxmpfoK%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2131290039%26sn%3D55DB7079D228C3EF67D0CA6217374B758DEB1862%26umidtoken%3DYM1Vb0nsOoADAKdvgCxmpfoK%26msv%3D8.0.0%26brand%3DApple%26imei%3D0D7BCFC398C2E0CC05DA5F3EACED05947391351E%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad2G%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D215A93F7-CF37-456E-BE1B-6CE453CEDAC0"},{"key":"shuqisqjlbody3","val":"src=&userId=2131290039&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624096208&sqSv=1.0&sign=0d2faf6e217564a0ed13535492a00976&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.4.1%26utdid%3DYM1Vb0nsOoADAKdvgCxmpfoK%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2131290039%26sn%3D55DB7079D228C3EF67D0CA6217374B758DEB1862%26umidtoken%3DYM1Vb0nsOoADAKdvgCxmpfoK%26msv%3D8.0.0%26brand%3DApple%26imei%3D0D7BCFC398C2E0CC05DA5F3EACED05947391351E%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad2G%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D215A93F7-CF37-456E-BE1B-6CE453CEDAC0"},{"key":"shuqicjyurl3","val":"https://ocean.shuqireader.com/api/activity/activity/v1/lottery/info?timestamp=1624096241&userId=2131290039&activityId=311&sqSv=1.0&sign=24dafd9c1ff084560141cd2602e447f5&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.4.1%26utdid%3DYM1Vb0nsOoADAKdvgCxmpfoK%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2131290039%26sn%3D55DB7079D228C3EF67D0CA6217374B758DEB1862%26umidtoken%3DYM1Vb0nsOoADAKdvgCxmpfoK%26msv%3D8.0.0%26brand%3DApple%26imei%3D0D7BCFC398C2E0CC05DA5F3EACED05947391351E%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad2G%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D215A93F7-CF37-456E-BE1B-6CE453CEDAC0"},{"key":"shuqicjcsbody3","val":"_public=skinId%3D999%26idfa%3D215A93F7-CF37-456E-BE1B-6CE453CEDAC0%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26umidtoken%3DYM1Vb0nsOoADAKdvgCxmpfoK%26user_id%3D2131290039%26sn%3D55DB7079D228C3EF67D0CA6217374B758DEB1862%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D0D7BCFC398C2E0CC05DA5F3EACED05947391351E%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPad2G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYM1Vb0nsOoADAKdvgCxmpfoK%26utype%3Dpre_vip%26sdk%3D13.4.1&deliveryId=711&key=sq_app_ad&miniWua=HHnB_s/iK8kpPd1W4XSoQZw4Z0VU52A3qMZKY4TFH/MQlS4g%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=703&sign=940B183C3AB39713CE19AFAD5F08E62B&timestamp=1624096226&userId=2131290039&user_id=2131290039&wua=HIVW_lu5%2BNzk2BUjMjbBELwOk0GFqbI5eq7qHR0WcWqKVEyx02aMEz1UJ3oc/cATFF61%2BMtYU/LB%2BGnwePBNES2N3lfjk4KxBsrG5anWUzCjEKc42InTY0ABXjWmOJO9bKg%2BOdKve2o0qKY4HmUNsk9EbFFnTkw73wlX8pMf/ntvFlABlgtF58OS5EpbQB3hjBhWEsZou1HI31f6hW3bU4Lg52i1LDnMAcdB0BXNM%2BQngocY%3D"},{"key":"shuqicjbody3","val":"wua=HIVW_EQ%2F%2B8631oadwbQRwb%2BvUZAYHyvJBMG8ag5ki3IGnhYQ24%2Bwq7tofNEJOkUYUUuPqo1Qag3VdCbqz3SRyaZ3MTM3zf0mmMCUZ8uzH187vrvmqF9bmwAXvbupEmNA7NoukVL5CrBteC51chu5L11bJrO4iBq1PSKfw6FOx5znGn5eda1wjNKtQayNkJSt4p9slsJGhqOx9WanVCmxPNvwf1xgsv6ao3P4Xx6XTPtfxkHw%3D&ua=&userId=2131290039&umidtoken=YM1Vb0nsOoADAKdvgCxmpfoK&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&asac=2A20C07RJ9F51AOEFSNHDR&timestamp=1624096229&activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&sqSv=1.0&sign=3d014dabdce7beb39e90e169ec4eedb2&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.4.1%26utdid%3DYM1Vb0nsOoADAKdvgCxmpfoK%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2131290039%26sn%3D55DB7079D228C3EF67D0CA6217374B758DEB1862%26umidtoken%3DYM1Vb0nsOoADAKdvgCxmpfoK%26msv%3D8.0.0%26brand%3DApple%26imei%3D0D7BCFC398C2E0CC05DA5F3EACED05947391351E%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad2G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D215A93F7-CF37-456E-BE1B-6CE453CEDAC0"},{"key":"shuqijsspbody3","val":""},{"key":"shuqijsydurl3","val":""},{"key":"shuqijsydbody3","val":""},{"key":"shuqijsqdbody3","val":""},{"key":"shuqijsqdspyurl3","val":""},{"key":"shuqijsqdspbody3","val":""},{"key":"shuqijsrwbody3","val":""},{"key":"shuqijsfxbody3","val":""},{"key":"shuqijsbookurl3","val":""},{"key":"shuqijsbookbody3","val":""},{"key":"shuqijssprwurl3","val":""},{"key":"shuqiuserurl4","val":"https://ocean.shuqireader.com/api/jaccount/accountapi/v1/sapi/account/getBindinfo?userId=2129514589&sqSv=1.0&timestamp=1624096300&sign=d04dcf7c57ce3fd6fbda4f0dacb8280c&key=sq_h5_gateway"},{"key":"shuqisyurl4","val":"https://render.shuqireader.com/load/resource?sdk=13.2.3&utdid=YM1Vb0nsOoADAKdvgCxmpfoK&ustatus=0&first_placeid=111111&net_env=4g&placeid=111111&user_id=2129514589&sn=7C50C6D6E0795BACD0B815FD31990C4131FAD110&umidtoken=YM1Vb0nsOoADAKdvgCxmpfoK&msv=8.0.0&brand=Apple&imei=FC555DB6BE5119733D31DA627B9D310941FA4677&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=iOS&ver=210301&mod=iPhone11&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=E0F6B00B-8BE0-439A-9B92-DE00622E0405"},{"key":"shuqisybody4","val":"appVer=4.3.6.0&imei=FC555DB6BE5119733D31DA627B9D310941FA4677&isNewUser=1&params=%7B%22resources%22%3A%7B%22ShuqiVipEntry%22%3A%7B%7D%2C%22personalCardConfig%22%3A%7B%7D%7D%7D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=79f5e428d71e440cd0e79217504d7d82&sn=7C50C6D6E0795BACD0B815FD31990C4131FAD110&soft_id=21&timestamp=1624096254&user_id=2129514589&ver=210301"},{"key":"shuqispbody4","val":"_public=skinId%3D999%26idfa%3DE0F6B00B-8BE0-439A-9B92-DE00622E0405%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26umidtoken%3DYM1Vb0nsOoADAKdvgCxmpfoK%26user_id%3D2129514589%26sn%3D7C50C6D6E0795BACD0B815FD31990C4131FAD110%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3DFC555DB6BE5119733D31DA627B9D310941FA4677%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhone11%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYM1Vb0nsOoADAKdvgCxmpfoK%26utype%3Dpre_vip%26sdk%3D13.2.3&deliveryId=525&key=sq_app_ad&miniWua=HHnB_OcSKHh6UBNWvGgJNAqQHbw9jaId3E/wT9U1tPNFZmzI%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=626&sign=5E8C56DC64179595A1DF43A7D6230848&timestamp=1624096272&userId=2129514589&user_id=2129514589&wua=HIVW_pFIN4JVSdOEAvkH3rl6QXztXM2NXqb5TLi84UlNGKy4cF%2B08XcVmtAhGpDCYKdCRmnDaTzucni9Wc3xJwkSYJdYaQHk8cz4JY2cs4r4q08yCb3%2BJJr2hTguS9JayFW7hZqfWe4w%2B/SH/QVmV5In7Av0iv9l4dQtwQMcIIfrp0MD4Tplmx0V3ZlPUDJq4X0gLrpJXuDle/0qcOBdknF223NyTgvB6Cwf09qvah6NtxFk%3D"},{"key":"shuqiscbody4","val":""},{"key":"shuqiydbody4","val":""},{"key":"shuqiqdbody4","val":"clientTimestamp=1624096264&position=501&userId=2129514589&signInType=1&wua=HIVW_lyG%2FuZSX6awrJEesxYQy22V%2FQZh1zy3Raj7ywFTt9qYkqw62VxGlacwFU5CK8ehSshtkR8jdPnez4ahiUudLZTRMIj1POonVncNdYxWZekZlSaQ8cAfZu4I119eDEJgqDkTTbRuBqpj7bii6D0NnKdni0e9fD9%2BIYOHC0d8lSNywR2gsp8aJrQyL7kEu9RquyybpJM048edrlmt8yATYRPe%2FEhsD349rN%2BpW0Zz%2BC%2Bw%3D&ua=&miniWua=HHnB_XYJzKKMT%2FSZeCT1ppOl3zdCUojirbhsVpf2bkaOzeFk%3D&umidtoken=YM1Vb0nsOoADAKdvgCxmpfoK&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&sign=9157b2a519b7f610c14d4ce94c4c4563&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.2.3%26utdid%3DYM1Vb0nsOoADAKdvgCxmpfoK%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2129514589%26sn%3D7C50C6D6E0795BACD0B815FD31990C4131FAD110%26umidtoken%3DYM1Vb0nsOoADAKdvgCxmpfoK%26msv%3D8.0.0%26brand%3DApple%26imei%3DFC555DB6BE5119733D31DA627B9D310941FA4677%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone11%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DE0F6B00B-8BE0-439A-9B92-DE00622E0405"},{"key":"shuqirwbody4","val":"serviceWorkerOn=1&stopPullRefresh=1&from=ShuqiTab&upf=20368&sdk=13.2.3&utdid=YM1Vb0nsOoADAKdvgCxmpfoK&ustatus=0&first_placeid=111111&net_env=4g&placeid=111111&user_id=2129514589&sn=7C50C6D6E0795BACD0B815FD31990C4131FAD110&umidtoken=YM1Vb0nsOoADAKdvgCxmpfoK&msv=8.0.0&brand=Apple&imei=FC555DB6BE5119733D31DA627B9D310941FA4677&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=1&ver=210301&mod=iPhone11&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=E0F6B00B-8BE0-439A-9B92-DE00622E0405&params=%7B%22resources%22%3A%7B%22ShuqiBsDailyTask%22%3A%7B%7D%7D%7D&userId=2129514589&placeId=111111&timestamp=1624096278&sqSv=1.0&sign=50a77c6877ebe49a77660e7f8e2b4953&key=sq_h5_gateway&_public="},{"key":"shuqifxbody4","val":""},{"key":"shuqisprwurl4","val":"https://ocean.shuqireader.com/api/ad/adserver/v1/api/getAdInfo?appVer=4.3.6.0&placeId=111111&platform=iOS&requestSrc=h5&resourceId=626&timestamp=1624096299&user_id=2129514589&sqSv=1.0&sign=d611a8311b29009ebc44ef1ade91427e&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.2.3%26utdid%3DYM1Vb0nsOoADAKdvgCxmpfoK%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2129514589%26sn%3D7C50C6D6E0795BACD0B815FD31990C4131FAD110%26umidtoken%3DYM1Vb0nsOoADAKdvgCxmpfoK%26msv%3D8.0.0%26brand%3DApple%26imei%3DFC555DB6BE5119733D31DA627B9D310941FA4677%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone11%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DE0F6B00B-8BE0-439A-9B92-DE00622E0405"},{"key":"shuqijlbody4","val":"requestSrc=h5&userId=2129514589&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624096278&sqSv=1.0&sign=ebc05f4cf96568bf3276331c5c12e87f&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.2.3%26utdid%3DYM1Vb0nsOoADAKdvgCxmpfoK%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2129514589%26sn%3D7C50C6D6E0795BACD0B815FD31990C4131FAD110%26umidtoken%3DYM1Vb0nsOoADAKdvgCxmpfoK%26msv%3D8.0.0%26brand%3DApple%26imei%3DFC555DB6BE5119733D31DA627B9D310941FA4677%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone11%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DE0F6B00B-8BE0-439A-9B92-DE00622E0405"},{"key":"shuqisqjlbody4","val":"src=&userId=2129514589&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624096269&sqSv=1.0&sign=a13e84d3b01520e31cc3f4022f2c9dac&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.2.3%26utdid%3DYM1Vb0nsOoADAKdvgCxmpfoK%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2129514589%26sn%3D7C50C6D6E0795BACD0B815FD31990C4131FAD110%26umidtoken%3DYM1Vb0nsOoADAKdvgCxmpfoK%26msv%3D8.0.0%26brand%3DApple%26imei%3DFC555DB6BE5119733D31DA627B9D310941FA4677%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone11%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DE0F6B00B-8BE0-439A-9B92-DE00622E0405"},{"key":"shuqicjyurl4","val":"https://ocean.shuqireader.com/api/activity/activity/v1/lottery/info?timestamp=1624096301&userId=2129514589&activityId=311&sqSv=1.0&sign=b3d2bb53ebfbd5789443e7418acbf531&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.2.3%26utdid%3DYM1Vb0nsOoADAKdvgCxmpfoK%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2129514589%26sn%3D7C50C6D6E0795BACD0B815FD31990C4131FAD110%26umidtoken%3DYM1Vb0nsOoADAKdvgCxmpfoK%26msv%3D8.0.0%26brand%3DApple%26imei%3DFC555DB6BE5119733D31DA627B9D310941FA4677%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone11%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DE0F6B00B-8BE0-439A-9B92-DE00622E0405"},{"key":"shuqicjcsbody4","val":"_public=skinId%3D999%26idfa%3DE0F6B00B-8BE0-439A-9B92-DE00622E0405%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26umidtoken%3DYM1Vb0nsOoADAKdvgCxmpfoK%26user_id%3D2129514589%26sn%3D7C50C6D6E0795BACD0B815FD31990C4131FAD110%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3DFC555DB6BE5119733D31DA627B9D310941FA4677%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhone11%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYM1Vb0nsOoADAKdvgCxmpfoK%26utype%3Dpre_vip%26sdk%3D13.2.3&deliveryId=711&key=sq_app_ad&miniWua=HHnB_KIUFemY%2BNOH6odVP%2BuC1SGNlVb8O9oofRDu/uAHhhZw%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=703&sign=85F4F54042268BFCED7DFDF3D5050D6B&timestamp=1624096283&userId=2129514589&user_id=2129514589&wua=HIVW_DrDo70B/AZILVAY0dDollCD%2BpEwl%2BBYkoFHiSCECHiXjYXl3xpRrh4pZlcZSfmZGCKj6MYpbAELxiilRHZgalBu%2Bb2fVZTIX6joBk30MK/7oCKWIoh7IxSea4qWk9lo7%2B0JYmwEya%2B9XmRLhHaX/i4dQq9Khx%2Bz2/%2B51SeN%2BKGSUZeZicu8yS9KdLeI0CcYgl/oPJ97fq2VlEp1Y6olHGB/6G8BbCh0stY%2BIDkqIabo%3D"},{"key":"shuqicjbody4","val":"wua=HIVW_reWFgJAsuZqikwej00VVl6OWzZMfHqDTC5K68qjZuW2l7MR6DZE%2FyrfXGPiEjL%2Fc3H8mwnKK%2FRQoJRAO5dPe3AkFeMLts3kWeTshptpNw0%2BFVeoGRLhehADBxu%2B85L1%2BwkGPdMUg9xF3NfcWWtFNLXhjXVsaEpv5ARKPna%2FUTmXOfVuFLn5dGt%2FjYLuUhAy%2Bq2wMB8eswXetJCm8%2Bw5qfGX%2B5ObWi9mm95byBQVa6E8%3D&ua=&userId=2129514589&umidtoken=YM1Vb0nsOoADAKdvgCxmpfoK&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&asac=2A20C07RJ9F51AOEFSNHDR&timestamp=1624096289&activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&sqSv=1.0&sign=42cbb2ec143d7784b5339746d74377d6&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.2.3%26utdid%3DYM1Vb0nsOoADAKdvgCxmpfoK%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2129514589%26sn%3D7C50C6D6E0795BACD0B815FD31990C4131FAD110%26umidtoken%3DYM1Vb0nsOoADAKdvgCxmpfoK%26msv%3D8.0.0%26brand%3DApple%26imei%3DFC555DB6BE5119733D31DA627B9D310941FA4677%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone11%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DE0F6B00B-8BE0-439A-9B92-DE00622E0405"},{"key":"shuqijsspbody4","val":""},{"key":"shuqijsydurl4","val":""},{"key":"shuqijsydbody4","val":""},{"key":"shuqijsqdbody4","val":""},{"key":"shuqijsqdspyurl4","val":""},{"key":"shuqijsqdspbody4","val":""},{"key":"shuqijsrwbody4","val":""},{"key":"shuqijsfxbody4","val":""},{"key":"shuqijsbookurl4","val":""},{"key":"shuqijsbookbody4","val":""},{"key":"shuqijssprwurl4","val":""},{"key":"shuqiuserurl5","val":"https://ocean.shuqireader.com/api/jaccount/accountapi/v1/sapi/account/getBindinfo?userId=2127521748&sqSv=1.0&timestamp=1624096410&sign=81e869492044ff143efbeb60a3f09c36&key=sq_h5_gateway"},{"key":"shuqisyurl5","val":"https://render.shuqireader.com/load/resource?sdk=13.0&utdid=YM2%2BOkrGD10DAGqOCq7rranB&ustatus=0&first_placeid=111111&net_env=wifi&placeid=111111&user_id=2127521748&sn=9B2B1FFA59B3B328B79E2991AF8413213520BBB3&umidtoken=YM2%2BOkrGD10DAGqOCq7rranB&msv=8.0.0&brand=Apple&imei=452845CAEC00ADF086D527D9C4F2D5AAF3251D21&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=iOS&ver=210301&mod=iPhoneSE&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=A9F6EA07-8875-4FCA-BCBC-D0458DBF79A4"},{"key":"shuqisybody5","val":"appVer=4.3.6.0&imei=452845CAEC00ADF086D527D9C4F2D5AAF3251D21&isNewUser=1&params=%7B%22resources%22%3A%7B%22ShuqiVipEntry%22%3A%7B%7D%2C%22personalCardConfig%22%3A%7B%7D%7D%7D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=d45d261b3e01667922a4472ce87e91ef&sn=9B2B1FFA59B3B328B79E2991AF8413213520BBB3&soft_id=21&timestamp=1624096315&user_id=2127521748&ver=210301"},{"key":"shuqispbody5","val":"_public=utype%3Dpre_vip%26idfa%3DA9F6EA07-8875-4FCA-BCBC-D0458DBF79A4%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26umidtoken%3DYM2%2BOkrGD10DAGqOCq7rranB%26user_id%3D2127521748%26sn%3D9B2B1FFA59B3B328B79E2991AF8413213520BBB3%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D452845CAEC00ADF086D527D9C4F2D5AAF3251D21%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhoneSE%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26utdid%3DYM2%2BOkrGD10DAGqOCq7rranB%26soft_id%3D21%26sdk%3D13.0&deliveryId=525&key=sq_app_ad&miniWua=HHnB_DoxgnQ%2B%2Ba/xzF0yFgbNtilYRREYiER1kYsT74ZRRLHk%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=626&sign=54779D7546618F27EB9944CF0ECE4C84&timestamp=1624096572&userId=2127521748&user_id=2127521748&wua=HIVW_mV5%2BsEPIE9g8TH9bmP9DoEAwiCH56thZ2rbC83FRJSVpuw/U3boy5AFOKUE13iFbiQmUGOjLlhY6tw9V4C5ssjMcOcXXpdeOGUzIjTyT5YPqhHleRWIweSaLRZU48UUKGFpXLjPWnZdNy0dKAWJDroc3hUsNaiROdN05M6lZVgOMNSknmO6JU6hKzQInWDcNeVNlOj7wn8jMkZvkX63c1dB3oIdF6tSnyQBUa8iP8N8%3D"},{"key":"shuqiscbody5","val":""},{"key":"shuqiydbody5","val":""},{"key":"shuqiqdbody5","val":"clientTimestamp=1624096328&position=501&userId=2127521748&signInType=1&wua=HIVW_mCrFRaYQ2Tkspe3uaP115eEz1TO9MklS%2F4TkEr9f7ncA6dF1%2Fu3IdjrXNIkwVuUVy%2FsqNGWYt58zx7iTsLk87dju8UShGlFMEMPq393Y245Keho8pgvd33o6wGGTFBi237laPgUoQRc5SO3BVjak29VRKx9c09EL%2FPvai1y9y7AJJsHKT%2Fl7VcQz8e6GOHsnGms1s2Npp9y4CupCuta7bCt%2FSAHZzkPQTMFVeFf8YuI%3D&ua=&miniWua=HHnB_ZEAkgRooZohUtdOAvzzzMNLnjJl5J6f7H6mH98G3VBk%3D&umidtoken=YM2%2BOkrGD10DAGqOCq7rranB&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&sign=31de3279688e9ebad96ac6533a0f46bd&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.0%26utdid%3DYM2%252BOkrGD10DAGqOCq7rranB%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2127521748%26sn%3D9B2B1FFA59B3B328B79E2991AF8413213520BBB3%26umidtoken%3DYM2%252BOkrGD10DAGqOCq7rranB%26msv%3D8.0.0%26brand%3DApple%26imei%3D452845CAEC00ADF086D527D9C4F2D5AAF3251D21%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhoneSE%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DA9F6EA07-8875-4FCA-BCBC-D0458DBF79A4"},{"key":"shuqirwbody5","val":"serviceWorkerOn=1&stopPullRefresh=1&from=ShuqiTab&upf=20368&sdk=13.0&utdid=YM2%2BOkrGD10DAGqOCq7rranB&ustatus=0&first_placeid=111111&net_env=wifi&placeid=111111&user_id=2127521748&sn=9B2B1FFA59B3B328B79E2991AF8413213520BBB3&umidtoken=YM2%2BOkrGD10DAGqOCq7rranB&msv=8.0.0&brand=Apple&imei=452845CAEC00ADF086D527D9C4F2D5AAF3251D21&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=1&ver=210301&mod=iPhoneSE&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=A9F6EA07-8875-4FCA-BCBC-D0458DBF79A4&params=%7B%22resources%22%3A%7B%22ShuqiBsDailyTask%22%3A%7B%7D%7D%7D&userId=2127521748&placeId=111111&timestamp=1624096572&sqSv=1.0&sign=7767446fa95bcb57be7714d0a2f39943&key=sq_h5_gateway&_public="},{"key":"shuqifxbody5","val":""},{"key":"shuqisprwurl5","val":"https://ocean.shuqireader.com/api/ad/adserver/v1/api/getAdInfo?appVer=4.3.6.0&placeId=111111&platform=iOS&requestSrc=h5&resourceId=626&timestamp=1624096409&user_id=2127521748&sqSv=1.0&sign=c0cf40638545f9b278d6ed992d58aca9&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.0%26utdid%3DYM2%252BOkrGD10DAGqOCq7rranB%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2127521748%26sn%3D9B2B1FFA59B3B328B79E2991AF8413213520BBB3%26umidtoken%3DYM2%252BOkrGD10DAGqOCq7rranB%26msv%3D8.0.0%26brand%3DApple%26imei%3D452845CAEC00ADF086D527D9C4F2D5AAF3251D21%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhoneSE%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DA9F6EA07-8875-4FCA-BCBC-D0458DBF79A4"},{"key":"shuqijlbody5","val":"requestSrc=h5&userId=2127521748&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624096572&sqSv=1.0&sign=4e6d8d904dd1eba6f1089497cbc18d7e&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.0%26utdid%3DYM2%252BOkrGD10DAGqOCq7rranB%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2127521748%26sn%3D9B2B1FFA59B3B328B79E2991AF8413213520BBB3%26umidtoken%3DYM2%252BOkrGD10DAGqOCq7rranB%26msv%3D8.0.0%26brand%3DApple%26imei%3D452845CAEC00ADF086D527D9C4F2D5AAF3251D21%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhoneSE%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DA9F6EA07-8875-4FCA-BCBC-D0458DBF79A4"},{"key":"shuqisqjlbody5","val":"src=&userId=2127521748&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624096333&sqSv=1.0&sign=9f61ee7c3e22003930f98e613f6b7743&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.0%26utdid%3DYM2%252BOkrGD10DAGqOCq7rranB%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2127521748%26sn%3D9B2B1FFA59B3B328B79E2991AF8413213520BBB3%26umidtoken%3DYM2%252BOkrGD10DAGqOCq7rranB%26msv%3D8.0.0%26brand%3DApple%26imei%3D452845CAEC00ADF086D527D9C4F2D5AAF3251D21%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhoneSE%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DA9F6EA07-8875-4FCA-BCBC-D0458DBF79A4"},{"key":"shuqicjyurl5","val":"https://ocean.shuqireader.com/api/activity/activity/v1/lottery/info?timestamp=1624096411&userId=2127521748&activityId=311&sqSv=1.0&sign=8d79d7278f43906d415ff41df2a7a0c9&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.0%26utdid%3DYM2%252BOkrGD10DAGqOCq7rranB%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2127521748%26sn%3D9B2B1FFA59B3B328B79E2991AF8413213520BBB3%26umidtoken%3DYM2%252BOkrGD10DAGqOCq7rranB%26msv%3D8.0.0%26brand%3DApple%26imei%3D452845CAEC00ADF086D527D9C4F2D5AAF3251D21%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhoneSE%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DA9F6EA07-8875-4FCA-BCBC-D0458DBF79A4"},{"key":"shuqicjcsbody5","val":"_public=skinId%3D999%26idfa%3DA9F6EA07-8875-4FCA-BCBC-D0458DBF79A4%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26umidtoken%3DYM2%2BOkrGD10DAGqOCq7rranB%26user_id%3D2127521748%26sn%3D9B2B1FFA59B3B328B79E2991AF8413213520BBB3%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D452845CAEC00ADF086D527D9C4F2D5AAF3251D21%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhoneSE%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYM2%2BOkrGD10DAGqOCq7rranB%26utype%3Dpre_vip%26sdk%3D13.0&deliveryId=711&key=sq_app_ad&miniWua=HHnB_AdBtDBMESKuQqlDKSa7iH0lxU10YHJaRUIgd8MIvBcA%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=703&sign=59ADAAD73634DC4EB0C40C3EE9F6DE90&timestamp=1624096392&userId=2127521748&user_id=2127521748&wua=HIVW_3vc8w/P/R47Spu6xGW0dl7b/G6eDF8tn45S1nwvwcyqlyugRCiAIR8fgNpol3DhrZTdcQh5QRWp4wr5Wgyogj7w0BGPPJseOn34taa1u/mg88vAG6HHLHZuIxGc2amvtD5vJk6gGtBRjkjH7oHkK9iNNwBxiC9ikqxKfohXsUYmuOQv93CELqDY/k14w0pW8o9M/OgTNTWdAt7iMYTu4LzF5cBtLAnh9hQBRO4Yc88c%3D"},{"key":"shuqicjbody5","val":"wua=HIVW_UMx4HZeNbRZFYoNOmOdto4BJg8BsHjhCdc1z6eLpoE2bAN%2Bk9EoM1HZ8CNn3qbr6CCPDG%2F2qMbCIJwuxizuAUPbWv1uItpxovF3dH4Xa%2BRKu2hDIRstuxEr20BxqSIVdQ3R3UDJ7WBf6LiFTcweZACuE36bluWTx9T45iS5kBMqkLGXCDHk6Fp6wHfZixH%2FHh%2F1rA%2BPsASYNj8JWIqz7AEVceAdsKc6%2BmANbuHtrPPs%3D&ua=&userId=2127521748&umidtoken=YM2%2BOkrGD10DAGqOCq7rranB&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&asac=2A20C07RJ9F51AOEFSNHDR&timestamp=1624096398&activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&sqSv=1.0&sign=0119ab25f7de05bc6f7a649cf0ad3434&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.0%26utdid%3DYM2%252BOkrGD10DAGqOCq7rranB%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2127521748%26sn%3D9B2B1FFA59B3B328B79E2991AF8413213520BBB3%26umidtoken%3DYM2%252BOkrGD10DAGqOCq7rranB%26msv%3D8.0.0%26brand%3DApple%26imei%3D452845CAEC00ADF086D527D9C4F2D5AAF3251D21%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhoneSE%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DA9F6EA07-8875-4FCA-BCBC-D0458DBF79A4"},{"key":"shuqijsspbody5","val":""},{"key":"shuqijsydurl5","val":""},{"key":"shuqijsydbody5","val":""},{"key":"shuqijsqdbody5","val":""},{"key":"shuqijsqdspyurl5","val":""},{"key":"shuqijsqdspbody5","val":""},{"key":"shuqijsrwbody5","val":""},{"key":"shuqijsfxbody5","val":""},{"key":"shuqijsbookurl5","val":""},{"key":"shuqijsbookbody5","val":""},{"key":"shuqijssprwurl5","val":""},{"key":"shuqiuserurl6","val":"https://ocean.shuqireader.com/api/jaccount/accountapi/v1/sapi/account/getBindinfo?userId=2127869080&sqSv=1.0&timestamp=1624096470&sign=ddd40b5176107ffa8ceb51e2851dc788&key=sq_h5_gateway"},{"key":"shuqisyurl6","val":"https://render.shuqireader.com/load/resource?sdk=13.5&utdid=YM1Vnkc72ikDAOz53tPldOk1&ustatus=0&first_placeid=111111&net_env=wifi&placeid=111111&user_id=2127869080&sn=0BD73899A697099A84D9F17B3442EF1100C56CCB&umidtoken=YM1Vnkc72ikDAOz53tPldOk1&msv=8.0.0&brand=Apple&imei=30E8DDC3578FFC5936C41C712D07B089B027B287&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=iOS&ver=210301&mod=iPad2G&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=FD946D1D-3601-4F9D-9CF0-627FF9863678"},{"key":"shuqisybody6","val":"appVer=4.3.6.0&imei=30E8DDC3578FFC5936C41C712D07B089B027B287&isNewUser=1&params=%7B%22resources%22%3A%7B%22ShuqiVipEntry%22%3A%7B%7D%2C%22personalCardConfig%22%3A%7B%7D%7D%7D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=9c03b7458c09d8e439dc9e6ded9882f1&sn=0BD73899A697099A84D9F17B3442EF1100C56CCB&soft_id=21&timestamp=1624096426&user_id=2127869080&ver=210301"},{"key":"shuqispbody6","val":"_public=utype%3Dpre_vip%26idfa%3DFD946D1D-3601-4F9D-9CF0-627FF9863678%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26umidtoken%3DYM1Vnkc72ikDAOz53tPldOk1%26user_id%3D2127869080%26sn%3D0BD73899A697099A84D9F17B3442EF1100C56CCB%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D30E8DDC3578FFC5936C41C712D07B089B027B287%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPad2G%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26utdid%3DYM1Vnkc72ikDAOz53tPldOk1%26soft_id%3D21%26sdk%3D13.5&deliveryId=525&key=sq_app_ad&miniWua=HHnB_i/9/ugH7cGzEZ82A/TbzzDtxTn1VJm3k0OM3nt7Pxso%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=626&sign=1E28581EEC272E549B52A2AF281E08D2&timestamp=1624096607&userId=2127869080&user_id=2127869080&wua=HIVW_aSCkh/0wkUfeQhkC%2BpW/zuML7q8tijHVrQKx5fiQGPJJmScKL%2BGOTP2dnLqRrOfXGhqe8ujdIJP1RdUyV7NgKH7NPr9xjaXlXI2oWF4UroY5EfmEIqmO/RIofA8gDON42vITb92VyAkc6dFbXpk8OyKMKeCJC084%2BVWYOFZxLRM6PqdwPn/M8YGXTMbarNOxbFdpKR/tY937cwBWWrL8AdNhze737pzXPgJ2KqGSt9A%3D"},{"key":"shuqiscbody6","val":""},{"key":"shuqiydbody6","val":""},{"key":"shuqiqdbody6","val":"clientTimestamp=1624096437&position=501&userId=2127869080&signInType=1&wua=HIVW_lyG%2FuZSX6awrJEesxYQy2wCzatHy%2Bb%2BcZCGKTvQgsglhQGFU7OKkYf35mMzCNWbyunQwpH8y9x7Cb00FoDeHpkKfh%2BT6ZtNhNcmieXf5NZvdduNELjjNnkLonDVtS21ArMWrTxvVlO5z3M0A3WbNF0qbzM04orvpZu7Etrq9gX9GkHYSfkgaUOU2zFjmQa2Je6kXcvfnOsA1IjvD2qSZywPjpK0%2FbbN1X1b5URktcrI%3D&ua=&miniWua=HHnB_%2FWW0qjOi34b%2BP%2BieDZtC5tvPWzlhWLRK4cFYRsgEaAw%3D&umidtoken=YM1Vnkc72ikDAOz53tPldOk1&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&sign=27aa6c8111288f9a25f2e12fee241fa2&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.5%26utdid%3DYM1Vnkc72ikDAOz53tPldOk1%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2127869080%26sn%3D0BD73899A697099A84D9F17B3442EF1100C56CCB%26umidtoken%3DYM1Vnkc72ikDAOz53tPldOk1%26msv%3D8.0.0%26brand%3DApple%26imei%3D30E8DDC3578FFC5936C41C712D07B089B027B287%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad2G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DFD946D1D-3601-4F9D-9CF0-627FF9863678"},{"key":"shuqirwbody6","val":"serviceWorkerOn=1&stopPullRefresh=1&from=ShuqiTab&upf=20368&sdk=13.5&utdid=YM1Vnkc72ikDAOz53tPldOk1&ustatus=0&first_placeid=111111&net_env=wifi&placeid=111111&user_id=2127869080&sn=0BD73899A697099A84D9F17B3442EF1100C56CCB&umidtoken=YM1Vnkc72ikDAOz53tPldOk1&msv=8.0.0&brand=Apple&imei=30E8DDC3578FFC5936C41C712D07B089B027B287&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=1&ver=210301&mod=iPad2G&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=FD946D1D-3601-4F9D-9CF0-627FF9863678&params=%7B%22resources%22%3A%7B%22ShuqiBsDailyTask%22%3A%7B%7D%7D%7D&userId=2127869080&placeId=111111&timestamp=1624096600&sqSv=1.0&sign=db72c177505fa135a65e0e7de55c57da&key=sq_h5_gateway&_public="},{"key":"shuqifxbody6","val":""},{"key":"shuqisprwurl6","val":"https://ocean.shuqireader.com/api/ad/adserver/v1/api/getAdInfo?appVer=4.3.6.0&placeId=111111&platform=iOS&requestSrc=h5&resourceId=626&timestamp=1624096470&user_id=2127869080&sqSv=1.0&sign=0af182fba21e0d388a84ae53a5f75c26&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.5%26utdid%3DYM1Vnkc72ikDAOz53tPldOk1%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2127869080%26sn%3D0BD73899A697099A84D9F17B3442EF1100C56CCB%26umidtoken%3DYM1Vnkc72ikDAOz53tPldOk1%26msv%3D8.0.0%26brand%3DApple%26imei%3D30E8DDC3578FFC5936C41C712D07B089B027B287%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad2G%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DFD946D1D-3601-4F9D-9CF0-627FF9863678"},{"key":"shuqijlbody6","val":"requestSrc=h5&userId=2127869080&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624096600&sqSv=1.0&sign=088498da1afbc57a7b4ae98beeb92da9&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.5%26utdid%3DYM1Vnkc72ikDAOz53tPldOk1%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2127869080%26sn%3D0BD73899A697099A84D9F17B3442EF1100C56CCB%26umidtoken%3DYM1Vnkc72ikDAOz53tPldOk1%26msv%3D8.0.0%26brand%3DApple%26imei%3D30E8DDC3578FFC5936C41C712D07B089B027B287%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad2G%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DFD946D1D-3601-4F9D-9CF0-627FF9863678"},{"key":"shuqisqjlbody6","val":"src=&userId=2127869080&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624096442&sqSv=1.0&sign=42d131a2b741abab828c600951fbd292&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.5%26utdid%3DYM1Vnkc72ikDAOz53tPldOk1%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2127869080%26sn%3D0BD73899A697099A84D9F17B3442EF1100C56CCB%26umidtoken%3DYM1Vnkc72ikDAOz53tPldOk1%26msv%3D8.0.0%26brand%3DApple%26imei%3D30E8DDC3578FFC5936C41C712D07B089B027B287%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad2G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DFD946D1D-3601-4F9D-9CF0-627FF9863678"},{"key":"shuqicjyurl6","val":"https://ocean.shuqireader.com/api/activity/activity/v1/lottery/info?timestamp=1624096474&userId=2127869080&activityId=311&sqSv=1.0&sign=e2ba3c1ebcaaca337018e36f966dae9b&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.5%26utdid%3DYM1Vnkc72ikDAOz53tPldOk1%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2127869080%26sn%3D0BD73899A697099A84D9F17B3442EF1100C56CCB%26umidtoken%3DYM1Vnkc72ikDAOz53tPldOk1%26msv%3D8.0.0%26brand%3DApple%26imei%3D30E8DDC3578FFC5936C41C712D07B089B027B287%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad2G%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DFD946D1D-3601-4F9D-9CF0-627FF9863678"},{"key":"shuqicjcsbody6","val":"_public=skinId%3D999%26idfa%3DFD946D1D-3601-4F9D-9CF0-627FF9863678%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26umidtoken%3DYM1Vnkc72ikDAOz53tPldOk1%26user_id%3D2127869080%26sn%3D0BD73899A697099A84D9F17B3442EF1100C56CCB%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D30E8DDC3578FFC5936C41C712D07B089B027B287%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPad2G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYM1Vnkc72ikDAOz53tPldOk1%26utype%3Dpre_vip%26sdk%3D13.5&deliveryId=711&key=sq_app_ad&miniWua=HHnB_DUh2M6Ppm4Iz92WsZeXmM4oXIKRCbSdsdmZ9h%2B65ph0%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=703&sign=4701DFF2855935372E1946C68999BFAA&timestamp=1624096455&userId=2127869080&user_id=2127869080&wua=HIVW_GsJUCytCxBgwnuvfwEu739GzslrpjxUtcr2EBbfHTz1sPO5aD21Om1OAcU0xYqTEPmElfUyWRbEN/avgg5ZKwwkmoFZuxxtW64dNDvHagLbyQxrM%2BFKmJcbNrbGTr/nwwL8gy7QDHjDobAuYIvolFuEMrCPwPFQ%2BwxY4TjhL9DAfAKMlctlnbEqI9Pwo4te/vWEjNUlsN4u52TeiSJ0OOQcQ81Pmmk2yeDx6ovkQTTQ%3D"},{"key":"shuqicjbody6","val":"wua=HIVW_YbHx4VWkWEUq31z2UViTXP2LAhPQOZTbCqLuFhQTzXRZbmIhMdNB442WYaB1e4GNDukDtbN9c%2BTVyr28Kk9zRzlnGzTvrybAspLv7WCpqz%2FgKcnMQX18dos6i8aACieLjYmcz3IBzn3BahF86oxvKmbW1e1qIQ597ywLitqVhv568lVG%2Fqdck1v2rI3I7fWyZUHs0vs0dxImX8cM1h015er2szy8Djwf3rbGvEEUPiI%3D&ua=&userId=2127869080&umidtoken=YM1Vnkc72ikDAOz53tPldOk1&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&asac=2A20C07RJ9F51AOEFSNHDR&timestamp=1624096461&activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&sqSv=1.0&sign=43f4818a5dd2ac0a713769d36cf9fb68&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.5%26utdid%3DYM1Vnkc72ikDAOz53tPldOk1%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2127869080%26sn%3D0BD73899A697099A84D9F17B3442EF1100C56CCB%26umidtoken%3DYM1Vnkc72ikDAOz53tPldOk1%26msv%3D8.0.0%26brand%3DApple%26imei%3D30E8DDC3578FFC5936C41C712D07B089B027B287%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad2G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DFD946D1D-3601-4F9D-9CF0-627FF9863678"},{"key":"shuqijsspbody6","val":""},{"key":"shuqijsydurl6","val":""},{"key":"shuqijsydbody6","val":""},{"key":"shuqijsqdbody6","val":""},{"key":"shuqijsqdspyurl6","val":""},{"key":"shuqijsqdspbody6","val":""},{"key":"shuqijsrwbody6","val":""},{"key":"shuqijsfxbody6","val":""},{"key":"shuqijsbookurl6","val":""},{"key":"shuqijsbookbody6","val":""},{"key":"shuqijssprwurl6","val":""},{"key":"shuqiuserurl7","val":"https://ocean.shuqireader.com/api/jaccount/accountapi/v1/sapi/account/getBindinfo?userId=2128316712&sqSv=1.0&timestamp=1624096538&sign=f3a0573f58ac1e4cdbe67040a376e228&key=sq_h5_gateway"},{"key":"shuqisyurl7","val":"https://render.shuqireader.com/load/resource?sdk=13.2.3&utdid=YM1V4EM3ZAYDAKV3lbveURA%2B&ustatus=0&first_placeid=111111&net_env=3g&placeid=111111&user_id=2128316712&sn=8C16C52EB6AE5108FCE857D1162230662CB465F6&umidtoken=YM1V4EM3ZAYDAKV3lbveURA%2B&msv=8.0.0&brand=Apple&imei=D4A9D7F0A4413140CC9F6783CFC88F2C9FCE40FC&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=iOS&ver=210301&mod=iPodtouch4G&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=C2E1015D-A70B-43E5-BBC7-F15080DB46D9"},{"key":"shuqisybody7","val":"appVer=4.3.6.0&imei=D4A9D7F0A4413140CC9F6783CFC88F2C9FCE40FC&isNewUser=1&params=%7B%22resources%22%3A%7B%22ShuqiVipEntry%22%3A%7B%7D%2C%22personalCardConfig%22%3A%7B%7D%7D%7D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=34fb08f78715a4671465fd8bad33ea2d&sn=8C16C52EB6AE5108FCE857D1162230662CB465F6&soft_id=21&timestamp=1624096487&user_id=2128316712&ver=210301"},{"key":"shuqispbody7","val":"_public=utype%3Dpre_vip%26idfa%3DC2E1015D-A70B-43E5-BBC7-F15080DB46D9%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26umidtoken%3DYM1V4EM3ZAYDAKV3lbveURA%2B%26user_id%3D2128316712%26sn%3D8C16C52EB6AE5108FCE857D1162230662CB465F6%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3DD4A9D7F0A4413140CC9F6783CFC88F2C9FCE40FC%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPodtouch4G%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26utdid%3DYM1V4EM3ZAYDAKV3lbveURA%2B%26soft_id%3D21%26sdk%3D13.2.3&deliveryId=525&key=sq_app_ad&miniWua=HHnB_aWR12ILbt4hK7yMSCoQf54%2BeDAjj32/bvcMn5EyxjyI%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=626&sign=0F560CCE09F7B3B9191179302C480F6F&timestamp=1624096635&userId=2128316712&user_id=2128316712&wua=HIVW_xbb9akg3ZPp9sjKL9YhV/zSmtBOaGpwGOgiHSluMZv7Cx3vG2EpuQfDmgWveuf/HDcQ3GTF1UMYyCnFoM7u0PJ7EPSWtyGNfS5FDA57cm1Ta72EhEQyA6jg9TB96rMjFD24d1pPi6Qd00HAGNjdITK%2BOzVLCjg5NisYAm8z3VLE8dT9vd2l6a3elhE7Ni9MIWNyEuJq9j95Vk98CM%2BKucv%2B7mFiqhAj1VA3tK0icjRs%3D"},{"key":"shuqiscbody7","val":""},{"key":"shuqiydbody7","val":""},{"key":"shuqiqdbody7","val":"clientTimestamp=1624096504&position=501&userId=2128316712&signInType=1&wua=HIVW_o5GaarUAWxgc9XgmLRa9q2ichmSqnfnV6jU7g%2FKBd4ofp03Rq3yZ05Vvs87y0VcowMEgmNvv816fsF6hL7lgxUsijjtq8GOe3BuHbPXdbgHRLLseN0E%2FZ6Mc9pom5gurlJy1EAbFVD5fLN3fccjklzLyjSAqvxOkKGMW2NHcmkQxyHn9f6hA8YhS3IkAj4sffbEnrpztZfOeR5Z1nm54WgB2AAvDFMglh0DfC9RyKXQ%3D&ua=&miniWua=HHnB_eoUDhPWQsI5uY6b6MJmcs6C6iPO%2FAzHpoZQ5LealUWs%3D&umidtoken=YM1V4EM3ZAYDAKV3lbveURA%2B&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&sign=70eee599490d53046453e116a7dabe5d&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.2.3%26utdid%3DYM1V4EM3ZAYDAKV3lbveURA%252B%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2128316712%26sn%3D8C16C52EB6AE5108FCE857D1162230662CB465F6%26umidtoken%3DYM1V4EM3ZAYDAKV3lbveURA%252B%26msv%3D8.0.0%26brand%3DApple%26imei%3DD4A9D7F0A4413140CC9F6783CFC88F2C9FCE40FC%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPodtouch4G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DC2E1015D-A70B-43E5-BBC7-F15080DB46D9"},{"key":"shuqirwbody7","val":"serviceWorkerOn=1&stopPullRefresh=1&from=ShuqiTab&upf=20368&sdk=13.2.3&utdid=YM1V4EM3ZAYDAKV3lbveURA%2B&ustatus=0&first_placeid=111111&net_env=3g&placeid=111111&user_id=2128316712&sn=8C16C52EB6AE5108FCE857D1162230662CB465F6&umidtoken=YM1V4EM3ZAYDAKV3lbveURA%2B&msv=8.0.0&brand=Apple&imei=D4A9D7F0A4413140CC9F6783CFC88F2C9FCE40FC&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=1&ver=210301&mod=iPodtouch4G&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=C2E1015D-A70B-43E5-BBC7-F15080DB46D9&params=%7B%22resources%22%3A%7B%22ShuqiBsDailyTask%22%3A%7B%7D%7D%7D&userId=2128316712&placeId=111111&timestamp=1624096632&sqSv=1.0&sign=0c723e60b2ea61d9c3c201e7004c7215&key=sq_h5_gateway&_public="},{"key":"shuqifxbody7","val":""},{"key":"shuqisprwurl7","val":"https://ocean.shuqireader.com/api/ad/adserver/v1/api/getAdInfo?appVer=4.3.6.0&placeId=111111&platform=iOS&requestSrc=h5&resourceId=626&timestamp=1624096538&user_id=2128316712&sqSv=1.0&sign=5fcc0f266ae171c443d3681ac3e56b89&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.2.3%26utdid%3DYM1V4EM3ZAYDAKV3lbveURA%252B%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2128316712%26sn%3D8C16C52EB6AE5108FCE857D1162230662CB465F6%26umidtoken%3DYM1V4EM3ZAYDAKV3lbveURA%252B%26msv%3D8.0.0%26brand%3DApple%26imei%3DD4A9D7F0A4413140CC9F6783CFC88F2C9FCE40FC%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPodtouch4G%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DC2E1015D-A70B-43E5-BBC7-F15080DB46D9"},{"key":"shuqijlbody7","val":"requestSrc=h5&userId=2128316712&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624096632&sqSv=1.0&sign=ac275a76c689f36368ca2a2e4db5ed85&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.2.3%26utdid%3DYM1V4EM3ZAYDAKV3lbveURA%252B%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2128316712%26sn%3D8C16C52EB6AE5108FCE857D1162230662CB465F6%26umidtoken%3DYM1V4EM3ZAYDAKV3lbveURA%252B%26msv%3D8.0.0%26brand%3DApple%26imei%3DD4A9D7F0A4413140CC9F6783CFC88F2C9FCE40FC%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPodtouch4G%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DC2E1015D-A70B-43E5-BBC7-F15080DB46D9"},{"key":"shuqisqjlbody7","val":"src=&userId=2128316712&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624096509&sqSv=1.0&sign=b7dc0d6d3d089012cc45f2d58c582940&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.2.3%26utdid%3DYM1V4EM3ZAYDAKV3lbveURA%252B%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2128316712%26sn%3D8C16C52EB6AE5108FCE857D1162230662CB465F6%26umidtoken%3DYM1V4EM3ZAYDAKV3lbveURA%252B%26msv%3D8.0.0%26brand%3DApple%26imei%3DD4A9D7F0A4413140CC9F6783CFC88F2C9FCE40FC%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPodtouch4G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DC2E1015D-A70B-43E5-BBC7-F15080DB46D9"},{"key":"shuqicjyurl7","val":"https://ocean.shuqireader.com/api/activity/activity/v1/lottery/info?timestamp=1624096540&userId=2128316712&activityId=311&sqSv=1.0&sign=10eb816ea4f251ece905f66139d4eda0&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.2.3%26utdid%3DYM1V4EM3ZAYDAKV3lbveURA%252B%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2128316712%26sn%3D8C16C52EB6AE5108FCE857D1162230662CB465F6%26umidtoken%3DYM1V4EM3ZAYDAKV3lbveURA%252B%26msv%3D8.0.0%26brand%3DApple%26imei%3DD4A9D7F0A4413140CC9F6783CFC88F2C9FCE40FC%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPodtouch4G%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DC2E1015D-A70B-43E5-BBC7-F15080DB46D9"},{"key":"shuqicjcsbody7","val":"_public=skinId%3D999%26idfa%3DC2E1015D-A70B-43E5-BBC7-F15080DB46D9%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26umidtoken%3DYM1V4EM3ZAYDAKV3lbveURA%2B%26user_id%3D2128316712%26sn%3D8C16C52EB6AE5108FCE857D1162230662CB465F6%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3DD4A9D7F0A4413140CC9F6783CFC88F2C9FCE40FC%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPodtouch4G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYM1V4EM3ZAYDAKV3lbveURA%2B%26utype%3Dpre_vip%26sdk%3D13.2.3&deliveryId=711&key=sq_app_ad&miniWua=HHnB_i3/ikvax6vSIWDuljJ7nbS73fwly33N92/p1N3e4qJA%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=703&sign=174A4F42961301E790FB22A7CFF00C55&timestamp=1624096521&userId=2128316712&user_id=2128316712&wua=HIVW_NvrxPNcs/h6YyRaesZsaI0CR1EXgbzgvwtLt%2BhnyrTV8e/waG1IUp8clz8PLbGx0hskpWsI9iTHus2VNTv0/d18gfz6NXCF7AaiHuFOXq89/kuNuD2TuJrnUdwn54asDtAI4G29FxgpVDQy6pWb1WNCuFwRE5zBgKc/GFA7IHzm9CRXooM1qsXT4Tc9tnojLiRQ5dnwF5UiOF2bUAwwDkQ5sE05HaNl%2BpmZKEjIioTA%3D"},{"key":"shuqicjbody7","val":"wua=HIVW_Zz76ggM0eYZzdTy5hy91RbnrngZZkDk2uVSI5LO%2B4VjbHhqMixQzu9BfgqAv2Sr7qviFsmATplwm139IZNZM8TeT%2B8vyY7m%2FyA5efSf7RYKNpX4ZNHtYkInxfxrhjNUQEdqXODEoYDNJe%2FtJJTwHGniKGchjeIG5xmn167ZYpyhAXTxirnMp0GmOqaiClcmmyoLNztIPqS3ggkDwIwIac8VWm3Gzyw6c1dcgbGn8EVI%3D&ua=&userId=2128316712&umidtoken=YM1V4EM3ZAYDAKV3lbveURA%2B&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&asac=2A20C07RJ9F51AOEFSNHDR&timestamp=1624096524&activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&sqSv=1.0&sign=ddbe8e343dd3e28ab2e5b45ec798d85e&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.2.3%26utdid%3DYM1V4EM3ZAYDAKV3lbveURA%252B%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2128316712%26sn%3D8C16C52EB6AE5108FCE857D1162230662CB465F6%26umidtoken%3DYM1V4EM3ZAYDAKV3lbveURA%252B%26msv%3D8.0.0%26brand%3DApple%26imei%3DD4A9D7F0A4413140CC9F6783CFC88F2C9FCE40FC%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPodtouch4G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DC2E1015D-A70B-43E5-BBC7-F15080DB46D9"},{"key":"shuqijsspbody7","val":""},{"key":"shuqijsydurl7","val":""},{"key":"shuqijsydbody7","val":""},{"key":"shuqijsqdbody7","val":""},{"key":"shuqijsqdspyurl7","val":""},{"key":"shuqijsqdspbody7","val":""},{"key":"shuqijsrwbody7","val":""},{"key":"shuqijsfxbody7","val":""},{"key":"shuqijsbookurl7","val":""},{"key":"shuqijsbookbody7","val":""},{"key":"shuqijssprwurl7","val":""},{"key":"shuqiuserurl8","val":"https://ocean.shuqireader.com/api/jaccount/accountapi/v1/sapi/account/getBindinfo?userId=2128866776&sqSv=1.0&timestamp=1624096728&sign=74a761d9012f746ac02fa1b8d6547f08&key=sq_h5_gateway"},{"key":"shuqisyurl8","val":"https://render.shuqireader.com/load/resource?sdk=13.0&utdid=YM1WNpv2%2BocDACUlPwdAiNZo&ustatus=0&first_placeid=111111&net_env=3g&placeid=111111&user_id=2128866776&sn=84F11B7485AC5F5C60FD46FE97A7C9AFC32AAFFE&umidtoken=YM1WNpv2%2BocDACUlPwdAiNZo&msv=8.0.0&brand=Apple&imei=4DF509ED6F1332312B952A809C9C9839EF8D0972&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=iOS&ver=210301&mod=iPhone6s&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=25EE0B74-01BD-4CA0-8875-F631D57D3A08"},{"key":"shuqisybody8","val":"appVer=4.3.6.0&imei=4DF509ED6F1332312B952A809C9C9839EF8D0972&isNewUser=1&params=%7B%22resources%22%3A%7B%22ShuqiVipEntry%22%3A%7B%7D%2C%22personalCardConfig%22%3A%7B%7D%7D%7D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=1643c9447ce029af98002a680980a6bf&sn=84F11B7485AC5F5C60FD46FE97A7C9AFC32AAFFE&soft_id=21&timestamp=1624096656&user_id=2128866776&ver=210301"},{"key":"shuqispbody8","val":"_public=skinId%3D999%26idfa%3D25EE0B74-01BD-4CA0-8875-F631D57D3A08%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26umidtoken%3DYM1WNpv2%2BocDACUlPwdAiNZo%26user_id%3D2128866776%26sn%3D84F11B7485AC5F5C60FD46FE97A7C9AFC32AAFFE%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D4DF509ED6F1332312B952A809C9C9839EF8D0972%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhone6s%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYM1WNpv2%2BocDACUlPwdAiNZo%26utype%3Dpre_vip%26sdk%3D13.0&deliveryId=525&key=sq_app_ad&miniWua=HHnB_cXhj60XISR59DrayYGvrOEZgoOn5JeycGHLUvn3mSjY%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=626&sign=01F6E038D127E4BDE6B162FCD6B748BF&timestamp=1624096677&userId=2128866776&user_id=2128866776&wua=HIVW_qATVIMD7V9/8UjhlreVBMY8x3nO/yiKBv0zX9FZDlzlk1ZELiKcghKw4FdIaVaCvNLxbfUdLMump%2BWUBgZsPrPKubtASf6Kb1fHLk%2Bcx2bD0k%2BikiRdi8CGQkpy9gnGqy9GThNRDGV//2VjMDvnVzSzspYTPO/nFmaTf4G7jJnSNy6%2BAeabzsVyiqaMSA6mvoaJzmxcTsiGl80kZ%2BlKGcl1EqEaaFXwZz7LF7dPdq2M%3D"},{"key":"shuqiscbody8","val":""},{"key":"shuqiydbody8","val":""},{"key":"shuqiqdbody8","val":"clientTimestamp=1624096668&position=501&userId=2128866776&signInType=1&wua=HIVW_C%2BPnk%2FNV2HplFdYyyyV35%2FJbzouc0kHTRoipPZ8SekmlH1Oei9tfVTeDL5LY%2BhcZIaVR3rTeQ2uXpkBfjRuaXqK6YGWOfmFPEmpR0s%2B%2FoYQHoLmJmN1kOvmeSJGo3Pto0HiPShhzQPr3deAaTjQoUHBFNk5cr5YjN2k%2BHlfOyZ2384HqIrDOcjc2L1FFc3RFfQ0XOO1yJWfc%2FHpCCiD3GSPImiAgoTlzKrmD5EFwAdc%3D&ua=&miniWua=HHnB_CCqRaZT%2BL75YfYT70i6kmFfaJ4e8F8nfN%2BRTssj86fg%3D&umidtoken=YM1WNpv2%2BocDACUlPwdAiNZo&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&sign=1c5a707cbc5fc679dee86fe8c2503e02&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.0%26utdid%3DYM1WNpv2%252BocDACUlPwdAiNZo%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2128866776%26sn%3D84F11B7485AC5F5C60FD46FE97A7C9AFC32AAFFE%26umidtoken%3DYM1WNpv2%252BocDACUlPwdAiNZo%26msv%3D8.0.0%26brand%3DApple%26imei%3D4DF509ED6F1332312B952A809C9C9839EF8D0972%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone6s%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D25EE0B74-01BD-4CA0-8875-F631D57D3A08"},{"key":"shuqirwbody8","val":"serviceWorkerOn=1&stopPullRefresh=1&from=ShuqiTab&upf=20368&sdk=13.0&utdid=YM1WNpv2%2BocDACUlPwdAiNZo&ustatus=0&first_placeid=111111&net_env=3g&placeid=111111&user_id=2128866776&sn=84F11B7485AC5F5C60FD46FE97A7C9AFC32AAFFE&umidtoken=YM1WNpv2%2BocDACUlPwdAiNZo&msv=8.0.0&brand=Apple&imei=4DF509ED6F1332312B952A809C9C9839EF8D0972&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=1&ver=210301&mod=iPhone6s&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=25EE0B74-01BD-4CA0-8875-F631D57D3A08&params=%7B%22resources%22%3A%7B%22ShuqiBsDailyTask%22%3A%7B%7D%7D%7D&userId=2128866776&placeId=111111&timestamp=1624096701&sqSv=1.0&sign=b296917936008c8743b00731f9d9fdc6&key=sq_h5_gateway&_public="},{"key":"shuqifxbody8","val":""},{"key":"shuqisprwurl8","val":"https://ocean.shuqireader.com/api/ad/adserver/v1/api/getAdInfo?appVer=4.3.6.0&placeId=111111&platform=iOS&requestSrc=h5&resourceId=626&timestamp=1624096724&user_id=2128866776&sqSv=1.0&sign=260709057ad157ebe39a12436ef01960&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.0%26utdid%3DYM1WNpv2%252BocDACUlPwdAiNZo%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2128866776%26sn%3D84F11B7485AC5F5C60FD46FE97A7C9AFC32AAFFE%26umidtoken%3DYM1WNpv2%252BocDACUlPwdAiNZo%26msv%3D8.0.0%26brand%3DApple%26imei%3D4DF509ED6F1332312B952A809C9C9839EF8D0972%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone6s%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D25EE0B74-01BD-4CA0-8875-F631D57D3A08"},{"key":"shuqijlbody8","val":"requestSrc=h5&userId=2128866776&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624096701&sqSv=1.0&sign=27f2be892eaf76ef908c9ba779e02ad2&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.0%26utdid%3DYM1WNpv2%252BocDACUlPwdAiNZo%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2128866776%26sn%3D84F11B7485AC5F5C60FD46FE97A7C9AFC32AAFFE%26umidtoken%3DYM1WNpv2%252BocDACUlPwdAiNZo%26msv%3D8.0.0%26brand%3DApple%26imei%3D4DF509ED6F1332312B952A809C9C9839EF8D0972%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone6s%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D25EE0B74-01BD-4CA0-8875-F631D57D3A08"},{"key":"shuqisqjlbody8","val":"src=&userId=2128866776&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624096674&sqSv=1.0&sign=ac98361511778d93ff009c11e00b3a4f&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.0%26utdid%3DYM1WNpv2%252BocDACUlPwdAiNZo%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2128866776%26sn%3D84F11B7485AC5F5C60FD46FE97A7C9AFC32AAFFE%26umidtoken%3DYM1WNpv2%252BocDACUlPwdAiNZo%26msv%3D8.0.0%26brand%3DApple%26imei%3D4DF509ED6F1332312B952A809C9C9839EF8D0972%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone6s%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D25EE0B74-01BD-4CA0-8875-F631D57D3A08"},{"key":"shuqicjyurl8","val":"https://ocean.shuqireader.com/api/activity/activity/v1/lottery/info?timestamp=1624096728&userId=2128866776&activityId=311&sqSv=1.0&sign=1a454f3da03b3c33358ec7d0417dffd5&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.0%26utdid%3DYM1WNpv2%252BocDACUlPwdAiNZo%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2128866776%26sn%3D84F11B7485AC5F5C60FD46FE97A7C9AFC32AAFFE%26umidtoken%3DYM1WNpv2%252BocDACUlPwdAiNZo%26msv%3D8.0.0%26brand%3DApple%26imei%3D4DF509ED6F1332312B952A809C9C9839EF8D0972%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone6s%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D25EE0B74-01BD-4CA0-8875-F631D57D3A08"},{"key":"shuqicjcsbody8","val":"_public=utype%3Dpre_vip%26idfa%3D25EE0B74-01BD-4CA0-8875-F631D57D3A08%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26umidtoken%3DYM1WNpv2%2BocDACUlPwdAiNZo%26user_id%3D2128866776%26sn%3D84F11B7485AC5F5C60FD46FE97A7C9AFC32AAFFE%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D4DF509ED6F1332312B952A809C9C9839EF8D0972%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhone6s%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26utdid%3DYM1WNpv2%2BocDACUlPwdAiNZo%26soft_id%3D21%26sdk%3D13.0&deliveryId=711&key=sq_app_ad&miniWua=HHnB_JBI/oyvgZ65GyJ/%2BgCxT07GtweBX/C1Kw7A99GS11hU%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=703&sign=3C4FEA907E2C92EA971CD041C6F90E34&timestamp=1624096707&userId=2128866776&user_id=2128866776&wua=HIVW_nw/WHiEE/CEfHGt03X3bcDgFi8/N32LYBQD9kpPDsqWb7G7N01CG2Nw64qFnVT8DLlwlPrfokoPulo8gzLXSNB/eP2v8zFo2G8Sa0ItwSNM8xGnXi1NjombxzOGBKXMc3abcPYWopffSYt2M3l0KY2vsaa0vGM7l722f1Kw7Ji3PUlBjCWlWeG4xC%2Bc4Rtfqw6ZKDDpc8enax75%2BMDBk37XzB8hkphzkk5RUMVeP1K4%3D"},{"key":"shuqicjbody8","val":"wua=HIVW_J%2FQsHR8iwtIq0mtZUb3Ezgg5PCS0hqVyqBdQIkSNyyhYLMBS%2FWs%2FQKq1oqR6omwqqdzumkbwAICoX3ohdg37%2BOPfKYQzOZMj1U%2Bjcekx2ke1obTXnnW%2FIPLttLWnnSgA0f%2FZB2LBezc8WDZEZqgir%2FGqpOZulCCIYsCnMDHI1tJ3ECPlwK8frlEH8Pptrh%2FGJR74ydQILpnkQsZpFWjQjCMYV6Wyhmug5LE0yhF5mFA%3D&ua=&userId=2128866776&umidtoken=YM1WNpv2%2BocDACUlPwdAiNZo&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&asac=2A20C07RJ9F51AOEFSNHDR&timestamp=1624096713&activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&sqSv=1.0&sign=bf3c01d7f6c4702a80801f6057a8e8d5&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.0%26utdid%3DYM1WNpv2%252BocDACUlPwdAiNZo%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2128866776%26sn%3D84F11B7485AC5F5C60FD46FE97A7C9AFC32AAFFE%26umidtoken%3DYM1WNpv2%252BocDACUlPwdAiNZo%26msv%3D8.0.0%26brand%3DApple%26imei%3D4DF509ED6F1332312B952A809C9C9839EF8D0972%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone6s%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D25EE0B74-01BD-4CA0-8875-F631D57D3A08"},{"key":"shuqijsspbody8","val":""},{"key":"shuqijsydurl8","val":""},{"key":"shuqijsydbody8","val":""},{"key":"shuqijsqdbody8","val":""},{"key":"shuqijsqdspyurl8","val":""},{"key":"shuqijsqdspbody8","val":""},{"key":"shuqijsrwbody8","val":""},{"key":"shuqijsfxbody8","val":""},{"key":"shuqijsbookurl8","val":""},{"key":"shuqijsbookbody8","val":""},{"key":"shuqijssprwurl8","val":""},{"key":"shuqiuserurl9","val":"https://ocean.shuqireader.com/api/jaccount/accountapi/v1/sapi/account/getBindinfo?userId=2130608462&sqSv=1.0&timestamp=1624096792&sign=d73e4b97a492c500808ea0de68a5ecd9&key=sq_h5_gateway"},{"key":"shuqisyurl9","val":"https://render.shuqireader.com/load/resource?sdk=13.3&utdid=YM1WaRDlHocDABzxFyQbxSa8&ustatus=0&first_placeid=111111&net_env=wifi&placeid=111111&user_id=2130608462&sn=08CAE9C6D7B1BB73951ED8EC36E41B5049BD0AEC&umidtoken=YM1WaRDlHocDABzxFyQbxSa8&msv=8.0.0&brand=Apple&imei=8B88F6F098890E26908E13EA0EDE81AD9DC5A93C&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=iOS&ver=210301&mod=UnknowniPod&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=5CD9F0C5-958D-46DF-B177-1C7A1E23C1E8"},{"key":"shuqisybody9","val":"appVer=4.3.6.0&imei=8B88F6F098890E26908E13EA0EDE81AD9DC5A93C&isNewUser=1&params=%7B%22resources%22%3A%7B%22ShuqiVipEntry%22%3A%7B%7D%2C%22personalCardConfig%22%3A%7B%7D%7D%7D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=a5201290aece368dbba65df372ef20c5&sn=08CAE9C6D7B1BB73951ED8EC36E41B5049BD0AEC&soft_id=21&timestamp=1624096745&user_id=2130608462&ver=210301"},{"key":"shuqispbody9","val":"_public=skinId%3D999%26idfa%3D5CD9F0C5-958D-46DF-B177-1C7A1E23C1E8%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26umidtoken%3DYM1WaRDlHocDABzxFyQbxSa8%26user_id%3D2130608462%26sn%3D08CAE9C6D7B1BB73951ED8EC36E41B5049BD0AEC%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D8B88F6F098890E26908E13EA0EDE81AD9DC5A93C%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DUnknowniPod%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYM1WaRDlHocDABzxFyQbxSa8%26utype%3Dpre_vip%26sdk%3D13.3&deliveryId=525&key=sq_app_ad&miniWua=HHnB_Tkbbesvyusy1aAqcb5SBjo5HShHeDTEScQWxNRZcEcM%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=626&sign=96E36332AA494518F2BE72066935CAF3&timestamp=1624096767&userId=2130608462&user_id=2130608462&wua=HIVW_i5gMN5l8R9BmJg43vs4iaaa8ilhzGf7yJ2qSk72JNMK3SGEcADr1oGiBbDpdzpP1TgjHdu6a7hA8KtU1jCa/yUT/Gh2S%2BGFB1YUWOmPzQRbsA8qN9NWX2DF4JewLVzQ0PgY6Upq84foiPNbVZ7Z8HzCer60WQ7ioneXFL0ntQqz8kFBLNFzTioLnUcWis0caq7MbYRkQ5aDrTCYGfUMd8xkIiil8weZyiWnmMp%2BekU4%3D"},{"key":"shuqiscbody9","val":""},{"key":"shuqiydbody9","val":""},{"key":"shuqiqdbody9","val":"clientTimestamp=1624096759&position=501&userId=2130608462&signInType=1&wua=HIVW_701IyEDSJH8jo0QE5BxdpIULy1vRalVzHLxe5E7OE3TdIzvIIiqctl5m3j5qtwB529Q8DiAxIHyjqXbkujcKR1h03dR2zBAEhDOHy7puaNGSWgwlMYvF81L5sV6ShrukB8Q62ufBrthyw%2FQd9lx9Kz9T8pLLPW77x%2F%2Fhf%2Bybg6PU9EmqdUqdgDaXs0wp0KqL8WNUSP70Oz33R7tSib7Rh0PopOTDZCn0b2w4K2hUWZY%3D&ua=&miniWua=HHnB_tVb2Xg4EiTcoLoue38PuOOUq9Sh9o5JqOL49wu1NM3g%3D&umidtoken=YM1WaRDlHocDABzxFyQbxSa8&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&sign=fc351a848b267850b52f9c3671d1c43f&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.3%26utdid%3DYM1WaRDlHocDABzxFyQbxSa8%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2130608462%26sn%3D08CAE9C6D7B1BB73951ED8EC36E41B5049BD0AEC%26umidtoken%3DYM1WaRDlHocDABzxFyQbxSa8%26msv%3D8.0.0%26brand%3DApple%26imei%3D8B88F6F098890E26908E13EA0EDE81AD9DC5A93C%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPod%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D5CD9F0C5-958D-46DF-B177-1C7A1E23C1E8"},{"key":"shuqirwbody9","val":"serviceWorkerOn=1&stopPullRefresh=1&from=ShuqiTab&upf=20368&sdk=13.3&utdid=YM1WaRDlHocDABzxFyQbxSa8&ustatus=0&first_placeid=111111&net_env=wifi&placeid=111111&user_id=2130608462&sn=08CAE9C6D7B1BB73951ED8EC36E41B5049BD0AEC&umidtoken=YM1WaRDlHocDABzxFyQbxSa8&msv=8.0.0&brand=Apple&imei=8B88F6F098890E26908E13EA0EDE81AD9DC5A93C&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=1&ver=210301&mod=UnknowniPod&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=5CD9F0C5-958D-46DF-B177-1C7A1E23C1E8&params=%7B%22resources%22%3A%7B%22ShuqiBsDailyTask%22%3A%7B%7D%7D%7D&userId=2130608462&placeId=111111&timestamp=1624096771&sqSv=1.0&sign=608df0f7df3905b1dc4aae4241d435ae&key=sq_h5_gateway&_public="},{"key":"shuqifxbody9","val":""},{"key":"shuqisprwurl9","val":"https://ocean.shuqireader.com/api/ad/adserver/v1/api/getAdInfo?appVer=4.3.6.0&placeId=111111&platform=iOS&requestSrc=h5&resourceId=626&timestamp=1624096792&user_id=2130608462&sqSv=1.0&sign=adbcb9968145785a8bbd97b992ce68b3&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.3%26utdid%3DYM1WaRDlHocDABzxFyQbxSa8%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2130608462%26sn%3D08CAE9C6D7B1BB73951ED8EC36E41B5049BD0AEC%26umidtoken%3DYM1WaRDlHocDABzxFyQbxSa8%26msv%3D8.0.0%26brand%3DApple%26imei%3D8B88F6F098890E26908E13EA0EDE81AD9DC5A93C%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPod%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D5CD9F0C5-958D-46DF-B177-1C7A1E23C1E8"},{"key":"shuqijlbody9","val":"requestSrc=h5&userId=2130608462&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624096771&sqSv=1.0&sign=ce53023004d71882078c32d668a85f8b&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.3%26utdid%3DYM1WaRDlHocDABzxFyQbxSa8%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2130608462%26sn%3D08CAE9C6D7B1BB73951ED8EC36E41B5049BD0AEC%26umidtoken%3DYM1WaRDlHocDABzxFyQbxSa8%26msv%3D8.0.0%26brand%3DApple%26imei%3D8B88F6F098890E26908E13EA0EDE81AD9DC5A93C%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPod%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D5CD9F0C5-958D-46DF-B177-1C7A1E23C1E8"},{"key":"shuqisqjlbody9","val":"src=&userId=2130608462&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624096763&sqSv=1.0&sign=a8187bf5b3f7db9f2bf3df41de9d8e55&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.3%26utdid%3DYM1WaRDlHocDABzxFyQbxSa8%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2130608462%26sn%3D08CAE9C6D7B1BB73951ED8EC36E41B5049BD0AEC%26umidtoken%3DYM1WaRDlHocDABzxFyQbxSa8%26msv%3D8.0.0%26brand%3DApple%26imei%3D8B88F6F098890E26908E13EA0EDE81AD9DC5A93C%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPod%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D5CD9F0C5-958D-46DF-B177-1C7A1E23C1E8"},{"key":"shuqicjyurl9","val":"https://ocean.shuqireader.com/api/activity/activity/v1/lottery/info?timestamp=1624096795&userId=2130608462&activityId=311&sqSv=1.0&sign=399b8acd9a61f7055cdd3f17da7cb673&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.3%26utdid%3DYM1WaRDlHocDABzxFyQbxSa8%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2130608462%26sn%3D08CAE9C6D7B1BB73951ED8EC36E41B5049BD0AEC%26umidtoken%3DYM1WaRDlHocDABzxFyQbxSa8%26msv%3D8.0.0%26brand%3DApple%26imei%3D8B88F6F098890E26908E13EA0EDE81AD9DC5A93C%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPod%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D5CD9F0C5-958D-46DF-B177-1C7A1E23C1E8"},{"key":"shuqicjcsbody9","val":"_public=skinId%3D999%26idfa%3D5CD9F0C5-958D-46DF-B177-1C7A1E23C1E8%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26umidtoken%3DYM1WaRDlHocDABzxFyQbxSa8%26user_id%3D2130608462%26sn%3D08CAE9C6D7B1BB73951ED8EC36E41B5049BD0AEC%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D8B88F6F098890E26908E13EA0EDE81AD9DC5A93C%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DUnknowniPod%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYM1WaRDlHocDABzxFyQbxSa8%26utype%3Dpre_vip%26sdk%3D13.3&deliveryId=711&key=sq_app_ad&miniWua=HHnB_3t5hGhA2jqKJQPH%2B3awL/3ZJUzKniuqHSHIvJ2wbTbs%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=703&sign=3398BE1F393E72CEB4B980E99D27F333&timestamp=1624096777&userId=2130608462&user_id=2130608462&wua=HIVW_ex0E1H5VInlsUNOMtlgXqqT/BtYKsjErCmSKrBoTX7HvCz0fwGGtkZn2NMfzj8rFJnHsdfQ/FpNY897tnyS7TTNsF7xdDrkCckN4KCgTqDzx2QXtAXJiABYMojY2E%2BzAvY/jY9LucvT0jPR0kGSZUkV8uM1eX2iUWMdluxyiuMWcNSATh0mnJx8j1Dx1mJdrolExmIChDerfrK1DMW0lZR2jyJLsbLzZyJPdcRGeVFw%3D"},{"key":"shuqicjbody9","val":"wua=HIVW_KImxQgyvGNisACWDHiENYxgS00QGieKThEwcOwOPTg2%2FQB37slzLFioHakVrJUliZO3UP%2BvsTXppFuXXlE%2B8UJiTBWEYMLOeDo3yH%2FjLONQ1e060mrBzXvcnJyANV%2FIsKSbuJt6d5DaC46Nj63%2BRUHE8HL9r769phaBrZGTpCx47Wlfc8ziHfj7Us0JE2PXj7HBnGa8YzptiEw1dqQVGTwtDw87VoKQmdTD%2F1gcvsH4%3D&ua=&userId=2130608462&umidtoken=YM1WaRDlHocDABzxFyQbxSa8&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&asac=2A20C07RJ9F51AOEFSNHDR&timestamp=1624096781&activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&sqSv=1.0&sign=8eb35f8044bc296ba8b43df4192f4645&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.3%26utdid%3DYM1WaRDlHocDABzxFyQbxSa8%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2130608462%26sn%3D08CAE9C6D7B1BB73951ED8EC36E41B5049BD0AEC%26umidtoken%3DYM1WaRDlHocDABzxFyQbxSa8%26msv%3D8.0.0%26brand%3DApple%26imei%3D8B88F6F098890E26908E13EA0EDE81AD9DC5A93C%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPod%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D5CD9F0C5-958D-46DF-B177-1C7A1E23C1E8"},{"key":"shuqijsspbody9","val":""},{"key":"shuqijsydurl9","val":""},{"key":"shuqijsydbody9","val":""},{"key":"shuqijsqdbody9","val":""},{"key":"shuqijsqdspyurl9","val":""},{"key":"shuqijsqdspbody9","val":""},{"key":"shuqijsrwbody9","val":""},{"key":"shuqijsfxbody9","val":""},{"key":"shuqijsbookurl9","val":""},{"key":"shuqijsbookbody9","val":""},{"key":"shuqijssprwurl9","val":""},{"key":"shuqiuserurl10","val":"https://ocean.shuqireader.com/api/jaccount/accountapi/v1/sapi/account/getBindinfo?userId=2128716440&sqSv=1.0&timestamp=1624096867&sign=af5999ad064155be98569e0d7f0ffe7b&key=sq_h5_gateway"},{"key":"shuqisyurl10","val":"https://render.shuqireader.com/load/resource?sdk=13.4.1&utdid=YM3AK5q4nFsDALk%2BE6OYMSyd&ustatus=0&first_placeid=111111&net_env=3g&placeid=111111&user_id=2128716440&sn=38977E24DA1A5CDBE9E021A86C28F5830CCD9140&umidtoken=YM3AK5q4nFsDALk%2BE6OYMSyd&msv=8.0.0&brand=Apple&imei=EBBC33BFF237A16508C8ADD2886CDA0EDFA81C21&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=iOS&ver=210301&mod=iPad4G&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=737320B8-F2D6-40EF-A3CF-E6F4C8FB879F"},{"key":"shuqisybody10","val":"appVer=4.3.6.0&imei=EBBC33BFF237A16508C8ADD2886CDA0EDFA81C21&isNewUser=1&params=%7B%22resources%22%3A%7B%22ShuqiVipEntry%22%3A%7B%7D%2C%22personalCardConfig%22%3A%7B%7D%7D%7D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=fece8a2dfd315faf4b6a47f7d573f764&sn=38977E24DA1A5CDBE9E021A86C28F5830CCD9140&soft_id=21&timestamp=1624096814&user_id=2128716440&ver=210301"},{"key":"shuqispbody10","val":"_public=skinId%3D999%26idfa%3D737320B8-F2D6-40EF-A3CF-E6F4C8FB879F%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26umidtoken%3DYM3AK5q4nFsDALk%2BE6OYMSyd%26user_id%3D2128716440%26sn%3D38977E24DA1A5CDBE9E021A86C28F5830CCD9140%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3DEBBC33BFF237A16508C8ADD2886CDA0EDFA81C21%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPad4G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYM3AK5q4nFsDALk%2BE6OYMSyd%26utype%3Dpre_vip%26sdk%3D13.4.1&deliveryId=525&key=sq_app_ad&miniWua=HHnB_C7GyaeukNjpxt/yjQj6skID3Y1REXe2qaMn/M9YXHPQ%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=626&sign=B7745CB7F9E53D9B5967E67747D62282&timestamp=1624096836&userId=2128716440&user_id=2128716440&wua=HIVW_lvUMcTmuqQ/B4lTyCqRRxn%2BKt0d1KFIY9Ve3A7GfSFd8G2cLNfoBg0DlOf8l965fogb0tlqdfLmxYjYtEXQI0gyGwwO63vxF6oN2OaBzTaB0mFlfT0WstTCca8TgDWMXW4dxj%2BU/uQ4TK2BnTm7iDkQoyzgKFZPhRFnJQTw8z6zGcQWajA5KJ3RQ8FeYttdKlcsrlQOAW9/DbhLlANyZv%2BelsziGhzByGn7Dt1vLDQk%3D"},{"key":"shuqiscbody10","val":""},{"key":"shuqiydbody10","val":""},{"key":"shuqiqdbody10","val":"clientTimestamp=1624096827&position=501&userId=2128716440&signInType=1&wua=HIVW_i6bC78PFUXsoFm8yxei5Xshm3ffKOnavaA8BqqoAAkVrC6q6zIPNWd1xcTognZxVpJuurDsbGwFo%2BfB%2BRjQmhmiX0B%2FwUWfH5sJaf1lwoQBvLQ9TVzA3OO44MSSG3nUymhRB7ufLEiuK7cnXOYpUVdE1Xw6RAgPTceWJeT5zwzeMkir%2BwzD3Euhs2lzlO0FET4HjxiU53dtFvnk6qcTNJFGBfrrrRhjqbWdbmsJe6P0%3D&ua=&miniWua=HHnB_bFEnQN70x7vD9dHVrSgPrFV11mfGpszzi8takg4svPY%3D&umidtoken=YM3AK5q4nFsDALk%2BE6OYMSyd&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&sign=0c5b7ce93338db1dd6825ca5983e764d&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.4.1%26utdid%3DYM3AK5q4nFsDALk%252BE6OYMSyd%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2128716440%26sn%3D38977E24DA1A5CDBE9E021A86C28F5830CCD9140%26umidtoken%3DYM3AK5q4nFsDALk%252BE6OYMSyd%26msv%3D8.0.0%26brand%3DApple%26imei%3DEBBC33BFF237A16508C8ADD2886CDA0EDFA81C21%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad4G%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D737320B8-F2D6-40EF-A3CF-E6F4C8FB879F"},{"key":"shuqirwbody10","val":"serviceWorkerOn=1&stopPullRefresh=1&from=ShuqiTab&upf=20368&sdk=13.4.1&utdid=YM3AK5q4nFsDALk%2BE6OYMSyd&ustatus=0&first_placeid=111111&net_env=3g&placeid=111111&user_id=2128716440&sn=38977E24DA1A5CDBE9E021A86C28F5830CCD9140&umidtoken=YM3AK5q4nFsDALk%2BE6OYMSyd&msv=8.0.0&brand=Apple&imei=EBBC33BFF237A16508C8ADD2886CDA0EDFA81C21&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=1&ver=210301&mod=iPad4G&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=737320B8-F2D6-40EF-A3CF-E6F4C8FB879F&params=%7B%22resources%22%3A%7B%22ShuqiBsDailyTask%22%3A%7B%7D%7D%7D&userId=2128716440&placeId=111111&timestamp=1624096842&sqSv=1.0&sign=2247491d5d71a89ad9de88d4de1d128c&key=sq_h5_gateway&_public="},{"key":"shuqifxbody10","val":""},{"key":"shuqisprwurl10","val":"https://ocean.shuqireader.com/api/ad/adserver/v1/api/getAdInfo?appVer=4.3.6.0&placeId=111111&platform=iOS&requestSrc=h5&resourceId=626&timestamp=1624096868&user_id=2128716440&sqSv=1.0&sign=56be1614c4abf2fcb4232a4b547bcde9&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.4.1%26utdid%3DYM3AK5q4nFsDALk%252BE6OYMSyd%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2128716440%26sn%3D38977E24DA1A5CDBE9E021A86C28F5830CCD9140%26umidtoken%3DYM3AK5q4nFsDALk%252BE6OYMSyd%26msv%3D8.0.0%26brand%3DApple%26imei%3DEBBC33BFF237A16508C8ADD2886CDA0EDFA81C21%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad4G%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D737320B8-F2D6-40EF-A3CF-E6F4C8FB879F"},{"key":"shuqijlbody10","val":"requestSrc=h5&userId=2128716440&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624096842&sqSv=1.0&sign=8bacd869b840c4495ecb2834ca846944&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.4.1%26utdid%3DYM3AK5q4nFsDALk%252BE6OYMSyd%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2128716440%26sn%3D38977E24DA1A5CDBE9E021A86C28F5830CCD9140%26umidtoken%3DYM3AK5q4nFsDALk%252BE6OYMSyd%26msv%3D8.0.0%26brand%3DApple%26imei%3DEBBC33BFF237A16508C8ADD2886CDA0EDFA81C21%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad4G%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D737320B8-F2D6-40EF-A3CF-E6F4C8FB879F"},{"key":"shuqisqjlbody10","val":"src=&userId=2128716440&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624096833&sqSv=1.0&sign=32a62bd9027e50dddf3af3c70c5f37d0&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.4.1%26utdid%3DYM3AK5q4nFsDALk%252BE6OYMSyd%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2128716440%26sn%3D38977E24DA1A5CDBE9E021A86C28F5830CCD9140%26umidtoken%3DYM3AK5q4nFsDALk%252BE6OYMSyd%26msv%3D8.0.0%26brand%3DApple%26imei%3DEBBC33BFF237A16508C8ADD2886CDA0EDFA81C21%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad4G%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D737320B8-F2D6-40EF-A3CF-E6F4C8FB879F"},{"key":"shuqicjyurl10","val":"https://ocean.shuqireader.com/api/activity/activity/v1/lottery/info?timestamp=1624096870&userId=2128716440&activityId=311&sqSv=1.0&sign=36812bc572ddcf117362b352fcd91da8&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.4.1%26utdid%3DYM3AK5q4nFsDALk%252BE6OYMSyd%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2128716440%26sn%3D38977E24DA1A5CDBE9E021A86C28F5830CCD9140%26umidtoken%3DYM3AK5q4nFsDALk%252BE6OYMSyd%26msv%3D8.0.0%26brand%3DApple%26imei%3DEBBC33BFF237A16508C8ADD2886CDA0EDFA81C21%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad4G%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D737320B8-F2D6-40EF-A3CF-E6F4C8FB879F"},{"key":"shuqicjcsbody10","val":"_public=skinId%3D999%26idfa%3D737320B8-F2D6-40EF-A3CF-E6F4C8FB879F%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26umidtoken%3DYM3AK5q4nFsDALk%2BE6OYMSyd%26user_id%3D2128716440%26sn%3D38977E24DA1A5CDBE9E021A86C28F5830CCD9140%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3DEBBC33BFF237A16508C8ADD2886CDA0EDFA81C21%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPad4G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYM3AK5q4nFsDALk%2BE6OYMSyd%26utype%3Dpre_vip%26sdk%3D13.4.1&deliveryId=711&key=sq_app_ad&miniWua=HHnB_ffyygtNfzn6S87ALNBvApcpukFAs9T1SuTVeZes6aGs%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=703&sign=7DFEF43A337BD6A1B6590594B0D71180&timestamp=1624096848&userId=2128716440&user_id=2128716440&wua=HIVW_UJfbC7LxV6yhtBUmWDcfB369Oxt64AtT6GBbNpzMvcwzqcs33H%2Bk%2B3i%2BsmS%2BXUpej4x5%2BGhVr3CqM%2B7%2Br/s3uvV7gSh8tbKlNxItOdLsxtXjUIQLp5WvVXS6abytmul/tobhaVk3OrhUYOiaGUgYjdJjIbDWxhELpOcuNpBXPw0ZBg1CgCsfnVXOslfKXh4szDDpvY9uLDylVac4sy5ap%2BNb%2BF0GoO0VGhzcdQz/RHU%3D"},{"key":"shuqicjbody10","val":"wua=HIVW_yUMCGdNly30waEkqJa193V3bEc2hhiOf2S38eyjX32JRoUtycGDFDDI1yzqleBnZ2d%2BDWs8xDxRBM1EM5c8YJZabvz7RT7y9Jv%2FXT5s%2FgS0B1kh7c2z9eK4Nv4md28WedafohMKdr2aVpx4m5MVvUczBO3jyU8ZDbYX%2FayaqB1yNojIC%2F70OG6fuGduvQ03mus2F19eEyO4bNP846eJKoMQL4M0H4ELzyiVHVb4A4Uw%3D&ua=&userId=2128716440&umidtoken=YM3AK5q4nFsDALk%2BE6OYMSyd&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&asac=2A20C07RJ9F51AOEFSNHDR&timestamp=1624096853&activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&sqSv=1.0&sign=c601d434336b97e1ed7f11b9347fdac1&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.4.1%26utdid%3DYM3AK5q4nFsDALk%252BE6OYMSyd%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2128716440%26sn%3D38977E24DA1A5CDBE9E021A86C28F5830CCD9140%26umidtoken%3DYM3AK5q4nFsDALk%252BE6OYMSyd%26msv%3D8.0.0%26brand%3DApple%26imei%3DEBBC33BFF237A16508C8ADD2886CDA0EDFA81C21%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad4G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D737320B8-F2D6-40EF-A3CF-E6F4C8FB879F"},{"key":"shuqijsspbody10","val":""},{"key":"shuqijsydurl10","val":""},{"key":"shuqijsydbody10","val":""},{"key":"shuqijsqdbody10","val":""},{"key":"shuqijsqdspyurl10","val":""},{"key":"shuqijsqdspbody10","val":""},{"key":"shuqijsrwbody10","val":""},{"key":"shuqijsfxbody10","val":""},{"key":"shuqijsbookurl10","val":""},{"key":"shuqijsbookbody10","val":""},{"key":"shuqijssprwurl10","val":""},{"key":"shuqiuserurl11","val":"https://ocean.shuqireader.com/api/jaccount/accountapi/v1/sapi/account/getBindinfo?userId=2131488527&sqSv=1.0&timestamp=1624096944&sign=85d77cdf26bc383ffcaa6d31003bdf35&key=sq_h5_gateway"},{"key":"shuqisyurl11","val":"https://render.shuqireader.com/load/resource?sdk=13.4&utdid=YM1WaRDlHocDABzxFyQbxSa8&ustatus=0&first_placeid=111111&net_env=4g&placeid=111111&user_id=2131488527&sn=D9B69429727679ACA9AF3326EB4E4D975C2EDE99&umidtoken=YM1WaRDlHocDABzxFyQbxSa8&msv=8.0.0&brand=Apple&imei=154D93664C08F180A77B944A9385EAFBDD7918F3&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=iOS&ver=210301&mod=iPhone6s&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=C3265BAE-A4BE-4526-920F-489DC4CBB837"},{"key":"shuqisybody11","val":"appVer=4.3.6.0&imei=154D93664C08F180A77B944A9385EAFBDD7918F3&isNewUser=1&params=%7B%22resources%22%3A%7B%22ShuqiVipEntry%22%3A%7B%7D%2C%22personalCardConfig%22%3A%7B%7D%7D%7D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=80850f483fc8ba65dad79cbd8f80d085&sn=D9B69429727679ACA9AF3326EB4E4D975C2EDE99&soft_id=21&timestamp=1624096889&user_id=2131488527&ver=210301"},{"key":"shuqispbody11","val":"_public=skinId%3D999%26idfa%3DC3265BAE-A4BE-4526-920F-489DC4CBB837%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26umidtoken%3DYM1WaRDlHocDABzxFyQbxSa8%26user_id%3D2131488527%26sn%3DD9B69429727679ACA9AF3326EB4E4D975C2EDE99%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D154D93664C08F180A77B944A9385EAFBDD7918F3%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhone6s%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYM1WaRDlHocDABzxFyQbxSa8%26utype%3Dpre_vip%26sdk%3D13.4&deliveryId=525&key=sq_app_ad&miniWua=HHnB_svj/zY2um9IZ/zci1K6A38ubRdL5ppImw7r2LUsayxQ%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=626&sign=2441948D263C9027E7035E8BA6F9F39D&timestamp=1624096909&userId=2131488527&user_id=2131488527&wua=HIVW_ZgSVeGibaz/Zn%2B0Bc9IX4gLs%2BsPj/LIh96Svj5RmeouJYSrgohlRDXA/p9eHjPKSex5XLFZTAReSf/DB0zdmPT5RX4/YbPnbEaTG5wyzTDITq6KiS%2B9HEK69dw9rAntPktMxr4egpHNTugECwDCZFByPyuqaynRoXa74YAFBX3QkC/6lYrfJxlWrfnVDzMCbFqIfjHImjJk/tpA8xWwSyfPuyrlbplk4oXc65097L58%3D"},{"key":"shuqiscbody11","val":""},{"key":"shuqiydbody11","val":""},{"key":"shuqiqdbody11","val":"clientTimestamp=1624096903&position=501&userId=2131488527&signInType=1&wua=HIVW_ttDrQ%2B3Pjn8%2BMCSLciKvS5Bf3a1TfxVN4j3sMp9Rw2N%2BBsWCDNVWDEeFQbwS8fxkWxNhWy2KIpGQqhvqAE6zQ00QzUq%2F3ar47Uurr3rmTNyk%2BINqibT9l35G7h04DWaY3OB7au4Wrs6Yc%2FIT8JCShFSWkKIRaIcElrtgsJraEObAJu%2FXg265vC%2FTExM2JVYXuOpEsVarF%2BI74syedpedyO0f86hhna5ZamLtGzCpxU8%3D&ua=&miniWua=HHnB_oPTRCp%2BY%2FpXdT928Oho%2FRV5UTeX17DpVWE6Euu%2B%2FugQ%3D&umidtoken=YM1WaRDlHocDABzxFyQbxSa8&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&sign=288e7b50987d0a3a3cb1e823e3f67334&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.4%26utdid%3DYM1WaRDlHocDABzxFyQbxSa8%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2131488527%26sn%3DD9B69429727679ACA9AF3326EB4E4D975C2EDE99%26umidtoken%3DYM1WaRDlHocDABzxFyQbxSa8%26msv%3D8.0.0%26brand%3DApple%26imei%3D154D93664C08F180A77B944A9385EAFBDD7918F3%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone6s%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DC3265BAE-A4BE-4526-920F-489DC4CBB837"},{"key":"shuqirwbody11","val":"serviceWorkerOn=1&stopPullRefresh=1&from=ShuqiTab&upf=20368&sdk=13.4&utdid=YM1WaRDlHocDABzxFyQbxSa8&ustatus=0&first_placeid=111111&net_env=4g&placeid=111111&user_id=2131488527&sn=D9B69429727679ACA9AF3326EB4E4D975C2EDE99&umidtoken=YM1WaRDlHocDABzxFyQbxSa8&msv=8.0.0&brand=Apple&imei=154D93664C08F180A77B944A9385EAFBDD7918F3&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&session=&skinColor=23B383&platform=1&ver=210301&mod=iPhone6s&statusBarHeight=44.000000&skinVersion=1&wh=1242x2688&soft_id=21&utype=pre_vip&skinId=999&idfa=C3265BAE-A4BE-4526-920F-489DC4CBB837&params=%7B%22resources%22%3A%7B%22ShuqiBsDailyTask%22%3A%7B%7D%7D%7D&userId=2131488527&placeId=111111&timestamp=1624096912&sqSv=1.0&sign=642912bd80c30c06516256f97b4ccc3c&key=sq_h5_gateway&_public="},{"key":"shuqifxbody11","val":""},{"key":"shuqisprwurl11","val":"https://ocean.shuqireader.com/api/ad/adserver/v1/api/getAdInfo?appVer=4.3.6.0&placeId=111111&platform=iOS&requestSrc=h5&resourceId=626&timestamp=1624096937&user_id=2131488527&sqSv=1.0&sign=b1f8fae6697dcda18318ec0a824b16de&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.4%26utdid%3DYM1WaRDlHocDABzxFyQbxSa8%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2131488527%26sn%3DD9B69429727679ACA9AF3326EB4E4D975C2EDE99%26umidtoken%3DYM1WaRDlHocDABzxFyQbxSa8%26msv%3D8.0.0%26brand%3DApple%26imei%3D154D93664C08F180A77B944A9385EAFBDD7918F3%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone6s%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DC3265BAE-A4BE-4526-920F-489DC4CBB837"},{"key":"shuqijlbody11","val":"requestSrc=h5&userId=2131488527&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624096912&sqSv=1.0&sign=7e66f8465af4a9e59d3f7839dda61bf2&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.4%26utdid%3DYM1WaRDlHocDABzxFyQbxSa8%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2131488527%26sn%3DD9B69429727679ACA9AF3326EB4E4D975C2EDE99%26umidtoken%3DYM1WaRDlHocDABzxFyQbxSa8%26msv%3D8.0.0%26brand%3DApple%26imei%3D154D93664C08F180A77B944A9385EAFBDD7918F3%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone6s%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DC3265BAE-A4BE-4526-920F-489DC4CBB837"},{"key":"shuqisqjlbody11","val":"src=&userId=2131488527&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624096906&sqSv=1.0&sign=47e38798c519c3c8aba42f60157b4e01&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.4%26utdid%3DYM1WaRDlHocDABzxFyQbxSa8%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2131488527%26sn%3DD9B69429727679ACA9AF3326EB4E4D975C2EDE99%26umidtoken%3DYM1WaRDlHocDABzxFyQbxSa8%26msv%3D8.0.0%26brand%3DApple%26imei%3D154D93664C08F180A77B944A9385EAFBDD7918F3%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone6s%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DC3265BAE-A4BE-4526-920F-489DC4CBB837"},{"key":"shuqicjyurl11","val":"https://ocean.shuqireader.com/api/activity/activity/v1/lottery/info?timestamp=1624096945&userId=2131488527&activityId=311&sqSv=1.0&sign=28031ad1f16605d191cb5f7b3ee9a231&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.4%26utdid%3DYM1WaRDlHocDABzxFyQbxSa8%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2131488527%26sn%3DD9B69429727679ACA9AF3326EB4E4D975C2EDE99%26umidtoken%3DYM1WaRDlHocDABzxFyQbxSa8%26msv%3D8.0.0%26brand%3DApple%26imei%3D154D93664C08F180A77B944A9385EAFBDD7918F3%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone6s%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DC3265BAE-A4BE-4526-920F-489DC4CBB837"},{"key":"shuqicjcsbody11","val":"_public=skinId%3D999%26idfa%3DC3265BAE-A4BE-4526-920F-489DC4CBB837%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26umidtoken%3DYM1WaRDlHocDABzxFyQbxSa8%26user_id%3D2131488527%26sn%3DD9B69429727679ACA9AF3326EB4E4D975C2EDE99%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D154D93664C08F180A77B944A9385EAFBDD7918F3%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhone6s%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYM1WaRDlHocDABzxFyQbxSa8%26utype%3Dpre_vip%26sdk%3D13.4&deliveryId=711&key=sq_app_ad&miniWua=HHnB_4zApGPpTA8r822%2BeJGggBh2ed4OS2m2Qi3DypfnUvkA%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=703&sign=6650DFB8EA3728F5E75CFFA7F3C4A599&timestamp=1624096920&userId=2131488527&user_id=2131488527&wua=HIVW_P51oLiMnGAqPVhM5hhfwWHIi8SEyPIbPZdNYcDWTW7OuFQe5an%2Bi9OS/9xE/pfRuzZb/bsAO%2BfJy/tpgQkjMqucGVdEhvAhkxPuxjXrqlXV0cLN3phgFwBzIajR9TRwj2AbfubFRAnPaBJ51PIf1Ew//ewHd47jlgA9t%2BY8bEwDbtNDCllyiVQ74YqFPUn3f6BtBfJ%2BYpSAnyRf8iwXCsro1yTrzvpOZGnXr8Jpmmw0%3D"},{"key":"shuqicjbody11","val":"wua=HIVW_lwZ2FiT%2FtqwQgTV5Wbxv%2FmDAY9SSLQP0dTlthieywBP8r0ytL0vmY1ZHImDEmsyS%2F%2BSZIbkcL96z98rKYFL3jSREKA2mQyM3sU7L%2Fgde0Yl0fvlrqtVyTp2310KRQ%2FCcsMJVZ9NGglHRL0T%2F%2Flsq%2FjeSpZrdpMleMOhTFPOBOWQ2ebAdDx1lkTt5%2B5Tpp0AJD1j3Ta5U2KcWpXNoois509lvPR3t1kcoymXiF8cndvw%3D&ua=&userId=2131488527&umidtoken=YM1WaRDlHocDABzxFyQbxSa8&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&asac=2A20C07RJ9F51AOEFSNHDR&timestamp=1624096925&activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&sqSv=1.0&sign=4564976c9bfd37bcae580c3f597a6a5f&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.4%26utdid%3DYM1WaRDlHocDABzxFyQbxSa8%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2131488527%26sn%3DD9B69429727679ACA9AF3326EB4E4D975C2EDE99%26umidtoken%3DYM1WaRDlHocDABzxFyQbxSa8%26msv%3D8.0.0%26brand%3DApple%26imei%3D154D93664C08F180A77B944A9385EAFBDD7918F3%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone6s%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DC3265BAE-A4BE-4526-920F-489DC4CBB837"},{"key":"shuqijsspbody11","val":""},{"key":"shuqijsydurl11","val":""},{"key":"shuqijsydbody11","val":""},{"key":"shuqijsqdbody11","val":""},{"key":"shuqijsqdspyurl11","val":""},{"key":"shuqijsqdspbody11","val":""},{"key":"shuqijsrwbody11","val":""},{"key":"shuqijsfxbody11","val":""},{"key":"shuqijsbookurl11","val":""},{"key":"shuqijsbookbody11","val":""},{"key":"shuqijssprwurl11","val":""},{"key":"shuqiuserurl12","val":"https://ocean.shuqireader.com/api/jaccount/accountapi/v1/sapi/account/getBindinfo?userId=2127571769&sqSv=1.0&timestamp=1624097174&sign=68a0f42f621bed1f8ae26f1c24107031&key=sq_h5_gateway"},{"key":"shuqisyurl12","val":"https://render.shuqireader.com/load/resource?sdk=13.4&utdid=YM1WaRDlHocDABzxFyQbxSa8&ustatus=0&first_placeid=111111&net_env=3g&placeid=111111&user_id=2127571769&sn=F98490F0D842DECD5588C054166055E65E8808A0&umidtoken=YM1WaRDlHocDABzxFyQbxSa8&msv=8.0.0&brand=Apple&imei=D376681D2A39BE0C15F63C965D1C8780DA7103CB&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=iOS&ver=210301&mod=iPad2G&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=5B69382E-FFFF-4CAF-B05D-9B637D4B0CD3"},{"key":"shuqisybody12","val":"appVer=4.3.6.0&imei=D376681D2A39BE0C15F63C965D1C8780DA7103CB&isNewUser=1&params=%7B%22resources%22%3A%7B%22ShuqiVipEntry%22%3A%7B%7D%2C%22personalCardConfig%22%3A%7B%7D%7D%7D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=fe857e42836b0620a48bdab49e70f0b4&sn=F98490F0D842DECD5588C054166055E65E8808A0&soft_id=21&timestamp=1624097045&user_id=2127571769&ver=210301"},{"key":"shuqispbody12","val":"_public=skinId%3D999%26idfa%3D5B69382E-FFFF-4CAF-B05D-9B637D4B0CD3%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26umidtoken%3DYM1WaRDlHocDABzxFyQbxSa8%26user_id%3D2127571769%26sn%3DF98490F0D842DECD5588C054166055E65E8808A0%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3DD376681D2A39BE0C15F63C965D1C8780DA7103CB%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPad2G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYM1WaRDlHocDABzxFyQbxSa8%26utype%3Dpre_vip%26sdk%3D13.4&deliveryId=525&key=sq_app_ad&miniWua=HHnB_/m5G85O59cPu8ZrWj9HUyeOiOuljS3d0Dg%2BRbw5ajx0%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=626&sign=E04ECA819589319583D32FA1BA7CDA5F&timestamp=1624097086&userId=2127571769&user_id=2127571769&wua=HIVW_xZX/4SI6gM95WRm9%2B82RI7rwtaZmScAV%2Bj3YYbsvh16Qqri08CX0Etaw3AM9nIpETCzIiG6U6Hv1m%2BuI1GrmkLVvhOiXLATmf2hc864YvYSDMn7DauKdxkjGRktUfnJvMiSpnDA%2BHZl9uY9cHocAnm2bBflkBurK2QhBA6pfVbRfwohC%2BCKJ5s4jLtm4qeGARVKvBNIKtCNMmSkb5ih2EOk6nyOJzmNGUdhd9IvL5sU%3D"},{"key":"shuqiscbody12","val":""},{"key":"shuqiydbody12","val":""},{"key":"shuqiqdbody12","val":"clientTimestamp=1624097069&position=501&userId=2127571769&signInType=1&wua=HIVW_1nDsHdNjqjNnIzxn%2FwXBseohuGyPX3fahyarZ%2FGU780XMeRQNBKRRGFsItF0LgV%2BWUsRYTlDllTdVoQy2ctrJPniHpql%2BSfMS4r4BOwtza1mAoV3%2BF8fU9pxyjygvt%2FXB9fV2QF5phAh%2FaOBd%2FnpfsUfdF91btUkhBGOLrk9yF5AJXBCeMRTWVdARrY3LiPaHGiIIDZwCuIOa%2FZO%2BZNj3fuQ5EtFEROVROLTopuxoUM%3D&ua=&miniWua=HHnB_W0clld8xWoNd9oa7toCbQgrrgpRrghXTdHbSwGAm4RE%3D&umidtoken=YM1WaRDlHocDABzxFyQbxSa8&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&sign=3289a6c8f7786621af5ad165e686da6a&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.4%26utdid%3DYM1WaRDlHocDABzxFyQbxSa8%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2127571769%26sn%3DF98490F0D842DECD5588C054166055E65E8808A0%26umidtoken%3DYM1WaRDlHocDABzxFyQbxSa8%26msv%3D8.0.0%26brand%3DApple%26imei%3DD376681D2A39BE0C15F63C965D1C8780DA7103CB%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad2G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D5B69382E-FFFF-4CAF-B05D-9B637D4B0CD3"},{"key":"shuqirwbody12","val":"serviceWorkerOn=1&stopPullRefresh=1&from=ShuqiTab&upf=20368&sdk=13.4&utdid=YM1WaRDlHocDABzxFyQbxSa8&ustatus=0&first_placeid=111111&net_env=3g&placeid=111111&user_id=2127571769&sn=F98490F0D842DECD5588C054166055E65E8808A0&umidtoken=YM1WaRDlHocDABzxFyQbxSa8&msv=8.0.0&brand=Apple&imei=D376681D2A39BE0C15F63C965D1C8780DA7103CB&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&session=&skinColor=23B383&platform=1&ver=210301&mod=iPad2G&statusBarHeight=44.000000&skinVersion=1&wh=1242x2688&soft_id=21&utype=pre_vip&skinId=999&idfa=5B69382E-FFFF-4CAF-B05D-9B637D4B0CD3&params=%7B%22resources%22%3A%7B%22ShuqiBsDailyTask%22%3A%7B%7D%7D%7D&userId=2127571769&placeId=111111&timestamp=1624097108&sqSv=1.0&sign=4ac26126000f341f04d8ea7feb8b56ca&key=sq_h5_gateway&_public="},{"key":"shuqifxbody12","val":""},{"key":"shuqisprwurl12","val":"https://ocean.shuqireader.com/api/ad/adserver/v1/api/getAdInfo?appVer=4.3.6.0&placeId=111111&platform=iOS&requestSrc=h5&resourceId=626&timestamp=1624097174&user_id=2127571769&sqSv=1.0&sign=e540e3cbac281c344dae8cfae161b1a7&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.4%26utdid%3DYM1WaRDlHocDABzxFyQbxSa8%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2127571769%26sn%3DF98490F0D842DECD5588C054166055E65E8808A0%26umidtoken%3DYM1WaRDlHocDABzxFyQbxSa8%26msv%3D8.0.0%26brand%3DApple%26imei%3DD376681D2A39BE0C15F63C965D1C8780DA7103CB%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad2G%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D5B69382E-FFFF-4CAF-B05D-9B637D4B0CD3"},{"key":"shuqijlbody12","val":"requestSrc=h5&userId=2127571769&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624097108&sqSv=1.0&sign=6200c146e2cb24c620cfd0197e15653a&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.4%26utdid%3DYM1WaRDlHocDABzxFyQbxSa8%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2127571769%26sn%3DF98490F0D842DECD5588C054166055E65E8808A0%26umidtoken%3DYM1WaRDlHocDABzxFyQbxSa8%26msv%3D8.0.0%26brand%3DApple%26imei%3DD376681D2A39BE0C15F63C965D1C8780DA7103CB%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad2G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D5B69382E-FFFF-4CAF-B05D-9B637D4B0CD3"},{"key":"shuqisqjlbody12","val":"src=&userId=2127571769&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624097107&sqSv=1.0&sign=b4eea959f60ec16547d83d9c45855d5f&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.4%26utdid%3DYM1WaRDlHocDABzxFyQbxSa8%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2127571769%26sn%3DF98490F0D842DECD5588C054166055E65E8808A0%26umidtoken%3DYM1WaRDlHocDABzxFyQbxSa8%26msv%3D8.0.0%26brand%3DApple%26imei%3DD376681D2A39BE0C15F63C965D1C8780DA7103CB%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad2G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D5B69382E-FFFF-4CAF-B05D-9B637D4B0CD3"},{"key":"shuqicjyurl12","val":"https://ocean.shuqireader.com/api/activity/activity/v1/lottery/info?timestamp=1624097176&userId=2127571769&activityId=311&sqSv=1.0&sign=cbcbcca897cc29e1c4c6617c1faa140e&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.4%26utdid%3DYM1WaRDlHocDABzxFyQbxSa8%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2127571769%26sn%3DF98490F0D842DECD5588C054166055E65E8808A0%26umidtoken%3DYM1WaRDlHocDABzxFyQbxSa8%26msv%3D8.0.0%26brand%3DApple%26imei%3DD376681D2A39BE0C15F63C965D1C8780DA7103CB%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad2G%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D5B69382E-FFFF-4CAF-B05D-9B637D4B0CD3"},{"key":"shuqicjcsbody12","val":"_public=skinId%3D999%26idfa%3D5B69382E-FFFF-4CAF-B05D-9B637D4B0CD3%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26umidtoken%3DYM1WaRDlHocDABzxFyQbxSa8%26user_id%3D2127571769%26sn%3DF98490F0D842DECD5588C054166055E65E8808A0%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3DD376681D2A39BE0C15F63C965D1C8780DA7103CB%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPad2G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYM1WaRDlHocDABzxFyQbxSa8%26utype%3Dpre_vip%26sdk%3D13.4&deliveryId=711&key=sq_app_ad&miniWua=HHnB_wfM34cykxjZhMLe3vdWFampN5GUzb1qde8vdSy8W3qg%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=703&sign=5D1E622B9A5F3FF071F1CAF5B51C7C72&timestamp=1624097114&userId=2127571769&user_id=2127571769&wua=HIVW_Oz5L76hTmQG3wgqsRePTtKl02vo/ca7s7RW4bUU7pawVI5YrcprFCsw1bZItgV260kx1%2B8B2ma1Em6xl43KGJEIooHwE29TQ9NmtiJBd2xVjpF/zBen9ulC2nLzK8iQmCoX3dqBjE9II9pl5VDa9kdKPu68/kXIlUQY80Q2kYr/UDuVZ38Xre6WTx2qHY0pTakypDRYHV%2BrDgzubTdsv1xAtetOk7o6MaqiJ9JWeRIs%3D"},{"key":"shuqicjbody12","val":"wua=HIVW_j1Y2ncoZ%2B2HxTUriTecQrwokTiKYumIQ%2FUhatXxsaTftevBGMdUYJ6eFxoc8TV%2BXB71ow063uLpUX25g20%2F6%2BZqwuv7AQNjDRhOQ79p5i7k6Hhv42z%2BSKg2lL8GEuKKipPvkAZxQ29WkB6OiT1bL%2FFwHmLz%2F12c70394lk0zqRrxD4uAe7b81lIQUWtDsKl9zsrC1GQ%2BdmSVK8VllrtJAXT6LezO1O0rZQyA5kDDTHE%3D&ua=&userId=2127571769&umidtoken=YM1WaRDlHocDABzxFyQbxSa8&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&asac=2A20C07RJ9F51AOEFSNHDR&timestamp=1624097121&activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&sqSv=1.0&sign=c191b31118afebcf3b67cd8caa2b2ef1&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.4%26utdid%3DYM1WaRDlHocDABzxFyQbxSa8%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2127571769%26sn%3DF98490F0D842DECD5588C054166055E65E8808A0%26umidtoken%3DYM1WaRDlHocDABzxFyQbxSa8%26msv%3D8.0.0%26brand%3DApple%26imei%3DD376681D2A39BE0C15F63C965D1C8780DA7103CB%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad2G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D5B69382E-FFFF-4CAF-B05D-9B637D4B0CD3"},{"key":"shuqijsspbody12","val":""},{"key":"shuqijsydurl12","val":""},{"key":"shuqijsydbody12","val":""},{"key":"shuqijsqdbody12","val":""},{"key":"shuqijsqdspyurl12","val":""},{"key":"shuqijsqdspbody12","val":""},{"key":"shuqijsrwbody12","val":""},{"key":"shuqijsfxbody12","val":""},{"key":"shuqijsbookurl12","val":""},{"key":"shuqijsbookbody12","val":""},{"key":"shuqijssprwurl12","val":""},{"key":"shuqiuserurl13","val":"https://ocean.shuqireader.com/api/jaccount/accountapi/v1/sapi/account/getBindinfo?userId=2131837433&sqSv=1.0&timestamp=1624097265&sign=4060817a49919d129cc665c486a87944&key=sq_h5_gateway"},{"key":"shuqisyurl13","val":"https://render.shuqireader.com/load/resource?sdk=13.2.3&utdid=YM1W0CYV68gDALiaGIZ1Gb2x&ustatus=0&first_placeid=111111&net_env=3g&placeid=111111&user_id=2131837433&sn=E054472DCDB022647B94A37ED897E18775F9B378&umidtoken=YM1W0CYV68gDALiaGIZ1Gb2x&msv=8.0.0&brand=Apple&imei=27E877287515969E940A5AC4B0034E08AB3A4012&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=iOS&ver=210301&mod=UnknowniPad&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=F940E289-B071-4B6B-A337-B50FC9E44B9A"},{"key":"shuqisybody13","val":"appVer=4.3.6.0&imei=27E877287515969E940A5AC4B0034E08AB3A4012&isNewUser=1&params=%7B%22resources%22%3A%7B%22ShuqiVipEntry%22%3A%7B%7D%2C%22personalCardConfig%22%3A%7B%7D%7D%7D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=47e4d3f3891a56327b0d304394c361aa&sn=E054472DCDB022647B94A37ED897E18775F9B378&soft_id=21&timestamp=1624097196&user_id=2131837433&ver=210301"},{"key":"shuqispbody13","val":"_public=skinId%3D999%26idfa%3DF940E289-B071-4B6B-A337-B50FC9E44B9A%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26umidtoken%3DYM1W0CYV68gDALiaGIZ1Gb2x%26user_id%3D2131837433%26sn%3DE054472DCDB022647B94A37ED897E18775F9B378%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D27E877287515969E940A5AC4B0034E08AB3A4012%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYM1W0CYV68gDALiaGIZ1Gb2x%26utype%3Dpre_vip%26sdk%3D13.2.3&deliveryId=525&key=sq_app_ad&miniWua=HHnB_HEhtJnE9JnDw0BOcRfTv5Y1%2BGY9OPaOyA1tP7xPLlM0%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=626&sign=0619AF683BD24B49B2361ABF433CE6C0&timestamp=1624097230&userId=2131837433&user_id=2131837433&wua=HIVW_z7Li7E/s71HyFNx0XlhE1d%2BrKSzcXtLLlc%2BYQf5UpuQxy0yEOacstdKoJej/aXtpLOalXjQQXNPvaPytvJ4g9/Whr4c425EFhzeMb5/nPlgc/JlMRhZxoVrVDGH3zDnBv7CdjChzZg/CoV2OlJlgvXUm0zzIhzYweZ7GHP/no3flGH%2B6Dp5xzECYxVo%2Bfw73IciuKKQMuTKchoktQ/nULKjeIifQVovUUy03VCKH7Rc%3D"},{"key":"shuqiscbody13","val":""},{"key":"shuqiydbody13","val":""},{"key":"shuqiqdbody13","val":"clientTimestamp=1624097213&position=501&userId=2131837433&signInType=1&wua=HIVW_JfuO8Gc9eihADfoRhHTF%2BZ%2FQgbCVhgWwRYi302HpPoTfqJ8M6kJQOAMuzD73w9enOafUAUimL08EhibshjfGTz9h9ASh9Em6Y%2FDa%2B06uZ%2BQV9WR6l4Qq8Q12stFxdgUjuNgi5PhkXkZ5ZDlF6nDLBWwXvZqHc8zIc2OEF9kb7FCkHU6egjR5aeWliv3NBB%2F5h8qeVpHBg0OxpgbaZwIpZKBE2PzgRzJxIAydY6isbS0%3D&ua=&miniWua=HHnB_zHU4d%2FD%2BCL0ArN17lmChqiP1H6JKHocBPGvLEId4cO4%3D&umidtoken=YM1W0CYV68gDALiaGIZ1Gb2x&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&sign=dd45730c5da28615145acf32a0fcc866&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.2.3%26utdid%3DYM1W0CYV68gDALiaGIZ1Gb2x%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2131837433%26sn%3DE054472DCDB022647B94A37ED897E18775F9B378%26umidtoken%3DYM1W0CYV68gDALiaGIZ1Gb2x%26msv%3D8.0.0%26brand%3DApple%26imei%3D27E877287515969E940A5AC4B0034E08AB3A4012%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DF940E289-B071-4B6B-A337-B50FC9E44B9A"},{"key":"shuqirwbody13","val":"serviceWorkerOn=1&stopPullRefresh=1&from=ShuqiTab&upf=20368&sdk=13.2.3&utdid=YM1W0CYV68gDALiaGIZ1Gb2x&ustatus=0&first_placeid=111111&net_env=3g&placeid=111111&user_id=2131837433&sn=E054472DCDB022647B94A37ED897E18775F9B378&umidtoken=YM1W0CYV68gDALiaGIZ1Gb2x&msv=8.0.0&brand=Apple&imei=27E877287515969E940A5AC4B0034E08AB3A4012&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&session=&skinColor=23B383&platform=1&ver=210301&mod=UnknowniPad&statusBarHeight=44.000000&skinVersion=1&wh=1242x2688&soft_id=21&utype=pre_vip&skinId=999&idfa=F940E289-B071-4B6B-A337-B50FC9E44B9A&params=%7B%22resources%22%3A%7B%22ShuqiBsDailyTask%22%3A%7B%7D%7D%7D&userId=2131837433&placeId=111111&timestamp=1624097237&sqSv=1.0&sign=20cae949dfbb2d0570db5af422eb1b4e&key=sq_h5_gateway&_public="},{"key":"shuqifxbody13","val":""},{"key":"shuqisprwurl13","val":"https://ocean.shuqireader.com/api/ad/adserver/v1/api/getAdInfo?appVer=4.3.6.0&placeId=111111&platform=iOS&requestSrc=h5&resourceId=626&timestamp=1624097265&user_id=2131837433&sqSv=1.0&sign=af5f817baf02a28c3d5e53be8e9b7df5&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.2.3%26utdid%3DYM1W0CYV68gDALiaGIZ1Gb2x%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2131837433%26sn%3DE054472DCDB022647B94A37ED897E18775F9B378%26umidtoken%3DYM1W0CYV68gDALiaGIZ1Gb2x%26msv%3D8.0.0%26brand%3DApple%26imei%3D27E877287515969E940A5AC4B0034E08AB3A4012%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DF940E289-B071-4B6B-A337-B50FC9E44B9A"},{"key":"shuqijlbody13","val":"requestSrc=h5&userId=2131837433&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624097237&sqSv=1.0&sign=fb8cd48f14949a65a11674f95d30a4df&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.2.3%26utdid%3DYM1W0CYV68gDALiaGIZ1Gb2x%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2131837433%26sn%3DE054472DCDB022647B94A37ED897E18775F9B378%26umidtoken%3DYM1W0CYV68gDALiaGIZ1Gb2x%26msv%3D8.0.0%26brand%3DApple%26imei%3D27E877287515969E940A5AC4B0034E08AB3A4012%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DF940E289-B071-4B6B-A337-B50FC9E44B9A"},{"key":"shuqisqjlbody13","val":"src=&userId=2131837433&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624097228&sqSv=1.0&sign=b225aa1b39bb5f63ab9f4c3a65dfd76d&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.2.3%26utdid%3DYM1W0CYV68gDALiaGIZ1Gb2x%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2131837433%26sn%3DE054472DCDB022647B94A37ED897E18775F9B378%26umidtoken%3DYM1W0CYV68gDALiaGIZ1Gb2x%26msv%3D8.0.0%26brand%3DApple%26imei%3D27E877287515969E940A5AC4B0034E08AB3A4012%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DF940E289-B071-4B6B-A337-B50FC9E44B9A"},{"key":"shuqicjyurl13","val":"https://ocean.shuqireader.com/api/activity/activity/v1/lottery/info?timestamp=1624097271&userId=2131837433&activityId=311&sqSv=1.0&sign=9777b6cf12583ffa57c494677a5fe125&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.2.3%26utdid%3DYM1W0CYV68gDALiaGIZ1Gb2x%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2131837433%26sn%3DE054472DCDB022647B94A37ED897E18775F9B378%26umidtoken%3DYM1W0CYV68gDALiaGIZ1Gb2x%26msv%3D8.0.0%26brand%3DApple%26imei%3D27E877287515969E940A5AC4B0034E08AB3A4012%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DF940E289-B071-4B6B-A337-B50FC9E44B9A"},{"key":"shuqicjcsbody13","val":"_public=skinId%3D999%26idfa%3DF940E289-B071-4B6B-A337-B50FC9E44B9A%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26umidtoken%3DYM1W0CYV68gDALiaGIZ1Gb2x%26user_id%3D2131837433%26sn%3DE054472DCDB022647B94A37ED897E18775F9B378%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D27E877287515969E940A5AC4B0034E08AB3A4012%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYM1W0CYV68gDALiaGIZ1Gb2x%26utype%3Dpre_vip%26sdk%3D13.2.3&deliveryId=711&key=sq_app_ad&miniWua=HHnB_GWhZSzZ8byJYxfiHmGX35/lc492pY7awDNuSkCPfOmk%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=703&sign=F41B0BB45A9A5E4F8D50D6DD9B533A97&timestamp=1624097247&userId=2131837433&user_id=2131837433&wua=HIVW_vzVNLUQmNt5LvoJZM%2Borgue7EeOcakA9Z8eXAASg2ELaUOa5vG58MPFZLcEYnpytDiKiBEfdFFX01fBIn6mH96ORCWxq3o7mr8XzHXNeXozNfR9y9DFi9iH5r91b2MAJUxesaKYAFacM/Nuf7THa2IkC4cjId0ce2oyYf5WuZBH3LG1ymLPNDXOPE1JaYWLi2vnXwdPPXkermSaqqqSHuFrT5SAJQPh8IHt3a8aiw7o%3D"},{"key":"shuqicjbody13","val":"wua=HIVW_GsJUCytCxBgwnuvfwEu73ysgVaZq41rvjY%2B90KTWfb%2Fp1Bdi5AsFDlMU56u%2BSmSBH58BkmjeOvcXKcwFrcyewikVyQyQzSJQ1J9uJEDvQwtXiUmjjlv7d0QYOzpRUNF%2BLjTMCi2YPzJqXdCzyb%2Fw%2FkmsR4mU%2FaeiuYd30oh0FMb5tdRhydvk5V2SpQmPgD8yrNdN8OEm1DX8bxeTj27Txfx3sSFTrVvVSjD0y2ZNz6M%3D&ua=&userId=2131837433&umidtoken=YM1W0CYV68gDALiaGIZ1Gb2x&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&asac=2A20C07RJ9F51AOEFSNHDR&timestamp=1624097253&activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&sqSv=1.0&sign=2b5d0c069dd1e8acf2f55870d01392a8&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.2.3%26utdid%3DYM1W0CYV68gDALiaGIZ1Gb2x%26ustatus%3D0%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D2131837433%26sn%3DE054472DCDB022647B94A37ED897E18775F9B378%26umidtoken%3DYM1W0CYV68gDALiaGIZ1Gb2x%26msv%3D8.0.0%26brand%3DApple%26imei%3D27E877287515969E940A5AC4B0034E08AB3A4012%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DF940E289-B071-4B6B-A337-B50FC9E44B9A"},{"key":"shuqijsspbody13","val":""},{"key":"shuqijsydurl13","val":""},{"key":"shuqijsydbody13","val":""},{"key":"shuqijsqdbody13","val":""},{"key":"shuqijsqdspyurl13","val":""},{"key":"shuqijsqdspbody13","val":""},{"key":"shuqijsrwbody13","val":""},{"key":"shuqijsfxbody13","val":""},{"key":"shuqijsbookurl13","val":""},{"key":"shuqijsbookbody13","val":""},{"key":"shuqijssprwurl13","val":""},{"key":"shuqiuserurl14","val":"https://ocean.shuqireader.com/api/jaccount/accountapi/v1/sapi/account/getBindinfo?userId=2132085480&sqSv=1.0&timestamp=1624097438&sign=9e07c8b8893a8515feb238677baff2b1&key=sq_h5_gateway"},{"key":"shuqisyurl14","val":"https://render.shuqireader.com/load/resource?sdk=13.5.1&utdid=YM3CY1M9ngEDAJfJMLNOC8fQ&ustatus=0&first_placeid=111111&net_env=wifi&placeid=111111&user_id=2132085480&sn=7FE1E1FA8619951F619C3046DD1DE59942EF8DD4&umidtoken=YM3CY1M9ngEDAJfJMLNOC8fQ&msv=8.0.0&brand=Apple&imei=FF540B340ACB028577C8FB7ED817E5ED9FA6FF49&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=iOS&ver=210301&mod=iPad4G&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=DD4C4110-8DA3-414E-95B5-76F375DD71B4"},{"key":"shuqisybody14","val":"appVer=4.3.6.0&imei=FF540B340ACB028577C8FB7ED817E5ED9FA6FF49&isNewUser=1&params=%7B%22resources%22%3A%7B%22ShuqiVipEntry%22%3A%7B%7D%2C%22personalCardConfig%22%3A%7B%7D%7D%7D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=d401ea30024c44bfa64d5bc7df7d4592&sn=7FE1E1FA8619951F619C3046DD1DE59942EF8DD4&soft_id=21&timestamp=1624097384&user_id=2132085480&ver=210301"},{"key":"shuqispbody14","val":"_public=skinId%3D999%26idfa%3DDD4C4110-8DA3-414E-95B5-76F375DD71B4%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26umidtoken%3DYM3CY1M9ngEDAJfJMLNOC8fQ%26user_id%3D2132085480%26sn%3D7FE1E1FA8619951F619C3046DD1DE59942EF8DD4%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3DFF540B340ACB028577C8FB7ED817E5ED9FA6FF49%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPad4G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYM3CY1M9ngEDAJfJMLNOC8fQ%26utype%3Dpre_vip%26sdk%3D13.5.1&deliveryId=525&key=sq_app_ad&miniWua=HHnB_cc1nzyml604uT4jn8Qp022Jysftq3zjtEQwVKIsLVzw%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=626&sign=23F1C80FA083E9C57F9A9D7DCDD71E2E&timestamp=1624097410&userId=2132085480&user_id=2132085480&wua=HIVW_FO7lrzioOluEp1Gy8COtt6O6FQDEybr2rZ60006PzbbvQHyW/za70jXl6xLYiD7vxzWn6HAy2thiK1wP9Q1J3rPcJ2PERMavR6coHIwunVL%2B04crh%2BCycI9yLcDXS94xpYGn7248uCEbw/C4UxAwqlHzKKGc%2BOHLyXQIQixqlcDijHoW3m1tf7LSCkA7nDEdIKyYBMwbEVJVLNF9xwlebumwvIB3QQVEcUlPYjemW2Y%3D"},{"key":"shuqiscbody14","val":""},{"key":"shuqiydbody14","val":""},{"key":"shuqiqdbody14","val":"clientTimestamp=1624097400&position=501&userId=2132085480&signInType=1&wua=HIVW_sthL2%2BtPdknA14f91A9IZvOfs3QpARUI1oU%2Fm5oad90Shd2NxnR4dZsmjPMjiQGEBimiuexz34Z2kDzzwrPUIN5YbeyTLjmrpPOE%2FFr6hoN0STzLnUwCc4O8nx87d2zP7a%2BbkBVxvY5w%2FTBWYcZhZLJT4dA17pv2%2FWQ7k3lUQd4c4abc190vlEFo8tKelLVD3sjI8oHqOT%2BbHebK4XI74wlHaXaCp0eVh%2BeXUyy7D3c%3D&ua=&miniWua=HHnB_qA1JcgJPw9DXvxaIJspNsUYQOg0%2F3Jg%2Fo3jNMwCrimU%3D&umidtoken=YM3CY1M9ngEDAJfJMLNOC8fQ&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&sign=477aa3de5fc33e9bcdcb954fcad97daa&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.5.1%26utdid%3DYM3CY1M9ngEDAJfJMLNOC8fQ%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2132085480%26sn%3D7FE1E1FA8619951F619C3046DD1DE59942EF8DD4%26umidtoken%3DYM3CY1M9ngEDAJfJMLNOC8fQ%26msv%3D8.0.0%26brand%3DApple%26imei%3DFF540B340ACB028577C8FB7ED817E5ED9FA6FF49%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad4G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DDD4C4110-8DA3-414E-95B5-76F375DD71B4"},{"key":"shuqirwbody14","val":"serviceWorkerOn=1&stopPullRefresh=1&from=ShuqiTab&upf=20368&sdk=13.5.1&utdid=YM3CY1M9ngEDAJfJMLNOC8fQ&ustatus=0&first_placeid=111111&net_env=wifi&placeid=111111&user_id=2132085480&sn=7FE1E1FA8619951F619C3046DD1DE59942EF8DD4&umidtoken=YM3CY1M9ngEDAJfJMLNOC8fQ&msv=8.0.0&brand=Apple&imei=FF540B340ACB028577C8FB7ED817E5ED9FA6FF49&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&session=&skinColor=23B383&platform=1&ver=210301&mod=iPad4G&statusBarHeight=44.000000&skinVersion=1&wh=1242x2688&soft_id=21&utype=pre_vip&skinId=999&idfa=DD4C4110-8DA3-414E-95B5-76F375DD71B4&params=%7B%22resources%22%3A%7B%22ShuqiBsDailyTask%22%3A%7B%7D%7D%7D&userId=2132085480&placeId=111111&timestamp=1624097415&sqSv=1.0&sign=379cc9a31e32cc0ffd49f0092156039f&key=sq_h5_gateway&_public="},{"key":"shuqifxbody14","val":""},{"key":"shuqisprwurl14","val":"https://ocean.shuqireader.com/api/ad/adserver/v1/api/getAdInfo?appVer=4.3.6.0&placeId=111111&platform=iOS&requestSrc=h5&resourceId=626&timestamp=1624097438&user_id=2132085480&sqSv=1.0&sign=6c875aeb67483ac71164e3b8fef005f0&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.5.1%26utdid%3DYM3CY1M9ngEDAJfJMLNOC8fQ%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2132085480%26sn%3D7FE1E1FA8619951F619C3046DD1DE59942EF8DD4%26umidtoken%3DYM3CY1M9ngEDAJfJMLNOC8fQ%26msv%3D8.0.0%26brand%3DApple%26imei%3DFF540B340ACB028577C8FB7ED817E5ED9FA6FF49%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad4G%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DDD4C4110-8DA3-414E-95B5-76F375DD71B4"},{"key":"shuqijlbody14","val":"requestSrc=h5&userId=2132085480&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624097415&sqSv=1.0&sign=790d8e21c7446d51fe71edc9711f513d&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.5.1%26utdid%3DYM3CY1M9ngEDAJfJMLNOC8fQ%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2132085480%26sn%3D7FE1E1FA8619951F619C3046DD1DE59942EF8DD4%26umidtoken%3DYM3CY1M9ngEDAJfJMLNOC8fQ%26msv%3D8.0.0%26brand%3DApple%26imei%3DFF540B340ACB028577C8FB7ED817E5ED9FA6FF49%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad4G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DDD4C4110-8DA3-414E-95B5-76F375DD71B4"},{"key":"shuqisqjlbody14","val":"src=&userId=2132085480&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624097407&sqSv=1.0&sign=a8e6c301b08d5abb0f76edacb807d505&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.5.1%26utdid%3DYM3CY1M9ngEDAJfJMLNOC8fQ%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2132085480%26sn%3D7FE1E1FA8619951F619C3046DD1DE59942EF8DD4%26umidtoken%3DYM3CY1M9ngEDAJfJMLNOC8fQ%26msv%3D8.0.0%26brand%3DApple%26imei%3DFF540B340ACB028577C8FB7ED817E5ED9FA6FF49%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad4G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DDD4C4110-8DA3-414E-95B5-76F375DD71B4"},{"key":"shuqicjyurl14","val":"https://ocean.shuqireader.com/api/activity/activity/v1/lottery/info?timestamp=1624097440&userId=2132085480&activityId=311&sqSv=1.0&sign=5ce7261a0651cbbdf11aa23d67ac1a2c&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.5.1%26utdid%3DYM3CY1M9ngEDAJfJMLNOC8fQ%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2132085480%26sn%3D7FE1E1FA8619951F619C3046DD1DE59942EF8DD4%26umidtoken%3DYM3CY1M9ngEDAJfJMLNOC8fQ%26msv%3D8.0.0%26brand%3DApple%26imei%3DFF540B340ACB028577C8FB7ED817E5ED9FA6FF49%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad4G%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DDD4C4110-8DA3-414E-95B5-76F375DD71B4"},{"key":"shuqicjcsbody14","val":"_public=skinId%3D999%26idfa%3DDD4C4110-8DA3-414E-95B5-76F375DD71B4%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26umidtoken%3DYM3CY1M9ngEDAJfJMLNOC8fQ%26user_id%3D2132085480%26sn%3D7FE1E1FA8619951F619C3046DD1DE59942EF8DD4%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3DFF540B340ACB028577C8FB7ED817E5ED9FA6FF49%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPad4G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYM3CY1M9ngEDAJfJMLNOC8fQ%26utype%3Dpre_vip%26sdk%3D13.5.1&deliveryId=711&key=sq_app_ad&miniWua=HHnB_39Ss4LNZy7FfA/k/ofIOxiqpSi/HgwHq6/rJ2Zu%2BHKg%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=703&sign=FA1281DEDD01CAACD7CFDF94DFF15EF8&timestamp=1624097421&userId=2132085480&user_id=2132085480&wua=HIVW_H2VjYfD0MQ6pNRn%2BjAL/G9deSuzrnbyBzKmmR3kw4KUEzgcLJmVLQlKIr9DCuzHy8fAk%2BJjx/tKDdIMBeqvD8arunxHyU%2BKYfjL/W6iulKpAQna6orVt3UecQ0PeV%2BNFiktCkPdII1lz6K3ig9tU3qs3eR6KJvJCBFyNCS%2BLP1MM30YrBoFueAjmFH/HLcuE96pp%2BYLWrJMgtXFNzyBgFSE3%2BDbnNWoe3t7BJpjeBiQ%3D"},{"key":"shuqicjbody14","val":"wua=HIVW_D9dT%2BqpZM3x9n3vyY2Q1CvF9nmkqZQgCDIZUy%2Bqxy7ZpAVH0QP1K%2BhBcJ%2FURjJXHbPVRAV7bg9zfgilV8oMyCjKeqKr4eG2Qc5myc9MwxMg1ZstwSTdhj1Pn6cczxlt9RUrs37x3a1xfl9bua%2BEA8Zvuhr54KTUx5lHuba5tQzWwPa2RFAz9uwxdJYcGxCaCPX1SgKgjafXXjR%2FYN7CjBnGbnloXj6QnaLw1XCyvuVk%3D&ua=&userId=2132085480&umidtoken=YM3CY1M9ngEDAJfJMLNOC8fQ&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&asac=2A20C07RJ9F51AOEFSNHDR&timestamp=1624097426&activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&sqSv=1.0&sign=18484d06a30b809eacf10aa2e105ae6f&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.5.1%26utdid%3DYM3CY1M9ngEDAJfJMLNOC8fQ%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2132085480%26sn%3D7FE1E1FA8619951F619C3046DD1DE59942EF8DD4%26umidtoken%3DYM3CY1M9ngEDAJfJMLNOC8fQ%26msv%3D8.0.0%26brand%3DApple%26imei%3DFF540B340ACB028577C8FB7ED817E5ED9FA6FF49%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPad4G%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3DDD4C4110-8DA3-414E-95B5-76F375DD71B4"},{"key":"shuqijsspbody14","val":""},{"key":"shuqijsydurl14","val":""},{"key":"shuqijsydbody14","val":""},{"key":"shuqijsqdbody14","val":""},{"key":"shuqijsqdspyurl14","val":""},{"key":"shuqijsqdspbody14","val":""},{"key":"shuqijsrwbody14","val":""},{"key":"shuqijsfxbody14","val":""},{"key":"shuqijsbookurl14","val":""},{"key":"shuqijsbookbody14","val":""},{"key":"shuqijssprwurl14","val":""},{"key":"shuqiuserurl15","val":"https://ocean.shuqireader.com/api/jaccount/accountapi/v1/sapi/account/getBindinfo?userId=2130360388&sqSv=1.0&timestamp=1624097522&sign=35d8f52477224d31ef7e69eb3448714b&key=sq_h5_gateway"},{"key":"shuqisyurl15","val":"https://render.shuqireader.com/load/resource?sdk=13.5.1&utdid=YM1W4ipSxBcDALyY5UfznD%2Bt&ustatus=0&first_placeid=111111&net_env=wifi&placeid=111111&user_id=2130360388&sn=B3882B447B3393627711749F2F0F00C4D52CC488&umidtoken=YM1W4ipSxBcDALyY5UfznD%2Bt&msv=8.0.0&brand=Apple&imei=B42939C9412EE103D492DBA33E32E2048AC9EAF4&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&session=&skinColor=23B383&platform=iOS&ver=210301&mod=UnknowniPad&statusBarHeight=44.000000&skinVersion=1&wh=1242x2688&soft_id=21&utype=pre_vip&skinId=999&idfa=173D93F9-3E8A-4614-9B7F-72634870189A"},{"key":"shuqisybody15","val":"appVer=4.3.6.0&imei=B42939C9412EE103D492DBA33E32E2048AC9EAF4&isNewUser=1&params=%7B%22resources%22%3A%7B%22ShuqiVipEntry%22%3A%7B%7D%2C%22personalCardConfig%22%3A%7B%7D%7D%7D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=78acca230b0b5f1940a756c72e823591&sn=B3882B447B3393627711749F2F0F00C4D52CC488&soft_id=21&timestamp=1624097472&user_id=2130360388&ver=210301"},{"key":"shuqispbody15","val":"_public=skinId%3D999%26idfa%3D173D93F9-3E8A-4614-9B7F-72634870189A%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26umidtoken%3DYM1W4ipSxBcDALyY5UfznD%2Bt%26user_id%3D2130360388%26sn%3DB3882B447B3393627711749F2F0F00C4D52CC488%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3DB42939C9412EE103D492DBA33E32E2048AC9EAF4%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYM1W4ipSxBcDALyY5UfznD%2Bt%26utype%3Dpre_vip%26sdk%3D13.5.1&deliveryId=525&key=sq_app_ad&miniWua=HHnB_/09esyfxq5Cq0qjBNtRYlFCPQemyT6BJLYGWe4urcqA%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=626&sign=AA4A116212AC142AA09B53D881AE0CE1&timestamp=1624097491&userId=2130360388&user_id=2130360388&wua=HIVW_cuUpn1LqN3l9bUmZIETzfyFoDkqhSOKF4SwqoyZJXVvXydZFzuUIC1KV0o6QvRq3t/dQ9dShNAGWsenkpdXoodFvXanVOes0LvYAJB8PtI9sHHk5jKXU3DxK9gnfzkzPZyCXuN1gyTqlMjVfFNSPK2xkcXA%2BGbfyO5aBk7wOYh4PkNhX6olGyG%2BFxEmujxGvOTolkxUspjbbUKiziyEhexoXsPARhgGPhd6yscDVRKw%3D"},{"key":"shuqiscbody15","val":""},{"key":"shuqiydbody15","val":""},{"key":"shuqiqdbody15","val":"clientTimestamp=1624097482&position=501&userId=2130360388&signInType=1&wua=HIVW_kvL91HmR2xokWuj3MPpdR5z8YQax6eAzFImcKHzrbIUyWEUS4XenFsVq5ahEuA%2BaYqq33K9kd5qpccGVHAB5bFtAZV3t2f%2Bh94zRs1ksgO%2Fbfot2Ors4KoR0rdgzE%2BR%2BVsTJpP4Hmg0Me13D5aq4qL9JPdTkULxuRWI2pwxb3Sup22C6Qe0YVhTO0Py%2Bm%2FBXDHicT%2FA95UL6Kn1b3NK010Pvt9BpFUUrN1KhKDGql2I%3D&ua=&miniWua=HHnB_Fg5JiUvJiMA7xT9GWeSdaBIOkWV0JHkrU2zp9T3KhjE%3D&umidtoken=YM1W4ipSxBcDALyY5UfznD%2Bt&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&sign=d6c42cf70ed5538bace51609faf8e115&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.5.1%26utdid%3DYM1W4ipSxBcDALyY5UfznD%252Bt%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2130360388%26sn%3DB3882B447B3393627711749F2F0F00C4D52CC488%26umidtoken%3DYM1W4ipSxBcDALyY5UfznD%252Bt%26msv%3D8.0.0%26brand%3DApple%26imei%3DB42939C9412EE103D492DBA33E32E2048AC9EAF4%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D173D93F9-3E8A-4614-9B7F-72634870189A"},{"key":"shuqirwbody15","val":"serviceWorkerOn=1&stopPullRefresh=1&from=ShuqiTab&upf=20368&sdk=13.5.1&utdid=YM1W4ipSxBcDALyY5UfznD%2Bt&ustatus=0&first_placeid=111111&net_env=wifi&placeid=111111&user_id=2130360388&sn=B3882B447B3393627711749F2F0F00C4D52CC488&umidtoken=YM1W4ipSxBcDALyY5UfznD%2Bt&msv=8.0.0&brand=Apple&imei=B42939C9412EE103D492DBA33E32E2048AC9EAF4&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&session=&skinColor=23B383&platform=1&ver=210301&mod=UnknowniPad&statusBarHeight=44.000000&skinVersion=1&wh=1242x2688&soft_id=21&utype=pre_vip&skinId=999&idfa=173D93F9-3E8A-4614-9B7F-72634870189A&params=%7B%22resources%22%3A%7B%22ShuqiBsDailyTask%22%3A%7B%7D%7D%7D&userId=2130360388&placeId=111111&timestamp=1624097498&sqSv=1.0&sign=905489510c9cb4df788465ead8db2267&key=sq_h5_gateway&_public="},{"key":"shuqifxbody15","val":""},{"key":"shuqisprwurl15","val":"https://ocean.shuqireader.com/api/ad/adserver/v1/api/getAdInfo?appVer=4.3.6.0&placeId=111111&platform=iOS&requestSrc=h5&resourceId=626&timestamp=1624097523&user_id=2130360388&sqSv=1.0&sign=2b7dae49e8058d0f313eec18c226c320&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.5.1%26utdid%3DYM1W4ipSxBcDALyY5UfznD%252Bt%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2130360388%26sn%3DB3882B447B3393627711749F2F0F00C4D52CC488%26umidtoken%3DYM1W4ipSxBcDALyY5UfznD%252Bt%26msv%3D8.0.0%26brand%3DApple%26imei%3DB42939C9412EE103D492DBA33E32E2048AC9EAF4%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D173D93F9-3E8A-4614-9B7F-72634870189A"},{"key":"shuqijlbody15","val":"requestSrc=h5&userId=2130360388&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624097498&sqSv=1.0&sign=601c32be548ea5368d9831bc035fed11&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.5.1%26utdid%3DYM1W4ipSxBcDALyY5UfznD%252Bt%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2130360388%26sn%3DB3882B447B3393627711749F2F0F00C4D52CC488%26umidtoken%3DYM1W4ipSxBcDALyY5UfznD%252Bt%26msv%3D8.0.0%26brand%3DApple%26imei%3DB42939C9412EE103D492DBA33E32E2048AC9EAF4%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D173D93F9-3E8A-4614-9B7F-72634870189A"},{"key":"shuqisqjlbody15","val":"src=&userId=2130360388&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1624097487&sqSv=1.0&sign=266eb6e7976ce96d9bee80f5f47469e8&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D13.5.1%26utdid%3DYM1W4ipSxBcDALyY5UfznD%252Bt%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2130360388%26sn%3DB3882B447B3393627711749F2F0F00C4D52CC488%26umidtoken%3DYM1W4ipSxBcDALyY5UfznD%252Bt%26msv%3D8.0.0%26brand%3DApple%26imei%3DB42939C9412EE103D492DBA33E32E2048AC9EAF4%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D173D93F9-3E8A-4614-9B7F-72634870189A"},{"key":"shuqicjyurl15","val":"https://ocean.shuqireader.com/api/activity/activity/v1/lottery/info?timestamp=1624097524&userId=2130360388&activityId=311&sqSv=1.0&sign=6bf6b26fa1e88933a6b94ea595a4ff63&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.5.1%26utdid%3DYM1W4ipSxBcDALyY5UfznD%252Bt%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2130360388%26sn%3DB3882B447B3393627711749F2F0F00C4D52CC488%26umidtoken%3DYM1W4ipSxBcDALyY5UfznD%252Bt%26msv%3D8.0.0%26brand%3DApple%26imei%3DB42939C9412EE103D492DBA33E32E2048AC9EAF4%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3D173D93F9-3E8A-4614-9B7F-72634870189A"},{"key":"shuqicjcsbody15","val":"_public=skinId%3D999%26idfa%3D173D93F9-3E8A-4614-9B7F-72634870189A%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26umidtoken%3DYM1W4ipSxBcDALyY5UfznD%2Bt%26user_id%3D2130360388%26sn%3DB3882B447B3393627711749F2F0F00C4D52CC488%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3DB42939C9412EE103D492DBA33E32E2048AC9EAF4%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYM1W4ipSxBcDALyY5UfznD%2Bt%26utype%3Dpre_vip%26sdk%3D13.5.1&deliveryId=711&key=sq_app_ad&miniWua=HHnB_eJuCh0WdH/t12vqRd2yFwZNAubRgNdY5bIubzFVFxw8%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=703&sign=808F664A45027D5B18F81394F7DCC089&timestamp=1624097504&userId=2130360388&user_id=2130360388&wua=HIVW_F494v8WYIXCiD5RepiAOorx0u6QFXFbxWJN9VJSPUb%2Bo2b2D6TMaE50EhUXl/IbMVZ8v8VCc%2BJsaaji1gfNOKb4maUsUC/tQ02QV9ABUl9zfVEETHKSZ2lQ222JtPZp98OwNOXsrwJda4e6gDPvKEEKwLiMuGu3QDCnL%2BAXGO5MXLqWP2edtUG26OhOmxqO0Yhaus2slBwrbEP9jIsq4Lg%3D%3D"},{"key":"shuqicjbody15","val":"wua=HIVW_v07VSlzXvJIZwedjcjceD%2Bbp7OSNfqBjy5DBCC40Z3z%2F%2BIs6aaDPo0wuQQfAaDTPgZArG5%2BPUMeanex0Yr8ZPww1ynQ%2BligcPbiv09AtHmoGgvcKehHGPBJJvvKDzkH3wQwSBVm7ZpiUqbMbXgs%2FiXtrG6uoqkFGXpq2spOTp33dM1hdwCEfqUa%2BQJQ6dF%2FgC7dysYJCtu6MjnKH6tARtC%2FRnlsv%2BkEVP7EF3A1W5Q0%3D&ua=&userId=2130360388&umidtoken=YM1W4ipSxBcDALyY5UfznD%2Bt&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&asac=2A20C07RJ9F51AOEFSNHDR&timestamp=1624097510&activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&sqSv=1.0&sign=b31f0617ac06ddd52f396bfa114c9dca&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.5.1%26utdid%3DYM1W4ipSxBcDALyY5UfznD%252Bt%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2130360388%26sn%3DB3882B447B3393627711749F2F0F00C4D52CC488%26umidtoken%3DYM1W4ipSxBcDALyY5UfznD%252Bt%26msv%3D8.0.0%26brand%3DApple%26imei%3DB42939C9412EE103D492DBA33E32E2048AC9EAF4%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3D%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DUnknowniPad%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dpre_vip%26skinId%3D999%26idfa%3D173D93F9-3E8A-4614-9B7F-72634870189A"},{"key":"shuqijsspbody15","val":""},{"key":"shuqijsydurl15","val":""},{"key":"shuqijsydbody15","val":""},{"key":"shuqijsqdbody15","val":""},{"key":"shuqijsqdspyurl15","val":""},{"key":"shuqijsqdspbody15","val":""},{"key":"shuqijsrwbody15","val":""},{"key":"shuqijsfxbody15","val":""},{"key":"shuqijsbookurl15","val":""},{"key":"shuqijsbookbody15","val":""},{"key":"shuqijssprwurl15","val":""},{"key":"shuqiuserurl16","val":""},{"key":"shuqisyurl16","val":""},{"key":"shuqisybody16","val":""},{"key":"shuqispbody16","val":""},{"key":"shuqiscbody16","val":""},{"key":"shuqiydbody16","val":""},{"key":"shuqiqdbody16","val":""},{"key":"shuqirwbody16","val":""},{"key":"shuqifxbody16","val":""},{"key":"shuqisprwurl16","val":""},{"key":"shuqijlbody16","val":""},{"key":"shuqisqjlbody16","val":""},{"key":"shuqicjyurl16","val":""},{"key":"shuqicjcsbody16","val":""},{"key":"shuqicjbody16","val":""},{"key":"shuqijsspbody16","val":""},{"key":"shuqijsydurl16","val":""},{"key":"shuqijsydbody16","val":""},{"key":"shuqijsqdbody16","val":""},{"key":"shuqijsqdspyurl16","val":""},{"key":"shuqijsqdspbody16","val":""},{"key":"shuqijsrwbody16","val":""},{"key":"shuqijsfxbody16","val":""},{"key":"shuqijsbookurl16","val":""},{"key":"shuqijsbookbody16","val":""},{"key":"shuqijssprwurl16","val":""},{"key":"shuqiuserurl17","val":""},{"key":"shuqisyurl17","val":""},{"key":"shuqisybody17","val":""},{"key":"shuqispbody17","val":""},{"key":"shuqiscbody17","val":""},{"key":"shuqiydbody17","val":""},{"key":"shuqiqdbody17","val":""},{"key":"shuqirwbody17","val":""},{"key":"shuqifxbody17","val":""},{"key":"shuqisprwurl17","val":""},{"key":"shuqijlbody17","val":""},{"key":"shuqisqjlbody17","val":""},{"key":"shuqicjyurl17","val":""},{"key":"shuqicjcsbody17","val":""},{"key":"shuqicjbody17","val":""},{"key":"shuqijsspbody17","val":""},{"key":"shuqijsydurl17","val":""},{"key":"shuqijsydbody17","val":""},{"key":"shuqijsqdbody17","val":""},{"key":"shuqijsqdspyurl17","val":""},{"key":"shuqijsqdspbody17","val":""},{"key":"shuqijsrwbody17","val":""},{"key":"shuqijsfxbody17","val":""},{"key":"shuqijsbookurl17","val":""},{"key":"shuqijsbookbody17","val":""},{"key":"shuqijssprwurl17","val":""},{"key":"shuqiuserurl18","val":""},{"key":"shuqisyurl18","val":""},{"key":"shuqisybody18","val":""},{"key":"shuqispbody18","val":""},{"key":"shuqiscbody18","val":""},{"key":"shuqiydbody18","val":""},{"key":"shuqiqdbody18","val":""},{"key":"shuqirwbody18","val":""},{"key":"shuqifxbody18","val":""},{"key":"shuqisprwurl18","val":""},{"key":"shuqijlbody18","val":""},{"key":"shuqisqjlbody18","val":""},{"key":"shuqicjyurl18","val":""},{"key":"shuqicjcsbody18","val":""},{"key":"shuqicjbody18","val":""},{"key":"shuqijsspbody18","val":""},{"key":"shuqijsydurl18","val":""},{"key":"shuqijsydbody18","val":""},{"key":"shuqijsqdbody18","val":""},{"key":"shuqijsqdspyurl18","val":""},{"key":"shuqijsqdspbody18","val":""},{"key":"shuqijsrwbody18","val":""},{"key":"shuqijsfxbody18","val":""},{"key":"shuqijsbookurl18","val":""},{"key":"shuqijsbookbody18","val":""},{"key":"shuqijssprwurl18","val":""},{"key":"shuqiuserurl19","val":""},{"key":"shuqisyurl19","val":""},{"key":"shuqisybody19","val":""},{"key":"shuqispbody19","val":""},{"key":"shuqiscbody19","val":""},{"key":"shuqiydbody19","val":""},{"key":"shuqiqdbody19","val":""},{"key":"shuqirwbody19","val":""},{"key":"shuqifxbody19","val":""},{"key":"shuqisprwurl19","val":""},{"key":"shuqijlbody19","val":""},{"key":"shuqisqjlbody19","val":""},{"key":"shuqicjyurl19","val":""},{"key":"shuqicjcsbody19","val":""},{"key":"shuqicjbody19","val":""},{"key":"shuqijsspbody19","val":""},{"key":"shuqijsydurl19","val":""},{"key":"shuqijsydbody19","val":""},{"key":"shuqijsqdbody19","val":""},{"key":"shuqijsqdspyurl19","val":""},{"key":"shuqijsqdspbody19","val":""},{"key":"shuqijsrwbody19","val":""},{"key":"shuqijsfxbody19","val":""},{"key":"shuqijsbookurl19","val":""},{"key":"shuqijsbookbody19","val":""},{"key":"shuqijssprwurl19","val":""},{"key":"shuqiuserurl20","val":""},{"key":"shuqisyurl20","val":""},{"key":"shuqisybody20","val":""},{"key":"shuqispbody20","val":""},{"key":"shuqiscbody20","val":""},{"key":"shuqiydbody20","val":""},{"key":"shuqiqdbody20","val":""},{"key":"shuqirwbody20","val":""},{"key":"shuqifxbody20","val":""},{"key":"shuqisprwurl20","val":""},{"key":"shuqijlbody20","val":""},{"key":"shuqisqjlbody20","val":""},{"key":"shuqicjyurl20","val":""},{"key":"shuqicjcsbody20","val":""},{"key":"shuqicjbody20","val":""},{"key":"shuqijsspbody20","val":""},{"key":"shuqijsydurl20","val":""},{"key":"shuqijsydbody20","val":""},{"key":"shuqijsqdbody20","val":""},{"key":"shuqijsqdspyurl20","val":""},{"key":"shuqijsqdspbody20","val":""},{"key":"shuqijsrwbody20","val":""},{"key":"shuqijsfxbody20","val":""},{"key":"shuqijsbookurl20","val":""},{"key":"shuqijsbookbody20","val":""},{"key":"shuqijssprwurl20","val":""}],"sessions":[],"isLoaded":true};
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
