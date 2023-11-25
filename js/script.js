// Función para ocultar todas las secciones de detalles de series
function hideAllSeriesDetails() {
    const seriesDetails = document.querySelectorAll(".serie-details");
    seriesDetails.forEach((detail) => {
      detail.style.display = "none";
    });
  }

  // Función para mostrar la serie seleccionada
  function showSelectedSeries(seriesId) {
    hideAllSeriesDetails();
    const selectedSeries = document.getElementById(seriesId);
    if (selectedSeries) {
      selectedSeries.style.display = "block";
    }
  }

  // Obtén el ancla de la URL para identificar la serie
  const anchor = window.location.hash.substr(1);
  if (anchor) {
    showSelectedSeries(anchor);
  }