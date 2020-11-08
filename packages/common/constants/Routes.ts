export const routes = {
  all: '/all/:type',
  home: '/',
  login: '/login',
  signup: '/signup',
  browse: '/browse',
  cart: '/cart',
  checkout: '/checkout',
  dashboard: '/user/:username/dash/:tabId',
  thankyou: '/thank-you/:transactionId',
  pack: '/pack/:packId',
  settings: '/settings',
  tag: '/tag/:tagId',
  user: '/user/:username',
  forgotpassword: '/forgot-password',
  emailverify: '/verify/:token',
  resetpassword: '/reset-password/:token',
  confirmwithdraw: '/confirm-withdraw/:token',
  download: '/download/:code',
}