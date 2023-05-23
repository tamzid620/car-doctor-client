import { useEffect, useRef, useState } from "react";
import ServiceCard from "./ServiceCard";


const Services = () => {
    const [services, setServices] = useState([]);
    const [asc, setAsc] = useState(true)
    const [search ,setSearch ] = useState('');

    useEffect(() => {
        fetch(`https://car-doctor-server-ten-blush.vercel.app/services?sort=${asc ? "asc " : "desc"}`)
            .then(res => res.json())
            .then(data => setServices(data));
    }, [asc])

    return (
        <div className="mt-20">
            <div className="text-center">
                <h3 className="text-2xl font-bold text-orange-600">Our Services</h3>
                <h2 className="text-5xl">Our Service Area</h2>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable. </p>
                <div className="form-control mt-5">
                    <div className="input-group flex justify-center">
                        <input type="text" placeholder="Search…" className="input input-bordered" />
                        <button onClick={handleSearch} className="btn btn-square bg-purple-700">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </button>
                    </div>
                </div>
                <button onClick={() => setAsc(!asc)}
                    className="mt-5 btn bg-purple-700">
                    {asc ? "price High to Low" : "price Low to High"}
                </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;