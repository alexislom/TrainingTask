/// <reference path="/lib/backbone.js" />
/// <reference path="/lib/jquery-1.10.2.js" />
/// <reference path="/lib/underscore.js" />
$(function () {

    booksList = new ItemSet();

    booksList.fetch({ data: { page: 'no' } });

    var app = new AppView({ model: booksList });
    app.render();
});