import React from "react";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EmailList from "./components/emailList/EmailList";
import Mail from "./components/mail/Mail";
import SendMail from "./components/sendMail/SendMail";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <section className="app-body">
          <Sidebar />
          <Routes>
            <Route path="/" element={<EmailList />} />
            <Route path="/mail" element={<Mail />} />
          </Routes>
        </section>
        <SendMail />
      </div>
    </BrowserRouter>
  );
}

export default App;
