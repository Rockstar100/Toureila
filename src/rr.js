import React from 'react'
import './FlightResult.css'
function FlightResult() {
  return (
<div>  <main>
    <div className="container">
      <section className="dashboard">
        <section className="flights">
          <header>
            <p className="flights__total">183 <span>results</span></p>
           
          </header>
          <section className="flights-list">
            <article className="flight-card flights-list__item">
              <div className="flight-card__airlines">
                <div className="flight-card__airline">
                  <img src="//unsplash.it/30/30" alt />
                </div>
                <div className="flight-card__airline">
                  <img src="//unsplash.it/30/30" alt />
                </div>
              </div>
              <div className="flight-card__departure">
                <time className="flight-card__time">10:30 AM</time>
                <h2 className="flight-card__city">Barcelona</h2>
                <time className="flight-card__day">Tuesday, Apr 21, 2020</time>
              </div>
              <div className="flight-card__route">
                <p className="flight-card__duration">1hr 50m</p>
                <div className="flight-card__route-line route-line" aria-hidden="true">
                  <div className="route-line__stop route-line__start" aria-hidden="true" />
                  <div className="route-line__stop route-line__end" aria-hidden="true" />
                </div>
                <p className="flight-card__type">Non-stop</p>
              </div>
              <div className="flight-card__arrival">
                <time className="flight-card__time">10:30 AM</time>
                <h2 className="flight-card__city">Rome</h2>
                <time className="flight-card__day">Tuesday, Apr 21, 2020</time>
              </div>
              <div className="flight-card__action">
                <p className="flight-card__price styled-price"><sup>$</sup>93<sub>USD</sub></p>
                <button className="flight-card__cta button button--orange">Select</button>
              </div>
            </article>
            <article className="flight-card flights-list__item">
            
              <div className="flight-card__departure">
                <time className="flight-card__time">7:45 AM</time>
                <h2 className="flight-card__city">Barcelona</h2>
                <time className="flight-card__day">Tuesday, Apr 21, 2020</time>
              </div>
              <div className="flight-card__route">
                <p className="flight-card__duration">7hr 55m</p>
                <div className="flight-card__route-line route-line" aria-hidden="true">
                  <div className="route-line__stop route-line__start" aria-hidden="true" />
                  <div className="route-line__stop route-line__end" aria-hidden="true" />
                  <div className="route-line__stop" aria-hidden="true" style={{left: '50%'}}>
                    <p className="route-line__stop-name">VIE</p>
                  </div>
                </div>
              </div>
              <div className="flight-card__arrival">
                <time className="flight-card__time">3:40PM</time>
                <h2 className="flight-card__city">Rome</h2>
                <time className="flight-card__day">Tuesday, Apr 21, 2020</time>
              </div>
              <div className="flight-card__action">
                <p className="flight-card__price styled-price"><sup>$</sup>68<sub>USD</sub></p>
                <button className="flight-card__cta button button--orange">Select</button>
              </div>
            </article>
            <article className="flight-card flights-list__item">
              <div className="flight-card__airlines">
                <div className="flight-card__airline">
                  <img src="//unsplash.it/30/30" alt />
                </div>
                <div className="flight-card__airline">
                  <img src="//unsplash.it/30/30" alt />
                </div>
              </div>
              <div className="flight-card__departure">
                <time className="flight-card__time">10:35 AM</time>
                <h2 className="flight-card__city">Barcelona</h2>
                <time className="flight-card__day">Tuesday, Apr 21, 2020</time>
              </div>
              <div className="flight-card__route">
                <p className="flight-card__duration">17hr 15m</p>
                <div className="flight-card__route-line route-line" aria-hidden="true">
                  <div className="route-line__stop route-line__start" aria-hidden="true" />
                  <div className="route-line__stop route-line__end" aria-hidden="true" />
                  <div className="route-line__stop" aria-hidden="true" style={{left: '25%'}}>
                    <p className="route-line__stop-name">PMI</p>
                  </div>
                  <div className="route-line__stop" aria-hidden="true" style={{left: '75%'}}>
                    <p className="route-line__stop-name">VLC</p>
                  </div>
                </div>
              </div>
              <div className="flight-card__arrival">
                <time className="flight-card__time">3:50PM</time>
                <h2 className="flight-card__city">Rome</h2>
                <time className="flight-card__day">Tuesday, Apr 21, 2020</time>
              </div>
              <div className="flight-card__action">
                <p className="flight-card__price styled-price"><sup>$</sup>82<sub>USD</sub></p>
                <button className="flight-card__cta button button--orange">Select</button>
              </div>
            </article>
            <article className="flight-card flights-list__item">
              <div className="flight-card__airlines">
                <div className="flight-card__airline">
                  <img src="//unsplash.it/30/30" alt />
                </div>
                <div className="flight-card__airline">
                  <img src="//unsplash.it/30/30" alt />
                </div>
              </div>
              <div className="flight-card__departure">
                <time className="flight-card__time">9:30 AM</time>
                <h2 className="flight-card__city">Barcelona</h2>
                <time className="flight-card__day">Tuesday, Apr 21, 2020</time>
              </div>
              <div className="flight-card__route">
                <p className="flight-card__duration">14hr 25m</p>
                <div className="flight-card__route-line route-line" aria-hidden="true">
                  <div className="route-line__stop route-line__start" aria-hidden="true" />
                  <div className="route-line__stop route-line__end" aria-hidden="true" />
                  <div className="route-line__stop" aria-hidden="true" style={{left: '25%'}}>
                    <p className="route-line__stop-name">CGN</p>
                  </div>
                  <div className="route-line__stop" aria-hidden="true" style={{left: '75%'}}>
                    <p className="route-line__stop-name">KTW</p>
                  </div>
                </div>
              </div>
              <div className="flight-card__arrival">
                <time className="flight-card__time">11:55 PM</time>
                <h2 className="flight-card__city">Rome</h2>
                <time className="flight-card__day">Tuesday, Apr 22, 2020</time>
              </div>
              <div className="flight-card__action">
                <p className="flight-card__price styled-price"><sup>$</sup>91<sub>USD</sub></p>
                <button className="flight-card__cta button button--orange">Select</button>
              </div>
            </article>
          </section>
        </section>
      </section>
    </div>
  </main></div>

  )
}

export default FlightResult