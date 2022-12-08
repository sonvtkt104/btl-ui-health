import { useState } from 'react'
import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose, faPlus, faQrcode, faSearch } from '@fortawesome/free-solid-svg-icons'
import { ButtonFood } from '../../components'
import foods from '../../assets/data'

import img_foods from '../../assets/image'
import { useNavigate } from 'react-router-dom'

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
    let path = `addmyfood`; 
    navigate(path);
  }
    
    const [change, setChange] = useState('all');

    const [value, setValue] = useState('');

    function filterFoods(value) {
        return foods.filter(food => food.foodName.toLowerCase().includes(value));
        // alert("Young ._. Boy");
    }

    function handleEvent(e) {
        setChange(e.target.value);
    }
    
    return (
        <div className='searchContainer'>
        <div className='searchContainer__box1'>
             <i className='iconF close'><FontAwesomeIcon icon={faClose} /></i>
             <div className='searchProduct'>
                <i className='iconF'><FontAwesomeIcon icon={faSearch} /></i>
                <input className='searchProduct__input'
                       placeholder='Tìm kiếm thực đơn'
                       value={value} 
                       onChange={e => setValue(e.target.value)} />
             </div>
             {
                change == "all" ? <i className='iconF'><FontAwesomeIcon icon={faQrcode} /></i> : <i className='iconF' onClick={routeChange}><FontAwesomeIcon icon={faPlus} /></i>
             }
        </div>
        <div className='searchContainer__box2'>
            <button className={change == "all" ? "searchContainer__box2__button active" : "searchContainer__box2__button"} onClick={handleEvent} value={"all"}>Tất cả</button>
            <div className='borderLeft'></div>
            <button className={change == "myfood" ? "searchContainer__box2__button active" : "searchContainer__box2__button"} onClick={handleEvent} value={"myfood"}>Món ăn của tôi</button>
            <div className='borderLeft'></div>
            <button className={change == "meal" ? "searchContainer__box2__button active" : "searchContainer__box2__button"} onClick={handleEvent} value={"meal"}>Bữa ăn</button>
        </div>
        {
            change == "all" ? (
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
            change == "myfood" ? (
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
            change == "meal" ? (
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