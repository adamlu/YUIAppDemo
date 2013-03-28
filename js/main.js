YUI({
    modules: {
        'contact-list-view': {
            fullpath: "js/view/ContactListView.js"
        },
        'contact': {
            fullpath: "js/model/Contact.js"
        },
        'contact-list': {
            fullpath: "js/model/ContactList.js"
        },
        'contact-view': {
            fullpath: "js/view/ContactView.js"
        }
    }
}).use('app-base', 'app-transitions', 'contact-list-view', 'contact', 'contact-list', 'contact-view', function (Y) {

    var app,
        myContactList;

    myContactList = new Y.ContactList();
    myContactList.add([
        {id: 0, name: 'Adam1'},
        {id: 1, name: 'Adam2'},
        {id: 2, name: 'Adam3'},
        {id: 3, name: 'Adam4'}
    ]);

    app = new Y.App({
        transitions: true,
        viewContainer: '#content',
        views: {
            contactlist: {
                type: 'ContactListView'
            },
            contact: {
                type: 'ContactView',
                parent: 'contactlist'
            }
        },
        routes: [{
            path: '/fe/ContactApp/',
            callback: function () {
                this.showView('contactlist', {
                    model: myContactList
                });
            }
        }, {
            path: '/fe/ContactApp/contact/:id',
            callback: function (request) {
                var contact = myContactList.getByID(request.params.id);
                if (!Y.Lang.isUndefined(contact)) {
                    this.showView('contact', {
                        model: contact
                    });
                }
            }
        }]
    });

    app.navigate('/fe/ContactApp/');

});
