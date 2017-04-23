import React from 'react'
import ReactDom from 'react-dom'

import { Grid, Row, Col } from 'react-bootstrap'

import styles from './_App.scss'

import BackNavigation from '../MainNavigation/BackNavigation'
import { Footer } from '../Footer'

import bg from './images/noisy_grid.png'
import bjj_img from './images/bjjc2.jpg'
import shei_img from './images/shei2.jpg'
import signvox_img from './images/signvox2.jpg'
import reducedprinting_img from './images/reducedprinting2.jpg'
import clomedia_img from './images/clomedia2.jpg'
import horizon_img from './images/horizon2.jpg'

class Clients extends React.Component {
  render () {
    return (
      <div style={{ backgroundImage: `url(${bg})` }}>
        <BackNavigation />
        <Grid>
          <Row>
            <Col xs={12}>
              <br /><br /><br />
              <h1 style={{ textAlign: 'center' }}>Clients</h1>
              <p>We've worked with a diverse client base over the past years, from many industries: real estate, networking & IT companies, magazines, graphic design agencies, and many startups. Some of our clients are listed below.</p>
              <p>See also: <a href="http://wiki.wasya.co/index.php/List_of_Clients">http://wiki.wasya.co/index.php/List_of_Clients</a></p>
            </Col>
          </Row>
          <Row>
            <Col xs={4}>
              <h1>SHEI magazine</h1>
              <img style={{ maxWidth: '100%' }} src={shei_img} alt="" />
              <br /><br />
              <p><a href="http://sheimagazine.com">http://sheimagazone.com</a> is a fashion magasine based in Ann Arbor, MI.</p>
            </Col>
            <Col xs={4}>
              <h1>SignVOX</h1>
              <img style={{ maxWidth: '100%' }} src={signvox_img} alt="" />
              <br /><br />
              <p><a href="http://signvox.com">http://signvox.com</a> is a print shop management suite. It is a startup based in Palo Alto, CA.</p>
            </Col>
            <Col xs={4}>
              <h1>BJJCollective</h1>
              <img style={{ maxWidth: '100%' }} src={bjj_img} alt="" />
              <br /><br />
              <p><a href="http://bjjcollective.com">http://bjjcollective.com</a> is an online community of jiu-jitsu enthusiasts who are passionate about sharing their knowledge and technique. It's a relaxed conglomeration of gyms nationwide, committing to the study of the technique and discipline of martial arts.</p>
            </Col>
            <Col xs={4}>
              <h1>Reduced Printing</h1>
              <img style={{ maxWidth: '100%' }} src={reducedprinting_img} alt="" />
              <br /><br />
              <p><a href="http://reducedprinting.com">http://reducedprinting.com</a> is a printing shop in Staten Island, NYC. They operate a press, similar to Vistaprint's, for small- and medium-sized businesses.</p>
            </Col>
            <Col xs={4}>
              <h1>CLO Media</h1>
              <img style={{ maxWidth: '100%' }} src={clomedia_img} alt="" />
              <br /><br />
              <p><a href="http://clomedia.com">http://clomedia.com</a> is a Chicago, IL based magazine that addresses the needs of Chief Learning Officers in large enterprises. The company behind the magazine, Mediatec, also supports a suit of 5 business-related publications, such as the diversity-executive magazine and the Human Capital Media magazine. Additionally, they host nation-wide events with talks on diversity, learning, and corporate culture.</p>
            </Col>
            <Col xs={4}>
              <h1>Edge Horizon Dashboard</h1>
              <img style={{ maxWidth: '100%' }} src={horizon_img} alt="" />
              <br /><br />
              <p><a href="https://nexenta.com/products/nexentaedge">The Edge Horizon Dashboard by Nexenta</a> is the frontend GUI for managing Nexenta Edge, the next-generation on-premise object storage system.</p>
            </Col>
          </Row>
        </Grid>
        <Footer />
      </div>
    )
  }
}

export default Clients
