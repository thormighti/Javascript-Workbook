/**
 * The surface of the Earth is curved, and the distance between degrees of longitude
varies with latitude. As a result, finding the distance between two points on the surface
of the Earth is more complicated than simply using the Pythagorean theorem.
Let (t 1 , g 1 ) and (t 2 , g 2 ) be the latitude and longitude of two points on the Earth’s
surface. The distance between these points, following the surface of the Earth, in
kilometers is:
distance = 6371.01 × arccos(sin(t 1 ) × sin(t 2 ) + cos(t 1 ) × cos(t 2 ) × cos(g 1 − g 2 ))
The value 6371.01 in the previous equation wasn’t selected at random. It is
the average radius of the Earth in kilometers.
 */
//lets try using objects to solve it
//awesome
function to_rad(radian){
    return radian *(Math.PI/180);
}
const prompt = require("prompt-sync")();
const latitude = ({
    lat1 : prompt("input first latitude: "),
    lat2 : prompt("input second latitude: "),
});
const longitude = ({
    long1 : prompt("input first longitude: "),
    long2 : prompt("input second longitude: "),
});
console.log(to_rad(Math.sin(60)));
const distance = 6371.01 *( Math.acos(Math.sin(+to_rad(latitude.lat1)) * Math.sin(+to_rad(latitude.lat2)) + Math.cos(to_rad(latitude.lat1)) * +Math.cos(+to_rad(latitude.lat2))
* Math.cos(+to_rad(longitude.long1 - +longitude.long2))));
console.log("the distance between the two point  is : ", distance.toFixed(5));