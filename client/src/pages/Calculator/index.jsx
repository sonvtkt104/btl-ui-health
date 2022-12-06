import { Spin, Col, Row, Progress } from 'antd';
import './index.css'
import { useRef, useState, useEffect } from 'react';
import { ButtonApp } from '../../components';
import { useNavigate } from 'react-router-dom';

export default function Calculator () {
    const [detail, setDetail] = useState(false)

    const navigate = useNavigate()

    useEffect(() => {
        setTimeout(() => {
            setDetail(true)
        }, 3000)
    }, [])


    return (
        <>
            <Col className={`calculator flex-col ${detail ? 'active' : ''}`} style={{height: '100vh', justifyContent: 'center', padding: '20px', position: 'relative', zIndex: 1}}>
                <Spin />
                <Row style={{textAlign: 'center', fontSize: 22, fontWeight: 'bold', margin: '20px 0'}}>Tạo kế hoạch dinh dưỡng của bạn</Row>
                <p style={{textAlign: 'center', color: "grey"}}>Đang phân tích ...</p>
            </Col>

            <Col className={`calculator-detail flex-col ${detail ? 'active' : ''}`} style={{ padding: '40px 25px', textAlign: 'center'}}>
                <p style={{fontSize: 24, fontWeight: 'bold'}}>
                    Kế hoạch dinh dưỡng của bạn
                </p>
                <p style={{color: 'grey', fontSize: 12, margin: '20px 0 50px'}}>Để đạt chuẩn độ dinh dưỡng mỗi ngày, chúng tôi đã xây dựng kế hoạch dinh dưỡng hằng ngày này cho bạn</p>

                <p style={{fontSize: 32, fontWeight: '700', color: '#65bc66'}}>1923</p>
                <p style={{color: 'grey', fontSize: 12, margin: '10px 0 30px'}}>Lượng calories cần đạt</p>
                <div style={{textAlign: 'left'}}>
                    <div>
                        <Row style={{flexWrap: 'nowrap'}}>
                            <Col style={{marginRight: 15}}>
                                <Progress 
                                    type="circle"
                                    strokeColor="#43a5f2"
                                    trailColor="#EDF1F5"
                                    strokeWidth={9}
                                    percent={60}
                                    format={(percent) => {
                                        return (
                                            <div style={{
                                                position: 'relative',
                                                color: '#43a5f2',
                                                fontWeight: 'bold'
                                            }}>
                                                {percent}
                                                <span style={{position: 'absolute', fontSize: 12, color: '#43a5f2'}}>
                                                    %
                                                </span>
                                            </div>
                                        );
                                    }}
                                    width={70}
                                />
                            </Col>
                            <Col className='flex-col-center'>
                                <p style={{fontWeight: 'bold'}}>Tinh bột</p>
                                <p style={{fontSize: 12, color: 'grey', marginTop: 7}}>Tinh bột cung cấp năng lượng cho bạn, chung là một phần của chế độ ăn lành mạnh</p>
                            </Col>
                        </Row>
                    </div>
                    <div style={{margin: '25px 0'}}>
                        <Row style={{flexWrap: 'nowrap'}}>
                            <Col style={{marginRight: 15}}>
                                <Progress 
                                    type="circle"
                                    strokeColor="#e5447a"
                                    trailColor="#EDF1F5"
                                    strokeWidth={9}
                                    percent={20}
                                    format={(percent) => {
                                        return (
                                            <div style={{
                                                position: 'relative',
                                                color: '#e5447a',
                                                fontWeight: 'bold'
                                            }}>
                                                {percent}
                                                <span style={{position: 'absolute', fontSize: 12, color: '#e5447a'}}>
                                                    %
                                                </span>
                                            </div>
                                        );
                                    }}
                                    width={70}
                                />
                            </Col>
                            <Col className='flex-col-center'>
                                <p style={{fontWeight: 'bold'}}>Chất đạm</p>
                                <p style={{fontSize: 12, color: 'grey', marginTop: 7}}>Chất đạm rất cần cho sức khỏe tổng thể của bạn</p>
                            </Col>
                        </Row>
                    </div>
                    <div>
                        <Row style={{flexWrap: 'nowrap'}}>
                            <Col style={{marginRight: 15}}>
                                <Progress 
                                    type="circle"
                                    strokeColor="#fe6f46"
                                    trailColor="#EDF1F5"
                                    strokeWidth={9}
                                    percent={20}
                                    format={(percent) => {
                                        return (
                                            <div style={{
                                                position: 'relative',
                                                color: '#fe6f46',
                                                fontWeight: 'bold'
                                            }}>
                                                {percent}
                                                <span style={{position: 'absolute', fontSize: 12, color: '#fe6f46'}}>
                                                    %
                                                </span>
                                            </div>
                                        );
                                    }}
                                    width={70}
                                />
                            </Col>
                            <Col className='flex-col-center'>
                                <p style={{fontWeight: 'bold'}}>Chất béo</p>
                                <p style={{fontSize: 12, color: 'grey', marginTop: 7}}>chất béo là dự trữ và cung cấp năng lượng cho cơ thể</p>
                            </Col>
                        </Row>
                    </div>
              
                </div>
                <Row style={{marginTop: 35}}>
                    <ButtonApp 
                        title='Bắt đầu'
                        color='#fff'
                        onClick={() => {
                            navigate('/home')
                        }}
                    />
                </Row>
            </Col>
        </>
    )
}