"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeOfEffortModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const type_of_effort_entity_1 = require("./entities/type-of-effort.entity");
const type_of_effort_service_1 = require("./type-of-effort.service");
let TypeOfEffortModule = class TypeOfEffortModule {
};
TypeOfEffortModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([type_of_effort_entity_1.TypeOfEffortEntity])],
        providers: [type_of_effort_service_1.TypeOfEffortService],
        exports: [type_of_effort_service_1.TypeOfEffortService]
    })
], TypeOfEffortModule);
exports.TypeOfEffortModule = TypeOfEffortModule;
//# sourceMappingURL=type-of-effort.module.js.map