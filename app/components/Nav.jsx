var React = require('react');
var {Link, IndexLink} = require('react-router');



var Nav = React.createClass({ 
	onSearch: function (e) {
		e.preventDefaults();
		alert('under construction');
	},
	render: function() {
		return (
			<div className="top-bar">
				<div className="top-bar-left">
					<ul className="menu">
					<li className="menu-text">React Weather App</li>
						<li>
							<IndexLink to="/" activeClassName="active" 
							activeStyle={{fontWeight: 'bold'}}>Get weather
							</IndexLink>
						</li>
						<li>
							<Link to="/about" activeClassName="active" 
							activeStyle={{fontWeight: 'bold'}}> Get about
							</Link>
						</li>
						<li>
							<Link to="/examples" activeClassName="active" 
							activeStyle={{fontWeight: 'bold'}}> Get Examples
							</Link>
						</li>
					</ul>
				</div>
				<div className="top-bar-right">
					<form onSubmit={this.onSearch}>
						<ul className="menu">
							<li>
								<input type="search" placeholder="Search weather" />
							</li>
							<li>
								<input type="submit" className ="button" value="Get weather" />
							</li>


						</ul>

					</form>
				</div>
			</div>
			);
	}
});
module.exports = Nav;


