
import React from 'react';

import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import './footer.css';

export default function Footer() {

  const toTop = () => {
    window.scrollTo(0, 0);
  }


  return (
    <div className='footer  mt-5 pt-5 text-start '>
      <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
        <section className='text-center p-4 border-bottom'>
       

          <div>
            <a href='' className='me-4 text-reset'>
              <MDBIcon fab icon="facebook-f" />
            </a>
            <a href='' className='me-4 text-reset'>
              <MDBIcon fab icon="twitter" />
            </a>
            <a href='' className='me-4 text-reset'>
              <MDBIcon fab icon="google" />
            </a>
            <a href='' className='me-4 text-reset'>
              <MDBIcon fab icon="instagram" />
            </a>
            <a href='' className='me-4 text-reset'>
              <MDBIcon fab icon="linkedin" />
            </a>
            <a href='' className='me-4 text-reset'>
              <MDBIcon fab icon="github" />
            </a>
          </div>
        </section>

        <section className='text-start'>
          <MDBContainer className='text-center text-md-start mt-5'>
            <MDBRow className='mt-3'>
              <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4 text-start'>
                <h6 className='text-uppercase fw-bold mb-4'>
                  <span> <img src="/img/logo.png" className='w-50' /> </span>
                </h6>
                <p>
                  Reda Store is a comprehensive online shopping platform offering a wide variety of products including electronics, clothing, home essentials, cosmetics, and more. We are committed to providing a seamless and secure shopping experience with fast delivery and exceptional customer support.

                </p>
              </MDBCol>


              <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4 text-start'>
                <h6 className='text-uppercase fw-bold mb-4'><span>Pages</span></h6>
                <p>
                  <Link to="/" className='text-reset' onClick={toTop}>Home</Link>
                </p>
                <p>
                  <Link to="/about" className='text-reset'>About</Link>
                </p>
                <p>
                  <Link to="/contact" className='text-reset'>Contact</Link>
                </p>
              
              </MDBCol>





              <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4 text-start'>
                <h6 className='text-uppercase fw-bold mb-4'><span>Contact</span> </h6>
                <p>
                  <MDBIcon icon="home" className="me-2" />
                  Giza
                </p>
                <p>
                  <MDBIcon icon="envelope" className="" />
                  abdulrhmanaahmed4@gmail.com
                </p>
                <p>
                  <MDBIcon icon="phone" className="me-3" />
                  01128787885
                </p>

              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>

        <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
          © 2025 Copyright:
          <a className='text-reset fw-bold' href='#'>
            Abdulrhman Ahmed
          </a>
        </div>
      </MDBFooter>

    </div>
  )
}
