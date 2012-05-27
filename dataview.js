
Ext.define('SP.dd.DVDV', {
    extend   : 'Ext.Panel',
    xtype    : 'dvdv',
    requires : ['Ext.view.View'],

    initComponent : function(){
        var talk = Ext.create('Ext.Component', {
            styleHtmlContent : true,
            loader : {
                renderer : 'html',
                url      : 'dataview.html',
                autoLoad : true
            }
        });
        
        var config = {
            title  : 'View to View',
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

