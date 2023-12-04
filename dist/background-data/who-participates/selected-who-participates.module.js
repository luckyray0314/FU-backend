"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SelectedWhoParticipatesModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const selected_who_participates_entity_1 = require("./entities/selected-who-participates.entity");
const selected_who_participates_service_1 = require("./selected-who-participates.service");
let SelectedWhoParticipatesModule = class SelectedWhoParticipatesModule {
};
SelectedWhoParticipatesModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([selected_who_participates_entity_1.SelectedWhoParticipatesEntity])],
        providers: [selected_who_participates_service_1.SelectedWhoParticipatesService],
        exports: [selected_who_participates_service_1.SelectedWhoParticipatesService]
    })
], SelectedWhoParticipatesModule);
exports.SelectedWhoParticipatesModule = SelectedWhoParticipatesModule;
//# sourceMappingURL=selected-who-participates.module.js.map