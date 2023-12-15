import './leader.css';

export interface LeaderInfo {
    name: string
    image: string
    years: string
    info: string[]
}

export const Leader = (props: LeaderInfo) => {
    console.log(`${props.image}` === props.image)
    const photo = require(`${props.image}`)
    // const photo = require(props.image)

    return <div className="leader">
        <img src={photo} alt={props.name} className="leader-image" />
        <div className="leader-name">{props.name}</div>
        <div className="leader-years">{props.years}</div>
        <div className="leader-info">
            <ul>
                {
                    props.info.map((v, i) => <li key={i}>{v}</li>)
                }
            </ul>
        </div>
    </div>
}

