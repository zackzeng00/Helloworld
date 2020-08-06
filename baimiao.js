/* 

[rewrite_local]
# 白描
^https:\/\/baimiao\.uzero\.cn\/api\/v2\.user\/(logout|appLaunchWithUser|loginByWeixin) url script-response-body id77/Script/baimiao.js

[mitm]
hostname = api.xiaolanben.com
*/


let obj = JSON.parse($response.body);
obj.value.vip = true;
obj.value.recognize.remainBatch = -100;
obj.value.recognize.remainNormal = -100;
obj.value.recognize.remainTranslate = -100;
obj.value.recognize.recognizeTranslateAll = 1;

$done({body: JSON.stringify(obj)});