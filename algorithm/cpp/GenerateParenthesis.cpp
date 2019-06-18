class Solution {
    public List<String> generateParenthesis(int n) {
        List<String> result = new ArrayList<>();
        generate(0, 0, new StringBuilder(), n, result);
        return result;
    }

    public static void generate(int left, int right, StringBuilder sb, int n, List<String> result) {
        //若该位置可以填左括号，则尝试选填左括号
        if (left < n) {
            sb.append("(");
            left++;
            generate(left, right, sb, n, result);
            sb.deleteCharAt(sb.length() - 1);
            left--;
        }
        // 若已经填的位置中，左括号大于右括号数，则该位置可以填右括号
        if (right < left) {
            sb.append(")");
            right++;
            generate(left, right, sb, n, result);
            sb.deleteCharAt(sb.length() - 1);
            right--;
        }
        //如果所有的位置都已经填好，则符合要求的结果
        if (left == right && left == n) {
            result.add(sb.toString());
        }
    }
}
