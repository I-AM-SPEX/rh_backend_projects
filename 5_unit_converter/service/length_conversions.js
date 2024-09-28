

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
            result = value  * 3218;
            break;
        case 'yd':
            result = value * 1094;
            break;
        case 'mi':
            result = value / 1.609;
            break;

    }
    console.log(result);
    console.log('killometer to');
} 


const convertFromInch = (data) => {
    const unit = date.unit;
    const value = Number(data.value);
    let result = '';

    switch(unit) {
        case 'mm':
            result = value * 25.4;
            break;
        case 'cm':
            result = value * 2.54;
            break;
        case 'km':
            result = value /  39370;
            break;
        case 'foot':
            result = value / 12;
            break;
        case 'yd':
            result = value /36;
            break;
        case 'mi':
            result = value / 63360;
            break;


    }

    console.log(result);
    console.log('inch to');
}


const convertFromFoot = (data) => {
    const unit = data.unit;
    const value = Number(data.value);
    let result = '';

    switch(unit) {
        case 'mm':
            result = value * 305.8;
            break;
        case 'cm':
            result = value * 30.48;
            break;
        case 'km':
            result = value / 3281;
            break;
        case 'in':
            result = value * 12;
            break;
        case 'yd':
            result = value / 3;
            break;
        case 'mi':
            result = value / 5280;
            break;
    }

    console.log(result);
    console.log('foot to');
}


const covertFromYard = (data) => {
    const unit = data.unit;
    const value = Number(data.value);
    let result = '';

    switch(unit) {
        case 'mm':
            result = value * 914.4;
            break;
        case 'cm':
            result = value * 91.44;
            break;
        case 'km':
            result = value * 1094;
            break;
        case 'in':
            result = value * 36;
            break;
        case 'foot':
            result = value * 3;
            break;
        case 'mi':
            result = value / 1760;
            break;

    }

    console.log(result);
    console.log('yard to');
}


