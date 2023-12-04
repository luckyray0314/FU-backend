"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OtherInterventionsModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const other_interventions_entity_1 = require("./entities/other-interventions.entity");
const other_interventions_service_1 = require("./other-interventions.service");
let OtherInterventionsModule = class OtherInterventionsModule {
};
OtherInterventionsModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([other_interventions_entity_1.OtherInterventionsEntity])],
        providers: [other_interventions_service_1.OtherInterventionsService],
        exports: [other_interventions_service_1.OtherInterventionsService]
    })
], OtherInterventionsModule);
exports.OtherInterventionsModule = OtherInterventionsModule;
//# sourceMappingURL=other-interventions.module.js.map