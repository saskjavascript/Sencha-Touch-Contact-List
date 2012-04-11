Ext.define('SKJS.view.Contacts', {

    extend: 'Ext.Container',
    xtype: 'contacts',

    config: {
        layout: 'fit',

        items: [
            {
                xtype: 'toolbar',
                title: 'Contacts',
                docked: 'top',
                ui: 'dark'
            },
            {
                xtype: 'contactslist'
            }
        ]
    }

});