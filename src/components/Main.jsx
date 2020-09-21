import React, { useState } from "react";
import { Layout } from "antd";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import MyForm from "./MyForm";
import Brand from "./Brand";
import Timer from "./Timer";

const { Header, Sider, Content } = Layout;

function Main(props) {
  const [collapsed, setCollapsed] = useState(false);

  const [title, setTitle] = useState("Some title");
  const [description, setDescription] = useState("Some description");
  const [time, setTime] = useState("00:07");

  const toggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        {collapsed ? null : (
          <div className="side-form">
            <Brand />
            <MyForm
              title={title}
              description={description}
              time={time}
              setTime={setTime}
              setDescription={setDescription}
              setTitle={setTitle}
            />
            <div className="footer">
              Made with{" "}
              <a className="footer-link" href="https://reactjs.org/">
                {" "}
                ReactJs{" "}
              </a>{" "}
              by
              <a className="footer-link" href="https://github.com/Eugene4277">
                {" "}
                Eugene
              </a>
            </div>
          </div>
        )}
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background">
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger theme-primary",
              onClick: toggle,
            }
          )}
          <Timer time={time} setTime={setTime} />
        </Header>
        <Content
          className="site-layout-background"
          style={{
            padding: 24,
            minHeight: 280,
          }}
        >
          <div className="text">
            <h1 className="title theme-primary">{title}</h1>
            <h3 className="description theme-secondary">{description}</h3>
            <p className="time theme-primary">
              <b>{time}</b>
            </p>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}

export default Main;
