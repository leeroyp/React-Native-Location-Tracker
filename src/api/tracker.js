import axios from 'axios';
import {AsyncStorage} from 'react-native';



const instance = axios.create ({
 baseURL: 'http://e1ea770a0988.ngrok.io'   
});

instance.interceptors.request.use(

   async (config) => {
    const token = await AsyncStorage.getItem('token')
    if (token){
        config.headers.Authorizations = `Bearer ${token}`
    }
        return config;
    },
    (err) => {
        return Promise.reject(err);
    }



)


export default instance