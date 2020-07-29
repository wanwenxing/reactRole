import Axios from 'axios';


//全局修改axios默认配置
Axios.defaults.baseURL = "http://localhost:8080";//配置向服务器发起的请求的地址+端口

//请求拦截
Axios.interceptors.request.use(
    (config) => {
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);


//响应拦截
Axios.interceptors.response.use(
    response=>{
        //将服务器返回的token值储存

        return response;
    },
    error=>{
        return Promise.reject(error);
    }
);


export default Axios;