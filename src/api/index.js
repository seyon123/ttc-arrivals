import axios from "axios";

const api = "http://webservices.nextbus.com/service/publicJSONFeed?";
const agency = "ttc"


export const fetchBusLocation = async (route) => {
    let url = `${api}command=vehicleLocations&a=${agency}&r=${route}`;
    try {
        const{
            data: {vehicle},
        } = await axios.get(url);
        // console.log(vehicle)
        return vehicle
        
    } catch (error) {
        return error;
    }
};

export const fetchRouteStops = async (route) => {
    let url = `${api}command=routeConfig&a=${agency}&r=${route}`;
    try {
        const{
            data: {route: {stop}},
        } = await axios.get(url);
        // console.log(stop)

        return stop
        
    } catch (error) {
        return error;
    }
};

export const fetchStopTimes = async (route, stopId) => {
    let url = `${api}command=predictions&a=${agency}&r=${route}&stopId=${stopId}`;
    try {
        const{
            data: {predictions: {direction}},
        } = await axios.get(url);
        // console.log(url)
        // console.log(direction)

        return direction
        
    } catch (error) {
        return error;
    }
};


function sortFunction(a, b) {
    if (a[0] === b[0]) {
        return 0;
    }
    else {
        return (a[0] < b[0]) ? -1 : 1;
    }
}
// WIP
export const fetchRoutePath = async (routeNum) => {
 
    let url = `${api}command=routeConfig&a=${agency}&r=${routeNum}`;
    try {
        const{
            data: {route},
        } = await axios.get(url);

        // let routepath = [];

        // if(route.path?.length > 0){
        //     route.path.map(({point}) => (
        //         point.map((p) => (
        //             routepath.push([Number(p.lon), Number(p.lat)])
        //         ))
        //     ))
        // }
        console.log(url)
        console.log(route.path);

        return route.path
        
    } catch (error) {
        return error;
    }
};