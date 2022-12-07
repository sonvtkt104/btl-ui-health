
import { Link, useNavigate } from 'react-router-dom'
import { 
    Row,
    Col,
    Progress,
    DatePicker
} from 'antd'
import { 
    CalendarOutlined,
    QrcodeOutlined,
    CarryOutOutlined,
    UserOutlined,
    PlusOutlined,
    SettingOutlined,
    InfoCircleOutlined,
    CloseCircleOutlined,
    PlusCircleOutlined
} from '@ant-design/icons'
import './index.css'
import iconFood from '../../assets/image/foodIcon.png'
import chuoiTay from '../../assets/image/chuoitay.jpg'
import suachua from '../../assets/image/suachuakhongduong.jpg'
import thitlonnac from '../../assets/image/thitlonnac.jpg'
import yenthach from '../../assets/image/yenthach.jpg'
import { Footer, ItemFood } from '../../components'
import {useState} from 'react'
import foods from '../../assets/data'


export default function Home() {
    const [openTips, setOpenTips] = useState(true)

    const navigate = useNavigate()
    
    const onChangeDate = (date, dateString) => {
        console.log(date, dateString);
    };

    const headerMeal = (type, calories) => {
        return (
            <>
                <Row className='mealName' 
                    style={{fontSize:18, fontWeight:'bold', margin: '30px 0 7px', paddingRight: 7}}
                    justify='space-between'
                >
                    <span>{type}</span>
                    <span>
                        <PlusCircleOutlined style={{cursor: 'pointer'}}/>
                    </span>
                </Row>
                <p className='calories'>{calories} calories</p>
            </>
        )
    }

    return (
        <div className='homeContainer' style={{position: 'relative'}}>
            <div className='diaryContainer'>
                <div className='DiaryHeader'>
                    <Row justify='space-between' style={{ maxHeight: 100 ,padding: '50px 25px 30px 25px', borderBottom: '1px solid #eeeeee', background: 'white', top: 0, left: 0, right: 0, zIndex: '2', position: 'fixed'}}>
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
                                    {/* <CalendarOutlined style={{fontSize: 22, marginRight: 10}} /> */}
                                    <DatePicker onChange={() => onChangeDate()} />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </div>
                <div className='chart'>
                    <Row justify='space-between' style={{margin: '15px 0 0px'}}>
                        <Col style={{}}>Bạn vẫn có thể hấp thu 2.515 calories</Col>
                    </Row>
                    <Row>
                        <Progress percent={5} showInfo={false} strokeColor="#43a5f2" />
                    </Row>
                    <Row justify='space-between' style={{margin: '0px 0 15px'}}>
                        <Col style={{color: 'grey'}}>Đã tiêu thụ 33 calories</Col>
                        <Col style={{fontWeight: 'bold'}}>Mục tiêu: <span style={{color: '#1890ff'}}>1.917</span></Col>
                    </Row>
                    <Row justify='space-between' style={{margin: '30px 0 10px'}}>
                        <Col xs={8} style={{padding: '0 5px', textAlign: 'center'}}>
                            <Progress 
                                type="circle"
                                strokeColor="#65bc66"
                                trailColor="#EDF1F5"
                                strokeWidth={9}
                                percent={10}
                                format={(percent) => {
                                    return (
                                        <div style={{
                                            position: 'relative',
                                            color: '#65bc66',
                                            fontWeight: 'bold'
                                        }}>
                                            {percent}
                                            <span style={{position: 'absolute', fontSize: 12, color: '#65bc66'}}>
                                                %
                                            </span>
                                        </div>
                                    );
                                }}
                                width={80}
                            />
                            <Row justify='center' style={{color:'#65bc66', marginTop: 7, fontWeight: '600' }}>Tinh bột</Row>
                        </Col>
                        <Col xs={8} style={{padding: '0 5px', textAlign: 'center'}}>
                            <Progress 
                                type="circle"
                                strokeColor="#e5447a"
                                trailColor="#EDF1F5"
                                strokeWidth={9}
                                percent={3}
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
                                width={80}
                            />
                            <Row justify='center' style={{color:'#e5447a', marginTop: 7, fontWeight: '600' }}>Chất đạm</Row>
                        </Col>
                        <Col xs={8} style={{padding: '0 5px', textAlign: 'center'}}>
                            <Progress 
                                type="circle"
                                strokeColor="#fe6f46"
                                trailColor="#EDF1F5"
                                strokeWidth={9}
                                percent={15}
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
                                width={80}
                            />
                            <Row justify='center' style={{color:'#fe6f46', marginTop: 7, fontWeight: '600' }}>Chất béo</Row>
                        </Col>
                    </Row>
                </div>
                <div className='foodChoice'>
                    <div className='meal' style={{padding: '0 0 20px 0'}}>
                        {headerMeal('Bữa sáng', 133)}
                        {
                            foods.map((item, i) => (
                                <ItemFood key={i} data={item}/>
                            ))
                        }

                        {/* Bữa trưa */}
                        {headerMeal("Bữa trưa", 12)}

                        <div className='food'>
                            <div>
                                <img className='foodImage' src={thitlonnac} />
                            </div>
                            <div className='foodInfo'>
                                <span className='foodName'>Thịt lợn nạc</span>
                                <br/>
                                <span className='details'>236 kcal - 100 gram / ml</span>
                            </div>
                            <div className='infoIcon'>
                                <InfoCircleOutlined />
                            </div>
                        </div>
                        <div className='food'>
                            <div>
                                <img className='foodImage' src={yenthach} />
                            </div>
                            <div className='foodInfo'>
                                <span className='foodName'>Yến thạch</span>
                                <br/>
                                <span className='details'>140 kcal - 40 gram / ml</span>
                            </div>
                            <div className='infoIcon'>
                                <InfoCircleOutlined />
                            </div>
                        </div>
                    </div>
                </div>
                {
                    openTips && (
                        <div className='tips' style={{marginBottom: 50, position: 'relative'}}>
                            <div>
                                <span style={{fontWeight: '600', color: '#1890ff'}}>Gợi ý mỗi ngày</span>
                            </div>
                            <div>
                                <p style={{fontWeight: '600', margin: '5px 0px 10px'}}>Calories là gì?</p> 
                                <p>
                                    Calories là một đơn vị năng lượng. Trong dinh dưỡng calories thường được dùng để đo mật độ năng lượng trong thực phẩm.
                                </p>
                            </div>
                            <span style={{position: 'absolute', cursor: 'pointer', top: 10, right: 10}}>
                                <CloseCircleOutlined style={{fontSize: 12}} 
                                    onClick={() => {setOpenTips(false)}}
                                />
                            </span>
                        </div>
                    )
                }
            </div>
            <div className='userContainer'>
                <div className='userHeader'>
                    <Row justify='space-between' style={{ maxHeight: 100 ,padding: '50px 25px 30px 25px', borderBottom: '1px solid #eeeeee', background: 'white', top: 0, left: 0, right: 0, zIndex: '2'}}>
                        <Col>
                            <Row>
                                <Col style={{fontSize: 24, fontWeight: 'bold', lineHeight: '22px'}}>
                                    Xin chào
                                </Col>
                            </Row>
                        </Col>
                        <Col>
                            <Row>
                                <Col>
                                    <SettingOutlined style={{fontSize: 22, marginRight: 10}} />
                                </Col>
                                <Col>
                                    <UserOutlined style={{fontSize: 22, marginRight: 10}} />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </div>
                <div className='stats'>
                    <div className='statsInfo'>
                        <div className='measurement'>
                            <span style={{fontSize: 24}}>Tăng 4.0 kg</span>
                            <br />
                            <span>Từ ngày 30 tháng 10</span>
                        </div>
                        <div className='startStats'>
                            <span>53.0 kg</span>
                            <span>Khởi đầu</span>
                        </div>
                        <div className='currentStats'>
                            <span>57.0 kg</span>
                            <span>Hiện tại</span>
                        </div>
                        <div className='goalStats'>
                            <span>60.0 kg</span>
                            <span>Mục tiêu</span>
                        </div>
                    </div>
                    <div className='icon'>
                        <image scr={iconFood} />
                    </div>
                </div>
                <div className='commentary'>
                    <span style={{fontSize: 18}}>Đánh giá về lượng calo nhập vào</span>
                    <br />
                    <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
                </div>
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
                    fontSize: 22,
                    cursor: 'pointer'
                }} 
                onClick={() => {
                    navigate('/search')
                }}
            />
            <Footer active='home'/>
        </div>
    )
}