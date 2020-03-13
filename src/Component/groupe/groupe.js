import React from "react";
import "antd/dist/antd.css";
import { Menu } from "antd";

function Groupe(props) {
  return (
    <div>
      <Menu.Item>
        <span style={{ float: "left" }}>{props.group}</span>
      </Menu.Item>
    </div>
  );
}
export default Groupe;
