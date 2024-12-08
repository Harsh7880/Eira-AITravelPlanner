import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";

/**
 * Custom hook for generating a PDF itinerary.
 * @returns {function} generatePdf - Function to generate PDF.
 */
const useGeneratePDF = () => {
  const generatePdf = (trip) => {
    console.log(trip)
    if (!trip || !trip?.userSelection) {
      console.error("Invalid trip data provided.");
      return;
    }
    console.log(trip)

    const doc = new jsPDF();

    // Add the title
    const title = `${trip?.userSelection.noOfDays} Days trip in ${trip?.userSelection.location.label}`;
    doc.setFontSize(18);
    doc.text(title, 10, 10);

    // Table structure
    const tableHeaders = ["Location", "Description", "Charges"];
    const tableRows = [];

    // Populate table rows from itinerary
    trip?.tripData?.itinerary.forEach((item) => {
      item?.plan.forEach((ele) => {
        tableRows.push([
          ele.placeName || "N/A",
          ele.placeDetails || "N/A",
          ele.ticketPricing || "N/A",
        ]);
      });
    });

    // Generate the table using autoTable
    autoTable(doc, {
      head: [tableHeaders],
      body: tableRows,
      startY: 20,
    });

    // Generate PDF file name dynamically
    const fileName = `${trip?.userSelection.noOfDays}_days_trip_in_${trip?.userSelection.location.label.replace(/\s+/g, "_")}.pdf`;

    // Save the PDF
    doc.save(fileName);
  };

  return { generatePdf };
};

export default useGeneratePDF;
