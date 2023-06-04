import { useParams } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { PasswordResetSuccess } from './PasswordResetSuccess';
import { PasswordResetFail } from './PasswordResetFail';

export const PasswordResetLandingPage = () => {
    const [isSuccess, setIsSuccess] = useState(false);
    const [isFailure, setIsFailure] = useState(false);
    const [passwordValue, setPasswordValue] = useState('');
    const [confirmPasswordValue, setConfirmPasswordValue] = useState('');

    const { passwordResetCode } = useParams();

    const onResetClick = async () => {
        try {
            await axios.put(`/api/users/${passwordResetCode}/reset-password`, {newPassword: passwordValue })
            setIsSuccess(true);

        } catch (error) {
            setIsFailure(true);
        }
    }

    if (isFailure) return <PasswordResetFail />
    if (isSuccess) return <PasswordResetSuccess />



    return (
        <div className='content-container'>
            <h1>ResetPassword</h1>
            <p>Please, enter a new password</p>

            <input type='password' value={passwordValue} onChange={e => setPasswordValue(e.target.value)} placeholder='pssword' />
            <input type='password' value={confirmPasswordValue} onChange={e => setConfirmPasswordValue(e.target.value)} placeholder='confirm pssword' />

            <button disabled={!passwordValue || !confirmPasswordValue || passwordValue !== confirmPasswordValue} 
            onClick={onResetClick}>Reset password</button>
        </div>
    );
    
}