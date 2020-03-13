import React from "react";
import "./App.css";
import "antd/dist/antd.css";
import { Layout, Menu, Badge, Avatar } from "antd";

import { Row, Col } from "antd";
import Groupes from "./Component/groupes/groupes";
import Chat from "./Component/chat/chat.js";
import HeaderPage from "./Component/HeaderPage/HeaderPage";
import SearchChat from "./Component/searchChat/searchChat";
import Create_statut from "./Component/create_statut/create_statut";

const { Header, Content, Sider, Footer } = Layout;
let personne = [
  { name: "ahmed", src: "" },
  {
    name: "amir",
    src: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
  },
  {
    name: "cherif",
    src: "https://avatars1.githubusercontent.com/u/8186664?s=40&v=4"
  },
  {
    name: "mekki",
    src: "https://avatars0.githubusercontent.com/u/7971415?s=40&v=4"
  },
  { name: "personne1", src: "" },
  {
    name: "personne 2",
    src: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
  },
  {
    name: "personne 3",
    src: "https://avatars1.githubusercontent.com/u/8186664?s=40&v=4"
  },
  {
    name: "personne 4",
    src: "https://avatars0.githubusercontent.com/u/7971415?s=40&v=4"
  },
  { name: "personne 5", src: "" },
  {
    name: "personne 6",
    src: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
  },
  {
    name: "personne 7",
    src: "https://avatars1.githubusercontent.com/u/8186664?s=40&v=4"
  },
  {
    name: "personne 8",
    src: "https://avatars0.githubusercontent.com/u/7971415?s=40&v=4"
  }
];
function App() {
  return (
    <div className="App">
      <Header id="header">
        <HeaderPage />
      </Header>
      <Layout>
        <Content style={{ padding: "0 50px" }}>
          <Layout style={{ padding: "24px 0" }}>
            <Sider width={200} id="barreLeft">
              <Groupes />
            </Sider>
            <Content style={{ padding: "0 100px 0 30px", minHeight: 600 }}>
              <Create_statut />
            </Content>
          </Layout>
        </Content>
        <Sider className="site-layout-background" width={200} id="chatbarre">
          <Chat pers={personne} />
          <SearchChat />
        </Sider>
      </Layout>
    </div>
  );
}

export default App;
