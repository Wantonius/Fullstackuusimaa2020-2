import React from 'react';
import {Link} from 'react-router-dom';
import {List,Header} from 'semantic-ui-react';

class Navbar extends React.Component {

	render() {
		let style = {
			height:100,
			backgroundColor:"pink"
		}
		return (
			<div style={style}>
				<Header>Contact app</Header>
				<List>
					<List.Item><Link to="/">Contacts</Link></List.Item>
					<List.Item><Link to="/contact">Add Contact</Link></List.Item>
				</List>
			</div>
		)
	}
}

export default Navbar;