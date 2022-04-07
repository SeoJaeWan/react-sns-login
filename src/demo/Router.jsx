import React, { useState, useEffect } from "react";
import { Route, Routes, Link } from "react-router-dom";
import HomeDemo from "./Common/HomeDemo";
import GoogleDemo from "./Google/GoogleDemo";
import KakaoDemo from "./Kakao/KakaoDemo";
import NaverDemo from "./Naver/NaverDemo";
import { useLocation } from "react-router-dom";

import { createGlobalStyle } from "styled-components";
import { BsGithub } from "react-icons/bs";

import { Layout, Menu, Typography } from "antd";

import "antd/dist/antd.css";

const { Header, Content, Sider, Footer } = Layout;
const { Title, Text } = Typography;

const GlobalStyle = createGlobalStyle`
.ant-layout-header {
    padding: 15px;
}
`;

export default () => {
  const history = useLocation();

  const [active, setActive] = useState(history.pathname);

  useEffect(() => {
    setActive(history.pathname);
  }, [history]);

  return (
    <Layout>
      <GlobalStyle />
      <Header style={{ backgroundColor: `#fff` }}>
        <BsGithub
          style={{ float: "right", cursor: `pointer` }}
          size={`35`}
          onClick={() => {
            window.open(
              "https://github.com/SeoJaeWan/react-sns-login",
              "_black"
            );
          }}
        />

        <Title
          style={{ color: "black", float: "left", fontWeight: `bold` }}
          level={3}
        >
          React SNS Login
        </Title>
      </Header>
      <Layout>
        <Sider>
          <Menu
            onClick={() => {}}
            style={{ width: 200 }}
            selectedKeys={[active]}
            mode="inline"
          >
            <Menu.Item key="/">
              <Link to="/">
                <Text>Getting Started</Text>
              </Link>
            </Menu.Item>
            <Menu.Item key="/Google">
              <Link to="/Google">
                <Text>Google</Text>
              </Link>
            </Menu.Item>
            <Menu.Item key="/Kakao">
              <Link to="/Kakao">
                <Text>Kakao</Text>
              </Link>
            </Menu.Item>
            <Menu.Item key="/Naver">
              <Link to="/Naver">
                <Text>Naver</Text>
              </Link>
            </Menu.Item>
            <Menu.Item key="/Support">
              <Link to="/Naver">
                <Text>Support</Text>
              </Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Content>
          <Routes>
            <Route exact path="/" element={<HomeDemo />} />
            <Route exact path="/Google" element={<GoogleDemo />} />
            <Route exact path="/Kakao" element={<KakaoDemo />} />
            <Route exact path="/Naver" element={<NaverDemo />} />
          </Routes>
        </Content>
      </Layout>
      <Layout>
        {/* <Footer style={{ height: `200vh` }}>dqwdqwd</Footer> */}
      </Layout>
    </Layout>
  );
};
