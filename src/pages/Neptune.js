import Layout from '../components/Layout'
import Model from '../components/models/Neptune'

function Page() {
  return (
    <Layout model={<Model />} modelOffset={[0, 6, 0]}>
      <h1>Neptune</h1>
      <p>
        One of the four groups commissioned in 1698 by Jules Hardouin-Mansart (1646-1708), Superintendent of the King's Buildings, for the Rivière du parc de Marly with La Seine (MR 1825), La Marne (RF 3007 ) and its pendant Neptune ( RF 3006). Models executed in 1698-1699. Casting of the plaster models carried out in 1699 on the locations provided for the marbles. Execution started once Mercury (MR 1822) and La Renommée (MR 1824) were completed, and executed in marble from 1703 to 1708 (according to the inventory of the royal collections of 1707, executed in 1705). Perfect payment, April 18, 1712.
      </p>
      <p>
        Intended by Alexandre Lenoir for the Museum of French Monuments, October 12, 1796 but deposited in the gardens of the Legislative Body (current Palais-Bourbon). Paris, Parc Monceau, 1800.
      </p>
      <p>
        Deposited with the City of Brest and assigned after September 1801 to the decoration of the Neptune fountain on the Cours Dajot. Listed as a historic monument by decree of May 15, 1909. Sheltered in the Château de Kerjean (Nord-Finistère) from 1940 to 1953, then stored in the Château de Champs-sur-Marne (Seine-et-Marne). Transferred to the Louvre on September 27, 1966 and inventoried for regularization in 1971.
      </p>
    </Layout>
  )
}

export default Page;