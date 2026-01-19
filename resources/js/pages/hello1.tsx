import { JSX } from 'react';
import { Head } from '@inertiajs/react';

export default function Hello(): JSX.Element {
    return (
        <>
            <Head title="Hello" />
            <div className="p-10">
            <h1 className="text-3xl pb-5">Hello!</h1>
            <p className="text-lg">これはReactのコンポーネントです！</p>
            </div>
        </>
    );
}