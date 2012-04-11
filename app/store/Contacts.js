Ext.define('SKJS.store.Contacts', {

    extend: 'Ext.data.Store',

    config: {
        model: 'SKJS.model.Contact',
        grouper: function(record)
        {
            var name = record.data.first_name[0];
            return name.toUpperCase();
        },
        proxy: {
            type: 'ajax',
            url: 'app/data/contacts.json',
            reader: {
                type: 'json'
            }
        },
        autoLoad: true
    }

});