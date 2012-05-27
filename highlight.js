
Ext.define('SP.dd.DVDVHighlight', {
    extend   : 'Ext.Panel',
    xtype    : 'dvdvhighlight',
    requires : ['Ext.view.View'],

    initComponent : function(){
        var talk = Ext.create('Ext.Component', {
            styleHtmlContent : true,
            loader : {
                renderer : 'html',
                url      : 'highlight.html',
                autoLoad : true
            }
        });
        
        var config = {
            title  : 'View to View - Highlight targets',
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

