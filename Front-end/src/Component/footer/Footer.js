import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import './Footer.css'

export default function Footer() {
  return (
    <MDBFooter className='footer text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between'>
        <div>
          <a href='' className='me-4 text-reset'>
          <MDBIcon fab icon="facebook" />
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

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-2'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-white fw-bold'>
                <MDBIcon icon="gem" className="" />
                BookingSpot.
              </h6>
              <p className='text-white'>
              Discover the World, One Destination at a Time - Book Now.
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto text-white mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact Us</h6>
              <p>
              Rajkot - Gujrat
              </p>
              <p>
              booking.spot@gmail.com
              </p>
              <p>
                +91 7878953245
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>


    </MDBFooter>
  );
}