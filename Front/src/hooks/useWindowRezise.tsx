import { useEffect, useState } from "react";

export function useWindowRezise() {

    const [isMedium, setMedium] = useState<boolean>(false);
    const [isMobile, setMobile] = useState<boolean>(false);

    useEffect(() => {
        const handleResize = () => {
            setMedium(window.matchMedia('(max-width: 768px)').matches);
            setMobile(window.matchMedia('(max-width: 414px)').matches);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return {isMedium, isMobile};
}
