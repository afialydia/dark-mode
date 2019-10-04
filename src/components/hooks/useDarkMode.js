import useLocalStorage from './useLocalStorage';
import {useEffect} from 'react'

const useDarkMode = (key) => { 
    const [value, setStoredValue] = useLocalStorage(key);

    useEffect(() => {
        if(value){
           document.body.classList.add("dark-mode");
        }
        else{
            document.body.classList.remove("dark-mode");
        }

    }, [value]);

    const setValue = value => {

        setStoredValue(value);
        window.localStorage.setItem(key, JSON.stringify(value))

    } 
    return [value, setValue];
}

export default useDarkMode;