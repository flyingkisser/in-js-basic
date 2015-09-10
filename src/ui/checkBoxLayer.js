/**
 * Created by joe on 15/8/20.
 */
/**
 * Created by joe on 15/8/19.
 */
var checkBoxLayer = cc.Layer.extend({
    f:0,
    ctor:function () {
        this._super();
        var root=ccsp.ui.loadUI("res/ui/CheckBoxLayer.json");
        this.addChild(root);

        var chkObj1=ccsp.ui.getWidgetByName(root,"chkBox1");
        var chkObj2=ccsp.ui.getWidgetByName(root,"chkBox2");
        var chkObj3=ccsp.ui.getWidgetByName(root,"chkBox3");

        //event by closure
        chkObj1.addTouchEventListener(function (sender,type) {
            if(type==ccui.Widget.TOUCH_BEGAN) {
                cc.log("touch begin in closure %d",this.f++);
            }
            else if(type==ccui.Widget.TOUCH_ENDED)
                cc.log("touch end in closure");
        },this);

        chkObj2.addEventListener(function(sender,type)
        {
           switch (type) {
               case  ccui.CheckBox.EVENT_SELECTED:
                   cc.log("checked ");
                   break;
               case  ccui.CheckBox.EVENT_UNSELECTED:
                   cc.log("unchecked");
                   break;
           }
           var state=this.isSelected();
           cc.log("state is %d",state);
        });

        chkObj3.addEventListener(function(sender,type)
        {
            switch (type) {
                case  ccui.CheckBox.EVENT_SELECTED:
                    cc.log("checked %d",this.f++);
                    break;
                case  ccui.CheckBox.EVENT_UNSELECTED:
                    cc.log("unchecked %d",this.f++);
                    break;
            }
            var state=sender.isSelected();
            cc.log("state is %d",state);
        },this);

        return true;
    },

});