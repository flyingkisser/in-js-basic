/**
 * Created by joe on 15/8/13.
 */
function extend(childClass,superClass){
    var _super_proto=new Object(superClass.prototype);
    _super_proto.constructor=childClass;    //父类的构造函数设置为子类的构造函数
    childClass.prototype=_super_proto;      //使生效
}

var log=console.log;

function People(name){
    this.name=name;
    this.nick="nickname";
    this.itemList=["apple","bb"];
}

People.prototype.getName=function(){return this.name;};
People.prototype.setName=function(n){this.name=n};
People.prototype.addItem=function(n){this.itemList.push(n)};
People.prototype.getItem=function(n){return this.itemList};

function Man(name,year){
    this.year=year;
    People.call(this,name); //触发call的People的构造函数,即People()函数,重置Man的prototype
}

extend(Man,People);

var m1=new Man("joe",20);
m1.addItem("pear");

var m2=new Man("jack",22);
m2.addItem("banana");

log(m1);
log(m2);