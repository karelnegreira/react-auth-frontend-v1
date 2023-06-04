import { useState } from 'react';
import { useHistory} from 'react-router-dom';
import { useToken } from '../auth/useToken';
import axios from 'axios';


export const SignUpPage = () => {

    const [token, setToken] = useToken();

    const [errorMessage, setErrorMessage] = useState('');
    const [emailValue, setEmailValue] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const history = useHistory();

    const onSignUpClicked = async () => {
        const response = await axios.post('/api/signup', {
            email: emailValue, 
            password: password, 
        });

        const { token } = response.data;
        setToken(token);
        history.push('/please-verify');
    }

    return (
        <div className="content-container">
            <h1>Sign up</h1>
            {errorMessage && <div className="fail">{errorMessage}</div>}
        <input 
            value={emailValue} 
            onChange={e => setEmailValue(e.target.value)} 
            placeholder="test@test.com" />

        <input value={password} 
            onChange={e => setPassword(e.target.value)} 
            placeholder="password" 
            type="password"/>

        <input value={confirmPassword} 
            onChange={e => setConfirmPassword(e.target.value)} 
            placeholder="confirm password" 
            type="password"/>   

            <hr />
            
            <button disabled={!emailValue || !password || password !== confirmPassword} 
            onClick={onSignUpClicked}> Sign up</button>
            <button onClick={() => history.push('/login')}>Already have an account? Log in here</button>
        </div>
    );
}