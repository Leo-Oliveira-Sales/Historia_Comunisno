with open('src/data/advancedInvestigationDatabase.ts', 'r', encoding='utf-8') as f:
    lines = f.readlines()

bt = chr(96)
for i in range(414, 503):
    if bt in lines[i]:
        print(f"Line {i+1}: {repr(lines[i])}")
