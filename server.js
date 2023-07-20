const express = require("express");
const { Server } = require("http");
const app = express();
const sendEmail = require("./utils/sendEmail");
const PORT = process.env.POST || 7000;

// set ejs engine
app.set("view engine", "ejs");

// serve static File

app.use(express.static(__dirname, +"/public"));

// pass data from the form

app.use(express.urlencoded({ extended: false }));

// route
app.get("/", (req, res) => {
  res.render("email_form");
});

// send email
app.post("/send_email", async (req, res) => {
  const { email, message } = req.body;
  try {
    sendEmail(email, message);
    res.render("email_form", {
      status: "success",
      message: "Email send successfully",
    });
  } catch (error) {
    res.render("email_form", {
      status: "error",
      message: "Email not send, Please try again",
    });
  }
});

// listen post
app.listen(PORT, () => {
  console.log(`server is runing on port ${PORT}`);
});
