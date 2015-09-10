/**
 * Created by joe on 15/8/19.
 */
var buttonLayer = cc.Layer.extend({
    f:0,
    ctor:function () {
        this._super();

        var root=ccsp.ui.loadUI("res/ui/ButtonLayer.json");
        this.addChild(root);

        var btnObj1=ccsp.ui.getWidgetByName(root,"btnClick1");
        var btnObj2=ccsp.ui.getWidgetByName(root,"btnClick2");

        //event by closure
        btnObj1.addTouchEventListener(function (sender,type) {
            if(type==ccui.Widget.TOUCH_BEGAN) {
                var pos = sender.getTouchBeganPosition();
                cc.log("touch begin in closure %d %d", pos.x, pos.y);
            }
            else if(type==ccui.Widget.TOUCH_ENDED) {
                var pos = sender.getTouchEndPosition();
                cc.log("touch end in closure %d %d",pos.x,pos.y);
            }
        });
        btnObj1.addClickEventListener(function(){cc.log("click ok in closure")});

        //normal callback
        //这里如果指定了this,在onXX里this代表的是buttonLayer对象,如果不指定this,则代表的就是btnObj自己
        //btnObj.addTouchEventListener(this.onTouch);
        btnObj2.addTouchEventListener(this.onTouch,this);

        //clickevent没有this参数..即this只能是btnObj
        btnObj2.addClickEventListener(this.onClick);

        return true;
    },

    onClick: function (sender) {
        var pos=sender.getTouchEndPosition();
        cc.log("click ok %d %d",pos.x,pos.y);
    },

    onTouch:function(sender,type){
        switch (type){
            case ccui.Widget.TOUCH_BEGAN:
                var pos = sender.getTouchBeganPosition();

                cc.log("touch begin pos %d %d",pos.x,pos.y);
                break;
            case ccui.Widget.TOUCH_ENDED:
                var pos = sender.getTouchEndPosition();
                //cc.log("touch end pos %d %d",pos.x,pos.y);

                var r=ccsp.rand.getRand(1,100);

                var findex=this.f%2+1;
                var size=(this.f%4+1)*12;
                var fname=cc.formatStr("res/font/font%d.ttf",findex);
                this.f++;

                sender.setTitleText("rand is "+r);
                sender.setTitleFontName(fname);
                sender.setTitleFontSize(size);

                cc.log("set font size %d fontname %s",size,fname);

                break;
            case ccui.Widget.TOUCH_MOVED:
                var pos = sender.getTouchMovePosition();
                cc.log("touch moving pos %d %d",pos.x,pos.y);
                break;
            case ccui.Widget.TOUCH_CANCELED:
                cc.log("touch cancel");
                break;
        }
    }
});
