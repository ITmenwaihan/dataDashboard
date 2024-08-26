
import './index.css'
 // export const dynamic = 'force-dynamic';
 export const revalidate = 10
export default function StaticPage() {
  const now = Date.now()

  return (
    <div>
      <h2>
        {now}
      </h2>
      <div className={'container'}>
        <div className={'left'}></div>
        <div className={'main'}></div>
      </div>
      <div className={'moveArea'}>
        <div className={'moveFlash'}>
          {'气球'}
        </div>
      </div>
    </div>
  )
}
