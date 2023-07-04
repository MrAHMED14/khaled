const Modal = ({ setModelState, modelState, children }) => {
  return (
    <div className="mx-auto">
      <div
        className={`modal ${modelState ? "modal-open" : ""} backdrop-blur-sm`}
      >
        <div className="modal-box relative ">
          <label
            className="btn btn-sm btn-circle text-black absolute right-2 top-2 "
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
