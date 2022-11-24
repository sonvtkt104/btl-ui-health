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

const messages = [
    {_id: 1, message: "hello"}, 
    {_id: 2, message: "hello, how are you? "},
    {_id: 1, message: "I'm fine thank you, and you?"},
    {_id: 2, message: "hello, sfaf afs  akfjn a nfajsf afn asf akf a nfas"},
    {_id: 2, message: "hello, ha afjs f kafbsd i"},
    {_id: 1, message: "hello, hi afjk abf afb kjaf "},
    {_id: 1, message: "hello, hi"},
    {_id: 2, message: "hello, hi"},
    {_id: 2, message: "hello, hi"},
    {_id: 2, message: "hello, hi ajkf kf jab fjka"},
    {_id: 1, message: "hello, hi"},
    {_id: 1, message: "hello, af afs af a hi"},
    {_id: 2, message: "hello, hi"},
    {_id: 2, message: "hello, hi"},
    {_id: 2, message: "hello, h akjf jak jkafkj jkafi"},
    {_id: 1, message: "hello, hi"},
    {_id: 1, message: "hello,afs asfsa  hi"},
    {_id: 2, message: "hello, hi"},

    {_id: 2, message: "hello, hi"},
    {_id: 2, message: "hello, hi"},

        {_id: 2, message: "hello, hi"},
        {_id: 2, message: "hello,af af af hi"},    {_id: 2, message: "hello, hi"},
    {_id: 1, message: "hello"}, 
    {_id: 1, message: "hella cfasdfa fdao"}, 
    {_id: 1, message: "hello"}, 
    {_id: 1, message: "af af af af adf  lo"}, 
]

export default function Conversation() {
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
                    <LeftOutlined style={{fontSize:25}} />
                </Col>
                <Col xs={14}>
                    <Row>
                        <Col>
                            <img 
                                style={{width: 40, height: 40, borderRadius: '50%'}} 
                                src="/images/logo-user.jpeg" alt="" 
                            />
                        </Col>
                        <Col style={{marginLeft: 8, display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                            <p style={{ fontWeight: 'bold', fontSize: '16px' }}>Tom johnson</p>
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
                <div style={{height: "calc(100vh - 83px - 100px)"}}>
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
                >
                </Input>
                <PaperClipOutlined className="send-pin" style={{position: 'absolute', right:110, fontSize: 24, color:'grey', transform: 'rotate(45deg)'}} />
                <SendOutlined className="send-message" style={{position: 'absolute', right: 50, fontSize : 22, padding: 9, background: 'white', borderRadius: '50%'}} /> 
            </Row>
        </div>
    )
}
