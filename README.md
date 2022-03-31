<div align="center">
  <h1>react-sns-login</h1>
  <p>It is a login library customized for Google, Kakao, and Naver for React.</p>
  <p>Google, Kakao, Naver를 React에 맞게 커스텀한 라이브러리 입니다.</p>
  <p>
    <a href="https://github.com/SeoJaeWan/react-sns-login/issues"><img alt="GitHub issues" src="https://img.shields.io/github/issues/JaeSeoKim/react-kakao-maps-sdk"></a>
  </p>
</div>

## Install

```bash
npm install react-sns-login
# or
yarn add react-sns-login
```

## Simple Usage

### Google Login

```jsx live
ReactDOM.render(
  <GoogleProvider token={"YOUR_GOOGLE_CLIENT_ID"}>
    <App />
  </GoogleProvider>,
  document.getElementById("root")
);
```

```jsx live
return (
  <div>
    <GoogleLogin />
  </div>
);
```

## Documentation

## Working list

- Google

  - Login
  - Logout

- Kakao

  - Login
  - Logout
  - UnLink

- Naver

  - Login
  - Logout
