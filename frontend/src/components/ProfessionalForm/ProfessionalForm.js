
import React, { useReducer } from "react";
import { Button, Icon, TextField, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fab from "@mui/material/Fab";
import FormComponent from "../FormComponent/FormComponent.js";
import "./ProfessionalForm.css";
import mailbox from "../../assets/graphics/mailbox.gif";

const styleBox = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "70%",
  height: "70%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  overflow: "scroll",
};
const styleModal = {
  height: "100%",
  width: "100%",
};
export default function ProfessionalForm(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
    },
    leftIcon: {
      marginRight: theme.spacing(1),
    },
    rightIcon: {
      marginLeft: theme.spacing(1),
    },
    iconSmall: {
      fontSize: 20,
    },
    root: {
      padding: theme.spacing(3, 2),
    },
    container: {
      display: "flex",
      flexWrap: "wrap",
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 400,
    },
  }));

  const [formInput, setFormInput] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      careerID:"softwareengineer",
      name: "",
      description: "",
      experience: "",
      funfact: "",
      q1: "",
      q2: "",
      q3: "",
      q4: "",
      q5: "",
      q6: "",
      q7: "",
      q8: "",
    }
  )

  const handleSubmit = (evt) => {
    evt.preventDefault();

    let data = formInput;
    console.log(JSON.stringify(data));
    handleClose();
    fetch("/api/stories/create", {
      method: "POST",
      body: JSON.stringify(data["formInput"]),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(response => console.log("Success:", JSON.stringify(response)))
      .catch(error => console.error("Error:", error));
  };

  const handleInput = (evt) => {
    const name = evt.target.name;
    const newValue = evt.target.value;
    setFormInput({ [name]: newValue });
  };

  const classes = useStyles();

  console.log(props);

  return (
    <div>
      <Fab
        onClick={handleOpen}
        sx={{
          marginTop: 2,
          marginBottom: 4,
          marginLeft: 150,
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
          <div id="pf_outer">
          <form onSubmit={handleSubmit}>
            <h2>Share your story with &lt;/GOT&gt;!</h2>
            <div id="pf_top">
              <div id="pf_left">
                 <FormComponent
                  title="Hey there, my name is..."
                  placeholder="Enter Your Name"
                  onChange={handleInput}
                  name="name"
                  defaultValue={formInput.name} 
                /> 
                <FormComponent
                  title="I currently am a..."
                  placeholder="Enter Job Title @ Company"
                  onChange={handleInput}
                  name="description"
                  defaultValue={formInput.description} 

                />
                <FormComponent
                  title="My hobbies are..."
                  placeholder="Enter your two hobbies"
                  onChange={handleInput}
                  name="funfact"
                  defaultValue={formInput.funfact} 

                />
                <FormComponent
                  title="Years of Experience"
                  placeholder="Enter Your Name"
                  onChange={handleInput}
                  name="experience"
                  defaultValue={formInput.experience} 

                />
              </div>
              <div id="pf_right">
                <img
                  id="mailbox"
                  height="500vmin"
                  src={mailbox}
                  alt="mailbox"
                />
              </div>
            </div>

            <div id="pf_bottom">
              <h2>Let's move onto the fun part!</h2>
              <FormComponent
                title="A little bit about yourself:"
                placeholder=""
                onChange={handleInput}
                name="q1"
                defaultValue={formInput.q1} 

              />
              <FormComponent
                title="What do you do as X (position) at X(company)?"
                placeholder=""
                onChange={handleInput}
                name="q2"
                defaultValue={formInput.q2} 

              />
              <FormComponent
                title="What made you interested in and pursue X career?"
                placeholder=""
                onChange={handleInput}
                name="q3"
                defaultValue={formInput.q3} 

              />
              {/* <FormComponent
                title="How does your company culture align with your own goals and aspirations? "
                placeholder=""
                onChange={handleInput}
                name="q4"
                defaultValue={formInput.q4} 

              /> */}
              <FormComponent
                title="Any advice on how to stand out and get hired for those starting off"
                placeholder=""
                onChange={handleInput}
                name="q5"
                defaultValue={formInput.q5} 

              />
              <FormComponent
                title="What are some must-have resources or skills you would recommend for your industry?"
                placeholder=""
                onChange={handleInput}
                name="q6"
                defaultValue={formInput.q6} 

              />
              {/* <FormComponent
                title="What was your big down time ( failure) in jobs applying/interviews etc and how did you go through that?"
                placeholder=""
                onChange={handleInput}
                name="q7"
                defaultValue={formInput.q7} 

              />
              <FormComponent
                title="What was your big down time ( failure) in jobs applying/interviews etc and how did you go through that?"
                placeholder=""
                onChange={handleInput}
                name="q8"
                defaultValue={formInput.q8} 

              /> */}
              <Button
                type="submit"
                variant="text"
                color="#F8DCD0"
              >
                Subscribe 
              </Button>
            </div>
          </form>
          </div>
        </Box>
      </Modal>

    </div>
  );
}
