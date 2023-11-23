import React from 'react';
import classNames from 'classnames';

import styles from './Live.module.scss';
import DittoLiveIcon from '../../assets/img/DittoLive-icon.svg';
import football from '../../assets/img/football.png';
import cricket from '../../assets/img/cricket.png';
import Tennis from '../../assets/img/Tennis.png';
import Basketball from '../../assets/img/Basketball.png';
import iceHockey from '../../assets/img/ice-hockey.png';
import vollyball from '../../assets/img/vollyball.png';
import tableTennis from '../../assets/img/table-tennis.png';
import realMadrid from '../../assets/img/real-madrid.png';
import manchesterufc from '../../assets/img/manchesterufc.png';
import vsIcon from '../../assets/img/vs.png';
import Arsenal from '../../assets/img/Arsenal F.C..png';
import Psg from '../../assets/img/Paris Saint-Germain F.C..png';
import Tottenham from '../../assets/img/Tottenham Hotspur F.C..png';
import acm from '../../assets/img/acm.png';

const Live = () => {
  return (
    <div className={styles.Live}>
      <div className={classNames('container ditto-default-container', styles.Live__Container)}>
        <div className="row">
          <div className="col-md-12">
            <div className={styles.Live__Header}>
              <img alt="flag" src={DittoLiveIcon} />
              <h3>DittoLive (32)</h3>
            </div>
            <div>
              {/* <ul className={`${styles.nav} ${styles.navTabs} ${styles.Live__Nav__Background__Top}`} id="myTab" role="tablist"> */}
              <ul className={classNames('nav nav-tabs', styles.Live__Nav__Background__Top)} id="myTab" role="tablist">
                {/* <li className={styles.navItem} role="presentation"> */}
                <li className="nav-item" role="presentation">
                  {/* <a className={`${styles.navLink} ${styles.active}`} id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Pre-Match</a> */}
                  <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Pre-Match</a>
                </li>
                {/* <li className={styles.navItem} role="presentation"> */}
                <li className="nav-item" role="presentation">
                  {/* <a className={styles.navLink} id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">In-Play</a> */}
                  <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">In-Play</a>
                </li>
              </ul>
              {/* <div className={`tab-content ${styles.Live__My__Tab__Content}`} id="myTabContent"> */}
              <div className={classNames('tab-content', styles.Live__My__Tab__Content)} id="myTabContent">
                <div className="tab-pane fade active show" id="home" role="tabpanel" aria-labelledby="home-tab">
                  <div className={styles.Live__Bg}>
                    <nav>
                      <div className={styles.Live__Nav__Background}>
                        {/* <div className={`${styles.nav} ${styles.navTabs} ${styles.homeTab} ${styles.navFill} ${styles.navbarActiveBg}`} id="nav-tab" role="tablist"> */}
                        <div className="nav nav-tabs home-tab nav-fill" id="nav-tab" role="tablist">
                          {/* <a className={`${styles.navItem} ${styles.navLink} ${styles.Live__Navitemc} ${styles.active} ${styles.show}`} id="nav-all-tab" data-toggle="tab" href="#nav-all" role="tab" aria-controls="nav-all" aria-selected="true">All</a> */}
                          <a className="nav-item nav-link active show" id="nav-all-tab" data-toggle="tab" href="#nav-all" role="tab" aria-controls="nav-all" aria-selected="true">All</a>
                          {/* <a className={`${styles.navItem} ${styles.navLink} ${styles.Live__Navitemc}`} id="nav-football-tab" data-toggle="tab" href="#nav-football" role="tab" aria-controls="nav-football" aria-selected="false">
                            <span><img alt="flag" src={football} style={{height: '20px'}} /></span> Football
                          </a> */}
                          <a className="nav-item nav-link" id="nav-football-tab" data-toggle="tab" href="#nav-football" role="tab" aria-controls="nav-football" aria-selected="false">
                            <span><img alt="flag" src={football} style={{height: '20px'}} /></span>
                            Football
                          </a>

                          {/* <a className={`${styles.navItem} ${styles.navLink} ${styles.Live__Navitemc}`} id="nav-cricket-tab" data-toggle="tab" href="#nav-cricket" role="tab" aria-controls="nav-cricket" aria-selected="false">
                            <span><img alt="flag" src={cricket} style={{height: '20px'}} /></span> Cricket
                          </a> */}
                          <a className="nav-item nav-link" id="nav-cricket-tab" data-toggle="tab" href="#nav-cricket" role="tab" aria-controls="nav-cricket" aria-selected="false">
                            <span><img alt="flag" src={cricket} style={{height: '20px'}} /></span> Cricket
                          </a>
                          {/* <a className={`${styles.navItem} ${styles.navLink} ${styles.Live__Navitemc}`} id="nav-tennis-tab" data-toggle="tab" href="#nav-tennis" role="tab" aria-controls="nav-tennis" aria-selected="false">
                            <span><img alt="flag" src={Tennis} style={{height: '20px'}} /></span> Tennis
                          </a> */}
                          <a className="nav-item nav-link" id="nav-tennis-tab"  data-toggle="tab" href="#nav-tennis" role="tab" aria-controls="nav-tennis" aria-selected="false">
                          <span><img alt="flag" src={Tennis} style={{height: '20px'}} /></span> Tennis
                          </a>

                          {/* <a className={`${styles.navItem} ${styles.navLink} ${styles.Live__Navitemc}`} id="nav-basketball-tab" data-toggle="tab" href="#nav-basketball" role="tab" aria-controls="nav-basketball" aria-selected="false">
                            <span><img alt="flag" src={Basketball} style={{height: '20px'}} /></span>
                            Basketball
                          </a> */}
                          <a className="nav-item nav-link" id="nav-basketball-tab" data-toggle="tab" href="#nav-basketball" role="tab" aria-controls="nav-basketball" aria-selected="false">
                          <span><img alt="flag" src={Basketball} style={{height: '20px'}} /></span>Basketball
                          </a>

                          {/* <a className={`${styles.navItem} ${styles.navLink} ${styles.Live__Navitemc}`} id="nav-icehockey-tab" data-toggle="tab" href="#nav-icehockey" role="tab" aria-controls="nav-icehockey" aria-selected="false">
                            <span><img alt="flag" src={iceHockey} style={{height: '20px'}} /></span> Ice Hockey
                          </a> */}
                          <a className="nav-item nav-link" id="nav-icehockey-tab" data-toggle="tab" href="#nav-icehockey" role="tab" aria-controls="nav-icehockey" aria-selected="false">
                          <span><img alt="flag" src={iceHockey} style={{height: '20px'}} /></span> Ice Hockey
                          </a>

                          {/* <a className={`${styles.navItem} ${styles.navLink} ${styles.Live__Navitemc}`} id="nav-volleyball-tab" data-toggle="tab" href="#nav-volleyball" role="tab" aria-controls="nav-volleyball" aria-selected="false">
                            <span><img alt="flag" src={vollyball} style={{height: '20px'}} /></span>Volleyball
                          </a> */}
                          <a className="nav-item nav-link" id="nav-volleyball-tab" data-toggle="tab" href="#nav-volleyball" role="tab" aria-controls="nav-volleyball" aria-selected="false">
                            <span><img alt="flag" src={vollyball} style={{height: '20px'}} /></span>Volleyball
                          </a>

                          {/* <a className={`${styles.navItem} ${styles.navLink} ${styles.Live__Navitemc}`} id="nav-tabletennis-tab" data-toggle="tab" href="#nav-tabletennis" role="tab" aria-controls="nav-tabletennis" aria-selected="false">
                            <span><img alt="flag" src={tableTennis} style={{height: '20px'}} /></span> Table Tennis
                          </a> */}
                          <a className="nav-item nav-link" id="nav-tabletennis-tab" data-toggle="tab" href="#nav-tabletennis" role="tab" aria-controls="nav-tabletennis" aria-selected="false">
                          <span><img alt="flag" src={tableTennis} style={{height: '20px'}} /></span> Table Tennis
                          </a>
                        </div>
                      </div>
                    </nav>
                    <div className="tab-content py-4 px-3 px-sm-0" id="nav-tabContent">
                      <div className="tab-pane fade active show" id="nav-all" role="tabpanel" aria-labelledby="nav-all-tab">

                        <div className={styles.Live__Grid__Container}>
                          <div className={styles.Live__Grid__Item} />
                          <div className={styles.Live__Grid__Item}>
                            <div className={styles.Live__Content__Field}>
                              <p>Spread</p>
                            </div>
                          </div>
                          <div className={styles.Live__Grid__Item}>
                            <div className={styles.Live__Content__Field}>
                              <p>Money Line</p>
                            </div>
                          </div>
                          <div className={styles.Live__Grid__Item}>
                            <div className={styles.Live__Content__Field}>
                              <p>Total</p>
                            </div>
                          </div>
                          {/* grid item start */}
                          <div className={styles.Live__Grid__Item}>
                            <div className="mt-2">
                              <div className={classNames('container', styles.Live__Match__Icon, styles.Live__Team__Name)}>
                                <img alt="flag" src={Arsenal} style={{height: '40px'}} />
                                <span className={styles.Live__Left__Text} style={{marginLeft: '10px'}}>Arsenal F.C.</span><br />
                                <img alt="flag" className={styles.Live__Vs} src={vsIcon} /> <br />
                                <img alt="flag" src={Psg} style={{height: '40px'}} />
                                <span className={styles.Live__Left__Text} style={{marginLeft: '10px'}}>Paris Saint-Germain F.C.</span>
                              </div>
                            </div>
                          </div>
                          <div className={classNames(styles.Live__Grid__Item, styles.Live__Content__Bg)}>
                            <div className={styles.Live__Content__Text}>
                              <p className={styles.Live__Content__Colour}>
                                +5<br />
                                <span className={styles.Live__Content__Colour1}>-670</span>
                              </p>
                            </div>
                            <div className='d-xl-none d-lg-none d-md-none d-sm-none team-space'>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</div>
                            <div className={styles.Live__Content__Text}>
                              <p className={classNames(styles.Live__Content__Colour, styles.Live__Point)}>
                                +5 <br />
                                <span className={styles.Live__Content__Colour1}>-160</span>
                              </p>
                            </div>
                          </div>
                          <div className={classNames(styles.Live__Grid__Item, styles.Live__Content__Bg)}>
                            <div className={styles.Live__Content__Text1}>
                              <p className={styles.Live__Content__Colour1}>+650</p>
                            </div>
                            <div className={styles.Live__Content__Text1}>
                              <p className={styles.Live__Content__Colour1}>-610</p>
                            </div>
                          </div>
                          <div className={classNames(styles.Live__Grid__Item, styles.Live__Content__Bg)}>
                            <div className={styles.Live__Content__Text}>
                              <p className={styles.Live__Content__Colour}>
                                Ov 39<br />
                                <span className={styles.Live__Content__Colour1}>-360</span>
                              </p>
                            </div>
                            <div className={styles.Live__Content__Text}>
                              <p className={styles.Live__Content__Colour}>
                                Un 39<br />
                                <span className={styles.Live__Content__Colour1}>-260</span>
                              </p>
                            </div>
                          </div>
                          {/* grid item end */}
                          {/* grid item start */}
                          <div className={styles.Live__Grid__Item}>
                            <div className="mt-2">
                              <div className={classNames('container', styles.Live__Match__Icon)}>
                                <img alt="flag" src={Tottenham} style={{height: '40px'}} />
                                <span className={styles.Live__Left__Text} style={{marginLeft: '10px'}}>Tottenham Hotspur F.C.</span><br />
                                <img alt="flag" className={styles.Live__Vs} src={vsIcon} /> <br />
                                <img alt="flag" src={acm} style={{height: '40px'}} />
                                <span className={styles.Live__Left__Text} style={{marginLeft: '10px'}}>A.C. Milan</span>
                              </div>
                            </div>
                          </div>
                          <div className={classNames(styles.Live__Grid__Item, styles.Live__Content__Bg)}>
                            <div className={styles.Live__Content__Text}>
                              <p className={styles.Live__Content__Colour}>
                                +3<br />
                                <span className={styles.Live__Content__Colour1}>-490</span>
                              </p>
                            </div>
                            <div className={styles.Live__Content__Text}>
                              <p className={styles.Live__Content__Colour}>
                                +3<br />
                                <span className={styles.Live__Content__Colour1}>-450</span>
                              </p>
                            </div>
                          </div>
                          <div className={classNames(styles.Live__Grid__Item, styles.Live__Content__Bg)}>
                            <div className={styles.Live__Content__Text1}>
                              <p className={styles.Live__Content__Colour1}>+550</p>
                            </div>
                            <div className={styles.Live__Content__Text1}>
                              <p className={styles.Live__Content__Colour1}>-350</p>
                            </div>
                          </div>
                          <div className={classNames(styles.Live__Grid__Item, styles.Live__Content__Bg)}>
                            <div className={styles.Live__Content__Text}>
                              <p className={styles.Live__Content__Colour}>
                                Ov 36<br />
                                <span className={styles.Live__Content__Colour1}>-330</span>
                              </p>
                            </div>
                            <div className={styles.Live__Content__Text}>
                              <p className={styles.Live__Content__Colour}>
                                Un 36<br />
                                <span className={styles.Live__Content__Colour1}>-210</span>
                              </p>
                            </div>
                          </div>
                          {/* grid item end */}
                        </div>
                      </div>
                      <div className="tab-pane fade" id="nav-football" role="tabpanel" aria-labelledby="nav-football-tab">
                        <div className={styles.Live__Grid__Container}>
                          <div className={styles.Live__Grid__Item} />
                          <div className={styles.Live__Grid__Item}>
                            <div className={styles.Live__Content__Field}>
                              <p>Spread</p>
                            </div>
                          </div>
                          <div className={styles.Live__Grid__Item}>
                            <div className={styles.Live__Content__Field}>
                              <p>Money Line</p>
                            </div>
                          </div>
                          <div className={styles.Live__Grid__Item}>
                            <div className={styles.Live__Content__Field}>
                              <p>Total</p>
                            </div>
                          </div>
                          {/* grid item start */}
                          <div className={styles.Live__Grid__Item}>
                            <div className="mt-2">
                              <div className={classNames('container', styles.Live__Match__Icon)}>
                                <img alt="flag" src={realMadrid} style={{height: '45px'}} />
                                <span className={styles.Live__Left__Text} style={{marginLeft: '10px'}}>Real Madrid CF</span><br />
                                <img alt="flag" className={styles.Live__Vs} src={vsIcon} /> <br />
                                <img alt="flag" src={manchesterufc} style={{height: '35px'}} />
                                <span className={styles.Live__Left__Text} style={{marginLeft: '10px'}}>Manchester United F.C.</span>
                              </div>
                            </div>
                          </div>
                          <div className={classNames(styles.Live__Grid__Item, styles.Live__Content__Bg)}>
                            <div className={styles.Live__Content__Text}>
                              <p className={styles.Live__Content__Colour}>
                                +5<br />
                                <span className={styles.Live__Content__Colour1}>-110</span>
                              </p>
                            </div>
                            <div className={styles.Live__Content__Text}>
                              <p className={styles.Live__Content__Colour}>
                                -5 <br />
                                <span className={styles.Live__Content__Colour1}>-110</span>
                              </p>
                            </div>
                          </div>
                          <div className={classNames(styles.Live__Grid__Item, styles.Live__Content__Bg)}>
                            <div className={styles.Live__Content__Text1}>
                              <p className={styles.Live__Content__Colour1}>+250</p>
                            </div>
                            <div className={styles.Live__Content__Text1}>
                              <p className={styles.Live__Content__Colour1}>-150</p>
                            </div>
                          </div>
                          <div className={classNames(styles.Live__Grid__Item, styles.Live__Content__Bg)}>
                            <div className={styles.Live__Content__Text}>
                              <p className={styles.Live__Content__Colour}>
                                Ov 46 <br />
                                <span className={styles.Live__Content__Colour1}>-110</span>
                              </p>
                            </div>
                            <div className={styles.Live__Content__Text}>
                              <p className={styles.Live__Content__Colour}>
                                Un 46 <br />
                                <span className={styles.Live__Content__Colour1}>-110</span>
                              </p>
                            </div>
                          </div>
                          {/* grid item end */}
                        </div>
                      </div>
                      <div className="tab-pane fade" id="nav-cricket" role="tabpanel" aria-labelledby="nav-cricket-tab">
                        <div className={styles.Live__Grid__Container}>
                          <div className={styles.Live__Grid__Item} />
                          <div className={styles.Live__Grid__Item}>
                            <div className={styles.Live__Content__Field}>
                              <p>Spread</p>
                            </div>
                          </div>
                          <div className={styles.Live__Grid__Item}>
                            <div className={styles.Live__Content__Field}>
                              <p>Money Line</p>
                            </div>
                          </div>
                          <div className={styles.Live__Grid__Item}>
                            <div className={styles.Live__Content__Field}>
                              <p>Total</p>
                            </div>
                          </div>
                          {/* grid item start */}
                          <div className={styles.Live__Grid__Item}>
                            <div className="mt-2">
                              <div className={classNames('container', styles.Live__Match__Icon)}>
                                <img alt="flag" src={realMadrid} style={{height: '45px'}} />
                                <span className={styles.Live__Left__Text} style={{marginLeft: '10px'}}>Real Madrid CF</span><br />
                                <img alt="flag" className={styles.Live__Vs} src={vsIcon} /> <br />
                                <img alt="flag" src={manchesterufc} style={{height: '35px'}} />
                                <span className={styles.Live__Left__Text} style={{marginLeft: '10px'}}>Manchester United F.C.</span>
                              </div>
                            </div>
                          </div>
                          <div className={classNames(styles.Live__Grid__Item, styles.Live__Content__Bg)}>
                            <div className={styles.Live__Content__Text}>
                              <p className={styles.Live__Content__Colour}>
                                +5<br />
                                <span className={styles.Live__Content__Colour1}>-110</span>
                              </p>
                            </div>
                            <div className={styles.Live__Content__Text}>
                              <p className={styles.Live__Content__Colour}>
                                -5 <br />
                                <span className={styles.Live__Content__Colour1}>-110</span>
                              </p>
                            </div>
                          </div>
                          <div className={classNames(styles.Live__Grid__Item, styles.Live__Content__Bg)}>
                            <div className={styles.Live__Content__Text1}>
                              <p className={styles.Live__Content__Colour1}>+250</p>
                            </div>
                            <div className={styles.Live__Content__Text1}>
                              <p className={styles.Live__Content__Colour1}>-150</p>
                            </div>
                          </div>
                          <div className={classNames(styles.Live__Grid__Item, styles.Live__Content__Bg)}>
                            <div className={styles.Live__Content__Text}>
                              <p className={styles.Live__Content__Colour}>
                                Ov 46 <br />
                                <span className={styles.Live__Content__Colour1}>-110</span>
                              </p>
                            </div>
                            <div className={styles.Live__Content__Text}>
                              <p className={styles.Live__Content__Colour}>
                                Un 46 <br />
                                <span className={styles.Live__Content__Colour1}>-110</span>
                              </p>
                            </div>
                          </div>
                          {/* grid item end */}
                        </div>
                      </div>
                      <div className="tab-pane fade" id="nav-tennis" role="tabpanel" aria-labelledby="nav-tennis-tab">
                        <div className={styles.Live__Grid__Container}>
                          <div className={styles.Live__Grid__Item} />
                          <div className={styles.Live__Grid__Item}>
                            <div className={styles.Live__Content__Field}>
                              <p>Spread</p>
                            </div>
                          </div>
                          <div className={styles.Live__Grid__Item}>
                            <div className={styles.Live__Content__Field}>
                              <p>Money Line</p>
                            </div>
                          </div>
                          <div className={styles.Live__Grid__Item}>
                            <div className={styles.Live__Content__Field}>
                              <p>Total</p>
                            </div>
                          </div>
                          {/* grid item start */}
                          <div className={styles.Live__Grid__Item}>
                            <div className="mt-2">
                              <div className={classNames('container', styles.Live__Match__Icon)}>
                                <img alt="flag" src={realMadrid} style={{height: '45px'}} />
                                <span className={styles.Live__Left__Text} style={{marginLeft: '10px'}}>Real Madrid CF</span><br />
                                <img alt="flag" className={styles.Live__Vs} src={vsIcon} /> <br />
                                <img alt="flag" src={manchesterufc} style={{height: '35px'}} />
                                <span className={styles.Live__Left__Text} style={{marginLeft: '10px'}}>Manchester United F.C.</span>
                              </div>
                            </div>
                          </div>
                          <div className={classNames(styles.Live__Grid__Item, styles.Live__Content__Bg)}>
                            <div className={styles.Live__Content__Text}>
                              <p className={styles.Live__Content__Colour}>
                                +5<br />
                                <span className={styles.Live__Content__Colour1}>-110</span>
                              </p>
                            </div>
                            <div className={styles.Live__Content__Text}>
                              <p className={styles.Live__Content__Colour}>
                                -5 <br />
                                <span className={styles.Live__Content__Colour1}>-110</span>
                              </p>
                            </div>
                          </div>
                          <div className={classNames(styles.Live__Grid__Item, styles.Live__Content__Bg)}>
                            <div className={styles.Live__Content__Text1}>
                              <p className={styles.Live__Content__Colour1}>+250</p>
                            </div>
                            <div className={styles.Live__Content__Text1}>
                              <p className={styles.Live__Content__Colour1}>-150</p>
                            </div>
                          </div>
                          <div className={classNames(styles.Live__Grid__Item, styles.Live__Content__Bg)}>
                            <div className={styles.Live__Content__Text}>
                              <p className={styles.Live__Content__Colour}>
                                Ov 46 <br />
                                <span className={styles.Live__Content__Colour1}>-110</span>
                              </p>
                            </div>
                            <div className={styles.Live__Content__Text}>
                              <p className={styles.Live__Content__Colour}>
                                Un 46 <br />
                                <span className={styles.Live__Content__Colour1}>-110</span>
                              </p>
                            </div>
                          </div>
                          {/* grid item end */}
                        </div>
                      </div>
                      <div className="tab-pane fade" id="nav-basketball" role="tabpanel" aria-labelledby="nav-basketball-tab">
                        <div className={styles.Live__Grid__Container}>
                          <div className={styles.Live__Grid__Item} />
                          <div className={styles.Live__Grid__Item}>
                            <div className={styles.Live__Content__Field}>
                              <p>Spread</p>
                            </div>
                          </div>
                          <div className={styles.Live__Grid__Item}>
                            <div className={styles.Live__Content__Field}>
                              <p>Money Line</p>
                            </div>
                          </div>
                          <div className={styles.Live__Grid__Item}>
                            <div className={styles.Live__Content__Field}>
                              <p>Total</p>
                            </div>
                          </div>
                          {/* grid item start */}
                          <div className={styles.Live__Grid__Item}>
                            <div className="mt-2">
                              <div className={classNames('container', styles.Live__Match__Icon)}>
                                <img alt="flag" src={realMadrid} style={{height: '45px'}} />
                                <span className={styles.Live__Left__Text} style={{marginLeft: '10px'}}>Real Madrid CF</span><br />
                                <img alt="flag" className={styles.Live__Vs} src={vsIcon} /> <br />
                                <img alt="flag" src={manchesterufc} style={{height: '35px'}} />
                                <span className={styles.Live__Left__Text} style={{marginLeft: '10px'}}>Manchester United F.C.</span>
                              </div>
                            </div>
                          </div>
                          <div className={classNames(styles.Live__Grid__Item, styles.Live__Content__Bg)}>
                            <div className={styles.Live__Content__Text}>
                              <p className={styles.Live__Content__Colour}>
                                +5<br />
                                <span className={styles.Live__Content__Colour1}>-110</span>
                              </p>
                            </div>
                            <div className={styles.Live__Content__Text}>
                              <p className={styles.Live__Content__Colour}>
                                -5 <br />
                                <span className={styles.Live__Content__Colour1}>-110</span>
                              </p>
                            </div>
                          </div>
                          <div className={classNames(styles.Live__Grid__Item, styles.Live__Content__Bg)}>
                            <div className={styles.Live__Content__Text1}>
                              <p className={styles.Live__Content__Colour1}>+250</p>
                            </div>
                            <div className={styles.Live__Content__Text1}>
                              <p className={styles.Live__Content__Colour1}>-150</p>
                            </div>
                          </div>
                          <div className={classNames(styles.Live__Grid__Item, styles.Live__Content__Bg)}>
                            <div className={styles.Live__Content__Text}>
                              <p className={styles.Live__Content__Colour}>
                                Ov 46 <br />
                                <span className={styles.Live__Content__Colour1}>-110</span>
                              </p>
                            </div>
                            <div className={styles.Live__Content__Text}>
                              <p className={styles.Live__Content__Colour}>
                                Un 46 <br />
                                <span className={styles.Live__Content__Colour1}>-110</span>
                              </p>
                            </div>
                          </div>
                          {/* grid item end */}
                        </div>
                      </div>
                      <div className="tab-pane fade" id="nav-icehockey" role="tabpanel" aria-labelledby="nav-icehockey-tab">
                        <div className={styles.Live__Grid__Container}>
                          <div className={styles.Live__Grid__Item} />
                          <div className={styles.Live__Grid__Item}>
                            <div className={styles.Live__Content__Field}>
                              <p>Spread</p>
                            </div>
                          </div>
                          <div className={styles.Live__Grid__Item}>
                            <div className={styles.Live__Content__Field}>
                              <p>Money Line</p>
                            </div>
                          </div>
                          <div className={styles.Live__Grid__Item}>
                            <div className={styles.Live__Content__Field}>
                              <p>Total</p>
                            </div>
                          </div>
                          {/* grid item start */}
                          <div className={styles.Live__Grid__Item}>
                            <div className="mt-2">
                              <div className={classNames('container', styles.Live__Match__Icon)}>
                                <img alt="flag" src={realMadrid} style={{height: '45px'}} />
                                <span className={styles.Live__Left__Text} style={{marginLeft: '10px'}}>Real Madrid CF</span><br />
                                <img alt="flag" className={styles.Live__Vs} src={vsIcon} /> <br />
                                <img alt="flag" src={manchesterufc} style={{height: '35px'}} />
                                <span className={styles.Live__Left__Text} style={{marginLeft: '10px'}}>Manchester United F.C.</span>
                              </div>
                            </div>
                          </div>
                          <div className={classNames(styles.Live__Grid__Item, styles.Live__Content__Bg)}>
                            <div className={styles.Live__Content__Text}>
                              <p className={styles.Live__Content__Colour}>
                                +5<br />
                                <span className={styles.Live__Content__Colour1}>-110</span>
                              </p>
                            </div>
                            <div className={styles.Live__Content__Text}>
                              <p className={styles.Live__Content__Colour}>
                                -5 <br />
                                <span className={styles.Live__Content__Colour1}>-110</span>
                              </p>
                            </div>
                          </div>
                          <div className={classNames(styles.Live__Grid__Item, styles.Live__Content__Bg)}>
                            <div className={styles.Live__Content__Text1}>
                              <p className={styles.Live__Content__Colour1}>+250</p>
                            </div>
                            <div className={styles.Live__Content__Text1}>
                              <p className={styles.Live__Content__Colour1}>-150</p>
                            </div>
                          </div>
                          <div className={classNames(styles.Live__Grid__Item, styles.Live__Content__Bg)}>
                            <div className={styles.Live__Content__Text}>
                              <p className={styles.Live__Content__Colour}>
                                Ov 46 <br />
                                <span className={styles.Live__Content__Colour1}>-110</span>
                              </p>
                            </div>
                            <div className={styles.Live__Content__Text}>
                              <p className={styles.Live__Content__Colour}>
                                Un 46 <br />
                                <span className={styles.Live__Content__Colour1}>-110</span>
                              </p>
                            </div>
                          </div>
                          {/* grid item end */}
                        </div>
                      </div>
                      <div className="tab-pane fade" id="nav-volleyball" role="tabpanel" aria-labelledby="nav-volleyball-tab">
                        <div className={styles.Live__Grid__Container}>
                          <div className={styles.Live__Grid__Item} />
                          <div className={styles.Live__Grid__Item}>
                            <div className={styles.Live__Content__Field}>
                              <p>Spread</p>
                            </div>
                          </div>
                          <div className={styles.Live__Grid__Item}>
                            <div className={styles.Live__Content__Field}>
                              <p>Money Line</p>
                            </div>
                          </div>
                          <div className={styles.Live__Grid__Item}>
                            <div className={styles.Live__Content__Field}>
                              <p>Total</p>
                            </div>
                          </div>
                          {/* grid item start */}
                          <div className={styles.Live__Grid__Item}>
                            <div className="mt-2">
                              <div className={classNames('container', styles.Live__Match__Icon)}>
                                <img alt="flag" src={realMadrid} style={{height: '45px'}} />
                                <span className={styles.Live__Left__Text} style={{marginLeft: '10px'}}>Real Madrid CF</span><br />
                                <img alt="flag" className={styles.Live__Vs} src={vsIcon} /> <br />
                                <img alt="flag" src={manchesterufc} style={{height: '35px'}} />
                                <span className={styles.Live__Left__Text} style={{marginLeft: '10px'}}>Manchester United F.C.</span>
                              </div>
                            </div>
                          </div>
                          <div className={classNames(styles.Live__Grid__Item, styles.Live__Content__Bg)}>
                            <div className={styles.Live__Content__Text}>
                              <p className={styles.Live__Content__Colour}>
                                +5<br />
                                <span className={styles.Live__Content__Colour1}>-110</span>
                              </p>
                            </div>
                            <div className={styles.Live__Content__Text}>
                              <p className={styles.Live__Content__Colour}>
                                -5 <br />
                                <span className={styles.Live__Content__Colour1}>-110</span>
                              </p>
                            </div>
                          </div>
                          <div className={classNames(styles.Live__Grid__Item, styles.Live__Content__Bg)}>
                            <div className={styles.Live__Content__Text1}>
                              <p className={styles.Live__Content__Colour1}>+250</p>
                            </div>
                            <div className={styles.Live__Content__Text1}>
                              <p className={styles.Live__Content__Colour1}>-150</p>
                            </div>
                          </div>
                          <div className={classNames(styles.Live__Grid__Item, styles.Live__Content__Bg)}>
                            <div className={styles.Live__Content__Text}>
                              <p className={styles.Live__Content__Colour}>
                                Ov 46 <br />
                                <span className={styles.Live__Content__Colour1}>-110</span>
                              </p>
                            </div>
                            <div className={styles.Live__Content__Text}>
                              <p className={styles.Live__Content__Colour}>
                                Un 46 <br />
                                <span className={styles.Live__Content__Colour1}>-110</span>
                              </p>
                            </div>
                          </div>
                          {/* grid item end */}
                        </div>
                      </div>
                      <div className="tab-pane fade" id="nav-tabletennis" role="tabpanel" aria-labelledby="nav-tabletennis-tab">
                        <div className={styles.Live__Grid__Container}>
                          <div className={styles.Live__Grid__Item} />
                          <div className={styles.Live__Grid__Item}>
                            <div className={styles.Live__Content__Field}>
                              <p>Spread</p>
                            </div>
                          </div>
                          <div className={styles.Live__Grid__Item}>
                            <div className={styles.Live__Content__Field}>
                              <p>Money Line</p>
                            </div>
                          </div>
                          <div className={styles.Live__Grid__Item}>
                            <div className={styles.Live__Content__Field}>
                              <p>Total</p>
                            </div>
                          </div>
                          {/* grid item start */}
                          <div className={styles.Live__Grid__Item}>
                            <div className="mt-2">
                              <div className={classNames('container', styles.Live__Match__Icon)}>
                                <img alt="flag" src={realMadrid} style={{height: '45px'}} />
                                <span className={styles.Live__Left__Text} style={{marginLeft: '10px'}}>Real Madrid CF</span><br />
                                <img alt="flag" className={styles.Live__Vs} src={vsIcon} /> <br />
                                <img alt="flag" src={manchesterufc} style={{height: '35px'}} />
                                <span className={styles.Live__Left__Text} style={{marginLeft: '10px'}}>Manchester United F.C.</span>
                              </div>
                            </div>
                          </div>
                          <div className={classNames(styles.Live__Grid__Item, styles.Live__Content__Bg)}>
                            <div className={styles.Live__Content__Text}>
                              <p className={styles.Live__Content__Colour}>
                                +5<br />
                                <span className={styles.Live__Content__Colour1}>-110</span>
                              </p>
                            </div>
                            <div className={styles.Live__Content__Text}>
                              <p className={styles.Live__Content__Colour}>
                                -5 <br />
                                <span className={styles.Live__Content__Colour1}>-110</span>
                              </p>
                            </div>
                          </div>
                          <div className={classNames(styles.Live__Grid__Item, styles.Live__Content__Bg)}>
                            <div className={styles.Live__Content__Text1}>
                              <p className={styles.Live__Content__Colour1}>+250</p>
                            </div>
                            <div className={styles.Live__Content__Text1}>
                              <p className={styles.Live__Content__Colour1}>-150</p>
                            </div>
                          </div>
                          <div className={classNames(styles.Live__Grid__Item, styles.Live__Content__Bg)}>
                            <div className={styles.Live__Content__Text}>
                              <p className={styles.Live__Content__Colour}>
                                Ov 46 <br />
                                <span className={styles.Live__Content__Colour1}>-110</span>
                              </p>
                            </div>
                            <div className={styles.Live__Content__Text}>
                              <p className={styles.Live__Content__Colour}>
                                Un 46 <br />
                                <span className={styles.Live__Content__Colour1}>-110</span>
                              </p>
                            </div>
                          </div>
                          {/* grid item end */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                  <div className="match-tab-field bg">
                    <nav>
                      <div className={styles.Live__Nav__Background}>
                        {/* <div className={`${styles.nav} ${styles.navTabs} ${styles.homeTab} ${styles.navFill} ${styles.navbarActiveBg}`} id="nav-tab" role="tablist"> */}
                        <div className="nav nav-tabs home-tab nav-fill" id="nav-tab" role="tablist">
                          {/* <a className={`${styles.navItem} ${styles.navLink} ${styles.Live__Navitemc} ${styles.active} ${styles.show}`} id="nav-all-tab" data-toggle="tab" href="#nav-all" role="tab" aria-controls="nav-all" aria-selected="true">All</a> */}
                          <a className="nav-item nav-link active show" id="nav-all-tab" data-toggle="tab" href="#nav-all" role="tab" aria-controls="nav-all" aria-selected="true">All</a>
                          {/* <a className={`${styles.navItem} ${styles.navLink} ${styles.Live__Navitemc}`} id="nav-football-tab" data-toggle="tab" href="#nav-football" role="tab" aria-controls="nav-football" aria-selected="false">
                            <span><img alt="flag" src={football} style={{height: '20px'}} /></span> Football
                          </a> */}
                          <a className="nav-item nav-link" id="nav-football-tab" data-toggle="tab" href="#nav-football" role="tab" aria-controls="nav-football" aria-selected="false">
                          <span><img alt="flag" src={football} style={{height: '20px'}} /></span> Football
                          </a>

                          {/* <a className={`${styles.navItem} ${styles.navLink} ${styles.Live__Navitemc}`} id="nav-cricket-tab" data-toggle="tab" href="#nav-cricket" role="tab" aria-controls="nav-cricket" aria-selected="false">
                            <span><img alt="flag" src={cricket} style={{height: '20px'}} /></span> Cricket
                          </a> */}
                          <a className="nav-item nav-link" id="nav-cricket-tab" data-toggle="tab" href="#nav-cricket" role="tab" aria-controls="nav-cricket" aria-selected="false">
                            <span><img alt="flag" src={football} style={{height: '20px'}} /></span> Cricket
                          </a>
                          {/* <a className={`${styles.navItem} ${styles.navLink} ${styles.Live__Navitemc}`} id="nav-tennis-tab" data-toggle="tab" href="#nav-tennis" role="tab" aria-controls="nav-tennis" aria-selected="false">
                            <span><img alt="flag" src={Tennis} style={{height: '20px'}} /></span> Tennis
                          </a> */}
                          <a className="nav-item nav-link" id="nav-tennis-tab"  data-toggle="tab" href="#nav-tennis" role="tab" aria-controls="nav-tennis" aria-selected="false">
                          <span><img alt="flag" src={Tennis} style={{height: '20px'}} /></span> Tennis
                          </a>

                          {/* <a className={`${styles.navItem} ${styles.navLink} ${styles.Live__Navitemc}`} id="nav-basketball-tab" data-toggle="tab" href="#nav-basketball" role="tab" aria-controls="nav-basketball" aria-selected="false">
                            <span><img alt="flag" src={Basketball} style={{height: '20px'}} /></span>
                            Basketball
                          </a> */}
                          <a className="nav-item nav-link" id="nav-basketball-tab" data-toggle="tab" href="#nav-basketball" role="tab" aria-controls="nav-basketball" aria-selected="false">
                          <span><img alt="flag" src={Basketball} style={{height: '20px'}} /></span>Basketball
                          </a>

                          {/* <a className={`${styles.navItem} ${styles.navLink} ${styles.Live__Navitemc}`} id="nav-icehockey-tab" data-toggle="tab" href="#nav-icehockey" role="tab" aria-controls="nav-icehockey" aria-selected="false">
                            <span><img alt="flag" src={iceHockey} style={{height: '20px'}} /></span> Ice Hockey
                          </a> */}
                          <a className="nav-item nav-link" id="nav-icehockey-tab" data-toggle="tab" href="#nav-icehockey" role="tab" aria-controls="nav-icehockey" aria-selected="false">
                          <span><img alt="flag" src={iceHockey} style={{height: '20px'}} /></span> Ice Hockey
                          </a>

                          {/* <a className={`${styles.navItem} ${styles.navLink} ${styles.Live__Navitemc}`} id="nav-volleyball-tab" data-toggle="tab" href="#nav-volleyball" role="tab" aria-controls="nav-volleyball" aria-selected="false">
                            <span><img alt="flag" src={vollyball} style={{height: '20px'}} /></span>Volleyball
                          </a> */}
                          <a className="nav-item nav-link" id="nav-volleyball-tab" data-toggle="tab" href="#nav-volleyball" role="tab" aria-controls="nav-volleyball" aria-selected="false">
                            <span><img alt="flag" src={vollyball} style={{height: '20px'}} /></span>Volleyball
                          </a>

                          {/* <a className={`${styles.navItem} ${styles.navLink} ${styles.Live__Navitemc}`} id="nav-tabletennis-tab" data-toggle="tab" href="#nav-tabletennis" role="tab" aria-controls="nav-tabletennis" aria-selected="false">
                            <span><img alt="flag" src={tableTennis} style={{height: '20px'}} /></span> Table Tennis
                          </a> */}
                          <a className="nav-item nav-link" id="nav-tabletennis-tab" data-toggle="tab" href="#nav-tabletennis" role="tab" aria-controls="nav-tabletennis" aria-selected="false">
                          <span><img alt="flag" src={tableTennis} style={{height: '20px'}} /></span> Table Tennis
                          </a>
                        </div>
                      </div>
                    </nav>
                    <div className="tab-content py-4 px-3 px-sm-0" id="nav-tabContent">
                      <div className="tab-pane fade show active" id="nav-all-inplay" role="tabpanel" aria-labelledby="nav-all-tab">

                        <div className={styles.Live__Grid__Container}>
                          <div className={styles.Live__Grid__Item} />
                          <div className={styles.Live__Grid__Item}>
                            <div className={styles.Live__Content__Field}>
                              <p>Spread</p>
                            </div>
                          </div>
                          <div className={styles.Live__Grid__Item}>
                            <div className={styles.Live__Content__Field}>
                              <p>Money Line</p>
                            </div>
                          </div>
                          <div className={styles.Live__Grid__Item}>
                            <div className={styles.Live__Content__Field}>
                              <p>Total</p>
                            </div>
                          </div>

                          {/* grid item start */}
                          <div className={styles.Live__Grid__Item}>
                            <div className="mt-2">
                              <div className={classNames('container', styles.Live__Match__Icon)}>
                                <img alt="flag" src={Arsenal} style={{height: '40px'}} />
                                <span className={styles.Live__Left__Text} style={{marginLeft: '10px'}}>Arsenal F.C.</span><br />
                                <img alt="flag" className={styles.Live__Vs} src={vsIcon} /> <br />
                                <img alt="flag" src={Psg} style={{height: '40px'}} />
                                <span className={styles.Live__Left__Text} style={{marginLeft: '10px'}}>Paris Saint-Germain F.C.</span>
                              </div>
                            </div>
                          </div>
                          <div className={classNames(styles.Live__Grid__Item, styles.Live__Content__Bg)}>
                            <div className={styles.Live__Content__Text}>
                              <p className={styles.Live__Content__Colour}>
                                +5<br />
                                <span className={styles.Live__Content__Colour1}>-670</span>
                              </p>
                            </div>
                            <div className={styles.Live__Content__Text}>
                              <p className={styles.Live__Content__Colour}>
                                +5 <br />
                                <span className={styles.Live__Content__Colour1}>-160</span>
                              </p>
                            </div>
                          </div>
                          <div className={classNames(styles.Live__Grid__Item, styles.Live__Content__Bg)}>
                            <div className={styles.Live__Content__Text1}>
                              <p className={styles.Live__Content__Colour1}>+650</p>
                            </div>
                            <div className={styles.Live__Content__Text1}>
                              <p className={styles.Live__Content__Colour1}>-610</p>
                            </div>
                          </div>
                          <div className={classNames(styles.Live__Grid__Item, styles.Live__Content__Bg)}>
                            <div className={styles.Live__Content__Text}>
                              <p className={styles.Live__Content__Colour}>
                                Ov 39<br />
                                <span className={styles.Live__Content__Colour1}>-360</span>
                              </p>
                            </div>
                            <div className={styles.Live__Content__Text}>
                              <p className={styles.Live__Content__Colour}>
                                Un 39<br />
                                <span className={styles.Live__Content__Colour1}>-260</span>
                              </p>
                            </div>
                          </div>
                          {/* grid item end */}
                          {/* grid item start */}
                          <div className={styles.Live__Grid__Item}>
                            <div className="mt-2">
                              <div className={classNames('container', styles.Live__Match__Icon)}>
                                <img alt="flag" src={Tottenham} style={{height: '40px'}} />
                                <span className={styles.Live__Left__Text} style={{marginLeft: '10px'}}>Tottenham Hotspur F.C.</span><br />
                                <img alt="flag" className={styles.Live__Vs} src={vsIcon} /> <br />
                                <img alt="flag" src={acm} style={{height: '40px'}} />
                                <span className={styles.Live__Left__Text} style={{marginLeft: '10px'}}>A.C. Milan</span>
                              </div>
                            </div>
                          </div>
                          <div className={classNames(styles.Live__Grid__Item, styles.Live__Content__Bg)}>
                            <div className={styles.Live__Content__Text}>
                              <p className={styles.Live__Content__Colour}>
                                +3<br />
                                <span className={styles.Live__Content__Colour1}>-490</span>
                              </p>
                            </div>
                            <div className={styles.Live__Content__Text}>
                              <p className={styles.Live__Content__Colour}>
                                +3<br />
                                <span className={styles.Live__Content__Colour1}>-450</span>
                              </p>
                            </div>
                          </div>
                          <div className={classNames(styles.Live__Grid__Item, styles.Live__Content__Bg)}>
                            <div className={styles.Live__Content__Text1}>
                              <p className={styles.Live__Content__Colour1}>+550</p>
                            </div>
                            <div className={styles.Live__Content__Text1}>
                              <p className={styles.Live__Content__Colour1}>-350</p>
                            </div>
                          </div>
                          <div className={classNames(styles.Live__Grid__Item, styles.Live__Content__Bg)}>
                            <div className={styles.Live__Content__Text}>
                              <p className={styles.Live__Content__Colour}>
                                Ov 36<br />
                                <span className={styles.Live__Content__Colour1}>-330</span>
                              </p>
                            </div>
                            <div className={styles.Live__Content__Text}>
                              <p className={styles.Live__Content__Colour}>
                                Un 36<br />
                                <span className={styles.Live__Content__Colour1}>-210</span>
                              </p>
                            </div>
                          </div>
                          {/* grid item end */}
                        </div>
                      </div>
                      <div className="tab-pane fade" id="nav-football-inplay" role="tabpanel" aria-labelledby="nav-football-tab">
                        <div className={styles.Live__Grid__Container}>
                          <div className={styles.Live__Grid__Item} />
                          <div className={styles.Live__Grid__Item}>
                            <div className={styles.Live__Content__Field}>
                              <p>Spread</p>
                            </div>
                          </div>
                          <div className={styles.Live__Grid__Item}>
                            <div className={styles.Live__Content__Field}>
                              <p>Money Line</p>
                            </div>
                          </div>
                          <div className={styles.Live__Grid__Item}>
                            <div className={styles.Live__Content__Field}>
                              <p>Total</p>
                            </div>
                          </div>
                          {/* grid item start */}
                          <div className={styles.Live__Grid__Item}>
                            <div className="mt-2">
                              <div className={classNames('container', styles.Live__Match__Icon)}>
                                <img alt="flag" src={realMadrid} style={{height: '45px'}} />
                                <span className={styles.Live__Left__Text} style={{marginLeft: '10px'}}>Real Madrid CF</span><br />
                                <img alt="flag" className={styles.Live__Vs} src={vsIcon} /> <br />
                                <img alt="flag" src={manchesterufc} style={{height: '35px'}} />
                                <span className={styles.Live__Left__Text} style={{marginLeft: '10px'}}>Manchester United F.C.</span>
                              </div>
                            </div>
                          </div>
                          <div className={classNames(styles.Live__Grid__Item, styles.Live__Content__Bg)}>
                            <div className={styles.Live__Content__Text}>
                              <p className={styles.Live__Content__Colour}>
                                +5<br />
                                <span className={styles.Live__Content__Colour1}>-110</span>
                              </p>
                            </div>
                            <div className={styles.Live__Content__Text}>
                              <p className={styles.Live__Content__Colour}>
                                -5 <br />
                                <span className={styles.Live__Content__Colour1}>-110</span>
                              </p>
                            </div>
                          </div>
                          <div className={classNames(styles.Live__Grid__Item, styles.Live__Content__Bg)}>
                            <div className={styles.Live__Content__Text1}>
                              <p className={styles.Live__Content__Colour1}>+250</p>
                            </div>
                            <div className={styles.Live__Content__Text1}>
                              <p className={styles.Live__Content__Colour1}>-150</p>
                            </div>
                          </div>
                          <div className={classNames(styles.Live__Grid__Item, styles.Live__Content__Bg)}>
                            <div className={styles.Live__Content__Text}>
                              <p className={styles.Live__Content__Colour}>
                                Ov 46 <br />
                                <span className={styles.Live__Content__Colour1}>-110</span>
                              </p>
                            </div>
                            <div className={styles.Live__Content__Text}>
                              <p className={styles.Live__Content__Colour}>
                                Un 46 <br />
                                <span className={styles.Live__Content__Colour1}>-110</span>
                              </p>
                            </div>
                          </div>
                          {/* grid item end */}
                        </div>
                      </div>
                      <div className="tab-pane fade" id="nav-cricket-inplay" role="tabpanel" aria-labelledby="nav-cricket-tab">
                        <div className={styles.Live__Grid__Container}>
                          <div className={styles.Live__Grid__Item} />
                          <div className={styles.Live__Grid__Item}>
                            <div className={styles.Live__Content__Field}>
                              <p>Spread</p>
                            </div>
                          </div>
                          <div className={styles.Live__Grid__Item}>
                            <div className={styles.Live__Content__Field}>
                              <p>Money Line</p>
                            </div>
                          </div>
                          <div className={styles.Live__Grid__Item}>
                            <div className={styles.Live__Content__Field}>
                              <p>Total</p>
                            </div>
                          </div>
                          {/* grid item start */}
                          <div className={styles.Live__Grid__Item}>
                            <div className="mt-2">
                              <div className={classNames('container', styles.Live__Match__Icon)}>
                                <img alt="flag" src={realMadrid} style={{height: '45px'}} />
                                <span className={styles.Live__Left__Text} style={{marginLeft: '10px'}}>Real Madrid CF</span><br />
                                <img alt="flag" className={styles.Live__Vs} src={vsIcon} /> <br />
                                <img alt="flag" src={manchesterufc} style={{height: '35px'}} />
                                <span className={styles.Live__Left__Text} style={{marginLeft: '10px'}}>Manchester United F.C.</span>
                              </div>
                            </div>
                          </div>
                          <div className={classNames(styles.Live__Grid__Item, styles.Live__Content__Bg)}>
                            <div className={styles.Live__Content__Text}>
                              <p className={styles.Live__Content__Colour}>
                                +5<br />
                                <span className={styles.Live__Content__Colour1}>-110</span>
                              </p>
                            </div>
                            <div className={styles.Live__Content__Text}>
                              <p className={styles.Live__Content__Colour}>
                                -5 <br />
                                <span className={styles.Live__Content__Colour1}>-110</span>
                              </p>
                            </div>
                          </div>
                          <div className={classNames(styles.Live__Grid__Item, styles.Live__Content__Bg)}>
                            <div className={styles.Live__Content__Text1}>
                              <p className={styles.Live__Content__Colour1}>+250</p>
                            </div>
                            <div className={styles.Live__Content__Text1}>
                              <p className={styles.Live__Content__Colour1}>-150</p>
                            </div>
                          </div>
                          <div className={classNames(styles.Live__Grid__Item, styles.Live__Content__Bg)}>
                            <div className={styles.Live__Content__Text}>
                              <p className={styles.Live__Content__Colour}>
                                Ov 46 <br />
                                <span className={styles.Live__Content__Colour1}>-110</span>
                              </p>
                            </div>
                            <div className={styles.Live__Content__Text}>
                              <p className={styles.Live__Content__Colour}>
                                Un 46 <br />
                                <span className={styles.Live__Content__Colour1}>-110</span>
                              </p>
                            </div>
                          </div>
                          {/* grid item end */}
                        </div>
                      </div>
                      <div className="tab-pane fade" id="nav-tennis-inplay" role="tabpanel" aria-labelledby="nav-tennis-tab">
                        <div className={styles.Live__Grid__Container}>
                          <div className={styles.Live__Grid__Item} />
                          <div className={styles.Live__Grid__Item}>
                            <div className={styles.Live__Content__Field}>
                              <p>Spread</p>
                            </div>
                          </div>
                          <div className={styles.Live__Grid__Item}>
                            <div className={styles.Live__Content__Field}>
                              <p>Money Line</p>
                            </div>
                          </div>
                          <div className={styles.Live__Grid__Item}>
                            <div className={styles.Live__Content__Field}>
                              <p>Total</p>
                            </div>
                          </div>
                          {/* grid item start */}
                          <div className={styles.Live__Grid__Item}>
                            <div className="mt-2">
                              <div className={classNames('container', styles.Live__Match__Icon)}>
                                <img alt="flag" src={realMadrid} style={{height: '45px'}} />
                                <span className={styles.Live__Left__Text} style={{marginLeft: '10px'}}>Real Madrid CF</span><br />
                                <img alt="flag" className={styles.Live__Vs} src={vsIcon} /> <br />
                                <img alt="flag" src={manchesterufc} style={{height: '35px'}} />
                                <span className={styles.Live__Left__Text} style={{marginLeft: '10px'}}>Manchester United F.C.</span>
                              </div>
                            </div>
                          </div>
                          <div className={classNames(styles.Live__Grid__Item, styles.Live__Content__Bg)}>
                            <div className={styles.Live__Content__Text}>
                              <p className={styles.Live__Content__Colour}>
                                +5<br />
                                <span className={styles.Live__Content__Colour1}>-110</span>
                              </p>
                            </div>
                            <div className={styles.Live__Content__Text}>
                              <p className={styles.Live__Content__Colour}>
                                -5 <br />
                                <span className={styles.Live__Content__Colour1}>-110</span>
                              </p>
                            </div>
                          </div>
                          <div className={classNames(styles.Live__Grid__Item, styles.Live__Content__Bg)}>
                            <div className={styles.Live__Content__Text1}>
                              <p className={styles.Live__Content__Colour1}>+250</p>
                            </div>
                            <div className={styles.Live__Content__Text1}>
                              <p className={styles.Live__Content__Colour1}>-150</p>
                            </div>
                          </div>
                          <div className={classNames(styles.Live__Grid__Item, styles.Live__Content__Bg)}>
                            <div className={styles.Live__Content__Text}>
                              <p className={styles.Live__Content__Colour}>
                                Ov 46 <br />
                                <span className={styles.Live__Content__Colour1}>-110</span>
                              </p>
                            </div>
                            <div className={styles.Live__Content__Text}>
                              <p className={styles.Live__Content__Colour}>
                                Un 46 <br />
                                <span className={styles.Live__Content__Colour1}>-110</span>
                              </p>
                            </div>
                          </div>
                          {/* grid item end */}
                        </div>
                      </div>
                      <div className="tab-pane fade" id="nav-basketball-inplay" role="tabpanel" aria-labelledby="nav-basketball-tab">
                        <div className={styles.Live__Grid__Container}>
                          <div className={styles.Live__Grid__Item} />
                          <div className={styles.Live__Grid__Item}>
                            <div className={styles.Live__Content__Field}>
                              <p>Spread</p>
                            </div>
                          </div>
                          <div className={styles.Live__Grid__Item}>
                            <div className={styles.Live__Content__Field}>
                              <p>Money Line</p>
                            </div>
                          </div>
                          <div className={styles.Live__Grid__Item}>
                            <div className={styles.Live__Content__Field}>
                              <p>Total</p>
                            </div>
                          </div>
                          {/* grid item start */}
                          <div className={styles.Live__Grid__Item}>
                            <div className="mt-2">
                              <div className={classNames('container', styles.Live__Match__Icon)}>
                                <img alt="flag" src={realMadrid} style={{height: '45px'}} />
                                <span className={styles.Live__Left__Text} style={{marginLeft: '10px'}}>Real Madrid CF</span><br />
                                <img alt="flag" className={styles.Live__Vs} src={vsIcon} /> <br />
                                <img alt="flag" src={manchesterufc} style={{height: '35px'}} />
                                <span className={styles.Live__Left__Text} style={{marginLeft: '10px'}}>Manchester United F.C.</span>
                              </div>
                            </div>
                          </div>
                          <div className={classNames(styles.Live__Grid__Item, styles.Live__Content__Bg)}>
                            <div className={styles.Live__Content__Text}>
                              <p className={styles.Live__Content__Colour}>
                                +5<br />
                                <span className={styles.Live__Content__Colour1}>-110</span>
                              </p>
                            </div>
                            <div className={styles.Live__Content__Text}>
                              <p className={styles.Live__Content__Colour}>
                                -5 <br />
                                <span className={styles.Live__Content__Colour1}>-110</span>
                              </p>
                            </div>
                          </div>
                          <div className={classNames(styles.Live__Grid__Item, styles.Live__Content__Bg)}>
                            <div className={styles.Live__Content__Text1}>
                              <p className={styles.Live__Content__Colour1}>+250</p>
                            </div>
                            <div className={styles.Live__Content__Text1}>
                              <p className={styles.Live__Content__Colour1}>-150</p>
                            </div>
                          </div>
                          <div className={classNames(styles.Live__Grid__Item, styles.Live__Content__Bg)}>
                            <div className={styles.Live__Content__Text}>
                              <p className={styles.Live__Content__Colour}>
                                Ov 46 <br />
                                <span className={styles.Live__Content__Colour1}>-110</span>
                              </p>
                            </div>
                            <div className={styles.Live__Content__Text}>
                              <p className={styles.Live__Content__Colour}>
                                Un 46 <br />
                                <span className={styles.Live__Content__Colour1}>-110</span>
                              </p>
                            </div>
                          </div>
                          {/* grid item end */}
                        </div>
                      </div>
                      <div className="tab-pane fade" id="nav-icehockey-inplay" role="tabpanel" aria-labelledby="nav-icehockey-tab">
                        <div className={styles.Live__Grid__Container}>
                          <div className={styles.Live__Grid__Item} />
                          <div className={styles.Live__Grid__Item}>
                            <div className={styles.Live__Content__Field}>
                              <p>Spread</p>
                            </div>
                          </div>
                          <div className={styles.Live__Grid__Item}>
                            <div className={styles.Live__Content__Field}>
                              <p>Money Line</p>
                            </div>
                          </div>
                          <div className={styles.Live__Grid__Item}>
                            <div className={styles.Live__Content__Field}>
                              <p>Total</p>
                            </div>
                          </div>
                          {/* grid item start */}
                          <div className={styles.Live__Grid__Item}>
                            <div className="mt-2">
                              <div className={classNames('container', styles.Live__Match__Icon)}>
                                <img alt="flag" src={realMadrid} style={{height: '45px'}} />
                                <span className={styles.Live__Left__Text} style={{marginLeft: '10px'}}>Real Madrid CF</span><br />
                                <img alt="flag" className={styles.Live__Vs} src={vsIcon} /> <br />
                                <img alt="flag" src={manchesterufc} style={{height: '35px'}} />
                                <span className={styles.Live__Left__Text} style={{marginLeft: '10px'}}>Manchester United F.C.</span>
                              </div>
                            </div>
                          </div>
                          <div className={classNames(styles.Live__Grid__Item, styles.Live__Content__Bg)}>
                            <div className={styles.Live__Content__Text}>
                              <p className={styles.Live__Content__Colour}>
                                +5<br />
                                <span className={styles.Live__Content__Colour1}>-110</span>
                              </p>
                            </div>
                            <div className={styles.Live__Content__Text}>
                              <p className={styles.Live__Content__Colour}>
                                -5 <br />
                                <span className={styles.Live__Content__Colour1}>-110</span>
                              </p>
                            </div>
                          </div>
                          <div className={classNames(styles.Live__Grid__Item, styles.Live__Content__Bg)}>
                            <div className={styles.Live__Content__Text1}>
                              <p className={styles.Live__Content__Colour1}>+250</p>
                            </div>
                            <div className={styles.Live__Content__Text1}>
                              <p className={styles.Live__Content__Colour1}>-150</p>
                            </div>
                          </div>
                          <div className={classNames(styles.Live__Grid__Item, styles.Live__Content__Bg)}>
                            <div className={styles.Live__Content__Text}>
                              <p className={styles.Live__Content__Colour}>
                                Ov 46 <br />
                                <span className={styles.Live__Content__Colour1}>-110</span>
                              </p>
                            </div>
                            <div className={styles.Live__Content__Text}>
                              <p className={styles.Live__Content__Colour}>
                                Un 46 <br />
                                <span className={styles.Live__Content__Colour1}>-110</span>
                              </p>
                            </div>
                          </div>
                          {/* grid item end */}
                        </div>
                      </div>
                      <div className="tab-pane fade" id="nav-volleyball-inplay" role="tabpanel" aria-labelledby="nav-volleyball-tab">
                        <div className={styles.Live__Grid__Container}>
                          <div className={styles.Live__Grid__Item} />
                          <div className={styles.Live__Grid__Item}>
                            <div className={styles.Live__Content__Field}>
                              <p>Spread</p>
                            </div>
                          </div>
                          <div className={styles.Live__Grid__Item}>
                            <div className={styles.Live__Content__Field}>
                              <p>Money Line</p>
                            </div>
                          </div>
                          <div className={styles.Live__Grid__Item}>
                            <div className={styles.Live__Content__Field}>
                              <p>Total</p>
                            </div>
                          </div>
                          {/* grid item start */}
                          <div className={styles.Live__Grid__Item}>
                            <div className="mt-2">
                              <div className={classNames('container', styles.Live__Match__Icon)}>
                                <img alt="flag" src={realMadrid} style={{height: '45px'}} />
                                <span className={styles.Live__Left__Text} style={{marginLeft: '10px'}}>Real Madrid CF</span><br />
                                <img alt="flag" className={styles.Live__Vs} src={vsIcon} /> <br />
                                <img alt="flag" src={manchesterufc} style={{height: '35px'}} />
                                <span className={styles.Live__Left__Text} style={{marginLeft: '10px'}}>Manchester United F.C.</span>
                              </div>
                            </div>
                          </div>
                          <div className={classNames(styles.Live__Grid__Item, styles.Live__Content__Bg)}>
                            <div className={styles.Live__Content__Text}>
                              <p className={styles.Live__Content__Colour}>
                                +5<br />
                                <span className={styles.Live__Content__Colour1}>-110</span>
                              </p>
                            </div>
                            <div className={styles.Live__Content__Text}>
                              <p className={styles.Live__Content__Colour}>
                                -5 <br />
                                <span className={styles.Live__Content__Colour1}>-110</span>
                              </p>
                            </div>
                          </div>
                          <div className={classNames(styles.Live__Grid__Item, styles.Live__Content__Bg)}>
                            <div className={styles.Live__Content__Text1}>
                              <p className={styles.Live__Content__Colour1}>+250</p>
                            </div>
                            <div className={styles.Live__Content__Text1}>
                              <p className={styles.Live__Content__Colour1}>-150</p>
                            </div>
                          </div>
                          <div className={classNames(styles.Live__Grid__Item, styles.Live__Content__Bg)}>
                            <div className={styles.Live__Content__Text}>
                              <p className={styles.Live__Content__Colour}>
                                Ov 46 <br />
                                <span className={styles.Live__Content__Colour1}>-110</span>
                              </p>
                            </div>
                            <div className={styles.Live__Content__Text}>
                              <p className={styles.Live__Content__Colour}>
                                Un 46 <br />
                                <span className={styles.Live__Content__Colour1}>-110</span>
                              </p>
                            </div>
                          </div>
                          {/* grid item end */}
                        </div>
                      </div>
                      <div className="tab-pane fade" id="nav-tabletennis-inplay" role="tabpanel" aria-labelledby="nav-tabletennis-tab">
                        <div className={styles.Live__Grid__Container}>
                          <div className={styles.Live__Grid__Item} />
                          <div className={styles.Live__Grid__Item}>
                            <div className={styles.Live__Content__Field}>
                              <p>Spread</p>
                            </div>
                          </div>
                          <div className={styles.Live__Grid__Item}>
                            <div className={styles.Live__Content__Field}>
                              <p>Money Line</p>
                            </div>
                          </div>
                          <div className={styles.Live__Grid__Item}>
                            <div className={styles.Live__Content__Field}>
                              <p>Total</p>
                            </div>
                          </div>
                          {/* grid item start */}
                          <div className={styles.Live__Grid__Item}>
                            <div className="mt-2">
                              <div className={classNames('container', styles.Live__Match__Icon)}>
                                <img alt="flag" src={realMadrid} style={{height: '45px'}} />
                                <span className={styles.Live__Left__Text} style={{marginLeft: '10px'}}>Real Madrid CF</span><br />
                                <img alt="flag" className={styles.Live__Vs} src={vsIcon} /> <br />
                                <img alt="flag" src={manchesterufc} style={{height: '35px'}} />
                                <span className={styles.Live__Left__Text} style={{marginLeft: '10px'}}>Manchester United F.C.</span>
                              </div>
                            </div>
                          </div>
                          <div className={classNames(styles.Live__Grid__Item, styles.Live__Content__Bg)}>
                            <div className={styles.Live__Content__Text}>
                              <p className={styles.Live__Content__Colour}>
                                +5<br />
                                <span className={styles.Live__Content__Colour1}>-110</span>
                              </p>
                            </div>
                            <div className={styles.Live__Content__Text}>
                              <p className={styles.Live__Content__Colour}>
                                -5 <br />
                                <span className={styles.Live__Content__Colour1}>-110</span>
                              </p>
                            </div>
                          </div>
                          <div className={classNames(styles.Live__Grid__Item, styles.Live__Content__Bg)}>
                            <div className={styles.Live__Content__Text1}>
                              <p className={styles.Live__Content__Colour1}>+250</p>
                            </div>
                            <div className={styles.Live__Content__Text1}>
                              <p className={styles.Live__Content__Colour1}>-150</p>
                            </div>
                          </div>
                          <div className={classNames(styles.Live__Grid__Item, styles.Live__Content__Bg)}>
                            <div className={styles.Live__Content__Text}>
                              <p className={styles.Live__Content__Colour}>
                                Ov 46 <br />
                                <span className={styles.Live__Content__Colour1}>-110</span>
                              </p>
                            </div>
                            <div className={styles.Live__Content__Text}>
                              <p className={styles.Live__Content__Colour}>
                                Un 46 <br />
                                <span className={styles.Live__Content__Colour1}>-110</span>
                              </p>
                            </div>
                          </div>
                          {/* grid item end */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Live;
