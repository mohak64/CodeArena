import React from "react";

const Ques = (props) => {
    let {
        contestId,
        ques1d,
        ques1i,
        ques1o,
        ques2d,
        ques2i,
        ques2o,
        ques3d,
        ques3i,
        ques3o,
        start,
        end,
    } = props;
    return(
    <div>
        <div style={{ backgroundColor: "#f8ddfc" }}>
        <div className="container mx-auto">
        <h2>Contest No. - {contestId}</h2>
        <div className="card my-3">
          <h5 className="card-header">Q1</h5>
          <div className="card-body">
            <h5 className="card-title">Q-{ques1d}</h5>
            <p className="card-text">
              Input - {ques1i}
            </p>
            <p className="card-text">
            Output - {ques1o}
            </p>
            
          </div>
        </div>
        <div className="card my-3">
          <h5 className="card-header">Q2</h5>
          <div className="card-body">
            <h5 className="card-title">Q-{ques2d}</h5>
            <p className="card-text">
            Input - {ques2i}
            </p>
            <p className="card-text">
            Output - {ques2o}
            </p>
            
          </div>
        </div>
        <div className="card my-3">
          <h5 className="card-header">Q3</h5>
          <div className="card-body">
            <h5 className="card-title">Q-{ques3d}</h5>
            <p className="card-text">
            Input - {ques3i}
            </p>
            <p className="card-text">
            Output - {ques3o}
            </p>
            
          </div>
        </div>
      </div>

    </div>
    </div>
    );
};

export default Ques;
