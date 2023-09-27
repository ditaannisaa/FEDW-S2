import React from "react"
import { ChakraProvider } from "@chakra-ui/react"
import { Card, CardBody, Stack, Image, Heading, Text, Divider, CardFooter, Box } from "@chakra-ui/react"


interface IProps{
    name?: string
    description?: string
    categories?: []
    imageUrl?: string
    badge?: string
  }
  
export default class CardProduct extends React.Component<IProps> {
  

  render(){
    return(
        <React.Fragment>
            <ChakraProvider>
                <Card maxW='sm'>
                    <CardBody>
                    <Image
                        src={this.props.imageUrl}
                        w="cover-fit"
                        borderRadius='lg'
                    />
                    <Stack mt='6' spacing='3'>
                        <Heading size='md'>{this.props.name}</Heading>
                        <Text>
                        {this.props.description}
                        </Text>
                    </Stack>
                    </CardBody>
                    <Divider />
                    <CardFooter>
                        <Box mt={2} w='fit-content' border='1px solid gray' px={2} rounded='lg'>{this.props.categories}</Box>
                    </CardFooter>
                    <Text pos='absolute' top={-3} left='20' px={2} rounded='lg' color='white' 
                        bg={this.props.badge === 'NEW' ? "green" : this.props.badge === 'FAVORITE' ? 'red': this.props.badge === 'FEATURED' ? "blue" : ''}>{this.props.badge}!!!
                    </Text>
                </Card>
            </ChakraProvider>
      </React.Fragment>
    )
  }
  }