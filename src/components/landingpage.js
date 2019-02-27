import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
          <br></br>
            

            <div className="banner-text">
              <h1>Jyothishmathi Institutions</h1>

            <hr/>

          <p>BTech | MTech | MBA | MCA | Pharmacy | Diploma </p>

        
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;
