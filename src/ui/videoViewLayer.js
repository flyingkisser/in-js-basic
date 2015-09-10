/**
 * Created by joe on 15/8/24.
 */

var videoViewLayer = cc.Layer.extend({
    f:0,
    ctor:function () {
        this._super();

        var root=ccsp.ui.loadUI("res/ui/VideoViewLayer.json");
        this.addChild(root);

        var p1=ccsp.ui.getWidgetByName(root,"p1");
        var btnPlay=ccsp.ui.getWidgetByName(root,"btnPlay");
        var btnStop=ccsp.ui.getWidgetByName(root,"btnStop");
        var btnPause=ccsp.ui.getWidgetByName(root,"btnPause");
        var btnResume=ccsp.ui.getWidgetByName(root,"btnResume");
        var btnSeek=ccsp.ui.getWidgetByName(root,"btnSeek");
        var btnFull=ccsp.ui.getWidgetByName(root,"btnFull");
        var btnNext=ccsp.ui.getWidgetByName(root,"btnNext");

        if(!ccsp.sys.isNative()) {
            //only works on web

            var videoView = new ccui.VideoPlayer("res/video/1.mp4");
            var size = p1.getContentSize();
            videoView.setContentSize(size.width, size.height);
            //videoView.setContentSize(640,360);
            var pos = p1.getPosition();
            //videoView.setPosition(320,1136/2);
            videoView.setPosition(pos.x + size.width / 2, pos.y + size.height / 2);
            root.addChild(videoView);
            window.video = videoView;
            videoView.stop();
            videoView.play();

            videoView.setEventListener(ccui.VideoPlayer.EventType.PLAYING, function (sender) {
                cc.log("playing");
            });
            videoView.setEventListener(ccui.VideoPlayer.EventType.PAUSED, function (sender) {
                cc.log("paused");
            });
            videoView.setEventListener(ccui.VideoPlayer.EventType.STOPPED, function (sender) {
                cc.log("stopped");
            });
            videoView.setEventListener(ccui.VideoPlayer.EventType.COMPLETED, function (sender) {
                cc.log("completed");
            });

            btnPlay.addClickEventListener(function () {
                //videoView.setURL("res/video/1.mp4");
                videoView.play();
            });
            btnStop.addClickEventListener(function () {
                videoView.stop();
            });
            btnPause.addClickEventListener(function () {
                videoView.pause();
            });
            btnResume.addClickEventListener(function () {
                videoView.resume();
            });
            btnSeek.addClickEventListener(function () {
                var sec = ccsp.rand.getRand(1, 59);
                videoView.seekTo(sec);
            });
            btnFull.addClickEventListener(function () {
                videoView.setFullScreenEnabled(true);
            });

            var i = 0;
            btnNext.addClickEventListener(function () {
                videoView.stop();
                var r = i++ % 4 + 1;
                var url = cc.formatStr("res/video/%d.mp4", r);
                videoView.setURL(url);
                videoView.play();
                cc.log("begin to play %s", url);
            });
        }

        return true;
    },


})