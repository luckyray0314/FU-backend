"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BackgroundMetadataModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const background_metadata_controller_1 = require("./background-metadata.controller");
const background_metadata_entity_1 = require("./background-metadata.entity");
const background_metadata_service_1 = require("./background-metadata.service");
let BackgroundMetadataModule = class BackgroundMetadataModule {
};
BackgroundMetadataModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([background_metadata_entity_1.BackgroundMetadataEntity])],
        providers: [background_metadata_service_1.BackgroundMetadataService],
        controllers: [background_metadata_controller_1.BackgroundMetadataController],
        exports: [background_metadata_service_1.BackgroundMetadataService],
    })
], BackgroundMetadataModule);
exports.BackgroundMetadataModule = BackgroundMetadataModule;
//# sourceMappingURL=background-metadata.module.js.map