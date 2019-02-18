import React, { Component } from 'react'

 class Test extends Component {
state = {
    title: '',
    body: ''
}
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => response.json())
    .then(data =>  {
        console.log(data);
        this.setState({
            title: data.title,
            body: data.body
        });
    });
  }
  render() {
      const {title, body} = this.state;
    return (
      <div>
        <h2>{title}</h2>
        <h6>{body}</h6>
      </div>
    )
  }
}

export default Test;