import CounterUp from "../elements/CounterUp";
import React from "react";
import { useState } from "react";

const CounterUpBakoor = ({data}) => {


  

  const year =new Date().getFullYear() -2003;
    return (
        <div  className="section-box mt-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-1" />
            <div className="col-lg-10">
              <div className="bd-bottom pb-20 mb-40 text-mb-center">
                <div className="row text-center">
                  <div className="col-lg-4 col-md-3 col-sm-6 col-6 mb-30">
                    <span className="text-display-3 color-green-900">
                      +<CounterUp count={year} time={2} />
                    </span>
                    <p className="text-body-text color-gray-500 pl-40t">
                      Years in Business
                    </p>
                  </div>
                  <div className="col-lg-4 col-md-3 col-sm-6 col-6 mb-30">
                    <span className="text-display-3 color-green-900">
                      +<CounterUp count={data.data[0]?.value} time={2} />
                    </span>
                    <p className="text-body-text color-gray-500 pl-40">
                      Projects Done
                    </p>
                  </div>

                  <div className="col-lg-4 col-md-3 col-sm-6 col-6 mb-30">
                    <span className="text-display-3 color-green-900">
                      +<CounterUp count={data.data[1].value} time={1} />
                    </span>
                    <p className="text-body-text color-gray-500 pl-40">
                      Constant Clients
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-1" />
          </div>
        </div>
      </div>

    );
}

export default React.memo(CounterUpBakoor);



