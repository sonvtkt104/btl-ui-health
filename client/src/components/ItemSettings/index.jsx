import { Row, Col } from "antd";
import {RightOutlined} from '@ant-design/icons'

export default function ItemSettings({data}) {
    return (
        <div className='item-settings'
            style={{
                borderRadius: '10px',
                background: '#fff',
                boxShadow: '1px 1px 10px 1px #eee'
            }}
        >
            {
                data.map((item, i) => (
                    <Row
                        justify='space-between'
                        key={i}
                        style={{
                            padding: '12px 15px 12px 0', 
                            marginLeft: 20, 
                            borderBottom: (i != data.length - 1) ? '1px solid #eeeeee' : "none"
                        }}
                    >
                        <Col>
                            <Row>
                                <Col style={{marginRight: 20}}>{item.icon}</Col>
                                <Col style={{fontSize: 16, lineHeight: '22px'}}>{item.title}</Col>
                            </Row>
                        </Col>
                        <Col>
                            <RightOutlined style={{fontSize: 16, lineHeight: '22px'}}/>
                        </Col>
                    </Row>
                ))
            }
        </div>
    )
}