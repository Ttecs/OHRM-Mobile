import Axios from 'axios';

export function handleLogin(userName, password, token, callback) {
  //write axios post
  Axios.post(
    'https://tharaka-osondemand.orangehrm.com/symfony/web/index.php/api/v1/login',
    {
      username: userName,
      password: password,
    },
    //add authorization header
    {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    },
  )
    .then(function (response) {
      console.log('response ############', response.data.error.text);
      if (response.status == 200) callback(response.data.user, true, null);
      else callback(null, false, response.data.error.text);
    })
    .catch(function (error) {
      console.log(error);
      callback(null, false, error);
    });
}

export function getToken(callback) {
  Axios.post(
    'https://tharaka-osondemand.orangehrm.com/symfony/web/index.php/oauth/issueToken',
    {
      client_id: '12345',
      client_secret: '12345',
      grant_type: 'client_credentials',
    },
  )
    .then(function (response) {
      console.log(response.data);
      callback(response.data, true, null);
    })
    .catch(function (error) {
      console.log(error);
      callback(null, false, error);
    });
}
