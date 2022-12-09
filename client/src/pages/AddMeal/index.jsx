import { faChevronLeft, faClose, faPersonBiking, faPersonRunning, faPersonWalking, faPlusCircle, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import './style.css'

import img_foods from '../../assets/image';
import { ButtonFood } from '../../components';
import { Fragment, useState } from 'react';
import FoodDetail from '../FoodDetail';
import { Col, Row, Select } from 'antd';

const listMeals = [
  {   
      foodId: 1,
      foodImg: img_foods.suachuakhongduong,
      foodName: 'Sữa chua không đường',
      foodKcal: '61 kcal',
      foodType: 'cup (100 gram)',
      foodCalories: 61,
      foodCarbs: 4.8,
      foodProtein: 3.7,
      foodFat: 3
  },
  {   
    foodId: 2,
    foodImg: img_foods.suachuakhongduong,
    foodName: 'Sữa chua không đường',
    foodKcal: '61 kcal',
    foodType: 'cup (100 gram)',
    foodCalories: 61,
    foodCarbs: 4.8,
    foodProtein: 3.7,
    foodFat: 3
  }
]

const foods_2 = [
  {   
      foodId: 1,
      foodImg: img_foods.suachuakhongduong,
      foodName: 'Sữa chua không đường',
      foodKcal: '61 kcal',
      foodType: 'cup (100 gram)',
      foodCalories: 61,
      foodCarbs: 4.8,
      foodProtein: 3.7,
      foodFat: 3
  }
]

function AddMeal() {

  const [state, setState] = useState(0);

  return (
    <div className='addMeal'>
        {
          state === 0 ? (
            <div className='addMeal_container1'>
              <div className="addMeal_iconClose">
                      <Link to={"/search"}>
                        <i>
                          <FontAwesomeIcon icon={faClose} />
                        </i>
                      </Link>
              </div>
              <h2 style={{textAlign: 'center', marginBottom: '24px'}}>Thêm bữa ăn</h2>
              <input className="nameMeal" placeholder="Bữa ăn" />
              <input className="nameMeal" placeholder="Mô tả" />
    
              <div style={{display: 'flex', alignItems: "center", justifyContent: 'space-between', marginTop: '24px'}}>
                <span style={{color: 'black', fontWeight: 600, fontSize: '16px'}}>Danh sách món ăn</span>
                <i ><FontAwesomeIcon style={{color: 'green', fontSize: '20px', cursor: 'pointer'}} icon={faPlusCircle} /></i>
              </div>
              <ul style={{marginTop: '24px', height: '200px', display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
                {
                  listMeals.length > 0 ? (
                    listMeals.map(item => (
                      <li style={{position: 'relative'}} key={item.foodId}>
                        <ButtonFood data={item} />
                        <FontAwesomeIcon className='icon_Trash' icon={faTrash} />
                      </li>
                    ))
                  ) : ""
                }
              </ul>
              <button className="addMeal_btnSave" onClick={e => setState(1)}>Lưu</button>
            </div>
          ) : (
            <div className='addMeal_container2'>
             <div className="addMeal_iconBack">
                <i>
                  <FontAwesomeIcon
                    icon={faChevronLeft}
                    onClick={(e) => setState(0)}
                    value={state}
                  />
                </i>
              </div>

              <div className='addMeal_content'>
                <div className='fdc'>
                    <img className='fdc__foodImg' src={foods_2[0].foodImg} alt={'Hình ảnh món ăn'}></img>
                    <div className='fdc__foodName' style={{fontWeight: "bold", fontSize: "28px"}}>{"Bữa sáng"}</div>
                </div>
                <div className='fdc__Index'>
                    <div className='fdc__Index__Info-Calories'>
                        <div style={{color: "green", fontWeight: "bold", fontSize: "24px"}}>{"36"}</div>
                        <div>Calories (g)</div>
                    </div>

                    <div className='fdc__Index__Info-Carbs'>
                        <div style={{color: "red", fontWeight: "bold", fontSize: "24px"}}>{"36"}</div>
                        <div>Carbs (g)</div>
                    </div>

                    <div className='fdc__Index__Info-Protein'>
                        <div style={{color: "blue", fontWeight: "bold", fontSize: "24px"}}>{"36"}</div>
                        <div>Protein (g)</div>
                    </div>

                    <div className='fdc__Index__Info-Fat'>
                        <div style={{color: "orange", fontWeight: "bold", fontSize: "24px"}}>{"36"}</div>
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
                                    
                                >
                                </Select>
                            </Col>
                            <Col flex={'auto'}>
                                <Select
                                    defaultValue="100 gram"
                                    style={{
                                        width: '100%',
                                    }}
                                    
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
                <ul style={{marginTop: '24px', height: '200px', display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
                  {
                    listMeals.length > 0 ? (
                      listMeals.map(item => (
                        <li style={{position: 'relative'}} key={item.foodId}>
                          <ButtonFood data={item} />
                          <FontAwesomeIcon className='icon_Trash' icon={faTrash} />
                        </li>
                      ))
                    ) : ""
                  }
                </ul>
                <p style={{color: "black", fontWeight: "bold", textAlign: "center", fontSize: "18px"}}>
                    Làm cách nào để đốt cháy <span>{"36"}</span> calories
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
                <button className='addMeal_btnSave_diary'>Thêm vào nhật ký</button>
            </div>
            </div>
          )
        }
      </div>
  )
}

export default AddMeal;
