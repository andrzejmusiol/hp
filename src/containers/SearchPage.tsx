import React from 'react'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import SearchBar from '../components/search/SearchBar'
import UsageCounter from '../components/counter/UsageCounter'

const SearchPage = (): JSX.Element => (
  <Box display="flex" justifyContent="center" alignItems="center" minHeight="80vh">
    <Container maxWidth="md">
      <Typography variant="h1" align="center" gutterBottom>
        Chcesz komuś pomóc?
      </Typography>
      <Typography variant="subtitle1" gutterBottom paragraph align="center">
        Znajdź ogłoszenia w Twojej okolicy, pomóż sąsiadom, wesprzyj lokalną społeczność, zgarniaj nagrody!
      </Typography>
      <UsageCounter />
      <SearchBar />
    </Container>
  </Box>
)

export default SearchPage
