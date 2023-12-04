"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EducationVh1Module = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const education_vh1_service_1 = require("./education-vh1.service");
const education_vh1_entity_1 = require("./entities/education-vh1.entity");
let EducationVh1Module = class EducationVh1Module {
};
EducationVh1Module = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([education_vh1_entity_1.EducationVh1Entity])],
        providers: [education_vh1_service_1.EducationVh1Service],
        exports: [education_vh1_service_1.EducationVh1Service]
    })
], EducationVh1Module);
exports.EducationVh1Module = EducationVh1Module;
//# sourceMappingURL=education-vh1.module.js.map