/**
 * Created by joe on 15/8/21.
 */
/**
 * Created by joe on 15/8/20.
 */
/**
 * Created by joe on 15/8/20.
 */
var textBMFontLayer = cc.Layer.extend({
    ctor:function () {
        this._super();
        var root=ccsp.ui.loadUI("res/ui/TextBMFontLayer.json");
        this.addChild(root);

        var t1=ccsp.ui.getWidgetByName(root,"textfnt1");

        t1.addClickEventListener(function()
        {
            var str=ccsp.rand.getRandStr(10);
            t1.setString(str);
            cc.log("set str %s",str);
        });

        return true;
    }

});