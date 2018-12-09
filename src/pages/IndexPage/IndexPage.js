import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import { Link } from 'dva/router';

function IndexPage({dispatch,num}) {

  function deleteHandler(id) {
    dispatch({
      type: 'indexModel/fetch',
      payload: id
    });
  }

  return (
    <div className={styles.normal}>
      <h1 className={styles.title}>Yay! Welcome to dva!{num}</h1>
      <div className={styles.welcome} />
      <ul className={styles.list}>
        <li>To get started, edit <code onClick={deleteHandler.bind(this,5)}>src/index.js</code> and save to reload.</li>
        <Link to='/about'>about</Link>
        <li><a href="https://github.com/dvajs/dva-docs/blob/master/v1/en-us/getting-started.md">Getting Started</a></li>
      </ul>
    </div>
  );
}

IndexPage.propTypes = {
};

function mapStateToProps(state) {
  const { num } = state.indexModel;
  return {
    num
  };
}

export default connect(mapStateToProps)(IndexPage);
