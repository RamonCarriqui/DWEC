const onScroll = () => {

    if (document.body.scrollHeight - window.innerHeight === window.scrollY) {
   
      // AQUI PODEMOS LANZAR LA PETICIÓN AJAX
   
      console.log('estoy en el final del scroll')
   
   }}
   
   window.addEventListener('scroll', onScroll) // llamamos a onScroll cuando el usuario hace scroll