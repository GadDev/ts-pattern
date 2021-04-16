"use strict";
var ComputerA = /** @class */ (function () {
    function ComputerA() {
        this.description = 'Computer A';
        this.price = 2000;
    }
    ComputerA.prototype.cost = function () {
        return this.price;
    };
    return ComputerA;
}());
var ComputerB = /** @class */ (function () {
    function ComputerB() {
        this.description = 'Computer B';
        this.price = 3000;
    }
    ComputerB.prototype.cost = function () {
        return this.price;
    };
    return ComputerB;
}());
