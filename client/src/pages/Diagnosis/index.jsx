import React from 'react';
import { Input, Cascader, Button } from 'antd';
import './style.css'

export default function Diagnosis () {
    const genderOptions = [
        {
          value: 'male',
          label: 'Nam',
        },
        {
          value: 'female',
          label: 'Nữ',
        },
      ];

      const dietOptions1 = [
        {
          value: 'small',
          label: '1 hoặc 2 bữa',
        },
        {
          value: 'medium',
          label: '3 bữa',
        },
        {
            value: 'big',
            label: '5 hoặc 6 bữa ăn nhỏ',
        }
      ];

      const dietOptions2 = [
        {
            value: 'small',
            label: 'Rất ít hoặc không ăn',
        },
        {
            value: 'medium',
            label: '100-300 gram',
        },
        {
            value: 'big',
            label: 'Từ 300 gram(khoảng 2 chén)',
        }
      ];

      const dietOptions3 = [
        {
            value: 'small',
            label: 'Rất ít hoặc không',
        },
        {
            value: 'medium',
            label: 'Dưới 100 gram',
        },
        {
            value: 'big',
            label: 'Từ 100-200 gram',
        }
      ];

      const dietOptions4 = [
        {
            value: 'small',
            label: 'Rất ít',
        },
        {
            value: 'medium',
            label: 'Trung bình',
        },
        {
            value: 'big',
            label: 'Rất nhiều',
        }
      ];
      const onChange = (value) => {
        console.log(value);
      };
    
    return (
        <div className='diagnosisContainer'>
            <div className='basicInfo'>
                <span>Giới tính</span>
                <br/>
                    <Cascader options={genderOptions} onChange={onChange} placeholder='Chọn giới tính'/>
                <br/>
                <span>Độ tuổi</span>
                <br/>
                    <Input placeholder='Nhập độ tuổi' />
                    <br/>
                <span>Cân nặng(kg)</span>
                <br/>
                    <Input placeholder='Nhập cân nặng' />
                    <br/>
                <span>Chiều cao(cm)</span>
                <br/>
                    <Input placeholder='Nhập chiều cao' />
                    <br/>
            </div>
            <div className='diet'>
                <span>Mỗi ngày bạn ăn bao nhiêu bữa?</span>
                <br/>
                    <Cascader options={dietOptions1} onChange={onChange} />
                    <br/>
                <span>Mỗi ngày bạn ăn bao nhiêu lượng rau củ?</span>
                <br/>
                    <Cascader options={dietOptions2} onChange={onChange} />
                    <br/>
                <span>Mỗi ngày bạn ăn bao nhiêu lượng hoa quả?</span>
                <br/>
                    <Cascader options={dietOptions3} onChange={onChange} />
                    <br/>
                <span>Bạn ăn những thức ăn có chất béo với số lượng như thế nào?( bình thường 50-83g chất béo / ngày )</span>
                <br/>
                    <Cascader options={dietOptions4} onChange={onChange} />
                    <br/>
            </div>
            <div className='diagnosisResult'>
                <span style={{fontSize: 24}}>Kết quả kiểm tra</span>
                <br></br>
                <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</span>
            </div>
            <div className='submit'>
                <Button>Kiểm tra</Button>
            </div>
            <div className='exit'>
                <Button>Thoát</Button>
            </div>
        </div>
    )
}