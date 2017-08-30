/// <reference path="lib/backbone.js" />
/// <reference path="lib/jquery-1.10.2.js" />
/// <reference path="lib/underscore.js" />
/// <reference path="lib/model.js" />

$(function () {
    BookView = Backbone.View.extend({
        template: _.template($('#book-template').html()),

        initialize: function () {
            this.listenTo(this.model, 'change', this.render);
            this.listenTo(this.model, 'destroy', this.remove);
        },

        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        }
    });
});