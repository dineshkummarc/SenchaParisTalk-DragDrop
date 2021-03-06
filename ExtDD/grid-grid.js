Ext.define('DataObject', {
    extend: 'Ext.data.Model',
    fields: ['name', 'column1', 'column2']
});

Ext.define('SP.dd.GridGrid', {
    extend   : 'Ext.Panel',
    xtype    : 'gridgrid',
    requires : ['Ext.grid.Panel'],

    initComponent : function(){
        var myData = [
            { name : "Rec 0", column1 : "0", column2 : "0" },
            { name : "Rec 1", column1 : "1", column2 : "1" },
            { name : "Rec 2", column1 : "2", column2 : "2" },
            { name : "Rec 3", column1 : "3", column2 : "3" },
            { name : "Rec 4", column1 : "4", column2 : "4" },
            { name : "Rec 5", column1 : "5", column2 : "5" },
            { name : "Rec 6", column1 : "6", column2 : "6" },
            { name : "Rec 7", column1 : "7", column2 : "7" },
            { name : "Rec 8", column1 : "8", column2 : "8" },
            { name : "Rec 9", column1 : "9", column2 : "9" }
        ];

        // create the data store
        var firstGridStore = Ext.create('Ext.data.Store', {
            model: 'DataObject',
            data: myData
        });
        
        // Column Model shortcut array
        var columns = [
            {text: "Record Name", flex: 1, sortable: true, dataIndex: 'name'},
            {text: "column1", width: 70, sortable: true, dataIndex: 'column1'},
            {text: "column2", width: 70, sortable: true, dataIndex: 'column2'}
        ];
        
        var firstGrid = Ext.create('Ext.grid.Panel', {
            multiSelect: true,
            viewConfig: {
                plugins: {
                    ptype: 'gridviewdragdrop'
                    //,enableDrop : false
                    //,dragGroup: 'firstGridDDGroup'
                    //,dropGroup: 'secondGridDDGroup'
                }
            },
            store      : firstGridStore,
            columns    : columns,
            stripeRows : true
        });
        
        
        var secondGridStore = Ext.create('Ext.data.Store', {
            model: 'DataObject'
        });

        // create the destination Grid
        var secondGrid = Ext.create('Ext.grid.Panel', {
            viewConfig: {
                plugins: {
                    ptype: 'gridviewdragdrop'
                    //,enableDrag : false
                    //,dragGroup: 'secondGridDDGroup'
                    //,dropGroup: 'firstGridDDGroup'
                }
            },
            store      : secondGridStore,
            columns    : columns,
            stripeRows : true
        });
        
        var talk = Ext.create('Ext.Component', {
            style : 'padding:20px',
            styleHtmlContent : true,
            loader : {
                renderer : 'html',
                url      : 'grid-grid.html',
                autoLoad : true
            }
        });
        
        var config = {
            title  : 'Grid to Grid',
            layout : {
                type  : 'hbox',
                align : 'stretch'
            },
            defaults : {
                flex : 1
            },
            items : [
                talk,
                firstGrid,
                secondGrid
            ]
        };
        
        Ext.apply(this, config);
        this.callParent();
    } 
});
