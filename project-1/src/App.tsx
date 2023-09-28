import React from "react";
import Sidebar from "../src/pages/sidebar"
import CardProduct from "./pages/Product";
import { ChakraProvider } from '@chakra-ui/react'
import { Grid, GridItem } from '@chakra-ui/react'
import axios from "axios";


interface Food {
    name: string,
    id: number,
    categories: string[],
    description: string,
    imageUrl: string,
    badge: string
}

interface State {
  data: Food[];
}

export default class Home extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props)

    this.state = {
      data: []
    }
  }

  componentDidMount() {
      const url = 'https://api.npoint.io/624c99ed50dcd45fb160'
      axios.get(url)
      .then((response) => {
        this.setState({data: response.data})
      })
      .catch((error) => {
        console.log(error)
      })
  }

  render() {

    return(
      <React.Fragment>
        <ChakraProvider>
          <Grid gridTemplateColumns={{ base: "1fr", md: "350px 1fr" }}>
            <Sidebar/>
            <GridItem p={8} h="full" bg="teal.50">
              <Grid templateColumns="repeat(auto-fill, minmax(200px, 1fr))" gap={4}>
                {this.state.data.map((e: Food, id:number ) => (
                  <CardProduct 
                  key={id} 
                  name={e.name} 
                  description={e.description} 
                  imageUrl={e.imageUrl} 
                  categories={e.categories} 
                  badge={e.badge}/>
                ))}
              </Grid>
            </GridItem>
          </Grid>
        </ChakraProvider>
      </React.Fragment>
    )
  }
}

