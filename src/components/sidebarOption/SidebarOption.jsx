import React from "react";
import "./sidebarOption.css";

const SidebarOption = ({ Icon, title, number, selected }) => {
  return (
    <section className={`sidebarOption ${selected && "option--active"}`}>
      <Icon />
      <h3>{title}</h3>
      <p>{number}</p>
    </section>
  );
};

export default SidebarOption;
