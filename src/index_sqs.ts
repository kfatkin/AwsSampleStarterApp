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
    this._event.Records.forEach(item => {
      // do something with the message, whatever you want
      Logger.console(item);

      // parse the body because it's a string unless that's what you're expecting
      const body = JSON.parse(item.body);
      Logger.console(body.somekey);

    });
  }

  // the handler function that gets called when the lambda is triggered
  static async handler(event, context) {
    const handler = new SampleHandlerClass(event, context);
    return await handler.run();
  }
}

exports.handler = SampleHandlerClass.handler;
