import  { useState, useEffect } from 'react';
import Switch from 'react-switch';

const ToggleButton = () => {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [darkMode]);

    const toggleMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <div className="flex items-center">
            <span className="mr-2 text-gray-900 dark:text-gray-100">
                {darkMode ? 'Dark Mode' : 'Light Mode'}
            </span>
            <Switch
                onChange={toggleMode}
                checked={darkMode}
                offColor="#ccc"
                onColor="#333"
                offHandleColor="#fff"
                onHandleColor="#fff"
                uncheckedIcon={false}
                checkedIcon={false}
                className="react-switch"
            />
        </div>
    );
};

export default ToggleButton;