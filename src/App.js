import React, { useState } from 'react';
import './index.css';
import MyAccordian from './MyAccordian';
import { questions } from './api.js';

const App = () => {
    const [data] = useState(questions);

    return (
        <section className="main-heading">
            <h1>Interview Question</h1>
            {data.map((elem) => {
                const { id } = elem;
                return <MyAccordian key={id} {...elem} />;
            })}
        </section>
    );
};

export default App;
