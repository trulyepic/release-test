import { useState } from "react";
import { DownOutlined, RightOutlined, UpOutlined } from "@ant-design/icons";

import ProjectCard from "./ProjectCard";

const SingleProject = ({ item }) => {
  // collapse all content
  const [collapseContents, setCollapseContents] = useState(false);

  //   handle single content
  const [viewMore, setViewMore] = useState(false);

  console.log(item);

  return (
    <div className="px-xxl-5 mt-5">
      {/* header */}
      <div className="d-flex align-items-center justify-content-between">
        {/* left side */}
        <div className="d-flex align-items-center" style={{ gap: "32px" }}>
          {collapseContents === true ? (
            <UpOutlined
              style={{ fontWeight: 900, color: "#001d32" }}
              onClick={() => setCollapseContents(false)}
            />
          ) : (
            <DownOutlined
              style={{ fontWeight: 900, color: "#001d32" }}
              onClick={() => setCollapseContents(true)}
            />
          )}

          <p className="fw-medium mb-0" style={{ fontSize: "18px" }}>
            Project ID: {item?.ProjectId}
          </p>

          {viewMore === true ? (
            <p className="fw-medium mb-0" style={{ fontSize: "18px" }}>
              {item?.detailedViewName}
            </p>
          ) : null}

          {viewMore === true ? (
            <p
              className="fw-medium mb-0 fst-italic"
              style={{ fontSize: "18px" }}
            >
              {item?.detailedViewStatus}
            </p>
          ) : null}

          {viewMore === true ? (
            <p className="fw-medium mb-0" style={{ fontSize: "18px" }}>
              {item?.detailedViewSecondaryName}
            </p>
          ) : null}
        </div>

        {/* right side */}
        <div>
          {collapseContents === true ? null : (
            <button
              onClick={() => setViewMore(!viewMore)}
              className="btn d-flex align-items-center justify-content-center gap-1 text-white fw-medium me-5"
              style={{
                background: "#6A7989",
                fontSize: "12px",
                padding: "1px 8px",
              }}
            >
              {viewMore === true ? "View Less" : "View More"}

              {viewMore === true ? <DownOutlined /> : <RightOutlined />}
            </button>
          )}
        </div>
      </div>

      {/* Card Container */}
      <div
        className={`px-xxl-5 mt-2 ${
          collapseContents === true ? "d-none" : "d-block"
        }`}
      >
        {console.log(item.initialViewData)}

        {item?.projectData.map((data, idx) => {
          return <ProjectCard item={data} key={idx} viewMore={viewMore} />;
        })}
      </div>
    </div>
  );
};

export default SingleProject;
