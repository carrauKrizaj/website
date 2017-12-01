import { t } from '../../../polyglot-modules/polyglot.js'
import Github from '../components/Github'

const data = [0, 1]
const items = [0, 1, 2, 3]

const DemocracyOs = () => (
  <div className='democracy-os-container'>
    <img src={t('aboutUs.democracyOs.img')} alt='Democracy OS logo' className='democracyOs-logo'/>
    <div>
      {data.map((i)=> {
        return <p key={i}>{t(`aboutUs.democracyOs.text.${i}`)}</p>
      })}
    </div>
    <ul className='democracy-os-list'>
      {items.map((i)=>{
        return <li key={i}>{t(`aboutUs.democracyOs.list.${i}`)}</li>
      })}
    </ul>
    <div className='buttons-container'>
      <button className='btn'>
        <Github />
        <span className='action-text'>{t('aboutUs.democracyOs.repo')}</span>
      </button>
      <button className='btn'>
        <span className='action-text'>{t('aboutUs.democracyOs.callToAction')}</span>
      </button>
    </div>
    <style jsx>{`
      .democracy-os-container {
        align-items: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding-bottom: 100px;
        padding-top: 100px;
      }
      .democracyOs-logo {
        margin-bottom: 38px;
      }
      p{
        font-size: 2rem;
        letter-spacing: 0.13rem;
        text-align: center;
      }
      p:nth-child(2) {
        margin: 40px 0;
      }
      .democracy-os-list {
        list-style: disc;
        font-size: 2.0rem;
        letter-spacing: 0.13rem;
      }
      .buttons-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        margin-top: 45px;
        width: 511px;
      }
      .btn {
        margin-top: -3px;
      }
      @media (max-width: 520px) {
        .buttons-container {
          flex-direction: column;
          width: 100%;
        }
        .buttons-container .btn:first-child {
          margin-bottom: 20px;
        }
      }
    `}</style>
  </div>
)

export default DemocracyOs