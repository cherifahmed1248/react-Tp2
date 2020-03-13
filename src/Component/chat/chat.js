import React from "react";
import "antd/dist/antd.css";
import { Menu } from "antd";
import { Badge, Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { Row, Col } from "antd";
function Chat({ pers }) {
  return (
    <Menu
      mode="inline"
      defaultSelectedKeys={["1"]}
      defaultOpenKeys={["sub1"]}
      style={{ height: "100%", textAlign: "left" }}
    >
      {pers.map(project => (
        <Menu.Item>
          <Avatar src={project.src} alt="Personne 1">
            {project.name}
          </Avatar>
          <span style={{ padding: "0 10px 0 5px" }}>
            {project.name}
            <Badge
              status="success"
              style={{
                padding: "0 0 0 5px",
                textAlign: "right",
                float: "right"
              }}
            />
          </span>
        </Menu.Item>
      ))}
    </Menu>
  );
}
export default Chat;
