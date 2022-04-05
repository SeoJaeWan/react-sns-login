import { Typography } from "antd";
import React, { useEffect } from "react";
import { Container, H1, H2, MainSection } from "../Style";
import { Link } from "react-router-dom";
import { GoogleLogin, GoogleLogout, GoogleProvider } from "react-sns-login";

export default function GoogleDemo() {
  const { Paragraph, Text } = Typography;

  return (
    <Container>
      <MainSection>
        <H1>Google Login</H1>
        <p>Google Login 기능을 사용할 수 있습니다.</p>
        <p>Google Cloud Platform을 이용해서 얻은 클라이언트 ID가 필요합니다.</p>
        <H2>Setting</H2>
        <p> index.js에서 GoogleProvider를 추가해줍니다.</p>
        <p>
          GoogleProvider에 success와 fail props를 주어서 로그인 성공 및 실패 후
          작업을 추가할 수 있습니다.
        </p>
        <Paragraph>
          <pre>
            {`import React from "react";
import { GoogleProvider } from "react-sns-login";
import App from "./App";

ReactDOM.render(
  <GoogleProvider 
    token={"YOUR GOOGLE KEY"}
    success = {(obj) => console.log(obj)}
    fail = {(err) => console.log(err)}
  >
    <App />
  </GoogleProvider>,
  document.getElementById("root")
);

`}
          </pre>
        </Paragraph>
        <p>
          반드시 index.js에서 호출해야하는 것이 아닌 필요한 곳에서 호출해도
          문제없습니다.
        </p>
        <Paragraph>
          <pre>
            {`import React from "react";
import {
  GoogleLogin,
} from "react-sns-login";

const App = ({}) => {
  return (
    <div>  
      <GoogleProvider 
        token={"YOUR GOOGLE KEY"}
        success = {(obj) => console.log(obj)}
        fail = {(err) => console.log(err)}>
        <GoogleLogin />  
      </GoogleProvider>,
    </div>
  );
};

export default App;
`}
          </pre>
        </Paragraph>
        <H2>Login</H2>
        <p>Login 기능을 구현하기위해서 GoogleLogin을 사용해줍니다.</p>
        <Paragraph>
          <pre>
            {`import React from "react";
import {
  GoogleLogin,
} from "react-sns-login";

const App = ({}) => {
  return (
    <div>
      <GoogleLogin />
    </div>
  );
};

export default App;
`}
          </pre>
        </Paragraph>
        <p>ex)</p>

        <GoogleLogin />

        <br />

        <p>만약 로그인 버튼을 직접 만들 경우 render 함수에 넣어줍니다.</p>

        <Paragraph>
          <pre>
            {`import React from "react";
import {
  GoogleLogin,
} from "react-sns-login";

const App = ({}) => {
  return (
    <div>
      <GoogleLogin 
        render ={() => return <button>구글 로그인</button>}
      />
    </div>
  );
};

export default App;
`}
          </pre>
        </Paragraph>

        <p>ex)</p>
        <GoogleLogin render={() => <button>구글 로그인</button>} />

        <br />

        <H2>Logout</H2>
        <p>로그아웃을 진행할 경우 GoogleLogout 함수를 사용해서 진행한다.</p>

        <Paragraph>
          <pre>
            {`import React from "react";
import {
  GoogleLogout,
} from "react-sns-login";

const App = ({}) => {
  return (
    <div>
      <button onClick={() => GoogleLogout()}>Logout</button>
    </div>
  );
};

export default App;
`}
          </pre>
        </Paragraph>

        <p>ex)</p>
        <button onClick={() => GoogleLogout()}>Logout</button>
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
