import axios from "@/libs/api.request";

/*登录*/
export const login = ({ userNo, password }) => {
  return axios.request({
    url: `/contactList`,
    method: "get",
    params: {
      userNo,
      password
    }
  });
};
/*
 * 登出
 * */
export const loginOut = () => {
  return axios.request({
    url: `/user/loginOut`,
    method: "post"
  });
};

/*测试*/
export const test = () => {
  return axios.request({
    url: `/contactList`,
    method: "get",
  });
};
