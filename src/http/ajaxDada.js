 function ajaxDada(response) {
  if(response.data.res === 0 ){
      alert(response.data.err)
  }
}
export default ajaxDada;
