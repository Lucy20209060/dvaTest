import React from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import style from './AboutPage.scss';

function AboutPage({dispatch,num}) {

  function deleteHandler(id) {
    dispatch({
      type: 'aboutModel/saveNum',
      payload: id
    });
  }

  return (
    <div className={style.aboutPage}>
      <h1 onClick={deleteHandler.bind(this,5)}>about page{num}</h1>
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


