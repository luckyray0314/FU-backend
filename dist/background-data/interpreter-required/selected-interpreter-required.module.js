"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SelectedInterpreterRequiredModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const selected_interpreter_required_entity_1 = require("./entities/selected-interpreter-required.entity");
const selected_interpreter_required_service_1 = require("./selected-interpreter-required.service");
let SelectedInterpreterRequiredModule = class SelectedInterpreterRequiredModule {
};
SelectedInterpreterRequiredModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([selected_interpreter_required_entity_1.SelectedInterpreterRequiredEntity])],
        providers: [selected_interpreter_required_service_1.SelectedInterpreterRequiredService],
        exports: [selected_interpreter_required_service_1.SelectedInterpreterRequiredService]
    })
], SelectedInterpreterRequiredModule);
exports.SelectedInterpreterRequiredModule = SelectedInterpreterRequiredModule;
//# sourceMappingURL=selected-interpreter-required.module.js.map