export default function PercentageCal({ CurReadBookPage, MaxBookPage }) {
  const NUM = CurReadBookPage / MaxBookPage;

  return (
    <div>
      { NUM > 0 ? (NUM * 100).toFixed(2) : 0 } %
    </div>
  )
}