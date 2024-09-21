

const convertfromMillimeter = (data) => {
    const unit = data.unit;
    const value = Number(data.value);
    let result = '';
    switch (unit) {
        case 'cm':
            result = value / 10;
            break;
        case 'm':
            result = value / 1000;
            break;
        case 'km':
            result = value / 1000000;
            break;
        case 'in':
            result = value / 25.4;
            break;
        case 'foot':
            result = value / 304.8;
            break;
        case 'yd':
            result = value / 914.4;
            break


    }

    console.log(result);
    console.log('millimeter to ')

}



const convertFromCentimeter = (data) => {
    const unit = data.unit;
    const value = Number(data.value);
    let result = '';

    switch (unit) {
        case 'mm':
            result = value * 10;
            break;
        case 'm':
            result = value / 100;
            break;
        case 'km':
            result = value / 100000;
            break;
        case 'in':
            result = value / 2.54;
            break;
        case 'foot':
            result = value / 30.48;
            break;
        case 'yd':
            result = value / 91.44;
            break;
    }

    console.log(result)
    console.log('centimeter to ')
}


const convertFromMeter = (data) => {
    const unit = data.unit;
    const value = Number(data.value);
    let result = '';

    switch (unit) {
        case 'mm':
            result = value * 1000;
            break;
        case 'cm':
            result = value * 100;
            break;
        case 'km':
            result = value / 1000;
            break;
        case 'in':
            result = value * 39.37;
            break;
        case 'foot':
            result = value  * 3.281;
            break;
        case 'yd':
            result = value * 1.094;
            break;


    }

    console.log(result);
    console.log('meter to')
}

const convertFromKillometer = (data) => {
    const unit = data.unit;
    const value = Number(data.value);
    let result = '';

    switch (unit) {
        case 'mm':
            result = value * 1000000;
            break;
        case 'cm':
            result = value  * 100000;
            break;
        case 'in': 
            result = value  * 39370;
            break;
        case 'foot':
            result = value  * 
    }
} 