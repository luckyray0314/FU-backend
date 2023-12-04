"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SelectedFamilyConstellationRepository = void 0;
const typeorm_1 = require("typeorm");
const selected_family_constellation_entity_1 = require("./entities/selected-family-constellation.entity");
let SelectedFamilyConstellationRepository = class SelectedFamilyConstellationRepository extends typeorm_1.Repository {
};
SelectedFamilyConstellationRepository = __decorate([
    (0, typeorm_1.EntityRepository)(selected_family_constellation_entity_1.SelectedFamilyConstellationEntity)
], SelectedFamilyConstellationRepository);
exports.SelectedFamilyConstellationRepository = SelectedFamilyConstellationRepository;
//# sourceMappingURL=selected-family-constellation.repository.js.map