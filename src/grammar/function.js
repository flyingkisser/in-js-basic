/**
 * Created by Administrator on 2015/9/1.
 */
var log=console.log;

function showArray(arrayObj)
{
    var len=arrayObj.length;
    log("length is "+len);
    for(var k in arrayObj){
        var v=arrayObj[k];
        var ktype=typeof(k);
        var vtype=typeof(v);
        log(ktype+" "+k+" "+vtype+" "+v);
    }
}

function Man(name,year){

    log("name is %s,year is %d",name,year);
    log("arguments is ");
    showArray(arguments);
}

Man("joe",22);

