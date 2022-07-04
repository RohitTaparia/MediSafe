import React, { useState } from "react";
import MyMedsHeader from "./MyMedsHeader";
import MedsForm from "./MedsForm";
import MyMedCards from "./MyMedCards";
import Copyrights from "../Homepage/Copyrights";
const MyMeds = () => {
  const [key, incrementKey] = useState(3);
  const [Medicines, addMedicine] = useState([
    {
      key: 0,
      medicineName: "Paracetamol",
      Quantity: 30,
      Morning: true,
      Afternoon: true,
      Night: true,
    },
    {
      key: 1,
      medicineName: "Citrezine",
      Quantity: 15,
      Morning: true,
      Afternoon: false,
      Night: false,
    },
    {
      key: 2,
      medicineName: "Crocin",
      Quantity: 5,
      Morning: false,
      Afternoon: false,
      Night: true,
    },
  ]);
  const addMedicneCard = (newMedicine) => {

    var finalDetail = { key, ...newMedicine };
    
    incrementKey(key + 1);
    addMedicine([...Medicines, finalDetail]);
  };
  const deleteMedicine = (Name) => {
  addMedicine(Medicines.filter((medicine) => Name !== medicine.medicineName));
  };
  return (
    <div className="meds-page">
      <MyMedsHeader />
      <MedsForm addDetails={addMedicneCard} />
      <MyMedCards Medicines={Medicines} onDelete={deleteMedicine} />
      <Copyrights />
    </div>
  );
};

export default MyMeds;
