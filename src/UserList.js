import React, {useEffect, useState} from 'react'
import {
  Layout,
  Avatar,
  Menu,
  Breadcrumb,
  Typography,
  List,
  Statistic,
} from "antd";
import { Link } from "react-router-dom";

const UserList = () => {

  const [data, setData] = useState([]);

  const getData = () => {
    fetch(
      "https://mock-api-builder.vercel.app/api/schema/get/5f7376e29c88f10009744854"
    )
      .then((r) => r.json())
      .then((json) => setData(json));
  };

  useEffect(() => {
    getData();
  }, []);

  if (!data.length) return <div>Loading...</div>;

    return (
        <div>
            <div className="page-title">
            <Typography.Title>Fast food Front-end</Typography.Title>
            <Statistic
              title="Active users"
              value={(Math.random() * 1000).toFixed(0)}
            />
          </div>

          <List
            itemLayout="horizontal"
            dataSource={data}
            renderItem={(item) => (
              <List.Item>
                <List.Item.Meta
                  avatar={<Avatar src={item.image} />}
                  title={<Link to={`/user/${item.username}`}>{item.name}</Link>}
                  description={item.email}
                />
              </List.Item>
            )}
          />
        </div>
    )
}

export default UserList
