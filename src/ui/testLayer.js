/**
 * Created by joe on 15/8/19.
 */
var testLayer = cc.Layer.extend({
    textDbg:null,
    curIndex:0,

    testList:[loaderLayer,buttonLayer,checkBoxLayer,imageViewLayer,textLayer,textBMFontLayer,loadingBarLayer,
    sliderLayer,textFieldLayer,listViewLayer,scrollViewLayer,videoViewLayer,webViewLayer],


    ctor:function () {
        this._super();

        var ui=ccsp.ui.loadUI("res/ui/TestLayer.json");
        this.addChild(ui,0,0);
        var btnNext=ccsp.ui.getWidgetByName(ui,"btnNext");
        var btnPre=ccsp.ui.getWidgetByName(ui,"btnPre");

        this.textDbg=ccsp.ui.getWidgetByName(ui,"textDbg");

        var _root=this;
        btnNext.addClickEventListener(function(){
            cc.log("next in closure");
            if((_root.curIndex+1)  >= _root.testList.length )
            {
                cc.log("at end");
                return;
            }

            var className=_root.testList[++_root.curIndex];
            var newLayer=new className();
            var oldLayer=_root.getChildByTag(1001);
            ccsp.ui.switchLayer(oldLayer,newLayer,1001);
            _root.dbglog("at layer %d",_root.curIndex);
        });

        btnPre.addClickEventListener(function(){
            cc.log("next in closure");
            if(_root.curIndex==0 )
            {
                cc.log("at begin");
                return;
            }

            var className=_root.testList[--_root.curIndex];
            var newLayer=new className();
            var oldLayer=_root.getChildByTag(1001);
            ccsp.ui.switchLayer(oldLayer,newLayer,1001);
            _root.dbglog("at layer %d",_root.curIndex);
        });


        this.dbglog("at layer %d",_root.curIndex);

        return true;
    },

    dbglog:function(){
        var s=cc.formatStr.apply(cc.formatStr,arguments);
        this.textDbg.setString(s);
    }

});
