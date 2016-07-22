/**
 * Created by zhu on 2016/7/19.
 */
import React from 'react';
import Router from 'react-router';
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';

//import HelloHandler from './hello.js';

/*
let App = React.createClass({
    render() {
    return (
        <div className="nav">
        <Link to="app" className="homelink">Home  </Link>
        <Link to="hello" className="hellolink">  Say Hello</Link>
    {/!* this is the importTant part *!/}
    <RouteHandler/>
    </div>
);
}
});

let routes = (
    <Route name="app" path="/" handler={App}>
    <Route name="hello" path="/hello" handler={HelloHandler}/>
    </Route>
);

Router.run(routes, function (Handler) {
    React.render(<Handler />, document.body);
});*/

/*
 var Helloworld = React.createClass({
 render: function () {
 return(
 <p>
 Hello,<input type="text" placeholder="Your name here" />!
 It is {this.props.data.toTimeString()}
 </p>
 );
 }
 });

 setInterval(function(){
 React.render(
 <Helloworld data={new Date()} />,
 document.getElementById('example')
 );
 },500);*/

/*
var myDivElement = <div className="foo" />;
React.render(myDivElement,document.body);

var MyComponent = React.creteClass({});
var myElement = <MyComponent someProperty={true}>;
React.render(myElement,document.body);*/

/*var Nav;
var app =<Nav color="blue" />;
var app = React.creteElement(Nav,{color:"blue"})

var content = React.createElement({
    Container,
    null,
    window.isLoggedIn ? React.createElement(Nav):React.createElement(Login)
})


var content = (
    <Nav>
        {s77sdf}
        <Person name={window.isLoggedIn ? window.name:''} />
    </Nav>
)

var component = <Compontnt foo={x} bar={y} />
component.props.foo = x;

var props = {foo:'default'};
var component = <Component {...props} foo={'overrider'} />
console.log(component.props.foo);


<div>{'First . Second'}</div>
<div>{['First',<span>&middot;</span>,'Second']}</div>
<div data-custom-attribute="foo"></div>*/


/*var LikeButton = React.createClass({
    getInitialState: function(){
      return{liked:true}
    },
    handleClick: function(event){
      this.setState({liked: !this.state.liked});
    },
    render: function () {
        var text = this.state.liked ? 'like' : 'haven\'t liked';
        return(
            <p onClick={this.handleClick}>
                You {text} this.Click to toggle.
            </p>
        );
    }
});
//无数据时默认值
getDefaultprops： function(){
    return{
        value:'defalut value'
    }
}
React.render(
    <LikeButton />,
    document.getElementById('example')
)*/

/*var Avatar = React.createClass({
    render: function(){
        return (
            <div>
                <ProfilePic username={this.props.username} />
                <ProfileLink username={this.props.username} />
            </div>
        );
    }
});
var ProfilePic = React.createClass({
    render: function(){
        return (
            <img src={'http://graph.facebook.com/'+this.props.username+'/picture'} alt=""/>
        );
    }
});
var ProfileLink = React.createClass({
    render: function(){
        return (
            <a href={'http://www.fackbook.com/'+this.props.username}>
                {this.props.username}
            </a>
        );
    }
});

React.render(
    <Avatar username='pwh' />,
    document.getElementById('example')
);*/

/*var ListItemWrapper = React.createClass({
    render: function(){
        return <li>{this.props.data.text}</li>;
    }
});*/
/*
var result= [{
    id:'1',
    text:'zhuxinhao'
}, {
    id:'2',
    text:'chenzhenyu'
}];
var MyComponent = React.createClass({

    render: function(){
        var items = {};
        this.props.results.forEach(function(result){
            items['result-'+result.id] = <li>{result.text}</li>;
        });
        return (
            <ul>
                {items}
            </ul>
        );
    }
});

React.render(
    <MyComponent results={result} />,
    document.getElementById('example')
);
*/

var CheckLink = React.createClass({
    render: function(){
        return <a {...this.props}>{'s'}{this.props.children}</a>;
    }
});

React.render(
    <CheckLink href='http://baidu.com'>
        Click here!
    </CheckLink>,
    document.getElementById('example')
);



















