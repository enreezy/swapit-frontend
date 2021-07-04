import React from 'react';
import { Layout, Space } from 'antd';
const { Header, Footer, Sider, Content } = Layout;
import PageMenuHeader from './PageHeaderContent';
import CarouselTemplate from './Carousel';
import SideBar from './SideBar';
import EmptyContent from './Empty';
import ProductDetails from './ProductDetails';
import { Row, Col } from 'antd';

const sampleData = [
    {
        id: 1,
        name: 'test1',
        description: 'good test1',
        price: 'P100.00'
    },
    {
        id: 2,
        name: 'test2',
        description: 'good test2',
        price: 'P200.00'
    },
    {
        id: 3,
        name: 'test3',
        description: 'good test3',
        price: 'P300.00'
    },
    {
        id: 4,
        name: 'test4',
        description: 'good test4',
        price: 'P400.00'
    },
    {
        id: 1,
        name: 'test1',
        description: 'good test1',
        price: 'P100.00'
    },
    {
        id: 2,
        name: 'test2',
        description: 'good test2',
        price: 'P200.00'
    },
    {
        id: 3,
        name: 'test3',
        description: 'good test3',
        price: 'P300.00'
    },
    {
        id: 4,
        name: 'test4',
        description: 'good test4',
        price: 'P400.00'
    },
]

export default function LayoutContent() {
    return (

        <Layout>
            <PageMenuHeader />
            <CarouselTemplate />
            <Layout>
                <Sider style={{ height: "100%", marginRight: "5%" }}>
                    <SideBar />
                </Sider>
                <Content>
                    <Row>
                        <Col span={24}>
                            <h1 style={{ textAlign: "center", marginTop: "50px", marginBottom: "50px" }}>
                                Pet Shop
                            </h1>
                        </Col>
                    </Row>
                    <Row>
                        {sampleData.map((data) => (
                            <Col span={8} style={{ marginBottom: "5%" }}>
                                <Space>
                                    <ProductDetails />
                                </Space>
                            </Col>
                        ))}
                    </Row>
                </Content>

            </Layout>
            <CarouselTemplate />
            <Footer>Footer</Footer>
        </Layout>

    );
}