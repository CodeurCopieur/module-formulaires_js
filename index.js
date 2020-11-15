//namespace shaker
var Shaker = (() => {
  var self = {};

  isEmail = function (email) {
    var re = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

    return re.test(email);
  }

  //Methode public car nous pouvons l'appeler de l'extérieur
  //Structure appeler le module parttern
  self.init = () => {
    //selectionner tous vos formulaires
    forms = Array.from(document.querySelectorAll('form'));

    forms.forEach( form => {
      form.addEventListener('submit', function(e){
        e.preventDefault();
        
        //pas de fonction fléchés sinon this ne fonctionne pas
        fields = Array.from(this.querySelectorAll('input'));

        errors = [];

        fields.forEach( field => {

          if(field.value.length <= 0 || field.type == 'email' && isEmail(field.value)) {
            field.classList.add('shake');
            field.addEventListener('animationend', function() {
              this.classList.remove('shake')
            });

            //errors.push({'erreur':true, 'champ': field}) impro
            errors.push(true);
          }
        });

        if(errors.indexOf(true) === -1) {
          alert('Succès !');
          this.submit();
        }

        /*
        if(errors.length == 0) {
          alert('succès');
          this.submit();
        }*/

      });
    });
  }

  return self;
})(); //closure qui s'appelle elle même ()
