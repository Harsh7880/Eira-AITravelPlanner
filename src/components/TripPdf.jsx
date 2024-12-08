import React from "react";
import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table";

import EiRa from "../assets/EiRa1.png";
import logo2 from "../assets/logo.jpg";
import { Link } from "react-router-dom";


const TripPdf = ({ trip }) => {
  const handleExportPdf = () => {
    const doc = new jsPDF();

    const tableHeaders = ["Location", "Description", "Charges"];
    const tableRows = [];

    trip?.tripData?.itinerary.forEach((item) => {
      item?.plan.forEach((ele) => {
        tableRows.push([
          ele.placeName || "N/A",
          ele.placeDetails || "N/A",
          ele.ticketPricing || "N/A",
        ]);
      });
    });

    // Add the title to the PDF
    doc.text(
      `${trip?.userSelection.noOfDays} Days trip for ${trip?.userSelection.location.label}`,
      10,
      10
    );

    // Generate the table using autoTable
    autoTable(doc, {
      head: [tableHeaders],
      body: tableRows,
      startY: 20,
    });

    // Save the PDF
    doc.save(`${trip?.userSelection.noOfDays}_days_trip_in_${trip?.userSelection.location.label}.pdf`);
  };

  return (
    trip && (
      <div>
        <button onClick={handleExportPdf}>Export PDF</button>
        <div className="flex my-5 items-start justify-center gap-3 w-40">
          <img
            className="border-2 border-[#21BCBE] h-12 w-12 rounded-full"
            src={logo2}
            alt="logo"
          />
          <Link to={"/"}>
            <img className="w-[80%]" src={EiRa} alt="logo" />
          </Link>
        </div>

        {trip?.tripData?.itinerary.map((item, index) => (
          <div className="my-4" key={index}>
            <div className="my-8">
              <h1 className="font-bold text-2xl">
                {trip?.userSelection.noOfDays} Days trip for{" "}
                {trip?.userSelection.location.label}
              </h1>
            </div>
            <h2 className="font-bold text-xl mb-3">Day {item.day}</h2>

            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[200px]">Location</TableHead>
                  <TableHead className="text-center">Description</TableHead>
                  <TableHead className="text-right w-[200px]">Charges</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {item?.plan.map((ele, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">
                      {ele.placeName}
                    </TableCell>
                    <TableCell className="text-center">
                      {ele.placeDetails}
                    </TableCell>
                    <TableCell className="text-right">
                      {ele.ticketPricing}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        ))}
      </div>
    )
  );
};

export default TripPdf;
