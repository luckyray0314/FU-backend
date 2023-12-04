"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SelectedEmploymentVh2Module = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const selected_employment_vh2_entity_1 = require("./entities/selected-employment-vh2.entity");
const selected_employment_vh2_service_1 = require("./selected-employment-vh2.service");
let SelectedEmploymentVh2Module = class SelectedEmploymentVh2Module {
};
SelectedEmploymentVh2Module = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([selected_employment_vh2_entity_1.SelectedEmploymentVh2Entity])],
        providers: [selected_employment_vh2_service_1.SelectedEmploymentVh2Service],
        exports: [selected_employment_vh2_service_1.SelectedEmploymentVh2Service]
    })
], SelectedEmploymentVh2Module);
exports.SelectedEmploymentVh2Module = SelectedEmploymentVh2Module;
//# sourceMappingURL=selected-employment-vh2.module.js.map