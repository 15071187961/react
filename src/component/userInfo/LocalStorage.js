export const user_id_check  = localStorage.getItem("hyquser_id")
export const token_check  = localStorage.getItem("hyqutoken")

export const user_data = function () {
  if(localStorage.getItem("USER_INFO_DATA")){
    return JSON.parse(localStorage.getItem("USER_INFO_DATA"))
  }
}

/*if(localStorage.getItem("USER_INFO_DATA")){
  return JSON.parse(localStorage.getItem("USER_INFO_DATA"))
}*/
