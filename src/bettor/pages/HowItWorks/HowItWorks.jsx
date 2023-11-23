import React, { useEffect } from 'react';
import { Accordion, Button, Card, Nav, Tab } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

import './HowItWorks.scss';
// import howItWork from '../../assets/img/howitwork.png';

import { AppAction } from '../../store/actions';

const HowItWorks = () => {
  const dispatch = useDispatch();
  const allFrequentlyAskedQuestions = useSelector(state => state.list.frequentlyAskedQuestion?.all || []);
  const allVideoTutorials = useSelector(state => state.list.videoTutorial?.all || []);
  useEffect(() => {
    dispatch(AppAction.listAllFrequentlyAskedQuestions());
    dispatch(AppAction.listAllVideoTutorials());
  }, [dispatch]);
  return (
    <div className="container w-1295 opens-my">
      <div className="dash-content profile-team">
        <div className="row">
          <div className="col">
            <div className="dash-content-head">
              {/* <h5><img src={howItWork} alt="" /> How It Work</h5> */}
              <h5> How It Works</h5>
            </div>
            <Tab.Container defaultActiveKey="video-tutorials">
              <div className="profile-team-tab">
                <Nav as="ul" className="nav-tabs">
                  <Nav.Item as="li">
                    <Nav.Link eventKey="video-tutorials">Video Tutorials</Nav.Link>
                  </Nav.Item>
                  <Nav.Item as="li">
                    <Nav.Link eventKey="frequently-asked-questions">FAQ</Nav.Link>
                  </Nav.Item>
                </Nav>
                <Tab.Content>
                  <Tab.Pane eventKey="video-tutorials">
                    <Tab.Container defaultActiveKey="0">
                      <div className="row">
                        <div className="col-md-3">
                          <div className="video-tutorial-nav">
                            <div className="active-video-list">
                              <Nav as="div" className="nav-tabs">
                                {allVideoTutorials.map((videoTutorial, i) => (
                                  <Nav.Link eventKey={i} key={i}>
                                    <h6>{videoTutorial.title}</h6>
                                    <img alt="video tutorial" className="img-fluid" src={videoTutorial.image} />
                                  </Nav.Link>
                                ))}
                              </Nav>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-9">
                          <Tab.Content>
                            {allVideoTutorials.map((videoTutorial, i) => (
                              <Tab.Pane eventKey={i} key={i}>
                                <div className="video-field">
                                  <iframe
                                    height="500px"
                                    src={videoTutorial.video_url}
                                    title={videoTutorial.title}
                                    width="100%"
                                  />
                                </div>
                              </Tab.Pane>
                            ))}
                          </Tab.Content>
                        </div>
                      </div>
                    </Tab.Container>
                  </Tab.Pane>
                  <Tab.Pane eventKey="frequently-asked-questions">
                    <div className="row">
                      <div className="col-lg-10 mx-auto">
                        <Accordion className="ask-question">
                          {allFrequentlyAskedQuestions.map((frequentlyAskedQuestion, i) => (
                            <FrequentlyAskedQuestion frequentlyAskedQuestion={frequentlyAskedQuestion} key={i} />
                          ))}
                        </Accordion>
                      </div>
                    </div>
                  </Tab.Pane>
                </Tab.Content>
              </div>
            </Tab.Container>
          </div>
        </div>
      </div>
    </div>
  );
};

const FrequentlyAskedQuestion = ({ frequentlyAskedQuestion }) => {
  return (
    <Card>
      <Card.Header>
        <h4>
          <Accordion.Toggle
            as={Button}
            className="btn-block text-left"
            eventKey={String(frequentlyAskedQuestion.id)}
            variant="link"
          >
            {frequentlyAskedQuestion.question}
            <i className="fas fa-plus float-right"></i>
          </Accordion.Toggle>
        </h4>
      </Card.Header>
      <Accordion.Collapse eventKey={String(frequentlyAskedQuestion.id)}>
        <Card.Body>
          {frequentlyAskedQuestion.answer}
        </Card.Body>
      </Accordion.Collapse>
    </Card>
  );
};

export default HowItWorks;
