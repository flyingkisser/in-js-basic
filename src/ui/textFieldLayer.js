/**
 * Created by joe on 15/8/22.
 */
/**
 * Created by joe on 15/8/22.
 */
var textFieldLayer = cc.Layer.extend({
    f:0,
    ctor:function () {
        this._super();

        var root=ccsp.ui.loadUI("res/ui/TextFieldLayer.json");
        this.addChild(root);

        var input1=ccsp.ui.getWidgetByName(root,"input1");
        var input2=ccsp.ui.getWidgetByName(root,"input2");

        var t1=ccsp.ui.getWidgetByName(root,"t1");
        var t2=ccsp.ui.getWidgetByName(root,"t2");
        var t3=ccsp.ui.getWidgetByName(root,"t3");

        input1.addEventListener(function(send,type){
            switch (type){
                case ccui.TextField.EVENT_ATTACH_WITH_IME:
                    t3.setString("ime attach");
                    break;
                case ccui.TextField.EVENT_DETACH_WITH_IME:
                    t3.setString("ime dettach");
                    break;
                case ccui.TextField.EVENT_DELETE_BACKWARD:
                case ccui.TextField.EVENT_INSERT_TEXT:
                    t1.setString(input1.getString());
                    break;
            }
        },this);

        input2.addEventListener(function(send,type){
            switch (type){
                case ccui.TextField.EVENT_ATTACH_WITH_IME:
                    t3.setString("ime attach");
                    break;
                case ccui.TextField.EVENT_DETACH_WITH_IME:
                    t3.setString("ime dettach");
                    break;
                case ccui.TextField.EVENT_DELETE_BACKWARD:
                case ccui.TextField.EVENT_INSERT_TEXT:
                    t2.setString(input2.getString());
                    break;
            }
        },this);

        return true;
    },


});
