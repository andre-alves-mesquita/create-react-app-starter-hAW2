import { Col, Menu, Row } from "antd";
import { items } from "../../../menu";
import { useState } from "react";
import styled from "styled-components";

function SiderLeft() {
  const [collapsed, setCollapsed] = useState(true);
  const onClick = (e) => {
    console.log("click ", e);
  };

  const MenuStyled = styled(Menu)`
    .ant-menu-item:hover {
      color: red;
    }
    .ant-menu-item-selected:active {
      color: red;
    }
    .ant-menu-item-selected {
      color: white;
      background-color: red;
    }
    .ant-menu-item-active {
      background-color: silver;
    }
  `;

  return (
    <>
      <Row
        style={{ backgroundColor: "#241C34", height: "100%" }}
        justify={"center"}
      >
        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
          <MenuStyled
            theme="dark"
            onClick={onClick}
            style={{
              backgroundColor: "#241C34",
              color: "white",
              primaryColor: "red",
            }}
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            mode="inline"
            //inlineCollapsed={collapsed}
            items={items}
          />
        </Col>
      </Row>
    </>
  );
}

export default SiderLeft;
