import React from 'react';

const BrushSize = ({ setBrushSize }) => {
    return (
        <div>
            <label>Brush Size:</label>
            <button
                onClick={() => {
                    setBrushSize(1);
                }}
            >
                Small
            </button>
            <button
                onClick={() => {
                    setBrushSize(10);
                }}
            >
                Med
            </button>
            <button
                onClick={() => {
                    setBrushSize(15);
                }}
            >
                large
            </button>
        </div>
    );
};

export default BrushSize;
