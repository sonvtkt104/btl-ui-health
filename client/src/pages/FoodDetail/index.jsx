import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faEllipsisVertical, faPersonBiking, faPersonRunning, faPersonWalking } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom'
import { Col, Row, Select } from 'antd';

const { Option } = Select

function FoodDetail({data}) {

    const navigate = useNavigate()

    const handleChange = (value) => {
        console.log(`selected ${value}`);
    };

    return (
        <div className='foodDetailContainer'>
            <div className='foodDetailContainer__header'>
                <span className='back__searchFoods'
                    onClick={() => {
                        navigate(-1)
                    }}
                >
                    <i><FontAwesomeIcon icon={faChevronLeft} /></i>
                </span>
                <i><FontAwesomeIcon icon={faEllipsisVertical} /></i>
            </div>

            <div className='foodDetailContainer__content' style={{position: 'relative', paddingBottom: 70}}>
                <div className='fdc'>
                    <img className='fdc__foodImg' src={data.foodImg} alt={'Hình ảnh món ăn'}></img>
                    <div className='fdc__foodName' style={{fontWeight: "bold", fontSize: "28px"}}>{data.foodName}</div>
                </div>
                <div className='fdc__Index'>
                    <div className='fdc__Index__Info-Calories'>
                        <div style={{color: "rgb(101, 188, 102)", fontWeight: "bold", fontSize: "24px"}}>{data.foodCalories}</div>
                        <div style={{color: "grey", marginTop: 5}}>Calories</div>
                    </div>

                    <div className='fdc__Index__Info-Carbs'>
                        <div style={{color: "rgb(67, 165, 242)", fontWeight: "bold", fontSize: "24px"}}>{data.foodCarbs}</div>
                        <div style={{color: "grey", marginTop: 5}}>Tinh bột</div>
                    </div>

                    <div className='fdc__Index__Info-Protein'>
                        <div style={{color: "rgb(229, 68, 122)", fontWeight: "bold", fontSize: "24px"}}>{data.foodProtein}</div>
                        <div style={{color: "grey", marginTop: 5}}>Chất đạm</div>
                    </div>

                    <div className='fdc__Index__Info-Fat'>
                        <div style={{color: "rgb(254, 111, 70)", fontWeight: "bold", fontSize: "24px"}}>{data.foodFat}</div>
                        <div style={{color: "grey", marginTop: 5}}>Chất béo</div>
                    </div>
                </div>
                <div className='fdc__Option'>
                    <div className='fdc__Option__inner'>
                        <Row style={{padding: '0 0 0 8px' ,width: '100%'}}>
                            <span style={{fontWeight: 'bold', marginRight: 5, lineHeight: '35px'}}>
                                Số lượng: 
                            </span>
                            <span>
                                <Select 
                                    value={100}
                                    style={{width: 100, fontWeight: "bold"}}
                                >
                                    <Option value={100}>100</Option>
                                    <Option value={100}>200</Option>
                                    <Option value={100}>300</Option>
                                    <Option value={100}>400</Option>
                                    <Option value={100}>500</Option>
                                </Select>
                            </span>
                            <span style={{lineHeight: '35px', color: 'grey', marginLeft: 10}}>gram / ml</span>
                        </Row>
                        
                        
                    </div>
                    <div className='fdc__Option__Meal' style={{margin: '10px 0 20px'}}>
                        <Row>
                            <Col flex={'auto'}>
                                    <Select
                                        defaultValue="Bữa sáng"
                                        style={{
                                            width: '100%',
                                        }}
                                        onChange={handleChange}
                                    >
                                        <Option>Bữa sáng</Option>
                                        <Option>Bữa trưa</Option>
                                        <Option>Bữa tối</Option>
                                        <Option>Bữa phụ</Option>
                                    </Select>
                                </Col>
                        </Row>
                    </div>
                </div>
                <div className='fdc__Details'>
                    <div className='fdc__Details__1'>
                        <span>Sugars, total: </span> <span>1,3 g</span> <br />
                        <span>Kilojoule: </span> <span>343,2 kJ</span> <br />
                        <span>Calcium: </span> <span>33,3 mg</span> <br />
                        <span>Magnesium: </span> <span>7,3 mg</span> <br />
                        <span>Potassium: </span> <span>35,7 mg</span> <br />
                        <span>Zinc: </span> <span>0,8 mg</span> <br />
                    </div>
                    <div className='fdc__Details__2'>
                        <span>Alcohol: </span> <span>0 g</span> <br />
                        <span>Fiber: </span> <span>0,7 g</span> <br />
                        <span>Iron: </span> <span>0,9 mg</span> <br />
                        <span>Phosphorus: </span> <span>28,8 mg</span> <br />
                        <span>Sodium: </span> <span>132,7 mg</span> <br />
                        <span>Copper: </span> <span>0 mg</span> <br />
                    </div>
                </div>
                {/* <p style={{color: "black", fontWeight: "bold", textAlign: "center", fontSize: "18px"}}>
                    Làm cách nào để đốt cháy <span>{data.foodCalories}</span> calories
                </p>
                <br />
                <div className='fdc__How'>
                    <div className='fdc__How__Walking'>
                        <i><FontAwesomeIcon style={{color: "green"}} icon={faPersonWalking} /></i>
                        <span>22 phút</span>
                    </div>
                    <div className='fdc__How__Biking'>
                        <i><FontAwesomeIcon style={{color: "green"}} icon={faPersonBiking} /></i>
                        <span>17 phút</span>
                    </div>
                    <div className='fdc__How__Running'>
                        <i><FontAwesomeIcon style={{color: "green"}} icon={faPersonRunning} /></i>
                        <span>7 phút</span>
                    </div>
                </div> */}
                <button 
                    className='fdc__Button__Add'
                    style={{
                        position: 'absolute',
                        bottom: '15px'
                    }}
                    onClick={() => {
                        navigate("/home")
                    }}
                >
                    Thêm vào nhật ký
                </button>
            </div>
        </div>
    )
}

export default FoodDetail;
