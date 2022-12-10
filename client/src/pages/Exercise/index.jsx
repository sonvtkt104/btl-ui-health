import { Footer, ItemExercise } from "../../components";
import {Row, Col, Steps} from 'antd'
import {SearchOutlined, PlusOutlined} from '@ant-design/icons'
import moment from 'moment'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faPersonWalking, 
    faPersonBiking ,
    faPersonRunning,
    faPersonSwimming,
    faPeopleGroup
} from '@fortawesome/free-solid-svg-icons';
import {useNavigate} from 'react-router-dom'
import { exercises as dataCurrent } from "../../assets/data";
import { useSelector } from "react-redux";


export default function Exercise () {
    const navigate = useNavigate()
    const {exercisesToday} = useSelector((state) => state.app)

    return (
        <div className="exercise"
            style={{
                padding: '100px 20px', 
                height: '100vh',
                overflow: 'auto', background: '#f9fdff'
            }}
        >
            <Row justify='space-between' style={{ maxHeight: 100 ,padding: '50px 25px 30px 25px', borderBottom: '1px solid #eeeeee', position: 'fixed', background: 'white', top: 0, left: 0, right: 0, zIndex: '2'}}>
                <Col>
                    <Row>
                        {/* <Col>
                            <MenuOutlined style={{fontSize: 22, marginRight: 10}} />
                        </Col> */}
                        <Col style={{fontSize: 24, fontWeight: 'bold', lineHeight: '22px'}}>
                            Bài tập
                        </Col>
                    </Row>
                </Col>
                <Col>
                    <SearchOutlined className='chat-search' style={{fontSize: 22}} />
                </Col>
            </Row>

            <div>
                <Row style={{fontSize: 18, fontWeight: 'bold', margin: '30px 0 20px 0'}}>Theo dõi luyện tập hằng ngày</Row>
                <Row>
                <Steps
                    progressDot
                    current={100}
                    items={[
                        {
                            title: <span style={{fontWeight: 'bold'}}>Hôm nay</span>,
                            description: (
                                <div style={{padding: 10}}> 
                                    {
                                        exercisesToday.map((id, i) => (
                                            <ItemExercise 
                                                key={i}
                                                data={dataCurrent[id - 1]}
                                            />
                                        ))  
                                    }
                                </div>
                            )
                        },
                        {
                            title: moment().add(-1, 'days').format('ll'),
                            description: (
                                <div style={{padding: 10}}> 
                                    <ItemExercise 
                                        data={dataCurrent[3]}
                                        old
                                    />
                                </div>
                            )
                        },
                        {
                            title: moment().add(-2, 'days').format('ll'),
                            description: (
                                <div style={{padding: 10}}> 
                                    <ItemExercise 
                                        data={dataCurrent[2]}
                                        old
                                    />
                                    <ItemExercise 
                                        data={dataCurrent[4]}
                                        old
                                    />
                                </div>
                            )
                        },
                    ]}
                    />
                </Row>
            </div>

            <PlusOutlined 
                className='chat-plus'
                style={{
                    position: 'fixed', 
                    bottom: 120,
                    right: 30,
                    color: 'white',
                    padding: 17,
                    borderRadius: '50%',
                    background: 'linear-gradient(#7fd8ff, #00b4ff)',
                    zIndex: 99, 
                    fontSize: 22,
                    cursor: 'pointer'
                }} 
                onClick={() => {
                    navigate("/list-exercise")
                }}
            />

            <Footer active='exercise'/>
        </div>
    )
}