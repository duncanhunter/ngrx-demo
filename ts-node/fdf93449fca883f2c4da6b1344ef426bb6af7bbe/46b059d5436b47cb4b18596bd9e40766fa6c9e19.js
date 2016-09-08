"use strict";
var app_po_1 = require('./app.po');
describe('ngrx-demo App', function () {
    var page;
    beforeEach(function () {
        page = new app_po_1.NgrxDemoPage();
    });
    it('should display message saying app works', function () {
        page.navigateTo();
        expect(page.getParagraphText()).toEqual('app work!');
    });
});
//# sourceMappingURL=/Users/duncanhunter/code/ngrx-demo/ts-node/fdf93449fca883f2c4da6b1344ef426bb6af7bbe/46b059d5436b47cb4b18596bd9e40766fa6c9e19.js.map