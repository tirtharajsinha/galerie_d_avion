import json


f = open("aircraft.json", "r")
data = json.loads(f.read())
f.close()

newdata = {}

for key in data["results"]:
    newdata[key["ICAOCode"]] = key


f = open("aircrafts.json", "w")
data = json.dumps(newdata)
f.write(data)
f.close()
