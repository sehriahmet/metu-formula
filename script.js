function feature(e, featureClassName) {
    var element = document.getElementsByClassName('tab-item');
    for (var i = 0; i < element.length; i++) {
      var shouldBeActive = element[i].classList.contains(featureClassName);
      element[i].classList.toggle('active', shouldBeActive);
    }
}

