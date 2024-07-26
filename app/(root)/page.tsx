import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import React from 'react'

const Home = () => {
    const loggedIn = {firstName:"Nitish",lastName:"CK",email:"cknitish02@gmail.com"}
  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
            <HeaderBox type="greeting" title="Welcome" user={loggedIn?.firstName || 'Guest'} subtext="Access and Manage your Account and Transactions Efficiently."/>
            <TotalBalanceBox accounts={[]} totalBanks={1} totalCurrentBalance={1000.00}/>
        </header>
      </div>
      <RightSidebar user={loggedIn} transactions={[]} banks={[{},{}]}/>
    </section>
  )
}

export default Home
