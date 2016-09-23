/**  @jsx React.DOM **/

var React = require('react'),
	UsersList = require('./usersList'),
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

	panelUsers : [
		'atimic',
		'vdoelle',
		'smilenkovic',
		'bbojic',
		'adammer',
		'gbulakh',
		'testuser',
		'someuser'
	],

	loadData : function(){
		app.database().ref('/tasks').on('value',function(snap){
			var usersTasks = [];

			for(var i=0;i<this.panelUsers.length;i++){
				usersTasks[this.panelUsers[i]] = {
					items : [],
					doneItems : []
				}
			}

			snap.forEach(function(itemSnap){

				var item = itemSnap.val();
				item.key = itemSnap.getKey();

				usersTasks[item.owner]['items'].push(item);

			});

			this.setState({
				usersTasks : usersTasks
			});

		}.bind(this));

	},

	componentDidMount : function(){
		this.loadData();	
	},	

	getInitialState : function(){
		return {
			usersTasks : []
		}

	},



	render: function() {
		console.log(this.state.usersTasks);
		return (
			<div className="container-fluid">
				<UsersList usersTasks={this.state.usersTasks} />
			</div>
		);
	}


});

module.exports = Tasks;