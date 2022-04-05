import React from "react";

import { Route, Routes, Link } from "react-router-dom";
import HomeDemo from "./Common/HomeDemo";
import GoogleDemo from "./Google/GoogleDemo";
import KakaoDemo from "./Kakao/KakaoDemo";
import NaverDemo from "./Naver/NaverDemo";

import { createGlobalStyle } from "styled-components";
import { SiKakaotalk, SiNaver } from "react-icons/si";
import { ImGoogle2 } from "react-icons/im";
import { FcSupport } from "react-icons/fc";

import { Avatar, Layout, Menu, Typography } from "antd";

import "antd/dist/antd.css";

const { SubMenu } = Menu;
const { Header, Content, Sider, Footer } = Layout;
const { Title, Text } = Typography;

export default (props) => {
  const GlobalStyle = createGlobalStyle`
    .ant-layout-header {
        padding: 15px;
    }
  `;

  return (
    <Layout>
      <GlobalStyle />
      <Header style={{ backgroundColor: `#fff` }}>
        <Avatar
          style={{ float: "right" }}
          src={"./Assets/Images/github-logo.png"}
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
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            mode="inline"
          >
            <Menu.Item key="1">
              <Link to="/">Getting Started</Link>
            </Menu.Item>
            <SubMenu
              key="sub1"
              icon={<ImGoogle2 size={`24px`} />}
              title="Google"
            >
              <Menu.Item key="2">
                <Link to="/Google?type=Setting">Setting </Link>
              </Menu.Item>
              <Menu.Item key="3">
                <Link to="/Google?type=Login">Login</Link>
              </Menu.Item>
              <Menu.Item key="4">
                <Link to="/Google?type=Logout">Logout</Link>
              </Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              icon={<SiKakaotalk size={`24px`} />}
              title="Kakao"
            >
              <Menu.Item key="5">
                <Link to="/Kakao?type=Setting">Setting </Link>
              </Menu.Item>
              <Menu.Item key="6">
                <Link to="/Kakao?type=Login">Login</Link>
              </Menu.Item>
              <Menu.Item key="7">
                <Link to="/Kakao?type=Logout">Logout</Link>
              </Menu.Item>
              <Menu.Item key="8">
                <Link to="/Kakao?type=Unlink">Unlink</Link>
              </Menu.Item>
            </SubMenu>
            <SubMenu key="sub3" icon={<SiNaver size={`24px`} />} title="Naver">
              <Menu.Item key="9">
                <Link to="/Naver?type=Setting">Setting </Link>
              </Menu.Item>
              <Menu.Item key="10">
                <Link to="/Naver?type=Login">Login</Link>
              </Menu.Item>
              <Menu.Item key="11">
                <Link to="/Naver?type=Logout">Logout</Link>
              </Menu.Item>
            </SubMenu>
            <Menu.Item key="12" icon={<FcSupport size={`24px`} />}>
              Support
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
    </Layout>
  );
};
