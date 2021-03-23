import React, {useState, useEffect} from 'react';

function HookMouse() {

    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    useEffect(() => {
        console.log('useEffect called')
        window.addEventListener('mousemove', logMousePosition)

        return () => {
            console.log('Component unmount')
            window.removeEventListener('mousemove', logMousePosition)
        }
    }, [])

    const logMousePosition = event => {
        console.log('Mouse Event')
        setX(event.clientX)
        setY(event.clientY)
    }

    return (
        <div>
            Hooks X - {x} Y - {y}
        </div>
    );
}

export default HookMouse;