import React, { useState } from "react";
import { Modal, Button, Form, Input } from "antd";

function ModalTheme(props) {
  const { visible, setVisible } = props;
  const [form] = Form.useForm();
  const [primary, setPrimary] = useState("#f1635f");
  const [secondary, setSecondary] = useState("#ffc652");
  const [background, setBackground] = useState("#ffffff");

  const handleTheme = () => {
    const primaryElements = document.querySelectorAll(".theme-primary");
    [...primaryElements].map((elem) => (elem.style.color = primary));

    const secondaryElements = document.querySelectorAll(".theme-secondary");
    [...secondaryElements].map((elem) => (elem.style.color = secondary));

    const backgroundElements = document.querySelectorAll(
      ".site-layout-background"
    );
    [...backgroundElements].map((elem) => (elem.style.background = background));
    setVisible(false);
  };

  const handleCancel = (e) => {
    setVisible(false);
  };

  return (
    <Modal
      title="Edit theme"
      visible={visible}
      onOk={handleTheme}
      onCancel={handleCancel}
      footer={[
        <Button key="back" className="modal-cancel-btn" onClick={handleCancel}>
          Cancel
        </Button>,
        <Button
          key="submit"
          type="primary"
          className="modal-success-btn"
          onClick={handleTheme}
        >
          Change
        </Button>,
      ]}
    >
      <Form form={form} layout="vertical">
        <Form.Item label="Primary color">
          <Input
            type="color"
            className="form-input color-input"
            value={primary}
            onChange={(e) => setPrimary(e.target.value)}
          />
        </Form.Item>
        <Form.Item label="Secondary color">
          <Input
            type="color"
            className="form-input color-input"
            value={secondary}
            onChange={(e) => setSecondary(e.target.value)}
          />
        </Form.Item>
        <Form.Item label="Background color">
          <Input
            type="color"
            className="form-input color-input"
            value={background}
            onChange={(e) => setBackground(e.target.value)}
          />
        </Form.Item>
      </Form>
    </Modal>
  );
}

export default ModalTheme;
