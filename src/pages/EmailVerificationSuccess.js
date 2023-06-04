import { useHistory } from 'react-router-dom';

export const EmailVerificationSuccess = () => {
    const history = useHistory();
    return (
        <div className="content-container">
            <h1>Success!</h1>
            <p>
                Thank you for verifying your email, 
                now you have unleashed the full power of this app. 
            </p>
            <button onClick={() => history.push('/')}>Go to home page</button>
        </div>
    );
}