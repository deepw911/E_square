import "./Services.css";
import React from "react";

export default function Services() {
  return (
    <div id="#services" className="Container">
      {/* <div>ameya</div> */}
      
      <div className="row">
        <div className="card">
          <div className="card-header">
            <h1>Financial</h1>
          </div>
          <div className="card-body">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
              minus nam iure harum ipsum dolor a culpa rerum officiis, autem
              voluptatem nemo porro accusamus omnis laudantium? Est aliquam
              blanditiis magni!
            </p>
            <a href="#" className="btn">
              Read More
            </a>
          </div>
        </div>
        <div className="card">
          <div className="card-header">
            <h1>Medical</h1>
          </div>
          <div className="card-body">
            <p>
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              accusamus, tenetur eos perspiciatis repellat velit, quod
              distinctio nam at officia facere, sit recusandae ex sint nemo
              impedit unde earum? Assumenda.
            </p>
            <a href="#" className="btn">
              Read More
            </a>
          </div>
        </div>
        <div className="card">
          <div className="card-header">
            <h1>PG</h1>
          </div>
          <div className="card-body">
            <p>
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              accusamus, tenetur eos perspiciatis repellat velit, quod
              distinctio nam at officia facere, sit recusandae ex sint nemo
              impedit unde earum? Assumenda.
            </p>
            <a href="#" className="btn">
              Read More
            </a>
          </div>
        </div>
        <div className="card">
          <div className="card-header">
            <h1>Mess</h1>
          </div>
          <div className="card-body">
            <p>
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              accusamus, tenetur eos perspiciatis repellat velit, quod
              distinctio nam at officia facere, sit recusandae ex sint nemo
              impedit unde earum? Assumenda.
            </p>
            <a href="#" className="btn">
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
