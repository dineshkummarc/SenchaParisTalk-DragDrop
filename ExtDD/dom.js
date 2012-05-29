
Ext.define('SP.dd.Dom', {
    extend   : 'Ext.Panel',
    xtype    : 'dom',

    initComponent : function(){
        
        var dom = Ext.create('Ext.Component', {
            html : '<div class="source">Drag Me</div><div class="target">Drop Here!</div>'
        });
        dom.on('render', this.setupDD, this);
        
        var talk = Ext.create('Ext.Component', {
            style : 'padding:20px',
            styleHtmlContent : true,
            loader : {
                renderer : 'html',
                url      : 'dom.html',
                autoLoad : true
            }
        });
        
        var config = {
            title  : 'Simple Dom',
            layout : {
                type  : 'hbox',
                align : 'stretch'
            },
            defaults : {
                flex : 1
            },
            items : [
                talk,
                dom
            ]
        };
        
        Ext.apply(this, config);
        this.callParent();
    },
    setupDD : function(component){
        var dragDiv = component.el.down('.source');
        var dropDiv = component.el.down('.target');
        
        var ddSource = Ext.create('Ext.dd.DragSource', dragDiv, {
            xTickSize : 50,
            yTickSize : 50,
            onStartDrag : function(){
                this.constrainTo(dragDiv.parent());
            }
        });
        
        var ddTarget = Ext.create('Ext.dd.DropTarget', dropDiv, {
            notifyDrop : function(source){
                source.el.appendTo(dropDiv);
            }
        });
    }
});

