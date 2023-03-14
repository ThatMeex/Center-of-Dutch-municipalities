const fs = require('fs');
const turf = require("@turf/turf");
const json = require("./municipalities.json");

const municipalities = json.features.map(feature => {
  const center = turf.centerOfMass(feature)
  const properties = feature.properties
  const [lat, lon] = center.geometry.coordinates.reverse()
  return {
    id: properties.identificatie,
    name: properties.naam,
    code: properties.code,
    province: properties.ligt_in_provincie_naam,
    province_code: properties.ligt_in_provincie_code,
    center: {lat: lat, lon: lon}
  }
});

const sorted = [...municipalities].sort((a, b) => a.name.localeCompare(b.name, 'nl'));
const sorted_province = [...sorted].sort((a, b) => a.province.localeCompare(b.province, 'nl'));

fs.writeFileSync('dist/center_municipalities.json', JSON.stringify(municipalities, null, 2));
fs.writeFileSync('dist/center_municipalities_sorted.json', JSON.stringify(sorted, null, 2));
fs.writeFileSync('dist/center_municipalities_sorted_province.json', JSON.stringify(sorted_province, null, 2));