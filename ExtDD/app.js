

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
                }, {
                    xtype : 'dom'
                },{
                    title : 'More',
                    style : 'padding:20px',
                    styleHtmlContent : true,
                    loader : {
                        renderer : 'html',
                        url      : 'more.html',
                        autoLoad : true
                    }
                },{
                    title : 'Merci',
                    style : 'padding:20px',
                    styleHtmlContent : true,
                    loader : {
                        renderer : 'html',
                        url      : 'info.html',
                        autoLoad : true
                    }
                }]
            }
        });
    }
});
