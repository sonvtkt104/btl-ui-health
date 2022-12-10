import { 
    Row,
    Col,
    Input
} from "antd"
import { 
    LeftOutlined,
    VideoCameraOutlined,
    MoreOutlined,
    PaperClipOutlined,
    SendOutlined,
} from '@ant-design/icons'
import './index.css'
import { useNavigate, useLocation } from "react-router-dom"
import { useState, useEffect } from "react"

const messagesData = [
    {_id: 1, message: "hello"}, 
    {_id: 2, message: "Xin chào, bạn cần giúp đỡ gì không ạ?"},
    {_id: 2, message: "Bạn có thấy chỗ nào không khỏe, hay có triệu chứng gì không?"},
    {_id: 2, message: "Bạn có thể cho chúng tôi biết để chúng tôi tư vấn cho bạn nhanh nhất ạ"},
    {_id: 1, message: "Vâng, dạo này tôi thường xuyên thấy mệt nhọc, đi lại khó khăn, và chán ăn"},
    {_id: 1, message: "Thỉnh thoảng thấy tim co lại"},
    {_id: 1, message: "Bác sĩ có thể cho tôi biết về  chế độ dinh dưỡng trong 1 ngày cần những gì và điều độ ra sao không ạ"},
    {_id: 1, message: "Và tôi phải tập thể dục như nào mới tốt nhất ạ"},
]

export default function Conversation() {
    const [messages, setMessages] = useState(messagesData)
    const [text, setText] = useState("")

    const location = useLocation();

    useEffect(() => {
        let element = document.querySelector(".app-chat-content")
        element.scrollTop = element.scrollHeight;
    }, [messages])

    const navigate = useNavigate()

    return (
        <div
            style={{
                // paddingTop: 20
            }}
        >
            <Row
                justify='space-between'
                style={{
                    padding: 20,
                    position: 'relative',
                    // backgroundColor: 'blue',
                    boxShadow: 'white 0px 37px 50px 5px'
                }}
            >
                <Col xs={2} style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                    <LeftOutlined style={{fontSize:25}} 
                        onClick={() => { 
                            navigate("/chat")
                        }}
                    />
                </Col>
                <Col xs={14}>
                    <Row>
                        <Col>
                            <img 
                                style={{width: 40, height: 40, borderRadius: '50%'}} 
                                src={`/images/logo-user-${location.state.id}.jpeg`} alt="" 
                            />
                        </Col>
                        <Col style={{marginLeft: 8, display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                            <p style={{ fontWeight: 'bold', fontSize: '16px' }}>{location.state.name}</p>
                            <span style={{ color: 'grey'}}>Online</span>
                        </Col>
                    </Row>
                </Col>
                <Col xs={6} style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                    <Row>
                        <Col xs={12} style={{textAlign: 'center', borderRight: '1px solid var(--color-border)', fontSize: '22px'}}>
                            <VideoCameraOutlined className="send-video"/>
                        </Col>
                        <Col xs={12} style={{textAlign: 'center', fontSize: '22px'}}>
                            <MoreOutlined />
                        </Col>
                    </Row>
                </Col>
            </Row>
            <div className="content-conversation">
                <div style={{height: "calc(100vh - 83px - 100px)"}}
                    className='app-chat-content'
                >
                    {
                        messages?.map((message, index) => (
                            <p key={index} className={message._id === 1 ? "owner" : ""}>{message.message}</p>
                        ))
                    }
                </div>
            </div>
            <Row
                style={{
                    position: 'relative',
                    height: 100,
                    padding: '0 25px',
                    background: '#f9fdff',
                    display: 'flex', flexDirection: 'column', justifyContent: 'center'
                }}
            >
                <Input
                    style={{
                        height: 60, 
                        borderRadius: '30px',
                        padding: '0 125px 0 15px',
                        fontSize: '16px',
                        backgroundColor: '#f1f5f8', 
                        border: 'none'
                    }}
                    placeholder="Write something"
                    value={text}
                    onChange={(e) => {setText(e.target.value)}}
                >
                </Input>
                <PaperClipOutlined className="send-pin" style={{position: 'absolute', right:110, fontSize: 24, color:'grey', transform: 'rotate(45deg)'}} />
                <SendOutlined className="send-message" style={{position: 'absolute', right: 50, fontSize : 22, padding: 9, background: 'white', borderRadius: '50%'}} 
                    onClick={() => {
                        setMessages(pre => {
                            return [...pre, {_id: 1, message: text},]
                        })
                        setText("")
                    }}
                /> 
            </Row>
        </div>
    )
}
