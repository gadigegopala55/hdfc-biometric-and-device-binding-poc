/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import {
  Component,
  Injector,
  Input,
  Output,
  EventEmitter,
} from '@angular/core'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { __NEU_ServiceInvokerService__ } from 'app/n-services/service-caller.service'; //_splitter_
import { local_data_storeService } from 'app/services/local_data_store/local_data_store.service'; //_splitter_
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms'; //_splitter_
import { finger_printService } from 'app/services/finger_print/finger_print.service'; //_splitter_
import { commonService } from 'app/services/common/common.service'; //_splitter_
import { agency_services } from 'app/sd-services/agency_services'; //_splitter_
import { MatDialog } from '@angular/material/dialog'; //_splitter_
import { otpVerifyDialogComponent } from 'app/components/dialogs/otpVerifyDialog.component'; //_splitter_
import { biometricDialogComponent } from 'app/components/dialogs/biometricDialog.component'; //_splitter_
import { Router } from '@angular/router'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-login',
  templateUrl: './login.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class loginComponent {
  page: any = { dep: {} };
  constructor(
    private __page_injector__: Injector,
    private sdService: SDBaseService,
    public __serviceInvoker__: __NEU_ServiceInvokerService__
  ) {
    this.__page_injector__.get(SDPageCommonService).addPageDefaults(this.page);
    this.registerListeners();
    this.page.dep.FormBuilder = this.__page_injector__.get(FormBuilder); //FormBuilder
    //appendnew_element_inject
  }

  ngOnInit() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    {
      this.sd_7iGTLHWasL4bU7ew(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_7iGTLHWasL4bU7ew(bh) {
    try {
      bh = this.sd_laLGNWFyPcUvk61C(bh);
      //appendnew_next_sd_7iGTLHWasL4bU7ew
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_7iGTLHWasL4bU7ew');
    }
  }

  checkDeviceIsBinded(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};

      bh = this.sd_zfJD8QhwwkHHfNy6(bh);
      //appendnew_next_checkDeviceIsBinded
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_uSuty290CN6tmWyi');
    }
  }

  directLogin(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};

      bh = this.sd_Ei7vs32AQbENPYAT(bh);
      //appendnew_next_directLogin
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_AKjiOUTVyBrVxuF1');
    }
  }

  agentLogin(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};

      bh = this.sd_9pLfdYL3hTfMBl4Z(bh);
      //appendnew_next_agentLogin
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_RwZBXw4ypk2DGMgS');
    }
  }

  onInputChange(event: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { event: event };
      bh.local = {};

      bh = this.sd_HERm5y2ypHYMsQsf(bh);
      //appendnew_next_onInputChange
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_RuhYwaNoIZ01WwUl');
    }
  }

  clearFileds(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};

      bh = this.clearAuthFileds(bh);
      //appendnew_next_clearFileds
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_rs0BBpsRamC2bH2A');
    }
  }

  navigateToDashboard(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};

      bh = this.dashboardRoute(bh);
      //appendnew_next_navigateToDashboard
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_dBC2QPeeN5GTLags');
    }
  }

  //appendnew_flow_loginComponent_start

  sd_laLGNWFyPcUvk61C(bh) {
    try {
      this.page.activeAgent = undefined;
      this.page.loginError = undefined;
      this.page.agentCodeValue = undefined;
      this.page.agentFileType = 'text';
      this.page.biometricFlag = undefined;
      this.page.activeDevice = undefined;
      this.page.deviceId = undefined;

      bh = this.localDataService(bh);
      bh = this.formDependency(bh);
      bh = this.fingerPrintService(bh);
      bh = this.commonService(bh);
      //appendnew_next_sd_laLGNWFyPcUvk61C
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_laLGNWFyPcUvk61C');
    }
  }

  localDataService(bh) {
    try {
      this.page.localDataStore = this.__page_injector__.get(
        local_data_storeService
      );

      //appendnew_next_localDataService
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_CMdOx2vMUwFSyQvw');
    }
  }

  formDependency(bh) {
    try {
      this.page.fb = this.__page_injector__.get(FormBuilder);

      bh = this.authFileds(bh);
      //appendnew_next_formDependency
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Gt7YwB1jbdkZMs07');
    }
  }

  authFileds(bh) {
    try {
      const page = this.page;
      {
        page.agentAuthForm = page.fb.group({
          agentCode: [''],
          password: [''],
        });
      }

      //appendnew_next_authFileds
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Z0xjL8ReDFV7I1JJ');
    }
  }

  fingerPrintService(bh) {
    try {
      this.page.fpService = this.__page_injector__.get(finger_printService);

      bh = this.initailCheckFingerPrint(bh);
      //appendnew_next_fingerPrintService
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_OQqccPNQhxH2LFDL');
    }
  }

  async initailCheckFingerPrint(bh) {
    try {
      const page = this.page;
      await page.fpService
        .fingerPrintIsAvailable()
        .then((response) => {
          page.biometricFlag = response;
        })
        .catch((error) => {
          page.biometricFlag = error;
        });

      // Debug finger print is avalibale or not?
      // console.log("biometricFlag:", page.biometricFlag);

      // call findDevice service here!
      let activeDevice = page.comService.findDevice();
      page.activeDevice =
        activeDevice === 'android' || activeDevice === 'ios' ? true : false;

      page.deviceId = page.comService.getDeviceId();

      bh = this.sd_AEeNRVU4gtv9Qs2c(bh);
      //appendnew_next_initailCheckFingerPrint
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_P4woxxvXVbKVKzMj');
    }
  }

  sd_AEeNRVU4gtv9Qs2c(bh) {
    try {
      let outputVariables = this.checkDeviceIsBinded();

      //appendnew_next_sd_AEeNRVU4gtv9Qs2c
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_AEeNRVU4gtv9Qs2c');
    }
  }

  commonService(bh) {
    try {
      this.page.comService = this.__page_injector__.get(commonService);

      //appendnew_next_commonService
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_9oB0qBXk49ogUxDk');
    }
  }

  sd_zfJD8QhwwkHHfNy6(bh) {
    try {
      const page = this.page; // todo: get deviceId here

      // bh.sendDeviceId = page.deviceId;

      // ** if deviceId and active device is true
      // ** then send deviceID

      if (page.deviceId && page.activeDevice) {
        bh.sendDeviceId = page.deviceId;
      } else {
        bh.sendDeviceId = 7;
      }

      bh = this.sd_eFklzhC48xXbFwUV(bh);
      //appendnew_next_sd_zfJD8QhwwkHHfNy6
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_zfJD8QhwwkHHfNy6');
    }
  }

  async sd_eFklzhC48xXbFwUV(bh) {
    try {
      const agency_servicesInstance: agency_services =
        this.__page_injector__.get(agency_services);

      let outputVariables = await agency_servicesInstance.checkDevice(
        bh.sendDeviceId
      );
      bh.responseData = outputVariables.local.responseApi;

      bh = this.sd_xbw842RvPDQRXOb1(bh);
      //appendnew_next_sd_eFklzhC48xXbFwUV
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_eFklzhC48xXbFwUV');
    }
  }

  sd_xbw842RvPDQRXOb1(bh) {
    try {
      const page = this.page;
      let responseData = bh.responseData;

      if (responseData.status != 200) {
        page.localDataStore.removeActiveAgent();
      }

      // -- for Debugs:
      else {
        let { agent_code, biometric_flag, username } = bh.responseData.data;
        let data = { agent_code, biometric_flag, username };

        // insert active agent in local data!
        page.localDataStore.addActiveAgent(data);
      }

      // active agent data store in localDB
      page.activeAgent = page.localDataStore.getActiveAgent();

      //appendnew_next_sd_xbw842RvPDQRXOb1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_xbw842RvPDQRXOb1');
    }
  }

  sd_Ei7vs32AQbENPYAT(bh) {
    try {
      const page = this.page;
      let username = page.activeAgent.username;
      let { password } = page.agentAuthForm.value;

      bh.bodyParams = {
        username,
        password,
      };

      bh = this.sd_ZoNWya1phLWApFST(bh);
      //appendnew_next_sd_Ei7vs32AQbENPYAT
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Ei7vs32AQbENPYAT');
    }
  }

  async sd_ZoNWya1phLWApFST(bh) {
    try {
      const agency_servicesInstance: agency_services =
        this.__page_injector__.get(agency_services);

      let outputVariables = await agency_servicesInstance.agentLogin(
        bh.bodyParams
      );
      bh.responseApi = outputVariables.local.responseApi;

      bh = this.sd_25FyU8We1OhHsaO1(bh);
      //appendnew_next_sd_ZoNWya1phLWApFST
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_ZoNWya1phLWApFST');
    }
  }

  sd_25FyU8We1OhHsaO1(bh) {
    try {
      const page = this.page; // console.log("responseApi:", bh.responseApi);

      if (bh.responseApi.status != 200) {
        page.loginError = bh.responseApi.msg;
      } else {
        page.loginError = 'Login Successfully';
      }

      bh = this.sd_PZVqQs89sLFgKU5M(bh);
      //appendnew_next_sd_25FyU8We1OhHsaO1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_25FyU8We1OhHsaO1');
    }
  }

  sd_PZVqQs89sLFgKU5M(bh) {
    try {
      let outputVariables = this.navigateToDashboard();

      //appendnew_next_sd_PZVqQs89sLFgKU5M
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_PZVqQs89sLFgKU5M');
    }
  }

  sd_9pLfdYL3hTfMBl4Z(bh) {
    try {
      const page = this.page;
      let { agentCode, password } = page.agentAuthForm.value;

      bh.bodyParams = { agent_code: agentCode, password };

      bh = this.sd_xxQ99QkLBkDysNSm(bh);
      //appendnew_next_sd_9pLfdYL3hTfMBl4Z
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_9pLfdYL3hTfMBl4Z');
    }
  }

  async sd_xxQ99QkLBkDysNSm(bh) {
    try {
      const agency_servicesInstance: agency_services =
        this.__page_injector__.get(agency_services);

      let outputVariables = await agency_servicesInstance.agentLogin(
        bh.bodyParams
      );
      bh.responseApi = outputVariables.local.responseApi;

      bh = this.checkResponseStatus(bh);
      //appendnew_next_sd_xxQ99QkLBkDysNSm
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_xxQ99QkLBkDysNSm');
    }
  }

  async checkResponseStatus(bh) {
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['neq'](
          bh.responseApi.status,
          200,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_93ZoyJvUuwxKP0qb(bh);
        otherwiseFlag = false;
      }
      if (
        this.sdService.operators['else'](
          otherwiseFlag,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.otpDialog(bh);
        otherwiseFlag = false;
      }

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_QgYADJtY45KIRw6b');
    }
  }

  sd_93ZoyJvUuwxKP0qb(bh) {
    try {
      const page = this.page;
      page.loginError = bh.responseApi.msg;

      //appendnew_next_sd_93ZoyJvUuwxKP0qb
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_93ZoyJvUuwxKP0qb');
    }
  }

  otpDialog(bh) {
    try {
      const otpVerifyDialogDialog = this.__page_injector__.get(MatDialog);
      const otpVerifyDialogDialogRef = otpVerifyDialogDialog.open(
        otpVerifyDialogComponent,
        {}
      );
      otpVerifyDialogDialogRef.afterClosed().subscribe((event) => {
        this.page.resultotp = event;
        this.sd_pnPijvGYKYsci7ey(bh);

        //appendnew_next_otpDialog;
      });

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_I9vzp02naeLKBZ5H');
    }
  }

  sd_pnPijvGYKYsci7ey(bh) {
    try {
      if (
        this.sdService.operators['true'](
          this.page.activeDevice,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_jL6CigQh6BoqfvIR(bh);
      } else if (
        this.sdService.operators['false'](
          this.page.activeDevice,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_TbSIL7C528uGGjRW(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_pnPijvGYKYsci7ey');
    }
  }

  sd_jL6CigQh6BoqfvIR(bh) {
    try {
      const page = this.page;
      let { username, agent_code, biometric_flag } = bh.responseApi.data[0];

      // insert deviceID here!
      bh.bodyParams = {
        username,
        device_id: page.deviceId,
        // device_id: 5
      };

      // show message on screen
      page.loginError = bh.responseApi.msg;

      // insert active agent in local data!
      let data = { agent_code, biometric_flag, username };
      page.localDataStore.addActiveAgent(data);

      // here checked finger print is exist or not.
      // if(!page.activeDevice || bh.responseApi.data[0].biometric_flag) {
      if (page.biometricFlag && bh.responseApi.data[0].biometric_flag) {
        page.biometricFlag = true;
      }

      bh = this.sd_dWgNKMiO8m9HWQ0n(bh);
      //appendnew_next_sd_jL6CigQh6BoqfvIR
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_jL6CigQh6BoqfvIR');
    }
  }

  async sd_dWgNKMiO8m9HWQ0n(bh) {
    try {
      const agency_servicesInstance: agency_services =
        this.__page_injector__.get(agency_services);

      let outputVariables = await agency_servicesInstance.agencyUpdate(
        bh.bodyParams
      );

      bh = this.sd_nxYxX97xFWnK4cCA(bh);
      //appendnew_next_sd_dWgNKMiO8m9HWQ0n
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_dWgNKMiO8m9HWQ0n');
    }
  }

  sd_nxYxX97xFWnK4cCA(bh) {
    try {
      if (
        this.sdService.operators['false'](
          this.page.biometricFlag,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.biometricDialogbox(bh);
      } else if (
        this.sdService.operators['true'](
          this.page.biometricFlag,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.authWithFingerPrint(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_nxYxX97xFWnK4cCA');
    }
  }

  biometricDialogbox(bh) {
    try {
      const biometricDialogDialog = this.__page_injector__.get(MatDialog);
      const biometricDialogDialogRef = biometricDialogDialog.open(
        biometricDialogComponent,
        { data: bh.responseApi.data }
      );
      biometricDialogDialogRef.afterClosed().subscribe((event) => {
        this.page = event;
        this.sd_PfrGbQnNht0cJaO8(bh);

        //appendnew_next_biometricDialogbox;
      });

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_lv8doz5QkmBKn0hQ');
    }
  }

  sd_PfrGbQnNht0cJaO8(bh) {
    try {
      let outputVariables = this.navigateToDashboard();

      //appendnew_next_sd_PfrGbQnNht0cJaO8
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_PfrGbQnNht0cJaO8');
    }
  }

  authWithFingerPrint(bh) {
    try {
      const page = this.page;
      page.fpService
        .authenticateFingerprint()
        .then(() => {
          page.loginError = 'bio succefull!';
        })
        .catch((error) => {
          alert('Fingerprint authentication failed: ' + error);
        });

      bh = this.sd_PfrGbQnNht0cJaO8(bh);
      //appendnew_next_authWithFingerPrint
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_b5OqQurtc0txRVoQ');
    }
  }

  sd_TbSIL7C528uGGjRW(bh) {
    try {
      const page = this.page; // show message on screen
      page.loginError = bh.responseApi.msg;

      bh = this.sd_PfrGbQnNht0cJaO8(bh);
      //appendnew_next_sd_TbSIL7C528uGGjRW
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_TbSIL7C528uGGjRW');
    }
  }

  sd_HERm5y2ypHYMsQsf(bh) {
    try {
      const page = this.page; // page.agentCodeValue = page.agentCodeValue;
      let txtLength = bh.input.event?.length;

      if (txtLength == 2) {
        page.agentCodeValue += '/';
        // page.agentFileType = 'Number';
      }

      //appendnew_next_sd_HERm5y2ypHYMsQsf
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_HERm5y2ypHYMsQsf');
    }
  }

  clearAuthFileds(bh) {
    try {
      const page = this.page;
      {
        page.agentAuthForm = page.fb.group({
          agentCode: [''],
          password: [''],
        });
      }

      //appendnew_next_clearAuthFileds
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_8tLpMsnFMUueHOER');
    }
  }

  async dashboardRoute(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/dashboard');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)]);

      //appendnew_next_dashboardRoute
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_9d026YISHJB1Qprp');
    }
  }

  //appendnew_node

  ngOnDestroy() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    this.__page_injector__.get(SDPageCommonService).deletePageFromMap(this);
  }

  errorHandler(bh, e, src) {
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
  //appendnew_flow_loginComponent_Catch
}
