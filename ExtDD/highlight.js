
Ext.define('LC.plugin.DragDrop', {
    extend: 'Ext.grid.plugin.DragDrop',
    alias: 'plugin.lcdragdrop',

    onViewRender : function(view) {
        var me = this;

        if (me.enableDrag) {
            me.dragZone = new Ext.view.DragZone({
                view: view,
                ddGroup: me.dragGroup || me.ddGroup,
                dragText: me.dragText,
                onStartDrag : function(){
                    var targets = Ext.dd.DragDropManager.getRelated(this, true);
                    var me = this;
                    targets.forEach(function(target){
                        if(target.view !== me.view){
                            target.el.highlight();
                        }
                    });
                }
            });
        }

        if (me.enableDrop) {
            me.dropZone = new Ext.grid.ViewDropZone({
                view: view,
                ddGroup: me.dropGroup || me.ddGroup
            });
        }
    }
});

Ext.define('SP.dd.Highlight', {
    extend   : 'Ext.Panel',
    xtype    : 'highlight',
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

        // Column Model shortcut array
        var columns = [
            {text: "Record Name", flex: 1, sortable: true, dataIndex: 'name'},
            {text: "column1", width: 70, sortable: true, dataIndex: 'column1'},
            {text: "column2", width: 70, sortable: true, dataIndex: 'column2'}
        ];
        
        var firstGrid = Ext.create('Ext.grid.Panel', {
            multiSelect : true,
            viewConfig : {
                plugins : {
                    ptype : 'lcdragdrop',
                    ddGroup : '3grid'
                }
            },
            store  : {
                model : 'DataObject',
                data  : myData
            },
            columns    : columns,
            stripeRows : true
        });
        

        // create the destination Grids
        var secondGrid = Ext.create('Ext.grid.Panel', {
            multiSelect : true,
            viewConfig : {
                plugins : {
                    ptype : 'lcdragdrop',
                    ddGroup : '3grid'
                }
            },
            store : {
                model : 'DataObject'
            },
            columns    : columns,
            stripeRows : true
        });
        
        var thirdGrid = Ext.create('Ext.grid.Panel', {
            multiSelect : true,
            viewConfig : {
                plugins : {
                    ptype : 'lcdragdrop',
                    ddGroup : '3grid'
                }
            },
            store : {
                model : 'DataObject'
            },
            columns    : columns,
            stripeRows : true
        });
        
        var talk = Ext.create('Ext.Component', {
            style : 'padding:20px',
            styleHtmlContent : true,
            loader : {
                renderer : 'html',
                url      : 'highlight.html',
                autoLoad : true
            }
        });
        
        var config = {
            title  : 'Highlight targets',
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
                {
                    xtype : 'container',
                    layout : {
                        type : 'vbox',
                        align : 'stretch'
                    },
                    defaults : {
                        flex : 1
                    },
                    items : [
                        secondGrid,
                        thirdGrid
                    ]
                }                    
            ]
        };
        
        Ext.apply(this, config);
        this.callParent();
    } 
});

