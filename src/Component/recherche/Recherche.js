import React from "react";
import "./Recherche.css";
import "antd/dist/antd.css";
import { Input } from "antd";
function recherche({ msg }) {
  return (
    <div className="Search">
      <Input.Search size="small" placeholder={msg} width={50} />
    </div>
  );
}
export default recherche;
