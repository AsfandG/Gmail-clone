import React from "react";
import "./sendMail.css";
import CloseIcon from "@mui/icons-material/Close";
import { Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { closeSendMessage } from "../../features/mailSlice";

const SendMail = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <main className="sendMail">
      <section className="sendMail_header">
        <h3>New Message</h3>
        <CloseIcon
          className="close_sendMail"
          onClick={() => dispatch(closeSendMessage())}
        />
      </section>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="To"
          {...register("to", { required: true })}
        />
        {errors.to && <p>This field is required!</p>}
        <input
          type="text"
          placeholder="Subject"
          {...register("subject", { required: true })}
        />
        {errors.subject && <p>This field is required!</p>}
        <input
          type="text"
          name="message"
          placeholder="Message"
          className="sendMail_message"
          {...register("message", { required: true })}
        />
        {errors.message && <p>This field is required!</p>}
        <div className="sendMail_option">
          <Button
            variant="contained"
            size="small"
            sx={{ margin: "10px", textTransform: "capitalize !important" }}
            type="submit"
          >
            Send
          </Button>
        </div>
      </form>
    </main>
  );
};

export default SendMail;
