class Solution(object):
    def trap(self, height):
        res = 0
        stack=[]
        for h in height:
            while stack and stack[0] <= h:
                res += stack[0] - stack.pop()
            stack.append(h)
        while stack and len(stack) > 2:
            if stack[-1] > stack[-2]:
                res += stack[-1] - stack[-2]
                stack[-1], stack[-2] = stack[-2], stack[-1]
            stack.pop()
        return res