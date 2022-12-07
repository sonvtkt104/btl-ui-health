import { Row, Col } from "antd";
import { ClockCircleOutlined } from "@ant-design/icons";

export default function ItemExercise ({data, old}) {
    return (
        <Row
            style={{
                background: '#d3f1ff', 
                borderRadius: '5px', 
                padding: '8px 12px',
                boxShadow: '4px 5px 12px -8px #939393',
                marginBottom: 15, 
                flexWrap: 'nowrap',
                opacity: old ? 0.5 : 1
            }}
        >
            <Col style={{marginRight: 20}} className='flex-col-center'>
                {data.icon}
            </Col>
            <Col>
                <Row style={{fontSize: '16px',fontWeight: 'bold', marginBottom: 7}}>{data.name}</Row>
                <Row>
                    <span
                        style={{
                            padding: '2px 10px',
                            background: data.type == 'Nhẹ nhàng' ? '#58ca8c' 
                                : data.type == 'Bình thường' ? '#ffb721' 
                                : data.type == 'Nâng cao' ? '#ff3c00'
                                : "#58ca8c", 
                            borderRadius: '5px',
                            color: '#fff', marginRight: 15
                        }}
                    >
                        {data.type}
                    </span>
                    <Col>
                        <Row>
                            <p className="flex-col-center">
                                <ClockCircleOutlined style={{fontSize: 20}}/>
                            </p>
                            <span
                                style={{
                                    fontSize: 16,
                                    marginLeft: 5,
                                    lineHeight: '28px'
                                }}
                            >
                                {data.time}
                            </span>
                        </Row>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}