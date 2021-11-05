import React from "react"
import {
    useColorMode,
    Button,
    Flex,
    Box,
    Stack,
    Divider,
    ButtonGroup,
    ButtonGroupProps,
    IconButton
} from '@chakra-ui/react'
import NextLink from 'next/link'
import styled from '@emotion/styled'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Footer = () => {
    const {colorMode} = useColorMode();
    const bgColor = {
        light: 'white',
        dark: '#171717',
    }

    const navHoverBg = {
        light: 'gray.600',
        dark: 'gray.300'
    }

    const color = {
        light: 'black',
        dark: 'white',
    }

    return <Box as="footer" role="contentinfo" mx="auto" minW="lg" maxW="7xl" py="12" px={{ base: '4', md: '8' }}>
        <Stack>
            <Divider />
            <Stack direction="row" spacing="4" align="center" justify="space-between" >
            
            <ButtonGroup variant="ghost" color="gray.600" >
                {/* <IconButton as="a" href="#" aria-label="LinkedIn" icon={<FaLinkedin fontSize="20px" />} /> */}
                <IconButton as="a" href="https://www.github.com/vykio" target={"_blank"} aria-label="GitHub" icon={<FaGithub fontSize="20px" />} />
                {/* <IconButton as="a" href="#" aria-label="Twitter" icon={<FaTwitter fontSize="20px" />} /> */}
            </ButtonGroup>
            </Stack>
        </Stack>
    </Box>
}
export default Footer;