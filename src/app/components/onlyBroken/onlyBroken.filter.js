export function onlyBroken() {
  return function (links, onlyBroken) {

    if(!onlyBroken){
      return links
    }
    var filtered = [];

    links.forEach(function(link){
      if(link.status != 200){
        filtered.push(link);
      }
    });


    return filtered;
  };
}
