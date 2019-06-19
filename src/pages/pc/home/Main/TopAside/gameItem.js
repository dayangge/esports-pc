import React, { PureComponent } from 'react';
import styles from './index.scss';

export default class Aside extends PureComponent {
  state = {

  };

  render() {
    const { data } = this.props;
    return (
      <li className={styles['category-item']} key={data.ID}>
        <img alt=''
             src={data.Cover}
             className={styles['game-logo']} />
        <span
          className={styles.name}>{data.Name}
        </span>
        {
          data.Count === 0 || (
            <span className={styles.hot}>
             {data.Count}
            </span>)
        }

      </li>

    );
  }
}
