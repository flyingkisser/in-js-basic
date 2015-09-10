/**
 * Created by joe on 15/8/20.
 */
var imageViewLayer = cc.Layer.extend({
    f:0,
    ctor:function () {
        this._super();
        var root=ccsp.ui.loadUI("res/ui/ImageViewLayer.json");
        this.addChild(root);

        var imgObj=ccsp.ui.getWidgetByName(root,"img");

        //event by closure
        imgObj.addTouchEventListener(function (sender,type) {
            if(type==ccui.Widget.TOUCH_BEGAN) {
                cc.log("touch begin in closure %d",this.f++);
            }
            else if(type==ccui.Widget.TOUCH_ENDED)
                cc.log("touch end in closure");
        },this);

        var i=0;
        imgObj.addClickEventListener(function()
        {
           cc.log("click event");
           var v=i++%2+1;

           //ccui.Widget.LOCAL_TEXTURE|ccui.Widget.PLIST_TEXTURE
           //this.loadTexture(cc.formatStr("res/ui/%d.png",v),ccui.Widget.PLIST_TEXTURE);
            this.loadTexture(cc.formatStr("%d.png",v),ccui.Widget.PLIST_TEXTURE);
        });

        return true;
    }

});