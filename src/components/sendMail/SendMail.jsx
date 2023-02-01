import React from "react";
import "./sendMail.css";
import CloseIcon from "@mui/icons-material/Close";
import { Button } from "@mui/material";

const SendMail = () => {
  return (
    <main className="sendMail">
      <section className="sendMail_header">
        <h3>New Message</h3>
        <CloseIcon className="close_sendMail" />
      </section>
      <form>
        <input type="text" placeholder="To" />
        <input type="text" placeholder="Subject" />
        <input type="text" placeholder="Message" className="sendMail_message" />
        <div className="sendMail_option">
          <Button
            variant="contained"
            type="submit"
            size="small"
            sx={{ margin: "10px", textTransform: "capitalize !important" }}
          >
            Send
          </Button>
        </div>
      </form>
    </main>
  );
};

export default SendMail;
