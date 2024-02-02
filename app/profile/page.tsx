'use client'

import { Center, Container, Flex } from '@chakra-ui/react'
import  ProfileHero  from '@/components/ProfileHero'
import  PageDetails  from '@/components/PageDetails'

export default function Profile() {
    return (
        <Container as='section' p='50px' >

      <Flex direction={{ base: 'row', md: 'row' }}>

       <ProfileHero />
       {/* <PageDetails /> */}
       </Flex>
       <Flex direction={{ base: 'row', md: 'row' }}>

       <PageDetails 
        title='About Us'
        details='Michael Arrington, founder and co-editor of Tech Crunch once famously said that ‘The best startups generally come from somebody needing to scratch an itch’'
        subdetails={`.
            Quite true to the thought, Aroha Technologies Inc was launched in 2008 in Florida. While we began our journey with a powerful Staffing Specialist & Software Development, Today our procedure has amplified into a more robust and simplified solution for Marketers looking for consistent and long term.
           In our quest to do better, we resolve to simplify user acquisition, retention, engagement and large Business without blinking an eyelid! A semi-remote team spread across the globe, we are here to help you one step at a time.`}
       />
       </Flex>
       </Container>
    )
  }
  