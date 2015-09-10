/**
 * Created by joe on 15/8/11.
 */

var log=console.log;


var a1=new Array();
var a2=new Array(10);
var a3=new Array(33,50);
var a4=[];
var a5=[10];
var a6=[33,50];
var a7=["joe",22,13.1,true,null];

a1.push(33);
a2.push("ab");
a2[a2.length]="cd";
a2[a2.length-1]=null;

a7["name"]="joefox";
a7.year=2015;
a7[-1]=-1;


a7.push("cc");

var o1=
{
    "name":"joe",
    "year":13,
    "addr":"beijing"
};

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

showArray(a1);
showArray(a2);
showArray(a3);
showArray(a4);
showArray(a5);
showArray(a6);
showArray(a7);
showArray(o1);

log("test del");

//---splice

var a8=[1,2,3];
var a9=a8.splice(0,1);
showArray(a8)
showArray(a9);

log("test del 2");
a8=[1,2,3];
showArray(a8);
a9=a8.splice(0,2,99);
showArray(a8);
showArray(a9);

//----join---
log(new Array("jack","joe").join("#"));


//---slice
log("slice 0,2")
log(new Array("j0","j1","j2","j3","j4").slice(0,2));


log("slice 1")
log(new Array("j0","j1","j2","j3","j4").slice(1));


//concat
log(new Array(1,2,3).concat(new Array("h1","h2")));
log("this is a good boy".split(" "));

//reverse
log(new Array(1,2,3,"hey").reverse());

//sort
var a2=[10,33,55,99,103];
a2.sort(
    function(a,b){
        return a-b;
    }
);
log(a2);


log("end");