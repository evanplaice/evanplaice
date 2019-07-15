function Enum(name, obj) {
  return new Proxy(obj, {
    get: (target, key) => {
      if (target[key]) { return target[key] }
      
      throw Error(`Key: ${key} does not exist on ${name || 'enum'}`);
    }
  });
}

const Detonator = Enum('Detonator', {
  timed: 1,
  remote: 2,
  manual: 3
});


function doEvil({bomb, location, type}) {
  switch(type) {
    case Detonator.timed:
      console.log('timed detonation');
      break;
    case Detonator.remote:
      console.log('remote detonation');
      break;
    case Detonator.manual:
      console.log('manual detonation');
      break;
  }
}

doEvil({ bomb: 'snuke', location: 'snizz', type: Detonator.invalid });
