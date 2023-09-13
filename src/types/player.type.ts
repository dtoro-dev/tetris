export type PLAYER = {
  pos: {
    x: number,
    y: number
  },
  tetromino: (string | number)[][];
  collided: boolean;
}