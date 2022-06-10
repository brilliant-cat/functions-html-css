const element = document.querySelector('select');
  const choices = new Choices(element, {
    // отключить поиск
    searchEnabled: false,
    // отключить сортировку
    shouldSort: false
  });
