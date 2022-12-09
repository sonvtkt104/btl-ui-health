import {
  faChevronLeft,
  faClose,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Modal, Select, Upload } from "antd";
import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";

import { PlusOutlined } from '@ant-design/icons';

const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

function AddMyFood() {

  const [state, setState] = useState(0);

  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [previewTitle, setPreviewTitle] = useState('');


  const [fileList, setFileList] = useState([]);

  const handleCancel = () => setPreviewOpen(false);
  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
    setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1));
  };
  const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);
  const uploadButton = (
    <div>
      <PlusOutlined />
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </div>
  );

  return (
    <div className="addMyFood">
      {state === 0 ? (
        <Fragment>
          <div className="addMyFood_container">
            <div className="addMyFood_iconClose">
              <Link to={"/search"}>
                <i>
                  <FontAwesomeIcon icon={faClose} />
                </i>
              </Link>
            </div>
            <h1 style={{ textAlign: "center", marginBottom: "24px" }}>
              Điền thông tin món ăn
            </h1>
            <input className="nameFood" placeholder="Tên món ăn" />
            <input className="nameFood" placeholder="Thương hiệu" />

            <div className="addMyFood_container_infomation">
              <div className="infomation_detail">
                <span style={{ fontWeight: 600 }}>
                  Thông tin dinh dưỡng mỗi
                </span>
                <Select
                  defaultValue="100 gram"
                  style={{
                    width: "40%",
                    borderRadius: "16px",
                  }}
                  options={[
                    {
                      value: 100,
                      label: "100 gram",
                    },
                    {
                      value: 200,
                      label: "200 gram",
                    },
                    {
                      value: 300,
                      label: "300 gram",
                    },
                    {
                      value: 400,
                      label: "400 gram",
                    },
                    {
                      value: 500,
                      label: "500 gram",
                    },
                  ]}
                />
              </div>
              <div className="infomation_detail">
                <span style={{ fontWeight: 600 }}>Calories</span>
                <input
                  style={{ padding: "0px 28px", width: "25%" }}
                  placeholder="kcal"
                />
              </div>
              <div className="infomation_detail">
                <span style={{ fontWeight: 600 }}>Chất béo</span>
                <input
                  style={{ padding: "0px 28px", width: "25%" }}
                  placeholder="gram"
                />
              </div>
              <div className="infomation_detail">
                <span style={{ fontWeight: 600 }}>Carbonhydrates</span>
                <input
                  style={{ padding: "0px 28px", width: "25%" }}
                  placeholder="gram"
                />
              </div>
              <div className="infomation_detail">
                <span style={{ fontWeight: 600 }}>Protein</span>
                <input
                  style={{ padding: "0px 28px", width: "25%" }}
                  placeholder="gram"
                />
              </div>
              <div className="infomation_detail">
                <span
                  style={{
                    color: "green",
                    fontWeight: 600,
                    fontSize: 16,
                    cursor: "pointer",
                  }}
                >
                  Xem thêm
                </span>
              </div>
            </div>
            <button
              className="addMyFood_btnNext"
              onClick={(e) => setState(1)}
              value={state}
            >
              Tiếp theo
            </button>
          </div>
        </Fragment>
      ) : (
        <Fragment>
          <div className="addMyFood_container">
            <div className="addMyFood_iconBack">
              <i>
                <FontAwesomeIcon
                  icon={faChevronLeft}
                  onClick={(e) => setState(0)}
                  value={state}
                />
              </i>
            </div>
            <h1 style={{ textAlign: "center", marginBottom: "24px" }}>
              Chọn ảnh món ăn
            </h1>
            <p style={{ width: "100%", textAlign: "center" }}>
              Chọn ảnh từ thư viện của bạn!
            </p>
            <div className="img_appleGreen">
              {/* <img style={{width: '100%', }} src={img_foods.apple_green} alt="img_apple_green"></img> */}
            </div>
            <div style={{marginTop: '48px'}}>
              <Upload
                  action="/upload"
                  listType="picture-card"
                  fileList={fileList}
                  onPreview={handlePreview}
                  onChange={handleChange}
                  maxCount={1}
                  >
                    {fileList.length >= 2 ? null : uploadButton}
              </Upload>
              <Modal open={previewOpen} title={previewTitle} footer={null} onCancel={handleCancel}>
                    <img
                      alt="example"
                      style={{
                        width: '100%',
                      }}
                      src={previewImage}
                    />
              </Modal>
            </div>
            <button className="addMyFood_btnSave">Lưu</button>
          </div>
        </Fragment>
      )
    }
    </div>
  );
}

export default AddMyFood;
