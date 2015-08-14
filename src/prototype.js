/**
 * Created by joe on 15/8/12.
 */

var log=console.log;
function Man(name){
    this.name=name;
    this.year=0;
    this.getYear=function(){return this.year;};
    this.setYear=function(n){this.year=n;};
    this.getName=function(){return this.name;};
}

Man.prototype.resetYear=function(){this.year=0;};

var joe=new Man("joe");
joe.setYear(20);
var jack=new Man("jack");
jack.setYear(25);
log(joe.getName()+joe.getYear());
log(jack.getName()+jack.getYear());

joe.resetYear();
log(joe.getYear());
log(jack.getYear());