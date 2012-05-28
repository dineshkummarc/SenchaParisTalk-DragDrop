Ext.define('DataObject', {
    extend: 'Ext.data.Model',
    fields: ['name', 'column1', 'column2']
});

Ext.define('SP.dd.GridForm', {
    extend   : 'Ext.Panel',
    xtype    : 'gridform',
    requires : ['Ext.grid.Panel', 'Ext.form.Panel'],

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
        var gridStore = Ext.create('Ext.data.Store', {
            model: 'DataObject',
            data: myData
        });
        
        // Column Model shortcut array
        var columns = [
            {text: "Record Name", flex: 1, sortable: true, dataIndex: 'name'},
            {text: "column1", width: 70, sortable: true, dataIndex: 'column1'},
            {text: "column2", width: 70, sortable: true, dataIndex: 'column2'}
        ];
        
        // declare the source Grid
        var grid = Ext.create('Ext.grid.Panel', {
            viewConfig: {
                plugins: {
                    ptype      : 'gridviewdragdrop',
                    dragGroup  : 'gridform',
                    enableDrop : false
                }
            },
            store          : gridStore,
            columns        : columns,
            //enableDragDrop : true,
            stripeRows     : true
        });
        
        // Setup the form panel
        var formPanel = Ext.create('Ext.form.Panel', {
            bodyStyle  : 'padding: 10px; background-color: #DFE8F6',
            labelWidth : 100,
            defaults : {
                xtype  : 'textfield',
                anchor : '100%'
            },
            items : [{
                fieldLabel : 'Record Name',
                name       : 'name'
            },{
                fieldLabel : 'Column 1',
                name       : 'column1'
            },{
                fieldLabel : 'Column 2',
                name       : 'column2'
            }]
        });
        
        formPanel.on('render', this.setupDragDrop, this);
    
        var talk = Ext.create('Ext.Component', {
            style : 'padding:20px',
            styleHtmlContent : true,
            loader : {
                renderer : 'html',
                url      : 'grid-form.html',
                autoLoad : true
            }
        });
        
        var config = {
            title  : 'Grid to Form',
            layout : {
                type  : 'hbox',
                align : 'stretch'
            },
            defaults : {
                flex : 1
            },
            items : [
                talk,
                grid,
                formPanel
            ]
        };
        
        Ext.apply(this, config);
        this.callParent();
    },
    setupDragDrop : function(formPanel){
        var formPanelDropTarget = Ext.create('Ext.dd.DropTarget', formPanel.body.dom, {
            ddGroup: 'gridform',
            notifyEnter: function(ddSource, e, data) {

                //Add some flare to invite drop.
                formPanel.body.stopAnimation();
                formPanel.body.highlight();
            },
            notifyDrop  : function(ddSource, e, data){

                // Reference the record (single selection) for readability
                var selectedRecord = ddSource.dragData.records[0];

                // Load the record into the form
                formPanel.getForm().loadRecord(selectedRecord);

                // Delete record from the source store.  not really required.
                ddSource.view.store.remove(selectedRecord);

                return true;
            }
        });
    }
});
