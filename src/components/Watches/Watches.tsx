import React, {useEffect, useState} from 'react';
import StartForm from "./StartForm";
import Watch from "./Watch";
import WatchType from "./watchType.ts";


const getWatches = (): WatchType[] => {
    const savingWatches: string | null = localStorage.getItem("watches");
    return savingWatches ? JSON.parse(savingWatches) : [];
}

const saveWatches = (watches: WatchType[]) =>
    localStorage.setItem("watches", JSON.stringify(watches));

const Watches: React.FC = () => {

    const [ watches, setWatches ] = useState<WatchType[]>(getWatches());

    useEffect(() => {
        document.title = 'Часы';
    }, []);

    useEffect(() => {
        saveWatches(watches)
    }, [watches]);

    const addWatch = (newWatch: WatchType) => {
        const existingWatch = watches.filter(watch => watch.city === newWatch.city)
        if (existingWatch.length === 0) {
            setWatches(prevWatches => [...prevWatches, newWatch]);
        }

    }

    const removeWatch = ( city: string ) => {
        setWatches([...watches].filter(watch => watch.city !== city));
    }

    return (
        <div className="container mx-auto flex flex-col  items-center justify-center">
            <StartForm onAdd={addWatch} />
            <div className="flex gap-8 flex-wrap  justify-center mt-12">
                {watches.map(watch => (
                    <Watch key={watch.city} watch={watch} onDelete={removeWatch} />
                ))}
            </div>
        </div>
    );
};

export default Watches;