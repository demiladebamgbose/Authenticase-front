 let  url = '';
import {fetchUrl} from 'fetch';

class UserApi {

    createUser = (user)=> {
        return new Promise((resolve, reject)=> {
            return fetchUrl(url + 'api/v1/users' ,{
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(user)
            })
                .then((response) => response.json())
                .then((responseJson) => {
                    if(responseJson.message.response === 'user logged in')
                        resolve(Object.assign({}, responseJson.message.user));
                    else{
                        resolve(Object.assign({}, { 'error': responseJson.message.response}));
                    }
                });
        });
    };

    logUserIn =(user)=> {
        return new Promise((resolve, reject)=> {
            return fetchUrl(url + 'api/v1/users/login' ,{
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(user)
            })
                .then((response) => response.json())
                .then((responseJson) => {
                    if(responseJson.message.response === 'user logged in') {
                        resolve(Object.assign({}, responseJson.message.user));
                    }
                    else{
                        resolve(Object.assign({}, { 'error': responseJson.message.response}));
                    }
                });
        });
    };

    findAll = () => {
        return new Promise((resolve, reject)=> {
            return fetchUrl(url + 'api/v1/users', {
                method: 'GET'
            }).then((response) => response.json())
                .then((responseJson) => {
                    resolve(Object.assign({}, responseJson));
                });
        })
    };

    findOneUser = (userId) => {
        return new Promise((resolve, reject)=> {
            return fetchUrl(url + `api/v1/users/${userId}/user`,{
                method: 'GET'
            }).then((response) => response.json())
                .then((responseJson) => {
                    resolve(Object.assign({}, responseJson.data));
                });
        })
    };

    findUser = (user) => {
        return new Promise((resolve, reject)=> {
            return fetchUrl(url + `api/v1/users/${user}`, {
                method: 'GET'
            }).then((response) => response.json())
                .then((responseJson) => {
                    resolve(Object.assign({}, responseJson));
                });
        })
    };

    followUser = (user) => {
        return new Promise((resolve, reject) => {
            return fetchUrl(url + 'api/v1/users/friend', {
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
            return fetchUrl(url + `api/v1/users/friend/${user.unfollow._id}`, {
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
            return fetchUrl(url + `api/v1/message`, {
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