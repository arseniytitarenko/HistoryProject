import { Leader, LeaderInfo } from "./Leader";

export interface BlockProps {
    title: string
    leaders: LeaderInfo[]
}

export const Block = (props: BlockProps) => {
    return <div className="container">
        <h1>{props.title}</h1>
        <div className="leaders">
        {props.leaders.map((v, i) => <Leader key={i} {...v}/>)}
        </div>
    </div>
}
