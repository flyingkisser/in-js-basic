/**
 * Created by joe on 15/8/11.
 */
var name="jsfile";
var x=1.3;
var X=1.4;
var _y=33;
var isOK=true;
var x0=0;
var s0="";
var s1='';
var objFile=null;



function logi()
{
    console.log(arguments[0]);
}


if(0)
    logi("0 is true");
else
    logi("0 is false");

if("")
    logi("\"\" is true");
else
    logi("\"\" is false");

if('')
    logi("'' is true");
else
    logi("'' is false");

if(null)
    logi("null is true");
else
    logi("null is false");

logi(typeof (new Array(100,20,30)));


logi("end");