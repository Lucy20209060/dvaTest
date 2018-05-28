import React from 'react';
import { connect } from 'dva';
import styles from './AboutPage.css';

function AboutPage() {
  return (
    <div>
      <h1>AboutPage</h1>
    </div>
  );
}

AboutPage.propTypes = {
};

export default connect()(AboutPage);

