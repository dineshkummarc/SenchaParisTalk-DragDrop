

Ext.application({
    name: 'SPDragDrop',
    launch: function() {
        Ext.create('Ext.container.Viewport', {
            layout: 'fit',
            items: {
                xtype : 'tabpanel',
                items : [{
                    xtype : 'gridgrid'
                },{
                    xtype : 'gridform'
                }, {
                    xtype : 'dvdv'
                }, {
                    xtype : 'highlight'
                }, {
                    xtype : 'proxy'
                },{
                    style : 'padding:20px',
                    styleHtmlContent : true,
                    loader : {
                        renderer : 'html',
                        url      : 'more.html',
                        autoLoad : true
                    }
                }]
            }
        });
    }
});
