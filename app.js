Ext.application({
    name: 'SKJS',
    views: [
        'Main',
        'Contacts',
        'ContactsList',
        'ContactDetails'
    ],

    models: [
        'Contact'
    ],
    controllers: [
        'Contacts'
    ],
    stores: [
        'Contacts'
    ],

    launch: function()
    {
        Ext.Viewport.add({
            xclass: 'SKJS.view.Main'
        });
    }

});