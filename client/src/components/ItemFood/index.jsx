import { Link} from 'react-router-dom'
import './index.css'
import {MinusOutlined, CloseOutlined} from '@ant-design/icons'
import {useDispatch} from 'react-redux'
import {removeFoodBreakFirst, removeFoodLunch, removeFoodDinner, removeFoodSnack} from '../../redux/appSlice'

export default function ItemFood({data, type}) {
    const dispatch = useDispatch()

    return (
        <div style={{position: 'relative', zIndex: 1}}>
            <Link className='buttonFood' 
                style={{position: 'relative', zIndex:1}}
                to={'/food-detail/' + data.foodId}
            >
                <div className='containerImg'>
                    <img className='foodImg' src={data.foodImg} alt='Hình ảnh'></img>
                </div>
                <div className='containerInfo'>
                    <div className='foodName'>{data.foodName}</div>
                    <div className='inner-box'>
                        <div className='kcal'>{data.foodCalories} kcal</div>
                        <div className='circlePoint'></div>
                        <div className='type'>{data.foodType}</div>
                    </div>
                </div>
            </Link>
            <span style={{position: 'absolute', right: 5, zIndex: 2, top: 5}}>
                <CloseOutlined 
                    onClick={() => {
                        switch (type) {
                            case 'sang':
                                dispatch(removeFoodBreakFirst({id: data.foodId}))
                                break;
                            case 'trua':
                                dispatch(removeFoodLunch({id: data.foodId}))
                                break;
                            case 'toi':
                                dispatch(removeFoodDinner({id: data.foodId}))
                                break;
                            case 'phu':
                                dispatch(removeFoodSnack({id: data.foodId}))
                                break;
                        
                            default:
                                break;
                        }
                    }}
                />
            </span>
        </div>
    )
}