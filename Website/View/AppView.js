/// <reference path="lib/backbone.js" />
/// <reference path="lib/jquery-1.10.2.js" />
/// <reference path="lib/underscore.js" />
/// <reference path="lib/model.js" />


$(function () {

    // Our overall **AppView** is the top-level piece of UI.
    AppView = Backbone.View.extend({

        // Instead of generating a new element, bind to the existing skeleton of
        // the App already present in the HTML.
        el: $("#app"),

        events: {
            "click #addBook": "addBook"
        },

        addBook: function () {
            var item = {
                title: this.newBookName.val(),
                description: this.newBookDescription.val()
            };

            booksList.create(item);

            this.newBookName.val('');
            this.newBookDescription.val('');
        },

        initialize: function () {
            this.newBookName = this.$("#bookName");
            this.newBookDescription = this.$("#bookDescription");

            this.listenTo(this.model, 'change', this.render);
            this.listenTo(this.model, 'add', this.render);
        },

        render: function () {
            $("#booksList").html("");
            if (this.model.length) {
                for (var i = 0; i < this.model.length; i++) {
                    var view = new BookView({ model: this.model.at(i) });
                    $("#booksList").append(view.render().el);
                }
            }
        }
    });
});