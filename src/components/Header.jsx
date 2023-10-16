import {
  SettingFilled,
  AlignCenterOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { useState } from "react";

const Header = () => {
  // header btns
  const hBtns = [
    {
      id: 1,
      title: "Weekly View",
    },
    {
      id: 2,
      title: "Project View",
    },
  ];

  // state for handle active btn
  const [activeBtn, setActiveBtn] = useState(2);

  return (
    <div className="container-fluid px-xxl-5 px-4">
      {/* Header wrapper start */}
      <div className="px-xxl-5">
        {/* Icon Box */}
        <div className="pt-4 d-flex align-items-center justify-content-end gap-3">
          <div>
            <SettingFilled
              style={{ fontSize: "26px", cursor: "pointer", color: "#001d32" }}
            />
          </div>

          <div style={{ cursor: "pointer" }}>
            <img src="./avatar.svg" alt="profile-svg" />
          </div>
        </div>

        {/*  Title */}
        <div>
          <p className="header-title pb-1">
            Release Schedule: Def Jam, Island, Republic & Verve
          </p>
        </div>

        {/* Filter and view change button */}
        <div className="d-flex align-items-center justify-content-between mt-3">
          {/* left side */}
          <div className="d-flex align-items-center gap-2">
            {/* Filter icon */}
            <div className="filter-icon d-flex align-items-center justify-content-center">
              <AlignCenterOutlined style={{ color: "#001d32" }} />
            </div>

            {/* Search */}
            <div className="search-box d-flex align-items-center justify-content-between gap-2">
              <SearchOutlined style={{ color: "#001d32" }} />
              <input type="text" placeholder="Search Artist/Title" />
            </div>
          </div>

          {/* Right Side */}
          <div>
            <div className="header-btns d-flex align-items-center justify-content-between gap-1">
              {hBtns?.map((item) => {
                const { id, title } = item;

                return (
                  <button
                    className={`h-btn ${activeBtn === id ? "active" : ""}`}
                    key={id}
                    onClick={() => setActiveBtn(id)}
                  >
                    {title}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      {/* Header wrapper end */}
    </div>
  );
};

export default Header;
