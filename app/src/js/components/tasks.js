/**  @jsx React.DOM **/

var React = require('react'),
	TaskForm = require('./taskForm'),
	TaskList = require('./taskList'),
	DoneTaskList = require('./doneTaskList'),
	firebase = require('firebase');

var config = {
	    apiKey: "AIzaSyDGT07zHFpV1N9bCwuY75yGQRT77L7VDLA",
	    authDomain: "sprint-8b2da.firebaseapp.com",
	    databaseURL: "https://sprint-8b2da.firebaseio.com",
	    storageBucket: "sprint-8b2da.appspot.com",
	    messagingSenderId: "477230113757"
	  };

var app = firebase.initializeApp(config);

var Tasks = React.createClass({

	loadData : function(){
		app.database().ref('/tasks').on('value',function(snap){
			var items = [],
			doneItems = [];

			snap.forEach(function(itemSnap){

				var item = itemSnap.val();
				item.key = itemSnap.getKey();

				if(item.status === 'todo'){
					items.push(item);
				}
				else {
					doneItems.push(item);
				}
			});

			this.setState({
				items : items,
				doneItems : doneItems
			});

		}.bind(this));

	},

	componentDidMount : function(){
		this.loadData();	
	},	

	getInitialState : function(){
		return {
			items : [],
			doneItems : []
		}

	},


	render: function() {
		return (
			<div className="container">

				<div className="row">	
					<TaskForm onNewItem={this.onNewItem}/>
				</div>

				<div className="row">
					
					<br/><br/>
					<TaskList items={this.state.items} onDeleteItem={this.deleteItem} onDoneItem={this.doneItem}/>	
						
				</div>

				<div className="row">
					<hr/>
					<DoneTaskList items={this.state.doneItems} onUndoneItem={this.undoneItem}/>
				</div>

			</div>
		);
	}


});

module.exports = Tasks;