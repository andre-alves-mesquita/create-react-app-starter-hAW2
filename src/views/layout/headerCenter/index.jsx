import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Col, Menu, Row } from "antd";
import { useState } from "react";

const items = [
  {
    label: "O jogo",
    key: "mail",
    icon: <MailOutlined />,
  },
  {
    label: "Notícias",
    key: "app",
    icon: <AppstoreOutlined />,
  },
  {
    label: "Enciclopédia",
    key: "SubMenu",
    icon: <SettingOutlined />,
    children: [
      {
        type: "group",
        label: "Item 1",
        children: [
          {
            label: "Option 1",
            key: "setting:1",
          },
          {
            label: "Option 2",
            key: "setting:2",
          },
        ],
      },
    ],
  },
];

function Header() {
  const [current, setCurrent] = useState("mail");
  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };
  return (
    <>
      <Row
        style={{
          width: "100%",
          backgroundColor: "#241C34",
          height: "100%",
          alignItems: "end",
        }}
        justify={"center"}
      >
        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
          <Menu
            onClick={onClick}
            selectedKeys={[current]}
            mode="horizontal"
            items={items}
            theme="dark"
            style={{
              backgroundColor: "#241C34",
              display: "flex",
              justifyContent: "center",
            }}
          />
        </Col>
      </Row>
    </>
  );
}

export default Header;
