import React from "react";
import { TETROMINOS } from "../../../helpers/setup";
import StyledCell from "./Cell.styles";

type Props = {
  type: keyof typeof TETROMINOS;
};

const Cell: React.FC<Props> = ({ type }) => <StyledCell type={type} color={TETROMINOS[type].color} />;

export default React.memo(Cell);

