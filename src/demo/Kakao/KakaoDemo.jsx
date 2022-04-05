import { Typography } from "antd";
import React from "react";
import { Container, H1, H2, MainSection } from "../Style";
import { Link } from "react-router-dom";

export default function KakaoDemo() {
  const { Paragraph, Text } = Typography;

  return (
    <Container>
      <MainSection>
        <H1>Getting Started</H1>

        <p>
          React Sns Login은 카카오, 네이버, 구글의 로그인 및 로그아웃 기능을
          리액트에서 사용할 수 있도록 만들었습니다.
        </p>

        <p>추후 페이스북 등의 SNS 로그인 기능도 추가할 예정입니다.</p>

        <H2>Install</H2>

        <Paragraph>
          <pre>
            {`npm install react-kakao-maps-sdk 
# or 
yarn add react-kakao-maps-sdk`}
          </pre>
        </Paragraph>

        <H2>Documentation</H2>

        <ul style={{ fontSize: `1.5rem` }}>
          <li>
            <Link to="/Google">Google</Link>
          </li>
          <li>
            <Link to="/Kakao">Kakao</Link>
          </li>
          <li>
            <Link to="Naver">Naver</Link>
          </li>
        </ul>

        {/* <div style={{ position: "absolute", top: "18px", right: "45px" }}>
      <Anchor affix={true} style={{ float: "right" }}>
        <Link href="#components-anchor-demo-basic" title="Basic demo" />
        <Link href="#components-anchor-demo-static" title="Static demo" />
        <Link href="#API" title="API">
          <Link href="#Anchor-Props" title="Anchor Props" />
          <Link href="#Link-Props" title="Link Props" />
        </Link>
      </Anchor>
    </div> */}
      </MainSection>
    </Container>
  );
}
