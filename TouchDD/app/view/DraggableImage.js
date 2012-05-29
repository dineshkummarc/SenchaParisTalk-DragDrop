
Ext.define('TouchDD.view.DraggableImage', {
    extend : 'Ext.Img',
    alias : 'widget.dimage',
    
    config: {
        draggable: {
            direction: 'both',
            constraint : 'container'
        },
        width : 50
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
        
    },

    onDrag: function() {
        
    },

    onDragEnd: function() {
        
    }
});
