import { useEffect } from 'react';

export default function (ref: any, setVisible: (isVisible: boolean) => void) {
    const handleOutsideClick = (event: any) => {
        const path = event.path || (event.composedPath && event.composedPath());

        if (!path.includes(ref.current)) {
            setVisible(false);
        }
    }

    useEffect(() => {
        document.body.addEventListener('click', handleOutsideClick);

        return () => {
            document.body.removeEventListener('click', handleOutsideClick);
        }
    }, []);
};