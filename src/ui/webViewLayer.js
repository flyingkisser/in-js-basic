/**
 * Created by joe on 15/8/24.
 */

var webViewLayer = cc.Layer.extend({
    f:0,
    ctor:function () {
        this._super();

        var root=ccsp.ui.loadUI("res/ui/WebViewLayer.json");
        this.addChild(root);

        var p1=ccsp.ui.getWidgetByName(root,"p1");
        var inputUrl=ccsp.ui.getWidgetByName(root,"inputUrl");
        var btnVisit=ccsp.ui.getWidgetByName(root,"btnVisit");

        if(!ccsp.sys.isNative()) {
            //only works on web

            var webView = new ccui.WebView("http://www.baidu.com");
            var size = p1.getContentSize();
            webView.setContentSize(size.width, size.height);
            //videoView.setContentSize(640,360);
            var pos = p1.getPosition();
            //videoView.setPosition(320,1136/2);
            webView.setPosition(pos.x + size.width / 2, pos.y + size.height / 2);
            root.addChild(webView);
            window.webView = webView;

            webView.setScalesPageToFit(true);

            webView.setEventListener(ccui.WebView.EventType.LOADED, function (sender,url) {
                cc.log("LOADED");
            });
            webView.setEventListener(ccui.WebView.EventType.LOADING, function (sender,url) {
                cc.log("LOADING");
            });
            webView.setEventListener(ccui.WebView.EventType.ERROR, function (sender,url) {
                cc.log("ERROR");
            });


            btnVisit.addClickEventListener(function () {
                //videoView.setURL("res/video/1.mp4");
                var url=inputUrl.getString();
                cc.log("begin to load %s",url);
                webView.loadURL(url);
            });


        }

        return true;
    },


})