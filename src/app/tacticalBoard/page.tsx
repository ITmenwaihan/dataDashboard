// 足球战术板
import './index.css'

export default function TacticalBoard () {

  // 取数组间的交集，并返回结果
// intersection(a,b) => [2,3,6]
// intersection(a,c) => [1,2,3]
// intersection(a,b,c) => [2,3]

  const a = [1,2,3,6,2]
  const b = [2,3,5,6,2]
  const c = [2,3,1,2]

   const intersection = (...arg) => {
    const tmpArr = arg;
    const firstArr = tmpArr[0];
    let result = [];
    for (const item of tmpArr) {
      result = firstArr.reduce((acc, cur) => {
        const tmpFlag = tmpArr.every((x) => x.includes(cur));
        if (tmpFlag) {
          return [...acc , cur]
        }
        return acc
      },[])
    }
     console.log([...new Set(result)], 'result')

  }
  intersection(a, c)

  interface Router {
    path: './home',
    name: 'home'
  }
  type _router = keyof Router

  const aa:_router = 'name'


  return (
    <div className={'container'}>
      <div className={'header'}>
        <h2>
          {'足球战术板'}
        </h2>
      </div>
      <div className={'content'}>
        <div className={'player-area'}>
          <div draggable="true" className={'player num1'}>{'1'}</div>
          <div draggable="true" className={'player num2'}>{'2'}</div>
          <div draggable="true" className={'player num3'}>{'3'}</div>
          <div draggable="true" className={'player num4'}>{'4'}</div>
          <div draggable="true" className={'player num5'}>{'5'}</div>
          <div draggable="true" className={'player num6'}>{'6'}</div>
          <div draggable="true" className={'player num7'}>{'7'}</div>
          <div draggable="true" className={'player num8'}>{'8'}</div>
          <div draggable="true" className={'player num9'}>{'9'}</div>
          <div draggable="true" className={'player num10'}>{'10'}</div>
          <div draggable="true" className={'player num11'}>{'11'}</div>
        </div>
        <svg width="900" height="550" xmlns="http://www.w3.org/2000/svg">
          {/*// <!-- 足球场边界 -->*/}
          <rect width="900" height="550" fill="none" stroke="beige" strokeWidth="8"/>

          {/*// <!-- 中线 -->*/}
          <line x1="450" y1="0" x2="450" y2="550" stroke="beige" strokeWidth="4"/>

          {/*// <!-- 罚球区（大禁区） -->*/}
          <rect x="0" y="215" width="40" height="120" fill="none" stroke="beige" strokeWidth="4"/>
          <rect x="860" y="215" width="40" height="120" fill="none" stroke="beige" strokeWidth="4"/>
          <rect x="0" y="170" width="120" height="210" fill="none" stroke="beige" strokeWidth="4"/>
          <rect x="780" y="170" width="120" height="210" fill="none" stroke="beige" strokeWidth="4"/>

          {/*点球点*/}
          <circle cx='80' cy='275' r='4' fill='beige' ></circle>
          <circle cx='820' cy='275' r='4' fill='beige' ></circle>
          {/* 大禁区弧*/}
          <path d="M 120 225 A 35 45 0 1 1 120 324" fill="none" stroke="beige" strokeWidth="4" />
          <path d="M 780 225 A 35 45 0 1 0 780 324" fill="none" stroke="beige" strokeWidth="4" />

          {/*// <!-- 中心圆 -->*/}
          <circle cx="450" cy="275" r="110" fill="none" stroke="beige" strokeWidth="4"/>
          {/*中心点*/}
          <circle cx="450" cy="275" r="5" fill="beige" stroke="beige" strokeWidth="4"/>

          {/*// <!-- 角球区 -->*/}
          <path d="M 0 0 A 10 10 0 1 1 0 12" fill="none" stroke="beige" strokeWidth="4" />
          <path d="M 900 0 A 10 10 180 1 0 900 12" fill="none" stroke="beige" strokeWidth="4" />
          <path d="M 0 550 A 10 10 180 1 0 0 538" fill="none" stroke="beige" strokeWidth="4" />
          <path d="M 900 550 A 10 10 180 1 1 900 538" fill="none" stroke="beige" strokeWidth="4" />
        </svg>
        <div className={'player-area'}>
          <div draggable="true"  className={'player-blue'}></div>
          <div draggable="true"  className={'player-blue'}></div>
          <div draggable="true"  className={'player-blue'}></div>
          <div draggable="true"  className={'player-blue'}></div>
          <div draggable="true"  className={'player-blue'}></div>
          <div draggable="true"  className={'player-blue'}></div>
          <div draggable="true"  className={'player-blue'}></div>
          <div draggable="true"  className={'player-blue'}></div>
          <div draggable="true"  className={'player-blue'}></div>
          <div draggable="true"  className={'player-blue'}></div>
          <div draggable="true"  className={'player-blue'}></div>
          <div draggable="true"  className={'player-blue'}></div>
        </div>

      </div>
    </div>
  )
}
