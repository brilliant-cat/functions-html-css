// inputmask
var selector = document.querySelector("input[type='tel']");

var im = new Inputmask("+7(___) ___-__-__");
im.mask(selector);

// just-validate
new JustValidate('.section_form--group', {
  rules: {
    name: {
      required: true,
      minLength: 2,
      maxLength: 15
    },
    tel: {
      required: true,
      function: (name, value) => {
        const phone = selector.inputmask.unmaskedvalue()
        console.log(phone)
        return Number(phone) && phone.length === 10
      }
    },
    mail: {
      required: true,
      email: true
    },
  },
  messages: {
    name: {
      required: 'Как вас зовут?',
      minLength: 'Поле должно содержать не менее 2 символов',
      maxLength: 'Поле должно содержать не более 15 символов'
    },
    tel: {
      required: 'Укажите ваш телефон'
    },
    mail: {
      required: 'Укажите ваш e-mail'
    },
  },
  colorWrong: '#FF5C00'
});
