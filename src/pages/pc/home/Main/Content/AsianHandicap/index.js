import React, { PureComponent } from 'react';
import styles from './index.scss';
import GameInfoLine from './MatchInfoLine';
import LoadingMask from '../../../../../../components/PCMask'

export default class index extends PureComponent {
  state = {
    maxWidth: undefined,
  };

  render() {
    const { RoundData,toggleGameLoading } = this.props;
    return (
      <div className={styles['match-wrapper']}>
        {
          toggleGameLoading && RoundData.length > 0 ? (
            <LoadingMask
              bg='rgba(255,255,255,.2)'
              loadingFontSize='20px'
              loadingIconSize='40px'
            />
          ): ''
        }

        <ul className={styles['match-list']}>
          {
           RoundData.length > 0 ?
             (RoundData.map((val,index) => (
              <GameInfoLine data={val} key={val.MatchID}  eventLineIndex={index} />
            ))
             ):
             (<LoadingMask />)
          }
        </ul>
      </div>
    );
   }
  }
