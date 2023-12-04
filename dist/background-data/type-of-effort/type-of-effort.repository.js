"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeOfEffortRepository = void 0;
const typeorm_1 = require("typeorm");
const type_of_effort_entity_1 = require("./entities/type-of-effort.entity");
let TypeOfEffortRepository = class TypeOfEffortRepository extends typeorm_1.Repository {
};
TypeOfEffortRepository = __decorate([
    (0, typeorm_1.EntityRepository)(type_of_effort_entity_1.TypeOfEffortEntity)
], TypeOfEffortRepository);
exports.TypeOfEffortRepository = TypeOfEffortRepository;
//# sourceMappingURL=type-of-effort.repository.js.map