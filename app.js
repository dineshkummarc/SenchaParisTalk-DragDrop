

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
                    xtype : 'treetree'
                },{
                    xtype : 'gridform'
                }, {
                    xtype : 'dvdv'
                }, {
                    xtype : 'dvdvhighlight'
                }, {
                    xtype : 'dvdvproxy'
                }]
            }
        });
    }
});
