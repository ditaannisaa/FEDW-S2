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
  Container, 
  FormControl,
  Flex,
  Input,
} from "@chakra-ui/react"


interface Categories {
  bread: any[]
  cake: any[]
  noodles: any[]
  breadValue: boolean;
  cakeValue: boolean;
  noodleValue: boolean;
  favoriteValue: boolean,
  featuredValue: boolean,
  newValue: boolean,
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
      breadValue: false,
      cakeValue: false,
      noodleValue: false,
      favoriteValue: false,
      featuredValue: false,
      newValue: false,
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
        favoriteValue,
        featuredValue,
        newValue,
      } = this.state;
  
      let message = "";
  
      if (breadValue) {
        message += "bread, ";
      } if (cakeValue) {
        message += "cake,";
      } if (noodleValue) {
        message += "noodle, ";
      } if (favoriteValue) {
        message += "favorite, ";
      } if (featuredValue) {
        message += "featured, ";
      } if (newValue) {
        message += "new, ";
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
              <FormControl mt="20px" >
                <Flex>
                  <Input/>
                    <center>
                      <Button
                            colorScheme="teal"
                            variant="solid"
                            w="50%"
                            mr="20px"
                            onClick={() => this.handleButtonClick()}>
                            View
                      </Button>
                    </center>
                </Flex>
              </FormControl>
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
                    <Stack>
                    {checkboxVisible && (
                      <>
                      <Checkbox size="md"
                      colorScheme="red"
                      type="checkbox"
                      name="newValue"
                      checked={this.state.newValue}
                      onChange={this.handleCheckbox}>New</Checkbox>

                      <Checkbox size="md"
                      colorScheme="red"
                      type="checkbox"
                      name="newValue"
                      checked={this.state.favoriteValue}
                      onChange={this.handleCheckbox}>Favorite</Checkbox>

                      <Checkbox size="md"
                      colorScheme="red"
                      type="checkbox"
                      name="newValue"
                      checked={this.state.featuredValue}
                      onChange={this.handleCheckbox}>Featured</Checkbox>
                      </>
                    )}
                    </Stack>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
              </Container>
            </React.Fragment>
          )
    }
}
