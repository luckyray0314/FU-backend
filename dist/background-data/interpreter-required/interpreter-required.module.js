"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InterpreterRequiredModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const interpreter_required_entity_1 = require("./entities/interpreter-required.entity");
const interpreter_required_service_1 = require("./interpreter-required.service");
let InterpreterRequiredModule = class InterpreterRequiredModule {
};
InterpreterRequiredModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([interpreter_required_entity_1.InterpreterRequiredEntity])],
        providers: [interpreter_required_service_1.InterpreterRequiredService],
        exports: [interpreter_required_service_1.InterpreterRequiredService]
    })
], InterpreterRequiredModule);
exports.InterpreterRequiredModule = InterpreterRequiredModule;
//# sourceMappingURL=interpreter-required.module.js.map