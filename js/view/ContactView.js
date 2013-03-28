YUI.add('contact-view', function (Y) {

    Y.ContactView = Y.Base.create('contactView', Y.View, [], {

        events: {
            '#change': {
                click: function (e) {
                    this.get('model').setName(Y.one('#ipt').get('value'));
                }
            }
        },

        initializer: function () {
            this.get('model').after('change', this.render, this);
        },

        render: function () {
            var template = Y.one('#template_contact').getContent(),
                html = Y.Lang.sub(template, this.get('model').toJSON());
            this.get('container').setHTML(html);
        }

    });

}, '0.1', {requires: ['view', 'contact']});
