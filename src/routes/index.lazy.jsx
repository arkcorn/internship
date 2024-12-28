import { useState } from "react";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
    const [data, setData] = useState({
        company: "",
        location: "",
        position: "",
        date: "",
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        const jsonData = JSON.stringify(data);
        console.log(jsonData)
        setData({
            company: "",
            location: "",
            position: "",
            date: "",
        })
    }

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }


    return (
        <div className="index">
            <form
                onSubmit={handleSubmit}>
                <input type="text" name="company" placeholder="Enter company" onChange={handleChange} value={data.company} />
                <input type="text" name="location" placeholder="Enter location" onChange={handleChange} value={data.location} />
                <input type="text" name="position" placeholder="Enter position" onChange={handleChange} value={data.position} />
                <input type="text" name="date" placeholder="Enter date applied" onChange={handleChange} value={data.date} />
                <button type="submit">Log</button>
            </form>
        </div>
    );
}