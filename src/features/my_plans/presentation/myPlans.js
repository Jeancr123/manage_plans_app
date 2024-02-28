import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../../styles/index.css";
import "./myPlans.css";
import AppBar from "../../app_bar/presentation/appBar";
import getMyPlans from "../data/getMyPlans";

function PlanCard({ plan }) {
  return (
    <div className="plan-card">
      <div className="plan-header">
        <h3>{plan.name}</h3>
      </div>
      <div className="plan-steps">
        {plan.steps.map((step, index) => (
          <div key={index} className="plan-step">
            <input type="checkbox" id={`step-${index + 1}`} />
            <label htmlFor={`step-${index + 1}`}>{step.name}</label>
          </div>
        ))}
      </div>
    </div>
  );
}

function MyPlans() {
  const [plansData, setPlansData] = useState([]);

  const navigate = useNavigate();

  const handleContinue = () => {
    // Add logic for any actions before navigating
    navigate("/plans_available");
  };

  useEffect(() => {
    getMyPlans(setPlansData)
  }, []);

  return (
    <div>
      <AppBar />
      <div className="my-plans-container">
        <h1>My Plans</h1>
        <div className="plans-list">
          {plansData && plansData.length > 0 ? plansData.map((plan) => (
            <PlanCard key={plan.id} plan={plan} />
          )) :
          <div>
           <p>No plans purchased yet</p>
           <br></br>
           <button className="continue-button" onClick={handleContinue}>
              Back to Plan Optios
          </button>
           </div>
        }
        </div>
      </div>
    </div>
  );
}

export default MyPlans;
