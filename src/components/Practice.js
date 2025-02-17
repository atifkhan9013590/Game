import React from 'react'

function Practice() {
  let stocks={
    Fruits:['strawberry','Apple','banana','Mango'],
    Liquid:['water','ice'],
    holder:['cup','cone'],
    Toppings:['chocolate','peanut','almond']
  }
  let if_is_Open = true;

  function Order(time){
    return new Promise((resolve,reject)=>{
      if(if_is_Open){
      setTimeout(()=>{
          resolve()
      },time)
    }

      else{
        reject('error')
      }
    })
    
  }
  async function Kitchen(){
   try{
    await Order(2000);
   console.log(`${stocks.Fruits[1]} was selected`);
   await Order(0)
   console.log('production has started')
   await Order(1000)
   console.log('Fruit has been chopped');
   }
   catch(error){
    console.log('customer left',error);
   }
   finally{
    console.log('day ended');
   }
  }
  Kitchen();
 
 
  return (
    <div>
      
    </div>
  )
}

export default Practice
