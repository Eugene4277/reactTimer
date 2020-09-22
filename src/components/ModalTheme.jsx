import React, { useState } from "react";
import { Modal, Button, Form, Input } from "antd";

function ModalTheme(props) {
  const {
    visible,
    setVisible,
    setPrimary,
    setSecondary,
    setBackground,
  } = props;
  const [form] = Form.useForm();

  const [primaryColor, setPrimaryColor] = useState("#f1635f");
  const [secondaryColor, setSecondaryColor] = useState("#ffc652");
  const [backgroundColor, setBackgroundColor] = useState("#ffffff");

  const handleTheme = () => {
    setPrimary(primaryColor);
    setSecondary(secondaryColor);
    setBackground(backgroundColor);

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
            value={primaryColor}
            onChange={(e) => setPrimaryColor(e.target.value)}
          />
        </Form.Item>
        <Form.Item label="Secondary color">
          <Input
            type="color"
            className="form-input color-input"
            value={secondaryColor}
            onChange={(e) => setSecondaryColor(e.target.value)}
          />
        </Form.Item>
        <Form.Item label="Background color">
          <Input
            type="color"
            className="form-input color-input"
            value={backgroundColor}
            onChange={(e) => setBackgroundColor(e.target.value)}
          />
        </Form.Item>
      </Form>
    </Modal>
  );
}

export default ModalTheme;
