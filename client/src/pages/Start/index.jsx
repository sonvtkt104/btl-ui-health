import { Row, Col, Modal, Form, Input, Button } from 'antd'
import { useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './index.css'

const data = [
    {
        title: "Theo dõi chế độ dinh dưỡng hằng ngày",
        des: "Tính toán, ghi lại chỉ số calo hàng ngày của người dùng để đưa ra kế hoạch ăn uống hợp lý"
    },
    {
        title: "Xây dựng kế hoạch bữa ăn",
        des: "Cung cấp tính năng xây dựng kế hoạch bữa ăn hằng ngày của người dùng để ghi lại những thức ăn đã dùng trong ngày"
    },
    {
        title: "Kiểm tra nhanh sức khỏe",
        des: "Cho người dùng trả lời nhanh các câu hỏi về sức khỏe để chẩn đoán nhanh sức khỏe hiện tại của người dùng"
    },
    {
        title: "Tư vấn từ bác sĩ dinh dưỡng",
        des: "Ứng dụng cho phép người dùng nhắn tin với bác sĩ dinh dưỡng để hỏi đáp các thắc mắc về dinh dưỡng chế độ ăn và luyện tập hằng ngày"
    }
]

export default function Start() {
    const [modalLogin, setModalLogin] = useState(false)
    const [modalSignUp, setModalSignUp] = useState(false)
    const [slide, setSlide] = useState(0)
    const navigate = useNavigate()

    const intervalTime = useRef()

    useEffect(() => {
        intervalTime.current = setInterval(() => {
            console.log('hi')
            setSlide(pre => (pre + 1) % (data.length))
        }, 4500) // 3s + 1.5s animation

        return () => {
            clearInterval(intervalTime.current)
        }
    },[])



    return (
        <>
            <Col
                style={{
                    position: 'relative',
                    background: "#b1e3ff",
                    // backgroundImage: 'url("/images/bg.png")',
                    // backgroundSize: 'cover',
                    height: '100vh',
                    width: '100vw',
                    color: '#fff', 
                    opacity: (modalLogin || modalSignUp) ? 0.4 : 1
                }}
            >
                <div
                    style={{ 
                        position: 'absolute',
                        bottom: 0, left : 0, right : 0, top : 0,
                        background: '#000000',
                        opacity: 0.3,
                        zIndex:1
                    }}
                >
                </div>
                <div
                    style={{ 
                        position: 'absolute',
                        bottom: 0, left : 0, right : 0, top : 0,
                        zIndex:2
                    }}
                >
                    <Row justify='center' style={{position: 'absolute', bottom: 200, width: '100%' }}>
                        <Col>
                            <div >
                                <img style={{display: 'block', margin: 'auto'}} src="/images/logo.png" alt="logo" />
                            </div>
                            <Row style={{overflow: 'hidden'}}>
                                {
                                    data.map((item, index) => (
                                        <div key={index} className={`start-slide ${slide == index ? 'active' : ''}`}
                                        >
                                            <p style={{fontWeight: 'bold', color: '#fff', fontSize: 20}}>{item.title}</p>
                                            <p style={{color: '#fff', fontSize: 12, marginTop: 10}}>{item.des}</p>
                                        </div>
                                    ))
                                }
                            </Row>
                            <Row className='start-slide-step'>
                                {
                                    data.map((item, index) => (
                                        <span key={index} className={index == slide ? 'active' : ''}
                                            onClick={() => { 
                                                setSlide(index)
                                            }}
                                        >

                                        </span>
                                    ))
                                }
                            </Row>
                        </Col>
                    </Row>
                    <Row style={{ position: 'absolute', bottom: 70, width: '100%' }}>
                        <Col xs={12} style={{ textAlign: 'center', borderRight: '2px solid #fff', padding: '10px 0' }}>
                            <span style={{ cursor: 'pointer', color: '#fff', fontSize: 18, fontWeight: 'bold' }}
                                onClick={() => {
                                    setModalSignUp(true)
                                }}
                            >
                                Đăng ký
                            </span>
                        </Col>
                        <Col xs={12} style={{ textAlign: 'center', padding: '10px 0' }}>
                            <span style={{ cursor: 'pointer', color: '#fff', fontSize: 18, fontWeight: 'bold' }}
                                onClick={() => {
                                    setModalLogin(true)
                                }}
                            >
                                Đăng nhập
                            </span>
                        </Col>
                    </Row>
                </div>


            </Col>
            {
                modalLogin && (
                    <div
                        style={{
                            position: 'fixed',
                            top: 0, left: 0, right: 0, bottom: 0,
                            background: '#00000099',
                            padding: '30px',
                            zIndex: 3
                        }}
                    >
                        <div style={{ marginBottom: 30 ,textAlign: 'center', fontSize: '20px', color: '#fff', fontWeight: 'bold' }}>
                            Đăng nhập
                        </div>

                        <Form
                            name="basic"
                            layout="vertical"
                            initialValues={{ remember: true }}
                            autoComplete="off"
                            style={{
                                padding: '0 20px'
                            }}
                        >
                            <Form.Item
                                label={<span style={{fontSize: '16px', fontWeight: 'bold', color: '#fff'}}>Tên đăng nhập</span>}
                                name="username"
                                rules={[{ required: true, message: 'Please input your username!' }]}
                            >
                                <Input 
                                    style={{
                                        border: 'none',
                                        borderRadius: '10px',
                                        height: 40, 
                                        padding: '0 15px',
                                        background: "#ccc",
                                    }}
                                />
                            </Form.Item>

                            <Form.Item
                                label={<span style={{fontSize: '16px', fontWeight: 'bold', color: '#fff'}}>Mật khẩu</span>}
                                name="password"
                                rules={[{ required: true, message: 'Please input your password!' }]}
                                style={{
                                    marginBottom: 40
                                }}
                            >
                                <Input.Password 
                                    className='app-input-form'
                                    style={{
                                        border: 'none',
                                        borderRadius: '10px',
                                        height: 40, 
                                        padding: '0 15px',
                                        background: "#ccc",
                                    }}
                                />
                            </Form.Item>

                            <Form.Item>
                                <Button 
                                    type='primary'
                                    style={{
                                        border: 'none',
                                        borderRadius: '10px',
                                        height: 40, 
                                        padding: '0 15px',
                                        color: '#fff', 
                                        fontWeight: 'bold', 
                                        fontSize: 16, 
                                        width: '100%'
                                    }}
                                    onClick={() => { 
                                        navigate('/home')
                                    }}
                                >
                                    <span style={{color: '#fff'}}>Đăng nhập</span>
                                </Button>
                            </Form.Item>
                        </Form>

                        <Row style={{padding: '0 20px'}}>
                            <span style={{fontSize: 16, fontWeight: 'bold', color: '#fff', cursor: 'pointer'}}>
                            Quên mật khẩu?
                            </span>
                        </Row>

                        <span style={{ position: 'absolute', top: 15, left: 15, cursor: 'pointer' }}
                            onClick={() => { 
                                setModalLogin(false);
                            }}
                        >
                            <span role="img" aria-label="close" class="anticon anticon-close ant-modal-close-icon">
                                <svg viewBox="64 64 896 896" focusable="false" data-icon="close" width="1.5em" height="1.5em" fill="#fff" aria-hidden="true"><path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 00203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"></path></svg>
                            </span>
                        </span>
                    </div>
                )
            }
            {
                modalSignUp && (
                    <div
                        style={{
                            position: 'fixed',
                            top: 0, left: 0, right: 0, bottom: 0,
                            background: '#00000099',
                            padding: '30px',
                            zIndex: 3
                        }}
                    >
                        <div style={{ marginBottom: 30 ,textAlign: 'center', fontSize: '20px', color: '#fff', fontWeight: 'bold' }}>
                            Đăng ký
                        </div>

                        <Form
                            name="basic"
                            layout="vertical"
                            initialValues={{ remember: true }}
                            autoComplete="off"
                            style={{
                                padding: '0 20px'
                            }}
                        >
                            <Form.Item
                                label={<span style={{fontSize: '16px', fontWeight: 'bold', color: '#fff'}}>Email</span>}
                                name="email"
                                rules={[{ required: true, message: 'Please input your email!' }]}
                            >
                                <Input 
                                    style={{
                                        border: 'none',
                                        borderRadius: '10px',
                                        height: 40, 
                                        padding: '0 15px',
                                        background: "#ccc",
                                    }}
                                />
                            </Form.Item>

                            <Form.Item
                                label={<span style={{fontSize: '16px', fontWeight: 'bold', color: '#fff'}}>Tên đăng nhập</span>}
                                name="username"
                                rules={[{ required: true, message: 'Please input your username!' }]}
                            >
                                <Input 
                                    style={{
                                        border: 'none',
                                        borderRadius: '10px',
                                        height: 40, 
                                        padding: '0 15px',
                                        background: "#ccc",
                                    }}
                                />
                            </Form.Item>

                            <Form.Item
                                label={<span style={{fontSize: '16px', fontWeight: 'bold', color: '#fff'}}>Mật khẩu</span>}
                                name="password"
                                rules={[{ required: true, message: 'Please input your password!' }]}
                                style={{
                                    marginBottom: 40
                                }}
                            >
                                <Input.Password 
                                    className='app-input-form'
                                    style={{
                                        border: 'none',
                                        borderRadius: '10px',
                                        height: 40, 
                                        padding: '0 15px',
                                        background: "#ccc",
                                    }}
                                />
                            </Form.Item>

                            <Form.Item>
                                <Button 
                                    type='primary'
                                    style={{
                                        border: 'none',
                                        borderRadius: '10px',
                                        height: 40, 
                                        padding: '0 15px',
                                        color: '#fff', 
                                        fontWeight: 'bold', 
                                        fontSize: 16, 
                                        width: '100%'
                                    }}
                                    onClick={() => {
                                        navigate("/quick-info")
                                    }}
                                >
                                    <span style={{color: '#fff'}}>Tiếp tục</span>
                                </Button>
                            </Form.Item>
                        </Form>


                        <span style={{ position: 'absolute', top: 15, left: 15, cursor: 'pointer' }}
                            onClick={() => { 
                                setModalSignUp(false);
                            }}
                        >
                            <span role="img" aria-label="close" class="anticon anticon-close ant-modal-close-icon">
                                <svg viewBox="64 64 896 896" focusable="false" data-icon="close" width="1.5em" height="1.5em" fill="#fff" aria-hidden="true"><path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 00203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"></path></svg>
                            </span>
                        </span>
                    </div>
                )
            }
        </>
    )
}