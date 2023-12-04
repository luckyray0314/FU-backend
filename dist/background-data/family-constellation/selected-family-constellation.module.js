"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SelectedFamilyConstellationModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const selected_family_constellation_entity_1 = require("./entities/selected-family-constellation.entity");
const selected_family_constellation_service_1 = require("./selected-family-constellation.service");
let SelectedFamilyConstellationModule = class SelectedFamilyConstellationModule {
};
SelectedFamilyConstellationModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([selected_family_constellation_entity_1.SelectedFamilyConstellationEntity])],
        providers: [selected_family_constellation_service_1.SelectedFamilyConstellationService],
        exports: [selected_family_constellation_service_1.SelectedFamilyConstellationService]
    })
], SelectedFamilyConstellationModule);
exports.SelectedFamilyConstellationModule = SelectedFamilyConstellationModule;
//# sourceMappingURL=selected-family-constellation.module.js.map