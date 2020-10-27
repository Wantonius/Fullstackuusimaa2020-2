import React from 'react';
import {Table,Button} from 'semantic-ui-react';
import StateManager from '../statemanager/StateManager';

class ContactList extends React.Component {

	render() {
		let contacts = this.props.list.map(contact => {
			return (
				<Table.Row key={contact.id}>
					<Table.Cell>{contact.firstname}</Table.Cell>
					<Table.Cell>{contact.lastname}</Table.Cell>
					<Table.Cell>{contact.email}</Table.Cell>
					<Table.Cell>{contact.address}</Table.Cell>
					<Table.Cell>{contact.city}</Table.Cell>
					<Table.Cell>{contact.phone}</Table.Cell>
					<Table.Cell><Button onClick={() => this.props.removeFromList(contact.id)}>Remove</Button></Table.Cell>
				</Table.Row>
			)
		})
		return(
			<Table>
				<Table.Header>
					<Table.HeaderCell>Firstname</Table.HeaderCell>
					<Table.HeaderCell>Lastname</Table.HeaderCell>
					<Table.HeaderCell>Email</Table.HeaderCell>
					<Table.HeaderCell>Address</Table.HeaderCell>
					<Table.HeaderCell>City</Table.HeaderCell>
					<Table.HeaderCell>Phone</Table.HeaderCell>
					<Table.HeaderCell>Remove</Table.HeaderCell>
				</Table.Header>
				<Table.Body>
				{contacts}
				</Table.Body>
			</Table>
		)
	}
}

export default StateManager(ContactList);