from bing_image_downloader import downloader
import json

olddata = open("aircraftsDatabase.json", "r")
newdata = json.loads(olddata.read())
olddata.close()

manufacturerList = []

for key in newdata.keys():
    manufacturerList.append(newdata[key]["Model"])

manufacturerList = list(set(manufacturerList))

for manufacturer in manufacturerList:
    print("Downloading for", manufacturer)
    downloader.download(
        f"{manufacturer}",
        limit=1,
        output_dir=f"AircraftImage/",
        adult_filter_off=True,
        force_replace=False,
        timeout=60,
        verbose=True,
    )

# manufacturer = "Mil Moscow Helicopter Plant"
# downloader.download(
#     f"{manufacturer} logo transparent",
#     limit=1,
#     output_dir=f"manufacturer_logo/{manufacturer}",
#     adult_filter_off=True,
#     force_replace=False,
#     timeout=60,
#     verbose=True,
# )
