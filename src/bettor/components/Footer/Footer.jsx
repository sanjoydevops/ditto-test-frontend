import React from 'react';
import { Link } from 'react-router-dom';

import './Footer.scss';

import FooterBottom from '../FooterBottom';

const Footer = () => (<>
  <div className="container ditto-default-container mt-4">
    <div className="Footer__Wrapper">
      <div className="Footer__Container">
        <div className="row">
          <div className="col-md-6">
            <div className="Footer__More">
              <h3 className="Footer__More__Title">MORE</h3>
              <ul className="Footer__More__Menu">
                <li><Link to="/contact-us">Contact Us</Link></li>
                <li><Link to="/how-it-works">How It Works</Link></li>
                <li><Link to="/terms-and-conditions">Terms &amp; Conditions</Link></li>
                {/* <li><Link to="/privacy-policy">Privacy Policy</Link></li> */}
              </ul>
            </div>
          </div>
          <div className="col-md-6">
            <div className="Footer__Connect">
              <div className="Footer__Connect__Social">
                <h3 className="Footer__Connect__Title">CONNECT WITH US</h3>
                <a href="index">
                  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 35.309 35.31">
                    <path id="Icon_metro-facebook" data-name="Icon metro-facebook"
                      d="M32,1.928H8.455A5.885,5.885,0,0,0,2.571,7.814V31.352a5.885,5.885,0,0,0,5.884,5.886h11.77V21.79H15.812V17.376h4.414v-3.31a5.517,5.517,0,0,1,5.517-5.517H31.26v4.414H25.743a1.1,1.1,0,0,0-1.1,1.1v3.31h6.069L29.6,21.79H24.639V37.237H32a5.885,5.885,0,0,0,5.884-5.886V7.814A5.885,5.885,0,0,0,32,1.928Z"
                      transform="translate(-2.571 -1.928)" fill="rgb(211, 247, 212)" />
                  </svg>
                </a>
                <a href="index">
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 34.189 28.672">
                    <path id="Icon_awesome-telegram-plane" data-name="Icon awesome-telegram-plane"
                      d="M34.093,7.138,28.933,31.469c-.389,1.717-1.4,2.145-2.847,1.336l-7.861-5.793L14.432,30.66a1.974,1.974,0,0,1-1.58.771l.565-8.006L27.987,10.26c.633-.565-.137-.878-.985-.313L8.991,21.288,1.236,18.861c-1.687-.527-1.717-1.687.351-2.5L31.917,4.681c1.4-.527,2.633.313,2.175,2.458Z"
                      transform="translate(-0.001 -4.528)" fill="rgb(211, 247, 212)" />
                  </svg>
                </a>
                <a href="index">
                  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 38.636 38.636">
                    <path id="Icon_ionic-logo-whatsapp" data-name="Icon ionic-logo-whatsapp"
                      d="M21.919,2.25A18.894,18.894,0,0,0,2.951,21.071a18.626,18.626,0,0,0,2.722,9.718L2.25,40.886l10.5-3.336a19,19,0,0,0,28.135-16.48A18.894,18.894,0,0,0,21.919,2.25ZM31.35,28.218C30.9,29.325,28.886,30.334,28,30.381s-.915.689-5.764-1.417-7.766-7.231-8-7.561a9.3,9.3,0,0,1-1.789-5.041,5.374,5.374,0,0,1,1.846-3.943,1.857,1.857,0,0,1,1.314-.553c.382-.006.629-.011.912,0s.706-.059,1.074.918,1.246,3.377,1.358,3.621a.879.879,0,0,1,.009.843,3.294,3.294,0,0,1-.514.783c-.253.271-.532.607-.758.815-.252.23-.515.481-.25.972A14.514,14.514,0,0,0,20,23.242a13.234,13.234,0,0,0,3.8,2.528c.476.259.759.23,1.054-.08s1.262-1.358,1.6-1.826.661-.377,1.1-.2,2.773,1.428,3.249,1.686.793.391.906.6A3.983,3.983,0,0,1,31.35,28.218Z"
                      transform="translate(-2.25 -2.25)" fill="rgb(211, 247, 212)" />
                  </svg>
                </a>
                <a href="index">
                  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 34.189 34.189">
                    <g id="Icon_feather-instagram" data-name="Icon feather-instagram" transform="translate(0 0)">
                      <path id="Exclusion_3" data-name="Exclusion 3"
                        d="M25.642,34.189H8.547A8.547,8.547,0,0,1,0,25.642V8.548A8.548,8.548,0,0,1,8.547,0H25.642a8.547,8.547,0,0,1,8.547,8.548V25.642a8.546,8.546,0,0,1-8.547,8.547ZM17.167,10.182a6.843,6.843,0,1,0,1,.075A6.876,6.876,0,0,0,17.167,10.182Zm8.67-4.772a1.435,1.435,0,1,0,1.436,1.436A1.437,1.437,0,0,0,25.837,5.41Z"
                        transform="translate(0 0)" fill="rgb(211, 247, 212)" />
                    </g>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <FooterBottom />
</>);

export default Footer;
