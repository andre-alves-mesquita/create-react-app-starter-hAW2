import React from "react";
import RoutesMap from "./routes/";
import { Route, Routes } from "react-router-dom";
import { Menu, Row, Col, Image } from "antd";
import Footer from "./views/layout/footer";
import SiderRight from "./views/layout/siderRight";
import Header from "./views/layout/headerCenter";
import SiderLeft from "./views/layout/siderLeft";
import HeaderStart from "./views/layout/headerStart";
import HeaderEnd from "./views/layout/headerEnd";

function App() {
  return (
    <>
      <Row
        style={{
          textAlign: "center",
          height: "10vh",
        }}
        justify={"center"}
      >
        <Col
          xs={4}
          sm={4}
          md={4}
          lg={4}
          xl={4}
          style={{
            backgroundColor: "#241C34",
            justifyContent: "center",
            display: "flex",
          }}
        >
          <HeaderStart></HeaderStart>
        </Col>
        <Col xs={16} sm={16} md={16} lg={16} xl={16}>
          <Header></Header>
        </Col>
        <Col
          xs={4}
          sm={4}
          md={4}
          lg={4}
          xl={4}
          style={{
            backgroundColor: "#241C34",
            justifyContent: "center",
            display: "flex",
            alignItems: "center",
          }}
        >
          <HeaderEnd></HeaderEnd>
        </Col>
      </Row>
      <Row
        style={{
          textAlign: "center",
          height: "100%",
          minHeight: "80vh",
        }}
      >
        <Col xs={4} sm={4} md={4} lg={4} xl={4}>
          <SiderLeft></SiderLeft>
        </Col>
        <Col xs={16} sm={16} md={16} lg={16} xl={16}>
          <Row justify={"center"}>
            <Col xs={20} sm={20} md={20} lg={20} xl={20}>
              <Routes>
                {RoutesMap.map((rota, index) => {
                  return <Route key={index} {...rota}></Route>;
                })}
              </Routes>
            </Col>
          </Row>
        </Col>
        <Col xs={4} sm={4} md={4} lg={4} xl={4}>
          <SiderRight></SiderRight>
        </Col>
      </Row>

      <Row
        style={{
          textAlign: "center",
          height: "10vh",
        }}
      >
        <Footer></Footer>
      </Row>
    </>
  );
}

export default App;

const headerStyle = {
  color: "black",
  backgroundColor: "#fff",
  minHeight: "10vh",
};
const contentStyle = {
  textAlign: "center",
  minHeight: "80vh",
  color: "black",
};
const siderStyle = {
  textAlign: "center",
  lineHeight: "120px",
  color: "#fff",
  backgroundColor: "#fff",
};
const footerStyle = {
  textAlign: "center",
  color: "black",
  backgroundColor: "#fff",
  minHeight: "10vh",
};
