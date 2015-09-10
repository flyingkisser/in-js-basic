/**
 * Created by joe on 15/8/21.
 */

var loadingBarLayer = cc.Layer.extend({
    var1:0,
    var2:0,
    ctor:function () {
        this._super();
        var root=ccsp.ui.loadUI("res/ui/LoadingBarLayer.json");
        this.addChild(root);

        var bar1=ccsp.ui.getWidgetByName(root,"bar1");
        var text=ccsp.ui.getWidgetByName(root,"text1");

        //使用node对象的schedule方法创建一个timer
        //不需要关心node的生命期
        this.schedule(function(){
            var p=bar1.getPercent();
            cc.log("percent %d",p);

            if(p==100){
                //删除timer
                this.unschedule(arguments.callee);
                cc.log("func name is %s",arguments.callee.toString());
            }
            bar1.setPercent(this.var1++);
        },0.05);


        //使用ccsp.timer创建一个timer
        //这是一个全局的,需要在this销毁前自己释放掉
        ccsp.timer.create(this,"t1",function(){
            var str=cc.formatStr("var2 is %d",this.var2++);

            text.setString(str);

            if(this.var2>100)
            //把timer删除
                ccsp.timer.delete(this,"t1");

        },0.05);

        return true;
    },

    onExit:function(){
        this._super();
        ccsp.timer.delete(this,"t1");
    }

});