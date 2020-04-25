import React, { useEffect } from 'react'
import { Grommet } from 'grommet';
import { Link, Element, Events, scroller } from 'react-scroll';

import selectTheme from './themes'

import Header from './components/Header'

function App() {
  const scrollTo = (name) => {
    scroller.scrollTo(name, {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
      offset: undefined
    });
  }

  useEffect(() => {
    Events.scrollEvent.register('begin', function(to, element) {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register('end', function(to, element) {
      console.log("end", arguments);
    });
  })

  return (
    <Grommet theme={selectTheme('dark')} full>
      {/* <Header /> */}
      <Link
        to='service1'
        activeClass='active'
        style={{ margin: '0 15px' }}
        spy={true}
        smooth={true}
        onClick={() => scrollTo('service1')}
      >
          service1
      </Link>
      <Link
        to='service2'
        activeClass='active'
        style={{ margin: '0 15px' }}
        spy={true}
        smooth={true}
        onClick={() => scrollTo('service2')}
      >
          service2
      </Link>
      <Link
        to='service3'
        activeClass='active'
        style={{ margin: '0 15px' }}
        spy={true}
        smooth={true}
        onClick={() => scrollTo('service3')}
      >
          service3
      </Link>
      <Link
        to='service4'
        activeClass='active'
        style={{ margin: '0 15px' }}
        spy={true}
        smooth={true}
        onClick={() => scrollTo('service4')}
      >
          service4
      </Link>
      <Link
        to='service5'
        activeClass='active'
        style={{ margin: '0 15px' }}
        spy={true}
        smooth={true}
        onClick={() => scrollTo('service5')}
      >
          service5
      </Link>
      <Link
        to='service6'
        activeClass='active'
        style={{ margin: '0 15px' }}
        spy={true}
        smooth={true}
        onClick={() => scrollTo('service6')}
      >
          service6
      </Link>
      <Link
        to='service7'
        activeClass='active'
        style={{ margin: '0 15px' }}
        spy={true}
        smooth={true}
        onClick={() => scrollTo('service7')}
      >
          service7
      </Link>
      <Link
        to='service8'
        activeClass='active'
        style={{ margin: '0 15px' }}
        spy={true}
        smooth={true}
        onClick={() => scrollTo('service8')}
      >
          service8
      </Link>
      <Element name='service1' style={{height: '100vh', backgroundColor: '#000'}}></Element>
      <Element name='service2' style={{height: '100vh', backgroundColor: '#111'}}></Element>
      <Element name='service3' style={{height: '100vh', backgroundColor: '#222'}}></Element>
      <Element name='service4' style={{height: '100vh', backgroundColor: '#333'}}></Element>
      <Element name='service5' style={{height: '100vh', backgroundColor: '#444'}}></Element>
      <Element name='service6' style={{height: '100vh', backgroundColor: '#555'}}></Element>
      <Element name='service7' style={{height: '100vh', backgroundColor: '#666'}}></Element>
      <Element name='service8' style={{height: '100vh', backgroundColor: '#777'}}></Element>
    </Grommet>
  )
}

export default App
