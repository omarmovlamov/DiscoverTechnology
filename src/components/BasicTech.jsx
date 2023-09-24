import "../styles/basicTech.css";

function BasicTech() {
  return (
    <div className="basicTech">
      <div className="bt-title">
        <h5>Essential 8 Emerging Technologies</h5>
      </div>
      <div className="bt-content">
        <div className="bt-cItem">
          <p>
            With its ability to edit genetic material, CRISPR-Cas9 provides
            great advances in treating genetic diseases, increasing plant
            productivity and biotechnology.
          </p>
        </div>
        <div className="bt-cItem">
          <p>
            Private companies and space agencies are working on the discovery of
            new planets and the use of resources in space through manned and
            unmanned missions in space.
          </p>
        </div>
        <div className="bt-cItem">
          <p>
            Green energy sources such as solar energy, wind energy and energy
            storage technologies reduce environmental impacts by making energy
            production clean and sustainable.
          </p>
        </div>
      </div>
    </div>
  );
}

export default BasicTech;
