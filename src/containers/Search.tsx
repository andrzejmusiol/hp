import React from 'react'
import { Heading, Text, Container, Center, Box, Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import SearchBar from '../components/search/SearchBar'
import UsageCounter from '../components/counter/UsageCounter'

const Search = (): JSX.Element => (
  <Container maxW="3xl" mt="10rem" mb="20rem">
    <Center>
      <Heading as="h1" data-testid="search-heading-test-id">
        Chcesz komuś pomóc?
      </Heading>
    </Center>
    <Text data-testid="search-sub-heading-test-id">
      Znajdź ogłoszenia w Twojej okolicy, pomóż sąsiadom, wesprzyj lokalną społeczność, zgarniaj nagrody!
    </Text>
    <UsageCounter />
    <SearchBar />
    <Box textAlign="center">
      <Text mb="0">Potrzebujesz pomocy?</Text>
      <Link to="/">
        <Button variant="link-button">Dodaj ogłoszenie</Button>
      </Link>
    </Box>
  </Container>
)

export default Search
