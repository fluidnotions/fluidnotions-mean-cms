import { ConfigureOptions } from 'ng4-configure/ng4-configure';

export class ConfigOptions extends ConfigureOptions {

    ConfigurationURL: string = window["fnconfig"] || 'assets/config.json';
    AppVersion: string = '0.0.1';
    BustCache: boolean = false
}