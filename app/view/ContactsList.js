Ext.define('SKJS.view.ContactsList', {

    extend: 'Ext.dataview.List',
    xtype: 'contactslist',
    id: 'contacts-list',

    config: {
        emptyText: 'We did not find anything.. nope.',
        grouped: true,
        pinHeaders: true,
        itemTpl: '{first_name} {last_name}',
        store: 'Contacts'
    }

});