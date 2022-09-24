import React from "react";
import { Link } from "react-router-dom";
import basica from "../../Image/basica.png";
import familiar from "../../Image/familiar.png";
import premium from "../../Image/premium.png";
import logoGreen from "../../Image/LogoGreen.svg";
import { connect, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { SET_SUBSCRIPTION_PLAN } from "Utilities/Actions/types";

import { getSubscriptionPlans } from "Utilities/Actions/Subscription";
import { useEffect } from "react";

const Subscription = ({
  subscription: { data, sub_loading, plan_id },
  getSubscriptionPlans,
}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    getSubscriptionPlans();
  }, []);

  // Set subscription plan.
  const clickSubsctiptionPlan = id => {
    dispatch({ type: SET_SUBSCRIPTION_PLAN, payload: id });
  };

  return (
    <>
      {!sub_loading && data != null && (
        <section className="browse subscription">
          <div className="wrapper browse__contents">
            <img
              src={logoGreen}
              className="logo"
              alt="SiteLogo"
              width="216"
              height="71"
            />
            <h2>Selecciona tu tipo deseado de membresía</h2>
            <p>
              Disfruta de los beneficios de nuestro contenido sin comerciales y
              estrenos todos los días
            </p>
            <ul>
              <li
                onClick={() =>
                  clickSubsctiptionPlan(data.data[0].subscription_id)
                }
              >
                <Link to="">
                  <h4>
                    {data.data[0].title} <br />${data.data[0].amount}.00/mes
                  </h4>
                  <img
                    className="screen"
                    src={basica}
                    alt="basica"
                    width="344"
                    height="344"
                  />
                  <div className="package">
                    {data.data[0].description.split("\r\n").map((i, index) => (
                      <p key={index}>{i} </p>
                    ))}
                  </div>
                </Link>
              </li>
              <li>
                <Link
                  to=""
                  onClick={() =>
                    clickSubsctiptionPlan(data.data[1].subscription_id)
                  }
                >
                  <h4>
                    {data.data[1].title} <br />${data.data[1].amount}.00/mes
                  </h4>
                  <img
                    className="screen"
                    src={familiar}
                    alt="familiar"
                    width="344"
                    height="344"
                  />
                  <div className="package">
                    {data.data[1].description.split("\r\n").map((i, index) => (
                      <p key={index}>{i} </p>
                    ))}
                  </div>
                </Link>
              </li>
              <li>
                <Link
                  to=""
                  onClick={() =>
                    clickSubsctiptionPlan(data.data[2].subscription_id)
                  }
                >
                  <h4>
                    {data.data[2].title} <br />${data.data[2].amount}.00/mes
                  </h4>
                  <img
                    className="screen"
                    src={premium}
                    alt="premium"
                    width="344"
                    height="344"
                  />
                  <div className="package">
                    {data.data[2].description.split("\r\n").map((i, index) => (
                      <p key={index}>{i} </p>
                    ))}
                  </div>
                </Link>
              </li>
            </ul>
            <Link to="/registration">
              {plan_id != null && (
                <button type="submit" className="main-btn secondary">
                  Elegir
                </button>
              )}
            </Link>
            <h6 className="adfree">
              Si deseas continuar con la versión con anuncios{" "}
              <span>totalmente gratis,</span>{" "}
              <Link to="/ad-free">da click aquí</Link>
            </h6>
          </div>
        </section>
      )}
    </>
  );
};

Subscription.propTypes = {
  getSubscriptionPlans: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  subscription: state.subscription,
});

export default connect(mapStateToProps, { getSubscriptionPlans })(Subscription);
