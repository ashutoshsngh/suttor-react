//main.jsx
var React = require("react");
var ReactDOM = require("react-dom");
var SuttorStore = require("./stores/suttorStore");
var ReactRouter = require('react-router');
var browserHistory = ReactRouter.browserHistory;
var IndexRoute = ReactRouter.IndexRoute;
var Suttorlist = require("./components/SuttorList.jsx");
var SuttorAdd = require("./components/SuttorAddForm.jsx");
var App = require("./components/app.jsx");
var UserRegister = require("./components/user/register/UserRegisterForm.jsx");
var UserLogin = require("./components/user/login/UserLoginForm.jsx");
var HomePage = require("./components/HomePage.jsx");
var reactCookie = require("react-cookie");
var sessionCookie = reactCookie.load('session');
var _records = [];
var getallrecords = function(record){
    _records = record;
    render();
};
SuttorStore.onChange(getallrecords);
function render(){
    if(sessionCookie) {
        ReactDOM.render(
            <Suttorlist sutta={_records} />, document.getElementById("container")
        );
    }else{
        ReactDOM.render(
            <ReactRouter.Router history={browserHistory}>
                <ReactRouter.Route path="/" component={App}>
                    <IndexRoute component={HomePage}/>
                    <ReactRouter.Route path='login' component={UserLogin} />
                    <ReactRouter.Route path='register' component={UserRegister} />
                </ReactRouter.Route>
            </ReactRouter.Router>,document.getElementById("container")
        );
    }
}