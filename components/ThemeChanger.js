import react from 'react';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

const ThemeChanger = () => {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()

    useEffect(() => {
        setMounted(true);
    }, [])

    if (!mounted) {
        return null
    }

    return (
        <div>
            <button onClick={ () => setTheme('light') }>Light Mode</button>
            <button onClick={ () => setTheme('dark') }>Dark Mode</button>
        </div>
    )
}

export default ThemeChanger