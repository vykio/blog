import React, {useState} from 'react'
import Head from 'next/head'
import {
    Heading,
    Flex,
    Stack,
    Input,
    InputGroup,
    InputRightElement,
} from '@chakra-ui/react'
import {getAllFilesFrontMatter} from '../lib/mdx'

import Container from '../components/Container'
import { SearchIcon } from '@chakra-ui/icons'
import Project from '../components/Project'

export default function Projects({projects}) {
    const [searchValue, setSearchValue] = useState('');
    const filteredProjects = projects
    .sort(
        (a,b) => Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
    )
    .filter((frontMatter) => frontMatter.title.toLowerCase().includes(searchValue.toLowerCase()))

    return <>
        <Head>
            <title>Projects - Alexandre</title>
        </Head>
        <Container>
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
                minW="md"
                >
                    <Heading letterSpacing="tight" mb={4} as="h1" size="2xl">
                        Projets ({projects.length})
                    </Heading>
                    <InputGroup mb={4} mr={4} w="100%">
                        <Input
                            aria-label="Search by title"
                            placeholder="Rechercher par titre"
                            onChange={(e) => setSearchValue(e.target.value)}
                        />
                        <InputRightElement>
                            <SearchIcon color="gray.300" />
                        </InputRightElement>
                    </InputGroup>
                    {!filteredProjects.length && 'No projects found...'}
                    {filteredProjects.map((frontMatter) => <Project key={frontMatter.title} {...frontMatter} />)}
                </Flex>

            </Stack>
        </Container>
    </>
}


export async function getStaticProps() {
    const projects = await getAllFilesFrontMatter('project')

    return {props: {projects}}
}