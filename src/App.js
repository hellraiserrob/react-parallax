import React, { Component } from 'react';
import Parallax from 'react-springy-parallax'



import Page from './components/page'


// styles
import './App.css';

class App extends Component {


  render() {

    const pages = [{
      id: 1,
      title: 'Title 1',
      columns: 3,
      action: 1,
      speed: 1,
      style: {
        background: '#fff1e0'
      }
    }, {
      id: 2,
      title: 'Title 2',
      columns: 4, 
      action: 2,
      speed: 0.1,
      style: {
        background: '#fff'
      }
    }, {
      id: 3,
      title: 'Title 3',
      columns: 3,
      action: 3,
      speed: 1,
      style: {
        background: '#fff1e0'
      }
    }, {
      id: 4,
      title: 'Title 4',
      columns: 4,
      action: 0,
      speed: -0.1,
      style: {
        background: '#fff'
      }
    }]

    return (
      <div className="wrapper">

        <Parallax ref='parallax' pages={pages.length}>



          {pages.map((page, index) => {


            return <Parallax.Layer onClick={() => this.refs.parallax.scrollTo(page.action)} key={page.id} offset={index} speed={page.speed} style={page.style}>
              <Page {...page} />
            </Parallax.Layer>

          })}

          <Parallax.Layer offset={1} speed={-0.1} >
            <div className="page">
              <div className="new">New</div>
            </div>
          </Parallax.Layer>

        </Parallax>


      </div>
    );
  }
}

export default App;
