import PropTypes from 'prop-types';
import clsx from 'clsx';
import statCss from './Statistics.module.css';

export function Statistics ({titel, data}) {
   return <>
    <section className={clsx(statCss.statistics)}>
        {titel  && <h2 className={clsx(statCss.title)}>{titel}</h2>}


        <ul className={clsx(statCss['stat-list'])}>
            { data.map(el => (
                <li key={el.id} className={clsx(statCss.item)}>
                    <span className={clsx(statCss.label)}>{el.label}</span>
                    <span className={clsx(statCss.percentage)}>{el.percentage}</span>
                </li>
            ))}
        </ul>
    </section>
</>
}

Statistics.propTypes = {
    titel: PropTypes.string,
    data: PropTypes.array
}