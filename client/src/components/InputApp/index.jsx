import {Input} from 'antd'

export default function InputApp ({style, value, onChange, placeholder, type, note}) {
    return (
        <span
            style={{position:"relative"}}
        >
            <Input 
                placeholder={placeholder}
                style={{
                    border: 'none',
                    borderBottom: '1px solid #ccc',
                    textAlign: 'center',
                    padding: '10px',
                    position: 'relative',
                    ...style
                }}
                value={value}
                onClick={() => {onChange()}}
                type={type}
            />
            <span
                style={{
                    position: 'absolute',
                    right: 0, 
                    top: 14,
                    color: 'grey'
                }}
            >
                {note}
            </span>
        </span>
    )
}