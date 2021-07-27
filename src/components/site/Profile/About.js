import React from "react";
import { Card, Divider } from "antd";

const { Meta } = Card;

export default function About() {
  return (
    <Card
      hoverable
      style={{ width: 240 }}
      cover={
        <img
          alt="example"
          src="https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg.jpg"
        />
      }
    >
      <strong>Contact Details</strong>
      Name John Doe
      <Divider />
      Email <br />
      john.doe@gmail.com
      <Divider />
      Phone number
      <br /> +12345678
      <Divider />
      Default Address
      <br /> California USA
      <Divider />
    </Card>
  );
}
