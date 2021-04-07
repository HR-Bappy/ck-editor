import React from 'react'
import { Route } from 'react-router-dom';
import Home from './Home'
import Blog from './Blog'

class Section extends React.Component{
    render(){
      return(
        <section>
            
          <Route path="/" component={Home} exact />
          <Route path="/blog" component={Blog} exact />
          {/* <Route component={ErrorPage} /> */}
        </section>
      )
    }
  }
  
  export default Section;