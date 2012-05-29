Ext.define("TouchDD.view.Source", {
    extend: 'Ext.Container',
    alias : 'widget.source',
    requires : ['TouchDD.view.DraggableImage'],
    config: {
        defaults : {
            xtype : 'dimage',
            mode  : 'image'
        },
        items : [{
            src   : 'resources/images/circle.png'
        }, {
            src   : 'resources/images/square.png'
        }, {
            src   : 'resources/images/triangle.png'
        }]
    }        
});
