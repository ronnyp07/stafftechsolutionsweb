'use client'

import { ReactElement } from 'react'
import { Box, SimpleGrid, Icon, Text, Stack, Flex, Center } from '@chakra-ui/react'
import { FcPhoneAndroid, FcCollaboration, FcCustomerSupport, FcMenu } from "react-icons/fc";


interface FeatureProps {
  title: string
  text: string
  icon: ReactElement
}

const Feature = ({ title, text, icon }: FeatureProps) => {
  return (
    <Stack>
      <Flex
        w={16}
        h={16}
        align={'center'}
        justify={'center'}
        color={'white'}
        rounded={'full'}
        bg={'gray.100'}
        mb={1}>
        {icon}
      </Flex>
      <Text fontWeight={600}>{title}</Text>
      <Text color={'gray.600'}>{text}</Text>
    </Stack>
  )
}

export default function SimpleThreeColumns() {
  return (
    <Box p={4} mt={20}>
        <Center>
      <SimpleGrid columns={{ base: 1, md: 4 }} spacing={10}>
        <Feature
          icon={<Icon as={FcPhoneAndroid} w={10} h={10} />}
          title={'Software Development'}
          text={
            'StaffTech Solutions is having  a software development division .'
          }
        />
        <Feature
          icon={<Icon as={FcCustomerSupport} w={10} h={10} />}
          title={'Training'}
          text={
            'StaffTech Solutions provides customized training services based on client needs. Contact us for more information'
          }
        />
        <Feature
          icon={<Icon as={FcCollaboration} w={10} h={10} />}
          title={'IT Consulting'}
          text={
            'StaffTech Solutions works with their clients to develop and execute a clear and strategic IT roadmap with priorities that are closely linked to business goals.'
          }
        />
         <Feature
          icon={<Icon as={FcMenu} w={10} h={10} />}
          title={'IT Staffing'}
          text={
            'StaffTech’s core competency is its IT Staffing and IT Recruitment Services .'
          }
        />
      </SimpleGrid>
      </Center>
    </Box>
  )
}