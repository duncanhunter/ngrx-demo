"use strict";
var app_po_1 = require('./app.po');
describe('ngrx-demo App', function () {
    var page;
    beforeEach(function () {
        page = new app_po_1.NgrxDemoPage();
    });
    it('should display message saying app works', function () {
        page.navigateTo();
        expect(page.getParagraphText()).toEqual('app works!');
    });
});
//# sourceMappingURL=/Users/duncanhunter/code/ngrx-demo/ts-node/fdf93449fca883f2c4da6b1344ef426bb6af7bbe/f6eeb6a079bd500b767b8563122abb3d77fe25b8.js.map