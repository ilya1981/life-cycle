import React, { useEffect } from 'react';
import { Link, Outlet } from "react-router-dom";

export const HomePage: React.FC = () => {
    useEffect(() => {
        document.title = 'Home';
    }, []);

    return (
        <div className="container items-center flex justify-center flex-col mx-auto bg-white">
           
            <div className="w-full py-12 flex flex-col items-center ">
                <div className="pt-12 mx-16 text-center">
                    <span className="font-yeseva text-black uppercase text-4xl font-bold">Жизненный цикл и работа с HTTP</span>
                </div>
                <div className="mx-16 mt-6 text-center">
                    <span className="font-rubik font-bold text-2xl">Домашнее задание по теме "Жизненный цикл и работа с HTTP"</span>
                </div>

                <ul className="mt-6 text-blue-950 flex flex-col gap-4 underline">

                    <li><Link to="/watches">мировые часы</Link></li>
                    <li><Link to="/crud">CRUD</Link></li>
                    <li><Link to="/chat">чат</Link></li>
                </ul>
                <Outlet />

               
            </div>
        </div>
    )
}
