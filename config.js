//all the provided keys are examples, go to Amazon Cognito and get yours

AWSCognito.config.region = 'us-west-2'; //This is required to derive the endpoint

var poolData = {
    UserPoolId : 'us-west-XXXXXXXXX', // your user pool id here
    ClientId : '2pgl77XXXXXXXXXXXXXXX' // your client id here
};

var identityPoolId = 'us-west-2:13f268df-b5c7-4c01-XXXXXXXXXXXXXX'; //go to AWS Cognito Federated Identites

var userAttributes = ['email', 'phone_number'];    //the standard attributes you require in AWS Cognito

var MFARequired = false; //do you require your clients to use MFA?
