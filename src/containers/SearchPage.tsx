import React from 'react'
import { Heading, Text, Container, Center } from '@chakra-ui/react'
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
  </Container>
)

export default SearchPage
