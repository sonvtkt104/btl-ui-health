import { useState } from 'react'
import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose, faQrcode, faSearch } from '@fortawesome/free-solid-svg-icons'
import { ButtonFood } from '../../components'
import foods from '../../assets/data'

function SearchFoods() {
    
    const [value, setValue] = useState('');

    function filterFoods(value) {
        return foods.filter(food => food.foodName.toLowerCase().includes(value));
        // alert("Young ._. Boy");
    }
    
    return (
        <div className='searchContainer' style={{background : '#f9fdff', backgroundColor : '#f9fdff'}}>
        <div className='searchContainer__box1'>
             <i className='iconF close'><FontAwesomeIcon icon={faClose} /></i>
             <div className='searchProduct'>
                <i className='iconF'><FontAwesomeIcon icon={faSearch} /></i>
                <input className='searchProduct__input'
                       placeholder='Tìm kiếm thực đơn'
                       value={value} 
                       onChange={e => setValue(e.target.value)} />
             </div>
             <i className='iconF'><FontAwesomeIcon icon={faQrcode} /></i>
        </div>
        <div className='searchContainer__box2'>
            <button className='searchContainer__box2__button active'>Tất cả</button>
            <div className='borderLeft'></div>
            <button className='searchContainer__box2__button'>Món ăn của tôi</button>
            <div className='borderLeft'></div>
            <button className='searchContainer__box2__button'>Bữa ăn</button>
        </div>
        <div className='searchContainer__box3'>
            <ul>
                {
                    filterFoods(value).length > 0 ? filterFoods(value).map((food) => (
                        <li key={food.foodId}><ButtonFood data={food} /></li>
                    )) : 'Không tìm thấy món ăn phù hợp!'
                }
            </ul>
            
        </div>
     </div>
    )
}

export default SearchFoods;