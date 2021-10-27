import React, { useState, useEffect } from "react";
import "./Category.css";
import FilterByCategory from '../API/FilterByCategory';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import FadeIn from 'react-fade-in';

const Category = (props) => {
  const [filteredProduct, setFilteredProduct] = useState([]);

  //prepare state hook
  useEffect(() => {
    (async () => {
      const data = await FilterByCategory(props.location.state.parameter);
      setFilteredProduct(data);
    })();
  }, [props.location.state.parameter]);

  return (<>
    <FadeIn>
      <section className="categoryContainer">
        <div className="top">
          <h2 className="title">{props.location.state.parameter}</h2>
          <img src="./img/photo.jpg" alt="topPhoto" className="topPhoto" />
        </div>
        {/* looping to create html */}
        {(() => {
          return filteredProduct.map((elem, index) =>
            (index % 2 !== 0) ?
              <>
                <Row key={elem.id} className="oddNum">
                  <Col className="photoCol"><img src="./img/shopping.jpg" alt="photo" /></Col>
                  <Col className="titleCol">
                    <Row className="titleRow">
                      <h3>{elem.title}</h3>
                      <p>${elem.price} CAD</p>
                      {/* Route to Detail page */}
                      <Link
                        to={{
                          pathname: "/productDetail",
                          state: {
                            product: elem,
                          },
                        }}
                        className="viewMoreBtn">View more</Link>
                    </Row>
                  </Col>
                  <Col className="imgCol"><img src={elem.image} alt="productPhoto" /></Col>
                </Row>
              </>
              : <>
                <Row key={elem.id} className="evenNum">
                  <Col className="imgCol"><img src={elem.image} alt="productPhoto" /></Col>
                  <Col className="titleCol">
                    <Row className="titleRow">
                      <h3>{elem.title}</h3>
                      <p>${elem.price} CAD</p>
                      {/* Route to Detail page */}
                      <Link
                        to={{
                          pathname: "/productDetail",
                          state: {
                            product: elem,
                          },
                        }}
                        className="viewMoreBtn">View more</Link>
                    </Row>
                  </Col>
                </Row>
              </>);
        })()}
      </section>
    </FadeIn>
  </>);
};

export default Category;
