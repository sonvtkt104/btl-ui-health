import { faChevronCircleLeft, faChevronLeft, faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Select } from "antd";
import { Fragment, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./style.css";

function AddMyFood() {
  const [state, setState] = useState(0);

  return (
    <div className="addMyFood">
      {state === 0 ? (
        <Fragment>
          <div className="addMyFood_container">
            <div className="addMyFood_iconClose">
              <Link to={"/tim-kiem-mon-an"}>
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
              onClick={e => setState(1)}
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
                    <i><FontAwesomeIcon icon={faChevronLeft} onClick={e => setState(0)} value={state} /></i>
                </div>
                <h1 style={{ textAlign: "center", marginBottom: "24px" }}>
                    Chọn ảnh món ăn
                </h1>
                <p style={{width: '100%', textAlign: "center"}}>Chọn ảnh từ thư viện của bạn!</p>
                <button className="addMyFood_btnSave">
                    Lưu
                </button>
            </div>
        </Fragment>
      )}
    </div>
  );
}

export default AddMyFood;
