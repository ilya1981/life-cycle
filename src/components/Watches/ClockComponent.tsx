import React, {useEffect, useState} from 'react';
import "./watches.css"





type StrokeClass = {
	class: string;
	style:  React.CSSProperties;
}

type CurrentDate = {
	hours: number;
	minutes: number;
	seconds: number;
}

const ClockComponent: React.FC<{ timezoneOffset: number }>  = ({ timezoneOffset }) => {
    const [ currentTime, setCurrentTime ] = useState(new Date());

    useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const utc = now.getTime() + now.getTimezoneOffset() * 60000;
      const cityTime = new Date(utc + timezoneOffset * 3600000);
      setCurrentTime(cityTime);
    };

    updateTime(); // сразу обновляем время
    const intervalId = setInterval(updateTime, 1000);
return () => clearInterval(intervalId); // очистка при размонтировании
  }, [timezoneOffset]);
    
    const getTimeInTimeZone = (timezoneOffset: number): CurrentDate => {
		const currentMinutes = (currentTime.getUTCMinutes() + timezoneOffset % 1 * 60) % 60;
        const currentHours = (currentTime.getUTCHours() + Math.floor(timezoneOffset)) % 12;

		const currentSeconds = currentTime.getUTCSeconds();

		return {hours: currentHours, minutes: currentMinutes, seconds: currentSeconds};
    };

    const generateStrokeClasses = () => {
        const strokeClasses: StrokeClass[] = [];
        for (let i = 0; i < 60; i++) {
            strokeClasses.push({
				class: `clock__stroke ${i % 5 === 0 ? 'clock__stroke' : 'clock__stroke--small'}`,
				style: {
					transform: `rotate(${i * 6}deg`
				}
			});
        }
        return strokeClasses;
    }
	const { hours, minutes, seconds } = getTimeInTimeZone(timezoneOffset)

    return (
        <time className="clock">
            {generateStrokeClasses().map((strokeClass, index) => (
                <span key={index} className={strokeClass.class} style={strokeClass.style}></span>
            ))}
            <span className="clock__hand clock__hand--hour" style={{ transform: `rotate(${hours * 30 + minutes / 4}deg`}}></span>
            <span className="clock__hand clock__hand--minute" style={{ transform: `rotate(${minutes * 6}deg`}}></span>
            <span className="clock__hand clock__hand--second" style={{ transform: `rotate(${seconds * 6}deg`}}></span>
        </time>
    );
};

export default ClockComponent;
