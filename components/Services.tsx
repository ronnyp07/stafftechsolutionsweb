'use client'

import { ReactNode } from 'react'
import { Stack, Container, Box, Flex, Text, Heading, SimpleGrid } from '@chakra-ui/react'

export default function StatsGridWithImage() {
  return (
  
    <Box bg={'gray.800'} position={'relative'} p='50px' mt={20}>
      <Flex
        flex={1}
        zIndex={0}
        display={{ base: 'none', lg: 'flex' }}
        backgroundImage="url('./stats-grid-with-image.jpg')"
        backgroundSize={'cover'}
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        position={'absolute'}
        width={'50%'}
        insetY={0}
        right={0}>
        <Flex
          bgGradient={'linear(to-r, gray.800 10%, transparent)'}
          w={'full'}
          h={'full'}
        />
        <img
            src='../public/stats-grid-with-image.jpg'
            alt="Stats Grid with Image"
            onError={(e) => console.error("Error loading image:", e)}
  />
      </Flex>
      <Container maxW={'7xl'} zIndex={10} position={'relative'}>
        <Stack direction={{ base: 'column', lg: 'row' }}>
          <Stack
            flex={1}
            color={'gray.400'}
            justify={{ lg: 'center' }}
            py={{ base: 4, md: 20, xl: 20 }}>
            <Box mb={{ base: 8, md: 20 }}>
              <Text
                fontFamily={'heading'}
                fontWeight={700}
                textTransform={'uppercase'}
                mb={3}
                fontSize={'xl'}
                color={'gray.500'}>
                Technology
              </Text>
              <Text fontSize={'xl'} color={'gray.400'}>
              Streamlining Operations: Unleashing the Potential of ERP, Mobile Apps, Cloud Computing, and Software Testing Solutions"
              </Text>
            </Box>

            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
              {stats.map((stat) => (
                <Box key={stat.title}>
                  <Text fontFamily={'heading'} fontSize={'3xl'} color={'white'} mb={3}>
                    {stat.title}
                  </Text>
                  <Text fontSize={'xl'} color={'gray.400'}>
                    {stat.content}
                  </Text>
                </Box>
              ))}
            </SimpleGrid>
          </Stack>
          <Flex flex={1} />
        </Stack>
      </Container>
    </Box>
  )
}

const StatsText = ({ children }: { children: ReactNode }) => (
  <Text as={'span'} fontWeight={700} color={'white'}>
    {children}
  </Text>
)

const stats = [
  {
    title: 'ERP',
    content: (
      <>
        Enterprise Resource Planning is a business management software which is designed for companies or organisations to manage, collect, store and interpret data from different business activities...
      </>
    ),
  },
  {
    title: 'Mobile Apps',
    content: (
      <>
        Powerful Mobile App Solution for Meeting, Event & Conference Marketing We understand how important your event is and we work closely with you to improve your events marketing using our mobile app solutions...
      </>
    ),
  },
  {
    title: 'Cloud Computing ',
    content: (
      <>
        StaffTech Solutions can help you Navigate through the Cloud Hype In today's challenging business environment, it is imperative that IT leaders find solutions that can help with lowering capital expenses...
      </>
    ),
  },
  {
    title: 'Software Testing',
    content: (
      <>
       Software Testing Services India - Risk Free Pilot Our approach
 to application testing enables IT to integrate On Demand testing to any stage of the life cycle and provide visibility into project quality...
      </>
    ),
  },
]