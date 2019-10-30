import React from 'react'
import useLocalStorage from  './useLocalStorage'

const useDarkMode = (key) => {
    const [ someValue, setSomeValue] = useLocalStorage(key);

    useEffect(()=>{
        if(value){
            document.body.classList.add("dark-mode");
        }else{
            document.body.classList.remove("dark-mode");
        }
    }, [someValue]);

    const setValue = value => {

        setSomeValue(value);
        window.localStorage.setItem(key, JSON.stringify(value))

    } 
    return [value, setValue];
}

export default useDarkMode;
