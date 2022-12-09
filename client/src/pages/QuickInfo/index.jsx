import './index.css'
import {Row, Col, Button} from 'antd'
import {useState} from 'react'
import {LeftOutlined} from '@ant-design/icons'
import InputApp from '../../components/InputApp'
import ButtonApp from '../../components/ButtonApp'
import { useNavigate } from 'react-router-dom'

const data = [0, 1, 2, 3, 4]

const dataSex = ['Name', "Nữ", 'Khác', "Không trả lời"]

export default function QuickInfo() {
    const [step, setStep] = useState(0)
    const [sex, setSex] = useState(0)

    const navigate = useNavigate()

    const step0 = () => {
        return(
            <>
                <Row justify='center' className='quick-question'>Xin chào, tên bạn là gì?</Row>
                <Row justify='center'>
                    <InputApp 
                        style={{
                            borderRadius: 0, 
                            boxShadow: 'none',
                            fontSize: 20,
                            lineHeight: '18px',
                            fontWeight: 'bold',
                            maxWidth: '50vw'
                        }}
                    />
                </Row>
            </>
        )
    }

    const step1 = () => {
        return (
            <>
                <Row justify='center' className='quick-question' style={{marginBottom: 20}}>Giới tính của bạn?</Row>
                <Row justify='center' style={{fontSize: 13, color: 'grey', padding: '0 10px', textAlign: 'center', marginBottom: 40}}>Thông tin này được sử dụng để cá nhân hóa trải nghiệm của bạn, như tính toán lượng calo, các chất dinh dưỡng cần thiết cho mỗi ngày</Row>
                <Row justify='space-between'>
                    {
                        dataSex.map((item, i) => (
                            <Col xs={11}
                                key={i}
                                className={sex == i ? 'quick-sex active' : 'quick-sex'}
                                style={{
                                    height: 70,
                                    textAlign: 'center', 
                                    lineHeight: '70px',
                                    fontSize: 16, fontWeight: 'bold',
                                    color: sex == i ? '#494949' : 'grey',
                                    borderRadius: '12px',
                                    cursor: 'pointer',
                                    marginBottom: 15
                                }}
                                onClick={() => {setSex(i)}}
                            >
                                {item}
                            </Col>
                        ))
                    }
                </Row>
            </>
        )
    }

    const step2 = () => {
        return (
            <>
                <Row justify='center' className='quick-question'>Bạn bao nhiêu tuổi?</Row>
                <Row justify='center'>
                    <InputApp 
                        style={{
                            borderRadius: 0, 
                            boxShadow: 'none',
                            fontSize: 20,
                            lineHeight: '18px',
                            fontWeight: 'bold',
                            maxWidth: '50vw'
                        }}
                        type="number"
                    />
                </Row>
            </>
        )
    }

    const step3 = () => {
        return (
            <>
                <Row justify='center' className='quick-question'>Chiều cao của bạn là bao nhiêu?</Row>
                <Row justify='center'>
                    <InputApp 
                        style={{
                            borderRadius: 0, 
                            boxShadow: 'none',
                            fontSize: 20,
                            lineHeight: '18px',
                            fontWeight: 'bold',
                            maxWidth: '50vw'
                        }}
                        type="number"
                        note="cm"
                    />
                </Row>
            </>
        )
    }

    const step4 = () => {
        return (
            <>
                <Row justify='center' className='quick-question'>Cân nặng hiện tại của bạn?</Row>
                <Row justify='center'>
                    <InputApp 
                        style={{
                            borderRadius: 0, 
                            boxShadow: 'none',
                            fontSize: 20,
                            lineHeight: '18px',
                            fontWeight: 'bold',
                            maxWidth: '50vw'
                        }}
                        type="number"
                        note="kg"
                    />
                </Row>
            </>
        )
    }

    return (
        <div className='quick-info'
            style={{
                height: '100vh',
                position: 'relative',
            }}
        >
            <Row className="quick-step"
                style={{
                    position: 'relative',
                }}
            >
                {
                    step > 0 && (
                        <LeftOutlined className="quick-left" style={{fontSize: 20, cursor: 'pointer', position: 'absolute', left: 0}}
                            onClick={() => {
                                setStep(pre => pre - 1)
                            }}
                        />
                    )
                }
                {
                    data.map((item, index) => (
                        <div key={index} className={index == step ? 'active' : ''}
                            onClick={() => {
                                setStep(index)
                            }}
                        >

                        </div>
                    ))
                }
            </Row>
            <Row>
                <Col style={{width: '100%', marginTop: 30}}>
                    {
                        step == 0 ? (step0())
                        : step == 1 ? (step1())
                        : step == 2 ? (step2())
                        : step == 3 ? (step3())
                        : step == 4 ? (step4())
                        : ""
                    }
                </Col>
            </Row>
            <Row
                style={{
                    position: 'absolute',
                    bottom: 50, 
                    width: 'calc(100% - 40px)',
                    padding: '0 30px'
                }}
            >
                    <ButtonApp title={step == 4 ? 'Xong' : 'Tiếp theo'}
                        style={{
                            width: '100%',
                            backgroundColor:'#1890ff'
                        }}
                        color='#fff'
                        onClick={() => {
                            if(step == 4) {
                                navigate("/calculator")
                            } else {
                                setStep(pre => pre + 1)
                            }
                        }}
                    />
            </Row>
        </div>
    )
}