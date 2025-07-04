import { useState, useEffect } from "react";
export const useDebounceSearch = (searchQuery, delay) => {
    const [debaunceValue, setDebaunceValue] = useState(searchQuery);

    useEffect(() => {
        let time;
        if (searchQuery) {
            time = setTimeout(() => {
                setDebaunceValue(searchQuery)
            }, [delay])
        }

        return () => {
            clearTimeout(time);
        }
    }, [searchQuery])

    return debaunceValue;
}

