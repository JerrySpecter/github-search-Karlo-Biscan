import React from 'react'
import withData from "../lib/apollo";
import RepoList from '../components/RepoList/index'


export default withData(props => {
  return (
    <RepoList />
  );
});
