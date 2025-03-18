import { useEffect } from "react";
import { FaSpinner } from "react-icons/fa";

export const LoadingScreen = ({ onComplete }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onComplete();
        }, 2000);

        return () => clearTimeout(timer);
    }, [onComplete]);

    return (
        <div className="fixed inset-0 z-50 bg-[#b70000] text-gray-100 flex flex-col items-center justify-center">
            <div className="mb-4">
                <FaSpinner className="w-10 h-10 animate-spin" />
            </div>
            <div className="w-3/4 max-w-[200px] h-[2px] bg-white/20 rounded overflow-hidden">
                <div className="w-[40%] h-full bg-red-300 shadow-[0_0_15px_#8B0000] animate-loading-bar" />
            </div>
        </div>
    );
};

/*import { useEffect, useState } from "react";

export const LoadingScreen = ({ onComplete }) => {
    const [text, setText] = useState("");
    const fullText = `Loading`;

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setText(fullText.substring(0, index))
            index++;

            if (index > fullText.length) {
                clearInterval(interval)

                setTimeout(() => {
                    onComplete();
                }, 1000);
            }
        }, 100);

        return () => clearInterval(interval)
    }, [onComplete]);

    return (
        <div className="fixed inset-0 z-50 font-['Gelasio'] bg-[#b70000] text-gray-100 flex flex-col items-center justify-center">
            <div className="mb-4 text-4xl font-mono font-bold">
                {text} <span className="animate-blink ml-1"> | </span>
            </div>

            <div className="w-[200px] h-[2px] bg-white rounded relative overflow-hidden">
                <div className="w-[40%] h-full bg-red-300 shadow-[0_0_15px_#8B0000] animate-loading-bar"></div>
            </div>
        </div>
    )
}*/