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
exports.SchoolUniformController = void 0;
const common_1 = require("@nestjs/common");
const crud_1 = require("@nestjsx/crud");
const school_uniform_entity_1 = require("./entities/school-uniform.entity");
const school_uniform_service_1 = require("./school-uniform.service");
let SchoolUniformController = class SchoolUniformController {
    constructor(service) {
        this.service = service;
    }
};
SchoolUniformController = __decorate([
    (0, crud_1.Crud)({
        model: {
            type: school_uniform_entity_1.SchoolUniformEntity
        },
        routes: {
            only: ["getManyBase"]
        }
    }),
    (0, common_1.Controller)('school-uniform'),
    __metadata("design:paramtypes", [school_uniform_service_1.SchoolUniformService])
], SchoolUniformController);
exports.SchoolUniformController = SchoolUniformController;
//# sourceMappingURL=school-uniform.controller.js.map