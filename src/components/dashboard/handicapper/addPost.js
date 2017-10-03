import React, { Component } from 'react';
import Script from 'react-load-script';


import '../../../vendors/bootstrap/dist/css/bootstrap.min.css';
import '../../../vendors/font-awesome/css/font-awesome.min.css';
import '../../../vendors/iCheck/skins/flat/green.css';
import '../../../vendors/google-code-prettify/bin/prettify.min.css';
import '../../../vendors/select2/dist/css/select2.min.css';
import '../../../vendors/switchery/dist/switchery.min.css';
import '../../../vendors/starrr/dist/starrr.css';
import '../../../styles/custom.css';

class AddPost extends Component {

  componentDidMount () {

  }

  render () {
    return (
      <div style={{color:'#73879C'}}>
        <div className="title_right">
          <div className="title_left">
            <h3>Post pick</h3>
          </div>
        </div>


        <div className="clearfix"></div>

        <div className="row">
          <div className="x_panel">
            <div className="x_title">
              <h4> Add your pick and it would be visible to bettors in search results  </h4>
            </div>
            <div className="x_content">
              <div style={{width:'700px', margin:'auto', display:'block'}}>

                <form id="demo-form2" data-parsley-validate className="form-horizontal form-label-left">

                      <div className="form-group">
                        <label className="control-label col-md-3 col-sm-3 col-xs-12" for="headline">Headline <span className="required">*</span>
                        </label>
                        <div className="col-md-6 col-sm-6 col-xs-12">
                          <input type="text" name="headline"  id="headline" required="required" className="form-control col-md-7 col-xs-12"/>
                        </div>
                      </div>

                      <div className="form-group">
                              <label className="control-label col-md-3 col-sm-3 col-xs-12">Select Category</label>
                              <div className="col-md-9 col-sm-9 col-xs-12">
                                <select className="select2_group form-control">
                                  <optgroup label="A">
                                    <option value="Athletics">Athletics </option>
                                  </optgroup>
                                  <optgroup label="B">
                                    <option value="Basketball">Basketball</option>
                                    <option value="Boxing">Boxing</option>
                                  </optgroup>
                                  <optgroup label="C">
                                    <option value="Cricket">Cricket</option>
                                    <option value="Cycling">Cycling</option>
                                  </optgroup>
                                  <optgroup label="E">
                                    <option value="Equestrian">Equestrian</option>
                                  </optgroup>
                                  <optgroup label="F">
                                    <option value="Football">Football</option>
                                    <option value="Formular 1">Formular 1</option>
                                  </optgroup>
                                  <optgroup label="G">
                                    <option value="Golf">Golf</option>
                                    <option value="Gymnastics">Gymnastics</option>
                                  </optgroup>
                                  <optgroup label="H">
                                    <option value="Handball">Handball</option>
                                    <option value="Hockey">Hockey</option>
                                    <option value="Horse Racing">Horse Racing</option>
                                  </optgroup>
                                  <optgroup label="J">
                                    <option value="Judo">Judo</option>
                                  </optgroup>
                                  <optgroup label="M">
                                    <option value="Motorsport">Motorsport</option>
                                  </optgroup>
                                  <optgroup label="N">
                                    <option value="Netball">Netball</option>
                                  </optgroup>
                                  <optgroup label="P">
                                    <option value="Politics">Politics</option>
                                  </optgroup>
                                  <optgroup label="R">
                                    <option value="Rowing">Rowing</option>
                                    <option value="Rugby League">Rugby League</option>
                                  </optgroup>
                                  <optgroup label="S">
                                    <option value="Shooting">Shooting</option>
                                    <option value="Snooker">Snooker </option>
                                    <option value="Squash">Squash</option>
                                    <option value="Swimming">Swimming </option>
                                  </optgroup>
                                  <optgroup label="T">
                                    <option value="Table Tennis">Table Tennis</option>
                                    <option value="Tennis">Tennis </option>
                                  </optgroup>
                                  <optgroup label="Volleyball">
                                    <option value="Volleyball">Volleyball</option>
                                  </optgroup>
                                  <optgroup label="W">
                                    <option value="Weightlifting">Weightlifting</option>
                                    <option value="Wrestling">Wrestling </option>
                                  </optgroup>
                                </select>
                              </div>
                        </div>

                      <div className="form-group">
                        <label className="control-label col-md-3 col-sm-3 col-xs-12">Pick Type</label>
                        <div className="col-md-6 col-sm-6 col-xs-12">
                          <div id="gender" className="btn-group" data-toggle="buttons">
                            <label className="btn btn-default" data-toggle-className="btn-primary" data-toggle-passive-className="btn-default">
                              <input type="radio" name="type" value="free"/> &nbsp; Free &nbsp;
                            </label>
                            <label className="btn btn-warning" data-toggle-className="btn-primary" data-toggle-passive-className="btn-default">
                              <input type="radio" name="type" value="premium"/> Premium
                            </label>
                          </div>
                        </div>
                      </div>

                      <p style={{marginLeft: "100px", lineHeight:"0.5", marginTop: '39px'}}>Add Pick</p><hr/>

                      <div className="form-group">
                        <label for="middle-name" className="control-label col-md-3 col-sm-3 col-xs-12">Score</label>
                        <div className="col-md-6 col-sm-6 col-xs-12">
                          <input id="middle-name" className="form-control col-md-7 col-xs-12" type="text" name="middle-name"/>
                        </div>
                      </div>

                      <div className="form-group">
                        <label for="middle-name" className="control-label col-md-3 col-sm-3 col-xs-12">Sheduled</label>
                        <div className="col-md-6 col-sm-6 col-xs-12">
                          <input id="middle-name" className="form-control col-md-7 col-xs-12" type="text" name="middle-name"/>
                        </div>
                      </div>

                      <div className="form-group">
                        <label for="middle-name" className="control-label col-md-3 col-sm-3 col-xs-12">Price</label>
                        <div className="col-md-6 col-sm-6 col-xs-12">
                          <input id="middle-name" className="form-control col-md-7 col-xs-12" type="text" name="middle-name"/>
                        </div>
                      </div>

                      <div className="form-group">
                        <label for="middle-name" className="control-label col-md-3 col-sm-3 col-xs-12">Where to play</label>
                        <div className="col-md-6 col-sm-6 col-xs-12">
                          <input id="middle-name" className="form-control col-md-7 col-xs-12" type="text" name="middle-name"/>
                        </div>
                      </div>

                      <div className="form-group">
                        <label for="middle-name" className="control-label col-md-3 col-sm-3 col-xs-12">Analysis</label>
                        <div className="col-md-6 col-sm-6 col-xs-12">
                          <input id="middle-name" className="form-control col-md-7 col-xs-12" type="text" name="middle-name"/>
                        </div>
                      </div>

                      <div className="form-group" style={{margin:'auto', width:'100px'}} >
                        <button type="button" className="btn btn-default"> Add <span className="fa fa-plus"></span></button>
                      </div>



                      <div className="ln_solid"></div>
                      <div className="form-group">
                        <div className="col-md-6 col-sm-6 col-xs-12 col-md-offset-3">
                          <button type="submit" className="btn btn-warning">Cancel</button>
                          <button type="submit" className="btn btn-success">Submit</button>
                        </div>
                      </div>

                    </form>

              </div>
            </div>
          </div>

        </div>




    <Script url="/vendors/bootstrap/dist/js/bootstrap.min.js"/>
    <Script url="/vendors/fastclick/lib/fastclick.js"/>
    <Script url="/vendors/nprogress/nprogress.js"/>
    <Script url="/vendors/bootstrap-progressbar/bootstrap-progressbar.min.js"/>
    <Script url="/vendors/iCheck/icheck.min.js"/>
    <Script url="/vendors/bootstrap-wysiwyg/js/bootstrap-wysiwyg.min.js"/>
    <Script url="/vendors/jquery.hotkeys/jquery.hotkeys.js"/>
    <Script url="/vendors/google-code-prettify/src/prettify.js"/>
    <Script url="/vendors/jquery.tagsinput/src/jquery.tagsinput.js"/>
    <Script url="/vendors/switchery/dist/switchery.min.js"/>
    <Script url="/vendors/select2/dist/js/select2.full.min.js"/>
    <Script url="/vendors/parsleyjs/dist/parsley.min.js"/>
    <Script url="/vendors/autosize/dist/autosize.min.js"/>
    <Script url="/vendors/devbridge-autocomplete/dist/jquery.autocomplete.min.js"/>
    <Script url="/vendors/starrr/dist/starrr.js"/>
    <Script url="/vendor/custom.js"/>
















    </div>
  );
  }

}

export default AddPost;
