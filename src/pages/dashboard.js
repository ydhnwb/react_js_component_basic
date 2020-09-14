import React from 'react';


export const Dashboard = () => {
    return (
        <div>
            <div className="slider-main h-800x h-sm-auto pos-relative">
                <div className="img-bg bg-1 bg-layer-4" />
                <div className="h-100 mt-xs-50">
                    <div className="row h-80">
                        <div className="col-md-1" />
                        <div className="col-sm-12 col-md-8">
                            <div className="dplay-tbl">
                                <div className="dplay-tbl-cell color-white mtb-30">
                                    <div className="mx-w-900x">
                                        <a href="https://twitter.com/ydhnwb">
                                            <div className="inset">
                                                <img src="assets/img/me.jpg" />
                                            </div>
                                        </a>
                                        <h2 className="mt-20 mb-30"><b>Hi there, I'm Prieyudha Akadita S!</b></h2>
                                        <p className="text-white justify-content-around">I am last semester student and mobile app developer. Experienced in Android Native and Flutter but also confident to work with web development using Django.</p>
                                        <br />
                                        <div className="row">
                                            <h6><a className="plr-20 btn-brdr-grey color-white" style={{ margin: '10px' }} href="https://ydhnwb.gitbook.io/"><b>My journals and more</b></a></h6>
                                            <h6><a className="plr-20 btn-brdr-grey color-white" style={{ margin: '10px' }} href="https://medium.com/@ydhnwb"><b>My articles on Medium</b></a></h6>
                                            <h6><a className="plr-20 btn-brdr-grey color-white" style={{ margin: '10px' }} href="https://github.com/ydhnwb"><b>Github</b></a></h6>
                                            <h6><a className="plr-20 btn-brdr-grey color-white" style={{ margin: '10px' }} href="https://id.linkedin.com/in/ydhnwb"><b>Linkedin</b></a></h6>
                                            <h6><a className="plr-20 btn-brdr-grey color-white" style={{ margin: '10px' }} href="https://www.youtube.com/channel/UCDG7gCaRawAdyeA5omGRBRA"><b>Youtube</b></a></h6>
                                            {/*<h6><a class="plr-20 btn-brdr-grey color-white" style="margin: 10px;" href="https://ydhnwb.github.io/stuffs/prieyuda_akadita_s_resume.pdf"><b>Curriculum Vitae</b></a></h6>*/}
                                        </div>
                                    </div>{/* mx-w-200x */}
                                </div>{/* dplay-tbl-cell */}
                            </div>{/* dplay-tbl */}
                        </div>{/* col-sm-6 */}
                    </div>{/* row */}
                </div>{/* container */}
                
            </div>{/* slider-main */}
            <footer className="bg-191 color-ash pt-50 pb-20 text-left center-sm-text">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-1" />
            <div className="col-md-12 col-lg-12 mb-30 text-center">
              <div className="card h-100">
                <div className="dplay-tbl">
                  <div className="dplay-tbl-cell">
                    <ul className="list-a-plr-10">
                      <li><a href="https://twitter.com/ydhnwb"><i className="ion-social-twitter" /></a></li>
                      <li><a href="https://www.youtube.com/channel/UCDG7gCaRawAdyeA5omGRBRA"><i className="ion-social-youtube" /></a></li>
                      <li><a href="https://github.com/ydhnwb"><i className="ion-social-github" /></a></li>
                      <li><a href="mailto:akaditasustono@gmail.com"><i className="ion-ios-email" /></a></li>
                    </ul>
                  </div>{/* dplay-tbl-cell */}
                </div>{/* dplay-tbl */}
              </div>{/* card */}
            </div>{/* col-lg-4 col-md-6 */}
          </div>{/* row */}
        </div>{/* container */}
      </footer>
       </div>

    )
}