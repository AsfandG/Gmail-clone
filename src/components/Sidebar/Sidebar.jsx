import { Button, IconButton } from "@mui/material";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import "./sidebar.css";
import EditIcon from "@mui/icons-material/Edit";
import SidebarOption from "../sidebarOption/SidebarOption";
import InboxIcon from "@mui/icons-material/Inbox";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SendIcon from "@mui/icons-material/Send";
import DescriptionIcon from "@mui/icons-material/Description";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddIcon from "@mui/icons-material/Add";
import { useDispatch } from "react-redux";
import { openSendMessage } from "../../features/mailSlice";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Sidebar = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <main className="sidebar">
      <Button
        startIcon={<EditIcon fontSize="large" />}
        className="sidebar_compose"
        onClick={() => dispatch(openSendMessage())}
      >
        Compose
      </Button>
      <SidebarOption
        Icon={InboxIcon}
        title="Inbox"
        number={10}
        selected={true}
      />
      <SidebarOption Icon={StarBorderIcon} title="Starred" number={15} />
      <SidebarOption Icon={AccessTimeIcon} title="Snoozed" number={2} />
      <SidebarOption Icon={SendIcon} title="Sent" number={23} />
      <SidebarOption Icon={DescriptionIcon} title="Drafts" number={4} />
      <SidebarOption Icon={ExpandMoreIcon} title="More" number={4} />

      <section className="sidebar_footer">
        <label>Labels</label>
        <IconButton>
          <AddIcon onClick={handleOpen} />
        </IconButton>

        {/* Modal start */}
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Text in a modal
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
          </Box>
        </Modal>
        {/* Modal end */}
      </section>
    </main>
  );
};

export default Sidebar;
