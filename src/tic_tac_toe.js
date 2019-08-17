import R from 'ramda'

const mapIndexed = R.addIndex(R.map);

export class TicTacToe {
  constructor(fields, width, currentPlayer = 'X') {
    this.fields = fields;
    this.width = width;
    this.currentPlayer = currentPlayer;
  };

  static newEmpty(width) {
    return new TicTacToe(Array(width ** 2).fill(" "), width);
  }

  toString() { return this.fields.join('') };

  winner() {
    return R.union(
      this.rows().map(r => (new Line(r)).winner()),
      this.cols().map(c => (new Line(c)).winner())
    ).filter(
      symbol => symbol != ' '
    )[0] || false;
  }

  oppositePlayer() {
    return this.currentPlayer === 'X' ? 'O' : 'X';
  }

  mark(cellNr) {
    if (R.nth(cellNr, this.fields) !== ' ') return this;

    let foo =  new TicTacToe(
      R.update(cellNr, this.currentPlayer, this.fields),
      this.width,
      this.oppositePlayer()
    );
    return foo;
  }

  rows() {
    return R.splitEvery(this.width, this.fields);
  }

  cols() {
    return R.transpose(this.rows());
  }

}

export class Line {
  constructor(fields) {
    this.fields = fields;
  }

  winner() {
    return this.fields.every(f => f === this.fields[0])
      ? this.fields[0]
      : ' ';
  }
}