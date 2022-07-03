import React from 'react'
import { Provider } from 'react-redux'
import { Routes, Route } from 'react-router-dom'
import { Box } from '@chakra-ui/react'
import { store } from './store/store'
import Search from './containers/Search'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Offers from './containers/Offers'
import Dashboard from './containers/dashboard/Dashboard'
import { ROUTES } from './contants'
import LoginForm from './components/authentication/Login'
import RegisterForm from './components/authentication/Register'
import UserProfile from './containers/dashboard/UserProfile'
import UserOffers from './containers/dashboard/UserOffers'

const App = (): JSX.Element => (
  <Provider store={store}>
    <Box w="100%">
      <Header />
      <Routes>
        <Route index element={<Search />} />
        <Route path={ROUTES.OFFERS} element={<Offers />} />
        <Route path={ROUTES.LOGIN} element={<LoginForm />} />
        <Route path={ROUTES.REGISTER} element={<RegisterForm />} />
        <Route path={ROUTES.DASHBOARD} element={<Dashboard />}>
          <Route path={ROUTES.USER_PROFILE} element={<UserProfile />} />
          <Route path={ROUTES.USER_OFFERS} element={<UserOffers />} />
        </Route>
      </Routes>
      <Footer />
    </Box>
  </Provider>
)

export default App
