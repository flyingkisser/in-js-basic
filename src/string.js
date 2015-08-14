/**
 * Created by joe on 15/8/12.
 */

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

var log=console.log;
var s1="this";
var s2="你好";


//length
log(s1.length);
log(s2.length);

//substr substring slice
log("sub str test");
log("hello".substr(0,2));
log("你好".substr(0,1));
log("this".substring(1,3));
log("this_a".slice(1,-1));

//replace
log("replace str test");
log("this is a good idea,good".replace("good","bad"));
log("this is a good idea".replace(/ /gi,"_"));

//indexOf lastIndexOf search match
log("search str test");
log("this is a good idea".indexOf("is"));
log("this is a good idea".lastIndexOf("is"));
log("this is a good idea".search(/Is/i));

log("this is a good idea".match(/Is/i));
log("this is a good idea".match(/Is/ig));