import { InjectionToken } from "@angular/core";
import { AppConfig } from "./appconfig.interface";
import { enviroment } from "src/enviroments/enviroment.prod";

export const APP_SERVICE_CONFIG = new InjectionToken<AppConfig>('app.config');

export const APP_CONFIG:AppConfig={
    apiEndoint:enviroment.apiEndpoint
}
