const destinos_a_futuro = Vue.createApp({
  data() {
    return {
      show: false,
    }
  }
});
destinos_a_futuro.mount('#futuro');

const lugares_deseados = Vue.createApp({
  data() {
    return {
      api: "https://pixabay.com/api/?key=5206310-93e843eee15324b4baeb12936",
      images: null,
      image_list: [],
      loading: false,
      deseado_link: '',
      lista_destinos_deseados: []
    }
  },
  mounted() {
    this.getImages();
  },
  methods: {
      add_n_search() {
        const nuevo_destino = this.deseado_link;
        this.lista_destinos_deseados.push(nuevo_destino);
        // If nuevo_destino is empty then do nothing
        if (!nuevo_destino && nuevo_destino == "") return;
        // Else make the REST API call with nuevo_destino
        this.getImages(nuevo_destino);
        // this.deseado_link = '';
     },
     getImages(key) {
      // If key has value then store it to query otherwise store an empty string
      const query = key ? `&q=${key}` : ``;
      // Sets loading value to true
      this.loading = true;
      // Making request to the REST API
       axios.get(this.api + query)
            .then((response) => {
             // Assigning server response data to images
            //  this.images = response.data.hits;
             this.images= response.data.hits;
             this.image_list.push(this.images[0]);
           })
           .catch((error) => console.log(error))
           .finally(() => {
             // Once the process is done sets the loading to false
             this.loading = false;
           });
    }
  }
});
lugares_deseados.mount('#deseados');

const visitados = Vue.createApp({
  data() {
    return {
      lugares_visitados : [{lugar: "Berlin", img:"https://dam.ngenespanol.com/wp-content/uploads/2021/09/GettyImages-870538650.jpg"},
                           {lugar: "Oaxaca", img:"https://imagenescityexpress.scdn6.secure.raxcdn.com/sites/default/files/2019-08/que-hacer-en-oaxaca-2.jpg"},
                           {lugar: "Mazatlán", img:"https://cloudfront-us-east-1.images.arcpublishing.com/infobae/JML4GK4R4JARBAQ3RK3P4JHBVY.jpg"}]
    }
  }
});
visitados.mount("#visitados");