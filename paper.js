/*
解锁 paper(https://apps.apple.com/cn/app/paper/id506003812)

Surge4：
http-response ^https:\/\/api\.revenuecat\.com\/.*\/subscribers\/[0-9a-fA-F]{8}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{12}$ requires-body=1,max-size=0,script-path=paper.js

hostname = api.revenuecat.com
*/
let obj = JSON.parse($response.body);
let sub= obj["subscriber"];
sub["subscriptions"]["com.fiftythree.paper.pro_12"]= 
{
        "is_sandbox": false,
        "period_type": "false",
        "billing_issues_detected_at": null,
        "unsubscribe_detected_at": null,
        "expires_date": null,
        "original_purchase_date": "2019-11-09T14:03:59Z",
        "purchase_date": "2019-11-09T14:03:59Z",
        "store": "app_store"
      };
    
   sub["entitlements"]["pro"]= 
   {
        "expires_date": "2099-11-23T14:03:59Z",
        "product_identifier": "com.fiftythree.paper.pro_12",
        "purchase_date": "2019-11-09T14:03:59Z"
};

$done({body: JSON.stringify(obj)});