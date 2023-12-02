import { Step, StepLabel, Stepper } from '@mui/material'
import React from 'react'


const steps=[
    "placed",
    "Order Confirmed",
    "Shpped",
    "Out for Delivery",
    "Delivered"

]
const OrderTracker = ({activeStep}) => {
  return (
    <div className='w-full'>
        <Stepper activeStep={activeStep} alternativeLabel>
{steps.map((lable)=><Step>
<StepLabel sx={{color:"#9155fd", fontSize:"44px"}}>{lable}</StepLabel>
</Step>)}
        </Stepper>
        
    </div>
  )
}

export default OrderTracker