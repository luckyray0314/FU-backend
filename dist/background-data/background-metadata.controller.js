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
exports.BackgroundMetadataController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const jwt_auth_guard_1 = require("../auth/guards/jwt-auth.guard");
const session_auth_guard_1 = require("../auth/guards/session-auth.guard");
const background_metadata_service_1 = require("./background-metadata.service");
let BackgroundMetadataController = class BackgroundMetadataController {
    constructor(service) {
        this.service = service;
    }
    async metadata() {
        return await this.service.find();
    }
};
__decorate([
    (0, common_1.Get)('/metadata'),
    (0, swagger_1.ApiOkResponse)({ type: (Array) }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BackgroundMetadataController.prototype, "metadata", null);
BackgroundMetadataController = __decorate([
    (0, swagger_1.ApiTags)('Background Data Survey Management'),
    (0, common_1.UseGuards)(session_auth_guard_1.SessionAuthGuard, jwt_auth_guard_1.JWTAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Controller)('background-metadata'),
    __metadata("design:paramtypes", [background_metadata_service_1.BackgroundMetadataService])
], BackgroundMetadataController);
exports.BackgroundMetadataController = BackgroundMetadataController;
//# sourceMappingURL=background-metadata.controller.js.map