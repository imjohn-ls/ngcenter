import axios from "@/libs/api.request";


/*菜单*/
export const sidelist = () => {
  return axios.request({
    url: `/sidelist`,
    method: "get",
  });
};
