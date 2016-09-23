/**
* @jsx React.DOM
**/
    	
var React = require('react'),
	TaskItem = require('./taskItem');

var TaskList = React.createClass({

	render: function() {
		var taskItems = this.props.items.map(function(item){
			if(item.status==='todo') {
				return <TaskItem key={item.key} keyValue={item.key} desc={item.description} owner={item.owner} status={item.status}/>
			}
		}.bind(this));

		if(taskItems.length){
			var todoStyle = { 'display' : 'block'};
		}
		else {
			var todoStyle = { 'display' : 'none'};
		}

		var doneTaskItems = this.props.items.map(function(item){
			if(item.status!=='todo') {
				return	<TaskItem key={item.key} keyValue={item.key} desc={item.description} owner={item.owner} status={item.status}/>
			}
		}.bind(this));

		if(doneTaskItems.length){
			var doneStyle = { 'display' : 'block'};
		}
		else {
			var doneStyle = { 'display' : 'none'};
		}

		if(!taskItems.length && !doneTaskItems.length){
			var mesageStyle = { 'display' : 'block'};
		}
		else {
			var mesageStyle = { 'display' : 'none'};
		}

		return (
			<div className="col-md-2 panel-grid">
				<div className="panel panel-primary">
					<div className="panel-heading"><p><strong>{this.props.owner}</strong></p></div>
					<div className="panel-body">
						<p style={todoStyle}><strong>Planned</strong></p>
						<ul className="list-of-tasks" style={todoStyle}>
							{taskItems}
						</ul>

						<br style={doneStyle}/>
						<p style={doneStyle}><strong>Finished</strong></p>
						<ul className="list-of-done-tasks" style={doneStyle}>
							{doneTaskItems}
						</ul>

						<p style={mesageStyle}>No tasks</p>
					</div>
				</div>
			</div>
		);
	}

});

module.exports = TaskList;