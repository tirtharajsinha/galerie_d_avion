import requests
import json
import os

headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.190 Safari/537.36"
}


f = open("aircrafts.json", "r")
aircrafts = json.loads(f.read())
f.close()

urls = []
for key in aircrafts.keys():
    urls.append(f"https://doc8643.com/get-aircraft/{key.lower()}")


newdata = {}
if os.path.isfile("aircraftsDatabase.json"):
    olddata = open("aircraftsDatabase.json", "r")
    newdata = json.loads(olddata.read())
    olddata.close()


count = 0
for url in urls:
    try:
        code = url.split("/")[-1].upper()
        print(code, "-> ", end="")

        if code in newdata.keys():
            print("Already present")
            continue

        response = requests.get(url, headers=headers)

        info = response.json()
        if len(info["aircraft"]) == 0:
            print("Not Found")
            continue
        newdata[code] = info["aircraft"][0]
        newdata[code][
            "image"
        ] = f"https://doc8643.com/static/img/aircraft/large/{code}.jpg"
        newdata[code][
            "image3d"
        ] = f"https://doc8643.com/static/img/aircraft/3D/{code}.jpg"
        newdata[code]["Model"] = aircrafts[code]["Model"]
        newdata[code]["Manufacturer"] = aircrafts[code]["Manufacturer"]
        newdata[code]["WingType"] = aircrafts[code]["WingType"]
        newdata[code]["Type"] = aircrafts[code]["Type"]
        print("done")
        count += 1
    except Exception as e:
        print("error", e)

f = open("aircraftsDatabase.json", "w")
f.write(json.dumps(newdata))
f.close()

print(f"\n\nTotal {count} new Aircraft info fetched")
