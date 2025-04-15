
# slots1 = [[10,50],[60,120],[140,210]]
# slots2 = [[0,15],[60,70]]
# duration = 12

# i=0
# j=0
# while i < len(slots1) and j<len(slots2):
#     end=min(slots1[i][1],slots2[j][1])
#     start=max(slots1[i][0],slots2[j][0])
#     if end-start>=duration:
#         return [start,start+duration]
#     if slots1[i][1]<slots2[j][1]:
#         i+=1
#     else:
#         j+=1
        
# else:
#     print([])