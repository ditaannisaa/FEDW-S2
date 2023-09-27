import React from "react"
import { 
  Heading, 
  Divider, 
  Accordion, 
  AccordionItem, 
  AccordionButton, 
  Box, 
  AccordionIcon, 
  AccordionPanel,
  Stack,
  Checkbox,
  Button,
  Container 
} from "@chakra-ui/react"

interface Categories {
  bread: any[]
  cake: any[]
  noodles: any[]
  breadValue: boolean;
  cakeValue: boolean;
  noodleValue: boolean;
  checkboxVisible: boolean
  name: string[]
  checked: boolean
}

export default class Sidebar extends React.Component<{}, Categories> { 
  constructor(props: {}) {
    super(props);
    this.state = {
      bread: [],
      cake: [],
      noodles: [],
      breadValue: true,
      cakeValue: true,
      noodleValue: true,
      checkboxVisible: true,
      name: [],
      checked: true,
    }
  }
    handleCheckbox = (event: React.ChangeEvent<HTMLInputElement>) => {
      const { name, checked } = event.target;
      this.setState((prevState) => ({
        ...prevState,
        [name]: checked,
      }));
    };
  
    handleButtonClick = () => {
      const {
        breadValue,
        cakeValue,
        noodleValue,
      } = this.state;
  
      let message = "";
  
      if (breadValue) {
        message += "bread, ";
      } if (cakeValue) {
        message += "cake,";
      } if (noodleValue) {
        message += "noodle";
      }
  
      if (message) {
        alert(`You are selecting ${message}`);
      } else {
        alert("Nothing to select");
      }
    };

    toggleCheckboxVisibility = () => {
      this.setState((prevState) => ({
        checkboxVisible: !prevState.checkboxVisible,
      }));
    };
  
    render() {
      const { checkboxVisible } = this.state;

        return (
            <React.Fragment>
              <Container margin={8}>
              <Heading>Filter</Heading>
              <Divider/>
              <Accordion defaultIndex={[0]} allowMultiple>
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex='1' textAlign='left'>
                        Category
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <Stack>
                    {checkboxVisible && (
                      <>
                      <Checkbox size="md"
                      colorScheme="red"
                      type="checkbox"
                      name="breadValue"
                      checked={this.state.breadValue}
                      onChange={this.handleCheckbox}>Breads</Checkbox>

                      <Checkbox size="md"
                      colorScheme="red"
                      type="checkbox"
                      name="cakeValue"
                      checked={this.state.cakeValue}
                      onChange={this.handleCheckbox}>Cakes</Checkbox>

                      <Checkbox size="md"
                      colorScheme="red"
                      type="checkbox"
                      name="noodleValue"
                      checked={this.state.noodleValue}
                      onChange={this.handleCheckbox}>Noodles</Checkbox>

                      <Button
                        colorScheme="teal"
                        variant="solid"
                        w="50%"
                        mt="20px"
                        onClick={() => this.handleButtonClick()}>
                        View
                      </Button>
                    </>)}
                    </Stack>
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex='1' textAlign='left'>
                        Tag
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat.
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
              </Container>
            </React.Fragment>
          )
    }
}
