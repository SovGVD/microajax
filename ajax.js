var ajax = {
    init: function(){
        return new XMLHttpRequest();
        },
    arrayToString: function (ar,prefix) {
        var out="";
        for (var i in ar) {
            if (ar[i] instanceof Array) {
                ar[i]=this.arrayToString(ar[i], prefix+"["+i+"]");
            } else {
                ar[i]="&"+prefix+"["+i+"]="+encodeURIComponent(ar[i]);
            }
        }
        for (var i in ar) { out+=ar[i]; }
        return out;
        },

    send: function(url,method,args,cookies,async,_callback){
        var q=ajax.init();
        q.open(method,url,async);
        q.onreadystatechange=function(){
                if(this.readyState==4 && this.status==200) {
                    _callback(this.responseText);
                }
            };
        if (cookies) {
            q.setRequestHeader('Cookie',cookies);
        }
        if(method=='POST') {
            q.setRequestHeader('Content-type','application/x-www-form-urlencoded');
            q.send(args);
        } else {
            q.send(null);
        }
    }
}
