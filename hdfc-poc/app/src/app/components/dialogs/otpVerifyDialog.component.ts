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
import { MatDialogRef } from '@angular/material/dialog'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-otpVerifyDialog',
  templateUrl: './otpVerifyDialog.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class otpVerifyDialogComponent {
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
      this.sd_7qEMV3wW4O32GUd2(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_7qEMV3wW4O32GUd2(bh) {
    try {
      bh = this.sd_JqHKQ285ke6903Rb(bh);
      //appendnew_next_sd_7qEMV3wW4O32GUd2
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_7qEMV3wW4O32GUd2');
    }
  }

  onOtpChange(event: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { event: event };
      bh.local = {};

      bh = this.otpContent(bh);
      //appendnew_next_onOtpChange
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_EufW79Ci1RtKBWTG');
    }
  }

  closeDialog(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};

      bh = this.otpVerification(bh);
      //appendnew_next_closeDialog
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_7BqVinuuXaMB6osp');
    }
  }

  //appendnew_flow_otpVerifyDialogComponent_start

  sd_JqHKQ285ke6903Rb(bh) {
    try {
      this.page.otp = undefined;
      this.page.otpVerify = undefined;

      //appendnew_next_sd_JqHKQ285ke6903Rb
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_JqHKQ285ke6903Rb');
    }
  }

  otpContent(bh) {
    try {
      const page = this.page;
      console.log('otp:', bh.input.event);

      page.otp = bh.input.event;

      //appendnew_next_otpContent
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_C3bynsYVEXrZOtF7');
    }
  }

  otpVerification(bh) {
    try {
      const page = this.page;
      console.log('otp:', page.otp);

      bh = this.sd_1TJJulzbvWzBlJ5c(bh);
      //appendnew_next_otpVerification
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_akIjD4Q0whqDZuDC');
    }
  }

  sd_1TJJulzbvWzBlJ5c(bh) {
    try {
      const _dialogRef = this.__page_injector__.get(MatDialogRef);
      _dialogRef.close(this.page.otp);

      //appendnew_next_sd_1TJJulzbvWzBlJ5c
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_1TJJulzbvWzBlJ5c');
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
  //appendnew_flow_otpVerifyDialogComponent_Catch
}
