YUI.add('contact', function (Y) {

    Y.ContactModel = Y.Base.create('contactModel', Y.Model, [], {
        setName: function (name) {
            this.set('name', name);
        }
    }, {
        ATTRS: {
            id: {
                value: 0 
            },
            name: ''
        }
    });

}, '0.1', {requires: ['model']});
