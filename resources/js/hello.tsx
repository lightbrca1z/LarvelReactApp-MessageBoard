import React, { JSX, useState, FormEvent } from 'react';
import { Head } from '@inertiajs/react';
import axios from 'axios';

export default function Hello(): JSX.Element {
    const [inputValue, setInputValue] = useState(0);
    const [servermessages, setServerMessages] = useState('type a number.');

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        axios.post('/update-message', { number: inputValue })
            .then(response => {
                console.log(response);
                setServerMessages(response.data.message);
            })
            .catch(error => {
                console.error('Error:', error);
                setServerMessages('エラーが発生しました');
            });
    };

    return (
        <>
            <div style={{padding: '20px'}}>
                <Head title="Welcome" />
                <h1 style={{
                    fontSize: '30px',
                    paddingBottom: '10px'
                }}>カウントアップアプリ!</h1>
                <p style={{ fontSize: '20px' }}>{servermessages}</p>
                <form onSubmit={handleSubmit} style={{ marginTop: '20px' }}>
                    <input
                        type="number"
                        value={inputValue}
                        onChange={(e) => setInputValue(Number(e.target.value))}
                        style={{
                            padding: '8px',
                            fontSize: '16px',
                            width: '300px'
                        }}
                    />
                    <button type="submit" style={{
                        padding: '8px 16px',
                        marginLeft: '10px',
                        background:'blue', color:'white'
                    }}>送信</button>
                </form>
            </div>
        </>
    );
}