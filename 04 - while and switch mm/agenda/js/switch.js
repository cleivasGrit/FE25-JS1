const currentDay = 'sdfjlk';

switch(currentDay){
    case 'måndag':
        console.log('första dagen på veckan!');
        break;

    case 'tisdag':
        console.log('andra dagen');
        break;

    case 'onsdag':
        console.log('tredje dagen');
        break;

    case 'torsdag':
        console.log('fjärde dagen');
        break;

    case 'fredag':
        console.log('femte dagen');
        break;

    case 'lördag':
        console.log('sjätte dagen');
        break;

    case 'söndag':
        console.log('sjunde dagen');
        break;
}

// Logga alla återstående dagar på veckan
console.log('De dagar som återstår är ...');
switch(currentDay){
    case 'måndag':
        console.log('första dagen på veckan!');

    case 'tisdag':
        console.log('andra dagen');

    case 'onsdag':
        console.log('tredje dagen');

    case 'torsdag':
        console.log('fjärde dagen');

    case 'fredag':
        console.log('femte dagen');

    case 'lördag':
        console.log('sjätte dagen');

    case 'söndag':
        console.log('sjunde dagen');
    
    default:
        console.log('hmmm... den dagen finns inte.')
}