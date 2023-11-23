import React from 'react';

import styles from './Trending.module.scss';
import lafc from '../../assets/img/lafc.png';
import lag from '../../assets/img/lag.png';
import nmu from '../../assets/img/NMU.png';
import prfc from '../../assets/img/PRFC.png';
import prsc from '../../assets/img/PRSC.png';
import tbr from '../../assets/img/TBR.png';
import trendingGames from '../../assets/img/TrendingGames.png';

const Trending = () => {
  return (
    <div className={styles.trending}>
      <div className="container">
        <div className={styles.profileTeam}>
          <div className={styles.trendingGameHead}>
            <h1>
              <img alt="trending games" src={trendingGames} />
              Live Trending Games
            </h1>
          </div>
          <div className={styles.trendingGameCards}>
            <div className={styles.trendingGameCard}>
              <div className={styles.trendingGameCardHeader}>
                <h3>Major League Soccer</h3>
                <i className="fas fa-chevron-circle-right"></i>
              </div>
              <div className={styles.trendingGameCardBody}>
                <div className={styles.trendingLeftTeam}>
                  <img alt="lag" src={lag} />
                  <span>LAG</span>
                </div>
                <div className={styles.trendingResultBox}>
                  <div className={styles.teamTrendingResultBoxTop}>
                    <span className={styles.teamTrendingResultBox}>3</span>
                    <span className={styles.teamTrendingResultDv}>-</span>
                    <span className={styles.teamTrendingResultBox}>2</span>
                  </div>
                  <div className={styles.trendingTeamResultTime}>
                    <span>86:43:03 min</span>
                  </div>
                </div>
                <div className={styles.rightTeam}>
                  <img alt="lafc" src={lafc} />
                  <span>LAFC</span>
                </div>
              </div>
            </div>
            <div className={styles.trendingGameCard}>
              <div className={styles.trendingGameCardHeader}>
                <h3>United Soccer League</h3>
                <i className="fas fa-chevron-circle-right"></i>
              </div>
              <div className={styles.trendingGameCardBody}>
                <div className={styles.trendingLeftTeam}>
                  <img alt="prfc" src={prfc} />
                  <span>PRFC</span>
                </div>
                <div className={styles.trendingResultBox}>
                  <div className={styles.teamTrendingResultBoxTop}>
                    <span className={styles.teamTrendingResultBox}>3</span>
                    <span className={styles.teamTrendingResultDv}>-</span>
                    <span className={styles.teamTrendingResultBox}>2</span>
                  </div>
                  <div className={styles.trendingTeamResultTime}>
                    <span>86:43:03 min</span>
                  </div>
                </div>
                <div className={styles.rightTeam}>
                  <img alt="nmu" src={nmu} />
                  <span>NMU</span>
                </div>
              </div>
            </div>
            <div className={styles.trendingGameCard}>
              <div className={styles.trendingGameCardHeader}>
                <h3>USL Championship</h3>
                <i className="fas fa-chevron-circle-right"></i>
              </div>
              <div className={styles.trendingGameCardBody}>
                <div className={styles.trendingLeftTeam}>
                  <img alt="tbr" src={tbr} />
                  <span>TBR</span>
                </div>
                <div className={styles.trendingResultBox}>
                  <div className={styles.teamTrendingResultBoxTop}>
                    <span className={styles.teamTrendingResultBox}>3</span>
                    <span className={styles.teamTrendingResultDv}>-</span>
                    <span className={styles.teamTrendingResultBox}>2</span>
                  </div>
                  <div className={styles.trendingTeamResultTime}>
                    <span>86:43:03 min</span>
                  </div>
                </div>
                <div className={styles.rightTeam}>
                  <img alt="prsc" src={prsc} />
                  <span>PRSC</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trending;
