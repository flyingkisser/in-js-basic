/**
 * Created by joe on 15/8/22.
 */
var sliderLayer = cc.Layer.extend({
    f:0,
    ctor:function () {
        this._super();

        var root=ccsp.ui.loadUI("res/ui/SliderLayer.json");
        this.addChild(root);

        var slider=ccsp.ui.getWidgetByName(root,"slider1");
        var text=ccsp.ui.getWidgetByName(root,"text1");

        slider.addEventListener(function(sender,type){
            if(type==ccui.Slider.EVENT_PERCENT_CHANGED){
                var p=sender.getPercent();
                var str=cc.formatStr("percent %d",Math.floor(p));
                cc.log(str);
                text.setString(str);
            }
        },this);


        return true;
    },


});
