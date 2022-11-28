import { useState, useEffect } from "react";

export const useLocalStorage = (key, initialValue) => {
    const [value, setValue] = useState(() => {
        const item = localStorage.getItem(key);
        if(!item) return initialValue;
        if(item) {
            const data = JSON.parse(item)
            return data
        }

        if(typeof initialValue === "function") return initialValue();
    })

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))
    }, [value, key])

    return [value, setValue];
}