class Solution:
    def isOneEditDistance(self, s: str, t: str) -> bool:
        if len(s)<len(t):
            return self.isOneEditDistance(s,t,s)
        m=len(s)
        n=len(t)
        for i,e in enumerate(t):
            if e!=s[i]:
                return t[i+1:] == s[i+1:] if (m==n) else  t[i:] == s[i+1:] 
        return m == n+1


