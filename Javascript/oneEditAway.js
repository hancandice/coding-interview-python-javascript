/*
1. if the strings are identical - return FALSE - zero edit
2. create character maps of both strings
3. check if each character are of same type and value - if they are not, increase the counter. if the counter is 2 or more, then return false.
4. return true
*/
// pig / pigs
// pig / iig
// pig / pi

const oneAway = (s1, s2) => {
  let edits = 1;
  let maxLen = Math.max(s1.length, s2.length);
  let diff = Math.abs(s1.length - s2.length);

  if (s1 === s2) return false;

  if (diff > edits) {
    return false;
  }

  for (let i = 0, j = 0; i < maxLen || j < maxLen; i++, j++) {
    let c1 = s1[i];
    let c2 = s2[j];
    if (c1 !== c2) {
      edits--;
      if (edits < 0) {
        return false;
      }
      if (c1 === s2[j + 1]) {
        j++;
      } else if (s1[i + 1] === c2) {
        i++;
      }
    }
  }
  return true;
};

const w1 = "pigs";
const w2 = "pigus";

console.log(oneAway(w1, w2));
