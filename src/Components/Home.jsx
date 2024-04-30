import React from "react";
import Card from "./Card";
import Comment from "./Comment";

const Home = () => {
  return (
    <div>
      <div class="container-fluid">
        <div class="row">
          <div class="col-8">
            <h3 style={{ color: "white", fontFamily: "sans-serif" }}>
              Concept 1
            </h3>
            <Card />
            <h3 style={{ color: "white", fontFamily: "sans-serif" }}>
              Concept 2
            </h3>
            <Comment
              name="Abdul Qayyum"
              time=''
              comment="Hello World How are you i am the person who built this entire web"
            />
          </div>
          <div class="col-4">
            <h3 style={{ color: "white", fontFamily: "sans-serif" }}>
              Concept 3
            </h3>
            <Card>
              <Comment
                name="Abdul Qayyum Waseem Khan"
                time="Today at 5:42PM"
                comment="This is the prject text for testing purpose only"
              />
              
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
