const Modal = ({ setModelState, modelState, children }) => {
  return (
    <div className="mx-auto">
      <div
        className={`modal ${modelState ? "modal-open" : ""} backdrop-blur-sm`}
      >
        <div className="modal-box relative ">
          <label
            className="btn btn-sm btn-circle bg-slate-900 hover:bg-slate-800 text-white absolute right-2 top-2 "
            onClick={() => setModelState(false)}
          >
            ✕
          </label>
          {children}
        </div>
      </div>
    </div>
  );
};
export default Modal;
