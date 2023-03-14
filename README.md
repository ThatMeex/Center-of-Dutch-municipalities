# Center of current Dutch municipalities.

This repository provides the center coordinates of all current (as of March 14, 2023) Dutch municipalities. Additionally, the repository includes the code used to create the sorted JSON dataset and the input GeoJSON dataset.

## Data Source
The raw input dataset was obtained from the [Netherlands' Cadastre, Land Registry and Mapping Agency — Kadaster](https://www.kadaster.nl/) and is available in the form of a GeoPackage [here](https://service.pdok.nl/kadaster/bestuurlijkegebieden/atom/v1_0/bestuurlijke_gebieden.xml).<br>It contains information about the administrative boundaries of Dutch municipalities, including their boundaries, names, codes, and provinces.<br>The raw dataset in GeoJSON format can be found in [municipalities.json](municipalities.json).<br>Converted from GeoPackage to GeoJSON using the [GeoPackage Viewer](https://ngageoint.github.io/geopackage-viewer-js/) using the `gemeentegebied` feature table.

## Dataset
The dataset with the coordinates of the center of each municipality can be found in the form of multiple JSON files in the `/dist` directory.<br>
The center of each municipality has been calculated using the [`turf.centerOfMass()`](https://turfjs.org/docs/#centerOfMass) function.

Please note that the accuracy of these calculated centers cannot be guaranteed and it is recommended to verify the provided information.<br>
The dataset is licensed under the CC0 1.0 Universal license, which allows for free use, modification, and distribution of the dataset without attribution.

The resulting dataset contains the following information for each municipality:
```json
[
  {
    "id": "GM0603",
    "name": "Rijswijk",
    "code": "0603",
    "province": "Zuid-Holland",
    "province_code": "28",
    "center": {
      "lat": 52.03784680128222,
      "lon": 4.32715005533563
    }
  },
  {
    "id": "GM0014",
    "name": "Groningen",
    "code": "0014",
    "province": "Groningen",
    "province_code": "20",
    "center": {
      "lat": 53.21964381438178,
      "lon": 6.6291461212312885
    }
  },
  ...
]
```

## Examples
The dataset can be used for a variety of purposes, such as:

- Displaying the location of each municipality on a map or satellite imagery.
- Calculating the distances between municipalities using their center coordinates.
- Visualizing the geographic distribution of municipalities in the Netherlands.

## References

[Netherlands' Cadastre, Land Registry and Mapping Agency — Kadaster](https://www.kadaster.nl/)<br>
[Bestuurlijke Gebieden (EPSG:28992) Geopackage](https://service.pdok.nl/kadaster/bestuurlijkegebieden/atom/v1_0/bestuurlijke_gebieden.xml)<br>
[GeoPackage Viewer](https://ngageoint.github.io/geopackage-viewer-js/)<br>
[Turf.js](https://turfjs.org/)