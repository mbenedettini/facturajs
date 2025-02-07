export type WsServicesNames = 'wsfe' | 'wsfev1' | 'login';

export interface IParamsAuth {
    Auth?: {
        token?: string;
        sign?: string;
        Cuit: number;
    }
}

export interface IParamsFECompUltimoAutorizado extends IParamsAuth {
    params: {
        PtoVta: number;
        CbteTipo: number;
    }
}


export interface IParamsFECAESolicitar extends IParamsAuth {
    params: {
        FeCAEReq: {
            FeCabReq: {
                CantReg: number;
                PtoVta: number;
                CbteTipo: number;
            }
            FeDetReq: {
                FECAEDetRequest: {
                    DocTipo: number;
                    DocNro: number;
                    Concepto: number;
                    CbteDesde: number;
                    CbteHasta: number;
                    CbteFch: string;
                    ImpTotal: number;
                    ImpTotConc: number;
                    ImpNeto: number;
                    ImpOpEx: number;
                    ImpIva: number;
                    ImpTrib: number;
                    MonId: string;
                    MonCotiz: number;
                    // CanMisMonExt: number;
                    // CondicionIVAReceptorId: number;
                }
            }
        }

    }
}
