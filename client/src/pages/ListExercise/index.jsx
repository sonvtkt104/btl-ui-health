import {Row, Col, Tabs} from 'antd'
import { 
    LeftOutlined, 
    UserOutlined,
    GlobalOutlined,
    DesktopOutlined,
    BellOutlined,
    RiseOutlined,
    ShareAltOutlined,
    UserAddOutlined,
    QuestionCircleOutlined,
    TeamOutlined,
    LogoutOutlined
} from '@ant-design/icons'
import { Link} from 'react-router-dom'
import ItemSettings from '../../components/ItemSettings'
import './index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faPersonWalking, 
    faPersonBiking ,
    faPersonRunning,
    faPersonSwimming,
    faPeopleGroup
} from '@fortawesome/free-solid-svg-icons';
import ItemListExercise from '../../components/ItemListExercise'


const exercises1 = [
    {
        id: 1,
        icon: <i style={{fontSize: 26}}><FontAwesomeIcon icon={faPersonWalking}/></i>,
        name: "Đi bộ dưỡng sinh",
        type: "Nhẹ nhàng",
        time: "30 phút"
    },
    {
        id: 3,
        icon: <i style={{fontSize: 26}}><FontAwesomeIcon icon={faPersonRunning}/></i>,
        name: "Chạy ngắn",
        type: "Nhẹ nhàng",
        time: "20 phút"
    },
]

const exercises2 = [
    {
        id: 2,
        icon: <i style={{fontSize: 26}}><FontAwesomeIcon icon={faPersonBiking}/></i>,
        name: "Đạp xe đường dài",
        type: "Bình thường",
        time: "1 giờ"
    },
    {
        id: 5,
        icon: <i style={{fontSize: 26}}><FontAwesomeIcon icon={faPeopleGroup}/></i>,
        name: "Thể dục nhịp điệu 60 động tác",
        type: "Bình thường",
        time: "1 giờ"
    }
]

const exercises3 = [
    {
        id: 4,
        icon: <i style={{fontSize: 26}}><FontAwesomeIcon icon={faPersonSwimming}/></i>,
        name: "Bơi dài",
        type: "Nâng cao",
        time: "1 giờ"
    },
]


export default function ListExercise() {

    const showResultTest = () => {
        return [
            {
                key: 1,
                label: `Nhẹ nhàng`,
                children: (
                    <div style={{padding: '0 20px 20px'}}>
                        {
                            exercises1.map((item , i) => (
                                <ItemListExercise 
                                    key={i}
                                    data={item}
                                />
                            ))
                        }
                    </div>
                ),
            },
            {
                key: 2,
                label: `Bình thường`,
                children: (
                    <div style={{padding: '0 20px 20px'}}>
                        {
                            exercises2.map((item , i) => (
                                <ItemListExercise 
                                    key={i}
                                    data={item}
                                />
                            ))
                        }
                    </div>
                ),
            },
            {
                key: 3,
                label: `Nâng cao`,
                children: (
                    <div style={{padding: '0 20px 20px'}}>
                        {
                            exercises3.map((item , i) => (
                                <ItemListExercise 
                                    key={i}
                                    data={item}
                                />
                            ))
                        }
                    </div>
                ),
            },
        ]
    }

    return (
        <div className="app-settings"
            style={{
                padding: '60px 0px 0px', height: '100vh', overflow: 'auto', background: '#f9fdff'}}
        >
            <Row justify='center'
                style={{
                    position: 'fixed', 
                    top: 0, left: 0, right: 0,
                    background: '#fff',
                    zIndex: 9, 
                    textAlign: 'center',
                    height: 60, 
                }}
            >
                <Col
                    style={{
                        position: 'absolute', 
                        left: 20
                    }}
                >
                    <Link to="/exercise">
                        <LeftOutlined style={{fontSize: 22, lineHeight: '60px'}}/>
                    </Link>
                </Col>
                <Col>
                    <span
                        style={{fontSize: 18, fontWeight: 'bold', lineHeight: '60px'}}
                    >
                        Danh sách bài tập
                    </span>
                </Col>
            </Row>
            <div>
                <Tabs
                     className='tabs-exercise'
                    tabPosition={'top'}
                    items={showResultTest()}
                />
            </div>
        </div>
    )
}