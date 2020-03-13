import React from "react";
import "antd/dist/antd.css";
import { Menu } from "antd";
import { TeamOutlined, LockOutlined } from "@ant-design/icons";
import Groupe from "./../groupe/groupe.js";
import Recherche from "./../recherche/Recherche.js";
let groupe = [
  "À propos",
  "Discussion",
  "Membres",
  "Évènements",
  "Photos",
  "Fichiers",
  "Séance vidéo"
];
let page = ["ING2 -INLOG -INREV", "UGET ISAMM", "UGTE ISAMM"];
function Groupes() {
  return (
    <div className="groupes">
      <Menu id="menu">
        <div className="BGgris">
          <h1 style={{ float: "left" }}>
            <a
              id="ingLien"
              href="https://www.facebook.com/groups/118572306251357/"
            >
              2 ING ISAMM 2019/2020
            </a>
          </h1>
          <br />
          <div style={{ float: "left" }}>
            <span>
              <LockOutlined />
              Groupe Privé
            </span>
          </div>
        </div>
        <Menu.Item />
        {groupe.map(project => (
          <Menu.Item>
            <span style={{ float: "left" }}>{project}</span>
          </Menu.Item>
        ))}
        <Recherche msg="chercher dans groupe" />
        <Menu.Item></Menu.Item>
        {page.map(pag => (
          <Menu.Item>
            <span style={{ float: "left" }}>
              <TeamOutlined />
              {pag}
            </span>
          </Menu.Item>
        ))}
      </Menu>
    </div>
  );
}
export default Groupes;
