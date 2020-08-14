# BSS Dev Sample Node App

Sample node app for processing SQS messages, that you can run locally using AWS SAM.<br>
You can use this as a starter repository for new projects to get started quickly :)

## Installation

Things you need installed:
1) Node 12.x and npm --> https://nodejs.org/en/download/
2) AWS Sam --> https://aws.amazon.com/serverless/sam/


## Initial Setup

Is this your first time? Then you need to install the node modules, see below
```
npm install
```

# Quick Start: I want to....
### 1. Have my lambda triggered via an sqs message (index_sqs.ts):
```npm run package && sam build && sam local invoke SQSFunction --event events/event-sqs.json```
 
### 2. Use Dynamo (index_dynamo.ts):
Login with with BSS cli to dev account <br>
```npm run package && sam build && sam local invoke DynamoFunction```

### 3. Use Secrets Manager (index_secrets.ts):
Login with with BSS cli to dev account <br>
```npm run package && sam build && sam local invoke SecretsFunction```

## Ongoing Usage

After you ran ```npm install```
```
npm run package
sam build
sam local invoke SQSFunction --event events/event-sqs.json
```

OR the shorthand way:
```
npm run package && sam build && sam local invoke SQSFunction --event events/event-sqs.json
```

So what do the above commands do for you?
1. ```npm run package```: Converts the typescript for you into javascript so that Lambda can run it
2. ```sam build```: Tells AWS SAM to read the template.yaml file which packages up the node app in a friendly way for the SAM app to call it like a lambda function
3. ```sam local invoke SQSFunction --event events/event-sqs.json```: Tells SAM to run the app locally and trigger the handler with that event, in this case it's an SQS event

## Why?

The AWS Serverless Application Model (SAM) is an open-source framework for building serverless applications. It provides shorthand syntax to express functions, APIs, databases, and event source mappings. With just a few lines per resource, you can define the application you want and model it using YAML. During deployment, SAM transforms and expands the SAM syntax into AWS CloudFormation syntax, enabling you to build serverless applications faster.
