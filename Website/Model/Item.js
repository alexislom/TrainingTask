/// <reference path="lib/backbone.js" />
/// <reference path="lib/jquery-1.10.2.js" />
/// <reference path="lib/underscore.js" />

$(function () {
    Item = Backbone.Model.extend({
        defaults: function () {
            return {
                id: -1,
                title: null,
                description: null
            }
        }
    });

    ItemSet = Backbone.Collection.extend({
        url: "http://localhost:54422/api/Books/",
        model: Item
    });
});