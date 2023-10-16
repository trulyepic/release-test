import { RightOutlined, DownOutlined } from "@ant-design/icons";
import { useState } from "react";

const ProjectCard = ({ item, setViewMore, viewMore }) => {
  // show detailed view
  const [showDetailed, setShowDetailed] = useState(false);

  console.log();

  return (
    <>
      <div
        key={item?.id}
        className={`bg-white rounded-2 mb-3 ${
          showDetailed === true || viewMore === true ? "d-none" : "d-block"
        }`}
        style={{
          padding: "10px",
        }}
      >
        <div className="row g-0">
          <div className="col-lg-2 d-flex align-items-center gap-3">
            {/* day */}
            <div
              style={{ width: "40%" }}
              className="d-flex align-items-center justify-content-center"
            >
              <div
                style={{
                  background: `${item?.dayBG}`,
                  width: "max-content",
                  padding: "1px 10px",
                  borderRadius: "5px",
                }}
              >
                <p
                  className="m-0 p-0"
                  style={{
                    fontSize: "12px",
                    color: "#001d32",
                    fontWeight: "500",
                  }}
                >
                  {item?.day}
                </p>
              </div>
            </div>

            {/* release date */}
            <div style={{ width: "60%" }}>
              <p
                style={{
                  fontSize: "14px",
                  color: "#B9C0C9",
                }}
              >
                Release Date
              </p>

              <p
                style={{
                  color: "#001d32",
                  marginTop: "5px",
                  fontWeight: "500",
                }}
              >
                {item?.releaseDate}
              </p>
            </div>
          </div>

          <div className="col-lg-2">
            <div>
              <p
                style={{
                  fontSize: "14px",
                  color: "#B9C0C9",
                }}
              >
                Artist
              </p>

              <p
                style={{
                  color: "#001d32",
                  marginTop: "5px",
                  fontWeight: "500",
                }}
              >
                {item?.artist}
              </p>
            </div>
          </div>

          <div className="col-lg-2">
            <div>
              <p
                style={{
                  fontSize: "14px",
                  color: "#B9C0C9",
                }}
              >
                Title
              </p>

              <p
                style={{
                  color: "#001d32",
                  marginTop: "5px",
                  fontWeight: "500",
                }}
              >
                {item?.title}
              </p>
            </div>
          </div>

          <div className="col-lg-2">
            <div>
              <p
                style={{
                  fontSize: "14px",
                  color: "#B9C0C9",
                }}
              >
                Configuration
              </p>

              <p
                style={{
                  color: "#001d32",
                  marginTop: "5px",
                  fontWeight: "500",
                }}
              >
                {item?.config}
              </p>
            </div>
          </div>

          <div className="col-lg-2">
            <div>
              <p
                style={{
                  fontSize: "14px",
                  color: "#B9C0C9",
                }}
              >
                Format
              </p>

              <p
                style={{
                  color: "#001d32",
                  marginTop: "5px",
                  fontWeight: "500",
                }}
              >
                {item?.format}
              </p>
            </div>
          </div>

          <div className="col-lg-2 d-flex align-items-end justify-content-between">
            <div>
              <p
                style={{
                  fontSize: "14px",
                  color: "#B9C0C9",
                }}
              >
                UPC
              </p>

              <p
                style={{
                  color: "#001d32",
                  marginTop: "5px",
                  fontWeight: "500",
                }}
              >
                {item?.upc}
              </p>
            </div>

            {/* arrow */}
            <div>
              <RightOutlined
                style={{
                  color: "#9BA5B2",
                  fontSize: "13px",
                  paddingBottom: "4px",
                }}
                onClick={() => setShowDetailed(true)}
              />
            </div>
          </div>
        </div>
      </div>

      <div
        className={`bg-white rounded-2 mb-3 ${
          showDetailed === true || viewMore === true ? "d-block" : "d-none"
        }`}
        style={{
          padding: "10px 20px",
        }}
      >
        <div className="row g-5">
          {/* left side */}
          <div className="col-lg-5 col-xxl-6 d-flex align-items-start justify-content-between">
            {/* day and relaease date */}
            <div className="d-flex align-items-center justify-content-between gap-4">
              {/* day */}
              <div
                className="d-flex align-items-center justify-content-center"
                style={{ width: "100px" }}
              >
                <div
                  style={{
                    background: `${item?.dayBG}`,
                    width: "max-content",
                    padding: "1px 5px",
                    borderRadius: "5px",
                  }}
                >
                  <p
                    className="m-0 p-0"
                    style={{
                      fontSize: "12px",
                      color: "#001d32",
                      fontWeight: "500",
                    }}
                  >
                    {item?.day}
                  </p>
                </div>
              </div>

              {/* release date */}
              <div className="">
                <div>
                  <p
                    style={{
                      fontSize: "14px",
                      color: "#B9C0C9",
                    }}
                  >
                    Release Date
                  </p>

                  <p
                    style={{
                      color: "#001d32",
                      marginTop: "5px",
                      fontWeight: "500",
                    }}
                  >
                    {item?.releaseDate}
                  </p>
                </div>

                {item?.preReleasedDate ? (
                  <div className="mt-3">
                    <div>
                      <p
                        style={{
                          fontSize: "11px",
                          color: "#B9C0C9",
                        }}
                      >
                        Pre-Released Date
                      </p>

                      <p
                        style={{
                          color: "#001d32",
                          fontSize: "14px",
                        }}
                      >
                        04-Sept-2023
                      </p>
                    </div>
                  </div>
                ) : null}
              </div>
            </div>

            {/* artist, genre, PA */}
            <div className="">
              {/* top  */}
              <div>
                <p
                  style={{
                    fontSize: "14px",
                    color: "#B9C0C9",
                  }}
                >
                  Artist
                </p>

                <p
                  style={{
                    color: "#001d32",
                    marginTop: "5px",
                    fontWeight: "500",
                  }}
                >
                  {item?.artist}
                </p>
              </div>

              {/* bottom part */}
              <div className="d-flex align-items-start justify-content-between gap-4 mt-3">
                <div>
                  <p
                    style={{
                      fontSize: "12px",
                      color: "#B9C0C9",
                    }}
                  >
                    Genre
                  </p>

                  <p
                    style={{
                      color: "#001d32",
                      fontSize: "14px",
                    }}
                  >
                    {item?.genre}
                  </p>
                </div>

                <div>
                  <p
                    style={{
                      fontSize: "12px",
                      color: "#B9C0C9",
                    }}
                  >
                    PA
                  </p>

                  <p
                    style={{
                      color: "#001d32",
                      fontSize: "14px",
                      fontWeight: "500",
                    }}
                  >
                    {item?.pa}
                  </p>
                </div>
              </div>
            </div>

            {/* title, component count, track count */}
            <div className="">
              {/* top  */}
              <div>
                <p
                  style={{
                    fontSize: "14px",
                    color: "#B9C0C9",
                  }}
                >
                  Title
                </p>

                <p
                  style={{
                    color: "#001d32",
                    marginTop: "5px",
                    fontWeight: "500",
                  }}
                >
                  {item?.title}
                </p>
              </div>

              {/* bottom part */}
              <div className="d-flex align-items-start justify-content-between gap-4 mt-3">
                <div>
                  <p
                    style={{
                      fontSize: "12px",
                      color: "#B9C0C9",
                    }}
                  >
                    Component Count
                  </p>

                  <p
                    style={{
                      color: "#001d32",
                      fontSize: "14px",
                      fontWeight: "500",
                    }}
                  >
                    {item?.componentCount}
                  </p>
                </div>

                <div>
                  <p
                    style={{
                      fontSize: "12px",
                      color: "#B9C0C9",
                    }}
                  >
                    Track Count
                  </p>

                  <p
                    style={{
                      color: "#001d32",
                      fontSize: "14px",
                      fontWeight: "500",
                    }}
                  >
                    {item?.trackCount}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* right side */}
          <div className="col-lg-7 col-xxl-6 d-flex align-items-start justify-content-between gap-3">
            {/* Configuration, UPC */}
            <div className="col-lg-3">
              {/* top  */}
              <div>
                <p
                  style={{
                    fontSize: "14px",
                    color: "#B9C0C9",
                  }}
                >
                  Configuration
                </p>

                <p
                  style={{
                    color: "#001d32",
                    marginTop: "5px",
                    fontWeight: "500",
                  }}
                >
                  {item?.config}
                </p>
              </div>

              {/* bottom part */}
              <div className="mt-3">
                {/* upc */}
                <div>
                  <p
                    style={{
                      fontSize: "12px",
                      color: "#B9C0C9",
                    }}
                  >
                    UPC
                  </p>

                  <p
                    style={{
                      color: "#001d32",
                      fontSize: "14px",
                      fontWeight: "500",
                    }}
                  >
                    {item?.upc}
                  </p>
                </div>
              </div>
            </div>

            {/* Box items */}
            <div
              className="d-flex align-items-start justify-content-between gap-4 pe-2"
              style={{ width: "100%" }}
            >
              <div style={{ width: "100%" }}>
                {/* Top Boxes */}
                <div className="row gap-2">
                  {item?.recordChecks?.map((c, idx) => {
                    const { boxBg, status, title } = c;

                    return (
                      <div
                        key={idx}
                        className="col"
                        style={{
                          maxWidth: "100px",
                          background: `${boxBg}`,
                          padding: "4px",
                          textAlign: "center",
                          borderRadius: "4px",
                        }}
                      >
                        <p
                          style={{
                            fontSize: "12px",
                          }}
                        >
                          {title}
                        </p>

                        <p
                          style={{
                            color: "#001d32",
                            fontSize: "14px",
                            fontWeight: "500",
                          }}
                        >
                          {status}
                        </p>
                      </div>
                    );
                  })}
                </div>

                {/* bottom part */}
                <div
                  className="d-flex align-items-start justify-content-center mt-3"
                  style={{ gap: "120px" }}
                >
                  <div>
                    <p
                      style={{
                        fontSize: "12px",
                        color: "#B9C0C9",
                      }}
                    >
                      Format
                    </p>

                    <p
                      style={{
                        color: "#001d32",
                        fontSize: "14px",
                        fontWeight: "500",
                      }}
                    >
                      {item?.format}
                    </p>
                  </div>

                  <div>
                    <p
                      style={{
                        fontSize: "12px",
                        color: "#B9C0C9",
                      }}
                    >
                      Production Contact
                    </p>

                    <p
                      style={{
                        color: "#001d32",
                        fontSize: "14px",
                        fontWeight: "500",
                      }}
                    >
                      {item?.productionContact}
                    </p>
                  </div>
                </div>
              </div>

              <div className="d-xxl-block d-none">
                <DownOutlined
                  style={{ fontSize: "13px", cursor: "pointer" }}
                  onClick={() => setShowDetailed(false)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
