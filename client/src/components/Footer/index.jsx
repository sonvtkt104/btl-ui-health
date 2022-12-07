import {Row, Col} from 'antd'
import { Link } from 'react-router-dom'
import {BarChartOutlined, ThunderboltOutlined, HomeOutlined, UserOutlined, MessageOutlined, SettingOutlined} from '@ant-design/icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDumbbell } from '@fortawesome/free-solid-svg-icons';

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
            className='app-footer'
        >
            <Row justify='space-evenly' style={{height: '100%'}}>
                <Col style={{textAlign: 'center', flexBasis: '20%'}}>
                    <Link to='/history' className='flex-col-center' style={{height: '100%'}}>
                        <BarChartOutlined className={`app-icon ${active=='history' ? 'active' : ''}`}/>
                    </Link>
                </Col>
                <Col style={{textAlign: 'center', flexBasis: '20%'}}>
                    <Link to="/quick-test" className='flex-col-center' style={{height: '100%'}}>
                        <ThunderboltOutlined className={`app-icon ${active=='quick-test' ? 'active' : ''}`}/>
                    </Link>
                </Col>
                <Col style={{textAlign: 'center', flexBasis: '20%'}}>
                    <Link to="/home" className='flex-col-center' style={{height: '100%'}}>
                        <HomeOutlined className={`app-icon ${active=='home' ? 'active' : ''}`}/>
                    </Link>
                </Col>
                 <Col style={{textAlign: 'center', flexBasis: '20%'}}>
                    <Link to="/chat" className='flex-col-center' style={{height: '100%'}}>
                        <MessageOutlined className={`app-icon ${active=='chat' ? 'active' : ''}`}/>
                    </Link>
                </Col>
                 <Col style={{textAlign: 'center', flexBasis: '20%'}}>
                    <Link to="/exercise" className='flex-col-center' style={{height: '100%'}}>
                        <span style={{fontSize: 22}} className={`app-icon-fontawesome ${active == 'exercise' ? 'active' : ''}`}>
                            <i>
                                <FontAwesomeIcon icon={faDumbbell} />
                            </i>
                        </span>
                        {/* <SettingOutlined className={`app-icon ${active=='settings' ? 'active' : ''}`}/> */}
                    </Link>
                </Col>
            </Row>
        </div>
    )
}