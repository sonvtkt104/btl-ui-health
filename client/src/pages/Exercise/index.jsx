import { Footer, ItemExercise } from "../../components";
import {Row, Col, Steps} from 'antd'
import {SearchOutlined, PlusOutlined} from '@ant-design/icons'
import moment from 'moment'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faPersonWalking, 
    faPersonBiking ,
    faPersonRunning,
    faPersonSwimming,
    faPeopleGroup
} from '@fortawesome/free-solid-svg-icons';

const dataCurrent = [
    {
        icon: <i style={{fontSize: 26}}><FontAwesomeIcon icon={faPersonWalking}/></i>,
        name: "Đi bộ dưỡng sinh",
        type: "Nhẹ nhàng",
        time: "30 phút"
    },
    {
        icon: <i style={{fontSize: 26}}><FontAwesomeIcon icon={faPersonBiking}/></i>,
        name: "Đạp xe đường dài",
        type: "Bình thường",
        time: "1 giờ"
    },
    {
        icon: <i style={{fontSize: 26}}><FontAwesomeIcon icon={faPersonRunning}/></i>,
        name: "Chạy ngắn",
        type: "Nhẹ nhàng",
        time: "20 phút"
    },
    {
        icon: <i style={{fontSize: 26}}><FontAwesomeIcon icon={faPersonSwimming}/></i>,
        name: "Bơi dài",
        type: "Nâng cao",
        time: "1 giờ"
    },
    {
        icon: <i style={{fontSize: 26}}><FontAwesomeIcon icon={faPeopleGroup}/></i>,
        name: "Thể dục nhịp điệu 60 động tác",
        type: "Bình thường",
        time: "1 giờ"
    }
]

export default function Exercise () {
    return (
        <div className="exercise"
            style={{
                padding: '100px 20px', 
                height: '100vh',
                overflow: 'auto', background: '#f9fdff'
            }}
        >
            <Row justify='space-between' style={{ maxHeight: 100 ,padding: '50px 25px 30px 25px', borderBottom: '1px solid #eeeeee', position: 'fixed', background: 'white', top: 0, left: 0, right: 0, zIndex: '2'}}>
                <Col>
                    <Row>
                        {/* <Col>
                            <MenuOutlined style={{fontSize: 22, marginRight: 10}} />
                        </Col> */}
                        <Col style={{fontSize: 24, fontWeight: 'bold', lineHeight: '22px'}}>
                            Bài tập
                        </Col>
                    </Row>
                </Col>
                <Col>
                    <SearchOutlined className='chat-search' style={{fontSize: 22}} />
                </Col>
            </Row>

            <div>
                <Row style={{fontSize: 18, fontWeight: 'bold', margin: '30px 0 20px 0'}}>Theo dõi luyện tập hằng ngày</Row>
                <Row>
                <Steps
                    progressDot
                    current={100}
                    items={[
                        {
                            title: <span style={{fontWeight: 'bold'}}>Hôm nay</span>,
                            description: (
                                <div style={{padding: 10}}> 
                                    <ItemExercise 
                                        data={dataCurrent[0]}
                                    />
                                    <ItemExercise 
                                        data={dataCurrent[1]}
                                    />
                                </div>
                            )
                        },
                        {
                            title: moment().add(-1, 'days').format('ll'),
                            description: (
                                <div style={{padding: 10}}> 
                                    <ItemExercise 
                                        data={dataCurrent[3]}
                                        old
                                    />
                                </div>
                            )
                        },
                        {
                            title: moment().add(-2, 'days').format('ll'),
                            description: (
                                <div style={{padding: 10}}> 
                                    <ItemExercise 
                                        data={dataCurrent[2]}
                                        old
                                    />
                                    <ItemExercise 
                                        data={dataCurrent[4]}
                                        old
                                    />
                                </div>
                            )
                        },
                    ]}
                    />
                </Row>
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
                    
                }}
            />

            <Footer active='exercise'/>
        </div>
    )
}