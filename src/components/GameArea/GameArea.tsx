import React, { useState } from "react"
import GameButtons from "./GameButtons/GamesButtons"
import GameResult from "./GameResult/GameResult"
import ScoreBoard from "./ScoreBoard/ScoreBoard";

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
const DEFAULT_USERNAME = "Player";

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
  isPlayed: boolean;
  player1Action: Action;
  player2Action: Action;
  result: Result;
  username: string;
  score: number;
}

interface Storge {
  username: string;
  score: number;
}

function getStorge(): Storge {
  const scoreStr = window.localStorage.getItem("score");
  const score = scoreStr === null ? 0 : Number(scoreStr);

  const username = window.localStorage.getItem("username") ?? DEFAULT_USERNAME;

  return {username: username, score} ;
}

function setStorge(newUsername: string, newScore: number) {
  window.localStorage.setItem("score", newScore.toString());
  window.localStorage.setItem("username", newUsername);
}

function GameArea() {
  const storge = getStorge();

  const [gameState, setGameState] = useState<GameState>({
    isPlayed: false,
    player1Action: Action.Rock,
    player2Action: Action.Rock,
    result: Result.Tie,
    username: storge.username,
    score: storge.score,
  })

  const buttonHandler = (event: React.MouseEvent<HTMLElement>) => {
    const ActionType = event.currentTarget.getAttribute("data-action-type");
    if (ActionType === null) {
      console.error("Cannot find the attribute `data-action-type`");
      return
    }
    const player1Action = Number(ActionType) as Action
    const player2Action = getRandomAction();
    const result = judge(player1Action, player2Action)
    const newScore =
      result === Result.Win ?
      gameState.score + 1 :
      result === Result.Lose ?
      gameState.score - 1 :
      gameState.score;
    
    setGameState((state) =>({
      ...state,
      isPlayed: true,
      player1Action: player1Action,
      player2Action: player2Action,
      result:result,
      score: newScore,
    }))

    setStorge(gameState.username, newScore);
  }

  const resetGameState = () => {
    const defaultGameState = {
      isPlayed: false,
      player1Action: Action.Rock,
      player2Action: Action.Rock,
      result: Result.Tie,
      username: DEFAULT_USERNAME,
      score: 0,
    }

    setGameState(() => defaultGameState)
    setStorge(defaultGameState.username, defaultGameState.score);
  }

  const updateUsername = (newUsername: string) => {
    setGameState((state) =>({
      ...state,
      username: newUsername,
    }))

    setStorge(newUsername, gameState.score);
  }

  return (
      <>
        <GameResult gameState={gameState}/>
        <GameButtons actions={ACTIONS} onClick={buttonHandler}/>
        <ScoreBoard
          gameState={gameState}
          updateUsername={updateUsername}
          resetHandler={resetGameState}
        />
      </>
    )
}

export default GameArea