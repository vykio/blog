import React from 'react'
import Head from 'next/head'
import { parseISO, format } from 'date-fns'
import {
    useColorMode,
    Heading,
    Text,
    Flex,
    Stack,
    Avatar,
    Tag
} from '@chakra-ui/react'
import { useRouter } from 'next/router'

import Container from '../components/Container'

export default function ProjectLayout({children, frontMatter}) {

    const {colorMode} = useColorMode()
    const textColor = {
        light: 'gray.700',
        dark: 'gray.400'
    }

    const router = useRouter()
    const slug = router.asPath.replace('/project/', '')

    return (
        <Container>
            <Head>
                <title>Project - {frontMatter.title}</title>
            </Head>
            <Stack
                as="article"
                spacing={8}
                justifyContent="center"
                alignItems="flex-start"
                m="0 auto 4rem auto"
                maxWidth="700px"
                w="100%"
                px={2}
            >
                <Flex
                    flexDirection="column"
                    justifyContent="flex-start"
                    alignItems="flex-start"
                    maxWidth="700px"
                    w="100%"
                >
                    <Heading letterSpacing="tight" mb={2} as="h1" size="2xl">
                        {frontMatter.title}
                    </Heading>
                    <Flex
                        justify="space-between"
                        align={['initial', 'center']}
                        direction={['column', 'row']}
                        mt={2}
                        w="100%"
                        mb={4}
                    >
                        <Flex align="center">
                            <Avatar
                                size="xs"
                                name="Alex"
                                src="../images/portrait.png"
                                mr={2}
                            />
                            <Text fontSize="sm" color={textColor[colorMode]}>
                                {frontMatter.by}
                                {'Alexandre - '}
                                {format(parseISO(frontMatter.publishedAt), 'dd/MM/yyyy')}
                            </Text>
                        </Flex>
                        
                        <Text fontSize="sm" color="gray.500" minWidth="100px" mt={[2, 0]}>
                            {frontMatter.readingTime.text.slice(0, -5)}
                        </Text>
                    </Flex>
                    <Flex>
                    {frontMatter.tags && frontMatter.tags.split(', ').map((element) => <Tag mx={1}>{element}</Tag>)}
                    </Flex>
                </Flex>
                {children}
            </Stack>
        </Container>
    )
}