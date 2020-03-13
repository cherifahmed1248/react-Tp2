import React from "react";
import "antd/dist/antd.css";
import {
  SettingOutlined,
  FormOutlined,
  UsergroupAddOutlined
} from "@ant-design/icons";
import Recherche from "../../Component/recherche/Recherche";

function SearchChat({}) {
  return (
    <div style={{ marginBottom: "-50px" }}>
      <Recherche msg="Rechercher" id="chatSearch" />
      <SettingOutlined />
      <FormOutlined />
      <UsergroupAddOutlined />
    </div>
  );
}
export default SearchChat;
