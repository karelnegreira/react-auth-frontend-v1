import { useHistory } from 'react-router-dom';

export const EmailVerificationFailed = () => {
    const history = useHistory();
    return (
        <div className="content-container">
            <h1>Uh oh..</h1>
            <p>
                Something went wrong when trying to verifying email 
            </p>
            <button onClick={() => history.push('/signup')}>Back to sign up</button>
        </div>
    );
}