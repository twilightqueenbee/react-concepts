import React, { useState } from 'react'
import { GoHeartFill } from 'react-icons/go'
import { IoIosHeartEmpty } from 'react-icons/io'
import { MdHeartBroken } from 'react-icons/md'

const UseStateTask1 = () => {
    const[proposal,SetProposal]=useState(<IoIosHeartEmpty />)

    const acceptProposal=()=>{
        SetProposal(<GoHeartFill fill='red' />)
    }
    const rejectproposal=()=>{
        SetProposal(<MdHeartBroken fill='red'/>)
    }
    const reset=()=>{
        SetProposal(<IoIosHeartEmpty />)
    }
  return (
    <div className='mainbox'>
        
      <div className="box">
          {/* {
            proposal===null?<IoIosHeartEmpty />:(proposal===true)?<GoHeartFill fill='red' />:<MdHeartBroken fill='red'/>
          } */}

          <div className="heart">
            {
            proposal
            }
          </div>
          <div className="btn">
            <button onClick={acceptProposal}>Accept 😍</button>
            <button onClick={rejectproposal}>Reject 😔☹️😩</button>
            <button onClick={reset}>change your mind</button>
          </div>
      </div>
    </div>
  )
}

export default UseStateTask1