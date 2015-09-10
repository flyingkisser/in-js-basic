/**
 * Created by joe on 15/8/27.
 */

var loaderLayer = cc.Layer.extend({
    f:0,
    ctor:function () {
        this._super();

        var root=ccsp.ui.loadUI("res/ui/LoaderLayer.json");
        this.addChild(root);

        var btnObj1=ccsp.ui.getWidgetByName(root,"btn");


        btnObj1.addClickEventListener(function() {
            var res=["res/config/t1.json","res/png/t1.png","res/video/4.mp4"];

            //only support txt,json,png/jpg,csb,mp4
            cc.loader.load(res,

            function(target,total,index){
                cc.log("load %d/%d",index+1,total);
            },

            function(err,dataArray){
                cc.log("all load ok");
                var configJson=cc.loader.getRes("res/config/t1.json");
                var textureObj=cc.loader.getRes("res/png/t1.png");
                var mp4Obj=cc.loader.getRes("res/video/4.mp4");

                var t1=cc.textureCache.getTextureForKey("res/png/t1.png");
                cc.loader.release("res/png/t1.png");

                cc.textureCache.removeTextureForKey("res/png/t1.png");
             
                var t2=cc.textureCache.getTextureForKey("res/png/t1.png");
            }

            );



        });

        var loadBinary;
        if(ccsp.sys.isNative()) {
            loadBinary = cc.loader.loadBinary
        }else {
            loadBinary = cc.loader.loadCsb;
        }


        loadBinary("res/binary/904.rar",
                function(err,data)
                {
                    cc.log("load binary data ok");

                    //u cannot getRes or release something loaded  directly by cc.loader.loadXXX
                    //so rarData or ret is undefined
                    var rarData=cc.loader.getRes("res/binary/904.rar");
                    var ret=cc.loader.release("res/binary/904.rar");
                }
            );



        return true;
    }


});
