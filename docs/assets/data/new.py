import json


f = open("aircrafts.json", "r")
aircrafts = json.loads(f.read())
f.close()


f = open("aircrafts_info.json", "r")
aircraft_info = json.loads(f.read())
f.close()

for key in aircraft_info:
    aircraft_info[key]["Model"] = aircrafts[key]["Model"]
    aircraft_info[key]["Manufacturer"] = aircrafts[key]["Manufacturer"]
    aircraft_info[key]["WingType"] = aircrafts[key]["WingType"]
    aircraft_info[key]["Type"] = aircrafts[key]["Type"]


f = open("aircraftsDatabase.json", "w")
data = json.dumps(aircraft_info)
f.write(data)
f.close()
