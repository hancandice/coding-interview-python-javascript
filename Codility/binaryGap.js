// Can write to stdout for debudding
// e.g. console.log("this is a debug message")

function solution(N) {
  const binary = N.toString(2);
  const gapSet = new Set();
  let gapLength = 0;
  for (let i = 0; i < binary.length; i++) {
    const now = binary[i];
    const prev = binary[i - 1];
    if (now === "1" && prev === "0" && gapLength) {
      gapSet.add(gapLength);
      gapLength = 0;
    } else if (now === "1" && prev === "0" && !gapLength) {
      gapSet.add(gapLength);
      gapLength = 0;
    } else if (now === "0") {
      gapLength++;
    }
  }
  return gapSet.size ? Math.max(...gapSet) : 0;
}

// # 2.

function solution(N) {
  const binary = N.toString(2);
  const trimmed = binary.substr(0, binary.lastIndexOf("1") + 1);
  return Math.max(...trimmed.split("1").map((item) => item.length));
}

// Done
