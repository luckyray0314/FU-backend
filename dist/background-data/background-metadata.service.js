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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BackgroundMetadataService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const crud_typeorm_1 = require("@nestjsx/crud-typeorm");
const typeorm_2 = require("typeorm");
const background_metadata_entity_1 = require("./background-metadata.entity");
let BackgroundMetadataService = class BackgroundMetadataService extends crud_typeorm_1.TypeOrmCrudService {
    constructor(repo) {
        super(repo);
    }
    async create(entity) {
        return this.repo.save(entity);
    }
    async update(entity) {
        return this.repo.update(entity.codeNumber, entity);
    }
    async findAll() {
        return this.repo
            .createQueryBuilder('background_metadata_entity')
            .select('background_metadata_entity.codeNumber', 'codeNumber')
            .addSelect('background_metadata_entity.date', 'date')
            .addSelect('background_metadata_entity.country', 'country')
            .orderBy('background_metadata_entity.date', 'DESC')
            .getRawMany();
    }
};
BackgroundMetadataService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(background_metadata_entity_1.BackgroundMetadataEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], BackgroundMetadataService);
exports.BackgroundMetadataService = BackgroundMetadataService;
//# sourceMappingURL=background-metadata.service.js.map