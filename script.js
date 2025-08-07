window.generatePDF = () => {
  const { jsPDF } = window.jspdf; 

  const doc = new jsPDF();

  const kunde = document.getElementById("kunde").value;

  doc.setFontSize(12);
  
  doc.text(`Kunde: ${kunde}`, 20, 40);
};