import React from 'react';

export default class Color extends React.Component {

	constructor() {
		super();
	}

	componentWillMount() {
		console.log("componentWillMount");
		console.log(this.props);				
	}

	render() {
		console.log("inside render");
		console.log(this.props);
		const style = {
			margin: '0.5em',
			paddingLeft: 0,
			listStyle: 'none',
			background: 'yellow'
		};
		return (

<div>
    <nav className="navbar navbar-default navbar-fixed-top topnav" role="navigation">
        <div className="container topnav">
            <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand topnav" href="#">Start Bootstrap</a>
            </div>
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav navbar-right">
                    <li>
                        <a href="#about">About</a>
                    </li>
                    <li>
                        <a href="#services">Services</a>
                    </li>
                    <li>
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>


    <a name="about"></a>
    <div className="intro-header">
        <div className="container">

            <div className="row">
                <div className="col-lg-12">
                    <div className="intro-message">
                        <h1>Stop Wildlife Trafficking</h1>
                        <h3>Don't get tricked, get informed </h3>
                        <hr className="intro-divider">
                        <ul className="list-inline intro-social-buttons">
                            <li>
                                <a> Twitter</a> 
                            </li>    
                            <li>
                                <a> Github </a>
                            </li>   
                        </ul>
                        </hr>
                    </div>
                </div>
            </div>

        </div>

    </div>

	<a  name="services"></a>
    <div className="content-section-a">

        <div className="container">
            <div className="row">
                <div className="col-lg-5 col-sm-6">
                    <hr className="section-heading-spacer">
                    <div className="clearfix"></div>
                    <h2 className="section-heading">Why it Matters</h2>
                    <p className="lead">The world is dealing with an unprecedented spike in illegal wildlife trade, threatening to overturn decades of conservation gains.Wildlife crime is a big business. Run by dangerous international networks, wildlife and animal parts are trafficked much like illegal drugs and arms. </p>
                		</hr>
                </div>
                <div className="col-lg-5 col-lg-offset-2 col-sm-6">
                    <img className="img-responsive" src="src/img/lion.png" alt="" />
                </div>
            </div>

        </div>

    </div>

    <div className="content-section-b">

        <div className="container">

            <div className="row">
                <div className="col-lg-5 col-lg-offset-1 col-sm-push-6  col-sm-6">
                    <hr className="section-heading-spacer">
                    <div className="clearfix"></div>
                    <h2 className="section-heading">What are Some Examples<br/></h2>
                    <p className="lead">Some examples of illegal wildlife trade are well known, such as poaching of elephants for ivory and tigers for their skins and bones. However, countless other species are similarly overexploited, from marine turtles to timber trees. Not all wildlife trade is illegal. Wild plants and animals from tens of thousands of species are caught or harvested from the wild and then sold legitimately as food, pets, ornamental plants, leather, tourist ornaments and medicine. Wildlife trade escalates into a crisis when an increasing proportion is illegal and unsustainable—directly threatening the survival of many species in the wild.</p>
                		</hr>
                </div>
                <div className="col-lg-5 col-sm-pull-6  col-sm-6">
                    <img className="img-responsive" src="img/dog.png" alt="" />
                </div>
            </div>

        </div>

    </div>

    <div className="content-section-a">

        <div className="container">

            <div className="row">
                <div className="col-lg-5 col-sm-6">
                    <hr className="section-heading-spacer">
                    <div className="clearfix"></div>
                    <h2 className="section-heading">What Does Our App Do</h2>
                    <p className="lead">Gives you the information you need to so you don't but and support ille</p>
                		</hr>
                </div>
                <div className="col-lg-5 col-lg-offset-2 col-sm-6">
                    <img className="img-responsive" src="img/phones.png" alt="" />
                </div>
            </div>

        </div>

    </div>

	<a  name="contact"></a>
    <div className="banner">

        <div className="container">

            <div className="row">
                <div className="col-lg-6">
                    <h2>Connect to Start Bootstrap:</h2>
                </div>
                <div className="col-lg-6">
                    <ul className="list-inline banner-social-buttons">
                        <li>
                            <a href="https://twitter.com/SBootstrap" className="btn btn-default btn-lg"><i className="fa fa-twitter fa-fw"></i> <span className="network-name">Twitter</span></a>
                        </li>
                        <li>
                            <a href="https://github.com/IronSummitMedia/startbootstrap" className="btn btn-default btn-lg"><i className="fa fa-github fa-fw"></i> <span className="network-name">Github</span></a>
                        </li>
                        <li>
                            <a href="#" className="btn btn-default btn-lg"><i className="fa fa-linkedin fa-fw"></i> <span className="network-name">Linkedin</span></a>
                        </li>
                    </ul>
                </div>
            </div>

        </div>

    </div>

    <footer>
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <ul className="list-inline">
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li className="footer-menu-divider">&sdot;</li>
                        <li>
                            <a href="#about">About</a>
                        </li>
                        <li className="footer-menu-divider">&sdot;</li>
                        <li>
                            <a href="#services">Services</a>
                        </li>
                        <li className="footer-menu-divider">&sdot;</li>
                        <li>
                            <a href="#contact">Contact</a>
                        </li>
                    </ul>
                    <p className="copyright text-muted small">Copyright &copy; Your Company 2014. All Rights Reserved</p>
                </div>
            </div>
        </div>
    </footer>

    <script src="js/jquery.js"></script>

  
    <script src="js/bootstrap.min.js"></script>

</div>

			);
		}
	}