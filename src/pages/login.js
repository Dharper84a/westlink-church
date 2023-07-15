import {
    AmazonCognitoIdentity,
    CognitoUserPool,
    CognitoUserAttribute,
    CognitoUser,
    AuthenticationDetails
} from 'amazon-cognito-identity-js';
import * as AWS from 'aws-sdk/global';
import { useEffect, useRef, useState } from 'react';

const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const POOL_ID = 'us-east-2_hmP2ObjDW';
const CLIENT_ID ='dg0s29c06fdvs7f93smhtp1km';
const REGION = 'us-east-2';

const userPool = new CognitoUserPool({
    UserPoolId: POOL_ID,
    ClientId: CLIENT_ID
})

const LoginPage = (props) => {
    const signupHandler = () => {
      

        var attributeList = [];

        var dataEmail = {
            Name: 'email',
            Value: 'dharper84a@gmail.com'
        };

        var dataPhoneNumber = {
            Name: 'phone_number',
            Value: '+13168067528'
        };

        const dataFamilyName = {
            Name: 'family_name',
            Value: 'Harper'
        };

        const dataGivenName = {
            Name: 'given_name',
            Value: 'Donald'
        };

        var attributeEmail = new CognitoUserAttribute(dataEmail);
        var attributePhoneNumber = new CognitoUserAttribute(dataPhoneNumber);
        const attributeFamilyName = new CognitoUserAttribute(dataFamilyName);
        const attributeGivenName = new CognitoUserAttribute(dataGivenName);

        // var attributePassword = new CognitoUserAttribute(dataPassword);

        // attributeList.push(attributePassword);
        attributeList.push(attributeEmail);
        attributeList.push(attributePhoneNumber);
        attributeList.push(attributeFamilyName);
        attributeList.push(attributeGivenName);

        userPool.signUp('DHarper', '1q2w3e4rD9?', attributeList, null, function (err, result) {
            if (err) {
                alert(err.message || JSON.stringify(err));
                return;
            }
            var cognitoUser = result.user;
            console.log('user name is ' + cognitoUser.getUsername());
        });
    };

    const [email, setEmail] = useState('dharper84a@gmail.com');
    const [password, setPassword] = useState('1q2w3e4rD9?');

    const [formError, setFormError] = useState(false);
    const [emailError, setEmailError] = useState(false);

    const [authenticated, setAuthenticated] = useState(false);

    const cognitoUser = useRef();

    const validateEmail = (value) => {
        return value.match(EMAIL_REGEX);
    };

    const emailBlurHandler = (e) => {
        setEmailError(!validateEmail(e.target.value));
    };

    const loginHandler = (e) => {
        e.preventDefault();
        if(validateEmail(email)) {
            setFormError(false);

            const authenticationDetails = new AuthenticationDetails({
                Username: 'dharper', //email,
                Password: password,
            })
  
            cognitoUser.current = new CognitoUser({
                Username: 'dharper',
                Pool: userPool
            });

            cognitoUser.current.authenticateUser(authenticationDetails, {
                onSuccess: (result) => {
                    console.log(result)
                    var accessToken = result.getAccessToken().getJwtToken();
                    console.log(accessToken)
                    setAuthenticated(true);
                    // //POTENTIAL: Region needs to be set if not already set previously elsewhere.
                    // AWS.config.region = REGION;


                    // AWS.config.credentials = new AWS.CognitoIdentityCredentials({
                    //     IdentityPoolId: POOL_ID, // your identity pool id here
                    //     Logins: {
                    //         // Change the key below according to the specific region your user pool is in.
                    //         'cognito-idp.us-east-2.amazonaws.com/us-east-2_hmP2ObjDW': result
                    //             .getIdToken()
                    //             .getJwtToken(),
                    //     },
                    // });

                    // //refreshes credentials using AWS.CognitoIdentity.getCredentialsForIdentity()
                    // AWS.config.credentials.refresh(error => {
                    //     if (error) {
                    //         console.error(error);
                    //     } else {
                    //         // Instantiate aws sdk service objects now that the credentials have been updated.
                    //         // example: var s3 = new AWS.S3();
                    //         console.log('Successfully logged!');
                    //     }
                    // })
                },
                onFailure: (err) => {
                    console.log(err)
                    setAuthenticated(false);
                }
            })


           
        } else {
            setFormError(true);
        }
    };

    useEffect(() => {
        if(authenticated) {
            cognitoUser.current.getUserAttributes(function(err, result) {
                if (err) {
                    alert(err.message || JSON.stringify(err));
                    return;
                }
                for (var i = 0; i < result.length; i++) {
                    console.log(
                        'attribute ' + result[i].getName() + ' has value ' + result[i].getValue()
                    );
                }
            });
        } else {
            console.log('Not authenticated')
        }
    }, [authenticated])
    return (
        <div>
            <h1>Login Page</h1>
            {formError && 
            <div>
                <p>Please fix the errors on the form.</p>
            </div>
            }
            <form onSubmit={loginHandler} noValidate>
                <div>
                    <label htmlFor="email">Email Address</label>
                    <input
                        type="email"
                        onChange={(e) => setEmail(e.target.value)}
                        onBlur={emailBlurHandler}
                        value={email}
                    />
                    {emailError && <div><p>Invalid email</p></div>}
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                    />
                </div>

                <div>
                    <input type="submit" value="Sign In" />
                </div>
            </form>
        </div>
    );
};

export default LoginPage;
