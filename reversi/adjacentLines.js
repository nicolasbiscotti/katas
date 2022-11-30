class AdjacentLines {
  constructor(board) {
    this.rows = board.rows();
    this.cols = board.cols();
    this.boardLength = board.length();
  }

  rowToTheRigth(row, col) {
    let adjacentLine = "";
    while (col + 1 < this.boardLength) {
      adjacentLine += this.rows[row][++col];
    }
    return adjacentLine || null;
  }
  colunmToTheBottom(row, col) {
    let adjacentLine = "";
    while (row + 1 < this.boardLength) {
      adjacentLine += this.rows[++row][col];
    }
    return adjacentLine || null;
  }
  rowToTheLeft(row, col) {
    let adjacentLine = "";
    while (col - 1 >= 0) {
      adjacentLine += this.rows[row][--col];
    }
    return adjacentLine || null;
  }

  upColumn(row, col) {
    let adjacentLine = "";
    while (row - 1 >= 0) {
      adjacentLine += this.rows[--row][col];
    }
    return adjacentLine || null;
  }

  diagonalToTheRigthDow(row, col) {
    let adjacentLine = "";
    while (row + 1 < this.boardLength && col + 1 < this.boardLength) {
      adjacentLine += this.rows[++row][++col];
    }
    return adjacentLine || null;
  }

  digonalToTheLeftUp(row, col) {
    let adjacentLine = "";
    while (row - 1 >= 0 && col - 1 >= 0) {
      adjacentLine += this.rows[--row][--col];
    }
    return adjacentLine || null;
  }

  diagonalToTheLeftDown(row, col) {
    let adjacentLine = "";
    while (row + 1 < this.boardLength && col - 1 >= 0) {
      adjacentLine += this.rows[++row][--col];
    }
    return adjacentLine || null;
  }

  diagonalToTheRigthUp(row, col) {
    let adjacentLine = "";
    while (row - 1 >= 0 && col + 1 < this.boardLength) {
      adjacentLine += this.rows[--row][++col];
    }
    return adjacentLine || null;
  }

  getLinesFor(squarePosition) {
    const adjacentLines = [];

    const row = Math.floor(squarePosition / this.boardLength);
    const col = squarePosition % this.boardLength;

    adjacentLines.push(this.rowToTheRigth(row, col));
    adjacentLines.push(this.diagonalToTheRigthDow(row, col));
    adjacentLines.push(this.colunmToTheBottom(row, col));
    adjacentLines.push(this.diagonalToTheLeftDown(row, col));
    adjacentLines.push(this.rowToTheLeft(row, col));
    adjacentLines.push(this.digonalToTheLeftUp(row, col));
    adjacentLines.push(this.upColumn(row, col));
    adjacentLines.push(this.diagonalToTheRigthUp(row, col));

    return adjacentLines.filter((line) => line !== null);
  }
}

module.exports = AdjacentLines;
