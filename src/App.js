
import { useReducer} from 'react';
import './App.css';
import Counter from './components/Counter';
import Post from './components/Post';
import Practice from './components/Practice';
const initialState = {
  scorecard: { your: 0, other: 0, tie: 0 },
  playerMove: null,
  MyMove: null,
  result: null,
};


function App() {
  const reducer=(state,action)=>{
    switch(action.type){
      case 'updateMove':
        return{
          ...state,
            playerMove:action.playerMove,
            MyMove:action.MyMove
          }
          case 'updateScore':
            return{...state,
            scorecard:
            {
              your:action.your,
              other:action.other,
              tie:action.tie
            }
          };
  
            case 'updateResult':
              return{
                ...state,
                result:action.result
              }
          }
         
  }
  const[state,dispatch]=useReducer(reducer,initialState)
    const player=()=>{
      const move=Math.floor((Math.random()*10))

     return move < 4 ? '🤞🏻' : move < 6 ? '✊🏻' : '✋🏻';
     
    
    }
    const playGame=(YourMove)=>{
      const OpponentMove = player();
      let yourScore = state.scorecard.your;
      let otherScore = state.scorecard.other;
      let tieScore = state.scorecard.tie;
    
      dispatch({type:'updateMove', playerMove:OpponentMove,MyMove:YourMove})

       if (YourMove === '🤞🏻') {
        if (OpponentMove === '🤞🏻') {
         dispatch({type:'updateResult',result:'Tie'})
       tieScore+=1
        }
        
        else if (OpponentMove === '✋🏻') {
          dispatch({type:'updateResult',result:'You Win'})
        yourScore+=1
        } 
        
        else if (OpponentMove === '✊🏻') {
          dispatch({type:'updateResult',result:'You Lose'})
         otherScore+=1
        }

      }
      
      else if (YourMove === '✊🏻') {

        if (OpponentMove === '✊🏻') {
          dispatch({type:'updateResult',result:'Tie'})
       tieScore+=1
        } 
        else if (OpponentMove === '✋🏻') {
          dispatch({type:'updateResult',result:'You Lose'})
         otherScore+=1
        }
         else if (OpponentMove === '🤞🏻') {
          dispatch({type:'updateResult',result:'You Win'})
         yourScore+=1
        }
      } 
      
      
      else if (YourMove === '✋🏻') {
        if (OpponentMove === '✋🏻') {
          dispatch({type:'updateResult',result:'Tie'})
         tieScore+=1
        } 
        
        else if (OpponentMove === '✊🏻') {
          dispatch({type:'updateResult',result:'You Win'})
         yourScore+=1
        } 
        
        else if (OpponentMove === '🤞🏻') {
          dispatch({type:'updateResult',result:'You Lose'})
         otherScore+=1
        }
      }
      dispatch({ type: 'updateScore', your: yourScore, other: otherScore, tie: tieScore });
    }

  return (
    <>
   <div className="game">
    <div className="App">
  <div className="scorecard">
   <div className="div1">You:{state.scorecard.your}</div> 
   <div className="div2">Computer:{state.scorecard.other}</div> 
   <div className="div3">Tie:{state.scorecard.tie}</div>
  </div>
  <div className="result">
  <div className="you">You:{state.MyMove}</div>
  <p>vs</p>
   <div className="com">Computer:{state.playerMove}</div>
  </div>
  
  
  
   
      <div className="row"><button id='btn1' onClick={()=>playGame('🤞🏻')} >🤞🏻</button>
   <button id='btn1' onClick={()=>playGame('✊🏻')}>✊🏻</button>
   <button id='btn1' onClick={()=>playGame('✋🏻')}>✋🏻</button></div>
   {state.result &&<div className="container">{state.result}</div>}
   

 
   </div>
   <div className="gamer">
   <div className="game-div1">
    Rock Paper Scissor
    
   </div>
   <div className="game-div2">
    With React js
   </div>
   </div>
   
    </div>
    
    </>
  );
}

export default App;
