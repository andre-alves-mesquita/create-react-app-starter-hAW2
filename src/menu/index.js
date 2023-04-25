import {
  AppstoreOutlined,
  BugOutlined,
  HomeOutlined,
  MailOutlined,
  OrderedListOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

export const items = [
  getItem("Calabouços", "sub1", <HomeOutlined />, [
    getItem("Níveis 0-50", "1"),
    getItem("Níveis 51-100", "2"),
    getItem("Níveis 101-150", "3"),
    getItem("Níveis 150-190", "4"),
    getItem("Níveis 191-200", "5"),
  ]),
  // {
  //   type: "divider",
  // },
  getItem("Tocas", "sub2", <HomeOutlined />, [
    getItem("Níveis 0-50", "1"),
    getItem("Níveis 51-100", "2"),
    getItem("Níveis 101-150", "3"),
    getItem("Níveis 150-190", "4"),
    getItem("Níveis 191-200", "5"),
  ]),
  getItem("Montarias", "sub3", <HomeOutlined />, [
    getItem("Criação", "1"),
    getItem("Tipos", "2"),
  ]),
  getItem(
    "Npcs",
    "15",
    <Link to={"/home"}>
      <BugOutlined />
    </Link>
  ),

  getItem(
    "Tutoriais",
    "16",
    <Link to={"/"}>
      <OrderedListOutlined />
    </Link>
  ),
];
