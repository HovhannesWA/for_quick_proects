import axios from "axios";

axios.interceptors.request.use((request) => {
  request.headers["aburjubur"] = "myAburjubur";
  console.log("req");
  return request;
});

axios.interceptors.response.use((response) => {
  return response;
});
