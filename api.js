import axios from "axios";

// 아래는 axios 설정법
// https://xn--xy1bk56a.run/axios/guide/api.html#http-%EB%A9%94%EC%84%9C%EB%93%9C-%EB%B3%84%EC%B9%AD
const callApi = async (method, path, data, jwt, params = {}) => {
  // 테스트를 위한 return 처리 로긴시!!
  if (path === "/users/") {
    return { status: 201 };
  } else if (path === "/users/login/") {
    return { data: { token: "coresight", userId: "11" } };
  }
  //////////////////////////

  const headers = {
    Authorization: `Bearer ${jwt}`,
    "Content-Type": "application/json",
  };
  const baseUrl = "";
  const fullUrl = `${baseUrl}${path}`;
  if (method === "get" || method === "delete") {
    return axios[method](fullUrl, { headers, params });
  } else {
    return axios[method](fullUrl, data, { headers });
  }
};

export default {
  createAccount: (form) => callApi("post", "/users/", form),
  logIn: (form) => callApi("post", "/users/login/", form),
};
