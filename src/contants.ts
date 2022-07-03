export const DRAWER_BUTTON_TYPES = {
  normal: 'normal',
  warning: 'warning',
}

export const ROUTES = {
  START: '/',
  LOGIN: '/login',
  REGISTER: '/rejestracja',
  OFFERS: '/ogloszenia',
  DASHBOARD: '/konto',
  USER_PROFILE: '/konto/moje-konto',
  USER_OFFERS: '/konto/moje-gloszenia',
}

export const HEADER_EXCLUDED_PATHS = [
  ROUTES.LOGIN,
  ROUTES.REGISTER,
  ROUTES.DASHBOARD,
  ROUTES.USER_PROFILE,
  ROUTES.USER_OFFERS,
]
export const FOOTER_EXCLUDED_PATHS = [
  ROUTES.LOGIN,
  ROUTES.REGISTER,
  ROUTES.DASHBOARD,
  ROUTES.USER_PROFILE,
  ROUTES.USER_OFFERS,
]
