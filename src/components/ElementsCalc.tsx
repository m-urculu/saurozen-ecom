import React, { useEffect, useState, useRef } from 'react';

// Define the props interface
interface ElementsCalcProps {
    text: string;  // Prop for the text to display
    separatorClass?: string;
    wrapperClass?: string;
}

const ElementsCalc: React.FC<ElementsCalcProps> = ({ text, separatorClass, wrapperClass }) => {
    const [numElements, setNumElements] = useState(0);
    const [positions, setPositions] = useState<number[]>([]);
    const wrapperRef = useRef<HTMLDivElement | null>(null);

    const pElementWidth = 261; // Width of each <p> element

    // Calculate how many elements can fit on the screen
    const calcElementsNum = () => {
        const vw = window.innerWidth;
        const elementsCanFit = Math.floor(vw / pElementWidth) + 3; // Extra elements for smoothness
        setNumElements(elementsCanFit);
    };
    // Position the elements to fit the screen width
    useEffect(() => {
        calcElementsNum();
        window.addEventListener('resize', calcElementsNum);
        
        const initialPositions = Array.from({ length: numElements }, () => 0);
        setPositions(initialPositions);

        return () => {
            window.removeEventListener('resize', calcElementsNum);
        };
    }, [numElements]);

    return (
        <div className={wrapperClass} ref={wrapperRef}>
            {positions.map((position, index) => (
                <p 
                    key={index} 
                    className={separatorClass}
                    style={{ transform: `translateX(${position}px)` }}
                >
                    {text}
                </p>
            ))}
        </div>
    );
};

export default ElementsCalc;
