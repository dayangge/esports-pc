import React, { PureComponent } from 'react';
import styles from './index.scss';

export default class Aside extends PureComponent {
  state = {

  };

  render() {
    const { data } = this.props;
    return (
      <li className={styles['category-item']} key={data.id}>
        <img alt=''
             src={data.logo}
             className={styles['game-logo']} />
        <span
          className={styles.name}>{data.name_cn}
        </span>
        {
          data.match_count === 0 || (
            <span className={styles.hot}>
             {data.match_count}
            </span>)
        }

      </li>

    );
  }
}
