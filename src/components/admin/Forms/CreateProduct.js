import React from "react";
import { Form, Input, InputNumber, Button, Image, Upload, Card } from "antd";
import { UploadOutlined, InboxOutlined } from "@ant-design/icons";

const layout = {
  labelCol: { span: 24 },
  wrapperCol: { span: 8 },
};

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};
/* eslint-enable no-template-curly-in-string */

export default function CreateProject() {
  function onFinish(values) {
    console.log(values);
  }

  function normFile(e) {
    console.log("Upload event:", e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  }

  return (
    <Card>
      <Form
        {...layout}
        name="nest-messages"
        onFinish={onFinish}
        validateMessages={validateMessages}
      >
        <Form.Item
          name={["user", "itemname"]}
          label="Item Name"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={["user", "description"]}
          label="Description"
          rules={[{ type: "text", required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={["user", "category"]}
          label="Category"
          rules={[{ type: "text", required: true }]}
        >
          <InputNumber />
        </Form.Item>
        <Form.Item
          name={["user", "quantity"]}
          label="Quantity"
          rules={[{ type: "number", min: 1, max: 99, required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={["user", "price"]}
          label="Price"
          rules={[{ type: "number", min: 1, max: 99, required: true }]}
        >
          <Input />
        </Form.Item>
        <Image.PreviewGroup>
          <Image
            width={200}
            src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
          />
        </Image.PreviewGroup>
        <Form.Item
          name="upload"
          label="Upload"
          valuePropName="fileList"
          getValueFromEvent={normFile}
          extra="Upload Image"
        >
          <Upload name="logo" action="/upload.do" listType="picture">
            <Button icon={<UploadOutlined />}>Click to upload</Button>
          </Upload>
        </Form.Item>
        <Form.Item label="Dragger">
          <Form.Item
            name="dragger"
            valuePropName="fileList"
            getValueFromEvent={normFile}
            noStyle
          >
            <Upload.Dragger name="files" action="/upload.do">
              <p className="ant-upload-drag-icon">
                <InboxOutlined />
              </p>
              <p className="ant-upload-text">
                Click or drag file to this area to upload
              </p>
              <p className="ant-upload-hint">
                Support for a single or bulk upload.
              </p>
            </Upload.Dragger>
          </Form.Item>
        </Form.Item>
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
}
