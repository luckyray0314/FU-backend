"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmploymentVh2Module = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const employment_vh2_service_1 = require("./employment-vh2.service");
const employment_vh2_entity_1 = require("./entities/employment-vh2.entity");
let EmploymentVh2Module = class EmploymentVh2Module {
};
EmploymentVh2Module = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([employment_vh2_entity_1.EmploymentVh2Entity])],
        providers: [employment_vh2_service_1.EmploymentVh2Service],
        exports: [employment_vh2_service_1.EmploymentVh2Service]
    })
], EmploymentVh2Module);
exports.EmploymentVh2Module = EmploymentVh2Module;
//# sourceMappingURL=employment-vh2.module.js.map