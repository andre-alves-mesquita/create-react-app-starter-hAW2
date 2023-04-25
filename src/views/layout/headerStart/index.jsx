import { Image } from "antd";
import ImageLogo from "./../../../assets/img/Logo_dofus.png";

function HeaderStart() {
  return (
    <Image src={ImageLogo} preview={false} style={{ maxWidth: 100 }}></Image>
  );
}

export default HeaderStart;
