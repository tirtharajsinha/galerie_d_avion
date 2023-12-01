from bs4 import BeautifulSoup
import requests
import re
import sys
import os
import http.cookiejar
import json
import urllib.request, urllib.error, urllib.parse


def get_soup(url, header):
    return BeautifulSoup(
        urllib.request.urlopen(urllib.request.Request(url, headers=header)),
        "html.parser",
    )


def bing_image_search(query):
    query = query.split()
    query = "+".join(query)
    url = "http://www.bing.com/images/search?q=" + query + "&FORM=HDRSC2"

    # add the directory for your image here
    DIR = "Pictures"
    header = {
        "User-Agent": "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/43.0.2357.134 Safari/537.36"
    }
    soup = get_soup(url, header)
    image_result_raw = soup.find("a", {"class": "iusc"})

    m = json.loads(image_result_raw["m"])
    murl, turl = m["murl"], m["turl"]  # mobile image, desktop image

    image_name = urllib.parse.urlsplit(murl).path.split("/")[-1]
    return (image_name, murl, turl)


def getModelNames():
    f = open(r"aircraftsDatabase.json", "r")
    aircrafts = json.loads(f.read())
    f.close()

    images = {}

    opener = urllib.request.build_opener()
    opener.addheaders = [
        (
            "User-agent",
            "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/43.0.2357.134 Safari/537.36",
        )
    ]
    urllib.request.install_opener(opener)
    failed = []
    for index, aircraft in enumerate(aircrafts.keys()):
        print(index + 1, aircrafts[aircraft]["Model"])
        image_name, murl, turl = bing_image_search(aircrafts[aircraft]["Model"])
        try:
            print(murl)
            murl = murl.replace(" ", "%20")
            image_path = f"{aircraft}.{image_name.split('.')[-1]}"
            urllib.request.urlretrieve(murl, image_path)
            images[aircraft] = image_path
        except Exception as e:
            images[aircraft] = ""
            print(e)
            failed.append(murl)
    else:
        f = open(r"aircraftsImage.json", "w")
        f.write(json.dumps(images))

    print(failed)


if __name__ == "__main__":
    getModelNames()
