import React, { useState, useEffect } from "react";
import "./list.css";
import Checkbox from "@mui/material/Checkbox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { IconButton } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import RefreshIcon from "@mui/icons-material/Refresh";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import KeyboardHideIcon from "@mui/icons-material/KeyboardHide";
import InboxIcon from "@mui/icons-material/Inbox";
import Section from "../section/Section";
import PeopleIcon from "@mui/icons-material/People";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import EmailRow from "../emailRow/EmailRow";
import { db } from "../../firebase";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";

const EmailList = () => {
  const [emails, setEmails] = useState([]);
  useEffect(() => {
    const collectionRef = collection(db, "emails");
    const q = query(collectionRef, orderBy("timestamp", "desc"));
    const unsub = onSnapshot(q, (snapshot) => {
      setEmails(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });

    return unsub;
  }, []);

  console.log("emails >>>", emails);
  return (
    <div className="emailList">
      <section className="emailList_settings">
        <section className="emailList_settingsLeft">
          <span className="box">
            <Checkbox size="small" />
            <IconButton size="small">
              <ArrowDropDownIcon />
            </IconButton>
          </span>
          <IconButton size="small">
            <RefreshIcon />
          </IconButton>
          <IconButton size="small">
            <MoreVertIcon />
          </IconButton>
        </section>
        <section className="emailList_settingsRight">
          <IconButton>
            <ChevronLeftIcon />
          </IconButton>
          <IconButton>
            <ChevronRightIcon />
          </IconButton>
          <IconButton>
            <KeyboardHideIcon />
          </IconButton>
        </section>
      </section>
      <sections className="emailList_sections">
        <Section Icon={InboxIcon} title="Primary" color="blue" selected />
        <Section Icon={LocalOfferIcon} title="Promotions" color="blue" />
        <Section Icon={PeopleIcon} title="Social" color="blue" />
      </sections>

      <section className="emailList_list">
        {emails.map(({ id, data: { to, subject, message, timestamp } }) => (
          <EmailRow
            key={id}
            id={id}
            title={to}
            subject={subject}
            description={message}
            time={new Date(timestamp?.seconds * 1000).toUTCString()}
          />
        ))}
      </section>
    </div>
  );
};

export default EmailList;
