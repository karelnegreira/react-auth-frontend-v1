import { useState, useEffect } from 'react';
import { useHistory} from 'react-router-dom';
import axios from 'axios';
import { useToken } from '../auth/useToken'; 

import { useQueryParams} from '../util/useQueryParams';


export const LogInPage = () => {
    const[, setToken]  = useToken();
    const [errorMessage, setErrorMessage] = useState('');
    const [emailValue, setEmailValue] = useState('');
    const [password, setPassword] = useState('');
    
    const [googleOauthUrl, setGoogleOauthUrl] = useState('');
    const { token: oauthToken } = useQueryParams();

    const history = useHistory();

    useEffect(() => {
        if (oauthToken) {
            setToken(oauthToken);
            history.push('/');

        }
    }, [oauthToken, setToken, history]);

    useEffect(() => {
        const loadOauthURl = async () => {
            try {
                const response = axios.get('/auth/google/url');
                const { url } = (await response).data;
                setGoogleOauthUrl(url);
            } catch (error) {
                console.log(error);
                 
            }
        }

        loadOauthURl();
    }, [])

    const onLogInClicked = async () => {
        const response = await axios.post('/api/login', {
            email: emailValue, 
            password: password, 
        });
        const { token } = response.data;
        setToken(token);
        history.push('/');
    }

    return (
        <div className="content-container">
            <h1>Log In</h1>
            {errorMessage && <div className="fail">{errorMessage}</div>}
            <input 
            value={emailValue} 
            onChange={e => setEmailValue(e.target.value)} 
            placeholder="test@test.com" />

            <input value={password} 
            onChange={e => setPassword(e.target.value)} 
            placeholder="password" 
            type="password"/>
            <hr />
            <button disabled={!emailValue || !password} onClick={onLogInClicked}> Log In</button>
            <button onClick={() => history.push('/forgot-password')}> Forgot your password</button>
            <button onClick={() => history.push('/signup')}>Dont have an account? Sign up here</button>
            
            <button 
            disabled={!googleOauthUrl} 
            onClick={() => {window.location.href=googleOauthUrl}}> Log in with Google</button>
        </div>
    );
}