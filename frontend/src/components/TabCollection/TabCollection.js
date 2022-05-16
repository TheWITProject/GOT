import * as React from "react";
import { styled } from "@mui/system";
import TabsUnstyled from "@mui/base/TabsUnstyled";
import TabsListUnstyled from "@mui/base/TabsListUnstyled";
import TabPanelUnstyled from "@mui/base/TabPanelUnstyled";
import { buttonUnstyledClasses } from "@mui/base/ButtonUnstyled";
import TabUnstyled, { tabUnstyledClasses } from "@mui/base/TabUnstyled";
import CareerOverview from "../../main_pages/CareerOverview.js";
import CardGrid from "../CardGrid/CardGrid.js";
import ProfessionalForm from "../ProfessionalForm/ProfessionalForm.js";
import Modal from "@mui/material/Modal";
import ProfessionalStory from "../ProfessionalStory.js"
import DiscussionPage from '../../main_pages/DiscussionPage';
import Box from "@mui/material/Box";




const blue = {
  50: "#E0E2E5",
  100: "#FAE1DD",
  200: "#FAE1DD",
  300: "#FAE1DD",
  400: "#FAE1DD",
  500: "#FAE1DD",
  600: "#BEBEBE", // dont change
  700: "#FAE1DD",
  800: "#FAE1DD",
  900: "#FAE1DD",
};
const modalstyle = {
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

const Tab = styled(TabUnstyled)`
  font-family: Poppins;
  color: black;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: bold;
  background-color: #fae1dd;
  width: 100%;
  padding: 12px 16px;
  margin: 12px 12px;
  border: none;
  border-radius: 30px;
  display: flex;
  justify-content: center;

  &:hover {
    background-color: ${blue[400]};
  }

  &:focus {
    color: black;
    border-radius: 20px;
    outline: 2px solid ${blue[200]};
    outline-offset: 2px;
  }

  &.${tabUnstyledClasses.selected} {
    background-color: ${blue[50]};
    color: black;
  }

  &.${buttonUnstyledClasses.disabled} {
    opacity: 1;
    cursor: not-allowed;
  }
`;

const TabPanel = styled(TabPanelUnstyled)`
  width: 100%;
  font-family: "Poppins";
  font-size: 0.875rem;
`;

const TabsList = styled(TabsListUnstyled)`
  width: 40%;
  border-radius: 8px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: space-between;
  margin-left: 70px;
  font-family: Poppins;
`;


class TabCollection extends React.Component {
  constructor(props) {
    super(props);
    const state = {
      modalShouldDisplay: false,
      modalContents: null,
      displayModal: this.displayModal,
      closeModal: this.closeModal
    };
    this.state = state;
  }



  displayModal = (providedContents) => {
    console.log("It Worked");
    console.log(providedContents)
    this.setState({
      modalShouldDisplay: true,
      modalContents: providedContents,
    });

  };
  closeModal = () =>{
    this.setState({
      modalShouldDisplay:false
    })
  };

  render() {

    return (
      <div>
        <TabsUnstyled defaultValue={0}>
          <TabsList>
            <Tab>Career Overview</Tab>
            <Tab>Professional Stories</Tab>
            <Tab>Discussion Forum</Tab>
          </TabsList>

          <TabPanel scrollButtons="auto" value={0}>
            <CareerOverview pageID={this.props.pageID}/>
          </TabPanel>

          <TabPanel scrollButtons="auto" value={1}>
            <ProfessionalForm />
            <CardGrid
              cardType={"storiesCard"}
              displayModal={this.state.displayModal}
              pageID={this.props.pageID}
            />
          </TabPanel>

          <TabPanel value={2}> 
            <DiscussionPage pageID={this.props.pageID}/>
          </TabPanel>
        </TabsUnstyled>
        <Modal
          open={this.state.modalShouldDisplay}
          onClose={this.closeModal}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
            <Box sx={modalstyle}>
              <div id="modal_outer">
                <ProfessionalStory data={this.state.modalContents}/>
              </div>
            </Box>
            
        </Modal>
      </div>
    );
  }
}

export default TabCollection;
