import React from 'react';
import { STAGE } from '../../../types/stage.types';
import Cell from '../Cell';
import StyledStage from "./Stage.styles";

type Props = {
  stage: STAGE
}

const Stage: React.FC<Props> = ({stage}) => {
  return (
    <StyledStage>
      {stage.map((row) => row.map((cell, x) => <Cell key={x} type={cell[0]} />))}
    </StyledStage>
  )
}

export default Stage