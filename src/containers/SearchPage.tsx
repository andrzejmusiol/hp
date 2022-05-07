import React from 'react'
import { Provider } from 'react-redux'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { store } from '../store/store'
import SearchBar from '../components/search/SearchBar'

const SearchPage = (): React.ReactElement => (
  <Provider store={store}>
    <Container maxWidth="sm">
      <Typography variant="h1" align="center" gutterBottom>Chcesz komuś pomóc?</Typography>
      <Typography variant="subtitle1" gutterBottom paragraph align="center">
        Znajdź ogłoszenia w Twojej okolicy, pomóż sąsiadom, wesprzyj lokalną społeczność, zgarniaj nagrody!
      </Typography>
      <SearchBar />
    </Container>
  </Provider>
)

export default SearchPage
