import React from "react";
import { useEffect, useState, useCallback } from "react";
import axios from "axios";

export const TrainingContext = React.createContext();
TrainingContext.displayName = "TrainingContext";

export const TrainingProvider = ({children}) => {
    const [ex1, setEx1] = useState('');
    const [ex2, setEx2] = useState('');
    const [ex3, setEx3] = useState('');
    const [ex4, setEx4] = useState('');
    const [ex5, setEx5] = useState('');
    const [ex6, setEx6] = useState('');

    const [exercises, setExercises] = useState([])
    return(
        <>
            <TrainingContext.Provider
                value={{
                    ex1, setEx1,
                    ex2, setEx2,
                    ex3, setEx3,
                    ex4, setEx4,
                    ex5, setEx5,
                    ex6, setEx6,
                    exercises, setExercises
                }}    
            >
                {children}
            </TrainingContext.Provider>
        </>
    );
}