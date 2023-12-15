import { Block, BlockProps } from "./Block"
import { NavBar } from "./NavBar";

export interface PageWithBlocksProps {
    blocks: BlockProps[]
}
export const PageWithBlocks: React.FC<PageWithBlocksProps> = (props) => {
    return <>
        <NavBar />
        {props.blocks.map((v, i) => <Block title={v.title} leaders={v.leaders} key={i} />)}
    </>
}