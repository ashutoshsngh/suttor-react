var React = require("react");
var Useractions = require("../../../actions/UserActions");
var ReactRouter = require("react-router");
var browserHistory = ReactRouter.browserHistory;

module.exports = React.createClass({
    getInitialState:function(){
        return {
            name:"ashutosh",
            email:"aa@gmail.com",
            password:"test"
        }
    },
    handleInputChange:function(e){
        e.preventDefault();
        var name = e.target.name;
        var state = this.state;
        state[name] = e.target.value;
        this.setState(state);
    },
    addUser:function(e) {
        e.preventDefault();
        Useractions.addUser(this.state);
        browserHistory.push('/login');
    },
    render:function(){
        return(
            <form className="form" onSubmit={this.addUser}>
                <div className="form-group">
                    <label className="control-label" htmlFor="name">Username</label>
                    <input type="text" className="form-control" id="name" name="name" value={this.state.name} onChange={this.handleInputChange} placeholder="Username" />
                </div>

                <div className="form-group">
                    <label className="control-label" htmlFor="email">Email</label>
                    <input type="text" className="form-control" id="email" name="email" value={this.state.email} onChange={this.handleInputChange} placeholder="Email" />
                </div>

                <div className="form-group">
                    <label className="control-label" htmlFor="password">Password</label>
                    <input type="text" className="form-control" id="password" name="password" value={this.state.password} onChange={this.handleInputChange} placeholder="Password" />
                </div>

                <div className="form-group">
                    <button className="btn" type="submit">Save</button>
                </div>
            </form>
        )
    }
})