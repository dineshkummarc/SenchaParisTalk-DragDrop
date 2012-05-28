
Ext.define('SP.dd.DVDV', {
    extend   : 'Ext.Panel',
    xtype    : 'dvdv',
    requires : ['Ext.view.View'],

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
        var firstStore = Ext.create('Ext.data.Store', {
            model: 'DataObject',
            data: myData
        });
        
        // Column Model shortcut array
        var columns = [
            {text: "Record Name", flex: 1, sortable: true, dataIndex: 'name'},
            {text: "column1", width: 70, sortable: true, dataIndex: 'column1'},
            {text: "column2", width: 70, sortable: true, dataIndex: 'column2'}
        ];
        
        var dv1 = Ext.create('Ext.view.View', {
            tpl : new Ext.XTemplate(
                '<tpl for=".">',
                    '<div class="item">',
                        '<span>{name}</span>',
                    '</div>',
                '</tpl>'
            ),
            itemSelector    : 'div.item',
            trackOver       : true,
            overItemCls     : 'over',
            selectedItemCls : 'selected',
            multiSelect     : true,
            
            store : firstStore
        });
        
        dv1.on('render', this.setupDD, this);
        
        
        var secondStore = Ext.create('Ext.data.Store', {
            model: 'DataObject'
        });

        // create the destination view
        var dv2 = Ext.create('Ext.view.View', {
            tpl : new Ext.XTemplate(
                '<tpl for=".">',
                    '<div class="item2">',
                        '<span>{name}</span>',
                    '</div>',
                '</tpl>'
            ),
            itemSelector    : 'div.item2',
            trackOver       : true,
            overItemCls     : 'over',
            selectedItemCls : 'selected',
            multiSelect     : true,
            
            store : secondStore
        });

        dv2.on('render', this.setupDD, this);
        
        var talk = Ext.create('Ext.Component', {
            style : 'padding:20px',
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
                talk,
                {xtype:'container', layout : 'fit', items : dv1},
                {xtype:'container', layout : 'fit', items : dv2}
            ]
        };
        
        Ext.apply(this, config);
        this.callParent();
    },
    setupDD : function(dv){
        new Ext.view.DragZone({
            view     : dv,
            ddGroup  : 'dv',
            dragText : '{0} selected item{1}'
        });

        new Ext.view.DropZone({
            view    : dv,
            ddGroup :'dv',
            handleNodeDrop : function(data, record, position) {
                var view = this.view,
                    store = view.getStore(),
                    index, records, i, len;

                // If the copy flag is set, create a copy of the Models with the same IDs
                if (data.copy) {
                    records = data.records;
                    data.records = [];
                    for (i = 0, len = records.length; i < len; i++) {
                        data.records.push(records[i].copy(records[i].getId()));
                    }
                } else {
                    /*
                     * Remove from the source store. We do this regardless of whether the store
                     * is the same bacsue the store currently doesn't handle moving records
                     * within the store. In the future it should be possible to do this.
                     * Here was pass the isMove parameter if we're moving to the same view.
                     */
                    data.view.store.remove(data.records, data.view === view);
                }

                index = store.indexOf(record);

                // 'after', or undefined (meaning a drop at index -1 on an empty View)...
                if (position !== 'before') {
                    index++;
                }
                store.insert(index, data.records);
                view.getSelectionModel().select(data.records);
            }

        });
    }
});

