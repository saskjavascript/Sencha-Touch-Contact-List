Ext.define('SKJS.view.Main', {

    extend: 'Ext.tab.Panel',
    xtype: 'main',
    id: 'main',

    config: {
        tabBar: {
            defaults: {
                flex: 1
            },
            docked: 'bottom',
            layout: {
                pack: 'center'
            }
        },

        items: [
            {
                title: 'Contacts',
                iconCls: 'home',
                xtype: 'contacts'
            },
            {
                title: 'Contact Details',
                hidden: true,
                xtype: 'contactdetails'
            }
        ]
    }

});