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
exports.DocxBufferDto = exports.BackgroundDataDto = exports.BackgroundMetadataDto = exports.BackgroundSurveyBasicDataDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const country_list_1 = require("country-list");
const countryNames = (0, country_list_1.getNames)();
class BackgroundSurveyBasicDataDto {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Array)
], BackgroundSurveyBasicDataDto.prototype, "genderEntities", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Array)
], BackgroundSurveyBasicDataDto.prototype, "educationVh1Entities", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Array)
], BackgroundSurveyBasicDataDto.prototype, "educationVh2Entities", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Array)
], BackgroundSurveyBasicDataDto.prototype, "employmentVh1Entities", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Array)
], BackgroundSurveyBasicDataDto.prototype, "employmentVh2Entities", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Array)
], BackgroundSurveyBasicDataDto.prototype, "establishedDiagnosesEntities", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Array)
], BackgroundSurveyBasicDataDto.prototype, "familyConstellationEntities", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Array)
], BackgroundSurveyBasicDataDto.prototype, "interpreterRequiredEntities", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Array)
], BackgroundSurveyBasicDataDto.prototype, "otherInterventionsEntities", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Array)
], BackgroundSurveyBasicDataDto.prototype, "previousInterventionEntities", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Array)
], BackgroundSurveyBasicDataDto.prototype, "problemAreaEntities", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Array)
], BackgroundSurveyBasicDataDto.prototype, "reasonForUpdateEntities", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Array)
], BackgroundSurveyBasicDataDto.prototype, "schoolUniformEntities", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Array)
], BackgroundSurveyBasicDataDto.prototype, "typeOfEffortEntities", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Array)
], BackgroundSurveyBasicDataDto.prototype, "whoParticipatesEntities", void 0);
exports.BackgroundSurveyBasicDataDto = BackgroundSurveyBasicDataDto;
class BackgroundMetadataDto {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], BackgroundMetadataDto.prototype, "codeNumber", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], BackgroundMetadataDto.prototype, "date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.Min)(0),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], BackgroundMetadataDto.prototype, "yearOfBirth", void 0);
exports.BackgroundMetadataDto = BackgroundMetadataDto;
class BackgroundDataDto {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], BackgroundDataDto.prototype, "codeNumber", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], BackgroundDataDto.prototype, "date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.Min)(0),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], BackgroundDataDto.prototype, "yearOfBirth", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsIn)(countryNames),
    __metadata("design:type", String)
], BackgroundDataDto.prototype, "country", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: () => ({}) }),
    (0, class_validator_1.IsObject)(),
    __metadata("design:type", Object)
], BackgroundDataDto.prototype, "formDataByEntityName", void 0);
exports.BackgroundDataDto = BackgroundDataDto;
class DocxBufferDto {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], DocxBufferDto.prototype, "codeNumber", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsIn)([0, 1, 2, 3, 4, 5, 6]),
    __metadata("design:type", Number)
], DocxBufferDto.prototype, "occasion", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], DocxBufferDto.prototype, "appDomain", void 0);
exports.DocxBufferDto = DocxBufferDto;
//# sourceMappingURL=background-data.dto.js.map