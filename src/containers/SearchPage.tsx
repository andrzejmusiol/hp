import React from 'react'
import { Provider } from 'react-redux'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { store } from '../store/store'
import SearchBar from '../components/search/SearchBar'
import Counter from '../components/counter/Counter'

const SearchPage = (): JSX.Element => (
  <Provider store={store}>
    <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="80vh"
    >
    <Container maxWidth="md">
      <Typography variant="h1" align="center" gutterBottom>
        Chcesz komuś pomóc?
      </Typography>
      <Typography variant="subtitle1" gutterBottom paragraph align="center">
        Znajdź ogłoszenia w Twojej okolicy, pomóż sąsiadom, wesprzyj lokalną społeczność, zgarniaj nagrody!
      </Typography>
      <Counter />
      <SearchBar />
    </Container>
    </Box>
  </Provider>
)

export default SearchPage
