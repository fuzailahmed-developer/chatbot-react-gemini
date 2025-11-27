import { Moon } from 'lucide-react';
import { Sun } from 'lucide-react';
import React, { useEffect, useState } from 'react'

const DarkMode = () => {

    const selectedTheme = localStorage.getItem("selectedTheme");
    const [icon,setIcon] = useState(false)

    const setDarkMode = () => {
        document.documentElement.setAttribute("data-theme", "dark")
        setIcon(true)
        localStorage.setItem("selectedTheme", "dark")
    }
    const setLightMode = () => {
        document.documentElement.setAttribute("data-theme", "light")
        localStorage.setItem("selectedTheme", "light")
        setIcon(false)
    }

    const toggleTheme = (e) => {
        if (e.target.checked) setDarkMode()
        else setLightMode()
    }

    useEffect(() => {
        if (selectedTheme == "dark") {
            setDarkMode()
            setIcon(true)
        }
        else {
            setLightMode()
            setIcon(false)
        }
    }, [])

    return (

        <label htmlFor="mode" className='relative'>
            {
                icon?
                <Sun className='absolute -top-[53%] left-1/2 -translate-1/2 text-icon-color'/>:
                <Moon className='absolute -top-[53%] left-1/2 -translate-1/2 text-icon-color'/>
                
            }
            <input type="checkbox" name="mode" id="mode" onChange={toggleTheme} className='appearance-none w-14 h-14 bg-icon-bg rounded-full mt-2'/>
        </label>

    )
}

export default DarkMode