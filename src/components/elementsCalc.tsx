import React, { useEffect, useState, useRef } from 'react';

const ElementsCalc: React.FC = () => {
    const [numElements, setNumElements] = useState(0);
    const [positions, setPositions] = useState<number[]>([]);
    const wrapperRef = useRef<HTMLDivElement | null>(null);

    const pElementWidth = 261; // Width of each <p> element

    // Calculate how many elements can fit on the screen
    const calcElementsNum = () => {
        const vw = window.innerWidth;
        const elementsCanFit = Math.floor(vw / pElementWidth) + 3; // Extra elements for smoothness
        setNumElements(elementsCanFit);
        console.log(elementsCanFit)
    };

    // Position the elements to fit the screen width
    useEffect(() => {
        calcElementsNum();
        window.addEventListener('resize', calcElementsNum);
        
        const initialPositions = Array.from({ length: numElements }, (_, index) => 0);
        setPositions(initialPositions);

        return () => {
            window.removeEventListener('resize', calcElementsNum);
        };
    }, [numElements]);

    return (
        <div className="arrivals-wrapper" ref={wrapperRef}>
            {positions.map((position, index) => (
                <p 
                    key={index} 
                    className="item" 
                    style={{ transform: `translateX(${position}px)` }}
                >
                    NEW ARRIVALS
                </p>
            ))}
        </div>
    );
};

export default ElementsCalc;
