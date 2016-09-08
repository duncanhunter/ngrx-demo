"use strict";
var app_po_1 = require('./app.po');
describe('ngrx-demo App', function () {
    var page;
    beforeEach(function () {
        page = new app_po_1.NgrxDemoPage();
    });
    it('should display message saying app work', function () {
        page.navigateTo();
        expect(page.getParagraphText()).toEqual('app work!');
    });
});
//# sourceMappingURL=/Users/duncanhunter/code/ngrx-demo/ts-node/fdf93449fca883f2c4da6b1344ef426bb6af7bbe/66ea38d59e3440f270bad3a049812072d4aad1a1.js.map