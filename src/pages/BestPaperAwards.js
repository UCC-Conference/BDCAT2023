import React from "react";
import Content from "../components/elements/Content";
import PageWrapper from "../components/elements/PageWrapper";

const BestPaperAwards = () => {
  return (
    <PageWrapper>
      <Content>
        <h1>Best Paper Awards</h1>
        <hr />
        <div className="award" id="firstPlace">
          <h2>1st Place</h2>
          <p>
            <b>Workload-Aware Cache Management of Bitmap Indices </b>
            <br />
            Julia Kaeppel, Jason Sawin, David Chiu{" "}
          </p>
        </div>

        <div className="award" id="secondPlace">
          <h2>2nd Place</h2>
          <p>
            <b>
              Rubiks: Rapid Explorations and Summarization over High Dimensional
              Spatiotemporal Datasets
            </b>
            <br />
            Saptashwa Mitra, Matt Young, Jay Breidt, Sangmi Pallickara, Shrideep
            Pallickara
          </p>
        </div>

        <div className="award" id="thirdPlace">
          <h2>3rd Place</h2>
          <p>
            <b>
              A Framework for Profiling Spatial Variability in the Performance
              of Classification Models.
            </b>
            <br />
            Menuka Warushavithana, Kassidy Barram, Caleb Carlson, Saptashwa
            Mitra, Sudipto Ghosh, Jay Breidt, Sangmi Pallickara, Shrideep
            Pallickara
          </p>
        </div>
      </Content>
    </PageWrapper>
  );
};

export default BestPaperAwards;
