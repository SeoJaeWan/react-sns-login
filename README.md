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

### 맵위에 커스텀오버레이 올리기

```jsx live
function(){
  return (
    <GoogleLogin />
  )
}
```

### 맵위에 마커 클러스터 올리기

```jsx live
function(){
  return (
    <Map
      center={{ lat: 36.2683, lng: 127.6358 }}
      style={{ width: "100%", height: "360px" }}
      level={14}
    >
      <MarkerClusterer
        averageCenter={true}
        minLevel={10}
      >
        {clusterPositionsData.positions.map((pos) => (
          <MapMarker
            key={`${pos.lat}-${pos.lng}`}
            position={pos}
          />
        ))}
      </MarkerClusterer>
    </Map>
  )
}
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
