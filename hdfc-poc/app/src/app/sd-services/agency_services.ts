/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Injectable, Injector } from '@angular/core'; //_splitter_
import {
  Router,
  NavigationEnd,
  NavigationStart,
  Resolve,
  ActivatedRouteSnapshot,
} from '@angular/router'; //_splitter_
import { MatSnackBar } from '@angular/material/snack-bar'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
//append_imports_end

declare const window: any;
declare const cordova: any;

@Injectable({
  providedIn: 'root',
})
export class agency_services {
  constructor(
    private sdService: SDBaseService,
    private router: Router,
    private matSnackBar: MatSnackBar,
    private __service_injector__: Injector
  ) {
    this.registerListeners();
  }
  private registerListeners() {
    let bh = this.sdService.__constructDefault({});

    //append_listeners
  }

  //   service flows_agency_services

  async updateAgency(
    biometric_flag: any = undefined,
    device_id: any = undefined,
    ...others
  ) {
    try {
      var bh: any = {
        input: {
          biometric_flag: biometric_flag,
          device_id: device_id,
        },
        local: {},
      };
      bh = this.sdService.__constructDefault(bh);

      bh = await this.sd_f3Iqak2gpYVKTIJN(bh);
      //appendnew_next_updateAgency
      return (
        // formatting output variables
        {
          input: {},
          local: {},
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Dr0FhVt5vf81GLqP');
    }
  }

  async checkDevice(device_id: any = undefined, ...others) {
    try {
      var bh: any = {
        input: {
          device_id: device_id,
        },
        local: {
          responseApi: undefined,
        },
      };
      bh = this.sdService.__constructDefault(bh);

      bh = await this.sd_QTMByZO3l65H9iiy(bh);
      //appendnew_next_checkDevice
      return (
        // formatting output variables
        {
          input: {},
          local: {
            responseApi: bh.local.responseApi,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_YjqurYP3HtvTizKJ');
    }
  }

  async agentLogin(bodyParams: any = undefined, ...others) {
    try {
      var bh: any = {
        input: {
          bodyParams: bodyParams,
        },
        local: {
          responseApi: undefined,
        },
      };
      bh = this.sdService.__constructDefault(bh);

      bh = await this.sd_LYNYGTfC8QQ1IBgC(bh);
      //appendnew_next_agentLogin
      return (
        // formatting output variables
        {
          input: {},
          local: {
            responseApi: bh.local.responseApi,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_OOWShvT8HikI68M0');
    }
  }

  async agencyUpdate(bodyParams: any = undefined, ...others) {
    try {
      var bh: any = {
        input: {
          bodyParams: bodyParams,
        },
        local: {},
      };
      bh = this.sdService.__constructDefault(bh);

      bh = await this.sd_gtzMvkw0JMME9eux(bh);
      //appendnew_next_agencyUpdate
      return (
        // formatting output variables
        {
          input: {},
          local: {},
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_1Cu4uj22hsoQit7n');
    }
  }

  //appendnew_flow_agency_services_start

  async sd_f3Iqak2gpYVKTIJN(bh) {
    try {
      bh.ssdUrl = bh.system.environment.properties.ssdURL;

      bh = await this.sd_4Anx4N7wowNyc9eG(bh);
      //appendnew_next_sd_f3Iqak2gpYVKTIJN
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_f3Iqak2gpYVKTIJN');
    }
  }

  async sd_4Anx4N7wowNyc9eG(bh) {
    try {
      bh.apiRequest = `${bh.ssdUrl}agency-update`;

      bh = await this.sd_B6HSJXO0ll5qGbdi(bh);
      //appendnew_next_sd_4Anx4N7wowNyc9eG
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_4Anx4N7wowNyc9eG');
    }
  }

  async sd_B6HSJXO0ll5qGbdi(bh) {
    try {
      if (
        this.sdService.operators['nnull'](
          bh.input.device_id,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_KNrD42WrzlFQdM1S(bh);
      } else if (
        this.sdService.operators['null'](
          bh.input.device_id,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_jJsWm7khgcNFRdxh(bh);
      }

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_B6HSJXO0ll5qGbdi');
    }
  }

  async sd_KNrD42WrzlFQdM1S(bh) {
    try {
      bh.bodyParams = {};

      //appendnew_next_sd_KNrD42WrzlFQdM1S
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_KNrD42WrzlFQdM1S');
    }
  }

  async sd_jJsWm7khgcNFRdxh(bh) {
    try {
      if (
        this.sdService.operators['nnull'](
          bh.input.biometric_flag,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_lKRGjdAqFangRhuS(bh);
      } else if (
        this.sdService.operators['null'](
          bh.input.biometric_flag,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_26euH8Gw27u4RMV3(bh);
      }

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_jJsWm7khgcNFRdxh');
    }
  }

  async sd_lKRGjdAqFangRhuS(bh) {
    try {
      console.log('Biometric');

      //appendnew_next_sd_lKRGjdAqFangRhuS
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_lKRGjdAqFangRhuS');
    }
  }

  async sd_26euH8Gw27u4RMV3(bh) {
    try {
      console.log('Done:');

      //appendnew_next_sd_26euH8Gw27u4RMV3
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_26euH8Gw27u4RMV3');
    }
  }

  async sd_QTMByZO3l65H9iiy(bh) {
    try {
      bh.ssdUrl = bh.system.environment.properties.ssdURL;

      bh = await this.sd_iMmesSBBxtMCSpJN(bh);
      //appendnew_next_sd_QTMByZO3l65H9iiy
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_QTMByZO3l65H9iiy');
    }
  }

  async sd_iMmesSBBxtMCSpJN(bh) {
    try {
      // bh.apiRequest = `${bh.ssdUrl}check-device/${bh.input.device_id}`;
      bh.apiRequest = `${bh.ssdUrl}check-device/${bh.input.device_id}`;

      bh = await this.sd_WRgkJTG6pGC3YEjL(bh);
      //appendnew_next_sd_iMmesSBBxtMCSpJN
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_iMmesSBBxtMCSpJN');
    }
  }

  async sd_WRgkJTG6pGC3YEjL(bh) {
    try {
      let requestOptions = {
        url: bh.apiRequest,
        method: 'get',
        responseType: 'json',
        headers: {},
        params: {},
        body: undefined,
      };
      bh.local.responseApi = await this.sdService.nHttpRequest(requestOptions);

      //appendnew_next_sd_WRgkJTG6pGC3YEjL
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_WRgkJTG6pGC3YEjL');
    }
  }

  async sd_LYNYGTfC8QQ1IBgC(bh) {
    try {
      bh.ssdUrl = bh.system.environment.properties.ssdURL;

      bh = await this.loginHttpEndpoint(bh);
      //appendnew_next_sd_LYNYGTfC8QQ1IBgC
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_LYNYGTfC8QQ1IBgC');
    }
  }

  async loginHttpEndpoint(bh) {
    try {
      // console.log("bodyParams:", bh.input.bodyParams);

      bh.apiRequest = `${bh.ssdUrl}login`;

      bh = await this.loginHttpRequest(bh);
      //appendnew_next_loginHttpEndpoint
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_9KDyuNWG0xYgHOBJ');
    }
  }

  async loginHttpRequest(bh) {
    try {
      let requestOptions = {
        url: bh.apiRequest,
        method: 'post',
        responseType: 'json',
        headers: {},
        params: {},
        body: bh.input.bodyParams,
      };
      bh.local.responseApi = await this.sdService.nHttpRequest(requestOptions);

      //appendnew_next_loginHttpRequest
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_ZUmn3rbwH0WvYyc1');
    }
  }

  async sd_gtzMvkw0JMME9eux(bh) {
    try {
      bh.ssdUrl = bh.system.environment.properties.ssdURL;

      bh = await this.agencyUpdateHttpEndpoint(bh);
      //appendnew_next_sd_gtzMvkw0JMME9eux
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_gtzMvkw0JMME9eux');
    }
  }

  async agencyUpdateHttpEndpoint(bh) {
    try {
      // console.log("bodyParams:", bh.input.bodyParams);

      bh.apiRequest = `${bh.ssdUrl}agency-update`;

      bh = await this.agencyUpdateHttpRequest(bh);
      //appendnew_next_agencyUpdateHttpEndpoint
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_9dewsfq1yRhVwgO5');
    }
  }

  async agencyUpdateHttpRequest(bh) {
    try {
      let requestOptions = {
        url: bh.apiRequest,
        method: 'post',
        responseType: 'json',
        headers: {},
        params: {},
        body: bh.input.bodyParams,
      };
      bh.local.responseApi = await this.sdService.nHttpRequest(requestOptions);

      this.sd_pFAtxgcMFJkuLojK(bh);
      //appendnew_next_agencyUpdateHttpRequest
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_cCMee3ydHHbHoZge');
    }
  }

  async sd_pFAtxgcMFJkuLojK(bh) {
    try {
      console.log(new Date().toLocaleTimeString(), bh.local.responseApi);

      //appendnew_next_sd_pFAtxgcMFJkuLojK
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_pFAtxgcMFJkuLojK');
    }
  }

  //appendnew_node

  private async errorHandler(bh, e, src) {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;

    if (
      false
      /*appendnew_next_Catch*/
    ) {
      return bh;
    } else {
      throw e;
    }
  }
  //appendnew_flow_agency_services_Catch
}
