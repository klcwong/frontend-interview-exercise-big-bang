import React, { useState } from "react"
import GameButtons from "./GameButtons/GamesButtons"
import GameResult from "./GameResult/GameResult"

export enum Action {
  Rock,
  Paper,
  Scissors,
  Lizard,
  Spock
}

export enum Result {
  Win,
  Lose,
  Tie
}

const ACTIONS = [Action.Rock, Action.Paper, Action.Scissors, Action.Lizard, Action.Spock];

function getRandomAction(): Action {
  const randamIndex = Math.floor(Math.random() * ACTIONS.length)
  return ACTIONS[randamIndex]
}

function judge(player1Action: Action, player2Action: Action): Result {
  if (player1Action === player2Action) {
    return Result.Tie
  }
  switch (player1Action) {
    case Action.Scissors:
      if (player2Action === Action.Paper || player2Action == Action.Lizard) {
        return Result.Win
      }
      break;
    case Action.Paper:
      if (player2Action === Action.Rock || player2Action == Action.Spock) {
        return Result.Win
      }
      break;
    case Action.Rock:
      if (player2Action === Action.Scissors || player2Action == Action.Lizard) {
        return Result.Win
      }
      break;
    case Action.Lizard:
      if (player2Action === Action.Paper || player2Action == Action.Spock) {
        return Result.Win
      }
      break;
    case Action.Spock:
      if (player2Action === Action.Scissors || player2Action == Action.Rock) {
        return Result.Win
      }
      break;
    default:
      break;
  }
  return Result.Lose;
}

export interface GameState {
  isPlayed: boolean,
  player1Action: Action,
  player2Action: Action,
  result: Result
}

function GameArea() {
  const [gameState, setGameState] = useState<GameState>({
    isPlayed: false,
    player1Action: Action.Rock,
    player2Action: Action.Rock,
    result: Result.Tie,
  })

  function buttonHandler(event: React.MouseEvent<HTMLElement>) {
    const ActionType = event.currentTarget.getAttribute("data-action-type");
    if (ActionType === null) {
      console.error("Cannot find the attribute `data-action-type`");
      return
    }
    const player1Action = Number(ActionType) as Action
    const player2Action = getRandomAction();
    const result = judge(player1Action, player2Action)
    
    setGameState((state) =>({
      ...state,
      isPlayed: true,
      player1Action: player1Action,
      player2Action: player2Action,
      result:result,
    }))
  }

    return (
        <>
          <GameResult gameState={gameState}/>
          <GameButtons actions={ACTIONS} onClick={buttonHandler}/>
        </>
      )
}

export default GameArea