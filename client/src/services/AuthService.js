const { default: axios } = require("axios");

const config = {
  header: {
    "Content-Type": "application/json",
  },
};

exports.loginSuccessApi = async () => {
  return await axios.get("/api/auth/login/success");
};

exports.forgotPasswordApi = async (body) => {
  return await axios.post("/api/auth/forgotpassword", body, config);
};

exports.loginApi = async (body) => {
  return await axios.post("/api/auth/login", body, config);
};

exports.registerApi = async (body) => {
  return await axios.post("/api/auth/register", body, config);
};

exports.resetPasswordApi = async (token,body) =>{
  return axios.put(
    `/api/auth/resetpassword/${token}`,
    body,
    config
  );
}

exports.getCurrentUserApi = async ()=>{
  return await axios.get("/api/auth/getCurrentUser", 
  {
    headers:{ ...config,
    "Authorization": `Bearer ${localStorage.getItem("authToken")}`
  }
})
}