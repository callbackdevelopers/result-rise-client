import React from 'react';
import { ScaleLoader } from 'react-spinners';

const Spinier = ({ color, height }) => {
    return (
        <ScaleLoader color={color}
            height={height}
            aria-label="Loading Spinner"
            data-testid="loader"
        />
    );
};

export default Spinier;