import { 
    MenuOutlined, 
    SearchOutlined,
    PlusOutlined 
} from '@ant-design/icons'
import { 
    Row,
    Carousel,
    Col
} from 'antd'

export default function Chat () {
    return (
        <div
            style={{
                paddingTop: 30
            }}
        >
            <Row justify='space-between'>
                <span>
                    <span>
                        <MenuOutlined />
                    </span>
                    <span>
                        Trò chuyện
                    </span>
                </span>
                <span>
                    <SearchOutlined />
                </span>
            </Row>
            <div>
                <p>Gợi ý</p>
                <Row style={{backgroundColor: 'grey', }}>
                    {
                        Array.from(Array(5).keys()).map((item, i) => (
                            <span
                                style = {{ 
                                    width: 50,
                                    height: 50,
                                    borderRadius: '50%',
                                    backgroundImage: 'url("/images/logo-user.jpeg")',
                                    backgroundSize: 'cover',
                                }}
                            >
                            
                            </span>
                        ))
                    }
                </Row>
            </div>
            <div>
                {
                    Array.from(Array(5).keys()).map((item, i) => (
                        <Row>
                            <Col>
                                <img style={{width: 50, height: 50}} src="/images/logo-user.jpeg" alt="" />
                            </Col>
                            <Col>
                                <p>Tom johnson</p>
                                <span>hey, how are you?</span>
                            </Col>
                            <Col>
                                <span>1:04am</span>
                            </Col>
                        </Row>
                    ))
                }
            </div>
            <span>
                <PlusOutlined />
            </span>
        </div>
    )
}