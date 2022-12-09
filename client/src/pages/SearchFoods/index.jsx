import { useState } from 'react'
import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose, faPlus, faQrcode, faSearch } from '@fortawesome/free-solid-svg-icons'
import { ButtonFood } from '../../components'
import foods from '../../assets/data'
import { ScanOutlined} from '@ant-design/icons'
import {Link, useNavigate} from 'react-router-dom'
import {Row, Col} from 'antd'

const dataTypes = ['Tất cả', 'Món ăn của tôi', 'Bữa ăn'];

// import img_foods from '../../assets/image'
// import { useNavigate } from 'react-router-dom'

const myfoods = [
    // {   
    //     foodId: 1,
    //     foodImg: img_foods.suachuakhongduong,
    //     foodName: 'Sữa chua không đường',
    //     foodKcal: '61 kcal',
    //     foodType: 'cup (100 gram)',
    //     foodCalories: 61,
    //     foodCarbs: 4.8,
    //     foodProtein: 3.7,
    //     foodFat: 3
    // }
]

function SearchFoods() {

    let navigate = useNavigate(); 
    const routeChange = () => { 
        let path = ``; 
        if(change === 'myfood') {
            path = `addmyfood`;
            navigate(path);
        }
        else if(change === 'meal') {
            path = `addmeal`;
            navigate(path);
        }
    }
  
    const [change, setChange] = useState('all');

    const [value, setValue] = useState('');
    const [type, setType] = useState(0)

    function filterFoods(value) {
        return foods.filter(food => food.foodName.toLowerCase().includes(value.toLowerCase()));
        // alert("Young ._. Boy");
    }

    function handleEvent(e) {
        setChange(e.target.value);
    }
    
    return (
        <div className='searchContainer' style={{background : '#f9fdff', backgroundColor : '#f9fdff'}}>
        <div className='searchContainer__box1'>
             <Link
                to="/home"
             >
                <i className='iconF close'><FontAwesomeIcon icon={faClose} /></i>
             </Link>
             <div className='searchProduct'>
                <i className='iconF'><FontAwesomeIcon icon={faSearch} /></i>
                <input className='searchProduct__input'
                       placeholder='Tìm kiếm thực đơn'
                       value={value} 
                       onChange={e => setValue(e.target.value)} />
             </div>
             <ScanOutlined style={{fontSize: 20}}/>
        </div>
        <div className='searchContainer__box2'>
            {
                dataTypes.map((item, index) => (
                    <span className={type === index ? 'active' : ''} key={index}
                        onClick={() => {setType(index)}}
                    >
                        {item}
                    </span>
                ))
            }
        </div>
        <div className='searchContainer__box3'>
            {
                filterFoods(value).length > 0 ? (
                    <ul>
                        {
                            filterFoods(value).map((food) => (
                                <li key={food.foodId}><ButtonFood data={food} /></li>
                            ))
                        }
                    </ul>
                )
                : (
                    <div className='flex-col-center' style={{height: '100%'}}>
                        <Col>
                            <p style={{textAlign: 'center', color: 'grey', fontSize: '16px'}}>Không tìm thấy thực phẩm</p>
                            <p style={{color: '#1890ff', fontWeight: 'bold', textAlign: 'center', fontSize: '16px', marginTop: 15, cursor: 'pointer'}}>Thêm sản phẩm mới</p>
                        </Col>
                    </div>
                )
            }
        </div>
        {
            change === "all" ? (
                <div className='searchContainer__box3'>
                    <ul>
                        {
                            filterFoods(value).length > 0 ? filterFoods(value).map((food) => (
                                <li key={food.foodId}><ButtonFood data={food} /></li>
                            )) : 'Không tìm thấy món ăn phù hợp!'
                        }
                    </ul>
                </div>
            ) : ""
        }
        {
            change === "myfood" ? (
            <div className='searchContainer__box3'>
                <ul>
                    {
                        myfoods.length > 0 ? myfoods.map(myfood => (
                            <li key={myfood.foodId}><ButtonFood data={myfood} /></li>
                        )) : (
                            <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
                                <p style={{width: "300px", marginBottom: "12px"}}>Bạn có thể thêm món ăn ưa thích của bạn nếu như bạn không tìm thấy nó trong dữ liệu của chúng tôi.</p>
                                <button className='btnAddMyFood' onClick={routeChange}>Thêm ngay</button>
                            </div>
                        )
                    }
                </ul>
            </div>
        ) : ""
        }
        {
            change === "meal" ? (
                <div className='searchContainer__box3'>
                    <ul>
                        {
                            myfoods.length > 0 ? myfoods.map(myfood => (
                                <li key={myfood.foodId}><ButtonFood data={myfood} /></li>
                            )) : (
                                <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
                                    <p style={{width: "300px", marginBottom: "12px"}}>Bạn có thể thêm bữa ăn của bạn nếu như bạn không tìm thấy nó trong dữ liệu của chúng tôi.</p>
                                    <button className='btnAddMyFood' onClick={routeChange}>Thêm ngay</button>
                                </div>
                                )
                        }
                    </ul>
                </div>
            ) : ""
        }
     </div>
    )
}

export default SearchFoods;