import React, { useState, useEffect } from 'react'
import { useParams, Link } from "react-router-dom";
import { Typography, Spin, Avatar } from "antd";

const User = () => {
    const params = useParams();

    const [data, setData] = useState(null);

    const getData = () => {
        fetch(
        "https://mock-api-builder.vercel.app/api/schema/get/5f737a620d93f50007dd29ae"
        )
        .then((r) => r.json())
        .then((json) => setData(json));
    };

    useEffect(() => {
        getData();
    }, []);

    if (!data) return <Spin/>

const date = new Date(data.userCreated);

    return (
        <div>
        <Link to="/">←Back</Link>
            <Typography.Title>{data.name}</Typography.Title>
            <div>
            <Typography.Text>{data.username} ({data.email})</Typography.Text>
            </div>
            <Avatar size="large" src={data.image}/>
            <div>
            <Typography.Text>User created at: {date.getDate()}-{date.getMonth() + 1}-{date.getYear()}</Typography.Text>

            </div>
        </div>
    )
}

export default User
