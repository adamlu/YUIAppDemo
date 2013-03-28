YUI.add('contact-list', function (Y) {

    Y.ContactList = Y.Base.create('contactList', Y.ModelList, [], {

        model: Y.ContactModel,

        getByID: function (ID) {
            var filteredList = this.filter(function (item) {
                return item.get('id') == ID;
            });
            if (filteredList.length !== 0) {
                return filteredList[0];
            }
        }

    });

}, '0.1', {requires: ['model-list', 'contact']});
