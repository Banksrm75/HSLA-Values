import React from "react";
import "../../styles/AlphaOpacity.css";

function AlphaOpacity() {

    return(
        <>
            <h1>ALPHA (OPACITY)</h1>
            <div className="AlphaOpacity-High">Alpha (99% Opacity) - HIGH: 0, 50%, 50%, 0.99999</div>
            <div className="AlphaOpacity-9"><strong>0.9 Alpha (90% Opacity): 0, 50%, 50%, 0.9</strong></div>
            <div className="AlphaOpacity-8">0.8 Alpha (80% Opacity): 0, 50%, 50%, 0.8</div>
            <div className="AlphaOpacity-7">0.7 Alpha (70% Opacity): 0, 50%, 50%, 0.7</div>
            <div className="AlphaOpacity-6">0.6 Alpha (60% Opacity): 0, 50%, 50%, 0.6</div>
            <div className="AlphaOpacity-5">0.5 Alpha (50% Opacity): 0, 50%, 50%, 0.5</div>
            <div className="AlphaOpacity-4">0.4 Alpha (40% Opacity): 0, 50%, 50%, 0.4</div>
            <div className="AlphaOpacity-3">0.3 Alpha (30% Opacity): 0, 50%, 50%, 0.3</div>
            <div className="AlphaOpacity-2">0.2 Alpha (20% Opacity): 0, 50%, 50%, 0.2</div>
            <div className="AlphaOpacity-1">0.1 Alpha (10% Opacity): 0, 50%, 50%, 0.1</div>
            <div className="AlphaOpacity-Low">0 Alpha (0% Opacity) -  LOW: 0, 50%, 50%, 0</div>
        </>
    );
}

export default AlphaOpacity;