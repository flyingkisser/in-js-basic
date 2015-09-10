/**
 * Created by joe on 15/8/12.
 */
var ccsp;
var log=console.log;
(function ()
{
    this.name="ccsp";
    this.getName=function(){return this.name;};
    ccsp=this;
})();

log(ccsp.getName());