var obj=JSON.parse($response.body)
obj.license="premium"
obj.info.purchase_type="premium"
obj.info.store="premium"
$done({body:JSON.stringify(obj)})
// https://license.enpass.io/api/v1/subscription/me/