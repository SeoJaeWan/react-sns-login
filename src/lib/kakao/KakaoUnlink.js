export default (
  success = (res) => {
    console.log("success: " + JSON.stringify(res));
  },
  fail = (err) => {
    console.log("fail: " + JSON.stringify(err));
  }
) => {
  Kakao.API.request({
    url: "/v1/user/unlink",
    success: success,
    fail: fail,
  });
};
