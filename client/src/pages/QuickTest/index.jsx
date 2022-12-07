import {Row, Col, Spin, Steps, Form, Select, Input, Button, Tabs} from 'antd'
import {WarningOutlined, QuestionOutlined, RightOutlined,CalendarOutlined, QuestionCircleOutlined, ExclamationOutlined} from '@ant-design/icons'
import { ButtonApp, Footer } from '../../components'
import { useState, useEffect } from 'react'
import './index.css'

const {Option} = Select

const dataStep = [0, 1, 2, 3]

export default function QuickTest() {
    const [screen, setScreen] = useState(0)
    const [step, setStep] = useState(0)

    const [form] = Form.useForm();

    const handleChangeWeight = (value) => {
        const weight = Number(value);
        console.log(weight)
    }

    const handleChangeHeight = (value) => {
        const height = Number(value);
        console.log(height)
    }

    useEffect(() => {
        if(screen == 1 || screen == 3) {
            setTimeout(() => {
                setScreen(pre => pre + 1)
            }, 1500)
        }
    }, [screen])

    const showResultTest = () => {
        return [
            {
                key: 1,
                label: `Sức khỏe`,
                children: (
                    <>
                        <div className=''>
                            <h3 style={{margin: '10px 0 20px'}}>Chỉ số BMI của bạn là: <span style={{color: 'var(--color-blue)'}}>{21}</span></h3>
                            <p style={{margin: '10px 0 20px'}}><ExclamationOutlined  style={{color: 'white', width: '20px', height: '20px', marginRight: '5px', lineHeight: '22px', borderRadius: '50%', backgroundColor: 'gray'}}/>Chỉ số BMI được áp dụng cho cả nam và nữ và người &gt; 18 tuổi, không áp dụng cho phụ nữ mang thai, vận động viên, người già và có sự thay đổi giữa các quốc gia</p>
                            <p style={{marginBottom: 20}}><b>Đánh giá</b>: Dựa vào thang phân loại của IDI & WPRO dành cho người châu Á</p>
                            <div style={{display: 'flex', justifyContent: 'center'}}><img style={{width: '100%'}} src='/images/result-bmi.jpeg' alt="" /></div>
                        </div>
                        <div className=''>
                            <h3 style={{margin: '10px 0 20px'}}>Luyện tập</h3>
                            <p>Cùng với việc luyện tập các bài tập mỗi ngày thì bạn cũng nên thường xuyên đến các phòng khám kiểm tra sức khỏe thường xuyên để theo dõi tình hình sức khỏe của bạn và được những lời khuyên chính xác nhất về tình hình hiện tại của bạn</p>
                            <h4 style={{color: 'var(--color-blue)'}}>Một số dấu hiệu cần phải theo dõi:</h4>
                            <p>- Khó thở</p>
                            <p>- Đau thắt ngực (đau vùng tim)</p>
                            <p>- Đánh trống ngực, hồi hộp</p>
                            <p>- Chóng mặt vào sáng sớm ngủ dậy hoặc có ngất</p>
                            <h3 style={{margin: '10px 0 0px'}}>Hoặc liên hệ với chúng tôi ngay để kịp thời đưa ra những hướng dẫn cho bạn</h3>
                            <p style={{fontSize: '18px', color: 'var(--color-blue)'}}>Chat now <RightOutlined style={{fontSize: '16px'}}/></p>
                        </div>
                    </>
                ),
            },
            {
                key: 2,
                label: `Huyết áp`,
                children: (
                    <>
                        <div className=''>
                            <h3 style={{margin: '10px 0 20px'}}>Chỉ số huyết áp bạn đo được tại nhà</h3>
                            <p>VD: Huyết áp đo được A/B</p>
                            <p>Huyết áp tâm thu: A</p>
                            <p>Huyết áp tâm trương: B</p>
                            <p style={{margin: '10px 0 20px'}}><b>Đánh giá:</b> tăng huyết áp là khi huyết áp tâm thu ≥ 140 mmHg và/hoặc huyết áp tâm trương  ≥ 90 mmHg </p>
                            <p><ExclamationOutlined  style={{color: 'white', width: '20px', height: '20px', marginRight: '5px', lineHeight: '22px', borderRadius: '50%', backgroundColor: 'gray'}}/>Cần có biện pháp can thiệp vì tăng huyết áp là yếu tố nguy cơ chủ yếu của bệnh mạch vành và tai biến mạch máu não</p>
                            <h3 style={{margonTop: '20px', marginTop: 20}}>Liên hệ ngay với chúng tôi để được tư vấn kịp thời. <span style={{color: 'var(--color-blue)', cursor: 'pointer'}}>Chat now &gt; </span></h3>
                        </div>
                    </>
                ),
            },
            {
                key: 3,
                label: `Thói quen`,
                children: (
                    <div className=''>
                        <h3 style={{fontSize: '18px', margin: '10px 0 20px'}}>Tuyên truyền <WarningOutlined style={{color: 'white', width: '20px', height: '20px', marginLeft: '5px', lineHeight: '22px', borderRadius: '50%', fontSize: '14px', backgroundColor: 'var(--color-yellow'}}/></h3>
                        <p>Hút thuốc là <b>nguyên nhân trực tiếp</b> gây ra bệnh tim mạch và tử vong, còn với những người hít phải khói thuốc lá (hút thuốc lá thụ động) có nguy cơ mắc bệnh tim mạch cao hơn khoảng 30% so với những người không hít phải khói thuốc. </p>
                        <p style={{marginTop: 20}}>Vì khói thuốc lá làm suy yếu tế bào ở tim, giảm lượng cholesterol có lợi và tăng mức huyết áp khỏi ngưỡng an toàn. Phụ nữ, trẻ vị thành niên và trẻ em là những đối tượng dễ bị tổn thương nhất khi hút thuốc thụ động.</p>
                    </div>
                ),
            },
            {
                key: 4,
                label: `Chế độ ăn`,
                children: (
                    <div className="">
                        <h3 style={{margin: '10px 0 20px'}}>Chế độ dinh dưỡng cho người mắc bệnh tim mạch</h3>
                        <p>- Giảm lượng muối ăn</p>
                        <p>- Giảm chất béo trong chế độ ăn</p>
                        <p>- Kiểm soát lượng chất bột chiếm 50 - 55% tổng số năng lượng</p>
                        <p>- Hạn chế lượng đạm ở khoảng 15% tổng số năng lượng</p>
                        <p>- Cần tránh xa bia, rượu</p>
                        <p>- Kiểm soát trọng lượng cơ thể</p>
                        <p>- Ăn nhiều rau và trái cây</p>
                        <h3  style={{ marginTop: 10 ,color: '#096dd9', cursor: 'pointer'}}>Hãy kết nối với chúng tôi để hiểu thêm về chế độ dinh dưỡng và thực đơn dành cho bạn</h3>
                    </div>
                ),
            },            
        ]
    }

    return (
        <div className="quick-test"
            style={{
                height: '100vh',
                overflow: 'auto',
                padding: '100px 20px 150px 20px', 
                background: '#f9fdff'
            }}
        >
            <Row justify='space-between' style={{ maxHeight: 100 ,padding: '50px 25px 30px 25px', borderBottom: '1px solid #eeeeee', background: 'white', top: 0, left: 0, right: 0, zIndex: '2', position: 'fixed'}}>
                <Col>
                    <Row>
                        <Col style={{fontSize: 24, fontWeight: 'bold', lineHeight: '22px'}}>
                            Kiểm tra nhanh
                        </Col>
                    </Row>
                </Col>
                <Col>
                    <Row>
                        <Col>
                            <QuestionCircleOutlined style={{fontSize: 22, marginRight: 10}} className='icon-grey'/>
                        </Col>
                    </Row>
                </Col>
            </Row>

            {
                screen == 0 ? (
                    <Row style={{height: '100%', textAlign: 'center'}} className='flex-col-center'>
                        <span style={{marginBottom: 15, padding: '0 30px', fontWeight: 'bold'}}>Hãy cùng chúng tôi kiểm tra sức khỏe của bạn nhé!</span>
                        <span>
                            <ButtonApp 
                                color='#fff'
                                title='Bắt đầu'
                                style={{
                                    width: '120px',
                                }}
                                onClick={() => {setScreen(1)}}
                            />
                        </span>
                    </Row>
                ) : screen == 1 ? (
                    <Row style={{height: '100%', textAlign: 'center'}} className='flex-col-center'>
                        <p>
                            <Spin size='large'/>
                        </p>
                        <p style={{color: 'grey', marginTop: 10}}>
                            Đang tạo bài kiểm tra ....
                        </p>
                    </Row>
                ) : screen == 2 ? (
                    <>
                        <Row style={{}} >
                            <Row className='quick-test-step' justify="center">
                                <span className='flex'>
                                    {
                                        dataStep.map((item, index) => (
                                            <div key={index} className={index <= step ? 'active' : ''}
                                                onClick={() => {
                                                    setStep(index)
                                                }}
                                            >
                                                {index + 1}
                                            </div>
                                        ))
                                    }
                                </span>
                            </Row>
                        </Row>
                        {
                            step === 0 ? (
                                <div className={"quick-test-step-content"} >
                                    <Row justify='center'style={{fontWeight: 'bold', fontSize: 20, marginBottom: 20}}>Thông tin cơ bản</Row>
                                    <Form
                                        style={{ }}
                                        form={form}
                                        layout="vertical"
                                        initialValues={{
                                            // requiredMarkValue: true,
                                        }}
                                        requiredMark={true}
                                    >
                                        <Form.Item 
                                            label="Giới tính" 
                                            required 
                                            tooltip="Đây là trường thông tin cần điền">
                                            <Select placeholder="Giới tính của bạn ...">
                                                <Option value="nam">Nam</Option>
                                                <Option value="nu">Nữ</Option>
                                            </Select>
                                        </Form.Item>
                                        <Form.Item 
                                            label="Tuổi" 
                                            required 
                                            tooltip="Đây là trường thông tin cần điền">
                                            <Input style={{textAlign: 'left'}} placeholder="Nhập tuổi của bạn ..." type="number"/>
                                        </Form.Item>
                                        <Form.Item 
                                            label="Cân nặng (kg)" 
                                            required 
                                            tooltip="Đây là trường thông tin cần điền">
                                            <Input type="number" style={{textAlign: 'left'}} placeholder="Nhập cân nặng của bạn ..." onChange={(e) => handleChangeWeight(e.target.value)} />
                                        </Form.Item>
                                        <Form.Item
                                            label="Chiều cao (cm)"
                                            required
                                            tooltip={{
                                            title: 'Đây là trường thông tin cần điền',
                                            }}
                                        >
                                            <Input type="number" style={{textAlign: 'left'}} placeholder="Nhập chiều cao của bạn ..." onChange={(e) => handleChangeHeight(e.target.value)}/>
                                        </Form.Item>
                                        <Form.Item>
                                            <ButtonApp color='#fff'  onClick={() => setStep(1)} type="primary" style={{ width: '120px'}} title='Tiếp theo'></ButtonApp>
                                        </Form.Item>

                                    </Form>
                                    
                                </div>
                            ) : step == 1 ? (
                                <div className={"quick-test-step-content"}>
                                    <Row justify='center'style={{fontWeight: 'bold', fontSize: 20, marginBottom: 20}}>Chế độ ăn</Row>
                                    <Form
                                        style={{ }}
                                        form={form}
                                        layout="vertical"
                                        initialValues={{
                                            //requiredMarkValue: true,
                                        }}
                                        requiredMark={true}
                                    >
                                            <Form.Item 
                                                name="select1"
                                                label="Bạn ăn 1 ngày bao nhiêu bữa?" 
                                                hasFeedback
                                                rules={[
                                                    {
                                                        required: true,
                                                        message: 'Lựa chọn của bạn!',
                                                    },
                                                ]}
                                            >
                                                <Select placeholder="Lựa chọn của bạn">
                                                    <Option value="0">5 hoặc 6 bữa ăn nhỏ</Option>
                                                    <Option value="1">3 bữa</Option>
                                                    <Option value="2">1 hoặc 2 bữa</Option>
                                                </Select>
                                            </Form.Item>
                                            <Form.Item 
                                            name="select2"
                                                label="Mỗi ngày bạn ăn bao nhiêu lượng rau củ?" 
                                                hasFeedback
                                                rules={[
                                                    {
                                                        required: true,
                                                        message: 'Lựa chọn của bạn!',
                                                    },
                                                ]}
                                        >
                                                <Select placeholder="Lựa chọn của bạn">
                                                    <Option value="0">từ 300 gram (khoảng 2 chén)</Option>
                                                    <Option value="1">100-300 gram</Option>
                                                    <Option value="2">rất ít  hoặc không ăn</Option>
                                                </Select>
                                            </Form.Item>
                                            <Form.Item 
                                            name="select3"
                                                label="Mỗi ngày bạn ăn bao nhiêu lượng hoa quả?" 
                                                hasFeedback
                                                rules={[
                                                    {
                                                        required: true,
                                                        message: 'Lựa chọn của bạn!',
                                                    },
                                                ]}
                                            >
                                                <Select placeholder="Lựa chọn của bạn">
                                                    <Option value="0">Từ 100-200 gram</Option>
                                                    <Option value="1">Dưới 100 gram</Option>
                                                    <Option value="2">Rất ít hoặc không</Option>
                                                </Select>
                                            </Form.Item>
                                            <Form.Item 
                                            name="select4"
                                                label="Bạn ăn những thức ăn có chất béo với số lượng như thế nào?( bình thường 50-83g chất béo / ngày )" 
                                                hasFeedback
                                                rules={[
                                                    {
                                                        required: true,
                                                        message: 'Lựa chọn của bạn!',
                                                    },
                                                ]}
                                                >
                                                <Select placeholder="Lựa chọn của bạn">
                                                    <Option value="0">Rất ít</Option>
                                                    <Option value="1">Trung bình</Option>
                                                    <Option value="2">Rất nhiều</Option>
                                                </Select>
                                            </Form.Item>
                                            <Form.Item>
                                                <ButtonApp color='#fff' onClick={() => setStep(2)} type="primary" style={{ width: '40%'}} title='Tiếp theo'></ButtonApp>
                                                <ButtonApp color='#fff' style={{ width: '30%', marginLeft: '20px'}} type="primary" onClick={() => setStep(0)} title='Trước'></ButtonApp>
                                            </Form.Item>

                                    </Form>
                                </div>
                            ) : step == 2 ? (
                                <div className={"quick-test-step-content"}>
                                    <Row justify='center'style={{fontWeight: 'bold', fontSize: 20, marginBottom: 20}}>Thói quen</Row>
                                    <Form
                                        style={{ }}
                                        form={form}
                                        layout="vertical"
                                        initialValues={{
                                            //requiredMarkValue: true,
                                        }}
                                        requiredMark={true}
                                    >
                                        <Form.Item
                                            name="select1"
                                            label="Bạn có thường xuyên hút thuốc lá?"
                                            hasFeedback
                                            rules={[
                                            {
                                                required: true,
                                                message: 'Lựa chọn của bạn!',
                                            },
                                            ]}
                                        >
                                            <Select placeholder="Lựa chọn của bạn">
                                                <Option value="0">Không bao giờ</Option>
                                                <Option value="1">Thỉnh thoảng có hút</Option>
                                                <Option value="2">Thường xuyên hút</Option>
                                            </Select>
                                        </Form.Item>
                                        <Form.Item
                                            name="select2"
                                            label="Bạn có thường xuyên uống rượu bia"
                                            hasFeedback
                                            rules={[
                                            {
                                                required: true,
                                                message: 'Lựa chọn của bạn!',
                                            },
                                            ]}
                                        >
                                            <Select placeholder="Lựa chọn của bạn">
                                                <Option value="0">không bao giờ</Option>
                                                <Option value="1">Thỉnh thoảng có uống</Option>
                                                <Option value="2">Thường xuyên uống</Option>
                                            </Select>
                                        </Form.Item>
                                        <Form.Item
                                            name="select3"
                                            label="Bạn có thường xuyên tập thể dục không?"
                                            hasFeedback
                                            rules={[
                                            {
                                                required: true,
                                                message: 'Lựa chọn của bạn!',
                                            },
                                            ]}
                                        >
                                            <Select placeholder="Lựa chọn của bạn">
                                                <Option value="0">Có, Trên 3 ngày/ tuần</Option>
                                                <Option value="1">Có, từ 1-2 ngày/ tuần</Option>
                                                <Option value="2">Không</Option>
                                            </Select>
                                        </Form.Item>
                                        <Form.Item
                                            name="select4"
                                            label="Loại hình thể dục nào bạn thích nhất và đang luyện tập"
                                            hasFeedback
                                            rules={[
                                            {
                                                required: true,
                                                message: 'Lựa chọn của bạn!',
                                            },
                                            ]}
                                        >
                                            <Select placeholder="Lựa chọn của bạn">
                                                <Option value="0">bài tập nhẹ nhàng ( đi bộ, yoga,...)</Option>
                                                <Option value="1">bài tập cường độ mạnh ( thể lực,..)</Option>
                                                <Option value="2">không loại nào</Option>
                                            </Select>
                                        </Form.Item>
                                        
                                        <Form.Item>
                                            <ButtonApp color='#fff' title="Tiếp theo" onClick={() => setStep(3)} type="primary" style={{ width: '40%'}}></ButtonApp>
                                            <ButtonApp color='#fff' title="Trước" style={{ width: '30%', marginLeft: '20px'}} type="primary" onClick={() => setStep(1)}></ButtonApp>
                                        </Form.Item>

                                    </Form>
                                </div>
                            ) : step == 3 ? (
                                <div className={"quick-test-step-content"}>
                                    <Row justify='center'style={{fontWeight: 'bold', fontSize: 20, marginBottom: 20}}>Sức khỏe</Row>
                                    <Form
                                        style={{ }}
                                        form={form}
                                        layout="vertical"
                                        initialValues={{
                                            //requiredMarkValue: true,
                                        }}
                                        requiredMark={true}
                                    >
                                        <Form.Item
                                            name="select1"
                                            label="Bạn có thường xuyên bị stress(căng thẳng) không?"
                                            hasFeedback
                                            rules={[
                                            {
                                                required: true,
                                                message: 'Lựa chọn của bạn!',
                                            },
                                            ]}
                                        >
                                            <Select placeholder="Lựa chọn của bạn">
                                                <Option value="0">Không</Option>
                                                <Option value="1">Thỉnh thoảng </Option>
                                                <Option value="2">Thường xuyên</Option>
                                            </Select>
                                        </Form.Item>
                                        <Form.Item
                                            name="select2"
                                            label="Bạn có thường xuyên đi khám sức khỏe tổng quát không?"
                                            hasFeedback
                                            rules={[
                                            {
                                                required: true,
                                                message: 'Lựa chọn của bạn!',
                                            },
                                            ]}
                                        >
                                            <Select placeholder="Lựa chọn của bạn">
                                                <Option value="0">mỗi năm 1 lần</Option>
                                                <Option value="1">từ 2-3 năm</Option>
                                                <Option value="2">Chưa bao giờ</Option>
                                            </Select>
                                        </Form.Item>
                                        <Form.Item>
                                            <ButtonApp color='#fff' type="primary" style={{ width: '30%'}} title="Kiểm tra"
                                                onClick={() => {
                                                    setScreen(3)
                                                }}
                                            />
                                            
                                            <ButtonApp color='#fff' style={{ width: '30%', marginLeft: '20px'}} type="primary" onClick={() => setStep(2)} title='Trước'></ButtonApp>
                                        </Form.Item>

                                    </Form>
                                </div>
                            ) : ""
                        }
                    </>
                ) :  screen == 3 ? (
                    <Row style={{height: '100%', textAlign: 'center'}} className='flex-col-center'>
                        <p>
                            <Spin size='large'/>
                        </p>
                        <p style={{color: 'grey', marginTop: 10}}>
                            Đang phân tích ....
                        </p>
                    </Row>
                ) : screen == 4 ? (
                    <div style={{padding: '0 5px'}}>
                        <Row
                            style={{
                                fontSize: 16,
                                fontWeight: 'bold',
                                margin: '50px 0 15px 0'
                            }}
                        >
                            Theo dõi các yếu tố nguy cơ
                        </Row>
                        <Row>
                            <Tabs
                                tabPosition={'top'}
                                items={showResultTest()}
                            />
                        </Row>
                    </div>
                ) : ""
            }
            
            <Footer active='quick-test'/>
        </div>
    )
}