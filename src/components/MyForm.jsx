import React, { useState } from "react";
import { Button, Form, Input } from "antd";
import { inputValidate, timeValidate } from "../utils/timeValidator";
import ModalTheme from "./ModalTheme";

function MyForm(props) {
  const [form] = Form.useForm();
  const [modalVisible, setModalVisible] = useState(false);
  const { title, description, setTitle, setDescription, setTime } = props;
  const [val, setVal] = useState("00:07");

  const handleTime = (value) => {
    if (value === "") {
      setVal("");
      setTime("00:00");
    } else {
      setVal((prev) => {
        if (inputValidate(value) === undefined) return prev;
        return inputValidate(value);
      });
      setTime(timeValidate(value));
    }
  };

  const handleModal = () => {
    setModalVisible(true);
  };

  return (
    <>
      <ModalTheme visible={modalVisible} setVisible={setModalVisible} />
      <div className="form">
        <Form form={form} layout="vertical">
          <Form.Item label="Title" className="g">
            <Input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="form-input"
              placeholder="Title"
            />
          </Form.Item>
          <Form.Item label="Description">
            <Input
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="form-input"
              placeholder="Description"
            />
          </Form.Item>
          <Form.Item label="Time">
            <Input
              value={val}
              onChange={(e) => handleTime(e.target.value)}
              className="form-input"
              placeholder="00:00"
            />
          </Form.Item>
          <Button
            type="text"
            className="edit-theme-button"
            onClick={handleModal}
          >
            <i className="fas fa-sliders-h edit-icon"></i> Edit theme
          </Button>
        </Form>
      </div>
    </>
  );
}

export default MyForm;
