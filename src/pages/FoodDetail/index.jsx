import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faEllipsisVertical, faPersonBiking, faPersonRunning, faPersonWalking } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'

function FoodDetail({data}) {
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
                        <div style={{color: "green", fontWeight: "bold", fontSize: "24px"}}>{data.foodCalories}</div>
                        <div>Calories (g)</div>
                    </div>

                    <div className='fdc__Index__Info-Carbs'>
                        <div style={{color: "red", fontWeight: "bold", fontSize: "24px"}}>{data.foodCarbs}</div>
                        <div>Carbs (g)</div>
                    </div>

                    <div className='fdc__Index__Info-Protein'>
                        <div style={{color: "blue", fontWeight: "bold", fontSize: "24px"}}>{data.foodProtein}</div>
                        <div>Protein (g)</div>
                    </div>

                    <div className='fdc__Index__Info-Fat'>
                        <div style={{color: "orange", fontWeight: "bold", fontSize: "24px"}}>{data.foodFat}</div>
                        <div>Fat (g)</div>
                    </div>
                </div>
                <div className='fdc__Option'>
                    <div className='fdc__Option__inner'>
                        <div className='fdc__Option__Quantity'>
                            {/* <input placeholder='1x' /> */}
                            1x
                        </div>
                        <div className='fdc__Option__Type'>
                            <select>
                                <option value={0}>cup (100g)</option>
                                <option value={1}>cup (200g)</option>
                                <option value={2}>cup (300g)</option>
                            </select>
                        </div>
                    </div>
                    <div className='fdc__Option__Meal'>
                        <select>
                            <option value={0}>Bữa sáng</option>
                            <option value={1}>Ăn nhẹ sau bữa sáng</option>
                            <option value={2}>Bữa trưa</option>
                            <option value={3}>Ăn nhẹ sau bữa trưa</option>
                            <option value={4}>Bữa tối</option>
                            <option value={5}>Ăn nhẹ sau bữa tối</option>
                        </select>
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
