import { Anchor, Typography } from "antd";
import React from "react";
import { Container, H1, H2, H3, MainSection } from "../Style";
import { KakaoLogin, KakaoLogout, KakaoUnlink } from "react-sns-login";

const { Paragraph } = Typography;
const { Link } = Anchor;

export default function Kakao({}) {
  return (
    <Container>
      <MainSection>
        <H1 id="Info">Kakao Login</H1>
        <p>Kakao Login 기능을 사용할 수 있습니다.</p>
        <p>Kakao 개발자 센터를 이용해서 얻은 JavaScript Key가 필요합니다.</p>

        <H2 id="Login">Login</H2>
        <H3 id="Basic Login">Basic Login</H3>
        <p>Login 기능을 구현하기위해서 KakaoLogin을 사용해줍니다.</p>
        <Paragraph>
          <pre>
            {`import React from "react";
import {
  KakaoLogin,
} from "react-sns-login";

const App = ({}) => {
  return (
    <KakaoLogin token={"YOUR KAKAO KEY"} />
  );
};

export default App;
`}
          </pre>
        </Paragraph>
        <p style={{ cursor: "pointer" }} onClick={() => setLoginActive("1")}>
          ex)
        </p>

        <KakaoLogin token={process.env.KAKAO_KEY} />

        <br />

        <H3 id="Custom Login">Custom Login</H3>

        <p>만약 로그인 버튼을 직접 만들 경우 render 함수에 넣어줍니다.</p>

        <Paragraph>
          <pre>
            {`import React from "react";
import {
  KakaoLogin,
} from "react-sns-login";

const App = ({}) => {
  return (
    <KakaoLogin 
      token={"YOUR KAKAO KEY"} 
      render ={() => return <button>카카오 로그인</button>}
    />
  );
};

export default App;
`}
          </pre>
        </Paragraph>

        <p style={{ cursor: "pointer" }}>ex)</p>

        <KakaoLogin
          token={process.env.KAKAO_KEY}
          render={() => <button>카카오 로그인</button>}
        />

        <br />

        <H3 id="Login Callback">Login Callback</H3>

        <p>
          로그인 완료 및 실패 시 Callback을 통해서 특정한 작업을 수행할 수
          있습니다.
        </p>

        <Paragraph>
          <pre>
            {`import React from "react";
import {
  KakaoLogin,
} from "react-sns-login";

const App = ({}) => {
  const successHandler = (data) => {
    console.log(data);
  }

  const failHandler = (err) => {
    console.log(err)
  }

  return (
    <KakaoLogin 
      token={"YOUR KAKAO KEY"} 
      success = {successHandler}
      fail = {failHandler}
      render ={() => return <button>카카오 로그인</button>}
    />
  );
};

export default App;
`}
          </pre>
        </Paragraph>

        <p style={{ cursor: "pointer" }}>ex)</p>

        <KakaoLogin
          token={process.env.KAKAO_KEY}
          success={(data) => {
            console.log(data);
          }}
          fail={(err) => {
            console.log(err);
          }}
          render={() => <button>카카오 로그인</button>}
        />

        <br />

        <H2 id="Logout">Logout</H2>
        <p>로그아웃을 진행할 경우 KakaoLogout 함수를 사용해서 진행한다.</p>

        <Paragraph>
          <pre>
            {`import React from "react";
import {
  KakaoLogout,
} from "react-sns-login";

const App = ({}) => {
  return (
    <div>
      <button onClick={() => KakaoLogout()}>Logout</button>
    </div>
  );
};

export default App;
`}
          </pre>
        </Paragraph>

        <p style={{ cursor: "pointer" }}>ex)</p>
        <button onClick={() => KakaoLogout()}>Logout</button>

        <br />

        <H2 id="UnLink">UnLink</H2>

        <p>
          카카오 로그인의 경우 어플리케이션과 카카오 계정의 연결을 끊어 회원
          탈퇴시 같이 처리가 가능합니다.
        </p>

        <Paragraph>
          <pre>
            {`import React from "react";
import {
  KakaoUnlink,
} from "react-sns-login";

const App = ({}) => {
  return (
    <div>
      <button onClick={() => KakaoUnlink()}>Unlink</button>
    </div>
  );
};

export default App;
`}
          </pre>
        </Paragraph>

        <p style={{ cursor: "pointer" }}>ex)</p>

        <button onClick={() => KakaoUnlink()}>Unlink</button>

        <div style={{ position: "absolute", top: "18px", right: "45px" }}>
          <Anchor affix={true} style={{ float: "right" }}>
            <Link href="#Info" title="Kakao" />
            <Link href="#Login" title="Login">
              <Link href="#Basic Login" title="Basic Login" />
              <Link href="#Custom Login" title="Custom Login" />
              <Link href="#Login Callback" title="Login Callback" />
            </Link>
            <Link href="#Logout" title="Logout" />
            <Link href="#UnLink" title="UnLink" />
          </Anchor>
        </div>
      </MainSection>
    </Container>
  );
}
