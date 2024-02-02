import  Hero  from '@/components/Hero'
import  Products  from '@/components/Products'
import  Services  from '@/components/Services'
import  Testimonials  from '@/components/Testimonials'


import { Container, Box } from '@chakra-ui/react'

export default function Home() {
  return (
    // <Container>
   //<Box p='50px'>
    <Container as='section' p='50px'>
    <Hero />
    <Products />
    <Services />
    <Testimonials />
   
    </Container>
    // </Box>
    // </Container>
  )
}
