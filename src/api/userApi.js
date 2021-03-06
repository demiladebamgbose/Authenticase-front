import request from 'superagent';
let  url = 'https://gentle-fortress-32163.herokuapp.com/';

class UserApi {

    createUser = (user)=> {
      return new Promise((resolve, reject)=> {
        request
          .post(url + 'api/v1/users')
          .send(user)
          .set('Accept', 'application/json')
          .end(function(err, res) {
            // Calling the end function will send the request

            if (!err) {
              console.log(res);
              if(res.body.message) {
                resolve(Object.assign({},  res.body.message.user));
              } else{
                  //resolve(Object.assign({}, { 'error': res.message.response}));
              }
            }

        });
      });
    };

    logUserIn =(user)=> {
      return new Promise((resolve, reject) => {

        request
          .post(url + 'api/v1/users/login')
          .send(user)
          .set('Accept', 'application/json')
          .end(function(err, res){
            // Calling the end function will send the request
            if (!err) {
              console.log(res);

            if(res.body.message.user){
                resolve(Object.assign({}, res.body.message.user));}
            else{
                //resolve(Object.assign({}, { 'error': res.message.response}));

            }
          }
        });
      });


    };


    verfyUser =(email)=> {
      return new Promise((resolve, reject) => {

        request
          .post(url + 'api/v1/users/verify')
          .send(email)
          .set('Accept', 'application/json')
          .end(function(err, res){
            // Calling the end function will send the request
              console.log(res);
            if(!res.user)
                resolve(Object.assign({}, {email: 'demiladebam@gmail.com', password: 'password'}));
            else{
                //resolve(Object.assign({}, { 'error': res.message.response}));
            }
          });

      });

    };

    findAll = () => {
        return new Promise((resolve, reject)=> {
            return request(url + 'api/v1/users', {
                method: 'GET'
            }).then((response) => response.json())
                .then((responseJson) => {
                    resolve(Object.assign({}, responseJson));
                });
        })
    };

    findOneUser = (userId) => {
        return new Promise((resolve, reject)=> {
            return request(url + `api/v1/users/${userId}/user`,{
                method: 'GET'
            }).then((response) => response.json())
                .then((responseJson) => {
                    resolve(Object.assign({}, responseJson.data));
                });
        })
    };

    findUser = (user) => {
        return new Promise((resolve, reject)=> {
            return request(url + `api/v1/users/${user}`, {
                method: 'GET'
            }).then((response) => response.json())
                .then((responseJson) => {
                    resolve(Object.assign({}, responseJson));
                });
        })
    };

    followUser = (user) => {
        return new Promise((resolve, reject) => {
            return request(url + 'api/v1/users/friend', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(user)
            }).then((response)=> response.json()).then((responseJson)=> {
                if(responseJson.message.data)
                    resolve(Object.assign({}, responseJson.message.data));
                else{
                    reject(Object.assign({}, responseJson.message.error));
                }
            })
        });
    };

    unFollowUser = (user) => {
        return new Promise((resolve, reject) => {
            return request(url + `api/v1/users/friend/${user.unfollow._id}`, {
                method: 'PUT',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(user)
            }).then((response)=> response.json()).then((responseJson)=> {
                if(responseJson.message.data)
                    resolve(Object.assign({}, responseJson.message.data));
                else{
                    reject(Object.assign({}, responseJson.message.error));
                }
            })
        });
    };

    sendMessage = (obj) => {
        return new Promise((resolve, reject) => {
            return request(url + `api/v1/message`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(obj)
            }).then((response)=> response.json()).then((responseJson) => {
                if(responseJson.message === 'Conversation started!')
                    resolve(Object.assign({}, responseJson.conversationId));
                else{
                    reject('Error');
                }
            })
        })
    };

}

export default new UserApi();
