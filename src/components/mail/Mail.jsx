import { IconButton } from "@mui/material";
import React from "react";
import "./mail.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArchiveIcon from "@mui/icons-material/Archive";
import InfoIcon from "@mui/icons-material/Info";
import DeleteIcon from "@mui/icons-material/Delete";
import EmailIcon from "@mui/icons-material/Email";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import AddTaskIcon from "@mui/icons-material/AddTask";
import DriveFileMoveIcon from "@mui/icons-material/DriveFileMove";
import LabelIcon from "@mui/icons-material/Label";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import KeyboardHideIcon from "@mui/icons-material/KeyboardHide";
import PrintIcon from "@mui/icons-material/Print";
import { useNavigate } from "react-router-dom";

const Mail = () => {
  const navigate = useNavigate();
  return (
    <section className="mail">
      <div className="mail_tools">
        <section className="mail_toolsRight">
          <div className="mail_rightOne">
            <IconButton
              sx={{ marginRight: "20px" }}
              onClick={() => navigate("/")}
            >
              <ArrowBackIcon fontSize="small" />
            </IconButton>

            <IconButton>
              <ArchiveIcon fontSize="small" />
            </IconButton>

            <IconButton>
              <InfoIcon fontSize="small" />
            </IconButton>

            <IconButton>
              <DeleteIcon fontSize="small" />
            </IconButton>
          </div>
          <div className="mail_rightTwo">
            <IconButton>
              <EmailIcon fontSize="small" />
            </IconButton>

            <IconButton>
              <AccessTimeIcon fontSize="small" />
            </IconButton>

            <IconButton>
              <AddTaskIcon fontSize="small" />
            </IconButton>
          </div>
          <div className="mail_rightThree">
            <IconButton>
              <DriveFileMoveIcon fontSize="small" />
            </IconButton>

            <IconButton>
              <LabelIcon fontSize="small" />
            </IconButton>

            <IconButton>
              <MoreVertIcon fontSize="small" />
            </IconButton>
          </div>
        </section>
        <section className="mail_toolsLeft">
          <IconButton>
            <ChevronLeftIcon fontSize="small" />
          </IconButton>
          <IconButton>
            <ChevronRightIcon fontSize="small" />
          </IconButton>
          <IconButton>
            <KeyboardHideIcon fontSize="small" />
          </IconButton>
          <IconButton>
            <PrintIcon fontSize="small" />
          </IconButton>
        </section>
      </div>
      <article className="mail_body">
        <section className="mail_bodyHeader">
          <h3>Subject</h3>
          <p>Title</p>
          <p className="mail_time">8am</p>
        </section>
        <article className="mail_message">
          <p>This will be the actual body of message.</p>
        </article>
      </article>
    </section>
  );
};

export default Mail;
