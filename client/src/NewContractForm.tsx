function NewContractForm() {
  return (
    <div className="contract">
      <h1> New Contract </h1>
      <label>
        Arbiter Address
        <input type="text" id="arbiter"/>
      </label>

      <label>
        Beneficiary Address
        <input type="text" id="beneficiary"/>
      </label>

      <label>
        Deposit Amount (in Wei)
        <input type="text" id="wei"/>
      </label>

      <div className="button" id="deploy">
        Deploy
      </div>
    </div>
  );
}

export default NewContractForm;
