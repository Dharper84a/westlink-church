import {
    AmazonCognitoIdentity,
	CognitoUserPool,
	CognitoUserAttribute,
	CognitoUser,
} from 'amazon-cognito-identity-js';

const LoginPage = (props) => {
    var poolData = {
        UserPoolId: 'us-east-2_hmP2ObjDW',
        ClientId: 'dg0s29c06fdvs7f93smhtp1km'
    };
    var userPool = new CognitoUserPool(poolData);
    
    var attributeList = [];
    
    var dataEmail = {
        Name: 'email',
        Value: 'dharper84a@gmail.com',
    };
    
    var dataPhoneNumber = {
        Name: 'phone_number',
        Value: '+13168067528',
    };

    const dataFamilyName = {
        Name: 'family_name',
        Value: 'Harper'
    }

    const dataGivenName = {
        Name: 'given_name',
        Value: 'Donald',
    }

    var attributeEmail = new CognitoUserAttribute(dataEmail);
    var attributePhoneNumber = new CognitoUserAttribute(
        dataPhoneNumber
    );
    const attributeFamilyName = new CognitoUserAttribute(dataFamilyName);
    const attributeGivenName = new CognitoUserAttribute(dataGivenName);

    // var attributePassword = new CognitoUserAttribute(dataPassword);
    
    // attributeList.push(attributePassword);
    attributeList.push(attributeEmail);
    attributeList.push(attributePhoneNumber);
    attributeList.push(attributeFamilyName);
    attributeList.push(attributeGivenName);
    
    userPool.signUp('DHarper', '1q2w3e4rD9?', attributeList, null, function(
        err,
        result
    ) {
        if (err) {
            alert(err.message || JSON.stringify(err));
            return;
        }
        var cognitoUser = result.user;
        console.log('user name is ' + cognitoUser.getUsername());
    });

    const signupHandler = () => {

    }
    return (
        <div>
            <h1>Login Page</h1>
            <form onSubmit={signupHandler}>
                
            </form>
        </div>
    )
}

export default LoginPage;