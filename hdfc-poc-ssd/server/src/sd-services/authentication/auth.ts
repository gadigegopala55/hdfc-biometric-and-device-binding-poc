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
import * as SSD_SERVICE_ID_sd_8m7T1Fz0hFKGTA3m from '../util/commonFunction'; //_splitter_
import { dmUtils } from '../../utils/ndefault-datamodel/find/dmUtils'; //_splitter_
import { GenericRDBMSOperations } from '../../utils/ndefault-sql/ExecuteSql/GenericRDBMSOperations'; //_splitter_
//append_imports_end
export class auth {
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
    this.serviceName = 'auth';
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
      instance = new auth(
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
      //appendnew_flow_auth_TimerStart
    } catch (e) {
      throw e;
    }
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: auth');

    //appendnew_flow_auth_MiddlewareStart
  }
  private mountAllPaths() {
    log.debug('mounting all paths for service :: auth');

    this.app['post'](
      `${this.serviceBasePath}/registration`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          let parentSpanInst = null;
          bh = await this.getHashPassword(bh, parentSpanInst);
          //appendnew_next_sd_s9uLgQETU1XSK90O
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_s9uLgQETU1XSK90O');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/login`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          let parentSpanInst = null;
          bh = await this.sd_ffmlYMVOVjMzh3lR(bh, parentSpanInst);
          //appendnew_next_sd_7huV8lI9DYKBrqcn
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_7huV8lI9DYKBrqcn');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['get'](
      `${this.serviceBasePath}/check-device/:device_id`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          let parentSpanInst = null;
          bh = await this.sd_wAYj0zYgD7oaU0pT(bh, parentSpanInst);
          //appendnew_next_sd_m7Fc7oKSGPpg56ds
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_m7Fc7oKSGPpg56ds');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/agency-update`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          let parentSpanInst = null;
          bh = await this.sd_VYjl32JjDN1w2ZrV(bh, parentSpanInst);
          //appendnew_next_sd_zcy9NzRqJRDUieQB
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_zcy9NzRqJRDUieQB');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_auth_HttpIn
  }
  //   service flows_auth

  //appendnew_flow_auth_start

  async getHashPassword(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'getHashPassword',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_8m7T1Fz0hFKGTA3mInstance: SSD_SERVICE_ID_sd_8m7T1Fz0hFKGTA3m.commonFunction =
        SSD_SERVICE_ID_sd_8m7T1Fz0hFKGTA3m.commonFunction.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_8m7T1Fz0hFKGTA3mInstance.hashing(
          spanInst,
          bh.input.body.password
        );
      bh.hashValueResult = outputVariables.local.hashValue;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.getAgencyCode(bh, parentSpanInst);
      //appendnew_next_getHashPassword
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_sSdknjroOGMNCX34',
        spanInst,
        'getHashPassword'
      );
    }
  }

  async getAgencyCode(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'getAgencyCode',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_8m7T1Fz0hFKGTA3mInstance: SSD_SERVICE_ID_sd_8m7T1Fz0hFKGTA3m.commonFunction =
        SSD_SERVICE_ID_sd_8m7T1Fz0hFKGTA3m.commonFunction.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_8m7T1Fz0hFKGTA3mInstance.generateAgencyId(
          spanInst
        );
      bh.local.agencyCode = outputVariables.local.agencyId;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_dTHTgsyLa7JFY4L9(bh, parentSpanInst);
      //appendnew_next_getAgencyCode
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_TZbgcYXt5gJ6iFCy',
        spanInst,
        'getAgencyCode'
      );
    }
  }

  async sd_dTHTgsyLa7JFY4L9(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_dTHTgsyLa7JFY4L9',
      parentSpanInst
    );
    try {
      let bcrypt = require('bcryptjs');

      // get values by body
      let { username, password } = bh.input.body;

      // hash-mapping password
      let hashPassword;
      await bh.hashValueResult
        .then((hashedPassword) => {
          hashPassword = hashedPassword;
        })
        .catch((error) => {
          console.error('Error:', error);
        });

      // auto generate agency code
      let agencyCode = bh.local.agencyCode;

      // bodyParams
      bh.bodyParams = {
        username,
        password: hashPassword,
        agent_code: agencyCode,
        device_ids: { uuids: [] },
      };
      console.log('bodyParams:', bh.bodyParams);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_xxCbW1xb92NscFtW(bh, parentSpanInst);
      //appendnew_next_sd_dTHTgsyLa7JFY4L9
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_dTHTgsyLa7JFY4L9',
        spanInst,
        'sd_dTHTgsyLa7JFY4L9'
      );
    }
  }

  async sd_xxCbW1xb92NscFtW(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_xxCbW1xb92NscFtW',
      parentSpanInst
    );
    try {
      const dmUtilsInst = new dmUtils('sd_dfYj0bD4aEucAtoz');
      bh.responseValue = await dmUtilsInst.insert(
        '_EN_ztxyh089jt',
        bh.bodyParams
      );

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_vcwnmypA5UfUTyQQ(bh, parentSpanInst);
      //appendnew_next_sd_xxCbW1xb92NscFtW
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_xxCbW1xb92NscFtW',
        spanInst,
        'sd_xxCbW1xb92NscFtW'
      );
    }
  }

  async sd_vcwnmypA5UfUTyQQ(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_vcwnmypA5UfUTyQQ',
      parentSpanInst
    );
    try {
      console.log('responseValue:');
      let responseValue = bh.responseValue;
      bh.responseValue = {
        msg: 'record create successfully',
        status: 200,
        responseValue,
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_sUOWFjVXqBgLu8T8(bh, parentSpanInst);
      //appendnew_next_sd_vcwnmypA5UfUTyQQ
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_vcwnmypA5UfUTyQQ',
        spanInst,
        'sd_vcwnmypA5UfUTyQQ'
      );
    }
  }

  async sd_sUOWFjVXqBgLu8T8(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.responseValue);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_sUOWFjVXqBgLu8T8');
    }
  }

  async sd_ffmlYMVOVjMzh3lR(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_ffmlYMVOVjMzh3lR',
      parentSpanInst
    );
    try {
      let { username, agent_code, password } = bh.input.body;

      if (username != undefined) {
        bh.condition = { username };
      } else {
        bh.condition = { agent_code };
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_9TyhHPuFlrGpmtoi(bh, parentSpanInst);
      //appendnew_next_sd_ffmlYMVOVjMzh3lR
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ffmlYMVOVjMzh3lR',
        spanInst,
        'sd_ffmlYMVOVjMzh3lR'
      );
    }
  }

  async sd_9TyhHPuFlrGpmtoi(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_9TyhHPuFlrGpmtoi',
      parentSpanInst
    );
    try {
      let dmUtilsInst = new dmUtils('sd_dfYj0bD4aEucAtoz');
      bh.agencyResult = await dmUtilsInst.find(
        '_EN_ztxyh089jt',
        bh.condition,
        undefined,
        undefined,
        undefined
      );

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_KdMuDejT7oPED8ol(bh, parentSpanInst);
      //appendnew_next_sd_9TyhHPuFlrGpmtoi
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_9TyhHPuFlrGpmtoi',
        spanInst,
        'sd_9TyhHPuFlrGpmtoi'
      );
    }
  }

  async sd_KdMuDejT7oPED8ol(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_KdMuDejT7oPED8ol',
      parentSpanInst
    );
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['empty'](
          bh.agencyResult,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_HYE9EzDYXS6ggxgB(bh, parentSpanInst);
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
        bh = await this.verifyHashPassword(bh, parentSpanInst);
        otherwiseFlag = false;
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_KdMuDejT7oPED8ol',
        spanInst,
        'sd_KdMuDejT7oPED8ol'
      );
    }
  }

  async sd_HYE9EzDYXS6ggxgB(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_HYE9EzDYXS6ggxgB',
      parentSpanInst
    );
    try {
      bh.agencyResponse = {
        msg: 'username & password is wrong!',
        status: 400,
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_zY8BqtKNQrsYyGtO(bh, parentSpanInst);
      //appendnew_next_sd_HYE9EzDYXS6ggxgB
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_HYE9EzDYXS6ggxgB',
        spanInst,
        'sd_HYE9EzDYXS6ggxgB'
      );
    }
  }

  async sd_zY8BqtKNQrsYyGtO(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.agencyResponse);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_zY8BqtKNQrsYyGtO');
    }
  }

  async verifyHashPassword(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'verifyHashPassword',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_8m7T1Fz0hFKGTA3mInstance: SSD_SERVICE_ID_sd_8m7T1Fz0hFKGTA3m.commonFunction =
        SSD_SERVICE_ID_sd_8m7T1Fz0hFKGTA3m.commonFunction.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_8m7T1Fz0hFKGTA3mInstance.verifyHash(
          spanInst,
          bh.agencyResult[0].password,
          bh.input.body.password
        );
      bh.resultValue = outputVariables.local.resultValue;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_AOAbZWlpwLU6bITH(bh, parentSpanInst);
      //appendnew_next_verifyHashPassword
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_PaxnGaTEbeJ99m3V',
        spanInst,
        'verifyHashPassword'
      );
    }
  }

  async sd_AOAbZWlpwLU6bITH(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_AOAbZWlpwLU6bITH',
      parentSpanInst
    );
    try {
      let agencyResult = bh.agencyResult;

      // console.log("resultValue:", bh.resultValue);
      let passwordVerify;
      await bh.resultValue
        .then((ans) => {
          passwordVerify = true;
        })
        .catch((error) => {
          console.error('Error:', error);
          passwordVerify = false;
        });

      bh.passwordVerify = passwordVerify;

      // bh.agencyResponse = {
      //     "msg": "login successfully",
      //     "status": 200,
      //     agencyResult
      // }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_I3eZFDq9clQtVRyi(bh, parentSpanInst);
      //appendnew_next_sd_AOAbZWlpwLU6bITH
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_AOAbZWlpwLU6bITH',
        spanInst,
        'sd_AOAbZWlpwLU6bITH'
      );
    }
  }

  async sd_I3eZFDq9clQtVRyi(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_I3eZFDq9clQtVRyi',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['false'](
          bh.passwordVerify,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_HYE9EzDYXS6ggxgB(bh, parentSpanInst);
      } else if (
        this.sdService.operators['true'](
          bh.passwordVerify,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_6iCkL3PHGUDWWVGq(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_I3eZFDq9clQtVRyi',
        spanInst,
        'sd_I3eZFDq9clQtVRyi'
      );
    }
  }

  async sd_6iCkL3PHGUDWWVGq(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_6iCkL3PHGUDWWVGq',
      parentSpanInst
    );
    try {
      let agencyResult = bh.agencyResult;

      bh.agencyResponse = {
        msg: 'login successfully',
        status: 200,
        data: agencyResult,
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_zY8BqtKNQrsYyGtO(bh, parentSpanInst);
      //appendnew_next_sd_6iCkL3PHGUDWWVGq
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_6iCkL3PHGUDWWVGq',
        spanInst,
        'sd_6iCkL3PHGUDWWVGq'
      );
    }
  }

  async sd_wAYj0zYgD7oaU0pT(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_wAYj0zYgD7oaU0pT',
      parentSpanInst
    );
    try {
      // select * from agent_db WHERE device_ids @> '{"uuids":  [5]}';

      let device_id = bh.input.params.device_id;
      bh.query = `select * from agent_db WHERE device_ids @> '{"uuids":  [${device_id}]}';`;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_MxdohO5U0xe0Cdol(bh, parentSpanInst);
      //appendnew_next_sd_wAYj0zYgD7oaU0pT
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_wAYj0zYgD7oaU0pT',
        spanInst,
        'sd_wAYj0zYgD7oaU0pT'
      );
    }
  }

  async sd_MxdohO5U0xe0Cdol(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_MxdohO5U0xe0Cdol',
      parentSpanInst
    );
    try {
      let configObj = this.sdService.getConfigObj(
        'db-config',
        'sd_dfYj0bD4aEucAtoz'
      );
      let connectionName;
      if (
        configObj &&
        configObj.hasOwnProperty('dbOption') &&
        configObj.dbOption.hasOwnProperty('name')
      ) {
        connectionName = configObj.dbOption.name;
      } else {
        throw new Error('Cannot find the selected config name');
      }
      let params = [];
      params = params ? params : [];
      bh.queryResponse = await new GenericRDBMSOperations().executeSQL(
        connectionName,
        bh.query,
        params
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_9JxSx8jd8pTBoVbp(bh, parentSpanInst);
      //appendnew_next_sd_MxdohO5U0xe0Cdol
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_MxdohO5U0xe0Cdol',
        spanInst,
        'sd_MxdohO5U0xe0Cdol'
      );
    }
  }

  async sd_9JxSx8jd8pTBoVbp(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_9JxSx8jd8pTBoVbp',
      parentSpanInst
    );
    try {
      let queryResponse = bh.queryResponse[0];
      if (queryResponse != undefined) {
        bh.response = {
          msg: 'Data retrieved successfully',
          status: 200,
          data: queryResponse,
        };
      } else {
        bh.response = {
          msg: 'No Data Found',
          status: 404,
        };
      }
      this.tracerService.sendData(spanInst, bh);
      await this.sd_NSeb907wu3TACa50(bh, parentSpanInst);
      //appendnew_next_sd_9JxSx8jd8pTBoVbp
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_9JxSx8jd8pTBoVbp',
        spanInst,
        'sd_9JxSx8jd8pTBoVbp'
      );
    }
  }

  async sd_NSeb907wu3TACa50(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_NSeb907wu3TACa50');
    }
  }

  async sd_VYjl32JjDN1w2ZrV(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_VYjl32JjDN1w2ZrV',
      parentSpanInst
    );
    try {
      let { username, device_id } = bh.input.body;

      bh.condition = { username };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_8J5qJTACPryrpFet(bh, parentSpanInst);
      //appendnew_next_sd_VYjl32JjDN1w2ZrV
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_VYjl32JjDN1w2ZrV',
        spanInst,
        'sd_VYjl32JjDN1w2ZrV'
      );
    }
  }

  async sd_8J5qJTACPryrpFet(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_8J5qJTACPryrpFet',
      parentSpanInst
    );
    try {
      let dmUtilsInst = new dmUtils('sd_dfYj0bD4aEucAtoz');
      bh.agencyResult = await dmUtilsInst.find(
        '_EN_ztxyh089jt',
        bh.condition,
        undefined,
        undefined,
        undefined
      );

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_eNkwtAs5XBWSDKsA(bh, parentSpanInst);
      //appendnew_next_sd_8J5qJTACPryrpFet
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_8J5qJTACPryrpFet',
        spanInst,
        'sd_8J5qJTACPryrpFet'
      );
    }
  }

  async sd_eNkwtAs5XBWSDKsA(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_eNkwtAs5XBWSDKsA',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['nnull'](
          bh.input.body.device_id,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_yX0xd4IHq9EG1J7T(bh, parentSpanInst);
      } else if (
        this.sdService.operators['null'](
          bh.input.body.device_id,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_lzycgQqxoSEaKWhK(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_eNkwtAs5XBWSDKsA',
        spanInst,
        'sd_eNkwtAs5XBWSDKsA'
      );
    }
  }

  async sd_yX0xd4IHq9EG1J7T(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_yX0xd4IHq9EG1J7T',
      parentSpanInst
    );
    try {
      let { device_id } = bh.input.body;

      bh.agencyData = bh.agencyResult[0];
      // console.log("bh.agencyData:", bh.agencyData);
      let uuids = bh.agencyResult[0].device_ids.uuids;
      bh.uuids = uuids;

      // if(uuids.length == 3) {
      //     // todo: LiFo (List in Fist out)
      // } else {
      //     uuids.push(device_id);
      // }
      // console.log("uuids:", uuids);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_py0PJmCk5kOzzg0P(bh, parentSpanInst);
      //appendnew_next_sd_yX0xd4IHq9EG1J7T
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_yX0xd4IHq9EG1J7T',
        spanInst,
        'sd_yX0xd4IHq9EG1J7T'
      );
    }
  }

  async sd_py0PJmCk5kOzzg0P(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_py0PJmCk5kOzzg0P',
      parentSpanInst
    );
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['eq'](bh.uuids.length, 3, undefined, undefined)
      ) {
        bh = await this.sd_yUlFFxJYOBjbevLG(bh, parentSpanInst);
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
        bh = await this.sd_3Btzk0Mnz2sLpEsb(bh, parentSpanInst);
        otherwiseFlag = false;
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_py0PJmCk5kOzzg0P',
        spanInst,
        'sd_py0PJmCk5kOzzg0P'
      );
    }
  }

  async sd_yUlFFxJYOBjbevLG(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_yUlFFxJYOBjbevLG',
      parentSpanInst
    );
    try {
      let { username, device_id } = bh.input.body;

      // todo: LiFo (List in Fist out)
      // remove first value
      bh.uuids.shift();

      // add value in last
      bh.uuids.push(device_id);

      // let updateObject = bh.uuids;
      // bh.updateObject = {'uuids': updateObject};
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_NK3K8jtJS8SKV1SZ(bh, parentSpanInst);
      //appendnew_next_sd_yUlFFxJYOBjbevLG
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_yUlFFxJYOBjbevLG',
        spanInst,
        'sd_yUlFFxJYOBjbevLG'
      );
    }
  }

  async sd_NK3K8jtJS8SKV1SZ(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_NK3K8jtJS8SKV1SZ',
      parentSpanInst
    );
    try {
      const dmUtilsInst = new dmUtils('sd_dfYj0bD4aEucAtoz');
      bh.updatedResult = await dmUtilsInst.updateByFilter(
        '_EN_ztxyh089jt',
        bh.condition,
        bh.agencyData
      );

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_wB2aYCSwO1kJ2haE(bh, parentSpanInst);
      //appendnew_next_sd_NK3K8jtJS8SKV1SZ
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_NK3K8jtJS8SKV1SZ',
        spanInst,
        'sd_NK3K8jtJS8SKV1SZ'
      );
    }
  }

  async sd_wB2aYCSwO1kJ2haE(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_wB2aYCSwO1kJ2haE',
      parentSpanInst
    );
    try {
      let updatedResult = bh.agencyData;

      bh.response = {
        msg: 'record updated Succefulley',
        status: 200,
        data: updatedResult,
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_f7MVEArhVg09KHKk(bh, parentSpanInst);
      //appendnew_next_sd_wB2aYCSwO1kJ2haE
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_wB2aYCSwO1kJ2haE',
        spanInst,
        'sd_wB2aYCSwO1kJ2haE'
      );
    }
  }

  async sd_f7MVEArhVg09KHKk(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_f7MVEArhVg09KHKk');
    }
  }

  async sd_3Btzk0Mnz2sLpEsb(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_3Btzk0Mnz2sLpEsb',
      parentSpanInst
    );
    try {
      let { username, device_id } = bh.input.body;

      // todo: insert new device id
      // add new value in last
      bh.uuids.push(device_id);

      // let updateObject = bh.uuids;
      // bh.updateObject = {'uuids': updateObject};
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_NK3K8jtJS8SKV1SZ(bh, parentSpanInst);
      //appendnew_next_sd_3Btzk0Mnz2sLpEsb
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_3Btzk0Mnz2sLpEsb',
        spanInst,
        'sd_3Btzk0Mnz2sLpEsb'
      );
    }
  }

  async sd_lzycgQqxoSEaKWhK(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_lzycgQqxoSEaKWhK',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['nnull'](
          bh.input.body.biometric_flag,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_hKsplx2kDBJj2SvH(bh, parentSpanInst);
      } else if (
        this.sdService.operators['null'](
          bh.input.body.biometric_flag,
          undefined,
          undefined,
          undefined
        )
      ) {
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_lzycgQqxoSEaKWhK',
        spanInst,
        'sd_lzycgQqxoSEaKWhK'
      );
    }
  }

  async sd_hKsplx2kDBJj2SvH(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_hKsplx2kDBJj2SvH',
      parentSpanInst
    );
    try {
      let { biometric_flag } = bh.input.body;
      console.log('biometric_flag:', biometric_flag);
      bh.agencyData = bh.agencyResult[0];

      bh.agencyData.biometric_flag = biometric_flag;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_NK3K8jtJS8SKV1SZ(bh, parentSpanInst);
      //appendnew_next_sd_hKsplx2kDBJj2SvH
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_hKsplx2kDBJj2SvH',
        spanInst,
        'sd_hKsplx2kDBJj2SvH'
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
  //appendnew_flow_auth_Catch
}
