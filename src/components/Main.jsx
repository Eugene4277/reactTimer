import React, { useState } from "react";
import { Layout } from "antd";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";

import MyForm from "./MyForm";
import Brand from "./Brand";
import TimerButtons from "./TimerButtons";
import Footer from "./Footer";
import Timer from "./Timer";

const { Header, Sider, Content } = Layout;

function Main(props) {
  const [collapsed, setCollapsed] = useState(false);

  const [primary, setPrimary] = useState("#f1635f");
  const [secondary, setSecondary] = useState("#ffc652");
  const [background, setBackground] = useState("#ffffff");

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
              setPrimary={setPrimary}
              setSecondary={setSecondary}
              setBackground={setBackground}
            />
            <Footer />
          </div>
        )}
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ background }}>
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: toggle,
              style: { color: primary },
            }
          )}
          <TimerButtons color={primary} time={time} setTime={setTime} />
        </Header>
        <Content
          className="site-layout-background"
          style={{
            padding: 24,
            minHeight: 280,
            background,
          }}
        >
          <Timer
            title={title}
            description={description}
            time={time}
            primaryColor={primary}
            secondaryColor={secondary}
          />
        </Content>
      </Layout>
    </Layout>
  );
}

export default Main;
