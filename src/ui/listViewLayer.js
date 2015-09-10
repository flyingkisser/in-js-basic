/**
 * Created by joe on 15/8/22.
 */
var listViewLayer = cc.Layer.extend({
    f:0,
    ctor:function () {
        this._super();

        var root=ccsp.ui.loadUI("res/ui/ListViewLayer.json");
        this.addChild(root);

        var btnAdd=ccsp.ui.getWidgetByName(root,"btnAdd");
        var btnDel=ccsp.ui.getWidgetByName(root,"btnDel");
        var btnClear=ccsp.ui.getWidgetByName(root,"btnClear");
        var btnInit=ccsp.ui.getWidgetByName(root,"btnInit");
        var btnFor=ccsp.ui.getWidgetByName(root,"btnFor");

        var list1=ccsp.ui.getWidgetByName(root,"list1");
        var t1=ccsp.ui.getWidgetByName(root,"t1");

        var p1=ccsp.ui.getWidgetByName(root,"p1");
        list1.setItemModel(p1);

        for(var i=0;i<4;i++){
            list1.pushBackDefaultItem();
        }

        btnAdd.addClickEventListener(function(){
            list1.pushBackDefaultItem();
            //list1.insertDefaultItem(1);
        });

        btnDel.addClickEventListener(function(){
            list1.removeLastItem();
            //list1.removeItem(1);
        });

        btnClear.addClickEventListener(function(){
            list1.removeAllItems();
        });

        btnInit.addClickEventListener(function(){
            for(var i=0;i<4;i++){
                list1.pushBackDefaultItem();
            }
        });

        btnFor.addClickEventListener(function(){
            var max=list1.getItems().length;
            for(var i=0;i<max;i++){
                var item=list1.getItem(i);
                var str=cc.formatStr("at itme %d",i);
                t1.setString(str);
                cc.log(str);
            }
        });

        return true;
    },


});
