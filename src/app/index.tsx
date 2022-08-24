import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'


const colors = {
    brand: {
      900: '#1a365d',
      800: '#153e75',
      700: '#2a69ac',
    },
  }
  
  const theme = extendTheme({ colors },
    {
      fonts: {
        heading: 'Roboto',
        body: 'Roboto',
      },
      capHeights: {
        sm: 10,
        md: 14,
        lg: 18,
        xl: 24,
      },
    },
  )

  
export const App = () => {

  return (
    <React.StrictMode>
    <ChakraProvider theme={theme}>
       <></>    
    </ChakraProvider>
  </React.StrictMode>
  )
}

