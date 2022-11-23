import { 
    Row,
    Col

} from "antd"
import { 
    LeftOutlined,
    VideoCameraOutlined,
    MoreOutlined
} from '@ant-design/icons'
import './index.css'

export default function Conversation() {
    return (
        <div
            style={{
                paddingTop: 20
            }}
        >
            <Row>
                <Col>
                    <LeftOutlined />
                </Col>
                <Col>
                    <Row>
                        <Col>
                            <img style={{width: 50}} src="/images/logo-user.jpeg" alt="" />
                        </Col>
                        <Col>
                            <p>Tom johnson</p>
                            <span>Online</span>
                        </Col>
                    </Row>
                </Col>
                <Col>
                    <Row>
                        <Col>
                            <VideoCameraOutlined />
                        </Col>
                        <Col>
                            <MoreOutlined />
                        </Col>
                    </Row>
                </Col>
            </Row>
            <div className="content-conversation">
                <div>
                    {
                        [{_id: 1, message: "hello"}, {_id: 2, message: "hello, hi"}]?.map((message, index) => (
                            <p key={index} className={message._id === 1 ? "owner" : ""}>{message.message}</p>
                        ))
                    }
                </div>
                <input type="text"  /> 
                <button>send</button>
            </div>
        </div>
    )
}
