import React, {useEffect} from 'react'
import useLocalStorage from  './useLocalStorage'

const useDarkMode = (key) => {
    const [ someValue, setSomeValue] = useLocalStorage(key);

    useEffect(()=>{
        if(someValue){
            document.body.classList.add("dark-mode");
        }else{
            document.body.classList.remove("dark-mode");
        }
    }, [someValue]);

    const setValue = someValue => {

        setSomeValue(someValue);
        window.localStorage.setItem(key, JSON.stringify(someValue))

    } 
    return [someValue, setValue];
}

export default useDarkMode;
