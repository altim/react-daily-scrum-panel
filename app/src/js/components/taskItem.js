/**
* @jsx React.DOM
**/
    	
var React = require('react');

var TaskItem = React.createClass({

	render: function() {
		if(this.props.status === 'todo'){
			var itemStyle = { 'textDecoration' : 'none'};
		}
		else {
			var itemStyle = { 'textDecoration' : 'line-through' };
		}

		return (
				<li>
					<p style={itemStyle}>{this.props.desc}</p>
				</li>
		)
	}

});

module.exports = TaskItem;