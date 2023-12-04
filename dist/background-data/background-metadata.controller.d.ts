import { BackgroundMetadataDto } from './background-data.dto';
import { BackgroundMetadataService } from './background-metadata.service';
export declare class BackgroundMetadataController {
    service: BackgroundMetadataService;
    constructor(service: BackgroundMetadataService);
    metadata(): Promise<BackgroundMetadataDto[]>;
}
