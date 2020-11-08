import { routes } from '@wavegrid/common/constants'
import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Container, Content } from 'rsuite'
import 'rsuite/lib/styles/themes/dark/index.less'
import { AuthRoute, GuestRoute, MaybeAuthRoute } from 'use-eazy-auth/routes'
import { BrowsePage } from '../Browse'
import { CartPage } from '../Cart'
import { CheckoutPage, ThankYouPage } from '../Checkout'
import { DashboardPage } from '../Dashboard'
import { DownloadPage } from '../Download'
import { EmailVerifiedPage } from '../EmailVerified'
import { SiteFooter } from '../Folder'
import { ForgotPasswordPage } from '../ForgotPassword'
import { HomePage } from '../Home'
import { LoginPage } from '../Login'
import { NavBarInstance } from '../NavBarInstance'
import { ProductPage } from '../Product'
import { ResetPasswordPage } from '../ResetPassword'
import { SettingsPage } from '../Settings'
import { SignUpPage } from '../SignUp'
import { TagPage } from '../Tag'
import { UserPage } from '../User'
import { VerifyWithdrawPage } from '../VerifyWithdraw'
import { ViewAllPage } from '../ViewAll'

const AppRouter = () => {
  return (
    <Router>
      <div className="flex-wrapper">
        <Container>
          <Content>
            <NavBarInstance />
            <MaybeAuthRoute exact path={routes.user} component={UserPage} />
            <AuthRoute
              redirectTo={routes.login}
              path={routes.settings}
              component={SettingsPage}
            />
            <AuthRoute
              redirectTo={routes.login}
              path={routes.dashboard}
              component={DashboardPage}
            />
            <MaybeAuthRoute exact path={routes.home} component={HomePage} />
            <MaybeAuthRoute exact path={routes.browse} component={BrowsePage} />
            <MaybeAuthRoute exact path={routes.cart} component={CartPage} />
            <MaybeAuthRoute path={routes.tag} component={TagPage} />
            <MaybeAuthRoute path={routes.pack} component={ProductPage} />
            <MaybeAuthRoute path={routes.checkout} component={CheckoutPage} />
            <MaybeAuthRoute path={routes.thankyou} component={ThankYouPage} />
            <MaybeAuthRoute exact path={routes.all} component={ViewAllPage} />
            <MaybeAuthRoute
              path={routes.confirmwithdraw}
              component={VerifyWithdrawPage}
            />
            <MaybeAuthRoute
              path={routes.resetpassword}
              component={ResetPasswordPage}
            />
            <MaybeAuthRoute
              path={routes.emailverify}
              component={EmailVerifiedPage}
            />
            <MaybeAuthRoute
              exact
              path={routes.forgotpassword}
              component={ForgotPasswordPage}
            />
            <MaybeAuthRoute path={routes.download} component={DownloadPage} />
            <GuestRoute
              redirectTo={routes.home}
              exact
              path={routes.login}
              component={LoginPage}
            />
            <GuestRoute
              redirectTo={routes.home}
              exact
              path={routes.signup}
              component={SignUpPage}
            />
          </Content>
        </Container>
        <SiteFooter />
      </div>
    </Router>
  )
}

export default AppRouter
