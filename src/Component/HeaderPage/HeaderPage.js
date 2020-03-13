import React from "react";
import { Menu } from "antd";
import "antd/dist/antd.css";
import "./HeaderPage.css";
import { Avatar } from "antd";

import { Input } from "antd";
import {
  UserOutlined,
  TeamOutlined,
  MessageOutlined,
  QuestionCircleOutlined,
  CaretDownOutlined,
  BellOutlined
} from "@ant-design/icons";
function HeaderPage() {
  return (
    <div id="headerdiv">
      <div style={{ marginTop: "0px" }}>
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAdVBMVEX///9IYqNCXqE6WJ6MmsBzhrfn6vOEkr1GYKI9Wp9AXKB3iLdSaqfEy97IzuB9jbm/x9zO0+P5+vxvgbMzU5xNZ6a7w9qos9GVo8dsf7L09flme7Hu8feuuNOmsdC1vtbd4e2eqsxedK2ToMUtT5rg5O7V2ugXgMXoAAAD2UlEQVR4nO3daXPaMBSF4SCxWGaNY5awFHBa//+f2EBIChPaIlvce2TOO5MvmYHRExvLGDk8PTFWo/XueTbfL9q98aH+Z51jL1+9nlr1u9ojvr2s3LaLxDhrnUtNaq6UnPfxK9vWHvdtZeWPVW5talpJyy/T0R77DS2H42nujCctHmHZm9q0mi4K4aSwFTdeHMLaPnBhubK+x5WohFk7gA9ZWBoXwAcs3AfZgMDCfiggqHC5CrOHwgqXRY0ZPgZhtgoIhBS+hAQiChc2JBBQOAwLxBOuk1DTBKqwH/RFCCgc5oGBcMJB4H0UTrgNfJiBE2bhNyGYMPRMgSfs1L1kgS7sBj+Qognn4d4zgQqL8McZLOH6HjsplHB0hyMplnAR+pQUTri6w1wBJbzHCQ2WsGuaLizvcqBBEt7nUIoknNUQJq2LT/DPd3fX04Z9tal6zmasa00H15sOip027Kt9NaGx/c1uvczenyG7bHn80Wad9VZpwrednfbAb65XRWh/aA/boyrCfKs9ap8qCNNI1judqiBMkI4j/89f6ObaY/argjCiZYeHvIXJSnvInnkLU5zzsdvyF75pD9kzf2FMs/0hb6GjEC0Kvwsjm/AppDCCKKQQPwofUbjRHrJnFFKIH4UU4vcAQt/FJtEJvZfTwF5N7M4OTQ4NT41Go2Hb+6J+kuzfn2FyanZq+9nmo5G8sJXba1VYEJWkZ493V57TOWd/iu/Ld1oY9Nfkz8+lhVb8Y2JxofgLUVqY/2q60C6bLmyJf9YvLEyKpgtNXxooLVRYciMsdPumC+UnfHGh/Jm3tFB8whcWJkZ+3ZTwNhyIn9JIb8NCHCgtfG26UGPtm6xQYcIXFtpZ44XPTRc6+QlfVpik8tOh9GwhD5QVGoUJX1aoshRcVqixBFVUaCdNF+a7xgs1boySFCYDBaCoUOFiqbBQ452FrFDhUuJ7a3d2v/zVO+hv78+jkqvlpYbwafExpumxz/vmi2mFu4CNOT7HBfXiDyD/qcy/2vl/J8BYe8ye9X1XY9ih9pA98171pfH+vVYUUogfhRTiRyGF+FFIIX4UUogfhRTiR+F3ocItTbWiMH7h2Pt6aWxC73tIoxM2fxs2X9j8Iw1fhxTiRyGF+FFIIX4UUogfhRTiRyGF+PkLY1t9SSGF+FFIIX4UUogfhRTiRyGF+FFIIX4UUogfhRTi5y/U+AdCdWq+0P9/KlCIFoUU4kchhfhRSCF+FFKIH4UU4kchhfhRSCF+FD6iUOFbcmrlLXQUokUhhfhR+IDC6Gb8fZ4an1Kl73aoXjZv+6Xy9RxN6TcEoWuF8UF0YwAAAABJRU5ErkJggg=="
          id="fb"
        ></img>
        <div className="HeaderSearch">
          <Input.Search size="default" placeholder="Recherche" />
        </div>
      </div>
      <Menu
        size="small"
        id="headerul"
        theme="dark"
        mode="horizontal"
        style={{ lineHeight: "64px" }}
      >
        <Menu.Item key="1">
          <Avatar src="" alt="ahmed" style={{ margin: "5px" }}>
            ahmed
          </Avatar>
          Ahmed
        </Menu.Item>
        <Menu.Item key="2">Accueil</Menu.Item>
        <Menu.Item key="3">Créer</Menu.Item>
        <Menu.Item key="4">
          <TeamOutlined />
        </Menu.Item>
        <Menu.Item key="5">
          <MessageOutlined />
        </Menu.Item>
        <Menu.Item key="6">
          <BellOutlined />
        </Menu.Item>
        <Menu.Item key="7">
          <QuestionCircleOutlined />
        </Menu.Item>
        <Menu.Item key="8">
          <CaretDownOutlined />
        </Menu.Item>
      </Menu>
    </div>
  );
}
export default HeaderPage;
