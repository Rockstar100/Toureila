import React, { useEffect, useState } from 'react';
import './FlightResult.css';
import moment from 'moment';
import currency from 'currency.js';
import axios from 'axios';



function FlightResult({ flights }) {
  const [exchangeRate, setExchangeRate] = useState(null);

  useEffect(() => {
    fetchExchangeRate();
  }, []);

  async function fetchExchangeRate() {
    try {
      const response = await axios.get('https://api.exchangerate-api.com/v4/latest/USD');
      const { rates } = response.data;
      setExchangeRate(rates.INR);
    } catch (error) {
      console.error('Failed to fetch exchange rate:', error);
    }
  }
  function convertCurrency(price) {
    if (exchangeRate) {
      const convertedPrice = currency(price).multiply(exchangeRate).value;
      return convertedPrice.toLocaleString('en-IN', { style: 'currency', currency: 'INR' }).slice(1);
    }
    return '';
  }

  return (

    <div>
      <main>
        <div className="container">
          <section className="dashboard">
            <section className="flights">
              <header>
                <p className="flights__total">
                  {flights.length} <span>results</span>
                </p>
              </header>
              <section className="flights-list">
                {flights.map((flight, index) => (
                  <article className="flight-card flights-list__item" key={index}>
                    <div className="flight-card__airlines">
                      {flight.segments.map((segment) =>
                        segment.legs.map((leg) => (
                          <div className="flight-card__airline" key={leg.marketingCarrier?.code}>
                            <img src={leg?.marketingCarrier?.logoUrl} alt="" height="50px" />
                          </div>
                        ))
                      )}
                    </div>
                    {flight.segments.map((segment) =>
                      segment.legs.length === 1 ? (
                        segment.legs.slice(0, 1).map((leg, index) => {
                          const arrivalTime = moment(leg.arrivalDateTime);
                          const departureTime = moment(leg.departureDateTime);
                          const duration = moment.duration(arrivalTime.diff(departureTime));
                          const hours = duration.hours();
                          const minutes = duration.minutes();
                          const seconds = duration.seconds();

                          return (
                            <React.Fragment key={index}>
                              <div className="flight-card__departure">
                                <h2 className="flight-card__city">{leg.marketingCarrier?.displayName}</h2>
                                <time className="flight-card__time">{moment(leg.arrivalDateTime).format('hh:mm A')}</time>
                                <h2 className="flight-card__city">{leg.originStationCode}</h2>
                                <time className="flight-card__day">{moment(leg.arrivalDateTime).format('dddd, MMM DD, YYYY')}</time>
                              </div>
                              <div className="flight-card__route" key={leg.marketingCarrier?.code}>
                                <p className="flight-card__duration">
                                  {hours > 0 && `${hours}h `}
                                  {minutes > 0 && `${minutes}m `}
                                  {seconds > 0 && `${seconds}s`}
                                </p>
                                <div className="flight-card__route-line route-line" aria-hidden="true">
                                  <div className="route-line__stop route-line__start" aria-hidden="true" />
                                  <div className="route-line__stop route-line__end" aria-hidden="true" />
                                </div>
                                <p className="flight-card__type">Non-stop</p>
                              </div>
                              <div className="flight-card__arrival" key={leg.marketingCarrier?.code}>
                                <div>
                                  <time className="flight-card__time">{moment(leg.departureDateTime).format('hh:mm A')}</time>
                                  <h2 className="flight-card__city">{leg.destinationStationCode}</h2>
                                  <time className="flight-card__day">{moment(leg.departureDateTime).format('dddd, MMM DD, YYYY')}</time>
                                </div>
                              </div>
                            </React.Fragment>
                          );
                        })
                      ) : segment.legs.length === 2 ? (
                        <React.Fragment key={index}>
                          {/* Your JSX code for segment.legs.length === 2 */}
                          {(() => {
                            const arrivalTime = moment(segment.legs[0].arrivalDateTime);
                            const departureTime = moment(segment.legs[1].departureDateTime);
                            const duration = moment.duration(arrivalTime.diff(departureTime));
                            const hours = duration.hours();
                            const minutes = duration.minutes();
                            const seconds = duration.seconds();

                            return (
                              <React.Fragment>
                                <div className="flight-card__departure">
                                  <h2 className="flight-card__city">{segment.legs[0].marketingCarrier?.displayName}</h2>
                                  <time className="flight-card__time">{moment(segment.legs[0].arrivalDateTime).format('hh:mm A')}</time>
                                  <h2 className="flight-card__city">{segment.legs[0].originStationCode}</h2>
                                  <time className="flight-card__day">{moment(segment.legs[0].arrivalDateTime).format('dddd, MMM DD, YYYY')}</time>
                                </div>
                                <div className="flight-card__route">
                                  <p className="flight-card__duration"> {hours > 0 && `${hours}h `}
                                  {minutes > 0 && `${minutes}m `}
                                  {seconds > 0 && `${seconds}s`}</p>
                                  <div className="flight-card__route-line route-line" aria-hidden="true">
                                    <div className="route-line__stop route-line__start" aria-hidden="true" />
                                    <div className="route-line__stop route-line__end" aria-hidden="true" />
                                    <div className="route-line__stop" aria-hidden="true" style={{ left: '50%' }}>
                                      <p className="route-line__stop-name">{segment.legs[0].destinationStationCode}</p>
                                    </div>
                                  </div>
                                </div>
                                <div className="flight-card__arrival" key={segment.legs[1].marketingCarrier?.code}>
                                  <div>
                                    <time className="flight-card__time">{moment(segment.legs[1].departureDateTime).format('hh:mm A')}</time>
                                    <h2 className="flight-card__city">{segment.legs[1].destinationStationCode}</h2>
                                    <time className="flight-card__day">{moment(segment.legs[1].departureDateTime).format('dddd, MMM DD, YYYY')}</time>
                                  </div>
                                </div>
                              </React.Fragment>
                            );
                          })()}
                        </React.Fragment>
                      ) : segment.legs.length === 3 ? (
                        <React.Fragment key={index}>
                          {/* Your JSX code for segment.legs.length === 2 */}
                          {(() => {
                            const arrivalTime = moment(segment.legs[0].arrivalDateTime);
                            const departureTime = moment(segment.legs[2].departureDateTime);
                            const duration = moment.duration(arrivalTime.diff(departureTime));
                            const hours = duration.hours();
                            const minutes = duration.minutes();
                            const seconds = duration.seconds();

                            return (
                              <React.Fragment>
                                <div className="flight-card__departure">
                                  <h2 className="flight-card__city">{segment.legs[0].marketingCarrier?.displayName}</h2>
                                  <time className="flight-card__time">{moment(segment.legs[0].arrivalDateTime).format('hh:mm A')}</time>
                                  <h2 className="flight-card__city">{segment.legs[0].originStationCode}</h2>
                                  <time className="flight-card__day">{moment(segment.legs[0].arrivalDateTime).format('dddd, MMM DD, YYYY')}</time>
                                </div>
                                <div className="flight-card__route">
                                  <p className="flight-card__duration"> {hours > 0 && `${hours}h `}
                                  {minutes > 0 && `${minutes}m `}
                                  {seconds > 0 && `${seconds}s`}</p>
                                  <div className="flight-card__route-line route-line" aria-hidden="true">
                                    <div className="route-line__stop route-line__start" aria-hidden="true" />
                                    <div className="route-line__stop route-line__end" aria-hidden="true" />
                                    <div className="route-line__stop" aria-hidden="true" style={{ left: '25%' }}>
                                      <p className="route-line__stop-name">{segment.legs[0].destinationStationCode}</p>
                                    </div>
                                    <div className="route-line__stop" aria-hidden="true" style={{left: '70%'}}>
                    <p className="route-line__stop-name">{segment.legs[1].destinationStationCode}</p>
                  </div>
                                  </div>
                                </div>
                                <div className="flight-card__arrival" key={segment.legs[2].marketingCarrier?.code}>
                                  <div>
                                    <time className="flight-card__time">{moment(segment.legs[2].departureDateTime).format('hh:mm A')}</time>
                                    <h2 className="flight-card__city">{segment.legs[2].destinationStationCode}</h2>
                                    <time className="flight-card__day">{moment(segment.legs[2].departureDateTime).format('dddd, MMM DD, YYYY')}</time>
                                  </div>
                                </div>
                              </React.Fragment>
                            );
                          })()}
                        </React.Fragment>
                      ) : null 
                    )}



                    <div className="flight-card__action">
                      <p className="flight-card__price styled-price" >
                        <sup>₹</sup>
                        {convertCurrency(flight?.purchaseLinks[0]?.totalPrice)}
                        <sub>INR</sub>
                      </p>
                      <button href={flight?.purchaseLinks[0]?.url} className="flight-card__cta button button--orange"> <a href={flight?.purchaseLinks[0]?.url} style={{ color: 'white', textDecoration: 'none', fontSize: '16px' }}>Book Now</a></button>


                    </div>
                  </article>
                ))}
              </section>
            </section>
          </section>
        </div>
      </main>
    </div>
  );
}

export default FlightResult;
{/* <article className="flight-card flights-list__item">
              <div className="flight-card__airlines">
                <div className="flight-card__airline">
                  <img src="//unsplash.it/30/30" alt />
                </div>
                <div className="flight-card__airline">
                  <img src="//unsplash.it/30/30" alt />
                </div>
              </div>
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
            </article> */}