import {SecretsManager} from 'aws-sdk';
const secrets = new SecretsManager();

const Logger = {
  // tslint:disable-next-line: no-console
  console: console.log,
};

export class SampleHandlerClass {
  private _event;
  private _context;

  constructor(event, context) {
    this._event = event;
    this._context = context;
  }

  async run() {

    const requestParams: SecretsManager.Types.GetSecretValueRequest = {
      SecretId: 'SampleNodeAppSecret'
    };

    const secret = await secrets.getSecretValue(requestParams).promise();
    Logger.console(secret);

  }

  // the handler function that gets called when the lambda is triggered
  static async handler(event, context) {
    const handler = new SampleHandlerClass(event, context);
    return await handler.run();
  }
}

exports.handler = SampleHandlerClass.handler;
