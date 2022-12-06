import React from "react";
import { Divider } from "semantic-ui-react";

const PageFoot = () => (
  <div
    class="ui inverted vertical footer segment form-page"
    className="footer-page">
    <div class="ui container">Lechonks Larder 2022. All Rights Reserved</div>
    <Divider />
    <div class="ui center aligned container">
      <div class="ui stackable grid">
        <div class="four wide column">
          <h4 class="ui header">Front-End Contributors</h4>
          <div class="ui link list">
            <a
              class="item"
              href="https://github.com/brevenn"
              target="_blank"
            >
              Breven Glasgow
            </a>
            <a
              class="item"
              href="https://github.com/jacobschwal"
              target="_blank"
            >
              Jacob Schwalbach
            </a>
            <a
              class="item"
              href="https://github.com/overnightsolo"
              target="_blank"
            >
              Scott Sterling
            </a>
          </div>
        </div>
        <div class="eight wide column">
          <h4 class="ui header">Back-End Contributors</h4>
          <div class="ui link list">
            <a
              class="item"
              href="https://github.com/teeoni"
              target="_blank"
            >
              Tony Zapeda
            </a>
            <a
              class="item"
              href="https://github.com/parksfg"
              target="_blank"
            >
              Parker Gay
            </a>
            <a
              class="item"
              href="https://github.com/sky19930112"
              target="_blank"
            >
              Samuel Hsu
            </a>
          </div>
        </div>
        <div class="three wide column">
          <h4 class="ui header">References</h4>
          <div class="ui link list">
            <a
              class="item"
              href="https://github.com/ParksFG/Lechonks-Larder"
              target="_blank"
            >
              Github Repository
            </a>
            <a
              class="item"
              href="https://pokemontcg.io/"
              target="_blank"
            >
              Pokemon TGC API
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default PageFoot;
