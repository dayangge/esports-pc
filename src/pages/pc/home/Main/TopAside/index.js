import React, { PureComponent,Fragment } from 'react';
import { Icon } from 'antd';
import GameItem from './gameItem'
import styles from './index.scss';
import MaskLoading from '../../../../../components/PCMask'

class Aside extends PureComponent {
  state = {
    maxWidth: undefined,
    pos: 0
  };

  changeListBoxPos = (val) => {
    const {ids} = this.props;
    const len = ids.length * 100 -980;
    let {pos} = this.state;
    const offset = len + pos;
    if( len < 0) {
      return false
    }
    if(val === 1){
      if( pos < -980 ){
        pos =  pos + 980;
        this.setState({
          pos
        });
        return false
      }
      if( offset > -980){
        pos  = 0;
        this.setState({
          pos
        });
        return false
      }
    }else{
      if( offset >= 980 ){
        pos =  pos - 980;
        this.setState({
          pos
        });
        return false
      }
      if( offset < 980){
        pos  = -len;
        this.setState({
          pos
        });
        return false
      }
    }
  };

  render() {
    const { pos } = this.state;
    const {ids, list} = this.props;
    return (
      <div className={styles['top-scroll-wrapper']}>
        <div className={styles['aside-top']}>
            {
              ids.length > 0 ? (
                <aside className={styles['category-list-box']} >
                  <div className={styles.leftArrow} onClick={() => {this.changeListBoxPos(1)}}>
                    <Icon className={styles.icon} type="left" />
                  </div>
                  <ul className={styles['category-list']} style={{transform:`translateX(${pos}px)`}}>
                    {
                      ids.map((val)=>(
                        <GameItem key={val}  data={list[val]}/>
                      ))
                    }
                  </ul>
                  <div className={styles.rightArrow} onClick={() => {this.changeListBoxPos(2)}}>
                    <Icon className={styles.icon} type="right" />
                  </div>
                </aside>
              ) :<MaskLoading />
            }
        </div>
      </div>
      );
    }
  }

export default Aside
