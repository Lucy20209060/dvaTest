import React from 'react';
import { connect } from 'dva';
import styles from './AboutPage.css';
import { Link } from 'dva/router';

function AboutPage({dispatch,num}) {

  function deleteHandler(id) {
    dispatch({
      type: 'aboutModel/saveNum',
      payload: id
    });
  }

  return (
    <div>
      <h1 style={{cursor:'pointer'}} onClick={deleteHandler.bind(this,5)}>about page{num}</h1>
    </div>
  );
}

AboutPage.propTypes = {
};

function mapStateToProps(state) {
  const { num } = state.aboutModel;
  return {
    num
  };
}

export default connect(mapStateToProps)(AboutPage);


