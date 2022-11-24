
import { Link } from 'react-router-dom'
import { 
    Row,
    Col,
    Progress
} from 'antd'
import { 
    CalendarOutlined,
    QrcodeOutlined,
    CarryOutOutlined,
    UserOutlined,
    PlusOutlined
} from '@ant-design/icons'
import './index.css'


export default function Home() {
    
    return (
        <div className='homeContainer'>
            <div className='header'>
                <Row justify='space-between' style={{ maxHeight: 100 ,padding: '50px 25px 30px 25px', borderBottom: '1px solid #eeeeee', background: 'white', top: 0, left: 0, right: 0, zIndex: '2'}}>
                    <Col>
                        <Row>
                            <Col style={{fontSize: 24, fontWeight: 'bold', lineHeight: '22px'}}>
                                Hôm nay
                            </Col>
                        </Row>
                    </Col>
                    <Col>
                        <Row>
                            <Col>
                                <CalendarOutlined style={{fontSize: 22, marginRight: 10}} />
                            </Col>
                            <Col>
                                <QrcodeOutlined style={{fontSize: 22, marginRight: 10}} />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
            <div className='chart'>
                <Row justify='space-between' style={{margin: '15px 0 0px'}}>
                    <Col style={{fontSize: 16}}>Bạn vẫn có thể hấp thu 2.515 calories</Col>
                </Row>
                <Row>
                    <Progress percent={50} showInfo={false} strokeColor="#65bc66" />
                </Row>
                <Row justify='space-between' style={{margin: '0px 0 15px'}}>
                    <Col style={{fontSize: 16}}>Đã tiêu thụ 0 calories</Col>
                    <Col style={{fontWeight: 'bold', fontSize: 16}}>14%</Col>
                </Row>
                <Row justify='space-between'>
                    <Progress 
                        type="circle"
                        strokeColor="#43a5f2"
                        trailColor="#EDF1F5"
                        strokeWidth={9}
                        percent={30}
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
                        width={103}
                    />
                    <Progress 
                        type="circle"
                        strokeColor="#e5447a"
                        trailColor="#EDF1F5"
                        strokeWidth={9}
                        percent={50}
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
                        width={103}
                    />
                    <Progress 
                        type="circle"
                        strokeColor="#fe6f46"
                        trailColor="#EDF1F5"
                        strokeWidth={9}
                        percent={70}
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
                        width={103}
                    />
                </Row>
            </div>
            <div className='tips'>
                <div>
                    <span>Gợi ý mỗi ngày</span>
                </div>
                <div>
                    <span>What is Lorem Ipsum</span> <br />
                    <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</span>
                </div>
            </div>
            <div className='footer'>
                <div className='addFood'>
                    <button className='addButton'><PlusOutlined /></button>
                </div>
                <div className='buttonList'>
                    <div className='diary'>
                        <CarryOutOutlined style={{fontSize: 22}} />
                        <span>Nhật ký</span>
                    </div>
                    <div className='me'>       
                        <UserOutlined style={{fontSize: 22}} />
                        <span>Tôi</span>
                    </div>
                </div>
            </div>

        </div>
    )
}