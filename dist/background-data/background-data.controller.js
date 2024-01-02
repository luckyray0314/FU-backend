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
exports.BackgroundDataController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const jwt_auth_guard_1 = require("../auth/guards/jwt-auth.guard");
const session_auth_guard_1 = require("../auth/guards/session-auth.guard");
const background_data_dto_1 = require("./background-data.dto");
const background_data_service_1 = require("./background-data.service");
let BackgroundDataController = class BackgroundDataController {
    constructor(service) {
        this.service = service;
    }
    async basicData(req) {
        return await this.service.basicData();
    }
    async create(payload, req) {
        return await this.service.create(payload);
    }
    async get(codeNumber) {
        return await this.service.get(codeNumber);
    }
    async getCaseList() {
        return await this.service.getCaseList();
    }
    async downloadDocx(payload, res) {
        const destPath = await this.service.downloadDocx(payload.codeNumber, payload.occasion, payload.appDomain, payload.childUri, payload.firstGuardianUri, payload.secondGuardianUri, payload.importantEventsUri);
        return res.download(destPath);
    }
};
__decorate([
    (0, common_1.Get)('/basicData'),
    (0, swagger_1.ApiOkResponse)({ type: background_data_dto_1.BackgroundSurveyBasicDataDto }),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], BackgroundDataController.prototype, "basicData", null);
__decorate([
    (0, common_1.Post)('create'),
    (0, swagger_1.ApiOkResponse)({ type: () => Boolean }),
    (0, swagger_1.ApiBody)({ type: background_data_dto_1.BackgroundDataDto }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [background_data_dto_1.BackgroundDataDto, Object]),
    __metadata("design:returntype", Promise)
], BackgroundDataController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('/get/:codeNumber'),
    (0, swagger_1.ApiOkResponse)({ type: background_data_dto_1.BackgroundDataDto }),
    __param(0, (0, common_1.Param)('codeNumber')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BackgroundDataController.prototype, "get", null);
__decorate([
    (0, common_1.Get)('/getCaseList'),
    (0, swagger_1.ApiOkResponse)({ type: (Array) }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BackgroundDataController.prototype, "getCaseList", null);
__decorate([
    (0, common_1.Post)('/download-docx'),
    (0, swagger_1.ApiBody)({ type: () => background_data_dto_1.DocxBufferDto }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [background_data_dto_1.DocxBufferDto, Object]),
    __metadata("design:returntype", Promise)
], BackgroundDataController.prototype, "downloadDocx", null);
BackgroundDataController = __decorate([
    (0, swagger_1.ApiTags)('Background Data Survey Management'),
    (0, common_1.UseGuards)(session_auth_guard_1.SessionAuthGuard, jwt_auth_guard_1.JWTAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Controller)('background-data'),
    __metadata("design:paramtypes", [background_data_service_1.BackgroundDataService])
], BackgroundDataController);
exports.BackgroundDataController = BackgroundDataController;
//# sourceMappingURL=background-data.controller.js.map