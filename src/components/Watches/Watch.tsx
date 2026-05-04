import React from 'react';
import WatchType from "./watchType.ts";
import "./watches.css"
import ClockComponent from "./ClockComponent.tsx";

interface WatchProps {
    watch: WatchType;
    onDelete: (city: string) => void;
}

const Watch : React.FC<WatchProps> = ({watch, onDelete}) => {
    const { city, timezoneOffset } = watch;
    return (
        <div className=" flex flex-col text-center relative">

            <span className="font-bold uppercase px-4">{city}</span>
            <ClockComponent timezoneOffset={timezoneOffset}/>
            <button
                className="absolute -top-3 -right-3  bg-yellow-500 text-white w-6 h-6 rounded-full flex items-center justify-center"
                onClick={() => onDelete(city)}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                    />
                </svg>
            </button>
        </div>
    );
};

export default Watch;