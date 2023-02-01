import React from "react";
import "./emailRow.css";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";
import { Checkbox, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";

const EmailRow = ({ id, title, subject, description, time }) => {
  const navigate = useNavigate();
  return (
    <section className="emailRow" onClick={() => navigate("/mail")}>
      <article className="emailRow_options">
        <Checkbox size="small" />
        <IconButton size="small">
          <StarBorderIcon />
        </IconButton>
        <IconButton size="small">
          <LabelImportantIcon />
        </IconButton>
      </article>
      <h3 className="emailRow_title">{title}</h3>
      <article className="emailRow_message">
        <h5>
          {subject}{" "}
          <span className="emailRow_description"> - {description}</span>
        </h5>
      </article>
      <p className="emailRow_time">{time}</p>
    </section>
  );
};

export default EmailRow;
