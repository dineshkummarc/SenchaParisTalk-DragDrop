
Ext.define('SP.dd.DVDVProxy', {
    extend   : 'Ext.Panel',
    xtype    : 'dvdvproxy',
    requires : ['Ext.view.View'],

    initComponent : function(){
        var talk = Ext.create('Ext.Component', {
            styleHtmlContent : true,
            loader : {
                renderer : 'html',
                url      : 'proxy.html',
                autoLoad : true
            }
        });

        var config = {
            title  : 'View to View - Custom Proxy',
            layout : {
                type  : 'hbox',
                align : 'stretch'
            },
            defaults : {
                flex : 1
            },
            items : [
                talk
            ]
        };
        
        Ext.apply(this, config);
        this.callParent();
    } 
});

