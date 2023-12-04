"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EstablishedDiagnosesController = void 0;
const common_1 = require("@nestjs/common");
const crud_1 = require("@nestjsx/crud");
const established_diagnoses_entity_1 = require("./entities/established-diagnoses.entity");
const established_diagnoses_service_1 = require("./established-diagnoses.service");
let EstablishedDiagnosesController = class EstablishedDiagnosesController {
    constructor(service) {
        this.service = service;
    }
};
EstablishedDiagnosesController = __decorate([
    (0, crud_1.Crud)({
        model: {
            type: established_diagnoses_entity_1.EstablishedDiagnosesEntity
        },
        routes: {
            only: ["getManyBase"]
        }
    }),
    (0, common_1.Controller)('established-diagnoses'),
    __metadata("design:paramtypes", [established_diagnoses_service_1.EstablishedDiagnosesService])
], EstablishedDiagnosesController);
exports.EstablishedDiagnosesController = EstablishedDiagnosesController;
//# sourceMappingURL=established-diagnoses.controller.js.map