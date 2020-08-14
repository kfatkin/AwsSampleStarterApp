import {DynamoDB} from 'aws-sdk';
const dynamo = new DynamoDB.DocumentClient({apiVersion: '2012-08-10'});


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

  async getDynamoItem(table: string, id: string) {

    const params: DynamoDB.DocumentClient.GetItemInput = {
      TableName: table,
      Key: {
          id: id
      }
    };
    const result = await dynamo.get(params).promise();
    return result;
  }

  async putDynamoItem(table: string, item: DynamoDB.DocumentClient.PutItemInputAttributeMap) {
    const params: DynamoDB.DocumentClient.PutItemInput = {
      TableName: table,
      Item: item
    };
    const result = await dynamo.put(params).promise();
    return result;
  }

  async run() {

    const table = 'SampleNodeApp';
    const putItem = await this.putDynamoItem(table, {'id':'123','attr1':'something!'});
    Logger.console("Put item: ", putItem);

    const getItem = await this.getDynamoItem(table, '123');
    Logger.console("Get item: ", getItem);

  }

  // the handler function that gets called when the lambda is triggered
  static async handler(event, context) {
    const handler = new SampleHandlerClass(event, context);
    return await handler.run();
  }
}

exports.handler = SampleHandlerClass.handler;
