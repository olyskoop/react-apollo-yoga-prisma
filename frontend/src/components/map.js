import React, { Component } from 'react';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';

const GET_MISSIONS = gql`
  {
    missions {
      title
      id
    }
  }
`

export default class Map extends Component {
  render () {
    return (
      <Query query={GET_MISSIONS}>
        {({ loading, error, data }) => {
          if (loading) return <div>Loading...</div>;
          if (error) {
            console.error(error)
            return (<div>Error :( <pre>{error.toString()}</pre></div>)
          }

          return (
            <div className="App">
              <header className="App-header">
                <p>
                  Welcome to Dispatchr
                </p>
              </header>
              <main>
                <ul>
                  {data.missions.map(m => (
                    <li>{m.title}</li>
                  ))}
                </ul>
              </main>
            </div>
          )
        }}
      </Query>
    );
  }
}