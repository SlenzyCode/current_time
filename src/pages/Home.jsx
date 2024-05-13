import { useEffect, useState } from "react";

const Home = () => {
    const [time, setTime] = useState(Date.now());
    const [isSmartWatch, setIsSmartWatch] = useState(false);

    useEffect(() => {
        const timerId = setInterval(() => {
            setTime(Date.now());
        }, 1000);

        const handleResize = () => {
            setIsSmartWatch(window.innerWidth <= 768);
        };

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => {
            clearInterval(timerId);
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const formatTime = (time) => {
        const date = new Date(time);
        return {
            hours: date.getHours().toString().padStart(2, "0"),
            minutes: date.getMinutes().toString().padStart(2, "0"),
            seconds: date.getSeconds().toString().padStart(2, "0"),
        };
    };

    return (
        <div className="hero min-h-screen bg-base-200 text-white">
            {isSmartWatch ? (
                <div className="hero-content text-center">
                    <div className="text-4xl font-bold">{formatTime(time).hours}</div>
                    <div className="text-4xl font-bold">{formatTime(time).minutes}</div>
                    <div className="text-4xl font-bold">{formatTime(time).seconds}</div>
                </div>
            ) : (
                <div className="hero-content text-center">
                    <div className="max-w-md mx-auto">
                        <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-10xl font-bold">{formatTime(time).hours}:{formatTime(time).minutes}:{formatTime(time).seconds}</h1>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Home;