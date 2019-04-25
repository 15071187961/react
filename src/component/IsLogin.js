import axios from 'axios'
import React from 'react'
import {Redirect} from 'react-router-dom'
import {message} from 'antd'
export  default  async function IsLogin() {
  const userid = localStorage.getItem("hyquser_id");
  const usertoken = localStorage.getItem("hyqutoken");
  let self = false;
  if(userid && usertoken) {
    await axios.post("/user/info/info",{
      user_id_check:userid,
      token_check:usertoken
    }).then((res) =>{
      if(res.data.res === 1 ){
        self = true;
      }else {
        self = false
      }
    }).catch(function (err) {
      message.error(err)
    })
    console.log("用户是否登录"+self)
    return self;
  }

}
