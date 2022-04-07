import { Anchor, Typography } from "antd";
import React, { useEffect } from "react";
import { Container, H1, H2, H3, MainSection } from "../Style";
import {
  NaverLogin,
  NaverLogout,
  NaverCallback,
  getNaverInfo,
} from "react-sns-login";
import { useLocation } from "react-router-dom";
import queryString from "query-string";

const { Paragraph } = Typography;
const { Link } = Anchor;

export default function NaverDemo({}) {
  const location = useLocation();
  const query = queryString.parse(location.search);

  useEffect(() => {
    const userData = getNaverInfo();

    if (userData) {
      console.log(userData);
    }

    if (query.naver) {
      NaverCallback();
    }
  }, [location]);

  return (
    <Container>
      <MainSection>
        <H1 id="Info">Naver Login</H1>
        <p>Naver Login 기능을 사용할 수 있습니다.</p>
        <p>네이버 개발자 센터를 이용해서 얻은 클라이언트 ID가 필요합니다.</p>

        <H2 id="Login">Login</H2>
        <H3 id="Basic Login">Basic Login</H3>
        <p>Login 기능을 구현하기위해서 NaverLogin을 사용해줍니다.</p>
        <Paragraph>
          <pre>
            {`import React from "react";
import {
  NaverLogin,
  NaverCallback
} from "react-sns-login";
import queryString from "query-string";
import { useLocation } from "react-router-dom";

const App = ({}) => {
  const location = useLocation();
  const query = queryString.parse(location.search);

  useEffect(() => {
    const userData = getNaverInfo();

    if (userData) {
      console.log(userData);
    }

    if (query.naver) {
      NaverCallback();
    }
  }, [location]);

  return (
    <NaverLogin
      token={"YOUR NAVER KEY"}
      callbackUrl={"YOUR CALLBACK URL"}
     />
  );
};

export default App;
`}
          </pre>
        </Paragraph>
        <p style={{ cursor: "pointer" }} onClick={() => setLoginActive("1")}>
          ex)
        </p>

        <NaverLogin
          token={process.env.NAVER_KEY}
          callbackUrl={"http://localhost:8080/Naver"}
        />

        <br />

        <H3 id="Custom Login">Custom Login</H3>

        <p>만약 로그인 버튼을 직접 만들 경우 render 함수에 넣어줍니다.</p>

        <Paragraph>
          <pre>
            {`import React from "react";
import {
  NaverLogin,
  NaverCallback
} from "react-sns-login";
import queryString from "query-string";
import { useLocation } from "react-router-dom";

const App = ({}) => {
  const location = useLocation();
  const query = queryString.parse(location.search);

  useEffect(() => {
    const userData = getNaverInfo();

    if (userData) {
      console.log(userData);
    }

    if (query.naver) {
      NaverCallback();
    }
  }, [location]);

  return (
    <NaverLogin
      token={"YOUR NAVER KEY"}
      callbackUrl={"YOUR CALLBACK URL"}
      render={() => <button>네이버 로그인</button>}
     />
  );
};

export default App;
`}
          </pre>
        </Paragraph>

        <p style={{ cursor: "pointer" }}>ex)</p>

        <NaverLogin
          token={process.env.NAVER_KEY}
          callbackUrl={"http://localhost:8080/Naver"}
          render={() => <button>네이버 로그인</button>}
        />

        <br />

        <H3 id="Login Callback">Login Callback</H3>

        <p>
          로그인 완료 userData를 useEffect에서 조회할 수 있어 특정한 작업을
          수행할 수 있다.
        </p>

        <Paragraph>
          <pre>
            {`import React from "react";
import {
  NaverLogin,
  NaverCallback
} from "react-sns-login";
import queryString from "query-string";
import { useLocation } from "react-router-dom";

const App = ({}) => {
  const location = useLocation();
  const query = queryString.parse(location.search);

  useEffect(() => {
    const userData = getNaverInfo();

    if (userData) {
      console.log(userData);

      ...

      anyThing   < --------

      ...
    }

    if (query.naver) {
      NaverCallback();
    }
  }, [location]);

  return (
    <NaverLogin
      token={"YOUR NAVER KEY"}
      callbackUrl={"YOUR CALLBACK URL"}
      render={() => <button>네이버 로그인</button>}
     />
  );
};

export default App;
`}
          </pre>
        </Paragraph>

        <br />

        <H2 id="Logout">Logout</H2>
        <p>로그아웃을 진행할 경우 NaverLogout 함수를 사용해서 진행한다.</p>

        <Paragraph>
          <pre>
            {`import React from "react";
import {
  NaverLogout,
} from "react-sns-login";

const App = ({}) => {
  return (
    <div>
      <button onClick={() => NaverLogout()}>Logout</button>
    </div>
  );
};

export default App;
`}
          </pre>
        </Paragraph>

        <p style={{ cursor: "pointer" }}>ex)</p>
        <button onClick={() => NaverLogout()}>Logout</button>

        <div style={{ position: "absolute", top: "18px", right: "45px" }}>
          <Anchor affix={true} style={{ float: "right" }}>
            <Link href="#Info" title="Naver" />
            <Link href="#Login" title="Login">
              <Link href="#Basic Login" title="Basic Login" />
              <Link href="#Custom Login" title="Custom Login" />
              <Link href="#Login Callback" title="Login Callback" />
            </Link>
            <Link href="#Logout" title="Logout" />
          </Anchor>
        </div>
      </MainSection>
    </Container>
  );
}
