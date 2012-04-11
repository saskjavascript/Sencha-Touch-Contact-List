Ext.define('SKJS.controller.Contacts', {

    extend: 'Ext.app.Controller',

    config: {
        control: {
            contactslist: {
                itemtap: "deselectListItem",
                select: "showDetail"
            }
        },
        refs: {
            main: 'main'
        }
    },

    deselectListItem: function(dv, index, item, e)
    {
        setTimeout(function(){
            dv.deselect(index);
        }, 0);
    },

    showDetail: function(list, record)
    {
        var Main = this.getMain();
        Main.setActiveItem(1);
        Ext.getCmp('contact-details-form').setRecord(record);
    }

});