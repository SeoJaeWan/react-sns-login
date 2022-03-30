export default (
  success = () => {
    console.log("logout ok\naccess token -> " + Kakao.Auth.getAccessToken());
  },
  fail = () => {
    console.log("Not logged in.");
  }
) => {
  if (!Kakao.Auth.getAccessToken()) {
    fail();
    return;
  }
  Kakao.Auth.logout(success());
};
