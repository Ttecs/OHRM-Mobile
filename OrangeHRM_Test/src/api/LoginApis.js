import {Axios} from 'axios';

export function handleLogin(userName, password, callback) {
  //write axios post
  Axios.post(
    'https://opensource-demo.orangehrmlive.com/index.php/auth/validateCredentials',
    {
      txtUsername: userName,
      txtPassword: password,
    },
  )
    .then(function (response) {
      console.log(response);
      callback(response);
    })
    .catch(function (error) {
      console.log(error);
      callback(error);
    });
}
