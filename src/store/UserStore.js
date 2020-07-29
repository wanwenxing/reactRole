import {observable,action} from 'mobx';
// import Axios from 'axios'

//引入axios配置文件
import Axios from "../util/axios";
//引入发送请求时的接口文件
import Api from "../api/index"

export default class UserStore{
    @observable user=[];// 用户
    @observable isLogin=false;//登录状态
    @observable token="";

    @action
    login=()=>{//登录方法
        return new Promise((resolve,reject)=>{
              Axios.post(Api.user.userLogin,{userName:"wan",psw:"123"})
              .then((resp)=>{
                  console.log(resp.data);
                  if(resp.data.reqState===200){
                    this.user=resp.data.data;
                  this.token=resp.data.token;
                  resolve("登陆成功");
                  }else{
                      reject("登陆失败");
                  }
                  
              })
            //   .catch((err)=>{
            //     console.log(err);
            //     reject(err);
            //   });
        })
    }

}