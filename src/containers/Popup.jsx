import React from 'react';
import { render } from 'react-dom';
import Canvas from '../components/Canvas.jsx';

const Popup = () => {
    return (
        <>
            <Canvas />
        </>
    );
};

render(<Popup />, document.getElementById('react-target'));

export default Popup;
