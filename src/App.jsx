import React from 'react'
import TickerCard from './TickerCard'

const stocks = [  
  { ticker: 'NVDA' },
  { ticker: 'TSLA' },
  { ticker: 'GOOGL' },
  { ticker: 'QQQM1' }, // 임시로 오류 발생시키기
  { ticker: 'SPLG' }, 
  // { ticker: '005930.KS' },
]

function App() {
  return (
    <div className='bg-blue-200 min-h-screen p-5 flex flex-col items-center'>
      <h1 className="text-4xl font-bold text-blue-800 mb-10">오늘의 주식 시세</h1>
      <div className="grid grid-cols-3 gap-6">
        {
          stocks.map(stock => (
            <TickerCard 
              key={stock.ticker} 
              ticker={stock.ticker} 
            />
          ))
        }
      </div>
    </div>
  )
}

export default App