import { Image } from "antd";
import ImageLike from "./../../../assets/img/polegar-para-cima.png";

function HeaderEnd() {
  return (
    <Image
      src={ImageLike}
      style={{ width: 20, height: 20 }}
      preview={false}
    ></Image>
  );
}

export default HeaderEnd;
