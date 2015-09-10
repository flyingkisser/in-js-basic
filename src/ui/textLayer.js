/**
 * Created by joe on 15/8/20.
 */
/**
 * Created by joe on 15/8/20.
 */
var textLayer = cc.Layer.extend({
    ctor:function () {
        this._super();
        var root=ccsp.ui.loadUI("res/ui/TextLayer.json");
        this.addChild(root);

        var t1=ccsp.ui.getWidgetByName(root,"text1");
        var t2=ccsp.ui.getWidgetByName(root,"text2");
        var t3=ccsp.ui.getWidgetByName(root,"text3");

        var btn1=ccsp.ui.getWidgetByName(root,"btn1");
        var btn2=ccsp.ui.getWidgetByName(root,"btn2");



        var i=0;
        var k=0;
        btn1.addClickEventListener(function()
        {
            var v=i++%2+1;
            if(ccsp.sys.isNative())
                var fname=cc.formatStr("res/font/font%d.ttf",v);
            else
                var fname=cc.formatStr("font%d",v);

            //seFontName don't work on web
            t1.setFontName(fname);
            t2.setFontName(fname);
            t3.setFontName(fname);
            cc.log("set font name %s",fname);
        });

        btn2.addClickEventListener(function()
        {
            var v=k++%4+1;
            var size=v*12;
            t1.setFontSize(size);
            t2.setFontSize(size);
            t3.setFontSize(size);
            cc.log("set font size %d",size);
        });

        return true;
    }

});