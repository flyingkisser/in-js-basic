/**
 * Created by joe on 15/8/11.
 */

var log=console.log;

for(var i=0;i<=10;i++)
    log("i is "+i);

var k=10;
while(k>0)
{
    k--;
    if(k==3)
        break;
    if(k==5)
        continue;
    log("k is "+k);
}


log("end");

with(cc)
{
    var layer1=new Layer();

    log("layer1 pos is "+layer1.getPositionX());
}