import React, { useState } from 'react';
import { Layout, Space } from 'antd';
const { Header, Footer, Sider, Content } = Layout;
import PageMenuHeader from './PageHeaderContent';
import CarouselTemplate from './Carousel';
import SideBar from './SideBar';
import EmptyContent from './Empty';
import ProductDetails from './ProductDetails';
import { Row, Col } from 'antd';
import { Card, Divider, Button } from 'antd';

const { Meta } = Card;

const sampleData = [
    {
        id: 1,
        name: 'test1',
        description: 'good test1',
        price: 'P100.00',
        img: "assets/images/items/3.jpg"
    },
    {
        id: 2,
        name: 'test2',
        description: 'good test2',
        price: 'P200.00',
        img: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
    },
    {
        id: 3,
        name: 'test3',
        description: 'good test3',
        price: 'P300.00',
        img: "assets/images/items/5.jpg"
    },
    {
        id: 4,
        name: 'test4',
        description: 'good test4',
        price: 'P400.00',
        img: "assets/images/items/6.jpg"
    },
    {
        id: 5,
        name: 'test1',
        description: 'good test1',
        price: 'P100.00',
        img: "assets/images/items/7.jpg"
    },
    {
        id: 6,
        name: 'test2',
        description: 'good test2',
        price: 'P200.00',
        img: "assets/images/items/8.jpg"
    },
    {
        id: 7,
        name: 'test3',
        description: 'good test3',
        price: 'P300.00',
        img: "assets/images/items/9.jpg"
    },
    {
        id: 8,
        name: 'test4',
        description: 'good test4',
        price: 'P400.00',
        img: "assets/images/items/10.jpg"
    },
]

export default function LayoutContent() {
    return (
        <>
            <Layout>
                <PageMenuHeader />
                <br />
                <Card style={{ width: "70%", margin: "0 auto" }}>
                    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                        <Col span={6} >
                            <ul style={{ listStyleType: "none" }}>
                                <li style={{ margin: "0 auto" }}>Fashion and Clothes</li>
                                <Divider style={{ margin: 'inherit' }} />
                                <li style={{ margin: "0 auto" }}>Automobile and motors</li>
                                <Divider style={{ margin: 'inherit' }} />
                                <li style={{ margin: "0 auto" }}>Gardening and agriculture</li>
                                <Divider style={{ margin: 'inherit' }} />
                                <li style={{ margin: "0 auto" }}>Electronics and tect</li>
                                <Divider style={{ margin: 'inherit' }} />
                                <li style={{ margin: "0 auto" }}>Packaging and Printing</li>
                                <Divider style={{ margin: 'inherit' }} />
                                <li style={{ margin: "0 auto" }}>Home and kitchen</li>
                                <Divider style={{ margin: 'inherit' }} />
                                <li style={{ margin: "0 auto" }}>Digital Goods</li>
                                <Divider style={{ margin: 'inherit' }} />
                                <li style={{ margin: "0 auto" }}>More Items</li>
                                <Divider style={{ margin: 'inherit' }} />
                            </ul>
                        </Col>
                        <Col span={12}>
                            <Layout>
                                <CarouselTemplate />
                            </Layout>
                        </Col>
                        <Col span={6}>
                            <ul style={{ listStyleType: "none" }}>
                                <li style={{ margin: "0 auto" }}>Fashion and Clothes</li>
                                <Divider style={{ margin: 'inherit' }} />
                                <li style={{ margin: "0 auto" }}>Automobile and motors</li>
                                <Divider style={{ margin: 'inherit' }} />
                                <li style={{ margin: "0 auto" }}>Gardening and agriculture</li>
                                <Divider style={{ margin: 'inherit' }} />
                            </ul>
                        </Col>
                    </Row>
                </Card>
                <br />
                <Card style={{ width: "70%", margin: "0 auto" }}>
                    <Content>
                        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                            {sampleData.slice(2).map((data) => (
                                <Col span={4}>
                                    <ProductDetails imgUrl={data.img} height="300px" width="100%" />
                                </Col>
                            ))}
                        </Row>
                    </Content>

                </Card>
                <br />
                <Card style={{ width: "70%", margin: "0 auto" }}>
                    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                        <Col span={9}>
                            <Card
                                hoverable
                                style={{ width: "100%", height: "600px" }}
                                cover={<img alt="example" src="assets/images/items/2.jpg" />}
                            >
                                <Meta title="Europe Street beat" description="www.instagram.com" />
                            </Card>
                        </Col>
                        <Col span={15}>
                            <Row>
                            {sampleData.map((data) => (
                                <Col span={6}>
                                    <ProductDetails imgUrl={data.img} height="300px" width="100%" />
                                </Col>
                            ))}
                            </Row>
                        </Col>

                    </Row>
                </Card>
                <br />
                <Card style={{ width: "70%", margin: "0 auto" }}>
                    <Row>
                        <Col span={9}>
                            <Card
                                hoverable
                                style={{ width: "100%", height: "600px" }}
                                cover={<img alt="example" src="assets/images/items/14.jpg" />}
                            >
                                <Meta title="Europe Street beat" description="www.instagram.com" />
                            </Card>
                        </Col>
                        <Col span={15}>
                            <Row>
                                {sampleData.map((data) => (
                                    <Col span={6}>
                                        <ProductDetails imgUrl={data.img} height="300px" width="100%" />
                                    </Col>
                                ))}
                            </Row>
                        </Col>

                    </Row>
                </Card>
                <br />
                <CarouselTemplate />
                <Footer>Footer</Footer>

            </Layout>
        </>
    );
}