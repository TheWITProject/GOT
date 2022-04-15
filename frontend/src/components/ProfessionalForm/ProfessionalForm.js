import React, { useRef } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fab from "@mui/material/Fab";
import FormComponent from "../FormComponent/FormComponent.js";
import "./ProfessionalForm.css";
import mailbox from "../../assets/graphics/mailbox.gif"

const styleBox = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "60%",
  height: "70%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  overflow: "scroll",
};
const styleModal = {
  overflow: "scroll",
  height: "100%",
};

export default function Login() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const valueRef = useRef(""); //creating a refernce for TextField Component

  const sendValue = () => {
    return console.log(valueRef.current.value); //on clicking button accesing current value of TextField and outputing it to console
  };

  return (
    <div>
      <Fab
        onClick={handleOpen}
        sx={{
          marginTop: 6,
          marginBottom: 2,
          fontFamily: "Poppins",
          backgroundColor: "#FAE1DD",
        }}
        variant="extended"
        size="medium"
      >
        Share Your Story
      </Fab>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={styleModal}
      >
        <Box sx={styleBox}>
          <div id="outer">
            <h2>
              Share your story to be posted on &lt;/GOT&gt;! We will review each
              story after you submit !
            </h2>
            <div id="top">
              <div id="left">
                <FormComponent
                  title="Hey there, my name is..."
                  placeholder="Enter Your Name"
                />
                <FormComponent
                  title="I currently am a..."
                  placeholder="Enter Job Title @ Company"
                />
                <FormComponent
                  title="Checkout my LinkedIn at..."
                  placeholder="Enter Your LinkedIn URL Here"
                />
                <FormComponent
                  title="My hobbies are..."
                  placeholder="Enter your two hobbies"
                />
                <FormComponent
                  title="Years of Experience"
                  placeholder="Enter Your Name"
                />
              </div>
              <div id="right">
                <img id ="mailbox"height="500vmin" src={mailbox} alt="mailbox" />
              </div>
            </div>

            <div id="bottom">
              <h2>Let's move onto the fun part!</h2>
              <FormComponent
                  title="A little bit about yourself:"
                  placeholder=""
                />
                <FormComponent
                  title="What do you do as X (position) at X(company)?"
                  placeholder=""
                />
                <FormComponent
                  title="What made you intered in and pursue X career?"
                  placeholder=""
                />
                <FormComponent
                  title="How does your company culture align with your own goals and aspirations? "
                  placeholder=""
                />
                <FormComponent
                  title="Any advice on how to stand out and get hired for those starting off?
                  "
                  placeholder=""
                />
                <FormComponent
                  title="What are some must-have resources or skills you would recommend for your industry?" 
                  placeholder=""
                />
                <FormComponent
                  title="What was your big down time ( failure) in jobs applying/interviews etc and how did you go through that?"
                  placeholder=""
                />
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
