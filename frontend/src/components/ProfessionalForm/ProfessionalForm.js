import React, { useRef } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fab from "@mui/material/Fab";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

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
  overflow:'scroll',
};
const styleModal ={
  overflow:'scroll',
  height:'100%',
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
        sx={{ marginTop: 6, marginBottom: 2, fontFamily: "Poppins", backgroundColor: "#FAE1DD", }}
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
              <h2>Share your story to be posted on &lt;/GOT&gt;! We will review each story after you submit !   </h2>
          
            
          </div>
        </Box>
        
      </Modal>
    </div>
  );
}
