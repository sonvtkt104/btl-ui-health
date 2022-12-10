import { Link} from 'react-router-dom'
import {MinusOutlined, CloseOutlined, PlusCircleOutlined} from '@ant-design/icons'
import {Row, Col} from 'antd'
import { useNavigate } from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {addExercise} from '../../redux/appSlice'

export default function ItemListExercise ({data}) {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    return (
        <div style={{position: 'relative', zIndex: 1, padding: '16px', marginBottom: 15, background: '#fff', borderRadius: 16, boxShadow: '1px 1px 5px -1px var(--color-shadow)'}}>
            <Row
                style={{position: 'relative', zIndex:1}}
            >
                <Col style={{marginRight: 20}}>
                    <span>
                        {data.icon}
                    </span>
                </Col>
                <Col>
                    <Row style={{fontWeight: 'bold', fontSize: '16px'}}>{data.name}</Row>
                    <Row>Thời gian: <span style={{marginLeft: 5, color: '#43a5f2', fontWeight: 'bold'}}> {data.time}</span></Row>
                </Col>                
            </Row>
            <span style={{position: 'absolute', right: 10, zIndex: 2, top: 25}}>
                <PlusCircleOutlined 
                    style={{
                        fontSize: 20,
                    }}
                    onClick={() => {
                        dispatch(addExercise({id: data.id}))
                        navigate("/exercise")
                    }}
                />
            </span>
        </div>
    )
}