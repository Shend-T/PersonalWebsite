import { useNavigate } from "react-router-dom";
import { useLang } from "../hooks/useLang";

import image1 from "../assets/notfound.png";

function NotFound() {
  const { t } = useLang();

  const navigate = useNavigate();

  return (
    <div
      className="container-main py-5"
      style={{ height: "90vh", alignContent: "center" }}
    >
      <div className="container-sm px-4 pt-4 mt-5 text-center rounded">
        <div
          className="overflow-hidden"
          style={{ maxWidth: "30vh", margin: "auto" }}
        >
          <div className="container px-5">
            <img
              className="img-fluid mb-4"
              src={image1}
              alt=""
              loading="lazy"
            />
          </div>
        </div>
        <h1 className="display-4 fw-bold">
          <span className="primary-text">404</span>,{" "}
          <span className="secondary-text">{t("notFound").title}</span>
        </h1>
        <div className="col-lg-6 mx-auto">
          <div className="d-flex justify-content-center gap-3 mb-4">
            <button
              className="btn-primary btn-border"
              onClick={() => navigate("/")}
            >
              {t("notFound").button}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
