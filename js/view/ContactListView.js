YUI.add('contact-list-view', function (Y) {

    Y.ContactListView = Y.Base.create('contactListView', Y.View, [], {

        render: function () {
            var container = this.get('container'),
                renderedItems = '',
                templateList = Y.one('#template_list').getContent(),
                templateListItem = Y.one('#template_list_item').getContent();

            this.get('model').each(function (item) {
                renderedItems += Y.Lang.sub(templateListItem, item.toJSON());
            }, this);

            container.setHTML(Y.Lang.sub(templateList, {
                itemList: renderedItems
            }));
        }

    });

}, '0.1', {requires: ['view', 'contact-list']});
