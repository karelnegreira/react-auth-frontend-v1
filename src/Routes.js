import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { EmailVerificationLandingPage } from './pages/EmailVerificationLandingPage';
import { ForgotPasswordPage } from './pages/ForgotPasswordPage';
import { UserInfoPage } from './pages/UserInfoPage';
import { LogInPage } from './pages/LoginPage';
import { SignUpPage } from './pages/SignUp';
import { PasswordResetLandingPage } from './pages/PasswordResetLandingPage';
import { PleaseVerifyEmailPage } from './pages/PleaseVerifyEmailPage';


import { PrivateRoute } from './auth/PrivateRoute';


export const Routes = () => {
    return (
        <Router>
            <Switch>
                <PrivateRoute path="/" exact>
                    <UserInfoPage />
                </PrivateRoute>
                <Route path="/verify-email/:verificationString">
                    <EmailVerificationLandingPage />
                </Route>
                <Route path="/forgot-password">
                    <ForgotPasswordPage />
                </Route>
                <Route path="/reset-password/:passwordResetCode">
                    <PasswordResetLandingPage />
                </Route>
                <Route path="/login">
                    <LogInPage />
                </Route>
                <Route path="/signup">
                    <SignUpPage />
                </Route>
                <Route path="/please-verify">
                    <PleaseVerifyEmailPage />
                </Route>
                
            </Switch>
        </Router>
    );
}