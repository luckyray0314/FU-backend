"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SelectedTypeOfEffortModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const selected_type_of_effort_entity_1 = require("./entities/selected-type-of-effort.entity");
const selected_type_of_effort_service_1 = require("./selected-type-of-effort.service");
let SelectedTypeOfEffortModule = class SelectedTypeOfEffortModule {
};
SelectedTypeOfEffortModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([selected_type_of_effort_entity_1.SelectedTypeOfEffortEntity])],
        providers: [selected_type_of_effort_service_1.SelectedTypeOfEffortService],
        exports: [selected_type_of_effort_service_1.SelectedTypeOfEffortService]
    })
], SelectedTypeOfEffortModule);
exports.SelectedTypeOfEffortModule = SelectedTypeOfEffortModule;
//# sourceMappingURL=selected-type-of-effort.module.js.map