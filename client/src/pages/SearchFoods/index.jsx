import { useState } from 'react'
import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose, faQrcode, faSearch } from '@fortawesome/free-solid-svg-icons'
import { ButtonFood } from '../../components'
import foods from '../../assets/data'
import { ScanOutlined} from '@ant-design/icons'
import {Link} from 'react-router-dom'
import {Row, Col} from 'antd'

const dataTypes = ['Tất cả', 'Món ăn của tôi', 'Bữa ăn'];

function SearchFoods() {
    
    const [value, setValue] = useState('');
    const [type, setType] = useState(0)

    function filterFoods(value) {
        return foods.filter(food => food.foodName.toLowerCase().includes(value.toLowerCase()));
        // alert("Young ._. Boy");
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
                    <span className={type == index ? 'active' : ''} key={index}
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
     </div>
    )
}

export default SearchFoods;