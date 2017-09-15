import  React, { Component } from 'react';

class Center extends Component {

  render () {
    return (
      <div id="content">
        <div id="content-header">
          <div id="breadcrumb"> <a href="index.html" title="Go to Home" className="tip-bottom"><i className="icon-home"></i> Home</a></div>
        </div>
        <div  className="quick-actions_homepage">
          <ul className="quick-actions">
            <li className="bg_lb"> <a href="/"> <i className="icon-dashboard"></i> My Dashboard </a> </li>
            <li className="bg_lg"> <a href="/"> <i className="icon-shopping-cart"></i> Shopping Cart</a> </li>
            <li className="bg_ly"> <a href="/"> <i className=" icon-globe"></i> Web Marketing </a> </li>
            <li className="bg_lo"> <a href="/"> <i className="icon-group"></i> Manage Users </a> </li>
            <li className="bg_ls"> <a href="/"> <i className="icon-signal"></i> Check Statistics</a> </li>
          </ul>
        </div>
        <div className="container-fluid">
          <div className="row-fluid">
            <div className="span6">
              <div className="widget-box">
                <div className="widget-title bg_ly" data-toggle="collapse" href="#collapseG2"><span className="icon"><i className="icon-chevron-down"></i></span>
                  <h5>Latest Posts</h5>
                </div>
                <div className="widget-content nopadding collapse in" id="collapseG2">


                </div>
              </div>
              <div className="widget-box">
                <div className="widget-title"> <span className="icon"><i className="icon-ok"></i></span>
                  <h5>To Do list</h5>
                </div>
                <div className="widget-content">
                  <div className="todo">
                    <ul>
                      <li className="clearfix">
                        <div className="txt"> Luanch This theme on Themeforest <span className="by label">Nirav</span> <span className="date badge badge-important">Today</span> </div>
                        <div className="pull-right"> <a className="tip" href="/" title="Edit Task"><i className="icon-pencil"></i></a> <a className="tip" href="/" title="Delete"><i className="icon-remove"></i></a> </div>
                      </li>
                      <li className="clearfix">
                        <div className="txt"> Manage Pending Orders <span className="by label">Alex</span> <span className="date badge badge-warning">Today</span> </div>
                        <div className="pull-right"> <a className="tip" href="/" title="Edit Task"><i className="icon-pencil"></i></a> <a className="tip" href="/" title="Delete"><i className="icon-remove"></i></a> </div>
                      </li>
                      <li className="clearfix">
                        <div className="txt"> MAke your desk clean <span className="by label">Admin</span> <span className="date badge badge-success">Tomorrow</span> </div>
                        <div className="pull-right"> <a className="tip" href="/" title="Edit Task"><i className="icon-pencil"></i></a> <a className="tip" href="/" title="Delete"><i className="icon-remove"></i></a> </div>
                      </li>
                      <li className="clearfix">
                        <div className="txt"> Today we celebrate the great looking theme <span className="by label">Admin</span> <span className="date badge badge-info">08.03.2013</span> </div>
                        <div className="pull-right"> <a className="tip" href="/" title="Edit Task"><i className="icon-pencil"></i></a> <a className="tip" href="/" title="Delete"><i className="icon-remove"></i></a> </div>
                      </li>
                      <li className="clearfix">
                        <div className="txt"> Manage all the orders <span className="by label">Mark</span> <span className="date badge badge-info">12.03.2013</span> </div>
                        <div className="pull-right"> <a className="tip" href="/" title="Edit Task"><i className="icon-pencil"></i></a> <a className="tip" href="/" title="Delete"><i className="icon-remove"></i></a> </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="span6">
              <div className="widget-box">
                <div className="widget-title"> <span className="icon"><i className="icon-ok"></i></span>
                  <h5>Progress Box</h5>
                </div>
              </div>
              <div className="widget-box">
                <div className="widget-title bg_lo"  data-toggle="collapse" href="#collapseG3" > <span className="icon"> <i className="icon-chevron-down"></i> </span>
                  <h5>News updates</h5>
                </div>
                <div className="widget-content nopadding updates collapse in" id="collapseG3">
                  <div className="new-update clearfix"><i className="icon-ok-sign"></i>
                    <div className="update-done"><a title="" href="/"><strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</strong></a> <span>dolor sit amet, consectetur adipiscing eli</span> </div>
                    <div className="update-date"><span className="update-day">20</span>jan</div>
                  </div>
                  <div className="new-update clearfix"> <i className="icon-gift"></i> <span className="update-notice"> <a title="" href="/"><strong>Congratulation Maruti, Happy Birthday </strong></a> <span>many many happy returns of the day</span> </span> <span className="update-date"><span className="update-day">11</span>jan</span> </div>
                  <div className="new-update clearfix"> <i className="icon-move"></i> <span className="update-alert"> <a title="" href="/"><strong>Maruti is a Responsive Admin theme</strong></a> <span>But already everything was solved. It will ...</span> </span> <span className="update-date"><span className="update-day">07</span>Jan</span> </div>
                  <div className="new-update clearfix"> <i className="icon-leaf"></i> <span className="update-done"> <a title="" href="/"><strong>Envato approved Maruti Admin template</strong></a> <span>i am very happy to approved by TF</span> </span> <span className="update-date"><span className="update-day">05</span>jan</span> </div>
                  <div className="new-update clearfix"> <i className="icon-question-sign"></i> <span className="update-notice"> <a title="" href="/"><strong>I am alwayse here if you have any question</strong></a> <span>we glad that you choose our template</span> </span> <span className="update-date"><span className="update-day">01</span>jan</span> </div>
                </div>
              </div>
            </div>
          </div>
          <hr/>
          <div className="row-fluid">
            <div className="span12">
              <div className="widget-box widget-calendar">
                <div className="widget-title"> <span className="icon"><i className="icon-calendar"></i></span>
                  <h5>Calendar</h5>
                  <div className="buttons"> <a id="add-event" data-toggle="modal" href="#modal-add-event" className="btn btn-inverse btn-mini"><i className="icon-plus icon-white"></i> Add new event</a>
                    <div className="modal hide" id="modal-add-event">
                      <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal">×</button>
                        <h3>Add a new event</h3>
                      </div>
                      <div className="modal-body">
                        <p>Enter event name:</p>
                        <p>
                          <input id="event-name" type="text" />
                        </p>
                      </div>
                      <div className="modal-footer"> <a href="/" className="btn" data-dismiss="modal">Cancel</a> <a href="/" id="add-event-submit" className="btn btn-primary">Add event</a> </div>
                    </div>
                  </div>
                </div>
                <div className="widget-content">
                  <div className="panel-left">
                    <div id="fullcalendar"></div>
                  </div>
                  <div id="external-events" className="panel-right">
                    <div className="panel-title">
                      <h5>Drag Events to the calander</h5>
                    </div>
                    <div className="panel-content">
                      <div className="external-event ui-draggable label label-inverse">My Event 1</div>
                      <div className="external-event ui-draggable label label-inverse">My Event 2</div>
                      <div className="external-event ui-draggable label label-inverse">My Event 3</div>
                      <div className="external-event ui-draggable label label-inverse">My Event 4</div>
                      <div className="external-event ui-draggable label label-inverse">My Event 5</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>

      );

  }

}

export default Center;
