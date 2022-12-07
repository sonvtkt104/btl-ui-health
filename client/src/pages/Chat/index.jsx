import { 
    MenuOutlined, 
    SearchOutlined,
    PlusOutlined 
} from '@ant-design/icons'
import { 
    Row,
    Carousel,
    Col
} from 'antd'
import './index.css'
import { Footer } from '../../components/index'
import { useNavigate } from 'react-router-dom'
import {useState, useEffect} from 'react'

const data = [
    "Hiếu Văn",
    "Sơn",
    "Hava",
    "Madison",
    "Văn Toàn"
]


export default function Chat () {

    const navigate = useNavigate()

    return (
        <div
            // style={{
            //     paddingTop: 30
            // }}
        >
            <Row justify='space-between' style={{ maxHeight: 100 ,padding: '50px 25px 30px 25px', borderBottom: '1px solid #eeeeee', position: 'fixed', background: 'white', top: 0, left: 0, right: 0, zIndex: '2'}}>
                <Col>
                    <Row>
                        {/* <Col>
                            <MenuOutlined style={{fontSize: 22, marginRight: 10}} />
                        </Col> */}
                        <Col style={{fontSize: 24, fontWeight: 'bold', lineHeight: '22px'}}>
                            Trò chuyện
                        </Col>
                    </Row>
                </Col>
                <Col>
                    <SearchOutlined className='chat-search' style={{fontSize: 22}} />
                </Col>
            </Row>
            <div style={{height: 'calc(100vh - 100px - 80px)'}}>
                <div style={{background: '#f9fdff', paddingTop: 130}}>
                    <p style={{fontSize: 18, marginBottom: 20, paddingLeft: 25}}>Gợi ý</p>
                    <div className='chat-scroll-x' style={{ overflowX: 'scroll', paddingBottom: 20, paddingLeft: 25, borderBottom: '1px solid #eeeeee'}}>
                        <div style={{display: "inline-flex"}}>
                            {
                                Array.from(Array(5).keys()).map((item, i) => (
                                    <p
                                        className="box-user active"
                                        style = {{ 
                                            width: 60, height : 60,
                                            borderRadius: '50%',
                                            backgroundImage: `url("/images/logo-user-${i}.jpeg")`,
                                            backgroundSize: 'cover',
                                            marginRight: 15,
                                            position: 'relative',
                                        }}
                                    >
                                        <span></span>
                                    </p>
                                ))
                            }
                        </div>
                    </div>
                </div>
                <div style={{padding: '20px 20px 0 25px', background: '#f9fdff' }}>
                    <Row justify='center' style={{marginBottom: 30}}>
                        <Col style={{
                            fontSize: 16,
                            marginRight: 10,
                            padding: '0 10px 15px',
                            borderBottom: '2px solid #00b4ff',
                            fontWeight: 'bold'
                        }}>
                            Nguời dùng
                        </Col>
                        <Col style={{
                            fontSize: 16,
                            marginLeft: 10,
                            padding: '0 10px 15px'
                        }}>
                            Bác sĩ</Col>
                    </Row>
                    {
                        Array.from(Array(5).keys()).map((item, i) => (
                            <Row justify='space-between' style={{marginBottom: 20}}
                                onClick={() => {
                                    navigate("/message")
                                }}
                            >
                                <Col xs={19}>
                                    <Row>
                                        <Col >
                                            <img style={{width: 60, height: 60, borderRadius: '50%'}} src={`/images/logo-user-${i}.jpeg`} alt="" />
                                        </Col>
                                        <Col style={{marginLeft: 10, display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                                            <p style={{fontWeight: 'bold', fontSize: '16px', marginBottom: 5}}>{data[i]}</p>
                                            <span style={{fontSize: 14, color: '#a6abae'}}>hey, how are you?</span>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col xs={5} style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center'}}>
                                    <span>1:04am</span>
                                </Col>
                            </Row>
                        ))
                    }
                </div>
                <PlusOutlined 
                    className='chat-plus'
                    style={{
                        position: 'fixed', 
                        bottom: 120,
                        right: 30,
                        color: 'white',
                        padding: 17,
                        borderRadius: '50%',
                        background: 'linear-gradient(#7fd8ff, #00b4ff)',
                        zIndex: 99, 
                        fontSize: 22
                    }} 
                />
            </div>
            <Footer active='chat'/>
        </div>
    )
}