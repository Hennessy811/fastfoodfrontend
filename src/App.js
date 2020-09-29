import React, { useEffect, useState } from "react";
import {
  Layout,
  
  Menu,
  Breadcrumb,
} from "antd";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import UserList from './UserList';
import User from './User';
import "./App.css";

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Layout className="layout">
    <Router>
      <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
          <Menu.Item key="1">nav 1</Menu.Item>
          <Menu.Item key="2">nav 2</Menu.Item>
          <Menu.Item key="3">nav 3</Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: "0 50px" }}>
        <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <div className="site-layout-content">
        <Switch>
          <Route path="/" exact component={UserList} />
          <Route path="/user/:id" component={User} />
        </Switch>
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Geekbrains | Fast food Front-end
      </Footer>
      </Router>
    </Layout>
  );
}

export default App;
