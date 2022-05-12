import React from 'react'
import { Heading, Text, Container, Center, Box, Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import SearchBar from '../components/search/SearchBar'
import UsageCounter from '../components/counter/UsageCounter'

const SearchPage = (): JSX.Element => (
  <Container maxW="3xl" mt="10rem" mb="20rem">
    <Center>
      <Heading as="h1">Chcesz komuś pomóc?</Heading>
    </Center>
    <Text align="center">
      Znajdź ogłoszenia w Twojej okolicy, pomóż sąsiadom, wesprzyj lokalną społeczność, zgarniaj nagrody!
    </Text>
    <UsageCounter />
    <SearchBar />
    <Box textAlign="center">
      <Text align="center" mb="0">
        Potrzebujesz pomocy?
      </Text>
      <Link to="/">
        <Button variant="link-button">Dodaj ogłoszenie</Button>
      </Link>
    </Box>
  </Container>
)

export default SearchPage
