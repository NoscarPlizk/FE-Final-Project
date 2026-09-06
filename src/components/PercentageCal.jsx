export default function PercentageCal({ CurReadBookPage, MaxBookPage }) {
  const NUM = CurReadBookPage / MaxBookPage;

  const current = Number(CurReadBookPage);
  const maximum = Number(MaxBookPage);

  const currentIsMissing = 
    CurReadBookPage === "" ||
    CurReadBookPage === null ||
    CurReadBookPage === undefined;


  const maximumIsMissing =
    MaxBookPage === "" ||
    MaxBookPage === null ||
    MaxBookPage === undefined;

  return (
    <div>
      { ((currentIsMissing || current === 0) && (maximumIsMissing || maximum === 0)) ? 
        '0' 
      : (!Number.isFinite(current) || !Number.isFinite(maximum)) ?
        <div>Invalid page value</div>
      : (current > 0 && (maximumIsMissing || maximum === 0)) ? 
        <div>Require Maximum Page Value</div> 
      : (current > 0 && maximum !== 0) ? 
        <div>{(NUM * 100).toFixed(2)} %</div> 
      : 0 
      } 
    </div>
  )
}