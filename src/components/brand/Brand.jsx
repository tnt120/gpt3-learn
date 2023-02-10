import React from 'react';
import './brand.css';
import { google, slack, atlassian, dropbox, shopify } from './imports';

const Brand = () => {
  return (
    <div className="gpt3__brand section__padding">
      <div>
        <img src={google} alt="google_icon" />
      </div>

      <div>
        <img src={shopify} alt="shopify_icon" />
      </div>

      <div>
        <img src={atlassian} alt="atlassian_icon" />
      </div>

      <div>
        <img src={dropbox} alt="dropbox_icon" />
      </div>

      <div>
        <img src={slack} alt="slack_icon" />
      </div>
    </div>
  );
};

export default Brand;
