import { JSX, useState, FormEvent } from 'react';
import { Head } from '@inertiajs/react';

export default function MessageBoard(): JSX.Element {
    const [inputValue, setInputValue] = useState('');
    const [messages, setMessages] = useState('Hello!');

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setMessages('こんにちは、' + inputValue + 'さん');
        setInputValue('');
    };
    return (
        <>
            <Head title="Message Board" />
            <div style={{padding: '20px'}}>
                <h1 style={{fontSize: '30px', paddingBottom:'10px'}}>Message Board</h1>
                <p style={{fontSize: '20px'}}>{messages}</p>
                <form onSubmit={handleSubmit} style={{marginTop: '20px'}}>
                    <input
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        placeholder="ここに名前を入力してください"
                        style={{
                            padding: '8px',
                            fontSize: '16px',
                            width:'300px'
                            }} />
                    <button style={{padding: '8px 16px', marginLeft: '10px', backgroundColor: 'blue', color: 'white'}}type="submit">送信</button>
                </form>
            </div>
        </>
    );
}