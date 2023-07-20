import React, { useRef, useEffect } from 'react';
import VanillaTilt from 'vanilla-tilt';

const TiltComponent = ({ options, children }) => {
    const tiltRef = useRef();

    useEffect(() => {
        VanillaTilt.init(tiltRef.current);
    }, []);

    return (
        <div ref={tiltRef}>
            {children}
        </div>
    );
};

export default TiltComponent;