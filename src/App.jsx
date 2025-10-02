import React from 'react'
import TickerCard from './TickerCard'

const stocks = [  
  { ticker: 'NVDA' },
  { ticker: 'TSLA' },
  { ticker: 'GOOGL' },
  { ticker: 'QQQM' },
  { ticker: 'SPLG' }, 
  { ticker: 'CRCL' },
  { ticker: '005930.KS' }, // 한국 주식
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