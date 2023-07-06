"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Calculator = void 0;
const Decorator_1 = require("./Decorator");
let Calculator = exports.Calculator = class Calculator {
    add(a, b) {
        if (typeof a !== 'number' || typeof b !== 'number') {
            throw new Error("Wrong input type!");
        }
        return a + b;
    }
    multiply(a, b) {
        if (typeof a !== "number" || typeof b !== "number") {
            throw new Error("Wrong input type!");
        }
        return a * b;
    }
};
exports.Calculator = Calculator = __decorate([
    (0, Decorator_1.catchError)()
], Calculator);
//# sourceMappingURL=Calculator.js.map