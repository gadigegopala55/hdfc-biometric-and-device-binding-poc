//append_imports_start

import * as sd_FIBZuy3HVJ6QWLZD from 'app/sd-services/agency_services'; //_splitter_
import { Injectable } from '@angular/core'; //_splitter_
//append_imports_end
@Injectable({ providedIn: 'root' })
export class __NEU_ServiceInvokerService__ {
  constructor(
    private sd_FIBZuy3HVJ6QWLZD: sd_FIBZuy3HVJ6QWLZD.agency_services
  ) {}
  invoke(
    injectedServiceId: string,
    methodName: string,
    ...methodArguments: any[]
  ) {
    return this[injectedServiceId][methodName](...methodArguments);
  }
}
