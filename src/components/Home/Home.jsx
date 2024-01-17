import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Room from '../Room/Room';
import './Home.css'

const Home = () => {

    const datas = useLoaderData();

    return (
        <div>
            <div className="room-details">
                {
                    datas.map(data =>
                        <Room
                            key={data.id}
                            data={data}
                        >
                        </Room>)
                }
            </div>
        </div>
    );
};

export default Home;