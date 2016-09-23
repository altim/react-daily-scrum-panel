/**
* @jsx React.DOM
**/
    	
var React = require('react'),
	TaskList = require('./taskList');

var UsersList = React.createClass({

	render: function() {
		var TasksLists = [],
			keyNumber = 0;
		for(user in this.props.usersTasks){
			TasksLists.push(<TaskList key={keyNumber} owner={user} items={this.props.usersTasks[user].items} doneItems={this.props.usersTasks[user].doneItems}/>);
			keyNumber++;
		}

		console.log('TasksLists:',TasksLists);

		return (
			<div className="tasksLists">
				<div className="row">
					{TasksLists}
				</div>
			</div>
		);
	}

});

module.exports = UsersList;