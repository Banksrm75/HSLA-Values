import React from "react";
import "../../styles/Lightness.css";

function Lightness() {

    return(
        <>
            <h1>Lightness</h1>
            <div className="Lightness-High">100% Lightness-High: 0, 50%, 100%, 0.9</div>
            <div className="Lightness-90">90% Lightness: 0, 50%, 90%, 0.9</div>
            <div className="Lightness-80">80% Lightness: 0, 50%, 80%, 0.9</div>
            <div className="Lightness-70">70% Lightness: 0, 50%, 70%, 0.9</div>
            <div className="Lightness-60">60% Lightness: 0, 50%, 60%, 0.9</div>
            <div className="Lightness-50"><strong>50% Lightness: 0, 50%, 50%, 0.9</strong></div>
            <div className="Lightness-40">40% Lightness: 0, 50%, 40%, 0.9</div>
            <div className="Lightness-30">30% Lightness: 0, 50%, 30%, 0.9</div>
            <div className="Lightness-20">20% Lightness: 0, 50%, 20%, 0.9</div>
            <div className="Lightness-10">10% Lightness: 0, 50%, 10%, 0.9</div>
            <div className="Lightness-Low">0% Lightness - Low: 0, 50%, 0%, 0.9</div>
        </>
    );
}

export default Lightness;