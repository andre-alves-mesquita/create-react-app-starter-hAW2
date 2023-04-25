import { Col, Row } from "antd";

function Footer() {
  return (
    <>
      <Row
        justify={"center"}
        style={{
          backgroundColor: "#3C2B60",
          width: "100%",
          color: "white",
          alignContent: "space-around",
        }}
      >
        <Col xs={6} sm={6} md={6} lg={6} xl={6}>
          Design by: André A. Mesquita ❤
        </Col>
      </Row>
    </>
  );
}

export default Footer;
