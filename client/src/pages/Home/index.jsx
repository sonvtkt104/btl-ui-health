
import { Link, useNavigate } from 'react-router-dom'
import { 
    Row,
    Col,
    Progress,
    DatePicker
} from 'antd'
import { 
    CalendarOutlined,
    QrcodeOutlined,
    CarryOutOutlined,
    UserOutlined,
    PlusOutlined,
    SettingOutlined,
    InfoCircleOutlined,
    CloseCircleOutlined,
    PlusCircleOutlined,
    BellOutlined
} from '@ant-design/icons'
import './index.css'
import { Footer, ItemFood } from '../../components'
import {useState, useMemo, useEffect} from 'react'
import { useSelector } from 'react-redux'

export default function Home() {
    const [openTips, setOpenTips] = useState(true)

    const {
        foodsBreakFirst, 
        foodsLunch, 
        foodsDinner, 
        foodsSnack,
        calorieMax,
        carbsMax,
        proteinMax,
        fatMax
    } = useSelector((state) => state.app)

    const navigate = useNavigate()
    
    const onChangeDate = (date, dateString) => {
        console.log(date, dateString);
    };

    const caloriesBreakFirst = useMemo(()=>{
        return foodsBreakFirst.reduce(
            (accumulator, currentValue) => accumulator + currentValue.foodCalories,
            0
          );
    }, [foodsBreakFirst])

    const caloriesLunch = useMemo(()=>{
        return foodsLunch.reduce(
            (accumulator, currentValue) => accumulator + currentValue.foodCalories,
            0
          );
    }, [foodsLunch])

    const caloriesDinner = useMemo(()=>{
        return foodsDinner.reduce(
            (accumulator, currentValue) => accumulator + currentValue.foodCalories,
            0
          );
    }, [foodsDinner])

    const caloriesSnack = useMemo(()=>{
        return foodsSnack.reduce(
            (accumulator, currentValue) => accumulator + currentValue.foodCalories,
            0
          );
    }, [foodsSnack])

    const caloriesTotal = useMemo(()=>{
        return caloriesBreakFirst + caloriesLunch + caloriesDinner + caloriesSnack
    }, [caloriesBreakFirst, caloriesLunch, caloriesDinner, caloriesSnack])

    const carbsProteinFat = useMemo(()=>{
        let foods = foodsBreakFirst.concat(foodsLunch, foodsDinner, foodsSnack)
        let carbs = 0, protein = 0, fat = 0;
        foods.map(item => {
            carbs += item.foodCarbs
            protein += item.foodProtein
            fat += item.foodFat
        })

        return carbs + " " + protein + " " + fat
    }, [foodsBreakFirst, foodsLunch, foodsDinner, foodsSnack])

    const headerMeal = (type, calories) => {
        return (
            <>
                <Row className='mealName' 
                    style={{fontSize:18, fontWeight:'bold', margin: '30px 0 7px', paddingRight: 7}}
                    justify='space-between'
                >
                    <span>{type}</span>
                    <span>
                        <PlusCircleOutlined style={{cursor: 'pointer'}}
                            onClick={() => {navigate("/search")}}
                        />
                    </span>
                </Row>
                <p className='calories'>{calories} calories</p>
            </>
        )
    }

    return (
        <div className='homeContainer' style={{position: 'relative'}}>
            <div className='diaryContainer'>
                <div className='DiaryHeader'>
                    <Row justify='space-between' style={{ maxHeight: 100 ,padding: '50px 25px 30px 25px', borderBottom: '1px solid #eeeeee', background: 'white', top: 0, left: 0, right: 0, zIndex: '2', position: 'fixed'}}>
                        <Col>
                            <Row>
                                <Col style={{fontSize: 24, fontWeight: 'bold', lineHeight: '22px'}}>
                                    H??m nay
                                </Col>
                            </Row>
                        </Col>
                        <Col>
                            <Row>
                                <Col>
                                    {/* <CalendarOutlined style={{fontSize: 22, marginRight: 10}} /> */}
                                    <DatePicker onChange={() => onChangeDate()} />
                                </Col>
                                <Col>
                                    <BellOutlined style={{fontSize: 22, marginLeft: 15}}/>
                                </Col>
                                <Col>
                                    <Link to='/settings'>
                                        <SettingOutlined style={{fontSize: 22, marginLeft: 15}}/>
                                    </Link>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </div>
                <div className='chart'>
                    <Row justify='space-between' style={{margin: '15px 0 0px'}}>
                        <Col style={{}}>
                            {
                                (calorieMax - caloriesTotal) > 0 
                                ? `B???n v???n c?? th??? h???p thu ${calorieMax - caloriesTotal} calories`
                                : `B???n ???? h???p thu qu?? ${caloriesTotal - calorieMax} calories`
                            }
                            
                        </Col>
                    </Row>
                    <Row>
                        <Progress percent={parseInt(caloriesTotal * 100 / calorieMax)} showInfo={false} strokeColor="#43a5f2" />
                    </Row>
                    <Row justify='space-between' style={{margin: '0px 0 15px'}}>
                        <Col style={{color: 'grey'}}>???? ti??u th??? {caloriesTotal} calories</Col>
                        <Col style={{fontWeight: 'bold'}}>M???c ti??u: <span style={{color: '#1890ff'}}>{calorieMax}</span></Col>
                    </Row>
                    <Row justify='space-between' style={{margin: '30px 0 10px'}}>
                        <Col xs={8} style={{padding: '0 5px', textAlign: 'center'}}>
                            <Progress 
                                type="circle"
                                strokeColor="#65bc66"
                                trailColor="#EDF1F5"
                                strokeWidth={9}
                                percent={parseInt(carbsProteinFat.split(" ")[0] * 100 / carbsMax)}
                                format={(percent) => {
                                    return (
                                        <div style={{
                                            position: 'relative',
                                            color: '#65bc66',
                                            fontWeight: 'bold'
                                        }}>
                                            {percent}
                                            <span style={{position: 'absolute', fontSize: 12, color: '#65bc66'}}>
                                                %
                                            </span>
                                        </div>
                                    );
                                }}
                                width={80}
                            />
                            <Row justify='center' style={{color:'#65bc66', marginTop: 7, fontWeight: '600' }}>{`${carbsMax}g `}Tinh b???t</Row>
                        </Col>
                        <Col xs={8} style={{padding: '0 5px', textAlign: 'center'}}>
                            <Progress 
                                type="circle"
                                strokeColor="#e5447a"
                                trailColor="#EDF1F5"
                                strokeWidth={9}
                                percent={parseInt(carbsProteinFat.split(" ")[1] * 100 / proteinMax)}
                                format={(percent) => {
                                    return (
                                        <div style={{
                                            position: 'relative',
                                            color: '#e5447a',
                                            fontWeight: 'bold'
                                        }}>
                                            {percent}
                                            <span style={{position: 'absolute', fontSize: 12, color: '#e5447a'}}>
                                                %
                                            </span>
                                        </div>
                                    );
                                }}
                                width={80}
                            />
                            <Row justify='center' style={{color:'#e5447a', marginTop: 7, fontWeight: '600' }}>{`${proteinMax}g `}Ch???t ?????m</Row>
                        </Col>
                        <Col xs={8} style={{padding: '0 5px', textAlign: 'center'}}>
                            <Progress 
                                type="circle"
                                strokeColor="#fe6f46"
                                trailColor="#EDF1F5"
                                strokeWidth={9}
                                percent={parseInt(carbsProteinFat.split(" ")[2] * 100 / fatMax)}
                                format={(percent) => {
                                    return (
                                        <div style={{
                                            position: 'relative',
                                            color: '#fe6f46',
                                            fontWeight: 'bold'
                                        }}>
                                            {percent}
                                            <span style={{position: 'absolute', fontSize: 12, color: '#fe6f46'}}>
                                                %
                                            </span>
                                        </div>
                                    );
                                }}
                                width={80}
                            />
                            <Row justify='center' style={{color:'#fe6f46', marginTop: 7, fontWeight: '600' }}>{`${fatMax}g `}Ch???t b??o</Row>
                        </Col>
                    </Row>
                </div>
                <div className='foodChoice'>
                    <div className='meal' style={{padding: '0 0 20px 0'}}>
                        {
                            foodsBreakFirst.length > 0 ? (
                                <>
                                    {headerMeal('B???a s??ng', caloriesBreakFirst)}
                                    {
                                        foodsBreakFirst.map((item, i) => (
                                            <ItemFood key={i} data={item} type={'sang'}/>
                                        ))
                                    }
                                </>
                            ) : ""
                        }
                        {
                            foodsLunch.length > 0 ? (
                                <>
                                    {headerMeal('B???a tr??a', caloriesLunch)}
                                    {
                                        foodsLunch.map((item, i) => (
                                            <ItemFood key={i} data={item} type={"trua"}/>
                                        ))
                                    }
                                </>
                            ) : ""
                        }
                        {
                            foodsDinner.length > 0 ? (
                                <>
                                    {headerMeal('B???a t???i', caloriesDinner)}
                                    {
                                        foodsDinner.map((item, i) => (
                                            <ItemFood key={i} data={item} type={"toi"}/>
                                        ))
                                    }
                                </>
                            ) : ""
                        }
                        {
                            foodsSnack.length > 0 ? (
                                <>
                                    {headerMeal('B???a ph???', caloriesSnack)}
                                    {
                                        foodsSnack.map((item, i) => (
                                            <ItemFood key={i} data={item} type={"phu"}/>
                                        ))
                                    }
                                </>
                            ) : ""
                        }
                        
                    </div>
                </div>
                {
                    openTips && (
                        <div className='tips' style={{marginBottom: 50, position: 'relative'}}>
                            <div>
                                <span style={{fontWeight: '600', color: '#1890ff'}}>G???i ?? m???i ng??y</span>
                            </div>
                            <div>
                                <p style={{fontWeight: '600', margin: '5px 0px 10px'}}>Calories l?? g???</p> 
                                <p>
                                    Calories l?? m???t ????n v??? n??ng l?????ng. Trong dinh d?????ng calories th?????ng ???????c d??ng ????? ??o m???t ????? n??ng l?????ng trong th???c ph???m.
                                </p>
                            </div>
                            <span style={{position: 'absolute', cursor: 'pointer', top: 10, right: 10}}>
                                <CloseCircleOutlined style={{fontSize: 12}} 
                                    onClick={() => {setOpenTips(false)}}
                                />
                            </span>
                        </div>
                    )
                }
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
                    navigate('/search')
                }}
            />
            <Footer active='home'/>
        </div>
    )
}