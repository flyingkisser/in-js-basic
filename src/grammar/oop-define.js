/**
 * Created by joe on 15/8/12.
 */
var log=console.log;

//--1
var o1={};
o1.name="joe";
o1["year"]=10;
o1.getName=function(){return this.name;};

log(o1);
log(o1.getName());

var o2={
    name:"o2",
    getName:function(){return this.name;}
}

log(o2);
log(o2.getName());

//--2
function Man(name){
    this.name=name;
    Man.prototype.getName=function(){return this.name};
}

var m1=new Man("joe");
var m2=new Man("jack");
log(m1.getName());
log(m2.getName());