import React from 'react';
import style from '../Buttons/Buttons.module.css';

const ColorPalette = ({ pickColor, brushColor, setBrushColor }) => {
    const colors = [
        '#892301',
        '#C8752D',
        '#FEDA86',
        '#86AC9B',
        '#26543F',
        '#111615',
    ];

    const handleColorPick = (color) => {
        pickColor(color);
    };

    return (
        <>
            <div className={style.container}>
                {colors.map((color) => {
                    let thisColor = { background: color };

                    return (
                        <button
                            className={style.colorButton}
                            style={thisColor}
                            onClick={() => {
                                handleColorPick(color);
                            }}
                        ></button>
                    );
                })}

                <input
                    style={{ background: { brushColor } }}
                    type='color'
                    value={brushColor}
                    onChange={(e) => {
                        setBrushColor(e.target.value);
                    }}
                />
            </div>
        </>
    );
};

export default ColorPalette;
