import React, { useRef } from "react";
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

class ProfessionalForm extends React.Component {
  constructor(props) {
    super(props);
    const state = {
      name: "",
      description: "",
      experience: "",
      funfact: "",
      q1: " ",
      q2: " ",
      q3: " ",
      q4: " ",
      q5: " ",
      q6: " ",
      q7: " ",
      q8: " ",
      modalShouldDisplay: false,
      openModal: this.openModal,
      closeModal: this.closeModal
    };
    this.state = state;
    this.changeHandler = this.changeHandler.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }
  // Input Change Handler
  changeHandler(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  submitForm() {
    console.log(JSON.stringify(this.state));
  }
  closeModal = () =>{
    this.setState({
      modalShouldDisplay:false
    })
  };
  openModal = () =>{
    this.setState({
      modalShouldDisplay:true
    })
  };

  render() {


    //const valueRef = useRef(""); //creating a refernce for TextField Component

   
    // const sendValue = () => {
    //   return console.log(valueRef.current.value); //on clicking button accesing current value of TextField and outputing it to console
    // };

    return (
      <div>
        <Fab
          onClick={this.openModal}
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
          open={this.state.modalShouldDisplay}
          onClose={this.closeModal}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          sx={styleModal}
        >
          <Box sx={styleBox}>
            <div id="pf_outer">
              <h2>Share your story with &lt;/GOT&gt;!</h2>
              <div id="pf_top">
                <div id="pf_left">
                  <FormComponent
                    title="Hey there, my name is..."
                    placeholder="Enter Your Name"
                    value={this.state.name}
                    onChange={this.changeHandler}
                  />
                  <FormComponent
                    title="I currently am a..."
                    placeholder="Enter Job Title @ Company"
                    value={this.state.description}
                    onChange={this.changeHandler}
                  />
                  <FormComponent
                    title="My hobbies are..."
                    placeholder="Enter your two hobbies"
                    value={this.state.funfact}
                    onChange={this.changeHandler}
                  />
                  <FormComponent
                    title="Years of Experience"
                    placeholder="Enter Your Name"
                    value={this.state.experience}
                    onChange={this.changeHandler}
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
                  value={this.state.q1}
                  onChange={this.changeHandler}
                />
                <FormComponent
                  title="What do you do as X (position) at X(company)?"
                  placeholder=""
                  value={this.state.q2}
                  onChange={this.changeHandler}
                />
                <FormComponent
                  title="What made you intered in and pursue X career?"
                  placeholder=""
                  value={this.state.q3}
                  onChange={this.changeHandler}
                />
                <FormComponent
                  title="How does your company culture align with your own goals and aspirations? "
                  placeholder=""
                  value={this.state.q4}
                  onChange={this.changeHandler}
                />
                <FormComponent
                  title="Any advice on how to stand out and get hired for those starting off?
                  "
                  placeholder=""
                  value={this.state.q5}
                  onChange={this.changeHandler}
                />
                <FormComponent
                  title="What are some must-have resources or skills you would recommend for your industry?"
                  placeholder=""
                  value={this.state.q6}
                  onChange={this.changeHandler}
                />
                <FormComponent
                  title="What was your big down time ( failure) in jobs applying/interviews etc and how did you go through that?"
                  placeholder=""
                  value={this.state.q7}
                  onChange={this.changeHandler}
                />
                <FormComponent
                  title="What was your big down time ( failure) in jobs applying/interviews etc and how did you go through that?"
                  placeholder=""
                  value={this.state.q8}
                  onChange={this.changeHandler}
                />
                <Fab
                  onClick={this.submitForm}
                  sx={{
                    marginTop: 6,
                    marginBottom: 2,
                    fontFamily: "Poppins",
                    backgroundColor: "#FAE1DD",
                  }}
                  variant="extended"
                  size="medium"
                >
                  Submit
                </Fab>
              </div>
            </div>
          </Box>
        </Modal>
      </div>
    );
  }
}

export default ProfessionalForm;
