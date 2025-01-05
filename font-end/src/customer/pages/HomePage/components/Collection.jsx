/* eslint-disable no-unused-vars */
import React, { useEffect, useState, useRef } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom"; // Import Link từ react-router-dom
import "./Collection.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { IMGBANNERS, BLOGCONTENTS } from "../../../../constants/index.js";
import ProductCard from "../../../components/ProductCard/ProductCard.jsx";

function Collection({categories}) {
  // State để lưu trữ các danh mục sản phẩm
  const [cate1, setCate1] = useState([]);
  const [cate2, setCate2] = useState([]);
  const [cate3, setCate3] = useState([]);
  const [cate4, setCate4] = useState([]);

  // Effect để cập nhật state khi props categories thay đổi
  useEffect(() => {
    if (categories) {
      setCate1(categories[0]);
      setCate2(categories[1]);
      setCate3(categories[2]);
      setCate4(categories[3]);
    }
  }, [categories]);

  // Refs để tham chiếu đến từng phần tử danh mục trên trang
  const cate1Ref = useRef(null);
  const cate2Ref = useRef(null);
  const cate3Ref = useRef(null);
  const cate4Ref = useRef(null);
  
 
  const scrollToCategory = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div>
      <div className="div__title" ref={cate1Ref}>
        <h2 className="title-accessory">{cate1 && cate1.categoryName}</h2>
      </div>
      <div className="div__lists">
        <div className="div__lists-iphone">
          <div className="lists-iphone">
            {cate1 && cate1.products && cate1.products.map((product) => (
              <ProductCard product={product} />
            ))}
          </div>
          <Link variant="outline-dark" className="button__seeMore" to={`/categories/${cate1 && cate1.categoryName}`}>
            Xem thêm sản phẩm <b className="bold-text">{cate1 && cate1.categoryName}</b>
          </Link>
        </div>
      </div>
      <div className="div__title" ref={cate2Ref}>
        <h2 className="title-accessory">{cate2 && cate2.categoryName}</h2>
      </div>
      <div className="div__lists">
        <div className="div__lists-iphone">
          <div className="lists-iphone">
            {cate2 && cate2.products && cate2.products.map((product) => (
              <ProductCard product={product} />
            ))}
          </div>
          <Link variant="outline-dark" className="button__seeMore" to={`/categories/${cate2 && cate2.categoryName}`}>
            Xem thêm sản phẩm <b className="bold-text">{cate2 && cate2.categoryName}</b>
          </Link>
        </div>
      </div>
      <div className="div__banners">
        <div className="banners">
          <img src={IMGBANNERS.imgID1} className="img-banners" alt="banners" />
        </div>
      </div>
      <div className="div__title" ref={cate3Ref}>
        <h2 className="title-accessory">{cate3 && cate3.categoryName}</h2>
      </div>
      <div className="div__lists">
        <div className="div__lists-iphone">
          <div className="lists-iphone">
            {cate3 && cate3.products && cate3.products.map((product) => (
              <ProductCard product={product} />
            ))}
          </div>
          <Link variant="outline-dark" className="button__seeMore" to={`/categories/${cate3 && cate3.categoryName}`}>
            Xem thêm sản phẩm <b className="bold-text">{cate3 && cate3.categoryName}</b>
          </Link>
        </div>
      </div>
      <div className="div__banners">
        <div className="banners">
          <img src={IMGBANNERS.imgID1} className="img-banners" alt="banners" />
        </div>
      </div>
      <div className="div__title" ref={cate4Ref}>
        <h2 className="title-accessory">{cate4 && cate4.categoryName}</h2>
      </div>
      <div className="div__lists">
        <div className="div__lists-iphone">
          <div className="lists-iphone">
            {cate4 && cate4.products && cate4.products.map((product) => (
              <ProductCard product={product} />
            ))}
          </div>
          <Link variant="outline-dark" className="button__seeMore" to={`/categories/${cate4 && cate4.categoryName}`}>
            Xem thêm sản phẩm <b className="bold-text">{cate4 && cate4.categoryName}</b>
          </Link>
        </div>
      </div>
      <div className="blogs">
        <div className="div-title">
          <h4 className="blog-title">Có thể bạn muốn biết</h4>
        </div>
        <div className="div__list-blogs">
          <ul className="list-blogs">
            <li className="blog-contents">
              <img className="blog-imgs" src={BLOGCONTENTS.imgs} alt="blogs" />
              <div className="img__blog-content">
                <h5>
                  <a className="blog-dct" href="/detail-blogs">
                    {BLOGCONTENTS.description}
                  </a>
                </h5>
                <p className="blog-date">{BLOGCONTENTS.date}</p>
              </div>
            </li>
            <li className="blog-contents">
              <img className="blog-imgs" src={BLOGCONTENTS.imgs} alt="blogs" />
              <div className="img__blog-content">
                <h5>
                  <a className="blog-dct" href="/detail-blogs">
                    {BLOGCONTENTS.description}
                  </a>
                </h5>
                <p className="blog-date">{BLOGCONTENTS.date}</p>
              </div>
            </li>
            <li className="blog-contents">
              <img className="blog-imgs" src={BLOGCONTENTS.imgs} alt="blogs" />
              <div className="img__blog-content">
                <h5>
                  <a className="blog-dct" href="/detail-blogs">
                    {BLOGCONTENTS.description}
                  </a>
                </h5>
                <p className="blog-date">{BLOGCONTENTS.date}</p>
              </div>
            </li>
            <li className="blog-contents">
              <img className="blog-imgs" src={BLOGCONTENTS.imgs} alt="blogs" />
              <div className="img__blog-content">
                <h5>
                  <a className="blog-dct" href="/detail-blogs">
                    {BLOGCONTENTS.description}
                  </a>
                </h5>
                <p className="blog-date">{BLOGCONTENTS.date}</p>
              </div>
            </li>
            <li className="blog-contents">
              <img className="blog-imgs" src={BLOGCONTENTS.imgs} alt="blogs" />
              <div className="img__blog-content">
                <h5>
                  <a className="blog-dct" href="/detail-blogs">
                    {BLOGCONTENTS.description}
                  </a>
                </h5>
                <p className="blog-date">{BLOGCONTENTS.date}</p>
              </div>
            </li>
            <li className="blog-contents">
              <img className="blog-imgs" src={BLOGCONTENTS.imgs} alt="blogs" />
              <div className="img__blog-content">
                <h5>
                  <a className="blog-dct" href="/detail-blogs">
                    {BLOGCONTENTS.description}
                  </a>
                </h5>
                <p className="blog-date">{BLOGCONTENTS.date}</p>
              </div>
            </li>
            <li className="blog-contents">
              <img className="blog-imgs" src={BLOGCONTENTS.imgs} alt="blogs" />
              <div className="img__blog-content">
                <h5>
                  <a className="blog-dct" href="/detail-blogs">
                    {BLOGCONTENTS.description}
                  </a>
                </h5>
                <p className="blog-date">{BLOGCONTENTS.date}</p>
              </div>
            </li>
            <li className="blog-contents">
              <img className="blog-imgs" src={BLOGCONTENTS.imgs} alt="blogs" />
              <div className="img__blog-content">
                <h5>
                  <a className="blog-dct" href="/detail-blogs">
                    {BLOGCONTENTS.description}
                  </a>
                </h5>
                <p className="blog-date">{BLOGCONTENTS.date}</p>
              </div>
            </li>
            <li className="blog-contents">
              <img className="blog-imgs" src={BLOGCONTENTS.imgs} alt="blogs" />
              <div className="img__blog-content">
                <h5>
                  <a className="blog-dct" href="/detail-blogs">
                    {BLOGCONTENTS.description}
                  </a>
                </h5>
                <p className="blog-date">{BLOGCONTENTS.date}</p>
              </div>
            </li>
          </ul>
          <div className="div__button">
            <Button variant="outline-dark" className="button-seeMore">
              Xem thêm <i class="fa-solid fa-arrow-right"></i>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Collection;
