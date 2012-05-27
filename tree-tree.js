
Ext.define('SP.dd.TreeTree', {
    extend   : 'Ext.Panel',
    xtype    : 'treetree',
    requires : ['Ext.tree.Panel'],

    initComponent : function(){
        var talk = Ext.create('Ext.Component', {
            styleHtmlContent : true,
            loader : {
                renderer : 'html',
                url      : 'tree-tree.html',
                autoLoad : true
            }
        });
        
        var config = {
            title  : 'Tree to Tree',
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
