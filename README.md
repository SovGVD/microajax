mircoajax
=========

microajax for small custom JS projects


## how to use

simply include it to your HTML page in head
```js
<script src="ajax.js"></script>
```

then call like this:

###for GET
```js
ajax.send('script.php?foo=bar&foo2=bar','GET',null,null,true,result_callback_function);

function result_callback_function (data) {
  alert(data);
}
```

###for POST
```js
ajax.send('script.php','POST','foo=bar&search='+encodeURIComponent(someText),null,true,result_callback_function);
```

###with COOKIE
```js
var cookies="cookie1=foo; cookie2=bar";
ajax.send('script.php','POST','foo=bar&search='+encodeURIComponent(someText),cookies,true,result_callback_function);
```

###to get data from form ajax.formToData
only for input, select and textarea (.value or .innerHTML)
```html
<input id="someId_title" value="hello">
<input id="someId_about" value="this is very simple and untested">
```
JS:
```js
var data=ajax.formToData("someID_");
```
data will be an array like
```js
data['title']="hello";
data['about']="this is very simple and untested";
```

###to set data in form ajax.dataToForm
not sutable for any forms (.value only)

JS:
```js
data['title']="hello";
data['about']="this is very simple and untested";
ajax.dataToFrom("someID_",data);
```
form will be like
```html
<input id="someId_title" value="hello">
<input id="someId_about" value="this is very simple and untested">
```

###ajax.arrayToString(array,value_prefix)
pack array to string for use in ajax req
