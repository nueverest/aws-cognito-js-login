//all the provided keys are examples, go to Amazon Cognito and get yours

AWSCognito.config.region = 'us-west-2'; //This is required to derive the endpoint

var poolData = {
    UserPoolId : 'us-west-2_3WAh41rA3', // your user pool id here
    ClientId : '2pgl77sa4asbjdke4lhhe1aprh' // your client id here
};

var identityPoolId = 'us-west-2:13f268df-b5c7-4c01-a2c9-e1d0ce718532'; //go to AWS Cognito Federated Identites

var userAttributes = ['email', 'phone_number'];    //the standard attributes you require in AWS Cognito

var MFARequired = false; //do you require your clients to use MFA?