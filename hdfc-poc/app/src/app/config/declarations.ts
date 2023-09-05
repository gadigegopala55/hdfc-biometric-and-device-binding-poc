import { NeutrinosAuthGuardService } from 'neutrinos-oauth-client';
import { PageNotFoundComponent } from '../not-found.component';
import { LayoutComponent } from '../layout/layout.component';
import { ImgSrcDirective } from '../directives/imgSrc.directive';
import { APP_INITIALIZER } from '@angular/core';
import { NDataSourceService } from '../n-services/n-dataSorce.service';
import { environment } from '../../environments/environment';
import { NLocaleResource } from '../n-services/n-localeResources.service';
import { NAuthGuardService } from 'neutrinos-seed-services';
import { ArtImgSrcDirective } from '../directives/artImgSrc.directive';
import { localesService } from '../../../baseClasses/localesService';

window['neutrinos'] = {
  environments: environment,
};

//CORE_REFERENCE_IMPORTS
//CORE_REFERENCE_IMPORT-dashboardComponent
import { dashboardComponent } from '../components/pages/dashboard/dashboard.component';
//CORE_REFERENCE_IMPORT-commonService
import { commonService } from '../services/common/common.service';
//CORE_REFERENCE_IMPORT-finger_printService
import { finger_printService } from '../services/finger_print/finger_print.service';
//CORE_REFERENCE_IMPORT-local_data_storeService
import { local_data_storeService } from '../services/local_data_store/local_data_store.service';
//CORE_REFERENCE_IMPORT-agency_services
import { agency_services } from '../sd-services/agency_services';
//CORE_REFERENCE_IMPORT-otpVerifyDialogComponent
import { otpVerifyDialogComponent } from '../components/dialogs/otpVerifyDialog.component';
//CORE_REFERENCE_IMPORT-biometricDialogComponent
import { biometricDialogComponent } from '../components/dialogs/biometricDialog.component';
//CORE_REFERENCE_IMPORT-loginComponent
import { loginComponent } from '../components/pages/auth/login.component';

/**
 * Reads datasource object and injects the datasource object into window object
 * Injects the imported environment object into the window object
 *
 */
export function startupServiceFactory(startupService: NDataSourceService) {
  return () => {
    return new Promise((resolve, reject) => {
      startupService.getDataSource().then(() => {
        localesService.init().then(() => {
          resolve(null);
        });
      });
    });
  };
}

/**
 *bootstrap for @NgModule
 */
export const appBootstrap: any = [LayoutComponent];

/**
 *declarations for @NgModule
 */
export const appDeclarations = [
  ImgSrcDirective,
  LayoutComponent,
  PageNotFoundComponent,
  ArtImgSrcDirective,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-dashboardComponent
  dashboardComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-otpVerifyDialogComponent
  otpVerifyDialogComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-biometricDialogComponent
  biometricDialogComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-loginComponent
  loginComponent,
];

/**
 * provider for @NgModule
 */
export const appProviders = [
  NDataSourceService,
  NLocaleResource,
  {
    // Provider for APP_INITIALIZER
    provide: APP_INITIALIZER,
    useFactory: startupServiceFactory,
    deps: [NDataSourceService],
    multi: true,
  },
  NAuthGuardService,
  //CORE_REFERENCE_PUSH_TO_PRO_ARRAY
  //CORE_REFERENCE_PUSH_TO_PRO_ARRAY-commonService
  commonService,
  //CORE_REFERENCE_PUSH_TO_PRO_ARRAY-finger_printService
  finger_printService,
  //CORE_REFERENCE_PUSH_TO_PRO_ARRAY-local_data_storeService
  local_data_storeService,
  //CORE_REFERENCE_PUSH_TO_PRO_ARRAY-agency_services
  agency_services,
];

/**
 * Routes available for bApp
 */

// CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY_START
export const appRoutes = [
  { path: 'login', component: loginComponent },
  { path: 'dashboard', component: dashboardComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];
// CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY_END
