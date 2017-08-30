/// <reference path="lib/backbone.js" />
/// <reference path="lib/jquery-1.10.2.js" />
/// <reference path="lib/underscore.js" />

$(function () {

    Book = Item.extend({
        defaults: function () {
            return {
                mark: -1
            }
        }
    });
});