import React from 'react';
import { Card, Divider } from 'antd';

const { Meta } = Card;

export default function ProductDetails({imgUrl, height, width}) {
    return (
        <Card
            hoverable
            style={{ width: width, height: height }}
            cover={<img alt="example" src={imgUrl} style={{ padding: "25px" }}/>}
        >
            <Meta title="Europe Street beat" />
        </Card>
    );
}