import React, { useEffect, useMemo, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'

const UseMemo = (props) => {

  const [n1, setN1] = useState(0);
  const [n2, setN2] = useState(0);
  const [n3, setN3] = useState(0);

  const sum = (a, b) => {
    const future = Date.now() + 1000
    while (Date.now() < future) { }
    return (a + b)
  }

  /* useState  + useEffect */
  const [result1, setResult1] = useState(0)
  useEffect(() => {
    setResult1(sum(n1, n2));
  }, [n1, n2])

  /* useMemo */
  const result2 = useMemo(() => sum(n1, n2), [n1, n2]);

  return (
    <div className="UseMemo">
      <PageTitle
        title="Hook UseMemo"
        subtitle="Retorna um valor memoizado!"
      />

      <div className="center">
        <input type="number" className="input" value={n1} onChange={e => setN1(+e.target.value)} />
        <input type="number" className="input" value={n2} onChange={e => setN2(+e.target.value)} />
        <input type="number" className="input" value={n3} onChange={e => setN3(+e.target.value)} />

        <div><span className="text">{result1}</span></div>
        <div><span className="text">{result2}</span></div>
      </div>
    </div>
  )
}

export default UseMemo
