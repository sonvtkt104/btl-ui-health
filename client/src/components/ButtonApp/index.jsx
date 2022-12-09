import {Button} from 'antd'

export default function ButtonApp ({style, onClick, color, title}) {
    return (
        <Button 
            type='primary'
            style={{
                border: 'none',
                borderRadius: '10px',
                height: 40, 
                padding: '0 15px',
                color: '#fff', 
                fontWeight: 'bold', 
                fontSize: 16, 
                width: '100%', 
                ...style
            }}
            onClick={() => { 
                onClick()
            }}
        >
            <span style={{color: color}}>{title}</span>
        </Button>
    )
}