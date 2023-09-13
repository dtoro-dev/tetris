import { TETROMINOS } from "../helpers/setup";

export type STAGECELL = [keyof typeof TETROMINOS, string];
export type STAGE = STAGECELL[][];