import { Response } from 'express';
import { EstimatesDto } from 'src/score/dto/estimates.dto';
import { BackgroundDataDto, BackgroundSurveyBasicDataDto, DocxBufferDto } from './background-data.dto';
import { BackgroundDataService } from './background-data.service';
export declare class BackgroundDataController {
    service: BackgroundDataService;
    constructor(service: BackgroundDataService);
    basicData(req: any): Promise<BackgroundSurveyBasicDataDto>;
    create(payload: BackgroundDataDto, req: any): Promise<boolean>;
    get(codeNumber: string): Promise<BackgroundDataDto>;
    getCaseList(): Promise<EstimatesDto[]>;
    downloadDocx(payload: DocxBufferDto, res: Response): Promise<void>;
}
