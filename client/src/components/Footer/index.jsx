import {Row, Col} from 'antd'
import {HomeOutlined, UserOutlined, MessageOutlined, SettingOutlined} from '@ant-design/icons'

export default function Footer ({active}) {
    return (
        <div
            style={{
                backgroundColor: 'white',
                position: 'fixed',
                bottom: 0,
                left: 0,
                right: 0,
                height: 80,
                zIndex: 10,
                borderTop: '1px solid #f2f2f2',
                boxShadow: 'white 39px 20px 46px 83px'
            }}
        >
            <Row justify='space-evenly' style={{height: '100%'}}>
                <Col className='flex-col-center' xs={6} style={{textAlign: 'center'}}>
                    <HomeOutlined className={`app-icon ${active=='home' ? 'active' : ''}`}/>
                </Col>
                 <Col className='flex-col-center' xs={6} style={{textAlign: 'center'}}>
                    <UserOutlined className={`app-icon ${active=='user' ? 'active' : ''}`}/>
                </Col>
                 <Col className='flex-col-center' xs={6} style={{textAlign: 'center'}}>
                    <MessageOutlined className={`app-icon ${active=='chat' ? 'active' : ''}`}/>
                </Col>
                 <Col className='flex-col-center' xs={6} style={{textAlign: 'center'}}>
                    <SettingOutlined className={`app-icon ${active=='settings' ? 'active' : ''}`}/>
                </Col>
            </Row>
        </div>
    )
}