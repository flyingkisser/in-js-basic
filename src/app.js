var MainScene = cc.Scene.extend({
    onEnter:function () {
        this._super();

        //var s1=testLayer.prototype.testList;
        var beginLayer = new testLayer.prototype.testList[0]();
        var test_layer=new testLayer();
        test_layer.addChild(beginLayer,0,1001);
        this.addChild(test_layer);

    }
});