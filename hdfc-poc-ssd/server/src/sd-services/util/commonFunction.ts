let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { StatusCodes as httpStatusCodes } from 'http-status-codes'; //_splitter_
import * as cookieParser from 'cookie-parser'; //_splitter_
import { Readable } from 'stream'; //_splitter_
import { setInterval } from 'timers'; //_splitter_
import { Issuer, custom } from 'openid-client'; //_splitter_
import * as crypto from 'crypto'; //_splitter_
import * as url from 'url'; //_splitter_
import { SDBaseService } from '../../services/SDBaseService'; //_splitter_
import { Middleware } from '../../middleware/Middleware'; //_splitter_
import * as settings from '../../config/config'; //_splitter_
import log from '../../utils/Logger'; //_splitter_
import { TracerService } from '../../services/TracerService'; //_splitter_
//append_imports_end
export class commonFunction {
  private sdService = new SDBaseService();
  private tracerService = new TracerService();
  private app;
  private serviceBasePath: string;
  private generatedMiddlewares: Object;
  private serviceName: string;

  private globalTimers: any;
  private constructor(
    app,
    generatedeMiddlewares,
    routeCall,
    middlewareCall,
    globalTimers
  ) {
    this.serviceName = 'commonFunction';
    this.app = app;
    this.serviceBasePath = this.app.settings.base;
    this.generatedMiddlewares = generatedeMiddlewares;
    this.globalTimers = globalTimers;
  }

  static getInstance(
    app?,
    generatedeMiddlewares?,
    routeCall?,
    middlewareCall?,
    globalTimers?
  ) {
    if (!instance) {
      instance = new commonFunction(
        app,
        generatedeMiddlewares,
        routeCall,
        middlewareCall,
        globalTimers
      );
    }
    instance.mountCalls(routeCall, middlewareCall);
    return instance;
  }

  private mountCalls(routeCall, middlewareCall) {
    if (routeCall) {
      this.mountAllPaths();
      this.mountAllListeners();
    }
    if (middlewareCall) {
      this.generatedMiddlewares[this.serviceName] = {};
      this.mountAllMiddlewares();
      this.mountTimers();
    }
  }

  async mountAllListeners() {
    try {
      //append_listeners
    } catch (e) {
      throw e;
    }
  }

  async mountTimers() {
    try {
      //appendnew_flow_commonFunction_TimerStart
    } catch (e) {
      throw e;
    }
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: commonFunction');

    //appendnew_flow_commonFunction_MiddlewareStart
  }
  private mountAllPaths() {
    log.debug('mounting all paths for service :: commonFunction');
    //appendnew_flow_commonFunction_HttpIn
  }
  //   service flows_commonFunction

  async hashing(parentSpanInst, payload: any = undefined, ...others) {
    const spanInst = this.tracerService.createSpan('hashing', parentSpanInst);
    try {
      var bh: any = {
        input: {
          payload: payload,
        },
        local: {
          hashValue: undefined,
        },
      };
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_G1R6cRSXJLlbtSQm(bh, parentSpanInst);
      //appendnew_next_hashing
      return (
        // formatting output variables
        {
          input: {},
          local: {
            hashValue: bh.local.hashValue,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_NxRBzEv1JatjAGDe',
        spanInst,
        'hashing'
      );
    }
  }

  async generateAgencyId(parentSpanInst, ...others) {
    const spanInst = this.tracerService.createSpan(
      'generateAgencyId',
      parentSpanInst
    );
    try {
      var bh: any = {
        input: {},
        local: {
          agencyId: undefined,
        },
      };
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_KessahW3dmLbiiuH(bh, parentSpanInst);
      //appendnew_next_generateAgencyId
      return (
        // formatting output variables
        {
          input: {},
          local: {
            agencyId: bh.local.agencyId,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_SgcPIeY6HZOKTDqM',
        spanInst,
        'generateAgencyId'
      );
    }
  }

  async verifyHash(
    parentSpanInst,
    hashValue: any = undefined,
    originalValue: any = undefined,
    ...others
  ) {
    const spanInst = this.tracerService.createSpan(
      'verifyHash',
      parentSpanInst
    );
    try {
      var bh: any = {
        input: {
          hashValue: hashValue,
          originalValue: originalValue,
        },
        local: {
          resultValue: undefined,
        },
      };
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_7nUVUOo0AyUHyLOa(bh, parentSpanInst);
      //appendnew_next_verifyHash
      return (
        // formatting output variables
        {
          input: {},
          local: {
            resultValue: bh.local.resultValue,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_uqM4zfoVV7YifkNN',
        spanInst,
        'verifyHash'
      );
    }
  }

  //appendnew_flow_commonFunction_start

  async sd_G1R6cRSXJLlbtSQm(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_G1R6cRSXJLlbtSQm',
      parentSpanInst
    );
    try {
      let bcrypt = require('bcryptjs');

      bh.local.hashValue = new Promise((resolve, reject) => {
        bcrypt.hash(bh.input.payload, 8, (err, hash) => {
          if (err) {
            reject(err);
          } else {
            resolve(hash);
          }
        });
      });

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_G1R6cRSXJLlbtSQm
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_G1R6cRSXJLlbtSQm',
        spanInst,
        'sd_G1R6cRSXJLlbtSQm'
      );
    }
  }

  async sd_KessahW3dmLbiiuH(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_KessahW3dmLbiiuH',
      parentSpanInst
    );
    try {
      function generateRandomIdentifier() {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'; // Characters for the random prefix
        const prefixLength = 2; // Length of the random prefix
        const numLength = 3; // Minimum length of the dynamic number

        let prefix = '';
        for (let i = 0; i < prefixLength; i++) {
          const randomIndex = Math.floor(Math.random() * characters.length);
          prefix += characters.charAt(randomIndex);
        }

        const randomNum = Math.floor(
          Math.random() * Math.pow(10, numLength)
        ).toString();
        const paddedNum = randomNum.padStart(numLength, '0');
        const identifier = `${prefix}/${paddedNum}`;

        return identifier;
      }

      // Example usage:
      bh.local.agencyId = generateRandomIdentifier();

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_KessahW3dmLbiiuH
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_KessahW3dmLbiiuH',
        spanInst,
        'sd_KessahW3dmLbiiuH'
      );
    }
  }

  async sd_7nUVUOo0AyUHyLOa(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_7nUVUOo0AyUHyLOa',
      parentSpanInst
    );
    try {
      let bcrypt = require('bcryptjs');
      console.log(bh.input.originalValue, bh.input.hashValue);

      bh.local.resultValue = new Promise((resolve, reject) => {
        bcrypt
          .compare(bh.input.originalValue, bh.input.hashValue)
          .then((match) => {
            if (match) {
              resolve(match);
            } else {
              reject('Password is incorrect.');
            }
          })
          .catch((error) => {
            reject(error);
          });
      });
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_7nUVUOo0AyUHyLOa
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_7nUVUOo0AyUHyLOa',
        spanInst,
        'sd_7nUVUOo0AyUHyLOa'
      );
    }
  }

  //appendnew_node

  async errorHandler(bh, e, src, parentSpanInst?, functionName?) {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;
    bh.errorFunName = functionName;
    this.tracerService.sendData(parentSpanInst, bh, true);
    if (
      false
      /*appendnew_next_Catch*/
    ) {
      return bh;
    } else {
      if (bh.web.next) {
        bh.web.next(e);
      } else {
        throw e;
      }
    }
  }
  //appendnew_flow_commonFunction_Catch
}
