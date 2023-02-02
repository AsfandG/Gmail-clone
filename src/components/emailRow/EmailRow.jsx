import React from "react";
import "./emailRow.css";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";
import { Checkbox, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { selectMail } from "../../features/mailSlice";

const EmailRow = ({ id, title, subject, description, time }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const openMail = () => {
    dispatch(selectMail({ id, title, subject, description, time }));
    navigate("/mail");
  };
  return (
    <section className="emailRow" onClick={openMail}>
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
