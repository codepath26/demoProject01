import ReactDOM from "react-dom";

function BackDrop({ onCloseModel }) {
  return (
    <div
      className="h-screen w-screen bg-black opacity-50 fixed  z-40"
      onClick={onCloseModel}
    />
  );
}
const ModelOverlay = ({ onCloseModel }) => {
  return (
    <>
      <div className="absolute min-h-[400px] rounded-md shadow-lg z-50 bg-white top-[50%] left-[50%] transition-transform -translate-x-[50%] -translate-y-[50%] pr-1 border rouded-xl p-2">
        <span
          onClick={onCloseModel}
          className="absolute top-1 right-2 text-lg font-bold  border rounded-full px-2 border-gray-500 hover:shadow-sm cursor-pointer"
        >
          X
        </span>
        <div className="flex flex-col p-2 ">
          <div className="mt-5">
            <span className="font-bold text-md">Company: </span> Geeksynergy
            Techanologies Pvt Ltd{" "}
          </div>
          <div className="mt-2">
            <span className="font-bold text-md">Address: </span> Sanjaynagar,
            Bengaluru-56
          </div>
          <div className="mt-2">
            <span className="font-bold text-md">Phone: </span> XXXXXXXXX09{" "}
          </div>
          <div className="mt-2">
            <span className="font-bold text-md">Email: </span> XXXXXX@gmail.com{" "}
          </div>
        </div>
      </div>
    </>
  );
};
const portalElement = document.getElementById("overlays");

function CompanyDetails({ onCloseModel }) {
  return (
    <>
      {ReactDOM.createPortal(
        <BackDrop onCloseModel={onCloseModel} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModelOverlay onCloseModel={onCloseModel} />,
        portalElement
      )}
    </>
  );
}

export default CompanyDetails;
