mircoajax
=========

microajax for small custom JS projects


## how to use

simply include it to your HTML page in head
```js
<script src="ajax.js"></script>
```

then call like this:
for GET
```js
ajax.send('script.php?foo=bar&foo2=bar','GET',null,null,true,result_call_function);

function result_function (data) {
  alert(data);
}
```

for POST
```js
ajax.send('script.php','POST','foo=bar&search='+encodeURIComponent(someText),null,true,result_callback_function);
```

with COOKIE
```js
var cookies="cookie1=foo; cookie2=bar";
ajax.send('script.php','POST','foo=bar&search='+encodeURIComponent(someText),cookies,true,result_callback_function);
```
