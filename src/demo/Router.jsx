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
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
  BookOutlined,
} from "@ant-design/icons";

import "antd/dist/antd.css";

const { SubMenu } = Menu;
const { Header, Content, Sider, Footer } = Layout;
const { Title, Text } = Typography;

export default () => {
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
          React SNS Login <BookOutlined />
        </Title>
      </Header>
      <Layout>
        <Sider>
          <Menu
            onClick={() => {}}
            style={{ width: 256 }}
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            mode="inline"
          >
            <Menu.Item key="1">Getting Started</Menu.Item>
            <SubMenu
              key="sub1"
              icon={<ImGoogle2 size={`24px`} />}
              title="Google"
            >
              <Menu.Item key="2">Setting</Menu.Item>
              <Menu.Item key="3">Login</Menu.Item>
              <Menu.Item key="4">Logout</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              icon={<SiKakaotalk size={`24px`} />}
              title="Kakao"
            >
              <Menu.Item key="5">Setting</Menu.Item>
              <Menu.Item key="6">Login</Menu.Item>
              <Menu.Item key="7">Logout</Menu.Item>
              <Menu.Item key="8">Unlink</Menu.Item>
            </SubMenu>
            <SubMenu key="sub3" icon={<SiNaver size={`24px`} />} title="Naver">
              <Menu.Item key="9">Setting</Menu.Item>
              <Menu.Item key="10">Login</Menu.Item>
              <Menu.Item key="11">Logout</Menu.Item>
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
      <Footer>Footer</Footer>
    </Layout>
  );
};
