import styled from "styled-components";
import { STAGE_HEIGHT, STAGE_WIDTH } from "../../../helpers/setup";

const StyledStage = styled.div`
  display: grid;
  grid-template-columns: repeat(${STAGE_WIDTH}, 30px);
  grid-template-rows: repeat(${STAGE_HEIGHT}, 30px);
  grid-gap: 1px;
  border: 1px solid #777;
  background: #222;
`;

export default StyledStage;
