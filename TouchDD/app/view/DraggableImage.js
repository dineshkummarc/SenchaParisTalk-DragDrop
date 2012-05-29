
Ext.define('TouchDD.view.DraggableImage', {
    extend : 'Ext.Img',
    alias : 'widget.dimage',
    
    config: {
        draggable: {
            direction: 'both',
            constraint : 'container'
        },
        // hard coded
        width  : 50,
        height : 50
    },
    initialize: function() {
        this.callParent();
        this.getDraggable().onBefore({
            dragstart: 'onDragStart',
            drag: 'onDrag',
            dragend: 'onDragEnd',
            scope: this
        });
    },

    onDragStart: function() {
        this.element.addCls('dragging');
    },

    onDrag: function() {
        
    },

    onDragEnd: function() {
        this.element.removeCls('dragging');
    }
});
