import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faEllipsisVertical, faPersonBiking, faPersonRunning, faPersonWalking } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'
import { Col, Row, Select } from 'antd';

function FoodDetail({data}) {

    const handleChange = (value) => {
        console.log(`selected ${value}`);
    };

    return (
        <div className='foodDetailContainer'>
            <div className='foodDetailContainer__header'>
                <Link to={'/tim-kiem-mon-an'} className='back__searchFoods'>
                    <i><FontAwesomeIcon icon={faChevronLeft} /></i>
                </Link>
                <i><FontAwesomeIcon icon={faEllipsisVertical} /></i>
            </div>

            <div className='foodDetailContainer__content'>
                <div className='fdc'>
                    <img className='fdc__foodImg' src={data.foodImg} alt={'Hình ảnh món ăn'}></img>
                    <div className='fdc__foodName' style={{fontWeight: "bold", fontSize: "28px"}}>{data.foodName}</div>
                </div>
                <div className='fdc__Index'>
                    <div className='fdc__Index__Info-Calories'>
                        <div style={{color: "rgb(101, 188, 102)", fontWeight: "bold", fontSize: "24px"}}>{data.foodCalories}</div>
                        <div>Calories (g)</div>
                    </div>

                    <div className='fdc__Index__Info-Carbs'>
                        <div style={{color: "rgb(67, 165, 242)", fontWeight: "bold", fontSize: "24px"}}>{data.foodCarbs}</div>
                        <div>Carbs (g)</div>
                    </div>

                    <div className='fdc__Index__Info-Protein'>
                        <div style={{color: "rgb(229, 68, 122)", fontWeight: "bold", fontSize: "24px"}}>{data.foodProtein}</div>
                        <div>Protein (g)</div>
                    </div>

                    <div className='fdc__Index__Info-Fat'>
                        <div style={{color: "rgb(254, 111, 70)", fontWeight: "bold", fontSize: "24px"}}>{data.foodFat}</div>
                        <div>Fat (g)</div>
                    </div>
                </div>
                <div className='fdc__Option'>
                    <div className='fdc__Option__inner'>
                        <Row gutter={0} style={{padding: '0 0 0 8px' ,width: '100%'}} justify={'space-between'} align={'middle'}>
                            Số lượng: <Col flex={'60px'}>
                                <Select
                                    defaultValue="1"
                                    options={[
                                        {
                                            value: 1,
                                            label: '1'
                                        },
                                        {
                                            value: 2,
                                            label: '2'
                                        },
                                        {
                                            value: 3,
                                            label: '3'
                                        },
                                        {
                                            value: 4,
                                            label: '4'
                                        },
                                        {
                                            value: 5,
                                            label: '5'
                                        }
                                    ]}
                                    onChange={handleChange}
                                >
                                </Select>
                            </Col>
                            <Col flex={'auto'}>
                                <Select
                                    defaultValue="100 gram"
                                    style={{
                                        width: '100%',
                                    }}
                                    onChange={handleChange}
                                    options={[
                                        {
                                            value: 100,
                                            label: '100 gram'
                                        },
                                        {
                                            value: 200,
                                            label: '200 gram',
                                        },
                                        {
                                            value: 300,
                                            label: '300 gram',
                                        },
                                        {
                                            value: 400,
                                            label: '400 gram',
                                        },
                                        {
                                            value: 500,
                                            label: '500 gram',
                                        }
                                    ]}
                                />
                            </Col>
                        </Row>
                        
                        
                    </div>
                    <div className='fdc__Option__Meal'>
                        <Row>
                            <Col flex={'auto'}>
                                    <Select
                                        defaultValue="Bữa sáng"
                                        style={{
                                            width: '100%',
                                        }}
                                        onChange={handleChange}
                                        options={[
                                            {
                                                value: 'Bữa sáng',
                                                label: 'Bữa sáng'
                                            },
                                            {
                                                value: 'Ăn nhẹ sau bữa sáng',
                                                label: 'Ăn nhẹ sau bữa sáng',
                                            },
                                            {
                                                value: 'Bữa trưa',
                                                label: 'Bữa trưa',
                                            },
                                            {
                                                value: 'Ăn nhẹ sau bữa trưa',
                                                label: 'Ăn nhẹ sau bữa trưa',
                                            },
                                            {
                                                value: 'Bữa tối',
                                                label: 'Bữa tối',
                                            },
                                            {
                                                value: 'Ăn nhẹ sau bữa tối',
                                                label: 'Ăn nhẹ sau bữa tối',
                                            },
                                        ]}
                                    />
                                </Col>
                        </Row>
                    </div>
                </div>
                <div className='fdc__Details'>
                    <div className='fdc__Details__1'>
                        <span>Sugars, total: </span> <span>0 g</span> <br />
                        <span>Kilojoule: </span> <span>0 kJ</span> <br />
                        <span>Calcium: </span> <span>0 mg</span> <br />
                        <span>Magnesium: </span> <span>0 mg</span> <br />
                        <span>Potassium: </span> <span>0 mg</span> <br />
                        <span>Zinc: </span> <span>0 mg</span> <br />
                        <span>Selenium: </span> <span>0 mg</span> <br />
                    </div>
                    <div className='fdc__Details__2'>
                        <span>Alcohol: </span> <span>0 g</span> <br />
                        <span>Fiber: </span> <span>0 g</span> <br />
                        <span>Iron: </span> <span>0 mg</span> <br />
                        <span>Phosphorus: </span> <span>0 mg</span> <br />
                        <span>Sodium: </span> <span>0 mg</span> <br />
                        <span>Copper: </span> <span>0 mg</span> <br />
                        <span className='showMore' style={{color: "green", fontWeight: "bold"}}>Show more</span> <br />
                    </div>
                </div>
                <p style={{color: "black", fontWeight: "bold", textAlign: "center", fontSize: "18px"}}>
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
                </div>
                <button className='fdc__Button__Add'>Thêm vào nhật ký</button>
            </div>
        </div>
    )
}

export default FoodDetail;
