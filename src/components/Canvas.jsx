import React, { useState, useRef } from 'react';
import CanvasDraw from 'react-canvas-draw';
import BrushSize from './Buttons/BrushSize.jsx';
import ColorPalette from './Buttons/ColorPalette.jsx';
import style from './Canvas.module.css';

const Canvas = () => {
    const [brushColor, setBrushColor] = useState('#000000');
    const [brushSize, setBrushSize] = useState(1);

    const canvasRef = useRef();
    const canvasProps = {
        lazyRadius: 0,
        brushColor: brushColor,
        brushRadius: brushSize,
        hideInterface: true,
        hideGrid: true,
    };

    const handleColorChange = (color) => {
        setBrushColor(color);
    };

    return (
        <div>
            <div className={style.canvasContainer}>
                <CanvasDraw
                    {...canvasProps}
                    className={style.mainCanvas}
                    ref={canvasRef}
                />
            </div>

            <div>
                <ColorPalette
                    pickColor={handleColorChange}
                    setBrushColor={setBrushColor}
                />
                <BrushSize setBrushSize={setBrushSize} />
            </div>
            <button onClick={() => canvasRef.current.undo()}>Undo</button>
            <button onClick={() => canvasRef.current.clear()}>
                Clear Canvas
            </button>
        </div>
    );
};

export default Canvas;
