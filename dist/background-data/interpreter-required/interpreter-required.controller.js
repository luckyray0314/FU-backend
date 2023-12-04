"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InterpreterRequiredController = void 0;
const common_1 = require("@nestjs/common");
const crud_1 = require("@nestjsx/crud");
const interpreter_required_entity_1 = require("./entities/interpreter-required.entity");
const interpreter_required_service_1 = require("./interpreter-required.service");
let InterpreterRequiredController = class InterpreterRequiredController {
    constructor(service) {
        this.service = service;
    }
};
InterpreterRequiredController = __decorate([
    (0, crud_1.Crud)({
        model: {
            type: interpreter_required_entity_1.InterpreterRequiredEntity
        },
        routes: {
            only: ["getManyBase"]
        }
    }),
    (0, common_1.Controller)('interpreter-required'),
    __metadata("design:paramtypes", [interpreter_required_service_1.InterpreterRequiredService])
], InterpreterRequiredController);
exports.InterpreterRequiredController = InterpreterRequiredController;
//# sourceMappingURL=interpreter-required.controller.js.map