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

### FaceBook Login

```jsx live
return <FacebookLogin appId={"YOUR FACEBOOK APP ID"} />;
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
<br/>
Please refer to the document.

## Documentation

<a href="https://seojaewan.github.io/react-sns-login/">Document</a><br/>
<a href="https://seojaewan.github.io/react-sns-login/FaceBook">Google</a><br/>
<a href="https://seojaewan.github.io/react-sns-login/Google">FaceBook</a><br/>
<a href="https://seojaewan.github.io/react-sns-login/Kakao">Kakao</a><br/>
<a href="https://seojaewan.github.io/react-sns-login/Naver">Naver</a>

## Working list

- Google

  - Login
  - Logout

- FaceBook

  - Login
  - Logout

- Kakao

  - Login
  - Logout
  - UnLink

- Naver

  - Login
  - Logout
