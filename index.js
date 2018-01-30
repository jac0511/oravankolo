import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const kurssi = {
    nimi: 'Half Stack -sovelluskehitys',
    osat: [
      {
        nimi: 'Reactin perusteet',
        tehtavia: 10
      },
      {
        nimi: 'Tiedonvälitys propseilla',
        tehtavia: 7
      },
      {
        nimi: 'Komponenttien tila',
        tehtavia: 14
      }
    ]
  }

  return (
    <div>
      <h1>{kurssi.nimi}
      {console.log(kurssi.nimi)}</h1>
      <p>{kurssi.osat[0].nimi}, {kurssi.osat[0].tehtavia} tehtävää </p>
      <p>{kurssi.osat[1].nimi}, {kurssi.osat[1].tehtavia} tehtävää </p>
      <p>{kurssi.osat[2].nimi}, {kurssi.osat[2].tehtavia} tehtävää </p>
      <p>Yhteensä {kurssi.osat[0].tehtavia + kurssi.osat[1].tehtavia+ kurssi.osat[2].tehtavia} tehtävää </p>
    </div>
  )
}

/*
const App = () => {
  const Otsikko = (props) => {
    return (
      <div>
        <h1>{props.kurssi}</h1>
      </div>
    )
  }
  const Sisalto = (props) => {
    return (
      <div>
        <Osa osa={osa1} tehtavia={tehtavia1}  />
        <Osa osa={osa2} tehtavia={tehtavia2}  />
        <Osa osa={osa3} tehtavia={tehtavia3} />
      </div>
    )
  }
  const Osa = (props) => {
    return (
      <div>
        <p>{props.osa}, {props.tehtavia} tehtävää</p>
      </div>
    )
  }
  const Yhteensa = (props) => {
    return (
      <div>
        <p>Yhteensä {tehtavia1+tehtavia2+tehtavia3} tehtävää</p>
      </div>
    )
  }
  const kurssi = 'Half Stack -sovelluskehitys'
  const osa1 = 'Reactin perusteet'
  const tehtavia1 = 10
  const osa2 = 'Tiedonvälitys propseilla'
  const tehtavia2 = 7
  const osa3 = 'Komponenttien tila'
  const tehtavia3 = 14

  return (
    <div>
      <Otsikko kurssi = {kurssi}/>
      <Sisalto  />
      <Yhteensa />
    </div>
  )
}

*/
ReactDOM.render(
  <App />,
  document.getElementById('root')
)