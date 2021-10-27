/*  This component is for the homepage of our website  */
import React, { useState, useEffect } from "react";
import "./Home.css";
import { Carousel, Container, Row, Col, Card, CardGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AllProducts from '../API/AllProducts';
import AllUsers from '../API/AllUsers';
import FadeIn from 'react-fade-in';
import { FaRegAddressCard, FaChessKing, FaPagelines } from "react-icons/fa";

const Home = () => {
  /* State Hook */
  const [allProducts, setProduct] = useState([]);
  const [allDesigners, setDesigner] = useState([]);
  const [topCollection, setTopCollection] = useState([]);//create top collection
  const [displayStyle, setDisplay] = useState({ "display": "none" });

  //data fetch
  useEffect(() => {
    (async () => {
      const designerData = await AllUsers();
      const productData = await AllProducts();
      setDesigner(designerData);
      setProduct(productData);
      getTopCollection();
    })();
  }, []);

  //prepare state hook
  useEffect(() => {
    getTopCollection();
  }, [allProducts]);

  /* Top Collection - randomly show four items */
  const getTopCollection = () => {
    let copiedProps = allProducts.slice();
    let selectedTopPicks = [];
    while ((selectedTopPicks.length < 5) && (copiedProps.length > 0)) {
      selectedTopPicks.push(copiedProps[Math.floor(Math.random() * copiedProps.length)]);//randomly push 
      copiedProps.splice(Math.floor(Math.random() * copiedProps.length), 1); //delete the target
    }
    setTopCollection(selectedTopPicks); //assign, not callback function
  };

  /* Show/Hide product description */
  const showDescription = (e) => {
    e.target.nextSibling.attributes[1].value === "display: none;" ?
      e.target.nextSibling.attributes[1].value = "display: block;"
      : e.target.nextSibling.attributes[1].value = "display: none;";
  };

  const hideDescription = (e) => {
    e.target.parentNode.parentNode.attributes[1].value === "display: block;" ?
      e.target.parentNode.parentNode.attributes[1].value = "display: none;"
      : e.target.parentNode.parentNode.attributes[1].value = "display: block;";
  };

  return (
    <>
      {((!allProducts.length == 0) && (!allDesigners.length == 0)) ? (
        //when data is ready
        <>
          {/* Hero Contents */}
          <section className="heroContentsSection">
            <FadeIn>
              <Carousel
                fade={true}
                interval={1500}
                autoPlay={true}
                controls={false}
                indicators={true}>

                <Carousel.Item
                  style={{
                    background: "url(./img/heroContent1.jpg)",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat"
                  }}>
                  <Carousel.Caption>
                    <p>Lorem ipsum dolor sit amet</p>
                    <h2>Elegance & Luxury</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus cupiditate quas, quibusdam est distinctio odit maxime totam dolorum cumque atque facilis, reprehenderit perferendis esse nam inventore doloribus assumenda numquam? Rerum.</p>
                    <Link
                      to={{
                        pathname: "/category",
                        state: {
                          parameter: "women's clothing"
                        }
                      }}
                      className="categoryLink">Shop the SS21 Women's Collection</Link>
                  </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item
                  style={{
                    background: "url(./img/heroContent2.jpg)",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat"
                  }}>
                  <Carousel.Caption>
                    <p>Be ready for Summer</p>
                    <h2>Summer Vibes</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <Link
                      to={{
                        pathname: "/category",
                        state: {
                          parameter: "women's clothing"
                        }
                      }}
                      className="categoryLink">Shop the SS21 Women's Collection</Link>
                  </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item
                  style={{
                    background: "url(./img/heroContent3.jpg)",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat"
                  }}>
                  <Carousel.Caption>
                    <p>Lorem ipsum dolor sit amet</p>
                    <h2>Men's Classic</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione dolorum pariatur aut sunt dolore vel unde vitae dolores, ipsa eligendi minus adipisci optio recusandae nam itaque consectetur dignissimos beatae velit.</p>
                    <Link
                      to={{
                        pathname: "/category",
                        state: {
                          parameter: "men's clothing"
                        }
                      }}
                      className="categoryLink">Shop the SS21 Men's Classic</Link>
                  </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item
                  style={{
                    background: "url(./img/heroContent4.jpg)",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat"
                  }}>
                  <Carousel.Caption>
                    <p>Lorem ipsum dolor sit amet</p>
                    <h2>Jewelery collections</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione dolorum pariatur aut sunt dolore vel unde vitae dolores, ipsa eligendi minus adipisci optio recusandae nam itaque consectetur dignissimos beatae velit.</p>
                    <Link
                      to={{
                        pathname: "/category",
                        state: {
                          parameter: "jewelery"
                        }
                      }}
                      className="categoryLink">Shop Summer Jewelery Collection</Link>
                  </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item
                  style={{
                    background: "url(./img/heroContent5.jpg)",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat"
                  }}>
                  <Carousel.Caption>
                    <p>Lorem ipsum dolor sit amet</p>
                    <h2>Stylish Electronics</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione dolorum pariatur aut sunt dolore vel unde vitae dolores, ipsa eligendi minus adipisci optio recusandae nam itaque consectetur dignissimos beatae velit.</p>
                    <Link
                      to={{
                        pathname: "/category",
                        state: {
                          parameter: "electronics"
                        }
                      }}
                      className="categoryLink">Shop Stylish Electronics</Link>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </FadeIn>
          </section>

          {/* Top Collection */}
          <section className="topCollectionSection">
            {topCollection.length !== 0 ? (
              <FadeIn>
                <Container fluid>
                  {/* Title and first element only */}
                  <Row>
                    <Col
                      className="titleCol"
                      style={{
                        background: "url(./img/topCollection2.jpg)",
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat"
                      }}>
                      <div className="collectionTitleContainer">
                        <div className="collectionTitle">
                          <h2>Top Deals</h2>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum doloribus temporibus ut neque tenetur, esse asperiores aut accusantium optio, eligendi autem explicabo quidem laboriosam distinctio iste! Incidunt deleniti deserunt alias!</p>
                        </div>
                      </div>
                    </Col>

                    <Col className="imgCol">
                      <h4>{topCollection[0].title}</h4>
                      <img src={topCollection[0].image} alt="item1" className="topCollectionImg" onClick={showDescription} />
                      <div className="imgHover" style={{ "display": "none" }}>
                        <Row>
                          <p>{topCollection[0].description}</p>
                          {/* Route to Detail page */}
                          <Link
                            to={{
                              pathname: "/productDetail",
                              state: {
                                product: topCollection[0],
                              },
                            }}
                            className="viewMoreBtn">View more</Link>
                          <button type="button" className="closeBtn" onClick={hideDescription}>Close</button>
                        </Row>
                      </div>
                    </Col>
                  </Row>

                  {/* Top Collection : second to last elements : looping */}
                  {(() => {
                    const html = [];
                    for (let i = 1; i < topCollection.length; i++) {
                      html.push(
                        <Col className="imgCol rowTwo" key={topCollection[i].id}>
                          <h4>{topCollection[i].title}</h4>
                          <img src={topCollection[i].image} alt="itemPhoto" className="topCollectionImg" onClick={showDescription} />
                          <div className="imgHover" style={displayStyle}>
                            <Row>
                              <p>{topCollection[i].description}</p>
                              {/* Route to Detail page */}
                              <Link
                                to={{
                                  pathname: "/productDetail",
                                  state: {
                                    product: topCollection[i],
                                  },
                                }}
                                className="viewMoreBtn">View more</Link>
                              <button type="button" className="closeBtn" onClick={hideDescription}>Close</button>
                            </Row>
                          </div>
                        </Col>
                      );
                    }
                    return <Row>{html}</Row>;
                  })()}
                </Container>
              </FadeIn>
            ) : ""}
          </section>

          {/* Desinger */}
          <section className="designers">
            <h2 className="title">Our Designers</h2>
            <CardGroup>
              {/* first ppl */}
              <Row className="topRow">
                <Card key={allDesigners[0].id} className="col">
                  <Card.Img variant="top" src="./img/zero.jpg" alt="designer0" className="designerTop" />
                  <Card.Body>
                    <Card.Title>Lead Designer : {allDesigners[0].name}</Card.Title>
                    <Card.Text><FaChessKing></FaChessKing> <span> Company: </span> {allDesigners[0].company.name}</Card.Text>
                    <Card.Text><FaPagelines></FaPagelines> <span> Web site: </span> {allDesigners[0].website}</Card.Text>
                    <Card.Text>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis vitae culpa earum libero porro, modi ipsum laudantium quasi quod pariatur.
                    </Card.Text>
                    <Card.Text><FaRegAddressCard></FaRegAddressCard> <span> Contacts: </span> {allDesigners[0].email}</Card.Text>
                  </Card.Body>
                </Card>
              </Row>
              {/* next four ppl */}
              {(() => {
                let html = [];
                for (let i = 1; i < 5; i++) {
                  html.push(
                    <Card key={allDesigners[i].id} className="col">
                      <Card.Img variant="top" src={`./img/designer${i}.jpg`} alt={`designer${i}`} className="designerImg" />
                      <Card.Body>
                        <Card.Title>{allDesigners[i].name}</Card.Title>
                        <Card.Text><FaChessKing></FaChessKing> <span> Company: </span>{allDesigners[i].company.name}</Card.Text>
                        <Card.Text><FaPagelines></FaPagelines> <span> Web site: </span>{allDesigners[i].website}</Card.Text>
                        <Card.Text>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis vitae culpa earum libero porro, modi ipsum laudantium quasi quod pariatur.
                        </Card.Text>
                        <Card.Text><FaRegAddressCard></FaRegAddressCard> <span> Contacts: </span>{allDesigners[i].email}</Card.Text>
                      </Card.Body>
                    </Card>
                  );
                }
                return <Row>{html}</Row>;
              })()}
            </CardGroup>
          </section>
        </>
      ) : <h1 className="loading">Loading.... Hang on a sec....</h1>}
    </>
  );
};

export default Home;

