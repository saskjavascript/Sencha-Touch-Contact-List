Ext.define('SKJS.view.ContactDetails', {

    extend: 'Ext.form.Panel',
    xtype: 'contactdetails',
    id: 'contact-details-form',

    requires: [
        'Ext.form.FieldSet'
    ],

    config: {
        items: [
            {
                xtype: 'toolbar',
                title: 'Client Details',
                docked: 'top',
                ui: 'dark',
                items: [
                    {
                        ui: 'back',
                        text: 'Back',
                        handler: function()
                        {
                            Ext.getCmp('main').setActiveItem(0);
                        }
                    }
                ]
            },
            {
                xtype: 'fieldset',
                defaults: {
                    labelWidth: '35%',
                    clearIcon: false
                },
                items: [
                    {
                        xtype: 'textfield',
                        name: 'first_name',
                        label: 'First Name'
                    }
                ]
            }
        ]
    }

});