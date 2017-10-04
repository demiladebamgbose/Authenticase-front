import React, { Component } from 'react';

class Home extends Component {

  render() {
    return (

      <div style={{color:'#73879C'}}>
        <div className="title_right">
          <div className="title_left">
            <h3>All Posts</h3>
          </div>
        </div>


        <div className="clearfix"></div>

        <div className="row">
          <div className="col-md-6 col-sm-12 col-xs-12">

            <div className="x_panel">
              <div className="x_title">
                <ul className="nav navbar-right panel_toolbox">

                  <li><span className="badge bg-green" style={{color:'#fff',}}> open</span></li>
                  <li className="fa fa-edit" style={{lineHeight:'1.5', marginLeft:'14px'}}></li>
                </ul>
                <div className="col-sm-12">
                  <div className='col-sm-8'>
                    <h4 >Win big with my three sure naps</h4>
                    <p><small>Robb Mair     December 6, 2012</small></p>
                  </div>
                  <div className="col-sm-4" style={{marginTop:'10px'}}>
                      <p><span className="fa fa-shopping-cart" style={{color: "#666"}}></span> Orders :  3527</p>
                      <p><span className="fa fa-eye" style={{color: "#666"}}></span> Views : 35622</p>
                  </div>
                </div>


                <div className="clearfix"></div>
              </div>
              <div className="x_content">
                <div className="col-sm-12 well">
                      <div className="col-sm-12">
                        <div className="col-sm-2"><strong>Category:</strong></div>
                        <div className="col-sm-10"> Football</div>
                      </div>
                      <div className="col-sm-12">
                        <div className="col-sm-2"><strong>Game:</strong></div>
                        <div className="col-sm-10"> Chelsea vs Arsenal</div>
                      </div>
                      <div className="col-sm-12">
                        <div className="col-sm-2"><strong>Score:</strong></div>
                        <div className="col-sm-10">  Chelsea wins, 2 goals to 1 </div>
                      </div>
                      <div className="col-sm-12">
                        <div className="col-sm-2"><strong>Kickoff:</strong></div>
                        <div className="col-sm-10">  25th August, 2017 @ 12:45pm</div>
                      </div>

                      <div className="col-sm-12">
                        <div className="col-sm-2"><strong>Price:</strong></div>
                        <div className="col-sm-10">  $ 40</div>
                      </div>
                </div>

                  <div className="text-center">
                    <button type="button" className="btn btn-warning text-center"> Buy now</button>
                  </div>
              </div>
            </div>



          </div>




          <div className="col-md-6 col-sm-12 col-xs-12">

            <div className="x_panel">
              <div className="x_title">
                <ul className="nav navbar-right panel_toolbox">

                  <li><span className="badge bg-red" style={{color:'#fff',}}> closed</span></li>
                  <li className="fa fa-close" style={{lineHeight:'1.5', marginLeft:'14px'}}></li>
                </ul>
                <div className="col-sm-12">
                  <div className='col-sm-8'>
                    <h4 >Win big with my three sure naps</h4>
                    <p><small>Robb Mair     December 6, 2012</small></p>
                  </div>
                  <div className="col-sm-4" style={{marginTop:'10px'}}>
                      <p><span className="fa fa-shopping-cart" style={{color: "#666"}}></span> Orders :  3527</p>
                      <p><span className="fa fa-eye" style={{color: "#666"}}></span> Views : 35622</p>
                  </div>
                </div>


                <div className="clearfix"></div>
              </div>
              <div className="x_content">
                <div className="col-sm-12 well">
                      <div className="col-sm-12">
                        <div className="col-sm-2"><strong>Category:</strong></div>
                        <div className="col-sm-10"> Football</div>
                      </div>
                      <div className="col-sm-12">
                        <div className="col-sm-2"><strong>Game:</strong></div>
                        <div className="col-sm-10"> Chelsea vs Arsenal</div>
                      </div>
                      <div className="col-sm-12">
                        <div className="col-sm-2"><strong>Score:</strong></div>
                        <div className="col-sm-10">  Chelsea wins, 2 goals to 1 </div>
                      </div>
                      <div className="col-sm-12">
                        <div className="col-sm-2"><strong>Kickoff:</strong></div>
                        <div className="col-sm-10">  25th August, 2017 @ 12:45pm</div>
                      </div>
                      <div className="col-sm-12">
                        <div className="col-sm-2"><strong>Price:</strong></div>
                        <div className="col-sm-10">  $ 40</div>
                      </div>
                </div>

                  <div className="text-center">
                    <button type="button" disabled className="btn btn-warning text-center"> Buy now</button>
                  </div>
              </div>
            </div>



          </div>



        </div>
      </div>
    ) ;
  }
}

export default Home;
