// backtracking
// ~ recursion

/* 
Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses. 
*/

class Solution {
    public List<String> generateParenthesis(int n) {
        List<String> ret = new ArrayList<>();
        process(ret);
        return ret;
    }
    public void process(int n, int numOpen, int numClosed, String str, List<String> ret){
        // termination check
        if(numOpen==n && numClosed==n){
            ret.add(str);
            return;
        }
        // recurse next
        if(numOpen < n){
            process(n, numOpen+1, numClosed, str+"(", ret); // add open bracket
        }
        if(numOpen > numClosed){
            process(n, numOpen, numClosed+1, str+")", ret); // add closed bracket
        }
    }
}
