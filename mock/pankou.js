export default {
  'POST /api/pankou':
    (req, res) => {
      setTimeout(() => {
        res.send(
          {
          'success': 1,
          'msg': '178ms',
          'data': {
            'RecordCount': 41,
            'data': {
              'CateID': '2',
              'CateLogo': 'https://img.avia01.com/upload/201809/0712370353b5.jpeg',
              'IsVideo': 0,
              'StartAt': '2019/6/3 19:00:00',
              'MatchID': '31338',
              'Type': 'UpComing',
              'Title': '[BO3]Invictus Gaming VS Dominus Esports',
              'Status': '未开始',
              'StatusValue': 'Begin',
              'Category': '英雄联盟',
              'League': '2019 LPL 夏季赛',
              'Player': [{
                'ID': 1027,
                'Name': 'Invictus Gaming',
                'Code': 'IG',
                'Logo': 'https://img.avia01.com/upload/201806/01105548a1b5.png',
                'Score': 0,
              }, {
                'ID': 5718,
                'Name': 'Dominus Esports',
                'Code': 'DMO',
                'Logo': 'https://img.avia01.com/upload/201905/26030829a8d9.png',
                'Score': 0,
              }],
              'Round': [
                { 'ID': '2089', 'Name': '全场' }, { 'ID': '2066', 'Name': '第一局' }, { 'ID': '2067', 'Name': '第二局' }],
            },
            'list': [
              {
                'BetID': '220393',
                'MatchID': '31338',
                'Name': '比赛获胜',
                'CloseAt': '2019/6/3 19:00:00',
                'Round': '2089',
                'Status': 'Normal',
                'IsBet': 1,
                'Items': [
                  {
                    'ItemID': 490916,
                    'Name': 'IG',
                    'TeamID': 1027,
                    'Handicap': '',
                    'IsBet': 1,
                    'IsLock': 0,
                    'Score': 0.0000,
                    'Odds': 0,
                  },
                  {
                    'ItemID': 490917,
                    'Name': 'DMO',
                    'TeamID': 5718,
                    'Handicap': '',
                    'IsBet': 1,
                    'IsLock': 0,
                    'Score': 0.0000,
                    'Odds': 0,
                  }
                ],
              }, {
                'BetID': '223656',
                'MatchID': '31338',
                'Name': '让局胜者',
                'CloseAt': '2019/6/3 19:00:00',
                'Round': '2089',
                'Status': 'Normal',
                'IsBet': 1,
                'Items': [{
                  'ItemID': 497732,
                  'Name': 'IG',
                  'TeamID': 1027,
                  'Handicap': '-1.5',
                  'IsBet': 1,
                  'IsLock': 0,
                  'Score': 0.0000,
                  'Odds': 0,
                }, {
                  'ItemID': 497733,
                  'Name': 'DMO',
                  'TeamID': 5718,
                  'Handicap': '+1.5',
                  'IsBet': 1,
                  'IsLock': 0,
                  'Score': 0.0000,
                  'Odds': 0,
                }],
              }, {
                'BetID': '223657',
                'MatchID': '31338',
                'Name': '总地图数',
                'CloseAt': '2019/6/3 19:00:00',
                'Round': '2089',
                'Status': 'Normal',
                'IsBet': 1,
                'Items': [{
                  'ItemID': 497734,
                  'Name': '大于',
                  'TeamID': 1027,
                  'Handicap': '2.5',
                  'IsBet': 1,
                  'IsLock': 0,
                  'Score': 0.0000,
                  'Odds': 0,
                }, {
                  'ItemID': 497735,
                  'Name': '小于',
                  'TeamID': 5718,
                  'Handicap': '2.5',
                  'IsBet': 1,
                  'IsLock': 0,
                  'Score': 0.0000,
                  'Odds': 0,
                }],
              }, {
                'BetID': '223658',
                'MatchID': '31338',
                'Name': '地图1-获胜者',
                'CloseAt': '2019/6/3 19:00:00',
                'Round': '2066',
                'Status': 'Normal',
                'IsBet': 1,
                'Items': [{
                  'ItemID': 497736,
                  'Name': 'IG',
                  'TeamID': 1027,
                  'Handicap': '',
                  'IsBet': 1,
                  'IsLock': 0,
                  'Score': 0.0000,
                  'Odds': 0,
                }, {
                  'ItemID': 497737,
                  'Name': 'DMO',
                  'TeamID': 5718,
                  'Handicap': '',
                  'IsBet': 1,
                  'IsLock': 0,
                  'Score': 0.0000,
                  'Odds': 0,
                }],
              }, {
                'BetID': '223659',
                'MatchID': '31338',
                'Name': '地图1-第一条元素龙属性',
                'CloseAt': '2019/6/3 19:00:00',
                'Round': '2066',
                'Status': 'Normal',
                'IsBet': 1,
                'Items': [{
                  'ItemID': 497738,
                  'Name': '火',
                  'TeamID': 0,
                  'Handicap': '',
                  'IsBet': 1,
                  'IsLock': 0,
                  'Score': 0.0000,
                  'Odds': 0,
                }, {
                  'ItemID': 497739,
                  'Name': '土',
                  'TeamID': 0,
                  'Handicap': '',
                  'IsBet': 1,
                  'IsLock': 0,
                  'Score': 0.0000,
                  'Odds': 0,
                }, {
                  'ItemID': 497740,
                  'Name': '风',
                  'TeamID': 0,
                  'Handicap': '',
                  'IsBet': 1,
                  'IsLock': 0,
                  'Score': 0.0000,
                  'Odds': 0,
                }, {
                  'ItemID': 497741,
                  'Name': '水',
                  'TeamID': 0,
                  'Handicap': '',
                  'IsBet': 1,
                  'IsLock': 0,
                  'Score': 0.0000,
                  'Odds': 0,
                }],
              }, {
                'BetID': '223660',
                'MatchID': '31338',
                'Name': '地图1-获得第一滴血的队伍',
                'CloseAt': '2019/6/3 19:00:00',
                'Round': '2066',
                'Status': 'Normal',
                'IsBet': 1,
                'Items': [{
                  'ItemID': 497742,
                  'Name': 'IG',
                  'TeamID': 1027,
                  'Handicap': '',
                  'IsBet': 1,
                  'IsLock': 0,
                  'Score': 0.0000,
                  'Odds': 0,
                }, {
                  'ItemID': 497743,
                  'Name': 'DMO',
                  'TeamID': 5718,
                  'Handicap': '',
                  'IsBet': 1,
                  'IsLock': 0,
                  'Score': 0.0000,
                  'Odds': 0,
                }],
              }, {
                'BetID': '223661',
                'MatchID': '31338',
                'Name': '地图1-率先完成10次击杀队伍',
                'CloseAt': '2019/6/3 19:00:00',
                'Round': '2066',
                'Status': 'Normal',
                'IsBet': 1,
                'Items': [{
                  'ItemID': 497744,
                  'Name': 'IG',
                  'TeamID': 1027,
                  'Handicap': '',
                  'IsBet': 1,
                  'IsLock': 0,
                  'Score': 0.0000,
                  'Odds': 0,
                }, {
                  'ItemID': 497745,
                  'Name': 'DMO',
                  'TeamID': 5718,
                  'Handicap': '',
                  'IsBet': 1,
                  'IsLock': 0,
                  'Score': 0.0000,
                  'Odds': 0,
                }],
              }, {
                'BetID': '223662',
                'MatchID': '31338',
                'Name': '地图1-获得第一塔的队伍',
                'CloseAt': '2019/6/3 19:00:00',
                'Round': '2066',
                'Status': 'Normal',
                'IsBet': 1,
                'Items': [{
                  'ItemID': 497746,
                  'Name': 'IG',
                  'TeamID': 1027,
                  'Handicap': '',
                  'IsBet': 1,
                  'IsLock': 0,
                  'Score': 0.0000,
                  'Odds': 0,
                }, {
                  'ItemID': 497747,
                  'Name': 'DMO',
                  'TeamID': 5718,
                  'Handicap': '',
                  'IsBet': 1,
                  'IsLock': 0,
                  'Score': 0.0000,
                  'Odds': 0,
                }],
              }, {
                'BetID': '223663',
                'MatchID': '31338',
                'Name': '地图1-率先击杀河道迅捷蟹队伍',
                'CloseAt': '2019/6/3 19:00:00',
                'Round': '2066',
                'Status': 'Normal',
                'IsBet': 1,
                'Items': [{
                  'ItemID': 497748,
                  'Name': 'IG',
                  'TeamID': 1027,
                  'Handicap': '',
                  'IsBet': 1,
                  'IsLock': 0,
                  'Score': 0.0000,
                  'Odds': 0,
                }, {
                  'ItemID': 497749,
                  'Name': 'DMO',
                  'TeamID': 5718,
                  'Handicap': '',
                  'IsBet': 1,
                  'IsLock': 0,
                  'Score': 0.0000,
                  'Odds': 0,
                }],
              }, {
                'BetID': '223664',
                'MatchID': '31338',
                'Name': '地图1-首只河道迅捷蟹击杀位置',
                'CloseAt': '2019/6/3 19:00:00',
                'Round': '2066',
                'Status': 'Normal',
                'IsBet': 1,
                'Items': [{
                  'ItemID': 497750,
                  'Name': '小龙处',
                  'TeamID': 1027,
                  'Handicap': '',
                  'IsBet': 1,
                  'IsLock': 0,
                  'Score': 0.0000,
                  'Odds': 0,
                }, {
                  'ItemID': 497751,
                  'Name': '大龙处',
                  'TeamID': 5718,
                  'Handicap': '',
                  'IsBet': 1,
                  'IsLock': 0,
                  'Score': 0.0000,
                  'Odds': 0,
                }],
              }, {
                'BetID': '223665',
                'MatchID': '31338',
                'Name': '地图1-击杀首条小龙',
                'CloseAt': '2019/6/3 19:00:00',
                'Round': '2066',
                'Status': 'Normal',
                'IsBet': 1,
                'Items': [{
                  'ItemID': 497752,
                  'Name': 'IG',
                  'TeamID': 1027,
                  'Handicap': '',
                  'IsBet': 1,
                  'IsLock': 0,
                  'Score': 0.0000,
                  'Odds': 0,
                }, {
                  'ItemID': 497753,
                  'Name': 'DMO',
                  'TeamID': 5718,
                  'Handicap': '',
                  'IsBet': 1,
                  'IsLock': 0,
                  'Score': 0.0000,
                  'Odds': 0,
                }],
              }, {
                'BetID': '223666',
                'MatchID': '31338',
                'Name': '地图1-率先击杀峡谷先锋的队伍',
                'CloseAt': '2019/6/3 19:00:00',
                'Round': '2066',
                'Status': 'Normal',
                'IsBet': 1,
                'Items': [{
                  'ItemID': 497754,
                  'Name': 'IG',
                  'TeamID': 1027,
                  'Handicap': '',
                  'IsBet': 1,
                  'IsLock': 0,
                  'Score': 0.0000,
                  'Odds': 0,
                }, {
                  'ItemID': 497755,
                  'Name': 'DMO',
                  'TeamID': 5718,
                  'Handicap': '',
                  'IsBet': 1,
                  'IsLock': 0,
                  'Score': 0.0000,
                  'Odds': 0,
                }],
              }, {
                'BetID': '223667',
                'MatchID': '31338',
                'Name': '地图1-击杀首条大龙',
                'CloseAt': '2019/6/3 19:00:00',
                'Round': '2066',
                'Status': 'Normal',
                'IsBet': 1,
                'Items': [{
                  'ItemID': 497756,
                  'Name': 'IG',
                  'TeamID': 1027,
                  'Handicap': '',
                  'IsBet': 1,
                  'IsLock': 0,
                  'Score': 0.0000,
                  'Odds': 0,
                }, {
                  'ItemID': 497757,
                  'Name': 'DMO',
                  'TeamID': 5718,
                  'Handicap': '',
                  'IsBet': 1,
                  'IsLock': 0,
                  'Score': 0.0000,
                  'Odds': 0,
                }],
              }, {
                'BetID': '223668',
                'MatchID': '31338',
                'Name': '地图1-击杀峡谷先锋时间',
                'CloseAt': '2019/6/3 19:00:00',
                'Round': '2066',
                'Status': 'Normal',
                'IsBet': 1,
                'Items': [{
                  'ItemID': 497758,
                  'Name': '大于',
                  'TeamID': 1027,
                  'Handicap': '11:30',
                  'IsBet': 1,
                  'IsLock': 0,
                  'Score': 0.0000,
                  'Odds': 0,
                }, {
                  'ItemID': 497759,
                  'Name': '小于',
                  'TeamID': 5718,
                  'Handicap': '11:30',
                  'IsBet': 1,
                  'IsLock': 0,
                  'Score': 0.0000,
                  'Odds': 0,
                }],
              }, {
                'BetID': '223669',
                'MatchID': '31338',
                'Name': '地图1-击杀元素龙总数',
                'CloseAt': '2019/6/3 19:00:00',
                'Round': '2066',
                'Status': 'Normal',
                'IsBet': 1,
                'Items': [{
                  'ItemID': 497760,
                  'Name': '大于',
                  'TeamID': 1027,
                  'Handicap': '4.5',
                  'IsBet': 1,
                  'IsLock': 0,
                  'Score': 0.0000,
                  'Odds': 0,
                }, {
                  'ItemID': 497761,
                  'Name': '小于',
                  'TeamID': 5718,
                  'Handicap': '4.5',
                  'IsBet': 1,
                  'IsLock': 0,
                  'Score': 0.0000,
                  'Odds': 0,
                }],
              }, {
                'BetID': '223670',
                'MatchID': '31338',
                'Name': '地图1-击杀大龙总数',
                'CloseAt': '2019/6/3 19:00:00',
                'Round': '2066',
                'Status': 'Normal',
                'IsBet': 1,
                'Items': [{
                  'ItemID': 497762,
                  'Name': '大于',
                  'TeamID': 1027,
                  'Handicap': '1.5',
                  'IsBet': 1,
                  'IsLock': 0,
                  'Score': 0.0000,
                  'Odds': 0,
                }, {
                  'ItemID': 497763,
                  'Name': '小于',
                  'TeamID': 5718,
                  'Handicap': '1.5',
                  'IsBet': 1,
                  'IsLock': 0,
                  'Score': 0.0000,
                  'Odds': 0,
                }],
              }, {
                'BetID': '223671',
                'MatchID': '31338',
                'Name': '地图1-摧毁防御塔总数',
                'CloseAt': '2019/6/3 19:00:00',
                'Round': '2066',
                'Status': 'Normal',
                'IsBet': 1,
                'Items': [{
                  'ItemID': 497764,
                  'Name': '大于',
                  'TeamID': 1027,
                  'Handicap': '12.5',
                  'IsBet': 1,
                  'IsLock': 0,
                  'Score': 0.0000,
                  'Odds': 0,
                }, {
                  'ItemID': 497765,
                  'Name': '小于',
                  'TeamID': 5718,
                  'Handicap': '12.5',
                  'IsBet': 1,
                  'IsLock': 0,
                  'Score': 0.0000,
                  'Odds': 0,
                }],
              }, {
                'BetID': '223672',
                'MatchID': '31338',
                'Name': '地图1-摧毁高地水晶总数',
                'CloseAt': '2019/6/3 19:00:00',
                'Round': '2066',
                'Status': 'Normal',
                'IsBet': 1,
                'Items': [{
                  'ItemID': 497766,
                  'Name': '大于',
                  'TeamID': 1027,
                  'Handicap': '1.5',
                  'IsBet': 1,
                  'IsLock': 0,
                  'Score': 0.0000,
                  'Odds': 0,
                }, {
                  'ItemID': 497767,
                  'Name': '小于',
                  'TeamID': 5718,
                  'Handicap': '1.5',
                  'IsBet': 1,
                  'IsLock': 0,
                  'Score': 0.0000,
                  'Odds': 0,
                }],
              }, {
                'BetID': '223843',
                'MatchID': '31338',
                'Name': '地图1-地图总时长',
                'CloseAt': '2019/6/3 19:00:00',
                'Round': '2066',
                'Status': 'Normal',
                'IsBet': 1,
                'Items': [{
                  'ItemID': 498218,
                  'Name': '大于',
                  'TeamID': 0,
                  'Handicap': '30:00',
                  'IsBet': 1,
                  'IsLock': 0,
                  'Score': 0.0000,
                  'Odds': 0,
                }, {
                  'ItemID': 498219,
                  'Name': '小于',
                  'TeamID': 0,
                  'Handicap': '30:00',
                  'IsBet': 1,
                  'IsLock': 0,
                  'Score': 0.0000,
                  'Odds': 0,
                }],
              }, {
                'BetID': '223674',
                'MatchID': '31338',
                'Name': '地图1-总击杀数',
                'CloseAt': '2019/6/3 19:00:00',
                'Round': '2066',
                'Status': 'Normal',
                'IsBet': 1,
                'Items': [{
                  'ItemID': 497770,
                  'Name': '大于',
                  'TeamID': 1027,
                  'Handicap': '29.5',
                  'IsBet': 1,
                  'IsLock': 0,
                  'Score': 0.0000,
                  'Odds': 0,
                }, {
                  'ItemID': 497771,
                  'Name': '小于',
                  'TeamID': 5718,
                  'Handicap': '29.5',
                  'IsBet': 1,
                  'IsLock': 0,
                  'Score': 0.0000,
                  'Odds': 0,
                }],
              }, {
                'BetID': '223675',
                'MatchID': '31338',
                'Name': '地图1-击杀让分',
                'CloseAt': '2019/6/3 19:00:00',
                'Round': '2066',
                'Status': 'Normal',
                'IsBet': 1,
                'Items': [{
                  'ItemID': 497772,
                  'Name': 'IG',
                  'TeamID': 1027,
                  'Handicap': '-7.5',
                  'IsBet': 1,
                  'IsLock': 0,
                  'Score': 0.0000,
                  'Odds': 0,
                }, {
                  'ItemID': 497773,
                  'Name': 'DMO',
                  'TeamID': 5718,
                  'Handicap': '+7.5',
                  'IsBet': 1,
                  'IsLock': 0,
                  'Score': 0.0000,
                  'Odds': 0,
                }],
              }, {
                'BetID': '223676',
                'MatchID': '31338',
                'Name': '地图1-总击杀数单双',
                'CloseAt': '2019/6/3 19:00:00',
                'Round': '2066',
                'Status': 'Normal',
                'IsBet': 1,
                'Items': [{
                  'ItemID': 497774,
                  'Name': '单',
                  'TeamID': 1027,
                  'Handicap': '',
                  'IsBet': 1,
                  'IsLock': 0,
                  'Score': 0.0000,
                  'Odds': 0,
                }, {
                  'ItemID': 497775,
                  'Name': '双',
                  'TeamID': 5718,
                  'Handicap': '',
                  'IsBet': 1,
                  'IsLock': 0,
                  'Score': 0.0000,
                  'Odds': 0,
                }],
              }, {
                'BetID': '223677',
                'MatchID': '31338',
                'Name': '地图2-获胜者',
                'CloseAt': '2019/6/3 19:00:00',
                'Round': '2067',
                'Status': 'Normal',
                'IsBet': 1,
                'Items': [{
                  'ItemID': 497776,
                  'Name': 'IG',
                  'TeamID': 1027,
                  'Handicap': '',
                  'IsBet': 1,
                  'IsLock': 0,
                  'Score': 0.0000,
                  'Odds': 0,
                }, {
                  'ItemID': 497777,
                  'Name': 'DMO',
                  'TeamID': 5718,
                  'Handicap': '',
                  'IsBet': 1,
                  'IsLock': 0,
                  'Score': 0.0000,
                  'Odds': 0,
                }],
              }, {
                'BetID': '223678',
                'MatchID': '31338',
                'Name': '地图2-第一条元素龙属性',
                'CloseAt': '2019/6/3 19:00:00',
                'Round': '2067',
                'Status': 'Normal',
                'IsBet': 1,
                'Items': [{
                  'ItemID': 497778,
                  'Name': '火',
                  'TeamID': 0,
                  'Handicap': '',
                  'IsBet': 1,
                  'IsLock': 0,
                  'Score': 0.0000,
                  'Odds': 0,
                }, {
                  'ItemID': 497779,
                  'Name': '土',
                  'TeamID': 0,
                  'Handicap': '',
                  'IsBet': 1,
                  'IsLock': 0,
                  'Score': 0.0000,
                  'Odds': 0,
                }, {
                  'ItemID': 497780,
                  'Name': '风',
                  'TeamID': 0,
                  'Handicap': '',
                  'IsBet': 1,
                  'IsLock': 0,
                  'Score': 0.0000,
                  'Odds': 0,
                }, {
                  'ItemID': 497781,
                  'Name': '水',
                  'TeamID': 0,
                  'Handicap': '',
                  'IsBet': 1,
                  'IsLock': 0,
                  'Score': 0.0000,
                  'Odds': 0,
                }],
              }, {
                'BetID': '223679',
                'MatchID': '31338',
                'Name': '地图2-获得第一滴血的队伍',
                'CloseAt': '2019/6/3 19:00:00',
                'Round': '2067',
                'Status': 'Normal',
                'IsBet': 1,
                'Items': [{
                  'ItemID': 497782,
                  'Name': 'IG',
                  'TeamID': 1027,
                  'Handicap': '',
                  'IsBet': 1,
                  'IsLock': 0,
                  'Score': 0.0000,
                  'Odds': 0,
                }, {
                  'ItemID': 497783,
                  'Name': 'DMO',
                  'TeamID': 5718,
                  'Handicap': '',
                  'IsBet': 1,
                  'IsLock': 0,
                  'Score': 0.0000,
                  'Odds': 0,
                }],
              }, {
                'BetID': '223680',
                'MatchID': '31338',
                'Name': '地图2-率先完成10次击杀队伍',
                'CloseAt': '2019/6/3 19:00:00',
                'Round': '2067',
                'Status': 'Normal',
                'IsBet': 1,
                'Items': [{
                  'ItemID': 497784,
                  'Name': 'IG',
                  'TeamID': 1027,
                  'Handicap': '',
                  'IsBet': 1,
                  'IsLock': 0,
                  'Score': 0.0000,
                  'Odds': 0,
                }, {
                  'ItemID': 497785,
                  'Name': 'DMO',
                  'TeamID': 5718,
                  'Handicap': '',
                  'IsBet': 1,
                  'IsLock': 0,
                  'Score': 0.0000,
                  'Odds': 0,
                }],
              }, {
                'BetID': '223681',
                'MatchID': '31338',
                'Name': '地图2-获得第一塔的队伍',
                'CloseAt': '2019/6/3 19:00:00',
                'Round': '2067',
                'Status': 'Normal',
                'IsBet': 1,
                'Items': [{
                  'ItemID': 497786,
                  'Name': 'IG',
                  'TeamID': 1027,
                  'Handicap': '',
                  'IsBet': 1,
                  'IsLock': 0,
                  'Score': 0.0000,
                  'Odds': 0,
                }, {
                  'ItemID': 497787,
                  'Name': 'DMO',
                  'TeamID': 5718,
                  'Handicap': '',
                  'IsBet': 1,
                  'IsLock': 0,
                  'Score': 0.0000,
                  'Odds': 0,
                }],
              }, {
                'BetID': '223682',
                'MatchID': '31338',
                'Name': '地图2-率先击杀河道迅捷蟹队伍',
                'CloseAt': '2019/6/3 19:00:00',
                'Round': '2067',
                'Status': 'Normal',
                'IsBet': 1,
                'Items': [{
                  'ItemID': 497788,
                  'Name': 'IG',
                  'TeamID': 1027,
                  'Handicap': '',
                  'IsBet': 1,
                  'IsLock': 0,
                  'Score': 0.0000,
                  'Odds': 0,
                }, {
                  'ItemID': 497789,
                  'Name': 'DMO',
                  'TeamID': 5718,
                  'Handicap': '',
                  'IsBet': 1,
                  'IsLock': 0,
                  'Score': 0.0000,
                  'Odds': 0,
                }],
              }, {
                'BetID': '223683',
                'MatchID': '31338',
                'Name': '地图2-首只河道迅捷蟹击杀位置',
                'CloseAt': '2019/6/3 19:00:00',
                'Round': '2067',
                'Status': 'Normal',
                'IsBet': 1,
                'Items': [{
                  'ItemID': 497790,
                  'Name': '小龙处',
                  'TeamID': 1027,
                  'Handicap': '',
                  'IsBet': 1,
                  'IsLock': 0,
                  'Score': 0.0000,
                  'Odds': 0,
                }, {
                  'ItemID': 497791,
                  'Name': '大龙处',
                  'TeamID': 5718,
                  'Handicap': '',
                  'IsBet': 1,
                  'IsLock': 0,
                  'Score': 0.0000,
                  'Odds': 0,
                }],
              }, {
                'BetID': '223684',
                'MatchID': '31338',
                'Name': '地图2-击杀首条小龙',
                'CloseAt': '2019/6/3 19:00:00',
                'Round': '2067',
                'Status': 'Normal',
                'IsBet': 1,
                'Items': [{
                  'ItemID': 497792,
                  'Name': 'IG',
                  'TeamID': 1027,
                  'Handicap': '',
                  'IsBet': 1,
                  'IsLock': 0,
                  'Score': 0.0000,
                  'Odds': 0,
                }, {
                  'ItemID': 497793,
                  'Name': 'DMO',
                  'TeamID': 5718,
                  'Handicap': '',
                  'IsBet': 1,
                  'IsLock': 0,
                  'Score': 0.0000,
                  'Odds': 0,
                }],
              }, {
                'BetID': '223685',
                'MatchID': '31338',
                'Name': '地图2-率先击杀峡谷先锋的队伍',
                'CloseAt': '2019/6/3 19:00:00',
                'Round': '2067',
                'Status': 'Normal',
                'IsBet': 1,
                'Items': [{
                  'ItemID': 497794,
                  'Name': 'IG',
                  'TeamID': 1027,
                  'Handicap': '',
                  'IsBet': 1,
                  'IsLock': 0,
                  'Score': 0.0000,
                  'Odds': 0,
                }, {
                  'ItemID': 497795,
                  'Name': 'DMO',
                  'TeamID': 5718,
                  'Handicap': '',
                  'IsBet': 1,
                  'IsLock': 0,
                  'Score': 0.0000,
                  'Odds': 0,
                }],
              }, {
                'BetID': '223686',
                'MatchID': '31338',
                'Name': '地图2-击杀首条大龙',
                'CloseAt': '2019/6/3 19:00:00',
                'Round': '2067',
                'Status': 'Normal',
                'IsBet': 1,
                'Items': [{
                  'ItemID': 497796,
                  'Name': 'IG',
                  'TeamID': 1027,
                  'Handicap': '',
                  'IsBet': 1,
                  'IsLock': 0,
                  'Score': 0.0000,
                  'Odds': 0,
                }, {
                  'ItemID': 497797,
                  'Name': 'DMO',
                  'TeamID': 5718,
                  'Handicap': '',
                  'IsBet': 1,
                  'IsLock': 0,
                  'Score': 0.0000,
                  'Odds': 0,
                }],
              }, {
                'BetID': '223687',
                'MatchID': '31338',
                'Name': '地图2-击杀峡谷先锋时间',
                'CloseAt': '2019/6/3 19:00:00',
                'Round': '2067',
                'Status': 'Normal',
                'IsBet': 1,
                'Items': [{
                  'ItemID': 497798,
                  'Name': '大于',
                  'TeamID': 1027,
                  'Handicap': '11:30',
                  'IsBet': 1,
                  'IsLock': 0,
                  'Score': 0.0000,
                  'Odds': 0,
                }, {
                  'ItemID': 497799,
                  'Name': '小于',
                  'TeamID': 5718,
                  'Handicap': '11:30',
                  'IsBet': 1,
                  'IsLock': 0,
                  'Score': 0.0000,
                  'Odds': 0,
                }],
              }, {
                'BetID': '223688',
                'MatchID': '31338',
                'Name': '地图2-击杀元素龙总数',
                'CloseAt': '2019/6/3 19:00:00',
                'Round': '2067',
                'Status': 'Normal',
                'IsBet': 1,
                'Items': [{
                  'ItemID': 497800,
                  'Name': '大于',
                  'TeamID': 1027,
                  'Handicap': '4.5',
                  'IsBet': 1,
                  'IsLock': 0,
                  'Score': 0.0000,
                  'Odds': 0,
                }, {
                  'ItemID': 497801,
                  'Name': '小于',
                  'TeamID': 5718,
                  'Handicap': '4.5',
                  'IsBet': 1,
                  'IsLock': 0,
                  'Score': 0.0000,
                  'Odds': 0,
                }],
              }, {
                'BetID': '223689',
                'MatchID': '31338',
                'Name': '地图2-击杀大龙总数',
                'CloseAt': '2019/6/3 19:00:00',
                'Round': '2067',
                'Status': 'Normal',
                'IsBet': 1,
                'Items': [{
                  'ItemID': 497802,
                  'Name': '大于',
                  'TeamID': 1027,
                  'Handicap': '1.5',
                  'IsBet': 1,
                  'IsLock': 0,
                  'Score': 0.0000,
                  'Odds': 0,
                }, {
                  'ItemID': 497803,
                  'Name': '小于',
                  'TeamID': 5718,
                  'Handicap': '1.5',
                  'IsBet': 1,
                  'IsLock': 0,
                  'Score': 0.0000,
                  'Odds': 0,
                }],
              }, {
                'BetID': '223690',
                'MatchID': '31338',
                'Name': '地图2-摧毁防御塔总数',
                'CloseAt': '2019/6/3 19:00:00',
                'Round': '2067',
                'Status': 'Normal',
                'IsBet': 1,
                'Items': [{
                  'ItemID': 497804,
                  'Name': '大于',
                  'TeamID': 1027,
                  'Handicap': '12.5',
                  'IsBet': 1,
                  'IsLock': 0,
                  'Score': 0.0000,
                  'Odds': 0,
                }, {
                  'ItemID': 497805,
                  'Name': '小于',
                  'TeamID': 5718,
                  'Handicap': '12.5',
                  'IsBet': 1,
                  'IsLock': 0,
                  'Score': 0.0000,
                  'Odds': 0,
                }],
              }, {
                'BetID': '223691',
                'MatchID': '31338',
                'Name': '地图2-摧毁高地水晶总数',
                'CloseAt': '2019/6/3 19:00:00',
                'Round': '2067',
                'Status': 'Normal',
                'IsBet': 1,
                'Items': [{
                  'ItemID': 497806,
                  'Name': '大于',
                  'TeamID': 1027,
                  'Handicap': '1.5',
                  'IsBet': 1,
                  'IsLock': 0,
                  'Score': 0.0000,
                  'Odds': 0,
                }, {
                  'ItemID': 497807,
                  'Name': '小于',
                  'TeamID': 5718,
                  'Handicap': '1.5',
                  'IsBet': 1,
                  'IsLock': 0,
                  'Score': 0.0000,
                  'Odds': 0,
                }],
              }, {
                'BetID': '223692',
                'MatchID': '31338',
                'Name': '地图2-总时长',
                'CloseAt': '2019/6/3 19:00:00',
                'Round': '2067',
                'Status': 'Normal',
                'IsBet': 1,
                'Items': [{
                  'ItemID': 497808,
                  'Name': '大于',
                  'TeamID': 1027,
                  'Handicap': '31:00',
                  'IsBet': 1,
                  'IsLock': 0,
                  'Score': 0.0000,
                  'Odds': 0,
                }, {
                  'ItemID': 497809,
                  'Name': '小于',
                  'TeamID': 5718,
                  'Handicap': '31:00',
                  'IsBet': 1,
                  'IsLock': 0,
                  'Score': 0.0000,
                  'Odds': 0,
                }],
              }, {
                'BetID': '223693',
                'MatchID': '31338',
                'Name': '地图2-总击杀数',
                'CloseAt': '2019/6/3 19:00:00',
                'Round': '2067',
                'Status': 'Normal',
                'IsBet': 1,
                'Items': [{
                  'ItemID': 497810,
                  'Name': '大于',
                  'TeamID': 1027,
                  'Handicap': '29.5',
                  'IsBet': 1,
                  'IsLock': 0,
                  'Score': 0.0000,
                  'Odds': 0,
                }, {
                  'ItemID': 497811,
                  'Name': '小于',
                  'TeamID': 5718,
                  'Handicap': '29.5',
                  'IsBet': 1,
                  'IsLock': 0,
                  'Score': 0.0000,
                  'Odds': 0,
                }],
              }, {
                'BetID': '223694',
                'MatchID': '31338',
                'Name': '地图2-击杀让分',
                'CloseAt': '2019/6/3 19:00:00',
                'Round': '2067',
                'Status': 'Normal',
                'IsBet': 1,
                'Items': [{
                  'ItemID': 497812,
                  'Name': 'IG',
                  'TeamID': 1027,
                  'Handicap': '-7.5',
                  'IsBet': 1,
                  'IsLock': 0,
                  'Score': 0.0000,
                  'Odds': 0,
                }, {
                  'ItemID': 497813,
                  'Name': 'DMO',
                  'TeamID': 5718,
                  'Handicap': '+7.5',
                  'IsBet': 1,
                  'IsLock': 0,
                  'Score': 0.0000,
                  'Odds': 0,
                }],
              }, {
                'BetID': '223695',
                'MatchID': '31338',
                'Name': '地图2-总击杀数单双',
                'CloseAt': '2019/6/3 19:00:00',
                'Round': '2067',
                'Status': 'Normal',
                'IsBet': 1,
                'Items': [
                  {
                  'ItemID': 497814,
                  'Name': '单',
                  'TeamID': 1027,
                  'Handicap': '',
                  'IsBet': 1,
                  'IsLock': 0,
                  'Score': 0.0000,
                  'Odds': 0,
                  },
                  {
                  'ItemID': 497815,
                  'Name': '双',
                  'TeamID': 5718,
                  'Handicap': '',
                  'IsBet': 1,
                  'IsLock': 0,
                  'Score': 0.0000,
                  'Odds': 0,
                }],
              }],
          },
        },);
      }, 2000);
    },

};