import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';

class App extends Component {

  state = {
    todos: []
  };


  async componentDidMount() {
    try {
      const res = await fetch('http://127.0.0.1:8000/api/');
      const todos = await res.json();
      this.setState({
        todos
      });
    } catch (e) {
      console.log(e);
    }
  }
  
  render() {
    return (
      <div className="demo-big-content">
    <Layout>
        <Header className="header-color" title={<Link style={{textDecoration: 'none', color: 'white'}} to="/">JITS</Link>} scroll>
            <Navigation>
                <Link to="/Student">Students Corner</Link>
                <Link to="/Academics">Academics</Link>
                <Link to="/aboutme">About Us</Link>
                <Link to="/Placements">Placements</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Header>
        <Drawer title={<Link style={{textDecoration: 'none', color: 'black'}} to="/">JITS</Link>}>
            <Navigation>
            <Link to="/Student">Students Corner</Link>
              <Link to="/Academics">Academics</Link>
              <Link to="/aboutme">About Us</Link>
              <Link to="/Placements">Placements</Link>
              <Link to="/contact">Contact</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>

    <div>
    <div><p>Hello!</p></div>
      {this.state.todos.map(item => (
        <div key={item.id}>
          <h1>{item.title}</h1>
          <span>{item.description}</span>
        </div>
      ))}
    </div>

</div>

    );
  }
}

export default App;
