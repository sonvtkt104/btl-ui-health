import {Row, Col} from 'antd'
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

const data1 = [
    {
        icon: <UserOutlined style={{fontSize: 22}}/>,
        title: 'Hồ sơ',
    },
    {
        icon: <GlobalOutlined style={{fontSize: 22}}/>,
        title: 'Ngôn ngữ',
    },
    {
        icon: <DesktopOutlined style={{fontSize: 22}}/>,
        title: 'Chế độ màn hình',
    },
    {
        icon: <BellOutlined style={{fontSize: 22}}/>,
        title: 'Thông báo'
    }
]

const data2 = [
    {
        icon: <RiseOutlined style={{fontSize: 22}}/>,
        title: "Nâng cấp gói cao hơn"
    }
]

const data3 = [
    {
        icon: <ShareAltOutlined style={{fontSize: 22}}/>,
        title: "Chia sẻ ứng dụng",
    },
    {
        icon: <UserAddOutlined style={{fontSize: 22}}/>,
        title: "Mời một người bạn"
    },
    {
        icon: <QuestionCircleOutlined style={{fontSize: 22}}/>,
        title: "Câu hỏi thường gặp"
    },
    {
        icon: <TeamOutlined style={{fontSize: 22}}/>,
        title: "Về chúng tôi",
    },
    {
        icon: <LogoutOutlined style={{fontSize: 22}}/>,
        title: "Đăng xuất"
    }
]

export default function Settings() {
    return (
        <div className="app-settings"
            style={{
                padding: '100px 20px 20px', height: '100vh', overflow: 'auto', background: '#f9fdff'}}
        >
            <Row justify='center'
                style={{
                    position: 'fixed', 
                    top: 0, left: 0, right: 0,
                    background: '#fff',
                    zIndex: 9, 
                    textAlign: 'center',
                    height: 60, borderBottom: '1px solid #eee'
                }}
            >
                <Col
                    style={{
                        position: 'absolute', 
                        left: 20
                    }}
                >
                    <Link to="/home">
                        <LeftOutlined style={{fontSize: 22, lineHeight: '60px'}}/>
                    </Link>
                </Col>
                <Col>
                    <span
                        style={{fontSize: 18, fontWeight: 'bold', lineHeight: '60px'}}
                    >
                        Cài đặt
                    </span>
                </Col>
            </Row>
            <div>
                <h3 style={{marginBottom: 30, fontSize: 24}}>Xin chào, <span style={{color: "#43a5f2"}}>Sơn</span></h3>
            </div>
            <div >
                <h3 style={{marginBottom: 15}}>Cao cấp</h3>
                <ItemSettings data={data2}/>
            </div>
            <div style={{marginTop: 30}}>
                <h3 style={{marginBottom: 15}}>Cài đặt chung</h3>
                <ItemSettings data={data1}/>
            </div>
            <div style={{marginTop: 30}}>
                <h3 style={{marginBottom: 15}}>Hơn</h3>
                <ItemSettings data={data3}/>
            </div>
        </div>
    )
}