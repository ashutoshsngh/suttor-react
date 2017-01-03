var React = require("react");
var Useractions = require("../../../actions/UserActions");
var ReactRouter = require("react-router");
var browserHistory = ReactRouter.browserHistory;

module.exports = React.createClass({
    getInitialState:function(){
        return {
            email:"",
            password:""
        }
    },
    handleInputChange:function(e){
        e.preventDefault();
        var name = e.target.name;
        var state = this.state;
        state[name] = e.target.value;
        this.setState(state);
    },
    loginUser:function(e) {
        e.preventDefault();
        Useractions.loginUser(this.state);
        browserHistory.push('/');
    },
    render:function(){
        return(
            <form className="form" onSubmit={this.loginUser}>
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