import React, {ChangeEvent, FormEvent, useState} from 'react';
import WatchType from "./watchType.ts";

interface FormProps {
    onAdd: (watch: WatchType) => void;
}
const StartForm : React.FC<FormProps> = ({ onAdd }) => {
    const [city, setCity] = useState("");
    const [timezoneOffset, setTimezoneOffset] = useState("")

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!city || !timezoneOffset) return;
        const newWatch: WatchType = { city, timezoneOffset: parseFloat(timezoneOffset) };
        onAdd(newWatch);
        setCity("");
        setTimezoneOffset("");
    }

    return (
            <form onSubmit={handleSubmit} id="addClockForm" className="mx-16 mt-16 flex items-end gap-4">
                <div className="flex flex-col">
                    <label htmlFor="cityName" className="font-bold uppercase">Название:</label>
                    <input
                        type="text"
                        id="cityName"
                        value={city}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => setCity(e.target.value)}
                        className="border-2 border-green-300 h-10"
                        required />
                </div>
                <div className="flex flex-col">
                <label htmlFor="timezoneOffset" className="font-bold uppercase">Временная зона</label>
                <input
                    type="number"
                    id="timezoneOffset"
                    value={timezoneOffset}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setTimezoneOffset(e.target.value)}
                    step="0.5"
                    className="border-2 border-green-300 h-10"
                    required />
                </div>
                <button type="submit" className="bg-green-600 rounded-md h-10 text-white py-2  px-4">Добавить</button>
            </form>
    );
};

export default StartForm;