import * as Location from 'expo-location';

const tenMeterwithDegrees = 0.0001;

const getLocation = increment => { 
    return{
        timestamp:1000000,
        coords:{
            speed:0,
            heading:0,
            accuracy:5,
            altitudeAccuracy: 5,
            altitude: 5,
            latitude: 43.65120908027189 + increment * tenMeterwithDegrees, 
            longitude: -79.38660811720257 + increment * tenMeterwithDegrees


        }
    };
};

let counter = 0
setInterval(() => {
    Location.EventEmitter.emit('Expo.locationChanged', {
        watchId: Location._getCurrentWatchId(),
        location: getLocation(counter)
    })
    counter++
}, 1000);