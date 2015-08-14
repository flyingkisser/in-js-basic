/**
 * Created by joe on 15/8/12.
 */
var log=console.log;

function Man(){
    var year=0;
    return {
        setYear:function(n){year=n;},
        getYear:function(){return year;}
    }
}

var manJoe=new Man();
log(manJoe.getYear());
manJoe.setYear(100);
log(manJoe.getYear());

//不定形参
function testParam(){
    log(arguments);
}

testParam(new Array(11,22));
testParam(1,2,"aa");

{ '0': [ 11, 22 ] }
{ '0': 1, '1': 2, '2': 'aa' }