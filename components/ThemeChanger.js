import React from 'react';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

const ThemeChanger = () => {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()
    const opposite = theme === 'dark' ? 'Light' : 'Dark'

    useEffect(() => {
        setMounted(true);
    }, [])

    if (!mounted) {
        return null
    }

    return (<>
        <button 
            onClick={ () => setTheme(opposite.toLowerCase()) }
            className="btn btn-outline-secondary"
        >
            { opposite } Mode
        </button>
    </>)
}

export default ThemeChanger