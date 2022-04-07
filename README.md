<div align="center">
  <h1>react-sns-login</h1>
  <p>It is a login library customized for Google, Kakao, and Naver for React.</p>
  <p>Google, Kakao, Naver를 React에 맞게 커스텀한 라이브러리 입니다.</p>
  <p>
    <a href="https://github.com/SeoJaeWan/react-sns-login/issues">GitHub issues</a>
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
return <GoogleLogin token={"YOUR GOOGLE KEY"} />;
```

### Kakao Login

```jsx live
return <KakaoLogin token={"YOUR KAKAO KEY"} />;
```

### Naver Login

```jsx live
return (
  <NaverLogin token={"YOUR NAVER KEY"} callbackUrl={"YOUR CALLBACK URL"} />;
);
```

Naver Login requires additional work.
Please refer to the document.

## Documentation

<a href="https://seojaewan.github.io/react-sns-login/">Document</a>

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
