import Head from 'next/head'
import {
  Text,
  useColorMode,
  Heading,
  Flex,
  Stack,
  Image,
  Box,
  Center,
  Spacer
} from '@chakra-ui/react'

import Container from '../components/Container'

export default function Index() {

  const {colorMode} = useColorMode()
  const colorSecondary = {
    light: 'gray.700',
    dark: 'gray.400',
  }

  return (
    <Container>
      <Head>
        <title>Accueil - Alexandre</title>
      </Head>
      <Stack
        as="main"
        spacing={8}
        justifyContent="center"
        alignItems="flex-start"
        m='0 auto 4rem auto'
        maxWidth='700px'
        px={2}
      >
        <Flex
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          maxWidth="700px"
        >
          <Heading mb={2}><Image src="https://raw.githubusercontent.com/nixin72/nixin72/master/wave.gif" width="10" mr="5" display="inline"></Image>Bienvenue !</Heading>
          <Text color={colorSecondary[colorMode]}>Je m'appelle Alexandre et je suis développeur FullStack. Je suis passionné d'informatique et je vais partager avec vous ce que je trouve intéressant à travers mon blog.</Text>
          <Text color={colorSecondary[colorMode]}>De plus, vous pourrez trouver une liste non exhaustive de certains de mes projets (seulement ceux que j'ai réussi à [presque] terminer)</Text>
          <Stack
                as="main"
                spacing={8}
                justifyContent="center"
                alignItems="flex-start"
                m='0 auto 4rem auto'
                maxWidth='700px'
                px={2}
                >
          <Center>
            <Box boxSize="xs" marginTop={"5"}>
              <Image src="https://media4.giphy.com/media/jp7jSyjNNz2ansuOS8/giphy.gif?cid=ecf05e478lwkain5ksx6gj43ffp18j0t4fo0wm5rkbcwitv9&rid=giphy.gif&ct=g" alt="Hello" />
            </Box>
          </Center>
          </Stack>
        </Flex>
      </Stack>
    </Container>
  )
}
