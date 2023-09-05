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
import { finger_printService } from 'app/services/finger_print/finger_print.service'; //_splitter_
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'; //_splitter_
import { agency_services } from 'app/sd-services/agency_services'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-biometricDialog',
  templateUrl: './biometricDialog.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class biometricDialogComponent {
  page: any = { dep: {} };
  constructor(
    private __page_injector__: Injector,
    private sdService: SDBaseService,
    public __serviceInvoker__: __NEU_ServiceInvokerService__
  ) {
    this.__page_injector__.get(SDPageCommonService).addPageDefaults(this.page);
    this.registerListeners();
    //appendnew_element_inject
  }

  ngOnInit() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    {
      this.sd_Li2yKVaanZCfi1dw(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_Li2yKVaanZCfi1dw(bh) {
    try {
      bh = this.sd_GdclFTnlnWrQjqTI(bh);
      //appendnew_next_sd_Li2yKVaanZCfi1dw
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Li2yKVaanZCfi1dw');
    }
  }

  closeBiometricDialog(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};

      bh = this.sd_zIbcoQ6Grr9Tq6xO(bh);
      //appendnew_next_closeBiometricDialog
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_gHV2G0oQUG9bAenr');
    }
  }

  biometricAccept(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};

      bh = this.sd_aSbyjdiDTwr2uWt3(bh);
      //appendnew_next_biometricAccept
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_IOB4ulaUWm0EuWmF');
    }
  }

  //appendnew_flow_biometricDialogComponent_start

  sd_GdclFTnlnWrQjqTI(bh) {
    try {
      bh = this.fingerPrintService(bh);
      //appendnew_next_sd_GdclFTnlnWrQjqTI
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_GdclFTnlnWrQjqTI');
    }
  }

  fingerPrintService(bh) {
    try {
      this.page.fpService = this.__page_injector__.get(finger_printService);

      //appendnew_next_fingerPrintService
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_HL8iqSmGJi56RI5V');
    }
  }

  sd_zIbcoQ6Grr9Tq6xO(bh) {
    try {
      const _dialogRef = this.__page_injector__.get(MatDialogRef);
      _dialogRef.close('Done');

      //appendnew_next_sd_zIbcoQ6Grr9Tq6xO
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_zIbcoQ6Grr9Tq6xO');
    }
  }

  sd_aSbyjdiDTwr2uWt3(bh) {
    try {
      bh.responseApi = this.__page_injector__.get(MAT_DIALOG_DATA);

      bh = this.sd_JdDi0nA2KRTMT8AE(bh);
      //appendnew_next_sd_aSbyjdiDTwr2uWt3
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_aSbyjdiDTwr2uWt3');
    }
  }

  sd_JdDi0nA2KRTMT8AE(bh) {
    try {
      const page = this.page;
      let { username, biometric_flag } = bh.responseApi[0];

      bh.bodyParams = {
        username,
        biometric_flag: true,
      };

      bh = this.sd_AQwu7DVwpsDjuAed(bh);
      //appendnew_next_sd_JdDi0nA2KRTMT8AE
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_JdDi0nA2KRTMT8AE');
    }
  }

  async sd_AQwu7DVwpsDjuAed(bh) {
    try {
      const agency_servicesInstance: agency_services =
        this.__page_injector__.get(agency_services);

      let outputVariables = await agency_servicesInstance.agencyUpdate(
        bh.bodyParams
      );

      bh = this.sd_zIbcoQ6Grr9Tq6xO(bh);
      bh = this.authWithFingerPrint(bh);
      //appendnew_next_sd_AQwu7DVwpsDjuAed
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_AQwu7DVwpsDjuAed');
    }
  }

  authWithFingerPrint(bh) {
    try {
      const page = this.page;
      page.fpService
        .authenticateFingerprint()
        .then(() => {
          page.loginError = 'bio succefull!';
          // todo: go to dashboard!
        })
        .catch((error) => {
          alert('Fingerprint authentication failed: ' + error);
        });

      //appendnew_next_authWithFingerPrint
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_fl6IyeuMVELAniZx');
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
  //appendnew_flow_biometricDialogComponent_Catch
}
