/**
 * Created by joe on 15/8/13.
 */
/**
 * Created by joe on 15/8/12.
 */
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
    People.call(this,name); //触发call的People的构造函数,即People()函数,结果是重置了Man的prototype()
                            //第一次构造
}

Man.prototype=new People(); //第二次再构造
Man.prototype.getYear=function(){return this.year;};
Man.prototype.setYear=function(n){this.year=n;};


var m1=new Man("joe",20);
//m1.setName("joe");
m1.addItem("pear");

var m2=new Man("jack",22);
//m2.setName("jack");     //不会改变m1中的变量
m2.addItem("banana");   //不会改变m1的变量

log(m1);
log(m2);
log(m1.getItem());
log(m2.getItem());

