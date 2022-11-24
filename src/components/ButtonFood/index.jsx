import { Link } from 'react-router-dom'
import './style.css'

export default function ButtonFood ({data}) {
    return (
        <Link className='buttonFood' to={'/chi-tiet-mon-an/' + data.foodId}>
            <div className='containerImg'>
                <img className='foodImg' src={data.foodImg} alt='Hình ảnh'></img>
            </div>
            <div className='containerInfo'>
                <div className='foodName'>{data.foodName}</div>
                <div className='inner-box'>
                    <div className='kcal'>{data.foodKcal}</div>
                    <div className='circlePoint'></div>
                    <div className='type'>{data.foodType}</div>
                </div>
            </div>
        </Link>
    )
}