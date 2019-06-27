import React, { PureComponent } from 'react';
import GameItem from './gameItem'
import styles from './index.scss';
import { connect } from 'dva';
import MaskLoading from '../../../../../components/PCMask';

@connect(({ gameDB }) => ({
  gameDB
}))
class Aside extends PureComponent {
  state = {
    maxWidth: undefined,
  };

  render() {
    const { ids ,list ,gameDB: {gameDB} } =  this.props;
    return (
      <div className={styles['asize-scroll-wrapper']}>
        <div className={`${styles['aside-left']} f1`}>
          <aside id="category-list">
            {
              ids.length > 0 ? (
                <ul className={styles['category-list']}>
                  {
                    ids.map((val)=>(
                      <GameItem key={val}  data={list[val]}  />
                    ))
                  }
                </ul>
              ): <MaskLoading />

            }

          </aside>
        </div>
      </div>
      );
    }
  }

export default Aside
