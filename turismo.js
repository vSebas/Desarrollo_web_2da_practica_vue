var visitados = new Vue({
    el: '#visitados',
    data: {
        show: false,
        destino_link: 'Ingresa tus pasatiempos',
        lista_destinos: [ ]
    },
    methods: {
        add() {
          var nuevo_destino = this.destino_link;
          this.lista_destinos.push({texto: nuevo_destino});
          this.destino_link = '';
        },
      }
  });