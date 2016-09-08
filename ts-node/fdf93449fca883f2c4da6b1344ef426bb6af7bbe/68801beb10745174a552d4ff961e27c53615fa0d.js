"use strict";
var globals_1 = require('protractor/globals');
var NgrxDemoPage = (function () {
    function NgrxDemoPage() {
    }
    NgrxDemoPage.prototype.navigateTo = function () {
        return globals_1.browser.get('/');
    };
    NgrxDemoPage.prototype.getParagraphText = function () {
        return globals_1.element(globals_1.by.css('app-root h1')).getText();
    };
    return NgrxDemoPage;
}());
exports.NgrxDemoPage = NgrxDemoPage;
//# sourceMappingURL=/Users/duncanhunter/code/ngrx-demo/ts-node/fdf93449fca883f2c4da6b1344ef426bb6af7bbe/68801beb10745174a552d4ff961e27c53615fa0d.js.map