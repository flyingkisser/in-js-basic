/**
 * Created by joe on 15/8/22.
 */
/**
 * Created by joe on 15/8/22.
 */
var scrollViewLayer = cc.Layer.extend({
    f:0,
    ctor:function () {
        this._super();

        var root=ccsp.ui.loadUI("res/ui/ScrollViewLayer.json");
        this.addChild(root);

        var bt=ccsp.ui.getWidgetByName(root,"btnCenter");
        var b1=ccsp.ui.getWidgetByName(root,"b1");
        var img1=ccsp.ui.getWidgetByName(root,"img1");


        var sc=ccsp.ui.getWidgetByName(root,"s1");
        var text=ccsp.ui.getWidgetByName(root,"t1");

        sc.setInnerContainerSize(img1.getContentSize());
        img1.x=img1.width/2;
        img1.y=img1.height/2;

        b1.addClickEventListener(function(){
            var str="b1 clicked!";
            cc.log(str);
            text.setString(str);
        });
        bt.addClickEventListener(function(){
            sc.scrollToPercentBothDirection(cc.p(50,50),1,true);
        });

        sc.addEventListener(function(sender,type){
            switch (type){
                case ccui.ScrollView.EVENT_SCROLL_TO_BOTTOM:
                    text.setString("scroll to bottom");
                    break;
                case ccui.ScrollView.EVENT_SCROLL_TO_TOP:
                    text.setString("scroll to top");
                    break;
                case ccui.ScrollView.EVENT_SCROLL_TO_LEFT:
                    text.setString("scroll to left");
                    break;
                case ccui.ScrollView.EVENT_SCROLL_TO_RIGHT:
                    text.setString("scroll to right");
                    break;
            }
        });

        return true;
    },


});
